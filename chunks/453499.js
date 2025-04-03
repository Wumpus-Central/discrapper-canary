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
    f = n(259580),
    _ = n(585483),
    b = n(981631),
    x = n(388032),
    v = n(523955);
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
        _.S.subscribe(b.CkL.CAROUSEL_PREV, this.handlePrevious), _.S.subscribe(b.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        _.S.unsubscribe(b.CkL.CAROUSEL_PREV, this.handlePrevious), _.S.unsubscribe(b.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let { current: e, count: t, includeHitboxPadding: n, arrowClassName: r, paginationDotClassName: a, paginationDotSelectedClassName: l, paginationArrowIconType: o = 'arrow' } = this.props,
            c = s()(v.arrowHitbox, { [v.arrowHitboxPadding]: n }, r);
        return (0, i.jsxs)('div', {
            className: s()(v.controls, this.props.className),
            children: [
                (0, i.jsx)(p.zxk, {
                    look: p.zxk.Looks.BLANK,
                    className: c,
                    onClick: this.handlePrevious,
                    'aria-label': x.NW.string(x.t.vgfxaG),
                    children:
                        'caret' === o
                            ? (0, i.jsx)(f.Z, {
                                  className: v.arrow,
                                  direction: f.Z.Directions.LEFT
                              })
                            : (0, i.jsx)(g.Z, {
                                  className: v.arrow,
                                  direction: g.Z.Directions.LEFT
                              })
                }),
                (0, i.jsx)('div', {
                    className: v.dots,
                    children: d().times(t, (t) =>
                        (0, i.jsx)(
                            p.zxk,
                            {
                                look: p.zxk.Looks.BLANK,
                                size: p.zxk.Sizes.NONE,
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? s()(v.dotSelected, l) : s()(v.dotNormal, a),
                                'aria-label': x.NW.formatToPlainString(x.t['2SXOrK'], { pageNumber: t + 1 })
                            },
                            'dot-'.concat(t)
                        )
                    )
                }),
                (0, i.jsx)(p.zxk, {
                    look: p.zxk.Looks.BLANK,
                    className: c,
                    onClick: this.handleNext,
                    'aria-label': x.NW.string(x.t.XiOHRU),
                    children:
                        'caret' === o
                            ? (0, i.jsx)(f.Z, {
                                  className: v.arrow,
                                  direction: f.Z.Directions.RIGHT
                              })
                            : (0, i.jsx)(g.Z, {
                                  className: v.arrow,
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
        let n = (e, t) => !e.initialPaused && !t.paused,
            r = n(this.props, this.state),
            a = n(e, t);
        r && !a ? this.startTimer() : !r && a && this.stopTimer();
        let { items: i } = this.props,
            { visibleIndex: l } = this.state;
        null == i[l] && this.changeItem(i, 1);
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
        let { items: e, renderItem: t, className: n, slideAnimatorClassName: r, slideAnimatorSpringSettings: a, slideAnimatorFadeInOut: l, paginationClassName: o, paginationArrowClassName: c, paginationArrowIconType: d, paginationDotClassName: u, paginationDotSelectedClassName: p, themedPagination: m, includeHitboxPadding: g, style: f, aspectRatio: _, children: b } = this.props,
            { visibleIndex: x } = this.state;
        return (0, i.jsxs)('div', {
            className: v.root,
            children: [
                (0, i.jsxs)('div', {
                    className: s()(v.carouselContainer, n),
                    style: f,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, i.jsx)('div', {
                            style: { aspectRatio: _ },
                            children: (0, i.jsx)(h.Z, {
                                className: s()(v.carousel, r),
                                step: x,
                                direction: this.getCurrentDirection(),
                                springSettings: a,
                                fadeInOut: l,
                                children: t(e[x], x)
                            })
                        }),
                        e.length > 1 &&
                            (0, i.jsx)(y, {
                                className: s()(o, m ? v.themedPagination : v.pagination),
                                arrowClassName: c,
                                includeHitboxPadding: g,
                                current: x,
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
                null != b &&
                    b({
                        step: x,
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
