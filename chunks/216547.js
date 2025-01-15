i(47120);
var n,
    a,
    r = i(200651),
    o = i(192379),
    l = i(120356),
    c = i.n(l),
    s = i(995295),
    d = i(513431),
    u = i(481060),
    _ = i(112724),
    p = i(768762),
    h = i(490376);
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
((a = n || (n = {}))[(a.LEFT = 0)] = 'LEFT'), (a[(a.RIGHT = 1)] = 'RIGHT');
let f = (e) => {
    let { onClick: t, className: i, direction: n } = e;
    return (0, r.jsx)(u.Clickable, {
        'aria-hidden': !0,
        className: c()(h.scrollerButton, i),
        onClick: t,
        children: (0, r.jsx)(p.Z, {
            className: h.scrollerButtonArrow,
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
            var i, n, a;
            let { tileIndex: e } = this.state,
                t = this.getOffset(this.state.tileIndex, this.state.lastArrowDirection);
            null === (i = this.advancedScrollerRef.current) ||
                void 0 === i ||
                i.scrollTo({
                    to: t,
                    animate: !0
                }),
                null === (n = (a = this.props).onScroll) || void 0 === n || n.call(a, { tileIndex: e });
        }
        e.width !== this.props.width && this.setScrollerWidth();
    }
    render() {
        let { tileIndex: e, lastArrowDirection: t } = this.state,
            { header: i, headerId: n, subHeader: a, headerContainerClassName: o, scrollContainerClassName: l } = this.props,
            s = this.getMaxOffset();
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsxs)('div', {
                    className: c()(h.headerContainer, o),
                    children: [
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(u.Heading, {
                                    id: n,
                                    variant: 'heading-lg/semibold',
                                    children: i
                                }),
                                null == a
                                    ? null
                                    : (0, r.jsx)(u.Text, {
                                          variant: 'text-sm/medium',
                                          className: h.subheader,
                                          children: a
                                      })
                            ]
                        }),
                        s > 0
                            ? (0, r.jsxs)('div', {
                                  className: h.arrowsContainer,
                                  children: [
                                      (0, r.jsx)(f, {
                                          direction: p.Z.Directions.LEFT,
                                          onClick: this.prev,
                                          className: c()(h.arrowLeft, { [h.arrowDisabled]: 0 === e && 0 === t })
                                      }),
                                      (0, r.jsx)(f, {
                                          direction: p.Z.Directions.RIGHT,
                                          onClick: this.next,
                                          className: c()(h.arrowRight, { [h.arrowDisabled]: e === this.getMaxIndex() && 1 === t })
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                (0, r.jsx)('div', {
                    className: c()(h.scrollerContainer, l),
                    children: (0, r.jsx)(u.AdvancedScrollerNone, {
                        ref: this.advancedScrollerRef,
                        orientation: 'horizontal',
                        className: h.scroller,
                        children: (0, r.jsx)('div', {
                            className: h.scroller,
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
t.Z = (0, _.Z)(g);
