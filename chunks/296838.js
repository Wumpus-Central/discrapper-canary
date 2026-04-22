n.d(t, { A: () => M }), n(321073);
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
    _ = n(397927),
    m = n(915967),
    p = n(34968),
    g = n(775121),
    f = n(775602),
    E = n(400492),
    x = n(203982),
    I = n(635914),
    C = n(652215),
    N = n(650583),
    T = n(985018),
    S = n(393509);
let b = {
    UP: c().throttle(() => (0, E.Ak)("ddr-up"), 100),
    DOWN: c().throttle(() => (0, E.Ak)("ddr-down"), 100),
    LEFT: c().throttle(() => (0, E.Ak)("ddr-left"), 100),
    RIGHT: c().throttle(() => (0, E.Ak)("ddr-right"), 100),
};
function y(e) {
    switch (e.key) {
        case N.dh.ARROW_UP:
            return "UP";
        case N.dh.ARROW_DOWN:
            return "DOWN";
        case N.dh.ARROW_LEFT:
            return "LEFT";
        case N.dh.ARROW_RIGHT:
            return "RIGHT";
        default:
            return null;
    }
}
let v = [m.Q_.MESSAGE, m.Q_.NAVIGATION, m.Q_.VOICE_AND_VIDEO, m.Q_.CHAT, m.Q_.MISCELLANEOUS];
function R(e) {
    let { showBackdrop: t } = e;
    return (0, i.jsx)("div", { className: a()(S.tB, { [S.WU]: t }) });
}
function j() {
    let e = l.useMemo(
        () =>
            c()((0, m.Bx)())
                .groupBy((e) => e.group)
                .value(),
        [],
    );
    return (0, i.jsx)("div", {
        className: S.Io,
        children: v.map((t) => {
            let n = e[t],
                l = (0, m.Gm)(t),
                s = (0, m.zF)(t);
            return (0, i.jsxs)(
                "div",
                {
                    className: S.ZK,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(_.Heading, { variant: "heading-lg/semibold", children: l }),
                                null != s &&
                                    (0, i.jsx)(_.Text, { className: S.UX, variant: "text-sm/normal", children: s }),
                            ],
                        }),
                        (0, i.jsx)(
                            "div",
                            {
                                className: S.tI,
                                children: n.map((e, t) =>
                                    e.predicate?.() === !1
                                        ? null
                                        : (0, i.jsxs)(
                                              "div",
                                              {
                                                  className: S.YI,
                                                  children: [
                                                      (0, i.jsx)(_.Text, {
                                                          variant: "text-sm/normal",
                                                          children: e.description,
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: "keybind-shortcuts",
                                                          children: e.binds.map((e) =>
                                                              (0, i.jsx)(_.e7I, { className: S.Me, shortcut: e }, e),
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
class O extends l.PureComponent {
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
            x._.subscribe(C.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            x._.subscribe(C.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.addEventListener("keydown", this.handleKeyDown, { capture: !0 }),
            window.addEventListener("keyup", this.handleKeyUp, { capture: !0 });
    }
    componentWillUnmount() {
        x._.unsubscribe(C.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            x._.unsubscribe(C.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
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
        b[t](), this.setState({ [t]: !0 });
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
            this.lastInputedKeys[0] === C.Ks6.H &&
                this.lastInputedKeys[1] === C.Ks6.H &&
                this.lastInputedKeys[2] === C.Ks6.ARROW_RIGHT &&
                this.lastInputedKeys[3] === C.Ks6.N &&
                this.lastInputedKeys[4] === C.Ks6.K &&
                this.props.activateRagingDemon(),
            this.props.keyboardModeEnabled)
        )
            return;
        let t = y(e);
        null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({ direction: t }));
    };
    handleKeyUp = (e) => {
        if (this.props.keyboardModeEnabled) return;
        let t = y(e);
        null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({ direction: t }));
    };
    onArrowClick = (e) => {
        this.arrowDown({ direction: e });
    };
    render() {
        let { UP: e, DOWN: t, LEFT: n, RIGHT: l } = this.state;
        return (0, i.jsxs)(u.A.div, {
            className: S.UV,
            style: this.getStyles(),
            children: [
                (0, i.jsxs)(_.H, {
                    className: S.GK,
                    children: [
                        (0, i.jsx)("div", { className: S.Qs, children: T.intl.string(T.t["1BdUtx"]) }),
                        (0, i.jsx)(_.e7I, { shortcut: "mod+/" }),
                    ],
                }),
                (0, i.jsx)("div", { className: S.KV, children: T.intl.string(T.t["2t19lU"]) }),
                (0, i.jsxs)("div", {
                    className: S.Pg,
                    children: [
                        (0, i.jsx)(L, { arrow: "LEFT", isActive: n, className: S.kb, children: "left" }),
                        (0, i.jsx)(L, { arrow: "DOWN", isActive: t, className: S.TR, children: "down" }),
                        (0, i.jsx)(L, { arrow: "UP", isActive: e, className: S.up, children: "up" }),
                        (0, i.jsx)(L, { arrow: "RIGHT", isActive: l, className: S.pG, children: "right" }),
                    ],
                }),
                (0, i.jsx)(_.GtU, {
                    ref: this.scrollerRef,
                    fade: !0,
                    children: (0, i.jsx)(_.Fmo, { children: (0, i.jsx)(j, {}) }),
                }),
            ],
        });
    }
}
function L(e) {
    let { isActive: t, arrow: n, className: s, children: r } = e,
        [o, d] = l.useState(t),
        c = l.useCallback(() => {
            b[n](), d(!0);
        }, [n]);
    return (
        l.useEffect(() => {
            if (o) {
                let e = setTimeout(() => d(!1), 500);
                return () => clearTimeout(e);
            }
        }, [o]),
        (0, i.jsx)(_.DUT, { onClick: c, className: a()(S.UE, s, { [S.vu]: t || o }), children: r })
    );
}
function M(e) {
    let { transitionState: t, onClose: n } = e,
        [s, r] = l.useState(!1),
        [o, d] = l.useState(!1),
        c = l.useMemo(() => (__OVERLAY__ ? (0, p.y8)() : (0, m.Bx)()), []),
        { keyboardModeEnabled: u, useReducedMotion: E } = (0, h.cf)([f.A], () => ({
            keyboardModeEnabled: f.A.keyboardModeEnabled,
            useReducedMotion: f.A.useReducedMotion,
        }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(R, { showBackdrop: o }),
            (0, i.jsx)(_.EOs, {
                className: a()(S._$, { [S.O9]: s }),
                size: _.rIJ.DYNAMIC,
                "aria-label": T.intl.string(T.t.T9DA2K),
                transitionState: t,
                parentComponent: "KeyboardShortcutsModal",
                children: (0, i.jsx)(A.F, {
                    component: "div",
                    children: s
                        ? (0, i.jsx)(
                              I.A,
                              {
                                  handleDemonClose: function () {
                                      d(!1), setTimeout(n, 500);
                                  },
                              },
                              "raging-demo",
                          )
                        : (0, i.jsx)(
                              O,
                              {
                                  content: c,
                                  keyboardModeEnabled: u,
                                  activateRagingDemon: function () {
                                      E || (g.A.disable(), r(!0), d(!0));
                                  },
                              },
                              "modal",
                          ),
                }),
            }),
        ],
    });
}
