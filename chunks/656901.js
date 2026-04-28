n.r(e), n.d(e, { default: () => iy });
var i,
    s,
    l = n(627968),
    r = n(64700),
    a = n(492462),
    d = n(110259),
    c = n(607399),
    o = n(470562),
    u = n(17928),
    h = n(228366),
    x = n(830215),
    m = n(869038),
    g = n(376728),
    p = n(526423),
    A = n(854378),
    E = n(976860),
    j = n(210714),
    f = n(430690),
    _ = n(503698),
    N = n.n(_),
    I = n(834730),
    v = n(821609),
    C = n(181658),
    T = n(625494),
    y = n(499785),
    S = (((i = {}).START = "start"), (i.PASSWORD = "password"), (i.SUCCESS = "success"), (i.FAILED = "failed"), i),
    b = n(652215),
    O = n(985018),
    R = n(244460),
    L = n(818050);
function D(t) {
    let { setOriginalEmail: e, setSlide: i, ready: s, token: a } = t,
        [c, o] = r.useState(!1),
        [u, h] = r.useState(null),
        [x, m] = r.useState(null),
        [g, p] = r.useState(""),
        E = r.useRef(null);
    return (
        r.useEffect(() => {
            s && E.current?.focus();
        }, [s]),
        (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(A._V, { src: null == x ? n(79418) : n(579656), className: N()(L.SX, L.Ot) }),
                (0, l.jsx)(A.hE, { children: O.intl.string(O.t.IfBQ56) }),
                null != x && "" !== x
                    ? (0, l.jsx)(I.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: x })
                    : null,
                (0, l.jsxs)(A.eB, {
                    className: N()(L.SX, L.QX),
                    children: [
                        (0, l.jsx)(A.pd, {
                            name: "password",
                            type: "password",
                            label: O.intl.string(O.t["8dM4FO"]),
                            setRef: E,
                            className: L.SX,
                            value: g,
                            onChange: p,
                            error: u,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: O.intl.string(O.t["yY/PXY"]),
                        }),
                        (0, l.jsx)("div", {
                            className: L.Ot,
                            children: (0, l.jsx)(v.$, {
                                text: O.intl.string(O.t.ezv91b),
                                fullWidth: !0,
                                onClick: () => {
                                    if (!c) {
                                        if (0 === g.length) {
                                            h(O.intl.string(O.t.R98xD5)), T._.dispatch(b.jej.WAVE_EMPHASIZE);
                                            return;
                                        }
                                        return (
                                            null != x && m(null),
                                            null != u && h(null),
                                            e(""),
                                            o(!0),
                                            y.A.post({
                                                url: b.Rsh.ACCOUNT_REVERT,
                                                body: { token: a, password: g },
                                                trackedActionData: { event: d.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((t) => {
                                                    let {
                                                        body: { email: n },
                                                    } = t;
                                                    p(""), e(n), i(S.SUCCESS);
                                                })
                                                .catch((t) => {
                                                    if (t instanceof Error)
                                                        m(
                                                            O.intl.formatToPlainString(O.t.aTVNes, {
                                                                statusPageURL: b.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let e = new C.A(t);
                                                        e.hasFieldErrors()
                                                            ? h(e.getAnyErrorMessage())
                                                            : m(
                                                                  (function (t) {
                                                                      switch (t) {
                                                                          case b.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                              return O.intl.string(O.t["11zzGR"]);
                                                                          case b.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                              return O.intl.string(O.t["6qmgaI"]);
                                                                          case b.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                              return O.intl.string(O.t.bChnKs);
                                                                          default:
                                                                              return O.intl.format(O.t.aTVNes, {
                                                                                  statusPageURL: b.qF7.STATUS,
                                                                              });
                                                                      }
                                                                  })(e.code).toString(),
                                                              );
                                                    }
                                                    T._.dispatch(b.jej.WAVE_EMPHASIZE);
                                                })
                                                .finally(() => {
                                                    o(!1);
                                                })
                                        );
                                    }
                                },
                                loading: c,
                                disabled: c,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: R.UD,
                    children: (0, l.jsx)(v.$, {
                        text: O.intl.string(O.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: () => {
                            p(""), i(S.START);
                        },
                    }),
                }),
            ],
        })
    );
}
var P = n(825484),
    G = n(749314);
function k(t) {
    let { children: e } = t;
    return (0, l.jsx)("li", {
        className: R.Aw,
        children: (0, l.jsx)(I.E, { variant: "text-sm/medium", color: "text-default", children: e }),
    });
}
function B(t) {
    let { setSlide: e, transitionTo: i } = t;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(A._V, { src: n(79418), className: N()(L.SX, L.Ot) }),
            (0, l.jsx)(A.hE, { className: L.QB, children: O.intl.string(O.t["8UcxI6"]) }),
            (0, l.jsx)(I.E, { variant: "text-md/normal", children: O.intl.string(O.t.O37hMl) }),
            (0, l.jsxs)(A.eB, {
                className: N()(L.SX, L.QX),
                children: [
                    (0, l.jsx)(I.E, { variant: "text-sm/normal" }),
                    (0, l.jsxs)("ul", {
                        className: R.qI,
                        children: [
                            (0, l.jsx)(k, { children: O.intl.string(O.t.Gj1Zry) }),
                            (0, l.jsx)(G.A, {}),
                            (0, l.jsx)(k, { children: O.intl.string(O.t["8C6t3B"]) }),
                            (0, l.jsx)(G.A, {}),
                            (0, l.jsx)(k, { children: O.intl.string(O.t.mToZMA) }),
                            (0, l.jsx)(G.A, {}),
                            (0, l.jsx)(k, { children: O.intl.string(O.t.TPEvkc) }),
                            (0, l.jsx)(G.A, {}),
                            (0, l.jsx)(k, { children: O.intl.string(O.t.H8Y1Ln) }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(P.e, {
                direction: "vertical",
                fullWidth: !0,
                className: R.UD,
                children: [
                    (0, l.jsx)(v.$, { text: O.intl.string(O.t.GgCRqR), onClick: () => e(S.PASSWORD) }),
                    (0, l.jsx)(v.$, {
                        text: O.intl.string(O.t["B/yHcQ"]),
                        variant: "secondary",
                        onClick: () => i(b.BVt.LOGIN, { source: "account_revert" }),
                    }),
                ],
            }),
        ],
    });
}
function V(t) {
    let { email: e } = t;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(A._V, { src: n(79418), className: N()(L.SX, L.Ot) }),
            (0, l.jsx)(A.hE, { children: O.intl.string(O.t.ailkVG) }),
            (0, l.jsx)(A.tK, { children: O.intl.format(O.t["4ZMVCI"], { email: e }) }),
            (0, l.jsx)(I.E, {
                className: N()(L.QB, L.QX),
                variant: "text-md/normal",
                children: O.intl.string(O.t["dpAn+8"]),
            }),
        ],
    });
}
function U(t) {
    let { transitionTo: e, token: n, width: i } = t,
        [s, a] = r.useState(S.START),
        [c, o] = r.useState(null),
        [u, h] = r.useState(""),
        x = { impression_group: d.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, l.jsx)("div", {
        style: { margin: "8px" },
        children: (0, l.jsxs)(f.t, {
            activeSlide: s,
            width: i,
            onSlideReady: o,
            children: [
                (0, l.jsx)(f.q, {
                    id: S.START,
                    impressionProperties: x,
                    impressionName: d.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, l.jsx)(B, { setSlide: a, transitionTo: e }),
                }),
                (0, l.jsx)(f.q, {
                    id: S.PASSWORD,
                    impressionProperties: x,
                    impressionName: d.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, l.jsx)(D, {
                        setOriginalEmail: h,
                        setSlide: a,
                        transitionTo: e,
                        ready: c === S.PASSWORD,
                        token: n,
                    }),
                }),
                (0, l.jsx)(f.q, {
                    id: S.SUCCESS,
                    impressionProperties: x,
                    impressionName: d.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, l.jsx)(V, { email: u }),
                }),
            ],
        }),
    });
}
u.Ay.initialize();
class M extends r.PureComponent {
    static defaultProps = { transitionTo: E.pX, replaceWith: E.bG };
    componentDidMount() {
        (0, j.d)("account_revert");
    }
    render() {
        let { token: t } = this.props.match.params;
        return (0, l.jsx)(A.Ay, {
            style: { padding: 0 },
            children: (0, l.jsx)(U, { width: 464, token: t, ...this.props }),
        });
    }
}
var w = n(549711);
function F(t) {
    h.h.dispatch({ type: "AUTH_INVITE_UPDATE", invite: t });
}
var K = n(212640),
    W = n(636537),
    Q = n(123292),
    z = n(650048),
    H = n(860689),
    Y = n(396681);
u.Ay.initialize();
class q extends r.PureComponent {
    static defaultProps = { transitionTo: (t) => n.g.location.assign(t) };
    state = { busy: !0, success: !1, guild: null };
    componentDidMount() {
        let t = (0, Y.A)(this.props.location),
            e = (0, a.parse)(this.props.location.search);
        W.Bo.post({
            url: b.Rsh.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
            body: { token: t, pixel_uuid: e.hash, guild_id: e.guild_id },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (t) => {
                let {
                        body: { guild: e },
                    } = t,
                    n = (0, H.dangerouslyConstructGuildRecordFromUntypedObject)(e);
                this.setState({ success: !0, busy: !1, guild: n });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, j.d)("disable_server_highlight_notifications");
    }
    renderBusy() {
        return (0, l.jsx)(A.Ay, { children: (0, l.jsx)(A.CK, {}) });
    }
    renderSuccess() {
        let { defaultRoute: t, transitionTo: e } = this.props,
            { guild: n } = this.state;
        return (0, l.jsxs)(A.Ay, {
            children: [
                (0, l.jsx)(A.hE, { className: L.QB, children: O.intl.string(O.t.Z33eiP) }),
                (0, l.jsx)(A.tK, { children: O.intl.format(O.t.NRWtfC, { guildName: n.name }) }),
                (0, l.jsx)("div", {
                    className: L.eT,
                    children: (0, l.jsx)(v.$, { text: O.intl.string(O.t.fIv16B), fullWidth: !0, onClick: () => e(t) }),
                }),
                (0, l.jsx)("div", {
                    className: L.Ot,
                    children: (0, l.jsx)(Q.Q, {
                        text: O.intl.string(O.t["cGmT/J"]),
                        onClick: () => {
                            e(b.BVt.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                        },
                    }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: t, transitionTo: e } = this.props;
        return (0, l.jsxs)(A.Ay, {
            children: [
                (0, l.jsx)(A._V, { src: n(37772), className: L.SX }),
                (0, l.jsx)(A.hE, { className: L.QB, children: O.intl.string(O.t.ox9hIS) }),
                (0, l.jsx)(A.tK, { children: O.intl.string(O.t["/dcuR5"]) }),
                (0, l.jsx)("div", {
                    className: L.eT,
                    children: (0, l.jsx)(v.$, { text: O.intl.string(O.t.fIv16B), fullWidth: !0, onClick: () => e(t) }),
                }),
            ],
        });
    }
    render() {
        let { busy: t, success: e } = this.state;
        return t ? this.renderBusy() : e ? this.renderSuccess() : this.renderError();
    }
}
let X = u.Ay.connectStores([z.A], () => ({ defaultRoute: z.A.defaultRoute }))(q);
var $ = n(628284),
    J = n(557722),
    Z = n(628387),
    tt = n(148864),
    te = n(354948);
n(53516);
var tn = n(653307),
    ti = n(736056),
    ts = n(122906),
    tl = n(121623),
    tr = n(31008);
function ta(t) {
    let { alt: e, ariaLabel: n, ariaHidden: i, role: s, width: r = 288, height: a = 162 } = t;
    return (0, l.jsx)("img", {
        style: { width: r, height: a },
        src: tr.A,
        alt: e,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var td = n(154672),
    tc = n(331322),
    to = n(534514),
    tu = n(289873),
    th = n(794347);
function tx(t) {
    let { title: e, subtitle: n, buttonText: i, image: s, onButtonClick: r, loading: a } = t;
    return (0, l.jsx)(A.Ay, {
        className: th.kL,
        children: (0, l.jsxs)(tc.B, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, l.jsxs)(tc.B, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, l.jsxs)(tc.B, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != s &&
                                    (0, l.jsx)(tc.B, {
                                        align: "center",
                                        justify: "center",
                                        className: th.Sl,
                                        children: s,
                                    }),
                                a && (0, l.jsx)(tu.y, { type: tu.y.Type.SPINNING_CIRCLE }),
                                (0, l.jsx)(to.D, { variant: "heading-xl/semibold", color: "text-strong", children: e }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, l.jsx)(I.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                className: th.VA,
                                children: n,
                            }),
                    ],
                }),
                !a && (0, l.jsx)(v.$, { onClick: r, text: i, variant: "overlay-primary" }),
            ],
        }),
    });
}
let tm = !1,
    tg = null,
    tp = null;
class tA extends u.Ay.Store {
    static displayName = "HubEmailVerificationStore";
    getState() {
        return { verifySuccess: tm, verifyErrors: tg, redirectGuildId: tp };
    }
}
let tE = new tA(h.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (t) {
        let { guildId: e } = t;
        (tm = !0), (tg = null), (tp = e);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (t) {
        let { errors: e } = t;
        (tm = !1), (tg = e);
    },
});
var tj = n(284009),
    tf = n.n(tj),
    t_ = n(481613),
    tN = n.n(t_),
    tI = n(400253),
    tv = n(742821),
    tC = n(80703),
    tT = n(495544),
    ty = n(954571),
    tS = n(877062);
u.Ay.initialize();
var tb = n(21599),
    tO = n(519244),
    tR = n(280513),
    tL = n(717421),
    tD = n(661531),
    tP = n(359778),
    tG = n(235986),
    tk = n(592743);
function tB(t) {
    let { text: e, buttonCta: i, onClick: s } = t;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(A._V, { src: n(431979) }),
            (0, l.jsx)(A.hE, { className: N()(L.QX, L.QB, tn.tR), children: O.intl.string(O.t.eL5z0i) }),
            (0, l.jsx)(A.tK, { className: L.C2, children: O.intl.string(O.t.poAv63) }),
            (0, l.jsxs)(tP.Z, {
                className: tk.Nr,
                type: tP.Z.Types.CUSTOM,
                children: [
                    (0, l.jsx)("img", { alt: "", className: tk.q8, src: n(133531) }),
                    (0, l.jsx)("img", { alt: "", className: tk.dw, src: n(610925) }),
                    (0, l.jsxs)(tG.A, {
                        className: tk.p_,
                        direction: tG.A.Direction.VERTICAL,
                        align: tG.A.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, l.jsx)(I.E, {
                                tag: "strong",
                                className: tk.p8,
                                variant: "text-md/normal",
                                style: { color: tD.A.unsafe_rawColors.PRIMARY_300.css },
                                children: e,
                            }),
                            (0, l.jsx)("div", {
                                className: tk.x6,
                                children: (0, l.jsx)(v.$, { text: i, fullWidth: !0, onClick: s }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function tV(t) {
    let { text: e, buttonCta: n, theme: i = b.NJ8.DARK, onClick: s } = t;
    return (0, l.jsx)(A.Ay, { theme: i, children: (0, l.jsx)(tB, { text: e, buttonCta: n, onClick: s }) });
}
var tU = n(765671),
    tM = n(9994),
    tw = n(71393),
    tF = n(299091),
    tK = n(486020),
    tW = n(403362),
    tQ = n(778712),
    tz = n(47167),
    tH = n(137177),
    tY = n(714991),
    tq = n(427262),
    tX = n(172799),
    t$ = n(330936),
    tJ = n(82210);
let tZ = (t) => {
        let e = { onlineCount: t.approximate_presence_count ?? 0, memberCount: t.approximate_member_count ?? 0 };
        return 0 === e.memberCount && 0 === e.memberCount ? null : e;
    },
    t0 = (t) => t.target_type === tX.yV.STREAM && null != t.target_user,
    t1 = (t) => t.channel?.type === b.rbe.GROUP_DM,
    t2 = (t) => null == t.channel && null == t.guild && null != t.inviter,
    t3 = (t) => t.state === b.elq.ACCEPTED,
    t4 = (t) => {
        let { guild_scheduled_event: e } = t;
        return null != e;
    },
    t8 = (t) => {
        let e;
        return !t4(t) && (!!t2(t) || (null != t.inviter && !t3(t) && ((e = tZ(t)), !((e?.memberCount ?? 0) > 100))));
    },
    t7 = (t) => {
        let { guild: e, user: n, application: i } = t;
        return null != i
            ? (0, l.jsx)(tH.A, { className: tJ.Z2, game: i, size: tJ.q6 })
            : null != n
              ? (0, l.jsx)(A.eu, {
                    src: n.getAvatarURL(void 0, 100),
                    size: tQ._3.DEPRECATED_SIZE_100,
                    className: tJ.my,
                })
              : null != e
                ? (0, l.jsx)(A.$v, { guild: e, size: A.$v.Sizes.LARGER, className: tJ.$f, animate: !0 })
                : null;
    };
function t6(t) {
    let { invite: e, textClassName: n, className: i } = t,
        s = tZ(e);
    return null == s || t8(e) || e?.guild?.id === t$.TA
        ? null
        : (0, l.jsx)(A.R1, {
              className: N()(tJ.He, i),
              online: s.onlineCount,
              total: s.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function t9(t) {
    let { invite: e, showBigUserIcon: n } = t,
        i = r.useMemo(
            () =>
                n
                    ? null
                    : t0(e) && null != e.target_user
                      ? tK.Ay.getUserAvatarURL(e.target_user)
                      : t8(e) && null != e.inviter
                        ? tK.Ay.getUserAvatarURL(e.inviter)
                        : null,
            [e, n],
        ),
        s = O.intl.string(O.t["3rE1P8"]);
    return (
        t1(e)
            ? (s =
                  e.channel?.name != null && e.inviter?.username != null
                      ? O.intl.format(O.t.Lu4h18, { username: e.inviter.username })
                      : O.intl.string(O.t.OsdY8B))
            : t0(e) && null != e.target_user
              ? (s = O.intl.formatToPlainString(O.t.x2L32Q, { username: e.target_user.username }))
              : t3(e)
                ? (s = O.intl.string(O.t["FDsl+J"]))
                : t8(e) &&
                  null != e.inviter &&
                  (s = O.intl.format(O.t.spU2mI, { username: tq.Ay.getFormattedName(e.inviter) })),
        (0, l.jsxs)("div", {
            className: tJ.JB,
            children: [
                null != i &&
                    (0, l.jsx)("div", {
                        className: tJ._t,
                        children: (0, l.jsx)(A.eu, { src: i, size: tQ._3.SIZE_24 }),
                    }),
                (0, l.jsx)(A.tK, { className: tJ.__invalid_inviteJoinSubTitle, children: s }),
            ],
        })
    );
}
function t5(t) {
    let e,
        n,
        i,
        { user: s, guild: r, channel: a, application: d, showBigUserIcon: c } = t,
        o = (0, tz.Ay)(a);
    if (null != r)
        c && null == d && (e = (0, l.jsx)(A.$v, { guild: r, size: A.$v.Sizes.SMALL })),
            (n = r.name),
            null != d &&
                ((n = d.name),
                (i = (0, l.jsxs)("div", {
                    className: tJ.JB,
                    children: [
                        (0, l.jsx)(A.tK, { className: tJ.R9, children: O.intl.string(O.t["3gg9fF"]) }),
                        (0, l.jsxs)("div", {
                            className: tJ.bo,
                            children: [
                                (0, l.jsx)(A.$v, { guild: r, size: A.$v.Sizes.SMALL }),
                                (0, l.jsx)(to.D, {
                                    color: "text-strong",
                                    variant: "heading-xl/semibold",
                                    children: r.name,
                                }),
                            ],
                        }),
                    ],
                })));
    else if (null != a) {
        if (null == s) throw Error("no inviter in group DM invite");
        let t = tq.Ay.getFormattedName(s);
        null != o && "" !== o
            ? ((n = o), null != a.icon && (e = (0, l.jsx)(A.F4, { channel: a, size: tQ._3.SIZE_32 })))
            : (n = t);
    } else if (null != s) {
        let t = tq.Ay.getFormattedName(s);
        (n = O.intl.formatToPlainString(O.t["4aF92R"], { username: t })),
            (i = (0, l.jsx)(A.tK, { className: tJ.b$, children: O.intl.format(O.t.Quj7HX, { username: t }) }));
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(A.hE, {
                className: tJ.DD,
                children: [
                    null != r ? (0, l.jsx)(tY.A, { guild: r, className: tJ.n2, tooltipPosition: "left" }) : null,
                    e,
                    n,
                ],
            }),
            i,
        ],
    });
}
var et = n(395671),
    ee = n(95701),
    en = n(889227),
    ei = n(548118),
    es = n(557582),
    el = n(167630),
    er = n(367048);
function ea(t) {
    let { guildScheduledEvent: e, channel: n, onAcceptInvite: i, isSubmitting: s } = t;
    return (0, l.jsxs)("div", {
        className: er.s4,
        children: [
            (0, l.jsx)(es.Ay, {
                name: e.name,
                description: e.description ?? void 0,
                headerVariant: "heading-md/medium",
                descriptionClassName: er.__invalid_channelDescription,
                guildId: e.guild_id,
                guildEvent: e,
                eventPreview: e,
            }),
            null != n &&
                (0, l.jsx)("div", {
                    className: er.yW,
                    children: (0, l.jsx)(el.A, { guildScheduledEvent: e, channel: n }),
                }),
            (0, l.jsx)("div", {
                className: er.xG,
                children: (0, l.jsx)(v.$, {
                    variant: "active",
                    size: "md",
                    text: O.intl.string(O.t.riu2R5),
                    onClick: i,
                    loading: s,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
function ed(t) {
    let { invite: e } = t,
        n = null != e.guild ? (0, H.DY)(e.guild) : null;
    if (null == n) return null;
    let i = n.description ?? "";
    return (0, l.jsxs)("div", {
        className: er.kQ,
        children: [
            (0, l.jsx)(to.D, { className: er.s7, variant: "text-sm/medium", children: O.intl.string(O.t.Eabu1z) }),
            (0, l.jsxs)("div", {
                className: er.bo,
                children: [
                    (0, l.jsx)(ei.Ay, { guild: n, active: !0, size: ei.Ay.Sizes.MEDIUM }),
                    (0, l.jsxs)("div", {
                        className: er.bW,
                        children: [
                            (0, l.jsxs)(I.E, {
                                className: er.J5,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, l.jsx)(tY.A, { guild: n, className: er.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, l.jsx)(t6, { invite: e, textClassName: er.kS, className: er.pe }),
                        ],
                    }),
                ],
            }),
            i.length > 0 &&
                (0, l.jsx)("details", {
                    className: er.x_,
                    children: (0, l.jsx)(I.E, { color: "text-default", variant: "text-sm/normal", children: i }),
                }),
        ],
    });
}
function ec(t) {
    let { invite: e, channel: n, isSubmitting: i, onAcceptInvite: s } = t,
        { guild_scheduled_event: r } = e;
    return null != r
        ? (0, l.jsx)(ea, { guildScheduledEvent: r, channel: n, isSubmitting: i, onAcceptInvite: s })
        : null;
}
var eo = n(467661);
function eu(t) {
    let { invite: e, onAcceptInvite: n, disableUser: i = !1 } = t;
    if (null == e) return null;
    let s = null != e.guild ? (0, H.DY)(e.guild) : null,
        r = null != e.channel ? (0, ee.OY)(e.channel) : null,
        a = null != e.target_application ? new et.Ay(e.target_application) : null,
        d = i || null == e.inviter ? null : new en.A(e.inviter),
        c =
            !(
                (null != e.approximate_member_count && e.approximate_member_count > 100) ||
                (null != s && s.features.has(b.GuildFeatures.COMMUNITY))
            ) &&
            null != d &&
            t1(e),
        o = ((t) => {
            let { state: e } = t;
            switch (e) {
                case b.elq.ACCEPTING:
                case b.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(e),
        u = { invite: e, user: d, guild: s, channel: r, application: a };
    return t4(e)
        ? (0, l.jsx)(ec, { invite: e, channel: r, isSubmitting: o, onAcceptInvite: n })
        : (0, l.jsxs)("div", {
              className: eo.kL,
              children: [
                  (0, l.jsx)(t7, { application: a, guild: s, user: c || t2(e) ? d : null }),
                  t2(e) ? null : (0, l.jsx)(t9, { ...u, showBigUserIcon: c }),
                  (0, l.jsx)(t5, { ...u, showBigUserIcon: c }),
                  (0, l.jsx)(t6, { ...u }),
                  (0, l.jsx)("div", {
                      className: eo.xG,
                      children: (0, l.jsx)(v.$, {
                          variant: "primary",
                          size: "md",
                          text: O.intl.string(O.t.ohMvm1),
                          onClick: n,
                          loading: o,
                          fullWidth: !0,
                      }),
                  }),
              ],
          });
}
var eh = n(473644),
    ex = n(57930),
    em = n(115703),
    eg = n(438842),
    ep = n(888849);
function eA(t) {
    let { invite: e, guild: n, profile: i, onAcceptInvite: s } = t,
        { gamesToDisplay: r, lastGameToDisplay: a, remainingGames: d } = (0, em.A)(i),
        c = (function (t) {
            let { state: e } = t;
            switch (e) {
                case b.elq.ACCEPTING:
                case b.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(e),
        o = i.description ?? n.description;
    return (0, l.jsxs)("div", {
        className: ep.f_,
        children: [
            (0, l.jsxs)("div", {
                className: ep.qQ,
                children: [
                    (0, l.jsx)("div", {
                        className: ep.WT,
                        children: (0, l.jsx)("div", { className: ep.g_, "aria-hidden": !0 }),
                    }),
                    (0, l.jsxs)("div", {
                        className: ep.TS,
                        children: [
                            (0, l.jsx)(ex.A, { guild: n, outline: !0 }),
                            (0, l.jsxs)(tc.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, l.jsx)(eh.A, {
                                        guild: n,
                                        invite: e,
                                        showGuildTag: !0,
                                        highContrast: !0,
                                        hideEnglish: !0,
                                    }),
                                    null != o &&
                                        "" !== o &&
                                        (0, l.jsx)(I.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: o,
                                        }),
                                    (0, l.jsx)(eg.A, {
                                        gamesToDisplay: r,
                                        lastGameToDisplay: a,
                                        remainingGames: d,
                                        activity: i.gameActivity,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: ep.Fx,
                children: (0, l.jsx)(v.$, {
                    variant: "primary",
                    size: "md",
                    text: O.intl.string(O.t.ohMvm1),
                    onClick: s,
                    loading: c,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
let eE = (0, n(945810).mj)({
        name: "2026-03-mobile-web-invite-server-profile",
        kind: "installation",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ej = n(843020);
function ef(t) {
    if (null == t || !tR.i.VISIBLE.has(t.visibility)) return !1;
    let e = null != t.description && t.description.length > 0,
        n = null != t.gameApplicationIds && t.gameApplicationIds.length > 0;
    return e || n;
}
function e_() {
    return (0, l.jsx)("div", { className: ep.$k, children: (0, l.jsx)(tu.y, {}) });
}
function eN(t) {
    let e = t?.state == null && t?.channel == null;
    if (null == t || null == t.state || e) return 0;
    let n = t.state;
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
            (0, tW.xb)(n);
    }
}
function eI(t) {
    let { invite: e, onAcceptInvite: n } = t;
    return e?.state === b.elq.BANNED
        ? (0, l.jsx)(tB, { text: O.intl.string(O.t["5AkWAd"]), buttonCta: O.intl.string(O.t["8osdkn"]), onClick: n })
        : (0, l.jsx)(tB, { text: O.intl.string(O.t["usP+Mb"]), buttonCta: O.intl.string(O.t["8osdkn"]), onClick: n });
}
function ev(t) {
    let { children: e, cardChildren: n, startAnimHeightPx: i, sectionClassName: s, inviteCardClassName: r = ep.qF } = t,
        { ref: a, height: d } = (0, tU.Ay)(),
        c = (0, tL.z)({ height: null != d && 0 !== d ? `${d}px` : `${i}px`, config: tO.config.stiff });
    return (0, l.jsxs)(tO.animated.div, {
        className: r,
        style: c,
        children: [
            (0, l.jsx)(tO.animated.div, {
                className: ep.NS,
                style: c,
                children: (0, l.jsx)("section", { ref: a, className: s, children: e }),
            }),
            n,
        ],
    });
}
function eC(t) {
    let { invite: e } = t;
    if (null == e || !t4(e)) return null;
    let n = eN(e);
    return (0, l.jsx)(ev, {
        startAnimHeightPx: 0,
        sectionClassName: ep.ui,
        children: 1 === n ? (0, l.jsx)(ed, { invite: e }) : null,
    });
}
let eT = { 1: ep._r, 2: ep.Gm, 0: ep.Kt };
function ey(t) {
    let e,
        { invite: n } = t,
        i = eN(n),
        { enabled: s } = eE.useConfig({ location: "AcceptInviteMobile" }),
        a = null != n ? (0, tM.oO)(n) : null,
        d = n?.guild != null ? (0, H.DY)(n.guild) : null,
        c = null != d && ef(a) && null != n && !t4(n),
        o = s && c;
    if (
        (r.useEffect(() => {
            c && eE.getConfig({ location: "AcceptInviteMobile.hasProfile" });
        }, [c]),
        null == n)
    )
        e = (0, l.jsx)(e_, {});
    else
        switch (i) {
            case 1:
                e = o
                    ? (0, l.jsx)(eA, { invite: n, guild: d, profile: a, onAcceptInvite: t.onAcceptInvite })
                    : (0, l.jsx)(eu, { ...t, invite: n });
                break;
            case 2:
                e = (0, l.jsx)(eI, { ...t, invite: n });
                break;
            default:
                e = (0, l.jsx)(e_, {});
        }
    let u = 1 === i && o ? ep.c4 : ep.qF;
    return (0, l.jsx)(ev, { startAnimHeightPx: 200, sectionClassName: eT[i], inviteCardClassName: u, children: e });
}
function eS(t) {
    let { invite: e, onAcceptInvite: n } = t,
        { guild: i } = e ?? {},
        s = {},
        { enabled: r } = eE.useConfig({ location: "AcceptInviteMobile" }),
        a = null != e ? (0, tM.oO)(e) : null,
        d = null != i && ef(a) && null != e && !t4(e);
    if (i?.splash != null) {
        let t = tK.Ay.getGuildSplashURL({ id: i.id, splash: i.splash });
        null != t && ((s.backgroundImage = `url(${t})`), (s.backgroundSize = "cover"));
    } else r && d && ((s.backgroundImage = `url(${ej})`), (s.backgroundSize = "cover"));
    return (0, l.jsxs)(A.Ay, {
        theme: b.NJ8.DARK,
        className: ep.G3,
        style: s,
        contentClassName: ep.__,
        children: [(0, l.jsx)(ey, { ...t, onAcceptInvite: n }), (0, l.jsx)(eC, { ...t })],
    });
}
var eb = n(723702);
function eO(t) {
    let { alt: e, ariaLabel: n, ariaHidden: i, role: s, width: r = 288, height: a = 192 } = t;
    return (0, l.jsx)("img", {
        style: { width: r, height: a },
        src: "https://cdn.discordapp.com/assets/content/f116e92cafb14967bf471809621718b4c2fe5abd27c9236c1ab4353d32a9fc6c.svg",
        alt: e,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var eR = n(611346),
    eL = n(604880);
function eD(t) {
    let { token: e, hasError: n, errorReason: i } = t;
    return n
        ? (0, l.jsxs)("div", {
              className: eR.MY,
              children: [
                  (0, l.jsx)("div", { className: eR.r$, children: (0, l.jsx)("img", { src: eL, alt: "" }) }),
                  (0, l.jsxs)("div", {
                      className: eR.Qs,
                      children: [
                          (0, l.jsx)(eO, { alt: "" }),
                          (0, l.jsx)(to.D, {
                              variant: "heading-lg/semibold",
                              className: eR.ky,
                              children: O.intl.string(O.t.RtCSr1),
                          }),
                          (0, l.jsx)(I.E, {
                              variant: "text-md/normal",
                              className: eR.G3,
                              children: O.intl.string(O.t["S+YjYJ"]),
                          }),
                          (0, l.jsx)(v.$, {
                              variant: "primary",
                              text: O.intl.string(O.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  ty.default.track(b.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: i }),
                                      (0, E.pX)(b.BVt.LOGIN);
                              },
                          }),
                      ],
                  }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: eR.MY,
              children: [
                  (0, l.jsx)("div", { className: eR.r$, children: (0, l.jsx)("img", { src: eL, alt: "" }) }),
                  (0, l.jsxs)("div", {
                      className: eR.Qs,
                      children: [
                          (0, l.jsx)(eO, { alt: "" }),
                          (0, l.jsx)(to.D, {
                              variant: "heading-lg/semibold",
                              className: eR.ky,
                              children: O.intl.string(O.t["9h/0Rl"]),
                          }),
                          (0, l.jsx)(I.E, {
                              variant: "text-md/normal",
                              className: eR.G3,
                              children: O.intl.string(O.t.Wgm7Om),
                          }),
                          (0, l.jsx)(v.$, {
                              variant: "primary",
                              text: O.intl.string(O.t.NydsTd),
                              fullWidth: !0,
                              onClick: () => {
                                  let t, n;
                                  (t = (function (t) {
                                      let e = platform.os?.family;
                                      if ("Android" === e || "iOS" === e) {
                                          let e = tT.default.getFingerprint(),
                                              n = (0, tv.I_)(),
                                              i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/login/one-time?token=${t}`;
                                          return (0, tv.Ay)(i, {
                                              utmSource: "one-time-login",
                                              fingerprint: e,
                                              attemptId: n,
                                          });
                                      }
                                      return "discord://";
                                  })(e)),
                                      (n = (0, tv.X7)(t)),
                                      ty.default.track(b.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                                          detection_type: "mobile_button_clicked",
                                          device_type: c.Fr ? "mobile" : "tablet",
                                          platform: ty.default.getSuperProperties()?.os,
                                      }),
                                      null != n &&
                                          ty.default.track(b.HAw.DEEP_LINK_CLICKED, {
                                              fingerprint: (0, tC.v)(n.fingerprint),
                                              attempt_id: n.attemptId,
                                              source: n.utmSource,
                                          }),
                                      tS.A.launch(t, (t) => {
                                          t || (0, E.bG)({ pathname: b.BVt.LOGIN });
                                      });
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var eP = n(613057);
let eG = (t) => {
    let { title: e, subtitle: n, buttonText: i, buttonOnClick: s } = t;
    return (0, l.jsx)(A.Ay, {
        children: (0, l.jsxs)(tc.B, {
            gap: 24,
            children: [
                (0, l.jsxs)(tc.B, {
                    gap: 8,
                    children: [(0, l.jsx)(A.hE, { children: e }), (0, l.jsx)(A.tK, { children: n })],
                }),
                (0, l.jsx)(v.$, { onClick: s, text: i, fullWidth: !0 }),
            ],
        }),
    });
};
var ek = n(463347),
    eB = n(189213),
    eV = n(192308),
    eU = n(347704),
    eM = n(803306),
    ew = n(17372),
    eF = n(369053),
    eK = n(975571),
    eW = n(928658);
async function eQ(t, e) {
    try {
        await (0, eF.TP)(t, e);
    } catch (t) {
        if (null != t && "object" == typeof t && 429 === t.status)
            throw { status: 429, body: { message: O.intl.string(O.t.Z2hIUf) } };
        throw t;
    }
}
function ez(t, e) {
    let i = !1,
        s = () => {
            i || e?.();
        },
        r = (r) => {
            (i = !0),
                setTimeout(() => {
                    i = !1;
                }, 0);
            let a = () => eQ(t, r),
                c = async (e) => await (0, eF.G_)(t, r, e),
                o = (n) => {
                    (i = !0),
                        setTimeout(() => {
                            i = !1;
                        }, 0);
                    let s = n?.token;
                    t === ew.tY.MESSAGE
                        ? (0, eW.bM)(s, e)
                        : t === ew.tY.USER
                          ? (0, eW.nQ)(s, e)
                          : t === ew.tY.GUILD
                            ? (0, eW.V3)(s, e)
                            : t === ew.tY.MEDIA_TAKEDOWN && (0, eW._Y)(s, e);
                };
            (0, eV.openModalLazy)(
                async () => {
                    let { default: t } = await n.e("19840").then(n.bind(n, 79779));
                    return (e) =>
                        (0, l.jsx)(t, {
                            ...e,
                            onFormSubmit: c,
                            onResend: a,
                            onSuccess: o,
                            headerText: O.intl.string(O.t.H3Q7U8),
                            confirmButtonText: O.intl.string(O.t["13ofGu"]),
                            impression: { impressionName: d.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                        });
                },
                { onCloseCallback: s, dismissable: !1 },
            );
        };
    return () => {
        (0, eV.closeAllModals)();
        let e = (e) => eQ(t, e);
        (0, eV.openModalLazy)(
            async () => {
                let { default: i } = await n.e("29232").then(n.bind(n, 180275));
                return (n) =>
                    (0, l.jsx)(i, {
                        ...n,
                        onFormSubmit: e,
                        onSuccess: r,
                        headerText: O.intl.string(O.t.ZLRYGU),
                        confirmButtonText: O.intl.string(O.t.PDTjLN),
                        subtitle: t === ew.tY.MEDIA_TAKEDOWN ? O.intl.string(O.t.jt3z8f) : void 0,
                    });
            },
            { onCloseCallback: s, dismissable: !1 },
        );
    };
}
var eH = n(939249),
    eY = n(921853),
    eq = n(750997);
let eX = { [ew.tY.MESSAGE]: O.t.fuqnBC, [ew.tY.USER]: O.t.F4jrRW, [ew.tY.GUILD]: O.t.gH3aMs },
    e$ = (t) => {
        let { title: e, menuType: n, onReopen: i } = t,
            s = r.useCallback(() => {
                ez(n, i)();
            }, [n, i]);
        return (0, l.jsxs)(eH.D, {
            className: eq.b0,
            onClick: s,
            children: [
                (0, l.jsx)(I.E, { variant: "text-md/medium", children: e }),
                (0, l.jsx)(eY.n, { size: "sm", style: { transform: "rotate(180deg)" } }),
            ],
        });
    },
    eJ = (t) => {
        let { dsaCapabilities: e, onReopen: n } = t;
        return (0, l.jsx)(tc.B, {
            gap: 16,
            children: (0, l.jsx)("div", {
                className: eq.kL,
                children: e.map((t) =>
                    t === ew.tY.MEDIA_TAKEDOWN || null == eX[t]
                        ? null
                        : (0, l.jsx)(e$, { title: O.intl.string(eX[t]), menuType: t, onReopen: n }, t),
                ),
            }),
        });
    };
var eZ = n(881636),
    e0 = n(913951);
let e1 = () => {
    let { goToStep: t } = (0, eU.n)(),
        e = r.useCallback(() => {
            t(e8.DSA);
        }, [t]),
        n = r.useCallback(() => {
            t(e8.TIDA);
        }, [t]);
    return (0, l.jsxs)(tc.B, {
        gap: 8,
        children: [
            (0, l.jsx)(I.E, { variant: "text-md/normal", children: O.intl.string(O.t.bd1h5T) }),
            (0, l.jsxs)("div", {
                className: e0.k,
                children: [
                    (0, l.jsxs)(eH.D, {
                        className: e0.b,
                        onClick: e,
                        children: [
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(I.E, {
                                        variant: "text-md/medium",
                                        children: O.intl.string(O.t["AszWL/"]),
                                    }),
                                    (0, l.jsx)(I.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: O.intl.string(O.t["0Jikui"]),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(eZ.u, { size: "sm" }),
                        ],
                    }),
                    (0, l.jsxs)(eH.D, {
                        className: e0.b,
                        onClick: n,
                        children: [
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(I.E, { variant: "text-md/medium", children: O.intl.string(O.t.jMSjZL) }),
                                    (0, l.jsx)(I.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: O.intl.string(O.t.qEaUPS),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(eZ.u, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var e2 = n(229503);
let e3 = () =>
    (0, l.jsxs)(tc.B, {
        gap: 24,
        children: [
            (0, l.jsx)(I.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: O.intl.string(O.t["3zG2Y9"]),
            }),
            (0, l.jsxs)(tc.B, {
                gap: 16,
                children: [
                    (0, l.jsxs)(tc.B, {
                        gap: 8,
                        children: [
                            (0, l.jsx)(I.E, { variant: "text-md/semibold", children: O.intl.string(O.t.CfBo0z) }),
                            (0, l.jsxs)("ul", {
                                className: e2.T,
                                children: [
                                    (0, l.jsx)("li", {
                                        children: (0, l.jsx)(I.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: O.intl.string(O.t.ofQnNQ),
                                        }),
                                    }),
                                    (0, l.jsx)("li", {
                                        children: (0, l.jsx)(I.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: O.intl.string(O.t.dFaQGn),
                                        }),
                                    }),
                                    (0, l.jsx)("li", {
                                        children: (0, l.jsx)(I.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: O.intl.string(O.t.RVNwXh),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)(I.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: O.intl.string(O.t.o5azXJ),
                    }),
                    (0, l.jsx)(I.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: O.intl.format(O.t.YETtaY, {
                            policyURL: "https://discord.com/safety/non-consensual-intimate-media-policy-explainer",
                        }),
                    }),
                ],
            }),
            (0, l.jsxs)(tc.B, {
                gap: 8,
                children: [
                    (0, l.jsx)(I.E, { variant: "text-md/semibold", children: O.intl.string(O.t.FJh2zi) }),
                    (0, l.jsx)(I.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: O.intl.format(O.t.R2Q57u, {
                            supportOrgURL: "https://stopncii.org/partners/global-network-of-partners/",
                            wellbeingURL: "https://discord.com/safety-wellbeing",
                            helpCenterURL: "https://support.discord.com/hc/articles/38675715591831",
                        }),
                    }),
                ],
            }),
        ],
    });
var e4 = n(725925);
u.Ay.initialize();
var e8 = (((s = {}).SELECTION = "selection"), (s.DSA = "dsa"), (s.TIDA = "tida"), s);
let e7 = (t) => {
        let { transitionState: e, onClose: n } = t,
            [i, s] = r.useState(!0),
            [a, d] = r.useState([]),
            [c, o] = r.useState(null),
            h = (0, u.bG)([tT.default], () => tT.default.isAuthenticated()),
            m = (0, u.bG)([ti.A], () => ti.A.hasLoadedExperiments),
            g = r.useCallback(() => {
                (0, eF.OY)()
                    .then((t) => {
                        let {
                            body: { capabilities: e },
                        } = t;
                        s(!1), d(e);
                    })
                    .catch(() => {
                        s(!1), d([]);
                    });
            }, []);
        r.useEffect(() => {
            h
                ? (s(!0),
                  eM
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => g())
                      .catch(() => s(!1)))
                : g();
        }, [h, g]),
            r.useEffect(() => {
                (async () => {
                    m || (await x.A.getLocationMetadata(), x.A.getExperiments());
                })();
            }, [m]);
        let p = a.filter((t) => t !== ew.tY.MEDIA_TAKEDOWN),
            A = a.includes(ew.tY.MEDIA_TAKEDOWN),
            E = p.length > 0,
            j = E && A,
            f = i || !m;
        r.useEffect(() => {
            f || E || A || n();
        }, [f, E, A, n]);
        let _ = r.useCallback(() => {
                (0, eV.openModalLazy)(() => Promise.resolve((t) => (0, l.jsx)(e7, { ...t })), { dismissable: !1 });
            }, []),
            N = r.useCallback((t, e) => {
                "selection" !== e && "selection" !== t ? o("selection") : o(t);
            }, []),
            I = r.useMemo(() => ez(ew.tY.MEDIA_TAKEDOWN, _), [_]),
            v = c ?? (j ? "selection" : E ? "dsa" : "tida");
        if (f || (!E && !A))
            return (0, l.jsx)(eB.Modal, {
                title: "",
                actions: [],
                transitionState: e,
                onClose: n,
                dismissable: !1,
                children: (0, l.jsx)(tc.B, {
                    gap: 16,
                    align: "center",
                    justify: "center",
                    style: { minHeight: "200px" },
                    children: (0, l.jsx)(tu.y, {}),
                }),
            });
        if (!j) {
            if (E)
                return (0, l.jsx)(eB.Modal, {
                    title: O.intl.string(O.t.Z11w18),
                    subtitle: O.intl.format(O.t["532l+q"], {
                        supportURL: eK.A.getArticleURL(b.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: e,
                    onClose: n,
                    dismissable: !1,
                    children: (0, l.jsx)(eJ, { dsaCapabilities: p, onReopen: _ }),
                });
            if (A)
                return (0, l.jsx)(eB.Modal, {
                    title: O.intl.string(O.t.YignUm),
                    actions: [{ text: O.intl.string(O.t.D5Czbu), variant: "primary", onClick: I }],
                    transitionState: e,
                    onClose: n,
                    dismissable: !1,
                    children: (0, l.jsx)(e3, {}),
                });
        }
        let C = [
            { stepKey: "selection", modalProps: { title: O.intl.string(O.t.Z11w18) }, body: (0, l.jsx)(e1, {}) },
            {
                stepKey: "dsa",
                modalProps: {
                    title: O.intl.string(O.t.Z11w18),
                    subtitle: O.intl.format(O.t["532l+q"], {
                        supportURL: eK.A.getArticleURL(b.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, l.jsx)(eJ, { dsaCapabilities: p, onReopen: _ }),
            },
            {
                stepKey: "tida",
                modalProps: { title: O.intl.string(O.t.YignUm) },
                body: (0, l.jsx)(e3, {}),
                nextButtonProps: { text: O.intl.string(O.t.D5Czbu) },
                onNext: () => (I(), !1),
            },
        ];
        return (0, l.jsx)("div", {
            className: { selection: e4.a, dsa: e4.q, tida: void 0 }[v],
            children: (0, l.jsx)(eU.t, {
                steps: C,
                currentStepKey: v,
                onStepChange: N,
                onClose: n,
                transitionState: e,
                dismissable: !1,
            }),
        });
    },
    e6 = () => (
        r.useEffect(() => {
            (0, eV.openModalLazy)(() => Promise.resolve((t) => (0, l.jsx)(e7, { ...t })), { dismissable: !1 });
        }, []),
        null
    );
var e9 = n(30793),
    e5 = n(970928),
    nt = n(612181),
    ne = n(547830);
let nn = {
    dump(t) {
        let e;
        null != performance.memory &&
            (e = {
                jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                totalJSHeapSize: performance.memory.totalJSHeapSize,
                usedJSHeapSize: performance.memory.usedJSHeapSize,
            }),
            t({
                browser: { name: tN().name, version: tN().version },
                os: { name: tN().os.family, version: tN().os.version },
                memory: e,
            });
    },
    getTimeSinceNavigationStart: () => Date.now() - ne.fL,
};
var ni = n(765624),
    ns = n(403542),
    nl = n(970672),
    nr = n(129014),
    na = n(642277);
let nd = function (t) {
    let { match: e, location: n, attemptDeepLink: i } = t,
        [s, a] = r.useState(0);
    r.useEffect(() => {
        nr.default.once("connected", () => {
            a(1);
        }),
            nr.default.once("disconnected", () => {
                (0, E.pX)((0, na.W)());
            }),
            nr.default.connect();
    }, []),
        r.useEffect(() => {
            if (0 !== s) return;
            let t = setTimeout(() => (0, E.pX)((0, na.W)()), 3e3);
            return () => clearTimeout(t);
        }, [s]);
    let d = r.useCallback(
        async (t, e) => {
            try {
                a(2), await i(t, e), a(3);
            } catch (t) {
                console.error("Error opening deeplink", t);
            }
        },
        [i],
    );
    if ((0, E.MX)()) return null;
    switch (s) {
        case 1:
            return (0, l.jsxs)(A.Ay, {
                children: [
                    (0, l.jsx)(A.hE, { className: L.QB, children: O.intl.string(O.t.qllnGm) }),
                    (0, l.jsx)(A.tK, { children: O.intl.string(O.t.SXCxye) }),
                    (0, l.jsx)("div", {
                        className: L.eT,
                        children: (0, l.jsx)(v.$, {
                            text: O.intl.string(O.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => d(e, n),
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: N()(L.Ot, L.F1),
                        children: (0, l.jsx)(Q.Q, {
                            text: O.intl.string(O.t["2ixEBi"]),
                            textVariant: "text-sm/normal",
                            onClick: () => (0, E.pX)((0, na.W)()),
                        }),
                    }),
                ],
            });
        case 0:
        case 2:
            return (0, l.jsxs)(A.Ay, {
                children: [(0, l.jsx)(A.hE, { children: O.intl.string(O.t["Z+hCVU"]) }), (0, l.jsx)(A.CK, {})],
            });
        case 3:
            return (0, l.jsxs)(A.Ay, {
                children: [
                    (0, l.jsx)(A.hE, { className: L.QB, children: O.intl.string(O.t.csrAMJ) }),
                    (0, l.jsx)(A.tK, { children: O.intl.string(O.t.ghBJz9) }),
                ],
            });
    }
};
var nc = n(718446),
    no = n(431144),
    nu = n(355097);
u.Ay.initialize();
class nh extends r.PureComponent {
    static defaultProps = { transitionTo: (t) => n.g.location.assign(t) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let t = (0, Y.A)(this.props.location),
            e = (0, a.parse)(this.props.location.search);
        W.Bo.post({
            url: b.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
            body: { token: t, pixel_uuid: e.hash, category: e.category, email_type: e.email_type },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (t) => {
                let {
                        body: { user: n },
                    } = t,
                    i = new en.A(n);
                this.setState({ success: !0, busy: !1, user: i, category: e.category });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, j.d)("disable_email_notifications");
    }
    renderBusy() {
        return (0, l.jsx)(A.Ay, { children: (0, l.jsx)(A.CK, {}) });
    }
    renderCategorySuccess(t, e) {
        let { defaultRoute: n, transitionTo: i } = this.props,
            s = O.intl.formatToPlainString(O.t.YDAohB, { category: e });
        return (0, l.jsxs)(A.Ay, {
            children: [
                (0, l.jsx)(A.hE, { className: L.QB, children: O.intl.string(O.t.f6rdLg) }),
                (0, l.jsx)(A.tK, { children: s }),
                (0, l.jsx)("div", {
                    className: L.QX,
                    children: (0, l.jsx)(v.$, { text: O.intl.string(O.t.fIv16B), fullWidth: !0, onClick: () => i(n) }),
                }),
                (0, l.jsx)("div", {
                    className: L.Ot,
                    children: (0, l.jsx)(Q.Q, {
                        text: O.intl.string(O.t.YYTirT),
                        textVariant: "text-sm/normal",
                        onClick: () => i((0, nc.settingsPathToRoute)(nu.od.NOTIFICATIONS_EMAILS)),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: t, transitionTo: e } = this.props,
            { user: n, category: i } = this.state;
        if (null != i) {
            let t = no.px.find((t) => t.category === i);
            if (null != t) return this.renderCategorySuccess(i, t.label());
        }
        return (0, l.jsxs)(A.Ay, {
            children: [
                (0, l.jsx)(A.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: tQ._3.DEPRECATED_SIZE_100,
                    className: L.SX,
                }),
                (0, l.jsx)(A.hE, { className: L.QB, children: O.intl.string(O.t["6U6OMQ"]) }),
                (0, l.jsx)(A.tK, { children: O.intl.string(O.t["yaDJ4/"]) }),
                (0, l.jsx)("div", {
                    className: L.eT,
                    children: (0, l.jsx)(v.$, { text: O.intl.string(O.t.fIv16B), fullWidth: !0, onClick: () => e(t) }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: t, transitionTo: e } = this.props;
        return (0, l.jsxs)(A.Ay, {
            children: [
                (0, l.jsx)(A._V, { src: n(37772), className: L.SX }),
                (0, l.jsx)(A.hE, { className: L.QB, children: O.intl.string(O.t.ox9hIS) }),
                (0, l.jsx)(A.tK, { children: O.intl.string(O.t["/dcuR5"]) }),
                (0, l.jsx)("div", {
                    className: L.eT,
                    children: (0, l.jsx)(v.$, { text: O.intl.string(O.t.fIv16B), fullWidth: !0, onClick: () => e(t) }),
                }),
            ],
        });
    }
    render() {
        let { busy: t, success: e } = this.state;
        return t ? this.renderBusy() : e ? this.renderSuccess() : this.renderError();
    }
}
let nx = u.Ay.connectStores([z.A], () => ({ defaultRoute: z.A.defaultRoute }))(nh);
var nm = n(110782),
    ng = n(10088),
    np = n(871123),
    nA = n(189081),
    nE = n(67480),
    nj = n(45938),
    nf = n(161928),
    n_ = n(455686),
    nN = n(968098);
u.Ay.initialize();
class nI extends r.PureComponent {
    state = { error: null, continueOnWeb: !1, currentUser: null, sentVerification: !1, fetchingUser: !1 };
    componentDidMount() {
        let { authenticated: t, isResolved: e } = this.props;
        t && this.handleAuthenticated(), e || this.resolveGiftCode(), (0, j.d)("gift_code");
    }
    componentDidUpdate(t) {
        let { authenticated: e, isResolved: n } = this.props;
        n ||
            h.h.wait(() => {
                this.resolveGiftCode();
            }),
            e && !t.authenticated && this.handleAuthenticated(),
            !e && t.authenticated && this.setState({ currentUser: null });
    }
    handleAuthenticated() {
        let { currentUser: t } = this.state;
        nm.Yq(), null == t && this.refreshUser();
    }
    refreshUser = () => {
        this.setState({ fetchingUser: !0 }),
            eM
                .rQ({ withAnalyticsToken: !0 })
                .then((t) => this.setState({ currentUser: t, fetchingUser: !1 }))
                .catch(() => this.setState({ fetchingUser: !1 }));
    };
    get requiresVerification() {
        let { currentUser: t } = this.state;
        return null != t && !t.verified;
    }
    getCode() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return t.match.params.giftCode;
    }
    getMode() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return t.login ? "login" : "register";
    }
    getErrorMessage(t) {
        let { libraryApplication: e, sku: n } = this.props,
            { error: i } = this.state,
            s = null != i ? i.code : null;
        return s === b.t02.INVALID_GIFT_SELF_REDEMPTION
            ? O.intl.string(O.t.wa9h7F)
            : s === b.t02.INVALID_GIFT_REDEMPTION_OWNED && n?.productLine === b.EZt.COLLECTIBLES
              ? O.intl.string(O.t.mdLtb5)
              : null != e || s === b.t02.INVALID_GIFT_REDEMPTION_OWNED
                ? O.intl.format(O.t.PIdmg3, { libraryLink: b.BVt.APPLICATION_LIBRARY })
                : t.isClaimed || s === b.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? O.intl.string(O.t.ilcBeX)
                  : s === b.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? O.intl.string(O.t.ypuSd8)
                    : void 0;
    }
    handleLogout = () => {
        let t = this.props.match.params.giftCode;
        x.A.logout("gift_code", b.BVt.GIFT_CODE_LOGIN(t));
    };
    handleResendVerification = () => {
        x.A.verifyResend(), this.setState({ sentVerification: !0 });
    };
    handleAccept = async () => {
        let { transitionTo: t, giftCode: e } = this.props;
        if (null == e) throw Error("Trying to accept gift before resolve");
        let n = this.getCode();
        try {
            this.setState({ error: null }), await m.A.redeemGiftCode({ code: n }), t(b.BVt.APP);
        } catch (t) {
            this.setState({ error: t });
        }
    };
    resolveGiftCode = () => {
        let { transitionTo: t } = this.props,
            e = this.getCode();
        m.A.resolveGiftCode(e, !0, !0).then((n) => {
            null != n && null != n.giftCode.promotion && t(b.BVt.BILLING_PROMOTION_REDEMPTION(e));
        });
    };
    renderSpinner(t) {
        return (0, l.jsxs)(A.Ay, { children: [(0, l.jsx)(A.hE, { children: t }), (0, l.jsx)(A.CK, {})] });
    }
    renderExpiredInvite() {
        let { defaultRoute: t, transitionTo: e } = this.props;
        return (0, l.jsxs)(A.Ay, {
            children: [
                (0, l.jsx)(A.hE, { className: N()(L.Ot, L.QB), children: O.intl.string(O.t.KPowgn) }),
                (0, l.jsx)(A.tK, { children: O.intl.string(O.t.j8734b) }),
                (0, l.jsx)("div", {
                    className: N()(L.eT, L.QB),
                    children: (0, l.jsx)(v.$, { text: O.intl.string(O.t.fIv16B), fullWidth: !0, onClick: () => e(t) }),
                }),
                (0, l.jsx)(Q.Q, {
                    text: O.intl.string(O.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(eK.A.getArticleURL(b.MVz.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, l.jsxs)(A.Ay, {
            children: [
                (0, l.jsx)(A.hE, { className: L.QB, children: O.intl.string(O.t.csrAMJ) }),
                (0, l.jsx)(A.tK, { children: O.intl.string(O.t["m1+IBn"]) }),
                (0, l.jsx)("div", {
                    className: L.eT,
                    children: (0, l.jsx)(v.$, {
                        text: O.intl.string(O.t["qsI+EH"]),
                        fullWidth: !0,
                        onClick: () => this.setState({ continueOnWeb: !0 }),
                    }),
                }),
            ],
        });
    }
    renderVerification(t) {
        let { sentVerification: e } = this.state;
        return (0, l.jsxs)(A.Ay, {
            children: [
                (0, l.jsx)(A._V, { src: n(792525), className: L.QB }),
                (0, l.jsx)(A.hE, { children: O.intl.format(O.t["ivLUf/"], { username: t.username }) }),
                (0, l.jsx)(A.tK, { className: L.QX, children: O.intl.string(O.t["8Su18+"]) }),
                (0, l.jsx)("div", {
                    className: L.eT,
                    children: (0, l.jsx)(v.$, {
                        text: e ? O.intl.string(O.t.CMa9Rv) : O.intl.string(O.t.lm1UKt),
                        fullWidth: !0,
                        disabled: e,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, l.jsx)("div", {
                    className: L.Ot,
                    children: (0, l.jsx)(Q.Q, {
                        text: O.intl.string(O.t.Po9eBQ),
                        textVariant: "text-sm/normal",
                        onClick: this.refreshUser,
                    }),
                }),
            ],
        });
    }
    renderAuthenticated(t, e, n) {
        let { transitionTo: i } = this.props,
            s = this.getErrorMessage(t);
        return (0, l.jsx)(nC, {
            sku: n,
            giftCodeCode: t.code,
            transitionTo: i,
            children: (0, l.jsxs)(A.Ay, {
                children: [
                    (0, l.jsx)(nf.A, { giftCode: t }),
                    (0, l.jsx)("div", {
                        className: L.eT,
                        children: (0, l.jsx)(v.$, {
                            text: O.intl.string(O.t.n6I6k4),
                            fullWidth: !0,
                            disabled: null != s,
                            onClick: this.handleAccept,
                        }),
                    }),
                    null != s
                        ? (0, l.jsx)(A.tK, { className: L.QX, children: s })
                        : (0, l.jsx)(A.ME, {
                              className: L.QX,
                              children: O.intl.format(O.t.NYM08s, {
                                  userTag: tq.Ay.getUserTag(e),
                                  onLogoutClick: this.handleLogout,
                              }),
                          }),
                ],
            }),
        });
    }
    render() {
        let {
                nativeAppState: t,
                sku: e,
                authenticated: n,
                giftCode: i,
                isResolved: s,
                isAccepting: r,
                transitionTo: a,
                location: d,
            } = this.props,
            { fetchingUser: c, continueOnWeb: o } = this.state;
        if (t === b.fAW.OPEN && !o) return this.renderAppOpened();
        if (t === b.fAW.OPENING) return this.renderSpinner(O.intl.string(O.t["Z+hCVU"]));
        if (r) return this.renderSpinner(O.intl.string(O.t.bhJseN));
        if (null == i) return s ? this.renderExpiredInvite() : this.renderSpinner(O.intl.string(O.t.b3lf1c));
        if (s) {
            if (n) {
                let t = this.state.currentUser;
                return c || null == t
                    ? this.renderSpinner(O.intl.string(O.t.bYb2nS))
                    : this.requiresVerification && null != t
                      ? this.renderVerification(t)
                      : this.renderAuthenticated(i, t, e);
            }
            return "login" === this.getMode()
                ? (0, l.jsx)(n_.A, { giftCode: i, transitionTo: a, location: d })
                : (0, l.jsx)(nN.A, { giftCodeSKU: e, giftCode: i, transitionTo: a, location: d });
        }
        return null;
    }
}
let nv = u.Ay.connectStores([e9.A, nA.A, tT.default, nE.A, z.A, ng.A], (t) => {
        let e = t.match.params.giftCode,
            n = e9.A.get(e),
            i = null != n ? nE.A.get(n.skuId) : null;
        return {
            giftCode: n,
            sku: i,
            libraryApplication:
                null != i && n?.entitlementBranches != null ? nj.YI(n.entitlementBranches, i, nA.A) : null,
            authenticated: tT.default.isAuthenticated(),
            defaultRoute: z.A.defaultRoute,
            isResolved: e9.A.getIsResolved(e),
            isAccepting: e9.A.getIsAccepting(e),
            libraryApplicationsFetched: nA.A.fetched,
            nativeAppState: ng.A.getState(e),
        };
    })(nI),
    nC = (t) => {
        let { sku: e, children: n, giftCodeCode: i, transitionTo: s } = t,
            a = (0, np.bF)(e);
        return (r.useEffect(() => {
            null != i && a && s(b.BVt.APP_WITH_GIFT_CODE(i));
        }, [a, i, s]),
        a)
            ? (0, l.jsxs)(A.Ay, {
                  children: [(0, l.jsx)(A.hE, { children: O.intl.string(O.t.b3lf1c) }), (0, l.jsx)(A.CK, {})],
              })
            : n;
    };
var nT = n(871194),
    ny = n(895600),
    nS = n(799365),
    nb = n(942614),
    nO = n(894778),
    nR = n(538796),
    nL = n(401755),
    nD = n(771016),
    nP = n(315290),
    nG = n(396574),
    nk = n(94654);
u.Ay.initialize();
class nB extends r.PureComponent {
    componentDidMount() {
        (0, j.d)("guildTemplate"),
            nG.VP || tS.A.launch("discord://" + b.BVt.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(t) {
        this.props.code !== t.code && tl.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: t, transitionTo: e } = this.props;
        e(t);
    };
    renderButton(t, e) {
        return nG.VP
            ? (0, l.jsx)("div", { className: L.eT, children: (0, l.jsx)(v.$, { text: t, fullWidth: !0, onClick: e }) })
            : (0, l.jsx)(A.KE, { className: L.eT });
    }
    renderSpinner(t) {
        return (0, l.jsxs)(A.Ay, { children: [(0, l.jsx)(A.hE, { children: t }), (0, l.jsx)(A.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, l.jsxs)(A.Ay, {
            children: [
                (0, l.jsx)(A.hE, { className: N()(L.Ot, L.QB), children: O.intl.string(O.t.C7ZRNw) }),
                (0, l.jsx)(A.tK, { children: O.intl.string(O.t.A6MwXE) }),
                this.renderButton(O.intl.string(O.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, l.jsxs)(A.Ay, {
            children: [
                (0, l.jsx)(A.hE, { className: L.QB, children: O.intl.string(O.t.csrAMJ) }),
                (0, l.jsx)(A.tK, { children: O.intl.string(O.t["m1+IBn"]) }),
                this.renderButton(O.intl.string(O.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: t } = this.props;
        return (tf()(null != t, "guild template must not be null"), t.state === nL.QB.RESOLVING)
            ? (0, l.jsx)(A.Ay, { className: nk.sL, children: (0, l.jsx)(nS.A, { guildTemplate: t }) })
            : (0, l.jsx)(nV, { guildTemplate: t });
    }
    renderContinue() {
        return (0, l.jsxs)(A.Ay, {
            children: [
                (0, l.jsx)(A.hE, { children: O.intl.string(O.t.fOc4gn) }),
                this.renderButton(O.intl.string(O.t.fIv16B), this.handleContinue),
            ],
        });
    }
    render() {
        let { guildTemplate: t, nativeAppState: e, authenticated: n, transitionTo: i, location: s } = this.props;
        if (null == t) return this.renderSpinner(O.intl.string(O.t.ZTNur7));
        if (e === b.fAW.OPEN) return this.renderAppOpened();
        if (e === b.fAW.OPENING) return this.renderSpinner(O.intl.string(O.t["Z+hCVU"]));
        switch (t.state) {
            case nL.QB.RESOLVING:
                return this.renderSpinner(O.intl.string(O.t["Z+hCVU"]));
            case nL.QB.RESOLVED:
                if (n || !nG.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, l.jsx)(n_.A, { guildTemplate: t, transitionTo: i, location: s });
                return (0, l.jsx)(nN.A, {
                    guildTemplate: t,
                    transitionTo: i,
                    location: s,
                    onRegister: () => {
                        (0, nb.C)(nD.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            nO.A.flowStart(nP.do.ORGANIC_GUILD_TEMPLATES, nP.ju.NUF_STARTED);
                    },
                });
            case nL.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function nV(t) {
    let { guildTemplate: e } = t,
        { form: n, handleSubmit: i } = (0, nT.A)(e, !1);
    nO.A.flowStep(nP.do.ORGANIC_GUILD_TEMPLATES, nP.jC.GUILD_CREATE);
    let s = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(A.hE, { className: nk.wx, children: O.intl.string(O.t.UNFvtM) }),
            n,
            (0, l.jsx)("div", {
                className: nk.Tf,
                children: (0, l.jsx)(v.$, { text: O.intl.string(O.t.xr59t7), fullWidth: !0, onClick: i }),
            }),
        ],
    });
    return (0, l.jsx)(nR.A, {
        className: nk.sL,
        children: () => [
            (0, l.jsx)(ny.A, { guildTemplate: e }, "template"),
            (0, l.jsx)("div", { className: nk.KJ, children: s }, "contents"),
        ],
    });
}
function nU(t, e, n) {
    t.preventDefault(),
        ty.default.track(b.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: e,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        });
    let i = tT.default.getFingerprint(),
        s = null != i ? i : tT.default.getId();
    tl.A.openMobileApp(n.state === nL.QB.RESOLVED ? e : void 0, s);
}
function nM(t) {
    let { code: e } = t,
        n = (0, u.bG)([ts.A], () => ts.A.getGuildTemplate(e));
    return (r.useEffect(() => {
        (0, j.d)("guild_template_mobile");
    }, []),
    null == n || n.state === nL.QB.RESOLVING)
        ? (0, l.jsx)(A.Ay, { children: (0, l.jsx)(tu.y, {}) })
        : n.state === nL.QB.RESOLVED
          ? (0, l.jsxs)(A.Ay, {
                children: [
                    (0, l.jsx)(nS.A, { guildTemplate: n, tall: !0 }),
                    (0, l.jsx)("div", {
                        className: L.QX,
                        children: (0, l.jsx)(v.$, {
                            text: O.intl.string(O.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (t) => nU(t, e, n),
                        }),
                    }),
                ],
            })
          : (0, l.jsx)(tV, {
                text: O.intl.string(O.t["e/rZ2n"]),
                buttonCta: O.intl.string(O.t.HAvYn0),
                onClick: (t) => nU(t, e, n),
            });
}
u.Ay.initialize(), n(938796);
var nw = n(821418),
    nF = n(665260),
    nK = n(362474),
    nW = n(845584),
    nQ = n(964486),
    nz = n(475743),
    nH = n(17841),
    nY = n(359438),
    nq = n(383302),
    nX = n(921037),
    n$ = n(4274),
    nJ = n(504394);
n(436317), u.Ay.initialize();
let nZ = "register",
    n0 = "login";
function n1(t) {
    let { message: e, onClick: n, invite: i } = t,
        s = i?.guild_scheduled_event != null;
    return nG.VP
        ? (0, l.jsx)("div", {
              className: s ? L.QX : L.eT,
              children: (0, l.jsx)(v.$, { text: e, onClick: n, variant: s ? "active" : "primary", fullWidth: !0 }),
          })
        : (0, l.jsx)(A.KE, { className: L.eT });
}
function n2(t) {
    let { invite: e, handleAccept: n } = t,
        i =
            null != e.guild_scheduled_event
                ? (0, l.jsx)(nY.X, { channel: e.channel, guildScheduledEvent: e.guild_scheduled_event })
                : (0, l.jsx)("div", { className: L.S3, children: (0, l.jsx)(nJ.A, { invite: e }) }),
        s =
            null != e.guild_scheduled_event && null != e.guild
                ? (0, l.jsx)(A.Ay, {
                      className: L.QX,
                      children: (0, l.jsx)(nq.N, { guild: e.guild, onlineCount: e.approximate_presence_count }),
                  })
                : null;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsxs)(A.Ay, {
                children: [i, (0, l.jsx)(n1, { message: O.intl.string(O.t.ohMvm1), onClick: n, invite: e })],
            }),
            s,
        ],
    });
}
function n3(t) {
    let { invite: e, onContinue: n } = t;
    return (0, l.jsxs)(A.Ay, {
        children: [
            (0, l.jsx)(nJ.A, { invite: e }),
            nG.VP
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              className: L.QX,
                              children: (0, l.jsx)(v.$, {
                                  text: O.intl.string(O.t.UQvCf7),
                                  onClick: () => {
                                      ty.default.track(b.HAw.INVITE_CTA_CLICKED, {
                                          action: "open_app",
                                          invite_code: e.code,
                                          guild_id: e.guild?.id,
                                      }),
                                          g.Ay.openNativeAppModal(e.code);
                                  },
                                  variant: "primary",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: L.Ot,
                              children: (0, l.jsx)(v.$, {
                                  text: O.intl.string(O.t["2ixEBi"]),
                                  onClick: () => {
                                      ty.default.track(b.HAw.INVITE_CTA_CLICKED, {
                                          action: "continue_in_browser",
                                          invite_code: e.code,
                                          guild_id: e.guild?.id,
                                      }),
                                          n?.();
                                  },
                                  variant: "secondary",
                                  fullWidth: !0,
                              }),
                          }),
                      ],
                  })
                : (0, l.jsx)(A.KE, { className: L.eT }),
        ],
    });
}
function n4(t) {
    let { title: e } = t;
    return (0, l.jsxs)(A.Ay, { children: [(0, l.jsx)(A.hE, { children: e }), (0, l.jsx)(A.CK, {})] });
}
function n8(t) {
    let { invite: e, error: n, handleAccept: i, handleDefaultTransition: s } = t;
    return (0, l.jsx)(A.Ay, {
        children: (0, l.jsxs)(tc.B, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, l.jsx)(nJ.A, { invite: e, error: n?.message }),
                n?.code === b.t02.INVALID_CANNOT_FRIEND_SELF
                    ? (0, l.jsx)(n1, { invite: e, message: O.intl.string(O.t.fIv16B), onClick: s })
                    : (0, l.jsx)(n1, { invite: e, message: O.intl.string(O.t.ohMvm1), onClick: i }),
            ],
        }),
    });
}
function n7(t) {
    let { banned: e, handleDefaultTransition: n } = t;
    return (0, l.jsxs)(A.Ay, {
        children: [
            (0, l.jsx)(A.hE, { className: N()(L.Ot, L.QB), children: O.intl.string(O.t.kux01N) }),
            (0, l.jsx)(A.tK, { children: e ? O.intl.string(O.t["5AkWAd"]) : O.intl.string(O.t["+qUJAj"]) }),
            (0, l.jsx)(n1, { message: O.intl.string(O.t.fIv16B), onClick: n }),
            (0, l.jsx)("div", {
                className: L.Ot,
                style: { textAlign: "left" },
                children: (0, l.jsx)(Q.Q, {
                    size: "sm",
                    textVariant: "text-sm/medium",
                    text: O.intl.string(O.t.urIwn4),
                    onClick: () => window.open(eK.A.getArticleURL(b.MVz.INVALID_INVITES), "_blank"),
                }),
            }),
        ],
    });
}
function n6(t) {
    let { handleDefaultTransition: e } = t;
    return (0, l.jsxs)(A.Ay, {
        children: [
            (0, l.jsx)(A.hE, { children: O.intl.string(O.t.fOc4gn) }),
            (0, l.jsx)(n1, { message: O.intl.string(O.t.fIv16B), onClick: e }),
        ],
    });
}
var n9 = n(459893);
let n5 = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_dsa_webform",
    label: "Safety Experience Unauthenticated Report Form",
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 1, label: "EU user", config: { enabled: !0 } },
        { id: 2, label: "DSA E2E testing user", config: { enabled: !0 } },
    ],
});
u.Ay.initialize();
var it = n(163050);
u.Ay.initialize();
var ie = n(701273);
function ii(t) {
    n.g.location.assign(t);
}
u.Ay.initialize(), n(426620), u.Ay.initialize();
let is = (0, ni.A)(n_.A),
    il = (0, ni.A)(n9.A),
    ir = (0, ni.A)(function (t) {
        let { inviteKey: e, location: n, transitionTo: i, login: s } = t,
            a = (0, u.bG)([tF.A], () => tF.A.getInvite(e)),
            d = (0, u.bG)([ng.A], () => ng.A.getState(e)),
            c = (0, u.bG)([tT.default], () => tT.default.isAuthenticated()),
            o = (0, u.bG)([z.A], () => z.A.defaultRoute),
            x = (0, u.bG)([nH.A], () => nH.A.isUnderageAnonymous()),
            [m, p] = r.useState(null),
            [A, f] = r.useState(!1);
        r.useLayoutEffect(() => {
            (d === b.fAW.OPEN || a?.state === b.elq.APP_OPENED) && f(!0);
        }, [a?.state, d]);
        let _ = s ? n0 : nZ,
            N = r.useCallback((t) => g.Ay.getInviteContext(t, a), [a]),
            I = r.useCallback(
                (t) => {
                    null != a &&
                        (null != a.channel || t?.channel != null) &&
                        (a.guild?.id != null
                            ? i(b.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(a.code))
                            : g.Ay.transitionToInvite(t ?? a, i));
                },
                [a, i],
            ),
            v = r.useCallback(() => {
                p(null),
                    g.Ay.acceptInvite({
                        inviteKey: e,
                        context: N(b.S3d.INVITE),
                        skipOnboarding: !0,
                        callback: (t) => {
                            F(t), null != t.channel && g.Ay.openApp(e, t.channel.id);
                        },
                    }).catch((t) => {
                        if (t instanceof nW.Wl || t instanceof nW.LG) {
                            let e = (0, n$.s)(t.code);
                            p({ code: t.code, message: e });
                        } else p({ code: t.code, message: O.intl.string(O.t.dDZRdy) });
                    });
            }, [e, N]),
            C = r.useCallback(() => {
                i(o);
            }, [o, i]);
        if (
            ((0, nQ.Ay)(() => {
                let t = tT.default.getAnalyticsToken();
                if (
                    (null != t &&
                        h.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: t, userId: tT.default.getId() }),
                    ty.default.track(b.HAw.INVITE_VIEWED, { invite_code: e }, { flush: !0 }),
                    (0, j.d)("invite"),
                    nG.VP || tS.A.launch("discord://" + b.BVt.INVITE(e), () => void 0),
                    !s && x)
                ) {
                    let { baseCode: t } = (0, tb.y$)(e);
                    (0, E.bG)(b.BVt.INVITE_LOGIN(t));
                }
            }),
            r.useEffect(() => {
                a?.state === b.elq.APP_NOT_OPENED && I();
            }, [a?.state, I]),
            (function (t) {
                let {
                        invite: e,
                        inviteKey: n,
                        authenticated: i,
                        nativeAppState: s,
                        mode: l,
                        getAcceptInviteContext: a,
                        handleContinue: d,
                        transitionTo: c,
                    } = t,
                    o = (0, nz.A)(i),
                    u = (0, nz.A)(s);
                r.useEffect(() => {
                    if (l === n0 && i && !1 === o) {
                        let t = tT.default.getFingerprint();
                        if (null != t) {
                            let i = (0, tC.d)(t);
                            ty.default.track(b.HAw.INVITE_LOGIN_SUCCESSFUL, {
                                invite_code: (0, tb.m0)(n),
                                guild_id: e?.guild?.id,
                                channel_id: e?.channel?.id,
                                inviter_id: e?.inviter?.id,
                                prev_user_id: i,
                            });
                        }
                        g.Ay.acceptInvite({ inviteKey: n, context: a(b.S3d.INVITE), skipOnboarding: !0, callback: d });
                    }
                }, [i, o, l, a, d, e, n]),
                    r.useEffect(() => {
                        if (null != e && l === nZ && i && !1 === o) {
                            let { channel: t } = e;
                            if (null != t)
                                if (((0, nb.C)(nD.zY.INVITE_UNCLAIMED), null != e.guild)) {
                                    let t = (0, nF.Lt)(e.flags ?? 0, nw.Q.IS_APPLICATION_BYPASS),
                                        n =
                                            e.guild.features?.includes(
                                                b.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED,
                                            ) &&
                                            e.guild.features?.includes(
                                                b.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL,
                                            );
                                    !t && n
                                        ? c(b.BVt.GUILD_MEMBER_VERIFICATION(e.guild.id))
                                        : c(b.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(e.code));
                                } else g.Ay.transitionToInvite(e, c);
                        }
                    }, [e, i, o, c, l]),
                    r.useEffect(() => {
                        null != e &&
                            s !== u &&
                            s === b.fAW.OPEN &&
                            ty.default.track(b.HAw.INVITE_APP_INVOKED, {
                                invite_code: (0, tb.m0)(n),
                                guild_id: e.guild?.id,
                                channel_id: e.channel?.id,
                                inviter_id: e.inviter?.id,
                                user_is_member: null != e.guild && null != tw.A.getGuild(e.guild.id),
                                size_total: e.approximate_member_count,
                                invite_type: null != e.type ? tX.Xd[e.type] : void 0,
                            });
                    }, [e, s, u, n]);
            })({
                invite: a,
                inviteKey: e,
                authenticated: c,
                nativeAppState: d,
                mode: _,
                getAcceptInviteContext: N,
                handleContinue: I,
                transitionTo: i,
            }),
            null == a)
        )
            return null;
        if (A || d === b.fAW.OPEN || a.state === b.elq.APP_OPENED) return (0, l.jsx)(n3, { invite: a, onContinue: I });
        let { state: T } = a;
        if (T === b.elq.APP_NOT_OPENED) return (0, l.jsx)(n6, { handleDefaultTransition: C });
        if ([b.elq.RESOLVING, b.elq.ACCEPTING, b.elq.APP_OPENING].includes(T)) {
            let t =
                T === b.elq.ACCEPTING ? O.intl.string(O.t["6wsY16"]) : (b.elq.RESOLVING, O.intl.string(O.t["Z+hCVU"]));
            return (0, l.jsx)(n4, { title: t });
        }
        return T === b.elq.EXPIRED
            ? (0, l.jsx)(n7, { banned: !1, handleDefaultTransition: C })
            : T === b.elq.BANNED
              ? (0, l.jsx)(n7, { banned: !0, handleDefaultTransition: C })
              : T === b.elq.ERROR
                ? (0, l.jsx)(n8, { invite: a, error: m, handleAccept: v, handleDefaultTransition: C })
                : T === b.elq.RESOLVED
                  ? c && (0, nF.Lt)(a.flags ?? 0, nw.Q.IS_GUEST_INVITE)
                      ? (g.Ay.openApp(a.code),
                        nK.u.set(nX.B, a.code),
                        (0, l.jsx)(n3, { invite: a, onContinue: () => i(b.BVt.APP) }))
                      : c || !nG.VP
                        ? (0, l.jsx)(n2, { invite: a, handleAccept: v })
                        : _ === n0
                          ? (0, l.jsx)(n_.A, { invite: a, transitionTo: i, location: n })
                          : (0, l.jsx)(nN.A, {
                                invite: a,
                                onLoginStart: () => {
                                    ty.default.track(b.HAw.INVITE_LOGIN, {
                                        invite_code: a?.code,
                                        guild_id: a?.guild?.id,
                                        channel_id: a?.channel?.id,
                                        inviter_id: a?.inviter?.id,
                                    });
                                },
                                location: n,
                                transitionTo: i,
                            })
                  : null;
    }),
    ia = (0, ni.A)(function (t) {
        let e = {
            guildTemplate: (0, u.bG)([ts.A], () => ts.A.getGuildTemplate(t.code)),
            nativeAppState: (0, u.bG)([ng.A], () => ng.A.getState(t.code)),
            authenticated: (0, u.bG)([tT.default], () => tT.default.isAuthenticated()),
            defaultRoute: (0, u.bG)([z.A], () => z.A.defaultRoute),
        };
        return (0, l.jsx)(nB, { ...t, ...e });
    }),
    id = (0, ni.A)(nv),
    ic = (0, ni.A)(function (t) {
        let { inviteKey: e, transitionTo: n } = t,
            i = (0, u.bG)([tF.A], () => tF.A.getInvite(e));
        return (
            r.useEffect(() => {
                let t = tT.default.getAnalyticsToken();
                null != t &&
                    h.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: t, userId: tT.default.getId() }),
                    (0, j.d)("invite_mobile"),
                    ty.default.track(b.HAw.INVITE_VIEWED, { invite_code: e }, { flush: !0 });
            }, []),
            (0, l.jsx)(eS, {
                invite: i,
                onAcceptInvite: (t) => {
                    let n, s, l, r;
                    t?.preventDefault(),
                        ty.default.track(b.HAw.INVITE_APP_OPENED, {
                            invite_code: (0, tb.m0)(e),
                            guild_id: i?.guild?.id,
                            channel_id: i?.channel?.id,
                            inviter_id: i?.inviter?.id,
                            invite_type: null != i && i?.type != null ? tX.Xd[i?.type] : void 0,
                            user_is_member: null != i && null != i.guild && null != tw.A.getGuild(i.guild.id),
                            size_total: i?.approximate_member_count,
                        }),
                        (n = null != i && i.state !== b.elq.EXPIRED && i.state !== b.elq.BANNED ? e : void 0),
                        (l = null != (s = tT.default.getFingerprint()) ? s : tT.default.getId()),
                        (r = null != i && i?.type != null ? Number(i?.type) : void 0),
                        g.Ay.openApp(n, void 0, l, void 0, r);
                },
                transitionTo: n,
            })
        );
    }),
    io = (0, ni.A)(nN.A),
    iu = (0, ni.A)(function (t) {
        let { location: e, transitionTo: i = E.pX } = t,
            [s, a] = r.useState("submitting");
        function d() {
            return "Android" === tN().os.family || "iOS" === tN().os.family
                ? null
                : (0, l.jsx)(v.$, {
                      text: O.intl.string(O.t.dKhVQN),
                      fullWidth: !0,
                      onClick: () => i(b.BVt.LOGIN, { source: "authorizeIPAdress" }),
                  });
        }
        return ((0, nQ.Ay)(() => {
            (0, j.d)("authorize_ip");
            let t = (0, Y.A)(e);
            null == t
                ? a("failed")
                : (async () => {
                      try {
                          await x.A.authorizeIPAddress(t), a("succeeded");
                      } catch (t) {
                          a("failed");
                      }
                  })();
        }),
        "failed" === s)
            ? (0, l.jsxs)(A.Ay, {
                  children: [
                      (0, l.jsx)("img", { alt: "", src: n(792009), className: L.SX }),
                      (0, l.jsx)(A.hE, { className: L.QB, children: O.intl.string(O.t["f/54az"]) }),
                      (0, l.jsx)(A.tK, { className: L.C2, children: O.intl.string(O.t.i3ehMr) }),
                      d(),
                  ],
              })
            : "succeeded" === s
              ? (0, l.jsxs)(A.Ay, {
                    children: [
                        (0, l.jsx)("img", { alt: "", src: n(841406), className: L.SX }),
                        (0, l.jsx)(A.hE, { className: L.QB, children: O.intl.string(O.t.iG0SlK) }),
                        (0, l.jsx)(A.tK, { className: L.C2, children: O.intl.string(O.t["Elv+qt"]) }),
                        d(),
                    ],
                })
              : (0, l.jsxs)(A.Ay, {
                    children: [(0, l.jsx)(A.CK, {}), (0, l.jsx)(A.hE, { children: O.intl.string(O.t["9exy+V"]) })],
                });
    }),
    ih = (0, ni.A)(function (t) {
        let { location: e } = t,
            [i, s] = r.useState("submitting");
        return (r.useEffect(() => {
            (0, j.d)("authorize_payment");
            let t = (0, Y.A)(e);
            null == t
                ? s("failed")
                : (async () => {
                      try {
                          await x.A.authorizePayment(t), s("succeeded");
                      } catch (t) {
                          s("failed");
                      }
                  })();
        }, [e]),
        "failed" === i)
            ? (0, l.jsxs)(A.Ay, {
                  children: [
                      (0, l.jsx)("img", { alt: "", src: n(678985), className: L.SX }),
                      (0, l.jsx)(A.hE, { className: L.QB, children: O.intl.string(O.t.GHRpue) }),
                      (0, l.jsx)(A.tK, { className: L.C2, children: O.intl.string(O.t["1nO55v"]) }),
                  ],
              })
            : "succeeded" === i
              ? (0, l.jsxs)(A.Ay, {
                    children: [
                        (0, l.jsx)("img", { alt: "", src: n(586430), className: L.SX }),
                        (0, l.jsx)(A.hE, { className: L.QB, children: O.intl.string(O.t.ihHX53) }),
                        (0, l.jsx)(A.tK, { className: L.C2, children: O.intl.string(O.t["pGPCv+"]) }),
                    ],
                })
              : (0, l.jsxs)(A.Ay, {
                    children: [(0, l.jsx)(A.CK, {}), (0, l.jsx)(A.hE, { children: O.intl.string(O.t.T3vC7n) })],
                });
    }),
    ix = (0, ni.A)(function (t) {
        let { location: e, transitionTo: n = ii } = t,
            [i, s] = r.useState("submitting"),
            a = r.useRef(void 0);
        (0, nQ.Ay)(() => {
            (0, j.d)("verify_email");
            let t = (0, Y.A)(e);
            null == t
                ? s("failed")
                : (async () => {
                      try {
                          let e = await x.A.verify(t);
                          s("succeeded"), (a.current = e);
                      } catch (t) {
                          s("failed");
                      }
                  })();
        });
        let d = r.useCallback(() => {
                n(b.BVt.LOGIN, { source: "verify_email" });
            }, [n]),
            c = r.useCallback(() => {
                ty.default.track(b.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: a.current }),
                    (0, ie.A)("verify_email");
            }, []);
        return "failed" === i
            ? (0, l.jsx)(tx, {
                  title: O.intl.string(O.t["PCgG3+"]),
                  subtitle: O.intl.string(O.t.tQpeA3),
                  buttonText: O.intl.string(O.t.dKhVQN),
                  onButtonClick: d,
              })
            : "succeeded" === i
              ? (0, l.jsx)(tx, {
                    title: O.intl.string(O.t["dAfGb+"]),
                    buttonText: O.intl.string(O.t["uJWIj/"]),
                    onButtonClick: c,
                    image: (0, l.jsx)(ta, { alt: O.intl.string(O.t["dAfGb+"]) }),
                })
              : (0, l.jsx)(tx, {
                    title: O.intl.string(O.t["0c8+5n"]),
                    subtitle: O.intl.string(O.t.ULTCBE),
                    loading: !0,
                });
    }),
    im = (0, ni.A)(() => {
        let [t, e] = r.useState(""),
            [i, s] = r.useState(""),
            [a, d] = r.useState(!1),
            [c, o] = r.useState(!1),
            [h, x] = r.useState(null),
            [m, g] = r.useState(null),
            p = (0, u.bG)([tt.A], () => tt.A.getCountryCode()),
            E = p.code.split(" ")[0],
            j = async () => {
                try {
                    await J.A.resendCode(t);
                } catch (t) {
                    g(t.body.message);
                }
            },
            f = async () => {
                d(!0);
                try {
                    let { token: e } = await J.A.verifyPhone(E + t, i);
                    x(null), g(null), o(!0), J.A.validatePhoneForSupport(e);
                } catch (t) {
                    t.body.message ? (x(null), g(t.body.message)) : (x(t.body.phone), g(t.body.code));
                } finally {
                    d(!1);
                }
            },
            _ = (0, l.jsxs)(A.Ay, {
                children: [
                    (0, l.jsx)(A._V, { src: n(142041) }),
                    (0, l.jsxs)(A.hE, {
                        className: N()(L.QX, tn.Uu, tn.wq, tn.Hu),
                        children: [
                            O.intl.string(O.t.WWzQta),
                            (0, l.jsx)($.y, { size: "md", color: "currentColor", className: L.oY }),
                        ],
                    }),
                ],
            });
        return c
            ? _
            : (0, l.jsxs)(A.Ay, {
                  children: [
                      (0, l.jsx)(A.hE, { children: O.intl.string(O.t.o4JNrO) }),
                      (0, l.jsx)(A.tK, { className: L.Ot, children: O.intl.string(O.t.y0tVbq) }),
                      (0, l.jsxs)(A.eB, {
                          className: L.QX,
                          children: [
                              (0, l.jsx)(te.A, {
                                  label: O.intl.string(O.t["eJnn0+"]),
                                  alpha2: p.alpha2,
                                  countryCode: E,
                                  value: t,
                                  autoComplete: "off",
                                  spellCheck: "false",
                                  onChange: e,
                                  forceMode: Z.Pd.PHONE,
                                  error: h,
                              }),
                              (0, l.jsx)(A.pd, {
                                  className: L.QX,
                                  label: O.intl.string(O.t.OdzNbm),
                                  value: i,
                                  onChange: s,
                                  maxLength: 6,
                                  error: m,
                              }),
                              (0, l.jsx)(Q.Q, { text: O.intl.string(O.t["5b60gi"]), onClick: j }),
                              (0, l.jsx)("div", {
                                  className: L.QX,
                                  children: (0, l.jsx)(v.$, {
                                      text: O.intl.string(O.t.i4jeWR),
                                      fullWidth: !0,
                                      onClick: f,
                                      loading: a,
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    }),
    ig = (0, ni.A)(it.A),
    ip = (0, ni.A)(nx),
    iA = (0, ni.A)(X),
    iE = (0, ni.A)(function (t) {
        let { location: e } = t,
            [n, i] = r.useState(!1),
            { verifySuccess: s, verifyErrors: a, redirectGuildId: d } = (0, u.bG)([tE], () => tE.getState());
        r.useEffect(() => {
            let t = (0, Y.A)(e);
            td.A.verify(t), (0, j.d)("verify_hub_email");
        }, [e]);
        let c = () => {
            let t, e;
            (t = (function (t) {
                let e = tN().os?.family;
                if ("Android" === e || "iOS" === e) {
                    let e = tT.default.getFingerprint(),
                        n = (0, tv.I_)();
                    return (
                        tf()(null != t, "generateAppPath: guildId cannot be null"),
                        (0, tv.Ay)((0, tI.jN)(t), { utmSource: "verify_hub_email", fingerprint: e, attemptId: n })
                    );
                }
                return "discord://";
            })(d)),
                null != (e = (0, tv.X7)(t)) &&
                    ty.default.track(b.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, tC.v)(e.fingerprint),
                        attempt_id: e.attemptId,
                        source: e.utmSource,
                    }),
                tS.A.launch(t, (t) => {
                    t || (0, E.bG)(z.A.fallbackRoute);
                }),
                i(!0);
        };
        return n
            ? (0, l.jsx)(tx, {
                  title: O.intl.string(O.t.csrAMJ),
                  subtitle: O.intl.string(O.t["m1+IBn"]),
                  buttonText: O.intl.string(O.t.fIv16B),
                  onButtonClick: () => (0, E.pX)(b.BVt.CHANNEL(d)),
              })
            : s
              ? (0, l.jsx)(tx, {
                    title: O.intl.string(O.t["dAfGb+"]),
                    buttonText: O.intl.string(O.t["uJWIj/"]),
                    onButtonClick: c,
                    image: (0, l.jsx)(ta, { alt: O.intl.string(O.t["dAfGb+"]) }),
                })
              : null != a
                ? (0, l.jsx)(tx, {
                      title: O.intl.string(O.t["PCgG3+"]),
                      subtitle: O.intl.string(O.t.tQpeA3),
                      buttonText: O.intl.string(O.t["uJWIj/"]),
                      onButtonClick: c,
                  })
                : (0, l.jsx)(tx, {
                      title: O.intl.string(O.t["0c8+5n"]),
                      subtitle: O.intl.string(O.t.ULTCBE),
                      loading: !0,
                  });
    }),
    ij = (0, ni.A)(function (t) {
        let { match: e, location: n } = t,
            i = async (t, e) => {
                await (0, nl.W)(eP.XK.CHANNEL, {
                    guildId: t.params.guildId,
                    channelId: t.params.channelId,
                    messageId: t.params.messageId,
                    search: e.search,
                });
            };
        return (0, l.jsx)(nd, { match: e, location: n, attemptDeepLink: i });
    }),
    i_ = (0, ni.A)(function (t) {
        let { match: e, location: n } = t,
            i = async (t) => {
                await (0, nl.W)(eP.XK.GAME_SHOP, {
                    guildId: t.params.guildId,
                    pageIndex: t.params.pageIndex,
                    skuId: t.params.skuId,
                    slug: t.params.slug,
                });
            };
        return (0, l.jsx)(nd, { match: e, location: n, attemptDeepLink: i });
    }),
    iN = (0, ni.A)(function (t) {
        let { match: e, location: n } = t,
            i = async (t, e) => {
                await (0, nl.W)(eP.XK.PICK_GUILD_SETTINGS, {
                    section: t.params.section,
                    subsection: t.params.subsection,
                    search: e.search,
                });
            };
        return (0, l.jsx)(nd, { match: e, location: n, attemptDeepLink: i });
    }),
    iI = (0, ni.A)((t) => {
        let { location: e } = t,
            n = (0, u.bG)([tT.default], () => tT.default.isAuthenticated()),
            i = (0, u.bG)([ti.A], () => ti.A.hasLoadedExperiments),
            s = n5.useExperiment({ location: "RSL - Landing Page" }, { autoTrackExposure: !0 }).enabled,
            [a, d] = r.useState(!1),
            [c, o] = r.useState(O.intl.string(O.t["9exy+V"])),
            [h, m] = r.useState(!0),
            g = (t) => {
                switch (t) {
                    case b.t02.INVALID_FORM_BODY:
                    case b.t02.DSA_RSL_REPORT_NOT_FOUND:
                        o(O.intl.string(O.t.bzXDfc));
                        break;
                    case b.t02.DSA_RSL_ALREADY_REQUESTED:
                        o(O.intl.string(O.t.rV00wq));
                        break;
                    case b.t02.DSA_RSL_LIMITED_TIME:
                        o(O.intl.string(O.t["0dI29h"]));
                        break;
                    case b.t02.DSA_RSL_REPORT_INELIGIBLE:
                        o(O.intl.string(O.t["RGa/Gb"]));
                        break;
                    default:
                        o(O.intl.string(O.t["0QLzfv"]));
                }
            };
        return (
            r.useEffect(() => {
                n
                    ? (m(!0),
                      eM
                          .rQ({ withAnalyticsToken: !0 })
                          .then(() => m(!1))
                          .catch(() => m(!1)))
                    : m(!1);
            }, [n]),
            r.useEffect(() => {
                i || s || x.A.getExperiments();
            }, [i, s]),
            r.useEffect(() => {
                let t = async (t) => {
                    try {
                        let e = null != t ? await (0, eF.q)(t) : void 0;
                        null != e ? o(O.intl.string(O.t.e6mZMt)) : g(e.body?.code);
                    } catch (t) {
                        g(t.body?.code);
                    } finally {
                        d(!1);
                    }
                };
                d(!0), t((0, Y.A)(e)), (0, j.d)("report_second_look");
            }, [e]),
            s &&
                !h &&
                (0, l.jsxs)(A.Ay, {
                    children: [(0, l.jsx)(A.hE, { className: L.QB, children: c }), a && (0, l.jsx)(tu.y, {})],
                })
        );
    }),
    iv = (0, ni.A)(M),
    iC = (0, ni.A)(function (t) {
        let { match: e, location: i } = t,
            s = (0, a.parse)(i.search).token,
            [d, o] = r.useState("loading"),
            u = r.useRef(!1),
            h = r.useCallback(async (t) => {
                try {
                    ty.default.track(b.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                        await x.A.oneTimeLogin(t),
                        o("login_success"),
                        ty.default.track(b.HAw.LOGIN_SUCCESSFUL, {
                            source: "web_page",
                            login_method: "one_time_login",
                        }),
                        n.g.location.assign(b.BVt.APP);
                } catch (e) {
                    let t = e instanceof Error ? e.message : "Unknown error";
                    ty.default.track(b.HAw.ONE_TIME_LOGIN_ERROR, {
                        source: "web_page",
                        error_reason: "api_error",
                        error_message: t,
                    }),
                        o("error");
                }
            }, []),
            m = r.useCallback((t) => {
                let e = tT.default.getFingerprint() ?? tT.default.getId(),
                    n = `discord://login/one-time?token=${encodeURIComponent(t)}`;
                tS.A.launch(n, (t) => {
                    t
                        ? (ty.default.track(b.HAw.DEEP_LINK_CLICKED, {
                              source: "web_page",
                              destination: "discord://login/one-time",
                              deep_link_provider: "protocol",
                              fingerprint: e,
                          }),
                          o("app_launched"))
                        : o("app_launch_not_supported");
                });
            }, []),
            g = r.useCallback(
                (t) => {
                    let e = tT.default.getFingerprint() ?? tT.default.getId(),
                        i = tT.default.getInstallationForTracking();
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((n) => {
                            let { default: s } = n;
                            s.request(b.e$_.DEEP_LINK, {
                                type: eP.XK.ONE_TIME_LOGIN,
                                params: { token: t, fingerprint: e, installationId: i },
                            })
                                .then((n) => {
                                    n
                                        ? (ty.default.track(b.HAw.DEEP_LINK_CLICKED, {
                                              source: "web_page",
                                              destination: "one_time_login_modal",
                                              deep_link_provider: "rpc",
                                              fingerprint: e,
                                          }),
                                          o("app_launched"))
                                        : m(t);
                                })
                                .catch(() => {
                                    m(t);
                                })
                                .then(() => s.disconnect());
                        });
                },
                [m],
            );
        if (
            (r.useEffect(() => {
                let t = null != s && "string" == typeof s,
                    e = c.Fr ? "mobile" : c.v1 ? "tablet" : (0, eb.isDesktop)() ? "desktop_app" : "web";
                if ((ty.default.track(b.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: t, device_type: e }), !t))
                    return void o("error");
                if (c.Fr || c.v1) {
                    let t = ty.default.getSuperProperties()?.os;
                    ty.default.track(b.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_ui_shown",
                        device_type: e,
                        platform: t,
                    });
                    return;
                }
                (0, eb.isDesktop)() ? h(s) : u.current || ((u.current = !0), o("rpc_attempting"), g(s));
            }, [s, i, h, g]),
            c.Fr || c.v1)
        ) {
            let t = null == s || "string" != typeof s ? "missing_token" : "invalid_token";
            return (0, l.jsx)(eD, { token: s, hasError: "error" === d, errorReason: t });
        }
        if ((0, E.MX)()) return null;
        if ("app_launched" === d)
            return (0, l.jsx)(eG, {
                title: O.intl.string(O.t.RvUUOy),
                subtitle: O.intl.string(O.t["5/lR0g"]),
                buttonText: O.intl.string(O.t["2ixEBi"]),
                buttonOnClick: () => {
                    ty.default.track(b.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: d }), h(s);
                },
            });
        if ("app_launch_not_supported" === d)
            return (0, l.jsx)(eG, {
                title: O.intl.string(O.t.qq4tjT),
                subtitle: O.intl.string(O.t.CVxYRo),
                buttonText: O.intl.string(O.t["2ixEBi"]),
                buttonOnClick: () => h(s),
            });
        if ("error" === d) {
            let t = null == s || "string" != typeof s ? "missing_token" : "invalid_token";
            return (0, l.jsx)(eG, {
                title: O.intl.string(O.t.RtCSr1),
                subtitle: O.intl.string(O.t["S+YjYJ"]),
                buttonText: O.intl.string(O.t.j3cG2p),
                buttonOnClick: () => {
                    ty.default.track(b.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: t }),
                        (0, E.pX)(b.BVt.LOGIN);
                },
            });
        }
        return (0, l.jsx)(A.Ay, { children: (0, l.jsx)(A.CK, {}) });
    });
class iT extends r.PureComponent {
    state = { splash: null, redirectTo: null, backgroundId: null };
    static getDerivedStateFromProps(t, e) {
        let { invite: n, location: i } = t,
            { backgroundId: s } = e,
            l = (0, a.parse)(i.search).redirect_to ?? null;
        (null == l || "" === l || l.startsWith(b.BVt.ME) || (!(0, o.e)(l) && !(0, K.RZ)(l))) && (l = null);
        let r = null;
        if (null == n) r = (0, nt.u8)(l);
        else if (n?.state === b.elq.RESOLVED) {
            let { guild: t, target_application: e } = n;
            null != e
                ? null != s && (r = (0, e5.uD)(e.id, s, 1024))
                : null != t &&
                  "string" == typeof t.splash &&
                  (r = tK.Ay.getGuildSplashURL({ id: t.id, splash: t.splash }));
        }
        return { redirectTo: l, splash: r };
    }
    componentDidMount() {
        let { inviteKey: t, hasLoadedExperiments: e, isAuthenticated: n } = this.props;
        null != t &&
            (!e && n && x.A.getExperiments(!0),
            ty.default.track(
                b.HAw.INVITE_OPENED,
                { invite_code: (0, tb.m0)(t), load_time: nn.getTimeSinceNavigationStart() },
                { flush: !0 },
            )),
            e && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            p.A.initialize(),
            (0, j.D)();
    }
    componentDidUpdate(t) {
        !t.hasLoadedExperiments && this.props.hasLoadedExperiments && this.resolveInvite(),
            t.invite?.state !== this.props.invite?.state && this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        p.A.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: t } = this.props;
        if (t?.state === b.elq.RESOLVED) {
            let { target_application: e } = t;
            null != e &&
                (0, e5.RG)(e.id, ["embedded_splash"]).then((t) => {
                    let [e] = t;
                    return this.setState({ backgroundId: e });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: t } = this.props;
        if (null == t) return;
        let { invite: e } = await g.Ay.resolveInvite(t, b.S3d.INVITE);
        null != e && (F(e), null != e.type && tX.uR.has(e.type) && g.Ay.openNativeAppModal(t));
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: t } = this.props;
        null != t &&
            (ty.default.track(
                b.HAw.GUILD_TEMPLATE_OPENED,
                { guild_template_code: t, load_time: nn.getTimeSinceNavigationStart() },
                { flush: !0 },
            ),
            tl.A.resolveGuildTemplate(t),
            tl.A.openNativeAppModal(t));
    }
    resolveGiftCode() {
        let { giftCode: t } = this.props;
        null != t &&
            m.A.resolveGiftCode(t, !0, !0).then((e) => {
                null != e && null == e.giftCode.promotion && h.h.wait(() => m.A.openNativeGiftCodeModal(t));
            });
    }
    render() {
        let { splash: t, redirectTo: e } = this.state,
            { inviteKey: n } = this.props;
        return (0, l.jsxs)(ns.A, {
            splash: t,
            children: [
                (0, l.jsx)(w.A, { path: b.BVt.LOGIN_HANDOFF, render: (t) => (0, l.jsx)(il, { ...t, redirectTo: e }) }),
                (0, l.jsx)(w.A, { path: b.BVt.LOGIN_ONE_TIME, render: (t) => (0, l.jsx)(iC, { ...t }) }),
                (0, l.jsx)(w.A, {
                    impressionName: d.ImpressionNames.USER_LOGIN,
                    path: b.BVt.LOGIN,
                    render: (t) => (0, l.jsx)(is, { ...t, redirectTo: e }),
                }),
                (0, l.jsx)(w.A, {
                    impressionName: d.ImpressionNames.USER_REGISTRATION,
                    path: b.BVt.REGISTER,
                    render: (t) => (0, l.jsx)(io, { ...t, redirectTo: e }),
                }),
                (0, l.jsx)(w.A, {
                    path: b.BVt.GIFT_CODE_LOGIN(":giftCode"),
                    render: (t) => (0, l.jsx)(id, { login: !0, ...t }),
                }),
                (0, l.jsx)(w.A, { path: b.BVt.GIFT_CODE(":giftCode"), render: (t) => (0, l.jsx)(id, { ...t }) }),
                (0, l.jsx)(w.A, {
                    path: [b.BVt.INVITE_LOGIN(":inviteCode"), b.BVt.INVITE(":inviteCode")],
                    render: (t) => {
                        let {
                                match: {
                                    params: { inviteCode: e },
                                    path: n,
                                },
                                location: i,
                                transitionTo: s,
                            } = t,
                            r = (0, tb.fB)(e, i.search);
                        return c.Fr || c.v1
                            ? (0, l.jsx)(ic, { inviteKey: r, transitionTo: s }, r)
                            : (0, l.jsx)(
                                  ir,
                                  {
                                      inviteKey: r,
                                      location: i,
                                      transitionTo: s,
                                      login: n === b.BVt.INVITE_LOGIN(":inviteCode"),
                                  },
                                  r,
                              );
                    },
                }),
                (0, l.jsx)(w.A, {
                    path: [
                        b.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                        b.BVt.GUILD_TEMPLATE(":guildTemplateCode"),
                    ],
                    render: (t) => {
                        let {
                            match: {
                                params: { guildTemplateCode: e },
                                path: n,
                            },
                            location: i,
                            transitionTo: s,
                        } = t;
                        return c.Fr || c.v1
                            ? (0, l.jsx)(nM, { code: e }, e)
                            : (0, l.jsx)(ia, {
                                  code: e,
                                  location: i,
                                  transitionTo: s,
                                  login: n === b.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, l.jsx)(w.A, { path: b.BVt.VERIFY, render: (t) => (0, l.jsx)(ix, { ...t }) }),
                (0, l.jsx)(w.A, { path: b.BVt.VERIFY_HUB_EMAIL, render: (t) => (0, l.jsx)(iE, { ...t }) }),
                (0, l.jsx)(w.A, { path: b.BVt.VERIFY_REQUEST, render: (t) => (0, l.jsx)(im, { ...t }) }),
                (0, l.jsx)(w.A, { path: b.BVt.DISABLE_EMAIL_NOTIFICATIONS, render: (t) => (0, l.jsx)(ip, { ...t }) }),
                (0, l.jsx)(w.A, {
                    path: b.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (t) => (0, l.jsx)(iA, { ...t }),
                }),
                (0, l.jsx)(w.A, { path: b.BVt.AUTHORIZE_IP, render: (t) => (0, l.jsx)(iu, { ...t }) }),
                (0, l.jsx)(w.A, {
                    path: b.BVt.REJECT_IP,
                    render: (t) => (0, l.jsx)(ig, { source: b.BVt.REJECT_IP, ...t }),
                }),
                (0, l.jsx)(w.A, {
                    path: b.BVt.REJECT_MFA,
                    render: (t) => (0, l.jsx)(ig, { source: b.BVt.REJECT_MFA, ...t }),
                }),
                (0, l.jsx)(w.A, { path: b.BVt.AUTHORIZE_PAYMENT, render: (t) => (0, l.jsx)(ih, { ...t }) }),
                (0, l.jsx)(w.A, { path: b.BVt.RESET, render: (t) => (0, l.jsx)(ig, { source: b.BVt.RESET, ...t }) }),
                (0, l.jsx)(w.A, {
                    path: b.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (t) => (0, l.jsx)(iN, { ...t }),
                }),
                (0, l.jsx)(w.A, {
                    path: b.BVt.CHANNELS_GAME_SHOP(ek.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (t) => (0, l.jsx)(i_, { ...t }),
                }),
                (0, l.jsx)(w.A, {
                    path: b.BVt.CHANNEL(ek.pv.guildId(), ek.pv.channelId({ optional: !0 }), ":messageId?"),
                    render: (t) => (0, l.jsx)(ij, { ...t }),
                }),
                (0, l.jsx)(w.A, { path: b.BVt.REPORT, render: () => (0, l.jsx)(e6, {}) }),
                (0, l.jsx)(w.A, { path: b.BVt.REPORT_SECOND_LOOK, render: (t) => (0, l.jsx)(iI, { ...t }) }),
                (0, l.jsx)(w.A, { path: b.BVt.ACCOUNT_REVERT(":token"), render: (t) => (0, l.jsx)(iv, { ...t }) }),
            ],
        });
    }
}
let iy = u.Ay.connectStores([tT.default, tF.A, e9.A, ti.A, ts.A], (t) => {
    let { match: e, location: n } = t,
        i = e?.params?.inviteCode,
        s = null != i ? (0, tb.fB)(i, n.search) : void 0,
        l = e?.params?.giftCode,
        r = e?.params?.guildTemplateCode;
    return {
        inviteKey: s,
        isAuthenticated: tT.default.isAuthenticated(),
        giftCode: l,
        guildTemplateCode: r,
        gift: null != l ? e9.A.get(l) : null,
        invite: null != s ? tF.A.getInvite(s) : null,
        guildTemplate: null != r ? ts.A.getGuildTemplate(r) : null,
        hasLoadedExperiments: ti.A.hasLoadedExperiments,
    };
})(iT);
