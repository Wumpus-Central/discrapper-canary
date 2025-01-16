t.d(n, {
    Pz: function () {
        return p;
    },
    am: function () {
        return h;
    }
}),
    t(47120);
var a,
    r = t(200651),
    i = t(192379),
    l = t(120356),
    o = t.n(l),
    s = t(481060),
    u = t(768762),
    c = t(723478);
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
let f = {
    CENTER: c.alignCenter,
    LEFT: c.alignLeft
};
class _ extends (a = i.PureComponent) {
    componentDidUpdate(e) {
        let { selectedIndex: n } = this.props;
        e.selectedIndex !== n && this.handleSelectedIndexChange(n);
    }
    render() {
        let { renderItem: e, items: n, vertical: t, paginationContainerClass: a, align: l } = this.props,
            u = t ? c.verticalPaginationItemContainer : c.horizontalPaginationItemContainer;
        return (0, r.jsx)(s.AdvancedScrollerAuto, {
            orientation: t ? 'vertical' : 'horizontal',
            className: o()(u, a, l),
            ref: this.handleSetScrollerRef,
            children: n.map((n, t) =>
                i.cloneElement(e(n, t), {
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
                if (null != t)
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
d(_, 'Align', f),
    d(_, 'defaultProps', {
        scrollToPadding: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        },
        align: f.CENTER
    });
class h extends i.PureComponent {
    render() {
        let { className: e } = this.props;
        return (0, r.jsx)(s.Button, {
            look: s.Button.Looks.BLANK,
            size: s.Button.Sizes.NONE,
            className: o()(c.prevButtonContainer, e),
            onClick: this.handlePrevClick,
            children: (0, r.jsx)(u.Z, {
                className: c.arrow,
                direction: u.Z.Directions.LEFT
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
class p extends i.PureComponent {
    render() {
        let { className: e } = this.props;
        return (0, r.jsx)(s.Button, {
            look: s.Button.Looks.BLANK,
            size: s.Button.Sizes.NONE,
            className: o()(c.nextButtonContainer, e),
            onClick: this.handleNextClick,
            children: (0, r.jsx)(u.Z, {
                className: c.arrow,
                direction: u.Z.Directions.RIGHT
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
n.ZP = 12633 == t.j ? _ : null;
