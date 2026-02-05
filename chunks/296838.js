n.d(t, { A: () => L }), n(321073);
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
    g = n(397927),
    m = n(915967),
    p = n(34968),
    _ = n(775121),
    x = n(775602),
    f = n(400492),
    E = n(203982),
    C = n(635914),
    I = n(652215),
    S = n(985018),
    b = n(353108);
let N = {
    UP: c().throttle(() => (0, f.Ak)("ddr-up"), 100),
    DOWN: c().throttle(() => (0, f.Ak)("ddr-down"), 100),
    LEFT: c().throttle(() => (0, f.Ak)("ddr-left"), 100),
    RIGHT: c().throttle(() => (0, f.Ak)("ddr-right"), 100),
};
function T(e) {
    switch (e.keyCode) {
        case I.Ks6.ARROW_UP:
            return "UP";
        case I.Ks6.ARROW_DOWN:
            return "DOWN";
        case I.Ks6.ARROW_LEFT:
            return "LEFT";
        case I.Ks6.ARROW_RIGHT:
            return "RIGHT";
        default:
            return null;
    }
}
let j = [m.Q_.MESSAGE, m.Q_.NAVIGATION, m.Q_.VOICE_AND_VIDEO, m.Q_.CHAT, m.Q_.MISCELLANEOUS];
function v(e) {
    let { showBackdrop: t } = e;
    return (0, i.jsx)("div", { className: a()(b.tB, { [b.WU]: t }) });
}
function y() {
    let e = l.useMemo(
        () =>
            c()((0, m.Bx)())
                .groupBy((e) => e.group)
                .value(),
        [],
    );
    return (0, i.jsx)("div", {
        className: b.Io,
        children: j.map((t) => {
            let n = e[t],
                l = (0, m.Gm)(t),
                s = (0, m.zF)(t);
            return (0, i.jsxs)(
                "div",
                {
                    className: b.ZK,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(g.Heading, { variant: "heading-lg/semibold", children: l }),
                                null != s &&
                                    (0, i.jsx)(g.Text, { className: b.UX, variant: "text-sm/normal", children: s }),
                            ],
                        }),
                        (0, i.jsx)(
                            "div",
                            {
                                className: b.tI,
                                children: n.map((e, t) =>
                                    e.predicate?.() === !1
                                        ? null
                                        : (0, i.jsxs)(
                                              "div",
                                              {
                                                  className: b.YI,
                                                  children: [
                                                      (0, i.jsx)(g.Text, {
                                                          variant: "text-sm/normal",
                                                          children: e.description,
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: "keybind-shortcuts",
                                                          children: e.binds.map((e) =>
                                                              (0, i.jsx)(g.e7I, { className: b.Me, shortcut: e }, e),
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
class R extends l.PureComponent {
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
            E._.subscribe(I.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            E._.subscribe(I.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.addEventListener("keydown", this.handleKeyDown, { capture: !0 }),
            window.addEventListener("keyup", this.handleKeyUp, { capture: !0 });
    }
    componentWillUnmount() {
        E._.unsubscribe(I.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            E._.unsubscribe(I.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
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
        N[t](), this.setState({ [t]: !0 });
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
            this.lastInputedKeys[0] === I.Ks6.H &&
                this.lastInputedKeys[1] === I.Ks6.H &&
                this.lastInputedKeys[2] === I.Ks6.ARROW_RIGHT &&
                this.lastInputedKeys[3] === I.Ks6.N &&
                this.lastInputedKeys[4] === I.Ks6.K &&
                this.props.activateRagingDemon(),
            this.props.keyboardModeEnabled)
        )
            return;
        let t = T(e);
        null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({ direction: t }));
    };
    handleKeyUp = (e) => {
        if (this.props.keyboardModeEnabled) return;
        let t = T(e);
        null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({ direction: t }));
    };
    onArrowClick = (e) => {
        this.arrowDown({ direction: e });
    };
    render() {
        let { UP: e, DOWN: t, LEFT: n, RIGHT: l } = this.state;
        return (0, i.jsxs)(u.A.div, {
            className: b.UV,
            style: this.getStyles(),
            children: [
                (0, i.jsxs)(g.H, {
                    className: b.GK,
                    children: [
                        (0, i.jsx)("div", { className: b.Qs, children: S.intl.string(S.t["1BdUtx"]) }),
                        (0, i.jsx)(g.e7I, { shortcut: "mod+/" }),
                    ],
                }),
                (0, i.jsx)("div", { className: b.KV, children: S.intl.string(S.t["2t19lU"]) }),
                (0, i.jsxs)("div", {
                    className: b.Pg,
                    children: [
                        (0, i.jsx)(O, { arrow: "LEFT", isActive: n, className: b.kb, children: "left" }),
                        (0, i.jsx)(O, { arrow: "DOWN", isActive: t, className: b.TR, children: "down" }),
                        (0, i.jsx)(O, { arrow: "UP", isActive: e, className: b.up, children: "up" }),
                        (0, i.jsx)(O, { arrow: "RIGHT", isActive: l, className: b.pG, children: "right" }),
                    ],
                }),
                (0, i.jsx)(g.GtU, {
                    ref: this.scrollerRef,
                    fade: !0,
                    children: (0, i.jsx)(g.Fmo, { children: (0, i.jsx)(y, {}) }),
                }),
            ],
        });
    }
}
function O(e) {
    let { isActive: t, arrow: n, className: s, children: r } = e,
        [o, d] = l.useState(t),
        c = l.useCallback(() => {
            N[n](), d(!0);
        }, [n]);
    return (
        l.useEffect(() => {
            if (o) {
                let e = setTimeout(() => d(!1), 500);
                return () => clearTimeout(e);
            }
        }, [o]),
        (0, i.jsx)(g.DUT, { onClick: c, className: a()(b.UE, s, { [b.vu]: t || o }), children: r })
    );
}
function L(e) {
    let { transitionState: t, onClose: n } = e,
        [s, r] = l.useState(!1),
        [o, d] = l.useState(!1),
        c = l.useMemo(() => (__OVERLAY__ ? (0, p.y8)() : (0, m.Bx)()), []),
        { keyboardModeEnabled: u, useReducedMotion: f } = (0, h.cf)([x.A], () => ({
            keyboardModeEnabled: x.A.keyboardModeEnabled,
            useReducedMotion: x.A.useReducedMotion,
        }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v, { showBackdrop: o }),
            (0, i.jsx)(g.EOs, {
                className: a()(b._$, { [b.O9]: s }),
                size: g.rIJ.DYNAMIC,
                "aria-label": S.intl.string(S.t.T9DA2K),
                transitionState: t,
                parentComponent: "KeyboardShortcutsModal",
                children: (0, i.jsx)(A.F, {
                    component: "div",
                    children: s
                        ? (0, i.jsx)(
                              C.A,
                              {
                                  handleDemonClose: function () {
                                      d(!1), setTimeout(n, 500);
                                  },
                              },
                              "raging-demo",
                          )
                        : (0, i.jsx)(
                              R,
                              {
                                  content: c,
                                  keyboardModeEnabled: u,
                                  activateRagingDemon: function () {
                                      f || (_.A.disable(), r(!0), d(!0));
                                  },
                              },
                              "modal",
                          ),
                }),
            }),
        ],
    });
}
