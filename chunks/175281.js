n.d(t, { Z: () => A }), n(953529), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(392711),
    u = n.n(c),
    d = n(748780),
    f = n(442837),
    h = n(215569),
    p = n(481060),
    g = n(612226),
    b = n(951483),
    m = n(714338),
    y = n(607070),
    O = n(460181),
    v = n(585483),
    j = n(264549),
    C = n(981631),
    x = n(388032),
    E = n(107388);
function S(e, t, n) {
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
let I = {
    UP: u().throttle(() => (0, O.GN)("ddr-up"), 100),
    DOWN: u().throttle(() => (0, O.GN)("ddr-down"), 100),
    LEFT: u().throttle(() => (0, O.GN)("ddr-left"), 100),
    RIGHT: u().throttle(() => (0, O.GN)("ddr-right"), 100),
};
function _(e) {
    switch (e.keyCode) {
        case C.yXg.ARROW_UP:
            return "UP";
        case C.yXg.ARROW_DOWN:
            return "DOWN";
        case C.yXg.ARROW_LEFT:
            return "LEFT";
        case C.yXg.ARROW_RIGHT:
            return "RIGHT";
        default:
            return null;
    }
}
let P = [g.Q2.MESSAGE, g.Q2.NAVIGATION, g.Q2.VOICE_AND_VIDEO, g.Q2.CHAT, g.Q2.MISCELLANEOUS];
function N(e) {
    let { showBackdrop: t } = e;
    return (0, r.jsx)("div", { className: a()(E.backdrop, { [E.show]: t }) });
}
function Z() {
    let e = i.useMemo(
        () =>
            u()((0, g.Rv)())
                .groupBy((e) => e.group)
                .value(),
        [],
    );
    return (0, r.jsx)("div", {
        className: E.keyboardShortcutList,
        children: P.map((t) => {
            let n = e[t],
                i = (0, g.UD)(t),
                l = (0, g.U6)(t);
            return (0, r.jsxs)(
                "div",
                {
                    className: E.keyboardShortcutSection,
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(p.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: i,
                                }),
                                null != l &&
                                    (0, r.jsx)(p.Text, {
                                        className: E.keybindGroupDescription,
                                        variant: "text-sm/normal",
                                        children: l,
                                    }),
                            ],
                        }),
                        (0, r.jsx)(
                            "div",
                            {
                                className: E.keyboardShortcutListGroup,
                                children: n.map((e, t) => {
                                    var n;
                                    return (null == (n = e.predicate) ? void 0 : n.call(e)) === !1
                                        ? null
                                        : (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: E.keybindGroup,
                                                  children: [
                                                      (0, r.jsx)(p.Text, {
                                                          variant: "text-sm/normal",
                                                          children: e.description,
                                                      }),
                                                      (0, r.jsx)("div", {
                                                          className: "keybind-shortcuts",
                                                          children: e.binds.map((e) =>
                                                              (0, r.jsx)(
                                                                  p.M2$,
                                                                  {
                                                                      className: E.keybindKey,
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
class w extends i.PureComponent {
    componentDidMount() {
        (this.lastInputedKeys = []),
            v.S.subscribe(C.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            v.S.subscribe(C.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.addEventListener("keydown", this.handleKeyDown, { capture: !0 }),
            window.addEventListener("keyup", this.handleKeyUp, { capture: !0 });
    }
    componentWillUnmount() {
        v.S.unsubscribe(C.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            v.S.unsubscribe(C.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.removeEventListener("keydown", this.handleKeyDown, { capture: !0 }),
            window.removeEventListener("keyup", this.handleKeyUp, { capture: !0 });
    }
    render() {
        let { UP: e, DOWN: t, LEFT: n, RIGHT: i } = this.state;
        return (0, r.jsxs)(d.Z.div, {
            className: E.keyboardShortcutsModal,
            style: this.getStyles(),
            children: [
                (0, r.jsxs)(p.H, {
                    className: E.modalTitle,
                    children: [
                        (0, r.jsx)("div", {
                            className: E.content,
                            children: x.intl.string(x.t["1BdUtx"]),
                        }),
                        (0, r.jsx)(p.M2$, { shortcut: "mod+/" }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: E.modalSubtitle,
                    children: x.intl.string(x.t["2t19lU"]),
                }),
                (0, r.jsxs)("div", {
                    className: E.ddrArrows,
                    children: [
                        (0, r.jsx)(T, {
                            arrow: "LEFT",
                            isActive: n,
                            className: E.left,
                            children: "left",
                        }),
                        (0, r.jsx)(T, {
                            arrow: "DOWN",
                            isActive: t,
                            className: E.down,
                            children: "down",
                        }),
                        (0, r.jsx)(T, {
                            arrow: "UP",
                            isActive: e,
                            className: E.up,
                            children: "up",
                        }),
                        (0, r.jsx)(T, {
                            arrow: "RIGHT",
                            isActive: i,
                            className: E.right,
                            children: "right",
                        }),
                    ],
                }),
                (0, r.jsx)(p.yWw, {
                    ref: this.scrollerRef,
                    fade: !0,
                    children: (0, r.jsx)(p.y5t, { children: (0, r.jsx)(Z, {}) }),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            S(this, "state", {
                UP: !1,
                DOWN: !1,
                LEFT: !1,
                RIGHT: !1,
                opacity: new d.Z.Value(1),
                scaleX: new d.Z.Value(1),
                scaleY: new d.Z.Value(0),
                animating: !1,
            }),
            S(this, "scrollerRef", i.createRef()),
            S(this, "lastInputedKeys", []),
            S(this, "scrollPageUp", () => {
                let e = this.scrollerRef.current;
                s()(null != e, "Scroller is pagedUp when not mounted"), e.scrollPageUp({ animate: !0 });
            }),
            S(this, "scrollPageDown", () => {
                let e = this.scrollerRef.current;
                s()(null != e, "Scroller is pagedDown when not mounted"), e.scrollPageDown({ animate: !0 });
            }),
            S(this, "arrowUp", (e) => {
                let { direction: t } = e;
                this.setState({ [t]: !1 });
            }),
            S(this, "arrowDown", (e) => {
                let { direction: t } = e;
                I[t](), this.setState({ [t]: !0 });
            }),
            S(this, "componentWillLeave", (e) => {
                this.setState({ animating: !0 }),
                    this.state.opacity.setValue(1),
                    this.state.scaleX.setValue(0.5),
                    this.state.scaleY.setValue(1),
                    d.Z.sequence([
                        d.Z.timing(this.state.opacity, {
                            toValue: 0,
                            duration: 800,
                            easing: d.Z.Easing.cubic,
                        }),
                    ]).start(e);
            }),
            S(this, "toggleOpacity", () => {
                1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1);
            }),
            S(this, "getStyles", () => ({
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
            S(this, "handleKeyDown", (e) => {
                if (
                    (this.lastInputedKeys.push(e.keyCode),
                    (this.lastInputedKeys = this.lastInputedKeys.slice(-5)),
                    this.lastInputedKeys[0] === C.yXg.H &&
                        this.lastInputedKeys[1] === C.yXg.H &&
                        this.lastInputedKeys[2] === C.yXg.ARROW_RIGHT &&
                        this.lastInputedKeys[3] === C.yXg.N &&
                        this.lastInputedKeys[4] === C.yXg.K &&
                        this.props.activateRagingDemon(),
                    this.props.keyboardModeEnabled)
                )
                    return;
                let t = _(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({ direction: t }));
            }),
            S(this, "handleKeyUp", (e) => {
                if (this.props.keyboardModeEnabled) return;
                let t = _(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({ direction: t }));
            }),
            S(this, "onArrowClick", (e) => {
                this.arrowDown({ direction: e });
            });
    }
}
function T(e) {
    let { isActive: t, arrow: n, className: l, children: o } = e,
        [s, c] = i.useState(t),
        u = i.useCallback(() => {
            I[n](), c(!0);
        }, [n]);
    return (
        i.useEffect(() => {
            if (s) {
                let e = setTimeout(() => c(!1), 500);
                return () => clearTimeout(e);
            }
        }, [s]),
        (0, r.jsx)(p.P3F, {
            onClick: u,
            className: a()(E.arrow, l, { [E.active]: t || s }),
            children: o,
        })
    );
}
function A(e) {
    let { transitionState: t, onClose: n } = e,
        [l, o] = i.useState(!1),
        [s, c] = i.useState(!1),
        u = i.useMemo(() => (__OVERLAY__ ? (0, b.Zg)() : (0, g.Rv)()), []),
        { keyboardModeEnabled: d, useReducedMotion: O } = (0, f.cj)([y.Z], () => ({
            keyboardModeEnabled: y.Z.keyboardModeEnabled,
            useReducedMotion: y.Z.useReducedMotion,
        }));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N, { showBackdrop: s }),
            (0, r.jsx)(p.Y0X, {
                className: a()(E.noBackground, { [E.noShadow]: l }),
                size: p.CgR.DYNAMIC,
                "aria-label": x.intl.string(x.t.T9DA2K),
                transitionState: t,
                parentComponent: "KeyboardShortcutsModal",
                children: (0, r.jsx)(h.W, {
                    component: "div",
                    children: l
                        ? (0, r.jsx)(
                              j.Z,
                              {
                                  handleDemonClose: function () {
                                      c(!1), setTimeout(n, 500);
                                  },
                              },
                              "raging-demo",
                          )
                        : (0, r.jsx)(
                              w,
                              {
                                  content: u,
                                  keyboardModeEnabled: d,
                                  activateRagingDemon: function () {
                                      O || (m.Z.disable(), o(!0), c(!0));
                                  },
                              },
                              "modal",
                          ),
                }),
            }),
        ],
    });
}
