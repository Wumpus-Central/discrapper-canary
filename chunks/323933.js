n.d(t, { A: () => _ }), n(896048);
var l,
    a,
    r = n(627968),
    i = n(64700),
    s = n(503698),
    c = n.n(s),
    o = n(735438),
    d = n.n(o),
    u = n(451988),
    p = n(397927),
    h = n(73153),
    m = n(725951),
    b = n(203982),
    f = n(652215),
    g = n(985018),
    x = n(881425);
function v(e, t, n) {
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
class j extends (l = i.PureComponent) {
    componentDidMount() {
        b._.subscribe(f.jej.CAROUSEL_PREV, this.handlePrevious), b._.subscribe(f.jej.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        b._.unsubscribe(f.jej.CAROUSEL_PREV, this.handlePrevious),
            b._.unsubscribe(f.jej.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let {
                current: e,
                count: t,
                includeHitboxPadding: n,
                arrowClassName: l,
                paginationDotClassName: a,
                paginationDotSelectedClassName: i,
                paginationArrowIconType: s = "arrow",
            } = this.props,
            o = c()(x.sb, { [x.JU]: n }, l);
        return (0, r.jsxs)("div", {
            className: c()(x.ne, this.props.className),
            children: [
                (0, r.jsx)("div", {
                    className: o,
                    children: (0, r.jsx)(p.K0, {
                        variant: "icon-only",
                        icon: "caret" === s ? p.n2b : p.rJJ,
                        "aria-label": g.intl.string(g.t.vgfxaA),
                        onClick: this.handlePrevious,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: x.r$,
                    children: d().times(t, (t) =>
                        (0, r.jsx)(
                            p.DUT,
                            {
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? c()(x.NU, i) : c()(x.Lw, a),
                                "aria-label": g.intl.formatToPlainString(g.t["2SXOrM"], { pageNumber: t + 1 }),
                            },
                            "dot-".concat(t),
                        ),
                    ),
                }),
                (0, r.jsx)("div", {
                    className: o,
                    children: (0, r.jsx)(p.K0, {
                        variant: "icon-only",
                        icon: "caret" === s ? p._BQ : p.EdP,
                        "aria-label": g.intl.string(g.t.XiOHRX),
                        onClick: this.handleNext,
                    }),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            v(this, "handleDotClick", (e) => {
                let { onSetItem: t, onIntentionalChange: n, current: l } = this.props;
                null == n || n(l, e, "jump"), t(e);
            }),
            v(this, "handleNext", () => {
                let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
                    l = n(1);
                null == e || e(t, l, "next");
            }),
            v(this, "handlePrevious", () => {
                let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
                    l = n(-1);
                null == e || e(t, l, "previous");
            });
    }
}
v(j, "defaultProps", { includeHitboxPadding: !0 });
class A extends (a = i.PureComponent) {
    componentDidMount() {
        h.h.subscribe("WINDOW_FOCUS", this.handleWindowFocusChange),
            this.props.initialPaused || this.state.paused || this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer(), h.h.unsubscribe("WINDOW_FOCUS", this.handleWindowFocusChange);
    }
    componentDidUpdate(e, t) {
        let n = (e, t) => !e.initialPaused && !t.paused,
            l = n(this.props, this.state),
            a = n(e, t);
        l && !a ? this.startTimer() : !l && a && this.stopTimer();
        let { items: r } = this.props,
            { visibleIndex: i } = this.state;
        null == r[i] && this.changeItem(r, 1);
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
        let { onChangeItem: l } = this.props;
        null == l || l(e[n], this.state.visibleIndex, n);
        let a = t > 0 ? m.f.LEFT : m.f.RIGHT;
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
                slideAnimatorClassName: l,
                slideAnimatorSpringSettings: a,
                slideAnimatorFadeInOut: i,
                paginationClassName: s,
                paginationArrowClassName: o,
                paginationArrowIconType: d,
                paginationDotClassName: u,
                paginationDotSelectedClassName: p,
                themedPagination: h,
                includeHitboxPadding: b,
                style: f,
                aspectRatio: g,
                children: v,
            } = this.props,
            { visibleIndex: A } = this.state;
        return (0, r.jsxs)("div", {
            className: x.zr,
            children: [
                (0, r.jsxs)("div", {
                    className: c()(x.Cf, n),
                    style: f,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, r.jsx)("div", {
                            style: { aspectRatio: g },
                            children: (0, r.jsx)(m.A, {
                                className: c()(x.Dk, l),
                                step: A,
                                direction: this.getCurrentDirection(),
                                springSettings: a,
                                fadeInOut: i,
                                children: t(e[A], A),
                            }),
                        }),
                        e.length > 1 &&
                            (0, r.jsx)(j, {
                                className: c()(s, h ? x.S$ : x.X$),
                                arrowClassName: o,
                                includeHitboxPadding: b,
                                current: A,
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
                null != v &&
                    v({
                        step: A,
                        direction: this.getCurrentDirection(),
                    }),
            ],
        });
    }
    constructor(e) {
        super(e),
            v(this, "timer", new u.IX()),
            v(this, "handleWindowFocusChange", (e) => {
                let { focused: t } = e;
                this.setState({ paused: !t });
            }),
            v(this, "getCurrentDirection", () => this.state.direction),
            v(this, "nextItem", () => {
                let { items: e } = this.props;
                this.changeItem(e, 1);
            }),
            v(this, "previousItem", () => {
                let { items: e } = this.props;
                this.changeItem(e, -1);
            }),
            v(this, "handleSetItem", (e) => {
                let { visibleIndex: t } = this.state,
                    { items: n } = this.props;
                this.changeItem(n, e - t);
            }),
            v(this, "handleMouseEnter", () => {
                this.setState({ paused: !0 });
            }),
            v(this, "handleMouseLeave", () => {
                this.setState({ paused: !1 });
            }),
            v(this, "handleIntentionalChange", (e, t, n) => {
                let { items: l, onIntentionalChange: a } = this.props;
                return null == a ? void 0 : a(l[t], e, t, n);
            }),
            (this.state = {
                visibleIndex: !0 === e.randomize ? d().random(0, e.items.length - 1) : 0,
                direction: m.f.LEFT,
                paused: !1,
            });
    }
}
v(A, "defaultProps", { aspectRatio: 16 / 9 });
let _ = A;
