(n.r(t), n.d(t, { default: () => sZ }));
var l,
    i,
    s,
    r,
    a,
    o,
    u = n(477900),
    c = n(582128),
    d = n(492462),
    h = n(613412),
    m = n(607399),
    g = n(470562),
    f = n(855986),
    p = n(830215),
    E = n(869038),
    A = n(574332),
    _ = n(620632),
    x = n(73153),
    j = n(6981),
    I = n(376943),
    C = n(718446),
    N = n(746080),
    v = n(355097),
    T =
        (((l = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (l.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        (l.GUILD_ANALYTICS_SETTING = "guild_analytics_setting"),
        (l.GAME_CLAIM = "game_claim"),
        l);
function y(e) {
    let t = decodeURIComponent(e),
        n = (0, I.vu)(t);
    return null != n && n.channelId === N.VV.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t.toLowerCase() === (0, C.T)(v.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)
          ? "role_subscription_setting"
          : void 0;
}
var S = n(115036),
    b = n(129230),
    R = n(272355),
    L = n(652215);
function O(e, t) {
    b.default.track(L.HAw.BROWSER_HANDOFF_SUCCEEDED, { authenticated: e, handoff_source: t });
}
class D extends R.A {
    _initialize() {
        (x.h.subscribe("BROWSER_HANDOFF_END", this.handleEnd),
            x.h.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff));
    }
    _terminate() {
        (x.h.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd),
            x.h.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff));
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: l, handoffSource: i } = e;
        null != n
            ? _.Bo.post({ url: L.Rsh.HANDOFF_EXCHANGE, body: { key: t, handoff_token: n }, rejectWithError: !1 }).then(
                  (e) => {
                      let { body: t } = e;
                      ((0, j.uA)(t.user), p.A.loginToken(t.token, !1), O(!0, i));
                  },
                  (e) => {
                      (null != l && O(!1, i),
                          p.A.setFingerprint(l),
                          (0, j.mZ)(),
                          i === T.ROLE_SUBSCRIPTION &&
                              b.default.track(L.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: e.message ?? e.text,
                                  handoff_source: i,
                              }));
                  },
              )
            : null != l
              ? (p.A.setFingerprint(l), O(!1, i), (0, j.mZ)())
              : (p.A.setFingerprint(l), (0, j.J0)());
    }
    handleEnd = (e) => {
        let { handoffToken: t, fingerprint: n } = e,
            l = S.A.key;
        null != l && S.A.isHandoffAvailable()
            ? this.handleHandoff({ handoffKey: l, handoffToken: t, fingerprint: n, handoffSource: void 0 })
            : (p.A.setFingerprint(null), (0, j.J0)());
    };
}
let k = new D();
var w = n(854378),
    G = n(210714),
    P = n(430690),
    U = n(503698),
    B = n.n(U),
    F = n(834730),
    M = n(821609),
    V = n(181658),
    H = n(188567),
    W = n(499785),
    K = (((i = {}).START = "start"), (i.PASSWORD = "password"), (i.SUCCESS = "success"), (i.FAILED = "failed"), i),
    Q = n(792996),
    q = n(652989),
    X = n(221851);
function z(e) {
    let { setOriginalEmail: t, setSlide: l, ready: i, token: s } = e,
        [r, a] = c.useState(!1),
        [o, d] = c.useState(null),
        [m, g] = c.useState(null),
        [f, p] = c.useState(""),
        E = c.useRef(null);
    return (
        c.useEffect(() => {
            i && E.current?.focus();
        }, [i]),
        (0, u.jsxs)("div", {
            children: [
                (0, u.jsx)(w._V, { src: null == m ? n(79418) : n(579656), className: B()(X.SX, X.Ot) }),
                (0, u.jsx)(w.hE, { children: Q.intl.string(Q.t.IfBQ56) }),
                null != m && "" !== m
                    ? (0, u.jsx)(F.E, { variant: "body-sm/normal", color: "text-feedback-critical", children: m })
                    : null,
                (0, u.jsxs)(w.eB, {
                    className: B()(X.SX, X.QX),
                    children: [
                        (0, u.jsx)(w.pd, {
                            name: "password",
                            type: "password",
                            revealable: !0,
                            label: Q.intl.string(Q.t["8dM4FO"]),
                            setRef: E,
                            className: X.SX,
                            value: f,
                            onChange: p,
                            error: o,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: Q.intl.string(Q.t["yY/PXY"]),
                        }),
                        (0, u.jsx)("div", {
                            className: X.Ot,
                            children: (0, u.jsx)(M.$, {
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
                                                    (p(""), t(n), l(K.SUCCESS));
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
                (0, u.jsx)("div", {
                    className: q.UD,
                    children: (0, u.jsx)(M.$, {
                        text: Q.intl.string(Q.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: function () {
                            (p(""), l(K.START));
                        },
                    }),
                }),
            ],
        })
    );
}
var Y = n(825484),
    $ = n(202501);
function J(e) {
    let { children: t } = e;
    return (0, u.jsx)("li", {
        className: q.Aw,
        children: (0, u.jsx)(F.E, { variant: "body-sm/medium", color: "text-default", children: t }),
    });
}
function Z(e) {
    let { setSlide: t, transitionTo: l } = e;
    return (0, u.jsxs)("div", {
        children: [
            (0, u.jsx)(w._V, { src: n(79418), className: B()(X.SX, X.Ot) }),
            (0, u.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t["8UcxI6"]) }),
            (0, u.jsx)(F.E, { variant: "body-md/normal", children: Q.intl.string(Q.t.O37hMl) }),
            (0, u.jsxs)(w.eB, {
                className: B()(X.SX, X.QX),
                children: [
                    (0, u.jsx)(F.E, { variant: "body-sm/normal" }),
                    (0, u.jsxs)("ul", {
                        className: q.qI,
                        children: [
                            (0, u.jsx)(J, { children: Q.intl.string(Q.t.Gj1Zry) }),
                            (0, u.jsx)($.A, {}),
                            (0, u.jsx)(J, { children: Q.intl.string(Q.t["8C6t3B"]) }),
                            (0, u.jsx)($.A, {}),
                            (0, u.jsx)(J, { children: Q.intl.string(Q.t.mToZMA) }),
                            (0, u.jsx)($.A, {}),
                            (0, u.jsx)(J, { children: Q.intl.string(Q.t.TPEvkc) }),
                            (0, u.jsx)($.A, {}),
                            (0, u.jsx)(J, { children: Q.intl.string(Q.t.H8Y1Ln) }),
                        ],
                    }),
                ],
            }),
            (0, u.jsxs)(Y.e, {
                direction: "vertical",
                fullWidth: !0,
                className: q.UD,
                children: [
                    (0, u.jsx)(M.$, { text: Q.intl.string(Q.t.GgCRqR), onClick: () => t(K.PASSWORD) }),
                    (0, u.jsx)(M.$, {
                        text: Q.intl.string(Q.t["B/yHcQ"]),
                        variant: "secondary",
                        onClick: () => l(L.BVt.LOGIN, { source: "account_revert" }),
                    }),
                ],
            }),
        ],
    });
}
function ee(e) {
    let { email: t } = e;
    return (0, u.jsxs)("div", {
        children: [
            (0, u.jsx)(w._V, { src: n(79418), className: B()(X.SX, X.Ot) }),
            (0, u.jsx)(w.hE, { children: Q.intl.string(Q.t.ailkVG) }),
            (0, u.jsx)(w.tK, { children: Q.intl.format(Q.t["4ZMVCI"], { email: t }) }),
            (0, u.jsx)(F.E, {
                className: B()(X.QB, X.QX),
                variant: "body-md/normal",
                children: Q.intl.string(Q.t["dpAn+8"]),
            }),
        ],
    });
}
function et(e) {
    let { transitionTo: t, token: n, width: l } = e,
        [i, s] = c.useState(K.START),
        [r, a] = c.useState(null),
        [o, d] = c.useState(""),
        m = { impression_group: h.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, u.jsx)("div", {
        style: { margin: "8px" },
        children: (0, u.jsxs)(P.t, {
            activeSlide: i,
            width: l,
            onSlideReady: a,
            children: [
                (0, u.jsx)(P.q, {
                    id: K.START,
                    impressionProperties: m,
                    impressionName: h.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, u.jsx)(Z, { setSlide: s, transitionTo: t }),
                }),
                (0, u.jsx)(P.q, {
                    id: K.PASSWORD,
                    impressionProperties: m,
                    impressionName: h.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, u.jsx)(z, {
                        setOriginalEmail: d,
                        setSlide: s,
                        transitionTo: t,
                        ready: r === K.PASSWORD,
                        token: n,
                    }),
                }),
                (0, u.jsx)(P.q, {
                    id: K.SUCCESS,
                    impressionProperties: m,
                    impressionName: h.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, u.jsx)(ee, { email: o }),
                }),
            ],
        }),
    });
}
f.Ay.initialize();
class en extends c.PureComponent {
    componentDidMount() {
        (0, G.d0)("account_revert");
    }
    render() {
        let e = this.props.match.params.token ?? "";
        return (0, u.jsx)(w.Ay, {
            style: { padding: 0 },
            children: (0, u.jsx)(et, { width: 464, token: e, ...this.props }),
        });
    }
}
var el = n(549711);
function ei(e) {
    x.h.dispatch({ type: "AUTH_INVITE_UPDATE", invite: e });
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
function eu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ea;
    try {
        let { origin: l } = new URL(eo(e, t));
        return n
            .map((e) => eo(e, t))
            .some((e) => {
                let { origin: t } = new URL(e);
                return l === t;
            });
    } catch (e) {
        return (new er.Vy("Auth").error("Failed to check external redirect", e), !1);
    }
}
var ec = n(123292),
    ed = n(650048),
    eh = n(537975),
    em = n(396681);
f.Ay.initialize();
class eg extends c.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, guild: null };
    componentDidMount() {
        let e = (0, em.A)(this.props.location),
            t = (0, d.qg)(this.props.location.search);
        (_.Bo.post({
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
            (0, G.d0)("disable_server_highlight_notifications"));
    }
    renderBusy() {
        return (0, u.jsx)(w.Ay, { children: (0, u.jsx)(w.CK, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, u.jsxs)(w.Ay, {
            children: [
                (0, u.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.Z33eiP) }),
                (0, u.jsx)(w.tK, { children: Q.intl.format(Q.t.NRWtfC, { guildName: n.name }) }),
                (0, u.jsx)("div", {
                    className: X.eT,
                    children: (0, u.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, u.jsx)("div", {
                    className: X.Ot,
                    children: (0, u.jsx)(ec.Q, {
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
        return (0, u.jsxs)(w.Ay, {
            children: [
                (0, u.jsx)(w._V, { src: n(37772), className: X.SX }),
                (0, u.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.ox9hIS) }),
                (0, u.jsx)(w.tK, { children: Q.intl.string(Q.t["/dcuR5"]) }),
                (0, u.jsx)("div", {
                    className: X.eT,
                    children: (0, u.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
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
    eE = n(557722),
    eA = n(628387),
    e_ = n(148864),
    ex = n(916226);
n(53516);
var ej = n(938442);
let eI = ["loopback-network", "local-network-access"];
async function eC() {
    if ("u" < typeof navigator || null == navigator.permissions) return "unknown";
    for (let e of eI)
        try {
            return (await navigator.permissions.query({ name: e })).state;
        } catch {}
    return "unknown";
}
var eN = n(343446),
    ev = n(620233),
    eT = n(122906),
    ey = n(121623),
    eS = n(62617),
    eb = n(31008);
function eR(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, width: s, height: r, className: a, style: o } = e,
        d = c.useMemo(
            () => (0, eS.H)({ width: s, height: r, intrinsicWidth: 288, intrinsicHeight: 162, style: o }),
            [s, r, o],
        );
    return (0, u.jsx)("img", {
        style: d,
        src: eb.A,
        className: (0, eS.Z)(a),
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
var eL = n(154672),
    eO = n(331322),
    eD = n(289873),
    ek = n(534514),
    ew = n(47084);
function eG(e) {
    let { title: t, subtitle: n, buttonText: l, image: i, onButtonClick: s, loading: r } = e;
    return (0, u.jsx)(w.Ay, {
        className: ew.kL,
        children: (0, u.jsxs)(eO.B, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, u.jsxs)(eO.B, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, u.jsxs)(eO.B, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != i &&
                                    (0, u.jsx)(eO.B, {
                                        align: "center",
                                        justify: "center",
                                        className: ew.Sl,
                                        children: i,
                                    }),
                                r && (0, u.jsx)(eD.y, { type: eD.y.Type.SPINNING_CIRCLE }),
                                (0, u.jsx)(ek.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, u.jsx)(F.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                className: ew.VA,
                                children: n,
                            }),
                    ],
                }),
                !r && (0, u.jsx)(M.$, { onClick: s, text: l, variant: "overlay-primary" }),
            ],
        }),
    });
}
var eP = n(976860);
let eU = !1,
    eB = null,
    eF = null;
class eM extends f.Ay.Store {
    static displayName = "HubEmailVerificationStore";
    getState() {
        return { verifySuccess: eU, verifyErrors: eB, redirectGuildId: eF };
    }
}
let eV = new eM(x.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        ((eU = !0), (eB = null), (eF = t));
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        ((eU = !1), (eB = t));
    },
});
var eH = n(284009),
    eW = n.n(eH),
    eK = n(481613),
    eQ = n.n(eK),
    eq = n(400253),
    eX = n(869733),
    ez = n(80703),
    eY = n(46653),
    e$ = n(877062);
f.Ay.initialize();
var eJ = n(21599),
    eZ = n(120692),
    e0 = n(717421),
    e1 = n(646514),
    e2 = n(993077),
    e8 = n(235986),
    e4 = n(408738);
function e3(e) {
    let { text: t, buttonCta: l, onClick: i } = e;
    return (0, u.jsxs)(u.Fragment, {
        children: [
            (0, u.jsx)(w._V, { src: n(431979) }),
            (0, u.jsx)(w.hE, { className: B()(X.QX, X.QB, ej.tR), children: Q.intl.string(Q.t.eL5z0i) }),
            (0, u.jsx)(w.tK, { className: X.C2, children: Q.intl.string(Q.t.poAv63) }),
            (0, u.jsxs)(e2.Z, {
                className: e4.Nr,
                type: e2.Z.Types.CUSTOM,
                children: [
                    (0, u.jsx)("img", { alt: "", className: e4.q8, src: n(355912) }),
                    (0, u.jsx)("img", { alt: "", className: e4.dw, src: n(610925) }),
                    (0, u.jsxs)(e8.A, {
                        className: e4.p_,
                        direction: e8.A.Direction.VERTICAL,
                        align: e8.A.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, u.jsx)(F.E, {
                                tag: "strong",
                                className: e4.p8,
                                variant: "body-md/normal",
                                style: { color: e1.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, u.jsx)("div", {
                                className: e4.x6,
                                children: (0, u.jsx)(M.$, { text: l, fullWidth: !0, onClick: i }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e5(e) {
    let { text: t, buttonCta: n, theme: l = L.NJ8.DARK, onClick: i } = e;
    return (0, u.jsx)(w.Ay, { theme: l, children: (0, u.jsx)(e3, { text: t, buttonCta: n, onClick: i }) });
}
var e9 = n(765671),
    e7 = n(71393),
    e6 = n(299091),
    te = n(486020),
    tt = n(403362),
    tn = n(294630),
    tl = n(778712),
    ti = n(47167),
    ts = n(769015),
    tr = n(714991),
    ta = n(427262),
    to = n(330936),
    tu = n(622625);
function tc(e) {
    let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
    return 0 === t.memberCount ? null : t;
}
function td(e) {
    return e.target_type === tn.y.STREAM && null != e.target_user;
}
function th(e) {
    return e.channel?.type === L.rbe.GROUP_DM;
}
function tm(e) {
    return null == e.channel && null == e.guild && null != e.inviter;
}
function tg(e) {
    return e.state === L.elq.ACCEPTED;
}
function tf(e) {
    let { guild_scheduled_event: t } = e;
    return null != t;
}
function tp(e) {
    let t;
    return !tf(e) && (!!tm(e) || (null != e.inviter && !tg(e) && ((t = tc(e)), !((t?.memberCount ?? 0) > 100))));
}
function tE(e) {
    let { guild: t, user: n, application: l } = e;
    return null != l
        ? (0, u.jsx)(ts.A, { className: tu.Z2, game: l, size: tu.q6 })
        : null != n
          ? (0, u.jsx)(w.eu, { src: n.getAvatarURL(void 0, 100), size: tl._3.DEPRECATED_SIZE_100, className: tu.my })
          : null != t
            ? (0, u.jsx)(w.$v, { guild: t, size: w.$v.Sizes.LARGER, className: tu.$f, animate: !0 })
            : null;
}
function tA(e) {
    let { invite: t, textClassName: n, className: l } = e,
        i = tc(t);
    return null == i || tp(t) || t?.guild?.id === to.TA
        ? null
        : (0, u.jsx)(w.R1, {
              className: B()(tu.He, l),
              online: i.onlineCount,
              total: i.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function t_(e) {
    let { invite: t, showBigUserIcon: n } = e,
        l = c.useMemo(
            () =>
                n
                    ? null
                    : td(t) && null != t.target_user
                      ? te.Ay.getUserAvatarURL(t.target_user)
                      : tp(t) && null != t.inviter
                        ? te.Ay.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        i = Q.intl.string(Q.t["3rE1P8"]);
    return (
        th(t)
            ? (i =
                  t.channel?.name != null && t.inviter?.username != null
                      ? Q.intl.format(Q.t.Lu4h18, { username: t.inviter.username })
                      : Q.intl.string(Q.t.OsdY8B))
            : td(t) && null != t.target_user
              ? (i = Q.intl.formatToPlainString(Q.t.x2L32Q, { username: t.target_user.username }))
              : tg(t)
                ? (i = Q.intl.string(Q.t["FDsl+J"]))
                : tp(t) &&
                  null != t.inviter &&
                  (i = Q.intl.format(Q.t.spU2mI, { username: ta.Ay.getFormattedName(t.inviter) })),
        (0, u.jsxs)("div", {
            className: tu.JB,
            children: [
                null != l &&
                    (0, u.jsx)("div", {
                        className: tu._t,
                        children: (0, u.jsx)(w.eu, { src: l, size: tl._3.SIZE_24 }),
                    }),
                (0, u.jsx)(w.tK, { className: tu.__invalid_inviteJoinSubTitle, children: i }),
            ],
        })
    );
}
function tx(e) {
    let t,
        n,
        l,
        { user: i, guild: s, channel: r, application: a, showBigUserIcon: o } = e,
        c = (0, ti.Ay)(r);
    if (null != s)
        (o && null == a && (t = (0, u.jsx)(w.$v, { guild: s, size: w.$v.Sizes.SMALL })),
            (n = s.name),
            null != a &&
                ((n = a.name),
                (l = (0, u.jsxs)("div", {
                    className: tu.JB,
                    children: [
                        (0, u.jsx)(w.tK, { className: tu.R9, children: Q.intl.string(Q.t["3gg9fF"]) }),
                        (0, u.jsxs)("div", {
                            className: tu.bo,
                            children: [
                                (0, u.jsx)(w.$v, { guild: s, size: w.$v.Sizes.SMALL }),
                                (0, u.jsx)(ek.D, {
                                    color: "text-strong",
                                    variant: "heading-xl/semibold",
                                    children: s.name,
                                }),
                            ],
                        }),
                    ],
                }))));
    else if (null != r) {
        if (null == i) throw Error("no inviter in group DM invite");
        let e = ta.Ay.getFormattedName(i);
        null != c && "" !== c
            ? ((n = c), null != r.icon && (t = (0, u.jsx)(w.F4, { channel: r, size: tl._3.SIZE_32 })))
            : (n = e);
    } else if (null != i) {
        let e = ta.Ay.getFormattedName(i);
        ((n = Q.intl.formatToPlainString(Q.t["4aF92R"], { username: e })),
            (l = (0, u.jsx)(w.tK, { className: tu.b$, children: Q.intl.format(Q.t.Quj7HX, { username: e }) })));
    }
    return (0, u.jsxs)(u.Fragment, {
        children: [
            (0, u.jsxs)(w.hE, {
                className: tu.DD,
                children: [
                    null != s ? (0, u.jsx)(tr.A, { guild: s, className: tu.n2, tooltipPosition: "left" }) : null,
                    t,
                    n,
                ],
            }),
            l,
        ],
    });
}
var tj = n(327891),
    tI = n(95701),
    tC = n(619019),
    tN = n(945810),
    tv = n(172799);
let tT = (0, tN.mj)({
    name: "2026-09-silp-cta-copy-tests",
    kind: "user",
    defaultConfig: { variant: null },
    variations: { 1: { variant: "clarity" }, 2: { variant: "clarity_softer" }, 3: { variant: "low_commitment" } },
});
function ty(e) {
    return null != e && null != e.guild && (null == e.type || e.type === tv.Xd.GUILD);
}
function tS(e) {
    return tT.useConfig({ location: e }).variant;
}
function tb(e) {
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
var tR = n(682163),
    tL = n(557582),
    tO = n(167630),
    tD = n(424547);
function tk(e) {
    let { guildScheduledEvent: t, channel: n, onAcceptInvite: l, isSubmitting: i } = e;
    return (0, u.jsxs)("div", {
        className: tD.s4,
        children: [
            (0, u.jsx)(tL.Ay, {
                name: t.name,
                description: t.description ?? void 0,
                headerVariant: "heading-sm/medium",
                descriptionClassName: tD.__invalid_channelDescription,
                guildId: t.guild_id,
                guildEvent: t,
                eventPreview: t,
            }),
            null != n &&
                (0, u.jsx)("div", {
                    className: tD.yW,
                    children: (0, u.jsx)(tO.A, { guildScheduledEvent: t, channel: n }),
                }),
            (0, u.jsx)("div", {
                className: tD.xG,
                children: (0, u.jsx)(M.$, {
                    variant: "active",
                    size: "md",
                    text: Q.intl.string(Q.t.riu2R5),
                    onClick: l,
                    loading: i,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
function tw(e) {
    let { invite: t } = e,
        n = null != t.guild ? (0, eh.DY)(t.guild) : null;
    if (null == n) return null;
    let l = n.description ?? "";
    return (0, u.jsxs)("div", {
        className: tD.kQ,
        children: [
            (0, u.jsx)(ek.D, { className: tD.s7, variant: "body-sm/medium", children: Q.intl.string(Q.t.Eabu1z) }),
            (0, u.jsxs)("div", {
                className: tD.bo,
                children: [
                    (0, u.jsx)(tR.Ay, { guild: n, active: !0, size: tR.Ay.Sizes.MEDIUM }),
                    (0, u.jsxs)("div", {
                        className: tD.bW,
                        children: [
                            (0, u.jsxs)(F.E, {
                                className: tD.J5,
                                color: "text-strong",
                                variant: "body-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, u.jsx)(tr.A, { guild: n, className: tD.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, u.jsx)(tA, { invite: t, textClassName: tD.kS, className: tD.pe }),
                        ],
                    }),
                ],
            }),
            l.length > 0 &&
                (0, u.jsx)("details", {
                    className: tD.x_,
                    children: (0, u.jsx)(F.E, { color: "text-default", variant: "body-sm/normal", children: l }),
                }),
        ],
    });
}
function tG(e) {
    let { invite: t, channel: n, isSubmitting: l, onAcceptInvite: i } = e,
        { guild_scheduled_event: s } = t;
    return null != s
        ? (0, u.jsx)(tk, { guildScheduledEvent: s, channel: n, isSubmitting: l, onAcceptInvite: i })
        : null;
}
var tP = n(578564);
function tU(e) {
    let { text: t, onClick: n, loading: l } = e;
    return (0, u.jsx)(M.$, { variant: "primary", size: "md", text: t, onClick: n, loading: l, fullWidth: !0 });
}
function tB(e) {
    let t = tS("InviteAcceptMobile");
    return (0, u.jsx)(tU, { ...e, text: tb(t) });
}
function tF(e) {
    let { invite: t, onAcceptInvite: n, disableUser: l = !1 } = e;
    if (null == t) return null;
    let i = null != t.guild ? (0, eh.DY)(t.guild) : null,
        s = null != t.channel ? (0, tI.OY)(t.channel) : null,
        r = null != t.target_application ? new tj.Ay(t.target_application) : null,
        a = l || null == t.inviter ? null : new tC.A(t.inviter),
        o =
            !(
                (null != t.approximate_member_count && t.approximate_member_count > 100) ||
                (null != i && i.features.has(L.GuildFeatures.COMMUNITY))
            ) &&
            null != a &&
            th(t),
        c = (function (e) {
            let { state: t } = e;
            switch (t) {
                case L.elq.ACCEPTING:
                case L.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        d = { invite: t, user: a, guild: i, channel: s, application: r };
    return tf(t)
        ? (0, u.jsx)(tG, { invite: t, channel: s, isSubmitting: c, onAcceptInvite: n })
        : (0, u.jsxs)("div", {
              className: tP.kL,
              children: [
                  (0, u.jsx)(tE, { application: r, guild: i, user: o || tm(t) ? a : null }),
                  tm(t) ? null : (0, u.jsx)(t_, { ...d, showBigUserIcon: o }),
                  (0, u.jsx)(tx, { ...d, showBigUserIcon: o }),
                  (0, u.jsx)(tA, { ...d }),
                  (0, u.jsx)("div", {
                      className: tP.xG,
                      children: ty(t)
                          ? (0, u.jsx)(tB, { onClick: n, loading: c })
                          : (0, u.jsx)(tU, { text: tb(null), onClick: n, loading: c }),
                  }),
              ],
          });
}
var tM = n(43990),
    tV = n(241524),
    tH = n(573435),
    tW = n(260509),
    tK = n(370953);
function tQ(e) {
    let { guild: t, outline: n } = e,
        l = (0, tV.A)("(max-width: 600px), (max-height: 600px)") ? tR.DN.LARGER : tR.DN.XLARGE,
        i = tR.iu[l],
        s = tR.s[l],
        r = c.useMemo(() => te.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: i }), [t.icon, t.id, i]),
        a = (0, tW.Rb)(t),
        o =
            null != r
                ? (0, u.jsx)("img", { src: r, alt: "", className: tK.OV })
                : (0, u.jsx)("div", {
                      className: tK.ef,
                      style: { fontSize: s[a.length] ?? s[s.length - 1] },
                      children: a,
                  });
    return n
        ? (0, u.jsx)("div", {
              className: B()(tK._C, tK.AY),
              children: (0, u.jsx)(tH.Ay, {
                  mask: tH.Ay.Masks.SQUIRCLE,
                  width: i + 8,
                  height: i + 8,
                  children: (0, u.jsx)("div", {
                      className: tK.$d,
                      children: (0, u.jsx)(tH.Ay, { mask: tH.Ay.Masks.SQUIRCLE, width: i, height: i, children: o }),
                  }),
              }),
          })
        : (0, u.jsx)("div", {
              className: tK._C,
              children: (0, u.jsx)(tH.Ay, { mask: tH.Ay.Masks.SQUIRCLE, width: i, height: i, children: o }),
          });
}
var tq = n(927813);
let tX = /\.$/;
function tz(e) {
    return Array.isArray(e)
        ? e
              .map((e) => e.replace(tX, ""))
              .join(". ")
              .trim()
        : e;
}
function tY(e) {
    let [t, n] = c.useState(() => null != e && !e),
        [l, i] = c.useState(e);
    return (null == l && null != e ? (i(e), n(!e)) : l !== e && i(e), [t, n]);
}
function t$() {
    let [e, t] = c.useState(!1),
        n = c.useRef(null);
    return (
        c.useEffect(
            () => () => {
                null != n.current && clearTimeout(n.current);
            },
            [],
        ),
        [
            e,
            c.useCallback((e) => {
                (null != n.current && clearTimeout(n.current),
                    t(!0),
                    (n.current = setTimeout(() => {
                        (t(!1), (n.current = null));
                    }, e * tq.A.Millis.SECOND)));
            }, []),
        ]
    );
}
var tJ = n(153488),
    tZ = n(4274),
    t0 = n(95477),
    t1 = n(866665),
    t2 = n(627784),
    t8 = n(934337),
    t4 = n(15552),
    t3 = n(536637),
    t5 = n.n(t3),
    t9 = n(955437),
    t7 = n(295562),
    t6 = n(831167);
n(861807);
var ne = n(569717),
    nt = n(204925);
function nn(e) {
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
        giftCodeSKUId: c = null,
        promoEmailConsent: d = null,
        usedUsernameSuggestion: m = null,
    } = e;
    if ((x.h.dispatch({ type: "REGISTER" }), null != o)) {
        let e;
        ((0, ne.A)(o, L.JJy.REGISTER),
            b.default.track(L.HAw.AGE_GATE_ACTION, { source: nt.w_.REGISTER, action: nt.AM.AGE_GATE_SUBMITTED }),
            (e = t5()().diff(o, "years")) < 13 ||
                b.default.track(L.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                }));
    }
    return W.A.post({
        url: L.Rsh.REGISTER,
        body: {
            fingerprint: eY.default.getFingerprint(),
            email: t,
            username: l,
            global_name: i,
            password: r,
            invite: u,
            consent: s,
            phone_token: n,
            date_of_birth: null != o ? (0, t6.A)(o) : void 0,
            gift_code_sku_id: c,
            guild_template_code: a,
            promotional_email_opt_in: d?.checked,
        },
        trackedActionData: {
            event: h.NetworkActionNames.USER_REGISTER,
            properties: {
                invite_code: u,
                used_username_suggestion: m,
                promotional_email_opt_in: d?.checked,
                promotional_email_pre_checked: d?.preChecked,
                was_unique_username: !0,
            },
        },
        rejectWithError: !1,
    }).then(
        (e) => (
            x.h.dispatch({ type: "REGISTER_SUCCESS", token: e.body.token }),
            x.h.dispatch({
                type: "GUARDIAN_CONNECT_REQUIRED",
                shouldShowGuardianConnect: !0 === e.body.show_guardian_connect,
            }),
            b.default.track(L.HAw.AGE_GATE_ACTION, { source: nt.w_.REGISTER, action: nt.AM.AGE_GATE_SUCCESS }),
            e.body
        ),
        (e) => {
            if (e instanceof t7.CaptchaCancelError) throw e;
            let t = new V.A(e);
            throw (
                null != t.getFieldErrors("date_of_birth") && t9.Xv(nt.w_.REGISTER),
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
    ni = n(975639);
function ns(e) {
    let { consent: t, consentRequired: n, onConsentChange: l } = e;
    return n
        ? (0, u.jsx)("div", {
              className: ni.IQ,
              children: (0, u.jsx)(nl.J, {
                  label: Q.intl.format(Q.t.qMDAP0, { termsURL: L.X7G.TERMS, privacyURL: L.X7G.PRIVACY }),
                  checked: t,
                  onChange: l,
                  labelType: "secondary",
              }),
          })
        : (0, u.jsx)(F.E, {
              variant: "body-sm/normal",
              color: "text-subtle",
              className: B()(X.Ot, ni.E2),
              children: Q.intl.format(Q.t["KI+BSb"], { termsURL: L.X7G.TERMS, privacyURL: L.X7G.PRIVACY }),
          });
}
let nr = (0, tN.mj)({
    kind: "installation",
    name: "2026-09-registration-email-opt-in-copy",
    defaultConfig: { trackingCopy: !1 },
    variations: { 1: { trackingCopy: !0 } },
});
function na() {
    let { required: e, checked: t } = (0, t8.mZ)(),
        n = (function (e, t) {
            let { trackingCopy: n } = nr.useConfig({ location: t });
            return Q.intl.string(n ? Q.t.LSoXK5 : e);
        })(Q.t["0p3R0+"], "REGISTER_PROMO_EMAIL_CHECKBOX_WEB");
    return e
        ? (0, u.jsx)("div", {
              className: X.Ot,
              children: (0, u.jsx)(nl.J, { label: n, checked: t, onChange: t8.Bw, labelType: "secondary" }),
          })
        : null;
}
var no = n(942614),
    nu = n(771016),
    nc = n(890251);
function nd(e) {
    let {
            invite: t,
            username: n,
            parsedDateOfBirth: l,
            email: i,
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
        [E, A] = c.useState(!1),
        [_, x] = t$(),
        j = null != a && r,
        I = c.useRef(null),
        C = c.useRef(null);
    function N(e) {
        b.default.track(L.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function v(e) {
        b.default.track(L.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    c.useEffect(() => {
        I.current?.focus();
    }, []);
    let T = i.length > 0 && s.length > 0,
        y = c.useCallback(async () => {
            let e = t8.mZ.getState();
            (A(!0), g({}));
            try {
                let a = await nn({
                    email: i,
                    username: n,
                    consent: r,
                    password: s,
                    invite: t.code,
                    birthday: l,
                    promoEmailConsent: e.required ? e : null,
                });
                (a?.invite_join_deferred_code != null && (0, no.C)(nu.zY.INVITE_UNCLAIMED),
                    p(a?.invite_join_deferred_code));
            } catch (t) {
                if ((A(!1), !(t instanceof t2.LG))) return;
                let e = (0, t4.W)(t);
                (g(e),
                    null != e.email || null != e.phone ? I.current?.focus() : null != e.password && C.current?.focus(),
                    "number" == typeof e.retry_after && x(e.retry_after));
            }
        }, [t, i, n, s, l, r, g, p, x]),
        S = c.useCallback(
            (e) => {
                (e.preventDefault(), null != a && T && y());
            },
            [a, T, y],
        ),
        { message: R } = o;
    return (0, u.jsxs)("form", {
        onSubmit: S,
        children: [
            (0, u.jsx)("div", {
                className: X.SX,
                children: (0, u.jsx)(t0.k, {
                    label: Q.intl.string(Q.t.dI4d4S),
                    name: "email",
                    value: i,
                    onChange: d,
                    error: tz(o.email),
                    type: "email",
                    autoComplete: "username",
                    inputRef: I,
                    onFocus: () => N("email"),
                    onBlur: () => v("email"),
                }),
            }),
            (0, u.jsx)(t0.k, {
                label: Q.intl.string(Q.t["CIGa+7"]),
                name: "password",
                value: s,
                onChange: h,
                error: tz(o.password),
                type: "password",
                revealable: !0,
                autoComplete: "new-password",
                inputRef: C,
                onFocus: () => N("password"),
                onBlur: () => v("password"),
            }),
            (0, u.jsx)(na, {}),
            (0, u.jsx)(ns, { consent: r, consentRequired: a, onConsentChange: m }),
            (0, u.jsx)(t1.m, {
                text: !r && a ? Q.intl.string(Q.t.AY4IVA) : null,
                children: (0, u.jsx)("div", {
                    className: X.QX,
                    children: (0, u.jsx)(M.$, {
                        text: Q.intl.string(Q.t["825cFy"]),
                        variant: "primary",
                        fullWidth: !0,
                        type: "submit",
                        loading: E,
                        disabled: !j || _ || !T,
                    }),
                }),
            }),
            "string" == typeof R ? (0, u.jsx)(w.ME, { className: B()(X.QX, ni.gJ), children: R }) : null,
            (0, u.jsx)("div", {
                className: nc.o3,
                children: (0, u.jsx)(ec.Q, {
                    text: Q.intl.string(Q.t.renMUD),
                    textVariant: "body-sm/normal",
                    onClick: f,
                }),
            }),
        ],
    });
}
function nh(e) {
    let { guild: t } = e,
        n =
            te.Ay.getGuildBannerURL(t) ??
            (null != t.splash ? te.Ay.getGuildSplashURL({ id: t.id, splash: t.splash, size: 640 }) : null);
    return (0, u.jsx)("div", { className: nc.ZK, style: null != n ? { backgroundImage: `url(${n})` } : void 0 });
}
function nm(e) {
    let { invite: t, kicker: n } = e,
        l = null != t.guild ? (0, eh.DY)(t.guild) : null;
    return null == l
        ? null
        : (0, u.jsxs)("header", {
              children: [
                  (0, u.jsx)(nh, { guild: l }),
                  (0, u.jsxs)("div", {
                      className: nc.lu,
                      children: [
                          (0, u.jsx)("div", { className: nc.LJ, children: (0, u.jsx)(tQ, { guild: l, outline: !0 }) }),
                          (0, u.jsx)(F.E, {
                              variant: "body-sm/normal",
                              color: "text-default",
                              children: n ?? Q.intl.string(Q.t["3rE1P8"]),
                          }),
                          (0, u.jsxs)("div", {
                              className: nc.G1,
                              children: [
                                  (0, u.jsx)(ek.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: nc.qd,
                                      children: l.name,
                                  }),
                                  (0, u.jsx)(tr.A, { guild: l, tooltipPosition: "left" }),
                              ],
                          }),
                          (0, u.jsx)(tA, { invite: t }),
                      ],
                  }),
                  (0, u.jsx)("div", { className: nc.yF }),
              ],
          });
}
var ng = n(201505);
n(801541);
var nf = n(889137),
    np = n(546727),
    nE = n(576326),
    nA = n(643580);
let n_ = window.ResizeObserver ?? nA.t;
function nx(e) {
    let { show: t, children: n, top: l = 0, bottom: i = 0 } = e,
        { ref: s, height: r } = (function () {
            let e = c.useRef(null),
                [t, n] = c.useState(0),
                l = c.useMemo(
                    () =>
                        new n_((e) => {
                            let [t] = e;
                            return n(t.contentRect.height);
                        }),
                    [],
                );
            return (
                c.useLayoutEffect(() => (null != e.current && l.observe(e.current), () => l.disconnect()), [l]),
                { ref: e, height: t }
            );
        })(),
        a = (0, e0.z)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: { height: t ? r : 0, paddingBottom: t ? `${i}px` : "0px", marginTop: t ? `${l}px` : "0px" },
            config: { tension: 170, friction: 26 },
        }),
        o = (0, e0.z)({
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
    return (0, u.jsx)(eZ.animated.div, {
        style: { overflow: "hidden", height: a.height, paddingBottom: a.paddingBottom, marginTop: a.marginTop },
        children: (0, u.jsx)(eZ.animated.div, { style: { opacity: o.opacity }, ref: s, children: n }),
    });
}
function nj(e) {
    let t,
        { username: n, suggestion: l, globalName: i, isUsernameFocused: s, onClickSuggestion: r } = e,
        a = (0, nE.i)(n, !0, !0),
        o = n.length > 0;
    return (
        (t = o
            ? (0, nf.YW)(a)
                  .with({ type: np.q.ERROR, message: nf.P.select() }, (e) =>
                      (0, u.jsx)(F.E, { className: ni.vU, variant: "body-sm/normal", children: e }),
                  )
                  .with({ type: np.q.AVAILABLE, message: nf.P.select() }, (e) =>
                      (0, u.jsx)(F.E, { className: ni.vq, variant: "body-sm/normal", children: e }),
                  )
                  .otherwise(() =>
                      (0, u.jsx)(F.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          children: Q.intl.string(Q.t.z7c4bP),
                      }),
                  )
            : null != l && l.length > 0 && i.length > 0
              ? (0, u.jsx)(F.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: Q.intl.format(Q.t.nDGqqq, { suggestion: l, nameOnClick: r }),
                })
              : (0, u.jsx)(F.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: Q.intl.string(Q.t.z7c4bP),
                })),
        (0, u.jsx)(nx, { show: (o && a?.type === np.q.ERROR) || s, top: -12, bottom: 20, children: t })
    );
}
function nI(e) {
    let {
            username: t,
            parsedDateOfBirth: n,
            apiErrors: l,
            onUsernameChange: i,
            onDateOfBirthChange: s,
            onNext: r,
            onOpenApp: a,
        } = e,
        [o, d] = c.useState(!1),
        h = c.useRef(null);
    function m(e) {
        b.default.track(L.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function g(e) {
        b.default.track(L.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    c.useEffect(() => {
        null != l.username && h.current?.focus();
    }, []);
    let f = t.length > 0 && null != n;
    return (0, u.jsxs)("form", {
        onSubmit: function (e) {
            (e.preventDefault(), f && r());
        },
        children: [
            (0, u.jsxs)("div", {
                onBlur: () => d(!1),
                onFocus: () => d(!0),
                tabIndex: -1,
                children: [
                    (0, u.jsx)("div", {
                        className: X.SX,
                        children: (0, u.jsx)(t0.k, {
                            label: Q.intl.string(Q.t.TWzdWj),
                            name: "username",
                            value: t,
                            onChange: (e) => i(e.toLocaleLowerCase()),
                            error: tz(l.username),
                            autoComplete: "off",
                            inputRef: h,
                            onFocus: () => m("username"),
                            onBlur: () => g("username"),
                        }),
                    }),
                    (0, u.jsx)(nj, {
                        username: t,
                        suggestion: null,
                        globalName: "",
                        isUsernameFocused: o,
                        onClickSuggestion: () => {},
                    }),
                ],
            }),
            (0, u.jsx)(ng.A, {
                label: Q.intl.string(Q.t.rhBeKe),
                name: "date_of_birth",
                onChange: s,
                error: tz(l.date_of_birth),
                value: n,
                onFocus: m,
                onBlur: g,
            }),
            (0, u.jsx)("div", {
                className: X.QX,
                children: (0, u.jsx)(M.$, {
                    text: Q.intl.string(Q.t.PDTjLN),
                    variant: "primary",
                    fullWidth: !0,
                    type: "submit",
                    disabled: !f,
                }),
            }),
            (0, u.jsx)("div", {
                className: nc.o3,
                children: (0, u.jsx)(ec.Q, {
                    text: Q.intl.string(Q.t.renMUD),
                    textVariant: "body-sm/normal",
                    onClick: a,
                }),
            }),
        ],
    });
}
function nC(e) {
    let { invite: t, onOpenApp: n, deferredJoinErrorCode: l } = e,
        i = null != t.guild ? (0, eh.DY)(t.guild) : null;
    if (null == i) return null;
    let s = null != l ? (0, tZ.g)(l) : null;
    return (0, u.jsxs)(u.Fragment, {
        children: [
            null != i ? (0, u.jsx)(nh, { guild: i }) : null,
            (0, u.jsxs)("div", {
                className: nc.zY,
                children: [
                    (0, u.jsxs)("div", {
                        className: nc.rL,
                        children: [
                            (0, u.jsx)(tQ, { guild: i }),
                            (0, u.jsx)(ek.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                className: nc.Rw,
                                children: s?.title ?? Q.intl.format(Q.t["33M5bg"], { guildName: i?.name ?? "" }),
                            }),
                            (0, u.jsx)(F.E, {
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                className: nc.Ap,
                                children: s?.description ?? Q.intl.string(Q.t["7N4JkE"]),
                            }),
                            (0, u.jsx)("div", {
                                className: nc.S7,
                                children: (0, u.jsx)(M.$, {
                                    variant: "primary",
                                    size: "md",
                                    text: Q.intl.string(Q.t["n+VrqG"]),
                                    onClick: n,
                                }),
                            }),
                        ],
                    }),
                    (0, u.jsx)("div", {
                        className: nc.NG,
                        children: (0, u.jsx)("img", {
                            alt: "",
                            src: "https://cdn.discordapp.com/assets/content/55b848b6c57bf51009a1bdaa4465a9e8d79026b8b92889b0ea90a00475f19257.webp",
                        }),
                    }),
                ],
            }),
        ],
    });
}
function nN(e) {
    let { invite: t, onOpenApp: n, onOpenAppAfterRegistration: l } = e,
        [i, s] = c.useState(0),
        [r, a] = c.useState(""),
        [o, d] = c.useState(null),
        [h, m] = c.useState(""),
        [g, E] = c.useState(""),
        [A, _] = c.useState({}),
        x = (0, f.bG)([tJ.A], () => tJ.A.getAuthenticationConsentRequired()),
        [j, I] = tY(x),
        [C, N] = c.useState(!1),
        [v, T] = c.useState(null),
        y = c.useRef(null);
    function S(e) {
        (s(e), y.current?.scrollTo(0, 0));
    }
    function b(e) {
        (_(e), (null != e.username || null != e.date_of_birth) && S(0));
    }
    function R(e) {
        _((t) => {
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
        (E(e), R("password"));
    }
    return (
        c.useEffect(() => {
            p.A.getLocationMetadata();
        }, []),
        (0, u.jsx)(tM.N, {
            theme: L.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, u.jsx)("div", {
                    ref: y,
                    "data-theme": L.NJ8.DARK,
                    className: B()(nc.MY, e),
                    children: C
                        ? (0, u.jsx)(nC, { invite: t, onOpenApp: l, deferredJoinErrorCode: v })
                        : (0, u.jsxs)(u.Fragment, {
                              children: [
                                  (0, u.jsx)(nm, { invite: t, kicker: 1 === i ? Q.intl.string(Q.t.dzGILG) : void 0 }),
                                  (0, u.jsx)("div", {
                                      className: nc.rf,
                                      children:
                                          0 === i
                                              ? (0, u.jsx)(nI, {
                                                    username: r,
                                                    parsedDateOfBirth: o,
                                                    apiErrors: A,
                                                    onUsernameChange: O,
                                                    onDateOfBirthChange: D,
                                                    onNext: () => S(1),
                                                    onOpenApp: n,
                                                })
                                              : (0, u.jsx)(nd, {
                                                    invite: t,
                                                    username: r,
                                                    parsedDateOfBirth: o,
                                                    email: h,
                                                    password: g,
                                                    consent: j,
                                                    consentRequired: x,
                                                    apiErrors: A,
                                                    onEmailChange: k,
                                                    onPasswordChange: w,
                                                    onConsentChange: I,
                                                    onApiErrors: b,
                                                    onOpenApp: n,
                                                    onRegister: (e) => {
                                                        (T(e ?? null), N(!0));
                                                    },
                                                }),
                                  }),
                              ],
                          }),
                }),
        })
    );
}
var nv = n(127982);
function nT(e, t, n, l) {
    (e?.preventDefault(),
        b.default.track(
            L.HAw.INVITE_APP_OPENED,
            {
                invite_code: (0, eJ.m0)(t),
                guild_id: n?.guild?.id,
                channel_id: n?.channel?.id,
                inviter_id: n?.inviter?.id,
                invite_type: null != n && n?.type != null ? tv.Xd[n?.type] : void 0,
                user_is_member: null != n && null != n.guild && null != e7.A.getGuild(n.guild.id),
                size_total: n?.approximate_member_count,
                time_to_click_ms: Math.round(performance.now()),
            },
            { flush: !0 },
        ));
    let i = null != n && n.state !== L.elq.EXPIRED && n.state !== L.elq.BANNED ? t : void 0,
        s = eY.default.getFingerprint(),
        r = null != s ? s : eY.default.getId(),
        a = null != n && n?.type != null ? Number(n?.type) : void 0;
    A.Ay.openApp(i, void 0, r, void 0, { inviteType: a, didRegister: l?.didRegister });
}
function ny() {
    return (0, u.jsx)("div", { className: nv.$k, children: (0, u.jsx)(eD.y, {}) });
}
function nS(e) {
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
            (0, tt.xb)(n);
    }
}
function nb(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === L.elq.BANNED
        ? (0, u.jsx)(e3, { text: Q.intl.string(Q.t["5AkWAd"]), buttonCta: Q.intl.string(Q.t["8osdkn"]), onClick: n })
        : (0, u.jsx)(e3, { text: Q.intl.string(Q.t["usP+Mb"]), buttonCta: Q.intl.string(Q.t["8osdkn"]), onClick: n });
}
function nR(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: l, sectionClassName: i, inviteCardClassName: s = nv.qF } = e,
        { ref: r, height: a } = (0, e9.Ay)(),
        o = (0, e0.z)({ height: null != a && 0 !== a ? `${a}px` : `${l}px`, config: eZ.config.stiff });
    return (0, u.jsxs)(eZ.animated.div, {
        className: s,
        style: o,
        children: [
            (0, u.jsx)(eZ.animated.div, {
                className: nv.NS,
                style: o,
                children: (0, u.jsx)("section", { ref: r, className: i, children: t }),
            }),
            n,
        ],
    });
}
function nL(e) {
    let { invite: t } = e;
    if (null == t || !tf(t)) return null;
    let n = nS(t);
    return (0, u.jsx)(nR, {
        startAnimHeightPx: 0,
        sectionClassName: nv.ui,
        children: 1 === n ? (0, u.jsx)(tw, { invite: t }) : null,
    });
}
let nO = { 1: nv._r, 2: nv.Gm, 0: nv.Kt };
function nD(e) {
    let t,
        { invite: n } = e,
        l = nS(n),
        i = c.useRef(!1);
    if (
        (c.useEffect(() => {
            i.current ||
                (null != n &&
                    1 === l &&
                    ((i.current = !0),
                    b.default.track(L.HAw.INVITE_ACCEPT_BUTTON_RENDERED, {
                        invite_code: n.code,
                        guild_id: n.guild?.id,
                        duration_ms_since_page_load: Math.round(performance.now()),
                    })));
        }, [n, l]),
        null == n)
    )
        t = (0, u.jsx)(ny, {});
    else
        switch (l) {
            case 1:
                t = (0, u.jsx)(tF, { ...e, invite: n });
                break;
            case 2:
                t = (0, u.jsx)(nb, { ...e, invite: n });
                break;
            default:
                t = (0, u.jsx)(ny, {});
        }
    return (0, u.jsx)(nR, { startAnimHeightPx: 200, sectionClassName: nO[l], inviteCardClassName: nv.qF, children: t });
}
function nk(e) {
    let { invite: t } = e,
        [n, l] = c.useState(null);
    return (c.useLayoutEffect(() => {
        let e;
        null == n &&
            null != t &&
            1 === nS(t) &&
            l(
                ((e = t.guild_experiments?.["2026-08-mweb-invite-registration"]),
                e?.variation === 1 && !eY.default.isAuthenticated() && null != t.guild && null == t.target_application),
            );
    }, [t, n]),
    !0 === n)
        ? (0, u.jsx)(nN, {
              invite: t,
              onOpenApp: e.onAcceptInvite,
              onOpenAppAfterRegistration: e.onOpenAppAfterRegistration,
          })
        : (0, u.jsx)(nw, { ...e });
}
function nw(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: l } = t ?? {},
        i = {};
    if (l?.splash != null) {
        let e = te.Ay.getGuildSplashURL({ id: l.id, splash: l.splash });
        null != e && ((i.backgroundImage = `url(${e})`), (i.backgroundSize = "cover"));
    }
    return (0, u.jsxs)(w.Ay, {
        theme: L.NJ8.DARK,
        className: nv.G3,
        style: i,
        contentClassName: nv.__,
        children: [(0, u.jsx)(nD, { ...e, onAcceptInvite: n }), (0, u.jsx)(nL, { ...e })],
    });
}
var nG = n(723702);
function nP(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, width: s, height: r, className: a, style: o } = e,
        d = c.useMemo(
            () => (0, eS.H)({ width: s, height: r, intrinsicWidth: 288, intrinsicHeight: 192, style: o }),
            [s, r, o],
        );
    return (0, u.jsx)("img", {
        style: d,
        src: "https://cdn.discordapp.com/assets/content/575199861cc3c18cdeb6745807591de54ce1ce9ddad5bae636a5737664545aa0.svg",
        className: (0, eS.Z)(a),
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
var nU = n(474545),
    nB = n(604880);
function nF(e) {
    let { token: t, hasError: n, errorReason: l } = e;
    return n
        ? (0, u.jsxs)("div", {
              className: nU.MY,
              children: [
                  (0, u.jsx)("div", { className: nU.r$, children: (0, u.jsx)("img", { src: nB, alt: "" }) }),
                  (0, u.jsxs)("div", {
                      className: nU.Qs,
                      children: [
                          (0, u.jsx)(nP, { alt: "" }),
                          (0, u.jsx)(ek.D, {
                              variant: "heading-lg/semibold",
                              className: nU.ky,
                              children: Q.intl.string(Q.t.RtCSr1),
                          }),
                          (0, u.jsx)(F.E, {
                              variant: "body-md/normal",
                              className: nU.G3,
                              children: Q.intl.string(Q.t["S+YjYJ"]),
                          }),
                          (0, u.jsx)(M.$, {
                              variant: "primary",
                              text: Q.intl.string(Q.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  (b.default.track(L.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: l }),
                                      (0, eP.pX)(L.BVt.LOGIN));
                              },
                          }),
                      ],
                  }),
              ],
          })
        : (0, u.jsxs)("div", {
              className: nU.MY,
              children: [
                  (0, u.jsx)("div", { className: nU.r$, children: (0, u.jsx)("img", { src: nB, alt: "" }) }),
                  (0, u.jsxs)("div", {
                      className: nU.Qs,
                      children: [
                          (0, u.jsx)(nP, { alt: "" }),
                          (0, u.jsx)(ek.D, {
                              variant: "heading-lg/semibold",
                              className: nU.ky,
                              children: Q.intl.string(Q.t["9h/0Rl"]),
                          }),
                          (0, u.jsx)(F.E, {
                              variant: "body-md/normal",
                              className: nU.G3,
                              children: Q.intl.string(Q.t.Wgm7Om),
                          }),
                          (0, u.jsx)(M.$, {
                              variant: "primary",
                              text: Q.intl.string(Q.t.NydsTd),
                              fullWidth: !0,
                              onClick: () => {
                                  let e, n;
                                  ((e = (function (e) {
                                      let t = platform.os?.family;
                                      if ("Android" === t || "iOS" === t) {
                                          let t = eY.default.getFingerprint(),
                                              n = (0, eX.I_)(),
                                              l = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/login/one-time?token=${e}`;
                                          return (0, eX.Ay)(l, {
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
                                              fingerprint: (0, ez.v)(n.fingerprint),
                                              attempt_id: n.attemptId,
                                              source: n.utmSource,
                                          }),
                                      e$.A.launch(e, (e) => {
                                          e || (0, eP.bG)({ pathname: L.BVt.LOGIN });
                                      }));
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var nM = n(613057);
function nV(e) {
    let { title: t, subtitle: n, buttonText: l, buttonOnClick: i } = e;
    return (0, u.jsx)(w.Ay, {
        children: (0, u.jsxs)(eO.B, {
            gap: 24,
            children: [
                (0, u.jsxs)(eO.B, {
                    gap: 8,
                    children: [(0, u.jsx)(w.hE, { children: t }), (0, u.jsx)(w.tK, { children: n })],
                }),
                (0, u.jsx)(M.$, { onClick: i, text: l, fullWidth: !0 }),
            ],
        }),
    });
}
var nH = n(463347),
    nW = n(189213),
    nK = n(192308),
    nQ = n(347704),
    nq = n(803306),
    nX = n(17372),
    nz = n(369053),
    nY = n(975571),
    n$ = n(928658);
async function nJ(e, t) {
    try {
        await (0, nz.TP)(e, t);
    } catch (e) {
        if (null != e && "object" == typeof e && 429 === e.status)
            throw { status: 429, body: { message: Q.intl.string(Q.t.Z2hIUf) } };
        throw e;
    }
}
function nZ(e, t) {
    let l = !1;
    function i() {
        l || t?.();
    }
    function s(s) {
        function r() {
            return nJ(e, s);
        }
        async function a(t) {
            return await (0, nz.G_)(e, s, t);
        }
        function o(n) {
            ((l = !0),
                setTimeout(() => {
                    l = !1;
                }, 0));
            let i = n?.token;
            switch (e) {
                case nX.tY.MESSAGE:
                    (0, n$.bM)(i, t);
                    break;
                case nX.tY.USER:
                    (0, n$.nQ)(i, t);
                    break;
                case nX.tY.GUILD:
                    (0, n$.V3)(i, t);
                    break;
                case nX.tY.MEDIA_TAKEDOWN:
                    (0, n$._Y)(i, t);
            }
        }
        ((l = !0),
            setTimeout(() => {
                l = !1;
            }, 0),
            (0, nK.mM)(
                async () => {
                    let { default: e } = await Promise.all([n.e(932606), n.e(919840)]).then(n.bind(n, 79779));
                    return (t) =>
                        (0, u.jsx)(e, {
                            ...t,
                            onFormSubmit: a,
                            onResend: r,
                            onSuccess: o,
                            headerText: Q.intl.string(Q.t.H3Q7U8),
                            confirmButtonText: Q.intl.string(Q.t["13ofGu"]),
                            impression: { impressionName: h.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                        });
                },
                { onCloseCallback: i, dismissable: !1 },
            ));
    }
    return function () {
        function t(t) {
            return nJ(e, t);
        }
        ((0, nK.s7)(),
            (0, nK.mM)(
                async () => {
                    let { default: l } = await n.e(429232).then(n.bind(n, 180275));
                    return (n) =>
                        (0, u.jsx)(l, {
                            ...n,
                            onFormSubmit: t,
                            onSuccess: s,
                            headerText: Q.intl.string(Q.t.ZLRYGU),
                            confirmButtonText: Q.intl.string(Q.t.PDTjLN),
                            subtitle: e === nX.tY.MEDIA_TAKEDOWN ? Q.intl.string(Q.t.jt3z8f) : void 0,
                        });
                },
                { onCloseCallback: i, dismissable: !1 },
            ));
    };
}
var n0 = n(939249),
    n1 = n(921853),
    n2 = n(43008);
let n8 = { [nX.tY.MESSAGE]: Q.t.fuqnBC, [nX.tY.USER]: Q.t.F4jrRW, [nX.tY.GUILD]: Q.t.gH3aMs },
    n4 = (e) => {
        let { title: t, menuType: n, onReopen: l } = e,
            i = c.useCallback(() => {
                nZ(n, l)();
            }, [n, l]);
        return (0, u.jsxs)(n0.D, {
            className: n2.b0,
            onClick: i,
            children: [
                (0, u.jsx)(F.E, { variant: "body-md/medium", children: t }),
                (0, u.jsx)(n1.ChevronSmallLeftIcon, { size: "sm", style: { transform: "rotate(180deg)" } }),
            ],
        });
    },
    n3 = (e) => {
        let { dsaCapabilities: t, onReopen: n } = e;
        return (0, u.jsx)(eO.B, {
            gap: 16,
            children: (0, u.jsx)("div", {
                className: n2.kL,
                children: t.map((e) =>
                    e === nX.tY.MEDIA_TAKEDOWN || null == n8[e]
                        ? null
                        : (0, u.jsx)(n4, { title: Q.intl.string(n8[e]), menuType: e, onReopen: n }, e),
                ),
            }),
        });
    };
var n5 = n(881636);
let n9 = "https://stopncii.org/partners/global-network-of-partners/",
    n7 = {
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
function n6(e) {
    return (0, nX.c7)(e) ? n7[e] : n7[nX.sl.TIDA];
}
var le = (((s = {}).SELECTION = "selection"), (s.DSA = "dsa"), (s.TIDA = "tida"), s),
    lt = n(138658);
let ln = (e) => {
    let { mediaTakedownRegulation: t } = e,
        { goToStep: n } = (0, nQ.n)(),
        { selectionLabel: l, selectionDescription: i } = n6(t),
        s = c.useCallback(() => {
            n(le.DSA);
        }, [n]),
        r = c.useCallback(() => {
            n(le.TIDA);
        }, [n]);
    return (0, u.jsxs)(eO.B, {
        gap: 8,
        children: [
            (0, u.jsx)(F.E, { variant: "body-md/normal", children: Q.intl.string(Q.t.bd1h5T) }),
            (0, u.jsxs)("div", {
                className: lt.k,
                children: [
                    (0, u.jsxs)(n0.D, {
                        className: lt.b,
                        onClick: s,
                        children: [
                            (0, u.jsxs)("div", {
                                children: [
                                    (0, u.jsx)(F.E, {
                                        variant: "body-md/medium",
                                        children: Q.intl.string(Q.t["AszWL/"]),
                                    }),
                                    (0, u.jsx)(F.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children: Q.intl.string(Q.t["0Jikui"]),
                                    }),
                                ],
                            }),
                            (0, u.jsx)(n5.ChevronLargeRightIcon, { size: "sm" }),
                        ],
                    }),
                    (0, u.jsxs)(n0.D, {
                        className: lt.b,
                        onClick: r,
                        children: [
                            (0, u.jsxs)("div", {
                                children: [
                                    (0, u.jsx)(F.E, { variant: "body-md/medium", children: Q.intl.string(l) }),
                                    (0, u.jsx)(F.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children: Q.intl.string(i),
                                    }),
                                ],
                            }),
                            (0, u.jsx)(n5.ChevronLargeRightIcon, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var ll = n(108124);
let li = (e) => {
    let { helpBody: t, supportOrgURL: n } = e;
    return (0, u.jsxs)(eO.B, {
        gap: 24,
        children: [
            (0, u.jsx)(F.E, {
                variant: "body-md/normal",
                color: "text-subtle",
                children: Q.intl.string(Q.t["3zG2Y9"]),
            }),
            (0, u.jsxs)(eO.B, {
                gap: 16,
                children: [
                    (0, u.jsxs)(eO.B, {
                        gap: 8,
                        children: [
                            (0, u.jsx)(F.E, { variant: "body-md/semibold", children: Q.intl.string(Q.t.CfBo0z) }),
                            (0, u.jsxs)("ul", {
                                className: ll.T,
                                children: [
                                    (0, u.jsx)("li", {
                                        children: (0, u.jsx)(F.E, {
                                            variant: "body-md/normal",
                                            color: "text-subtle",
                                            children: Q.intl.string(Q.t.ofQnNQ),
                                        }),
                                    }),
                                    (0, u.jsx)("li", {
                                        children: (0, u.jsx)(F.E, {
                                            variant: "body-md/normal",
                                            color: "text-subtle",
                                            children: Q.intl.string(Q.t.dFaQGn),
                                        }),
                                    }),
                                    (0, u.jsx)("li", {
                                        children: (0, u.jsx)(F.E, {
                                            variant: "body-md/normal",
                                            color: "text-subtle",
                                            children: Q.intl.string(Q.t.RVNwXh),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, u.jsx)(F.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        children: Q.intl.string(Q.t.o5azXJ),
                    }),
                    (0, u.jsx)(F.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        children: Q.intl.format(Q.t.YETtaY, {
                            policyURL: "https://discord.com/safety/non-consensual-intimate-media-policy-explainer",
                        }),
                    }),
                ],
            }),
            (0, u.jsxs)(eO.B, {
                gap: 8,
                children: [
                    (0, u.jsx)(F.E, { variant: "body-md/semibold", children: Q.intl.string(Q.t.FJh2zi) }),
                    (0, u.jsx)(F.E, {
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
var ls = n(379492);
f.Ay.initialize();
let lr = (e) => {
        let { transitionState: t, onClose: n } = e,
            [l, i] = c.useState(!0),
            [s, r] = c.useState([]),
            [a, o] = c.useState(null),
            [d, h] = c.useState(null),
            m = (0, f.bG)([eY.default], () => eY.default.isAuthenticated()),
            g = (0, f.bG)([eN.A], () => eN.A.hasLoadedExperiments),
            E = c.useCallback(() => {
                (0, nz.OY)()
                    .then((e) => {
                        let { capabilities: t, media_takedown_regulation: n } = e;
                        (i(!1), r(t), o(n));
                    })
                    .catch(() => {
                        (i(!1), r([]), o(null));
                    });
            }, []);
        (c.useEffect(() => {
            m
                ? (i(!0),
                  nq
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => E())
                      .catch(() => i(!1)))
                : E();
        }, [m, E]),
            c.useEffect(() => {
                !(async function () {
                    g || (await p.A.getLocationMetadata(), p.A.getExperiments());
                })();
            }, [g]));
        let { helpBody: A, supportOrgURL: _ } = n6(a),
            x = s.filter((e) => e !== nX.tY.MEDIA_TAKEDOWN),
            j = s.includes(nX.tY.MEDIA_TAKEDOWN),
            I = x.length > 0,
            C = I && j,
            N = l || !g;
        c.useEffect(() => {
            N || I || j || n();
        }, [N, I, j, n]);
        let v = c.useCallback(() => {
                (0, nK.mM)(() => Promise.resolve((e) => (0, u.jsx)(lr, { ...e })), { dismissable: !1 });
            }, []),
            T = c.useCallback((e, t) => {
                t !== le.SELECTION && e !== le.SELECTION ? h(le.SELECTION) : h(e);
            }, []),
            y = c.useMemo(() => nZ(nX.tY.MEDIA_TAKEDOWN, v), [v]),
            S = d ?? (C ? le.SELECTION : I ? le.DSA : le.TIDA);
        if (N || (!I && !j))
            return (0, u.jsx)(nW.a, {
                title: "",
                actions: [],
                transitionState: t,
                onClose: n,
                dismissable: !1,
                children: (0, u.jsx)(eO.B, {
                    gap: 16,
                    align: "center",
                    justify: "center",
                    style: { minHeight: "200px" },
                    children: (0, u.jsx)(eD.y, {}),
                }),
            });
        if (!C) {
            if (I)
                return (0, u.jsx)(nW.a, {
                    title: Q.intl.string(Q.t.Z11w18),
                    subtitle: Q.intl.format(Q.t["532l+q"], {
                        supportURL: nY.A.getArticleURL(L.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, u.jsx)(n3, { dsaCapabilities: x, onReopen: v }),
                });
            if (j)
                return (0, u.jsx)(nW.a, {
                    title: Q.intl.string(Q.t.YignUm),
                    actions: [{ text: Q.intl.string(Q.t.D5Czbu), variant: "primary", onClick: y }],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, u.jsx)(li, { helpBody: A, supportOrgURL: _ }),
                });
        }
        let b = [
            {
                stepKey: le.SELECTION,
                modalProps: { title: Q.intl.string(Q.t.Z11w18) },
                body: (0, u.jsx)(ln, { mediaTakedownRegulation: a }),
            },
            {
                stepKey: le.DSA,
                modalProps: {
                    title: Q.intl.string(Q.t.Z11w18),
                    subtitle: Q.intl.format(Q.t["532l+q"], {
                        supportURL: nY.A.getArticleURL(L.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, u.jsx)(n3, { dsaCapabilities: x, onReopen: v }),
            },
            {
                stepKey: le.TIDA,
                modalProps: { title: Q.intl.string(Q.t.YignUm) },
                body: (0, u.jsx)(li, { helpBody: A, supportOrgURL: _ }),
                nextButtonProps: { text: Q.intl.string(Q.t.D5Czbu) },
                onNext: () => (y(), !1),
            },
        ];
        return (0, u.jsx)("div", {
            className: { [le.SELECTION]: ls.a, [le.DSA]: ls.q, [le.TIDA]: void 0 }[S],
            children: (0, u.jsx)(nQ.t, {
                steps: b,
                currentStepKey: S,
                onStepChange: T,
                onClose: n,
                transitionState: t,
                dismissable: !1,
            }),
        });
    },
    la = () => (
        c.useEffect(() => {
            (0, nK.mM)(() => Promise.resolve((e) => (0, u.jsx)(lr, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
var lo = n(30793),
    lu = n(913659),
    lc = n(612181),
    ld = n(162252);
let lh = {
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
                os: { name: eQ().os?.family, version: eQ().os?.version },
                memory: t,
            }));
    },
    getTimeSinceNavigationStart: () => Date.now() - ld.fL,
};
var lm = n(649852),
    lg = n.n(lm),
    lf = n(615300),
    lp = n(319060),
    lE = n(844222),
    lA = n(240248),
    l_ = n(706192);
let lx = (0, lA.xI)(lp.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    lj = { friction: 10, tension: 130 },
    lI = function (e) {
        return class extends c.Component {
            timeout;
            anim = new lf.A.Value(0);
            state = { shouldAnimate: !m.Fr };
            componentDidMount() {
                m.Fr || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize());
            }
            handleResize = () => {
                let e = window.innerWidth > lx;
                (!this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({ shouldAnimate: e }));
            };
            handleResizeDebounced = lg()(this.handleResize, 60);
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
                lf.A.spring(this.anim, { toValue: e, ...lj }).start(t);
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
                return (0, u.jsx)("div", {
                    className: l_.i,
                    children: (0, u.jsx)(lE.C.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, u.jsx)(lf.A.div, {
                                className: l_.l,
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, u.jsx)(e, { ...this.props }),
                            });
                        },
                    }),
                });
            }
        };
    };
var lC = n(603647),
    lN = n(970672),
    lv = n(129014),
    lT = n(642277);
let ly = function (e) {
    let { match: t, location: n, attemptDeepLink: l } = e,
        [i, s] = c.useState(0);
    (c.useEffect(() => {
        (lv.default.once("connected", () => {
            s(1);
        }),
            lv.default.once("disconnected", () => {
                (0, eP.pX)((0, lT.W)());
            }),
            lv.default.connect());
    }, []),
        c.useEffect(() => {
            if (0 !== i) return;
            let e = setTimeout(() => (0, eP.pX)((0, lT.W)()), 3e3);
            return () => clearTimeout(e);
        }, [i]));
    let r = c.useCallback(
        async (e, t) => {
            try {
                (s(2), await l(e, t), s(3));
            } catch (e) {
                console.error("Error opening deeplink", e);
            }
        },
        [l],
    );
    if ((0, eP.MX)()) return null;
    switch (i) {
        case 1:
            return (0, u.jsxs)(w.Ay, {
                children: [
                    (0, u.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.qllnGm) }),
                    (0, u.jsx)(w.tK, { children: Q.intl.string(Q.t.SXCxye) }),
                    (0, u.jsx)("div", {
                        className: X.eT,
                        children: (0, u.jsx)(M.$, {
                            text: Q.intl.string(Q.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => r(t, n),
                        }),
                    }),
                    (0, u.jsx)("div", {
                        className: B()(X.Ot, X.F1),
                        children: (0, u.jsx)(ec.Q, {
                            text: Q.intl.string(Q.t["2ixEBi"]),
                            textVariant: "body-sm/normal",
                            onClick: () => (0, eP.pX)((0, lT.W)()),
                        }),
                    }),
                ],
            });
        case 0:
        case 2:
            return (0, u.jsxs)(w.Ay, {
                children: [(0, u.jsx)(w.hE, { children: Q.intl.string(Q.t["Z+hCVU"]) }), (0, u.jsx)(w.CK, {})],
            });
        case 3:
            return (0, u.jsxs)(w.Ay, {
                children: [
                    (0, u.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.csrAMJ) }),
                    (0, u.jsx)(w.tK, { children: Q.intl.string(Q.t.ghBJz9) }),
                ],
            });
    }
};
var lS = n(723923);
f.Ay.initialize();
class lb extends c.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, em.A)(this.props.location),
            t = (0, d.qg)(this.props.location.search);
        (_.Bo.post({
            url: L.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, category: t.category, email_type: t.email_type },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { user: n },
                    } = e,
                    l = new tC.A(n);
                this.setState({ success: !0, busy: !1, user: l, category: t.category });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, G.d0)("disable_email_notifications"));
    }
    renderBusy() {
        return (0, u.jsx)(w.Ay, { children: (0, u.jsx)(w.CK, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: l } = this.props,
            i = Q.intl.formatToPlainString(Q.t.YDAohB, { category: t });
        return (0, u.jsxs)(w.Ay, {
            children: [
                (0, u.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.f6rdLg) }),
                (0, u.jsx)(w.tK, { children: i }),
                (0, u.jsx)("div", {
                    className: X.QX,
                    children: (0, u.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => l(n) }),
                }),
                (0, u.jsx)("div", {
                    className: X.Ot,
                    children: (0, u.jsx)(ec.Q, {
                        text: Q.intl.string(Q.t.YYTirT),
                        textVariant: "body-sm/normal",
                        onClick: () => l((0, C.T)(v.od.NOTIFICATIONS_EMAILS)),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: l } = this.state;
        if (null != l) {
            let e = lS.px.find((e) => e.category === l);
            if (null != e) return this.renderCategorySuccess(l, e.label());
        }
        return (0, u.jsxs)(w.Ay, {
            children: [
                (0, u.jsx)(w.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: tl._3.DEPRECATED_SIZE_100,
                    className: X.SX,
                }),
                (0, u.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t["6U6OMQ"]) }),
                (0, u.jsx)(w.tK, { children: Q.intl.string(Q.t["yaDJ4/"]) }),
                (0, u.jsx)("div", {
                    className: X.eT,
                    children: (0, u.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, u.jsxs)(w.Ay, {
            children: [
                (0, u.jsx)(w._V, { src: n(37772), className: X.SX }),
                (0, u.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.ox9hIS) }),
                (0, u.jsx)(w.tK, { children: Q.intl.string(Q.t["/dcuR5"]) }),
                (0, u.jsx)("div", {
                    className: X.eT,
                    children: (0, u.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let lR = f.Ay.connectStores([ed.A], () => ({ defaultRoute: ed.A.defaultRoute }))(lb);
var lL = n(110782),
    lO = n(10088),
    lD = n(871123),
    lk = n(189081),
    lw = n(67480),
    lG = n(45938),
    lP = n(587895),
    lU = n(242874),
    lB = n(446263),
    lF = n(287809),
    lM = n(97352),
    lV = n(615396),
    lH = n(682901),
    lW = n(716592);
function lK() {
    return (0, u.jsxs)(c.Fragment, {
        children: [
            (0, u.jsx)(w.eu, { src: null, size: tl._3.DEPRECATED_SIZE_100, className: X.SX }),
            (0, u.jsx)(w.tK, { children: Q.intl.string(Q.t.lTGZAl) }),
            (0, u.jsx)(w.hE, { className: B()(X.Ot, ej.tR), children: Q.intl.string(Q.t.ZTNur7) }),
        ],
    });
}
let lQ = f.Ay.connectStores([lw.A, lP.A, lM.A, lF.default], (e) => {
    let { giftCode: t } = e,
        n = lw.A.get(t.skuId),
        { subscriptionPlanId: l } = t;
    return {
        sku: n,
        subscriptionPlan: null != l ? (0, lV.c9)(l) : null,
        application: null != n ? lP.A.getApplication(n.applicationId) : null,
        gifter: lF.default.getUser(t.userId),
    };
})(function (e) {
    let { error: t, giftCode: n, gifter: l, sku: i, application: s, subscriptionPlan: r } = e,
        a = null == l ? Q.intl.string(Q.t.lTGZAl) : Q.intl.formatToPlainString(Q.t.TjWdPc, { username: l.username });
    if (null == i) return (0, u.jsx)(lK, {});
    let o = i.name;
    return (
        null != r &&
            (o = Q.intl.formatToPlainString(r.interval === lH.WT.MONTH ? Q.t.CTpcCZ : Q.t["rgPWG/"], {
                skuName: i.name,
                intervalCount: r.intervalCount,
            })),
        (0, u.jsxs)(c.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, u.jsx)(lB.A, { defaultAnimationState: lU.oA.LOOP, giftStyle: n.giftStyle, className: lW.e })
                    : (0, u.jsx)(w.eu, {
                          src: null != l ? l.getAvatarURL(void 0, 100) : null,
                          size: tl._3.DEPRECATED_SIZE_100,
                          className: X.SX,
                      }),
                null != t
                    ? (0, u.jsxs)(c.Fragment, {
                          children: [
                              (0, u.jsx)(w.tK, { children: Q.intl.string(Q.t.mDFGFj) }),
                              (0, u.jsx)(w.hE, { children: t }),
                          ],
                      })
                    : (0, u.jsxs)(c.Fragment, {
                          children: [
                              (0, u.jsx)(w.tK, { children: a }),
                              (0, u.jsxs)(w.hE, {
                                  className: B()(X.Ot, ej.tR),
                                  children: [
                                      i.productLine !== L.EZt.COLLECTIBLES &&
                                          (0, u.jsx)(ts.A, {
                                              size: ts.M.MEDIUM,
                                              className: lW.I,
                                              game: s,
                                              skuId: i.id,
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
var lq = n(935399),
    lX = n(475743),
    lz = n(707554),
    lY = n(68281);
function l$(e) {
    let { loginStatus: t, authBoxClassName: n, transparent: l = !1, onSubmit: i, onCancelAccountDeletion: s } = e,
        r = t === L.aUe.ACCOUNT_DISABLED,
        a = r ? Q.intl.string(Q.t["j3rC+U"]) : Q.intl.string(Q.t.ZFWofo),
        o = r ? Q.intl.string(Q.t["6eNTWe"]) : Q.intl.string(Q.t["pCBti+"]);
    return (0, u.jsx)(w.Ay, {
        tag: "form",
        onSubmit: i,
        className: n,
        transparent: l,
        children: (0, u.jsxs)(lz.F, {
            component: (0, u.jsx)(w.hE, { className: X.QB, children: a }),
            children: [
                (0, u.jsx)(w.tK, { className: X.SX, children: o }),
                (0, u.jsxs)(w.eB, {
                    children: [
                        (0, u.jsx)(M.$, { text: Q.intl.string(Q.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, u.jsx)("div", {
                            className: B()(X.Ot, lY.Qt),
                            children: Q.intl.format(Q.t.js2rr5, { onClick: s }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var lJ = n(700156),
    lZ = n(785161),
    l0 = n(228916);
function l1(e) {
    let { children: t, className: n, ...l } = e,
        i = t();
    return (0, u.jsx)(w.Ay, {
        ...l,
        className: B()(n, l0.kL),
        contentClassName: l0.Qs,
        children: i.map((e, t) =>
            (0, u.jsx)("div", { className: l0.fi, style: { flexBasis: `${100 / i.length}%` }, children: e }, t),
        ),
    });
}
var l2 = n(895600),
    l8 = n(506774),
    l4 = n(104798),
    l3 = n(991512);
let l5 = "mweb_handoff_nonce",
    l9 = "mweb_handoff_nonce_expiration",
    l7 = +tq.A.Millis.MINUTE,
    l6 = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    ie = new Set(["deep_link_failed"]);
function it() {
    (l8.w.remove(l5), l8.w.remove(l9));
}
let il = () => {
    let e = (0, f.bG)([eY.default], () => eY.default.getFingerprint()),
        { fingerprint: t, handoff_token: n } = (0, d.qg)(window.location.search),
        l = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
        i = l ?? (null !== e ? e : void 0);
    c.useEffect(() => {
        null !== l && e !== l && x.h.dispatch({ type: "FINGERPRINT", fingerprint: l });
    }, [l, e]);
    let [s, r] = c.useState(null),
        a = c.useCallback(
            (e) => {
                (r(e),
                    b.default.track(
                        L.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                        { reason: e, fingerprint: (0, ez.v)(i) },
                        { fingerprint: i },
                    ));
            },
            [r, i],
        ),
        o = l8.w.get(l5);
    if (
        ("null" === n && null === s && a("deep_link_failed"),
        null != n && "null" !== n && null == o && null === s && a("nonce_missing"),
        c.useEffect(() => {
            if (null != o) {
                let e = l8.w.get(l9);
                (null == e || Date.now() >= e) && (a("nonce_expired"), it());
            }
        }, [o, a]),
        c.useEffect(() => {
            null != n &&
                "null" !== n &&
                null != o &&
                null == s &&
                _.Bo.post({ url: L.Rsh.HANDOFF_EXCHANGE, body: { key: o, handoff_token: n }, rejectWithError: !0 })
                    .then((e) => p.A.loginToken(e.body.token, !1))
                    .then(() => {
                        b.default.track(L.HAw.LOGIN_SUCCESSFUL, {
                            source: L.mdB.MOBILE_WEB_HANDOFF,
                            is_new_user: !1,
                            fingerprint: (0, ez.v)(i),
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
                        it();
                    });
        }, [n, o, s, i, a]),
        null == i)
    )
        return null;
    let h =
        null == s
            ? (0, u.jsxs)(u.Fragment, {
                  children: [Q.intl.string(Q.t.uJ1JsY), (0, u.jsx)("br", {}), Q.intl.string(Q.t.GHVWAs)],
              })
            : ie.has(s)
              ? Q.intl.string(Q.t.EPt55r)
              : l6.has(s)
                ? Q.intl.string(Q.t.g87kTp)
                : void 0;
    return null != s && ie.has(s)
        ? (0, u.jsx)("div", {
              className: l3.Un,
              children: (0, u.jsx)(F.E, {
                  color: "interactive-text-default",
                  variant: "body-sm/semibold",
                  children: h,
              }),
          })
        : (0, u.jsxs)("div", {
              className: l3.kL,
              children: [
                  (0, u.jsx)(F.E, { variant: "body-sm/semibold", children: h }),
                  (0, u.jsx)(M.$, {
                      variant: "overlay-primary",
                      text: Q.intl.string(Q.t.NcC759),
                      onClick: function () {
                          let e = l4.A.generateNonce();
                          (l8.w.set(l5, e), l8.w.set(l9, Date.now() + l7));
                          let t = new URL(L.J$u),
                              n = new URLSearchParams(window.location.search);
                          (n.delete("fingerprint"), n.delete("handoff_token"));
                          let l = new URLSearchParams();
                          (l.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                              l.set("key", e),
                              l.set("fingerprint", i),
                              (t.search = l.toString()),
                              b.default.track(
                                  L.HAw.DEEP_LINK_CLICKED,
                                  { fingerprint: (0, ez.v)(i), source: "mobile_web_handoff", destination: L.J$u },
                                  { fingerprint: i, flush: !0 },
                              ),
                              (window.location.href = t.toString()));
                      },
                  }),
              ],
          });
};
var ii = n(274303),
    is = n(139286),
    ir = n(970573),
    ia = n(491919);
function io(e) {
    let { onDismiss: t, embedded: n = !1 } = e;
    return (
        (0, is.A)({ type: h.ImpressionTypes.MODAL, name: h.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, u.jsxs)(w.Ay, {
            className: ia.ci,
            transparent: n,
            children: [
                !n && (0, u.jsx)(w.hE, { children: Q.intl.string(Q.t.bVbB63) }),
                (0, u.jsx)(F.E, {
                    className: ia.PK,
                    variant: "body-md/normal",
                    color: "text-default",
                    children: Q.intl.string(Q.t["0M5fN7"]),
                }),
                (0, u.jsx)(ir.A, {
                    actionText: Q.intl.string(Q.t["DSN+hw"]),
                    onAction: (e) => {
                        e === ir.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, u.jsx)("div", {
                    className: ia.o1,
                    children: (0, u.jsx)(ec.Q, {
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
function iu(e) {
    let {
        authBoxClassName: t,
        country: n,
        login: l,
        password: i,
        onLoginChange: s,
        onPasswordChange: r,
        loginRef: a,
        passwordRef: o,
    } = e;
    return (0, u.jsxs)(w.Ay, {
        className: t,
        children: [
            (0, u.jsx)(lJ.M, {}),
            (0, u.jsxs)(w.eB, {
                className: X.QX,
                children: [
                    (0, u.jsx)(ex.A, {
                        className: X.SX,
                        alpha2: n.alpha2,
                        countryCode: n.code.split(" ")[0],
                        label: Q.intl.string(Q.t.tUjnxr),
                        onChange: s,
                        setRef: a,
                        autoCapitalize: "none",
                        autoComplete: "username webauthn",
                        autoCorrect: "off",
                        spellCheck: "false",
                        value: l,
                        autoFocus: !0,
                        required: !0,
                    }),
                    (0, u.jsx)(w.pd, {
                        className: X.SX,
                        label: Q.intl.string(Q.t["CIGa+7"]),
                        onChange: r,
                        type: "password",
                        revealable: !0,
                        setRef: o,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        value: i,
                        required: !0,
                    }),
                    (0, u.jsx)("div", {
                        className: X.QB,
                        children: (0, u.jsx)(M.$, {
                            text: Q.intl.string(Q.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, u.jsx)(ec.Q, { text: Q.intl.string(Q.t.wWIufs), textVariant: "body-sm/normal", disabled: !0 }),
                    (0, u.jsx)("div", {
                        className: X.a5,
                        children: (0, u.jsx)(ec.Q, {
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
var ic = n(401755);
function id(e, t) {
    if (null == t[e]) return null;
    {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n;
    }
}
function ih(e) {
    let t,
        {
            invite: n,
            guildTemplate: l,
            giftCode: i,
            authBoxClassName: s,
            isEmbedded: r = !1,
            disableAutofocusOnDefaultForm: a,
            login: o,
            password: h,
            errors: g,
            loginSource: p,
            dismissedChooseAccount: E,
            setDismissedChooseAccount: A,
            conditionalMediationAbortController: _,
            onLoginChange: x,
            onPasswordChange: j,
            handleLogin: I,
            handleForgotPassword: C,
            handleGotoRegister: N,
            showPasswordResetNotice: v = !1,
        } = e,
        T = (0, f.bG)([e_.A], () => e_.A.getCountryCode()),
        y = (0, f.bG)([eY.default], () => eY.default.getLoginStatus()),
        S = (0, f.bG)([eY.default], () => eY.default.getIsPasswordlessActive()),
        R = (0, f.bG)([ii.A], () => ii.A.getHasLoggedInAccounts()),
        O = c.useCallback(
            (e) => {
                b.default.track(L.HAw.LOGIN_SUCCESSFUL, {
                    source: L.mdB.QR_CODE,
                    login_source: p,
                    gift_code_sku_id: i?.skuId ?? null,
                    is_new_user: !1,
                    login_method: "remote_auth",
                    login_instance_id: e ?? null,
                });
            },
            [p, i],
        ),
        { handoff_token: D } = (0, d.qg)(window.location.search),
        k = m.Fr && m.KY && null != D,
        G = null == g.email && null != g.password,
        P = c.useRef(null),
        U = c.useRef(null),
        F = (0, lX.Ay)(g);
    if (
        (c.useEffect(() => {
            function e(e) {
                return null != g[e];
            }
            null != F &&
                F !== g &&
                (e("password") ? U.current?.focus() : (e("email") || e("login")) && P.current?.focus());
        }, [g, P, U, F]),
        r)
    )
        t = null;
    else if (null != n) t = (0, u.jsx)("div", { className: X.S3, children: (0, u.jsx)(lJ.A, { invite: n }) });
    else if (null != i) t = (0, u.jsx)(lQ, { giftCode: i });
    else {
        let e = null;
        if (!1 === (0, nG.Ct)()) {
            let t = v ? Q.t["N9U/9X"] : Q.t.euS7r4;
            e = (0, u.jsx)(w.tK, { children: Q.intl.string(t) }, "subtitle");
        }
        t = (0, u.jsxs)("div", {
            className: lY.wx,
            children: [(0, u.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t["7fNJgA"]) }, "title"), e],
        });
    }
    let V = (0, u.jsxs)("div", {
        className: lY.Eh,
        children: [
            R &&
                E &&
                (0, u.jsx)("div", {
                    className: lY.AX,
                    children: (0, u.jsx)(M.$, {
                        onClick: () => A(!1),
                        variant: "secondary",
                        text: Q.intl.string(Q.t["1MrpWO"]),
                        icon: n1.ChevronSmallLeftIcon,
                    }),
                }),
            t,
            (0, u.jsx)(lz.F, {
                children: (0, u.jsxs)(w.eB, {
                    className: X.QX,
                    children: [
                        (0, u.jsx)(ex.A, {
                            alpha2: T.alpha2,
                            countryCode: T.code.split(" ")[0],
                            className: X.SX,
                            label: Q.intl.string(Q.t.tUjnxr),
                            error: id("login", g) ?? id("email", g),
                            onChange: x,
                            setRef: P,
                            autoCapitalize: "none",
                            autoComplete: "username webauthn",
                            autoCorrect: "off",
                            spellCheck: "false",
                            value: o,
                            autoFocus: !G && !k && !a,
                            required: !0,
                        }),
                        (0, u.jsx)(w.pd, {
                            label: Q.intl.string(Q.t["CIGa+7"]),
                            error: id("password", g),
                            onChange: j,
                            name: "password",
                            type: "password",
                            revealable: !0,
                            setRef: U,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            autoFocus: G && !k && !a,
                            value: h,
                            required: !0,
                        }),
                        (0, u.jsx)("div", {
                            className: B()(X.SX, X.a5),
                            children: (0, u.jsx)(ec.Q, {
                                text: Q.intl.string(Q.t.wWIufs),
                                textVariant: "body-sm/normal",
                                onClick: () => {
                                    (null != P.current && P.current.focus(), C());
                                },
                            }),
                        }),
                        (0, u.jsx)("div", {
                            className: X.QB,
                            children: (0, u.jsx)(M.$, {
                                text: Q.intl.string(Q.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                loading: y === L.aUe.LOGGING_IN,
                            }),
                        }),
                        !r &&
                            (0, u.jsx)("div", {
                                className: lY.Td,
                                children: (0, u.jsx)(ec.Q, {
                                    text: Q.intl.string(Q.t["/kpMDt"]),
                                    textVariant: "body-sm/normal",
                                    onClick: () => (0, lZ.w)(_),
                                    disabled: S,
                                }),
                            }),
                        (0, u.jsxs)("div", {
                            className: X.a5,
                            children: [
                                (0, u.jsx)("span", { className: lY.Qt, children: Q.intl.string(Q.t.tmE73r) }),
                                (0, u.jsx)("span", {
                                    className: lY.Z8,
                                    children: (0, u.jsx)(ec.Q, {
                                        text: Q.intl.string(Q.t.pV8xeR),
                                        textVariant: "body-sm/normal",
                                        onClick: N,
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
        ? (0, u.jsx)(iu, {
              authBoxClassName: s,
              country: T,
              login: o,
              password: h,
              onLoginChange: x,
              onPasswordChange: j,
              loginRef: P,
              passwordRef: U,
          })
        : null != l
          ? l.state === ic.QB.RESOLVING
              ? (0, u.jsx)(iu, {
                    authBoxClassName: s,
                    country: T,
                    login: o,
                    password: h,
                    onLoginChange: x,
                    onPasswordChange: j,
                    loginRef: P,
                    passwordRef: U,
                })
              : (0, u.jsx)(l1, {
                    onSubmit: I,
                    tag: "form",
                    className: B()(s, lY.Sy),
                    children: () => [
                        (0, u.jsx)(l2.A, { guildTemplate: l }, "template"),
                        (0, u.jsx)(c.Fragment, { children: V }, "form-wrapper"),
                    ],
                })
          : R && !E
            ? (0, u.jsx)(io, { onDismiss: () => A(!0), embedded: r })
            : (0, u.jsxs)("div", {
                  children: [
                      (0, u.jsx)(w.Ay, {
                          onSubmit: I,
                          tag: "form",
                          className: B()(s, { [lY.M0]: k }),
                          transparent: r,
                          expanded: !0,
                          children: (0, u.jsxs)(eO.B, {
                              direction: r ? "vertical" : "horizontal",
                              align: r ? "stretch" : "center",
                              gap: r ? 24 : 64,
                              children: [
                                  V,
                                  (0, u.jsx)(lZ.A, {
                                      horizontal: r,
                                      onAuthenticateSuccess: O,
                                      conditionalMediationAbortController: _,
                                  }),
                              ],
                          }),
                      }),
                      k && (0, u.jsx)(il, {}),
                  ],
              });
}
var im = n(397404);
function ig(e) {
    let { loginSource: t, giftCodeSKUId: n, isEmbedded: l = !1 } = e,
        i = (0, f.cf)(
            [eY.default],
            () => ({ ticket: eY.default.getMFATicket(), methods: eY.default.getMFAMethods() }),
            [],
        ),
        s = c.useCallback(
            (e) => {
                let { mfaType: l, data: i, ticket: s } = e;
                return (
                    H._.dispatch(L.jej.WAVE_EMPHASIZE),
                    p.A.loginMFAv2({ code: i, ticket: s, mfaType: l, source: t, giftCodeSKUId: n })
                );
            },
            [t, n],
        );
    return (0, u.jsx)(w.Ay, {
        transparent: l,
        style: { padding: 0 },
        children: (0, u.jsx)(im.t, {
            mfaFinish: s,
            mfaChallenge: i,
            onEarlyClose: () => {
                x.h.dispatch({ type: "LOGIN_RESET" });
            },
            embedded: l,
        }),
    });
}
var ip = n(511815),
    iE = n(139033),
    iA = n(952116),
    i_ = n(491509),
    ix = n(913612),
    ij = n(933924);
function iI(e) {
    let {
        invite: t,
        guildTemplate: n,
        giftCode: l,
        location: i,
        redirectTo: s,
        transitionTo: r,
        authBoxClassName: a,
        isEmbedded: o = !1,
        loginSource: h,
        disableAutofocusOnDefaultForm: m,
    } = e;
    (0, ix.K)();
    let g = (0, f.bG)([eY.default], () => eY.default.isAuthenticated()),
        E = (0, f.bG)([S.A], () => S.A.isHandoffAvailable()),
        A = (0, f.bG)([eY.default], () => eY.default.getLoginStatus()),
        x = l?.skuId ?? null,
        I = (0, f.bG)([lw.A], () => (null != x ? lw.A.get(x) : null)),
        {
            checkingHandoff: C,
            redirecting: N,
            login: v,
            password: T,
            phoneVerifyError: R,
            dismissedChooseAccount: O,
            setDismissedChooseAccount: D,
            errors: k,
            conditionalMediationAbortController: P,
            loginSource: U,
            loginOrSSO: B,
            handleLogin: M,
            handleIPAuthorize: V,
            handlePasswordReset: W,
            handleForgotPassword: K,
            handleResendCode: q,
            handleReset: z,
            handleCancelAccountDeletion: Y,
            handleGotoRegister: $,
            loginReset: J,
            onLoginChange: Z,
            onPasswordChange: ee,
        } = (function (e) {
            let {
                    invite: t,
                    guildTemplate: n,
                    giftCode: l,
                    handoffAvailable: i,
                    authenticated: s,
                    transitionTo: r = eP.pX,
                    redirectTo: a,
                    location: o,
                    loginSource: h,
                } = e,
                [m, g] = c.useState(() => i),
                [f, E] = c.useState(() => s),
                [A, x] = c.useState(""),
                [j, I] = c.useState(() => {
                    let e = null != o ? (0, d.qg)(o.search) : {};
                    return e.email ?? e.login ?? "";
                }),
                [C, N] = c.useState(""),
                [v, T] = c.useState(!1),
                [S, b] = c.useState(null),
                [R, O] = c.useState(!1),
                [D] = c.useState(() => new AbortController()),
                [k, w] = c.useState({});
            !m || i || s || g(!1);
            let G = c.useMemo(() => {
                    if (null != h) return h;
                    if (null != l) return "gift";
                    if (null != n) return "guild_template";
                    if (null != t) {
                        if (null != t.guild) return "guild_invite";
                        if (null != t.channel) return "dm_invite";
                        if (null != t.inviter) return "friend_invite";
                    }
                    return null != a ? y(a) : null;
                }, [h, l, n, t, a]),
                P = null != l ? l.skuId : null,
                U = c.useCallback(
                    (e) => {
                        let t = null != e ? (0, d.qg)(e.search) : {};
                        if ((delete t.redirect_to, null != a)) {
                            if (eu(a))
                                return void (async function (e) {
                                    let t = (0, es.A)();
                                    try {
                                        var n;
                                        let l,
                                            i,
                                            s = (
                                                await _.Bo.post({
                                                    url: L.Rsh.HANDOFF,
                                                    body: { key: t },
                                                    oldFormErrors: !0,
                                                    rejectWithError: !0,
                                                })
                                            ).body.handoff_token,
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
                                })(a);
                            r(a);
                        } else if (null == t.service) r(L.BVt.APP);
                        else {
                            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + L.Rsh.SSO,
                                n = { ...t, token: eY.default.getToken() };
                            window.location.href = `${e}?${(0, d.As)(n)}`;
                        }
                    },
                    [a, r],
                ),
                B = c.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e &&
                            null != t &&
                            (E(!0),
                            n
                                ? p.A.verifySSOToken("login", null).then(
                                      (e) => {
                                          e ? U(t) : E(!1);
                                      },
                                      () => U(t),
                                  )
                                : U(t));
                    },
                    [U],
                ),
                M = c.useCallback(() => {
                    (D.abort("Login state reset"), w({}), p.A.loginReset());
                }, [D]),
                V = c.useCallback(
                    async function (e) {
                        let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (e?.preventDefault(),
                            D.abort("Starting password login"),
                            H._.dispatch(L.jej.WAVE_EMPHASIZE),
                            w({}));
                        try {
                            await p.A.login({
                                login: A + j,
                                password: C,
                                undelete: n ?? v,
                                source: G,
                                giftCodeSKUId: P,
                                invite: t,
                            });
                        } catch (e) {
                            w((0, t4.p)(e));
                        }
                    },
                    [D, j, A, C, v, G, P, t],
                ),
                W = c.useCallback(
                    async (e) => {
                        let t = A + j;
                        w({});
                        try {
                            let { token: n } = await eE.A.verifyPhone(t, e, !1);
                            (await p.A.authorizeIPAddress(n), V());
                        } catch (e) {
                            null != e.body && null != e.body.message && b(e.body.message);
                        }
                    },
                    [A, j, V],
                ),
                K = c.useCallback(
                    async (e) => {
                        b(null);
                        try {
                            let { token: t } = await eE.A.verifyPhone(A + j, e, !1);
                            r(L.BVt.RESET, { search: (0, d.As)({ token: t, from_login: "true" }) });
                        } catch (e) {
                            null != e.body && null != e.body.message && b(e.body.message);
                        }
                    },
                    [A, j, r],
                ),
                q = c.useCallback(
                    async (e) => {
                        null != e && e.preventDefault();
                        let t = A + j;
                        w({});
                        try {
                            H._.dispatch(L.jej.WAVE_EMPHASIZE);
                            let e = await p.A.forgotPassword(t);
                            if (!1 === e) return;
                            e === ip.D.ONE_TIME_LOGIN
                                ? (0, nK.qf)((e) => {
                                      let t = [
                                          {
                                              variant: "primary",
                                              text: Q.intl.string(Q.t.BddRzS),
                                              onClick: e.onClose,
                                              fullWidth: !0,
                                          },
                                      ];
                                      return (0, u.jsx)(nW.a, {
                                          title: Q.intl.string(Q.t["6Ecyts"]),
                                          actions: t,
                                          ...e,
                                          children: (0, u.jsx)(F.E, {
                                              variant: "body-md/normal",
                                              children: Q.intl.string(Q.t.iAcrqV),
                                          }),
                                      });
                                  })
                                : (0, iE.A)({
                                      title: Q.intl.string(Q.t.f5Pi7A),
                                      subtitle: Q.intl.format(Q.t["6u5hQ9"], { email: t }),
                                  });
                        } catch (e) {
                            w((0, t4.p)(e));
                        }
                    },
                    [A, j],
                ),
                X = c.useCallback(() => {
                    eE.A.resendCode(A + j);
                }, [A, j]),
                z = c.useCallback((e) => {
                    (null != e && e.preventDefault(),
                        p.A.loginReset(),
                        N(""),
                        x(""),
                        I(""),
                        T(!1),
                        g(!1),
                        E(!1),
                        w({}));
                }, []),
                Y = c.useCallback(() => {
                    (T(!0), V(void 0, { undelete: !0 }));
                }, [V]),
                $ = c.useCallback(() => {
                    let e,
                        i = null != o ? (0, d.qg)(o.search) : {};
                    ("" !== j && (i.email = j),
                        null != t
                            ? ((i.mode = "register"), (e = L.BVt.INVITE(t.code)))
                            : null != l
                              ? ((i.mode = "register"), (e = L.BVt.GIFT_CODE(l.code)))
                              : null != n
                                ? (e = L.BVt.GUILD_TEMPLATE(n.code))
                                : null != a
                                  ? ((e = L.BVt.REGISTER), (i.redirect_to = a))
                                  : (e = L.BVt.REGISTER),
                        M(),
                        r(e, { search: (0, d.As)(i) }),
                        H._.dispatch(L.jej.WAVE_EMPHASIZE));
                }, [j, t, l, n, a, o, M, r]);
            return {
                checkingHandoff: m,
                redirecting: f,
                login: j,
                password: C,
                phoneVerifyError: S,
                dismissedChooseAccount: R,
                setDismissedChooseAccount: O,
                errors: k,
                conditionalMediationAbortController: D,
                loginSource: G,
                loginOrSSO: B,
                handleLogin: V,
                handleIPAuthorize: W,
                handlePasswordReset: K,
                handleForgotPassword: q,
                handleResendCode: X,
                handleReset: z,
                handleCancelAccountDeletion: Y,
                handleGotoRegister: $,
                loginReset: M,
                onLoginChange: c.useCallback((e, t) => {
                    (I(e), x(t));
                }, []),
                onPasswordChange: c.useCallback((e) => {
                    N(e);
                }, []),
            };
        })({
            invite: t,
            guildTemplate: n,
            giftCode: l,
            handoffAvailable: E,
            authenticated: g,
            transitionTo: r,
            redirectTo: s,
            location: i,
            loginSource: h,
        });
    (0, lq.Ay)(() => {
        (E && !g ? (0, j.ST)() : g && B(g, i, !0),
            b.default.track(
                L.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: U,
                    authenticated: g,
                    ...(null != I ? (0, i_.A)(I, !1, !1) : {}),
                    source: (0, eP.PR)(),
                },
                { flush: !0 },
            ),
            g || (0, ij.a)({ abortController: P, loginSource: U, giftCodeSKUId: x }),
            p.A.getLocationMetadata(),
            (0, G.d0)("login"));
    });
    let et = (0, lX.Ay)(g);
    c.useEffect(() => {
        let e = C && (E || N);
        g && !1 === et && !e && (P.abort("Transitioning to authenticated state"), B(g, i));
    }, [g, E, et, N, C, P, B, i]);
    let en = i?.state?.passwordReset === !0;
    if (N || C) return (0, u.jsx)(w.Ay, { transparent: o, children: (0, u.jsx)(eD.y, {}) });
    if (E)
        return (0, u.jsxs)(w.Ay, {
            className: a,
            transparent: o,
            children: [
                (0, u.jsx)(w.CK, {}),
                (0, u.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.S6RMNA) }),
                (0, u.jsx)(w.tK, { children: Q.intl.string(Q.t.YZiJbh) }),
            ],
        });
    switch (A) {
        case L.aUe.LOGGING_IN_MFA_SMS:
        case L.aUe.MFA_SMS_STEP:
        case L.aUe.LOGGING_IN_MFA:
        case L.aUe.MFA_STEP:
            return (0, u.jsx)(ig, { loginSource: U, giftCodeSKUId: x, isEmbedded: o });
        case L.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case L.aUe.ACCOUNT_DISABLED:
            return (0, u.jsx)(l$, {
                loginStatus: A,
                authBoxClassName: a,
                transparent: o,
                onSubmit: z,
                onCancelAccountDeletion: Y,
            });
        case L.aUe.PHONE_IP_AUTHORIZATION:
            return (0, u.jsx)(w.Ay, {
                tag: "form",
                className: a,
                transparent: o,
                children: (0, u.jsx)(iA.A, {
                    title: Q.intl.string(Q.t.w55Oco),
                    subtitle: Q.intl.format(Q.t.CfRZBj, { onResendClick: q }),
                    error: R,
                    onSubmit: V,
                    onCancel: J,
                }),
            });
        case L.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, u.jsx)(w.Ay, {
                tag: "form",
                className: a,
                transparent: o,
                children: (0, u.jsx)(iA.A, {
                    title: Q.intl.string(Q.t["+xqy3d"]),
                    subtitle: Q.intl.format(Q.t.ef4uZ7, { onResendClick: q }),
                    error: R,
                    onSubmit: W,
                    onCancel: J,
                }),
            });
        case L.aUe.LOGGING_IN:
        case L.aUe.NONE:
        default:
            return (0, u.jsx)(ih, {
                invite: t,
                guildTemplate: n,
                giftCode: l,
                authBoxClassName: a,
                isEmbedded: o,
                disableAutofocusOnDefaultForm: m,
                login: v,
                password: T,
                errors: k,
                loginSource: U,
                dismissedChooseAccount: O,
                setDismissedChooseAccount: D,
                conditionalMediationAbortController: P,
                onLoginChange: Z,
                onPasswordChange: ee,
                handleLogin: M,
                handleForgotPassword: K,
                handleGotoRegister: $,
                showPasswordResetNotice: en,
            });
    }
}
var iC = n(664294);
let iN = null,
    iv = "underage";
class iT extends f.Ay.Store {
    static displayName = "AgeGateStore";
    isUnderageAnonymous() {
        if (nG.isPlatformEmbedded && 1) {
            if (null != iN && iN + nt.bm > Date.now()) return !0;
        } else if (1) return null != iC.q(document.cookie)[iv];
        return !1;
    }
}
let iy = new iT(x.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        ((iN = Date.now()), (document.cookie = `${iv}=1;path=/`));
    },
    LOGIN_SUCCESS: function () {
        ((iN = null), (document.cookie = `${iv}=1;path=/;max-age=0`));
    },
});
var iS = n(509434),
    ib = n(121780),
    iR = n(970116);
let iL = function () {
    let e,
        t =
            null != (e = (0, f.bG)([ib.A], () => ib.A.getMinimumAge()))
                ? Q.intl.formatToPlainString(Q.t.Sn7icL, { minAge: e })
                : Q.intl.string(Q.t.r2AEw1);
    return (0, u.jsx)(w.Ay, {
        children: (0, u.jsxs)("div", {
            className: iR.hQ,
            children: [
                (0, u.jsx)(w.hE, { className: iR.DD, children: Q.intl.string(Q.t.nCB6Ga) }),
                (0, u.jsx)(w.tK, { className: iR.VA, children: Q.intl.format(Q.t.KQgoxG, { underageMessage: t }) }),
                (0, u.jsx)(M.$, {
                    icon: iS.LinkExternalSmallIcon,
                    text: Q.intl.string(Q.t.hvVgAZ),
                    onClick: () => window.open(nY.A.getArticleURL(L.MVz.AGE_GATE), "_blank"),
                    iconPosition: "end",
                }),
            ],
        }),
    });
};
(n(994555), n(827343), n(792251), n(253400), n(945041));
var iO = n(493527),
    iD = n(544395);
function ik(e) {
    let {
            initialEmail: t,
            invite: n,
            giftCode: l,
            guildTemplate: i,
            onApiErrors: s,
            onEmailChange: r,
            onGotoLogin: a,
            onRegister: o,
        } = e,
        [d, h] = c.useState(!1),
        [m, g] = c.useState(!1);
    function p(e) {
        b.default.track(L.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function E(e) {
        b.default.track(L.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    let A = (0, f.bG)([tJ.A], () => tJ.A.getAuthenticationConsentRequired()),
        _ = (0, f.bG)([iD.A], () => iD.A.registrationUsernameSuggestion()),
        x = c.useRef(null),
        j = c.useRef(null),
        I = c.useRef(null),
        C = c.useRef(null),
        [N, v] = c.useState(t),
        [T, y] = c.useState(""),
        [S, R] = c.useState(""),
        [O, D] = c.useState(""),
        [k, G] = c.useState(null),
        [P, U] = tY(A),
        [V, W] = c.useState(!1),
        [K, q] = t$(),
        [z, Y] = c.useState({}),
        { message: $, email: J, username: Z, global_name: ee, password: et, date_of_birth: en } = z,
        [el, ei] = c.useState(null),
        [es, er] = c.useState(null),
        [ea, eo] = c.useState(null),
        [eu, ed] = c.useState(null),
        eh = null != A && P;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: l, globalNameRef: i, passwordRef: s } = e,
            r = (0, lX.Ay)(t);
        c.useEffect(() => {
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
    })({ apiErrors: z, emailRef: x, usernameRef: j, globalNameRef: I, passwordRef: C });
    let em = c.useCallback(async () => {
            let e = null != l ? l.skuId : null,
                t = t8.mZ.getState(),
                r = (0, lA.uJ)(_) ? null : S === _;
            (H._.dispatch(L.jej.WAVE_EMPHASIZE), W(!0), Y({}));
            try {
                (await nn({
                    email: N,
                    username: S,
                    globalName: T,
                    consent: P,
                    password: O,
                    invite: n?.code,
                    usedUsernameSuggestion: r,
                    guildTemplateCode: i?.code,
                    giftCodeSKUId: e,
                    birthday: k,
                    promoEmailConsent: t.required ? t : null,
                }),
                    o?.());
            } catch (t) {
                if ((W(!1), !(t instanceof t2.LG))) return;
                let e = (0, t4.W)(t);
                (Y(e), s?.(e), "number" == typeof e.retry_after && q(e.retry_after));
            }
        }, [l, i, n, N, s, o, _, S, T, O, k, P, q]),
        eg = c.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == A)) return;
                let t = !1;
                (0 === N.length && (ei(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    0 === S.length && (er(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    0 === O.length && (eo(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    null == k && (ed(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    t || em());
            },
            [N, S, O, k, A, em],
        ),
        ef = null;
    return (
        "string" == typeof $ && (ef = (0, u.jsx)(w.ME, { className: B()(X.QX, ni.gJ), children: $ })),
        (0, u.jsx)("form", {
            onSubmit: eg,
            children: (0, u.jsxs)(w.eB, {
                className: X.QX,
                children: [
                    (0, u.jsx)(w.pd, {
                        autoFocus: !0,
                        className: X.SX,
                        label: Q.intl.string(Q.t.dI4d4S),
                        name: "email",
                        value: N,
                        onChange: (e) => {
                            (v(e), r?.(e), ei(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null));
                        },
                        error: el ?? tz(J),
                        type: "email",
                        autoComplete: "username",
                        setRef: x,
                        required: !0,
                        onFocus: () => p("email"),
                        onBlur: () => E("email"),
                    }),
                    (0, u.jsx)(w.pd, {
                        label: Q.intl.string(Q.t["9AjdkD"]),
                        className: X.SX,
                        name: "global_name",
                        value: T,
                        onChange: y,
                        error: tz(ee),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: I,
                        onFocus: () => {
                            (h(!0), p("global_name"));
                        },
                        onBlur: () => {
                            (h(!1), E("global_name"));
                        },
                    }),
                    (0, u.jsx)(nx, {
                        show: d,
                        top: -12,
                        bottom: 20,
                        children: (0, u.jsx)(F.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: Q.intl.string(Q.t["330TCc"]),
                        }),
                    }),
                    (0, u.jsxs)("div", {
                        onBlur: () => g(!1),
                        onFocus: () => {
                            (g(!0),
                                (async function () {
                                    T.length > 0 &&
                                        !iD.A.wasRegistrationSuggestionFetched(T) &&
                                        (await iO.A.fetchSuggestionsRegistration(T));
                                })());
                        },
                        tabIndex: -1,
                        children: [
                            (0, u.jsx)(w.pd, {
                                label: Q.intl.string(Q.t.TWzdWj),
                                className: X.SX,
                                name: "username",
                                value: S,
                                onChange: (e) => {
                                    (R(e.toLocaleLowerCase()), er(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null));
                                },
                                error: es ?? tz(Z),
                                autoComplete: "off",
                                setRef: j,
                                required: !0,
                                onFocus: () => p("username"),
                                onBlur: () => E("username"),
                            }),
                            (0, u.jsx)(nj, {
                                username: S,
                                suggestion: _,
                                globalName: T,
                                isUsernameFocused: m,
                                onClickSuggestion: () => {
                                    (j.current?.focus(), null != _ && _.length > 0 && (R(_), er(null)));
                                },
                            }),
                        ],
                    }),
                    (0, u.jsx)(w.pd, {
                        label: Q.intl.string(Q.t["CIGa+7"]),
                        name: "password",
                        value: O,
                        onChange: (e) => {
                            (D(e), eo(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null));
                        },
                        error: ea ?? tz(et),
                        type: "password",
                        revealable: !0,
                        autoComplete: "new-password",
                        setRef: C,
                        required: !0,
                        onFocus: () => p("password"),
                        onBlur: () => E("password"),
                    }),
                    (0, u.jsx)(ng.A, {
                        label: Q.intl.string(Q.t.rhBeKe),
                        wrapperClassName: ni.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            (G(e), null != e && ed(null));
                        },
                        error: eu ?? tz(en),
                        value: k,
                        required: !0,
                        onFocus: p,
                        onBlur: E,
                    }),
                    (0, u.jsx)(na, {}),
                    (0, u.jsx)(ns, { consent: P, consentRequired: A, onConsentChange: U }),
                    (0, u.jsx)(t1.m, {
                        text: !P && A ? Q.intl.string(Q.t.AY4IVA) : null,
                        children: (0, u.jsx)("div", {
                            className: X.QX,
                            children: (0, u.jsx)(M.$, {
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
                    (0, u.jsx)("div", {
                        className: X.QX,
                        children: (0, u.jsx)(ec.Q, {
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
var iw = n(713654),
    iG = n(331722);
function iP(e) {
    let { channel: t } = e,
        n = (0, iw._U)(t.type);
    return (0, u.jsxs)("div", {
        className: iG.Nj,
        children: [
            null != n ? (0, u.jsx)(n, { color: "currentColor", size: "custom", width: 20, height: 20 }) : null,
            (0, u.jsx)(F.E, { className: iG.dN, color: "none", variant: "body-sm/semibold", children: t.name }),
        ],
    });
}
function iU(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, u.jsxs)("div", {
        className: iG.kL,
        children: [
            (0, u.jsx)(tL.Uq, { className: iG.II, guildId: n.guild_id, guildEvent: n, eventPreview: n }),
            (0, u.jsx)(tL.sC, { name: n.name, description: n.description, guildId: n.guild_id }),
            null != t && n.channel_id === t.id ? (0, u.jsx)(iP, { channel: t }) : null,
        ],
    });
}
var iB = n(231698);
function iF(e) {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let l = eh.DY(t),
        { name: i, description: s } = l;
    return (0, u.jsxs)("div", {
        children: [
            (0, u.jsx)(ek.D, {
                variant: "heading-sm/medium",
                color: "text-muted",
                className: iB.CT,
                children: Q.intl.string(Q.t.Eabu1z),
            }),
            (0, u.jsxs)("div", {
                className: iB.EB,
                children: [
                    (0, u.jsx)(tH.Ay, {
                        mask: tH.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, u.jsx)(tR.Ay, { guild: l, size: tR.Ay.Sizes.MEDIUM, active: !0 }),
                    }),
                    (0, u.jsxs)("div", {
                        className: iB.OA,
                        children: [
                            (0, u.jsx)(ek.D, { variant: "heading-xs/semibold", children: i }),
                            (0, u.jsxs)("div", {
                                className: iB.aH,
                                children: [
                                    (0, u.jsx)("div", { className: iB.Om }),
                                    null != n && n > 0
                                        ? (0, u.jsx)(F.E, {
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
                (0, u.jsx)(F.E, { color: "text-default", className: iB.CT, variant: "body-sm/normal", children: s }),
        ],
    });
}
function iM(e) {
    let { authBoxClassName: t, name: n, onNameChange: l } = e;
    return (0, u.jsxs)(w.Ay, {
        className: t,
        children: [
            (0, u.jsx)(lJ.M, {}),
            (0, u.jsxs)(w.eB, {
                className: ni.y0,
                children: [
                    (0, u.jsx)(t1.m, {
                        text: Q.intl.string(Q.t["hBB85/"]),
                        position: "right",
                        children: (0, u.jsx)(w.pd, {
                            label: Q.intl.string(Q.t["9AjdkD"]),
                            autoFocus: !0,
                            className: X.QB,
                            name: "username",
                            value: n,
                            placeholder: Q.intl.string(Q.t["09Q8yp"]),
                            onChange: l,
                            onFocus: () => {
                                b.default.track(L.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                b.default.track(L.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, u.jsx)(F.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        className: B()(X.QX, ni.E2),
                        children: Q.intl.format(Q.t["KI+BSb"], { termsURL: L.X7G.TERMS, privacyURL: L.X7G.PRIVACY }),
                    }),
                    (0, u.jsx)("div", {
                        className: X.Ot,
                        children: (0, u.jsx)(M.$, {
                            text: Q.intl.string(Q.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, u.jsx)("div", {
                        className: X.QX,
                        children: (0, u.jsx)(ec.Q, {
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
function iV(e) {
    let { consentRequired: t, consent: n, registering: l } = e,
        i = c.useMemo(() => null != t && n, [t, n]);
    return (0, u.jsx)(t1.m, {
        text: !n && t ? Q.intl.string(Q.t.AY4IVA) : null,
        children: (0, u.jsx)("div", {
            className: X.Ot,
            children: (0, u.jsx)(M.$, {
                text: Q.intl.string(Q.t["825cFy"]),
                variant: "primary",
                fullWidth: !0,
                type: "submit",
                loading: l,
                disabled: !i,
            }),
        }),
    });
}
function iH(e) {
    let { invite: t, authBoxClassName: n, hideInviteHeader: l = !1, onApiErrors: i, onGotoLogin: s, onRegister: r } = e,
        a = (0, f.bG)([tJ.A], () => tJ.A.getAuthenticationConsentRequired()),
        o = t?.guild_scheduled_event != null,
        d = c.useRef(null),
        h = null;
    h = l
        ? null
        : t?.guild_scheduled_event != null
          ? (0, u.jsx)(iU, { channel: t.channel, guildScheduledEvent: t.guild_scheduled_event })
          : (0, u.jsx)("div", { className: X.S3, children: (0, u.jsx)(lJ.A, { invite: t, inUnclaimedFlow: !0 }) });
    let [m, g] = c.useState(""),
        [p, E] = c.useState(null),
        [A, _] = tY(a),
        [x, j] = c.useState(!1),
        [I, C] = c.useState({}),
        { username: N, global_name: v, date_of_birth: T } = I,
        [y, S] = t$();
    c.useEffect(() => {
        null == p && d.current?.focus();
    }, [p, d]);
    let [R, O] = c.useState(null),
        [D, k] = c.useState(null),
        G = c.useCallback(async () => {
            (H._.dispatch(L.jej.WAVE_EMPHASIZE), j(!0), C({}));
            try {
                let e = await (function (e) {
                    let { invite: t = null, giftCodeSKUId: n = null, ...l } = e;
                    return nn({ ...l, invite: t, giftCodeSKUId: n });
                })({ consent: A, invite: t.code, globalName: m, birthday: p });
                r?.(e?.invite_join_deferred_code != null);
            } catch (t) {
                if ((j(!1), !(t instanceof t2.LG))) return;
                let e = (0, t4.W)(t);
                (C(e), i?.(e), "number" == typeof e.retry_after && S(e.retry_after));
            }
        }, [t, m, p, A, i, r, S, C, j]),
        P = c.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === a)) return;
                let t = !1;
                (0 === m.length && (O(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    null == p && (k(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    t || G());
            },
            [m, p, a, G, O, k],
        );
    return t.state === L.elq.RESOLVING
        ? (0, u.jsx)(iM, { authBoxClassName: n, name: m, onNameChange: g })
        : (0, u.jsxs)("div", {
              children: [
                  (0, u.jsx)(w.Ay, {
                      tag: "section",
                      className: n,
                      children: (0, u.jsxs)("form", {
                          onSubmit: P,
                          children: [
                              h,
                              o ? (0, u.jsx)("div", { className: ni.yF }) : null,
                              (0, u.jsxs)(w.eB, {
                                  className: o ? void 0 : ni.y0,
                                  children: [
                                      (0, u.jsx)(t0.k, {
                                          helperText: Q.intl.string(Q.t["330TCc"]),
                                          label: Q.intl.string(Q.t["9AjdkD"]),
                                          error: R ?? tz(v ?? N),
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
                                      (0, u.jsx)(ng.A, {
                                          label: Q.intl.string(Q.t.rhBeKe),
                                          wrapperClassName: ni.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              (E(e), null != e && k(null));
                                          },
                                          error: D ?? tz(T),
                                          value: p,
                                      }),
                                      (0, u.jsx)(ns, { consent: A, consentRequired: a, onConsentChange: _ }),
                                      (0, u.jsx)(iV, { consentRequired: a, consent: A, registering: x }),
                                      (0, u.jsx)("div", {
                                          className: X.QX,
                                          children: (0, u.jsx)(ec.Q, {
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
                      ? (0, u.jsx)(w.Ay, {
                            className: X.QX,
                            children: (0, u.jsx)(iF, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
n(100544);
var iW =
    (((r = {}).IDENTITY = "identity"),
    (r.DISPLAY_NAME = "display_name"),
    (r.ACCOUNT_INFORMATION = "account_information"),
    (r.FULL = "full"),
    (r.AGE_GATE = "age_gate"),
    (r.INVITE = "invite"),
    (r.SMS_VERIFY = "sms_verify"),
    r);
function iK(e) {
    let {
            authBoxClassName: t,
            giftCode: n,
            giftCodeSKU: l,
            guildTemplate: i,
            invite: s,
            hideInviteHeader: r = !1,
            location: a,
            redirectTo: o,
            onLoginStart: m,
            onRegister: g,
            transitionTo: E = eP.pX,
        } = e,
        A = (0, f.bG)([tJ.A], () => tJ.A.getAuthenticationConsentRequired()),
        _ = (0, f.bG)([eY.default], () => eY.default.isAuthenticated()),
        x = (0, f.bG)([iy], () => iy.isUnderageAnonymous()),
        j = (0, f.bG)([ii.A], () => ii.A.getHasLoggedInAccounts()),
        I = null != e.location ? (0, d.qg)(e.location.search) : {},
        [C, N] = c.useState(I.email ?? ""),
        [v, T] = c.useState({}),
        y = (0, lX.Ay)(_),
        S = (function (e, t, n) {
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
        D = c.useCallback(() => {
            _ && (null != o ? E(o) : E(ed.A.defaultRoute));
        }, [_, o, E]);
    ((0, lq.Ay)(() => {
        (D(),
            b.default.track(
                L.HAw.REGISTER_VIEWED,
                {
                    location: null != s ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: S,
                    ...(null != l ? (0, i_.A)(l, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == A && p.A.getLocationMetadata(),
            (0, G.d0)("register"));
    }),
        c.useEffect(() => {
            _ && !1 === y && ((0, no.C)(nu.zY.ORGANIC_REGISTERED), D());
        }, [_, y, D]));
    let k = iW.FULL;
    (x || null != v.date_of_birth ? (k = iW.AGE_GATE) : R && (k = iW.INVITE),
        (0, is.A)(
            {
                type: h.ImpressionTypes.VIEW,
                name: h.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: h.ImpressionGroups.USER_REGISTRATION_FLOW, step: k },
            },
            {},
            [k],
        ));
    let P = c.useCallback(
        (e) => {
            let t,
                l = null != a ? (0, d.qg)(a.search) : {};
            (null != s
                ? (t = L.BVt.INVITE_LOGIN(s.code))
                : null != n
                  ? (t = L.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != i
                    ? (t = L.BVt.GUILD_TEMPLATE_LOGIN(i.code))
                    : null != o
                      ? ((t = L.BVt.LOGIN), (l.redirect_to = o))
                      : ((t = L.BVt.LOGIN), "" !== C && (l = { email: C })),
                p.A.loginReset(),
                E(t, { search: (0, d.As)(l), source: "register" }),
                m?.(e),
                H._.dispatch(L.jej.WAVE_EMPHASIZE));
        },
        [C, s, n, i, o, a, m, E],
    );
    if (x || null != v.date_of_birth) return (0, u.jsx)(iL, {});
    if (null != s && R)
        return (0, u.jsx)(iH, {
            invite: s,
            authBoxClassName: t,
            hideInviteHeader: r,
            onApiErrors: T,
            onGotoLogin: P,
            onRegister: g,
        });
    let U = (0, u.jsx)(w.hE, { children: Q.intl.string(Q.t.wC4TlR) }, "title"),
        F = !1;
    null != i
        ? ((U = (0, u.jsx)(l2.A, { guildTemplate: i })), (F = !0))
        : null != n
          ? (U = (0, u.jsx)(lQ, { giftCode: n }))
          : !r &&
            null != s &&
            O &&
            s.state === L.elq.RESOLVED &&
            (U = (0, u.jsx)("div", { className: X.S3, children: (0, u.jsx)(lJ.A, { invite: s, isRegister: !0 }) }));
    let V = (0, u.jsx)(ik, {
        initialEmail: I.email ?? "",
        invite: s,
        giftCode: n,
        guildTemplate: i,
        onApiErrors: T,
        onEmailChange: N,
        onGotoLogin: P,
        onRegister: g,
    });
    return F
        ? (0, u.jsx)(l1, {
              tag: "section",
              className: B()(t, ni.Sy),
              children: () => [
                  U,
                  (0, u.jsxs)(
                      "div",
                      {
                          className: ni.Uu,
                          children: [(0, u.jsx)(w.hE, { className: ni.lR, children: Q.intl.string(Q.t.wC4TlR) }), V],
                      },
                      "register-title",
                  ),
              ],
          })
        : (0, u.jsxs)(w.Ay, {
              tag: "section",
              className: t,
              children: [
                  j
                      ? (0, u.jsx)("div", {
                            className: ni.AX,
                            children: (0, u.jsx)(M.$, {
                                onClick: P,
                                variant: "secondary",
                                text: Q.intl.string(Q.t["1MrpWO"]),
                                icon: n1.ChevronSmallLeftIcon,
                                iconPosition: "start",
                            }),
                        })
                      : null,
                  U,
                  V,
              ],
          });
}
(f.Ay.initialize(), f.Ay.initialize());
class iQ extends c.PureComponent {
    state = { error: null, continueOnWeb: !1, currentUser: null, sentVerification: !1, fetchingUser: !1 };
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        (e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, G.d0)("gift_code"));
    }
    componentDidUpdate(e) {
        let { authenticated: t, isResolved: n } = this.props;
        (n || this.resolveGiftCode(),
            t && !e.authenticated && this.handleAuthenticated(),
            !t && e.authenticated && this.setState({ currentUser: null }));
    }
    handleAuthenticated() {
        let { currentUser: e } = this.state;
        (lL.Yq(), null == e && this.refreshUser());
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
            { error: l } = this.state,
            i = null != l ? l.code : null;
        return i === L.t02.INVALID_GIFT_SELF_REDEMPTION
            ? Q.intl.string(Q.t.wa9h7F)
            : i === L.t02.INVALID_GIFT_REDEMPTION_OWNED && n?.productLine === L.EZt.COLLECTIBLES
              ? Q.intl.string(Q.t.mdLtb5)
              : null != t || i === L.t02.INVALID_GIFT_REDEMPTION_OWNED
                ? Q.intl.format(Q.t.PIdmg3, { libraryLink: L.BVt.APPLICATION_LIBRARY })
                : e.isClaimed || i === L.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? Q.intl.string(Q.t.ilcBeX)
                  : i === L.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
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
            (this.setState({ error: null }), await E.Ay.redeemGiftCode({ code: n }), e(L.BVt.APP));
        } catch (e) {
            this.setState({ error: e });
        }
    };
    resolveGiftCode = () => {
        let { transitionTo: e } = this.props,
            t = this.getCode();
        E.Ay.resolveGiftCode(t, !0, !0)
            .then((n) => {
                null != n && null != n.giftCode.promotion && e(L.BVt.BILLING_PROMOTION_REDEMPTION(t));
            })
            .catch(E.Ay.reportUnexpectedGiftCodeError);
    };
    renderSpinner(e) {
        return (0, u.jsxs)(w.Ay, { children: [(0, u.jsx)(w.hE, { children: e }), (0, u.jsx)(w.CK, {})] });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, u.jsxs)(w.Ay, {
            children: [
                (0, u.jsx)(w.hE, { className: B()(X.Ot, X.QB), children: Q.intl.string(Q.t.KPowgn) }),
                (0, u.jsx)(w.tK, { children: Q.intl.string(Q.t.j8734b) }),
                (0, u.jsx)("div", {
                    className: B()(X.eT, X.QB),
                    children: (0, u.jsx)(M.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, u.jsx)(ec.Q, {
                    text: Q.intl.string(Q.t["/CjuXF"]),
                    textVariant: "body-sm/normal",
                    onClick: () => window.open(nY.A.getArticleURL(L.MVz.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, u.jsxs)(w.Ay, {
            children: [
                (0, u.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.csrAMJ) }),
                (0, u.jsx)(w.tK, { children: Q.intl.string(Q.t["m1+IBn"]) }),
                (0, u.jsx)("div", {
                    className: X.eT,
                    children: (0, u.jsx)(M.$, {
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
        return (0, u.jsxs)(w.Ay, {
            children: [
                (0, u.jsx)(w._V, { src: n(792525), className: X.QB }),
                (0, u.jsx)(w.hE, { children: Q.intl.format(Q.t["ivLUf/"], { username: e.username }) }),
                (0, u.jsx)(w.tK, { className: X.QX, children: Q.intl.string(Q.t["8Su18+"]) }),
                (0, u.jsx)("div", {
                    className: X.eT,
                    children: (0, u.jsx)(M.$, {
                        text: t ? Q.intl.string(Q.t.CMa9Rv) : Q.intl.string(Q.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, u.jsx)("div", {
                    className: X.Ot,
                    children: (0, u.jsx)(ec.Q, {
                        text: Q.intl.string(Q.t.Po9eBQ),
                        textVariant: "body-sm/normal",
                        onClick: this.refreshUser,
                    }),
                }),
            ],
        });
    }
    renderAuthenticated(e, t, n) {
        let { transitionTo: l } = this.props,
            i = this.getErrorMessage(e);
        return (0, u.jsx)(iX, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: l,
            children: (0, u.jsxs)(w.Ay, {
                children: [
                    (0, u.jsx)(lQ, { giftCode: e }),
                    (0, u.jsx)("div", {
                        className: X.eT,
                        children: (0, u.jsx)(M.$, {
                            text: Q.intl.string(Q.t.n6I6k4),
                            fullWidth: !0,
                            disabled: null != i,
                            onClick: this.handleAccept,
                        }),
                    }),
                    null != i
                        ? (0, u.jsx)(w.tK, { className: X.QX, children: i })
                        : (0, u.jsx)(w.ME, {
                              className: X.QX,
                              children: Q.intl.format(Q.t.NYM08s, {
                                  userTag: ta.Ay.getUserTag(t),
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
                location: a,
            } = this.props,
            { fetchingUser: o, continueOnWeb: c } = this.state;
        if (e === L.fAW.OPEN && !c) return this.renderAppOpened();
        if (e === L.fAW.OPENING) return this.renderSpinner(Q.intl.string(Q.t["Z+hCVU"]));
        if (s) return this.renderSpinner(Q.intl.string(Q.t.bhJseN));
        if (null == l) return i ? this.renderExpiredInvite() : this.renderSpinner(Q.intl.string(Q.t.b3lf1c));
        if (i) {
            if (n) {
                let e = this.state.currentUser;
                return o || null == e
                    ? this.renderSpinner(Q.intl.string(Q.t.bYb2nS))
                    : this.requiresVerification && null != e
                      ? this.renderVerification(e)
                      : this.renderAuthenticated(l, e, t);
            }
            return "login" === this.getMode()
                ? (0, u.jsx)(iI, { giftCode: l, transitionTo: r, location: a })
                : (0, u.jsx)(iK, { giftCodeSKU: t, giftCode: l, transitionTo: r, location: a });
        }
        return null;
    }
}
let iq = f.Ay.connectStores([lo.A, lk.A, eY.default, lw.A, ed.A, lO.A], (e) => {
    let t = e.match.params.giftCode ?? "",
        n = lo.A.get(t),
        l = null != n ? lw.A.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: l,
        libraryApplication: null != l && n?.entitlementBranches != null ? lG.YI(n.entitlementBranches, l, lk.A) : null,
        authenticated: eY.default.isAuthenticated(),
        defaultRoute: ed.A.defaultRoute,
        isResolved: lo.A.getIsResolved(t),
        isAccepting: lo.A.getIsAccepting(t),
        libraryApplicationsFetched: lk.A.fetched,
        nativeAppState: lO.A.getState(t),
    };
})(iQ);
function iX(e) {
    let { sku: t, children: n, giftCodeCode: l, transitionTo: i } = e,
        s = (0, lD.bF)(t);
    return (c.useEffect(() => {
        null != l && s && i(L.BVt.APP_WITH_GIFT_CODE(l));
    }, [s, l, i]),
    s)
        ? (0, u.jsxs)(w.Ay, {
              children: [(0, u.jsx)(w.hE, { children: Q.intl.string(Q.t.b3lf1c) }), (0, u.jsx)(w.CK, {})],
          })
        : n;
}
var iz = n(584265),
    iY = n(833397),
    i$ = n(894778),
    iJ = n(315290),
    iZ = n(396574),
    i0 = n(838697);
f.Ay.initialize();
class i1 extends c.PureComponent {
    componentDidMount() {
        ((0, G.d0)("guildTemplate"),
            iZ.VP || e$.A.launch("discord://" + L.BVt.GUILD_TEMPLATE(this.props.code), () => void 0));
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && ey.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return iZ.VP
            ? (0, u.jsx)("div", { className: X.eT, children: (0, u.jsx)(M.$, { text: e, fullWidth: !0, onClick: t }) })
            : (0, u.jsx)(w.KE, { className: X.eT });
    }
    renderSpinner(e) {
        return (0, u.jsxs)(w.Ay, { children: [(0, u.jsx)(w.hE, { children: e }), (0, u.jsx)(w.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, u.jsxs)(w.Ay, {
            children: [
                (0, u.jsx)(w.hE, { className: B()(X.Ot, X.QB), children: Q.intl.string(Q.t.C7ZRNw) }),
                (0, u.jsx)(w.tK, { children: Q.intl.string(Q.t.A6MwXE) }),
                this.renderButton(Q.intl.string(Q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, u.jsxs)(w.Ay, {
            children: [
                (0, u.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.csrAMJ) }),
                (0, u.jsx)(w.tK, { children: Q.intl.string(Q.t["m1+IBn"]) }),
                this.renderButton(Q.intl.string(Q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (eW()(null != e, "guild template must not be null"), e.state === ic.QB.RESOLVING)
            ? (0, u.jsx)(w.Ay, { className: i0.sL, children: (0, u.jsx)(iY.A, { guildTemplate: e }) })
            : (0, u.jsx)(i2, { guildTemplate: e });
    }
    renderContinue() {
        return (0, u.jsxs)(w.Ay, {
            children: [
                (0, u.jsx)(w.hE, { children: Q.intl.string(Q.t.fOc4gn) }),
                this.renderButton(Q.intl.string(Q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: l, location: i } = this.props;
        if (null == e) return this.renderSpinner(Q.intl.string(Q.t.ZTNur7));
        if (t === L.fAW.OPEN) return this.renderAppOpened();
        if (t === L.fAW.OPENING) return this.renderSpinner(Q.intl.string(Q.t["Z+hCVU"]));
        switch (e.state) {
            case ic.QB.RESOLVING:
                return this.renderSpinner(Q.intl.string(Q.t["Z+hCVU"]));
            case ic.QB.RESOLVED:
                if (n || !iZ.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, u.jsx)(iI, { guildTemplate: e, transitionTo: l, location: i });
                return (0, u.jsx)(iK, {
                    guildTemplate: e,
                    transitionTo: l,
                    location: i,
                    onRegister: () => {
                        ((0, no.C)(nu.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            i$.A.flowStart(iJ.do.ORGANIC_GUILD_TEMPLATES, iJ.ju.NUF_STARTED));
                    },
                });
            case ic.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function i2(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: l } = (0, iz.A)(t, !1);
    i$.A.flowStep(iJ.do.ORGANIC_GUILD_TEMPLATES, iJ.jC.GUILD_CREATE);
    let i = (0, u.jsxs)(u.Fragment, {
        children: [
            (0, u.jsx)(w.hE, { className: i0.wx, children: Q.intl.string(Q.t.UNFvtM) }),
            n,
            (0, u.jsx)("div", {
                className: i0.Tf,
                children: (0, u.jsx)(M.$, { text: Q.intl.string(Q.t.xr59t7), fullWidth: !0, onClick: l }),
            }),
        ],
    });
    return (0, u.jsx)(l1, {
        className: i0.sL,
        children: () => [
            (0, u.jsx)(l2.A, { guildTemplate: t }, "template"),
            (0, u.jsx)("div", { className: i0.KJ, children: i }, "contents"),
        ],
    });
}
function i8(e, t, n) {
    (e.preventDefault(),
        b.default.track(L.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        }));
    let l = eY.default.getFingerprint(),
        i = null != l ? l : eY.default.getId();
    ey.A.openMobileApp(n.state === ic.QB.RESOLVED ? t : void 0, i);
}
function i4(e) {
    let { code: t } = e,
        n = (0, f.bG)([eT.A], () => eT.A.getGuildTemplate(t));
    return (c.useEffect(() => {
        (0, G.d0)("guild_template_mobile");
    }, []),
    null == n || n.state === ic.QB.RESOLVING)
        ? (0, u.jsx)(w.Ay, { children: (0, u.jsx)(eD.y, {}) })
        : n.state === ic.QB.RESOLVED
          ? (0, u.jsxs)(w.Ay, {
                children: [
                    (0, u.jsx)(iY.A, { guildTemplate: n, tall: !0 }),
                    (0, u.jsx)("div", {
                        className: X.QX,
                        children: (0, u.jsx)(M.$, {
                            text: Q.intl.string(Q.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => i8(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, u.jsx)(e5, {
                text: Q.intl.string(Q.t["e/rZ2n"]),
                buttonCta: Q.intl.string(Q.t.HAvYn0),
                onClick: (e) => i8(e, t, n),
            });
}
(f.Ay.initialize(), n(938796));
var i3 = n(821418),
    i5 = n(665260),
    i9 = n(362474),
    i7 = n(695366),
    i6 = n(964486),
    se = n(656),
    st = n(921037),
    sn = (((a = {}).IN_CONTENT = "in_content"), (a.BELOW_CONTENT = "below_content"), a);
let sl = (0, tN.mj)({
    name: "2026-09-silp-direct-to-discoverable",
    kind: "installation",
    defaultConfig: { placement: null },
    variations: { 0: { placement: null }, 1: { placement: "in_content" }, 2: { placement: "below_content" } },
});
var si = (((o = {}).IN_CONTENT = "in_content"), (o.BELOW_CONTENT = "below_content"), o);
let ss = (0, tN.mj)({
    name: "2026-09-silp-app-opened-direct-to-discoverable",
    kind: "installation",
    defaultConfig: { placement: null },
    variations: { 0: { placement: null }, 1: { placement: "in_content" }, 2: { placement: "below_content" } },
});
var sr = n(320448),
    sa = n(975807),
    so = n(818348),
    su = n(438865);
function sc(e) {
    let { inviteCode: t, guildId: n, className: l, belowContent: i = !1, location: s } = e;
    function r() {
        (b.default.track(
            L.HAw.INVITE_CTA_CLICKED,
            { action: "browse_other_servers", invite_code: t, guild_id: n, location: s },
            { flush: !0 },
        ),
            (0, sa.A)(so.Tk.DISCOVER));
    }
    return i
        ? (0, u.jsx)("div", {
              className: B()(l, su.B),
              children: (0, u.jsx)(M.$, {
                  text: Q.intl.string(Q.t["7itT3E"]),
                  onClick: r,
                  variant: "overlay-secondary",
                  icon: { type: "icon", asset: sr.ChevronSmallRightIcon },
                  iconPosition: "end",
                  size: "sm",
              }),
          })
        : (0, u.jsx)("div", {
              className: B()(l, X.Ot),
              children: (0, u.jsx)(M.$, {
                  text: Q.intl.string(Q.t["7itT3E"]),
                  onClick: r,
                  variant: "secondary",
                  fullWidth: !0,
              }),
          });
}
var sd = n(999527);
let sh = (0, tN.mj)({
    name: "2026-09-silp-desktop-app-upsell",
    kind: "user",
    defaultConfig: { label: null },
    variations: { 1: { label: "download_discord_app" }, 2: { label: "download_app" }, 3: { label: "get_discord" } },
});
var sm = n(930839),
    sg = n(53505);
f.Ay.initialize();
let sf = "register",
    sp = "login";
function sE(e) {
    let { message: t, onClick: n, invite: l, className: i, notice: s, secondaryAction: r } = e,
        a = l?.guild_scheduled_event != null,
        o = a ? "active" : "primary";
    return iZ.VP
        ? (0, u.jsx)("div", {
              className: i ?? (a ? X.QX : X.eT),
              children: (0, u.jsxs)(eO.B, {
                  gap: 8,
                  children: [
                      s,
                      null == r
                          ? (0, u.jsx)(M.$, { text: t, onClick: n, variant: o, fullWidth: !0 })
                          : (0, u.jsxs)(Y.e, {
                                fullWidth: !0,
                                children: [
                                    (0, u.jsx)(M.$, { text: t, onClick: n, variant: o }),
                                    (0, u.jsx)(M.$, { text: r.text, onClick: r.onClick, variant: "secondary" }),
                                ],
                            }),
                  ],
              }),
          })
        : (0, u.jsx)(w.KE, { className: i ?? X.eT });
}
function sA(e) {
    let t = tS("InviteAccept");
    return (0, u.jsx)(sE, { ...e, message: tb(t) });
}
function s_(e) {
    let { invite: t, inviteKey: n, handleAccept: l, handleDefaultTransition: i, expirationLocation: s } = e,
        r = (0, f.bG)([e6.A], () => (t.state === L.elq.ERROR ? e6.A.getInviteError(n) : void 0)),
        a = t.guild_scheduled_event,
        o = r?.code === L.t02.INVALID_CANNOT_FRIEND_SELF,
        d = iZ.VP && !o && ty(t),
        h = null == a ? (0, u.jsx)(sd.A, { invite: t, location: s }) : null,
        { label: m } = sh.useConfig({ location: "InviteAuthenticated" }),
        g = iZ.VP && !nG.isPlatformEmbedded && !o;
    g && sh.getConfig({ location: "InviteAuthenticated.eligible" });
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
                          window.open((0, sg.SU)(), "_blank"),
                          b.default.track(L.HAw.DOWNLOAD_APP, {
                              platform: (0, sg.Vf)(),
                              ptb: !1,
                              released: !0,
                              referring_location: "Invite Landing Page",
                              qr_code: !1,
                          }));
                  },
              }
            : void 0;
    return (
        c.useEffect(() => {
            sm.A.requestDrain();
        }, []),
        (0, u.jsxs)("div", {
            children: [
                (0, u.jsxs)(w.Ay, {
                    children: [
                        null != a
                            ? (0, u.jsx)(iU, { channel: t.channel, guildScheduledEvent: a })
                            : (0, u.jsx)(lJ.A, { invite: t }),
                        null != r &&
                            (0, u.jsx)("div", {
                                className: X.QX,
                                role: "alert",
                                children: (0, u.jsxs)(F.E, {
                                    variant: "body-sm/medium",
                                    color: "text-feedback-critical",
                                    style: { display: "flex", alignItems: "center", gap: 4 },
                                    children: [
                                        (0, u.jsx)(i7.CircleErrorIcon, {
                                            size: "custom",
                                            width: 14,
                                            height: 14,
                                            color: "currentColor",
                                        }),
                                        " ",
                                        (0, tZ.s)(r.code),
                                    ],
                                }),
                            }),
                        d
                            ? (0, u.jsx)(sA, {
                                  invite: t,
                                  onClick: l,
                                  className: null != r ? X.QX : void 0,
                                  notice: h,
                                  secondaryAction: p,
                              })
                            : (0, u.jsx)(sE, {
                                  invite: t,
                                  message: Q.intl.string(o ? Q.t.fIv16B : Q.t.ohMvm1),
                                  onClick: o ? i : l,
                                  className: null != r ? X.QX : void 0,
                                  notice: h,
                                  secondaryAction: p,
                              }),
                    ],
                }),
                null != a &&
                    null != t.guild &&
                    (0, u.jsx)(w.Ay, {
                        className: X.QX,
                        children: (0, u.jsx)(iF, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                    }),
            ],
        })
    );
}
function sx(e) {
    return iZ.VP
        ? (0, u.jsx)(sj, { ...e })
        : (0, u.jsxs)(w.Ay, {
              children: [(0, u.jsx)(lJ.A, { invite: e.invite }), (0, u.jsx)(w.KE, { className: X.eT })],
          });
}
function sj(e) {
    let { invite: t, inviteKey: n, rpcConnected: l, onContinue: i } = e,
        s = ss.useConfig({ location: "InviteAppOpened" }).placement;
    return (0, u.jsxs)(u.Fragment, {
        children: [
            (0, u.jsxs)(w.Ay, {
                children: [
                    (0, u.jsx)(lJ.A, { invite: t }),
                    (0, u.jsx)("div", {
                        className: X.QX,
                        children: (0, u.jsx)(M.$, {
                            text: Q.intl.string(Q.t.UQvCf7),
                            onClick: function () {
                                (b.default.track(L.HAw.INVITE_CTA_CLICKED, {
                                    action: "open_app",
                                    invite_code: t.code,
                                    guild_id: t.guild?.id,
                                }),
                                    l ? A.Ay.openNativeAppModal(n) : A.Ay.openApp(n));
                            },
                            variant: "primary",
                            fullWidth: !0,
                        }),
                    }),
                    (0, u.jsx)("div", {
                        className: X.Ot,
                        children:
                            s === si.IN_CONTENT
                                ? (0, u.jsx)(sc, {
                                      inviteCode: t.code,
                                      guildId: t.guild?.id,
                                      location: "InviteAppOpened",
                                  })
                                : (0, u.jsx)(M.$, {
                                      text: Q.intl.string(Q.t["2ixEBi"]),
                                      onClick: function () {
                                          (b.default.track(L.HAw.INVITE_CTA_CLICKED, {
                                              action: "continue_in_browser",
                                              invite_code: t.code,
                                              guild_id: t.guild?.id,
                                          }),
                                              i?.());
                                      },
                                      variant: "secondary",
                                      fullWidth: !0,
                                  }),
                    }),
                ],
            }),
            s === si.BELOW_CONTENT &&
                (0, u.jsx)(sc, {
                    inviteCode: t.code,
                    guildId: t.guild?.id,
                    className: X.QX,
                    belowContent: !0,
                    location: "InviteAppOpened",
                }),
        ],
    });
}
function sI(e) {
    let { title: t } = e;
    return (0, u.jsxs)(w.Ay, { children: [(0, u.jsx)(w.hE, { children: t }), (0, u.jsx)(w.CK, {})] });
}
function sC(e) {
    let { banned: t, invite: n, handleDefaultTransition: l } = e,
        i = sl.useConfig({ location: "InviteInvalid" }).placement;
    return (0, u.jsxs)(u.Fragment, {
        children: [
            (0, u.jsxs)(w.Ay, {
                children: [
                    (0, u.jsx)(w.hE, { className: B()(X.Ot, X.QB), children: Q.intl.string(Q.t.kux01N) }),
                    (0, u.jsx)(w.tK, { children: t ? Q.intl.string(Q.t["5AkWAd"]) : Q.intl.string(Q.t["+qUJAj"]) }),
                    (0, u.jsx)(sE, { message: Q.intl.string(Q.t.fIv16B), onClick: l }),
                    i === sn.IN_CONTENT &&
                        (0, u.jsx)(sc, { inviteCode: n.code, guildId: n.guild?.id, location: "ExpiredInvite" }),
                    (0, u.jsx)("div", {
                        className: X.Ot,
                        style: { textAlign: "left" },
                        children: (0, u.jsx)(ec.Q, {
                            size: "sm",
                            textVariant: "body-sm/medium",
                            text: Q.intl.string(Q.t.urIwn4),
                            onClick: () => window.open(nY.A.getArticleURL(L.MVz.INVALID_INVITES), "_blank"),
                        }),
                    }),
                ],
            }),
            i === sn.BELOW_CONTENT &&
                (0, u.jsx)(sc, {
                    inviteCode: n.code,
                    guildId: n.guild?.id,
                    className: X.QX,
                    belowContent: !0,
                    location: "ExpiredInvite",
                }),
        ],
    });
}
function sN(e) {
    let { handleDefaultTransition: t } = e;
    return (0, u.jsxs)(w.Ay, {
        children: [
            (0, u.jsx)(w.hE, { children: Q.intl.string(Q.t.fOc4gn) }),
            (0, u.jsx)(sE, { message: Q.intl.string(Q.t.fIv16B), onClick: t }),
        ],
    });
}
var sv = n(334465);
let sT = (0, n(600975).C)({
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
var sy = n(163050),
    sS = n(498206);
f.Ay.initialize();
var sb = n(701273);
function sR(e) {
    n.g.location.assign(e);
}
(f.Ay.initialize(), n(426620), f.Ay.initialize());
let sL = lI(iI),
    sO = lI(function (e) {
        let { transitionTo: t } = e,
            n = c.useCallback(
                (e) => {
                    let n;
                    ((n = (0, sv.B)(e, { path: L.BVt.CHANNEL(nH.pv.guildId(), nH.pv.channelId()) })),
                    +(n?.params?.channelId !== N.VV.ROLE_SUBSCRIPTIONS))
                        ? (t ?? eP.pX)(e)
                        : eP.bG(e);
                },
                [t],
            ),
            { isAuthenticated: l, loginStatus: i } = (0, f.cf)([eY.default], () => ({
                isAuthenticated: eY.default.isAuthenticated(),
                loginStatus: eY.default.getLoginStatus(),
            })),
            { location: s, redirectTo: r } = e,
            [a, o] = c.useState(l);
        function h(e) {
            let { handoffKey: t, handoffToken: n, handoffSource: l } = e;
            ((0, j.Qh)({ handoffKey: t, handoffToken: n, handoffSource: l }), o(!1));
        }
        return ((0, i6.Ay)(() => {
            if (null != s) {
                let { handoff_key: e, handoff_token: t } = (0, d.qg)(s.search);
                if (null != e && null != t) {
                    let n = null != r ? y(r) : void 0;
                    a
                        ? p.A.logout("handoff", null).finally(() => {
                              h({ handoffKey: e, handoffToken: t, handoffSource: n });
                          })
                        : h({ handoffKey: e, handoffToken: t, handoffSource: n });
                }
            }
        }),
        a || i === L.aUe.LOGGING_IN)
            ? (0, u.jsx)(w.Ay, { children: (0, u.jsx)(eD.y, {}) })
            : (0, u.jsx)(iI, { ...e, transitionTo: n });
    }),
    sD = lI(function (e) {
        let { inviteKey: t, location: n, transitionTo: l, login: i } = e,
            s = c.useMemo(() => (0, eJ.m0)(t), [t]),
            r = (0, f.bG)([e6.A], () => e6.A.getInvite(t)),
            a = (0, f.bG)([lO.A], () => lO.A.getState(s)),
            o = (0, f.bG)([eY.default], () => eY.default.isAuthenticated()),
            d = (0, f.bG)([ed.A], () => ed.A.defaultRoute),
            h = (0, f.bG)([iy], () => iy.isUnderageAnonymous()),
            m = (function (e) {
                let [t, n] = c.useState(!1);
                return (
                    c.useEffect(() => {
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
                let [t, n] = c.useState(!1);
                return (
                    c.useEffect(() => {
                        let e = setTimeout(() => n(!0), 500);
                        return () => clearTimeout(e);
                    }, []),
                    !e && !t
                );
            })(m),
            [p, E] = c.useState(!1);
        c.useLayoutEffect(() => {
            (a === L.fAW.OPEN || r?.state === L.elq.APP_OPENED) && E(!0);
        }, [r?.state, a]);
        let _ = i ? sp : sf,
            j = c.useCallback((e) => A.Ay.getInviteContext(e, r), [r]),
            I = c.useCallback(
                (e) => {
                    null != r &&
                        (null != r.channel || e?.channel != null) &&
                        (r.guild?.id != null
                            ? A.Ay.transitionToInviteOnboarding(e ?? r, { transitionTo: l })
                            : A.Ay.transitionToInvite(e ?? r, { transitionTo: l }));
                },
                [r, l],
            ),
            C = c.useCallback(() => {
                (b.default.track(L.HAw.INVITE_CTA_CLICKED, {
                    action: "accept_invite",
                    invite_code: r?.code,
                    guild_id: r?.guild?.id,
                }),
                    A.Ay.acceptInvite({
                        inviteKey: t,
                        context: j(L.S3d.INVITE),
                        skipOnboarding: !0,
                        callback: (e) => {
                            (ei(e), null != e.channel && (m ? I(e) : A.Ay.openApp(t, e.channel.id)));
                        },
                    }).catch((e) => {
                        (0, se.mX)(e?.code);
                    }));
            }, [t, j, r?.code, r?.guild?.id, m, I]),
            N = c.useCallback(() => {
                l(d);
            }, [d, l]);
        ((0, i6.Ay)(() => {
            let e = eY.default.getAnalyticsToken();
            if (
                (null != e
                    ? x.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eY.default.getId() })
                    : eY.default.isAuthenticated() && nq.rQ({ withAnalyticsToken: !0 }).catch(L.tEg),
                b.default.track(L.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }),
                (0, G.d0)("invite"),
                iZ.VP || e$.A.launch("discord://" + L.BVt.INVITE(t), () => void 0),
                !i && h)
            ) {
                let { baseCode: e } = (0, eJ.y$)(t);
                (0, eP.bG)(L.BVt.INVITE_LOGIN(e));
            }
        }),
            c.useEffect(() => {
                r?.state === L.elq.APP_NOT_OPENED && I();
            }, [r?.state, I]));
        let v = c.useRef(!1),
            T = c.useCallback((e) => {
                v.current = !0 === e;
            }, []);
        if (
            (!(function (e) {
                let {
                        invite: t,
                        inviteKey: n,
                        authenticated: l,
                        nativeAppState: i,
                        mode: s,
                        getAcceptInviteContext: r,
                        handleContinue: a,
                        transitionTo: o,
                        joinDeferredRef: u,
                    } = e,
                    d = (0, lX.Ay)(l),
                    h = (0, lX.Ay)(i);
                (c.useEffect(() => {
                    if (s === sp && l && !1 === d) {
                        let e = eY.default.getFingerprint();
                        if (null != e) {
                            let l = (0, ez.d)(e);
                            b.default.track(L.HAw.INVITE_LOGIN_SUCCESSFUL, {
                                invite_code: (0, eJ.m0)(n),
                                guild_id: t?.guild?.id,
                                channel_id: t?.channel?.id,
                                inviter_id: t?.inviter?.id,
                                prev_user_id: l,
                            });
                        }
                        A.Ay.acceptInvite({
                            inviteKey: n,
                            context: r(L.S3d.INVITE),
                            skipOnboarding: !0,
                            callback: a,
                        }).catch((e) => {
                            (0, se.mX)(e?.code);
                        });
                    }
                }, [l, d, s, r, a, t, n]),
                    c.useEffect(() => {
                        if (null != t && s === sf && l && !1 === d) {
                            let { channel: e } = t;
                            if (null != e)
                                if (((0, no.C)(nu.zY.INVITE_UNCLAIMED), null != t.guild)) {
                                    let e = (0, i5.Lt)(t.flags ?? 0, i3.Q.IS_APPLICATION_BYPASS),
                                        n =
                                            t.guild.features?.includes(
                                                L.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED,
                                            ) &&
                                            t.guild.features?.includes(
                                                L.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL,
                                            );
                                    u.current || e || !n
                                        ? A.Ay.transitionToInviteOnboarding(t, { transitionTo: o })
                                        : o(L.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id));
                                } else A.Ay.transitionToInvite(t, { transitionTo: o });
                        }
                    }, [t, l, d, o, s, n, u]),
                    c.useEffect(() => {
                        null == t ||
                            (i !== h &&
                                (i === L.fAW.OPEN
                                    ? b.default.track(
                                          L.HAw.INVITE_APP_INVOKED,
                                          {
                                              invite_code: (0, eJ.m0)(n),
                                              guild_id: t.guild?.id,
                                              channel_id: t.channel?.id,
                                              inviter_id: t.inviter?.id,
                                              user_is_member: null != t.guild && null != e7.A.getGuild(t.guild.id),
                                              size_total: t.approximate_member_count,
                                              invite_type: null != t.type ? tv.Xd[t.type] : void 0,
                                          },
                                          { flush: !0 },
                                      )
                                    : i === L.fAW.OPEN_FAIL &&
                                      b.default.track(L.HAw.INVITE_APP_INVOKE_FAILED, {
                                          invite_code: (0, eJ.m0)(n),
                                          reason: "rpc_failed",
                                          invite_type: null != t.type ? tv.Xd[t.type] : void 0,
                                      })));
                    }, [t, i, h, n]));
            })({
                invite: r,
                inviteKey: t,
                authenticated: o,
                nativeAppState: a,
                mode: _,
                getAcceptInviteContext: j,
                handleContinue: I,
                transitionTo: l,
                joinDeferredRef: v,
            }),
            null == r)
        )
            return null;
        let y = a === L.fAW.OPEN;
        if (p || y || r.state === L.elq.APP_OPENED)
            return (0, u.jsx)(sx, { invite: r, inviteKey: t, rpcConnected: y, onContinue: I });
        let { state: S } = r;
        if (S === L.elq.APP_NOT_OPENED) return (0, u.jsx)(sN, { handleDefaultTransition: N });
        if ([L.elq.RESOLVING, L.elq.ACCEPTING, L.elq.APP_OPENING].includes(S)) {
            let e =
                S === L.elq.ACCEPTING ? Q.intl.string(Q.t["6wsY16"]) : (L.elq.RESOLVING, Q.intl.string(Q.t["Z+hCVU"]));
            return (0, u.jsx)(sI, { title: e });
        }
        if (S === L.elq.EXPIRED) return (0, u.jsx)(sC, { banned: !1, invite: r, handleDefaultTransition: N });
        if (S === L.elq.BANNED) return (0, u.jsx)(sC, { banned: !0, invite: r, handleDefaultTransition: N });
        if (S === L.elq.RESOLVED) {
            if (o && (0, i5.Lt)(r.flags ?? 0, i3.Q.IS_GUEST_INVITE))
                return (
                    A.Ay.openApp(t),
                    i9.u.set(st.B, t),
                    (0, u.jsx)(sx, { invite: r, inviteKey: t, rpcConnected: y, onContinue: () => l(L.BVt.APP) })
                );
            if (null != r.type && tv.uR.has(r.type) && g)
                return (0, u.jsx)(sI, { title: Q.intl.string(Q.t["Z+hCVU"]) });
            if (!o && iZ.VP)
                return _ === sp
                    ? (0, u.jsx)(iI, { invite: r, transitionTo: l, location: n })
                    : (0, u.jsx)(iK, {
                          invite: r,
                          onLoginStart: function () {
                              b.default.track(L.HAw.INVITE_LOGIN, {
                                  invite_code: r?.code,
                                  guild_id: r?.guild?.id,
                                  channel_id: r?.channel?.id,
                                  inviter_id: r?.inviter?.id,
                              });
                          },
                          onRegister: T,
                          location: n,
                          transitionTo: l,
                      });
        }
        return S === L.elq.RESOLVED || S === L.elq.ERROR
            ? (0, u.jsx)(s_, {
                  invite: r,
                  inviteKey: t,
                  handleAccept: C,
                  handleDefaultTransition: N,
                  expirationLocation: o ? "InvitePage" : void 0,
              })
            : null;
    }),
    sk = lI(function (e) {
        let t = {
            guildTemplate: (0, f.bG)([eT.A], () => eT.A.getGuildTemplate(e.code)),
            nativeAppState: (0, f.bG)([lO.A], () => lO.A.getState(e.code)),
            authenticated: (0, f.bG)([eY.default], () => eY.default.isAuthenticated()),
            defaultRoute: (0, f.bG)([ed.A], () => ed.A.defaultRoute),
        };
        return (0, u.jsx)(i1, { ...e, ...t });
    }),
    sw = lI(iq),
    sG = lI(function (e) {
        let { inviteKey: t, transitionTo: n } = e,
            l = (0, f.bG)([e6.A], () => e6.A.getInvite(t));
        return (
            c.useEffect(() => {
                let e = eY.default.getAnalyticsToken();
                (null != e &&
                    x.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eY.default.getId() }),
                    (0, G.d0)("invite_mobile"),
                    b.default.track(L.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }));
            }, []),
            (0, u.jsx)(nk, {
                invite: l,
                onAcceptInvite: function (e) {
                    nT(e, t, l);
                },
                onOpenAppAfterRegistration: function (e) {
                    nT(e, t, l, { didRegister: !0 });
                },
                transitionTo: n,
            })
        );
    }),
    sP = lI(iK),
    sU = lI(function (e) {
        let { location: t, transitionTo: l = eP.pX } = e,
            [i, s] = c.useState("submitting");
        function r() {
            return eQ().os?.family === "Android" || eQ().os?.family === "iOS"
                ? null
                : (0, u.jsx)(M.$, {
                      text: Q.intl.string(Q.t.dKhVQN),
                      fullWidth: !0,
                      onClick: () => l(L.BVt.LOGIN, { source: "authorizeIPAdress" }),
                  });
        }
        if (
            ((0, i6.Ay)(() => {
                (0, G.d0)("authorize_ip");
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
            "failed" === i)
        )
            return (0, u.jsxs)(w.Ay, {
                children: [
                    (0, u.jsx)("img", { alt: "", src: n(792009), className: X.SX }),
                    (0, u.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t["f/54az"]) }),
                    (0, u.jsx)(w.tK, { className: X.C2, children: Q.intl.string(Q.t.i3ehMr) }),
                    r(),
                ],
            });
        if ("succeeded" === i) {
            let e = r();
            return (0, u.jsxs)(w.Ay, {
                contentClassName: sS.oe,
                children: [
                    (0, u.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.iG0SlK) }),
                    (0, u.jsxs)(eO.B, {
                        gap: 40,
                        children: [(0, u.jsx)(w.tK, { children: Q.intl.string(Q.t["Elv+qt"]) }), e],
                    }),
                ],
            });
        }
        return (0, u.jsxs)(w.Ay, {
            children: [(0, u.jsx)(w.CK, {}), (0, u.jsx)(w.hE, { children: Q.intl.string(Q.t["9exy+V"]) })],
        });
    }),
    sB = lI(function (e) {
        let { location: t } = e,
            [l, i] = c.useState("submitting");
        return (c.useEffect(() => {
            (0, G.d0)("authorize_payment");
            let e = (0, em.A)(t);
            null == e
                ? i("failed")
                : (async function () {
                      if (null != e)
                          try {
                              (await p.A.authorizePayment(e), i("succeeded"));
                          } catch (e) {
                              i("failed");
                          }
                  })();
        }, [t]),
        "failed" === l)
            ? (0, u.jsxs)(w.Ay, {
                  children: [
                      (0, u.jsx)("img", { alt: "", src: n(678985), className: X.SX }),
                      (0, u.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.GHRpue) }),
                      (0, u.jsx)(w.tK, { className: X.C2, children: Q.intl.string(Q.t["1nO55v"]) }),
                  ],
              })
            : "succeeded" === l
              ? (0, u.jsxs)(w.Ay, {
                    children: [
                        (0, u.jsx)("img", { alt: "", src: n(586430), className: X.SX }),
                        (0, u.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.ihHX53) }),
                        (0, u.jsx)(w.tK, { className: X.C2, children: Q.intl.string(Q.t["pGPCv+"]) }),
                    ],
                })
              : (0, u.jsxs)(w.Ay, {
                    children: [(0, u.jsx)(w.CK, {}), (0, u.jsx)(w.hE, { children: Q.intl.string(Q.t.T3vC7n) })],
                });
    }),
    sF = lI(function (e) {
        let { location: t, transitionTo: n = sR } = e,
            [l, i] = c.useState("submitting"),
            s = c.useRef(void 0);
        (0, i6.Ay)(() => {
            (0, G.d0)("verify_email");
            let e = (0, em.A)(t);
            null == e
                ? i("failed")
                : (async function () {
                      if (null != e)
                          try {
                              let t = await p.A.verify(e);
                              (i("succeeded"), (s.current = t));
                          } catch (e) {
                              i("failed");
                          }
                  })();
        });
        let r = c.useCallback(() => {
                n(L.BVt.LOGIN, { source: "verify_email" });
            }, [n]),
            a = c.useCallback(() => {
                (b.default.track(L.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: s.current }),
                    (0, sb.A)("verify_email"));
            }, []);
        return "failed" === l
            ? (0, u.jsx)(eG, {
                  title: Q.intl.string(Q.t["PCgG3+"]),
                  subtitle: Q.intl.string(Q.t.tQpeA3),
                  buttonText: Q.intl.string(Q.t.dKhVQN),
                  onButtonClick: r,
              })
            : "succeeded" === l
              ? (0, u.jsx)(eG, {
                    title: Q.intl.string(Q.t["dAfGb+"]),
                    buttonText: Q.intl.string(Q.t["uJWIj/"]),
                    onButtonClick: a,
                    image: (0, u.jsx)(eR, { alt: Q.intl.string(Q.t["dAfGb+"]) }),
                })
              : (0, u.jsx)(eG, {
                    title: Q.intl.string(Q.t["0c8+5n"]),
                    subtitle: Q.intl.string(Q.t.ULTCBE),
                    loading: !0,
                });
    }),
    sM = lI(function () {
        let [e, t] = c.useState(""),
            [l, i] = c.useState(""),
            [s, r] = c.useState(!1),
            [a, o] = c.useState(!1),
            [d, h] = c.useState(null),
            [m, g] = c.useState(null),
            p = (0, f.bG)([e_.A], () => e_.A.getCountryCode()),
            E = p.code.split(" ")[0],
            A = (0, u.jsxs)(w.Ay, {
                children: [
                    (0, u.jsx)(w._V, { src: n(142041) }),
                    (0, u.jsxs)(w.hE, {
                        className: B()(X.QX, ej.Uu, ej.wq, ej.Hu),
                        children: [
                            Q.intl.string(Q.t.WWzQta),
                            (0, u.jsx)(ep.CircleCheckIcon, { size: "md", color: "currentColor", className: X.oY }),
                        ],
                    }),
                ],
            });
        return a
            ? A
            : (0, u.jsxs)(w.Ay, {
                  children: [
                      (0, u.jsx)(w.hE, { children: Q.intl.string(Q.t.o4JNrO) }),
                      (0, u.jsx)(w.tK, { className: X.Ot, children: Q.intl.string(Q.t.y0tVbq) }),
                      (0, u.jsxs)(w.eB, {
                          className: X.QX,
                          children: [
                              (0, u.jsx)(ex.A, {
                                  label: Q.intl.string(Q.t["eJnn0+"]),
                                  alpha2: p.alpha2,
                                  countryCode: E,
                                  value: e,
                                  autoComplete: "off",
                                  spellCheck: "false",
                                  onChange: t,
                                  forceMode: eA.Pd.PHONE,
                                  error: d,
                              }),
                              (0, u.jsx)(w.pd, {
                                  className: X.QX,
                                  label: Q.intl.string(Q.t.OdzNbm),
                                  value: l,
                                  onChange: i,
                                  maxLength: 6,
                                  error: m,
                              }),
                              (0, u.jsx)(ec.Q, {
                                  text: Q.intl.string(Q.t["5b60gi"]),
                                  onClick: async function () {
                                      try {
                                          await eE.A.resendCode(e);
                                      } catch (e) {
                                          g(e.body.message);
                                      }
                                  },
                              }),
                              (0, u.jsx)("div", {
                                  className: X.QX,
                                  children: (0, u.jsx)(M.$, {
                                      text: Q.intl.string(Q.t.i4jeWR),
                                      fullWidth: !0,
                                      onClick: async function () {
                                          r(!0);
                                          try {
                                              let { token: t } = await eE.A.verifyPhone(E + e, l);
                                              (h(null), g(null), o(!0), eE.A.validatePhoneForSupport(t));
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
    sV = lI(sy.A),
    sH = lI(lR),
    sW = lI(ef),
    sK = lI(function (e) {
        let { location: t } = e,
            [n, l] = c.useState(!1),
            { verifySuccess: i, verifyErrors: s, redirectGuildId: r } = (0, f.bG)([eV], () => eV.getState());
        function a() {
            let e, t;
            ((e = (function (e) {
                let t = eQ().os?.family;
                if ("Android" === t || "iOS" === t) {
                    let t = eY.default.getFingerprint(),
                        n = (0, eX.I_)();
                    return (
                        eW()(null != e, "generateAppPath: guildId cannot be null"),
                        (0, eX.Ay)((0, eq.jN)(e), { utmSource: "verify_hub_email", fingerprint: t, attemptId: n })
                    );
                }
                return "discord://";
            })(r)),
                null != (t = (0, eX.X7)(e)) &&
                    b.default.track(L.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, ez.v)(t.fingerprint),
                        attempt_id: t.attemptId,
                        source: t.utmSource,
                    }),
                e$.A.launch(e, (e) => {
                    e || (0, eP.bG)(ed.A.fallbackRoute);
                }),
                l(!0));
        }
        return (c.useEffect(() => {
            let e = (0, em.A)(t);
            (eL.A.verify(e), (0, G.d0)("verify_hub_email"));
        }, [t]),
        n)
            ? (0, u.jsx)(eG, {
                  title: Q.intl.string(Q.t.csrAMJ),
                  subtitle: Q.intl.string(Q.t["m1+IBn"]),
                  buttonText: Q.intl.string(Q.t.fIv16B),
                  onButtonClick: () => (0, eP.pX)(L.BVt.CHANNEL(r)),
              })
            : i
              ? (0, u.jsx)(eG, {
                    title: Q.intl.string(Q.t["dAfGb+"]),
                    buttonText: Q.intl.string(Q.t["uJWIj/"]),
                    onButtonClick: a,
                    image: (0, u.jsx)(eR, { alt: Q.intl.string(Q.t["dAfGb+"]) }),
                })
              : null != s
                ? (0, u.jsx)(eG, {
                      title: Q.intl.string(Q.t["PCgG3+"]),
                      subtitle: Q.intl.string(Q.t.tQpeA3),
                      buttonText: Q.intl.string(Q.t["uJWIj/"]),
                      onButtonClick: a,
                  })
                : (0, u.jsx)(eG, {
                      title: Q.intl.string(Q.t["0c8+5n"]),
                      subtitle: Q.intl.string(Q.t.ULTCBE),
                      loading: !0,
                  });
    }),
    sQ = lI(function (e) {
        let { match: t, location: n } = e;
        return (0, u.jsx)(ly, {
            match: t,
            location: n,
            attemptDeepLink: async function (e, t) {
                await (0, lN.W)(nM.XK.CHANNEL, {
                    guildId: e.params.guildId,
                    channelId: e.params.channelId,
                    messageId: e.params.messageId,
                    search: t.search,
                });
            },
        });
    }),
    sq = lI(function (e) {
        let { match: t, location: n } = e;
        return (0, u.jsx)(ly, {
            match: t,
            location: n,
            attemptDeepLink: async function (e) {
                await (0, lN.W)(nM.XK.GAME_SHOP, {
                    guildId: e.params.guildId,
                    pageIndex: e.params.pageIndex,
                    skuId: e.params.skuId,
                    slug: e.params.slug,
                });
            },
        });
    }),
    sX = lI(function (e) {
        let { match: t, location: n } = e;
        return (0, u.jsx)(ly, {
            match: t,
            location: n,
            attemptDeepLink: async function (e, t) {
                await (0, lN.W)(nM.XK.PICK_GUILD_SETTINGS, {
                    section: e.params.section,
                    subsection: e.params.subsection,
                    search: t.search,
                });
            },
        });
    }),
    sz = lI(function (e) {
        let { location: t } = e,
            n = (0, f.bG)([eY.default], () => eY.default.isAuthenticated()),
            l = (0, f.bG)([eN.A], () => eN.A.hasLoadedExperiments),
            i = sT.useExperiment({ location: "RSL - Landing Page" }, { autoTrackExposure: !0 }).enabled,
            [s, r] = c.useState(!1),
            [a, o] = c.useState(Q.intl.string(Q.t["9exy+V"])),
            [d, h] = c.useState(!0);
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
            c.useEffect(() => {
                n
                    ? (h(!0),
                      nq
                          .rQ({ withAnalyticsToken: !0 })
                          .then(() => h(!1))
                          .catch(() => h(!1)))
                    : h(!1);
            }, [n]),
            c.useEffect(() => {
                l || i || p.A.getExperiments();
            }, [l, i]),
            c.useEffect(() => {
                (r(!0),
                    (async function (e) {
                        try {
                            let t = null != e ? await (0, nz.q)(e) : void 0;
                            null != t ? o(Q.intl.string(Q.t.e6mZMt)) : m(t.body?.code);
                        } catch (e) {
                            m(e.body?.code);
                        } finally {
                            r(!1);
                        }
                    })((0, em.A)(t)),
                    (0, G.d0)("report_second_look"));
            }, [t]),
            i &&
                !d &&
                (0, u.jsxs)(w.Ay, {
                    children: [(0, u.jsx)(w.hE, { className: X.QB, children: a }), s && (0, u.jsx)(eD.y, {})],
                })
        );
    }),
    sY = lI(en),
    s$ = lI(function (e) {
        let { match: t, location: l } = e,
            i = (0, d.qg)(l.search).token,
            [s, r] = c.useState("loading"),
            a = c.useRef(!1),
            o = c.useCallback(async (e) => {
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
            h = c.useCallback((e) => {
                let t = eY.default.getFingerprint() ?? eY.default.getId(),
                    n = `discord://login/one-time?token=${encodeURIComponent(e)}`;
                e$.A.launch(n, (e) => {
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
            g = c.useCallback(
                (e) => {
                    let t = eY.default.getFingerprint() ?? eY.default.getId(),
                        l = eY.default.getInstallationForTracking();
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((n) => {
                            let { default: i } = n;
                            i.request(L.e$_.DEEP_LINK, {
                                type: nM.XK.ONE_TIME_LOGIN,
                                params: { token: e, fingerprint: t, installationId: l },
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
                                .then(() => i.disconnect());
                        });
                },
                [h],
            );
        if (
            (c.useEffect(() => {
                let e = null != i && "string" == typeof i,
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
                (0, nG.xl)() ? o(i) : a.current || ((a.current = !0), r("rpc_attempting"), g(i));
            }, [i, l, o, g]),
            m.Fr || m.v1)
        ) {
            let e = null == i || "string" != typeof i ? "missing_token" : "invalid_token";
            return (0, u.jsx)(nF, { token: i, hasError: "error" === s, errorReason: e });
        }
        if ((0, eP.MX)()) return null;
        if ("app_launched" === s)
            return (0, u.jsx)(nV, {
                title: Q.intl.string(Q.t.RvUUOy),
                subtitle: Q.intl.string(Q.t["5/lR0g"]),
                buttonText: Q.intl.string(Q.t["2ixEBi"]),
                buttonOnClick: () => {
                    (b.default.track(L.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: s }), o(i));
                },
            });
        if ("app_launch_not_supported" === s)
            return (0, u.jsx)(nV, {
                title: Q.intl.string(Q.t.qq4tjT),
                subtitle: Q.intl.string(Q.t.CVxYRo),
                buttonText: Q.intl.string(Q.t["2ixEBi"]),
                buttonOnClick: () => o(i),
            });
        if ("error" === s) {
            let e = null == i || "string" != typeof i ? "missing_token" : "invalid_token";
            return (0, u.jsx)(nV, {
                title: Q.intl.string(Q.t.RtCSr1),
                subtitle: Q.intl.string(Q.t["S+YjYJ"]),
                buttonText: Q.intl.string(Q.t.j3cG2p),
                buttonOnClick: () => {
                    (b.default.track(L.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                        (0, eP.pX)(L.BVt.LOGIN));
                },
            });
        }
        return (0, u.jsx)(w.Ay, { children: (0, u.jsx)(w.CK, {}) });
    });
class sJ extends c.PureComponent {
    state = { splash: null, redirectTo: null, backgroundId: null };
    hasTriggeredInviteResolve = !1;
    experimentFallbackTimeout = null;
    static getDerivedStateFromProps(e, t) {
        let { invite: n, location: l } = e,
            { backgroundId: i } = t,
            s = (0, d.qg)(l.search).redirect_to ?? null;
        (null == s || "" === s || s.startsWith(L.BVt.ME) || (!(0, g.e)(s) && !eu(s))) && (s = null);
        let r = null;
        if (null == n) r = (0, lc.u8)(s);
        else {
            let { guild: e, target_application: t } = n;
            null != t
                ? null != i && (r = (0, lu.uD)(t.id, i, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (r = te.Ay.getGuildSplashURL({ id: e.id, splash: e.splash }));
        }
        return { redirectTo: s, splash: r };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        (null != e &&
            (!t && n && p.A.getExperiments(!0),
            null != eY.default.getInstallationForTracking() && (0, ev.fetchInstallationExperiments)(null),
            b.default.track(
                L.HAw.INVITE_OPENED,
                { invite_code: (0, eJ.m0)(e), load_time: lh.getTimeSinceNavigationStart() },
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
        if (e?.state === L.elq.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, lu.RG)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await A.Ay.resolveInvite(e, L.S3d.INVITE, {
            withGames: !0,
            withGuildExperiments: m.Fr || m.v1,
        });
        if (null != t && (ei(t), null != t.type && tv.uR.has(t.type))) {
            if ("denied" === (await eC()))
                return void b.default.track(L.HAw.INVITE_APP_INVOKE_FAILED, {
                    invite_code: (0, eJ.m0)(e),
                    reason: "lna_denied",
                    invite_type: tv.Xd[t.type],
                });
            A.Ay.openNativeAppModal(e);
        }
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (b.default.track(
                L.HAw.GUILD_TEMPLATE_OPENED,
                { guild_template_code: e, load_time: lh.getTimeSinceNavigationStart() },
                { flush: !0 },
            ),
            ey.A.resolveGuildTemplate(e),
            ey.A.openNativeAppModal(e));
    }
    resolveGiftCode() {
        let { giftCode: e } = this.props;
        null != e &&
            E.Ay.resolveGiftCode(e, !0, !0)
                .then((t) => {
                    null != t && null == t.giftCode.promotion && E.Ay.openNativeGiftCodeModal(e);
                })
                .catch(E.Ay.reportUnexpectedGiftCodeError);
    }
    render() {
        let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
        return (0, u.jsxs)(lC.A, {
            splash: e,
            children: [
                (0, u.jsx)(el.A, { path: L.BVt.LOGIN_HANDOFF, render: (e) => (0, u.jsx)(sO, { ...e, redirectTo: t }) }),
                (0, u.jsx)(el.A, { path: L.BVt.LOGIN_ONE_TIME, render: (e) => (0, u.jsx)(s$, { ...e }) }),
                (0, u.jsx)(el.A, {
                    impressionName: h.ImpressionNames.USER_LOGIN,
                    path: L.BVt.LOGIN,
                    render: (e) => (0, u.jsx)(sL, { ...e, redirectTo: t }),
                }),
                (0, u.jsx)(el.A, {
                    impressionName: h.ImpressionNames.USER_REGISTRATION,
                    path: L.BVt.REGISTER,
                    render: (e) => (0, u.jsx)(sP, { ...e, redirectTo: t }),
                }),
                (0, u.jsx)(el.A, {
                    path: L.BVt.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, u.jsx)(sw, { login: !0, ...e, transitionTo: e.transitionTo ?? eP.pX }),
                }),
                (0, u.jsx)(el.A, {
                    path: L.BVt.GIFT_CODE(":giftCode"),
                    render: (e) => (0, u.jsx)(sw, { ...e, transitionTo: e.transitionTo ?? eP.pX }),
                }),
                (0, u.jsx)(el.A, {
                    path: [L.BVt.INVITE_LOGIN(":inviteCode"), L.BVt.INVITE(":inviteCode")],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n,
                                },
                                location: l,
                                transitionTo: i = eP.pX,
                            } = e,
                            s = (0, eJ.fB)(t ?? "", l.search);
                        return m.Fr || m.v1
                            ? (0, u.jsx)(sG, { inviteKey: s, transitionTo: i }, s)
                            : (0, u.jsx)(
                                  sD,
                                  {
                                      inviteKey: s,
                                      location: l,
                                      transitionTo: i,
                                      login: n === L.BVt.INVITE_LOGIN(":inviteCode"),
                                  },
                                  s,
                              );
                    },
                }),
                (0, u.jsx)(el.A, {
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
                            location: l,
                            transitionTo: i = eP.pX,
                        } = e;
                        return m.Fr || m.v1
                            ? (0, u.jsx)(i4, { code: t }, t)
                            : (0, u.jsx)(sk, {
                                  code: t ?? "",
                                  location: l,
                                  transitionTo: i,
                                  login: n === L.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, u.jsx)(el.A, { path: L.BVt.VERIFY, render: (e) => (0, u.jsx)(sF, { ...e }) }),
                (0, u.jsx)(el.A, { path: L.BVt.VERIFY_HUB_EMAIL, render: (e) => (0, u.jsx)(sK, { ...e }) }),
                (0, u.jsx)(el.A, { path: L.BVt.VERIFY_REQUEST, render: (e) => (0, u.jsx)(sM, { ...e }) }),
                (0, u.jsx)(el.A, { path: L.BVt.DISABLE_EMAIL_NOTIFICATIONS, render: (e) => (0, u.jsx)(sH, { ...e }) }),
                (0, u.jsx)(el.A, {
                    path: L.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, u.jsx)(sW, { ...e }),
                }),
                (0, u.jsx)(el.A, { path: L.BVt.AUTHORIZE_IP, render: (e) => (0, u.jsx)(sU, { ...e }) }),
                (0, u.jsx)(el.A, {
                    path: L.BVt.REJECT_IP,
                    render: (e) => (0, u.jsx)(sV, { source: L.BVt.REJECT_IP, ...e }),
                }),
                (0, u.jsx)(el.A, {
                    path: L.BVt.REJECT_MFA,
                    render: (e) => (0, u.jsx)(sV, { source: L.BVt.REJECT_MFA, ...e }),
                }),
                (0, u.jsx)(el.A, { path: L.BVt.AUTHORIZE_PAYMENT, render: (e) => (0, u.jsx)(sB, { ...e }) }),
                (0, u.jsx)(el.A, { path: L.BVt.RESET, render: (e) => (0, u.jsx)(sV, { source: L.BVt.RESET, ...e }) }),
                (0, u.jsx)(el.A, {
                    path: L.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, u.jsx)(sX, { ...e }),
                }),
                (0, u.jsx)(el.A, {
                    path: L.BVt.CHANNELS_GAME_SHOP(nH.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, u.jsx)(sq, { ...e }),
                }),
                (0, u.jsx)(el.A, {
                    path: L.BVt.CHANNEL(nH.pv.guildId(), nH.pv.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, u.jsx)(sQ, { ...e }),
                }),
                (0, u.jsx)(el.A, { path: L.BVt.REPORT, render: () => (0, u.jsx)(la, {}) }),
                (0, u.jsx)(el.A, { path: L.BVt.REPORT_SECOND_LOOK, render: (e) => (0, u.jsx)(sz, { ...e }) }),
                (0, u.jsx)(el.A, {
                    path: L.BVt.ACCOUNT_REVERT(":token"),
                    render: (e) => (0, u.jsx)(sY, { ...e, transitionTo: e.transitionTo ?? eP.pX }),
                }),
            ],
        });
    }
}
let sZ = f.Ay.connectStores([eY.default, e6.A, lo.A, eN.A, eT.A], (e) => {
    let { match: t, location: n } = e,
        l = t?.params?.inviteCode,
        i = null != l ? (0, eJ.fB)(l, n.search) : void 0,
        s = t?.params?.giftCode,
        r = t?.params?.guildTemplateCode;
    return {
        inviteKey: i,
        isAuthenticated: eY.default.isAuthenticated(),
        giftCode: s,
        guildTemplateCode: r,
        gift: null != s ? lo.A.get(s) : null,
        invite: null != i ? e6.A.getInvite(i) : null,
        guildTemplate: null != r ? eT.A.getGuildTemplate(r) : null,
        hasLoadedExperiments: eN.A.hasLoadedExperiments,
    };
})(sJ);
