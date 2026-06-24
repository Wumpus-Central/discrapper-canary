n.r(t), n.d(t, { default: () => sf });
var l,
    i,
    s,
    r,
    a = n(627968),
    o = n(64700),
    u = n(492462),
    c = n(562708),
    d = n(607399),
    m = n(470562),
    h = n(17928),
    g = n(228366),
    f = n(830215),
    x = n(869038),
    p = n(376728),
    A = n(636537),
    E = n(6981),
    _ = n(376943),
    N = n(718446),
    j = n(746080),
    v = n(355097),
    I =
        (((l = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (l.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        l);
function C(e) {
    let t = decodeURIComponent(e),
        n = (0, _.vu)(t);
    return null != n && n.channelId === j.VV.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t.toLowerCase() === (0, N.settingsPathToRoute)(v.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)
          ? "role_subscription_setting"
          : void 0;
}
var S = n(115036),
    T = n(174459),
    y = n(272355),
    b = n(652215);
function R(e, t) {
    T.default.track(b.HAw.BROWSER_HANDOFF_SUCCEEDED, { authenticated: e, handoff_source: t });
}
class O extends y.A {
    _initialize() {
        g.h.subscribe("BROWSER_HANDOFF_END", this.handleEnd),
            g.h.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
    }
    _terminate() {
        g.h.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd),
            g.h.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: l, handoffSource: i } = e;
        null != n
            ? A.Bo.post({ url: b.Rsh.HANDOFF_EXCHANGE, body: { key: t, handoff_token: n }, rejectWithError: !1 }).then(
                  (e) => {
                      let { body: t } = e;
                      (0, E.uA)(t.user), f.A.loginToken(t.token, !1), R(!0, i);
                  },
                  (e) => {
                      null != l && R(!1, i),
                          f.A.setFingerprint(l),
                          (0, E.mZ)(),
                          i === I.ROLE_SUBSCRIPTION &&
                              T.default.track(b.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: e.message ?? e.text,
                                  handoff_source: i,
                              });
                  },
              )
            : null != l
              ? (f.A.setFingerprint(l), R(!1, i), (0, E.mZ)())
              : (f.A.setFingerprint(l), (0, E.J0)());
    }
    handleEnd = (e) => {
        let { handoffToken: t, fingerprint: n } = e,
            l = S.A.key;
        null != l && S.A.isHandoffAvailable()
            ? this.handleHandoff({ handoffKey: l, handoffToken: t, fingerprint: n, handoffSource: void 0 })
            : (f.A.setFingerprint(null), (0, E.J0)());
    };
}
let L = new O();
var P = n(854378),
    D = n(976860),
    k = n(210714),
    w = n(430690),
    G = n(503698),
    U = n.n(G),
    M = n(834730),
    B = n(821609),
    V = n(181658),
    F = n(625494),
    W = n(499785),
    H = (((i = {}).START = "start"), (i.PASSWORD = "password"), (i.SUCCESS = "success"), (i.FAILED = "failed"), i),
    K = n(375708),
    z = n(244460),
    Q = n(818050);
function Y(e) {
    let { setOriginalEmail: t, setSlide: l, ready: i, token: s } = e,
        [r, u] = o.useState(!1),
        [d, m] = o.useState(null),
        [h, g] = o.useState(null),
        [f, x] = o.useState(""),
        p = o.useRef(null);
    return (
        o.useEffect(() => {
            i && p.current?.focus();
        }, [i]),
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(P._V, { src: null == h ? n(79418) : n(579656), className: U()(Q.SX, Q.Ot) }),
                (0, a.jsx)(P.hE, { children: K.intl.string(K.t.IfBQ56) }),
                null != h && "" !== h
                    ? (0, a.jsx)(M.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: h })
                    : null,
                (0, a.jsxs)(P.eB, {
                    className: U()(Q.SX, Q.QX),
                    children: [
                        (0, a.jsx)(P.pd, {
                            name: "password",
                            type: "password",
                            label: K.intl.string(K.t["8dM4FO"]),
                            setRef: p,
                            className: Q.SX,
                            value: f,
                            onChange: x,
                            error: d,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: K.intl.string(K.t["yY/PXY"]),
                        }),
                        (0, a.jsx)("div", {
                            className: Q.Ot,
                            children: (0, a.jsx)(B.$, {
                                text: K.intl.string(K.t.ezv91b),
                                fullWidth: !0,
                                onClick: function () {
                                    if (!r) {
                                        if (0 === f.length) {
                                            m(K.intl.string(K.t.R98xD5)), F._.dispatch(b.jej.WAVE_EMPHASIZE);
                                            return;
                                        }
                                        return (
                                            null != h && g(null),
                                            null != d && m(null),
                                            t(""),
                                            u(!0),
                                            W.A.post({
                                                url: b.Rsh.ACCOUNT_REVERT,
                                                body: { token: s, password: f },
                                                trackedActionData: { event: c.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    x(""), t(n), l(H.SUCCESS);
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        g(
                                                            K.intl.formatToPlainString(K.t.aTVNes, {
                                                                statusPageURL: b.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new V.A(e);
                                                        t.hasFieldErrors()
                                                            ? m(t.getAnyErrorMessage())
                                                            : g(
                                                                  (function (e) {
                                                                      switch (e) {
                                                                          case b.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                              return K.intl.string(K.t["11zzGR"]);
                                                                          case b.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                              return K.intl.string(K.t["6qmgaI"]);
                                                                          case b.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                              return K.intl.string(K.t.bChnKs);
                                                                          default:
                                                                              return K.intl.format(K.t.aTVNes, {
                                                                                  statusPageURL: b.qF7.STATUS,
                                                                              });
                                                                      }
                                                                  })(t.code).toString(),
                                                              );
                                                    }
                                                    F._.dispatch(b.jej.WAVE_EMPHASIZE);
                                                })
                                                .finally(() => {
                                                    u(!1);
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
                    className: z.UD,
                    children: (0, a.jsx)(B.$, {
                        text: K.intl.string(K.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: function () {
                            x(""), l(H.START);
                        },
                    }),
                }),
            ],
        })
    );
}
var X = n(825484),
    q = n(749314);
function $(e) {
    let { children: t } = e;
    return (0, a.jsx)("li", {
        className: z.Aw,
        children: (0, a.jsx)(M.E, { variant: "text-sm/medium", color: "text-default", children: t }),
    });
}
function Z(e) {
    let { setSlide: t, transitionTo: l } = e;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(P._V, { src: n(79418), className: U()(Q.SX, Q.Ot) }),
            (0, a.jsx)(P.hE, { className: Q.QB, children: K.intl.string(K.t["8UcxI6"]) }),
            (0, a.jsx)(M.E, { variant: "text-md/normal", children: K.intl.string(K.t.O37hMl) }),
            (0, a.jsxs)(P.eB, {
                className: U()(Q.SX, Q.QX),
                children: [
                    (0, a.jsx)(M.E, { variant: "text-sm/normal" }),
                    (0, a.jsxs)("ul", {
                        className: z.qI,
                        children: [
                            (0, a.jsx)($, { children: K.intl.string(K.t.Gj1Zry) }),
                            (0, a.jsx)(q.A, {}),
                            (0, a.jsx)($, { children: K.intl.string(K.t["8C6t3B"]) }),
                            (0, a.jsx)(q.A, {}),
                            (0, a.jsx)($, { children: K.intl.string(K.t.mToZMA) }),
                            (0, a.jsx)(q.A, {}),
                            (0, a.jsx)($, { children: K.intl.string(K.t.TPEvkc) }),
                            (0, a.jsx)(q.A, {}),
                            (0, a.jsx)($, { children: K.intl.string(K.t.H8Y1Ln) }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)(X.e, {
                direction: "vertical",
                fullWidth: !0,
                className: z.UD,
                children: [
                    (0, a.jsx)(B.$, { text: K.intl.string(K.t.GgCRqR), onClick: () => t(H.PASSWORD) }),
                    (0, a.jsx)(B.$, {
                        text: K.intl.string(K.t["B/yHcQ"]),
                        variant: "secondary",
                        onClick: () => l(b.BVt.LOGIN, { source: "account_revert" }),
                    }),
                ],
            }),
        ],
    });
}
function J(e) {
    let { email: t } = e;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(P._V, { src: n(79418), className: U()(Q.SX, Q.Ot) }),
            (0, a.jsx)(P.hE, { children: K.intl.string(K.t.ailkVG) }),
            (0, a.jsx)(P.tK, { children: K.intl.format(K.t["4ZMVCI"], { email: t }) }),
            (0, a.jsx)(M.E, {
                className: U()(Q.QB, Q.QX),
                variant: "text-md/normal",
                children: K.intl.string(K.t["dpAn+8"]),
            }),
        ],
    });
}
function ee(e) {
    let { transitionTo: t, token: n, width: l } = e,
        [i, s] = o.useState(H.START),
        [r, u] = o.useState(null),
        [d, m] = o.useState(""),
        h = { impression_group: c.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, a.jsx)("div", {
        style: { margin: "8px" },
        children: (0, a.jsxs)(w.t, {
            activeSlide: i,
            width: l,
            onSlideReady: u,
            children: [
                (0, a.jsx)(w.q, {
                    id: H.START,
                    impressionProperties: h,
                    impressionName: c.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, a.jsx)(Z, { setSlide: s, transitionTo: t }),
                }),
                (0, a.jsx)(w.q, {
                    id: H.PASSWORD,
                    impressionProperties: h,
                    impressionName: c.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, a.jsx)(Y, {
                        setOriginalEmail: m,
                        setSlide: s,
                        transitionTo: t,
                        ready: r === H.PASSWORD,
                        token: n,
                    }),
                }),
                (0, a.jsx)(w.q, {
                    id: H.SUCCESS,
                    impressionProperties: h,
                    impressionName: c.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, a.jsx)(J, { email: d }),
                }),
            ],
        }),
    });
}
h.Ay.initialize();
class et extends o.PureComponent {
    static defaultProps = { transitionTo: D.pX, replaceWith: D.bG };
    componentDidMount() {
        (0, k.d)("account_revert");
    }
    render() {
        let { token: e } = this.props.match.params;
        return (0, a.jsx)(P.Ay, {
            style: { padding: 0 },
            children: (0, a.jsx)(ee, { width: 464, token: e, ...this.props }),
        });
    }
}
var en = n(549711);
function el(e) {
    g.h.dispatch({ type: "AUTH_INVITE_UPDATE", invite: e });
}
n(323874), n(14289), n(35956);
var ei = n(835245),
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
        let { origin: l } = new URL(ea(e, t));
        return n
            .map((e) => ea(e, t))
            .some((e) => {
                let { origin: t } = new URL(e);
                return l === t;
            });
    } catch (e) {
        return new es.Vy("Auth").error("Failed to check external redirect", e), !1;
    }
}
async function eu(e) {
    let t = (0, ei.A)();
    try {
        var n;
        let l,
            i,
            s = (await A.Bo.post({ url: b.Rsh.HANDOFF, body: { key: t }, oldFormErrors: !0, rejectWithError: !0 })).body
                .handoff_token,
            r =
                ((n = { urlString: e, handoffKey: t, handoffToken: s }),
                (l = new URL(n.urlString)),
                (i = `handoff_key=${encodeURIComponent(n.handoffKey)}&handoff_token=${encodeURIComponent(n.handoffToken)}`),
                "" !== l.hash ? (l.hash += `&${i}`) : (l.hash = `#${i}`),
                l.href);
        window.location.href = r;
    } catch (t) {
        window.location.href = e;
    }
}
var ec = n(123292),
    ed = n(650048),
    em = n(860689),
    eh = n(396681);
h.Ay.initialize();
class eg extends o.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, guild: null };
    componentDidMount() {
        let e = (0, eh.A)(this.props.location),
            t = (0, u.parse)(this.props.location.search);
        A.Bo.post({
            url: b.Rsh.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
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
            (0, k.d)("disable_server_highlight_notifications");
    }
    renderBusy() {
        return (0, a.jsx)(P.Ay, { children: (0, a.jsx)(P.CK, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, a.jsxs)(P.Ay, {
            children: [
                (0, a.jsx)(P.hE, { className: Q.QB, children: K.intl.string(K.t.Z33eiP) }),
                (0, a.jsx)(P.tK, { children: K.intl.format(K.t.NRWtfC, { guildName: n.name }) }),
                (0, a.jsx)("div", {
                    className: Q.eT,
                    children: (0, a.jsx)(B.$, { text: K.intl.string(K.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, a.jsx)("div", {
                    className: Q.Ot,
                    children: (0, a.jsx)(ec.Q, {
                        text: K.intl.string(K.t["cGmT/J"]),
                        onClick: () => {
                            t(b.BVt.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                        },
                    }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, a.jsxs)(P.Ay, {
            children: [
                (0, a.jsx)(P._V, { src: n(37772), className: Q.SX }),
                (0, a.jsx)(P.hE, { className: Q.QB, children: K.intl.string(K.t.ox9hIS) }),
                (0, a.jsx)(P.tK, { children: K.intl.string(K.t["/dcuR5"]) }),
                (0, a.jsx)("div", {
                    className: Q.eT,
                    children: (0, a.jsx)(B.$, { text: K.intl.string(K.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let ef = h.Ay.connectStores([ed.A], () => ({ defaultRoute: ed.A.defaultRoute }))(eg);
var ex = n(628284),
    ep = n(557722),
    eA = n(628387),
    eE = n(148864),
    e_ = n(354948);
n(53516);
var eN = n(653307);
let ej = ["loopback-network", "local-network-access"];
async function ev() {
    if ("u" < typeof navigator || null == navigator.permissions) return "unknown";
    for (let e of ej)
        try {
            return (await navigator.permissions.query({ name: e })).state;
        } catch {}
    return "unknown";
}
var eI = n(736056),
    eC = n(122906),
    eS = n(121623),
    eT = n(31008);
function ey(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, width: s = 288, height: r = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: r },
        src: eT.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
var eb = n(154672),
    eR = n(331322),
    eO = n(534514),
    eL = n(289873),
    eP = n(794347);
function eD(e) {
    let { title: t, subtitle: n, buttonText: l, image: i, onButtonClick: s, loading: r } = e;
    return (0, a.jsx)(P.Ay, {
        className: eP.kL,
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
                                null != i &&
                                    (0, a.jsx)(eR.B, {
                                        align: "center",
                                        justify: "center",
                                        className: eP.Sl,
                                        children: i,
                                    }),
                                r && (0, a.jsx)(eL.y, { type: eL.y.Type.SPINNING_CIRCLE }),
                                (0, a.jsx)(eO.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, a.jsx)(M.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                className: eP.VA,
                                children: n,
                            }),
                    ],
                }),
                !r && (0, a.jsx)(B.$, { onClick: s, text: l, variant: "overlay-primary" }),
            ],
        }),
    });
}
let ek = !1,
    ew = null,
    eG = null;
class eU extends h.Ay.Store {
    static displayName = "HubEmailVerificationStore";
    getState() {
        return { verifySuccess: ek, verifyErrors: ew, redirectGuildId: eG };
    }
}
let eM = new eU(g.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        (ek = !0), (ew = null), (eG = t);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        (ek = !1), (ew = t);
    },
});
var eB = n(284009),
    eV = n.n(eB),
    eF = n(481613),
    eW = n.n(eF),
    eH = n(400253),
    eK = n(742821),
    ez = n(80703),
    eQ = n(495544),
    eY = n(877062);
h.Ay.initialize();
var eX = n(842241),
    eq = n(308186),
    e$ = n(280513),
    eZ = n(717421),
    eJ = n(661531),
    e0 = n(993077),
    e1 = n(235986),
    e2 = n(592743);
function e7(e) {
    let { text: t, buttonCta: l, onClick: i } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(P._V, { src: n(431979) }),
            (0, a.jsx)(P.hE, { className: U()(Q.QX, Q.QB, eN.tR), children: K.intl.string(K.t.eL5z0i) }),
            (0, a.jsx)(P.tK, { className: Q.C2, children: K.intl.string(K.t.poAv63) }),
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
                            (0, a.jsx)(M.E, {
                                tag: "strong",
                                className: e2.p8,
                                variant: "text-md/normal",
                                style: { color: eJ.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, a.jsx)("div", {
                                className: e2.x6,
                                children: (0, a.jsx)(B.$, { text: l, fullWidth: !0, onClick: i }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e8(e) {
    let { text: t, buttonCta: n, theme: l = b.NJ8.DARK, onClick: i } = e;
    return (0, a.jsx)(P.Ay, { theme: l, children: (0, a.jsx)(e7, { text: t, buttonCta: n, onClick: i }) });
}
var e3 = n(765671),
    e4 = n(9994),
    e6 = n(71393),
    e5 = n(299091),
    e9 = n(486020),
    te = n(403362),
    tt = n(778712),
    tn = n(47167),
    tl = n(769015),
    ti = n(714991),
    ts = n(427262),
    tr = n(172799),
    ta = n(330936),
    to = n(82210);
function tu(e) {
    let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
    return 0 === t.memberCount ? null : t;
}
function tc(e) {
    return e.target_type === tr.yV.STREAM && null != e.target_user;
}
function td(e) {
    return e.channel?.type === b.rbe.GROUP_DM;
}
function tm(e) {
    return null == e.channel && null == e.guild && null != e.inviter;
}
function th(e) {
    return e.state === b.elq.ACCEPTED;
}
function tg(e) {
    let { guild_scheduled_event: t } = e;
    return null != t;
}
function tf(e) {
    let t;
    return !tg(e) && (!!tm(e) || (null != e.inviter && !th(e) && ((t = tu(e)), !((t?.memberCount ?? 0) > 100))));
}
function tx(e) {
    let { guild: t, user: n, application: l } = e;
    return null != l
        ? (0, a.jsx)(tl.A, { className: to.Z2, game: l, size: to.q6 })
        : null != n
          ? (0, a.jsx)(P.eu, { src: n.getAvatarURL(void 0, 100), size: tt._3.DEPRECATED_SIZE_100, className: to.my })
          : null != t
            ? (0, a.jsx)(P.$v, { guild: t, size: P.$v.Sizes.LARGER, className: to.$f, animate: !0 })
            : null;
}
function tp(e) {
    let { invite: t, textClassName: n, className: l } = e,
        i = tu(t);
    return null == i || tf(t) || t?.guild?.id === ta.TA
        ? null
        : (0, a.jsx)(P.R1, {
              className: U()(to.He, l),
              online: i.onlineCount,
              total: i.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function tA(e) {
    let { invite: t, showBigUserIcon: n } = e,
        l = o.useMemo(
            () =>
                n
                    ? null
                    : tc(t) && null != t.target_user
                      ? e9.Ay.getUserAvatarURL(t.target_user)
                      : tf(t) && null != t.inviter
                        ? e9.Ay.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        i = K.intl.string(K.t["3rE1P8"]);
    return (
        td(t)
            ? (i =
                  t.channel?.name != null && t.inviter?.username != null
                      ? K.intl.format(K.t.Lu4h18, { username: t.inviter.username })
                      : K.intl.string(K.t.OsdY8B))
            : tc(t) && null != t.target_user
              ? (i = K.intl.formatToPlainString(K.t.x2L32Q, { username: t.target_user.username }))
              : th(t)
                ? (i = K.intl.string(K.t["FDsl+J"]))
                : tf(t) &&
                  null != t.inviter &&
                  (i = K.intl.format(K.t.spU2mI, { username: ts.Ay.getFormattedName(t.inviter) })),
        (0, a.jsxs)("div", {
            className: to.JB,
            children: [
                null != l &&
                    (0, a.jsx)("div", {
                        className: to._t,
                        children: (0, a.jsx)(P.eu, { src: l, size: tt._3.SIZE_24 }),
                    }),
                (0, a.jsx)(P.tK, { className: to.__invalid_inviteJoinSubTitle, children: i }),
            ],
        })
    );
}
function tE(e) {
    let t,
        n,
        l,
        { user: i, guild: s, channel: r, application: o, showBigUserIcon: u } = e,
        c = (0, tn.Ay)(r);
    if (null != s)
        u && null == o && (t = (0, a.jsx)(P.$v, { guild: s, size: P.$v.Sizes.SMALL })),
            (n = s.name),
            null != o &&
                ((n = o.name),
                (l = (0, a.jsxs)("div", {
                    className: to.JB,
                    children: [
                        (0, a.jsx)(P.tK, { className: to.R9, children: K.intl.string(K.t["3gg9fF"]) }),
                        (0, a.jsxs)("div", {
                            className: to.bo,
                            children: [
                                (0, a.jsx)(P.$v, { guild: s, size: P.$v.Sizes.SMALL }),
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
        if (null == i) throw Error("no inviter in group DM invite");
        let e = ts.Ay.getFormattedName(i);
        null != c && "" !== c
            ? ((n = c), null != r.icon && (t = (0, a.jsx)(P.F4, { channel: r, size: tt._3.SIZE_32 })))
            : (n = e);
    } else if (null != i) {
        let e = ts.Ay.getFormattedName(i);
        (n = K.intl.formatToPlainString(K.t["4aF92R"], { username: e })),
            (l = (0, a.jsx)(P.tK, { className: to.b$, children: K.intl.format(K.t.Quj7HX, { username: e }) }));
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(P.hE, {
                className: to.DD,
                children: [
                    null != s ? (0, a.jsx)(ti.A, { guild: s, className: to.n2, tooltipPosition: "left" }) : null,
                    t,
                    n,
                ],
            }),
            l,
        ],
    });
}
var t_ = n(395671),
    tN = n(95701),
    tj = n(889227),
    tv = n(548118),
    tI = n(557582),
    tC = n(167630),
    tS = n(367048);
function tT(e) {
    let { guildScheduledEvent: t, channel: n, onAcceptInvite: l, isSubmitting: i } = e;
    return (0, a.jsxs)("div", {
        className: tS.s4,
        children: [
            (0, a.jsx)(tI.Ay, {
                name: t.name,
                description: t.description ?? void 0,
                headerVariant: "heading-md/medium",
                descriptionClassName: tS.__invalid_channelDescription,
                guildId: t.guild_id,
                guildEvent: t,
                eventPreview: t,
            }),
            null != n &&
                (0, a.jsx)("div", {
                    className: tS.yW,
                    children: (0, a.jsx)(tC.A, { guildScheduledEvent: t, channel: n }),
                }),
            (0, a.jsx)("div", {
                className: tS.xG,
                children: (0, a.jsx)(B.$, {
                    variant: "active",
                    size: "md",
                    text: K.intl.string(K.t.riu2R5),
                    onClick: l,
                    loading: i,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
function ty(e) {
    let { invite: t } = e,
        n = null != t.guild ? (0, em.DY)(t.guild) : null;
    if (null == n) return null;
    let l = n.description ?? "";
    return (0, a.jsxs)("div", {
        className: tS.kQ,
        children: [
            (0, a.jsx)(eO.D, { className: tS.s7, variant: "text-sm/medium", children: K.intl.string(K.t.Eabu1z) }),
            (0, a.jsxs)("div", {
                className: tS.bo,
                children: [
                    (0, a.jsx)(tv.Ay, { guild: n, active: !0, size: tv.Ay.Sizes.MEDIUM }),
                    (0, a.jsxs)("div", {
                        className: tS.bW,
                        children: [
                            (0, a.jsxs)(M.E, {
                                className: tS.J5,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, a.jsx)(ti.A, { guild: n, className: tS.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, a.jsx)(tp, { invite: t, textClassName: tS.kS, className: tS.pe }),
                        ],
                    }),
                ],
            }),
            l.length > 0 &&
                (0, a.jsx)("details", {
                    className: tS.x_,
                    children: (0, a.jsx)(M.E, { color: "text-default", variant: "text-sm/normal", children: l }),
                }),
        ],
    });
}
function tb(e) {
    let { invite: t, channel: n, isSubmitting: l, onAcceptInvite: i } = e,
        { guild_scheduled_event: s } = t;
    return null != s
        ? (0, a.jsx)(tT, { guildScheduledEvent: s, channel: n, isSubmitting: l, onAcceptInvite: i })
        : null;
}
var tR = n(467661);
function tO(e) {
    let { invite: t, onAcceptInvite: n, disableUser: l = !1 } = e;
    if (null == t) return null;
    let i = null != t.guild ? (0, em.DY)(t.guild) : null,
        s = null != t.channel ? (0, tN.OY)(t.channel) : null,
        r = null != t.target_application ? new t_.Ay(t.target_application) : null,
        o = l || null == t.inviter ? null : new tj.A(t.inviter),
        u =
            !(
                (null != t.approximate_member_count && t.approximate_member_count > 100) ||
                (null != i && i.features.has(b.GuildFeatures.COMMUNITY))
            ) &&
            null != o &&
            td(t),
        c = (function (e) {
            let { state: t } = e;
            switch (t) {
                case b.elq.ACCEPTING:
                case b.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        d = { invite: t, user: o, guild: i, channel: s, application: r };
    return tg(t)
        ? (0, a.jsx)(tb, { invite: t, channel: s, isSubmitting: c, onAcceptInvite: n })
        : (0, a.jsxs)("div", {
              className: tR.kL,
              children: [
                  (0, a.jsx)(tx, { application: r, guild: i, user: u || tm(t) ? o : null }),
                  tm(t) ? null : (0, a.jsx)(tA, { ...d, showBigUserIcon: u }),
                  (0, a.jsx)(tE, { ...d, showBigUserIcon: u }),
                  (0, a.jsx)(tp, { ...d }),
                  (0, a.jsx)("div", {
                      className: tR.xG,
                      children: (0, a.jsx)(B.$, {
                          variant: "primary",
                          size: "md",
                          text: K.intl.string(K.t.ohMvm1),
                          onClick: n,
                          loading: c,
                          fullWidth: !0,
                      }),
                  }),
              ],
          });
}
var tL = n(473644),
    tP = n(57930),
    tD = n(115703),
    tk = n(438842),
    tw = n(888849);
function tG(e) {
    let { invite: t, guild: n, profile: l, onAcceptInvite: i } = e,
        { gamesToDisplay: s, lastGameToDisplay: r, remainingGames: o } = (0, tD.A)(l),
        u = (function (e) {
            let { state: t } = e;
            switch (t) {
                case b.elq.ACCEPTING:
                case b.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        c = l.description ?? n.description;
    return (0, a.jsxs)("div", {
        className: tw.f_,
        children: [
            (0, a.jsxs)("div", {
                className: tw.qQ,
                children: [
                    (0, a.jsx)("div", {
                        className: tw.WT,
                        children: (0, a.jsx)("div", { className: tw.g_, "aria-hidden": !0 }),
                    }),
                    (0, a.jsxs)("div", {
                        className: tw.TS,
                        children: [
                            (0, a.jsx)(tP.A, { guild: n, outline: !0 }),
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
                                    null != c &&
                                        "" !== c &&
                                        (0, a.jsx)(M.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: c,
                                        }),
                                    (0, a.jsx)(tk.A, {
                                        gamesToDisplay: s,
                                        lastGameToDisplay: r,
                                        remainingGames: o,
                                        activity: l.gameActivity,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: tw.Fx,
                children: (0, a.jsx)(B.$, {
                    variant: "primary",
                    size: "md",
                    text: K.intl.string(K.t.ohMvm1),
                    onClick: i,
                    loading: u,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
let tU = (0, n(945810).mj)({
        name: "2026-03-mobile-web-invite-server-profile",
        kind: "installation",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    tM = n(843020);
function tB(e) {
    if (null == e || !e$.i.VISIBLE.has(e.visibility)) return !1;
    let t = null != e.description && e.description.length > 0,
        n = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
    return t || n;
}
function tV() {
    return (0, a.jsx)("div", { className: tw.$k, children: (0, a.jsx)(eL.y, {}) });
}
function tF(e) {
    let t = e?.state == null && e?.channel == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case b.elq.RESOLVED:
        case b.elq.ACCEPTED:
        case b.elq.APP_NOT_OPENED:
        case b.elq.APP_OPENED:
        case b.elq.ACCEPTING:
        case b.elq.APP_OPENING:
            return 1;
        case b.elq.EXPIRED:
        case b.elq.BANNED:
        case b.elq.ERROR:
            return 2;
        case b.elq.RESOLVING:
            return 0;
        default:
            (0, te.xb)(n);
    }
}
function tW(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === b.elq.BANNED
        ? (0, a.jsx)(e7, { text: K.intl.string(K.t["5AkWAd"]), buttonCta: K.intl.string(K.t["8osdkn"]), onClick: n })
        : (0, a.jsx)(e7, { text: K.intl.string(K.t["usP+Mb"]), buttonCta: K.intl.string(K.t["8osdkn"]), onClick: n });
}
function tH(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: l, sectionClassName: i, inviteCardClassName: s = tw.qF } = e,
        { ref: r, height: o } = (0, e3.Ay)(),
        u = (0, eZ.z)({ height: null != o && 0 !== o ? `${o}px` : `${l}px`, config: eq.config.stiff });
    return (0, a.jsxs)(eq.animated.div, {
        className: s,
        style: u,
        children: [
            (0, a.jsx)(eq.animated.div, {
                className: tw.NS,
                style: u,
                children: (0, a.jsx)("section", { ref: r, className: i, children: t }),
            }),
            n,
        ],
    });
}
function tK(e) {
    let { invite: t } = e;
    if (null == t || !tg(t)) return null;
    let n = tF(t);
    return (0, a.jsx)(tH, {
        startAnimHeightPx: 0,
        sectionClassName: tw.ui,
        children: 1 === n ? (0, a.jsx)(ty, { invite: t }) : null,
    });
}
let tz = { 1: tw._r, 2: tw.Gm, 0: tw.Kt };
function tQ(e) {
    let t,
        { invite: n } = e,
        l = tF(n),
        { enabled: i } = tU.useConfig({ location: "AcceptInviteMobile" }),
        s = null != n ? (0, e4.oO)(n) : null,
        r = n?.guild != null ? (0, em.DY)(n.guild) : null,
        u = null != r && tB(s) && null != n && !tg(n),
        c = i && u;
    o.useEffect(() => {
        u && tU.getConfig({ location: "AcceptInviteMobile.hasProfile" });
    }, [u]);
    let d = o.useRef(!1);
    if (
        (o.useEffect(() => {
            d.current ||
                (null != n &&
                    1 === l &&
                    ((d.current = !0),
                    T.default.track(b.HAw.INVITE_ACCEPT_BUTTON_RENDERED, {
                        invite_code: n.code,
                        guild_id: n.guild?.id,
                        duration_ms_since_page_load: Math.round(performance.now()),
                    })));
        }, [n, l]),
        null == n)
    )
        t = (0, a.jsx)(tV, {});
    else
        switch (l) {
            case 1:
                t = c
                    ? (0, a.jsx)(tG, { invite: n, guild: r, profile: s, onAcceptInvite: e.onAcceptInvite })
                    : (0, a.jsx)(tO, { ...e, invite: n });
                break;
            case 2:
                t = (0, a.jsx)(tW, { ...e, invite: n });
                break;
            default:
                t = (0, a.jsx)(tV, {});
        }
    let m = 1 === l && c ? tw.c4 : tw.qF;
    return (0, a.jsx)(tH, { startAnimHeightPx: 200, sectionClassName: tz[l], inviteCardClassName: m, children: t });
}
function tY(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: l } = t ?? {},
        i = {},
        { enabled: s } = tU.useConfig({ location: "AcceptInviteMobile" }),
        r = null != t ? (0, e4.oO)(t) : null,
        o = null != l && tB(r) && null != t && !tg(t);
    if (l?.splash != null) {
        let e = e9.Ay.getGuildSplashURL({ id: l.id, splash: l.splash });
        null != e && ((i.backgroundImage = `url(${e})`), (i.backgroundSize = "cover"));
    } else s && o && ((i.backgroundImage = `url(${tM})`), (i.backgroundSize = "cover"));
    return (0, a.jsxs)(P.Ay, {
        theme: b.NJ8.DARK,
        className: tw.G3,
        style: i,
        contentClassName: tw.__,
        children: [(0, a.jsx)(tQ, { ...e, onAcceptInvite: n }), (0, a.jsx)(tK, { ...e })],
    });
}
var tX = n(723702);
function tq(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, width: s = 288, height: r = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/f116e92cafb14967bf471809621718b4c2fe5abd27c9236c1ab4353d32a9fc6c.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
var t$ = n(611346),
    tZ = n(604880);
function tJ(e) {
    let { token: t, hasError: n, errorReason: l } = e;
    return n
        ? (0, a.jsxs)("div", {
              className: t$.MY,
              children: [
                  (0, a.jsx)("div", { className: t$.r$, children: (0, a.jsx)("img", { src: tZ, alt: "" }) }),
                  (0, a.jsxs)("div", {
                      className: t$.Qs,
                      children: [
                          (0, a.jsx)(tq, { alt: "" }),
                          (0, a.jsx)(eO.D, {
                              variant: "heading-lg/semibold",
                              className: t$.ky,
                              children: K.intl.string(K.t.RtCSr1),
                          }),
                          (0, a.jsx)(M.E, {
                              variant: "text-md/normal",
                              className: t$.G3,
                              children: K.intl.string(K.t["S+YjYJ"]),
                          }),
                          (0, a.jsx)(B.$, {
                              variant: "primary",
                              text: K.intl.string(K.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  T.default.track(b.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: l }),
                                      (0, D.pX)(b.BVt.LOGIN);
                              },
                          }),
                      ],
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: t$.MY,
              children: [
                  (0, a.jsx)("div", { className: t$.r$, children: (0, a.jsx)("img", { src: tZ, alt: "" }) }),
                  (0, a.jsxs)("div", {
                      className: t$.Qs,
                      children: [
                          (0, a.jsx)(tq, { alt: "" }),
                          (0, a.jsx)(eO.D, {
                              variant: "heading-lg/semibold",
                              className: t$.ky,
                              children: K.intl.string(K.t["9h/0Rl"]),
                          }),
                          (0, a.jsx)(M.E, {
                              variant: "text-md/normal",
                              className: t$.G3,
                              children: K.intl.string(K.t.Wgm7Om),
                          }),
                          (0, a.jsx)(B.$, {
                              variant: "primary",
                              text: K.intl.string(K.t.NydsTd),
                              fullWidth: !0,
                              onClick: () => {
                                  let e, n;
                                  (e = (function (e) {
                                      let t = platform.os?.family;
                                      if ("Android" === t || "iOS" === t) {
                                          let t = eQ.default.getFingerprint(),
                                              n = (0, eK.I_)(),
                                              l = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/login/one-time?token=${e}`;
                                          return (0, eK.Ay)(l, {
                                              utmSource: "one-time-login",
                                              fingerprint: t,
                                              attemptId: n,
                                          });
                                      }
                                      return "discord://";
                                  })(t)),
                                      (n = (0, eK.X7)(e)),
                                      T.default.track(b.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                                          detection_type: "mobile_button_clicked",
                                          device_type: d.Fr ? "mobile" : "tablet",
                                          platform: T.default.getSuperProperties()?.os,
                                      }),
                                      null != n &&
                                          T.default.track(b.HAw.DEEP_LINK_CLICKED, {
                                              fingerprint: (0, ez.v)(n.fingerprint),
                                              attempt_id: n.attemptId,
                                              source: n.utmSource,
                                          }),
                                      eY.A.launch(e, (e) => {
                                          e || (0, D.bG)({ pathname: b.BVt.LOGIN });
                                      });
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var t0 = n(613057);
function t1(e) {
    let { title: t, subtitle: n, buttonText: l, buttonOnClick: i } = e;
    return (0, a.jsx)(P.Ay, {
        children: (0, a.jsxs)(eR.B, {
            gap: 24,
            children: [
                (0, a.jsxs)(eR.B, {
                    gap: 8,
                    children: [(0, a.jsx)(P.hE, { children: t }), (0, a.jsx)(P.tK, { children: n })],
                }),
                (0, a.jsx)(B.$, { onClick: i, text: l, fullWidth: !0 }),
            ],
        }),
    });
}
var t2 = n(463347),
    t7 = n(189213),
    t8 = n(192308),
    t3 = n(347704),
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
            throw { status: 429, body: { message: K.intl.string(K.t.Z2hIUf) } };
        throw e;
    }
}
function nn(e, t) {
    let l = !1;
    function i() {
        l || t?.();
    }
    let s = (s) => {
        function r() {
            return nt(e, s);
        }
        async function o(t) {
            return await (0, t5.G_)(e, s, t);
        }
        (l = !0),
            setTimeout(() => {
                l = !1;
            }, 0);
        let u = (n) => {
            (l = !0),
                setTimeout(() => {
                    l = !1;
                }, 0);
            let i = n?.token;
            switch (e) {
                case t6.tY.MESSAGE:
                    (0, ne.bM)(i, t);
                    break;
                case t6.tY.USER:
                    (0, ne.nQ)(i, t);
                    break;
                case t6.tY.GUILD:
                    (0, ne.V3)(i, t);
                    break;
                case t6.tY.MEDIA_TAKEDOWN:
                    (0, ne._Y)(i, t);
            }
        };
        (0, t8.openModalLazy)(
            async () => {
                let { default: e } = await n.e("19840").then(n.bind(n, 79779));
                return (t) =>
                    (0, a.jsx)(e, {
                        ...t,
                        onFormSubmit: o,
                        onResend: r,
                        onSuccess: u,
                        headerText: K.intl.string(K.t.H3Q7U8),
                        confirmButtonText: K.intl.string(K.t["13ofGu"]),
                        impression: { impressionName: c.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                    });
            },
            { onCloseCallback: i, dismissable: !1 },
        );
    };
    return function () {
        function t(t) {
            return nt(e, t);
        }
        (0, t8.closeAllModals)(),
            (0, t8.openModalLazy)(
                async () => {
                    let { default: l } = await n.e("29232").then(n.bind(n, 180275));
                    return (n) =>
                        (0, a.jsx)(l, {
                            ...n,
                            onFormSubmit: t,
                            onSuccess: s,
                            headerText: K.intl.string(K.t.ZLRYGU),
                            confirmButtonText: K.intl.string(K.t.PDTjLN),
                            subtitle: e === t6.tY.MEDIA_TAKEDOWN ? K.intl.string(K.t.jt3z8f) : void 0,
                        });
                },
                { onCloseCallback: i, dismissable: !1 },
            );
    };
}
var nl = n(939249),
    ni = n(921853),
    ns = n(750997);
let nr = { [t6.tY.MESSAGE]: K.t.fuqnBC, [t6.tY.USER]: K.t.F4jrRW, [t6.tY.GUILD]: K.t.gH3aMs },
    na = (e) => {
        let { title: t, menuType: n, onReopen: l } = e,
            i = o.useCallback(() => {
                nn(n, l)();
            }, [n, l]);
        return (0, a.jsxs)(nl.D, {
            className: ns.b0,
            onClick: i,
            children: [
                (0, a.jsx)(M.E, { variant: "text-md/medium", children: t }),
                (0, a.jsx)(ni.n, { size: "sm", style: { transform: "rotate(180deg)" } }),
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
                        : (0, a.jsx)(na, { title: K.intl.string(nr[e]), menuType: e, onReopen: n }, e),
                ),
            }),
        });
    };
var nu = n(881636),
    nc = n(913951);
let nd = () => {
    let { goToStep: e } = (0, t3.n)(),
        t = o.useCallback(() => {
            e(nf.DSA);
        }, [e]),
        n = o.useCallback(() => {
            e(nf.TIDA);
        }, [e]);
    return (0, a.jsxs)(eR.B, {
        gap: 8,
        children: [
            (0, a.jsx)(M.E, { variant: "text-md/normal", children: K.intl.string(K.t.bd1h5T) }),
            (0, a.jsxs)("div", {
                className: nc.k,
                children: [
                    (0, a.jsxs)(nl.D, {
                        className: nc.b,
                        onClick: t,
                        children: [
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(M.E, {
                                        variant: "text-md/medium",
                                        children: K.intl.string(K.t["AszWL/"]),
                                    }),
                                    (0, a.jsx)(M.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: K.intl.string(K.t["0Jikui"]),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(nu.u, { size: "sm" }),
                        ],
                    }),
                    (0, a.jsxs)(nl.D, {
                        className: nc.b,
                        onClick: n,
                        children: [
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(M.E, { variant: "text-md/medium", children: K.intl.string(K.t.jMSjZL) }),
                                    (0, a.jsx)(M.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: K.intl.string(K.t.qEaUPS),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(nu.u, { size: "sm" }),
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
            (0, a.jsx)(M.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: K.intl.string(K.t["3zG2Y9"]),
            }),
            (0, a.jsxs)(eR.B, {
                gap: 16,
                children: [
                    (0, a.jsxs)(eR.B, {
                        gap: 8,
                        children: [
                            (0, a.jsx)(M.E, { variant: "text-md/semibold", children: K.intl.string(K.t.CfBo0z) }),
                            (0, a.jsxs)("ul", {
                                className: nm.T,
                                children: [
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)(M.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: K.intl.string(K.t.ofQnNQ),
                                        }),
                                    }),
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)(M.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: K.intl.string(K.t.dFaQGn),
                                        }),
                                    }),
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)(M.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: K.intl.string(K.t.RVNwXh),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(M.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: K.intl.string(K.t.o5azXJ),
                    }),
                    (0, a.jsx)(M.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: K.intl.format(K.t.YETtaY, {
                            policyURL: "https://discord.com/safety/non-consensual-intimate-media-policy-explainer",
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)(eR.B, {
                gap: 8,
                children: [
                    (0, a.jsx)(M.E, { variant: "text-md/semibold", children: K.intl.string(K.t.FJh2zi) }),
                    (0, a.jsx)(M.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: K.intl.format(K.t.R2Q57u, {
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
var nf = (((s = {}).SELECTION = "selection"), (s.DSA = "dsa"), (s.TIDA = "tida"), s);
let nx = (e) => {
        let { transitionState: t, onClose: n } = e,
            [l, i] = o.useState(!0),
            [s, r] = o.useState([]),
            [u, c] = o.useState(null),
            d = (0, h.bG)([eQ.default], () => eQ.default.isAuthenticated()),
            m = (0, h.bG)([eI.A], () => eI.A.hasLoadedExperiments),
            g = o.useCallback(() => {
                (0, t5.OY)()
                    .then((e) => {
                        let {
                            body: { capabilities: t },
                        } = e;
                        i(!1), r(t);
                    })
                    .catch(() => {
                        i(!1), r([]);
                    });
            }, []);
        o.useEffect(() => {
            d
                ? (i(!0),
                  t4
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => g())
                      .catch(() => i(!1)))
                : g();
        }, [d, g]),
            o.useEffect(() => {
                !(async function () {
                    m || (await f.A.getLocationMetadata(), f.A.getExperiments());
                })();
            }, [m]);
        let x = s.filter((e) => e !== t6.tY.MEDIA_TAKEDOWN),
            p = s.includes(t6.tY.MEDIA_TAKEDOWN),
            A = x.length > 0,
            E = A && p,
            _ = l || !m;
        o.useEffect(() => {
            _ || A || p || n();
        }, [_, A, p, n]);
        let N = o.useCallback(() => {
                (0, t8.openModalLazy)(() => Promise.resolve((e) => (0, a.jsx)(nx, { ...e })), { dismissable: !1 });
            }, []),
            j = o.useCallback((e, t) => {
                "selection" !== t && "selection" !== e ? c("selection") : c(e);
            }, []),
            v = o.useMemo(() => nn(t6.tY.MEDIA_TAKEDOWN, N), [N]),
            I = u ?? (E ? "selection" : A ? "dsa" : "tida");
        if (_ || (!A && !p))
            return (0, a.jsx)(t7.Modal, {
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
            if (A)
                return (0, a.jsx)(t7.Modal, {
                    title: K.intl.string(K.t.Z11w18),
                    subtitle: K.intl.format(K.t["532l+q"], {
                        supportURL: t9.A.getArticleURL(b.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, a.jsx)(no, { dsaCapabilities: x, onReopen: N }),
                });
            if (p)
                return (0, a.jsx)(t7.Modal, {
                    title: K.intl.string(K.t.YignUm),
                    actions: [{ text: K.intl.string(K.t.D5Czbu), variant: "primary", onClick: v }],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, a.jsx)(nh, {}),
                });
        }
        let C = [
            { stepKey: "selection", modalProps: { title: K.intl.string(K.t.Z11w18) }, body: (0, a.jsx)(nd, {}) },
            {
                stepKey: "dsa",
                modalProps: {
                    title: K.intl.string(K.t.Z11w18),
                    subtitle: K.intl.format(K.t["532l+q"], {
                        supportURL: t9.A.getArticleURL(b.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, a.jsx)(no, { dsaCapabilities: x, onReopen: N }),
            },
            {
                stepKey: "tida",
                modalProps: { title: K.intl.string(K.t.YignUm) },
                body: (0, a.jsx)(nh, {}),
                nextButtonProps: { text: K.intl.string(K.t.D5Czbu) },
                onNext: () => (v(), !1),
            },
        ];
        return (0, a.jsx)("div", {
            className: { selection: ng.a, dsa: ng.q, tida: void 0 }[I],
            children: (0, a.jsx)(t3.t, {
                steps: C,
                currentStepKey: I,
                onStepChange: j,
                onClose: n,
                transitionState: t,
                dismissable: !1,
            }),
        });
    },
    np = () => (
        o.useEffect(() => {
            (0, t8.openModalLazy)(() => Promise.resolve((e) => (0, a.jsx)(nx, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
var nA = n(30793),
    nE = n(970928),
    n_ = n(612181),
    nN = n(179689);
let nj = {
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
    getTimeSinceNavigationStart: () => Date.now() - nN.fL,
};
var nv = n(111956),
    nI = n.n(nv),
    nC = n(615300),
    nS = n(319060),
    nT = n(844222),
    ny = n(240248),
    nb = n(115617);
let nR = (0, ny.xI)(nS.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    nO = { friction: 10, tension: 130 },
    nL = function (e) {
        return class extends o.Component {
            timeout;
            anim = new nC.A.Value(0);
            state = { shouldAnimate: !d.Fr };
            componentDidMount() {
                d.Fr || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize());
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
                nC.A.spring(this.anim, { toValue: e, ...nO }).start(t);
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
                    className: nb.i,
                    children: (0, a.jsx)(nT.C.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, a.jsx)(nC.A.div, {
                                className: nb.l,
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, a.jsx)(e, { ...this.props }),
                            });
                        },
                    }),
                });
            }
        };
    };
var nP = n(603647),
    nD = n(970672),
    nk = n(129014),
    nw = n(642277);
let nG = function (e) {
    let { match: t, location: n, attemptDeepLink: l } = e,
        [i, s] = o.useState(0);
    o.useEffect(() => {
        nk.default.once("connected", () => {
            s(1);
        }),
            nk.default.once("disconnected", () => {
                (0, D.pX)((0, nw.W)());
            }),
            nk.default.connect();
    }, []),
        o.useEffect(() => {
            if (0 !== i) return;
            let e = setTimeout(() => (0, D.pX)((0, nw.W)()), 3e3);
            return () => clearTimeout(e);
        }, [i]);
    let r = o.useCallback(
        async (e, t) => {
            try {
                s(2), await l(e, t), s(3);
            } catch (e) {
                console.error("Error opening deeplink", e);
            }
        },
        [l],
    );
    if ((0, D.MX)()) return null;
    switch (i) {
        case 1:
            return (0, a.jsxs)(P.Ay, {
                children: [
                    (0, a.jsx)(P.hE, { className: Q.QB, children: K.intl.string(K.t.qllnGm) }),
                    (0, a.jsx)(P.tK, { children: K.intl.string(K.t.SXCxye) }),
                    (0, a.jsx)("div", {
                        className: Q.eT,
                        children: (0, a.jsx)(B.$, {
                            text: K.intl.string(K.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => r(t, n),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: U()(Q.Ot, Q.F1),
                        children: (0, a.jsx)(ec.Q, {
                            text: K.intl.string(K.t["2ixEBi"]),
                            textVariant: "text-sm/normal",
                            onClick: () => (0, D.pX)((0, nw.W)()),
                        }),
                    }),
                ],
            });
        case 0:
        case 2:
            return (0, a.jsxs)(P.Ay, {
                children: [(0, a.jsx)(P.hE, { children: K.intl.string(K.t["Z+hCVU"]) }), (0, a.jsx)(P.CK, {})],
            });
        case 3:
            return (0, a.jsxs)(P.Ay, {
                children: [
                    (0, a.jsx)(P.hE, { className: Q.QB, children: K.intl.string(K.t.csrAMJ) }),
                    (0, a.jsx)(P.tK, { children: K.intl.string(K.t.ghBJz9) }),
                ],
            });
    }
};
var nU = n(723923);
h.Ay.initialize();
class nM extends o.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, eh.A)(this.props.location),
            t = (0, u.parse)(this.props.location.search);
        A.Bo.post({
            url: b.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, category: t.category, email_type: t.email_type },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { user: n },
                    } = e,
                    l = new tj.A(n);
                this.setState({ success: !0, busy: !1, user: l, category: t.category });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, k.d)("disable_email_notifications");
    }
    renderBusy() {
        return (0, a.jsx)(P.Ay, { children: (0, a.jsx)(P.CK, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: l } = this.props,
            i = K.intl.formatToPlainString(K.t.YDAohB, { category: t });
        return (0, a.jsxs)(P.Ay, {
            children: [
                (0, a.jsx)(P.hE, { className: Q.QB, children: K.intl.string(K.t.f6rdLg) }),
                (0, a.jsx)(P.tK, { children: i }),
                (0, a.jsx)("div", {
                    className: Q.QX,
                    children: (0, a.jsx)(B.$, { text: K.intl.string(K.t.fIv16B), fullWidth: !0, onClick: () => l(n) }),
                }),
                (0, a.jsx)("div", {
                    className: Q.Ot,
                    children: (0, a.jsx)(ec.Q, {
                        text: K.intl.string(K.t.YYTirT),
                        textVariant: "text-sm/normal",
                        onClick: () => l((0, N.settingsPathToRoute)(v.od.NOTIFICATIONS_EMAILS)),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: l } = this.state;
        if (null != l) {
            let e = nU.px.find((e) => e.category === l);
            if (null != e) return this.renderCategorySuccess(l, e.label());
        }
        return (0, a.jsxs)(P.Ay, {
            children: [
                (0, a.jsx)(P.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: tt._3.DEPRECATED_SIZE_100,
                    className: Q.SX,
                }),
                (0, a.jsx)(P.hE, { className: Q.QB, children: K.intl.string(K.t["6U6OMQ"]) }),
                (0, a.jsx)(P.tK, { children: K.intl.string(K.t["yaDJ4/"]) }),
                (0, a.jsx)("div", {
                    className: Q.eT,
                    children: (0, a.jsx)(B.$, { text: K.intl.string(K.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, a.jsxs)(P.Ay, {
            children: [
                (0, a.jsx)(P._V, { src: n(37772), className: Q.SX }),
                (0, a.jsx)(P.hE, { className: Q.QB, children: K.intl.string(K.t.ox9hIS) }),
                (0, a.jsx)(P.tK, { children: K.intl.string(K.t["/dcuR5"]) }),
                (0, a.jsx)("div", {
                    className: Q.eT,
                    children: (0, a.jsx)(B.$, { text: K.intl.string(K.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let nB = h.Ay.connectStores([ed.A], () => ({ defaultRoute: ed.A.defaultRoute }))(nM);
var nV = n(110782),
    nF = n(10088),
    nW = n(871123),
    nH = n(189081),
    nK = n(67480),
    nz = n(45938),
    nQ = n(587895),
    nY = n(242874),
    nX = n(165191),
    nq = n(287809),
    n$ = n(97352),
    nZ = n(615396),
    nJ = n(788868),
    n0 = n(402693);
let n1 = h.Ay.connectStores([nK.A, nQ.A, n$.A, nq.default], (e) => {
    let { giftCode: t } = e,
        n = nK.A.get(t.skuId),
        { subscriptionPlanId: l } = t;
    return {
        sku: n,
        subscriptionPlan: null != l ? (0, nZ.c9)(l) : null,
        application: nQ.A.getApplication(n.applicationId),
        gifter: nq.default.getUser(t.userId),
    };
})(function (e) {
    let { error: t, giftCode: n, gifter: l, sku: i, application: s, subscriptionPlan: r } = e,
        u = null == l ? K.intl.string(K.t.lTGZAl) : K.intl.formatToPlainString(K.t.TjWdPc, { username: l.username }),
        c = i.name;
    return (
        null != r &&
            (c = K.intl.formatToPlainString(r.interval === nJ.WT.MONTH ? K.t.CTpcCZ : K.t["rgPWG/"], {
                skuName: i.name,
                intervalCount: r.intervalCount,
            })),
        (0, a.jsxs)(o.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, a.jsx)(nX.A, { defaultAnimationState: nY.oA.LOOP, giftStyle: n.giftStyle, className: n0.e })
                    : (0, a.jsx)(P.eu, {
                          src: null != l ? l.getAvatarURL(void 0, 100) : null,
                          size: tt._3.DEPRECATED_SIZE_100,
                          className: Q.SX,
                      }),
                null != t
                    ? (0, a.jsxs)(o.Fragment, {
                          children: [
                              (0, a.jsx)(P.tK, { children: K.intl.string(K.t.mDFGFj) }),
                              (0, a.jsx)(P.hE, { children: t }),
                          ],
                      })
                    : (0, a.jsxs)(o.Fragment, {
                          children: [
                              (0, a.jsx)(P.tK, { children: u }),
                              (0, a.jsxs)(P.hE, {
                                  className: U()(Q.Ot, eN.tR),
                                  children: [
                                      i.productLine !== b.EZt.COLLECTIBLES &&
                                          (0, a.jsx)(tl.A, {
                                              size: tl.M.MEDIUM,
                                              className: n0.I,
                                              game: s,
                                              skuId: i.id,
                                          }),
                                      c,
                                  ],
                              }),
                          ],
                      }),
            ],
        })
    );
});
var n2 = n(935399),
    n7 = n(475743),
    n8 = n(707554),
    n3 = n(379154);
function n4(e) {
    let { loginStatus: t, authBoxClassName: n, onSubmit: l, onCancelAccountDeletion: i } = e,
        s = t === b.aUe.ACCOUNT_DISABLED,
        r = s ? K.intl.string(K.t["j3rC+U"]) : K.intl.string(K.t.ZFWofo),
        o = s ? K.intl.string(K.t["6eNTWe"]) : K.intl.string(K.t["pCBti+"]);
    return (0, a.jsx)(P.Ay, {
        tag: "form",
        onSubmit: l,
        className: n,
        children: (0, a.jsxs)(n8.F, {
            component: (0, a.jsx)(P.hE, { className: Q.QB, children: r }),
            children: [
                (0, a.jsx)(P.tK, { className: Q.SX, children: o }),
                (0, a.jsxs)(P.eB, {
                    children: [
                        (0, a.jsx)(B.$, { text: K.intl.string(K.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, a.jsx)("div", {
                            className: U()(Q.Ot, n3.Qt),
                            children: K.intl.format(K.t.js2rr5, { onClick: i }),
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
function le(e) {
    let { children: t, className: n, ...l } = e,
        i = t();
    return (0, a.jsx)(P.Ay, {
        ...l,
        className: U()(n, n9.kL),
        contentClassName: n9.Qs,
        children: i.map((e, t) =>
            (0, a.jsx)("div", { className: n9.fi, style: { flexBasis: `${100 / i.length}%` }, children: e }, t),
        ),
    });
}
var lt = n(895600),
    ln = n(506774),
    ll = n(927813),
    li = n(104798),
    ls = n(1959);
let lr = "mweb_handoff_nonce",
    la = "mweb_handoff_nonce_expiration",
    lo = +ll.A.Millis.MINUTE,
    lu = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    lc = new Set(["deep_link_failed"]),
    ld = () => {
        ln.w.remove(lr), ln.w.remove(la);
    },
    lm = () => {
        let e = (0, h.bG)([eQ.default], () => eQ.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, u.parse)(window.location.search),
            l = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            i = l ?? (null !== e ? e : void 0);
        o.useEffect(() => {
            null !== l && e !== l && g.h.dispatch({ type: "FINGERPRINT", fingerprint: l });
        }, [l, e]);
        let [s, r] = o.useState(null),
            c = o.useCallback(
                (e) => {
                    r(e),
                        T.default.track(
                            b.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                            { reason: e, fingerprint: (0, ez.v)(i) },
                            { fingerprint: i },
                        );
                },
                [r, i],
            ),
            d = ln.w.get(lr);
        if (
            ("null" === n && null === s && c("deep_link_failed"),
            null != n && "null" !== n && null == d && null === s && c("nonce_missing"),
            o.useEffect(() => {
                if (null != d) {
                    let e = ln.w.get(la);
                    (null == e || Date.now() >= e) && (c("nonce_expired"), ld());
                }
            }, [d, c]),
            o.useEffect(() => {
                null != n &&
                    "null" !== n &&
                    null != d &&
                    null == s &&
                    A.Bo.post({ url: b.Rsh.HANDOFF_EXCHANGE, body: { key: d, handoff_token: n }, rejectWithError: !0 })
                        .then((e) => f.A.loginToken(e.body.token, !1))
                        .then(() => {
                            T.default.track(b.HAw.LOGIN_SUCCESSFUL, {
                                source: b.mdB.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, ez.v)(i),
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete("handoff_token"),
                                t.delete("fingerprint"),
                                (e.search = t.toString()),
                                window.history.pushState(null, "", e);
                        })
                        .catch(() => {
                            c("handoff_exchange");
                        })
                        .finally(() => {
                            ld();
                        });
            }, [n, d, s, i, c]),
            null == i)
        )
            return null;
        let m =
            null == s
                ? (0, a.jsxs)(a.Fragment, {
                      children: [K.intl.string(K.t.uJ1JsY), (0, a.jsx)("br", {}), K.intl.string(K.t.GHVWAs)],
                  })
                : lc.has(s)
                  ? K.intl.string(K.t.EPt55r)
                  : lu.has(s)
                    ? K.intl.string(K.t.g87kTp)
                    : void 0;
        return null != s && lc.has(s)
            ? (0, a.jsx)("div", {
                  className: ls.Un,
                  children: (0, a.jsx)(M.E, {
                      color: "interactive-text-default",
                      variant: "text-sm/semibold",
                      children: m,
                  }),
              })
            : (0, a.jsxs)("div", {
                  className: ls.kL,
                  children: [
                      (0, a.jsx)(M.E, { variant: "text-sm/semibold", children: m }),
                      (0, a.jsx)(B.$, {
                          variant: "overlay-primary",
                          text: K.intl.string(K.t.NcC759),
                          onClick: () => {
                              let e = li.A.generateNonce();
                              ln.w.set(lr, e), ln.w.set(la, Date.now() + lo);
                              let t = new URL(b.J$u),
                                  n = new URLSearchParams(window.location.search);
                              n.delete("fingerprint"), n.delete("handoff_token");
                              let l = new URLSearchParams();
                              l.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                                  l.set("key", e),
                                  l.set("fingerprint", i),
                                  (t.search = l.toString()),
                                  T.default.track(
                                      b.HAw.DEEP_LINK_CLICKED,
                                      { fingerprint: (0, ez.v)(i), source: "mobile_web_handoff", destination: b.J$u },
                                      { fingerprint: i, flush: !0 },
                                  ),
                                  (window.location.href = t.toString());
                          },
                      }),
                  ],
              });
    };
var lh = n(274303),
    lg = n(139286),
    lf = n(970573),
    lx = n(364488);
function lp(e) {
    let { onDismiss: t } = e;
    return (
        (0, lg.A)({ type: c.ImpressionTypes.MODAL, name: c.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, a.jsxs)(P.Ay, {
            className: lx.ci,
            children: [
                (0, a.jsx)(P.hE, { children: K.intl.string(K.t.bVbB63) }),
                (0, a.jsx)(M.E, {
                    className: lx.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: K.intl.string(K.t["0M5fN7"]),
                }),
                (0, a.jsx)(lf.A, {
                    actionText: K.intl.string(K.t["DSN+hw"]),
                    onAction: (e) => {
                        e === lf.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, a.jsx)("div", {
                    className: lx.o1,
                    children: (0, a.jsx)(ec.Q, {
                        variant: "secondary",
                        size: "md",
                        textVariant: "text-sm/medium",
                        text: K.intl.string(K.t["9g2mqT"]),
                        onClick: t,
                    }),
                }),
            ],
        })
    );
}
function lA(e) {
    let {
        authBoxClassName: t,
        country: n,
        login: l,
        password: i,
        onLoginChange: s,
        onPasswordChange: r,
        loginRef: o,
        passwordRef: u,
    } = e;
    return (0, a.jsxs)(P.Ay, {
        className: t,
        children: [
            (0, a.jsx)(n6.M, {}),
            (0, a.jsxs)(P.eB, {
                className: Q.QX,
                children: [
                    (0, a.jsx)(e_.A, {
                        className: Q.SX,
                        alpha2: n.alpha2,
                        countryCode: n.code.split(" ")[0],
                        label: K.intl.string(K.t.tUjnxr),
                        onChange: s,
                        setRef: o,
                        autoCapitalize: "none",
                        autoComplete: "username webauthn",
                        autoCorrect: "off",
                        spellCheck: "false",
                        value: l,
                        autoFocus: !0,
                        required: !0,
                    }),
                    (0, a.jsx)(P.pd, {
                        className: Q.SX,
                        label: K.intl.string(K.t["CIGa+7"]),
                        onChange: r,
                        type: "password",
                        setRef: u,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        value: i,
                        required: !0,
                    }),
                    (0, a.jsx)("div", {
                        className: Q.QB,
                        children: (0, a.jsx)(B.$, {
                            text: K.intl.string(K.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, a.jsx)(ec.Q, { text: K.intl.string(K.t.wWIufs), textVariant: "text-sm/normal", disabled: !0 }),
                    (0, a.jsx)("div", {
                        className: Q.a5,
                        children: (0, a.jsx)(ec.Q, {
                            text: K.intl.string(K.t.tmE73r),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var lE = n(401755);
function l_(e, t) {
    if (null == t[e]) return null;
    {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n;
    }
}
function lN(e) {
    let t,
        {
            invite: n,
            guildTemplate: l,
            giftCode: i,
            authBoxClassName: s,
            disableAutofocusOnDefaultForm: r,
            login: c,
            password: m,
            errors: g,
            loginSource: f,
            dismissedChooseAccount: x,
            setDismissedChooseAccount: p,
            conditionalMediationAbortController: A,
            onLoginChange: E,
            onPasswordChange: _,
            handleLogin: N,
            handleForgotPassword: j,
            handleGotoRegister: v,
        } = e,
        I = (0, h.bG)([eE.A], () => eE.A.getCountryCode()),
        C = (0, h.bG)([eQ.default], () => eQ.default.getLoginStatus()),
        S = (0, h.bG)([lh.A], () => lh.A.getHasLoggedInAccounts()),
        y = o.useCallback(
            (e) => {
                T.default.track(b.HAw.LOGIN_SUCCESSFUL, {
                    source: b.mdB.QR_CODE,
                    login_source: f,
                    gift_code_sku_id: i?.skuId ?? null,
                    is_new_user: !1,
                    login_method: "remote_auth",
                    login_instance_id: e ?? null,
                });
            },
            [f, i],
        ),
        { handoff_token: R } = (0, u.parse)(window.location.search),
        O = d.Fr && d.KY && null != R,
        L = null == g.email && null != g.password,
        D = o.useRef(null),
        k = o.useRef(null),
        w = (0, n7.A)(g);
    o.useEffect(() => {
        function e(e) {
            return null != g[e];
        }
        null != w && w !== g && (e("password") ? k.current?.focus() : (e("email") || e("login")) && D.current?.focus());
    }, [g, D, k, w]),
        (t =
            null != n
                ? (0, a.jsx)("div", { className: Q.S3, children: (0, a.jsx)(n6.A, { invite: n }) })
                : null != i
                  ? (0, a.jsx)(n1, { giftCode: i })
                  : (0, a.jsxs)("div", {
                        className: n3.wx,
                        children: [
                            (0, a.jsx)(P.hE, { className: Q.QB, children: K.intl.string(K.t["7fNJgA"]) }, "title"),
                            !1 === (0, tX.isAndroidWeb)()
                                ? (0, a.jsx)(P.tK, { children: K.intl.string(K.t.euS7r4) }, "subtitle")
                                : null,
                        ],
                    }));
    let G = (0, a.jsxs)("div", {
        className: n3.Eh,
        children: [
            S &&
                x &&
                (0, a.jsx)("div", {
                    className: n3.AX,
                    children: (0, a.jsx)(B.$, {
                        onClick: () => p(!1),
                        variant: "secondary",
                        text: K.intl.string(K.t["1MrpWO"]),
                        icon: ni.n,
                    }),
                }),
            t,
            (0, a.jsx)(n8.F, {
                children: (0, a.jsxs)(P.eB, {
                    className: Q.QX,
                    children: [
                        (0, a.jsx)(e_.A, {
                            alpha2: I.alpha2,
                            countryCode: I.code.split(" ")[0],
                            className: Q.SX,
                            label: K.intl.string(K.t.tUjnxr),
                            error: l_("login", g) ?? l_("email", g),
                            onChange: E,
                            setRef: D,
                            autoCapitalize: "none",
                            autoComplete: "username webauthn",
                            autoCorrect: "off",
                            spellCheck: "false",
                            value: c,
                            autoFocus: !L && !O && !r,
                            required: !0,
                        }),
                        (0, a.jsx)(P.pd, {
                            label: K.intl.string(K.t["CIGa+7"]),
                            error: l_("password", g),
                            onChange: _,
                            name: "password",
                            type: "password",
                            setRef: k,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            autoFocus: L && !O && !r,
                            value: m,
                            required: !0,
                        }),
                        (0, a.jsx)("div", {
                            className: U()(Q.SX, Q.a5),
                            children: (0, a.jsx)(ec.Q, {
                                text: K.intl.string(K.t.wWIufs),
                                textVariant: "text-sm/normal",
                                onClick: () => {
                                    null != D.current && D.current.focus(), j();
                                },
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: Q.QB,
                            children: (0, a.jsx)(B.$, {
                                text: K.intl.string(K.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                loading: C === b.aUe.LOGGING_IN,
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: Q.a5,
                            children: [
                                (0, a.jsx)("span", { className: n3.Qt, children: K.intl.string(K.t.tmE73r) }),
                                (0, a.jsx)("span", {
                                    className: n3.Z8,
                                    children: (0, a.jsx)(ec.Q, {
                                        text: K.intl.string(K.t.pV8xeR),
                                        textVariant: "text-sm/normal",
                                        onClick: v,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
    return null != n && n.state === b.elq.RESOLVING
        ? (0, a.jsx)(lA, {
              authBoxClassName: s,
              country: I,
              login: c,
              password: m,
              onLoginChange: E,
              onPasswordChange: _,
              loginRef: D,
              passwordRef: k,
          })
        : null != l
          ? l.state === lE.QB.RESOLVING
              ? (0, a.jsx)(lA, {
                    authBoxClassName: s,
                    country: I,
                    login: c,
                    password: m,
                    onLoginChange: E,
                    onPasswordChange: _,
                    loginRef: D,
                    passwordRef: k,
                })
              : (0, a.jsx)(le, {
                    onSubmit: N,
                    tag: "form",
                    className: U()(s, n3.Sy),
                    children: () => [
                        (0, a.jsx)(lt.A, { guildTemplate: l }, "template"),
                        (0, a.jsx)(o.Fragment, { children: G }, "form-wrapper"),
                    ],
                })
          : S && !x
            ? (0, a.jsx)(lp, { onDismiss: () => p(!0) })
            : (0, a.jsxs)("div", {
                  children: [
                      (0, a.jsx)(P.Ay, {
                          onSubmit: N,
                          tag: "form",
                          className: U()(s, { [n3.M0]: O }),
                          expanded: !0,
                          children: (0, a.jsxs)(eR.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 64,
                              children: [
                                  G,
                                  (0, a.jsx)(n5.A, {
                                      onAuthenticateSuccess: y,
                                      conditionalMediationAbortController: A,
                                  }),
                              ],
                          }),
                      }),
                      O && (0, a.jsx)(lm, {}),
                  ],
              });
}
var lj = n(572469);
function lv(e) {
    let { loginSource: t, giftCodeSKUId: n } = e,
        l = (0, h.cf)(
            [eQ.default],
            () => ({ ticket: eQ.default.getMFATicket(), methods: eQ.default.getMFAMethods() }),
            [],
        ),
        i = o.useCallback(
            (e) => {
                let { mfaType: l, data: i, ticket: s } = e;
                return (
                    F._.dispatch(b.jej.WAVE_EMPHASIZE),
                    f.A.loginMFAv2({ code: i, ticket: s, mfaType: l, source: t, giftCodeSKUId: n })
                );
            },
            [t, n],
        );
    return (0, a.jsx)(P.Ay, {
        style: { padding: 0 },
        children: (0, a.jsx)(lj.t, {
            mfaFinish: i,
            mfaChallenge: l,
            onEarlyClose: () => {
                g.h.dispatch({ type: "LOGIN_RESET" });
            },
            width: 480,
        }),
    });
}
var lI = n(511815),
    lC = n(139033),
    lS = n(15552),
    lT = n(952116),
    ly = n(491509),
    lb = n(913612),
    lR = n(933924);
let lO = (e) => n.g.location.assign(e);
function lL(e) {
    let {
        invite: t,
        guildTemplate: n,
        giftCode: l,
        location: i,
        redirectTo: s,
        transitionTo: r,
        authBoxClassName: c,
        loginSource: d,
        disableAutofocusOnDefaultForm: m,
    } = e;
    (0, lb.K)();
    let g = (0, h.bG)([eQ.default], () => eQ.default.isAuthenticated()),
        x = (0, h.bG)([S.A], () => S.A.isHandoffAvailable()),
        p = (0, h.bG)([eQ.default], () => eQ.default.getLoginStatus()),
        A = l?.skuId ?? null,
        _ = (0, h.bG)([nK.A], () => (null != A ? nK.A.get(A) : null)),
        {
            checkingHandoff: N,
            redirecting: j,
            login: v,
            password: I,
            phoneVerifyError: y,
            dismissedChooseAccount: R,
            setDismissedChooseAccount: O,
            errors: L,
            conditionalMediationAbortController: w,
            loginSource: G,
            loginOrSSO: U,
            handleLogin: B,
            handleIPAuthorize: V,
            handlePasswordReset: W,
            handleForgotPassword: H,
            handleResendCode: z,
            handleReset: Y,
            handleCancelAccountDeletion: X,
            handleGotoRegister: q,
            loginReset: $,
            onLoginChange: Z,
            onPasswordChange: J,
        } = (function (e) {
            let {
                    invite: t,
                    guildTemplate: n,
                    giftCode: l,
                    handoffAvailable: i,
                    authenticated: s,
                    transitionTo: r,
                    redirectTo: c,
                    location: d,
                    loginSource: m,
                } = e,
                [h, g] = o.useState(() => i),
                [x, p] = o.useState(() => s),
                [A, E] = o.useState(""),
                [_, N] = o.useState(() => {
                    let e = null != d ? (0, u.parse)(d.search) : {};
                    return e.email ?? e.login ?? "";
                }),
                [j, v] = o.useState(""),
                [I, S] = o.useState(!1),
                [T, y] = o.useState(null),
                [R, O] = o.useState(!1),
                [L] = o.useState(() => new AbortController()),
                [P, D] = o.useState({});
            !h || i || s || g(!1);
            let k = o.useMemo(() => {
                    if (null != m) return m;
                    if (null != l) return "gift";
                    if (null != n) return "guild_template";
                    if (null != t) {
                        if (null != t.guild) return "guild_invite";
                        if (null != t.channel) return "dm_invite";
                        if (null != t.inviter) return "friend_invite";
                    }
                    return null != c ? C(c) : null;
                }, [m, l, n, t, c]),
                w = null != l ? l.skuId : null,
                G = o.useCallback(
                    (e) => {
                        let t = null != e ? (0, u.parse)(e.search) : {};
                        if ((delete t.redirect_to, null != c)) {
                            if (eo(c)) return void eu(c);
                            r(c);
                        } else if (null == t.service) r(b.BVt.APP);
                        else {
                            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + b.Rsh.SSO,
                                n = { ...t, token: eQ.default.getToken() };
                            window.location = `${e}?${(0, u.stringify)(n)}`;
                        }
                    },
                    [c, r],
                ),
                U = o.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e && null != t && (p(!0), n ? f.A.verifySSOToken("login").then(() => G(t)) : G(t));
                    },
                    [G],
                ),
                B = o.useCallback(() => {
                    L.abort("Login state reset"), D({}), f.A.loginReset();
                }, [L]),
                V = o.useCallback(
                    async function (e) {
                        let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e?.preventDefault(),
                            L.abort("Starting password login"),
                            F._.dispatch(b.jej.WAVE_EMPHASIZE),
                            D({});
                        try {
                            await f.A.login({
                                login: A + _,
                                password: j,
                                undelete: n ?? I,
                                source: k,
                                giftCodeSKUId: w,
                                invite: t,
                            });
                        } catch (e) {
                            D((0, lS.p)(e));
                        }
                    },
                    [L, _, A, j, I, k, w, t],
                ),
                W = o.useCallback(
                    async (e) => {
                        let t = A + _;
                        D({});
                        try {
                            let { token: n } = await ep.A.verifyPhone(t, e, !1);
                            await f.A.authorizeIPAddress(n), V();
                        } catch (e) {
                            null != e.body && null != e.body.message && y(e.body.message);
                        }
                    },
                    [A, _, V],
                ),
                H = o.useCallback(
                    async (e) => {
                        y(null);
                        try {
                            let { token: t } = await ep.A.verifyPhone(A + _, e, !1);
                            r(b.BVt.RESET, { search: (0, u.stringify)({ token: t, from_login: "true" }) });
                        } catch (e) {
                            null != e.body && null != e.body.message && y(e.body.message);
                        }
                    },
                    [A, _, r],
                ),
                z = o.useCallback(
                    async (e) => {
                        null != e && e.preventDefault();
                        let t = A + _;
                        D({});
                        try {
                            F._.dispatch(b.jej.WAVE_EMPHASIZE);
                            let e = await f.A.forgotPassword(t);
                            if (!1 === e) return;
                            e === lI.D.ONE_TIME_LOGIN
                                ? (0, t8.openModal)((e) => {
                                      let t = [
                                          {
                                              variant: "primary",
                                              text: K.intl.string(K.t.BddRzS),
                                              onClick: e.onClose,
                                              fullWidth: !0,
                                          },
                                      ];
                                      return (0, a.jsx)(t7.Modal, {
                                          title: K.intl.string(K.t["6Ecyts"]),
                                          actions: t,
                                          ...e,
                                          children: (0, a.jsx)(M.E, {
                                              variant: "text-md/normal",
                                              children: K.intl.string(K.t.iAcrqV),
                                          }),
                                      });
                                  })
                                : (0, lC.A)({
                                      title: K.intl.string(K.t.f5Pi7A),
                                      subtitle: K.intl.format(K.t["6u5hQ9"], { email: t }),
                                  });
                        } catch (e) {
                            D((0, lS.p)(e));
                        }
                    },
                    [A, _],
                ),
                Q = o.useCallback(() => {
                    ep.A.resendCode(A + _);
                }, [A, _]),
                Y = o.useCallback((e) => {
                    null != e && e.preventDefault(), f.A.loginReset(), v(""), E(""), N(""), S(!1), g(!1), p(!1), D({});
                }, []),
                X = o.useCallback(() => {
                    S(!0), V(void 0, { undelete: !0 });
                }, [V]),
                q = o.useCallback(() => {
                    let e,
                        i = null != d ? (0, u.parse)(d.search) : {};
                    "" !== _ && (i.email = _),
                        null != t
                            ? ((i.mode = "register"), (e = b.BVt.INVITE(t.code)))
                            : null != l
                              ? ((i.mode = "register"), (e = b.BVt.GIFT_CODE(l.code)))
                              : null != n
                                ? (e = b.BVt.GUILD_TEMPLATE(n.code))
                                : null != c
                                  ? ((e = b.BVt.REGISTER), (i.redirect_to = c))
                                  : (e = b.BVt.REGISTER),
                        B(),
                        r(e, { search: (0, u.stringify)(i) }),
                        F._.dispatch(b.jej.WAVE_EMPHASIZE);
                }, [_, t, l, n, c, d, B, r]);
            return {
                checkingHandoff: h,
                redirecting: x,
                login: _,
                password: j,
                phoneVerifyError: T,
                dismissedChooseAccount: R,
                setDismissedChooseAccount: O,
                errors: P,
                conditionalMediationAbortController: L,
                loginSource: k,
                loginOrSSO: U,
                handleLogin: V,
                handleIPAuthorize: W,
                handlePasswordReset: H,
                handleForgotPassword: z,
                handleResendCode: Q,
                handleReset: Y,
                handleCancelAccountDeletion: X,
                handleGotoRegister: q,
                loginReset: B,
                onLoginChange: o.useCallback((e, t) => {
                    N(e), E(t);
                }, []),
                onPasswordChange: o.useCallback((e) => {
                    v(e);
                }, []),
            };
        })({
            invite: t,
            guildTemplate: n,
            giftCode: l,
            handoffAvailable: x,
            authenticated: g,
            transitionTo: r ?? lO,
            redirectTo: s,
            location: i,
            loginSource: d,
        });
    (0, n2.Ay)(() => {
        x && !g ? (0, E.ST)() : g && U(g, i, !0),
            T.default.track(
                b.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: G,
                    authenticated: g,
                    ...(null != _ ? (0, ly.A)(_, !1, !1) : {}),
                    source: (0, D.PR)(),
                },
                { flush: !0 },
            ),
            g || (0, lR.a)({ abortController: w, loginSource: G, giftCodeSKUId: A }),
            f.A.getLocationMetadata(),
            (0, k.d)("login");
    });
    let ee = (0, n7.A)(g);
    if (
        (o.useEffect(() => {
            let e = N && (x || j);
            g && !1 === ee && !e && (w.abort("Transitioning to authenticated state"), U(g, i));
        }, [g, x, ee, j, N, w, U, i]),
        j || N)
    )
        return (0, a.jsx)(P.Ay, { children: (0, a.jsx)(eL.y, {}) });
    if (x)
        return (0, a.jsxs)(P.Ay, {
            className: c,
            children: [
                (0, a.jsx)(P.CK, {}),
                (0, a.jsx)(P.hE, { className: Q.QB, children: K.intl.string(K.t.S6RMNA) }),
                (0, a.jsx)(P.tK, { children: K.intl.string(K.t.YZiJbh) }),
            ],
        });
    switch (p) {
        case b.aUe.LOGGING_IN_MFA_SMS:
        case b.aUe.MFA_SMS_STEP:
        case b.aUe.LOGGING_IN_MFA:
        case b.aUe.MFA_STEP:
            return (0, a.jsx)(lv, { loginSource: G, giftCodeSKUId: A });
        case b.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case b.aUe.ACCOUNT_DISABLED:
            return (0, a.jsx)(n4, { loginStatus: p, authBoxClassName: c, onSubmit: Y, onCancelAccountDeletion: X });
        case b.aUe.PHONE_IP_AUTHORIZATION:
            return (0, a.jsx)(P.Ay, {
                tag: "form",
                className: c,
                children: (0, a.jsx)(lT.A, {
                    title: K.intl.string(K.t.w55Oco),
                    subtitle: K.intl.format(K.t.CfRZBj, { onResendClick: z }),
                    error: y,
                    onSubmit: V,
                    onCancel: $,
                }),
            });
        case b.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, a.jsx)(P.Ay, {
                tag: "form",
                className: c,
                children: (0, a.jsx)(lT.A, {
                    title: K.intl.string(K.t["+xqy3d"]),
                    subtitle: K.intl.format(K.t.ef4uZ7, { onResendClick: z }),
                    error: y,
                    onSubmit: W,
                    onCancel: $,
                }),
            });
        case b.aUe.LOGGING_IN:
        case b.aUe.NONE:
        default:
            return (0, a.jsx)(lN, {
                invite: t,
                guildTemplate: n,
                giftCode: l,
                authBoxClassName: c,
                disableAutofocusOnDefaultForm: m,
                login: v,
                password: I,
                errors: L,
                loginSource: G,
                dismissedChooseAccount: R,
                setDismissedChooseAccount: O,
                conditionalMediationAbortController: w,
                onLoginChange: Z,
                onPasswordChange: J,
                handleLogin: B,
                handleForgotPassword: H,
                handleGotoRegister: q,
            });
    }
}
var lP = n(664294),
    lD = n(204925);
let lk = null,
    lw = "underage";
class lG extends h.Ay.Store {
    static displayName = "AgeGateStore";
    isUnderageAnonymous() {
        if (tX.isPlatformEmbedded && 1) {
            if (null != lk && lk + lD.bm > Date.now()) return !0;
        } else if (1) return null != lP.parse(document.cookie)[lw];
        return !1;
    }
}
let lU = new lG(g.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        (lk = Date.now()), (document.cookie = `${lw}=1;path=/`);
    },
    LOGIN_SUCCESS: function () {
        (lk = null), (document.cookie = `${lw}=1;path=/;max-age=0`);
    },
});
var lM = n(509434),
    lB = n(153801);
let lV = function () {
    return (0, a.jsx)(P.Ay, {
        children: (0, a.jsxs)("div", {
            className: lB.hQ,
            children: [
                (0, a.jsx)(P.hE, { className: lB.DD, children: K.intl.string(K.t.nCB6Ga) }),
                (0, a.jsx)(P.tK, {
                    className: lB.VA,
                    children: K.intl.format(K.t.KQgoxG, { underageMessage: K.intl.string(K.t.WqEH4D) }),
                }),
                (0, a.jsx)(B.$, {
                    icon: lM.I,
                    text: K.intl.string(K.t.hvVgAZ),
                    onClick: () => window.open(t9.A.getArticleURL(b.MVz.AGE_GATE), "_blank"),
                    iconPosition: "end",
                }),
            ],
        }),
    });
};
var lF = n(990078),
    lW = n(913122),
    lH = n(201505);
n(417635), n(827343), n(792251), n(19575), n(945041);
var lK = n(493527),
    lz = n(544395),
    lQ = n(446837);
let lY = window.ResizeObserver ?? lQ.t;
function lX(e) {
    let { show: t, children: n, top: l = 0, bottom: i = 0 } = e,
        { ref: s, height: r } = (function () {
            let e = o.useRef(null),
                [t, n] = o.useState(0),
                l = o.useMemo(
                    () =>
                        new lY((e) => {
                            let [t] = e;
                            return n(t.contentRect.height);
                        }),
                    [],
                );
            return (
                o.useLayoutEffect(() => (null != e.current && l.observe(e.current), () => l.disconnect()), [l]),
                { ref: e, height: t }
            );
        })(),
        u = (0, eZ.z)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: { height: t ? r : 0, paddingBottom: t ? `${i}px` : "0px", marginTop: t ? `${l}px` : "0px" },
            config: { tension: 170, friction: 26 },
        }),
        c = (0, eZ.z)({
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
    return (0, a.jsx)(eq.animated.div, {
        style: { overflow: "hidden", height: u.height, paddingBottom: u.paddingBottom, marginTop: u.marginTop },
        children: (0, a.jsx)(eq.animated.div, { style: { opacity: c.opacity }, ref: s, children: n }),
    });
}
var lq = n(153488),
    l$ = n(934337),
    lZ = n(989349),
    lJ = n.n(lZ),
    l0 = n(955437),
    l1 = n(888548);
n(861807);
var l2 = n(569717);
function l7(e) {
    let {
        email: t,
        phoneToken: n,
        username: l,
        globalName: i,
        consent: s,
        password: r,
        guildTemplateCode: a,
        birthday: o,
        invite: u = null,
        giftCodeSKUId: d = null,
        promoEmailConsent: m = null,
        usedUsernameSuggestion: h = null,
    } = e;
    if ((g.h.dispatch({ type: "REGISTER" }), null != o)) {
        let e;
        (0, l2.A)(o, b.JJy.REGISTER),
            T.default.track(b.HAw.AGE_GATE_ACTION, { source: lD.w_.REGISTER, action: lD.AM.AGE_GATE_SUBMITTED }),
            (e = lJ()().diff(o, "years")) < 13 ||
                T.default.track(b.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                });
    }
    return W.A.post({
        url: b.Rsh.REGISTER,
        body: {
            fingerprint: eQ.default.getFingerprint(),
            email: t,
            username: l,
            global_name: i,
            password: r,
            invite: u,
            consent: s,
            phone_token: n,
            date_of_birth: o?.format("YYYY-MM-DD"),
            gift_code_sku_id: d,
            guild_template_code: a,
            promotional_email_opt_in: m?.checked,
        },
        trackedActionData: {
            event: c.NetworkActionNames.USER_REGISTER,
            properties: {
                invite_code: u,
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
                g.h.dispatch({
                    type: "GUARDIAN_CONNECT_REQUIRED",
                    shouldShowGuardianConnect: !0 === e.body.show_guardian_connect,
                }),
                T.default.track(b.HAw.AGE_GATE_ACTION, { source: lD.w_.REGISTER, action: lD.AM.AGE_GATE_SUCCESS });
        },
        (e) => {
            if (e instanceof l1.CaptchaCancelError) throw e;
            let t = new V.A(e);
            throw (
                (null != t.getFieldErrors("date_of_birth") && l0.Xv(lD.w_.REGISTER),
                T.default.track(b.HAw.REGISTER_SUBMIT_ERRORED, {
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
var l8 = n(568385);
function l3() {
    let { required: e, checked: t } = (0, l$.mZ)();
    return e
        ? (0, a.jsx)("div", {
              className: Q.Ot,
              children: (0, a.jsx)(l8.J, {
                  label: K.intl.string(K.t["0p3R0+"]),
                  checked: t,
                  onChange: l$.Bw,
                  labelType: "secondary",
              }),
          })
        : null;
}
let l4 = /\.$/;
function l6(e) {
    return Array.isArray(e)
        ? e
              .map((e) => e.replace(l4, ""))
              .join(". ")
              .trim()
        : e;
}
function l5(e) {
    let [t, n] = o.useState(() => null != e && !e),
        [l, i] = o.useState(e);
    return null == l && null != e ? (i(e), n(!e)) : l !== e && i(e), [t, n];
}
function l9() {
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
                    }, e * ll.A.Millis.SECOND));
            }, []),
        ]
    );
}
var ie = n(731286);
function it(e) {
    let { consent: t, consentRequired: n, onConsentChange: l } = e;
    return n
        ? (0, a.jsx)("div", {
              className: ie.IQ,
              children: (0, a.jsx)(l8.J, {
                  label: K.intl.format(K.t.qMDAP0, { termsURL: b.X7G.TERMS, privacyURL: b.X7G.PRIVACY }),
                  checked: t,
                  onChange: l,
                  labelType: "secondary",
              }),
          })
        : (0, a.jsx)(M.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: U()(Q.Ot, ie.E2),
              children: K.intl.format(K.t["KI+BSb"], { termsURL: b.X7G.TERMS, privacyURL: b.X7G.PRIVACY }),
          });
}
n(801541);
var il = n(889137),
    ii = n(546727),
    is = n(5052);
function ir(e) {
    let t,
        { username: n, suggestion: l, globalName: i, isUsernameFocused: s, onClickSuggestion: r } = e,
        o = (0, is.i)(n, !0, !0),
        u = n.length > 0;
    return (
        (t = u
            ? (0, il.YW)(o)
                  .with({ type: ii.q.ERROR, message: il.P.select() }, (e) =>
                      (0, a.jsx)(M.E, { className: ie.vU, variant: "text-sm/normal", children: e }),
                  )
                  .with({ type: ii.q.AVAILABLE, message: il.P.select() }, (e) =>
                      (0, a.jsx)(M.E, { className: ie.vq, variant: "text-sm/normal", children: e }),
                  )
                  .otherwise(() =>
                      (0, a.jsx)(M.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: K.intl.string(K.t.z7c4bP),
                      }),
                  )
            : null != l && l.length > 0 && i.length > 0
              ? (0, a.jsx)(M.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: K.intl.format(K.t.nDGqqq, { suggestion: l, nameOnClick: r }),
                })
              : (0, a.jsx)(M.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: K.intl.string(K.t.z7c4bP),
                })),
        (0, a.jsx)(lX, { show: (u && o?.type === ii.q.ERROR) || s, top: -12, bottom: 20, children: t })
    );
}
function ia(e) {
    let {
            initialEmail: t,
            invite: n,
            giftCode: l,
            guildTemplate: i,
            onApiErrors: s,
            onEmailChange: r,
            onGotoLogin: u,
            onRegister: c,
        } = e,
        [d, m] = o.useState(!1),
        [g, f] = o.useState(!1);
    async function x() {
        y.length > 0 && !lz.A.wasRegistrationSuggestionFetched(y) && (await lK.A.fetchSuggestionsRegistration(y));
    }
    function p(e) {
        T.default.track(b.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function A(e) {
        T.default.track(b.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    let E = (0, h.bG)([lq.A], () => lq.A.getAuthenticationConsentRequired()),
        _ = (0, h.bG)([lz.A], () => lz.A.registrationUsernameSuggestion()),
        N = o.useRef(null),
        j = o.useRef(null),
        v = o.useRef(null),
        I = o.useRef(null),
        [C, S] = o.useState(t),
        [y, R] = o.useState(""),
        [O, L] = o.useState(""),
        [D, k] = o.useState(""),
        [w, G] = o.useState(null),
        [V, W] = l5(E),
        [H, z] = o.useState(!1),
        [Y, X] = l9(),
        [q, $] = o.useState({}),
        { message: Z, email: J, username: ee, global_name: et, password: en, date_of_birth: el } = q,
        [ei, es] = o.useState(null),
        [er, ea] = o.useState(null),
        [eo, eu] = o.useState(null),
        [ed, em] = o.useState(null),
        eh = null != E && V;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: l, globalNameRef: i, passwordRef: s } = e,
            r = (0, n7.A)(t);
        o.useEffect(() => {
            null == r ||
                (r !== t &&
                    (null != t.email || null != t.phone
                        ? n.current?.focus()
                        : null != t.username
                          ? l.current?.focus()
                          : null != t.global_name
                            ? i.current?.focus()
                            : null != t.password && s.current?.focus()));
        }, [t, r, n, l, i, s]);
    })({ apiErrors: q, emailRef: N, usernameRef: j, globalNameRef: v, passwordRef: I });
    let eg = o.useCallback(async () => {
            let e = null != l ? l.skuId : null,
                t = l$.mZ.getState(),
                r = (0, ny.uJ)(_) ? null : O === _;
            F._.dispatch(b.jej.WAVE_EMPHASIZE), z(!0), $({});
            try {
                await l7({
                    email: C,
                    username: O,
                    globalName: y,
                    consent: V,
                    password: D,
                    invite: n?.code,
                    usedUsernameSuggestion: r,
                    guildTemplateCode: i?.code,
                    giftCodeSKUId: e,
                    birthday: w,
                    promoEmailConsent: t.required ? t : null,
                }),
                    c?.();
            } catch (t) {
                if ((z(!1), !(t instanceof lW.LG))) return;
                let e = (0, lS.W)(t);
                $(e), s?.(e), "number" == typeof e.retry_after && X(e.retry_after);
            }
        }, [l, i, n, C, s, c, _, O, y, D, w, V, X]),
        ef = o.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == E)) return;
                let t = !1;
                0 === C.length && (es(K.intl.string(K.t.EkokLy)), (t = !0)),
                    0 === O.length && (ea(K.intl.string(K.t.EkokLy)), (t = !0)),
                    0 === D.length && (eu(K.intl.string(K.t.EkokLy)), (t = !0)),
                    null == w && (em(K.intl.string(K.t.EkokLy)), (t = !0)),
                    t || eg();
            },
            [C, O, D, w, E, eg],
        ),
        ex = null;
    return (
        "string" == typeof Z && (ex = (0, a.jsx)(P.ME, { className: U()(Q.QX, ie.gJ), children: Z })),
        (0, a.jsx)("form", {
            onSubmit: ef,
            children: (0, a.jsxs)(P.eB, {
                className: Q.QX,
                children: [
                    (0, a.jsx)(P.pd, {
                        autoFocus: !0,
                        className: Q.SX,
                        label: K.intl.string(K.t.dI4d4S),
                        name: "email",
                        value: C,
                        onChange: (e) => {
                            S(e), r?.(e), es(0 === e.length ? K.intl.string(K.t.EkokLy) : null);
                        },
                        error: ei ?? l6(J),
                        type: "email",
                        autoComplete: "username",
                        setRef: N,
                        required: !0,
                        onFocus: () => p("email"),
                        onBlur: () => A("email"),
                    }),
                    (0, a.jsx)(P.pd, {
                        label: K.intl.string(K.t["9AjdkD"]),
                        className: Q.SX,
                        name: "global_name",
                        value: y,
                        onChange: R,
                        error: l6(et),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: v,
                        onFocus: () => {
                            m(!0), p("global_name");
                        },
                        onBlur: () => {
                            m(!1), A("global_name");
                        },
                    }),
                    (0, a.jsx)(lX, {
                        show: d,
                        top: -12,
                        bottom: 20,
                        children: (0, a.jsx)(M.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: K.intl.string(K.t["330TCc"]),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        onBlur: () => f(!1),
                        onFocus: () => {
                            f(!0), x();
                        },
                        tabIndex: -1,
                        children: [
                            (0, a.jsx)(P.pd, {
                                label: K.intl.string(K.t.TWzdWj),
                                className: Q.SX,
                                name: "username",
                                value: O,
                                onChange: (e) => {
                                    L(e.toLocaleLowerCase()), ea(0 === e.length ? K.intl.string(K.t.EkokLy) : null);
                                },
                                error: er ?? l6(ee),
                                autoComplete: "off",
                                setRef: j,
                                required: !0,
                                onFocus: () => p("username"),
                                onBlur: () => A("username"),
                            }),
                            (0, a.jsx)(ir, {
                                username: O,
                                suggestion: _,
                                globalName: y,
                                isUsernameFocused: g,
                                onClickSuggestion: () => {
                                    j.current?.focus(), null != _ && _.length > 0 && L(_);
                                },
                            }),
                        ],
                    }),
                    (0, a.jsx)(P.pd, {
                        label: K.intl.string(K.t["CIGa+7"]),
                        name: "password",
                        value: D,
                        onChange: (e) => {
                            k(e), eu(0 === e.length ? K.intl.string(K.t.EkokLy) : null);
                        },
                        error: eo ?? l6(en),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: I,
                        required: !0,
                        onFocus: () => p("password"),
                        onBlur: () => A("password"),
                    }),
                    (0, a.jsx)(lH.A, {
                        label: K.intl.string(K.t.rhBeKe),
                        wrapperClassName: ie.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            G(e), null != e && em(null);
                        },
                        error: ed ?? l6(el),
                        value: w,
                        required: !0,
                        onFocus: p,
                        onBlur: A,
                    }),
                    (0, a.jsx)(l3, {}),
                    (0, a.jsx)(it, { consent: V, consentRequired: E, onConsentChange: W }),
                    (0, a.jsx)(lF.m, {
                        text: !V && E ? K.intl.string(K.t.AY4IVA) : null,
                        children: (0, a.jsx)("div", {
                            className: Q.QX,
                            children: (0, a.jsx)(B.$, {
                                text: K.intl.string(K.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: H,
                                disabled: !eh || Y,
                            }),
                        }),
                    }),
                    ex,
                    (0, a.jsx)("div", {
                        className: Q.QX,
                        children: (0, a.jsx)(ec.Q, {
                            text: K.intl.string(K.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            onClick: u,
                        }),
                    }),
                ],
            }),
        })
    );
}
n(436317);
var io = n(292666),
    iu = n(713654),
    ic = n(131165);
function id(e) {
    let { channel: t } = e,
        n = (0, iu._U)(t.type);
    return (0, a.jsxs)("div", {
        className: ic.Nj,
        children: [
            null != n ? (0, a.jsx)(n, { color: "currentColor", size: "custom", width: 20, height: 20 }) : null,
            (0, a.jsx)(M.E, { className: ic.dN, color: "none", variant: "text-sm/semibold", children: t.name }),
        ],
    });
}
function im(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, a.jsxs)("div", {
        className: ic.kL,
        children: [
            (0, a.jsx)(tI.Uq, { className: ic.II, guildId: n.guild_id, guildEvent: n, eventPreview: n }),
            (0, a.jsx)(tI.sC, { name: n.name, description: n.description, guildId: n.guild_id }),
            null != t && n.channel_id === t.id ? (0, a.jsx)(id, { channel: t }) : null,
        ],
    });
}
var ih = n(573435),
    ig = n(831985);
function ix(e) {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let l = em.DY(t),
        { name: i, description: s } = l;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(eO.D, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: ig.CT,
                children: K.intl.string(K.t.Eabu1z),
            }),
            (0, a.jsxs)("div", {
                className: ig.EB,
                children: [
                    (0, a.jsx)(ih.Ay, {
                        mask: ih.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, a.jsx)(tv.Ay, { guild: l, size: tv.Ay.Sizes.MEDIUM, active: !0 }),
                    }),
                    (0, a.jsxs)("div", {
                        className: ig.OA,
                        children: [
                            (0, a.jsx)(eO.D, { variant: "heading-sm/semibold", children: i }),
                            (0, a.jsxs)("div", {
                                className: ig.aH,
                                children: [
                                    (0, a.jsx)("div", { className: ig.Om }),
                                    null != n && n > 0
                                        ? (0, a.jsx)(M.E, {
                                              variant: "text-sm/normal",
                                              children: K.intl.format(K.t["LC+S+m"], { membersOnline: n }),
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
                (0, a.jsx)(M.E, { color: "text-default", className: ig.CT, variant: "text-sm/normal", children: s }),
        ],
    });
}
function ip(e) {
    let { authBoxClassName: t, name: n, onNameChange: l } = e;
    return (0, a.jsxs)(P.Ay, {
        className: t,
        children: [
            (0, a.jsx)(n6.M, {}),
            (0, a.jsxs)(P.eB, {
                className: ie.y0,
                children: [
                    (0, a.jsx)(lF.m, {
                        text: K.intl.string(K.t["hBB85/"]),
                        position: "right",
                        children: (0, a.jsx)(P.pd, {
                            label: K.intl.string(K.t["9AjdkD"]),
                            autoFocus: !0,
                            className: Q.QB,
                            name: "username",
                            value: n,
                            placeholder: K.intl.string(K.t["09Q8yp"]),
                            onChange: l,
                            onFocus: () => {
                                T.default.track(b.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                T.default.track(b.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, a.jsx)(M.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: U()(Q.QX, ie.E2),
                        children: K.intl.format(K.t["KI+BSb"], { termsURL: b.X7G.TERMS, privacyURL: b.X7G.PRIVACY }),
                    }),
                    (0, a.jsx)("div", {
                        className: Q.Ot,
                        children: (0, a.jsx)(B.$, {
                            text: K.intl.string(K.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: Q.QX,
                        children: (0, a.jsx)(ec.Q, {
                            text: K.intl.string(K.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function iA(e) {
    let { consentRequired: t, consent: n, registering: l } = e,
        i = o.useMemo(() => null != t && n, [t, n]);
    return (0, a.jsx)(lF.m, {
        text: !n && t ? K.intl.string(K.t.AY4IVA) : null,
        children: (0, a.jsx)("div", {
            className: Q.Ot,
            children: (0, a.jsx)(B.$, {
                text: K.intl.string(K.t["825cFy"]),
                variant: "primary",
                fullWidth: !0,
                type: "submit",
                loading: l,
                disabled: !i,
            }),
        }),
    });
}
function iE(e) {
    let t,
        { invite: n, authBoxClassName: l, onApiErrors: i, onGotoLogin: s, onRegister: r } = e,
        u = (0, h.bG)([lq.A], () => lq.A.getAuthenticationConsentRequired()),
        c = n?.guild_scheduled_event != null,
        d = o.useRef(null);
    t =
        n?.guild_scheduled_event != null
            ? (0, a.jsx)(im, { channel: n.channel, guildScheduledEvent: n.guild_scheduled_event })
            : (0, a.jsx)("div", { className: Q.S3, children: (0, a.jsx)(n6.A, { invite: n, inUnclaimedFlow: !0 }) });
    let [m, g] = o.useState(""),
        [f, x] = o.useState(null),
        [p, A] = l5(u),
        [E, _] = o.useState(!1),
        [N, j] = o.useState({}),
        { username: v, global_name: I, date_of_birth: C } = N,
        [S, y] = l9();
    o.useEffect(() => {
        null == f && d.current?.focus();
    }, [f, d]);
    let [R, O] = o.useState(null),
        [L, D] = o.useState(null),
        k = o.useCallback(async () => {
            F._.dispatch(b.jej.WAVE_EMPHASIZE), _(!0), j({});
            try {
                await (function (e) {
                    let { invite: t = null, giftCodeSKUId: n = null, ...l } = e;
                    return l7({ ...l, invite: t, giftCodeSKUId: n });
                })({ consent: p, invite: n.code, globalName: m, birthday: f }),
                    r?.();
            } catch (t) {
                if ((_(!1), !(t instanceof lW.LG))) return;
                let e = (0, lS.W)(t);
                j(e), i?.(e), "number" == typeof e.retry_after && y(e.retry_after);
            }
        }, [n, m, f, p, i, r, y, j, _]),
        w = o.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === u)) return;
                let t = !1;
                0 === m.length && (O(K.intl.string(K.t.EkokLy)), (t = !0)),
                    null == f && (D(K.intl.string(K.t.EkokLy)), (t = !0)),
                    t || k();
            },
            [m, f, u, k, O, D],
        );
    return n.state === b.elq.RESOLVING
        ? (0, a.jsx)(ip, { authBoxClassName: l, name: m, onNameChange: g })
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(P.Ay, {
                      tag: "section",
                      className: l,
                      children: (0, a.jsxs)("form", {
                          onSubmit: w,
                          children: [
                              t,
                              c ? (0, a.jsx)("div", { className: ie.yF }) : null,
                              (0, a.jsxs)(P.eB, {
                                  className: c ? void 0 : ie.y0,
                                  children: [
                                      (0, a.jsx)(io.k, {
                                          helperText: K.intl.string(K.t["330TCc"]),
                                          label: K.intl.string(K.t["9AjdkD"]),
                                          error: R ?? l6(I ?? v),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: m,
                                          placeholder: K.intl.string(K.t["09Q8yp"]),
                                          onChange: g,
                                          onFocus: () => {
                                              T.default.track(b.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              T.default.track(b.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, a.jsx)(lH.A, {
                                          label: K.intl.string(K.t.rhBeKe),
                                          wrapperClassName: ie.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              x(e), null != e && D(null);
                                          },
                                          error: L ?? l6(C),
                                          value: f,
                                      }),
                                      (0, a.jsx)(it, { consent: p, consentRequired: u, onConsentChange: A }),
                                      (0, a.jsx)(iA, { consentRequired: u, consent: p, registering: E }),
                                      (0, a.jsx)("div", {
                                          className: Q.QX,
                                          children: (0, a.jsx)(ec.Q, {
                                              text: K.intl.string(K.t["1lWxux"]),
                                              textVariant: "text-sm/normal",
                                              onClick: s,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  null != n && c
                      ? (0, a.jsx)(P.Ay, {
                            className: Q.QX,
                            children: (0, a.jsx)(ix, { guild: n.guild, onlineCount: n.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
var i_ = n(942614);
n(100544);
var iN =
        (((r = {}).IDENTITY = "identity"),
        (r.DISPLAY_NAME = "display_name"),
        (r.ACCOUNT_INFORMATION = "account_information"),
        (r.FULL = "full"),
        (r.AGE_GATE = "age_gate"),
        (r.INVITE = "invite"),
        (r.SMS_VERIFY = "sms_verify"),
        r),
    ij = n(771016);
function iv(e) {
    let {
            authBoxClassName: t,
            giftCode: n,
            giftCodeSKU: l,
            guildTemplate: i,
            invite: s,
            location: r,
            redirectTo: d,
            onLoginStart: m,
            onRegister: g,
            transitionTo: x = D.pX,
        } = e,
        p = (0, h.bG)([lq.A], () => lq.A.getAuthenticationConsentRequired()),
        A = (0, h.bG)([eQ.default], () => eQ.default.isAuthenticated()),
        E = (0, h.bG)([lU], () => lU.isUnderageAnonymous()),
        _ = (0, h.bG)([lh.A], () => lh.A.getHasLoggedInAccounts()),
        N = null != e.location ? (0, u.parse)(e.location.search) : {},
        [j, v] = o.useState(N.email ?? ""),
        [I, C] = o.useState({}),
        S = (0, n7.A)(A),
        y = (function (e, t, n) {
            if (null != e) return "gift";
            if (null != t) return "guild_template";
            if (null != n) {
                if (null != n.guild) return "guild_invite";
                else if (null != n.channel) return "dm_invite";
                else if (null != n.inviter) return "friend_invite";
            }
            return null;
        })(n, i, s),
        R = null != s && (null != s.guild || null != s.channel),
        O = null != s && null == s.guild && null == s.channel && null != s.inviter,
        L = o.useCallback(() => {
            A && (null != d ? x(d) : x(ed.A.defaultRoute));
        }, [A, d, x]);
    (0, n2.Ay)(() => {
        L(),
            T.default.track(
                b.HAw.REGISTER_VIEWED,
                {
                    location: null != s ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: y,
                    ...(null != l ? (0, ly.A)(l, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == p && f.A.getLocationMetadata(),
            (0, k.d)("register");
    }),
        o.useEffect(() => {
            A && !1 === S && ((0, i_.C)(ij.zY.ORGANIC_REGISTERED), L());
        }, [A, S, L]);
    let w = iN.FULL;
    E || null != I.date_of_birth ? (w = iN.AGE_GATE) : R && (w = iN.INVITE),
        (0, lg.A)(
            {
                type: c.ImpressionTypes.VIEW,
                name: c.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: c.ImpressionGroups.USER_REGISTRATION_FLOW, step: w },
            },
            {},
            [w],
        );
    let G = o.useCallback(
        (e) => {
            let t,
                l = null != r ? (0, u.parse)(r.search) : {};
            null != s
                ? (t = b.BVt.INVITE_LOGIN(s.code))
                : null != n
                  ? (t = b.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != i
                    ? (t = b.BVt.GUILD_TEMPLATE_LOGIN(i.code))
                    : null != d
                      ? ((t = b.BVt.LOGIN), (l.redirect_to = d))
                      : ((t = b.BVt.LOGIN), "" !== j && (l = { email: j })),
                f.A.loginReset(),
                x(t, { search: (0, u.stringify)(l), source: "register" }),
                m?.(e),
                F._.dispatch(b.jej.WAVE_EMPHASIZE);
        },
        [j, s, n, i, d, r, m, x],
    );
    if (E || null != I.date_of_birth) return (0, a.jsx)(lV, {});
    if (null != s && R)
        return (0, a.jsx)(iE, { invite: s, authBoxClassName: t, onApiErrors: C, onGotoLogin: G, onRegister: g });
    let M = (0, a.jsx)(P.hE, { children: K.intl.string(K.t.wC4TlR) }, "title"),
        V = !1;
    null != i
        ? ((M = (0, a.jsx)(lt.A, { guildTemplate: i })), (V = !0))
        : null != n
          ? (M = (0, a.jsx)(n1, { giftCode: n }))
          : null != s &&
            O &&
            s.state === b.elq.RESOLVED &&
            (M = (0, a.jsx)("div", { className: Q.S3, children: (0, a.jsx)(n6.A, { invite: s, isRegister: !0 }) }));
    let W = (0, a.jsx)(ia, {
        initialEmail: N.email ?? "",
        invite: s,
        giftCode: n,
        guildTemplate: i,
        onApiErrors: C,
        onEmailChange: v,
        onGotoLogin: G,
        onRegister: g,
    });
    return V
        ? (0, a.jsx)(le, {
              tag: "section",
              className: U()(t, ie.Sy),
              children: () => [
                  M,
                  (0, a.jsxs)(
                      "div",
                      {
                          className: ie.Uu,
                          children: [(0, a.jsx)(P.hE, { className: ie.lR, children: K.intl.string(K.t.wC4TlR) }), W],
                      },
                      "register-title",
                  ),
              ],
          })
        : (0, a.jsxs)(P.Ay, {
              tag: "section",
              className: t,
              children: [
                  _
                      ? (0, a.jsx)("div", {
                            className: ie.AX,
                            children: (0, a.jsx)(B.$, {
                                onClick: G,
                                variant: "secondary",
                                text: K.intl.string(K.t["1MrpWO"]),
                                icon: ni.n,
                                iconPosition: "start",
                            }),
                        })
                      : null,
                  M,
                  W,
              ],
          });
}
h.Ay.initialize(), h.Ay.initialize();
class iI extends o.PureComponent {
    state = { error: null, continueOnWeb: !1, currentUser: null, sentVerification: !1, fetchingUser: !1 };
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, k.d)("gift_code");
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
        nV.Yq(), null == e && this.refreshUser();
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
            { error: l } = this.state,
            i = null != l ? l.code : null;
        return i === b.t02.INVALID_GIFT_SELF_REDEMPTION
            ? K.intl.string(K.t.wa9h7F)
            : i === b.t02.INVALID_GIFT_REDEMPTION_OWNED && n?.productLine === b.EZt.COLLECTIBLES
              ? K.intl.string(K.t.mdLtb5)
              : null != t || i === b.t02.INVALID_GIFT_REDEMPTION_OWNED
                ? K.intl.format(K.t.PIdmg3, { libraryLink: b.BVt.APPLICATION_LIBRARY })
                : e.isClaimed || i === b.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? K.intl.string(K.t.ilcBeX)
                  : i === b.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? K.intl.string(K.t.ypuSd8)
                    : void 0;
    }
    handleLogout = () => {
        let e = this.props.match.params.giftCode;
        f.A.logout("gift_code", b.BVt.GIFT_CODE_LOGIN(e));
    };
    handleResendVerification = () => {
        f.A.verifyResend(), this.setState({ sentVerification: !0 });
    };
    handleAccept = async () => {
        let { transitionTo: e, giftCode: t } = this.props;
        if (null == t) throw Error("Trying to accept gift before resolve");
        let n = this.getCode();
        try {
            this.setState({ error: null }), await x.A.redeemGiftCode({ code: n }), e(b.BVt.APP);
        } catch (e) {
            this.setState({ error: e });
        }
    };
    resolveGiftCode = () => {
        let { transitionTo: e } = this.props,
            t = this.getCode();
        x.A.resolveGiftCode(t, !0, !0).then((n) => {
            null != n && null != n.giftCode.promotion && e(b.BVt.BILLING_PROMOTION_REDEMPTION(t));
        });
    };
    renderSpinner(e) {
        return (0, a.jsxs)(P.Ay, { children: [(0, a.jsx)(P.hE, { children: e }), (0, a.jsx)(P.CK, {})] });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, a.jsxs)(P.Ay, {
            children: [
                (0, a.jsx)(P.hE, { className: U()(Q.Ot, Q.QB), children: K.intl.string(K.t.KPowgn) }),
                (0, a.jsx)(P.tK, { children: K.intl.string(K.t.j8734b) }),
                (0, a.jsx)("div", {
                    className: U()(Q.eT, Q.QB),
                    children: (0, a.jsx)(B.$, { text: K.intl.string(K.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, a.jsx)(ec.Q, {
                    text: K.intl.string(K.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(t9.A.getArticleURL(b.MVz.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, a.jsxs)(P.Ay, {
            children: [
                (0, a.jsx)(P.hE, { className: Q.QB, children: K.intl.string(K.t.csrAMJ) }),
                (0, a.jsx)(P.tK, { children: K.intl.string(K.t["m1+IBn"]) }),
                (0, a.jsx)("div", {
                    className: Q.eT,
                    children: (0, a.jsx)(B.$, {
                        text: K.intl.string(K.t["qsI+EH"]),
                        fullWidth: !0,
                        onClick: () => this.setState({ continueOnWeb: !0 }),
                    }),
                }),
            ],
        });
    }
    renderVerification(e) {
        let { sentVerification: t } = this.state;
        return (0, a.jsxs)(P.Ay, {
            children: [
                (0, a.jsx)(P._V, { src: n(792525), className: Q.QB }),
                (0, a.jsx)(P.hE, { children: K.intl.format(K.t["ivLUf/"], { username: e.username }) }),
                (0, a.jsx)(P.tK, { className: Q.QX, children: K.intl.string(K.t["8Su18+"]) }),
                (0, a.jsx)("div", {
                    className: Q.eT,
                    children: (0, a.jsx)(B.$, {
                        text: t ? K.intl.string(K.t.CMa9Rv) : K.intl.string(K.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, a.jsx)("div", {
                    className: Q.Ot,
                    children: (0, a.jsx)(ec.Q, {
                        text: K.intl.string(K.t.Po9eBQ),
                        textVariant: "text-sm/normal",
                        onClick: this.refreshUser,
                    }),
                }),
            ],
        });
    }
    renderAuthenticated(e, t, n) {
        let { transitionTo: l } = this.props,
            i = this.getErrorMessage(e);
        return (0, a.jsx)(iS, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: l,
            children: (0, a.jsxs)(P.Ay, {
                children: [
                    (0, a.jsx)(n1, { giftCode: e }),
                    (0, a.jsx)("div", {
                        className: Q.eT,
                        children: (0, a.jsx)(B.$, {
                            text: K.intl.string(K.t.n6I6k4),
                            fullWidth: !0,
                            disabled: null != i,
                            onClick: this.handleAccept,
                        }),
                    }),
                    null != i
                        ? (0, a.jsx)(P.tK, { className: Q.QX, children: i })
                        : (0, a.jsx)(P.ME, {
                              className: Q.QX,
                              children: K.intl.format(K.t.NYM08s, {
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
                giftCode: l,
                isResolved: i,
                isAccepting: s,
                transitionTo: r,
                location: o,
            } = this.props,
            { fetchingUser: u, continueOnWeb: c } = this.state;
        if (e === b.fAW.OPEN && !c) return this.renderAppOpened();
        if (e === b.fAW.OPENING) return this.renderSpinner(K.intl.string(K.t["Z+hCVU"]));
        if (s) return this.renderSpinner(K.intl.string(K.t.bhJseN));
        if (null == l) return i ? this.renderExpiredInvite() : this.renderSpinner(K.intl.string(K.t.b3lf1c));
        if (i) {
            if (n) {
                let e = this.state.currentUser;
                return u || null == e
                    ? this.renderSpinner(K.intl.string(K.t.bYb2nS))
                    : this.requiresVerification && null != e
                      ? this.renderVerification(e)
                      : this.renderAuthenticated(l, e, t);
            }
            return "login" === this.getMode()
                ? (0, a.jsx)(lL, { giftCode: l, transitionTo: r, location: o })
                : (0, a.jsx)(iv, { giftCodeSKU: t, giftCode: l, transitionTo: r, location: o });
        }
        return null;
    }
}
let iC = h.Ay.connectStores([nA.A, nH.A, eQ.default, nK.A, ed.A, nF.A], (e) => {
    let t = e.match.params.giftCode,
        n = nA.A.get(t),
        l = null != n ? nK.A.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: l,
        libraryApplication: null != l && n?.entitlementBranches != null ? nz.YI(n.entitlementBranches, l, nH.A) : null,
        authenticated: eQ.default.isAuthenticated(),
        defaultRoute: ed.A.defaultRoute,
        isResolved: nA.A.getIsResolved(t),
        isAccepting: nA.A.getIsAccepting(t),
        libraryApplicationsFetched: nH.A.fetched,
        nativeAppState: nF.A.getState(t),
    };
})(iI);
function iS(e) {
    let { sku: t, children: n, giftCodeCode: l, transitionTo: i } = e,
        s = (0, nW.bF)(t);
    return (o.useEffect(() => {
        null != l && s && i(b.BVt.APP_WITH_GIFT_CODE(l));
    }, [s, l, i]),
    s)
        ? (0, a.jsxs)(P.Ay, {
              children: [(0, a.jsx)(P.hE, { children: K.intl.string(K.t.b3lf1c) }), (0, a.jsx)(P.CK, {})],
          })
        : n;
}
var iT = n(871194),
    iy = n(799365),
    ib = n(894778),
    iR = n(315290),
    iO = n(396574),
    iL = n(94654);
h.Ay.initialize();
class iP extends o.PureComponent {
    componentDidMount() {
        (0, k.d)("guildTemplate"),
            iO.VP || eY.A.launch("discord://" + b.BVt.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && eS.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return iO.VP
            ? (0, a.jsx)("div", { className: Q.eT, children: (0, a.jsx)(B.$, { text: e, fullWidth: !0, onClick: t }) })
            : (0, a.jsx)(P.KE, { className: Q.eT });
    }
    renderSpinner(e) {
        return (0, a.jsxs)(P.Ay, { children: [(0, a.jsx)(P.hE, { children: e }), (0, a.jsx)(P.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, a.jsxs)(P.Ay, {
            children: [
                (0, a.jsx)(P.hE, { className: U()(Q.Ot, Q.QB), children: K.intl.string(K.t.C7ZRNw) }),
                (0, a.jsx)(P.tK, { children: K.intl.string(K.t.A6MwXE) }),
                this.renderButton(K.intl.string(K.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, a.jsxs)(P.Ay, {
            children: [
                (0, a.jsx)(P.hE, { className: Q.QB, children: K.intl.string(K.t.csrAMJ) }),
                (0, a.jsx)(P.tK, { children: K.intl.string(K.t["m1+IBn"]) }),
                this.renderButton(K.intl.string(K.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (eV()(null != e, "guild template must not be null"), e.state === lE.QB.RESOLVING)
            ? (0, a.jsx)(P.Ay, { className: iL.sL, children: (0, a.jsx)(iy.A, { guildTemplate: e }) })
            : (0, a.jsx)(iD, { guildTemplate: e });
    }
    renderContinue() {
        return (0, a.jsxs)(P.Ay, {
            children: [
                (0, a.jsx)(P.hE, { children: K.intl.string(K.t.fOc4gn) }),
                this.renderButton(K.intl.string(K.t.fIv16B), this.handleContinue),
            ],
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: l, location: i } = this.props;
        if (null == e) return this.renderSpinner(K.intl.string(K.t.ZTNur7));
        if (t === b.fAW.OPEN) return this.renderAppOpened();
        if (t === b.fAW.OPENING) return this.renderSpinner(K.intl.string(K.t["Z+hCVU"]));
        switch (e.state) {
            case lE.QB.RESOLVING:
                return this.renderSpinner(K.intl.string(K.t["Z+hCVU"]));
            case lE.QB.RESOLVED:
                if (n || !iO.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, a.jsx)(lL, { guildTemplate: e, transitionTo: l, location: i });
                return (0, a.jsx)(iv, {
                    guildTemplate: e,
                    transitionTo: l,
                    location: i,
                    onRegister: () => {
                        (0, i_.C)(ij.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            ib.A.flowStart(iR.do.ORGANIC_GUILD_TEMPLATES, iR.ju.NUF_STARTED);
                    },
                });
            case lE.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function iD(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: l } = (0, iT.A)(t, !1);
    ib.A.flowStep(iR.do.ORGANIC_GUILD_TEMPLATES, iR.jC.GUILD_CREATE);
    let i = (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(P.hE, { className: iL.wx, children: K.intl.string(K.t.UNFvtM) }),
            n,
            (0, a.jsx)("div", {
                className: iL.Tf,
                children: (0, a.jsx)(B.$, { text: K.intl.string(K.t.xr59t7), fullWidth: !0, onClick: l }),
            }),
        ],
    });
    return (0, a.jsx)(le, {
        className: iL.sL,
        children: () => [
            (0, a.jsx)(lt.A, { guildTemplate: t }, "template"),
            (0, a.jsx)("div", { className: iL.KJ, children: i }, "contents"),
        ],
    });
}
function ik(e, t, n) {
    e.preventDefault(),
        T.default.track(b.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        });
    let l = eQ.default.getFingerprint(),
        i = null != l ? l : eQ.default.getId();
    eS.A.openMobileApp(n.state === lE.QB.RESOLVED ? t : void 0, i);
}
function iw(e) {
    let { code: t } = e,
        n = (0, h.bG)([eC.A], () => eC.A.getGuildTemplate(t));
    return (o.useEffect(() => {
        (0, k.d)("guild_template_mobile");
    }, []),
    null == n || n.state === lE.QB.RESOLVING)
        ? (0, a.jsx)(P.Ay, { children: (0, a.jsx)(eL.y, {}) })
        : n.state === lE.QB.RESOLVED
          ? (0, a.jsxs)(P.Ay, {
                children: [
                    (0, a.jsx)(iy.A, { guildTemplate: n, tall: !0 }),
                    (0, a.jsx)("div", {
                        className: Q.QX,
                        children: (0, a.jsx)(B.$, {
                            text: K.intl.string(K.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => ik(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, a.jsx)(e8, {
                text: K.intl.string(K.t["e/rZ2n"]),
                buttonCta: K.intl.string(K.t.HAvYn0),
                onClick: (e) => ik(e, t, n),
            });
}
h.Ay.initialize(), n(938796);
var iG = n(821418),
    iU = n(665260),
    iM = n(362474),
    iB = n(695366),
    iV = n(964486),
    iF = n(921037),
    iW = n(4274);
h.Ay.initialize();
let iH = "register",
    iK = "login";
function iz(e) {
    let { message: t, onClick: n, invite: l, className: i } = e,
        s = l?.guild_scheduled_event != null;
    return iO.VP
        ? (0, a.jsx)("div", {
              className: i ?? (s ? Q.QX : Q.eT),
              children: (0, a.jsx)(B.$, { text: t, onClick: n, variant: s ? "active" : "primary", fullWidth: !0 }),
          })
        : (0, a.jsx)(P.KE, { className: i ?? Q.eT });
}
function iQ(e) {
    let { invite: t, inviteKey: n, handleAccept: l, handleDefaultTransition: i } = e,
        s = (0, h.bG)([e5.A], () => (t.state === b.elq.ERROR ? e5.A.getInviteError(n) : void 0)),
        r = t.guild_scheduled_event,
        o = s?.code === b.t02.INVALID_CANNOT_FRIEND_SELF;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)(P.Ay, {
                children: [
                    null != r
                        ? (0, a.jsx)(im, { channel: t.channel, guildScheduledEvent: r })
                        : (0, a.jsx)(n6.A, { invite: t }),
                    null != s &&
                        (0, a.jsx)("div", {
                            className: Q.QX,
                            role: "alert",
                            children: (0, a.jsxs)(M.E, {
                                variant: "text-sm/medium",
                                color: "text-feedback-critical",
                                style: { display: "flex", alignItems: "center", gap: 4 },
                                children: [
                                    (0, a.jsx)(iB.E, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                                    " ",
                                    (0, iW.s)(s.code),
                                ],
                            }),
                        }),
                    (0, a.jsx)(iz, {
                        invite: t,
                        message: K.intl.string(o ? K.t.fIv16B : K.t.ohMvm1),
                        onClick: o ? i : l,
                        className: null != s ? Q.QX : void 0,
                    }),
                ],
            }),
            null != r &&
                null != t.guild &&
                (0, a.jsx)(P.Ay, {
                    className: Q.QX,
                    children: (0, a.jsx)(ix, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                }),
        ],
    });
}
function iY(e) {
    let { invite: t, rpcConnected: n, onContinue: l } = e;
    return (0, a.jsxs)(P.Ay, {
        children: [
            (0, a.jsx)(n6.A, { invite: t }),
            iO.VP
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("div", {
                              className: Q.QX,
                              children: (0, a.jsx)(B.$, {
                                  text: K.intl.string(K.t.UQvCf7),
                                  onClick: function () {
                                      T.default.track(b.HAw.INVITE_CTA_CLICKED, {
                                          action: "open_app",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          n ? p.Ay.openNativeAppModal(t.code) : p.Ay.openApp(t.code);
                                  },
                                  variant: "primary",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, a.jsx)("div", {
                              className: Q.Ot,
                              children: (0, a.jsx)(B.$, {
                                  text: K.intl.string(K.t["2ixEBi"]),
                                  onClick: function () {
                                      T.default.track(b.HAw.INVITE_CTA_CLICKED, {
                                          action: "continue_in_browser",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          l?.();
                                  },
                                  variant: "secondary",
                                  fullWidth: !0,
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(P.KE, { className: Q.eT }),
        ],
    });
}
function iX(e) {
    let { title: t } = e;
    return (0, a.jsxs)(P.Ay, { children: [(0, a.jsx)(P.hE, { children: t }), (0, a.jsx)(P.CK, {})] });
}
function iq(e) {
    let { banned: t, handleDefaultTransition: n } = e;
    return (0, a.jsxs)(P.Ay, {
        children: [
            (0, a.jsx)(P.hE, { className: U()(Q.Ot, Q.QB), children: K.intl.string(K.t.kux01N) }),
            (0, a.jsx)(P.tK, { children: t ? K.intl.string(K.t["5AkWAd"]) : K.intl.string(K.t["+qUJAj"]) }),
            (0, a.jsx)(iz, { message: K.intl.string(K.t.fIv16B), onClick: n }),
            (0, a.jsx)("div", {
                className: Q.Ot,
                style: { textAlign: "left" },
                children: (0, a.jsx)(ec.Q, {
                    size: "sm",
                    textVariant: "text-sm/medium",
                    text: K.intl.string(K.t.urIwn4),
                    onClick: () => window.open(t9.A.getArticleURL(b.MVz.INVALID_INVITES), "_blank"),
                }),
            }),
        ],
    });
}
function i$(e) {
    let { handleDefaultTransition: t } = e;
    return (0, a.jsxs)(P.Ay, {
        children: [
            (0, a.jsx)(P.hE, { children: K.intl.string(K.t.fOc4gn) }),
            (0, a.jsx)(iz, { message: K.intl.string(K.t.fIv16B), onClick: t }),
        ],
    });
}
var iZ = n(334465);
let iJ = (0, n(600975).C)({
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
var i0 = n(163050);
h.Ay.initialize();
var i1 = n(701273);
function i2(e) {
    n.g.location.assign(e);
}
h.Ay.initialize(), n(426620), h.Ay.initialize();
let i7 = nL(lL),
    i8 = nL(function (e) {
        let t = o.useCallback(
                (t) => {
                    let n;
                    ((n = (0, iZ.B)(t, { path: b.BVt.CHANNEL(t2.pv.guildId(), t2.pv.channelId()) })),
                    +(n?.params?.channelId !== j.VV.ROLE_SUBSCRIPTIONS))
                        ? (e.transitionTo ?? D.pX)(t)
                        : D.bG(t);
                },
                [e.transitionTo],
            ),
            { isAuthenticated: n, loginStatus: l } = (0, h.cf)([eQ.default], () => ({
                isAuthenticated: eQ.default.isAuthenticated(),
                loginStatus: eQ.default.getLoginStatus(),
            })),
            { location: i, redirectTo: s } = e,
            [r, c] = o.useState(n);
        function d(e) {
            let { handoffKey: t, handoffToken: n, handoffSource: l } = e;
            (0, E.Qh)({ handoffKey: t, handoffToken: n, handoffSource: l }), c(!1);
        }
        return ((0, iV.Ay)(() => {
            if (null != i) {
                let { handoff_key: e, handoff_token: t } = (0, u.parse)(i.search);
                if (null != e && null != t) {
                    let n = null != s ? C(s) : void 0;
                    r
                        ? f.A.logout("handoff", null).finally(() => {
                              d({ handoffKey: e, handoffToken: t, handoffSource: n });
                          })
                        : d({ handoffKey: e, handoffToken: t, handoffSource: n });
                }
            }
        }),
        r || l === b.aUe.LOGGING_IN)
            ? (0, a.jsx)(P.Ay, { children: (0, a.jsx)(eL.y, {}) })
            : (0, a.jsx)(lL, { ...e, transitionTo: t });
    }),
    i3 = nL(function (e) {
        let { inviteKey: t, location: n, transitionTo: l, login: i } = e,
            s = (0, h.bG)([e5.A], () => e5.A.getInvite(t)),
            r = (0, h.bG)([nF.A], () => nF.A.getState(t)),
            u = (0, h.bG)([eQ.default], () => eQ.default.isAuthenticated()),
            c = (0, h.bG)([ed.A], () => ed.A.defaultRoute),
            d = (0, h.bG)([lU], () => lU.isUnderageAnonymous()),
            [m, f] = o.useState(!1);
        o.useLayoutEffect(() => {
            (r === b.fAW.OPEN || s?.state === b.elq.APP_OPENED) && f(!0);
        }, [s?.state, r]);
        let x = i ? iK : iH,
            A = o.useCallback((e) => p.Ay.getInviteContext(e, s), [s]),
            E = o.useCallback(
                (e) => {
                    null != s &&
                        (null != s.channel || e?.channel != null) &&
                        (s.guild?.id != null
                            ? l(b.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(s.code))
                            : p.Ay.transitionToInvite(e ?? s, l));
                },
                [s, l],
            ),
            _ = o.useCallback(() => {
                T.default.track(b.HAw.INVITE_CTA_CLICKED, {
                    action: "accept_invite",
                    invite_code: s?.code,
                    guild_id: s?.guild?.id,
                }),
                    p.Ay.acceptInvite({
                        inviteKey: t,
                        context: A(b.S3d.INVITE),
                        skipOnboarding: !0,
                        callback: (e) => {
                            el(e), null != e.channel && p.Ay.openApp(t, e.channel.id);
                        },
                    }).catch(() => {});
            }, [t, A, s?.code, s?.guild?.id]),
            N = o.useCallback(() => {
                l(c);
            }, [c, l]);
        if (
            ((0, iV.Ay)(() => {
                let e = eQ.default.getAnalyticsToken();
                if (
                    (null != e &&
                        g.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eQ.default.getId() }),
                    T.default.track(b.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }),
                    (0, k.d)("invite"),
                    iO.VP || eY.A.launch("discord://" + b.BVt.INVITE(t), () => void 0),
                    !i && d)
                ) {
                    let { baseCode: e } = (0, eX.y$)(t);
                    (0, D.bG)(b.BVt.INVITE_LOGIN(e));
                }
            }),
            o.useEffect(() => {
                s?.state === b.elq.APP_NOT_OPENED && E();
            }, [s?.state, E]),
            (function (e) {
                let {
                        invite: t,
                        inviteKey: n,
                        authenticated: l,
                        nativeAppState: i,
                        mode: s,
                        getAcceptInviteContext: r,
                        handleContinue: a,
                        transitionTo: u,
                    } = e,
                    c = (0, n7.A)(l),
                    d = (0, n7.A)(i);
                o.useEffect(() => {
                    if (s === iK && l && !1 === c) {
                        let e = eQ.default.getFingerprint();
                        if (null != e) {
                            let l = (0, ez.d)(e);
                            T.default.track(b.HAw.INVITE_LOGIN_SUCCESSFUL, {
                                invite_code: (0, eX.m0)(n),
                                guild_id: t?.guild?.id,
                                channel_id: t?.channel?.id,
                                inviter_id: t?.inviter?.id,
                                prev_user_id: l,
                            });
                        }
                        p.Ay.acceptInvite({
                            inviteKey: n,
                            context: r(b.S3d.INVITE),
                            skipOnboarding: !0,
                            callback: a,
                        }).catch(() => {});
                    }
                }, [l, c, s, r, a, t, n]),
                    o.useEffect(() => {
                        if (null != t && s === iH && l && !1 === c) {
                            let { channel: e } = t;
                            if (null != e)
                                if (((0, i_.C)(ij.zY.INVITE_UNCLAIMED), null != t.guild)) {
                                    let e = (0, iU.Lt)(t.flags ?? 0, iG.Q.IS_APPLICATION_BYPASS),
                                        n =
                                            t.guild.features?.includes(
                                                b.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED,
                                            ) &&
                                            t.guild.features?.includes(
                                                b.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL,
                                            );
                                    !e && n
                                        ? u(b.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id))
                                        : u(b.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code));
                                } else p.Ay.transitionToInvite(t, u);
                        }
                    }, [t, l, c, u, s]),
                    o.useEffect(() => {
                        null == t ||
                            (i !== d &&
                                (i === b.fAW.OPEN
                                    ? T.default.track(
                                          b.HAw.INVITE_APP_INVOKED,
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
                                    : i === b.fAW.OPEN_FAIL &&
                                      T.default.track(b.HAw.INVITE_APP_INVOKE_FAILED, {
                                          invite_code: (0, eX.m0)(n),
                                          reason: "rpc_failed",
                                          invite_type: null != t.type ? tr.Xd[t.type] : void 0,
                                      })));
                    }, [t, i, d, n]);
            })({
                invite: s,
                inviteKey: t,
                authenticated: u,
                nativeAppState: r,
                mode: x,
                getAcceptInviteContext: A,
                handleContinue: E,
                transitionTo: l,
            }),
            null == s)
        )
            return null;
        let j = r === b.fAW.OPEN;
        if (m || j || s.state === b.elq.APP_OPENED)
            return (0, a.jsx)(iY, { invite: s, rpcConnected: j, onContinue: E });
        let { state: v } = s;
        if (v === b.elq.APP_NOT_OPENED) return (0, a.jsx)(i$, { handleDefaultTransition: N });
        if ([b.elq.RESOLVING, b.elq.ACCEPTING, b.elq.APP_OPENING].includes(v)) {
            let e =
                v === b.elq.ACCEPTING ? K.intl.string(K.t["6wsY16"]) : (b.elq.RESOLVING, K.intl.string(K.t["Z+hCVU"]));
            return (0, a.jsx)(iX, { title: e });
        }
        if (v === b.elq.EXPIRED) return (0, a.jsx)(iq, { banned: !1, handleDefaultTransition: N });
        if (v === b.elq.BANNED) return (0, a.jsx)(iq, { banned: !0, handleDefaultTransition: N });
        if (v === b.elq.RESOLVED) {
            if (u && (0, iU.Lt)(s.flags ?? 0, iG.Q.IS_GUEST_INVITE))
                return (
                    p.Ay.openApp(s.code),
                    iM.u.set(iF.B, s.code),
                    (0, a.jsx)(iY, { invite: s, rpcConnected: j, onContinue: () => l(b.BVt.APP) })
                );
            if (!u && iO.VP)
                return x === iK
                    ? (0, a.jsx)(lL, { invite: s, transitionTo: l, location: n })
                    : (0, a.jsx)(iv, {
                          invite: s,
                          onLoginStart: function () {
                              T.default.track(b.HAw.INVITE_LOGIN, {
                                  invite_code: s?.code,
                                  guild_id: s?.guild?.id,
                                  channel_id: s?.channel?.id,
                                  inviter_id: s?.inviter?.id,
                              });
                          },
                          location: n,
                          transitionTo: l,
                      });
        }
        return v === b.elq.RESOLVED || v === b.elq.ERROR
            ? (0, a.jsx)(iQ, { invite: s, inviteKey: t, handleAccept: _, handleDefaultTransition: N })
            : null;
    }),
    i4 = nL(function (e) {
        let t = {
            guildTemplate: (0, h.bG)([eC.A], () => eC.A.getGuildTemplate(e.code)),
            nativeAppState: (0, h.bG)([nF.A], () => nF.A.getState(e.code)),
            authenticated: (0, h.bG)([eQ.default], () => eQ.default.isAuthenticated()),
            defaultRoute: (0, h.bG)([ed.A], () => ed.A.defaultRoute),
        };
        return (0, a.jsx)(iP, { ...e, ...t });
    }),
    i6 = nL(iC),
    i5 = nL(function (e) {
        let { inviteKey: t, transitionTo: n } = e,
            l = (0, h.bG)([e5.A], () => e5.A.getInvite(t));
        return (
            o.useEffect(() => {
                let e = eQ.default.getAnalyticsToken();
                null != e &&
                    g.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eQ.default.getId() }),
                    (0, k.d)("invite_mobile"),
                    T.default.track(b.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 });
            }, []),
            (0, a.jsx)(tY, {
                invite: l,
                onAcceptInvite: function (e) {
                    let n, i, s, r;
                    e?.preventDefault(),
                        T.default.track(
                            b.HAw.INVITE_APP_OPENED,
                            {
                                invite_code: (0, eX.m0)(t),
                                guild_id: l?.guild?.id,
                                channel_id: l?.channel?.id,
                                inviter_id: l?.inviter?.id,
                                invite_type: null != l && l?.type != null ? tr.Xd[l?.type] : void 0,
                                user_is_member: null != l && null != l.guild && null != e6.A.getGuild(l.guild.id),
                                size_total: l?.approximate_member_count,
                                time_to_click_ms: Math.round(performance.now()),
                            },
                            { flush: !0 },
                        ),
                        (n = null != l && l.state !== b.elq.EXPIRED && l.state !== b.elq.BANNED ? t : void 0),
                        (s = null != (i = eQ.default.getFingerprint()) ? i : eQ.default.getId()),
                        (r = null != l && l?.type != null ? Number(l?.type) : void 0),
                        p.Ay.openApp(n, void 0, s, void 0, r);
                },
                transitionTo: n,
            })
        );
    }),
    i9 = nL(iv),
    se = nL(function (e) {
        let { location: t, transitionTo: l = D.pX } = e,
            [i, s] = o.useState("submitting");
        function r() {
            return "Android" === eW().os.family || "iOS" === eW().os.family
                ? null
                : (0, a.jsx)(B.$, {
                      text: K.intl.string(K.t.dKhVQN),
                      fullWidth: !0,
                      onClick: () => l(b.BVt.LOGIN, { source: "authorizeIPAdress" }),
                  });
        }
        return ((0, iV.Ay)(() => {
            (0, k.d)("authorize_ip");
            let e = (0, eh.A)(t);
            null == e
                ? s("failed")
                : (async () => {
                      try {
                          await f.A.authorizeIPAddress(e), s("succeeded");
                      } catch (e) {
                          s("failed");
                      }
                  })();
        }),
        "failed" === i)
            ? (0, a.jsxs)(P.Ay, {
                  children: [
                      (0, a.jsx)("img", { alt: "", src: n(792009), className: Q.SX }),
                      (0, a.jsx)(P.hE, { className: Q.QB, children: K.intl.string(K.t["f/54az"]) }),
                      (0, a.jsx)(P.tK, { className: Q.C2, children: K.intl.string(K.t.i3ehMr) }),
                      r(),
                  ],
              })
            : "succeeded" === i
              ? (0, a.jsxs)(P.Ay, {
                    children: [
                        (0, a.jsx)("img", { alt: "", src: n(841406), className: Q.SX }),
                        (0, a.jsx)(P.hE, { className: Q.QB, children: K.intl.string(K.t.iG0SlK) }),
                        (0, a.jsx)(P.tK, { className: Q.C2, children: K.intl.string(K.t["Elv+qt"]) }),
                        r(),
                    ],
                })
              : (0, a.jsxs)(P.Ay, {
                    children: [(0, a.jsx)(P.CK, {}), (0, a.jsx)(P.hE, { children: K.intl.string(K.t["9exy+V"]) })],
                });
    }),
    st = nL(function (e) {
        let { location: t } = e,
            [l, i] = o.useState("submitting");
        return (o.useEffect(() => {
            (0, k.d)("authorize_payment");
            let e = (0, eh.A)(t);
            null == e
                ? i("failed")
                : (async () => {
                      try {
                          await f.A.authorizePayment(e), i("succeeded");
                      } catch (e) {
                          i("failed");
                      }
                  })();
        }, [t]),
        "failed" === l)
            ? (0, a.jsxs)(P.Ay, {
                  children: [
                      (0, a.jsx)("img", { alt: "", src: n(678985), className: Q.SX }),
                      (0, a.jsx)(P.hE, { className: Q.QB, children: K.intl.string(K.t.GHRpue) }),
                      (0, a.jsx)(P.tK, { className: Q.C2, children: K.intl.string(K.t["1nO55v"]) }),
                  ],
              })
            : "succeeded" === l
              ? (0, a.jsxs)(P.Ay, {
                    children: [
                        (0, a.jsx)("img", { alt: "", src: n(586430), className: Q.SX }),
                        (0, a.jsx)(P.hE, { className: Q.QB, children: K.intl.string(K.t.ihHX53) }),
                        (0, a.jsx)(P.tK, { className: Q.C2, children: K.intl.string(K.t["pGPCv+"]) }),
                    ],
                })
              : (0, a.jsxs)(P.Ay, {
                    children: [(0, a.jsx)(P.CK, {}), (0, a.jsx)(P.hE, { children: K.intl.string(K.t.T3vC7n) })],
                });
    }),
    sn = nL(function (e) {
        let { location: t, transitionTo: n = i2 } = e,
            [l, i] = o.useState("submitting"),
            s = o.useRef(void 0);
        (0, iV.Ay)(() => {
            (0, k.d)("verify_email");
            let e = (0, eh.A)(t);
            null == e
                ? i("failed")
                : (async () => {
                      try {
                          let t = await f.A.verify(e);
                          i("succeeded"), (s.current = t);
                      } catch (e) {
                          i("failed");
                      }
                  })();
        });
        let r = o.useCallback(() => {
                n(b.BVt.LOGIN, { source: "verify_email" });
            }, [n]),
            u = o.useCallback(() => {
                T.default.track(b.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: s.current }),
                    (0, i1.A)("verify_email");
            }, []);
        return "failed" === l
            ? (0, a.jsx)(eD, {
                  title: K.intl.string(K.t["PCgG3+"]),
                  subtitle: K.intl.string(K.t.tQpeA3),
                  buttonText: K.intl.string(K.t.dKhVQN),
                  onButtonClick: r,
              })
            : "succeeded" === l
              ? (0, a.jsx)(eD, {
                    title: K.intl.string(K.t["dAfGb+"]),
                    buttonText: K.intl.string(K.t["uJWIj/"]),
                    onButtonClick: u,
                    image: (0, a.jsx)(ey, { alt: K.intl.string(K.t["dAfGb+"]) }),
                })
              : (0, a.jsx)(eD, {
                    title: K.intl.string(K.t["0c8+5n"]),
                    subtitle: K.intl.string(K.t.ULTCBE),
                    loading: !0,
                });
    }),
    sl = nL(function () {
        let [e, t] = o.useState(""),
            [l, i] = o.useState(""),
            [s, r] = o.useState(!1),
            [u, c] = o.useState(!1),
            [d, m] = o.useState(null),
            [g, f] = o.useState(null),
            x = (0, h.bG)([eE.A], () => eE.A.getCountryCode()),
            p = x.code.split(" ")[0];
        async function A() {
            try {
                await ep.A.resendCode(e);
            } catch (e) {
                f(e.body.message);
            }
        }
        async function E() {
            r(!0);
            try {
                let { token: t } = await ep.A.verifyPhone(p + e, l);
                m(null), f(null), c(!0), ep.A.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (m(null), f(e.body.message)) : (m(e.body.phone), f(e.body.code));
            } finally {
                r(!1);
            }
        }
        let _ = (0, a.jsxs)(P.Ay, {
            children: [
                (0, a.jsx)(P._V, { src: n(142041) }),
                (0, a.jsxs)(P.hE, {
                    className: U()(Q.QX, eN.Uu, eN.wq, eN.Hu),
                    children: [
                        K.intl.string(K.t.WWzQta),
                        (0, a.jsx)(ex.y, { size: "md", color: "currentColor", className: Q.oY }),
                    ],
                }),
            ],
        });
        return u
            ? _
            : (0, a.jsxs)(P.Ay, {
                  children: [
                      (0, a.jsx)(P.hE, { children: K.intl.string(K.t.o4JNrO) }),
                      (0, a.jsx)(P.tK, { className: Q.Ot, children: K.intl.string(K.t.y0tVbq) }),
                      (0, a.jsxs)(P.eB, {
                          className: Q.QX,
                          children: [
                              (0, a.jsx)(e_.A, {
                                  label: K.intl.string(K.t["eJnn0+"]),
                                  alpha2: x.alpha2,
                                  countryCode: p,
                                  value: e,
                                  autoComplete: "off",
                                  spellCheck: "false",
                                  onChange: t,
                                  forceMode: eA.Pd.PHONE,
                                  error: d,
                              }),
                              (0, a.jsx)(P.pd, {
                                  className: Q.QX,
                                  label: K.intl.string(K.t.OdzNbm),
                                  value: l,
                                  onChange: i,
                                  maxLength: 6,
                                  error: g,
                              }),
                              (0, a.jsx)(ec.Q, { text: K.intl.string(K.t["5b60gi"]), onClick: A }),
                              (0, a.jsx)("div", {
                                  className: Q.QX,
                                  children: (0, a.jsx)(B.$, {
                                      text: K.intl.string(K.t.i4jeWR),
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
    si = nL(i0.A),
    ss = nL(nB),
    sr = nL(ef),
    sa = nL(function (e) {
        let { location: t } = e,
            [n, l] = o.useState(!1),
            { verifySuccess: i, verifyErrors: s, redirectGuildId: r } = (0, h.bG)([eM], () => eM.getState());
        function u() {
            let e, t;
            (e = (function (e) {
                let t = eW().os?.family;
                if ("Android" === t || "iOS" === t) {
                    let t = eQ.default.getFingerprint(),
                        n = (0, eK.I_)();
                    return (
                        eV()(null != e, "generateAppPath: guildId cannot be null"),
                        (0, eK.Ay)((0, eH.jN)(e), { utmSource: "verify_hub_email", fingerprint: t, attemptId: n })
                    );
                }
                return "discord://";
            })(r)),
                null != (t = (0, eK.X7)(e)) &&
                    T.default.track(b.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, ez.v)(t.fingerprint),
                        attempt_id: t.attemptId,
                        source: t.utmSource,
                    }),
                eY.A.launch(e, (e) => {
                    e || (0, D.bG)(ed.A.fallbackRoute);
                }),
                l(!0);
        }
        return (o.useEffect(() => {
            let e = (0, eh.A)(t);
            eb.A.verify(e), (0, k.d)("verify_hub_email");
        }, [t]),
        n)
            ? (0, a.jsx)(eD, {
                  title: K.intl.string(K.t.csrAMJ),
                  subtitle: K.intl.string(K.t["m1+IBn"]),
                  buttonText: K.intl.string(K.t.fIv16B),
                  onButtonClick: () => (0, D.pX)(b.BVt.CHANNEL(r)),
              })
            : i
              ? (0, a.jsx)(eD, {
                    title: K.intl.string(K.t["dAfGb+"]),
                    buttonText: K.intl.string(K.t["uJWIj/"]),
                    onButtonClick: u,
                    image: (0, a.jsx)(ey, { alt: K.intl.string(K.t["dAfGb+"]) }),
                })
              : null != s
                ? (0, a.jsx)(eD, {
                      title: K.intl.string(K.t["PCgG3+"]),
                      subtitle: K.intl.string(K.t.tQpeA3),
                      buttonText: K.intl.string(K.t["uJWIj/"]),
                      onButtonClick: u,
                  })
                : (0, a.jsx)(eD, {
                      title: K.intl.string(K.t["0c8+5n"]),
                      subtitle: K.intl.string(K.t.ULTCBE),
                      loading: !0,
                  });
    }),
    so = nL(function (e) {
        let { match: t, location: n } = e;
        async function l(e, t) {
            await (0, nD.W)(t0.XK.CHANNEL, {
                guildId: e.params.guildId,
                channelId: e.params.channelId,
                messageId: e.params.messageId,
                search: t.search,
            });
        }
        return (0, a.jsx)(nG, { match: t, location: n, attemptDeepLink: l });
    }),
    su = nL(function (e) {
        let { match: t, location: n } = e;
        async function l(e) {
            await (0, nD.W)(t0.XK.GAME_SHOP, {
                guildId: e.params.guildId,
                pageIndex: e.params.pageIndex,
                skuId: e.params.skuId,
                slug: e.params.slug,
            });
        }
        return (0, a.jsx)(nG, { match: t, location: n, attemptDeepLink: l });
    }),
    sc = nL(function (e) {
        let { match: t, location: n } = e;
        async function l(e, t) {
            await (0, nD.W)(t0.XK.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search,
            });
        }
        return (0, a.jsx)(nG, { match: t, location: n, attemptDeepLink: l });
    }),
    sd = nL(function (e) {
        let { location: t } = e,
            n = (0, h.bG)([eQ.default], () => eQ.default.isAuthenticated()),
            l = (0, h.bG)([eI.A], () => eI.A.hasLoadedExperiments),
            i = iJ.useExperiment({ location: "RSL - Landing Page" }, { autoTrackExposure: !0 }).enabled,
            [s, r] = o.useState(!1),
            [u, c] = o.useState(K.intl.string(K.t["9exy+V"])),
            [d, m] = o.useState(!0);
        function g(e) {
            switch (e) {
                case b.t02.INVALID_FORM_BODY:
                case b.t02.DSA_RSL_REPORT_NOT_FOUND:
                    c(K.intl.string(K.t.bzXDfc));
                    break;
                case b.t02.DSA_RSL_ALREADY_REQUESTED:
                    c(K.intl.string(K.t.rV00wq));
                    break;
                case b.t02.DSA_RSL_LIMITED_TIME:
                    c(K.intl.string(K.t["0dI29h"]));
                    break;
                case b.t02.DSA_RSL_REPORT_INELIGIBLE:
                    c(K.intl.string(K.t["RGa/Gb"]));
                    break;
                default:
                    c(K.intl.string(K.t["0QLzfv"]));
            }
        }
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
                l || i || f.A.getExperiments();
            }, [l, i]),
            o.useEffect(() => {
                async function e(e) {
                    try {
                        let t = null != e ? await (0, t5.q)(e) : void 0;
                        null != t ? c(K.intl.string(K.t.e6mZMt)) : g(t.body?.code);
                    } catch (e) {
                        g(e.body?.code);
                    } finally {
                        r(!1);
                    }
                }
                r(!0), e((0, eh.A)(t)), (0, k.d)("report_second_look");
            }, [t]),
            i &&
                !d &&
                (0, a.jsxs)(P.Ay, {
                    children: [(0, a.jsx)(P.hE, { className: Q.QB, children: u }), s && (0, a.jsx)(eL.y, {})],
                })
        );
    }),
    sm = nL(et),
    sh = nL(function (e) {
        let { match: t, location: l } = e,
            i = (0, u.parse)(l.search).token,
            [s, r] = o.useState("loading"),
            c = o.useRef(!1),
            m = o.useCallback(async (e) => {
                try {
                    T.default.track(b.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                        await f.A.oneTimeLogin(e),
                        r("login_success"),
                        T.default.track(b.HAw.LOGIN_SUCCESSFUL, { source: "web_page", login_method: "one_time_login" }),
                        n.g.location.assign(b.BVt.APP);
                } catch (t) {
                    let e = t instanceof Error ? t.message : "Unknown error";
                    T.default.track(b.HAw.ONE_TIME_LOGIN_ERROR, {
                        source: "web_page",
                        error_reason: "api_error",
                        error_message: e,
                    }),
                        r("error");
                }
            }, []),
            h = o.useCallback((e) => {
                let t = eQ.default.getFingerprint() ?? eQ.default.getId(),
                    n = `discord://login/one-time?token=${encodeURIComponent(e)}`;
                eY.A.launch(n, (e) => {
                    e
                        ? (T.default.track(b.HAw.DEEP_LINK_CLICKED, {
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
                    let t = eQ.default.getFingerprint() ?? eQ.default.getId(),
                        l = eQ.default.getInstallationForTracking();
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((n) => {
                            let { default: i } = n;
                            i.request(b.e$_.DEEP_LINK, {
                                type: t0.XK.ONE_TIME_LOGIN,
                                params: { token: e, fingerprint: t, installationId: l },
                            })
                                .then((n) => {
                                    n
                                        ? (T.default.track(b.HAw.DEEP_LINK_CLICKED, {
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
                                .then(() => i.disconnect());
                        });
                },
                [h],
            );
        if (
            (o.useEffect(() => {
                let e = null != i && "string" == typeof i,
                    t = d.Fr ? "mobile" : d.v1 ? "tablet" : (0, tX.isDesktop)() ? "desktop_app" : "web";
                if ((T.default.track(b.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: e, device_type: t }), !e))
                    return void r("error");
                if (d.Fr || d.v1) {
                    let e = T.default.getSuperProperties()?.os;
                    T.default.track(b.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_ui_shown",
                        device_type: t,
                        platform: e,
                    });
                    return;
                }
                (0, tX.isDesktop)() ? m(i) : c.current || ((c.current = !0), r("rpc_attempting"), g(i));
            }, [i, l, m, g]),
            d.Fr || d.v1)
        ) {
            let e = null == i || "string" != typeof i ? "missing_token" : "invalid_token";
            return (0, a.jsx)(tJ, { token: i, hasError: "error" === s, errorReason: e });
        }
        if ((0, D.MX)()) return null;
        if ("app_launched" === s)
            return (0, a.jsx)(t1, {
                title: K.intl.string(K.t.RvUUOy),
                subtitle: K.intl.string(K.t["5/lR0g"]),
                buttonText: K.intl.string(K.t["2ixEBi"]),
                buttonOnClick: () => {
                    T.default.track(b.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: s }), m(i);
                },
            });
        if ("app_launch_not_supported" === s)
            return (0, a.jsx)(t1, {
                title: K.intl.string(K.t.qq4tjT),
                subtitle: K.intl.string(K.t.CVxYRo),
                buttonText: K.intl.string(K.t["2ixEBi"]),
                buttonOnClick: () => m(i),
            });
        if ("error" === s) {
            let e = null == i || "string" != typeof i ? "missing_token" : "invalid_token";
            return (0, a.jsx)(t1, {
                title: K.intl.string(K.t.RtCSr1),
                subtitle: K.intl.string(K.t["S+YjYJ"]),
                buttonText: K.intl.string(K.t.j3cG2p),
                buttonOnClick: () => {
                    T.default.track(b.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                        (0, D.pX)(b.BVt.LOGIN);
                },
            });
        }
        return (0, a.jsx)(P.Ay, { children: (0, a.jsx)(P.CK, {}) });
    });
class sg extends o.PureComponent {
    state = { splash: null, redirectTo: null, backgroundId: null };
    static getDerivedStateFromProps(e, t) {
        let { invite: n, location: l } = e,
            { backgroundId: i } = t,
            s = (0, u.parse)(l.search).redirect_to ?? null;
        (null == s || "" === s || s.startsWith(b.BVt.ME) || (!(0, m.e)(s) && !eo(s))) && (s = null);
        let r = null;
        if (null == n) r = (0, n_.u8)(s);
        else {
            let { guild: e, target_application: t } = n;
            null != t
                ? null != i && (r = (0, nE.uD)(t.id, i, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (r = e9.Ay.getGuildSplashURL({ id: e.id, splash: e.splash }));
        }
        return { redirectTo: s, splash: r };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        null != e &&
            (!t && n && f.A.getExperiments(!0),
            T.default.track(
                b.HAw.INVITE_OPENED,
                { invite_code: (0, eX.m0)(e), load_time: nj.getTimeSinceNavigationStart() },
                { flush: !0 },
            )),
            t && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            L.initialize(),
            (0, k.D)();
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
        if (e?.state === b.elq.RESOLVED) {
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
        let { invite: t } = await p.Ay.resolveInvite(e, b.S3d.INVITE, { withGames: !0 });
        if (null != t && (el(t), null != t.type && tr.uR.has(t.type))) {
            if ("denied" === (await ev()))
                return void T.default.track(b.HAw.INVITE_APP_INVOKE_FAILED, {
                    invite_code: (0, eX.m0)(e),
                    reason: "lna_denied",
                    invite_type: tr.Xd[t.type],
                });
            p.Ay.openNativeAppModal(e);
        }
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (T.default.track(
                b.HAw.GUILD_TEMPLATE_OPENED,
                { guild_template_code: e, load_time: nj.getTimeSinceNavigationStart() },
                { flush: !0 },
            ),
            eS.A.resolveGuildTemplate(e),
            eS.A.openNativeAppModal(e));
    }
    resolveGiftCode() {
        let { giftCode: e } = this.props;
        null != e &&
            x.A.resolveGiftCode(e, !0, !0).then((t) => {
                null != t && null == t.giftCode.promotion && g.h.wait(() => x.A.openNativeGiftCodeModal(e));
            });
    }
    render() {
        let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
        return (0, a.jsxs)(nP.A, {
            splash: e,
            children: [
                (0, a.jsx)(en.A, { path: b.BVt.LOGIN_HANDOFF, render: (e) => (0, a.jsx)(i8, { ...e, redirectTo: t }) }),
                (0, a.jsx)(en.A, { path: b.BVt.LOGIN_ONE_TIME, render: (e) => (0, a.jsx)(sh, { ...e }) }),
                (0, a.jsx)(en.A, {
                    impressionName: c.ImpressionNames.USER_LOGIN,
                    path: b.BVt.LOGIN,
                    render: (e) => (0, a.jsx)(i7, { ...e, redirectTo: t }),
                }),
                (0, a.jsx)(en.A, {
                    impressionName: c.ImpressionNames.USER_REGISTRATION,
                    path: b.BVt.REGISTER,
                    render: (e) => (0, a.jsx)(i9, { ...e, redirectTo: t }),
                }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, a.jsx)(i6, { login: !0, ...e }),
                }),
                (0, a.jsx)(en.A, { path: b.BVt.GIFT_CODE(":giftCode"), render: (e) => (0, a.jsx)(i6, { ...e }) }),
                (0, a.jsx)(en.A, {
                    path: [b.BVt.INVITE_LOGIN(":inviteCode"), b.BVt.INVITE(":inviteCode")],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n,
                                },
                                location: l,
                                transitionTo: i,
                            } = e,
                            s = (0, eX.fB)(t, l.search);
                        return d.Fr || d.v1
                            ? (0, a.jsx)(i5, { inviteKey: s, transitionTo: i }, s)
                            : (0, a.jsx)(
                                  i3,
                                  {
                                      inviteKey: s,
                                      location: l,
                                      transitionTo: i,
                                      login: n === b.BVt.INVITE_LOGIN(":inviteCode"),
                                  },
                                  s,
                              );
                    },
                }),
                (0, a.jsx)(en.A, {
                    path: [
                        b.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                        b.BVt.GUILD_TEMPLATE(":guildTemplateCode"),
                    ],
                    render: (e) => {
                        let {
                            match: {
                                params: { guildTemplateCode: t },
                                path: n,
                            },
                            location: l,
                            transitionTo: i,
                        } = e;
                        return d.Fr || d.v1
                            ? (0, a.jsx)(iw, { code: t }, t)
                            : (0, a.jsx)(i4, {
                                  code: t,
                                  location: l,
                                  transitionTo: i,
                                  login: n === b.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, a.jsx)(en.A, { path: b.BVt.VERIFY, render: (e) => (0, a.jsx)(sn, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.VERIFY_HUB_EMAIL, render: (e) => (0, a.jsx)(sa, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.VERIFY_REQUEST, render: (e) => (0, a.jsx)(sl, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.DISABLE_EMAIL_NOTIFICATIONS, render: (e) => (0, a.jsx)(ss, { ...e }) }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, a.jsx)(sr, { ...e }),
                }),
                (0, a.jsx)(en.A, { path: b.BVt.AUTHORIZE_IP, render: (e) => (0, a.jsx)(se, { ...e }) }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.REJECT_IP,
                    render: (e) => (0, a.jsx)(si, { source: b.BVt.REJECT_IP, ...e }),
                }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.REJECT_MFA,
                    render: (e) => (0, a.jsx)(si, { source: b.BVt.REJECT_MFA, ...e }),
                }),
                (0, a.jsx)(en.A, { path: b.BVt.AUTHORIZE_PAYMENT, render: (e) => (0, a.jsx)(st, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.RESET, render: (e) => (0, a.jsx)(si, { source: b.BVt.RESET, ...e }) }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, a.jsx)(sc, { ...e }),
                }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.CHANNELS_GAME_SHOP(t2.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, a.jsx)(su, { ...e }),
                }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.CHANNEL(t2.pv.guildId(), t2.pv.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, a.jsx)(so, { ...e }),
                }),
                (0, a.jsx)(en.A, { path: b.BVt.REPORT, render: () => (0, a.jsx)(np, {}) }),
                (0, a.jsx)(en.A, { path: b.BVt.REPORT_SECOND_LOOK, render: (e) => (0, a.jsx)(sd, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.ACCOUNT_REVERT(":token"), render: (e) => (0, a.jsx)(sm, { ...e }) }),
            ],
        });
    }
}
let sf = h.Ay.connectStores([eQ.default, e5.A, nA.A, eI.A, eC.A], (e) => {
    let { match: t, location: n } = e,
        l = t?.params?.inviteCode,
        i = null != l ? (0, eX.fB)(l, n.search) : void 0,
        s = t?.params?.giftCode,
        r = t?.params?.guildTemplateCode;
    return {
        inviteKey: i,
        isAuthenticated: eQ.default.isAuthenticated(),
        giftCode: s,
        guildTemplateCode: r,
        gift: null != s ? nA.A.get(s) : null,
        invite: null != i ? e5.A.getInvite(i) : null,
        guildTemplate: null != r ? eC.A.getGuildTemplate(r) : null,
        hasLoadedExperiments: eI.A.hasLoadedExperiments,
    };
})(sg);
