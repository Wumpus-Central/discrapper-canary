a.d(t, { A: () => b });
var n = a(627968),
    i = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(735438),
    o = a.n(r),
    c = a(451988),
    d = a(397927),
    u = a(73153),
    h = a(725951),
    m = a(203982),
    p = a(652215),
    _ = a(985018),
    g = a(881425);
let x = 16 / 9;
class A extends i.PureComponent {
    static defaultProps = { includeHitboxPadding: !0 };
    componentDidMount() {
        m._.subscribe(p.jej.CAROUSEL_PREV, this.handlePrevious), m._.subscribe(p.jej.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        m._.unsubscribe(p.jej.CAROUSEL_PREV, this.handlePrevious),
            m._.unsubscribe(p.jej.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let {
                current: e,
                count: t,
                includeHitboxPadding: a,
                arrowClassName: i,
                paginationDotClassName: s,
                paginationDotSelectedClassName: r,
                paginationArrowIconType: c = "arrow",
            } = this.props,
            u = l()(g.sb, { [g.JU]: a }, i);
        return (0, n.jsxs)("div", {
            className: l()(g.ne, this.props.className),
            children: [
                (0, n.jsx)("div", {
                    className: u,
                    children: (0, n.jsx)(d.K0, {
                        variant: "icon-only",
                        icon: "caret" === c ? d.n2b : d.rJJ,
                        "aria-label": _.intl.string(_.t.vgfxaA),
                        onClick: this.handlePrevious,
                    }),
                }),
                (0, n.jsx)("div", {
                    className: g.r$,
                    children: o().times(t, (t) =>
                        (0, n.jsx)(
                            d.DUT,
                            {
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? l()(g.NU, r) : l()(g.Lw, s),
                                "aria-label": _.intl.formatToPlainString(_.t["2SXOrM"], { pageNumber: t + 1 }),
                            },
                            `dot-${t}`,
                        ),
                    ),
                }),
                (0, n.jsx)("div", {
                    className: u,
                    children: (0, n.jsx)(d.K0, {
                        variant: "icon-only",
                        icon: "caret" === c ? d._BQ : d.EdP,
                        "aria-label": _.intl.string(_.t.XiOHRX),
                        onClick: this.handleNext,
                    }),
                }),
            ],
        });
    }
    handleDotClick = (e) => {
        let { onSetItem: t, onIntentionalChange: a, current: n } = this.props;
        a?.(n, e, "jump"), t(e);
    };
    handleNext = () => {
        let { onIntentionalChange: e, current: t, onChangePage: a } = this.props,
            n = a(1);
        e?.(t, n, "next");
    };
    handlePrevious = () => {
        let { onIntentionalChange: e, current: t, onChangePage: a } = this.props,
            n = a(-1);
        e?.(t, n, "previous");
    };
}
class C extends i.PureComponent {
    timer = new c.IX();
    static defaultProps = { aspectRatio: x };
    constructor(e) {
        super(e),
            (this.state = {
                visibleIndex: !0 === e.randomize ? o().random(0, e.items.length - 1) : 0,
                direction: h.f.LEFT,
                paused: !1,
            });
    }
    handleWindowFocusChange = (e) => {
        let { focused: t } = e;
        this.setState({ paused: !t });
    };
    componentDidMount() {
        u.h.subscribe("WINDOW_FOCUS", this.handleWindowFocusChange),
            this.props.initialPaused || this.state.paused || this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer(), u.h.unsubscribe("WINDOW_FOCUS", this.handleWindowFocusChange);
    }
    componentDidUpdate(e, t) {
        let a = (e, t) => !e.initialPaused && !t.paused,
            n = a(this.props, this.state),
            i = a(e, t);
        n && !i ? this.startTimer() : !n && i && this.stopTimer();
        let { items: s } = this.props,
            { visibleIndex: l } = this.state;
        null == s[l] && this.changeItem(s, 1);
    }
    startTimer() {
        null != this.props.delay && this.timer.start(this.props.delay, this.nextItem);
    }
    stopTimer() {
        null != this.props.delay && this.timer.stop();
    }
    changeItem(e, t) {
        let a = this.state.visibleIndex + t;
        a < 0 ? (a = e.length - 1) : a > e.length - 1 && (a = 0);
        let { onChangeItem: n } = this.props;
        n?.(e[a], this.state.visibleIndex, a);
        let i = t > 0 ? h.f.LEFT : h.f.RIGHT;
        return this.setState({ visibleIndex: a, direction: i }), a;
    }
    getCurrentDirection = () => this.state.direction;
    nextItem = () => {
        let { items: e } = this.props;
        this.changeItem(e, 1);
    };
    previousItem = () => {
        let { items: e } = this.props;
        this.changeItem(e, -1);
    };
    render() {
        let {
                items: e,
                renderItem: t,
                className: a,
                slideAnimatorClassName: i,
                slideAnimatorSpringSettings: s,
                slideAnimatorFadeInOut: r,
                paginationClassName: o,
                paginationArrowClassName: c,
                paginationArrowIconType: d,
                paginationDotClassName: u,
                paginationDotSelectedClassName: m,
                themedPagination: p,
                includeHitboxPadding: _,
                style: x,
                aspectRatio: C,
                children: b,
            } = this.props,
            { visibleIndex: v } = this.state;
        return (0, n.jsxs)("div", {
            className: g.zr,
            children: [
                (0, n.jsxs)("div", {
                    className: l()(g.Cf, a),
                    style: x,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, n.jsx)("div", {
                            style: { aspectRatio: C },
                            children: (0, n.jsx)(h.A, {
                                className: l()(g.Dk, i),
                                step: v,
                                direction: this.getCurrentDirection(),
                                springSettings: s,
                                fadeInOut: r,
                                children: t(e[v], v),
                            }),
                        }),
                        e.length > 1 &&
                            (0, n.jsx)(A, {
                                className: l()(o, p ? g.S$ : g.X$),
                                arrowClassName: c,
                                includeHitboxPadding: _,
                                current: v,
                                count: e.length,
                                onChangePage: (t) => this.changeItem(e, t),
                                onSetItem: this.handleSetItem,
                                onIntentionalChange: this.handleIntentionalChange,
                                paginationArrowIconType: d,
                                paginationDotClassName: u,
                                paginationDotSelectedClassName: m,
                            }),
                    ],
                }),
                null != b && b({ step: v, direction: this.getCurrentDirection() }),
            ],
        });
    }
    handleSetItem = (e) => {
        let { visibleIndex: t } = this.state,
            { items: a } = this.props;
        this.changeItem(a, e - t);
    };
    handleMouseEnter = () => {
        this.setState({ paused: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ paused: !1 });
    };
    handleIntentionalChange = (e, t, a) => {
        let { items: n, onIntentionalChange: i } = this.props;
        return i?.(n[t], e, t, a);
    };
}
let b = C;
