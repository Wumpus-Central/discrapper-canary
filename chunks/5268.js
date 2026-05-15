n.r(t), n.d(t, { default: () => sh });
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
    R = n(652215);
function y(e, t) {
    S.default.track(R.HAw.BROWSER_HANDOFF_SUCCEEDED, { authenticated: e, handoff_source: t });
}
class L extends b.A {
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
            ? p.Bo.post({ url: R.Rsh.HANDOFF_EXCHANGE, body: { key: t, handoff_token: n }, rejectWithError: !1 }).then(
                  (e) => {
                      let { body: t } = e;
                      (0, E.uA)(t.user), x.A.loginToken(t.token, !1), y(!0, l);
                  },
                  (e) => {
                      null != i && y(!1, l),
                          x.A.setFingerprint(i),
                          (0, E.mZ)(),
                          l === I.ROLE_SUBSCRIPTION &&
                              S.default.track(R.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: e.message ?? e.text,
                                  handoff_source: l,
                              });
                  },
              )
            : null != i
              ? (x.A.setFingerprint(i), y(!1, l), (0, E.mZ)())
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
let O = new L();
var k = n(854378),
    P = n(976860),
    G = n(210714),
    D = n(430690),
    V = n(503698),
    U = n.n(V),
    w = n(834730),
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
                (0, a.jsx)(k._V, { src: null == h ? n(79418) : n(579656), className: U()(K.SX, K.Ot) }),
                (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.IfBQ56) }),
                null != h && "" !== h
                    ? (0, a.jsx)(w.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: h })
                    : null,
                (0, a.jsxs)(k.eB, {
                    className: U()(K.SX, K.QX),
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
                                            m(Q.intl.string(Q.t.R98xD5)), F._.dispatch(R.jej.WAVE_EMPHASIZE);
                                            return;
                                        }
                                        return (
                                            null != h && g(null),
                                            null != u && m(null),
                                            t(""),
                                            c(!0),
                                            W.A.post({
                                                url: R.Rsh.ACCOUNT_REVERT,
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
                                                                statusPageURL: R.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new B.A(e);
                                                        t.hasFieldErrors()
                                                            ? m(t.getAnyErrorMessage())
                                                            : g(
                                                                  (function (e) {
                                                                      switch (e) {
                                                                          case R.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                              return Q.intl.string(Q.t["11zzGR"]);
                                                                          case R.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                              return Q.intl.string(Q.t["6qmgaI"]);
                                                                          case R.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                              return Q.intl.string(Q.t.bChnKs);
                                                                          default:
                                                                              return Q.intl.format(Q.t.aTVNes, {
                                                                                  statusPageURL: R.qF7.STATUS,
                                                                              });
                                                                      }
                                                                  })(t.code).toString(),
                                                              );
                                                    }
                                                    F._.dispatch(R.jej.WAVE_EMPHASIZE);
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
var Y = n(825484),
    X = n(749314);
function $(e) {
    let { children: t } = e;
    return (0, a.jsx)("li", {
        className: H.Aw,
        children: (0, a.jsx)(w.E, { variant: "text-sm/medium", color: "text-default", children: t }),
    });
}
function J(e) {
    let { setSlide: t, transitionTo: i } = e;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(k._V, { src: n(79418), className: U()(K.SX, K.Ot) }),
            (0, a.jsx)(k.hE, { className: K.QB, children: Q.intl.string(Q.t["8UcxI6"]) }),
            (0, a.jsx)(w.E, { variant: "text-md/normal", children: Q.intl.string(Q.t.O37hMl) }),
            (0, a.jsxs)(k.eB, {
                className: U()(K.SX, K.QX),
                children: [
                    (0, a.jsx)(w.E, { variant: "text-sm/normal" }),
                    (0, a.jsxs)("ul", {
                        className: H.qI,
                        children: [
                            (0, a.jsx)($, { children: Q.intl.string(Q.t.Gj1Zry) }),
                            (0, a.jsx)(X.A, {}),
                            (0, a.jsx)($, { children: Q.intl.string(Q.t["8C6t3B"]) }),
                            (0, a.jsx)(X.A, {}),
                            (0, a.jsx)($, { children: Q.intl.string(Q.t.mToZMA) }),
                            (0, a.jsx)(X.A, {}),
                            (0, a.jsx)($, { children: Q.intl.string(Q.t.TPEvkc) }),
                            (0, a.jsx)(X.A, {}),
                            (0, a.jsx)($, { children: Q.intl.string(Q.t.H8Y1Ln) }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)(Y.e, {
                direction: "vertical",
                fullWidth: !0,
                className: H.UD,
                children: [
                    (0, a.jsx)(M.$, { text: Q.intl.string(Q.t.GgCRqR), onClick: () => t(z.PASSWORD) }),
                    (0, a.jsx)(M.$, {
                        text: Q.intl.string(Q.t["B/yHcQ"]),
                        variant: "secondary",
                        onClick: () => i(R.BVt.LOGIN, { source: "account_revert" }),
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
            (0, a.jsx)(k._V, { src: n(79418), className: U()(K.SX, K.Ot) }),
            (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.ailkVG) }),
            (0, a.jsx)(k.tK, { children: Q.intl.format(Q.t["4ZMVCI"], { email: t }) }),
            (0, a.jsx)(w.E, {
                className: U()(K.QB, K.QX),
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
            s = (await p.Bo.post({ url: R.Rsh.HANDOFF, body: { key: t }, oldFormErrors: !0, rejectWithError: !0 })).body
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
                            t(R.BVt.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
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
var ej = n(653307),
    eN = n(736056),
    eT = n(122906),
    eI = n(121623),
    ev = n(31008);
function eC(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s = 288, height: r = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: r },
        src: ev.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var eS = n(154672),
    eb = n(331322),
    eR = n(534514),
    ey = n(289873),
    eL = n(794347);
function eO(e) {
    let { title: t, subtitle: n, buttonText: i, image: l, onButtonClick: s, loading: r } = e;
    return (0, a.jsx)(k.Ay, {
        className: eL.kL,
        children: (0, a.jsxs)(eb.B, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, a.jsxs)(eb.B, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, a.jsxs)(eb.B, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != l &&
                                    (0, a.jsx)(eb.B, {
                                        align: "center",
                                        justify: "center",
                                        className: eL.Sl,
                                        children: l,
                                    }),
                                r && (0, a.jsx)(ey.y, { type: ey.y.Type.SPINNING_CIRCLE }),
                                (0, a.jsx)(eR.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, a.jsx)(w.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                className: eL.VA,
                                children: n,
                            }),
                    ],
                }),
                !r && (0, a.jsx)(M.$, { onClick: s, text: i, variant: "overlay-primary" }),
            ],
        }),
    });
}
let ek = !1,
    eP = null,
    eG = null;
class eD extends h.Ay.Store {
    static displayName = "HubEmailVerificationStore";
    getState() {
        return { verifySuccess: ek, verifyErrors: eP, redirectGuildId: eG };
    }
}
let eV = new eD(g.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        (ek = !0), (eP = null), (eG = t);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        (ek = !1), (eP = t);
    },
});
var eU = n(284009),
    ew = n.n(eU),
    eM = n(481613),
    eB = n.n(eM),
    eF = n(400253),
    eW = n(742821),
    ez = n(80703),
    eQ = n(495544),
    eH = n(877062);
h.Ay.initialize();
var eK = n(842241),
    eq = n(873174),
    eY = n(280513),
    eX = n(717421),
    e$ = n(661531),
    eJ = n(359778),
    eZ = n(235986),
    e0 = n(592743);
function e1(e) {
    let { text: t, buttonCta: i, onClick: l } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(k._V, { src: n(431979) }),
            (0, a.jsx)(k.hE, { className: U()(K.QX, K.QB, ej.tR), children: Q.intl.string(Q.t.eL5z0i) }),
            (0, a.jsx)(k.tK, { className: K.C2, children: Q.intl.string(Q.t.poAv63) }),
            (0, a.jsxs)(eJ.Z, {
                className: e0.Nr,
                type: eJ.Z.Types.CUSTOM,
                children: [
                    (0, a.jsx)("img", { alt: "", className: e0.q8, src: n(355912) }),
                    (0, a.jsx)("img", { alt: "", className: e0.dw, src: n(610925) }),
                    (0, a.jsxs)(eZ.A, {
                        className: e0.p_,
                        direction: eZ.A.Direction.VERTICAL,
                        align: eZ.A.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, a.jsx)(w.E, {
                                tag: "strong",
                                className: e0.p8,
                                variant: "text-md/normal",
                                style: { color: e$.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, a.jsx)("div", {
                                className: e0.x6,
                                children: (0, a.jsx)(M.$, { text: i, fullWidth: !0, onClick: l }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e2(e) {
    let { text: t, buttonCta: n, theme: i = R.NJ8.DARK, onClick: l } = e;
    return (0, a.jsx)(k.Ay, { theme: i, children: (0, a.jsx)(e1, { text: t, buttonCta: n, onClick: l }) });
}
var e3 = n(765671),
    e8 = n(9994),
    e7 = n(71393),
    e6 = n(299091),
    e4 = n(486020),
    e5 = n(403362),
    e9 = n(778712),
    te = n(47167),
    tt = n(137177),
    tn = n(714991),
    ti = n(427262),
    tl = n(172799),
    ts = n(330936),
    tr = n(82210);
let ta = (e) => {
        let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
        return 0 === t.memberCount && 0 === t.memberCount ? null : t;
    },
    to = (e) => e.target_type === tl.yV.STREAM && null != e.target_user,
    tc = (e) => e.channel?.type === R.rbe.GROUP_DM,
    td = (e) => null == e.channel && null == e.guild && null != e.inviter,
    tu = (e) => e.state === R.elq.ACCEPTED,
    tm = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    th = (e) => {
        let t;
        return !tm(e) && (!!td(e) || (null != e.inviter && !tu(e) && ((t = ta(e)), !((t?.memberCount ?? 0) > 100))));
    },
    tg = (e) => {
        let { guild: t, user: n, application: i } = e;
        return null != i
            ? (0, a.jsx)(tt.A, { className: tr.Z2, game: i, size: tr.q6 })
            : null != n
              ? (0, a.jsx)(k.eu, {
                    src: n.getAvatarURL(void 0, 100),
                    size: e9._3.DEPRECATED_SIZE_100,
                    className: tr.my,
                })
              : null != t
                ? (0, a.jsx)(k.$v, { guild: t, size: k.$v.Sizes.LARGER, className: tr.$f, animate: !0 })
                : null;
    };
function tx(e) {
    let { invite: t, textClassName: n, className: i } = e,
        l = ta(t);
    return null == l || th(t) || t?.guild?.id === ts.TA
        ? null
        : (0, a.jsx)(k.R1, {
              className: U()(tr.He, i),
              online: l.onlineCount,
              total: l.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function tf(e) {
    let { invite: t, showBigUserIcon: n } = e,
        i = o.useMemo(
            () =>
                n
                    ? null
                    : to(t) && null != t.target_user
                      ? e4.Ay.getUserAvatarURL(t.target_user)
                      : th(t) && null != t.inviter
                        ? e4.Ay.getUserAvatarURL(t.inviter)
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
            : to(t) && null != t.target_user
              ? (l = Q.intl.formatToPlainString(Q.t.x2L32Q, { username: t.target_user.username }))
              : tu(t)
                ? (l = Q.intl.string(Q.t["FDsl+J"]))
                : th(t) &&
                  null != t.inviter &&
                  (l = Q.intl.format(Q.t.spU2mI, { username: ti.Ay.getFormattedName(t.inviter) })),
        (0, a.jsxs)("div", {
            className: tr.JB,
            children: [
                null != i &&
                    (0, a.jsx)("div", {
                        className: tr._t,
                        children: (0, a.jsx)(k.eu, { src: i, size: e9._3.SIZE_24 }),
                    }),
                (0, a.jsx)(k.tK, { className: tr.__invalid_inviteJoinSubTitle, children: l }),
            ],
        })
    );
}
function tA(e) {
    let t,
        n,
        i,
        { user: l, guild: s, channel: r, application: o, showBigUserIcon: c } = e,
        d = (0, te.Ay)(r);
    if (null != s)
        c && null == o && (t = (0, a.jsx)(k.$v, { guild: s, size: k.$v.Sizes.SMALL })),
            (n = s.name),
            null != o &&
                ((n = o.name),
                (i = (0, a.jsxs)("div", {
                    className: tr.JB,
                    children: [
                        (0, a.jsx)(k.tK, { className: tr.R9, children: Q.intl.string(Q.t["3gg9fF"]) }),
                        (0, a.jsxs)("div", {
                            className: tr.bo,
                            children: [
                                (0, a.jsx)(k.$v, { guild: s, size: k.$v.Sizes.SMALL }),
                                (0, a.jsx)(eR.D, {
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
        let e = ti.Ay.getFormattedName(l);
        null != d && "" !== d
            ? ((n = d), null != r.icon && (t = (0, a.jsx)(k.F4, { channel: r, size: e9._3.SIZE_32 })))
            : (n = e);
    } else if (null != l) {
        let e = ti.Ay.getFormattedName(l);
        (n = Q.intl.formatToPlainString(Q.t["4aF92R"], { username: e })),
            (i = (0, a.jsx)(k.tK, { className: tr.b$, children: Q.intl.format(Q.t.Quj7HX, { username: e }) }));
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(k.hE, {
                className: tr.DD,
                children: [
                    null != s ? (0, a.jsx)(tn.A, { guild: s, className: tr.n2, tooltipPosition: "left" }) : null,
                    t,
                    n,
                ],
            }),
            i,
        ],
    });
}
var tp = n(395671),
    tE = n(95701),
    t_ = n(889227),
    tj = n(548118),
    tN = n(557582),
    tT = n(167630),
    tI = n(367048);
function tv(e) {
    let { guildScheduledEvent: t, channel: n, onAcceptInvite: i, isSubmitting: l } = e;
    return (0, a.jsxs)("div", {
        className: tI.s4,
        children: [
            (0, a.jsx)(tN.Ay, {
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
                    children: (0, a.jsx)(tT.A, { guildScheduledEvent: t, channel: n }),
                }),
            (0, a.jsx)("div", {
                className: tI.xG,
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
function tC(e) {
    let { invite: t } = e,
        n = null != t.guild ? (0, em.DY)(t.guild) : null;
    if (null == n) return null;
    let i = n.description ?? "";
    return (0, a.jsxs)("div", {
        className: tI.kQ,
        children: [
            (0, a.jsx)(eR.D, { className: tI.s7, variant: "text-sm/medium", children: Q.intl.string(Q.t.Eabu1z) }),
            (0, a.jsxs)("div", {
                className: tI.bo,
                children: [
                    (0, a.jsx)(tj.Ay, { guild: n, active: !0, size: tj.Ay.Sizes.MEDIUM }),
                    (0, a.jsxs)("div", {
                        className: tI.bW,
                        children: [
                            (0, a.jsxs)(w.E, {
                                className: tI.J5,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, a.jsx)(tn.A, { guild: n, className: tI.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, a.jsx)(tx, { invite: t, textClassName: tI.kS, className: tI.pe }),
                        ],
                    }),
                ],
            }),
            i.length > 0 &&
                (0, a.jsx)("details", {
                    className: tI.x_,
                    children: (0, a.jsx)(w.E, { color: "text-default", variant: "text-sm/normal", children: i }),
                }),
        ],
    });
}
function tS(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: l } = e,
        { guild_scheduled_event: s } = t;
    return null != s
        ? (0, a.jsx)(tv, { guildScheduledEvent: s, channel: n, isSubmitting: i, onAcceptInvite: l })
        : null;
}
var tb = n(467661);
function tR(e) {
    let { invite: t, onAcceptInvite: n, disableUser: i = !1 } = e;
    if (null == t) return null;
    let l = null != t.guild ? (0, em.DY)(t.guild) : null,
        s = null != t.channel ? (0, tE.OY)(t.channel) : null,
        r = null != t.target_application ? new tp.Ay(t.target_application) : null,
        o = i || null == t.inviter ? null : new t_.A(t.inviter),
        c =
            !(
                (null != t.approximate_member_count && t.approximate_member_count > 100) ||
                (null != l && l.features.has(R.GuildFeatures.COMMUNITY))
            ) &&
            null != o &&
            tc(t),
        d = ((e) => {
            let { state: t } = e;
            switch (t) {
                case R.elq.ACCEPTING:
                case R.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        u = { invite: t, user: o, guild: l, channel: s, application: r };
    return tm(t)
        ? (0, a.jsx)(tS, { invite: t, channel: s, isSubmitting: d, onAcceptInvite: n })
        : (0, a.jsxs)("div", {
              className: tb.kL,
              children: [
                  (0, a.jsx)(tg, { application: r, guild: l, user: c || td(t) ? o : null }),
                  td(t) ? null : (0, a.jsx)(tf, { ...u, showBigUserIcon: c }),
                  (0, a.jsx)(tA, { ...u, showBigUserIcon: c }),
                  (0, a.jsx)(tx, { ...u }),
                  (0, a.jsx)("div", {
                      className: tb.xG,
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
var ty = n(473644),
    tL = n(57930),
    tO = n(115703),
    tk = n(438842),
    tP = n(888849);
function tG(e) {
    let { invite: t, guild: n, profile: i, onAcceptInvite: l } = e,
        { gamesToDisplay: s, lastGameToDisplay: r, remainingGames: o } = (0, tO.A)(i),
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
        d = i.description ?? n.description;
    return (0, a.jsxs)("div", {
        className: tP.f_,
        children: [
            (0, a.jsxs)("div", {
                className: tP.qQ,
                children: [
                    (0, a.jsx)("div", {
                        className: tP.WT,
                        children: (0, a.jsx)("div", { className: tP.g_, "aria-hidden": !0 }),
                    }),
                    (0, a.jsxs)("div", {
                        className: tP.TS,
                        children: [
                            (0, a.jsx)(tL.A, { guild: n, outline: !0 }),
                            (0, a.jsxs)(eb.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, a.jsx)(ty.A, {
                                        guild: n,
                                        invite: t,
                                        showGuildTag: !0,
                                        highContrast: !0,
                                        hideEnglish: !0,
                                    }),
                                    null != d &&
                                        "" !== d &&
                                        (0, a.jsx)(w.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: d,
                                        }),
                                    (0, a.jsx)(tk.A, {
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
                className: tP.Fx,
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
let tD = (0, n(945810).mj)({
        name: "2026-03-mobile-web-invite-server-profile",
        kind: "installation",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    tV = n(843020);
function tU(e) {
    if (null == e || !eY.i.VISIBLE.has(e.visibility)) return !1;
    let t = null != e.description && e.description.length > 0,
        n = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
    return t || n;
}
function tw() {
    return (0, a.jsx)("div", { className: tP.$k, children: (0, a.jsx)(ey.y, {}) });
}
function tM(e) {
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
            (0, e5.xb)(n);
    }
}
function tB(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === R.elq.BANNED
        ? (0, a.jsx)(e1, { text: Q.intl.string(Q.t["5AkWAd"]), buttonCta: Q.intl.string(Q.t["8osdkn"]), onClick: n })
        : (0, a.jsx)(e1, { text: Q.intl.string(Q.t["usP+Mb"]), buttonCta: Q.intl.string(Q.t["8osdkn"]), onClick: n });
}
function tF(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: i, sectionClassName: l, inviteCardClassName: s = tP.qF } = e,
        { ref: r, height: o } = (0, e3.Ay)(),
        c = (0, eX.z)({ height: null != o && 0 !== o ? `${o}px` : `${i}px`, config: eq.config.stiff });
    return (0, a.jsxs)(eq.animated.div, {
        className: s,
        style: c,
        children: [
            (0, a.jsx)(eq.animated.div, {
                className: tP.NS,
                style: c,
                children: (0, a.jsx)("section", { ref: r, className: l, children: t }),
            }),
            n,
        ],
    });
}
function tW(e) {
    let { invite: t } = e;
    if (null == t || !tm(t)) return null;
    let n = tM(t);
    return (0, a.jsx)(tF, {
        startAnimHeightPx: 0,
        sectionClassName: tP.ui,
        children: 1 === n ? (0, a.jsx)(tC, { invite: t }) : null,
    });
}
let tz = { 1: tP._r, 2: tP.Gm, 0: tP.Kt };
function tQ(e) {
    let t,
        { invite: n } = e,
        i = tM(n),
        { enabled: l } = tD.useConfig({ location: "AcceptInviteMobile" }),
        s = null != n ? (0, e8.oO)(n) : null,
        r = n?.guild != null ? (0, em.DY)(n.guild) : null,
        c = null != r && tU(s) && null != n && !tm(n),
        d = l && c;
    o.useEffect(() => {
        c && tD.getConfig({ location: "AcceptInviteMobile.hasProfile" });
    }, [c]);
    let u = o.useRef(!1);
    if (
        (o.useEffect(() => {
            u.current ||
                (null != n &&
                    1 === i &&
                    ((u.current = !0),
                    S.default.track(R.HAw.INVITE_ACCEPT_BUTTON_RENDERED, {
                        invite_code: n.code,
                        guild_id: n.guild?.id,
                        duration_ms_since_page_load: Math.round(performance.now()),
                    })));
        }, [n, i]),
        null == n)
    )
        t = (0, a.jsx)(tw, {});
    else
        switch (i) {
            case 1:
                t = d
                    ? (0, a.jsx)(tG, { invite: n, guild: r, profile: s, onAcceptInvite: e.onAcceptInvite })
                    : (0, a.jsx)(tR, { ...e, invite: n });
                break;
            case 2:
                t = (0, a.jsx)(tB, { ...e, invite: n });
                break;
            default:
                t = (0, a.jsx)(tw, {});
        }
    let m = 1 === i && d ? tP.c4 : tP.qF;
    return (0, a.jsx)(tF, { startAnimHeightPx: 200, sectionClassName: tz[i], inviteCardClassName: m, children: t });
}
function tH(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = t ?? {},
        l = {},
        { enabled: s } = tD.useConfig({ location: "AcceptInviteMobile" }),
        r = null != t ? (0, e8.oO)(t) : null,
        o = null != i && tU(r) && null != t && !tm(t);
    if (i?.splash != null) {
        let e = e4.Ay.getGuildSplashURL({ id: i.id, splash: i.splash });
        null != e && ((l.backgroundImage = `url(${e})`), (l.backgroundSize = "cover"));
    } else s && o && ((l.backgroundImage = `url(${tV})`), (l.backgroundSize = "cover"));
    return (0, a.jsxs)(k.Ay, {
        theme: R.NJ8.DARK,
        className: tP.G3,
        style: l,
        contentClassName: tP.__,
        children: [(0, a.jsx)(tQ, { ...e, onAcceptInvite: n }), (0, a.jsx)(tW, { ...e })],
    });
}
var tK = n(723702);
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
var tY = n(611346),
    tX = n(604880);
function t$(e) {
    let { token: t, hasError: n, errorReason: i } = e;
    return n
        ? (0, a.jsxs)("div", {
              className: tY.MY,
              children: [
                  (0, a.jsx)("div", { className: tY.r$, children: (0, a.jsx)("img", { src: tX, alt: "" }) }),
                  (0, a.jsxs)("div", {
                      className: tY.Qs,
                      children: [
                          (0, a.jsx)(tq, { alt: "" }),
                          (0, a.jsx)(eR.D, {
                              variant: "heading-lg/semibold",
                              className: tY.ky,
                              children: Q.intl.string(Q.t.RtCSr1),
                          }),
                          (0, a.jsx)(w.E, {
                              variant: "text-md/normal",
                              className: tY.G3,
                              children: Q.intl.string(Q.t["S+YjYJ"]),
                          }),
                          (0, a.jsx)(M.$, {
                              variant: "primary",
                              text: Q.intl.string(Q.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  S.default.track(R.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: i }),
                                      (0, P.pX)(R.BVt.LOGIN);
                              },
                          }),
                      ],
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: tY.MY,
              children: [
                  (0, a.jsx)("div", { className: tY.r$, children: (0, a.jsx)("img", { src: tX, alt: "" }) }),
                  (0, a.jsxs)("div", {
                      className: tY.Qs,
                      children: [
                          (0, a.jsx)(tq, { alt: "" }),
                          (0, a.jsx)(eR.D, {
                              variant: "heading-lg/semibold",
                              className: tY.ky,
                              children: Q.intl.string(Q.t["9h/0Rl"]),
                          }),
                          (0, a.jsx)(w.E, {
                              variant: "text-md/normal",
                              className: tY.G3,
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
                                          let t = eQ.default.getFingerprint(),
                                              n = (0, eW.I_)(),
                                              i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/login/one-time?token=${e}`;
                                          return (0, eW.Ay)(i, {
                                              utmSource: "one-time-login",
                                              fingerprint: t,
                                              attemptId: n,
                                          });
                                      }
                                      return "discord://";
                                  })(t)),
                                      (n = (0, eW.X7)(e)),
                                      S.default.track(R.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                                          detection_type: "mobile_button_clicked",
                                          device_type: u.Fr ? "mobile" : "tablet",
                                          platform: S.default.getSuperProperties()?.os,
                                      }),
                                      null != n &&
                                          S.default.track(R.HAw.DEEP_LINK_CLICKED, {
                                              fingerprint: (0, ez.v)(n.fingerprint),
                                              attempt_id: n.attemptId,
                                              source: n.utmSource,
                                          }),
                                      eH.A.launch(e, (e) => {
                                          e || (0, P.bG)({ pathname: R.BVt.LOGIN });
                                      });
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var tJ = n(613057);
let tZ = (e) => {
    let { title: t, subtitle: n, buttonText: i, buttonOnClick: l } = e;
    return (0, a.jsx)(k.Ay, {
        children: (0, a.jsxs)(eb.B, {
            gap: 24,
            children: [
                (0, a.jsxs)(eb.B, {
                    gap: 8,
                    children: [(0, a.jsx)(k.hE, { children: t }), (0, a.jsx)(k.tK, { children: n })],
                }),
                (0, a.jsx)(M.$, { onClick: l, text: i, fullWidth: !0 }),
            ],
        }),
    });
};
var t0 = n(463347),
    t1 = n(189213),
    t2 = n(192308),
    t3 = n(347704),
    t8 = n(803306),
    t7 = n(17372),
    t6 = n(369053),
    t4 = n(975571),
    t5 = n(928658);
async function t9(e, t) {
    try {
        await (0, t6.TP)(e, t);
    } catch (e) {
        if (null != e && "object" == typeof e && 429 === e.status)
            throw { status: 429, body: { message: Q.intl.string(Q.t.Z2hIUf) } };
        throw e;
    }
}
function ne(e, t) {
    let i = !1,
        l = () => {
            i || t?.();
        },
        s = (s) => {
            (i = !0),
                setTimeout(() => {
                    i = !1;
                }, 0);
            let r = () => t9(e, s),
                o = async (t) => await (0, t6.G_)(e, s, t),
                c = (n) => {
                    (i = !0),
                        setTimeout(() => {
                            i = !1;
                        }, 0);
                    let l = n?.token;
                    e === t7.tY.MESSAGE
                        ? (0, t5.bM)(l, t)
                        : e === t7.tY.USER
                          ? (0, t5.nQ)(l, t)
                          : e === t7.tY.GUILD
                            ? (0, t5.V3)(l, t)
                            : e === t7.tY.MEDIA_TAKEDOWN && (0, t5._Y)(l, t);
                };
            (0, t2.openModalLazy)(
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
        (0, t2.closeAllModals)();
        let t = (t) => t9(e, t);
        (0, t2.openModalLazy)(
            async () => {
                let { default: i } = await n.e("29232").then(n.bind(n, 180275));
                return (n) =>
                    (0, a.jsx)(i, {
                        ...n,
                        onFormSubmit: t,
                        onSuccess: s,
                        headerText: Q.intl.string(Q.t.ZLRYGU),
                        confirmButtonText: Q.intl.string(Q.t.PDTjLN),
                        subtitle: e === t7.tY.MEDIA_TAKEDOWN ? Q.intl.string(Q.t.jt3z8f) : void 0,
                    });
            },
            { onCloseCallback: l, dismissable: !1 },
        );
    };
}
var nt = n(939249),
    nn = n(921853),
    ni = n(750997);
let nl = { [t7.tY.MESSAGE]: Q.t.fuqnBC, [t7.tY.USER]: Q.t.F4jrRW, [t7.tY.GUILD]: Q.t.gH3aMs },
    ns = (e) => {
        let { title: t, menuType: n, onReopen: i } = e,
            l = o.useCallback(() => {
                ne(n, i)();
            }, [n, i]);
        return (0, a.jsxs)(nt.D, {
            className: ni.b0,
            onClick: l,
            children: [
                (0, a.jsx)(w.E, { variant: "text-md/medium", children: t }),
                (0, a.jsx)(nn.n, { size: "sm", style: { transform: "rotate(180deg)" } }),
            ],
        });
    },
    nr = (e) => {
        let { dsaCapabilities: t, onReopen: n } = e;
        return (0, a.jsx)(eb.B, {
            gap: 16,
            children: (0, a.jsx)("div", {
                className: ni.kL,
                children: t.map((e) =>
                    e === t7.tY.MEDIA_TAKEDOWN || null == nl[e]
                        ? null
                        : (0, a.jsx)(ns, { title: Q.intl.string(nl[e]), menuType: e, onReopen: n }, e),
                ),
            }),
        });
    };
var na = n(881636),
    no = n(913951);
let nc = () => {
    let { goToStep: e } = (0, t3.n)(),
        t = o.useCallback(() => {
            e(nh.DSA);
        }, [e]),
        n = o.useCallback(() => {
            e(nh.TIDA);
        }, [e]);
    return (0, a.jsxs)(eb.B, {
        gap: 8,
        children: [
            (0, a.jsx)(w.E, { variant: "text-md/normal", children: Q.intl.string(Q.t.bd1h5T) }),
            (0, a.jsxs)("div", {
                className: no.k,
                children: [
                    (0, a.jsxs)(nt.D, {
                        className: no.b,
                        onClick: t,
                        children: [
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(w.E, {
                                        variant: "text-md/medium",
                                        children: Q.intl.string(Q.t["AszWL/"]),
                                    }),
                                    (0, a.jsx)(w.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: Q.intl.string(Q.t["0Jikui"]),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(na.u, { size: "sm" }),
                        ],
                    }),
                    (0, a.jsxs)(nt.D, {
                        className: no.b,
                        onClick: n,
                        children: [
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(w.E, { variant: "text-md/medium", children: Q.intl.string(Q.t.jMSjZL) }),
                                    (0, a.jsx)(w.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: Q.intl.string(Q.t.qEaUPS),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(na.u, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var nd = n(229503);
let nu = () =>
    (0, a.jsxs)(eb.B, {
        gap: 24,
        children: [
            (0, a.jsx)(w.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: Q.intl.string(Q.t["3zG2Y9"]),
            }),
            (0, a.jsxs)(eb.B, {
                gap: 16,
                children: [
                    (0, a.jsxs)(eb.B, {
                        gap: 8,
                        children: [
                            (0, a.jsx)(w.E, { variant: "text-md/semibold", children: Q.intl.string(Q.t.CfBo0z) }),
                            (0, a.jsxs)("ul", {
                                className: nd.T,
                                children: [
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)(w.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: Q.intl.string(Q.t.ofQnNQ),
                                        }),
                                    }),
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)(w.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: Q.intl.string(Q.t.dFaQGn),
                                        }),
                                    }),
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)(w.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: Q.intl.string(Q.t.RVNwXh),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(w.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: Q.intl.string(Q.t.o5azXJ),
                    }),
                    (0, a.jsx)(w.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: Q.intl.format(Q.t.YETtaY, {
                            policyURL: "https://discord.com/safety/non-consensual-intimate-media-policy-explainer",
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)(eb.B, {
                gap: 8,
                children: [
                    (0, a.jsx)(w.E, { variant: "text-md/semibold", children: Q.intl.string(Q.t.FJh2zi) }),
                    (0, a.jsx)(w.E, {
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
var nm = n(725925);
h.Ay.initialize();
var nh = (((s = {}).SELECTION = "selection"), (s.DSA = "dsa"), (s.TIDA = "tida"), s);
let ng = (e) => {
        let { transitionState: t, onClose: n } = e,
            [i, l] = o.useState(!0),
            [s, r] = o.useState([]),
            [c, d] = o.useState(null),
            u = (0, h.bG)([eQ.default], () => eQ.default.isAuthenticated()),
            m = (0, h.bG)([eN.A], () => eN.A.hasLoadedExperiments),
            g = o.useCallback(() => {
                (0, t6.OY)()
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
                    m || (await x.A.getLocationMetadata(), x.A.getExperiments());
                })();
            }, [m]);
        let f = s.filter((e) => e !== t7.tY.MEDIA_TAKEDOWN),
            A = s.includes(t7.tY.MEDIA_TAKEDOWN),
            p = f.length > 0,
            E = p && A,
            _ = i || !m;
        o.useEffect(() => {
            _ || p || A || n();
        }, [_, p, A, n]);
        let j = o.useCallback(() => {
                (0, t2.openModalLazy)(() => Promise.resolve((e) => (0, a.jsx)(ng, { ...e })), { dismissable: !1 });
            }, []),
            N = o.useCallback((e, t) => {
                "selection" !== t && "selection" !== e ? d("selection") : d(e);
            }, []),
            T = o.useMemo(() => ne(t7.tY.MEDIA_TAKEDOWN, j), [j]),
            I = c ?? (E ? "selection" : p ? "dsa" : "tida");
        if (_ || (!p && !A))
            return (0, a.jsx)(t1.Modal, {
                title: "",
                actions: [],
                transitionState: t,
                onClose: n,
                dismissable: !1,
                children: (0, a.jsx)(eb.B, {
                    gap: 16,
                    align: "center",
                    justify: "center",
                    style: { minHeight: "200px" },
                    children: (0, a.jsx)(ey.y, {}),
                }),
            });
        if (!E) {
            if (p)
                return (0, a.jsx)(t1.Modal, {
                    title: Q.intl.string(Q.t.Z11w18),
                    subtitle: Q.intl.format(Q.t["532l+q"], {
                        supportURL: t4.A.getArticleURL(R.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, a.jsx)(nr, { dsaCapabilities: f, onReopen: j }),
                });
            if (A)
                return (0, a.jsx)(t1.Modal, {
                    title: Q.intl.string(Q.t.YignUm),
                    actions: [{ text: Q.intl.string(Q.t.D5Czbu), variant: "primary", onClick: T }],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, a.jsx)(nu, {}),
                });
        }
        let v = [
            { stepKey: "selection", modalProps: { title: Q.intl.string(Q.t.Z11w18) }, body: (0, a.jsx)(nc, {}) },
            {
                stepKey: "dsa",
                modalProps: {
                    title: Q.intl.string(Q.t.Z11w18),
                    subtitle: Q.intl.format(Q.t["532l+q"], {
                        supportURL: t4.A.getArticleURL(R.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, a.jsx)(nr, { dsaCapabilities: f, onReopen: j }),
            },
            {
                stepKey: "tida",
                modalProps: { title: Q.intl.string(Q.t.YignUm) },
                body: (0, a.jsx)(nu, {}),
                nextButtonProps: { text: Q.intl.string(Q.t.D5Czbu) },
                onNext: () => (T(), !1),
            },
        ];
        return (0, a.jsx)("div", {
            className: { selection: nm.a, dsa: nm.q, tida: void 0 }[I],
            children: (0, a.jsx)(t3.t, {
                steps: v,
                currentStepKey: I,
                onStepChange: N,
                onClose: n,
                transitionState: t,
                dismissable: !1,
            }),
        });
    },
    nx = () => (
        o.useEffect(() => {
            (0, t2.openModalLazy)(() => Promise.resolve((e) => (0, a.jsx)(ng, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
var nf = n(30793),
    nA = n(970928),
    np = n(612181),
    nE = n(179689);
let n_ = {
    dump(e) {
        let t;
        null != performance.memory &&
            (t = {
                jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                totalJSHeapSize: performance.memory.totalJSHeapSize,
                usedJSHeapSize: performance.memory.usedJSHeapSize,
            }),
            e({
                browser: { name: eB().name, version: eB().version },
                os: { name: eB().os.family, version: eB().os.version },
                memory: t,
            });
    },
    getTimeSinceNavigationStart: () => Date.now() - nE.fL,
};
var nj = n(111956),
    nN = n.n(nj),
    nT = n(615300),
    nI = n(319060),
    nv = n(844222),
    nC = n(240248),
    nS = n(115617);
let nb = (0, nC.xI)(nI.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    nR = { friction: 10, tension: 130 },
    ny = function (e) {
        return class extends o.Component {
            timeout;
            anim = new nT.A.Value(0);
            state = { shouldAnimate: !u.Fr };
            componentDidMount() {
                u.Fr || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize());
            }
            handleResize = () => {
                let e = window.innerWidth > nb;
                !this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({ shouldAnimate: e });
            };
            handleResizeDebounced = nN()(this.handleResize, 60);
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
                nT.A.spring(this.anim, { toValue: e, ...nR }).start(t);
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
                    className: nS.i,
                    children: (0, a.jsx)(nv.C.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, a.jsx)(nT.A.div, {
                                className: nS.l,
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, a.jsx)(e, { ...this.props }),
                            });
                        },
                    }),
                });
            }
        };
    };
var nL = n(603647),
    nO = n(970672),
    nk = n(129014),
    nP = n(642277);
let nG = function (e) {
    let { match: t, location: n, attemptDeepLink: i } = e,
        [l, s] = o.useState(0);
    o.useEffect(() => {
        nk.default.once("connected", () => {
            s(1);
        }),
            nk.default.once("disconnected", () => {
                (0, P.pX)((0, nP.W)());
            }),
            nk.default.connect();
    }, []),
        o.useEffect(() => {
            if (0 !== l) return;
            let e = setTimeout(() => (0, P.pX)((0, nP.W)()), 3e3);
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
                        className: U()(K.Ot, K.F1),
                        children: (0, a.jsx)(ed.Q, {
                            text: Q.intl.string(Q.t["2ixEBi"]),
                            textVariant: "text-sm/normal",
                            onClick: () => (0, P.pX)((0, nP.W)()),
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
var nD = n(431144);
h.Ay.initialize();
class nV extends o.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, eh.A)(this.props.location),
            t = (0, c.parse)(this.props.location.search);
        p.Bo.post({
            url: R.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, category: t.category, email_type: t.email_type },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { user: n },
                    } = e,
                    i = new t_.A(n);
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
            let e = nD.px.find((e) => e.category === i);
            if (null != e) return this.renderCategorySuccess(i, e.label());
        }
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: e9._3.DEPRECATED_SIZE_100,
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
let nU = h.Ay.connectStores([eu.A], () => ({ defaultRoute: eu.A.defaultRoute }))(nV);
var nw = n(110782),
    nM = n(10088),
    nB = n(871123),
    nF = n(189081),
    nW = n(67480),
    nz = n(45938),
    nQ = n(587895),
    nH = n(242874),
    nK = n(75825),
    nq = n(287809),
    nY = n(97352),
    nX = n(615396),
    n$ = n(788868),
    nJ = n(402693);
let nZ = h.Ay.connectStores([nW.A, nQ.A, nY.A, nq.default], (e) => {
    let { giftCode: t } = e,
        n = nW.A.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, nX.c9)(i) : null,
        application: nQ.A.getApplication(n.applicationId),
        gifter: nq.default.getUser(t.userId),
    };
})((e) => {
    let { error: t, giftCode: n, gifter: i, sku: l, application: s, subscriptionPlan: r } = e,
        c = null == i ? Q.intl.string(Q.t.lTGZAl) : Q.intl.formatToPlainString(Q.t.TjWdPc, { username: i.username }),
        d = l.name;
    return (
        null != r &&
            (d = Q.intl.formatToPlainString(r.interval === n$.WT.MONTH ? Q.t.CTpcCZ : Q.t["rgPWG/"], {
                skuName: l.name,
                intervalCount: r.intervalCount,
            })),
        (0, a.jsxs)(o.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, a.jsx)(nK.A, { defaultAnimationState: nH.oA.LOOP, giftStyle: n.giftStyle, className: nJ.e })
                    : (0, a.jsx)(k.eu, {
                          src: null != i ? i.getAvatarURL(void 0, 100) : null,
                          size: e9._3.DEPRECATED_SIZE_100,
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
                                  className: U()(K.Ot, ej.tR),
                                  children: [
                                      l.productLine !== R.EZt.COLLECTIBLES &&
                                          (0, a.jsx)(tt.A, {
                                              size: tt.M.MEDIUM,
                                              className: nJ.I,
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
var n0 = n(935399),
    n1 = n(475743),
    n2 = n(707554),
    n3 = n(379154);
function n8(e) {
    let { loginStatus: t, authBoxClassName: n, onSubmit: i, onCancelAccountDeletion: l } = e,
        s = t === R.aUe.ACCOUNT_DISABLED,
        r = s ? Q.intl.string(Q.t["j3rC+U"]) : Q.intl.string(Q.t.ZFWofo),
        o = s ? Q.intl.string(Q.t["6eNTWe"]) : Q.intl.string(Q.t["pCBti+"]);
    return (0, a.jsx)(k.Ay, {
        tag: "form",
        onSubmit: i,
        className: n,
        children: (0, a.jsxs)(n2.F, {
            component: (0, a.jsx)(k.hE, { className: K.QB, children: r }),
            children: [
                (0, a.jsx)(k.tK, { className: K.SX, children: o }),
                (0, a.jsxs)(k.eB, {
                    children: [
                        (0, a.jsx)(M.$, { text: Q.intl.string(Q.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, a.jsx)("div", {
                            className: U()(K.Ot, n3.Qt),
                            children: Q.intl.format(Q.t.js2rr5, { onClick: l }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var n7 = n(504394),
    n6 = n(275538),
    n4 = n(431870);
function n5(e) {
    let { children: t, className: n, ...i } = e,
        l = t();
    return (0, a.jsx)(k.Ay, {
        ...i,
        className: U()(n, n4.kL),
        contentClassName: n4.Qs,
        children: l.map((e, t) =>
            (0, a.jsx)("div", { className: n4.fi, style: { flexBasis: `${100 / l.length}%` }, children: e }, t),
        ),
    });
}
var n9 = n(895600),
    ie = n(506774),
    it = n(927813),
    ii = n(104798),
    il = n(1959);
let is = "mweb_handoff_nonce",
    ir = "mweb_handoff_nonce_expiration",
    ia = +it.A.Millis.MINUTE,
    io = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    ic = new Set(["deep_link_failed"]),
    id = () => {
        ie.w.remove(is), ie.w.remove(ir);
    },
    iu = () => {
        let e = (0, h.bG)([eQ.default], () => eQ.default.getFingerprint()),
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
                            R.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                            { reason: e, fingerprint: (0, ez.v)(l) },
                            { fingerprint: l },
                        );
                },
                [r, l],
            ),
            u = ie.w.get(is);
        if (
            ("null" === n && null === s && d("deep_link_failed"),
            null != n && "null" !== n && null == u && null === s && d("nonce_missing"),
            o.useEffect(() => {
                if (null != u) {
                    let e = ie.w.get(ir);
                    (null == e || Date.now() >= e) && (d("nonce_expired"), id());
                }
            }, [u, d]),
            o.useEffect(() => {
                null != n &&
                    "null" !== n &&
                    null != u &&
                    null == s &&
                    p.Bo.post({ url: R.Rsh.HANDOFF_EXCHANGE, body: { key: u, handoff_token: n }, rejectWithError: !0 })
                        .then((e) => x.A.loginToken(e.body.token, !1))
                        .then(() => {
                            S.default.track(R.HAw.LOGIN_SUCCESSFUL, {
                                source: R.mdB.MOBILE_WEB_HANDOFF,
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
                            d("handoff_exchange");
                        })
                        .finally(() => {
                            id();
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
                : ic.has(s)
                  ? Q.intl.string(Q.t.EPt55r)
                  : io.has(s)
                    ? Q.intl.string(Q.t.g87kTp)
                    : void 0;
        return null != s && ic.has(s)
            ? (0, a.jsx)("div", {
                  className: il.Un,
                  children: (0, a.jsx)(w.E, {
                      color: "interactive-text-default",
                      variant: "text-sm/semibold",
                      children: m,
                  }),
              })
            : (0, a.jsxs)("div", {
                  className: il.kL,
                  children: [
                      (0, a.jsx)(w.E, { variant: "text-sm/semibold", children: m }),
                      (0, a.jsx)(M.$, {
                          variant: "overlay-primary",
                          text: Q.intl.string(Q.t.NcC759),
                          onClick: () => {
                              let e = ii.A.generateNonce();
                              ie.w.set(is, e), ie.w.set(ir, Date.now() + ia);
                              let t = new URL(R.J$u),
                                  n = new URLSearchParams(window.location.search);
                              n.delete("fingerprint"), n.delete("handoff_token");
                              let i = new URLSearchParams();
                              i.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                                  i.set("key", e),
                                  i.set("fingerprint", l),
                                  (t.search = i.toString()),
                                  S.default.track(
                                      R.HAw.DEEP_LINK_CLICKED,
                                      { fingerprint: (0, ez.v)(l), source: "mobile_web_handoff", destination: R.J$u },
                                      { fingerprint: l, flush: !0 },
                                  ),
                                  (window.location.href = t.toString());
                          },
                      }),
                  ],
              });
    };
var im = n(274303),
    ih = n(139286),
    ig = n(970573),
    ix = n(364488);
function iA(e) {
    let { onDismiss: t } = e;
    return (
        (0, ih.A)({ type: d.ImpressionTypes.MODAL, name: d.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, a.jsxs)(k.Ay, {
            className: ix.ci,
            children: [
                (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.bVbB63) }),
                (0, a.jsx)(w.E, {
                    className: ix.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: Q.intl.string(Q.t["0M5fN7"]),
                }),
                (0, a.jsx)(ig.A, {
                    actionText: Q.intl.string(Q.t["DSN+hw"]),
                    onAction: (e) => {
                        e === ig.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, a.jsx)("div", {
                    className: ix.o1,
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
function ip(e) {
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
            (0, a.jsx)(n7.M, {}),
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
var iE = n(401755);
function i_(e, t) {
    if (null == t[e]) return null;
    {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n;
    }
}
function ij(e) {
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
        v = (0, h.bG)([eQ.default], () => eQ.default.getLoginStatus()),
        C = (0, h.bG)([im.A], () => im.A.getHasLoggedInAccounts()),
        b = o.useCallback(
            (e) => {
                S.default.track(R.HAw.LOGIN_SUCCESSFUL, {
                    source: R.mdB.QR_CODE,
                    login_source: x,
                    gift_code_sku_id: l?.skuId ?? null,
                    is_new_user: !1,
                    login_method: "remote_auth",
                    login_instance_id: e ?? null,
                });
            },
            [x, l],
        ),
        { handoff_token: y } = (0, c.parse)(window.location.search),
        L = u.Fr && u.KY && null != y,
        O = null == g.email && null != g.password,
        P = o.useRef(null),
        G = o.useRef(null),
        D = (0, n1.A)(g);
    o.useEffect(() => {
        let e = (e) => null != g[e];
        null != D && D !== g && (e("password") ? G.current?.focus() : (e("email") || e("login")) && P.current?.focus());
    }, [g, P, G, D]),
        (t =
            null != n
                ? (0, a.jsx)("div", { className: K.S3, children: (0, a.jsx)(n7.A, { invite: n }) })
                : null != l
                  ? (0, a.jsx)(nZ, { giftCode: l })
                  : (0, a.jsxs)("div", {
                        className: n3.wx,
                        children: [
                            (0, a.jsx)(k.hE, { className: K.QB, children: Q.intl.string(Q.t["7fNJgA"]) }, "title"),
                            !1 === (0, tK.isAndroidWeb)()
                                ? (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.euS7r4) }, "subtitle")
                                : null,
                        ],
                    }));
    let V = (0, a.jsxs)("div", {
        className: n3.Eh,
        children: [
            C &&
                f &&
                (0, a.jsx)("div", {
                    className: n3.AX,
                    children: (0, a.jsx)(M.$, {
                        onClick: () => A(!1),
                        variant: "secondary",
                        text: Q.intl.string(Q.t["1MrpWO"]),
                        icon: nn.n,
                    }),
                }),
            t,
            (0, a.jsx)(n2.F, {
                children: (0, a.jsxs)(k.eB, {
                    className: K.QX,
                    children: [
                        (0, a.jsx)(e_.A, {
                            alpha2: I.alpha2,
                            countryCode: I.code.split(" ")[0],
                            className: K.SX,
                            label: Q.intl.string(Q.t.tUjnxr),
                            error: i_("login", g) ?? i_("email", g),
                            onChange: E,
                            setRef: P,
                            autoCapitalize: "none",
                            autoComplete: "username webauthn",
                            autoCorrect: "off",
                            spellCheck: "false",
                            value: d,
                            autoFocus: !O && !L && !r,
                            required: !0,
                        }),
                        (0, a.jsx)(k.pd, {
                            label: Q.intl.string(Q.t["CIGa+7"]),
                            error: i_("password", g),
                            onChange: _,
                            name: "password",
                            type: "password",
                            setRef: G,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            autoFocus: O && !L && !r,
                            value: m,
                            required: !0,
                        }),
                        (0, a.jsx)("div", {
                            className: U()(K.SX, K.a5),
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
                                loading: v === R.aUe.LOGGING_IN,
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: K.a5,
                            children: [
                                (0, a.jsx)("span", { className: n3.Qt, children: Q.intl.string(Q.t.tmE73r) }),
                                (0, a.jsx)("span", {
                                    className: n3.Z8,
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
    return null != n && n.state === R.elq.RESOLVING
        ? (0, a.jsx)(ip, {
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
          ? i.state === iE.QB.RESOLVING
              ? (0, a.jsx)(ip, {
                    authBoxClassName: s,
                    country: I,
                    login: d,
                    password: m,
                    onLoginChange: E,
                    onPasswordChange: _,
                    loginRef: P,
                    passwordRef: G,
                })
              : (0, a.jsx)(n5, {
                    onSubmit: j,
                    tag: "form",
                    className: U()(s, n3.Sy),
                    children: () => [
                        (0, a.jsx)(n9.A, { guildTemplate: i }, "template"),
                        (0, a.jsx)(o.Fragment, { children: V }, "form-wrapper"),
                    ],
                })
          : C && !f
            ? (0, a.jsx)(iA, { onDismiss: () => A(!0) })
            : (0, a.jsxs)("div", {
                  children: [
                      (0, a.jsx)(k.Ay, {
                          onSubmit: j,
                          tag: "form",
                          className: U()(s, { [n3.M0]: L }),
                          expanded: !0,
                          children: (0, a.jsxs)(eb.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 64,
                              children: [
                                  V,
                                  (0, a.jsx)(n6.A, {
                                      onAuthenticateSuccess: b,
                                      conditionalMediationAbortController: p,
                                  }),
                              ],
                          }),
                      }),
                      L && (0, a.jsx)(iu, {}),
                  ],
              });
}
var iN = n(572469);
function iT(e) {
    let { loginSource: t, giftCodeSKUId: n } = e,
        i = (0, h.cf)(
            [eQ.default],
            () => ({ ticket: eQ.default.getMFATicket(), methods: eQ.default.getMFAMethods() }),
            [],
        ),
        l = o.useCallback(
            (e) => {
                let { mfaType: i, data: l, ticket: s } = e;
                return (
                    F._.dispatch(R.jej.WAVE_EMPHASIZE),
                    x.A.loginMFAv2({ code: l, ticket: s, mfaType: i, source: t, giftCodeSKUId: n })
                );
            },
            [t, n],
        );
    return (0, a.jsx)(k.Ay, {
        style: { padding: 0 },
        children: (0, a.jsx)(iN.t, {
            mfaFinish: l,
            mfaChallenge: i,
            onEarlyClose: () => {
                g.h.dispatch({ type: "LOGIN_RESET" });
            },
            width: 480,
        }),
    });
}
var iI = n(511815),
    iv = n(139033),
    iC = n(15552),
    iS = n(952116),
    ib = n(491509),
    iR = n(913612),
    iy = n(933924);
let iL = (e) => n.g.location.assign(e);
function iO(e) {
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
    (0, iR.K)();
    let g = (0, h.bG)([eQ.default], () => eQ.default.isAuthenticated()),
        f = (0, h.bG)([C.A], () => C.A.isHandoffAvailable()),
        A = (0, h.bG)([eQ.default], () => eQ.default.getLoginStatus()),
        p = i?.skuId ?? null,
        _ = (0, h.bG)([nW.A], () => (null != p ? nW.A.get(p) : null)),
        {
            checkingHandoff: j,
            redirecting: N,
            login: T,
            password: I,
            phoneVerifyError: b,
            dismissedChooseAccount: y,
            setDismissedChooseAccount: L,
            errors: O,
            conditionalMediationAbortController: D,
            loginSource: V,
            loginOrSSO: U,
            handleLogin: M,
            handleIPAuthorize: B,
            handlePasswordReset: W,
            handleForgotPassword: z,
            handleResendCode: H,
            handleReset: q,
            handleCancelAccountDeletion: Y,
            handleGotoRegister: X,
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
                [y, L] = o.useState(!1),
                [O] = o.useState(() => new AbortController()),
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
                        } else if (null == t.service) r(R.BVt.APP);
                        else {
                            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + R.Rsh.SSO,
                                n = { ...t, token: eQ.default.getToken() };
                            window.location = `${e}?${(0, c.stringify)(n)}`;
                        }
                    },
                    [d, r],
                ),
                U = o.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e && null != t && (A(!0), n ? x.A.verifySSOToken("login").then(() => V(t)) : V(t));
                    },
                    [V],
                ),
                M = o.useCallback(() => {
                    O.abort("Login state reset"), P({}), x.A.loginReset();
                }, [O]),
                B = o.useCallback(
                    async function (e) {
                        let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e?.preventDefault(),
                            O.abort("Starting password login"),
                            F._.dispatch(R.jej.WAVE_EMPHASIZE),
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
                            P((0, iC.p)(e));
                        }
                    },
                    [O, _, p, N, I, G, D, t],
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
                            r(R.BVt.RESET, { search: (0, c.stringify)({ token: t, from_login: "true" }) });
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
                            F._.dispatch(R.jej.WAVE_EMPHASIZE);
                            let e = await x.A.forgotPassword(t);
                            if (!1 === e) return;
                            e === iI.D.ONE_TIME_LOGIN
                                ? (0, t2.openModal)((e) => {
                                      let t = [
                                          {
                                              variant: "primary",
                                              text: Q.intl.string(Q.t.BddRzS),
                                              onClick: e.onClose,
                                              fullWidth: !0,
                                          },
                                      ];
                                      return (0, a.jsx)(t1.Modal, {
                                          title: Q.intl.string(Q.t["6Ecyts"]),
                                          actions: t,
                                          ...e,
                                          children: (0, a.jsx)(w.E, {
                                              variant: "text-md/normal",
                                              children: Q.intl.string(Q.t.iAcrqV),
                                          }),
                                      });
                                  })
                                : (0, iv.A)({
                                      title: Q.intl.string(Q.t.f5Pi7A),
                                      subtitle: Q.intl.format(Q.t["6u5hQ9"], { email: t }),
                                  });
                        } catch (e) {
                            P((0, iC.p)(e));
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
                Y = o.useCallback(() => {
                    C(!0), B(void 0, { undelete: !0 });
                }, [B]),
                X = o.useCallback(() => {
                    let e,
                        l = null != u ? (0, c.parse)(u.search) : {};
                    "" !== _ && (l.email = _),
                        null != t
                            ? ((l.mode = "register"), (e = R.BVt.INVITE(t.code)))
                            : null != i
                              ? ((l.mode = "register"), (e = R.BVt.GIFT_CODE(i.code)))
                              : null != n
                                ? (e = R.BVt.GUILD_TEMPLATE(n.code))
                                : null != d
                                  ? ((e = R.BVt.REGISTER), (l.redirect_to = d))
                                  : (e = R.BVt.REGISTER),
                        M(),
                        r(e, { search: (0, c.stringify)(l) }),
                        F._.dispatch(R.jej.WAVE_EMPHASIZE);
                }, [_, t, i, n, d, u, M, r]);
            return {
                checkingHandoff: h,
                redirecting: f,
                login: _,
                password: N,
                phoneVerifyError: S,
                dismissedChooseAccount: y,
                setDismissedChooseAccount: L,
                errors: k,
                conditionalMediationAbortController: O,
                loginSource: G,
                loginOrSSO: U,
                handleLogin: B,
                handleIPAuthorize: W,
                handlePasswordReset: z,
                handleForgotPassword: H,
                handleResendCode: K,
                handleReset: q,
                handleCancelAccountDeletion: Y,
                handleGotoRegister: X,
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
            transitionTo: r ?? iL,
            redirectTo: s,
            location: l,
            loginSource: u,
        });
    (0, n0.Ay)(() => {
        f && !g ? (0, E.ST)() : g && U(g, l, !0),
            S.default.track(
                R.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: V,
                    authenticated: g,
                    ...(null != _ ? (0, ib.A)(_, !1, !1) : {}),
                    source: (0, P.PR)(),
                },
                { flush: !0 },
            ),
            g || (0, iy.a)({ abortController: D, loginSource: V, giftCodeSKUId: p }),
            x.A.getLocationMetadata(),
            (0, G.d)("login");
    });
    let ee = (0, n1.A)(g);
    if (
        (o.useEffect(() => {
            let e = j && (f || N);
            g && !1 === ee && !e && (D.abort("Transitioning to authenticated state"), U(g, l));
        }, [g, f, ee, N, j, D, U, l]),
        N || j)
    )
        return (0, a.jsx)(k.Ay, { children: (0, a.jsx)(ey.y, {}) });
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
        case R.aUe.LOGGING_IN_MFA_SMS:
        case R.aUe.MFA_SMS_STEP:
        case R.aUe.LOGGING_IN_MFA:
        case R.aUe.MFA_STEP:
            return (0, a.jsx)(iT, { loginSource: V, giftCodeSKUId: p });
        case R.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case R.aUe.ACCOUNT_DISABLED:
            return (0, a.jsx)(n8, { loginStatus: A, authBoxClassName: d, onSubmit: q, onCancelAccountDeletion: Y });
        case R.aUe.PHONE_IP_AUTHORIZATION:
            return (0, a.jsx)(k.Ay, {
                tag: "form",
                className: d,
                children: (0, a.jsx)(iS.A, {
                    title: Q.intl.string(Q.t.w55Oco),
                    subtitle: Q.intl.format(Q.t.CfRZBj, { onResendClick: H }),
                    error: b,
                    onSubmit: B,
                    onCancel: $,
                }),
            });
        case R.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, a.jsx)(k.Ay, {
                tag: "form",
                className: d,
                children: (0, a.jsx)(iS.A, {
                    title: Q.intl.string(Q.t["+xqy3d"]),
                    subtitle: Q.intl.format(Q.t.ef4uZ7, { onResendClick: H }),
                    error: b,
                    onSubmit: W,
                    onCancel: $,
                }),
            });
        case R.aUe.LOGGING_IN:
        case R.aUe.NONE:
        default:
            return (0, a.jsx)(ij, {
                invite: t,
                guildTemplate: n,
                giftCode: i,
                authBoxClassName: d,
                disableAutofocusOnDefaultForm: m,
                login: T,
                password: I,
                errors: O,
                loginSource: V,
                dismissedChooseAccount: y,
                setDismissedChooseAccount: L,
                conditionalMediationAbortController: D,
                onLoginChange: J,
                onPasswordChange: Z,
                handleLogin: M,
                handleForgotPassword: z,
                handleGotoRegister: X,
            });
    }
}
var ik = n(664294),
    iP = n(204925);
let iG = null,
    iD = "underage";
class iV extends h.Ay.Store {
    static displayName = "AgeGateStore";
    isUnderageAnonymous() {
        if (tK.isPlatformEmbedded && 1) {
            if (null != iG && iG + iP.bm > Date.now()) return !0;
        } else if (1) return null != ik.parse(document.cookie)[iD];
        return !1;
    }
}
let iU = new iV(g.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        (iG = Date.now()), (document.cookie = `${iD}=1;path=/`);
    },
    LOGIN_SUCCESS: function () {
        (iG = null), (document.cookie = `${iD}=1;path=/;max-age=0`);
    },
});
var iw = n(509434),
    iM = n(153801);
let iB = () =>
    (0, a.jsx)(k.Ay, {
        children: (0, a.jsxs)("div", {
            className: iM.hQ,
            children: [
                (0, a.jsx)(k.hE, { className: iM.DD, children: Q.intl.string(Q.t.nCB6Ga) }),
                (0, a.jsx)(k.tK, {
                    className: iM.VA,
                    children: Q.intl.format(Q.t.KQgoxG, { underageMessage: Q.intl.string(Q.t.WqEH4D) }),
                }),
                (0, a.jsx)(M.$, {
                    icon: iw.I,
                    text: Q.intl.string(Q.t.hvVgAZ),
                    onClick: () => window.open(t4.A.getArticleURL(R.MVz.AGE_GATE), "_blank"),
                    iconPosition: "end",
                }),
            ],
        }),
    });
var iF = n(990078),
    iW = n(913122),
    iz = n(201505);
n(417635), n(827343), n(792251), n(19575), n(945041);
var iQ = n(493527),
    iH = n(544395),
    iK = n(446837);
let iq = window.ResizeObserver ?? iK.t;
function iY(e) {
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
        c = (0, eX.z)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: { height: t ? r : 0, paddingBottom: t ? `${l}px` : "0px", marginTop: t ? `${i}px` : "0px" },
            config: { tension: 170, friction: 26 },
        }),
        d = (0, eX.z)({
            from: { opacity: 0 },
            to: { opacity: +!!t },
            config: { duration: 200, easing: t ? (e) => e ** 4 : (e) => e * (2 - e) },
        });
    return (0, a.jsx)(eq.animated.div, {
        style: { overflow: "hidden", height: c.height, paddingBottom: c.paddingBottom, marginTop: c.marginTop },
        children: (0, a.jsx)(eq.animated.div, { style: { opacity: d.opacity }, ref: s, children: n }),
    });
}
var iX = n(153488),
    i$ = n(934337),
    iJ = n(989349),
    iZ = n.n(iJ),
    i0 = n(955437),
    i1 = n(888548),
    i2 = n(569717);
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
        invite: c = null,
        giftCodeSKUId: u = null,
        promoEmailConsent: m = null,
        usedUsernameSuggestion: h = null,
    } = e;
    if ((g.h.dispatch({ type: "REGISTER" }), null != o)) {
        let e;
        (0, i2.A)(o, R.JJy.REGISTER),
            S.default.track(R.HAw.AGE_GATE_ACTION, { source: iP.w_.REGISTER, action: iP.AM.AGE_GATE_SUBMITTED }),
            (e = iZ()().diff(o, "years")) < 13 ||
                S.default.track(R.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                });
    }
    return W.A.post({
        url: R.Rsh.REGISTER,
        body: {
            fingerprint: eQ.default.getFingerprint(),
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
                S.default.track(R.HAw.AGE_GATE_ACTION, { source: iP.w_.REGISTER, action: iP.AM.AGE_GATE_SUCCESS });
        },
        (e) => {
            if (e instanceof i1.CaptchaCancelError) throw e;
            let t = new B.A(e);
            throw (
                (null != t.getFieldErrors("date_of_birth") && i0.Xv(iP.w_.REGISTER),
                S.default.track(R.HAw.REGISTER_SUBMIT_ERRORED, {
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
function i7() {
    let { required: e, checked: t } = (0, i$.mZ)();
    return e
        ? (0, a.jsx)("div", {
              className: K.Ot,
              children: (0, a.jsx)(i8.J, {
                  label: Q.intl.string(Q.t["0p3R0+"]),
                  checked: t,
                  onChange: i$.Bw,
                  labelType: "secondary",
              }),
          })
        : null;
}
let i6 = /\.$/,
    i4 = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(i6, ""))
                  .join(". ")
                  .trim()
            : e;
function i5(e) {
    let [t, n] = o.useState(() => null != e && !e),
        [i, l] = o.useState(e);
    return null == i && null != e ? (l(e), n(!e)) : i !== e && l(e), [t, n];
}
function i9() {
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
                    }, e * it.A.Millis.SECOND));
            }, []),
        ]
    );
}
var le = n(731286);
function lt(e) {
    let { consent: t, consentRequired: n, onConsentChange: i } = e;
    return n
        ? (0, a.jsx)("div", {
              className: le.IQ,
              children: (0, a.jsx)(i8.J, {
                  label: Q.intl.format(Q.t.qMDAP0, { termsURL: R.X7G.TERMS, privacyURL: R.X7G.PRIVACY }),
                  checked: t,
                  onChange: i,
                  labelType: "secondary",
              }),
          })
        : (0, a.jsx)(w.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: U()(K.Ot, le.E2),
              children: Q.intl.format(Q.t["KI+BSb"], { termsURL: R.X7G.TERMS, privacyURL: R.X7G.PRIVACY }),
          });
}
n(801541);
var ln = n(889137),
    li = n(546727),
    ll = n(5052);
function ls(e) {
    let t,
        { username: n, suggestion: i, globalName: l, isUsernameFocused: s, onClickSuggestion: r } = e,
        o = (0, ll.i)(n, !0, !0),
        c = n.length > 0;
    return (
        (t = c
            ? (0, ln.YW)(o)
                  .with({ type: li.q.ERROR, message: ln.P.select() }, (e) =>
                      (0, a.jsx)(w.E, { className: le.vU, variant: "text-sm/normal", children: e }),
                  )
                  .with({ type: li.q.AVAILABLE, message: ln.P.select() }, (e) =>
                      (0, a.jsx)(w.E, { className: le.vq, variant: "text-sm/normal", children: e }),
                  )
                  .otherwise(() =>
                      (0, a.jsx)(w.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: Q.intl.string(Q.t.z7c4bP),
                      }),
                  )
            : null != i && i.length > 0 && l.length > 0
              ? (0, a.jsx)(w.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: Q.intl.format(Q.t.nDGqqq, { suggestion: i, nameOnClick: r }),
                })
              : (0, a.jsx)(w.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: Q.intl.string(Q.t.z7c4bP),
                })),
        (0, a.jsx)(iY, { show: (c && o?.type === li.q.ERROR) || s, top: -12, bottom: 20, children: t })
    );
}
function lr(e) {
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
            b.length > 0 && !iH.A.wasRegistrationSuggestionFetched(b) && (await iQ.A.fetchSuggestionsRegistration(b));
        },
        A = (e) => {
            S.default.track(R.HAw.REGISTER_INPUT_FOCUS, { field: e });
        },
        p = (e) => {
            S.default.track(R.HAw.REGISTER_INPUT_BLUR, { field: e });
        },
        E = (0, h.bG)([iX.A], () => iX.A.getAuthenticationConsentRequired()),
        _ = (0, h.bG)([iH.A], () => iH.A.registrationUsernameSuggestion()),
        j = o.useRef(null),
        N = o.useRef(null),
        T = o.useRef(null),
        I = o.useRef(null),
        [v, C] = o.useState(t),
        [b, y] = o.useState(""),
        [L, O] = o.useState(""),
        [P, G] = o.useState(""),
        [D, V] = o.useState(null),
        [B, W] = i5(E),
        [z, H] = o.useState(!1),
        [q, Y] = i9(),
        [X, $] = o.useState({}),
        { message: J, email: Z, username: ee, global_name: et, password: en, date_of_birth: ei } = X,
        [el, es] = o.useState(null),
        [er, ea] = o.useState(null),
        [eo, ec] = o.useState(null),
        [eu, em] = o.useState(null),
        eh = null != E && B;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: i, globalNameRef: l, passwordRef: s } = e,
            r = (0, n1.A)(t);
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
    })({ apiErrors: X, emailRef: j, usernameRef: N, globalNameRef: T, passwordRef: I });
    let eg = o.useCallback(async () => {
            let e = null != i ? i.skuId : null,
                t = i$.mZ.getState(),
                r = (0, nC.uJ)(_) ? null : L === _;
            F._.dispatch(R.jej.WAVE_EMPHASIZE), H(!0), $({});
            try {
                await i3({
                    email: v,
                    username: L,
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
                if ((H(!1), !(t instanceof iW.LG))) return;
                let e = (0, iC.W)(t);
                $(e), s?.(e), "number" == typeof e.retry_after && Y(e.retry_after);
            }
        }, [i, l, n, v, s, d, _, L, b, P, D, B, Y]),
        ex = o.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == E)) return;
                let t = !1;
                0 === v.length && (es(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    0 === L.length && (ea(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    0 === P.length && (ec(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    null == D && (em(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    t || eg();
            },
            [v, L, P, D, E, eg],
        ),
        ef = null;
    return (
        "string" == typeof J && (ef = (0, a.jsx)(k.ME, { className: U()(K.QX, le.gJ), children: J })),
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
                        error: el ?? i4(Z),
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
                        onChange: y,
                        error: i4(et),
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
                    (0, a.jsx)(iY, {
                        show: u,
                        top: -12,
                        bottom: 20,
                        children: (0, a.jsx)(w.E, {
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
                                value: L,
                                onChange: (e) => {
                                    O(e.toLocaleLowerCase()), ea(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null);
                                },
                                error: er ?? i4(ee),
                                autoComplete: "off",
                                setRef: N,
                                required: !0,
                                onFocus: () => A("username"),
                                onBlur: () => p("username"),
                            }),
                            (0, a.jsx)(ls, {
                                username: L,
                                suggestion: _,
                                globalName: b,
                                isUsernameFocused: g,
                                onClickSuggestion: () => {
                                    N.current?.focus(), null != _ && _.length > 0 && O(_);
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
                        error: eo ?? i4(en),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: I,
                        required: !0,
                        onFocus: () => A("password"),
                        onBlur: () => p("password"),
                    }),
                    (0, a.jsx)(iz.A, {
                        label: Q.intl.string(Q.t.rhBeKe),
                        wrapperClassName: le.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            V(e), null != e && em(null);
                        },
                        error: eu ?? i4(ei),
                        value: D,
                        required: !0,
                        onFocus: A,
                        onBlur: p,
                    }),
                    (0, a.jsx)(i7, {}),
                    (0, a.jsx)(lt, { consent: B, consentRequired: E, onConsentChange: W }),
                    (0, a.jsx)(iF.m, {
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
var la = n(292666),
    lo = n(713654),
    lc = n(131165);
function ld(e) {
    let { channel: t } = e,
        n = (0, lo._U)(t.type);
    return (0, a.jsxs)("div", {
        className: lc.Nj,
        children: [
            null != n ? (0, a.jsx)(n, { color: "currentColor", size: "custom", width: 20, height: 20 }) : null,
            (0, a.jsx)(w.E, { className: lc.dN, color: "none", variant: "text-sm/semibold", children: t.name }),
        ],
    });
}
function lu(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, a.jsxs)("div", {
        className: lc.kL,
        children: [
            (0, a.jsx)(tN.Uq, { className: lc.II, guildId: n.guild_id, guildEvent: n, eventPreview: n }),
            (0, a.jsx)(tN.sC, { name: n.name, description: n.description, guildId: n.guild_id }),
            null != t && n.channel_id === t.id ? (0, a.jsx)(ld, { channel: t }) : null,
        ],
    });
}
var lm = n(573435),
    lh = n(831985);
let lg = (e) => {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let i = em.DY(t),
        { name: l, description: s } = i;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(eR.D, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: lh.CT,
                children: Q.intl.string(Q.t.Eabu1z),
            }),
            (0, a.jsxs)("div", {
                className: lh.EB,
                children: [
                    (0, a.jsx)(lm.Ay, {
                        mask: lm.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, a.jsx)(tj.Ay, { guild: i, size: tj.Ay.Sizes.MEDIUM, active: !0 }),
                    }),
                    (0, a.jsxs)("div", {
                        className: lh.OA,
                        children: [
                            (0, a.jsx)(eR.D, { variant: "heading-sm/semibold", children: l }),
                            (0, a.jsxs)("div", {
                                className: lh.aH,
                                children: [
                                    (0, a.jsx)("div", { className: lh.Om }),
                                    null != n && n > 0
                                        ? (0, a.jsx)(w.E, {
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
                (0, a.jsx)(w.E, { color: "text-default", className: lh.CT, variant: "text-sm/normal", children: s }),
        ],
    });
};
function lx(e) {
    let { authBoxClassName: t, name: n, onNameChange: i } = e;
    return (0, a.jsxs)(k.Ay, {
        className: t,
        children: [
            (0, a.jsx)(n7.M, {}),
            (0, a.jsxs)(k.eB, {
                className: le.y0,
                children: [
                    (0, a.jsx)(iF.m, {
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
                                S.default.track(R.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                S.default.track(R.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, a.jsx)(w.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: U()(K.QX, le.E2),
                        children: Q.intl.format(Q.t["KI+BSb"], { termsURL: R.X7G.TERMS, privacyURL: R.X7G.PRIVACY }),
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
function lf(e) {
    let { consentRequired: t, consent: n, registering: i } = e,
        l = o.useMemo(() => null != t && n, [t, n]);
    return (0, a.jsx)(iF.m, {
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
function lA(e) {
    let t,
        { invite: n, authBoxClassName: i, onApiErrors: l, onGotoLogin: s, onRegister: r } = e,
        c = (0, h.bG)([iX.A], () => iX.A.getAuthenticationConsentRequired()),
        d = n?.guild_scheduled_event != null,
        u = o.useRef(null);
    t =
        n?.guild_scheduled_event != null
            ? (0, a.jsx)(lu, { channel: n.channel, guildScheduledEvent: n.guild_scheduled_event })
            : (0, a.jsx)("div", { className: K.S3, children: (0, a.jsx)(n7.A, { invite: n, inUnclaimedFlow: !0 }) });
    let [m, g] = o.useState(""),
        [x, f] = o.useState(null),
        [A, p] = i5(c),
        [E, _] = o.useState(!1),
        [j, N] = o.useState({}),
        { username: T, global_name: I, date_of_birth: v } = j,
        [C, b] = i9();
    o.useEffect(() => {
        null == x && u.current?.focus();
    }, [x, u]);
    let [y, L] = o.useState(null),
        [O, P] = o.useState(null),
        G = o.useCallback(async () => {
            F._.dispatch(R.jej.WAVE_EMPHASIZE), _(!0), N({});
            try {
                await (function (e) {
                    let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
                    return i3({ ...i, invite: t, giftCodeSKUId: n });
                })({ consent: A, invite: n.code, globalName: m, birthday: x }),
                    r?.();
            } catch (t) {
                if ((_(!1), !(t instanceof iW.LG))) return;
                let e = (0, iC.W)(t);
                N(e), l?.(e), "number" == typeof e.retry_after && b(e.retry_after);
            }
        }, [n, m, x, A, l, r, b, N, _]),
        D = o.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === c)) return;
                let t = !1;
                0 === m.length && (L(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    null == x && (P(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    t || G();
            },
            [m, x, c, G, L, P],
        );
    return n.state === R.elq.RESOLVING
        ? (0, a.jsx)(lx, { authBoxClassName: i, name: m, onNameChange: g })
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(k.Ay, {
                      tag: "section",
                      className: i,
                      children: (0, a.jsxs)("form", {
                          onSubmit: D,
                          children: [
                              t,
                              d ? (0, a.jsx)("div", { className: le.yF }) : null,
                              (0, a.jsxs)(k.eB, {
                                  className: d ? void 0 : le.y0,
                                  children: [
                                      (0, a.jsx)(la.k, {
                                          helperText: Q.intl.string(Q.t["330TCc"]),
                                          label: Q.intl.string(Q.t["9AjdkD"]),
                                          error: y ?? i4(I ?? T),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: m,
                                          placeholder: Q.intl.string(Q.t["09Q8yp"]),
                                          onChange: g,
                                          onFocus: () => {
                                              S.default.track(R.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              S.default.track(R.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, a.jsx)(iz.A, {
                                          label: Q.intl.string(Q.t.rhBeKe),
                                          wrapperClassName: le.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              f(e), null != e && P(null);
                                          },
                                          error: O ?? i4(v),
                                          value: x,
                                      }),
                                      (0, a.jsx)(lt, { consent: A, consentRequired: c, onConsentChange: p }),
                                      (0, a.jsx)(lf, { consentRequired: c, consent: A, registering: E }),
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
                            children: (0, a.jsx)(lg, { guild: n.guild, onlineCount: n.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
var lp = n(942614);
n(100544);
var lE =
        (((r = {}).IDENTITY = "identity"),
        (r.DISPLAY_NAME = "display_name"),
        (r.ACCOUNT_INFORMATION = "account_information"),
        (r.FULL = "full"),
        (r.AGE_GATE = "age_gate"),
        (r.INVITE = "invite"),
        (r.SMS_VERIFY = "sms_verify"),
        r),
    l_ = n(771016);
function lj(e) {
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
        A = (0, h.bG)([iX.A], () => iX.A.getAuthenticationConsentRequired()),
        p = (0, h.bG)([eQ.default], () => eQ.default.isAuthenticated()),
        E = (0, h.bG)([iU], () => iU.isUnderageAnonymous()),
        _ = (0, h.bG)([im.A], () => im.A.getHasLoggedInAccounts()),
        j = null != e.location ? (0, c.parse)(e.location.search) : {},
        [N, T] = o.useState(j.email ?? ""),
        [I, v] = o.useState({}),
        C = (0, n1.A)(p),
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
        y = null != s && (null != s.guild || null != s.channel),
        L = null != s && null == s.guild && null == s.channel && null != s.inviter,
        O = o.useCallback(() => {
            p && (null != u ? f(u) : f(eu.A.defaultRoute));
        }, [p, u, f]);
    (0, n0.Ay)(() => {
        O(),
            S.default.track(
                R.HAw.REGISTER_VIEWED,
                {
                    location: null != s ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: b,
                    ...(null != i ? (0, ib.A)(i, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == A && x.A.getLocationMetadata(),
            (0, G.d)("register");
    }),
        o.useEffect(() => {
            p && !1 === C && ((0, lp.C)(l_.zY.ORGANIC_REGISTERED), O());
        }, [p, C, O]);
    let D = lE.FULL;
    E || null != I.date_of_birth ? (D = lE.AGE_GATE) : y && (D = lE.INVITE),
        (0, ih.A)(
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
                ? (t = R.BVt.INVITE_LOGIN(s.code))
                : null != n
                  ? (t = R.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != l
                    ? (t = R.BVt.GUILD_TEMPLATE_LOGIN(l.code))
                    : null != u
                      ? ((t = R.BVt.LOGIN), (i.redirect_to = u))
                      : ((t = R.BVt.LOGIN), "" !== N && (i = { email: N })),
                x.A.loginReset(),
                f(t, { search: (0, c.stringify)(i), source: "register" }),
                m?.(e),
                F._.dispatch(R.jej.WAVE_EMPHASIZE);
        },
        [N, s, n, l, u, r, m, f],
    );
    if (E || null != I.date_of_birth) return (0, a.jsx)(iB, {});
    if (null != s && y)
        return (0, a.jsx)(lA, { invite: s, authBoxClassName: t, onApiErrors: v, onGotoLogin: V, onRegister: g });
    let w = (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.wC4TlR) }, "title"),
        B = !1;
    null != l
        ? ((w = (0, a.jsx)(n9.A, { guildTemplate: l })), (B = !0))
        : null != n
          ? (w = (0, a.jsx)(nZ, { giftCode: n }))
          : null != s &&
            L &&
            s.state === R.elq.RESOLVED &&
            (w = (0, a.jsx)("div", { className: K.S3, children: (0, a.jsx)(n7.A, { invite: s, isRegister: !0 }) }));
    let W = (0, a.jsx)(lr, {
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
        ? (0, a.jsx)(n5, {
              tag: "section",
              className: U()(t, le.Sy),
              children: () => [
                  w,
                  (0, a.jsxs)(
                      "div",
                      {
                          className: le.Uu,
                          children: [(0, a.jsx)(k.hE, { className: le.lR, children: Q.intl.string(Q.t.wC4TlR) }), W],
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
                            className: le.AX,
                            children: (0, a.jsx)(M.$, {
                                onClick: V,
                                variant: "secondary",
                                text: Q.intl.string(Q.t["1MrpWO"]),
                                icon: nn.n,
                                iconPosition: "start",
                            }),
                        })
                      : null,
                  w,
                  W,
              ],
          });
}
h.Ay.initialize(), h.Ay.initialize();
class lN extends o.PureComponent {
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
        nw.Yq(), null == e && this.refreshUser();
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
        return l === R.t02.INVALID_GIFT_SELF_REDEMPTION
            ? Q.intl.string(Q.t.wa9h7F)
            : l === R.t02.INVALID_GIFT_REDEMPTION_OWNED && n?.productLine === R.EZt.COLLECTIBLES
              ? Q.intl.string(Q.t.mdLtb5)
              : null != t || l === R.t02.INVALID_GIFT_REDEMPTION_OWNED
                ? Q.intl.format(Q.t.PIdmg3, { libraryLink: R.BVt.APPLICATION_LIBRARY })
                : e.isClaimed || l === R.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? Q.intl.string(Q.t.ilcBeX)
                  : l === R.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? Q.intl.string(Q.t.ypuSd8)
                    : void 0;
    }
    handleLogout = () => {
        let e = this.props.match.params.giftCode;
        x.A.logout("gift_code", R.BVt.GIFT_CODE_LOGIN(e));
    };
    handleResendVerification = () => {
        x.A.verifyResend(), this.setState({ sentVerification: !0 });
    };
    handleAccept = async () => {
        let { transitionTo: e, giftCode: t } = this.props;
        if (null == t) throw Error("Trying to accept gift before resolve");
        let n = this.getCode();
        try {
            this.setState({ error: null }), await f.A.redeemGiftCode({ code: n }), e(R.BVt.APP);
        } catch (e) {
            this.setState({ error: e });
        }
    };
    resolveGiftCode = () => {
        let { transitionTo: e } = this.props,
            t = this.getCode();
        f.A.resolveGiftCode(t, !0, !0).then((n) => {
            null != n && null != n.giftCode.promotion && e(R.BVt.BILLING_PROMOTION_REDEMPTION(t));
        });
    };
    renderSpinner(e) {
        return (0, a.jsxs)(k.Ay, { children: [(0, a.jsx)(k.hE, { children: e }), (0, a.jsx)(k.CK, {})] });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: U()(K.Ot, K.QB), children: Q.intl.string(Q.t.KPowgn) }),
                (0, a.jsx)(k.tK, { children: Q.intl.string(Q.t.j8734b) }),
                (0, a.jsx)("div", {
                    className: U()(K.eT, K.QB),
                    children: (0, a.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, a.jsx)(ed.Q, {
                    text: Q.intl.string(Q.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(t4.A.getArticleURL(R.MVz.GIFTING), "_blank"),
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
        return (0, a.jsx)(lI, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: i,
            children: (0, a.jsxs)(k.Ay, {
                children: [
                    (0, a.jsx)(nZ, { giftCode: e }),
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
                                  userTag: ti.Ay.getUserTag(t),
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
        if (e === R.fAW.OPEN && !d) return this.renderAppOpened();
        if (e === R.fAW.OPENING) return this.renderSpinner(Q.intl.string(Q.t["Z+hCVU"]));
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
                ? (0, a.jsx)(iO, { giftCode: i, transitionTo: r, location: o })
                : (0, a.jsx)(lj, { giftCodeSKU: t, giftCode: i, transitionTo: r, location: o });
        }
        return null;
    }
}
let lT = h.Ay.connectStores([nf.A, nF.A, eQ.default, nW.A, eu.A, nM.A], (e) => {
        let t = e.match.params.giftCode,
            n = nf.A.get(t),
            i = null != n ? nW.A.get(n.skuId) : null;
        return {
            giftCode: n,
            sku: i,
            libraryApplication:
                null != i && n?.entitlementBranches != null ? nz.YI(n.entitlementBranches, i, nF.A) : null,
            authenticated: eQ.default.isAuthenticated(),
            defaultRoute: eu.A.defaultRoute,
            isResolved: nf.A.getIsResolved(t),
            isAccepting: nf.A.getIsAccepting(t),
            libraryApplicationsFetched: nF.A.fetched,
            nativeAppState: nM.A.getState(t),
        };
    })(lN),
    lI = (e) => {
        let { sku: t, children: n, giftCodeCode: i, transitionTo: l } = e,
            s = (0, nB.bF)(t);
        return (o.useEffect(() => {
            null != i && s && l(R.BVt.APP_WITH_GIFT_CODE(i));
        }, [s, i, l]),
        s)
            ? (0, a.jsxs)(k.Ay, {
                  children: [(0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.b3lf1c) }), (0, a.jsx)(k.CK, {})],
              })
            : n;
    };
var lv = n(871194),
    lC = n(799365),
    lS = n(894778),
    lb = n(315290),
    lR = n(396574),
    ly = n(94654);
h.Ay.initialize();
class lL extends o.PureComponent {
    componentDidMount() {
        (0, G.d)("guildTemplate"),
            lR.VP || eH.A.launch("discord://" + R.BVt.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && eI.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return lR.VP
            ? (0, a.jsx)("div", { className: K.eT, children: (0, a.jsx)(M.$, { text: e, fullWidth: !0, onClick: t }) })
            : (0, a.jsx)(k.KE, { className: K.eT });
    }
    renderSpinner(e) {
        return (0, a.jsxs)(k.Ay, { children: [(0, a.jsx)(k.hE, { children: e }), (0, a.jsx)(k.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, a.jsxs)(k.Ay, {
            children: [
                (0, a.jsx)(k.hE, { className: U()(K.Ot, K.QB), children: Q.intl.string(Q.t.C7ZRNw) }),
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
        return (ew()(null != e, "guild template must not be null"), e.state === iE.QB.RESOLVING)
            ? (0, a.jsx)(k.Ay, { className: ly.sL, children: (0, a.jsx)(lC.A, { guildTemplate: e }) })
            : (0, a.jsx)(lO, { guildTemplate: e });
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
        if (t === R.fAW.OPEN) return this.renderAppOpened();
        if (t === R.fAW.OPENING) return this.renderSpinner(Q.intl.string(Q.t["Z+hCVU"]));
        switch (e.state) {
            case iE.QB.RESOLVING:
                return this.renderSpinner(Q.intl.string(Q.t["Z+hCVU"]));
            case iE.QB.RESOLVED:
                if (n || !lR.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, a.jsx)(iO, { guildTemplate: e, transitionTo: i, location: l });
                return (0, a.jsx)(lj, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: l,
                    onRegister: () => {
                        (0, lp.C)(l_.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            lS.A.flowStart(lb.do.ORGANIC_GUILD_TEMPLATES, lb.ju.NUF_STARTED);
                    },
                });
            case iE.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function lO(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, lv.A)(t, !1);
    lS.A.flowStep(lb.do.ORGANIC_GUILD_TEMPLATES, lb.jC.GUILD_CREATE);
    let l = (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(k.hE, { className: ly.wx, children: Q.intl.string(Q.t.UNFvtM) }),
            n,
            (0, a.jsx)("div", {
                className: ly.Tf,
                children: (0, a.jsx)(M.$, { text: Q.intl.string(Q.t.xr59t7), fullWidth: !0, onClick: i }),
            }),
        ],
    });
    return (0, a.jsx)(n5, {
        className: ly.sL,
        children: () => [
            (0, a.jsx)(n9.A, { guildTemplate: t }, "template"),
            (0, a.jsx)("div", { className: ly.KJ, children: l }, "contents"),
        ],
    });
}
function lk(e, t, n) {
    e.preventDefault(),
        S.default.track(R.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        });
    let i = eQ.default.getFingerprint(),
        l = null != i ? i : eQ.default.getId();
    eI.A.openMobileApp(n.state === iE.QB.RESOLVED ? t : void 0, l);
}
function lP(e) {
    let { code: t } = e,
        n = (0, h.bG)([eT.A], () => eT.A.getGuildTemplate(t));
    return (o.useEffect(() => {
        (0, G.d)("guild_template_mobile");
    }, []),
    null == n || n.state === iE.QB.RESOLVING)
        ? (0, a.jsx)(k.Ay, { children: (0, a.jsx)(ey.y, {}) })
        : n.state === iE.QB.RESOLVED
          ? (0, a.jsxs)(k.Ay, {
                children: [
                    (0, a.jsx)(lC.A, { guildTemplate: n, tall: !0 }),
                    (0, a.jsx)("div", {
                        className: K.QX,
                        children: (0, a.jsx)(M.$, {
                            text: Q.intl.string(Q.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => lk(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, a.jsx)(e2, {
                text: Q.intl.string(Q.t["e/rZ2n"]),
                buttonCta: Q.intl.string(Q.t.HAvYn0),
                onClick: (e) => lk(e, t, n),
            });
}
h.Ay.initialize(), n(938796);
var lG = n(821418),
    lD = n(665260),
    lV = n(362474),
    lU = n(964486),
    lw = n(921037),
    lM = n(4274);
h.Ay.initialize();
let lB = "register",
    lF = "login";
function lW(e) {
    let { message: t, onClick: n, invite: i } = e,
        l = i?.guild_scheduled_event != null;
    return lR.VP
        ? (0, a.jsx)("div", {
              className: l ? K.QX : K.eT,
              children: (0, a.jsx)(M.$, { text: t, onClick: n, variant: l ? "active" : "primary", fullWidth: !0 }),
          })
        : (0, a.jsx)(k.KE, { className: K.eT });
}
function lz(e) {
    let { invite: t, handleAccept: n } = e,
        i =
            null != t.guild_scheduled_event
                ? (0, a.jsx)(lu, { channel: t.channel, guildScheduledEvent: t.guild_scheduled_event })
                : (0, a.jsx)("div", { className: K.S3, children: (0, a.jsx)(n7.A, { invite: t }) }),
        l =
            null != t.guild_scheduled_event && null != t.guild
                ? (0, a.jsx)(k.Ay, {
                      className: K.QX,
                      children: (0, a.jsx)(lg, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                  })
                : null;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)(k.Ay, {
                children: [i, (0, a.jsx)(lW, { message: Q.intl.string(Q.t.ohMvm1), onClick: n, invite: t })],
            }),
            l,
        ],
    });
}
function lQ(e) {
    let { invite: t, onContinue: n } = e;
    return (0, a.jsxs)(k.Ay, {
        children: [
            (0, a.jsx)(n7.A, { invite: t }),
            lR.VP
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("div", {
                              className: K.QX,
                              children: (0, a.jsx)(M.$, {
                                  text: Q.intl.string(Q.t.UQvCf7),
                                  onClick: () => {
                                      S.default.track(R.HAw.INVITE_CTA_CLICKED, {
                                          action: "open_app",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          A.Ay.openNativeAppModal(t.code);
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
                                      S.default.track(R.HAw.INVITE_CTA_CLICKED, {
                                          action: "continue_in_browser",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          n?.();
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
function lH(e) {
    let { title: t } = e;
    return (0, a.jsxs)(k.Ay, { children: [(0, a.jsx)(k.hE, { children: t }), (0, a.jsx)(k.CK, {})] });
}
function lK(e) {
    let { invite: t, error: n, handleAccept: i, handleDefaultTransition: l } = e;
    return (0, a.jsx)(k.Ay, {
        children: (0, a.jsxs)(eb.B, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, a.jsx)(n7.A, { invite: t, error: n?.message }),
                n?.code === R.t02.INVALID_CANNOT_FRIEND_SELF
                    ? (0, a.jsx)(lW, { invite: t, message: Q.intl.string(Q.t.fIv16B), onClick: l })
                    : (0, a.jsx)(lW, { invite: t, message: Q.intl.string(Q.t.ohMvm1), onClick: i }),
            ],
        }),
    });
}
function lq(e) {
    let { banned: t, handleDefaultTransition: n } = e;
    return (0, a.jsxs)(k.Ay, {
        children: [
            (0, a.jsx)(k.hE, { className: U()(K.Ot, K.QB), children: Q.intl.string(Q.t.kux01N) }),
            (0, a.jsx)(k.tK, { children: t ? Q.intl.string(Q.t["5AkWAd"]) : Q.intl.string(Q.t["+qUJAj"]) }),
            (0, a.jsx)(lW, { message: Q.intl.string(Q.t.fIv16B), onClick: n }),
            (0, a.jsx)("div", {
                className: K.Ot,
                style: { textAlign: "left" },
                children: (0, a.jsx)(ed.Q, {
                    size: "sm",
                    textVariant: "text-sm/medium",
                    text: Q.intl.string(Q.t.urIwn4),
                    onClick: () => window.open(t4.A.getArticleURL(R.MVz.INVALID_INVITES), "_blank"),
                }),
            }),
        ],
    });
}
function lY(e) {
    let { handleDefaultTransition: t } = e;
    return (0, a.jsxs)(k.Ay, {
        children: [
            (0, a.jsx)(k.hE, { children: Q.intl.string(Q.t.fOc4gn) }),
            (0, a.jsx)(lW, { message: Q.intl.string(Q.t.fIv16B), onClick: t }),
        ],
    });
}
var lX = n(334465);
let l$ = (0, n(600975).C)({
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
var lJ = n(163050);
h.Ay.initialize();
var lZ = n(701273);
function l0(e) {
    n.g.location.assign(e);
}
h.Ay.initialize(), n(426620), h.Ay.initialize();
let l1 = ny(iO),
    l2 = ny(function (e) {
        let t = o.useCallback(
                (t) => {
                    let n;
                    ((n = (0, lX.B)(t, { path: R.BVt.CHANNEL(t0.pv.guildId(), t0.pv.channelId()) })),
                    +(n?.params?.channelId !== N.VV.ROLE_SUBSCRIPTIONS))
                        ? (e.transitionTo ?? P.pX)(t)
                        : P.bG(t);
                },
                [e.transitionTo],
            ),
            { isAuthenticated: n, loginStatus: i } = (0, h.cf)([eQ.default], () => ({
                isAuthenticated: eQ.default.isAuthenticated(),
                loginStatus: eQ.default.getLoginStatus(),
            })),
            { location: l, redirectTo: s } = e,
            [r, d] = o.useState(n);
        function u(e) {
            let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
            (0, E.Qh)({ handoffKey: t, handoffToken: n, handoffSource: i }), d(!1);
        }
        return ((0, lU.Ay)(() => {
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
        r || i === R.aUe.LOGGING_IN)
            ? (0, a.jsx)(k.Ay, { children: (0, a.jsx)(ey.y, {}) })
            : (0, a.jsx)(iO, { ...e, transitionTo: t });
    }),
    l3 = ny(function (e) {
        let { inviteKey: t, location: n, transitionTo: i, login: l } = e,
            s = (0, h.bG)([e6.A], () => e6.A.getInvite(t)),
            r = (0, h.bG)([nM.A], () => nM.A.getState(t)),
            c = (0, h.bG)([eQ.default], () => eQ.default.isAuthenticated()),
            d = (0, h.bG)([eu.A], () => eu.A.defaultRoute),
            u = (0, h.bG)([iU], () => iU.isUnderageAnonymous()),
            [m, x] = o.useState(null),
            [f, p] = o.useState(!1);
        o.useLayoutEffect(() => {
            (r === R.fAW.OPEN || s?.state === R.elq.APP_OPENED) && p(!0);
        }, [s?.state, r]);
        let E = l ? lF : lB,
            _ = o.useCallback((e) => A.Ay.getInviteContext(e, s), [s]),
            j = o.useCallback(
                (e) => {
                    null != s &&
                        (null != s.channel || e?.channel != null) &&
                        (s.guild?.id != null
                            ? i(R.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(s.code))
                            : A.Ay.transitionToInvite(e ?? s, i));
                },
                [s, i],
            ),
            N = o.useCallback(() => {
                x(null),
                    A.Ay.acceptInvite({
                        inviteKey: t,
                        context: _(R.S3d.INVITE),
                        skipOnboarding: !0,
                        callback: (e) => {
                            ei(e), null != e.channel && A.Ay.openApp(t, e.channel.id);
                        },
                    }).catch((e) => {
                        if (e instanceof iW.Wl || e instanceof iW.LG) {
                            let t = (0, lM.s)(e.code);
                            x({ code: e.code, message: t });
                        } else x({ code: e.code, message: Q.intl.string(Q.t.dDZRdy) });
                    });
            }, [t, _]),
            T = o.useCallback(() => {
                i(d);
            }, [d, i]);
        if (
            ((0, lU.Ay)(() => {
                let e = eQ.default.getAnalyticsToken();
                if (
                    (null != e &&
                        g.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eQ.default.getId() }),
                    S.default.track(R.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }),
                    (0, G.d)("invite"),
                    lR.VP || eH.A.launch("discord://" + R.BVt.INVITE(t), () => void 0),
                    !l && u)
                ) {
                    let { baseCode: e } = (0, eK.y$)(t);
                    (0, P.bG)(R.BVt.INVITE_LOGIN(e));
                }
            }),
            o.useEffect(() => {
                s?.state === R.elq.APP_NOT_OPENED && j();
            }, [s?.state, j]),
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
                    d = (0, n1.A)(i),
                    u = (0, n1.A)(l);
                o.useEffect(() => {
                    if (s === lF && i && !1 === d) {
                        let e = eQ.default.getFingerprint();
                        if (null != e) {
                            let i = (0, ez.d)(e);
                            S.default.track(R.HAw.INVITE_LOGIN_SUCCESSFUL, {
                                invite_code: (0, eK.m0)(n),
                                guild_id: t?.guild?.id,
                                channel_id: t?.channel?.id,
                                inviter_id: t?.inviter?.id,
                                prev_user_id: i,
                            });
                        }
                        A.Ay.acceptInvite({ inviteKey: n, context: r(R.S3d.INVITE), skipOnboarding: !0, callback: a });
                    }
                }, [i, d, s, r, a, t, n]),
                    o.useEffect(() => {
                        if (null != t && s === lB && i && !1 === d) {
                            let { channel: e } = t;
                            if (null != e)
                                if (((0, lp.C)(l_.zY.INVITE_UNCLAIMED), null != t.guild)) {
                                    let e = (0, lD.Lt)(t.flags ?? 0, lG.Q.IS_APPLICATION_BYPASS),
                                        n =
                                            t.guild.features?.includes(
                                                R.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED,
                                            ) &&
                                            t.guild.features?.includes(
                                                R.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL,
                                            );
                                    !e && n
                                        ? c(R.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id))
                                        : c(R.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code));
                                } else A.Ay.transitionToInvite(t, c);
                        }
                    }, [t, i, d, c, s]),
                    o.useEffect(() => {
                        null != t &&
                            l !== u &&
                            l === R.fAW.OPEN &&
                            S.default.track(
                                R.HAw.INVITE_APP_INVOKED,
                                {
                                    invite_code: (0, eK.m0)(n),
                                    guild_id: t.guild?.id,
                                    channel_id: t.channel?.id,
                                    inviter_id: t.inviter?.id,
                                    user_is_member: null != t.guild && null != e7.A.getGuild(t.guild.id),
                                    size_total: t.approximate_member_count,
                                    invite_type: null != t.type ? tl.Xd[t.type] : void 0,
                                },
                                { flush: !0 },
                            );
                    }, [t, l, u, n]);
            })({
                invite: s,
                inviteKey: t,
                authenticated: c,
                nativeAppState: r,
                mode: E,
                getAcceptInviteContext: _,
                handleContinue: j,
                transitionTo: i,
            }),
            null == s)
        )
            return null;
        if (f || r === R.fAW.OPEN || s.state === R.elq.APP_OPENED) return (0, a.jsx)(lQ, { invite: s, onContinue: j });
        let { state: I } = s;
        if (I === R.elq.APP_NOT_OPENED) return (0, a.jsx)(lY, { handleDefaultTransition: T });
        if ([R.elq.RESOLVING, R.elq.ACCEPTING, R.elq.APP_OPENING].includes(I)) {
            let e =
                I === R.elq.ACCEPTING ? Q.intl.string(Q.t["6wsY16"]) : (R.elq.RESOLVING, Q.intl.string(Q.t["Z+hCVU"]));
            return (0, a.jsx)(lH, { title: e });
        }
        return I === R.elq.EXPIRED
            ? (0, a.jsx)(lq, { banned: !1, handleDefaultTransition: T })
            : I === R.elq.BANNED
              ? (0, a.jsx)(lq, { banned: !0, handleDefaultTransition: T })
              : I === R.elq.ERROR
                ? (0, a.jsx)(lK, { invite: s, error: m, handleAccept: N, handleDefaultTransition: T })
                : I === R.elq.RESOLVED
                  ? c && (0, lD.Lt)(s.flags ?? 0, lG.Q.IS_GUEST_INVITE)
                      ? (A.Ay.openApp(s.code),
                        lV.u.set(lw.B, s.code),
                        (0, a.jsx)(lQ, { invite: s, onContinue: () => i(R.BVt.APP) }))
                      : c || !lR.VP
                        ? (0, a.jsx)(lz, { invite: s, handleAccept: N })
                        : E === lF
                          ? (0, a.jsx)(iO, { invite: s, transitionTo: i, location: n })
                          : (0, a.jsx)(lj, {
                                invite: s,
                                onLoginStart: () => {
                                    S.default.track(R.HAw.INVITE_LOGIN, {
                                        invite_code: s?.code,
                                        guild_id: s?.guild?.id,
                                        channel_id: s?.channel?.id,
                                        inviter_id: s?.inviter?.id,
                                    });
                                },
                                location: n,
                                transitionTo: i,
                            })
                  : null;
    }),
    l8 = ny(function (e) {
        let t = {
            guildTemplate: (0, h.bG)([eT.A], () => eT.A.getGuildTemplate(e.code)),
            nativeAppState: (0, h.bG)([nM.A], () => nM.A.getState(e.code)),
            authenticated: (0, h.bG)([eQ.default], () => eQ.default.isAuthenticated()),
            defaultRoute: (0, h.bG)([eu.A], () => eu.A.defaultRoute),
        };
        return (0, a.jsx)(lL, { ...e, ...t });
    }),
    l7 = ny(lT),
    l6 = ny(function (e) {
        let { inviteKey: t, transitionTo: n } = e,
            i = (0, h.bG)([e6.A], () => e6.A.getInvite(t));
        return (
            o.useEffect(() => {
                let e = eQ.default.getAnalyticsToken();
                null != e &&
                    g.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eQ.default.getId() }),
                    (0, G.d)("invite_mobile"),
                    S.default.track(R.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 });
            }, []),
            (0, a.jsx)(tH, {
                invite: i,
                onAcceptInvite: (e) => {
                    let n, l, s, r;
                    e?.preventDefault(),
                        S.default.track(
                            R.HAw.INVITE_APP_OPENED,
                            {
                                invite_code: (0, eK.m0)(t),
                                guild_id: i?.guild?.id,
                                channel_id: i?.channel?.id,
                                inviter_id: i?.inviter?.id,
                                invite_type: null != i && i?.type != null ? tl.Xd[i?.type] : void 0,
                                user_is_member: null != i && null != i.guild && null != e7.A.getGuild(i.guild.id),
                                size_total: i?.approximate_member_count,
                                time_to_click_ms: Math.round(performance.now()),
                            },
                            { flush: !0 },
                        ),
                        (n = null != i && i.state !== R.elq.EXPIRED && i.state !== R.elq.BANNED ? t : void 0),
                        (s = null != (l = eQ.default.getFingerprint()) ? l : eQ.default.getId()),
                        (r = null != i && i?.type != null ? Number(i?.type) : void 0),
                        A.Ay.openApp(n, void 0, s, void 0, r);
                },
                transitionTo: n,
            })
        );
    }),
    l4 = ny(lj),
    l5 = ny(function (e) {
        let { location: t, transitionTo: i = P.pX } = e,
            [l, s] = o.useState("submitting");
        function r() {
            return "Android" === eB().os.family || "iOS" === eB().os.family
                ? null
                : (0, a.jsx)(M.$, {
                      text: Q.intl.string(Q.t.dKhVQN),
                      fullWidth: !0,
                      onClick: () => i(R.BVt.LOGIN, { source: "authorizeIPAdress" }),
                  });
        }
        return ((0, lU.Ay)(() => {
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
    l9 = ny(function (e) {
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
    se = ny(function (e) {
        let { location: t, transitionTo: n = l0 } = e,
            [i, l] = o.useState("submitting"),
            s = o.useRef(void 0);
        (0, lU.Ay)(() => {
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
                n(R.BVt.LOGIN, { source: "verify_email" });
            }, [n]),
            c = o.useCallback(() => {
                S.default.track(R.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: s.current }),
                    (0, lZ.A)("verify_email");
            }, []);
        return "failed" === i
            ? (0, a.jsx)(eO, {
                  title: Q.intl.string(Q.t["PCgG3+"]),
                  subtitle: Q.intl.string(Q.t.tQpeA3),
                  buttonText: Q.intl.string(Q.t.dKhVQN),
                  onButtonClick: r,
              })
            : "succeeded" === i
              ? (0, a.jsx)(eO, {
                    title: Q.intl.string(Q.t["dAfGb+"]),
                    buttonText: Q.intl.string(Q.t["uJWIj/"]),
                    onButtonClick: c,
                    image: (0, a.jsx)(eC, { alt: Q.intl.string(Q.t["dAfGb+"]) }),
                })
              : (0, a.jsx)(eO, {
                    title: Q.intl.string(Q.t["0c8+5n"]),
                    subtitle: Q.intl.string(Q.t.ULTCBE),
                    loading: !0,
                });
    }),
    st = ny(() => {
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
                        className: U()(K.QX, ej.Uu, ej.wq, ej.Hu),
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
    sn = ny(lJ.A),
    si = ny(nU),
    sl = ny(ex),
    ss = ny(function (e) {
        let { location: t } = e,
            [n, i] = o.useState(!1),
            { verifySuccess: l, verifyErrors: s, redirectGuildId: r } = (0, h.bG)([eV], () => eV.getState());
        o.useEffect(() => {
            let e = (0, eh.A)(t);
            eS.A.verify(e), (0, G.d)("verify_hub_email");
        }, [t]);
        let c = () => {
            let e, t;
            (e = (function (e) {
                let t = eB().os?.family;
                if ("Android" === t || "iOS" === t) {
                    let t = eQ.default.getFingerprint(),
                        n = (0, eW.I_)();
                    return (
                        ew()(null != e, "generateAppPath: guildId cannot be null"),
                        (0, eW.Ay)((0, eF.jN)(e), { utmSource: "verify_hub_email", fingerprint: t, attemptId: n })
                    );
                }
                return "discord://";
            })(r)),
                null != (t = (0, eW.X7)(e)) &&
                    S.default.track(R.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, ez.v)(t.fingerprint),
                        attempt_id: t.attemptId,
                        source: t.utmSource,
                    }),
                eH.A.launch(e, (e) => {
                    e || (0, P.bG)(eu.A.fallbackRoute);
                }),
                i(!0);
        };
        return n
            ? (0, a.jsx)(eO, {
                  title: Q.intl.string(Q.t.csrAMJ),
                  subtitle: Q.intl.string(Q.t["m1+IBn"]),
                  buttonText: Q.intl.string(Q.t.fIv16B),
                  onButtonClick: () => (0, P.pX)(R.BVt.CHANNEL(r)),
              })
            : l
              ? (0, a.jsx)(eO, {
                    title: Q.intl.string(Q.t["dAfGb+"]),
                    buttonText: Q.intl.string(Q.t["uJWIj/"]),
                    onButtonClick: c,
                    image: (0, a.jsx)(eC, { alt: Q.intl.string(Q.t["dAfGb+"]) }),
                })
              : null != s
                ? (0, a.jsx)(eO, {
                      title: Q.intl.string(Q.t["PCgG3+"]),
                      subtitle: Q.intl.string(Q.t.tQpeA3),
                      buttonText: Q.intl.string(Q.t["uJWIj/"]),
                      onButtonClick: c,
                  })
                : (0, a.jsx)(eO, {
                      title: Q.intl.string(Q.t["0c8+5n"]),
                      subtitle: Q.intl.string(Q.t.ULTCBE),
                      loading: !0,
                  });
    }),
    sr = ny(function (e) {
        let { match: t, location: n } = e,
            i = async (e, t) => {
                await (0, nO.W)(tJ.XK.CHANNEL, {
                    guildId: e.params.guildId,
                    channelId: e.params.channelId,
                    messageId: e.params.messageId,
                    search: t.search,
                });
            };
        return (0, a.jsx)(nG, { match: t, location: n, attemptDeepLink: i });
    }),
    sa = ny(function (e) {
        let { match: t, location: n } = e,
            i = async (e) => {
                await (0, nO.W)(tJ.XK.GAME_SHOP, {
                    guildId: e.params.guildId,
                    pageIndex: e.params.pageIndex,
                    skuId: e.params.skuId,
                    slug: e.params.slug,
                });
            };
        return (0, a.jsx)(nG, { match: t, location: n, attemptDeepLink: i });
    }),
    so = ny(function (e) {
        let { match: t, location: n } = e,
            i = async (e, t) => {
                await (0, nO.W)(tJ.XK.PICK_GUILD_SETTINGS, {
                    section: e.params.section,
                    subsection: e.params.subsection,
                    search: t.search,
                });
            };
        return (0, a.jsx)(nG, { match: t, location: n, attemptDeepLink: i });
    }),
    sc = ny((e) => {
        let { location: t } = e,
            n = (0, h.bG)([eQ.default], () => eQ.default.isAuthenticated()),
            i = (0, h.bG)([eN.A], () => eN.A.hasLoadedExperiments),
            l = l$.useExperiment({ location: "RSL - Landing Page" }, { autoTrackExposure: !0 }).enabled,
            [s, r] = o.useState(!1),
            [c, d] = o.useState(Q.intl.string(Q.t["9exy+V"])),
            [u, m] = o.useState(!0),
            g = (e) => {
                switch (e) {
                    case R.t02.INVALID_FORM_BODY:
                    case R.t02.DSA_RSL_REPORT_NOT_FOUND:
                        d(Q.intl.string(Q.t.bzXDfc));
                        break;
                    case R.t02.DSA_RSL_ALREADY_REQUESTED:
                        d(Q.intl.string(Q.t.rV00wq));
                        break;
                    case R.t02.DSA_RSL_LIMITED_TIME:
                        d(Q.intl.string(Q.t["0dI29h"]));
                        break;
                    case R.t02.DSA_RSL_REPORT_INELIGIBLE:
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
                      t8
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
                        let t = null != e ? await (0, t6.q)(e) : void 0;
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
                    children: [(0, a.jsx)(k.hE, { className: K.QB, children: c }), s && (0, a.jsx)(ey.y, {})],
                })
        );
    }),
    sd = ny(et),
    su = ny(function (e) {
        let { match: t, location: i } = e,
            l = (0, c.parse)(i.search).token,
            [s, r] = o.useState("loading"),
            d = o.useRef(!1),
            m = o.useCallback(async (e) => {
                try {
                    S.default.track(R.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                        await x.A.oneTimeLogin(e),
                        r("login_success"),
                        S.default.track(R.HAw.LOGIN_SUCCESSFUL, { source: "web_page", login_method: "one_time_login" }),
                        n.g.location.assign(R.BVt.APP);
                } catch (t) {
                    let e = t instanceof Error ? t.message : "Unknown error";
                    S.default.track(R.HAw.ONE_TIME_LOGIN_ERROR, {
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
                eH.A.launch(n, (e) => {
                    e
                        ? (S.default.track(R.HAw.DEEP_LINK_CLICKED, {
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
                            l.request(R.e$_.DEEP_LINK, {
                                type: tJ.XK.ONE_TIME_LOGIN,
                                params: { token: e, fingerprint: t, installationId: i },
                            })
                                .then((n) => {
                                    n
                                        ? (S.default.track(R.HAw.DEEP_LINK_CLICKED, {
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
                    t = u.Fr ? "mobile" : u.v1 ? "tablet" : (0, tK.isDesktop)() ? "desktop_app" : "web";
                if ((S.default.track(R.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: e, device_type: t }), !e))
                    return void r("error");
                if (u.Fr || u.v1) {
                    let e = S.default.getSuperProperties()?.os;
                    S.default.track(R.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_ui_shown",
                        device_type: t,
                        platform: e,
                    });
                    return;
                }
                (0, tK.isDesktop)() ? m(l) : d.current || ((d.current = !0), r("rpc_attempting"), g(l));
            }, [l, i, m, g]),
            u.Fr || u.v1)
        ) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, a.jsx)(t$, { token: l, hasError: "error" === s, errorReason: e });
        }
        if ((0, P.MX)()) return null;
        if ("app_launched" === s)
            return (0, a.jsx)(tZ, {
                title: Q.intl.string(Q.t.RvUUOy),
                subtitle: Q.intl.string(Q.t["5/lR0g"]),
                buttonText: Q.intl.string(Q.t["2ixEBi"]),
                buttonOnClick: () => {
                    S.default.track(R.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: s }), m(l);
                },
            });
        if ("app_launch_not_supported" === s)
            return (0, a.jsx)(tZ, {
                title: Q.intl.string(Q.t.qq4tjT),
                subtitle: Q.intl.string(Q.t.CVxYRo),
                buttonText: Q.intl.string(Q.t["2ixEBi"]),
                buttonOnClick: () => m(l),
            });
        if ("error" === s) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, a.jsx)(tZ, {
                title: Q.intl.string(Q.t.RtCSr1),
                subtitle: Q.intl.string(Q.t["S+YjYJ"]),
                buttonText: Q.intl.string(Q.t.j3cG2p),
                buttonOnClick: () => {
                    S.default.track(R.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                        (0, P.pX)(R.BVt.LOGIN);
                },
            });
        }
        return (0, a.jsx)(k.Ay, { children: (0, a.jsx)(k.CK, {}) });
    });
class sm extends o.PureComponent {
    state = { splash: null, redirectTo: null, backgroundId: null };
    static getDerivedStateFromProps(e, t) {
        let { invite: n, location: i } = e,
            { backgroundId: l } = t,
            s = (0, c.parse)(i.search).redirect_to ?? null;
        (null == s || "" === s || s.startsWith(R.BVt.ME) || (!(0, m.e)(s) && !eo(s))) && (s = null);
        let r = null;
        if (null == n) r = (0, np.u8)(s);
        else if (n?.state === R.elq.RESOLVED) {
            let { guild: e, target_application: t } = n;
            null != t
                ? null != l && (r = (0, nA.uD)(t.id, l, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (r = e4.Ay.getGuildSplashURL({ id: e.id, splash: e.splash }));
        }
        return { redirectTo: s, splash: r };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        null != e &&
            (!t && n && x.A.getExperiments(!0),
            S.default.track(
                R.HAw.INVITE_OPENED,
                { invite_code: (0, eK.m0)(e), load_time: n_.getTimeSinceNavigationStart() },
                { flush: !0 },
            )),
            t && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            O.initialize(),
            (0, G.D)();
    }
    componentDidUpdate(e) {
        !e.hasLoadedExperiments && this.props.hasLoadedExperiments && this.resolveInvite(),
            e.invite?.state !== this.props.invite?.state && this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        O.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if (e?.state === R.elq.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, nA.RG)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await A.Ay.resolveInvite(e, R.S3d.INVITE, { withGames: !0 });
        null != t && (ei(t), null != t.type && tl.uR.has(t.type) && A.Ay.openNativeAppModal(e));
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (S.default.track(
                R.HAw.GUILD_TEMPLATE_OPENED,
                { guild_template_code: e, load_time: n_.getTimeSinceNavigationStart() },
                { flush: !0 },
            ),
            eI.A.resolveGuildTemplate(e),
            eI.A.openNativeAppModal(e));
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
        return (0, a.jsxs)(nL.A, {
            splash: e,
            children: [
                (0, a.jsx)(en.A, { path: R.BVt.LOGIN_HANDOFF, render: (e) => (0, a.jsx)(l2, { ...e, redirectTo: t }) }),
                (0, a.jsx)(en.A, { path: R.BVt.LOGIN_ONE_TIME, render: (e) => (0, a.jsx)(su, { ...e }) }),
                (0, a.jsx)(en.A, {
                    impressionName: d.ImpressionNames.USER_LOGIN,
                    path: R.BVt.LOGIN,
                    render: (e) => (0, a.jsx)(l1, { ...e, redirectTo: t }),
                }),
                (0, a.jsx)(en.A, {
                    impressionName: d.ImpressionNames.USER_REGISTRATION,
                    path: R.BVt.REGISTER,
                    render: (e) => (0, a.jsx)(l4, { ...e, redirectTo: t }),
                }),
                (0, a.jsx)(en.A, {
                    path: R.BVt.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, a.jsx)(l7, { login: !0, ...e }),
                }),
                (0, a.jsx)(en.A, { path: R.BVt.GIFT_CODE(":giftCode"), render: (e) => (0, a.jsx)(l7, { ...e }) }),
                (0, a.jsx)(en.A, {
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
                            s = (0, eK.fB)(t, i.search);
                        return u.Fr || u.v1
                            ? (0, a.jsx)(l6, { inviteKey: s, transitionTo: l }, s)
                            : (0, a.jsx)(
                                  l3,
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
                (0, a.jsx)(en.A, {
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
                        return u.Fr || u.v1
                            ? (0, a.jsx)(lP, { code: t }, t)
                            : (0, a.jsx)(l8, {
                                  code: t,
                                  location: i,
                                  transitionTo: l,
                                  login: n === R.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, a.jsx)(en.A, { path: R.BVt.VERIFY, render: (e) => (0, a.jsx)(se, { ...e }) }),
                (0, a.jsx)(en.A, { path: R.BVt.VERIFY_HUB_EMAIL, render: (e) => (0, a.jsx)(ss, { ...e }) }),
                (0, a.jsx)(en.A, { path: R.BVt.VERIFY_REQUEST, render: (e) => (0, a.jsx)(st, { ...e }) }),
                (0, a.jsx)(en.A, { path: R.BVt.DISABLE_EMAIL_NOTIFICATIONS, render: (e) => (0, a.jsx)(si, { ...e }) }),
                (0, a.jsx)(en.A, {
                    path: R.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, a.jsx)(sl, { ...e }),
                }),
                (0, a.jsx)(en.A, { path: R.BVt.AUTHORIZE_IP, render: (e) => (0, a.jsx)(l5, { ...e }) }),
                (0, a.jsx)(en.A, {
                    path: R.BVt.REJECT_IP,
                    render: (e) => (0, a.jsx)(sn, { source: R.BVt.REJECT_IP, ...e }),
                }),
                (0, a.jsx)(en.A, {
                    path: R.BVt.REJECT_MFA,
                    render: (e) => (0, a.jsx)(sn, { source: R.BVt.REJECT_MFA, ...e }),
                }),
                (0, a.jsx)(en.A, { path: R.BVt.AUTHORIZE_PAYMENT, render: (e) => (0, a.jsx)(l9, { ...e }) }),
                (0, a.jsx)(en.A, { path: R.BVt.RESET, render: (e) => (0, a.jsx)(sn, { source: R.BVt.RESET, ...e }) }),
                (0, a.jsx)(en.A, {
                    path: R.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, a.jsx)(so, { ...e }),
                }),
                (0, a.jsx)(en.A, {
                    path: R.BVt.CHANNELS_GAME_SHOP(t0.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, a.jsx)(sa, { ...e }),
                }),
                (0, a.jsx)(en.A, {
                    path: R.BVt.CHANNEL(t0.pv.guildId(), t0.pv.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, a.jsx)(sr, { ...e }),
                }),
                (0, a.jsx)(en.A, { path: R.BVt.REPORT, render: () => (0, a.jsx)(nx, {}) }),
                (0, a.jsx)(en.A, { path: R.BVt.REPORT_SECOND_LOOK, render: (e) => (0, a.jsx)(sc, { ...e }) }),
                (0, a.jsx)(en.A, { path: R.BVt.ACCOUNT_REVERT(":token"), render: (e) => (0, a.jsx)(sd, { ...e }) }),
            ],
        });
    }
}
let sh = h.Ay.connectStores([eQ.default, e6.A, nf.A, eN.A, eT.A], (e) => {
    let { match: t, location: n } = e,
        i = t?.params?.inviteCode,
        l = null != i ? (0, eK.fB)(i, n.search) : void 0,
        s = t?.params?.giftCode,
        r = t?.params?.guildTemplateCode;
    return {
        inviteKey: l,
        isAuthenticated: eQ.default.isAuthenticated(),
        giftCode: s,
        guildTemplateCode: r,
        gift: null != s ? nf.A.get(s) : null,
        invite: null != l ? e6.A.getInvite(l) : null,
        guildTemplate: null != r ? eT.A.getGuildTemplate(r) : null,
        hasLoadedExperiments: eN.A.hasLoadedExperiments,
    };
})(sm);
