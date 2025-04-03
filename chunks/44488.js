n.d(t, {
    Pz: () => g,
    ZP: () => f,
    am: () => h
}),
    n(47120);
var r,
    a = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    c = n(768762),
    d = n(265072);
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
let p = {
    CENTER: d.alignCenter,
    LEFT: d.alignLeft
};
class m extends (r = i.PureComponent) {
    componentDidUpdate(e) {
        let { selectedIndex: t } = this.props;
        e.selectedIndex !== t && this.handleSelectedIndexChange(t);
    }
    render() {
        let { renderItem: e, items: t, vertical: n, paginationContainerClass: r, align: l } = this.props,
            c = n ? d.verticalPaginationItemContainer : d.horizontalPaginationItemContainer;
        return (0, a.jsx)(s.yWw, {
            orientation: n ? 'vertical' : 'horizontal',
            className: o()(c, r, l),
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
u(m, 'Align', p),
    u(m, 'defaultProps', {
        scrollToPadding: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        },
        align: p.CENTER
    });
class h extends i.PureComponent {
    render() {
        let { className: e } = this.props;
        return (0, a.jsx)(s.zxk, {
            look: s.zxk.Looks.BLANK,
            size: s.zxk.Sizes.NONE,
            className: o()(d.prevButtonContainer, e),
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
class g extends i.PureComponent {
    render() {
        let { className: e } = this.props;
        return (0, a.jsx)(s.zxk, {
            look: s.zxk.Looks.BLANK,
            size: s.zxk.Sizes.NONE,
            className: o()(d.nextButtonContainer, e),
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
let f = m;
