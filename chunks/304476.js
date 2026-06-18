n.r(t), n.d(t, { default: () => sx });
var i,
    l,
    s,
    r,
    a = n(627968),
    o = n(64700),
    d = n(492462),
    c = n(562708),
    u = n(607399),
    h = n(470562),
    m = n(17928),
    g = n(228366),
    x = n(830215),
    f = n(869038),
    p = n(376728),
    A = n(636537),
    E = n(6981),
    _ = n(376943),
    j = n(718446),
    N = n(746080),
    v = n(355097),
    C =
        (((i = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (i.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        i);
function I(e) {
    let t = decodeURIComponent(e),
        n = (0, _.vu)(t);
    return null != n && n.channelId === N.VV.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t.toLowerCase() === (0, j.settingsPathToRoute)(v.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)
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
        let { handoffKey: t, handoffToken: n, fingerprint: i, handoffSource: l } = e;
        null != n
            ? A.Bo.post({ url: b.Rsh.HANDOFF_EXCHANGE, body: { key: t, handoff_token: n }, rejectWithError: !1 }).then(
                  (e) => {
                      let { body: t } = e;
                      (0, E.uA)(t.user), x.A.loginToken(t.token, !1), R(!0, l);
                  },
                  (e) => {
                      null != i && R(!1, l),
                          x.A.setFingerprint(i),
                          (0, E.mZ)(),
                          l === C.ROLE_SUBSCRIPTION &&
                              T.default.track(b.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
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
            i = S.A.key;
        null != i && S.A.isHandoffAvailable()
            ? this.handleHandoff({ handoffKey: i, handoffToken: t, fingerprint: n, handoffSource: void 0 })
            : (x.A.setFingerprint(null), (0, E.J0)());
    };
}
let L = new O();
var k = n(854378),
    D = n(976860),
    P = n(210714),
    w = n(430690),
    G = n(503698),
    B = n.n(G),
    U = n(834730),
    V = n(821609),
    M = n(181658),
    F = n(625494),
    W = n(499785),
    H = (((l = {}).START = "start"), (l.PASSWORD = "password"), (l.SUCCESS = "success"), (l.FAILED = "failed"), l),
    z = n(375708),
    K = n(244460),
    Q = n(818050);
function X(e) {
    let { setOriginalEmail: t, setSlide: i, ready: l, token: s } = e,
        [r, d] = o.useState(!1),
        [u, h] = o.useState(null),
        [m, g] = o.useState(null),
        [x, f] = o.useState(""),
        p = o.useRef(null);
    return (
        o.useEffect(() => {
            l && p.current?.focus();
        }, [l]),
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(k._V, { src: null == m ? n(79418) : n(579656), className: B()(Q.SX, Q.Ot) }),
                (0, a.jsx)(k.hE, { children: z.intl.string(z.t.IfBQ56) }),
                null != m && "" !== m
                    ? (0, a.jsx)(U.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: m })
                    : null,
                (0, a.jsxs)(k.eB, {
                    className: B()(Q.SX, Q.QX),
                    children: [
                        (0, a.jsx)(k.pd, {
                            name: "password",
                            type: "password",
                            label: z.intl.string(z.t["8dM4FO"]),
                            setRef: p,
                            className: Q.SX,
                            value: x,
                            onChange: f,
                            error: u,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: z.intl.string(z.t["yY/PXY"]),
                        }),
                        (0, a.jsx)("div", {
                            className: Q.Ot,
                            children: (0, a.jsx)(V.$, {
                                text: z.intl.string(z.t.ezv91b),
                                fullWidth: !0,
                                onClick: () => {
                                    if (!r) {
                                        if (0 === x.length) {
                                            h(z.intl.string(z.t.R98xD5)), F._.dispatch(b.jej.WAVE_EMPHASIZE);
                                            return;
                                        }
                                        return (
                                            null != m && g(null),
                                            null != u && h(null),
                                            t(""),
                                            d(!0),
                                            W.A.post({
                                                url: b.Rsh.ACCOUNT_REVERT,
                                                body: { token: s, password: x },
                                                trackedActionData: { event: c.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    f(""), t(n), i(H.SUCCESS);
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        g(
                                                            z.intl.formatToPlainString(z.t.aTVNes, {
                                                                statusPageURL: b.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new M.A(e);
                                                        t.hasFieldErrors()
                                                            ? h(t.getAnyErrorMessage())
                                                            : g(
                                                                  (function (e) {
                                                                      switch (e) {
                                                                          case b.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                              return z.intl.string(z.t["11zzGR"]);
                                                                          case b.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                              return z.intl.string(z.t["6qmgaI"]);
                                                                          case b.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                              return z.intl.string(z.t.bChnKs);
                                                                          default:
                                                                              return z.intl.format(z.t.aTVNes, {
                                                                                  statusPageURL: b.qF7.STATUS,
                                                                              });
                                                                      }
                                                                  })(t.code).toString(),
                                                              );
                                                    }
                                                    F._.dispatch(b.jej.WAVE_EMPHASIZE);
                                                })
                                                .finally(() => {
                                                    d(!1);
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
                    className: K.UD,
                    children: (0, a.jsx)(V.$, {
                        text: z.intl.string(z.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: () => {
                            f(""), i(H.START);
                        },
                    }),
                }),
            ],
        })
    );
}
var Y = n(825484),
    q = n(749314);
function $(e) {
    let { children: t } = e;
    return (0, a.jsx)("li", {
        className: K.Aw,
        children: (0, a.jsx)(U.E, { variant: "text-sm/medium", color: "text-default", children: t }),
    });
}
function Z(e) {
    let { setSlide: t, transitionTo: i } = e;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(k._V, { src: n(79418), className: B()(Q.SX, Q.Ot) }),
            (0, a.jsx)(k.hE, { className: Q.QB, children: z.intl.string(z.t["8UcxI6"]) }),
            (0, a.jsx)(U.E, { variant: "text-md/normal", children: z.intl.string(z.t.O37hMl) }),
            (0, a.jsxs)(k.eB, {
                className: B()(Q.SX, Q.QX),
                children: [
                    (0, a.jsx)(U.E, { variant: "text-sm/normal" }),
                    (0, a.jsxs)("ul", {
                        className: K.qI,
                        children: [
                            (0, a.jsx)($, { children: z.intl.string(z.t.Gj1Zry) }),
                            (0, a.jsx)(q.A, {}),
                            (0, a.jsx)($, { children: z.intl.string(z.t["8C6t3B"]) }),
                            (0, a.jsx)(q.A, {}),
                            (0, a.jsx)($, { children: z.intl.string(z.t.mToZMA) }),
                            (0, a.jsx)(q.A, {}),
                            (0, a.jsx)($, { children: z.intl.string(z.t.TPEvkc) }),
                            (0, a.jsx)(q.A, {}),
                            (0, a.jsx)($, { children: z.intl.string(z.t.H8Y1Ln) }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)(Y.e, {
                direction: "vertical",
                fullWidth: !0,
                className: K.UD,
                children: [
                    (0, a.jsx)(V.$, { text: z.intl.string(z.t.GgCRqR), onClick: () => t(H.PASSWORD) }),
                    (0, a.jsx)(V.$, {
                        text: z.intl.string(z.t["B/yHcQ"]),
                        variant: "secondary",
                        onClick: () => i(b.BVt.LOGIN, { source: "account_revert" }),
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
            (0, a.jsx)(k._V, { src: n(79418), className: B()(Q.SX, Q.Ot) }),
            (0, a.jsx)(k.hE, { children: z.intl.string(z.t.ailkVG) }),
            (0, a.jsx)(k.tK, { children: z.intl.format(z.t["4ZMVCI"], { email: t }) }),
            (0, a.jsx)(U.E, {
                className: B()(Q.QB, Q.QX),
                variant: "text-md/normal",
                children: z.intl.string(z.t["dpAn+8"]),
            }),
        ],
    });
}
function ee(e) {
    let { transitionTo: t, token: n, width: i } = e,
        [l, s] = o.useState(H.START),
        [r, d] = o.useState(null),
        [u, h] = o.useState(""),
        m = { impression_group: c.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, a.jsx)("div", {
        style: { margin: "8px" },
        children: (0, a.jsxs)(w.t, {
            activeSlide: l,
            width: i,
            onSlideReady: d,
            children: [
                (0, a.jsx)(w.q, {
                    id: H.START,
                    impressionProperties: m,
                    impressionName: c.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, a.jsx)(Z, { setSlide: s, transitionTo: t }),
                }),
                (0, a.jsx)(w.q, {
                    id: H.PASSWORD,
                    impressionProperties: m,
                    impressionName: c.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, a.jsx)(X, {
                        setOriginalEmail: h,
                        setSlide: s,
                        transitionTo: t,
                        ready: r === H.PASSWORD,
                        token: n,
                    }),
                }),
                (0, a.jsx)(w.q, {
                    id: H.SUCCESS,
                    impressionProperties: m,
                    impressionName: c.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, a.jsx)(J, { email: u }),
                }),
            ],
        }),
    });
}
m.Ay.initialize();
class et extends o.PureComponent {
    static defaultProps = { transitionTo: D.pX, replaceWith: D.bG };
    componentDidMount() {
        (0, P.d)("account_revert");
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
async function ed(e) {
    let t = (0, el.A)();
    try {
        var n;
        let i,
            l,
            s = (await A.Bo.post({ url: b.Rsh.HANDOFF, body: { key: t }, oldFormErrors: !0, rejectWithError: !0 })).body
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
var ec = n(123292),
    eu = n(650048),
    eh = n(860689),
    em = n(396681);
m.Ay.initialize();
class eg extends o.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, guild: null };
    componentDidMount() {
        let e = (0, em.A)(this.props.location),
            t = (0, d.parse)(this.props.location.search);
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
                    n = (0, eh.dangerouslyConstructGuildRecordFromUntypedObject)(t);
                this.setState({ success: !0, busy: !1, guild: n });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, P.d)("disable_server_highlight_notifications");
    }
    renderBusy() {
        return (0, a.jsx)(k.Ay, { children: (0, a.jsx)(k.CK, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: Q.QB, children: z.intl.string(z.t.Z33eiP) }),
                (0, a.jsx)(k.tK, { children: z.intl.format(z.t.NRWtfC, { guildName: n.name }) }),
                (0, a.jsx)("div", {
                    className: Q.eT,
                    children: (0, a.jsx)(V.$, { text: z.intl.string(z.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, a.jsx)("div", {
                    className: Q.Ot,
                    children: (0, a.jsx)(ec.Q, {
                        text: z.intl.string(z.t["cGmT/J"]),
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
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k._V, { src: n(37772), className: Q.SX }),
                (0, a.jsx)(k.hE, { className: Q.QB, children: z.intl.string(z.t.ox9hIS) }),
                (0, a.jsx)(k.tK, { children: z.intl.string(z.t["/dcuR5"]) }),
                (0, a.jsx)("div", {
                    className: Q.eT,
                    children: (0, a.jsx)(V.$, { text: z.intl.string(z.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let ex = m.Ay.connectStores([eu.A], () => ({ defaultRoute: eu.A.defaultRoute }))(eg);
var ef = n(628284),
    ep = n(557722),
    eA = n(628387),
    eE = n(148864),
    e_ = n(354948);
n(53516);
var ej = n(653307);
let eN = ["loopback-network", "local-network-access"];
async function ev() {
    if ("u" < typeof navigator || null == navigator.permissions) return "unknown";
    for (let e of eN)
        try {
            return (await navigator.permissions.query({ name: e })).state;
        } catch {}
    return "unknown";
}
var eC = n(736056),
    eI = n(122906),
    eS = n(121623),
    eT = n(31008);
function ey(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s = 288, height: r = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: r },
        src: eT.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var eb = n(154672),
    eR = n(331322),
    eO = n(534514),
    eL = n(289873),
    ek = n(794347);
function eD(e) {
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
                !r && (0, a.jsx)(V.$, { onClick: s, text: i, variant: "overlay-primary" }),
            ],
        }),
    });
}
let eP = !1,
    ew = null,
    eG = null;
class eB extends m.Ay.Store {
    static displayName = "HubEmailVerificationStore";
    getState() {
        return { verifySuccess: eP, verifyErrors: ew, redirectGuildId: eG };
    }
}
let eU = new eB(g.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        (eP = !0), (ew = null), (eG = t);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        (eP = !1), (ew = t);
    },
});
var eV = n(284009),
    eM = n.n(eV),
    eF = n(481613),
    eW = n.n(eF),
    eH = n(400253),
    ez = n(742821),
    eK = n(80703),
    eQ = n(495544),
    eX = n(877062);
m.Ay.initialize();
var eY = n(842241),
    eq = n(922139),
    e$ = n(280513),
    eZ = n(717421),
    eJ = n(661531),
    e0 = n(993077),
    e1 = n(235986),
    e2 = n(592743);
function e7(e) {
    let { text: t, buttonCta: i, onClick: l } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(k._V, { src: n(431979) }),
            (0, a.jsx)(k.hE, { className: B()(Q.QX, Q.QB, ej.tR), children: z.intl.string(z.t.eL5z0i) }),
            (0, a.jsx)(k.tK, { className: Q.C2, children: z.intl.string(z.t.poAv63) }),
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
                                style: { color: eJ.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, a.jsx)("div", {
                                className: e2.x6,
                                children: (0, a.jsx)(V.$, { text: i, fullWidth: !0, onClick: l }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e4(e) {
    let { text: t, buttonCta: n, theme: i = b.NJ8.DARK, onClick: l } = e;
    return (0, a.jsx)(k.Ay, { theme: i, children: (0, a.jsx)(e7, { text: t, buttonCta: n, onClick: l }) });
}
var e3 = n(765671),
    e8 = n(9994),
    e6 = n(71393),
    e9 = n(299091),
    e5 = n(486020),
    te = n(403362),
    tt = n(778712),
    tn = n(47167),
    ti = n(769015),
    tl = n(714991),
    ts = n(427262),
    tr = n(172799),
    ta = n(330936),
    to = n(82210);
let td = (e) => {
        let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
        return 0 === t.memberCount ? null : t;
    },
    tc = (e) => e.target_type === tr.yV.STREAM && null != e.target_user,
    tu = (e) => e.channel?.type === b.rbe.GROUP_DM,
    th = (e) => null == e.channel && null == e.guild && null != e.inviter,
    tm = (e) => e.state === b.elq.ACCEPTED,
    tg = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    tx = (e) => {
        let t;
        return !tg(e) && (!!th(e) || (null != e.inviter && !tm(e) && ((t = td(e)), !((t?.memberCount ?? 0) > 100))));
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
function tp(e) {
    let { invite: t, textClassName: n, className: i } = e,
        l = td(t);
    return null == l || tx(t) || t?.guild?.id === ta.TA
        ? null
        : (0, a.jsx)(k.R1, {
              className: B()(to.He, i),
              online: l.onlineCount,
              total: l.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function tA(e) {
    let { invite: t, showBigUserIcon: n } = e,
        i = o.useMemo(
            () =>
                n
                    ? null
                    : tc(t) && null != t.target_user
                      ? e5.Ay.getUserAvatarURL(t.target_user)
                      : tx(t) && null != t.inviter
                        ? e5.Ay.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        l = z.intl.string(z.t["3rE1P8"]);
    return (
        tu(t)
            ? (l =
                  t.channel?.name != null && t.inviter?.username != null
                      ? z.intl.format(z.t.Lu4h18, { username: t.inviter.username })
                      : z.intl.string(z.t.OsdY8B))
            : tc(t) && null != t.target_user
              ? (l = z.intl.formatToPlainString(z.t.x2L32Q, { username: t.target_user.username }))
              : tm(t)
                ? (l = z.intl.string(z.t["FDsl+J"]))
                : tx(t) &&
                  null != t.inviter &&
                  (l = z.intl.format(z.t.spU2mI, { username: ts.Ay.getFormattedName(t.inviter) })),
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
        { user: l, guild: s, channel: r, application: o, showBigUserIcon: d } = e,
        c = (0, tn.Ay)(r);
    if (null != s)
        d && null == o && (t = (0, a.jsx)(k.$v, { guild: s, size: k.$v.Sizes.SMALL })),
            (n = s.name),
            null != o &&
                ((n = o.name),
                (i = (0, a.jsxs)("div", {
                    className: to.JB,
                    children: [
                        (0, a.jsx)(k.tK, { className: to.R9, children: z.intl.string(z.t["3gg9fF"]) }),
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
        null != c && "" !== c
            ? ((n = c), null != r.icon && (t = (0, a.jsx)(k.F4, { channel: r, size: tt._3.SIZE_32 })))
            : (n = e);
    } else if (null != l) {
        let e = ts.Ay.getFormattedName(l);
        (n = z.intl.formatToPlainString(z.t["4aF92R"], { username: e })),
            (i = (0, a.jsx)(k.tK, { className: to.b$, children: z.intl.format(z.t.Quj7HX, { username: e }) }));
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
    tv = n(548118),
    tC = n(557582),
    tI = n(167630),
    tS = n(367048);
function tT(e) {
    let { guildScheduledEvent: t, channel: n, onAcceptInvite: i, isSubmitting: l } = e;
    return (0, a.jsxs)("div", {
        className: tS.s4,
        children: [
            (0, a.jsx)(tC.Ay, {
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
                    children: (0, a.jsx)(tI.A, { guildScheduledEvent: t, channel: n }),
                }),
            (0, a.jsx)("div", {
                className: tS.xG,
                children: (0, a.jsx)(V.$, {
                    variant: "active",
                    size: "md",
                    text: z.intl.string(z.t.riu2R5),
                    onClick: i,
                    loading: l,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
function ty(e) {
    let { invite: t } = e,
        n = null != t.guild ? (0, eh.DY)(t.guild) : null;
    if (null == n) return null;
    let i = n.description ?? "";
    return (0, a.jsxs)("div", {
        className: tS.kQ,
        children: [
            (0, a.jsx)(eO.D, { className: tS.s7, variant: "text-sm/medium", children: z.intl.string(z.t.Eabu1z) }),
            (0, a.jsxs)("div", {
                className: tS.bo,
                children: [
                    (0, a.jsx)(tv.Ay, { guild: n, active: !0, size: tv.Ay.Sizes.MEDIUM }),
                    (0, a.jsxs)("div", {
                        className: tS.bW,
                        children: [
                            (0, a.jsxs)(U.E, {
                                className: tS.J5,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, a.jsx)(tl.A, { guild: n, className: tS.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, a.jsx)(tp, { invite: t, textClassName: tS.kS, className: tS.pe }),
                        ],
                    }),
                ],
            }),
            i.length > 0 &&
                (0, a.jsx)("details", {
                    className: tS.x_,
                    children: (0, a.jsx)(U.E, { color: "text-default", variant: "text-sm/normal", children: i }),
                }),
        ],
    });
}
function tb(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: l } = e,
        { guild_scheduled_event: s } = t;
    return null != s
        ? (0, a.jsx)(tT, { guildScheduledEvent: s, channel: n, isSubmitting: i, onAcceptInvite: l })
        : null;
}
var tR = n(467661);
function tO(e) {
    let { invite: t, onAcceptInvite: n, disableUser: i = !1 } = e;
    if (null == t) return null;
    let l = null != t.guild ? (0, eh.DY)(t.guild) : null,
        s = null != t.channel ? (0, tj.OY)(t.channel) : null,
        r = null != t.target_application ? new t_.Ay(t.target_application) : null,
        o = i || null == t.inviter ? null : new tN.A(t.inviter),
        d =
            !(
                (null != t.approximate_member_count && t.approximate_member_count > 100) ||
                (null != l && l.features.has(b.GuildFeatures.COMMUNITY))
            ) &&
            null != o &&
            tu(t),
        c = ((e) => {
            let { state: t } = e;
            switch (t) {
                case b.elq.ACCEPTING:
                case b.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        u = { invite: t, user: o, guild: l, channel: s, application: r };
    return tg(t)
        ? (0, a.jsx)(tb, { invite: t, channel: s, isSubmitting: c, onAcceptInvite: n })
        : (0, a.jsxs)("div", {
              className: tR.kL,
              children: [
                  (0, a.jsx)(tf, { application: r, guild: l, user: d || th(t) ? o : null }),
                  th(t) ? null : (0, a.jsx)(tA, { ...u, showBigUserIcon: d }),
                  (0, a.jsx)(tE, { ...u, showBigUserIcon: d }),
                  (0, a.jsx)(tp, { ...u }),
                  (0, a.jsx)("div", {
                      className: tR.xG,
                      children: (0, a.jsx)(V.$, {
                          variant: "primary",
                          size: "md",
                          text: z.intl.string(z.t.ohMvm1),
                          onClick: n,
                          loading: c,
                          fullWidth: !0,
                      }),
                  }),
              ],
          });
}
var tL = n(473644),
    tk = n(57930),
    tD = n(115703),
    tP = n(438842),
    tw = n(888849);
function tG(e) {
    let { invite: t, guild: n, profile: i, onAcceptInvite: l } = e,
        { gamesToDisplay: s, lastGameToDisplay: r, remainingGames: o } = (0, tD.A)(i),
        d = (function (e) {
            let { state: t } = e;
            switch (t) {
                case b.elq.ACCEPTING:
                case b.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        c = i.description ?? n.description;
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
                                    null != c &&
                                        "" !== c &&
                                        (0, a.jsx)(U.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: c,
                                        }),
                                    (0, a.jsx)(tP.A, {
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
                className: tw.Fx,
                children: (0, a.jsx)(V.$, {
                    variant: "primary",
                    size: "md",
                    text: z.intl.string(z.t.ohMvm1),
                    onClick: l,
                    loading: d,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
let tB = (0, n(945810).mj)({
        name: "2026-03-mobile-web-invite-server-profile",
        kind: "installation",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    tU = n(843020);
function tV(e) {
    if (null == e || !e$.i.VISIBLE.has(e.visibility)) return !1;
    let t = null != e.description && e.description.length > 0,
        n = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
    return t || n;
}
function tM() {
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
        ? (0, a.jsx)(e7, { text: z.intl.string(z.t["5AkWAd"]), buttonCta: z.intl.string(z.t["8osdkn"]), onClick: n })
        : (0, a.jsx)(e7, { text: z.intl.string(z.t["usP+Mb"]), buttonCta: z.intl.string(z.t["8osdkn"]), onClick: n });
}
function tH(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: i, sectionClassName: l, inviteCardClassName: s = tw.qF } = e,
        { ref: r, height: o } = (0, e3.Ay)(),
        d = (0, eZ.z)({ height: null != o && 0 !== o ? `${o}px` : `${i}px`, config: eq.config.stiff });
    return (0, a.jsxs)(eq.animated.div, {
        className: s,
        style: d,
        children: [
            (0, a.jsx)(eq.animated.div, {
                className: tw.NS,
                style: d,
                children: (0, a.jsx)("section", { ref: r, className: l, children: t }),
            }),
            n,
        ],
    });
}
function tz(e) {
    let { invite: t } = e;
    if (null == t || !tg(t)) return null;
    let n = tF(t);
    return (0, a.jsx)(tH, {
        startAnimHeightPx: 0,
        sectionClassName: tw.ui,
        children: 1 === n ? (0, a.jsx)(ty, { invite: t }) : null,
    });
}
let tK = { 1: tw._r, 2: tw.Gm, 0: tw.Kt };
function tQ(e) {
    let t,
        { invite: n } = e,
        i = tF(n),
        { enabled: l } = tB.useConfig({ location: "AcceptInviteMobile" }),
        s = null != n ? (0, e8.oO)(n) : null,
        r = n?.guild != null ? (0, eh.DY)(n.guild) : null,
        d = null != r && tV(s) && null != n && !tg(n),
        c = l && d;
    o.useEffect(() => {
        d && tB.getConfig({ location: "AcceptInviteMobile.hasProfile" });
    }, [d]);
    let u = o.useRef(!1);
    if (
        (o.useEffect(() => {
            u.current ||
                (null != n &&
                    1 === i &&
                    ((u.current = !0),
                    T.default.track(b.HAw.INVITE_ACCEPT_BUTTON_RENDERED, {
                        invite_code: n.code,
                        guild_id: n.guild?.id,
                        duration_ms_since_page_load: Math.round(performance.now()),
                    })));
        }, [n, i]),
        null == n)
    )
        t = (0, a.jsx)(tM, {});
    else
        switch (i) {
            case 1:
                t = c
                    ? (0, a.jsx)(tG, { invite: n, guild: r, profile: s, onAcceptInvite: e.onAcceptInvite })
                    : (0, a.jsx)(tO, { ...e, invite: n });
                break;
            case 2:
                t = (0, a.jsx)(tW, { ...e, invite: n });
                break;
            default:
                t = (0, a.jsx)(tM, {});
        }
    let h = 1 === i && c ? tw.c4 : tw.qF;
    return (0, a.jsx)(tH, { startAnimHeightPx: 200, sectionClassName: tK[i], inviteCardClassName: h, children: t });
}
function tX(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = t ?? {},
        l = {},
        { enabled: s } = tB.useConfig({ location: "AcceptInviteMobile" }),
        r = null != t ? (0, e8.oO)(t) : null,
        o = null != i && tV(r) && null != t && !tg(t);
    if (i?.splash != null) {
        let e = e5.Ay.getGuildSplashURL({ id: i.id, splash: i.splash });
        null != e && ((l.backgroundImage = `url(${e})`), (l.backgroundSize = "cover"));
    } else s && o && ((l.backgroundImage = `url(${tU})`), (l.backgroundSize = "cover"));
    return (0, a.jsxs)(k.Ay, {
        theme: b.NJ8.DARK,
        className: tw.G3,
        style: l,
        contentClassName: tw.__,
        children: [(0, a.jsx)(tQ, { ...e, onAcceptInvite: n }), (0, a.jsx)(tz, { ...e })],
    });
}
var tY = n(723702);
function tq(e) {
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
    tZ = n(604880);
function tJ(e) {
    let { token: t, hasError: n, errorReason: i } = e;
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
                              children: z.intl.string(z.t.RtCSr1),
                          }),
                          (0, a.jsx)(U.E, {
                              variant: "text-md/normal",
                              className: t$.G3,
                              children: z.intl.string(z.t["S+YjYJ"]),
                          }),
                          (0, a.jsx)(V.$, {
                              variant: "primary",
                              text: z.intl.string(z.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  T.default.track(b.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: i }),
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
                              children: z.intl.string(z.t["9h/0Rl"]),
                          }),
                          (0, a.jsx)(U.E, {
                              variant: "text-md/normal",
                              className: t$.G3,
                              children: z.intl.string(z.t.Wgm7Om),
                          }),
                          (0, a.jsx)(V.$, {
                              variant: "primary",
                              text: z.intl.string(z.t.NydsTd),
                              fullWidth: !0,
                              onClick: () => {
                                  let e, n;
                                  (e = (function (e) {
                                      let t = platform.os?.family;
                                      if ("Android" === t || "iOS" === t) {
                                          let t = eQ.default.getFingerprint(),
                                              n = (0, ez.I_)(),
                                              i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/login/one-time?token=${e}`;
                                          return (0, ez.Ay)(i, {
                                              utmSource: "one-time-login",
                                              fingerprint: t,
                                              attemptId: n,
                                          });
                                      }
                                      return "discord://";
                                  })(t)),
                                      (n = (0, ez.X7)(e)),
                                      T.default.track(b.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                                          detection_type: "mobile_button_clicked",
                                          device_type: u.Fr ? "mobile" : "tablet",
                                          platform: T.default.getSuperProperties()?.os,
                                      }),
                                      null != n &&
                                          T.default.track(b.HAw.DEEP_LINK_CLICKED, {
                                              fingerprint: (0, eK.v)(n.fingerprint),
                                              attempt_id: n.attemptId,
                                              source: n.utmSource,
                                          }),
                                      eX.A.launch(e, (e) => {
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
                (0, a.jsx)(V.$, { onClick: l, text: i, fullWidth: !0 }),
            ],
        }),
    });
};
var t2 = n(463347),
    t7 = n(189213),
    t4 = n(192308),
    t3 = n(347704),
    t8 = n(803306),
    t6 = n(17372),
    t9 = n(369053),
    t5 = n(975571),
    ne = n(928658);
async function nt(e, t) {
    try {
        await (0, t9.TP)(e, t);
    } catch (e) {
        if (null != e && "object" == typeof e && 429 === e.status)
            throw { status: 429, body: { message: z.intl.string(z.t.Z2hIUf) } };
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
                o = async (t) => await (0, t9.G_)(e, s, t),
                d = (n) => {
                    (i = !0),
                        setTimeout(() => {
                            i = !1;
                        }, 0);
                    let l = n?.token;
                    switch (e) {
                        case t6.tY.MESSAGE:
                            (0, ne.bM)(l, t);
                            break;
                        case t6.tY.USER:
                            (0, ne.nQ)(l, t);
                            break;
                        case t6.tY.GUILD:
                            (0, ne.V3)(l, t);
                            break;
                        case t6.tY.MEDIA_TAKEDOWN:
                            (0, ne._Y)(l, t);
                    }
                };
            (0, t4.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("19840").then(n.bind(n, 79779));
                    return (t) =>
                        (0, a.jsx)(e, {
                            ...t,
                            onFormSubmit: o,
                            onResend: r,
                            onSuccess: d,
                            headerText: z.intl.string(z.t.H3Q7U8),
                            confirmButtonText: z.intl.string(z.t["13ofGu"]),
                            impression: { impressionName: c.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            );
        };
    return () => {
        (0, t4.closeAllModals)();
        let t = (t) => nt(e, t);
        (0, t4.openModalLazy)(
            async () => {
                let { default: i } = await n.e("29232").then(n.bind(n, 180275));
                return (n) =>
                    (0, a.jsx)(i, {
                        ...n,
                        onFormSubmit: t,
                        onSuccess: s,
                        headerText: z.intl.string(z.t.ZLRYGU),
                        confirmButtonText: z.intl.string(z.t.PDTjLN),
                        subtitle: e === t6.tY.MEDIA_TAKEDOWN ? z.intl.string(z.t.jt3z8f) : void 0,
                    });
            },
            { onCloseCallback: l, dismissable: !1 },
        );
    };
}
var ni = n(939249),
    nl = n(921853),
    ns = n(750997);
let nr = { [t6.tY.MESSAGE]: z.t.fuqnBC, [t6.tY.USER]: z.t.F4jrRW, [t6.tY.GUILD]: z.t.gH3aMs },
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
                        : (0, a.jsx)(na, { title: z.intl.string(nr[e]), menuType: e, onReopen: n }, e),
                ),
            }),
        });
    };
var nd = n(881636),
    nc = n(913951);
let nu = () => {
    let { goToStep: e } = (0, t3.n)(),
        t = o.useCallback(() => {
            e(nx.DSA);
        }, [e]),
        n = o.useCallback(() => {
            e(nx.TIDA);
        }, [e]);
    return (0, a.jsxs)(eR.B, {
        gap: 8,
        children: [
            (0, a.jsx)(U.E, { variant: "text-md/normal", children: z.intl.string(z.t.bd1h5T) }),
            (0, a.jsxs)("div", {
                className: nc.k,
                children: [
                    (0, a.jsxs)(ni.D, {
                        className: nc.b,
                        onClick: t,
                        children: [
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(U.E, {
                                        variant: "text-md/medium",
                                        children: z.intl.string(z.t["AszWL/"]),
                                    }),
                                    (0, a.jsx)(U.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: z.intl.string(z.t["0Jikui"]),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(nd.u, { size: "sm" }),
                        ],
                    }),
                    (0, a.jsxs)(ni.D, {
                        className: nc.b,
                        onClick: n,
                        children: [
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(U.E, { variant: "text-md/medium", children: z.intl.string(z.t.jMSjZL) }),
                                    (0, a.jsx)(U.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: z.intl.string(z.t.qEaUPS),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(nd.u, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var nh = n(229503);
let nm = () =>
    (0, a.jsxs)(eR.B, {
        gap: 24,
        children: [
            (0, a.jsx)(U.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: z.intl.string(z.t["3zG2Y9"]),
            }),
            (0, a.jsxs)(eR.B, {
                gap: 16,
                children: [
                    (0, a.jsxs)(eR.B, {
                        gap: 8,
                        children: [
                            (0, a.jsx)(U.E, { variant: "text-md/semibold", children: z.intl.string(z.t.CfBo0z) }),
                            (0, a.jsxs)("ul", {
                                className: nh.T,
                                children: [
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)(U.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: z.intl.string(z.t.ofQnNQ),
                                        }),
                                    }),
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)(U.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: z.intl.string(z.t.dFaQGn),
                                        }),
                                    }),
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)(U.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: z.intl.string(z.t.RVNwXh),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(U.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: z.intl.string(z.t.o5azXJ),
                    }),
                    (0, a.jsx)(U.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: z.intl.format(z.t.YETtaY, {
                            policyURL: "https://discord.com/safety/non-consensual-intimate-media-policy-explainer",
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)(eR.B, {
                gap: 8,
                children: [
                    (0, a.jsx)(U.E, { variant: "text-md/semibold", children: z.intl.string(z.t.FJh2zi) }),
                    (0, a.jsx)(U.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: z.intl.format(z.t.R2Q57u, {
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
m.Ay.initialize();
var nx = (((s = {}).SELECTION = "selection"), (s.DSA = "dsa"), (s.TIDA = "tida"), s);
let nf = (e) => {
        let { transitionState: t, onClose: n } = e,
            [i, l] = o.useState(!0),
            [s, r] = o.useState([]),
            [d, c] = o.useState(null),
            u = (0, m.bG)([eQ.default], () => eQ.default.isAuthenticated()),
            h = (0, m.bG)([eC.A], () => eC.A.hasLoadedExperiments),
            g = o.useCallback(() => {
                (0, t9.OY)()
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
                  t8
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => g())
                      .catch(() => l(!1)))
                : g();
        }, [u, g]),
            o.useEffect(() => {
                (async () => {
                    h || (await x.A.getLocationMetadata(), x.A.getExperiments());
                })();
            }, [h]);
        let f = s.filter((e) => e !== t6.tY.MEDIA_TAKEDOWN),
            p = s.includes(t6.tY.MEDIA_TAKEDOWN),
            A = f.length > 0,
            E = A && p,
            _ = i || !h;
        o.useEffect(() => {
            _ || A || p || n();
        }, [_, A, p, n]);
        let j = o.useCallback(() => {
                (0, t4.openModalLazy)(() => Promise.resolve((e) => (0, a.jsx)(nf, { ...e })), { dismissable: !1 });
            }, []),
            N = o.useCallback((e, t) => {
                "selection" !== t && "selection" !== e ? c("selection") : c(e);
            }, []),
            v = o.useMemo(() => nn(t6.tY.MEDIA_TAKEDOWN, j), [j]),
            C = d ?? (E ? "selection" : A ? "dsa" : "tida");
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
                    title: z.intl.string(z.t.Z11w18),
                    subtitle: z.intl.format(z.t["532l+q"], {
                        supportURL: t5.A.getArticleURL(b.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, a.jsx)(no, { dsaCapabilities: f, onReopen: j }),
                });
            if (p)
                return (0, a.jsx)(t7.Modal, {
                    title: z.intl.string(z.t.YignUm),
                    actions: [{ text: z.intl.string(z.t.D5Czbu), variant: "primary", onClick: v }],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, a.jsx)(nm, {}),
                });
        }
        let I = [
            { stepKey: "selection", modalProps: { title: z.intl.string(z.t.Z11w18) }, body: (0, a.jsx)(nu, {}) },
            {
                stepKey: "dsa",
                modalProps: {
                    title: z.intl.string(z.t.Z11w18),
                    subtitle: z.intl.format(z.t["532l+q"], {
                        supportURL: t5.A.getArticleURL(b.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, a.jsx)(no, { dsaCapabilities: f, onReopen: j }),
            },
            {
                stepKey: "tida",
                modalProps: { title: z.intl.string(z.t.YignUm) },
                body: (0, a.jsx)(nm, {}),
                nextButtonProps: { text: z.intl.string(z.t.D5Czbu) },
                onNext: () => (v(), !1),
            },
        ];
        return (0, a.jsx)("div", {
            className: { selection: ng.a, dsa: ng.q, tida: void 0 }[C],
            children: (0, a.jsx)(t3.t, {
                steps: I,
                currentStepKey: C,
                onStepChange: N,
                onClose: n,
                transitionState: t,
                dismissable: !1,
            }),
        });
    },
    np = () => (
        o.useEffect(() => {
            (0, t4.openModalLazy)(() => Promise.resolve((e) => (0, a.jsx)(nf, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
var nA = n(30793),
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
var nv = n(111956),
    nC = n.n(nv),
    nI = n(615300),
    nS = n(319060),
    nT = n(844222),
    ny = n(240248),
    nb = n(115617);
let nR = (0, ny.xI)(nS.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    nO = { friction: 10, tension: 130 },
    nL = function (e) {
        return class extends o.Component {
            timeout;
            anim = new nI.A.Value(0);
            state = { shouldAnimate: !u.Fr };
            componentDidMount() {
                u.Fr || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize());
            }
            handleResize = () => {
                let e = window.innerWidth > nR;
                !this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({ shouldAnimate: e });
            };
            handleResizeDebounced = nC()(this.handleResize, 60);
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
                nI.A.spring(this.anim, { toValue: e, ...nO }).start(t);
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
                            return (0, a.jsx)(nI.A.div, {
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
var nk = n(603647),
    nD = n(970672),
    nP = n(129014),
    nw = n(642277);
let nG = function (e) {
    let { match: t, location: n, attemptDeepLink: i } = e,
        [l, s] = o.useState(0);
    o.useEffect(() => {
        nP.default.once("connected", () => {
            s(1);
        }),
            nP.default.once("disconnected", () => {
                (0, D.pX)((0, nw.W)());
            }),
            nP.default.connect();
    }, []),
        o.useEffect(() => {
            if (0 !== l) return;
            let e = setTimeout(() => (0, D.pX)((0, nw.W)()), 3e3);
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
    if ((0, D.MX)()) return null;
    switch (l) {
        case 1:
            return (0, a.jsxs)(k.Ay, {
                children: [
                    (0, a.jsx)(k.hE, { className: Q.QB, children: z.intl.string(z.t.qllnGm) }),
                    (0, a.jsx)(k.tK, { children: z.intl.string(z.t.SXCxye) }),
                    (0, a.jsx)("div", {
                        className: Q.eT,
                        children: (0, a.jsx)(V.$, {
                            text: z.intl.string(z.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => r(t, n),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: B()(Q.Ot, Q.F1),
                        children: (0, a.jsx)(ec.Q, {
                            text: z.intl.string(z.t["2ixEBi"]),
                            textVariant: "text-sm/normal",
                            onClick: () => (0, D.pX)((0, nw.W)()),
                        }),
                    }),
                ],
            });
        case 0:
        case 2:
            return (0, a.jsxs)(k.Ay, {
                children: [(0, a.jsx)(k.hE, { children: z.intl.string(z.t["Z+hCVU"]) }), (0, a.jsx)(k.CK, {})],
            });
        case 3:
            return (0, a.jsxs)(k.Ay, {
                children: [
                    (0, a.jsx)(k.hE, { className: Q.QB, children: z.intl.string(z.t.csrAMJ) }),
                    (0, a.jsx)(k.tK, { children: z.intl.string(z.t.ghBJz9) }),
                ],
            });
    }
};
var nB = n(723923);
m.Ay.initialize();
class nU extends o.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, em.A)(this.props.location),
            t = (0, d.parse)(this.props.location.search);
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
                    i = new tN.A(n);
                this.setState({ success: !0, busy: !1, user: i, category: t.category });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, P.d)("disable_email_notifications");
    }
    renderBusy() {
        return (0, a.jsx)(k.Ay, { children: (0, a.jsx)(k.CK, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: i } = this.props,
            l = z.intl.formatToPlainString(z.t.YDAohB, { category: t });
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: Q.QB, children: z.intl.string(z.t.f6rdLg) }),
                (0, a.jsx)(k.tK, { children: l }),
                (0, a.jsx)("div", {
                    className: Q.QX,
                    children: (0, a.jsx)(V.$, { text: z.intl.string(z.t.fIv16B), fullWidth: !0, onClick: () => i(n) }),
                }),
                (0, a.jsx)("div", {
                    className: Q.Ot,
                    children: (0, a.jsx)(ec.Q, {
                        text: z.intl.string(z.t.YYTirT),
                        textVariant: "text-sm/normal",
                        onClick: () => i((0, j.settingsPathToRoute)(v.od.NOTIFICATIONS_EMAILS)),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: i } = this.state;
        if (null != i) {
            let e = nB.px.find((e) => e.category === i);
            if (null != e) return this.renderCategorySuccess(i, e.label());
        }
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: tt._3.DEPRECATED_SIZE_100,
                    className: Q.SX,
                }),
                (0, a.jsx)(k.hE, { className: Q.QB, children: z.intl.string(z.t["6U6OMQ"]) }),
                (0, a.jsx)(k.tK, { children: z.intl.string(z.t["yaDJ4/"]) }),
                (0, a.jsx)("div", {
                    className: Q.eT,
                    children: (0, a.jsx)(V.$, { text: z.intl.string(z.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k._V, { src: n(37772), className: Q.SX }),
                (0, a.jsx)(k.hE, { className: Q.QB, children: z.intl.string(z.t.ox9hIS) }),
                (0, a.jsx)(k.tK, { children: z.intl.string(z.t["/dcuR5"]) }),
                (0, a.jsx)("div", {
                    className: Q.eT,
                    children: (0, a.jsx)(V.$, { text: z.intl.string(z.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let nV = m.Ay.connectStores([eu.A], () => ({ defaultRoute: eu.A.defaultRoute }))(nU);
var nM = n(110782),
    nF = n(10088),
    nW = n(871123),
    nH = n(189081),
    nz = n(67480),
    nK = n(45938),
    nQ = n(587895),
    nX = n(242874),
    nY = n(165191),
    nq = n(287809),
    n$ = n(97352),
    nZ = n(615396),
    nJ = n(788868),
    n0 = n(402693);
let n1 = m.Ay.connectStores([nz.A, nQ.A, n$.A, nq.default], (e) => {
    let { giftCode: t } = e,
        n = nz.A.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, nZ.c9)(i) : null,
        application: nQ.A.getApplication(n.applicationId),
        gifter: nq.default.getUser(t.userId),
    };
})(function (e) {
    let { error: t, giftCode: n, gifter: i, sku: l, application: s, subscriptionPlan: r } = e,
        d = null == i ? z.intl.string(z.t.lTGZAl) : z.intl.formatToPlainString(z.t.TjWdPc, { username: i.username }),
        c = l.name;
    return (
        null != r &&
            (c = z.intl.formatToPlainString(r.interval === nJ.WT.MONTH ? z.t.CTpcCZ : z.t["rgPWG/"], {
                skuName: l.name,
                intervalCount: r.intervalCount,
            })),
        (0, a.jsxs)(o.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, a.jsx)(nY.A, { defaultAnimationState: nX.oA.LOOP, giftStyle: n.giftStyle, className: n0.e })
                    : (0, a.jsx)(k.eu, {
                          src: null != i ? i.getAvatarURL(void 0, 100) : null,
                          size: tt._3.DEPRECATED_SIZE_100,
                          className: Q.SX,
                      }),
                null != t
                    ? (0, a.jsxs)(o.Fragment, {
                          children: [
                              (0, a.jsx)(k.tK, { children: z.intl.string(z.t.mDFGFj) }),
                              (0, a.jsx)(k.hE, { children: t }),
                          ],
                      })
                    : (0, a.jsxs)(o.Fragment, {
                          children: [
                              (0, a.jsx)(k.tK, { children: d }),
                              (0, a.jsxs)(k.hE, {
                                  className: B()(Q.Ot, ej.tR),
                                  children: [
                                      l.productLine !== b.EZt.COLLECTIBLES &&
                                          (0, a.jsx)(ti.A, {
                                              size: ti.M.MEDIUM,
                                              className: n0.I,
                                              game: s,
                                              skuId: l.id,
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
    n4 = n(707554),
    n3 = n(379154);
function n8(e) {
    let { loginStatus: t, authBoxClassName: n, onSubmit: i, onCancelAccountDeletion: l } = e,
        s = t === b.aUe.ACCOUNT_DISABLED,
        r = s ? z.intl.string(z.t["j3rC+U"]) : z.intl.string(z.t.ZFWofo),
        o = s ? z.intl.string(z.t["6eNTWe"]) : z.intl.string(z.t["pCBti+"]);
    return (0, a.jsx)(k.Ay, {
        tag: "form",
        onSubmit: i,
        className: n,
        children: (0, a.jsxs)(n4.F, {
            component: (0, a.jsx)(k.hE, { className: Q.QB, children: r }),
            children: [
                (0, a.jsx)(k.tK, { className: Q.SX, children: o }),
                (0, a.jsxs)(k.eB, {
                    children: [
                        (0, a.jsx)(V.$, { text: z.intl.string(z.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, a.jsx)("div", {
                            className: B()(Q.Ot, n3.Qt),
                            children: z.intl.format(z.t.js2rr5, { onClick: l }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var n6 = n(504394),
    n9 = n(275538),
    n5 = n(431870);
function ie(e) {
    let { children: t, className: n, ...i } = e,
        l = t();
    return (0, a.jsx)(k.Ay, {
        ...i,
        className: B()(n, n5.kL),
        contentClassName: n5.Qs,
        children: l.map((e, t) =>
            (0, a.jsx)("div", { className: n5.fi, style: { flexBasis: `${100 / l.length}%` }, children: e }, t),
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
    id = +il.A.Millis.MINUTE,
    ic = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    iu = new Set(["deep_link_failed"]),
    ih = () => {
        ii.w.remove(ia), ii.w.remove(io);
    },
    im = () => {
        let e = (0, m.bG)([eQ.default], () => eQ.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, d.parse)(window.location.search),
            i = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            l = i ?? (null !== e ? e : void 0);
        o.useEffect(() => {
            null !== i && e !== i && g.h.dispatch({ type: "FINGERPRINT", fingerprint: i });
        }, [i, e]);
        let [s, r] = o.useState(null),
            c = o.useCallback(
                (e) => {
                    r(e),
                        T.default.track(
                            b.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                            { reason: e, fingerprint: (0, eK.v)(l) },
                            { fingerprint: l },
                        );
                },
                [r, l],
            ),
            u = ii.w.get(ia);
        if (
            ("null" === n && null === s && c("deep_link_failed"),
            null != n && "null" !== n && null == u && null === s && c("nonce_missing"),
            o.useEffect(() => {
                if (null != u) {
                    let e = ii.w.get(io);
                    (null == e || Date.now() >= e) && (c("nonce_expired"), ih());
                }
            }, [u, c]),
            o.useEffect(() => {
                null != n &&
                    "null" !== n &&
                    null != u &&
                    null == s &&
                    A.Bo.post({ url: b.Rsh.HANDOFF_EXCHANGE, body: { key: u, handoff_token: n }, rejectWithError: !0 })
                        .then((e) => x.A.loginToken(e.body.token, !1))
                        .then(() => {
                            T.default.track(b.HAw.LOGIN_SUCCESSFUL, {
                                source: b.mdB.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, eK.v)(l),
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
                            ih();
                        });
            }, [n, u, s, l, c]),
            null == l)
        )
            return null;
        let h =
            null == s
                ? (0, a.jsxs)(a.Fragment, {
                      children: [z.intl.string(z.t.uJ1JsY), (0, a.jsx)("br", {}), z.intl.string(z.t.GHVWAs)],
                  })
                : iu.has(s)
                  ? z.intl.string(z.t.EPt55r)
                  : ic.has(s)
                    ? z.intl.string(z.t.g87kTp)
                    : void 0;
        return null != s && iu.has(s)
            ? (0, a.jsx)("div", {
                  className: ir.Un,
                  children: (0, a.jsx)(U.E, {
                      color: "interactive-text-default",
                      variant: "text-sm/semibold",
                      children: h,
                  }),
              })
            : (0, a.jsxs)("div", {
                  className: ir.kL,
                  children: [
                      (0, a.jsx)(U.E, { variant: "text-sm/semibold", children: h }),
                      (0, a.jsx)(V.$, {
                          variant: "overlay-primary",
                          text: z.intl.string(z.t.NcC759),
                          onClick: () => {
                              let e = is.A.generateNonce();
                              ii.w.set(ia, e), ii.w.set(io, Date.now() + id);
                              let t = new URL(b.J$u),
                                  n = new URLSearchParams(window.location.search);
                              n.delete("fingerprint"), n.delete("handoff_token");
                              let i = new URLSearchParams();
                              i.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                                  i.set("key", e),
                                  i.set("fingerprint", l),
                                  (t.search = i.toString()),
                                  T.default.track(
                                      b.HAw.DEEP_LINK_CLICKED,
                                      { fingerprint: (0, eK.v)(l), source: "mobile_web_handoff", destination: b.J$u },
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
    ip = n(970573),
    iA = n(364488);
function iE(e) {
    let { onDismiss: t } = e;
    return (
        (0, ix.A)({ type: c.ImpressionTypes.MODAL, name: c.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, a.jsxs)(k.Ay, {
            className: iA.ci,
            children: [
                (0, a.jsx)(k.hE, { children: z.intl.string(z.t.bVbB63) }),
                (0, a.jsx)(U.E, {
                    className: iA.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: z.intl.string(z.t["0M5fN7"]),
                }),
                (0, a.jsx)(ip.A, {
                    actionText: z.intl.string(z.t["DSN+hw"]),
                    onAction: (e) => {
                        e === ip.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, a.jsx)("div", {
                    className: iA.o1,
                    children: (0, a.jsx)(ec.Q, {
                        variant: "secondary",
                        size: "md",
                        textVariant: "text-sm/medium",
                        text: z.intl.string(z.t["9g2mqT"]),
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
        passwordRef: d,
    } = e;
    return (0, a.jsxs)(k.Ay, {
        className: t,
        children: [
            (0, a.jsx)(n6.M, {}),
            (0, a.jsxs)(k.eB, {
                className: Q.QX,
                children: [
                    (0, a.jsx)(e_.A, {
                        className: Q.SX,
                        alpha2: n.alpha2,
                        countryCode: n.code.split(" ")[0],
                        label: z.intl.string(z.t.tUjnxr),
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
                        className: Q.SX,
                        label: z.intl.string(z.t["CIGa+7"]),
                        onChange: r,
                        type: "password",
                        setRef: d,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        value: l,
                        required: !0,
                    }),
                    (0, a.jsx)("div", {
                        className: Q.QB,
                        children: (0, a.jsx)(V.$, {
                            text: z.intl.string(z.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, a.jsx)(ec.Q, { text: z.intl.string(z.t.wWIufs), textVariant: "text-sm/normal", disabled: !0 }),
                    (0, a.jsx)("div", {
                        className: Q.a5,
                        children: (0, a.jsx)(ec.Q, {
                            text: z.intl.string(z.t.tmE73r),
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
function iv(e) {
    let t,
        {
            invite: n,
            guildTemplate: i,
            giftCode: l,
            authBoxClassName: s,
            disableAutofocusOnDefaultForm: r,
            login: c,
            password: h,
            errors: g,
            loginSource: x,
            dismissedChooseAccount: f,
            setDismissedChooseAccount: p,
            conditionalMediationAbortController: A,
            onLoginChange: E,
            onPasswordChange: _,
            handleLogin: j,
            handleForgotPassword: N,
            handleGotoRegister: v,
        } = e,
        C = (0, m.bG)([eE.A], () => eE.A.getCountryCode()),
        I = (0, m.bG)([eQ.default], () => eQ.default.getLoginStatus()),
        S = (0, m.bG)([ig.A], () => ig.A.getHasLoggedInAccounts()),
        y = o.useCallback(
            (e) => {
                T.default.track(b.HAw.LOGIN_SUCCESSFUL, {
                    source: b.mdB.QR_CODE,
                    login_source: x,
                    gift_code_sku_id: l?.skuId ?? null,
                    is_new_user: !1,
                    login_method: "remote_auth",
                    login_instance_id: e ?? null,
                });
            },
            [x, l],
        ),
        { handoff_token: R } = (0, d.parse)(window.location.search),
        O = u.Fr && u.KY && null != R,
        L = null == g.email && null != g.password,
        D = o.useRef(null),
        P = o.useRef(null),
        w = (0, n7.A)(g);
    o.useEffect(() => {
        let e = (e) => null != g[e];
        null != w && w !== g && (e("password") ? P.current?.focus() : (e("email") || e("login")) && D.current?.focus());
    }, [g, D, P, w]),
        (t =
            null != n
                ? (0, a.jsx)("div", { className: Q.S3, children: (0, a.jsx)(n6.A, { invite: n }) })
                : null != l
                  ? (0, a.jsx)(n1, { giftCode: l })
                  : (0, a.jsxs)("div", {
                        className: n3.wx,
                        children: [
                            (0, a.jsx)(k.hE, { className: Q.QB, children: z.intl.string(z.t["7fNJgA"]) }, "title"),
                            !1 === (0, tY.isAndroidWeb)()
                                ? (0, a.jsx)(k.tK, { children: z.intl.string(z.t.euS7r4) }, "subtitle")
                                : null,
                        ],
                    }));
    let G = (0, a.jsxs)("div", {
        className: n3.Eh,
        children: [
            S &&
                f &&
                (0, a.jsx)("div", {
                    className: n3.AX,
                    children: (0, a.jsx)(V.$, {
                        onClick: () => p(!1),
                        variant: "secondary",
                        text: z.intl.string(z.t["1MrpWO"]),
                        icon: nl.n,
                    }),
                }),
            t,
            (0, a.jsx)(n4.F, {
                children: (0, a.jsxs)(k.eB, {
                    className: Q.QX,
                    children: [
                        (0, a.jsx)(e_.A, {
                            alpha2: C.alpha2,
                            countryCode: C.code.split(" ")[0],
                            className: Q.SX,
                            label: z.intl.string(z.t.tUjnxr),
                            error: iN("login", g) ?? iN("email", g),
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
                        (0, a.jsx)(k.pd, {
                            label: z.intl.string(z.t["CIGa+7"]),
                            error: iN("password", g),
                            onChange: _,
                            name: "password",
                            type: "password",
                            setRef: P,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            autoFocus: L && !O && !r,
                            value: h,
                            required: !0,
                        }),
                        (0, a.jsx)("div", {
                            className: B()(Q.SX, Q.a5),
                            children: (0, a.jsx)(ec.Q, {
                                text: z.intl.string(z.t.wWIufs),
                                textVariant: "text-sm/normal",
                                onClick: () => {
                                    null != D.current && D.current.focus(), N();
                                },
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: Q.QB,
                            children: (0, a.jsx)(V.$, {
                                text: z.intl.string(z.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                loading: I === b.aUe.LOGGING_IN,
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: Q.a5,
                            children: [
                                (0, a.jsx)("span", { className: n3.Qt, children: z.intl.string(z.t.tmE73r) }),
                                (0, a.jsx)("span", {
                                    className: n3.Z8,
                                    children: (0, a.jsx)(ec.Q, {
                                        text: z.intl.string(z.t.pV8xeR),
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
        ? (0, a.jsx)(i_, {
              authBoxClassName: s,
              country: C,
              login: c,
              password: h,
              onLoginChange: E,
              onPasswordChange: _,
              loginRef: D,
              passwordRef: P,
          })
        : null != i
          ? i.state === ij.QB.RESOLVING
              ? (0, a.jsx)(i_, {
                    authBoxClassName: s,
                    country: C,
                    login: c,
                    password: h,
                    onLoginChange: E,
                    onPasswordChange: _,
                    loginRef: D,
                    passwordRef: P,
                })
              : (0, a.jsx)(ie, {
                    onSubmit: j,
                    tag: "form",
                    className: B()(s, n3.Sy),
                    children: () => [
                        (0, a.jsx)(it.A, { guildTemplate: i }, "template"),
                        (0, a.jsx)(o.Fragment, { children: G }, "form-wrapper"),
                    ],
                })
          : S && !f
            ? (0, a.jsx)(iE, { onDismiss: () => p(!0) })
            : (0, a.jsxs)("div", {
                  children: [
                      (0, a.jsx)(k.Ay, {
                          onSubmit: j,
                          tag: "form",
                          className: B()(s, { [n3.M0]: O }),
                          expanded: !0,
                          children: (0, a.jsxs)(eR.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 64,
                              children: [
                                  G,
                                  (0, a.jsx)(n9.A, {
                                      onAuthenticateSuccess: y,
                                      conditionalMediationAbortController: A,
                                  }),
                              ],
                          }),
                      }),
                      O && (0, a.jsx)(im, {}),
                  ],
              });
}
var iC = n(572469);
function iI(e) {
    let { loginSource: t, giftCodeSKUId: n } = e,
        i = (0, m.cf)(
            [eQ.default],
            () => ({ ticket: eQ.default.getMFATicket(), methods: eQ.default.getMFAMethods() }),
            [],
        ),
        l = o.useCallback(
            (e) => {
                let { mfaType: i, data: l, ticket: s } = e;
                return (
                    F._.dispatch(b.jej.WAVE_EMPHASIZE),
                    x.A.loginMFAv2({ code: l, ticket: s, mfaType: i, source: t, giftCodeSKUId: n })
                );
            },
            [t, n],
        );
    return (0, a.jsx)(k.Ay, {
        style: { padding: 0 },
        children: (0, a.jsx)(iC.t, {
            mfaFinish: l,
            mfaChallenge: i,
            onEarlyClose: () => {
                g.h.dispatch({ type: "LOGIN_RESET" });
            },
            width: 480,
        }),
    });
}
var iS = n(511815),
    iT = n(139033),
    iy = n(15552),
    ib = n(952116),
    iR = n(491509),
    iO = n(913612),
    iL = n(933924);
let ik = (e) => n.g.location.assign(e);
function iD(e) {
    let {
        invite: t,
        guildTemplate: n,
        giftCode: i,
        location: l,
        redirectTo: s,
        transitionTo: r,
        authBoxClassName: c,
        loginSource: u,
        disableAutofocusOnDefaultForm: h,
    } = e;
    (0, iO.K)();
    let g = (0, m.bG)([eQ.default], () => eQ.default.isAuthenticated()),
        f = (0, m.bG)([S.A], () => S.A.isHandoffAvailable()),
        p = (0, m.bG)([eQ.default], () => eQ.default.getLoginStatus()),
        A = i?.skuId ?? null,
        _ = (0, m.bG)([nz.A], () => (null != A ? nz.A.get(A) : null)),
        {
            checkingHandoff: j,
            redirecting: N,
            login: v,
            password: C,
            phoneVerifyError: y,
            dismissedChooseAccount: R,
            setDismissedChooseAccount: O,
            errors: L,
            conditionalMediationAbortController: w,
            loginSource: G,
            loginOrSSO: B,
            handleLogin: V,
            handleIPAuthorize: M,
            handlePasswordReset: W,
            handleForgotPassword: H,
            handleResendCode: K,
            handleReset: X,
            handleCancelAccountDeletion: Y,
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
                    transitionTo: r,
                    redirectTo: c,
                    location: u,
                    loginSource: h,
                } = e,
                [m, g] = o.useState(() => l),
                [f, p] = o.useState(() => s),
                [A, E] = o.useState(""),
                [_, j] = o.useState(() => {
                    let e = null != u ? (0, d.parse)(u.search) : {};
                    return e.email ?? e.login ?? "";
                }),
                [N, v] = o.useState(""),
                [C, S] = o.useState(!1),
                [T, y] = o.useState(null),
                [R, O] = o.useState(!1),
                [L] = o.useState(() => new AbortController()),
                [k, D] = o.useState({});
            !m || l || s || g(!1);
            let P = o.useMemo(() => {
                    if (null != h) return h;
                    if (null != i) return "gift";
                    if (null != n) return "guild_template";
                    if (null != t) {
                        if (null != t.guild) return "guild_invite";
                        if (null != t.channel) return "dm_invite";
                        if (null != t.inviter) return "friend_invite";
                    }
                    return null != c ? I(c) : null;
                }, [h, i, n, t, c]),
                w = null != i ? i.skuId : null,
                G = o.useCallback(
                    (e) => {
                        let t = null != e ? (0, d.parse)(e.search) : {};
                        if ((delete t.redirect_to, null != c)) {
                            if (eo(c)) return void ed(c);
                            r(c);
                        } else if (null == t.service) r(b.BVt.APP);
                        else {
                            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + b.Rsh.SSO,
                                n = { ...t, token: eQ.default.getToken() };
                            window.location = `${e}?${(0, d.stringify)(n)}`;
                        }
                    },
                    [c, r],
                ),
                B = o.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e && null != t && (p(!0), n ? x.A.verifySSOToken("login").then(() => G(t)) : G(t));
                    },
                    [G],
                ),
                V = o.useCallback(() => {
                    L.abort("Login state reset"), D({}), x.A.loginReset();
                }, [L]),
                M = o.useCallback(
                    async function (e) {
                        let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e?.preventDefault(),
                            L.abort("Starting password login"),
                            F._.dispatch(b.jej.WAVE_EMPHASIZE),
                            D({});
                        try {
                            await x.A.login({
                                login: A + _,
                                password: N,
                                undelete: n ?? C,
                                source: P,
                                giftCodeSKUId: w,
                                invite: t,
                            });
                        } catch (e) {
                            D((0, iy.p)(e));
                        }
                    },
                    [L, _, A, N, C, P, w, t],
                ),
                W = o.useCallback(
                    async (e) => {
                        let t = A + _;
                        D({});
                        try {
                            let { token: n } = await ep.A.verifyPhone(t, e, !1);
                            await x.A.authorizeIPAddress(n), M();
                        } catch (e) {
                            null != e.body && null != e.body.message && y(e.body.message);
                        }
                    },
                    [A, _, M],
                ),
                H = o.useCallback(
                    async (e) => {
                        y(null);
                        try {
                            let { token: t } = await ep.A.verifyPhone(A + _, e, !1);
                            r(b.BVt.RESET, { search: (0, d.stringify)({ token: t, from_login: "true" }) });
                        } catch (e) {
                            null != e.body && null != e.body.message && y(e.body.message);
                        }
                    },
                    [A, _, r],
                ),
                K = o.useCallback(
                    async (e) => {
                        null != e && e.preventDefault();
                        let t = A + _;
                        D({});
                        try {
                            F._.dispatch(b.jej.WAVE_EMPHASIZE);
                            let e = await x.A.forgotPassword(t);
                            if (!1 === e) return;
                            e === iS.D.ONE_TIME_LOGIN
                                ? (0, t4.openModal)((e) => {
                                      let t = [
                                          {
                                              variant: "primary",
                                              text: z.intl.string(z.t.BddRzS),
                                              onClick: e.onClose,
                                              fullWidth: !0,
                                          },
                                      ];
                                      return (0, a.jsx)(t7.Modal, {
                                          title: z.intl.string(z.t["6Ecyts"]),
                                          actions: t,
                                          ...e,
                                          children: (0, a.jsx)(U.E, {
                                              variant: "text-md/normal",
                                              children: z.intl.string(z.t.iAcrqV),
                                          }),
                                      });
                                  })
                                : (0, iT.A)({
                                      title: z.intl.string(z.t.f5Pi7A),
                                      subtitle: z.intl.format(z.t["6u5hQ9"], { email: t }),
                                  });
                        } catch (e) {
                            D((0, iy.p)(e));
                        }
                    },
                    [A, _],
                ),
                Q = o.useCallback(() => {
                    ep.A.resendCode(A + _);
                }, [A, _]),
                X = o.useCallback((e) => {
                    null != e && e.preventDefault(), x.A.loginReset(), v(""), E(""), j(""), S(!1), g(!1), p(!1), D({});
                }, []),
                Y = o.useCallback(() => {
                    S(!0), M(void 0, { undelete: !0 });
                }, [M]),
                q = o.useCallback(() => {
                    let e,
                        l = null != u ? (0, d.parse)(u.search) : {};
                    "" !== _ && (l.email = _),
                        null != t
                            ? ((l.mode = "register"), (e = b.BVt.INVITE(t.code)))
                            : null != i
                              ? ((l.mode = "register"), (e = b.BVt.GIFT_CODE(i.code)))
                              : null != n
                                ? (e = b.BVt.GUILD_TEMPLATE(n.code))
                                : null != c
                                  ? ((e = b.BVt.REGISTER), (l.redirect_to = c))
                                  : (e = b.BVt.REGISTER),
                        V(),
                        r(e, { search: (0, d.stringify)(l) }),
                        F._.dispatch(b.jej.WAVE_EMPHASIZE);
                }, [_, t, i, n, c, u, V, r]);
            return {
                checkingHandoff: m,
                redirecting: f,
                login: _,
                password: N,
                phoneVerifyError: T,
                dismissedChooseAccount: R,
                setDismissedChooseAccount: O,
                errors: k,
                conditionalMediationAbortController: L,
                loginSource: P,
                loginOrSSO: B,
                handleLogin: M,
                handleIPAuthorize: W,
                handlePasswordReset: H,
                handleForgotPassword: K,
                handleResendCode: Q,
                handleReset: X,
                handleCancelAccountDeletion: Y,
                handleGotoRegister: q,
                loginReset: V,
                onLoginChange: o.useCallback((e, t) => {
                    j(e), E(t);
                }, []),
                onPasswordChange: o.useCallback((e) => {
                    v(e);
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
        f && !g ? (0, E.ST)() : g && B(g, l, !0),
            T.default.track(
                b.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: G,
                    authenticated: g,
                    ...(null != _ ? (0, iR.A)(_, !1, !1) : {}),
                    source: (0, D.PR)(),
                },
                { flush: !0 },
            ),
            g || (0, iL.a)({ abortController: w, loginSource: G, giftCodeSKUId: A }),
            x.A.getLocationMetadata(),
            (0, P.d)("login");
    });
    let ee = (0, n7.A)(g);
    if (
        (o.useEffect(() => {
            let e = j && (f || N);
            g && !1 === ee && !e && (w.abort("Transitioning to authenticated state"), B(g, l));
        }, [g, f, ee, N, j, w, B, l]),
        N || j)
    )
        return (0, a.jsx)(k.Ay, { children: (0, a.jsx)(eL.y, {}) });
    if (f)
        return (0, a.jsxs)(k.Ay, {
            className: c,
            children: [
                (0, a.jsx)(k.CK, {}),
                (0, a.jsx)(k.hE, { className: Q.QB, children: z.intl.string(z.t.S6RMNA) }),
                (0, a.jsx)(k.tK, { children: z.intl.string(z.t.YZiJbh) }),
            ],
        });
    switch (p) {
        case b.aUe.LOGGING_IN_MFA_SMS:
        case b.aUe.MFA_SMS_STEP:
        case b.aUe.LOGGING_IN_MFA:
        case b.aUe.MFA_STEP:
            return (0, a.jsx)(iI, { loginSource: G, giftCodeSKUId: A });
        case b.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case b.aUe.ACCOUNT_DISABLED:
            return (0, a.jsx)(n8, { loginStatus: p, authBoxClassName: c, onSubmit: X, onCancelAccountDeletion: Y });
        case b.aUe.PHONE_IP_AUTHORIZATION:
            return (0, a.jsx)(k.Ay, {
                tag: "form",
                className: c,
                children: (0, a.jsx)(ib.A, {
                    title: z.intl.string(z.t.w55Oco),
                    subtitle: z.intl.format(z.t.CfRZBj, { onResendClick: K }),
                    error: y,
                    onSubmit: M,
                    onCancel: $,
                }),
            });
        case b.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, a.jsx)(k.Ay, {
                tag: "form",
                className: c,
                children: (0, a.jsx)(ib.A, {
                    title: z.intl.string(z.t["+xqy3d"]),
                    subtitle: z.intl.format(z.t.ef4uZ7, { onResendClick: K }),
                    error: y,
                    onSubmit: W,
                    onCancel: $,
                }),
            });
        case b.aUe.LOGGING_IN:
        case b.aUe.NONE:
        default:
            return (0, a.jsx)(iv, {
                invite: t,
                guildTemplate: n,
                giftCode: i,
                authBoxClassName: c,
                disableAutofocusOnDefaultForm: h,
                login: v,
                password: C,
                errors: L,
                loginSource: G,
                dismissedChooseAccount: R,
                setDismissedChooseAccount: O,
                conditionalMediationAbortController: w,
                onLoginChange: Z,
                onPasswordChange: J,
                handleLogin: V,
                handleForgotPassword: H,
                handleGotoRegister: q,
            });
    }
}
var iP = n(664294),
    iw = n(204925);
let iG = null,
    iB = "underage";
class iU extends m.Ay.Store {
    static displayName = "AgeGateStore";
    isUnderageAnonymous() {
        if (tY.isPlatformEmbedded && 1) {
            if (null != iG && iG + iw.bm > Date.now()) return !0;
        } else if (1) return null != iP.parse(document.cookie)[iB];
        return !1;
    }
}
let iV = new iU(g.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        (iG = Date.now()), (document.cookie = `${iB}=1;path=/`);
    },
    LOGIN_SUCCESS: function () {
        (iG = null), (document.cookie = `${iB}=1;path=/;max-age=0`);
    },
});
var iM = n(509434),
    iF = n(153801);
let iW = () =>
    (0, a.jsx)(k.Ay, {
        children: (0, a.jsxs)("div", {
            className: iF.hQ,
            children: [
                (0, a.jsx)(k.hE, { className: iF.DD, children: z.intl.string(z.t.nCB6Ga) }),
                (0, a.jsx)(k.tK, {
                    className: iF.VA,
                    children: z.intl.format(z.t.KQgoxG, { underageMessage: z.intl.string(z.t.WqEH4D) }),
                }),
                (0, a.jsx)(V.$, {
                    icon: iM.I,
                    text: z.intl.string(z.t.hvVgAZ),
                    onClick: () => window.open(t5.A.getArticleURL(b.MVz.AGE_GATE), "_blank"),
                    iconPosition: "end",
                }),
            ],
        }),
    });
var iH = n(990078),
    iz = n(913122),
    iK = n(201505);
n(417635), n(827343), n(792251), n(19575), n(945041);
var iQ = n(493527),
    iX = n(544395),
    iY = n(446837);
let iq = window.ResizeObserver ?? iY.t;
function i$(e) {
    let { show: t, children: n, top: i = 0, bottom: l = 0 } = e,
        { ref: s, height: r } = (() => {
            let e = o.useRef(null),
                [t, n] = o.useState(0),
                i = o.useMemo(
                    () =>
                        new iq((e) => {
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
        d = (0, eZ.z)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: { height: t ? r : 0, paddingBottom: t ? `${l}px` : "0px", marginTop: t ? `${i}px` : "0px" },
            config: { tension: 170, friction: 26 },
        }),
        c = (0, eZ.z)({
            from: { opacity: 0 },
            to: { opacity: +!!t },
            config: { duration: 200, easing: t ? (e) => e ** 4 : (e) => e * (2 - e) },
        });
    return (0, a.jsx)(eq.animated.div, {
        style: { overflow: "hidden", height: d.height, paddingBottom: d.paddingBottom, marginTop: d.marginTop },
        children: (0, a.jsx)(eq.animated.div, { style: { opacity: c.opacity }, ref: s, children: n }),
    });
}
var iZ = n(153488),
    iJ = n(934337),
    i0 = n(989349),
    i1 = n.n(i0),
    i2 = n(955437),
    i7 = n(888548);
n(861807);
var i4 = n(569717);
function i3(e) {
    let {
        email: t,
        phoneToken: n,
        username: i,
        globalName: l,
        consent: s,
        password: r,
        guildTemplateCode: a,
        birthday: o,
        invite: d = null,
        giftCodeSKUId: u = null,
        promoEmailConsent: h = null,
        usedUsernameSuggestion: m = null,
    } = e;
    if ((g.h.dispatch({ type: "REGISTER" }), null != o)) {
        let e;
        (0, i4.A)(o, b.JJy.REGISTER),
            T.default.track(b.HAw.AGE_GATE_ACTION, { source: iw.w_.REGISTER, action: iw.AM.AGE_GATE_SUBMITTED }),
            (e = i1()().diff(o, "years")) < 13 ||
                T.default.track(b.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                });
    }
    return W.A.post({
        url: b.Rsh.REGISTER,
        body: {
            fingerprint: eQ.default.getFingerprint(),
            email: t,
            username: i,
            global_name: l,
            password: r,
            invite: d,
            consent: s,
            phone_token: n,
            date_of_birth: o?.format("YYYY-MM-DD"),
            gift_code_sku_id: u,
            guild_template_code: a,
            promotional_email_opt_in: h?.checked,
        },
        trackedActionData: {
            event: c.NetworkActionNames.USER_REGISTER,
            properties: {
                invite_code: d,
                used_username_suggestion: m,
                promotional_email_opt_in: h?.checked,
                promotional_email_pre_checked: h?.preChecked,
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
                T.default.track(b.HAw.AGE_GATE_ACTION, { source: iw.w_.REGISTER, action: iw.AM.AGE_GATE_SUCCESS });
        },
        (e) => {
            if (e instanceof i7.CaptchaCancelError) throw e;
            let t = new M.A(e);
            throw (
                (null != t.getFieldErrors("date_of_birth") && i2.Xv(iw.w_.REGISTER),
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
var i8 = n(568385);
function i6() {
    let { required: e, checked: t } = (0, iJ.mZ)();
    return e
        ? (0, a.jsx)("div", {
              className: Q.Ot,
              children: (0, a.jsx)(i8.J, {
                  label: z.intl.string(z.t["0p3R0+"]),
                  checked: t,
                  onChange: iJ.Bw,
                  labelType: "secondary",
              }),
          })
        : null;
}
let i9 = /\.$/,
    i5 = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(i9, ""))
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
              children: (0, a.jsx)(i8.J, {
                  label: z.intl.format(z.t.qMDAP0, { termsURL: b.X7G.TERMS, privacyURL: b.X7G.PRIVACY }),
                  checked: t,
                  onChange: i,
                  labelType: "secondary",
              }),
          })
        : (0, a.jsx)(U.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: B()(Q.Ot, ln.E2),
              children: z.intl.format(z.t["KI+BSb"], { termsURL: b.X7G.TERMS, privacyURL: b.X7G.PRIVACY }),
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
        d = n.length > 0;
    return (
        (t = d
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
                          children: z.intl.string(z.t.z7c4bP),
                      }),
                  )
            : null != i && i.length > 0 && l.length > 0
              ? (0, a.jsx)(U.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: z.intl.format(z.t.nDGqqq, { suggestion: i, nameOnClick: r }),
                })
              : (0, a.jsx)(U.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: z.intl.string(z.t.z7c4bP),
                })),
        (0, a.jsx)(i$, { show: (d && o?.type === ls.q.ERROR) || s, top: -12, bottom: 20, children: t })
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
            onGotoLogin: d,
            onRegister: c,
        } = e,
        [u, h] = o.useState(!1),
        [g, x] = o.useState(!1),
        f = async () => {
            y.length > 0 && !iX.A.wasRegistrationSuggestionFetched(y) && (await iQ.A.fetchSuggestionsRegistration(y));
        },
        p = (e) => {
            T.default.track(b.HAw.REGISTER_INPUT_FOCUS, { field: e });
        },
        A = (e) => {
            T.default.track(b.HAw.REGISTER_INPUT_BLUR, { field: e });
        },
        E = (0, m.bG)([iZ.A], () => iZ.A.getAuthenticationConsentRequired()),
        _ = (0, m.bG)([iX.A], () => iX.A.registrationUsernameSuggestion()),
        j = o.useRef(null),
        N = o.useRef(null),
        v = o.useRef(null),
        C = o.useRef(null),
        [I, S] = o.useState(t),
        [y, R] = o.useState(""),
        [O, L] = o.useState(""),
        [D, P] = o.useState(""),
        [w, G] = o.useState(null),
        [M, W] = le(E),
        [H, K] = o.useState(!1),
        [X, Y] = lt(),
        [q, $] = o.useState({}),
        { message: Z, email: J, username: ee, global_name: et, password: en, date_of_birth: ei } = q,
        [el, es] = o.useState(null),
        [er, ea] = o.useState(null),
        [eo, ed] = o.useState(null),
        [eu, eh] = o.useState(null),
        em = null != E && M;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: i, globalNameRef: l, passwordRef: s } = e,
            r = (0, n7.A)(t);
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
    })({ apiErrors: q, emailRef: j, usernameRef: N, globalNameRef: v, passwordRef: C });
    let eg = o.useCallback(async () => {
            let e = null != i ? i.skuId : null,
                t = iJ.mZ.getState(),
                r = (0, ny.uJ)(_) ? null : O === _;
            F._.dispatch(b.jej.WAVE_EMPHASIZE), K(!0), $({});
            try {
                await i3({
                    email: I,
                    username: O,
                    globalName: y,
                    consent: M,
                    password: D,
                    invite: n?.code,
                    usedUsernameSuggestion: r,
                    guildTemplateCode: l?.code,
                    giftCodeSKUId: e,
                    birthday: w,
                    promoEmailConsent: t.required ? t : null,
                }),
                    c?.();
            } catch (t) {
                if ((K(!1), !(t instanceof iz.LG))) return;
                let e = (0, iy.W)(t);
                $(e), s?.(e), "number" == typeof e.retry_after && Y(e.retry_after);
            }
        }, [i, l, n, I, s, c, _, O, y, D, w, M, Y]),
        ex = o.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == E)) return;
                let t = !1;
                0 === I.length && (es(z.intl.string(z.t.EkokLy)), (t = !0)),
                    0 === O.length && (ea(z.intl.string(z.t.EkokLy)), (t = !0)),
                    0 === D.length && (ed(z.intl.string(z.t.EkokLy)), (t = !0)),
                    null == w && (eh(z.intl.string(z.t.EkokLy)), (t = !0)),
                    t || eg();
            },
            [I, O, D, w, E, eg],
        ),
        ef = null;
    return (
        "string" == typeof Z && (ef = (0, a.jsx)(k.ME, { className: B()(Q.QX, ln.gJ), children: Z })),
        (0, a.jsx)("form", {
            onSubmit: ex,
            children: (0, a.jsxs)(k.eB, {
                className: Q.QX,
                children: [
                    (0, a.jsx)(k.pd, {
                        autoFocus: !0,
                        className: Q.SX,
                        label: z.intl.string(z.t.dI4d4S),
                        name: "email",
                        value: I,
                        onChange: (e) => {
                            S(e), r?.(e), es(0 === e.length ? z.intl.string(z.t.EkokLy) : null);
                        },
                        error: el ?? i5(J),
                        type: "email",
                        autoComplete: "username",
                        setRef: j,
                        required: !0,
                        onFocus: () => p("email"),
                        onBlur: () => A("email"),
                    }),
                    (0, a.jsx)(k.pd, {
                        label: z.intl.string(z.t["9AjdkD"]),
                        className: Q.SX,
                        name: "global_name",
                        value: y,
                        onChange: R,
                        error: i5(et),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: v,
                        onFocus: () => {
                            h(!0), p("global_name");
                        },
                        onBlur: () => {
                            h(!1), A("global_name");
                        },
                    }),
                    (0, a.jsx)(i$, {
                        show: u,
                        top: -12,
                        bottom: 20,
                        children: (0, a.jsx)(U.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: z.intl.string(z.t["330TCc"]),
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
                                label: z.intl.string(z.t.TWzdWj),
                                className: Q.SX,
                                name: "username",
                                value: O,
                                onChange: (e) => {
                                    L(e.toLocaleLowerCase()), ea(0 === e.length ? z.intl.string(z.t.EkokLy) : null);
                                },
                                error: er ?? i5(ee),
                                autoComplete: "off",
                                setRef: N,
                                required: !0,
                                onFocus: () => p("username"),
                                onBlur: () => A("username"),
                            }),
                            (0, a.jsx)(la, {
                                username: O,
                                suggestion: _,
                                globalName: y,
                                isUsernameFocused: g,
                                onClickSuggestion: () => {
                                    N.current?.focus(), null != _ && _.length > 0 && L(_);
                                },
                            }),
                        ],
                    }),
                    (0, a.jsx)(k.pd, {
                        label: z.intl.string(z.t["CIGa+7"]),
                        name: "password",
                        value: D,
                        onChange: (e) => {
                            P(e), ed(0 === e.length ? z.intl.string(z.t.EkokLy) : null);
                        },
                        error: eo ?? i5(en),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: C,
                        required: !0,
                        onFocus: () => p("password"),
                        onBlur: () => A("password"),
                    }),
                    (0, a.jsx)(iK.A, {
                        label: z.intl.string(z.t.rhBeKe),
                        wrapperClassName: ln.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            G(e), null != e && eh(null);
                        },
                        error: eu ?? i5(ei),
                        value: w,
                        required: !0,
                        onFocus: p,
                        onBlur: A,
                    }),
                    (0, a.jsx)(i6, {}),
                    (0, a.jsx)(li, { consent: M, consentRequired: E, onConsentChange: W }),
                    (0, a.jsx)(iH.m, {
                        text: !M && E ? z.intl.string(z.t.AY4IVA) : null,
                        children: (0, a.jsx)("div", {
                            className: Q.QX,
                            children: (0, a.jsx)(V.$, {
                                text: z.intl.string(z.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: H,
                                disabled: !em || X,
                            }),
                        }),
                    }),
                    ef,
                    (0, a.jsx)("div", {
                        className: Q.QX,
                        children: (0, a.jsx)(ec.Q, {
                            text: z.intl.string(z.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            onClick: d,
                        }),
                    }),
                ],
            }),
        })
    );
}
n(436317);
var ld = n(292666),
    lc = n(713654),
    lu = n(131165);
function lh(e) {
    let { channel: t } = e,
        n = (0, lc._U)(t.type);
    return (0, a.jsxs)("div", {
        className: lu.Nj,
        children: [
            null != n ? (0, a.jsx)(n, { color: "currentColor", size: "custom", width: 20, height: 20 }) : null,
            (0, a.jsx)(U.E, { className: lu.dN, color: "none", variant: "text-sm/semibold", children: t.name }),
        ],
    });
}
function lm(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, a.jsxs)("div", {
        className: lu.kL,
        children: [
            (0, a.jsx)(tC.Uq, { className: lu.II, guildId: n.guild_id, guildEvent: n, eventPreview: n }),
            (0, a.jsx)(tC.sC, { name: n.name, description: n.description, guildId: n.guild_id }),
            null != t && n.channel_id === t.id ? (0, a.jsx)(lh, { channel: t }) : null,
        ],
    });
}
var lg = n(573435),
    lx = n(831985);
let lf = (e) => {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let i = eh.DY(t),
        { name: l, description: s } = i;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(eO.D, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: lx.CT,
                children: z.intl.string(z.t.Eabu1z),
            }),
            (0, a.jsxs)("div", {
                className: lx.EB,
                children: [
                    (0, a.jsx)(lg.Ay, {
                        mask: lg.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, a.jsx)(tv.Ay, { guild: i, size: tv.Ay.Sizes.MEDIUM, active: !0 }),
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
                                              children: z.intl.format(z.t["LC+S+m"], { membersOnline: n }),
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
function lp(e) {
    let { authBoxClassName: t, name: n, onNameChange: i } = e;
    return (0, a.jsxs)(k.Ay, {
        className: t,
        children: [
            (0, a.jsx)(n6.M, {}),
            (0, a.jsxs)(k.eB, {
                className: ln.y0,
                children: [
                    (0, a.jsx)(iH.m, {
                        text: z.intl.string(z.t["hBB85/"]),
                        position: "right",
                        children: (0, a.jsx)(k.pd, {
                            label: z.intl.string(z.t["9AjdkD"]),
                            autoFocus: !0,
                            className: Q.QB,
                            name: "username",
                            value: n,
                            placeholder: z.intl.string(z.t["09Q8yp"]),
                            onChange: i,
                            onFocus: () => {
                                T.default.track(b.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                T.default.track(b.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, a.jsx)(U.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: B()(Q.QX, ln.E2),
                        children: z.intl.format(z.t["KI+BSb"], { termsURL: b.X7G.TERMS, privacyURL: b.X7G.PRIVACY }),
                    }),
                    (0, a.jsx)("div", {
                        className: Q.Ot,
                        children: (0, a.jsx)(V.$, {
                            text: z.intl.string(z.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: Q.QX,
                        children: (0, a.jsx)(ec.Q, {
                            text: z.intl.string(z.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function lA(e) {
    let { consentRequired: t, consent: n, registering: i } = e,
        l = o.useMemo(() => null != t && n, [t, n]);
    return (0, a.jsx)(iH.m, {
        text: !n && t ? z.intl.string(z.t.AY4IVA) : null,
        children: (0, a.jsx)("div", {
            className: Q.Ot,
            children: (0, a.jsx)(V.$, {
                text: z.intl.string(z.t["825cFy"]),
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
        d = (0, m.bG)([iZ.A], () => iZ.A.getAuthenticationConsentRequired()),
        c = n?.guild_scheduled_event != null,
        u = o.useRef(null);
    t =
        n?.guild_scheduled_event != null
            ? (0, a.jsx)(lm, { channel: n.channel, guildScheduledEvent: n.guild_scheduled_event })
            : (0, a.jsx)("div", { className: Q.S3, children: (0, a.jsx)(n6.A, { invite: n, inUnclaimedFlow: !0 }) });
    let [h, g] = o.useState(""),
        [x, f] = o.useState(null),
        [p, A] = le(d),
        [E, _] = o.useState(!1),
        [j, N] = o.useState({}),
        { username: v, global_name: C, date_of_birth: I } = j,
        [S, y] = lt();
    o.useEffect(() => {
        null == x && u.current?.focus();
    }, [x, u]);
    let [R, O] = o.useState(null),
        [L, D] = o.useState(null),
        P = o.useCallback(async () => {
            F._.dispatch(b.jej.WAVE_EMPHASIZE), _(!0), N({});
            try {
                await (function (e) {
                    let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
                    return i3({ ...i, invite: t, giftCodeSKUId: n });
                })({ consent: p, invite: n.code, globalName: h, birthday: x }),
                    r?.();
            } catch (t) {
                if ((_(!1), !(t instanceof iz.LG))) return;
                let e = (0, iy.W)(t);
                N(e), l?.(e), "number" == typeof e.retry_after && y(e.retry_after);
            }
        }, [n, h, x, p, l, r, y, N, _]),
        w = o.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === d)) return;
                let t = !1;
                0 === h.length && (O(z.intl.string(z.t.EkokLy)), (t = !0)),
                    null == x && (D(z.intl.string(z.t.EkokLy)), (t = !0)),
                    t || P();
            },
            [h, x, d, P, O, D],
        );
    return n.state === b.elq.RESOLVING
        ? (0, a.jsx)(lp, { authBoxClassName: i, name: h, onNameChange: g })
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(k.Ay, {
                      tag: "section",
                      className: i,
                      children: (0, a.jsxs)("form", {
                          onSubmit: w,
                          children: [
                              t,
                              c ? (0, a.jsx)("div", { className: ln.yF }) : null,
                              (0, a.jsxs)(k.eB, {
                                  className: c ? void 0 : ln.y0,
                                  children: [
                                      (0, a.jsx)(ld.k, {
                                          helperText: z.intl.string(z.t["330TCc"]),
                                          label: z.intl.string(z.t["9AjdkD"]),
                                          error: R ?? i5(C ?? v),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: h,
                                          placeholder: z.intl.string(z.t["09Q8yp"]),
                                          onChange: g,
                                          onFocus: () => {
                                              T.default.track(b.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              T.default.track(b.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, a.jsx)(iK.A, {
                                          label: z.intl.string(z.t.rhBeKe),
                                          wrapperClassName: ln.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              f(e), null != e && D(null);
                                          },
                                          error: L ?? i5(I),
                                          value: x,
                                      }),
                                      (0, a.jsx)(li, { consent: p, consentRequired: d, onConsentChange: A }),
                                      (0, a.jsx)(lA, { consentRequired: d, consent: p, registering: E }),
                                      (0, a.jsx)("div", {
                                          className: Q.QX,
                                          children: (0, a.jsx)(ec.Q, {
                                              text: z.intl.string(z.t["1lWxux"]),
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
                      ? (0, a.jsx)(k.Ay, {
                            className: Q.QX,
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
function lv(e) {
    let {
            authBoxClassName: t,
            giftCode: n,
            giftCodeSKU: i,
            guildTemplate: l,
            invite: s,
            location: r,
            redirectTo: u,
            onLoginStart: h,
            onRegister: g,
            transitionTo: f = D.pX,
        } = e,
        p = (0, m.bG)([iZ.A], () => iZ.A.getAuthenticationConsentRequired()),
        A = (0, m.bG)([eQ.default], () => eQ.default.isAuthenticated()),
        E = (0, m.bG)([iV], () => iV.isUnderageAnonymous()),
        _ = (0, m.bG)([ig.A], () => ig.A.getHasLoggedInAccounts()),
        j = null != e.location ? (0, d.parse)(e.location.search) : {},
        [N, v] = o.useState(j.email ?? ""),
        [C, I] = o.useState({}),
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
        })(n, l, s),
        R = null != s && (null != s.guild || null != s.channel),
        O = null != s && null == s.guild && null == s.channel && null != s.inviter,
        L = o.useCallback(() => {
            A && (null != u ? f(u) : f(eu.A.defaultRoute));
        }, [A, u, f]);
    (0, n2.Ay)(() => {
        L(),
            T.default.track(
                b.HAw.REGISTER_VIEWED,
                {
                    location: null != s ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: y,
                    ...(null != i ? (0, iR.A)(i, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == p && x.A.getLocationMetadata(),
            (0, P.d)("register");
    }),
        o.useEffect(() => {
            A && !1 === S && ((0, l_.C)(lN.zY.ORGANIC_REGISTERED), L());
        }, [A, S, L]);
    let w = lj.FULL;
    E || null != C.date_of_birth ? (w = lj.AGE_GATE) : R && (w = lj.INVITE),
        (0, ix.A)(
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
                i = null != r ? (0, d.parse)(r.search) : {};
            null != s
                ? (t = b.BVt.INVITE_LOGIN(s.code))
                : null != n
                  ? (t = b.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != l
                    ? (t = b.BVt.GUILD_TEMPLATE_LOGIN(l.code))
                    : null != u
                      ? ((t = b.BVt.LOGIN), (i.redirect_to = u))
                      : ((t = b.BVt.LOGIN), "" !== N && (i = { email: N })),
                x.A.loginReset(),
                f(t, { search: (0, d.stringify)(i), source: "register" }),
                h?.(e),
                F._.dispatch(b.jej.WAVE_EMPHASIZE);
        },
        [N, s, n, l, u, r, h, f],
    );
    if (E || null != C.date_of_birth) return (0, a.jsx)(iW, {});
    if (null != s && R)
        return (0, a.jsx)(lE, { invite: s, authBoxClassName: t, onApiErrors: I, onGotoLogin: G, onRegister: g });
    let U = (0, a.jsx)(k.hE, { children: z.intl.string(z.t.wC4TlR) }, "title"),
        M = !1;
    null != l
        ? ((U = (0, a.jsx)(it.A, { guildTemplate: l })), (M = !0))
        : null != n
          ? (U = (0, a.jsx)(n1, { giftCode: n }))
          : null != s &&
            O &&
            s.state === b.elq.RESOLVED &&
            (U = (0, a.jsx)("div", { className: Q.S3, children: (0, a.jsx)(n6.A, { invite: s, isRegister: !0 }) }));
    let W = (0, a.jsx)(lo, {
        initialEmail: j.email ?? "",
        invite: s,
        giftCode: n,
        guildTemplate: l,
        onApiErrors: I,
        onEmailChange: v,
        onGotoLogin: G,
        onRegister: g,
    });
    return M
        ? (0, a.jsx)(ie, {
              tag: "section",
              className: B()(t, ln.Sy),
              children: () => [
                  U,
                  (0, a.jsxs)(
                      "div",
                      {
                          className: ln.Uu,
                          children: [(0, a.jsx)(k.hE, { className: ln.lR, children: z.intl.string(z.t.wC4TlR) }), W],
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
                            children: (0, a.jsx)(V.$, {
                                onClick: G,
                                variant: "secondary",
                                text: z.intl.string(z.t["1MrpWO"]),
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
m.Ay.initialize(), m.Ay.initialize();
class lC extends o.PureComponent {
    state = { error: null, continueOnWeb: !1, currentUser: null, sentVerification: !1, fetchingUser: !1 };
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, P.d)("gift_code");
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
        nM.Yq(), null == e && this.refreshUser();
    }
    refreshUser = () => {
        this.setState({ fetchingUser: !0 }),
            t8
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
        return l === b.t02.INVALID_GIFT_SELF_REDEMPTION
            ? z.intl.string(z.t.wa9h7F)
            : l === b.t02.INVALID_GIFT_REDEMPTION_OWNED && n?.productLine === b.EZt.COLLECTIBLES
              ? z.intl.string(z.t.mdLtb5)
              : null != t || l === b.t02.INVALID_GIFT_REDEMPTION_OWNED
                ? z.intl.format(z.t.PIdmg3, { libraryLink: b.BVt.APPLICATION_LIBRARY })
                : e.isClaimed || l === b.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? z.intl.string(z.t.ilcBeX)
                  : l === b.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? z.intl.string(z.t.ypuSd8)
                    : void 0;
    }
    handleLogout = () => {
        let e = this.props.match.params.giftCode;
        x.A.logout("gift_code", b.BVt.GIFT_CODE_LOGIN(e));
    };
    handleResendVerification = () => {
        x.A.verifyResend(), this.setState({ sentVerification: !0 });
    };
    handleAccept = async () => {
        let { transitionTo: e, giftCode: t } = this.props;
        if (null == t) throw Error("Trying to accept gift before resolve");
        let n = this.getCode();
        try {
            this.setState({ error: null }), await f.A.redeemGiftCode({ code: n }), e(b.BVt.APP);
        } catch (e) {
            this.setState({ error: e });
        }
    };
    resolveGiftCode = () => {
        let { transitionTo: e } = this.props,
            t = this.getCode();
        f.A.resolveGiftCode(t, !0, !0).then((n) => {
            null != n && null != n.giftCode.promotion && e(b.BVt.BILLING_PROMOTION_REDEMPTION(t));
        });
    };
    renderSpinner(e) {
        return (0, a.jsxs)(k.Ay, { children: [(0, a.jsx)(k.hE, { children: e }), (0, a.jsx)(k.CK, {})] });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: B()(Q.Ot, Q.QB), children: z.intl.string(z.t.KPowgn) }),
                (0, a.jsx)(k.tK, { children: z.intl.string(z.t.j8734b) }),
                (0, a.jsx)("div", {
                    className: B()(Q.eT, Q.QB),
                    children: (0, a.jsx)(V.$, { text: z.intl.string(z.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, a.jsx)(ec.Q, {
                    text: z.intl.string(z.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(t5.A.getArticleURL(b.MVz.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: Q.QB, children: z.intl.string(z.t.csrAMJ) }),
                (0, a.jsx)(k.tK, { children: z.intl.string(z.t["m1+IBn"]) }),
                (0, a.jsx)("div", {
                    className: Q.eT,
                    children: (0, a.jsx)(V.$, {
                        text: z.intl.string(z.t["qsI+EH"]),
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
                (0, a.jsx)(k._V, { src: n(792525), className: Q.QB }),
                (0, a.jsx)(k.hE, { children: z.intl.format(z.t["ivLUf/"], { username: e.username }) }),
                (0, a.jsx)(k.tK, { className: Q.QX, children: z.intl.string(z.t["8Su18+"]) }),
                (0, a.jsx)("div", {
                    className: Q.eT,
                    children: (0, a.jsx)(V.$, {
                        text: t ? z.intl.string(z.t.CMa9Rv) : z.intl.string(z.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, a.jsx)("div", {
                    className: Q.Ot,
                    children: (0, a.jsx)(ec.Q, {
                        text: z.intl.string(z.t.Po9eBQ),
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
        return (0, a.jsx)(lS, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: i,
            children: (0, a.jsxs)(k.Ay, {
                children: [
                    (0, a.jsx)(n1, { giftCode: e }),
                    (0, a.jsx)("div", {
                        className: Q.eT,
                        children: (0, a.jsx)(V.$, {
                            text: z.intl.string(z.t.n6I6k4),
                            fullWidth: !0,
                            disabled: null != l,
                            onClick: this.handleAccept,
                        }),
                    }),
                    null != l
                        ? (0, a.jsx)(k.tK, { className: Q.QX, children: l })
                        : (0, a.jsx)(k.ME, {
                              className: Q.QX,
                              children: z.intl.format(z.t.NYM08s, {
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
            { fetchingUser: d, continueOnWeb: c } = this.state;
        if (e === b.fAW.OPEN && !c) return this.renderAppOpened();
        if (e === b.fAW.OPENING) return this.renderSpinner(z.intl.string(z.t["Z+hCVU"]));
        if (s) return this.renderSpinner(z.intl.string(z.t.bhJseN));
        if (null == i) return l ? this.renderExpiredInvite() : this.renderSpinner(z.intl.string(z.t.b3lf1c));
        if (l) {
            if (n) {
                let e = this.state.currentUser;
                return d || null == e
                    ? this.renderSpinner(z.intl.string(z.t.bYb2nS))
                    : this.requiresVerification && null != e
                      ? this.renderVerification(e)
                      : this.renderAuthenticated(i, e, t);
            }
            return "login" === this.getMode()
                ? (0, a.jsx)(iD, { giftCode: i, transitionTo: r, location: o })
                : (0, a.jsx)(lv, { giftCodeSKU: t, giftCode: i, transitionTo: r, location: o });
        }
        return null;
    }
}
let lI = m.Ay.connectStores([nA.A, nH.A, eQ.default, nz.A, eu.A, nF.A], (e) => {
    let t = e.match.params.giftCode,
        n = nA.A.get(t),
        i = null != n ? nz.A.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: i,
        libraryApplication: null != i && n?.entitlementBranches != null ? nK.YI(n.entitlementBranches, i, nH.A) : null,
        authenticated: eQ.default.isAuthenticated(),
        defaultRoute: eu.A.defaultRoute,
        isResolved: nA.A.getIsResolved(t),
        isAccepting: nA.A.getIsAccepting(t),
        libraryApplicationsFetched: nH.A.fetched,
        nativeAppState: nF.A.getState(t),
    };
})(lC);
function lS(e) {
    let { sku: t, children: n, giftCodeCode: i, transitionTo: l } = e,
        s = (0, nW.bF)(t);
    return (o.useEffect(() => {
        null != i && s && l(b.BVt.APP_WITH_GIFT_CODE(i));
    }, [s, i, l]),
    s)
        ? (0, a.jsxs)(k.Ay, {
              children: [(0, a.jsx)(k.hE, { children: z.intl.string(z.t.b3lf1c) }), (0, a.jsx)(k.CK, {})],
          })
        : n;
}
var lT = n(871194),
    ly = n(799365),
    lb = n(894778),
    lR = n(315290),
    lO = n(396574),
    lL = n(94654);
m.Ay.initialize();
class lk extends o.PureComponent {
    componentDidMount() {
        (0, P.d)("guildTemplate"),
            lO.VP || eX.A.launch("discord://" + b.BVt.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && eS.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return lO.VP
            ? (0, a.jsx)("div", { className: Q.eT, children: (0, a.jsx)(V.$, { text: e, fullWidth: !0, onClick: t }) })
            : (0, a.jsx)(k.KE, { className: Q.eT });
    }
    renderSpinner(e) {
        return (0, a.jsxs)(k.Ay, { children: [(0, a.jsx)(k.hE, { children: e }), (0, a.jsx)(k.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: B()(Q.Ot, Q.QB), children: z.intl.string(z.t.C7ZRNw) }),
                (0, a.jsx)(k.tK, { children: z.intl.string(z.t.A6MwXE) }),
                this.renderButton(z.intl.string(z.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: Q.QB, children: z.intl.string(z.t.csrAMJ) }),
                (0, a.jsx)(k.tK, { children: z.intl.string(z.t["m1+IBn"]) }),
                this.renderButton(z.intl.string(z.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (eM()(null != e, "guild template must not be null"), e.state === ij.QB.RESOLVING)
            ? (0, a.jsx)(k.Ay, { className: lL.sL, children: (0, a.jsx)(ly.A, { guildTemplate: e }) })
            : (0, a.jsx)(lD, { guildTemplate: e });
    }
    renderContinue() {
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { children: z.intl.string(z.t.fOc4gn) }),
                this.renderButton(z.intl.string(z.t.fIv16B), this.handleContinue),
            ],
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: i, location: l } = this.props;
        if (null == e) return this.renderSpinner(z.intl.string(z.t.ZTNur7));
        if (t === b.fAW.OPEN) return this.renderAppOpened();
        if (t === b.fAW.OPENING) return this.renderSpinner(z.intl.string(z.t["Z+hCVU"]));
        switch (e.state) {
            case ij.QB.RESOLVING:
                return this.renderSpinner(z.intl.string(z.t["Z+hCVU"]));
            case ij.QB.RESOLVED:
                if (n || !lO.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, a.jsx)(iD, { guildTemplate: e, transitionTo: i, location: l });
                return (0, a.jsx)(lv, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: l,
                    onRegister: () => {
                        (0, l_.C)(lN.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            lb.A.flowStart(lR.do.ORGANIC_GUILD_TEMPLATES, lR.ju.NUF_STARTED);
                    },
                });
            case ij.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function lD(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, lT.A)(t, !1);
    lb.A.flowStep(lR.do.ORGANIC_GUILD_TEMPLATES, lR.jC.GUILD_CREATE);
    let l = (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(k.hE, { className: lL.wx, children: z.intl.string(z.t.UNFvtM) }),
            n,
            (0, a.jsx)("div", {
                className: lL.Tf,
                children: (0, a.jsx)(V.$, { text: z.intl.string(z.t.xr59t7), fullWidth: !0, onClick: i }),
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
function lP(e, t, n) {
    e.preventDefault(),
        T.default.track(b.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        });
    let i = eQ.default.getFingerprint(),
        l = null != i ? i : eQ.default.getId();
    eS.A.openMobileApp(n.state === ij.QB.RESOLVED ? t : void 0, l);
}
function lw(e) {
    let { code: t } = e,
        n = (0, m.bG)([eI.A], () => eI.A.getGuildTemplate(t));
    return (o.useEffect(() => {
        (0, P.d)("guild_template_mobile");
    }, []),
    null == n || n.state === ij.QB.RESOLVING)
        ? (0, a.jsx)(k.Ay, { children: (0, a.jsx)(eL.y, {}) })
        : n.state === ij.QB.RESOLVED
          ? (0, a.jsxs)(k.Ay, {
                children: [
                    (0, a.jsx)(ly.A, { guildTemplate: n, tall: !0 }),
                    (0, a.jsx)("div", {
                        className: Q.QX,
                        children: (0, a.jsx)(V.$, {
                            text: z.intl.string(z.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => lP(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, a.jsx)(e4, {
                text: z.intl.string(z.t["e/rZ2n"]),
                buttonCta: z.intl.string(z.t.HAvYn0),
                onClick: (e) => lP(e, t, n),
            });
}
m.Ay.initialize(), n(938796);
var lG = n(821418),
    lB = n(665260),
    lU = n(362474),
    lV = n(695366),
    lM = n(964486),
    lF = n(921037),
    lW = n(4274);
m.Ay.initialize();
let lH = "register",
    lz = "login";
function lK(e) {
    let { message: t, onClick: n, invite: i, className: l } = e,
        s = i?.guild_scheduled_event != null;
    return lO.VP
        ? (0, a.jsx)("div", {
              className: l ?? (s ? Q.QX : Q.eT),
              children: (0, a.jsx)(V.$, { text: t, onClick: n, variant: s ? "active" : "primary", fullWidth: !0 }),
          })
        : (0, a.jsx)(k.KE, { className: l ?? Q.eT });
}
function lQ(e) {
    let { invite: t, inviteKey: n, handleAccept: i, handleDefaultTransition: l } = e,
        s = (0, m.bG)([e9.A], () => (t.state === b.elq.ERROR ? e9.A.getInviteError(n) : void 0)),
        r = t.guild_scheduled_event,
        o = s?.code === b.t02.INVALID_CANNOT_FRIEND_SELF;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)(k.Ay, {
                children: [
                    null != r
                        ? (0, a.jsx)(lm, { channel: t.channel, guildScheduledEvent: r })
                        : (0, a.jsx)(n6.A, { invite: t }),
                    null != s &&
                        (0, a.jsx)("div", {
                            className: Q.QX,
                            role: "alert",
                            children: (0, a.jsxs)(U.E, {
                                variant: "text-sm/medium",
                                color: "text-feedback-critical",
                                style: { display: "flex", alignItems: "center", gap: 4 },
                                children: [
                                    (0, a.jsx)(lV.E, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                                    " ",
                                    (0, lW.s)(s.code),
                                ],
                            }),
                        }),
                    (0, a.jsx)(lK, {
                        invite: t,
                        message: z.intl.string(o ? z.t.fIv16B : z.t.ohMvm1),
                        onClick: o ? l : i,
                        className: null != s ? Q.QX : void 0,
                    }),
                ],
            }),
            null != r &&
                null != t.guild &&
                (0, a.jsx)(k.Ay, {
                    className: Q.QX,
                    children: (0, a.jsx)(lf, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                }),
        ],
    });
}
function lX(e) {
    let { invite: t, rpcConnected: n, onContinue: i } = e;
    return (0, a.jsxs)(k.Ay, {
        children: [
            (0, a.jsx)(n6.A, { invite: t }),
            lO.VP
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("div", {
                              className: Q.QX,
                              children: (0, a.jsx)(V.$, {
                                  text: z.intl.string(z.t.UQvCf7),
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
                              children: (0, a.jsx)(V.$, {
                                  text: z.intl.string(z.t["2ixEBi"]),
                                  onClick: function () {
                                      T.default.track(b.HAw.INVITE_CTA_CLICKED, {
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
                : (0, a.jsx)(k.KE, { className: Q.eT }),
        ],
    });
}
function lY(e) {
    let { title: t } = e;
    return (0, a.jsxs)(k.Ay, { children: [(0, a.jsx)(k.hE, { children: t }), (0, a.jsx)(k.CK, {})] });
}
function lq(e) {
    let { banned: t, handleDefaultTransition: n } = e;
    return (0, a.jsxs)(k.Ay, {
        children: [
            (0, a.jsx)(k.hE, { className: B()(Q.Ot, Q.QB), children: z.intl.string(z.t.kux01N) }),
            (0, a.jsx)(k.tK, { children: t ? z.intl.string(z.t["5AkWAd"]) : z.intl.string(z.t["+qUJAj"]) }),
            (0, a.jsx)(lK, { message: z.intl.string(z.t.fIv16B), onClick: n }),
            (0, a.jsx)("div", {
                className: Q.Ot,
                style: { textAlign: "left" },
                children: (0, a.jsx)(ec.Q, {
                    size: "sm",
                    textVariant: "text-sm/medium",
                    text: z.intl.string(z.t.urIwn4),
                    onClick: () => window.open(t5.A.getArticleURL(b.MVz.INVALID_INVITES), "_blank"),
                }),
            }),
        ],
    });
}
function l$(e) {
    let { handleDefaultTransition: t } = e;
    return (0, a.jsxs)(k.Ay, {
        children: [
            (0, a.jsx)(k.hE, { children: z.intl.string(z.t.fOc4gn) }),
            (0, a.jsx)(lK, { message: z.intl.string(z.t.fIv16B), onClick: t }),
        ],
    });
}
var lZ = n(334465);
let lJ = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_dsa_webform",
    label: "Safety Experience Unauthenticated Report Form",
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 1, label: "EU user", config: { enabled: !0 } },
        { id: 2, label: "DSA E2E testing user", config: { enabled: !0 } },
    ],
});
m.Ay.initialize();
var l0 = n(163050);
m.Ay.initialize();
var l1 = n(701273);
function l2(e) {
    n.g.location.assign(e);
}
m.Ay.initialize(), n(426620), m.Ay.initialize();
let l7 = nL(iD),
    l4 = nL(function (e) {
        let t = o.useCallback(
                (t) => {
                    let n;
                    ((n = (0, lZ.B)(t, { path: b.BVt.CHANNEL(t2.pv.guildId(), t2.pv.channelId()) })),
                    +(n?.params?.channelId !== N.VV.ROLE_SUBSCRIPTIONS))
                        ? (e.transitionTo ?? D.pX)(t)
                        : D.bG(t);
                },
                [e.transitionTo],
            ),
            { isAuthenticated: n, loginStatus: i } = (0, m.cf)([eQ.default], () => ({
                isAuthenticated: eQ.default.isAuthenticated(),
                loginStatus: eQ.default.getLoginStatus(),
            })),
            { location: l, redirectTo: s } = e,
            [r, c] = o.useState(n);
        function u(e) {
            let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
            (0, E.Qh)({ handoffKey: t, handoffToken: n, handoffSource: i }), c(!1);
        }
        return ((0, lM.Ay)(() => {
            if (null != l) {
                let { handoff_key: e, handoff_token: t } = (0, d.parse)(l.search);
                if (null != e && null != t) {
                    let n = null != s ? I(s) : void 0;
                    r
                        ? x.A.logout("handoff", null).finally(() => {
                              u({ handoffKey: e, handoffToken: t, handoffSource: n });
                          })
                        : u({ handoffKey: e, handoffToken: t, handoffSource: n });
                }
            }
        }),
        r || i === b.aUe.LOGGING_IN)
            ? (0, a.jsx)(k.Ay, { children: (0, a.jsx)(eL.y, {}) })
            : (0, a.jsx)(iD, { ...e, transitionTo: t });
    }),
    l3 = nL(function (e) {
        let { inviteKey: t, location: n, transitionTo: i, login: l } = e,
            s = (0, m.bG)([e9.A], () => e9.A.getInvite(t)),
            r = (0, m.bG)([nF.A], () => nF.A.getState(t)),
            d = (0, m.bG)([eQ.default], () => eQ.default.isAuthenticated()),
            c = (0, m.bG)([eu.A], () => eu.A.defaultRoute),
            u = (0, m.bG)([iV], () => iV.isUnderageAnonymous()),
            [h, x] = o.useState(!1);
        o.useLayoutEffect(() => {
            (r === b.fAW.OPEN || s?.state === b.elq.APP_OPENED) && x(!0);
        }, [s?.state, r]);
        let f = l ? lz : lH,
            A = o.useCallback((e) => p.Ay.getInviteContext(e, s), [s]),
            E = o.useCallback(
                (e) => {
                    null != s &&
                        (null != s.channel || e?.channel != null) &&
                        (s.guild?.id != null
                            ? i(b.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(s.code))
                            : p.Ay.transitionToInvite(e ?? s, i));
                },
                [s, i],
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
                            ei(e), null != e.channel && p.Ay.openApp(t, e.channel.id);
                        },
                    }).catch(() => {});
            }, [t, A, s?.code, s?.guild?.id]),
            j = o.useCallback(() => {
                i(c);
            }, [c, i]);
        if (
            ((0, lM.Ay)(() => {
                let e = eQ.default.getAnalyticsToken();
                if (
                    (null != e &&
                        g.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eQ.default.getId() }),
                    T.default.track(b.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }),
                    (0, P.d)("invite"),
                    lO.VP || eX.A.launch("discord://" + b.BVt.INVITE(t), () => void 0),
                    !l && u)
                ) {
                    let { baseCode: e } = (0, eY.y$)(t);
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
                        authenticated: i,
                        nativeAppState: l,
                        mode: s,
                        getAcceptInviteContext: r,
                        handleContinue: a,
                        transitionTo: d,
                    } = e,
                    c = (0, n7.A)(i),
                    u = (0, n7.A)(l);
                o.useEffect(() => {
                    if (s === lz && i && !1 === c) {
                        let e = eQ.default.getFingerprint();
                        if (null != e) {
                            let i = (0, eK.d)(e);
                            T.default.track(b.HAw.INVITE_LOGIN_SUCCESSFUL, {
                                invite_code: (0, eY.m0)(n),
                                guild_id: t?.guild?.id,
                                channel_id: t?.channel?.id,
                                inviter_id: t?.inviter?.id,
                                prev_user_id: i,
                            });
                        }
                        p.Ay.acceptInvite({
                            inviteKey: n,
                            context: r(b.S3d.INVITE),
                            skipOnboarding: !0,
                            callback: a,
                        }).catch(() => {});
                    }
                }, [i, c, s, r, a, t, n]),
                    o.useEffect(() => {
                        if (null != t && s === lH && i && !1 === c) {
                            let { channel: e } = t;
                            if (null != e)
                                if (((0, l_.C)(lN.zY.INVITE_UNCLAIMED), null != t.guild)) {
                                    let e = (0, lB.Lt)(t.flags ?? 0, lG.Q.IS_APPLICATION_BYPASS),
                                        n =
                                            t.guild.features?.includes(
                                                b.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED,
                                            ) &&
                                            t.guild.features?.includes(
                                                b.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL,
                                            );
                                    !e && n
                                        ? d(b.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id))
                                        : d(b.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code));
                                } else p.Ay.transitionToInvite(t, d);
                        }
                    }, [t, i, c, d, s]),
                    o.useEffect(() => {
                        null == t ||
                            (l !== u &&
                                (l === b.fAW.OPEN
                                    ? T.default.track(
                                          b.HAw.INVITE_APP_INVOKED,
                                          {
                                              invite_code: (0, eY.m0)(n),
                                              guild_id: t.guild?.id,
                                              channel_id: t.channel?.id,
                                              inviter_id: t.inviter?.id,
                                              user_is_member: null != t.guild && null != e6.A.getGuild(t.guild.id),
                                              size_total: t.approximate_member_count,
                                              invite_type: null != t.type ? tr.Xd[t.type] : void 0,
                                          },
                                          { flush: !0 },
                                      )
                                    : l === b.fAW.OPEN_FAIL &&
                                      T.default.track(b.HAw.INVITE_APP_INVOKE_FAILED, {
                                          invite_code: (0, eY.m0)(n),
                                          reason: "rpc_failed",
                                          invite_type: null != t.type ? tr.Xd[t.type] : void 0,
                                      })));
                    }, [t, l, u, n]);
            })({
                invite: s,
                inviteKey: t,
                authenticated: d,
                nativeAppState: r,
                mode: f,
                getAcceptInviteContext: A,
                handleContinue: E,
                transitionTo: i,
            }),
            null == s)
        )
            return null;
        let N = r === b.fAW.OPEN;
        if (h || N || s.state === b.elq.APP_OPENED)
            return (0, a.jsx)(lX, { invite: s, rpcConnected: N, onContinue: E });
        let { state: v } = s;
        if (v === b.elq.APP_NOT_OPENED) return (0, a.jsx)(l$, { handleDefaultTransition: j });
        if ([b.elq.RESOLVING, b.elq.ACCEPTING, b.elq.APP_OPENING].includes(v)) {
            let e =
                v === b.elq.ACCEPTING ? z.intl.string(z.t["6wsY16"]) : (b.elq.RESOLVING, z.intl.string(z.t["Z+hCVU"]));
            return (0, a.jsx)(lY, { title: e });
        }
        if (v === b.elq.EXPIRED) return (0, a.jsx)(lq, { banned: !1, handleDefaultTransition: j });
        if (v === b.elq.BANNED) return (0, a.jsx)(lq, { banned: !0, handleDefaultTransition: j });
        if (v === b.elq.RESOLVED) {
            if (d && (0, lB.Lt)(s.flags ?? 0, lG.Q.IS_GUEST_INVITE))
                return (
                    p.Ay.openApp(s.code),
                    lU.u.set(lF.B, s.code),
                    (0, a.jsx)(lX, { invite: s, rpcConnected: N, onContinue: () => i(b.BVt.APP) })
                );
            if (!d && lO.VP)
                return f === lz
                    ? (0, a.jsx)(iD, { invite: s, transitionTo: i, location: n })
                    : (0, a.jsx)(lv, {
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
                          transitionTo: i,
                      });
        }
        return v === b.elq.RESOLVED || v === b.elq.ERROR
            ? (0, a.jsx)(lQ, { invite: s, inviteKey: t, handleAccept: _, handleDefaultTransition: j })
            : null;
    }),
    l8 = nL(function (e) {
        let t = {
            guildTemplate: (0, m.bG)([eI.A], () => eI.A.getGuildTemplate(e.code)),
            nativeAppState: (0, m.bG)([nF.A], () => nF.A.getState(e.code)),
            authenticated: (0, m.bG)([eQ.default], () => eQ.default.isAuthenticated()),
            defaultRoute: (0, m.bG)([eu.A], () => eu.A.defaultRoute),
        };
        return (0, a.jsx)(lk, { ...e, ...t });
    }),
    l6 = nL(lI),
    l9 = nL(function (e) {
        let { inviteKey: t, transitionTo: n } = e,
            i = (0, m.bG)([e9.A], () => e9.A.getInvite(t));
        return (
            o.useEffect(() => {
                let e = eQ.default.getAnalyticsToken();
                null != e &&
                    g.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eQ.default.getId() }),
                    (0, P.d)("invite_mobile"),
                    T.default.track(b.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 });
            }, []),
            (0, a.jsx)(tX, {
                invite: i,
                onAcceptInvite: (e) => {
                    let n, l, s, r;
                    e?.preventDefault(),
                        T.default.track(
                            b.HAw.INVITE_APP_OPENED,
                            {
                                invite_code: (0, eY.m0)(t),
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
                        (n = null != i && i.state !== b.elq.EXPIRED && i.state !== b.elq.BANNED ? t : void 0),
                        (s = null != (l = eQ.default.getFingerprint()) ? l : eQ.default.getId()),
                        (r = null != i && i?.type != null ? Number(i?.type) : void 0),
                        p.Ay.openApp(n, void 0, s, void 0, r);
                },
                transitionTo: n,
            })
        );
    }),
    l5 = nL(lv),
    se = nL(function (e) {
        let { location: t, transitionTo: i = D.pX } = e,
            [l, s] = o.useState("submitting");
        function r() {
            return "Android" === eW().os.family || "iOS" === eW().os.family
                ? null
                : (0, a.jsx)(V.$, {
                      text: z.intl.string(z.t.dKhVQN),
                      fullWidth: !0,
                      onClick: () => i(b.BVt.LOGIN, { source: "authorizeIPAdress" }),
                  });
        }
        return ((0, lM.Ay)(() => {
            (0, P.d)("authorize_ip");
            let e = (0, em.A)(t);
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
                      (0, a.jsx)("img", { alt: "", src: n(792009), className: Q.SX }),
                      (0, a.jsx)(k.hE, { className: Q.QB, children: z.intl.string(z.t["f/54az"]) }),
                      (0, a.jsx)(k.tK, { className: Q.C2, children: z.intl.string(z.t.i3ehMr) }),
                      r(),
                  ],
              })
            : "succeeded" === l
              ? (0, a.jsxs)(k.Ay, {
                    children: [
                        (0, a.jsx)("img", { alt: "", src: n(841406), className: Q.SX }),
                        (0, a.jsx)(k.hE, { className: Q.QB, children: z.intl.string(z.t.iG0SlK) }),
                        (0, a.jsx)(k.tK, { className: Q.C2, children: z.intl.string(z.t["Elv+qt"]) }),
                        r(),
                    ],
                })
              : (0, a.jsxs)(k.Ay, {
                    children: [(0, a.jsx)(k.CK, {}), (0, a.jsx)(k.hE, { children: z.intl.string(z.t["9exy+V"]) })],
                });
    }),
    st = nL(function (e) {
        let { location: t } = e,
            [i, l] = o.useState("submitting");
        return (o.useEffect(() => {
            (0, P.d)("authorize_payment");
            let e = (0, em.A)(t);
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
                      (0, a.jsx)("img", { alt: "", src: n(678985), className: Q.SX }),
                      (0, a.jsx)(k.hE, { className: Q.QB, children: z.intl.string(z.t.GHRpue) }),
                      (0, a.jsx)(k.tK, { className: Q.C2, children: z.intl.string(z.t["1nO55v"]) }),
                  ],
              })
            : "succeeded" === i
              ? (0, a.jsxs)(k.Ay, {
                    children: [
                        (0, a.jsx)("img", { alt: "", src: n(586430), className: Q.SX }),
                        (0, a.jsx)(k.hE, { className: Q.QB, children: z.intl.string(z.t.ihHX53) }),
                        (0, a.jsx)(k.tK, { className: Q.C2, children: z.intl.string(z.t["pGPCv+"]) }),
                    ],
                })
              : (0, a.jsxs)(k.Ay, {
                    children: [(0, a.jsx)(k.CK, {}), (0, a.jsx)(k.hE, { children: z.intl.string(z.t.T3vC7n) })],
                });
    }),
    sn = nL(function (e) {
        let { location: t, transitionTo: n = l2 } = e,
            [i, l] = o.useState("submitting"),
            s = o.useRef(void 0);
        (0, lM.Ay)(() => {
            (0, P.d)("verify_email");
            let e = (0, em.A)(t);
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
                n(b.BVt.LOGIN, { source: "verify_email" });
            }, [n]),
            d = o.useCallback(() => {
                T.default.track(b.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: s.current }),
                    (0, l1.A)("verify_email");
            }, []);
        return "failed" === i
            ? (0, a.jsx)(eD, {
                  title: z.intl.string(z.t["PCgG3+"]),
                  subtitle: z.intl.string(z.t.tQpeA3),
                  buttonText: z.intl.string(z.t.dKhVQN),
                  onButtonClick: r,
              })
            : "succeeded" === i
              ? (0, a.jsx)(eD, {
                    title: z.intl.string(z.t["dAfGb+"]),
                    buttonText: z.intl.string(z.t["uJWIj/"]),
                    onButtonClick: d,
                    image: (0, a.jsx)(ey, { alt: z.intl.string(z.t["dAfGb+"]) }),
                })
              : (0, a.jsx)(eD, {
                    title: z.intl.string(z.t["0c8+5n"]),
                    subtitle: z.intl.string(z.t.ULTCBE),
                    loading: !0,
                });
    }),
    si = nL(() => {
        let [e, t] = o.useState(""),
            [i, l] = o.useState(""),
            [s, r] = o.useState(!1),
            [d, c] = o.useState(!1),
            [u, h] = o.useState(null),
            [g, x] = o.useState(null),
            f = (0, m.bG)([eE.A], () => eE.A.getCountryCode()),
            p = f.code.split(" ")[0],
            A = async () => {
                try {
                    await ep.A.resendCode(e);
                } catch (e) {
                    x(e.body.message);
                }
            },
            E = async () => {
                r(!0);
                try {
                    let { token: t } = await ep.A.verifyPhone(p + e, i);
                    h(null), x(null), c(!0), ep.A.validatePhoneForSupport(t);
                } catch (e) {
                    e.body.message ? (h(null), x(e.body.message)) : (h(e.body.phone), x(e.body.code));
                } finally {
                    r(!1);
                }
            },
            _ = (0, a.jsxs)(k.Ay, {
                children: [
                    (0, a.jsx)(k._V, { src: n(142041) }),
                    (0, a.jsxs)(k.hE, {
                        className: B()(Q.QX, ej.Uu, ej.wq, ej.Hu),
                        children: [
                            z.intl.string(z.t.WWzQta),
                            (0, a.jsx)(ef.y, { size: "md", color: "currentColor", className: Q.oY }),
                        ],
                    }),
                ],
            });
        return d
            ? _
            : (0, a.jsxs)(k.Ay, {
                  children: [
                      (0, a.jsx)(k.hE, { children: z.intl.string(z.t.o4JNrO) }),
                      (0, a.jsx)(k.tK, { className: Q.Ot, children: z.intl.string(z.t.y0tVbq) }),
                      (0, a.jsxs)(k.eB, {
                          className: Q.QX,
                          children: [
                              (0, a.jsx)(e_.A, {
                                  label: z.intl.string(z.t["eJnn0+"]),
                                  alpha2: f.alpha2,
                                  countryCode: p,
                                  value: e,
                                  autoComplete: "off",
                                  spellCheck: "false",
                                  onChange: t,
                                  forceMode: eA.Pd.PHONE,
                                  error: u,
                              }),
                              (0, a.jsx)(k.pd, {
                                  className: Q.QX,
                                  label: z.intl.string(z.t.OdzNbm),
                                  value: i,
                                  onChange: l,
                                  maxLength: 6,
                                  error: g,
                              }),
                              (0, a.jsx)(ec.Q, { text: z.intl.string(z.t["5b60gi"]), onClick: A }),
                              (0, a.jsx)("div", {
                                  className: Q.QX,
                                  children: (0, a.jsx)(V.$, {
                                      text: z.intl.string(z.t.i4jeWR),
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
    ss = nL(nV),
    sr = nL(ex),
    sa = nL(function (e) {
        let { location: t } = e,
            [n, i] = o.useState(!1),
            { verifySuccess: l, verifyErrors: s, redirectGuildId: r } = (0, m.bG)([eU], () => eU.getState());
        o.useEffect(() => {
            let e = (0, em.A)(t);
            eb.A.verify(e), (0, P.d)("verify_hub_email");
        }, [t]);
        let d = () => {
            let e, t;
            (e = (function (e) {
                let t = eW().os?.family;
                if ("Android" === t || "iOS" === t) {
                    let t = eQ.default.getFingerprint(),
                        n = (0, ez.I_)();
                    return (
                        eM()(null != e, "generateAppPath: guildId cannot be null"),
                        (0, ez.Ay)((0, eH.jN)(e), { utmSource: "verify_hub_email", fingerprint: t, attemptId: n })
                    );
                }
                return "discord://";
            })(r)),
                null != (t = (0, ez.X7)(e)) &&
                    T.default.track(b.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, eK.v)(t.fingerprint),
                        attempt_id: t.attemptId,
                        source: t.utmSource,
                    }),
                eX.A.launch(e, (e) => {
                    e || (0, D.bG)(eu.A.fallbackRoute);
                }),
                i(!0);
        };
        return n
            ? (0, a.jsx)(eD, {
                  title: z.intl.string(z.t.csrAMJ),
                  subtitle: z.intl.string(z.t["m1+IBn"]),
                  buttonText: z.intl.string(z.t.fIv16B),
                  onButtonClick: () => (0, D.pX)(b.BVt.CHANNEL(r)),
              })
            : l
              ? (0, a.jsx)(eD, {
                    title: z.intl.string(z.t["dAfGb+"]),
                    buttonText: z.intl.string(z.t["uJWIj/"]),
                    onButtonClick: d,
                    image: (0, a.jsx)(ey, { alt: z.intl.string(z.t["dAfGb+"]) }),
                })
              : null != s
                ? (0, a.jsx)(eD, {
                      title: z.intl.string(z.t["PCgG3+"]),
                      subtitle: z.intl.string(z.t.tQpeA3),
                      buttonText: z.intl.string(z.t["uJWIj/"]),
                      onButtonClick: d,
                  })
                : (0, a.jsx)(eD, {
                      title: z.intl.string(z.t["0c8+5n"]),
                      subtitle: z.intl.string(z.t.ULTCBE),
                      loading: !0,
                  });
    }),
    so = nL(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, nD.W)(t0.XK.CHANNEL, {
                guildId: e.params.guildId,
                channelId: e.params.channelId,
                messageId: e.params.messageId,
                search: t.search,
            });
        }
        return (0, a.jsx)(nG, { match: t, location: n, attemptDeepLink: i });
    }),
    sd = nL(function (e) {
        let { match: t, location: n } = e;
        async function i(e) {
            await (0, nD.W)(t0.XK.GAME_SHOP, {
                guildId: e.params.guildId,
                pageIndex: e.params.pageIndex,
                skuId: e.params.skuId,
                slug: e.params.slug,
            });
        }
        return (0, a.jsx)(nG, { match: t, location: n, attemptDeepLink: i });
    }),
    sc = nL(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, nD.W)(t0.XK.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search,
            });
        }
        return (0, a.jsx)(nG, { match: t, location: n, attemptDeepLink: i });
    }),
    su = nL(function (e) {
        let { location: t } = e,
            n = (0, m.bG)([eQ.default], () => eQ.default.isAuthenticated()),
            i = (0, m.bG)([eC.A], () => eC.A.hasLoadedExperiments),
            l = lJ.useExperiment({ location: "RSL - Landing Page" }, { autoTrackExposure: !0 }).enabled,
            [s, r] = o.useState(!1),
            [d, c] = o.useState(z.intl.string(z.t["9exy+V"])),
            [u, h] = o.useState(!0);
        function g(e) {
            switch (e) {
                case b.t02.INVALID_FORM_BODY:
                case b.t02.DSA_RSL_REPORT_NOT_FOUND:
                    c(z.intl.string(z.t.bzXDfc));
                    break;
                case b.t02.DSA_RSL_ALREADY_REQUESTED:
                    c(z.intl.string(z.t.rV00wq));
                    break;
                case b.t02.DSA_RSL_LIMITED_TIME:
                    c(z.intl.string(z.t["0dI29h"]));
                    break;
                case b.t02.DSA_RSL_REPORT_INELIGIBLE:
                    c(z.intl.string(z.t["RGa/Gb"]));
                    break;
                default:
                    c(z.intl.string(z.t["0QLzfv"]));
            }
        }
        return (
            o.useEffect(() => {
                n
                    ? (h(!0),
                      t8
                          .rQ({ withAnalyticsToken: !0 })
                          .then(() => h(!1))
                          .catch(() => h(!1)))
                    : h(!1);
            }, [n]),
            o.useEffect(() => {
                i || l || x.A.getExperiments();
            }, [i, l]),
            o.useEffect(() => {
                async function e(e) {
                    try {
                        let t = null != e ? await (0, t9.q)(e) : void 0;
                        null != t ? c(z.intl.string(z.t.e6mZMt)) : g(t.body?.code);
                    } catch (e) {
                        g(e.body?.code);
                    } finally {
                        r(!1);
                    }
                }
                r(!0), e((0, em.A)(t)), (0, P.d)("report_second_look");
            }, [t]),
            l &&
                !u &&
                (0, a.jsxs)(k.Ay, {
                    children: [(0, a.jsx)(k.hE, { className: Q.QB, children: d }), s && (0, a.jsx)(eL.y, {})],
                })
        );
    }),
    sh = nL(et),
    sm = nL(function (e) {
        let { match: t, location: i } = e,
            l = (0, d.parse)(i.search).token,
            [s, r] = o.useState("loading"),
            c = o.useRef(!1),
            h = o.useCallback(async (e) => {
                try {
                    T.default.track(b.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                        await x.A.oneTimeLogin(e),
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
            m = o.useCallback((e) => {
                let t = eQ.default.getFingerprint() ?? eQ.default.getId(),
                    n = `discord://login/one-time?token=${encodeURIComponent(e)}`;
                eX.A.launch(n, (e) => {
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
                        i = eQ.default.getInstallationForTracking();
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((n) => {
                            let { default: l } = n;
                            l.request(b.e$_.DEEP_LINK, {
                                type: t0.XK.ONE_TIME_LOGIN,
                                params: { token: e, fingerprint: t, installationId: i },
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
                                        : m(e);
                                })
                                .catch(() => {
                                    m(e);
                                })
                                .then(() => l.disconnect());
                        });
                },
                [m],
            );
        if (
            (o.useEffect(() => {
                let e = null != l && "string" == typeof l,
                    t = u.Fr ? "mobile" : u.v1 ? "tablet" : (0, tY.isDesktop)() ? "desktop_app" : "web";
                if ((T.default.track(b.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: e, device_type: t }), !e))
                    return void r("error");
                if (u.Fr || u.v1) {
                    let e = T.default.getSuperProperties()?.os;
                    T.default.track(b.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_ui_shown",
                        device_type: t,
                        platform: e,
                    });
                    return;
                }
                (0, tY.isDesktop)() ? h(l) : c.current || ((c.current = !0), r("rpc_attempting"), g(l));
            }, [l, i, h, g]),
            u.Fr || u.v1)
        ) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, a.jsx)(tJ, { token: l, hasError: "error" === s, errorReason: e });
        }
        if ((0, D.MX)()) return null;
        if ("app_launched" === s)
            return (0, a.jsx)(t1, {
                title: z.intl.string(z.t.RvUUOy),
                subtitle: z.intl.string(z.t["5/lR0g"]),
                buttonText: z.intl.string(z.t["2ixEBi"]),
                buttonOnClick: () => {
                    T.default.track(b.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: s }), h(l);
                },
            });
        if ("app_launch_not_supported" === s)
            return (0, a.jsx)(t1, {
                title: z.intl.string(z.t.qq4tjT),
                subtitle: z.intl.string(z.t.CVxYRo),
                buttonText: z.intl.string(z.t["2ixEBi"]),
                buttonOnClick: () => h(l),
            });
        if ("error" === s) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, a.jsx)(t1, {
                title: z.intl.string(z.t.RtCSr1),
                subtitle: z.intl.string(z.t["S+YjYJ"]),
                buttonText: z.intl.string(z.t.j3cG2p),
                buttonOnClick: () => {
                    T.default.track(b.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                        (0, D.pX)(b.BVt.LOGIN);
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
            s = (0, d.parse)(i.search).redirect_to ?? null;
        (null == s || "" === s || s.startsWith(b.BVt.ME) || (!(0, h.e)(s) && !eo(s))) && (s = null);
        let r = null;
        if (null == n) r = (0, n_.u8)(s);
        else {
            let { guild: e, target_application: t } = n;
            null != t
                ? null != l && (r = (0, nE.uD)(t.id, l, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (r = e5.Ay.getGuildSplashURL({ id: e.id, splash: e.splash }));
        }
        return { redirectTo: s, splash: r };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        null != e &&
            (!t && n && x.A.getExperiments(!0),
            T.default.track(
                b.HAw.INVITE_OPENED,
                { invite_code: (0, eY.m0)(e), load_time: nN.getTimeSinceNavigationStart() },
                { flush: !0 },
            )),
            t && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            L.initialize(),
            (0, P.D)();
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
        if (null != t && (ei(t), null != t.type && tr.uR.has(t.type))) {
            if ("denied" === (await ev()))
                return void T.default.track(b.HAw.INVITE_APP_INVOKE_FAILED, {
                    invite_code: (0, eY.m0)(e),
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
                { guild_template_code: e, load_time: nN.getTimeSinceNavigationStart() },
                { flush: !0 },
            ),
            eS.A.resolveGuildTemplate(e),
            eS.A.openNativeAppModal(e));
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
                (0, a.jsx)(en.A, { path: b.BVt.LOGIN_HANDOFF, render: (e) => (0, a.jsx)(l4, { ...e, redirectTo: t }) }),
                (0, a.jsx)(en.A, { path: b.BVt.LOGIN_ONE_TIME, render: (e) => (0, a.jsx)(sm, { ...e }) }),
                (0, a.jsx)(en.A, {
                    impressionName: c.ImpressionNames.USER_LOGIN,
                    path: b.BVt.LOGIN,
                    render: (e) => (0, a.jsx)(l7, { ...e, redirectTo: t }),
                }),
                (0, a.jsx)(en.A, {
                    impressionName: c.ImpressionNames.USER_REGISTRATION,
                    path: b.BVt.REGISTER,
                    render: (e) => (0, a.jsx)(l5, { ...e, redirectTo: t }),
                }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, a.jsx)(l6, { login: !0, ...e }),
                }),
                (0, a.jsx)(en.A, { path: b.BVt.GIFT_CODE(":giftCode"), render: (e) => (0, a.jsx)(l6, { ...e }) }),
                (0, a.jsx)(en.A, {
                    path: [b.BVt.INVITE_LOGIN(":inviteCode"), b.BVt.INVITE(":inviteCode")],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n,
                                },
                                location: i,
                                transitionTo: l,
                            } = e,
                            s = (0, eY.fB)(t, i.search);
                        return u.Fr || u.v1
                            ? (0, a.jsx)(l9, { inviteKey: s, transitionTo: l }, s)
                            : (0, a.jsx)(
                                  l3,
                                  {
                                      inviteKey: s,
                                      location: i,
                                      transitionTo: l,
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
                            location: i,
                            transitionTo: l,
                        } = e;
                        return u.Fr || u.v1
                            ? (0, a.jsx)(lw, { code: t }, t)
                            : (0, a.jsx)(l8, {
                                  code: t,
                                  location: i,
                                  transitionTo: l,
                                  login: n === b.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, a.jsx)(en.A, { path: b.BVt.VERIFY, render: (e) => (0, a.jsx)(sn, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.VERIFY_HUB_EMAIL, render: (e) => (0, a.jsx)(sa, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.VERIFY_REQUEST, render: (e) => (0, a.jsx)(si, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.DISABLE_EMAIL_NOTIFICATIONS, render: (e) => (0, a.jsx)(ss, { ...e }) }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, a.jsx)(sr, { ...e }),
                }),
                (0, a.jsx)(en.A, { path: b.BVt.AUTHORIZE_IP, render: (e) => (0, a.jsx)(se, { ...e }) }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.REJECT_IP,
                    render: (e) => (0, a.jsx)(sl, { source: b.BVt.REJECT_IP, ...e }),
                }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.REJECT_MFA,
                    render: (e) => (0, a.jsx)(sl, { source: b.BVt.REJECT_MFA, ...e }),
                }),
                (0, a.jsx)(en.A, { path: b.BVt.AUTHORIZE_PAYMENT, render: (e) => (0, a.jsx)(st, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.RESET, render: (e) => (0, a.jsx)(sl, { source: b.BVt.RESET, ...e }) }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, a.jsx)(sc, { ...e }),
                }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.CHANNELS_GAME_SHOP(t2.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, a.jsx)(sd, { ...e }),
                }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.CHANNEL(t2.pv.guildId(), t2.pv.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, a.jsx)(so, { ...e }),
                }),
                (0, a.jsx)(en.A, { path: b.BVt.REPORT, render: () => (0, a.jsx)(np, {}) }),
                (0, a.jsx)(en.A, { path: b.BVt.REPORT_SECOND_LOOK, render: (e) => (0, a.jsx)(su, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.ACCOUNT_REVERT(":token"), render: (e) => (0, a.jsx)(sh, { ...e }) }),
            ],
        });
    }
}
let sx = m.Ay.connectStores([eQ.default, e9.A, nA.A, eC.A, eI.A], (e) => {
    let { match: t, location: n } = e,
        i = t?.params?.inviteCode,
        l = null != i ? (0, eY.fB)(i, n.search) : void 0,
        s = t?.params?.giftCode,
        r = t?.params?.guildTemplateCode;
    return {
        inviteKey: l,
        isAuthenticated: eQ.default.isAuthenticated(),
        giftCode: s,
        guildTemplateCode: r,
        gift: null != s ? nA.A.get(s) : null,
        invite: null != l ? e9.A.getInvite(l) : null,
        guildTemplate: null != r ? eI.A.getGuildTemplate(r) : null,
        hasLoadedExperiments: eC.A.hasLoadedExperiments,
    };
})(sg);
