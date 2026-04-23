function i(e) {
    return "row" === e.type;
}
n.d(t, { A: () => r, o: () => i }), n(321073);
let r = class {
    sectionHeight = 0;
    rowHeight = 0;
    footerHeight = 0;
    listHeaderHeight = 0;
    uniform = !1;
    paddingBottom = 0;
    paddingTop = 0;
    sections = [];
    getAnchorId = () => void 0;
    mergeProps(e) {
        let {
            sectionHeight: t,
            rowHeight: n,
            footerHeight: i,
            listHeaderHeight: r,
            paddingTop: a,
            paddingBottom: s,
            sections: _,
            getAnchorId: l,
        } = e;
        (this.sections = _),
            (this.sectionHeight = t),
            (this.rowHeight = n),
            (this.footerHeight = i),
            (this.listHeaderHeight = r),
            (this.uniform = "number" == typeof n),
            (this.paddingTop = a),
            (this.paddingBottom = s),
            (this.getAnchorId = l ?? this.getAnchorId);
    }
    getHeight() {
        let e = this.paddingTop + this.getListHeaderHeight(),
            { length: t } = this.sections;
        for (let n = 0; n < t; n++) {
            if (((e += this.getHeightForSection(n)), this.uniform)) e += this.sections[n] * this.getHeightForRow(n, 0);
            else for (let t = 0; t < this.sections[n]; t++) e += this.getHeightForRow(n, t);
            e += this.getHeightForFooter(n);
        }
        return e + this.paddingBottom;
    }
    getHeightForSection(e) {
        let { sectionHeight: t } = this;
        return "number" == typeof t ? t : t(e);
    }
    getHeightForRow(e, t) {
        let { rowHeight: n } = this;
        return "number" == typeof n ? n : n(e, t);
    }
    getHeightForFooter(e) {
        let { footerHeight: t } = this;
        return null == t ? 0 : "number" == typeof t ? t : t(e);
    }
    getListHeaderHeight() {
        let { listHeaderHeight: e } = this;
        return null == e ? 0 : "number" == typeof e ? e : e();
    }
    compute(e, t) {
        let n = this.paddingTop,
            i = n,
            r = n,
            a = 0,
            s = 0,
            _ = [],
            l = (a) => (((r = n), (n += a) < e) ? ((i += a), !1) : !(r > t));
        l(this.getListHeaderHeight()) && _.push({ type: "header", section: -1, offsetTop: r });
        for (let e = 0; e < this.sections.length; e++) {
            let t = this.sections[e];
            if (0 !== t) {
                if (
                    (l(this.getHeightForSection(e)) &&
                        _.push({
                            type: "section",
                            section: e,
                            listIndex: s,
                            offsetTop: r,
                            anchorId: this.getAnchorId(e),
                        }),
                    (s += 1),
                    this.uniform)
                ) {
                    let n = this.getHeightForRow(e, 0);
                    for (let i = 0; i < t; i++)
                        l(n) &&
                            _.push({
                                type: "row",
                                section: e,
                                listIndex: s,
                                row: i,
                                rowIndex: a,
                                offsetTop: r,
                                anchorId: this.getAnchorId(e, i),
                            }),
                            (a += 1),
                            (s += 1);
                } else
                    for (let n = 0; n < t; n++)
                        l(this.getHeightForRow(e, n)) &&
                            _.push({
                                type: "row",
                                section: e,
                                listIndex: s,
                                row: n,
                                rowIndex: a,
                                offsetTop: r,
                                anchorId: this.getAnchorId(e, n),
                            }),
                            (a += 1),
                            (s += 1);
                l(this.getHeightForFooter(e)) && _.push({ type: "footer", section: e, offsetTop: r });
            }
        }
        return { spacerTop: i, totalHeight: n + this.paddingBottom, items: _ };
    }
    computeScrollPosition(e, t) {
        let { paddingTop: n } = this,
            i = n + this.getListHeaderHeight(),
            r = 0,
            a = !1;
        for (; r <= e; ) {
            let n = this.sections[r];
            if (r === e && null == t) {
                a = !0;
                break;
            }
            if (0 === n) {
                r += 1;
                continue;
            }
            if (((i += this.getHeightForSection(r)), this.uniform)) {
                let s = this.getHeightForRow(r, 0);
                r === e && null != t ? ((i += s * t), (a = !0)) : (i += s * n);
            } else
                for (let s = 0; s < n; s++)
                    if (r < e || (r === e && null != t && s < t)) i += this.getHeightForRow(r, s);
                    else if (r === e && null != t && s === t) {
                        a = !0;
                        break;
                    }
            a || (i += this.getHeightForFooter(r)), (r += 1);
        }
        return [i, null != t ? this.getHeightForRow(e, t) : this.getHeightForSection(r)];
    }
};
