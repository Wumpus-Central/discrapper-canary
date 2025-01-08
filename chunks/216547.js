i(47120);
var n,
    r,
    a = i(200651),
    o = i(192379),
    l = i(120356),
    c = i.n(l),
    s = i(995295),
    d = i(513431),
    u = i(481060),
    h = i(112724),
    _ = i(768762),
    p = i(635712);
function m(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
((r = n || (n = {}))[(r.LEFT = 0)] = 'LEFT'), (r[(r.RIGHT = 1)] = 'RIGHT');
let f = (e) => {
    let { onClick: t, className: i, direction: n } = e;
    return (0, a.jsx)(u.Clickable, {
        'aria-hidden': !0,
        className: c()(p.scrollerButton, i),
        onClick: t,
        children: (0, a.jsx)(_.Z, {
            className: p.scrollerButtonArrow,
            direction: n
        })
    });
};
class g extends o.Component {
    static getDerivedStateFromProps(e, t) {
        return t.prevWidth !== e.width
            ? {
                  tileIndex: 0,
                  prevWidth: e.width,
                  lastArrowDirection: 0
              }
            : null;
    }
    getMaxOffset() {
        let { width: e } = this.props,
            { scrollerWidth: t } = this.state;
        return Math.max(Math.floor(t - e), 0);
    }
    getSideOffset() {
        let { tileWidth: e, tileMargin: t } = this.props,
            i = this.getMaxOffset(),
            n = e + t;
        return i - Math.floor(i / n) * n;
    }
    getMaxIndex() {
        let { tileWidth: e, tileMargin: t } = this.props;
        return Math.round(this.getMaxOffset() / (e + t));
    }
    getOffset(e, t) {
        let { tileWidth: i, tileMargin: n } = this.props;
        return Math.min(e * (i + n) + (1 === t ? this.getSideOffset() : 0), this.getMaxOffset());
    }
    componentDidMount() {
        this.setScrollerWidth();
    }
    componentDidUpdate(e, t) {
        if (t.tileIndex !== this.state.tileIndex || t.lastArrowDirection !== this.state.lastArrowDirection) {
            var i, n, r;
            let { tileIndex: e } = this.state,
                t = this.getOffset(this.state.tileIndex, this.state.lastArrowDirection);
            null === (i = this.advancedScrollerRef.current) ||
                void 0 === i ||
                i.scrollTo({
                    to: t,
                    animate: !0
                }),
                null === (n = (r = this.props).onScroll) || void 0 === n || n.call(r, { tileIndex: e });
        }
        e.width !== this.props.width && this.setScrollerWidth();
    }
    render() {
        let { tileIndex: e, lastArrowDirection: t } = this.state,
            { header: i, headerId: n, subHeader: r, headerContainerClassName: o, scrollContainerClassName: l } = this.props,
            s = this.getMaxOffset();
        return (0, a.jsxs)('div', {
            children: [
                (0, a.jsxs)('div', {
                    className: c()(p.headerContainer, o),
                    children: [
                        (0, a.jsxs)('div', {
                            children: [
                                (0, a.jsx)(u.Heading, {
                                    id: n,
                                    variant: 'heading-lg/semibold',
                                    children: i
                                }),
                                null == r
                                    ? null
                                    : (0, a.jsx)(u.Text, {
                                          variant: 'text-sm/medium',
                                          className: p.subheader,
                                          children: r
                                      })
                            ]
                        }),
                        s > 0
                            ? (0, a.jsxs)('div', {
                                  className: p.arrowsContainer,
                                  children: [
                                      (0, a.jsx)(f, {
                                          direction: _.Z.Directions.LEFT,
                                          onClick: this.prev,
                                          className: c()(p.arrowLeft, { [p.arrowDisabled]: 0 === e && 0 === t })
                                      }),
                                      (0, a.jsx)(f, {
                                          direction: _.Z.Directions.RIGHT,
                                          onClick: this.next,
                                          className: c()(p.arrowRight, { [p.arrowDisabled]: e === this.getMaxIndex() && 1 === t })
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                (0, a.jsx)('div', {
                    className: c()(p.scrollerContainer, l),
                    children: (0, a.jsx)(u.AdvancedScrollerNone, {
                        ref: this.advancedScrollerRef,
                        orientation: 'horizontal',
                        className: p.scroller,
                        children: (0, a.jsx)('div', {
                            className: p.scroller,
                            ref: (e) => {
                                (this.tileScrollerRef.current = e), this.setScrollerWidth();
                            },
                            children: this.props.children
                        })
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            m(this, 'state', {
                tileIndex: 0,
                prevWidth: this.props.width,
                lastArrowDirection: 0,
                scrollerWidth: 0
            }),
            m(this, 'advancedScrollerRef', o.createRef()),
            m(this, 'tileScrollerRef', o.createRef()),
            m(this, 'setScrollerWidth', () => {
                let e = (0, s.findDOMNode)(this.tileScrollerRef.current);
                (0, d.k)(e, HTMLElement) && e.offsetWidth !== this.state.scrollerWidth && this.setState({ scrollerWidth: e.offsetWidth });
            }),
            m(this, 'prev', () => {
                this.setState({
                    tileIndex: Math.max(this.state.tileIndex - 1, 0),
                    lastArrowDirection: 0
                });
            }),
            m(this, 'next', () => {
                this.setState({
                    tileIndex: Math.min(this.state.tileIndex + 1, this.getMaxIndex()),
                    lastArrowDirection: 1
                });
            });
    }
}
t.Z = (0, h.Z)(g);
