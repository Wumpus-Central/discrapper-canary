n(47120);
var s,
    i,
    a,
    l,
    o = n(200651),
    r = n(192379),
    h = n(120356),
    c = n.n(h),
    d = n(392711),
    u = n.n(d),
    p = n(846519),
    m = n(481060),
    g = n(570140),
    x = n(578361),
    N = n(768762),
    C = n(259580),
    I = n(585483),
    L = n(981631),
    S = n(388032),
    v = n(262309);
function E(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
let f = {
    JUMP: 'jump',
    NEXT: 'next',
    PREVIOUS: 'previous'
};
((l = s || (s = {})).ARROW = 'arrow'), (l.CARET = 'caret');
class b extends (i = r.PureComponent) {
    componentDidMount() {
        I.S.subscribe(L.CkL.CAROUSEL_PREV, this.handlePrevious), I.S.subscribe(L.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        I.S.unsubscribe(L.CkL.CAROUSEL_PREV, this.handlePrevious), I.S.unsubscribe(L.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let { current: t, count: e, includeHitboxPadding: n, arrowClassName: s, paginationDotClassName: i, paginationDotSelectedClassName: a, paginationArrowIconType: l = 'arrow' } = this.props,
            r = c()(v.arrowHitbox, { [v.arrowHitboxPadding]: n }, s);
        return (0, o.jsxs)('div', {
            className: c()(v.controls, this.props.className),
            children: [
                (0, o.jsx)(m.Button, {
                    look: m.Button.Looks.BLANK,
                    className: r,
                    onClick: this.handlePrevious,
                    'aria-label': S.intl.string(S.t.vgfxaG),
                    children:
                        'caret' === l
                            ? (0, o.jsx)(C.Z, {
                                  className: v.arrow,
                                  direction: C.Z.Directions.LEFT
                              })
                            : (0, o.jsx)(N.Z, {
                                  className: v.arrow,
                                  direction: N.Z.Directions.LEFT
                              })
                }),
                (0, o.jsx)('div', {
                    className: v.dots,
                    children: u().times(e, (e) =>
                        (0, o.jsx)(
                            m.Button,
                            {
                                look: m.Button.Looks.BLANK,
                                size: m.Button.Sizes.NONE,
                                onClick: () => this.handleDotClick(e),
                                className: e === t ? c()(v.dotSelected, a) : c()(v.dotNormal, i),
                                'aria-label': S.intl.formatToPlainString(S.t['2SXOrK'], { pageNumber: e + 1 })
                            },
                            'dot-'.concat(e)
                        )
                    )
                }),
                (0, o.jsx)(m.Button, {
                    look: m.Button.Looks.BLANK,
                    className: r,
                    onClick: this.handleNext,
                    'aria-label': S.intl.string(S.t.XiOHRU),
                    children:
                        'caret' === l
                            ? (0, o.jsx)(C.Z, {
                                  className: v.arrow,
                                  direction: C.Z.Directions.RIGHT
                              })
                            : (0, o.jsx)(N.Z, {
                                  className: v.arrow,
                                  direction: N.Z.Directions.RIGHT
                              })
                })
            ]
        });
    }
    constructor(...t) {
        super(...t),
            E(this, 'handleDotClick', (t) => {
                let { onSetItem: e, onIntentionalChange: n, current: s } = this.props;
                null == n || n(s, t, f.JUMP), e(t);
            }),
            E(this, 'handleNext', () => {
                let { onIntentionalChange: t, current: e, onChangePage: n } = this.props,
                    s = n(1);
                null == t || t(e, s, f.NEXT);
            }),
            E(this, 'handlePrevious', () => {
                let { onIntentionalChange: t, current: e, onChangePage: n } = this.props,
                    s = n(-1);
                null == t || t(e, s, f.PREVIOUS);
            });
    }
}
E(b, 'defaultProps', { includeHitboxPadding: !0 });
class j extends (a = r.PureComponent) {
    componentDidMount() {
        g.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocusChange), !this.props.initialPaused && !this.state.paused && this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer(), g.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocusChange);
    }
    componentDidUpdate(t, e) {
        let n, s, i, a;
        let l = ((n = this.props), (s = this.state), !n.initialPaused && !s.paused);
        let o = ((i = t), (a = e), !i.initialPaused && !a.paused);
        l && !o ? this.startTimer() : !l && o && this.stopTimer();
        let { items: r } = this.props,
            { visibleIndex: h } = this.state;
        null == r[h] && this.changeItem(r, 1);
    }
    startTimer() {
        if (null != this.props.delay) this.timer.start(this.props.delay, this.nextItem);
    }
    stopTimer() {
        if (null != this.props.delay) this.timer.stop();
    }
    changeItem(t, e) {
        let n = this.state.visibleIndex + e;
        n < 0 ? (n = t.length - 1) : n > t.length - 1 && (n = 0);
        let { onChangeItem: s } = this.props;
        null == s || s(t[n], this.state.visibleIndex, n);
        let i = e > 0 ? x.n.LEFT : x.n.RIGHT;
        return (
            this.setState({
                visibleIndex: n,
                direction: i
            }),
            n
        );
    }
    render() {
        let { items: t, renderItem: e, className: n, slideAnimatorClassName: s, slideAnimatorSpringSettings: i, slideAnimatorFadeInOut: a, paginationClassName: l, paginationArrowClassName: r, paginationArrowIconType: h, paginationDotClassName: d, paginationDotSelectedClassName: u, themedPagination: p, includeHitboxPadding: m, style: g, aspectRatio: N, children: C } = this.props,
            { visibleIndex: I } = this.state;
        return (0, o.jsxs)('div', {
            className: v.root,
            children: [
                (0, o.jsxs)('div', {
                    className: c()(v.carouselContainer, n),
                    style: g,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, o.jsx)('div', {
                            style: { aspectRatio: N },
                            children: (0, o.jsx)(x.Z, {
                                className: c()(v.carousel, s),
                                step: I,
                                direction: this.getCurrentDirection(),
                                springSettings: i,
                                fadeInOut: a,
                                children: e(t[I], I)
                            })
                        }),
                        t.length > 1 &&
                            (0, o.jsx)(b, {
                                className: c()(l, p ? v.themedPagination : v.pagination),
                                arrowClassName: r,
                                includeHitboxPadding: m,
                                current: I,
                                count: t.length,
                                onChangePage: (e) => this.changeItem(t, e),
                                onSetItem: this.handleSetItem,
                                onIntentionalChange: this.handleIntentionalChange,
                                paginationArrowIconType: h,
                                paginationDotClassName: d,
                                paginationDotSelectedClassName: u
                            })
                    ]
                }),
                null != C &&
                    C({
                        step: I,
                        direction: this.getCurrentDirection()
                    })
            ]
        });
    }
    constructor(t) {
        super(t),
            E(this, 'timer', new p.Xp()),
            E(this, 'handleWindowFocusChange', (t) => {
                let { focused: e } = t;
                this.setState({ paused: !e });
            }),
            E(this, 'getCurrentDirection', () => this.state.direction),
            E(this, 'nextItem', () => {
                let { items: t } = this.props;
                this.changeItem(t, 1);
            }),
            E(this, 'previousItem', () => {
                let { items: t } = this.props;
                this.changeItem(t, -1);
            }),
            E(this, 'handleSetItem', (t) => {
                let { visibleIndex: e } = this.state,
                    { items: n } = this.props;
                this.changeItem(n, t - e);
            }),
            E(this, 'handleMouseEnter', () => {
                this.setState({ paused: !0 });
            }),
            E(this, 'handleMouseLeave', () => {
                this.setState({ paused: !1 });
            }),
            E(this, 'handleIntentionalChange', (t, e, n) => {
                let { items: s, onIntentionalChange: i } = this.props;
                return null == i ? void 0 : i(s[e], t, e, n);
            }),
            (this.state = {
                visibleIndex: !0 === t.randomize ? u().random(0, t.items.length - 1) : 0,
                direction: x.n.LEFT,
                paused: !1
            });
    }
}
E(j, 'defaultProps', { aspectRatio: 16 / 9 }), (e.Z = j);
