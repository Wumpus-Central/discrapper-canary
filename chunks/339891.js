n.r(t), n.d(t, { default: () => sy });
var i,
    l,
    s,
    r,
    a = n(627968),
    o = n(64700),
    c = n(492462),
    u = n(562708),
    d = n(607399),
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
    I = n(355097),
    v =
        (((i = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (i.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        i);
function C(e) {
    let t = decodeURIComponent(e),
        n = (0, _.vu)(t);
    return null != n && n.channelId === N.VV.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t.toLowerCase() === (0, j.settingsPathToRoute)(I.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)
          ? "role_subscription_setting"
          : void 0;
}
var S = n(115036),
    y = n(174459),
    T = n(272355),
    b = n(652215);
function R(e, t) {
    y.default.track(b.HAw.BROWSER_HANDOFF_SUCCEEDED, { authenticated: e, handoff_source: t });
}
class O extends T.A {
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
                          l === v.ROLE_SUBSCRIPTION &&
                              y.default.track(b.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
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
    G = n(976860),
    P = n(210714),
    w = n(430690),
    D = n(503698),
    B = n.n(D),
    U = n(834730),
    V = n(821609),
    M = n(181658),
    F = n(625494),
    W = n(499785),
    H = (((l = {}).START = "start"), (l.PASSWORD = "password"), (l.SUCCESS = "success"), (l.FAILED = "failed"), l),
    Q = n(375708),
    K = n(244460),
    z = n(818050);
function X(e) {
    let { setOriginalEmail: t, setSlide: i, ready: l, token: s } = e,
        [r, c] = o.useState(!1),
        [d, h] = o.useState(null),
        [m, g] = o.useState(null),
        [x, f] = o.useState(""),
        p = o.useRef(null);
    return (
        o.useEffect(() => {
            l && p.current?.focus();
        }, [l]),
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(k._V, { src: null == m ? n(79418) : n(579656), className: B()(z.SX, z.Ot) }),
                (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.IfBQ56) }),
                null != m && "" !== m
                    ? (0, a.jsx)(U.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: m })
                    : null,
                (0, a.jsxs)(k.eB, {
                    className: B()(z.SX, z.QX),
                    children: [
                        (0, a.jsx)(k.pd, {
                            name: "password",
                            type: "password",
                            label: Q.intl.string(Q.t["8dM4FO"]),
                            setRef: p,
                            className: z.SX,
                            value: x,
                            onChange: f,
                            error: d,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: Q.intl.string(Q.t["yY/PXY"]),
                        }),
                        (0, a.jsx)("div", {
                            className: z.Ot,
                            children: (0, a.jsx)(V.$, {
                                text: Q.intl.string(Q.t.ezv91b),
                                fullWidth: !0,
                                onClick: function () {
                                    if (!r) {
                                        if (0 === x.length) {
                                            h(Q.intl.string(Q.t.R98xD5)), F._.dispatch(b.jej.WAVE_EMPHASIZE);
                                            return;
                                        }
                                        return (
                                            null != m && g(null),
                                            null != d && h(null),
                                            t(""),
                                            c(!0),
                                            W.A.post({
                                                url: b.Rsh.ACCOUNT_REVERT,
                                                body: { token: s, password: x },
                                                trackedActionData: { event: u.NetworkActionNames.ACCOUNT_REVERT },
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
                                                            Q.intl.formatToPlainString(Q.t.aTVNes, {
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
                                                    F._.dispatch(b.jej.WAVE_EMPHASIZE);
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
                    className: K.UD,
                    children: (0, a.jsx)(V.$, {
                        text: Q.intl.string(Q.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: function () {
                            f(""), i(H.START);
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
        children: (0, a.jsx)(U.E, { variant: "text-sm/medium", color: "text-default", children: t }),
    });
}
function Z(e) {
    let { setSlide: t, transitionTo: i } = e;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(k._V, { src: n(79418), className: B()(z.SX, z.Ot) }),
            (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t["8UcxI6"]) }),
            (0, a.jsx)(U.E, { variant: "text-md/normal", children: Q.intl.string(Q.t.O37hMl) }),
            (0, a.jsxs)(k.eB, {
                className: B()(z.SX, z.QX),
                children: [
                    (0, a.jsx)(U.E, { variant: "text-sm/normal" }),
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
                    (0, a.jsx)(V.$, { text: Q.intl.string(Q.t.GgCRqR), onClick: () => t(H.PASSWORD) }),
                    (0, a.jsx)(V.$, {
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
            (0, a.jsx)(k._V, { src: n(79418), className: B()(z.SX, z.Ot) }),
            (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.ailkVG) }),
            (0, a.jsx)(k.tK, { children: Q.intl.format(Q.t["4ZMVCI"], { email: t }) }),
            (0, a.jsx)(U.E, {
                className: B()(z.QB, z.QX),
                variant: "text-md/normal",
                children: Q.intl.string(Q.t["dpAn+8"]),
            }),
        ],
    });
}
function ee(e) {
    let { transitionTo: t, token: n, width: i } = e,
        [l, s] = o.useState(H.START),
        [r, c] = o.useState(null),
        [d, h] = o.useState(""),
        m = { impression_group: u.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, a.jsx)("div", {
        style: { margin: "8px" },
        children: (0, a.jsxs)(w.t, {
            activeSlide: l,
            width: i,
            onSlideReady: c,
            children: [
                (0, a.jsx)(w.q, {
                    id: H.START,
                    impressionProperties: m,
                    impressionName: u.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, a.jsx)(Z, { setSlide: s, transitionTo: t }),
                }),
                (0, a.jsx)(w.q, {
                    id: H.PASSWORD,
                    impressionProperties: m,
                    impressionName: u.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
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
                    impressionName: u.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, a.jsx)(J, { email: d }),
                }),
            ],
        }),
    });
}
m.Ay.initialize();
class et extends o.PureComponent {
    static defaultProps = { transitionTo: G.pX, replaceWith: G.bG };
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
async function ec(e) {
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
var eu = n(123292),
    ed = n(650048),
    eh = n(860689),
    em = n(396681);
m.Ay.initialize();
class eg extends o.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, guild: null };
    componentDidMount() {
        let e = (0, em.A)(this.props.location),
            t = (0, c.parse)(this.props.location.search);
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
                (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t.Z33eiP) }),
                (0, a.jsx)(k.tK, { children: Q.intl.format(Q.t.NRWtfC, { guildName: n.name }) }),
                (0, a.jsx)("div", {
                    className: z.eT,
                    children: (0, a.jsx)(V.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, a.jsx)("div", {
                    className: z.Ot,
                    children: (0, a.jsx)(eu.Q, {
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
                    children: (0, a.jsx)(V.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let ex = m.Ay.connectStores([ed.A], () => ({ defaultRoute: ed.A.defaultRoute }))(eg);
var ef = n(628284),
    ep = n(557722),
    eA = n(628387),
    eE = n(148864),
    e_ = n(354948);
n(53516);
var ej = n(653307);
let eN = ["loopback-network", "local-network-access"];
async function eI() {
    if ("u" < typeof navigator || null == navigator.permissions) return "unknown";
    for (let e of eN)
        try {
            return (await navigator.permissions.query({ name: e })).state;
        } catch {}
    return "unknown";
}
var ev = n(736056),
    eC = n(620233),
    eS = n(122906),
    ey = n(121623),
    eT = n(31008);
function eb(e) {
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
var eR = n(154672),
    eO = n(331322),
    eL = n(534514),
    ek = n(289873),
    eG = n(794347);
function eP(e) {
    let { title: t, subtitle: n, buttonText: i, image: l, onButtonClick: s, loading: r } = e;
    return (0, a.jsx)(k.Ay, {
        className: eG.kL,
        children: (0, a.jsxs)(eO.B, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, a.jsxs)(eO.B, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, a.jsxs)(eO.B, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != l &&
                                    (0, a.jsx)(eO.B, {
                                        align: "center",
                                        justify: "center",
                                        className: eG.Sl,
                                        children: l,
                                    }),
                                r && (0, a.jsx)(ek.y, { type: ek.y.Type.SPINNING_CIRCLE }),
                                (0, a.jsx)(eL.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, a.jsx)(U.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                className: eG.VA,
                                children: n,
                            }),
                    ],
                }),
                !r && (0, a.jsx)(V.$, { onClick: s, text: i, variant: "overlay-primary" }),
            ],
        }),
    });
}
let ew = !1,
    eD = null,
    eB = null;
class eU extends m.Ay.Store {
    static displayName = "HubEmailVerificationStore";
    getState() {
        return { verifySuccess: ew, verifyErrors: eD, redirectGuildId: eB };
    }
}
let eV = new eU(g.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        (ew = !0), (eD = null), (eB = t);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        (ew = !1), (eD = t);
    },
});
var eM = n(284009),
    eF = n.n(eM),
    eW = n(481613),
    eH = n.n(eW),
    eQ = n(400253),
    eK = n(742821),
    ez = n(80703),
    eX = n(280450),
    eq = n(877062);
m.Ay.initialize();
var eY = n(842241),
    e$ = n(580929),
    eZ = n(280513),
    eJ = n(717421),
    e0 = n(661531),
    e1 = n(993077),
    e2 = n(235986),
    e3 = n(592743);
function e7(e) {
    let { text: t, buttonCta: i, onClick: l } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(k._V, { src: n(431979) }),
            (0, a.jsx)(k.hE, { className: B()(z.QX, z.QB, ej.tR), children: Q.intl.string(Q.t.eL5z0i) }),
            (0, a.jsx)(k.tK, { className: z.C2, children: Q.intl.string(Q.t.poAv63) }),
            (0, a.jsxs)(e1.Z, {
                className: e3.Nr,
                type: e1.Z.Types.CUSTOM,
                children: [
                    (0, a.jsx)("img", { alt: "", className: e3.q8, src: n(355912) }),
                    (0, a.jsx)("img", { alt: "", className: e3.dw, src: n(610925) }),
                    (0, a.jsxs)(e2.A, {
                        className: e3.p_,
                        direction: e2.A.Direction.VERTICAL,
                        align: e2.A.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, a.jsx)(U.E, {
                                tag: "strong",
                                className: e3.p8,
                                variant: "text-md/normal",
                                style: { color: e0.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, a.jsx)("div", {
                                className: e3.x6,
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
var e8 = n(765671),
    e5 = n(9994),
    e6 = n(71393),
    e9 = n(299091),
    te = n(486020),
    tt = n(403362),
    tn = n(778712),
    ti = n(47167),
    tl = n(769015),
    ts = n(714991),
    tr = n(427262),
    ta = n(172799),
    to = n(330936),
    tc = n(82210);
function tu(e) {
    let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
    return 0 === t.memberCount ? null : t;
}
function td(e) {
    return e.target_type === ta.yV.STREAM && null != e.target_user;
}
function th(e) {
    return e.channel?.type === b.rbe.GROUP_DM;
}
function tm(e) {
    return null == e.channel && null == e.guild && null != e.inviter;
}
function tg(e) {
    return e.state === b.elq.ACCEPTED;
}
function tx(e) {
    let { guild_scheduled_event: t } = e;
    return null != t;
}
function tf(e) {
    let t;
    return !tx(e) && (!!tm(e) || (null != e.inviter && !tg(e) && ((t = tu(e)), !((t?.memberCount ?? 0) > 100))));
}
function tp(e) {
    let { guild: t, user: n, application: i } = e;
    return null != i
        ? (0, a.jsx)(tl.A, { className: tc.Z2, game: i, size: tc.q6 })
        : null != n
          ? (0, a.jsx)(k.eu, { src: n.getAvatarURL(void 0, 100), size: tn._3.DEPRECATED_SIZE_100, className: tc.my })
          : null != t
            ? (0, a.jsx)(k.$v, { guild: t, size: k.$v.Sizes.LARGER, className: tc.$f, animate: !0 })
            : null;
}
function tA(e) {
    let { invite: t, textClassName: n, className: i } = e,
        l = tu(t);
    return null == l || tf(t) || t?.guild?.id === to.TA
        ? null
        : (0, a.jsx)(k.R1, {
              className: B()(tc.He, i),
              online: l.onlineCount,
              total: l.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function tE(e) {
    let { invite: t, showBigUserIcon: n } = e,
        i = o.useMemo(
            () =>
                n
                    ? null
                    : td(t) && null != t.target_user
                      ? te.Ay.getUserAvatarURL(t.target_user)
                      : tf(t) && null != t.inviter
                        ? te.Ay.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        l = Q.intl.string(Q.t["3rE1P8"]);
    return (
        th(t)
            ? (l =
                  t.channel?.name != null && t.inviter?.username != null
                      ? Q.intl.format(Q.t.Lu4h18, { username: t.inviter.username })
                      : Q.intl.string(Q.t.OsdY8B))
            : td(t) && null != t.target_user
              ? (l = Q.intl.formatToPlainString(Q.t.x2L32Q, { username: t.target_user.username }))
              : tg(t)
                ? (l = Q.intl.string(Q.t["FDsl+J"]))
                : tf(t) &&
                  null != t.inviter &&
                  (l = Q.intl.format(Q.t.spU2mI, { username: tr.Ay.getFormattedName(t.inviter) })),
        (0, a.jsxs)("div", {
            className: tc.JB,
            children: [
                null != i &&
                    (0, a.jsx)("div", {
                        className: tc._t,
                        children: (0, a.jsx)(k.eu, { src: i, size: tn._3.SIZE_24 }),
                    }),
                (0, a.jsx)(k.tK, { className: tc.__invalid_inviteJoinSubTitle, children: l }),
            ],
        })
    );
}
function t_(e) {
    let t,
        n,
        i,
        { user: l, guild: s, channel: r, application: o, showBigUserIcon: c } = e,
        u = (0, ti.Ay)(r);
    if (null != s)
        c && null == o && (t = (0, a.jsx)(k.$v, { guild: s, size: k.$v.Sizes.SMALL })),
            (n = s.name),
            null != o &&
                ((n = o.name),
                (i = (0, a.jsxs)("div", {
                    className: tc.JB,
                    children: [
                        (0, a.jsx)(k.tK, { className: tc.R9, children: Q.intl.string(Q.t["3gg9fF"]) }),
                        (0, a.jsxs)("div", {
                            className: tc.bo,
                            children: [
                                (0, a.jsx)(k.$v, { guild: s, size: k.$v.Sizes.SMALL }),
                                (0, a.jsx)(eL.D, {
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
        let e = tr.Ay.getFormattedName(l);
        null != u && "" !== u
            ? ((n = u), null != r.icon && (t = (0, a.jsx)(k.F4, { channel: r, size: tn._3.SIZE_32 })))
            : (n = e);
    } else if (null != l) {
        let e = tr.Ay.getFormattedName(l);
        (n = Q.intl.formatToPlainString(Q.t["4aF92R"], { username: e })),
            (i = (0, a.jsx)(k.tK, { className: tc.b$, children: Q.intl.format(Q.t.Quj7HX, { username: e }) }));
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(k.hE, {
                className: tc.DD,
                children: [
                    null != s ? (0, a.jsx)(ts.A, { guild: s, className: tc.n2, tooltipPosition: "left" }) : null,
                    t,
                    n,
                ],
            }),
            i,
        ],
    });
}
var tj = n(395671),
    tN = n(95701),
    tI = n(889227),
    tv = n(548118),
    tC = n(557582),
    tS = n(167630),
    ty = n(367048);
function tT(e) {
    let { guildScheduledEvent: t, channel: n, onAcceptInvite: i, isSubmitting: l } = e;
    return (0, a.jsxs)("div", {
        className: ty.s4,
        children: [
            (0, a.jsx)(tC.Ay, {
                name: t.name,
                description: t.description ?? void 0,
                headerVariant: "heading-md/medium",
                descriptionClassName: ty.__invalid_channelDescription,
                guildId: t.guild_id,
                guildEvent: t,
                eventPreview: t,
            }),
            null != n &&
                (0, a.jsx)("div", {
                    className: ty.yW,
                    children: (0, a.jsx)(tS.A, { guildScheduledEvent: t, channel: n }),
                }),
            (0, a.jsx)("div", {
                className: ty.xG,
                children: (0, a.jsx)(V.$, {
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
        n = null != t.guild ? (0, eh.DY)(t.guild) : null;
    if (null == n) return null;
    let i = n.description ?? "";
    return (0, a.jsxs)("div", {
        className: ty.kQ,
        children: [
            (0, a.jsx)(eL.D, { className: ty.s7, variant: "text-sm/medium", children: Q.intl.string(Q.t.Eabu1z) }),
            (0, a.jsxs)("div", {
                className: ty.bo,
                children: [
                    (0, a.jsx)(tv.Ay, { guild: n, active: !0, size: tv.Ay.Sizes.MEDIUM }),
                    (0, a.jsxs)("div", {
                        className: ty.bW,
                        children: [
                            (0, a.jsxs)(U.E, {
                                className: ty.J5,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, a.jsx)(ts.A, { guild: n, className: ty.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, a.jsx)(tA, { invite: t, textClassName: ty.kS, className: ty.pe }),
                        ],
                    }),
                ],
            }),
            i.length > 0 &&
                (0, a.jsx)("details", {
                    className: ty.x_,
                    children: (0, a.jsx)(U.E, { color: "text-default", variant: "text-sm/normal", children: i }),
                }),
        ],
    });
}
function tR(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: l } = e,
        { guild_scheduled_event: s } = t;
    return null != s
        ? (0, a.jsx)(tT, { guildScheduledEvent: s, channel: n, isSubmitting: i, onAcceptInvite: l })
        : null;
}
var tO = n(467661);
function tL(e) {
    let { invite: t, onAcceptInvite: n, disableUser: i = !1 } = e;
    if (null == t) return null;
    let l = null != t.guild ? (0, eh.DY)(t.guild) : null,
        s = null != t.channel ? (0, tN.OY)(t.channel) : null,
        r = null != t.target_application ? new tj.Ay(t.target_application) : null,
        o = i || null == t.inviter ? null : new tI.A(t.inviter),
        c =
            !(
                (null != t.approximate_member_count && t.approximate_member_count > 100) ||
                (null != l && l.features.has(b.GuildFeatures.COMMUNITY))
            ) &&
            null != o &&
            th(t),
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
        d = { invite: t, user: o, guild: l, channel: s, application: r };
    return tx(t)
        ? (0, a.jsx)(tR, { invite: t, channel: s, isSubmitting: u, onAcceptInvite: n })
        : (0, a.jsxs)("div", {
              className: tO.kL,
              children: [
                  (0, a.jsx)(tp, { application: r, guild: l, user: c || tm(t) ? o : null }),
                  tm(t) ? null : (0, a.jsx)(tE, { ...d, showBigUserIcon: c }),
                  (0, a.jsx)(t_, { ...d, showBigUserIcon: c }),
                  (0, a.jsx)(tA, { ...d }),
                  (0, a.jsx)("div", {
                      className: tO.xG,
                      children: (0, a.jsx)(V.$, {
                          variant: "primary",
                          size: "md",
                          text: Q.intl.string(Q.t.ohMvm1),
                          onClick: n,
                          loading: u,
                          fullWidth: !0,
                      }),
                  }),
              ],
          });
}
var tk = n(781696),
    tG = n(997590),
    tP = n(107773),
    tw = n(107123),
    tD = n(86376),
    tB = n(534400),
    tU = n(773669),
    tV = n(935208),
    tM = n(963120);
function tF(e) {
    let { guild: t, invite: n, discoveryGuild: i, showGuildTag: l = !1, highContrast: s = !1, hideEnglish: r = !1 } = e,
        c = n.approximate_presence_count ?? 0,
        u = n.approximate_member_count ?? 0,
        d = (0, m.bG)([tU.default], () => tU.default.locale),
        h = (0, tw.P)(tV.default.extractTimestamp(t.id), d),
        g = (0, m.bG)([tG.A], () =>
            i?.primary_category_id != null ? tG.A.getCategoryName(i.primary_category_id) : null,
        ),
        x = t.premiumTier ?? b.TVA.NONE,
        f = x !== b.TVA.NONE,
        p = t.preferredLocale ?? i?.preferred_locale ?? null,
        A = o.useMemo(() => {
            if ("en-US" === p) return Q.intl.string(Q.t.LQLMGP);
            let e = (0, Q.getAvailableLocales)().find((e) => e.value === p);
            return null != e ? Q.intl.string(e.localizedName) : p;
        }, [p]),
        E = ["en-US", "en-GB"].includes(p ?? ""),
        _ = null != p && "" !== p && !(r && E),
        j = null != g,
        N = _ || j || f,
        I = j || f,
        v = (0, m.bG)([e9.A], () => e9.A.getInvite(n.code));
    if (null == v) return null;
    let C = (0, e5.oO)(v),
        S = s ? "text-default" : "text-subtle";
    return (0, a.jsxs)("div", {
        className: tM.hn,
        children: [
            (0, a.jsxs)("div", {
                className: tM.S7,
                children: [
                    (0, a.jsx)(U.E, {
                        tag: "span",
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: t.name,
                    }),
                    (0, a.jsx)(tP.A, {
                        guild: t,
                        tooltipPosition: "bottom",
                        size: 18,
                        tooltipColor: tk.ST.Colors.PRIMARY,
                    }),
                    l &&
                        C?.tag != null &&
                        C?.badgeHash != null &&
                        (0, a.jsx)(tB.o9, {
                            guildId: t.id,
                            guildTag: C?.tag ?? void 0,
                            guildBadge: C.badgeHash,
                            inline: !1,
                        }),
                ],
            }),
            (0, a.jsx)(tD.X, { onlineCount: c, memberCount: u, className: tM.He, highContrast: s }),
            (0, a.jsxs)("div", {
                className: tM.ov,
                children: [
                    null != h &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(U.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: S,
                                    children: Q.intl.format(Q.t.zb2Q56, { createdAtDate: h }),
                                }),
                                N && (0, a.jsx)("span", { className: tM.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    _ &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(U.E, { tag: "span", variant: "text-sm/normal", color: S, children: A }),
                                I && (0, a.jsx)("span", { className: tM.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    j &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(U.E, { tag: "span", variant: "text-sm/normal", color: S, children: g }),
                                f && (0, a.jsx)("span", { className: tM.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    f &&
                        (0, a.jsx)(U.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: S,
                            children: Q.intl.format(Q.t.hmdOwf, { tier: x }),
                        }),
                ],
            }),
        ],
    });
}
var tW = n(241524),
    tH = n(573435),
    tQ = n(260509);
function tK(e) {
    let { guild: t, outline: n } = e,
        i = (0, tW.A)("(max-width: 600px), (max-height: 600px)") ? tv.DN.LARGER : tv.DN.XLARGE,
        l = tv.iu[i],
        s = tv.s[i],
        r = o.useMemo(() => te.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: l }), [t.icon, t.id, l]),
        c = (0, tQ.Rb)(t),
        u =
            null != r
                ? (0, a.jsx)("img", { src: r, alt: "", className: tM.OV })
                : (0, a.jsx)("div", {
                      className: tM.ef,
                      style: { fontSize: s[c.length] ?? s[s.length - 1] },
                      children: c,
                  });
    return n
        ? (0, a.jsx)("div", {
              className: B()(tM._C, tM.AY),
              children: (0, a.jsx)(tH.Ay, {
                  mask: tH.Ay.Masks.SQUIRCLE,
                  width: l + 8,
                  height: l + 8,
                  children: (0, a.jsx)("div", {
                      className: tM.$d,
                      children: (0, a.jsx)(tH.Ay, { mask: tH.Ay.Masks.SQUIRCLE, width: l, height: l, children: u }),
                  }),
              }),
          })
        : (0, a.jsx)("div", {
              className: tM._C,
              children: (0, a.jsx)(tH.Ay, { mask: tH.Ay.Masks.SQUIRCLE, width: l, height: l, children: u }),
          });
}
var tz = n(115703),
    tX = n(180419),
    tq = n(888849);
function tY(e) {
    let { invite: t, guild: n, profile: i, onAcceptInvite: l } = e,
        { gamesToDisplay: s, lastGameToDisplay: r, remainingGames: o } = (0, tz.A)(i),
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
        u = i.description ?? n.description;
    return (0, a.jsxs)("div", {
        className: tq.f_,
        children: [
            (0, a.jsxs)("div", {
                className: tq.qQ,
                children: [
                    (0, a.jsx)("div", {
                        className: tq.WT,
                        children: (0, a.jsx)("div", { className: tq.g_, "aria-hidden": !0 }),
                    }),
                    (0, a.jsxs)("div", {
                        className: tq.TS,
                        children: [
                            (0, a.jsx)(tK, { guild: n, outline: !0 }),
                            (0, a.jsxs)(eO.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, a.jsx)(tF, {
                                        guild: n,
                                        invite: t,
                                        showGuildTag: !0,
                                        highContrast: !0,
                                        hideEnglish: !0,
                                    }),
                                    null != u &&
                                        "" !== u &&
                                        (0, a.jsx)(U.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: u,
                                        }),
                                    (0, a.jsx)(tX.A, {
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
                className: tq.Fx,
                children: (0, a.jsx)(V.$, {
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
let t$ = (0, n(945810).mj)({
        name: "2026-03-mobile-web-invite-server-profile",
        kind: "installation",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    tZ = n(843020);
function tJ(e) {
    if (null == e || !eZ.i.VISIBLE.has(e.visibility)) return !1;
    let t = null != e.description && e.description.length > 0,
        n = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
    return t || n;
}
function t0() {
    return (0, a.jsx)("div", { className: tq.$k, children: (0, a.jsx)(ek.y, {}) });
}
function t1(e) {
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
            (0, tt.xb)(n);
    }
}
function t2(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === b.elq.BANNED
        ? (0, a.jsx)(e7, { text: Q.intl.string(Q.t["5AkWAd"]), buttonCta: Q.intl.string(Q.t["8osdkn"]), onClick: n })
        : (0, a.jsx)(e7, { text: Q.intl.string(Q.t["usP+Mb"]), buttonCta: Q.intl.string(Q.t["8osdkn"]), onClick: n });
}
function t3(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: i, sectionClassName: l, inviteCardClassName: s = tq.qF } = e,
        { ref: r, height: o } = (0, e8.Ay)(),
        c = (0, eJ.z)({ height: null != o && 0 !== o ? `${o}px` : `${i}px`, config: e$.config.stiff });
    return (0, a.jsxs)(e$.animated.div, {
        className: s,
        style: c,
        children: [
            (0, a.jsx)(e$.animated.div, {
                className: tq.NS,
                style: c,
                children: (0, a.jsx)("section", { ref: r, className: l, children: t }),
            }),
            n,
        ],
    });
}
function t7(e) {
    let { invite: t } = e;
    if (null == t || !tx(t)) return null;
    let n = t1(t);
    return (0, a.jsx)(t3, {
        startAnimHeightPx: 0,
        sectionClassName: tq.ui,
        children: 1 === n ? (0, a.jsx)(tb, { invite: t }) : null,
    });
}
let t4 = { 1: tq._r, 2: tq.Gm, 0: tq.Kt };
function t8(e) {
    let t,
        { invite: n } = e,
        i = t1(n),
        { enabled: l } = t$.useConfig({ location: "AcceptInviteMobile" }),
        s = null != n ? (0, e5.oO)(n) : null,
        r = n?.guild != null ? (0, eh.DY)(n.guild) : null,
        c = null != r && tJ(s) && null != n && !tx(n),
        u = l && c;
    o.useEffect(() => {
        c && t$.getConfig({ location: "AcceptInviteMobile.hasProfile" });
    }, [c]);
    let d = o.useRef(!1);
    if (
        (o.useEffect(() => {
            d.current ||
                (null != n &&
                    1 === i &&
                    ((d.current = !0),
                    y.default.track(b.HAw.INVITE_ACCEPT_BUTTON_RENDERED, {
                        invite_code: n.code,
                        guild_id: n.guild?.id,
                        duration_ms_since_page_load: Math.round(performance.now()),
                    })));
        }, [n, i]),
        null == n)
    )
        t = (0, a.jsx)(t0, {});
    else
        switch (i) {
            case 1:
                t = u
                    ? (0, a.jsx)(tY, { invite: n, guild: r, profile: s, onAcceptInvite: e.onAcceptInvite })
                    : (0, a.jsx)(tL, { ...e, invite: n });
                break;
            case 2:
                t = (0, a.jsx)(t2, { ...e, invite: n });
                break;
            default:
                t = (0, a.jsx)(t0, {});
        }
    let h = 1 === i && u ? tq.c4 : tq.qF;
    return (0, a.jsx)(t3, { startAnimHeightPx: 200, sectionClassName: t4[i], inviteCardClassName: h, children: t });
}
function t5(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = t ?? {},
        l = {},
        { enabled: s } = t$.useConfig({ location: "AcceptInviteMobile" }),
        r = null != t ? (0, e5.oO)(t) : null,
        o = null != i && tJ(r) && null != t && !tx(t);
    if (i?.splash != null) {
        let e = te.Ay.getGuildSplashURL({ id: i.id, splash: i.splash });
        null != e && ((l.backgroundImage = `url(${e})`), (l.backgroundSize = "cover"));
    } else s && o && ((l.backgroundImage = `url(${tZ})`), (l.backgroundSize = "cover"));
    return (0, a.jsxs)(k.Ay, {
        theme: b.NJ8.DARK,
        className: tq.G3,
        style: l,
        contentClassName: tq.__,
        children: [(0, a.jsx)(t8, { ...e, onAcceptInvite: n }), (0, a.jsx)(t7, { ...e })],
    });
}
var t6 = n(723702);
function t9(e) {
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
var ne = n(611346),
    nt = n(604880);
function nn(e) {
    let { token: t, hasError: n, errorReason: i } = e;
    return n
        ? (0, a.jsxs)("div", {
              className: ne.MY,
              children: [
                  (0, a.jsx)("div", { className: ne.r$, children: (0, a.jsx)("img", { src: nt, alt: "" }) }),
                  (0, a.jsxs)("div", {
                      className: ne.Qs,
                      children: [
                          (0, a.jsx)(t9, { alt: "" }),
                          (0, a.jsx)(eL.D, {
                              variant: "heading-lg/semibold",
                              className: ne.ky,
                              children: Q.intl.string(Q.t.RtCSr1),
                          }),
                          (0, a.jsx)(U.E, {
                              variant: "text-md/normal",
                              className: ne.G3,
                              children: Q.intl.string(Q.t["S+YjYJ"]),
                          }),
                          (0, a.jsx)(V.$, {
                              variant: "primary",
                              text: Q.intl.string(Q.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  y.default.track(b.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: i }),
                                      (0, G.pX)(b.BVt.LOGIN);
                              },
                          }),
                      ],
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: ne.MY,
              children: [
                  (0, a.jsx)("div", { className: ne.r$, children: (0, a.jsx)("img", { src: nt, alt: "" }) }),
                  (0, a.jsxs)("div", {
                      className: ne.Qs,
                      children: [
                          (0, a.jsx)(t9, { alt: "" }),
                          (0, a.jsx)(eL.D, {
                              variant: "heading-lg/semibold",
                              className: ne.ky,
                              children: Q.intl.string(Q.t["9h/0Rl"]),
                          }),
                          (0, a.jsx)(U.E, {
                              variant: "text-md/normal",
                              className: ne.G3,
                              children: Q.intl.string(Q.t.Wgm7Om),
                          }),
                          (0, a.jsx)(V.$, {
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
                                      y.default.track(b.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                                          detection_type: "mobile_button_clicked",
                                          device_type: d.Fr ? "mobile" : "tablet",
                                          platform: y.default.getSuperProperties()?.os,
                                      }),
                                      null != n &&
                                          y.default.track(b.HAw.DEEP_LINK_CLICKED, {
                                              fingerprint: (0, ez.v)(n.fingerprint),
                                              attempt_id: n.attemptId,
                                              source: n.utmSource,
                                          }),
                                      eq.A.launch(e, (e) => {
                                          e || (0, G.bG)({ pathname: b.BVt.LOGIN });
                                      });
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var ni = n(613057);
function nl(e) {
    let { title: t, subtitle: n, buttonText: i, buttonOnClick: l } = e;
    return (0, a.jsx)(k.Ay, {
        children: (0, a.jsxs)(eO.B, {
            gap: 24,
            children: [
                (0, a.jsxs)(eO.B, {
                    gap: 8,
                    children: [(0, a.jsx)(k.hE, { children: t }), (0, a.jsx)(k.tK, { children: n })],
                }),
                (0, a.jsx)(V.$, { onClick: l, text: i, fullWidth: !0 }),
            ],
        }),
    });
}
var ns = n(463347),
    nr = n(189213),
    na = n(192308),
    no = n(347704),
    nc = n(803306),
    nu = n(17372),
    nd = n(369053),
    nh = n(975571),
    nm = n(928658);
async function ng(e, t) {
    try {
        await (0, nd.TP)(e, t);
    } catch (e) {
        if (null != e && "object" == typeof e && 429 === e.status)
            throw { status: 429, body: { message: Q.intl.string(Q.t.Z2hIUf) } };
        throw e;
    }
}
function nx(e, t) {
    let i = !1;
    function l() {
        i || t?.();
    }
    let s = (s) => {
        function r() {
            return ng(e, s);
        }
        async function o(t) {
            return await (0, nd.G_)(e, s, t);
        }
        (i = !0),
            setTimeout(() => {
                i = !1;
            }, 0);
        let c = (n) => {
            (i = !0),
                setTimeout(() => {
                    i = !1;
                }, 0);
            let l = n?.token;
            switch (e) {
                case nu.tY.MESSAGE:
                    (0, nm.bM)(l, t);
                    break;
                case nu.tY.USER:
                    (0, nm.nQ)(l, t);
                    break;
                case nu.tY.GUILD:
                    (0, nm.V3)(l, t);
                    break;
                case nu.tY.MEDIA_TAKEDOWN:
                    (0, nm._Y)(l, t);
            }
        };
        (0, na.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("32606"), n.e("19840")]).then(n.bind(n, 79779));
                return (t) =>
                    (0, a.jsx)(e, {
                        ...t,
                        onFormSubmit: o,
                        onResend: r,
                        onSuccess: c,
                        headerText: Q.intl.string(Q.t.H3Q7U8),
                        confirmButtonText: Q.intl.string(Q.t["13ofGu"]),
                        impression: { impressionName: u.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                    });
            },
            { onCloseCallback: l, dismissable: !1 },
        );
    };
    return function () {
        function t(t) {
            return ng(e, t);
        }
        (0, na.closeAllModals)(),
            (0, na.openModalLazy)(
                async () => {
                    let { default: i } = await n.e("29232").then(n.bind(n, 180275));
                    return (n) =>
                        (0, a.jsx)(i, {
                            ...n,
                            onFormSubmit: t,
                            onSuccess: s,
                            headerText: Q.intl.string(Q.t.ZLRYGU),
                            confirmButtonText: Q.intl.string(Q.t.PDTjLN),
                            subtitle: e === nu.tY.MEDIA_TAKEDOWN ? Q.intl.string(Q.t.jt3z8f) : void 0,
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            );
    };
}
var nf = n(939249),
    np = n(921853),
    nA = n(750997);
let nE = { [nu.tY.MESSAGE]: Q.t.fuqnBC, [nu.tY.USER]: Q.t.F4jrRW, [nu.tY.GUILD]: Q.t.gH3aMs },
    n_ = (e) => {
        let { title: t, menuType: n, onReopen: i } = e,
            l = o.useCallback(() => {
                nx(n, i)();
            }, [n, i]);
        return (0, a.jsxs)(nf.D, {
            className: nA.b0,
            onClick: l,
            children: [
                (0, a.jsx)(U.E, { variant: "text-md/medium", children: t }),
                (0, a.jsx)(np.n, { size: "sm", style: { transform: "rotate(180deg)" } }),
            ],
        });
    },
    nj = (e) => {
        let { dsaCapabilities: t, onReopen: n } = e;
        return (0, a.jsx)(eO.B, {
            gap: 16,
            children: (0, a.jsx)("div", {
                className: nA.kL,
                children: t.map((e) =>
                    e === nu.tY.MEDIA_TAKEDOWN || null == nE[e]
                        ? null
                        : (0, a.jsx)(n_, { title: Q.intl.string(nE[e]), menuType: e, onReopen: n }, e),
                ),
            }),
        });
    };
var nN = n(881636),
    nI = n(913951);
let nv = () => {
    let { goToStep: e } = (0, no.n)(),
        t = o.useCallback(() => {
            e(nT.DSA);
        }, [e]),
        n = o.useCallback(() => {
            e(nT.TIDA);
        }, [e]);
    return (0, a.jsxs)(eO.B, {
        gap: 8,
        children: [
            (0, a.jsx)(U.E, { variant: "text-md/normal", children: Q.intl.string(Q.t.bd1h5T) }),
            (0, a.jsxs)("div", {
                className: nI.k,
                children: [
                    (0, a.jsxs)(nf.D, {
                        className: nI.b,
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
                            (0, a.jsx)(nN.u, { size: "sm" }),
                        ],
                    }),
                    (0, a.jsxs)(nf.D, {
                        className: nI.b,
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
                            (0, a.jsx)(nN.u, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var nC = n(229503);
let nS = () =>
    (0, a.jsxs)(eO.B, {
        gap: 24,
        children: [
            (0, a.jsx)(U.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: Q.intl.string(Q.t["3zG2Y9"]),
            }),
            (0, a.jsxs)(eO.B, {
                gap: 16,
                children: [
                    (0, a.jsxs)(eO.B, {
                        gap: 8,
                        children: [
                            (0, a.jsx)(U.E, { variant: "text-md/semibold", children: Q.intl.string(Q.t.CfBo0z) }),
                            (0, a.jsxs)("ul", {
                                className: nC.T,
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
            (0, a.jsxs)(eO.B, {
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
var ny = n(725925);
m.Ay.initialize();
var nT = (((s = {}).SELECTION = "selection"), (s.DSA = "dsa"), (s.TIDA = "tida"), s);
let nb = (e) => {
        let { transitionState: t, onClose: n } = e,
            [i, l] = o.useState(!0),
            [s, r] = o.useState([]),
            [c, u] = o.useState(null),
            d = (0, m.bG)([eX.default], () => eX.default.isAuthenticated()),
            h = (0, m.bG)([ev.A], () => ev.A.hasLoadedExperiments),
            g = o.useCallback(() => {
                (0, nd.OY)()
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
                  nc
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => g())
                      .catch(() => l(!1)))
                : g();
        }, [d, g]),
            o.useEffect(() => {
                !(async function () {
                    h || (await x.A.getLocationMetadata(), x.A.getExperiments());
                })();
            }, [h]);
        let f = s.filter((e) => e !== nu.tY.MEDIA_TAKEDOWN),
            p = s.includes(nu.tY.MEDIA_TAKEDOWN),
            A = f.length > 0,
            E = A && p,
            _ = i || !h;
        o.useEffect(() => {
            _ || A || p || n();
        }, [_, A, p, n]);
        let j = o.useCallback(() => {
                (0, na.openModalLazy)(() => Promise.resolve((e) => (0, a.jsx)(nb, { ...e })), { dismissable: !1 });
            }, []),
            N = o.useCallback((e, t) => {
                "selection" !== t && "selection" !== e ? u("selection") : u(e);
            }, []),
            I = o.useMemo(() => nx(nu.tY.MEDIA_TAKEDOWN, j), [j]),
            v = c ?? (E ? "selection" : A ? "dsa" : "tida");
        if (_ || (!A && !p))
            return (0, a.jsx)(nr.Modal, {
                title: "",
                actions: [],
                transitionState: t,
                onClose: n,
                dismissable: !1,
                children: (0, a.jsx)(eO.B, {
                    gap: 16,
                    align: "center",
                    justify: "center",
                    style: { minHeight: "200px" },
                    children: (0, a.jsx)(ek.y, {}),
                }),
            });
        if (!E) {
            if (A)
                return (0, a.jsx)(nr.Modal, {
                    title: Q.intl.string(Q.t.Z11w18),
                    subtitle: Q.intl.format(Q.t["532l+q"], {
                        supportURL: nh.A.getArticleURL(b.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, a.jsx)(nj, { dsaCapabilities: f, onReopen: j }),
                });
            if (p)
                return (0, a.jsx)(nr.Modal, {
                    title: Q.intl.string(Q.t.YignUm),
                    actions: [{ text: Q.intl.string(Q.t.D5Czbu), variant: "primary", onClick: I }],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, a.jsx)(nS, {}),
                });
        }
        let C = [
            { stepKey: "selection", modalProps: { title: Q.intl.string(Q.t.Z11w18) }, body: (0, a.jsx)(nv, {}) },
            {
                stepKey: "dsa",
                modalProps: {
                    title: Q.intl.string(Q.t.Z11w18),
                    subtitle: Q.intl.format(Q.t["532l+q"], {
                        supportURL: nh.A.getArticleURL(b.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, a.jsx)(nj, { dsaCapabilities: f, onReopen: j }),
            },
            {
                stepKey: "tida",
                modalProps: { title: Q.intl.string(Q.t.YignUm) },
                body: (0, a.jsx)(nS, {}),
                nextButtonProps: { text: Q.intl.string(Q.t.D5Czbu) },
                onNext: () => (I(), !1),
            },
        ];
        return (0, a.jsx)("div", {
            className: { selection: ny.a, dsa: ny.q, tida: void 0 }[v],
            children: (0, a.jsx)(no.t, {
                steps: C,
                currentStepKey: v,
                onStepChange: N,
                onClose: n,
                transitionState: t,
                dismissable: !1,
            }),
        });
    },
    nR = () => (
        o.useEffect(() => {
            (0, na.openModalLazy)(() => Promise.resolve((e) => (0, a.jsx)(nb, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
var nO = n(30793),
    nL = n(970928),
    nk = n(612181),
    nG = n(179689);
let nP = {
    dump(e) {
        let t;
        null != performance.memory &&
            (t = {
                jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                totalJSHeapSize: performance.memory.totalJSHeapSize,
                usedJSHeapSize: performance.memory.usedJSHeapSize,
            }),
            e({
                browser: { name: eH().name, version: eH().version },
                os: { name: eH().os.family, version: eH().os.version },
                memory: t,
            });
    },
    getTimeSinceNavigationStart: () => Date.now() - nG.fL,
};
var nw = n(111956),
    nD = n.n(nw),
    nB = n(615300),
    nU = n(319060),
    nV = n(844222),
    nM = n(240248),
    nF = n(115617);
let nW = (0, nM.xI)(nU.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    nH = { friction: 10, tension: 130 },
    nQ = function (e) {
        return class extends o.Component {
            timeout;
            anim = new nB.A.Value(0);
            state = { shouldAnimate: !d.Fr };
            componentDidMount() {
                d.Fr || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize());
            }
            handleResize = () => {
                let e = window.innerWidth > nW;
                !this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({ shouldAnimate: e });
            };
            handleResizeDebounced = nD()(this.handleResize, 60);
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
                nB.A.spring(this.anim, { toValue: e, ...nH }).start(t);
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
                    className: nF.i,
                    children: (0, a.jsx)(nV.C.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, a.jsx)(nB.A.div, {
                                className: nF.l,
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, a.jsx)(e, { ...this.props }),
                            });
                        },
                    }),
                });
            }
        };
    };
var nK = n(603647),
    nz = n(970672),
    nX = n(129014),
    nq = n(642277);
let nY = function (e) {
    let { match: t, location: n, attemptDeepLink: i } = e,
        [l, s] = o.useState(0);
    o.useEffect(() => {
        nX.default.once("connected", () => {
            s(1);
        }),
            nX.default.once("disconnected", () => {
                (0, G.pX)((0, nq.W)());
            }),
            nX.default.connect();
    }, []),
        o.useEffect(() => {
            if (0 !== l) return;
            let e = setTimeout(() => (0, G.pX)((0, nq.W)()), 3e3);
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
    if ((0, G.MX)()) return null;
    switch (l) {
        case 1:
            return (0, a.jsxs)(k.Ay, {
                children: [
                    (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t.qllnGm) }),
                    (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.SXCxye) }),
                    (0, a.jsx)("div", {
                        className: z.eT,
                        children: (0, a.jsx)(V.$, {
                            text: Q.intl.string(Q.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => r(t, n),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: B()(z.Ot, z.F1),
                        children: (0, a.jsx)(eu.Q, {
                            text: Q.intl.string(Q.t["2ixEBi"]),
                            textVariant: "text-sm/normal",
                            onClick: () => (0, G.pX)((0, nq.W)()),
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
var n$ = n(723923);
m.Ay.initialize();
class nZ extends o.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, em.A)(this.props.location),
            t = (0, c.parse)(this.props.location.search);
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
                    i = new tI.A(n);
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
            l = Q.intl.formatToPlainString(Q.t.YDAohB, { category: t });
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t.f6rdLg) }),
                (0, a.jsx)(k.tK, { children: l }),
                (0, a.jsx)("div", {
                    className: z.QX,
                    children: (0, a.jsx)(V.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => i(n) }),
                }),
                (0, a.jsx)("div", {
                    className: z.Ot,
                    children: (0, a.jsx)(eu.Q, {
                        text: Q.intl.string(Q.t.YYTirT),
                        textVariant: "text-sm/normal",
                        onClick: () => i((0, j.settingsPathToRoute)(I.od.NOTIFICATIONS_EMAILS)),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: i } = this.state;
        if (null != i) {
            let e = n$.px.find((e) => e.category === i);
            if (null != e) return this.renderCategorySuccess(i, e.label());
        }
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: tn._3.DEPRECATED_SIZE_100,
                    className: z.SX,
                }),
                (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t["6U6OMQ"]) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t["yaDJ4/"]) }),
                (0, a.jsx)("div", {
                    className: z.eT,
                    children: (0, a.jsx)(V.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
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
                    children: (0, a.jsx)(V.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let nJ = m.Ay.connectStores([ed.A], () => ({ defaultRoute: ed.A.defaultRoute }))(nZ);
var n0 = n(110782),
    n1 = n(10088),
    n2 = n(871123),
    n3 = n(189081),
    n7 = n(67480),
    n4 = n(45938),
    n8 = n(587895),
    n5 = n(242874),
    n6 = n(75825),
    n9 = n(287809),
    ie = n(97352),
    it = n(615396),
    ii = n(202541),
    il = n(402693);
let is = m.Ay.connectStores([n7.A, n8.A, ie.A, n9.default], (e) => {
    let { giftCode: t } = e,
        n = n7.A.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, it.c9)(i) : null,
        application: n8.A.getApplication(n.applicationId),
        gifter: n9.default.getUser(t.userId),
    };
})(function (e) {
    let { error: t, giftCode: n, gifter: i, sku: l, application: s, subscriptionPlan: r } = e,
        c = null == i ? Q.intl.string(Q.t.lTGZAl) : Q.intl.formatToPlainString(Q.t.TjWdPc, { username: i.username }),
        u = l.name;
    return (
        null != r &&
            (u = Q.intl.formatToPlainString(r.interval === ii.WT.MONTH ? Q.t.CTpcCZ : Q.t["rgPWG/"], {
                skuName: l.name,
                intervalCount: r.intervalCount,
            })),
        (0, a.jsxs)(o.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, a.jsx)(n6.A, { defaultAnimationState: n5.oA.LOOP, giftStyle: n.giftStyle, className: il.e })
                    : (0, a.jsx)(k.eu, {
                          src: null != i ? i.getAvatarURL(void 0, 100) : null,
                          size: tn._3.DEPRECATED_SIZE_100,
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
                              (0, a.jsx)(k.tK, { children: c }),
                              (0, a.jsxs)(k.hE, {
                                  className: B()(z.Ot, ej.tR),
                                  children: [
                                      l.productLine !== b.EZt.COLLECTIBLES &&
                                          (0, a.jsx)(tl.A, {
                                              size: tl.M.MEDIUM,
                                              className: il.I,
                                              game: s,
                                              skuId: l.id,
                                          }),
                                      u,
                                  ],
                              }),
                          ],
                      }),
            ],
        })
    );
});
var ir = n(935399),
    ia = n(475743),
    io = n(707554),
    ic = n(379154);
function iu(e) {
    let { loginStatus: t, authBoxClassName: n, onSubmit: i, onCancelAccountDeletion: l } = e,
        s = t === b.aUe.ACCOUNT_DISABLED,
        r = s ? Q.intl.string(Q.t["j3rC+U"]) : Q.intl.string(Q.t.ZFWofo),
        o = s ? Q.intl.string(Q.t["6eNTWe"]) : Q.intl.string(Q.t["pCBti+"]);
    return (0, a.jsx)(k.Ay, {
        tag: "form",
        onSubmit: i,
        className: n,
        children: (0, a.jsxs)(io.F, {
            component: (0, a.jsx)(k.hE, { className: z.QB, children: r }),
            children: [
                (0, a.jsx)(k.tK, { className: z.SX, children: o }),
                (0, a.jsxs)(k.eB, {
                    children: [
                        (0, a.jsx)(V.$, { text: Q.intl.string(Q.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, a.jsx)("div", {
                            className: B()(z.Ot, ic.Qt),
                            children: Q.intl.format(Q.t.js2rr5, { onClick: l }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var id = n(504394),
    ih = n(275538),
    im = n(431870);
function ig(e) {
    let { children: t, className: n, ...i } = e,
        l = t();
    return (0, a.jsx)(k.Ay, {
        ...i,
        className: B()(n, im.kL),
        contentClassName: im.Qs,
        children: l.map((e, t) =>
            (0, a.jsx)("div", { className: im.fi, style: { flexBasis: `${100 / l.length}%` }, children: e }, t),
        ),
    });
}
var ix = n(895600),
    ip = n(506774),
    iA = n(927813),
    iE = n(104798),
    i_ = n(1959);
let ij = "mweb_handoff_nonce",
    iN = "mweb_handoff_nonce_expiration",
    iI = +iA.A.Millis.MINUTE,
    iv = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    iC = new Set(["deep_link_failed"]),
    iS = () => {
        ip.w.remove(ij), ip.w.remove(iN);
    },
    iy = () => {
        let e = (0, m.bG)([eX.default], () => eX.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, c.parse)(window.location.search),
            i = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            l = i ?? (null !== e ? e : void 0);
        o.useEffect(() => {
            null !== i && e !== i && g.h.dispatch({ type: "FINGERPRINT", fingerprint: i });
        }, [i, e]);
        let [s, r] = o.useState(null),
            u = o.useCallback(
                (e) => {
                    r(e),
                        y.default.track(
                            b.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                            { reason: e, fingerprint: (0, ez.v)(l) },
                            { fingerprint: l },
                        );
                },
                [r, l],
            ),
            d = ip.w.get(ij);
        if (
            ("null" === n && null === s && u("deep_link_failed"),
            null != n && "null" !== n && null == d && null === s && u("nonce_missing"),
            o.useEffect(() => {
                if (null != d) {
                    let e = ip.w.get(iN);
                    (null == e || Date.now() >= e) && (u("nonce_expired"), iS());
                }
            }, [d, u]),
            o.useEffect(() => {
                null != n &&
                    "null" !== n &&
                    null != d &&
                    null == s &&
                    A.Bo.post({ url: b.Rsh.HANDOFF_EXCHANGE, body: { key: d, handoff_token: n }, rejectWithError: !0 })
                        .then((e) => x.A.loginToken(e.body.token, !1))
                        .then(() => {
                            y.default.track(b.HAw.LOGIN_SUCCESSFUL, {
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
                            u("handoff_exchange");
                        })
                        .finally(() => {
                            iS();
                        });
            }, [n, d, s, l, u]),
            null == l)
        )
            return null;
        let h =
            null == s
                ? (0, a.jsxs)(a.Fragment, {
                      children: [Q.intl.string(Q.t.uJ1JsY), (0, a.jsx)("br", {}), Q.intl.string(Q.t.GHVWAs)],
                  })
                : iC.has(s)
                  ? Q.intl.string(Q.t.EPt55r)
                  : iv.has(s)
                    ? Q.intl.string(Q.t.g87kTp)
                    : void 0;
        return null != s && iC.has(s)
            ? (0, a.jsx)("div", {
                  className: i_.Un,
                  children: (0, a.jsx)(U.E, {
                      color: "interactive-text-default",
                      variant: "text-sm/semibold",
                      children: h,
                  }),
              })
            : (0, a.jsxs)("div", {
                  className: i_.kL,
                  children: [
                      (0, a.jsx)(U.E, { variant: "text-sm/semibold", children: h }),
                      (0, a.jsx)(V.$, {
                          variant: "overlay-primary",
                          text: Q.intl.string(Q.t.NcC759),
                          onClick: () => {
                              let e = iE.A.generateNonce();
                              ip.w.set(ij, e), ip.w.set(iN, Date.now() + iI);
                              let t = new URL(b.J$u),
                                  n = new URLSearchParams(window.location.search);
                              n.delete("fingerprint"), n.delete("handoff_token");
                              let i = new URLSearchParams();
                              i.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                                  i.set("key", e),
                                  i.set("fingerprint", l),
                                  (t.search = i.toString()),
                                  y.default.track(
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
var iT = n(274303),
    ib = n(139286),
    iR = n(970573),
    iO = n(364488);
function iL(e) {
    let { onDismiss: t } = e;
    return (
        (0, ib.A)({ type: u.ImpressionTypes.MODAL, name: u.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, a.jsxs)(k.Ay, {
            className: iO.ci,
            children: [
                (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.bVbB63) }),
                (0, a.jsx)(U.E, {
                    className: iO.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: Q.intl.string(Q.t["0M5fN7"]),
                }),
                (0, a.jsx)(iR.A, {
                    actionText: Q.intl.string(Q.t["DSN+hw"]),
                    onAction: (e) => {
                        e === iR.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, a.jsx)("div", {
                    className: iO.o1,
                    children: (0, a.jsx)(eu.Q, {
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
function ik(e) {
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
            (0, a.jsx)(id.M, {}),
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
                        setRef: c,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        value: l,
                        required: !0,
                    }),
                    (0, a.jsx)("div", {
                        className: z.QB,
                        children: (0, a.jsx)(V.$, {
                            text: Q.intl.string(Q.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, a.jsx)(eu.Q, { text: Q.intl.string(Q.t.wWIufs), textVariant: "text-sm/normal", disabled: !0 }),
                    (0, a.jsx)("div", {
                        className: z.a5,
                        children: (0, a.jsx)(eu.Q, {
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
var iG = n(401755);
function iP(e, t) {
    if (null == t[e]) return null;
    {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n;
    }
}
function iw(e) {
    let t,
        {
            invite: n,
            guildTemplate: i,
            giftCode: l,
            authBoxClassName: s,
            disableAutofocusOnDefaultForm: r,
            login: u,
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
            handleGotoRegister: I,
        } = e,
        v = (0, m.bG)([eE.A], () => eE.A.getCountryCode()),
        C = (0, m.bG)([eX.default], () => eX.default.getLoginStatus()),
        S = (0, m.bG)([iT.A], () => iT.A.getHasLoggedInAccounts()),
        T = o.useCallback(
            (e) => {
                y.default.track(b.HAw.LOGIN_SUCCESSFUL, {
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
        { handoff_token: R } = (0, c.parse)(window.location.search),
        O = d.Fr && d.KY && null != R,
        L = null == g.email && null != g.password,
        G = o.useRef(null),
        P = o.useRef(null),
        w = (0, ia.A)(g);
    o.useEffect(() => {
        function e(e) {
            return null != g[e];
        }
        null != w && w !== g && (e("password") ? P.current?.focus() : (e("email") || e("login")) && G.current?.focus());
    }, [g, G, P, w]),
        (t =
            null != n
                ? (0, a.jsx)("div", { className: z.S3, children: (0, a.jsx)(id.A, { invite: n }) })
                : null != l
                  ? (0, a.jsx)(is, { giftCode: l })
                  : (0, a.jsxs)("div", {
                        className: ic.wx,
                        children: [
                            (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t["7fNJgA"]) }, "title"),
                            !1 === (0, t6.isAndroidWeb)()
                                ? (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.euS7r4) }, "subtitle")
                                : null,
                        ],
                    }));
    let D = (0, a.jsxs)("div", {
        className: ic.Eh,
        children: [
            S &&
                f &&
                (0, a.jsx)("div", {
                    className: ic.AX,
                    children: (0, a.jsx)(V.$, {
                        onClick: () => p(!1),
                        variant: "secondary",
                        text: Q.intl.string(Q.t["1MrpWO"]),
                        icon: np.n,
                    }),
                }),
            t,
            (0, a.jsx)(io.F, {
                children: (0, a.jsxs)(k.eB, {
                    className: z.QX,
                    children: [
                        (0, a.jsx)(e_.A, {
                            alpha2: v.alpha2,
                            countryCode: v.code.split(" ")[0],
                            className: z.SX,
                            label: Q.intl.string(Q.t.tUjnxr),
                            error: iP("login", g) ?? iP("email", g),
                            onChange: E,
                            setRef: G,
                            autoCapitalize: "none",
                            autoComplete: "username webauthn",
                            autoCorrect: "off",
                            spellCheck: "false",
                            value: u,
                            autoFocus: !L && !O && !r,
                            required: !0,
                        }),
                        (0, a.jsx)(k.pd, {
                            label: Q.intl.string(Q.t["CIGa+7"]),
                            error: iP("password", g),
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
                            className: B()(z.SX, z.a5),
                            children: (0, a.jsx)(eu.Q, {
                                text: Q.intl.string(Q.t.wWIufs),
                                textVariant: "text-sm/normal",
                                onClick: () => {
                                    null != G.current && G.current.focus(), N();
                                },
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: z.QB,
                            children: (0, a.jsx)(V.$, {
                                text: Q.intl.string(Q.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                loading: C === b.aUe.LOGGING_IN,
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: z.a5,
                            children: [
                                (0, a.jsx)("span", { className: ic.Qt, children: Q.intl.string(Q.t.tmE73r) }),
                                (0, a.jsx)("span", {
                                    className: ic.Z8,
                                    children: (0, a.jsx)(eu.Q, {
                                        text: Q.intl.string(Q.t.pV8xeR),
                                        textVariant: "text-sm/normal",
                                        onClick: I,
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
        ? (0, a.jsx)(ik, {
              authBoxClassName: s,
              country: v,
              login: u,
              password: h,
              onLoginChange: E,
              onPasswordChange: _,
              loginRef: G,
              passwordRef: P,
          })
        : null != i
          ? i.state === iG.QB.RESOLVING
              ? (0, a.jsx)(ik, {
                    authBoxClassName: s,
                    country: v,
                    login: u,
                    password: h,
                    onLoginChange: E,
                    onPasswordChange: _,
                    loginRef: G,
                    passwordRef: P,
                })
              : (0, a.jsx)(ig, {
                    onSubmit: j,
                    tag: "form",
                    className: B()(s, ic.Sy),
                    children: () => [
                        (0, a.jsx)(ix.A, { guildTemplate: i }, "template"),
                        (0, a.jsx)(o.Fragment, { children: D }, "form-wrapper"),
                    ],
                })
          : S && !f
            ? (0, a.jsx)(iL, { onDismiss: () => p(!0) })
            : (0, a.jsxs)("div", {
                  children: [
                      (0, a.jsx)(k.Ay, {
                          onSubmit: j,
                          tag: "form",
                          className: B()(s, { [ic.M0]: O }),
                          expanded: !0,
                          children: (0, a.jsxs)(eO.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 64,
                              children: [
                                  D,
                                  (0, a.jsx)(ih.A, {
                                      onAuthenticateSuccess: T,
                                      conditionalMediationAbortController: A,
                                  }),
                              ],
                          }),
                      }),
                      O && (0, a.jsx)(iy, {}),
                  ],
              });
}
var iD = n(572469);
function iB(e) {
    let { loginSource: t, giftCodeSKUId: n } = e,
        i = (0, m.cf)(
            [eX.default],
            () => ({ ticket: eX.default.getMFATicket(), methods: eX.default.getMFAMethods() }),
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
        children: (0, a.jsx)(iD.t, {
            mfaFinish: l,
            mfaChallenge: i,
            onEarlyClose: () => {
                g.h.dispatch({ type: "LOGIN_RESET" });
            },
            width: 480,
        }),
    });
}
var iU = n(511815),
    iV = n(139033),
    iM = n(15552),
    iF = n(952116),
    iW = n(491509),
    iH = n(913612),
    iQ = n(933924);
let iK = (e) => n.g.location.assign(e);
function iz(e) {
    let {
        invite: t,
        guildTemplate: n,
        giftCode: i,
        location: l,
        redirectTo: s,
        transitionTo: r,
        authBoxClassName: u,
        loginSource: d,
        disableAutofocusOnDefaultForm: h,
    } = e;
    (0, iH.K)();
    let g = (0, m.bG)([eX.default], () => eX.default.isAuthenticated()),
        f = (0, m.bG)([S.A], () => S.A.isHandoffAvailable()),
        p = (0, m.bG)([eX.default], () => eX.default.getLoginStatus()),
        A = i?.skuId ?? null,
        _ = (0, m.bG)([n7.A], () => (null != A ? n7.A.get(A) : null)),
        {
            checkingHandoff: j,
            redirecting: N,
            login: I,
            password: v,
            phoneVerifyError: T,
            dismissedChooseAccount: R,
            setDismissedChooseAccount: O,
            errors: L,
            conditionalMediationAbortController: w,
            loginSource: D,
            loginOrSSO: B,
            handleLogin: V,
            handleIPAuthorize: M,
            handlePasswordReset: W,
            handleForgotPassword: H,
            handleResendCode: K,
            handleReset: X,
            handleCancelAccountDeletion: q,
            handleGotoRegister: Y,
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
                    redirectTo: u,
                    location: d,
                    loginSource: h,
                } = e,
                [m, g] = o.useState(() => l),
                [f, p] = o.useState(() => s),
                [A, E] = o.useState(""),
                [_, j] = o.useState(() => {
                    let e = null != d ? (0, c.parse)(d.search) : {};
                    return e.email ?? e.login ?? "";
                }),
                [N, I] = o.useState(""),
                [v, S] = o.useState(!1),
                [y, T] = o.useState(null),
                [R, O] = o.useState(!1),
                [L] = o.useState(() => new AbortController()),
                [k, G] = o.useState({});
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
                    return null != u ? C(u) : null;
                }, [h, i, n, t, u]),
                w = null != i ? i.skuId : null,
                D = o.useCallback(
                    (e) => {
                        let t = null != e ? (0, c.parse)(e.search) : {};
                        if ((delete t.redirect_to, null != u)) {
                            if (eo(u)) return void ec(u);
                            r(u);
                        } else if (null == t.service) r(b.BVt.APP);
                        else {
                            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + b.Rsh.SSO,
                                n = { ...t, token: eX.default.getToken() };
                            window.location = `${e}?${(0, c.stringify)(n)}`;
                        }
                    },
                    [u, r],
                ),
                B = o.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e && null != t && (p(!0), n ? x.A.verifySSOToken("login").then(() => D(t)) : D(t));
                    },
                    [D],
                ),
                V = o.useCallback(() => {
                    L.abort("Login state reset"), G({}), x.A.loginReset();
                }, [L]),
                M = o.useCallback(
                    async function (e) {
                        let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e?.preventDefault(),
                            L.abort("Starting password login"),
                            F._.dispatch(b.jej.WAVE_EMPHASIZE),
                            G({});
                        try {
                            await x.A.login({
                                login: A + _,
                                password: N,
                                undelete: n ?? v,
                                source: P,
                                giftCodeSKUId: w,
                                invite: t,
                            });
                        } catch (e) {
                            G((0, iM.p)(e));
                        }
                    },
                    [L, _, A, N, v, P, w, t],
                ),
                W = o.useCallback(
                    async (e) => {
                        let t = A + _;
                        G({});
                        try {
                            let { token: n } = await ep.A.verifyPhone(t, e, !1);
                            await x.A.authorizeIPAddress(n), M();
                        } catch (e) {
                            null != e.body && null != e.body.message && T(e.body.message);
                        }
                    },
                    [A, _, M],
                ),
                H = o.useCallback(
                    async (e) => {
                        T(null);
                        try {
                            let { token: t } = await ep.A.verifyPhone(A + _, e, !1);
                            r(b.BVt.RESET, { search: (0, c.stringify)({ token: t, from_login: "true" }) });
                        } catch (e) {
                            null != e.body && null != e.body.message && T(e.body.message);
                        }
                    },
                    [A, _, r],
                ),
                K = o.useCallback(
                    async (e) => {
                        null != e && e.preventDefault();
                        let t = A + _;
                        G({});
                        try {
                            F._.dispatch(b.jej.WAVE_EMPHASIZE);
                            let e = await x.A.forgotPassword(t);
                            if (!1 === e) return;
                            e === iU.D.ONE_TIME_LOGIN
                                ? (0, na.openModal)((e) => {
                                      let t = [
                                          {
                                              variant: "primary",
                                              text: Q.intl.string(Q.t.BddRzS),
                                              onClick: e.onClose,
                                              fullWidth: !0,
                                          },
                                      ];
                                      return (0, a.jsx)(nr.Modal, {
                                          title: Q.intl.string(Q.t["6Ecyts"]),
                                          actions: t,
                                          ...e,
                                          children: (0, a.jsx)(U.E, {
                                              variant: "text-md/normal",
                                              children: Q.intl.string(Q.t.iAcrqV),
                                          }),
                                      });
                                  })
                                : (0, iV.A)({
                                      title: Q.intl.string(Q.t.f5Pi7A),
                                      subtitle: Q.intl.format(Q.t["6u5hQ9"], { email: t }),
                                  });
                        } catch (e) {
                            G((0, iM.p)(e));
                        }
                    },
                    [A, _],
                ),
                z = o.useCallback(() => {
                    ep.A.resendCode(A + _);
                }, [A, _]),
                X = o.useCallback((e) => {
                    null != e && e.preventDefault(), x.A.loginReset(), I(""), E(""), j(""), S(!1), g(!1), p(!1), G({});
                }, []),
                q = o.useCallback(() => {
                    S(!0), M(void 0, { undelete: !0 });
                }, [M]),
                Y = o.useCallback(() => {
                    let e,
                        l = null != d ? (0, c.parse)(d.search) : {};
                    "" !== _ && (l.email = _),
                        null != t
                            ? ((l.mode = "register"), (e = b.BVt.INVITE(t.code)))
                            : null != i
                              ? ((l.mode = "register"), (e = b.BVt.GIFT_CODE(i.code)))
                              : null != n
                                ? (e = b.BVt.GUILD_TEMPLATE(n.code))
                                : null != u
                                  ? ((e = b.BVt.REGISTER), (l.redirect_to = u))
                                  : (e = b.BVt.REGISTER),
                        V(),
                        r(e, { search: (0, c.stringify)(l) }),
                        F._.dispatch(b.jej.WAVE_EMPHASIZE);
                }, [_, t, i, n, u, d, V, r]);
            return {
                checkingHandoff: m,
                redirecting: f,
                login: _,
                password: N,
                phoneVerifyError: y,
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
                handleResendCode: z,
                handleReset: X,
                handleCancelAccountDeletion: q,
                handleGotoRegister: Y,
                loginReset: V,
                onLoginChange: o.useCallback((e, t) => {
                    j(e), E(t);
                }, []),
                onPasswordChange: o.useCallback((e) => {
                    I(e);
                }, []),
            };
        })({
            invite: t,
            guildTemplate: n,
            giftCode: i,
            handoffAvailable: f,
            authenticated: g,
            transitionTo: r ?? iK,
            redirectTo: s,
            location: l,
            loginSource: d,
        });
    (0, ir.Ay)(() => {
        f && !g ? (0, E.ST)() : g && B(g, l, !0),
            y.default.track(
                b.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: D,
                    authenticated: g,
                    ...(null != _ ? (0, iW.A)(_, !1, !1) : {}),
                    source: (0, G.PR)(),
                },
                { flush: !0 },
            ),
            g || (0, iQ.a)({ abortController: w, loginSource: D, giftCodeSKUId: A }),
            x.A.getLocationMetadata(),
            (0, P.d)("login");
    });
    let ee = (0, ia.A)(g);
    if (
        (o.useEffect(() => {
            let e = j && (f || N);
            g && !1 === ee && !e && (w.abort("Transitioning to authenticated state"), B(g, l));
        }, [g, f, ee, N, j, w, B, l]),
        N || j)
    )
        return (0, a.jsx)(k.Ay, { children: (0, a.jsx)(ek.y, {}) });
    if (f)
        return (0, a.jsxs)(k.Ay, {
            className: u,
            children: [
                (0, a.jsx)(k.CK, {}),
                (0, a.jsx)(k.hE, { className: z.QB, children: Q.intl.string(Q.t.S6RMNA) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.YZiJbh) }),
            ],
        });
    switch (p) {
        case b.aUe.LOGGING_IN_MFA_SMS:
        case b.aUe.MFA_SMS_STEP:
        case b.aUe.LOGGING_IN_MFA:
        case b.aUe.MFA_STEP:
            return (0, a.jsx)(iB, { loginSource: D, giftCodeSKUId: A });
        case b.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case b.aUe.ACCOUNT_DISABLED:
            return (0, a.jsx)(iu, { loginStatus: p, authBoxClassName: u, onSubmit: X, onCancelAccountDeletion: q });
        case b.aUe.PHONE_IP_AUTHORIZATION:
            return (0, a.jsx)(k.Ay, {
                tag: "form",
                className: u,
                children: (0, a.jsx)(iF.A, {
                    title: Q.intl.string(Q.t.w55Oco),
                    subtitle: Q.intl.format(Q.t.CfRZBj, { onResendClick: K }),
                    error: T,
                    onSubmit: M,
                    onCancel: $,
                }),
            });
        case b.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, a.jsx)(k.Ay, {
                tag: "form",
                className: u,
                children: (0, a.jsx)(iF.A, {
                    title: Q.intl.string(Q.t["+xqy3d"]),
                    subtitle: Q.intl.format(Q.t.ef4uZ7, { onResendClick: K }),
                    error: T,
                    onSubmit: W,
                    onCancel: $,
                }),
            });
        case b.aUe.LOGGING_IN:
        case b.aUe.NONE:
        default:
            return (0, a.jsx)(iw, {
                invite: t,
                guildTemplate: n,
                giftCode: i,
                authBoxClassName: u,
                disableAutofocusOnDefaultForm: h,
                login: I,
                password: v,
                errors: L,
                loginSource: D,
                dismissedChooseAccount: R,
                setDismissedChooseAccount: O,
                conditionalMediationAbortController: w,
                onLoginChange: Z,
                onPasswordChange: J,
                handleLogin: V,
                handleForgotPassword: H,
                handleGotoRegister: Y,
            });
    }
}
var iX = n(664294),
    iq = n(204925);
let iY = null,
    i$ = "underage";
class iZ extends m.Ay.Store {
    static displayName = "AgeGateStore";
    isUnderageAnonymous() {
        if (t6.isPlatformEmbedded && 1) {
            if (null != iY && iY + iq.bm > Date.now()) return !0;
        } else if (1) return null != iX.parse(document.cookie)[i$];
        return !1;
    }
}
let iJ = new iZ(g.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        (iY = Date.now()), (document.cookie = `${i$}=1;path=/`);
    },
    LOGIN_SUCCESS: function () {
        (iY = null), (document.cookie = `${i$}=1;path=/;max-age=0`);
    },
});
var i0 = n(509434),
    i1 = n(153801);
let i2 = function () {
    return (0, a.jsx)(k.Ay, {
        children: (0, a.jsxs)("div", {
            className: i1.hQ,
            children: [
                (0, a.jsx)(k.hE, { className: i1.DD, children: Q.intl.string(Q.t.nCB6Ga) }),
                (0, a.jsx)(k.tK, {
                    className: i1.VA,
                    children: Q.intl.format(Q.t.KQgoxG, { underageMessage: Q.intl.string(Q.t.WqEH4D) }),
                }),
                (0, a.jsx)(V.$, {
                    icon: i0.I,
                    text: Q.intl.string(Q.t.hvVgAZ),
                    onClick: () => window.open(nh.A.getArticleURL(b.MVz.AGE_GATE), "_blank"),
                    iconPosition: "end",
                }),
            ],
        }),
    });
};
var i3 = n(990078),
    i7 = n(913122),
    i4 = n(201505);
n(417635), n(827343), n(792251), n(19575), n(945041);
var i8 = n(493527),
    i5 = n(544395),
    i6 = n(446837);
let i9 = window.ResizeObserver ?? i6.t;
function le(e) {
    let { show: t, children: n, top: i = 0, bottom: l = 0 } = e,
        { ref: s, height: r } = (function () {
            let e = o.useRef(null),
                [t, n] = o.useState(0),
                i = o.useMemo(
                    () =>
                        new i9((e) => {
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
        u = (0, eJ.z)({
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
        style: { overflow: "hidden", height: c.height, paddingBottom: c.paddingBottom, marginTop: c.marginTop },
        children: (0, a.jsx)(e$.animated.div, { style: { opacity: u.opacity }, ref: s, children: n }),
    });
}
var lt = n(153488),
    ln = n(934337),
    li = n(989349),
    ll = n.n(li),
    ls = n(955437),
    lr = n(888548);
n(861807);
var la = n(569717);
function lo(e) {
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
        giftCodeSKUId: d = null,
        promoEmailConsent: h = null,
        usedUsernameSuggestion: m = null,
    } = e;
    if ((g.h.dispatch({ type: "REGISTER" }), null != o)) {
        let e;
        (0, la.A)(o, b.JJy.REGISTER),
            y.default.track(b.HAw.AGE_GATE_ACTION, { source: iq.w_.REGISTER, action: iq.AM.AGE_GATE_SUBMITTED }),
            (e = ll()().diff(o, "years")) < 13 ||
                y.default.track(b.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                });
    }
    return W.A.post({
        url: b.Rsh.REGISTER,
        body: {
            fingerprint: eX.default.getFingerprint(),
            email: t,
            username: i,
            global_name: l,
            password: r,
            invite: c,
            consent: s,
            phone_token: n,
            date_of_birth: o?.format("YYYY-MM-DD"),
            gift_code_sku_id: d,
            guild_template_code: a,
            promotional_email_opt_in: h?.checked,
        },
        trackedActionData: {
            event: u.NetworkActionNames.USER_REGISTER,
            properties: {
                invite_code: c,
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
                y.default.track(b.HAw.AGE_GATE_ACTION, { source: iq.w_.REGISTER, action: iq.AM.AGE_GATE_SUCCESS });
        },
        (e) => {
            if (e instanceof lr.CaptchaCancelError) throw e;
            let t = new M.A(e);
            throw (
                (null != t.getFieldErrors("date_of_birth") && ls.Xv(iq.w_.REGISTER),
                y.default.track(b.HAw.REGISTER_SUBMIT_ERRORED, {
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
var lc = n(568385);
function lu() {
    let { required: e, checked: t } = (0, ln.mZ)();
    return e
        ? (0, a.jsx)("div", {
              className: z.Ot,
              children: (0, a.jsx)(lc.J, {
                  label: Q.intl.string(Q.t["0p3R0+"]),
                  checked: t,
                  onChange: ln.Bw,
                  labelType: "secondary",
              }),
          })
        : null;
}
let ld = /\.$/;
function lh(e) {
    return Array.isArray(e)
        ? e
              .map((e) => e.replace(ld, ""))
              .join(". ")
              .trim()
        : e;
}
function lm(e) {
    let [t, n] = o.useState(() => null != e && !e),
        [i, l] = o.useState(e);
    return null == i && null != e ? (l(e), n(!e)) : i !== e && l(e), [t, n];
}
function lg() {
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
                    }, e * iA.A.Millis.SECOND));
            }, []),
        ]
    );
}
var lx = n(731286);
function lf(e) {
    let { consent: t, consentRequired: n, onConsentChange: i } = e;
    return n
        ? (0, a.jsx)("div", {
              className: lx.IQ,
              children: (0, a.jsx)(lc.J, {
                  label: Q.intl.format(Q.t.qMDAP0, { termsURL: b.X7G.TERMS, privacyURL: b.X7G.PRIVACY }),
                  checked: t,
                  onChange: i,
                  labelType: "secondary",
              }),
          })
        : (0, a.jsx)(U.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: B()(z.Ot, lx.E2),
              children: Q.intl.format(Q.t["KI+BSb"], { termsURL: b.X7G.TERMS, privacyURL: b.X7G.PRIVACY }),
          });
}
n(801541);
var lp = n(889137),
    lA = n(546727),
    lE = n(5052);
function l_(e) {
    let t,
        { username: n, suggestion: i, globalName: l, isUsernameFocused: s, onClickSuggestion: r } = e,
        o = (0, lE.i)(n, !0, !0),
        c = n.length > 0;
    return (
        (t = c
            ? (0, lp.YW)(o)
                  .with({ type: lA.q.ERROR, message: lp.P.select() }, (e) =>
                      (0, a.jsx)(U.E, { className: lx.vU, variant: "text-sm/normal", children: e }),
                  )
                  .with({ type: lA.q.AVAILABLE, message: lp.P.select() }, (e) =>
                      (0, a.jsx)(U.E, { className: lx.vq, variant: "text-sm/normal", children: e }),
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
        (0, a.jsx)(le, { show: (c && o?.type === lA.q.ERROR) || s, top: -12, bottom: 20, children: t })
    );
}
function lj(e) {
    let {
            initialEmail: t,
            invite: n,
            giftCode: i,
            guildTemplate: l,
            onApiErrors: s,
            onEmailChange: r,
            onGotoLogin: c,
            onRegister: u,
        } = e,
        [d, h] = o.useState(!1),
        [g, x] = o.useState(!1);
    async function f() {
        T.length > 0 && !i5.A.wasRegistrationSuggestionFetched(T) && (await i8.A.fetchSuggestionsRegistration(T));
    }
    function p(e) {
        y.default.track(b.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function A(e) {
        y.default.track(b.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    let E = (0, m.bG)([lt.A], () => lt.A.getAuthenticationConsentRequired()),
        _ = (0, m.bG)([i5.A], () => i5.A.registrationUsernameSuggestion()),
        j = o.useRef(null),
        N = o.useRef(null),
        I = o.useRef(null),
        v = o.useRef(null),
        [C, S] = o.useState(t),
        [T, R] = o.useState(""),
        [O, L] = o.useState(""),
        [G, P] = o.useState(""),
        [w, D] = o.useState(null),
        [M, W] = lm(E),
        [H, K] = o.useState(!1),
        [X, q] = lg(),
        [Y, $] = o.useState({}),
        { message: Z, email: J, username: ee, global_name: et, password: en, date_of_birth: ei } = Y,
        [el, es] = o.useState(null),
        [er, ea] = o.useState(null),
        [eo, ec] = o.useState(null),
        [ed, eh] = o.useState(null),
        em = null != E && M;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: i, globalNameRef: l, passwordRef: s } = e,
            r = (0, ia.A)(t);
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
    })({ apiErrors: Y, emailRef: j, usernameRef: N, globalNameRef: I, passwordRef: v });
    let eg = o.useCallback(async () => {
            let e = null != i ? i.skuId : null,
                t = ln.mZ.getState(),
                r = (0, nM.uJ)(_) ? null : O === _;
            F._.dispatch(b.jej.WAVE_EMPHASIZE), K(!0), $({});
            try {
                await lo({
                    email: C,
                    username: O,
                    globalName: T,
                    consent: M,
                    password: G,
                    invite: n?.code,
                    usedUsernameSuggestion: r,
                    guildTemplateCode: l?.code,
                    giftCodeSKUId: e,
                    birthday: w,
                    promoEmailConsent: t.required ? t : null,
                }),
                    u?.();
            } catch (t) {
                if ((K(!1), !(t instanceof i7.LG))) return;
                let e = (0, iM.W)(t);
                $(e), s?.(e), "number" == typeof e.retry_after && q(e.retry_after);
            }
        }, [i, l, n, C, s, u, _, O, T, G, w, M, q]),
        ex = o.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == E)) return;
                let t = !1;
                0 === C.length && (es(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    0 === O.length && (ea(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    0 === G.length && (ec(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    null == w && (eh(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    t || eg();
            },
            [C, O, G, w, E, eg],
        ),
        ef = null;
    return (
        "string" == typeof Z && (ef = (0, a.jsx)(k.ME, { className: B()(z.QX, lx.gJ), children: Z })),
        (0, a.jsx)("form", {
            onSubmit: ex,
            children: (0, a.jsxs)(k.eB, {
                className: z.QX,
                children: [
                    (0, a.jsx)(k.pd, {
                        autoFocus: !0,
                        className: z.SX,
                        label: Q.intl.string(Q.t.dI4d4S),
                        name: "email",
                        value: C,
                        onChange: (e) => {
                            S(e), r?.(e), es(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null);
                        },
                        error: el ?? lh(J),
                        type: "email",
                        autoComplete: "username",
                        setRef: j,
                        required: !0,
                        onFocus: () => p("email"),
                        onBlur: () => A("email"),
                    }),
                    (0, a.jsx)(k.pd, {
                        label: Q.intl.string(Q.t["9AjdkD"]),
                        className: z.SX,
                        name: "global_name",
                        value: T,
                        onChange: R,
                        error: lh(et),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: I,
                        onFocus: () => {
                            h(!0), p("global_name");
                        },
                        onBlur: () => {
                            h(!1), A("global_name");
                        },
                    }),
                    (0, a.jsx)(le, {
                        show: d,
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
                                className: z.SX,
                                name: "username",
                                value: O,
                                onChange: (e) => {
                                    L(e.toLocaleLowerCase()), ea(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null);
                                },
                                error: er ?? lh(ee),
                                autoComplete: "off",
                                setRef: N,
                                required: !0,
                                onFocus: () => p("username"),
                                onBlur: () => A("username"),
                            }),
                            (0, a.jsx)(l_, {
                                username: O,
                                suggestion: _,
                                globalName: T,
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
                        value: G,
                        onChange: (e) => {
                            P(e), ec(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null);
                        },
                        error: eo ?? lh(en),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: v,
                        required: !0,
                        onFocus: () => p("password"),
                        onBlur: () => A("password"),
                    }),
                    (0, a.jsx)(i4.A, {
                        label: Q.intl.string(Q.t.rhBeKe),
                        wrapperClassName: lx.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            D(e), null != e && eh(null);
                        },
                        error: ed ?? lh(ei),
                        value: w,
                        required: !0,
                        onFocus: p,
                        onBlur: A,
                    }),
                    (0, a.jsx)(lu, {}),
                    (0, a.jsx)(lf, { consent: M, consentRequired: E, onConsentChange: W }),
                    (0, a.jsx)(i3.m, {
                        text: !M && E ? Q.intl.string(Q.t.AY4IVA) : null,
                        children: (0, a.jsx)("div", {
                            className: z.QX,
                            children: (0, a.jsx)(V.$, {
                                text: Q.intl.string(Q.t["825cFy"]),
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
                        className: z.QX,
                        children: (0, a.jsx)(eu.Q, {
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
var lN = n(292666),
    lI = n(713654),
    lv = n(131165);
function lC(e) {
    let { channel: t } = e,
        n = (0, lI._U)(t.type);
    return (0, a.jsxs)("div", {
        className: lv.Nj,
        children: [
            null != n ? (0, a.jsx)(n, { color: "currentColor", size: "custom", width: 20, height: 20 }) : null,
            (0, a.jsx)(U.E, { className: lv.dN, color: "none", variant: "text-sm/semibold", children: t.name }),
        ],
    });
}
function lS(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, a.jsxs)("div", {
        className: lv.kL,
        children: [
            (0, a.jsx)(tC.Uq, { className: lv.II, guildId: n.guild_id, guildEvent: n, eventPreview: n }),
            (0, a.jsx)(tC.sC, { name: n.name, description: n.description, guildId: n.guild_id }),
            null != t && n.channel_id === t.id ? (0, a.jsx)(lC, { channel: t }) : null,
        ],
    });
}
var ly = n(831985);
function lT(e) {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let i = eh.DY(t),
        { name: l, description: s } = i;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(eL.D, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: ly.CT,
                children: Q.intl.string(Q.t.Eabu1z),
            }),
            (0, a.jsxs)("div", {
                className: ly.EB,
                children: [
                    (0, a.jsx)(tH.Ay, {
                        mask: tH.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, a.jsx)(tv.Ay, { guild: i, size: tv.Ay.Sizes.MEDIUM, active: !0 }),
                    }),
                    (0, a.jsxs)("div", {
                        className: ly.OA,
                        children: [
                            (0, a.jsx)(eL.D, { variant: "heading-sm/semibold", children: l }),
                            (0, a.jsxs)("div", {
                                className: ly.aH,
                                children: [
                                    (0, a.jsx)("div", { className: ly.Om }),
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
                (0, a.jsx)(U.E, { color: "text-default", className: ly.CT, variant: "text-sm/normal", children: s }),
        ],
    });
}
function lb(e) {
    let { authBoxClassName: t, name: n, onNameChange: i } = e;
    return (0, a.jsxs)(k.Ay, {
        className: t,
        children: [
            (0, a.jsx)(id.M, {}),
            (0, a.jsxs)(k.eB, {
                className: lx.y0,
                children: [
                    (0, a.jsx)(i3.m, {
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
                                y.default.track(b.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                y.default.track(b.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, a.jsx)(U.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: B()(z.QX, lx.E2),
                        children: Q.intl.format(Q.t["KI+BSb"], { termsURL: b.X7G.TERMS, privacyURL: b.X7G.PRIVACY }),
                    }),
                    (0, a.jsx)("div", {
                        className: z.Ot,
                        children: (0, a.jsx)(V.$, {
                            text: Q.intl.string(Q.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: z.QX,
                        children: (0, a.jsx)(eu.Q, {
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
function lR(e) {
    let { consentRequired: t, consent: n, registering: i } = e,
        l = o.useMemo(() => null != t && n, [t, n]);
    return (0, a.jsx)(i3.m, {
        text: !n && t ? Q.intl.string(Q.t.AY4IVA) : null,
        children: (0, a.jsx)("div", {
            className: z.Ot,
            children: (0, a.jsx)(V.$, {
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
function lO(e) {
    let t,
        { invite: n, authBoxClassName: i, onApiErrors: l, onGotoLogin: s, onRegister: r } = e,
        c = (0, m.bG)([lt.A], () => lt.A.getAuthenticationConsentRequired()),
        u = n?.guild_scheduled_event != null,
        d = o.useRef(null);
    t =
        n?.guild_scheduled_event != null
            ? (0, a.jsx)(lS, { channel: n.channel, guildScheduledEvent: n.guild_scheduled_event })
            : (0, a.jsx)("div", { className: z.S3, children: (0, a.jsx)(id.A, { invite: n, inUnclaimedFlow: !0 }) });
    let [h, g] = o.useState(""),
        [x, f] = o.useState(null),
        [p, A] = lm(c),
        [E, _] = o.useState(!1),
        [j, N] = o.useState({}),
        { username: I, global_name: v, date_of_birth: C } = j,
        [S, T] = lg();
    o.useEffect(() => {
        null == x && d.current?.focus();
    }, [x, d]);
    let [R, O] = o.useState(null),
        [L, G] = o.useState(null),
        P = o.useCallback(async () => {
            F._.dispatch(b.jej.WAVE_EMPHASIZE), _(!0), N({});
            try {
                await (function (e) {
                    let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
                    return lo({ ...i, invite: t, giftCodeSKUId: n });
                })({ consent: p, invite: n.code, globalName: h, birthday: x }),
                    r?.();
            } catch (t) {
                if ((_(!1), !(t instanceof i7.LG))) return;
                let e = (0, iM.W)(t);
                N(e), l?.(e), "number" == typeof e.retry_after && T(e.retry_after);
            }
        }, [n, h, x, p, l, r, T, N, _]),
        w = o.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === c)) return;
                let t = !1;
                0 === h.length && (O(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    null == x && (G(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    t || P();
            },
            [h, x, c, P, O, G],
        );
    return n.state === b.elq.RESOLVING
        ? (0, a.jsx)(lb, { authBoxClassName: i, name: h, onNameChange: g })
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(k.Ay, {
                      tag: "section",
                      className: i,
                      children: (0, a.jsxs)("form", {
                          onSubmit: w,
                          children: [
                              t,
                              u ? (0, a.jsx)("div", { className: lx.yF }) : null,
                              (0, a.jsxs)(k.eB, {
                                  className: u ? void 0 : lx.y0,
                                  children: [
                                      (0, a.jsx)(lN.k, {
                                          helperText: Q.intl.string(Q.t["330TCc"]),
                                          label: Q.intl.string(Q.t["9AjdkD"]),
                                          error: R ?? lh(v ?? I),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: h,
                                          placeholder: Q.intl.string(Q.t["09Q8yp"]),
                                          onChange: g,
                                          onFocus: () => {
                                              y.default.track(b.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              y.default.track(b.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, a.jsx)(i4.A, {
                                          label: Q.intl.string(Q.t.rhBeKe),
                                          wrapperClassName: lx.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              f(e), null != e && G(null);
                                          },
                                          error: L ?? lh(C),
                                          value: x,
                                      }),
                                      (0, a.jsx)(lf, { consent: p, consentRequired: c, onConsentChange: A }),
                                      (0, a.jsx)(lR, { consentRequired: c, consent: p, registering: E }),
                                      (0, a.jsx)("div", {
                                          className: z.QX,
                                          children: (0, a.jsx)(eu.Q, {
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
                  null != n && u
                      ? (0, a.jsx)(k.Ay, {
                            className: z.QX,
                            children: (0, a.jsx)(lT, { guild: n.guild, onlineCount: n.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
var lL = n(942614);
n(100544);
var lk =
        (((r = {}).IDENTITY = "identity"),
        (r.DISPLAY_NAME = "display_name"),
        (r.ACCOUNT_INFORMATION = "account_information"),
        (r.FULL = "full"),
        (r.AGE_GATE = "age_gate"),
        (r.INVITE = "invite"),
        (r.SMS_VERIFY = "sms_verify"),
        r),
    lG = n(771016);
function lP(e) {
    let {
            authBoxClassName: t,
            giftCode: n,
            giftCodeSKU: i,
            guildTemplate: l,
            invite: s,
            location: r,
            redirectTo: d,
            onLoginStart: h,
            onRegister: g,
            transitionTo: f = G.pX,
        } = e,
        p = (0, m.bG)([lt.A], () => lt.A.getAuthenticationConsentRequired()),
        A = (0, m.bG)([eX.default], () => eX.default.isAuthenticated()),
        E = (0, m.bG)([iJ], () => iJ.isUnderageAnonymous()),
        _ = (0, m.bG)([iT.A], () => iT.A.getHasLoggedInAccounts()),
        j = null != e.location ? (0, c.parse)(e.location.search) : {},
        [N, I] = o.useState(j.email ?? ""),
        [v, C] = o.useState({}),
        S = (0, ia.A)(A),
        T = (function (e, t, n) {
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
            A && (null != d ? f(d) : f(ed.A.defaultRoute));
        }, [A, d, f]);
    (0, ir.Ay)(() => {
        L(),
            y.default.track(
                b.HAw.REGISTER_VIEWED,
                {
                    location: null != s ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: T,
                    ...(null != i ? (0, iW.A)(i, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == p && x.A.getLocationMetadata(),
            (0, P.d)("register");
    }),
        o.useEffect(() => {
            A && !1 === S && ((0, lL.C)(lG.zY.ORGANIC_REGISTERED), L());
        }, [A, S, L]);
    let w = lk.FULL;
    E || null != v.date_of_birth ? (w = lk.AGE_GATE) : R && (w = lk.INVITE),
        (0, ib.A)(
            {
                type: u.ImpressionTypes.VIEW,
                name: u.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW, step: w },
            },
            {},
            [w],
        );
    let D = o.useCallback(
        (e) => {
            let t,
                i = null != r ? (0, c.parse)(r.search) : {};
            null != s
                ? (t = b.BVt.INVITE_LOGIN(s.code))
                : null != n
                  ? (t = b.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != l
                    ? (t = b.BVt.GUILD_TEMPLATE_LOGIN(l.code))
                    : null != d
                      ? ((t = b.BVt.LOGIN), (i.redirect_to = d))
                      : ((t = b.BVt.LOGIN), "" !== N && (i = { email: N })),
                x.A.loginReset(),
                f(t, { search: (0, c.stringify)(i), source: "register" }),
                h?.(e),
                F._.dispatch(b.jej.WAVE_EMPHASIZE);
        },
        [N, s, n, l, d, r, h, f],
    );
    if (E || null != v.date_of_birth) return (0, a.jsx)(i2, {});
    if (null != s && R)
        return (0, a.jsx)(lO, { invite: s, authBoxClassName: t, onApiErrors: C, onGotoLogin: D, onRegister: g });
    let U = (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.wC4TlR) }, "title"),
        M = !1;
    null != l
        ? ((U = (0, a.jsx)(ix.A, { guildTemplate: l })), (M = !0))
        : null != n
          ? (U = (0, a.jsx)(is, { giftCode: n }))
          : null != s &&
            O &&
            s.state === b.elq.RESOLVED &&
            (U = (0, a.jsx)("div", { className: z.S3, children: (0, a.jsx)(id.A, { invite: s, isRegister: !0 }) }));
    let W = (0, a.jsx)(lj, {
        initialEmail: j.email ?? "",
        invite: s,
        giftCode: n,
        guildTemplate: l,
        onApiErrors: C,
        onEmailChange: I,
        onGotoLogin: D,
        onRegister: g,
    });
    return M
        ? (0, a.jsx)(ig, {
              tag: "section",
              className: B()(t, lx.Sy),
              children: () => [
                  U,
                  (0, a.jsxs)(
                      "div",
                      {
                          className: lx.Uu,
                          children: [(0, a.jsx)(k.hE, { className: lx.lR, children: Q.intl.string(Q.t.wC4TlR) }), W],
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
                            className: lx.AX,
                            children: (0, a.jsx)(V.$, {
                                onClick: D,
                                variant: "secondary",
                                text: Q.intl.string(Q.t["1MrpWO"]),
                                icon: np.n,
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
class lw extends o.PureComponent {
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
        n0.Yq(), null == e && this.refreshUser();
    }
    refreshUser = () => {
        this.setState({ fetchingUser: !0 }),
            nc
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
                (0, a.jsx)(k.hE, { className: B()(z.Ot, z.QB), children: Q.intl.string(Q.t.KPowgn) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.j8734b) }),
                (0, a.jsx)("div", {
                    className: B()(z.eT, z.QB),
                    children: (0, a.jsx)(V.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, a.jsx)(eu.Q, {
                    text: Q.intl.string(Q.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(nh.A.getArticleURL(b.MVz.GIFTING), "_blank"),
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
                    children: (0, a.jsx)(V.$, {
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
                    children: (0, a.jsx)(V.$, {
                        text: t ? Q.intl.string(Q.t.CMa9Rv) : Q.intl.string(Q.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, a.jsx)("div", {
                    className: z.Ot,
                    children: (0, a.jsx)(eu.Q, {
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
        return (0, a.jsx)(lB, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: i,
            children: (0, a.jsxs)(k.Ay, {
                children: [
                    (0, a.jsx)(is, { giftCode: e }),
                    (0, a.jsx)("div", {
                        className: z.eT,
                        children: (0, a.jsx)(V.$, {
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
                                  userTag: tr.Ay.getUserTag(t),
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
            { fetchingUser: c, continueOnWeb: u } = this.state;
        if (e === b.fAW.OPEN && !u) return this.renderAppOpened();
        if (e === b.fAW.OPENING) return this.renderSpinner(Q.intl.string(Q.t["Z+hCVU"]));
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
                ? (0, a.jsx)(iz, { giftCode: i, transitionTo: r, location: o })
                : (0, a.jsx)(lP, { giftCodeSKU: t, giftCode: i, transitionTo: r, location: o });
        }
        return null;
    }
}
let lD = m.Ay.connectStores([nO.A, n3.A, eX.default, n7.A, ed.A, n1.A], (e) => {
    let t = e.match.params.giftCode,
        n = nO.A.get(t),
        i = null != n ? n7.A.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: i,
        libraryApplication: null != i && n?.entitlementBranches != null ? n4.YI(n.entitlementBranches, i, n3.A) : null,
        authenticated: eX.default.isAuthenticated(),
        defaultRoute: ed.A.defaultRoute,
        isResolved: nO.A.getIsResolved(t),
        isAccepting: nO.A.getIsAccepting(t),
        libraryApplicationsFetched: n3.A.fetched,
        nativeAppState: n1.A.getState(t),
    };
})(lw);
function lB(e) {
    let { sku: t, children: n, giftCodeCode: i, transitionTo: l } = e,
        s = (0, n2.bF)(t);
    return (o.useEffect(() => {
        null != i && s && l(b.BVt.APP_WITH_GIFT_CODE(i));
    }, [s, i, l]),
    s)
        ? (0, a.jsxs)(k.Ay, {
              children: [(0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.b3lf1c) }), (0, a.jsx)(k.CK, {})],
          })
        : n;
}
var lU = n(871194),
    lV = n(799365),
    lM = n(894778),
    lF = n(315290),
    lW = n(396574),
    lH = n(94654);
m.Ay.initialize();
class lQ extends o.PureComponent {
    componentDidMount() {
        (0, P.d)("guildTemplate"),
            lW.VP || eq.A.launch("discord://" + b.BVt.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && ey.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return lW.VP
            ? (0, a.jsx)("div", { className: z.eT, children: (0, a.jsx)(V.$, { text: e, fullWidth: !0, onClick: t }) })
            : (0, a.jsx)(k.KE, { className: z.eT });
    }
    renderSpinner(e) {
        return (0, a.jsxs)(k.Ay, { children: [(0, a.jsx)(k.hE, { children: e }), (0, a.jsx)(k.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: B()(z.Ot, z.QB), children: Q.intl.string(Q.t.C7ZRNw) }),
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
        return (eF()(null != e, "guild template must not be null"), e.state === iG.QB.RESOLVING)
            ? (0, a.jsx)(k.Ay, { className: lH.sL, children: (0, a.jsx)(lV.A, { guildTemplate: e }) })
            : (0, a.jsx)(lK, { guildTemplate: e });
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
            case iG.QB.RESOLVING:
                return this.renderSpinner(Q.intl.string(Q.t["Z+hCVU"]));
            case iG.QB.RESOLVED:
                if (n || !lW.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, a.jsx)(iz, { guildTemplate: e, transitionTo: i, location: l });
                return (0, a.jsx)(lP, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: l,
                    onRegister: () => {
                        (0, lL.C)(lG.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            lM.A.flowStart(lF.do.ORGANIC_GUILD_TEMPLATES, lF.ju.NUF_STARTED);
                    },
                });
            case iG.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function lK(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, lU.A)(t, !1);
    lM.A.flowStep(lF.do.ORGANIC_GUILD_TEMPLATES, lF.jC.GUILD_CREATE);
    let l = (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(k.hE, { className: lH.wx, children: Q.intl.string(Q.t.UNFvtM) }),
            n,
            (0, a.jsx)("div", {
                className: lH.Tf,
                children: (0, a.jsx)(V.$, { text: Q.intl.string(Q.t.xr59t7), fullWidth: !0, onClick: i }),
            }),
        ],
    });
    return (0, a.jsx)(ig, {
        className: lH.sL,
        children: () => [
            (0, a.jsx)(ix.A, { guildTemplate: t }, "template"),
            (0, a.jsx)("div", { className: lH.KJ, children: l }, "contents"),
        ],
    });
}
function lz(e, t, n) {
    e.preventDefault(),
        y.default.track(b.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        });
    let i = eX.default.getFingerprint(),
        l = null != i ? i : eX.default.getId();
    ey.A.openMobileApp(n.state === iG.QB.RESOLVED ? t : void 0, l);
}
function lX(e) {
    let { code: t } = e,
        n = (0, m.bG)([eS.A], () => eS.A.getGuildTemplate(t));
    return (o.useEffect(() => {
        (0, P.d)("guild_template_mobile");
    }, []),
    null == n || n.state === iG.QB.RESOLVING)
        ? (0, a.jsx)(k.Ay, { children: (0, a.jsx)(ek.y, {}) })
        : n.state === iG.QB.RESOLVED
          ? (0, a.jsxs)(k.Ay, {
                children: [
                    (0, a.jsx)(lV.A, { guildTemplate: n, tall: !0 }),
                    (0, a.jsx)("div", {
                        className: z.QX,
                        children: (0, a.jsx)(V.$, {
                            text: Q.intl.string(Q.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => lz(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, a.jsx)(e4, {
                text: Q.intl.string(Q.t["e/rZ2n"]),
                buttonCta: Q.intl.string(Q.t.HAvYn0),
                onClick: (e) => lz(e, t, n),
            });
}
m.Ay.initialize(), n(938796);
var lq = n(821418),
    lY = n(665260),
    l$ = n(362474),
    lZ = n(695366),
    lJ = n(964486),
    l0 = n(921037),
    l1 = n(4274);
m.Ay.initialize();
let l2 = "register",
    l3 = "login";
function l7(e) {
    let { message: t, onClick: n, invite: i, className: l } = e,
        s = i?.guild_scheduled_event != null;
    return lW.VP
        ? (0, a.jsx)("div", {
              className: l ?? (s ? z.QX : z.eT),
              children: (0, a.jsx)(V.$, { text: t, onClick: n, variant: s ? "active" : "primary", fullWidth: !0 }),
          })
        : (0, a.jsx)(k.KE, { className: l ?? z.eT });
}
function l4(e) {
    let { invite: t, inviteKey: n, handleAccept: i, handleDefaultTransition: l } = e,
        s = (0, m.bG)([e9.A], () => (t.state === b.elq.ERROR ? e9.A.getInviteError(n) : void 0)),
        r = t.guild_scheduled_event,
        o = s?.code === b.t02.INVALID_CANNOT_FRIEND_SELF;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)(k.Ay, {
                children: [
                    null != r
                        ? (0, a.jsx)(lS, { channel: t.channel, guildScheduledEvent: r })
                        : (0, a.jsx)(id.A, { invite: t }),
                    null != s &&
                        (0, a.jsx)("div", {
                            className: z.QX,
                            role: "alert",
                            children: (0, a.jsxs)(U.E, {
                                variant: "text-sm/medium",
                                color: "text-feedback-critical",
                                style: { display: "flex", alignItems: "center", gap: 4 },
                                children: [
                                    (0, a.jsx)(lZ.E, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                                    " ",
                                    (0, l1.s)(s.code),
                                ],
                            }),
                        }),
                    (0, a.jsx)(l7, {
                        invite: t,
                        message: Q.intl.string(o ? Q.t.fIv16B : Q.t.ohMvm1),
                        onClick: o ? l : i,
                        className: null != s ? z.QX : void 0,
                    }),
                ],
            }),
            null != r &&
                null != t.guild &&
                (0, a.jsx)(k.Ay, {
                    className: z.QX,
                    children: (0, a.jsx)(lT, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                }),
        ],
    });
}
function l8(e) {
    let { invite: t, inviteKey: n, rpcConnected: i, onContinue: l } = e;
    return (0, a.jsxs)(k.Ay, {
        children: [
            (0, a.jsx)(id.A, { invite: t }),
            lW.VP
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("div", {
                              className: z.QX,
                              children: (0, a.jsx)(V.$, {
                                  text: Q.intl.string(Q.t.UQvCf7),
                                  onClick: function () {
                                      y.default.track(b.HAw.INVITE_CTA_CLICKED, {
                                          action: "open_app",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          i ? p.Ay.openNativeAppModal(n) : p.Ay.openApp(n);
                                  },
                                  variant: "primary",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, a.jsx)("div", {
                              className: z.Ot,
                              children: (0, a.jsx)(V.$, {
                                  text: Q.intl.string(Q.t["2ixEBi"]),
                                  onClick: function () {
                                      y.default.track(b.HAw.INVITE_CTA_CLICKED, {
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
function l5(e) {
    let { title: t } = e;
    return (0, a.jsxs)(k.Ay, { children: [(0, a.jsx)(k.hE, { children: t }), (0, a.jsx)(k.CK, {})] });
}
function l6(e) {
    let { banned: t, handleDefaultTransition: n } = e;
    return (0, a.jsxs)(k.Ay, {
        children: [
            (0, a.jsx)(k.hE, { className: B()(z.Ot, z.QB), children: Q.intl.string(Q.t.kux01N) }),
            (0, a.jsx)(k.tK, { children: t ? Q.intl.string(Q.t["5AkWAd"]) : Q.intl.string(Q.t["+qUJAj"]) }),
            (0, a.jsx)(l7, { message: Q.intl.string(Q.t.fIv16B), onClick: n }),
            (0, a.jsx)("div", {
                className: z.Ot,
                style: { textAlign: "left" },
                children: (0, a.jsx)(eu.Q, {
                    size: "sm",
                    textVariant: "text-sm/medium",
                    text: Q.intl.string(Q.t.urIwn4),
                    onClick: () => window.open(nh.A.getArticleURL(b.MVz.INVALID_INVITES), "_blank"),
                }),
            }),
        ],
    });
}
function l9(e) {
    let { handleDefaultTransition: t } = e;
    return (0, a.jsxs)(k.Ay, {
        children: [
            (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.fOc4gn) }),
            (0, a.jsx)(l7, { message: Q.intl.string(Q.t.fIv16B), onClick: t }),
        ],
    });
}
var se = n(334465);
let st = (0, n(600975).C)({
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
var sn = n(163050);
m.Ay.initialize();
var si = n(701273);
function sl(e) {
    n.g.location.assign(e);
}
m.Ay.initialize(), n(426620), m.Ay.initialize();
let ss = nQ(iz),
    sr = nQ(function (e) {
        let t = o.useCallback(
                (t) => {
                    let n;
                    ((n = (0, se.B)(t, { path: b.BVt.CHANNEL(ns.pv.guildId(), ns.pv.channelId()) })),
                    +(n?.params?.channelId !== N.VV.ROLE_SUBSCRIPTIONS))
                        ? (e.transitionTo ?? G.pX)(t)
                        : G.bG(t);
                },
                [e.transitionTo],
            ),
            { isAuthenticated: n, loginStatus: i } = (0, m.cf)([eX.default], () => ({
                isAuthenticated: eX.default.isAuthenticated(),
                loginStatus: eX.default.getLoginStatus(),
            })),
            { location: l, redirectTo: s } = e,
            [r, u] = o.useState(n);
        function d(e) {
            let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
            (0, E.Qh)({ handoffKey: t, handoffToken: n, handoffSource: i }), u(!1);
        }
        return ((0, lJ.Ay)(() => {
            if (null != l) {
                let { handoff_key: e, handoff_token: t } = (0, c.parse)(l.search);
                if (null != e && null != t) {
                    let n = null != s ? C(s) : void 0;
                    r
                        ? x.A.logout("handoff", null).finally(() => {
                              d({ handoffKey: e, handoffToken: t, handoffSource: n });
                          })
                        : d({ handoffKey: e, handoffToken: t, handoffSource: n });
                }
            }
        }),
        r || i === b.aUe.LOGGING_IN)
            ? (0, a.jsx)(k.Ay, { children: (0, a.jsx)(ek.y, {}) })
            : (0, a.jsx)(iz, { ...e, transitionTo: t });
    }),
    sa = nQ(function (e) {
        let { inviteKey: t, location: n, transitionTo: i, login: l } = e,
            s = o.useMemo(() => (0, eY.m0)(t), [t]),
            r = (0, m.bG)([e9.A], () => e9.A.getInvite(t)),
            c = (0, m.bG)([n1.A], () => n1.A.getState(s)),
            u = (0, m.bG)([eX.default], () => eX.default.isAuthenticated()),
            d = (0, m.bG)([ed.A], () => ed.A.defaultRoute),
            h = (0, m.bG)([iJ], () => iJ.isUnderageAnonymous()),
            [x, f] = o.useState(!1);
        o.useLayoutEffect(() => {
            (c === b.fAW.OPEN || r?.state === b.elq.APP_OPENED) && f(!0);
        }, [r?.state, c]);
        let A = l ? l3 : l2,
            E = o.useCallback((e) => p.Ay.getInviteContext(e, r), [r]),
            _ = o.useCallback(
                (e) => {
                    null != r &&
                        (null != r.channel || e?.channel != null) &&
                        (r.guild?.id != null
                            ? p.Ay.transitionToInviteOnboarding(e ?? r, { transitionTo: i })
                            : p.Ay.transitionToInvite(e ?? r, { transitionTo: i }));
                },
                [r, i],
            ),
            j = o.useCallback(() => {
                y.default.track(b.HAw.INVITE_CTA_CLICKED, {
                    action: "accept_invite",
                    invite_code: r?.code,
                    guild_id: r?.guild?.id,
                }),
                    p.Ay.acceptInvite({
                        inviteKey: t,
                        context: E(b.S3d.INVITE),
                        skipOnboarding: !0,
                        callback: (e) => {
                            ei(e), null != e.channel && p.Ay.openApp(t, e.channel.id);
                        },
                    }).catch(() => {});
            }, [t, E, r?.code, r?.guild?.id]),
            N = o.useCallback(() => {
                i(d);
            }, [d, i]);
        if (
            ((0, lJ.Ay)(() => {
                let e = eX.default.getAnalyticsToken();
                if (
                    (null != e &&
                        g.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eX.default.getId() }),
                    y.default.track(b.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }),
                    (0, P.d)("invite"),
                    lW.VP || eq.A.launch("discord://" + b.BVt.INVITE(t), () => void 0),
                    !l && h)
                ) {
                    let { baseCode: e } = (0, eY.y$)(t);
                    (0, G.bG)(b.BVt.INVITE_LOGIN(e));
                }
            }),
            o.useEffect(() => {
                r?.state === b.elq.APP_NOT_OPENED && _();
            }, [r?.state, _]),
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
                    u = (0, ia.A)(i),
                    d = (0, ia.A)(l);
                o.useEffect(() => {
                    if (s === l3 && i && !1 === u) {
                        let e = eX.default.getFingerprint();
                        if (null != e) {
                            let i = (0, ez.d)(e);
                            y.default.track(b.HAw.INVITE_LOGIN_SUCCESSFUL, {
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
                }, [i, u, s, r, a, t, n]),
                    o.useEffect(() => {
                        if (null != t && s === l2 && i && !1 === u) {
                            let { channel: e } = t;
                            if (null != e)
                                if (((0, lL.C)(lG.zY.INVITE_UNCLAIMED), null != t.guild)) {
                                    let e = (0, lY.Lt)(t.flags ?? 0, lq.Q.IS_APPLICATION_BYPASS),
                                        n =
                                            t.guild.features?.includes(
                                                b.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED,
                                            ) &&
                                            t.guild.features?.includes(
                                                b.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL,
                                            );
                                    !e && n
                                        ? c(b.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id))
                                        : p.Ay.transitionToInviteOnboarding(t, { transitionTo: c });
                                } else p.Ay.transitionToInvite(t, { transitionTo: c });
                        }
                    }, [t, i, u, c, s, n]),
                    o.useEffect(() => {
                        null == t ||
                            (l !== d &&
                                (l === b.fAW.OPEN
                                    ? y.default.track(
                                          b.HAw.INVITE_APP_INVOKED,
                                          {
                                              invite_code: (0, eY.m0)(n),
                                              guild_id: t.guild?.id,
                                              channel_id: t.channel?.id,
                                              inviter_id: t.inviter?.id,
                                              user_is_member: null != t.guild && null != e6.A.getGuild(t.guild.id),
                                              size_total: t.approximate_member_count,
                                              invite_type: null != t.type ? ta.Xd[t.type] : void 0,
                                          },
                                          { flush: !0 },
                                      )
                                    : l === b.fAW.OPEN_FAIL &&
                                      y.default.track(b.HAw.INVITE_APP_INVOKE_FAILED, {
                                          invite_code: (0, eY.m0)(n),
                                          reason: "rpc_failed",
                                          invite_type: null != t.type ? ta.Xd[t.type] : void 0,
                                      })));
                    }, [t, l, d, n]);
            })({
                invite: r,
                inviteKey: t,
                authenticated: u,
                nativeAppState: c,
                mode: A,
                getAcceptInviteContext: E,
                handleContinue: _,
                transitionTo: i,
            }),
            null == r)
        )
            return null;
        let I = c === b.fAW.OPEN;
        if (x || I || r.state === b.elq.APP_OPENED)
            return (0, a.jsx)(l8, { invite: r, inviteKey: t, rpcConnected: I, onContinue: _ });
        let { state: v } = r;
        if (v === b.elq.APP_NOT_OPENED) return (0, a.jsx)(l9, { handleDefaultTransition: N });
        if ([b.elq.RESOLVING, b.elq.ACCEPTING, b.elq.APP_OPENING].includes(v)) {
            let e =
                v === b.elq.ACCEPTING ? Q.intl.string(Q.t["6wsY16"]) : (b.elq.RESOLVING, Q.intl.string(Q.t["Z+hCVU"]));
            return (0, a.jsx)(l5, { title: e });
        }
        if (v === b.elq.EXPIRED) return (0, a.jsx)(l6, { banned: !1, handleDefaultTransition: N });
        if (v === b.elq.BANNED) return (0, a.jsx)(l6, { banned: !0, handleDefaultTransition: N });
        if (v === b.elq.RESOLVED) {
            if (u && (0, lY.Lt)(r.flags ?? 0, lq.Q.IS_GUEST_INVITE))
                return (
                    p.Ay.openApp(t),
                    l$.u.set(l0.B, t),
                    (0, a.jsx)(l8, { invite: r, inviteKey: t, rpcConnected: I, onContinue: () => i(b.BVt.APP) })
                );
            if (!u && lW.VP)
                return A === l3
                    ? (0, a.jsx)(iz, { invite: r, transitionTo: i, location: n })
                    : (0, a.jsx)(lP, {
                          invite: r,
                          onLoginStart: function () {
                              y.default.track(b.HAw.INVITE_LOGIN, {
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
        return v === b.elq.RESOLVED || v === b.elq.ERROR
            ? (0, a.jsx)(l4, { invite: r, inviteKey: t, handleAccept: j, handleDefaultTransition: N })
            : null;
    }),
    so = nQ(function (e) {
        let t = {
            guildTemplate: (0, m.bG)([eS.A], () => eS.A.getGuildTemplate(e.code)),
            nativeAppState: (0, m.bG)([n1.A], () => n1.A.getState(e.code)),
            authenticated: (0, m.bG)([eX.default], () => eX.default.isAuthenticated()),
            defaultRoute: (0, m.bG)([ed.A], () => ed.A.defaultRoute),
        };
        return (0, a.jsx)(lQ, { ...e, ...t });
    }),
    sc = nQ(lD),
    su = nQ(function (e) {
        let { inviteKey: t, transitionTo: n } = e,
            i = (0, m.bG)([e9.A], () => e9.A.getInvite(t));
        return (
            o.useEffect(() => {
                let e = eX.default.getAnalyticsToken();
                null != e &&
                    g.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eX.default.getId() }),
                    (0, P.d)("invite_mobile"),
                    y.default.track(b.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 });
            }, []),
            (0, a.jsx)(t5, {
                invite: i,
                onAcceptInvite: function (e) {
                    let n, l, s, r;
                    e?.preventDefault(),
                        y.default.track(
                            b.HAw.INVITE_APP_OPENED,
                            {
                                invite_code: (0, eY.m0)(t),
                                guild_id: i?.guild?.id,
                                channel_id: i?.channel?.id,
                                inviter_id: i?.inviter?.id,
                                invite_type: null != i && i?.type != null ? ta.Xd[i?.type] : void 0,
                                user_is_member: null != i && null != i.guild && null != e6.A.getGuild(i.guild.id),
                                size_total: i?.approximate_member_count,
                                time_to_click_ms: Math.round(performance.now()),
                            },
                            { flush: !0 },
                        ),
                        (n = null != i && i.state !== b.elq.EXPIRED && i.state !== b.elq.BANNED ? t : void 0),
                        (s = null != (l = eX.default.getFingerprint()) ? l : eX.default.getId()),
                        (r = null != i && i?.type != null ? Number(i?.type) : void 0),
                        p.Ay.openApp(n, void 0, s, void 0, r);
                },
                transitionTo: n,
            })
        );
    }),
    sd = nQ(lP),
    sh = nQ(function (e) {
        let { location: t, transitionTo: i = G.pX } = e,
            [l, s] = o.useState("submitting");
        function r() {
            return "Android" === eH().os.family || "iOS" === eH().os.family
                ? null
                : (0, a.jsx)(V.$, {
                      text: Q.intl.string(Q.t.dKhVQN),
                      fullWidth: !0,
                      onClick: () => i(b.BVt.LOGIN, { source: "authorizeIPAdress" }),
                  });
        }
        return ((0, lJ.Ay)(() => {
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
    sm = nQ(function (e) {
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
    sg = nQ(function (e) {
        let { location: t, transitionTo: n = sl } = e,
            [i, l] = o.useState("submitting"),
            s = o.useRef(void 0);
        (0, lJ.Ay)(() => {
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
            c = o.useCallback(() => {
                y.default.track(b.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: s.current }),
                    (0, si.A)("verify_email");
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
    sx = nQ(function () {
        let [e, t] = o.useState(""),
            [i, l] = o.useState(""),
            [s, r] = o.useState(!1),
            [c, u] = o.useState(!1),
            [d, h] = o.useState(null),
            [g, x] = o.useState(null),
            f = (0, m.bG)([eE.A], () => eE.A.getCountryCode()),
            p = f.code.split(" ")[0];
        async function A() {
            try {
                await ep.A.resendCode(e);
            } catch (e) {
                x(e.body.message);
            }
        }
        async function E() {
            r(!0);
            try {
                let { token: t } = await ep.A.verifyPhone(p + e, i);
                h(null), x(null), u(!0), ep.A.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (h(null), x(e.body.message)) : (h(e.body.phone), x(e.body.code));
            } finally {
                r(!1);
            }
        }
        let _ = (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k._V, { src: n(142041) }),
                (0, a.jsxs)(k.hE, {
                    className: B()(z.QX, ej.Uu, ej.wq, ej.Hu),
                    children: [
                        Q.intl.string(Q.t.WWzQta),
                        (0, a.jsx)(ef.y, { size: "md", color: "currentColor", className: z.oY }),
                    ],
                }),
            ],
        });
        return c
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
                                  alpha2: f.alpha2,
                                  countryCode: p,
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
                              (0, a.jsx)(eu.Q, { text: Q.intl.string(Q.t["5b60gi"]), onClick: A }),
                              (0, a.jsx)("div", {
                                  className: z.QX,
                                  children: (0, a.jsx)(V.$, {
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
    sf = nQ(sn.A),
    sp = nQ(nJ),
    sA = nQ(ex),
    sE = nQ(function (e) {
        let { location: t } = e,
            [n, i] = o.useState(!1),
            { verifySuccess: l, verifyErrors: s, redirectGuildId: r } = (0, m.bG)([eV], () => eV.getState());
        function c() {
            let e, t;
            (e = (function (e) {
                let t = eH().os?.family;
                if ("Android" === t || "iOS" === t) {
                    let t = eX.default.getFingerprint(),
                        n = (0, eK.I_)();
                    return (
                        eF()(null != e, "generateAppPath: guildId cannot be null"),
                        (0, eK.Ay)((0, eQ.jN)(e), { utmSource: "verify_hub_email", fingerprint: t, attemptId: n })
                    );
                }
                return "discord://";
            })(r)),
                null != (t = (0, eK.X7)(e)) &&
                    y.default.track(b.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, ez.v)(t.fingerprint),
                        attempt_id: t.attemptId,
                        source: t.utmSource,
                    }),
                eq.A.launch(e, (e) => {
                    e || (0, G.bG)(ed.A.fallbackRoute);
                }),
                i(!0);
        }
        return (o.useEffect(() => {
            let e = (0, em.A)(t);
            eR.A.verify(e), (0, P.d)("verify_hub_email");
        }, [t]),
        n)
            ? (0, a.jsx)(eP, {
                  title: Q.intl.string(Q.t.csrAMJ),
                  subtitle: Q.intl.string(Q.t["m1+IBn"]),
                  buttonText: Q.intl.string(Q.t.fIv16B),
                  onButtonClick: () => (0, G.pX)(b.BVt.CHANNEL(r)),
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
    s_ = nQ(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, nz.W)(ni.XK.CHANNEL, {
                guildId: e.params.guildId,
                channelId: e.params.channelId,
                messageId: e.params.messageId,
                search: t.search,
            });
        }
        return (0, a.jsx)(nY, { match: t, location: n, attemptDeepLink: i });
    }),
    sj = nQ(function (e) {
        let { match: t, location: n } = e;
        async function i(e) {
            await (0, nz.W)(ni.XK.GAME_SHOP, {
                guildId: e.params.guildId,
                pageIndex: e.params.pageIndex,
                skuId: e.params.skuId,
                slug: e.params.slug,
            });
        }
        return (0, a.jsx)(nY, { match: t, location: n, attemptDeepLink: i });
    }),
    sN = nQ(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, nz.W)(ni.XK.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search,
            });
        }
        return (0, a.jsx)(nY, { match: t, location: n, attemptDeepLink: i });
    }),
    sI = nQ(function (e) {
        let { location: t } = e,
            n = (0, m.bG)([eX.default], () => eX.default.isAuthenticated()),
            i = (0, m.bG)([ev.A], () => ev.A.hasLoadedExperiments),
            l = st.useExperiment({ location: "RSL - Landing Page" }, { autoTrackExposure: !0 }).enabled,
            [s, r] = o.useState(!1),
            [c, u] = o.useState(Q.intl.string(Q.t["9exy+V"])),
            [d, h] = o.useState(!0);
        function g(e) {
            switch (e) {
                case b.t02.INVALID_FORM_BODY:
                case b.t02.DSA_RSL_REPORT_NOT_FOUND:
                    u(Q.intl.string(Q.t.bzXDfc));
                    break;
                case b.t02.DSA_RSL_ALREADY_REQUESTED:
                    u(Q.intl.string(Q.t.rV00wq));
                    break;
                case b.t02.DSA_RSL_LIMITED_TIME:
                    u(Q.intl.string(Q.t["0dI29h"]));
                    break;
                case b.t02.DSA_RSL_REPORT_INELIGIBLE:
                    u(Q.intl.string(Q.t["RGa/Gb"]));
                    break;
                default:
                    u(Q.intl.string(Q.t["0QLzfv"]));
            }
        }
        return (
            o.useEffect(() => {
                n
                    ? (h(!0),
                      nc
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
                        let t = null != e ? await (0, nd.q)(e) : void 0;
                        null != t ? u(Q.intl.string(Q.t.e6mZMt)) : g(t.body?.code);
                    } catch (e) {
                        g(e.body?.code);
                    } finally {
                        r(!1);
                    }
                }
                r(!0), e((0, em.A)(t)), (0, P.d)("report_second_look");
            }, [t]),
            l &&
                !d &&
                (0, a.jsxs)(k.Ay, {
                    children: [(0, a.jsx)(k.hE, { className: z.QB, children: c }), s && (0, a.jsx)(ek.y, {})],
                })
        );
    }),
    sv = nQ(et),
    sC = nQ(function (e) {
        let { match: t, location: i } = e,
            l = (0, c.parse)(i.search).token,
            [s, r] = o.useState("loading"),
            u = o.useRef(!1),
            h = o.useCallback(async (e) => {
                try {
                    y.default.track(b.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                        await x.A.oneTimeLogin(e),
                        r("login_success"),
                        y.default.track(b.HAw.LOGIN_SUCCESSFUL, { source: "web_page", login_method: "one_time_login" }),
                        n.g.location.assign(b.BVt.APP);
                } catch (t) {
                    let e = t instanceof Error ? t.message : "Unknown error";
                    y.default.track(b.HAw.ONE_TIME_LOGIN_ERROR, {
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
                        ? (y.default.track(b.HAw.DEEP_LINK_CLICKED, {
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
                                type: ni.XK.ONE_TIME_LOGIN,
                                params: { token: e, fingerprint: t, installationId: i },
                            })
                                .then((n) => {
                                    n
                                        ? (y.default.track(b.HAw.DEEP_LINK_CLICKED, {
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
                    t = d.Fr ? "mobile" : d.v1 ? "tablet" : (0, t6.isDesktop)() ? "desktop_app" : "web";
                if ((y.default.track(b.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: e, device_type: t }), !e))
                    return void r("error");
                if (d.Fr || d.v1) {
                    let e = y.default.getSuperProperties()?.os;
                    y.default.track(b.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_ui_shown",
                        device_type: t,
                        platform: e,
                    });
                    return;
                }
                (0, t6.isDesktop)() ? h(l) : u.current || ((u.current = !0), r("rpc_attempting"), g(l));
            }, [l, i, h, g]),
            d.Fr || d.v1)
        ) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, a.jsx)(nn, { token: l, hasError: "error" === s, errorReason: e });
        }
        if ((0, G.MX)()) return null;
        if ("app_launched" === s)
            return (0, a.jsx)(nl, {
                title: Q.intl.string(Q.t.RvUUOy),
                subtitle: Q.intl.string(Q.t["5/lR0g"]),
                buttonText: Q.intl.string(Q.t["2ixEBi"]),
                buttonOnClick: () => {
                    y.default.track(b.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: s }), h(l);
                },
            });
        if ("app_launch_not_supported" === s)
            return (0, a.jsx)(nl, {
                title: Q.intl.string(Q.t.qq4tjT),
                subtitle: Q.intl.string(Q.t.CVxYRo),
                buttonText: Q.intl.string(Q.t["2ixEBi"]),
                buttonOnClick: () => h(l),
            });
        if ("error" === s) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, a.jsx)(nl, {
                title: Q.intl.string(Q.t.RtCSr1),
                subtitle: Q.intl.string(Q.t["S+YjYJ"]),
                buttonText: Q.intl.string(Q.t.j3cG2p),
                buttonOnClick: () => {
                    y.default.track(b.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                        (0, G.pX)(b.BVt.LOGIN);
                },
            });
        }
        return (0, a.jsx)(k.Ay, { children: (0, a.jsx)(k.CK, {}) });
    });
class sS extends o.PureComponent {
    state = { splash: null, redirectTo: null, backgroundId: null };
    static getDerivedStateFromProps(e, t) {
        let { invite: n, location: i } = e,
            { backgroundId: l } = t,
            s = (0, c.parse)(i.search).redirect_to ?? null;
        (null == s || "" === s || s.startsWith(b.BVt.ME) || (!(0, h.e)(s) && !eo(s))) && (s = null);
        let r = null;
        if (null == n) r = (0, nk.u8)(s);
        else {
            let { guild: e, target_application: t } = n;
            null != t
                ? null != l && (r = (0, nL.uD)(t.id, l, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (r = te.Ay.getGuildSplashURL({ id: e.id, splash: e.splash }));
        }
        return { redirectTo: s, splash: r };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        null != e &&
            (!t && n && x.A.getExperiments(!0),
            null != eX.default.getInstallationForTracking() && (0, eC.Tv)(null),
            y.default.track(
                b.HAw.INVITE_OPENED,
                { invite_code: (0, eY.m0)(e), load_time: nP.getTimeSinceNavigationStart() },
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
                (0, nL.RG)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await p.Ay.resolveInvite(e, b.S3d.INVITE, { withGames: !0 });
        if (null != t && (ei(t), null != t.type && ta.uR.has(t.type))) {
            if ("denied" === (await eI()))
                return void y.default.track(b.HAw.INVITE_APP_INVOKE_FAILED, {
                    invite_code: (0, eY.m0)(e),
                    reason: "lna_denied",
                    invite_type: ta.Xd[t.type],
                });
            p.Ay.openNativeAppModal(e);
        }
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (y.default.track(
                b.HAw.GUILD_TEMPLATE_OPENED,
                { guild_template_code: e, load_time: nP.getTimeSinceNavigationStart() },
                { flush: !0 },
            ),
            ey.A.resolveGuildTemplate(e),
            ey.A.openNativeAppModal(e));
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
        return (0, a.jsxs)(nK.A, {
            splash: e,
            children: [
                (0, a.jsx)(en.A, { path: b.BVt.LOGIN_HANDOFF, render: (e) => (0, a.jsx)(sr, { ...e, redirectTo: t }) }),
                (0, a.jsx)(en.A, { path: b.BVt.LOGIN_ONE_TIME, render: (e) => (0, a.jsx)(sC, { ...e }) }),
                (0, a.jsx)(en.A, {
                    impressionName: u.ImpressionNames.USER_LOGIN,
                    path: b.BVt.LOGIN,
                    render: (e) => (0, a.jsx)(ss, { ...e, redirectTo: t }),
                }),
                (0, a.jsx)(en.A, {
                    impressionName: u.ImpressionNames.USER_REGISTRATION,
                    path: b.BVt.REGISTER,
                    render: (e) => (0, a.jsx)(sd, { ...e, redirectTo: t }),
                }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, a.jsx)(sc, { login: !0, ...e }),
                }),
                (0, a.jsx)(en.A, { path: b.BVt.GIFT_CODE(":giftCode"), render: (e) => (0, a.jsx)(sc, { ...e }) }),
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
                            ? (0, a.jsx)(su, { inviteKey: s, transitionTo: l }, s)
                            : (0, a.jsx)(
                                  sa,
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
                            ? (0, a.jsx)(lX, { code: t }, t)
                            : (0, a.jsx)(so, {
                                  code: t,
                                  location: i,
                                  transitionTo: l,
                                  login: n === b.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, a.jsx)(en.A, { path: b.BVt.VERIFY, render: (e) => (0, a.jsx)(sg, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.VERIFY_HUB_EMAIL, render: (e) => (0, a.jsx)(sE, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.VERIFY_REQUEST, render: (e) => (0, a.jsx)(sx, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.DISABLE_EMAIL_NOTIFICATIONS, render: (e) => (0, a.jsx)(sp, { ...e }) }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, a.jsx)(sA, { ...e }),
                }),
                (0, a.jsx)(en.A, { path: b.BVt.AUTHORIZE_IP, render: (e) => (0, a.jsx)(sh, { ...e }) }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.REJECT_IP,
                    render: (e) => (0, a.jsx)(sf, { source: b.BVt.REJECT_IP, ...e }),
                }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.REJECT_MFA,
                    render: (e) => (0, a.jsx)(sf, { source: b.BVt.REJECT_MFA, ...e }),
                }),
                (0, a.jsx)(en.A, { path: b.BVt.AUTHORIZE_PAYMENT, render: (e) => (0, a.jsx)(sm, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.RESET, render: (e) => (0, a.jsx)(sf, { source: b.BVt.RESET, ...e }) }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, a.jsx)(sN, { ...e }),
                }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.CHANNELS_GAME_SHOP(ns.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, a.jsx)(sj, { ...e }),
                }),
                (0, a.jsx)(en.A, {
                    path: b.BVt.CHANNEL(ns.pv.guildId(), ns.pv.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, a.jsx)(s_, { ...e }),
                }),
                (0, a.jsx)(en.A, { path: b.BVt.REPORT, render: () => (0, a.jsx)(nR, {}) }),
                (0, a.jsx)(en.A, { path: b.BVt.REPORT_SECOND_LOOK, render: (e) => (0, a.jsx)(sI, { ...e }) }),
                (0, a.jsx)(en.A, { path: b.BVt.ACCOUNT_REVERT(":token"), render: (e) => (0, a.jsx)(sv, { ...e }) }),
            ],
        });
    }
}
let sy = m.Ay.connectStores([eX.default, e9.A, nO.A, ev.A, eS.A], (e) => {
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
        gift: null != s ? nO.A.get(s) : null,
        invite: null != l ? e9.A.getInvite(l) : null,
        guildTemplate: null != r ? eS.A.getGuildTemplate(r) : null,
        hasLoadedExperiments: ev.A.hasLoadedExperiments,
    };
})(sS);
