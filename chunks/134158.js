r.d(n, {
    o: function () {
        return o;
    }
});
var i = r(653041);
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function o(e) {
    return 'row' === e.type;
}
class s {
    mergeProps(e) {
        let { sectionHeight: n, rowHeight: r, footerHeight: i, listHeaderHeight: a, paddingTop: o, paddingBottom: s, sections: l, getAnchorId: u } = e;
        (this.sections = l), (this.sectionHeight = n), (this.rowHeight = r), (this.footerHeight = i), (this.listHeaderHeight = a), (this.uniform = 'number' == typeof r), (this.paddingTop = o), (this.paddingBottom = s), (this.getAnchorId = null != u ? u : this.getAnchorId);
    }
    getHeight() {
        let e = this.paddingTop + this.getListHeaderHeight(),
            { length: n } = this.sections;
        for (let r = 0; r < n; r++) {
            if (((e += this.getHeightForSection(r)), this.uniform)) e += this.sections[r] * this.getHeightForRow(r, 0);
            else for (let n = 0; n < this.sections[r]; n++) e += this.getHeightForRow(r, n);
            e += this.getHeightForFooter(r);
        }
        return e + this.paddingBottom;
    }
    getHeightForSection(e) {
        let { sectionHeight: n } = this;
        return 'number' == typeof n ? n : n(e);
    }
    getHeightForRow(e, n) {
        let { rowHeight: r } = this;
        return 'number' == typeof r ? r : r(e, n);
    }
    getHeightForFooter(e) {
        let { footerHeight: n } = this;
        return null == n ? 0 : 'number' == typeof n ? n : n(e);
    }
    getListHeaderHeight() {
        let { listHeaderHeight: e } = this;
        return null == e ? 0 : 'number' == typeof e ? e : e();
    }
    compute(e, n) {
        let r = this.paddingTop,
            i = r,
            a = r,
            o = 0,
            s = 0,
            l = [],
            u = (o) => (((a = r), (r += o) < e) ? ((i += o), !1) : !(a > n) && !0);
        u(this.getListHeaderHeight()) &&
            l.push({
                type: 'header',
                section: -1,
                offsetTop: a
            });
        for (let e = 0; e < this.sections.length; e++) {
            let n = this.sections[e];
            if (0 !== n) {
                if (
                    (u(this.getHeightForSection(e)) &&
                        l.push({
                            type: 'section',
                            section: e,
                            listIndex: s,
                            offsetTop: a,
                            anchorId: this.getAnchorId(e)
                        }),
                    (s += 1),
                    this.uniform)
                ) {
                    let r = this.getHeightForRow(e, 0);
                    for (let i = 0; i < n; i++)
                        u(r) &&
                            l.push({
                                type: 'row',
                                section: e,
                                listIndex: s,
                                row: i,
                                rowIndex: o,
                                offsetTop: a,
                                anchorId: this.getAnchorId(e, i)
                            }),
                            (o += 1),
                            (s += 1);
                } else
                    for (let r = 0; r < n; r++)
                        u(this.getHeightForRow(e, r)) &&
                            l.push({
                                type: 'row',
                                section: e,
                                listIndex: s,
                                row: r,
                                rowIndex: o,
                                offsetTop: a,
                                anchorId: this.getAnchorId(e, r)
                            }),
                            (o += 1),
                            (s += 1);
                u(this.getHeightForFooter(e)) &&
                    l.push({
                        type: 'footer',
                        section: e,
                        offsetTop: a
                    });
            }
        }
        return {
            spacerTop: i,
            totalHeight: r + this.paddingBottom,
            items: l
        };
    }
    computeScrollPosition(e, n) {
        let { paddingTop: r } = this,
            i = r + this.getListHeaderHeight(),
            a = 0,
            o = !1;
        for (; a <= e; ) {
            let r = this.sections[a];
            if (a === e && null == n) {
                o = !0;
                break;
            }
            if (0 === r) {
                a += 1;
                continue;
            }
            if (((i += this.getHeightForSection(a)), this.uniform)) {
                let s = this.getHeightForRow(a, 0);
                a === e && null != n ? ((i += s * n), (o = !0)) : (i += s * r);
            } else
                for (let s = 0; s < r; s++)
                    if (a < e || (a === e && null != n && s < n)) i += this.getHeightForRow(a, s);
                    else if (a === e && null != n && s === n) {
                        o = !0;
                        break;
                    }
            !o && (i += this.getHeightForFooter(a)), (a += 1);
        }
        return [i, null != n ? this.getHeightForRow(e, n) : this.getHeightForSection(a)];
    }
    constructor() {
        a(this, 'sectionHeight', 0), a(this, 'rowHeight', 0), a(this, 'footerHeight', 0), a(this, 'listHeaderHeight', 0), a(this, 'uniform', !1), a(this, 'paddingBottom', 0), a(this, 'paddingTop', 0), a(this, 'sections', []), a(this, 'getAnchorId', () => void 0);
    }
}
n.Z = s;
