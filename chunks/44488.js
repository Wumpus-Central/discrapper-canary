t.d(n, {
    Pz: () => p,
    ZP: () => C,
    am: () => f
}),
    t(47120);
var a,
    i = t(200651),
    r = t(192379),
    l = t(120356),
    o = t.n(l),
    s = t(481060),
    c = t(768762),
    u = t(484125);
function d(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
let _ = {
    CENTER: u.alignCenter,
    LEFT: u.alignLeft
};
class h extends (a = r.PureComponent) {
    componentDidUpdate(e) {
        let { selectedIndex: n } = this.props;
        e.selectedIndex !== n && this.handleSelectedIndexChange(n);
    }
    render() {
        let { renderItem: e, items: n, vertical: t, paginationContainerClass: a, align: l } = this.props,
            c = t ? u.verticalPaginationItemContainer : u.horizontalPaginationItemContainer;
        return (0, i.jsx)(s.yWw, {
            orientation: t ? 'vertical' : 'horizontal',
            className: o()(c, a, l),
            ref: this.handleSetScrollerRef,
            children: n.map((n, t) =>
                r.cloneElement(e(n, t), {
                    onClick: () => this.handlePageClick(t),
                    key: t,
                    ref: (e) => {
                        this._paginationItemRefs[t] = e;
                    }
                })
            )
        });
    }
    constructor(...e) {
        super(...e),
            d(this, '_scrollerRef', null),
            d(this, '_paginationItemRefs', []),
            d(this, 'handleSetScrollerRef', (e) => {
                this._scrollerRef = e;
            }),
            d(this, 'handleSelectedIndexChange', (e) => {
                let n = this._scrollerRef;
                if (null == n) return;
                let t = this._paginationItemRefs[e];
                null != t &&
                    n.scrollIntoViewNode({
                        node: t,
                        animate: !0,
                        padding: this.props.scrollToPadding
                    });
            }),
            d(this, 'handlePageClick', (e) => {
                let { onSetItem: n } = this.props;
                n(e);
            });
    }
}
d(h, 'Align', _),
    d(h, 'defaultProps', {
        scrollToPadding: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        },
        align: _.CENTER
    });
class f extends r.PureComponent {
    render() {
        let { className: e } = this.props;
        return (0, i.jsx)(s.zxk, {
            look: s.zxk.Looks.BLANK,
            size: s.zxk.Sizes.NONE,
            className: o()(u.prevButtonContainer, e),
            onClick: this.handlePrevClick,
            children: (0, i.jsx)(c.Z, {
                className: u.arrow,
                direction: c.Z.Directions.LEFT
            })
        });
    }
    constructor(...e) {
        super(...e),
            d(this, 'handlePrevClick', (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: n } = this.props;
                null == n || n(e);
            });
    }
}
class p extends r.PureComponent {
    render() {
        let { className: e } = this.props;
        return (0, i.jsx)(s.zxk, {
            look: s.zxk.Looks.BLANK,
            size: s.zxk.Sizes.NONE,
            className: o()(u.nextButtonContainer, e),
            onClick: this.handleNextClick,
            children: (0, i.jsx)(c.Z, {
                className: u.arrow,
                direction: c.Z.Directions.RIGHT
            })
        });
    }
    constructor(...e) {
        super(...e),
            d(this, 'handleNextClick', (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: n } = this.props;
                null == n || n(e);
            });
    }
}
let C = 12633 == t.j ? h : null;
