n.d(t, { A: () => O }), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(735438),
    o = n.n(s),
    d = n(311907),
    c = n(506774),
    u = n(397927),
    A = n(785796),
    h = n(775602),
    _ = n(142120),
    m = n(552122),
    g = n(400492),
    p = n(312671),
    E = n(210714),
    I = n(773669),
    f = n(437959),
    C = n(828184),
    T = n(723702),
    S = n(837921),
    N = n(902811),
    x = n(652215),
    v = n(985018),
    b = n(540528);
class y extends l.PureComponent {
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
            v.intl.format(v.t.PHuQsQ, { tabHook: (e, t) => (0, i.jsx)(u.e7I, { shortcut: "tab", className: b.P }, t) }),
            v.intl.string(v.t["il/GZt"]),
            v.intl.string(v.t["5qAKlq"]),
            v.intl.format(v.t.FVVp79, {
                F6Hook: (e, t) => (0, i.jsx)(u.e7I, { shortcut: "f6", className: b.P }, t),
                tabHook: (e, t) => (0, i.jsx)(u.e7I, { shortcut: "tab", className: b.P }, t),
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
                quickSwitcherHook: (e, t) => (0, i.jsx)(u.e7I, { shortcut: "mod+k", className: b.P }, t),
            }),
            v.intl.format(v.t.aes5VI, {
                markUnreadHook: (e, t) => (0, i.jsx)(u.e7I, { shortcut: "alt+click", className: b.P }, t),
            }),
            v.intl.format(v.t.md9Svv, {
                markServerUnreadHook: (e, t) => (0, i.jsx)(u.e7I, { shortcut: "shift+esc", className: b.P }, t),
            }),
            v.intl.format(v.t["X0Tu+u"], {
                navigateUnreadHook: (e, t) => (0, i.jsx)(u.e7I, { shortcut: "shift+alt+up", className: b.P }, t),
                downHook: (e, t) => (0, i.jsx)(u.e7I, { shortcut: "down", className: b.P }, t),
            }),
            v.intl.format(v.t.AkoeIY, {
                keyboardShortcutsHook: (e, t) => (0, i.jsx)(u.e7I, { shortcut: "mod+/", className: b.P }, t),
            }),
            v.intl.format(v.t.P9sfAH, {
                messageNewlineHook: (e, t) => (0, i.jsx)(u.e7I, { shortcut: "shift+return", className: b.P }, t),
            }),
            v.intl.format(v.t["3Ox33f"], {
                shiftHook: (e, t) => (0, i.jsx)(u.e7I, { shortcut: "shift", className: b.P }, t),
            }),
            v.intl.format(v.t.enCV6b, { upHook: (e, t) => (0, i.jsx)(u.e7I, { shortcut: "up", className: b.P }, t) }),
        ];
        return I.default.locale.startsWith("en-") && e.push(v.intl.string(v.t.dQ9Wqk)), e[o().random(e.length - 1)];
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
        this.setProblemsTimeout(), this.props.connected && (0, E.D)();
    }
    componentDidUpdate(e, t) {
        let { ready: n, hide: i, problems: l } = this.state,
            { connected: r, soundpack: a } = this.props,
            s = r && n && !i && !l;
        e.soundpack !== a && (this._connectedSound = this.createSound()),
            e.connected !== r || s
                ? (r && (0, E.D)(),
                  r && null != this.videoRef && c.w.get(x.wqg) && this._connectedSound.play(),
                  this.setState({ problems: !1, hide: r }))
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
            (0, T.isDesktop)() &&
                (S.Ay.send("UPDATED_QUOTES", ["Hold Tight — Loading Discord"]), S.Ay.send("UPDATE_OPEN_ON_STARTUP"));
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
                r = null;
            return (
                null != this._eventLoadingText && (l = this._eventLoadingText),
                null != t && ((l = t.name), (r = t.incident_updates[0].body)),
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
                                (0, i.jsx)(N.A, {
                                    autoPlay: !0,
                                    loop: !e,
                                    setRef: this.setVideoRef,
                                    onReady: this.handleReady,
                                    className: a()(b.bE, this.state.ready ? b.Gc : ""),
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
                                        (0, i.jsx)("div", { className: null != t ? b.DD : b.uN, children: l }),
                                        (0, i.jsx)("div", { className: b.rf, children: r }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: a()(b.Bk, { [b.ly]: this.state.problems }),
                            children: [
                                (0, i.jsx)("div", { className: b.u1, children: v.intl.string(v.t.AG2zPM) }),
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsxs)(u.MzZ, {
                                            className: b.AR,
                                            href: x.qF7.TWITTER_SUPPORT,
                                            target: "_blank",
                                            children: [
                                                (0, i.jsx)(u.p3p, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: b.Kk,
                                                }),
                                                v.intl.string(v.t.KlyTbj),
                                            ],
                                        }),
                                        (0, i.jsxs)(u.MzZ, {
                                            className: b.gy,
                                            href: x.qF7.STATUS,
                                            target: "_blank",
                                            children: [(0, i.jsx)(C.A, { className: b.Kk }), v.intl.string(v.t.AgXXyy)],
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
let O = d.Ay.connectStores([_.A, f.A, p.A, h.A], () => ({
    isTryingToConnect: _.A.isTryingToConnect(),
    connected: _.A.isConnected(),
    incident: f.A.getIncident(),
    soundpack: p.A.getSoundpack(),
    reducedMotion: h.A.useReducedMotion,
}))((e) => {
    let { isTryingToConnect: t, connected: n, incident: l, soundpack: r, reducedMotion: a } = e;
    return t ? (0, i.jsx)(y, { reducedMotion: a, soundpack: r, connected: n, incident: l }) : null;
});
