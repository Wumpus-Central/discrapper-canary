a.d(t, { A: () => E });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(735438),
    o = a.n(r),
    c = a(451988),
    d = a(408278),
    u = a(921853),
    h = a(477155),
    m = a(939249),
    p = a(320448),
    _ = a(935286),
    g = a(73153),
    x = a(725951),
    A = a(203982),
    f = a(652215),
    C = a(985018),
    v = a(332412);
let b = 16 / 9;
class j extends l.PureComponent {
    static defaultProps = { includeHitboxPadding: !0 };
    componentDidMount() {
        A._.subscribe(f.jej.CAROUSEL_PREV, this.handlePrevious), A._.subscribe(f.jej.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        A._.unsubscribe(f.jej.CAROUSEL_PREV, this.handlePrevious),
            A._.unsubscribe(f.jej.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let {
                current: e,
                count: t,
                includeHitboxPadding: a,
                arrowClassName: l,
                paginationDotClassName: i,
                paginationDotSelectedClassName: r,
                paginationArrowIconType: c = "arrow",
            } = this.props,
            g = s()(v.sb, { [v.JU]: a }, l);
        return (0, n.jsxs)("div", {
            className: s()(v.ne, this.props.className),
            children: [
                (0, n.jsx)("div", {
                    className: g,
                    children: (0, n.jsx)(d.K, {
                        variant: "icon-only",
                        icon: "caret" === c ? u.n : h.r,
                        "aria-label": C.intl.string(C.t.vgfxaA),
                        onClick: this.handlePrevious,
                    }),
                }),
                (0, n.jsx)("div", {
                    className: v.r$,
                    children: o().times(t, (t) =>
                        (0, n.jsx)(
                            m.D,
                            {
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? s()(v.NU, r) : s()(v.Lw, i),
                                "aria-label": C.intl.formatToPlainString(C.t["2SXOrM"], { pageNumber: t + 1 }),
                            },
                            `dot-${t}`,
                        ),
                    ),
                }),
                (0, n.jsx)("div", {
                    className: g,
                    children: (0, n.jsx)(d.K, {
                        variant: "icon-only",
                        icon: "caret" === c ? p._ : _.E,
                        "aria-label": C.intl.string(C.t.XiOHRX),
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
class I extends l.PureComponent {
    timer = new c.IX();
    static defaultProps = { aspectRatio: b };
    constructor(e) {
        super(e),
            (this.state = {
                visibleIndex: !0 === e.randomize ? o().random(0, e.items.length - 1) : 0,
                direction: x.f.LEFT,
                paused: !1,
            });
    }
    handleWindowFocusChange = (e) => {
        let { focused: t } = e;
        this.setState({ paused: !t });
    };
    componentDidMount() {
        g.h.subscribe("WINDOW_FOCUS", this.handleWindowFocusChange),
            this.props.initialPaused || this.state.paused || this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer(), g.h.unsubscribe("WINDOW_FOCUS", this.handleWindowFocusChange);
    }
    componentDidUpdate(e, t) {
        let a = (e, t) => !e.initialPaused && !t.paused,
            n = a(this.props, this.state),
            l = a(e, t);
        n && !l ? this.startTimer() : !n && l && this.stopTimer();
        let { items: i } = this.props,
            { visibleIndex: s } = this.state;
        null == i[s] && this.changeItem(i, 1);
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
        let l = t > 0 ? x.f.LEFT : x.f.RIGHT;
        return this.setState({ visibleIndex: a, direction: l }), a;
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
                slideAnimatorClassName: l,
                slideAnimatorSpringSettings: i,
                slideAnimatorFadeInOut: r,
                paginationClassName: o,
                paginationArrowClassName: c,
                paginationArrowIconType: d,
                paginationDotClassName: u,
                paginationDotSelectedClassName: h,
                themedPagination: m,
                includeHitboxPadding: p,
                style: _,
                aspectRatio: g,
                children: A,
            } = this.props,
            { visibleIndex: f } = this.state;
        return (0, n.jsxs)("div", {
            className: v.zr,
            children: [
                (0, n.jsxs)("div", {
                    className: s()(v.Cf, a),
                    style: _,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, n.jsx)("div", {
                            style: { aspectRatio: g },
                            children: (0, n.jsx)(x.A, {
                                className: s()(v.Dk, l),
                                step: f,
                                direction: this.getCurrentDirection(),
                                springSettings: i,
                                fadeInOut: r,
                                children: t(e[f], f),
                            }),
                        }),
                        e.length > 1 &&
                            (0, n.jsx)(j, {
                                className: s()(o, m ? v.S$ : v.X$),
                                arrowClassName: c,
                                includeHitboxPadding: p,
                                current: f,
                                count: e.length,
                                onChangePage: (t) => this.changeItem(e, t),
                                onSetItem: this.handleSetItem,
                                onIntentionalChange: this.handleIntentionalChange,
                                paginationArrowIconType: d,
                                paginationDotClassName: u,
                                paginationDotSelectedClassName: h,
                            }),
                    ],
                }),
                null != A && A({ step: f, direction: this.getCurrentDirection() }),
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
        let { items: n, onIntentionalChange: l } = this.props;
        return l?.(n[t], e, t, a);
    };
}
let E = I;
