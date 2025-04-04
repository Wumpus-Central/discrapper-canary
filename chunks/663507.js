function r(e, t, n) {
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
    DP: () => o,
    ZI: () => u,
    ZP: () => c,
    t$: () => a
}),
    n(757143),
    n(301563),
    n(47120),
    n(653041),
    n(733860),
    n(411104);
let i = (e) => '__section__'.concat(e),
    o = (e) => '__section_header__'.concat(e),
    a = (e) => parseInt(e.replace(/^__section__/, ''), 10);
function s(e) {
    return e.reduce((e, t, n) => (t < e[0] ? [t, n] : e), [e[0], 0]);
}
let l = () => 0;
class c {
    getPadding(e) {
        var t;
        return null == this.padding ? this.itemGutter : 'number' == typeof this.padding ? this.padding : null != (t = this.padding[e]) ? t : this.itemGutter;
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
        let { sections: t = this.sections, columns: n = this.columns, itemGutter: r = this.itemGutter, removeEdgeItemGutters: i = this.removeEdgeItemGutters, getItemKey: o = this.getItemKey, getItemHeight: a = this.getItemHeight, getSectionHeight: s = this.getSectionHeight, bufferWidth: l = this.bufferWidth, padding: c = this.padding, paddingVertical: u = this.paddingVertical, paddingHorizontal: d = this.paddingHorizontal, marginLeft: f = this.marginLeft, sectionGutter: _ = this.sectionGutter, dir: p = this.dir } = e;
        (this.sections !== t || this.columns !== n || this.itemGutter !== r || this.removeEdgeItemGutters !== i || this.getItemKey !== o || this.getSectionHeight !== s || this.getItemHeight !== a || this.bufferWidth !== l || this.padding !== c || this.paddingVertical !== u || this.paddingHorizontal !== d || this.marginLeft !== f || this.sectionGutter !== _ || this.dir !== p) && ((this.needsFullCompute = !0), (this.sections = t), (this.columns = n), (this.itemGutter = r), (this.getItemKey = o), (this.getSectionHeight = s), (this.getItemHeight = a), (this.bufferWidth = l), (this.padding = c), (this.paddingVertical = u), (this.paddingHorizontal = d), (this.marginLeft = f), (this.sectionGutter = _), (this.dir = p));
    }
    computeFullCoords() {
        var e, t;
        if (!this.needsFullCompute) return;
        let { columns: n, getItemKey: r, getItemHeight: a, itemGutter: l, getSectionHeight: c, bufferWidth: u, removeEdgeItemGutters: d } = this,
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
            g = null != (e = this.marginLeft) ? e : 0;
        (this.columnHeights = Array(n).fill(_)), (this.columnWidth = (u - m - h - l * (n - 1) - (d ? l : 0)) / n), (this.itemGrid = []);
        let E = 0;
        for (; E < this.sections.length; ) {
            (this.gridData.boundaries[E] = this.currentRow), (this.currentRow = 0), (this.lastColumnIndex = 0);
            let e = this.sections[E],
                u = 0,
                d = c(E),
                _ = this.getMaxColumnHeight(this.columnHeights);
            E > 0 && (_ = _ - l + this.getSectionGutter());
            let p = d > 0 ? d + l : 0;
            for (let e = 0; e < this.columnHeights.length; e++) this.columnHeights[e] = _ + p;
            for (; u < e; ) {
                let e = r(E, u);
                if (null == e) {
                    u++;
                    continue;
                }
                let [n, i] = s(this.columnHeights);
                i < this.lastColumnIndex && this.currentRow++, (this.lastColumnIndex = i);
                let o = a(E, u, this.columnWidth),
                    c = {
                        position: 'absolute',
                        [f]: this.columnWidth * i + l * (i + 1) - l + h,
                        width: this.columnWidth,
                        top: n - _,
                        height: o
                    },
                    d = {
                        section: E,
                        row: this.currentRow,
                        column: i
                    };
                (this.coordsMap[e] = c), (this.gridData.coordinates[e] = d), (this.columnHeights[i] = n + o + l), (this.itemGrid[i] = null != (t = this.itemGrid[i]) ? t : []), this.itemGrid[i].push(e), u++;
            }
            d > 0 &&
                (this.coordsMap[o(E)] = {
                    position: 'sticky',
                    [f]: h,
                    width: this.columnWidth * n + l * n,
                    top: 0,
                    height: d
                }),
                (this.coordsMap[i(E)] = {
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
        let { getItemKey: n, coordsMap: r } = this;
        this.visibleSections = {};
        let o = 0;
        for (; o < this.sections.length; ) {
            let a = this.sections[o],
                s = i(o),
                l = r[s];
            if (null == l) {
                o++;
                continue;
            }
            let { top: c } = l,
                u = c + l.height;
            if (c > t) break;
            if (u < e) {
                o++;
                continue;
            }
            let d = 0,
                f = 1;
            for (u < t && u > e && ((d = a - 1), (f = -1)), this.visibleSections[s] = []; d >= 0 && d < a; ) {
                let i = n(o, d),
                    a = null != i ? r[i] : null;
                if (null == i || null == a) {
                    d += f;
                    continue;
                }
                let { top: l, height: u } = a;
                l + c > e - u && l + c < t && (-1 === f ? this.visibleSections[s].unshift([i, o, d]) : this.visibleSections[s].push([i, o, d])), (d += f);
            }
            if (c < e && u > t) break;
            o++;
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
        r(this, 'visibleSections', {}),
            r(this, 'gridData', {
                coordinates: {},
                boundaries: []
            }),
            r(this, 'coordsMap', {}),
            r(this, 'columnHeights', []),
            r(this, 'columnWidth', 0),
            r(this, 'totalHeight', 0),
            r(this, 'itemGrid', []),
            r(this, 'currentRow', 0),
            r(this, 'lastColumnIndex', 0),
            r(this, 'needsFullCompute', !0),
            r(this, 'bufferWidth', 0),
            r(this, 'sections', []),
            r(this, 'columns', 0),
            r(this, 'itemGutter', 0),
            r(this, 'removeEdgeItemGutters', !1),
            r(this, 'sectionGutter', null),
            r(this, 'padding', null),
            r(this, 'paddingVertical', null),
            r(this, 'paddingHorizontal', null),
            r(this, 'marginLeft', null),
            r(this, 'dir', 'ltr'),
            r(this, 'getItemKey', () => {
                throw Error('MasonryListComputer: getItemKey has not been implemented');
            }),
            r(this, 'getItemHeight', () => {
                throw Error('MasonryListComputer: getItemHeight has not been implemented');
            }),
            r(this, 'getSectionHeight', l);
    }
}
function u(e, t, n) {
    let r = {},
        i = {};
    for (let i in e)
        if (null == t[i]) r[i] = e[i];
        else {
            let r = e[i],
                o = t[i];
            for (let e = 0; e < r.length; e++) {
                let [t] = r[e];
                o.some((e) => {
                    let [n] = e;
                    return t === n;
                }) || n(r[e][1], r[e][2], !0);
            }
        }
    for (let r in t)
        if (null == e[r]) i[r] = t[r];
        else {
            let i = e[r],
                o = t[r];
            for (let e = 0; e < o.length; e++) {
                let [t] = o[e];
                i.some((e) => {
                    let [n] = e;
                    return n === t;
                }) || n(o[e][1], o[e][2], !1);
            }
        }
}
