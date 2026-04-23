"use strict";
function r(e) {
    return "row" === e.type;
}
n.d(t, { A: () => i, o: () => r }), n(321073);
let i = class {
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
            footerHeight: r,
            listHeaderHeight: i,
            paddingTop: s,
            paddingBottom: a,
            sections: o,
            getAnchorId: l,
        } = e;
        (this.sections = o),
            (this.sectionHeight = t),
            (this.rowHeight = n),
            (this.footerHeight = r),
            (this.listHeaderHeight = i),
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
            r = n,
            i = n,
            s = 0,
            a = 0,
            o = [],
            l = (s) => (((i = n), (n += s) < e) ? ((r += s), !1) : !(i > t));
        l(this.getListHeaderHeight()) && o.push({ type: "header", section: -1, offsetTop: i });
        for (let e = 0; e < this.sections.length; e++) {
            let t = this.sections[e];
            if (0 !== t) {
                if (
                    (l(this.getHeightForSection(e)) &&
                        o.push({
                            type: "section",
                            section: e,
                            listIndex: a,
                            offsetTop: i,
                            anchorId: this.getAnchorId(e),
                        }),
                    (a += 1),
                    this.uniform)
                ) {
                    let n = this.getHeightForRow(e, 0);
                    for (let r = 0; r < t; r++)
                        l(n) &&
                            o.push({
                                type: "row",
                                section: e,
                                listIndex: a,
                                row: r,
                                rowIndex: s,
                                offsetTop: i,
                                anchorId: this.getAnchorId(e, r),
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
                                offsetTop: i,
                                anchorId: this.getAnchorId(e, n),
                            }),
                            (s += 1),
                            (a += 1);
                l(this.getHeightForFooter(e)) && o.push({ type: "footer", section: e, offsetTop: i });
            }
        }
        return { spacerTop: r, totalHeight: n + this.paddingBottom, items: o };
    }
    computeScrollPosition(e, t) {
        let { paddingTop: n } = this,
            r = n + this.getListHeaderHeight(),
            i = 0,
            s = !1;
        for (; i <= e; ) {
            let n = this.sections[i];
            if (i === e && null == t) {
                s = !0;
                break;
            }
            if (0 === n) {
                i += 1;
                continue;
            }
            if (((r += this.getHeightForSection(i)), this.uniform)) {
                let a = this.getHeightForRow(i, 0);
                i === e && null != t ? ((r += a * t), (s = !0)) : (r += a * n);
            } else
                for (let a = 0; a < n; a++)
                    if (i < e || (i === e && null != t && a < t)) r += this.getHeightForRow(i, a);
                    else if (i === e && null != t && a === t) {
                        s = !0;
                        break;
                    }
            s || (r += this.getHeightForFooter(i)), (i += 1);
        }
        return [r, null != t ? this.getHeightForRow(e, t) : this.getHeightForSection(i)];
    }
};
