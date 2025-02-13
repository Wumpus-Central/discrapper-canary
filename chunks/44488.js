n.d(t, {
    Pz: () => g,
    ZP: () => _,
    am: () => p
}),
    n(47120);
var i,
    a = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(481060),
    c = n(768762),
    d = n(843436);
function u(e, t, n) {
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
    CENTER: d.alignCenter,
    LEFT: d.alignLeft
};
class h extends (i = r.PureComponent) {
    componentDidUpdate(e) {
        let { selectedIndex: t } = this.props;
        e.selectedIndex !== t && this.handleSelectedIndexChange(t);
    }
    render() {
        let { renderItem: e, items: t, vertical: n, paginationContainerClass: i, align: l } = this.props,
            c = n ? d.verticalPaginationItemContainer : d.horizontalPaginationItemContainer;
        return (0, a.jsx)(o.yWw, {
            orientation: n ? 'vertical' : 'horizontal',
            className: s()(c, i, l),
            ref: this.handleSetScrollerRef,
            children: t.map((t, n) =>
                r.cloneElement(e(t, n), {
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
        super(...e),
            u(this, '_scrollerRef', null),
            u(this, '_paginationItemRefs', []),
            u(this, 'handleSetScrollerRef', (e) => {
                this._scrollerRef = e;
            }),
            u(this, 'handleSelectedIndexChange', (e) => {
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
            u(this, 'handlePageClick', (e) => {
                let { onSetItem: t } = this.props;
                t(e);
            });
    }
}
u(h, 'Align', m),
    u(h, 'defaultProps', {
        scrollToPadding: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        },
        align: m.CENTER
    });
class p extends r.PureComponent {
    render() {
        let { className: e } = this.props;
        return (0, a.jsx)(o.zxk, {
            look: o.zxk.Looks.BLANK,
            size: o.zxk.Sizes.NONE,
            className: s()(d.prevButtonContainer, e),
            onClick: this.handlePrevClick,
            children: (0, a.jsx)(c.Z, {
                className: d.arrow,
                direction: c.Z.Directions.LEFT
            })
        });
    }
    constructor(...e) {
        super(...e),
            u(this, 'handlePrevClick', (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: t } = this.props;
                null == t || t(e);
            });
    }
}
class g extends r.PureComponent {
    render() {
        let { className: e } = this.props;
        return (0, a.jsx)(o.zxk, {
            look: o.zxk.Looks.BLANK,
            size: o.zxk.Sizes.NONE,
            className: s()(d.nextButtonContainer, e),
            onClick: this.handleNextClick,
            children: (0, a.jsx)(c.Z, {
                className: d.arrow,
                direction: c.Z.Directions.RIGHT
            })
        });
    }
    constructor(...e) {
        super(...e),
            u(this, 'handleNextClick', (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: t } = this.props;
                null == t || t(e);
            });
    }
}
let _ = h;
