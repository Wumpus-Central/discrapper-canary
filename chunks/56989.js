(n.r(t), n.d(t, { default: () => r_ }));
var i,
    l,
    s,
    r,
    a,
    o,
    c,
    u,
    d = n(477900),
    h = n(582128),
    m = n(492462),
    g = n(562708),
    f = n(607399),
    p = n(470562),
    x = n(17928),
    E = n(830215),
    A = n(869038),
    _ = n(376728),
    j = n(636537),
    N = n(73153),
    v = n(6981),
    C = n(376943),
    I = n(718446),
    T = n(746080),
    S = n(355097),
    y =
        (((i = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (i.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        (i.GUILD_ANALYTICS_SETTING = "guild_analytics_setting"),
        (i.GAME_CLAIM = "game_claim"),
        i);
function b(e) {
    let t = decodeURIComponent(e),
        n = (0, C.vu)(t);
    return null != n && n.channelId === T.VV.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t.toLowerCase() === (0, I.settingsPathToRoute)(S.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)
          ? "role_subscription_setting"
          : void 0;
}
var R = n(115036),
    L = n(174459),
    O = n(272355),
    D = n(652215);
function k(e, t) {
    L.default.track(D.HAw.BROWSER_HANDOFF_SUCCEEDED, { authenticated: e, handoff_source: t });
}
class w extends O.A {
    _initialize() {
        (N.h.subscribe("BROWSER_HANDOFF_END", this.handleEnd),
            N.h.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff));
    }
    _terminate() {
        (N.h.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd),
            N.h.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff));
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: i, handoffSource: l } = e;
        null != n
            ? j.Bo.post({ url: D.Rsh.HANDOFF_EXCHANGE, body: { key: t, handoff_token: n }, rejectWithError: !1 }).then(
                  (e) => {
                      let { body: t } = e;
                      ((0, v.uA)(t.user), E.A.loginToken(t.token, !1), k(!0, l));
                  },
                  (e) => {
                      (null != i && k(!1, l),
                          E.A.setFingerprint(i),
                          (0, v.mZ)(),
                          l === y.ROLE_SUBSCRIPTION &&
                              L.default.track(D.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: e.message ?? e.text,
                                  handoff_source: l,
                              }));
                  },
              )
            : null != i
              ? (E.A.setFingerprint(i), k(!1, l), (0, v.mZ)())
              : (E.A.setFingerprint(i), (0, v.J0)());
    }
    handleEnd = (e) => {
        let { handoffToken: t, fingerprint: n } = e,
            i = R.A.key;
        null != i && R.A.isHandoffAvailable()
            ? this.handleHandoff({ handoffKey: i, handoffToken: t, fingerprint: n, handoffSource: void 0 })
            : (E.A.setFingerprint(null), (0, v.J0)());
    };
}
let G = new w();
var P = n(854378),
    U = n(210714),
    B = n(430690),
    F = n(503698),
    V = n.n(F),
    M = n(834730),
    H = n(821609),
    W = n(181658),
    K = n(625494),
    Q = n(499785),
    z = (((l = {}).START = "start"), (l.PASSWORD = "password"), (l.SUCCESS = "success"), (l.FAILED = "failed"), l),
    X = n(105292),
    q = n(652989),
    Y = n(221851);
function $(e) {
    let { setOriginalEmail: t, setSlide: i, ready: l, token: s } = e,
        [r, a] = h.useState(!1),
        [o, c] = h.useState(null),
        [u, m] = h.useState(null),
        [f, p] = h.useState(""),
        x = h.useRef(null);
    return (
        h.useEffect(() => {
            l && x.current?.focus();
        }, [l]),
        (0, d.jsxs)("div", {
            children: [
                (0, d.jsx)(P._V, { src: null == u ? n(79418) : n(579656), className: V()(Y.SX, Y.Ot) }),
                (0, d.jsx)(P.hE, { children: X.intl.string(X.t.IfBQ56) }),
                null != u && "" !== u
                    ? (0, d.jsx)(M.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: u })
                    : null,
                (0, d.jsxs)(P.eB, {
                    className: V()(Y.SX, Y.QX),
                    children: [
                        (0, d.jsx)(P.pd, {
                            name: "password",
                            type: "password",
                            label: X.intl.string(X.t["8dM4FO"]),
                            setRef: x,
                            className: Y.SX,
                            value: f,
                            onChange: p,
                            error: o,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: X.intl.string(X.t["yY/PXY"]),
                        }),
                        (0, d.jsx)("div", {
                            className: Y.Ot,
                            children: (0, d.jsx)(H.$, {
                                text: X.intl.string(X.t.ezv91b),
                                fullWidth: !0,
                                onClick: function () {
                                    if (!r) {
                                        if (0 === f.length) {
                                            (c(X.intl.string(X.t.R98xD5)), K._.dispatch(D.jej.WAVE_EMPHASIZE));
                                            return;
                                        }
                                        return (
                                            null != u && m(null),
                                            null != o && c(null),
                                            t(""),
                                            a(!0),
                                            Q.A.post({
                                                url: D.Rsh.ACCOUNT_REVERT,
                                                body: { token: s, password: f },
                                                trackedActionData: { event: g.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    (p(""), t(n), i(z.SUCCESS));
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        m(
                                                            X.intl.formatToPlainString(X.t.aTVNes, {
                                                                statusPageURL: D.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new W.A(e);
                                                        t.hasFieldErrors()
                                                            ? c(t.getAnyErrorMessage())
                                                            : m(
                                                                  (function (e) {
                                                                      switch (e) {
                                                                          case D.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                              return X.intl.string(X.t["11zzGR"]);
                                                                          case D.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                              return X.intl.string(X.t["6qmgaI"]);
                                                                          case D.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                              return X.intl.string(X.t.bChnKs);
                                                                          default:
                                                                              return X.intl.format(X.t.aTVNes, {
                                                                                  statusPageURL: D.qF7.STATUS,
                                                                              });
                                                                      }
                                                                  })(t.code).toString(),
                                                              );
                                                    }
                                                    K._.dispatch(D.jej.WAVE_EMPHASIZE);
                                                })
                                                .finally(() => {
                                                    a(!1);
                                                })
                                        );
                                    }
                                },
                                loading: r,
                                disabled: r,
                            }),
                        }),
                    ],
                }),
                (0, d.jsx)("div", {
                    className: q.UD,
                    children: (0, d.jsx)(H.$, {
                        text: X.intl.string(X.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: function () {
                            (p(""), i(z.START));
                        },
                    }),
                }),
            ],
        })
    );
}
var Z = n(825484),
    J = n(749314);
function ee(e) {
    let { children: t } = e;
    return (0, d.jsx)("li", {
        className: q.Aw,
        children: (0, d.jsx)(M.E, { variant: "text-sm/medium", color: "text-default", children: t }),
    });
}
function et(e) {
    let { setSlide: t, transitionTo: i } = e;
    return (0, d.jsxs)("div", {
        children: [
            (0, d.jsx)(P._V, { src: n(79418), className: V()(Y.SX, Y.Ot) }),
            (0, d.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t["8UcxI6"]) }),
            (0, d.jsx)(M.E, { variant: "text-md/normal", children: X.intl.string(X.t.O37hMl) }),
            (0, d.jsxs)(P.eB, {
                className: V()(Y.SX, Y.QX),
                children: [
                    (0, d.jsx)(M.E, { variant: "text-sm/normal" }),
                    (0, d.jsxs)("ul", {
                        className: q.qI,
                        children: [
                            (0, d.jsx)(ee, { children: X.intl.string(X.t.Gj1Zry) }),
                            (0, d.jsx)(J.A, {}),
                            (0, d.jsx)(ee, { children: X.intl.string(X.t["8C6t3B"]) }),
                            (0, d.jsx)(J.A, {}),
                            (0, d.jsx)(ee, { children: X.intl.string(X.t.mToZMA) }),
                            (0, d.jsx)(J.A, {}),
                            (0, d.jsx)(ee, { children: X.intl.string(X.t.TPEvkc) }),
                            (0, d.jsx)(J.A, {}),
                            (0, d.jsx)(ee, { children: X.intl.string(X.t.H8Y1Ln) }),
                        ],
                    }),
                ],
            }),
            (0, d.jsxs)(Z.e, {
                direction: "vertical",
                fullWidth: !0,
                className: q.UD,
                children: [
                    (0, d.jsx)(H.$, { text: X.intl.string(X.t.GgCRqR), onClick: () => t(z.PASSWORD) }),
                    (0, d.jsx)(H.$, {
                        text: X.intl.string(X.t["B/yHcQ"]),
                        variant: "secondary",
                        onClick: () => i(D.BVt.LOGIN, { source: "account_revert" }),
                    }),
                ],
            }),
        ],
    });
}
function en(e) {
    let { email: t } = e;
    return (0, d.jsxs)("div", {
        children: [
            (0, d.jsx)(P._V, { src: n(79418), className: V()(Y.SX, Y.Ot) }),
            (0, d.jsx)(P.hE, { children: X.intl.string(X.t.ailkVG) }),
            (0, d.jsx)(P.tK, { children: X.intl.format(X.t["4ZMVCI"], { email: t }) }),
            (0, d.jsx)(M.E, {
                className: V()(Y.QB, Y.QX),
                variant: "text-md/normal",
                children: X.intl.string(X.t["dpAn+8"]),
            }),
        ],
    });
}
function ei(e) {
    let { transitionTo: t, token: n, width: i } = e,
        [l, s] = h.useState(z.START),
        [r, a] = h.useState(null),
        [o, c] = h.useState(""),
        u = { impression_group: g.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, d.jsx)("div", {
        style: { margin: "8px" },
        children: (0, d.jsxs)(B.t, {
            activeSlide: l,
            width: i,
            onSlideReady: a,
            children: [
                (0, d.jsx)(B.q, {
                    id: z.START,
                    impressionProperties: u,
                    impressionName: g.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, d.jsx)(et, { setSlide: s, transitionTo: t }),
                }),
                (0, d.jsx)(B.q, {
                    id: z.PASSWORD,
                    impressionProperties: u,
                    impressionName: g.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, d.jsx)($, {
                        setOriginalEmail: c,
                        setSlide: s,
                        transitionTo: t,
                        ready: r === z.PASSWORD,
                        token: n,
                    }),
                }),
                (0, d.jsx)(B.q, {
                    id: z.SUCCESS,
                    impressionProperties: u,
                    impressionName: g.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, d.jsx)(en, { email: o }),
                }),
            ],
        }),
    });
}
x.Ay.initialize();
class el extends h.PureComponent {
    componentDidMount() {
        (0, U.d0)("account_revert");
    }
    render() {
        let e = this.props.match.params.token ?? "";
        return (0, d.jsx)(P.Ay, {
            style: { padding: 0 },
            children: (0, d.jsx)(ei, { width: 464, token: e, ...this.props }),
        });
    }
}
var es = n(549711);
function er(e) {
    N.h.dispatch({ type: "AUTH_INVITE_UPDATE", invite: e });
}
(n(323874), n(14289), n(35956));
var ea = n(132500),
    eo = n(941426);
let ec = [window.GLOBAL_ENV.ADS_MANAGER_ENDPOINT].filter(Boolean);
function eu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = new URL(e, t);
    return ("127.0.0.1" === n.hostname && (n.hostname = "localhost"), n.href);
}
function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ec;
    try {
        let { origin: i } = new URL(eu(e, t));
        return n
            .map((e) => eu(e, t))
            .some((e) => {
                let { origin: t } = new URL(e);
                return i === t;
            });
    } catch (e) {
        return (new eo.Vy("Auth").error("Failed to check external redirect", e), !1);
    }
}
async function eh(e) {
    let t = (0, ea.A)();
    try {
        var n;
        let i,
            l,
            s = (await j.Bo.post({ url: D.Rsh.HANDOFF, body: { key: t }, oldFormErrors: !0, rejectWithError: !0 })).body
                .handoff_token,
            r =
                ((n = { urlString: e, handoffKey: t, handoffToken: s }),
                (i = new URL(n.urlString)),
                (l = `handoff_key=${encodeURIComponent(n.handoffKey)}&handoff_token=${encodeURIComponent(n.handoffToken)}`),
                "" !== i.hash ? (i.hash += `&${l}`) : (i.hash = `#${l}`),
                i.href);
        window.location.href = r;
    } catch (t) {
        window.location.href = e;
    }
}
var em = n(123292),
    eg = n(650048),
    ef = n(149790),
    ep = n(396681);
x.Ay.initialize();
class ex extends h.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, guild: null };
    componentDidMount() {
        let e = (0, ep.A)(this.props.location),
            t = (0, m.parse)(this.props.location.search);
        (j.Bo.post({
            url: D.Rsh.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, guild_id: t.guild_id },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { guild: t },
                    } = e,
                    n = (0, ef.dangerouslyConstructGuildRecordFromUntypedObject)(t);
                this.setState({ success: !0, busy: !1, guild: n });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, U.d0)("disable_server_highlight_notifications"));
    }
    renderBusy() {
        return (0, d.jsx)(P.Ay, { children: (0, d.jsx)(P.CK, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.Z33eiP) }),
                (0, d.jsx)(P.tK, { children: X.intl.format(X.t.NRWtfC, { guildName: n.name }) }),
                (0, d.jsx)("div", {
                    className: Y.eT,
                    children: (0, d.jsx)(H.$, { text: X.intl.string(X.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, d.jsx)("div", {
                    className: Y.Ot,
                    children: (0, d.jsx)(em.Q, {
                        text: X.intl.string(X.t["cGmT/J"]),
                        onClick: () => {
                            t(D.BVt.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                        },
                    }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P._V, { src: n(37772), className: Y.SX }),
                (0, d.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.ox9hIS) }),
                (0, d.jsx)(P.tK, { children: X.intl.string(X.t["/dcuR5"]) }),
                (0, d.jsx)("div", {
                    className: Y.eT,
                    children: (0, d.jsx)(H.$, { text: X.intl.string(X.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let eE = x.Ay.connectStores([eg.A], () => ({ defaultRoute: eg.A.defaultRoute }))(ex);
var eA = n(628284),
    e_ = n(557722),
    ej = n(628387),
    eN = n(148864),
    ev = n(354948);
n(53516);
var eC = n(938442);
let eI = ["loopback-network", "local-network-access"];
async function eT() {
    if ("u" < typeof navigator || null == navigator.permissions) return "unknown";
    for (let e of eI)
        try {
            return (await navigator.permissions.query({ name: e })).state;
        } catch {}
    return "unknown";
}
var eS = n(736056),
    ey = n(620233),
    eb = n(122906),
    eR = n(121623),
    eL = n(62617),
    eO = n(31008);
function eD(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s, height: r, className: a, style: o } = e,
        c = h.useMemo(
            () => (0, eL.H)({ width: s, height: r, intrinsicWidth: 288, intrinsicHeight: 162, style: o }),
            [s, r, o],
        );
    return (0, d.jsx)("img", {
        style: c,
        src: eO.A,
        className: (0, eL.Z)(a),
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var ek = n(154672),
    ew = n(331322),
    eG = n(289873),
    eP = n(297264),
    eU = n(47084);
function eB(e) {
    let { title: t, subtitle: n, buttonText: i, image: l, onButtonClick: s, loading: r } = e;
    return (0, d.jsx)(P.Ay, {
        className: eU.kL,
        children: (0, d.jsxs)(ew.B, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, d.jsxs)(ew.B, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, d.jsxs)(ew.B, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != l &&
                                    (0, d.jsx)(ew.B, {
                                        align: "center",
                                        justify: "center",
                                        className: eU.Sl,
                                        children: l,
                                    }),
                                r && (0, d.jsx)(eG.y, { type: eG.y.Type.SPINNING_CIRCLE }),
                                (0, d.jsx)(eP.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, d.jsx)(M.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                className: eU.VA,
                                children: n,
                            }),
                    ],
                }),
                !r && (0, d.jsx)(H.$, { onClick: s, text: i, variant: "overlay-primary" }),
            ],
        }),
    });
}
var eF = n(976860);
let eV = !1,
    eM = null,
    eH = null;
class eW extends x.Ay.Store {
    static displayName = "HubEmailVerificationStore";
    getState() {
        return { verifySuccess: eV, verifyErrors: eM, redirectGuildId: eH };
    }
}
let eK = new eW(N.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        ((eV = !0), (eM = null), (eH = t));
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        ((eV = !1), (eM = t));
    },
});
var eQ = n(284009),
    ez = n.n(eQ),
    eX = n(481613),
    eq = n.n(eX),
    eY = n(400253),
    e$ = n(742821),
    eZ = n(80703),
    eJ = n(280450),
    e0 = n(877062);
x.Ay.initialize();
var e1 = n(21599),
    e2 = n(941143),
    e3 = n(717421),
    e4 = n(661531),
    e8 = n(993077),
    e5 = n(235986),
    e7 = n(408738);
function e9(e) {
    let { text: t, buttonCta: i, onClick: l } = e;
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(P._V, { src: n(431979) }),
            (0, d.jsx)(P.hE, { className: V()(Y.QX, Y.QB, eC.tR), children: X.intl.string(X.t.eL5z0i) }),
            (0, d.jsx)(P.tK, { className: Y.C2, children: X.intl.string(X.t.poAv63) }),
            (0, d.jsxs)(e8.Z, {
                className: e7.Nr,
                type: e8.Z.Types.CUSTOM,
                children: [
                    (0, d.jsx)("img", { alt: "", className: e7.q8, src: n(355912) }),
                    (0, d.jsx)("img", { alt: "", className: e7.dw, src: n(610925) }),
                    (0, d.jsxs)(e5.A, {
                        className: e7.p_,
                        direction: e5.A.Direction.VERTICAL,
                        align: e5.A.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, d.jsx)(M.E, {
                                tag: "strong",
                                className: e7.p8,
                                variant: "text-md/normal",
                                style: { color: e4.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, d.jsx)("div", {
                                className: e7.x6,
                                children: (0, d.jsx)(H.$, { text: i, fullWidth: !0, onClick: l }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e6(e) {
    let { text: t, buttonCta: n, theme: i = D.NJ8.DARK, onClick: l } = e;
    return (0, d.jsx)(P.Ay, { theme: i, children: (0, d.jsx)(e9, { text: t, buttonCta: n, onClick: l }) });
}
var te = n(765671),
    tt = n(71393),
    tn = n(299091),
    ti = n(486020),
    tl = n(403362),
    ts = n(778712),
    tr = n(47167),
    ta = n(769015),
    to = n(714991),
    tc = n(427262),
    tu = n(172799),
    td = n(330936),
    th = n(622625);
function tm(e) {
    let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
    return 0 === t.memberCount ? null : t;
}
function tg(e) {
    return e.target_type === tu.yV.STREAM && null != e.target_user;
}
function tf(e) {
    return e.channel?.type === D.rbe.GROUP_DM;
}
function tp(e) {
    return null == e.channel && null == e.guild && null != e.inviter;
}
function tx(e) {
    return e.state === D.elq.ACCEPTED;
}
function tE(e) {
    let { guild_scheduled_event: t } = e;
    return null != t;
}
function tA(e) {
    let t;
    return !tE(e) && (!!tp(e) || (null != e.inviter && !tx(e) && ((t = tm(e)), !((t?.memberCount ?? 0) > 100))));
}
function t_(e) {
    let { guild: t, user: n, application: i } = e;
    return null != i
        ? (0, d.jsx)(ta.A, { className: th.Z2, game: i, size: th.q6 })
        : null != n
          ? (0, d.jsx)(P.eu, { src: n.getAvatarURL(void 0, 100), size: ts._3.DEPRECATED_SIZE_100, className: th.my })
          : null != t
            ? (0, d.jsx)(P.$v, { guild: t, size: P.$v.Sizes.LARGER, className: th.$f, animate: !0 })
            : null;
}
function tj(e) {
    let { invite: t, textClassName: n, className: i } = e,
        l = tm(t);
    return null == l || tA(t) || t?.guild?.id === td.TA
        ? null
        : (0, d.jsx)(P.R1, {
              className: V()(th.He, i),
              online: l.onlineCount,
              total: l.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function tN(e) {
    let { invite: t, showBigUserIcon: n } = e,
        i = h.useMemo(
            () =>
                n
                    ? null
                    : tg(t) && null != t.target_user
                      ? ti.Ay.getUserAvatarURL(t.target_user)
                      : tA(t) && null != t.inviter
                        ? ti.Ay.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        l = X.intl.string(X.t["3rE1P8"]);
    return (
        tf(t)
            ? (l =
                  t.channel?.name != null && t.inviter?.username != null
                      ? X.intl.format(X.t.Lu4h18, { username: t.inviter.username })
                      : X.intl.string(X.t.OsdY8B))
            : tg(t) && null != t.target_user
              ? (l = X.intl.formatToPlainString(X.t.x2L32Q, { username: t.target_user.username }))
              : tx(t)
                ? (l = X.intl.string(X.t["FDsl+J"]))
                : tA(t) &&
                  null != t.inviter &&
                  (l = X.intl.format(X.t.spU2mI, { username: tc.Ay.getFormattedName(t.inviter) })),
        (0, d.jsxs)("div", {
            className: th.JB,
            children: [
                null != i &&
                    (0, d.jsx)("div", {
                        className: th._t,
                        children: (0, d.jsx)(P.eu, { src: i, size: ts._3.SIZE_24 }),
                    }),
                (0, d.jsx)(P.tK, { className: th.__invalid_inviteJoinSubTitle, children: l }),
            ],
        })
    );
}
function tv(e) {
    let t,
        n,
        i,
        { user: l, guild: s, channel: r, application: a, showBigUserIcon: o } = e,
        c = (0, tr.Ay)(r);
    if (null != s)
        (o && null == a && (t = (0, d.jsx)(P.$v, { guild: s, size: P.$v.Sizes.SMALL })),
            (n = s.name),
            null != a &&
                ((n = a.name),
                (i = (0, d.jsxs)("div", {
                    className: th.JB,
                    children: [
                        (0, d.jsx)(P.tK, { className: th.R9, children: X.intl.string(X.t["3gg9fF"]) }),
                        (0, d.jsxs)("div", {
                            className: th.bo,
                            children: [
                                (0, d.jsx)(P.$v, { guild: s, size: P.$v.Sizes.SMALL }),
                                (0, d.jsx)(eP.D, {
                                    color: "text-strong",
                                    variant: "heading-xl/semibold",
                                    children: s.name,
                                }),
                            ],
                        }),
                    ],
                }))));
    else if (null != r) {
        if (null == l) throw Error("no inviter in group DM invite");
        let e = tc.Ay.getFormattedName(l);
        null != c && "" !== c
            ? ((n = c), null != r.icon && (t = (0, d.jsx)(P.F4, { channel: r, size: ts._3.SIZE_32 })))
            : (n = e);
    } else if (null != l) {
        let e = tc.Ay.getFormattedName(l);
        ((n = X.intl.formatToPlainString(X.t["4aF92R"], { username: e })),
            (i = (0, d.jsx)(P.tK, { className: th.b$, children: X.intl.format(X.t.Quj7HX, { username: e }) })));
    }
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsxs)(P.hE, {
                className: th.DD,
                children: [
                    null != s ? (0, d.jsx)(to.A, { guild: s, className: th.n2, tooltipPosition: "left" }) : null,
                    t,
                    n,
                ],
            }),
            i,
        ],
    });
}
var tC = n(395671),
    tI = n(95701),
    tT = n(889227),
    tS = n(945810);
let ty = (0, tS.mj)({
    name: "2026-09-silp-cta-copy-tests",
    kind: "user",
    defaultConfig: { variant: null },
    variations: { 1: { variant: "clarity" }, 2: { variant: "clarity_softer" }, 3: { variant: "low_commitment" } },
});
function tb(e) {
    return null != e && null != e.guild && (null == e.type || e.type === tu.Xd.GUILD);
}
function tR(e) {
    return ty.useConfig({ location: e }).variant;
}
function tL(e) {
    switch (e) {
        case "clarity":
            return X.intl.string(X.t.OqHiIt);
        case "clarity_softer":
            return X.intl.string(X.t["1RFJ5Q"]);
        case "low_commitment":
            return X.intl.string(X.t.JMWqry);
        default:
            return X.intl.string(X.t.ohMvm1);
    }
}
var tO = n(548118),
    tD = n(557582),
    tk = n(167630),
    tw = n(424547);
function tG(e) {
    let { guildScheduledEvent: t, channel: n, onAcceptInvite: i, isSubmitting: l } = e;
    return (0, d.jsxs)("div", {
        className: tw.s4,
        children: [
            (0, d.jsx)(tD.Ay, {
                name: t.name,
                description: t.description ?? void 0,
                headerVariant: "heading-md/medium",
                descriptionClassName: tw.__invalid_channelDescription,
                guildId: t.guild_id,
                guildEvent: t,
                eventPreview: t,
            }),
            null != n &&
                (0, d.jsx)("div", {
                    className: tw.yW,
                    children: (0, d.jsx)(tk.A, { guildScheduledEvent: t, channel: n }),
                }),
            (0, d.jsx)("div", {
                className: tw.xG,
                children: (0, d.jsx)(H.$, {
                    variant: "active",
                    size: "md",
                    text: X.intl.string(X.t.riu2R5),
                    onClick: i,
                    loading: l,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
function tP(e) {
    let { invite: t } = e,
        n = null != t.guild ? (0, ef.DY)(t.guild) : null;
    if (null == n) return null;
    let i = n.description ?? "";
    return (0, d.jsxs)("div", {
        className: tw.kQ,
        children: [
            (0, d.jsx)(eP.D, { className: tw.s7, variant: "text-sm/medium", children: X.intl.string(X.t.Eabu1z) }),
            (0, d.jsxs)("div", {
                className: tw.bo,
                children: [
                    (0, d.jsx)(tO.Ay, { guild: n, active: !0, size: tO.Ay.Sizes.MEDIUM }),
                    (0, d.jsxs)("div", {
                        className: tw.bW,
                        children: [
                            (0, d.jsxs)(M.E, {
                                className: tw.J5,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, d.jsx)(to.A, { guild: n, className: tw.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, d.jsx)(tj, { invite: t, textClassName: tw.kS, className: tw.pe }),
                        ],
                    }),
                ],
            }),
            i.length > 0 &&
                (0, d.jsx)("details", {
                    className: tw.x_,
                    children: (0, d.jsx)(M.E, { color: "text-default", variant: "text-sm/normal", children: i }),
                }),
        ],
    });
}
function tU(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: l } = e,
        { guild_scheduled_event: s } = t;
    return null != s
        ? (0, d.jsx)(tG, { guildScheduledEvent: s, channel: n, isSubmitting: i, onAcceptInvite: l })
        : null;
}
var tB = n(578564);
function tF(e) {
    let { text: t, onClick: n, loading: i } = e;
    return (0, d.jsx)(H.$, { variant: "primary", size: "md", text: t, onClick: n, loading: i, fullWidth: !0 });
}
function tV(e) {
    let t = tR("InviteAcceptMobile");
    return (0, d.jsx)(tF, { ...e, text: tL(t) });
}
function tM(e) {
    let { invite: t, onAcceptInvite: n, disableUser: i = !1 } = e;
    if (null == t) return null;
    let l = null != t.guild ? (0, ef.DY)(t.guild) : null,
        s = null != t.channel ? (0, tI.OY)(t.channel) : null,
        r = null != t.target_application ? new tC.Ay(t.target_application) : null,
        a = i || null == t.inviter ? null : new tT.A(t.inviter),
        o =
            !(
                (null != t.approximate_member_count && t.approximate_member_count > 100) ||
                (null != l && l.features.has(D.GuildFeatures.COMMUNITY))
            ) &&
            null != a &&
            tf(t),
        c = (function (e) {
            let { state: t } = e;
            switch (t) {
                case D.elq.ACCEPTING:
                case D.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        u = { invite: t, user: a, guild: l, channel: s, application: r };
    return tE(t)
        ? (0, d.jsx)(tU, { invite: t, channel: s, isSubmitting: c, onAcceptInvite: n })
        : (0, d.jsxs)("div", {
              className: tB.kL,
              children: [
                  (0, d.jsx)(t_, { application: r, guild: l, user: o || tp(t) ? a : null }),
                  tp(t) ? null : (0, d.jsx)(tN, { ...u, showBigUserIcon: o }),
                  (0, d.jsx)(tv, { ...u, showBigUserIcon: o }),
                  (0, d.jsx)(tj, { ...u }),
                  (0, d.jsx)("div", {
                      className: tB.xG,
                      children: tb(t)
                          ? (0, d.jsx)(tV, { onClick: n, loading: c })
                          : (0, d.jsx)(tF, { text: tL(null), onClick: n, loading: c }),
                  }),
              ],
          });
}
var tH = n(43990),
    tW = n(241524),
    tK = n(573435),
    tQ = n(260509),
    tz = n(370953);
function tX(e) {
    let { guild: t, outline: n } = e,
        i = (0, tW.A)("(max-width: 600px), (max-height: 600px)") ? tO.DN.LARGER : tO.DN.XLARGE,
        l = tO.iu[i],
        s = tO.s[i],
        r = h.useMemo(() => ti.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: l }), [t.icon, t.id, l]),
        a = (0, tQ.Rb)(t),
        o =
            null != r
                ? (0, d.jsx)("img", { src: r, alt: "", className: tz.OV })
                : (0, d.jsx)("div", {
                      className: tz.ef,
                      style: { fontSize: s[a.length] ?? s[s.length - 1] },
                      children: a,
                  });
    return n
        ? (0, d.jsx)("div", {
              className: V()(tz._C, tz.AY),
              children: (0, d.jsx)(tK.Ay, {
                  mask: tK.Ay.Masks.SQUIRCLE,
                  width: l + 8,
                  height: l + 8,
                  children: (0, d.jsx)("div", {
                      className: tz.$d,
                      children: (0, d.jsx)(tK.Ay, { mask: tK.Ay.Masks.SQUIRCLE, width: l, height: l, children: o }),
                  }),
              }),
          })
        : (0, d.jsx)("div", {
              className: tz._C,
              children: (0, d.jsx)(tK.Ay, { mask: tK.Ay.Masks.SQUIRCLE, width: l, height: l, children: o }),
          });
}
var tq = n(927813);
let tY = /\.$/;
function t$(e) {
    return Array.isArray(e)
        ? e
              .map((e) => e.replace(tY, ""))
              .join(". ")
              .trim()
        : e;
}
function tZ(e) {
    let [t, n] = h.useState(() => null != e && !e),
        [i, l] = h.useState(e);
    return (null == i && null != e ? (l(e), n(!e)) : i !== e && l(e), [t, n]);
}
function tJ() {
    let [e, t] = h.useState(!1),
        n = h.useRef(null);
    return (
        h.useEffect(
            () => () => {
                null != n.current && clearTimeout(n.current);
            },
            [],
        ),
        [
            e,
            h.useCallback((e) => {
                (null != n.current && clearTimeout(n.current),
                    t(!0),
                    (n.current = setTimeout(() => {
                        (t(!1), (n.current = null));
                    }, e * tq.A.Millis.SECOND)));
            }, []),
        ]
    );
}
var t0 = n(153488),
    t1 = n(4274),
    t2 = n(95477),
    t3 = n(866665),
    t4 = n(913122),
    t8 = n(934337),
    t5 = n(15552),
    t7 = n(536637),
    t9 = n.n(t7),
    t6 = n(955437),
    ne = n(888548),
    nt = n(831167);
n(861807);
var nn = n(569717),
    ni = n(204925);
function nl(e) {
    let {
        email: t,
        phoneToken: n,
        username: i,
        globalName: l,
        consent: s,
        password: r,
        guildTemplateCode: a,
        birthday: o,
        invite: c = null,
        giftCodeSKUId: u = null,
        promoEmailConsent: d = null,
        usedUsernameSuggestion: h = null,
    } = e;
    if ((N.h.dispatch({ type: "REGISTER" }), null != o)) {
        let e;
        ((0, nn.A)(o, D.JJy.REGISTER),
            L.default.track(D.HAw.AGE_GATE_ACTION, { source: ni.w_.REGISTER, action: ni.AM.AGE_GATE_SUBMITTED }),
            (e = t9()().diff(o, "years")) < 13 ||
                L.default.track(D.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                }));
    }
    return Q.A.post({
        url: D.Rsh.REGISTER,
        body: {
            fingerprint: eJ.default.getFingerprint(),
            email: t,
            username: i,
            global_name: l,
            password: r,
            invite: c,
            consent: s,
            phone_token: n,
            date_of_birth: null != o ? (0, nt.A)(o) : void 0,
            gift_code_sku_id: u,
            guild_template_code: a,
            promotional_email_opt_in: d?.checked,
        },
        trackedActionData: {
            event: g.NetworkActionNames.USER_REGISTER,
            properties: {
                invite_code: c,
                used_username_suggestion: h,
                promotional_email_opt_in: d?.checked,
                promotional_email_pre_checked: d?.preChecked,
                was_unique_username: !0,
            },
        },
        rejectWithError: !1,
    }).then(
        (e) => (
            N.h.dispatch({ type: "REGISTER_SUCCESS", token: e.body.token }),
            N.h.dispatch({
                type: "GUARDIAN_CONNECT_REQUIRED",
                shouldShowGuardianConnect: !0 === e.body.show_guardian_connect,
            }),
            L.default.track(D.HAw.AGE_GATE_ACTION, { source: ni.w_.REGISTER, action: ni.AM.AGE_GATE_SUCCESS }),
            e.body
        ),
        (e) => {
            if (e instanceof ne.CaptchaCancelError) throw e;
            let t = new W.A(e);
            throw (
                null != t.getFieldErrors("date_of_birth") && t6.Xv(ni.w_.REGISTER),
                L.default.track(D.HAw.REGISTER_SUBMIT_ERRORED, {
                    is_unique_username_registration: !0,
                    email_error_reason: t.getFirstFieldErrorMessage("email"),
                    phone_error_reason: t.getFirstFieldErrorMessage("phone_token"),
                    password_error_reason: t.getFirstFieldErrorMessage("password"),
                    username_error_reason: t.getFirstFieldErrorMessage("username"),
                    global_name_error_reason: t.getFirstFieldErrorMessage("global_name"),
                    date_of_birth_error_reason: t.getFirstFieldErrorMessage("date_of_birth"),
                    promotional_email_opt_in_error_reason: t.getFirstFieldErrorMessage("promotional_email_opt_in"),
                    fingerprint_error_reason: t.getFirstFieldErrorMessage("fingerprint"),
                    invite_error_reason: t.getFirstFieldErrorMessage("invite"),
                    gift_code_sku_id_error_reason: t.getFirstFieldErrorMessage("gift_code_sku_id"),
                    guild_template_code_error_reason: t.getFirstFieldErrorMessage("guild_template_code"),
                    consent_error_reason: t.getFirstFieldErrorMessage("consent"),
                    generic_error_reason: t.getAnyErrorMessage(),
                }),
                t
            );
        },
    );
}
var ns = n(568385),
    nr = n(975639);
function na(e) {
    let { consent: t, consentRequired: n, onConsentChange: i } = e;
    return n
        ? (0, d.jsx)("div", {
              className: nr.IQ,
              children: (0, d.jsx)(ns.J, {
                  label: X.intl.format(X.t.qMDAP0, { termsURL: D.X7G.TERMS, privacyURL: D.X7G.PRIVACY }),
                  checked: t,
                  onChange: i,
                  labelType: "secondary",
              }),
          })
        : (0, d.jsx)(M.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: V()(Y.Ot, nr.E2),
              children: X.intl.format(X.t["KI+BSb"], { termsURL: D.X7G.TERMS, privacyURL: D.X7G.PRIVACY }),
          });
}
let no = (0, tS.mj)({
    kind: "installation",
    name: "2026-09-registration-email-opt-in-copy",
    defaultConfig: { trackingCopy: !1 },
    variations: { 1: { trackingCopy: !0 } },
});
function nc() {
    let { required: e, checked: t } = (0, t8.mZ)(),
        n = (function (e, t) {
            let { trackingCopy: n } = no.useConfig({ location: t });
            return X.intl.string(n ? X.t.LSoXK5 : e);
        })(X.t["0p3R0+"], "REGISTER_PROMO_EMAIL_CHECKBOX_WEB");
    return e
        ? (0, d.jsx)("div", {
              className: Y.Ot,
              children: (0, d.jsx)(ns.J, { label: n, checked: t, onChange: t8.Bw, labelType: "secondary" }),
          })
        : null;
}
var nu = n(942614),
    nd = n(771016),
    nh = n(890251);
function nm(e) {
    let {
            invite: t,
            username: n,
            parsedDateOfBirth: i,
            email: l,
            password: s,
            consent: r,
            consentRequired: a,
            apiErrors: o,
            onEmailChange: c,
            onPasswordChange: u,
            onConsentChange: m,
            onApiErrors: g,
            onOpenApp: f,
            onRegister: p,
        } = e,
        [x, E] = h.useState(!1),
        [A, _] = tJ(),
        j = null != a && r,
        N = h.useRef(null),
        v = h.useRef(null);
    function C(e) {
        L.default.track(D.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function I(e) {
        L.default.track(D.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    h.useEffect(() => {
        N.current?.focus();
    }, []);
    let T = l.length > 0 && s.length > 0,
        S = h.useCallback(async () => {
            let e = t8.mZ.getState();
            (E(!0), g({}));
            try {
                let a = await nl({
                    email: l,
                    username: n,
                    consent: r,
                    password: s,
                    invite: t.code,
                    birthday: i,
                    promoEmailConsent: e.required ? e : null,
                });
                (a?.invite_join_deferred_code != null && (0, nu.C)(nd.zY.INVITE_UNCLAIMED),
                    p(a?.invite_join_deferred_code));
            } catch (t) {
                if ((E(!1), !(t instanceof t4.LG))) return;
                let e = (0, t5.W)(t);
                (g(e),
                    null != e.email || null != e.phone ? N.current?.focus() : null != e.password && v.current?.focus(),
                    "number" == typeof e.retry_after && _(e.retry_after));
            }
        }, [t, l, n, s, i, r, g, p, _]),
        y = h.useCallback(
            (e) => {
                (e.preventDefault(), null != a && T && S());
            },
            [a, T, S],
        ),
        { message: b } = o;
    return (0, d.jsxs)("form", {
        onSubmit: y,
        children: [
            (0, d.jsx)("div", {
                className: Y.SX,
                children: (0, d.jsx)(t2.k, {
                    label: X.intl.string(X.t.dI4d4S),
                    name: "email",
                    value: l,
                    onChange: c,
                    error: t$(o.email),
                    type: "email",
                    autoComplete: "username",
                    inputRef: N,
                    onFocus: () => C("email"),
                    onBlur: () => I("email"),
                }),
            }),
            (0, d.jsx)(t2.k, {
                label: X.intl.string(X.t["CIGa+7"]),
                name: "password",
                value: s,
                onChange: u,
                error: t$(o.password),
                type: "password",
                autoComplete: "new-password",
                inputRef: v,
                onFocus: () => C("password"),
                onBlur: () => I("password"),
            }),
            (0, d.jsx)(nc, {}),
            (0, d.jsx)(na, { consent: r, consentRequired: a, onConsentChange: m }),
            (0, d.jsx)(t3.m, {
                text: !r && a ? X.intl.string(X.t.AY4IVA) : null,
                children: (0, d.jsx)("div", {
                    className: Y.QX,
                    children: (0, d.jsx)(H.$, {
                        text: X.intl.string(X.t["825cFy"]),
                        variant: "primary",
                        fullWidth: !0,
                        type: "submit",
                        loading: x,
                        disabled: !j || A || !T,
                    }),
                }),
            }),
            "string" == typeof b ? (0, d.jsx)(P.ME, { className: V()(Y.QX, nr.gJ), children: b }) : null,
            (0, d.jsx)("div", {
                className: nh.o3,
                children: (0, d.jsx)(em.Q, {
                    text: X.intl.string(X.t.renMUD),
                    textVariant: "text-sm/normal",
                    onClick: f,
                }),
            }),
        ],
    });
}
function ng(e) {
    let { guild: t } = e,
        n =
            ti.Ay.getGuildBannerURL(t) ??
            (null != t.splash ? ti.Ay.getGuildSplashURL({ id: t.id, splash: t.splash, size: 640 }) : null);
    return (0, d.jsx)("div", { className: nh.ZK, style: null != n ? { backgroundImage: `url(${n})` } : void 0 });
}
function nf(e) {
    let { invite: t, kicker: n } = e,
        i = null != t.guild ? (0, ef.DY)(t.guild) : null;
    return null == i
        ? null
        : (0, d.jsxs)("header", {
              children: [
                  (0, d.jsx)(ng, { guild: i }),
                  (0, d.jsxs)("div", {
                      className: nh.lu,
                      children: [
                          (0, d.jsx)("div", { className: nh.LJ, children: (0, d.jsx)(tX, { guild: i, outline: !0 }) }),
                          (0, d.jsx)(M.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: n ?? X.intl.string(X.t["3rE1P8"]),
                          }),
                          (0, d.jsxs)("div", {
                              className: nh.G1,
                              children: [
                                  (0, d.jsx)(eP.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: nh.qd,
                                      children: i.name,
                                  }),
                                  (0, d.jsx)(to.A, { guild: i, tooltipPosition: "left" }),
                              ],
                          }),
                          (0, d.jsx)(tj, { invite: t }),
                      ],
                  }),
                  (0, d.jsx)("div", { className: nh.yF }),
              ],
          });
}
var np = n(201505);
n(801541);
var nx = n(889137),
    nE = n(546727),
    nA = n(5052),
    n_ = n(446837);
let nj = window.ResizeObserver ?? n_.t;
function nN(e) {
    let { show: t, children: n, top: i = 0, bottom: l = 0 } = e,
        { ref: s, height: r } = (function () {
            let e = h.useRef(null),
                [t, n] = h.useState(0),
                i = h.useMemo(
                    () =>
                        new nj((e) => {
                            let [t] = e;
                            return n(t.contentRect.height);
                        }),
                    [],
                );
            return (
                h.useLayoutEffect(() => (null != e.current && i.observe(e.current), () => i.disconnect()), [i]),
                { ref: e, height: t }
            );
        })(),
        a = (0, e3.z)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: { height: t ? r : 0, paddingBottom: t ? `${l}px` : "0px", marginTop: t ? `${i}px` : "0px" },
            config: { tension: 170, friction: 26 },
        }),
        o = (0, e3.z)({
            from: { opacity: 0 },
            to: { opacity: +!!t },
            config: {
                duration: 200,
                easing: t
                    ? function (e) {
                          return e ** 4;
                      }
                    : function (e) {
                          return e * (2 - e);
                      },
            },
        });
    return (0, d.jsx)(e2.animated.div, {
        style: { overflow: "hidden", height: a.height, paddingBottom: a.paddingBottom, marginTop: a.marginTop },
        children: (0, d.jsx)(e2.animated.div, { style: { opacity: o.opacity }, ref: s, children: n }),
    });
}
function nv(e) {
    let t,
        { username: n, suggestion: i, globalName: l, isUsernameFocused: s, onClickSuggestion: r } = e,
        a = (0, nA.i)(n, !0, !0),
        o = n.length > 0;
    return (
        (t = o
            ? (0, nx.YW)(a)
                  .with({ type: nE.q.ERROR, message: nx.P.select() }, (e) =>
                      (0, d.jsx)(M.E, { className: nr.vU, variant: "text-sm/normal", children: e }),
                  )
                  .with({ type: nE.q.AVAILABLE, message: nx.P.select() }, (e) =>
                      (0, d.jsx)(M.E, { className: nr.vq, variant: "text-sm/normal", children: e }),
                  )
                  .otherwise(() =>
                      (0, d.jsx)(M.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: X.intl.string(X.t.z7c4bP),
                      }),
                  )
            : null != i && i.length > 0 && l.length > 0
              ? (0, d.jsx)(M.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: X.intl.format(X.t.nDGqqq, { suggestion: i, nameOnClick: r }),
                })
              : (0, d.jsx)(M.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: X.intl.string(X.t.z7c4bP),
                })),
        (0, d.jsx)(nN, { show: (o && a?.type === nE.q.ERROR) || s, top: -12, bottom: 20, children: t })
    );
}
function nC(e) {
    let {
            username: t,
            parsedDateOfBirth: n,
            apiErrors: i,
            onUsernameChange: l,
            onDateOfBirthChange: s,
            onNext: r,
            onOpenApp: a,
        } = e,
        [o, c] = h.useState(!1),
        u = h.useRef(null);
    function m(e) {
        L.default.track(D.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function g(e) {
        L.default.track(D.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    h.useEffect(() => {
        null != i.username && u.current?.focus();
    }, []);
    let f = t.length > 0 && null != n;
    return (0, d.jsxs)("form", {
        onSubmit: function (e) {
            (e.preventDefault(), f && r());
        },
        children: [
            (0, d.jsxs)("div", {
                onBlur: () => c(!1),
                onFocus: () => c(!0),
                tabIndex: -1,
                children: [
                    (0, d.jsx)("div", {
                        className: Y.SX,
                        children: (0, d.jsx)(t2.k, {
                            label: X.intl.string(X.t.TWzdWj),
                            name: "username",
                            value: t,
                            onChange: (e) => l(e.toLocaleLowerCase()),
                            error: t$(i.username),
                            autoComplete: "off",
                            inputRef: u,
                            onFocus: () => m("username"),
                            onBlur: () => g("username"),
                        }),
                    }),
                    (0, d.jsx)(nv, {
                        username: t,
                        suggestion: null,
                        globalName: "",
                        isUsernameFocused: o,
                        onClickSuggestion: () => {},
                    }),
                ],
            }),
            (0, d.jsx)(np.A, {
                label: X.intl.string(X.t.rhBeKe),
                name: "date_of_birth",
                onChange: s,
                error: t$(i.date_of_birth),
                value: n,
                onFocus: m,
                onBlur: g,
            }),
            (0, d.jsx)("div", {
                className: Y.QX,
                children: (0, d.jsx)(H.$, {
                    text: X.intl.string(X.t.PDTjLN),
                    variant: "primary",
                    fullWidth: !0,
                    type: "submit",
                    disabled: !f,
                }),
            }),
            (0, d.jsx)("div", {
                className: nh.o3,
                children: (0, d.jsx)(em.Q, {
                    text: X.intl.string(X.t.renMUD),
                    textVariant: "text-sm/normal",
                    onClick: a,
                }),
            }),
        ],
    });
}
function nI(e) {
    let { invite: t, onOpenApp: n, deferredJoinErrorCode: i } = e,
        l = null != t.guild ? (0, ef.DY)(t.guild) : null;
    if (null == l) return null;
    let s = null != i ? (0, t1.g)(i) : null;
    return (0, d.jsxs)(d.Fragment, {
        children: [
            null != l ? (0, d.jsx)(ng, { guild: l }) : null,
            (0, d.jsxs)("div", {
                className: nh.zY,
                children: [
                    (0, d.jsxs)("div", {
                        className: nh.rL,
                        children: [
                            (0, d.jsx)(tX, { guild: l }),
                            (0, d.jsx)(eP.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                className: nh.Rw,
                                children: s?.title ?? X.intl.format(X.t["33M5bg"], { guildName: l?.name ?? "" }),
                            }),
                            (0, d.jsx)(M.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: nh.Ap,
                                children: s?.description ?? X.intl.string(X.t["7N4JkE"]),
                            }),
                            (0, d.jsx)("div", {
                                className: nh.S7,
                                children: (0, d.jsx)(H.$, {
                                    variant: "primary",
                                    size: "md",
                                    text: X.intl.string(X.t["n+VrqG"]),
                                    onClick: n,
                                }),
                            }),
                        ],
                    }),
                    (0, d.jsx)("div", {
                        className: nh.NG,
                        children: (0, d.jsx)("img", {
                            alt: "",
                            src: "https://cdn.discordapp.com/assets/content/55b848b6c57bf51009a1bdaa4465a9e8d79026b8b92889b0ea90a00475f19257.webp",
                        }),
                    }),
                ],
            }),
        ],
    });
}
function nT(e) {
    let { invite: t, onOpenApp: n, onOpenAppAfterRegistration: i } = e,
        [l, s] = h.useState(0),
        [r, a] = h.useState(""),
        [o, c] = h.useState(null),
        [u, m] = h.useState(""),
        [g, f] = h.useState(""),
        [p, A] = h.useState({}),
        _ = (0, x.bG)([t0.A], () => t0.A.getAuthenticationConsentRequired()),
        [j, N] = tZ(_),
        [v, C] = h.useState(!1),
        [I, T] = h.useState(null),
        S = h.useRef(null);
    function y(e) {
        (s(e), S.current?.scrollTo(0, 0));
    }
    function b(e) {
        (A(e), (null != e.username || null != e.date_of_birth) && y(0));
    }
    function R(e) {
        A((t) => {
            if (null == t[e]) return t;
            let n = { ...t };
            return (delete n[e], n);
        });
    }
    function L(e) {
        (a(e), R("username"));
    }
    function O(e) {
        let t = e === o || (null != e && null != o && e.isSame(o, "day"));
        (c(e), t || R("date_of_birth"));
    }
    function k(e) {
        (m(e), R("email"));
    }
    function w(e) {
        (f(e), R("password"));
    }
    return (
        h.useEffect(() => {
            E.A.getLocationMetadata();
        }, []),
        (0, d.jsx)(tH.N, {
            theme: D.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, d.jsx)("div", {
                    ref: S,
                    "data-theme": D.NJ8.DARK,
                    className: V()(nh.MY, e),
                    children: v
                        ? (0, d.jsx)(nI, { invite: t, onOpenApp: i, deferredJoinErrorCode: I })
                        : (0, d.jsxs)(d.Fragment, {
                              children: [
                                  (0, d.jsx)(nf, { invite: t, kicker: 1 === l ? X.intl.string(X.t.dzGILG) : void 0 }),
                                  (0, d.jsx)("div", {
                                      className: nh.rf,
                                      children:
                                          0 === l
                                              ? (0, d.jsx)(nC, {
                                                    username: r,
                                                    parsedDateOfBirth: o,
                                                    apiErrors: p,
                                                    onUsernameChange: L,
                                                    onDateOfBirthChange: O,
                                                    onNext: () => y(1),
                                                    onOpenApp: n,
                                                })
                                              : (0, d.jsx)(nm, {
                                                    invite: t,
                                                    username: r,
                                                    parsedDateOfBirth: o,
                                                    email: u,
                                                    password: g,
                                                    consent: j,
                                                    consentRequired: _,
                                                    apiErrors: p,
                                                    onEmailChange: k,
                                                    onPasswordChange: w,
                                                    onConsentChange: N,
                                                    onApiErrors: b,
                                                    onOpenApp: n,
                                                    onRegister: (e) => {
                                                        (T(e ?? null), C(!0));
                                                    },
                                                }),
                                  }),
                              ],
                          }),
                }),
        })
    );
}
var nS = n(127982);
function ny(e, t, n, i) {
    (e?.preventDefault(),
        L.default.track(
            D.HAw.INVITE_APP_OPENED,
            {
                invite_code: (0, e1.m0)(t),
                guild_id: n?.guild?.id,
                channel_id: n?.channel?.id,
                inviter_id: n?.inviter?.id,
                invite_type: null != n && n?.type != null ? tu.Xd[n?.type] : void 0,
                user_is_member: null != n && null != n.guild && null != tt.A.getGuild(n.guild.id),
                size_total: n?.approximate_member_count,
                time_to_click_ms: Math.round(performance.now()),
            },
            { flush: !0 },
        ));
    let l = null != n && n.state !== D.elq.EXPIRED && n.state !== D.elq.BANNED ? t : void 0,
        s = eJ.default.getFingerprint(),
        r = null != s ? s : eJ.default.getId(),
        a = null != n && n?.type != null ? Number(n?.type) : void 0;
    _.Ay.openApp(l, void 0, r, void 0, { inviteType: a, didRegister: i?.didRegister });
}
function nb() {
    return (0, d.jsx)("div", { className: nS.$k, children: (0, d.jsx)(eG.y, {}) });
}
function nR(e) {
    let t = e?.state == null && e?.channel == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case D.elq.RESOLVED:
        case D.elq.ACCEPTED:
        case D.elq.APP_NOT_OPENED:
        case D.elq.APP_OPENED:
        case D.elq.ACCEPTING:
        case D.elq.APP_OPENING:
            return 1;
        case D.elq.EXPIRED:
        case D.elq.BANNED:
        case D.elq.ERROR:
            return 2;
        case D.elq.RESOLVING:
            return 0;
        default:
            (0, tl.xb)(n);
    }
}
function nL(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === D.elq.BANNED
        ? (0, d.jsx)(e9, { text: X.intl.string(X.t["5AkWAd"]), buttonCta: X.intl.string(X.t["8osdkn"]), onClick: n })
        : (0, d.jsx)(e9, { text: X.intl.string(X.t["usP+Mb"]), buttonCta: X.intl.string(X.t["8osdkn"]), onClick: n });
}
function nO(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: i, sectionClassName: l, inviteCardClassName: s = nS.qF } = e,
        { ref: r, height: a } = (0, te.Ay)(),
        o = (0, e3.z)({ height: null != a && 0 !== a ? `${a}px` : `${i}px`, config: e2.config.stiff });
    return (0, d.jsxs)(e2.animated.div, {
        className: s,
        style: o,
        children: [
            (0, d.jsx)(e2.animated.div, {
                className: nS.NS,
                style: o,
                children: (0, d.jsx)("section", { ref: r, className: l, children: t }),
            }),
            n,
        ],
    });
}
function nD(e) {
    let { invite: t } = e;
    if (null == t || !tE(t)) return null;
    let n = nR(t);
    return (0, d.jsx)(nO, {
        startAnimHeightPx: 0,
        sectionClassName: nS.ui,
        children: 1 === n ? (0, d.jsx)(tP, { invite: t }) : null,
    });
}
let nk = { 1: nS._r, 2: nS.Gm, 0: nS.Kt };
function nw(e) {
    let t,
        { invite: n } = e,
        i = nR(n),
        l = h.useRef(!1);
    if (
        (h.useEffect(() => {
            l.current ||
                (null != n &&
                    1 === i &&
                    ((l.current = !0),
                    L.default.track(D.HAw.INVITE_ACCEPT_BUTTON_RENDERED, {
                        invite_code: n.code,
                        guild_id: n.guild?.id,
                        duration_ms_since_page_load: Math.round(performance.now()),
                    })));
        }, [n, i]),
        null == n)
    )
        t = (0, d.jsx)(nb, {});
    else
        switch (i) {
            case 1:
                t = (0, d.jsx)(tM, { ...e, invite: n });
                break;
            case 2:
                t = (0, d.jsx)(nL, { ...e, invite: n });
                break;
            default:
                t = (0, d.jsx)(nb, {});
        }
    return (0, d.jsx)(nO, { startAnimHeightPx: 200, sectionClassName: nk[i], inviteCardClassName: nS.qF, children: t });
}
function nG(e) {
    let { invite: t } = e,
        [n, i] = h.useState(null);
    return (h.useLayoutEffect(() => {
        let e;
        null == n &&
            null != t &&
            1 === nR(t) &&
            i(
                ((e = t.guild_experiments?.["2026-08-mweb-invite-registration"]),
                e?.variation === 1 && !eJ.default.isAuthenticated() && null != t.guild && null == t.target_application),
            );
    }, [t, n]),
    !0 === n)
        ? (0, d.jsx)(nT, {
              invite: t,
              onOpenApp: e.onAcceptInvite,
              onOpenAppAfterRegistration: e.onOpenAppAfterRegistration,
          })
        : (0, d.jsx)(nP, { ...e });
}
function nP(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = t ?? {},
        l = {};
    if (i?.splash != null) {
        let e = ti.Ay.getGuildSplashURL({ id: i.id, splash: i.splash });
        null != e && ((l.backgroundImage = `url(${e})`), (l.backgroundSize = "cover"));
    }
    return (0, d.jsxs)(P.Ay, {
        theme: D.NJ8.DARK,
        className: nS.G3,
        style: l,
        contentClassName: nS.__,
        children: [(0, d.jsx)(nw, { ...e, onAcceptInvite: n }), (0, d.jsx)(nD, { ...e })],
    });
}
var nU = n(723702);
function nB(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s, height: r, className: a, style: o } = e,
        c = h.useMemo(
            () => (0, eL.H)({ width: s, height: r, intrinsicWidth: 288, intrinsicHeight: 192, style: o }),
            [s, r, o],
        );
    return (0, d.jsx)("img", {
        style: c,
        src: "https://cdn.discordapp.com/assets/content/575199861cc3c18cdeb6745807591de54ce1ce9ddad5bae636a5737664545aa0.svg",
        className: (0, eL.Z)(a),
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var nF = n(474545),
    nV = n(604880);
function nM(e) {
    let { token: t, hasError: n, errorReason: i } = e;
    return n
        ? (0, d.jsxs)("div", {
              className: nF.MY,
              children: [
                  (0, d.jsx)("div", { className: nF.r$, children: (0, d.jsx)("img", { src: nV, alt: "" }) }),
                  (0, d.jsxs)("div", {
                      className: nF.Qs,
                      children: [
                          (0, d.jsx)(nB, { alt: "" }),
                          (0, d.jsx)(eP.D, {
                              variant: "heading-lg/semibold",
                              className: nF.ky,
                              children: X.intl.string(X.t.RtCSr1),
                          }),
                          (0, d.jsx)(M.E, {
                              variant: "text-md/normal",
                              className: nF.G3,
                              children: X.intl.string(X.t["S+YjYJ"]),
                          }),
                          (0, d.jsx)(H.$, {
                              variant: "primary",
                              text: X.intl.string(X.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  (L.default.track(D.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: i }),
                                      (0, eF.pX)(D.BVt.LOGIN));
                              },
                          }),
                      ],
                  }),
              ],
          })
        : (0, d.jsxs)("div", {
              className: nF.MY,
              children: [
                  (0, d.jsx)("div", { className: nF.r$, children: (0, d.jsx)("img", { src: nV, alt: "" }) }),
                  (0, d.jsxs)("div", {
                      className: nF.Qs,
                      children: [
                          (0, d.jsx)(nB, { alt: "" }),
                          (0, d.jsx)(eP.D, {
                              variant: "heading-lg/semibold",
                              className: nF.ky,
                              children: X.intl.string(X.t["9h/0Rl"]),
                          }),
                          (0, d.jsx)(M.E, {
                              variant: "text-md/normal",
                              className: nF.G3,
                              children: X.intl.string(X.t.Wgm7Om),
                          }),
                          (0, d.jsx)(H.$, {
                              variant: "primary",
                              text: X.intl.string(X.t.NydsTd),
                              fullWidth: !0,
                              onClick: () => {
                                  let e, n;
                                  ((e = (function (e) {
                                      let t = platform.os?.family;
                                      if ("Android" === t || "iOS" === t) {
                                          let t = eJ.default.getFingerprint(),
                                              n = (0, e$.I_)(),
                                              i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/login/one-time?token=${e}`;
                                          return (0, e$.Ay)(i, {
                                              utmSource: "one-time-login",
                                              fingerprint: t,
                                              attemptId: n,
                                          });
                                      }
                                      return "discord://";
                                  })(t)),
                                      (n = (0, e$.X7)(e)),
                                      L.default.track(D.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                                          detection_type: "mobile_button_clicked",
                                          device_type: f.Fr ? "mobile" : "tablet",
                                          platform: L.default.getSuperProperties()?.os,
                                      }),
                                      null != n &&
                                          L.default.track(D.HAw.DEEP_LINK_CLICKED, {
                                              fingerprint: (0, eZ.v)(n.fingerprint),
                                              attempt_id: n.attemptId,
                                              source: n.utmSource,
                                          }),
                                      e0.A.launch(e, (e) => {
                                          e || (0, eF.bG)({ pathname: D.BVt.LOGIN });
                                      }));
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var nH = n(613057);
function nW(e) {
    let { title: t, subtitle: n, buttonText: i, buttonOnClick: l } = e;
    return (0, d.jsx)(P.Ay, {
        children: (0, d.jsxs)(ew.B, {
            gap: 24,
            children: [
                (0, d.jsxs)(ew.B, {
                    gap: 8,
                    children: [(0, d.jsx)(P.hE, { children: t }), (0, d.jsx)(P.tK, { children: n })],
                }),
                (0, d.jsx)(H.$, { onClick: l, text: i, fullWidth: !0 }),
            ],
        }),
    });
}
var nK = n(463347),
    nQ = n(189213),
    nz = n(192308),
    nX = n(347704),
    nq = n(803306),
    nY = n(17372),
    n$ = n(369053),
    nZ = n(975571),
    nJ = n(928658);
async function n0(e, t) {
    try {
        await (0, n$.TP)(e, t);
    } catch (e) {
        if (null != e && "object" == typeof e && 429 === e.status)
            throw { status: 429, body: { message: X.intl.string(X.t.Z2hIUf) } };
        throw e;
    }
}
function n1(e, t) {
    let i = !1;
    function l() {
        i || t?.();
    }
    function s(s) {
        function r() {
            return n0(e, s);
        }
        async function a(t) {
            return await (0, n$.G_)(e, s, t);
        }
        function o(n) {
            ((i = !0),
                setTimeout(() => {
                    i = !1;
                }, 0));
            let l = n?.token;
            switch (e) {
                case nY.tY.MESSAGE:
                    (0, nJ.bM)(l, t);
                    break;
                case nY.tY.USER:
                    (0, nJ.nQ)(l, t);
                    break;
                case nY.tY.GUILD:
                    (0, nJ.V3)(l, t);
                    break;
                case nY.tY.MEDIA_TAKEDOWN:
                    (0, nJ._Y)(l, t);
            }
        }
        ((i = !0),
            setTimeout(() => {
                i = !1;
            }, 0),
            (0, nz.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("932606"), n.e("919840")]).then(n.bind(n, 79779));
                    return (t) =>
                        (0, d.jsx)(e, {
                            ...t,
                            onFormSubmit: a,
                            onResend: r,
                            onSuccess: o,
                            headerText: X.intl.string(X.t.H3Q7U8),
                            confirmButtonText: X.intl.string(X.t["13ofGu"]),
                            impression: { impressionName: g.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            ));
    }
    return function () {
        function t(t) {
            return n0(e, t);
        }
        ((0, nz.closeAllModals)(),
            (0, nz.openModalLazy)(
                async () => {
                    let { default: i } = await n.e("429232").then(n.bind(n, 180275));
                    return (n) =>
                        (0, d.jsx)(i, {
                            ...n,
                            onFormSubmit: t,
                            onSuccess: s,
                            headerText: X.intl.string(X.t.ZLRYGU),
                            confirmButtonText: X.intl.string(X.t.PDTjLN),
                            subtitle: e === nY.tY.MEDIA_TAKEDOWN ? X.intl.string(X.t.jt3z8f) : void 0,
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            ));
    };
}
var n2 = n(939249),
    n3 = n(921853),
    n4 = n(43008);
let n8 = { [nY.tY.MESSAGE]: X.t.fuqnBC, [nY.tY.USER]: X.t.F4jrRW, [nY.tY.GUILD]: X.t.gH3aMs },
    n5 = (e) => {
        let { title: t, menuType: n, onReopen: i } = e,
            l = h.useCallback(() => {
                n1(n, i)();
            }, [n, i]);
        return (0, d.jsxs)(n2.D, {
            className: n4.b0,
            onClick: l,
            children: [
                (0, d.jsx)(M.E, { variant: "text-md/medium", children: t }),
                (0, d.jsx)(n3.n, { size: "sm", style: { transform: "rotate(180deg)" } }),
            ],
        });
    },
    n7 = (e) => {
        let { dsaCapabilities: t, onReopen: n } = e;
        return (0, d.jsx)(ew.B, {
            gap: 16,
            children: (0, d.jsx)("div", {
                className: n4.kL,
                children: t.map((e) =>
                    e === nY.tY.MEDIA_TAKEDOWN || null == n8[e]
                        ? null
                        : (0, d.jsx)(n5, { title: X.intl.string(n8[e]), menuType: e, onReopen: n }, e),
                ),
            }),
        });
    };
var n9 = n(881636);
let n6 = "https://stopncii.org/partners/global-network-of-partners/",
    ie = {
        [nY.sl.TIDA]: {
            selectionLabel: X.t.jMSjZL,
            selectionDescription: X.t.qEaUPS,
            helpBody: X.t.R2Q57u,
            supportOrgURL: n6,
        },
        [nY.sl.UK_STOPNCII]: {
            selectionLabel: X.t.jMSjZL,
            selectionDescription: X.t.J0tNny,
            helpBody: X.t.R2Q57u,
            supportOrgURL: n6,
        },
        [nY.sl.BRAZIL_ONLINE_SAFETY_OF_WOMEN]: {
            selectionLabel: X.t.jMSjZL,
            selectionDescription: X.t.nYb8xq,
            helpBody: X.t.rtm4DR,
            supportOrgURL: "https://discord.findahelpline.com/countries/br",
        },
    };
function it(e) {
    return (0, nY.c7)(e) ? ie[e] : ie[nY.sl.TIDA];
}
var ii = (((s = {}).SELECTION = "selection"), (s.DSA = "dsa"), (s.TIDA = "tida"), s),
    il = n(138658);
let is = (e) => {
    let { mediaTakedownRegulation: t } = e,
        { goToStep: n } = (0, nX.n)(),
        { selectionLabel: i, selectionDescription: l } = it(t),
        s = h.useCallback(() => {
            n(ii.DSA);
        }, [n]),
        r = h.useCallback(() => {
            n(ii.TIDA);
        }, [n]);
    return (0, d.jsxs)(ew.B, {
        gap: 8,
        children: [
            (0, d.jsx)(M.E, { variant: "text-md/normal", children: X.intl.string(X.t.bd1h5T) }),
            (0, d.jsxs)("div", {
                className: il.k,
                children: [
                    (0, d.jsxs)(n2.D, {
                        className: il.b,
                        onClick: s,
                        children: [
                            (0, d.jsxs)("div", {
                                children: [
                                    (0, d.jsx)(M.E, {
                                        variant: "text-md/medium",
                                        children: X.intl.string(X.t["AszWL/"]),
                                    }),
                                    (0, d.jsx)(M.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: X.intl.string(X.t["0Jikui"]),
                                    }),
                                ],
                            }),
                            (0, d.jsx)(n9.u, { size: "sm" }),
                        ],
                    }),
                    (0, d.jsxs)(n2.D, {
                        className: il.b,
                        onClick: r,
                        children: [
                            (0, d.jsxs)("div", {
                                children: [
                                    (0, d.jsx)(M.E, { variant: "text-md/medium", children: X.intl.string(i) }),
                                    (0, d.jsx)(M.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: X.intl.string(l),
                                    }),
                                ],
                            }),
                            (0, d.jsx)(n9.u, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var ir = n(108124);
let ia = (e) => {
    let { helpBody: t, supportOrgURL: n } = e;
    return (0, d.jsxs)(ew.B, {
        gap: 24,
        children: [
            (0, d.jsx)(M.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: X.intl.string(X.t["3zG2Y9"]),
            }),
            (0, d.jsxs)(ew.B, {
                gap: 16,
                children: [
                    (0, d.jsxs)(ew.B, {
                        gap: 8,
                        children: [
                            (0, d.jsx)(M.E, { variant: "text-md/semibold", children: X.intl.string(X.t.CfBo0z) }),
                            (0, d.jsxs)("ul", {
                                className: ir.T,
                                children: [
                                    (0, d.jsx)("li", {
                                        children: (0, d.jsx)(M.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: X.intl.string(X.t.ofQnNQ),
                                        }),
                                    }),
                                    (0, d.jsx)("li", {
                                        children: (0, d.jsx)(M.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: X.intl.string(X.t.dFaQGn),
                                        }),
                                    }),
                                    (0, d.jsx)("li", {
                                        children: (0, d.jsx)(M.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: X.intl.string(X.t.RVNwXh),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, d.jsx)(M.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: X.intl.string(X.t.o5azXJ),
                    }),
                    (0, d.jsx)(M.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: X.intl.format(X.t.YETtaY, {
                            policyURL: "https://discord.com/safety/non-consensual-intimate-media-policy-explainer",
                        }),
                    }),
                ],
            }),
            (0, d.jsxs)(ew.B, {
                gap: 8,
                children: [
                    (0, d.jsx)(M.E, { variant: "text-md/semibold", children: X.intl.string(X.t.FJh2zi) }),
                    (0, d.jsx)(M.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: X.intl.format(t, {
                            supportOrgURL: n,
                            wellbeingURL: "https://discord.com/safety-wellbeing",
                            helpCenterURL: "https://support.discord.com/hc/articles/38675715591831",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var io = n(379492);
x.Ay.initialize();
let ic = (e) => {
        let { transitionState: t, onClose: n } = e,
            [i, l] = h.useState(!0),
            [s, r] = h.useState([]),
            [a, o] = h.useState(null),
            [c, u] = h.useState(null),
            m = (0, x.bG)([eJ.default], () => eJ.default.isAuthenticated()),
            g = (0, x.bG)([eS.A], () => eS.A.hasLoadedExperiments),
            f = h.useCallback(() => {
                (0, n$.OY)()
                    .then((e) => {
                        let { capabilities: t, media_takedown_regulation: n } = e;
                        (l(!1), r(t), o(n));
                    })
                    .catch(() => {
                        (l(!1), r([]), o(null));
                    });
            }, []);
        (h.useEffect(() => {
            m
                ? (l(!0),
                  nq
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => f())
                      .catch(() => l(!1)))
                : f();
        }, [m, f]),
            h.useEffect(() => {
                !(async function () {
                    g || (await E.A.getLocationMetadata(), E.A.getExperiments());
                })();
            }, [g]));
        let { helpBody: p, supportOrgURL: A } = it(a),
            _ = s.filter((e) => e !== nY.tY.MEDIA_TAKEDOWN),
            j = s.includes(nY.tY.MEDIA_TAKEDOWN),
            N = _.length > 0,
            v = N && j,
            C = i || !g;
        h.useEffect(() => {
            C || N || j || n();
        }, [C, N, j, n]);
        let I = h.useCallback(() => {
                (0, nz.openModalLazy)(() => Promise.resolve((e) => (0, d.jsx)(ic, { ...e })), { dismissable: !1 });
            }, []),
            T = h.useCallback((e, t) => {
                t !== ii.SELECTION && e !== ii.SELECTION ? u(ii.SELECTION) : u(e);
            }, []),
            S = h.useMemo(() => n1(nY.tY.MEDIA_TAKEDOWN, I), [I]),
            y = c ?? (v ? ii.SELECTION : N ? ii.DSA : ii.TIDA);
        if (C || (!N && !j))
            return (0, d.jsx)(nQ.a, {
                title: "",
                actions: [],
                transitionState: t,
                onClose: n,
                dismissable: !1,
                children: (0, d.jsx)(ew.B, {
                    gap: 16,
                    align: "center",
                    justify: "center",
                    style: { minHeight: "200px" },
                    children: (0, d.jsx)(eG.y, {}),
                }),
            });
        if (!v) {
            if (N)
                return (0, d.jsx)(nQ.a, {
                    title: X.intl.string(X.t.Z11w18),
                    subtitle: X.intl.format(X.t["532l+q"], {
                        supportURL: nZ.A.getArticleURL(D.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, d.jsx)(n7, { dsaCapabilities: _, onReopen: I }),
                });
            if (j)
                return (0, d.jsx)(nQ.a, {
                    title: X.intl.string(X.t.YignUm),
                    actions: [{ text: X.intl.string(X.t.D5Czbu), variant: "primary", onClick: S }],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, d.jsx)(ia, { helpBody: p, supportOrgURL: A }),
                });
        }
        let b = [
            {
                stepKey: ii.SELECTION,
                modalProps: { title: X.intl.string(X.t.Z11w18) },
                body: (0, d.jsx)(is, { mediaTakedownRegulation: a }),
            },
            {
                stepKey: ii.DSA,
                modalProps: {
                    title: X.intl.string(X.t.Z11w18),
                    subtitle: X.intl.format(X.t["532l+q"], {
                        supportURL: nZ.A.getArticleURL(D.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, d.jsx)(n7, { dsaCapabilities: _, onReopen: I }),
            },
            {
                stepKey: ii.TIDA,
                modalProps: { title: X.intl.string(X.t.YignUm) },
                body: (0, d.jsx)(ia, { helpBody: p, supportOrgURL: A }),
                nextButtonProps: { text: X.intl.string(X.t.D5Czbu) },
                onNext: () => (S(), !1),
            },
        ];
        return (0, d.jsx)("div", {
            className: { [ii.SELECTION]: io.a, [ii.DSA]: io.q, [ii.TIDA]: void 0 }[y],
            children: (0, d.jsx)(nX.t, {
                steps: b,
                currentStepKey: y,
                onStepChange: T,
                onClose: n,
                transitionState: t,
                dismissable: !1,
            }),
        });
    },
    iu = () => (
        h.useEffect(() => {
            (0, nz.openModalLazy)(() => Promise.resolve((e) => (0, d.jsx)(ic, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
var id = n(30793),
    ih = n(970928),
    im = n(612181),
    ig = n(179689);
let ip = {
    dump(e) {
        let t;
        (null != performance.memory &&
            (t = {
                jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                totalJSHeapSize: performance.memory.totalJSHeapSize,
                usedJSHeapSize: performance.memory.usedJSHeapSize,
            }),
            e({
                browser: { name: eq().name, version: eq().version },
                os: { name: eq().os?.family, version: eq().os?.version },
                memory: t,
            }));
    },
    getTimeSinceNavigationStart: () => Date.now() - ig.fL,
};
var ix = n(649852),
    iE = n.n(ix),
    iA = n(615300),
    i_ = n(319060),
    ij = n(844222),
    iN = n(240248),
    iv = n(706192);
let iC = (0, iN.xI)(i_.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    iI = { friction: 10, tension: 130 },
    iT = function (e) {
        return class extends h.Component {
            timeout;
            anim = new iA.A.Value(0);
            state = { shouldAnimate: !f.Fr };
            componentDidMount() {
                f.Fr || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize());
            }
            handleResize = () => {
                let e = window.innerWidth > iC;
                (!this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({ shouldAnimate: e }));
            };
            handleResizeDebounced = iE()(this.handleResize, 60);
            componentWillUnmount() {
                (clearTimeout(this.timeout), window.removeEventListener("resize", this.handleResizeDebounced));
            }
            componentWillAppear(e) {
                this.state.shouldAnimate ? this.animateTo(1, e) : e();
            }
            componentWillEnter(e) {
                this.state.shouldAnimate
                    ? (clearTimeout(this.timeout), (this.timeout = setTimeout(() => this.animateTo(1, e), 40)))
                    : e();
            }
            componentWillLeave(e) {
                this.state.shouldAnimate ? this.animateTo(0, e) : e();
            }
            animateTo(e, t) {
                iA.A.spring(this.anim, { toValue: e, ...iI }).start(t);
            }
            getAnimatedStyle(e) {
                return this.state.shouldAnimate
                    ? {
                          opacity: this.anim,
                          transform: e
                              ? void 0
                              : [
                                    { scale: this.anim.interpolate({ inputRange: [0, 1], outputRange: [1.05, 1] }) },
                                    {
                                        translateY: this.anim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ["-70px", "0px"],
                                        }),
                                    },
                                    { translateZ: 0 },
                                ],
                      }
                    : null;
            }
            render() {
                return (0, d.jsx)("div", {
                    className: iv.i,
                    children: (0, d.jsx)(ij.C.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, d.jsx)(iA.A.div, {
                                className: iv.l,
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, d.jsx)(e, { ...this.props }),
                            });
                        },
                    }),
                });
            }
        };
    };
var iS = n(603647),
    iy = n(970672),
    ib = n(129014),
    iR = n(642277);
let iL = function (e) {
    let { match: t, location: n, attemptDeepLink: i } = e,
        [l, s] = h.useState(0);
    (h.useEffect(() => {
        (ib.default.once("connected", () => {
            s(1);
        }),
            ib.default.once("disconnected", () => {
                (0, eF.pX)((0, iR.W)());
            }),
            ib.default.connect());
    }, []),
        h.useEffect(() => {
            if (0 !== l) return;
            let e = setTimeout(() => (0, eF.pX)((0, iR.W)()), 3e3);
            return () => clearTimeout(e);
        }, [l]));
    let r = h.useCallback(
        async (e, t) => {
            try {
                (s(2), await i(e, t), s(3));
            } catch (e) {
                console.error("Error opening deeplink", e);
            }
        },
        [i],
    );
    if ((0, eF.MX)()) return null;
    switch (l) {
        case 1:
            return (0, d.jsxs)(P.Ay, {
                children: [
                    (0, d.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.qllnGm) }),
                    (0, d.jsx)(P.tK, { children: X.intl.string(X.t.SXCxye) }),
                    (0, d.jsx)("div", {
                        className: Y.eT,
                        children: (0, d.jsx)(H.$, {
                            text: X.intl.string(X.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => r(t, n),
                        }),
                    }),
                    (0, d.jsx)("div", {
                        className: V()(Y.Ot, Y.F1),
                        children: (0, d.jsx)(em.Q, {
                            text: X.intl.string(X.t["2ixEBi"]),
                            textVariant: "text-sm/normal",
                            onClick: () => (0, eF.pX)((0, iR.W)()),
                        }),
                    }),
                ],
            });
        case 0:
        case 2:
            return (0, d.jsxs)(P.Ay, {
                children: [(0, d.jsx)(P.hE, { children: X.intl.string(X.t["Z+hCVU"]) }), (0, d.jsx)(P.CK, {})],
            });
        case 3:
            return (0, d.jsxs)(P.Ay, {
                children: [
                    (0, d.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.csrAMJ) }),
                    (0, d.jsx)(P.tK, { children: X.intl.string(X.t.ghBJz9) }),
                ],
            });
    }
};
var iO = n(723923);
x.Ay.initialize();
class iD extends h.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, ep.A)(this.props.location),
            t = (0, m.parse)(this.props.location.search);
        (j.Bo.post({
            url: D.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, category: t.category, email_type: t.email_type },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { user: n },
                    } = e,
                    i = new tT.A(n);
                this.setState({ success: !0, busy: !1, user: i, category: t.category });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, U.d0)("disable_email_notifications"));
    }
    renderBusy() {
        return (0, d.jsx)(P.Ay, { children: (0, d.jsx)(P.CK, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: i } = this.props,
            l = X.intl.formatToPlainString(X.t.YDAohB, { category: t });
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.f6rdLg) }),
                (0, d.jsx)(P.tK, { children: l }),
                (0, d.jsx)("div", {
                    className: Y.QX,
                    children: (0, d.jsx)(H.$, { text: X.intl.string(X.t.fIv16B), fullWidth: !0, onClick: () => i(n) }),
                }),
                (0, d.jsx)("div", {
                    className: Y.Ot,
                    children: (0, d.jsx)(em.Q, {
                        text: X.intl.string(X.t.YYTirT),
                        textVariant: "text-sm/normal",
                        onClick: () => i((0, I.settingsPathToRoute)(S.od.NOTIFICATIONS_EMAILS)),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: i } = this.state;
        if (null != i) {
            let e = iO.px.find((e) => e.category === i);
            if (null != e) return this.renderCategorySuccess(i, e.label());
        }
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: ts._3.DEPRECATED_SIZE_100,
                    className: Y.SX,
                }),
                (0, d.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t["6U6OMQ"]) }),
                (0, d.jsx)(P.tK, { children: X.intl.string(X.t["yaDJ4/"]) }),
                (0, d.jsx)("div", {
                    className: Y.eT,
                    children: (0, d.jsx)(H.$, { text: X.intl.string(X.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P._V, { src: n(37772), className: Y.SX }),
                (0, d.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.ox9hIS) }),
                (0, d.jsx)(P.tK, { children: X.intl.string(X.t["/dcuR5"]) }),
                (0, d.jsx)("div", {
                    className: Y.eT,
                    children: (0, d.jsx)(H.$, { text: X.intl.string(X.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let ik = x.Ay.connectStores([eg.A], () => ({ defaultRoute: eg.A.defaultRoute }))(iD);
var iw = n(110782),
    iG = n(10088),
    iP = n(871123),
    iU = n(189081),
    iB = n(67480),
    iF = n(45938),
    iV = n(587895),
    iM = n(242874),
    iH = n(180522),
    iW = n(287809),
    iK = n(97352),
    iQ = n(615396),
    iz = n(202541),
    iX = n(716592);
function iq() {
    return (0, d.jsxs)(h.Fragment, {
        children: [
            (0, d.jsx)(P.eu, { src: null, size: ts._3.DEPRECATED_SIZE_100, className: Y.SX }),
            (0, d.jsx)(P.tK, { children: X.intl.string(X.t.lTGZAl) }),
            (0, d.jsx)(P.hE, { className: V()(Y.Ot, eC.tR), children: X.intl.string(X.t.ZTNur7) }),
        ],
    });
}
let iY = x.Ay.connectStores([iB.A, iV.A, iK.A, iW.default], (e) => {
    let { giftCode: t } = e,
        n = iB.A.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, iQ.c9)(i) : null,
        application: null != n ? iV.A.getApplication(n.applicationId) : null,
        gifter: iW.default.getUser(t.userId),
    };
})(function (e) {
    let { error: t, giftCode: n, gifter: i, sku: l, application: s, subscriptionPlan: r } = e,
        a = null == i ? X.intl.string(X.t.lTGZAl) : X.intl.formatToPlainString(X.t.TjWdPc, { username: i.username });
    if (null == l) return (0, d.jsx)(iq, {});
    let o = l.name;
    return (
        null != r &&
            (o = X.intl.formatToPlainString(r.interval === iz.WT.MONTH ? X.t.CTpcCZ : X.t["rgPWG/"], {
                skuName: l.name,
                intervalCount: r.intervalCount,
            })),
        (0, d.jsxs)(h.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, d.jsx)(iH.A, { defaultAnimationState: iM.oA.LOOP, giftStyle: n.giftStyle, className: iX.e })
                    : (0, d.jsx)(P.eu, {
                          src: null != i ? i.getAvatarURL(void 0, 100) : null,
                          size: ts._3.DEPRECATED_SIZE_100,
                          className: Y.SX,
                      }),
                null != t
                    ? (0, d.jsxs)(h.Fragment, {
                          children: [
                              (0, d.jsx)(P.tK, { children: X.intl.string(X.t.mDFGFj) }),
                              (0, d.jsx)(P.hE, { children: t }),
                          ],
                      })
                    : (0, d.jsxs)(h.Fragment, {
                          children: [
                              (0, d.jsx)(P.tK, { children: a }),
                              (0, d.jsxs)(P.hE, {
                                  className: V()(Y.Ot, eC.tR),
                                  children: [
                                      l.productLine !== D.EZt.COLLECTIBLES &&
                                          (0, d.jsx)(ta.A, {
                                              size: ta.M.MEDIUM,
                                              className: iX.I,
                                              game: s,
                                              skuId: l.id,
                                          }),
                                      o,
                                  ],
                              }),
                          ],
                      }),
            ],
        })
    );
});
var i$ = n(935399),
    iZ = n(475743),
    iJ = n(707554),
    i0 = n(68281);
function i1(e) {
    let { loginStatus: t, authBoxClassName: n, transparent: i = !1, onSubmit: l, onCancelAccountDeletion: s } = e,
        r = t === D.aUe.ACCOUNT_DISABLED,
        a = r ? X.intl.string(X.t["j3rC+U"]) : X.intl.string(X.t.ZFWofo),
        o = r ? X.intl.string(X.t["6eNTWe"]) : X.intl.string(X.t["pCBti+"]);
    return (0, d.jsx)(P.Ay, {
        tag: "form",
        onSubmit: l,
        className: n,
        transparent: i,
        children: (0, d.jsxs)(iJ.F, {
            component: (0, d.jsx)(P.hE, { className: Y.QB, children: a }),
            children: [
                (0, d.jsx)(P.tK, { className: Y.SX, children: o }),
                (0, d.jsxs)(P.eB, {
                    children: [
                        (0, d.jsx)(H.$, { text: X.intl.string(X.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, d.jsx)("div", {
                            className: V()(Y.Ot, i0.Qt),
                            children: X.intl.format(X.t.js2rr5, { onClick: s }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var i2 = n(504394),
    i3 = n(52423),
    i4 = n(228916);
function i8(e) {
    let { children: t, className: n, ...i } = e,
        l = t();
    return (0, d.jsx)(P.Ay, {
        ...i,
        className: V()(n, i4.kL),
        contentClassName: i4.Qs,
        children: l.map((e, t) =>
            (0, d.jsx)("div", { className: i4.fi, style: { flexBasis: `${100 / l.length}%` }, children: e }, t),
        ),
    });
}
var i5 = n(895600),
    i7 = n(506774),
    i9 = n(104798),
    i6 = n(991512);
let le = "mweb_handoff_nonce",
    lt = "mweb_handoff_nonce_expiration",
    ln = +tq.A.Millis.MINUTE,
    li = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    ll = new Set(["deep_link_failed"]);
function ls() {
    (i7.w.remove(le), i7.w.remove(lt));
}
let lr = () => {
    let e = (0, x.bG)([eJ.default], () => eJ.default.getFingerprint()),
        { fingerprint: t, handoff_token: n } = (0, m.parse)(window.location.search),
        i = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
        l = i ?? (null !== e ? e : void 0);
    h.useEffect(() => {
        null !== i && e !== i && N.h.dispatch({ type: "FINGERPRINT", fingerprint: i });
    }, [i, e]);
    let [s, r] = h.useState(null),
        a = h.useCallback(
            (e) => {
                (r(e),
                    L.default.track(
                        D.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                        { reason: e, fingerprint: (0, eZ.v)(l) },
                        { fingerprint: l },
                    ));
            },
            [r, l],
        ),
        o = i7.w.get(le);
    if (
        ("null" === n && null === s && a("deep_link_failed"),
        null != n && "null" !== n && null == o && null === s && a("nonce_missing"),
        h.useEffect(() => {
            if (null != o) {
                let e = i7.w.get(lt);
                (null == e || Date.now() >= e) && (a("nonce_expired"), ls());
            }
        }, [o, a]),
        h.useEffect(() => {
            null != n &&
                "null" !== n &&
                null != o &&
                null == s &&
                j.Bo.post({ url: D.Rsh.HANDOFF_EXCHANGE, body: { key: o, handoff_token: n }, rejectWithError: !0 })
                    .then((e) => E.A.loginToken(e.body.token, !1))
                    .then(() => {
                        L.default.track(D.HAw.LOGIN_SUCCESSFUL, {
                            source: D.mdB.MOBILE_WEB_HANDOFF,
                            is_new_user: !1,
                            fingerprint: (0, eZ.v)(l),
                        });
                        let e = new URL(window.location.href),
                            t = new URLSearchParams(e.search);
                        (t.delete("handoff_token"),
                            t.delete("fingerprint"),
                            (e.search = t.toString()),
                            window.history.pushState(null, "", e));
                    })
                    .catch(() => {
                        a("handoff_exchange");
                    })
                    .finally(() => {
                        ls();
                    });
        }, [n, o, s, l, a]),
        null == l)
    )
        return null;
    let c =
        null == s
            ? (0, d.jsxs)(d.Fragment, {
                  children: [X.intl.string(X.t.uJ1JsY), (0, d.jsx)("br", {}), X.intl.string(X.t.GHVWAs)],
              })
            : ll.has(s)
              ? X.intl.string(X.t.EPt55r)
              : li.has(s)
                ? X.intl.string(X.t.g87kTp)
                : void 0;
    return null != s && ll.has(s)
        ? (0, d.jsx)("div", {
              className: i6.Un,
              children: (0, d.jsx)(M.E, {
                  color: "interactive-text-default",
                  variant: "text-sm/semibold",
                  children: c,
              }),
          })
        : (0, d.jsxs)("div", {
              className: i6.kL,
              children: [
                  (0, d.jsx)(M.E, { variant: "text-sm/semibold", children: c }),
                  (0, d.jsx)(H.$, {
                      variant: "overlay-primary",
                      text: X.intl.string(X.t.NcC759),
                      onClick: function () {
                          let e = i9.A.generateNonce();
                          (i7.w.set(le, e), i7.w.set(lt, Date.now() + ln));
                          let t = new URL(D.J$u),
                              n = new URLSearchParams(window.location.search);
                          (n.delete("fingerprint"), n.delete("handoff_token"));
                          let i = new URLSearchParams();
                          (i.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                              i.set("key", e),
                              i.set("fingerprint", l),
                              (t.search = i.toString()),
                              L.default.track(
                                  D.HAw.DEEP_LINK_CLICKED,
                                  { fingerprint: (0, eZ.v)(l), source: "mobile_web_handoff", destination: D.J$u },
                                  { fingerprint: l, flush: !0 },
                              ),
                              (window.location.href = t.toString()));
                      },
                  }),
              ],
          });
};
var la = n(274303),
    lo = n(139286),
    lc = n(970573),
    lu = n(491919);
function ld(e) {
    let { onDismiss: t, embedded: n = !1 } = e;
    return (
        (0, lo.A)({ type: g.ImpressionTypes.MODAL, name: g.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, d.jsxs)(P.Ay, {
            className: lu.ci,
            transparent: n,
            children: [
                !n && (0, d.jsx)(P.hE, { children: X.intl.string(X.t.bVbB63) }),
                (0, d.jsx)(M.E, {
                    className: lu.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: X.intl.string(X.t["0M5fN7"]),
                }),
                (0, d.jsx)(lc.A, {
                    actionText: X.intl.string(X.t["DSN+hw"]),
                    onAction: (e) => {
                        e === lc.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, d.jsx)("div", {
                    className: lu.o1,
                    children: (0, d.jsx)(em.Q, {
                        variant: "secondary",
                        size: "md",
                        textVariant: "text-sm/medium",
                        text: X.intl.string(X.t["9g2mqT"]),
                        onClick: t,
                    }),
                }),
            ],
        })
    );
}
function lh(e) {
    let {
        authBoxClassName: t,
        country: n,
        login: i,
        password: l,
        onLoginChange: s,
        onPasswordChange: r,
        loginRef: a,
        passwordRef: o,
    } = e;
    return (0, d.jsxs)(P.Ay, {
        className: t,
        children: [
            (0, d.jsx)(i2.M, {}),
            (0, d.jsxs)(P.eB, {
                className: Y.QX,
                children: [
                    (0, d.jsx)(ev.A, {
                        className: Y.SX,
                        alpha2: n.alpha2,
                        countryCode: n.code.split(" ")[0],
                        label: X.intl.string(X.t.tUjnxr),
                        onChange: s,
                        setRef: a,
                        autoCapitalize: "none",
                        autoComplete: "username webauthn",
                        autoCorrect: "off",
                        spellCheck: "false",
                        value: i,
                        autoFocus: !0,
                        required: !0,
                    }),
                    (0, d.jsx)(P.pd, {
                        className: Y.SX,
                        label: X.intl.string(X.t["CIGa+7"]),
                        onChange: r,
                        type: "password",
                        setRef: o,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        value: l,
                        required: !0,
                    }),
                    (0, d.jsx)("div", {
                        className: Y.QB,
                        children: (0, d.jsx)(H.$, {
                            text: X.intl.string(X.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, d.jsx)(em.Q, { text: X.intl.string(X.t.wWIufs), textVariant: "text-sm/normal", disabled: !0 }),
                    (0, d.jsx)("div", {
                        className: Y.a5,
                        children: (0, d.jsx)(em.Q, {
                            text: X.intl.string(X.t.tmE73r),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var lm = n(401755);
function lg(e, t) {
    if (null == t[e]) return null;
    {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n;
    }
}
function lf(e) {
    let t,
        {
            invite: n,
            guildTemplate: i,
            giftCode: l,
            authBoxClassName: s,
            isEmbedded: r = !1,
            disableAutofocusOnDefaultForm: a,
            login: o,
            password: c,
            errors: u,
            loginSource: g,
            dismissedChooseAccount: p,
            setDismissedChooseAccount: E,
            conditionalMediationAbortController: A,
            onLoginChange: _,
            onPasswordChange: j,
            handleLogin: N,
            handleForgotPassword: v,
            handleGotoRegister: C,
            showPasswordResetNotice: I = !1,
        } = e,
        T = (0, x.bG)([eN.A], () => eN.A.getCountryCode()),
        S = (0, x.bG)([eJ.default], () => eJ.default.getLoginStatus()),
        y = (0, x.bG)([la.A], () => la.A.getHasLoggedInAccounts()),
        b = h.useCallback(
            (e) => {
                L.default.track(D.HAw.LOGIN_SUCCESSFUL, {
                    source: D.mdB.QR_CODE,
                    login_source: g,
                    gift_code_sku_id: l?.skuId ?? null,
                    is_new_user: !1,
                    login_method: "remote_auth",
                    login_instance_id: e ?? null,
                });
            },
            [g, l],
        ),
        { handoff_token: R } = (0, m.parse)(window.location.search),
        O = f.Fr && f.KY && null != R,
        k = null == u.email && null != u.password,
        w = h.useRef(null),
        G = h.useRef(null),
        U = (0, iZ.Ay)(u);
    if (
        (h.useEffect(() => {
            function e(e) {
                return null != u[e];
            }
            null != U &&
                U !== u &&
                (e("password") ? G.current?.focus() : (e("email") || e("login")) && w.current?.focus());
        }, [u, w, G, U]),
        r)
    )
        t = null;
    else if (null != n) t = (0, d.jsx)("div", { className: Y.S3, children: (0, d.jsx)(i2.A, { invite: n }) });
    else if (null != l) t = (0, d.jsx)(iY, { giftCode: l });
    else {
        let e = null;
        if (!1 === (0, nU.isAndroidWeb)()) {
            let t = I ? X.t["N9U/9X"] : X.t.euS7r4;
            e = (0, d.jsx)(P.tK, { children: X.intl.string(t) }, "subtitle");
        }
        t = (0, d.jsxs)("div", {
            className: i0.wx,
            children: [(0, d.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t["7fNJgA"]) }, "title"), e],
        });
    }
    let B = (0, d.jsxs)("div", {
        className: i0.Eh,
        children: [
            y &&
                p &&
                (0, d.jsx)("div", {
                    className: i0.AX,
                    children: (0, d.jsx)(H.$, {
                        onClick: () => E(!1),
                        variant: "secondary",
                        text: X.intl.string(X.t["1MrpWO"]),
                        icon: n3.n,
                    }),
                }),
            t,
            (0, d.jsx)(iJ.F, {
                children: (0, d.jsxs)(P.eB, {
                    className: Y.QX,
                    children: [
                        (0, d.jsx)(ev.A, {
                            alpha2: T.alpha2,
                            countryCode: T.code.split(" ")[0],
                            className: Y.SX,
                            label: X.intl.string(X.t.tUjnxr),
                            error: lg("login", u) ?? lg("email", u),
                            onChange: _,
                            setRef: w,
                            autoCapitalize: "none",
                            autoComplete: "username webauthn",
                            autoCorrect: "off",
                            spellCheck: "false",
                            value: o,
                            autoFocus: !k && !O && !a,
                            required: !0,
                        }),
                        (0, d.jsx)(P.pd, {
                            label: X.intl.string(X.t["CIGa+7"]),
                            error: lg("password", u),
                            onChange: j,
                            name: "password",
                            type: "password",
                            setRef: G,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            autoFocus: k && !O && !a,
                            value: c,
                            required: !0,
                        }),
                        (0, d.jsx)("div", {
                            className: V()(Y.SX, Y.a5),
                            children: (0, d.jsx)(em.Q, {
                                text: X.intl.string(X.t.wWIufs),
                                textVariant: "text-sm/normal",
                                onClick: () => {
                                    (null != w.current && w.current.focus(), v());
                                },
                            }),
                        }),
                        (0, d.jsx)("div", {
                            className: Y.QB,
                            children: (0, d.jsx)(H.$, {
                                text: X.intl.string(X.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                loading: S === D.aUe.LOGGING_IN,
                            }),
                        }),
                        (0, d.jsxs)("div", {
                            className: Y.a5,
                            children: [
                                (0, d.jsx)("span", { className: i0.Qt, children: X.intl.string(X.t.tmE73r) }),
                                (0, d.jsx)("span", {
                                    className: i0.Z8,
                                    children: (0, d.jsx)(em.Q, {
                                        text: X.intl.string(X.t.pV8xeR),
                                        textVariant: "text-sm/normal",
                                        onClick: C,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
    return null != n && n.state === D.elq.RESOLVING
        ? (0, d.jsx)(lh, {
              authBoxClassName: s,
              country: T,
              login: o,
              password: c,
              onLoginChange: _,
              onPasswordChange: j,
              loginRef: w,
              passwordRef: G,
          })
        : null != i
          ? i.state === lm.QB.RESOLVING
              ? (0, d.jsx)(lh, {
                    authBoxClassName: s,
                    country: T,
                    login: o,
                    password: c,
                    onLoginChange: _,
                    onPasswordChange: j,
                    loginRef: w,
                    passwordRef: G,
                })
              : (0, d.jsx)(i8, {
                    onSubmit: N,
                    tag: "form",
                    className: V()(s, i0.Sy),
                    children: () => [
                        (0, d.jsx)(i5.A, { guildTemplate: i }, "template"),
                        (0, d.jsx)(h.Fragment, { children: B }, "form-wrapper"),
                    ],
                })
          : y && !p
            ? (0, d.jsx)(ld, { onDismiss: () => E(!0), embedded: r })
            : (0, d.jsxs)("div", {
                  children: [
                      (0, d.jsx)(P.Ay, {
                          onSubmit: N,
                          tag: "form",
                          className: V()(s, { [i0.M0]: O }),
                          transparent: r,
                          expanded: !0,
                          children: (0, d.jsxs)(ew.B, {
                              direction: r ? "vertical" : "horizontal",
                              align: r ? "stretch" : "center",
                              gap: r ? 24 : 64,
                              children: [
                                  B,
                                  (0, d.jsx)(i3.A, {
                                      horizontal: r,
                                      onAuthenticateSuccess: b,
                                      conditionalMediationAbortController: A,
                                  }),
                              ],
                          }),
                      }),
                      O && (0, d.jsx)(lr, {}),
                  ],
              });
}
var lp = n(572469);
function lx(e) {
    let { loginSource: t, giftCodeSKUId: n, isEmbedded: i = !1 } = e,
        l = (0, x.cf)(
            [eJ.default],
            () => ({ ticket: eJ.default.getMFATicket(), methods: eJ.default.getMFAMethods() }),
            [],
        ),
        s = h.useCallback(
            (e) => {
                let { mfaType: i, data: l, ticket: s } = e;
                return (
                    K._.dispatch(D.jej.WAVE_EMPHASIZE),
                    E.A.loginMFAv2({ code: l, ticket: s, mfaType: i, source: t, giftCodeSKUId: n })
                );
            },
            [t, n],
        );
    return (0, d.jsx)(P.Ay, {
        transparent: i,
        style: { padding: 0 },
        children: (0, d.jsx)(lp.t, {
            mfaFinish: s,
            mfaChallenge: l,
            onEarlyClose: () => {
                N.h.dispatch({ type: "LOGIN_RESET" });
            },
            embedded: i,
        }),
    });
}
var lE = n(511815),
    lA = n(139033),
    l_ = n(952116),
    lj = n(491509),
    lN = n(913612),
    lv = n(933924);
function lC(e) {
    let {
        invite: t,
        guildTemplate: n,
        giftCode: i,
        location: l,
        redirectTo: s,
        transitionTo: r,
        authBoxClassName: a,
        isEmbedded: o = !1,
        loginSource: c,
        disableAutofocusOnDefaultForm: u,
    } = e;
    (0, lN.K)();
    let g = (0, x.bG)([eJ.default], () => eJ.default.isAuthenticated()),
        f = (0, x.bG)([R.A], () => R.A.isHandoffAvailable()),
        p = (0, x.bG)([eJ.default], () => eJ.default.getLoginStatus()),
        A = i?.skuId ?? null,
        _ = (0, x.bG)([iB.A], () => (null != A ? iB.A.get(A) : null)),
        {
            checkingHandoff: j,
            redirecting: N,
            login: C,
            password: I,
            phoneVerifyError: T,
            dismissedChooseAccount: S,
            setDismissedChooseAccount: y,
            errors: O,
            conditionalMediationAbortController: k,
            loginSource: w,
            loginOrSSO: G,
            handleLogin: B,
            handleIPAuthorize: F,
            handlePasswordReset: V,
            handleForgotPassword: H,
            handleResendCode: W,
            handleReset: Q,
            handleCancelAccountDeletion: z,
            handleGotoRegister: q,
            loginReset: $,
            onLoginChange: Z,
            onPasswordChange: J,
        } = (function (e) {
            let {
                    invite: t,
                    guildTemplate: n,
                    giftCode: i,
                    handoffAvailable: l,
                    authenticated: s,
                    transitionTo: r = eF.pX,
                    redirectTo: a,
                    location: o,
                    loginSource: c,
                } = e,
                [u, g] = h.useState(() => l),
                [f, p] = h.useState(() => s),
                [x, A] = h.useState(""),
                [_, j] = h.useState(() => {
                    let e = null != o ? (0, m.parse)(o.search) : {};
                    return e.email ?? e.login ?? "";
                }),
                [N, v] = h.useState(""),
                [C, I] = h.useState(!1),
                [T, S] = h.useState(null),
                [y, R] = h.useState(!1),
                [L] = h.useState(() => new AbortController()),
                [O, k] = h.useState({});
            !u || l || s || g(!1);
            let w = h.useMemo(() => {
                    if (null != c) return c;
                    if (null != i) return "gift";
                    if (null != n) return "guild_template";
                    if (null != t) {
                        if (null != t.guild) return "guild_invite";
                        if (null != t.channel) return "dm_invite";
                        if (null != t.inviter) return "friend_invite";
                    }
                    return null != a ? b(a) : null;
                }, [c, i, n, t, a]),
                G = null != i ? i.skuId : null,
                P = h.useCallback(
                    (e) => {
                        let t = null != e ? (0, m.parse)(e.search) : {};
                        if ((delete t.redirect_to, null != a)) {
                            if (ed(a)) return void eh(a);
                            r(a);
                        } else if (null == t.service) r(D.BVt.APP);
                        else {
                            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + D.Rsh.SSO,
                                n = { ...t, token: eJ.default.getToken() };
                            window.location.href = `${e}?${(0, m.stringify)(n)}`;
                        }
                    },
                    [a, r],
                ),
                U = h.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e &&
                            null != t &&
                            (p(!0),
                            n
                                ? E.A.verifySSOToken("login", null).then(
                                      (e) => {
                                          e ? P(t) : p(!1);
                                      },
                                      () => P(t),
                                  )
                                : P(t));
                    },
                    [P],
                ),
                B = h.useCallback(() => {
                    (L.abort("Login state reset"), k({}), E.A.loginReset());
                }, [L]),
                F = h.useCallback(
                    async function (e) {
                        let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (e?.preventDefault(),
                            L.abort("Starting password login"),
                            K._.dispatch(D.jej.WAVE_EMPHASIZE),
                            k({}));
                        try {
                            await E.A.login({
                                login: x + _,
                                password: N,
                                undelete: n ?? C,
                                source: w,
                                giftCodeSKUId: G,
                                invite: t,
                            });
                        } catch (e) {
                            k((0, t5.p)(e));
                        }
                    },
                    [L, _, x, N, C, w, G, t],
                ),
                V = h.useCallback(
                    async (e) => {
                        let t = x + _;
                        k({});
                        try {
                            let { token: n } = await e_.A.verifyPhone(t, e, !1);
                            (await E.A.authorizeIPAddress(n), F());
                        } catch (e) {
                            null != e.body && null != e.body.message && S(e.body.message);
                        }
                    },
                    [x, _, F],
                ),
                H = h.useCallback(
                    async (e) => {
                        S(null);
                        try {
                            let { token: t } = await e_.A.verifyPhone(x + _, e, !1);
                            r(D.BVt.RESET, { search: (0, m.stringify)({ token: t, from_login: "true" }) });
                        } catch (e) {
                            null != e.body && null != e.body.message && S(e.body.message);
                        }
                    },
                    [x, _, r],
                ),
                W = h.useCallback(
                    async (e) => {
                        null != e && e.preventDefault();
                        let t = x + _;
                        k({});
                        try {
                            K._.dispatch(D.jej.WAVE_EMPHASIZE);
                            let e = await E.A.forgotPassword(t);
                            if (!1 === e) return;
                            e === lE.D.ONE_TIME_LOGIN
                                ? (0, nz.openModal)((e) => {
                                      let t = [
                                          {
                                              variant: "primary",
                                              text: X.intl.string(X.t.BddRzS),
                                              onClick: e.onClose,
                                              fullWidth: !0,
                                          },
                                      ];
                                      return (0, d.jsx)(nQ.a, {
                                          title: X.intl.string(X.t["6Ecyts"]),
                                          actions: t,
                                          ...e,
                                          children: (0, d.jsx)(M.E, {
                                              variant: "text-md/normal",
                                              children: X.intl.string(X.t.iAcrqV),
                                          }),
                                      });
                                  })
                                : (0, lA.A)({
                                      title: X.intl.string(X.t.f5Pi7A),
                                      subtitle: X.intl.format(X.t["6u5hQ9"], { email: t }),
                                  });
                        } catch (e) {
                            k((0, t5.p)(e));
                        }
                    },
                    [x, _],
                ),
                Q = h.useCallback(() => {
                    e_.A.resendCode(x + _);
                }, [x, _]),
                z = h.useCallback((e) => {
                    (null != e && e.preventDefault(),
                        E.A.loginReset(),
                        v(""),
                        A(""),
                        j(""),
                        I(!1),
                        g(!1),
                        p(!1),
                        k({}));
                }, []),
                q = h.useCallback(() => {
                    (I(!0), F(void 0, { undelete: !0 }));
                }, [F]),
                Y = h.useCallback(() => {
                    let e,
                        l = null != o ? (0, m.parse)(o.search) : {};
                    ("" !== _ && (l.email = _),
                        null != t
                            ? ((l.mode = "register"), (e = D.BVt.INVITE(t.code)))
                            : null != i
                              ? ((l.mode = "register"), (e = D.BVt.GIFT_CODE(i.code)))
                              : null != n
                                ? (e = D.BVt.GUILD_TEMPLATE(n.code))
                                : null != a
                                  ? ((e = D.BVt.REGISTER), (l.redirect_to = a))
                                  : (e = D.BVt.REGISTER),
                        B(),
                        r(e, { search: (0, m.stringify)(l) }),
                        K._.dispatch(D.jej.WAVE_EMPHASIZE));
                }, [_, t, i, n, a, o, B, r]);
            return {
                checkingHandoff: u,
                redirecting: f,
                login: _,
                password: N,
                phoneVerifyError: T,
                dismissedChooseAccount: y,
                setDismissedChooseAccount: R,
                errors: O,
                conditionalMediationAbortController: L,
                loginSource: w,
                loginOrSSO: U,
                handleLogin: F,
                handleIPAuthorize: V,
                handlePasswordReset: H,
                handleForgotPassword: W,
                handleResendCode: Q,
                handleReset: z,
                handleCancelAccountDeletion: q,
                handleGotoRegister: Y,
                loginReset: B,
                onLoginChange: h.useCallback((e, t) => {
                    (j(e), A(t));
                }, []),
                onPasswordChange: h.useCallback((e) => {
                    v(e);
                }, []),
            };
        })({
            invite: t,
            guildTemplate: n,
            giftCode: i,
            handoffAvailable: f,
            authenticated: g,
            transitionTo: r,
            redirectTo: s,
            location: l,
            loginSource: c,
        });
    (0, i$.Ay)(() => {
        (f && !g ? (0, v.ST)() : g && G(g, l, !0),
            L.default.track(
                D.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: w,
                    authenticated: g,
                    ...(null != _ ? (0, lj.A)(_, !1, !1) : {}),
                    source: (0, eF.PR)(),
                },
                { flush: !0 },
            ),
            g || (0, lv.a)({ abortController: k, loginSource: w, giftCodeSKUId: A }),
            E.A.getLocationMetadata(),
            (0, U.d0)("login"));
    });
    let ee = (0, iZ.Ay)(g);
    h.useEffect(() => {
        let e = j && (f || N);
        g && !1 === ee && !e && (k.abort("Transitioning to authenticated state"), G(g, l));
    }, [g, f, ee, N, j, k, G, l]);
    let et = l?.state?.passwordReset === !0;
    if (N || j) return (0, d.jsx)(P.Ay, { transparent: o, children: (0, d.jsx)(eG.y, {}) });
    if (f)
        return (0, d.jsxs)(P.Ay, {
            className: a,
            transparent: o,
            children: [
                (0, d.jsx)(P.CK, {}),
                (0, d.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.S6RMNA) }),
                (0, d.jsx)(P.tK, { children: X.intl.string(X.t.YZiJbh) }),
            ],
        });
    switch (p) {
        case D.aUe.LOGGING_IN_MFA_SMS:
        case D.aUe.MFA_SMS_STEP:
        case D.aUe.LOGGING_IN_MFA:
        case D.aUe.MFA_STEP:
            return (0, d.jsx)(lx, { loginSource: w, giftCodeSKUId: A, isEmbedded: o });
        case D.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case D.aUe.ACCOUNT_DISABLED:
            return (0, d.jsx)(i1, {
                loginStatus: p,
                authBoxClassName: a,
                transparent: o,
                onSubmit: Q,
                onCancelAccountDeletion: z,
            });
        case D.aUe.PHONE_IP_AUTHORIZATION:
            return (0, d.jsx)(P.Ay, {
                tag: "form",
                className: a,
                transparent: o,
                children: (0, d.jsx)(l_.A, {
                    title: X.intl.string(X.t.w55Oco),
                    subtitle: X.intl.format(X.t.CfRZBj, { onResendClick: W }),
                    error: T,
                    onSubmit: F,
                    onCancel: $,
                }),
            });
        case D.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, d.jsx)(P.Ay, {
                tag: "form",
                className: a,
                transparent: o,
                children: (0, d.jsx)(l_.A, {
                    title: X.intl.string(X.t["+xqy3d"]),
                    subtitle: X.intl.format(X.t.ef4uZ7, { onResendClick: W }),
                    error: T,
                    onSubmit: V,
                    onCancel: $,
                }),
            });
        case D.aUe.LOGGING_IN:
        case D.aUe.NONE:
        default:
            return (0, d.jsx)(lf, {
                invite: t,
                guildTemplate: n,
                giftCode: i,
                authBoxClassName: a,
                isEmbedded: o,
                disableAutofocusOnDefaultForm: u,
                login: C,
                password: I,
                errors: O,
                loginSource: w,
                dismissedChooseAccount: S,
                setDismissedChooseAccount: y,
                conditionalMediationAbortController: k,
                onLoginChange: Z,
                onPasswordChange: J,
                handleLogin: B,
                handleForgotPassword: H,
                handleGotoRegister: q,
                showPasswordResetNotice: et,
            });
    }
}
var lI = n(664294);
let lT = null,
    lS = "underage";
class ly extends x.Ay.Store {
    static displayName = "AgeGateStore";
    isUnderageAnonymous() {
        if (nU.isPlatformEmbedded && 1) {
            if (null != lT && lT + ni.bm > Date.now()) return !0;
        } else if (1) return null != lI.parse(document.cookie)[lS];
        return !1;
    }
}
let lb = new ly(N.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        ((lT = Date.now()), (document.cookie = `${lS}=1;path=/`));
    },
    LOGIN_SUCCESS: function () {
        ((lT = null), (document.cookie = `${lS}=1;path=/;max-age=0`));
    },
});
var lR = n(509434),
    lL = n(121780),
    lO = n(970116);
let lD = function () {
    let e,
        t =
            null != (e = (0, x.bG)([lL.A], () => lL.A.getMinimumAge()))
                ? X.intl.formatToPlainString(X.t.Sn7icL, { minAge: e })
                : X.intl.string(X.t.WqEH4D);
    return (0, d.jsx)(P.Ay, {
        children: (0, d.jsxs)("div", {
            className: lO.hQ,
            children: [
                (0, d.jsx)(P.hE, { className: lO.DD, children: X.intl.string(X.t.nCB6Ga) }),
                (0, d.jsx)(P.tK, { className: lO.VA, children: X.intl.format(X.t.KQgoxG, { underageMessage: t }) }),
                (0, d.jsx)(H.$, {
                    icon: lR.I,
                    text: X.intl.string(X.t.hvVgAZ),
                    onClick: () => window.open(nZ.A.getArticleURL(D.MVz.AGE_GATE), "_blank"),
                    iconPosition: "end",
                }),
            ],
        }),
    });
};
(n(994555), n(827343), n(792251), n(19575), n(945041));
var lk = n(493527),
    lw = n(544395);
function lG(e) {
    let {
            initialEmail: t,
            invite: n,
            giftCode: i,
            guildTemplate: l,
            onApiErrors: s,
            onEmailChange: r,
            onGotoLogin: a,
            onRegister: o,
        } = e,
        [c, u] = h.useState(!1),
        [m, g] = h.useState(!1);
    async function f() {
        S.length > 0 && !lw.A.wasRegistrationSuggestionFetched(S) && (await lk.A.fetchSuggestionsRegistration(S));
    }
    function p(e) {
        L.default.track(D.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function E(e) {
        L.default.track(D.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    let A = (0, x.bG)([t0.A], () => t0.A.getAuthenticationConsentRequired()),
        _ = (0, x.bG)([lw.A], () => lw.A.registrationUsernameSuggestion()),
        j = h.useRef(null),
        N = h.useRef(null),
        v = h.useRef(null),
        C = h.useRef(null),
        [I, T] = h.useState(t),
        [S, y] = h.useState(""),
        [b, R] = h.useState(""),
        [O, k] = h.useState(""),
        [w, G] = h.useState(null),
        [U, B] = tZ(A),
        [F, W] = h.useState(!1),
        [Q, z] = tJ(),
        [q, $] = h.useState({}),
        { message: Z, email: J, username: ee, global_name: et, password: en, date_of_birth: ei } = q,
        [el, es] = h.useState(null),
        [er, ea] = h.useState(null),
        [eo, ec] = h.useState(null),
        [eu, ed] = h.useState(null),
        eh = null != A && U;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: i, globalNameRef: l, passwordRef: s } = e,
            r = (0, iZ.Ay)(t);
        h.useEffect(() => {
            null == r ||
                (r !== t &&
                    (null != t.email || null != t.phone
                        ? n.current?.focus()
                        : null != t.username
                          ? i.current?.focus()
                          : null != t.global_name
                            ? l.current?.focus()
                            : null != t.password && s.current?.focus()));
        }, [t, r, n, i, l, s]);
    })({ apiErrors: q, emailRef: j, usernameRef: N, globalNameRef: v, passwordRef: C });
    let eg = h.useCallback(async () => {
            let e = null != i ? i.skuId : null,
                t = t8.mZ.getState(),
                r = (0, iN.uJ)(_) ? null : b === _;
            (K._.dispatch(D.jej.WAVE_EMPHASIZE), W(!0), $({}));
            try {
                (await nl({
                    email: I,
                    username: b,
                    globalName: S,
                    consent: U,
                    password: O,
                    invite: n?.code,
                    usedUsernameSuggestion: r,
                    guildTemplateCode: l?.code,
                    giftCodeSKUId: e,
                    birthday: w,
                    promoEmailConsent: t.required ? t : null,
                }),
                    o?.());
            } catch (t) {
                if ((W(!1), !(t instanceof t4.LG))) return;
                let e = (0, t5.W)(t);
                ($(e), s?.(e), "number" == typeof e.retry_after && z(e.retry_after));
            }
        }, [i, l, n, I, s, o, _, b, S, O, w, U, z]),
        ef = h.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == A)) return;
                let t = !1;
                (0 === I.length && (es(X.intl.string(X.t.EkokLy)), (t = !0)),
                    0 === b.length && (ea(X.intl.string(X.t.EkokLy)), (t = !0)),
                    0 === O.length && (ec(X.intl.string(X.t.EkokLy)), (t = !0)),
                    null == w && (ed(X.intl.string(X.t.EkokLy)), (t = !0)),
                    t || eg());
            },
            [I, b, O, w, A, eg],
        ),
        ep = null;
    return (
        "string" == typeof Z && (ep = (0, d.jsx)(P.ME, { className: V()(Y.QX, nr.gJ), children: Z })),
        (0, d.jsx)("form", {
            onSubmit: ef,
            children: (0, d.jsxs)(P.eB, {
                className: Y.QX,
                children: [
                    (0, d.jsx)(P.pd, {
                        autoFocus: !0,
                        className: Y.SX,
                        label: X.intl.string(X.t.dI4d4S),
                        name: "email",
                        value: I,
                        onChange: (e) => {
                            (T(e), r?.(e), es(0 === e.length ? X.intl.string(X.t.EkokLy) : null));
                        },
                        error: el ?? t$(J),
                        type: "email",
                        autoComplete: "username",
                        setRef: j,
                        required: !0,
                        onFocus: () => p("email"),
                        onBlur: () => E("email"),
                    }),
                    (0, d.jsx)(P.pd, {
                        label: X.intl.string(X.t["9AjdkD"]),
                        className: Y.SX,
                        name: "global_name",
                        value: S,
                        onChange: y,
                        error: t$(et),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: v,
                        onFocus: () => {
                            (u(!0), p("global_name"));
                        },
                        onBlur: () => {
                            (u(!1), E("global_name"));
                        },
                    }),
                    (0, d.jsx)(nN, {
                        show: c,
                        top: -12,
                        bottom: 20,
                        children: (0, d.jsx)(M.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: X.intl.string(X.t["330TCc"]),
                        }),
                    }),
                    (0, d.jsxs)("div", {
                        onBlur: () => g(!1),
                        onFocus: () => {
                            (g(!0), f());
                        },
                        tabIndex: -1,
                        children: [
                            (0, d.jsx)(P.pd, {
                                label: X.intl.string(X.t.TWzdWj),
                                className: Y.SX,
                                name: "username",
                                value: b,
                                onChange: (e) => {
                                    (R(e.toLocaleLowerCase()), ea(0 === e.length ? X.intl.string(X.t.EkokLy) : null));
                                },
                                error: er ?? t$(ee),
                                autoComplete: "off",
                                setRef: N,
                                required: !0,
                                onFocus: () => p("username"),
                                onBlur: () => E("username"),
                            }),
                            (0, d.jsx)(nv, {
                                username: b,
                                suggestion: _,
                                globalName: S,
                                isUsernameFocused: m,
                                onClickSuggestion: () => {
                                    (N.current?.focus(), null != _ && _.length > 0 && (R(_), ea(null)));
                                },
                            }),
                        ],
                    }),
                    (0, d.jsx)(P.pd, {
                        label: X.intl.string(X.t["CIGa+7"]),
                        name: "password",
                        value: O,
                        onChange: (e) => {
                            (k(e), ec(0 === e.length ? X.intl.string(X.t.EkokLy) : null));
                        },
                        error: eo ?? t$(en),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: C,
                        required: !0,
                        onFocus: () => p("password"),
                        onBlur: () => E("password"),
                    }),
                    (0, d.jsx)(np.A, {
                        label: X.intl.string(X.t.rhBeKe),
                        wrapperClassName: nr.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            (G(e), null != e && ed(null));
                        },
                        error: eu ?? t$(ei),
                        value: w,
                        required: !0,
                        onFocus: p,
                        onBlur: E,
                    }),
                    (0, d.jsx)(nc, {}),
                    (0, d.jsx)(na, { consent: U, consentRequired: A, onConsentChange: B }),
                    (0, d.jsx)(t3.m, {
                        text: !U && A ? X.intl.string(X.t.AY4IVA) : null,
                        children: (0, d.jsx)("div", {
                            className: Y.QX,
                            children: (0, d.jsx)(H.$, {
                                text: X.intl.string(X.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: F,
                                disabled: !eh || Q,
                            }),
                        }),
                    }),
                    ep,
                    (0, d.jsx)("div", {
                        className: Y.QX,
                        children: (0, d.jsx)(em.Q, {
                            text: X.intl.string(X.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            onClick: a,
                        }),
                    }),
                ],
            }),
        })
    );
}
n(436317);
var lP = n(713654),
    lU = n(331722);
function lB(e) {
    let { channel: t } = e,
        n = (0, lP._U)(t.type);
    return (0, d.jsxs)("div", {
        className: lU.Nj,
        children: [
            null != n ? (0, d.jsx)(n, { color: "currentColor", size: "custom", width: 20, height: 20 }) : null,
            (0, d.jsx)(M.E, { className: lU.dN, color: "none", variant: "text-sm/semibold", children: t.name }),
        ],
    });
}
function lF(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, d.jsxs)("div", {
        className: lU.kL,
        children: [
            (0, d.jsx)(tD.Uq, { className: lU.II, guildId: n.guild_id, guildEvent: n, eventPreview: n }),
            (0, d.jsx)(tD.sC, { name: n.name, description: n.description, guildId: n.guild_id }),
            null != t && n.channel_id === t.id ? (0, d.jsx)(lB, { channel: t }) : null,
        ],
    });
}
var lV = n(231698);
function lM(e) {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let i = ef.DY(t),
        { name: l, description: s } = i;
    return (0, d.jsxs)("div", {
        children: [
            (0, d.jsx)(eP.D, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: lV.CT,
                children: X.intl.string(X.t.Eabu1z),
            }),
            (0, d.jsxs)("div", {
                className: lV.EB,
                children: [
                    (0, d.jsx)(tK.Ay, {
                        mask: tK.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, d.jsx)(tO.Ay, { guild: i, size: tO.Ay.Sizes.MEDIUM, active: !0 }),
                    }),
                    (0, d.jsxs)("div", {
                        className: lV.OA,
                        children: [
                            (0, d.jsx)(eP.D, { variant: "heading-sm/semibold", children: l }),
                            (0, d.jsxs)("div", {
                                className: lV.aH,
                                children: [
                                    (0, d.jsx)("div", { className: lV.Om }),
                                    null != n && n > 0
                                        ? (0, d.jsx)(M.E, {
                                              variant: "text-sm/normal",
                                              children: X.intl.format(X.t["LC+S+m"], { membersOnline: n }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != s &&
                "" !== s &&
                (0, d.jsx)(M.E, { color: "text-default", className: lV.CT, variant: "text-sm/normal", children: s }),
        ],
    });
}
function lH(e) {
    let { authBoxClassName: t, name: n, onNameChange: i } = e;
    return (0, d.jsxs)(P.Ay, {
        className: t,
        children: [
            (0, d.jsx)(i2.M, {}),
            (0, d.jsxs)(P.eB, {
                className: nr.y0,
                children: [
                    (0, d.jsx)(t3.m, {
                        text: X.intl.string(X.t["hBB85/"]),
                        position: "right",
                        children: (0, d.jsx)(P.pd, {
                            label: X.intl.string(X.t["9AjdkD"]),
                            autoFocus: !0,
                            className: Y.QB,
                            name: "username",
                            value: n,
                            placeholder: X.intl.string(X.t["09Q8yp"]),
                            onChange: i,
                            onFocus: () => {
                                L.default.track(D.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                L.default.track(D.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, d.jsx)(M.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: V()(Y.QX, nr.E2),
                        children: X.intl.format(X.t["KI+BSb"], { termsURL: D.X7G.TERMS, privacyURL: D.X7G.PRIVACY }),
                    }),
                    (0, d.jsx)("div", {
                        className: Y.Ot,
                        children: (0, d.jsx)(H.$, {
                            text: X.intl.string(X.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, d.jsx)("div", {
                        className: Y.QX,
                        children: (0, d.jsx)(em.Q, {
                            text: X.intl.string(X.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function lW(e) {
    let { consentRequired: t, consent: n, registering: i } = e,
        l = h.useMemo(() => null != t && n, [t, n]);
    return (0, d.jsx)(t3.m, {
        text: !n && t ? X.intl.string(X.t.AY4IVA) : null,
        children: (0, d.jsx)("div", {
            className: Y.Ot,
            children: (0, d.jsx)(H.$, {
                text: X.intl.string(X.t["825cFy"]),
                variant: "primary",
                fullWidth: !0,
                type: "submit",
                loading: i,
                disabled: !l,
            }),
        }),
    });
}
function lK(e) {
    let { invite: t, authBoxClassName: n, hideInviteHeader: i = !1, onApiErrors: l, onGotoLogin: s, onRegister: r } = e,
        a = (0, x.bG)([t0.A], () => t0.A.getAuthenticationConsentRequired()),
        o = t?.guild_scheduled_event != null,
        c = h.useRef(null),
        u = null;
    u = i
        ? null
        : t?.guild_scheduled_event != null
          ? (0, d.jsx)(lF, { channel: t.channel, guildScheduledEvent: t.guild_scheduled_event })
          : (0, d.jsx)("div", { className: Y.S3, children: (0, d.jsx)(i2.A, { invite: t, inUnclaimedFlow: !0 }) });
    let [m, g] = h.useState(""),
        [f, p] = h.useState(null),
        [E, A] = tZ(a),
        [_, j] = h.useState(!1),
        [N, v] = h.useState({}),
        { username: C, global_name: I, date_of_birth: T } = N,
        [S, y] = tJ();
    h.useEffect(() => {
        null == f && c.current?.focus();
    }, [f, c]);
    let [b, R] = h.useState(null),
        [O, k] = h.useState(null),
        w = h.useCallback(async () => {
            (K._.dispatch(D.jej.WAVE_EMPHASIZE), j(!0), v({}));
            try {
                let e = await (function (e) {
                    let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
                    return nl({ ...i, invite: t, giftCodeSKUId: n });
                })({ consent: E, invite: t.code, globalName: m, birthday: f });
                r?.(e?.invite_join_deferred_code != null);
            } catch (t) {
                if ((j(!1), !(t instanceof t4.LG))) return;
                let e = (0, t5.W)(t);
                (v(e), l?.(e), "number" == typeof e.retry_after && y(e.retry_after));
            }
        }, [t, m, f, E, l, r, y, v, j]),
        G = h.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === a)) return;
                let t = !1;
                (0 === m.length && (R(X.intl.string(X.t.EkokLy)), (t = !0)),
                    null == f && (k(X.intl.string(X.t.EkokLy)), (t = !0)),
                    t || w());
            },
            [m, f, a, w, R, k],
        );
    return t.state === D.elq.RESOLVING
        ? (0, d.jsx)(lH, { authBoxClassName: n, name: m, onNameChange: g })
        : (0, d.jsxs)("div", {
              children: [
                  (0, d.jsx)(P.Ay, {
                      tag: "section",
                      className: n,
                      children: (0, d.jsxs)("form", {
                          onSubmit: G,
                          children: [
                              u,
                              o ? (0, d.jsx)("div", { className: nr.yF }) : null,
                              (0, d.jsxs)(P.eB, {
                                  className: o ? void 0 : nr.y0,
                                  children: [
                                      (0, d.jsx)(t2.k, {
                                          helperText: X.intl.string(X.t["330TCc"]),
                                          label: X.intl.string(X.t["9AjdkD"]),
                                          error: b ?? t$(I ?? C),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: m,
                                          placeholder: X.intl.string(X.t["09Q8yp"]),
                                          onChange: g,
                                          onFocus: () => {
                                              L.default.track(D.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              L.default.track(D.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, d.jsx)(np.A, {
                                          label: X.intl.string(X.t.rhBeKe),
                                          wrapperClassName: nr.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              (p(e), null != e && k(null));
                                          },
                                          error: O ?? t$(T),
                                          value: f,
                                      }),
                                      (0, d.jsx)(na, { consent: E, consentRequired: a, onConsentChange: A }),
                                      (0, d.jsx)(lW, { consentRequired: a, consent: E, registering: _ }),
                                      (0, d.jsx)("div", {
                                          className: Y.QX,
                                          children: (0, d.jsx)(em.Q, {
                                              text: X.intl.string(X.t["1lWxux"]),
                                              textVariant: "text-sm/normal",
                                              onClick: s,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  null != t && o
                      ? (0, d.jsx)(P.Ay, {
                            className: Y.QX,
                            children: (0, d.jsx)(lM, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
n(100544);
var lQ =
    (((r = {}).IDENTITY = "identity"),
    (r.DISPLAY_NAME = "display_name"),
    (r.ACCOUNT_INFORMATION = "account_information"),
    (r.FULL = "full"),
    (r.AGE_GATE = "age_gate"),
    (r.INVITE = "invite"),
    (r.SMS_VERIFY = "sms_verify"),
    r);
function lz(e) {
    let {
            authBoxClassName: t,
            giftCode: n,
            giftCodeSKU: i,
            guildTemplate: l,
            invite: s,
            hideInviteHeader: r = !1,
            location: a,
            redirectTo: o,
            onLoginStart: c,
            onRegister: u,
            transitionTo: f = eF.pX,
        } = e,
        p = (0, x.bG)([t0.A], () => t0.A.getAuthenticationConsentRequired()),
        A = (0, x.bG)([eJ.default], () => eJ.default.isAuthenticated()),
        _ = (0, x.bG)([lb], () => lb.isUnderageAnonymous()),
        j = (0, x.bG)([la.A], () => la.A.getHasLoggedInAccounts()),
        N = null != e.location ? (0, m.parse)(e.location.search) : {},
        [v, C] = h.useState(N.email ?? ""),
        [I, T] = h.useState({}),
        S = (0, iZ.Ay)(A),
        y = (function (e, t, n) {
            if (null != e) return "gift";
            if (null != t) return "guild_template";
            if (null != n) {
                if (null != n.guild) return "guild_invite";
                else if (null != n.channel) return "dm_invite";
                else if (null != n.inviter) return "friend_invite";
            }
            return null;
        })(n, l, s),
        b = null != s && (null != s.guild || null != s.channel),
        R = null != s && null == s.guild && null == s.channel && null != s.inviter,
        O = h.useCallback(() => {
            A && (null != o ? f(o) : f(eg.A.defaultRoute));
        }, [A, o, f]);
    ((0, i$.Ay)(() => {
        (O(),
            L.default.track(
                D.HAw.REGISTER_VIEWED,
                {
                    location: null != s ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: y,
                    ...(null != i ? (0, lj.A)(i, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == p && E.A.getLocationMetadata(),
            (0, U.d0)("register"));
    }),
        h.useEffect(() => {
            A && !1 === S && ((0, nu.C)(nd.zY.ORGANIC_REGISTERED), O());
        }, [A, S, O]));
    let k = lQ.FULL;
    (_ || null != I.date_of_birth ? (k = lQ.AGE_GATE) : b && (k = lQ.INVITE),
        (0, lo.A)(
            {
                type: g.ImpressionTypes.VIEW,
                name: g.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: g.ImpressionGroups.USER_REGISTRATION_FLOW, step: k },
            },
            {},
            [k],
        ));
    let w = h.useCallback(
        (e) => {
            let t,
                i = null != a ? (0, m.parse)(a.search) : {};
            (null != s
                ? (t = D.BVt.INVITE_LOGIN(s.code))
                : null != n
                  ? (t = D.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != l
                    ? (t = D.BVt.GUILD_TEMPLATE_LOGIN(l.code))
                    : null != o
                      ? ((t = D.BVt.LOGIN), (i.redirect_to = o))
                      : ((t = D.BVt.LOGIN), "" !== v && (i = { email: v })),
                E.A.loginReset(),
                f(t, { search: (0, m.stringify)(i), source: "register" }),
                c?.(e),
                K._.dispatch(D.jej.WAVE_EMPHASIZE));
        },
        [v, s, n, l, o, a, c, f],
    );
    if (_ || null != I.date_of_birth) return (0, d.jsx)(lD, {});
    if (null != s && b)
        return (0, d.jsx)(lK, {
            invite: s,
            authBoxClassName: t,
            hideInviteHeader: r,
            onApiErrors: T,
            onGotoLogin: w,
            onRegister: u,
        });
    let G = (0, d.jsx)(P.hE, { children: X.intl.string(X.t.wC4TlR) }, "title"),
        B = !1;
    null != l
        ? ((G = (0, d.jsx)(i5.A, { guildTemplate: l })), (B = !0))
        : null != n
          ? (G = (0, d.jsx)(iY, { giftCode: n }))
          : !r &&
            null != s &&
            R &&
            s.state === D.elq.RESOLVED &&
            (G = (0, d.jsx)("div", { className: Y.S3, children: (0, d.jsx)(i2.A, { invite: s, isRegister: !0 }) }));
    let F = (0, d.jsx)(lG, {
        initialEmail: N.email ?? "",
        invite: s,
        giftCode: n,
        guildTemplate: l,
        onApiErrors: T,
        onEmailChange: C,
        onGotoLogin: w,
        onRegister: u,
    });
    return B
        ? (0, d.jsx)(i8, {
              tag: "section",
              className: V()(t, nr.Sy),
              children: () => [
                  G,
                  (0, d.jsxs)(
                      "div",
                      {
                          className: nr.Uu,
                          children: [(0, d.jsx)(P.hE, { className: nr.lR, children: X.intl.string(X.t.wC4TlR) }), F],
                      },
                      "register-title",
                  ),
              ],
          })
        : (0, d.jsxs)(P.Ay, {
              tag: "section",
              className: t,
              children: [
                  j
                      ? (0, d.jsx)("div", {
                            className: nr.AX,
                            children: (0, d.jsx)(H.$, {
                                onClick: w,
                                variant: "secondary",
                                text: X.intl.string(X.t["1MrpWO"]),
                                icon: n3.n,
                                iconPosition: "start",
                            }),
                        })
                      : null,
                  G,
                  F,
              ],
          });
}
(x.Ay.initialize(), x.Ay.initialize());
class lX extends h.PureComponent {
    state = { error: null, continueOnWeb: !1, currentUser: null, sentVerification: !1, fetchingUser: !1 };
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        (e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, U.d0)("gift_code"));
    }
    componentDidUpdate(e) {
        let { authenticated: t, isResolved: n } = this.props;
        (n || this.resolveGiftCode(),
            t && !e.authenticated && this.handleAuthenticated(),
            !t && e.authenticated && this.setState({ currentUser: null }));
    }
    handleAuthenticated() {
        let { currentUser: e } = this.state;
        (iw.Yq(), null == e && this.refreshUser());
    }
    refreshUser = () => {
        (this.setState({ fetchingUser: !0 }),
            nq
                .rQ({ withAnalyticsToken: !0 })
                .then((e) => this.setState({ currentUser: e, fetchingUser: !1 }))
                .catch(() => this.setState({ fetchingUser: !1 })));
    };
    get requiresVerification() {
        let { currentUser: e } = this.state;
        return null != e && !e.verified;
    }
    getCode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.match.params.giftCode ?? "";
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.login ? "login" : "register";
    }
    getErrorMessage(e) {
        let { libraryApplication: t, sku: n } = this.props,
            { error: i } = this.state,
            l = null != i ? i.code : null;
        return l === D.t02.INVALID_GIFT_SELF_REDEMPTION
            ? X.intl.string(X.t.wa9h7F)
            : l === D.t02.INVALID_GIFT_REDEMPTION_OWNED && n?.productLine === D.EZt.COLLECTIBLES
              ? X.intl.string(X.t.mdLtb5)
              : null != t || l === D.t02.INVALID_GIFT_REDEMPTION_OWNED
                ? X.intl.format(X.t.PIdmg3, { libraryLink: D.BVt.APPLICATION_LIBRARY })
                : e.isClaimed || l === D.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? X.intl.string(X.t.ilcBeX)
                  : l === D.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? X.intl.string(X.t.ypuSd8)
                    : void 0;
    }
    handleLogout = () => {
        let e = this.getCode();
        E.A.logout("gift_code", D.BVt.GIFT_CODE_LOGIN(e));
    };
    handleResendVerification = () => {
        (E.A.verifyResend(), this.setState({ sentVerification: !0 }));
    };
    handleAccept = async () => {
        let { transitionTo: e, giftCode: t } = this.props;
        if (null == t) throw Error("Trying to accept gift before resolve");
        let n = this.getCode();
        try {
            (this.setState({ error: null }), await A.Ay.redeemGiftCode({ code: n }), e(D.BVt.APP));
        } catch (e) {
            this.setState({ error: e });
        }
    };
    resolveGiftCode = () => {
        let { transitionTo: e } = this.props,
            t = this.getCode();
        A.Ay.resolveGiftCode(t, !0, !0)
            .then((n) => {
                null != n && null != n.giftCode.promotion && e(D.BVt.BILLING_PROMOTION_REDEMPTION(t));
            })
            .catch(A.Ay.reportUnexpectedGiftCodeError);
    };
    renderSpinner(e) {
        return (0, d.jsxs)(P.Ay, { children: [(0, d.jsx)(P.hE, { children: e }), (0, d.jsx)(P.CK, {})] });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P.hE, { className: V()(Y.Ot, Y.QB), children: X.intl.string(X.t.KPowgn) }),
                (0, d.jsx)(P.tK, { children: X.intl.string(X.t.j8734b) }),
                (0, d.jsx)("div", {
                    className: V()(Y.eT, Y.QB),
                    children: (0, d.jsx)(H.$, { text: X.intl.string(X.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, d.jsx)(em.Q, {
                    text: X.intl.string(X.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(nZ.A.getArticleURL(D.MVz.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.csrAMJ) }),
                (0, d.jsx)(P.tK, { children: X.intl.string(X.t["m1+IBn"]) }),
                (0, d.jsx)("div", {
                    className: Y.eT,
                    children: (0, d.jsx)(H.$, {
                        text: X.intl.string(X.t["qsI+EH"]),
                        fullWidth: !0,
                        onClick: () => this.setState({ continueOnWeb: !0 }),
                    }),
                }),
            ],
        });
    }
    renderVerification(e) {
        let { sentVerification: t } = this.state;
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P._V, { src: n(792525), className: Y.QB }),
                (0, d.jsx)(P.hE, { children: X.intl.format(X.t["ivLUf/"], { username: e.username }) }),
                (0, d.jsx)(P.tK, { className: Y.QX, children: X.intl.string(X.t["8Su18+"]) }),
                (0, d.jsx)("div", {
                    className: Y.eT,
                    children: (0, d.jsx)(H.$, {
                        text: t ? X.intl.string(X.t.CMa9Rv) : X.intl.string(X.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, d.jsx)("div", {
                    className: Y.Ot,
                    children: (0, d.jsx)(em.Q, {
                        text: X.intl.string(X.t.Po9eBQ),
                        textVariant: "text-sm/normal",
                        onClick: this.refreshUser,
                    }),
                }),
            ],
        });
    }
    renderAuthenticated(e, t, n) {
        let { transitionTo: i } = this.props,
            l = this.getErrorMessage(e);
        return (0, d.jsx)(lY, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: i,
            children: (0, d.jsxs)(P.Ay, {
                children: [
                    (0, d.jsx)(iY, { giftCode: e }),
                    (0, d.jsx)("div", {
                        className: Y.eT,
                        children: (0, d.jsx)(H.$, {
                            text: X.intl.string(X.t.n6I6k4),
                            fullWidth: !0,
                            disabled: null != l,
                            onClick: this.handleAccept,
                        }),
                    }),
                    null != l
                        ? (0, d.jsx)(P.tK, { className: Y.QX, children: l })
                        : (0, d.jsx)(P.ME, {
                              className: Y.QX,
                              children: X.intl.format(X.t.NYM08s, {
                                  userTag: tc.Ay.getUserTag(t),
                                  onLogoutClick: this.handleLogout,
                              }),
                          }),
                ],
            }),
        });
    }
    render() {
        let {
                nativeAppState: e,
                sku: t,
                authenticated: n,
                giftCode: i,
                isResolved: l,
                isAccepting: s,
                transitionTo: r,
                location: a,
            } = this.props,
            { fetchingUser: o, continueOnWeb: c } = this.state;
        if (e === D.fAW.OPEN && !c) return this.renderAppOpened();
        if (e === D.fAW.OPENING) return this.renderSpinner(X.intl.string(X.t["Z+hCVU"]));
        if (s) return this.renderSpinner(X.intl.string(X.t.bhJseN));
        if (null == i) return l ? this.renderExpiredInvite() : this.renderSpinner(X.intl.string(X.t.b3lf1c));
        if (l) {
            if (n) {
                let e = this.state.currentUser;
                return o || null == e
                    ? this.renderSpinner(X.intl.string(X.t.bYb2nS))
                    : this.requiresVerification && null != e
                      ? this.renderVerification(e)
                      : this.renderAuthenticated(i, e, t);
            }
            return "login" === this.getMode()
                ? (0, d.jsx)(lC, { giftCode: i, transitionTo: r, location: a })
                : (0, d.jsx)(lz, { giftCodeSKU: t, giftCode: i, transitionTo: r, location: a });
        }
        return null;
    }
}
let lq = x.Ay.connectStores([id.A, iU.A, eJ.default, iB.A, eg.A, iG.A], (e) => {
    let t = e.match.params.giftCode ?? "",
        n = id.A.get(t),
        i = null != n ? iB.A.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: i,
        libraryApplication: null != i && n?.entitlementBranches != null ? iF.YI(n.entitlementBranches, i, iU.A) : null,
        authenticated: eJ.default.isAuthenticated(),
        defaultRoute: eg.A.defaultRoute,
        isResolved: id.A.getIsResolved(t),
        isAccepting: id.A.getIsAccepting(t),
        libraryApplicationsFetched: iU.A.fetched,
        nativeAppState: iG.A.getState(t),
    };
})(lX);
function lY(e) {
    let { sku: t, children: n, giftCodeCode: i, transitionTo: l } = e,
        s = (0, iP.bF)(t);
    return (h.useEffect(() => {
        null != i && s && l(D.BVt.APP_WITH_GIFT_CODE(i));
    }, [s, i, l]),
    s)
        ? (0, d.jsxs)(P.Ay, {
              children: [(0, d.jsx)(P.hE, { children: X.intl.string(X.t.b3lf1c) }), (0, d.jsx)(P.CK, {})],
          })
        : n;
}
var l$ = n(871194),
    lZ = n(799365),
    lJ = n(894778),
    l0 = n(315290),
    l1 = n(396574),
    l2 = n(838697);
x.Ay.initialize();
class l3 extends h.PureComponent {
    componentDidMount() {
        ((0, U.d0)("guildTemplate"),
            l1.VP || e0.A.launch("discord://" + D.BVt.GUILD_TEMPLATE(this.props.code), () => void 0));
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && eR.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return l1.VP
            ? (0, d.jsx)("div", { className: Y.eT, children: (0, d.jsx)(H.$, { text: e, fullWidth: !0, onClick: t }) })
            : (0, d.jsx)(P.KE, { className: Y.eT });
    }
    renderSpinner(e) {
        return (0, d.jsxs)(P.Ay, { children: [(0, d.jsx)(P.hE, { children: e }), (0, d.jsx)(P.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P.hE, { className: V()(Y.Ot, Y.QB), children: X.intl.string(X.t.C7ZRNw) }),
                (0, d.jsx)(P.tK, { children: X.intl.string(X.t.A6MwXE) }),
                this.renderButton(X.intl.string(X.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.csrAMJ) }),
                (0, d.jsx)(P.tK, { children: X.intl.string(X.t["m1+IBn"]) }),
                this.renderButton(X.intl.string(X.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (ez()(null != e, "guild template must not be null"), e.state === lm.QB.RESOLVING)
            ? (0, d.jsx)(P.Ay, { className: l2.sL, children: (0, d.jsx)(lZ.A, { guildTemplate: e }) })
            : (0, d.jsx)(l4, { guildTemplate: e });
    }
    renderContinue() {
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P.hE, { children: X.intl.string(X.t.fOc4gn) }),
                this.renderButton(X.intl.string(X.t.fIv16B), this.handleContinue),
            ],
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: i, location: l } = this.props;
        if (null == e) return this.renderSpinner(X.intl.string(X.t.ZTNur7));
        if (t === D.fAW.OPEN) return this.renderAppOpened();
        if (t === D.fAW.OPENING) return this.renderSpinner(X.intl.string(X.t["Z+hCVU"]));
        switch (e.state) {
            case lm.QB.RESOLVING:
                return this.renderSpinner(X.intl.string(X.t["Z+hCVU"]));
            case lm.QB.RESOLVED:
                if (n || !l1.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, d.jsx)(lC, { guildTemplate: e, transitionTo: i, location: l });
                return (0, d.jsx)(lz, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: l,
                    onRegister: () => {
                        ((0, nu.C)(nd.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            lJ.A.flowStart(l0.do.ORGANIC_GUILD_TEMPLATES, l0.ju.NUF_STARTED));
                    },
                });
            case lm.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function l4(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, l$.A)(t, !1);
    lJ.A.flowStep(l0.do.ORGANIC_GUILD_TEMPLATES, l0.jC.GUILD_CREATE);
    let l = (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(P.hE, { className: l2.wx, children: X.intl.string(X.t.UNFvtM) }),
            n,
            (0, d.jsx)("div", {
                className: l2.Tf,
                children: (0, d.jsx)(H.$, { text: X.intl.string(X.t.xr59t7), fullWidth: !0, onClick: i }),
            }),
        ],
    });
    return (0, d.jsx)(i8, {
        className: l2.sL,
        children: () => [
            (0, d.jsx)(i5.A, { guildTemplate: t }, "template"),
            (0, d.jsx)("div", { className: l2.KJ, children: l }, "contents"),
        ],
    });
}
function l8(e, t, n) {
    (e.preventDefault(),
        L.default.track(D.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        }));
    let i = eJ.default.getFingerprint(),
        l = null != i ? i : eJ.default.getId();
    eR.A.openMobileApp(n.state === lm.QB.RESOLVED ? t : void 0, l);
}
function l5(e) {
    let { code: t } = e,
        n = (0, x.bG)([eb.A], () => eb.A.getGuildTemplate(t));
    return (h.useEffect(() => {
        (0, U.d0)("guild_template_mobile");
    }, []),
    null == n || n.state === lm.QB.RESOLVING)
        ? (0, d.jsx)(P.Ay, { children: (0, d.jsx)(eG.y, {}) })
        : n.state === lm.QB.RESOLVED
          ? (0, d.jsxs)(P.Ay, {
                children: [
                    (0, d.jsx)(lZ.A, { guildTemplate: n, tall: !0 }),
                    (0, d.jsx)("div", {
                        className: Y.QX,
                        children: (0, d.jsx)(H.$, {
                            text: X.intl.string(X.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => l8(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, d.jsx)(e6, {
                text: X.intl.string(X.t["e/rZ2n"]),
                buttonCta: X.intl.string(X.t.HAvYn0),
                onClick: (e) => l8(e, t, n),
            });
}
(x.Ay.initialize(), n(938796));
var l7 = n(821418),
    l9 = n(665260),
    l6 = n(362474),
    se = n(695366),
    st = n(964486),
    sn = n(374063),
    si = n(921037),
    sl = (((a = {}).IN_CONTENT = "in_content"), (a.BELOW_CONTENT = "below_content"), a);
let ss = (0, tS.mj)({
    name: "2026-09-silp-direct-to-discoverable",
    kind: "installation",
    defaultConfig: { placement: null },
    variations: { 0: { placement: null }, 1: { placement: "in_content" }, 2: { placement: "below_content" } },
});
var sr = (((o = {}).IN_CONTENT = "in_content"), (o.BELOW_CONTENT = "below_content"), o);
let sa = (0, tS.mj)({
    name: "2026-09-silp-app-opened-direct-to-discoverable",
    kind: "installation",
    defaultConfig: { placement: null },
    variations: { 0: { placement: null }, 1: { placement: "in_content" }, 2: { placement: "below_content" } },
});
var so = n(320448),
    sc = n(975807),
    su = n(818348),
    sd = n(438865);
function sh(e) {
    let { inviteCode: t, guildId: n, className: i, belowContent: l = !1, location: s } = e;
    function r() {
        (L.default.track(
            D.HAw.INVITE_CTA_CLICKED,
            { action: "browse_other_servers", invite_code: t, guild_id: n, location: s },
            { flush: !0 },
        ),
            (0, sc.A)(su.Tk.DISCOVER));
    }
    return l
        ? (0, d.jsx)("div", {
              className: V()(i, sd.B),
              children: (0, d.jsx)(H.$, {
                  text: X.intl.string(X.t["7itT3E"]),
                  onClick: r,
                  variant: "overlay-secondary",
                  icon: { type: "icon", asset: so._ },
                  iconPosition: "end",
                  size: "sm",
              }),
          })
        : (0, d.jsx)("div", {
              className: V()(i, Y.Ot),
              children: (0, d.jsx)(H.$, {
                  text: X.intl.string(X.t["7itT3E"]),
                  onClick: r,
                  variant: "secondary",
                  fullWidth: !0,
              }),
          });
}
var sm = n(804070);
let sg = (0, tS.mj)({
    name: "2026-09-silp-desktop-app-upsell",
    kind: "user",
    defaultConfig: { label: null },
    variations: { 1: { label: "download_discord_app" }, 2: { label: "download_app" }, 3: { label: "get_discord" } },
});
var sf = (((c = {}).POPOVER = "popover"), (c.SIDEBAR = "sidebar"), c);
let sp = (0, tS.mj)({
    name: "2026-09-invite-silp-education",
    kind: "installation",
    defaultConfig: { variant: null },
    variations: { 1: { variant: "popover" }, 2: { variant: "sidebar" } },
});
function sx(e, t) {
    let { variant: n } = sp.useConfig({ location: t });
    return null == e ||
        null == e.guild ||
        (null != e.type && e.type !== tu.Xd.GUILD) ||
        null != e.guild_scheduled_event ||
        null != e.target_type
        ? null
        : (sp.getConfig({ location: `${t}.eligible` }), n);
}
var sE =
    (((u = {}).POPOVER_LEARN_MORE = "whats_discord_popover_learn_more"),
    (u.POPOVER_DISMISS = "whats_discord_popover_dismiss"),
    (u.SIDEBAR_ROW = "whats_discord_sidebar_row"),
    (u.PANEL_CLOSE = "whats_discord_panel_close"),
    u);
function sA(e, t) {
    L.default.track(D.HAw.INVITE_CTA_CLICKED, { action: t, invite_code: e.code, guild_id: e.guild?.id });
}
var s_ = n(333007),
    sj = n(408278),
    sN = n(972213),
    sv = n(364522),
    sC = n(607470),
    sI = n(75298);
function sT(e) {
    let { title: t, description: n, video: i, poster: l, mediaEnabled: s } = e;
    return (0, d.jsxs)("li", {
        className: sI.N4,
        children: [
            (0, d.jsx)("div", {
                className: sI.HW,
                children: s
                    ? (0, d.jsx)(sC.A, {
                          className: sI.b5,
                          src: i,
                          poster: l,
                          autoPlay: !0,
                          loop: !0,
                          muted: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "auto",
                      })
                    : null,
            }),
            (0, d.jsxs)("div", {
                className: sI.oo,
                children: [
                    (0, d.jsx)(M.E, { variant: "text-md/semibold", color: "text-strong", children: X.intl.string(t) }),
                    (0, d.jsx)(M.E, { variant: "text-md/medium", color: "text-subtle", children: X.intl.string(n) }),
                ],
            }),
        ],
    });
}
let sS = [
    {
        id: "chat",
        title: X.t.DHLE0q,
        description: X.t.putVLl,
        video: "https://cdn.discordapp.com/assets/content/c280207b5f7698daf392b8a1d7ef06f6abd4756921cf279e43ac1b4df7435b1e.mp4",
        poster: "https://cdn.discordapp.com/assets/content/ed1c5cc896fda218645dbd7ddd9c15bdbe3672cef38a6c345f33f94e4cdabb09.png",
    },
    {
        id: "stream",
        title: X.t.CmLD50,
        description: X.t.fAU31r,
        video: "https://cdn.discordapp.com/assets/content/924896af22b016a248979482b628d411eb63cc2229f1b3c05e7d13343d6a490a.mp4",
        poster: "https://cdn.discordapp.com/assets/content/ab297c5f0072da3d2e8fc411dc7bacf2fec76239083cb074f25d845050b67ee3.png",
    },
    {
        id: "voice",
        title: X.t.Z70vcv,
        description: X.t["pqph/A"],
        video: "https://cdn.discordapp.com/assets/content/ff7a797aa208c9f706e10b51001ea0a51bbc462de5ee44b8066ccc5038d1f4a8.mp4",
        poster: "https://cdn.discordapp.com/assets/content/5a1beb8894cb9334ce5c91d9f6344ef9779c57e513d1288eb0d9f80e4803fc66.png",
    },
];
function sy(e) {
    let { invite: t, open: n, edge: i, returnRef: l, onRequestClose: s, translucent: r = !1, className: a } = e,
        o = h.useRef(null);
    h.useEffect(() => {
        if (!n) return;
        let e = l.current;
        return (
            o.current?.focus({ preventScroll: !0 }),
            () => {
                e?.focus({ preventScroll: !0 });
            }
        );
    }, [n, l]);
    let c = h.useCallback(() => {
        (sA(t, sE.PANEL_CLOSE), s());
    }, [t, s]);
    return (0, s_.createPortal)(
        (0, d.jsx)(tH.N, {
            theme: D.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, d.jsxs)("aside", {
                    "data-theme": D.NJ8.DARK,
                    "aria-label": X.intl.string(X.t["FlY+Rz"]),
                    "aria-hidden": !n,
                    className: V()(sI.nd, "start" === i ? sI.BZ : sI.YQ, n && sI.ZC, r && sI.sJ, e, a),
                    children: [
                        (0, d.jsx)("div", {
                            className: sI.VN,
                            children: (0, d.jsx)(t3.m, {
                                text: X.intl.string(X.t.cpT0Cq),
                                children: (0, d.jsx)(sj.K, {
                                    buttonRef: o,
                                    icon: sN.XLargeIcon,
                                    "aria-label": X.intl.string(X.t.cpT0Cq),
                                    variant: "secondary",
                                    size: "sm",
                                    onClick: c,
                                }),
                            }),
                        }),
                        (0, d.jsx)(sv.Ip, {
                            className: sI.XG,
                            children: (0, d.jsxs)("div", {
                                className: sI.Qs,
                                children: [
                                    (0, d.jsx)(eP.D, {
                                        variant: "heading-xl/semibold",
                                        color: "text-strong",
                                        children: X.intl.string(X.t.YCIfhC),
                                    }),
                                    (0, d.jsx)("ul", {
                                        className: sI.qT,
                                        children: sS.map((e) => (0, d.jsx)(sT, { ...e, mediaEnabled: n }, e.id)),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
        }),
        document.body,
    );
}
var sb = n(383072),
    sR = n(789645),
    sL = n(915089),
    sO = n(479789);
function sD(e) {
    let { visible: t, onLearnMore: n, onDismiss: i, learnMoreRef: l } = e,
        s = (0, sL.GV)();
    return (0, s_.createPortal)(
        (0, d.jsx)(tH.N, {
            theme: D.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, d.jsxs)("section", {
                    "data-theme": D.NJ8.DARK,
                    "aria-labelledby": s,
                    "aria-hidden": !t,
                    className: V()(sO.oO, t && sO.IZ, e),
                    children: [
                        (0, d.jsx)("div", {
                            className: sO.VN,
                            children: (0, d.jsx)(t3.m, {
                                text: X.intl.string(X.t.cpT0Cq),
                                children: (0, d.jsx)(sj.K, {
                                    icon: sR.P,
                                    "aria-label": X.intl.string(X.t.cpT0Cq),
                                    variant: "secondary",
                                    size: "sm",
                                    onClick: i,
                                }),
                            }),
                        }),
                        (0, d.jsx)("div", {
                            className: sO.fA,
                            children: (0, d.jsx)(sb.l, { alt: "", ariaHidden: !0, width: 144, height: 81 }),
                        }),
                        (0, d.jsxs)("div", {
                            className: sO.Qq,
                            children: [
                                (0, d.jsx)(iJ.F, {
                                    forceLevel: 2,
                                    children: (0, d.jsx)(eP.D, {
                                        id: s,
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: X.intl.string(X.t["FlY+Rz"]),
                                    }),
                                }),
                                (0, d.jsx)(M.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: X.intl.string(X.t.lgHr73),
                                }),
                            ],
                        }),
                        (0, d.jsx)(H.$, {
                            buttonRef: l,
                            text: X.intl.string(X.t.hvVgAZ),
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: n,
                        }),
                    ],
                }),
        }),
        document.body,
    );
}
function sk(e) {
    let { invite: t, children: n } = e,
        i = h.useRef(null),
        [l, s] = h.useState(!1),
        [r, a] = h.useState(!1),
        o = h.useCallback(() => {
            (sA(t, sE.POPOVER_LEARN_MORE), s(!0));
        }, [t]),
        c = h.useCallback(() => {
            (sA(t, sE.POPOVER_DISMISS), a(!0));
        }, [t]),
        u = h.useCallback(() => s(!1), []);
    return (0, d.jsxs)(d.Fragment, {
        children: [
            n,
            r ? null : (0, d.jsx)(sD, { visible: !l, learnMoreRef: i, onLearnMore: o, onDismiss: c }),
            (0, d.jsx)(sy, { invite: t, open: l, edge: "end", returnRef: i, onRequestClose: u }),
        ],
    });
}
var sw = n(996682);
function sG(e) {
    let { color: t = e4.A.colors.ICON_STRONG, "aria-label": n, "aria-hidden": i, role: l, width: s, height: r } = e,
        a = h.useMemo(() => (0, eL.H)({ width: s, height: r, intrinsicWidth: 200, intrinsicHeight: 30 }), [s, r]);
    return (0, d.jsx)("svg", {
        ...(0, sw.A)({ "aria-label": n, "aria-hidden": i, role: l }),
        style: a,
        viewBox: "0 0 200 30",
        fill: t.css,
        children: (0, d.jsx)("path", {
            fill: t.css,
            d: "M25.55 0c-.4.69-.74 1.4-1.06 2.12-3.02-.45-6.1-.45-9.13 0C15.06 1.4 14.7.7 14.3 0a33.4 33.4 0 0 0-8.23 2.52c-5.2 7.65-6.6 15.1-5.9 22.44A33.16 33.16 0 0 0 10.26 30a24 24 0 0 0 2.16-3.45 21.94 21.94 0 0 1-3.4-1.61l.83-.63a23.85 23.85 0 0 0 20.17 0c.27.22.55.44.84.63a21.72 21.72 0 0 1-3.41 1.61c.62 1.21 1.34 2.37 2.16 3.46a33.14 33.14 0 0 0 10.09-5.02c.83-8.52-1.42-15.91-5.92-22.45A32.9 32.9 0 0 0 25.55.02V0ZM13.3 20.44c-1.96 0-3.6-1.77-3.6-3.95 0-2.19 1.57-3.96 3.6-3.96 2.01 0 3.62 1.78 3.59 3.96-.04 2.18-1.59 3.95-3.59 3.95Zm13.25 0c-1.98 0-3.59-1.77-3.59-3.95 0-2.19 1.57-3.96 3.59-3.96 2.02 0 3.61 1.78 3.58 3.96-.03 2.18-1.58 3.95-3.58 3.95ZM72.28 5.48a17.76 17.76 0 0 0-7.26-1.33H53.15V25.3h11.01c3.1 0 5.7-.48 7.8-1.42a10.38 10.38 0 0 0 4.7-3.86 9.95 9.95 0 0 0 1.53-5.43c.03-1.9-.48-3.78-1.48-5.42a9.74 9.74 0 0 0-4.43-3.7Zm-3.79 13c-1.03.96-2.51 1.44-4.44 1.44h-3.29V9.53h3.71c1.87 0 3.26.47 4.2 1.38.94.98 1.44 2.3 1.38 3.67a5.1 5.1 0 0 1-1.55 3.91h-.01Zm40.37-2.33c.97.86 1.45 2.12 1.46 3.79a5 5 0 0 1-2.42 4.36c-1.6 1.07-3.9 1.6-6.87 1.6-1.7 0-3.4-.22-5.06-.64a16.21 16.21 0 0 1-4.45-1.83V18.4c1.21.87 2.56 1.51 4 1.89 1.58.47 3.22.73 4.86.73.57.04 1.14-.07 1.66-.28.38-.19.56-.43.56-.68 0-.28-.1-.55-.3-.76a2.74 2.74 0 0 0-1.19-.51l-3.65-.81c-2.09-.48-3.57-1.15-4.45-2a4.46 4.46 0 0 1-1.3-3.38 4.46 4.46 0 0 1 1.15-3.04 7.45 7.45 0 0 1 3.28-2c1.62-.51 3.3-.75 5-.72 1.58-.01 3.15.17 4.68.55 1.24.29 2.43.75 3.53 1.38v4.75a13.17 13.17 0 0 0-3.3-1.34 15.1 15.1 0 0 0-3.85-.5c-1.9 0-2.86.31-2.86.95 0 .3.17.56.44.68.52.22 1.06.38 1.62.47l3.04.54c1.98.35 3.45.95 4.43 1.82h-.01Zm20.2 3.49c.88-.26 1.73-.62 2.53-1.08v5.35a14.94 14.94 0 0 1-7.76 2c-2.18.06-4.35-.38-6.33-1.28a9.1 9.1 0 0 1-3.94-3.45 9.22 9.22 0 0 1-1.3-4.89 8.9 8.9 0 0 1 1.36-4.86 9.19 9.19 0 0 1 4.02-3.36c2-.86 4.15-1.28 6.32-1.23 3.05 0 5.57.63 7.58 1.9v5.54a9.95 9.95 0 0 0-5.53-1.63c-1.88 0-3.36.34-4.42 1.03a3.08 3.08 0 0 0-.05 5.37c1.03.69 2.54 1.04 4.5 1.04 1.02 0 2.03-.15 3-.44l.01-.01Zm22.52-11.58c-4-1.61-8.48-1.61-12.48 0a8.7 8.7 0 0 0-5.38 8.2 9.08 9.08 0 0 0 1.38 4.92 9.4 9.4 0 0 0 4.03 3.45 15.95 15.95 0 0 0 12.44-.01 9.34 9.34 0 0 0 4-3.45 9.15 9.15 0 0 0 1.37-4.93 8.77 8.77 0 0 0-1.37-4.86 9.2 9.2 0 0 0-3.98-3.32h-.01Zm-3.21 11.2a4.08 4.08 0 0 1-3.05 1.1 4.2 4.2 0 0 1-3.04-1.1 3.91 3.91 0 0 1-1.11-2.91 3.82 3.82 0 0 1 1.1-2.89 4.21 4.21 0 0 1 3.05-1.07 4.18 4.18 0 0 1 3.05 1.07 3.8 3.8 0 0 1 1.1 2.89 3.93 3.93 0 0 1-1.1 2.92Zm24.08-12.04a5.1 5.1 0 0 1 2.77.73v6.53c-.91-.53-1.96-.8-3.02-.75-1.62 0-2.87.48-3.74 1.46-.87.98-1.3 2.5-1.3 4.55v5.56h-7.46V7.62h7.3v5.62c.4-2.06 1.05-3.57 1.96-4.55.89-.97 2.15-1.5 3.47-1.47h.02Zm20.08-3.68v7.88c-1.21-3.06-3.6-4.6-7.14-4.6a8.38 8.38 0 0 0-7.74 4.69 10.6 10.6 0 0 0-1.08 4.99 11 11 0 0 0 1.02 4.82 8.05 8.05 0 0 0 2.92 3.35 8 8 0 0 0 4.42 1.23c1.66.04 3.3-.36 4.73-1.18a7.06 7.06 0 0 0 2.88-3.4v3.97H200V3.54h-7.46Zm-1.1 15.62a4.16 4.16 0 0 1-3.04 1.08 4.12 4.12 0 0 1-2.98-1.08 3.72 3.72 0 0 1-1.14-2.81 3.67 3.67 0 0 1 1.13-2.8 4.8 4.8 0 0 1 6.04 0 3.6 3.6 0 0 1 1.14 2.76 3.8 3.8 0 0 1-1.14 2.85ZM88.2 6.2c0 1.83-1.66 3.31-3.71 3.31s-3.71-1.48-3.71-3.31c0-1.84 1.66-3.32 3.71-3.32s3.71 1.48 3.71 3.32Zm0 5.6v13.6h-7.43V11.8c2.38.99 5.06.99 7.43 0Z",
        }),
    });
}
var sP = n(540747),
    sU = n(405494);
function sB(e) {
    let { expanded: t, onClick: n, innerRef: i } = e;
    return (0, d.jsxs)(n2.D, {
        innerRef: i,
        className: V()(sU.nM, t && sU.cE),
        "aria-expanded": t,
        onClick: n,
        children: [
            (0, d.jsx)("div", {
                className: sU.zR,
                children: (0, d.jsx)(sb.l, { alt: "", ariaHidden: !0, width: 100, height: 56 }),
            }),
            (0, d.jsxs)("div", {
                className: sU.qg,
                children: [
                    (0, d.jsx)(M.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: X.intl.string(X.t["FlY+Rz"]),
                    }),
                    (0, d.jsx)(M.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: X.intl.string(X.t.lgHr73),
                    }),
                ],
            }),
            (0, d.jsx)("div", {
                className: sU.o2,
                children: (0, d.jsx)(so._, { size: "custom", width: 16, height: 16 }),
            }),
        ],
    });
}
function sF(e) {
    let { invite: t, header: n, children: i } = e,
        l = h.useRef(null),
        [s, r] = h.useState(!1);
    (0, sP.Y)();
    let a = h.useCallback(() => {
            (s || sA(t, sE.SIDEBAR_ROW), r(!s));
        }, [t, s]),
        o = h.useCallback(() => r(!1), []);
    return (0, s_.createPortal)(
        (0, d.jsx)(tH.N, {
            theme: D.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsxs)("div", {
                            "data-theme": D.NJ8.DARK,
                            className: V()(sU.pz, e),
                            children: [
                                (0, d.jsx)(sG, { "aria-hidden": !0, width: 133, height: 20 }),
                                (0, d.jsx)(sv.Ip, {
                                    className: sU.XG,
                                    children: (0, d.jsxs)("div", {
                                        className: sU.Qs,
                                        children: [n, (0, d.jsx)("div", { className: sU.F7, children: i })],
                                    }),
                                }),
                                (0, d.jsx)(sB, { innerRef: l, expanded: s, onClick: a }),
                            ],
                        }),
                        (0, d.jsx)(sy, {
                            invite: t,
                            open: s,
                            edge: "start",
                            returnRef: l,
                            onRequestClose: o,
                            className: sU.nd,
                            translucent: !0,
                        }),
                    ],
                }),
        }),
        document.body,
    );
}
function sV(e) {
    let { mode: t, invite: n, location: i, transitionTo: l, onLoginStart: s, children: r } = e;
    return (0, tW.A)("(min-width: 900px)")
        ? "login" === t
            ? (0, d.jsx)(sF, {
                  invite: n,
                  header: (0, d.jsx)("div", { className: Y.S3, children: (0, d.jsx)(i2.A, { invite: n }) }),
                  children: (0, d.jsx)(lC, {
                      invite: n,
                      isEmbedded: !0,
                      authBoxClassName: sU.sL,
                      location: i,
                      transitionTo: l,
                  }),
              })
            : (0, d.jsx)(sF, {
                  invite: n,
                  children: (0, d.jsx)(lz, {
                      invite: n,
                      authBoxClassName: sU.sL,
                      onLoginStart: s,
                      location: i,
                      transitionTo: l,
                  }),
              })
        : r;
}
var sM = n(930839),
    sH = n(53505);
x.Ay.initialize();
let sW = "register",
    sK = "login";
function sQ(e) {
    let { message: t, onClick: n, invite: i, className: l, notice: s, secondaryAction: r } = e,
        a = i?.guild_scheduled_event != null,
        o = a ? "active" : "primary";
    return l1.VP
        ? (0, d.jsx)("div", {
              className: l ?? (a ? Y.QX : Y.eT),
              children: (0, d.jsxs)(ew.B, {
                  gap: 8,
                  children: [
                      s,
                      null == r
                          ? (0, d.jsx)(H.$, { text: t, onClick: n, variant: o, fullWidth: !0 })
                          : (0, d.jsxs)(Z.e, {
                                fullWidth: !0,
                                children: [
                                    (0, d.jsx)(H.$, { text: t, onClick: n, variant: o }),
                                    (0, d.jsx)(H.$, { text: r.text, onClick: r.onClick, variant: "secondary" }),
                                ],
                            }),
                  ],
              }),
          })
        : (0, d.jsx)(P.KE, { className: l ?? Y.eT });
}
function sz(e) {
    let t = tR("InviteAccept");
    return (0, d.jsx)(sQ, { ...e, message: tL(t) });
}
function sX(e) {
    let { invite: t, transitionTo: n, location: i } = e,
        l = sx(t, "InviteLogin"),
        s = (0, d.jsx)(lC, { invite: t, transitionTo: n, location: i });
    switch (l) {
        case sf.POPOVER:
            return (0, d.jsx)(sk, { invite: t, children: s });
        case sf.SIDEBAR:
            return (0, d.jsx)(sV, { mode: "login", invite: t, location: i, transitionTo: n, children: s });
        default:
            return s;
    }
}
function sq(e) {
    let { invite: t, onLoginStart: n, onRegister: i, location: l, transitionTo: s } = e,
        r = sx(t, "InviteRegister"),
        a = (0, d.jsx)(lz, { invite: t, onLoginStart: n, onRegister: i, location: l, transitionTo: s });
    switch (r) {
        case sf.POPOVER:
            return (0, d.jsx)(sk, { invite: t, children: a });
        case sf.SIDEBAR:
            return (0, d.jsx)(sV, {
                mode: "register",
                invite: t,
                onLoginStart: n,
                location: l,
                transitionTo: s,
                children: a,
            });
        default:
            return a;
    }
}
function sY(e) {
    let { invite: t, inviteKey: n, handleAccept: i, handleDefaultTransition: l, expirationLocation: s } = e,
        r = (0, x.bG)([tn.A], () => (t.state === D.elq.ERROR ? tn.A.getInviteError(n) : void 0)),
        a = t.guild_scheduled_event,
        o = r?.code === D.t02.INVALID_CANNOT_FRIEND_SELF,
        c = l1.VP && !o && tb(t),
        u = null == a ? (0, d.jsx)(sm.A, { invite: t, location: s }) : null,
        { label: m } = sg.useConfig({ location: "InviteAuthenticated" }),
        g = l1.VP && !nU.isPlatformEmbedded && !o;
    g && sg.getConfig({ location: "InviteAuthenticated.eligible" });
    let f =
        g && null != m
            ? {
                  text: (function (e) {
                      switch (e) {
                          case "download_discord_app":
                              return X.intl.string(X.t.jCQlbu);
                          case "download_app":
                              return X.intl.string(X.t["BK8LK+"]);
                          case "get_discord":
                              return X.intl.string(X.t.BjfDQq);
                      }
                  })(m),
                  onClick: function () {
                      (L.default.track(D.HAw.INVITE_CTA_CLICKED, {
                          action: "download_app",
                          invite_code: t.code,
                          guild_id: t.guild?.id,
                      }),
                          window.open((0, sH.SU)(), "_blank"),
                          L.default.track(D.HAw.DOWNLOAD_APP, {
                              platform: (0, sH.Vf)(),
                              ptb: !1,
                              released: !0,
                              referring_location: "Invite Landing Page",
                              qr_code: !1,
                          }));
                  },
              }
            : void 0;
    return (
        h.useEffect(() => {
            sM.A.requestDrain();
        }, []),
        (0, d.jsxs)("div", {
            children: [
                (0, d.jsxs)(P.Ay, {
                    children: [
                        null != a
                            ? (0, d.jsx)(lF, { channel: t.channel, guildScheduledEvent: a })
                            : (0, d.jsx)(i2.A, { invite: t }),
                        null != r &&
                            (0, d.jsx)("div", {
                                className: Y.QX,
                                role: "alert",
                                children: (0, d.jsxs)(M.E, {
                                    variant: "text-sm/medium",
                                    color: "text-feedback-critical",
                                    style: { display: "flex", alignItems: "center", gap: 4 },
                                    children: [
                                        (0, d.jsx)(se.E, {
                                            size: "custom",
                                            width: 14,
                                            height: 14,
                                            color: "currentColor",
                                        }),
                                        " ",
                                        (0, t1.s)(r.code),
                                    ],
                                }),
                            }),
                        c
                            ? (0, d.jsx)(sz, {
                                  invite: t,
                                  onClick: i,
                                  className: null != r ? Y.QX : void 0,
                                  notice: u,
                                  secondaryAction: f,
                              })
                            : (0, d.jsx)(sQ, {
                                  invite: t,
                                  message: X.intl.string(o ? X.t.fIv16B : X.t.ohMvm1),
                                  onClick: o ? l : i,
                                  className: null != r ? Y.QX : void 0,
                                  notice: u,
                                  secondaryAction: f,
                              }),
                    ],
                }),
                null != a &&
                    null != t.guild &&
                    (0, d.jsx)(P.Ay, {
                        className: Y.QX,
                        children: (0, d.jsx)(lM, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                    }),
            ],
        })
    );
}
function s$(e) {
    return l1.VP
        ? (0, d.jsx)(sZ, { ...e })
        : (0, d.jsxs)(P.Ay, {
              children: [(0, d.jsx)(i2.A, { invite: e.invite }), (0, d.jsx)(P.KE, { className: Y.eT })],
          });
}
function sZ(e) {
    let { invite: t, inviteKey: n, rpcConnected: i, onContinue: l } = e,
        s = sa.useConfig({ location: "InviteAppOpened" }).placement;
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsxs)(P.Ay, {
                children: [
                    (0, d.jsx)(i2.A, { invite: t }),
                    (0, d.jsx)("div", {
                        className: Y.QX,
                        children: (0, d.jsx)(H.$, {
                            text: X.intl.string(X.t.UQvCf7),
                            onClick: function () {
                                (L.default.track(D.HAw.INVITE_CTA_CLICKED, {
                                    action: "open_app",
                                    invite_code: t.code,
                                    guild_id: t.guild?.id,
                                }),
                                    i ? _.Ay.openNativeAppModal(n) : _.Ay.openApp(n));
                            },
                            variant: "primary",
                            fullWidth: !0,
                        }),
                    }),
                    (0, d.jsx)("div", {
                        className: Y.Ot,
                        children:
                            s === sr.IN_CONTENT
                                ? (0, d.jsx)(sh, {
                                      inviteCode: t.code,
                                      guildId: t.guild?.id,
                                      location: "InviteAppOpened",
                                  })
                                : (0, d.jsx)(H.$, {
                                      text: X.intl.string(X.t["2ixEBi"]),
                                      onClick: function () {
                                          (L.default.track(D.HAw.INVITE_CTA_CLICKED, {
                                              action: "continue_in_browser",
                                              invite_code: t.code,
                                              guild_id: t.guild?.id,
                                          }),
                                              l?.());
                                      },
                                      variant: "secondary",
                                      fullWidth: !0,
                                  }),
                    }),
                ],
            }),
            s === sr.BELOW_CONTENT &&
                (0, d.jsx)(sh, {
                    inviteCode: t.code,
                    guildId: t.guild?.id,
                    className: Y.QX,
                    belowContent: !0,
                    location: "InviteAppOpened",
                }),
        ],
    });
}
function sJ(e) {
    let { title: t } = e;
    return (0, d.jsxs)(P.Ay, { children: [(0, d.jsx)(P.hE, { children: t }), (0, d.jsx)(P.CK, {})] });
}
function s0(e) {
    let { banned: t, invite: n, handleDefaultTransition: i } = e,
        l = ss.useConfig({ location: "InviteInvalid" }).placement;
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsxs)(P.Ay, {
                children: [
                    (0, d.jsx)(P.hE, { className: V()(Y.Ot, Y.QB), children: X.intl.string(X.t.kux01N) }),
                    (0, d.jsx)(P.tK, { children: t ? X.intl.string(X.t["5AkWAd"]) : X.intl.string(X.t["+qUJAj"]) }),
                    (0, d.jsx)(sQ, { message: X.intl.string(X.t.fIv16B), onClick: i }),
                    l === sl.IN_CONTENT &&
                        (0, d.jsx)(sh, { inviteCode: n.code, guildId: n.guild?.id, location: "ExpiredInvite" }),
                    (0, d.jsx)("div", {
                        className: Y.Ot,
                        style: { textAlign: "left" },
                        children: (0, d.jsx)(em.Q, {
                            size: "sm",
                            textVariant: "text-sm/medium",
                            text: X.intl.string(X.t.urIwn4),
                            onClick: () => window.open(nZ.A.getArticleURL(D.MVz.INVALID_INVITES), "_blank"),
                        }),
                    }),
                ],
            }),
            l === sl.BELOW_CONTENT &&
                (0, d.jsx)(sh, {
                    inviteCode: n.code,
                    guildId: n.guild?.id,
                    className: Y.QX,
                    belowContent: !0,
                    location: "ExpiredInvite",
                }),
        ],
    });
}
function s1(e) {
    let { handleDefaultTransition: t } = e;
    return (0, d.jsxs)(P.Ay, {
        children: [
            (0, d.jsx)(P.hE, { children: X.intl.string(X.t.fOc4gn) }),
            (0, d.jsx)(sQ, { message: X.intl.string(X.t.fIv16B), onClick: t }),
        ],
    });
}
var s2 = n(334465);
let s3 = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_dsa_webform",
    label: "Safety Experience Unauthenticated Report Form",
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 1, label: "EU user", config: { enabled: !0 } },
        { id: 2, label: "DSA E2E testing user", config: { enabled: !0 } },
    ],
});
x.Ay.initialize();
var s4 = n(163050),
    s8 = n(498206);
x.Ay.initialize();
var s5 = n(701273);
function s7(e) {
    n.g.location.assign(e);
}
(x.Ay.initialize(), n(426620), x.Ay.initialize());
let s9 = iT(lC),
    s6 = iT(function (e) {
        let { transitionTo: t } = e,
            n = h.useCallback(
                (e) => {
                    let n;
                    ((n = (0, s2.B)(e, { path: D.BVt.CHANNEL(nK.pv.guildId(), nK.pv.channelId()) })),
                    +(n?.params?.channelId !== T.VV.ROLE_SUBSCRIPTIONS))
                        ? (t ?? eF.pX)(e)
                        : eF.bG(e);
                },
                [t],
            ),
            { isAuthenticated: i, loginStatus: l } = (0, x.cf)([eJ.default], () => ({
                isAuthenticated: eJ.default.isAuthenticated(),
                loginStatus: eJ.default.getLoginStatus(),
            })),
            { location: s, redirectTo: r } = e,
            [a, o] = h.useState(i);
        function c(e) {
            let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
            ((0, v.Qh)({ handoffKey: t, handoffToken: n, handoffSource: i }), o(!1));
        }
        return ((0, st.Ay)(() => {
            if (null != s) {
                let { handoff_key: e, handoff_token: t } = (0, m.parse)(s.search);
                if (null != e && null != t) {
                    let n = null != r ? b(r) : void 0;
                    a
                        ? E.A.logout("handoff", null).finally(() => {
                              c({ handoffKey: e, handoffToken: t, handoffSource: n });
                          })
                        : c({ handoffKey: e, handoffToken: t, handoffSource: n });
                }
            }
        }),
        a || l === D.aUe.LOGGING_IN)
            ? (0, d.jsx)(P.Ay, { children: (0, d.jsx)(eG.y, {}) })
            : (0, d.jsx)(lC, { ...e, transitionTo: n });
    }),
    re = iT(function (e) {
        let { inviteKey: t, location: n, transitionTo: i, login: l } = e,
            s = h.useMemo(() => (0, e1.m0)(t), [t]),
            r = (0, x.bG)([tn.A], () => tn.A.getInvite(t)),
            a = (0, x.bG)([iG.A], () => iG.A.getState(s)),
            o = (0, x.bG)([eJ.default], () => eJ.default.isAuthenticated()),
            c = (0, x.bG)([eg.A], () => eg.A.defaultRoute),
            u = (0, x.bG)([lb], () => lb.isUnderageAnonymous()),
            m = (function (e) {
                let [t, n] = h.useState(!1);
                return (
                    h.useEffect(() => {
                        let e = !1;
                        return (
                            eT().then((t) => {
                                e || "denied" !== t || n(!0);
                            }),
                            () => {
                                e = !0;
                            }
                        );
                    }, []),
                    t || e === D.fAW.OPEN_FAIL
                );
            })(a),
            g = (function (e) {
                let [t, n] = h.useState(!1);
                return (
                    h.useEffect(() => {
                        let e = setTimeout(() => n(!0), 500);
                        return () => clearTimeout(e);
                    }, []),
                    !e && !t
                );
            })(m),
            [f, p] = h.useState(!1);
        h.useLayoutEffect(() => {
            (a === D.fAW.OPEN || r?.state === D.elq.APP_OPENED) && p(!0);
        }, [r?.state, a]);
        let E = l ? sK : sW,
            A = h.useCallback((e) => _.Ay.getInviteContext(e, r), [r]),
            j = h.useCallback(
                (e) => {
                    null != r &&
                        (null != r.channel || e?.channel != null) &&
                        (r.guild?.id != null
                            ? _.Ay.transitionToInviteOnboarding(e ?? r, { transitionTo: i })
                            : _.Ay.transitionToInvite(e ?? r, { transitionTo: i }));
                },
                [r, i],
            ),
            v = h.useCallback(() => {
                (L.default.track(D.HAw.INVITE_CTA_CLICKED, {
                    action: "accept_invite",
                    invite_code: r?.code,
                    guild_id: r?.guild?.id,
                }),
                    _.Ay.acceptInvite({
                        inviteKey: t,
                        context: A(D.S3d.INVITE),
                        skipOnboarding: !0,
                        callback: (e) => {
                            (er(e), null != e.channel && (m ? j(e) : _.Ay.openApp(t, e.channel.id)));
                        },
                    }).catch((e) => {
                        (0, sn.mX)(e?.code);
                    }));
            }, [t, A, r?.code, r?.guild?.id, m, j]),
            C = h.useCallback(() => {
                i(c);
            }, [c, i]);
        ((0, st.Ay)(() => {
            let e = eJ.default.getAnalyticsToken();
            if (
                (null != e
                    ? N.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eJ.default.getId() })
                    : eJ.default.isAuthenticated() && nq.rQ({ withAnalyticsToken: !0 }).catch(D.tEg),
                L.default.track(D.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }),
                (0, U.d0)("invite"),
                l1.VP || e0.A.launch("discord://" + D.BVt.INVITE(t), () => void 0),
                !l && u)
            ) {
                let { baseCode: e } = (0, e1.y$)(t);
                (0, eF.bG)(D.BVt.INVITE_LOGIN(e));
            }
        }),
            h.useEffect(() => {
                r?.state === D.elq.APP_NOT_OPENED && j();
            }, [r?.state, j]));
        let I = h.useRef(!1),
            T = h.useCallback((e) => {
                I.current = !0 === e;
            }, []);
        if (
            (!(function (e) {
                let {
                        invite: t,
                        inviteKey: n,
                        authenticated: i,
                        nativeAppState: l,
                        mode: s,
                        getAcceptInviteContext: r,
                        handleContinue: a,
                        transitionTo: o,
                        joinDeferredRef: c,
                    } = e,
                    u = (0, iZ.Ay)(i),
                    d = (0, iZ.Ay)(l);
                (h.useEffect(() => {
                    if (s === sK && i && !1 === u) {
                        let e = eJ.default.getFingerprint();
                        if (null != e) {
                            let i = (0, eZ.d)(e);
                            L.default.track(D.HAw.INVITE_LOGIN_SUCCESSFUL, {
                                invite_code: (0, e1.m0)(n),
                                guild_id: t?.guild?.id,
                                channel_id: t?.channel?.id,
                                inviter_id: t?.inviter?.id,
                                prev_user_id: i,
                            });
                        }
                        _.Ay.acceptInvite({
                            inviteKey: n,
                            context: r(D.S3d.INVITE),
                            skipOnboarding: !0,
                            callback: a,
                        }).catch((e) => {
                            (0, sn.mX)(e?.code);
                        });
                    }
                }, [i, u, s, r, a, t, n]),
                    h.useEffect(() => {
                        if (null != t && s === sW && i && !1 === u) {
                            let { channel: e } = t;
                            if (null != e)
                                if (((0, nu.C)(nd.zY.INVITE_UNCLAIMED), null != t.guild)) {
                                    let e = (0, l9.Lt)(t.flags ?? 0, l7.Q.IS_APPLICATION_BYPASS),
                                        n =
                                            t.guild.features?.includes(
                                                D.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED,
                                            ) &&
                                            t.guild.features?.includes(
                                                D.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL,
                                            );
                                    c.current || e || !n
                                        ? _.Ay.transitionToInviteOnboarding(t, { transitionTo: o })
                                        : o(D.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id));
                                } else _.Ay.transitionToInvite(t, { transitionTo: o });
                        }
                    }, [t, i, u, o, s, n, c]),
                    h.useEffect(() => {
                        null == t ||
                            (l !== d &&
                                (l === D.fAW.OPEN
                                    ? L.default.track(
                                          D.HAw.INVITE_APP_INVOKED,
                                          {
                                              invite_code: (0, e1.m0)(n),
                                              guild_id: t.guild?.id,
                                              channel_id: t.channel?.id,
                                              inviter_id: t.inviter?.id,
                                              user_is_member: null != t.guild && null != tt.A.getGuild(t.guild.id),
                                              size_total: t.approximate_member_count,
                                              invite_type: null != t.type ? tu.Xd[t.type] : void 0,
                                          },
                                          { flush: !0 },
                                      )
                                    : l === D.fAW.OPEN_FAIL &&
                                      L.default.track(D.HAw.INVITE_APP_INVOKE_FAILED, {
                                          invite_code: (0, e1.m0)(n),
                                          reason: "rpc_failed",
                                          invite_type: null != t.type ? tu.Xd[t.type] : void 0,
                                      })));
                    }, [t, l, d, n]));
            })({
                invite: r,
                inviteKey: t,
                authenticated: o,
                nativeAppState: a,
                mode: E,
                getAcceptInviteContext: A,
                handleContinue: j,
                transitionTo: i,
                joinDeferredRef: I,
            }),
            null == r)
        )
            return null;
        let S = a === D.fAW.OPEN;
        if (f || S || r.state === D.elq.APP_OPENED)
            return (0, d.jsx)(s$, { invite: r, inviteKey: t, rpcConnected: S, onContinue: j });
        let { state: y } = r;
        if (y === D.elq.APP_NOT_OPENED) return (0, d.jsx)(s1, { handleDefaultTransition: C });
        if ([D.elq.RESOLVING, D.elq.ACCEPTING, D.elq.APP_OPENING].includes(y)) {
            let e =
                y === D.elq.ACCEPTING ? X.intl.string(X.t["6wsY16"]) : (D.elq.RESOLVING, X.intl.string(X.t["Z+hCVU"]));
            return (0, d.jsx)(sJ, { title: e });
        }
        if (y === D.elq.EXPIRED) return (0, d.jsx)(s0, { banned: !1, invite: r, handleDefaultTransition: C });
        if (y === D.elq.BANNED) return (0, d.jsx)(s0, { banned: !0, invite: r, handleDefaultTransition: C });
        if (y === D.elq.RESOLVED) {
            if (o && (0, l9.Lt)(r.flags ?? 0, l7.Q.IS_GUEST_INVITE))
                return (
                    _.Ay.openApp(t),
                    l6.u.set(si.B, t),
                    (0, d.jsx)(s$, { invite: r, inviteKey: t, rpcConnected: S, onContinue: () => i(D.BVt.APP) })
                );
            if (null != r.type && tu.uR.has(r.type) && g)
                return (0, d.jsx)(sJ, { title: X.intl.string(X.t["Z+hCVU"]) });
            if (!o && l1.VP)
                return E === sK
                    ? (0, d.jsx)(sX, { invite: r, transitionTo: i, location: n })
                    : (0, d.jsx)(sq, {
                          invite: r,
                          onLoginStart: function () {
                              L.default.track(D.HAw.INVITE_LOGIN, {
                                  invite_code: r?.code,
                                  guild_id: r?.guild?.id,
                                  channel_id: r?.channel?.id,
                                  inviter_id: r?.inviter?.id,
                              });
                          },
                          onRegister: T,
                          location: n,
                          transitionTo: i,
                      });
        }
        return y === D.elq.RESOLVED || y === D.elq.ERROR
            ? (0, d.jsx)(sY, {
                  invite: r,
                  inviteKey: t,
                  handleAccept: v,
                  handleDefaultTransition: C,
                  expirationLocation: o ? "InvitePage" : void 0,
              })
            : null;
    }),
    rt = iT(function (e) {
        let t = {
            guildTemplate: (0, x.bG)([eb.A], () => eb.A.getGuildTemplate(e.code)),
            nativeAppState: (0, x.bG)([iG.A], () => iG.A.getState(e.code)),
            authenticated: (0, x.bG)([eJ.default], () => eJ.default.isAuthenticated()),
            defaultRoute: (0, x.bG)([eg.A], () => eg.A.defaultRoute),
        };
        return (0, d.jsx)(l3, { ...e, ...t });
    }),
    rn = iT(lq),
    ri = iT(function (e) {
        let { inviteKey: t, transitionTo: n } = e,
            i = (0, x.bG)([tn.A], () => tn.A.getInvite(t));
        return (
            h.useEffect(() => {
                let e = eJ.default.getAnalyticsToken();
                (null != e &&
                    N.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eJ.default.getId() }),
                    (0, U.d0)("invite_mobile"),
                    L.default.track(D.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }));
            }, []),
            (0, d.jsx)(nG, {
                invite: i,
                onAcceptInvite: function (e) {
                    ny(e, t, i);
                },
                onOpenAppAfterRegistration: function (e) {
                    ny(e, t, i, { didRegister: !0 });
                },
                transitionTo: n,
            })
        );
    }),
    rl = iT(lz),
    rs = iT(function (e) {
        let { location: t, transitionTo: i = eF.pX } = e,
            [l, s] = h.useState("submitting");
        function r() {
            return eq().os?.family === "Android" || eq().os?.family === "iOS"
                ? null
                : (0, d.jsx)(H.$, {
                      text: X.intl.string(X.t.dKhVQN),
                      fullWidth: !0,
                      onClick: () => i(D.BVt.LOGIN, { source: "authorizeIPAdress" }),
                  });
        }
        if (
            ((0, st.Ay)(() => {
                (0, U.d0)("authorize_ip");
                let e = (0, ep.A)(t);
                null == e
                    ? s("failed")
                    : (async function () {
                          if (null != e)
                              try {
                                  (await E.A.authorizeIPAddress(e), s("succeeded"));
                              } catch (e) {
                                  s("failed");
                              }
                      })();
            }),
            "failed" === l)
        )
            return (0, d.jsxs)(P.Ay, {
                children: [
                    (0, d.jsx)("img", { alt: "", src: n(792009), className: Y.SX }),
                    (0, d.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t["f/54az"]) }),
                    (0, d.jsx)(P.tK, { className: Y.C2, children: X.intl.string(X.t.i3ehMr) }),
                    r(),
                ],
            });
        if ("succeeded" === l) {
            let e = r();
            return (0, d.jsxs)(P.Ay, {
                contentClassName: s8.oe,
                children: [
                    (0, d.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.iG0SlK) }),
                    (0, d.jsxs)(ew.B, {
                        gap: 40,
                        children: [(0, d.jsx)(P.tK, { children: X.intl.string(X.t["Elv+qt"]) }), e],
                    }),
                ],
            });
        }
        return (0, d.jsxs)(P.Ay, {
            children: [(0, d.jsx)(P.CK, {}), (0, d.jsx)(P.hE, { children: X.intl.string(X.t["9exy+V"]) })],
        });
    }),
    rr = iT(function (e) {
        let { location: t } = e,
            [i, l] = h.useState("submitting");
        return (h.useEffect(() => {
            (0, U.d0)("authorize_payment");
            let e = (0, ep.A)(t);
            null == e
                ? l("failed")
                : (async function () {
                      if (null != e)
                          try {
                              (await E.A.authorizePayment(e), l("succeeded"));
                          } catch (e) {
                              l("failed");
                          }
                  })();
        }, [t]),
        "failed" === i)
            ? (0, d.jsxs)(P.Ay, {
                  children: [
                      (0, d.jsx)("img", { alt: "", src: n(678985), className: Y.SX }),
                      (0, d.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.GHRpue) }),
                      (0, d.jsx)(P.tK, { className: Y.C2, children: X.intl.string(X.t["1nO55v"]) }),
                  ],
              })
            : "succeeded" === i
              ? (0, d.jsxs)(P.Ay, {
                    children: [
                        (0, d.jsx)("img", { alt: "", src: n(586430), className: Y.SX }),
                        (0, d.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.ihHX53) }),
                        (0, d.jsx)(P.tK, { className: Y.C2, children: X.intl.string(X.t["pGPCv+"]) }),
                    ],
                })
              : (0, d.jsxs)(P.Ay, {
                    children: [(0, d.jsx)(P.CK, {}), (0, d.jsx)(P.hE, { children: X.intl.string(X.t.T3vC7n) })],
                });
    }),
    ra = iT(function (e) {
        let { location: t, transitionTo: n = s7 } = e,
            [i, l] = h.useState("submitting"),
            s = h.useRef(void 0);
        (0, st.Ay)(() => {
            (0, U.d0)("verify_email");
            let e = (0, ep.A)(t);
            null == e
                ? l("failed")
                : (async function () {
                      if (null != e)
                          try {
                              let t = await E.A.verify(e);
                              (l("succeeded"), (s.current = t));
                          } catch (e) {
                              l("failed");
                          }
                  })();
        });
        let r = h.useCallback(() => {
                n(D.BVt.LOGIN, { source: "verify_email" });
            }, [n]),
            a = h.useCallback(() => {
                (L.default.track(D.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: s.current }),
                    (0, s5.A)("verify_email"));
            }, []);
        return "failed" === i
            ? (0, d.jsx)(eB, {
                  title: X.intl.string(X.t["PCgG3+"]),
                  subtitle: X.intl.string(X.t.tQpeA3),
                  buttonText: X.intl.string(X.t.dKhVQN),
                  onButtonClick: r,
              })
            : "succeeded" === i
              ? (0, d.jsx)(eB, {
                    title: X.intl.string(X.t["dAfGb+"]),
                    buttonText: X.intl.string(X.t["uJWIj/"]),
                    onButtonClick: a,
                    image: (0, d.jsx)(eD, { alt: X.intl.string(X.t["dAfGb+"]) }),
                })
              : (0, d.jsx)(eB, {
                    title: X.intl.string(X.t["0c8+5n"]),
                    subtitle: X.intl.string(X.t.ULTCBE),
                    loading: !0,
                });
    }),
    ro = iT(function () {
        let [e, t] = h.useState(""),
            [i, l] = h.useState(""),
            [s, r] = h.useState(!1),
            [a, o] = h.useState(!1),
            [c, u] = h.useState(null),
            [m, g] = h.useState(null),
            f = (0, x.bG)([eN.A], () => eN.A.getCountryCode()),
            p = f.code.split(" ")[0];
        async function E() {
            try {
                await e_.A.resendCode(e);
            } catch (e) {
                g(e.body.message);
            }
        }
        async function A() {
            r(!0);
            try {
                let { token: t } = await e_.A.verifyPhone(p + e, i);
                (u(null), g(null), o(!0), e_.A.validatePhoneForSupport(t));
            } catch (e) {
                e.body.message ? (u(null), g(e.body.message)) : (u(e.body.phone), g(e.body.code));
            } finally {
                r(!1);
            }
        }
        let _ = (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P._V, { src: n(142041) }),
                (0, d.jsxs)(P.hE, {
                    className: V()(Y.QX, eC.Uu, eC.wq, eC.Hu),
                    children: [
                        X.intl.string(X.t.WWzQta),
                        (0, d.jsx)(eA.y, { size: "md", color: "currentColor", className: Y.oY }),
                    ],
                }),
            ],
        });
        return a
            ? _
            : (0, d.jsxs)(P.Ay, {
                  children: [
                      (0, d.jsx)(P.hE, { children: X.intl.string(X.t.o4JNrO) }),
                      (0, d.jsx)(P.tK, { className: Y.Ot, children: X.intl.string(X.t.y0tVbq) }),
                      (0, d.jsxs)(P.eB, {
                          className: Y.QX,
                          children: [
                              (0, d.jsx)(ev.A, {
                                  label: X.intl.string(X.t["eJnn0+"]),
                                  alpha2: f.alpha2,
                                  countryCode: p,
                                  value: e,
                                  autoComplete: "off",
                                  spellCheck: "false",
                                  onChange: t,
                                  forceMode: ej.Pd.PHONE,
                                  error: c,
                              }),
                              (0, d.jsx)(P.pd, {
                                  className: Y.QX,
                                  label: X.intl.string(X.t.OdzNbm),
                                  value: i,
                                  onChange: l,
                                  maxLength: 6,
                                  error: m,
                              }),
                              (0, d.jsx)(em.Q, { text: X.intl.string(X.t["5b60gi"]), onClick: E }),
                              (0, d.jsx)("div", {
                                  className: Y.QX,
                                  children: (0, d.jsx)(H.$, {
                                      text: X.intl.string(X.t.i4jeWR),
                                      fullWidth: !0,
                                      onClick: A,
                                      loading: s,
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    }),
    rc = iT(s4.A),
    ru = iT(ik),
    rd = iT(eE),
    rh = iT(function (e) {
        let { location: t } = e,
            [n, i] = h.useState(!1),
            { verifySuccess: l, verifyErrors: s, redirectGuildId: r } = (0, x.bG)([eK], () => eK.getState());
        function a() {
            let e, t;
            ((e = (function (e) {
                let t = eq().os?.family;
                if ("Android" === t || "iOS" === t) {
                    let t = eJ.default.getFingerprint(),
                        n = (0, e$.I_)();
                    return (
                        ez()(null != e, "generateAppPath: guildId cannot be null"),
                        (0, e$.Ay)((0, eY.jN)(e), { utmSource: "verify_hub_email", fingerprint: t, attemptId: n })
                    );
                }
                return "discord://";
            })(r)),
                null != (t = (0, e$.X7)(e)) &&
                    L.default.track(D.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, eZ.v)(t.fingerprint),
                        attempt_id: t.attemptId,
                        source: t.utmSource,
                    }),
                e0.A.launch(e, (e) => {
                    e || (0, eF.bG)(eg.A.fallbackRoute);
                }),
                i(!0));
        }
        return (h.useEffect(() => {
            let e = (0, ep.A)(t);
            (ek.A.verify(e), (0, U.d0)("verify_hub_email"));
        }, [t]),
        n)
            ? (0, d.jsx)(eB, {
                  title: X.intl.string(X.t.csrAMJ),
                  subtitle: X.intl.string(X.t["m1+IBn"]),
                  buttonText: X.intl.string(X.t.fIv16B),
                  onButtonClick: () => (0, eF.pX)(D.BVt.CHANNEL(r)),
              })
            : l
              ? (0, d.jsx)(eB, {
                    title: X.intl.string(X.t["dAfGb+"]),
                    buttonText: X.intl.string(X.t["uJWIj/"]),
                    onButtonClick: a,
                    image: (0, d.jsx)(eD, { alt: X.intl.string(X.t["dAfGb+"]) }),
                })
              : null != s
                ? (0, d.jsx)(eB, {
                      title: X.intl.string(X.t["PCgG3+"]),
                      subtitle: X.intl.string(X.t.tQpeA3),
                      buttonText: X.intl.string(X.t["uJWIj/"]),
                      onButtonClick: a,
                  })
                : (0, d.jsx)(eB, {
                      title: X.intl.string(X.t["0c8+5n"]),
                      subtitle: X.intl.string(X.t.ULTCBE),
                      loading: !0,
                  });
    }),
    rm = iT(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, iy.W)(nH.XK.CHANNEL, {
                guildId: e.params.guildId,
                channelId: e.params.channelId,
                messageId: e.params.messageId,
                search: t.search,
            });
        }
        return (0, d.jsx)(iL, { match: t, location: n, attemptDeepLink: i });
    }),
    rg = iT(function (e) {
        let { match: t, location: n } = e;
        async function i(e) {
            await (0, iy.W)(nH.XK.GAME_SHOP, {
                guildId: e.params.guildId,
                pageIndex: e.params.pageIndex,
                skuId: e.params.skuId,
                slug: e.params.slug,
            });
        }
        return (0, d.jsx)(iL, { match: t, location: n, attemptDeepLink: i });
    }),
    rf = iT(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, iy.W)(nH.XK.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search,
            });
        }
        return (0, d.jsx)(iL, { match: t, location: n, attemptDeepLink: i });
    }),
    rp = iT(function (e) {
        let { location: t } = e,
            n = (0, x.bG)([eJ.default], () => eJ.default.isAuthenticated()),
            i = (0, x.bG)([eS.A], () => eS.A.hasLoadedExperiments),
            l = s3.useExperiment({ location: "RSL - Landing Page" }, { autoTrackExposure: !0 }).enabled,
            [s, r] = h.useState(!1),
            [a, o] = h.useState(X.intl.string(X.t["9exy+V"])),
            [c, u] = h.useState(!0);
        function m(e) {
            switch (e) {
                case D.t02.INVALID_FORM_BODY:
                case D.t02.DSA_RSL_REPORT_NOT_FOUND:
                    o(X.intl.string(X.t.bzXDfc));
                    break;
                case D.t02.DSA_RSL_ALREADY_REQUESTED:
                    o(X.intl.string(X.t.rV00wq));
                    break;
                case D.t02.DSA_RSL_LIMITED_TIME:
                    o(X.intl.string(X.t["0dI29h"]));
                    break;
                case D.t02.DSA_RSL_REPORT_INELIGIBLE:
                    o(X.intl.string(X.t["RGa/Gb"]));
                    break;
                default:
                    o(X.intl.string(X.t["0QLzfv"]));
            }
        }
        return (
            h.useEffect(() => {
                n
                    ? (u(!0),
                      nq
                          .rQ({ withAnalyticsToken: !0 })
                          .then(() => u(!1))
                          .catch(() => u(!1)))
                    : u(!1);
            }, [n]),
            h.useEffect(() => {
                i || l || E.A.getExperiments();
            }, [i, l]),
            h.useEffect(() => {
                async function e(e) {
                    try {
                        let t = null != e ? await (0, n$.q)(e) : void 0;
                        null != t ? o(X.intl.string(X.t.e6mZMt)) : m(t.body?.code);
                    } catch (e) {
                        m(e.body?.code);
                    } finally {
                        r(!1);
                    }
                }
                (r(!0), e((0, ep.A)(t)), (0, U.d0)("report_second_look"));
            }, [t]),
            l &&
                !c &&
                (0, d.jsxs)(P.Ay, {
                    children: [(0, d.jsx)(P.hE, { className: Y.QB, children: a }), s && (0, d.jsx)(eG.y, {})],
                })
        );
    }),
    rx = iT(el),
    rE = iT(function (e) {
        let { match: t, location: i } = e,
            l = (0, m.parse)(i.search).token,
            [s, r] = h.useState("loading"),
            a = h.useRef(!1),
            o = h.useCallback(async (e) => {
                try {
                    (L.default.track(D.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                        await E.A.oneTimeLogin(e),
                        r("login_success"),
                        L.default.track(D.HAw.LOGIN_SUCCESSFUL, { source: "web_page", login_method: "one_time_login" }),
                        n.g.location.assign(D.BVt.APP));
                } catch (t) {
                    let e = t instanceof Error ? t.message : "Unknown error";
                    (L.default.track(D.HAw.ONE_TIME_LOGIN_ERROR, {
                        source: "web_page",
                        error_reason: "api_error",
                        error_message: e,
                    }),
                        r("error"));
                }
            }, []),
            c = h.useCallback((e) => {
                let t = eJ.default.getFingerprint() ?? eJ.default.getId(),
                    n = `discord://login/one-time?token=${encodeURIComponent(e)}`;
                e0.A.launch(n, (e) => {
                    e
                        ? (L.default.track(D.HAw.DEEP_LINK_CLICKED, {
                              source: "web_page",
                              destination: "discord://login/one-time",
                              deep_link_provider: "protocol",
                              fingerprint: t,
                          }),
                          r("app_launched"))
                        : r("app_launch_not_supported");
                });
            }, []),
            u = h.useCallback(
                (e) => {
                    let t = eJ.default.getFingerprint() ?? eJ.default.getId(),
                        i = eJ.default.getInstallationForTracking();
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((n) => {
                            let { default: l } = n;
                            l.request(D.e$_.DEEP_LINK, {
                                type: nH.XK.ONE_TIME_LOGIN,
                                params: { token: e, fingerprint: t, installationId: i },
                            })
                                .then((n) => {
                                    n
                                        ? (L.default.track(D.HAw.DEEP_LINK_CLICKED, {
                                              source: "web_page",
                                              destination: "one_time_login_modal",
                                              deep_link_provider: "rpc",
                                              fingerprint: t,
                                          }),
                                          r("app_launched"))
                                        : c(e);
                                })
                                .catch(() => {
                                    c(e);
                                })
                                .then(() => l.disconnect());
                        });
                },
                [c],
            );
        if (
            (h.useEffect(() => {
                let e = null != l && "string" == typeof l,
                    t = f.Fr ? "mobile" : f.v1 ? "tablet" : (0, nU.isDesktop)() ? "desktop_app" : "web";
                if ((L.default.track(D.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: e, device_type: t }), !e))
                    return void r("error");
                if (f.Fr || f.v1) {
                    let e = L.default.getSuperProperties()?.os;
                    L.default.track(D.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_ui_shown",
                        device_type: t,
                        platform: e,
                    });
                    return;
                }
                (0, nU.isDesktop)() ? o(l) : a.current || ((a.current = !0), r("rpc_attempting"), u(l));
            }, [l, i, o, u]),
            f.Fr || f.v1)
        ) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, d.jsx)(nM, { token: l, hasError: "error" === s, errorReason: e });
        }
        if ((0, eF.MX)()) return null;
        if ("app_launched" === s)
            return (0, d.jsx)(nW, {
                title: X.intl.string(X.t.RvUUOy),
                subtitle: X.intl.string(X.t["5/lR0g"]),
                buttonText: X.intl.string(X.t["2ixEBi"]),
                buttonOnClick: () => {
                    (L.default.track(D.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: s }), o(l));
                },
            });
        if ("app_launch_not_supported" === s)
            return (0, d.jsx)(nW, {
                title: X.intl.string(X.t.qq4tjT),
                subtitle: X.intl.string(X.t.CVxYRo),
                buttonText: X.intl.string(X.t["2ixEBi"]),
                buttonOnClick: () => o(l),
            });
        if ("error" === s) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, d.jsx)(nW, {
                title: X.intl.string(X.t.RtCSr1),
                subtitle: X.intl.string(X.t["S+YjYJ"]),
                buttonText: X.intl.string(X.t.j3cG2p),
                buttonOnClick: () => {
                    (L.default.track(D.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                        (0, eF.pX)(D.BVt.LOGIN));
                },
            });
        }
        return (0, d.jsx)(P.Ay, { children: (0, d.jsx)(P.CK, {}) });
    });
class rA extends h.PureComponent {
    state = { splash: null, redirectTo: null, backgroundId: null };
    hasTriggeredInviteResolve = !1;
    experimentFallbackTimeout = null;
    static getDerivedStateFromProps(e, t) {
        let { invite: n, location: i } = e,
            { backgroundId: l } = t,
            s = (0, m.parse)(i.search).redirect_to ?? null;
        (null == s || "" === s || s.startsWith(D.BVt.ME) || (!(0, p.e)(s) && !ed(s))) && (s = null);
        let r = null;
        if (null == n) r = (0, im.u8)(s);
        else {
            let { guild: e, target_application: t } = n;
            null != t
                ? null != l && (r = (0, ih.uD)(t.id, l, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (r = ti.Ay.getGuildSplashURL({ id: e.id, splash: e.splash }));
        }
        return { redirectTo: s, splash: r };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        (null != e &&
            (!t && n && E.A.getExperiments(!0),
            null != eJ.default.getInstallationForTracking() && (0, ey.fetchInstallationExperiments)(null),
            L.default.track(
                D.HAw.INVITE_OPENED,
                { invite_code: (0, e1.m0)(e), load_time: ip.getTimeSinceNavigationStart() },
                { flush: !0 },
            )),
            t
                ? this.maybeResolveInvite()
                : null != e && (this.experimentFallbackTimeout = setTimeout(this.maybeResolveInvite, 2e3)),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            G.initialize(),
            (0, U.DC)());
    }
    componentDidUpdate(e) {
        (!e.hasLoadedExperiments && this.props.hasLoadedExperiments && this.maybeResolveInvite(),
            e.invite?.state !== this.props.invite?.state && this.maybeFetchApplicationSplash());
    }
    componentWillUnmount() {
        (null != this.experimentFallbackTimeout &&
            (clearTimeout(this.experimentFallbackTimeout), (this.experimentFallbackTimeout = null)),
            G.terminate());
    }
    maybeResolveInvite = () => {
        this.hasTriggeredInviteResolve ||
            null == this.props.inviteKey ||
            ((this.hasTriggeredInviteResolve = !0),
            null != this.experimentFallbackTimeout &&
                (clearTimeout(this.experimentFallbackTimeout), (this.experimentFallbackTimeout = null)),
            this.resolveInvite());
    };
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if (e?.state === D.elq.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, ih.RG)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await _.Ay.resolveInvite(e, D.S3d.INVITE, {
            withGames: !0,
            withGuildExperiments: f.Fr || f.v1,
        });
        if (null != t && (er(t), null != t.type && tu.uR.has(t.type))) {
            if ("denied" === (await eT()))
                return void L.default.track(D.HAw.INVITE_APP_INVOKE_FAILED, {
                    invite_code: (0, e1.m0)(e),
                    reason: "lna_denied",
                    invite_type: tu.Xd[t.type],
                });
            _.Ay.openNativeAppModal(e);
        }
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (L.default.track(
                D.HAw.GUILD_TEMPLATE_OPENED,
                { guild_template_code: e, load_time: ip.getTimeSinceNavigationStart() },
                { flush: !0 },
            ),
            eR.A.resolveGuildTemplate(e),
            eR.A.openNativeAppModal(e));
    }
    resolveGiftCode() {
        let { giftCode: e } = this.props;
        null != e &&
            A.Ay.resolveGiftCode(e, !0, !0)
                .then((t) => {
                    null != t && null == t.giftCode.promotion && A.Ay.openNativeGiftCodeModal(e);
                })
                .catch(A.Ay.reportUnexpectedGiftCodeError);
    }
    render() {
        let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
        return (0, d.jsxs)(iS.A, {
            splash: e,
            children: [
                (0, d.jsx)(es.A, { path: D.BVt.LOGIN_HANDOFF, render: (e) => (0, d.jsx)(s6, { ...e, redirectTo: t }) }),
                (0, d.jsx)(es.A, { path: D.BVt.LOGIN_ONE_TIME, render: (e) => (0, d.jsx)(rE, { ...e }) }),
                (0, d.jsx)(es.A, {
                    impressionName: g.ImpressionNames.USER_LOGIN,
                    path: D.BVt.LOGIN,
                    render: (e) => (0, d.jsx)(s9, { ...e, redirectTo: t }),
                }),
                (0, d.jsx)(es.A, {
                    impressionName: g.ImpressionNames.USER_REGISTRATION,
                    path: D.BVt.REGISTER,
                    render: (e) => (0, d.jsx)(rl, { ...e, redirectTo: t }),
                }),
                (0, d.jsx)(es.A, {
                    path: D.BVt.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, d.jsx)(rn, { login: !0, ...e, transitionTo: e.transitionTo ?? eF.pX }),
                }),
                (0, d.jsx)(es.A, {
                    path: D.BVt.GIFT_CODE(":giftCode"),
                    render: (e) => (0, d.jsx)(rn, { ...e, transitionTo: e.transitionTo ?? eF.pX }),
                }),
                (0, d.jsx)(es.A, {
                    path: [D.BVt.INVITE_LOGIN(":inviteCode"), D.BVt.INVITE(":inviteCode")],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n,
                                },
                                location: i,
                                transitionTo: l = eF.pX,
                            } = e,
                            s = (0, e1.fB)(t ?? "", i.search);
                        return f.Fr || f.v1
                            ? (0, d.jsx)(ri, { inviteKey: s, transitionTo: l }, s)
                            : (0, d.jsx)(
                                  re,
                                  {
                                      inviteKey: s,
                                      location: i,
                                      transitionTo: l,
                                      login: n === D.BVt.INVITE_LOGIN(":inviteCode"),
                                  },
                                  s,
                              );
                    },
                }),
                (0, d.jsx)(es.A, {
                    path: [
                        D.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                        D.BVt.GUILD_TEMPLATE(":guildTemplateCode"),
                    ],
                    render: (e) => {
                        let {
                            match: {
                                params: { guildTemplateCode: t },
                                path: n,
                            },
                            location: i,
                            transitionTo: l = eF.pX,
                        } = e;
                        return f.Fr || f.v1
                            ? (0, d.jsx)(l5, { code: t }, t)
                            : (0, d.jsx)(rt, {
                                  code: t ?? "",
                                  location: i,
                                  transitionTo: l,
                                  login: n === D.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, d.jsx)(es.A, { path: D.BVt.VERIFY, render: (e) => (0, d.jsx)(ra, { ...e }) }),
                (0, d.jsx)(es.A, { path: D.BVt.VERIFY_HUB_EMAIL, render: (e) => (0, d.jsx)(rh, { ...e }) }),
                (0, d.jsx)(es.A, { path: D.BVt.VERIFY_REQUEST, render: (e) => (0, d.jsx)(ro, { ...e }) }),
                (0, d.jsx)(es.A, { path: D.BVt.DISABLE_EMAIL_NOTIFICATIONS, render: (e) => (0, d.jsx)(ru, { ...e }) }),
                (0, d.jsx)(es.A, {
                    path: D.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, d.jsx)(rd, { ...e }),
                }),
                (0, d.jsx)(es.A, { path: D.BVt.AUTHORIZE_IP, render: (e) => (0, d.jsx)(rs, { ...e }) }),
                (0, d.jsx)(es.A, {
                    path: D.BVt.REJECT_IP,
                    render: (e) => (0, d.jsx)(rc, { source: D.BVt.REJECT_IP, ...e }),
                }),
                (0, d.jsx)(es.A, {
                    path: D.BVt.REJECT_MFA,
                    render: (e) => (0, d.jsx)(rc, { source: D.BVt.REJECT_MFA, ...e }),
                }),
                (0, d.jsx)(es.A, { path: D.BVt.AUTHORIZE_PAYMENT, render: (e) => (0, d.jsx)(rr, { ...e }) }),
                (0, d.jsx)(es.A, { path: D.BVt.RESET, render: (e) => (0, d.jsx)(rc, { source: D.BVt.RESET, ...e }) }),
                (0, d.jsx)(es.A, {
                    path: D.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, d.jsx)(rf, { ...e }),
                }),
                (0, d.jsx)(es.A, {
                    path: D.BVt.CHANNELS_GAME_SHOP(nK.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, d.jsx)(rg, { ...e }),
                }),
                (0, d.jsx)(es.A, {
                    path: D.BVt.CHANNEL(nK.pv.guildId(), nK.pv.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, d.jsx)(rm, { ...e }),
                }),
                (0, d.jsx)(es.A, { path: D.BVt.REPORT, render: () => (0, d.jsx)(iu, {}) }),
                (0, d.jsx)(es.A, { path: D.BVt.REPORT_SECOND_LOOK, render: (e) => (0, d.jsx)(rp, { ...e }) }),
                (0, d.jsx)(es.A, {
                    path: D.BVt.ACCOUNT_REVERT(":token"),
                    render: (e) => (0, d.jsx)(rx, { ...e, transitionTo: e.transitionTo ?? eF.pX }),
                }),
            ],
        });
    }
}
let r_ = x.Ay.connectStores([eJ.default, tn.A, id.A, eS.A, eb.A], (e) => {
    let { match: t, location: n } = e,
        i = t?.params?.inviteCode,
        l = null != i ? (0, e1.fB)(i, n.search) : void 0,
        s = t?.params?.giftCode,
        r = t?.params?.guildTemplateCode;
    return {
        inviteKey: l,
        isAuthenticated: eJ.default.isAuthenticated(),
        giftCode: s,
        guildTemplateCode: r,
        gift: null != s ? id.A.get(s) : null,
        invite: null != l ? tn.A.getInvite(l) : null,
        guildTemplate: null != r ? eb.A.getGuildTemplate(r) : null,
        hasLoadedExperiments: eS.A.hasLoadedExperiments,
    };
})(rA);
