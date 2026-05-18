n.r(t), n.d(t, { default: () => sx });
var i,
    l,
    s,
    r,
    a = n(627968),
    o = n(64700),
    c = n(492462),
    d = n(562708),
    u = n(607399),
    m = n(470562),
    h = n(17928),
    g = n(228366),
    x = n(830215),
    f = n(869038),
    A = n(376728),
    p = n(636537),
    E = n(6981),
    _ = n(376943),
    j = n(718446),
    N = n(746080),
    T = n(355097),
    I =
        (((i = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (i.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        i);
function v(e) {
    let t = decodeURIComponent(e),
        n = (0, _.vu)(t);
    return null != n && n.channelId === N.VV.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t.toLowerCase() === (0, j.settingsPathToRoute)(T.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)
          ? "role_subscription_setting"
          : void 0;
}
var C = n(115036),
    S = n(174459),
    b = n(272355),
    y = n(652215);
function R(e, t) {
    S.default.track(y.HAw.BROWSER_HANDOFF_SUCCEEDED, { authenticated: e, handoff_source: t });
}
class O extends b.A {
    _initialize() {
        g.h.subscribe("BROWSER_HANDOFF_END", this.handleEnd),
            g.h.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
    }
    _terminate() {
        g.h.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd),
            g.h.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: i, handoffSource: l } = e;
        null != n
            ? p.Bo.post({ url: y.Rsh.HANDOFF_EXCHANGE, body: { key: t, handoff_token: n }, rejectWithError: !1 }).then(
                  (e) => {
                      let { body: t } = e;
                      (0, E.uA)(t.user), x.A.loginToken(t.token, !1), R(!0, l);
                  },
                  (e) => {
                      null != i && R(!1, l),
                          x.A.setFingerprint(i),
                          (0, E.mZ)(),
                          l === I.ROLE_SUBSCRIPTION &&
                              S.default.track(y.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: e.message ?? e.text,
                                  handoff_source: l,
                              });
                  },
              )
            : null != i
              ? (x.A.setFingerprint(i), R(!1, l), (0, E.mZ)())
              : (x.A.setFingerprint(i), (0, E.J0)());
    }
    handleEnd = (e) => {
        let { handoffToken: t, fingerprint: n } = e,
            i = C.A.key;
        null != i && C.A.isHandoffAvailable()
            ? this.handleHandoff({ handoffKey: i, handoffToken: t, fingerprint: n, handoffSource: void 0 })
            : (x.A.setFingerprint(null), (0, E.J0)());
    };
}
let L = new O();
var k = n(854378),
    P = n(976860),
    G = n(210714),
    D = n(430690),
    V = n(503698),
    w = n.n(V),
    U = n(834730),
    M = n(821609),
    B = n(181658),
    F = n(625494),
    W = n(499785),
    z = (((l = {}).START = "start"), (l.PASSWORD = "password"), (l.SUCCESS = "success"), (l.FAILED = "failed"), l),
    Q = n(375708),
    H = n(244460),
    K = n(818050);
function q(e) {
    let { setOriginalEmail: t, setSlide: i, ready: l, token: s } = e,
        [r, c] = o.useState(!1),
        [u, m] = o.useState(null),
        [h, g] = o.useState(null),
        [x, f] = o.useState(""),
        A = o.useRef(null);
    return (
        o.useEffect(() => {
            l && A.current?.focus();
        }, [l]),
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(k._V, { src: null == h ? n(79418) : n(579656), className: w()(K.SX, K.Ot) }),
                (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.IfBQ56) }),
                null != h && "" !== h
                    ? (0, a.jsx)(U.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: h })
                    : null,
                (0, a.jsxs)(k.eB, {
                    className: w()(K.SX, K.QX),
                    children: [
                        (0, a.jsx)(k.pd, {
                            name: "password",
                            type: "password",
                            label: Q.intl.string(Q.t["8dM4FO"]),
                            setRef: A,
                            className: K.SX,
                            value: x,
                            onChange: f,
                            error: u,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: Q.intl.string(Q.t["yY/PXY"]),
                        }),
                        (0, a.jsx)("div", {
                            className: K.Ot,
                            children: (0, a.jsx)(M.$, {
                                text: Q.intl.string(Q.t.ezv91b),
                                fullWidth: !0,
                                onClick: () => {
                                    if (!r) {
                                        if (0 === x.length) {
                                            m(Q.intl.string(Q.t.R98xD5)), F._.dispatch(y.jej.WAVE_EMPHASIZE);
                                            return;
                                        }
                                        return (
                                            null != h && g(null),
                                            null != u && m(null),
                                            t(""),
                                            c(!0),
                                            W.A.post({
                                                url: y.Rsh.ACCOUNT_REVERT,
                                                body: { token: s, password: x },
                                                trackedActionData: { event: d.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    f(""), t(n), i(z.SUCCESS);
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        g(
                                                            Q.intl.formatToPlainString(Q.t.aTVNes, {
                                                                statusPageURL: y.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new B.A(e);
                                                        t.hasFieldErrors()
                                                            ? m(t.getAnyErrorMessage())
                                                            : g(
                                                                  (function (e) {
                                                                      switch (e) {
                                                                          case y.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                              return Q.intl.string(Q.t["11zzGR"]);
                                                                          case y.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                              return Q.intl.string(Q.t["6qmgaI"]);
                                                                          case y.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                              return Q.intl.string(Q.t.bChnKs);
                                                                          default:
                                                                              return Q.intl.format(Q.t.aTVNes, {
                                                                                  statusPageURL: y.qF7.STATUS,
                                                                              });
                                                                      }
                                                                  })(t.code).toString(),
                                                              );
                                                    }
                                                    F._.dispatch(y.jej.WAVE_EMPHASIZE);
                                                })
                                                .finally(() => {
                                                    c(!1);
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
                (0, a.jsx)("div", {
                    className: H.UD,
                    children: (0, a.jsx)(M.$, {
                        text: Q.intl.string(Q.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: () => {
                            f(""), i(z.START);
                        },
                    }),
                }),
            ],
        })
    );
}
var X = n(825484),
    Y = n(749314);
function $(e) {
    let { children: t } = e;
    return (0, a.jsx)("li", {
        className: H.Aw,
        children: (0, a.jsx)(U.E, { variant: "text-sm/medium", color: "text-default", children: t }),
    });
}
function J(e) {
    let { setSlide: t, transitionTo: i } = e;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(k._V, { src: n(79418), className: w()(K.SX, K.Ot) }),
            (0, a.jsx)(k.hE, { className: K.QB, children: Q.intl.string(Q.t["8UcxI6"]) }),
            (0, a.jsx)(U.E, { variant: "text-md/normal", children: Q.intl.string(Q.t.O37hMl) }),
            (0, a.jsxs)(k.eB, {
                className: w()(K.SX, K.QX),
                children: [
                    (0, a.jsx)(U.E, { variant: "text-sm/normal" }),
                    (0, a.jsxs)("ul", {
                        className: H.qI,
                        children: [
                            (0, a.jsx)($, { children: Q.intl.string(Q.t.Gj1Zry) }),
                            (0, a.jsx)(Y.A, {}),
                            (0, a.jsx)($, { children: Q.intl.string(Q.t["8C6t3B"]) }),
                            (0, a.jsx)(Y.A, {}),
                            (0, a.jsx)($, { children: Q.intl.string(Q.t.mToZMA) }),
                            (0, a.jsx)(Y.A, {}),
                            (0, a.jsx)($, { children: Q.intl.string(Q.t.TPEvkc) }),
                            (0, a.jsx)(Y.A, {}),
                            (0, a.jsx)($, { children: Q.intl.string(Q.t.H8Y1Ln) }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)(X.e, {
                direction: "vertical",
                fullWidth: !0,
                className: H.UD,
                children: [
                    (0, a.jsx)(M.$, { text: Q.intl.string(Q.t.GgCRqR), onClick: () => t(z.PASSWORD) }),
                    (0, a.jsx)(M.$, {
                        text: Q.intl.string(Q.t["B/yHcQ"]),
                        variant: "secondary",
                        onClick: () => i(y.BVt.LOGIN, { source: "account_revert" }),
                    }),
                ],
            }),
        ],
    });
}
function Z(e) {
    let { email: t } = e;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(k._V, { src: n(79418), className: w()(K.SX, K.Ot) }),
            (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.ailkVG) }),
            (0, a.jsx)(k.tK, { children: Q.intl.format(Q.t["4ZMVCI"], { email: t }) }),
            (0, a.jsx)(U.E, {
                className: w()(K.QB, K.QX),
                variant: "text-md/normal",
                children: Q.intl.string(Q.t["dpAn+8"]),
            }),
        ],
    });
}
function ee(e) {
    let { transitionTo: t, token: n, width: i } = e,
        [l, s] = o.useState(z.START),
        [r, c] = o.useState(null),
        [u, m] = o.useState(""),
        h = { impression_group: d.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, a.jsx)("div", {
        style: { margin: "8px" },
        children: (0, a.jsxs)(D.t, {
            activeSlide: l,
            width: i,
            onSlideReady: c,
            children: [
                (0, a.jsx)(D.q, {
                    id: z.START,
                    impressionProperties: h,
                    impressionName: d.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, a.jsx)(J, { setSlide: s, transitionTo: t }),
                }),
                (0, a.jsx)(D.q, {
                    id: z.PASSWORD,
                    impressionProperties: h,
                    impressionName: d.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, a.jsx)(q, {
                        setOriginalEmail: m,
                        setSlide: s,
                        transitionTo: t,
                        ready: r === z.PASSWORD,
                        token: n,
                    }),
                }),
                (0, a.jsx)(D.q, {
                    id: z.SUCCESS,
                    impressionProperties: h,
                    impressionName: d.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, a.jsx)(Z, { email: u }),
                }),
            ],
        }),
    });
}
h.Ay.initialize();
class et extends o.PureComponent {
    static defaultProps = { transitionTo: P.pX, replaceWith: P.bG };
    componentDidMount() {
        (0, G.d)("account_revert");
    }
    render() {
        let { token: e } = this.props.match.params;
        return (0, a.jsx)(k.Ay, {
            style: { padding: 0 },
            children: (0, a.jsx)(ee, { width: 464, token: e, ...this.props }),
        });
    }
}
var en = n(549711);
function ei(e) {
    g.h.dispatch({ type: "AUTH_INVITE_UPDATE", invite: e });
}
n(323874), n(14289), n(35956);
var el = n(835245),
    es = n(941426);
let er = [window.GLOBAL_ENV.ADS_MANAGER_ENDPOINT].filter(Boolean);
function ea(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = new URL(e, t);
    return "127.0.0.1" === n.hostname && (n.hostname = "localhost"), n.href;
}
function eo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : er;
    try {
        let { origin: i } = new URL(ea(e, t));
        return n
            .map((e) => ea(e, t))
            .some((e) => {
                let { origin: t } = new URL(e);
                return i === t;
            });
    } catch (e) {
        return new es.Vy("Auth").error("Failed to check external redirect", e), !1;
    }
}
async function ec(e) {
    let t = (0, el.A)();
    try {
        var n;
        let i,
            l,
            s = (await p.Bo.post({ url: y.Rsh.HANDOFF, body: { key: t }, oldFormErrors: !0, rejectWithError: !0 })).body
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
var ed = n(123292),
    eu = n(650048),
    em = n(860689),
    eh = n(396681);
h.Ay.initialize();
class eg extends o.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, guild: null };
    componentDidMount() {
        let e = (0, eh.A)(this.props.location),
            t = (0, c.parse)(this.props.location.search);
        p.Bo.post({
            url: y.Rsh.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, guild_id: t.guild_id },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { guild: t },
                    } = e,
                    n = (0, em.dangerouslyConstructGuildRecordFromUntypedObject)(t);
                this.setState({ success: !0, busy: !1, guild: n });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, G.d)("disable_server_highlight_notifications");
    }
    renderBusy() {
        return (0, a.jsx)(k.Ay, { children: (0, a.jsx)(k.CK, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: K.QB, children: Q.intl.string(Q.t.Z33eiP) }),
                (0, a.jsx)(k.tK, { children: Q.intl.format(Q.t.NRWtfC, { guildName: n.name }) }),
                (0, a.jsx)("div", {
                    className: K.eT,
                    children: (0, a.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, a.jsx)("div", {
                    className: K.Ot,
                    children: (0, a.jsx)(ed.Q, {
                        text: Q.intl.string(Q.t["cGmT/J"]),
                        onClick: () => {
                            t(y.BVt.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                        },
                    }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k._V, { src: n(37772), className: K.SX }),
                (0, a.jsx)(k.hE, { className: K.QB, children: Q.intl.string(Q.t.ox9hIS) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t["/dcuR5"]) }),
                (0, a.jsx)("div", {
                    className: K.eT,
                    children: (0, a.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let ex = h.Ay.connectStores([eu.A], () => ({ defaultRoute: eu.A.defaultRoute }))(eg);
var ef = n(628284),
    eA = n(557722),
    ep = n(628387),
    eE = n(148864),
    e_ = n(354948);
n(53516);
var ej = n(653307);
let eN = ["loopback-network", "local-network-access"];
async function eT() {
    if ("u" < typeof navigator || null == navigator.permissions) return "unknown";
    for (let e of eN)
        try {
            return (await navigator.permissions.query({ name: e })).state;
        } catch {}
    return "unknown";
}
var eI = n(736056),
    ev = n(122906),
    eC = n(121623),
    eS = n(31008);
function eb(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s = 288, height: r = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: r },
        src: eS.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var ey = n(154672),
    eR = n(331322),
    eO = n(534514),
    eL = n(289873),
    ek = n(794347);
function eP(e) {
    let { title: t, subtitle: n, buttonText: i, image: l, onButtonClick: s, loading: r } = e;
    return (0, a.jsx)(k.Ay, {
        className: ek.kL,
        children: (0, a.jsxs)(eR.B, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, a.jsxs)(eR.B, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, a.jsxs)(eR.B, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != l &&
                                    (0, a.jsx)(eR.B, {
                                        align: "center",
                                        justify: "center",
                                        className: ek.Sl,
                                        children: l,
                                    }),
                                r && (0, a.jsx)(eL.y, { type: eL.y.Type.SPINNING_CIRCLE }),
                                (0, a.jsx)(eO.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, a.jsx)(U.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                className: ek.VA,
                                children: n,
                            }),
                    ],
                }),
                !r && (0, a.jsx)(M.$, { onClick: s, text: i, variant: "overlay-primary" }),
            ],
        }),
    });
}
let eG = !1,
    eD = null,
    eV = null;
class ew extends h.Ay.Store {
    static displayName = "HubEmailVerificationStore";
    getState() {
        return { verifySuccess: eG, verifyErrors: eD, redirectGuildId: eV };
    }
}
let eU = new ew(g.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        (eG = !0), (eD = null), (eV = t);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        (eG = !1), (eD = t);
    },
});
var eM = n(284009),
    eB = n.n(eM),
    eF = n(481613),
    eW = n.n(eF),
    ez = n(400253),
    eQ = n(742821),
    eH = n(80703),
    eK = n(495544),
    eq = n(877062);
h.Ay.initialize();
var eX = n(842241),
    eY = n(873174),
    e$ = n(280513),
    eJ = n(717421),
    eZ = n(661531),
    e0 = n(359778),
    e1 = n(235986),
    e2 = n(592743);
function e3(e) {
    let { text: t, buttonCta: i, onClick: l } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(k._V, { src: n(431979) }),
            (0, a.jsx)(k.hE, { className: w()(K.QX, K.QB, ej.tR), children: Q.intl.string(Q.t.eL5z0i) }),
            (0, a.jsx)(k.tK, { className: K.C2, children: Q.intl.string(Q.t.poAv63) }),
            (0, a.jsxs)(e0.Z, {
                className: e2.Nr,
                type: e0.Z.Types.CUSTOM,
                children: [
                    (0, a.jsx)("img", { alt: "", className: e2.q8, src: n(355912) }),
                    (0, a.jsx)("img", { alt: "", className: e2.dw, src: n(610925) }),
                    (0, a.jsxs)(e1.A, {
                        className: e2.p_,
                        direction: e1.A.Direction.VERTICAL,
                        align: e1.A.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, a.jsx)(U.E, {
                                tag: "strong",
                                className: e2.p8,
                                variant: "text-md/normal",
                                style: { color: eZ.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, a.jsx)("div", {
                                className: e2.x6,
                                children: (0, a.jsx)(M.$, { text: i, fullWidth: !0, onClick: l }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e8(e) {
    let { text: t, buttonCta: n, theme: i = y.NJ8.DARK, onClick: l } = e;
    return (0, a.jsx)(k.Ay, { theme: i, children: (0, a.jsx)(e3, { text: t, buttonCta: n, onClick: l }) });
}
var e7 = n(765671),
    e4 = n(9994),
    e6 = n(71393),
    e5 = n(299091),
    e9 = n(486020),
    te = n(403362),
    tt = n(778712),
    tn = n(47167),
    ti = n(137177),
    tl = n(714991),
    ts = n(427262),
    tr = n(172799),
    ta = n(330936),
    to = n(82210);
let tc = (e) => {
        let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
        return 0 === t.memberCount && 0 === t.memberCount ? null : t;
    },
    td = (e) => e.target_type === tr.yV.STREAM && null != e.target_user,
    tu = (e) => e.channel?.type === y.rbe.GROUP_DM,
    tm = (e) => null == e.channel && null == e.guild && null != e.inviter,
    th = (e) => e.state === y.elq.ACCEPTED,
    tg = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    tx = (e) => {
        let t;
        return !tg(e) && (!!tm(e) || (null != e.inviter && !th(e) && ((t = tc(e)), !((t?.memberCount ?? 0) > 100))));
    },
    tf = (e) => {
        let { guild: t, user: n, application: i } = e;
        return null != i
            ? (0, a.jsx)(ti.A, { className: to.Z2, game: i, size: to.q6 })
            : null != n
              ? (0, a.jsx)(k.eu, {
                    src: n.getAvatarURL(void 0, 100),
                    size: tt._3.DEPRECATED_SIZE_100,
                    className: to.my,
                })
              : null != t
                ? (0, a.jsx)(k.$v, { guild: t, size: k.$v.Sizes.LARGER, className: to.$f, animate: !0 })
                : null;
    };
function tA(e) {
    let { invite: t, textClassName: n, className: i } = e,
        l = tc(t);
    return null == l || tx(t) || t?.guild?.id === ta.TA
        ? null
        : (0, a.jsx)(k.R1, {
              className: w()(to.He, i),
              online: l.onlineCount,
              total: l.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function tp(e) {
    let { invite: t, showBigUserIcon: n } = e,
        i = o.useMemo(
            () =>
                n
                    ? null
                    : td(t) && null != t.target_user
                      ? e9.Ay.getUserAvatarURL(t.target_user)
                      : tx(t) && null != t.inviter
                        ? e9.Ay.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        l = Q.intl.string(Q.t["3rE1P8"]);
    return (
        tu(t)
            ? (l =
                  t.channel?.name != null && t.inviter?.username != null
                      ? Q.intl.format(Q.t.Lu4h18, { username: t.inviter.username })
                      : Q.intl.string(Q.t.OsdY8B))
            : td(t) && null != t.target_user
              ? (l = Q.intl.formatToPlainString(Q.t.x2L32Q, { username: t.target_user.username }))
              : th(t)
                ? (l = Q.intl.string(Q.t["FDsl+J"]))
                : tx(t) &&
                  null != t.inviter &&
                  (l = Q.intl.format(Q.t.spU2mI, { username: ts.Ay.getFormattedName(t.inviter) })),
        (0, a.jsxs)("div", {
            className: to.JB,
            children: [
                null != i &&
                    (0, a.jsx)("div", {
                        className: to._t,
                        children: (0, a.jsx)(k.eu, { src: i, size: tt._3.SIZE_24 }),
                    }),
                (0, a.jsx)(k.tK, { className: to.__invalid_inviteJoinSubTitle, children: l }),
            ],
        })
    );
}
function tE(e) {
    let t,
        n,
        i,
        { user: l, guild: s, channel: r, application: o, showBigUserIcon: c } = e,
        d = (0, tn.Ay)(r);
    if (null != s)
        c && null == o && (t = (0, a.jsx)(k.$v, { guild: s, size: k.$v.Sizes.SMALL })),
            (n = s.name),
            null != o &&
                ((n = o.name),
                (i = (0, a.jsxs)("div", {
                    className: to.JB,
                    children: [
                        (0, a.jsx)(k.tK, { className: to.R9, children: Q.intl.string(Q.t["3gg9fF"]) }),
                        (0, a.jsxs)("div", {
                            className: to.bo,
                            children: [
                                (0, a.jsx)(k.$v, { guild: s, size: k.$v.Sizes.SMALL }),
                                (0, a.jsx)(eO.D, {
                                    color: "text-strong",
                                    variant: "heading-xl/semibold",
                                    children: s.name,
                                }),
                            ],
                        }),
                    ],
                })));
    else if (null != r) {
        if (null == l) throw Error("no inviter in group DM invite");
        let e = ts.Ay.getFormattedName(l);
        null != d && "" !== d
            ? ((n = d), null != r.icon && (t = (0, a.jsx)(k.F4, { channel: r, size: tt._3.SIZE_32 })))
            : (n = e);
    } else if (null != l) {
        let e = ts.Ay.getFormattedName(l);
        (n = Q.intl.formatToPlainString(Q.t["4aF92R"], { username: e })),
            (i = (0, a.jsx)(k.tK, { className: to.b$, children: Q.intl.format(Q.t.Quj7HX, { username: e }) }));
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(k.hE, {
                className: to.DD,
                children: [
                    null != s ? (0, a.jsx)(tl.A, { guild: s, className: to.n2, tooltipPosition: "left" }) : null,
                    t,
                    n,
                ],
            }),
            i,
        ],
    });
}
var t_ = n(395671),
    tj = n(95701),
    tN = n(889227),
    tT = n(548118),
    tI = n(557582),
    tv = n(167630),
    tC = n(367048);
function tS(e) {
    let { guildScheduledEvent: t, channel: n, onAcceptInvite: i, isSubmitting: l } = e;
    return (0, a.jsxs)("div", {
        className: tC.s4,
        children: [
            (0, a.jsx)(tI.Ay, {
                name: t.name,
                description: t.description ?? void 0,
                headerVariant: "heading-md/medium",
                descriptionClassName: tC.__invalid_channelDescription,
                guildId: t.guild_id,
                guildEvent: t,
                eventPreview: t,
            }),
            null != n &&
                (0, a.jsx)("div", {
                    className: tC.yW,
                    children: (0, a.jsx)(tv.A, { guildScheduledEvent: t, channel: n }),
                }),
            (0, a.jsx)("div", {
                className: tC.xG,
                children: (0, a.jsx)(M.$, {
                    variant: "active",
                    size: "md",
                    text: Q.intl.string(Q.t.riu2R5),
                    onClick: i,
                    loading: l,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
function tb(e) {
    let { invite: t } = e,
        n = null != t.guild ? (0, em.DY)(t.guild) : null;
    if (null == n) return null;
    let i = n.description ?? "";
    return (0, a.jsxs)("div", {
        className: tC.kQ,
        children: [
            (0, a.jsx)(eO.D, { className: tC.s7, variant: "text-sm/medium", children: Q.intl.string(Q.t.Eabu1z) }),
            (0, a.jsxs)("div", {
                className: tC.bo,
                children: [
                    (0, a.jsx)(tT.Ay, { guild: n, active: !0, size: tT.Ay.Sizes.MEDIUM }),
                    (0, a.jsxs)("div", {
                        className: tC.bW,
                        children: [
                            (0, a.jsxs)(U.E, {
                                className: tC.J5,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, a.jsx)(tl.A, { guild: n, className: tC.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, a.jsx)(tA, { invite: t, textClassName: tC.kS, className: tC.pe }),
                        ],
                    }),
                ],
            }),
            i.length > 0 &&
                (0, a.jsx)("details", {
                    className: tC.x_,
                    children: (0, a.jsx)(U.E, { color: "text-default", variant: "text-sm/normal", children: i }),
                }),
        ],
    });
}
function ty(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: l } = e,
        { guild_scheduled_event: s } = t;
    return null != s
        ? (0, a.jsx)(tS, { guildScheduledEvent: s, channel: n, isSubmitting: i, onAcceptInvite: l })
        : null;
}
var tR = n(467661);
function tO(e) {
    let { invite: t, onAcceptInvite: n, disableUser: i = !1 } = e;
    if (null == t) return null;
    let l = null != t.guild ? (0, em.DY)(t.guild) : null,
        s = null != t.channel ? (0, tj.OY)(t.channel) : null,
        r = null != t.target_application ? new t_.Ay(t.target_application) : null,
        o = i || null == t.inviter ? null : new tN.A(t.inviter),
        c =
            !(
                (null != t.approximate_member_count && t.approximate_member_count > 100) ||
                (null != l && l.features.has(y.GuildFeatures.COMMUNITY))
            ) &&
            null != o &&
            tu(t),
        d = ((e) => {
            let { state: t } = e;
            switch (t) {
                case y.elq.ACCEPTING:
                case y.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        u = { invite: t, user: o, guild: l, channel: s, application: r };
    return tg(t)
        ? (0, a.jsx)(ty, { invite: t, channel: s, isSubmitting: d, onAcceptInvite: n })
        : (0, a.jsxs)("div", {
              className: tR.kL,
              children: [
                  (0, a.jsx)(tf, { application: r, guild: l, user: c || tm(t) ? o : null }),
                  tm(t) ? null : (0, a.jsx)(tp, { ...u, showBigUserIcon: c }),
                  (0, a.jsx)(tE, { ...u, showBigUserIcon: c }),
                  (0, a.jsx)(tA, { ...u }),
                  (0, a.jsx)("div", {
                      className: tR.xG,
                      children: (0, a.jsx)(M.$, {
                          variant: "primary",
                          size: "md",
                          text: Q.intl.string(Q.t.ohMvm1),
                          onClick: n,
                          loading: d,
                          fullWidth: !0,
                      }),
                  }),
              ],
          });
}
var tL = n(473644),
    tk = n(57930),
    tP = n(115703),
    tG = n(438842),
    tD = n(888849);
function tV(e) {
    let { invite: t, guild: n, profile: i, onAcceptInvite: l } = e,
        { gamesToDisplay: s, lastGameToDisplay: r, remainingGames: o } = (0, tP.A)(i),
        c = (function (e) {
            let { state: t } = e;
            switch (t) {
                case y.elq.ACCEPTING:
                case y.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        d = i.description ?? n.description;
    return (0, a.jsxs)("div", {
        className: tD.f_,
        children: [
            (0, a.jsxs)("div", {
                className: tD.qQ,
                children: [
                    (0, a.jsx)("div", {
                        className: tD.WT,
                        children: (0, a.jsx)("div", { className: tD.g_, "aria-hidden": !0 }),
                    }),
                    (0, a.jsxs)("div", {
                        className: tD.TS,
                        children: [
                            (0, a.jsx)(tk.A, { guild: n, outline: !0 }),
                            (0, a.jsxs)(eR.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, a.jsx)(tL.A, {
                                        guild: n,
                                        invite: t,
                                        showGuildTag: !0,
                                        highContrast: !0,
                                        hideEnglish: !0,
                                    }),
                                    null != d &&
                                        "" !== d &&
                                        (0, a.jsx)(U.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: d,
                                        }),
                                    (0, a.jsx)(tG.A, {
                                        gamesToDisplay: s,
                                        lastGameToDisplay: r,
                                        remainingGames: o,
                                        activity: i.gameActivity,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: tD.Fx,
                children: (0, a.jsx)(M.$, {
                    variant: "primary",
                    size: "md",
                    text: Q.intl.string(Q.t.ohMvm1),
                    onClick: l,
                    loading: c,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
let tw = (0, n(945810).mj)({
        name: "2026-03-mobile-web-invite-server-profile",
        kind: "installation",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    tU = n(843020);
function tM(e) {
    if (null == e || !e$.i.VISIBLE.has(e.visibility)) return !1;
    let t = null != e.description && e.description.length > 0,
        n = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
    return t || n;
}
function tB() {
    return (0, a.jsx)("div", { className: tD.$k, children: (0, a.jsx)(eL.y, {}) });
}
function tF(e) {
    let t = e?.state == null && e?.channel == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case y.elq.RESOLVED:
        case y.elq.ACCEPTED:
        case y.elq.APP_NOT_OPENED:
        case y.elq.APP_OPENED:
        case y.elq.ACCEPTING:
        case y.elq.APP_OPENING:
            return 1;
        case y.elq.EXPIRED:
        case y.elq.BANNED:
        case y.elq.ERROR:
            return 2;
        case y.elq.RESOLVING:
            return 0;
        default:
            (0, te.xb)(n);
    }
}
function tW(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === y.elq.BANNED
        ? (0, a.jsx)(e3, { text: Q.intl.string(Q.t["5AkWAd"]), buttonCta: Q.intl.string(Q.t["8osdkn"]), onClick: n })
        : (0, a.jsx)(e3, { text: Q.intl.string(Q.t["usP+Mb"]), buttonCta: Q.intl.string(Q.t["8osdkn"]), onClick: n });
}
function tz(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: i, sectionClassName: l, inviteCardClassName: s = tD.qF } = e,
        { ref: r, height: o } = (0, e7.Ay)(),
        c = (0, eJ.z)({ height: null != o && 0 !== o ? `${o}px` : `${i}px`, config: eY.config.stiff });
    return (0, a.jsxs)(eY.animated.div, {
        className: s,
        style: c,
        children: [
            (0, a.jsx)(eY.animated.div, {
                className: tD.NS,
                style: c,
                children: (0, a.jsx)("section", { ref: r, className: l, children: t }),
            }),
            n,
        ],
    });
}
function tQ(e) {
    let { invite: t } = e;
    if (null == t || !tg(t)) return null;
    let n = tF(t);
    return (0, a.jsx)(tz, {
        startAnimHeightPx: 0,
        sectionClassName: tD.ui,
        children: 1 === n ? (0, a.jsx)(tb, { invite: t }) : null,
    });
}
let tH = { 1: tD._r, 2: tD.Gm, 0: tD.Kt };
function tK(e) {
    let t,
        { invite: n } = e,
        i = tF(n),
        { enabled: l } = tw.useConfig({ location: "AcceptInviteMobile" }),
        s = null != n ? (0, e4.oO)(n) : null,
        r = n?.guild != null ? (0, em.DY)(n.guild) : null,
        c = null != r && tM(s) && null != n && !tg(n),
        d = l && c;
    o.useEffect(() => {
        c && tw.getConfig({ location: "AcceptInviteMobile.hasProfile" });
    }, [c]);
    let u = o.useRef(!1);
    if (
        (o.useEffect(() => {
            u.current ||
                (null != n &&
                    1 === i &&
                    ((u.current = !0),
                    S.default.track(y.HAw.INVITE_ACCEPT_BUTTON_RENDERED, {
                        invite_code: n.code,
                        guild_id: n.guild?.id,
                        duration_ms_since_page_load: Math.round(performance.now()),
                    })));
        }, [n, i]),
        null == n)
    )
        t = (0, a.jsx)(tB, {});
    else
        switch (i) {
            case 1:
                t = d
                    ? (0, a.jsx)(tV, { invite: n, guild: r, profile: s, onAcceptInvite: e.onAcceptInvite })
                    : (0, a.jsx)(tO, { ...e, invite: n });
                break;
            case 2:
                t = (0, a.jsx)(tW, { ...e, invite: n });
                break;
            default:
                t = (0, a.jsx)(tB, {});
        }
    let m = 1 === i && d ? tD.c4 : tD.qF;
    return (0, a.jsx)(tz, { startAnimHeightPx: 200, sectionClassName: tH[i], inviteCardClassName: m, children: t });
}
function tq(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = t ?? {},
        l = {},
        { enabled: s } = tw.useConfig({ location: "AcceptInviteMobile" }),
        r = null != t ? (0, e4.oO)(t) : null,
        o = null != i && tM(r) && null != t && !tg(t);
    if (i?.splash != null) {
        let e = e9.Ay.getGuildSplashURL({ id: i.id, splash: i.splash });
        null != e && ((l.backgroundImage = `url(${e})`), (l.backgroundSize = "cover"));
    } else s && o && ((l.backgroundImage = `url(${tU})`), (l.backgroundSize = "cover"));
    return (0, a.jsxs)(k.Ay, {
        theme: y.NJ8.DARK,
        className: tD.G3,
        style: l,
        contentClassName: tD.__,
        children: [(0, a.jsx)(tK, { ...e, onAcceptInvite: n }), (0, a.jsx)(tQ, { ...e })],
    });
}
var tX = n(723702);
function tY(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s = 288, height: r = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/f116e92cafb14967bf471809621718b4c2fe5abd27c9236c1ab4353d32a9fc6c.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var t$ = n(611346),
    tJ = n(604880);
function tZ(e) {
    let { token: t, hasError: n, errorReason: i } = e;
    return n
        ? (0, a.jsxs)("div", {
              className: t$.MY,
              children: [
                  (0, a.jsx)("div", { className: t$.r$, children: (0, a.jsx)("img", { src: tJ, alt: "" }) }),
                  (0, a.jsxs)("div", {
                      className: t$.Qs,
                      children: [
                          (0, a.jsx)(tY, { alt: "" }),
                          (0, a.jsx)(eO.D, {
                              variant: "heading-lg/semibold",
                              className: t$.ky,
                              children: Q.intl.string(Q.t.RtCSr1),
                          }),
                          (0, a.jsx)(U.E, {
                              variant: "text-md/normal",
                              className: t$.G3,
                              children: Q.intl.string(Q.t["S+YjYJ"]),
                          }),
                          (0, a.jsx)(M.$, {
                              variant: "primary",
                              text: Q.intl.string(Q.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  S.default.track(y.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: i }),
                                      (0, P.pX)(y.BVt.LOGIN);
                              },
                          }),
                      ],
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: t$.MY,
              children: [
                  (0, a.jsx)("div", { className: t$.r$, children: (0, a.jsx)("img", { src: tJ, alt: "" }) }),
                  (0, a.jsxs)("div", {
                      className: t$.Qs,
                      children: [
                          (0, a.jsx)(tY, { alt: "" }),
                          (0, a.jsx)(eO.D, {
                              variant: "heading-lg/semibold",
                              className: t$.ky,
                              children: Q.intl.string(Q.t["9h/0Rl"]),
                          }),
                          (0, a.jsx)(U.E, {
                              variant: "text-md/normal",
                              className: t$.G3,
                              children: Q.intl.string(Q.t.Wgm7Om),
                          }),
                          (0, a.jsx)(M.$, {
                              variant: "primary",
                              text: Q.intl.string(Q.t.NydsTd),
                              fullWidth: !0,
                              onClick: () => {
                                  let e, n;
                                  (e = (function (e) {
                                      let t = platform.os?.family;
                                      if ("Android" === t || "iOS" === t) {
                                          let t = eK.default.getFingerprint(),
                                              n = (0, eQ.I_)(),
                                              i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/login/one-time?token=${e}`;
                                          return (0, eQ.Ay)(i, {
                                              utmSource: "one-time-login",
                                              fingerprint: t,
                                              attemptId: n,
                                          });
                                      }
                                      return "discord://";
                                  })(t)),
                                      (n = (0, eQ.X7)(e)),
                                      S.default.track(y.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                                          detection_type: "mobile_button_clicked",
                                          device_type: u.Fr ? "mobile" : "tablet",
                                          platform: S.default.getSuperProperties()?.os,
                                      }),
                                      null != n &&
                                          S.default.track(y.HAw.DEEP_LINK_CLICKED, {
                                              fingerprint: (0, eH.v)(n.fingerprint),
                                              attempt_id: n.attemptId,
                                              source: n.utmSource,
                                          }),
                                      eq.A.launch(e, (e) => {
                                          e || (0, P.bG)({ pathname: y.BVt.LOGIN });
                                      });
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var t0 = n(613057);
let t1 = (e) => {
    let { title: t, subtitle: n, buttonText: i, buttonOnClick: l } = e;
    return (0, a.jsx)(k.Ay, {
        children: (0, a.jsxs)(eR.B, {
            gap: 24,
            children: [
                (0, a.jsxs)(eR.B, {
                    gap: 8,
                    children: [(0, a.jsx)(k.hE, { children: t }), (0, a.jsx)(k.tK, { children: n })],
                }),
                (0, a.jsx)(M.$, { onClick: l, text: i, fullWidth: !0 }),
            ],
        }),
    });
};
var t2 = n(463347),
    t3 = n(189213),
    t8 = n(192308),
    t7 = n(347704),
    t4 = n(803306),
    t6 = n(17372),
    t5 = n(369053),
    t9 = n(975571),
    ne = n(928658);
async function nt(e, t) {
    try {
        await (0, t5.TP)(e, t);
    } catch (e) {
        if (null != e && "object" == typeof e && 429 === e.status)
            throw { status: 429, body: { message: Q.intl.string(Q.t.Z2hIUf) } };
        throw e;
    }
}
function nn(e, t) {
    let i = !1,
        l = () => {
            i || t?.();
        },
        s = (s) => {
            (i = !0),
                setTimeout(() => {
                    i = !1;
                }, 0);
            let r = () => nt(e, s),
                o = async (t) => await (0, t5.G_)(e, s, t),
                c = (n) => {
                    (i = !0),
                        setTimeout(() => {
                            i = !1;
                        }, 0);
                    let l = n?.token;
                    e === t6.tY.MESSAGE
                        ? (0, ne.bM)(l, t)
                        : e === t6.tY.USER
                          ? (0, ne.nQ)(l, t)
                          : e === t6.tY.GUILD
                            ? (0, ne.V3)(l, t)
                            : e === t6.tY.MEDIA_TAKEDOWN && (0, ne._Y)(l, t);
                };
            (0, t8.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("19840").then(n.bind(n, 79779));
                    return (t) =>
                        (0, a.jsx)(e, {
                            ...t,
                            onFormSubmit: o,
                            onResend: r,
                            onSuccess: c,
                            headerText: Q.intl.string(Q.t.H3Q7U8),
                            confirmButtonText: Q.intl.string(Q.t["13ofGu"]),
                            impression: { impressionName: d.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            );
        };
    return () => {
        (0, t8.closeAllModals)();
        let t = (t) => nt(e, t);
        (0, t8.openModalLazy)(
            async () => {
                let { default: i } = await n.e("29232").then(n.bind(n, 180275));
                return (n) =>
                    (0, a.jsx)(i, {
                        ...n,
                        onFormSubmit: t,
                        onSuccess: s,
                        headerText: Q.intl.string(Q.t.ZLRYGU),
                        confirmButtonText: Q.intl.string(Q.t.PDTjLN),
                        subtitle: e === t6.tY.MEDIA_TAKEDOWN ? Q.intl.string(Q.t.jt3z8f) : void 0,
                    });
            },
            { onCloseCallback: l, dismissable: !1 },
        );
    };
}
var ni = n(939249),
    nl = n(921853),
    ns = n(750997);
let nr = { [t6.tY.MESSAGE]: Q.t.fuqnBC, [t6.tY.USER]: Q.t.F4jrRW, [t6.tY.GUILD]: Q.t.gH3aMs },
    na = (e) => {
        let { title: t, menuType: n, onReopen: i } = e,
            l = o.useCallback(() => {
                nn(n, i)();
            }, [n, i]);
        return (0, a.jsxs)(ni.D, {
            className: ns.b0,
            onClick: l,
            children: [
                (0, a.jsx)(U.E, { variant: "text-md/medium", children: t }),
                (0, a.jsx)(nl.n, { size: "sm", style: { transform: "rotate(180deg)" } }),
            ],
        });
    },
    no = (e) => {
        let { dsaCapabilities: t, onReopen: n } = e;
        return (0, a.jsx)(eR.B, {
            gap: 16,
            children: (0, a.jsx)("div", {
                className: ns.kL,
                children: t.map((e) =>
                    e === t6.tY.MEDIA_TAKEDOWN || null == nr[e]
                        ? null
                        : (0, a.jsx)(na, { title: Q.intl.string(nr[e]), menuType: e, onReopen: n }, e),
                ),
            }),
        });
    };
var nc = n(881636),
    nd = n(913951);
let nu = () => {
    let { goToStep: e } = (0, t7.n)(),
        t = o.useCallback(() => {
            e(nx.DSA);
        }, [e]),
        n = o.useCallback(() => {
            e(nx.TIDA);
        }, [e]);
    return (0, a.jsxs)(eR.B, {
        gap: 8,
        children: [
            (0, a.jsx)(U.E, { variant: "text-md/normal", children: Q.intl.string(Q.t.bd1h5T) }),
            (0, a.jsxs)("div", {
                className: nd.k,
                children: [
                    (0, a.jsxs)(ni.D, {
                        className: nd.b,
                        onClick: t,
                        children: [
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(U.E, {
                                        variant: "text-md/medium",
                                        children: Q.intl.string(Q.t["AszWL/"]),
                                    }),
                                    (0, a.jsx)(U.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: Q.intl.string(Q.t["0Jikui"]),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(nc.u, { size: "sm" }),
                        ],
                    }),
                    (0, a.jsxs)(ni.D, {
                        className: nd.b,
                        onClick: n,
                        children: [
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(U.E, { variant: "text-md/medium", children: Q.intl.string(Q.t.jMSjZL) }),
                                    (0, a.jsx)(U.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: Q.intl.string(Q.t.qEaUPS),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(nc.u, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var nm = n(229503);
let nh = () =>
    (0, a.jsxs)(eR.B, {
        gap: 24,
        children: [
            (0, a.jsx)(U.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: Q.intl.string(Q.t["3zG2Y9"]),
            }),
            (0, a.jsxs)(eR.B, {
                gap: 16,
                children: [
                    (0, a.jsxs)(eR.B, {
                        gap: 8,
                        children: [
                            (0, a.jsx)(U.E, { variant: "text-md/semibold", children: Q.intl.string(Q.t.CfBo0z) }),
                            (0, a.jsxs)("ul", {
                                className: nm.T,
                                children: [
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)(U.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: Q.intl.string(Q.t.ofQnNQ),
                                        }),
                                    }),
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)(U.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: Q.intl.string(Q.t.dFaQGn),
                                        }),
                                    }),
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)(U.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: Q.intl.string(Q.t.RVNwXh),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(U.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: Q.intl.string(Q.t.o5azXJ),
                    }),
                    (0, a.jsx)(U.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: Q.intl.format(Q.t.YETtaY, {
                            policyURL: "https://discord.com/safety/non-consensual-intimate-media-policy-explainer",
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)(eR.B, {
                gap: 8,
                children: [
                    (0, a.jsx)(U.E, { variant: "text-md/semibold", children: Q.intl.string(Q.t.FJh2zi) }),
                    (0, a.jsx)(U.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: Q.intl.format(Q.t.R2Q57u, {
                            supportOrgURL: "https://stopncii.org/partners/global-network-of-partners/",
                            wellbeingURL: "https://discord.com/safety-wellbeing",
                            helpCenterURL: "https://support.discord.com/hc/articles/38675715591831",
                        }),
                    }),
                ],
            }),
        ],
    });
var ng = n(725925);
h.Ay.initialize();
var nx = (((s = {}).SELECTION = "selection"), (s.DSA = "dsa"), (s.TIDA = "tida"), s);
let nf = (e) => {
        let { transitionState: t, onClose: n } = e,
            [i, l] = o.useState(!0),
            [s, r] = o.useState([]),
            [c, d] = o.useState(null),
            u = (0, h.bG)([eK.default], () => eK.default.isAuthenticated()),
            m = (0, h.bG)([eI.A], () => eI.A.hasLoadedExperiments),
            g = o.useCallback(() => {
                (0, t5.OY)()
                    .then((e) => {
                        let {
                            body: { capabilities: t },
                        } = e;
                        l(!1), r(t);
                    })
                    .catch(() => {
                        l(!1), r([]);
                    });
            }, []);
        o.useEffect(() => {
            u
                ? (l(!0),
                  t4
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => g())
                      .catch(() => l(!1)))
                : g();
        }, [u, g]),
            o.useEffect(() => {
                (async () => {
                    m || (await x.A.getLocationMetadata(), x.A.getExperiments());
                })();
            }, [m]);
        let f = s.filter((e) => e !== t6.tY.MEDIA_TAKEDOWN),
            A = s.includes(t6.tY.MEDIA_TAKEDOWN),
            p = f.length > 0,
            E = p && A,
            _ = i || !m;
        o.useEffect(() => {
            _ || p || A || n();
        }, [_, p, A, n]);
        let j = o.useCallback(() => {
                (0, t8.openModalLazy)(() => Promise.resolve((e) => (0, a.jsx)(nf, { ...e })), { dismissable: !1 });
            }, []),
            N = o.useCallback((e, t) => {
                "selection" !== t && "selection" !== e ? d("selection") : d(e);
            }, []),
            T = o.useMemo(() => nn(t6.tY.MEDIA_TAKEDOWN, j), [j]),
            I = c ?? (E ? "selection" : p ? "dsa" : "tida");
        if (_ || (!p && !A))
            return (0, a.jsx)(t3.Modal, {
                title: "",
                actions: [],
                transitionState: t,
                onClose: n,
                dismissable: !1,
                children: (0, a.jsx)(eR.B, {
                    gap: 16,
                    align: "center",
                    justify: "center",
                    style: { minHeight: "200px" },
                    children: (0, a.jsx)(eL.y, {}),
                }),
            });
        if (!E) {
            if (p)
                return (0, a.jsx)(t3.Modal, {
                    title: Q.intl.string(Q.t.Z11w18),
                    subtitle: Q.intl.format(Q.t["532l+q"], {
                        supportURL: t9.A.getArticleURL(y.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, a.jsx)(no, { dsaCapabilities: f, onReopen: j }),
                });
            if (A)
                return (0, a.jsx)(t3.Modal, {
                    title: Q.intl.string(Q.t.YignUm),
                    actions: [{ text: Q.intl.string(Q.t.D5Czbu), variant: "primary", onClick: T }],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, a.jsx)(nh, {}),
                });
        }
        let v = [
            { stepKey: "selection", modalProps: { title: Q.intl.string(Q.t.Z11w18) }, body: (0, a.jsx)(nu, {}) },
            {
                stepKey: "dsa",
                modalProps: {
                    title: Q.intl.string(Q.t.Z11w18),
                    subtitle: Q.intl.format(Q.t["532l+q"], {
                        supportURL: t9.A.getArticleURL(y.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, a.jsx)(no, { dsaCapabilities: f, onReopen: j }),
            },
            {
                stepKey: "tida",
                modalProps: { title: Q.intl.string(Q.t.YignUm) },
                body: (0, a.jsx)(nh, {}),
                nextButtonProps: { text: Q.intl.string(Q.t.D5Czbu) },
                onNext: () => (T(), !1),
            },
        ];
        return (0, a.jsx)("div", {
            className: { selection: ng.a, dsa: ng.q, tida: void 0 }[I],
            children: (0, a.jsx)(t7.t, {
                steps: v,
                currentStepKey: I,
                onStepChange: N,
                onClose: n,
                transitionState: t,
                dismissable: !1,
            }),
        });
    },
    nA = () => (
        o.useEffect(() => {
            (0, t8.openModalLazy)(() => Promise.resolve((e) => (0, a.jsx)(nf, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
var np = n(30793),
    nE = n(970928),
    n_ = n(612181),
    nj = n(179689);
let nN = {
    dump(e) {
        let t;
        null != performance.memory &&
            (t = {
                jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                totalJSHeapSize: performance.memory.totalJSHeapSize,
                usedJSHeapSize: performance.memory.usedJSHeapSize,
            }),
            e({
                browser: { name: eW().name, version: eW().version },
                os: { name: eW().os.family, version: eW().os.version },
                memory: t,
            });
    },
    getTimeSinceNavigationStart: () => Date.now() - nj.fL,
};
var nT = n(111956),
    nI = n.n(nT),
    nv = n(615300),
    nC = n(319060),
    nS = n(844222),
    nb = n(240248),
    ny = n(115617);
let nR = (0, nb.xI)(nC.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    nO = { friction: 10, tension: 130 },
    nL = function (e) {
        return class extends o.Component {
            timeout;
            anim = new nv.A.Value(0);
            state = { shouldAnimate: !u.Fr };
            componentDidMount() {
                u.Fr || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize());
            }
            handleResize = () => {
                let e = window.innerWidth > nR;
                !this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({ shouldAnimate: e });
            };
            handleResizeDebounced = nI()(this.handleResize, 60);
            componentWillUnmount() {
                clearTimeout(this.timeout), window.removeEventListener("resize", this.handleResizeDebounced);
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
                nv.A.spring(this.anim, { toValue: e, ...nO }).start(t);
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
                return (0, a.jsx)("div", {
                    className: ny.i,
                    children: (0, a.jsx)(nS.C.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, a.jsx)(nv.A.div, {
                                className: ny.l,
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, a.jsx)(e, { ...this.props }),
                            });
                        },
                    }),
                });
            }
        };
    };
var nk = n(603647),
    nP = n(970672),
    nG = n(129014),
    nD = n(642277);
let nV = function (e) {
    let { match: t, location: n, attemptDeepLink: i } = e,
        [l, s] = o.useState(0);
    o.useEffect(() => {
        nG.default.once("connected", () => {
            s(1);
        }),
            nG.default.once("disconnected", () => {
                (0, P.pX)((0, nD.W)());
            }),
            nG.default.connect();
    }, []),
        o.useEffect(() => {
            if (0 !== l) return;
            let e = setTimeout(() => (0, P.pX)((0, nD.W)()), 3e3);
            return () => clearTimeout(e);
        }, [l]);
    let r = o.useCallback(
        async (e, t) => {
            try {
                s(2), await i(e, t), s(3);
            } catch (e) {
                console.error("Error opening deeplink", e);
            }
        },
        [i],
    );
    if ((0, P.MX)()) return null;
    switch (l) {
        case 1:
            return (0, a.jsxs)(k.Ay, {
                children: [
                    (0, a.jsx)(k.hE, { className: K.QB, children: Q.intl.string(Q.t.qllnGm) }),
                    (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.SXCxye) }),
                    (0, a.jsx)("div", {
                        className: K.eT,
                        children: (0, a.jsx)(M.$, {
                            text: Q.intl.string(Q.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => r(t, n),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: w()(K.Ot, K.F1),
                        children: (0, a.jsx)(ed.Q, {
                            text: Q.intl.string(Q.t["2ixEBi"]),
                            textVariant: "text-sm/normal",
                            onClick: () => (0, P.pX)((0, nD.W)()),
                        }),
                    }),
                ],
            });
        case 0:
        case 2:
            return (0, a.jsxs)(k.Ay, {
                children: [(0, a.jsx)(k.hE, { children: Q.intl.string(Q.t["Z+hCVU"]) }), (0, a.jsx)(k.CK, {})],
            });
        case 3:
            return (0, a.jsxs)(k.Ay, {
                children: [
                    (0, a.jsx)(k.hE, { className: K.QB, children: Q.intl.string(Q.t.csrAMJ) }),
                    (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.ghBJz9) }),
                ],
            });
    }
};
var nw = n(431144);
h.Ay.initialize();
class nU extends o.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, eh.A)(this.props.location),
            t = (0, c.parse)(this.props.location.search);
        p.Bo.post({
            url: y.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, category: t.category, email_type: t.email_type },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { user: n },
                    } = e,
                    i = new tN.A(n);
                this.setState({ success: !0, busy: !1, user: i, category: t.category });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, G.d)("disable_email_notifications");
    }
    renderBusy() {
        return (0, a.jsx)(k.Ay, { children: (0, a.jsx)(k.CK, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: i } = this.props,
            l = Q.intl.formatToPlainString(Q.t.YDAohB, { category: t });
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: K.QB, children: Q.intl.string(Q.t.f6rdLg) }),
                (0, a.jsx)(k.tK, { children: l }),
                (0, a.jsx)("div", {
                    className: K.QX,
                    children: (0, a.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => i(n) }),
                }),
                (0, a.jsx)("div", {
                    className: K.Ot,
                    children: (0, a.jsx)(ed.Q, {
                        text: Q.intl.string(Q.t.YYTirT),
                        textVariant: "text-sm/normal",
                        onClick: () => i((0, j.settingsPathToRoute)(T.od.NOTIFICATIONS_EMAILS)),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: i } = this.state;
        if (null != i) {
            let e = nw.px.find((e) => e.category === i);
            if (null != e) return this.renderCategorySuccess(i, e.label());
        }
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: tt._3.DEPRECATED_SIZE_100,
                    className: K.SX,
                }),
                (0, a.jsx)(k.hE, { className: K.QB, children: Q.intl.string(Q.t["6U6OMQ"]) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t["yaDJ4/"]) }),
                (0, a.jsx)("div", {
                    className: K.eT,
                    children: (0, a.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k._V, { src: n(37772), className: K.SX }),
                (0, a.jsx)(k.hE, { className: K.QB, children: Q.intl.string(Q.t.ox9hIS) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t["/dcuR5"]) }),
                (0, a.jsx)("div", {
                    className: K.eT,
                    children: (0, a.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let nM = h.Ay.connectStores([eu.A], () => ({ defaultRoute: eu.A.defaultRoute }))(nU);
var nB = n(110782),
    nF = n(10088),
    nW = n(871123),
    nz = n(189081),
    nQ = n(67480),
    nH = n(45938),
    nK = n(587895),
    nq = n(242874),
    nX = n(75825),
    nY = n(287809),
    n$ = n(97352),
    nJ = n(615396),
    nZ = n(788868),
    n0 = n(402693);
let n1 = h.Ay.connectStores([nQ.A, nK.A, n$.A, nY.default], (e) => {
    let { giftCode: t } = e,
        n = nQ.A.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, nJ.c9)(i) : null,
        application: nK.A.getApplication(n.applicationId),
        gifter: nY.default.getUser(t.userId),
    };
})((e) => {
    let { error: t, giftCode: n, gifter: i, sku: l, application: s, subscriptionPlan: r } = e,
        c = null == i ? Q.intl.string(Q.t.lTGZAl) : Q.intl.formatToPlainString(Q.t.TjWdPc, { username: i.username }),
        d = l.name;
    return (
        null != r &&
            (d = Q.intl.formatToPlainString(r.interval === nZ.WT.MONTH ? Q.t.CTpcCZ : Q.t["rgPWG/"], {
                skuName: l.name,
                intervalCount: r.intervalCount,
            })),
        (0, a.jsxs)(o.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, a.jsx)(nX.A, { defaultAnimationState: nq.oA.LOOP, giftStyle: n.giftStyle, className: n0.e })
                    : (0, a.jsx)(k.eu, {
                          src: null != i ? i.getAvatarURL(void 0, 100) : null,
                          size: tt._3.DEPRECATED_SIZE_100,
                          className: K.SX,
                      }),
                null != t
                    ? (0, a.jsxs)(o.Fragment, {
                          children: [
                              (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.mDFGFj) }),
                              (0, a.jsx)(k.hE, { children: t }),
                          ],
                      })
                    : (0, a.jsxs)(o.Fragment, {
                          children: [
                              (0, a.jsx)(k.tK, { children: c }),
                              (0, a.jsxs)(k.hE, {
                                  className: w()(K.Ot, ej.tR),
                                  children: [
                                      l.productLine !== y.EZt.COLLECTIBLES &&
                                          (0, a.jsx)(ti.A, {
                                              size: ti.M.MEDIUM,
                                              className: n0.I,
                                              game: s,
                                              skuId: l.id,
                                          }),
                                      d,
                                  ],
                              }),
                          ],
                      }),
            ],
        })
    );
});
var n2 = n(935399),
    n3 = n(475743),
    n8 = n(707554),
    n7 = n(379154);
function n4(e) {
    let { loginStatus: t, authBoxClassName: n, onSubmit: i, onCancelAccountDeletion: l } = e,
        s = t === y.aUe.ACCOUNT_DISABLED,
        r = s ? Q.intl.string(Q.t["j3rC+U"]) : Q.intl.string(Q.t.ZFWofo),
        o = s ? Q.intl.string(Q.t["6eNTWe"]) : Q.intl.string(Q.t["pCBti+"]);
    return (0, a.jsx)(k.Ay, {
        tag: "form",
        onSubmit: i,
        className: n,
        children: (0, a.jsxs)(n8.F, {
            component: (0, a.jsx)(k.hE, { className: K.QB, children: r }),
            children: [
                (0, a.jsx)(k.tK, { className: K.SX, children: o }),
                (0, a.jsxs)(k.eB, {
                    children: [
                        (0, a.jsx)(M.$, { text: Q.intl.string(Q.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, a.jsx)("div", {
                            className: w()(K.Ot, n7.Qt),
                            children: Q.intl.format(Q.t.js2rr5, { onClick: l }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var n6 = n(504394),
    n5 = n(275538),
    n9 = n(431870);
function ie(e) {
    let { children: t, className: n, ...i } = e,
        l = t();
    return (0, a.jsx)(k.Ay, {
        ...i,
        className: w()(n, n9.kL),
        contentClassName: n9.Qs,
        children: l.map((e, t) =>
            (0, a.jsx)("div", { className: n9.fi, style: { flexBasis: `${100 / l.length}%` }, children: e }, t),
        ),
    });
}
var it = n(895600),
    ii = n(506774),
    il = n(927813),
    is = n(104798),
    ir = n(1959);
let ia = "mweb_handoff_nonce",
    io = "mweb_handoff_nonce_expiration",
    ic = +il.A.Millis.MINUTE,
    id = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    iu = new Set(["deep_link_failed"]),
    im = () => {
        ii.w.remove(ia), ii.w.remove(io);
    },
    ih = () => {
        let e = (0, h.bG)([eK.default], () => eK.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, c.parse)(window.location.search),
            i = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            l = i ?? (null !== e ? e : void 0);
        o.useEffect(() => {
            null !== i && e !== i && g.h.dispatch({ type: "FINGERPRINT", fingerprint: i });
        }, [i, e]);
        let [s, r] = o.useState(null),
            d = o.useCallback(
                (e) => {
                    r(e),
                        S.default.track(
                            y.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                            { reason: e, fingerprint: (0, eH.v)(l) },
                            { fingerprint: l },
                        );
                },
                [r, l],
            ),
            u = ii.w.get(ia);
        if (
            ("null" === n && null === s && d("deep_link_failed"),
            null != n && "null" !== n && null == u && null === s && d("nonce_missing"),
            o.useEffect(() => {
                if (null != u) {
                    let e = ii.w.get(io);
                    (null == e || Date.now() >= e) && (d("nonce_expired"), im());
                }
            }, [u, d]),
            o.useEffect(() => {
                null != n &&
                    "null" !== n &&
                    null != u &&
                    null == s &&
                    p.Bo.post({ url: y.Rsh.HANDOFF_EXCHANGE, body: { key: u, handoff_token: n }, rejectWithError: !0 })
                        .then((e) => x.A.loginToken(e.body.token, !1))
                        .then(() => {
                            S.default.track(y.HAw.LOGIN_SUCCESSFUL, {
                                source: y.mdB.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, eH.v)(l),
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete("handoff_token"),
                                t.delete("fingerprint"),
                                (e.search = t.toString()),
                                window.history.pushState(null, "", e);
                        })
                        .catch(() => {
                            d("handoff_exchange");
                        })
                        .finally(() => {
                            im();
                        });
            }, [n, u, s, l, d]),
            null == l)
        )
            return null;
        let m =
            null == s
                ? (0, a.jsxs)(a.Fragment, {
                      children: [Q.intl.string(Q.t.uJ1JsY), (0, a.jsx)("br", {}), Q.intl.string(Q.t.GHVWAs)],
                  })
                : iu.has(s)
                  ? Q.intl.string(Q.t.EPt55r)
                  : id.has(s)
                    ? Q.intl.string(Q.t.g87kTp)
                    : void 0;
        return null != s && iu.has(s)
            ? (0, a.jsx)("div", {
                  className: ir.Un,
                  children: (0, a.jsx)(U.E, {
                      color: "interactive-text-default",
                      variant: "text-sm/semibold",
                      children: m,
                  }),
              })
            : (0, a.jsxs)("div", {
                  className: ir.kL,
                  children: [
                      (0, a.jsx)(U.E, { variant: "text-sm/semibold", children: m }),
                      (0, a.jsx)(M.$, {
                          variant: "overlay-primary",
                          text: Q.intl.string(Q.t.NcC759),
                          onClick: () => {
                              let e = is.A.generateNonce();
                              ii.w.set(ia, e), ii.w.set(io, Date.now() + ic);
                              let t = new URL(y.J$u),
                                  n = new URLSearchParams(window.location.search);
                              n.delete("fingerprint"), n.delete("handoff_token");
                              let i = new URLSearchParams();
                              i.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                                  i.set("key", e),
                                  i.set("fingerprint", l),
                                  (t.search = i.toString()),
                                  S.default.track(
                                      y.HAw.DEEP_LINK_CLICKED,
                                      { fingerprint: (0, eH.v)(l), source: "mobile_web_handoff", destination: y.J$u },
                                      { fingerprint: l, flush: !0 },
                                  ),
                                  (window.location.href = t.toString());
                          },
                      }),
                  ],
              });
    };
var ig = n(274303),
    ix = n(139286),
    iA = n(970573),
    ip = n(364488);
function iE(e) {
    let { onDismiss: t } = e;
    return (
        (0, ix.A)({ type: d.ImpressionTypes.MODAL, name: d.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, a.jsxs)(k.Ay, {
            className: ip.ci,
            children: [
                (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.bVbB63) }),
                (0, a.jsx)(U.E, {
                    className: ip.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: Q.intl.string(Q.t["0M5fN7"]),
                }),
                (0, a.jsx)(iA.A, {
                    actionText: Q.intl.string(Q.t["DSN+hw"]),
                    onAction: (e) => {
                        e === iA.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, a.jsx)("div", {
                    className: ip.o1,
                    children: (0, a.jsx)(ed.Q, {
                        variant: "secondary",
                        size: "md",
                        textVariant: "text-sm/medium",
                        text: Q.intl.string(Q.t["9g2mqT"]),
                        onClick: t,
                    }),
                }),
            ],
        })
    );
}
function i_(e) {
    let {
        authBoxClassName: t,
        country: n,
        login: i,
        password: l,
        onLoginChange: s,
        onPasswordChange: r,
        loginRef: o,
        passwordRef: c,
    } = e;
    return (0, a.jsxs)(k.Ay, {
        className: t,
        children: [
            (0, a.jsx)(n6.M, {}),
            (0, a.jsxs)(k.eB, {
                className: K.QX,
                children: [
                    (0, a.jsx)(e_.A, {
                        className: K.SX,
                        alpha2: n.alpha2,
                        countryCode: n.code.split(" ")[0],
                        label: Q.intl.string(Q.t.tUjnxr),
                        onChange: s,
                        setRef: o,
                        autoCapitalize: "none",
                        autoComplete: "username webauthn",
                        autoCorrect: "off",
                        spellCheck: "false",
                        value: i,
                        autoFocus: !0,
                        required: !0,
                    }),
                    (0, a.jsx)(k.pd, {
                        className: K.SX,
                        label: Q.intl.string(Q.t["CIGa+7"]),
                        onChange: r,
                        type: "password",
                        setRef: c,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        value: l,
                        required: !0,
                    }),
                    (0, a.jsx)("div", {
                        className: K.QB,
                        children: (0, a.jsx)(M.$, {
                            text: Q.intl.string(Q.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, a.jsx)(ed.Q, { text: Q.intl.string(Q.t.wWIufs), textVariant: "text-sm/normal", disabled: !0 }),
                    (0, a.jsx)("div", {
                        className: K.a5,
                        children: (0, a.jsx)(ed.Q, {
                            text: Q.intl.string(Q.t.tmE73r),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var ij = n(401755);
function iN(e, t) {
    if (null == t[e]) return null;
    {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n;
    }
}
function iT(e) {
    let t,
        {
            invite: n,
            guildTemplate: i,
            giftCode: l,
            authBoxClassName: s,
            disableAutofocusOnDefaultForm: r,
            login: d,
            password: m,
            errors: g,
            loginSource: x,
            dismissedChooseAccount: f,
            setDismissedChooseAccount: A,
            conditionalMediationAbortController: p,
            onLoginChange: E,
            onPasswordChange: _,
            handleLogin: j,
            handleForgotPassword: N,
            handleGotoRegister: T,
        } = e,
        I = (0, h.bG)([eE.A], () => eE.A.getCountryCode()),
        v = (0, h.bG)([eK.default], () => eK.default.getLoginStatus()),
        C = (0, h.bG)([ig.A], () => ig.A.getHasLoggedInAccounts()),
        b = o.useCallback(
            (e) => {
                S.default.track(y.HAw.LOGIN_SUCCESSFUL, {
                    source: y.mdB.QR_CODE,
                    login_source: x,
                    gift_code_sku_id: l?.skuId ?? null,
                    is_new_user: !1,
                    login_method: "remote_auth",
                    login_instance_id: e ?? null,
                });
            },
            [x, l],
        ),
        { handoff_token: R } = (0, c.parse)(window.location.search),
        O = u.Fr && u.KY && null != R,
        L = null == g.email && null != g.password,
        P = o.useRef(null),
        G = o.useRef(null),
        D = (0, n3.A)(g);
    o.useEffect(() => {
        let e = (e) => null != g[e];
        null != D && D !== g && (e("password") ? G.current?.focus() : (e("email") || e("login")) && P.current?.focus());
    }, [g, P, G, D]),
        (t =
            null != n
                ? (0, a.jsx)("div", { className: K.S3, children: (0, a.jsx)(n6.A, { invite: n }) })
                : null != l
                  ? (0, a.jsx)(n1, { giftCode: l })
                  : (0, a.jsxs)("div", {
                        className: n7.wx,
                        children: [
                            (0, a.jsx)(k.hE, { className: K.QB, children: Q.intl.string(Q.t["7fNJgA"]) }, "title"),
                            !1 === (0, tX.isAndroidWeb)()
                                ? (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.euS7r4) }, "subtitle")
                                : null,
                        ],
                    }));
    let V = (0, a.jsxs)("div", {
        className: n7.Eh,
        children: [
            C &&
                f &&
                (0, a.jsx)("div", {
                    className: n7.AX,
                    children: (0, a.jsx)(M.$, {
                        onClick: () => A(!1),
                        variant: "secondary",
                        text: Q.intl.string(Q.t["1MrpWO"]),
                        icon: nl.n,
                    }),
                }),
            t,
            (0, a.jsx)(n8.F, {
                children: (0, a.jsxs)(k.eB, {
                    className: K.QX,
                    children: [
                        (0, a.jsx)(e_.A, {
                            alpha2: I.alpha2,
                            countryCode: I.code.split(" ")[0],
                            className: K.SX,
                            label: Q.intl.string(Q.t.tUjnxr),
                            error: iN("login", g) ?? iN("email", g),
                            onChange: E,
                            setRef: P,
                            autoCapitalize: "none",
                            autoComplete: "username webauthn",
                            autoCorrect: "off",
                            spellCheck: "false",
                            value: d,
                            autoFocus: !L && !O && !r,
                            required: !0,
                        }),
                        (0, a.jsx)(k.pd, {
                            label: Q.intl.string(Q.t["CIGa+7"]),
                            error: iN("password", g),
                            onChange: _,
                            name: "password",
                            type: "password",
                            setRef: G,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            autoFocus: L && !O && !r,
                            value: m,
                            required: !0,
                        }),
                        (0, a.jsx)("div", {
                            className: w()(K.SX, K.a5),
                            children: (0, a.jsx)(ed.Q, {
                                text: Q.intl.string(Q.t.wWIufs),
                                textVariant: "text-sm/normal",
                                onClick: () => {
                                    null != P.current && P.current.focus(), N();
                                },
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: K.QB,
                            children: (0, a.jsx)(M.$, {
                                text: Q.intl.string(Q.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                loading: v === y.aUe.LOGGING_IN,
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: K.a5,
                            children: [
                                (0, a.jsx)("span", { className: n7.Qt, children: Q.intl.string(Q.t.tmE73r) }),
                                (0, a.jsx)("span", {
                                    className: n7.Z8,
                                    children: (0, a.jsx)(ed.Q, {
                                        text: Q.intl.string(Q.t.pV8xeR),
                                        textVariant: "text-sm/normal",
                                        onClick: T,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
    return null != n && n.state === y.elq.RESOLVING
        ? (0, a.jsx)(i_, {
              authBoxClassName: s,
              country: I,
              login: d,
              password: m,
              onLoginChange: E,
              onPasswordChange: _,
              loginRef: P,
              passwordRef: G,
          })
        : null != i
          ? i.state === ij.QB.RESOLVING
              ? (0, a.jsx)(i_, {
                    authBoxClassName: s,
                    country: I,
                    login: d,
                    password: m,
                    onLoginChange: E,
                    onPasswordChange: _,
                    loginRef: P,
                    passwordRef: G,
                })
              : (0, a.jsx)(ie, {
                    onSubmit: j,
                    tag: "form",
                    className: w()(s, n7.Sy),
                    children: () => [
                        (0, a.jsx)(it.A, { guildTemplate: i }, "template"),
                        (0, a.jsx)(o.Fragment, { children: V }, "form-wrapper"),
                    ],
                })
          : C && !f
            ? (0, a.jsx)(iE, { onDismiss: () => A(!0) })
            : (0, a.jsxs)("div", {
                  children: [
                      (0, a.jsx)(k.Ay, {
                          onSubmit: j,
                          tag: "form",
                          className: w()(s, { [n7.M0]: O }),
                          expanded: !0,
                          children: (0, a.jsxs)(eR.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 64,
                              children: [
                                  V,
                                  (0, a.jsx)(n5.A, {
                                      onAuthenticateSuccess: b,
                                      conditionalMediationAbortController: p,
                                  }),
                              ],
                          }),
                      }),
                      O && (0, a.jsx)(ih, {}),
                  ],
              });
}
var iI = n(572469);
function iv(e) {
    let { loginSource: t, giftCodeSKUId: n } = e,
        i = (0, h.cf)(
            [eK.default],
            () => ({ ticket: eK.default.getMFATicket(), methods: eK.default.getMFAMethods() }),
            [],
        ),
        l = o.useCallback(
            (e) => {
                let { mfaType: i, data: l, ticket: s } = e;
                return (
                    F._.dispatch(y.jej.WAVE_EMPHASIZE),
                    x.A.loginMFAv2({ code: l, ticket: s, mfaType: i, source: t, giftCodeSKUId: n })
                );
            },
            [t, n],
        );
    return (0, a.jsx)(k.Ay, {
        style: { padding: 0 },
        children: (0, a.jsx)(iI.t, {
            mfaFinish: l,
            mfaChallenge: i,
            onEarlyClose: () => {
                g.h.dispatch({ type: "LOGIN_RESET" });
            },
            width: 480,
        }),
    });
}
var iC = n(511815),
    iS = n(139033),
    ib = n(15552),
    iy = n(952116),
    iR = n(491509),
    iO = n(913612),
    iL = n(933924);
let ik = (e) => n.g.location.assign(e);
function iP(e) {
    let {
        invite: t,
        guildTemplate: n,
        giftCode: i,
        location: l,
        redirectTo: s,
        transitionTo: r,
        authBoxClassName: d,
        loginSource: u,
        disableAutofocusOnDefaultForm: m,
    } = e;
    (0, iO.K)();
    let g = (0, h.bG)([eK.default], () => eK.default.isAuthenticated()),
        f = (0, h.bG)([C.A], () => C.A.isHandoffAvailable()),
        A = (0, h.bG)([eK.default], () => eK.default.getLoginStatus()),
        p = i?.skuId ?? null,
        _ = (0, h.bG)([nQ.A], () => (null != p ? nQ.A.get(p) : null)),
        {
            checkingHandoff: j,
            redirecting: N,
            login: T,
            password: I,
            phoneVerifyError: b,
            dismissedChooseAccount: R,
            setDismissedChooseAccount: O,
            errors: L,
            conditionalMediationAbortController: D,
            loginSource: V,
            loginOrSSO: w,
            handleLogin: M,
            handleIPAuthorize: B,
            handlePasswordReset: W,
            handleForgotPassword: z,
            handleResendCode: H,
            handleReset: q,
            handleCancelAccountDeletion: X,
            handleGotoRegister: Y,
            loginReset: $,
            onLoginChange: J,
            onPasswordChange: Z,
        } = (function (e) {
            let {
                    invite: t,
                    guildTemplate: n,
                    giftCode: i,
                    handoffAvailable: l,
                    authenticated: s,
                    transitionTo: r,
                    redirectTo: d,
                    location: u,
                    loginSource: m,
                } = e,
                [h, g] = o.useState(() => l),
                [f, A] = o.useState(() => s),
                [p, E] = o.useState(""),
                [_, j] = o.useState(() => {
                    let e = null != u ? (0, c.parse)(u.search) : {};
                    return e.email ?? e.login ?? "";
                }),
                [N, T] = o.useState(""),
                [I, C] = o.useState(!1),
                [S, b] = o.useState(null),
                [R, O] = o.useState(!1),
                [L] = o.useState(() => new AbortController()),
                [k, P] = o.useState({});
            !h || l || s || g(!1);
            let G = o.useMemo(() => {
                    if (null != m) return m;
                    if (null != i) return "gift";
                    if (null != n) return "guild_template";
                    if (null != t) {
                        if (null != t.guild) return "guild_invite";
                        if (null != t.channel) return "dm_invite";
                        if (null != t.inviter) return "friend_invite";
                    }
                    return null != d ? v(d) : null;
                }, [m, i, n, t, d]),
                D = null != i ? i.skuId : null,
                V = o.useCallback(
                    (e) => {
                        let t = null != e ? (0, c.parse)(e.search) : {};
                        if ((delete t.redirect_to, null != d)) {
                            if (eo(d)) return void ec(d);
                            r(d);
                        } else if (null == t.service) r(y.BVt.APP);
                        else {
                            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + y.Rsh.SSO,
                                n = { ...t, token: eK.default.getToken() };
                            window.location = `${e}?${(0, c.stringify)(n)}`;
                        }
                    },
                    [d, r],
                ),
                w = o.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e && null != t && (A(!0), n ? x.A.verifySSOToken("login").then(() => V(t)) : V(t));
                    },
                    [V],
                ),
                M = o.useCallback(() => {
                    L.abort("Login state reset"), P({}), x.A.loginReset();
                }, [L]),
                B = o.useCallback(
                    async function (e) {
                        let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e?.preventDefault(),
                            L.abort("Starting password login"),
                            F._.dispatch(y.jej.WAVE_EMPHASIZE),
                            P({});
                        try {
                            await x.A.login({
                                login: p + _,
                                password: N,
                                undelete: n ?? I,
                                source: G,
                                giftCodeSKUId: D,
                                invite: t,
                            });
                        } catch (e) {
                            P((0, ib.p)(e));
                        }
                    },
                    [L, _, p, N, I, G, D, t],
                ),
                W = o.useCallback(
                    async (e) => {
                        let t = p + _;
                        P({});
                        try {
                            let { token: n } = await eA.A.verifyPhone(t, e, !1);
                            await x.A.authorizeIPAddress(n), B();
                        } catch (e) {
                            null != e.body && null != e.body.message && b(e.body.message);
                        }
                    },
                    [p, _, B],
                ),
                z = o.useCallback(
                    async (e) => {
                        b(null);
                        try {
                            let { token: t } = await eA.A.verifyPhone(p + _, e, !1);
                            r(y.BVt.RESET, { search: (0, c.stringify)({ token: t, from_login: "true" }) });
                        } catch (e) {
                            null != e.body && null != e.body.message && b(e.body.message);
                        }
                    },
                    [p, _, r],
                ),
                H = o.useCallback(
                    async (e) => {
                        null != e && e.preventDefault();
                        let t = p + _;
                        P({});
                        try {
                            F._.dispatch(y.jej.WAVE_EMPHASIZE);
                            let e = await x.A.forgotPassword(t);
                            if (!1 === e) return;
                            e === iC.D.ONE_TIME_LOGIN
                                ? (0, t8.openModal)((e) => {
                                      let t = [
                                          {
                                              variant: "primary",
                                              text: Q.intl.string(Q.t.BddRzS),
                                              onClick: e.onClose,
                                              fullWidth: !0,
                                          },
                                      ];
                                      return (0, a.jsx)(t3.Modal, {
                                          title: Q.intl.string(Q.t["6Ecyts"]),
                                          actions: t,
                                          ...e,
                                          children: (0, a.jsx)(U.E, {
                                              variant: "text-md/normal",
                                              children: Q.intl.string(Q.t.iAcrqV),
                                          }),
                                      });
                                  })
                                : (0, iS.A)({
                                      title: Q.intl.string(Q.t.f5Pi7A),
                                      subtitle: Q.intl.format(Q.t["6u5hQ9"], { email: t }),
                                  });
                        } catch (e) {
                            P((0, ib.p)(e));
                        }
                    },
                    [p, _],
                ),
                K = o.useCallback(() => {
                    eA.A.resendCode(p + _);
                }, [p, _]),
                q = o.useCallback((e) => {
                    null != e && e.preventDefault(), x.A.loginReset(), T(""), E(""), j(""), C(!1), g(!1), A(!1), P({});
                }, []),
                X = o.useCallback(() => {
                    C(!0), B(void 0, { undelete: !0 });
                }, [B]),
                Y = o.useCallback(() => {
                    let e,
                        l = null != u ? (0, c.parse)(u.search) : {};
                    "" !== _ && (l.email = _),
                        null != t
                            ? ((l.mode = "register"), (e = y.BVt.INVITE(t.code)))
                            : null != i
                              ? ((l.mode = "register"), (e = y.BVt.GIFT_CODE(i.code)))
                              : null != n
                                ? (e = y.BVt.GUILD_TEMPLATE(n.code))
                                : null != d
                                  ? ((e = y.BVt.REGISTER), (l.redirect_to = d))
                                  : (e = y.BVt.REGISTER),
                        M(),
                        r(e, { search: (0, c.stringify)(l) }),
                        F._.dispatch(y.jej.WAVE_EMPHASIZE);
                }, [_, t, i, n, d, u, M, r]);
            return {
                checkingHandoff: h,
                redirecting: f,
                login: _,
                password: N,
                phoneVerifyError: S,
                dismissedChooseAccount: R,
                setDismissedChooseAccount: O,
                errors: k,
                conditionalMediationAbortController: L,
                loginSource: G,
                loginOrSSO: w,
                handleLogin: B,
                handleIPAuthorize: W,
                handlePasswordReset: z,
                handleForgotPassword: H,
                handleResendCode: K,
                handleReset: q,
                handleCancelAccountDeletion: X,
                handleGotoRegister: Y,
                loginReset: M,
                onLoginChange: o.useCallback((e, t) => {
                    j(e), E(t);
                }, []),
                onPasswordChange: o.useCallback((e) => {
                    T(e);
                }, []),
            };
        })({
            invite: t,
            guildTemplate: n,
            giftCode: i,
            handoffAvailable: f,
            authenticated: g,
            transitionTo: r ?? ik,
            redirectTo: s,
            location: l,
            loginSource: u,
        });
    (0, n2.Ay)(() => {
        f && !g ? (0, E.ST)() : g && w(g, l, !0),
            S.default.track(
                y.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: V,
                    authenticated: g,
                    ...(null != _ ? (0, iR.A)(_, !1, !1) : {}),
                    source: (0, P.PR)(),
                },
                { flush: !0 },
            ),
            g || (0, iL.a)({ abortController: D, loginSource: V, giftCodeSKUId: p }),
            x.A.getLocationMetadata(),
            (0, G.d)("login");
    });
    let ee = (0, n3.A)(g);
    if (
        (o.useEffect(() => {
            let e = j && (f || N);
            g && !1 === ee && !e && (D.abort("Transitioning to authenticated state"), w(g, l));
        }, [g, f, ee, N, j, D, w, l]),
        N || j)
    )
        return (0, a.jsx)(k.Ay, { children: (0, a.jsx)(eL.y, {}) });
    if (f)
        return (0, a.jsxs)(k.Ay, {
            className: d,
            children: [
                (0, a.jsx)(k.CK, {}),
                (0, a.jsx)(k.hE, { className: K.QB, children: Q.intl.string(Q.t.S6RMNA) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.YZiJbh) }),
            ],
        });
    switch (A) {
        case y.aUe.LOGGING_IN_MFA_SMS:
        case y.aUe.MFA_SMS_STEP:
        case y.aUe.LOGGING_IN_MFA:
        case y.aUe.MFA_STEP:
            return (0, a.jsx)(iv, { loginSource: V, giftCodeSKUId: p });
        case y.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case y.aUe.ACCOUNT_DISABLED:
            return (0, a.jsx)(n4, { loginStatus: A, authBoxClassName: d, onSubmit: q, onCancelAccountDeletion: X });
        case y.aUe.PHONE_IP_AUTHORIZATION:
            return (0, a.jsx)(k.Ay, {
                tag: "form",
                className: d,
                children: (0, a.jsx)(iy.A, {
                    title: Q.intl.string(Q.t.w55Oco),
                    subtitle: Q.intl.format(Q.t.CfRZBj, { onResendClick: H }),
                    error: b,
                    onSubmit: B,
                    onCancel: $,
                }),
            });
        case y.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, a.jsx)(k.Ay, {
                tag: "form",
                className: d,
                children: (0, a.jsx)(iy.A, {
                    title: Q.intl.string(Q.t["+xqy3d"]),
                    subtitle: Q.intl.format(Q.t.ef4uZ7, { onResendClick: H }),
                    error: b,
                    onSubmit: W,
                    onCancel: $,
                }),
            });
        case y.aUe.LOGGING_IN:
        case y.aUe.NONE:
        default:
            return (0, a.jsx)(iT, {
                invite: t,
                guildTemplate: n,
                giftCode: i,
                authBoxClassName: d,
                disableAutofocusOnDefaultForm: m,
                login: T,
                password: I,
                errors: L,
                loginSource: V,
                dismissedChooseAccount: R,
                setDismissedChooseAccount: O,
                conditionalMediationAbortController: D,
                onLoginChange: J,
                onPasswordChange: Z,
                handleLogin: M,
                handleForgotPassword: z,
                handleGotoRegister: Y,
            });
    }
}
var iG = n(664294),
    iD = n(204925);
let iV = null,
    iw = "underage";
class iU extends h.Ay.Store {
    static displayName = "AgeGateStore";
    isUnderageAnonymous() {
        if (tX.isPlatformEmbedded && 1) {
            if (null != iV && iV + iD.bm > Date.now()) return !0;
        } else if (1) return null != iG.parse(document.cookie)[iw];
        return !1;
    }
}
let iM = new iU(g.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        (iV = Date.now()), (document.cookie = `${iw}=1;path=/`);
    },
    LOGIN_SUCCESS: function () {
        (iV = null), (document.cookie = `${iw}=1;path=/;max-age=0`);
    },
});
var iB = n(509434),
    iF = n(153801);
let iW = () =>
    (0, a.jsx)(k.Ay, {
        children: (0, a.jsxs)("div", {
            className: iF.hQ,
            children: [
                (0, a.jsx)(k.hE, { className: iF.DD, children: Q.intl.string(Q.t.nCB6Ga) }),
                (0, a.jsx)(k.tK, {
                    className: iF.VA,
                    children: Q.intl.format(Q.t.KQgoxG, { underageMessage: Q.intl.string(Q.t.WqEH4D) }),
                }),
                (0, a.jsx)(M.$, {
                    icon: iB.I,
                    text: Q.intl.string(Q.t.hvVgAZ),
                    onClick: () => window.open(t9.A.getArticleURL(y.MVz.AGE_GATE), "_blank"),
                    iconPosition: "end",
                }),
            ],
        }),
    });
var iz = n(990078),
    iQ = n(913122),
    iH = n(201505);
n(417635), n(827343), n(792251), n(19575), n(945041);
var iK = n(493527),
    iq = n(544395),
    iX = n(446837);
let iY = window.ResizeObserver ?? iX.t;
function i$(e) {
    let { show: t, children: n, top: i = 0, bottom: l = 0 } = e,
        { ref: s, height: r } = (() => {
            let e = o.useRef(null),
                [t, n] = o.useState(0),
                i = o.useMemo(
                    () =>
                        new iY((e) => {
                            let [t] = e;
                            return n(t.contentRect.height);
                        }),
                    [],
                );
            return (
                o.useLayoutEffect(() => (null != e.current && i.observe(e.current), () => i.disconnect()), [i]),
                { ref: e, height: t }
            );
        })(),
        c = (0, eJ.z)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: { height: t ? r : 0, paddingBottom: t ? `${l}px` : "0px", marginTop: t ? `${i}px` : "0px" },
            config: { tension: 170, friction: 26 },
        }),
        d = (0, eJ.z)({
            from: { opacity: 0 },
            to: { opacity: +!!t },
            config: { duration: 200, easing: t ? (e) => e ** 4 : (e) => e * (2 - e) },
        });
    return (0, a.jsx)(eY.animated.div, {
        style: { overflow: "hidden", height: c.height, paddingBottom: c.paddingBottom, marginTop: c.marginTop },
        children: (0, a.jsx)(eY.animated.div, { style: { opacity: d.opacity }, ref: s, children: n }),
    });
}
var iJ = n(153488),
    iZ = n(934337),
    i0 = n(989349),
    i1 = n.n(i0),
    i2 = n(955437),
    i3 = n(888548),
    i8 = n(569717);
function i7(e) {
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
        promoEmailConsent: m = null,
        usedUsernameSuggestion: h = null,
    } = e;
    if ((g.h.dispatch({ type: "REGISTER" }), null != o)) {
        let e;
        (0, i8.A)(o, y.JJy.REGISTER),
            S.default.track(y.HAw.AGE_GATE_ACTION, { source: iD.w_.REGISTER, action: iD.AM.AGE_GATE_SUBMITTED }),
            (e = i1()().diff(o, "years")) < 13 ||
                S.default.track(y.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                });
    }
    return W.A.post({
        url: y.Rsh.REGISTER,
        body: {
            fingerprint: eK.default.getFingerprint(),
            email: t,
            username: i,
            global_name: l,
            password: r,
            invite: c,
            consent: s,
            phone_token: n,
            date_of_birth: o?.format("YYYY-MM-DD"),
            gift_code_sku_id: u,
            guild_template_code: a,
            promotional_email_opt_in: m?.checked,
        },
        trackedActionData: {
            event: d.NetworkActionNames.USER_REGISTER,
            properties: {
                invite_code: c,
                used_username_suggestion: h,
                promotional_email_opt_in: m?.checked,
                promotional_email_pre_checked: m?.preChecked,
                was_unique_username: !0,
            },
        },
        rejectWithError: !1,
    }).then(
        (e) => {
            g.h.dispatch({ type: "REGISTER_SUCCESS", token: e.body.token }),
                S.default.track(y.HAw.AGE_GATE_ACTION, { source: iD.w_.REGISTER, action: iD.AM.AGE_GATE_SUCCESS });
        },
        (e) => {
            if (e instanceof i3.CaptchaCancelError) throw e;
            let t = new B.A(e);
            throw (
                (null != t.getFieldErrors("date_of_birth") && i2.Xv(iD.w_.REGISTER),
                S.default.track(y.HAw.REGISTER_SUBMIT_ERRORED, {
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
                t)
            );
        },
    );
}
var i4 = n(568385);
function i6() {
    let { required: e, checked: t } = (0, iZ.mZ)();
    return e
        ? (0, a.jsx)("div", {
              className: K.Ot,
              children: (0, a.jsx)(i4.J, {
                  label: Q.intl.string(Q.t["0p3R0+"]),
                  checked: t,
                  onChange: iZ.Bw,
                  labelType: "secondary",
              }),
          })
        : null;
}
let i5 = /\.$/,
    i9 = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(i5, ""))
                  .join(". ")
                  .trim()
            : e;
function le(e) {
    let [t, n] = o.useState(() => null != e && !e),
        [i, l] = o.useState(e);
    return null == i && null != e ? (l(e), n(!e)) : i !== e && l(e), [t, n];
}
function lt() {
    let [e, t] = o.useState(!1),
        n = o.useRef(null);
    return (
        o.useEffect(
            () => () => {
                null != n.current && clearTimeout(n.current);
            },
            [],
        ),
        [
            e,
            o.useCallback((e) => {
                null != n.current && clearTimeout(n.current),
                    t(!0),
                    (n.current = setTimeout(() => {
                        t(!1), (n.current = null);
                    }, e * il.A.Millis.SECOND));
            }, []),
        ]
    );
}
var ln = n(731286);
function li(e) {
    let { consent: t, consentRequired: n, onConsentChange: i } = e;
    return n
        ? (0, a.jsx)("div", {
              className: ln.IQ,
              children: (0, a.jsx)(i4.J, {
                  label: Q.intl.format(Q.t.qMDAP0, { termsURL: y.X7G.TERMS, privacyURL: y.X7G.PRIVACY }),
                  checked: t,
                  onChange: i,
                  labelType: "secondary",
              }),
          })
        : (0, a.jsx)(U.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: w()(K.Ot, ln.E2),
              children: Q.intl.format(Q.t["KI+BSb"], { termsURL: y.X7G.TERMS, privacyURL: y.X7G.PRIVACY }),
          });
}
n(801541);
var ll = n(889137),
    ls = n(546727),
    lr = n(5052);
function la(e) {
    let t,
        { username: n, suggestion: i, globalName: l, isUsernameFocused: s, onClickSuggestion: r } = e,
        o = (0, lr.i)(n, !0, !0),
        c = n.length > 0;
    return (
        (t = c
            ? (0, ll.YW)(o)
                  .with({ type: ls.q.ERROR, message: ll.P.select() }, (e) =>
                      (0, a.jsx)(U.E, { className: ln.vU, variant: "text-sm/normal", children: e }),
                  )
                  .with({ type: ls.q.AVAILABLE, message: ll.P.select() }, (e) =>
                      (0, a.jsx)(U.E, { className: ln.vq, variant: "text-sm/normal", children: e }),
                  )
                  .otherwise(() =>
                      (0, a.jsx)(U.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: Q.intl.string(Q.t.z7c4bP),
                      }),
                  )
            : null != i && i.length > 0 && l.length > 0
              ? (0, a.jsx)(U.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: Q.intl.format(Q.t.nDGqqq, { suggestion: i, nameOnClick: r }),
                })
              : (0, a.jsx)(U.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: Q.intl.string(Q.t.z7c4bP),
                })),
        (0, a.jsx)(i$, { show: (c && o?.type === ls.q.ERROR) || s, top: -12, bottom: 20, children: t })
    );
}
function lo(e) {
    let {
            initialEmail: t,
            invite: n,
            giftCode: i,
            guildTemplate: l,
            onApiErrors: s,
            onEmailChange: r,
            onGotoLogin: c,
            onRegister: d,
        } = e,
        [u, m] = o.useState(!1),
        [g, x] = o.useState(!1),
        f = async () => {
            b.length > 0 && !iq.A.wasRegistrationSuggestionFetched(b) && (await iK.A.fetchSuggestionsRegistration(b));
        },
        A = (e) => {
            S.default.track(y.HAw.REGISTER_INPUT_FOCUS, { field: e });
        },
        p = (e) => {
            S.default.track(y.HAw.REGISTER_INPUT_BLUR, { field: e });
        },
        E = (0, h.bG)([iJ.A], () => iJ.A.getAuthenticationConsentRequired()),
        _ = (0, h.bG)([iq.A], () => iq.A.registrationUsernameSuggestion()),
        j = o.useRef(null),
        N = o.useRef(null),
        T = o.useRef(null),
        I = o.useRef(null),
        [v, C] = o.useState(t),
        [b, R] = o.useState(""),
        [O, L] = o.useState(""),
        [P, G] = o.useState(""),
        [D, V] = o.useState(null),
        [B, W] = le(E),
        [z, H] = o.useState(!1),
        [q, X] = lt(),
        [Y, $] = o.useState({}),
        { message: J, email: Z, username: ee, global_name: et, password: en, date_of_birth: ei } = Y,
        [el, es] = o.useState(null),
        [er, ea] = o.useState(null),
        [eo, ec] = o.useState(null),
        [eu, em] = o.useState(null),
        eh = null != E && B;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: i, globalNameRef: l, passwordRef: s } = e,
            r = (0, n3.A)(t);
        o.useEffect(() => {
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
    })({ apiErrors: Y, emailRef: j, usernameRef: N, globalNameRef: T, passwordRef: I });
    let eg = o.useCallback(async () => {
            let e = null != i ? i.skuId : null,
                t = iZ.mZ.getState(),
                r = (0, nb.uJ)(_) ? null : O === _;
            F._.dispatch(y.jej.WAVE_EMPHASIZE), H(!0), $({});
            try {
                await i7({
                    email: v,
                    username: O,
                    globalName: b,
                    consent: B,
                    password: P,
                    invite: n?.code,
                    usedUsernameSuggestion: r,
                    guildTemplateCode: l?.code,
                    giftCodeSKUId: e,
                    birthday: D,
                    promoEmailConsent: t.required ? t : null,
                }),
                    d?.();
            } catch (t) {
                if ((H(!1), !(t instanceof iQ.LG))) return;
                let e = (0, ib.W)(t);
                $(e), s?.(e), "number" == typeof e.retry_after && X(e.retry_after);
            }
        }, [i, l, n, v, s, d, _, O, b, P, D, B, X]),
        ex = o.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == E)) return;
                let t = !1;
                0 === v.length && (es(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    0 === O.length && (ea(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    0 === P.length && (ec(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    null == D && (em(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    t || eg();
            },
            [v, O, P, D, E, eg],
        ),
        ef = null;
    return (
        "string" == typeof J && (ef = (0, a.jsx)(k.ME, { className: w()(K.QX, ln.gJ), children: J })),
        (0, a.jsx)("form", {
            onSubmit: ex,
            children: (0, a.jsxs)(k.eB, {
                className: K.QX,
                children: [
                    (0, a.jsx)(k.pd, {
                        autoFocus: !0,
                        className: K.SX,
                        label: Q.intl.string(Q.t.dI4d4S),
                        name: "email",
                        value: v,
                        onChange: (e) => {
                            C(e), r?.(e), es(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null);
                        },
                        error: el ?? i9(Z),
                        type: "email",
                        autoComplete: "username",
                        setRef: j,
                        required: !0,
                        onFocus: () => A("email"),
                        onBlur: () => p("email"),
                    }),
                    (0, a.jsx)(k.pd, {
                        label: Q.intl.string(Q.t["9AjdkD"]),
                        className: K.SX,
                        name: "global_name",
                        value: b,
                        onChange: R,
                        error: i9(et),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: T,
                        onFocus: () => {
                            m(!0), A("global_name");
                        },
                        onBlur: () => {
                            m(!1), p("global_name");
                        },
                    }),
                    (0, a.jsx)(i$, {
                        show: u,
                        top: -12,
                        bottom: 20,
                        children: (0, a.jsx)(U.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: Q.intl.string(Q.t["330TCc"]),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        onBlur: () => x(!1),
                        onFocus: () => {
                            x(!0), f();
                        },
                        tabIndex: -1,
                        children: [
                            (0, a.jsx)(k.pd, {
                                label: Q.intl.string(Q.t.TWzdWj),
                                className: K.SX,
                                name: "username",
                                value: O,
                                onChange: (e) => {
                                    L(e.toLocaleLowerCase()), ea(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null);
                                },
                                error: er ?? i9(ee),
                                autoComplete: "off",
                                setRef: N,
                                required: !0,
                                onFocus: () => A("username"),
                                onBlur: () => p("username"),
                            }),
                            (0, a.jsx)(la, {
                                username: O,
                                suggestion: _,
                                globalName: b,
                                isUsernameFocused: g,
                                onClickSuggestion: () => {
                                    N.current?.focus(), null != _ && _.length > 0 && L(_);
                                },
                            }),
                        ],
                    }),
                    (0, a.jsx)(k.pd, {
                        label: Q.intl.string(Q.t["CIGa+7"]),
                        name: "password",
                        value: P,
                        onChange: (e) => {
                            G(e), ec(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null);
                        },
                        error: eo ?? i9(en),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: I,
                        required: !0,
                        onFocus: () => A("password"),
                        onBlur: () => p("password"),
                    }),
                    (0, a.jsx)(iH.A, {
                        label: Q.intl.string(Q.t.rhBeKe),
                        wrapperClassName: ln.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            V(e), null != e && em(null);
                        },
                        error: eu ?? i9(ei),
                        value: D,
                        required: !0,
                        onFocus: A,
                        onBlur: p,
                    }),
                    (0, a.jsx)(i6, {}),
                    (0, a.jsx)(li, { consent: B, consentRequired: E, onConsentChange: W }),
                    (0, a.jsx)(iz.m, {
                        text: !B && E ? Q.intl.string(Q.t.AY4IVA) : null,
                        children: (0, a.jsx)("div", {
                            className: K.QX,
                            children: (0, a.jsx)(M.$, {
                                text: Q.intl.string(Q.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: z,
                                disabled: !eh || q,
                            }),
                        }),
                    }),
                    ef,
                    (0, a.jsx)("div", {
                        className: K.QX,
                        children: (0, a.jsx)(ed.Q, {
                            text: Q.intl.string(Q.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            onClick: c,
                        }),
                    }),
                ],
            }),
        })
    );
}
n(436317);
var lc = n(292666),
    ld = n(713654),
    lu = n(131165);
function lm(e) {
    let { channel: t } = e,
        n = (0, ld._U)(t.type);
    return (0, a.jsxs)("div", {
        className: lu.Nj,
        children: [
            null != n ? (0, a.jsx)(n, { color: "currentColor", size: "custom", width: 20, height: 20 }) : null,
            (0, a.jsx)(U.E, { className: lu.dN, color: "none", variant: "text-sm/semibold", children: t.name }),
        ],
    });
}
function lh(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, a.jsxs)("div", {
        className: lu.kL,
        children: [
            (0, a.jsx)(tI.Uq, { className: lu.II, guildId: n.guild_id, guildEvent: n, eventPreview: n }),
            (0, a.jsx)(tI.sC, { name: n.name, description: n.description, guildId: n.guild_id }),
            null != t && n.channel_id === t.id ? (0, a.jsx)(lm, { channel: t }) : null,
        ],
    });
}
var lg = n(573435),
    lx = n(831985);
let lf = (e) => {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let i = em.DY(t),
        { name: l, description: s } = i;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(eO.D, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: lx.CT,
                children: Q.intl.string(Q.t.Eabu1z),
            }),
            (0, a.jsxs)("div", {
                className: lx.EB,
                children: [
                    (0, a.jsx)(lg.Ay, {
                        mask: lg.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, a.jsx)(tT.Ay, { guild: i, size: tT.Ay.Sizes.MEDIUM, active: !0 }),
                    }),
                    (0, a.jsxs)("div", {
                        className: lx.OA,
                        children: [
                            (0, a.jsx)(eO.D, { variant: "heading-sm/semibold", children: l }),
                            (0, a.jsxs)("div", {
                                className: lx.aH,
                                children: [
                                    (0, a.jsx)("div", { className: lx.Om }),
                                    null != n && n > 0
                                        ? (0, a.jsx)(U.E, {
                                              variant: "text-sm/normal",
                                              children: Q.intl.format(Q.t["LC+S+m"], { membersOnline: n }),
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
                (0, a.jsx)(U.E, { color: "text-default", className: lx.CT, variant: "text-sm/normal", children: s }),
        ],
    });
};
function lA(e) {
    let { authBoxClassName: t, name: n, onNameChange: i } = e;
    return (0, a.jsxs)(k.Ay, {
        className: t,
        children: [
            (0, a.jsx)(n6.M, {}),
            (0, a.jsxs)(k.eB, {
                className: ln.y0,
                children: [
                    (0, a.jsx)(iz.m, {
                        text: Q.intl.string(Q.t["hBB85/"]),
                        position: "right",
                        children: (0, a.jsx)(k.pd, {
                            label: Q.intl.string(Q.t["9AjdkD"]),
                            autoFocus: !0,
                            className: K.QB,
                            name: "username",
                            value: n,
                            placeholder: Q.intl.string(Q.t["09Q8yp"]),
                            onChange: i,
                            onFocus: () => {
                                S.default.track(y.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                S.default.track(y.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, a.jsx)(U.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: w()(K.QX, ln.E2),
                        children: Q.intl.format(Q.t["KI+BSb"], { termsURL: y.X7G.TERMS, privacyURL: y.X7G.PRIVACY }),
                    }),
                    (0, a.jsx)("div", {
                        className: K.Ot,
                        children: (0, a.jsx)(M.$, {
                            text: Q.intl.string(Q.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: K.QX,
                        children: (0, a.jsx)(ed.Q, {
                            text: Q.intl.string(Q.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function lp(e) {
    let { consentRequired: t, consent: n, registering: i } = e,
        l = o.useMemo(() => null != t && n, [t, n]);
    return (0, a.jsx)(iz.m, {
        text: !n && t ? Q.intl.string(Q.t.AY4IVA) : null,
        children: (0, a.jsx)("div", {
            className: K.Ot,
            children: (0, a.jsx)(M.$, {
                text: Q.intl.string(Q.t["825cFy"]),
                variant: "primary",
                fullWidth: !0,
                type: "submit",
                loading: i,
                disabled: !l,
            }),
        }),
    });
}
function lE(e) {
    let t,
        { invite: n, authBoxClassName: i, onApiErrors: l, onGotoLogin: s, onRegister: r } = e,
        c = (0, h.bG)([iJ.A], () => iJ.A.getAuthenticationConsentRequired()),
        d = n?.guild_scheduled_event != null,
        u = o.useRef(null);
    t =
        n?.guild_scheduled_event != null
            ? (0, a.jsx)(lh, { channel: n.channel, guildScheduledEvent: n.guild_scheduled_event })
            : (0, a.jsx)("div", { className: K.S3, children: (0, a.jsx)(n6.A, { invite: n, inUnclaimedFlow: !0 }) });
    let [m, g] = o.useState(""),
        [x, f] = o.useState(null),
        [A, p] = le(c),
        [E, _] = o.useState(!1),
        [j, N] = o.useState({}),
        { username: T, global_name: I, date_of_birth: v } = j,
        [C, b] = lt();
    o.useEffect(() => {
        null == x && u.current?.focus();
    }, [x, u]);
    let [R, O] = o.useState(null),
        [L, P] = o.useState(null),
        G = o.useCallback(async () => {
            F._.dispatch(y.jej.WAVE_EMPHASIZE), _(!0), N({});
            try {
                await (function (e) {
                    let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
                    return i7({ ...i, invite: t, giftCodeSKUId: n });
                })({ consent: A, invite: n.code, globalName: m, birthday: x }),
                    r?.();
            } catch (t) {
                if ((_(!1), !(t instanceof iQ.LG))) return;
                let e = (0, ib.W)(t);
                N(e), l?.(e), "number" == typeof e.retry_after && b(e.retry_after);
            }
        }, [n, m, x, A, l, r, b, N, _]),
        D = o.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === c)) return;
                let t = !1;
                0 === m.length && (O(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    null == x && (P(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    t || G();
            },
            [m, x, c, G, O, P],
        );
    return n.state === y.elq.RESOLVING
        ? (0, a.jsx)(lA, { authBoxClassName: i, name: m, onNameChange: g })
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(k.Ay, {
                      tag: "section",
                      className: i,
                      children: (0, a.jsxs)("form", {
                          onSubmit: D,
                          children: [
                              t,
                              d ? (0, a.jsx)("div", { className: ln.yF }) : null,
                              (0, a.jsxs)(k.eB, {
                                  className: d ? void 0 : ln.y0,
                                  children: [
                                      (0, a.jsx)(lc.k, {
                                          helperText: Q.intl.string(Q.t["330TCc"]),
                                          label: Q.intl.string(Q.t["9AjdkD"]),
                                          error: R ?? i9(I ?? T),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: m,
                                          placeholder: Q.intl.string(Q.t["09Q8yp"]),
                                          onChange: g,
                                          onFocus: () => {
                                              S.default.track(y.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              S.default.track(y.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, a.jsx)(iH.A, {
                                          label: Q.intl.string(Q.t.rhBeKe),
                                          wrapperClassName: ln.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              f(e), null != e && P(null);
                                          },
                                          error: L ?? i9(v),
                                          value: x,
                                      }),
                                      (0, a.jsx)(li, { consent: A, consentRequired: c, onConsentChange: p }),
                                      (0, a.jsx)(lp, { consentRequired: c, consent: A, registering: E }),
                                      (0, a.jsx)("div", {
                                          className: K.QX,
                                          children: (0, a.jsx)(ed.Q, {
                                              text: Q.intl.string(Q.t["1lWxux"]),
                                              textVariant: "text-sm/normal",
                                              onClick: s,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  null != n && d
                      ? (0, a.jsx)(k.Ay, {
                            className: K.QX,
                            children: (0, a.jsx)(lf, { guild: n.guild, onlineCount: n.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
var l_ = n(942614);
n(100544);
var lj =
        (((r = {}).IDENTITY = "identity"),
        (r.DISPLAY_NAME = "display_name"),
        (r.ACCOUNT_INFORMATION = "account_information"),
        (r.FULL = "full"),
        (r.AGE_GATE = "age_gate"),
        (r.INVITE = "invite"),
        (r.SMS_VERIFY = "sms_verify"),
        r),
    lN = n(771016);
function lT(e) {
    let {
            authBoxClassName: t,
            giftCode: n,
            giftCodeSKU: i,
            guildTemplate: l,
            invite: s,
            location: r,
            redirectTo: u,
            onLoginStart: m,
            onRegister: g,
            transitionTo: f = P.pX,
        } = e,
        A = (0, h.bG)([iJ.A], () => iJ.A.getAuthenticationConsentRequired()),
        p = (0, h.bG)([eK.default], () => eK.default.isAuthenticated()),
        E = (0, h.bG)([iM], () => iM.isUnderageAnonymous()),
        _ = (0, h.bG)([ig.A], () => ig.A.getHasLoggedInAccounts()),
        j = null != e.location ? (0, c.parse)(e.location.search) : {},
        [N, T] = o.useState(j.email ?? ""),
        [I, v] = o.useState({}),
        C = (0, n3.A)(p),
        b = (function (e, t, n) {
            if (null != e) return "gift";
            if (null != t) return "guild_template";
            if (null != n) {
                if (null != n.guild) return "guild_invite";
                else if (null != n.channel) return "dm_invite";
                else if (null != n.inviter) return "friend_invite";
            }
            return null;
        })(n, l, s),
        R = null != s && (null != s.guild || null != s.channel),
        O = null != s && null == s.guild && null == s.channel && null != s.inviter,
        L = o.useCallback(() => {
            p && (null != u ? f(u) : f(eu.A.defaultRoute));
        }, [p, u, f]);
    (0, n2.Ay)(() => {
        L(),
            S.default.track(
                y.HAw.REGISTER_VIEWED,
                {
                    location: null != s ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: b,
                    ...(null != i ? (0, iR.A)(i, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == A && x.A.getLocationMetadata(),
            (0, G.d)("register");
    }),
        o.useEffect(() => {
            p && !1 === C && ((0, l_.C)(lN.zY.ORGANIC_REGISTERED), L());
        }, [p, C, L]);
    let D = lj.FULL;
    E || null != I.date_of_birth ? (D = lj.AGE_GATE) : R && (D = lj.INVITE),
        (0, ix.A)(
            {
                type: d.ImpressionTypes.VIEW,
                name: d.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: d.ImpressionGroups.USER_REGISTRATION_FLOW, step: D },
            },
            {},
            [D],
        );
    let V = o.useCallback(
        (e) => {
            let t,
                i = null != r ? (0, c.parse)(r.search) : {};
            null != s
                ? (t = y.BVt.INVITE_LOGIN(s.code))
                : null != n
                  ? (t = y.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != l
                    ? (t = y.BVt.GUILD_TEMPLATE_LOGIN(l.code))
                    : null != u
                      ? ((t = y.BVt.LOGIN), (i.redirect_to = u))
                      : ((t = y.BVt.LOGIN), "" !== N && (i = { email: N })),
                x.A.loginReset(),
                f(t, { search: (0, c.stringify)(i), source: "register" }),
                m?.(e),
                F._.dispatch(y.jej.WAVE_EMPHASIZE);
        },
        [N, s, n, l, u, r, m, f],
    );
    if (E || null != I.date_of_birth) return (0, a.jsx)(iW, {});
    if (null != s && R)
        return (0, a.jsx)(lE, { invite: s, authBoxClassName: t, onApiErrors: v, onGotoLogin: V, onRegister: g });
    let U = (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.wC4TlR) }, "title"),
        B = !1;
    null != l
        ? ((U = (0, a.jsx)(it.A, { guildTemplate: l })), (B = !0))
        : null != n
          ? (U = (0, a.jsx)(n1, { giftCode: n }))
          : null != s &&
            O &&
            s.state === y.elq.RESOLVED &&
            (U = (0, a.jsx)("div", { className: K.S3, children: (0, a.jsx)(n6.A, { invite: s, isRegister: !0 }) }));
    let W = (0, a.jsx)(lo, {
        initialEmail: j.email ?? "",
        invite: s,
        giftCode: n,
        guildTemplate: l,
        onApiErrors: v,
        onEmailChange: T,
        onGotoLogin: V,
        onRegister: g,
    });
    return B
        ? (0, a.jsx)(ie, {
              tag: "section",
              className: w()(t, ln.Sy),
              children: () => [
                  U,
                  (0, a.jsxs)(
                      "div",
                      {
                          className: ln.Uu,
                          children: [(0, a.jsx)(k.hE, { className: ln.lR, children: Q.intl.string(Q.t.wC4TlR) }), W],
                      },
                      "register-title",
                  ),
              ],
          })
        : (0, a.jsxs)(k.Ay, {
              tag: "section",
              className: t,
              children: [
                  _
                      ? (0, a.jsx)("div", {
                            className: ln.AX,
                            children: (0, a.jsx)(M.$, {
                                onClick: V,
                                variant: "secondary",
                                text: Q.intl.string(Q.t["1MrpWO"]),
                                icon: nl.n,
                                iconPosition: "start",
                            }),
                        })
                      : null,
                  U,
                  W,
              ],
          });
}
h.Ay.initialize(), h.Ay.initialize();
class lI extends o.PureComponent {
    state = { error: null, continueOnWeb: !1, currentUser: null, sentVerification: !1, fetchingUser: !1 };
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, G.d)("gift_code");
    }
    componentDidUpdate(e) {
        let { authenticated: t, isResolved: n } = this.props;
        n ||
            g.h.wait(() => {
                this.resolveGiftCode();
            }),
            t && !e.authenticated && this.handleAuthenticated(),
            !t && e.authenticated && this.setState({ currentUser: null });
    }
    handleAuthenticated() {
        let { currentUser: e } = this.state;
        nB.Yq(), null == e && this.refreshUser();
    }
    refreshUser = () => {
        this.setState({ fetchingUser: !0 }),
            t4
                .rQ({ withAnalyticsToken: !0 })
                .then((e) => this.setState({ currentUser: e, fetchingUser: !1 }))
                .catch(() => this.setState({ fetchingUser: !1 }));
    };
    get requiresVerification() {
        let { currentUser: e } = this.state;
        return null != e && !e.verified;
    }
    getCode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.match.params.giftCode;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.login ? "login" : "register";
    }
    getErrorMessage(e) {
        let { libraryApplication: t, sku: n } = this.props,
            { error: i } = this.state,
            l = null != i ? i.code : null;
        return l === y.t02.INVALID_GIFT_SELF_REDEMPTION
            ? Q.intl.string(Q.t.wa9h7F)
            : l === y.t02.INVALID_GIFT_REDEMPTION_OWNED && n?.productLine === y.EZt.COLLECTIBLES
              ? Q.intl.string(Q.t.mdLtb5)
              : null != t || l === y.t02.INVALID_GIFT_REDEMPTION_OWNED
                ? Q.intl.format(Q.t.PIdmg3, { libraryLink: y.BVt.APPLICATION_LIBRARY })
                : e.isClaimed || l === y.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? Q.intl.string(Q.t.ilcBeX)
                  : l === y.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? Q.intl.string(Q.t.ypuSd8)
                    : void 0;
    }
    handleLogout = () => {
        let e = this.props.match.params.giftCode;
        x.A.logout("gift_code", y.BVt.GIFT_CODE_LOGIN(e));
    };
    handleResendVerification = () => {
        x.A.verifyResend(), this.setState({ sentVerification: !0 });
    };
    handleAccept = async () => {
        let { transitionTo: e, giftCode: t } = this.props;
        if (null == t) throw Error("Trying to accept gift before resolve");
        let n = this.getCode();
        try {
            this.setState({ error: null }), await f.A.redeemGiftCode({ code: n }), e(y.BVt.APP);
        } catch (e) {
            this.setState({ error: e });
        }
    };
    resolveGiftCode = () => {
        let { transitionTo: e } = this.props,
            t = this.getCode();
        f.A.resolveGiftCode(t, !0, !0).then((n) => {
            null != n && null != n.giftCode.promotion && e(y.BVt.BILLING_PROMOTION_REDEMPTION(t));
        });
    };
    renderSpinner(e) {
        return (0, a.jsxs)(k.Ay, { children: [(0, a.jsx)(k.hE, { children: e }), (0, a.jsx)(k.CK, {})] });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: w()(K.Ot, K.QB), children: Q.intl.string(Q.t.KPowgn) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.j8734b) }),
                (0, a.jsx)("div", {
                    className: w()(K.eT, K.QB),
                    children: (0, a.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, a.jsx)(ed.Q, {
                    text: Q.intl.string(Q.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(t9.A.getArticleURL(y.MVz.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: K.QB, children: Q.intl.string(Q.t.csrAMJ) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t["m1+IBn"]) }),
                (0, a.jsx)("div", {
                    className: K.eT,
                    children: (0, a.jsx)(M.$, {
                        text: Q.intl.string(Q.t["qsI+EH"]),
                        fullWidth: !0,
                        onClick: () => this.setState({ continueOnWeb: !0 }),
                    }),
                }),
            ],
        });
    }
    renderVerification(e) {
        let { sentVerification: t } = this.state;
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k._V, { src: n(792525), className: K.QB }),
                (0, a.jsx)(k.hE, { children: Q.intl.format(Q.t["ivLUf/"], { username: e.username }) }),
                (0, a.jsx)(k.tK, { className: K.QX, children: Q.intl.string(Q.t["8Su18+"]) }),
                (0, a.jsx)("div", {
                    className: K.eT,
                    children: (0, a.jsx)(M.$, {
                        text: t ? Q.intl.string(Q.t.CMa9Rv) : Q.intl.string(Q.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, a.jsx)("div", {
                    className: K.Ot,
                    children: (0, a.jsx)(ed.Q, {
                        text: Q.intl.string(Q.t.Po9eBQ),
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
        return (0, a.jsx)(lC, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: i,
            children: (0, a.jsxs)(k.Ay, {
                children: [
                    (0, a.jsx)(n1, { giftCode: e }),
                    (0, a.jsx)("div", {
                        className: K.eT,
                        children: (0, a.jsx)(M.$, {
                            text: Q.intl.string(Q.t.n6I6k4),
                            fullWidth: !0,
                            disabled: null != l,
                            onClick: this.handleAccept,
                        }),
                    }),
                    null != l
                        ? (0, a.jsx)(k.tK, { className: K.QX, children: l })
                        : (0, a.jsx)(k.ME, {
                              className: K.QX,
                              children: Q.intl.format(Q.t.NYM08s, {
                                  userTag: ts.Ay.getUserTag(t),
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
                location: o,
            } = this.props,
            { fetchingUser: c, continueOnWeb: d } = this.state;
        if (e === y.fAW.OPEN && !d) return this.renderAppOpened();
        if (e === y.fAW.OPENING) return this.renderSpinner(Q.intl.string(Q.t["Z+hCVU"]));
        if (s) return this.renderSpinner(Q.intl.string(Q.t.bhJseN));
        if (null == i) return l ? this.renderExpiredInvite() : this.renderSpinner(Q.intl.string(Q.t.b3lf1c));
        if (l) {
            if (n) {
                let e = this.state.currentUser;
                return c || null == e
                    ? this.renderSpinner(Q.intl.string(Q.t.bYb2nS))
                    : this.requiresVerification && null != e
                      ? this.renderVerification(e)
                      : this.renderAuthenticated(i, e, t);
            }
            return "login" === this.getMode()
                ? (0, a.jsx)(iP, { giftCode: i, transitionTo: r, location: o })
                : (0, a.jsx)(lT, { giftCodeSKU: t, giftCode: i, transitionTo: r, location: o });
        }
        return null;
    }
}
let lv = h.Ay.connectStores([np.A, nz.A, eK.default, nQ.A, eu.A, nF.A], (e) => {
        let t = e.match.params.giftCode,
            n = np.A.get(t),
            i = null != n ? nQ.A.get(n.skuId) : null;
        return {
            giftCode: n,
            sku: i,
            libraryApplication:
                null != i && n?.entitlementBranches != null ? nH.YI(n.entitlementBranches, i, nz.A) : null,
            authenticated: eK.default.isAuthenticated(),
            defaultRoute: eu.A.defaultRoute,
            isResolved: np.A.getIsResolved(t),
            isAccepting: np.A.getIsAccepting(t),
            libraryApplicationsFetched: nz.A.fetched,
            nativeAppState: nF.A.getState(t),
        };
    })(lI),
    lC = (e) => {
        let { sku: t, children: n, giftCodeCode: i, transitionTo: l } = e,
            s = (0, nW.bF)(t);
        return (o.useEffect(() => {
            null != i && s && l(y.BVt.APP_WITH_GIFT_CODE(i));
        }, [s, i, l]),
        s)
            ? (0, a.jsxs)(k.Ay, {
                  children: [(0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.b3lf1c) }), (0, a.jsx)(k.CK, {})],
              })
            : n;
    };
var lS = n(871194),
    lb = n(799365),
    ly = n(894778),
    lR = n(315290),
    lO = n(396574),
    lL = n(94654);
h.Ay.initialize();
class lk extends o.PureComponent {
    componentDidMount() {
        (0, G.d)("guildTemplate"),
            lO.VP || eq.A.launch("discord://" + y.BVt.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && eC.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return lO.VP
            ? (0, a.jsx)("div", { className: K.eT, children: (0, a.jsx)(M.$, { text: e, fullWidth: !0, onClick: t }) })
            : (0, a.jsx)(k.KE, { className: K.eT });
    }
    renderSpinner(e) {
        return (0, a.jsxs)(k.Ay, { children: [(0, a.jsx)(k.hE, { children: e }), (0, a.jsx)(k.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: w()(K.Ot, K.QB), children: Q.intl.string(Q.t.C7ZRNw) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.A6MwXE) }),
                this.renderButton(Q.intl.string(Q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: K.QB, children: Q.intl.string(Q.t.csrAMJ) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t["m1+IBn"]) }),
                this.renderButton(Q.intl.string(Q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (eB()(null != e, "guild template must not be null"), e.state === ij.QB.RESOLVING)
            ? (0, a.jsx)(k.Ay, { className: lL.sL, children: (0, a.jsx)(lb.A, { guildTemplate: e }) })
            : (0, a.jsx)(lP, { guildTemplate: e });
    }
    renderContinue() {
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.fOc4gn) }),
                this.renderButton(Q.intl.string(Q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: i, location: l } = this.props;
        if (null == e) return this.renderSpinner(Q.intl.string(Q.t.ZTNur7));
        if (t === y.fAW.OPEN) return this.renderAppOpened();
        if (t === y.fAW.OPENING) return this.renderSpinner(Q.intl.string(Q.t["Z+hCVU"]));
        switch (e.state) {
            case ij.QB.RESOLVING:
                return this.renderSpinner(Q.intl.string(Q.t["Z+hCVU"]));
            case ij.QB.RESOLVED:
                if (n || !lO.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, a.jsx)(iP, { guildTemplate: e, transitionTo: i, location: l });
                return (0, a.jsx)(lT, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: l,
                    onRegister: () => {
                        (0, l_.C)(lN.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            ly.A.flowStart(lR.do.ORGANIC_GUILD_TEMPLATES, lR.ju.NUF_STARTED);
                    },
                });
            case ij.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function lP(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, lS.A)(t, !1);
    ly.A.flowStep(lR.do.ORGANIC_GUILD_TEMPLATES, lR.jC.GUILD_CREATE);
    let l = (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(k.hE, { className: lL.wx, children: Q.intl.string(Q.t.UNFvtM) }),
            n,
            (0, a.jsx)("div", {
                className: lL.Tf,
                children: (0, a.jsx)(M.$, { text: Q.intl.string(Q.t.xr59t7), fullWidth: !0, onClick: i }),
            }),
        ],
    });
    return (0, a.jsx)(ie, {
        className: lL.sL,
        children: () => [
            (0, a.jsx)(it.A, { guildTemplate: t }, "template"),
            (0, a.jsx)("div", { className: lL.KJ, children: l }, "contents"),
        ],
    });
}
function lG(e, t, n) {
    e.preventDefault(),
        S.default.track(y.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        });
    let i = eK.default.getFingerprint(),
        l = null != i ? i : eK.default.getId();
    eC.A.openMobileApp(n.state === ij.QB.RESOLVED ? t : void 0, l);
}
function lD(e) {
    let { code: t } = e,
        n = (0, h.bG)([ev.A], () => ev.A.getGuildTemplate(t));
    return (o.useEffect(() => {
        (0, G.d)("guild_template_mobile");
    }, []),
    null == n || n.state === ij.QB.RESOLVING)
        ? (0, a.jsx)(k.Ay, { children: (0, a.jsx)(eL.y, {}) })
        : n.state === ij.QB.RESOLVED
          ? (0, a.jsxs)(k.Ay, {
                children: [
                    (0, a.jsx)(lb.A, { guildTemplate: n, tall: !0 }),
                    (0, a.jsx)("div", {
                        className: K.QX,
                        children: (0, a.jsx)(M.$, {
                            text: Q.intl.string(Q.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => lG(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, a.jsx)(e8, {
                text: Q.intl.string(Q.t["e/rZ2n"]),
                buttonCta: Q.intl.string(Q.t.HAvYn0),
                onClick: (e) => lG(e, t, n),
            });
}
h.Ay.initialize(), n(938796);
var lV = n(821418),
    lw = n(665260),
    lU = n(362474),
    lM = n(695366),
    lB = n(964486),
    lF = n(921037),
    lW = n(4274);
h.Ay.initialize();
let lz = "register",
    lQ = "login";
function lH(e) {
    let { message: t, onClick: n, invite: i, className: l } = e,
        s = i?.guild_scheduled_event != null;
    return lO.VP
        ? (0, a.jsx)("div", {
              className: l ?? (s ? K.QX : K.eT),
              children: (0, a.jsx)(M.$, { text: t, onClick: n, variant: s ? "active" : "primary", fullWidth: !0 }),
          })
        : (0, a.jsx)(k.KE, { className: l ?? K.eT });
}
function lK(e) {
    let { invite: t, inviteKey: n, handleAccept: i, handleDefaultTransition: l } = e,
        s = (0, h.bG)([e5.A], () => (t.state === y.elq.ERROR ? e5.A.getInviteError(n) : void 0)),
        r = t.guild_scheduled_event,
        o = s?.code === y.t02.INVALID_CANNOT_FRIEND_SELF;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)(k.Ay, {
                children: [
                    null != r
                        ? (0, a.jsx)(lh, { channel: t.channel, guildScheduledEvent: r })
                        : (0, a.jsx)(n6.A, { invite: t }),
                    null != s &&
                        (0, a.jsx)("div", {
                            className: K.QX,
                            role: "alert",
                            children: (0, a.jsxs)(U.E, {
                                variant: "text-sm/medium",
                                color: "text-feedback-critical",
                                style: { display: "flex", alignItems: "center", gap: 4 },
                                children: [
                                    (0, a.jsx)(lM.E, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                                    " ",
                                    (0, lW.s)(s.code),
                                ],
                            }),
                        }),
                    (0, a.jsx)(lH, {
                        invite: t,
                        message: Q.intl.string(o ? Q.t.fIv16B : Q.t.ohMvm1),
                        onClick: o ? l : i,
                        className: null != s ? K.QX : void 0,
                    }),
                ],
            }),
            null != r &&
                null != t.guild &&
                (0, a.jsx)(k.Ay, {
                    className: K.QX,
                    children: (0, a.jsx)(lf, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                }),
        ],
    });
}
function lq(e) {
    let { invite: t, rpcConnected: n, onContinue: i } = e;
    return (0, a.jsxs)(k.Ay, {
        children: [
            (0, a.jsx)(n6.A, { invite: t }),
            lO.VP
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("div", {
                              className: K.QX,
                              children: (0, a.jsx)(M.$, {
                                  text: Q.intl.string(Q.t.UQvCf7),
                                  onClick: () => {
                                      S.default.track(y.HAw.INVITE_CTA_CLICKED, {
                                          action: "open_app",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          n ? A.Ay.openNativeAppModal(t.code) : A.Ay.openApp(t.code);
                                  },
                                  variant: "primary",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, a.jsx)("div", {
                              className: K.Ot,
                              children: (0, a.jsx)(M.$, {
                                  text: Q.intl.string(Q.t["2ixEBi"]),
                                  onClick: () => {
                                      S.default.track(y.HAw.INVITE_CTA_CLICKED, {
                                          action: "continue_in_browser",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          i?.();
                                  },
                                  variant: "secondary",
                                  fullWidth: !0,
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(k.KE, { className: K.eT }),
        ],
    });
}
function lX(e) {
    let { title: t } = e;
    return (0, a.jsxs)(k.Ay, { children: [(0, a.jsx)(k.hE, { children: t }), (0, a.jsx)(k.CK, {})] });
}
function lY(e) {
    let { banned: t, handleDefaultTransition: n } = e;
    return (0, a.jsxs)(k.Ay, {
        children: [
            (0, a.jsx)(k.hE, { className: w()(K.Ot, K.QB), children: Q.intl.string(Q.t.kux01N) }),
            (0, a.jsx)(k.tK, { children: t ? Q.intl.string(Q.t["5AkWAd"]) : Q.intl.string(Q.t["+qUJAj"]) }),
            (0, a.jsx)(lH, { message: Q.intl.string(Q.t.fIv16B), onClick: n }),
            (0, a.jsx)("div", {
                className: K.Ot,
                style: { textAlign: "left" },
                children: (0, a.jsx)(ed.Q, {
                    size: "sm",
                    textVariant: "text-sm/medium",
                    text: Q.intl.string(Q.t.urIwn4),
                    onClick: () => window.open(t9.A.getArticleURL(y.MVz.INVALID_INVITES), "_blank"),
                }),
            }),
        ],
    });
}
function l$(e) {
    let { handleDefaultTransition: t } = e;
    return (0, a.jsxs)(k.Ay, {
        children: [
            (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.fOc4gn) }),
            (0, a.jsx)(lH, { message: Q.intl.string(Q.t.fIv16B), onClick: t }),
        ],
    });
}
var lJ = n(334465);
let lZ = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_dsa_webform",
    label: "Safety Experience Unauthenticated Report Form",
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 1, label: "EU user", config: { enabled: !0 } },
        { id: 2, label: "DSA E2E testing user", config: { enabled: !0 } },
    ],
});
h.Ay.initialize();
var l0 = n(163050);
h.Ay.initialize();
var l1 = n(701273);
function l2(e) {
    n.g.location.assign(e);
}
h.Ay.initialize(), n(426620), h.Ay.initialize();
let l3 = nL(iP),
    l8 = nL(function (e) {
        let t = o.useCallback(
                (t) => {
                    let n;
                    ((n = (0, lJ.B)(t, { path: y.BVt.CHANNEL(t2.pv.guildId(), t2.pv.channelId()) })),
                    +(n?.params?.channelId !== N.VV.ROLE_SUBSCRIPTIONS))
                        ? (e.transitionTo ?? P.pX)(t)
                        : P.bG(t);
                },
                [e.transitionTo],
            ),
            { isAuthenticated: n, loginStatus: i } = (0, h.cf)([eK.default], () => ({
                isAuthenticated: eK.default.isAuthenticated(),
                loginStatus: eK.default.getLoginStatus(),
            })),
            { location: l, redirectTo: s } = e,
            [r, d] = o.useState(n);
        function u(e) {
            let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
            (0, E.Qh)({ handoffKey: t, handoffToken: n, handoffSource: i }), d(!1);
        }
        return ((0, lB.Ay)(() => {
            if (null != l) {
                let { handoff_key: e, handoff_token: t } = (0, c.parse)(l.search);
                if (null != e && null != t) {
                    let n = null != s ? v(s) : void 0;
                    r
                        ? x.A.logout("handoff", null).finally(() => {
                              u({ handoffKey: e, handoffToken: t, handoffSource: n });
                          })
                        : u({ handoffKey: e, handoffToken: t, handoffSource: n });
                }
            }
        }),
        r || i === y.aUe.LOGGING_IN)
            ? (0, a.jsx)(k.Ay, { children: (0, a.jsx)(eL.y, {}) })
            : (0, a.jsx)(iP, { ...e, transitionTo: t });
    }),
    l7 = nL(function (e) {
        let { inviteKey: t, location: n, transitionTo: i, login: l } = e,
            s = (0, h.bG)([e5.A], () => e5.A.getInvite(t)),
            r = (0, h.bG)([nF.A], () => nF.A.getState(t)),
            c = (0, h.bG)([eK.default], () => eK.default.isAuthenticated()),
            d = (0, h.bG)([eu.A], () => eu.A.defaultRoute),
            u = (0, h.bG)([iM], () => iM.isUnderageAnonymous()),
            [m, x] = o.useState(!1);
        o.useLayoutEffect(() => {
            (r === y.fAW.OPEN || s?.state === y.elq.APP_OPENED) && x(!0);
        }, [s?.state, r]);
        let f = l ? lQ : lz,
            p = o.useCallback((e) => A.Ay.getInviteContext(e, s), [s]),
            E = o.useCallback(
                (e) => {
                    null != s &&
                        (null != s.channel || e?.channel != null) &&
                        (s.guild?.id != null
                            ? i(y.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(s.code))
                            : A.Ay.transitionToInvite(e ?? s, i));
                },
                [s, i],
            ),
            _ = o.useCallback(() => {
                S.default.track(y.HAw.INVITE_CTA_CLICKED, {
                    action: "accept_invite",
                    invite_code: s?.code,
                    guild_id: s?.guild?.id,
                }),
                    A.Ay.acceptInvite({
                        inviteKey: t,
                        context: p(y.S3d.INVITE),
                        skipOnboarding: !0,
                        callback: (e) => {
                            ei(e), null != e.channel && A.Ay.openApp(t, e.channel.id);
                        },
                    }).catch(() => {});
            }, [t, p, s?.code, s?.guild?.id]),
            j = o.useCallback(() => {
                i(d);
            }, [d, i]);
        if (
            ((0, lB.Ay)(() => {
                let e = eK.default.getAnalyticsToken();
                if (
                    (null != e &&
                        g.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eK.default.getId() }),
                    S.default.track(y.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }),
                    (0, G.d)("invite"),
                    lO.VP || eq.A.launch("discord://" + y.BVt.INVITE(t), () => void 0),
                    !l && u)
                ) {
                    let { baseCode: e } = (0, eX.y$)(t);
                    (0, P.bG)(y.BVt.INVITE_LOGIN(e));
                }
            }),
            o.useEffect(() => {
                s?.state === y.elq.APP_NOT_OPENED && E();
            }, [s?.state, E]),
            (function (e) {
                let {
                        invite: t,
                        inviteKey: n,
                        authenticated: i,
                        nativeAppState: l,
                        mode: s,
                        getAcceptInviteContext: r,
                        handleContinue: a,
                        transitionTo: c,
                    } = e,
                    d = (0, n3.A)(i),
                    u = (0, n3.A)(l);
                o.useEffect(() => {
                    if (s === lQ && i && !1 === d) {
                        let e = eK.default.getFingerprint();
                        if (null != e) {
                            let i = (0, eH.d)(e);
                            S.default.track(y.HAw.INVITE_LOGIN_SUCCESSFUL, {
                                invite_code: (0, eX.m0)(n),
                                guild_id: t?.guild?.id,
                                channel_id: t?.channel?.id,
                                inviter_id: t?.inviter?.id,
                                prev_user_id: i,
                            });
                        }
                        A.Ay.acceptInvite({
                            inviteKey: n,
                            context: r(y.S3d.INVITE),
                            skipOnboarding: !0,
                            callback: a,
                        }).catch(() => {});
                    }
                }, [i, d, s, r, a, t, n]),
                    o.useEffect(() => {
                        if (null != t && s === lz && i && !1 === d) {
                            let { channel: e } = t;
                            if (null != e)
                                if (((0, l_.C)(lN.zY.INVITE_UNCLAIMED), null != t.guild)) {
                                    let e = (0, lw.Lt)(t.flags ?? 0, lV.Q.IS_APPLICATION_BYPASS),
                                        n =
                                            t.guild.features?.includes(
                                                y.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED,
                                            ) &&
                                            t.guild.features?.includes(
                                                y.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL,
                                            );
                                    !e && n
                                        ? c(y.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id))
                                        : c(y.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code));
                                } else A.Ay.transitionToInvite(t, c);
                        }
                    }, [t, i, d, c, s]),
                    o.useEffect(() => {
                        null == t ||
                            (l !== u &&
                                (l === y.fAW.OPEN
                                    ? S.default.track(
                                          y.HAw.INVITE_APP_INVOKED,
                                          {
                                              invite_code: (0, eX.m0)(n),
                                              guild_id: t.guild?.id,
                                              channel_id: t.channel?.id,
                                              inviter_id: t.inviter?.id,
                                              user_is_member: null != t.guild && null != e6.A.getGuild(t.guild.id),
                                              size_total: t.approximate_member_count,
                                              invite_type: null != t.type ? tr.Xd[t.type] : void 0,
                                          },
                                          { flush: !0 },
                                      )
                                    : l === y.fAW.OPEN_FAIL &&
                                      S.default.track(y.HAw.INVITE_APP_INVOKE_FAILED, {
                                          invite_code: (0, eX.m0)(n),
                                          reason: "rpc_failed",
                                          invite_type: null != t.type ? tr.Xd[t.type] : void 0,
                                      })));
                    }, [t, l, u, n]);
            })({
                invite: s,
                inviteKey: t,
                authenticated: c,
                nativeAppState: r,
                mode: f,
                getAcceptInviteContext: p,
                handleContinue: E,
                transitionTo: i,
            }),
            null == s)
        )
            return null;
        let N = r === y.fAW.OPEN;
        if (m || N || s.state === y.elq.APP_OPENED)
            return (0, a.jsx)(lq, { invite: s, rpcConnected: N, onContinue: E });
        let { state: T } = s;
        if (T === y.elq.APP_NOT_OPENED) return (0, a.jsx)(l$, { handleDefaultTransition: j });
        if ([y.elq.RESOLVING, y.elq.ACCEPTING, y.elq.APP_OPENING].includes(T)) {
            let e =
                T === y.elq.ACCEPTING ? Q.intl.string(Q.t["6wsY16"]) : (y.elq.RESOLVING, Q.intl.string(Q.t["Z+hCVU"]));
            return (0, a.jsx)(lX, { title: e });
        }
        if (T === y.elq.EXPIRED) return (0, a.jsx)(lY, { banned: !1, handleDefaultTransition: j });
        if (T === y.elq.BANNED) return (0, a.jsx)(lY, { banned: !0, handleDefaultTransition: j });
        if (T === y.elq.RESOLVED) {
            if (c && (0, lw.Lt)(s.flags ?? 0, lV.Q.IS_GUEST_INVITE))
                return (
                    A.Ay.openApp(s.code),
                    lU.u.set(lF.B, s.code),
                    (0, a.jsx)(lq, { invite: s, rpcConnected: N, onContinue: () => i(y.BVt.APP) })
                );
            if (!c && lO.VP)
                return f === lQ
                    ? (0, a.jsx)(iP, { invite: s, transitionTo: i, location: n })
                    : (0, a.jsx)(lT, {
                          invite: s,
                          onLoginStart: () => {
                              S.default.track(y.HAw.INVITE_LOGIN, {
                                  invite_code: s?.code,
                                  guild_id: s?.guild?.id,
                                  channel_id: s?.channel?.id,
                                  inviter_id: s?.inviter?.id,
                              });
                          },
                          location: n,
                          transitionTo: i,
                      });
        }
        return T === y.elq.RESOLVED || T === y.elq.ERROR
            ? (0, a.jsx)(lK, { invite: s, inviteKey: t, handleAccept: _, handleDefaultTransition: j })
            : null;
    }),
    l4 = nL(function (e) {
        let t = {
            guildTemplate: (0, h.bG)([ev.A], () => ev.A.getGuildTemplate(e.code)),
            nativeAppState: (0, h.bG)([nF.A], () => nF.A.getState(e.code)),
            authenticated: (0, h.bG)([eK.default], () => eK.default.isAuthenticated()),
            defaultRoute: (0, h.bG)([eu.A], () => eu.A.defaultRoute),
        };
        return (0, a.jsx)(lk, { ...e, ...t });
    }),
    l6 = nL(lv),
    l5 = nL(function (e) {
        let { inviteKey: t, transitionTo: n } = e,
            i = (0, h.bG)([e5.A], () => e5.A.getInvite(t));
        return (
            o.useEffect(() => {
                let e = eK.default.getAnalyticsToken();
                null != e &&
                    g.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eK.default.getId() }),
                    (0, G.d)("invite_mobile"),
                    S.default.track(y.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 });
            }, []),
            (0, a.jsx)(tq, {
                invite: i,
                onAcceptInvite: (e) => {
                    let n, l, s, r;
                    e?.preventDefault(),
                        S.default.track(
                            y.HAw.INVITE_APP_OPENED,
                            {
                                invite_code: (0, eX.m0)(t),
                                guild_id: i?.guild?.id,
                                channel_id: i?.channel?.id,
                                inviter_id: i?.inviter?.id,
                                invite_type: null != i && i?.type != null ? tr.Xd[i?.type] : void 0,
                                user_is_member: null != i && null != i.guild && null != e6.A.getGuild(i.guild.id),
                                size_total: i?.approximate_member_count,
                                time_to_click_ms: Math.round(performance.now()),
                            },
                            { flush: !0 },
                        ),
                        (n = null != i && i.state !== y.elq.EXPIRED && i.state !== y.elq.BANNED ? t : void 0),
                        (s = null != (l = eK.default.getFingerprint()) ? l : eK.default.getId()),
                        (r = null != i && i?.type != null ? Number(i?.type) : void 0),
                        A.Ay.openApp(n, void 0, s, void 0, r);
                },
                transitionTo: n,
            })
        );
    }),
    l9 = nL(lT),
    se = nL(function (e) {
        let { location: t, transitionTo: i = P.pX } = e,
            [l, s] = o.useState("submitting");
        function r() {
            return "Android" === eW().os.family || "iOS" === eW().os.family
                ? null
                : (0, a.jsx)(M.$, {
                      text: Q.intl.string(Q.t.dKhVQN),
                      fullWidth: !0,
                      onClick: () => i(y.BVt.LOGIN, { source: "authorizeIPAdress" }),
                  });
        }
        return ((0, lB.Ay)(() => {
            (0, G.d)("authorize_ip");
            let e = (0, eh.A)(t);
            null == e
                ? s("failed")
                : (async () => {
                      try {
                          await x.A.authorizeIPAddress(e), s("succeeded");
                      } catch (e) {
                          s("failed");
                      }
                  })();
        }),
        "failed" === l)
            ? (0, a.jsxs)(k.Ay, {
                  children: [
                      (0, a.jsx)("img", { alt: "", src: n(792009), className: K.SX }),
                      (0, a.jsx)(k.hE, { className: K.QB, children: Q.intl.string(Q.t["f/54az"]) }),
                      (0, a.jsx)(k.tK, { className: K.C2, children: Q.intl.string(Q.t.i3ehMr) }),
                      r(),
                  ],
              })
            : "succeeded" === l
              ? (0, a.jsxs)(k.Ay, {
                    children: [
                        (0, a.jsx)("img", { alt: "", src: n(841406), className: K.SX }),
                        (0, a.jsx)(k.hE, { className: K.QB, children: Q.intl.string(Q.t.iG0SlK) }),
                        (0, a.jsx)(k.tK, { className: K.C2, children: Q.intl.string(Q.t["Elv+qt"]) }),
                        r(),
                    ],
                })
              : (0, a.jsxs)(k.Ay, {
                    children: [(0, a.jsx)(k.CK, {}), (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t["9exy+V"]) })],
                });
    }),
    st = nL(function (e) {
        let { location: t } = e,
            [i, l] = o.useState("submitting");
        return (o.useEffect(() => {
            (0, G.d)("authorize_payment");
            let e = (0, eh.A)(t);
            null == e
                ? l("failed")
                : (async () => {
                      try {
                          await x.A.authorizePayment(e), l("succeeded");
                      } catch (e) {
                          l("failed");
                      }
                  })();
        }, [t]),
        "failed" === i)
            ? (0, a.jsxs)(k.Ay, {
                  children: [
                      (0, a.jsx)("img", { alt: "", src: n(678985), className: K.SX }),
                      (0, a.jsx)(k.hE, { className: K.QB, children: Q.intl.string(Q.t.GHRpue) }),
                      (0, a.jsx)(k.tK, { className: K.C2, children: Q.intl.string(Q.t["1nO55v"]) }),
                  ],
              })
            : "succeeded" === i
              ? (0, a.jsxs)(k.Ay, {
                    children: [
                        (0, a.jsx)("img", { alt: "", src: n(586430), className: K.SX }),
                        (0, a.jsx)(k.hE, { className: K.QB, children: Q.intl.string(Q.t.ihHX53) }),
                        (0, a.jsx)(k.tK, { className: K.C2, children: Q.intl.string(Q.t["pGPCv+"]) }),
                    ],
                })
              : (0, a.jsxs)(k.Ay, {
                    children: [(0, a.jsx)(k.CK, {}), (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.T3vC7n) })],
                });
    }),
    sn = nL(function (e) {
        let { location: t, transitionTo: n = l2 } = e,
            [i, l] = o.useState("submitting"),
            s = o.useRef(void 0);
        (0, lB.Ay)(() => {
            (0, G.d)("verify_email");
            let e = (0, eh.A)(t);
            null == e
                ? l("failed")
                : (async () => {
                      try {
                          let t = await x.A.verify(e);
                          l("succeeded"), (s.current = t);
                      } catch (e) {
                          l("failed");
                      }
                  })();
        });
        let r = o.useCallback(() => {
                n(y.BVt.LOGIN, { source: "verify_email" });
            }, [n]),
            c = o.useCallback(() => {
                S.default.track(y.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: s.current }),
                    (0, l1.A)("verify_email");
            }, []);
        return "failed" === i
            ? (0, a.jsx)(eP, {
                  title: Q.intl.string(Q.t["PCgG3+"]),
                  subtitle: Q.intl.string(Q.t.tQpeA3),
                  buttonText: Q.intl.string(Q.t.dKhVQN),
                  onButtonClick: r,
              })
            : "succeeded" === i
              ? (0, a.jsx)(eP, {
                    title: Q.intl.string(Q.t["dAfGb+"]),
                    buttonText: Q.intl.string(Q.t["uJWIj/"]),
                    onButtonClick: c,
                    image: (0, a.jsx)(eb, { alt: Q.intl.string(Q.t["dAfGb+"]) }),
                })
              : (0, a.jsx)(eP, {
                    title: Q.intl.string(Q.t["0c8+5n"]),
                    subtitle: Q.intl.string(Q.t.ULTCBE),
                    loading: !0,
                });
    }),
    si = nL(() => {
        let [e, t] = o.useState(""),
            [i, l] = o.useState(""),
            [s, r] = o.useState(!1),
            [c, d] = o.useState(!1),
            [u, m] = o.useState(null),
            [g, x] = o.useState(null),
            f = (0, h.bG)([eE.A], () => eE.A.getCountryCode()),
            A = f.code.split(" ")[0],
            p = async () => {
                try {
                    await eA.A.resendCode(e);
                } catch (e) {
                    x(e.body.message);
                }
            },
            E = async () => {
                r(!0);
                try {
                    let { token: t } = await eA.A.verifyPhone(A + e, i);
                    m(null), x(null), d(!0), eA.A.validatePhoneForSupport(t);
                } catch (e) {
                    e.body.message ? (m(null), x(e.body.message)) : (m(e.body.phone), x(e.body.code));
                } finally {
                    r(!1);
                }
            },
            _ = (0, a.jsxs)(k.Ay, {
                children: [
                    (0, a.jsx)(k._V, { src: n(142041) }),
                    (0, a.jsxs)(k.hE, {
                        className: w()(K.QX, ej.Uu, ej.wq, ej.Hu),
                        children: [
                            Q.intl.string(Q.t.WWzQta),
                            (0, a.jsx)(ef.y, { size: "md", color: "currentColor", className: K.oY }),
                        ],
                    }),
                ],
            });
        return c
            ? _
            : (0, a.jsxs)(k.Ay, {
                  children: [
                      (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.o4JNrO) }),
                      (0, a.jsx)(k.tK, { className: K.Ot, children: Q.intl.string(Q.t.y0tVbq) }),
                      (0, a.jsxs)(k.eB, {
                          className: K.QX,
                          children: [
                              (0, a.jsx)(e_.A, {
                                  label: Q.intl.string(Q.t["eJnn0+"]),
                                  alpha2: f.alpha2,
                                  countryCode: A,
                                  value: e,
                                  autoComplete: "off",
                                  spellCheck: "false",
                                  onChange: t,
                                  forceMode: ep.Pd.PHONE,
                                  error: u,
                              }),
                              (0, a.jsx)(k.pd, {
                                  className: K.QX,
                                  label: Q.intl.string(Q.t.OdzNbm),
                                  value: i,
                                  onChange: l,
                                  maxLength: 6,
                                  error: g,
                              }),
                              (0, a.jsx)(ed.Q, { text: Q.intl.string(Q.t["5b60gi"]), onClick: p }),
                              (0, a.jsx)("div", {
                                  className: K.QX,
                                  children: (0, a.jsx)(M.$, {
                                      text: Q.intl.string(Q.t.i4jeWR),
                                      fullWidth: !0,
                                      onClick: E,
                                      loading: s,
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    }),
    sl = nL(l0.A),
    ss = nL(nM),
    sr = nL(ex),
    sa = nL(function (e) {
        let { location: t } = e,
            [n, i] = o.useState(!1),
            { verifySuccess: l, verifyErrors: s, redirectGuildId: r } = (0, h.bG)([eU], () => eU.getState());
        o.useEffect(() => {
            let e = (0, eh.A)(t);
            ey.A.verify(e), (0, G.d)("verify_hub_email");
        }, [t]);
        let c = () => {
            let e, t;
            (e = (function (e) {
                let t = eW().os?.family;
                if ("Android" === t || "iOS" === t) {
                    let t = eK.default.getFingerprint(),
                        n = (0, eQ.I_)();
                    return (
                        eB()(null != e, "generateAppPath: guildId cannot be null"),
                        (0, eQ.Ay)((0, ez.jN)(e), { utmSource: "verify_hub_email", fingerprint: t, attemptId: n })
                    );
                }
                return "discord://";
            })(r)),
                null != (t = (0, eQ.X7)(e)) &&
                    S.default.track(y.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, eH.v)(t.fingerprint),
                        attempt_id: t.attemptId,
                        source: t.utmSource,
                    }),
                eq.A.launch(e, (e) => {
                    e || (0, P.bG)(eu.A.fallbackRoute);
                }),
                i(!0);
        };
        return n
            ? (0, a.jsx)(eP, {
                  title: Q.intl.string(Q.t.csrAMJ),
                  subtitle: Q.intl.string(Q.t["m1+IBn"]),
                  buttonText: Q.intl.string(Q.t.fIv16B),
                  onButtonClick: () => (0, P.pX)(y.BVt.CHANNEL(r)),
              })
            : l
              ? (0, a.jsx)(eP, {
                    title: Q.intl.string(Q.t["dAfGb+"]),
                    buttonText: Q.intl.string(Q.t["uJWIj/"]),
                    onButtonClick: c,
                    image: (0, a.jsx)(eb, { alt: Q.intl.string(Q.t["dAfGb+"]) }),
                })
              : null != s
                ? (0, a.jsx)(eP, {
                      title: Q.intl.string(Q.t["PCgG3+"]),
                      subtitle: Q.intl.string(Q.t.tQpeA3),
                      buttonText: Q.intl.string(Q.t["uJWIj/"]),
                      onButtonClick: c,
                  })
                : (0, a.jsx)(eP, {
                      title: Q.intl.string(Q.t["0c8+5n"]),
                      subtitle: Q.intl.string(Q.t.ULTCBE),
                      loading: !0,
                  });
    }),
    so = nL(function (e) {
        let { match: t, location: n } = e,
            i = async (e, t) => {
                await (0, nP.W)(t0.XK.CHANNEL, {
                    guildId: e.params.guildId,
                    channelId: e.params.channelId,
                    messageId: e.params.messageId,
                    search: t.search,
                });
            };
        return (0, a.jsx)(nV, { match: t, location: n, attemptDeepLink: i });
    }),
    sc = nL(function (e) {
        let { match: t, location: n } = e,
            i = async (e) => {
                await (0, nP.W)(t0.XK.GAME_SHOP, {
                    guildId: e.params.guildId,
                    pageIndex: e.params.pageIndex,
                    skuId: e.params.skuId,
                    slug: e.params.slug,
                });
            };
        return (0, a.jsx)(nV, { match: t, location: n, attemptDeepLink: i });
    }),
    sd = nL(function (e) {
        let { match: t, location: n } = e,
            i = async (e, t) => {
                await (0, nP.W)(t0.XK.PICK_GUILD_SETTINGS, {
                    section: e.params.section,
                    subsection: e.params.subsection,
                    search: t.search,
                });
            };
        return (0, a.jsx)(nV, { match: t, location: n, attemptDeepLink: i });
    }),
    su = nL((e) => {
        let { location: t } = e,
            n = (0, h.bG)([eK.default], () => eK.default.isAuthenticated()),
            i = (0, h.bG)([eI.A], () => eI.A.hasLoadedExperiments),
            l = lZ.useExperiment({ location: "RSL - Landing Page" }, { autoTrackExposure: !0 }).enabled,
            [s, r] = o.useState(!1),
            [c, d] = o.useState(Q.intl.string(Q.t["9exy+V"])),
            [u, m] = o.useState(!0),
            g = (e) => {
                switch (e) {
                    case y.t02.INVALID_FORM_BODY:
                    case y.t02.DSA_RSL_REPORT_NOT_FOUND:
                        d(Q.intl.string(Q.t.bzXDfc));
                        break;
                    case y.t02.DSA_RSL_ALREADY_REQUESTED:
                        d(Q.intl.string(Q.t.rV00wq));
                        break;
                    case y.t02.DSA_RSL_LIMITED_TIME:
                        d(Q.intl.string(Q.t["0dI29h"]));
                        break;
                    case y.t02.DSA_RSL_REPORT_INELIGIBLE:
                        d(Q.intl.string(Q.t["RGa/Gb"]));
                        break;
                    default:
                        d(Q.intl.string(Q.t["0QLzfv"]));
                }
            };
        return (
            o.useEffect(() => {
                n
                    ? (m(!0),
                      t4
                          .rQ({ withAnalyticsToken: !0 })
                          .then(() => m(!1))
                          .catch(() => m(!1)))
                    : m(!1);
            }, [n]),
            o.useEffect(() => {
                i || l || x.A.getExperiments();
            }, [i, l]),
            o.useEffect(() => {
                let e = async (e) => {
                    try {
                        let t = null != e ? await (0, t5.q)(e) : void 0;
                        null != t ? d(Q.intl.string(Q.t.e6mZMt)) : g(t.body?.code);
                    } catch (e) {
                        g(e.body?.code);
                    } finally {
                        r(!1);
                    }
                };
                r(!0), e((0, eh.A)(t)), (0, G.d)("report_second_look");
            }, [t]),
            l &&
                !u &&
                (0, a.jsxs)(k.Ay, {
                    children: [(0, a.jsx)(k.hE, { className: K.QB, children: c }), s && (0, a.jsx)(eL.y, {})],
                })
        );
    }),
    sm = nL(et),
    sh = nL(function (e) {
        let { match: t, location: i } = e,
            l = (0, c.parse)(i.search).token,
            [s, r] = o.useState("loading"),
            d = o.useRef(!1),
            m = o.useCallback(async (e) => {
                try {
                    S.default.track(y.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                        await x.A.oneTimeLogin(e),
                        r("login_success"),
                        S.default.track(y.HAw.LOGIN_SUCCESSFUL, { source: "web_page", login_method: "one_time_login" }),
                        n.g.location.assign(y.BVt.APP);
                } catch (t) {
                    let e = t instanceof Error ? t.message : "Unknown error";
                    S.default.track(y.HAw.ONE_TIME_LOGIN_ERROR, {
                        source: "web_page",
                        error_reason: "api_error",
                        error_message: e,
                    }),
                        r("error");
                }
            }, []),
            h = o.useCallback((e) => {
                let t = eK.default.getFingerprint() ?? eK.default.getId(),
                    n = `discord://login/one-time?token=${encodeURIComponent(e)}`;
                eq.A.launch(n, (e) => {
                    e
                        ? (S.default.track(y.HAw.DEEP_LINK_CLICKED, {
                              source: "web_page",
                              destination: "discord://login/one-time",
                              deep_link_provider: "protocol",
                              fingerprint: t,
                          }),
                          r("app_launched"))
                        : r("app_launch_not_supported");
                });
            }, []),
            g = o.useCallback(
                (e) => {
                    let t = eK.default.getFingerprint() ?? eK.default.getId(),
                        i = eK.default.getInstallationForTracking();
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((n) => {
                            let { default: l } = n;
                            l.request(y.e$_.DEEP_LINK, {
                                type: t0.XK.ONE_TIME_LOGIN,
                                params: { token: e, fingerprint: t, installationId: i },
                            })
                                .then((n) => {
                                    n
                                        ? (S.default.track(y.HAw.DEEP_LINK_CLICKED, {
                                              source: "web_page",
                                              destination: "one_time_login_modal",
                                              deep_link_provider: "rpc",
                                              fingerprint: t,
                                          }),
                                          r("app_launched"))
                                        : h(e);
                                })
                                .catch(() => {
                                    h(e);
                                })
                                .then(() => l.disconnect());
                        });
                },
                [h],
            );
        if (
            (o.useEffect(() => {
                let e = null != l && "string" == typeof l,
                    t = u.Fr ? "mobile" : u.v1 ? "tablet" : (0, tX.isDesktop)() ? "desktop_app" : "web";
                if ((S.default.track(y.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: e, device_type: t }), !e))
                    return void r("error");
                if (u.Fr || u.v1) {
                    let e = S.default.getSuperProperties()?.os;
                    S.default.track(y.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_ui_shown",
                        device_type: t,
                        platform: e,
                    });
                    return;
                }
                (0, tX.isDesktop)() ? m(l) : d.current || ((d.current = !0), r("rpc_attempting"), g(l));
            }, [l, i, m, g]),
            u.Fr || u.v1)
        ) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, a.jsx)(tZ, { token: l, hasError: "error" === s, errorReason: e });
        }
        if ((0, P.MX)()) return null;
        if ("app_launched" === s)
            return (0, a.jsx)(t1, {
                title: Q.intl.string(Q.t.RvUUOy),
                subtitle: Q.intl.string(Q.t["5/lR0g"]),
                buttonText: Q.intl.string(Q.t["2ixEBi"]),
                buttonOnClick: () => {
                    S.default.track(y.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: s }), m(l);
                },
            });
        if ("app_launch_not_supported" === s)
            return (0, a.jsx)(t1, {
                title: Q.intl.string(Q.t.qq4tjT),
                subtitle: Q.intl.string(Q.t.CVxYRo),
                buttonText: Q.intl.string(Q.t["2ixEBi"]),
                buttonOnClick: () => m(l),
            });
        if ("error" === s) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, a.jsx)(t1, {
                title: Q.intl.string(Q.t.RtCSr1),
                subtitle: Q.intl.string(Q.t["S+YjYJ"]),
                buttonText: Q.intl.string(Q.t.j3cG2p),
                buttonOnClick: () => {
                    S.default.track(y.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                        (0, P.pX)(y.BVt.LOGIN);
                },
            });
        }
        return (0, a.jsx)(k.Ay, { children: (0, a.jsx)(k.CK, {}) });
    });
class sg extends o.PureComponent {
    state = { splash: null, redirectTo: null, backgroundId: null };
    static getDerivedStateFromProps(e, t) {
        let { invite: n, location: i } = e,
            { backgroundId: l } = t,
            s = (0, c.parse)(i.search).redirect_to ?? null;
        (null == s || "" === s || s.startsWith(y.BVt.ME) || (!(0, m.e)(s) && !eo(s))) && (s = null);
        let r = null;
        if (null == n) r = (0, n_.u8)(s);
        else {
            let { guild: e, target_application: t } = n;
            null != t
                ? null != l && (r = (0, nE.uD)(t.id, l, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (r = e9.Ay.getGuildSplashURL({ id: e.id, splash: e.splash }));
        }
        return { redirectTo: s, splash: r };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        null != e &&
            (!t && n && x.A.getExperiments(!0),
            S.default.track(
                y.HAw.INVITE_OPENED,
                { invite_code: (0, eX.m0)(e), load_time: nN.getTimeSinceNavigationStart() },
                { flush: !0 },
            )),
            t && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            L.initialize(),
            (0, G.D)();
    }
    componentDidUpdate(e) {
        !e.hasLoadedExperiments && this.props.hasLoadedExperiments && this.resolveInvite(),
            e.invite?.state !== this.props.invite?.state && this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        L.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if (e?.state === y.elq.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, nE.RG)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await A.Ay.resolveInvite(e, y.S3d.INVITE, { withGames: !0 });
        if (null != t && (ei(t), null != t.type && tr.uR.has(t.type))) {
            if ("denied" === (await eT()))
                return void S.default.track(y.HAw.INVITE_APP_INVOKE_FAILED, {
                    invite_code: (0, eX.m0)(e),
                    reason: "lna_denied",
                    invite_type: tr.Xd[t.type],
                });
            A.Ay.openNativeAppModal(e);
        }
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (S.default.track(
                y.HAw.GUILD_TEMPLATE_OPENED,
                { guild_template_code: e, load_time: nN.getTimeSinceNavigationStart() },
                { flush: !0 },
            ),
            eC.A.resolveGuildTemplate(e),
            eC.A.openNativeAppModal(e));
    }
    resolveGiftCode() {
        let { giftCode: e } = this.props;
        null != e &&
            f.A.resolveGiftCode(e, !0, !0).then((t) => {
                null != t && null == t.giftCode.promotion && g.h.wait(() => f.A.openNativeGiftCodeModal(e));
            });
    }
    render() {
        let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
        return (0, a.jsxs)(nk.A, {
            splash: e,
            children: [
                (0, a.jsx)(en.A, { path: y.BVt.LOGIN_HANDOFF, render: (e) => (0, a.jsx)(l8, { ...e, redirectTo: t }) }),
                (0, a.jsx)(en.A, { path: y.BVt.LOGIN_ONE_TIME, render: (e) => (0, a.jsx)(sh, { ...e }) }),
                (0, a.jsx)(en.A, {
                    impressionName: d.ImpressionNames.USER_LOGIN,
                    path: y.BVt.LOGIN,
                    render: (e) => (0, a.jsx)(l3, { ...e, redirectTo: t }),
                }),
                (0, a.jsx)(en.A, {
                    impressionName: d.ImpressionNames.USER_REGISTRATION,
                    path: y.BVt.REGISTER,
                    render: (e) => (0, a.jsx)(l9, { ...e, redirectTo: t }),
                }),
                (0, a.jsx)(en.A, {
                    path: y.BVt.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, a.jsx)(l6, { login: !0, ...e }),
                }),
                (0, a.jsx)(en.A, { path: y.BVt.GIFT_CODE(":giftCode"), render: (e) => (0, a.jsx)(l6, { ...e }) }),
                (0, a.jsx)(en.A, {
                    path: [y.BVt.INVITE_LOGIN(":inviteCode"), y.BVt.INVITE(":inviteCode")],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n,
                                },
                                location: i,
                                transitionTo: l,
                            } = e,
                            s = (0, eX.fB)(t, i.search);
                        return u.Fr || u.v1
                            ? (0, a.jsx)(l5, { inviteKey: s, transitionTo: l }, s)
                            : (0, a.jsx)(
                                  l7,
                                  {
                                      inviteKey: s,
                                      location: i,
                                      transitionTo: l,
                                      login: n === y.BVt.INVITE_LOGIN(":inviteCode"),
                                  },
                                  s,
                              );
                    },
                }),
                (0, a.jsx)(en.A, {
                    path: [
                        y.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                        y.BVt.GUILD_TEMPLATE(":guildTemplateCode"),
                    ],
                    render: (e) => {
                        let {
                            match: {
                                params: { guildTemplateCode: t },
                                path: n,
                            },
                            location: i,
                            transitionTo: l,
                        } = e;
                        return u.Fr || u.v1
                            ? (0, a.jsx)(lD, { code: t }, t)
                            : (0, a.jsx)(l4, {
                                  code: t,
                                  location: i,
                                  transitionTo: l,
                                  login: n === y.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, a.jsx)(en.A, { path: y.BVt.VERIFY, render: (e) => (0, a.jsx)(sn, { ...e }) }),
                (0, a.jsx)(en.A, { path: y.BVt.VERIFY_HUB_EMAIL, render: (e) => (0, a.jsx)(sa, { ...e }) }),
                (0, a.jsx)(en.A, { path: y.BVt.VERIFY_REQUEST, render: (e) => (0, a.jsx)(si, { ...e }) }),
                (0, a.jsx)(en.A, { path: y.BVt.DISABLE_EMAIL_NOTIFICATIONS, render: (e) => (0, a.jsx)(ss, { ...e }) }),
                (0, a.jsx)(en.A, {
                    path: y.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, a.jsx)(sr, { ...e }),
                }),
                (0, a.jsx)(en.A, { path: y.BVt.AUTHORIZE_IP, render: (e) => (0, a.jsx)(se, { ...e }) }),
                (0, a.jsx)(en.A, {
                    path: y.BVt.REJECT_IP,
                    render: (e) => (0, a.jsx)(sl, { source: y.BVt.REJECT_IP, ...e }),
                }),
                (0, a.jsx)(en.A, {
                    path: y.BVt.REJECT_MFA,
                    render: (e) => (0, a.jsx)(sl, { source: y.BVt.REJECT_MFA, ...e }),
                }),
                (0, a.jsx)(en.A, { path: y.BVt.AUTHORIZE_PAYMENT, render: (e) => (0, a.jsx)(st, { ...e }) }),
                (0, a.jsx)(en.A, { path: y.BVt.RESET, render: (e) => (0, a.jsx)(sl, { source: y.BVt.RESET, ...e }) }),
                (0, a.jsx)(en.A, {
                    path: y.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, a.jsx)(sd, { ...e }),
                }),
                (0, a.jsx)(en.A, {
                    path: y.BVt.CHANNELS_GAME_SHOP(t2.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, a.jsx)(sc, { ...e }),
                }),
                (0, a.jsx)(en.A, {
                    path: y.BVt.CHANNEL(t2.pv.guildId(), t2.pv.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, a.jsx)(so, { ...e }),
                }),
                (0, a.jsx)(en.A, { path: y.BVt.REPORT, render: () => (0, a.jsx)(nA, {}) }),
                (0, a.jsx)(en.A, { path: y.BVt.REPORT_SECOND_LOOK, render: (e) => (0, a.jsx)(su, { ...e }) }),
                (0, a.jsx)(en.A, { path: y.BVt.ACCOUNT_REVERT(":token"), render: (e) => (0, a.jsx)(sm, { ...e }) }),
            ],
        });
    }
}
let sx = h.Ay.connectStores([eK.default, e5.A, np.A, eI.A, ev.A], (e) => {
    let { match: t, location: n } = e,
        i = t?.params?.inviteCode,
        l = null != i ? (0, eX.fB)(i, n.search) : void 0,
        s = t?.params?.giftCode,
        r = t?.params?.guildTemplateCode;
    return {
        inviteKey: l,
        isAuthenticated: eK.default.isAuthenticated(),
        giftCode: s,
        guildTemplateCode: r,
        gift: null != s ? np.A.get(s) : null,
        invite: null != l ? e5.A.getInvite(l) : null,
        guildTemplate: null != r ? ev.A.getGuildTemplate(r) : null,
        hasLoadedExperiments: eI.A.hasLoadedExperiments,
    };
})(sg);
