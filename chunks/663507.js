r.d(n, {
    DP: function () {
        return f;
    },
    ZI: function () {
        return g;
    },
    ZP: function () {
        return m;
    },
    t$: function () {
        return p;
    }
});
var i = r(757143);
var a = r(724458);
var o = r(47120);
var s = r(653041);
var l = r(733860);
var u = r(411104);
function c(e, n, r) {
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
let d = (e) => '__section__'.concat(e),
    f = (e) => '__section_header__'.concat(e),
    p = (e) => parseInt(e.replace(/^__section__/, ''), 10);
function h(e) {
    return e.reduce((e, n, r) => (n < e[0] ? [n, r] : e), [e[0], 0]);
}
let _ = () => 0;
class m {
    getPadding(e) {
        var n;
        return null == this.padding ? this.itemGutter : 'number' == typeof this.padding ? this.padding : null !== (n = this.padding[e]) && void 0 !== n ? n : this.itemGutter;
    }
    getPaddingLeft() {
        return null != this.paddingHorizontal ? this.paddingHorizontal : this.getPadding('left');
    }
    getPaddingRight() {
        return null != this.paddingHorizontal ? this.paddingHorizontal : this.getPadding('right');
    }
    getPaddingTop() {
        return null != this.paddingVertical ? this.paddingVertical : this.getPadding('top');
    }
    getPaddingBottom() {
        return null != this.paddingVertical ? this.paddingVertical : this.getPadding('bottom');
    }
    getSectionGutter() {
        return null != this.sectionGutter ? this.sectionGutter : this.itemGutter;
    }
    mergeProps(e) {
        let { sections: n = this.sections, columns: r = this.columns, itemGutter: i = this.itemGutter, removeEdgeItemGutters: a = this.removeEdgeItemGutters, getItemKey: o = this.getItemKey, getItemHeight: s = this.getItemHeight, getSectionHeight: l = this.getSectionHeight, bufferWidth: u = this.bufferWidth, padding: c = this.padding, paddingVertical: d = this.paddingVertical, paddingHorizontal: f = this.paddingHorizontal, marginLeft: p = this.marginLeft, sectionGutter: h = this.sectionGutter, dir: _ = this.dir } = e;
        if (this.sections !== n || this.columns !== r || this.itemGutter !== i || this.removeEdgeItemGutters !== a || this.getItemKey !== o || this.getSectionHeight !== l || this.getItemHeight !== s || this.bufferWidth !== u || this.padding !== c || this.paddingVertical !== d || this.paddingHorizontal !== f || this.marginLeft !== p || this.sectionGutter !== h || this.dir !== _) (this.needsFullCompute = !0), (this.sections = n), (this.columns = r), (this.itemGutter = i), (this.getItemKey = o), (this.getSectionHeight = l), (this.getItemHeight = s), (this.bufferWidth = u), (this.padding = c), (this.paddingVertical = d), (this.paddingHorizontal = f), (this.marginLeft = p), (this.sectionGutter = h), (this.dir = _);
    }
    computeFullCoords() {
        var e, n;
        if (!this.needsFullCompute) return;
        let { columns: r, getItemKey: i, getItemHeight: a, itemGutter: o, getSectionHeight: s, bufferWidth: l, removeEdgeItemGutters: u } = this,
            c = 'rtl' === this.dir ? 'right' : 'left';
        (this.coordsMap = {}),
            (this.gridData = {
                boundaries: [],
                coordinates: {}
            }),
            (this.currentRow = 0),
            (this.lastColumnIndex = 0);
        let p = this.getPaddingTop(),
            _ = this.getPaddingBottom(),
            m = this.getPaddingLeft(),
            g = this.getPaddingRight(),
            E = null !== (e = this.marginLeft) && void 0 !== e ? e : 0;
        (this.columnHeights = Array(r).fill(p)), (this.columnWidth = (l - g - m - o * (r - 1) - (u ? o : 0)) / r), (this.itemGrid = []);
        let v = 0;
        for (; v < this.sections.length; ) {
            (this.gridData.boundaries[v] = this.currentRow), (this.currentRow = 0), (this.lastColumnIndex = 0);
            let e = this.sections[v],
                l = 0,
                u = s(v),
                p = this.getMaxColumnHeight(this.columnHeights);
            v > 0 && (p = p - o + this.getSectionGutter());
            let _ = u > 0 ? u + o : 0;
            for (let e = 0; e < this.columnHeights.length; e++) this.columnHeights[e] = p + _;
            for (; l < e; ) {
                let e = i(v, l);
                if (null == e) {
                    l++;
                    continue;
                }
                let [r, s] = h(this.columnHeights);
                s < this.lastColumnIndex && this.currentRow++, (this.lastColumnIndex = s);
                let u = a(v, l, this.columnWidth),
                    d = {
                        position: 'absolute',
                        [c]: this.columnWidth * s + o * (s + 1) - o + m,
                        width: this.columnWidth,
                        top: r - p,
                        height: u
                    },
                    f = {
                        section: v,
                        row: this.currentRow,
                        column: s
                    };
                (this.coordsMap[e] = d), (this.gridData.coordinates[e] = f), (this.columnHeights[s] = r + u + o), (this.itemGrid[s] = null !== (n = this.itemGrid[s]) && void 0 !== n ? n : []), this.itemGrid[s].push(e), l++;
            }
            u > 0 &&
                (this.coordsMap[f(v)] = {
                    position: 'sticky',
                    [c]: m,
                    width: this.columnWidth * r + o * r,
                    top: 0,
                    height: u
                }),
                (this.coordsMap[d(v)] = {
                    position: 'absolute',
                    [c]: E,
                    width: this.columnWidth * r + o * (r - 1) + m + g,
                    top: p,
                    height: this.getMaxColumnHeight(this.columnHeights) - p
                }),
                v++;
        }
        (this.columnHeights = this.columnHeights.map((e) => e - o + _)), (this.totalHeight = this.getMaxColumnHeight()), (this.visibleSections = {}), (this.needsFullCompute = !1);
    }
    computeVisibleSections(e, n) {
        this.computeFullCoords();
        let { getItemKey: r, coordsMap: i } = this;
        this.visibleSections = {};
        let a = 0;
        for (; a < this.sections.length; ) {
            let o = this.sections[a],
                s = d(a),
                l = i[s];
            if (null == l) {
                a++;
                continue;
            }
            let { top: u } = l,
                c = u + l.height;
            if (u > n) break;
            if (c < e) {
                a++;
                continue;
            }
            let f = 0,
                p = 1;
            for (c < n && c > e && ((f = o - 1), (p = -1)), this.visibleSections[s] = []; f >= 0 && f < o; ) {
                let o = r(a, f),
                    l = null != o ? i[o] : null;
                if (null == o || null == l) {
                    f += p;
                    continue;
                }
                let { top: c, height: d } = l;
                c + u > e - d && c + u < n && (-1 === p ? this.visibleSections[s].unshift([o, a, f]) : this.visibleSections[s].push([o, a, f])), (f += p);
            }
            if (u < e && c > n) break;
            a++;
        }
    }
    getMaxColumnHeight() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.columnHeights;
        return e.reduce((e, n) => Math.max(e, n), 0);
    }
    getState() {
        return {
            coordsMap: this.coordsMap,
            gridData: this.gridData,
            visibleSections: this.visibleSections,
            totalHeight: this.totalHeight
        };
    }
    constructor() {
        c(this, 'visibleSections', {}),
            c(this, 'gridData', {
                coordinates: {},
                boundaries: []
            }),
            c(this, 'coordsMap', {}),
            c(this, 'columnHeights', []),
            c(this, 'columnWidth', 0),
            c(this, 'totalHeight', 0),
            c(this, 'itemGrid', []),
            c(this, 'currentRow', 0),
            c(this, 'lastColumnIndex', 0),
            c(this, 'needsFullCompute', !0),
            c(this, 'bufferWidth', 0),
            c(this, 'sections', []),
            c(this, 'columns', 0),
            c(this, 'itemGutter', 0),
            c(this, 'removeEdgeItemGutters', !1),
            c(this, 'sectionGutter', null),
            c(this, 'padding', null),
            c(this, 'paddingVertical', null),
            c(this, 'paddingHorizontal', null),
            c(this, 'marginLeft', null),
            c(this, 'dir', 'ltr'),
            c(this, 'getItemKey', () => {
                throw Error('MasonryListComputer: getItemKey has not been implemented');
            }),
            c(this, 'getItemHeight', () => {
                throw Error('MasonryListComputer: getItemHeight has not been implemented');
            }),
            c(this, 'getSectionHeight', _);
    }
}
function g(e, n, r) {
    let i = {},
        a = {};
    for (let a in e)
        if (null == n[a]) i[a] = e[a];
        else {
            let i = e[a],
                o = n[a];
            for (let e = 0; e < i.length; e++) {
                let [n] = i[e];
                !o.some((e) => {
                    let [r] = e;
                    return n === r;
                }) && r(i[e][1], i[e][2], !0);
            }
        }
    for (let i in n)
        if (null == e[i]) a[i] = n[i];
        else {
            let a = e[i],
                o = n[i];
            for (let e = 0; e < o.length; e++) {
                let [n] = o[e];
                !a.some((e) => {
                    let [r] = e;
                    return r === n;
                }) && r(o[e][1], o[e][2], !1);
            }
        }
}
