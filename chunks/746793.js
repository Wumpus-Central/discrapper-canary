n.d(t, { A: () => G }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    u = n.n(r),
    d = n(17928),
    o = n(506774),
    c = n(475358),
    h = n(349288),
    A = n(274997),
    g = n(785796),
    m = n(775602),
    C = n(366853),
    p = n(552122),
    _ = n(400492),
    f = n(312671),
    E = n(210714),
    S = n(773669),
    y = n(437959),
    I = n(828184),
    N = n(723702),
    T = n(19575),
    v = n(902811),
    D = n(652215),
    O = n(985018),
    w = n(417376);
class b extends l.PureComponent {
    videoRef = null;
    _noProblemsTimeout = null;
    _problemsTimeout = null;
    _connectedSound = this.createSound();
    _loadingText = (function () {
        let e = [
            O.intl.string(O.t.Ex79K6),
            O.intl.string(O.t["+v5zsT"]),
            O.intl.string(O.t["RLx6+Y"]),
            O.intl.string(O.t.Q1PZkN),
            O.intl.string(O.t.x7sfVg),
            O.intl.format(O.t.PHuQsQ, { tabHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "tab", className: w.P }, t) }),
            O.intl.string(O.t["il/GZt"]),
            O.intl.string(O.t["5qAKlq"]),
            O.intl.format(O.t.FVVp79, {
                F6Hook: (e, t) => (0, i.jsx)(c.e, { shortcut: "f6", className: w.P }, t),
                tabHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "tab", className: w.P }, t),
            }),
            O.intl.string(O.t["7Y1hFH"]),
            O.intl.string(O.t.UcCW71),
            O.intl.string(O.t.E5Ghfc),
            O.intl.string(O.t.bANqo8),
            O.intl.string(O.t.yOEVDr),
            O.intl.string(O.t["u0Ra/G"]),
            O.intl.string(O.t.un4cQ7),
            O.intl.string(O.t["2cyYx1"]),
            O.intl.string(O.t.KCmze1),
            O.intl.string(O.t.I98MEE),
            O.intl.format(O.t.c0YCIx, {}),
            O.intl.string(O.t.z8AvIN),
            O.intl.string(O.t.IjX3P1),
            O.intl.string(O.t.lg3Ckc),
            O.intl.string(O.t["4GaLhY"]),
            O.intl.string(O.t.qHKbUw),
            O.intl.string(O.t.mJxKDw),
            O.intl.string(O.t.iiQBXF),
            O.intl.string(O.t.YPD46Q),
            O.intl.string(O.t.O8Bpga),
            O.intl.string(O.t.xzFwfi),
            O.intl.string(O.t["4G3fsX"]),
            O.intl.string(O.t["/jPyKC"]),
            O.intl.string(O.t["8x7D5c"]),
            O.intl.string(O.t.G6Q8H3),
            O.intl.string(O.t["9Cx+xL"]),
            O.intl.string(O.t.WsZ8dW),
            O.intl.string(O.t.btoe7M),
            O.intl.string(O.t.E6Y0j7),
            O.intl.string(O.t["7KZ81/"]),
            O.intl.string(O.t.hm7OKu),
            O.intl.string(O.t["H535i+"]),
            O.intl.string(O.t["08WJUR"]),
            O.intl.string(O.t.hhtfyi),
            O.intl.string(O.t.on980U),
            O.intl.string(O.t.AL6c01),
            O.intl.string(O.t.iLTeF6),
            O.intl.string(O.t.b3vSu7),
            O.intl.string(O.t.f8ao58),
            O.intl.format(O.t["1v1h8o"], { asterisks: "**" }),
            O.intl.format(O.t.MUlAVW, {
                quickSwitcherHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "mod+k", className: w.P }, t),
            }),
            O.intl.format(O.t.aes5VI, {
                markUnreadHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "alt+click", className: w.P }, t),
            }),
            O.intl.format(O.t.md9Svv, {
                markServerUnreadHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "shift+esc", className: w.P }, t),
            }),
            O.intl.format(O.t["X0Tu+u"], {
                navigateUnreadHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "shift+alt+up", className: w.P }, t),
                downHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "down", className: w.P }, t),
            }),
            O.intl.format(O.t.AkoeIY, {
                keyboardShortcutsHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "mod+/", className: w.P }, t),
            }),
            O.intl.format(O.t.P9sfAH, {
                messageNewlineHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "shift+return", className: w.P }, t),
            }),
            O.intl.format(O.t["3Ox33f"], {
                shiftHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "shift", className: w.P }, t),
            }),
            O.intl.format(O.t.enCV6b, { upHook: (e, t) => (0, i.jsx)(c.e, { shortcut: "up", className: w.P }, t) }),
        ];
        return S.default.locale.startsWith("en-") && e.push(O.intl.string(O.t.dQ9Wqk)), e[u().random(e.length - 1)];
    })();
    _eventLoadingText = (function () {
        let e = p.A.getLoadingTips();
        if (null != e && e.length > 0) return e[u().random(e.length - 1)];
    })();
    constructor(e) {
        super(e);
        const { connected: t } = e;
        (this.state = { ready: t, hide: t, problems: !1, shouldRender: !t }), (this._connectedSound.volume = 1);
    }
    createSound() {
        let { soundpack: e } = this.props,
            t = (0, _.aN)("discodo", e);
        return (t.volume = 1), t;
    }
    componentDidMount() {
        this.setProblemsTimeout(), this.props.connected && (0, E.D)();
    }
    componentDidUpdate(e, t) {
        let { ready: n, hide: i, problems: l } = this.state,
            { connected: s, soundpack: a } = this.props,
            r = s && n && !i && !l;
        e.soundpack !== a && (this._connectedSound = this.createSound()),
            e.connected !== s || r
                ? (s && (0, E.D)(),
                  s && null != this.videoRef && o.w.get(D.wqg) && this._connectedSound.play(),
                  this.setState({ problems: !1, hide: s }))
                : t.hide !== i
                  ? (i ? this.clearProblemsTimeout() : this.setProblemsTimeout(),
                    this.setState({ shouldRender: !0 }),
                    setTimeout(() => this.setState({ shouldRender: !i }), 200))
                  : t.problems !== l && l && g.A.checkIncidents();
    }
    componentWillUnmount() {
        this.clearProblemsTimeout();
    }
    handleReady = () => {
        this.setState({ ready: !0 }),
            (0, N.isDesktop)() &&
                (T.Ay.send("UPDATED_QUOTES", ["Hold Tight — Loading Discord"]), T.Ay.send("UPDATE_OPEN_ON_STARTUP"));
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
                s = null;
            return (
                null != this._eventLoadingText && (l = this._eventLoadingText),
                null != t && ((l = t.name), (s = t.incident_updates[0].body)),
                (0, i.jsxs)("div", {
                    className: w.kL,
                    "data-fade": n,
                    style: {
                        "--connecting-container-fade-duration": "200ms",
                        "--connecting-content-fade-duration": "150ms",
                    },
                    children: [
                        (0, i.jsxs)("div", {
                            className: w.Qs,
                            children: [
                                (0, i.jsx)(v.A, {
                                    autoPlay: !0,
                                    loop: !e,
                                    setRef: this.setVideoRef,
                                    onReady: this.handleReady,
                                    className: a()(w.bE, this.state.ready ? w.Gc : ""),
                                }),
                                (0, i.jsxs)("div", {
                                    className: w.Qq,
                                    children: [
                                        null != t
                                            ? null
                                            : (0, i.jsx)("div", {
                                                  className: w.mu,
                                                  children: O.intl.string(O.t.v0R1Lh),
                                              }),
                                        (0, i.jsx)("div", { className: null != t ? w.DD : w.uN, children: l }),
                                        (0, i.jsx)("div", { className: w.rf, children: s }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: a()(w.Bk, { [w.ly]: this.state.problems }),
                            children: [
                                (0, i.jsx)("div", { className: w.u1, children: O.intl.string(O.t.AG2zPM) }),
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsxs)(h.Anchor, {
                                            className: w.AR,
                                            href: D.qF7.TWITTER_SUPPORT,
                                            target: "_blank",
                                            children: [
                                                (0, i.jsx)(A.p, { size: "xs", color: "currentColor", className: w.Kk }),
                                                O.intl.string(O.t.KlyTbj),
                                            ],
                                        }),
                                        (0, i.jsxs)(h.Anchor, {
                                            className: w.gy,
                                            href: D.qF7.STATUS,
                                            target: "_blank",
                                            children: [(0, i.jsx)(I.A, { className: w.Kk }), O.intl.string(O.t.AgXXyy)],
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
let G = d.Ay.connectStores([C.A, y.A, f.A, m.A], () => ({
    isTryingToConnect: C.A.isTryingToConnect(),
    connected: C.A.isConnected(),
    incident: y.A.getIncident(),
    soundpack: f.A.getSoundpack(),
    reducedMotion: m.A.useReducedMotion,
}))((e) => {
    let { isTryingToConnect: t, connected: n, incident: l, soundpack: s, reducedMotion: a } = e;
    return t ? (0, i.jsx)(b, { reducedMotion: a, soundpack: s, connected: n, incident: l }) : null;
});
