n.d(t, { A: () => k }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(735438),
    c = n.n(d),
    u = n(615300),
    h = n(311907),
    A = n(73939),
    _ = n(534514),
    m = n(834730),
    g = n(475358),
    p = n(707554),
    f = n(599319),
    E = n(939249),
    x = n(935462),
    I = n(915967),
    C = n(34968),
    b = n(775121),
    N = n(775602),
    S = n(400492),
    v = n(203982),
    T = n(635914),
    y = n(652215),
    R = n(650583),
    j = n(985018),
    L = n(393509);
let O = {
    UP: c().throttle(() => (0, S.Ak)("ddr-up"), 100),
    DOWN: c().throttle(() => (0, S.Ak)("ddr-down"), 100),
    LEFT: c().throttle(() => (0, S.Ak)("ddr-left"), 100),
    RIGHT: c().throttle(() => (0, S.Ak)("ddr-right"), 100),
};
function G(e) {
    switch (e.key) {
        case R.dh.ARROW_UP:
            return "UP";
        case R.dh.ARROW_DOWN:
            return "DOWN";
        case R.dh.ARROW_LEFT:
            return "LEFT";
        case R.dh.ARROW_RIGHT:
            return "RIGHT";
        default:
            return null;
    }
}
let D = [I.Q_.MESSAGE, I.Q_.NAVIGATION, I.Q_.VOICE_AND_VIDEO, I.Q_.CHAT, I.Q_.MISCELLANEOUS];
function M(e) {
    let { showBackdrop: t } = e;
    return (0, i.jsx)("div", { className: a()(L.tB, { [L.WU]: t }) });
}
function U() {
    let e = l.useMemo(
        () =>
            c()((0, I.Bx)())
                .groupBy((e) => e.group)
                .value(),
        [],
    );
    return (0, i.jsx)("div", {
        className: L.Io,
        children: D.map((t) => {
            let n = e[t],
                l = (0, I.Gm)(t),
                s = (0, I.zF)(t);
            return (0, i.jsxs)(
                "div",
                {
                    className: L.ZK,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(_.D, { variant: "heading-lg/semibold", children: l }),
                                null != s &&
                                    (0, i.jsx)(m.E, { className: L.UX, variant: "text-sm/normal", children: s }),
                            ],
                        }),
                        (0, i.jsx)(
                            "div",
                            {
                                className: L.tI,
                                children: n.map((e, t) =>
                                    e.predicate?.() === !1
                                        ? null
                                        : (0, i.jsxs)(
                                              "div",
                                              {
                                                  className: L.YI,
                                                  children: [
                                                      (0, i.jsx)(m.E, {
                                                          variant: "text-sm/normal",
                                                          children: e.description,
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: "keybind-shortcuts",
                                                          children: e.binds.map((e) =>
                                                              (0, i.jsx)(g.e, { className: L.Me, shortcut: e }, e),
                                                          ),
                                                      }),
                                                  ],
                                              },
                                              t,
                                          ),
                                ),
                            },
                            t,
                        ),
                    ],
                },
                t,
            );
        }),
    });
}
class P extends l.PureComponent {
    state = {
        UP: !1,
        DOWN: !1,
        LEFT: !1,
        RIGHT: !1,
        opacity: new u.A.Value(1),
        scaleX: new u.A.Value(1),
        scaleY: new u.A.Value(0),
        animating: !1,
    };
    scrollerRef = l.createRef();
    lastInputedKeys = [];
    componentDidMount() {
        (this.lastInputedKeys = []),
            v._.subscribe(y.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            v._.subscribe(y.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.addEventListener("keydown", this.handleKeyDown, { capture: !0 }),
            window.addEventListener("keyup", this.handleKeyUp, { capture: !0 });
    }
    componentWillUnmount() {
        v._.unsubscribe(y.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            v._.unsubscribe(y.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.removeEventListener("keydown", this.handleKeyDown, { capture: !0 }),
            window.removeEventListener("keyup", this.handleKeyUp, { capture: !0 });
    }
    scrollPageUp = () => {
        let e = this.scrollerRef.current;
        o()(null != e, "Scroller is pagedUp when not mounted"), e.scrollPageUp({ animate: !0 });
    };
    scrollPageDown = () => {
        let e = this.scrollerRef.current;
        o()(null != e, "Scroller is pagedDown when not mounted"), e.scrollPageDown({ animate: !0 });
    };
    arrowUp = (e) => {
        let { direction: t } = e;
        this.setState({ [t]: !1 });
    };
    arrowDown = (e) => {
        let { direction: t } = e;
        O[t](), this.setState({ [t]: !0 });
    };
    componentWillLeave = (e) => {
        this.setState({ animating: !0 }),
            this.state.opacity.setValue(1),
            this.state.scaleX.setValue(0.5),
            this.state.scaleY.setValue(1),
            u.A.sequence([
                u.A.timing(this.state.opacity, { toValue: 0, duration: 800, easing: u.A.Easing.cubic }),
            ]).start(e);
    };
    toggleOpacity = () => {
        1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1);
    };
    getStyles = () => ({
        opacity: this.state.opacity.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }),
        transform: [
            { scaleX: this.state.scaleX.interpolate({ inputRange: [0, 1], outputRange: [0, 2] }) },
            { scaleY: this.state.scaleY.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) },
        ],
    });
    handleKeyDown = (e) => {
        if (
            (this.lastInputedKeys.push(e.keyCode),
            (this.lastInputedKeys = this.lastInputedKeys.slice(-5)),
            this.lastInputedKeys[0] === y.Ks6.H &&
                this.lastInputedKeys[1] === y.Ks6.H &&
                this.lastInputedKeys[2] === y.Ks6.ARROW_RIGHT &&
                this.lastInputedKeys[3] === y.Ks6.N &&
                this.lastInputedKeys[4] === y.Ks6.K &&
                this.props.activateRagingDemon(),
            this.props.keyboardModeEnabled)
        )
            return;
        let t = G(e);
        null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({ direction: t }));
    };
    handleKeyUp = (e) => {
        if (this.props.keyboardModeEnabled) return;
        let t = G(e);
        null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({ direction: t }));
    };
    onArrowClick = (e) => {
        this.arrowDown({ direction: e });
    };
    render() {
        let { UP: e, DOWN: t, LEFT: n, RIGHT: l } = this.state;
        return (0, i.jsxs)(u.A.div, {
            className: L.UV,
            style: this.getStyles(),
            children: [
                (0, i.jsxs)(p.H, {
                    className: L.GK,
                    children: [
                        (0, i.jsx)("div", { className: L.Qs, children: j.intl.string(j.t["1BdUtx"]) }),
                        (0, i.jsx)(g.e, { shortcut: "mod+/" }),
                    ],
                }),
                (0, i.jsx)("div", { className: L.KV, children: j.intl.string(j.t["2t19lU"]) }),
                (0, i.jsxs)("div", {
                    className: L.Pg,
                    children: [
                        (0, i.jsx)(w, { arrow: "LEFT", isActive: n, className: L.kb, children: "left" }),
                        (0, i.jsx)(w, { arrow: "DOWN", isActive: t, className: L.TR, children: "down" }),
                        (0, i.jsx)(w, { arrow: "UP", isActive: e, className: L.up, children: "up" }),
                        (0, i.jsx)(w, { arrow: "RIGHT", isActive: l, className: L.pG, children: "right" }),
                    ],
                }),
                (0, i.jsx)(f.Gt, {
                    ref: this.scrollerRef,
                    fade: !0,
                    children: (0, i.jsx)(p.F, { children: (0, i.jsx)(U, {}) }),
                }),
            ],
        });
    }
}
function w(e) {
    let { isActive: t, arrow: n, className: s, children: r } = e,
        [o, d] = l.useState(t),
        c = l.useCallback(() => {
            O[n](), d(!0);
        }, [n]);
    return (
        l.useEffect(() => {
            if (o) {
                let e = setTimeout(() => d(!1), 500);
                return () => clearTimeout(e);
            }
        }, [o]),
        (0, i.jsx)(E.D, { onClick: c, className: a()(L.UE, s, { [L.vu]: t || o }), children: r })
    );
}
function k(e) {
    let { transitionState: t, onClose: n } = e,
        [s, r] = l.useState(!1),
        [o, d] = l.useState(!1),
        c = l.useMemo(() => (__OVERLAY__ ? (0, C.y8)() : (0, I.Bx)()), []),
        { keyboardModeEnabled: u, useReducedMotion: _ } = (0, h.cf)([N.A], () => ({
            keyboardModeEnabled: N.A.keyboardModeEnabled,
            useReducedMotion: N.A.useReducedMotion,
        }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(M, { showBackdrop: o }),
            (0, i.jsx)(x.EO, {
                className: a()(L._$, { [L.O9]: s }),
                size: x.rI.DYNAMIC,
                "aria-label": j.intl.string(j.t.T9DA2K),
                transitionState: t,
                parentComponent: "KeyboardShortcutsModal",
                children: (0, i.jsx)(A.F, {
                    component: "div",
                    children: s
                        ? (0, i.jsx)(
                              T.A,
                              {
                                  handleDemonClose: function () {
                                      d(!1), setTimeout(n, 500);
                                  },
                              },
                              "raging-demo",
                          )
                        : (0, i.jsx)(
                              P,
                              {
                                  content: c,
                                  keyboardModeEnabled: u,
                                  activateRagingDemon: function () {
                                      _ || (b.A.disable(), r(!0), d(!0));
                                  },
                              },
                              "modal",
                          ),
                }),
            }),
        ],
    });
}
