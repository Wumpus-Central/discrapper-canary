function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n.d(t, {
    DP: () => a,
    ZI: () => c,
    ZP: () => u,
    t$: () => s
}),
    n(757143),
    n(724458),
    n(47120),
    n(653041),
    n(733860),
    n(411104);
let r = (e) => '__section__'.concat(e),
    a = (e) => '__section_header__'.concat(e),
    s = (e) => parseInt(e.replace(/^__section__/, ''), 10);
function o(e) {
    return e.reduce((e, t, n) => (t < e[0] ? [t, n] : e), [e[0], 0]);
}
let l = () => 0;
class u {
    getPadding(e) {
        var t;
        return null == this.padding ? this.itemGutter : 'number' == typeof this.padding ? this.padding : null !== (t = this.padding[e]) && void 0 !== t ? t : this.itemGutter;
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
        let { sections: t = this.sections, columns: n = this.columns, itemGutter: i = this.itemGutter, removeEdgeItemGutters: r = this.removeEdgeItemGutters, getItemKey: a = this.getItemKey, getItemHeight: s = this.getItemHeight, getSectionHeight: o = this.getSectionHeight, bufferWidth: l = this.bufferWidth, padding: u = this.padding, paddingVertical: c = this.paddingVertical, paddingHorizontal: d = this.paddingHorizontal, marginLeft: f = this.marginLeft, sectionGutter: _ = this.sectionGutter, dir: p = this.dir } = e;
        (this.sections !== t || this.columns !== n || this.itemGutter !== i || this.removeEdgeItemGutters !== r || this.getItemKey !== a || this.getSectionHeight !== o || this.getItemHeight !== s || this.bufferWidth !== l || this.padding !== u || this.paddingVertical !== c || this.paddingHorizontal !== d || this.marginLeft !== f || this.sectionGutter !== _ || this.dir !== p) && ((this.needsFullCompute = !0), (this.sections = t), (this.columns = n), (this.itemGutter = i), (this.getItemKey = a), (this.getSectionHeight = o), (this.getItemHeight = s), (this.bufferWidth = l), (this.padding = u), (this.paddingVertical = c), (this.paddingHorizontal = d), (this.marginLeft = f), (this.sectionGutter = _), (this.dir = p));
    }
    computeFullCoords() {
        var e, t;
        if (!this.needsFullCompute) return;
        let { columns: n, getItemKey: i, getItemHeight: s, itemGutter: l, getSectionHeight: u, bufferWidth: c, removeEdgeItemGutters: d } = this,
            f = 'rtl' === this.dir ? 'right' : 'left';
        (this.coordsMap = {}),
            (this.gridData = {
                boundaries: [],
                coordinates: {}
            }),
            (this.currentRow = 0),
            (this.lastColumnIndex = 0);
        let _ = this.getPaddingTop(),
            p = this.getPaddingBottom(),
            h = this.getPaddingLeft(),
            m = this.getPaddingRight(),
            g = null !== (e = this.marginLeft) && void 0 !== e ? e : 0;
        (this.columnHeights = Array(n).fill(_)), (this.columnWidth = (c - m - h - l * (n - 1) - (d ? l : 0)) / n), (this.itemGrid = []);
        let E = 0;
        for (; E < this.sections.length; ) {
            (this.gridData.boundaries[E] = this.currentRow), (this.currentRow = 0), (this.lastColumnIndex = 0);
            let e = this.sections[E],
                c = 0,
                d = u(E),
                _ = this.getMaxColumnHeight(this.columnHeights);
            E > 0 && (_ = _ - l + this.getSectionGutter());
            let p = d > 0 ? d + l : 0;
            for (let e = 0; e < this.columnHeights.length; e++) this.columnHeights[e] = _ + p;
            for (; c < e; ) {
                let e = i(E, c);
                if (null == e) {
                    c++;
                    continue;
                }
                let [n, r] = o(this.columnHeights);
                r < this.lastColumnIndex && this.currentRow++, (this.lastColumnIndex = r);
                let a = s(E, c, this.columnWidth),
                    u = {
                        position: 'absolute',
                        [f]: this.columnWidth * r + l * (r + 1) - l + h,
                        width: this.columnWidth,
                        top: n - _,
                        height: a
                    },
                    d = {
                        section: E,
                        row: this.currentRow,
                        column: r
                    };
                (this.coordsMap[e] = u), (this.gridData.coordinates[e] = d), (this.columnHeights[r] = n + a + l), (this.itemGrid[r] = null !== (t = this.itemGrid[r]) && void 0 !== t ? t : []), this.itemGrid[r].push(e), c++;
            }
            d > 0 &&
                (this.coordsMap[a(E)] = {
                    position: 'sticky',
                    [f]: h,
                    width: this.columnWidth * n + l * n,
                    top: 0,
                    height: d
                }),
                (this.coordsMap[r(E)] = {
                    position: 'absolute',
                    [f]: g,
                    width: this.columnWidth * n + l * (n - 1) + h + m,
                    top: _,
                    height: this.getMaxColumnHeight(this.columnHeights) - _
                }),
                E++;
        }
        (this.columnHeights = this.columnHeights.map((e) => e - l + p)), (this.totalHeight = this.getMaxColumnHeight()), (this.visibleSections = {}), (this.needsFullCompute = !1);
    }
    computeVisibleSections(e, t) {
        this.computeFullCoords();
        let { getItemKey: n, coordsMap: i } = this;
        this.visibleSections = {};
        let a = 0;
        for (; a < this.sections.length; ) {
            let s = this.sections[a],
                o = r(a),
                l = i[o];
            if (null == l) {
                a++;
                continue;
            }
            let { top: u } = l,
                c = u + l.height;
            if (u > t) break;
            if (c < e) {
                a++;
                continue;
            }
            let d = 0,
                f = 1;
            for (c < t && c > e && ((d = s - 1), (f = -1)), this.visibleSections[o] = []; d >= 0 && d < s; ) {
                let r = n(a, d),
                    s = null != r ? i[r] : null;
                if (null == r || null == s) {
                    d += f;
                    continue;
                }
                let { top: l, height: c } = s;
                l + u > e - c && l + u < t && (-1 === f ? this.visibleSections[o].unshift([r, a, d]) : this.visibleSections[o].push([r, a, d])), (d += f);
            }
            if (u < e && c > t) break;
            a++;
        }
    }
    getMaxColumnHeight() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.columnHeights;
        return e.reduce((e, t) => Math.max(e, t), 0);
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
        i(this, 'visibleSections', {}),
            i(this, 'gridData', {
                coordinates: {},
                boundaries: []
            }),
            i(this, 'coordsMap', {}),
            i(this, 'columnHeights', []),
            i(this, 'columnWidth', 0),
            i(this, 'totalHeight', 0),
            i(this, 'itemGrid', []),
            i(this, 'currentRow', 0),
            i(this, 'lastColumnIndex', 0),
            i(this, 'needsFullCompute', !0),
            i(this, 'bufferWidth', 0),
            i(this, 'sections', []),
            i(this, 'columns', 0),
            i(this, 'itemGutter', 0),
            i(this, 'removeEdgeItemGutters', !1),
            i(this, 'sectionGutter', null),
            i(this, 'padding', null),
            i(this, 'paddingVertical', null),
            i(this, 'paddingHorizontal', null),
            i(this, 'marginLeft', null),
            i(this, 'dir', 'ltr'),
            i(this, 'getItemKey', () => {
                throw Error('MasonryListComputer: getItemKey has not been implemented');
            }),
            i(this, 'getItemHeight', () => {
                throw Error('MasonryListComputer: getItemHeight has not been implemented');
            }),
            i(this, 'getSectionHeight', l);
    }
}
function c(e, t, n) {
    let i = {},
        r = {};
    for (let r in e)
        if (null == t[r]) i[r] = e[r];
        else {
            let i = e[r],
                a = t[r];
            for (let e = 0; e < i.length; e++) {
                let [t] = i[e];
                a.some((e) => {
                    let [n] = e;
                    return t === n;
                }) || n(i[e][1], i[e][2], !0);
            }
        }
    for (let i in t)
        if (null == e[i]) r[i] = t[i];
        else {
            let r = e[i],
                a = t[i];
            for (let e = 0; e < a.length; e++) {
                let [t] = a[e];
                r.some((e) => {
                    let [n] = e;
                    return n === t;
                }) || n(a[e][1], a[e][2], !1);
            }
        }
}
