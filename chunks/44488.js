(n.d(t, {
    Pz: () => f,
    ZP: () => _,
    am: () => g
}),
    n(388685));
var r,
    a = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(755721),
    c = n(481060),
    d = n(768762),
    u = n(265072);
function p(e, t, n) {
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
let m = {
    CENTER: u.alignCenter,
    LEFT: u.alignLeft
};
class h extends (r = i.PureComponent) {
    componentDidUpdate(e) {
        let { selectedIndex: t } = this.props;
        e.selectedIndex !== t && this.handleSelectedIndexChange(t);
    }
    render() {
        let { renderItem: e, items: t, vertical: n, paginationContainerClass: r, align: l } = this.props,
            o = n ? u.verticalPaginationItemContainer : u.horizontalPaginationItemContainer;
        return (0, a.jsx)(c.yWw, {
            orientation: n ? 'vertical' : 'horizontal',
            className: s()(o, r, l),
            ref: this.handleSetScrollerRef,
            children: t.map((t, n) =>
                i.cloneElement(e(t, n), {
                    onClick: () => this.handlePageClick(n),
                    key: n,
                    ref: (e) => {
                        this._paginationItemRefs[n] = e;
                    }
                })
            )
        });
    }
    constructor(...e) {
        (super(...e),
            p(this, '_scrollerRef', null),
            p(this, '_paginationItemRefs', []),
            p(this, 'handleSetScrollerRef', (e) => {
                this._scrollerRef = e;
            }),
            p(this, 'handleSelectedIndexChange', (e) => {
                let t = this._scrollerRef;
                if (null == t) return;
                let n = this._paginationItemRefs[e];
                null != n &&
                    t.scrollIntoViewNode({
                        node: n,
                        animate: !0,
                        padding: this.props.scrollToPadding
                    });
            }),
            p(this, 'handlePageClick', (e) => {
                let { onSetItem: t } = this.props;
                t(e);
            }));
    }
}
(p(h, 'Align', m),
    p(h, 'defaultProps', {
        scrollToPadding: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        },
        align: m.CENTER
    }));
class g extends i.PureComponent {
    render() {
        let { className: e } = this.props;
        return (0, a.jsx)(o.zx, {
            look: o.zx.Looks.BLANK,
            size: o.zx.Sizes.NONE,
            className: s()(u.prevButtonContainer, e),
            onClick: this.handlePrevClick,
            children: (0, a.jsx)(d.Z, {
                className: u.arrow,
                direction: d.Z.Directions.LEFT
            })
        });
    }
    constructor(...e) {
        (super(...e),
            p(this, 'handlePrevClick', (e) => {
                (e.stopPropagation(), e.preventDefault());
                let { onClick: t } = this.props;
                null == t || t(e);
            }));
    }
}
class f extends i.PureComponent {
    render() {
        let { className: e } = this.props;
        return (0, a.jsx)(o.zx, {
            look: o.zx.Looks.BLANK,
            size: o.zx.Sizes.NONE,
            className: s()(u.nextButtonContainer, e),
            onClick: this.handleNextClick,
            children: (0, a.jsx)(d.Z, {
                className: u.arrow,
                direction: d.Z.Directions.RIGHT
            })
        });
    }
    constructor(...e) {
        (super(...e),
            p(this, 'handleNextClick', (e) => {
                (e.stopPropagation(), e.preventDefault());
                let { onClick: t } = this.props;
                null == t || t(e);
            }));
    }
}
let _ = h;
