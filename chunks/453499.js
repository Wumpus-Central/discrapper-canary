n(47120);
var i,
    a,
    r,
    l,
    o = n(200651),
    s = n(192379),
    c = n(120356),
    d = n.n(c),
    u = n(392711),
    m = n.n(u),
    p = n(846519),
    h = n(481060),
    g = n(570140),
    C = n(578361),
    x = n(768762),
    v = n(259580),
    _ = n(585483),
    f = n(981631),
    b = n(388032),
    I = n(262309);
function S(e, t, n) {
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
((l = i || (i = {})).ARROW = 'arrow'), (l.CARET = 'caret');
class N extends (a = s.PureComponent) {
    componentDidMount() {
        _.S.subscribe(f.CkL.CAROUSEL_PREV, this.handlePrevious), _.S.subscribe(f.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        _.S.unsubscribe(f.CkL.CAROUSEL_PREV, this.handlePrevious), _.S.unsubscribe(f.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let { current: e, count: t, includeHitboxPadding: n, arrowClassName: i, paginationDotClassName: a, paginationDotSelectedClassName: r, paginationArrowIconType: l = 'arrow' } = this.props,
            s = d()(I.arrowHitbox, { [I.arrowHitboxPadding]: n }, i);
        return (0, o.jsxs)('div', {
            className: d()(I.controls, this.props.className),
            children: [
                (0, o.jsx)(h.Button, {
                    look: h.Button.Looks.BLANK,
                    className: s,
                    onClick: this.handlePrevious,
                    'aria-label': b.intl.string(b.t.vgfxaG),
                    children:
                        'caret' === l
                            ? (0, o.jsx)(v.Z, {
                                  className: I.arrow,
                                  direction: v.Z.Directions.LEFT
                              })
                            : (0, o.jsx)(x.Z, {
                                  className: I.arrow,
                                  direction: x.Z.Directions.LEFT
                              })
                }),
                (0, o.jsx)('div', {
                    className: I.dots,
                    children: m().times(t, (t) =>
                        (0, o.jsx)(
                            h.Button,
                            {
                                look: h.Button.Looks.BLANK,
                                size: h.Button.Sizes.NONE,
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? d()(I.dotSelected, r) : d()(I.dotNormal, a),
                                'aria-label': b.intl.formatToPlainString(b.t['2SXOrK'], { pageNumber: t + 1 })
                            },
                            'dot-'.concat(t)
                        )
                    )
                }),
                (0, o.jsx)(h.Button, {
                    look: h.Button.Looks.BLANK,
                    className: s,
                    onClick: this.handleNext,
                    'aria-label': b.intl.string(b.t.XiOHRU),
                    children:
                        'caret' === l
                            ? (0, o.jsx)(v.Z, {
                                  className: I.arrow,
                                  direction: v.Z.Directions.RIGHT
                              })
                            : (0, o.jsx)(x.Z, {
                                  className: I.arrow,
                                  direction: x.Z.Directions.RIGHT
                              })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            S(this, 'handleDotClick', (e) => {
                let { onSetItem: t, onIntentionalChange: n, current: i } = this.props;
                null == n || n(i, e, j.JUMP), t(e);
            }),
            S(this, 'handleNext', () => {
                let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
                    i = n(1);
                null == e || e(t, i, j.NEXT);
            }),
            S(this, 'handlePrevious', () => {
                let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
                    i = n(-1);
                null == e || e(t, i, j.PREVIOUS);
            });
    }
}
S(N, 'defaultProps', { includeHitboxPadding: !0 });
class E extends (r = s.PureComponent) {
    componentDidMount() {
        g.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocusChange), !this.props.initialPaused && !this.state.paused && this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer(), g.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocusChange);
    }
    componentDidUpdate(e, t) {
        let n, i, a, r;
        let l = ((n = this.props), (i = this.state), !n.initialPaused && !i.paused);
        let o = ((a = e), (r = t), !a.initialPaused && !r.paused);
        l && !o ? this.startTimer() : !l && o && this.stopTimer();
        let { items: s } = this.props,
            { visibleIndex: c } = this.state;
        null == s[c] && this.changeItem(s, 1);
    }
    startTimer() {
        if (null != this.props.delay) this.timer.start(this.props.delay, this.nextItem);
    }
    stopTimer() {
        if (null != this.props.delay) this.timer.stop();
    }
    changeItem(e, t) {
        let n = this.state.visibleIndex + t;
        n < 0 ? (n = e.length - 1) : n > e.length - 1 && (n = 0);
        let { onChangeItem: i } = this.props;
        null == i || i(e[n], this.state.visibleIndex, n);
        let a = t > 0 ? C.n.LEFT : C.n.RIGHT;
        return (
            this.setState({
                visibleIndex: n,
                direction: a
            }),
            n
        );
    }
    render() {
        let { items: e, renderItem: t, className: n, slideAnimatorClassName: i, slideAnimatorSpringSettings: a, slideAnimatorFadeInOut: r, paginationClassName: l, paginationArrowClassName: s, paginationArrowIconType: c, paginationDotClassName: u, paginationDotSelectedClassName: m, themedPagination: p, includeHitboxPadding: h, style: g, aspectRatio: x, children: v } = this.props,
            { visibleIndex: _ } = this.state;
        return (0, o.jsxs)('div', {
            className: I.root,
            children: [
                (0, o.jsxs)('div', {
                    className: d()(I.carouselContainer, n),
                    style: g,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, o.jsx)('div', {
                            style: { aspectRatio: x },
                            children: (0, o.jsx)(C.Z, {
                                className: d()(I.carousel, i),
                                step: _,
                                direction: this.getCurrentDirection(),
                                springSettings: a,
                                fadeInOut: r,
                                children: t(e[_], _)
                            })
                        }),
                        e.length > 1 &&
                            (0, o.jsx)(N, {
                                className: d()(l, p ? I.themedPagination : I.pagination),
                                arrowClassName: s,
                                includeHitboxPadding: h,
                                current: _,
                                count: e.length,
                                onChangePage: (t) => this.changeItem(e, t),
                                onSetItem: this.handleSetItem,
                                onIntentionalChange: this.handleIntentionalChange,
                                paginationArrowIconType: c,
                                paginationDotClassName: u,
                                paginationDotSelectedClassName: m
                            })
                    ]
                }),
                null != v &&
                    v({
                        step: _,
                        direction: this.getCurrentDirection()
                    })
            ]
        });
    }
    constructor(e) {
        super(e),
            S(this, 'timer', new p.Xp()),
            S(this, 'handleWindowFocusChange', (e) => {
                let { focused: t } = e;
                this.setState({ paused: !t });
            }),
            S(this, 'getCurrentDirection', () => this.state.direction),
            S(this, 'nextItem', () => {
                let { items: e } = this.props;
                this.changeItem(e, 1);
            }),
            S(this, 'previousItem', () => {
                let { items: e } = this.props;
                this.changeItem(e, -1);
            }),
            S(this, 'handleSetItem', (e) => {
                let { visibleIndex: t } = this.state,
                    { items: n } = this.props;
                this.changeItem(n, e - t);
            }),
            S(this, 'handleMouseEnter', () => {
                this.setState({ paused: !0 });
            }),
            S(this, 'handleMouseLeave', () => {
                this.setState({ paused: !1 });
            }),
            S(this, 'handleIntentionalChange', (e, t, n) => {
                let { items: i, onIntentionalChange: a } = this.props;
                return null == a ? void 0 : a(i[t], e, t, n);
            }),
            (this.state = {
                visibleIndex: !0 === e.randomize ? m().random(0, e.items.length - 1) : 0,
                direction: C.n.LEFT,
                paused: !1
            });
    }
}
S(E, 'defaultProps', { aspectRatio: 16 / 9 }), (t.Z = E);
