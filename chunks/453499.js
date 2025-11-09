n.d(t, { Z: () => j }), n(388685);
var r,
    a,
    i = n(951288),
    l = n(647438),
    s = n(120356),
    o = n.n(s),
    c = n(392711),
    d = n.n(c),
    u = n(846519),
    p = n(481060),
    m = n(570140),
    h = n(578361),
    g = n(585483),
    _ = n(981631),
    f = n(388032),
    b = n(72291);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class v extends (r = l.PureComponent) {
    componentDidMount() {
        g.S.subscribe(_.CkL.CAROUSEL_PREV, this.handlePrevious), g.S.subscribe(_.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        g.S.unsubscribe(_.CkL.CAROUSEL_PREV, this.handlePrevious),
            g.S.unsubscribe(_.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let {
                current: e,
                count: t,
                includeHitboxPadding: n,
                arrowClassName: r,
                paginationDotClassName: a,
                paginationDotSelectedClassName: l,
                paginationArrowIconType: s = "arrow",
            } = this.props,
            c = o()(b.arrowHitbox, { [b.arrowHitboxPadding]: n }, r);
        return (0, i.jsxs)("div", {
            className: o()(b.controls, this.props.className),
            children: [
                (0, i.jsx)("div", {
                    className: c,
                    children: (0, i.jsx)(p.hU, {
                        variant: "icon-only",
                        icon: "caret" === s ? p.V7D : p.whL,
                        "aria-label": f.intl.string(f.t.vgfxaA),
                        onClick: this.handlePrevious,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: b.dots,
                    children: d().times(t, (t) =>
                        (0, i.jsx)(
                            p.P3F,
                            {
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? o()(b.dotSelected, l) : o()(b.dotNormal, a),
                                "aria-label": f.intl.formatToPlainString(f.t["2SXOrM"], { pageNumber: t + 1 }),
                            },
                            "dot-".concat(t),
                        ),
                    ),
                }),
                (0, i.jsx)("div", {
                    className: c,
                    children: (0, i.jsx)(p.hU, {
                        variant: "icon-only",
                        icon: "caret" === s ? p.Fbu : p.ZSh,
                        "aria-label": f.intl.string(f.t.XiOHRX),
                        onClick: this.handleNext,
                    }),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            x(this, "handleDotClick", (e) => {
                let { onSetItem: t, onIntentionalChange: n, current: r } = this.props;
                null == n || n(r, e, "jump"), t(e);
            }),
            x(this, "handleNext", () => {
                let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
                    r = n(1);
                null == e || e(t, r, "next");
            }),
            x(this, "handlePrevious", () => {
                let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
                    r = n(-1);
                null == e || e(t, r, "previous");
            });
    }
}
x(v, "defaultProps", { includeHitboxPadding: !0 });
class C extends (a = l.PureComponent) {
    componentDidMount() {
        m.Z.subscribe("WINDOW_FOCUS", this.handleWindowFocusChange),
            this.props.initialPaused || this.state.paused || this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer(), m.Z.unsubscribe("WINDOW_FOCUS", this.handleWindowFocusChange);
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
                direction: a,
            }),
            n
        );
    }
    render() {
        let {
                items: e,
                renderItem: t,
                className: n,
                slideAnimatorClassName: r,
                slideAnimatorSpringSettings: a,
                slideAnimatorFadeInOut: l,
                paginationClassName: s,
                paginationArrowClassName: c,
                paginationArrowIconType: d,
                paginationDotClassName: u,
                paginationDotSelectedClassName: p,
                themedPagination: m,
                includeHitboxPadding: g,
                style: _,
                aspectRatio: f,
                children: x,
            } = this.props,
            { visibleIndex: C } = this.state;
        return (0, i.jsxs)("div", {
            className: b.root,
            children: [
                (0, i.jsxs)("div", {
                    className: o()(b.carouselContainer, n),
                    style: _,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, i.jsx)("div", {
                            style: { aspectRatio: f },
                            children: (0, i.jsx)(h.Z, {
                                className: o()(b.carousel, r),
                                step: C,
                                direction: this.getCurrentDirection(),
                                springSettings: a,
                                fadeInOut: l,
                                children: t(e[C], C),
                            }),
                        }),
                        e.length > 1 &&
                            (0, i.jsx)(v, {
                                className: o()(s, m ? b.themedPagination : b.pagination),
                                arrowClassName: c,
                                includeHitboxPadding: g,
                                current: C,
                                count: e.length,
                                onChangePage: (t) => this.changeItem(e, t),
                                onSetItem: this.handleSetItem,
                                onIntentionalChange: this.handleIntentionalChange,
                                paginationArrowIconType: d,
                                paginationDotClassName: u,
                                paginationDotSelectedClassName: p,
                            }),
                    ],
                }),
                null != x &&
                    x({
                        step: C,
                        direction: this.getCurrentDirection(),
                    }),
            ],
        });
    }
    constructor(e) {
        super(e),
            x(this, "timer", new u.Xp()),
            x(this, "handleWindowFocusChange", (e) => {
                let { focused: t } = e;
                this.setState({ paused: !t });
            }),
            x(this, "getCurrentDirection", () => this.state.direction),
            x(this, "nextItem", () => {
                let { items: e } = this.props;
                this.changeItem(e, 1);
            }),
            x(this, "previousItem", () => {
                let { items: e } = this.props;
                this.changeItem(e, -1);
            }),
            x(this, "handleSetItem", (e) => {
                let { visibleIndex: t } = this.state,
                    { items: n } = this.props;
                this.changeItem(n, e - t);
            }),
            x(this, "handleMouseEnter", () => {
                this.setState({ paused: !0 });
            }),
            x(this, "handleMouseLeave", () => {
                this.setState({ paused: !1 });
            }),
            x(this, "handleIntentionalChange", (e, t, n) => {
                let { items: r, onIntentionalChange: a } = this.props;
                return null == a ? void 0 : a(r[t], e, t, n);
            }),
            (this.state = {
                visibleIndex: !0 === e.randomize ? d().random(0, e.items.length - 1) : 0,
                direction: h.n.LEFT,
                paused: !1,
            });
    }
}
x(C, "defaultProps", { aspectRatio: 16 / 9 });
let j = C;
