(n.r(t), n.d(t, { default: () => s8 }));
var i,
    l,
    s,
    r,
    a,
    o,
    c = n(477900),
    u = n(582128),
    d = n(492462),
    h = n(613412),
    m = n(607399),
    g = n(470562),
    f = n(855986),
    p = n(830215),
    A = n(869038),
    E = n(574332),
    x = n(620632),
    _ = n(73153),
    j = n(6981),
    I = n(376943),
    N = n(718446),
    C = n(746080),
    v = n(355097),
    y =
        (((i = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (i.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        (i.GUILD_ANALYTICS_SETTING = "guild_analytics_setting"),
        (i.GAME_CLAIM = "game_claim"),
        i);
function S(e) {
    let t = decodeURIComponent(e),
        n = (0, I.vu)(t);
    return null != n && n.channelId === C.VV.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t.toLowerCase() === (0, N.T)(v.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)
          ? "role_subscription_setting"
          : void 0;
}
var T = n(115036),
    b = n(129230),
    R = n(272355),
    L = n(652215);
function O(e, t) {
    b.default.track(L.HAw.BROWSER_HANDOFF_SUCCEEDED, { authenticated: e, handoff_source: t });
}
class D extends R.A {
    _initialize() {
        (_.h.subscribe("BROWSER_HANDOFF_END", this.handleEnd),
            _.h.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff));
    }
    _terminate() {
        (_.h.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd),
            _.h.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff));
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: i, handoffSource: l } = e;
        null != n
            ? x.Bo.post({ url: L.Rsh.HANDOFF_EXCHANGE, body: { key: t, handoff_token: n }, rejectWithError: !1 }).then(
                  (e) => {
                      let { body: t } = e;
                      ((0, j.uA)(t.user), p.A.loginToken(t.token, !1), O(!0, l));
                  },
                  (e) => {
                      (null != i && O(!1, l),
                          p.A.setFingerprint(i),
                          (0, j.mZ)(),
                          l === y.ROLE_SUBSCRIPTION &&
                              b.default.track(L.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: e.message ?? e.text,
                                  handoff_source: l,
                              }));
                  },
              )
            : null != i
              ? (p.A.setFingerprint(i), O(!1, l), (0, j.mZ)())
              : (p.A.setFingerprint(i), (0, j.J0)());
    }
    handleEnd = (e) => {
        let { handoffToken: t, fingerprint: n } = e,
            i = T.A.key;
        null != i && T.A.isHandoffAvailable()
            ? this.handleHandoff({ handoffKey: i, handoffToken: t, fingerprint: n, handoffSource: void 0 })
            : (p.A.setFingerprint(null), (0, j.J0)());
    };
}
let k = new D();
var w = n(854378),
    P = n(210714),
    G = n(430690),
    U = n(503698),
    B = n.n(U),
    F = n(834730),
    M = n(821609),
    V = n(181658),
    H = n(188567),
    W = n(499785),
    K = (((l = {}).START = "start"), (l.PASSWORD = "password"), (l.SUCCESS = "success"), (l.FAILED = "failed"), l),
    Q = n(792996),
    q = n(652989),
    z = n(221851);
function X(e) {
    let { setOriginalEmail: t, setSlide: i, ready: l, token: s } = e,
        [r, a] = u.useState(!1),
        [o, d] = u.useState(null),
        [m, g] = u.useState(null),
        [f, p] = u.useState(""),
        A = u.useRef(null);
    return (
        u.useEffect(() => {
            l && A.current?.focus();
        }, [l]),
        (0, c.jsxs)("div", {
            children: [
                (0, c.jsx)(w._V, { src: null == m ? n(79418) : n(579656), className: B()(z.SX, z.Ot) }),
                (0, c.jsx)(w.hE, { children: Q.intl.string(Q.t.IfBQ56) }),
                null != m && "" !== m
                    ? (0, c.jsx)(F.E, { variant: "body-sm/normal", color: "text-feedback-critical", children: m })
                    : null,
                (0, c.jsxs)(w.eB, {
                    className: B()(z.SX, z.QX),
                    children: [
                        (0, c.jsx)(w.pd, {
                            name: "password",
                            type: "password",
                            revealable: !0,
                            label: Q.intl.string(Q.t["8dM4FO"]),
                            setRef: A,
                            className: z.SX,
                            value: f,
                            onChange: p,
                            error: o,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: Q.intl.string(Q.t["yY/PXY"]),
                        }),
                        (0, c.jsx)("div", {
                            className: z.Ot,
                            children: (0, c.jsx)(M.$, {
                                text: Q.intl.string(Q.t.ezv91b),
                                fullWidth: !0,
                                onClick: function () {
                                    if (!r) {
                                        if (0 === f.length) {
                                            (d(Q.intl.string(Q.t.R98xD5)), H._.dispatch(L.jej.WAVE_EMPHASIZE));
                                            return;
                                        }
                                        return (
                                            null != m && g(null),
                                            null != o && d(null),
                                            t(""),
                                            a(!0),
                                            W.A.post({
                                                url: L.Rsh.ACCOUNT_REVERT,
                                                body: { token: s, password: f },
                                                trackedActionData: { event: h.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    (p(""), t(n), i(K.SUCCESS));
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        g(
                                                            Q.intl.formatToPlainString(Q.t.aTVNes, {
                                                                statusPageURL: L.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new V.A(e);
                                                        t.hasFieldErrors()
                                                            ? d(t.getAnyErrorMessage())
                                                            : g(
                                                                  (function (e) {
                                                                      switch (e) {
                                                                          case L.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                              return Q.intl.string(Q.t["11zzGR"]);
                                                                          case L.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                              return Q.intl.string(Q.t["6qmgaI"]);
                                                                          case L.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                              return Q.intl.string(Q.t.bChnKs);
                                                                          default:
                                                                              return Q.intl.format(Q.t.aTVNes, {
                                                                                  statusPageURL: L.qF7.STATUS,
                                                                              });
                                                                      }
                                                                  })(t.code).toString(),
                                                              );
                                                    }
                                                    H._.dispatch(L.jej.WAVE_EMPHASIZE);
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
                (0, c.jsx)("div", {
                    className: q.UD,
                    children: (0, c.jsx)(M.$, {
                        text: Q.intl.string(Q.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: function () {
                            (p(""), i(K.START));
                        },
                    }),
                }),
            ],
        })
    );
}
var Y = n(825484),
    $ = n(202501);
function Z(e) {
    let { children: t } = e;
    return (0, c.jsx)("li", {
        className: q.Aw,
        children: (0, c.jsx)(F.E, { variant: "body-sm/medium", color: "text-default", children: t }),
    });
}
function J(e) {
    let { setSlide: t, transitionTo: i } = e;
    return (0, c.jsxs)("div", {
        children: [
            (0, c.jsx)(w._V, { src: n(79418), className: B()(z.SX, z.Ot) }),
            (0, c.jsx)(w.hE, { className: z.QB, children: Q.intl.string(Q.t["8UcxI6"]) }),
            (0, c.jsx)(F.E, { variant: "body-md/normal", children: Q.intl.string(Q.t.O37hMl) }),
            (0, c.jsxs)(w.eB, {
                className: B()(z.SX, z.QX),
                children: [
                    (0, c.jsx)(F.E, { variant: "body-sm/normal" }),
                    (0, c.jsxs)("ul", {
                        className: q.qI,
                        children: [
                            (0, c.jsx)(Z, { children: Q.intl.string(Q.t.Gj1Zry) }),
                            (0, c.jsx)($.A, {}),
                            (0, c.jsx)(Z, { children: Q.intl.string(Q.t["8C6t3B"]) }),
                            (0, c.jsx)($.A, {}),
                            (0, c.jsx)(Z, { children: Q.intl.string(Q.t.mToZMA) }),
                            (0, c.jsx)($.A, {}),
                            (0, c.jsx)(Z, { children: Q.intl.string(Q.t.TPEvkc) }),
                            (0, c.jsx)($.A, {}),
                            (0, c.jsx)(Z, { children: Q.intl.string(Q.t.H8Y1Ln) }),
                        ],
                    }),
                ],
            }),
            (0, c.jsxs)(Y.e, {
                direction: "vertical",
                fullWidth: !0,
                className: q.UD,
                children: [
                    (0, c.jsx)(M.$, { text: Q.intl.string(Q.t.GgCRqR), onClick: () => t(K.PASSWORD) }),
                    (0, c.jsx)(M.$, {
                        text: Q.intl.string(Q.t["B/yHcQ"]),
                        variant: "secondary",
                        onClick: () => i(L.BVt.LOGIN, { source: "account_revert" }),
                    }),
                ],
            }),
        ],
    });
}
function ee(e) {
    let { email: t } = e;
    return (0, c.jsxs)("div", {
        children: [
            (0, c.jsx)(w._V, { src: n(79418), className: B()(z.SX, z.Ot) }),
            (0, c.jsx)(w.hE, { children: Q.intl.string(Q.t.ailkVG) }),
            (0, c.jsx)(w.tK, { children: Q.intl.format(Q.t["4ZMVCI"], { email: t }) }),
            (0, c.jsx)(F.E, {
                className: B()(z.QB, z.QX),
                variant: "body-md/normal",
                children: Q.intl.string(Q.t["dpAn+8"]),
            }),
        ],
    });
}
function et(e) {
    let { transitionTo: t, token: n, width: i } = e,
        [l, s] = u.useState(K.START),
        [r, a] = u.useState(null),
        [o, d] = u.useState(""),
        m = { impression_group: h.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, c.jsx)("div", {
        style: { margin: "8px" },
        children: (0, c.jsxs)(G.t, {
            activeSlide: l,
            width: i,
            onSlideReady: a,
            children: [
                (0, c.jsx)(G.q, {
                    id: K.START,
                    impressionProperties: m,
                    impressionName: h.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, c.jsx)(J, { setSlide: s, transitionTo: t }),
                }),
                (0, c.jsx)(G.q, {
                    id: K.PASSWORD,
                    impressionProperties: m,
                    impressionName: h.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, c.jsx)(X, {
                        setOriginalEmail: d,
                        setSlide: s,
                        transitionTo: t,
                        ready: r === K.PASSWORD,
                        token: n,
                    }),
                }),
                (0, c.jsx)(G.q, {
                    id: K.SUCCESS,
                    impressionProperties: m,
                    impressionName: h.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, c.jsx)(ee, { email: o }),
                }),
            ],
        }),
    });
}
f.Ay.initialize();
class en extends u.PureComponent {
    componentDidMount() {
        (0, P.d0)("account_revert");
    }
    render() {
        let e = this.props.match.params.token ?? "";
        return (0, c.jsx)(w.Ay, {
            style: { padding: 0 },
            children: (0, c.jsx)(et, { width: 464, token: e, ...this.props }),
        });
    }
}
var ei = n(549711);
function el(e) {
    _.h.dispatch({ type: "AUTH_INVITE_UPDATE", invite: e });
}
(n(323874), n(14289), n(35956));
var es = n(115560),
    er = n(611599);
let ea = [window.GLOBAL_ENV.ADS_MANAGER_ENDPOINT].filter(Boolean);
function eo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = new URL(e, t);
    return ("127.0.0.1" === n.hostname && (n.hostname = "localhost"), n.href);
}
function ec(e) {
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
var eu = n(123292),
    ed = n(650048),
    eh = n(537975),
    em = n(396681);
f.Ay.initialize();
class eg extends u.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, guild: null };
    componentDidMount() {
        let e = (0, em.A)(this.props.location),
            t = (0, d.qg)(this.props.location.search);
        (x.Bo.post({
            url: L.Rsh.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
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
            (0, P.d0)("disable_server_highlight_notifications"));
    }
    renderBusy() {
        return (0, c.jsx)(w.Ay, { children: (0, c.jsx)(w.CK, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, c.jsxs)(w.Ay, {
            children: [
                (0, c.jsx)(w.hE, { className: z.QB, children: Q.intl.string(Q.t.Z33eiP) }),
                (0, c.jsx)(w.tK, { children: Q.intl.format(Q.t.NRWtfC, { guildName: n.name }) }),
                (0, c.jsx)("div", {
                    className: z.eT,
                    children: (0, c.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, c.jsx)("div", {
                    className: z.Ot,
                    children: (0, c.jsx)(eu.Q, {
                        text: Q.intl.string(Q.t["cGmT/J"]),
                        onClick: () => {
                            t(L.BVt.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                        },
                    }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, c.jsxs)(w.Ay, {
            children: [
                (0, c.jsx)(w._V, { src: n(37772), className: z.SX }),
                (0, c.jsx)(w.hE, { className: z.QB, children: Q.intl.string(Q.t.ox9hIS) }),
                (0, c.jsx)(w.tK, { children: Q.intl.string(Q.t["/dcuR5"]) }),
                (0, c.jsx)("div", {
                    className: z.eT,
                    children: (0, c.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let ef = f.Ay.connectStores([ed.A], () => ({ defaultRoute: ed.A.defaultRoute }))(eg);
var ep = n(628284),
    eA = n(557722),
    eE = n(628387),
    ex = n(148864),
    e_ = n(916226);
n(53516);
var ej = n(938442),
    eI = n(204477);
let eN = ["loopback-network", "local-network-access"];
async function eC() {
    if ("u" < typeof navigator || null == navigator.permissions) return "unknown";
    for (let e of eN)
        try {
            return (await navigator.permissions.query({ name: e })).state;
        } catch {}
    return "unknown";
}
var ev = n(343446),
    ey = n(620233),
    eS = n(122906),
    eT = n(121623),
    eb = n(62617),
    eR = n(31008);
function eL(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s, height: r, className: a, style: o } = e,
        d = u.useMemo(
            () => (0, eb.H)({ width: s, height: r, intrinsicWidth: 288, intrinsicHeight: 162, style: o }),
            [s, r, o],
        );
    return (0, c.jsx)("img", {
        style: d,
        src: eR.A,
        className: (0, eb.Z)(a),
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var eO = n(154672),
    eD = n(331322),
    ek = n(289873),
    ew = n(534514),
    eP = n(47084);
function eG(e) {
    let { title: t, subtitle: n, buttonText: i, image: l, onButtonClick: s, loading: r } = e;
    return (0, c.jsx)(w.Ay, {
        className: eP.kL,
        children: (0, c.jsxs)(eD.B, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, c.jsxs)(eD.B, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, c.jsxs)(eD.B, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != l &&
                                    (0, c.jsx)(eD.B, {
                                        align: "center",
                                        justify: "center",
                                        className: eP.Sl,
                                        children: l,
                                    }),
                                r && (0, c.jsx)(ek.y, { type: ek.y.Type.SPINNING_CIRCLE }),
                                (0, c.jsx)(ew.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, c.jsx)(F.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                className: eP.VA,
                                children: n,
                            }),
                    ],
                }),
                !r && (0, c.jsx)(M.$, { onClick: s, text: i, variant: "overlay-primary" }),
            ],
        }),
    });
}
var eU = n(976860);
let eB = !1,
    eF = null,
    eM = null;
class eV extends f.Ay.Store {
    static displayName = "HubEmailVerificationStore";
    getState() {
        return { verifySuccess: eB, verifyErrors: eF, redirectGuildId: eM };
    }
}
let eH = new eV(_.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        ((eB = !0), (eF = null), (eM = t));
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        ((eB = !1), (eF = t));
    },
});
var eW = n(284009),
    eK = n.n(eW),
    eQ = n(481613),
    eq = n.n(eQ),
    ez = n(400253),
    eX = n(869733),
    eY = n(80703),
    e$ = n(46653),
    eZ = n(877062);
f.Ay.initialize();
var eJ = n(21599),
    e0 = n(156150),
    e1 = n(717421),
    e2 = n(646514),
    e4 = n(993077),
    e8 = n(235986),
    e3 = n(408738);
function e7(e) {
    let { text: t, buttonCta: i, onClick: l } = e;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(w._V, { src: n(431979) }),
            (0, c.jsx)(w.hE, { className: B()(z.QX, z.QB, ej.tR), children: Q.intl.string(Q.t.eL5z0i) }),
            (0, c.jsx)(w.tK, { className: z.C2, children: Q.intl.string(Q.t.poAv63) }),
            (0, c.jsxs)(e4.Z, {
                className: e3.Nr,
                type: e4.Z.Types.CUSTOM,
                children: [
                    (0, c.jsx)("img", { alt: "", className: e3.q8, src: n(355912) }),
                    (0, c.jsx)("img", { alt: "", className: e3.dw, src: n(610925) }),
                    (0, c.jsxs)(e8.A, {
                        className: e3.p_,
                        direction: e8.A.Direction.VERTICAL,
                        align: e8.A.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, c.jsx)(F.E, {
                                tag: "strong",
                                className: e3.p8,
                                variant: "body-md/normal",
                                style: { color: e2.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, c.jsx)("div", {
                                className: e3.x6,
                                children: (0, c.jsx)(M.$, { text: i, fullWidth: !0, onClick: l }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e5(e) {
    let { text: t, buttonCta: n, theme: i = L.NJ8.DARK, onClick: l } = e;
    return (0, c.jsx)(w.Ay, { theme: i, children: (0, c.jsx)(e7, { text: t, buttonCta: n, onClick: l }) });
}
var e9 = n(765671),
    e6 = n(71393),
    te = n(299091),
    tt = n(486020),
    tn = n(403362),
    ti = n(294630),
    tl = n(778712),
    ts = n(47167),
    tr = n(769015),
    ta = n(714991),
    to = n(427262),
    tc = n(330936),
    tu = n(622625);
function td(e) {
    let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
    return 0 === t.memberCount ? null : t;
}
function th(e) {
    return e.target_type === ti.y.STREAM && null != e.target_user;
}
function tm(e) {
    return e.channel?.type === L.rbe.GROUP_DM;
}
function tg(e) {
    return null == e.channel && null == e.guild && null != e.inviter;
}
function tf(e) {
    return e.state === L.elq.ACCEPTED;
}
function tp(e) {
    let { guild_scheduled_event: t } = e;
    return null != t;
}
function tA(e) {
    let t;
    return !tp(e) && (!!tg(e) || (null != e.inviter && !tf(e) && ((t = td(e)), !((t?.memberCount ?? 0) > 100))));
}
function tE(e) {
    let { guild: t, user: n, application: i } = e;
    return null != i
        ? (0, c.jsx)(tr.A, { className: tu.Z2, game: i, size: tu.q6 })
        : null != n
          ? (0, c.jsx)(w.eu, { src: n.getAvatarURL(void 0, 100), size: tl._3.DEPRECATED_SIZE_100, className: tu.my })
          : null != t
            ? (0, c.jsx)(w.$v, { guild: t, size: w.$v.Sizes.LARGER, className: tu.$f, animate: !0 })
            : null;
}
function tx(e) {
    let { invite: t, textClassName: n, className: i } = e,
        l = td(t);
    return null == l || tA(t) || t?.guild?.id === tc.TA
        ? null
        : (0, c.jsx)(w.R1, {
              className: B()(tu.He, i),
              online: l.onlineCount,
              total: l.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function t_(e) {
    let { invite: t, showBigUserIcon: n } = e,
        i = u.useMemo(
            () =>
                n
                    ? null
                    : th(t) && null != t.target_user
                      ? tt.Ay.getUserAvatarURL(t.target_user)
                      : tA(t) && null != t.inviter
                        ? tt.Ay.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        l = Q.intl.string(Q.t["3rE1P8"]);
    return (
        tm(t)
            ? (l =
                  t.channel?.name != null && t.inviter?.username != null
                      ? Q.intl.format(Q.t.Lu4h18, { username: t.inviter.username })
                      : Q.intl.string(Q.t.OsdY8B))
            : th(t) && null != t.target_user
              ? (l = Q.intl.formatToPlainString(Q.t.x2L32Q, { username: t.target_user.username }))
              : tf(t)
                ? (l = Q.intl.string(Q.t["FDsl+J"]))
                : tA(t) &&
                  null != t.inviter &&
                  (l = Q.intl.format(Q.t.spU2mI, { username: to.Ay.getFormattedName(t.inviter) })),
        (0, c.jsxs)("div", {
            className: tu.JB,
            children: [
                null != i &&
                    (0, c.jsx)("div", {
                        className: tu._t,
                        children: (0, c.jsx)(w.eu, { src: i, size: tl._3.SIZE_24 }),
                    }),
                (0, c.jsx)(w.tK, { className: tu.__invalid_inviteJoinSubTitle, children: l }),
            ],
        })
    );
}
function tj(e) {
    let t,
        n,
        i,
        { user: l, guild: s, channel: r, application: a, showBigUserIcon: o } = e,
        u = (0, ts.Ay)(r);
    if (null != s)
        (o && null == a && (t = (0, c.jsx)(w.$v, { guild: s, size: w.$v.Sizes.SMALL })),
            (n = s.name),
            null != a &&
                ((n = a.name),
                (i = (0, c.jsxs)("div", {
                    className: tu.JB,
                    children: [
                        (0, c.jsx)(w.tK, { className: tu.R9, children: Q.intl.string(Q.t["3gg9fF"]) }),
                        (0, c.jsxs)("div", {
                            className: tu.bo,
                            children: [
                                (0, c.jsx)(w.$v, { guild: s, size: w.$v.Sizes.SMALL }),
                                (0, c.jsx)(ew.D, {
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
        let e = to.Ay.getFormattedName(l);
        null != u && "" !== u
            ? ((n = u), null != r.icon && (t = (0, c.jsx)(w.F4, { channel: r, size: tl._3.SIZE_32 })))
            : (n = e);
    } else if (null != l) {
        let e = to.Ay.getFormattedName(l);
        ((n = Q.intl.formatToPlainString(Q.t["4aF92R"], { username: e })),
            (i = (0, c.jsx)(w.tK, { className: tu.b$, children: Q.intl.format(Q.t.Quj7HX, { username: e }) })));
    }
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)(w.hE, {
                className: tu.DD,
                children: [
                    null != s ? (0, c.jsx)(ta.A, { guild: s, className: tu.n2, tooltipPosition: "left" }) : null,
                    t,
                    n,
                ],
            }),
            i,
        ],
    });
}
var tI = n(327891),
    tN = n(95701),
    tC = n(619019),
    tv = n(945810),
    ty = n(172799);
let tS = (0, tv.mj)({
    name: "2026-09-silp-cta-copy-tests",
    kind: "user",
    defaultConfig: { variant: null },
    variations: { 1: { variant: "clarity" }, 2: { variant: "clarity_softer" }, 3: { variant: "low_commitment" } },
});
function tT(e) {
    return null != e && null != e.guild && (null == e.type || e.type === ty.Xd.GUILD);
}
function tb(e) {
    return tS.useConfig({ location: e }).variant;
}
function tR(e) {
    switch (e) {
        case "clarity":
            return Q.intl.string(Q.t.OqHiIt);
        case "clarity_softer":
            return Q.intl.string(Q.t["1RFJ5Q"]);
        case "low_commitment":
            return Q.intl.string(Q.t.JMWqry);
        default:
            return Q.intl.string(Q.t.ohMvm1);
    }
}
var tL = n(682163),
    tO = n(557582),
    tD = n(167630),
    tk = n(424547);
function tw(e) {
    let { guildScheduledEvent: t, channel: n, onAcceptInvite: i, isSubmitting: l } = e;
    return (0, c.jsxs)("div", {
        className: tk.s4,
        children: [
            (0, c.jsx)(tO.Ay, {
                name: t.name,
                description: t.description ?? void 0,
                headerVariant: "heading-sm/medium",
                descriptionClassName: tk.__invalid_channelDescription,
                guildId: t.guild_id,
                guildEvent: t,
                eventPreview: t,
            }),
            null != n &&
                (0, c.jsx)("div", {
                    className: tk.yW,
                    children: (0, c.jsx)(tD.A, { guildScheduledEvent: t, channel: n }),
                }),
            (0, c.jsx)("div", {
                className: tk.xG,
                children: (0, c.jsx)(M.$, {
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
function tP(e) {
    let { invite: t } = e,
        n = null != t.guild ? (0, eh.DY)(t.guild) : null;
    if (null == n) return null;
    let i = n.description ?? "";
    return (0, c.jsxs)("div", {
        className: tk.kQ,
        children: [
            (0, c.jsx)(ew.D, { className: tk.s7, variant: "body-sm/medium", children: Q.intl.string(Q.t.Eabu1z) }),
            (0, c.jsxs)("div", {
                className: tk.bo,
                children: [
                    (0, c.jsx)(tL.Ay, { guild: n, active: !0, size: tL.Ay.Sizes.MEDIUM }),
                    (0, c.jsxs)("div", {
                        className: tk.bW,
                        children: [
                            (0, c.jsxs)(F.E, {
                                className: tk.J5,
                                color: "text-strong",
                                variant: "body-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, c.jsx)(ta.A, { guild: n, className: tk.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, c.jsx)(tx, { invite: t, textClassName: tk.kS, className: tk.pe }),
                        ],
                    }),
                ],
            }),
            i.length > 0 &&
                (0, c.jsx)("details", {
                    className: tk.x_,
                    children: (0, c.jsx)(F.E, { color: "text-default", variant: "body-sm/normal", children: i }),
                }),
        ],
    });
}
function tG(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: l } = e,
        { guild_scheduled_event: s } = t;
    return null != s
        ? (0, c.jsx)(tw, { guildScheduledEvent: s, channel: n, isSubmitting: i, onAcceptInvite: l })
        : null;
}
var tU = n(578564);
function tB(e) {
    let { text: t, onClick: n, loading: i } = e;
    return (0, c.jsx)(M.$, { variant: "primary", size: "md", text: t, onClick: n, loading: i, fullWidth: !0 });
}
function tF(e) {
    let t = tb("InviteAcceptMobile");
    return (0, c.jsx)(tB, { ...e, text: tR(t) });
}
function tM(e) {
    let { invite: t, onAcceptInvite: n, disableUser: i = !1 } = e;
    if (null == t) return null;
    let l = null != t.guild ? (0, eh.DY)(t.guild) : null,
        s = null != t.channel ? (0, tN.OY)(t.channel) : null,
        r = null != t.target_application ? new tI.Ay(t.target_application) : null,
        a = i || null == t.inviter ? null : new tC.A(t.inviter),
        o =
            !(
                (null != t.approximate_member_count && t.approximate_member_count > 100) ||
                (null != l && l.features.has(L.GuildFeatures.COMMUNITY))
            ) &&
            null != a &&
            tm(t),
        u = (function (e) {
            let { state: t } = e;
            switch (t) {
                case L.elq.ACCEPTING:
                case L.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        d = { invite: t, user: a, guild: l, channel: s, application: r };
    return tp(t)
        ? (0, c.jsx)(tG, { invite: t, channel: s, isSubmitting: u, onAcceptInvite: n })
        : (0, c.jsxs)("div", {
              className: tU.kL,
              children: [
                  (0, c.jsx)(tE, { application: r, guild: l, user: o || tg(t) ? a : null }),
                  tg(t) ? null : (0, c.jsx)(t_, { ...d, showBigUserIcon: o }),
                  (0, c.jsx)(tj, { ...d, showBigUserIcon: o }),
                  (0, c.jsx)(tx, { ...d }),
                  (0, c.jsx)("div", {
                      className: tU.xG,
                      children: tT(t)
                          ? (0, c.jsx)(tF, { onClick: n, loading: u })
                          : (0, c.jsx)(tB, { text: tR(null), onClick: n, loading: u }),
                  }),
              ],
          });
}
var tV = n(43990),
    tH = n(241524),
    tW = n(573435),
    tK = n(260509),
    tQ = n(370953);
function tq(e) {
    let { guild: t, outline: n } = e,
        i = (0, tH.A)("(max-width: 600px), (max-height: 600px)") ? tL.DN.LARGER : tL.DN.XLARGE,
        l = tL.iu[i],
        s = tL.s[i],
        r = u.useMemo(() => tt.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: l }), [t.icon, t.id, l]),
        a = (0, tK.Rb)(t),
        o =
            null != r
                ? (0, c.jsx)("img", { src: r, alt: "", className: tQ.OV })
                : (0, c.jsx)("div", {
                      className: tQ.ef,
                      style: { fontSize: s[a.length] ?? s[s.length - 1] },
                      children: a,
                  });
    return n
        ? (0, c.jsx)("div", {
              className: B()(tQ._C, tQ.AY),
              children: (0, c.jsx)(tW.Ay, {
                  mask: tW.Ay.Masks.SQUIRCLE,
                  width: l + 8,
                  height: l + 8,
                  children: (0, c.jsx)("div", {
                      className: tQ.$d,
                      children: (0, c.jsx)(tW.Ay, { mask: tW.Ay.Masks.SQUIRCLE, width: l, height: l, children: o }),
                  }),
              }),
          })
        : (0, c.jsx)("div", {
              className: tQ._C,
              children: (0, c.jsx)(tW.Ay, { mask: tW.Ay.Masks.SQUIRCLE, width: l, height: l, children: o }),
          });
}
var tz = n(927813);
let tX = /\.$/;
function tY(e) {
    return Array.isArray(e)
        ? e
              .map((e) => e.replace(tX, ""))
              .join(". ")
              .trim()
        : e;
}
function t$(e) {
    let [t, n] = u.useState(() => null != e && !e),
        [i, l] = u.useState(e);
    return (null == i && null != e ? (l(e), n(!e)) : i !== e && l(e), [t, n]);
}
function tZ() {
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
                    }, e * tz.A.Millis.SECOND)));
            }, []),
        ]
    );
}
var tJ = n(153488),
    t0 = n(4274),
    t1 = n(95477),
    t2 = n(866665),
    t4 = n(627784),
    t8 = n(934337),
    t3 = n(15552),
    t7 = n(536637),
    t5 = n.n(t7),
    t9 = n(955437),
    t6 = n(295562),
    ne = n(831167);
n(861807);
var nt = n(569717),
    nn = n(204925);
function ni(e) {
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
        usedUsernameSuggestion: m = null,
    } = e;
    if ((_.h.dispatch({ type: "REGISTER" }), null != o)) {
        let e;
        ((0, nt.A)(o, L.JJy.REGISTER),
            b.default.track(L.HAw.AGE_GATE_ACTION, { source: nn.w_.REGISTER, action: nn.AM.AGE_GATE_SUBMITTED }),
            (e = t5()().diff(o, "years")) < 13 ||
                b.default.track(L.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                }));
    }
    return W.A.post({
        url: L.Rsh.REGISTER,
        body: {
            fingerprint: e$.default.getFingerprint(),
            email: t,
            username: i,
            global_name: l,
            password: r,
            invite: c,
            consent: s,
            phone_token: n,
            date_of_birth: null != o ? (0, ne.A)(o) : void 0,
            gift_code_sku_id: u,
            guild_template_code: a,
            promotional_email_opt_in: d?.checked,
        },
        trackedActionData: {
            event: h.NetworkActionNames.USER_REGISTER,
            properties: {
                invite_code: c,
                used_username_suggestion: m,
                promotional_email_opt_in: d?.checked,
                promotional_email_pre_checked: d?.preChecked,
                was_unique_username: !0,
            },
        },
        rejectWithError: !1,
    }).then(
        (e) => (
            _.h.dispatch({ type: "REGISTER_SUCCESS", token: e.body.token }),
            _.h.dispatch({
                type: "GUARDIAN_CONNECT_REQUIRED",
                shouldShowGuardianConnect: !0 === e.body.show_guardian_connect,
            }),
            b.default.track(L.HAw.AGE_GATE_ACTION, { source: nn.w_.REGISTER, action: nn.AM.AGE_GATE_SUCCESS }),
            e.body
        ),
        (e) => {
            if (e instanceof t6.CaptchaCancelError) throw e;
            let t = new V.A(e);
            throw (
                null != t.getFieldErrors("date_of_birth") && t9.Xv(nn.w_.REGISTER),
                b.default.track(L.HAw.REGISTER_SUBMIT_ERRORED, {
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
var nl = n(568385),
    ns = n(975639);
function nr(e) {
    let { consent: t, consentRequired: n, onConsentChange: i } = e;
    return n
        ? (0, c.jsx)("div", {
              className: ns.IQ,
              children: (0, c.jsx)(nl.J, {
                  label: Q.intl.format(Q.t.qMDAP0, { termsURL: L.X7G.TERMS, privacyURL: L.X7G.PRIVACY }),
                  checked: t,
                  onChange: i,
                  labelType: "secondary",
              }),
          })
        : (0, c.jsx)(F.E, {
              variant: "body-sm/normal",
              color: "text-subtle",
              className: B()(z.Ot, ns.E2),
              children: Q.intl.format(Q.t["KI+BSb"], { termsURL: L.X7G.TERMS, privacyURL: L.X7G.PRIVACY }),
          });
}
let na = (0, tv.mj)({
    kind: "installation",
    name: "2026-09-registration-email-opt-in-copy",
    defaultConfig: { trackingCopy: !1 },
    variations: { 1: { trackingCopy: !0 } },
});
function no() {
    let { required: e, checked: t } = (0, t8.mZ)(),
        n = (function (e, t) {
            let { trackingCopy: n } = na.useConfig({ location: t });
            return Q.intl.string(n ? Q.t.LSoXK5 : e);
        })(Q.t["0p3R0+"], "REGISTER_PROMO_EMAIL_CHECKBOX_WEB");
    return e
        ? (0, c.jsx)("div", {
              className: z.Ot,
              children: (0, c.jsx)(nl.J, { label: n, checked: t, onChange: t8.Bw, labelType: "secondary" }),
          })
        : null;
}
var nc = n(942614),
    nu = n(771016),
    nd = n(890251);
function nh(e) {
    let {
            invite: t,
            username: n,
            parsedDateOfBirth: i,
            email: l,
            password: s,
            consent: r,
            consentRequired: a,
            apiErrors: o,
            onEmailChange: d,
            onPasswordChange: h,
            onConsentChange: m,
            onApiErrors: g,
            onOpenApp: f,
            onRegister: p,
        } = e,
        [A, E] = u.useState(!1),
        [x, _] = tZ(),
        j = null != a && r,
        I = u.useRef(null),
        N = u.useRef(null);
    function C(e) {
        b.default.track(L.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function v(e) {
        b.default.track(L.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    u.useEffect(() => {
        I.current?.focus();
    }, []);
    let y = l.length > 0 && s.length > 0,
        S = u.useCallback(async () => {
            let e = t8.mZ.getState();
            (E(!0), g({}));
            try {
                let a = await ni({
                    email: l,
                    username: n,
                    consent: r,
                    password: s,
                    invite: t.code,
                    birthday: i,
                    promoEmailConsent: e.required ? e : null,
                });
                (a?.invite_join_deferred_code != null && (0, nc.C)(nu.zY.INVITE_UNCLAIMED),
                    p(a?.invite_join_deferred_code));
            } catch (t) {
                if ((E(!1), !(t instanceof t4.LG))) return;
                let e = (0, t3.W)(t);
                (g(e),
                    null != e.email || null != e.phone ? I.current?.focus() : null != e.password && N.current?.focus(),
                    "number" == typeof e.retry_after && _(e.retry_after));
            }
        }, [t, l, n, s, i, r, g, p, _]),
        T = u.useCallback(
            (e) => {
                (e.preventDefault(), null != a && y && S());
            },
            [a, y, S],
        ),
        { message: R } = o;
    return (0, c.jsxs)("form", {
        onSubmit: T,
        children: [
            (0, c.jsx)("div", {
                className: z.SX,
                children: (0, c.jsx)(t1.k, {
                    label: Q.intl.string(Q.t.dI4d4S),
                    name: "email",
                    value: l,
                    onChange: d,
                    error: tY(o.email),
                    type: "email",
                    autoComplete: "username",
                    inputRef: I,
                    onFocus: () => C("email"),
                    onBlur: () => v("email"),
                }),
            }),
            (0, c.jsx)(t1.k, {
                label: Q.intl.string(Q.t["CIGa+7"]),
                name: "password",
                value: s,
                onChange: h,
                error: tY(o.password),
                type: "password",
                revealable: !0,
                autoComplete: "new-password",
                inputRef: N,
                onFocus: () => C("password"),
                onBlur: () => v("password"),
            }),
            (0, c.jsx)(no, {}),
            (0, c.jsx)(nr, { consent: r, consentRequired: a, onConsentChange: m }),
            (0, c.jsx)(t2.m, {
                text: !r && a ? Q.intl.string(Q.t.AY4IVA) : null,
                children: (0, c.jsx)("div", {
                    className: z.QX,
                    children: (0, c.jsx)(M.$, {
                        text: Q.intl.string(Q.t["825cFy"]),
                        variant: "primary",
                        fullWidth: !0,
                        type: "submit",
                        loading: A,
                        disabled: !j || x || !y,
                    }),
                }),
            }),
            "string" == typeof R ? (0, c.jsx)(w.ME, { className: B()(z.QX, ns.gJ), children: R }) : null,
            (0, c.jsx)("div", {
                className: nd.o3,
                children: (0, c.jsx)(eu.Q, {
                    text: Q.intl.string(Q.t.renMUD),
                    textVariant: "body-sm/normal",
                    onClick: f,
                }),
            }),
        ],
    });
}
function nm(e) {
    let { guild: t } = e,
        n =
            tt.Ay.getGuildBannerURL(t) ??
            (null != t.splash ? tt.Ay.getGuildSplashURL({ id: t.id, splash: t.splash, size: 640 }) : null);
    return (0, c.jsx)("div", { className: nd.ZK, style: null != n ? { backgroundImage: `url(${n})` } : void 0 });
}
function ng(e) {
    let { invite: t, kicker: n } = e,
        i = null != t.guild ? (0, eh.DY)(t.guild) : null;
    return null == i
        ? null
        : (0, c.jsxs)("header", {
              children: [
                  (0, c.jsx)(nm, { guild: i }),
                  (0, c.jsxs)("div", {
                      className: nd.lu,
                      children: [
                          (0, c.jsx)("div", { className: nd.LJ, children: (0, c.jsx)(tq, { guild: i, outline: !0 }) }),
                          (0, c.jsx)(F.E, {
                              variant: "body-sm/normal",
                              color: "text-default",
                              children: n ?? Q.intl.string(Q.t["3rE1P8"]),
                          }),
                          (0, c.jsxs)("div", {
                              className: nd.G1,
                              children: [
                                  (0, c.jsx)(ew.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: nd.qd,
                                      children: i.name,
                                  }),
                                  (0, c.jsx)(ta.A, { guild: i, tooltipPosition: "left" }),
                              ],
                          }),
                          (0, c.jsx)(tx, { invite: t }),
                      ],
                  }),
                  (0, c.jsx)("div", { className: nd.yF }),
              ],
          });
}
var nf = n(201505);
n(801541);
var np = n(889137),
    nA = n(546727),
    nE = n(576326),
    nx = n(643580);
let n_ = window.ResizeObserver ?? nx.t;
function nj(e) {
    let { show: t, children: n, top: i = 0, bottom: l = 0 } = e,
        { ref: s, height: r } = (function () {
            let e = u.useRef(null),
                [t, n] = u.useState(0),
                i = u.useMemo(
                    () =>
                        new n_((e) => {
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
        a = (0, e1.z)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: { height: t ? r : 0, paddingBottom: t ? `${l}px` : "0px", marginTop: t ? `${i}px` : "0px" },
            config: { tension: 170, friction: 26 },
        }),
        o = (0, e1.z)({
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
    return (0, c.jsx)(e0.animated.div, {
        style: { overflow: "hidden", height: a.height, paddingBottom: a.paddingBottom, marginTop: a.marginTop },
        children: (0, c.jsx)(e0.animated.div, { style: { opacity: o.opacity }, ref: s, children: n }),
    });
}
function nI(e) {
    let t,
        { username: n, suggestion: i, globalName: l, isUsernameFocused: s, onClickSuggestion: r } = e,
        a = (0, nE.i)(n, !0, !0),
        o = n.length > 0;
    return (
        (t = o
            ? (0, np.YW)(a)
                  .with({ type: nA.q.ERROR, message: np.P.select() }, (e) =>
                      (0, c.jsx)(F.E, { className: ns.vU, variant: "body-sm/normal", children: e }),
                  )
                  .with({ type: nA.q.AVAILABLE, message: np.P.select() }, (e) =>
                      (0, c.jsx)(F.E, { className: ns.vq, variant: "body-sm/normal", children: e }),
                  )
                  .otherwise(() =>
                      (0, c.jsx)(F.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          children: Q.intl.string(Q.t.z7c4bP),
                      }),
                  )
            : null != i && i.length > 0 && l.length > 0
              ? (0, c.jsx)(F.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: Q.intl.format(Q.t.nDGqqq, { suggestion: i, nameOnClick: r }),
                })
              : (0, c.jsx)(F.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: Q.intl.string(Q.t.z7c4bP),
                })),
        (0, c.jsx)(nj, { show: (o && a?.type === nA.q.ERROR) || s, top: -12, bottom: 20, children: t })
    );
}
function nN(e) {
    let {
            username: t,
            parsedDateOfBirth: n,
            apiErrors: i,
            onUsernameChange: l,
            onDateOfBirthChange: s,
            onNext: r,
            onOpenApp: a,
        } = e,
        [o, d] = u.useState(!1),
        h = u.useRef(null);
    function m(e) {
        b.default.track(L.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function g(e) {
        b.default.track(L.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    u.useEffect(() => {
        null != i.username && h.current?.focus();
    }, []);
    let f = t.length > 0 && null != n;
    return (0, c.jsxs)("form", {
        onSubmit: function (e) {
            (e.preventDefault(), f && r());
        },
        children: [
            (0, c.jsxs)("div", {
                onBlur: () => d(!1),
                onFocus: () => d(!0),
                tabIndex: -1,
                children: [
                    (0, c.jsx)("div", {
                        className: z.SX,
                        children: (0, c.jsx)(t1.k, {
                            label: Q.intl.string(Q.t.TWzdWj),
                            name: "username",
                            value: t,
                            onChange: (e) => l(e.toLocaleLowerCase()),
                            error: tY(i.username),
                            autoComplete: "off",
                            inputRef: h,
                            onFocus: () => m("username"),
                            onBlur: () => g("username"),
                        }),
                    }),
                    (0, c.jsx)(nI, {
                        username: t,
                        suggestion: null,
                        globalName: "",
                        isUsernameFocused: o,
                        onClickSuggestion: () => {},
                    }),
                ],
            }),
            (0, c.jsx)(nf.A, {
                label: Q.intl.string(Q.t.rhBeKe),
                name: "date_of_birth",
                onChange: s,
                error: tY(i.date_of_birth),
                value: n,
                onFocus: m,
                onBlur: g,
            }),
            (0, c.jsx)("div", {
                className: z.QX,
                children: (0, c.jsx)(M.$, {
                    text: Q.intl.string(Q.t.PDTjLN),
                    variant: "primary",
                    fullWidth: !0,
                    type: "submit",
                    disabled: !f,
                }),
            }),
            (0, c.jsx)("div", {
                className: nd.o3,
                children: (0, c.jsx)(eu.Q, {
                    text: Q.intl.string(Q.t.renMUD),
                    textVariant: "body-sm/normal",
                    onClick: a,
                }),
            }),
        ],
    });
}
function nC(e) {
    let { invite: t, onOpenApp: n, deferredJoinErrorCode: i } = e,
        l = null != t.guild ? (0, eh.DY)(t.guild) : null;
    if (null == l) return null;
    let s = null != i ? (0, t0.g)(i) : null;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            null != l ? (0, c.jsx)(nm, { guild: l }) : null,
            (0, c.jsxs)("div", {
                className: nd.zY,
                children: [
                    (0, c.jsxs)("div", {
                        className: nd.rL,
                        children: [
                            (0, c.jsx)(tq, { guild: l }),
                            (0, c.jsx)(ew.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                className: nd.Rw,
                                children: s?.title ?? Q.intl.format(Q.t["33M5bg"], { guildName: l?.name ?? "" }),
                            }),
                            (0, c.jsx)(F.E, {
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                className: nd.Ap,
                                children: s?.description ?? Q.intl.string(Q.t["7N4JkE"]),
                            }),
                            (0, c.jsx)("div", {
                                className: nd.S7,
                                children: (0, c.jsx)(M.$, {
                                    variant: "primary",
                                    size: "md",
                                    text: Q.intl.string(Q.t["n+VrqG"]),
                                    onClick: n,
                                }),
                            }),
                        ],
                    }),
                    (0, c.jsx)("div", {
                        className: nd.NG,
                        children: (0, c.jsx)("img", {
                            alt: "",
                            src: "https://cdn.discordapp.com/assets/content/55b848b6c57bf51009a1bdaa4465a9e8d79026b8b92889b0ea90a00475f19257.webp",
                        }),
                    }),
                ],
            }),
        ],
    });
}
function nv(e) {
    let { invite: t, onOpenApp: n, onOpenAppAfterRegistration: i } = e,
        [l, s] = u.useState(0),
        [r, a] = u.useState(""),
        [o, d] = u.useState(null),
        [h, m] = u.useState(""),
        [g, A] = u.useState(""),
        [E, x] = u.useState({}),
        _ = (0, f.bG)([tJ.A], () => tJ.A.getAuthenticationConsentRequired()),
        [j, I] = t$(_),
        [N, C] = u.useState(!1),
        [v, y] = u.useState(null),
        S = u.useRef(null);
    function T(e) {
        (s(e), S.current?.scrollTo(0, 0));
    }
    function b(e) {
        (x(e), (null != e.username || null != e.date_of_birth) && T(0));
    }
    function R(e) {
        x((t) => {
            if (null == t[e]) return t;
            let n = { ...t };
            return (delete n[e], n);
        });
    }
    function O(e) {
        (a(e), R("username"));
    }
    function D(e) {
        let t = e === o || (null != e && null != o && e.isSame(o, "day"));
        (d(e), t || R("date_of_birth"));
    }
    function k(e) {
        (m(e), R("email"));
    }
    function w(e) {
        (A(e), R("password"));
    }
    return (
        u.useEffect(() => {
            p.A.getLocationMetadata();
        }, []),
        (0, c.jsx)(tV.N, {
            theme: L.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, c.jsx)("div", {
                    ref: S,
                    "data-theme": L.NJ8.DARK,
                    className: B()(nd.MY, e),
                    children: N
                        ? (0, c.jsx)(nC, { invite: t, onOpenApp: i, deferredJoinErrorCode: v })
                        : (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(ng, { invite: t, kicker: 1 === l ? Q.intl.string(Q.t.dzGILG) : void 0 }),
                                  (0, c.jsx)("div", {
                                      className: nd.rf,
                                      children:
                                          0 === l
                                              ? (0, c.jsx)(nN, {
                                                    username: r,
                                                    parsedDateOfBirth: o,
                                                    apiErrors: E,
                                                    onUsernameChange: O,
                                                    onDateOfBirthChange: D,
                                                    onNext: () => T(1),
                                                    onOpenApp: n,
                                                })
                                              : (0, c.jsx)(nh, {
                                                    invite: t,
                                                    username: r,
                                                    parsedDateOfBirth: o,
                                                    email: h,
                                                    password: g,
                                                    consent: j,
                                                    consentRequired: _,
                                                    apiErrors: E,
                                                    onEmailChange: k,
                                                    onPasswordChange: w,
                                                    onConsentChange: I,
                                                    onApiErrors: b,
                                                    onOpenApp: n,
                                                    onRegister: (e) => {
                                                        (y(e ?? null), C(!0));
                                                    },
                                                }),
                                  }),
                              ],
                          }),
                }),
        })
    );
}
var ny = n(127982);
function nS(e, t, n, i) {
    (e?.preventDefault(),
        b.default.track(
            L.HAw.INVITE_APP_OPENED,
            {
                invite_code: (0, eJ.m0)(t),
                guild_id: n?.guild?.id,
                channel_id: n?.channel?.id,
                inviter_id: n?.inviter?.id,
                invite_type: null != n && n?.type != null ? ty.Xd[n?.type] : void 0,
                user_is_member: null != n && null != n.guild && null != e6.A.getGuild(n.guild.id),
                size_total: n?.approximate_member_count,
                time_to_click_ms: Math.round(performance.now()),
            },
            { flush: !0 },
        ));
    let l = null != n && n.state !== L.elq.EXPIRED && n.state !== L.elq.BANNED ? t : void 0,
        s = e$.default.getFingerprint(),
        r = null != s ? s : e$.default.getId(),
        a = null != n && n?.type != null ? Number(n?.type) : void 0;
    E.Ay.openApp(l, void 0, r, void 0, { inviteType: a, didRegister: i?.didRegister });
}
function nT() {
    return (0, c.jsx)("div", { className: ny.$k, children: (0, c.jsx)(ek.y, {}) });
}
function nb(e) {
    let t = e?.state == null && e?.channel == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case L.elq.RESOLVED:
        case L.elq.ACCEPTED:
        case L.elq.APP_NOT_OPENED:
        case L.elq.APP_OPENED:
        case L.elq.ACCEPTING:
        case L.elq.APP_OPENING:
            return 1;
        case L.elq.EXPIRED:
        case L.elq.BANNED:
        case L.elq.ERROR:
            return 2;
        case L.elq.RESOLVING:
            return 0;
        default:
            (0, tn.xb)(n);
    }
}
function nR(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === L.elq.BANNED
        ? (0, c.jsx)(e7, { text: Q.intl.string(Q.t["5AkWAd"]), buttonCta: Q.intl.string(Q.t["8osdkn"]), onClick: n })
        : (0, c.jsx)(e7, { text: Q.intl.string(Q.t["usP+Mb"]), buttonCta: Q.intl.string(Q.t["8osdkn"]), onClick: n });
}
function nL(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: i, sectionClassName: l, inviteCardClassName: s = ny.qF } = e,
        { ref: r, height: a } = (0, e9.Ay)(),
        o = (0, e1.z)({ height: null != a && 0 !== a ? `${a}px` : `${i}px`, config: e0.config.stiff });
    return (0, c.jsxs)(e0.animated.div, {
        className: s,
        style: o,
        children: [
            (0, c.jsx)(e0.animated.div, {
                className: ny.NS,
                style: o,
                children: (0, c.jsx)("section", { ref: r, className: l, children: t }),
            }),
            n,
        ],
    });
}
function nO(e) {
    let { invite: t } = e;
    if (null == t || !tp(t)) return null;
    let n = nb(t);
    return (0, c.jsx)(nL, {
        startAnimHeightPx: 0,
        sectionClassName: ny.ui,
        children: 1 === n ? (0, c.jsx)(tP, { invite: t }) : null,
    });
}
let nD = { 1: ny._r, 2: ny.Gm, 0: ny.Kt };
function nk(e) {
    let t,
        { invite: n } = e,
        i = nb(n),
        l = u.useRef(!1);
    if (
        (u.useEffect(() => {
            l.current ||
                (null != n &&
                    1 === i &&
                    ((l.current = !0),
                    b.default.track(L.HAw.INVITE_ACCEPT_BUTTON_RENDERED, {
                        invite_code: n.code,
                        guild_id: n.guild?.id,
                        duration_ms_since_page_load: Math.round(performance.now()),
                    })));
        }, [n, i]),
        null == n)
    )
        t = (0, c.jsx)(nT, {});
    else
        switch (i) {
            case 1:
                t = (0, c.jsx)(tM, { ...e, invite: n });
                break;
            case 2:
                t = (0, c.jsx)(nR, { ...e, invite: n });
                break;
            default:
                t = (0, c.jsx)(nT, {});
        }
    return (0, c.jsx)(nL, { startAnimHeightPx: 200, sectionClassName: nD[i], inviteCardClassName: ny.qF, children: t });
}
function nw(e) {
    let { invite: t } = e,
        [n, i] = u.useState(null);
    return (u.useLayoutEffect(() => {
        let e;
        null == n &&
            null != t &&
            1 === nb(t) &&
            i(
                ((e = t.guild_experiments?.["2026-08-mweb-invite-registration"]),
                e?.variation === 1 && !e$.default.isAuthenticated() && null != t.guild && null == t.target_application),
            );
    }, [t, n]),
    !0 === n)
        ? (0, c.jsx)(nv, {
              invite: t,
              onOpenApp: e.onAcceptInvite,
              onOpenAppAfterRegistration: e.onOpenAppAfterRegistration,
          })
        : (0, c.jsx)(nP, { ...e });
}
function nP(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = t ?? {},
        l = {};
    if (i?.splash != null) {
        let e = tt.Ay.getGuildSplashURL({ id: i.id, splash: i.splash });
        null != e && ((l.backgroundImage = `url(${e})`), (l.backgroundSize = "cover"));
    }
    return (0, c.jsxs)(w.Ay, {
        theme: L.NJ8.DARK,
        className: ny.G3,
        style: l,
        contentClassName: ny.__,
        children: [(0, c.jsx)(nk, { ...e, onAcceptInvite: n }), (0, c.jsx)(nO, { ...e })],
    });
}
var nG = n(723702);
function nU(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s, height: r, className: a, style: o } = e,
        d = u.useMemo(
            () => (0, eb.H)({ width: s, height: r, intrinsicWidth: 288, intrinsicHeight: 192, style: o }),
            [s, r, o],
        );
    return (0, c.jsx)("img", {
        style: d,
        src: "https://cdn.discordapp.com/assets/content/575199861cc3c18cdeb6745807591de54ce1ce9ddad5bae636a5737664545aa0.svg",
        className: (0, eb.Z)(a),
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var nB = n(474545),
    nF = n(604880);
function nM(e) {
    let { token: t, hasError: n, errorReason: i } = e;
    return n
        ? (0, c.jsxs)("div", {
              className: nB.MY,
              children: [
                  (0, c.jsx)("div", { className: nB.r$, children: (0, c.jsx)("img", { src: nF, alt: "" }) }),
                  (0, c.jsxs)("div", {
                      className: nB.Qs,
                      children: [
                          (0, c.jsx)(nU, { alt: "" }),
                          (0, c.jsx)(ew.D, {
                              variant: "heading-lg/semibold",
                              className: nB.ky,
                              children: Q.intl.string(Q.t.RtCSr1),
                          }),
                          (0, c.jsx)(F.E, {
                              variant: "body-md/normal",
                              className: nB.G3,
                              children: Q.intl.string(Q.t["S+YjYJ"]),
                          }),
                          (0, c.jsx)(M.$, {
                              variant: "primary",
                              text: Q.intl.string(Q.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  (b.default.track(L.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: i }),
                                      (0, eU.pX)(L.BVt.LOGIN));
                              },
                          }),
                      ],
                  }),
              ],
          })
        : (0, c.jsxs)("div", {
              className: nB.MY,
              children: [
                  (0, c.jsx)("div", { className: nB.r$, children: (0, c.jsx)("img", { src: nF, alt: "" }) }),
                  (0, c.jsxs)("div", {
                      className: nB.Qs,
                      children: [
                          (0, c.jsx)(nU, { alt: "" }),
                          (0, c.jsx)(ew.D, {
                              variant: "heading-lg/semibold",
                              className: nB.ky,
                              children: Q.intl.string(Q.t["9h/0Rl"]),
                          }),
                          (0, c.jsx)(F.E, {
                              variant: "body-md/normal",
                              className: nB.G3,
                              children: Q.intl.string(Q.t.Wgm7Om),
                          }),
                          (0, c.jsx)(M.$, {
                              variant: "primary",
                              text: Q.intl.string(Q.t.NydsTd),
                              fullWidth: !0,
                              onClick: () => {
                                  let e, n;
                                  ((e = (function (e) {
                                      let t = platform.os?.family;
                                      if ("Android" === t || "iOS" === t) {
                                          let t = e$.default.getFingerprint(),
                                              n = (0, eX.I_)(),
                                              i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/login/one-time?token=${e}`;
                                          return (0, eX.Ay)(i, {
                                              utmSource: "one-time-login",
                                              fingerprint: t,
                                              attemptId: n,
                                          });
                                      }
                                      return "discord://";
                                  })(t)),
                                      (n = (0, eX.X7)(e)),
                                      b.default.track(L.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                                          detection_type: "mobile_button_clicked",
                                          device_type: m.Fr ? "mobile" : "tablet",
                                          platform: b.default.getSuperProperties()?.os,
                                      }),
                                      null != n &&
                                          b.default.track(L.HAw.DEEP_LINK_CLICKED, {
                                              fingerprint: (0, eY.v)(n.fingerprint),
                                              attempt_id: n.attemptId,
                                              source: n.utmSource,
                                          }),
                                      eZ.A.launch(e, (e) => {
                                          e || (0, eU.bG)({ pathname: L.BVt.LOGIN });
                                      }));
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var nV = n(613057);
function nH(e) {
    let { title: t, subtitle: n, buttonText: i, buttonOnClick: l } = e;
    return (0, c.jsx)(w.Ay, {
        children: (0, c.jsxs)(eD.B, {
            gap: 24,
            children: [
                (0, c.jsxs)(eD.B, {
                    gap: 8,
                    children: [(0, c.jsx)(w.hE, { children: t }), (0, c.jsx)(w.tK, { children: n })],
                }),
                (0, c.jsx)(M.$, { onClick: l, text: i, fullWidth: !0 }),
            ],
        }),
    });
}
var nW = n(463347),
    nK = n(189213),
    nQ = n(192308),
    nq = n(347704),
    nz = n(803306),
    nX = n(17372),
    nY = n(369053),
    n$ = n(975571),
    nZ = n(928658);
async function nJ(e, t) {
    try {
        await (0, nY.TP)(e, t);
    } catch (e) {
        if (null != e && "object" == typeof e && 429 === e.status)
            throw { status: 429, body: { message: Q.intl.string(Q.t.Z2hIUf) } };
        throw e;
    }
}
function n0(e, t) {
    let i = !1;
    function l() {
        i || t?.();
    }
    function s(s) {
        function r() {
            return nJ(e, s);
        }
        async function a(t) {
            return await (0, nY.G_)(e, s, t);
        }
        function o(n) {
            ((i = !0),
                setTimeout(() => {
                    i = !1;
                }, 0));
            let l = n?.token;
            switch (e) {
                case nX.tY.MESSAGE:
                    (0, nZ.bM)(l, t);
                    break;
                case nX.tY.USER:
                    (0, nZ.nQ)(l, t);
                    break;
                case nX.tY.GUILD:
                    (0, nZ.V3)(l, t);
                    break;
                case nX.tY.MEDIA_TAKEDOWN:
                    (0, nZ._Y)(l, t);
            }
        }
        ((i = !0),
            setTimeout(() => {
                i = !1;
            }, 0),
            (0, nQ.mM)(
                async () => {
                    let { default: e } = await Promise.all([n.e(932606), n.e(919840)]).then(n.bind(n, 79779));
                    return (t) =>
                        (0, c.jsx)(e, {
                            ...t,
                            onFormSubmit: a,
                            onResend: r,
                            onSuccess: o,
                            headerText: Q.intl.string(Q.t.H3Q7U8),
                            confirmButtonText: Q.intl.string(Q.t["13ofGu"]),
                            impression: { impressionName: h.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            ));
    }
    return function () {
        function t(t) {
            return nJ(e, t);
        }
        ((0, nQ.s7)(),
            (0, nQ.mM)(
                async () => {
                    let { default: i } = await n.e(429232).then(n.bind(n, 180275));
                    return (n) =>
                        (0, c.jsx)(i, {
                            ...n,
                            onFormSubmit: t,
                            onSuccess: s,
                            headerText: Q.intl.string(Q.t.ZLRYGU),
                            confirmButtonText: Q.intl.string(Q.t.PDTjLN),
                            subtitle: e === nX.tY.MEDIA_TAKEDOWN ? Q.intl.string(Q.t.jt3z8f) : void 0,
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            ));
    };
}
var n1 = n(939249),
    n2 = n(921853),
    n4 = n(43008);
let n8 = { [nX.tY.MESSAGE]: Q.t.fuqnBC, [nX.tY.USER]: Q.t.F4jrRW, [nX.tY.GUILD]: Q.t.gH3aMs },
    n3 = (e) => {
        let { title: t, menuType: n, onReopen: i } = e,
            l = u.useCallback(() => {
                n0(n, i)();
            }, [n, i]);
        return (0, c.jsxs)(n1.D, {
            className: n4.b0,
            onClick: l,
            children: [
                (0, c.jsx)(F.E, { variant: "body-md/medium", children: t }),
                (0, c.jsx)(n2.ChevronSmallLeftIcon, { size: "sm", style: { transform: "rotate(180deg)" } }),
            ],
        });
    },
    n7 = (e) => {
        let { dsaCapabilities: t, onReopen: n } = e;
        return (0, c.jsx)(eD.B, {
            gap: 16,
            children: (0, c.jsx)("div", {
                className: n4.kL,
                children: t.map((e) =>
                    e === nX.tY.MEDIA_TAKEDOWN || null == n8[e]
                        ? null
                        : (0, c.jsx)(n3, { title: Q.intl.string(n8[e]), menuType: e, onReopen: n }, e),
                ),
            }),
        });
    };
var n5 = n(881636);
let n9 = "https://stopncii.org/partners/global-network-of-partners/",
    n6 = {
        [nX.sl.TIDA]: {
            selectionLabel: Q.t.jMSjZL,
            selectionDescription: Q.t.qEaUPS,
            helpBody: Q.t.R2Q57u,
            supportOrgURL: n9,
        },
        [nX.sl.UK_STOPNCII]: {
            selectionLabel: Q.t.jMSjZL,
            selectionDescription: Q.t.J0tNny,
            helpBody: Q.t.R2Q57u,
            supportOrgURL: n9,
        },
        [nX.sl.BRAZIL_ONLINE_SAFETY_OF_WOMEN]: {
            selectionLabel: Q.t.jMSjZL,
            selectionDescription: Q.t.nYb8xq,
            helpBody: Q.t.rtm4DR,
            supportOrgURL: "https://discord.findahelpline.com/countries/br",
        },
    };
function ie(e) {
    return (0, nX.c7)(e) ? n6[e] : n6[nX.sl.TIDA];
}
var it = (((s = {}).SELECTION = "selection"), (s.DSA = "dsa"), (s.TIDA = "tida"), s),
    ii = n(138658);
let il = (e) => {
    let { mediaTakedownRegulation: t } = e,
        { goToStep: n } = (0, nq.n)(),
        { selectionLabel: i, selectionDescription: l } = ie(t),
        s = u.useCallback(() => {
            n(it.DSA);
        }, [n]),
        r = u.useCallback(() => {
            n(it.TIDA);
        }, [n]);
    return (0, c.jsxs)(eD.B, {
        gap: 8,
        children: [
            (0, c.jsx)(F.E, { variant: "body-md/normal", children: Q.intl.string(Q.t.bd1h5T) }),
            (0, c.jsxs)("div", {
                className: ii.k,
                children: [
                    (0, c.jsxs)(n1.D, {
                        className: ii.b,
                        onClick: s,
                        children: [
                            (0, c.jsxs)("div", {
                                children: [
                                    (0, c.jsx)(F.E, {
                                        variant: "body-md/medium",
                                        children: Q.intl.string(Q.t["AszWL/"]),
                                    }),
                                    (0, c.jsx)(F.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children: Q.intl.string(Q.t["0Jikui"]),
                                    }),
                                ],
                            }),
                            (0, c.jsx)(n5.ChevronLargeRightIcon, { size: "sm" }),
                        ],
                    }),
                    (0, c.jsxs)(n1.D, {
                        className: ii.b,
                        onClick: r,
                        children: [
                            (0, c.jsxs)("div", {
                                children: [
                                    (0, c.jsx)(F.E, { variant: "body-md/medium", children: Q.intl.string(i) }),
                                    (0, c.jsx)(F.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children: Q.intl.string(l),
                                    }),
                                ],
                            }),
                            (0, c.jsx)(n5.ChevronLargeRightIcon, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var is = n(108124);
let ir = (e) => {
    let { helpBody: t, supportOrgURL: n } = e;
    return (0, c.jsxs)(eD.B, {
        gap: 24,
        children: [
            (0, c.jsx)(F.E, {
                variant: "body-md/normal",
                color: "text-subtle",
                children: Q.intl.string(Q.t["3zG2Y9"]),
            }),
            (0, c.jsxs)(eD.B, {
                gap: 16,
                children: [
                    (0, c.jsxs)(eD.B, {
                        gap: 8,
                        children: [
                            (0, c.jsx)(F.E, { variant: "body-md/semibold", children: Q.intl.string(Q.t.CfBo0z) }),
                            (0, c.jsxs)("ul", {
                                className: is.T,
                                children: [
                                    (0, c.jsx)("li", {
                                        children: (0, c.jsx)(F.E, {
                                            variant: "body-md/normal",
                                            color: "text-subtle",
                                            children: Q.intl.string(Q.t.ofQnNQ),
                                        }),
                                    }),
                                    (0, c.jsx)("li", {
                                        children: (0, c.jsx)(F.E, {
                                            variant: "body-md/normal",
                                            color: "text-subtle",
                                            children: Q.intl.string(Q.t.dFaQGn),
                                        }),
                                    }),
                                    (0, c.jsx)("li", {
                                        children: (0, c.jsx)(F.E, {
                                            variant: "body-md/normal",
                                            color: "text-subtle",
                                            children: Q.intl.string(Q.t.RVNwXh),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, c.jsx)(F.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        children: Q.intl.string(Q.t.o5azXJ),
                    }),
                    (0, c.jsx)(F.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        children: Q.intl.format(Q.t.YETtaY, {
                            policyURL: "https://discord.com/safety/non-consensual-intimate-media-policy-explainer",
                        }),
                    }),
                ],
            }),
            (0, c.jsxs)(eD.B, {
                gap: 8,
                children: [
                    (0, c.jsx)(F.E, { variant: "body-md/semibold", children: Q.intl.string(Q.t.FJh2zi) }),
                    (0, c.jsx)(F.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        children: Q.intl.format(t, {
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
var ia = n(379492);
f.Ay.initialize();
let io = (e) => {
        let { transitionState: t, onClose: n } = e,
            [i, l] = u.useState(!0),
            [s, r] = u.useState([]),
            [a, o] = u.useState(null),
            [d, h] = u.useState(null),
            m = (0, f.bG)([e$.default], () => e$.default.isAuthenticated()),
            g = (0, f.bG)([ev.A], () => ev.A.hasLoadedExperiments),
            A = u.useCallback(() => {
                (0, nY.OY)()
                    .then((e) => {
                        let { capabilities: t, media_takedown_regulation: n } = e;
                        (l(!1), r(t), o(n));
                    })
                    .catch(() => {
                        (l(!1), r([]), o(null));
                    });
            }, []);
        (u.useEffect(() => {
            m
                ? (l(!0),
                  nz
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => A())
                      .catch(() => l(!1)))
                : A();
        }, [m, A]),
            u.useEffect(() => {
                !(async function () {
                    g || (await p.A.getLocationMetadata(), p.A.getExperiments());
                })();
            }, [g]));
        let { helpBody: E, supportOrgURL: x } = ie(a),
            _ = s.filter((e) => e !== nX.tY.MEDIA_TAKEDOWN),
            j = s.includes(nX.tY.MEDIA_TAKEDOWN),
            I = _.length > 0,
            N = I && j,
            C = i || !g;
        u.useEffect(() => {
            C || I || j || n();
        }, [C, I, j, n]);
        let v = u.useCallback(() => {
                (0, nQ.mM)(() => Promise.resolve((e) => (0, c.jsx)(io, { ...e })), { dismissable: !1 });
            }, []),
            y = u.useCallback((e, t) => {
                t !== it.SELECTION && e !== it.SELECTION ? h(it.SELECTION) : h(e);
            }, []),
            S = u.useMemo(() => n0(nX.tY.MEDIA_TAKEDOWN, v), [v]),
            T = d ?? (N ? it.SELECTION : I ? it.DSA : it.TIDA);
        if (C || (!I && !j))
            return (0, c.jsx)(nK.a, {
                title: "",
                actions: [],
                transitionState: t,
                onClose: n,
                dismissable: !1,
                children: (0, c.jsx)(eD.B, {
                    gap: 16,
                    align: "center",
                    justify: "center",
                    style: { minHeight: "200px" },
                    children: (0, c.jsx)(ek.y, {}),
                }),
            });
        if (!N) {
            if (I)
                return (0, c.jsx)(nK.a, {
                    title: Q.intl.string(Q.t.Z11w18),
                    subtitle: Q.intl.format(Q.t["532l+q"], {
                        supportURL: n$.A.getArticleURL(L.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, c.jsx)(n7, { dsaCapabilities: _, onReopen: v }),
                });
            if (j)
                return (0, c.jsx)(nK.a, {
                    title: Q.intl.string(Q.t.YignUm),
                    actions: [{ text: Q.intl.string(Q.t.D5Czbu), variant: "primary", onClick: S }],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, c.jsx)(ir, { helpBody: E, supportOrgURL: x }),
                });
        }
        let b = [
            {
                stepKey: it.SELECTION,
                modalProps: { title: Q.intl.string(Q.t.Z11w18) },
                body: (0, c.jsx)(il, { mediaTakedownRegulation: a }),
            },
            {
                stepKey: it.DSA,
                modalProps: {
                    title: Q.intl.string(Q.t.Z11w18),
                    subtitle: Q.intl.format(Q.t["532l+q"], {
                        supportURL: n$.A.getArticleURL(L.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, c.jsx)(n7, { dsaCapabilities: _, onReopen: v }),
            },
            {
                stepKey: it.TIDA,
                modalProps: { title: Q.intl.string(Q.t.YignUm) },
                body: (0, c.jsx)(ir, { helpBody: E, supportOrgURL: x }),
                nextButtonProps: { text: Q.intl.string(Q.t.D5Czbu) },
                onNext: () => (S(), !1),
            },
        ];
        return (0, c.jsx)("div", {
            className: { [it.SELECTION]: ia.a, [it.DSA]: ia.q, [it.TIDA]: void 0 }[T],
            children: (0, c.jsx)(nq.t, {
                steps: b,
                currentStepKey: T,
                onStepChange: y,
                onClose: n,
                transitionState: t,
                dismissable: !1,
            }),
        });
    },
    ic = () => (
        u.useEffect(() => {
            (0, nQ.mM)(() => Promise.resolve((e) => (0, c.jsx)(io, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
var iu = n(30793),
    id = n(913659),
    ih = n(162252);
let im = {
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
    getTimeSinceNavigationStart: () => Date.now() - ih.fL,
};
var ig = n(649852),
    ip = n.n(ig),
    iA = n(615300),
    iE = n(319060),
    ix = n(844222),
    i_ = n(240248),
    ij = n(706192);
let iI = (0, i_.xI)(iE.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    iN = { friction: 10, tension: 130 },
    iC = function (e) {
        return class extends u.Component {
            timeout;
            anim = new iA.A.Value(0);
            state = { shouldAnimate: !m.Fr };
            componentDidMount() {
                m.Fr || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize());
            }
            handleResize = () => {
                let e = window.innerWidth > iI;
                (!this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({ shouldAnimate: e }));
            };
            handleResizeDebounced = ip()(this.handleResize, 60);
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
                iA.A.spring(this.anim, { toValue: e, ...iN }).start(t);
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
                return (0, c.jsx)("div", {
                    className: ij.i,
                    children: (0, c.jsx)(ix.C.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, c.jsx)(iA.A.div, {
                                className: ij.l,
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, c.jsx)(e, { ...this.props }),
                            });
                        },
                    }),
                });
            }
        };
    };
var iv = n(603647),
    iy = n(970672),
    iS = n(129014),
    iT = n(642277);
let ib = function (e) {
    let { match: t, location: n, attemptDeepLink: i } = e,
        [l, s] = u.useState(0);
    (u.useEffect(() => {
        (iS.default.once("connected", () => {
            s(1);
        }),
            iS.default.once("disconnected", () => {
                (0, eU.pX)((0, iT.W)());
            }),
            iS.default.connect());
    }, []),
        u.useEffect(() => {
            if (0 !== l) return;
            let e = setTimeout(() => (0, eU.pX)((0, iT.W)()), 3e3);
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
    if ((0, eU.MX)()) return null;
    switch (l) {
        case 1:
            return (0, c.jsxs)(w.Ay, {
                children: [
                    (0, c.jsx)(w.hE, { className: z.QB, children: Q.intl.string(Q.t.qllnGm) }),
                    (0, c.jsx)(w.tK, { children: Q.intl.string(Q.t.SXCxye) }),
                    (0, c.jsx)("div", {
                        className: z.eT,
                        children: (0, c.jsx)(M.$, {
                            text: Q.intl.string(Q.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => r(t, n),
                        }),
                    }),
                    (0, c.jsx)("div", {
                        className: B()(z.Ot, z.F1),
                        children: (0, c.jsx)(eu.Q, {
                            text: Q.intl.string(Q.t["2ixEBi"]),
                            textVariant: "body-sm/normal",
                            onClick: () => (0, eU.pX)((0, iT.W)()),
                        }),
                    }),
                ],
            });
        case 0:
        case 2:
            return (0, c.jsxs)(w.Ay, {
                children: [(0, c.jsx)(w.hE, { children: Q.intl.string(Q.t["Z+hCVU"]) }), (0, c.jsx)(w.CK, {})],
            });
        case 3:
            return (0, c.jsxs)(w.Ay, {
                children: [
                    (0, c.jsx)(w.hE, { className: z.QB, children: Q.intl.string(Q.t.csrAMJ) }),
                    (0, c.jsx)(w.tK, { children: Q.intl.string(Q.t.ghBJz9) }),
                ],
            });
    }
};
var iR = n(723923);
f.Ay.initialize();
class iL extends u.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, em.A)(this.props.location),
            t = (0, d.qg)(this.props.location.search);
        (x.Bo.post({
            url: L.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, category: t.category, email_type: t.email_type },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { user: n },
                    } = e,
                    i = new tC.A(n);
                this.setState({ success: !0, busy: !1, user: i, category: t.category });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, P.d0)("disable_email_notifications"));
    }
    renderBusy() {
        return (0, c.jsx)(w.Ay, { children: (0, c.jsx)(w.CK, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: i } = this.props,
            l = Q.intl.formatToPlainString(Q.t.YDAohB, { category: t });
        return (0, c.jsxs)(w.Ay, {
            children: [
                (0, c.jsx)(w.hE, { className: z.QB, children: Q.intl.string(Q.t.f6rdLg) }),
                (0, c.jsx)(w.tK, { children: l }),
                (0, c.jsx)("div", {
                    className: z.QX,
                    children: (0, c.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => i(n) }),
                }),
                (0, c.jsx)("div", {
                    className: z.Ot,
                    children: (0, c.jsx)(eu.Q, {
                        text: Q.intl.string(Q.t.YYTirT),
                        textVariant: "body-sm/normal",
                        onClick: () => i((0, N.T)(v.od.NOTIFICATIONS_EMAILS)),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: i } = this.state;
        if (null != i) {
            let e = iR.px.find((e) => e.category === i);
            if (null != e) return this.renderCategorySuccess(i, e.label());
        }
        return (0, c.jsxs)(w.Ay, {
            children: [
                (0, c.jsx)(w.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: tl._3.DEPRECATED_SIZE_100,
                    className: z.SX,
                }),
                (0, c.jsx)(w.hE, { className: z.QB, children: Q.intl.string(Q.t["6U6OMQ"]) }),
                (0, c.jsx)(w.tK, { children: Q.intl.string(Q.t["yaDJ4/"]) }),
                (0, c.jsx)("div", {
                    className: z.eT,
                    children: (0, c.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, c.jsxs)(w.Ay, {
            children: [
                (0, c.jsx)(w._V, { src: n(37772), className: z.SX }),
                (0, c.jsx)(w.hE, { className: z.QB, children: Q.intl.string(Q.t.ox9hIS) }),
                (0, c.jsx)(w.tK, { children: Q.intl.string(Q.t["/dcuR5"]) }),
                (0, c.jsx)("div", {
                    className: z.eT,
                    children: (0, c.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let iO = f.Ay.connectStores([ed.A], () => ({ defaultRoute: ed.A.defaultRoute }))(iL);
var iD = n(110782),
    ik = n(10088),
    iw = n(153626),
    iP = n(84740),
    iG = n(871123),
    iU = n(189081),
    iB = n(97352),
    iF = n(67480),
    iM = n(45938),
    iV = n(587895),
    iH = n(242874),
    iW = n(446263),
    iK = n(287809),
    iQ = n(615396),
    iq = n(682901),
    iz = n(716592);
function iX() {
    return (0, c.jsxs)(u.Fragment, {
        children: [
            (0, c.jsx)(w.eu, { src: null, size: tl._3.DEPRECATED_SIZE_100, className: z.SX }),
            (0, c.jsx)(w.tK, { children: Q.intl.string(Q.t.lTGZAl) }),
            (0, c.jsx)(w.hE, { className: B()(z.Ot, ej.tR), children: Q.intl.string(Q.t.ZTNur7) }),
        ],
    });
}
let iY = f.Ay.connectStores([iF.A, iV.A, iB.A, iK.default], (e) => {
    let { giftCode: t } = e,
        n = iF.A.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, iQ.c9)(i) : null,
        application: null != n ? iV.A.getApplication(n.applicationId) : null,
        gifter: iK.default.getUser(t.userId),
    };
})(function (e) {
    let { error: t, giftCode: n, gifter: i, sku: l, application: s, subscriptionPlan: r } = e,
        a = null == i ? Q.intl.string(Q.t.lTGZAl) : Q.intl.formatToPlainString(Q.t.TjWdPc, { username: i.username });
    if (null == l) return (0, c.jsx)(iX, {});
    let o = l.name;
    return (
        null != r &&
            (o = Q.intl.formatToPlainString(r.interval === iq.WT.MONTH ? Q.t.CTpcCZ : Q.t["rgPWG/"], {
                skuName: l.name,
                intervalCount: r.intervalCount,
            })),
        (0, c.jsxs)(u.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, c.jsx)(iW.A, { defaultAnimationState: iH.oA.LOOP, giftStyle: n.giftStyle, className: iz.e })
                    : (0, c.jsx)(w.eu, {
                          src: null != i ? i.getAvatarURL(void 0, 100) : null,
                          size: tl._3.DEPRECATED_SIZE_100,
                          className: z.SX,
                      }),
                null != t
                    ? (0, c.jsxs)(u.Fragment, {
                          children: [
                              (0, c.jsx)(w.tK, { children: Q.intl.string(Q.t.mDFGFj) }),
                              (0, c.jsx)(w.hE, { children: t }),
                          ],
                      })
                    : (0, c.jsxs)(u.Fragment, {
                          children: [
                              (0, c.jsx)(w.tK, { children: a }),
                              (0, c.jsxs)(w.hE, {
                                  className: B()(z.Ot, ej.tR),
                                  children: [
                                      l.productLine !== L.EZt.COLLECTIBLES &&
                                          (0, c.jsx)(tr.A, {
                                              size: tr.M.MEDIUM,
                                              className: iz.I,
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
        r = t === L.aUe.ACCOUNT_DISABLED,
        a = r ? Q.intl.string(Q.t["j3rC+U"]) : Q.intl.string(Q.t.ZFWofo),
        o = r ? Q.intl.string(Q.t["6eNTWe"]) : Q.intl.string(Q.t["pCBti+"]);
    return (0, c.jsx)(w.Ay, {
        tag: "form",
        onSubmit: l,
        className: n,
        transparent: i,
        children: (0, c.jsxs)(iJ.F, {
            component: (0, c.jsx)(w.hE, { className: z.QB, children: a }),
            children: [
                (0, c.jsx)(w.tK, { className: z.SX, children: o }),
                (0, c.jsxs)(w.eB, {
                    children: [
                        (0, c.jsx)(M.$, { text: Q.intl.string(Q.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, c.jsx)("div", {
                            className: B()(z.Ot, i0.Qt),
                            children: Q.intl.format(Q.t.js2rr5, { onClick: s }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var i2 = n(700156),
    i4 = n(785161),
    i8 = n(228916);
function i3(e) {
    let { children: t, className: n, ...i } = e,
        l = t();
    return (0, c.jsx)(w.Ay, {
        ...i,
        className: B()(n, i8.kL),
        contentClassName: i8.Qs,
        children: l.map((e, t) =>
            (0, c.jsx)("div", { className: i8.fi, style: { flexBasis: `${100 / l.length}%` }, children: e }, t),
        ),
    });
}
var i7 = n(895600),
    i5 = n(506774),
    i9 = n(104798),
    i6 = n(991512);
let le = "mweb_handoff_nonce",
    lt = "mweb_handoff_nonce_expiration",
    ln = +tz.A.Millis.MINUTE,
    li = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    ll = new Set(["deep_link_failed"]);
function ls() {
    (i5.w.remove(le), i5.w.remove(lt));
}
let lr = () => {
    let e = (0, f.bG)([e$.default], () => e$.default.getFingerprint()),
        { fingerprint: t, handoff_token: n } = (0, d.qg)(window.location.search),
        i = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
        l = i ?? (null !== e ? e : void 0);
    u.useEffect(() => {
        null !== i && e !== i && _.h.dispatch({ type: "FINGERPRINT", fingerprint: i });
    }, [i, e]);
    let [s, r] = u.useState(null),
        a = u.useCallback(
            (e) => {
                (r(e),
                    b.default.track(
                        L.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                        { reason: e, fingerprint: (0, eY.v)(l) },
                        { fingerprint: l },
                    ));
            },
            [r, l],
        ),
        o = i5.w.get(le);
    if (
        ("null" === n && null === s && a("deep_link_failed"),
        null != n && "null" !== n && null == o && null === s && a("nonce_missing"),
        u.useEffect(() => {
            if (null != o) {
                let e = i5.w.get(lt);
                (null == e || Date.now() >= e) && (a("nonce_expired"), ls());
            }
        }, [o, a]),
        u.useEffect(() => {
            null != n &&
                "null" !== n &&
                null != o &&
                null == s &&
                x.Bo.post({ url: L.Rsh.HANDOFF_EXCHANGE, body: { key: o, handoff_token: n }, rejectWithError: !0 })
                    .then((e) => p.A.loginToken(e.body.token, !1))
                    .then(() => {
                        b.default.track(L.HAw.LOGIN_SUCCESSFUL, {
                            source: L.mdB.MOBILE_WEB_HANDOFF,
                            is_new_user: !1,
                            fingerprint: (0, eY.v)(l),
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
    let h =
        null == s
            ? (0, c.jsxs)(c.Fragment, {
                  children: [Q.intl.string(Q.t.uJ1JsY), (0, c.jsx)("br", {}), Q.intl.string(Q.t.GHVWAs)],
              })
            : ll.has(s)
              ? Q.intl.string(Q.t.EPt55r)
              : li.has(s)
                ? Q.intl.string(Q.t.g87kTp)
                : void 0;
    return null != s && ll.has(s)
        ? (0, c.jsx)("div", {
              className: i6.Un,
              children: (0, c.jsx)(F.E, {
                  color: "interactive-text-default",
                  variant: "body-sm/semibold",
                  children: h,
              }),
          })
        : (0, c.jsxs)("div", {
              className: i6.kL,
              children: [
                  (0, c.jsx)(F.E, { variant: "body-sm/semibold", children: h }),
                  (0, c.jsx)(M.$, {
                      variant: "overlay-primary",
                      text: Q.intl.string(Q.t.NcC759),
                      onClick: function () {
                          let e = i9.A.generateNonce();
                          (i5.w.set(le, e), i5.w.set(lt, Date.now() + ln));
                          let t = new URL(L.J$u),
                              n = new URLSearchParams(window.location.search);
                          (n.delete("fingerprint"), n.delete("handoff_token"));
                          let i = new URLSearchParams();
                          (i.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                              i.set("key", e),
                              i.set("fingerprint", l),
                              (t.search = i.toString()),
                              b.default.track(
                                  L.HAw.DEEP_LINK_CLICKED,
                                  { fingerprint: (0, eY.v)(l), source: "mobile_web_handoff", destination: L.J$u },
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
        (0, lo.A)({ type: h.ImpressionTypes.MODAL, name: h.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, c.jsxs)(w.Ay, {
            className: lu.ci,
            transparent: n,
            children: [
                !n && (0, c.jsx)(w.hE, { children: Q.intl.string(Q.t.bVbB63) }),
                (0, c.jsx)(F.E, {
                    className: lu.PK,
                    variant: "body-md/normal",
                    color: "text-default",
                    children: Q.intl.string(Q.t["0M5fN7"]),
                }),
                (0, c.jsx)(lc.A, {
                    actionText: Q.intl.string(Q.t["DSN+hw"]),
                    onAction: (e) => {
                        e === lc.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, c.jsx)("div", {
                    className: lu.o1,
                    children: (0, c.jsx)(eu.Q, {
                        variant: "secondary",
                        size: "md",
                        textVariant: "body-sm/medium",
                        text: Q.intl.string(Q.t["9g2mqT"]),
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
    return (0, c.jsxs)(w.Ay, {
        className: t,
        children: [
            (0, c.jsx)(i2.M, {}),
            (0, c.jsxs)(w.eB, {
                className: z.QX,
                children: [
                    (0, c.jsx)(e_.A, {
                        className: z.SX,
                        alpha2: n.alpha2,
                        countryCode: n.code.split(" ")[0],
                        label: Q.intl.string(Q.t.tUjnxr),
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
                    (0, c.jsx)(w.pd, {
                        className: z.SX,
                        label: Q.intl.string(Q.t["CIGa+7"]),
                        onChange: r,
                        type: "password",
                        revealable: !0,
                        setRef: o,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        value: l,
                        required: !0,
                    }),
                    (0, c.jsx)("div", {
                        className: z.QB,
                        children: (0, c.jsx)(M.$, {
                            text: Q.intl.string(Q.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, c.jsx)(eu.Q, { text: Q.intl.string(Q.t.wWIufs), textVariant: "body-sm/normal", disabled: !0 }),
                    (0, c.jsx)("div", {
                        className: z.a5,
                        children: (0, c.jsx)(eu.Q, {
                            text: Q.intl.string(Q.t.tmE73r),
                            textVariant: "body-sm/normal",
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
            password: h,
            errors: g,
            loginSource: p,
            dismissedChooseAccount: A,
            setDismissedChooseAccount: E,
            conditionalMediationAbortController: x,
            onLoginChange: _,
            onPasswordChange: j,
            handleLogin: I,
            handleForgotPassword: N,
            handleGotoRegister: C,
            showPasswordResetNotice: v = !1,
        } = e,
        y = (0, f.bG)([ex.A], () => ex.A.getCountryCode()),
        S = (0, f.bG)([e$.default], () => e$.default.getLoginStatus()),
        T = (0, f.bG)([e$.default], () => e$.default.getIsPasswordlessActive()),
        R = (0, f.bG)([la.A], () => la.A.getHasLoggedInAccounts()),
        O = u.useCallback(
            (e) => {
                b.default.track(L.HAw.LOGIN_SUCCESSFUL, {
                    source: L.mdB.QR_CODE,
                    login_source: p,
                    gift_code_sku_id: l?.skuId ?? null,
                    is_new_user: !1,
                    login_method: "remote_auth",
                    login_instance_id: e ?? null,
                });
            },
            [p, l],
        ),
        { handoff_token: D } = (0, d.qg)(window.location.search),
        k = m.Fr && m.KY && null != D,
        P = null == g.email && null != g.password,
        G = u.useRef(null),
        U = u.useRef(null),
        F = (0, iZ.Ay)(g);
    if (
        (u.useEffect(() => {
            function e(e) {
                return null != g[e];
            }
            null != F &&
                F !== g &&
                (e("password") ? U.current?.focus() : (e("email") || e("login")) && G.current?.focus());
        }, [g, G, U, F]),
        r)
    )
        t = null;
    else if (null != n) t = (0, c.jsx)("div", { className: z.S3, children: (0, c.jsx)(i2.A, { invite: n }) });
    else if (null != l) t = (0, c.jsx)(iY, { giftCode: l });
    else {
        let e = null;
        if (!1 === (0, nG.Ct)()) {
            let t = v ? Q.t["N9U/9X"] : Q.t.euS7r4;
            e = (0, c.jsx)(w.tK, { children: Q.intl.string(t) }, "subtitle");
        }
        t = (0, c.jsxs)("div", {
            className: i0.wx,
            children: [(0, c.jsx)(w.hE, { className: z.QB, children: Q.intl.string(Q.t["7fNJgA"]) }, "title"), e],
        });
    }
    let V = (0, c.jsxs)("div", {
        className: i0.Eh,
        children: [
            R &&
                A &&
                (0, c.jsx)("div", {
                    className: i0.AX,
                    children: (0, c.jsx)(M.$, {
                        onClick: () => E(!1),
                        variant: "secondary",
                        text: Q.intl.string(Q.t["1MrpWO"]),
                        icon: n2.ChevronSmallLeftIcon,
                    }),
                }),
            t,
            (0, c.jsx)(iJ.F, {
                children: (0, c.jsxs)(w.eB, {
                    className: z.QX,
                    children: [
                        (0, c.jsx)(e_.A, {
                            alpha2: y.alpha2,
                            countryCode: y.code.split(" ")[0],
                            className: z.SX,
                            label: Q.intl.string(Q.t.tUjnxr),
                            error: lg("login", g) ?? lg("email", g),
                            onChange: _,
                            setRef: G,
                            autoCapitalize: "none",
                            autoComplete: "username webauthn",
                            autoCorrect: "off",
                            spellCheck: "false",
                            value: o,
                            autoFocus: !P && !k && !a,
                            required: !0,
                        }),
                        (0, c.jsx)(w.pd, {
                            label: Q.intl.string(Q.t["CIGa+7"]),
                            error: lg("password", g),
                            onChange: j,
                            name: "password",
                            type: "password",
                            revealable: !0,
                            setRef: U,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            autoFocus: P && !k && !a,
                            value: h,
                            required: !0,
                        }),
                        (0, c.jsx)("div", {
                            className: B()(z.SX, z.a5),
                            children: (0, c.jsx)(eu.Q, {
                                text: Q.intl.string(Q.t.wWIufs),
                                textVariant: "body-sm/normal",
                                onClick: () => {
                                    (null != G.current && G.current.focus(), N());
                                },
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: z.QB,
                            children: (0, c.jsx)(M.$, {
                                text: Q.intl.string(Q.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                loading: S === L.aUe.LOGGING_IN,
                            }),
                        }),
                        !r &&
                            (0, c.jsx)("div", {
                                className: i0.Td,
                                children: (0, c.jsx)(eu.Q, {
                                    text: Q.intl.string(Q.t["/kpMDt"]),
                                    textVariant: "body-sm/normal",
                                    onClick: () => (0, i4.w)(x),
                                    disabled: T,
                                }),
                            }),
                        (0, c.jsxs)("div", {
                            className: z.a5,
                            children: [
                                (0, c.jsx)("span", { className: i0.Qt, children: Q.intl.string(Q.t.tmE73r) }),
                                (0, c.jsx)("span", {
                                    className: i0.Z8,
                                    children: (0, c.jsx)(eu.Q, {
                                        text: Q.intl.string(Q.t.pV8xeR),
                                        textVariant: "body-sm/normal",
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
    return null != n && n.state === L.elq.RESOLVING
        ? (0, c.jsx)(lh, {
              authBoxClassName: s,
              country: y,
              login: o,
              password: h,
              onLoginChange: _,
              onPasswordChange: j,
              loginRef: G,
              passwordRef: U,
          })
        : null != i
          ? i.state === lm.QB.RESOLVING
              ? (0, c.jsx)(lh, {
                    authBoxClassName: s,
                    country: y,
                    login: o,
                    password: h,
                    onLoginChange: _,
                    onPasswordChange: j,
                    loginRef: G,
                    passwordRef: U,
                })
              : (0, c.jsx)(i3, {
                    onSubmit: I,
                    tag: "form",
                    className: B()(s, i0.Sy),
                    children: () => [
                        (0, c.jsx)(i7.A, { guildTemplate: i }, "template"),
                        (0, c.jsx)(u.Fragment, { children: V }, "form-wrapper"),
                    ],
                })
          : R && !A
            ? (0, c.jsx)(ld, { onDismiss: () => E(!0), embedded: r })
            : (0, c.jsxs)("div", {
                  children: [
                      (0, c.jsx)(w.Ay, {
                          onSubmit: I,
                          tag: "form",
                          className: B()(s, { [i0.M0]: k }),
                          transparent: r,
                          expanded: !0,
                          children: (0, c.jsxs)(eD.B, {
                              direction: r ? "vertical" : "horizontal",
                              align: r ? "stretch" : "center",
                              gap: r ? 24 : 64,
                              children: [
                                  V,
                                  (0, c.jsx)(i4.A, {
                                      horizontal: r,
                                      onAuthenticateSuccess: O,
                                      conditionalMediationAbortController: x,
                                  }),
                              ],
                          }),
                      }),
                      k && (0, c.jsx)(lr, {}),
                  ],
              });
}
var lp = n(397404);
function lA(e) {
    let { loginSource: t, giftCodeSKUId: n, isEmbedded: i = !1 } = e,
        l = (0, f.cf)(
            [e$.default],
            () => ({ ticket: e$.default.getMFATicket(), methods: e$.default.getMFAMethods() }),
            [],
        ),
        s = u.useCallback(
            (e) => {
                let { mfaType: i, data: l, ticket: s } = e;
                return (
                    H._.dispatch(L.jej.WAVE_EMPHASIZE),
                    p.A.loginMFAv2({ code: l, ticket: s, mfaType: i, source: t, giftCodeSKUId: n })
                );
            },
            [t, n],
        );
    return (0, c.jsx)(w.Ay, {
        transparent: i,
        style: { padding: 0 },
        children: (0, c.jsx)(lp.t, {
            mfaFinish: s,
            mfaChallenge: l,
            onEarlyClose: () => {
                _.h.dispatch({ type: "LOGIN_RESET" });
            },
            embedded: i,
        }),
    });
}
var lE = n(511815),
    lx = n(139033),
    l_ = n(884529),
    lj = n(952116),
    lI = n(491509),
    lN = n(913612),
    lC = n(933924);
function lv(e) {
    let {
        invite: t,
        guildTemplate: n,
        giftCode: i,
        location: l,
        redirectTo: s,
        transitionTo: r,
        authBoxClassName: a,
        isEmbedded: o = !1,
        loginSource: h,
        disableAutofocusOnDefaultForm: m,
    } = e;
    (0, lN.K)();
    let g = (0, f.bG)([e$.default], () => e$.default.isAuthenticated()),
        A = (0, f.bG)([T.A], () => T.A.isHandoffAvailable()),
        E = (0, f.bG)([e$.default], () => e$.default.getLoginStatus()),
        _ = i?.skuId ?? null,
        I = (0, f.bG)([iF.A], () => (null != _ ? iF.A.get(_) : null)),
        {
            checkingHandoff: N,
            redirecting: C,
            login: v,
            password: y,
            phoneVerifyError: R,
            dismissedChooseAccount: O,
            setDismissedChooseAccount: D,
            errors: k,
            conditionalMediationAbortController: G,
            loginSource: U,
            loginOrSSO: B,
            handleLogin: M,
            handleIPAuthorize: V,
            handlePasswordReset: W,
            handleForgotPassword: K,
            handleResendCode: q,
            handleReset: X,
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
                    transitionTo: r = eU.pX,
                    redirectTo: a,
                    location: o,
                    loginSource: h,
                } = e,
                [m, g] = u.useState(() => l),
                [f, A] = u.useState(() => s),
                [E, _] = u.useState(""),
                [j, I] = u.useState(() => {
                    let e = null != o ? (0, d.qg)(o.search) : {};
                    return e.email ?? e.login ?? "";
                }),
                [N, C] = u.useState(""),
                [v, y] = u.useState(!1),
                [T, b] = u.useState(null),
                [R, O] = u.useState(!1),
                [D] = u.useState(() => new AbortController()),
                [k, w] = u.useState({});
            ((0, l_.A)(w), !m || l || s || g(!1));
            let P = u.useMemo(() => {
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
                U = u.useCallback(
                    (e) => {
                        let t = null != e ? (0, d.qg)(e.search) : {};
                        if ((delete t.redirect_to, null != a)) {
                            if (ec(a))
                                return void (async function (e) {
                                    let t = (0, es.A)();
                                    try {
                                        var n;
                                        let i,
                                            l,
                                            s = (
                                                await x.Bo.post({
                                                    url: L.Rsh.HANDOFF,
                                                    body: { key: t },
                                                    oldFormErrors: !0,
                                                    rejectWithError: !0,
                                                })
                                            ).body.handoff_token,
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
                                })(a);
                            r(a);
                        } else if (null == t.service) r(L.BVt.APP);
                        else {
                            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + L.Rsh.SSO,
                                n = { ...t, token: e$.default.getToken() };
                            window.location.href = `${e}?${(0, d.As)(n)}`;
                        }
                    },
                    [a, r],
                ),
                B = u.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e &&
                            null != t &&
                            (A(!0),
                            n
                                ? p.A.verifySSOToken("login", null).then(
                                      (e) => {
                                          e ? U(t) : A(!1);
                                      },
                                      () => U(t),
                                  )
                                : U(t));
                    },
                    [U],
                ),
                M = u.useCallback(() => {
                    (D.abort("Login state reset"), w({}), p.A.loginReset());
                }, [D]),
                V = u.useCallback(
                    async function (e) {
                        let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (e?.preventDefault(),
                            D.abort("Starting password login"),
                            H._.dispatch(L.jej.WAVE_EMPHASIZE),
                            w({}));
                        try {
                            await p.A.login({
                                login: E + j,
                                password: N,
                                undelete: n ?? v,
                                source: P,
                                giftCodeSKUId: G,
                                invite: t,
                            });
                        } catch (e) {
                            w((0, t3.p)(e));
                        }
                    },
                    [D, j, E, N, v, P, G, t],
                ),
                W = u.useCallback(
                    async (e) => {
                        let t = E + j;
                        w({});
                        try {
                            let { token: n } = await eA.A.verifyPhone(t, e, !1);
                            (await p.A.authorizeIPAddress(n), V());
                        } catch (e) {
                            null != e.body && null != e.body.message && b(e.body.message);
                        }
                    },
                    [E, j, V],
                ),
                K = u.useCallback(
                    async (e) => {
                        b(null);
                        try {
                            let { token: t } = await eA.A.verifyPhone(E + j, e, !1);
                            r(L.BVt.RESET, { search: (0, d.As)({ token: t, from_login: "true" }) });
                        } catch (e) {
                            null != e.body && null != e.body.message && b(e.body.message);
                        }
                    },
                    [E, j, r],
                ),
                q = u.useCallback(
                    async (e) => {
                        null != e && e.preventDefault();
                        let t = E + j;
                        w({});
                        try {
                            H._.dispatch(L.jej.WAVE_EMPHASIZE);
                            let e = await p.A.forgotPassword(t);
                            if (!1 === e) return;
                            e === lE.D.ONE_TIME_LOGIN
                                ? (0, nQ.qf)((e) => {
                                      let t = [
                                          {
                                              variant: "primary",
                                              text: Q.intl.string(Q.t.BddRzS),
                                              onClick: e.onClose,
                                              fullWidth: !0,
                                          },
                                      ];
                                      return (0, c.jsx)(nK.a, {
                                          title: Q.intl.string(Q.t["6Ecyts"]),
                                          actions: t,
                                          ...e,
                                          children: (0, c.jsx)(F.E, {
                                              variant: "body-md/normal",
                                              children: Q.intl.string(Q.t.iAcrqV),
                                          }),
                                      });
                                  })
                                : (0, lx.A)({
                                      title: Q.intl.string(Q.t.f5Pi7A),
                                      subtitle: Q.intl.format(Q.t["6u5hQ9"], { email: t }),
                                  });
                        } catch (e) {
                            w((0, t3.p)(e));
                        }
                    },
                    [E, j],
                ),
                z = u.useCallback(() => {
                    eA.A.resendCode(E + j);
                }, [E, j]),
                X = u.useCallback((e) => {
                    (null != e && e.preventDefault(),
                        p.A.loginReset(),
                        C(""),
                        _(""),
                        I(""),
                        y(!1),
                        g(!1),
                        A(!1),
                        w({}));
                }, []),
                Y = u.useCallback(() => {
                    (y(!0), V(void 0, { undelete: !0 }));
                }, [V]),
                $ = u.useCallback(() => {
                    let e,
                        l = null != o ? (0, d.qg)(o.search) : {};
                    ("" !== j && (l.email = j),
                        null != t
                            ? ((l.mode = "register"), (e = L.BVt.INVITE(t.code)))
                            : null != i
                              ? ((l.mode = "register"), (e = L.BVt.GIFT_CODE(i.code)))
                              : null != n
                                ? (e = L.BVt.GUILD_TEMPLATE(n.code))
                                : null != a
                                  ? ((e = L.BVt.REGISTER), (l.redirect_to = a))
                                  : (e = L.BVt.REGISTER),
                        M(),
                        r(e, { search: (0, d.As)(l) }),
                        H._.dispatch(L.jej.WAVE_EMPHASIZE));
                }, [j, t, i, n, a, o, M, r]);
            return {
                checkingHandoff: m,
                redirecting: f,
                login: j,
                password: N,
                phoneVerifyError: T,
                dismissedChooseAccount: R,
                setDismissedChooseAccount: O,
                errors: k,
                conditionalMediationAbortController: D,
                loginSource: P,
                loginOrSSO: B,
                handleLogin: V,
                handleIPAuthorize: W,
                handlePasswordReset: K,
                handleForgotPassword: q,
                handleResendCode: z,
                handleReset: X,
                handleCancelAccountDeletion: Y,
                handleGotoRegister: $,
                loginReset: M,
                onLoginChange: u.useCallback((e, t) => {
                    (I(e), _(t));
                }, []),
                onPasswordChange: u.useCallback((e) => {
                    C(e);
                }, []),
            };
        })({
            invite: t,
            guildTemplate: n,
            giftCode: i,
            handoffAvailable: A,
            authenticated: g,
            transitionTo: r,
            redirectTo: s,
            location: l,
            loginSource: h,
        });
    (0, i$.Ay)(() => {
        (A && !g ? (0, j.ST)() : g && B(g, l, !0),
            b.default.track(
                L.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: U,
                    authenticated: g,
                    ...(null != I ? (0, lI.A)(I, !1, !1) : {}),
                    source: (0, eU.PR)(),
                },
                { flush: !0 },
            ),
            g || (0, lC.a)({ abortController: G, loginSource: U, giftCodeSKUId: _ }),
            p.A.getLocationMetadata(),
            (0, P.d0)("login"));
    });
    let et = (0, iZ.Ay)(g);
    u.useEffect(() => {
        let e = N && (A || C);
        g && !1 === et && !e && (G.abort("Transitioning to authenticated state"), B(g, l));
    }, [g, A, et, C, N, G, B, l]);
    let en = l?.state?.passwordReset === !0;
    if (C || N) return (0, c.jsx)(w.Ay, { transparent: o, children: (0, c.jsx)(ek.y, {}) });
    if (A)
        return (0, c.jsxs)(w.Ay, {
            className: a,
            transparent: o,
            children: [
                (0, c.jsx)(w.CK, {}),
                (0, c.jsx)(w.hE, { className: z.QB, children: Q.intl.string(Q.t.S6RMNA) }),
                (0, c.jsx)(w.tK, { children: Q.intl.string(Q.t.YZiJbh) }),
            ],
        });
    switch (E) {
        case L.aUe.LOGGING_IN_MFA_SMS:
        case L.aUe.MFA_SMS_STEP:
        case L.aUe.LOGGING_IN_MFA:
        case L.aUe.MFA_STEP:
            return (0, c.jsx)(lA, { loginSource: U, giftCodeSKUId: _, isEmbedded: o });
        case L.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case L.aUe.ACCOUNT_DISABLED:
            return (0, c.jsx)(i1, {
                loginStatus: E,
                authBoxClassName: a,
                transparent: o,
                onSubmit: X,
                onCancelAccountDeletion: Y,
            });
        case L.aUe.PHONE_IP_AUTHORIZATION:
            return (0, c.jsx)(w.Ay, {
                tag: "form",
                className: a,
                transparent: o,
                children: (0, c.jsx)(lj.A, {
                    title: Q.intl.string(Q.t.w55Oco),
                    subtitle: Q.intl.format(Q.t.CfRZBj, { onResendClick: q }),
                    error: R,
                    onSubmit: V,
                    onCancel: Z,
                }),
            });
        case L.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, c.jsx)(w.Ay, {
                tag: "form",
                className: a,
                transparent: o,
                children: (0, c.jsx)(lj.A, {
                    title: Q.intl.string(Q.t["+xqy3d"]),
                    subtitle: Q.intl.format(Q.t.ef4uZ7, { onResendClick: q }),
                    error: R,
                    onSubmit: W,
                    onCancel: Z,
                }),
            });
        case L.aUe.LOGGING_IN:
        case L.aUe.NONE:
        default:
            return (0, c.jsx)(lf, {
                invite: t,
                guildTemplate: n,
                giftCode: i,
                authBoxClassName: a,
                isEmbedded: o,
                disableAutofocusOnDefaultForm: m,
                login: v,
                password: y,
                errors: k,
                loginSource: U,
                dismissedChooseAccount: O,
                setDismissedChooseAccount: D,
                conditionalMediationAbortController: G,
                onLoginChange: J,
                onPasswordChange: ee,
                handleLogin: M,
                handleForgotPassword: K,
                handleGotoRegister: $,
                showPasswordResetNotice: en,
            });
    }
}
var ly = n(664294);
let lS = null,
    lT = "underage";
class lb extends f.Ay.Store {
    static displayName = "AgeGateStore";
    isUnderageAnonymous() {
        if (nG.isPlatformEmbedded && 1) {
            if (null != lS && lS + nn.bm > Date.now()) return !0;
        } else if (1) return null != ly.q(document.cookie)[lT];
        return !1;
    }
}
let lR = new lb(_.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        ((lS = Date.now()), (document.cookie = `${lT}=1;path=/`));
    },
    LOGIN_SUCCESS: function () {
        ((lS = null), (document.cookie = `${lT}=1;path=/;max-age=0`));
    },
});
var lL = n(509434),
    lO = n(121780),
    lD = n(970116);
let lk = function () {
    let e,
        t =
            null != (e = (0, f.bG)([lO.A], () => lO.A.getMinimumAge()))
                ? Q.intl.formatToPlainString(Q.t.Sn7icL, { minAge: e })
                : Q.intl.string(Q.t.r2AEw1);
    return (0, c.jsx)(w.Ay, {
        children: (0, c.jsxs)("div", {
            className: lD.hQ,
            children: [
                (0, c.jsx)(w.hE, { className: lD.DD, children: Q.intl.string(Q.t.nCB6Ga) }),
                (0, c.jsx)(w.tK, { className: lD.VA, children: Q.intl.format(Q.t.KQgoxG, { underageMessage: t }) }),
                (0, c.jsx)(M.$, {
                    icon: lL.LinkExternalSmallIcon,
                    text: Q.intl.string(Q.t.hvVgAZ),
                    onClick: () => window.open(n$.A.getArticleURL(L.MVz.AGE_GATE), "_blank"),
                    iconPosition: "end",
                }),
            ],
        }),
    });
};
(n(994555), n(827343), n(792251), n(253400), n(945041));
var lw = n(493527),
    lP = n(544395);
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
        [d, h] = u.useState(!1),
        [m, g] = u.useState(!1);
    function p(e) {
        b.default.track(L.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function A(e) {
        b.default.track(L.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    let E = (0, f.bG)([tJ.A], () => tJ.A.getAuthenticationConsentRequired()),
        x = (0, f.bG)([lP.A], () => lP.A.registrationUsernameSuggestion()),
        _ = u.useRef(null),
        j = u.useRef(null),
        I = u.useRef(null),
        N = u.useRef(null),
        [C, v] = u.useState(t),
        [y, S] = u.useState(""),
        [T, R] = u.useState(""),
        [O, D] = u.useState(""),
        [k, P] = u.useState(null),
        [G, U] = t$(E),
        [V, W] = u.useState(!1),
        [K, q] = tZ(),
        [X, Y] = u.useState({}),
        { message: $, email: Z, username: J, global_name: ee, password: et, date_of_birth: en } = X,
        [ei, el] = u.useState(null),
        [es, er] = u.useState(null),
        [ea, eo] = u.useState(null),
        [ec, ed] = u.useState(null),
        eh = null != E && G;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: i, globalNameRef: l, passwordRef: s } = e,
            r = (0, iZ.Ay)(t);
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
    })({ apiErrors: X, emailRef: _, usernameRef: j, globalNameRef: I, passwordRef: N });
    let em = u.useCallback(async () => {
            let e = null != i ? i.skuId : null,
                t = t8.mZ.getState(),
                r = (0, i_.uJ)(x) ? null : T === x;
            (H._.dispatch(L.jej.WAVE_EMPHASIZE), W(!0), Y({}));
            try {
                (await ni({
                    email: C,
                    username: T,
                    globalName: y,
                    consent: G,
                    password: O,
                    invite: n?.code,
                    usedUsernameSuggestion: r,
                    guildTemplateCode: l?.code,
                    giftCodeSKUId: e,
                    birthday: k,
                    promoEmailConsent: t.required ? t : null,
                }),
                    o?.());
            } catch (t) {
                if ((W(!1), !(t instanceof t4.LG))) return;
                let e = (0, t3.W)(t);
                (Y(e), s?.(e), "number" == typeof e.retry_after && q(e.retry_after));
            }
        }, [i, l, n, C, s, o, x, T, y, O, k, G, q]),
        eg = u.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == E)) return;
                let t = !1;
                (0 === C.length && (el(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    0 === T.length && (er(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    0 === O.length && (eo(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    null == k && (ed(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    t || em());
            },
            [C, T, O, k, E, em],
        ),
        ef = null;
    return (
        "string" == typeof $ && (ef = (0, c.jsx)(w.ME, { className: B()(z.QX, ns.gJ), children: $ })),
        (0, c.jsx)("form", {
            onSubmit: eg,
            children: (0, c.jsxs)(w.eB, {
                className: z.QX,
                children: [
                    (0, c.jsx)(w.pd, {
                        autoFocus: !0,
                        className: z.SX,
                        label: Q.intl.string(Q.t.dI4d4S),
                        name: "email",
                        value: C,
                        onChange: (e) => {
                            (v(e), r?.(e), el(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null));
                        },
                        error: ei ?? tY(Z),
                        type: "email",
                        autoComplete: "username",
                        setRef: _,
                        required: !0,
                        onFocus: () => p("email"),
                        onBlur: () => A("email"),
                    }),
                    (0, c.jsx)(w.pd, {
                        label: Q.intl.string(Q.t["9AjdkD"]),
                        className: z.SX,
                        name: "global_name",
                        value: y,
                        onChange: S,
                        error: tY(ee),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: I,
                        onFocus: () => {
                            (h(!0), p("global_name"));
                        },
                        onBlur: () => {
                            (h(!1), A("global_name"));
                        },
                    }),
                    (0, c.jsx)(nj, {
                        show: d,
                        top: -12,
                        bottom: 20,
                        children: (0, c.jsx)(F.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: Q.intl.string(Q.t["330TCc"]),
                        }),
                    }),
                    (0, c.jsxs)("div", {
                        onBlur: () => g(!1),
                        onFocus: () => {
                            (g(!0),
                                (async function () {
                                    y.length > 0 &&
                                        !lP.A.wasRegistrationSuggestionFetched(y) &&
                                        (await lw.A.fetchSuggestionsRegistration(y));
                                })());
                        },
                        tabIndex: -1,
                        children: [
                            (0, c.jsx)(w.pd, {
                                label: Q.intl.string(Q.t.TWzdWj),
                                className: z.SX,
                                name: "username",
                                value: T,
                                onChange: (e) => {
                                    (R(e.toLocaleLowerCase()), er(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null));
                                },
                                error: es ?? tY(J),
                                autoComplete: "off",
                                setRef: j,
                                required: !0,
                                onFocus: () => p("username"),
                                onBlur: () => A("username"),
                            }),
                            (0, c.jsx)(nI, {
                                username: T,
                                suggestion: x,
                                globalName: y,
                                isUsernameFocused: m,
                                onClickSuggestion: () => {
                                    (j.current?.focus(), null != x && x.length > 0 && (R(x), er(null)));
                                },
                            }),
                        ],
                    }),
                    (0, c.jsx)(w.pd, {
                        label: Q.intl.string(Q.t["CIGa+7"]),
                        name: "password",
                        value: O,
                        onChange: (e) => {
                            (D(e), eo(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null));
                        },
                        error: ea ?? tY(et),
                        type: "password",
                        revealable: !0,
                        autoComplete: "new-password",
                        setRef: N,
                        required: !0,
                        onFocus: () => p("password"),
                        onBlur: () => A("password"),
                    }),
                    (0, c.jsx)(nf.A, {
                        label: Q.intl.string(Q.t.rhBeKe),
                        wrapperClassName: ns.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            (P(e), null != e && ed(null));
                        },
                        error: ec ?? tY(en),
                        value: k,
                        required: !0,
                        onFocus: p,
                        onBlur: A,
                    }),
                    (0, c.jsx)(no, {}),
                    (0, c.jsx)(nr, { consent: G, consentRequired: E, onConsentChange: U }),
                    (0, c.jsx)(t2.m, {
                        text: !G && E ? Q.intl.string(Q.t.AY4IVA) : null,
                        children: (0, c.jsx)("div", {
                            className: z.QX,
                            children: (0, c.jsx)(M.$, {
                                text: Q.intl.string(Q.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: V,
                                disabled: !eh || K,
                            }),
                        }),
                    }),
                    ef,
                    (0, c.jsx)("div", {
                        className: z.QX,
                        children: (0, c.jsx)(eu.Q, {
                            text: Q.intl.string(Q.t["1lWxux"]),
                            textVariant: "body-sm/normal",
                            onClick: a,
                        }),
                    }),
                ],
            }),
        })
    );
}
n(436317);
var lU = n(713654),
    lB = n(331722);
function lF(e) {
    let { channel: t } = e,
        n = (0, lU._U)(t.type);
    return (0, c.jsxs)("div", {
        className: lB.Nj,
        children: [
            null != n ? (0, c.jsx)(n, { color: "currentColor", size: "custom", width: 20, height: 20 }) : null,
            (0, c.jsx)(F.E, { className: lB.dN, color: "none", variant: "body-sm/semibold", children: t.name }),
        ],
    });
}
function lM(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, c.jsxs)("div", {
        className: lB.kL,
        children: [
            (0, c.jsx)(tO.Uq, { className: lB.II, guildId: n.guild_id, guildEvent: n, eventPreview: n }),
            (0, c.jsx)(tO.sC, { name: n.name, description: n.description, guildId: n.guild_id }),
            null != t && n.channel_id === t.id ? (0, c.jsx)(lF, { channel: t }) : null,
        ],
    });
}
var lV = n(231698);
function lH(e) {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let i = eh.DY(t),
        { name: l, description: s } = i;
    return (0, c.jsxs)("div", {
        children: [
            (0, c.jsx)(ew.D, {
                variant: "heading-sm/medium",
                color: "text-muted",
                className: lV.CT,
                children: Q.intl.string(Q.t.Eabu1z),
            }),
            (0, c.jsxs)("div", {
                className: lV.EB,
                children: [
                    (0, c.jsx)(tW.Ay, {
                        mask: tW.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, c.jsx)(tL.Ay, { guild: i, size: tL.Ay.Sizes.MEDIUM, active: !0 }),
                    }),
                    (0, c.jsxs)("div", {
                        className: lV.OA,
                        children: [
                            (0, c.jsx)(ew.D, { variant: "heading-xs/semibold", children: l }),
                            (0, c.jsxs)("div", {
                                className: lV.aH,
                                children: [
                                    (0, c.jsx)("div", { className: lV.Om }),
                                    null != n && n > 0
                                        ? (0, c.jsx)(F.E, {
                                              variant: "body-sm/normal",
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
                (0, c.jsx)(F.E, { color: "text-default", className: lV.CT, variant: "body-sm/normal", children: s }),
        ],
    });
}
function lW(e) {
    let { authBoxClassName: t, name: n, onNameChange: i } = e;
    return (0, c.jsxs)(w.Ay, {
        className: t,
        children: [
            (0, c.jsx)(i2.M, {}),
            (0, c.jsxs)(w.eB, {
                className: ns.y0,
                children: [
                    (0, c.jsx)(t2.m, {
                        text: Q.intl.string(Q.t["hBB85/"]),
                        position: "right",
                        children: (0, c.jsx)(w.pd, {
                            label: Q.intl.string(Q.t["9AjdkD"]),
                            autoFocus: !0,
                            className: z.QB,
                            name: "username",
                            value: n,
                            placeholder: Q.intl.string(Q.t["09Q8yp"]),
                            onChange: i,
                            onFocus: () => {
                                b.default.track(L.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                b.default.track(L.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, c.jsx)(F.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        className: B()(z.QX, ns.E2),
                        children: Q.intl.format(Q.t["KI+BSb"], { termsURL: L.X7G.TERMS, privacyURL: L.X7G.PRIVACY }),
                    }),
                    (0, c.jsx)("div", {
                        className: z.Ot,
                        children: (0, c.jsx)(M.$, {
                            text: Q.intl.string(Q.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, c.jsx)("div", {
                        className: z.QX,
                        children: (0, c.jsx)(eu.Q, {
                            text: Q.intl.string(Q.t["1lWxux"]),
                            textVariant: "body-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function lK(e) {
    let { consentRequired: t, consent: n, registering: i } = e,
        l = u.useMemo(() => null != t && n, [t, n]);
    return (0, c.jsx)(t2.m, {
        text: !n && t ? Q.intl.string(Q.t.AY4IVA) : null,
        children: (0, c.jsx)("div", {
            className: z.Ot,
            children: (0, c.jsx)(M.$, {
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
function lQ(e) {
    let { invite: t, authBoxClassName: n, hideInviteHeader: i = !1, onApiErrors: l, onGotoLogin: s, onRegister: r } = e,
        a = (0, f.bG)([tJ.A], () => tJ.A.getAuthenticationConsentRequired()),
        o = t?.guild_scheduled_event != null,
        d = u.useRef(null),
        h = null;
    h = i
        ? null
        : t?.guild_scheduled_event != null
          ? (0, c.jsx)(lM, { channel: t.channel, guildScheduledEvent: t.guild_scheduled_event })
          : (0, c.jsx)("div", { className: z.S3, children: (0, c.jsx)(i2.A, { invite: t, inUnclaimedFlow: !0 }) });
    let [m, g] = u.useState(""),
        [p, A] = u.useState(null),
        [E, x] = t$(a),
        [_, j] = u.useState(!1),
        [I, N] = u.useState({}),
        { username: C, global_name: v, date_of_birth: y } = I,
        [S, T] = tZ();
    u.useEffect(() => {
        null == p && d.current?.focus();
    }, [p, d]);
    let [R, O] = u.useState(null),
        [D, k] = u.useState(null),
        P = u.useCallback(async () => {
            (H._.dispatch(L.jej.WAVE_EMPHASIZE), j(!0), N({}));
            try {
                let e = await (function (e) {
                    let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
                    return ni({ ...i, invite: t, giftCodeSKUId: n });
                })({ consent: E, invite: t.code, globalName: m, birthday: p });
                r?.(e?.invite_join_deferred_code != null);
            } catch (t) {
                if ((j(!1), !(t instanceof t4.LG))) return;
                let e = (0, t3.W)(t);
                (N(e), l?.(e), "number" == typeof e.retry_after && T(e.retry_after));
            }
        }, [t, m, p, E, l, r, T, N, j]),
        G = u.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === a)) return;
                let t = !1;
                (0 === m.length && (O(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    null == p && (k(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    t || P());
            },
            [m, p, a, P, O, k],
        );
    return t.state === L.elq.RESOLVING
        ? (0, c.jsx)(lW, { authBoxClassName: n, name: m, onNameChange: g })
        : (0, c.jsxs)("div", {
              children: [
                  (0, c.jsx)(w.Ay, {
                      tag: "section",
                      className: n,
                      children: (0, c.jsxs)("form", {
                          onSubmit: G,
                          children: [
                              h,
                              o ? (0, c.jsx)("div", { className: ns.yF }) : null,
                              (0, c.jsxs)(w.eB, {
                                  className: o ? void 0 : ns.y0,
                                  children: [
                                      (0, c.jsx)(t1.k, {
                                          helperText: Q.intl.string(Q.t["330TCc"]),
                                          label: Q.intl.string(Q.t["9AjdkD"]),
                                          error: R ?? tY(v ?? C),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: m,
                                          placeholder: Q.intl.string(Q.t["09Q8yp"]),
                                          onChange: g,
                                          onFocus: () => {
                                              b.default.track(L.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              b.default.track(L.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, c.jsx)(nf.A, {
                                          label: Q.intl.string(Q.t.rhBeKe),
                                          wrapperClassName: ns.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              (A(e), null != e && k(null));
                                          },
                                          error: D ?? tY(y),
                                          value: p,
                                      }),
                                      (0, c.jsx)(nr, { consent: E, consentRequired: a, onConsentChange: x }),
                                      (0, c.jsx)(lK, { consentRequired: a, consent: E, registering: _ }),
                                      (0, c.jsx)("div", {
                                          className: z.QX,
                                          children: (0, c.jsx)(eu.Q, {
                                              text: Q.intl.string(Q.t["1lWxux"]),
                                              textVariant: "body-sm/normal",
                                              onClick: s,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  null != t && o
                      ? (0, c.jsx)(w.Ay, {
                            className: z.QX,
                            children: (0, c.jsx)(lH, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
n(100544);
var lq =
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
            onLoginStart: m,
            onRegister: g,
            transitionTo: A = eU.pX,
        } = e,
        E = (0, f.bG)([tJ.A], () => tJ.A.getAuthenticationConsentRequired()),
        x = (0, f.bG)([e$.default], () => e$.default.isAuthenticated()),
        _ = (0, f.bG)([lR], () => lR.isUnderageAnonymous()),
        j = (0, f.bG)([la.A], () => la.A.getHasLoggedInAccounts()),
        I = null != e.location ? (0, d.qg)(e.location.search) : {},
        [N, C] = u.useState(I.email ?? ""),
        [v, y] = u.useState({}),
        S = (0, iZ.Ay)(x),
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
        D = u.useCallback(() => {
            x && (null != o ? A(o) : A(ed.A.defaultRoute));
        }, [x, o, A]);
    ((0, i$.Ay)(() => {
        (D(),
            b.default.track(
                L.HAw.REGISTER_VIEWED,
                {
                    location: null != s ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: T,
                    ...(null != i ? (0, lI.A)(i, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == E && p.A.getLocationMetadata(),
            (0, P.d0)("register"));
    }),
        u.useEffect(() => {
            x && !1 === S && ((0, nc.C)(nu.zY.ORGANIC_REGISTERED), D());
        }, [x, S, D]));
    let k = lq.FULL;
    (_ || null != v.date_of_birth ? (k = lq.AGE_GATE) : R && (k = lq.INVITE),
        (0, lo.A)(
            {
                type: h.ImpressionTypes.VIEW,
                name: h.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: h.ImpressionGroups.USER_REGISTRATION_FLOW, step: k },
            },
            {},
            [k],
        ));
    let G = u.useCallback(
        (e) => {
            let t,
                i = null != a ? (0, d.qg)(a.search) : {};
            (null != s
                ? (t = L.BVt.INVITE_LOGIN(s.code))
                : null != n
                  ? (t = L.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != l
                    ? (t = L.BVt.GUILD_TEMPLATE_LOGIN(l.code))
                    : null != o
                      ? ((t = L.BVt.LOGIN), (i.redirect_to = o))
                      : ((t = L.BVt.LOGIN), "" !== N && (i = { email: N })),
                p.A.loginReset(),
                A(t, { search: (0, d.As)(i), source: "register" }),
                m?.(e),
                H._.dispatch(L.jej.WAVE_EMPHASIZE));
        },
        [N, s, n, l, o, a, m, A],
    );
    if (_ || null != v.date_of_birth) return (0, c.jsx)(lk, {});
    if (null != s && R)
        return (0, c.jsx)(lQ, {
            invite: s,
            authBoxClassName: t,
            hideInviteHeader: r,
            onApiErrors: y,
            onGotoLogin: G,
            onRegister: g,
        });
    let U = (0, c.jsx)(w.hE, { children: Q.intl.string(Q.t.wC4TlR) }, "title"),
        F = !1;
    null != l
        ? ((U = (0, c.jsx)(i7.A, { guildTemplate: l })), (F = !0))
        : null != n
          ? (U = (0, c.jsx)(iY, { giftCode: n }))
          : !r &&
            null != s &&
            O &&
            s.state === L.elq.RESOLVED &&
            (U = (0, c.jsx)("div", { className: z.S3, children: (0, c.jsx)(i2.A, { invite: s, isRegister: !0 }) }));
    let V = (0, c.jsx)(lG, {
        initialEmail: I.email ?? "",
        invite: s,
        giftCode: n,
        guildTemplate: l,
        onApiErrors: y,
        onEmailChange: C,
        onGotoLogin: G,
        onRegister: g,
    });
    return F
        ? (0, c.jsx)(i3, {
              tag: "section",
              className: B()(t, ns.Sy),
              children: () => [
                  U,
                  (0, c.jsxs)(
                      "div",
                      {
                          className: ns.Uu,
                          children: [(0, c.jsx)(w.hE, { className: ns.lR, children: Q.intl.string(Q.t.wC4TlR) }), V],
                      },
                      "register-title",
                  ),
              ],
          })
        : (0, c.jsxs)(w.Ay, {
              tag: "section",
              className: t,
              children: [
                  j
                      ? (0, c.jsx)("div", {
                            className: ns.AX,
                            children: (0, c.jsx)(M.$, {
                                onClick: G,
                                variant: "secondary",
                                text: Q.intl.string(Q.t["1MrpWO"]),
                                icon: n2.ChevronSmallLeftIcon,
                                iconPosition: "start",
                            }),
                        })
                      : null,
                  U,
                  V,
              ],
          });
}
f.Ay.initialize();
var lX = n(50302);
f.Ay.initialize();
class lY extends u.PureComponent {
    state = { error: null, continueOnWeb: !1, currentUser: null, sentVerification: !1, fetchingUser: !1 };
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        (e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, P.d0)("gift_code"));
    }
    componentDidUpdate(e) {
        let { authenticated: t, isResolved: n } = this.props;
        (n || this.resolveGiftCode(),
            t && !e.authenticated && this.handleAuthenticated(),
            !t && e.authenticated && this.setState({ currentUser: null }));
    }
    handleAuthenticated() {
        let { currentUser: e } = this.state;
        (iD.Yq(), null == e && this.refreshUser());
    }
    refreshUser = () => {
        (this.setState({ fetchingUser: !0 }),
            nz
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
        return l === L.t02.INVALID_GIFT_SELF_REDEMPTION || l === L.t02.INVALID_GIFT_SUBSCRIPTION_SELF_REDEMPTION
            ? Q.intl.string(Q.t.wa9h7F)
            : l === L.t02.INVALID_GIFT_REDEMPTION_OWNED && n?.productLine === L.EZt.COLLECTIBLES
              ? Q.intl.string(Q.t.mdLtb5)
              : null != t || l === L.t02.INVALID_GIFT_REDEMPTION_OWNED
                ? Q.intl.format(Q.t.PIdmg3, { libraryLink: L.BVt.APPLICATION_LIBRARY })
                : e.isClaimed || l === L.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? Q.intl.string(Q.t.ilcBeX)
                  : l === L.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? Q.intl.string(Q.t.ypuSd8)
                    : void 0;
    }
    handleLogout = () => {
        let e = this.getCode();
        p.A.logout("gift_code", L.BVt.GIFT_CODE_LOGIN(e));
    };
    handleResendVerification = () => {
        (p.A.verifyResend(), this.setState({ sentVerification: !0 }));
    };
    handleAccept = async () => {
        let { transitionTo: e, giftCode: t } = this.props;
        if (null == t) throw Error("Trying to accept gift before resolve");
        let n = this.getCode();
        try {
            (this.setState({ error: null }), await A.Ay.redeemGiftCode({ code: n }), e(L.BVt.APP));
        } catch (e) {
            this.setState({ error: e });
        }
    };
    resolveGiftCode = () => {
        let { transitionTo: e } = this.props,
            t = this.getCode();
        A.Ay.resolveGiftCode(t, { withApplication: !0, withSubscriptionPlan: !0 })
            .then((n) => {
                null != n && null != n.giftCode.promotion && e(L.BVt.BILLING_PROMOTION_REDEMPTION(t));
            })
            .catch(A.Ay.reportUnexpectedGiftCodeError);
    };
    renderSpinner(e) {
        return (0, c.jsxs)(w.Ay, { children: [(0, c.jsx)(w.hE, { children: e }), (0, c.jsx)(w.CK, {})] });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, c.jsxs)(w.Ay, {
            children: [
                (0, c.jsx)(w.hE, { className: B()(z.Ot, z.QB), children: Q.intl.string(Q.t.KPowgn) }),
                (0, c.jsx)(w.tK, { children: Q.intl.string(Q.t.j8734b) }),
                (0, c.jsx)("div", {
                    className: B()(z.eT, z.QB),
                    children: (0, c.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, c.jsx)(eu.Q, {
                    text: Q.intl.string(Q.t["/CjuXF"]),
                    textVariant: "body-sm/normal",
                    onClick: () => window.open(n$.A.getArticleURL(L.MVz.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, c.jsxs)(w.Ay, {
            children: [
                (0, c.jsx)(w.hE, { className: z.QB, children: Q.intl.string(Q.t.csrAMJ) }),
                (0, c.jsx)(w.tK, { children: Q.intl.string(Q.t["m1+IBn"]) }),
                (0, c.jsx)("div", {
                    className: z.eT,
                    children: (0, c.jsx)(M.$, {
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
        return (0, c.jsxs)(w.Ay, {
            children: [
                (0, c.jsx)(w._V, { src: n(792525), className: z.QB }),
                (0, c.jsx)(w.hE, { children: Q.intl.format(Q.t["ivLUf/"], { username: e.username }) }),
                (0, c.jsx)(w.tK, { className: z.QX, children: Q.intl.string(Q.t["8Su18+"]) }),
                (0, c.jsx)("div", {
                    className: z.eT,
                    children: (0, c.jsx)(M.$, {
                        text: t ? Q.intl.string(Q.t.CMa9Rv) : Q.intl.string(Q.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, c.jsx)("div", {
                    className: z.Ot,
                    children: (0, c.jsx)(eu.Q, {
                        text: Q.intl.string(Q.t.Po9eBQ),
                        textVariant: "body-sm/normal",
                        onClick: this.refreshUser,
                    }),
                }),
            ],
        });
    }
    renderAuthenticated(e, t, n) {
        let { transitionTo: i } = this.props;
        return (0, c.jsx)(lJ, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: i,
            children: (0, c.jsx)(lZ, {
                giftCode: e,
                currentUser: t,
                errorMessage: this.getErrorMessage(e),
                onAccept: this.handleAccept,
                onLogout: this.handleLogout,
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
            { fetchingUser: o, continueOnWeb: u } = this.state;
        if (e === L.fAW.OPEN && !u) return this.renderAppOpened();
        if (e === L.fAW.OPENING) return this.renderSpinner(Q.intl.string(Q.t["Z+hCVU"]));
        if (s) return this.renderSpinner(Q.intl.string(Q.t.bhJseN));
        if (null == i) return l ? this.renderExpiredInvite() : this.renderSpinner(Q.intl.string(Q.t.b3lf1c));
        if (l) {
            if (n) {
                let e = this.state.currentUser;
                return o || null == e
                    ? this.renderSpinner(Q.intl.string(Q.t.bYb2nS))
                    : this.requiresVerification && null != e
                      ? this.renderVerification(e)
                      : this.renderAuthenticated(i, e, t);
            }
            return "login" === this.getMode()
                ? (0, c.jsx)(lv, { giftCode: i, transitionTo: r, location: a })
                : (0, c.jsx)(lz, { giftCodeSKU: t, giftCode: i, transitionTo: r, location: a });
        }
        return null;
    }
}
let l$ = f.Ay.connectStores([iu.A, iU.A, e$.default, iF.A, ed.A, ik.A], (e) => {
    let t = e.match.params.giftCode ?? "",
        n = iu.A.get(t),
        i = null != n ? iF.A.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: i,
        libraryApplication: null != i && n?.entitlementBranches != null ? iM.YI(n.entitlementBranches, i, iU.A) : null,
        authenticated: e$.default.isAuthenticated(),
        defaultRoute: ed.A.defaultRoute,
        isResolved: iu.A.getIsResolved(t),
        isAccepting: iu.A.getIsAccepting(t),
        libraryApplicationsFetched: iU.A.fetched,
        nativeAppState: ik.A.getState(t),
    };
})(lY);
function lZ(e) {
    let { giftCode: t, currentUser: n, errorMessage: i, onAccept: l, onLogout: s } = e,
        { isResolvingAgreement: r } = (0, iP.A)(t),
        a = (0, f.bG)([iB.A], () => (null != t.subscriptionPlanId ? iB.A.get(t.subscriptionPlanId) : null)),
        o = t.subscriptionPlan ?? a,
        u = null != i;
    return (0, c.jsxs)(w.Ay, {
        children: [
            (0, c.jsx)(iY, { giftCode: t }),
            (0, iw.m)(t) &&
                null != o &&
                (0, c.jsx)(w.ME, {
                    className: z.Ot,
                    children: Q.intl.string(o.interval === iq.WT.MONTH ? lX.default.p3wUY4 : lX.default.RdrnRc),
                }),
            (0, c.jsx)("div", {
                className: z.eT,
                children: (0, c.jsx)(M.$, {
                    text: Q.intl.string(Q.t.n6I6k4),
                    fullWidth: !0,
                    disabled: u,
                    loading: !u && r,
                    onClick: function () {
                        r || l();
                    },
                }),
            }),
            null != i
                ? (0, c.jsx)(w.tK, { className: z.QX, children: i })
                : (0, c.jsx)(w.ME, {
                      className: z.QX,
                      children: Q.intl.format(Q.t.NYM08s, { userTag: to.Ay.getUserTag(n), onLogoutClick: s }),
                  }),
        ],
    });
}
function lJ(e) {
    let { sku: t, children: n, giftCodeCode: i, transitionTo: l } = e,
        s = (0, iG.bF)(t);
    return (u.useEffect(() => {
        null != i && s && l(L.BVt.APP_WITH_GIFT_CODE(i));
    }, [s, i, l]),
    s)
        ? (0, c.jsxs)(w.Ay, {
              children: [(0, c.jsx)(w.hE, { children: Q.intl.string(Q.t.b3lf1c) }), (0, c.jsx)(w.CK, {})],
          })
        : n;
}
var l0 = n(584265),
    l1 = n(833397),
    l2 = n(894778),
    l4 = n(315290),
    l8 = n(396574),
    l3 = n(838697);
f.Ay.initialize();
class l7 extends u.PureComponent {
    componentDidMount() {
        ((0, P.d0)("guildTemplate"),
            l8.VP || eZ.A.launch("discord://" + L.BVt.GUILD_TEMPLATE(this.props.code), () => void 0));
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && eT.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return l8.VP
            ? (0, c.jsx)("div", { className: z.eT, children: (0, c.jsx)(M.$, { text: e, fullWidth: !0, onClick: t }) })
            : (0, c.jsx)(w.KE, { className: z.eT });
    }
    renderSpinner(e) {
        return (0, c.jsxs)(w.Ay, { children: [(0, c.jsx)(w.hE, { children: e }), (0, c.jsx)(w.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, c.jsxs)(w.Ay, {
            children: [
                (0, c.jsx)(w.hE, { className: B()(z.Ot, z.QB), children: Q.intl.string(Q.t.C7ZRNw) }),
                (0, c.jsx)(w.tK, { children: Q.intl.string(Q.t.A6MwXE) }),
                this.renderButton(Q.intl.string(Q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, c.jsxs)(w.Ay, {
            children: [
                (0, c.jsx)(w.hE, { className: z.QB, children: Q.intl.string(Q.t.csrAMJ) }),
                (0, c.jsx)(w.tK, { children: Q.intl.string(Q.t["m1+IBn"]) }),
                this.renderButton(Q.intl.string(Q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (eK()(null != e, "guild template must not be null"), e.state === lm.QB.RESOLVING)
            ? (0, c.jsx)(w.Ay, { className: l3.sL, children: (0, c.jsx)(l1.A, { guildTemplate: e }) })
            : (0, c.jsx)(l5, { guildTemplate: e });
    }
    renderContinue() {
        return (0, c.jsxs)(w.Ay, {
            children: [
                (0, c.jsx)(w.hE, { children: Q.intl.string(Q.t.fOc4gn) }),
                this.renderButton(Q.intl.string(Q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: i, location: l } = this.props;
        if (null == e) return this.renderSpinner(Q.intl.string(Q.t.ZTNur7));
        if (t === L.fAW.OPEN) return this.renderAppOpened();
        if (t === L.fAW.OPENING) return this.renderSpinner(Q.intl.string(Q.t["Z+hCVU"]));
        switch (e.state) {
            case lm.QB.RESOLVING:
                return this.renderSpinner(Q.intl.string(Q.t["Z+hCVU"]));
            case lm.QB.RESOLVED:
                if (n || !l8.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, c.jsx)(lv, { guildTemplate: e, transitionTo: i, location: l });
                return (0, c.jsx)(lz, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: l,
                    onRegister: () => {
                        ((0, nc.C)(nu.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            l2.A.flowStart(l4.do.ORGANIC_GUILD_TEMPLATES, l4.ju.NUF_STARTED));
                    },
                });
            case lm.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function l5(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, l0.A)(t, !1);
    l2.A.flowStep(l4.do.ORGANIC_GUILD_TEMPLATES, l4.jC.GUILD_CREATE);
    let l = (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(w.hE, { className: l3.wx, children: Q.intl.string(Q.t.UNFvtM) }),
            n,
            (0, c.jsx)("div", {
                className: l3.Tf,
                children: (0, c.jsx)(M.$, { text: Q.intl.string(Q.t.xr59t7), fullWidth: !0, onClick: i }),
            }),
        ],
    });
    return (0, c.jsx)(i3, {
        className: l3.sL,
        children: () => [
            (0, c.jsx)(i7.A, { guildTemplate: t }, "template"),
            (0, c.jsx)("div", { className: l3.KJ, children: l }, "contents"),
        ],
    });
}
function l9(e, t, n) {
    (e.preventDefault(),
        b.default.track(L.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        }));
    let i = e$.default.getFingerprint(),
        l = null != i ? i : e$.default.getId();
    eT.A.openMobileApp(n.state === lm.QB.RESOLVED ? t : void 0, l);
}
function l6(e) {
    let { code: t } = e,
        n = (0, f.bG)([eS.A], () => eS.A.getGuildTemplate(t));
    return (u.useEffect(() => {
        (0, P.d0)("guild_template_mobile");
    }, []),
    null == n || n.state === lm.QB.RESOLVING)
        ? (0, c.jsx)(w.Ay, { children: (0, c.jsx)(ek.y, {}) })
        : n.state === lm.QB.RESOLVED
          ? (0, c.jsxs)(w.Ay, {
                children: [
                    (0, c.jsx)(l1.A, { guildTemplate: n, tall: !0 }),
                    (0, c.jsx)("div", {
                        className: z.QX,
                        children: (0, c.jsx)(M.$, {
                            text: Q.intl.string(Q.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => l9(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, c.jsx)(e5, {
                text: Q.intl.string(Q.t["e/rZ2n"]),
                buttonCta: Q.intl.string(Q.t.HAvYn0),
                onClick: (e) => l9(e, t, n),
            });
}
(f.Ay.initialize(), n(938796));
var se = n(821418),
    st = n(665260),
    sn = n(362474),
    si = n(695366),
    sl = n(964486),
    ss = n(656),
    sr = n(921037),
    sa = (((a = {}).IN_CONTENT = "in_content"), (a.BELOW_CONTENT = "below_content"), a);
let so = (0, tv.mj)({
    name: "2026-09-silp-direct-to-discoverable",
    kind: "installation",
    defaultConfig: { placement: null },
    variations: { 0: { placement: null }, 1: { placement: "in_content" }, 2: { placement: "below_content" } },
});
var sc = (((o = {}).IN_CONTENT = "in_content"), (o.BELOW_CONTENT = "below_content"), o);
let su = (0, tv.mj)({
    name: "2026-09-silp-app-opened-direct-to-discoverable",
    kind: "installation",
    defaultConfig: { placement: null },
    variations: { 0: { placement: null }, 1: { placement: "in_content" }, 2: { placement: "below_content" } },
});
var sd = n(320448),
    sh = n(975807),
    sm = n(818348),
    sg = n(438865);
function sf(e) {
    let { inviteCode: t, guildId: n, className: i, belowContent: l = !1, location: s } = e;
    function r() {
        (b.default.track(
            L.HAw.INVITE_CTA_CLICKED,
            { action: "browse_other_servers", invite_code: t, guild_id: n, location: s },
            { flush: !0 },
        ),
            (0, sh.A)(sm.Tk.DISCOVER));
    }
    return l
        ? (0, c.jsx)("div", {
              className: B()(i, sg.B),
              children: (0, c.jsx)(M.$, {
                  text: Q.intl.string(Q.t["7itT3E"]),
                  onClick: r,
                  variant: "overlay-secondary",
                  icon: { type: "icon", asset: sd.ChevronSmallRightIcon },
                  iconPosition: "end",
                  size: "sm",
              }),
          })
        : (0, c.jsx)("div", {
              className: B()(i, z.Ot),
              children: (0, c.jsx)(M.$, {
                  text: Q.intl.string(Q.t["7itT3E"]),
                  onClick: r,
                  variant: "secondary",
                  fullWidth: !0,
              }),
          });
}
var sp = n(999527);
let sA = (0, tv.mj)({
    name: "2026-09-silp-desktop-app-upsell",
    kind: "user",
    defaultConfig: { label: null },
    variations: { 1: { label: "download_discord_app" }, 2: { label: "download_app" }, 3: { label: "get_discord" } },
});
var sE = n(930839),
    sx = n(53505);
f.Ay.initialize();
let s_ = "register",
    sj = "login";
function sI(e) {
    let { message: t, onClick: n, invite: i, className: l, notice: s, secondaryAction: r } = e,
        a = i?.guild_scheduled_event != null,
        o = a ? "active" : "primary";
    return l8.VP
        ? (0, c.jsx)("div", {
              className: l ?? (a ? z.QX : z.eT),
              children: (0, c.jsxs)(eD.B, {
                  gap: 8,
                  children: [
                      s,
                      null == r
                          ? (0, c.jsx)(M.$, { text: t, onClick: n, variant: o, fullWidth: !0 })
                          : (0, c.jsxs)(Y.e, {
                                fullWidth: !0,
                                children: [
                                    (0, c.jsx)(M.$, { text: t, onClick: n, variant: o }),
                                    (0, c.jsx)(M.$, { text: r.text, onClick: r.onClick, variant: "secondary" }),
                                ],
                            }),
                  ],
              }),
          })
        : (0, c.jsx)(w.KE, { className: l ?? z.eT });
}
function sN(e) {
    let t = tb("InviteAccept");
    return (0, c.jsx)(sI, { ...e, message: tR(t) });
}
function sC(e) {
    let { invite: t, inviteKey: n, handleAccept: i, handleDefaultTransition: l, expirationLocation: s } = e,
        r = (0, f.bG)([te.A], () => (t.state === L.elq.ERROR ? te.A.getInviteError(n) : void 0)),
        a = t.guild_scheduled_event,
        o = r?.code === L.t02.INVALID_CANNOT_FRIEND_SELF,
        d = l8.VP && !o && tT(t),
        h = null == a ? (0, c.jsx)(sp.A, { invite: t, location: s }) : null,
        { label: m } = sA.useConfig({ location: "InviteAuthenticated" }),
        g = l8.VP && !nG.isPlatformEmbedded && !o;
    g && sA.getConfig({ location: "InviteAuthenticated.eligible" });
    let p =
        g && null != m
            ? {
                  text: (function (e) {
                      switch (e) {
                          case "download_discord_app":
                              return Q.intl.string(Q.t.jCQlbu);
                          case "download_app":
                              return Q.intl.string(Q.t["BK8LK+"]);
                          case "get_discord":
                              return Q.intl.string(Q.t.BjfDQq);
                      }
                  })(m),
                  onClick: function () {
                      (b.default.track(L.HAw.INVITE_CTA_CLICKED, {
                          action: "download_app",
                          invite_code: t.code,
                          guild_id: t.guild?.id,
                      }),
                          window.open((0, sx.SU)(), "_blank"),
                          b.default.track(L.HAw.DOWNLOAD_APP, {
                              platform: (0, sx.Vf)(),
                              ptb: !1,
                              released: !0,
                              referring_location: "Invite Landing Page",
                              qr_code: !1,
                          }));
                  },
              }
            : void 0;
    return (
        u.useEffect(() => {
            sE.A.requestDrain();
        }, []),
        (0, c.jsxs)("div", {
            children: [
                (0, c.jsxs)(w.Ay, {
                    children: [
                        null != a
                            ? (0, c.jsx)(lM, { channel: t.channel, guildScheduledEvent: a })
                            : (0, c.jsx)(i2.A, { invite: t }),
                        null != r &&
                            (0, c.jsx)("div", {
                                className: z.QX,
                                role: "alert",
                                children: (0, c.jsxs)(F.E, {
                                    variant: "body-sm/medium",
                                    color: "text-feedback-critical",
                                    style: { display: "flex", alignItems: "center", gap: 4 },
                                    children: [
                                        (0, c.jsx)(si.CircleErrorIcon, {
                                            size: "custom",
                                            width: 14,
                                            height: 14,
                                            color: "currentColor",
                                        }),
                                        " ",
                                        (0, t0.s)(r.code),
                                    ],
                                }),
                            }),
                        d
                            ? (0, c.jsx)(sN, {
                                  invite: t,
                                  onClick: i,
                                  className: null != r ? z.QX : void 0,
                                  notice: h,
                                  secondaryAction: p,
                              })
                            : (0, c.jsx)(sI, {
                                  invite: t,
                                  message: Q.intl.string(o ? Q.t.fIv16B : Q.t.ohMvm1),
                                  onClick: o ? l : i,
                                  className: null != r ? z.QX : void 0,
                                  notice: h,
                                  secondaryAction: p,
                              }),
                    ],
                }),
                null != a &&
                    null != t.guild &&
                    (0, c.jsx)(w.Ay, {
                        className: z.QX,
                        children: (0, c.jsx)(lH, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                    }),
            ],
        })
    );
}
function sv(e) {
    return l8.VP
        ? (0, c.jsx)(sy, { ...e })
        : (0, c.jsxs)(w.Ay, {
              children: [(0, c.jsx)(i2.A, { invite: e.invite }), (0, c.jsx)(w.KE, { className: z.eT })],
          });
}
function sy(e) {
    let { invite: t, inviteKey: n, rpcConnected: i, onContinue: l } = e,
        s = su.useConfig({ location: "InviteAppOpened" }).placement;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)(w.Ay, {
                children: [
                    (0, c.jsx)(i2.A, { invite: t }),
                    (0, c.jsx)("div", {
                        className: z.QX,
                        children: (0, c.jsx)(M.$, {
                            text: Q.intl.string(Q.t.UQvCf7),
                            onClick: function () {
                                (b.default.track(L.HAw.INVITE_CTA_CLICKED, {
                                    action: "open_app",
                                    invite_code: t.code,
                                    guild_id: t.guild?.id,
                                }),
                                    i ? E.Ay.openNativeAppModal(n) : E.Ay.openApp(n));
                            },
                            variant: "primary",
                            fullWidth: !0,
                        }),
                    }),
                    (0, c.jsx)("div", {
                        className: z.Ot,
                        children:
                            s === sc.IN_CONTENT
                                ? (0, c.jsx)(sf, {
                                      inviteCode: t.code,
                                      guildId: t.guild?.id,
                                      location: "InviteAppOpened",
                                  })
                                : (0, c.jsx)(M.$, {
                                      text: Q.intl.string(Q.t["2ixEBi"]),
                                      onClick: function () {
                                          (b.default.track(L.HAw.INVITE_CTA_CLICKED, {
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
            s === sc.BELOW_CONTENT &&
                (0, c.jsx)(sf, {
                    inviteCode: t.code,
                    guildId: t.guild?.id,
                    className: z.QX,
                    belowContent: !0,
                    location: "InviteAppOpened",
                }),
        ],
    });
}
function sS(e) {
    let { title: t } = e;
    return (0, c.jsxs)(w.Ay, { children: [(0, c.jsx)(w.hE, { children: t }), (0, c.jsx)(w.CK, {})] });
}
function sT(e) {
    let { banned: t, invite: n, handleDefaultTransition: i } = e,
        l = so.useConfig({ location: "InviteInvalid" }).placement;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)(w.Ay, {
                children: [
                    (0, c.jsx)(w.hE, { className: B()(z.Ot, z.QB), children: Q.intl.string(Q.t.kux01N) }),
                    (0, c.jsx)(w.tK, { children: t ? Q.intl.string(Q.t["5AkWAd"]) : Q.intl.string(Q.t["+qUJAj"]) }),
                    (0, c.jsx)(sI, { message: Q.intl.string(Q.t.fIv16B), onClick: i }),
                    l === sa.IN_CONTENT &&
                        (0, c.jsx)(sf, { inviteCode: n.code, guildId: n.guild?.id, location: "ExpiredInvite" }),
                    (0, c.jsx)("div", {
                        className: z.Ot,
                        style: { textAlign: "left" },
                        children: (0, c.jsx)(eu.Q, {
                            size: "sm",
                            textVariant: "body-sm/medium",
                            text: Q.intl.string(Q.t.urIwn4),
                            onClick: () => window.open(n$.A.getArticleURL(L.MVz.INVALID_INVITES), "_blank"),
                        }),
                    }),
                ],
            }),
            l === sa.BELOW_CONTENT &&
                (0, c.jsx)(sf, {
                    inviteCode: n.code,
                    guildId: n.guild?.id,
                    className: z.QX,
                    belowContent: !0,
                    location: "ExpiredInvite",
                }),
        ],
    });
}
function sb(e) {
    let { handleDefaultTransition: t } = e;
    return (0, c.jsxs)(w.Ay, {
        children: [
            (0, c.jsx)(w.hE, { children: Q.intl.string(Q.t.fOc4gn) }),
            (0, c.jsx)(sI, { message: Q.intl.string(Q.t.fIv16B), onClick: t }),
        ],
    });
}
var sR = n(334465);
let sL = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_dsa_webform",
    label: "Safety Experience Unauthenticated Report Form",
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 1, label: "EU user", config: { enabled: !0 } },
        { id: 2, label: "DSA E2E testing user", config: { enabled: !0 } },
    ],
});
f.Ay.initialize();
var sO = n(163050),
    sD = n(498206);
f.Ay.initialize();
var sk = n(701273);
function sw(e) {
    n.g.location.assign(e);
}
(f.Ay.initialize(), n(426620), f.Ay.initialize());
let sP = iC(lv),
    sG = iC(function (e) {
        let { transitionTo: t } = e,
            n = u.useCallback(
                (e) => {
                    let n;
                    ((n = (0, sR.B)(e, { path: L.BVt.CHANNEL(nW.pv.guildId(), nW.pv.channelId()) })),
                    +(n?.params?.channelId !== C.VV.ROLE_SUBSCRIPTIONS))
                        ? (t ?? eU.pX)(e)
                        : eU.bG(e);
                },
                [t],
            ),
            { isAuthenticated: i, loginStatus: l } = (0, f.cf)([e$.default], () => ({
                isAuthenticated: e$.default.isAuthenticated(),
                loginStatus: e$.default.getLoginStatus(),
            })),
            { location: s, redirectTo: r } = e,
            [a, o] = u.useState(i);
        function h(e) {
            let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
            ((0, j.Qh)({ handoffKey: t, handoffToken: n, handoffSource: i }), o(!1));
        }
        return ((0, sl.Ay)(() => {
            if (null != s) {
                let { handoff_key: e, handoff_token: t } = (0, d.qg)(s.search);
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
        a || l === L.aUe.LOGGING_IN)
            ? (0, c.jsx)(w.Ay, { children: (0, c.jsx)(ek.y, {}) })
            : (0, c.jsx)(lv, { ...e, transitionTo: n });
    }),
    sU = iC(function (e) {
        let { inviteKey: t, location: n, transitionTo: i, login: l } = e,
            s = u.useMemo(() => (0, eJ.m0)(t), [t]),
            r = (0, f.bG)([te.A], () => te.A.getInvite(t)),
            a = (0, f.bG)([ik.A], () => ik.A.getState(s)),
            o = (0, f.bG)([e$.default], () => e$.default.isAuthenticated()),
            d = (0, f.bG)([ed.A], () => ed.A.defaultRoute),
            h = (0, f.bG)([lR], () => lR.isUnderageAnonymous()),
            m = (function (e) {
                let [t, n] = u.useState(!1);
                return (
                    u.useEffect(() => {
                        let e = !1;
                        return (
                            eC().then((t) => {
                                e || "denied" !== t || n(!0);
                            }),
                            () => {
                                e = !0;
                            }
                        );
                    }, []),
                    t || e === L.fAW.OPEN_FAIL
                );
            })(a),
            g = (function (e) {
                let [t, n] = u.useState(!1);
                return (
                    u.useEffect(() => {
                        let e = setTimeout(() => n(!0), 500);
                        return () => clearTimeout(e);
                    }, []),
                    !e && !t
                );
            })(m),
            [p, A] = u.useState(!1);
        u.useLayoutEffect(() => {
            (a === L.fAW.OPEN || r?.state === L.elq.APP_OPENED) && A(!0);
        }, [r?.state, a]);
        let x = l ? sj : s_,
            j = u.useCallback((e) => E.Ay.getInviteContext(e, r), [r]),
            I = u.useCallback(
                (e) => {
                    null != r &&
                        (null != r.channel || e?.channel != null) &&
                        (r.guild?.id != null
                            ? E.Ay.transitionToInviteOnboarding(e ?? r, { transitionTo: i })
                            : E.Ay.transitionToInvite(e ?? r, { transitionTo: i }));
                },
                [r, i],
            ),
            N = u.useCallback(() => {
                (b.default.track(L.HAw.INVITE_CTA_CLICKED, {
                    action: "accept_invite",
                    invite_code: r?.code,
                    guild_id: r?.guild?.id,
                }),
                    E.Ay.acceptInvite({
                        inviteKey: t,
                        context: j(L.S3d.INVITE),
                        skipOnboarding: !0,
                        callback: (e) => {
                            (el(e), null != e.channel && (m ? I(e) : E.Ay.openApp(t, e.channel.id)));
                        },
                    }).catch((e) => {
                        (0, ss.mX)(e?.code);
                    }));
            }, [t, j, r?.code, r?.guild?.id, m, I]),
            C = u.useCallback(() => {
                i(d);
            }, [d, i]);
        ((0, sl.Ay)(() => {
            let e = e$.default.getAnalyticsToken();
            if (
                (null != e
                    ? _.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: e$.default.getId() })
                    : e$.default.isAuthenticated() && nz.rQ({ withAnalyticsToken: !0 }).catch(L.tEg),
                b.default.track(L.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }),
                (0, P.d0)("invite"),
                l8.VP || eZ.A.launch("discord://" + L.BVt.INVITE(t), () => void 0),
                !l && h)
            ) {
                let { baseCode: e } = (0, eJ.y$)(t);
                (0, eU.bG)(L.BVt.INVITE_LOGIN(e));
            }
        }),
            u.useEffect(() => {
                r?.state === L.elq.APP_NOT_OPENED && I();
            }, [r?.state, I]));
        let v = u.useRef(!1),
            y = u.useCallback((e) => {
                v.current = !0 === e;
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
                    d = (0, iZ.Ay)(i),
                    h = (0, iZ.Ay)(l);
                (u.useEffect(() => {
                    if (s === sj && i && !1 === d) {
                        let e = e$.default.getFingerprint();
                        if (null != e) {
                            let i = (0, eY.d)(e);
                            b.default.track(L.HAw.INVITE_LOGIN_SUCCESSFUL, {
                                invite_code: (0, eJ.m0)(n),
                                guild_id: t?.guild?.id,
                                channel_id: t?.channel?.id,
                                inviter_id: t?.inviter?.id,
                                prev_user_id: i,
                            });
                        }
                        E.Ay.acceptInvite({
                            inviteKey: n,
                            context: r(L.S3d.INVITE),
                            skipOnboarding: !0,
                            callback: a,
                        }).catch((e) => {
                            (0, ss.mX)(e?.code);
                        });
                    }
                }, [i, d, s, r, a, t, n]),
                    u.useEffect(() => {
                        if (null != t && s === s_ && i && !1 === d) {
                            let { channel: e } = t;
                            if (null != e)
                                if (((0, nc.C)(nu.zY.INVITE_UNCLAIMED), null != t.guild)) {
                                    let e = (0, st.Lt)(t.flags ?? 0, se.Q.IS_APPLICATION_BYPASS),
                                        n =
                                            t.guild.features?.includes(
                                                L.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED,
                                            ) &&
                                            t.guild.features?.includes(
                                                L.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL,
                                            );
                                    c.current || e || !n
                                        ? E.Ay.transitionToInviteOnboarding(t, { transitionTo: o })
                                        : o(L.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id));
                                } else E.Ay.transitionToInvite(t, { transitionTo: o });
                        }
                    }, [t, i, d, o, s, n, c]),
                    u.useEffect(() => {
                        null == t ||
                            (l !== h &&
                                (l === L.fAW.OPEN
                                    ? b.default.track(
                                          L.HAw.INVITE_APP_INVOKED,
                                          {
                                              invite_code: (0, eJ.m0)(n),
                                              guild_id: t.guild?.id,
                                              channel_id: t.channel?.id,
                                              inviter_id: t.inviter?.id,
                                              user_is_member: null != t.guild && null != e6.A.getGuild(t.guild.id),
                                              size_total: t.approximate_member_count,
                                              invite_type: null != t.type ? ty.Xd[t.type] : void 0,
                                          },
                                          { flush: !0 },
                                      )
                                    : l === L.fAW.OPEN_FAIL &&
                                      b.default.track(L.HAw.INVITE_APP_INVOKE_FAILED, {
                                          invite_code: (0, eJ.m0)(n),
                                          reason: "rpc_failed",
                                          invite_type: null != t.type ? ty.Xd[t.type] : void 0,
                                      })));
                    }, [t, l, h, n]));
            })({
                invite: r,
                inviteKey: t,
                authenticated: o,
                nativeAppState: a,
                mode: x,
                getAcceptInviteContext: j,
                handleContinue: I,
                transitionTo: i,
                joinDeferredRef: v,
            }),
            null == r)
        )
            return null;
        let S = a === L.fAW.OPEN;
        if (p || S || r.state === L.elq.APP_OPENED)
            return (0, c.jsx)(sv, { invite: r, inviteKey: t, rpcConnected: S, onContinue: I });
        let { state: T } = r;
        if (T === L.elq.APP_NOT_OPENED) return (0, c.jsx)(sb, { handleDefaultTransition: C });
        if ([L.elq.RESOLVING, L.elq.ACCEPTING, L.elq.APP_OPENING].includes(T)) {
            let e =
                T === L.elq.ACCEPTING ? Q.intl.string(Q.t["6wsY16"]) : (L.elq.RESOLVING, Q.intl.string(Q.t["Z+hCVU"]));
            return (0, c.jsx)(sS, { title: e });
        }
        if (T === L.elq.EXPIRED) return (0, c.jsx)(sT, { banned: !1, invite: r, handleDefaultTransition: C });
        if (T === L.elq.BANNED) return (0, c.jsx)(sT, { banned: !0, invite: r, handleDefaultTransition: C });
        if (T === L.elq.RESOLVED) {
            if (o && (0, st.Lt)(r.flags ?? 0, se.Q.IS_GUEST_INVITE))
                return (
                    E.Ay.openApp(t),
                    sn.u.set(sr.B, t),
                    (0, c.jsx)(sv, { invite: r, inviteKey: t, rpcConnected: S, onContinue: () => i(L.BVt.APP) })
                );
            if (null != r.type && ty.uR.has(r.type) && g)
                return (0, c.jsx)(sS, { title: Q.intl.string(Q.t["Z+hCVU"]) });
            if (!o && l8.VP)
                return x === sj
                    ? (0, c.jsx)(lv, { invite: r, transitionTo: i, location: n })
                    : (0, c.jsx)(lz, {
                          invite: r,
                          onLoginStart: function () {
                              b.default.track(L.HAw.INVITE_LOGIN, {
                                  invite_code: r?.code,
                                  guild_id: r?.guild?.id,
                                  channel_id: r?.channel?.id,
                                  inviter_id: r?.inviter?.id,
                              });
                          },
                          onRegister: y,
                          location: n,
                          transitionTo: i,
                      });
        }
        return T === L.elq.RESOLVED || T === L.elq.ERROR
            ? (0, c.jsx)(sC, {
                  invite: r,
                  inviteKey: t,
                  handleAccept: N,
                  handleDefaultTransition: C,
                  expirationLocation: o ? "InvitePage" : void 0,
              })
            : null;
    }),
    sB = iC(function (e) {
        let t = {
            guildTemplate: (0, f.bG)([eS.A], () => eS.A.getGuildTemplate(e.code)),
            nativeAppState: (0, f.bG)([ik.A], () => ik.A.getState(e.code)),
            authenticated: (0, f.bG)([e$.default], () => e$.default.isAuthenticated()),
            defaultRoute: (0, f.bG)([ed.A], () => ed.A.defaultRoute),
        };
        return (0, c.jsx)(l7, { ...e, ...t });
    }),
    sF = iC(l$),
    sM = iC(function (e) {
        let { inviteKey: t, transitionTo: n } = e,
            i = (0, f.bG)([te.A], () => te.A.getInvite(t));
        return (
            u.useEffect(() => {
                let e = e$.default.getAnalyticsToken();
                (null != e &&
                    _.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: e$.default.getId() }),
                    (0, P.d0)("invite_mobile"),
                    b.default.track(L.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }));
            }, []),
            (0, c.jsx)(nw, {
                invite: i,
                onAcceptInvite: function (e) {
                    nS(e, t, i);
                },
                onOpenAppAfterRegistration: function (e) {
                    nS(e, t, i, { didRegister: !0 });
                },
                transitionTo: n,
            })
        );
    }),
    sV = iC(lz),
    sH = iC(function (e) {
        let { location: t, transitionTo: i = eU.pX } = e,
            [l, s] = u.useState("submitting");
        function r() {
            return eq().os?.family === "Android" || eq().os?.family === "iOS"
                ? null
                : (0, c.jsx)(M.$, {
                      text: Q.intl.string(Q.t.dKhVQN),
                      fullWidth: !0,
                      onClick: () => i(L.BVt.LOGIN, { source: "authorizeIPAdress" }),
                  });
        }
        if (
            ((0, sl.Ay)(() => {
                (0, P.d0)("authorize_ip");
                let e = (0, em.A)(t);
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
        )
            return (0, c.jsxs)(w.Ay, {
                children: [
                    (0, c.jsx)("img", { alt: "", src: n(792009), className: z.SX }),
                    (0, c.jsx)(w.hE, { className: z.QB, children: Q.intl.string(Q.t["f/54az"]) }),
                    (0, c.jsx)(w.tK, { className: z.C2, children: Q.intl.string(Q.t.i3ehMr) }),
                    r(),
                ],
            });
        if ("succeeded" === l) {
            let e = r();
            return (0, c.jsxs)(w.Ay, {
                contentClassName: sD.oe,
                children: [
                    (0, c.jsx)(w.hE, { className: z.QB, children: Q.intl.string(Q.t.iG0SlK) }),
                    (0, c.jsxs)(eD.B, {
                        gap: 40,
                        children: [(0, c.jsx)(w.tK, { children: Q.intl.string(Q.t["Elv+qt"]) }), e],
                    }),
                ],
            });
        }
        return (0, c.jsxs)(w.Ay, {
            children: [(0, c.jsx)(w.CK, {}), (0, c.jsx)(w.hE, { children: Q.intl.string(Q.t["9exy+V"]) })],
        });
    }),
    sW = iC(function (e) {
        let { location: t } = e,
            [i, l] = u.useState("submitting");
        return (u.useEffect(() => {
            (0, P.d0)("authorize_payment");
            let e = (0, em.A)(t);
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
            ? (0, c.jsxs)(w.Ay, {
                  children: [
                      (0, c.jsx)("img", { alt: "", src: n(678985), className: z.SX }),
                      (0, c.jsx)(w.hE, { className: z.QB, children: Q.intl.string(Q.t.GHRpue) }),
                      (0, c.jsx)(w.tK, { className: z.C2, children: Q.intl.string(Q.t["1nO55v"]) }),
                  ],
              })
            : "succeeded" === i
              ? (0, c.jsxs)(w.Ay, {
                    children: [
                        (0, c.jsx)("img", { alt: "", src: n(586430), className: z.SX }),
                        (0, c.jsx)(w.hE, { className: z.QB, children: Q.intl.string(Q.t.ihHX53) }),
                        (0, c.jsx)(w.tK, { className: z.C2, children: Q.intl.string(Q.t["pGPCv+"]) }),
                    ],
                })
              : (0, c.jsxs)(w.Ay, {
                    children: [(0, c.jsx)(w.CK, {}), (0, c.jsx)(w.hE, { children: Q.intl.string(Q.t.T3vC7n) })],
                });
    }),
    sK = iC(function (e) {
        let { location: t, transitionTo: n = sw } = e,
            [i, l] = u.useState("submitting"),
            s = u.useRef(void 0);
        (0, sl.Ay)(() => {
            (0, P.d0)("verify_email");
            let e = (0, em.A)(t);
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
                n(L.BVt.LOGIN, { source: "verify_email" });
            }, [n]),
            a = u.useCallback(() => {
                (b.default.track(L.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: s.current }),
                    (0, sk.A)("verify_email"));
            }, []);
        return "failed" === i
            ? (0, c.jsx)(eG, {
                  title: Q.intl.string(Q.t["PCgG3+"]),
                  subtitle: Q.intl.string(Q.t.tQpeA3),
                  buttonText: Q.intl.string(Q.t.dKhVQN),
                  onButtonClick: r,
              })
            : "succeeded" === i
              ? (0, c.jsx)(eG, {
                    title: Q.intl.string(Q.t["dAfGb+"]),
                    buttonText: Q.intl.string(Q.t["uJWIj/"]),
                    onButtonClick: a,
                    image: (0, c.jsx)(eL, { alt: Q.intl.string(Q.t["dAfGb+"]) }),
                })
              : (0, c.jsx)(eG, {
                    title: Q.intl.string(Q.t["0c8+5n"]),
                    subtitle: Q.intl.string(Q.t.ULTCBE),
                    loading: !0,
                });
    }),
    sQ = iC(function () {
        let [e, t] = u.useState(""),
            [i, l] = u.useState(""),
            [s, r] = u.useState(!1),
            [a, o] = u.useState(!1),
            [d, h] = u.useState(null),
            [m, g] = u.useState(null),
            p = (0, f.bG)([ex.A], () => ex.A.getCountryCode()),
            A = p.code.split(" ")[0],
            E = (0, c.jsxs)(w.Ay, {
                children: [
                    (0, c.jsx)(w._V, { src: n(142041) }),
                    (0, c.jsxs)(w.hE, {
                        className: B()(z.QX, ej.Uu, ej.wq, ej.Hu),
                        children: [
                            Q.intl.string(Q.t.WWzQta),
                            (0, c.jsx)(ep.CircleCheckIcon, { size: "md", color: "currentColor", className: z.oY }),
                        ],
                    }),
                ],
            });
        return a
            ? E
            : (0, c.jsxs)(w.Ay, {
                  children: [
                      (0, c.jsx)(w.hE, { children: Q.intl.string(Q.t.o4JNrO) }),
                      (0, c.jsx)(w.tK, { className: z.Ot, children: Q.intl.string(Q.t.y0tVbq) }),
                      (0, c.jsxs)(w.eB, {
                          className: z.QX,
                          children: [
                              (0, c.jsx)(e_.A, {
                                  label: Q.intl.string(Q.t["eJnn0+"]),
                                  alpha2: p.alpha2,
                                  countryCode: A,
                                  value: e,
                                  autoComplete: "off",
                                  spellCheck: "false",
                                  onChange: t,
                                  forceMode: eE.Pd.PHONE,
                                  error: d,
                              }),
                              (0, c.jsx)(w.pd, {
                                  className: z.QX,
                                  label: Q.intl.string(Q.t.OdzNbm),
                                  value: i,
                                  onChange: l,
                                  maxLength: 6,
                                  error: m,
                              }),
                              (0, c.jsx)(eu.Q, {
                                  text: Q.intl.string(Q.t["5b60gi"]),
                                  onClick: async function () {
                                      try {
                                          await eA.A.resendCode(e);
                                      } catch (e) {
                                          g(e.body.message);
                                      }
                                  },
                              }),
                              (0, c.jsx)("div", {
                                  className: z.QX,
                                  children: (0, c.jsx)(M.$, {
                                      text: Q.intl.string(Q.t.i4jeWR),
                                      fullWidth: !0,
                                      onClick: async function () {
                                          r(!0);
                                          try {
                                              let { token: t } = await eA.A.verifyPhone(A + e, i);
                                              (h(null), g(null), o(!0), eA.A.validatePhoneForSupport(t));
                                          } catch (e) {
                                              e.body.message
                                                  ? (h(null), g(e.body.message))
                                                  : (h(e.body.phone), g(e.body.code));
                                          } finally {
                                              r(!1);
                                          }
                                      },
                                      loading: s,
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    }),
    sq = iC(sO.A),
    sz = iC(iO),
    sX = iC(ef),
    sY = iC(function (e) {
        let { location: t } = e,
            [n, i] = u.useState(!1),
            { verifySuccess: l, verifyErrors: s, redirectGuildId: r } = (0, f.bG)([eH], () => eH.getState());
        function a() {
            let e, t;
            ((e = (function (e) {
                let t = eq().os?.family;
                if ("Android" === t || "iOS" === t) {
                    let t = e$.default.getFingerprint(),
                        n = (0, eX.I_)();
                    return (
                        eK()(null != e, "generateAppPath: guildId cannot be null"),
                        (0, eX.Ay)((0, ez.jN)(e), { utmSource: "verify_hub_email", fingerprint: t, attemptId: n })
                    );
                }
                return "discord://";
            })(r)),
                null != (t = (0, eX.X7)(e)) &&
                    b.default.track(L.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, eY.v)(t.fingerprint),
                        attempt_id: t.attemptId,
                        source: t.utmSource,
                    }),
                eZ.A.launch(e, (e) => {
                    e || (0, eU.bG)(ed.A.fallbackRoute);
                }),
                i(!0));
        }
        return (u.useEffect(() => {
            let e = (0, em.A)(t);
            (eO.A.verify(e), (0, P.d0)("verify_hub_email"));
        }, [t]),
        n)
            ? (0, c.jsx)(eG, {
                  title: Q.intl.string(Q.t.csrAMJ),
                  subtitle: Q.intl.string(Q.t["m1+IBn"]),
                  buttonText: Q.intl.string(Q.t.fIv16B),
                  onButtonClick: () => (0, eU.pX)(L.BVt.CHANNEL(r)),
              })
            : l
              ? (0, c.jsx)(eG, {
                    title: Q.intl.string(Q.t["dAfGb+"]),
                    buttonText: Q.intl.string(Q.t["uJWIj/"]),
                    onButtonClick: a,
                    image: (0, c.jsx)(eL, { alt: Q.intl.string(Q.t["dAfGb+"]) }),
                })
              : null != s
                ? (0, c.jsx)(eG, {
                      title: Q.intl.string(Q.t["PCgG3+"]),
                      subtitle: Q.intl.string(Q.t.tQpeA3),
                      buttonText: Q.intl.string(Q.t["uJWIj/"]),
                      onButtonClick: a,
                  })
                : (0, c.jsx)(eG, {
                      title: Q.intl.string(Q.t["0c8+5n"]),
                      subtitle: Q.intl.string(Q.t.ULTCBE),
                      loading: !0,
                  });
    }),
    s$ = iC(function (e) {
        let { match: t, location: n } = e;
        return (0, c.jsx)(ib, {
            match: t,
            location: n,
            attemptDeepLink: async function (e, t) {
                await (0, iy.W)(nV.XK.CHANNEL, {
                    guildId: e.params.guildId,
                    channelId: e.params.channelId,
                    messageId: e.params.messageId,
                    search: t.search,
                });
            },
        });
    }),
    sZ = iC(function (e) {
        let { match: t, location: n } = e;
        return (0, c.jsx)(ib, {
            match: t,
            location: n,
            attemptDeepLink: async function (e) {
                await (0, iy.W)(nV.XK.GAME_SHOP, {
                    guildId: e.params.guildId,
                    pageIndex: e.params.pageIndex,
                    skuId: e.params.skuId,
                    slug: e.params.slug,
                });
            },
        });
    }),
    sJ = iC(function (e) {
        let { match: t, location: n } = e;
        return (0, c.jsx)(ib, {
            match: t,
            location: n,
            attemptDeepLink: async function (e, t) {
                await (0, iy.W)(nV.XK.PICK_GUILD_SETTINGS, {
                    section: e.params.section,
                    subsection: e.params.subsection,
                    search: t.search,
                });
            },
        });
    }),
    s0 = iC(function (e) {
        let { location: t } = e,
            n = (0, f.bG)([e$.default], () => e$.default.isAuthenticated()),
            i = (0, f.bG)([ev.A], () => ev.A.hasLoadedExperiments),
            l = sL.useExperiment({ location: "RSL - Landing Page" }, { autoTrackExposure: !0 }).enabled,
            [s, r] = u.useState(!1),
            [a, o] = u.useState(Q.intl.string(Q.t["9exy+V"])),
            [d, h] = u.useState(!0);
        function m(e) {
            switch (e) {
                case L.t02.INVALID_FORM_BODY:
                case L.t02.DSA_RSL_REPORT_NOT_FOUND:
                    o(Q.intl.string(Q.t.bzXDfc));
                    break;
                case L.t02.DSA_RSL_ALREADY_REQUESTED:
                    o(Q.intl.string(Q.t.rV00wq));
                    break;
                case L.t02.DSA_RSL_LIMITED_TIME:
                    o(Q.intl.string(Q.t["0dI29h"]));
                    break;
                case L.t02.DSA_RSL_REPORT_INELIGIBLE:
                    o(Q.intl.string(Q.t["RGa/Gb"]));
                    break;
                default:
                    o(Q.intl.string(Q.t["0QLzfv"]));
            }
        }
        return (
            u.useEffect(() => {
                n
                    ? (h(!0),
                      nz
                          .rQ({ withAnalyticsToken: !0 })
                          .then(() => h(!1))
                          .catch(() => h(!1)))
                    : h(!1);
            }, [n]),
            u.useEffect(() => {
                i || l || p.A.getExperiments();
            }, [i, l]),
            u.useEffect(() => {
                (r(!0),
                    (async function (e) {
                        try {
                            let t = null != e ? await (0, nY.q)(e) : void 0;
                            null != t ? o(Q.intl.string(Q.t.e6mZMt)) : m(t.body?.code);
                        } catch (e) {
                            m(e.body?.code);
                        } finally {
                            r(!1);
                        }
                    })((0, em.A)(t)),
                    (0, P.d0)("report_second_look"));
            }, [t]),
            l &&
                !d &&
                (0, c.jsxs)(w.Ay, {
                    children: [(0, c.jsx)(w.hE, { className: z.QB, children: a }), s && (0, c.jsx)(ek.y, {})],
                })
        );
    }),
    s1 = iC(en),
    s2 = iC(function (e) {
        let { match: t, location: i } = e,
            l = (0, d.qg)(i.search).token,
            [s, r] = u.useState("loading"),
            a = u.useRef(!1),
            o = u.useCallback(async (e) => {
                try {
                    (b.default.track(L.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                        await p.A.oneTimeLogin(e),
                        r("login_success"),
                        b.default.track(L.HAw.LOGIN_SUCCESSFUL, { source: "web_page", login_method: "one_time_login" }),
                        n.g.location.assign(L.BVt.APP));
                } catch (t) {
                    let e = t instanceof Error ? t.message : "Unknown error";
                    (b.default.track(L.HAw.ONE_TIME_LOGIN_ERROR, {
                        source: "web_page",
                        error_reason: "api_error",
                        error_message: e,
                    }),
                        r("error"));
                }
            }, []),
            h = u.useCallback((e) => {
                let t = e$.default.getFingerprint() ?? e$.default.getId(),
                    n = `discord://login/one-time?token=${encodeURIComponent(e)}`;
                eZ.A.launch(n, (e) => {
                    e
                        ? (b.default.track(L.HAw.DEEP_LINK_CLICKED, {
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
                    let t = e$.default.getFingerprint() ?? e$.default.getId(),
                        i = e$.default.getInstallationForTracking();
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((n) => {
                            let { default: l } = n;
                            l.request(L.e$_.DEEP_LINK, {
                                type: nV.XK.ONE_TIME_LOGIN,
                                params: { token: e, fingerprint: t, installationId: i },
                            })
                                .then((n) => {
                                    n
                                        ? (b.default.track(L.HAw.DEEP_LINK_CLICKED, {
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
            (u.useEffect(() => {
                let e = null != l && "string" == typeof l,
                    t = m.Fr ? "mobile" : m.v1 ? "tablet" : (0, nG.xl)() ? "desktop_app" : "web";
                if ((b.default.track(L.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: e, device_type: t }), !e))
                    return void r("error");
                if (m.Fr || m.v1) {
                    let e = b.default.getSuperProperties()?.os;
                    b.default.track(L.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_ui_shown",
                        device_type: t,
                        platform: e,
                    });
                    return;
                }
                (0, nG.xl)() ? o(l) : a.current || ((a.current = !0), r("rpc_attempting"), g(l));
            }, [l, i, o, g]),
            m.Fr || m.v1)
        ) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, c.jsx)(nM, { token: l, hasError: "error" === s, errorReason: e });
        }
        if ((0, eU.MX)()) return null;
        if ("app_launched" === s)
            return (0, c.jsx)(nH, {
                title: Q.intl.string(Q.t.RvUUOy),
                subtitle: Q.intl.string(Q.t["5/lR0g"]),
                buttonText: Q.intl.string(Q.t["2ixEBi"]),
                buttonOnClick: () => {
                    (b.default.track(L.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: s }), o(l));
                },
            });
        if ("app_launch_not_supported" === s)
            return (0, c.jsx)(nH, {
                title: Q.intl.string(Q.t.qq4tjT),
                subtitle: Q.intl.string(Q.t.CVxYRo),
                buttonText: Q.intl.string(Q.t["2ixEBi"]),
                buttonOnClick: () => o(l),
            });
        if ("error" === s) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, c.jsx)(nH, {
                title: Q.intl.string(Q.t.RtCSr1),
                subtitle: Q.intl.string(Q.t["S+YjYJ"]),
                buttonText: Q.intl.string(Q.t.j3cG2p),
                buttonOnClick: () => {
                    (b.default.track(L.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                        (0, eU.pX)(L.BVt.LOGIN));
                },
            });
        }
        return (0, c.jsx)(w.Ay, { children: (0, c.jsx)(w.CK, {}) });
    });
class s4 extends u.PureComponent {
    state = { splash: null, redirectTo: null, backgroundId: null };
    hasTriggeredInviteResolve = !1;
    experimentFallbackTimeout = null;
    static getDerivedStateFromProps(e, t) {
        let { invite: n, location: i } = e,
            { backgroundId: l } = t,
            s = (0, d.qg)(i.search).redirect_to ?? null;
        (null == s || "" === s || s.startsWith(L.BVt.ME) || (!(0, g.e)(s) && !ec(s))) && (s = null);
        let r = null;
        if (null == n) r = (0, eI.u)(s);
        else {
            let { guild: e, target_application: t } = n;
            null != t
                ? null != l && (r = (0, id.uD)(t.id, l, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (r = tt.Ay.getGuildSplashURL({ id: e.id, splash: e.splash }));
        }
        return { redirectTo: s, splash: r };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        (null != e &&
            (!t && n && p.A.getExperiments(!0),
            null != e$.default.getInstallationForTracking() && (0, ey.fetchInstallationExperiments)(null),
            b.default.track(
                L.HAw.INVITE_OPENED,
                { invite_code: (0, eJ.m0)(e), load_time: im.getTimeSinceNavigationStart() },
                { flush: !0 },
            )),
            t
                ? this.maybeResolveInvite()
                : null != e && (this.experimentFallbackTimeout = setTimeout(this.maybeResolveInvite, 2e3)),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            k.initialize(),
            (0, P.DC)());
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
        if (e?.state === L.elq.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, id.RG)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await E.Ay.resolveInvite(e, L.S3d.INVITE, {
            withGames: !0,
            withGuildExperiments: m.Fr || m.v1,
        });
        if (null != t && (el(t), null != t.type && ty.uR.has(t.type))) {
            if ("denied" === (await eC()))
                return void b.default.track(L.HAw.INVITE_APP_INVOKE_FAILED, {
                    invite_code: (0, eJ.m0)(e),
                    reason: "lna_denied",
                    invite_type: ty.Xd[t.type],
                });
            E.Ay.openNativeAppModal(e);
        }
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (b.default.track(
                L.HAw.GUILD_TEMPLATE_OPENED,
                { guild_template_code: e, load_time: im.getTimeSinceNavigationStart() },
                { flush: !0 },
            ),
            eT.A.resolveGuildTemplate(e),
            eT.A.openNativeAppModal(e));
    }
    resolveGiftCode() {
        let { giftCode: e } = this.props;
        null != e &&
            A.Ay.resolveGiftCode(e, { withApplication: !0, withSubscriptionPlan: !0 })
                .then((t) => {
                    null != t && null == t.giftCode.promotion && A.Ay.openNativeGiftCodeModal(e);
                })
                .catch(A.Ay.reportUnexpectedGiftCodeError);
    }
    render() {
        let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
        return (0, c.jsxs)(iv.A, {
            splash: e,
            children: [
                (0, c.jsx)(ei.A, { path: L.BVt.LOGIN_HANDOFF, render: (e) => (0, c.jsx)(sG, { ...e, redirectTo: t }) }),
                (0, c.jsx)(ei.A, { path: L.BVt.LOGIN_ONE_TIME, render: (e) => (0, c.jsx)(s2, { ...e }) }),
                (0, c.jsx)(ei.A, {
                    impressionName: h.ImpressionNames.USER_LOGIN,
                    path: L.BVt.LOGIN,
                    render: (e) => (0, c.jsx)(sP, { ...e, redirectTo: t }),
                }),
                (0, c.jsx)(ei.A, {
                    impressionName: h.ImpressionNames.USER_REGISTRATION,
                    path: L.BVt.REGISTER,
                    render: (e) => (0, c.jsx)(sV, { ...e, redirectTo: t }),
                }),
                (0, c.jsx)(ei.A, {
                    path: L.BVt.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, c.jsx)(sF, { login: !0, ...e, transitionTo: e.transitionTo ?? eU.pX }),
                }),
                (0, c.jsx)(ei.A, {
                    path: L.BVt.GIFT_CODE(":giftCode"),
                    render: (e) => (0, c.jsx)(sF, { ...e, transitionTo: e.transitionTo ?? eU.pX }),
                }),
                (0, c.jsx)(ei.A, {
                    path: [L.BVt.INVITE_LOGIN(":inviteCode"), L.BVt.INVITE(":inviteCode")],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n,
                                },
                                location: i,
                                transitionTo: l = eU.pX,
                            } = e,
                            s = (0, eJ.fB)(t ?? "", i.search);
                        return m.Fr || m.v1
                            ? (0, c.jsx)(sM, { inviteKey: s, transitionTo: l }, s)
                            : (0, c.jsx)(
                                  sU,
                                  {
                                      inviteKey: s,
                                      location: i,
                                      transitionTo: l,
                                      login: n === L.BVt.INVITE_LOGIN(":inviteCode"),
                                  },
                                  s,
                              );
                    },
                }),
                (0, c.jsx)(ei.A, {
                    path: [
                        L.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                        L.BVt.GUILD_TEMPLATE(":guildTemplateCode"),
                    ],
                    render: (e) => {
                        let {
                            match: {
                                params: { guildTemplateCode: t },
                                path: n,
                            },
                            location: i,
                            transitionTo: l = eU.pX,
                        } = e;
                        return m.Fr || m.v1
                            ? (0, c.jsx)(l6, { code: t }, t)
                            : (0, c.jsx)(sB, {
                                  code: t ?? "",
                                  location: i,
                                  transitionTo: l,
                                  login: n === L.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, c.jsx)(ei.A, { path: L.BVt.VERIFY, render: (e) => (0, c.jsx)(sK, { ...e }) }),
                (0, c.jsx)(ei.A, { path: L.BVt.VERIFY_HUB_EMAIL, render: (e) => (0, c.jsx)(sY, { ...e }) }),
                (0, c.jsx)(ei.A, { path: L.BVt.VERIFY_REQUEST, render: (e) => (0, c.jsx)(sQ, { ...e }) }),
                (0, c.jsx)(ei.A, { path: L.BVt.DISABLE_EMAIL_NOTIFICATIONS, render: (e) => (0, c.jsx)(sz, { ...e }) }),
                (0, c.jsx)(ei.A, {
                    path: L.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, c.jsx)(sX, { ...e }),
                }),
                (0, c.jsx)(ei.A, { path: L.BVt.AUTHORIZE_IP, render: (e) => (0, c.jsx)(sH, { ...e }) }),
                (0, c.jsx)(ei.A, {
                    path: L.BVt.REJECT_IP,
                    render: (e) => (0, c.jsx)(sq, { source: L.BVt.REJECT_IP, ...e }),
                }),
                (0, c.jsx)(ei.A, {
                    path: L.BVt.REJECT_MFA,
                    render: (e) => (0, c.jsx)(sq, { source: L.BVt.REJECT_MFA, ...e }),
                }),
                (0, c.jsx)(ei.A, { path: L.BVt.AUTHORIZE_PAYMENT, render: (e) => (0, c.jsx)(sW, { ...e }) }),
                (0, c.jsx)(ei.A, { path: L.BVt.RESET, render: (e) => (0, c.jsx)(sq, { source: L.BVt.RESET, ...e }) }),
                (0, c.jsx)(ei.A, {
                    path: L.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, c.jsx)(sJ, { ...e }),
                }),
                (0, c.jsx)(ei.A, {
                    path: L.BVt.CHANNELS_GAME_SHOP(nW.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, c.jsx)(sZ, { ...e }),
                }),
                (0, c.jsx)(ei.A, {
                    path: L.BVt.CHANNEL(nW.pv.guildId(), nW.pv.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, c.jsx)(s$, { ...e }),
                }),
                (0, c.jsx)(ei.A, { path: L.BVt.REPORT, render: () => (0, c.jsx)(ic, {}) }),
                (0, c.jsx)(ei.A, { path: L.BVt.REPORT_SECOND_LOOK, render: (e) => (0, c.jsx)(s0, { ...e }) }),
                (0, c.jsx)(ei.A, {
                    path: L.BVt.ACCOUNT_REVERT(":token"),
                    render: (e) => (0, c.jsx)(s1, { ...e, transitionTo: e.transitionTo ?? eU.pX }),
                }),
            ],
        });
    }
}
let s8 = f.Ay.connectStores([e$.default, te.A, iu.A, ev.A, eS.A], (e) => {
    let { match: t, location: n } = e,
        i = t?.params?.inviteCode,
        l = null != i ? (0, eJ.fB)(i, n.search) : void 0,
        s = t?.params?.giftCode,
        r = t?.params?.guildTemplateCode;
    return {
        inviteKey: l,
        isAuthenticated: e$.default.isAuthenticated(),
        giftCode: s,
        guildTemplateCode: r,
        gift: null != s ? iu.A.get(s) : null,
        invite: null != l ? te.A.getInvite(l) : null,
        guildTemplate: null != r ? eS.A.getGuildTemplate(r) : null,
        hasLoadedExperiments: ev.A.hasLoadedExperiments,
    };
})(s4);
