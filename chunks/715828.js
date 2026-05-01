function i(e) {
    return "row" === e.type;
}
n.d(t, { A: () => a, o: () => i }), n(321073);
let a = class {
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
            listHeaderHeight: a,
            paddingTop: r,
            paddingBottom: s,
            sections: l,
            getAnchorId: o,
        } = e;
        (this.sections = l),
            (this.sectionHeight = t),
            (this.rowHeight = n),
            (this.footerHeight = i),
            (this.listHeaderHeight = a),
            (this.uniform = "number" == typeof n),
            (this.paddingTop = r),
            (this.paddingBottom = s),
            (this.getAnchorId = o ?? this.getAnchorId);
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
            a = n,
            r = 0,
            s = 0,
            l = [],
            o = (r) => (((a = n), (n += r) < e) ? ((i += r), !1) : !(a > t));
        o(this.getListHeaderHeight()) && l.push({ type: "header", section: -1, offsetTop: a });
        for (let e = 0; e < this.sections.length; e++) {
            let t = this.sections[e];
            if (0 !== t) {
                if (
                    (o(this.getHeightForSection(e)) &&
                        l.push({
                            type: "section",
                            section: e,
                            listIndex: s,
                            offsetTop: a,
                            anchorId: this.getAnchorId(e),
                        }),
                    (s += 1),
                    this.uniform)
                ) {
                    let n = this.getHeightForRow(e, 0);
                    for (let i = 0; i < t; i++)
                        o(n) &&
                            l.push({
                                type: "row",
                                section: e,
                                listIndex: s,
                                row: i,
                                rowIndex: r,
                                offsetTop: a,
                                anchorId: this.getAnchorId(e, i),
                            }),
                            (r += 1),
                            (s += 1);
                } else
                    for (let n = 0; n < t; n++)
                        o(this.getHeightForRow(e, n)) &&
                            l.push({
                                type: "row",
                                section: e,
                                listIndex: s,
                                row: n,
                                rowIndex: r,
                                offsetTop: a,
                                anchorId: this.getAnchorId(e, n),
                            }),
                            (r += 1),
                            (s += 1);
                o(this.getHeightForFooter(e)) && l.push({ type: "footer", section: e, offsetTop: a });
            }
        }
        return { spacerTop: i, totalHeight: n + this.paddingBottom, items: l };
    }
    computeScrollPosition(e, t) {
        let { paddingTop: n } = this,
            i = n + this.getListHeaderHeight(),
            a = 0,
            r = !1;
        for (; a <= e; ) {
            let n = this.sections[a];
            if (a === e && null == t) {
                r = !0;
                break;
            }
            if (0 === n) {
                a += 1;
                continue;
            }
            if (((i += this.getHeightForSection(a)), this.uniform)) {
                let s = this.getHeightForRow(a, 0);
                a === e && null != t ? ((i += s * t), (r = !0)) : (i += s * n);
            } else
                for (let s = 0; s < n; s++)
                    if (a < e || (a === e && null != t && s < t)) i += this.getHeightForRow(a, s);
                    else if (a === e && null != t && s === t) {
                        r = !0;
                        break;
                    }
            r || (i += this.getHeightForFooter(a)), (a += 1);
        }
        return [i, null != t ? this.getHeightForRow(e, t) : this.getHeightForSection(a)];
    }
};
