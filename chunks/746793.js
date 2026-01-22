n.d(t, { A: () => x }), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(735438),
    o = n.n(s),
    c = n(311907),
    u = n(506774),
    d = n(397927),
    p = n(785796),
    f = n(775602),
    h = n(142120),
    A = n(552122),
    g = n(400492),
    m = n(312671),
    b = n(210714),
    _ = n(773669),
    E = n(437959),
    O = n(828184),
    y = n(723702),
    I = n(837921),
    v = n(902811),
    S = n(652215),
    C = n(985018),
    N = n(281733);
function T(e, t, n) {
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
class j extends i.PureComponent {
    createSound() {
        let { soundpack: e } = this.props,
            t = (0, g.aN)("discodo", e);
        return (t.volume = 1), t;
    }
    componentDidMount() {
        this.setProblemsTimeout(), this.props.connected && (0, b.D)();
    }
    componentDidUpdate(e, t) {
        let { ready: n, hide: r, problems: i } = this.state,
            { connected: l, soundpack: a } = this.props,
            s = l && n && !r && !i;
        e.soundpack !== a && (this._connectedSound = this.createSound()),
            e.connected !== l || s
                ? (l && (0, b.D)(),
                  l && null != this.videoRef && u.w.get(S.wqg) && this._connectedSound.play(),
                  this.setState({
                      problems: !1,
                      hide: l,
                  }))
                : t.hide !== r
                  ? (r ? this.clearProblemsTimeout() : this.setProblemsTimeout(),
                    this.setState({ shouldRender: !0 }),
                    setTimeout(() => this.setState({ shouldRender: !r }), 200))
                  : t.problems !== i && i && p.A.checkIncidents();
    }
    componentWillUnmount() {
        this.clearProblemsTimeout();
    }
    render() {
        let { connected: e, incident: t } = this.props,
            { hide: n } = this.state;
        if (!this.state.shouldRender) return null;
        {
            let i = this._loadingText,
                l = null;
            return (
                null != this._eventLoadingText && (i = this._eventLoadingText),
                null != t && ((i = t.name), (l = t.incident_updates[0].body)),
                (0, r.jsxs)("div", {
                    className: N.kL,
                    "data-fade": n,
                    style: {
                        "--connecting-container-fade-duration": "".concat(200, "ms"),
                        "--connecting-content-fade-duration": "".concat(150, "ms"),
                    },
                    children: [
                        (0, r.jsxs)("div", {
                            className: N.Qs,
                            children: [
                                (0, r.jsx)(v.A, {
                                    autoPlay: !0,
                                    loop: !e,
                                    setRef: this.setVideoRef,
                                    onReady: this.handleReady,
                                    className: a()(N.bE, this.state.ready ? N.Gc : ""),
                                }),
                                (0, r.jsxs)("div", {
                                    className: N.Qq,
                                    children: [
                                        null != t
                                            ? null
                                            : (0, r.jsx)("div", {
                                                  className: N.mu,
                                                  children: C.intl.string(C.t.v0R1Lh),
                                              }),
                                        (0, r.jsx)("div", {
                                            className: null != t ? N.DD : N.uN,
                                            children: i,
                                        }),
                                        (0, r.jsx)("div", {
                                            className: N.rf,
                                            children: l,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: a()(N.Bk, { [N.ly]: this.state.problems }),
                            children: [
                                (0, r.jsx)("div", {
                                    className: N.u1,
                                    children: C.intl.string(C.t.AG2zPM),
                                }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsxs)(d.MzZ, {
                                            className: N.AR,
                                            href: S.qF7.TWITTER_SUPPORT,
                                            target: "_blank",
                                            children: [
                                                (0, r.jsx)(d.p3p, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: N.Kk,
                                                }),
                                                C.intl.string(C.t.KlyTbj),
                                            ],
                                        }),
                                        (0, r.jsxs)(d.MzZ, {
                                            className: N.gy,
                                            href: S.qF7.STATUS,
                                            target: "_blank",
                                            children: [(0, r.jsx)(O.A, { className: N.Kk }), C.intl.string(C.t.AgXXyy)],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                })
            );
        }
    }
    constructor(e) {
        super(e),
            T(this, "videoRef", null),
            T(this, "_noProblemsTimeout", null),
            T(this, "_problemsTimeout", null),
            T(this, "_connectedSound", this.createSound()),
            T(
                this,
                "_loadingText",
                (function () {
                    let e = [
                        C.intl.string(C.t.Ex79K6),
                        C.intl.string(C.t["+v5zsT"]),
                        C.intl.string(C.t["RLx6+Y"]),
                        C.intl.string(C.t.Q1PZkN),
                        C.intl.string(C.t.x7sfVg),
                        C.intl.format(C.t.PHuQsQ, {
                            tabHook: (e, t) =>
                                (0, r.jsx)(
                                    d.e7I,
                                    {
                                        shortcut: "tab",
                                        className: N.P,
                                    },
                                    t,
                                ),
                        }),
                        C.intl.string(C.t.UorX4T),
                        C.intl.string(C.t["il/GZt"]),
                        C.intl.string(C.t.HKBJvw),
                        C.intl.format(C.t.FVVp79, {
                            F6Hook: (e, t) =>
                                (0, r.jsx)(
                                    d.e7I,
                                    {
                                        shortcut: "f6",
                                        className: N.P,
                                    },
                                    t,
                                ),
                            tabHook: (e, t) =>
                                (0, r.jsx)(
                                    d.e7I,
                                    {
                                        shortcut: "tab",
                                        className: N.P,
                                    },
                                    t,
                                ),
                        }),
                        C.intl.string(C.t["7Y1hFH"]),
                        C.intl.string(C.t.UcCW71),
                        C.intl.string(C.t.E5Ghfc),
                        C.intl.string(C.t.bANqo8),
                        C.intl.string(C.t.yOEVDr),
                        C.intl.string(C.t["u0Ra/G"]),
                        C.intl.string(C.t.un4cQ7),
                        C.intl.string(C.t["2cyYx1"]),
                        C.intl.string(C.t.KCmze1),
                        C.intl.string(C.t.I98MEE),
                        C.intl.format(C.t.c0YCIx, {}),
                        C.intl.string(C.t.z8AvIN),
                        C.intl.string(C.t.IjX3P1),
                        C.intl.string(C.t.lg3Ckc),
                        C.intl.string(C.t["4GaLhY"]),
                        C.intl.string(C.t.qHKbUw),
                        C.intl.string(C.t.mJxKDw),
                        C.intl.string(C.t.iiQBXF),
                        C.intl.string(C.t.YPD46Q),
                        C.intl.string(C.t.O8Bpga),
                        C.intl.string(C.t.xzFwfi),
                        C.intl.string(C.t["4G3fsX"]),
                        C.intl.string(C.t["/jPyKC"]),
                        C.intl.string(C.t["8x7D5c"]),
                        C.intl.string(C.t.G6Q8H3),
                        C.intl.string(C.t["9Cx+xL"]),
                        C.intl.string(C.t.WsZ8dW),
                        C.intl.string(C.t.btoe7M),
                        C.intl.string(C.t.E6Y0j7),
                        C.intl.string(C.t["7KZ81/"]),
                        C.intl.string(C.t.hm7OKu),
                        C.intl.string(C.t["H535i+"]),
                        C.intl.string(C.t["08WJUR"]),
                        C.intl.string(C.t.hhtfyi),
                        C.intl.string(C.t.on980U),
                        C.intl.string(C.t.AL6c01),
                        C.intl.string(C.t.iLTeF6),
                        C.intl.string(C.t.b3vSu7),
                        C.intl.string(C.t.f8ao58),
                        C.intl.format(C.t["1v1h8o"], { asterisks: "**" }),
                        C.intl.format(C.t.MUlAVW, {
                            quickSwitcherHook: (e, t) =>
                                (0, r.jsx)(
                                    d.e7I,
                                    {
                                        shortcut: "mod+k",
                                        className: N.P,
                                    },
                                    t,
                                ),
                        }),
                        C.intl.format(C.t.aes5VI, {
                            markUnreadHook: (e, t) =>
                                (0, r.jsx)(
                                    d.e7I,
                                    {
                                        shortcut: "alt+click",
                                        className: N.P,
                                    },
                                    t,
                                ),
                        }),
                        C.intl.format(C.t.md9Svv, {
                            markServerUnreadHook: (e, t) =>
                                (0, r.jsx)(
                                    d.e7I,
                                    {
                                        shortcut: "shift+esc",
                                        className: N.P,
                                    },
                                    t,
                                ),
                        }),
                        C.intl.format(C.t["X0Tu+u"], {
                            navigateUnreadHook: (e, t) =>
                                (0, r.jsx)(
                                    d.e7I,
                                    {
                                        shortcut: "shift+alt+up",
                                        className: N.P,
                                    },
                                    t,
                                ),
                            downHook: (e, t) =>
                                (0, r.jsx)(
                                    d.e7I,
                                    {
                                        shortcut: "down",
                                        className: N.P,
                                    },
                                    t,
                                ),
                        }),
                        C.intl.format(C.t.AkoeIY, {
                            keyboardShortcutsHook: (e, t) =>
                                (0, r.jsx)(
                                    d.e7I,
                                    {
                                        shortcut: "mod+/",
                                        className: N.P,
                                    },
                                    t,
                                ),
                        }),
                        C.intl.format(C.t.P9sfAH, {
                            messageNewlineHook: (e, t) =>
                                (0, r.jsx)(
                                    d.e7I,
                                    {
                                        shortcut: "shift+return",
                                        className: N.P,
                                    },
                                    t,
                                ),
                        }),
                        C.intl.format(C.t["3Ox33f"], {
                            shiftHook: (e, t) =>
                                (0, r.jsx)(
                                    d.e7I,
                                    {
                                        shortcut: "shift",
                                        className: N.P,
                                    },
                                    t,
                                ),
                        }),
                        C.intl.format(C.t.enCV6b, {
                            upHook: (e, t) =>
                                (0, r.jsx)(
                                    d.e7I,
                                    {
                                        shortcut: "up",
                                        className: N.P,
                                    },
                                    t,
                                ),
                        }),
                    ];
                    return (
                        _.default.locale.startsWith("en-") && e.push(C.intl.string(C.t.dQ9Wqk)),
                        e[o().random(e.length - 1)]
                    );
                })(),
            ),
            T(
                this,
                "_eventLoadingText",
                (function () {
                    let e = A.A.getLoadingTips();
                    if (null != e && e.length > 0) return e[o().random(e.length - 1)];
                })(),
            ),
            T(this, "handleReady", () => {
                this.setState({ ready: !0 }),
                    (0, y.isDesktop)() &&
                        (I.Ay.send("UPDATED_QUOTES", ["Hold Tight \u2014 Loading Discord"]),
                        I.Ay.send("UPDATE_OPEN_ON_STARTUP"));
            }),
            T(this, "setVideoRef", (e) => {
                this.videoRef = e;
            }),
            T(this, "setProblemsTimeout", () => {
                null == this._problemsTimeout &&
                    (this._problemsTimeout = setTimeout(() => this.setState({ problems: !0 }), 10000));
            }),
            T(this, "clearProblemsTimeout", () => {
                clearTimeout(this._problemsTimeout), (this._problemsTimeout = null);
            });
        const { connected: t } = e;
        (this.state = {
            ready: t,
            hide: t,
            problems: !1,
            shouldRender: !t,
        }),
            (this._connectedSound.volume = 1);
    }
}
let x = c.Ay.connectStores([h.A, E.A, m.A, f.A], () => ({
    isTryingToConnect: h.A.isTryingToConnect(),
    connected: h.A.isConnected(),
    incident: E.A.getIncident(),
    soundpack: m.A.getSoundpack(),
    reducedMotion: f.A.useReducedMotion,
}))((e) => {
    let { isTryingToConnect: t, connected: n, incident: i, soundpack: l, reducedMotion: a } = e;
    return t
        ? (0, r.jsx)(j, {
              reducedMotion: a,
              soundpack: l,
              connected: n,
              incident: i,
          })
        : null;
});
