n.d(t, { A: () => U }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(735438),
    o = n.n(s),
    d = n(17928),
    u = n(506774),
    c = n(475358),
    h = n(349288),
    E = n(274997),
    A = n(785796),
    _ = n(775602),
    p = n(446458),
    g = n(552122),
    f = n(400492),
    I = n(312671),
    S = n(210714),
    T = n(773669),
    m = n(437959),
    C = n(828184),
    O = n(723702),
    N = n(19575),
    y = n(902811),
    R = n(652215),
    L = n(985018),
    v = n(417376);
class D extends l.PureComponent {
    videoRef = null;
    _noProblemsTimeout = null;
    _problemsTimeout = null;
    _connectedSound = this.createSound();
    _loadingText = (function () {
        let e = [
            L.intl.string(L.t.Ex79K6),
            L.intl.string(L.t["+v5zsT"]),
            L.intl.string(L.t["RLx6+Y"]),
            L.intl.string(L.t.Q1PZkN),
            L.intl.string(L.t.x7sfVg),
            L.intl.format(L.t.PHuQsQ, { tabHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "tab", className: v.P }, t) }),
            L.intl.string(L.t["il/GZt"]),
            L.intl.string(L.t["5qAKlq"]),
            L.intl.format(L.t.FVVp79, {
                F6Hook: (e, t) => (0, i.jsx)(c.e, { shortcut: "f6", className: v.P }, t),
                tabHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "tab", className: v.P }, t),
            }),
            L.intl.string(L.t["7Y1hFH"]),
            L.intl.string(L.t.UcCW71),
            L.intl.string(L.t.E5Ghfc),
            L.intl.string(L.t.bANqo8),
            L.intl.string(L.t.yOEVDr),
            L.intl.string(L.t["u0Ra/G"]),
            L.intl.string(L.t.un4cQ7),
            L.intl.string(L.t["2cyYx1"]),
            L.intl.string(L.t.KCmze1),
            L.intl.string(L.t.I98MEE),
            L.intl.format(L.t.c0YCIx, {}),
            L.intl.string(L.t.z8AvIN),
            L.intl.string(L.t.IjX3P1),
            L.intl.string(L.t.lg3Ckc),
            L.intl.string(L.t["4GaLhY"]),
            L.intl.string(L.t.qHKbUw),
            L.intl.string(L.t.mJxKDw),
            L.intl.string(L.t.iiQBXF),
            L.intl.string(L.t.YPD46Q),
            L.intl.string(L.t.O8Bpga),
            L.intl.string(L.t.xzFwfi),
            L.intl.string(L.t["4G3fsX"]),
            L.intl.string(L.t["/jPyKC"]),
            L.intl.string(L.t["8x7D5c"]),
            L.intl.string(L.t.G6Q8H3),
            L.intl.string(L.t["9Cx+xL"]),
            L.intl.string(L.t.WsZ8dW),
            L.intl.string(L.t.btoe7M),
            L.intl.string(L.t.E6Y0j7),
            L.intl.string(L.t["7KZ81/"]),
            L.intl.string(L.t.hm7OKu),
            L.intl.string(L.t["H535i+"]),
            L.intl.string(L.t["08WJUR"]),
            L.intl.string(L.t.hhtfyi),
            L.intl.string(L.t.on980U),
            L.intl.string(L.t.AL6c01),
            L.intl.string(L.t.iLTeF6),
            L.intl.string(L.t.b3vSu7),
            L.intl.string(L.t.f8ao58),
            L.intl.format(L.t["1v1h8o"], { asterisks: "**" }),
            L.intl.format(L.t.MUlAVW, {
                quickSwitcherHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "mod+k", className: v.P }, t),
            }),
            L.intl.format(L.t.aes5VI, {
                markUnreadHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "alt+click", className: v.P }, t),
            }),
            L.intl.format(L.t.md9Svv, {
                markServerUnreadHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "shift+esc", className: v.P }, t),
            }),
            L.intl.format(L.t["X0Tu+u"], {
                navigateUnreadHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "shift+alt+up", className: v.P }, t),
                downHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "down", className: v.P }, t),
            }),
            L.intl.format(L.t.AkoeIY, {
                keyboardShortcutsHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "mod+/", className: v.P }, t),
            }),
            L.intl.format(L.t.P9sfAH, {
                messageNewlineHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "shift+return", className: v.P }, t),
            }),
            L.intl.format(L.t["3Ox33f"], {
                shiftHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "shift", className: v.P }, t),
            }),
            L.intl.format(L.t.enCV6b, { upHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "up", className: v.P }, t) }),
        ];
        return T.default.locale.startsWith("en-") && e.push(L.intl.string(L.t.dQ9Wqk)), e[o().random(e.length - 1)];
    })();
    _eventLoadingText = (function () {
        let e = g.A.getLoadingTips();
        if (null != e && e.length > 0) return e[o().random(e.length - 1)];
    })();
    constructor(e) {
        super(e);
        const { connected: t } = e;
        (this.state = { ready: t, hide: t, problems: !1, shouldRender: !t }), (this._connectedSound.volume = 1);
    }
    createSound() {
        let { soundpack: e } = this.props,
            t = (0, f.aN)("discodo", e);
        return (t.volume = 1), t;
    }
    componentDidMount() {
        this.setProblemsTimeout(), this.props.connected && (0, S.D)();
    }
    componentDidUpdate(e, t) {
        let { ready: n, hide: i, problems: l } = this.state,
            { connected: a, soundpack: r } = this.props,
            s = a && n && !i && !l;
        e.soundpack !== r && (this._connectedSound = this.createSound()),
            e.connected !== a || s
                ? (a && (0, S.D)(),
                  a && null != this.videoRef && u.w.get(R.wqg) && this._connectedSound.play(),
                  this.setState({ problems: !1, hide: a }))
                : t.hide !== i
                  ? (i ? this.clearProblemsTimeout() : this.setProblemsTimeout(),
                    this.setState({ shouldRender: !0 }),
                    setTimeout(() => this.setState({ shouldRender: !i }), 200))
                  : t.problems !== l && l && A.A.checkIncidents();
    }
    componentWillUnmount() {
        this.clearProblemsTimeout();
    }
    handleReady = () => {
        this.setState({ ready: !0 }),
            (0, O.isDesktop)() &&
                (N.Ay.send("UPDATED_QUOTES", ["Hold Tight — Loading Discord"]), N.Ay.send("UPDATE_OPEN_ON_STARTUP"));
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
            let l = this._loadingText,
                a = null;
            return (
                null != this._eventLoadingText && (l = this._eventLoadingText),
                null != t && ((l = t.name), (a = t.incident_updates[0].body)),
                (0, i.jsxs)("div", {
                    className: v.kL,
                    "data-fade": n,
                    style: {
                        "--connecting-container-fade-duration": "200ms",
                        "--connecting-content-fade-duration": "150ms",
                    },
                    children: [
                        (0, i.jsxs)("div", {
                            className: v.Qs,
                            children: [
                                (0, i.jsx)(y.A, {
                                    autoPlay: !0,
                                    loop: !e,
                                    setRef: this.setVideoRef,
                                    onReady: this.handleReady,
                                    className: r()(v.bE, this.state.ready ? v.Gc : ""),
                                }),
                                (0, i.jsxs)("div", {
                                    className: v.Qq,
                                    children: [
                                        null != t
                                            ? null
                                            : (0, i.jsx)("div", {
                                                  className: v.mu,
                                                  children: L.intl.string(L.t.v0R1Lh),
                                              }),
                                        (0, i.jsx)("div", { className: null != t ? v.DD : v.uN, children: l }),
                                        (0, i.jsx)("div", { className: v.rf, children: a }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: r()(v.Bk, { [v.ly]: this.state.problems }),
                            children: [
                                (0, i.jsx)("div", { className: v.u1, children: L.intl.string(L.t.AG2zPM) }),
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsxs)(h.Anchor, {
                                            className: v.AR,
                                            href: R.qF7.TWITTER_SUPPORT,
                                            target: "_blank",
                                            children: [
                                                (0, i.jsx)(E.p, { size: "xs", color: "currentColor", className: v.Kk }),
                                                L.intl.string(L.t.KlyTbj),
                                            ],
                                        }),
                                        (0, i.jsxs)(h.Anchor, {
                                            className: v.gy,
                                            href: R.qF7.STATUS,
                                            target: "_blank",
                                            children: [(0, i.jsx)(C.A, { className: v.Kk }), L.intl.string(L.t.AgXXyy)],
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
let U = d.Ay.connectStores([p.A, m.A, I.A, _.A], () => ({
    isTryingToConnect: p.A.isTryingToConnect(),
    connected: p.A.isConnected(),
    incident: m.A.getIncident(),
    soundpack: I.A.getSoundpack(),
    reducedMotion: _.A.useReducedMotion,
}))((e) => {
    let { isTryingToConnect: t, connected: n, incident: l, soundpack: a, reducedMotion: r } = e;
    return t ? (0, i.jsx)(D, { reducedMotion: r, soundpack: a, connected: n, incident: l }) : null;
});
