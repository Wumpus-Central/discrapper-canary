"use strict";
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
            paddingTop: s,
            paddingBottom: a,
            sections: o,
            getAnchorId: l,
        } = e;
        (this.sections = o),
            (this.sectionHeight = t),
            (this.rowHeight = n),
            (this.footerHeight = i),
            (this.listHeaderHeight = r),
            (this.uniform = "number" == typeof n),
            (this.paddingTop = s),
            (this.paddingBottom = a),
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
            s = 0,
            a = 0,
            o = [],
            l = (s) => (((r = n), (n += s) < e) ? ((i += s), !1) : !(r > t));
        l(this.getListHeaderHeight()) && o.push({ type: "header", section: -1, offsetTop: r });
        for (let e = 0; e < this.sections.length; e++) {
            let t = this.sections[e];
            if (0 !== t) {
                if (
                    (l(this.getHeightForSection(e)) &&
                        o.push({
                            type: "section",
                            section: e,
                            listIndex: a,
                            offsetTop: r,
                            anchorId: this.getAnchorId(e),
                        }),
                    (a += 1),
                    this.uniform)
                ) {
                    let n = this.getHeightForRow(e, 0);
                    for (let i = 0; i < t; i++)
                        l(n) &&
                            o.push({
                                type: "row",
                                section: e,
                                listIndex: a,
                                row: i,
                                rowIndex: s,
                                offsetTop: r,
                                anchorId: this.getAnchorId(e, i),
                            }),
                            (s += 1),
                            (a += 1);
                } else
                    for (let n = 0; n < t; n++)
                        l(this.getHeightForRow(e, n)) &&
                            o.push({
                                type: "row",
                                section: e,
                                listIndex: a,
                                row: n,
                                rowIndex: s,
                                offsetTop: r,
                                anchorId: this.getAnchorId(e, n),
                            }),
                            (s += 1),
                            (a += 1);
                l(this.getHeightForFooter(e)) && o.push({ type: "footer", section: e, offsetTop: r });
            }
        }
        return { spacerTop: i, totalHeight: n + this.paddingBottom, items: o };
    }
    computeScrollPosition(e, t) {
        let { paddingTop: n } = this,
            i = n + this.getListHeaderHeight(),
            r = 0,
            s = !1;
        for (; r <= e; ) {
            let n = this.sections[r];
            if (r === e && null == t) {
                s = !0;
                break;
            }
            if (0 === n) {
                r += 1;
                continue;
            }
            if (((i += this.getHeightForSection(r)), this.uniform)) {
                let a = this.getHeightForRow(r, 0);
                r === e && null != t ? ((i += a * t), (s = !0)) : (i += a * n);
            } else
                for (let a = 0; a < n; a++)
                    if (r < e || (r === e && null != t && a < t)) i += this.getHeightForRow(r, a);
                    else if (r === e && null != t && a === t) {
                        s = !0;
                        break;
                    }
            s || (i += this.getHeightForFooter(r)), (r += 1);
        }
        return [i, null != t ? this.getHeightForRow(e, t) : this.getHeightForSection(r)];
    }
};
