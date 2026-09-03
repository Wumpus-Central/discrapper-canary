n.r(t), n.d(t, { default: () => ry });
var i,
    l,
    s,
    r,
    a,
    o = n(477900),
    c = n(582128),
    u = n(492462),
    d = n(562708),
    h = n(607399),
    m = n(470562),
    g = n(17928),
    f = n(228366),
    x = n(830215),
    p = n(869038),
    A = n(376728),
    E = n(636537),
    _ = n(6981),
    j = n(376943),
    v = n(718446),
    N = n(746080),
    C = n(355097),
    I =
        (((i = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (i.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        i);
function y(e) {
    let t = decodeURIComponent(e),
        n = (0, j.vu)(t);
    return null != n && n.channelId === N.VV.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t.toLowerCase() === (0, v.settingsPathToRoute)(C.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)
          ? "role_subscription_setting"
          : void 0;
}
var b = n(115036),
    S = n(174459),
    T = n(272355),
    R = n(652215);
function L(e, t) {
    S.default.track(R.HAw.BROWSER_HANDOFF_SUCCEEDED, { authenticated: e, handoff_source: t });
}
class O extends T.A {
    _initialize() {
        f.h.subscribe("BROWSER_HANDOFF_END", this.handleEnd),
            f.h.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
    }
    _terminate() {
        f.h.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd),
            f.h.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: i, handoffSource: l } = e;
        null != n
            ? E.Bo.post({ url: R.Rsh.HANDOFF_EXCHANGE, body: { key: t, handoff_token: n }, rejectWithError: !1 }).then(
                  (e) => {
                      let { body: t } = e;
                      (0, _.uA)(t.user), x.A.loginToken(t.token, !1), L(!0, l);
                  },
                  (e) => {
                      null != i && L(!1, l),
                          x.A.setFingerprint(i),
                          (0, _.mZ)(),
                          l === I.ROLE_SUBSCRIPTION &&
                              S.default.track(R.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: e.message ?? e.text,
                                  handoff_source: l,
                              });
                  },
              )
            : null != i
              ? (x.A.setFingerprint(i), L(!1, l), (0, _.mZ)())
              : (x.A.setFingerprint(i), (0, _.J0)());
    }
    handleEnd = (e) => {
        let { handoffToken: t, fingerprint: n } = e,
            i = b.A.key;
        null != i && b.A.isHandoffAvailable()
            ? this.handleHandoff({ handoffKey: i, handoffToken: t, fingerprint: n, handoffSource: void 0 })
            : (x.A.setFingerprint(null), (0, _.J0)());
    };
}
let k = new O();
var w = n(854378),
    D = n(976860),
    G = n(210714),
    P = n(430690),
    U = n(503698),
    B = n.n(U),
    F = n(834730),
    V = n(821609),
    M = n(181658),
    H = n(625494),
    W = n(499785),
    z = (((l = {}).START = "start"), (l.PASSWORD = "password"), (l.SUCCESS = "success"), (l.FAILED = "failed"), l),
    Q = n(375708),
    K = n(652989),
    X = n(221851);
function q(e) {
    let { setOriginalEmail: t, setSlide: i, ready: l, token: s } = e,
        [r, a] = c.useState(!1),
        [u, h] = c.useState(null),
        [m, g] = c.useState(null),
        [f, x] = c.useState(""),
        p = c.useRef(null);
    return (
        c.useEffect(() => {
            l && p.current?.focus();
        }, [l]),
        (0, o.jsxs)("div", {
            children: [
                (0, o.jsx)(w._V, { src: null == m ? n(79418) : n(579656), className: B()(X.SX, X.Ot) }),
                (0, o.jsx)(w.hE, { children: Q.intl.string(Q.t.IfBQ56) }),
                null != m && "" !== m
                    ? (0, o.jsx)(F.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: m })
                    : null,
                (0, o.jsxs)(w.eB, {
                    className: B()(X.SX, X.QX),
                    children: [
                        (0, o.jsx)(w.pd, {
                            name: "password",
                            type: "password",
                            label: Q.intl.string(Q.t["8dM4FO"]),
                            setRef: p,
                            className: X.SX,
                            value: f,
                            onChange: x,
                            error: u,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: Q.intl.string(Q.t["yY/PXY"]),
                        }),
                        (0, o.jsx)("div", {
                            className: X.Ot,
                            children: (0, o.jsx)(V.$, {
                                text: Q.intl.string(Q.t.ezv91b),
                                fullWidth: !0,
                                onClick: function () {
                                    if (!r) {
                                        if (0 === f.length) {
                                            h(Q.intl.string(Q.t.R98xD5)), H._.dispatch(R.jej.WAVE_EMPHASIZE);
                                            return;
                                        }
                                        return (
                                            null != m && g(null),
                                            null != u && h(null),
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
                                                    x(""), t(n), i(z.SUCCESS);
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        g(
                                                            Q.intl.formatToPlainString(Q.t.aTVNes, {
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
                    className: K.UD,
                    children: (0, o.jsx)(V.$, {
                        text: Q.intl.string(Q.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: function () {
                            x(""), i(z.START);
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
        className: K.Aw,
        children: (0, o.jsx)(F.E, { variant: "text-sm/medium", color: "text-default", children: t }),
    });
}
function J(e) {
    let { setSlide: t, transitionTo: i } = e;
    return (0, o.jsxs)("div", {
        children: [
            (0, o.jsx)(w._V, { src: n(79418), className: B()(X.SX, X.Ot) }),
            (0, o.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t["8UcxI6"]) }),
            (0, o.jsx)(F.E, { variant: "text-md/normal", children: Q.intl.string(Q.t.O37hMl) }),
            (0, o.jsxs)(w.eB, {
                className: B()(X.SX, X.QX),
                children: [
                    (0, o.jsx)(F.E, { variant: "text-sm/normal" }),
                    (0, o.jsxs)("ul", {
                        className: K.qI,
                        children: [
                            (0, o.jsx)(Z, { children: Q.intl.string(Q.t.Gj1Zry) }),
                            (0, o.jsx)($.A, {}),
                            (0, o.jsx)(Z, { children: Q.intl.string(Q.t["8C6t3B"]) }),
                            (0, o.jsx)($.A, {}),
                            (0, o.jsx)(Z, { children: Q.intl.string(Q.t.mToZMA) }),
                            (0, o.jsx)($.A, {}),
                            (0, o.jsx)(Z, { children: Q.intl.string(Q.t.TPEvkc) }),
                            (0, o.jsx)($.A, {}),
                            (0, o.jsx)(Z, { children: Q.intl.string(Q.t.H8Y1Ln) }),
                        ],
                    }),
                ],
            }),
            (0, o.jsxs)(Y.e, {
                direction: "vertical",
                fullWidth: !0,
                className: K.UD,
                children: [
                    (0, o.jsx)(V.$, { text: Q.intl.string(Q.t.GgCRqR), onClick: () => t(z.PASSWORD) }),
                    (0, o.jsx)(V.$, {
                        text: Q.intl.string(Q.t["B/yHcQ"]),
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
            (0, o.jsx)(w._V, { src: n(79418), className: B()(X.SX, X.Ot) }),
            (0, o.jsx)(w.hE, { children: Q.intl.string(Q.t.ailkVG) }),
            (0, o.jsx)(w.tK, { children: Q.intl.format(Q.t["4ZMVCI"], { email: t }) }),
            (0, o.jsx)(F.E, {
                className: B()(X.QB, X.QX),
                variant: "text-md/normal",
                children: Q.intl.string(Q.t["dpAn+8"]),
            }),
        ],
    });
}
function et(e) {
    let { transitionTo: t, token: n, width: i } = e,
        [l, s] = c.useState(z.START),
        [r, a] = c.useState(null),
        [u, h] = c.useState(""),
        m = { impression_group: d.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, o.jsx)("div", {
        style: { margin: "8px" },
        children: (0, o.jsxs)(P.t, {
            activeSlide: l,
            width: i,
            onSlideReady: a,
            children: [
                (0, o.jsx)(P.q, {
                    id: z.START,
                    impressionProperties: m,
                    impressionName: d.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, o.jsx)(J, { setSlide: s, transitionTo: t }),
                }),
                (0, o.jsx)(P.q, {
                    id: z.PASSWORD,
                    impressionProperties: m,
                    impressionName: d.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, o.jsx)(q, {
                        setOriginalEmail: h,
                        setSlide: s,
                        transitionTo: t,
                        ready: r === z.PASSWORD,
                        token: n,
                    }),
                }),
                (0, o.jsx)(P.q, {
                    id: z.SUCCESS,
                    impressionProperties: m,
                    impressionName: d.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, o.jsx)(ee, { email: u }),
                }),
            ],
        }),
    });
}
g.Ay.initialize();
class en extends c.PureComponent {
    static defaultProps = { transitionTo: D.pX, replaceWith: D.bG };
    componentDidMount() {
        (0, G.d0)("account_revert");
    }
    render() {
        let { token: e } = this.props.match.params;
        return (0, o.jsx)(w.Ay, {
            style: { padding: 0 },
            children: (0, o.jsx)(et, { width: 464, token: e, ...this.props }),
        });
    }
}
var ei = n(549711);
function el(e) {
    f.h.dispatch({ type: "AUTH_INVITE_UPDATE", invite: e });
}
n(323874), n(14289), n(35956);
var es = n(132500),
    er = n(941426);
let ea = [window.GLOBAL_ENV.ADS_MANAGER_ENDPOINT].filter(Boolean);
function eo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = new URL(e, t);
    return "127.0.0.1" === n.hostname && (n.hostname = "localhost"), n.href;
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
        return new er.Vy("Auth").error("Failed to check external redirect", e), !1;
    }
}
async function eu(e) {
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
class ef extends c.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, guild: null };
    componentDidMount() {
        let e = (0, eg.A)(this.props.location),
            t = (0, u.parse)(this.props.location.search);
        E.Bo.post({
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
            (0, G.d0)("disable_server_highlight_notifications");
    }
    renderBusy() {
        return (0, o.jsx)(w.Ay, { children: (0, o.jsx)(w.CK, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, o.jsxs)(w.Ay, {
            children: [
                (0, o.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.Z33eiP) }),
                (0, o.jsx)(w.tK, { children: Q.intl.format(Q.t.NRWtfC, { guildName: n.name }) }),
                (0, o.jsx)("div", {
                    className: X.eT,
                    children: (0, o.jsx)(V.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, o.jsx)("div", {
                    className: X.Ot,
                    children: (0, o.jsx)(ed.Q, {
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
        return (0, o.jsxs)(w.Ay, {
            children: [
                (0, o.jsx)(w._V, { src: n(37772), className: X.SX }),
                (0, o.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.ox9hIS) }),
                (0, o.jsx)(w.tK, { children: Q.intl.string(Q.t["/dcuR5"]) }),
                (0, o.jsx)("div", {
                    className: X.eT,
                    children: (0, o.jsx)(V.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let ex = g.Ay.connectStores([eh.A], () => ({ defaultRoute: eh.A.defaultRoute }))(ef);
var ep = n(628284),
    eA = n(557722),
    eE = n(628387),
    e_ = n(148864),
    ej = n(354948);
n(53516);
var ev = n(938442);
let eN = ["loopback-network", "local-network-access"];
async function eC() {
    if ("u" < typeof navigator || null == navigator.permissions) return "unknown";
    for (let e of eN)
        try {
            return (await navigator.permissions.query({ name: e })).state;
        } catch {}
    return "unknown";
}
var eI = n(736056),
    ey = n(620233),
    eb = n(122906),
    eS = n(121623),
    eT = n(31008);
function eR(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s = 288, height: r = 162 } = e;
    return (0, o.jsx)("img", {
        style: { width: s, height: r },
        src: eT.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var eL = n(154672),
    eO = n(331322),
    ek = n(297264),
    ew = n(289873),
    eD = n(47084);
function eG(e) {
    let { title: t, subtitle: n, buttonText: i, image: l, onButtonClick: s, loading: r } = e;
    return (0, o.jsx)(w.Ay, {
        className: eD.kL,
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
                                        className: eD.Sl,
                                        children: l,
                                    }),
                                r && (0, o.jsx)(ew.y, { type: ew.y.Type.SPINNING_CIRCLE }),
                                (0, o.jsx)(ek.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, o.jsx)(F.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                className: eD.VA,
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
    eB = null;
class eF extends g.Ay.Store {
    static displayName = "HubEmailVerificationStore";
    getState() {
        return { verifySuccess: eP, verifyErrors: eU, redirectGuildId: eB };
    }
}
let eV = new eF(f.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        (eP = !0), (eU = null), (eB = t);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        (eP = !1), (eU = t);
    },
});
var eM = n(284009),
    eH = n.n(eM),
    eW = n(481613),
    ez = n.n(eW),
    eQ = n(400253),
    eK = n(742821),
    eX = n(80703),
    eq = n(280450),
    eY = n(877062);
g.Ay.initialize();
var e$ = n(842241),
    eZ = n(950372),
    eJ = n(280513),
    e0 = n(717421),
    e1 = n(661531),
    e2 = n(993077),
    e4 = n(235986),
    e8 = n(408738);
function e5(e) {
    let { text: t, buttonCta: i, onClick: l } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(w._V, { src: n(431979) }),
            (0, o.jsx)(w.hE, { className: B()(X.QX, X.QB, ev.tR), children: Q.intl.string(Q.t.eL5z0i) }),
            (0, o.jsx)(w.tK, { className: X.C2, children: Q.intl.string(Q.t.poAv63) }),
            (0, o.jsxs)(e2.Z, {
                className: e8.Nr,
                type: e2.Z.Types.CUSTOM,
                children: [
                    (0, o.jsx)("img", { alt: "", className: e8.q8, src: n(355912) }),
                    (0, o.jsx)("img", { alt: "", className: e8.dw, src: n(610925) }),
                    (0, o.jsxs)(e4.A, {
                        className: e8.p_,
                        direction: e4.A.Direction.VERTICAL,
                        align: e4.A.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, o.jsx)(F.E, {
                                tag: "strong",
                                className: e8.p8,
                                variant: "text-md/normal",
                                style: { color: e1.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, o.jsx)("div", {
                                className: e8.x6,
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
    return (0, o.jsx)(w.Ay, { theme: i, children: (0, o.jsx)(e5, { text: t, buttonCta: n, onClick: l }) });
}
var e6 = n(765671),
    e3 = n(9994),
    e9 = n(71393),
    te = n(299091),
    tt = n(486020),
    tn = n(403362),
    ti = n(778712),
    tl = n(47167),
    ts = n(769015),
    tr = n(714991),
    ta = n(427262),
    to = n(172799),
    tc = n(330936),
    tu = n(622625);
function td(e) {
    let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
    return 0 === t.memberCount ? null : t;
}
function th(e) {
    return e.target_type === to.yV.STREAM && null != e.target_user;
}
function tm(e) {
    return e.channel?.type === R.rbe.GROUP_DM;
}
function tg(e) {
    return null == e.channel && null == e.guild && null != e.inviter;
}
function tf(e) {
    return e.state === R.elq.ACCEPTED;
}
function tx(e) {
    let { guild_scheduled_event: t } = e;
    return null != t;
}
function tp(e) {
    let t;
    return !tx(e) && (!!tg(e) || (null != e.inviter && !tf(e) && ((t = td(e)), !((t?.memberCount ?? 0) > 100))));
}
function tA(e) {
    let { guild: t, user: n, application: i } = e;
    return null != i
        ? (0, o.jsx)(ts.A, { className: tu.Z2, game: i, size: tu.q6 })
        : null != n
          ? (0, o.jsx)(w.eu, { src: n.getAvatarURL(void 0, 100), size: ti._3.DEPRECATED_SIZE_100, className: tu.my })
          : null != t
            ? (0, o.jsx)(w.$v, { guild: t, size: w.$v.Sizes.LARGER, className: tu.$f, animate: !0 })
            : null;
}
function tE(e) {
    let { invite: t, textClassName: n, className: i } = e,
        l = td(t);
    return null == l || tp(t) || t?.guild?.id === tc.TA
        ? null
        : (0, o.jsx)(w.R1, {
              className: B()(tu.He, i),
              online: l.onlineCount,
              total: l.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function t_(e) {
    let { invite: t, showBigUserIcon: n } = e,
        i = c.useMemo(
            () =>
                n
                    ? null
                    : th(t) && null != t.target_user
                      ? tt.Ay.getUserAvatarURL(t.target_user)
                      : tp(t) && null != t.inviter
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
                : tp(t) &&
                  null != t.inviter &&
                  (l = Q.intl.format(Q.t.spU2mI, { username: ta.Ay.getFormattedName(t.inviter) })),
        (0, o.jsxs)("div", {
            className: tu.JB,
            children: [
                null != i &&
                    (0, o.jsx)("div", {
                        className: tu._t,
                        children: (0, o.jsx)(w.eu, { src: i, size: ti._3.SIZE_24 }),
                    }),
                (0, o.jsx)(w.tK, { className: tu.__invalid_inviteJoinSubTitle, children: l }),
            ],
        })
    );
}
function tj(e) {
    let t,
        n,
        i,
        { user: l, guild: s, channel: r, application: a, showBigUserIcon: c } = e,
        u = (0, tl.Ay)(r);
    if (null != s)
        c && null == a && (t = (0, o.jsx)(w.$v, { guild: s, size: w.$v.Sizes.SMALL })),
            (n = s.name),
            null != a &&
                ((n = a.name),
                (i = (0, o.jsxs)("div", {
                    className: tu.JB,
                    children: [
                        (0, o.jsx)(w.tK, { className: tu.R9, children: Q.intl.string(Q.t["3gg9fF"]) }),
                        (0, o.jsxs)("div", {
                            className: tu.bo,
                            children: [
                                (0, o.jsx)(w.$v, { guild: s, size: w.$v.Sizes.SMALL }),
                                (0, o.jsx)(ek.D, {
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
        let e = ta.Ay.getFormattedName(l);
        null != u && "" !== u
            ? ((n = u), null != r.icon && (t = (0, o.jsx)(w.F4, { channel: r, size: ti._3.SIZE_32 })))
            : (n = e);
    } else if (null != l) {
        let e = ta.Ay.getFormattedName(l);
        (n = Q.intl.formatToPlainString(Q.t["4aF92R"], { username: e })),
            (i = (0, o.jsx)(w.tK, { className: tu.b$, children: Q.intl.format(Q.t.Quj7HX, { username: e }) }));
    }
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)(w.hE, {
                className: tu.DD,
                children: [
                    null != s ? (0, o.jsx)(tr.A, { guild: s, className: tu.n2, tooltipPosition: "left" }) : null,
                    t,
                    n,
                ],
            }),
            i,
        ],
    });
}
var tv = n(395671),
    tN = n(95701),
    tC = n(889227),
    tI = n(548118),
    ty = n(557582),
    tb = n(167630),
    tS = n(424547);
function tT(e) {
    let { guildScheduledEvent: t, channel: n, onAcceptInvite: i, isSubmitting: l } = e;
    return (0, o.jsxs)("div", {
        className: tS.s4,
        children: [
            (0, o.jsx)(ty.Ay, {
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
                    children: (0, o.jsx)(tb.A, { guildScheduledEvent: t, channel: n }),
                }),
            (0, o.jsx)("div", {
                className: tS.xG,
                children: (0, o.jsx)(V.$, {
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
function tR(e) {
    let { invite: t } = e,
        n = null != t.guild ? (0, em.DY)(t.guild) : null;
    if (null == n) return null;
    let i = n.description ?? "";
    return (0, o.jsxs)("div", {
        className: tS.kQ,
        children: [
            (0, o.jsx)(ek.D, { className: tS.s7, variant: "text-sm/medium", children: Q.intl.string(Q.t.Eabu1z) }),
            (0, o.jsxs)("div", {
                className: tS.bo,
                children: [
                    (0, o.jsx)(tI.Ay, { guild: n, active: !0, size: tI.Ay.Sizes.MEDIUM }),
                    (0, o.jsxs)("div", {
                        className: tS.bW,
                        children: [
                            (0, o.jsxs)(F.E, {
                                className: tS.J5,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, o.jsx)(tr.A, { guild: n, className: tS.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, o.jsx)(tE, { invite: t, textClassName: tS.kS, className: tS.pe }),
                        ],
                    }),
                ],
            }),
            i.length > 0 &&
                (0, o.jsx)("details", {
                    className: tS.x_,
                    children: (0, o.jsx)(F.E, { color: "text-default", variant: "text-sm/normal", children: i }),
                }),
        ],
    });
}
function tL(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: l } = e,
        { guild_scheduled_event: s } = t;
    return null != s
        ? (0, o.jsx)(tT, { guildScheduledEvent: s, channel: n, isSubmitting: i, onAcceptInvite: l })
        : null;
}
var tO = n(578564);
function tk(e) {
    let { invite: t, onAcceptInvite: n, disableUser: i = !1 } = e;
    if (null == t) return null;
    let l = null != t.guild ? (0, em.DY)(t.guild) : null,
        s = null != t.channel ? (0, tN.OY)(t.channel) : null,
        r = null != t.target_application ? new tv.Ay(t.target_application) : null,
        a = i || null == t.inviter ? null : new tC.A(t.inviter),
        c =
            !(
                (null != t.approximate_member_count && t.approximate_member_count > 100) ||
                (null != l && l.features.has(R.GuildFeatures.COMMUNITY))
            ) &&
            null != a &&
            tm(t),
        u = (function (e) {
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
    return tx(t)
        ? (0, o.jsx)(tL, { invite: t, channel: s, isSubmitting: u, onAcceptInvite: n })
        : (0, o.jsxs)("div", {
              className: tO.kL,
              children: [
                  (0, o.jsx)(tA, { application: r, guild: l, user: c || tg(t) ? a : null }),
                  tg(t) ? null : (0, o.jsx)(t_, { ...d, showBigUserIcon: c }),
                  (0, o.jsx)(tj, { ...d, showBigUserIcon: c }),
                  (0, o.jsx)(tE, { ...d }),
                  (0, o.jsx)("div", {
                      className: tO.xG,
                      children: (0, o.jsx)(V.$, {
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
var tw = n(43990),
    tD = n(241524),
    tG = n(573435),
    tP = n(260509),
    tU = n(370953);
function tB(e) {
    let { guild: t, outline: n } = e,
        i = (0, tD.A)("(max-width: 600px), (max-height: 600px)") ? tI.DN.LARGER : tI.DN.XLARGE,
        l = tI.iu[i],
        s = tI.s[i],
        r = c.useMemo(() => tt.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: l }), [t.icon, t.id, l]),
        a = (0, tP.Rb)(t),
        u =
            null != r
                ? (0, o.jsx)("img", { src: r, alt: "", className: tU.OV })
                : (0, o.jsx)("div", {
                      className: tU.ef,
                      style: { fontSize: s[a.length] ?? s[s.length - 1] },
                      children: a,
                  });
    return n
        ? (0, o.jsx)("div", {
              className: B()(tU._C, tU.AY),
              children: (0, o.jsx)(tG.Ay, {
                  mask: tG.Ay.Masks.SQUIRCLE,
                  width: l + 8,
                  height: l + 8,
                  children: (0, o.jsx)("div", {
                      className: tU.$d,
                      children: (0, o.jsx)(tG.Ay, { mask: tG.Ay.Masks.SQUIRCLE, width: l, height: l, children: u }),
                  }),
              }),
          })
        : (0, o.jsx)("div", {
              className: tU._C,
              children: (0, o.jsx)(tG.Ay, { mask: tG.Ay.Masks.SQUIRCLE, width: l, height: l, children: u }),
          });
}
var tF = n(927813);
let tV = /\.$/;
function tM(e) {
    return Array.isArray(e)
        ? e
              .map((e) => e.replace(tV, ""))
              .join(". ")
              .trim()
        : e;
}
function tH(e) {
    let [t, n] = c.useState(() => null != e && !e),
        [i, l] = c.useState(e);
    return null == i && null != e ? (l(e), n(!e)) : i !== e && l(e), [t, n];
}
function tW() {
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
                null != n.current && clearTimeout(n.current),
                    t(!0),
                    (n.current = setTimeout(() => {
                        t(!1), (n.current = null);
                    }, e * tF.A.Millis.SECOND));
            }, []),
        ]
    );
}
var tz = n(153488),
    tQ = n(95477),
    tK = n(866665),
    tX = n(913122),
    tq = n(934337),
    tY = n(15552),
    t$ = n(536637),
    tZ = n.n(t$),
    tJ = n(955437),
    t0 = n(888548);
n(861807);
var t1 = n(569717),
    t2 = n(204925);
function t4(e) {
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
        promoEmailConsent: h = null,
        usedUsernameSuggestion: m = null,
    } = e;
    if ((f.h.dispatch({ type: "REGISTER" }), null != o)) {
        let e;
        (0, t1.A)(o, R.JJy.REGISTER),
            S.default.track(R.HAw.AGE_GATE_ACTION, { source: t2.w_.REGISTER, action: t2.AM.AGE_GATE_SUBMITTED }),
            (e = tZ()().diff(o, "years")) < 13 ||
                S.default.track(R.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                });
    }
    return W.A.post({
        url: R.Rsh.REGISTER,
        body: {
            fingerprint: eq.default.getFingerprint(),
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
            promotional_email_opt_in: h?.checked,
        },
        trackedActionData: {
            event: d.NetworkActionNames.USER_REGISTER,
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
            f.h.dispatch({ type: "REGISTER_SUCCESS", token: e.body.token }),
                f.h.dispatch({
                    type: "GUARDIAN_CONNECT_REQUIRED",
                    shouldShowGuardianConnect: !0 === e.body.show_guardian_connect,
                }),
                S.default.track(R.HAw.AGE_GATE_ACTION, { source: t2.w_.REGISTER, action: t2.AM.AGE_GATE_SUCCESS });
        },
        (e) => {
            if (e instanceof t0.CaptchaCancelError) throw e;
            let t = new M.A(e);
            throw (
                (null != t.getFieldErrors("date_of_birth") && tJ.Xv(t2.w_.REGISTER),
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
var t8 = n(568385),
    t5 = n(975639);
function t7(e) {
    let { consent: t, consentRequired: n, onConsentChange: i } = e;
    return n
        ? (0, o.jsx)("div", {
              className: t5.IQ,
              children: (0, o.jsx)(t8.J, {
                  label: Q.intl.format(Q.t.qMDAP0, { termsURL: R.X7G.TERMS, privacyURL: R.X7G.PRIVACY }),
                  checked: t,
                  onChange: i,
                  labelType: "secondary",
              }),
          })
        : (0, o.jsx)(F.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: B()(X.Ot, t5.E2),
              children: Q.intl.format(Q.t["KI+BSb"], { termsURL: R.X7G.TERMS, privacyURL: R.X7G.PRIVACY }),
          });
}
function t6() {
    let { required: e, checked: t } = (0, tq.mZ)();
    return e
        ? (0, o.jsx)("div", {
              className: X.Ot,
              children: (0, o.jsx)(t8.J, {
                  label: Q.intl.string(Q.t["0p3R0+"]),
                  checked: t,
                  onChange: tq.Bw,
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
            apiErrors: u,
            onEmailChange: d,
            onPasswordChange: h,
            onConsentChange: m,
            onApiErrors: g,
            onOpenApp: f,
            onRegister: x,
        } = e,
        [p, A] = c.useState(!1),
        [E, _] = tW(),
        j = null != a && r,
        v = c.useRef(null),
        N = c.useRef(null);
    function C(e) {
        S.default.track(R.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function I(e) {
        S.default.track(R.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    c.useEffect(() => {
        v.current?.focus();
    }, []);
    let y = l.length > 0 && s.length > 0,
        b = c.useCallback(async () => {
            let e = tq.mZ.getState();
            A(!0), g({});
            try {
                await t4({
                    email: l,
                    username: n,
                    consent: r,
                    password: s,
                    invite: t.code,
                    birthday: i,
                    promoEmailConsent: e.required ? e : null,
                }),
                    x();
            } catch (t) {
                if ((A(!1), !(t instanceof tX.LG))) return;
                let e = (0, tY.W)(t);
                g(e),
                    null != e.email || null != e.phone ? v.current?.focus() : null != e.password && N.current?.focus(),
                    "number" == typeof e.retry_after && _(e.retry_after);
            }
        }, [t, l, n, s, i, r, g, x, _]),
        T = c.useCallback(
            (e) => {
                e.preventDefault(), null != a && y && b();
            },
            [a, y, b],
        ),
        { message: L } = u;
    return (0, o.jsxs)("form", {
        onSubmit: T,
        children: [
            (0, o.jsx)("div", {
                className: X.SX,
                children: (0, o.jsx)(tQ.k, {
                    label: Q.intl.string(Q.t.dI4d4S),
                    name: "email",
                    value: l,
                    onChange: d,
                    error: tM(u.email),
                    type: "email",
                    autoComplete: "username",
                    inputRef: v,
                    onFocus: () => C("email"),
                    onBlur: () => I("email"),
                }),
            }),
            (0, o.jsx)(tQ.k, {
                label: Q.intl.string(Q.t["CIGa+7"]),
                name: "password",
                value: s,
                onChange: h,
                error: tM(u.password),
                type: "password",
                autoComplete: "new-password",
                inputRef: N,
                onFocus: () => C("password"),
                onBlur: () => I("password"),
            }),
            (0, o.jsx)(t6, {}),
            (0, o.jsx)(t7, { consent: r, consentRequired: a, onConsentChange: m }),
            (0, o.jsx)(tK.m, {
                text: !r && a ? Q.intl.string(Q.t.AY4IVA) : null,
                children: (0, o.jsx)("div", {
                    className: X.QX,
                    children: (0, o.jsx)(V.$, {
                        text: Q.intl.string(Q.t["825cFy"]),
                        variant: "primary",
                        fullWidth: !0,
                        type: "submit",
                        loading: p,
                        disabled: !j || E || !y,
                    }),
                }),
            }),
            "string" == typeof L ? (0, o.jsx)(w.ME, { className: B()(X.QX, t5.gJ), children: L }) : null,
            (0, o.jsx)("div", {
                className: t3.o3,
                children: (0, o.jsx)(ed.Q, {
                    text: Q.intl.string(Q.t.renMUD),
                    textVariant: "text-sm/normal",
                    onClick: f,
                }),
            }),
        ],
    });
}
function ne(e) {
    let { guild: t } = e,
        n =
            tt.Ay.getGuildBannerURL(t) ??
            (null != t.splash ? tt.Ay.getGuildSplashURL({ id: t.id, splash: t.splash, size: 640 }) : null);
    return (0, o.jsx)("div", { className: t3.ZK, style: null != n ? { backgroundImage: `url(${n})` } : void 0 });
}
function nt(e) {
    let { invite: t, kicker: n } = e,
        i = null != t.guild ? (0, em.DY)(t.guild) : null;
    return null == i
        ? null
        : (0, o.jsxs)("header", {
              children: [
                  (0, o.jsx)(ne, { guild: i }),
                  (0, o.jsxs)("div", {
                      className: t3.lu,
                      children: [
                          (0, o.jsx)("div", { className: t3.LJ, children: (0, o.jsx)(tB, { guild: i, outline: !0 }) }),
                          (0, o.jsx)(F.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: n ?? Q.intl.string(Q.t["3rE1P8"]),
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
                                  (0, o.jsx)(tr.A, { guild: i, tooltipPosition: "left" }),
                              ],
                          }),
                          (0, o.jsx)(tE, { invite: t }),
                      ],
                  }),
                  (0, o.jsx)("div", { className: t3.yF }),
              ],
          });
}
var nn = n(201505);
n(801541);
var ni = n(889137),
    nl = n(546727),
    ns = n(5052),
    nr = n(446837);
let na = window.ResizeObserver ?? nr.t;
function no(e) {
    let { show: t, children: n, top: i = 0, bottom: l = 0 } = e,
        { ref: s, height: r } = (function () {
            let e = c.useRef(null),
                [t, n] = c.useState(0),
                i = c.useMemo(
                    () =>
                        new na((e) => {
                            let [t] = e;
                            return n(t.contentRect.height);
                        }),
                    [],
                );
            return (
                c.useLayoutEffect(() => (null != e.current && i.observe(e.current), () => i.disconnect()), [i]),
                { ref: e, height: t }
            );
        })(),
        a = (0, e0.z)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: { height: t ? r : 0, paddingBottom: t ? `${l}px` : "0px", marginTop: t ? `${i}px` : "0px" },
            config: { tension: 170, friction: 26 },
        }),
        u = (0, e0.z)({
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
        children: (0, o.jsx)(eZ.animated.div, { style: { opacity: u.opacity }, ref: s, children: n }),
    });
}
function nc(e) {
    let t,
        { username: n, suggestion: i, globalName: l, isUsernameFocused: s, onClickSuggestion: r } = e,
        a = (0, ns.i)(n, !0, !0),
        c = n.length > 0;
    return (
        (t = c
            ? (0, ni.YW)(a)
                  .with({ type: nl.q.ERROR, message: ni.P.select() }, (e) =>
                      (0, o.jsx)(F.E, { className: t5.vU, variant: "text-sm/normal", children: e }),
                  )
                  .with({ type: nl.q.AVAILABLE, message: ni.P.select() }, (e) =>
                      (0, o.jsx)(F.E, { className: t5.vq, variant: "text-sm/normal", children: e }),
                  )
                  .otherwise(() =>
                      (0, o.jsx)(F.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: Q.intl.string(Q.t.z7c4bP),
                      }),
                  )
            : null != i && i.length > 0 && l.length > 0
              ? (0, o.jsx)(F.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: Q.intl.format(Q.t.nDGqqq, { suggestion: i, nameOnClick: r }),
                })
              : (0, o.jsx)(F.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: Q.intl.string(Q.t.z7c4bP),
                })),
        (0, o.jsx)(no, { show: (c && a?.type === nl.q.ERROR) || s, top: -12, bottom: 20, children: t })
    );
}
function nu(e) {
    let {
            username: t,
            parsedDateOfBirth: n,
            apiErrors: i,
            onUsernameChange: l,
            onDateOfBirthChange: s,
            onNext: r,
            onOpenApp: a,
        } = e,
        [u, d] = c.useState(!1),
        h = c.useRef(null);
    function m(e) {
        S.default.track(R.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function g(e) {
        S.default.track(R.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    c.useEffect(() => {
        null != i.username && h.current?.focus();
    }, []);
    let f = t.length > 0 && null != n;
    return (0, o.jsxs)("form", {
        onSubmit: function (e) {
            e.preventDefault(), f && r();
        },
        children: [
            (0, o.jsxs)("div", {
                onBlur: () => d(!1),
                onFocus: () => d(!0),
                tabIndex: -1,
                children: [
                    (0, o.jsx)("div", {
                        className: X.SX,
                        children: (0, o.jsx)(tQ.k, {
                            label: Q.intl.string(Q.t.TWzdWj),
                            name: "username",
                            value: t,
                            onChange: (e) => l(e.toLocaleLowerCase()),
                            error: tM(i.username),
                            autoComplete: "off",
                            inputRef: h,
                            onFocus: () => m("username"),
                            onBlur: () => g("username"),
                        }),
                    }),
                    (0, o.jsx)(nc, {
                        username: t,
                        suggestion: null,
                        globalName: "",
                        isUsernameFocused: u,
                        onClickSuggestion: () => {},
                    }),
                ],
            }),
            (0, o.jsx)(nn.A, {
                label: Q.intl.string(Q.t.rhBeKe),
                name: "date_of_birth",
                onChange: s,
                error: tM(i.date_of_birth),
                value: n,
                onFocus: m,
                onBlur: g,
            }),
            (0, o.jsx)("div", {
                className: X.QX,
                children: (0, o.jsx)(V.$, {
                    text: Q.intl.string(Q.t.PDTjLN),
                    variant: "primary",
                    fullWidth: !0,
                    type: "submit",
                    disabled: !f,
                }),
            }),
            (0, o.jsx)("div", {
                className: t3.o3,
                children: (0, o.jsx)(ed.Q, {
                    text: Q.intl.string(Q.t.renMUD),
                    textVariant: "text-sm/normal",
                    onClick: a,
                }),
            }),
        ],
    });
}
function nd(e) {
    let { invite: t, onOpenApp: n } = e,
        i = null != t.guild ? (0, em.DY)(t.guild) : null;
    return null == i
        ? null
        : (0, o.jsxs)(o.Fragment, {
              children: [
                  null != i ? (0, o.jsx)(ne, { guild: i }) : null,
                  (0, o.jsxs)("div", {
                      className: t3.zY,
                      children: [
                          (0, o.jsxs)("div", {
                              className: t3.rL,
                              children: [
                                  (0, o.jsx)(tB, { guild: i }),
                                  (0, o.jsx)(ek.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: t3.Rw,
                                      children: Q.intl.format(Q.t["33M5bg"], { guildName: i?.name ?? "" }),
                                  }),
                                  (0, o.jsx)(F.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: t3.Ap,
                                      children: Q.intl.string(Q.t["7N4JkE"]),
                                  }),
                                  (0, o.jsx)("div", {
                                      className: t3.S7,
                                      children: (0, o.jsx)(V.$, {
                                          variant: "primary",
                                          size: "md",
                                          text: Q.intl.string(Q.t["n+VrqG"]),
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
function nh(e) {
    let { invite: t, onOpenApp: n, onOpenAppAfterRegistration: i } = e,
        [l, s] = c.useState(0),
        [r, a] = c.useState(""),
        [u, d] = c.useState(null),
        [h, m] = c.useState(""),
        [f, p] = c.useState(""),
        [A, E] = c.useState({}),
        _ = (0, g.bG)([tz.A], () => tz.A.getAuthenticationConsentRequired()),
        [j, v] = tH(_),
        [N, C] = c.useState(!1),
        I = c.useRef(null);
    function y(e) {
        s(e), I.current?.scrollTo(0, 0);
    }
    function b(e) {
        E(e), (null != e.username || null != e.date_of_birth) && y(0);
    }
    function S(e) {
        E((t) => {
            if (null == t[e]) return t;
            let n = { ...t };
            return delete n[e], n;
        });
    }
    function T(e) {
        a(e), S("username");
    }
    function L(e) {
        let t = e === u || (null != e && null != u && e.isSame(u, "day"));
        d(e), t || S("date_of_birth");
    }
    function O(e) {
        m(e), S("email");
    }
    function k(e) {
        p(e), S("password");
    }
    return (
        c.useEffect(() => {
            x.A.getLocationMetadata();
        }, []),
        (0, o.jsx)(tw.N, {
            theme: R.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, o.jsx)("div", {
                    ref: I,
                    "data-theme": R.NJ8.DARK,
                    className: B()(t3.MY, e),
                    children: N
                        ? (0, o.jsx)(nd, { invite: t, onOpenApp: i })
                        : (0, o.jsxs)(o.Fragment, {
                              children: [
                                  (0, o.jsx)(nt, { invite: t, kicker: 1 === l ? Q.intl.string(Q.t.dzGILG) : void 0 }),
                                  (0, o.jsx)("div", {
                                      className: t3.rf,
                                      children:
                                          0 === l
                                              ? (0, o.jsx)(nu, {
                                                    username: r,
                                                    parsedDateOfBirth: u,
                                                    apiErrors: A,
                                                    onUsernameChange: T,
                                                    onDateOfBirthChange: L,
                                                    onNext: () => y(1),
                                                    onOpenApp: n,
                                                })
                                              : (0, o.jsx)(t9, {
                                                    invite: t,
                                                    username: r,
                                                    parsedDateOfBirth: u,
                                                    email: h,
                                                    password: f,
                                                    consent: j,
                                                    consentRequired: _,
                                                    apiErrors: A,
                                                    onEmailChange: O,
                                                    onPasswordChange: k,
                                                    onConsentChange: v,
                                                    onApiErrors: b,
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
var nm = n(900002),
    ng = n(997590),
    nf = n(107773),
    nx = n(107123),
    np = n(963402),
    nA = n(534400),
    nE = n(773669),
    n_ = n(935208);
function nj(e) {
    let {
            guild: t,
            invite: n,
            discoveryGuild: i,
            showGuildTag: l = !1,
            highContrast: s = !1,
            hideEnglish: r = !1,
            showLocale: a = !0,
            showLevel: u = !0,
            showEstablished: d = !0,
        } = e,
        h = n.approximate_presence_count ?? 0,
        m = n.approximate_member_count ?? 0,
        f = (0, g.bG)([nE.default], () => nE.default.locale),
        x = (0, nx.P)(n_.default.extractTimestamp(t.id), f),
        p = (0, g.bG)([ng.A], () =>
            i?.primary_category_id != null ? ng.A.getCategoryName(i.primary_category_id) : null,
        ),
        A = t.premiumTier ?? R.TVA.NONE,
        E = u && A !== R.TVA.NONE,
        _ = t.preferredLocale ?? i?.preferred_locale ?? null,
        j = c.useMemo(() => {
            if ("en-US" === _) return Q.intl.string(Q.t.LQLMGP);
            let e = (0, Q.getAvailableLocales)().find((e) => e.value === _);
            return null != e ? Q.intl.string(e.localizedName) : _;
        }, [_]),
        v = ["en-US", "en-GB"].includes(_ ?? ""),
        N = a && null != _ && "" !== _ && !(r && v),
        C = null != p,
        I = N || C || E,
        y = C || E,
        b = (0, g.bG)([te.A], () => te.A.getInvite(te.A.getInviteKeyForGuildId(t.id) ?? n.code));
    if (null == b) return null;
    let S = (0, e3.oO)(b),
        T = s ? "text-default" : "text-subtle";
    return (0, o.jsxs)("div", {
        className: tU.hn,
        children: [
            (0, o.jsxs)("div", {
                className: tU.S7,
                children: [
                    (0, o.jsx)(F.E, {
                        tag: "span",
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: t.name,
                    }),
                    (0, o.jsx)(nf.A, {
                        guild: t,
                        tooltipPosition: "bottom",
                        size: 18,
                        tooltipColor: nm.ST.Colors.PRIMARY,
                    }),
                    l &&
                        S?.tag != null &&
                        S?.badgeHash != null &&
                        (0, o.jsx)(nA.o9, {
                            guildId: t.id,
                            guildTag: S?.tag ?? void 0,
                            guildBadge: S.badgeHash,
                            inline: !1,
                        }),
                ],
            }),
            (0, o.jsx)(np.X, { onlineCount: h, memberCount: m, className: tU.He, highContrast: s }),
            (0, o.jsxs)("div", {
                className: tU.ov,
                children: [
                    d &&
                        null != x &&
                        (0, o.jsxs)(o.Fragment, {
                            children: [
                                (0, o.jsx)(F.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: T,
                                    children: Q.intl.format(Q.t.zb2Q56, { createdAtDate: x }),
                                }),
                                I && (0, o.jsx)("span", { className: tU.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    N &&
                        (0, o.jsxs)(o.Fragment, {
                            children: [
                                (0, o.jsx)(F.E, { tag: "span", variant: "text-sm/normal", color: T, children: j }),
                                y && (0, o.jsx)("span", { className: tU.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    C &&
                        (0, o.jsxs)(o.Fragment, {
                            children: [
                                (0, o.jsx)(F.E, { tag: "span", variant: "text-sm/normal", color: T, children: p }),
                                E && (0, o.jsx)("span", { className: tU.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    E &&
                        (0, o.jsx)(F.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: T,
                            children: Q.intl.format(Q.t.hmdOwf, { tier: A }),
                        }),
                ],
            }),
        ],
    });
}
var nv = n(115703),
    nN = n(81975),
    nC = n(127982);
function nI(e) {
    let { invite: t, guild: n, profile: i, onAcceptInvite: l } = e,
        { gamesToDisplay: s, lastGameToDisplay: r, remainingGames: a } = (0, nv.A)(i),
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
        u = i.description ?? n.description;
    return (0, o.jsxs)("div", {
        className: nC.f_,
        children: [
            (0, o.jsxs)("div", {
                className: nC.qQ,
                children: [
                    (0, o.jsx)("div", {
                        className: nC.WT,
                        children: (0, o.jsx)("div", { className: nC.g_, "aria-hidden": !0 }),
                    }),
                    (0, o.jsxs)("div", {
                        className: nC.TS,
                        children: [
                            (0, o.jsx)(tB, { guild: n, outline: !0 }),
                            (0, o.jsxs)(eO.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, o.jsx)(nj, {
                                        guild: n,
                                        invite: t,
                                        showGuildTag: !0,
                                        highContrast: !0,
                                        hideEnglish: !0,
                                    }),
                                    null != u &&
                                        "" !== u &&
                                        (0, o.jsx)(F.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: u,
                                        }),
                                    (0, o.jsx)(nN.A, {
                                        gamesToDisplay: s,
                                        lastGameToDisplay: r,
                                        remainingGames: a,
                                        activity: i.gameActivity,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, o.jsx)("div", {
                className: nC.Fx,
                children: (0, o.jsx)(V.$, {
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
var ny = n(945810);
let nb = (0, ny.mj)({
        name: "2026-03-mobile-web-invite-server-profile",
        kind: "installation",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    nS = n(843020);
function nT(e) {
    if (null == e || !eJ.i.VISIBLE.has(e.visibility)) return !1;
    let t = null != e.description && e.description.length > 0,
        n = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
    return t || n;
}
function nR(e, t, n, i) {
    e?.preventDefault(),
        S.default.track(
            R.HAw.INVITE_APP_OPENED,
            {
                invite_code: (0, e$.m0)(t),
                guild_id: n?.guild?.id,
                channel_id: n?.channel?.id,
                inviter_id: n?.inviter?.id,
                invite_type: null != n && n?.type != null ? to.Xd[n?.type] : void 0,
                user_is_member: null != n && null != n.guild && null != e9.A.getGuild(n.guild.id),
                size_total: n?.approximate_member_count,
                time_to_click_ms: Math.round(performance.now()),
            },
            { flush: !0 },
        );
    let l = null != n && n.state !== R.elq.EXPIRED && n.state !== R.elq.BANNED ? t : void 0,
        s = eq.default.getFingerprint(),
        r = null != s ? s : eq.default.getId(),
        a = null != n && n?.type != null ? Number(n?.type) : void 0;
    A.Ay.openApp(l, void 0, r, void 0, { inviteType: a, didRegister: i?.didRegister });
}
function nL() {
    return (0, o.jsx)("div", { className: nC.$k, children: (0, o.jsx)(ew.y, {}) });
}
function nO(e) {
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
            (0, tn.xb)(n);
    }
}
function nk(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === R.elq.BANNED
        ? (0, o.jsx)(e5, { text: Q.intl.string(Q.t["5AkWAd"]), buttonCta: Q.intl.string(Q.t["8osdkn"]), onClick: n })
        : (0, o.jsx)(e5, { text: Q.intl.string(Q.t["usP+Mb"]), buttonCta: Q.intl.string(Q.t["8osdkn"]), onClick: n });
}
function nw(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: i, sectionClassName: l, inviteCardClassName: s = nC.qF } = e,
        { ref: r, height: a } = (0, e6.Ay)(),
        c = (0, e0.z)({ height: null != a && 0 !== a ? `${a}px` : `${i}px`, config: eZ.config.stiff });
    return (0, o.jsxs)(eZ.animated.div, {
        className: s,
        style: c,
        children: [
            (0, o.jsx)(eZ.animated.div, {
                className: nC.NS,
                style: c,
                children: (0, o.jsx)("section", { ref: r, className: l, children: t }),
            }),
            n,
        ],
    });
}
function nD(e) {
    let { invite: t } = e;
    if (null == t || !tx(t)) return null;
    let n = nO(t);
    return (0, o.jsx)(nw, {
        startAnimHeightPx: 0,
        sectionClassName: nC.ui,
        children: 1 === n ? (0, o.jsx)(tR, { invite: t }) : null,
    });
}
let nG = { 1: nC._r, 2: nC.Gm, 0: nC.Kt };
function nP(e) {
    let t,
        { invite: n } = e,
        i = nO(n),
        { enabled: l } = nb.useConfig({ location: "AcceptInviteMobile" }),
        s = null != n ? (0, e3.oO)(n) : null,
        r = n?.guild != null ? (0, em.DY)(n.guild) : null,
        a = null != r && nT(s) && null != n && !tx(n),
        u = l && a;
    c.useEffect(() => {
        a && nb.getConfig({ location: "AcceptInviteMobile.hasProfile" });
    }, [a]);
    let d = c.useRef(!1);
    if (
        (c.useEffect(() => {
            d.current ||
                (null != n &&
                    1 === i &&
                    ((d.current = !0),
                    S.default.track(R.HAw.INVITE_ACCEPT_BUTTON_RENDERED, {
                        invite_code: n.code,
                        guild_id: n.guild?.id,
                        duration_ms_since_page_load: Math.round(performance.now()),
                    })));
        }, [n, i]),
        null == n)
    )
        t = (0, o.jsx)(nL, {});
    else
        switch (i) {
            case 1:
                t = u
                    ? (0, o.jsx)(nI, { invite: n, guild: r, profile: s, onAcceptInvite: e.onAcceptInvite })
                    : (0, o.jsx)(tk, { ...e, invite: n });
                break;
            case 2:
                t = (0, o.jsx)(nk, { ...e, invite: n });
                break;
            default:
                t = (0, o.jsx)(nL, {});
        }
    let h = 1 === i && u ? nC.c4 : nC.qF;
    return (0, o.jsx)(nw, { startAnimHeightPx: 200, sectionClassName: nG[i], inviteCardClassName: h, children: t });
}
function nU(e) {
    let { invite: t } = e,
        [n, i] = c.useState(null);
    return (c.useLayoutEffect(() => {
        let e;
        null == n &&
            null != t &&
            1 === nO(t) &&
            i(
                ((e = t.guild_experiments?.["2026-08-mweb-invite-registration"]),
                e?.variation === 1 && !eq.default.isAuthenticated() && null != t.guild && null == t.target_application),
            );
    }, [t, n]),
    !0 === n)
        ? (0, o.jsx)(nh, {
              invite: t,
              onOpenApp: e.onAcceptInvite,
              onOpenAppAfterRegistration: e.onOpenAppAfterRegistration,
          })
        : (0, o.jsx)(nB, { ...e });
}
function nB(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = t ?? {},
        l = {},
        { enabled: s } = nb.useConfig({ location: "AcceptInviteMobile" }),
        r = null != t ? (0, e3.oO)(t) : null,
        a = null != i && nT(r) && null != t && !tx(t);
    if (i?.splash != null) {
        let e = tt.Ay.getGuildSplashURL({ id: i.id, splash: i.splash });
        null != e && ((l.backgroundImage = `url(${e})`), (l.backgroundSize = "cover"));
    } else s && a && ((l.backgroundImage = `url(${nS})`), (l.backgroundSize = "cover"));
    return (0, o.jsxs)(w.Ay, {
        theme: R.NJ8.DARK,
        className: nC.G3,
        style: l,
        contentClassName: nC.__,
        children: [(0, o.jsx)(nP, { ...e, onAcceptInvite: n }), (0, o.jsx)(nD, { ...e })],
    });
}
var nF = n(723702);
function nV(e) {
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
var nM = n(474545),
    nH = n(604880);
function nW(e) {
    let { token: t, hasError: n, errorReason: i } = e;
    return n
        ? (0, o.jsxs)("div", {
              className: nM.MY,
              children: [
                  (0, o.jsx)("div", { className: nM.r$, children: (0, o.jsx)("img", { src: nH, alt: "" }) }),
                  (0, o.jsxs)("div", {
                      className: nM.Qs,
                      children: [
                          (0, o.jsx)(nV, { alt: "" }),
                          (0, o.jsx)(ek.D, {
                              variant: "heading-lg/semibold",
                              className: nM.ky,
                              children: Q.intl.string(Q.t.RtCSr1),
                          }),
                          (0, o.jsx)(F.E, {
                              variant: "text-md/normal",
                              className: nM.G3,
                              children: Q.intl.string(Q.t["S+YjYJ"]),
                          }),
                          (0, o.jsx)(V.$, {
                              variant: "primary",
                              text: Q.intl.string(Q.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  S.default.track(R.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: i }),
                                      (0, D.pX)(R.BVt.LOGIN);
                              },
                          }),
                      ],
                  }),
              ],
          })
        : (0, o.jsxs)("div", {
              className: nM.MY,
              children: [
                  (0, o.jsx)("div", { className: nM.r$, children: (0, o.jsx)("img", { src: nH, alt: "" }) }),
                  (0, o.jsxs)("div", {
                      className: nM.Qs,
                      children: [
                          (0, o.jsx)(nV, { alt: "" }),
                          (0, o.jsx)(ek.D, {
                              variant: "heading-lg/semibold",
                              className: nM.ky,
                              children: Q.intl.string(Q.t["9h/0Rl"]),
                          }),
                          (0, o.jsx)(F.E, {
                              variant: "text-md/normal",
                              className: nM.G3,
                              children: Q.intl.string(Q.t.Wgm7Om),
                          }),
                          (0, o.jsx)(V.$, {
                              variant: "primary",
                              text: Q.intl.string(Q.t.NydsTd),
                              fullWidth: !0,
                              onClick: () => {
                                  let e, n;
                                  (e = (function (e) {
                                      let t = platform.os?.family;
                                      if ("Android" === t || "iOS" === t) {
                                          let t = eq.default.getFingerprint(),
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
                                      S.default.track(R.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                                          detection_type: "mobile_button_clicked",
                                          device_type: h.Fr ? "mobile" : "tablet",
                                          platform: S.default.getSuperProperties()?.os,
                                      }),
                                      null != n &&
                                          S.default.track(R.HAw.DEEP_LINK_CLICKED, {
                                              fingerprint: (0, eX.v)(n.fingerprint),
                                              attempt_id: n.attemptId,
                                              source: n.utmSource,
                                          }),
                                      eY.A.launch(e, (e) => {
                                          e || (0, D.bG)({ pathname: R.BVt.LOGIN });
                                      });
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var nz = n(613057);
function nQ(e) {
    let { title: t, subtitle: n, buttonText: i, buttonOnClick: l } = e;
    return (0, o.jsx)(w.Ay, {
        children: (0, o.jsxs)(eO.B, {
            gap: 24,
            children: [
                (0, o.jsxs)(eO.B, {
                    gap: 8,
                    children: [(0, o.jsx)(w.hE, { children: t }), (0, o.jsx)(w.tK, { children: n })],
                }),
                (0, o.jsx)(V.$, { onClick: l, text: i, fullWidth: !0 }),
            ],
        }),
    });
}
var nK = n(463347),
    nX = n(189213),
    nq = n(192308),
    nY = n(347704),
    n$ = n(803306),
    nZ = n(17372),
    nJ = n(369053),
    n0 = n(975571),
    n1 = n(928658);
async function n2(e, t) {
    try {
        await (0, nJ.TP)(e, t);
    } catch (e) {
        if (null != e && "object" == typeof e && 429 === e.status)
            throw { status: 429, body: { message: Q.intl.string(Q.t.Z2hIUf) } };
        throw e;
    }
}
function n4(e, t) {
    let i = !1;
    function l() {
        i || t?.();
    }
    function s(s) {
        function r() {
            return n2(e, s);
        }
        async function a(t) {
            return await (0, nJ.G_)(e, s, t);
        }
        function c(n) {
            (i = !0),
                setTimeout(() => {
                    i = !1;
                }, 0);
            let l = n?.token;
            switch (e) {
                case nZ.tY.MESSAGE:
                    (0, n1.bM)(l, t);
                    break;
                case nZ.tY.USER:
                    (0, n1.nQ)(l, t);
                    break;
                case nZ.tY.GUILD:
                    (0, n1.V3)(l, t);
                    break;
                case nZ.tY.MEDIA_TAKEDOWN:
                    (0, n1._Y)(l, t);
            }
        }
        (i = !0),
            setTimeout(() => {
                i = !1;
            }, 0),
            (0, nq.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("932606"), n.e("919840")]).then(n.bind(n, 79779));
                    return (t) =>
                        (0, o.jsx)(e, {
                            ...t,
                            onFormSubmit: a,
                            onResend: r,
                            onSuccess: c,
                            headerText: Q.intl.string(Q.t.H3Q7U8),
                            confirmButtonText: Q.intl.string(Q.t["13ofGu"]),
                            impression: { impressionName: d.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            );
    }
    return function () {
        function t(t) {
            return n2(e, t);
        }
        (0, nq.closeAllModals)(),
            (0, nq.openModalLazy)(
                async () => {
                    let { default: i } = await n.e("429232").then(n.bind(n, 180275));
                    return (n) =>
                        (0, o.jsx)(i, {
                            ...n,
                            onFormSubmit: t,
                            onSuccess: s,
                            headerText: Q.intl.string(Q.t.ZLRYGU),
                            confirmButtonText: Q.intl.string(Q.t.PDTjLN),
                            subtitle: e === nZ.tY.MEDIA_TAKEDOWN ? Q.intl.string(Q.t.jt3z8f) : void 0,
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            );
    };
}
var n8 = n(939249),
    n5 = n(921853),
    n7 = n(43008);
let n6 = { [nZ.tY.MESSAGE]: Q.t.fuqnBC, [nZ.tY.USER]: Q.t.F4jrRW, [nZ.tY.GUILD]: Q.t.gH3aMs },
    n3 = (e) => {
        let { title: t, menuType: n, onReopen: i } = e,
            l = c.useCallback(() => {
                n4(n, i)();
            }, [n, i]);
        return (0, o.jsxs)(n8.D, {
            className: n7.b0,
            onClick: l,
            children: [
                (0, o.jsx)(F.E, { variant: "text-md/medium", children: t }),
                (0, o.jsx)(n5.n, { size: "sm", style: { transform: "rotate(180deg)" } }),
            ],
        });
    },
    n9 = (e) => {
        let { dsaCapabilities: t, onReopen: n } = e;
        return (0, o.jsx)(eO.B, {
            gap: 16,
            children: (0, o.jsx)("div", {
                className: n7.kL,
                children: t.map((e) =>
                    e === nZ.tY.MEDIA_TAKEDOWN || null == n6[e]
                        ? null
                        : (0, o.jsx)(n3, { title: Q.intl.string(n6[e]), menuType: e, onReopen: n }, e),
                ),
            }),
        });
    };
var ie = n(881636),
    it = n(138658);
let ii = () => {
    let { goToStep: e } = (0, nY.n)(),
        t = c.useCallback(() => {
            e(ia.DSA);
        }, [e]),
        n = c.useCallback(() => {
            e(ia.TIDA);
        }, [e]);
    return (0, o.jsxs)(eO.B, {
        gap: 8,
        children: [
            (0, o.jsx)(F.E, { variant: "text-md/normal", children: Q.intl.string(Q.t.bd1h5T) }),
            (0, o.jsxs)("div", {
                className: it.k,
                children: [
                    (0, o.jsxs)(n8.D, {
                        className: it.b,
                        onClick: t,
                        children: [
                            (0, o.jsxs)("div", {
                                children: [
                                    (0, o.jsx)(F.E, {
                                        variant: "text-md/medium",
                                        children: Q.intl.string(Q.t["AszWL/"]),
                                    }),
                                    (0, o.jsx)(F.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: Q.intl.string(Q.t["0Jikui"]),
                                    }),
                                ],
                            }),
                            (0, o.jsx)(ie.u, { size: "sm" }),
                        ],
                    }),
                    (0, o.jsxs)(n8.D, {
                        className: it.b,
                        onClick: n,
                        children: [
                            (0, o.jsxs)("div", {
                                children: [
                                    (0, o.jsx)(F.E, { variant: "text-md/medium", children: Q.intl.string(Q.t.jMSjZL) }),
                                    (0, o.jsx)(F.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: Q.intl.string(Q.t.qEaUPS),
                                    }),
                                ],
                            }),
                            (0, o.jsx)(ie.u, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var il = n(108124);
let is = () =>
    (0, o.jsxs)(eO.B, {
        gap: 24,
        children: [
            (0, o.jsx)(F.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: Q.intl.string(Q.t["3zG2Y9"]),
            }),
            (0, o.jsxs)(eO.B, {
                gap: 16,
                children: [
                    (0, o.jsxs)(eO.B, {
                        gap: 8,
                        children: [
                            (0, o.jsx)(F.E, { variant: "text-md/semibold", children: Q.intl.string(Q.t.CfBo0z) }),
                            (0, o.jsxs)("ul", {
                                className: il.T,
                                children: [
                                    (0, o.jsx)("li", {
                                        children: (0, o.jsx)(F.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: Q.intl.string(Q.t.ofQnNQ),
                                        }),
                                    }),
                                    (0, o.jsx)("li", {
                                        children: (0, o.jsx)(F.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: Q.intl.string(Q.t.dFaQGn),
                                        }),
                                    }),
                                    (0, o.jsx)("li", {
                                        children: (0, o.jsx)(F.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: Q.intl.string(Q.t.RVNwXh),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, o.jsx)(F.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: Q.intl.string(Q.t.o5azXJ),
                    }),
                    (0, o.jsx)(F.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: Q.intl.format(Q.t.YETtaY, {
                            policyURL: "https://discord.com/safety/non-consensual-intimate-media-policy-explainer",
                        }),
                    }),
                ],
            }),
            (0, o.jsxs)(eO.B, {
                gap: 8,
                children: [
                    (0, o.jsx)(F.E, { variant: "text-md/semibold", children: Q.intl.string(Q.t.FJh2zi) }),
                    (0, o.jsx)(F.E, {
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
var ir = n(379492);
g.Ay.initialize();
var ia = (((s = {}).SELECTION = "selection"), (s.DSA = "dsa"), (s.TIDA = "tida"), s);
let io = (e) => {
        let { transitionState: t, onClose: n } = e,
            [i, l] = c.useState(!0),
            [s, r] = c.useState([]),
            [a, u] = c.useState(null),
            d = (0, g.bG)([eq.default], () => eq.default.isAuthenticated()),
            h = (0, g.bG)([eI.A], () => eI.A.hasLoadedExperiments),
            m = c.useCallback(() => {
                (0, nJ.OY)()
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
        c.useEffect(() => {
            d
                ? (l(!0),
                  n$
                      .fetchCurrentUser({ withAnalyticsToken: !0 })
                      .then(() => m())
                      .catch(() => l(!1)))
                : m();
        }, [d, m]),
            c.useEffect(() => {
                !(async function () {
                    h || (await x.A.getLocationMetadata(), x.A.getExperiments());
                })();
            }, [h]);
        let f = s.filter((e) => e !== nZ.tY.MEDIA_TAKEDOWN),
            p = s.includes(nZ.tY.MEDIA_TAKEDOWN),
            A = f.length > 0,
            E = A && p,
            _ = i || !h;
        c.useEffect(() => {
            _ || A || p || n();
        }, [_, A, p, n]);
        let j = c.useCallback(() => {
                (0, nq.openModalLazy)(() => Promise.resolve((e) => (0, o.jsx)(io, { ...e })), { dismissable: !1 });
            }, []),
            v = c.useCallback((e, t) => {
                "selection" !== t && "selection" !== e ? u("selection") : u(e);
            }, []),
            N = c.useMemo(() => n4(nZ.tY.MEDIA_TAKEDOWN, j), [j]),
            C = a ?? (E ? "selection" : A ? "dsa" : "tida");
        if (_ || (!A && !p))
            return (0, o.jsx)(nX.Modal, {
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
                    children: (0, o.jsx)(ew.y, {}),
                }),
            });
        if (!E) {
            if (A)
                return (0, o.jsx)(nX.Modal, {
                    title: Q.intl.string(Q.t.Z11w18),
                    subtitle: Q.intl.format(Q.t["532l+q"], {
                        supportURL: n0.A.getArticleURL(R.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, o.jsx)(n9, { dsaCapabilities: f, onReopen: j }),
                });
            if (p)
                return (0, o.jsx)(nX.Modal, {
                    title: Q.intl.string(Q.t.YignUm),
                    actions: [{ text: Q.intl.string(Q.t.D5Czbu), variant: "primary", onClick: N }],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, o.jsx)(is, {}),
                });
        }
        let I = [
            { stepKey: "selection", modalProps: { title: Q.intl.string(Q.t.Z11w18) }, body: (0, o.jsx)(ii, {}) },
            {
                stepKey: "dsa",
                modalProps: {
                    title: Q.intl.string(Q.t.Z11w18),
                    subtitle: Q.intl.format(Q.t["532l+q"], {
                        supportURL: n0.A.getArticleURL(R.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, o.jsx)(n9, { dsaCapabilities: f, onReopen: j }),
            },
            {
                stepKey: "tida",
                modalProps: { title: Q.intl.string(Q.t.YignUm) },
                body: (0, o.jsx)(is, {}),
                nextButtonProps: { text: Q.intl.string(Q.t.D5Czbu) },
                onNext: () => (N(), !1),
            },
        ];
        return (0, o.jsx)("div", {
            className: { selection: ir.a, dsa: ir.q, tida: void 0 }[C],
            children: (0, o.jsx)(nY.t, {
                steps: I,
                currentStepKey: C,
                onStepChange: v,
                onClose: n,
                transitionState: t,
                dismissable: !1,
            }),
        });
    },
    ic = () => (
        c.useEffect(() => {
            (0, nq.openModalLazy)(() => Promise.resolve((e) => (0, o.jsx)(io, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
var iu = n(30793),
    id = n(970928),
    ih = n(612181),
    im = n(179689);
let ig = {
    dump(e) {
        let t;
        null != performance.memory &&
            (t = {
                jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                totalJSHeapSize: performance.memory.totalJSHeapSize,
                usedJSHeapSize: performance.memory.usedJSHeapSize,
            }),
            e({
                browser: { name: ez().name, version: ez().version },
                os: { name: ez().os.family, version: ez().os.version },
                memory: t,
            });
    },
    getTimeSinceNavigationStart: () => Date.now() - im.fL,
};
var ix = n(649852),
    ip = n.n(ix),
    iA = n(615300),
    iE = n(319060),
    i_ = n(844222),
    ij = n(240248),
    iv = n(706192);
let iN = (0, ij.xI)(iE.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    iC = { friction: 10, tension: 130 },
    iI = function (e) {
        return class extends c.Component {
            timeout;
            anim = new iA.A.Value(0);
            state = { shouldAnimate: !h.Fr };
            componentDidMount() {
                h.Fr || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize());
            }
            handleResize = () => {
                let e = window.innerWidth > iN;
                !this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({ shouldAnimate: e });
            };
            handleResizeDebounced = ip()(this.handleResize, 60);
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
                iA.A.spring(this.anim, { toValue: e, ...iC }).start(t);
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
                    className: iv.i,
                    children: (0, o.jsx)(i_.C.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, o.jsx)(iA.A.div, {
                                className: iv.l,
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, o.jsx)(e, { ...this.props }),
                            });
                        },
                    }),
                });
            }
        };
    };
var iy = n(603647),
    ib = n(970672),
    iS = n(129014),
    iT = n(642277);
let iR = function (e) {
    let { match: t, location: n, attemptDeepLink: i } = e,
        [l, s] = c.useState(0);
    c.useEffect(() => {
        iS.default.once("connected", () => {
            s(1);
        }),
            iS.default.once("disconnected", () => {
                (0, D.pX)((0, iT.W)());
            }),
            iS.default.connect();
    }, []),
        c.useEffect(() => {
            if (0 !== l) return;
            let e = setTimeout(() => (0, D.pX)((0, iT.W)()), 3e3);
            return () => clearTimeout(e);
        }, [l]);
    let r = c.useCallback(
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
            return (0, o.jsxs)(w.Ay, {
                children: [
                    (0, o.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.qllnGm) }),
                    (0, o.jsx)(w.tK, { children: Q.intl.string(Q.t.SXCxye) }),
                    (0, o.jsx)("div", {
                        className: X.eT,
                        children: (0, o.jsx)(V.$, {
                            text: Q.intl.string(Q.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => r(t, n),
                        }),
                    }),
                    (0, o.jsx)("div", {
                        className: B()(X.Ot, X.F1),
                        children: (0, o.jsx)(ed.Q, {
                            text: Q.intl.string(Q.t["2ixEBi"]),
                            textVariant: "text-sm/normal",
                            onClick: () => (0, D.pX)((0, iT.W)()),
                        }),
                    }),
                ],
            });
        case 0:
        case 2:
            return (0, o.jsxs)(w.Ay, {
                children: [(0, o.jsx)(w.hE, { children: Q.intl.string(Q.t["Z+hCVU"]) }), (0, o.jsx)(w.CK, {})],
            });
        case 3:
            return (0, o.jsxs)(w.Ay, {
                children: [
                    (0, o.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.csrAMJ) }),
                    (0, o.jsx)(w.tK, { children: Q.intl.string(Q.t.ghBJz9) }),
                ],
            });
    }
};
var iL = n(723923);
g.Ay.initialize();
class iO extends c.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, eg.A)(this.props.location),
            t = (0, u.parse)(this.props.location.search);
        E.Bo.post({
            url: R.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
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
            (0, G.d0)("disable_email_notifications");
    }
    renderBusy() {
        return (0, o.jsx)(w.Ay, { children: (0, o.jsx)(w.CK, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: i } = this.props,
            l = Q.intl.formatToPlainString(Q.t.YDAohB, { category: t });
        return (0, o.jsxs)(w.Ay, {
            children: [
                (0, o.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.f6rdLg) }),
                (0, o.jsx)(w.tK, { children: l }),
                (0, o.jsx)("div", {
                    className: X.QX,
                    children: (0, o.jsx)(V.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => i(n) }),
                }),
                (0, o.jsx)("div", {
                    className: X.Ot,
                    children: (0, o.jsx)(ed.Q, {
                        text: Q.intl.string(Q.t.YYTirT),
                        textVariant: "text-sm/normal",
                        onClick: () => i((0, v.settingsPathToRoute)(C.od.NOTIFICATIONS_EMAILS)),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: i } = this.state;
        if (null != i) {
            let e = iL.px.find((e) => e.category === i);
            if (null != e) return this.renderCategorySuccess(i, e.label());
        }
        return (0, o.jsxs)(w.Ay, {
            children: [
                (0, o.jsx)(w.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: ti._3.DEPRECATED_SIZE_100,
                    className: X.SX,
                }),
                (0, o.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t["6U6OMQ"]) }),
                (0, o.jsx)(w.tK, { children: Q.intl.string(Q.t["yaDJ4/"]) }),
                (0, o.jsx)("div", {
                    className: X.eT,
                    children: (0, o.jsx)(V.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, o.jsxs)(w.Ay, {
            children: [
                (0, o.jsx)(w._V, { src: n(37772), className: X.SX }),
                (0, o.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.ox9hIS) }),
                (0, o.jsx)(w.tK, { children: Q.intl.string(Q.t["/dcuR5"]) }),
                (0, o.jsx)("div", {
                    className: X.eT,
                    children: (0, o.jsx)(V.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let ik = g.Ay.connectStores([eh.A], () => ({ defaultRoute: eh.A.defaultRoute }))(iO);
var iw = n(110782),
    iD = n(10088),
    iG = n(871123),
    iP = n(189081),
    iU = n(67480),
    iB = n(45938),
    iF = n(587895),
    iV = n(242874),
    iM = n(165191),
    iH = n(287809),
    iW = n(97352),
    iz = n(615396),
    iQ = n(202541),
    iK = n(716592);
function iX() {
    return (0, o.jsxs)(c.Fragment, {
        children: [
            (0, o.jsx)(w.eu, { src: null, size: ti._3.DEPRECATED_SIZE_100, className: X.SX }),
            (0, o.jsx)(w.tK, { children: Q.intl.string(Q.t.lTGZAl) }),
            (0, o.jsx)(w.hE, { className: B()(X.Ot, ev.tR), children: Q.intl.string(Q.t.ZTNur7) }),
        ],
    });
}
let iq = g.Ay.connectStores([iU.A, iF.A, iW.A, iH.default], (e) => {
    let { giftCode: t } = e,
        n = iU.A.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, iz.c9)(i) : null,
        application: null != n ? iF.A.getApplication(n.applicationId) : null,
        gifter: iH.default.getUser(t.userId),
    };
})(function (e) {
    let { error: t, giftCode: n, gifter: i, sku: l, application: s, subscriptionPlan: r } = e,
        a = null == i ? Q.intl.string(Q.t.lTGZAl) : Q.intl.formatToPlainString(Q.t.TjWdPc, { username: i.username });
    if (null == l) return (0, o.jsx)(iX, {});
    let u = l.name;
    return (
        null != r &&
            (u = Q.intl.formatToPlainString(r.interval === iQ.WT.MONTH ? Q.t.CTpcCZ : Q.t["rgPWG/"], {
                skuName: l.name,
                intervalCount: r.intervalCount,
            })),
        (0, o.jsxs)(c.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, o.jsx)(iM.A, { defaultAnimationState: iV.oA.LOOP, giftStyle: n.giftStyle, className: iK.e })
                    : (0, o.jsx)(w.eu, {
                          src: null != i ? i.getAvatarURL(void 0, 100) : null,
                          size: ti._3.DEPRECATED_SIZE_100,
                          className: X.SX,
                      }),
                null != t
                    ? (0, o.jsxs)(c.Fragment, {
                          children: [
                              (0, o.jsx)(w.tK, { children: Q.intl.string(Q.t.mDFGFj) }),
                              (0, o.jsx)(w.hE, { children: t }),
                          ],
                      })
                    : (0, o.jsxs)(c.Fragment, {
                          children: [
                              (0, o.jsx)(w.tK, { children: a }),
                              (0, o.jsxs)(w.hE, {
                                  className: B()(X.Ot, ev.tR),
                                  children: [
                                      l.productLine !== R.EZt.COLLECTIBLES &&
                                          (0, o.jsx)(ts.A, {
                                              size: ts.M.MEDIUM,
                                              className: iK.I,
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
var iY = n(935399),
    i$ = n(475743),
    iZ = n(707554),
    iJ = n(68281);
function i0(e) {
    let { loginStatus: t, authBoxClassName: n, transparent: i = !1, onSubmit: l, onCancelAccountDeletion: s } = e,
        r = t === R.aUe.ACCOUNT_DISABLED,
        a = r ? Q.intl.string(Q.t["j3rC+U"]) : Q.intl.string(Q.t.ZFWofo),
        c = r ? Q.intl.string(Q.t["6eNTWe"]) : Q.intl.string(Q.t["pCBti+"]);
    return (0, o.jsx)(w.Ay, {
        tag: "form",
        onSubmit: l,
        className: n,
        transparent: i,
        children: (0, o.jsxs)(iZ.F, {
            component: (0, o.jsx)(w.hE, { className: X.QB, children: a }),
            children: [
                (0, o.jsx)(w.tK, { className: X.SX, children: c }),
                (0, o.jsxs)(w.eB, {
                    children: [
                        (0, o.jsx)(V.$, { text: Q.intl.string(Q.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, o.jsx)("div", {
                            className: B()(X.Ot, iJ.Qt),
                            children: Q.intl.format(Q.t.js2rr5, { onClick: s }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var i1 = n(504394),
    i2 = n(275538),
    i4 = n(228916);
function i8(e) {
    let { children: t, className: n, ...i } = e,
        l = t();
    return (0, o.jsx)(w.Ay, {
        ...i,
        className: B()(n, i4.kL),
        contentClassName: i4.Qs,
        children: l.map((e, t) =>
            (0, o.jsx)("div", { className: i4.fi, style: { flexBasis: `${100 / l.length}%` }, children: e }, t),
        ),
    });
}
var i5 = n(895600),
    i7 = n(506774),
    i6 = n(104798),
    i3 = n(991512);
let i9 = "mweb_handoff_nonce",
    le = "mweb_handoff_nonce_expiration",
    lt = +tF.A.Millis.MINUTE,
    ln = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    li = new Set(["deep_link_failed"]);
function ll() {
    i7.w.remove(i9), i7.w.remove(le);
}
let ls = () => {
    let e = (0, g.bG)([eq.default], () => eq.default.getFingerprint()),
        { fingerprint: t, handoff_token: n } = (0, u.parse)(window.location.search),
        i = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
        l = i ?? (null !== e ? e : void 0);
    c.useEffect(() => {
        null !== i && e !== i && f.h.dispatch({ type: "FINGERPRINT", fingerprint: i });
    }, [i, e]);
    let [s, r] = c.useState(null),
        a = c.useCallback(
            (e) => {
                r(e),
                    S.default.track(
                        R.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                        { reason: e, fingerprint: (0, eX.v)(l) },
                        { fingerprint: l },
                    );
            },
            [r, l],
        ),
        d = i7.w.get(i9);
    if (
        ("null" === n && null === s && a("deep_link_failed"),
        null != n && "null" !== n && null == d && null === s && a("nonce_missing"),
        c.useEffect(() => {
            if (null != d) {
                let e = i7.w.get(le);
                (null == e || Date.now() >= e) && (a("nonce_expired"), ll());
            }
        }, [d, a]),
        c.useEffect(() => {
            null != n &&
                "null" !== n &&
                null != d &&
                null == s &&
                E.Bo.post({ url: R.Rsh.HANDOFF_EXCHANGE, body: { key: d, handoff_token: n }, rejectWithError: !0 })
                    .then((e) => x.A.loginToken(e.body.token, !1))
                    .then(() => {
                        S.default.track(R.HAw.LOGIN_SUCCESSFUL, {
                            source: R.mdB.MOBILE_WEB_HANDOFF,
                            is_new_user: !1,
                            fingerprint: (0, eX.v)(l),
                        });
                        let e = new URL(window.location.href),
                            t = new URLSearchParams(e.search);
                        t.delete("handoff_token"),
                            t.delete("fingerprint"),
                            (e.search = t.toString()),
                            window.history.pushState(null, "", e);
                    })
                    .catch(() => {
                        a("handoff_exchange");
                    })
                    .finally(() => {
                        ll();
                    });
        }, [n, d, s, l, a]),
        null == l)
    )
        return null;
    let h =
        null == s
            ? (0, o.jsxs)(o.Fragment, {
                  children: [Q.intl.string(Q.t.uJ1JsY), (0, o.jsx)("br", {}), Q.intl.string(Q.t.GHVWAs)],
              })
            : li.has(s)
              ? Q.intl.string(Q.t.EPt55r)
              : ln.has(s)
                ? Q.intl.string(Q.t.g87kTp)
                : void 0;
    return null != s && li.has(s)
        ? (0, o.jsx)("div", {
              className: i3.Un,
              children: (0, o.jsx)(F.E, {
                  color: "interactive-text-default",
                  variant: "text-sm/semibold",
                  children: h,
              }),
          })
        : (0, o.jsxs)("div", {
              className: i3.kL,
              children: [
                  (0, o.jsx)(F.E, { variant: "text-sm/semibold", children: h }),
                  (0, o.jsx)(V.$, {
                      variant: "overlay-primary",
                      text: Q.intl.string(Q.t.NcC759),
                      onClick: function () {
                          let e = i6.A.generateNonce();
                          i7.w.set(i9, e), i7.w.set(le, Date.now() + lt);
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
                                  { fingerprint: (0, eX.v)(l), source: "mobile_web_handoff", destination: R.J$u },
                                  { fingerprint: l, flush: !0 },
                              ),
                              (window.location.href = t.toString());
                      },
                  }),
              ],
          });
};
var lr = n(274303),
    la = n(139286),
    lo = n(970573),
    lc = n(491919);
function lu(e) {
    let { onDismiss: t, embedded: n = !1 } = e;
    return (
        (0, la.A)({ type: d.ImpressionTypes.MODAL, name: d.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, o.jsxs)(w.Ay, {
            className: lc.ci,
            transparent: n,
            children: [
                !n && (0, o.jsx)(w.hE, { children: Q.intl.string(Q.t.bVbB63) }),
                (0, o.jsx)(F.E, {
                    className: lc.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: Q.intl.string(Q.t["0M5fN7"]),
                }),
                (0, o.jsx)(lo.A, {
                    actionText: Q.intl.string(Q.t["DSN+hw"]),
                    onAction: (e) => {
                        e === lo.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, o.jsx)("div", {
                    className: lc.o1,
                    children: (0, o.jsx)(ed.Q, {
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
function ld(e) {
    let {
        authBoxClassName: t,
        country: n,
        login: i,
        password: l,
        onLoginChange: s,
        onPasswordChange: r,
        loginRef: a,
        passwordRef: c,
    } = e;
    return (0, o.jsxs)(w.Ay, {
        className: t,
        children: [
            (0, o.jsx)(i1.M, {}),
            (0, o.jsxs)(w.eB, {
                className: X.QX,
                children: [
                    (0, o.jsx)(ej.A, {
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
                        value: i,
                        autoFocus: !0,
                        required: !0,
                    }),
                    (0, o.jsx)(w.pd, {
                        className: X.SX,
                        label: Q.intl.string(Q.t["CIGa+7"]),
                        onChange: r,
                        type: "password",
                        setRef: c,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        value: l,
                        required: !0,
                    }),
                    (0, o.jsx)("div", {
                        className: X.QB,
                        children: (0, o.jsx)(V.$, {
                            text: Q.intl.string(Q.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, o.jsx)(ed.Q, { text: Q.intl.string(Q.t.wWIufs), textVariant: "text-sm/normal", disabled: !0 }),
                    (0, o.jsx)("div", {
                        className: X.a5,
                        children: (0, o.jsx)(ed.Q, {
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
var lh = n(401755);
function lm(e, t) {
    if (null == t[e]) return null;
    {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n;
    }
}
function lg(e) {
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
            loginSource: x,
            dismissedChooseAccount: p,
            setDismissedChooseAccount: A,
            conditionalMediationAbortController: E,
            onLoginChange: _,
            onPasswordChange: j,
            handleLogin: v,
            handleForgotPassword: N,
            handleGotoRegister: C,
        } = e,
        I = (0, g.bG)([e_.A], () => e_.A.getCountryCode()),
        y = (0, g.bG)([eq.default], () => eq.default.getLoginStatus()),
        b = (0, g.bG)([lr.A], () => lr.A.getHasLoggedInAccounts()),
        T = c.useCallback(
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
        { handoff_token: L } = (0, u.parse)(window.location.search),
        O = h.Fr && h.KY && null != L,
        k = null == f.email && null != f.password,
        D = c.useRef(null),
        G = c.useRef(null),
        P = (0, i$.Ay)(f);
    c.useEffect(() => {
        function e(e) {
            return null != f[e];
        }
        null != P && P !== f && (e("password") ? G.current?.focus() : (e("email") || e("login")) && D.current?.focus());
    }, [f, D, G, P]),
        (t = r
            ? null
            : null != n
              ? (0, o.jsx)("div", { className: X.S3, children: (0, o.jsx)(i1.A, { invite: n }) })
              : null != l
                ? (0, o.jsx)(iq, { giftCode: l })
                : (0, o.jsxs)("div", {
                      className: iJ.wx,
                      children: [
                          (0, o.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t["7fNJgA"]) }, "title"),
                          !1 === (0, nF.isAndroidWeb)()
                              ? (0, o.jsx)(w.tK, { children: Q.intl.string(Q.t.euS7r4) }, "subtitle")
                              : null,
                      ],
                  }));
    let U = (0, o.jsxs)("div", {
        className: iJ.Eh,
        children: [
            b &&
                p &&
                (0, o.jsx)("div", {
                    className: iJ.AX,
                    children: (0, o.jsx)(V.$, {
                        onClick: () => A(!1),
                        variant: "secondary",
                        text: Q.intl.string(Q.t["1MrpWO"]),
                        icon: n5.n,
                    }),
                }),
            t,
            (0, o.jsx)(iZ.F, {
                children: (0, o.jsxs)(w.eB, {
                    className: X.QX,
                    children: [
                        (0, o.jsx)(ej.A, {
                            alpha2: I.alpha2,
                            countryCode: I.code.split(" ")[0],
                            className: X.SX,
                            label: Q.intl.string(Q.t.tUjnxr),
                            error: lm("login", f) ?? lm("email", f),
                            onChange: _,
                            setRef: D,
                            autoCapitalize: "none",
                            autoComplete: "username webauthn",
                            autoCorrect: "off",
                            spellCheck: "false",
                            value: d,
                            autoFocus: !k && !O && !a,
                            required: !0,
                        }),
                        (0, o.jsx)(w.pd, {
                            label: Q.intl.string(Q.t["CIGa+7"]),
                            error: lm("password", f),
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
                            className: B()(X.SX, X.a5),
                            children: (0, o.jsx)(ed.Q, {
                                text: Q.intl.string(Q.t.wWIufs),
                                textVariant: "text-sm/normal",
                                onClick: () => {
                                    null != D.current && D.current.focus(), N();
                                },
                            }),
                        }),
                        (0, o.jsx)("div", {
                            className: X.QB,
                            children: (0, o.jsx)(V.$, {
                                text: Q.intl.string(Q.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                loading: y === R.aUe.LOGGING_IN,
                            }),
                        }),
                        (0, o.jsxs)("div", {
                            className: X.a5,
                            children: [
                                (0, o.jsx)("span", { className: iJ.Qt, children: Q.intl.string(Q.t.tmE73r) }),
                                (0, o.jsx)("span", {
                                    className: iJ.Z8,
                                    children: (0, o.jsx)(ed.Q, {
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
    return null != n && n.state === R.elq.RESOLVING
        ? (0, o.jsx)(ld, {
              authBoxClassName: s,
              country: I,
              login: d,
              password: m,
              onLoginChange: _,
              onPasswordChange: j,
              loginRef: D,
              passwordRef: G,
          })
        : null != i
          ? i.state === lh.QB.RESOLVING
              ? (0, o.jsx)(ld, {
                    authBoxClassName: s,
                    country: I,
                    login: d,
                    password: m,
                    onLoginChange: _,
                    onPasswordChange: j,
                    loginRef: D,
                    passwordRef: G,
                })
              : (0, o.jsx)(i8, {
                    onSubmit: v,
                    tag: "form",
                    className: B()(s, iJ.Sy),
                    children: () => [
                        (0, o.jsx)(i5.A, { guildTemplate: i }, "template"),
                        (0, o.jsx)(c.Fragment, { children: U }, "form-wrapper"),
                    ],
                })
          : b && !p
            ? (0, o.jsx)(lu, { onDismiss: () => A(!0), embedded: r })
            : (0, o.jsxs)("div", {
                  children: [
                      (0, o.jsx)(w.Ay, {
                          onSubmit: v,
                          tag: "form",
                          className: B()(s, { [iJ.M0]: O }),
                          transparent: r,
                          expanded: !0,
                          children: (0, o.jsxs)(eO.B, {
                              direction: r ? "vertical" : "horizontal",
                              align: r ? "stretch" : "center",
                              gap: r ? 24 : 64,
                              children: [
                                  U,
                                  (0, o.jsx)(i2.A, {
                                      horizontal: r,
                                      onAuthenticateSuccess: T,
                                      conditionalMediationAbortController: E,
                                  }),
                              ],
                          }),
                      }),
                      O && (0, o.jsx)(ls, {}),
                  ],
              });
}
var lf = n(572469);
function lx(e) {
    let { loginSource: t, giftCodeSKUId: n, isEmbedded: i = !1 } = e,
        l = (0, g.cf)(
            [eq.default],
            () => ({ ticket: eq.default.getMFATicket(), methods: eq.default.getMFAMethods() }),
            [],
        ),
        s = c.useCallback(
            (e) => {
                let { mfaType: i, data: l, ticket: s } = e;
                return (
                    H._.dispatch(R.jej.WAVE_EMPHASIZE),
                    x.A.loginMFAv2({ code: l, ticket: s, mfaType: i, source: t, giftCodeSKUId: n })
                );
            },
            [t, n],
        );
    return (0, o.jsx)(w.Ay, {
        transparent: i,
        style: { padding: 0 },
        children: (0, o.jsx)(lf.t, {
            mfaFinish: s,
            mfaChallenge: l,
            onEarlyClose: () => {
                f.h.dispatch({ type: "LOGIN_RESET" });
            },
            embedded: i,
        }),
    });
}
var lp = n(511815),
    lA = n(139033),
    lE = n(952116),
    l_ = n(491509),
    lj = n(913612),
    lv = n(933924);
let lN = (e) => n.g.location.assign(e);
function lC(e) {
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
    (0, lj.K)();
    let f = (0, g.bG)([eq.default], () => eq.default.isAuthenticated()),
        p = (0, g.bG)([b.A], () => b.A.isHandoffAvailable()),
        A = (0, g.bG)([eq.default], () => eq.default.getLoginStatus()),
        E = i?.skuId ?? null,
        j = (0, g.bG)([iU.A], () => (null != E ? iU.A.get(E) : null)),
        {
            checkingHandoff: v,
            redirecting: N,
            login: C,
            password: I,
            phoneVerifyError: T,
            dismissedChooseAccount: L,
            setDismissedChooseAccount: O,
            errors: k,
            conditionalMediationAbortController: P,
            loginSource: U,
            loginOrSSO: B,
            handleLogin: V,
            handleIPAuthorize: M,
            handlePasswordReset: W,
            handleForgotPassword: z,
            handleResendCode: K,
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
                [m, g] = c.useState(() => l),
                [f, p] = c.useState(() => s),
                [A, E] = c.useState(""),
                [_, j] = c.useState(() => {
                    let e = null != d ? (0, u.parse)(d.search) : {};
                    return e.email ?? e.login ?? "";
                }),
                [v, N] = c.useState(""),
                [C, I] = c.useState(!1),
                [b, S] = c.useState(null),
                [T, L] = c.useState(!1),
                [O] = c.useState(() => new AbortController()),
                [k, w] = c.useState({});
            !m || l || s || g(!1);
            let D = c.useMemo(() => {
                    if (null != h) return h;
                    if (null != i) return "gift";
                    if (null != n) return "guild_template";
                    if (null != t) {
                        if (null != t.guild) return "guild_invite";
                        if (null != t.channel) return "dm_invite";
                        if (null != t.inviter) return "friend_invite";
                    }
                    return null != a ? y(a) : null;
                }, [h, i, n, t, a]),
                G = null != i ? i.skuId : null,
                P = c.useCallback(
                    (e) => {
                        let t = null != e ? (0, u.parse)(e.search) : {};
                        if ((delete t.redirect_to, null != a)) {
                            if (ec(a)) return void eu(a);
                            r(a);
                        } else if (null == t.service) r(R.BVt.APP);
                        else {
                            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + R.Rsh.SSO,
                                n = { ...t, token: eq.default.getToken() };
                            window.location = `${e}?${(0, u.stringify)(n)}`;
                        }
                    },
                    [a, r],
                ),
                U = c.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e && null != t && (p(!0), n ? x.A.verifySSOToken("login").then(() => P(t)) : P(t));
                    },
                    [P],
                ),
                B = c.useCallback(() => {
                    O.abort("Login state reset"), w({}), x.A.loginReset();
                }, [O]),
                V = c.useCallback(
                    async function (e) {
                        let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e?.preventDefault(),
                            O.abort("Starting password login"),
                            H._.dispatch(R.jej.WAVE_EMPHASIZE),
                            w({});
                        try {
                            await x.A.login({
                                login: A + _,
                                password: v,
                                undelete: n ?? C,
                                source: D,
                                giftCodeSKUId: G,
                                invite: t,
                            });
                        } catch (e) {
                            w((0, tY.p)(e));
                        }
                    },
                    [O, _, A, v, C, D, G, t],
                ),
                M = c.useCallback(
                    async (e) => {
                        let t = A + _;
                        w({});
                        try {
                            let { token: n } = await eA.A.verifyPhone(t, e, !1);
                            await x.A.authorizeIPAddress(n), V();
                        } catch (e) {
                            null != e.body && null != e.body.message && S(e.body.message);
                        }
                    },
                    [A, _, V],
                ),
                W = c.useCallback(
                    async (e) => {
                        S(null);
                        try {
                            let { token: t } = await eA.A.verifyPhone(A + _, e, !1);
                            r(R.BVt.RESET, { search: (0, u.stringify)({ token: t, from_login: "true" }) });
                        } catch (e) {
                            null != e.body && null != e.body.message && S(e.body.message);
                        }
                    },
                    [A, _, r],
                ),
                z = c.useCallback(
                    async (e) => {
                        null != e && e.preventDefault();
                        let t = A + _;
                        w({});
                        try {
                            H._.dispatch(R.jej.WAVE_EMPHASIZE);
                            let e = await x.A.forgotPassword(t);
                            if (!1 === e) return;
                            e === lp.D.ONE_TIME_LOGIN
                                ? (0, nq.openModal)((e) => {
                                      let t = [
                                          {
                                              variant: "primary",
                                              text: Q.intl.string(Q.t.BddRzS),
                                              onClick: e.onClose,
                                              fullWidth: !0,
                                          },
                                      ];
                                      return (0, o.jsx)(nX.Modal, {
                                          title: Q.intl.string(Q.t["6Ecyts"]),
                                          actions: t,
                                          ...e,
                                          children: (0, o.jsx)(F.E, {
                                              variant: "text-md/normal",
                                              children: Q.intl.string(Q.t.iAcrqV),
                                          }),
                                      });
                                  })
                                : (0, lA.A)({
                                      title: Q.intl.string(Q.t.f5Pi7A),
                                      subtitle: Q.intl.format(Q.t["6u5hQ9"], { email: t }),
                                  });
                        } catch (e) {
                            w((0, tY.p)(e));
                        }
                    },
                    [A, _],
                ),
                K = c.useCallback(() => {
                    eA.A.resendCode(A + _);
                }, [A, _]),
                X = c.useCallback((e) => {
                    null != e && e.preventDefault(), x.A.loginReset(), N(""), E(""), j(""), I(!1), g(!1), p(!1), w({});
                }, []),
                q = c.useCallback(() => {
                    I(!0), V(void 0, { undelete: !0 });
                }, [V]),
                Y = c.useCallback(() => {
                    let e,
                        l = null != d ? (0, u.parse)(d.search) : {};
                    "" !== _ && (l.email = _),
                        null != t
                            ? ((l.mode = "register"), (e = R.BVt.INVITE(t.code)))
                            : null != i
                              ? ((l.mode = "register"), (e = R.BVt.GIFT_CODE(i.code)))
                              : null != n
                                ? (e = R.BVt.GUILD_TEMPLATE(n.code))
                                : null != a
                                  ? ((e = R.BVt.REGISTER), (l.redirect_to = a))
                                  : (e = R.BVt.REGISTER),
                        B(),
                        r(e, { search: (0, u.stringify)(l) }),
                        H._.dispatch(R.jej.WAVE_EMPHASIZE);
                }, [_, t, i, n, a, d, B, r]);
            return {
                checkingHandoff: m,
                redirecting: f,
                login: _,
                password: v,
                phoneVerifyError: b,
                dismissedChooseAccount: T,
                setDismissedChooseAccount: L,
                errors: k,
                conditionalMediationAbortController: O,
                loginSource: D,
                loginOrSSO: U,
                handleLogin: V,
                handleIPAuthorize: M,
                handlePasswordReset: W,
                handleForgotPassword: z,
                handleResendCode: K,
                handleReset: X,
                handleCancelAccountDeletion: q,
                handleGotoRegister: Y,
                loginReset: B,
                onLoginChange: c.useCallback((e, t) => {
                    j(e), E(t);
                }, []),
                onPasswordChange: c.useCallback((e) => {
                    N(e);
                }, []),
            };
        })({
            invite: t,
            guildTemplate: n,
            giftCode: i,
            handoffAvailable: p,
            authenticated: f,
            transitionTo: r ?? lN,
            redirectTo: s,
            location: l,
            loginSource: h,
        });
    (0, iY.Ay)(() => {
        p && !f ? (0, _.ST)() : f && B(f, l, !0),
            S.default.track(
                R.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: U,
                    authenticated: f,
                    ...(null != j ? (0, l_.A)(j, !1, !1) : {}),
                    source: (0, D.PR)(),
                },
                { flush: !0 },
            ),
            f || (0, lv.a)({ abortController: P, loginSource: U, giftCodeSKUId: E }),
            x.A.getLocationMetadata(),
            (0, G.d0)("login");
    });
    let et = (0, i$.Ay)(f);
    if (
        (c.useEffect(() => {
            let e = v && (p || N);
            f && !1 === et && !e && (P.abort("Transitioning to authenticated state"), B(f, l));
        }, [f, p, et, N, v, P, B, l]),
        N || v)
    )
        return (0, o.jsx)(w.Ay, { transparent: d, children: (0, o.jsx)(ew.y, {}) });
    if (p)
        return (0, o.jsxs)(w.Ay, {
            className: a,
            transparent: d,
            children: [
                (0, o.jsx)(w.CK, {}),
                (0, o.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.S6RMNA) }),
                (0, o.jsx)(w.tK, { children: Q.intl.string(Q.t.YZiJbh) }),
            ],
        });
    switch (A) {
        case R.aUe.LOGGING_IN_MFA_SMS:
        case R.aUe.MFA_SMS_STEP:
        case R.aUe.LOGGING_IN_MFA:
        case R.aUe.MFA_STEP:
            return (0, o.jsx)(lx, { loginSource: U, giftCodeSKUId: E, isEmbedded: d });
        case R.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case R.aUe.ACCOUNT_DISABLED:
            return (0, o.jsx)(i0, {
                loginStatus: A,
                authBoxClassName: a,
                transparent: d,
                onSubmit: q,
                onCancelAccountDeletion: Y,
            });
        case R.aUe.PHONE_IP_AUTHORIZATION:
            return (0, o.jsx)(w.Ay, {
                tag: "form",
                className: a,
                transparent: d,
                children: (0, o.jsx)(lE.A, {
                    title: Q.intl.string(Q.t.w55Oco),
                    subtitle: Q.intl.format(Q.t.CfRZBj, { onResendClick: K }),
                    error: T,
                    onSubmit: M,
                    onCancel: Z,
                }),
            });
        case R.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, o.jsx)(w.Ay, {
                tag: "form",
                className: a,
                transparent: d,
                children: (0, o.jsx)(lE.A, {
                    title: Q.intl.string(Q.t["+xqy3d"]),
                    subtitle: Q.intl.format(Q.t.ef4uZ7, { onResendClick: K }),
                    error: T,
                    onSubmit: W,
                    onCancel: Z,
                }),
            });
        case R.aUe.LOGGING_IN:
        case R.aUe.NONE:
        default:
            return (0, o.jsx)(lg, {
                invite: t,
                guildTemplate: n,
                giftCode: i,
                authBoxClassName: a,
                isEmbedded: d,
                disableAutofocusOnDefaultForm: m,
                login: C,
                password: I,
                errors: k,
                loginSource: U,
                dismissedChooseAccount: L,
                setDismissedChooseAccount: O,
                conditionalMediationAbortController: P,
                onLoginChange: J,
                onPasswordChange: ee,
                handleLogin: V,
                handleForgotPassword: z,
                handleGotoRegister: $,
            });
    }
}
var lI = n(664294);
let ly = null,
    lb = "underage";
class lS extends g.Ay.Store {
    static displayName = "AgeGateStore";
    isUnderageAnonymous() {
        if (nF.isPlatformEmbedded && 1) {
            if (null != ly && ly + t2.bm > Date.now()) return !0;
        } else if (1) return null != lI.parse(document.cookie)[lb];
        return !1;
    }
}
let lT = new lS(f.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        (ly = Date.now()), (document.cookie = `${lb}=1;path=/`);
    },
    LOGIN_SUCCESS: function () {
        (ly = null), (document.cookie = `${lb}=1;path=/;max-age=0`);
    },
});
var lR = n(509434),
    lL = n(970116);
let lO = function () {
    return (0, o.jsx)(w.Ay, {
        children: (0, o.jsxs)("div", {
            className: lL.hQ,
            children: [
                (0, o.jsx)(w.hE, { className: lL.DD, children: Q.intl.string(Q.t.nCB6Ga) }),
                (0, o.jsx)(w.tK, {
                    className: lL.VA,
                    children: Q.intl.format(Q.t.KQgoxG, { underageMessage: Q.intl.string(Q.t.WqEH4D) }),
                }),
                (0, o.jsx)(V.$, {
                    icon: lR.I,
                    text: Q.intl.string(Q.t.hvVgAZ),
                    onClick: () => window.open(n0.A.getArticleURL(R.MVz.AGE_GATE), "_blank"),
                    iconPosition: "end",
                }),
            ],
        }),
    });
};
n(994555), n(827343), n(792251), n(19575), n(945041);
var lk = n(493527),
    lw = n(544395);
function lD(e) {
    let {
            initialEmail: t,
            invite: n,
            giftCode: i,
            guildTemplate: l,
            onApiErrors: s,
            onEmailChange: r,
            onGotoLogin: a,
            onRegister: u,
        } = e,
        [d, h] = c.useState(!1),
        [m, f] = c.useState(!1);
    async function x() {
        b.length > 0 && !lw.A.wasRegistrationSuggestionFetched(b) && (await lk.A.fetchSuggestionsRegistration(b));
    }
    function p(e) {
        S.default.track(R.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function A(e) {
        S.default.track(R.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    let E = (0, g.bG)([tz.A], () => tz.A.getAuthenticationConsentRequired()),
        _ = (0, g.bG)([lw.A], () => lw.A.registrationUsernameSuggestion()),
        j = c.useRef(null),
        v = c.useRef(null),
        N = c.useRef(null),
        C = c.useRef(null),
        [I, y] = c.useState(t),
        [b, T] = c.useState(""),
        [L, O] = c.useState(""),
        [k, D] = c.useState(""),
        [G, P] = c.useState(null),
        [U, M] = tH(E),
        [W, z] = c.useState(!1),
        [K, q] = tW(),
        [Y, $] = c.useState({}),
        { message: Z, email: J, username: ee, global_name: et, password: en, date_of_birth: ei } = Y,
        [el, es] = c.useState(null),
        [er, ea] = c.useState(null),
        [eo, ec] = c.useState(null),
        [eu, eh] = c.useState(null),
        em = null != E && U;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: i, globalNameRef: l, passwordRef: s } = e,
            r = (0, i$.Ay)(t);
        c.useEffect(() => {
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
    })({ apiErrors: Y, emailRef: j, usernameRef: v, globalNameRef: N, passwordRef: C });
    let eg = c.useCallback(async () => {
            let e = null != i ? i.skuId : null,
                t = tq.mZ.getState(),
                r = (0, ij.uJ)(_) ? null : L === _;
            H._.dispatch(R.jej.WAVE_EMPHASIZE), z(!0), $({});
            try {
                await t4({
                    email: I,
                    username: L,
                    globalName: b,
                    consent: U,
                    password: k,
                    invite: n?.code,
                    usedUsernameSuggestion: r,
                    guildTemplateCode: l?.code,
                    giftCodeSKUId: e,
                    birthday: G,
                    promoEmailConsent: t.required ? t : null,
                }),
                    u?.();
            } catch (t) {
                if ((z(!1), !(t instanceof tX.LG))) return;
                let e = (0, tY.W)(t);
                $(e), s?.(e), "number" == typeof e.retry_after && q(e.retry_after);
            }
        }, [i, l, n, I, s, u, _, L, b, k, G, U, q]),
        ef = c.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == E)) return;
                let t = !1;
                0 === I.length && (es(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    0 === L.length && (ea(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    0 === k.length && (ec(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    null == G && (eh(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    t || eg();
            },
            [I, L, k, G, E, eg],
        ),
        ex = null;
    return (
        "string" == typeof Z && (ex = (0, o.jsx)(w.ME, { className: B()(X.QX, t5.gJ), children: Z })),
        (0, o.jsx)("form", {
            onSubmit: ef,
            children: (0, o.jsxs)(w.eB, {
                className: X.QX,
                children: [
                    (0, o.jsx)(w.pd, {
                        autoFocus: !0,
                        className: X.SX,
                        label: Q.intl.string(Q.t.dI4d4S),
                        name: "email",
                        value: I,
                        onChange: (e) => {
                            y(e), r?.(e), es(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null);
                        },
                        error: el ?? tM(J),
                        type: "email",
                        autoComplete: "username",
                        setRef: j,
                        required: !0,
                        onFocus: () => p("email"),
                        onBlur: () => A("email"),
                    }),
                    (0, o.jsx)(w.pd, {
                        label: Q.intl.string(Q.t["9AjdkD"]),
                        className: X.SX,
                        name: "global_name",
                        value: b,
                        onChange: T,
                        error: tM(et),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: N,
                        onFocus: () => {
                            h(!0), p("global_name");
                        },
                        onBlur: () => {
                            h(!1), A("global_name");
                        },
                    }),
                    (0, o.jsx)(no, {
                        show: d,
                        top: -12,
                        bottom: 20,
                        children: (0, o.jsx)(F.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: Q.intl.string(Q.t["330TCc"]),
                        }),
                    }),
                    (0, o.jsxs)("div", {
                        onBlur: () => f(!1),
                        onFocus: () => {
                            f(!0), x();
                        },
                        tabIndex: -1,
                        children: [
                            (0, o.jsx)(w.pd, {
                                label: Q.intl.string(Q.t.TWzdWj),
                                className: X.SX,
                                name: "username",
                                value: L,
                                onChange: (e) => {
                                    O(e.toLocaleLowerCase()), ea(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null);
                                },
                                error: er ?? tM(ee),
                                autoComplete: "off",
                                setRef: v,
                                required: !0,
                                onFocus: () => p("username"),
                                onBlur: () => A("username"),
                            }),
                            (0, o.jsx)(nc, {
                                username: L,
                                suggestion: _,
                                globalName: b,
                                isUsernameFocused: m,
                                onClickSuggestion: () => {
                                    v.current?.focus(), null != _ && _.length > 0 && (O(_), ea(null));
                                },
                            }),
                        ],
                    }),
                    (0, o.jsx)(w.pd, {
                        label: Q.intl.string(Q.t["CIGa+7"]),
                        name: "password",
                        value: k,
                        onChange: (e) => {
                            D(e), ec(0 === e.length ? Q.intl.string(Q.t.EkokLy) : null);
                        },
                        error: eo ?? tM(en),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: C,
                        required: !0,
                        onFocus: () => p("password"),
                        onBlur: () => A("password"),
                    }),
                    (0, o.jsx)(nn.A, {
                        label: Q.intl.string(Q.t.rhBeKe),
                        wrapperClassName: t5.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            P(e), null != e && eh(null);
                        },
                        error: eu ?? tM(ei),
                        value: G,
                        required: !0,
                        onFocus: p,
                        onBlur: A,
                    }),
                    (0, o.jsx)(t6, {}),
                    (0, o.jsx)(t7, { consent: U, consentRequired: E, onConsentChange: M }),
                    (0, o.jsx)(tK.m, {
                        text: !U && E ? Q.intl.string(Q.t.AY4IVA) : null,
                        children: (0, o.jsx)("div", {
                            className: X.QX,
                            children: (0, o.jsx)(V.$, {
                                text: Q.intl.string(Q.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: W,
                                disabled: !em || K,
                            }),
                        }),
                    }),
                    ex,
                    (0, o.jsx)("div", {
                        className: X.QX,
                        children: (0, o.jsx)(ed.Q, {
                            text: Q.intl.string(Q.t["1lWxux"]),
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
var lG = n(713654),
    lP = n(331722);
function lU(e) {
    let { channel: t } = e,
        n = (0, lG._U)(t.type);
    return (0, o.jsxs)("div", {
        className: lP.Nj,
        children: [
            null != n ? (0, o.jsx)(n, { color: "currentColor", size: "custom", width: 20, height: 20 }) : null,
            (0, o.jsx)(F.E, { className: lP.dN, color: "none", variant: "text-sm/semibold", children: t.name }),
        ],
    });
}
function lB(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, o.jsxs)("div", {
        className: lP.kL,
        children: [
            (0, o.jsx)(ty.Uq, { className: lP.II, guildId: n.guild_id, guildEvent: n, eventPreview: n }),
            (0, o.jsx)(ty.sC, { name: n.name, description: n.description, guildId: n.guild_id }),
            null != t && n.channel_id === t.id ? (0, o.jsx)(lU, { channel: t }) : null,
        ],
    });
}
var lF = n(231698);
function lV(e) {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let i = em.DY(t),
        { name: l, description: s } = i;
    return (0, o.jsxs)("div", {
        children: [
            (0, o.jsx)(ek.D, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: lF.CT,
                children: Q.intl.string(Q.t.Eabu1z),
            }),
            (0, o.jsxs)("div", {
                className: lF.EB,
                children: [
                    (0, o.jsx)(tG.Ay, {
                        mask: tG.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, o.jsx)(tI.Ay, { guild: i, size: tI.Ay.Sizes.MEDIUM, active: !0 }),
                    }),
                    (0, o.jsxs)("div", {
                        className: lF.OA,
                        children: [
                            (0, o.jsx)(ek.D, { variant: "heading-sm/semibold", children: l }),
                            (0, o.jsxs)("div", {
                                className: lF.aH,
                                children: [
                                    (0, o.jsx)("div", { className: lF.Om }),
                                    null != n && n > 0
                                        ? (0, o.jsx)(F.E, {
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
                (0, o.jsx)(F.E, { color: "text-default", className: lF.CT, variant: "text-sm/normal", children: s }),
        ],
    });
}
function lM(e) {
    let { authBoxClassName: t, name: n, onNameChange: i } = e;
    return (0, o.jsxs)(w.Ay, {
        className: t,
        children: [
            (0, o.jsx)(i1.M, {}),
            (0, o.jsxs)(w.eB, {
                className: t5.y0,
                children: [
                    (0, o.jsx)(tK.m, {
                        text: Q.intl.string(Q.t["hBB85/"]),
                        position: "right",
                        children: (0, o.jsx)(w.pd, {
                            label: Q.intl.string(Q.t["9AjdkD"]),
                            autoFocus: !0,
                            className: X.QB,
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
                    (0, o.jsx)(F.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: B()(X.QX, t5.E2),
                        children: Q.intl.format(Q.t["KI+BSb"], { termsURL: R.X7G.TERMS, privacyURL: R.X7G.PRIVACY }),
                    }),
                    (0, o.jsx)("div", {
                        className: X.Ot,
                        children: (0, o.jsx)(V.$, {
                            text: Q.intl.string(Q.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, o.jsx)("div", {
                        className: X.QX,
                        children: (0, o.jsx)(ed.Q, {
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
function lH(e) {
    let { consentRequired: t, consent: n, registering: i } = e,
        l = c.useMemo(() => null != t && n, [t, n]);
    return (0, o.jsx)(tK.m, {
        text: !n && t ? Q.intl.string(Q.t.AY4IVA) : null,
        children: (0, o.jsx)("div", {
            className: X.Ot,
            children: (0, o.jsx)(V.$, {
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
function lW(e) {
    let { invite: t, authBoxClassName: n, hideInviteHeader: i = !1, onApiErrors: l, onGotoLogin: s, onRegister: r } = e,
        a = (0, g.bG)([tz.A], () => tz.A.getAuthenticationConsentRequired()),
        u = t?.guild_scheduled_event != null,
        d = c.useRef(null),
        h = null;
    h = i
        ? null
        : t?.guild_scheduled_event != null
          ? (0, o.jsx)(lB, { channel: t.channel, guildScheduledEvent: t.guild_scheduled_event })
          : (0, o.jsx)("div", { className: X.S3, children: (0, o.jsx)(i1.A, { invite: t, inUnclaimedFlow: !0 }) });
    let [m, f] = c.useState(""),
        [x, p] = c.useState(null),
        [A, E] = tH(a),
        [_, j] = c.useState(!1),
        [v, N] = c.useState({}),
        { username: C, global_name: I, date_of_birth: y } = v,
        [b, T] = tW();
    c.useEffect(() => {
        null == x && d.current?.focus();
    }, [x, d]);
    let [L, O] = c.useState(null),
        [k, D] = c.useState(null),
        G = c.useCallback(async () => {
            H._.dispatch(R.jej.WAVE_EMPHASIZE), j(!0), N({});
            try {
                await (function (e) {
                    let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
                    return t4({ ...i, invite: t, giftCodeSKUId: n });
                })({ consent: A, invite: t.code, globalName: m, birthday: x }),
                    r?.();
            } catch (t) {
                if ((j(!1), !(t instanceof tX.LG))) return;
                let e = (0, tY.W)(t);
                N(e), l?.(e), "number" == typeof e.retry_after && T(e.retry_after);
            }
        }, [t, m, x, A, l, r, T, N, j]),
        P = c.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === a)) return;
                let t = !1;
                0 === m.length && (O(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    null == x && (D(Q.intl.string(Q.t.EkokLy)), (t = !0)),
                    t || G();
            },
            [m, x, a, G, O, D],
        );
    return t.state === R.elq.RESOLVING
        ? (0, o.jsx)(lM, { authBoxClassName: n, name: m, onNameChange: f })
        : (0, o.jsxs)("div", {
              children: [
                  (0, o.jsx)(w.Ay, {
                      tag: "section",
                      className: n,
                      children: (0, o.jsxs)("form", {
                          onSubmit: P,
                          children: [
                              h,
                              u ? (0, o.jsx)("div", { className: t5.yF }) : null,
                              (0, o.jsxs)(w.eB, {
                                  className: u ? void 0 : t5.y0,
                                  children: [
                                      (0, o.jsx)(tQ.k, {
                                          helperText: Q.intl.string(Q.t["330TCc"]),
                                          label: Q.intl.string(Q.t["9AjdkD"]),
                                          error: L ?? tM(I ?? C),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: m,
                                          placeholder: Q.intl.string(Q.t["09Q8yp"]),
                                          onChange: f,
                                          onFocus: () => {
                                              S.default.track(R.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              S.default.track(R.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, o.jsx)(nn.A, {
                                          label: Q.intl.string(Q.t.rhBeKe),
                                          wrapperClassName: t5.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              p(e), null != e && D(null);
                                          },
                                          error: k ?? tM(y),
                                          value: x,
                                      }),
                                      (0, o.jsx)(t7, { consent: A, consentRequired: a, onConsentChange: E }),
                                      (0, o.jsx)(lH, { consentRequired: a, consent: A, registering: _ }),
                                      (0, o.jsx)("div", {
                                          className: X.QX,
                                          children: (0, o.jsx)(ed.Q, {
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
                  null != t && u
                      ? (0, o.jsx)(w.Ay, {
                            className: X.QX,
                            children: (0, o.jsx)(lV, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
var lz = n(942614);
n(100544);
var lQ =
        (((r = {}).IDENTITY = "identity"),
        (r.DISPLAY_NAME = "display_name"),
        (r.ACCOUNT_INFORMATION = "account_information"),
        (r.FULL = "full"),
        (r.AGE_GATE = "age_gate"),
        (r.INVITE = "invite"),
        (r.SMS_VERIFY = "sms_verify"),
        r),
    lK = n(771016);
function lX(e) {
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
            transitionTo: p = D.pX,
        } = e,
        A = (0, g.bG)([tz.A], () => tz.A.getAuthenticationConsentRequired()),
        E = (0, g.bG)([eq.default], () => eq.default.isAuthenticated()),
        _ = (0, g.bG)([lT], () => lT.isUnderageAnonymous()),
        j = (0, g.bG)([lr.A], () => lr.A.getHasLoggedInAccounts()),
        v = null != e.location ? (0, u.parse)(e.location.search) : {},
        [N, C] = c.useState(v.email ?? ""),
        [I, y] = c.useState({}),
        b = (0, i$.Ay)(E),
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
        L = null != s && (null != s.guild || null != s.channel),
        O = null != s && null == s.guild && null == s.channel && null != s.inviter,
        k = c.useCallback(() => {
            E && (null != h ? p(h) : p(eh.A.defaultRoute));
        }, [E, h, p]);
    (0, iY.Ay)(() => {
        k(),
            S.default.track(
                R.HAw.REGISTER_VIEWED,
                {
                    location: null != s ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: T,
                    ...(null != i ? (0, l_.A)(i, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == A && x.A.getLocationMetadata(),
            (0, G.d0)("register");
    }),
        c.useEffect(() => {
            E && !1 === b && ((0, lz.C)(lK.zY.ORGANIC_REGISTERED), k());
        }, [E, b, k]);
    let P = lQ.FULL;
    _ || null != I.date_of_birth ? (P = lQ.AGE_GATE) : L && (P = lQ.INVITE),
        (0, la.A)(
            {
                type: d.ImpressionTypes.VIEW,
                name: d.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: d.ImpressionGroups.USER_REGISTRATION_FLOW, step: P },
            },
            {},
            [P],
        );
    let U = c.useCallback(
        (e) => {
            let t,
                i = null != a ? (0, u.parse)(a.search) : {};
            null != s
                ? (t = R.BVt.INVITE_LOGIN(s.code))
                : null != n
                  ? (t = R.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != l
                    ? (t = R.BVt.GUILD_TEMPLATE_LOGIN(l.code))
                    : null != h
                      ? ((t = R.BVt.LOGIN), (i.redirect_to = h))
                      : ((t = R.BVt.LOGIN), "" !== N && (i = { email: N })),
                x.A.loginReset(),
                p(t, { search: (0, u.stringify)(i), source: "register" }),
                m?.(e),
                H._.dispatch(R.jej.WAVE_EMPHASIZE);
        },
        [N, s, n, l, h, a, m, p],
    );
    if (_ || null != I.date_of_birth) return (0, o.jsx)(lO, {});
    if (null != s && L)
        return (0, o.jsx)(lW, {
            invite: s,
            authBoxClassName: t,
            hideInviteHeader: r,
            onApiErrors: y,
            onGotoLogin: U,
            onRegister: f,
        });
    let F = (0, o.jsx)(w.hE, { children: Q.intl.string(Q.t.wC4TlR) }, "title"),
        M = !1;
    null != l
        ? ((F = (0, o.jsx)(i5.A, { guildTemplate: l })), (M = !0))
        : null != n
          ? (F = (0, o.jsx)(iq, { giftCode: n }))
          : !r &&
            null != s &&
            O &&
            s.state === R.elq.RESOLVED &&
            (F = (0, o.jsx)("div", { className: X.S3, children: (0, o.jsx)(i1.A, { invite: s, isRegister: !0 }) }));
    let W = (0, o.jsx)(lD, {
        initialEmail: v.email ?? "",
        invite: s,
        giftCode: n,
        guildTemplate: l,
        onApiErrors: y,
        onEmailChange: C,
        onGotoLogin: U,
        onRegister: f,
    });
    return M
        ? (0, o.jsx)(i8, {
              tag: "section",
              className: B()(t, t5.Sy),
              children: () => [
                  F,
                  (0, o.jsxs)(
                      "div",
                      {
                          className: t5.Uu,
                          children: [(0, o.jsx)(w.hE, { className: t5.lR, children: Q.intl.string(Q.t.wC4TlR) }), W],
                      },
                      "register-title",
                  ),
              ],
          })
        : (0, o.jsxs)(w.Ay, {
              tag: "section",
              className: t,
              children: [
                  j
                      ? (0, o.jsx)("div", {
                            className: t5.AX,
                            children: (0, o.jsx)(V.$, {
                                onClick: U,
                                variant: "secondary",
                                text: Q.intl.string(Q.t["1MrpWO"]),
                                icon: n5.n,
                                iconPosition: "start",
                            }),
                        })
                      : null,
                  F,
                  W,
              ],
          });
}
g.Ay.initialize(), g.Ay.initialize();
class lq extends c.PureComponent {
    state = { error: null, continueOnWeb: !1, currentUser: null, sentVerification: !1, fetchingUser: !1 };
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, G.d0)("gift_code");
    }
    componentDidUpdate(e) {
        let { authenticated: t, isResolved: n } = this.props;
        n ||
            f.h.wait(() => {
                this.resolveGiftCode();
            }),
            t && !e.authenticated && this.handleAuthenticated(),
            !t && e.authenticated && this.setState({ currentUser: null });
    }
    handleAuthenticated() {
        let { currentUser: e } = this.state;
        iw.Yq(), null == e && this.refreshUser();
    }
    refreshUser = () => {
        this.setState({ fetchingUser: !0 }),
            n$
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
            this.setState({ error: null }), await p.Ay.redeemGiftCode({ code: n }), e(R.BVt.APP);
        } catch (e) {
            this.setState({ error: e });
        }
    };
    resolveGiftCode = () => {
        let { transitionTo: e } = this.props,
            t = this.getCode();
        p.Ay.resolveGiftCode(t, !0, !0)
            .then((n) => {
                null != n && null != n.giftCode.promotion && e(R.BVt.BILLING_PROMOTION_REDEMPTION(t));
            })
            .catch(p.Ay.reportUnexpectedGiftCodeError);
    };
    renderSpinner(e) {
        return (0, o.jsxs)(w.Ay, { children: [(0, o.jsx)(w.hE, { children: e }), (0, o.jsx)(w.CK, {})] });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, o.jsxs)(w.Ay, {
            children: [
                (0, o.jsx)(w.hE, { className: B()(X.Ot, X.QB), children: Q.intl.string(Q.t.KPowgn) }),
                (0, o.jsx)(w.tK, { children: Q.intl.string(Q.t.j8734b) }),
                (0, o.jsx)("div", {
                    className: B()(X.eT, X.QB),
                    children: (0, o.jsx)(V.$, { text: Q.intl.string(Q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, o.jsx)(ed.Q, {
                    text: Q.intl.string(Q.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(n0.A.getArticleURL(R.MVz.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, o.jsxs)(w.Ay, {
            children: [
                (0, o.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.csrAMJ) }),
                (0, o.jsx)(w.tK, { children: Q.intl.string(Q.t["m1+IBn"]) }),
                (0, o.jsx)("div", {
                    className: X.eT,
                    children: (0, o.jsx)(V.$, {
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
        return (0, o.jsxs)(w.Ay, {
            children: [
                (0, o.jsx)(w._V, { src: n(792525), className: X.QB }),
                (0, o.jsx)(w.hE, { children: Q.intl.format(Q.t["ivLUf/"], { username: e.username }) }),
                (0, o.jsx)(w.tK, { className: X.QX, children: Q.intl.string(Q.t["8Su18+"]) }),
                (0, o.jsx)("div", {
                    className: X.eT,
                    children: (0, o.jsx)(V.$, {
                        text: t ? Q.intl.string(Q.t.CMa9Rv) : Q.intl.string(Q.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, o.jsx)("div", {
                    className: X.Ot,
                    children: (0, o.jsx)(ed.Q, {
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
        return (0, o.jsx)(l$, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: i,
            children: (0, o.jsxs)(w.Ay, {
                children: [
                    (0, o.jsx)(iq, { giftCode: e }),
                    (0, o.jsx)("div", {
                        className: X.eT,
                        children: (0, o.jsx)(V.$, {
                            text: Q.intl.string(Q.t.n6I6k4),
                            fullWidth: !0,
                            disabled: null != l,
                            onClick: this.handleAccept,
                        }),
                    }),
                    null != l
                        ? (0, o.jsx)(w.tK, { className: X.QX, children: l })
                        : (0, o.jsx)(w.ME, {
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
                giftCode: i,
                isResolved: l,
                isAccepting: s,
                transitionTo: r,
                location: a,
            } = this.props,
            { fetchingUser: c, continueOnWeb: u } = this.state;
        if (e === R.fAW.OPEN && !u) return this.renderAppOpened();
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
                ? (0, o.jsx)(lC, { giftCode: i, transitionTo: r, location: a })
                : (0, o.jsx)(lX, { giftCodeSKU: t, giftCode: i, transitionTo: r, location: a });
        }
        return null;
    }
}
let lY = g.Ay.connectStores([iu.A, iP.A, eq.default, iU.A, eh.A, iD.A], (e) => {
    let t = e.match.params.giftCode,
        n = iu.A.get(t),
        i = null != n ? iU.A.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: i,
        libraryApplication: null != i && n?.entitlementBranches != null ? iB.YI(n.entitlementBranches, i, iP.A) : null,
        authenticated: eq.default.isAuthenticated(),
        defaultRoute: eh.A.defaultRoute,
        isResolved: iu.A.getIsResolved(t),
        isAccepting: iu.A.getIsAccepting(t),
        libraryApplicationsFetched: iP.A.fetched,
        nativeAppState: iD.A.getState(t),
    };
})(lq);
function l$(e) {
    let { sku: t, children: n, giftCodeCode: i, transitionTo: l } = e,
        s = (0, iG.bF)(t);
    return (c.useEffect(() => {
        null != i && s && l(R.BVt.APP_WITH_GIFT_CODE(i));
    }, [s, i, l]),
    s)
        ? (0, o.jsxs)(w.Ay, {
              children: [(0, o.jsx)(w.hE, { children: Q.intl.string(Q.t.b3lf1c) }), (0, o.jsx)(w.CK, {})],
          })
        : n;
}
var lZ = n(871194),
    lJ = n(799365),
    l0 = n(894778),
    l1 = n(315290),
    l2 = n(396574),
    l4 = n(838697);
g.Ay.initialize();
class l8 extends c.PureComponent {
    componentDidMount() {
        (0, G.d0)("guildTemplate"),
            l2.VP || eY.A.launch("discord://" + R.BVt.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && eS.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return l2.VP
            ? (0, o.jsx)("div", { className: X.eT, children: (0, o.jsx)(V.$, { text: e, fullWidth: !0, onClick: t }) })
            : (0, o.jsx)(w.KE, { className: X.eT });
    }
    renderSpinner(e) {
        return (0, o.jsxs)(w.Ay, { children: [(0, o.jsx)(w.hE, { children: e }), (0, o.jsx)(w.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, o.jsxs)(w.Ay, {
            children: [
                (0, o.jsx)(w.hE, { className: B()(X.Ot, X.QB), children: Q.intl.string(Q.t.C7ZRNw) }),
                (0, o.jsx)(w.tK, { children: Q.intl.string(Q.t.A6MwXE) }),
                this.renderButton(Q.intl.string(Q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, o.jsxs)(w.Ay, {
            children: [
                (0, o.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.csrAMJ) }),
                (0, o.jsx)(w.tK, { children: Q.intl.string(Q.t["m1+IBn"]) }),
                this.renderButton(Q.intl.string(Q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (eH()(null != e, "guild template must not be null"), e.state === lh.QB.RESOLVING)
            ? (0, o.jsx)(w.Ay, { className: l4.sL, children: (0, o.jsx)(lJ.A, { guildTemplate: e }) })
            : (0, o.jsx)(l5, { guildTemplate: e });
    }
    renderContinue() {
        return (0, o.jsxs)(w.Ay, {
            children: [
                (0, o.jsx)(w.hE, { children: Q.intl.string(Q.t.fOc4gn) }),
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
            case lh.QB.RESOLVING:
                return this.renderSpinner(Q.intl.string(Q.t["Z+hCVU"]));
            case lh.QB.RESOLVED:
                if (n || !l2.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, o.jsx)(lC, { guildTemplate: e, transitionTo: i, location: l });
                return (0, o.jsx)(lX, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: l,
                    onRegister: () => {
                        (0, lz.C)(lK.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            l0.A.flowStart(l1.do.ORGANIC_GUILD_TEMPLATES, l1.ju.NUF_STARTED);
                    },
                });
            case lh.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function l5(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, lZ.A)(t, !1);
    l0.A.flowStep(l1.do.ORGANIC_GUILD_TEMPLATES, l1.jC.GUILD_CREATE);
    let l = (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(w.hE, { className: l4.wx, children: Q.intl.string(Q.t.UNFvtM) }),
            n,
            (0, o.jsx)("div", {
                className: l4.Tf,
                children: (0, o.jsx)(V.$, { text: Q.intl.string(Q.t.xr59t7), fullWidth: !0, onClick: i }),
            }),
        ],
    });
    return (0, o.jsx)(i8, {
        className: l4.sL,
        children: () => [
            (0, o.jsx)(i5.A, { guildTemplate: t }, "template"),
            (0, o.jsx)("div", { className: l4.KJ, children: l }, "contents"),
        ],
    });
}
function l7(e, t, n) {
    e.preventDefault(),
        S.default.track(R.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        });
    let i = eq.default.getFingerprint(),
        l = null != i ? i : eq.default.getId();
    eS.A.openMobileApp(n.state === lh.QB.RESOLVED ? t : void 0, l);
}
function l6(e) {
    let { code: t } = e,
        n = (0, g.bG)([eb.A], () => eb.A.getGuildTemplate(t));
    return (c.useEffect(() => {
        (0, G.d0)("guild_template_mobile");
    }, []),
    null == n || n.state === lh.QB.RESOLVING)
        ? (0, o.jsx)(w.Ay, { children: (0, o.jsx)(ew.y, {}) })
        : n.state === lh.QB.RESOLVED
          ? (0, o.jsxs)(w.Ay, {
                children: [
                    (0, o.jsx)(lJ.A, { guildTemplate: n, tall: !0 }),
                    (0, o.jsx)("div", {
                        className: X.QX,
                        children: (0, o.jsx)(V.$, {
                            text: Q.intl.string(Q.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => l7(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, o.jsx)(e7, {
                text: Q.intl.string(Q.t["e/rZ2n"]),
                buttonCta: Q.intl.string(Q.t.HAvYn0),
                onClick: (e) => l7(e, t, n),
            });
}
g.Ay.initialize(), n(938796);
var l3 = n(821418),
    l9 = n(665260),
    se = n(362474),
    st = n(695366),
    sn = n(964486),
    si = (((a = {}).CHART = "chart"), (a.HIGHLIGHTS = "highlights"), a);
let sl = (0, ny.mj)({
    name: "2026-07-invite-server-liveliness",
    kind: "installation",
    defaultConfig: { enabled: !1, variant: null },
    variations: { 1: { enabled: !0, variant: "chart" }, 2: { enabled: !0, variant: "highlights" } },
});
var ss = n(575181),
    sr = n(943255),
    sa = n(406810),
    so = n(81466),
    sc = n(27232),
    su = n(825860);
function sd(e) {
    return { h: e % 12 == 0 ? 12 : e % 12, ampm: e < 12 || 24 === e ? "am" : "pm" };
}
function sh(e) {
    let t = Math.round(-new Date().getTimezoneOffset() / 60),
        n = Array(168);
    for (let i = 0; i < 168; i++) {
        let l = (((i - t) % 168) + 168) % 168;
        n[i] = e[l] ?? 0;
    }
    return n;
}
let sm = { morning: 7, afternoon: 5, evening: 4, night: 8 };
function sg(e) {
    return e >= 5 && e < 12 ? "morning" : e >= 12 && e < 17 ? "afternoon" : e >= 17 && e < 21 ? "evening" : "night";
}
function sf(e) {
    let t,
        n,
        i = Array(24).fill(0),
        l = Array(7).fill(0),
        s = 0;
    for (let t = 0; t < 168; t++) {
        let n = e[t] ?? 0;
        (i[t % 24] += n), (l[Math.floor(t / 24)] += n), (s += n);
    }
    if (0 === s) return null;
    let r = { morning: 0, afternoon: 0, evening: 0, night: 0 };
    for (let e = 0; e < 24; e++) r[sg(e)] += i[e] ?? 0;
    let a = "evening",
        o = -1;
    Object.keys(r).forEach((e) => {
        let t = r[e] / sm[e];
        t > o && ((o = t), (a = e));
    });
    let c = 24 - sm[a],
        u = c > 0 ? (s - r[a]) / c : o,
        d = u > 0 ? o / u : 1 / 0,
        h = (l[0] ?? 0) + (l[6] ?? 0),
        m = h / 2,
        g = (s - h) / 5,
        f = m >= g ? "weekend" : "weekday",
        x = Math.max(m, g),
        p = Math.min(m, g),
        A = p > 0 ? x / p : 1 / 0,
        E = d >= 1.3,
        _ = A >= 1.3,
        j = E ? a : "allDay";
    return (
        E && (!_ || d >= A)
            ? ((t = a),
              (n = (function (e, t) {
                  var n;
                  let i,
                      l,
                      s = 0,
                      r = -1;
                  for (let n = 0; n < 24; n++) {
                      if (sg(n) !== t) continue;
                      let i = e[n] ?? 0;
                      i > r && ((r = i), (s = n));
                  }
                  let a = e[(s + 23) % 24] ?? 0,
                      o = (((e[(s + 1) % 24] ?? 0) >= a ? s : s - 1) + 24) % 24;
                  return (
                      (n = o + 2),
                      (i = sd(o)),
                      (l = sd(n % 24)),
                      i.ampm === l.ampm ? `${i.h}-${l.h}${l.ampm}` : `${i.h}${i.ampm}-${l.h}${l.ampm}`
                  );
              })(i, a)))
            : (t = _ ? f : A <= d ? "everyDay" : "allDay"),
        { hourTotals: i, category: t, peakRange: n, timeCategory: j, dayCategory: _ ? f : "everyDay" }
    );
}
let sx = {
    morning: Q.t.s5jG51,
    afternoon: Q.t["0qmYNB"],
    evening: Q.t["0QA+rq"],
    night: Q.t.ZSLBan,
    allDay: Q.t["K+spIo"],
    weekday: Q.t.hj2zN0,
    weekend: Q.t.Tl1n53,
    everyDay: Q.t.cQbw52,
};
var sp = n(679871);
function sA(e) {
    let t,
        { hourTotals: n } = e,
        i = Math.max(...n, 1),
        l = (((t = new Date()).getHours() + t.getMinutes() / 60) / 24) * 100;
    return (0, o.jsxs)("div", {
        className: sp.n_,
        role: "img",
        "aria-label": Q.intl.string(Q.t.qfBFn4),
        children: [
            n.map((e, t) => {
                let n = Math.max(8, Math.round((e / i) * 100));
                return (0, o.jsx)(
                    "div",
                    { className: sp.oh, children: (0, o.jsx)("div", { className: sp.M0, style: { height: `${n}%` } }) },
                    t,
                );
            }),
            (0, o.jsx)("div", { className: sp.X1, style: { left: `${l}%` }, "aria-hidden": !0 }),
        ],
    });
}
function sE() {
    return (0, o.jsxs)("div", {
        className: sp.w9,
        "aria-hidden": !0,
        children: [
            (0, o.jsx)(F.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                tag: "span",
                className: sp.pS,
                children: "12a",
            }),
            [
                { text: "6a", leftPct: 25 },
                { text: "12p", leftPct: 50 },
                { text: "6p", leftPct: 75 },
            ].map((e) =>
                (0, o.jsx)(
                    F.E,
                    {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        tag: "span",
                        className: sp.XE,
                        style: { left: `${e.leftPct}%` },
                        children: e.text,
                    },
                    e.text,
                ),
            ),
            (0, o.jsx)(F.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                tag: "span",
                className: sp.c3,
                children: "12a",
            }),
        ],
    });
}
let s_ = {
    morning: (0, o.jsx)(ss.F, { size: "xs", color: "currentColor" }),
    afternoon: (0, o.jsx)(ss.F, { size: "xs", color: "currentColor" }),
    evening: (0, o.jsx)(sr.Z, { size: "xs", color: "currentColor" }),
    night: (0, o.jsx)(sr.Z, { size: "xs", color: "currentColor" }),
    allDay: (0, o.jsx)(sa.ClockIcon, { size: "xs", color: "currentColor" }),
    weekday: (0, o.jsx)(so.CalendarIcon, { size: "xs", color: "currentColor" }),
    weekend: (0, o.jsx)(sc.StarIcon, { size: "xs", color: "currentColor" }),
    everyDay: (0, o.jsx)(su.FireIcon, { size: "xs", color: "currentColor" }),
};
function sj(e) {
    let { msgActivityBins: t, className: n } = e,
        i = c.useMemo(() => (168 !== t.length ? null : sf(sh(t))), [t]);
    if (null == i) return null;
    let l = Q.intl.string(sx[i.category]),
        s = null != i.peakRange ? `${l} ${i.peakRange}` : l;
    return (0, o.jsx)("div", {
        className: B()(sp.Nr, n),
        children: (0, o.jsxs)(eO.B, {
            direction: "vertical",
            gap: 12,
            children: [
                (0, o.jsxs)("div", {
                    className: sp.wx,
                    children: [
                        (0, o.jsx)("span", { className: sp.Kk, "aria-hidden": !0, children: s_[i.category] }),
                        (0, o.jsx)(F.E, { variant: "text-md/medium", color: "text-default", tag: "span", children: s }),
                    ],
                }),
                (0, o.jsx)(sA, { hourTotals: i.hourTotals }),
                (0, o.jsx)(sE, {}),
            ],
        }),
    });
}
function sv(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, size: s = 64 } = e;
    return (0, o.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/f0d683cea380dae507b286d7f0cb76d3b91ace4cd65a0bd0f0ea275a7c4c7367.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
function sN(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, size: s = 64 } = e;
    return (0, o.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/eb45937e98c17c620f550eb6f61839b5c6fcbd234fddbc5a675ed525e96641bb.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
function sC(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, size: s = 64 } = e;
    return (0, o.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/988c019c446bd29e1fdb340c2ff47e04204cffb7a58ba5c374ac85f32aa84acc.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
function sI(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, size: s = 64 } = e;
    return (0, o.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/7fa84deb98046f9d137aaf5975fb0e9106c8335fa25e26950cbb9aa4e2279d34.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
function sy(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, size: s = 64 } = e;
    return (0, o.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/5239fada6e6fe75e95b55347d45e4eb5d05f7bd502daaa1409a31d8476654f7b.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
function sb(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, size: s = 64 } = e;
    return (0, o.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/de8054c3b66b8578f00510805548905a78b494d5fb66dd431210c0b3650bd1cd.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var sS = n(616686);
function sT(e) {
    switch (e) {
        case "evening":
        case "night":
            return { Icon: sv, accent: "#816bee" };
        case "morning":
        case "afternoon":
            return { Icon: sN, accent: "#ffb84b" };
        case "allDay":
            return { Icon: sC, accent: "#ffb84b" };
        case "weekday":
            return { Icon: sI, accent: "#5865f2" };
        case "weekend":
            return { Icon: sy, accent: "#f547cb" };
        case "everyDay":
            return { Icon: sb, accent: "#fd6214" };
    }
}
let sR = {
        Icon: function (e) {
            let { alt: t, ariaLabel: n, ariaHidden: i, role: l, size: s = 64 } = e;
            return (0, o.jsx)("img", {
                style: { width: s, height: s },
                src: "https://cdn.discordapp.com/assets/content/721a312751101b4f60cb2cd66d32211c6ee34eb466fdbf55971a5982227f73bb.svg",
                alt: t,
                "aria-label": n,
                "aria-hidden": i,
                role: l ?? "img",
            });
        },
        accent: "#7fb134",
    },
    sL = {
        Icon: function (e) {
            let { alt: t, ariaLabel: n, ariaHidden: i, role: l, size: s = 64 } = e;
            return (0, o.jsx)("img", {
                style: { width: s, height: s },
                src: "https://cdn.discordapp.com/assets/content/7103a2cf523d78f45b5c35494679535546cb298b61291229681a7daa5cbd046f.svg",
                alt: t,
                "aria-label": n,
                "aria-hidden": i,
                role: l ?? "img",
            });
        },
        accent: "#ffb84b",
    };
function sO(e) {
    let { Icon: t, accent: n, label: i } = e;
    return (0, o.jsxs)("div", {
        className: sS.AS,
        children: [
            (0, o.jsx)("div", {
                className: sS.rN,
                style: { "--liveliness-accent": n },
                children: (0, o.jsx)(t, { alt: "", size: 24, ariaHidden: !0 }),
            }),
            (0, o.jsx)(F.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                tag: "span",
                className: sS.Pf,
                children: i,
            }),
        ],
    });
}
function sk(e) {
    let { guild: t, msgActivityBins: n, className: i } = e,
        l = (0, g.bG)([nE.default], () => nE.default.locale),
        s = c.useMemo(() => (168 !== n.length ? null : sf(sh(n))), [n]),
        r = n_.default.extractTimestamp(t.id),
        a = (0, nx.P)(r, l);
    if (null == s) return null;
    let u = r > new Date().getTime() - 2592e6;
    return (0, o.jsxs)("div", {
        className: i,
        children: [
            (0, o.jsx)(F.E, {
                variant: "text-sm/semibold",
                color: "text-default",
                tag: "div",
                className: sS.R_,
                children: Q.intl.string(Q.t.xRxGFl),
            }),
            (0, o.jsxs)("div", {
                className: sS.ld,
                children: [
                    (0, o.jsx)(sO, { ...sT(s.timeCategory), label: Q.intl.string(sx[s.timeCategory]) }),
                    (0, o.jsx)(sO, { ...sT(s.dayCategory), label: Q.intl.string(sx[s.dayCategory]) }),
                    null != a &&
                        (0, o.jsx)(sO, { ...(u ? sR : sL), label: Q.intl.format(Q.t.LVx4Xr, { createdAtDate: a }) }),
                ],
            }),
        ],
    });
}
function sw(e) {
    let { invite: t, guild: n, liveliness: i, analyticsLocation: l } = e,
        s = t.profile?.description ?? n.description,
        r = sl.useConfig({ location: l }).variant;
    return (0, o.jsxs)(eO.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, o.jsx)(tB, { guild: n }),
            (0, o.jsxs)(eO.B, {
                direction: "vertical",
                gap: 16,
                children: [
                    (0, o.jsx)(nj, {
                        guild: n,
                        invite: t,
                        showGuildTag: !0,
                        showLocale: !1,
                        showLevel: !1,
                        showEstablished: r !== si.HIGHLIGHTS,
                    }),
                    null != s &&
                        "" !== s &&
                        (0, o.jsx)(F.E, { variant: "text-md/normal", color: "text-default", children: s }),
                    r === si.HIGHLIGHTS
                        ? (0, o.jsx)(sk, { guild: n, msgActivityBins: i.msg_activity_bins })
                        : (0, o.jsx)(sj, { msgActivityBins: i.msg_activity_bins }),
                ],
            }),
        ],
    });
}
var sD = n(5846);
function sG(e) {
    let { invite: t, guild: n, liveliness: i } = e;
    return (0, o.jsx)("div", {
        className: sD.nG,
        children: (0, o.jsx)(sw, {
            invite: t,
            guild: n,
            liveliness: i,
            analyticsLocation: "InviteWebLoginRedesignDetails",
        }),
    });
}
function sP(e) {
    let { invite: t, guild: n, liveliness: i, location: l, transitionTo: s } = e;
    return (0, o.jsxs)("div", {
        className: sD.Nf,
        children: [
            (0, o.jsx)("div", { className: sD.yJ, children: (0, o.jsx)(sG, { invite: t, guild: n, liveliness: i }) }),
            (0, o.jsxs)("div", {
                className: sD.Vx,
                children: [
                    (0, o.jsx)(ek.D, {
                        variant: "heading-xl/semibold",
                        color: "text-default",
                        children: Q.intl.string(Q.t["YcW+Gm"]),
                    }),
                    (0, o.jsx)(lC, { invite: t, isEmbedded: !0, location: l, transitionTo: s }),
                ],
            }),
        ],
    });
}
function sU(e) {
    let { invite: t, guild: n, liveliness: i, onLoginStart: l, location: s, transitionTo: r } = e;
    return (0, o.jsxs)("div", {
        className: sD.Nf,
        children: [
            (0, o.jsx)("div", { className: sD.yJ, children: (0, o.jsx)(sG, { invite: t, guild: n, liveliness: i }) }),
            (0, o.jsxs)("div", {
                className: sD.Vx,
                children: [
                    (0, o.jsx)(ek.D, {
                        variant: "heading-xl/semibold",
                        color: "text-default",
                        children: Q.intl.string(Q.t["1OGGMX"]),
                    }),
                    (0, o.jsx)(lX, {
                        invite: t,
                        hideInviteHeader: !0,
                        authBoxClassName: sD.To,
                        location: s,
                        onLoginStart: l,
                        transitionTo: r,
                    }),
                ],
            }),
        ],
    });
}
var sB = n(922016),
    sF = n(408278),
    sV = n(625903),
    sM = n(966327),
    sH = n(960736),
    sW = n(4274),
    sz = n(980707),
    sQ = n(477782),
    sK = n(885386);
function sX(e) {
    let { invite: t, closePopout: n } = e,
        i = sK.tz.useSetting(),
        {
            nickname: l,
            dmsAllowed: s,
            showActivity: r,
            setNickname: a,
            setDmsAllowed: c,
            setShowActivity: u,
        } = (0, sH.lD)(),
        d = t.is_nickname_changeable;
    return (0, o.jsxs)(sz.W, {
        navId: "accept-invite-modal-settings-menu",
        onClose: n,
        "aria-label": Q.intl.string(Q.t["3D5yo/"]),
        onSelect: () => {},
        children: [
            d
                ? (0, o.jsx)(sQ.Yn, {
                      id: "accept-invite-modal-settings-nickname",
                      label: Q.intl.string(Q.t.me1lRk),
                      value: l,
                      onChange: a,
                      placeholder: Q.intl.string(Q.t["09Q8yp"]),
                      maxLength: R.d0r,
                  })
                : null,
            (0, o.jsx)(sQ.fP, {
                id: "accept-invite-modal-settings-dms",
                label: Q.intl.string(Q.t["/2ed37"]),
                action: c,
                checked: s,
            }),
            i
                ? (0, o.jsx)(sQ.fP, {
                      id: "accept-invite-modal-settings-activity",
                      label: Q.intl.string(Q.t.bN4m1G),
                      action: u,
                      checked: r,
                  })
                : null,
        ],
    });
}
function sq(e) {
    let { invite: t, guild: n, onAcceptInvite: i, error: l } = e,
        s = c.useRef(null),
        [r, a] = c.useState(!1),
        u = (0, g.bG)([iH.default], () => iH.default.getCurrentUser()),
        d = (0, sH.uE)(),
        h = "" !== d ? Q.intl.format(Q.t["9sWQNT"], { usernameHook: () => d }) : Q.intl.string(Q.t["e/6Ogt"]),
        m = c.useCallback(() => {
            r ||
                S.default.track(R.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                    guild_id: n.id,
                    invite_code: t.code,
                    location: "invite_web_redesign",
                }),
                a(!r);
        }, [n.id, t.code, r]);
    return (
        (0, iY.Ay)(() => {
            null == u && n$.fetchCurrentUser({ withAnalyticsToken: !0 });
        }),
        (0, o.jsxs)("div", {
            className: sD.cv,
            children: [
                null != l &&
                    (0, o.jsxs)("div", {
                        className: sD.fl,
                        role: "alert",
                        children: [
                            (0, o.jsx)(st.E, {
                                size: "custom",
                                width: 14,
                                height: 14,
                                color: e1.A.colors.TEXT_FEEDBACK_CRITICAL,
                            }),
                            (0, o.jsx)(F.E, {
                                variant: "text-sm/medium",
                                color: "text-feedback-critical",
                                children: (0, sW.s)(l.code),
                            }),
                        ],
                    }),
                l2.VP
                    ? (0, o.jsxs)(Y.e, {
                          fullWidthContainer: !0,
                          fullWidth: !0,
                          direction: "horizontal",
                          children: [
                              (0, o.jsx)(V.$, {
                                  onClick: i,
                                  loading: (function (e) {
                                      let { state: t } = e;
                                      switch (t) {
                                          case R.elq.ACCEPTING:
                                          case R.elq.APP_OPENING:
                                              return !0;
                                          default:
                                              return !1;
                                      }
                                  })(t),
                                  variant: "primary",
                                  text: h,
                                  icon:
                                      null == u
                                          ? void 0
                                          : () => (0, o.jsx)(sM.A, { "aria-hidden": !0, size: ti._3.SIZE_16, user: u }),
                              }),
                              (0, o.jsx)(sB.Y, {
                                  targetElementRef: s,
                                  animation: sB.Y.Animation.NONE,
                                  position: "top",
                                  align: "right",
                                  shouldShow: r,
                                  autoInvert: !1,
                                  onRequestClose: () => a(!1),
                                  renderPopout: (e) => (0, o.jsx)(sX, { invite: t, ...e }),
                                  children: (e) =>
                                      (0, o.jsx)("div", {
                                          ref: s,
                                          children: (0, o.jsx)(sF.K, {
                                              ...e,
                                              icon: sV.SettingsIcon,
                                              "aria-label": Q.intl.string(Q.t["3D5yo/"]),
                                              variant: "secondary",
                                              onClick: m,
                                          }),
                                      }),
                              }),
                          ],
                      })
                    : (0, o.jsx)(w.KE, {}),
            ],
        })
    );
}
function sY(e) {
    let { invite: t, guild: n, liveliness: i, onAcceptInvite: l, error: s } = e;
    return (0, o.jsxs)("div", {
        className: sD.qF,
        children: [
            (0, o.jsx)("div", {
                className: sD.yh,
                children: (0, o.jsx)(sw, {
                    invite: t,
                    guild: n,
                    liveliness: i,
                    analyticsLocation: "InviteWebRedesign",
                }),
            }),
            (0, o.jsx)(sq, { invite: t, guild: n, onAcceptInvite: l, error: s }),
        ],
    });
}
var s$ = n(921037),
    sZ = n(930839);
g.Ay.initialize();
let sJ = "register",
    s0 = "login";
function s1(e) {
    let { message: t, onClick: n, invite: i, className: l } = e,
        s = i?.guild_scheduled_event != null;
    return l2.VP
        ? (0, o.jsx)("div", {
              className: l ?? (s ? X.QX : X.eT),
              children: (0, o.jsx)(V.$, { text: t, onClick: n, variant: s ? "active" : "primary", fullWidth: !0 }),
          })
        : (0, o.jsx)(w.KE, { className: l ?? X.eT });
}
function s2(e) {
    let { invite: t, transitionTo: n, location: i } = e,
        l = null != t.guild ? (0, em.DY)(t.guild) : null,
        { enabled: s } = sl.useConfig({ location: "InviteLogin" });
    return null != l &&
        t.liveliness?.msg_activity_bins != null &&
        null == t.guild_scheduled_event &&
        (sl.getConfig({ location: "InviteLogin.hasLiveliness" }), s)
        ? (0, o.jsx)(sP, { invite: t, guild: l, liveliness: t.liveliness, location: i, transitionTo: n })
        : (0, o.jsx)(lC, { invite: t, transitionTo: n, location: i });
}
function s4(e) {
    let { invite: t, onLoginStart: n, location: i, transitionTo: l } = e,
        s = null != t.guild ? (0, em.DY)(t.guild) : null,
        { enabled: r } = sl.useConfig({ location: "InviteRegister" });
    return null != s &&
        t.liveliness?.msg_activity_bins != null &&
        null == t.guild_scheduled_event &&
        (sl.getConfig({ location: "InviteRegister.hasLiveliness" }), r)
        ? (0, o.jsx)(sU, {
              invite: t,
              guild: s,
              liveliness: t.liveliness,
              onLoginStart: n,
              location: i,
              transitionTo: l,
          })
        : (0, o.jsx)(lX, { invite: t, onLoginStart: n, location: i, transitionTo: l });
}
function s8(e) {
    let { invite: t, inviteKey: n, handleAccept: i, handleDefaultTransition: l } = e,
        s = (0, g.bG)([te.A], () => (t.state === R.elq.ERROR ? te.A.getInviteError(n) : void 0)),
        r = null != t.guild ? (0, em.DY)(t.guild) : null,
        { enabled: a } = sl.useConfig({ location: "InviteAuthenticated" }),
        u = t.guild_scheduled_event,
        d = s?.code === R.t02.INVALID_CANNOT_FRIEND_SELF;
    return (c.useEffect(() => {
        sZ.A.requestDrain();
    }, []),
    null != r &&
        t.liveliness?.msg_activity_bins != null &&
        null == u &&
        (sl.getConfig({ location: "InviteAuthenticated.hasLiveliness" }), a))
        ? (0, o.jsx)(sY, { invite: t, guild: r, liveliness: t.liveliness, onAcceptInvite: i, error: s })
        : (0, o.jsxs)("div", {
              children: [
                  (0, o.jsxs)(w.Ay, {
                      children: [
                          null != u
                              ? (0, o.jsx)(lB, { channel: t.channel, guildScheduledEvent: u })
                              : (0, o.jsx)(i1.A, { invite: t }),
                          null != s &&
                              (0, o.jsx)("div", {
                                  className: X.QX,
                                  role: "alert",
                                  children: (0, o.jsxs)(F.E, {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-critical",
                                      style: { display: "flex", alignItems: "center", gap: 4 },
                                      children: [
                                          (0, o.jsx)(st.E, {
                                              size: "custom",
                                              width: 14,
                                              height: 14,
                                              color: "currentColor",
                                          }),
                                          " ",
                                          (0, sW.s)(s.code),
                                      ],
                                  }),
                              }),
                          (0, o.jsx)(s1, {
                              invite: t,
                              message: Q.intl.string(d ? Q.t.fIv16B : Q.t.ohMvm1),
                              onClick: d ? l : i,
                              className: null != s ? X.QX : void 0,
                          }),
                      ],
                  }),
                  null != u &&
                      null != t.guild &&
                      (0, o.jsx)(w.Ay, {
                          className: X.QX,
                          children: (0, o.jsx)(lV, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                      }),
              ],
          });
}
function s5(e) {
    let { invite: t, inviteKey: n, rpcConnected: i, onContinue: l } = e;
    return (0, o.jsxs)(w.Ay, {
        children: [
            (0, o.jsx)(i1.A, { invite: t }),
            l2.VP
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)("div", {
                              className: X.QX,
                              children: (0, o.jsx)(V.$, {
                                  text: Q.intl.string(Q.t.UQvCf7),
                                  onClick: function () {
                                      S.default.track(R.HAw.INVITE_CTA_CLICKED, {
                                          action: "open_app",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          i ? A.Ay.openNativeAppModal(n) : A.Ay.openApp(n);
                                  },
                                  variant: "primary",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, o.jsx)("div", {
                              className: X.Ot,
                              children: (0, o.jsx)(V.$, {
                                  text: Q.intl.string(Q.t["2ixEBi"]),
                                  onClick: function () {
                                      S.default.track(R.HAw.INVITE_CTA_CLICKED, {
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
                : (0, o.jsx)(w.KE, { className: X.eT }),
        ],
    });
}
function s7(e) {
    let { title: t } = e;
    return (0, o.jsxs)(w.Ay, { children: [(0, o.jsx)(w.hE, { children: t }), (0, o.jsx)(w.CK, {})] });
}
function s6(e) {
    let { banned: t, handleDefaultTransition: n } = e;
    return (0, o.jsxs)(w.Ay, {
        children: [
            (0, o.jsx)(w.hE, { className: B()(X.Ot, X.QB), children: Q.intl.string(Q.t.kux01N) }),
            (0, o.jsx)(w.tK, { children: t ? Q.intl.string(Q.t["5AkWAd"]) : Q.intl.string(Q.t["+qUJAj"]) }),
            (0, o.jsx)(s1, { message: Q.intl.string(Q.t.fIv16B), onClick: n }),
            (0, o.jsx)("div", {
                className: X.Ot,
                style: { textAlign: "left" },
                children: (0, o.jsx)(ed.Q, {
                    size: "sm",
                    textVariant: "text-sm/medium",
                    text: Q.intl.string(Q.t.urIwn4),
                    onClick: () => window.open(n0.A.getArticleURL(R.MVz.INVALID_INVITES), "_blank"),
                }),
            }),
        ],
    });
}
function s3(e) {
    let { handleDefaultTransition: t } = e;
    return (0, o.jsxs)(w.Ay, {
        children: [
            (0, o.jsx)(w.hE, { children: Q.intl.string(Q.t.fOc4gn) }),
            (0, o.jsx)(s1, { message: Q.intl.string(Q.t.fIv16B), onClick: t }),
        ],
    });
}
var s9 = n(334465);
let re = (0, n(600975).C)({
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
var rt = n(163050);
g.Ay.initialize();
var rn = n(701273);
function ri(e) {
    n.g.location.assign(e);
}
g.Ay.initialize(), n(426620), g.Ay.initialize();
let rl = iI(lC),
    rs = iI(function (e) {
        let { transitionTo: t } = e,
            n = c.useCallback(
                (e) => {
                    let n;
                    ((n = (0, s9.B)(e, { path: R.BVt.CHANNEL(nK.pv.guildId(), nK.pv.channelId()) })),
                    +(n?.params?.channelId !== N.VV.ROLE_SUBSCRIPTIONS))
                        ? (t ?? D.pX)(e)
                        : D.bG(e);
                },
                [t],
            ),
            { isAuthenticated: i, loginStatus: l } = (0, g.cf)([eq.default], () => ({
                isAuthenticated: eq.default.isAuthenticated(),
                loginStatus: eq.default.getLoginStatus(),
            })),
            { location: s, redirectTo: r } = e,
            [a, d] = c.useState(i);
        function h(e) {
            let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
            (0, _.Qh)({ handoffKey: t, handoffToken: n, handoffSource: i }), d(!1);
        }
        return ((0, sn.Ay)(() => {
            if (null != s) {
                let { handoff_key: e, handoff_token: t } = (0, u.parse)(s.search);
                if (null != e && null != t) {
                    let n = null != r ? y(r) : void 0;
                    a
                        ? x.A.logout("handoff", null).finally(() => {
                              h({ handoffKey: e, handoffToken: t, handoffSource: n });
                          })
                        : h({ handoffKey: e, handoffToken: t, handoffSource: n });
                }
            }
        }),
        a || l === R.aUe.LOGGING_IN)
            ? (0, o.jsx)(w.Ay, { children: (0, o.jsx)(ew.y, {}) })
            : (0, o.jsx)(lC, { ...e, transitionTo: n });
    }),
    rr = iI(function (e) {
        let { inviteKey: t, location: n, transitionTo: i, login: l } = e,
            s = c.useMemo(() => (0, e$.m0)(t), [t]),
            r = (0, g.bG)([te.A], () => te.A.getInvite(t)),
            a = (0, g.bG)([iD.A], () => iD.A.getState(s)),
            u = (0, g.bG)([eq.default], () => eq.default.isAuthenticated()),
            d = (0, g.bG)([eh.A], () => eh.A.defaultRoute),
            h = (0, g.bG)([lT], () => lT.isUnderageAnonymous()),
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
                    t || e === R.fAW.OPEN_FAIL
                );
            })(a),
            x = (function (e) {
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
        sl.useConfig({ location: "Invite" }),
            c.useLayoutEffect(() => {
                (a === R.fAW.OPEN || r?.state === R.elq.APP_OPENED) && E(!0);
            }, [r?.state, a]);
        let _ = l ? s0 : sJ,
            j = c.useCallback((e) => A.Ay.getInviteContext(e, r), [r]),
            v = c.useCallback(
                (e) => {
                    null != r &&
                        (null != r.channel || e?.channel != null) &&
                        (r.guild?.id != null
                            ? A.Ay.transitionToInviteOnboarding(e ?? r, { transitionTo: i })
                            : A.Ay.transitionToInvite(e ?? r, { transitionTo: i }));
                },
                [r, i],
            ),
            N = c.useCallback(() => {
                S.default.track(R.HAw.INVITE_CTA_CLICKED, {
                    action: "accept_invite",
                    invite_code: r?.code,
                    guild_id: r?.guild?.id,
                }),
                    A.Ay.acceptInvite({
                        inviteKey: t,
                        context: j(R.S3d.INVITE),
                        skipOnboarding: !0,
                        callback: (e) => {
                            el(e), null != e.channel && (m ? v(e) : A.Ay.openApp(t, e.channel.id));
                        },
                    }).catch(() => {});
            }, [t, j, r?.code, r?.guild?.id, m, v]),
            C = c.useCallback(() => {
                i(d);
            }, [d, i]);
        if (
            ((0, sn.Ay)(() => {
                let e = eq.default.getAnalyticsToken();
                if (
                    (null != e
                        ? f.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eq.default.getId() })
                        : eq.default.isAuthenticated() && n$.fetchCurrentUser({ withAnalyticsToken: !0 }).catch(R.tEg),
                    S.default.track(R.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }),
                    (0, G.d0)("invite"),
                    l2.VP || eY.A.launch("discord://" + R.BVt.INVITE(t), () => void 0),
                    !l && h)
                ) {
                    let { baseCode: e } = (0, e$.y$)(t);
                    (0, D.bG)(R.BVt.INVITE_LOGIN(e));
                }
            }),
            c.useEffect(() => {
                r?.state === R.elq.APP_NOT_OPENED && v();
            }, [r?.state, v]),
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
                    u = (0, i$.Ay)(i),
                    d = (0, i$.Ay)(l);
                c.useEffect(() => {
                    if (s === s0 && i && !1 === u) {
                        let e = eq.default.getFingerprint();
                        if (null != e) {
                            let i = (0, eX.d)(e);
                            S.default.track(R.HAw.INVITE_LOGIN_SUCCESSFUL, {
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
                }, [i, u, s, r, a, t, n]),
                    c.useEffect(() => {
                        if (null != t && s === sJ && i && !1 === u) {
                            let { channel: e } = t;
                            if (null != e)
                                if (((0, lz.C)(lK.zY.INVITE_UNCLAIMED), null != t.guild)) {
                                    let e = (0, l9.Lt)(t.flags ?? 0, l3.Q.IS_APPLICATION_BYPASS),
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
                    }, [t, i, u, o, s, n]),
                    c.useEffect(() => {
                        null == t ||
                            (l !== d &&
                                (l === R.fAW.OPEN
                                    ? S.default.track(
                                          R.HAw.INVITE_APP_INVOKED,
                                          {
                                              invite_code: (0, e$.m0)(n),
                                              guild_id: t.guild?.id,
                                              channel_id: t.channel?.id,
                                              inviter_id: t.inviter?.id,
                                              user_is_member: null != t.guild && null != e9.A.getGuild(t.guild.id),
                                              size_total: t.approximate_member_count,
                                              invite_type: null != t.type ? to.Xd[t.type] : void 0,
                                          },
                                          { flush: !0 },
                                      )
                                    : l === R.fAW.OPEN_FAIL &&
                                      S.default.track(R.HAw.INVITE_APP_INVOKE_FAILED, {
                                          invite_code: (0, e$.m0)(n),
                                          reason: "rpc_failed",
                                          invite_type: null != t.type ? to.Xd[t.type] : void 0,
                                      })));
                    }, [t, l, d, n]);
            })({
                invite: r,
                inviteKey: t,
                authenticated: u,
                nativeAppState: a,
                mode: _,
                getAcceptInviteContext: j,
                handleContinue: v,
                transitionTo: i,
            }),
            null == r)
        )
            return null;
        let I = a === R.fAW.OPEN;
        if (p || I || r.state === R.elq.APP_OPENED)
            return (0, o.jsx)(s5, { invite: r, inviteKey: t, rpcConnected: I, onContinue: v });
        let { state: y } = r;
        if (y === R.elq.APP_NOT_OPENED) return (0, o.jsx)(s3, { handleDefaultTransition: C });
        if ([R.elq.RESOLVING, R.elq.ACCEPTING, R.elq.APP_OPENING].includes(y)) {
            let e =
                y === R.elq.ACCEPTING ? Q.intl.string(Q.t["6wsY16"]) : (R.elq.RESOLVING, Q.intl.string(Q.t["Z+hCVU"]));
            return (0, o.jsx)(s7, { title: e });
        }
        if (y === R.elq.EXPIRED) return (0, o.jsx)(s6, { banned: !1, handleDefaultTransition: C });
        if (y === R.elq.BANNED) return (0, o.jsx)(s6, { banned: !0, handleDefaultTransition: C });
        if (y === R.elq.RESOLVED) {
            if (u && (0, l9.Lt)(r.flags ?? 0, l3.Q.IS_GUEST_INVITE))
                return (
                    A.Ay.openApp(t),
                    se.u.set(s$.B, t),
                    (0, o.jsx)(s5, { invite: r, inviteKey: t, rpcConnected: I, onContinue: () => i(R.BVt.APP) })
                );
            if (null != r.type && to.uR.has(r.type) && x)
                return (0, o.jsx)(s7, { title: Q.intl.string(Q.t["Z+hCVU"]) });
            if (!u && l2.VP)
                return _ === s0
                    ? (0, o.jsx)(s2, { invite: r, transitionTo: i, location: n })
                    : (0, o.jsx)(s4, {
                          invite: r,
                          onLoginStart: function () {
                              S.default.track(R.HAw.INVITE_LOGIN, {
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
        return y === R.elq.RESOLVED || y === R.elq.ERROR
            ? (0, o.jsx)(s8, { invite: r, inviteKey: t, handleAccept: N, handleDefaultTransition: C })
            : null;
    }),
    ra = iI(function (e) {
        let t = {
            guildTemplate: (0, g.bG)([eb.A], () => eb.A.getGuildTemplate(e.code)),
            nativeAppState: (0, g.bG)([iD.A], () => iD.A.getState(e.code)),
            authenticated: (0, g.bG)([eq.default], () => eq.default.isAuthenticated()),
            defaultRoute: (0, g.bG)([eh.A], () => eh.A.defaultRoute),
        };
        return (0, o.jsx)(l8, { ...e, ...t });
    }),
    ro = iI(lY),
    rc = iI(function (e) {
        let { inviteKey: t, transitionTo: n } = e,
            i = (0, g.bG)([te.A], () => te.A.getInvite(t));
        return (
            c.useEffect(() => {
                let e = eq.default.getAnalyticsToken();
                null != e &&
                    f.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eq.default.getId() }),
                    (0, G.d0)("invite_mobile"),
                    S.default.track(R.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 });
            }, []),
            (0, o.jsx)(nU, {
                invite: i,
                onAcceptInvite: function (e) {
                    nR(e, t, i);
                },
                onOpenAppAfterRegistration: function (e) {
                    nR(e, t, i, { didRegister: !0 });
                },
                transitionTo: n,
            })
        );
    }),
    ru = iI(lX),
    rd = iI(function (e) {
        let { location: t, transitionTo: i = D.pX } = e,
            [l, s] = c.useState("submitting");
        function r() {
            return "Android" === ez().os.family || "iOS" === ez().os.family
                ? null
                : (0, o.jsx)(V.$, {
                      text: Q.intl.string(Q.t.dKhVQN),
                      fullWidth: !0,
                      onClick: () => i(R.BVt.LOGIN, { source: "authorizeIPAdress" }),
                  });
        }
        return ((0, sn.Ay)(() => {
            (0, G.d0)("authorize_ip");
            let e = (0, eg.A)(t);
            null == e
                ? s("failed")
                : (async function () {
                      if (null != e)
                          try {
                              await x.A.authorizeIPAddress(e), s("succeeded");
                          } catch (e) {
                              s("failed");
                          }
                  })();
        }),
        "failed" === l)
            ? (0, o.jsxs)(w.Ay, {
                  children: [
                      (0, o.jsx)("img", { alt: "", src: n(792009), className: X.SX }),
                      (0, o.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t["f/54az"]) }),
                      (0, o.jsx)(w.tK, { className: X.C2, children: Q.intl.string(Q.t.i3ehMr) }),
                      r(),
                  ],
              })
            : "succeeded" === l
              ? (0, o.jsxs)(w.Ay, {
                    children: [
                        (0, o.jsx)("img", { alt: "", src: n(841406), className: X.SX }),
                        (0, o.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.iG0SlK) }),
                        (0, o.jsx)(w.tK, { className: X.C2, children: Q.intl.string(Q.t["Elv+qt"]) }),
                        r(),
                    ],
                })
              : (0, o.jsxs)(w.Ay, {
                    children: [(0, o.jsx)(w.CK, {}), (0, o.jsx)(w.hE, { children: Q.intl.string(Q.t["9exy+V"]) })],
                });
    }),
    rh = iI(function (e) {
        let { location: t } = e,
            [i, l] = c.useState("submitting");
        return (c.useEffect(() => {
            (0, G.d0)("authorize_payment");
            let e = (0, eg.A)(t);
            null == e
                ? l("failed")
                : (async function () {
                      if (null != e)
                          try {
                              await x.A.authorizePayment(e), l("succeeded");
                          } catch (e) {
                              l("failed");
                          }
                  })();
        }, [t]),
        "failed" === i)
            ? (0, o.jsxs)(w.Ay, {
                  children: [
                      (0, o.jsx)("img", { alt: "", src: n(678985), className: X.SX }),
                      (0, o.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.GHRpue) }),
                      (0, o.jsx)(w.tK, { className: X.C2, children: Q.intl.string(Q.t["1nO55v"]) }),
                  ],
              })
            : "succeeded" === i
              ? (0, o.jsxs)(w.Ay, {
                    children: [
                        (0, o.jsx)("img", { alt: "", src: n(586430), className: X.SX }),
                        (0, o.jsx)(w.hE, { className: X.QB, children: Q.intl.string(Q.t.ihHX53) }),
                        (0, o.jsx)(w.tK, { className: X.C2, children: Q.intl.string(Q.t["pGPCv+"]) }),
                    ],
                })
              : (0, o.jsxs)(w.Ay, {
                    children: [(0, o.jsx)(w.CK, {}), (0, o.jsx)(w.hE, { children: Q.intl.string(Q.t.T3vC7n) })],
                });
    }),
    rm = iI(function (e) {
        let { location: t, transitionTo: n = ri } = e,
            [i, l] = c.useState("submitting"),
            s = c.useRef(void 0);
        (0, sn.Ay)(() => {
            (0, G.d0)("verify_email");
            let e = (0, eg.A)(t);
            null == e
                ? l("failed")
                : (async function () {
                      if (null != e)
                          try {
                              let t = await x.A.verify(e);
                              l("succeeded"), (s.current = t);
                          } catch (e) {
                              l("failed");
                          }
                  })();
        });
        let r = c.useCallback(() => {
                n(R.BVt.LOGIN, { source: "verify_email" });
            }, [n]),
            a = c.useCallback(() => {
                S.default.track(R.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: s.current }),
                    (0, rn.A)("verify_email");
            }, []);
        return "failed" === i
            ? (0, o.jsx)(eG, {
                  title: Q.intl.string(Q.t["PCgG3+"]),
                  subtitle: Q.intl.string(Q.t.tQpeA3),
                  buttonText: Q.intl.string(Q.t.dKhVQN),
                  onButtonClick: r,
              })
            : "succeeded" === i
              ? (0, o.jsx)(eG, {
                    title: Q.intl.string(Q.t["dAfGb+"]),
                    buttonText: Q.intl.string(Q.t["uJWIj/"]),
                    onButtonClick: a,
                    image: (0, o.jsx)(eR, { alt: Q.intl.string(Q.t["dAfGb+"]) }),
                })
              : (0, o.jsx)(eG, {
                    title: Q.intl.string(Q.t["0c8+5n"]),
                    subtitle: Q.intl.string(Q.t.ULTCBE),
                    loading: !0,
                });
    }),
    rg = iI(function () {
        let [e, t] = c.useState(""),
            [i, l] = c.useState(""),
            [s, r] = c.useState(!1),
            [a, u] = c.useState(!1),
            [d, h] = c.useState(null),
            [m, f] = c.useState(null),
            x = (0, g.bG)([e_.A], () => e_.A.getCountryCode()),
            p = x.code.split(" ")[0];
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
                let { token: t } = await eA.A.verifyPhone(p + e, i);
                h(null), f(null), u(!0), eA.A.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (h(null), f(e.body.message)) : (h(e.body.phone), f(e.body.code));
            } finally {
                r(!1);
            }
        }
        let _ = (0, o.jsxs)(w.Ay, {
            children: [
                (0, o.jsx)(w._V, { src: n(142041) }),
                (0, o.jsxs)(w.hE, {
                    className: B()(X.QX, ev.Uu, ev.wq, ev.Hu),
                    children: [
                        Q.intl.string(Q.t.WWzQta),
                        (0, o.jsx)(ep.y, { size: "md", color: "currentColor", className: X.oY }),
                    ],
                }),
            ],
        });
        return a
            ? _
            : (0, o.jsxs)(w.Ay, {
                  children: [
                      (0, o.jsx)(w.hE, { children: Q.intl.string(Q.t.o4JNrO) }),
                      (0, o.jsx)(w.tK, { className: X.Ot, children: Q.intl.string(Q.t.y0tVbq) }),
                      (0, o.jsxs)(w.eB, {
                          className: X.QX,
                          children: [
                              (0, o.jsx)(ej.A, {
                                  label: Q.intl.string(Q.t["eJnn0+"]),
                                  alpha2: x.alpha2,
                                  countryCode: p,
                                  value: e,
                                  autoComplete: "off",
                                  spellCheck: "false",
                                  onChange: t,
                                  forceMode: eE.Pd.PHONE,
                                  error: d,
                              }),
                              (0, o.jsx)(w.pd, {
                                  className: X.QX,
                                  label: Q.intl.string(Q.t.OdzNbm),
                                  value: i,
                                  onChange: l,
                                  maxLength: 6,
                                  error: m,
                              }),
                              (0, o.jsx)(ed.Q, { text: Q.intl.string(Q.t["5b60gi"]), onClick: A }),
                              (0, o.jsx)("div", {
                                  className: X.QX,
                                  children: (0, o.jsx)(V.$, {
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
    rf = iI(rt.A),
    rx = iI(ik),
    rp = iI(ex),
    rA = iI(function (e) {
        let { location: t } = e,
            [n, i] = c.useState(!1),
            { verifySuccess: l, verifyErrors: s, redirectGuildId: r } = (0, g.bG)([eV], () => eV.getState());
        function a() {
            let e, t;
            (e = (function (e) {
                let t = ez().os?.family;
                if ("Android" === t || "iOS" === t) {
                    let t = eq.default.getFingerprint(),
                        n = (0, eK.I_)();
                    return (
                        eH()(null != e, "generateAppPath: guildId cannot be null"),
                        (0, eK.Ay)((0, eQ.jN)(e), { utmSource: "verify_hub_email", fingerprint: t, attemptId: n })
                    );
                }
                return "discord://";
            })(r)),
                null != (t = (0, eK.X7)(e)) &&
                    S.default.track(R.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, eX.v)(t.fingerprint),
                        attempt_id: t.attemptId,
                        source: t.utmSource,
                    }),
                eY.A.launch(e, (e) => {
                    e || (0, D.bG)(eh.A.fallbackRoute);
                }),
                i(!0);
        }
        return (c.useEffect(() => {
            let e = (0, eg.A)(t);
            eL.A.verify(e), (0, G.d0)("verify_hub_email");
        }, [t]),
        n)
            ? (0, o.jsx)(eG, {
                  title: Q.intl.string(Q.t.csrAMJ),
                  subtitle: Q.intl.string(Q.t["m1+IBn"]),
                  buttonText: Q.intl.string(Q.t.fIv16B),
                  onButtonClick: () => (0, D.pX)(R.BVt.CHANNEL(r)),
              })
            : l
              ? (0, o.jsx)(eG, {
                    title: Q.intl.string(Q.t["dAfGb+"]),
                    buttonText: Q.intl.string(Q.t["uJWIj/"]),
                    onButtonClick: a,
                    image: (0, o.jsx)(eR, { alt: Q.intl.string(Q.t["dAfGb+"]) }),
                })
              : null != s
                ? (0, o.jsx)(eG, {
                      title: Q.intl.string(Q.t["PCgG3+"]),
                      subtitle: Q.intl.string(Q.t.tQpeA3),
                      buttonText: Q.intl.string(Q.t["uJWIj/"]),
                      onButtonClick: a,
                  })
                : (0, o.jsx)(eG, {
                      title: Q.intl.string(Q.t["0c8+5n"]),
                      subtitle: Q.intl.string(Q.t.ULTCBE),
                      loading: !0,
                  });
    }),
    rE = iI(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, ib.W)(nz.XK.CHANNEL, {
                guildId: e.params.guildId,
                channelId: e.params.channelId,
                messageId: e.params.messageId,
                search: t.search,
            });
        }
        return (0, o.jsx)(iR, { match: t, location: n, attemptDeepLink: i });
    }),
    r_ = iI(function (e) {
        let { match: t, location: n } = e;
        async function i(e) {
            await (0, ib.W)(nz.XK.GAME_SHOP, {
                guildId: e.params.guildId,
                pageIndex: e.params.pageIndex,
                skuId: e.params.skuId,
                slug: e.params.slug,
            });
        }
        return (0, o.jsx)(iR, { match: t, location: n, attemptDeepLink: i });
    }),
    rj = iI(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, ib.W)(nz.XK.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search,
            });
        }
        return (0, o.jsx)(iR, { match: t, location: n, attemptDeepLink: i });
    }),
    rv = iI(function (e) {
        let { location: t } = e,
            n = (0, g.bG)([eq.default], () => eq.default.isAuthenticated()),
            i = (0, g.bG)([eI.A], () => eI.A.hasLoadedExperiments),
            l = re.useExperiment({ location: "RSL - Landing Page" }, { autoTrackExposure: !0 }).enabled,
            [s, r] = c.useState(!1),
            [a, u] = c.useState(Q.intl.string(Q.t["9exy+V"])),
            [d, h] = c.useState(!0);
        function m(e) {
            switch (e) {
                case R.t02.INVALID_FORM_BODY:
                case R.t02.DSA_RSL_REPORT_NOT_FOUND:
                    u(Q.intl.string(Q.t.bzXDfc));
                    break;
                case R.t02.DSA_RSL_ALREADY_REQUESTED:
                    u(Q.intl.string(Q.t.rV00wq));
                    break;
                case R.t02.DSA_RSL_LIMITED_TIME:
                    u(Q.intl.string(Q.t["0dI29h"]));
                    break;
                case R.t02.DSA_RSL_REPORT_INELIGIBLE:
                    u(Q.intl.string(Q.t["RGa/Gb"]));
                    break;
                default:
                    u(Q.intl.string(Q.t["0QLzfv"]));
            }
        }
        return (
            c.useEffect(() => {
                n
                    ? (h(!0),
                      n$
                          .fetchCurrentUser({ withAnalyticsToken: !0 })
                          .then(() => h(!1))
                          .catch(() => h(!1)))
                    : h(!1);
            }, [n]),
            c.useEffect(() => {
                i || l || x.A.getExperiments();
            }, [i, l]),
            c.useEffect(() => {
                async function e(e) {
                    try {
                        let t = null != e ? await (0, nJ.q)(e) : void 0;
                        null != t ? u(Q.intl.string(Q.t.e6mZMt)) : m(t.body?.code);
                    } catch (e) {
                        m(e.body?.code);
                    } finally {
                        r(!1);
                    }
                }
                r(!0), e((0, eg.A)(t)), (0, G.d0)("report_second_look");
            }, [t]),
            l &&
                !d &&
                (0, o.jsxs)(w.Ay, {
                    children: [(0, o.jsx)(w.hE, { className: X.QB, children: a }), s && (0, o.jsx)(ew.y, {})],
                })
        );
    }),
    rN = iI(en),
    rC = iI(function (e) {
        let { match: t, location: i } = e,
            l = (0, u.parse)(i.search).token,
            [s, r] = c.useState("loading"),
            a = c.useRef(!1),
            d = c.useCallback(async (e) => {
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
            m = c.useCallback((e) => {
                let t = eq.default.getFingerprint() ?? eq.default.getId(),
                    n = `discord://login/one-time?token=${encodeURIComponent(e)}`;
                eY.A.launch(n, (e) => {
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
            g = c.useCallback(
                (e) => {
                    let t = eq.default.getFingerprint() ?? eq.default.getId(),
                        i = eq.default.getInstallationForTracking();
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((n) => {
                            let { default: l } = n;
                            l.request(R.e$_.DEEP_LINK, {
                                type: nz.XK.ONE_TIME_LOGIN,
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
            (c.useEffect(() => {
                let e = null != l && "string" == typeof l,
                    t = h.Fr ? "mobile" : h.v1 ? "tablet" : (0, nF.isDesktop)() ? "desktop_app" : "web";
                if ((S.default.track(R.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: e, device_type: t }), !e))
                    return void r("error");
                if (h.Fr || h.v1) {
                    let e = S.default.getSuperProperties()?.os;
                    S.default.track(R.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_ui_shown",
                        device_type: t,
                        platform: e,
                    });
                    return;
                }
                (0, nF.isDesktop)() ? d(l) : a.current || ((a.current = !0), r("rpc_attempting"), g(l));
            }, [l, i, d, g]),
            h.Fr || h.v1)
        ) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, o.jsx)(nW, { token: l, hasError: "error" === s, errorReason: e });
        }
        if ((0, D.MX)()) return null;
        if ("app_launched" === s)
            return (0, o.jsx)(nQ, {
                title: Q.intl.string(Q.t.RvUUOy),
                subtitle: Q.intl.string(Q.t["5/lR0g"]),
                buttonText: Q.intl.string(Q.t["2ixEBi"]),
                buttonOnClick: () => {
                    S.default.track(R.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: s }), d(l);
                },
            });
        if ("app_launch_not_supported" === s)
            return (0, o.jsx)(nQ, {
                title: Q.intl.string(Q.t.qq4tjT),
                subtitle: Q.intl.string(Q.t.CVxYRo),
                buttonText: Q.intl.string(Q.t["2ixEBi"]),
                buttonOnClick: () => d(l),
            });
        if ("error" === s) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, o.jsx)(nQ, {
                title: Q.intl.string(Q.t.RtCSr1),
                subtitle: Q.intl.string(Q.t["S+YjYJ"]),
                buttonText: Q.intl.string(Q.t.j3cG2p),
                buttonOnClick: () => {
                    S.default.track(R.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                        (0, D.pX)(R.BVt.LOGIN);
                },
            });
        }
        return (0, o.jsx)(w.Ay, { children: (0, o.jsx)(w.CK, {}) });
    });
class rI extends c.PureComponent {
    state = { splash: null, redirectTo: null, backgroundId: null };
    hasTriggeredInviteResolve = !1;
    experimentFallbackTimeout = null;
    static getDerivedStateFromProps(e, t) {
        let { invite: n, location: i } = e,
            { backgroundId: l } = t,
            s = (0, u.parse)(i.search).redirect_to ?? null;
        (null == s || "" === s || s.startsWith(R.BVt.ME) || (!(0, m.e)(s) && !ec(s))) && (s = null);
        let r = null;
        if (null == n) r = (0, ih.u8)(s);
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
        null != e &&
            (!t && n && x.A.getExperiments(!0),
            null != eq.default.getInstallationForTracking() && (0, ey.Tv)(null),
            S.default.track(
                R.HAw.INVITE_OPENED,
                { invite_code: (0, e$.m0)(e), load_time: ig.getTimeSinceNavigationStart() },
                { flush: !0 },
            )),
            t
                ? this.maybeResolveInvite()
                : null != e && (this.experimentFallbackTimeout = setTimeout(this.maybeResolveInvite, 2e3)),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            k.initialize(),
            (0, G.DC)();
    }
    componentDidUpdate(e) {
        !e.hasLoadedExperiments && this.props.hasLoadedExperiments && this.maybeResolveInvite(),
            e.invite?.state !== this.props.invite?.state && this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        null != this.experimentFallbackTimeout &&
            (clearTimeout(this.experimentFallbackTimeout), (this.experimentFallbackTimeout = null)),
            k.terminate();
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
                (0, id.RG)(t.id, ["embedded_splash"]).then((e) => {
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
        if (null != t && (el(t), null != t.type && to.uR.has(t.type))) {
            if ("denied" === (await eC()))
                return void S.default.track(R.HAw.INVITE_APP_INVOKE_FAILED, {
                    invite_code: (0, e$.m0)(e),
                    reason: "lna_denied",
                    invite_type: to.Xd[t.type],
                });
            A.Ay.openNativeAppModal(e);
        }
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (S.default.track(
                R.HAw.GUILD_TEMPLATE_OPENED,
                { guild_template_code: e, load_time: ig.getTimeSinceNavigationStart() },
                { flush: !0 },
            ),
            eS.A.resolveGuildTemplate(e),
            eS.A.openNativeAppModal(e));
    }
    resolveGiftCode() {
        let { giftCode: e } = this.props;
        null != e &&
            p.Ay.resolveGiftCode(e, !0, !0)
                .then((t) => {
                    null != t && null == t.giftCode.promotion && f.h.wait(() => p.Ay.openNativeGiftCodeModal(e));
                })
                .catch(p.Ay.reportUnexpectedGiftCodeError);
    }
    render() {
        let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
        return (0, o.jsxs)(iy.A, {
            splash: e,
            children: [
                (0, o.jsx)(ei.A, { path: R.BVt.LOGIN_HANDOFF, render: (e) => (0, o.jsx)(rs, { ...e, redirectTo: t }) }),
                (0, o.jsx)(ei.A, { path: R.BVt.LOGIN_ONE_TIME, render: (e) => (0, o.jsx)(rC, { ...e }) }),
                (0, o.jsx)(ei.A, {
                    impressionName: d.ImpressionNames.USER_LOGIN,
                    path: R.BVt.LOGIN,
                    render: (e) => (0, o.jsx)(rl, { ...e, redirectTo: t }),
                }),
                (0, o.jsx)(ei.A, {
                    impressionName: d.ImpressionNames.USER_REGISTRATION,
                    path: R.BVt.REGISTER,
                    render: (e) => (0, o.jsx)(ru, { ...e, redirectTo: t }),
                }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, o.jsx)(ro, { login: !0, ...e }),
                }),
                (0, o.jsx)(ei.A, { path: R.BVt.GIFT_CODE(":giftCode"), render: (e) => (0, o.jsx)(ro, { ...e }) }),
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
                            ? (0, o.jsx)(rc, { inviteKey: s, transitionTo: l }, s)
                            : (0, o.jsx)(
                                  rr,
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
                            ? (0, o.jsx)(l6, { code: t }, t)
                            : (0, o.jsx)(ra, {
                                  code: t,
                                  location: i,
                                  transitionTo: l,
                                  login: n === R.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, o.jsx)(ei.A, { path: R.BVt.VERIFY, render: (e) => (0, o.jsx)(rm, { ...e }) }),
                (0, o.jsx)(ei.A, { path: R.BVt.VERIFY_HUB_EMAIL, render: (e) => (0, o.jsx)(rA, { ...e }) }),
                (0, o.jsx)(ei.A, { path: R.BVt.VERIFY_REQUEST, render: (e) => (0, o.jsx)(rg, { ...e }) }),
                (0, o.jsx)(ei.A, { path: R.BVt.DISABLE_EMAIL_NOTIFICATIONS, render: (e) => (0, o.jsx)(rx, { ...e }) }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, o.jsx)(rp, { ...e }),
                }),
                (0, o.jsx)(ei.A, { path: R.BVt.AUTHORIZE_IP, render: (e) => (0, o.jsx)(rd, { ...e }) }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.REJECT_IP,
                    render: (e) => (0, o.jsx)(rf, { source: R.BVt.REJECT_IP, ...e }),
                }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.REJECT_MFA,
                    render: (e) => (0, o.jsx)(rf, { source: R.BVt.REJECT_MFA, ...e }),
                }),
                (0, o.jsx)(ei.A, { path: R.BVt.AUTHORIZE_PAYMENT, render: (e) => (0, o.jsx)(rh, { ...e }) }),
                (0, o.jsx)(ei.A, { path: R.BVt.RESET, render: (e) => (0, o.jsx)(rf, { source: R.BVt.RESET, ...e }) }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, o.jsx)(rj, { ...e }),
                }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.CHANNELS_GAME_SHOP(nK.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, o.jsx)(r_, { ...e }),
                }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.CHANNEL(nK.pv.guildId(), nK.pv.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, o.jsx)(rE, { ...e }),
                }),
                (0, o.jsx)(ei.A, { path: R.BVt.REPORT, render: () => (0, o.jsx)(ic, {}) }),
                (0, o.jsx)(ei.A, { path: R.BVt.REPORT_SECOND_LOOK, render: (e) => (0, o.jsx)(rv, { ...e }) }),
                (0, o.jsx)(ei.A, { path: R.BVt.ACCOUNT_REVERT(":token"), render: (e) => (0, o.jsx)(rN, { ...e }) }),
            ],
        });
    }
}
let ry = g.Ay.connectStores([eq.default, te.A, iu.A, eI.A, eb.A], (e) => {
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
        gift: null != s ? iu.A.get(s) : null,
        invite: null != l ? te.A.getInvite(l) : null,
        guildTemplate: null != r ? eb.A.getGuildTemplate(r) : null,
        hasLoadedExperiments: eI.A.hasLoadedExperiments,
    };
})(rI);
