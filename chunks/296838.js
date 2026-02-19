"use strict";
n.d(t, { A: () => L }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(735438),
    d = n.n(c),
    u = n(615300),
    h = n(311907),
    A = n(73939),
    p = n(397927),
    g = n(915967),
    m = n(34968),
    _ = n(775121),
    f = n(775602),
    x = n(400492),
    C = n(203982),
    E = n(635914),
    I = n(652215),
    b = n(985018),
    N = n(353108);
let S = {
    UP: d().throttle(() => (0, x.Ak)("ddr-up"), 100),
    DOWN: d().throttle(() => (0, x.Ak)("ddr-down"), 100),
    LEFT: d().throttle(() => (0, x.Ak)("ddr-left"), 100),
    RIGHT: d().throttle(() => (0, x.Ak)("ddr-right"), 100),
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
let v = [g.Q_.MESSAGE, g.Q_.NAVIGATION, g.Q_.VOICE_AND_VIDEO, g.Q_.CHAT, g.Q_.MISCELLANEOUS];
function y(e) {
    let { showBackdrop: t } = e;
    return (0, i.jsx)("div", { className: r()(N.tB, { [N.WU]: t }) });
}
function j() {
    let e = s.useMemo(
        () =>
            d()((0, g.Bx)())
                .groupBy((e) => e.group)
                .value(),
        [],
    );
    return (0, i.jsx)("div", {
        className: N.Io,
        children: v.map((t) => {
            let n = e[t],
                s = (0, g.Gm)(t),
                l = (0, g.zF)(t);
            return (0, i.jsxs)(
                "div",
                {
                    className: N.ZK,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(p.Heading, { variant: "heading-lg/semibold", children: s }),
                                null != l &&
                                    (0, i.jsx)(p.Text, { className: N.UX, variant: "text-sm/normal", children: l }),
                            ],
                        }),
                        (0, i.jsx)(
                            "div",
                            {
                                className: N.tI,
                                children: n.map((e, t) =>
                                    e.predicate?.() === !1
                                        ? null
                                        : (0, i.jsxs)(
                                              "div",
                                              {
                                                  className: N.YI,
                                                  children: [
                                                      (0, i.jsx)(p.Text, {
                                                          variant: "text-sm/normal",
                                                          children: e.description,
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: "keybind-shortcuts",
                                                          children: e.binds.map((e) =>
                                                              (0, i.jsx)(p.e7I, { className: N.Me, shortcut: e }, e),
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
class R extends s.PureComponent {
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
    scrollerRef = s.createRef();
    lastInputedKeys = [];
    componentDidMount() {
        (this.lastInputedKeys = []),
            C._.subscribe(I.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            C._.subscribe(I.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.addEventListener("keydown", this.handleKeyDown, { capture: !0 }),
            window.addEventListener("keyup", this.handleKeyUp, { capture: !0 });
    }
    componentWillUnmount() {
        C._.unsubscribe(I.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            C._.unsubscribe(I.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
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
        S[t](), this.setState({ [t]: !0 });
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
        let { UP: e, DOWN: t, LEFT: n, RIGHT: s } = this.state;
        return (0, i.jsxs)(u.A.div, {
            className: N.UV,
            style: this.getStyles(),
            children: [
                (0, i.jsxs)(p.H, {
                    className: N.GK,
                    children: [
                        (0, i.jsx)("div", { className: N.Qs, children: b.intl.string(b.t["1BdUtx"]) }),
                        (0, i.jsx)(p.e7I, { shortcut: "mod+/" }),
                    ],
                }),
                (0, i.jsx)("div", { className: N.KV, children: b.intl.string(b.t["2t19lU"]) }),
                (0, i.jsxs)("div", {
                    className: N.Pg,
                    children: [
                        (0, i.jsx)(O, { arrow: "LEFT", isActive: n, className: N.kb, children: "left" }),
                        (0, i.jsx)(O, { arrow: "DOWN", isActive: t, className: N.TR, children: "down" }),
                        (0, i.jsx)(O, { arrow: "UP", isActive: e, className: N.up, children: "up" }),
                        (0, i.jsx)(O, { arrow: "RIGHT", isActive: s, className: N.pG, children: "right" }),
                    ],
                }),
                (0, i.jsx)(p.GtU, {
                    ref: this.scrollerRef,
                    fade: !0,
                    children: (0, i.jsx)(p.Fmo, { children: (0, i.jsx)(j, {}) }),
                }),
            ],
        });
    }
}
function O(e) {
    let { isActive: t, arrow: n, className: l, children: a } = e,
        [o, c] = s.useState(t),
        d = s.useCallback(() => {
            S[n](), c(!0);
        }, [n]);
    return (
        s.useEffect(() => {
            if (o) {
                let e = setTimeout(() => c(!1), 500);
                return () => clearTimeout(e);
            }
        }, [o]),
        (0, i.jsx)(p.DUT, { onClick: d, className: r()(N.UE, l, { [N.vu]: t || o }), children: a })
    );
}
function L(e) {
    let { transitionState: t, onClose: n } = e,
        [l, a] = s.useState(!1),
        [o, c] = s.useState(!1),
        d = s.useMemo(() => (__OVERLAY__ ? (0, m.y8)() : (0, g.Bx)()), []),
        { keyboardModeEnabled: u, useReducedMotion: x } = (0, h.cf)([f.A], () => ({
            keyboardModeEnabled: f.A.keyboardModeEnabled,
            useReducedMotion: f.A.useReducedMotion,
        }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(y, { showBackdrop: o }),
            (0, i.jsx)(p.EOs, {
                className: r()(N._$, { [N.O9]: l }),
                size: p.rIJ.DYNAMIC,
                "aria-label": b.intl.string(b.t.T9DA2K),
                transitionState: t,
                parentComponent: "KeyboardShortcutsModal",
                children: (0, i.jsx)(A.F, {
                    component: "div",
                    children: l
                        ? (0, i.jsx)(
                              E.A,
                              {
                                  handleDemonClose: function () {
                                      c(!1), setTimeout(n, 500);
                                  },
                              },
                              "raging-demo",
                          )
                        : (0, i.jsx)(
                              R,
                              {
                                  content: d,
                                  keyboardModeEnabled: u,
                                  activateRagingDemon: function () {
                                      x || (_.A.disable(), a(!0), c(!0));
                                  },
                              },
                              "modal",
                          ),
                }),
            }),
        ],
    });
}
