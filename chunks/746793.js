n.d(t, { A: () => R }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(735438),
    o = n.n(s),
    d = n(311907),
    u = n(506774),
    c = n(475358),
    A = n(349288),
    h = n(274997),
    _ = n(785796),
    E = n(775602),
    p = n(142120),
    m = n(552122),
    g = n(400492),
    I = n(312671),
    C = n(210714),
    f = n(773669),
    T = n(437959),
    S = n(828184),
    N = n(723702),
    O = n(837921),
    L = n(902811),
    y = n(652215),
    v = n(985018),
    b = n(417376);
class D extends r.PureComponent {
    videoRef = null;
    _noProblemsTimeout = null;
    _problemsTimeout = null;
    _connectedSound = this.createSound();
    _loadingText = (function () {
        let e = [
            v.intl.string(v.t.Ex79K6),
            v.intl.string(v.t["+v5zsT"]),
            v.intl.string(v.t["RLx6+Y"]),
            v.intl.string(v.t.Q1PZkN),
            v.intl.string(v.t.x7sfVg),
            v.intl.format(v.t.PHuQsQ, { tabHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "tab", className: b.P }, t) }),
            v.intl.string(v.t["il/GZt"]),
            v.intl.string(v.t["5qAKlq"]),
            v.intl.format(v.t.FVVp79, {
                F6Hook: (e, t) => (0, i.jsx)(c.e, { shortcut: "f6", className: b.P }, t),
                tabHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "tab", className: b.P }, t),
            }),
            v.intl.string(v.t["7Y1hFH"]),
            v.intl.string(v.t.UcCW71),
            v.intl.string(v.t.E5Ghfc),
            v.intl.string(v.t.bANqo8),
            v.intl.string(v.t.yOEVDr),
            v.intl.string(v.t["u0Ra/G"]),
            v.intl.string(v.t.un4cQ7),
            v.intl.string(v.t["2cyYx1"]),
            v.intl.string(v.t.KCmze1),
            v.intl.string(v.t.I98MEE),
            v.intl.format(v.t.c0YCIx, {}),
            v.intl.string(v.t.z8AvIN),
            v.intl.string(v.t.IjX3P1),
            v.intl.string(v.t.lg3Ckc),
            v.intl.string(v.t["4GaLhY"]),
            v.intl.string(v.t.qHKbUw),
            v.intl.string(v.t.mJxKDw),
            v.intl.string(v.t.iiQBXF),
            v.intl.string(v.t.YPD46Q),
            v.intl.string(v.t.O8Bpga),
            v.intl.string(v.t.xzFwfi),
            v.intl.string(v.t["4G3fsX"]),
            v.intl.string(v.t["/jPyKC"]),
            v.intl.string(v.t["8x7D5c"]),
            v.intl.string(v.t.G6Q8H3),
            v.intl.string(v.t["9Cx+xL"]),
            v.intl.string(v.t.WsZ8dW),
            v.intl.string(v.t.btoe7M),
            v.intl.string(v.t.E6Y0j7),
            v.intl.string(v.t["7KZ81/"]),
            v.intl.string(v.t.hm7OKu),
            v.intl.string(v.t["H535i+"]),
            v.intl.string(v.t["08WJUR"]),
            v.intl.string(v.t.hhtfyi),
            v.intl.string(v.t.on980U),
            v.intl.string(v.t.AL6c01),
            v.intl.string(v.t.iLTeF6),
            v.intl.string(v.t.b3vSu7),
            v.intl.string(v.t.f8ao58),
            v.intl.format(v.t["1v1h8o"], { asterisks: "**" }),
            v.intl.format(v.t.MUlAVW, {
                quickSwitcherHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "mod+k", className: b.P }, t),
            }),
            v.intl.format(v.t.aes5VI, {
                markUnreadHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "alt+click", className: b.P }, t),
            }),
            v.intl.format(v.t.md9Svv, {
                markServerUnreadHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "shift+esc", className: b.P }, t),
            }),
            v.intl.format(v.t["X0Tu+u"], {
                navigateUnreadHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "shift+alt+up", className: b.P }, t),
                downHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "down", className: b.P }, t),
            }),
            v.intl.format(v.t.AkoeIY, {
                keyboardShortcutsHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "mod+/", className: b.P }, t),
            }),
            v.intl.format(v.t.P9sfAH, {
                messageNewlineHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "shift+return", className: b.P }, t),
            }),
            v.intl.format(v.t["3Ox33f"], {
                shiftHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "shift", className: b.P }, t),
            }),
            v.intl.format(v.t.enCV6b, { upHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "up", className: b.P }, t) }),
        ];
        return f.default.locale.startsWith("en-") && e.push(v.intl.string(v.t.dQ9Wqk)), e[o().random(e.length - 1)];
    })();
    _eventLoadingText = (function () {
        let e = m.A.getLoadingTips();
        if (null != e && e.length > 0) return e[o().random(e.length - 1)];
    })();
    constructor(e) {
        super(e);
        const { connected: t } = e;
        (this.state = { ready: t, hide: t, problems: !1, shouldRender: !t }), (this._connectedSound.volume = 1);
    }
    createSound() {
        let { soundpack: e } = this.props,
            t = (0, g.aN)("discodo", e);
        return (t.volume = 1), t;
    }
    componentDidMount() {
        this.setProblemsTimeout(), this.props.connected && (0, C.D)();
    }
    componentDidUpdate(e, t) {
        let { ready: n, hide: i, problems: r } = this.state,
            { connected: a, soundpack: l } = this.props,
            s = a && n && !i && !r;
        e.soundpack !== l && (this._connectedSound = this.createSound()),
            e.connected !== a || s
                ? (a && (0, C.D)(),
                  a && null != this.videoRef && u.w.get(y.wqg) && this._connectedSound.play(),
                  this.setState({ problems: !1, hide: a }))
                : t.hide !== i
                  ? (i ? this.clearProblemsTimeout() : this.setProblemsTimeout(),
                    this.setState({ shouldRender: !0 }),
                    setTimeout(() => this.setState({ shouldRender: !i }), 200))
                  : t.problems !== r && r && _.A.checkIncidents();
    }
    componentWillUnmount() {
        this.clearProblemsTimeout();
    }
    handleReady = () => {
        this.setState({ ready: !0 }),
            (0, N.isDesktop)() &&
                (O.Ay.send("UPDATED_QUOTES", ["Hold Tight — Loading Discord"]), O.Ay.send("UPDATE_OPEN_ON_STARTUP"));
    };
    setVideoRef = (e) => {
        this.videoRef = e;
    };
    setProblemsTimeout = () => {
        null == this._problemsTimeout &&
            (this._problemsTimeout = setTimeout(() => this.setState({ problems: !0 }), 1e4));
    };
    clearProblemsTimeout = () => {
        clearTimeout(this._problemsTimeout), (this._problemsTimeout = null);
    };
    render() {
        let { connected: e, incident: t } = this.props,
            { hide: n } = this.state;
        if (!this.state.shouldRender) return null;
        {
            let r = this._loadingText,
                a = null;
            return (
                null != this._eventLoadingText && (r = this._eventLoadingText),
                null != t && ((r = t.name), (a = t.incident_updates[0].body)),
                (0, i.jsxs)("div", {
                    className: b.kL,
                    "data-fade": n,
                    style: {
                        "--connecting-container-fade-duration": "200ms",
                        "--connecting-content-fade-duration": "150ms",
                    },
                    children: [
                        (0, i.jsxs)("div", {
                            className: b.Qs,
                            children: [
                                (0, i.jsx)(L.A, {
                                    autoPlay: !0,
                                    loop: !e,
                                    setRef: this.setVideoRef,
                                    onReady: this.handleReady,
                                    className: l()(b.bE, this.state.ready ? b.Gc : ""),
                                }),
                                (0, i.jsxs)("div", {
                                    className: b.Qq,
                                    children: [
                                        null != t
                                            ? null
                                            : (0, i.jsx)("div", {
                                                  className: b.mu,
                                                  children: v.intl.string(v.t.v0R1Lh),
                                              }),
                                        (0, i.jsx)("div", { className: null != t ? b.DD : b.uN, children: r }),
                                        (0, i.jsx)("div", { className: b.rf, children: a }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: l()(b.Bk, { [b.ly]: this.state.problems }),
                            children: [
                                (0, i.jsx)("div", { className: b.u1, children: v.intl.string(v.t.AG2zPM) }),
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsxs)(A.Anchor, {
                                            className: b.AR,
                                            href: y.qF7.TWITTER_SUPPORT,
                                            target: "_blank",
                                            children: [
                                                (0, i.jsx)(h.p, { size: "xs", color: "currentColor", className: b.Kk }),
                                                v.intl.string(v.t.KlyTbj),
                                            ],
                                        }),
                                        (0, i.jsxs)(A.Anchor, {
                                            className: b.gy,
                                            href: y.qF7.STATUS,
                                            target: "_blank",
                                            children: [(0, i.jsx)(S.A, { className: b.Kk }), v.intl.string(v.t.AgXXyy)],
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
}
let R = d.Ay.connectStores([p.A, T.A, I.A, E.A], () => ({
    isTryingToConnect: p.A.isTryingToConnect(),
    connected: p.A.isConnected(),
    incident: T.A.getIncident(),
    soundpack: I.A.getSoundpack(),
    reducedMotion: E.A.useReducedMotion,
}))((e) => {
    let { isTryingToConnect: t, connected: n, incident: r, soundpack: a, reducedMotion: l } = e;
    return t ? (0, i.jsx)(D, { reducedMotion: l, soundpack: a, connected: n, incident: r }) : null;
});
