n.d(t, {
    A: () => R,
}),
    n(228524),
    n(896048),
    n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(735438),
    u = n.n(c),
    d = n(615300),
    f = n(311907),
    p = n(73939),
    h = n(397927),
    b = n(915967),
    g = n(34968),
    m = n(775121),
    A = n(775602),
    y = n(400492),
    O = n(203982),
    j = n(635914),
    v = n(652215),
    x = n(985018),
    E = n(353108);

function _(e, t, n) {
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
let C = {
    UP: u().throttle(() => (0, y.Ak)("ddr-up"), 100),
    DOWN: u().throttle(() => (0, y.Ak)("ddr-down"), 100),
    LEFT: u().throttle(() => (0, y.Ak)("ddr-left"), 100),
    RIGHT: u().throttle(() => (0, y.Ak)("ddr-right"), 100),
};

function S(e) {
    switch (e.keyCode) {
        case v.Ks6.ARROW_UP:
            return "UP";
        case v.Ks6.ARROW_DOWN:
            return "DOWN";
        case v.Ks6.ARROW_LEFT:
            return "LEFT";
        case v.Ks6.ARROW_RIGHT:
            return "RIGHT";
        default:
            return null;
    }
}
let I = [b.Q_.MESSAGE, b.Q_.NAVIGATION, b.Q_.VOICE_AND_VIDEO, b.Q_.CHAT, b.Q_.MISCELLANEOUS];

function N(e) {
    let { showBackdrop: t } = e;
    return (0, r.jsx)("div", {
        className: a()(E.tB, {
            [E.WU]: t,
        }),
    });
}

function T() {
    let e = l.useMemo(
        () =>
            u()((0, b.Bx)())
                .groupBy((e) => e.group)
                .value(),
        [],
    );
    return (0, r.jsx)("div", {
        className: E.Io,
        children: I.map((t) => {
            let n = e[t],
                l = (0, b.Gm)(t),
                i = (0, b.zF)(t);
            return (0, r.jsxs)(
                "div",
                {
                    className: E.ZK,
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(h.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: l,
                                }),
                                null != i &&
                                    (0, r.jsx)(h.Text, {
                                        className: E.UX,
                                        variant: "text-sm/normal",
                                        children: i,
                                    }),
                            ],
                        }),
                        (0, r.jsx)(
                            "div",
                            {
                                className: E.tI,
                                children: n.map((e, t) => {
                                    var n;
                                    return (null == (n = e.predicate) ? void 0 : n.call(e)) === !1
                                        ? null
                                        : (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: E.YI,
                                                  children: [
                                                      (0, r.jsx)(h.Text, {
                                                          variant: "text-sm/normal",
                                                          children: e.description,
                                                      }),
                                                      (0, r.jsx)("div", {
                                                          className: "keybind-shortcuts",
                                                          children: e.binds.map((e) =>
                                                              (0, r.jsx)(
                                                                  h.e7I,
                                                                  {
                                                                      className: E.Me,
                                                                      shortcut: e,
                                                                  },
                                                                  e,
                                                              ),
                                                          ),
                                                      }),
                                                  ],
                                              },
                                              t,
                                          );
                                }),
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
    componentDidMount() {
        (this.lastInputedKeys = []),
            O._.subscribe(v.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            O._.subscribe(v.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.addEventListener("keydown", this.handleKeyDown, {
                capture: !0,
            }),
            window.addEventListener("keyup", this.handleKeyUp, {
                capture: !0,
            });
    }
    componentWillUnmount() {
        O._.unsubscribe(v.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            O._.unsubscribe(v.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.removeEventListener("keydown", this.handleKeyDown, {
                capture: !0,
            }),
            window.removeEventListener("keyup", this.handleKeyUp, {
                capture: !0,
            });
    }
    render() {
        let { UP: e, DOWN: t, LEFT: n, RIGHT: l } = this.state;
        return (0, r.jsxs)(d.A.div, {
            className: E.UV,
            style: this.getStyles(),
            children: [
                (0, r.jsxs)(h.H, {
                    className: E.GK,
                    children: [
                        (0, r.jsx)("div", {
                            className: E.Qs,
                            children: x.intl.string(x.t["1BdUtx"]),
                        }),
                        (0, r.jsx)(h.e7I, {
                            shortcut: "mod+/",
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: E.KV,
                    children: x.intl.string(x.t["2t19lU"]),
                }),
                (0, r.jsxs)("div", {
                    className: E.Pg,
                    children: [
                        (0, r.jsx)(w, {
                            arrow: "LEFT",
                            isActive: n,
                            className: E.kb,
                            children: "left",
                        }),
                        (0, r.jsx)(w, {
                            arrow: "DOWN",
                            isActive: t,
                            className: E.TR,
                            children: "down",
                        }),
                        (0, r.jsx)(w, {
                            arrow: "UP",
                            isActive: e,
                            className: E.up,
                            children: "up",
                        }),
                        (0, r.jsx)(w, {
                            arrow: "RIGHT",
                            isActive: l,
                            className: E.pG,
                            children: "right",
                        }),
                    ],
                }),
                (0, r.jsx)(h.GtU, {
                    ref: this.scrollerRef,
                    fade: !0,
                    children: (0, r.jsx)(h.Fmo, {
                        children: (0, r.jsx)(T, {}),
                    }),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            _(this, "state", {
                UP: !1,
                DOWN: !1,
                LEFT: !1,
                RIGHT: !1,
                opacity: new d.A.Value(1),
                scaleX: new d.A.Value(1),
                scaleY: new d.A.Value(0),
                animating: !1,
            }),
            _(this, "scrollerRef", l.createRef()),
            _(this, "lastInputedKeys", []),
            _(this, "scrollPageUp", () => {
                let e = this.scrollerRef.current;
                o()(null != e, "Scroller is pagedUp when not mounted"),
                    e.scrollPageUp({
                        animate: !0,
                    });
            }),
            _(this, "scrollPageDown", () => {
                let e = this.scrollerRef.current;
                o()(null != e, "Scroller is pagedDown when not mounted"),
                    e.scrollPageDown({
                        animate: !0,
                    });
            }),
            _(this, "arrowUp", (e) => {
                let { direction: t } = e;
                this.setState({
                    [t]: !1,
                });
            }),
            _(this, "arrowDown", (e) => {
                let { direction: t } = e;
                C[t](),
                    this.setState({
                        [t]: !0,
                    });
            }),
            _(this, "componentWillLeave", (e) => {
                this.setState({
                    animating: !0,
                }),
                    this.state.opacity.setValue(1),
                    this.state.scaleX.setValue(0.5),
                    this.state.scaleY.setValue(1),
                    d.A.sequence([
                        d.A.timing(this.state.opacity, {
                            toValue: 0,
                            duration: 800,
                            easing: d.A.Easing.cubic,
                        }),
                    ]).start(e);
            }),
            _(this, "toggleOpacity", () => {
                1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1);
            }),
            _(this, "getStyles", () => ({
                opacity: this.state.opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                }),
                transform: [
                    {
                        scaleX: this.state.scaleX.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 2],
                        }),
                    },
                    {
                        scaleY: this.state.scaleY.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1],
                        }),
                    },
                ],
            })),
            _(this, "handleKeyDown", (e) => {
                if (
                    (this.lastInputedKeys.push(e.keyCode),
                    (this.lastInputedKeys = this.lastInputedKeys.slice(-5)),
                    this.lastInputedKeys[0] === v.Ks6.H &&
                        this.lastInputedKeys[1] === v.Ks6.H &&
                        this.lastInputedKeys[2] === v.Ks6.ARROW_RIGHT &&
                        this.lastInputedKeys[3] === v.Ks6.N &&
                        this.lastInputedKeys[4] === v.Ks6.K &&
                        this.props.activateRagingDemon(),
                    this.props.keyboardModeEnabled)
                )
                    return;
                let t = S(e);
                null !== t &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    this.arrowDown({
                        direction: t,
                    }));
            }),
            _(this, "handleKeyUp", (e) => {
                if (this.props.keyboardModeEnabled) return;
                let t = S(e);
                null !== t &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    this.arrowUp({
                        direction: t,
                    }));
            }),
            _(this, "onArrowClick", (e) => {
                this.arrowDown({
                    direction: e,
                });
            });
    }
}

function w(e) {
    let { isActive: t, arrow: n, className: i, children: s } = e,
        [o, c] = l.useState(t),
        u = l.useCallback(() => {
            C[n](), c(!0);
        }, [n]);
    return (
        l.useEffect(() => {
            if (o) {
                let e = setTimeout(() => c(!1), 500);
                return () => clearTimeout(e);
            }
        }, [o]),
        (0, r.jsx)(h.DUT, {
            onClick: u,
            className: a()(E.UE, i, {
                [E.vu]: t || o,
            }),
            children: s,
        })
    );
}

function R(e) {
    let { transitionState: t, onClose: n } = e,
        [i, s] = l.useState(!1),
        [o, c] = l.useState(!1),
        u = l.useMemo(() => (__OVERLAY__ ? (0, g.y8)() : (0, b.Bx)()), []),
        { keyboardModeEnabled: d, useReducedMotion: y } = (0, f.cf)([A.A], () => ({
            keyboardModeEnabled: A.A.keyboardModeEnabled,
            useReducedMotion: A.A.useReducedMotion,
        }));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N, {
                showBackdrop: o,
            }),
            (0, r.jsx)(h.EOs, {
                className: a()(E._$, {
                    [E.O9]: i,
                }),
                size: h.rIJ.DYNAMIC,
                "aria-label": x.intl.string(x.t.T9DA2K),
                transitionState: t,
                parentComponent: "KeyboardShortcutsModal",
                children: (0, r.jsx)(p.F, {
                    component: "div",
                    children: i
                        ? (0, r.jsx)(
                              j.A,
                              {
                                  handleDemonClose: function () {
                                      c(!1), setTimeout(n, 500);
                                  },
                              },
                              "raging-demo",
                          )
                        : (0, r.jsx)(
                              P,
                              {
                                  content: u,
                                  keyboardModeEnabled: d,
                                  activateRagingDemon: function () {
                                      y || (m.A.disable(), s(!0), c(!0));
                                  },
                              },
                              "modal",
                          ),
                }),
            }),
        ],
    });
}
