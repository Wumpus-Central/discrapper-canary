n.d(t, { Z: () => I }), n(47120);
var r,
    a,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    s = n.n(o),
    c = n(392711),
    d = n.n(c),
    u = n(846519),
    p = n(481060),
    m = n(570140),
    h = n(578361),
    g = n(768762),
    _ = n(259580),
    f = n(585483),
    v = n(981631),
    b = n(388032),
    x = n(604623);
function C(e, t, n) {
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
let j = {
    JUMP: 'jump',
    NEXT: 'next',
    PREVIOUS: 'previous'
};
class y extends (r = l.PureComponent) {
    componentDidMount() {
        f.S.subscribe(v.CkL.CAROUSEL_PREV, this.handlePrevious), f.S.subscribe(v.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        f.S.unsubscribe(v.CkL.CAROUSEL_PREV, this.handlePrevious), f.S.unsubscribe(v.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let { current: e, count: t, includeHitboxPadding: n, arrowClassName: r, paginationDotClassName: a, paginationDotSelectedClassName: l, paginationArrowIconType: o = 'arrow' } = this.props,
            c = s()(x.arrowHitbox, { [x.arrowHitboxPadding]: n }, r);
        return (0, i.jsxs)('div', {
            className: s()(x.controls, this.props.className),
            children: [
                (0, i.jsx)(p.zxk, {
                    look: p.zxk.Looks.BLANK,
                    className: c,
                    onClick: this.handlePrevious,
                    'aria-label': b.NW.string(b.t.vgfxaG),
                    children:
                        'caret' === o
                            ? (0, i.jsx)(_.Z, {
                                  className: x.arrow,
                                  direction: _.Z.Directions.LEFT
                              })
                            : (0, i.jsx)(g.Z, {
                                  className: x.arrow,
                                  direction: g.Z.Directions.LEFT
                              })
                }),
                (0, i.jsx)('div', {
                    className: x.dots,
                    children: d().times(t, (t) =>
                        (0, i.jsx)(
                            p.zxk,
                            {
                                look: p.zxk.Looks.BLANK,
                                size: p.zxk.Sizes.NONE,
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? s()(x.dotSelected, l) : s()(x.dotNormal, a),
                                'aria-label': b.NW.formatToPlainString(b.t['2SXOrK'], { pageNumber: t + 1 })
                            },
                            'dot-'.concat(t)
                        )
                    )
                }),
                (0, i.jsx)(p.zxk, {
                    look: p.zxk.Looks.BLANK,
                    className: c,
                    onClick: this.handleNext,
                    'aria-label': b.NW.string(b.t.XiOHRU),
                    children:
                        'caret' === o
                            ? (0, i.jsx)(_.Z, {
                                  className: x.arrow,
                                  direction: _.Z.Directions.RIGHT
                              })
                            : (0, i.jsx)(g.Z, {
                                  className: x.arrow,
                                  direction: g.Z.Directions.RIGHT
                              })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            C(this, 'handleDotClick', (e) => {
                let { onSetItem: t, onIntentionalChange: n, current: r } = this.props;
                null == n || n(r, e, j.JUMP), t(e);
            }),
            C(this, 'handleNext', () => {
                let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
                    r = n(1);
                null == e || e(t, r, j.NEXT);
            }),
            C(this, 'handlePrevious', () => {
                let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
                    r = n(-1);
                null == e || e(t, r, j.PREVIOUS);
            });
    }
}
C(y, 'defaultProps', { includeHitboxPadding: !0 });
class O extends (a = l.PureComponent) {
    componentDidMount() {
        m.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocusChange), this.props.initialPaused || this.state.paused || this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer(), m.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocusChange);
    }
    componentDidUpdate(e, t) {
        let n, r;
        let a = ((n = this.props), (r = this.state), !n.initialPaused && !r.paused),
            i = !e.initialPaused && !t.paused;
        a && !i ? this.startTimer() : !a && i && this.stopTimer();
        let { items: l } = this.props,
            { visibleIndex: o } = this.state;
        null == l[o] && this.changeItem(l, 1);
    }
    startTimer() {
        null != this.props.delay && this.timer.start(this.props.delay, this.nextItem);
    }
    stopTimer() {
        null != this.props.delay && this.timer.stop();
    }
    changeItem(e, t) {
        let n = this.state.visibleIndex + t;
        n < 0 ? (n = e.length - 1) : n > e.length - 1 && (n = 0);
        let { onChangeItem: r } = this.props;
        null == r || r(e[n], this.state.visibleIndex, n);
        let a = t > 0 ? h.n.LEFT : h.n.RIGHT;
        return (
            this.setState({
                visibleIndex: n,
                direction: a
            }),
            n
        );
    }
    render() {
        let { items: e, renderItem: t, className: n, slideAnimatorClassName: r, slideAnimatorSpringSettings: a, slideAnimatorFadeInOut: l, paginationClassName: o, paginationArrowClassName: c, paginationArrowIconType: d, paginationDotClassName: u, paginationDotSelectedClassName: p, themedPagination: m, includeHitboxPadding: g, style: _, aspectRatio: f, children: v } = this.props,
            { visibleIndex: b } = this.state;
        return (0, i.jsxs)('div', {
            className: x.root,
            children: [
                (0, i.jsxs)('div', {
                    className: s()(x.carouselContainer, n),
                    style: _,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, i.jsx)('div', {
                            style: { aspectRatio: f },
                            children: (0, i.jsx)(h.Z, {
                                className: s()(x.carousel, r),
                                step: b,
                                direction: this.getCurrentDirection(),
                                springSettings: a,
                                fadeInOut: l,
                                children: t(e[b], b)
                            })
                        }),
                        e.length > 1 &&
                            (0, i.jsx)(y, {
                                className: s()(o, m ? x.themedPagination : x.pagination),
                                arrowClassName: c,
                                includeHitboxPadding: g,
                                current: b,
                                count: e.length,
                                onChangePage: (t) => this.changeItem(e, t),
                                onSetItem: this.handleSetItem,
                                onIntentionalChange: this.handleIntentionalChange,
                                paginationArrowIconType: d,
                                paginationDotClassName: u,
                                paginationDotSelectedClassName: p
                            })
                    ]
                }),
                null != v &&
                    v({
                        step: b,
                        direction: this.getCurrentDirection()
                    })
            ]
        });
    }
    constructor(e) {
        super(e),
            C(this, 'timer', new u.Xp()),
            C(this, 'handleWindowFocusChange', (e) => {
                let { focused: t } = e;
                this.setState({ paused: !t });
            }),
            C(this, 'getCurrentDirection', () => this.state.direction),
            C(this, 'nextItem', () => {
                let { items: e } = this.props;
                this.changeItem(e, 1);
            }),
            C(this, 'previousItem', () => {
                let { items: e } = this.props;
                this.changeItem(e, -1);
            }),
            C(this, 'handleSetItem', (e) => {
                let { visibleIndex: t } = this.state,
                    { items: n } = this.props;
                this.changeItem(n, e - t);
            }),
            C(this, 'handleMouseEnter', () => {
                this.setState({ paused: !0 });
            }),
            C(this, 'handleMouseLeave', () => {
                this.setState({ paused: !1 });
            }),
            C(this, 'handleIntentionalChange', (e, t, n) => {
                let { items: r, onIntentionalChange: a } = this.props;
                return null == a ? void 0 : a(r[t], e, t, n);
            }),
            (this.state = {
                visibleIndex: !0 === e.randomize ? d().random(0, e.items.length - 1) : 0,
                direction: h.n.LEFT,
                paused: !1
            });
    }
}
C(O, 'defaultProps', { aspectRatio: 16 / 9 });
let I = O;
