n.d(t, { Z: () => N }), n(47120);
var i,
    a,
    r = n(200651),
    l = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(392711),
    d = n.n(c),
    u = n(846519),
    m = n(481060),
    h = n(570140),
    p = n(578361),
    g = n(768762),
    _ = n(259580),
    x = n(585483),
    C = n(981631),
    v = n(388032),
    f = n(262309);
function I(e, t, n) {
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
let b = {
    JUMP: 'jump',
    NEXT: 'next',
    PREVIOUS: 'previous'
};
class j extends (i = l.PureComponent) {
    componentDidMount() {
        x.S.subscribe(C.CkL.CAROUSEL_PREV, this.handlePrevious), x.S.subscribe(C.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        x.S.unsubscribe(C.CkL.CAROUSEL_PREV, this.handlePrevious), x.S.unsubscribe(C.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let { current: e, count: t, includeHitboxPadding: n, arrowClassName: i, paginationDotClassName: a, paginationDotSelectedClassName: l, paginationArrowIconType: s = 'arrow' } = this.props,
            c = o()(f.arrowHitbox, { [f.arrowHitboxPadding]: n }, i);
        return (0, r.jsxs)('div', {
            className: o()(f.controls, this.props.className),
            children: [
                (0, r.jsx)(m.zxk, {
                    look: m.zxk.Looks.BLANK,
                    className: c,
                    onClick: this.handlePrevious,
                    'aria-label': v.intl.string(v.t.vgfxaG),
                    children:
                        'caret' === s
                            ? (0, r.jsx)(_.Z, {
                                  className: f.arrow,
                                  direction: _.Z.Directions.LEFT
                              })
                            : (0, r.jsx)(g.Z, {
                                  className: f.arrow,
                                  direction: g.Z.Directions.LEFT
                              })
                }),
                (0, r.jsx)('div', {
                    className: f.dots,
                    children: d().times(t, (t) =>
                        (0, r.jsx)(
                            m.zxk,
                            {
                                look: m.zxk.Looks.BLANK,
                                size: m.zxk.Sizes.NONE,
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? o()(f.dotSelected, l) : o()(f.dotNormal, a),
                                'aria-label': v.intl.formatToPlainString(v.t['2SXOrK'], { pageNumber: t + 1 })
                            },
                            'dot-'.concat(t)
                        )
                    )
                }),
                (0, r.jsx)(m.zxk, {
                    look: m.zxk.Looks.BLANK,
                    className: c,
                    onClick: this.handleNext,
                    'aria-label': v.intl.string(v.t.XiOHRU),
                    children:
                        'caret' === s
                            ? (0, r.jsx)(_.Z, {
                                  className: f.arrow,
                                  direction: _.Z.Directions.RIGHT
                              })
                            : (0, r.jsx)(g.Z, {
                                  className: f.arrow,
                                  direction: g.Z.Directions.RIGHT
                              })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            I(this, 'handleDotClick', (e) => {
                let { onSetItem: t, onIntentionalChange: n, current: i } = this.props;
                null == n || n(i, e, b.JUMP), t(e);
            }),
            I(this, 'handleNext', () => {
                let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
                    i = n(1);
                null == e || e(t, i, b.NEXT);
            }),
            I(this, 'handlePrevious', () => {
                let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
                    i = n(-1);
                null == e || e(t, i, b.PREVIOUS);
            });
    }
}
I(j, 'defaultProps', { includeHitboxPadding: !0 });
class S extends (a = l.PureComponent) {
    componentDidMount() {
        h.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocusChange), this.props.initialPaused || this.state.paused || this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer(), h.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocusChange);
    }
    componentDidUpdate(e, t) {
        let n, i;
        let a = ((n = this.props), (i = this.state), !n.initialPaused && !i.paused),
            r = !e.initialPaused && !t.paused;
        a && !r ? this.startTimer() : !a && r && this.stopTimer();
        let { items: l } = this.props,
            { visibleIndex: s } = this.state;
        null == l[s] && this.changeItem(l, 1);
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
        let { onChangeItem: i } = this.props;
        null == i || i(e[n], this.state.visibleIndex, n);
        let a = t > 0 ? p.n.LEFT : p.n.RIGHT;
        return (
            this.setState({
                visibleIndex: n,
                direction: a
            }),
            n
        );
    }
    render() {
        let { items: e, renderItem: t, className: n, slideAnimatorClassName: i, slideAnimatorSpringSettings: a, slideAnimatorFadeInOut: l, paginationClassName: s, paginationArrowClassName: c, paginationArrowIconType: d, paginationDotClassName: u, paginationDotSelectedClassName: m, themedPagination: h, includeHitboxPadding: g, style: _, aspectRatio: x, children: C } = this.props,
            { visibleIndex: v } = this.state;
        return (0, r.jsxs)('div', {
            className: f.root,
            children: [
                (0, r.jsxs)('div', {
                    className: o()(f.carouselContainer, n),
                    style: _,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, r.jsx)('div', {
                            style: { aspectRatio: x },
                            children: (0, r.jsx)(p.Z, {
                                className: o()(f.carousel, i),
                                step: v,
                                direction: this.getCurrentDirection(),
                                springSettings: a,
                                fadeInOut: l,
                                children: t(e[v], v)
                            })
                        }),
                        e.length > 1 &&
                            (0, r.jsx)(j, {
                                className: o()(s, h ? f.themedPagination : f.pagination),
                                arrowClassName: c,
                                includeHitboxPadding: g,
                                current: v,
                                count: e.length,
                                onChangePage: (t) => this.changeItem(e, t),
                                onSetItem: this.handleSetItem,
                                onIntentionalChange: this.handleIntentionalChange,
                                paginationArrowIconType: d,
                                paginationDotClassName: u,
                                paginationDotSelectedClassName: m
                            })
                    ]
                }),
                null != C &&
                    C({
                        step: v,
                        direction: this.getCurrentDirection()
                    })
            ]
        });
    }
    constructor(e) {
        super(e),
            I(this, 'timer', new u.Xp()),
            I(this, 'handleWindowFocusChange', (e) => {
                let { focused: t } = e;
                this.setState({ paused: !t });
            }),
            I(this, 'getCurrentDirection', () => this.state.direction),
            I(this, 'nextItem', () => {
                let { items: e } = this.props;
                this.changeItem(e, 1);
            }),
            I(this, 'previousItem', () => {
                let { items: e } = this.props;
                this.changeItem(e, -1);
            }),
            I(this, 'handleSetItem', (e) => {
                let { visibleIndex: t } = this.state,
                    { items: n } = this.props;
                this.changeItem(n, e - t);
            }),
            I(this, 'handleMouseEnter', () => {
                this.setState({ paused: !0 });
            }),
            I(this, 'handleMouseLeave', () => {
                this.setState({ paused: !1 });
            }),
            I(this, 'handleIntentionalChange', (e, t, n) => {
                let { items: i, onIntentionalChange: a } = this.props;
                return null == a ? void 0 : a(i[t], e, t, n);
            }),
            (this.state = {
                visibleIndex: !0 === e.randomize ? d().random(0, e.items.length - 1) : 0,
                direction: p.n.LEFT,
                paused: !1
            });
    }
}
I(S, 'defaultProps', { aspectRatio: 16 / 9 });
let N = S;
