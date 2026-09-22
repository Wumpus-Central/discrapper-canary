(n.r(t), n.d(t, { default: () => sD }));
var i,
    l,
    s,
    r,
    a,
    o = n(477900),
    u = n(582128),
    c = n(492462),
    d = n(562708),
    h = n(607399),
    m = n(470562),
    g = n(17928),
    f = n(228366),
    p = n(830215),
    x = n(869038),
    A = n(376728),
    E = n(636537),
    _ = n(6981),
    j = n(376943),
    N = n(718446),
    C = n(746080),
    v = n(355097),
    I =
        (((i = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (i.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        (i.GUILD_ANALYTICS_SETTING = "guild_analytics_setting"),
        (i.GAME_CLAIM = "game_claim"),
        i);
function S(e) {
    let t = decodeURIComponent(e),
        n = (0, j.vu)(t);
    return null != n && n.channelId === C.VV.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t.toLowerCase() === (0, N.settingsPathToRoute)(v.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)
          ? "role_subscription_setting"
          : void 0;
}
var T = n(115036),
    y = n(174459),
    b = n(272355),
    R = n(652215);
function L(e, t) {
    y.default.track(R.HAw.BROWSER_HANDOFF_SUCCEEDED, { authenticated: e, handoff_source: t });
}
class O extends b.A {
    _initialize() {
        (f.h.subscribe("BROWSER_HANDOFF_END", this.handleEnd),
            f.h.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff));
    }
    _terminate() {
        (f.h.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd),
            f.h.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff));
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: i, handoffSource: l } = e;
        null != n
            ? E.Bo.post({ url: R.Rsh.HANDOFF_EXCHANGE, body: { key: t, handoff_token: n }, rejectWithError: !1 }).then(
                  (e) => {
                      let { body: t } = e;
                      ((0, _.uA)(t.user), p.A.loginToken(t.token, !1), L(!0, l));
                  },
                  (e) => {
                      (null != i && L(!1, l),
                          p.A.setFingerprint(i),
                          (0, _.mZ)(),
                          l === I.ROLE_SUBSCRIPTION &&
                              y.default.track(R.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: e.message ?? e.text,
                                  handoff_source: l,
                              }));
                  },
              )
            : null != i
              ? (p.A.setFingerprint(i), L(!1, l), (0, _.mZ)())
              : (p.A.setFingerprint(i), (0, _.J0)());
    }
    handleEnd = (e) => {
        let { handoffToken: t, fingerprint: n } = e,
            i = T.A.key;
        null != i && T.A.isHandoffAvailable()
            ? this.handleHandoff({ handoffKey: i, handoffToken: t, fingerprint: n, handoffSource: void 0 })
            : (p.A.setFingerprint(null), (0, _.J0)());
    };
}
let k = new O();
var D = n(854378),
    w = n(976860),
    G = n(210714),
    P = n(430690),
    U = n(503698),
    F = n.n(U),
    B = n(834730),
    V = n(821609),
    M = n(181658),
    H = n(625494),
    W = n(499785),
    Q = (((l = {}).START = "start"), (l.PASSWORD = "password"), (l.SUCCESS = "success"), (l.FAILED = "failed"), l),
    K = n(375708),
    z = n(652989),
    X = n(221851);
function q(e) {
    let { setOriginalEmail: t, setSlide: i, ready: l, token: s } = e,
        [r, a] = u.useState(!1),
        [c, h] = u.useState(null),
        [m, g] = u.useState(null),
        [f, p] = u.useState(""),
        x = u.useRef(null);
    return (
        u.useEffect(() => {
            l && x.current?.focus();
        }, [l]),
        (0, o.jsxs)("div", {
            children: [
                (0, o.jsx)(D._V, { src: null == m ? n(79418) : n(579656), className: F()(X.SX, X.Ot) }),
                (0, o.jsx)(D.hE, { children: K.intl.string(K.t.IfBQ56) }),
                null != m && "" !== m
                    ? (0, o.jsx)(B.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: m })
                    : null,
                (0, o.jsxs)(D.eB, {
                    className: F()(X.SX, X.QX),
                    children: [
                        (0, o.jsx)(D.pd, {
                            name: "password",
                            type: "password",
                            label: K.intl.string(K.t["8dM4FO"]),
                            setRef: x,
                            className: X.SX,
                            value: f,
                            onChange: p,
                            error: c,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: K.intl.string(K.t["yY/PXY"]),
                        }),
                        (0, o.jsx)("div", {
                            className: X.Ot,
                            children: (0, o.jsx)(V.$, {
                                text: K.intl.string(K.t.ezv91b),
                                fullWidth: !0,
                                onClick: function () {
                                    if (!r) {
                                        if (0 === f.length) {
                                            (h(K.intl.string(K.t.R98xD5)), H._.dispatch(R.jej.WAVE_EMPHASIZE));
                                            return;
                                        }
                                        return (
                                            null != m && g(null),
                                            null != c && h(null),
                                            t(""),
                                            a(!0),
                                            W.A.post({
                                                url: R.Rsh.ACCOUNT_REVERT,
                                                body: { token: s, password: f },
                                                trackedActionData: { event: d.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    (p(""), t(n), i(Q.SUCCESS));
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        g(
                                                            K.intl.formatToPlainString(K.t.aTVNes, {
                                                                statusPageURL: R.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new M.A(e);
                                                        t.hasFieldErrors()
                                                            ? h(t.getAnyErrorMessage())
                                                            : g(
                                                                  (function (e) {
                                                                      switch (e) {
                                                                          case R.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                              return K.intl.string(K.t["11zzGR"]);
                                                                          case R.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                              return K.intl.string(K.t["6qmgaI"]);
                                                                          case R.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                              return K.intl.string(K.t.bChnKs);
                                                                          default:
                                                                              return K.intl.format(K.t.aTVNes, {
                                                                                  statusPageURL: R.qF7.STATUS,
                                                                              });
                                                                      }
                                                                  })(t.code).toString(),
                                                              );
                                                    }
                                                    H._.dispatch(R.jej.WAVE_EMPHASIZE);
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
                (0, o.jsx)("div", {
                    className: z.UD,
                    children: (0, o.jsx)(V.$, {
                        text: K.intl.string(K.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: function () {
                            (p(""), i(Q.START));
                        },
                    }),
                }),
            ],
        })
    );
}
var Y = n(825484),
    $ = n(749314);
function Z(e) {
    let { children: t } = e;
    return (0, o.jsx)("li", {
        className: z.Aw,
        children: (0, o.jsx)(B.E, { variant: "text-sm/medium", color: "text-default", children: t }),
    });
}
function J(e) {
    let { setSlide: t, transitionTo: i } = e;
    return (0, o.jsxs)("div", {
        children: [
            (0, o.jsx)(D._V, { src: n(79418), className: F()(X.SX, X.Ot) }),
            (0, o.jsx)(D.hE, { className: X.QB, children: K.intl.string(K.t["8UcxI6"]) }),
            (0, o.jsx)(B.E, { variant: "text-md/normal", children: K.intl.string(K.t.O37hMl) }),
            (0, o.jsxs)(D.eB, {
                className: F()(X.SX, X.QX),
                children: [
                    (0, o.jsx)(B.E, { variant: "text-sm/normal" }),
                    (0, o.jsxs)("ul", {
                        className: z.qI,
                        children: [
                            (0, o.jsx)(Z, { children: K.intl.string(K.t.Gj1Zry) }),
                            (0, o.jsx)($.A, {}),
                            (0, o.jsx)(Z, { children: K.intl.string(K.t["8C6t3B"]) }),
                            (0, o.jsx)($.A, {}),
                            (0, o.jsx)(Z, { children: K.intl.string(K.t.mToZMA) }),
                            (0, o.jsx)($.A, {}),
                            (0, o.jsx)(Z, { children: K.intl.string(K.t.TPEvkc) }),
                            (0, o.jsx)($.A, {}),
                            (0, o.jsx)(Z, { children: K.intl.string(K.t.H8Y1Ln) }),
                        ],
                    }),
                ],
            }),
            (0, o.jsxs)(Y.e, {
                direction: "vertical",
                fullWidth: !0,
                className: z.UD,
                children: [
                    (0, o.jsx)(V.$, { text: K.intl.string(K.t.GgCRqR), onClick: () => t(Q.PASSWORD) }),
                    (0, o.jsx)(V.$, {
                        text: K.intl.string(K.t["B/yHcQ"]),
                        variant: "secondary",
                        onClick: () => i(R.BVt.LOGIN, { source: "account_revert" }),
                    }),
                ],
            }),
        ],
    });
}
function ee(e) {
    let { email: t } = e;
    return (0, o.jsxs)("div", {
        children: [
            (0, o.jsx)(D._V, { src: n(79418), className: F()(X.SX, X.Ot) }),
            (0, o.jsx)(D.hE, { children: K.intl.string(K.t.ailkVG) }),
            (0, o.jsx)(D.tK, { children: K.intl.format(K.t["4ZMVCI"], { email: t }) }),
            (0, o.jsx)(B.E, {
                className: F()(X.QB, X.QX),
                variant: "text-md/normal",
                children: K.intl.string(K.t["dpAn+8"]),
            }),
        ],
    });
}
function et(e) {
    let { transitionTo: t, token: n, width: i } = e,
        [l, s] = u.useState(Q.START),
        [r, a] = u.useState(null),
        [c, h] = u.useState(""),
        m = { impression_group: d.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, o.jsx)("div", {
        style: { margin: "8px" },
        children: (0, o.jsxs)(P.t, {
            activeSlide: l,
            width: i,
            onSlideReady: a,
            children: [
                (0, o.jsx)(P.q, {
                    id: Q.START,
                    impressionProperties: m,
                    impressionName: d.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, o.jsx)(J, { setSlide: s, transitionTo: t }),
                }),
                (0, o.jsx)(P.q, {
                    id: Q.PASSWORD,
                    impressionProperties: m,
                    impressionName: d.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, o.jsx)(q, {
                        setOriginalEmail: h,
                        setSlide: s,
                        transitionTo: t,
                        ready: r === Q.PASSWORD,
                        token: n,
                    }),
                }),
                (0, o.jsx)(P.q, {
                    id: Q.SUCCESS,
                    impressionProperties: m,
                    impressionName: d.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, o.jsx)(ee, { email: c }),
                }),
            ],
        }),
    });
}
g.Ay.initialize();
class en extends u.PureComponent {
    static defaultProps = { transitionTo: w.pX, replaceWith: w.bG };
    componentDidMount() {
        (0, G.d0)("account_revert");
    }
    render() {
        let { token: e } = this.props.match.params;
        return (0, o.jsx)(D.Ay, {
            style: { padding: 0 },
            children: (0, o.jsx)(et, { width: 464, token: e, ...this.props }),
        });
    }
}
var ei = n(549711);
function el(e) {
    f.h.dispatch({ type: "AUTH_INVITE_UPDATE", invite: e });
}
(n(323874), n(14289), n(35956));
var es = n(132500),
    er = n(941426);
let ea = [window.GLOBAL_ENV.ADS_MANAGER_ENDPOINT].filter(Boolean);
function eo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = new URL(e, t);
    return ("127.0.0.1" === n.hostname && (n.hostname = "localhost"), n.href);
}
function eu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ea;
    try {
        let { origin: i } = new URL(eo(e, t));
        return n
            .map((e) => eo(e, t))
            .some((e) => {
                let { origin: t } = new URL(e);
                return i === t;
            });
    } catch (e) {
        return (new er.Vy("Auth").error("Failed to check external redirect", e), !1);
    }
}
async function ec(e) {
    let t = (0, es.A)();
    try {
        var n;
        let i,
            l,
            s = (await E.Bo.post({ url: R.Rsh.HANDOFF, body: { key: t }, oldFormErrors: !0, rejectWithError: !0 })).body
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
    eh = n(650048),
    em = n(149790),
    eg = n(396681);
g.Ay.initialize();
class ef extends u.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, guild: null };
    componentDidMount() {
        let e = (0, eg.A)(this.props.location),
            t = (0, c.parse)(this.props.location.search);
        (E.Bo.post({
            url: R.Rsh.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
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
            (0, G.d0)("disable_server_highlight_notifications"));
    }
    renderBusy() {
        return (0, o.jsx)(D.Ay, { children: (0, o.jsx)(D.CK, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, o.jsxs)(D.Ay, {
            children: [
                (0, o.jsx)(D.hE, { className: X.QB, children: K.intl.string(K.t.Z33eiP) }),
                (0, o.jsx)(D.tK, { children: K.intl.format(K.t.NRWtfC, { guildName: n.name }) }),
                (0, o.jsx)("div", {
                    className: X.eT,
                    children: (0, o.jsx)(V.$, { text: K.intl.string(K.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, o.jsx)("div", {
                    className: X.Ot,
                    children: (0, o.jsx)(ed.Q, {
                        text: K.intl.string(K.t["cGmT/J"]),
                        onClick: () => {
                            t(R.BVt.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                        },
                    }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, o.jsxs)(D.Ay, {
            children: [
                (0, o.jsx)(D._V, { src: n(37772), className: X.SX }),
                (0, o.jsx)(D.hE, { className: X.QB, children: K.intl.string(K.t.ox9hIS) }),
                (0, o.jsx)(D.tK, { children: K.intl.string(K.t["/dcuR5"]) }),
                (0, o.jsx)("div", {
                    className: X.eT,
                    children: (0, o.jsx)(V.$, { text: K.intl.string(K.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let ep = g.Ay.connectStores([eh.A], () => ({ defaultRoute: eh.A.defaultRoute }))(ef);
var ex = n(628284),
    eA = n(557722),
    eE = n(628387),
    e_ = n(148864),
    ej = n(354948);
n(53516);
var eN = n(938442);
let eC = ["loopback-network", "local-network-access"];
async function ev() {
    if ("u" < typeof navigator || null == navigator.permissions) return "unknown";
    for (let e of eC)
        try {
            return (await navigator.permissions.query({ name: e })).state;
        } catch {}
    return "unknown";
}
var eI = n(736056),
    eS = n(620233),
    eT = n(122906),
    ey = n(121623),
    eb = n(31008);
function eR(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s = 288, height: r = 162 } = e;
    return (0, o.jsx)("img", {
        style: { width: s, height: r },
        src: eb.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var eL = n(154672),
    eO = n(331322),
    ek = n(297264),
    eD = n(289873),
    ew = n(47084);
function eG(e) {
    let { title: t, subtitle: n, buttonText: i, image: l, onButtonClick: s, loading: r } = e;
    return (0, o.jsx)(D.Ay, {
        className: ew.kL,
        children: (0, o.jsxs)(eO.B, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, o.jsxs)(eO.B, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, o.jsxs)(eO.B, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != l &&
                                    (0, o.jsx)(eO.B, {
                                        align: "center",
                                        justify: "center",
                                        className: ew.Sl,
                                        children: l,
                                    }),
                                r && (0, o.jsx)(eD.y, { type: eD.y.Type.SPINNING_CIRCLE }),
                                (0, o.jsx)(ek.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, o.jsx)(B.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                className: ew.VA,
                                children: n,
                            }),
                    ],
                }),
                !r && (0, o.jsx)(V.$, { onClick: s, text: i, variant: "overlay-primary" }),
            ],
        }),
    });
}
let eP = !1,
    eU = null,
    eF = null;
class eB extends g.Ay.Store {
    static displayName = "HubEmailVerificationStore";
    getState() {
        return { verifySuccess: eP, verifyErrors: eU, redirectGuildId: eF };
    }
}
let eV = new eB(f.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        ((eP = !0), (eU = null), (eF = t));
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        ((eP = !1), (eU = t));
    },
});
var eM = n(284009),
    eH = n.n(eM),
    eW = n(481613),
    eQ = n.n(eW),
    eK = n(400253),
    ez = n(742821),
    eX = n(80703),
    eq = n(280450),
    eY = n(877062);
g.Ay.initialize();
var e$ = n(842241),
    eZ = n(202091),
    eJ = n(717421),
    e0 = n(661531),
    e1 = n(993077),
    e2 = n(235986),
    e4 = n(408738);
function e8(e) {
    let { text: t, buttonCta: i, onClick: l } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(D._V, { src: n(431979) }),
            (0, o.jsx)(D.hE, { className: F()(X.QX, X.QB, eN.tR), children: K.intl.string(K.t.eL5z0i) }),
            (0, o.jsx)(D.tK, { className: X.C2, children: K.intl.string(K.t.poAv63) }),
            (0, o.jsxs)(e1.Z, {
                className: e4.Nr,
                type: e1.Z.Types.CUSTOM,
                children: [
                    (0, o.jsx)("img", { alt: "", className: e4.q8, src: n(355912) }),
                    (0, o.jsx)("img", { alt: "", className: e4.dw, src: n(610925) }),
                    (0, o.jsxs)(e2.A, {
                        className: e4.p_,
                        direction: e2.A.Direction.VERTICAL,
                        align: e2.A.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, o.jsx)(B.E, {
                                tag: "strong",
                                className: e4.p8,
                                variant: "text-md/normal",
                                style: { color: e0.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, o.jsx)("div", {
                                className: e4.x6,
                                children: (0, o.jsx)(V.$, { text: i, fullWidth: !0, onClick: l }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e7(e) {
    let { text: t, buttonCta: n, theme: i = R.NJ8.DARK, onClick: l } = e;
    return (0, o.jsx)(D.Ay, { theme: i, children: (0, o.jsx)(e8, { text: t, buttonCta: n, onClick: l }) });
}
var e3 = n(765671),
    e9 = n(71393),
    e5 = n(299091),
    e6 = n(486020),
    te = n(403362),
    tt = n(778712),
    tn = n(47167),
    ti = n(769015),
    tl = n(714991),
    ts = n(427262),
    tr = n(172799),
    ta = n(330936),
    to = n(622625);
function tu(e) {
    let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
    return 0 === t.memberCount ? null : t;
}
function tc(e) {
    return e.target_type === tr.yV.STREAM && null != e.target_user;
}
function td(e) {
    return e.channel?.type === R.rbe.GROUP_DM;
}
function th(e) {
    return null == e.channel && null == e.guild && null != e.inviter;
}
function tm(e) {
    return e.state === R.elq.ACCEPTED;
}
function tg(e) {
    let { guild_scheduled_event: t } = e;
    return null != t;
}
function tf(e) {
    let t;
    return !tg(e) && (!!th(e) || (null != e.inviter && !tm(e) && ((t = tu(e)), !((t?.memberCount ?? 0) > 100))));
}
function tp(e) {
    let { guild: t, user: n, application: i } = e;
    return null != i
        ? (0, o.jsx)(ti.A, { className: to.Z2, game: i, size: to.q6 })
        : null != n
          ? (0, o.jsx)(D.eu, { src: n.getAvatarURL(void 0, 100), size: tt._3.DEPRECATED_SIZE_100, className: to.my })
          : null != t
            ? (0, o.jsx)(D.$v, { guild: t, size: D.$v.Sizes.LARGER, className: to.$f, animate: !0 })
            : null;
}
function tx(e) {
    let { invite: t, textClassName: n, className: i } = e,
        l = tu(t);
    return null == l || tf(t) || t?.guild?.id === ta.TA
        ? null
        : (0, o.jsx)(D.R1, {
              className: F()(to.He, i),
              online: l.onlineCount,
              total: l.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function tA(e) {
    let { invite: t, showBigUserIcon: n } = e,
        i = u.useMemo(
            () =>
                n
                    ? null
                    : tc(t) && null != t.target_user
                      ? e6.Ay.getUserAvatarURL(t.target_user)
                      : tf(t) && null != t.inviter
                        ? e6.Ay.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        l = K.intl.string(K.t["3rE1P8"]);
    return (
        td(t)
            ? (l =
                  t.channel?.name != null && t.inviter?.username != null
                      ? K.intl.format(K.t.Lu4h18, { username: t.inviter.username })
                      : K.intl.string(K.t.OsdY8B))
            : tc(t) && null != t.target_user
              ? (l = K.intl.formatToPlainString(K.t.x2L32Q, { username: t.target_user.username }))
              : tm(t)
                ? (l = K.intl.string(K.t["FDsl+J"]))
                : tf(t) &&
                  null != t.inviter &&
                  (l = K.intl.format(K.t.spU2mI, { username: ts.Ay.getFormattedName(t.inviter) })),
        (0, o.jsxs)("div", {
            className: to.JB,
            children: [
                null != i &&
                    (0, o.jsx)("div", {
                        className: to._t,
                        children: (0, o.jsx)(D.eu, { src: i, size: tt._3.SIZE_24 }),
                    }),
                (0, o.jsx)(D.tK, { className: to.__invalid_inviteJoinSubTitle, children: l }),
            ],
        })
    );
}
function tE(e) {
    let t,
        n,
        i,
        { user: l, guild: s, channel: r, application: a, showBigUserIcon: u } = e,
        c = (0, tn.Ay)(r);
    if (null != s)
        (u && null == a && (t = (0, o.jsx)(D.$v, { guild: s, size: D.$v.Sizes.SMALL })),
            (n = s.name),
            null != a &&
                ((n = a.name),
                (i = (0, o.jsxs)("div", {
                    className: to.JB,
                    children: [
                        (0, o.jsx)(D.tK, { className: to.R9, children: K.intl.string(K.t["3gg9fF"]) }),
                        (0, o.jsxs)("div", {
                            className: to.bo,
                            children: [
                                (0, o.jsx)(D.$v, { guild: s, size: D.$v.Sizes.SMALL }),
                                (0, o.jsx)(ek.D, {
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
        let e = ts.Ay.getFormattedName(l);
        null != c && "" !== c
            ? ((n = c), null != r.icon && (t = (0, o.jsx)(D.F4, { channel: r, size: tt._3.SIZE_32 })))
            : (n = e);
    } else if (null != l) {
        let e = ts.Ay.getFormattedName(l);
        ((n = K.intl.formatToPlainString(K.t["4aF92R"], { username: e })),
            (i = (0, o.jsx)(D.tK, { className: to.b$, children: K.intl.format(K.t.Quj7HX, { username: e }) })));
    }
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)(D.hE, {
                className: to.DD,
                children: [
                    null != s ? (0, o.jsx)(tl.A, { guild: s, className: to.n2, tooltipPosition: "left" }) : null,
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
    tC = n(548118),
    tv = n(557582),
    tI = n(167630),
    tS = n(424547);
function tT(e) {
    let { guildScheduledEvent: t, channel: n, onAcceptInvite: i, isSubmitting: l } = e;
    return (0, o.jsxs)("div", {
        className: tS.s4,
        children: [
            (0, o.jsx)(tv.Ay, {
                name: t.name,
                description: t.description ?? void 0,
                headerVariant: "heading-md/medium",
                descriptionClassName: tS.__invalid_channelDescription,
                guildId: t.guild_id,
                guildEvent: t,
                eventPreview: t,
            }),
            null != n &&
                (0, o.jsx)("div", {
                    className: tS.yW,
                    children: (0, o.jsx)(tI.A, { guildScheduledEvent: t, channel: n }),
                }),
            (0, o.jsx)("div", {
                className: tS.xG,
                children: (0, o.jsx)(V.$, {
                    variant: "active",
                    size: "md",
                    text: K.intl.string(K.t.riu2R5),
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
        n = null != t.guild ? (0, em.DY)(t.guild) : null;
    if (null == n) return null;
    let i = n.description ?? "";
    return (0, o.jsxs)("div", {
        className: tS.kQ,
        children: [
            (0, o.jsx)(ek.D, { className: tS.s7, variant: "text-sm/medium", children: K.intl.string(K.t.Eabu1z) }),
            (0, o.jsxs)("div", {
                className: tS.bo,
                children: [
                    (0, o.jsx)(tC.Ay, { guild: n, active: !0, size: tC.Ay.Sizes.MEDIUM }),
                    (0, o.jsxs)("div", {
                        className: tS.bW,
                        children: [
                            (0, o.jsxs)(B.E, {
                                className: tS.J5,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, o.jsx)(tl.A, { guild: n, className: tS.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, o.jsx)(tx, { invite: t, textClassName: tS.kS, className: tS.pe }),
                        ],
                    }),
                ],
            }),
            i.length > 0 &&
                (0, o.jsx)("details", {
                    className: tS.x_,
                    children: (0, o.jsx)(B.E, { color: "text-default", variant: "text-sm/normal", children: i }),
                }),
        ],
    });
}
function tb(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: l } = e,
        { guild_scheduled_event: s } = t;
    return null != s
        ? (0, o.jsx)(tT, { guildScheduledEvent: s, channel: n, isSubmitting: i, onAcceptInvite: l })
        : null;
}
var tR = n(578564);
function tL(e) {
    let { invite: t, onAcceptInvite: n, disableUser: i = !1 } = e;
    if (null == t) return null;
    let l = null != t.guild ? (0, em.DY)(t.guild) : null,
        s = null != t.channel ? (0, tj.OY)(t.channel) : null,
        r = null != t.target_application ? new t_.Ay(t.target_application) : null,
        a = i || null == t.inviter ? null : new tN.A(t.inviter),
        u =
            !(
                (null != t.approximate_member_count && t.approximate_member_count > 100) ||
                (null != l && l.features.has(R.GuildFeatures.COMMUNITY))
            ) &&
            null != a &&
            td(t),
        c = (function (e) {
            let { state: t } = e;
            switch (t) {
                case R.elq.ACCEPTING:
                case R.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        d = { invite: t, user: a, guild: l, channel: s, application: r };
    return tg(t)
        ? (0, o.jsx)(tb, { invite: t, channel: s, isSubmitting: c, onAcceptInvite: n })
        : (0, o.jsxs)("div", {
              className: tR.kL,
              children: [
                  (0, o.jsx)(tp, { application: r, guild: l, user: u || th(t) ? a : null }),
                  th(t) ? null : (0, o.jsx)(tA, { ...d, showBigUserIcon: u }),
                  (0, o.jsx)(tE, { ...d, showBigUserIcon: u }),
                  (0, o.jsx)(tx, { ...d }),
                  (0, o.jsx)("div", {
                      className: tR.xG,
                      children: (0, o.jsx)(V.$, {
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
var tO = n(43990),
    tk = n(241524),
    tD = n(573435),
    tw = n(260509),
    tG = n(370953);
function tP(e) {
    let { guild: t, outline: n } = e,
        i = (0, tk.A)("(max-width: 600px), (max-height: 600px)") ? tC.DN.LARGER : tC.DN.XLARGE,
        l = tC.iu[i],
        s = tC.s[i],
        r = u.useMemo(() => e6.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: l }), [t.icon, t.id, l]),
        a = (0, tw.Rb)(t),
        c =
            null != r
                ? (0, o.jsx)("img", { src: r, alt: "", className: tG.OV })
                : (0, o.jsx)("div", {
                      className: tG.ef,
                      style: { fontSize: s[a.length] ?? s[s.length - 1] },
                      children: a,
                  });
    return n
        ? (0, o.jsx)("div", {
              className: F()(tG._C, tG.AY),
              children: (0, o.jsx)(tD.Ay, {
                  mask: tD.Ay.Masks.SQUIRCLE,
                  width: l + 8,
                  height: l + 8,
                  children: (0, o.jsx)("div", {
                      className: tG.$d,
                      children: (0, o.jsx)(tD.Ay, { mask: tD.Ay.Masks.SQUIRCLE, width: l, height: l, children: c }),
                  }),
              }),
          })
        : (0, o.jsx)("div", {
              className: tG._C,
              children: (0, o.jsx)(tD.Ay, { mask: tD.Ay.Masks.SQUIRCLE, width: l, height: l, children: c }),
          });
}
var tU = n(927813);
let tF = /\.$/;
function tB(e) {
    return Array.isArray(e)
        ? e
              .map((e) => e.replace(tF, ""))
              .join(". ")
              .trim()
        : e;
}
function tV(e) {
    let [t, n] = u.useState(() => null != e && !e),
        [i, l] = u.useState(e);
    return (null == i && null != e ? (l(e), n(!e)) : i !== e && l(e), [t, n]);
}
function tM() {
    let [e, t] = u.useState(!1),
        n = u.useRef(null);
    return (
        u.useEffect(
            () => () => {
                null != n.current && clearTimeout(n.current);
            },
            [],
        ),
        [
            e,
            u.useCallback((e) => {
                (null != n.current && clearTimeout(n.current),
                    t(!0),
                    (n.current = setTimeout(() => {
                        (t(!1), (n.current = null));
                    }, e * tU.A.Millis.SECOND)));
            }, []),
        ]
    );
}
var tH = n(153488),
    tW = n(95477),
    tQ = n(866665),
    tK = n(913122),
    tz = n(934337),
    tX = n(15552),
    tq = n(536637),
    tY = n.n(tq),
    t$ = n(955437),
    tZ = n(888548);
n(861807);
var tJ = n(569717),
    t0 = n(204925);
function t1(e) {
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
        giftCodeSKUId: c = null,
        promoEmailConsent: h = null,
        usedUsernameSuggestion: m = null,
    } = e;
    if ((f.h.dispatch({ type: "REGISTER" }), null != o)) {
        let e;
        ((0, tJ.A)(o, R.JJy.REGISTER),
            y.default.track(R.HAw.AGE_GATE_ACTION, { source: t0.w_.REGISTER, action: t0.AM.AGE_GATE_SUBMITTED }),
            (e = tY()().diff(o, "years")) < 13 ||
                y.default.track(R.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                }));
    }
    return W.A.post({
        url: R.Rsh.REGISTER,
        body: {
            fingerprint: eq.default.getFingerprint(),
            email: t,
            username: i,
            global_name: l,
            password: r,
            invite: u,
            consent: s,
            phone_token: n,
            date_of_birth: o?.format("YYYY-MM-DD"),
            gift_code_sku_id: c,
            guild_template_code: a,
            promotional_email_opt_in: h?.checked,
        },
        trackedActionData: {
            event: d.NetworkActionNames.USER_REGISTER,
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
            (f.h.dispatch({ type: "REGISTER_SUCCESS", token: e.body.token }),
                f.h.dispatch({
                    type: "GUARDIAN_CONNECT_REQUIRED",
                    shouldShowGuardianConnect: !0 === e.body.show_guardian_connect,
                }),
                y.default.track(R.HAw.AGE_GATE_ACTION, { source: t0.w_.REGISTER, action: t0.AM.AGE_GATE_SUCCESS }));
        },
        (e) => {
            if (e instanceof tZ.CaptchaCancelError) throw e;
            let t = new M.A(e);
            throw (
                null != t.getFieldErrors("date_of_birth") && t$.Xv(t0.w_.REGISTER),
                y.default.track(R.HAw.REGISTER_SUBMIT_ERRORED, {
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
var t2 = n(568385),
    t4 = n(975639);
function t8(e) {
    let { consent: t, consentRequired: n, onConsentChange: i } = e;
    return n
        ? (0, o.jsx)("div", {
              className: t4.IQ,
              children: (0, o.jsx)(t2.J, {
                  label: K.intl.format(K.t.qMDAP0, { termsURL: R.X7G.TERMS, privacyURL: R.X7G.PRIVACY }),
                  checked: t,
                  onChange: i,
                  labelType: "secondary",
              }),
          })
        : (0, o.jsx)(B.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: F()(X.Ot, t4.E2),
              children: K.intl.format(K.t["KI+BSb"], { termsURL: R.X7G.TERMS, privacyURL: R.X7G.PRIVACY }),
          });
}
function t7() {
    let { required: e, checked: t } = (0, tz.mZ)();
    return e
        ? (0, o.jsx)("div", {
              className: X.Ot,
              children: (0, o.jsx)(t2.J, {
                  label: K.intl.string(K.t["0p3R0+"]),
                  checked: t,
                  onChange: tz.Bw,
                  labelType: "secondary",
              }),
          })
        : null;
}
var t3 = n(890251);
function t9(e) {
    let {
            invite: t,
            username: n,
            parsedDateOfBirth: i,
            email: l,
            password: s,
            consent: r,
            consentRequired: a,
            apiErrors: c,
            onEmailChange: d,
            onPasswordChange: h,
            onConsentChange: m,
            onApiErrors: g,
            onOpenApp: f,
            onRegister: p,
        } = e,
        [x, A] = u.useState(!1),
        [E, _] = tM(),
        j = null != a && r,
        N = u.useRef(null),
        C = u.useRef(null);
    function v(e) {
        y.default.track(R.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function I(e) {
        y.default.track(R.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    u.useEffect(() => {
        N.current?.focus();
    }, []);
    let S = l.length > 0 && s.length > 0,
        T = u.useCallback(async () => {
            let e = tz.mZ.getState();
            (A(!0), g({}));
            try {
                (await t1({
                    email: l,
                    username: n,
                    consent: r,
                    password: s,
                    invite: t.code,
                    birthday: i,
                    promoEmailConsent: e.required ? e : null,
                }),
                    p());
            } catch (t) {
                if ((A(!1), !(t instanceof tK.LG))) return;
                let e = (0, tX.W)(t);
                (g(e),
                    null != e.email || null != e.phone ? N.current?.focus() : null != e.password && C.current?.focus(),
                    "number" == typeof e.retry_after && _(e.retry_after));
            }
        }, [t, l, n, s, i, r, g, p, _]),
        b = u.useCallback(
            (e) => {
                (e.preventDefault(), null != a && S && T());
            },
            [a, S, T],
        ),
        { message: L } = c;
    return (0, o.jsxs)("form", {
        onSubmit: b,
        children: [
            (0, o.jsx)("div", {
                className: X.SX,
                children: (0, o.jsx)(tW.k, {
                    label: K.intl.string(K.t.dI4d4S),
                    name: "email",
                    value: l,
                    onChange: d,
                    error: tB(c.email),
                    type: "email",
                    autoComplete: "username",
                    inputRef: N,
                    onFocus: () => v("email"),
                    onBlur: () => I("email"),
                }),
            }),
            (0, o.jsx)(tW.k, {
                label: K.intl.string(K.t["CIGa+7"]),
                name: "password",
                value: s,
                onChange: h,
                error: tB(c.password),
                type: "password",
                autoComplete: "new-password",
                inputRef: C,
                onFocus: () => v("password"),
                onBlur: () => I("password"),
            }),
            (0, o.jsx)(t7, {}),
            (0, o.jsx)(t8, { consent: r, consentRequired: a, onConsentChange: m }),
            (0, o.jsx)(tQ.m, {
                text: !r && a ? K.intl.string(K.t.AY4IVA) : null,
                children: (0, o.jsx)("div", {
                    className: X.QX,
                    children: (0, o.jsx)(V.$, {
                        text: K.intl.string(K.t["825cFy"]),
                        variant: "primary",
                        fullWidth: !0,
                        type: "submit",
                        loading: x,
                        disabled: !j || E || !S,
                    }),
                }),
            }),
            "string" == typeof L ? (0, o.jsx)(D.ME, { className: F()(X.QX, t4.gJ), children: L }) : null,
            (0, o.jsx)("div", {
                className: t3.o3,
                children: (0, o.jsx)(ed.Q, {
                    text: K.intl.string(K.t.renMUD),
                    textVariant: "text-sm/normal",
                    onClick: f,
                }),
            }),
        ],
    });
}
function t5(e) {
    let { guild: t } = e,
        n =
            e6.Ay.getGuildBannerURL(t) ??
            (null != t.splash ? e6.Ay.getGuildSplashURL({ id: t.id, splash: t.splash, size: 640 }) : null);
    return (0, o.jsx)("div", { className: t3.ZK, style: null != n ? { backgroundImage: `url(${n})` } : void 0 });
}
function t6(e) {
    let { invite: t, kicker: n } = e,
        i = null != t.guild ? (0, em.DY)(t.guild) : null;
    return null == i
        ? null
        : (0, o.jsxs)("header", {
              children: [
                  (0, o.jsx)(t5, { guild: i }),
                  (0, o.jsxs)("div", {
                      className: t3.lu,
                      children: [
                          (0, o.jsx)("div", { className: t3.LJ, children: (0, o.jsx)(tP, { guild: i, outline: !0 }) }),
                          (0, o.jsx)(B.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: n ?? K.intl.string(K.t["3rE1P8"]),
                          }),
                          (0, o.jsxs)("div", {
                              className: t3.G1,
                              children: [
                                  (0, o.jsx)(ek.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: t3.qd,
                                      children: i.name,
                                  }),
                                  (0, o.jsx)(tl.A, { guild: i, tooltipPosition: "left" }),
                              ],
                          }),
                          (0, o.jsx)(tx, { invite: t }),
                      ],
                  }),
                  (0, o.jsx)("div", { className: t3.yF }),
              ],
          });
}
var ne = n(201505);
n(801541);
var nt = n(889137),
    nn = n(546727),
    ni = n(5052),
    nl = n(446837);
let ns = window.ResizeObserver ?? nl.t;
function nr(e) {
    let { show: t, children: n, top: i = 0, bottom: l = 0 } = e,
        { ref: s, height: r } = (function () {
            let e = u.useRef(null),
                [t, n] = u.useState(0),
                i = u.useMemo(
                    () =>
                        new ns((e) => {
                            let [t] = e;
                            return n(t.contentRect.height);
                        }),
                    [],
                );
            return (
                u.useLayoutEffect(() => (null != e.current && i.observe(e.current), () => i.disconnect()), [i]),
                { ref: e, height: t }
            );
        })(),
        a = (0, eJ.z)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: { height: t ? r : 0, paddingBottom: t ? `${l}px` : "0px", marginTop: t ? `${i}px` : "0px" },
            config: { tension: 170, friction: 26 },
        }),
        c = (0, eJ.z)({
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
    return (0, o.jsx)(eZ.animated.div, {
        style: { overflow: "hidden", height: a.height, paddingBottom: a.paddingBottom, marginTop: a.marginTop },
        children: (0, o.jsx)(eZ.animated.div, { style: { opacity: c.opacity }, ref: s, children: n }),
    });
}
function na(e) {
    let t,
        { username: n, suggestion: i, globalName: l, isUsernameFocused: s, onClickSuggestion: r } = e,
        a = (0, ni.i)(n, !0, !0),
        u = n.length > 0;
    return (
        (t = u
            ? (0, nt.YW)(a)
                  .with({ type: nn.q.ERROR, message: nt.P.select() }, (e) =>
                      (0, o.jsx)(B.E, { className: t4.vU, variant: "text-sm/normal", children: e }),
                  )
                  .with({ type: nn.q.AVAILABLE, message: nt.P.select() }, (e) =>
                      (0, o.jsx)(B.E, { className: t4.vq, variant: "text-sm/normal", children: e }),
                  )
                  .otherwise(() =>
                      (0, o.jsx)(B.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: K.intl.string(K.t.z7c4bP),
                      }),
                  )
            : null != i && i.length > 0 && l.length > 0
              ? (0, o.jsx)(B.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: K.intl.format(K.t.nDGqqq, { suggestion: i, nameOnClick: r }),
                })
              : (0, o.jsx)(B.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: K.intl.string(K.t.z7c4bP),
                })),
        (0, o.jsx)(nr, { show: (u && a?.type === nn.q.ERROR) || s, top: -12, bottom: 20, children: t })
    );
}
function no(e) {
    let {
            username: t,
            parsedDateOfBirth: n,
            apiErrors: i,
            onUsernameChange: l,
            onDateOfBirthChange: s,
            onNext: r,
            onOpenApp: a,
        } = e,
        [c, d] = u.useState(!1),
        h = u.useRef(null);
    function m(e) {
        y.default.track(R.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function g(e) {
        y.default.track(R.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    u.useEffect(() => {
        null != i.username && h.current?.focus();
    }, []);
    let f = t.length > 0 && null != n;
    return (0, o.jsxs)("form", {
        onSubmit: function (e) {
            (e.preventDefault(), f && r());
        },
        children: [
            (0, o.jsxs)("div", {
                onBlur: () => d(!1),
                onFocus: () => d(!0),
                tabIndex: -1,
                children: [
                    (0, o.jsx)("div", {
                        className: X.SX,
                        children: (0, o.jsx)(tW.k, {
                            label: K.intl.string(K.t.TWzdWj),
                            name: "username",
                            value: t,
                            onChange: (e) => l(e.toLocaleLowerCase()),
                            error: tB(i.username),
                            autoComplete: "off",
                            inputRef: h,
                            onFocus: () => m("username"),
                            onBlur: () => g("username"),
                        }),
                    }),
                    (0, o.jsx)(na, {
                        username: t,
                        suggestion: null,
                        globalName: "",
                        isUsernameFocused: c,
                        onClickSuggestion: () => {},
                    }),
                ],
            }),
            (0, o.jsx)(ne.A, {
                label: K.intl.string(K.t.rhBeKe),
                name: "date_of_birth",
                onChange: s,
                error: tB(i.date_of_birth),
                value: n,
                onFocus: m,
                onBlur: g,
            }),
            (0, o.jsx)("div", {
                className: X.QX,
                children: (0, o.jsx)(V.$, {
                    text: K.intl.string(K.t.PDTjLN),
                    variant: "primary",
                    fullWidth: !0,
                    type: "submit",
                    disabled: !f,
                }),
            }),
            (0, o.jsx)("div", {
                className: t3.o3,
                children: (0, o.jsx)(ed.Q, {
                    text: K.intl.string(K.t.renMUD),
                    textVariant: "text-sm/normal",
                    onClick: a,
                }),
            }),
        ],
    });
}
function nu(e) {
    let { invite: t, onOpenApp: n } = e,
        i = null != t.guild ? (0, em.DY)(t.guild) : null;
    return null == i
        ? null
        : (0, o.jsxs)(o.Fragment, {
              children: [
                  null != i ? (0, o.jsx)(t5, { guild: i }) : null,
                  (0, o.jsxs)("div", {
                      className: t3.zY,
                      children: [
                          (0, o.jsxs)("div", {
                              className: t3.rL,
                              children: [
                                  (0, o.jsx)(tP, { guild: i }),
                                  (0, o.jsx)(ek.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: t3.Rw,
                                      children: K.intl.format(K.t["33M5bg"], { guildName: i?.name ?? "" }),
                                  }),
                                  (0, o.jsx)(B.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: t3.Ap,
                                      children: K.intl.string(K.t["7N4JkE"]),
                                  }),
                                  (0, o.jsx)("div", {
                                      className: t3.S7,
                                      children: (0, o.jsx)(V.$, {
                                          variant: "primary",
                                          size: "md",
                                          text: K.intl.string(K.t["n+VrqG"]),
                                          onClick: n,
                                      }),
                                  }),
                              ],
                          }),
                          (0, o.jsx)("div", {
                              className: t3.NG,
                              children: (0, o.jsx)("img", {
                                  alt: "",
                                  src: "https://cdn.discordapp.com/assets/content/55b848b6c57bf51009a1bdaa4465a9e8d79026b8b92889b0ea90a00475f19257.webp",
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function nc(e) {
    let { invite: t, onOpenApp: n, onOpenAppAfterRegistration: i } = e,
        [l, s] = u.useState(0),
        [r, a] = u.useState(""),
        [c, d] = u.useState(null),
        [h, m] = u.useState(""),
        [f, x] = u.useState(""),
        [A, E] = u.useState({}),
        _ = (0, g.bG)([tH.A], () => tH.A.getAuthenticationConsentRequired()),
        [j, N] = tV(_),
        [C, v] = u.useState(!1),
        I = u.useRef(null);
    function S(e) {
        (s(e), I.current?.scrollTo(0, 0));
    }
    function T(e) {
        (E(e), (null != e.username || null != e.date_of_birth) && S(0));
    }
    function y(e) {
        E((t) => {
            if (null == t[e]) return t;
            let n = { ...t };
            return (delete n[e], n);
        });
    }
    function b(e) {
        (a(e), y("username"));
    }
    function L(e) {
        let t = e === c || (null != e && null != c && e.isSame(c, "day"));
        (d(e), t || y("date_of_birth"));
    }
    function O(e) {
        (m(e), y("email"));
    }
    function k(e) {
        (x(e), y("password"));
    }
    return (
        u.useEffect(() => {
            p.A.getLocationMetadata();
        }, []),
        (0, o.jsx)(tO.N, {
            theme: R.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, o.jsx)("div", {
                    ref: I,
                    "data-theme": R.NJ8.DARK,
                    className: F()(t3.MY, e),
                    children: C
                        ? (0, o.jsx)(nu, { invite: t, onOpenApp: i })
                        : (0, o.jsxs)(o.Fragment, {
                              children: [
                                  (0, o.jsx)(t6, { invite: t, kicker: 1 === l ? K.intl.string(K.t.dzGILG) : void 0 }),
                                  (0, o.jsx)("div", {
                                      className: t3.rf,
                                      children:
                                          0 === l
                                              ? (0, o.jsx)(no, {
                                                    username: r,
                                                    parsedDateOfBirth: c,
                                                    apiErrors: A,
                                                    onUsernameChange: b,
                                                    onDateOfBirthChange: L,
                                                    onNext: () => S(1),
                                                    onOpenApp: n,
                                                })
                                              : (0, o.jsx)(t9, {
                                                    invite: t,
                                                    username: r,
                                                    parsedDateOfBirth: c,
                                                    email: h,
                                                    password: f,
                                                    consent: j,
                                                    consentRequired: _,
                                                    apiErrors: A,
                                                    onEmailChange: O,
                                                    onPasswordChange: k,
                                                    onConsentChange: N,
                                                    onApiErrors: T,
                                                    onOpenApp: n,
                                                    onRegister: () => v(!0),
                                                }),
                                  }),
                              ],
                          }),
                }),
        })
    );
}
var nd = n(127982);
function nh(e, t, n, i) {
    (e?.preventDefault(),
        y.default.track(
            R.HAw.INVITE_APP_OPENED,
            {
                invite_code: (0, e$.m0)(t),
                guild_id: n?.guild?.id,
                channel_id: n?.channel?.id,
                inviter_id: n?.inviter?.id,
                invite_type: null != n && n?.type != null ? tr.Xd[n?.type] : void 0,
                user_is_member: null != n && null != n.guild && null != e9.A.getGuild(n.guild.id),
                size_total: n?.approximate_member_count,
                time_to_click_ms: Math.round(performance.now()),
            },
            { flush: !0 },
        ));
    let l = null != n && n.state !== R.elq.EXPIRED && n.state !== R.elq.BANNED ? t : void 0,
        s = eq.default.getFingerprint(),
        r = null != s ? s : eq.default.getId(),
        a = null != n && n?.type != null ? Number(n?.type) : void 0;
    A.Ay.openApp(l, void 0, r, void 0, { inviteType: a, didRegister: i?.didRegister });
}
function nm() {
    return (0, o.jsx)("div", { className: nd.$k, children: (0, o.jsx)(eD.y, {}) });
}
function ng(e) {
    let t = e?.state == null && e?.channel == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case R.elq.RESOLVED:
        case R.elq.ACCEPTED:
        case R.elq.APP_NOT_OPENED:
        case R.elq.APP_OPENED:
        case R.elq.ACCEPTING:
        case R.elq.APP_OPENING:
            return 1;
        case R.elq.EXPIRED:
        case R.elq.BANNED:
        case R.elq.ERROR:
            return 2;
        case R.elq.RESOLVING:
            return 0;
        default:
            (0, te.xb)(n);
    }
}
function nf(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === R.elq.BANNED
        ? (0, o.jsx)(e8, { text: K.intl.string(K.t["5AkWAd"]), buttonCta: K.intl.string(K.t["8osdkn"]), onClick: n })
        : (0, o.jsx)(e8, { text: K.intl.string(K.t["usP+Mb"]), buttonCta: K.intl.string(K.t["8osdkn"]), onClick: n });
}
function np(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: i, sectionClassName: l, inviteCardClassName: s = nd.qF } = e,
        { ref: r, height: a } = (0, e3.Ay)(),
        u = (0, eJ.z)({ height: null != a && 0 !== a ? `${a}px` : `${i}px`, config: eZ.config.stiff });
    return (0, o.jsxs)(eZ.animated.div, {
        className: s,
        style: u,
        children: [
            (0, o.jsx)(eZ.animated.div, {
                className: nd.NS,
                style: u,
                children: (0, o.jsx)("section", { ref: r, className: l, children: t }),
            }),
            n,
        ],
    });
}
function nx(e) {
    let { invite: t } = e;
    if (null == t || !tg(t)) return null;
    let n = ng(t);
    return (0, o.jsx)(np, {
        startAnimHeightPx: 0,
        sectionClassName: nd.ui,
        children: 1 === n ? (0, o.jsx)(ty, { invite: t }) : null,
    });
}
let nA = { 1: nd._r, 2: nd.Gm, 0: nd.Kt };
function nE(e) {
    let t,
        { invite: n } = e,
        i = ng(n),
        l = u.useRef(!1);
    if (
        (u.useEffect(() => {
            l.current ||
                (null != n &&
                    1 === i &&
                    ((l.current = !0),
                    y.default.track(R.HAw.INVITE_ACCEPT_BUTTON_RENDERED, {
                        invite_code: n.code,
                        guild_id: n.guild?.id,
                        duration_ms_since_page_load: Math.round(performance.now()),
                    })));
        }, [n, i]),
        null == n)
    )
        t = (0, o.jsx)(nm, {});
    else
        switch (i) {
            case 1:
                t = (0, o.jsx)(tL, { ...e, invite: n });
                break;
            case 2:
                t = (0, o.jsx)(nf, { ...e, invite: n });
                break;
            default:
                t = (0, o.jsx)(nm, {});
        }
    return (0, o.jsx)(np, { startAnimHeightPx: 200, sectionClassName: nA[i], inviteCardClassName: nd.qF, children: t });
}
function n_(e) {
    let { invite: t } = e,
        [n, i] = u.useState(null);
    return (u.useLayoutEffect(() => {
        let e;
        null == n &&
            null != t &&
            1 === ng(t) &&
            i(
                ((e = t.guild_experiments?.["2026-08-mweb-invite-registration"]),
                e?.variation === 1 && !eq.default.isAuthenticated() && null != t.guild && null == t.target_application),
            );
    }, [t, n]),
    !0 === n)
        ? (0, o.jsx)(nc, {
              invite: t,
              onOpenApp: e.onAcceptInvite,
              onOpenAppAfterRegistration: e.onOpenAppAfterRegistration,
          })
        : (0, o.jsx)(nj, { ...e });
}
function nj(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = t ?? {},
        l = {};
    if (i?.splash != null) {
        let e = e6.Ay.getGuildSplashURL({ id: i.id, splash: i.splash });
        null != e && ((l.backgroundImage = `url(${e})`), (l.backgroundSize = "cover"));
    }
    return (0, o.jsxs)(D.Ay, {
        theme: R.NJ8.DARK,
        className: nd.G3,
        style: l,
        contentClassName: nd.__,
        children: [(0, o.jsx)(nE, { ...e, onAcceptInvite: n }), (0, o.jsx)(nx, { ...e })],
    });
}
var nN = n(723702);
function nC(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s = 288, height: r = 192 } = e;
    return (0, o.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/575199861cc3c18cdeb6745807591de54ce1ce9ddad5bae636a5737664545aa0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var nv = n(474545),
    nI = n(604880);
function nS(e) {
    let { token: t, hasError: n, errorReason: i } = e;
    return n
        ? (0, o.jsxs)("div", {
              className: nv.MY,
              children: [
                  (0, o.jsx)("div", { className: nv.r$, children: (0, o.jsx)("img", { src: nI, alt: "" }) }),
                  (0, o.jsxs)("div", {
                      className: nv.Qs,
                      children: [
                          (0, o.jsx)(nC, { alt: "" }),
                          (0, o.jsx)(ek.D, {
                              variant: "heading-lg/semibold",
                              className: nv.ky,
                              children: K.intl.string(K.t.RtCSr1),
                          }),
                          (0, o.jsx)(B.E, {
                              variant: "text-md/normal",
                              className: nv.G3,
                              children: K.intl.string(K.t["S+YjYJ"]),
                          }),
                          (0, o.jsx)(V.$, {
                              variant: "primary",
                              text: K.intl.string(K.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  (y.default.track(R.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: i }),
                                      (0, w.pX)(R.BVt.LOGIN));
                              },
                          }),
                      ],
                  }),
              ],
          })
        : (0, o.jsxs)("div", {
              className: nv.MY,
              children: [
                  (0, o.jsx)("div", { className: nv.r$, children: (0, o.jsx)("img", { src: nI, alt: "" }) }),
                  (0, o.jsxs)("div", {
                      className: nv.Qs,
                      children: [
                          (0, o.jsx)(nC, { alt: "" }),
                          (0, o.jsx)(ek.D, {
                              variant: "heading-lg/semibold",
                              className: nv.ky,
                              children: K.intl.string(K.t["9h/0Rl"]),
                          }),
                          (0, o.jsx)(B.E, {
                              variant: "text-md/normal",
                              className: nv.G3,
                              children: K.intl.string(K.t.Wgm7Om),
                          }),
                          (0, o.jsx)(V.$, {
                              variant: "primary",
                              text: K.intl.string(K.t.NydsTd),
                              fullWidth: !0,
                              onClick: () => {
                                  let e, n;
                                  ((e = (function (e) {
                                      let t = platform.os?.family;
                                      if ("Android" === t || "iOS" === t) {
                                          let t = eq.default.getFingerprint(),
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
                                      y.default.track(R.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                                          detection_type: "mobile_button_clicked",
                                          device_type: h.Fr ? "mobile" : "tablet",
                                          platform: y.default.getSuperProperties()?.os,
                                      }),
                                      null != n &&
                                          y.default.track(R.HAw.DEEP_LINK_CLICKED, {
                                              fingerprint: (0, eX.v)(n.fingerprint),
                                              attempt_id: n.attemptId,
                                              source: n.utmSource,
                                          }),
                                      eY.A.launch(e, (e) => {
                                          e || (0, w.bG)({ pathname: R.BVt.LOGIN });
                                      }));
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var nT = n(613057);
function ny(e) {
    let { title: t, subtitle: n, buttonText: i, buttonOnClick: l } = e;
    return (0, o.jsx)(D.Ay, {
        children: (0, o.jsxs)(eO.B, {
            gap: 24,
            children: [
                (0, o.jsxs)(eO.B, {
                    gap: 8,
                    children: [(0, o.jsx)(D.hE, { children: t }), (0, o.jsx)(D.tK, { children: n })],
                }),
                (0, o.jsx)(V.$, { onClick: l, text: i, fullWidth: !0 }),
            ],
        }),
    });
}
var nb = n(463347),
    nR = n(189213),
    nL = n(192308),
    nO = n(347704),
    nk = n(803306),
    nD = n(17372),
    nw = n(369053),
    nG = n(975571),
    nP = n(928658);
async function nU(e, t) {
    try {
        await (0, nw.TP)(e, t);
    } catch (e) {
        if (null != e && "object" == typeof e && 429 === e.status)
            throw { status: 429, body: { message: K.intl.string(K.t.Z2hIUf) } };
        throw e;
    }
}
function nF(e, t) {
    let i = !1;
    function l() {
        i || t?.();
    }
    function s(s) {
        function r() {
            return nU(e, s);
        }
        async function a(t) {
            return await (0, nw.G_)(e, s, t);
        }
        function u(n) {
            ((i = !0),
                setTimeout(() => {
                    i = !1;
                }, 0));
            let l = n?.token;
            switch (e) {
                case nD.tY.MESSAGE:
                    (0, nP.bM)(l, t);
                    break;
                case nD.tY.USER:
                    (0, nP.nQ)(l, t);
                    break;
                case nD.tY.GUILD:
                    (0, nP.V3)(l, t);
                    break;
                case nD.tY.MEDIA_TAKEDOWN:
                    (0, nP._Y)(l, t);
            }
        }
        ((i = !0),
            setTimeout(() => {
                i = !1;
            }, 0),
            (0, nL.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("932606"), n.e("919840")]).then(n.bind(n, 79779));
                    return (t) =>
                        (0, o.jsx)(e, {
                            ...t,
                            onFormSubmit: a,
                            onResend: r,
                            onSuccess: u,
                            headerText: K.intl.string(K.t.H3Q7U8),
                            confirmButtonText: K.intl.string(K.t["13ofGu"]),
                            impression: { impressionName: d.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            ));
    }
    return function () {
        function t(t) {
            return nU(e, t);
        }
        ((0, nL.closeAllModals)(),
            (0, nL.openModalLazy)(
                async () => {
                    let { default: i } = await n.e("429232").then(n.bind(n, 180275));
                    return (n) =>
                        (0, o.jsx)(i, {
                            ...n,
                            onFormSubmit: t,
                            onSuccess: s,
                            headerText: K.intl.string(K.t.ZLRYGU),
                            confirmButtonText: K.intl.string(K.t.PDTjLN),
                            subtitle: e === nD.tY.MEDIA_TAKEDOWN ? K.intl.string(K.t.jt3z8f) : void 0,
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            ));
    };
}
var nB = n(939249),
    nV = n(921853),
    nM = n(43008);
let nH = { [nD.tY.MESSAGE]: K.t.fuqnBC, [nD.tY.USER]: K.t.F4jrRW, [nD.tY.GUILD]: K.t.gH3aMs },
    nW = (e) => {
        let { title: t, menuType: n, onReopen: i } = e,
            l = u.useCallback(() => {
                nF(n, i)();
            }, [n, i]);
        return (0, o.jsxs)(nB.D, {
            className: nM.b0,
            onClick: l,
            children: [
                (0, o.jsx)(B.E, { variant: "text-md/medium", children: t }),
                (0, o.jsx)(nV.n, { size: "sm", style: { transform: "rotate(180deg)" } }),
            ],
        });
    },
    nQ = (e) => {
        let { dsaCapabilities: t, onReopen: n } = e;
        return (0, o.jsx)(eO.B, {
            gap: 16,
            children: (0, o.jsx)("div", {
                className: nM.kL,
                children: t.map((e) =>
                    e === nD.tY.MEDIA_TAKEDOWN || null == nH[e]
                        ? null
                        : (0, o.jsx)(nW, { title: K.intl.string(nH[e]), menuType: e, onReopen: n }, e),
                ),
            }),
        });
    };
var nK = n(881636),
    nz = n(138658);
let nX = () => {
    let { goToStep: e } = (0, nO.n)(),
        t = u.useCallback(() => {
            e(nZ.DSA);
        }, [e]),
        n = u.useCallback(() => {
            e(nZ.TIDA);
        }, [e]);
    return (0, o.jsxs)(eO.B, {
        gap: 8,
        children: [
            (0, o.jsx)(B.E, { variant: "text-md/normal", children: K.intl.string(K.t.bd1h5T) }),
            (0, o.jsxs)("div", {
                className: nz.k,
                children: [
                    (0, o.jsxs)(nB.D, {
                        className: nz.b,
                        onClick: t,
                        children: [
                            (0, o.jsxs)("div", {
                                children: [
                                    (0, o.jsx)(B.E, {
                                        variant: "text-md/medium",
                                        children: K.intl.string(K.t["AszWL/"]),
                                    }),
                                    (0, o.jsx)(B.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: K.intl.string(K.t["0Jikui"]),
                                    }),
                                ],
                            }),
                            (0, o.jsx)(nK.u, { size: "sm" }),
                        ],
                    }),
                    (0, o.jsxs)(nB.D, {
                        className: nz.b,
                        onClick: n,
                        children: [
                            (0, o.jsxs)("div", {
                                children: [
                                    (0, o.jsx)(B.E, { variant: "text-md/medium", children: K.intl.string(K.t.jMSjZL) }),
                                    (0, o.jsx)(B.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: K.intl.string(K.t.qEaUPS),
                                    }),
                                ],
                            }),
                            (0, o.jsx)(nK.u, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var nq = n(108124);
let nY = () =>
    (0, o.jsxs)(eO.B, {
        gap: 24,
        children: [
            (0, o.jsx)(B.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: K.intl.string(K.t["3zG2Y9"]),
            }),
            (0, o.jsxs)(eO.B, {
                gap: 16,
                children: [
                    (0, o.jsxs)(eO.B, {
                        gap: 8,
                        children: [
                            (0, o.jsx)(B.E, { variant: "text-md/semibold", children: K.intl.string(K.t.CfBo0z) }),
                            (0, o.jsxs)("ul", {
                                className: nq.T,
                                children: [
                                    (0, o.jsx)("li", {
                                        children: (0, o.jsx)(B.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: K.intl.string(K.t.ofQnNQ),
                                        }),
                                    }),
                                    (0, o.jsx)("li", {
                                        children: (0, o.jsx)(B.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: K.intl.string(K.t.dFaQGn),
                                        }),
                                    }),
                                    (0, o.jsx)("li", {
                                        children: (0, o.jsx)(B.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: K.intl.string(K.t.RVNwXh),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, o.jsx)(B.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: K.intl.string(K.t.o5azXJ),
                    }),
                    (0, o.jsx)(B.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: K.intl.format(K.t.YETtaY, {
                            policyURL: "https://discord.com/safety/non-consensual-intimate-media-policy-explainer",
                        }),
                    }),
                ],
            }),
            (0, o.jsxs)(eO.B, {
                gap: 8,
                children: [
                    (0, o.jsx)(B.E, { variant: "text-md/semibold", children: K.intl.string(K.t.FJh2zi) }),
                    (0, o.jsx)(B.E, {
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
var n$ = n(379492);
g.Ay.initialize();
var nZ = (((s = {}).SELECTION = "selection"), (s.DSA = "dsa"), (s.TIDA = "tida"), s);
let nJ = (e) => {
        let { transitionState: t, onClose: n } = e,
            [i, l] = u.useState(!0),
            [s, r] = u.useState([]),
            [a, c] = u.useState(null),
            d = (0, g.bG)([eq.default], () => eq.default.isAuthenticated()),
            h = (0, g.bG)([eI.A], () => eI.A.hasLoadedExperiments),
            m = u.useCallback(() => {
                (0, nw.OY)()
                    .then((e) => {
                        let {
                            body: { capabilities: t },
                        } = e;
                        (l(!1), r(t));
                    })
                    .catch(() => {
                        (l(!1), r([]));
                    });
            }, []);
        (u.useEffect(() => {
            d
                ? (l(!0),
                  nk
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => m())
                      .catch(() => l(!1)))
                : m();
        }, [d, m]),
            u.useEffect(() => {
                !(async function () {
                    h || (await p.A.getLocationMetadata(), p.A.getExperiments());
                })();
            }, [h]));
        let f = s.filter((e) => e !== nD.tY.MEDIA_TAKEDOWN),
            x = s.includes(nD.tY.MEDIA_TAKEDOWN),
            A = f.length > 0,
            E = A && x,
            _ = i || !h;
        u.useEffect(() => {
            _ || A || x || n();
        }, [_, A, x, n]);
        let j = u.useCallback(() => {
                (0, nL.openModalLazy)(() => Promise.resolve((e) => (0, o.jsx)(nJ, { ...e })), { dismissable: !1 });
            }, []),
            N = u.useCallback((e, t) => {
                "selection" !== t && "selection" !== e ? c("selection") : c(e);
            }, []),
            C = u.useMemo(() => nF(nD.tY.MEDIA_TAKEDOWN, j), [j]),
            v = a ?? (E ? "selection" : A ? "dsa" : "tida");
        if (_ || (!A && !x))
            return (0, o.jsx)(nR.Modal, {
                title: "",
                actions: [],
                transitionState: t,
                onClose: n,
                dismissable: !1,
                children: (0, o.jsx)(eO.B, {
                    gap: 16,
                    align: "center",
                    justify: "center",
                    style: { minHeight: "200px" },
                    children: (0, o.jsx)(eD.y, {}),
                }),
            });
        if (!E) {
            if (A)
                return (0, o.jsx)(nR.Modal, {
                    title: K.intl.string(K.t.Z11w18),
                    subtitle: K.intl.format(K.t["532l+q"], {
                        supportURL: nG.A.getArticleURL(R.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, o.jsx)(nQ, { dsaCapabilities: f, onReopen: j }),
                });
            if (x)
                return (0, o.jsx)(nR.Modal, {
                    title: K.intl.string(K.t.YignUm),
                    actions: [{ text: K.intl.string(K.t.D5Czbu), variant: "primary", onClick: C }],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, o.jsx)(nY, {}),
                });
        }
        let I = [
            { stepKey: "selection", modalProps: { title: K.intl.string(K.t.Z11w18) }, body: (0, o.jsx)(nX, {}) },
            {
                stepKey: "dsa",
                modalProps: {
                    title: K.intl.string(K.t.Z11w18),
                    subtitle: K.intl.format(K.t["532l+q"], {
                        supportURL: nG.A.getArticleURL(R.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, o.jsx)(nQ, { dsaCapabilities: f, onReopen: j }),
            },
            {
                stepKey: "tida",
                modalProps: { title: K.intl.string(K.t.YignUm) },
                body: (0, o.jsx)(nY, {}),
                nextButtonProps: { text: K.intl.string(K.t.D5Czbu) },
                onNext: () => (C(), !1),
            },
        ];
        return (0, o.jsx)("div", {
            className: { selection: n$.a, dsa: n$.q, tida: void 0 }[v],
            children: (0, o.jsx)(nO.t, {
                steps: I,
                currentStepKey: v,
                onStepChange: N,
                onClose: n,
                transitionState: t,
                dismissable: !1,
            }),
        });
    },
    n0 = () => (
        u.useEffect(() => {
            (0, nL.openModalLazy)(() => Promise.resolve((e) => (0, o.jsx)(nJ, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
var n1 = n(30793),
    n2 = n(970928),
    n4 = n(612181),
    n8 = n(179689);
let n7 = {
    dump(e) {
        let t;
        (null != performance.memory &&
            (t = {
                jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                totalJSHeapSize: performance.memory.totalJSHeapSize,
                usedJSHeapSize: performance.memory.usedJSHeapSize,
            }),
            e({
                browser: { name: eQ().name, version: eQ().version },
                os: { name: eQ().os.family, version: eQ().os.version },
                memory: t,
            }));
    },
    getTimeSinceNavigationStart: () => Date.now() - n8.fL,
};
var n3 = n(649852),
    n9 = n.n(n3),
    n5 = n(615300),
    n6 = n(319060),
    ie = n(844222),
    it = n(240248),
    ii = n(706192);
let il = (0, it.xI)(n6.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    is = { friction: 10, tension: 130 },
    ir = function (e) {
        return class extends u.Component {
            timeout;
            anim = new n5.A.Value(0);
            state = { shouldAnimate: !h.Fr };
            componentDidMount() {
                h.Fr || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize());
            }
            handleResize = () => {
                let e = window.innerWidth > il;
                (!this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({ shouldAnimate: e }));
            };
            handleResizeDebounced = n9()(this.handleResize, 60);
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
                n5.A.spring(this.anim, { toValue: e, ...is }).start(t);
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
                return (0, o.jsx)("div", {
                    className: ii.i,
                    children: (0, o.jsx)(ie.C.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, o.jsx)(n5.A.div, {
                                className: ii.l,
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, o.jsx)(e, { ...this.props }),
                            });
                        },
                    }),
                });
            }
        };
    };
var ia = n(603647),
    io = n(970672),
    iu = n(129014),
    ic = n(642277);
let id = function (e) {
    let { match: t, location: n, attemptDeepLink: i } = e,
        [l, s] = u.useState(0);
    (u.useEffect(() => {
        (iu.default.once("connected", () => {
            s(1);
        }),
            iu.default.once("disconnected", () => {
                (0, w.pX)((0, ic.W)());
            }),
            iu.default.connect());
    }, []),
        u.useEffect(() => {
            if (0 !== l) return;
            let e = setTimeout(() => (0, w.pX)((0, ic.W)()), 3e3);
            return () => clearTimeout(e);
        }, [l]));
    let r = u.useCallback(
        async (e, t) => {
            try {
                (s(2), await i(e, t), s(3));
            } catch (e) {
                console.error("Error opening deeplink", e);
            }
        },
        [i],
    );
    if ((0, w.MX)()) return null;
    switch (l) {
        case 1:
            return (0, o.jsxs)(D.Ay, {
                children: [
                    (0, o.jsx)(D.hE, { className: X.QB, children: K.intl.string(K.t.qllnGm) }),
                    (0, o.jsx)(D.tK, { children: K.intl.string(K.t.SXCxye) }),
                    (0, o.jsx)("div", {
                        className: X.eT,
                        children: (0, o.jsx)(V.$, {
                            text: K.intl.string(K.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => r(t, n),
                        }),
                    }),
                    (0, o.jsx)("div", {
                        className: F()(X.Ot, X.F1),
                        children: (0, o.jsx)(ed.Q, {
                            text: K.intl.string(K.t["2ixEBi"]),
                            textVariant: "text-sm/normal",
                            onClick: () => (0, w.pX)((0, ic.W)()),
                        }),
                    }),
                ],
            });
        case 0:
        case 2:
            return (0, o.jsxs)(D.Ay, {
                children: [(0, o.jsx)(D.hE, { children: K.intl.string(K.t["Z+hCVU"]) }), (0, o.jsx)(D.CK, {})],
            });
        case 3:
            return (0, o.jsxs)(D.Ay, {
                children: [
                    (0, o.jsx)(D.hE, { className: X.QB, children: K.intl.string(K.t.csrAMJ) }),
                    (0, o.jsx)(D.tK, { children: K.intl.string(K.t.ghBJz9) }),
                ],
            });
    }
};
var ih = n(723923);
g.Ay.initialize();
class im extends u.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, eg.A)(this.props.location),
            t = (0, c.parse)(this.props.location.search);
        (E.Bo.post({
            url: R.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
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
            (0, G.d0)("disable_email_notifications"));
    }
    renderBusy() {
        return (0, o.jsx)(D.Ay, { children: (0, o.jsx)(D.CK, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: i } = this.props,
            l = K.intl.formatToPlainString(K.t.YDAohB, { category: t });
        return (0, o.jsxs)(D.Ay, {
            children: [
                (0, o.jsx)(D.hE, { className: X.QB, children: K.intl.string(K.t.f6rdLg) }),
                (0, o.jsx)(D.tK, { children: l }),
                (0, o.jsx)("div", {
                    className: X.QX,
                    children: (0, o.jsx)(V.$, { text: K.intl.string(K.t.fIv16B), fullWidth: !0, onClick: () => i(n) }),
                }),
                (0, o.jsx)("div", {
                    className: X.Ot,
                    children: (0, o.jsx)(ed.Q, {
                        text: K.intl.string(K.t.YYTirT),
                        textVariant: "text-sm/normal",
                        onClick: () => i((0, N.settingsPathToRoute)(v.od.NOTIFICATIONS_EMAILS)),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: i } = this.state;
        if (null != i) {
            let e = ih.px.find((e) => e.category === i);
            if (null != e) return this.renderCategorySuccess(i, e.label());
        }
        return (0, o.jsxs)(D.Ay, {
            children: [
                (0, o.jsx)(D.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: tt._3.DEPRECATED_SIZE_100,
                    className: X.SX,
                }),
                (0, o.jsx)(D.hE, { className: X.QB, children: K.intl.string(K.t["6U6OMQ"]) }),
                (0, o.jsx)(D.tK, { children: K.intl.string(K.t["yaDJ4/"]) }),
                (0, o.jsx)("div", {
                    className: X.eT,
                    children: (0, o.jsx)(V.$, { text: K.intl.string(K.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, o.jsxs)(D.Ay, {
            children: [
                (0, o.jsx)(D._V, { src: n(37772), className: X.SX }),
                (0, o.jsx)(D.hE, { className: X.QB, children: K.intl.string(K.t.ox9hIS) }),
                (0, o.jsx)(D.tK, { children: K.intl.string(K.t["/dcuR5"]) }),
                (0, o.jsx)("div", {
                    className: X.eT,
                    children: (0, o.jsx)(V.$, { text: K.intl.string(K.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let ig = g.Ay.connectStores([eh.A], () => ({ defaultRoute: eh.A.defaultRoute }))(im);
var ip = n(110782),
    ix = n(10088),
    iA = n(871123),
    iE = n(189081),
    i_ = n(67480),
    ij = n(45938),
    iN = n(587895),
    iC = n(242874),
    iv = n(165191),
    iI = n(287809),
    iS = n(97352),
    iT = n(615396),
    iy = n(202541),
    ib = n(716592);
function iR() {
    return (0, o.jsxs)(u.Fragment, {
        children: [
            (0, o.jsx)(D.eu, { src: null, size: tt._3.DEPRECATED_SIZE_100, className: X.SX }),
            (0, o.jsx)(D.tK, { children: K.intl.string(K.t.lTGZAl) }),
            (0, o.jsx)(D.hE, { className: F()(X.Ot, eN.tR), children: K.intl.string(K.t.ZTNur7) }),
        ],
    });
}
let iL = g.Ay.connectStores([i_.A, iN.A, iS.A, iI.default], (e) => {
    let { giftCode: t } = e,
        n = i_.A.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, iT.c9)(i) : null,
        application: null != n ? iN.A.getApplication(n.applicationId) : null,
        gifter: iI.default.getUser(t.userId),
    };
})(function (e) {
    let { error: t, giftCode: n, gifter: i, sku: l, application: s, subscriptionPlan: r } = e,
        a = null == i ? K.intl.string(K.t.lTGZAl) : K.intl.formatToPlainString(K.t.TjWdPc, { username: i.username });
    if (null == l) return (0, o.jsx)(iR, {});
    let c = l.name;
    return (
        null != r &&
            (c = K.intl.formatToPlainString(r.interval === iy.WT.MONTH ? K.t.CTpcCZ : K.t["rgPWG/"], {
                skuName: l.name,
                intervalCount: r.intervalCount,
            })),
        (0, o.jsxs)(u.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, o.jsx)(iv.A, { defaultAnimationState: iC.oA.LOOP, giftStyle: n.giftStyle, className: ib.e })
                    : (0, o.jsx)(D.eu, {
                          src: null != i ? i.getAvatarURL(void 0, 100) : null,
                          size: tt._3.DEPRECATED_SIZE_100,
                          className: X.SX,
                      }),
                null != t
                    ? (0, o.jsxs)(u.Fragment, {
                          children: [
                              (0, o.jsx)(D.tK, { children: K.intl.string(K.t.mDFGFj) }),
                              (0, o.jsx)(D.hE, { children: t }),
                          ],
                      })
                    : (0, o.jsxs)(u.Fragment, {
                          children: [
                              (0, o.jsx)(D.tK, { children: a }),
                              (0, o.jsxs)(D.hE, {
                                  className: F()(X.Ot, eN.tR),
                                  children: [
                                      l.productLine !== R.EZt.COLLECTIBLES &&
                                          (0, o.jsx)(ti.A, {
                                              size: ti.M.MEDIUM,
                                              className: ib.I,
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
var iO = n(935399),
    ik = n(475743),
    iD = n(707554),
    iw = n(68281);
function iG(e) {
    let { loginStatus: t, authBoxClassName: n, transparent: i = !1, onSubmit: l, onCancelAccountDeletion: s } = e,
        r = t === R.aUe.ACCOUNT_DISABLED,
        a = r ? K.intl.string(K.t["j3rC+U"]) : K.intl.string(K.t.ZFWofo),
        u = r ? K.intl.string(K.t["6eNTWe"]) : K.intl.string(K.t["pCBti+"]);
    return (0, o.jsx)(D.Ay, {
        tag: "form",
        onSubmit: l,
        className: n,
        transparent: i,
        children: (0, o.jsxs)(iD.F, {
            component: (0, o.jsx)(D.hE, { className: X.QB, children: a }),
            children: [
                (0, o.jsx)(D.tK, { className: X.SX, children: u }),
                (0, o.jsxs)(D.eB, {
                    children: [
                        (0, o.jsx)(V.$, { text: K.intl.string(K.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, o.jsx)("div", {
                            className: F()(X.Ot, iw.Qt),
                            children: K.intl.format(K.t.js2rr5, { onClick: s }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iP = n(504394),
    iU = n(275538),
    iF = n(228916);
function iB(e) {
    let { children: t, className: n, ...i } = e,
        l = t();
    return (0, o.jsx)(D.Ay, {
        ...i,
        className: F()(n, iF.kL),
        contentClassName: iF.Qs,
        children: l.map((e, t) =>
            (0, o.jsx)("div", { className: iF.fi, style: { flexBasis: `${100 / l.length}%` }, children: e }, t),
        ),
    });
}
var iV = n(895600),
    iM = n(506774),
    iH = n(104798),
    iW = n(991512);
let iQ = "mweb_handoff_nonce",
    iK = "mweb_handoff_nonce_expiration",
    iz = +tU.A.Millis.MINUTE,
    iX = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    iq = new Set(["deep_link_failed"]);
function iY() {
    (iM.w.remove(iQ), iM.w.remove(iK));
}
let i$ = () => {
    let e = (0, g.bG)([eq.default], () => eq.default.getFingerprint()),
        { fingerprint: t, handoff_token: n } = (0, c.parse)(window.location.search),
        i = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
        l = i ?? (null !== e ? e : void 0);
    u.useEffect(() => {
        null !== i && e !== i && f.h.dispatch({ type: "FINGERPRINT", fingerprint: i });
    }, [i, e]);
    let [s, r] = u.useState(null),
        a = u.useCallback(
            (e) => {
                (r(e),
                    y.default.track(
                        R.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                        { reason: e, fingerprint: (0, eX.v)(l) },
                        { fingerprint: l },
                    ));
            },
            [r, l],
        ),
        d = iM.w.get(iQ);
    if (
        ("null" === n && null === s && a("deep_link_failed"),
        null != n && "null" !== n && null == d && null === s && a("nonce_missing"),
        u.useEffect(() => {
            if (null != d) {
                let e = iM.w.get(iK);
                (null == e || Date.now() >= e) && (a("nonce_expired"), iY());
            }
        }, [d, a]),
        u.useEffect(() => {
            null != n &&
                "null" !== n &&
                null != d &&
                null == s &&
                E.Bo.post({ url: R.Rsh.HANDOFF_EXCHANGE, body: { key: d, handoff_token: n }, rejectWithError: !0 })
                    .then((e) => p.A.loginToken(e.body.token, !1))
                    .then(() => {
                        y.default.track(R.HAw.LOGIN_SUCCESSFUL, {
                            source: R.mdB.MOBILE_WEB_HANDOFF,
                            is_new_user: !1,
                            fingerprint: (0, eX.v)(l),
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
                        iY();
                    });
        }, [n, d, s, l, a]),
        null == l)
    )
        return null;
    let h =
        null == s
            ? (0, o.jsxs)(o.Fragment, {
                  children: [K.intl.string(K.t.uJ1JsY), (0, o.jsx)("br", {}), K.intl.string(K.t.GHVWAs)],
              })
            : iq.has(s)
              ? K.intl.string(K.t.EPt55r)
              : iX.has(s)
                ? K.intl.string(K.t.g87kTp)
                : void 0;
    return null != s && iq.has(s)
        ? (0, o.jsx)("div", {
              className: iW.Un,
              children: (0, o.jsx)(B.E, {
                  color: "interactive-text-default",
                  variant: "text-sm/semibold",
                  children: h,
              }),
          })
        : (0, o.jsxs)("div", {
              className: iW.kL,
              children: [
                  (0, o.jsx)(B.E, { variant: "text-sm/semibold", children: h }),
                  (0, o.jsx)(V.$, {
                      variant: "overlay-primary",
                      text: K.intl.string(K.t.NcC759),
                      onClick: function () {
                          let e = iH.A.generateNonce();
                          (iM.w.set(iQ, e), iM.w.set(iK, Date.now() + iz));
                          let t = new URL(R.J$u),
                              n = new URLSearchParams(window.location.search);
                          (n.delete("fingerprint"), n.delete("handoff_token"));
                          let i = new URLSearchParams();
                          (i.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                              i.set("key", e),
                              i.set("fingerprint", l),
                              (t.search = i.toString()),
                              y.default.track(
                                  R.HAw.DEEP_LINK_CLICKED,
                                  { fingerprint: (0, eX.v)(l), source: "mobile_web_handoff", destination: R.J$u },
                                  { fingerprint: l, flush: !0 },
                              ),
                              (window.location.href = t.toString()));
                      },
                  }),
              ],
          });
};
var iZ = n(274303),
    iJ = n(139286),
    i0 = n(970573),
    i1 = n(491919);
function i2(e) {
    let { onDismiss: t, embedded: n = !1 } = e;
    return (
        (0, iJ.A)({ type: d.ImpressionTypes.MODAL, name: d.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, o.jsxs)(D.Ay, {
            className: i1.ci,
            transparent: n,
            children: [
                !n && (0, o.jsx)(D.hE, { children: K.intl.string(K.t.bVbB63) }),
                (0, o.jsx)(B.E, {
                    className: i1.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: K.intl.string(K.t["0M5fN7"]),
                }),
                (0, o.jsx)(i0.A, {
                    actionText: K.intl.string(K.t["DSN+hw"]),
                    onAction: (e) => {
                        e === i0.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, o.jsx)("div", {
                    className: i1.o1,
                    children: (0, o.jsx)(ed.Q, {
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
function i4(e) {
    let {
        authBoxClassName: t,
        country: n,
        login: i,
        password: l,
        onLoginChange: s,
        onPasswordChange: r,
        loginRef: a,
        passwordRef: u,
    } = e;
    return (0, o.jsxs)(D.Ay, {
        className: t,
        children: [
            (0, o.jsx)(iP.M, {}),
            (0, o.jsxs)(D.eB, {
                className: X.QX,
                children: [
                    (0, o.jsx)(ej.A, {
                        className: X.SX,
                        alpha2: n.alpha2,
                        countryCode: n.code.split(" ")[0],
                        label: K.intl.string(K.t.tUjnxr),
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
                    (0, o.jsx)(D.pd, {
                        className: X.SX,
                        label: K.intl.string(K.t["CIGa+7"]),
                        onChange: r,
                        type: "password",
                        setRef: u,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        value: l,
                        required: !0,
                    }),
                    (0, o.jsx)("div", {
                        className: X.QB,
                        children: (0, o.jsx)(V.$, {
                            text: K.intl.string(K.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, o.jsx)(ed.Q, { text: K.intl.string(K.t.wWIufs), textVariant: "text-sm/normal", disabled: !0 }),
                    (0, o.jsx)("div", {
                        className: X.a5,
                        children: (0, o.jsx)(ed.Q, {
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
var i8 = n(401755);
function i7(e, t) {
    if (null == t[e]) return null;
    {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n;
    }
}
function i3(e) {
    let t,
        {
            invite: n,
            guildTemplate: i,
            giftCode: l,
            authBoxClassName: s,
            isEmbedded: r = !1,
            disableAutofocusOnDefaultForm: a,
            login: d,
            password: m,
            errors: f,
            loginSource: p,
            dismissedChooseAccount: x,
            setDismissedChooseAccount: A,
            conditionalMediationAbortController: E,
            onLoginChange: _,
            onPasswordChange: j,
            handleLogin: N,
            handleForgotPassword: C,
            handleGotoRegister: v,
        } = e,
        I = (0, g.bG)([e_.A], () => e_.A.getCountryCode()),
        S = (0, g.bG)([eq.default], () => eq.default.getLoginStatus()),
        T = (0, g.bG)([iZ.A], () => iZ.A.getHasLoggedInAccounts()),
        b = u.useCallback(
            (e) => {
                y.default.track(R.HAw.LOGIN_SUCCESSFUL, {
                    source: R.mdB.QR_CODE,
                    login_source: p,
                    gift_code_sku_id: l?.skuId ?? null,
                    is_new_user: !1,
                    login_method: "remote_auth",
                    login_instance_id: e ?? null,
                });
            },
            [p, l],
        ),
        { handoff_token: L } = (0, c.parse)(window.location.search),
        O = h.Fr && h.KY && null != L,
        k = null == f.email && null != f.password,
        w = u.useRef(null),
        G = u.useRef(null),
        P = (0, ik.Ay)(f);
    (u.useEffect(() => {
        function e(e) {
            return null != f[e];
        }
        null != P && P !== f && (e("password") ? G.current?.focus() : (e("email") || e("login")) && w.current?.focus());
    }, [f, w, G, P]),
        (t = r
            ? null
            : null != n
              ? (0, o.jsx)("div", { className: X.S3, children: (0, o.jsx)(iP.A, { invite: n }) })
              : null != l
                ? (0, o.jsx)(iL, { giftCode: l })
                : (0, o.jsxs)("div", {
                      className: iw.wx,
                      children: [
                          (0, o.jsx)(D.hE, { className: X.QB, children: K.intl.string(K.t["7fNJgA"]) }, "title"),
                          !1 === (0, nN.isAndroidWeb)()
                              ? (0, o.jsx)(D.tK, { children: K.intl.string(K.t.euS7r4) }, "subtitle")
                              : null,
                      ],
                  })));
    let U = (0, o.jsxs)("div", {
        className: iw.Eh,
        children: [
            T &&
                x &&
                (0, o.jsx)("div", {
                    className: iw.AX,
                    children: (0, o.jsx)(V.$, {
                        onClick: () => A(!1),
                        variant: "secondary",
                        text: K.intl.string(K.t["1MrpWO"]),
                        icon: nV.n,
                    }),
                }),
            t,
            (0, o.jsx)(iD.F, {
                children: (0, o.jsxs)(D.eB, {
                    className: X.QX,
                    children: [
                        (0, o.jsx)(ej.A, {
                            alpha2: I.alpha2,
                            countryCode: I.code.split(" ")[0],
                            className: X.SX,
                            label: K.intl.string(K.t.tUjnxr),
                            error: i7("login", f) ?? i7("email", f),
                            onChange: _,
                            setRef: w,
                            autoCapitalize: "none",
                            autoComplete: "username webauthn",
                            autoCorrect: "off",
                            spellCheck: "false",
                            value: d,
                            autoFocus: !k && !O && !a,
                            required: !0,
                        }),
                        (0, o.jsx)(D.pd, {
                            label: K.intl.string(K.t["CIGa+7"]),
                            error: i7("password", f),
                            onChange: j,
                            name: "password",
                            type: "password",
                            setRef: G,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            autoFocus: k && !O && !a,
                            value: m,
                            required: !0,
                        }),
                        (0, o.jsx)("div", {
                            className: F()(X.SX, X.a5),
                            children: (0, o.jsx)(ed.Q, {
                                text: K.intl.string(K.t.wWIufs),
                                textVariant: "text-sm/normal",
                                onClick: () => {
                                    (null != w.current && w.current.focus(), C());
                                },
                            }),
                        }),
                        (0, o.jsx)("div", {
                            className: X.QB,
                            children: (0, o.jsx)(V.$, {
                                text: K.intl.string(K.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                loading: S === R.aUe.LOGGING_IN,
                            }),
                        }),
                        (0, o.jsxs)("div", {
                            className: X.a5,
                            children: [
                                (0, o.jsx)("span", { className: iw.Qt, children: K.intl.string(K.t.tmE73r) }),
                                (0, o.jsx)("span", {
                                    className: iw.Z8,
                                    children: (0, o.jsx)(ed.Q, {
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
    return null != n && n.state === R.elq.RESOLVING
        ? (0, o.jsx)(i4, {
              authBoxClassName: s,
              country: I,
              login: d,
              password: m,
              onLoginChange: _,
              onPasswordChange: j,
              loginRef: w,
              passwordRef: G,
          })
        : null != i
          ? i.state === i8.QB.RESOLVING
              ? (0, o.jsx)(i4, {
                    authBoxClassName: s,
                    country: I,
                    login: d,
                    password: m,
                    onLoginChange: _,
                    onPasswordChange: j,
                    loginRef: w,
                    passwordRef: G,
                })
              : (0, o.jsx)(iB, {
                    onSubmit: N,
                    tag: "form",
                    className: F()(s, iw.Sy),
                    children: () => [
                        (0, o.jsx)(iV.A, { guildTemplate: i }, "template"),
                        (0, o.jsx)(u.Fragment, { children: U }, "form-wrapper"),
                    ],
                })
          : T && !x
            ? (0, o.jsx)(i2, { onDismiss: () => A(!0), embedded: r })
            : (0, o.jsxs)("div", {
                  children: [
                      (0, o.jsx)(D.Ay, {
                          onSubmit: N,
                          tag: "form",
                          className: F()(s, { [iw.M0]: O }),
                          transparent: r,
                          expanded: !0,
                          children: (0, o.jsxs)(eO.B, {
                              direction: r ? "vertical" : "horizontal",
                              align: r ? "stretch" : "center",
                              gap: r ? 24 : 64,
                              children: [
                                  U,
                                  (0, o.jsx)(iU.A, {
                                      horizontal: r,
                                      onAuthenticateSuccess: b,
                                      conditionalMediationAbortController: E,
                                  }),
                              ],
                          }),
                      }),
                      O && (0, o.jsx)(i$, {}),
                  ],
              });
}
var i9 = n(572469);
function i5(e) {
    let { loginSource: t, giftCodeSKUId: n, isEmbedded: i = !1 } = e,
        l = (0, g.cf)(
            [eq.default],
            () => ({ ticket: eq.default.getMFATicket(), methods: eq.default.getMFAMethods() }),
            [],
        ),
        s = u.useCallback(
            (e) => {
                let { mfaType: i, data: l, ticket: s } = e;
                return (
                    H._.dispatch(R.jej.WAVE_EMPHASIZE),
                    p.A.loginMFAv2({ code: l, ticket: s, mfaType: i, source: t, giftCodeSKUId: n })
                );
            },
            [t, n],
        );
    return (0, o.jsx)(D.Ay, {
        transparent: i,
        style: { padding: 0 },
        children: (0, o.jsx)(i9.t, {
            mfaFinish: s,
            mfaChallenge: l,
            onEarlyClose: () => {
                f.h.dispatch({ type: "LOGIN_RESET" });
            },
            embedded: i,
        }),
    });
}
var i6 = n(511815),
    le = n(139033),
    lt = n(952116),
    ln = n(491509),
    li = n(913612),
    ll = n(933924);
let ls = (e) => n.g.location.assign(e);
function lr(e) {
    let {
        invite: t,
        guildTemplate: n,
        giftCode: i,
        location: l,
        redirectTo: s,
        transitionTo: r,
        authBoxClassName: a,
        isEmbedded: d = !1,
        loginSource: h,
        disableAutofocusOnDefaultForm: m,
    } = e;
    (0, li.K)();
    let f = (0, g.bG)([eq.default], () => eq.default.isAuthenticated()),
        x = (0, g.bG)([T.A], () => T.A.isHandoffAvailable()),
        A = (0, g.bG)([eq.default], () => eq.default.getLoginStatus()),
        E = i?.skuId ?? null,
        j = (0, g.bG)([i_.A], () => (null != E ? i_.A.get(E) : null)),
        {
            checkingHandoff: N,
            redirecting: C,
            login: v,
            password: I,
            phoneVerifyError: b,
            dismissedChooseAccount: L,
            setDismissedChooseAccount: O,
            errors: k,
            conditionalMediationAbortController: P,
            loginSource: U,
            loginOrSSO: F,
            handleLogin: V,
            handleIPAuthorize: M,
            handlePasswordReset: W,
            handleForgotPassword: Q,
            handleResendCode: z,
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
                    redirectTo: a,
                    location: d,
                    loginSource: h,
                } = e,
                [m, g] = u.useState(() => l),
                [f, x] = u.useState(() => s),
                [A, E] = u.useState(""),
                [_, j] = u.useState(() => {
                    let e = null != d ? (0, c.parse)(d.search) : {};
                    return e.email ?? e.login ?? "";
                }),
                [N, C] = u.useState(""),
                [v, I] = u.useState(!1),
                [T, y] = u.useState(null),
                [b, L] = u.useState(!1),
                [O] = u.useState(() => new AbortController()),
                [k, D] = u.useState({});
            !m || l || s || g(!1);
            let w = u.useMemo(() => {
                    if (null != h) return h;
                    if (null != i) return "gift";
                    if (null != n) return "guild_template";
                    if (null != t) {
                        if (null != t.guild) return "guild_invite";
                        if (null != t.channel) return "dm_invite";
                        if (null != t.inviter) return "friend_invite";
                    }
                    return null != a ? S(a) : null;
                }, [h, i, n, t, a]),
                G = null != i ? i.skuId : null,
                P = u.useCallback(
                    (e) => {
                        let t = null != e ? (0, c.parse)(e.search) : {};
                        if ((delete t.redirect_to, null != a)) {
                            if (eu(a)) return void ec(a);
                            r(a);
                        } else if (null == t.service) r(R.BVt.APP);
                        else {
                            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + R.Rsh.SSO,
                                n = { ...t, token: eq.default.getToken() };
                            window.location = `${e}?${(0, c.stringify)(n)}`;
                        }
                    },
                    [a, r],
                ),
                U = u.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e && null != t && (x(!0), n ? p.A.verifySSOToken("login").then(() => P(t)) : P(t));
                    },
                    [P],
                ),
                F = u.useCallback(() => {
                    (O.abort("Login state reset"), D({}), p.A.loginReset());
                }, [O]),
                V = u.useCallback(
                    async function (e) {
                        let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (e?.preventDefault(),
                            O.abort("Starting password login"),
                            H._.dispatch(R.jej.WAVE_EMPHASIZE),
                            D({}));
                        try {
                            await p.A.login({
                                login: A + _,
                                password: N,
                                undelete: n ?? v,
                                source: w,
                                giftCodeSKUId: G,
                                invite: t,
                            });
                        } catch (e) {
                            D((0, tX.p)(e));
                        }
                    },
                    [O, _, A, N, v, w, G, t],
                ),
                M = u.useCallback(
                    async (e) => {
                        let t = A + _;
                        D({});
                        try {
                            let { token: n } = await eA.A.verifyPhone(t, e, !1);
                            (await p.A.authorizeIPAddress(n), V());
                        } catch (e) {
                            null != e.body && null != e.body.message && y(e.body.message);
                        }
                    },
                    [A, _, V],
                ),
                W = u.useCallback(
                    async (e) => {
                        y(null);
                        try {
                            let { token: t } = await eA.A.verifyPhone(A + _, e, !1);
                            r(R.BVt.RESET, { search: (0, c.stringify)({ token: t, from_login: "true" }) });
                        } catch (e) {
                            null != e.body && null != e.body.message && y(e.body.message);
                        }
                    },
                    [A, _, r],
                ),
                Q = u.useCallback(
                    async (e) => {
                        null != e && e.preventDefault();
                        let t = A + _;
                        D({});
                        try {
                            H._.dispatch(R.jej.WAVE_EMPHASIZE);
                            let e = await p.A.forgotPassword(t);
                            if (!1 === e) return;
                            e === i6.D.ONE_TIME_LOGIN
                                ? (0, nL.openModal)((e) => {
                                      let t = [
                                          {
                                              variant: "primary",
                                              text: K.intl.string(K.t.BddRzS),
                                              onClick: e.onClose,
                                              fullWidth: !0,
                                          },
                                      ];
                                      return (0, o.jsx)(nR.Modal, {
                                          title: K.intl.string(K.t["6Ecyts"]),
                                          actions: t,
                                          ...e,
                                          children: (0, o.jsx)(B.E, {
                                              variant: "text-md/normal",
                                              children: K.intl.string(K.t.iAcrqV),
                                          }),
                                      });
                                  })
                                : (0, le.A)({
                                      title: K.intl.string(K.t.f5Pi7A),
                                      subtitle: K.intl.format(K.t["6u5hQ9"], { email: t }),
                                  });
                        } catch (e) {
                            D((0, tX.p)(e));
                        }
                    },
                    [A, _],
                ),
                z = u.useCallback(() => {
                    eA.A.resendCode(A + _);
                }, [A, _]),
                X = u.useCallback((e) => {
                    (null != e && e.preventDefault(),
                        p.A.loginReset(),
                        C(""),
                        E(""),
                        j(""),
                        I(!1),
                        g(!1),
                        x(!1),
                        D({}));
                }, []),
                q = u.useCallback(() => {
                    (I(!0), V(void 0, { undelete: !0 }));
                }, [V]),
                Y = u.useCallback(() => {
                    let e,
                        l = null != d ? (0, c.parse)(d.search) : {};
                    ("" !== _ && (l.email = _),
                        null != t
                            ? ((l.mode = "register"), (e = R.BVt.INVITE(t.code)))
                            : null != i
                              ? ((l.mode = "register"), (e = R.BVt.GIFT_CODE(i.code)))
                              : null != n
                                ? (e = R.BVt.GUILD_TEMPLATE(n.code))
                                : null != a
                                  ? ((e = R.BVt.REGISTER), (l.redirect_to = a))
                                  : (e = R.BVt.REGISTER),
                        F(),
                        r(e, { search: (0, c.stringify)(l) }),
                        H._.dispatch(R.jej.WAVE_EMPHASIZE));
                }, [_, t, i, n, a, d, F, r]);
            return {
                checkingHandoff: m,
                redirecting: f,
                login: _,
                password: N,
                phoneVerifyError: T,
                dismissedChooseAccount: b,
                setDismissedChooseAccount: L,
                errors: k,
                conditionalMediationAbortController: O,
                loginSource: w,
                loginOrSSO: U,
                handleLogin: V,
                handleIPAuthorize: M,
                handlePasswordReset: W,
                handleForgotPassword: Q,
                handleResendCode: z,
                handleReset: X,
                handleCancelAccountDeletion: q,
                handleGotoRegister: Y,
                loginReset: F,
                onLoginChange: u.useCallback((e, t) => {
                    (j(e), E(t));
                }, []),
                onPasswordChange: u.useCallback((e) => {
                    C(e);
                }, []),
            };
        })({
            invite: t,
            guildTemplate: n,
            giftCode: i,
            handoffAvailable: x,
            authenticated: f,
            transitionTo: r ?? ls,
            redirectTo: s,
            location: l,
            loginSource: h,
        });
    (0, iO.Ay)(() => {
        (x && !f ? (0, _.ST)() : f && F(f, l, !0),
            y.default.track(
                R.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: U,
                    authenticated: f,
                    ...(null != j ? (0, ln.A)(j, !1, !1) : {}),
                    source: (0, w.PR)(),
                },
                { flush: !0 },
            ),
            f || (0, ll.a)({ abortController: P, loginSource: U, giftCodeSKUId: E }),
            p.A.getLocationMetadata(),
            (0, G.d0)("login"));
    });
    let et = (0, ik.Ay)(f);
    if (
        (u.useEffect(() => {
            let e = N && (x || C);
            f && !1 === et && !e && (P.abort("Transitioning to authenticated state"), F(f, l));
        }, [f, x, et, C, N, P, F, l]),
        C || N)
    )
        return (0, o.jsx)(D.Ay, { transparent: d, children: (0, o.jsx)(eD.y, {}) });
    if (x)
        return (0, o.jsxs)(D.Ay, {
            className: a,
            transparent: d,
            children: [
                (0, o.jsx)(D.CK, {}),
                (0, o.jsx)(D.hE, { className: X.QB, children: K.intl.string(K.t.S6RMNA) }),
                (0, o.jsx)(D.tK, { children: K.intl.string(K.t.YZiJbh) }),
            ],
        });
    switch (A) {
        case R.aUe.LOGGING_IN_MFA_SMS:
        case R.aUe.MFA_SMS_STEP:
        case R.aUe.LOGGING_IN_MFA:
        case R.aUe.MFA_STEP:
            return (0, o.jsx)(i5, { loginSource: U, giftCodeSKUId: E, isEmbedded: d });
        case R.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case R.aUe.ACCOUNT_DISABLED:
            return (0, o.jsx)(iG, {
                loginStatus: A,
                authBoxClassName: a,
                transparent: d,
                onSubmit: q,
                onCancelAccountDeletion: Y,
            });
        case R.aUe.PHONE_IP_AUTHORIZATION:
            return (0, o.jsx)(D.Ay, {
                tag: "form",
                className: a,
                transparent: d,
                children: (0, o.jsx)(lt.A, {
                    title: K.intl.string(K.t.w55Oco),
                    subtitle: K.intl.format(K.t.CfRZBj, { onResendClick: z }),
                    error: b,
                    onSubmit: M,
                    onCancel: Z,
                }),
            });
        case R.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, o.jsx)(D.Ay, {
                tag: "form",
                className: a,
                transparent: d,
                children: (0, o.jsx)(lt.A, {
                    title: K.intl.string(K.t["+xqy3d"]),
                    subtitle: K.intl.format(K.t.ef4uZ7, { onResendClick: z }),
                    error: b,
                    onSubmit: W,
                    onCancel: Z,
                }),
            });
        case R.aUe.LOGGING_IN:
        case R.aUe.NONE:
        default:
            return (0, o.jsx)(i3, {
                invite: t,
                guildTemplate: n,
                giftCode: i,
                authBoxClassName: a,
                isEmbedded: d,
                disableAutofocusOnDefaultForm: m,
                login: v,
                password: I,
                errors: k,
                loginSource: U,
                dismissedChooseAccount: L,
                setDismissedChooseAccount: O,
                conditionalMediationAbortController: P,
                onLoginChange: J,
                onPasswordChange: ee,
                handleLogin: V,
                handleForgotPassword: Q,
                handleGotoRegister: $,
            });
    }
}
var la = n(664294);
let lo = null,
    lu = "underage";
class lc extends g.Ay.Store {
    static displayName = "AgeGateStore";
    isUnderageAnonymous() {
        if (nN.isPlatformEmbedded && 1) {
            if (null != lo && lo + t0.bm > Date.now()) return !0;
        } else if (1) return null != la.parse(document.cookie)[lu];
        return !1;
    }
}
let ld = new lc(f.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        ((lo = Date.now()), (document.cookie = `${lu}=1;path=/`));
    },
    LOGIN_SUCCESS: function () {
        ((lo = null), (document.cookie = `${lu}=1;path=/;max-age=0`));
    },
});
var lh = n(509434),
    lm = n(970116);
let lg = function () {
    return (0, o.jsx)(D.Ay, {
        children: (0, o.jsxs)("div", {
            className: lm.hQ,
            children: [
                (0, o.jsx)(D.hE, { className: lm.DD, children: K.intl.string(K.t.nCB6Ga) }),
                (0, o.jsx)(D.tK, {
                    className: lm.VA,
                    children: K.intl.format(K.t.KQgoxG, { underageMessage: K.intl.string(K.t.WqEH4D) }),
                }),
                (0, o.jsx)(V.$, {
                    icon: lh.I,
                    text: K.intl.string(K.t.hvVgAZ),
                    onClick: () => window.open(nG.A.getArticleURL(R.MVz.AGE_GATE), "_blank"),
                    iconPosition: "end",
                }),
            ],
        }),
    });
};
(n(994555), n(827343), n(792251), n(19575), n(945041));
var lf = n(493527),
    lp = n(544395);
function lx(e) {
    let {
            initialEmail: t,
            invite: n,
            giftCode: i,
            guildTemplate: l,
            onApiErrors: s,
            onEmailChange: r,
            onGotoLogin: a,
            onRegister: c,
        } = e,
        [d, h] = u.useState(!1),
        [m, f] = u.useState(!1);
    async function p() {
        T.length > 0 && !lp.A.wasRegistrationSuggestionFetched(T) && (await lf.A.fetchSuggestionsRegistration(T));
    }
    function x(e) {
        y.default.track(R.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function A(e) {
        y.default.track(R.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    let E = (0, g.bG)([tH.A], () => tH.A.getAuthenticationConsentRequired()),
        _ = (0, g.bG)([lp.A], () => lp.A.registrationUsernameSuggestion()),
        j = u.useRef(null),
        N = u.useRef(null),
        C = u.useRef(null),
        v = u.useRef(null),
        [I, S] = u.useState(t),
        [T, b] = u.useState(""),
        [L, O] = u.useState(""),
        [k, w] = u.useState(""),
        [G, P] = u.useState(null),
        [U, M] = tV(E),
        [W, Q] = u.useState(!1),
        [z, q] = tM(),
        [Y, $] = u.useState({}),
        { message: Z, email: J, username: ee, global_name: et, password: en, date_of_birth: ei } = Y,
        [el, es] = u.useState(null),
        [er, ea] = u.useState(null),
        [eo, eu] = u.useState(null),
        [ec, eh] = u.useState(null),
        em = null != E && U;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: i, globalNameRef: l, passwordRef: s } = e,
            r = (0, ik.Ay)(t);
        u.useEffect(() => {
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
    })({ apiErrors: Y, emailRef: j, usernameRef: N, globalNameRef: C, passwordRef: v });
    let eg = u.useCallback(async () => {
            let e = null != i ? i.skuId : null,
                t = tz.mZ.getState(),
                r = (0, it.uJ)(_) ? null : L === _;
            (H._.dispatch(R.jej.WAVE_EMPHASIZE), Q(!0), $({}));
            try {
                (await t1({
                    email: I,
                    username: L,
                    globalName: T,
                    consent: U,
                    password: k,
                    invite: n?.code,
                    usedUsernameSuggestion: r,
                    guildTemplateCode: l?.code,
                    giftCodeSKUId: e,
                    birthday: G,
                    promoEmailConsent: t.required ? t : null,
                }),
                    c?.());
            } catch (t) {
                if ((Q(!1), !(t instanceof tK.LG))) return;
                let e = (0, tX.W)(t);
                ($(e), s?.(e), "number" == typeof e.retry_after && q(e.retry_after));
            }
        }, [i, l, n, I, s, c, _, L, T, k, G, U, q]),
        ef = u.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == E)) return;
                let t = !1;
                (0 === I.length && (es(K.intl.string(K.t.EkokLy)), (t = !0)),
                    0 === L.length && (ea(K.intl.string(K.t.EkokLy)), (t = !0)),
                    0 === k.length && (eu(K.intl.string(K.t.EkokLy)), (t = !0)),
                    null == G && (eh(K.intl.string(K.t.EkokLy)), (t = !0)),
                    t || eg());
            },
            [I, L, k, G, E, eg],
        ),
        ep = null;
    return (
        "string" == typeof Z && (ep = (0, o.jsx)(D.ME, { className: F()(X.QX, t4.gJ), children: Z })),
        (0, o.jsx)("form", {
            onSubmit: ef,
            children: (0, o.jsxs)(D.eB, {
                className: X.QX,
                children: [
                    (0, o.jsx)(D.pd, {
                        autoFocus: !0,
                        className: X.SX,
                        label: K.intl.string(K.t.dI4d4S),
                        name: "email",
                        value: I,
                        onChange: (e) => {
                            (S(e), r?.(e), es(0 === e.length ? K.intl.string(K.t.EkokLy) : null));
                        },
                        error: el ?? tB(J),
                        type: "email",
                        autoComplete: "username",
                        setRef: j,
                        required: !0,
                        onFocus: () => x("email"),
                        onBlur: () => A("email"),
                    }),
                    (0, o.jsx)(D.pd, {
                        label: K.intl.string(K.t["9AjdkD"]),
                        className: X.SX,
                        name: "global_name",
                        value: T,
                        onChange: b,
                        error: tB(et),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: C,
                        onFocus: () => {
                            (h(!0), x("global_name"));
                        },
                        onBlur: () => {
                            (h(!1), A("global_name"));
                        },
                    }),
                    (0, o.jsx)(nr, {
                        show: d,
                        top: -12,
                        bottom: 20,
                        children: (0, o.jsx)(B.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: K.intl.string(K.t["330TCc"]),
                        }),
                    }),
                    (0, o.jsxs)("div", {
                        onBlur: () => f(!1),
                        onFocus: () => {
                            (f(!0), p());
                        },
                        tabIndex: -1,
                        children: [
                            (0, o.jsx)(D.pd, {
                                label: K.intl.string(K.t.TWzdWj),
                                className: X.SX,
                                name: "username",
                                value: L,
                                onChange: (e) => {
                                    (O(e.toLocaleLowerCase()), ea(0 === e.length ? K.intl.string(K.t.EkokLy) : null));
                                },
                                error: er ?? tB(ee),
                                autoComplete: "off",
                                setRef: N,
                                required: !0,
                                onFocus: () => x("username"),
                                onBlur: () => A("username"),
                            }),
                            (0, o.jsx)(na, {
                                username: L,
                                suggestion: _,
                                globalName: T,
                                isUsernameFocused: m,
                                onClickSuggestion: () => {
                                    (N.current?.focus(), null != _ && _.length > 0 && (O(_), ea(null)));
                                },
                            }),
                        ],
                    }),
                    (0, o.jsx)(D.pd, {
                        label: K.intl.string(K.t["CIGa+7"]),
                        name: "password",
                        value: k,
                        onChange: (e) => {
                            (w(e), eu(0 === e.length ? K.intl.string(K.t.EkokLy) : null));
                        },
                        error: eo ?? tB(en),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: v,
                        required: !0,
                        onFocus: () => x("password"),
                        onBlur: () => A("password"),
                    }),
                    (0, o.jsx)(ne.A, {
                        label: K.intl.string(K.t.rhBeKe),
                        wrapperClassName: t4.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            (P(e), null != e && eh(null));
                        },
                        error: ec ?? tB(ei),
                        value: G,
                        required: !0,
                        onFocus: x,
                        onBlur: A,
                    }),
                    (0, o.jsx)(t7, {}),
                    (0, o.jsx)(t8, { consent: U, consentRequired: E, onConsentChange: M }),
                    (0, o.jsx)(tQ.m, {
                        text: !U && E ? K.intl.string(K.t.AY4IVA) : null,
                        children: (0, o.jsx)("div", {
                            className: X.QX,
                            children: (0, o.jsx)(V.$, {
                                text: K.intl.string(K.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: W,
                                disabled: !em || z,
                            }),
                        }),
                    }),
                    ep,
                    (0, o.jsx)("div", {
                        className: X.QX,
                        children: (0, o.jsx)(ed.Q, {
                            text: K.intl.string(K.t["1lWxux"]),
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
var lA = n(713654),
    lE = n(331722);
function l_(e) {
    let { channel: t } = e,
        n = (0, lA._U)(t.type);
    return (0, o.jsxs)("div", {
        className: lE.Nj,
        children: [
            null != n ? (0, o.jsx)(n, { color: "currentColor", size: "custom", width: 20, height: 20 }) : null,
            (0, o.jsx)(B.E, { className: lE.dN, color: "none", variant: "text-sm/semibold", children: t.name }),
        ],
    });
}
function lj(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, o.jsxs)("div", {
        className: lE.kL,
        children: [
            (0, o.jsx)(tv.Uq, { className: lE.II, guildId: n.guild_id, guildEvent: n, eventPreview: n }),
            (0, o.jsx)(tv.sC, { name: n.name, description: n.description, guildId: n.guild_id }),
            null != t && n.channel_id === t.id ? (0, o.jsx)(l_, { channel: t }) : null,
        ],
    });
}
var lN = n(231698);
function lC(e) {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let i = em.DY(t),
        { name: l, description: s } = i;
    return (0, o.jsxs)("div", {
        children: [
            (0, o.jsx)(ek.D, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: lN.CT,
                children: K.intl.string(K.t.Eabu1z),
            }),
            (0, o.jsxs)("div", {
                className: lN.EB,
                children: [
                    (0, o.jsx)(tD.Ay, {
                        mask: tD.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, o.jsx)(tC.Ay, { guild: i, size: tC.Ay.Sizes.MEDIUM, active: !0 }),
                    }),
                    (0, o.jsxs)("div", {
                        className: lN.OA,
                        children: [
                            (0, o.jsx)(ek.D, { variant: "heading-sm/semibold", children: l }),
                            (0, o.jsxs)("div", {
                                className: lN.aH,
                                children: [
                                    (0, o.jsx)("div", { className: lN.Om }),
                                    null != n && n > 0
                                        ? (0, o.jsx)(B.E, {
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
                (0, o.jsx)(B.E, { color: "text-default", className: lN.CT, variant: "text-sm/normal", children: s }),
        ],
    });
}
function lv(e) {
    let { authBoxClassName: t, name: n, onNameChange: i } = e;
    return (0, o.jsxs)(D.Ay, {
        className: t,
        children: [
            (0, o.jsx)(iP.M, {}),
            (0, o.jsxs)(D.eB, {
                className: t4.y0,
                children: [
                    (0, o.jsx)(tQ.m, {
                        text: K.intl.string(K.t["hBB85/"]),
                        position: "right",
                        children: (0, o.jsx)(D.pd, {
                            label: K.intl.string(K.t["9AjdkD"]),
                            autoFocus: !0,
                            className: X.QB,
                            name: "username",
                            value: n,
                            placeholder: K.intl.string(K.t["09Q8yp"]),
                            onChange: i,
                            onFocus: () => {
                                y.default.track(R.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                y.default.track(R.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, o.jsx)(B.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: F()(X.QX, t4.E2),
                        children: K.intl.format(K.t["KI+BSb"], { termsURL: R.X7G.TERMS, privacyURL: R.X7G.PRIVACY }),
                    }),
                    (0, o.jsx)("div", {
                        className: X.Ot,
                        children: (0, o.jsx)(V.$, {
                            text: K.intl.string(K.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, o.jsx)("div", {
                        className: X.QX,
                        children: (0, o.jsx)(ed.Q, {
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
function lI(e) {
    let { consentRequired: t, consent: n, registering: i } = e,
        l = u.useMemo(() => null != t && n, [t, n]);
    return (0, o.jsx)(tQ.m, {
        text: !n && t ? K.intl.string(K.t.AY4IVA) : null,
        children: (0, o.jsx)("div", {
            className: X.Ot,
            children: (0, o.jsx)(V.$, {
                text: K.intl.string(K.t["825cFy"]),
                variant: "primary",
                fullWidth: !0,
                type: "submit",
                loading: i,
                disabled: !l,
            }),
        }),
    });
}
function lS(e) {
    let { invite: t, authBoxClassName: n, hideInviteHeader: i = !1, onApiErrors: l, onGotoLogin: s, onRegister: r } = e,
        a = (0, g.bG)([tH.A], () => tH.A.getAuthenticationConsentRequired()),
        c = t?.guild_scheduled_event != null,
        d = u.useRef(null),
        h = null;
    h = i
        ? null
        : t?.guild_scheduled_event != null
          ? (0, o.jsx)(lj, { channel: t.channel, guildScheduledEvent: t.guild_scheduled_event })
          : (0, o.jsx)("div", { className: X.S3, children: (0, o.jsx)(iP.A, { invite: t, inUnclaimedFlow: !0 }) });
    let [m, f] = u.useState(""),
        [p, x] = u.useState(null),
        [A, E] = tV(a),
        [_, j] = u.useState(!1),
        [N, C] = u.useState({}),
        { username: v, global_name: I, date_of_birth: S } = N,
        [T, b] = tM();
    u.useEffect(() => {
        null == p && d.current?.focus();
    }, [p, d]);
    let [L, O] = u.useState(null),
        [k, w] = u.useState(null),
        G = u.useCallback(async () => {
            (H._.dispatch(R.jej.WAVE_EMPHASIZE), j(!0), C({}));
            try {
                (await (function (e) {
                    let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
                    return t1({ ...i, invite: t, giftCodeSKUId: n });
                })({ consent: A, invite: t.code, globalName: m, birthday: p }),
                    r?.());
            } catch (t) {
                if ((j(!1), !(t instanceof tK.LG))) return;
                let e = (0, tX.W)(t);
                (C(e), l?.(e), "number" == typeof e.retry_after && b(e.retry_after));
            }
        }, [t, m, p, A, l, r, b, C, j]),
        P = u.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === a)) return;
                let t = !1;
                (0 === m.length && (O(K.intl.string(K.t.EkokLy)), (t = !0)),
                    null == p && (w(K.intl.string(K.t.EkokLy)), (t = !0)),
                    t || G());
            },
            [m, p, a, G, O, w],
        );
    return t.state === R.elq.RESOLVING
        ? (0, o.jsx)(lv, { authBoxClassName: n, name: m, onNameChange: f })
        : (0, o.jsxs)("div", {
              children: [
                  (0, o.jsx)(D.Ay, {
                      tag: "section",
                      className: n,
                      children: (0, o.jsxs)("form", {
                          onSubmit: P,
                          children: [
                              h,
                              c ? (0, o.jsx)("div", { className: t4.yF }) : null,
                              (0, o.jsxs)(D.eB, {
                                  className: c ? void 0 : t4.y0,
                                  children: [
                                      (0, o.jsx)(tW.k, {
                                          helperText: K.intl.string(K.t["330TCc"]),
                                          label: K.intl.string(K.t["9AjdkD"]),
                                          error: L ?? tB(I ?? v),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: m,
                                          placeholder: K.intl.string(K.t["09Q8yp"]),
                                          onChange: f,
                                          onFocus: () => {
                                              y.default.track(R.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              y.default.track(R.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, o.jsx)(ne.A, {
                                          label: K.intl.string(K.t.rhBeKe),
                                          wrapperClassName: t4.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              (x(e), null != e && w(null));
                                          },
                                          error: k ?? tB(S),
                                          value: p,
                                      }),
                                      (0, o.jsx)(t8, { consent: A, consentRequired: a, onConsentChange: E }),
                                      (0, o.jsx)(lI, { consentRequired: a, consent: A, registering: _ }),
                                      (0, o.jsx)("div", {
                                          className: X.QX,
                                          children: (0, o.jsx)(ed.Q, {
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
                  null != t && c
                      ? (0, o.jsx)(D.Ay, {
                            className: X.QX,
                            children: (0, o.jsx)(lC, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
var lT = n(942614);
n(100544);
var ly =
        (((r = {}).IDENTITY = "identity"),
        (r.DISPLAY_NAME = "display_name"),
        (r.ACCOUNT_INFORMATION = "account_information"),
        (r.FULL = "full"),
        (r.AGE_GATE = "age_gate"),
        (r.INVITE = "invite"),
        (r.SMS_VERIFY = "sms_verify"),
        r),
    lb = n(771016);
function lR(e) {
    let {
            authBoxClassName: t,
            giftCode: n,
            giftCodeSKU: i,
            guildTemplate: l,
            invite: s,
            hideInviteHeader: r = !1,
            location: a,
            redirectTo: h,
            onLoginStart: m,
            onRegister: f,
            transitionTo: x = w.pX,
        } = e,
        A = (0, g.bG)([tH.A], () => tH.A.getAuthenticationConsentRequired()),
        E = (0, g.bG)([eq.default], () => eq.default.isAuthenticated()),
        _ = (0, g.bG)([ld], () => ld.isUnderageAnonymous()),
        j = (0, g.bG)([iZ.A], () => iZ.A.getHasLoggedInAccounts()),
        N = null != e.location ? (0, c.parse)(e.location.search) : {},
        [C, v] = u.useState(N.email ?? ""),
        [I, S] = u.useState({}),
        T = (0, ik.Ay)(E),
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
        L = null != s && (null != s.guild || null != s.channel),
        O = null != s && null == s.guild && null == s.channel && null != s.inviter,
        k = u.useCallback(() => {
            E && (null != h ? x(h) : x(eh.A.defaultRoute));
        }, [E, h, x]);
    ((0, iO.Ay)(() => {
        (k(),
            y.default.track(
                R.HAw.REGISTER_VIEWED,
                {
                    location: null != s ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: b,
                    ...(null != i ? (0, ln.A)(i, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == A && p.A.getLocationMetadata(),
            (0, G.d0)("register"));
    }),
        u.useEffect(() => {
            E && !1 === T && ((0, lT.C)(lb.zY.ORGANIC_REGISTERED), k());
        }, [E, T, k]));
    let P = ly.FULL;
    (_ || null != I.date_of_birth ? (P = ly.AGE_GATE) : L && (P = ly.INVITE),
        (0, iJ.A)(
            {
                type: d.ImpressionTypes.VIEW,
                name: d.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: d.ImpressionGroups.USER_REGISTRATION_FLOW, step: P },
            },
            {},
            [P],
        ));
    let U = u.useCallback(
        (e) => {
            let t,
                i = null != a ? (0, c.parse)(a.search) : {};
            (null != s
                ? (t = R.BVt.INVITE_LOGIN(s.code))
                : null != n
                  ? (t = R.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != l
                    ? (t = R.BVt.GUILD_TEMPLATE_LOGIN(l.code))
                    : null != h
                      ? ((t = R.BVt.LOGIN), (i.redirect_to = h))
                      : ((t = R.BVt.LOGIN), "" !== C && (i = { email: C })),
                p.A.loginReset(),
                x(t, { search: (0, c.stringify)(i), source: "register" }),
                m?.(e),
                H._.dispatch(R.jej.WAVE_EMPHASIZE));
        },
        [C, s, n, l, h, a, m, x],
    );
    if (_ || null != I.date_of_birth) return (0, o.jsx)(lg, {});
    if (null != s && L)
        return (0, o.jsx)(lS, {
            invite: s,
            authBoxClassName: t,
            hideInviteHeader: r,
            onApiErrors: S,
            onGotoLogin: U,
            onRegister: f,
        });
    let B = (0, o.jsx)(D.hE, { children: K.intl.string(K.t.wC4TlR) }, "title"),
        M = !1;
    null != l
        ? ((B = (0, o.jsx)(iV.A, { guildTemplate: l })), (M = !0))
        : null != n
          ? (B = (0, o.jsx)(iL, { giftCode: n }))
          : !r &&
            null != s &&
            O &&
            s.state === R.elq.RESOLVED &&
            (B = (0, o.jsx)("div", { className: X.S3, children: (0, o.jsx)(iP.A, { invite: s, isRegister: !0 }) }));
    let W = (0, o.jsx)(lx, {
        initialEmail: N.email ?? "",
        invite: s,
        giftCode: n,
        guildTemplate: l,
        onApiErrors: S,
        onEmailChange: v,
        onGotoLogin: U,
        onRegister: f,
    });
    return M
        ? (0, o.jsx)(iB, {
              tag: "section",
              className: F()(t, t4.Sy),
              children: () => [
                  B,
                  (0, o.jsxs)(
                      "div",
                      {
                          className: t4.Uu,
                          children: [(0, o.jsx)(D.hE, { className: t4.lR, children: K.intl.string(K.t.wC4TlR) }), W],
                      },
                      "register-title",
                  ),
              ],
          })
        : (0, o.jsxs)(D.Ay, {
              tag: "section",
              className: t,
              children: [
                  j
                      ? (0, o.jsx)("div", {
                            className: t4.AX,
                            children: (0, o.jsx)(V.$, {
                                onClick: U,
                                variant: "secondary",
                                text: K.intl.string(K.t["1MrpWO"]),
                                icon: nV.n,
                                iconPosition: "start",
                            }),
                        })
                      : null,
                  B,
                  W,
              ],
          });
}
(g.Ay.initialize(), g.Ay.initialize());
class lL extends u.PureComponent {
    state = { error: null, continueOnWeb: !1, currentUser: null, sentVerification: !1, fetchingUser: !1 };
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        (e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, G.d0)("gift_code"));
    }
    componentDidUpdate(e) {
        let { authenticated: t, isResolved: n } = this.props;
        (n ||
            f.h.wait(() => {
                this.resolveGiftCode();
            }),
            t && !e.authenticated && this.handleAuthenticated(),
            !t && e.authenticated && this.setState({ currentUser: null }));
    }
    handleAuthenticated() {
        let { currentUser: e } = this.state;
        (ip.Yq(), null == e && this.refreshUser());
    }
    refreshUser = () => {
        (this.setState({ fetchingUser: !0 }),
            nk
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
        return l === R.t02.INVALID_GIFT_SELF_REDEMPTION
            ? K.intl.string(K.t.wa9h7F)
            : l === R.t02.INVALID_GIFT_REDEMPTION_OWNED && n?.productLine === R.EZt.COLLECTIBLES
              ? K.intl.string(K.t.mdLtb5)
              : null != t || l === R.t02.INVALID_GIFT_REDEMPTION_OWNED
                ? K.intl.format(K.t.PIdmg3, { libraryLink: R.BVt.APPLICATION_LIBRARY })
                : e.isClaimed || l === R.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? K.intl.string(K.t.ilcBeX)
                  : l === R.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? K.intl.string(K.t.ypuSd8)
                    : void 0;
    }
    handleLogout = () => {
        let e = this.props.match.params.giftCode;
        p.A.logout("gift_code", R.BVt.GIFT_CODE_LOGIN(e));
    };
    handleResendVerification = () => {
        (p.A.verifyResend(), this.setState({ sentVerification: !0 }));
    };
    handleAccept = async () => {
        let { transitionTo: e, giftCode: t } = this.props;
        if (null == t) throw Error("Trying to accept gift before resolve");
        let n = this.getCode();
        try {
            (this.setState({ error: null }), await x.Ay.redeemGiftCode({ code: n }), e(R.BVt.APP));
        } catch (e) {
            this.setState({ error: e });
        }
    };
    resolveGiftCode = () => {
        let { transitionTo: e } = this.props,
            t = this.getCode();
        x.Ay.resolveGiftCode(t, !0, !0)
            .then((n) => {
                null != n && null != n.giftCode.promotion && e(R.BVt.BILLING_PROMOTION_REDEMPTION(t));
            })
            .catch(x.Ay.reportUnexpectedGiftCodeError);
    };
    renderSpinner(e) {
        return (0, o.jsxs)(D.Ay, { children: [(0, o.jsx)(D.hE, { children: e }), (0, o.jsx)(D.CK, {})] });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, o.jsxs)(D.Ay, {
            children: [
                (0, o.jsx)(D.hE, { className: F()(X.Ot, X.QB), children: K.intl.string(K.t.KPowgn) }),
                (0, o.jsx)(D.tK, { children: K.intl.string(K.t.j8734b) }),
                (0, o.jsx)("div", {
                    className: F()(X.eT, X.QB),
                    children: (0, o.jsx)(V.$, { text: K.intl.string(K.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, o.jsx)(ed.Q, {
                    text: K.intl.string(K.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(nG.A.getArticleURL(R.MVz.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, o.jsxs)(D.Ay, {
            children: [
                (0, o.jsx)(D.hE, { className: X.QB, children: K.intl.string(K.t.csrAMJ) }),
                (0, o.jsx)(D.tK, { children: K.intl.string(K.t["m1+IBn"]) }),
                (0, o.jsx)("div", {
                    className: X.eT,
                    children: (0, o.jsx)(V.$, {
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
        return (0, o.jsxs)(D.Ay, {
            children: [
                (0, o.jsx)(D._V, { src: n(792525), className: X.QB }),
                (0, o.jsx)(D.hE, { children: K.intl.format(K.t["ivLUf/"], { username: e.username }) }),
                (0, o.jsx)(D.tK, { className: X.QX, children: K.intl.string(K.t["8Su18+"]) }),
                (0, o.jsx)("div", {
                    className: X.eT,
                    children: (0, o.jsx)(V.$, {
                        text: t ? K.intl.string(K.t.CMa9Rv) : K.intl.string(K.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, o.jsx)("div", {
                    className: X.Ot,
                    children: (0, o.jsx)(ed.Q, {
                        text: K.intl.string(K.t.Po9eBQ),
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
        return (0, o.jsx)(lk, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: i,
            children: (0, o.jsxs)(D.Ay, {
                children: [
                    (0, o.jsx)(iL, { giftCode: e }),
                    (0, o.jsx)("div", {
                        className: X.eT,
                        children: (0, o.jsx)(V.$, {
                            text: K.intl.string(K.t.n6I6k4),
                            fullWidth: !0,
                            disabled: null != l,
                            onClick: this.handleAccept,
                        }),
                    }),
                    null != l
                        ? (0, o.jsx)(D.tK, { className: X.QX, children: l })
                        : (0, o.jsx)(D.ME, {
                              className: X.QX,
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
                giftCode: i,
                isResolved: l,
                isAccepting: s,
                transitionTo: r,
                location: a,
            } = this.props,
            { fetchingUser: u, continueOnWeb: c } = this.state;
        if (e === R.fAW.OPEN && !c) return this.renderAppOpened();
        if (e === R.fAW.OPENING) return this.renderSpinner(K.intl.string(K.t["Z+hCVU"]));
        if (s) return this.renderSpinner(K.intl.string(K.t.bhJseN));
        if (null == i) return l ? this.renderExpiredInvite() : this.renderSpinner(K.intl.string(K.t.b3lf1c));
        if (l) {
            if (n) {
                let e = this.state.currentUser;
                return u || null == e
                    ? this.renderSpinner(K.intl.string(K.t.bYb2nS))
                    : this.requiresVerification && null != e
                      ? this.renderVerification(e)
                      : this.renderAuthenticated(i, e, t);
            }
            return "login" === this.getMode()
                ? (0, o.jsx)(lr, { giftCode: i, transitionTo: r, location: a })
                : (0, o.jsx)(lR, { giftCodeSKU: t, giftCode: i, transitionTo: r, location: a });
        }
        return null;
    }
}
let lO = g.Ay.connectStores([n1.A, iE.A, eq.default, i_.A, eh.A, ix.A], (e) => {
    let t = e.match.params.giftCode,
        n = n1.A.get(t),
        i = null != n ? i_.A.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: i,
        libraryApplication: null != i && n?.entitlementBranches != null ? ij.YI(n.entitlementBranches, i, iE.A) : null,
        authenticated: eq.default.isAuthenticated(),
        defaultRoute: eh.A.defaultRoute,
        isResolved: n1.A.getIsResolved(t),
        isAccepting: n1.A.getIsAccepting(t),
        libraryApplicationsFetched: iE.A.fetched,
        nativeAppState: ix.A.getState(t),
    };
})(lL);
function lk(e) {
    let { sku: t, children: n, giftCodeCode: i, transitionTo: l } = e,
        s = (0, iA.bF)(t);
    return (u.useEffect(() => {
        null != i && s && l(R.BVt.APP_WITH_GIFT_CODE(i));
    }, [s, i, l]),
    s)
        ? (0, o.jsxs)(D.Ay, {
              children: [(0, o.jsx)(D.hE, { children: K.intl.string(K.t.b3lf1c) }), (0, o.jsx)(D.CK, {})],
          })
        : n;
}
var lD = n(871194),
    lw = n(799365),
    lG = n(894778),
    lP = n(315290),
    lU = n(396574),
    lF = n(838697);
g.Ay.initialize();
class lB extends u.PureComponent {
    componentDidMount() {
        ((0, G.d0)("guildTemplate"),
            lU.VP || eY.A.launch("discord://" + R.BVt.GUILD_TEMPLATE(this.props.code), () => void 0));
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && ey.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return lU.VP
            ? (0, o.jsx)("div", { className: X.eT, children: (0, o.jsx)(V.$, { text: e, fullWidth: !0, onClick: t }) })
            : (0, o.jsx)(D.KE, { className: X.eT });
    }
    renderSpinner(e) {
        return (0, o.jsxs)(D.Ay, { children: [(0, o.jsx)(D.hE, { children: e }), (0, o.jsx)(D.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, o.jsxs)(D.Ay, {
            children: [
                (0, o.jsx)(D.hE, { className: F()(X.Ot, X.QB), children: K.intl.string(K.t.C7ZRNw) }),
                (0, o.jsx)(D.tK, { children: K.intl.string(K.t.A6MwXE) }),
                this.renderButton(K.intl.string(K.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, o.jsxs)(D.Ay, {
            children: [
                (0, o.jsx)(D.hE, { className: X.QB, children: K.intl.string(K.t.csrAMJ) }),
                (0, o.jsx)(D.tK, { children: K.intl.string(K.t["m1+IBn"]) }),
                this.renderButton(K.intl.string(K.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (eH()(null != e, "guild template must not be null"), e.state === i8.QB.RESOLVING)
            ? (0, o.jsx)(D.Ay, { className: lF.sL, children: (0, o.jsx)(lw.A, { guildTemplate: e }) })
            : (0, o.jsx)(lV, { guildTemplate: e });
    }
    renderContinue() {
        return (0, o.jsxs)(D.Ay, {
            children: [
                (0, o.jsx)(D.hE, { children: K.intl.string(K.t.fOc4gn) }),
                this.renderButton(K.intl.string(K.t.fIv16B), this.handleContinue),
            ],
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: i, location: l } = this.props;
        if (null == e) return this.renderSpinner(K.intl.string(K.t.ZTNur7));
        if (t === R.fAW.OPEN) return this.renderAppOpened();
        if (t === R.fAW.OPENING) return this.renderSpinner(K.intl.string(K.t["Z+hCVU"]));
        switch (e.state) {
            case i8.QB.RESOLVING:
                return this.renderSpinner(K.intl.string(K.t["Z+hCVU"]));
            case i8.QB.RESOLVED:
                if (n || !lU.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, o.jsx)(lr, { guildTemplate: e, transitionTo: i, location: l });
                return (0, o.jsx)(lR, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: l,
                    onRegister: () => {
                        ((0, lT.C)(lb.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            lG.A.flowStart(lP.do.ORGANIC_GUILD_TEMPLATES, lP.ju.NUF_STARTED));
                    },
                });
            case i8.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function lV(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, lD.A)(t, !1);
    lG.A.flowStep(lP.do.ORGANIC_GUILD_TEMPLATES, lP.jC.GUILD_CREATE);
    let l = (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(D.hE, { className: lF.wx, children: K.intl.string(K.t.UNFvtM) }),
            n,
            (0, o.jsx)("div", {
                className: lF.Tf,
                children: (0, o.jsx)(V.$, { text: K.intl.string(K.t.xr59t7), fullWidth: !0, onClick: i }),
            }),
        ],
    });
    return (0, o.jsx)(iB, {
        className: lF.sL,
        children: () => [
            (0, o.jsx)(iV.A, { guildTemplate: t }, "template"),
            (0, o.jsx)("div", { className: lF.KJ, children: l }, "contents"),
        ],
    });
}
function lM(e, t, n) {
    (e.preventDefault(),
        y.default.track(R.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        }));
    let i = eq.default.getFingerprint(),
        l = null != i ? i : eq.default.getId();
    ey.A.openMobileApp(n.state === i8.QB.RESOLVED ? t : void 0, l);
}
function lH(e) {
    let { code: t } = e,
        n = (0, g.bG)([eT.A], () => eT.A.getGuildTemplate(t));
    return (u.useEffect(() => {
        (0, G.d0)("guild_template_mobile");
    }, []),
    null == n || n.state === i8.QB.RESOLVING)
        ? (0, o.jsx)(D.Ay, { children: (0, o.jsx)(eD.y, {}) })
        : n.state === i8.QB.RESOLVED
          ? (0, o.jsxs)(D.Ay, {
                children: [
                    (0, o.jsx)(lw.A, { guildTemplate: n, tall: !0 }),
                    (0, o.jsx)("div", {
                        className: X.QX,
                        children: (0, o.jsx)(V.$, {
                            text: K.intl.string(K.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => lM(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, o.jsx)(e7, {
                text: K.intl.string(K.t["e/rZ2n"]),
                buttonCta: K.intl.string(K.t.HAvYn0),
                onClick: (e) => lM(e, t, n),
            });
}
(g.Ay.initialize(), n(938796));
var lW = n(821418),
    lQ = n(665260),
    lK = n(362474),
    lz = n(695366),
    lX = n(964486),
    lq = n(921037),
    lY = n(945810),
    l$ = (((a = {}).IN_CONTENT = "in_content"), (a.BELOW_CONTENT = "below_content"), a);
let lZ = (0, lY.mj)({
    name: "2026-09-silp-direct-to-discoverable",
    kind: "installation",
    defaultConfig: { placement: null },
    variations: { 0: { placement: null }, 1: { placement: "in_content" }, 2: { placement: "below_content" } },
});
function lJ(e) {
    return lZ.useConfig({ location: e }).placement;
}
var l0 = n(975807),
    l1 = n(818348);
function l2(e) {
    let { inviteCode: t, guildId: n, className: i } = e;
    return (0, o.jsx)("div", {
        className: F()(i, X.Ot),
        children: (0, o.jsx)(V.$, {
            text: K.intl.string(K.t["7itT3E"]),
            onClick: function () {
                (y.default.track(
                    R.HAw.INVITE_CTA_CLICKED,
                    { action: "browse_other_servers", invite_code: t, guild_id: n },
                    { flush: !0 },
                ),
                    (0, l0.A)(l1.Tk.DISCOVER));
            },
            variant: "secondary",
            fullWidth: !0,
        }),
    });
}
let l4 = (0, lY.mj)({
    name: "2026-09-invite-silp-education",
    kind: "installation",
    defaultConfig: { variant: null },
    variations: { 1: { variant: "popover" }, 2: { variant: "sidebar" } },
});
function l8(e, t) {
    let { variant: n } = l4.useConfig({ location: t });
    return null == e ||
        null == e.guild ||
        (null != e.type && e.type !== tr.Xd.GUILD) ||
        null != e.guild_scheduled_event ||
        null != e.target_type
        ? null
        : (l4.getConfig({ location: `${t}.eligible` }), n);
}
var l7 = n(930839),
    l3 = n(4274);
g.Ay.initialize();
let l9 = "register",
    l5 = "login";
function l6(e) {
    let { message: t, onClick: n, invite: i, className: l } = e,
        s = i?.guild_scheduled_event != null;
    return lU.VP
        ? (0, o.jsx)("div", {
              className: l ?? (s ? X.QX : X.eT),
              children: (0, o.jsx)(V.$, { text: t, onClick: n, variant: s ? "active" : "primary", fullWidth: !0 }),
          })
        : (0, o.jsx)(D.KE, { className: l ?? X.eT });
}
function se(e) {
    let { invite: t, transitionTo: n, location: i } = e;
    return (l8(t, "InviteLogin"), (0, o.jsx)(lr, { invite: t, transitionTo: n, location: i }));
}
function st(e) {
    let { invite: t, onLoginStart: n, location: i, transitionTo: l } = e;
    return (l8(t, "InviteRegister"), (0, o.jsx)(lR, { invite: t, onLoginStart: n, location: i, transitionTo: l }));
}
function sn(e) {
    let { invite: t, inviteKey: n, handleAccept: i, handleDefaultTransition: l } = e,
        s = (0, g.bG)([e5.A], () => (t.state === R.elq.ERROR ? e5.A.getInviteError(n) : void 0)),
        r = t.guild_scheduled_event,
        a = s?.code === R.t02.INVALID_CANNOT_FRIEND_SELF;
    return (
        u.useEffect(() => {
            l7.A.requestDrain();
        }, []),
        (0, o.jsxs)("div", {
            children: [
                (0, o.jsxs)(D.Ay, {
                    children: [
                        null != r
                            ? (0, o.jsx)(lj, { channel: t.channel, guildScheduledEvent: r })
                            : (0, o.jsx)(iP.A, { invite: t }),
                        null != s &&
                            (0, o.jsx)("div", {
                                className: X.QX,
                                role: "alert",
                                children: (0, o.jsxs)(B.E, {
                                    variant: "text-sm/medium",
                                    color: "text-feedback-critical",
                                    style: { display: "flex", alignItems: "center", gap: 4 },
                                    children: [
                                        (0, o.jsx)(lz.E, {
                                            size: "custom",
                                            width: 14,
                                            height: 14,
                                            color: "currentColor",
                                        }),
                                        " ",
                                        (0, l3.s)(s.code),
                                    ],
                                }),
                            }),
                        (0, o.jsx)(l6, {
                            invite: t,
                            message: K.intl.string(a ? K.t.fIv16B : K.t.ohMvm1),
                            onClick: a ? l : i,
                            className: null != s ? X.QX : void 0,
                        }),
                    ],
                }),
                null != r &&
                    null != t.guild &&
                    (0, o.jsx)(D.Ay, {
                        className: X.QX,
                        children: (0, o.jsx)(lC, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                    }),
            ],
        })
    );
}
function si(e) {
    let { invite: t, inviteKey: n, rpcConnected: i, onContinue: l } = e;
    return (0, o.jsxs)(D.Ay, {
        children: [
            (0, o.jsx)(iP.A, { invite: t }),
            lU.VP
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)("div", {
                              className: X.QX,
                              children: (0, o.jsx)(V.$, {
                                  text: K.intl.string(K.t.UQvCf7),
                                  onClick: function () {
                                      (y.default.track(R.HAw.INVITE_CTA_CLICKED, {
                                          action: "open_app",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          i ? A.Ay.openNativeAppModal(n) : A.Ay.openApp(n));
                                  },
                                  variant: "primary",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, o.jsx)("div", {
                              className: X.Ot,
                              children: (0, o.jsx)(V.$, {
                                  text: K.intl.string(K.t["2ixEBi"]),
                                  onClick: function () {
                                      (y.default.track(R.HAw.INVITE_CTA_CLICKED, {
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
                  })
                : (0, o.jsx)(D.KE, { className: X.eT }),
        ],
    });
}
function sl(e) {
    let { title: t } = e;
    return (0, o.jsxs)(D.Ay, { children: [(0, o.jsx)(D.hE, { children: t }), (0, o.jsx)(D.CK, {})] });
}
function ss(e) {
    let { banned: t, invite: n, handleDefaultTransition: i } = e,
        l = lJ("InviteInvalid");
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)(D.Ay, {
                children: [
                    (0, o.jsx)(D.hE, { className: F()(X.Ot, X.QB), children: K.intl.string(K.t.kux01N) }),
                    (0, o.jsx)(D.tK, { children: t ? K.intl.string(K.t["5AkWAd"]) : K.intl.string(K.t["+qUJAj"]) }),
                    (0, o.jsx)(l6, { message: K.intl.string(K.t.fIv16B), onClick: i }),
                    l === l$.IN_CONTENT && (0, o.jsx)(l2, { inviteCode: n.code, guildId: n.guild?.id }),
                    (0, o.jsx)("div", {
                        className: X.Ot,
                        style: { textAlign: "left" },
                        children: (0, o.jsx)(ed.Q, {
                            size: "sm",
                            textVariant: "text-sm/medium",
                            text: K.intl.string(K.t.urIwn4),
                            onClick: () => window.open(nG.A.getArticleURL(R.MVz.INVALID_INVITES), "_blank"),
                        }),
                    }),
                ],
            }),
            l === l$.BELOW_CONTENT && (0, o.jsx)(l2, { inviteCode: n.code, guildId: n.guild?.id, className: X.QX }),
        ],
    });
}
function sr(e) {
    let { invite: t, handleDefaultTransition: n } = e,
        i = lJ("InviteContinue");
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)(D.Ay, {
                children: [
                    (0, o.jsx)(D.hE, { children: K.intl.string(K.t.fOc4gn) }),
                    (0, o.jsx)(l6, { message: K.intl.string(K.t.fIv16B), onClick: n }),
                    i === l$.IN_CONTENT && (0, o.jsx)(l2, { inviteCode: t.code, guildId: t.guild?.id }),
                ],
            }),
            i === l$.BELOW_CONTENT && (0, o.jsx)(l2, { inviteCode: t.code, guildId: t.guild?.id, className: X.QX }),
        ],
    });
}
var sa = n(334465);
let so = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_dsa_webform",
    label: "Safety Experience Unauthenticated Report Form",
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 1, label: "EU user", config: { enabled: !0 } },
        { id: 2, label: "DSA E2E testing user", config: { enabled: !0 } },
    ],
});
g.Ay.initialize();
var su = n(163050);
g.Ay.initialize();
var sc = n(701273);
function sd(e) {
    n.g.location.assign(e);
}
(g.Ay.initialize(), n(426620), g.Ay.initialize());
let sh = ir(lr),
    sm = ir(function (e) {
        let { transitionTo: t } = e,
            n = u.useCallback(
                (e) => {
                    let n;
                    ((n = (0, sa.B)(e, { path: R.BVt.CHANNEL(nb.pv.guildId(), nb.pv.channelId()) })),
                    +(n?.params?.channelId !== C.VV.ROLE_SUBSCRIPTIONS))
                        ? (t ?? w.pX)(e)
                        : w.bG(e);
                },
                [t],
            ),
            { isAuthenticated: i, loginStatus: l } = (0, g.cf)([eq.default], () => ({
                isAuthenticated: eq.default.isAuthenticated(),
                loginStatus: eq.default.getLoginStatus(),
            })),
            { location: s, redirectTo: r } = e,
            [a, d] = u.useState(i);
        function h(e) {
            let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
            ((0, _.Qh)({ handoffKey: t, handoffToken: n, handoffSource: i }), d(!1));
        }
        return ((0, lX.Ay)(() => {
            if (null != s) {
                let { handoff_key: e, handoff_token: t } = (0, c.parse)(s.search);
                if (null != e && null != t) {
                    let n = null != r ? S(r) : void 0;
                    a
                        ? p.A.logout("handoff", null).finally(() => {
                              h({ handoffKey: e, handoffToken: t, handoffSource: n });
                          })
                        : h({ handoffKey: e, handoffToken: t, handoffSource: n });
                }
            }
        }),
        a || l === R.aUe.LOGGING_IN)
            ? (0, o.jsx)(D.Ay, { children: (0, o.jsx)(eD.y, {}) })
            : (0, o.jsx)(lr, { ...e, transitionTo: n });
    }),
    sg = ir(function (e) {
        let { inviteKey: t, location: n, transitionTo: i, login: l } = e,
            s = u.useMemo(() => (0, e$.m0)(t), [t]),
            r = (0, g.bG)([e5.A], () => e5.A.getInvite(t)),
            a = (0, g.bG)([ix.A], () => ix.A.getState(s)),
            c = (0, g.bG)([eq.default], () => eq.default.isAuthenticated()),
            d = (0, g.bG)([eh.A], () => eh.A.defaultRoute),
            h = (0, g.bG)([ld], () => ld.isUnderageAnonymous()),
            m = (function (e) {
                let [t, n] = u.useState(!1);
                return (
                    u.useEffect(() => {
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
                    t || e === R.fAW.OPEN_FAIL
                );
            })(a),
            p = (function (e) {
                let [t, n] = u.useState(!1);
                return (
                    u.useEffect(() => {
                        let e = setTimeout(() => n(!0), 500);
                        return () => clearTimeout(e);
                    }, []),
                    !e && !t
                );
            })(m),
            [x, E] = u.useState(!1);
        u.useLayoutEffect(() => {
            (a === R.fAW.OPEN || r?.state === R.elq.APP_OPENED) && E(!0);
        }, [r?.state, a]);
        let _ = l ? l5 : l9,
            j = u.useCallback((e) => A.Ay.getInviteContext(e, r), [r]),
            N = u.useCallback(
                (e) => {
                    null != r &&
                        (null != r.channel || e?.channel != null) &&
                        (r.guild?.id != null
                            ? A.Ay.transitionToInviteOnboarding(e ?? r, { transitionTo: i })
                            : A.Ay.transitionToInvite(e ?? r, { transitionTo: i }));
                },
                [r, i],
            ),
            C = u.useCallback(() => {
                (y.default.track(R.HAw.INVITE_CTA_CLICKED, {
                    action: "accept_invite",
                    invite_code: r?.code,
                    guild_id: r?.guild?.id,
                }),
                    A.Ay.acceptInvite({
                        inviteKey: t,
                        context: j(R.S3d.INVITE),
                        skipOnboarding: !0,
                        callback: (e) => {
                            (el(e), null != e.channel && (m ? N(e) : A.Ay.openApp(t, e.channel.id)));
                        },
                    }).catch(() => {}));
            }, [t, j, r?.code, r?.guild?.id, m, N]),
            v = u.useCallback(() => {
                i(d);
            }, [d, i]);
        if (
            ((0, lX.Ay)(() => {
                let e = eq.default.getAnalyticsToken();
                if (
                    (null != e
                        ? f.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eq.default.getId() })
                        : eq.default.isAuthenticated() && nk.rQ({ withAnalyticsToken: !0 }).catch(R.tEg),
                    y.default.track(R.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }),
                    (0, G.d0)("invite"),
                    lU.VP || eY.A.launch("discord://" + R.BVt.INVITE(t), () => void 0),
                    !l && h)
                ) {
                    let { baseCode: e } = (0, e$.y$)(t);
                    (0, w.bG)(R.BVt.INVITE_LOGIN(e));
                }
            }),
            u.useEffect(() => {
                r?.state === R.elq.APP_NOT_OPENED && N();
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
                        transitionTo: o,
                    } = e,
                    c = (0, ik.Ay)(i),
                    d = (0, ik.Ay)(l);
                (u.useEffect(() => {
                    if (s === l5 && i && !1 === c) {
                        let e = eq.default.getFingerprint();
                        if (null != e) {
                            let i = (0, eX.d)(e);
                            y.default.track(R.HAw.INVITE_LOGIN_SUCCESSFUL, {
                                invite_code: (0, e$.m0)(n),
                                guild_id: t?.guild?.id,
                                channel_id: t?.channel?.id,
                                inviter_id: t?.inviter?.id,
                                prev_user_id: i,
                            });
                        }
                        A.Ay.acceptInvite({
                            inviteKey: n,
                            context: r(R.S3d.INVITE),
                            skipOnboarding: !0,
                            callback: a,
                        }).catch(() => {});
                    }
                }, [i, c, s, r, a, t, n]),
                    u.useEffect(() => {
                        if (null != t && s === l9 && i && !1 === c) {
                            let { channel: e } = t;
                            if (null != e)
                                if (((0, lT.C)(lb.zY.INVITE_UNCLAIMED), null != t.guild)) {
                                    let e = (0, lQ.Lt)(t.flags ?? 0, lW.Q.IS_APPLICATION_BYPASS),
                                        n =
                                            t.guild.features?.includes(
                                                R.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED,
                                            ) &&
                                            t.guild.features?.includes(
                                                R.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL,
                                            );
                                    !e && n
                                        ? o(R.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id))
                                        : A.Ay.transitionToInviteOnboarding(t, { transitionTo: o });
                                } else A.Ay.transitionToInvite(t, { transitionTo: o });
                        }
                    }, [t, i, c, o, s, n]),
                    u.useEffect(() => {
                        null == t ||
                            (l !== d &&
                                (l === R.fAW.OPEN
                                    ? y.default.track(
                                          R.HAw.INVITE_APP_INVOKED,
                                          {
                                              invite_code: (0, e$.m0)(n),
                                              guild_id: t.guild?.id,
                                              channel_id: t.channel?.id,
                                              inviter_id: t.inviter?.id,
                                              user_is_member: null != t.guild && null != e9.A.getGuild(t.guild.id),
                                              size_total: t.approximate_member_count,
                                              invite_type: null != t.type ? tr.Xd[t.type] : void 0,
                                          },
                                          { flush: !0 },
                                      )
                                    : l === R.fAW.OPEN_FAIL &&
                                      y.default.track(R.HAw.INVITE_APP_INVOKE_FAILED, {
                                          invite_code: (0, e$.m0)(n),
                                          reason: "rpc_failed",
                                          invite_type: null != t.type ? tr.Xd[t.type] : void 0,
                                      })));
                    }, [t, l, d, n]));
            })({
                invite: r,
                inviteKey: t,
                authenticated: c,
                nativeAppState: a,
                mode: _,
                getAcceptInviteContext: j,
                handleContinue: N,
                transitionTo: i,
            }),
            null == r)
        )
            return null;
        let I = a === R.fAW.OPEN;
        if (x || I || r.state === R.elq.APP_OPENED)
            return (0, o.jsx)(si, { invite: r, inviteKey: t, rpcConnected: I, onContinue: N });
        let { state: S } = r;
        if (S === R.elq.APP_NOT_OPENED) return (0, o.jsx)(sr, { invite: r, handleDefaultTransition: v });
        if ([R.elq.RESOLVING, R.elq.ACCEPTING, R.elq.APP_OPENING].includes(S)) {
            let e =
                S === R.elq.ACCEPTING ? K.intl.string(K.t["6wsY16"]) : (R.elq.RESOLVING, K.intl.string(K.t["Z+hCVU"]));
            return (0, o.jsx)(sl, { title: e });
        }
        if (S === R.elq.EXPIRED) return (0, o.jsx)(ss, { banned: !1, invite: r, handleDefaultTransition: v });
        if (S === R.elq.BANNED) return (0, o.jsx)(ss, { banned: !0, invite: r, handleDefaultTransition: v });
        if (S === R.elq.RESOLVED) {
            if (c && (0, lQ.Lt)(r.flags ?? 0, lW.Q.IS_GUEST_INVITE))
                return (
                    A.Ay.openApp(t),
                    lK.u.set(lq.B, t),
                    (0, o.jsx)(si, { invite: r, inviteKey: t, rpcConnected: I, onContinue: () => i(R.BVt.APP) })
                );
            if (null != r.type && tr.uR.has(r.type) && p)
                return (0, o.jsx)(sl, { title: K.intl.string(K.t["Z+hCVU"]) });
            if (!c && lU.VP)
                return _ === l5
                    ? (0, o.jsx)(se, { invite: r, transitionTo: i, location: n })
                    : (0, o.jsx)(st, {
                          invite: r,
                          onLoginStart: function () {
                              y.default.track(R.HAw.INVITE_LOGIN, {
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
        return S === R.elq.RESOLVED || S === R.elq.ERROR
            ? (0, o.jsx)(sn, { invite: r, inviteKey: t, handleAccept: C, handleDefaultTransition: v })
            : null;
    }),
    sf = ir(function (e) {
        let t = {
            guildTemplate: (0, g.bG)([eT.A], () => eT.A.getGuildTemplate(e.code)),
            nativeAppState: (0, g.bG)([ix.A], () => ix.A.getState(e.code)),
            authenticated: (0, g.bG)([eq.default], () => eq.default.isAuthenticated()),
            defaultRoute: (0, g.bG)([eh.A], () => eh.A.defaultRoute),
        };
        return (0, o.jsx)(lB, { ...e, ...t });
    }),
    sp = ir(lO),
    sx = ir(function (e) {
        let { inviteKey: t, transitionTo: n } = e,
            i = (0, g.bG)([e5.A], () => e5.A.getInvite(t));
        return (
            u.useEffect(() => {
                let e = eq.default.getAnalyticsToken();
                (null != e &&
                    f.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eq.default.getId() }),
                    (0, G.d0)("invite_mobile"),
                    y.default.track(R.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }));
            }, []),
            (0, o.jsx)(n_, {
                invite: i,
                onAcceptInvite: function (e) {
                    nh(e, t, i);
                },
                onOpenAppAfterRegistration: function (e) {
                    nh(e, t, i, { didRegister: !0 });
                },
                transitionTo: n,
            })
        );
    }),
    sA = ir(lR),
    sE = ir(function (e) {
        let { location: t, transitionTo: i = w.pX } = e,
            [l, s] = u.useState("submitting");
        function r() {
            return "Android" === eQ().os.family || "iOS" === eQ().os.family
                ? null
                : (0, o.jsx)(V.$, {
                      text: K.intl.string(K.t.dKhVQN),
                      fullWidth: !0,
                      onClick: () => i(R.BVt.LOGIN, { source: "authorizeIPAdress" }),
                  });
        }
        return ((0, lX.Ay)(() => {
            (0, G.d0)("authorize_ip");
            let e = (0, eg.A)(t);
            null == e
                ? s("failed")
                : (async function () {
                      if (null != e)
                          try {
                              (await p.A.authorizeIPAddress(e), s("succeeded"));
                          } catch (e) {
                              s("failed");
                          }
                  })();
        }),
        "failed" === l)
            ? (0, o.jsxs)(D.Ay, {
                  children: [
                      (0, o.jsx)("img", { alt: "", src: n(792009), className: X.SX }),
                      (0, o.jsx)(D.hE, { className: X.QB, children: K.intl.string(K.t["f/54az"]) }),
                      (0, o.jsx)(D.tK, { className: X.C2, children: K.intl.string(K.t.i3ehMr) }),
                      r(),
                  ],
              })
            : "succeeded" === l
              ? (0, o.jsxs)(D.Ay, {
                    children: [
                        (0, o.jsx)("img", { alt: "", src: n(841406), className: X.SX }),
                        (0, o.jsx)(D.hE, { className: X.QB, children: K.intl.string(K.t.iG0SlK) }),
                        (0, o.jsx)(D.tK, { className: X.C2, children: K.intl.string(K.t["Elv+qt"]) }),
                        r(),
                    ],
                })
              : (0, o.jsxs)(D.Ay, {
                    children: [(0, o.jsx)(D.CK, {}), (0, o.jsx)(D.hE, { children: K.intl.string(K.t["9exy+V"]) })],
                });
    }),
    s_ = ir(function (e) {
        let { location: t } = e,
            [i, l] = u.useState("submitting");
        return (u.useEffect(() => {
            (0, G.d0)("authorize_payment");
            let e = (0, eg.A)(t);
            null == e
                ? l("failed")
                : (async function () {
                      if (null != e)
                          try {
                              (await p.A.authorizePayment(e), l("succeeded"));
                          } catch (e) {
                              l("failed");
                          }
                  })();
        }, [t]),
        "failed" === i)
            ? (0, o.jsxs)(D.Ay, {
                  children: [
                      (0, o.jsx)("img", { alt: "", src: n(678985), className: X.SX }),
                      (0, o.jsx)(D.hE, { className: X.QB, children: K.intl.string(K.t.GHRpue) }),
                      (0, o.jsx)(D.tK, { className: X.C2, children: K.intl.string(K.t["1nO55v"]) }),
                  ],
              })
            : "succeeded" === i
              ? (0, o.jsxs)(D.Ay, {
                    children: [
                        (0, o.jsx)("img", { alt: "", src: n(586430), className: X.SX }),
                        (0, o.jsx)(D.hE, { className: X.QB, children: K.intl.string(K.t.ihHX53) }),
                        (0, o.jsx)(D.tK, { className: X.C2, children: K.intl.string(K.t["pGPCv+"]) }),
                    ],
                })
              : (0, o.jsxs)(D.Ay, {
                    children: [(0, o.jsx)(D.CK, {}), (0, o.jsx)(D.hE, { children: K.intl.string(K.t.T3vC7n) })],
                });
    }),
    sj = ir(function (e) {
        let { location: t, transitionTo: n = sd } = e,
            [i, l] = u.useState("submitting"),
            s = u.useRef(void 0);
        (0, lX.Ay)(() => {
            (0, G.d0)("verify_email");
            let e = (0, eg.A)(t);
            null == e
                ? l("failed")
                : (async function () {
                      if (null != e)
                          try {
                              let t = await p.A.verify(e);
                              (l("succeeded"), (s.current = t));
                          } catch (e) {
                              l("failed");
                          }
                  })();
        });
        let r = u.useCallback(() => {
                n(R.BVt.LOGIN, { source: "verify_email" });
            }, [n]),
            a = u.useCallback(() => {
                (y.default.track(R.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: s.current }),
                    (0, sc.A)("verify_email"));
            }, []);
        return "failed" === i
            ? (0, o.jsx)(eG, {
                  title: K.intl.string(K.t["PCgG3+"]),
                  subtitle: K.intl.string(K.t.tQpeA3),
                  buttonText: K.intl.string(K.t.dKhVQN),
                  onButtonClick: r,
              })
            : "succeeded" === i
              ? (0, o.jsx)(eG, {
                    title: K.intl.string(K.t["dAfGb+"]),
                    buttonText: K.intl.string(K.t["uJWIj/"]),
                    onButtonClick: a,
                    image: (0, o.jsx)(eR, { alt: K.intl.string(K.t["dAfGb+"]) }),
                })
              : (0, o.jsx)(eG, {
                    title: K.intl.string(K.t["0c8+5n"]),
                    subtitle: K.intl.string(K.t.ULTCBE),
                    loading: !0,
                });
    }),
    sN = ir(function () {
        let [e, t] = u.useState(""),
            [i, l] = u.useState(""),
            [s, r] = u.useState(!1),
            [a, c] = u.useState(!1),
            [d, h] = u.useState(null),
            [m, f] = u.useState(null),
            p = (0, g.bG)([e_.A], () => e_.A.getCountryCode()),
            x = p.code.split(" ")[0];
        async function A() {
            try {
                await eA.A.resendCode(e);
            } catch (e) {
                f(e.body.message);
            }
        }
        async function E() {
            r(!0);
            try {
                let { token: t } = await eA.A.verifyPhone(x + e, i);
                (h(null), f(null), c(!0), eA.A.validatePhoneForSupport(t));
            } catch (e) {
                e.body.message ? (h(null), f(e.body.message)) : (h(e.body.phone), f(e.body.code));
            } finally {
                r(!1);
            }
        }
        let _ = (0, o.jsxs)(D.Ay, {
            children: [
                (0, o.jsx)(D._V, { src: n(142041) }),
                (0, o.jsxs)(D.hE, {
                    className: F()(X.QX, eN.Uu, eN.wq, eN.Hu),
                    children: [
                        K.intl.string(K.t.WWzQta),
                        (0, o.jsx)(ex.y, { size: "md", color: "currentColor", className: X.oY }),
                    ],
                }),
            ],
        });
        return a
            ? _
            : (0, o.jsxs)(D.Ay, {
                  children: [
                      (0, o.jsx)(D.hE, { children: K.intl.string(K.t.o4JNrO) }),
                      (0, o.jsx)(D.tK, { className: X.Ot, children: K.intl.string(K.t.y0tVbq) }),
                      (0, o.jsxs)(D.eB, {
                          className: X.QX,
                          children: [
                              (0, o.jsx)(ej.A, {
                                  label: K.intl.string(K.t["eJnn0+"]),
                                  alpha2: p.alpha2,
                                  countryCode: x,
                                  value: e,
                                  autoComplete: "off",
                                  spellCheck: "false",
                                  onChange: t,
                                  forceMode: eE.Pd.PHONE,
                                  error: d,
                              }),
                              (0, o.jsx)(D.pd, {
                                  className: X.QX,
                                  label: K.intl.string(K.t.OdzNbm),
                                  value: i,
                                  onChange: l,
                                  maxLength: 6,
                                  error: m,
                              }),
                              (0, o.jsx)(ed.Q, { text: K.intl.string(K.t["5b60gi"]), onClick: A }),
                              (0, o.jsx)("div", {
                                  className: X.QX,
                                  children: (0, o.jsx)(V.$, {
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
    sC = ir(su.A),
    sv = ir(ig),
    sI = ir(ep),
    sS = ir(function (e) {
        let { location: t } = e,
            [n, i] = u.useState(!1),
            { verifySuccess: l, verifyErrors: s, redirectGuildId: r } = (0, g.bG)([eV], () => eV.getState());
        function a() {
            let e, t;
            ((e = (function (e) {
                let t = eQ().os?.family;
                if ("Android" === t || "iOS" === t) {
                    let t = eq.default.getFingerprint(),
                        n = (0, ez.I_)();
                    return (
                        eH()(null != e, "generateAppPath: guildId cannot be null"),
                        (0, ez.Ay)((0, eK.jN)(e), { utmSource: "verify_hub_email", fingerprint: t, attemptId: n })
                    );
                }
                return "discord://";
            })(r)),
                null != (t = (0, ez.X7)(e)) &&
                    y.default.track(R.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, eX.v)(t.fingerprint),
                        attempt_id: t.attemptId,
                        source: t.utmSource,
                    }),
                eY.A.launch(e, (e) => {
                    e || (0, w.bG)(eh.A.fallbackRoute);
                }),
                i(!0));
        }
        return (u.useEffect(() => {
            let e = (0, eg.A)(t);
            (eL.A.verify(e), (0, G.d0)("verify_hub_email"));
        }, [t]),
        n)
            ? (0, o.jsx)(eG, {
                  title: K.intl.string(K.t.csrAMJ),
                  subtitle: K.intl.string(K.t["m1+IBn"]),
                  buttonText: K.intl.string(K.t.fIv16B),
                  onButtonClick: () => (0, w.pX)(R.BVt.CHANNEL(r)),
              })
            : l
              ? (0, o.jsx)(eG, {
                    title: K.intl.string(K.t["dAfGb+"]),
                    buttonText: K.intl.string(K.t["uJWIj/"]),
                    onButtonClick: a,
                    image: (0, o.jsx)(eR, { alt: K.intl.string(K.t["dAfGb+"]) }),
                })
              : null != s
                ? (0, o.jsx)(eG, {
                      title: K.intl.string(K.t["PCgG3+"]),
                      subtitle: K.intl.string(K.t.tQpeA3),
                      buttonText: K.intl.string(K.t["uJWIj/"]),
                      onButtonClick: a,
                  })
                : (0, o.jsx)(eG, {
                      title: K.intl.string(K.t["0c8+5n"]),
                      subtitle: K.intl.string(K.t.ULTCBE),
                      loading: !0,
                  });
    }),
    sT = ir(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, io.W)(nT.XK.CHANNEL, {
                guildId: e.params.guildId,
                channelId: e.params.channelId,
                messageId: e.params.messageId,
                search: t.search,
            });
        }
        return (0, o.jsx)(id, { match: t, location: n, attemptDeepLink: i });
    }),
    sy = ir(function (e) {
        let { match: t, location: n } = e;
        async function i(e) {
            await (0, io.W)(nT.XK.GAME_SHOP, {
                guildId: e.params.guildId,
                pageIndex: e.params.pageIndex,
                skuId: e.params.skuId,
                slug: e.params.slug,
            });
        }
        return (0, o.jsx)(id, { match: t, location: n, attemptDeepLink: i });
    }),
    sb = ir(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, io.W)(nT.XK.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search,
            });
        }
        return (0, o.jsx)(id, { match: t, location: n, attemptDeepLink: i });
    }),
    sR = ir(function (e) {
        let { location: t } = e,
            n = (0, g.bG)([eq.default], () => eq.default.isAuthenticated()),
            i = (0, g.bG)([eI.A], () => eI.A.hasLoadedExperiments),
            l = so.useExperiment({ location: "RSL - Landing Page" }, { autoTrackExposure: !0 }).enabled,
            [s, r] = u.useState(!1),
            [a, c] = u.useState(K.intl.string(K.t["9exy+V"])),
            [d, h] = u.useState(!0);
        function m(e) {
            switch (e) {
                case R.t02.INVALID_FORM_BODY:
                case R.t02.DSA_RSL_REPORT_NOT_FOUND:
                    c(K.intl.string(K.t.bzXDfc));
                    break;
                case R.t02.DSA_RSL_ALREADY_REQUESTED:
                    c(K.intl.string(K.t.rV00wq));
                    break;
                case R.t02.DSA_RSL_LIMITED_TIME:
                    c(K.intl.string(K.t["0dI29h"]));
                    break;
                case R.t02.DSA_RSL_REPORT_INELIGIBLE:
                    c(K.intl.string(K.t["RGa/Gb"]));
                    break;
                default:
                    c(K.intl.string(K.t["0QLzfv"]));
            }
        }
        return (
            u.useEffect(() => {
                n
                    ? (h(!0),
                      nk
                          .rQ({ withAnalyticsToken: !0 })
                          .then(() => h(!1))
                          .catch(() => h(!1)))
                    : h(!1);
            }, [n]),
            u.useEffect(() => {
                i || l || p.A.getExperiments();
            }, [i, l]),
            u.useEffect(() => {
                async function e(e) {
                    try {
                        let t = null != e ? await (0, nw.q)(e) : void 0;
                        null != t ? c(K.intl.string(K.t.e6mZMt)) : m(t.body?.code);
                    } catch (e) {
                        m(e.body?.code);
                    } finally {
                        r(!1);
                    }
                }
                (r(!0), e((0, eg.A)(t)), (0, G.d0)("report_second_look"));
            }, [t]),
            l &&
                !d &&
                (0, o.jsxs)(D.Ay, {
                    children: [(0, o.jsx)(D.hE, { className: X.QB, children: a }), s && (0, o.jsx)(eD.y, {})],
                })
        );
    }),
    sL = ir(en),
    sO = ir(function (e) {
        let { match: t, location: i } = e,
            l = (0, c.parse)(i.search).token,
            [s, r] = u.useState("loading"),
            a = u.useRef(!1),
            d = u.useCallback(async (e) => {
                try {
                    (y.default.track(R.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                        await p.A.oneTimeLogin(e),
                        r("login_success"),
                        y.default.track(R.HAw.LOGIN_SUCCESSFUL, { source: "web_page", login_method: "one_time_login" }),
                        n.g.location.assign(R.BVt.APP));
                } catch (t) {
                    let e = t instanceof Error ? t.message : "Unknown error";
                    (y.default.track(R.HAw.ONE_TIME_LOGIN_ERROR, {
                        source: "web_page",
                        error_reason: "api_error",
                        error_message: e,
                    }),
                        r("error"));
                }
            }, []),
            m = u.useCallback((e) => {
                let t = eq.default.getFingerprint() ?? eq.default.getId(),
                    n = `discord://login/one-time?token=${encodeURIComponent(e)}`;
                eY.A.launch(n, (e) => {
                    e
                        ? (y.default.track(R.HAw.DEEP_LINK_CLICKED, {
                              source: "web_page",
                              destination: "discord://login/one-time",
                              deep_link_provider: "protocol",
                              fingerprint: t,
                          }),
                          r("app_launched"))
                        : r("app_launch_not_supported");
                });
            }, []),
            g = u.useCallback(
                (e) => {
                    let t = eq.default.getFingerprint() ?? eq.default.getId(),
                        i = eq.default.getInstallationForTracking();
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((n) => {
                            let { default: l } = n;
                            l.request(R.e$_.DEEP_LINK, {
                                type: nT.XK.ONE_TIME_LOGIN,
                                params: { token: e, fingerprint: t, installationId: i },
                            })
                                .then((n) => {
                                    n
                                        ? (y.default.track(R.HAw.DEEP_LINK_CLICKED, {
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
            (u.useEffect(() => {
                let e = null != l && "string" == typeof l,
                    t = h.Fr ? "mobile" : h.v1 ? "tablet" : (0, nN.isDesktop)() ? "desktop_app" : "web";
                if ((y.default.track(R.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: e, device_type: t }), !e))
                    return void r("error");
                if (h.Fr || h.v1) {
                    let e = y.default.getSuperProperties()?.os;
                    y.default.track(R.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_ui_shown",
                        device_type: t,
                        platform: e,
                    });
                    return;
                }
                (0, nN.isDesktop)() ? d(l) : a.current || ((a.current = !0), r("rpc_attempting"), g(l));
            }, [l, i, d, g]),
            h.Fr || h.v1)
        ) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, o.jsx)(nS, { token: l, hasError: "error" === s, errorReason: e });
        }
        if ((0, w.MX)()) return null;
        if ("app_launched" === s)
            return (0, o.jsx)(ny, {
                title: K.intl.string(K.t.RvUUOy),
                subtitle: K.intl.string(K.t["5/lR0g"]),
                buttonText: K.intl.string(K.t["2ixEBi"]),
                buttonOnClick: () => {
                    (y.default.track(R.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: s }), d(l));
                },
            });
        if ("app_launch_not_supported" === s)
            return (0, o.jsx)(ny, {
                title: K.intl.string(K.t.qq4tjT),
                subtitle: K.intl.string(K.t.CVxYRo),
                buttonText: K.intl.string(K.t["2ixEBi"]),
                buttonOnClick: () => d(l),
            });
        if ("error" === s) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, o.jsx)(ny, {
                title: K.intl.string(K.t.RtCSr1),
                subtitle: K.intl.string(K.t["S+YjYJ"]),
                buttonText: K.intl.string(K.t.j3cG2p),
                buttonOnClick: () => {
                    (y.default.track(R.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                        (0, w.pX)(R.BVt.LOGIN));
                },
            });
        }
        return (0, o.jsx)(D.Ay, { children: (0, o.jsx)(D.CK, {}) });
    });
class sk extends u.PureComponent {
    state = { splash: null, redirectTo: null, backgroundId: null };
    hasTriggeredInviteResolve = !1;
    experimentFallbackTimeout = null;
    static getDerivedStateFromProps(e, t) {
        let { invite: n, location: i } = e,
            { backgroundId: l } = t,
            s = (0, c.parse)(i.search).redirect_to ?? null;
        (null == s || "" === s || s.startsWith(R.BVt.ME) || (!(0, m.e)(s) && !eu(s))) && (s = null);
        let r = null;
        if (null == n) r = (0, n4.u8)(s);
        else {
            let { guild: e, target_application: t } = n;
            null != t
                ? null != l && (r = (0, n2.uD)(t.id, l, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (r = e6.Ay.getGuildSplashURL({ id: e.id, splash: e.splash }));
        }
        return { redirectTo: s, splash: r };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        (null != e &&
            (!t && n && p.A.getExperiments(!0),
            null != eq.default.getInstallationForTracking() && (0, eS.Tv)(null),
            y.default.track(
                R.HAw.INVITE_OPENED,
                { invite_code: (0, e$.m0)(e), load_time: n7.getTimeSinceNavigationStart() },
                { flush: !0 },
            )),
            t
                ? this.maybeResolveInvite()
                : null != e && (this.experimentFallbackTimeout = setTimeout(this.maybeResolveInvite, 2e3)),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            k.initialize(),
            (0, G.DC)());
    }
    componentDidUpdate(e) {
        (!e.hasLoadedExperiments && this.props.hasLoadedExperiments && this.maybeResolveInvite(),
            e.invite?.state !== this.props.invite?.state && this.maybeFetchApplicationSplash());
    }
    componentWillUnmount() {
        (null != this.experimentFallbackTimeout &&
            (clearTimeout(this.experimentFallbackTimeout), (this.experimentFallbackTimeout = null)),
            k.terminate());
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
        if (e?.state === R.elq.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, n2.RG)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await A.Ay.resolveInvite(e, R.S3d.INVITE, {
            withGames: !0,
            withGuildExperiments: h.Fr || h.v1,
        });
        if (null != t && (el(t), null != t.type && tr.uR.has(t.type))) {
            if ("denied" === (await ev()))
                return void y.default.track(R.HAw.INVITE_APP_INVOKE_FAILED, {
                    invite_code: (0, e$.m0)(e),
                    reason: "lna_denied",
                    invite_type: tr.Xd[t.type],
                });
            A.Ay.openNativeAppModal(e);
        }
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (y.default.track(
                R.HAw.GUILD_TEMPLATE_OPENED,
                { guild_template_code: e, load_time: n7.getTimeSinceNavigationStart() },
                { flush: !0 },
            ),
            ey.A.resolveGuildTemplate(e),
            ey.A.openNativeAppModal(e));
    }
    resolveGiftCode() {
        let { giftCode: e } = this.props;
        null != e &&
            x.Ay.resolveGiftCode(e, !0, !0)
                .then((t) => {
                    null != t && null == t.giftCode.promotion && f.h.wait(() => x.Ay.openNativeGiftCodeModal(e));
                })
                .catch(x.Ay.reportUnexpectedGiftCodeError);
    }
    render() {
        let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
        return (0, o.jsxs)(ia.A, {
            splash: e,
            children: [
                (0, o.jsx)(ei.A, { path: R.BVt.LOGIN_HANDOFF, render: (e) => (0, o.jsx)(sm, { ...e, redirectTo: t }) }),
                (0, o.jsx)(ei.A, { path: R.BVt.LOGIN_ONE_TIME, render: (e) => (0, o.jsx)(sO, { ...e }) }),
                (0, o.jsx)(ei.A, {
                    impressionName: d.ImpressionNames.USER_LOGIN,
                    path: R.BVt.LOGIN,
                    render: (e) => (0, o.jsx)(sh, { ...e, redirectTo: t }),
                }),
                (0, o.jsx)(ei.A, {
                    impressionName: d.ImpressionNames.USER_REGISTRATION,
                    path: R.BVt.REGISTER,
                    render: (e) => (0, o.jsx)(sA, { ...e, redirectTo: t }),
                }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, o.jsx)(sp, { login: !0, ...e }),
                }),
                (0, o.jsx)(ei.A, { path: R.BVt.GIFT_CODE(":giftCode"), render: (e) => (0, o.jsx)(sp, { ...e }) }),
                (0, o.jsx)(ei.A, {
                    path: [R.BVt.INVITE_LOGIN(":inviteCode"), R.BVt.INVITE(":inviteCode")],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n,
                                },
                                location: i,
                                transitionTo: l,
                            } = e,
                            s = (0, e$.fB)(t, i.search);
                        return h.Fr || h.v1
                            ? (0, o.jsx)(sx, { inviteKey: s, transitionTo: l }, s)
                            : (0, o.jsx)(
                                  sg,
                                  {
                                      inviteKey: s,
                                      location: i,
                                      transitionTo: l,
                                      login: n === R.BVt.INVITE_LOGIN(":inviteCode"),
                                  },
                                  s,
                              );
                    },
                }),
                (0, o.jsx)(ei.A, {
                    path: [
                        R.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                        R.BVt.GUILD_TEMPLATE(":guildTemplateCode"),
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
                        return h.Fr || h.v1
                            ? (0, o.jsx)(lH, { code: t }, t)
                            : (0, o.jsx)(sf, {
                                  code: t,
                                  location: i,
                                  transitionTo: l,
                                  login: n === R.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, o.jsx)(ei.A, { path: R.BVt.VERIFY, render: (e) => (0, o.jsx)(sj, { ...e }) }),
                (0, o.jsx)(ei.A, { path: R.BVt.VERIFY_HUB_EMAIL, render: (e) => (0, o.jsx)(sS, { ...e }) }),
                (0, o.jsx)(ei.A, { path: R.BVt.VERIFY_REQUEST, render: (e) => (0, o.jsx)(sN, { ...e }) }),
                (0, o.jsx)(ei.A, { path: R.BVt.DISABLE_EMAIL_NOTIFICATIONS, render: (e) => (0, o.jsx)(sv, { ...e }) }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, o.jsx)(sI, { ...e }),
                }),
                (0, o.jsx)(ei.A, { path: R.BVt.AUTHORIZE_IP, render: (e) => (0, o.jsx)(sE, { ...e }) }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.REJECT_IP,
                    render: (e) => (0, o.jsx)(sC, { source: R.BVt.REJECT_IP, ...e }),
                }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.REJECT_MFA,
                    render: (e) => (0, o.jsx)(sC, { source: R.BVt.REJECT_MFA, ...e }),
                }),
                (0, o.jsx)(ei.A, { path: R.BVt.AUTHORIZE_PAYMENT, render: (e) => (0, o.jsx)(s_, { ...e }) }),
                (0, o.jsx)(ei.A, { path: R.BVt.RESET, render: (e) => (0, o.jsx)(sC, { source: R.BVt.RESET, ...e }) }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, o.jsx)(sb, { ...e }),
                }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.CHANNELS_GAME_SHOP(nb.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, o.jsx)(sy, { ...e }),
                }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.CHANNEL(nb.pv.guildId(), nb.pv.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, o.jsx)(sT, { ...e }),
                }),
                (0, o.jsx)(ei.A, { path: R.BVt.REPORT, render: () => (0, o.jsx)(n0, {}) }),
                (0, o.jsx)(ei.A, { path: R.BVt.REPORT_SECOND_LOOK, render: (e) => (0, o.jsx)(sR, { ...e }) }),
                (0, o.jsx)(ei.A, { path: R.BVt.ACCOUNT_REVERT(":token"), render: (e) => (0, o.jsx)(sL, { ...e }) }),
            ],
        });
    }
}
let sD = g.Ay.connectStores([eq.default, e5.A, n1.A, eI.A, eT.A], (e) => {
    let { match: t, location: n } = e,
        i = t?.params?.inviteCode,
        l = null != i ? (0, e$.fB)(i, n.search) : void 0,
        s = t?.params?.giftCode,
        r = t?.params?.guildTemplateCode;
    return {
        inviteKey: l,
        isAuthenticated: eq.default.isAuthenticated(),
        giftCode: s,
        guildTemplateCode: r,
        gift: null != s ? n1.A.get(s) : null,
        invite: null != l ? e5.A.getInvite(l) : null,
        guildTemplate: null != r ? eT.A.getGuildTemplate(r) : null,
        hasLoadedExperiments: eI.A.hasLoadedExperiments,
    };
})(sk);
