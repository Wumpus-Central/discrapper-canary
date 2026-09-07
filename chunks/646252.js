n.r(t), n.d(t, { default: () => sC });
var i,
    l,
    s,
    r,
    a = n(477900),
    o = n(582128),
    u = n(492462),
    c = n(562708),
    d = n(607399),
    h = n(470562),
    m = n(17928),
    g = n(228366),
    f = n(830215),
    p = n(869038),
    x = n(376728),
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
class L extends y.A {
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
                      (0, E.uA)(t.user), f.A.loginToken(t.token, !1), R(!0, l);
                  },
                  (e) => {
                      null != i && R(!1, l),
                          f.A.setFingerprint(i),
                          (0, E.mZ)(),
                          l === C.ROLE_SUBSCRIPTION &&
                              T.default.track(b.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: e.message ?? e.text,
                                  handoff_source: l,
                              });
                  },
              )
            : null != i
              ? (f.A.setFingerprint(i), R(!1, l), (0, E.mZ)())
              : (f.A.setFingerprint(i), (0, E.J0)());
    }
    handleEnd = (e) => {
        let { handoffToken: t, fingerprint: n } = e,
            i = S.A.key;
        null != i && S.A.isHandoffAvailable()
            ? this.handleHandoff({ handoffKey: i, handoffToken: t, fingerprint: n, handoffSource: void 0 })
            : (f.A.setFingerprint(null), (0, E.J0)());
    };
}
let O = new L();
var k = n(854378),
    w = n(976860),
    D = n(210714),
    G = n(430690),
    P = n(503698),
    U = n.n(P),
    F = n(834730),
    B = n(821609),
    V = n(181658),
    M = n(625494),
    H = n(499785),
    W = (((l = {}).START = "start"), (l.PASSWORD = "password"), (l.SUCCESS = "success"), (l.FAILED = "failed"), l),
    Q = n(375708),
    K = n(652989),
    z = n(221851);
function X(e) {
    let { setOriginalEmail: t, setSlide: i, ready: l, token: s } = e,
        [r, u] = o.useState(!1),
        [d, h] = o.useState(null),
        [m, g] = o.useState(null),
        [f, p] = o.useState(""),
        x = o.useRef(null);
    return (
        o.useEffect(() => {
            l && x.current?.focus();
        }, [l]),
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(k._V, { src: null == m ? n(79418) : n(579656), className: U()(z.SX, z.Ot) }),
                (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.IfBQ56) }),
                null != m && "" !== m
                    ? (0, a.jsx)(F.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: m })
                    : null,
                (0, a.jsxs)(k.eB, {
                    className: U()(z.SX, z.QX),
                    children: [
                        (0, a.jsx)(k.pd, {
                            name: "password",
                            type: "password",
                            label: Q.intl.string(Q.t["8dM4FO"]),
                            setRef: x,
                            className: z.SX,
                            value: f,
                            onChange: p,
                            error: d,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: Q.intl.string(Q.t["yY/PXY"]),
                        }),
                        (0, a.jsx)("div", {
                            className: z.Ot,
                            children: (0, a.jsx)(B.$, {
                                text: Q.intl.string(Q.t.ezv91b),
                                fullWidth: !0,
                                onClick: function () {
                                    if (!r) {
                                        if (0 === f.length) {
                                            h(Q.intl.string(Q.t.R98xD5)), M._.dispatch(b.jej.WAVE_EMPHASIZE);
                                            return;
                                        }
                                        return (
                                            null != m && g(null),
                                            null != d && h(null),
                                            t(""),
                                            u(!0),
                                            H.A.post({
                                                url: b.Rsh.ACCOUNT_REVERT,
                                                body: { token: s, password: f },
                                                trackedActionData: { event: c.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    p(""), t(n), i(W.SUCCESS);
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        g(
                                                            Q.intl.formatToPlainString(Q.t.aTVNes, {
                                                                statusPageURL: b.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new V.A(e);
                                                        t.hasFieldErrors()
                                                            ? h(t.getAnyErrorMessage())
                                                            : g(
                                                                  (function (e) {
                                                                      switch (e) {
                                                                          case b.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                              return Q.intl.string(Q.t["11zzGR"]);
                                                                          case b.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                              return Q.intl.string(Q.t["6qmgaI"]);
                                                                          case b.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                              return Q.intl.string(Q.t.bChnKs);
                                                                          default:
                                                                              return Q.intl.format(Q.t.aTVNes, {
                                                                                  statusPageURL: b.qF7.STATUS,
                                                                              });
                                                                      }
                                                                  })(t.code).toString(),
                                                              );
                                                    }
                                                    M._.dispatch(b.jej.WAVE_EMPHASIZE);
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
                    className: K.UD,
                    children: (0, a.jsx)(B.$, {
                        text: Q.intl.string(Q.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: function () {
                            p(""), i(W.START);
                        },
                    }),
                }),
            ],
        })
    );
}
var q = n(825484),
    Y = n(749314);
function $(e) {
    let { children: t } = e;
    return (0, a.jsx)("li", {
        className: K.Aw,
        children: (0, a.jsx)(F.E, { variant: "text-sm/medium", color: "text-default", children: t }),
    });
}
function Z(e) {
    let { setSlide: t, transitionTo: i } = e;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(k._V, { src: n(79418), className: U()(z.SX, z.Ot) }),
            (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t["8UcxI6"]) }),
            (0, a.jsx)(F.E, { variant: "text-md/normal", children: Q.intl.string(Q.t.O37hMl) }),
            (0, a.jsxs)(k.eB, {
                className: U()(z.SX, z.QX),
                children: [
                    (0, a.jsx)(F.E, { variant: "text-sm/normal" }),
                    (0, a.jsxs)("ul", {
                        className: K.qI,
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
            (0, a.jsxs)(q.e, {
                direction: "vertical",
                fullWidth: !0,
                className: K.UD,
                children: [
                    (0, a.jsx)(B.$, { text: Q.intl.string(Q.t.GgCRqR), onClick: () => t(W.PASSWORD) }),
                    (0, a.jsx)(B.$, {
                        text: Q.intl.string(Q.t["B/yHcQ"]),
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
            (0, a.jsx)(k._V, { src: n(79418), className: U()(z.SX, z.Ot) }),
            (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.ailkVG) }),
            (0, a.jsx)(k.tK, { children: Q.intl.format(Q.t["4ZMVCI"], { email: t }) }),
            (0, a.jsx)(F.E, {
                className: U()(z.QB, z.QX),
                variant: "text-md/normal",
                children: Q.intl.string(Q.t["dpAn+8"]),
            }),
        ],
    });
}
function ee(e) {
    let { transitionTo: t, token: n, width: i } = e,
        [l, s] = o.useState(W.START),
        [r, u] = o.useState(null),
        [d, h] = o.useState(""),
        m = { impression_group: c.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, a.jsx)("div", {
        style: { margin: "8px" },
        children: (0, a.jsxs)(G.t, {
            activeSlide: l,
            width: i,
            onSlideReady: u,
            children: [
                (0, a.jsx)(G.q, {
                    id: W.START,
                    impressionProperties: m,
                    impressionName: c.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, a.jsx)(Z, { setSlide: s, transitionTo: t }),
                }),
                (0, a.jsx)(G.q, {
                    id: W.PASSWORD,
                    impressionProperties: m,
                    impressionName: c.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, a.jsx)(X, {
                        setOriginalEmail: h,
                        setSlide: s,
                        transitionTo: t,
                        ready: r === W.PASSWORD,
                        token: n,
                    }),
                }),
                (0, a.jsx)(G.q, {
                    id: W.SUCCESS,
                    impressionProperties: m,
                    impressionName: c.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, a.jsx)(J, { email: d }),
                }),
            ],
        }),
    });
}
m.Ay.initialize();
class et extends o.PureComponent {
    static defaultProps = { transitionTo: w.pX, replaceWith: w.bG };
    componentDidMount() {
        (0, D.d0)("account_revert");
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
var el = n(132500),
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
async function eu(e) {
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
    ed = n(650048),
    eh = n(149790),
    em = n(396681);
m.Ay.initialize();
class eg extends o.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, guild: null };
    componentDidMount() {
        let e = (0, em.A)(this.props.location),
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
                    n = (0, eh.dangerouslyConstructGuildRecordFromUntypedObject)(t);
                this.setState({ success: !0, busy: !1, guild: n });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, D.d0)("disable_server_highlight_notifications");
    }
    renderBusy() {
        return (0, a.jsx)(k.Ay, { children: (0, a.jsx)(k.CK, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t.Z33eiP) }),
                (0, a.jsx)(k.tK, { children: Q.intl.format(Q.t.NRWtfC, { guildName: n.name }) }),
                (0, a.jsx)("div", {
                    className: z.eT,
                    children: (0, a.jsx)(B.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, a.jsx)("div", {
                    className: z.Ot,
                    children: (0, a.jsx)(ec.Q, {
                        text: Q.intl.string(Q.t["cGmT/J"]),
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
                (0, a.jsx)(k._V, { src: n(37772), className: z.SX }),
                (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t.ox9hIS) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t["/dcuR5"]) }),
                (0, a.jsx)("div", {
                    className: z.eT,
                    children: (0, a.jsx)(B.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let ef = m.Ay.connectStores([ed.A], () => ({ defaultRoute: ed.A.defaultRoute }))(eg);
var ep = n(628284),
    ex = n(557722),
    eA = n(628387),
    eE = n(148864),
    e_ = n(354948);
n(53516);
var ej = n(938442);
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
    eI = n(620233),
    eS = n(122906),
    eT = n(121623),
    ey = n(31008);
function eb(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s = 288, height: r = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: r },
        src: ey.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var eR = n(154672),
    eL = n(331322),
    eO = n(297264),
    ek = n(289873),
    ew = n(47084);
function eD(e) {
    let { title: t, subtitle: n, buttonText: i, image: l, onButtonClick: s, loading: r } = e;
    return (0, a.jsx)(k.Ay, {
        className: ew.kL,
        children: (0, a.jsxs)(eL.B, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, a.jsxs)(eL.B, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, a.jsxs)(eL.B, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != l &&
                                    (0, a.jsx)(eL.B, {
                                        align: "center",
                                        justify: "center",
                                        className: ew.Sl,
                                        children: l,
                                    }),
                                r && (0, a.jsx)(ek.y, { type: ek.y.Type.SPINNING_CIRCLE }),
                                (0, a.jsx)(eO.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, a.jsx)(F.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                className: ew.VA,
                                children: n,
                            }),
                    ],
                }),
                !r && (0, a.jsx)(B.$, { onClick: s, text: i, variant: "overlay-primary" }),
            ],
        }),
    });
}
let eG = !1,
    eP = null,
    eU = null;
class eF extends m.Ay.Store {
    static displayName = "HubEmailVerificationStore";
    getState() {
        return { verifySuccess: eG, verifyErrors: eP, redirectGuildId: eU };
    }
}
let eB = new eF(g.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        (eG = !0), (eP = null), (eU = t);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        (eG = !1), (eP = t);
    },
});
var eV = n(284009),
    eM = n.n(eV),
    eH = n(481613),
    eW = n.n(eH),
    eQ = n(400253),
    eK = n(742821),
    ez = n(80703),
    eX = n(280450),
    eq = n(877062);
m.Ay.initialize();
var eY = n(842241),
    e$ = n(74445),
    eZ = n(717421),
    eJ = n(661531),
    e0 = n(993077),
    e1 = n(235986),
    e2 = n(408738);
function e4(e) {
    let { text: t, buttonCta: i, onClick: l } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(k._V, { src: n(431979) }),
            (0, a.jsx)(k.hE, { className: U()(z.QX, z.QB, ej.tR), children: Q.intl.string(Q.t.eL5z0i) }),
            (0, a.jsx)(k.tK, { className: z.C2, children: Q.intl.string(Q.t.poAv63) }),
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
                            (0, a.jsx)(F.E, {
                                tag: "strong",
                                className: e2.p8,
                                variant: "text-md/normal",
                                style: { color: eJ.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, a.jsx)("div", {
                                className: e2.x6,
                                children: (0, a.jsx)(B.$, { text: i, fullWidth: !0, onClick: l }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e8(e) {
    let { text: t, buttonCta: n, theme: i = b.NJ8.DARK, onClick: l } = e;
    return (0, a.jsx)(k.Ay, { theme: i, children: (0, a.jsx)(e4, { text: t, buttonCta: n, onClick: l }) });
}
var e7 = n(765671),
    e3 = n(71393),
    e9 = n(299091),
    e5 = n(486020),
    e6 = n(403362),
    te = n(778712),
    tt = n(47167),
    tn = n(769015),
    ti = n(714991),
    tl = n(427262),
    ts = n(172799),
    tr = n(330936),
    ta = n(622625);
function to(e) {
    let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
    return 0 === t.memberCount ? null : t;
}
function tu(e) {
    return e.target_type === ts.yV.STREAM && null != e.target_user;
}
function tc(e) {
    return e.channel?.type === b.rbe.GROUP_DM;
}
function td(e) {
    return null == e.channel && null == e.guild && null != e.inviter;
}
function th(e) {
    return e.state === b.elq.ACCEPTED;
}
function tm(e) {
    let { guild_scheduled_event: t } = e;
    return null != t;
}
function tg(e) {
    let t;
    return !tm(e) && (!!td(e) || (null != e.inviter && !th(e) && ((t = to(e)), !((t?.memberCount ?? 0) > 100))));
}
function tf(e) {
    let { guild: t, user: n, application: i } = e;
    return null != i
        ? (0, a.jsx)(tn.A, { className: ta.Z2, game: i, size: ta.q6 })
        : null != n
          ? (0, a.jsx)(k.eu, { src: n.getAvatarURL(void 0, 100), size: te._3.DEPRECATED_SIZE_100, className: ta.my })
          : null != t
            ? (0, a.jsx)(k.$v, { guild: t, size: k.$v.Sizes.LARGER, className: ta.$f, animate: !0 })
            : null;
}
function tp(e) {
    let { invite: t, textClassName: n, className: i } = e,
        l = to(t);
    return null == l || tg(t) || t?.guild?.id === tr.TA
        ? null
        : (0, a.jsx)(k.R1, {
              className: U()(ta.He, i),
              online: l.onlineCount,
              total: l.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function tx(e) {
    let { invite: t, showBigUserIcon: n } = e,
        i = o.useMemo(
            () =>
                n
                    ? null
                    : tu(t) && null != t.target_user
                      ? e5.Ay.getUserAvatarURL(t.target_user)
                      : tg(t) && null != t.inviter
                        ? e5.Ay.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        l = Q.intl.string(Q.t["3rE1P8"]);
    return (
        tc(t)
            ? (l =
                  t.channel?.name != null && t.inviter?.username != null
                      ? Q.intl.format(Q.t.Lu4h18, { username: t.inviter.username })
                      : Q.intl.string(Q.t.OsdY8B))
            : tu(t) && null != t.target_user
              ? (l = Q.intl.formatToPlainString(Q.t.x2L32Q, { username: t.target_user.username }))
              : th(t)
                ? (l = Q.intl.string(Q.t["FDsl+J"]))
                : tg(t) &&
                  null != t.inviter &&
                  (l = Q.intl.format(Q.t.spU2mI, { username: tl.Ay.getFormattedName(t.inviter) })),
        (0, a.jsxs)("div", {
            className: ta.JB,
            children: [
                null != i &&
                    (0, a.jsx)("div", {
                        className: ta._t,
                        children: (0, a.jsx)(k.eu, { src: i, size: te._3.SIZE_24 }),
                    }),
                (0, a.jsx)(k.tK, { className: ta.__invalid_inviteJoinSubTitle, children: l }),
            ],
        })
    );
}
function tA(e) {
    let t,
        n,
        i,
        { user: l, guild: s, channel: r, application: o, showBigUserIcon: u } = e,
        c = (0, tt.Ay)(r);
    if (null != s)
        u && null == o && (t = (0, a.jsx)(k.$v, { guild: s, size: k.$v.Sizes.SMALL })),
            (n = s.name),
            null != o &&
                ((n = o.name),
                (i = (0, a.jsxs)("div", {
                    className: ta.JB,
                    children: [
                        (0, a.jsx)(k.tK, { className: ta.R9, children: Q.intl.string(Q.t["3gg9fF"]) }),
                        (0, a.jsxs)("div", {
                            className: ta.bo,
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
        let e = tl.Ay.getFormattedName(l);
        null != c && "" !== c
            ? ((n = c), null != r.icon && (t = (0, a.jsx)(k.F4, { channel: r, size: te._3.SIZE_32 })))
            : (n = e);
    } else if (null != l) {
        let e = tl.Ay.getFormattedName(l);
        (n = Q.intl.formatToPlainString(Q.t["4aF92R"], { username: e })),
            (i = (0, a.jsx)(k.tK, { className: ta.b$, children: Q.intl.format(Q.t.Quj7HX, { username: e }) }));
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(k.hE, {
                className: ta.DD,
                children: [
                    null != s ? (0, a.jsx)(ti.A, { guild: s, className: ta.n2, tooltipPosition: "left" }) : null,
                    t,
                    n,
                ],
            }),
            i,
        ],
    });
}
var tE = n(395671),
    t_ = n(95701),
    tj = n(889227),
    tN = n(548118),
    tv = n(557582),
    tC = n(167630),
    tI = n(424547);
function tS(e) {
    let { guildScheduledEvent: t, channel: n, onAcceptInvite: i, isSubmitting: l } = e;
    return (0, a.jsxs)("div", {
        className: tI.s4,
        children: [
            (0, a.jsx)(tv.Ay, {
                name: t.name,
                description: t.description ?? void 0,
                headerVariant: "heading-md/medium",
                descriptionClassName: tI.__invalid_channelDescription,
                guildId: t.guild_id,
                guildEvent: t,
                eventPreview: t,
            }),
            null != n &&
                (0, a.jsx)("div", {
                    className: tI.yW,
                    children: (0, a.jsx)(tC.A, { guildScheduledEvent: t, channel: n }),
                }),
            (0, a.jsx)("div", {
                className: tI.xG,
                children: (0, a.jsx)(B.$, {
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
function tT(e) {
    let { invite: t } = e,
        n = null != t.guild ? (0, eh.DY)(t.guild) : null;
    if (null == n) return null;
    let i = n.description ?? "";
    return (0, a.jsxs)("div", {
        className: tI.kQ,
        children: [
            (0, a.jsx)(eO.D, { className: tI.s7, variant: "text-sm/medium", children: Q.intl.string(Q.t.Eabu1z) }),
            (0, a.jsxs)("div", {
                className: tI.bo,
                children: [
                    (0, a.jsx)(tN.Ay, { guild: n, active: !0, size: tN.Ay.Sizes.MEDIUM }),
                    (0, a.jsxs)("div", {
                        className: tI.bW,
                        children: [
                            (0, a.jsxs)(F.E, {
                                className: tI.J5,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, a.jsx)(ti.A, { guild: n, className: tI.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, a.jsx)(tp, { invite: t, textClassName: tI.kS, className: tI.pe }),
                        ],
                    }),
                ],
            }),
            i.length > 0 &&
                (0, a.jsx)("details", {
                    className: tI.x_,
                    children: (0, a.jsx)(F.E, { color: "text-default", variant: "text-sm/normal", children: i }),
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
var tb = n(578564);
function tR(e) {
    let { invite: t, onAcceptInvite: n, disableUser: i = !1 } = e;
    if (null == t) return null;
    let l = null != t.guild ? (0, eh.DY)(t.guild) : null,
        s = null != t.channel ? (0, t_.OY)(t.channel) : null,
        r = null != t.target_application ? new tE.Ay(t.target_application) : null,
        o = i || null == t.inviter ? null : new tj.A(t.inviter),
        u =
            !(
                (null != t.approximate_member_count && t.approximate_member_count > 100) ||
                (null != l && l.features.has(b.GuildFeatures.COMMUNITY))
            ) &&
            null != o &&
            tc(t),
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
        d = { invite: t, user: o, guild: l, channel: s, application: r };
    return tm(t)
        ? (0, a.jsx)(ty, { invite: t, channel: s, isSubmitting: c, onAcceptInvite: n })
        : (0, a.jsxs)("div", {
              className: tb.kL,
              children: [
                  (0, a.jsx)(tf, { application: r, guild: l, user: u || td(t) ? o : null }),
                  td(t) ? null : (0, a.jsx)(tx, { ...d, showBigUserIcon: u }),
                  (0, a.jsx)(tA, { ...d, showBigUserIcon: u }),
                  (0, a.jsx)(tp, { ...d }),
                  (0, a.jsx)("div", {
                      className: tb.xG,
                      children: (0, a.jsx)(B.$, {
                          variant: "primary",
                          size: "md",
                          text: Q.intl.string(Q.t.ohMvm1),
                          onClick: n,
                          loading: c,
                          fullWidth: !0,
                      }),
                  }),
              ],
          });
}
var tL = n(43990),
    tO = n(241524),
    tk = n(573435),
    tw = n(260509),
    tD = n(370953);
function tG(e) {
    let { guild: t, outline: n } = e,
        i = (0, tO.A)("(max-width: 600px), (max-height: 600px)") ? tN.DN.LARGER : tN.DN.XLARGE,
        l = tN.iu[i],
        s = tN.s[i],
        r = o.useMemo(() => e5.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: l }), [t.icon, t.id, l]),
        u = (0, tw.Rb)(t),
        c =
            null != r
                ? (0, a.jsx)("img", { src: r, alt: "", className: tD.OV })
                : (0, a.jsx)("div", {
                      className: tD.ef,
                      style: { fontSize: s[u.length] ?? s[s.length - 1] },
                      children: u,
                  });
    return n
        ? (0, a.jsx)("div", {
              className: U()(tD._C, tD.AY),
              children: (0, a.jsx)(tk.Ay, {
                  mask: tk.Ay.Masks.SQUIRCLE,
                  width: l + 8,
                  height: l + 8,
                  children: (0, a.jsx)("div", {
                      className: tD.$d,
                      children: (0, a.jsx)(tk.Ay, { mask: tk.Ay.Masks.SQUIRCLE, width: l, height: l, children: c }),
                  }),
              }),
          })
        : (0, a.jsx)("div", {
              className: tD._C,
              children: (0, a.jsx)(tk.Ay, { mask: tk.Ay.Masks.SQUIRCLE, width: l, height: l, children: c }),
          });
}
var tP = n(927813);
let tU = /\.$/;
function tF(e) {
    return Array.isArray(e)
        ? e
              .map((e) => e.replace(tU, ""))
              .join(". ")
              .trim()
        : e;
}
function tB(e) {
    let [t, n] = o.useState(() => null != e && !e),
        [i, l] = o.useState(e);
    return null == i && null != e ? (l(e), n(!e)) : i !== e && l(e), [t, n];
}
function tV() {
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
                    }, e * tP.A.Millis.SECOND));
            }, []),
        ]
    );
}
var tM = n(153488),
    tH = n(95477),
    tW = n(866665),
    tQ = n(913122),
    tK = n(934337),
    tz = n(15552),
    tX = n(536637),
    tq = n.n(tX),
    tY = n(955437),
    t$ = n(888548);
n(861807);
var tZ = n(569717),
    tJ = n(204925);
function t0(e) {
    let {
        email: t,
        phoneToken: n,
        username: i,
        globalName: l,
        consent: s,
        password: r,
        guildTemplateCode: a,
        birthday: o,
        invite: u = null,
        giftCodeSKUId: d = null,
        promoEmailConsent: h = null,
        usedUsernameSuggestion: m = null,
    } = e;
    if ((g.h.dispatch({ type: "REGISTER" }), null != o)) {
        let e;
        (0, tZ.A)(o, b.JJy.REGISTER),
            T.default.track(b.HAw.AGE_GATE_ACTION, { source: tJ.w_.REGISTER, action: tJ.AM.AGE_GATE_SUBMITTED }),
            (e = tq()().diff(o, "years")) < 13 ||
                T.default.track(b.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                });
    }
    return H.A.post({
        url: b.Rsh.REGISTER,
        body: {
            fingerprint: eX.default.getFingerprint(),
            email: t,
            username: i,
            global_name: l,
            password: r,
            invite: u,
            consent: s,
            phone_token: n,
            date_of_birth: o?.format("YYYY-MM-DD"),
            gift_code_sku_id: d,
            guild_template_code: a,
            promotional_email_opt_in: h?.checked,
        },
        trackedActionData: {
            event: c.NetworkActionNames.USER_REGISTER,
            properties: {
                invite_code: u,
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
                T.default.track(b.HAw.AGE_GATE_ACTION, { source: tJ.w_.REGISTER, action: tJ.AM.AGE_GATE_SUCCESS });
        },
        (e) => {
            if (e instanceof t$.CaptchaCancelError) throw e;
            let t = new V.A(e);
            throw (
                (null != t.getFieldErrors("date_of_birth") && tY.Xv(tJ.w_.REGISTER),
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
var t1 = n(568385),
    t2 = n(975639);
function t4(e) {
    let { consent: t, consentRequired: n, onConsentChange: i } = e;
    return n
        ? (0, a.jsx)("div", {
              className: t2.IQ,
              children: (0, a.jsx)(t1.J, {
                  label: Q.intl.format(Q.t.qMDAP0, { termsURL: b.X7G.TERMS, privacyURL: b.X7G.PRIVACY }),
                  checked: t,
                  onChange: i,
                  labelType: "secondary",
              }),
          })
        : (0, a.jsx)(F.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: U()(z.Ot, t2.E2),
              children: Q.intl.format(Q.t["KI+BSb"], { termsURL: b.X7G.TERMS, privacyURL: b.X7G.PRIVACY }),
          });
}
function t8() {
    let { required: e, checked: t } = (0, tK.mZ)();
    return e
        ? (0, a.jsx)("div", {
              className: z.Ot,
              children: (0, a.jsx)(t1.J, {
                  label: Q.intl.string(Q.t["0p3R0+"]),
                  checked: t,
                  onChange: tK.Bw,
                  labelType: "secondary",
              }),
          })
        : null;
}
var t7 = n(890251);
function t3(e) {
    let {
            invite: t,
            username: n,
            parsedDateOfBirth: i,
            email: l,
            password: s,
            consent: r,
            consentRequired: u,
            apiErrors: c,
            onEmailChange: d,
            onPasswordChange: h,
            onConsentChange: m,
            onApiErrors: g,
            onOpenApp: f,
            onRegister: p,
        } = e,
        [x, A] = o.useState(!1),
        [E, _] = tV(),
        j = null != u && r,
        N = o.useRef(null),
        v = o.useRef(null);
    function C(e) {
        T.default.track(b.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function I(e) {
        T.default.track(b.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    o.useEffect(() => {
        N.current?.focus();
    }, []);
    let S = l.length > 0 && s.length > 0,
        y = o.useCallback(async () => {
            let e = tK.mZ.getState();
            A(!0), g({});
            try {
                await t0({
                    email: l,
                    username: n,
                    consent: r,
                    password: s,
                    invite: t.code,
                    birthday: i,
                    promoEmailConsent: e.required ? e : null,
                }),
                    p();
            } catch (t) {
                if ((A(!1), !(t instanceof tQ.LG))) return;
                let e = (0, tz.W)(t);
                g(e),
                    null != e.email || null != e.phone ? N.current?.focus() : null != e.password && v.current?.focus(),
                    "number" == typeof e.retry_after && _(e.retry_after);
            }
        }, [t, l, n, s, i, r, g, p, _]),
        R = o.useCallback(
            (e) => {
                e.preventDefault(), null != u && S && y();
            },
            [u, S, y],
        ),
        { message: L } = c;
    return (0, a.jsxs)("form", {
        onSubmit: R,
        children: [
            (0, a.jsx)("div", {
                className: z.SX,
                children: (0, a.jsx)(tH.k, {
                    label: Q.intl.string(Q.t.dI4d4S),
                    name: "email",
                    value: l,
                    onChange: d,
                    error: tF(c.email),
                    type: "email",
                    autoComplete: "username",
                    inputRef: N,
                    onFocus: () => C("email"),
                    onBlur: () => I("email"),
                }),
            }),
            (0, a.jsx)(tH.k, {
                label: Q.intl.string(Q.t["CIGa+7"]),
                name: "password",
                value: s,
                onChange: h,
                error: tF(c.password),
                type: "password",
                autoComplete: "new-password",
                inputRef: v,
                onFocus: () => C("password"),
                onBlur: () => I("password"),
            }),
            (0, a.jsx)(t8, {}),
            (0, a.jsx)(t4, { consent: r, consentRequired: u, onConsentChange: m }),
            (0, a.jsx)(tW.m, {
                text: !r && u ? Q.intl.string(Q.t.AY4IVA) : null,
                children: (0, a.jsx)("div", {
                    className: z.QX,
                    children: (0, a.jsx)(B.$, {
                        text: Q.intl.string(Q.t["825cFy"]),
                        variant: "primary",
                        fullWidth: !0,
                        type: "submit",
                        loading: x,
                        disabled: !j || E || !S,
                    }),
                }),
            }),
            "string" == typeof L ? (0, a.jsx)(k.ME, { className: U()(z.QX, t2.gJ), children: L }) : null,
            (0, a.jsx)("div", {
                className: t7.o3,
                children: (0, a.jsx)(ec.Q, {
                    text: Q.intl.string(Q.t.renMUD),
                    textVariant: "text-sm/normal",
                    onClick: f,
                }),
            }),
        ],
    });
}
function t9(e) {
    let { guild: t } = e,
        n =
            e5.Ay.getGuildBannerURL(t) ??
            (null != t.splash ? e5.Ay.getGuildSplashURL({ id: t.id, splash: t.splash, size: 640 }) : null);
    return (0, a.jsx)("div", { className: t7.ZK, style: null != n ? { backgroundImage: `url(${n})` } : void 0 });
}
function t5(e) {
    let { invite: t, kicker: n } = e,
        i = null != t.guild ? (0, eh.DY)(t.guild) : null;
    return null == i
        ? null
        : (0, a.jsxs)("header", {
              children: [
                  (0, a.jsx)(t9, { guild: i }),
                  (0, a.jsxs)("div", {
                      className: t7.lu,
                      children: [
                          (0, a.jsx)("div", { className: t7.LJ, children: (0, a.jsx)(tG, { guild: i, outline: !0 }) }),
                          (0, a.jsx)(F.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: n ?? Q.intl.string(Q.t["3rE1P8"]),
                          }),
                          (0, a.jsxs)("div", {
                              className: t7.G1,
                              children: [
                                  (0, a.jsx)(eO.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: t7.qd,
                                      children: i.name,
                                  }),
                                  (0, a.jsx)(ti.A, { guild: i, tooltipPosition: "left" }),
                              ],
                          }),
                          (0, a.jsx)(tp, { invite: t }),
                      ],
                  }),
                  (0, a.jsx)("div", { className: t7.yF }),
              ],
          });
}
var t6 = n(201505);
n(801541);
var ne = n(889137),
    nt = n(546727),
    nn = n(5052),
    ni = n(446837);
let nl = window.ResizeObserver ?? ni.t;
function ns(e) {
    let { show: t, children: n, top: i = 0, bottom: l = 0 } = e,
        { ref: s, height: r } = (function () {
            let e = o.useRef(null),
                [t, n] = o.useState(0),
                i = o.useMemo(
                    () =>
                        new nl((e) => {
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
        u = (0, eZ.z)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: { height: t ? r : 0, paddingBottom: t ? `${l}px` : "0px", marginTop: t ? `${i}px` : "0px" },
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
    return (0, a.jsx)(e$.animated.div, {
        style: { overflow: "hidden", height: u.height, paddingBottom: u.paddingBottom, marginTop: u.marginTop },
        children: (0, a.jsx)(e$.animated.div, { style: { opacity: c.opacity }, ref: s, children: n }),
    });
}
function nr(e) {
    let t,
        { username: n, suggestion: i, globalName: l, isUsernameFocused: s, onClickSuggestion: r } = e,
        o = (0, nn.i)(n, !0, !0),
        u = n.length > 0;
    return (
        (t = u
            ? (0, ne.YW)(o)
                  .with({ type: nt.q.ERROR, message: ne.P.select() }, (e) =>
                      (0, a.jsx)(F.E, { className: t2.vU, variant: "text-sm/normal", children: e }),
                  )
                  .with({ type: nt.q.AVAILABLE, message: ne.P.select() }, (e) =>
                      (0, a.jsx)(F.E, { className: t2.vq, variant: "text-sm/normal", children: e }),
                  )
                  .otherwise(() =>
                      (0, a.jsx)(F.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: Q.intl.string(Q.t.z7c4bP),
                      }),
                  )
            : null != i && i.length > 0 && l.length > 0
              ? (0, a.jsx)(F.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: Q.intl.format(Q.t.nDGqqq, { suggestion: i, nameOnClick: r }),
                })
              : (0, a.jsx)(F.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: Q.intl.string(Q.t.z7c4bP),
                })),
        (0, a.jsx)(ns, { show: (u && o?.type === nt.q.ERROR) || s, top: -12, bottom: 20, children: t })
    );
}
function na(e) {
    let {
            username: t,
            parsedDateOfBirth: n,
            apiErrors: i,
            onUsernameChange: l,
            onDateOfBirthChange: s,
            onNext: r,
            onOpenApp: u,
        } = e,
        [c, d] = o.useState(!1),
        h = o.useRef(null);
    function m(e) {
        T.default.track(b.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function g(e) {
        T.default.track(b.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    o.useEffect(() => {
        null != i.username && h.current?.focus();
    }, []);
    let f = t.length > 0 && null != n;
    return (0, a.jsxs)("form", {
        onSubmit: function (e) {
            e.preventDefault(), f && r();
        },
        children: [
            (0, a.jsxs)("div", {
                onBlur: () => d(!1),
                onFocus: () => d(!0),
                tabIndex: -1,
                children: [
                    (0, a.jsx)("div", {
                        className: z.SX,
                        children: (0, a.jsx)(tH.k, {
                            label: Q.intl.string(Q.t.TWzdWj),
                            name: "username",
                            value: t,
                            onChange: (e) => l(e.toLocaleLowerCase()),
                            error: tF(i.username),
                            autoComplete: "off",
                            inputRef: h,
                            onFocus: () => m("username"),
                            onBlur: () => g("username"),
                        }),
                    }),
                    (0, a.jsx)(nr, {
                        username: t,
                        suggestion: null,
                        globalName: "",
                        isUsernameFocused: c,
                        onClickSuggestion: () => {},
                    }),
                ],
            }),
            (0, a.jsx)(t6.A, {
                label: Q.intl.string(Q.t.rhBeKe),
                name: "date_of_birth",
                onChange: s,
                error: tF(i.date_of_birth),
                value: n,
                onFocus: m,
                onBlur: g,
            }),
            (0, a.jsx)("div", {
                className: z.QX,
                children: (0, a.jsx)(B.$, {
                    text: Q.intl.string(Q.t.PDTjLN),
                    variant: "primary",
                    fullWidth: !0,
                    type: "submit",
                    disabled: !f,
                }),
            }),
            (0, a.jsx)("div", {
                className: t7.o3,
                children: (0, a.jsx)(ec.Q, {
                    text: Q.intl.string(Q.t.renMUD),
                    textVariant: "text-sm/normal",
                    onClick: u,
                }),
            }),
        ],
    });
}
function no(e) {
    let { invite: t, onOpenApp: n } = e,
        i = null != t.guild ? (0, eh.DY)(t.guild) : null;
    return null == i
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  null != i ? (0, a.jsx)(t9, { guild: i }) : null,
                  (0, a.jsxs)("div", {
                      className: t7.zY,
                      children: [
                          (0, a.jsxs)("div", {
                              className: t7.rL,
                              children: [
                                  (0, a.jsx)(tG, { guild: i }),
                                  (0, a.jsx)(eO.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: t7.Rw,
                                      children: Q.intl.format(Q.t["33M5bg"], { guildName: i?.name ?? "" }),
                                  }),
                                  (0, a.jsx)(F.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: t7.Ap,
                                      children: Q.intl.string(Q.t["7N4JkE"]),
                                  }),
                                  (0, a.jsx)("div", {
                                      className: t7.S7,
                                      children: (0, a.jsx)(B.$, {
                                          variant: "primary",
                                          size: "md",
                                          text: Q.intl.string(Q.t["n+VrqG"]),
                                          onClick: n,
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsx)("div", {
                              className: t7.NG,
                              children: (0, a.jsx)("img", {
                                  alt: "",
                                  src: "https://cdn.discordapp.com/assets/content/55b848b6c57bf51009a1bdaa4465a9e8d79026b8b92889b0ea90a00475f19257.webp",
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function nu(e) {
    let { invite: t, onOpenApp: n, onOpenAppAfterRegistration: i } = e,
        [l, s] = o.useState(0),
        [r, u] = o.useState(""),
        [c, d] = o.useState(null),
        [h, g] = o.useState(""),
        [p, x] = o.useState(""),
        [A, E] = o.useState({}),
        _ = (0, m.bG)([tM.A], () => tM.A.getAuthenticationConsentRequired()),
        [j, N] = tB(_),
        [v, C] = o.useState(!1),
        I = o.useRef(null);
    function S(e) {
        s(e), I.current?.scrollTo(0, 0);
    }
    function T(e) {
        E(e), (null != e.username || null != e.date_of_birth) && S(0);
    }
    function y(e) {
        E((t) => {
            if (null == t[e]) return t;
            let n = { ...t };
            return delete n[e], n;
        });
    }
    function R(e) {
        u(e), y("username");
    }
    function L(e) {
        let t = e === c || (null != e && null != c && e.isSame(c, "day"));
        d(e), t || y("date_of_birth");
    }
    function O(e) {
        g(e), y("email");
    }
    function k(e) {
        x(e), y("password");
    }
    return (
        o.useEffect(() => {
            f.A.getLocationMetadata();
        }, []),
        (0, a.jsx)(tL.N, {
            theme: b.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, a.jsx)("div", {
                    ref: I,
                    "data-theme": b.NJ8.DARK,
                    className: U()(t7.MY, e),
                    children: v
                        ? (0, a.jsx)(no, { invite: t, onOpenApp: i })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(t5, { invite: t, kicker: 1 === l ? Q.intl.string(Q.t.dzGILG) : void 0 }),
                                  (0, a.jsx)("div", {
                                      className: t7.rf,
                                      children:
                                          0 === l
                                              ? (0, a.jsx)(na, {
                                                    username: r,
                                                    parsedDateOfBirth: c,
                                                    apiErrors: A,
                                                    onUsernameChange: R,
                                                    onDateOfBirthChange: L,
                                                    onNext: () => S(1),
                                                    onOpenApp: n,
                                                })
                                              : (0, a.jsx)(t3, {
                                                    invite: t,
                                                    username: r,
                                                    parsedDateOfBirth: c,
                                                    email: h,
                                                    password: p,
                                                    consent: j,
                                                    consentRequired: _,
                                                    apiErrors: A,
                                                    onEmailChange: O,
                                                    onPasswordChange: k,
                                                    onConsentChange: N,
                                                    onApiErrors: T,
                                                    onOpenApp: n,
                                                    onRegister: () => C(!0),
                                                }),
                                  }),
                              ],
                          }),
                }),
        })
    );
}
var nc = n(127982);
function nd(e, t, n, i) {
    e?.preventDefault(),
        T.default.track(
            b.HAw.INVITE_APP_OPENED,
            {
                invite_code: (0, eY.m0)(t),
                guild_id: n?.guild?.id,
                channel_id: n?.channel?.id,
                inviter_id: n?.inviter?.id,
                invite_type: null != n && n?.type != null ? ts.Xd[n?.type] : void 0,
                user_is_member: null != n && null != n.guild && null != e3.A.getGuild(n.guild.id),
                size_total: n?.approximate_member_count,
                time_to_click_ms: Math.round(performance.now()),
            },
            { flush: !0 },
        );
    let l = null != n && n.state !== b.elq.EXPIRED && n.state !== b.elq.BANNED ? t : void 0,
        s = eX.default.getFingerprint(),
        r = null != s ? s : eX.default.getId(),
        a = null != n && n?.type != null ? Number(n?.type) : void 0;
    x.Ay.openApp(l, void 0, r, void 0, { inviteType: a, didRegister: i?.didRegister });
}
function nh() {
    return (0, a.jsx)("div", { className: nc.$k, children: (0, a.jsx)(ek.y, {}) });
}
function nm(e) {
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
            (0, e6.xb)(n);
    }
}
function ng(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === b.elq.BANNED
        ? (0, a.jsx)(e4, { text: Q.intl.string(Q.t["5AkWAd"]), buttonCta: Q.intl.string(Q.t["8osdkn"]), onClick: n })
        : (0, a.jsx)(e4, { text: Q.intl.string(Q.t["usP+Mb"]), buttonCta: Q.intl.string(Q.t["8osdkn"]), onClick: n });
}
function nf(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: i, sectionClassName: l, inviteCardClassName: s = nc.qF } = e,
        { ref: r, height: o } = (0, e7.Ay)(),
        u = (0, eZ.z)({ height: null != o && 0 !== o ? `${o}px` : `${i}px`, config: e$.config.stiff });
    return (0, a.jsxs)(e$.animated.div, {
        className: s,
        style: u,
        children: [
            (0, a.jsx)(e$.animated.div, {
                className: nc.NS,
                style: u,
                children: (0, a.jsx)("section", { ref: r, className: l, children: t }),
            }),
            n,
        ],
    });
}
function np(e) {
    let { invite: t } = e;
    if (null == t || !tm(t)) return null;
    let n = nm(t);
    return (0, a.jsx)(nf, {
        startAnimHeightPx: 0,
        sectionClassName: nc.ui,
        children: 1 === n ? (0, a.jsx)(tT, { invite: t }) : null,
    });
}
let nx = { 1: nc._r, 2: nc.Gm, 0: nc.Kt };
function nA(e) {
    let t,
        { invite: n } = e,
        i = nm(n),
        l = o.useRef(!1);
    if (
        (o.useEffect(() => {
            l.current ||
                (null != n &&
                    1 === i &&
                    ((l.current = !0),
                    T.default.track(b.HAw.INVITE_ACCEPT_BUTTON_RENDERED, {
                        invite_code: n.code,
                        guild_id: n.guild?.id,
                        duration_ms_since_page_load: Math.round(performance.now()),
                    })));
        }, [n, i]),
        null == n)
    )
        t = (0, a.jsx)(nh, {});
    else
        switch (i) {
            case 1:
                t = (0, a.jsx)(tR, { ...e, invite: n });
                break;
            case 2:
                t = (0, a.jsx)(ng, { ...e, invite: n });
                break;
            default:
                t = (0, a.jsx)(nh, {});
        }
    return (0, a.jsx)(nf, { startAnimHeightPx: 200, sectionClassName: nx[i], inviteCardClassName: nc.qF, children: t });
}
function nE(e) {
    let { invite: t } = e,
        [n, i] = o.useState(null);
    return (o.useLayoutEffect(() => {
        let e;
        null == n &&
            null != t &&
            1 === nm(t) &&
            i(
                ((e = t.guild_experiments?.["2026-08-mweb-invite-registration"]),
                e?.variation === 1 && !eX.default.isAuthenticated() && null != t.guild && null == t.target_application),
            );
    }, [t, n]),
    !0 === n)
        ? (0, a.jsx)(nu, {
              invite: t,
              onOpenApp: e.onAcceptInvite,
              onOpenAppAfterRegistration: e.onOpenAppAfterRegistration,
          })
        : (0, a.jsx)(n_, { ...e });
}
function n_(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = t ?? {},
        l = {};
    if (i?.splash != null) {
        let e = e5.Ay.getGuildSplashURL({ id: i.id, splash: i.splash });
        null != e && ((l.backgroundImage = `url(${e})`), (l.backgroundSize = "cover"));
    }
    return (0, a.jsxs)(k.Ay, {
        theme: b.NJ8.DARK,
        className: nc.G3,
        style: l,
        contentClassName: nc.__,
        children: [(0, a.jsx)(nA, { ...e, onAcceptInvite: n }), (0, a.jsx)(np, { ...e })],
    });
}
var nj = n(723702);
function nN(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s = 288, height: r = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/575199861cc3c18cdeb6745807591de54ce1ce9ddad5bae636a5737664545aa0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var nv = n(474545),
    nC = n(604880);
function nI(e) {
    let { token: t, hasError: n, errorReason: i } = e;
    return n
        ? (0, a.jsxs)("div", {
              className: nv.MY,
              children: [
                  (0, a.jsx)("div", { className: nv.r$, children: (0, a.jsx)("img", { src: nC, alt: "" }) }),
                  (0, a.jsxs)("div", {
                      className: nv.Qs,
                      children: [
                          (0, a.jsx)(nN, { alt: "" }),
                          (0, a.jsx)(eO.D, {
                              variant: "heading-lg/semibold",
                              className: nv.ky,
                              children: Q.intl.string(Q.t.RtCSr1),
                          }),
                          (0, a.jsx)(F.E, {
                              variant: "text-md/normal",
                              className: nv.G3,
                              children: Q.intl.string(Q.t["S+YjYJ"]),
                          }),
                          (0, a.jsx)(B.$, {
                              variant: "primary",
                              text: Q.intl.string(Q.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  T.default.track(b.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: i }),
                                      (0, w.pX)(b.BVt.LOGIN);
                              },
                          }),
                      ],
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: nv.MY,
              children: [
                  (0, a.jsx)("div", { className: nv.r$, children: (0, a.jsx)("img", { src: nC, alt: "" }) }),
                  (0, a.jsxs)("div", {
                      className: nv.Qs,
                      children: [
                          (0, a.jsx)(nN, { alt: "" }),
                          (0, a.jsx)(eO.D, {
                              variant: "heading-lg/semibold",
                              className: nv.ky,
                              children: Q.intl.string(Q.t["9h/0Rl"]),
                          }),
                          (0, a.jsx)(F.E, {
                              variant: "text-md/normal",
                              className: nv.G3,
                              children: Q.intl.string(Q.t.Wgm7Om),
                          }),
                          (0, a.jsx)(B.$, {
                              variant: "primary",
                              text: Q.intl.string(Q.t.NydsTd),
                              fullWidth: !0,
                              onClick: () => {
                                  let e, n;
                                  (e = (function (e) {
                                      let t = platform.os?.family;
                                      if ("Android" === t || "iOS" === t) {
                                          let t = eX.default.getFingerprint(),
                                              n = (0, eK.I_)(),
                                              i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/login/one-time?token=${e}`;
                                          return (0, eK.Ay)(i, {
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
                                      eq.A.launch(e, (e) => {
                                          e || (0, w.bG)({ pathname: b.BVt.LOGIN });
                                      });
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var nS = n(613057);
function nT(e) {
    let { title: t, subtitle: n, buttonText: i, buttonOnClick: l } = e;
    return (0, a.jsx)(k.Ay, {
        children: (0, a.jsxs)(eL.B, {
            gap: 24,
            children: [
                (0, a.jsxs)(eL.B, {
                    gap: 8,
                    children: [(0, a.jsx)(k.hE, { children: t }), (0, a.jsx)(k.tK, { children: n })],
                }),
                (0, a.jsx)(B.$, { onClick: l, text: i, fullWidth: !0 }),
            ],
        }),
    });
}
var ny = n(463347),
    nb = n(189213),
    nR = n(192308),
    nL = n(347704),
    nO = n(803306),
    nk = n(17372),
    nw = n(369053),
    nD = n(975571),
    nG = n(928658);
async function nP(e, t) {
    try {
        await (0, nw.TP)(e, t);
    } catch (e) {
        if (null != e && "object" == typeof e && 429 === e.status)
            throw { status: 429, body: { message: Q.intl.string(Q.t.Z2hIUf) } };
        throw e;
    }
}
function nU(e, t) {
    let i = !1;
    function l() {
        i || t?.();
    }
    function s(s) {
        function r() {
            return nP(e, s);
        }
        async function o(t) {
            return await (0, nw.G_)(e, s, t);
        }
        function u(n) {
            (i = !0),
                setTimeout(() => {
                    i = !1;
                }, 0);
            let l = n?.token;
            switch (e) {
                case nk.tY.MESSAGE:
                    (0, nG.bM)(l, t);
                    break;
                case nk.tY.USER:
                    (0, nG.nQ)(l, t);
                    break;
                case nk.tY.GUILD:
                    (0, nG.V3)(l, t);
                    break;
                case nk.tY.MEDIA_TAKEDOWN:
                    (0, nG._Y)(l, t);
            }
        }
        (i = !0),
            setTimeout(() => {
                i = !1;
            }, 0),
            (0, nR.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("932606"), n.e("919840")]).then(n.bind(n, 79779));
                    return (t) =>
                        (0, a.jsx)(e, {
                            ...t,
                            onFormSubmit: o,
                            onResend: r,
                            onSuccess: u,
                            headerText: Q.intl.string(Q.t.H3Q7U8),
                            confirmButtonText: Q.intl.string(Q.t["13ofGu"]),
                            impression: { impressionName: c.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            );
    }
    return function () {
        function t(t) {
            return nP(e, t);
        }
        (0, nR.closeAllModals)(),
            (0, nR.openModalLazy)(
                async () => {
                    let { default: i } = await n.e("429232").then(n.bind(n, 180275));
                    return (n) =>
                        (0, a.jsx)(i, {
                            ...n,
                            onFormSubmit: t,
                            onSuccess: s,
                            headerText: Q.intl.string(Q.t.ZLRYGU),
                            confirmButtonText: Q.intl.string(Q.t.PDTjLN),
                            subtitle: e === nk.tY.MEDIA_TAKEDOWN ? Q.intl.string(Q.t.jt3z8f) : void 0,
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            );
    };
}
var nF = n(939249),
    nB = n(921853),
    nV = n(43008);
let nM = { [nk.tY.MESSAGE]: Q.t.fuqnBC, [nk.tY.USER]: Q.t.F4jrRW, [nk.tY.GUILD]: Q.t.gH3aMs },
    nH = (e) => {
        let { title: t, menuType: n, onReopen: i } = e,
            l = o.useCallback(() => {
                nU(n, i)();
            }, [n, i]);
        return (0, a.jsxs)(nF.D, {
            className: nV.b0,
            onClick: l,
            children: [
                (0, a.jsx)(F.E, { variant: "text-md/medium", children: t }),
                (0, a.jsx)(nB.n, { size: "sm", style: { transform: "rotate(180deg)" } }),
            ],
        });
    },
    nW = (e) => {
        let { dsaCapabilities: t, onReopen: n } = e;
        return (0, a.jsx)(eL.B, {
            gap: 16,
            children: (0, a.jsx)("div", {
                className: nV.kL,
                children: t.map((e) =>
                    e === nk.tY.MEDIA_TAKEDOWN || null == nM[e]
                        ? null
                        : (0, a.jsx)(nH, { title: Q.intl.string(nM[e]), menuType: e, onReopen: n }, e),
                ),
            }),
        });
    };
var nQ = n(881636),
    nK = n(138658);
let nz = () => {
    let { goToStep: e } = (0, nL.n)(),
        t = o.useCallback(() => {
            e(n$.DSA);
        }, [e]),
        n = o.useCallback(() => {
            e(n$.TIDA);
        }, [e]);
    return (0, a.jsxs)(eL.B, {
        gap: 8,
        children: [
            (0, a.jsx)(F.E, { variant: "text-md/normal", children: Q.intl.string(Q.t.bd1h5T) }),
            (0, a.jsxs)("div", {
                className: nK.k,
                children: [
                    (0, a.jsxs)(nF.D, {
                        className: nK.b,
                        onClick: t,
                        children: [
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(F.E, {
                                        variant: "text-md/medium",
                                        children: Q.intl.string(Q.t["AszWL/"]),
                                    }),
                                    (0, a.jsx)(F.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: Q.intl.string(Q.t["0Jikui"]),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(nQ.u, { size: "sm" }),
                        ],
                    }),
                    (0, a.jsxs)(nF.D, {
                        className: nK.b,
                        onClick: n,
                        children: [
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(F.E, { variant: "text-md/medium", children: Q.intl.string(Q.t.jMSjZL) }),
                                    (0, a.jsx)(F.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: Q.intl.string(Q.t.qEaUPS),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(nQ.u, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var nX = n(108124);
let nq = () =>
    (0, a.jsxs)(eL.B, {
        gap: 24,
        children: [
            (0, a.jsx)(F.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: Q.intl.string(Q.t["3zG2Y9"]),
            }),
            (0, a.jsxs)(eL.B, {
                gap: 16,
                children: [
                    (0, a.jsxs)(eL.B, {
                        gap: 8,
                        children: [
                            (0, a.jsx)(F.E, { variant: "text-md/semibold", children: Q.intl.string(Q.t.CfBo0z) }),
                            (0, a.jsxs)("ul", {
                                className: nX.T,
                                children: [
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)(F.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: Q.intl.string(Q.t.ofQnNQ),
                                        }),
                                    }),
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)(F.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: Q.intl.string(Q.t.dFaQGn),
                                        }),
                                    }),
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)(F.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: Q.intl.string(Q.t.RVNwXh),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(F.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: Q.intl.string(Q.t.o5azXJ),
                    }),
                    (0, a.jsx)(F.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: Q.intl.format(Q.t.YETtaY, {
                            policyURL: "https://discord.com/safety/non-consensual-intimate-media-policy-explainer",
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)(eL.B, {
                gap: 8,
                children: [
                    (0, a.jsx)(F.E, { variant: "text-md/semibold", children: Q.intl.string(Q.t.FJh2zi) }),
                    (0, a.jsx)(F.E, {
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
var nY = n(379492);
m.Ay.initialize();
var n$ = (((s = {}).SELECTION = "selection"), (s.DSA = "dsa"), (s.TIDA = "tida"), s);
let nZ = (e) => {
        let { transitionState: t, onClose: n } = e,
            [i, l] = o.useState(!0),
            [s, r] = o.useState([]),
            [u, c] = o.useState(null),
            d = (0, m.bG)([eX.default], () => eX.default.isAuthenticated()),
            h = (0, m.bG)([eC.A], () => eC.A.hasLoadedExperiments),
            g = o.useCallback(() => {
                (0, nw.OY)()
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
            d
                ? (l(!0),
                  nO
                      .fetchCurrentUser({ withAnalyticsToken: !0 })
                      .then(() => g())
                      .catch(() => l(!1)))
                : g();
        }, [d, g]),
            o.useEffect(() => {
                !(async function () {
                    h || (await f.A.getLocationMetadata(), f.A.getExperiments());
                })();
            }, [h]);
        let p = s.filter((e) => e !== nk.tY.MEDIA_TAKEDOWN),
            x = s.includes(nk.tY.MEDIA_TAKEDOWN),
            A = p.length > 0,
            E = A && x,
            _ = i || !h;
        o.useEffect(() => {
            _ || A || x || n();
        }, [_, A, x, n]);
        let j = o.useCallback(() => {
                (0, nR.openModalLazy)(() => Promise.resolve((e) => (0, a.jsx)(nZ, { ...e })), { dismissable: !1 });
            }, []),
            N = o.useCallback((e, t) => {
                "selection" !== t && "selection" !== e ? c("selection") : c(e);
            }, []),
            v = o.useMemo(() => nU(nk.tY.MEDIA_TAKEDOWN, j), [j]),
            C = u ?? (E ? "selection" : A ? "dsa" : "tida");
        if (_ || (!A && !x))
            return (0, a.jsx)(nb.Modal, {
                title: "",
                actions: [],
                transitionState: t,
                onClose: n,
                dismissable: !1,
                children: (0, a.jsx)(eL.B, {
                    gap: 16,
                    align: "center",
                    justify: "center",
                    style: { minHeight: "200px" },
                    children: (0, a.jsx)(ek.y, {}),
                }),
            });
        if (!E) {
            if (A)
                return (0, a.jsx)(nb.Modal, {
                    title: Q.intl.string(Q.t.Z11w18),
                    subtitle: Q.intl.format(Q.t["532l+q"], {
                        supportURL: nD.A.getArticleURL(b.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, a.jsx)(nW, { dsaCapabilities: p, onReopen: j }),
                });
            if (x)
                return (0, a.jsx)(nb.Modal, {
                    title: Q.intl.string(Q.t.YignUm),
                    actions: [{ text: Q.intl.string(Q.t.D5Czbu), variant: "primary", onClick: v }],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, a.jsx)(nq, {}),
                });
        }
        let I = [
            { stepKey: "selection", modalProps: { title: Q.intl.string(Q.t.Z11w18) }, body: (0, a.jsx)(nz, {}) },
            {
                stepKey: "dsa",
                modalProps: {
                    title: Q.intl.string(Q.t.Z11w18),
                    subtitle: Q.intl.format(Q.t["532l+q"], {
                        supportURL: nD.A.getArticleURL(b.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, a.jsx)(nW, { dsaCapabilities: p, onReopen: j }),
            },
            {
                stepKey: "tida",
                modalProps: { title: Q.intl.string(Q.t.YignUm) },
                body: (0, a.jsx)(nq, {}),
                nextButtonProps: { text: Q.intl.string(Q.t.D5Czbu) },
                onNext: () => (v(), !1),
            },
        ];
        return (0, a.jsx)("div", {
            className: { selection: nY.a, dsa: nY.q, tida: void 0 }[C],
            children: (0, a.jsx)(nL.t, {
                steps: I,
                currentStepKey: C,
                onStepChange: N,
                onClose: n,
                transitionState: t,
                dismissable: !1,
            }),
        });
    },
    nJ = () => (
        o.useEffect(() => {
            (0, nR.openModalLazy)(() => Promise.resolve((e) => (0, a.jsx)(nZ, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
var n0 = n(30793),
    n1 = n(970928),
    n2 = n(612181),
    n4 = n(179689);
let n8 = {
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
    getTimeSinceNavigationStart: () => Date.now() - n4.fL,
};
var n7 = n(649852),
    n3 = n.n(n7),
    n9 = n(615300),
    n5 = n(319060),
    n6 = n(844222),
    ie = n(240248),
    it = n(706192);
let ii = (0, ie.xI)(n5.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    il = { friction: 10, tension: 130 },
    is = function (e) {
        return class extends o.Component {
            timeout;
            anim = new n9.A.Value(0);
            state = { shouldAnimate: !d.Fr };
            componentDidMount() {
                d.Fr || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize());
            }
            handleResize = () => {
                let e = window.innerWidth > ii;
                !this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({ shouldAnimate: e });
            };
            handleResizeDebounced = n3()(this.handleResize, 60);
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
                n9.A.spring(this.anim, { toValue: e, ...il }).start(t);
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
                    className: it.i,
                    children: (0, a.jsx)(n6.C.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, a.jsx)(n9.A.div, {
                                className: it.l,
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, a.jsx)(e, { ...this.props }),
                            });
                        },
                    }),
                });
            }
        };
    };
var ir = n(603647),
    ia = n(970672),
    io = n(129014),
    iu = n(642277);
let ic = function (e) {
    let { match: t, location: n, attemptDeepLink: i } = e,
        [l, s] = o.useState(0);
    o.useEffect(() => {
        io.default.once("connected", () => {
            s(1);
        }),
            io.default.once("disconnected", () => {
                (0, w.pX)((0, iu.W)());
            }),
            io.default.connect();
    }, []),
        o.useEffect(() => {
            if (0 !== l) return;
            let e = setTimeout(() => (0, w.pX)((0, iu.W)()), 3e3);
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
    if ((0, w.MX)()) return null;
    switch (l) {
        case 1:
            return (0, a.jsxs)(k.Ay, {
                children: [
                    (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t.qllnGm) }),
                    (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.SXCxye) }),
                    (0, a.jsx)("div", {
                        className: z.eT,
                        children: (0, a.jsx)(B.$, {
                            text: Q.intl.string(Q.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => r(t, n),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: U()(z.Ot, z.F1),
                        children: (0, a.jsx)(ec.Q, {
                            text: Q.intl.string(Q.t["2ixEBi"]),
                            textVariant: "text-sm/normal",
                            onClick: () => (0, w.pX)((0, iu.W)()),
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
                    (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t.csrAMJ) }),
                    (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.ghBJz9) }),
                ],
            });
    }
};
var id = n(723923);
m.Ay.initialize();
class ih extends o.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, em.A)(this.props.location),
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
                    i = new tj.A(n);
                this.setState({ success: !0, busy: !1, user: i, category: t.category });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, D.d0)("disable_email_notifications");
    }
    renderBusy() {
        return (0, a.jsx)(k.Ay, { children: (0, a.jsx)(k.CK, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: i } = this.props,
            l = Q.intl.formatToPlainString(Q.t.YDAohB, { category: t });
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t.f6rdLg) }),
                (0, a.jsx)(k.tK, { children: l }),
                (0, a.jsx)("div", {
                    className: z.QX,
                    children: (0, a.jsx)(B.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => i(n) }),
                }),
                (0, a.jsx)("div", {
                    className: z.Ot,
                    children: (0, a.jsx)(ec.Q, {
                        text: Q.intl.string(Q.t.YYTirT),
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
            let e = id.px.find((e) => e.category === i);
            if (null != e) return this.renderCategorySuccess(i, e.label());
        }
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: te._3.DEPRECATED_SIZE_100,
                    className: z.SX,
                }),
                (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t["6U6OMQ"]) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t["yaDJ4/"]) }),
                (0, a.jsx)("div", {
                    className: z.eT,
                    children: (0, a.jsx)(B.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k._V, { src: n(37772), className: z.SX }),
                (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t.ox9hIS) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t["/dcuR5"]) }),
                (0, a.jsx)("div", {
                    className: z.eT,
                    children: (0, a.jsx)(B.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let im = m.Ay.connectStores([ed.A], () => ({ defaultRoute: ed.A.defaultRoute }))(ih);
var ig = n(110782),
    ip = n(10088),
    ix = n(871123),
    iA = n(189081),
    iE = n(67480),
    i_ = n(45938),
    ij = n(587895),
    iN = n(242874),
    iv = n(165191),
    iC = n(287809),
    iI = n(97352),
    iS = n(615396),
    iT = n(202541),
    iy = n(716592);
function ib() {
    return (0, a.jsxs)(o.Fragment, {
        children: [
            (0, a.jsx)(k.eu, { src: null, size: te._3.DEPRECATED_SIZE_100, className: z.SX }),
            (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.lTGZAl) }),
            (0, a.jsx)(k.hE, { className: U()(z.Ot, ej.tR), children: Q.intl.string(Q.t.ZTNur7) }),
        ],
    });
}
let iR = m.Ay.connectStores([iE.A, ij.A, iI.A, iC.default], (e) => {
    let { giftCode: t } = e,
        n = iE.A.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, iS.c9)(i) : null,
        application: null != n ? ij.A.getApplication(n.applicationId) : null,
        gifter: iC.default.getUser(t.userId),
    };
})(function (e) {
    let { error: t, giftCode: n, gifter: i, sku: l, application: s, subscriptionPlan: r } = e,
        u = null == i ? Q.intl.string(Q.t.lTGZAl) : Q.intl.formatToPlainString(Q.t.TjWdPc, { username: i.username });
    if (null == l) return (0, a.jsx)(ib, {});
    let c = l.name;
    return (
        null != r &&
            (c = Q.intl.formatToPlainString(r.interval === iT.WT.MONTH ? Q.t.CTpcCZ : Q.t["rgPWG/"], {
                skuName: l.name,
                intervalCount: r.intervalCount,
            })),
        (0, a.jsxs)(o.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, a.jsx)(iv.A, { defaultAnimationState: iN.oA.LOOP, giftStyle: n.giftStyle, className: iy.e })
                    : (0, a.jsx)(k.eu, {
                          src: null != i ? i.getAvatarURL(void 0, 100) : null,
                          size: te._3.DEPRECATED_SIZE_100,
                          className: z.SX,
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
                              (0, a.jsx)(k.tK, { children: u }),
                              (0, a.jsxs)(k.hE, {
                                  className: U()(z.Ot, ej.tR),
                                  children: [
                                      l.productLine !== b.EZt.COLLECTIBLES &&
                                          (0, a.jsx)(tn.A, {
                                              size: tn.M.MEDIUM,
                                              className: iy.I,
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
var iL = n(935399),
    iO = n(475743),
    ik = n(707554),
    iw = n(68281);
function iD(e) {
    let { loginStatus: t, authBoxClassName: n, transparent: i = !1, onSubmit: l, onCancelAccountDeletion: s } = e,
        r = t === b.aUe.ACCOUNT_DISABLED,
        o = r ? Q.intl.string(Q.t["j3rC+U"]) : Q.intl.string(Q.t.ZFWofo),
        u = r ? Q.intl.string(Q.t["6eNTWe"]) : Q.intl.string(Q.t["pCBti+"]);
    return (0, a.jsx)(k.Ay, {
        tag: "form",
        onSubmit: l,
        className: n,
        transparent: i,
        children: (0, a.jsxs)(ik.F, {
            component: (0, a.jsx)(k.hE, { className: z.QB, children: o }),
            children: [
                (0, a.jsx)(k.tK, { className: z.SX, children: u }),
                (0, a.jsxs)(k.eB, {
                    children: [
                        (0, a.jsx)(B.$, { text: Q.intl.string(Q.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, a.jsx)("div", {
                            className: U()(z.Ot, iw.Qt),
                            children: Q.intl.format(Q.t.js2rr5, { onClick: s }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iG = n(504394),
    iP = n(275538),
    iU = n(228916);
function iF(e) {
    let { children: t, className: n, ...i } = e,
        l = t();
    return (0, a.jsx)(k.Ay, {
        ...i,
        className: U()(n, iU.kL),
        contentClassName: iU.Qs,
        children: l.map((e, t) =>
            (0, a.jsx)("div", { className: iU.fi, style: { flexBasis: `${100 / l.length}%` }, children: e }, t),
        ),
    });
}
var iB = n(895600),
    iV = n(506774),
    iM = n(104798),
    iH = n(991512);
let iW = "mweb_handoff_nonce",
    iQ = "mweb_handoff_nonce_expiration",
    iK = +tP.A.Millis.MINUTE,
    iz = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    iX = new Set(["deep_link_failed"]);
function iq() {
    iV.w.remove(iW), iV.w.remove(iQ);
}
let iY = () => {
    let e = (0, m.bG)([eX.default], () => eX.default.getFingerprint()),
        { fingerprint: t, handoff_token: n } = (0, u.parse)(window.location.search),
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
                        { reason: e, fingerprint: (0, ez.v)(l) },
                        { fingerprint: l },
                    );
            },
            [r, l],
        ),
        d = iV.w.get(iW);
    if (
        ("null" === n && null === s && c("deep_link_failed"),
        null != n && "null" !== n && null == d && null === s && c("nonce_missing"),
        o.useEffect(() => {
            if (null != d) {
                let e = iV.w.get(iQ);
                (null == e || Date.now() >= e) && (c("nonce_expired"), iq());
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
                            fingerprint: (0, ez.v)(l),
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
                        iq();
                    });
        }, [n, d, s, l, c]),
        null == l)
    )
        return null;
    let h =
        null == s
            ? (0, a.jsxs)(a.Fragment, {
                  children: [Q.intl.string(Q.t.uJ1JsY), (0, a.jsx)("br", {}), Q.intl.string(Q.t.GHVWAs)],
              })
            : iX.has(s)
              ? Q.intl.string(Q.t.EPt55r)
              : iz.has(s)
                ? Q.intl.string(Q.t.g87kTp)
                : void 0;
    return null != s && iX.has(s)
        ? (0, a.jsx)("div", {
              className: iH.Un,
              children: (0, a.jsx)(F.E, {
                  color: "interactive-text-default",
                  variant: "text-sm/semibold",
                  children: h,
              }),
          })
        : (0, a.jsxs)("div", {
              className: iH.kL,
              children: [
                  (0, a.jsx)(F.E, { variant: "text-sm/semibold", children: h }),
                  (0, a.jsx)(B.$, {
                      variant: "overlay-primary",
                      text: Q.intl.string(Q.t.NcC759),
                      onClick: function () {
                          let e = iM.A.generateNonce();
                          iV.w.set(iW, e), iV.w.set(iQ, Date.now() + iK);
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
                                  { fingerprint: (0, ez.v)(l), source: "mobile_web_handoff", destination: b.J$u },
                                  { fingerprint: l, flush: !0 },
                              ),
                              (window.location.href = t.toString());
                      },
                  }),
              ],
          });
};
var i$ = n(274303),
    iZ = n(139286),
    iJ = n(970573),
    i0 = n(491919);
function i1(e) {
    let { onDismiss: t, embedded: n = !1 } = e;
    return (
        (0, iZ.A)({ type: c.ImpressionTypes.MODAL, name: c.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, a.jsxs)(k.Ay, {
            className: i0.ci,
            transparent: n,
            children: [
                !n && (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.bVbB63) }),
                (0, a.jsx)(F.E, {
                    className: i0.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: Q.intl.string(Q.t["0M5fN7"]),
                }),
                (0, a.jsx)(iJ.A, {
                    actionText: Q.intl.string(Q.t["DSN+hw"]),
                    onAction: (e) => {
                        e === iJ.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, a.jsx)("div", {
                    className: i0.o1,
                    children: (0, a.jsx)(ec.Q, {
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
function i2(e) {
    let {
        authBoxClassName: t,
        country: n,
        login: i,
        password: l,
        onLoginChange: s,
        onPasswordChange: r,
        loginRef: o,
        passwordRef: u,
    } = e;
    return (0, a.jsxs)(k.Ay, {
        className: t,
        children: [
            (0, a.jsx)(iG.M, {}),
            (0, a.jsxs)(k.eB, {
                className: z.QX,
                children: [
                    (0, a.jsx)(e_.A, {
                        className: z.SX,
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
                        className: z.SX,
                        label: Q.intl.string(Q.t["CIGa+7"]),
                        onChange: r,
                        type: "password",
                        setRef: u,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        value: l,
                        required: !0,
                    }),
                    (0, a.jsx)("div", {
                        className: z.QB,
                        children: (0, a.jsx)(B.$, {
                            text: Q.intl.string(Q.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, a.jsx)(ec.Q, { text: Q.intl.string(Q.t.wWIufs), textVariant: "text-sm/normal", disabled: !0 }),
                    (0, a.jsx)("div", {
                        className: z.a5,
                        children: (0, a.jsx)(ec.Q, {
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
var i4 = n(401755);
function i8(e, t) {
    if (null == t[e]) return null;
    {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n;
    }
}
function i7(e) {
    let t,
        {
            invite: n,
            guildTemplate: i,
            giftCode: l,
            authBoxClassName: s,
            isEmbedded: r = !1,
            disableAutofocusOnDefaultForm: c,
            login: h,
            password: g,
            errors: f,
            loginSource: p,
            dismissedChooseAccount: x,
            setDismissedChooseAccount: A,
            conditionalMediationAbortController: E,
            onLoginChange: _,
            onPasswordChange: j,
            handleLogin: N,
            handleForgotPassword: v,
            handleGotoRegister: C,
        } = e,
        I = (0, m.bG)([eE.A], () => eE.A.getCountryCode()),
        S = (0, m.bG)([eX.default], () => eX.default.getLoginStatus()),
        y = (0, m.bG)([i$.A], () => i$.A.getHasLoggedInAccounts()),
        R = o.useCallback(
            (e) => {
                T.default.track(b.HAw.LOGIN_SUCCESSFUL, {
                    source: b.mdB.QR_CODE,
                    login_source: p,
                    gift_code_sku_id: l?.skuId ?? null,
                    is_new_user: !1,
                    login_method: "remote_auth",
                    login_instance_id: e ?? null,
                });
            },
            [p, l],
        ),
        { handoff_token: L } = (0, u.parse)(window.location.search),
        O = d.Fr && d.KY && null != L,
        w = null == f.email && null != f.password,
        D = o.useRef(null),
        G = o.useRef(null),
        P = (0, iO.Ay)(f);
    o.useEffect(() => {
        function e(e) {
            return null != f[e];
        }
        null != P && P !== f && (e("password") ? G.current?.focus() : (e("email") || e("login")) && D.current?.focus());
    }, [f, D, G, P]),
        (t = r
            ? null
            : null != n
              ? (0, a.jsx)("div", { className: z.S3, children: (0, a.jsx)(iG.A, { invite: n }) })
              : null != l
                ? (0, a.jsx)(iR, { giftCode: l })
                : (0, a.jsxs)("div", {
                      className: iw.wx,
                      children: [
                          (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t["7fNJgA"]) }, "title"),
                          !1 === (0, nj.isAndroidWeb)()
                              ? (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.euS7r4) }, "subtitle")
                              : null,
                      ],
                  }));
    let F = (0, a.jsxs)("div", {
        className: iw.Eh,
        children: [
            y &&
                x &&
                (0, a.jsx)("div", {
                    className: iw.AX,
                    children: (0, a.jsx)(B.$, {
                        onClick: () => A(!1),
                        variant: "secondary",
                        text: Q.intl.string(Q.t["1MrpWO"]),
                        icon: nB.n,
                    }),
                }),
            t,
            (0, a.jsx)(ik.F, {
                children: (0, a.jsxs)(k.eB, {
                    className: z.QX,
                    children: [
                        (0, a.jsx)(e_.A, {
                            alpha2: I.alpha2,
                            countryCode: I.code.split(" ")[0],
                            className: z.SX,
                            label: Q.intl.string(Q.t.tUjnxr),
                            error: i8("login", f) ?? i8("email", f),
                            onChange: _,
                            setRef: D,
                            autoCapitalize: "none",
                            autoComplete: "username webauthn",
                            autoCorrect: "off",
                            spellCheck: "false",
                            value: h,
                            autoFocus: !w && !O && !c,
                            required: !0,
                        }),
                        (0, a.jsx)(k.pd, {
                            label: Q.intl.string(Q.t["CIGa+7"]),
                            error: i8("password", f),
                            onChange: j,
                            name: "password",
                            type: "password",
                            setRef: G,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            autoFocus: w && !O && !c,
                            value: g,
                            required: !0,
                        }),
                        (0, a.jsx)("div", {
                            className: U()(z.SX, z.a5),
                            children: (0, a.jsx)(ec.Q, {
                                text: Q.intl.string(Q.t.wWIufs),
                                textVariant: "text-sm/normal",
                                onClick: () => {
                                    null != D.current && D.current.focus(), v();
                                },
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: z.QB,
                            children: (0, a.jsx)(B.$, {
                                text: Q.intl.string(Q.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                loading: S === b.aUe.LOGGING_IN,
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: z.a5,
                            children: [
                                (0, a.jsx)("span", { className: iw.Qt, children: Q.intl.string(Q.t.tmE73r) }),
                                (0, a.jsx)("span", {
                                    className: iw.Z8,
                                    children: (0, a.jsx)(ec.Q, {
                                        text: Q.intl.string(Q.t.pV8xeR),
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
    return null != n && n.state === b.elq.RESOLVING
        ? (0, a.jsx)(i2, {
              authBoxClassName: s,
              country: I,
              login: h,
              password: g,
              onLoginChange: _,
              onPasswordChange: j,
              loginRef: D,
              passwordRef: G,
          })
        : null != i
          ? i.state === i4.QB.RESOLVING
              ? (0, a.jsx)(i2, {
                    authBoxClassName: s,
                    country: I,
                    login: h,
                    password: g,
                    onLoginChange: _,
                    onPasswordChange: j,
                    loginRef: D,
                    passwordRef: G,
                })
              : (0, a.jsx)(iF, {
                    onSubmit: N,
                    tag: "form",
                    className: U()(s, iw.Sy),
                    children: () => [
                        (0, a.jsx)(iB.A, { guildTemplate: i }, "template"),
                        (0, a.jsx)(o.Fragment, { children: F }, "form-wrapper"),
                    ],
                })
          : y && !x
            ? (0, a.jsx)(i1, { onDismiss: () => A(!0), embedded: r })
            : (0, a.jsxs)("div", {
                  children: [
                      (0, a.jsx)(k.Ay, {
                          onSubmit: N,
                          tag: "form",
                          className: U()(s, { [iw.M0]: O }),
                          transparent: r,
                          expanded: !0,
                          children: (0, a.jsxs)(eL.B, {
                              direction: r ? "vertical" : "horizontal",
                              align: r ? "stretch" : "center",
                              gap: r ? 24 : 64,
                              children: [
                                  F,
                                  (0, a.jsx)(iP.A, {
                                      horizontal: r,
                                      onAuthenticateSuccess: R,
                                      conditionalMediationAbortController: E,
                                  }),
                              ],
                          }),
                      }),
                      O && (0, a.jsx)(iY, {}),
                  ],
              });
}
var i3 = n(572469);
function i9(e) {
    let { loginSource: t, giftCodeSKUId: n, isEmbedded: i = !1 } = e,
        l = (0, m.cf)(
            [eX.default],
            () => ({ ticket: eX.default.getMFATicket(), methods: eX.default.getMFAMethods() }),
            [],
        ),
        s = o.useCallback(
            (e) => {
                let { mfaType: i, data: l, ticket: s } = e;
                return (
                    M._.dispatch(b.jej.WAVE_EMPHASIZE),
                    f.A.loginMFAv2({ code: l, ticket: s, mfaType: i, source: t, giftCodeSKUId: n })
                );
            },
            [t, n],
        );
    return (0, a.jsx)(k.Ay, {
        transparent: i,
        style: { padding: 0 },
        children: (0, a.jsx)(i3.t, {
            mfaFinish: s,
            mfaChallenge: l,
            onEarlyClose: () => {
                g.h.dispatch({ type: "LOGIN_RESET" });
            },
            embedded: i,
        }),
    });
}
var i5 = n(511815),
    i6 = n(139033),
    le = n(952116),
    lt = n(491509),
    ln = n(913612),
    li = n(933924);
let ll = (e) => n.g.location.assign(e);
function ls(e) {
    let {
        invite: t,
        guildTemplate: n,
        giftCode: i,
        location: l,
        redirectTo: s,
        transitionTo: r,
        authBoxClassName: c,
        isEmbedded: d = !1,
        loginSource: h,
        disableAutofocusOnDefaultForm: g,
    } = e;
    (0, ln.K)();
    let p = (0, m.bG)([eX.default], () => eX.default.isAuthenticated()),
        x = (0, m.bG)([S.A], () => S.A.isHandoffAvailable()),
        A = (0, m.bG)([eX.default], () => eX.default.getLoginStatus()),
        _ = i?.skuId ?? null,
        j = (0, m.bG)([iE.A], () => (null != _ ? iE.A.get(_) : null)),
        {
            checkingHandoff: N,
            redirecting: v,
            login: C,
            password: y,
            phoneVerifyError: R,
            dismissedChooseAccount: L,
            setDismissedChooseAccount: O,
            errors: G,
            conditionalMediationAbortController: P,
            loginSource: U,
            loginOrSSO: B,
            handleLogin: V,
            handleIPAuthorize: H,
            handlePasswordReset: W,
            handleForgotPassword: K,
            handleResendCode: X,
            handleReset: q,
            handleCancelAccountDeletion: Y,
            handleGotoRegister: $,
            loginReset: Z,
            onLoginChange: J,
            onPasswordChange: ee,
        } = (function (e) {
            let {
                    invite: t,
                    guildTemplate: n,
                    giftCode: i,
                    handoffAvailable: l,
                    authenticated: s,
                    transitionTo: r,
                    redirectTo: c,
                    location: d,
                    loginSource: h,
                } = e,
                [m, g] = o.useState(() => l),
                [p, x] = o.useState(() => s),
                [A, E] = o.useState(""),
                [_, j] = o.useState(() => {
                    let e = null != d ? (0, u.parse)(d.search) : {};
                    return e.email ?? e.login ?? "";
                }),
                [N, v] = o.useState(""),
                [C, S] = o.useState(!1),
                [T, y] = o.useState(null),
                [R, L] = o.useState(!1),
                [O] = o.useState(() => new AbortController()),
                [k, w] = o.useState({});
            !m || l || s || g(!1);
            let D = o.useMemo(() => {
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
                G = null != i ? i.skuId : null,
                P = o.useCallback(
                    (e) => {
                        let t = null != e ? (0, u.parse)(e.search) : {};
                        if ((delete t.redirect_to, null != c)) {
                            if (eo(c)) return void eu(c);
                            r(c);
                        } else if (null == t.service) r(b.BVt.APP);
                        else {
                            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + b.Rsh.SSO,
                                n = { ...t, token: eX.default.getToken() };
                            window.location = `${e}?${(0, u.stringify)(n)}`;
                        }
                    },
                    [c, r],
                ),
                U = o.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e && null != t && (x(!0), n ? f.A.verifySSOToken("login").then(() => P(t)) : P(t));
                    },
                    [P],
                ),
                B = o.useCallback(() => {
                    O.abort("Login state reset"), w({}), f.A.loginReset();
                }, [O]),
                V = o.useCallback(
                    async function (e) {
                        let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e?.preventDefault(),
                            O.abort("Starting password login"),
                            M._.dispatch(b.jej.WAVE_EMPHASIZE),
                            w({});
                        try {
                            await f.A.login({
                                login: A + _,
                                password: N,
                                undelete: n ?? C,
                                source: D,
                                giftCodeSKUId: G,
                                invite: t,
                            });
                        } catch (e) {
                            w((0, tz.p)(e));
                        }
                    },
                    [O, _, A, N, C, D, G, t],
                ),
                H = o.useCallback(
                    async (e) => {
                        let t = A + _;
                        w({});
                        try {
                            let { token: n } = await ex.A.verifyPhone(t, e, !1);
                            await f.A.authorizeIPAddress(n), V();
                        } catch (e) {
                            null != e.body && null != e.body.message && y(e.body.message);
                        }
                    },
                    [A, _, V],
                ),
                W = o.useCallback(
                    async (e) => {
                        y(null);
                        try {
                            let { token: t } = await ex.A.verifyPhone(A + _, e, !1);
                            r(b.BVt.RESET, { search: (0, u.stringify)({ token: t, from_login: "true" }) });
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
                        w({});
                        try {
                            M._.dispatch(b.jej.WAVE_EMPHASIZE);
                            let e = await f.A.forgotPassword(t);
                            if (!1 === e) return;
                            e === i5.D.ONE_TIME_LOGIN
                                ? (0, nR.openModal)((e) => {
                                      let t = [
                                          {
                                              variant: "primary",
                                              text: Q.intl.string(Q.t.BddRzS),
                                              onClick: e.onClose,
                                              fullWidth: !0,
                                          },
                                      ];
                                      return (0, a.jsx)(nb.Modal, {
                                          title: Q.intl.string(Q.t["6Ecyts"]),
                                          actions: t,
                                          ...e,
                                          children: (0, a.jsx)(F.E, {
                                              variant: "text-md/normal",
                                              children: Q.intl.string(Q.t.iAcrqV),
                                          }),
                                      });
                                  })
                                : (0, i6.A)({
                                      title: Q.intl.string(Q.t.f5Pi7A),
                                      subtitle: Q.intl.format(Q.t["6u5hQ9"], { email: t }),
                                  });
                        } catch (e) {
                            w((0, tz.p)(e));
                        }
                    },
                    [A, _],
                ),
                z = o.useCallback(() => {
                    ex.A.resendCode(A + _);
                }, [A, _]),
                X = o.useCallback((e) => {
                    null != e && e.preventDefault(), f.A.loginReset(), v(""), E(""), j(""), S(!1), g(!1), x(!1), w({});
                }, []),
                q = o.useCallback(() => {
                    S(!0), V(void 0, { undelete: !0 });
                }, [V]),
                Y = o.useCallback(() => {
                    let e,
                        l = null != d ? (0, u.parse)(d.search) : {};
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
                        B(),
                        r(e, { search: (0, u.stringify)(l) }),
                        M._.dispatch(b.jej.WAVE_EMPHASIZE);
                }, [_, t, i, n, c, d, B, r]);
            return {
                checkingHandoff: m,
                redirecting: p,
                login: _,
                password: N,
                phoneVerifyError: T,
                dismissedChooseAccount: R,
                setDismissedChooseAccount: L,
                errors: k,
                conditionalMediationAbortController: O,
                loginSource: D,
                loginOrSSO: U,
                handleLogin: V,
                handleIPAuthorize: H,
                handlePasswordReset: W,
                handleForgotPassword: K,
                handleResendCode: z,
                handleReset: X,
                handleCancelAccountDeletion: q,
                handleGotoRegister: Y,
                loginReset: B,
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
            handoffAvailable: x,
            authenticated: p,
            transitionTo: r ?? ll,
            redirectTo: s,
            location: l,
            loginSource: h,
        });
    (0, iL.Ay)(() => {
        x && !p ? (0, E.ST)() : p && B(p, l, !0),
            T.default.track(
                b.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: U,
                    authenticated: p,
                    ...(null != j ? (0, lt.A)(j, !1, !1) : {}),
                    source: (0, w.PR)(),
                },
                { flush: !0 },
            ),
            p || (0, li.a)({ abortController: P, loginSource: U, giftCodeSKUId: _ }),
            f.A.getLocationMetadata(),
            (0, D.d0)("login");
    });
    let et = (0, iO.Ay)(p);
    if (
        (o.useEffect(() => {
            let e = N && (x || v);
            p && !1 === et && !e && (P.abort("Transitioning to authenticated state"), B(p, l));
        }, [p, x, et, v, N, P, B, l]),
        v || N)
    )
        return (0, a.jsx)(k.Ay, { transparent: d, children: (0, a.jsx)(ek.y, {}) });
    if (x)
        return (0, a.jsxs)(k.Ay, {
            className: c,
            transparent: d,
            children: [
                (0, a.jsx)(k.CK, {}),
                (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t.S6RMNA) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.YZiJbh) }),
            ],
        });
    switch (A) {
        case b.aUe.LOGGING_IN_MFA_SMS:
        case b.aUe.MFA_SMS_STEP:
        case b.aUe.LOGGING_IN_MFA:
        case b.aUe.MFA_STEP:
            return (0, a.jsx)(i9, { loginSource: U, giftCodeSKUId: _, isEmbedded: d });
        case b.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case b.aUe.ACCOUNT_DISABLED:
            return (0, a.jsx)(iD, {
                loginStatus: A,
                authBoxClassName: c,
                transparent: d,
                onSubmit: q,
                onCancelAccountDeletion: Y,
            });
        case b.aUe.PHONE_IP_AUTHORIZATION:
            return (0, a.jsx)(k.Ay, {
                tag: "form",
                className: c,
                transparent: d,
                children: (0, a.jsx)(le.A, {
                    title: Q.intl.string(Q.t.w55Oco),
                    subtitle: Q.intl.format(Q.t.CfRZBj, { onResendClick: X }),
                    error: R,
                    onSubmit: H,
                    onCancel: Z,
                }),
            });
        case b.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, a.jsx)(k.Ay, {
                tag: "form",
                className: c,
                transparent: d,
                children: (0, a.jsx)(le.A, {
                    title: Q.intl.string(Q.t["+xqy3d"]),
                    subtitle: Q.intl.format(Q.t.ef4uZ7, { onResendClick: X }),
                    error: R,
                    onSubmit: W,
                    onCancel: Z,
                }),
            });
        case b.aUe.LOGGING_IN:
        case b.aUe.NONE:
        default:
            return (0, a.jsx)(i7, {
                invite: t,
                guildTemplate: n,
                giftCode: i,
                authBoxClassName: c,
                isEmbedded: d,
                disableAutofocusOnDefaultForm: g,
                login: C,
                password: y,
                errors: G,
                loginSource: U,
                dismissedChooseAccount: L,
                setDismissedChooseAccount: O,
                conditionalMediationAbortController: P,
                onLoginChange: J,
                onPasswordChange: ee,
                handleLogin: V,
                handleForgotPassword: K,
                handleGotoRegister: $,
            });
    }
}
var lr = n(664294);
let la = null,
    lo = "underage";
class lu extends m.Ay.Store {
    static displayName = "AgeGateStore";
    isUnderageAnonymous() {
        if (nj.isPlatformEmbedded && 1) {
            if (null != la && la + tJ.bm > Date.now()) return !0;
        } else if (1) return null != lr.parse(document.cookie)[lo];
        return !1;
    }
}
let lc = new lu(g.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        (la = Date.now()), (document.cookie = `${lo}=1;path=/`);
    },
    LOGIN_SUCCESS: function () {
        (la = null), (document.cookie = `${lo}=1;path=/;max-age=0`);
    },
});
var ld = n(509434),
    lh = n(970116);
let lm = function () {
    return (0, a.jsx)(k.Ay, {
        children: (0, a.jsxs)("div", {
            className: lh.hQ,
            children: [
                (0, a.jsx)(k.hE, { className: lh.DD, children: Q.intl.string(Q.t.nCB6Ga) }),
                (0, a.jsx)(k.tK, {
                    className: lh.VA,
                    children: Q.intl.format(Q.t.KQgoxG, { underageMessage: Q.intl.string(Q.t.WqEH4D) }),
                }),
                (0, a.jsx)(B.$, {
                    icon: ld.I,
                    text: Q.intl.string(Q.t.hvVgAZ),
                    onClick: () => window.open(nD.A.getArticleURL(b.MVz.AGE_GATE), "_blank"),
                    iconPosition: "end",
                }),
            ],
        }),
    });
};
n(994555), n(827343), n(792251), n(19575), n(945041);
var lg = n(493527),
    lf = n(544395);
function lp(e) {
    let {
            initialEmail: t,
            invite: n,
            giftCode: i,
            guildTemplate: l,
            onApiErrors: s,
            onEmailChange: r,
            onGotoLogin: u,
            onRegister: c,
        } = e,
        [d, h] = o.useState(!1),
        [g, f] = o.useState(!1);
    async function p() {
        y.length > 0 && !lf.A.wasRegistrationSuggestionFetched(y) && (await lg.A.fetchSuggestionsRegistration(y));
    }
    function x(e) {
        T.default.track(b.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function A(e) {
        T.default.track(b.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    let E = (0, m.bG)([tM.A], () => tM.A.getAuthenticationConsentRequired()),
        _ = (0, m.bG)([lf.A], () => lf.A.registrationUsernameSuggestion()),
        j = o.useRef(null),
        N = o.useRef(null),
        v = o.useRef(null),
        C = o.useRef(null),
        [I, S] = o.useState(t),
        [y, R] = o.useState(""),
        [L, O] = o.useState(""),
        [w, D] = o.useState(""),
        [G, P] = o.useState(null),
        [V, H] = tB(E),
        [W, K] = o.useState(!1),
        [X, q] = tV(),
        [Y, $] = o.useState({}),
        { message: Z, email: J, username: ee, global_name: et, password: en, date_of_birth: ei } = Y,
        [el, es] = o.useState(null),
        [er, ea] = o.useState(null),
        [eo, eu] = o.useState(null),
        [ed, eh] = o.useState(null),
        em = null != E && V;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: i, globalNameRef: l, passwordRef: s } = e,
            r = (0, iO.Ay)(t);
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
    })({ apiErrors: Y, emailRef: j, usernameRef: N, globalNameRef: v, passwordRef: C });
    let eg = o.useCallback(async () => {
            let e = null != i ? i.skuId : null,
                t = tK.mZ.getState(),
                r = (0, ie.uJ)(_) ? null : L === _;
            M._.dispatch(b.jej.WAVE_EMPHASIZE), K(!0), $({});
            try {
                await t0({
                    email: I,
                    username: L,
                    globalName: y,
                    consent: V,
                    password: w,
                    invite: n?.code,
                    usedUsernameSuggestion: r,
                    guildTemplateCode: l?.code,
                    giftCodeSKUId: e,
                    birthday: G,
                    promoEmailConsent: t.required ? t : null,
                }),
                    c?.();
            } catch (t) {
                if ((K(!1), !(t instanceof tQ.LG))) return;
                let e = (0, tz.W)(t);
                $(e), s?.(e), "number" == typeof e.retry_after && q(e.retry_after);
            }
        }, [i, l, n, I, s, c, _, L, y, w, G, V, q]),
        ef = o.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == E)) return;
                let t = !1;
                0 === I.length && (es(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    0 === L.length && (ea(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    0 === w.length && (eu(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    null == G && (eh(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    t || eg();
            },
            [I, L, w, G, E, eg],
        ),
        ep = null;
    return (
        "string" == typeof Z && (ep = (0, a.jsx)(k.ME, { className: U()(z.QX, t2.gJ), children: Z })),
        (0, a.jsx)("form", {
            onSubmit: ef,
            children: (0, a.jsxs)(k.eB, {
                className: z.QX,
                children: [
                    (0, a.jsx)(k.pd, {
                        autoFocus: !0,
                        className: z.SX,
                        label: Q.intl.string(Q.t.dI4d4S),
                        name: "email",
                        value: I,
                        onChange: (e) => {
                            S(e), r?.(e), es(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null);
                        },
                        error: el ?? tF(J),
                        type: "email",
                        autoComplete: "username",
                        setRef: j,
                        required: !0,
                        onFocus: () => x("email"),
                        onBlur: () => A("email"),
                    }),
                    (0, a.jsx)(k.pd, {
                        label: Q.intl.string(Q.t["9AjdkD"]),
                        className: z.SX,
                        name: "global_name",
                        value: y,
                        onChange: R,
                        error: tF(et),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: v,
                        onFocus: () => {
                            h(!0), x("global_name");
                        },
                        onBlur: () => {
                            h(!1), A("global_name");
                        },
                    }),
                    (0, a.jsx)(ns, {
                        show: d,
                        top: -12,
                        bottom: 20,
                        children: (0, a.jsx)(F.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: Q.intl.string(Q.t["330TCc"]),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        onBlur: () => f(!1),
                        onFocus: () => {
                            f(!0), p();
                        },
                        tabIndex: -1,
                        children: [
                            (0, a.jsx)(k.pd, {
                                label: Q.intl.string(Q.t.TWzdWj),
                                className: z.SX,
                                name: "username",
                                value: L,
                                onChange: (e) => {
                                    O(e.toLocaleLowerCase()), ea(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null);
                                },
                                error: er ?? tF(ee),
                                autoComplete: "off",
                                setRef: N,
                                required: !0,
                                onFocus: () => x("username"),
                                onBlur: () => A("username"),
                            }),
                            (0, a.jsx)(nr, {
                                username: L,
                                suggestion: _,
                                globalName: y,
                                isUsernameFocused: g,
                                onClickSuggestion: () => {
                                    N.current?.focus(), null != _ && _.length > 0 && (O(_), ea(null));
                                },
                            }),
                        ],
                    }),
                    (0, a.jsx)(k.pd, {
                        label: Q.intl.string(Q.t["CIGa+7"]),
                        name: "password",
                        value: w,
                        onChange: (e) => {
                            D(e), eu(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null);
                        },
                        error: eo ?? tF(en),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: C,
                        required: !0,
                        onFocus: () => x("password"),
                        onBlur: () => A("password"),
                    }),
                    (0, a.jsx)(t6.A, {
                        label: Q.intl.string(Q.t.rhBeKe),
                        wrapperClassName: t2.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            P(e), null != e && eh(null);
                        },
                        error: ed ?? tF(ei),
                        value: G,
                        required: !0,
                        onFocus: x,
                        onBlur: A,
                    }),
                    (0, a.jsx)(t8, {}),
                    (0, a.jsx)(t4, { consent: V, consentRequired: E, onConsentChange: H }),
                    (0, a.jsx)(tW.m, {
                        text: !V && E ? Q.intl.string(Q.t.AY4IVA) : null,
                        children: (0, a.jsx)("div", {
                            className: z.QX,
                            children: (0, a.jsx)(B.$, {
                                text: Q.intl.string(Q.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: W,
                                disabled: !em || X,
                            }),
                        }),
                    }),
                    ep,
                    (0, a.jsx)("div", {
                        className: z.QX,
                        children: (0, a.jsx)(ec.Q, {
                            text: Q.intl.string(Q.t["1lWxux"]),
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
var lx = n(713654),
    lA = n(331722);
function lE(e) {
    let { channel: t } = e,
        n = (0, lx._U)(t.type);
    return (0, a.jsxs)("div", {
        className: lA.Nj,
        children: [
            null != n ? (0, a.jsx)(n, { color: "currentColor", size: "custom", width: 20, height: 20 }) : null,
            (0, a.jsx)(F.E, { className: lA.dN, color: "none", variant: "text-sm/semibold", children: t.name }),
        ],
    });
}
function l_(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, a.jsxs)("div", {
        className: lA.kL,
        children: [
            (0, a.jsx)(tv.Uq, { className: lA.II, guildId: n.guild_id, guildEvent: n, eventPreview: n }),
            (0, a.jsx)(tv.sC, { name: n.name, description: n.description, guildId: n.guild_id }),
            null != t && n.channel_id === t.id ? (0, a.jsx)(lE, { channel: t }) : null,
        ],
    });
}
var lj = n(231698);
function lN(e) {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let i = eh.DY(t),
        { name: l, description: s } = i;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(eO.D, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: lj.CT,
                children: Q.intl.string(Q.t.Eabu1z),
            }),
            (0, a.jsxs)("div", {
                className: lj.EB,
                children: [
                    (0, a.jsx)(tk.Ay, {
                        mask: tk.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, a.jsx)(tN.Ay, { guild: i, size: tN.Ay.Sizes.MEDIUM, active: !0 }),
                    }),
                    (0, a.jsxs)("div", {
                        className: lj.OA,
                        children: [
                            (0, a.jsx)(eO.D, { variant: "heading-sm/semibold", children: l }),
                            (0, a.jsxs)("div", {
                                className: lj.aH,
                                children: [
                                    (0, a.jsx)("div", { className: lj.Om }),
                                    null != n && n > 0
                                        ? (0, a.jsx)(F.E, {
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
                (0, a.jsx)(F.E, { color: "text-default", className: lj.CT, variant: "text-sm/normal", children: s }),
        ],
    });
}
function lv(e) {
    let { authBoxClassName: t, name: n, onNameChange: i } = e;
    return (0, a.jsxs)(k.Ay, {
        className: t,
        children: [
            (0, a.jsx)(iG.M, {}),
            (0, a.jsxs)(k.eB, {
                className: t2.y0,
                children: [
                    (0, a.jsx)(tW.m, {
                        text: Q.intl.string(Q.t["hBB85/"]),
                        position: "right",
                        children: (0, a.jsx)(k.pd, {
                            label: Q.intl.string(Q.t["9AjdkD"]),
                            autoFocus: !0,
                            className: z.QB,
                            name: "username",
                            value: n,
                            placeholder: Q.intl.string(Q.t["09Q8yp"]),
                            onChange: i,
                            onFocus: () => {
                                T.default.track(b.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                T.default.track(b.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, a.jsx)(F.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: U()(z.QX, t2.E2),
                        children: Q.intl.format(Q.t["KI+BSb"], { termsURL: b.X7G.TERMS, privacyURL: b.X7G.PRIVACY }),
                    }),
                    (0, a.jsx)("div", {
                        className: z.Ot,
                        children: (0, a.jsx)(B.$, {
                            text: Q.intl.string(Q.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: z.QX,
                        children: (0, a.jsx)(ec.Q, {
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
function lC(e) {
    let { consentRequired: t, consent: n, registering: i } = e,
        l = o.useMemo(() => null != t && n, [t, n]);
    return (0, a.jsx)(tW.m, {
        text: !n && t ? Q.intl.string(Q.t.AY4IVA) : null,
        children: (0, a.jsx)("div", {
            className: z.Ot,
            children: (0, a.jsx)(B.$, {
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
function lI(e) {
    let { invite: t, authBoxClassName: n, hideInviteHeader: i = !1, onApiErrors: l, onGotoLogin: s, onRegister: r } = e,
        u = (0, m.bG)([tM.A], () => tM.A.getAuthenticationConsentRequired()),
        c = t?.guild_scheduled_event != null,
        d = o.useRef(null),
        h = null;
    h = i
        ? null
        : t?.guild_scheduled_event != null
          ? (0, a.jsx)(l_, { channel: t.channel, guildScheduledEvent: t.guild_scheduled_event })
          : (0, a.jsx)("div", { className: z.S3, children: (0, a.jsx)(iG.A, { invite: t, inUnclaimedFlow: !0 }) });
    let [g, f] = o.useState(""),
        [p, x] = o.useState(null),
        [A, E] = tB(u),
        [_, j] = o.useState(!1),
        [N, v] = o.useState({}),
        { username: C, global_name: I, date_of_birth: S } = N,
        [y, R] = tV();
    o.useEffect(() => {
        null == p && d.current?.focus();
    }, [p, d]);
    let [L, O] = o.useState(null),
        [w, D] = o.useState(null),
        G = o.useCallback(async () => {
            M._.dispatch(b.jej.WAVE_EMPHASIZE), j(!0), v({});
            try {
                await (function (e) {
                    let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
                    return t0({ ...i, invite: t, giftCodeSKUId: n });
                })({ consent: A, invite: t.code, globalName: g, birthday: p }),
                    r?.();
            } catch (t) {
                if ((j(!1), !(t instanceof tQ.LG))) return;
                let e = (0, tz.W)(t);
                v(e), l?.(e), "number" == typeof e.retry_after && R(e.retry_after);
            }
        }, [t, g, p, A, l, r, R, v, j]),
        P = o.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === u)) return;
                let t = !1;
                0 === g.length && (O(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    null == p && (D(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    t || G();
            },
            [g, p, u, G, O, D],
        );
    return t.state === b.elq.RESOLVING
        ? (0, a.jsx)(lv, { authBoxClassName: n, name: g, onNameChange: f })
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(k.Ay, {
                      tag: "section",
                      className: n,
                      children: (0, a.jsxs)("form", {
                          onSubmit: P,
                          children: [
                              h,
                              c ? (0, a.jsx)("div", { className: t2.yF }) : null,
                              (0, a.jsxs)(k.eB, {
                                  className: c ? void 0 : t2.y0,
                                  children: [
                                      (0, a.jsx)(tH.k, {
                                          helperText: Q.intl.string(Q.t["330TCc"]),
                                          label: Q.intl.string(Q.t["9AjdkD"]),
                                          error: L ?? tF(I ?? C),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: g,
                                          placeholder: Q.intl.string(Q.t["09Q8yp"]),
                                          onChange: f,
                                          onFocus: () => {
                                              T.default.track(b.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              T.default.track(b.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, a.jsx)(t6.A, {
                                          label: Q.intl.string(Q.t.rhBeKe),
                                          wrapperClassName: t2.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              x(e), null != e && D(null);
                                          },
                                          error: w ?? tF(S),
                                          value: p,
                                      }),
                                      (0, a.jsx)(t4, { consent: A, consentRequired: u, onConsentChange: E }),
                                      (0, a.jsx)(lC, { consentRequired: u, consent: A, registering: _ }),
                                      (0, a.jsx)("div", {
                                          className: z.QX,
                                          children: (0, a.jsx)(ec.Q, {
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
                  null != t && c
                      ? (0, a.jsx)(k.Ay, {
                            className: z.QX,
                            children: (0, a.jsx)(lN, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
var lS = n(942614);
n(100544);
var lT =
        (((r = {}).IDENTITY = "identity"),
        (r.DISPLAY_NAME = "display_name"),
        (r.ACCOUNT_INFORMATION = "account_information"),
        (r.FULL = "full"),
        (r.AGE_GATE = "age_gate"),
        (r.INVITE = "invite"),
        (r.SMS_VERIFY = "sms_verify"),
        r),
    ly = n(771016);
function lb(e) {
    let {
            authBoxClassName: t,
            giftCode: n,
            giftCodeSKU: i,
            guildTemplate: l,
            invite: s,
            hideInviteHeader: r = !1,
            location: d,
            redirectTo: h,
            onLoginStart: g,
            onRegister: p,
            transitionTo: x = w.pX,
        } = e,
        A = (0, m.bG)([tM.A], () => tM.A.getAuthenticationConsentRequired()),
        E = (0, m.bG)([eX.default], () => eX.default.isAuthenticated()),
        _ = (0, m.bG)([lc], () => lc.isUnderageAnonymous()),
        j = (0, m.bG)([i$.A], () => i$.A.getHasLoggedInAccounts()),
        N = null != e.location ? (0, u.parse)(e.location.search) : {},
        [v, C] = o.useState(N.email ?? ""),
        [I, S] = o.useState({}),
        y = (0, iO.Ay)(E),
        R = (function (e, t, n) {
            if (null != e) return "gift";
            if (null != t) return "guild_template";
            if (null != n) {
                if (null != n.guild) return "guild_invite";
                else if (null != n.channel) return "dm_invite";
                else if (null != n.inviter) return "friend_invite";
            }
            return null;
        })(n, l, s),
        L = null != s && (null != s.guild || null != s.channel),
        O = null != s && null == s.guild && null == s.channel && null != s.inviter,
        G = o.useCallback(() => {
            E && (null != h ? x(h) : x(ed.A.defaultRoute));
        }, [E, h, x]);
    (0, iL.Ay)(() => {
        G(),
            T.default.track(
                b.HAw.REGISTER_VIEWED,
                {
                    location: null != s ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: R,
                    ...(null != i ? (0, lt.A)(i, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == A && f.A.getLocationMetadata(),
            (0, D.d0)("register");
    }),
        o.useEffect(() => {
            E && !1 === y && ((0, lS.C)(ly.zY.ORGANIC_REGISTERED), G());
        }, [E, y, G]);
    let P = lT.FULL;
    _ || null != I.date_of_birth ? (P = lT.AGE_GATE) : L && (P = lT.INVITE),
        (0, iZ.A)(
            {
                type: c.ImpressionTypes.VIEW,
                name: c.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: c.ImpressionGroups.USER_REGISTRATION_FLOW, step: P },
            },
            {},
            [P],
        );
    let F = o.useCallback(
        (e) => {
            let t,
                i = null != d ? (0, u.parse)(d.search) : {};
            null != s
                ? (t = b.BVt.INVITE_LOGIN(s.code))
                : null != n
                  ? (t = b.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != l
                    ? (t = b.BVt.GUILD_TEMPLATE_LOGIN(l.code))
                    : null != h
                      ? ((t = b.BVt.LOGIN), (i.redirect_to = h))
                      : ((t = b.BVt.LOGIN), "" !== v && (i = { email: v })),
                f.A.loginReset(),
                x(t, { search: (0, u.stringify)(i), source: "register" }),
                g?.(e),
                M._.dispatch(b.jej.WAVE_EMPHASIZE);
        },
        [v, s, n, l, h, d, g, x],
    );
    if (_ || null != I.date_of_birth) return (0, a.jsx)(lm, {});
    if (null != s && L)
        return (0, a.jsx)(lI, {
            invite: s,
            authBoxClassName: t,
            hideInviteHeader: r,
            onApiErrors: S,
            onGotoLogin: F,
            onRegister: p,
        });
    let V = (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.wC4TlR) }, "title"),
        H = !1;
    null != l
        ? ((V = (0, a.jsx)(iB.A, { guildTemplate: l })), (H = !0))
        : null != n
          ? (V = (0, a.jsx)(iR, { giftCode: n }))
          : !r &&
            null != s &&
            O &&
            s.state === b.elq.RESOLVED &&
            (V = (0, a.jsx)("div", { className: z.S3, children: (0, a.jsx)(iG.A, { invite: s, isRegister: !0 }) }));
    let W = (0, a.jsx)(lp, {
        initialEmail: N.email ?? "",
        invite: s,
        giftCode: n,
        guildTemplate: l,
        onApiErrors: S,
        onEmailChange: C,
        onGotoLogin: F,
        onRegister: p,
    });
    return H
        ? (0, a.jsx)(iF, {
              tag: "section",
              className: U()(t, t2.Sy),
              children: () => [
                  V,
                  (0, a.jsxs)(
                      "div",
                      {
                          className: t2.Uu,
                          children: [(0, a.jsx)(k.hE, { className: t2.lR, children: Q.intl.string(Q.t.wC4TlR) }), W],
                      },
                      "register-title",
                  ),
              ],
          })
        : (0, a.jsxs)(k.Ay, {
              tag: "section",
              className: t,
              children: [
                  j
                      ? (0, a.jsx)("div", {
                            className: t2.AX,
                            children: (0, a.jsx)(B.$, {
                                onClick: F,
                                variant: "secondary",
                                text: Q.intl.string(Q.t["1MrpWO"]),
                                icon: nB.n,
                                iconPosition: "start",
                            }),
                        })
                      : null,
                  V,
                  W,
              ],
          });
}
m.Ay.initialize(), m.Ay.initialize();
class lR extends o.PureComponent {
    state = { error: null, continueOnWeb: !1, currentUser: null, sentVerification: !1, fetchingUser: !1 };
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, D.d0)("gift_code");
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
        ig.Yq(), null == e && this.refreshUser();
    }
    refreshUser = () => {
        this.setState({ fetchingUser: !0 }),
            nO
                .fetchCurrentUser({ withAnalyticsToken: !0 })
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
            ? Q.intl.string(Q.t.wa9h7F)
            : l === b.t02.INVALID_GIFT_REDEMPTION_OWNED && n?.productLine === b.EZt.COLLECTIBLES
              ? Q.intl.string(Q.t.mdLtb5)
              : null != t || l === b.t02.INVALID_GIFT_REDEMPTION_OWNED
                ? Q.intl.format(Q.t.PIdmg3, { libraryLink: b.BVt.APPLICATION_LIBRARY })
                : e.isClaimed || l === b.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? Q.intl.string(Q.t.ilcBeX)
                  : l === b.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? Q.intl.string(Q.t.ypuSd8)
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
            this.setState({ error: null }), await p.Ay.redeemGiftCode({ code: n }), e(b.BVt.APP);
        } catch (e) {
            this.setState({ error: e });
        }
    };
    resolveGiftCode = () => {
        let { transitionTo: e } = this.props,
            t = this.getCode();
        p.Ay.resolveGiftCode(t, !0, !0)
            .then((n) => {
                null != n && null != n.giftCode.promotion && e(b.BVt.BILLING_PROMOTION_REDEMPTION(t));
            })
            .catch(p.Ay.reportUnexpectedGiftCodeError);
    };
    renderSpinner(e) {
        return (0, a.jsxs)(k.Ay, { children: [(0, a.jsx)(k.hE, { children: e }), (0, a.jsx)(k.CK, {})] });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: U()(z.Ot, z.QB), children: Q.intl.string(Q.t.KPowgn) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.j8734b) }),
                (0, a.jsx)("div", {
                    className: U()(z.eT, z.QB),
                    children: (0, a.jsx)(B.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, a.jsx)(ec.Q, {
                    text: Q.intl.string(Q.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(nD.A.getArticleURL(b.MVz.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t.csrAMJ) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t["m1+IBn"]) }),
                (0, a.jsx)("div", {
                    className: z.eT,
                    children: (0, a.jsx)(B.$, {
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
                (0, a.jsx)(k._V, { src: n(792525), className: z.QB }),
                (0, a.jsx)(k.hE, { children: Q.intl.format(Q.t["ivLUf/"], { username: e.username }) }),
                (0, a.jsx)(k.tK, { className: z.QX, children: Q.intl.string(Q.t["8Su18+"]) }),
                (0, a.jsx)("div", {
                    className: z.eT,
                    children: (0, a.jsx)(B.$, {
                        text: t ? Q.intl.string(Q.t.CMa9Rv) : Q.intl.string(Q.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, a.jsx)("div", {
                    className: z.Ot,
                    children: (0, a.jsx)(ec.Q, {
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
        return (0, a.jsx)(lO, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: i,
            children: (0, a.jsxs)(k.Ay, {
                children: [
                    (0, a.jsx)(iR, { giftCode: e }),
                    (0, a.jsx)("div", {
                        className: z.eT,
                        children: (0, a.jsx)(B.$, {
                            text: Q.intl.string(Q.t.n6I6k4),
                            fullWidth: !0,
                            disabled: null != l,
                            onClick: this.handleAccept,
                        }),
                    }),
                    null != l
                        ? (0, a.jsx)(k.tK, { className: z.QX, children: l })
                        : (0, a.jsx)(k.ME, {
                              className: z.QX,
                              children: Q.intl.format(Q.t.NYM08s, {
                                  userTag: tl.Ay.getUserTag(t),
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
            { fetchingUser: u, continueOnWeb: c } = this.state;
        if (e === b.fAW.OPEN && !c) return this.renderAppOpened();
        if (e === b.fAW.OPENING) return this.renderSpinner(Q.intl.string(Q.t["Z+hCVU"]));
        if (s) return this.renderSpinner(Q.intl.string(Q.t.bhJseN));
        if (null == i) return l ? this.renderExpiredInvite() : this.renderSpinner(Q.intl.string(Q.t.b3lf1c));
        if (l) {
            if (n) {
                let e = this.state.currentUser;
                return u || null == e
                    ? this.renderSpinner(Q.intl.string(Q.t.bYb2nS))
                    : this.requiresVerification && null != e
                      ? this.renderVerification(e)
                      : this.renderAuthenticated(i, e, t);
            }
            return "login" === this.getMode()
                ? (0, a.jsx)(ls, { giftCode: i, transitionTo: r, location: o })
                : (0, a.jsx)(lb, { giftCodeSKU: t, giftCode: i, transitionTo: r, location: o });
        }
        return null;
    }
}
let lL = m.Ay.connectStores([n0.A, iA.A, eX.default, iE.A, ed.A, ip.A], (e) => {
    let t = e.match.params.giftCode,
        n = n0.A.get(t),
        i = null != n ? iE.A.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: i,
        libraryApplication: null != i && n?.entitlementBranches != null ? i_.YI(n.entitlementBranches, i, iA.A) : null,
        authenticated: eX.default.isAuthenticated(),
        defaultRoute: ed.A.defaultRoute,
        isResolved: n0.A.getIsResolved(t),
        isAccepting: n0.A.getIsAccepting(t),
        libraryApplicationsFetched: iA.A.fetched,
        nativeAppState: ip.A.getState(t),
    };
})(lR);
function lO(e) {
    let { sku: t, children: n, giftCodeCode: i, transitionTo: l } = e,
        s = (0, ix.bF)(t);
    return (o.useEffect(() => {
        null != i && s && l(b.BVt.APP_WITH_GIFT_CODE(i));
    }, [s, i, l]),
    s)
        ? (0, a.jsxs)(k.Ay, {
              children: [(0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.b3lf1c) }), (0, a.jsx)(k.CK, {})],
          })
        : n;
}
var lk = n(871194),
    lw = n(799365),
    lD = n(894778),
    lG = n(315290),
    lP = n(396574),
    lU = n(838697);
m.Ay.initialize();
class lF extends o.PureComponent {
    componentDidMount() {
        (0, D.d0)("guildTemplate"),
            lP.VP || eq.A.launch("discord://" + b.BVt.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && eT.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return lP.VP
            ? (0, a.jsx)("div", { className: z.eT, children: (0, a.jsx)(B.$, { text: e, fullWidth: !0, onClick: t }) })
            : (0, a.jsx)(k.KE, { className: z.eT });
    }
    renderSpinner(e) {
        return (0, a.jsxs)(k.Ay, { children: [(0, a.jsx)(k.hE, { children: e }), (0, a.jsx)(k.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: U()(z.Ot, z.QB), children: Q.intl.string(Q.t.C7ZRNw) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.A6MwXE) }),
                this.renderButton(Q.intl.string(Q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t.csrAMJ) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t["m1+IBn"]) }),
                this.renderButton(Q.intl.string(Q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (eM()(null != e, "guild template must not be null"), e.state === i4.QB.RESOLVING)
            ? (0, a.jsx)(k.Ay, { className: lU.sL, children: (0, a.jsx)(lw.A, { guildTemplate: e }) })
            : (0, a.jsx)(lB, { guildTemplate: e });
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
        if (t === b.fAW.OPEN) return this.renderAppOpened();
        if (t === b.fAW.OPENING) return this.renderSpinner(Q.intl.string(Q.t["Z+hCVU"]));
        switch (e.state) {
            case i4.QB.RESOLVING:
                return this.renderSpinner(Q.intl.string(Q.t["Z+hCVU"]));
            case i4.QB.RESOLVED:
                if (n || !lP.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, a.jsx)(ls, { guildTemplate: e, transitionTo: i, location: l });
                return (0, a.jsx)(lb, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: l,
                    onRegister: () => {
                        (0, lS.C)(ly.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            lD.A.flowStart(lG.do.ORGANIC_GUILD_TEMPLATES, lG.ju.NUF_STARTED);
                    },
                });
            case i4.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function lB(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, lk.A)(t, !1);
    lD.A.flowStep(lG.do.ORGANIC_GUILD_TEMPLATES, lG.jC.GUILD_CREATE);
    let l = (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(k.hE, { className: lU.wx, children: Q.intl.string(Q.t.UNFvtM) }),
            n,
            (0, a.jsx)("div", {
                className: lU.Tf,
                children: (0, a.jsx)(B.$, { text: Q.intl.string(Q.t.xr59t7), fullWidth: !0, onClick: i }),
            }),
        ],
    });
    return (0, a.jsx)(iF, {
        className: lU.sL,
        children: () => [
            (0, a.jsx)(iB.A, { guildTemplate: t }, "template"),
            (0, a.jsx)("div", { className: lU.KJ, children: l }, "contents"),
        ],
    });
}
function lV(e, t, n) {
    e.preventDefault(),
        T.default.track(b.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        });
    let i = eX.default.getFingerprint(),
        l = null != i ? i : eX.default.getId();
    eT.A.openMobileApp(n.state === i4.QB.RESOLVED ? t : void 0, l);
}
function lM(e) {
    let { code: t } = e,
        n = (0, m.bG)([eS.A], () => eS.A.getGuildTemplate(t));
    return (o.useEffect(() => {
        (0, D.d0)("guild_template_mobile");
    }, []),
    null == n || n.state === i4.QB.RESOLVING)
        ? (0, a.jsx)(k.Ay, { children: (0, a.jsx)(ek.y, {}) })
        : n.state === i4.QB.RESOLVED
          ? (0, a.jsxs)(k.Ay, {
                children: [
                    (0, a.jsx)(lw.A, { guildTemplate: n, tall: !0 }),
                    (0, a.jsx)("div", {
                        className: z.QX,
                        children: (0, a.jsx)(B.$, {
                            text: Q.intl.string(Q.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => lV(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, a.jsx)(e8, {
                text: Q.intl.string(Q.t["e/rZ2n"]),
                buttonCta: Q.intl.string(Q.t.HAvYn0),
                onClick: (e) => lV(e, t, n),
            });
}
m.Ay.initialize(), n(938796);
var lH = n(821418),
    lW = n(665260),
    lQ = n(362474),
    lK = n(695366),
    lz = n(964486),
    lX = n(921037),
    lq = n(930839),
    lY = n(4274);
m.Ay.initialize();
let l$ = "register",
    lZ = "login";
function lJ(e) {
    let { message: t, onClick: n, invite: i, className: l } = e,
        s = i?.guild_scheduled_event != null;
    return lP.VP
        ? (0, a.jsx)("div", {
              className: l ?? (s ? z.QX : z.eT),
              children: (0, a.jsx)(B.$, { text: t, onClick: n, variant: s ? "active" : "primary", fullWidth: !0 }),
          })
        : (0, a.jsx)(k.KE, { className: l ?? z.eT });
}
function l0(e) {
    let { invite: t, transitionTo: n, location: i } = e;
    return (0, a.jsx)(ls, { invite: t, transitionTo: n, location: i });
}
function l1(e) {
    let { invite: t, onLoginStart: n, location: i, transitionTo: l } = e;
    return (0, a.jsx)(lb, { invite: t, onLoginStart: n, location: i, transitionTo: l });
}
function l2(e) {
    let { invite: t, inviteKey: n, handleAccept: i, handleDefaultTransition: l } = e,
        s = (0, m.bG)([e9.A], () => (t.state === b.elq.ERROR ? e9.A.getInviteError(n) : void 0)),
        r = t.guild_scheduled_event,
        u = s?.code === b.t02.INVALID_CANNOT_FRIEND_SELF;
    return (
        o.useEffect(() => {
            lq.A.requestDrain();
        }, []),
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsxs)(k.Ay, {
                    children: [
                        null != r
                            ? (0, a.jsx)(l_, { channel: t.channel, guildScheduledEvent: r })
                            : (0, a.jsx)(iG.A, { invite: t }),
                        null != s &&
                            (0, a.jsx)("div", {
                                className: z.QX,
                                role: "alert",
                                children: (0, a.jsxs)(F.E, {
                                    variant: "text-sm/medium",
                                    color: "text-feedback-critical",
                                    style: { display: "flex", alignItems: "center", gap: 4 },
                                    children: [
                                        (0, a.jsx)(lK.E, {
                                            size: "custom",
                                            width: 14,
                                            height: 14,
                                            color: "currentColor",
                                        }),
                                        " ",
                                        (0, lY.s)(s.code),
                                    ],
                                }),
                            }),
                        (0, a.jsx)(lJ, {
                            invite: t,
                            message: Q.intl.string(u ? Q.t.fIv16B : Q.t.ohMvm1),
                            onClick: u ? l : i,
                            className: null != s ? z.QX : void 0,
                        }),
                    ],
                }),
                null != r &&
                    null != t.guild &&
                    (0, a.jsx)(k.Ay, {
                        className: z.QX,
                        children: (0, a.jsx)(lN, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                    }),
            ],
        })
    );
}
function l4(e) {
    let { invite: t, inviteKey: n, rpcConnected: i, onContinue: l } = e;
    return (0, a.jsxs)(k.Ay, {
        children: [
            (0, a.jsx)(iG.A, { invite: t }),
            lP.VP
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("div", {
                              className: z.QX,
                              children: (0, a.jsx)(B.$, {
                                  text: Q.intl.string(Q.t.UQvCf7),
                                  onClick: function () {
                                      T.default.track(b.HAw.INVITE_CTA_CLICKED, {
                                          action: "open_app",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          i ? x.Ay.openNativeAppModal(n) : x.Ay.openApp(n);
                                  },
                                  variant: "primary",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, a.jsx)("div", {
                              className: z.Ot,
                              children: (0, a.jsx)(B.$, {
                                  text: Q.intl.string(Q.t["2ixEBi"]),
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
                : (0, a.jsx)(k.KE, { className: z.eT }),
        ],
    });
}
function l8(e) {
    let { title: t } = e;
    return (0, a.jsxs)(k.Ay, { children: [(0, a.jsx)(k.hE, { children: t }), (0, a.jsx)(k.CK, {})] });
}
function l7(e) {
    let { banned: t, handleDefaultTransition: n } = e;
    return (0, a.jsxs)(k.Ay, {
        children: [
            (0, a.jsx)(k.hE, { className: U()(z.Ot, z.QB), children: Q.intl.string(Q.t.kux01N) }),
            (0, a.jsx)(k.tK, { children: t ? Q.intl.string(Q.t["5AkWAd"]) : Q.intl.string(Q.t["+qUJAj"]) }),
            (0, a.jsx)(lJ, { message: Q.intl.string(Q.t.fIv16B), onClick: n }),
            (0, a.jsx)("div", {
                className: z.Ot,
                style: { textAlign: "left" },
                children: (0, a.jsx)(ec.Q, {
                    size: "sm",
                    textVariant: "text-sm/medium",
                    text: Q.intl.string(Q.t.urIwn4),
                    onClick: () => window.open(nD.A.getArticleURL(b.MVz.INVALID_INVITES), "_blank"),
                }),
            }),
        ],
    });
}
function l3(e) {
    let { handleDefaultTransition: t } = e;
    return (0, a.jsxs)(k.Ay, {
        children: [
            (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.fOc4gn) }),
            (0, a.jsx)(lJ, { message: Q.intl.string(Q.t.fIv16B), onClick: t }),
        ],
    });
}
var l9 = n(334465);
let l5 = (0, n(600975).C)({
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
var l6 = n(163050);
m.Ay.initialize();
var se = n(701273);
function st(e) {
    n.g.location.assign(e);
}
m.Ay.initialize(), n(426620), m.Ay.initialize();
let sn = is(ls),
    si = is(function (e) {
        let { transitionTo: t } = e,
            n = o.useCallback(
                (e) => {
                    let n;
                    ((n = (0, l9.B)(e, { path: b.BVt.CHANNEL(ny.pv.guildId(), ny.pv.channelId()) })),
                    +(n?.params?.channelId !== N.VV.ROLE_SUBSCRIPTIONS))
                        ? (t ?? w.pX)(e)
                        : w.bG(e);
                },
                [t],
            ),
            { isAuthenticated: i, loginStatus: l } = (0, m.cf)([eX.default], () => ({
                isAuthenticated: eX.default.isAuthenticated(),
                loginStatus: eX.default.getLoginStatus(),
            })),
            { location: s, redirectTo: r } = e,
            [c, d] = o.useState(i);
        function h(e) {
            let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
            (0, E.Qh)({ handoffKey: t, handoffToken: n, handoffSource: i }), d(!1);
        }
        return ((0, lz.Ay)(() => {
            if (null != s) {
                let { handoff_key: e, handoff_token: t } = (0, u.parse)(s.search);
                if (null != e && null != t) {
                    let n = null != r ? I(r) : void 0;
                    c
                        ? f.A.logout("handoff", null).finally(() => {
                              h({ handoffKey: e, handoffToken: t, handoffSource: n });
                          })
                        : h({ handoffKey: e, handoffToken: t, handoffSource: n });
                }
            }
        }),
        c || l === b.aUe.LOGGING_IN)
            ? (0, a.jsx)(k.Ay, { children: (0, a.jsx)(ek.y, {}) })
            : (0, a.jsx)(ls, { ...e, transitionTo: n });
    }),
    sl = is(function (e) {
        let { inviteKey: t, location: n, transitionTo: i, login: l } = e,
            s = o.useMemo(() => (0, eY.m0)(t), [t]),
            r = (0, m.bG)([e9.A], () => e9.A.getInvite(t)),
            u = (0, m.bG)([ip.A], () => ip.A.getState(s)),
            c = (0, m.bG)([eX.default], () => eX.default.isAuthenticated()),
            d = (0, m.bG)([ed.A], () => ed.A.defaultRoute),
            h = (0, m.bG)([lc], () => lc.isUnderageAnonymous()),
            f = (function (e) {
                let [t, n] = o.useState(!1);
                return (
                    o.useEffect(() => {
                        let e = !1;
                        return (
                            ev().then((t) => {
                                e || "denied" !== t || n(!0);
                            }),
                            () => {
                                e = !0;
                            }
                        );
                    }, []),
                    t || e === b.fAW.OPEN_FAIL
                );
            })(u),
            p = (function (e) {
                let [t, n] = o.useState(!1);
                return (
                    o.useEffect(() => {
                        let e = setTimeout(() => n(!0), 500);
                        return () => clearTimeout(e);
                    }, []),
                    !e && !t
                );
            })(f),
            [A, E] = o.useState(!1);
        o.useLayoutEffect(() => {
            (u === b.fAW.OPEN || r?.state === b.elq.APP_OPENED) && E(!0);
        }, [r?.state, u]);
        let _ = l ? lZ : l$,
            j = o.useCallback((e) => x.Ay.getInviteContext(e, r), [r]),
            N = o.useCallback(
                (e) => {
                    null != r &&
                        (null != r.channel || e?.channel != null) &&
                        (r.guild?.id != null
                            ? x.Ay.transitionToInviteOnboarding(e ?? r, { transitionTo: i })
                            : x.Ay.transitionToInvite(e ?? r, { transitionTo: i }));
                },
                [r, i],
            ),
            v = o.useCallback(() => {
                T.default.track(b.HAw.INVITE_CTA_CLICKED, {
                    action: "accept_invite",
                    invite_code: r?.code,
                    guild_id: r?.guild?.id,
                }),
                    x.Ay.acceptInvite({
                        inviteKey: t,
                        context: j(b.S3d.INVITE),
                        skipOnboarding: !0,
                        callback: (e) => {
                            ei(e), null != e.channel && (f ? N(e) : x.Ay.openApp(t, e.channel.id));
                        },
                    }).catch(() => {});
            }, [t, j, r?.code, r?.guild?.id, f, N]),
            C = o.useCallback(() => {
                i(d);
            }, [d, i]);
        if (
            ((0, lz.Ay)(() => {
                let e = eX.default.getAnalyticsToken();
                if (
                    (null != e
                        ? g.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eX.default.getId() })
                        : eX.default.isAuthenticated() && nO.fetchCurrentUser({ withAnalyticsToken: !0 }).catch(b.tEg),
                    T.default.track(b.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }),
                    (0, D.d0)("invite"),
                    lP.VP || eq.A.launch("discord://" + b.BVt.INVITE(t), () => void 0),
                    !l && h)
                ) {
                    let { baseCode: e } = (0, eY.y$)(t);
                    (0, w.bG)(b.BVt.INVITE_LOGIN(e));
                }
            }),
            o.useEffect(() => {
                r?.state === b.elq.APP_NOT_OPENED && N();
            }, [r?.state, N]),
            (function (e) {
                let {
                        invite: t,
                        inviteKey: n,
                        authenticated: i,
                        nativeAppState: l,
                        mode: s,
                        getAcceptInviteContext: r,
                        handleContinue: a,
                        transitionTo: u,
                    } = e,
                    c = (0, iO.Ay)(i),
                    d = (0, iO.Ay)(l);
                o.useEffect(() => {
                    if (s === lZ && i && !1 === c) {
                        let e = eX.default.getFingerprint();
                        if (null != e) {
                            let i = (0, ez.d)(e);
                            T.default.track(b.HAw.INVITE_LOGIN_SUCCESSFUL, {
                                invite_code: (0, eY.m0)(n),
                                guild_id: t?.guild?.id,
                                channel_id: t?.channel?.id,
                                inviter_id: t?.inviter?.id,
                                prev_user_id: i,
                            });
                        }
                        x.Ay.acceptInvite({
                            inviteKey: n,
                            context: r(b.S3d.INVITE),
                            skipOnboarding: !0,
                            callback: a,
                        }).catch(() => {});
                    }
                }, [i, c, s, r, a, t, n]),
                    o.useEffect(() => {
                        if (null != t && s === l$ && i && !1 === c) {
                            let { channel: e } = t;
                            if (null != e)
                                if (((0, lS.C)(ly.zY.INVITE_UNCLAIMED), null != t.guild)) {
                                    let e = (0, lW.Lt)(t.flags ?? 0, lH.Q.IS_APPLICATION_BYPASS),
                                        n =
                                            t.guild.features?.includes(
                                                b.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED,
                                            ) &&
                                            t.guild.features?.includes(
                                                b.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL,
                                            );
                                    !e && n
                                        ? u(b.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id))
                                        : x.Ay.transitionToInviteOnboarding(t, { transitionTo: u });
                                } else x.Ay.transitionToInvite(t, { transitionTo: u });
                        }
                    }, [t, i, c, u, s, n]),
                    o.useEffect(() => {
                        null == t ||
                            (l !== d &&
                                (l === b.fAW.OPEN
                                    ? T.default.track(
                                          b.HAw.INVITE_APP_INVOKED,
                                          {
                                              invite_code: (0, eY.m0)(n),
                                              guild_id: t.guild?.id,
                                              channel_id: t.channel?.id,
                                              inviter_id: t.inviter?.id,
                                              user_is_member: null != t.guild && null != e3.A.getGuild(t.guild.id),
                                              size_total: t.approximate_member_count,
                                              invite_type: null != t.type ? ts.Xd[t.type] : void 0,
                                          },
                                          { flush: !0 },
                                      )
                                    : l === b.fAW.OPEN_FAIL &&
                                      T.default.track(b.HAw.INVITE_APP_INVOKE_FAILED, {
                                          invite_code: (0, eY.m0)(n),
                                          reason: "rpc_failed",
                                          invite_type: null != t.type ? ts.Xd[t.type] : void 0,
                                      })));
                    }, [t, l, d, n]);
            })({
                invite: r,
                inviteKey: t,
                authenticated: c,
                nativeAppState: u,
                mode: _,
                getAcceptInviteContext: j,
                handleContinue: N,
                transitionTo: i,
            }),
            null == r)
        )
            return null;
        let I = u === b.fAW.OPEN;
        if (A || I || r.state === b.elq.APP_OPENED)
            return (0, a.jsx)(l4, { invite: r, inviteKey: t, rpcConnected: I, onContinue: N });
        let { state: S } = r;
        if (S === b.elq.APP_NOT_OPENED) return (0, a.jsx)(l3, { handleDefaultTransition: C });
        if ([b.elq.RESOLVING, b.elq.ACCEPTING, b.elq.APP_OPENING].includes(S)) {
            let e =
                S === b.elq.ACCEPTING ? Q.intl.string(Q.t["6wsY16"]) : (b.elq.RESOLVING, Q.intl.string(Q.t["Z+hCVU"]));
            return (0, a.jsx)(l8, { title: e });
        }
        if (S === b.elq.EXPIRED) return (0, a.jsx)(l7, { banned: !1, handleDefaultTransition: C });
        if (S === b.elq.BANNED) return (0, a.jsx)(l7, { banned: !0, handleDefaultTransition: C });
        if (S === b.elq.RESOLVED) {
            if (c && (0, lW.Lt)(r.flags ?? 0, lH.Q.IS_GUEST_INVITE))
                return (
                    x.Ay.openApp(t),
                    lQ.u.set(lX.B, t),
                    (0, a.jsx)(l4, { invite: r, inviteKey: t, rpcConnected: I, onContinue: () => i(b.BVt.APP) })
                );
            if (null != r.type && ts.uR.has(r.type) && p)
                return (0, a.jsx)(l8, { title: Q.intl.string(Q.t["Z+hCVU"]) });
            if (!c && lP.VP)
                return _ === lZ
                    ? (0, a.jsx)(l0, { invite: r, transitionTo: i, location: n })
                    : (0, a.jsx)(l1, {
                          invite: r,
                          onLoginStart: function () {
                              T.default.track(b.HAw.INVITE_LOGIN, {
                                  invite_code: r?.code,
                                  guild_id: r?.guild?.id,
                                  channel_id: r?.channel?.id,
                                  inviter_id: r?.inviter?.id,
                              });
                          },
                          location: n,
                          transitionTo: i,
                      });
        }
        return S === b.elq.RESOLVED || S === b.elq.ERROR
            ? (0, a.jsx)(l2, { invite: r, inviteKey: t, handleAccept: v, handleDefaultTransition: C })
            : null;
    }),
    ss = is(function (e) {
        let t = {
            guildTemplate: (0, m.bG)([eS.A], () => eS.A.getGuildTemplate(e.code)),
            nativeAppState: (0, m.bG)([ip.A], () => ip.A.getState(e.code)),
            authenticated: (0, m.bG)([eX.default], () => eX.default.isAuthenticated()),
            defaultRoute: (0, m.bG)([ed.A], () => ed.A.defaultRoute),
        };
        return (0, a.jsx)(lF, { ...e, ...t });
    }),
    sr = is(lL),
    sa = is(function (e) {
        let { inviteKey: t, transitionTo: n } = e,
            i = (0, m.bG)([e9.A], () => e9.A.getInvite(t));
        return (
            o.useEffect(() => {
                let e = eX.default.getAnalyticsToken();
                null != e &&
                    g.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eX.default.getId() }),
                    (0, D.d0)("invite_mobile"),
                    T.default.track(b.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 });
            }, []),
            (0, a.jsx)(nE, {
                invite: i,
                onAcceptInvite: function (e) {
                    nd(e, t, i);
                },
                onOpenAppAfterRegistration: function (e) {
                    nd(e, t, i, { didRegister: !0 });
                },
                transitionTo: n,
            })
        );
    }),
    so = is(lb),
    su = is(function (e) {
        let { location: t, transitionTo: i = w.pX } = e,
            [l, s] = o.useState("submitting");
        function r() {
            return "Android" === eW().os.family || "iOS" === eW().os.family
                ? null
                : (0, a.jsx)(B.$, {
                      text: Q.intl.string(Q.t.dKhVQN),
                      fullWidth: !0,
                      onClick: () => i(b.BVt.LOGIN, { source: "authorizeIPAdress" }),
                  });
        }
        return ((0, lz.Ay)(() => {
            (0, D.d0)("authorize_ip");
            let e = (0, em.A)(t);
            null == e
                ? s("failed")
                : (async function () {
                      if (null != e)
                          try {
                              await f.A.authorizeIPAddress(e), s("succeeded");
                          } catch (e) {
                              s("failed");
                          }
                  })();
        }),
        "failed" === l)
            ? (0, a.jsxs)(k.Ay, {
                  children: [
                      (0, a.jsx)("img", { alt: "", src: n(792009), className: z.SX }),
                      (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t["f/54az"]) }),
                      (0, a.jsx)(k.tK, { className: z.C2, children: Q.intl.string(Q.t.i3ehMr) }),
                      r(),
                  ],
              })
            : "succeeded" === l
              ? (0, a.jsxs)(k.Ay, {
                    children: [
                        (0, a.jsx)("img", { alt: "", src: n(841406), className: z.SX }),
                        (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t.iG0SlK) }),
                        (0, a.jsx)(k.tK, { className: z.C2, children: Q.intl.string(Q.t["Elv+qt"]) }),
                        r(),
                    ],
                })
              : (0, a.jsxs)(k.Ay, {
                    children: [(0, a.jsx)(k.CK, {}), (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t["9exy+V"]) })],
                });
    }),
    sc = is(function (e) {
        let { location: t } = e,
            [i, l] = o.useState("submitting");
        return (o.useEffect(() => {
            (0, D.d0)("authorize_payment");
            let e = (0, em.A)(t);
            null == e
                ? l("failed")
                : (async function () {
                      if (null != e)
                          try {
                              await f.A.authorizePayment(e), l("succeeded");
                          } catch (e) {
                              l("failed");
                          }
                  })();
        }, [t]),
        "failed" === i)
            ? (0, a.jsxs)(k.Ay, {
                  children: [
                      (0, a.jsx)("img", { alt: "", src: n(678985), className: z.SX }),
                      (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t.GHRpue) }),
                      (0, a.jsx)(k.tK, { className: z.C2, children: Q.intl.string(Q.t["1nO55v"]) }),
                  ],
              })
            : "succeeded" === i
              ? (0, a.jsxs)(k.Ay, {
                    children: [
                        (0, a.jsx)("img", { alt: "", src: n(586430), className: z.SX }),
                        (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t.ihHX53) }),
                        (0, a.jsx)(k.tK, { className: z.C2, children: Q.intl.string(Q.t["pGPCv+"]) }),
                    ],
                })
              : (0, a.jsxs)(k.Ay, {
                    children: [(0, a.jsx)(k.CK, {}), (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.T3vC7n) })],
                });
    }),
    sd = is(function (e) {
        let { location: t, transitionTo: n = st } = e,
            [i, l] = o.useState("submitting"),
            s = o.useRef(void 0);
        (0, lz.Ay)(() => {
            (0, D.d0)("verify_email");
            let e = (0, em.A)(t);
            null == e
                ? l("failed")
                : (async function () {
                      if (null != e)
                          try {
                              let t = await f.A.verify(e);
                              l("succeeded"), (s.current = t);
                          } catch (e) {
                              l("failed");
                          }
                  })();
        });
        let r = o.useCallback(() => {
                n(b.BVt.LOGIN, { source: "verify_email" });
            }, [n]),
            u = o.useCallback(() => {
                T.default.track(b.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: s.current }),
                    (0, se.A)("verify_email");
            }, []);
        return "failed" === i
            ? (0, a.jsx)(eD, {
                  title: Q.intl.string(Q.t["PCgG3+"]),
                  subtitle: Q.intl.string(Q.t.tQpeA3),
                  buttonText: Q.intl.string(Q.t.dKhVQN),
                  onButtonClick: r,
              })
            : "succeeded" === i
              ? (0, a.jsx)(eD, {
                    title: Q.intl.string(Q.t["dAfGb+"]),
                    buttonText: Q.intl.string(Q.t["uJWIj/"]),
                    onButtonClick: u,
                    image: (0, a.jsx)(eb, { alt: Q.intl.string(Q.t["dAfGb+"]) }),
                })
              : (0, a.jsx)(eD, {
                    title: Q.intl.string(Q.t["0c8+5n"]),
                    subtitle: Q.intl.string(Q.t.ULTCBE),
                    loading: !0,
                });
    }),
    sh = is(function () {
        let [e, t] = o.useState(""),
            [i, l] = o.useState(""),
            [s, r] = o.useState(!1),
            [u, c] = o.useState(!1),
            [d, h] = o.useState(null),
            [g, f] = o.useState(null),
            p = (0, m.bG)([eE.A], () => eE.A.getCountryCode()),
            x = p.code.split(" ")[0];
        async function A() {
            try {
                await ex.A.resendCode(e);
            } catch (e) {
                f(e.body.message);
            }
        }
        async function E() {
            r(!0);
            try {
                let { token: t } = await ex.A.verifyPhone(x + e, i);
                h(null), f(null), c(!0), ex.A.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (h(null), f(e.body.message)) : (h(e.body.phone), f(e.body.code));
            } finally {
                r(!1);
            }
        }
        let _ = (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k._V, { src: n(142041) }),
                (0, a.jsxs)(k.hE, {
                    className: U()(z.QX, ej.Uu, ej.wq, ej.Hu),
                    children: [
                        Q.intl.string(Q.t.WWzQta),
                        (0, a.jsx)(ep.y, { size: "md", color: "currentColor", className: z.oY }),
                    ],
                }),
            ],
        });
        return u
            ? _
            : (0, a.jsxs)(k.Ay, {
                  children: [
                      (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.o4JNrO) }),
                      (0, a.jsx)(k.tK, { className: z.Ot, children: Q.intl.string(Q.t.y0tVbq) }),
                      (0, a.jsxs)(k.eB, {
                          className: z.QX,
                          children: [
                              (0, a.jsx)(e_.A, {
                                  label: Q.intl.string(Q.t["eJnn0+"]),
                                  alpha2: p.alpha2,
                                  countryCode: x,
                                  value: e,
                                  autoComplete: "off",
                                  spellCheck: "false",
                                  onChange: t,
                                  forceMode: eA.Pd.PHONE,
                                  error: d,
                              }),
                              (0, a.jsx)(k.pd, {
                                  className: z.QX,
                                  label: Q.intl.string(Q.t.OdzNbm),
                                  value: i,
                                  onChange: l,
                                  maxLength: 6,
                                  error: g,
                              }),
                              (0, a.jsx)(ec.Q, { text: Q.intl.string(Q.t["5b60gi"]), onClick: A }),
                              (0, a.jsx)("div", {
                                  className: z.QX,
                                  children: (0, a.jsx)(B.$, {
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
    sm = is(l6.A),
    sg = is(im),
    sf = is(ef),
    sp = is(function (e) {
        let { location: t } = e,
            [n, i] = o.useState(!1),
            { verifySuccess: l, verifyErrors: s, redirectGuildId: r } = (0, m.bG)([eB], () => eB.getState());
        function u() {
            let e, t;
            (e = (function (e) {
                let t = eW().os?.family;
                if ("Android" === t || "iOS" === t) {
                    let t = eX.default.getFingerprint(),
                        n = (0, eK.I_)();
                    return (
                        eM()(null != e, "generateAppPath: guildId cannot be null"),
                        (0, eK.Ay)((0, eQ.jN)(e), { utmSource: "verify_hub_email", fingerprint: t, attemptId: n })
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
                eq.A.launch(e, (e) => {
                    e || (0, w.bG)(ed.A.fallbackRoute);
                }),
                i(!0);
        }
        return (o.useEffect(() => {
            let e = (0, em.A)(t);
            eR.A.verify(e), (0, D.d0)("verify_hub_email");
        }, [t]),
        n)
            ? (0, a.jsx)(eD, {
                  title: Q.intl.string(Q.t.csrAMJ),
                  subtitle: Q.intl.string(Q.t["m1+IBn"]),
                  buttonText: Q.intl.string(Q.t.fIv16B),
                  onButtonClick: () => (0, w.pX)(b.BVt.CHANNEL(r)),
              })
            : l
              ? (0, a.jsx)(eD, {
                    title: Q.intl.string(Q.t["dAfGb+"]),
                    buttonText: Q.intl.string(Q.t["uJWIj/"]),
                    onButtonClick: u,
                    image: (0, a.jsx)(eb, { alt: Q.intl.string(Q.t["dAfGb+"]) }),
                })
              : null != s
                ? (0, a.jsx)(eD, {
                      title: Q.intl.string(Q.t["PCgG3+"]),
                      subtitle: Q.intl.string(Q.t.tQpeA3),
                      buttonText: Q.intl.string(Q.t["uJWIj/"]),
                      onButtonClick: u,
                  })
                : (0, a.jsx)(eD, {
                      title: Q.intl.string(Q.t["0c8+5n"]),
                      subtitle: Q.intl.string(Q.t.ULTCBE),
                      loading: !0,
                  });
    }),
    sx = is(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, ia.W)(nS.XK.CHANNEL, {
                guildId: e.params.guildId,
                channelId: e.params.channelId,
                messageId: e.params.messageId,
                search: t.search,
            });
        }
        return (0, a.jsx)(ic, { match: t, location: n, attemptDeepLink: i });
    }),
    sA = is(function (e) {
        let { match: t, location: n } = e;
        async function i(e) {
            await (0, ia.W)(nS.XK.GAME_SHOP, {
                guildId: e.params.guildId,
                pageIndex: e.params.pageIndex,
                skuId: e.params.skuId,
                slug: e.params.slug,
            });
        }
        return (0, a.jsx)(ic, { match: t, location: n, attemptDeepLink: i });
    }),
    sE = is(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, ia.W)(nS.XK.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search,
            });
        }
        return (0, a.jsx)(ic, { match: t, location: n, attemptDeepLink: i });
    }),
    s_ = is(function (e) {
        let { location: t } = e,
            n = (0, m.bG)([eX.default], () => eX.default.isAuthenticated()),
            i = (0, m.bG)([eC.A], () => eC.A.hasLoadedExperiments),
            l = l5.useExperiment({ location: "RSL - Landing Page" }, { autoTrackExposure: !0 }).enabled,
            [s, r] = o.useState(!1),
            [u, c] = o.useState(Q.intl.string(Q.t["9exy+V"])),
            [d, h] = o.useState(!0);
        function g(e) {
            switch (e) {
                case b.t02.INVALID_FORM_BODY:
                case b.t02.DSA_RSL_REPORT_NOT_FOUND:
                    c(Q.intl.string(Q.t.bzXDfc));
                    break;
                case b.t02.DSA_RSL_ALREADY_REQUESTED:
                    c(Q.intl.string(Q.t.rV00wq));
                    break;
                case b.t02.DSA_RSL_LIMITED_TIME:
                    c(Q.intl.string(Q.t["0dI29h"]));
                    break;
                case b.t02.DSA_RSL_REPORT_INELIGIBLE:
                    c(Q.intl.string(Q.t["RGa/Gb"]));
                    break;
                default:
                    c(Q.intl.string(Q.t["0QLzfv"]));
            }
        }
        return (
            o.useEffect(() => {
                n
                    ? (h(!0),
                      nO
                          .fetchCurrentUser({ withAnalyticsToken: !0 })
                          .then(() => h(!1))
                          .catch(() => h(!1)))
                    : h(!1);
            }, [n]),
            o.useEffect(() => {
                i || l || f.A.getExperiments();
            }, [i, l]),
            o.useEffect(() => {
                async function e(e) {
                    try {
                        let t = null != e ? await (0, nw.q)(e) : void 0;
                        null != t ? c(Q.intl.string(Q.t.e6mZMt)) : g(t.body?.code);
                    } catch (e) {
                        g(e.body?.code);
                    } finally {
                        r(!1);
                    }
                }
                r(!0), e((0, em.A)(t)), (0, D.d0)("report_second_look");
            }, [t]),
            l &&
                !d &&
                (0, a.jsxs)(k.Ay, {
                    children: [(0, a.jsx)(k.hE, { className: z.QB, children: u }), s && (0, a.jsx)(ek.y, {})],
                })
        );
    }),
    sj = is(et),
    sN = is(function (e) {
        let { match: t, location: i } = e,
            l = (0, u.parse)(i.search).token,
            [s, r] = o.useState("loading"),
            c = o.useRef(!1),
            h = o.useCallback(async (e) => {
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
            m = o.useCallback((e) => {
                let t = eX.default.getFingerprint() ?? eX.default.getId(),
                    n = `discord://login/one-time?token=${encodeURIComponent(e)}`;
                eq.A.launch(n, (e) => {
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
                    let t = eX.default.getFingerprint() ?? eX.default.getId(),
                        i = eX.default.getInstallationForTracking();
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((n) => {
                            let { default: l } = n;
                            l.request(b.e$_.DEEP_LINK, {
                                type: nS.XK.ONE_TIME_LOGIN,
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
                    t = d.Fr ? "mobile" : d.v1 ? "tablet" : (0, nj.isDesktop)() ? "desktop_app" : "web";
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
                (0, nj.isDesktop)() ? h(l) : c.current || ((c.current = !0), r("rpc_attempting"), g(l));
            }, [l, i, h, g]),
            d.Fr || d.v1)
        ) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, a.jsx)(nI, { token: l, hasError: "error" === s, errorReason: e });
        }
        if ((0, w.MX)()) return null;
        if ("app_launched" === s)
            return (0, a.jsx)(nT, {
                title: Q.intl.string(Q.t.RvUUOy),
                subtitle: Q.intl.string(Q.t["5/lR0g"]),
                buttonText: Q.intl.string(Q.t["2ixEBi"]),
                buttonOnClick: () => {
                    T.default.track(b.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: s }), h(l);
                },
            });
        if ("app_launch_not_supported" === s)
            return (0, a.jsx)(nT, {
                title: Q.intl.string(Q.t.qq4tjT),
                subtitle: Q.intl.string(Q.t.CVxYRo),
                buttonText: Q.intl.string(Q.t["2ixEBi"]),
                buttonOnClick: () => h(l),
            });
        if ("error" === s) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, a.jsx)(nT, {
                title: Q.intl.string(Q.t.RtCSr1),
                subtitle: Q.intl.string(Q.t["S+YjYJ"]),
                buttonText: Q.intl.string(Q.t.j3cG2p),
                buttonOnClick: () => {
                    T.default.track(b.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                        (0, w.pX)(b.BVt.LOGIN);
                },
            });
        }
        return (0, a.jsx)(k.Ay, { children: (0, a.jsx)(k.CK, {}) });
    });
class sv extends o.PureComponent {
    state = { splash: null, redirectTo: null, backgroundId: null };
    hasTriggeredInviteResolve = !1;
    experimentFallbackTimeout = null;
    static getDerivedStateFromProps(e, t) {
        let { invite: n, location: i } = e,
            { backgroundId: l } = t,
            s = (0, u.parse)(i.search).redirect_to ?? null;
        (null == s || "" === s || s.startsWith(b.BVt.ME) || (!(0, h.e)(s) && !eo(s))) && (s = null);
        let r = null;
        if (null == n) r = (0, n2.u8)(s);
        else {
            let { guild: e, target_application: t } = n;
            null != t
                ? null != l && (r = (0, n1.uD)(t.id, l, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (r = e5.Ay.getGuildSplashURL({ id: e.id, splash: e.splash }));
        }
        return { redirectTo: s, splash: r };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        null != e &&
            (!t && n && f.A.getExperiments(!0),
            null != eX.default.getInstallationForTracking() && (0, eI.Tv)(null),
            T.default.track(
                b.HAw.INVITE_OPENED,
                { invite_code: (0, eY.m0)(e), load_time: n8.getTimeSinceNavigationStart() },
                { flush: !0 },
            )),
            t
                ? this.maybeResolveInvite()
                : null != e && (this.experimentFallbackTimeout = setTimeout(this.maybeResolveInvite, 2e3)),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            O.initialize(),
            (0, D.DC)();
    }
    componentDidUpdate(e) {
        !e.hasLoadedExperiments && this.props.hasLoadedExperiments && this.maybeResolveInvite(),
            e.invite?.state !== this.props.invite?.state && this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        null != this.experimentFallbackTimeout &&
            (clearTimeout(this.experimentFallbackTimeout), (this.experimentFallbackTimeout = null)),
            O.terminate();
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
        if (e?.state === b.elq.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, n1.RG)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await x.Ay.resolveInvite(e, b.S3d.INVITE, {
            withGames: !0,
            withGuildExperiments: d.Fr || d.v1,
        });
        if (null != t && (ei(t), null != t.type && ts.uR.has(t.type))) {
            if ("denied" === (await ev()))
                return void T.default.track(b.HAw.INVITE_APP_INVOKE_FAILED, {
                    invite_code: (0, eY.m0)(e),
                    reason: "lna_denied",
                    invite_type: ts.Xd[t.type],
                });
            x.Ay.openNativeAppModal(e);
        }
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (T.default.track(
                b.HAw.GUILD_TEMPLATE_OPENED,
                { guild_template_code: e, load_time: n8.getTimeSinceNavigationStart() },
                { flush: !0 },
            ),
            eT.A.resolveGuildTemplate(e),
            eT.A.openNativeAppModal(e));
    }
    resolveGiftCode() {
        let { giftCode: e } = this.props;
        null != e &&
            p.Ay.resolveGiftCode(e, !0, !0)
                .then((t) => {
                    null != t && null == t.giftCode.promotion && g.h.wait(() => p.Ay.openNativeGiftCodeModal(e));
                })
                .catch(p.Ay.reportUnexpectedGiftCodeError);
    }
    render() {
        let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
        return (0, a.jsxs)(ir.A, {
            splash: e,
            children: [
                (0, a.jsx)(en.A, { path: b.BVt.LOGIN_HANDOFF, render: (e) => (0, a.jsx)(si, { ...e, redirectTo: t }) }),
                (0, a.jsx)(en.A, { path: b.BVt.LOGIN_ONE_TIME, render: (e) => (0, a.jsx)(sN, { ...e }) }),
                (0, a.jsx)(en.A, {
                    impressionName: c.ImpressionNames.USER_LOGIN,
                    path: b.BVt.LOGIN,
                    render: (e) => (0, a.jsx)(sn, { ...e, redirectTo: t }),
                }),
                (0, a.jsx)(en.A, {
                    impressionName: c.ImpressionNames.USER_REGISTRATION,
                    path: b.BVt.REGISTER,
                    render: (e) => (0, a.jsx)(so, { ...e, redirectTo: t }),
                }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, a.jsx)(sr, { login: !0, ...e }),
                }),
                (0, a.jsx)(en.A, { path: b.BVt.GIFT_CODE(":giftCode"), render: (e) => (0, a.jsx)(sr, { ...e }) }),
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
                        return d.Fr || d.v1
                            ? (0, a.jsx)(sa, { inviteKey: s, transitionTo: l }, s)
                            : (0, a.jsx)(
                                  sl,
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
                        return d.Fr || d.v1
                            ? (0, a.jsx)(lM, { code: t }, t)
                            : (0, a.jsx)(ss, {
                                  code: t,
                                  location: i,
                                  transitionTo: l,
                                  login: n === b.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, a.jsx)(en.A, { path: b.BVt.VERIFY, render: (e) => (0, a.jsx)(sd, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.VERIFY_HUB_EMAIL, render: (e) => (0, a.jsx)(sp, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.VERIFY_REQUEST, render: (e) => (0, a.jsx)(sh, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.DISABLE_EMAIL_NOTIFICATIONS, render: (e) => (0, a.jsx)(sg, { ...e }) }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, a.jsx)(sf, { ...e }),
                }),
                (0, a.jsx)(en.A, { path: b.BVt.AUTHORIZE_IP, render: (e) => (0, a.jsx)(su, { ...e }) }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.REJECT_IP,
                    render: (e) => (0, a.jsx)(sm, { source: b.BVt.REJECT_IP, ...e }),
                }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.REJECT_MFA,
                    render: (e) => (0, a.jsx)(sm, { source: b.BVt.REJECT_MFA, ...e }),
                }),
                (0, a.jsx)(en.A, { path: b.BVt.AUTHORIZE_PAYMENT, render: (e) => (0, a.jsx)(sc, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.RESET, render: (e) => (0, a.jsx)(sm, { source: b.BVt.RESET, ...e }) }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, a.jsx)(sE, { ...e }),
                }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.CHANNELS_GAME_SHOP(ny.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, a.jsx)(sA, { ...e }),
                }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.CHANNEL(ny.pv.guildId(), ny.pv.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, a.jsx)(sx, { ...e }),
                }),
                (0, a.jsx)(en.A, { path: b.BVt.REPORT, render: () => (0, a.jsx)(nJ, {}) }),
                (0, a.jsx)(en.A, { path: b.BVt.REPORT_SECOND_LOOK, render: (e) => (0, a.jsx)(s_, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.ACCOUNT_REVERT(":token"), render: (e) => (0, a.jsx)(sj, { ...e }) }),
            ],
        });
    }
}
let sC = m.Ay.connectStores([eX.default, e9.A, n0.A, eC.A, eS.A], (e) => {
    let { match: t, location: n } = e,
        i = t?.params?.inviteCode,
        l = null != i ? (0, eY.fB)(i, n.search) : void 0,
        s = t?.params?.giftCode,
        r = t?.params?.guildTemplateCode;
    return {
        inviteKey: l,
        isAuthenticated: eX.default.isAuthenticated(),
        giftCode: s,
        guildTemplateCode: r,
        gift: null != s ? n0.A.get(s) : null,
        invite: null != l ? e9.A.getInvite(l) : null,
        guildTemplate: null != r ? eS.A.getGuildTemplate(r) : null,
        hasLoadedExperiments: eC.A.hasLoadedExperiments,
    };
})(sv);
