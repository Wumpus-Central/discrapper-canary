"use strict";
n.r(t), n.d(t, { default: () => iT });
var i,
    s,
    l = n(627968),
    r = n(64700),
    a = n(492462),
    o = n(110259),
    d = n(607399),
    c = n(470562),
    u = n(17928),
    _ = n(228366),
    h = n(830215),
    p = n(869038),
    m = n(376728),
    g = n(526423),
    x = n(854378),
    f = n(976860),
    A = n(210714),
    E = n(430690),
    I = n(503698),
    v = n.n(I),
    j = n(834730),
    C = n(821609),
    N = n(181658),
    T = n(625494),
    S = n(499785),
    y = (((i = {}).START = "start"), (i.PASSWORD = "password"), (i.SUCCESS = "success"), (i.FAILED = "failed"), i),
    b = n(652215),
    O = n(985018),
    R = n(244460),
    L = n(818050);
function D(e) {
    let { setOriginalEmail: t, setSlide: i, ready: s, token: a } = e,
        [d, c] = r.useState(!1),
        [u, _] = r.useState(null),
        [h, p] = r.useState(null),
        [m, g] = r.useState(""),
        f = r.useRef(null);
    return (
        r.useEffect(() => {
            s && f.current?.focus();
        }, [s]),
        (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(x._V, { src: null == h ? n(79418) : n(579656), className: v()(L.SX, L.Ot) }),
                (0, l.jsx)(x.hE, { children: O.intl.string(O.t.IfBQ56) }),
                null != h && "" !== h
                    ? (0, l.jsx)(j.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: h })
                    : null,
                (0, l.jsxs)(x.eB, {
                    className: v()(L.SX, L.QX),
                    children: [
                        (0, l.jsx)(x.pd, {
                            name: "password",
                            type: "password",
                            label: O.intl.string(O.t["8dM4FO"]),
                            setRef: f,
                            className: L.SX,
                            value: m,
                            onChange: g,
                            error: u,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: O.intl.string(O.t["yY/PXY"]),
                        }),
                        (0, l.jsx)("div", {
                            className: L.Ot,
                            children: (0, l.jsx)(C.$, {
                                text: O.intl.string(O.t.ezv91b),
                                fullWidth: !0,
                                onClick: () => {
                                    if (!d) {
                                        if (0 === m.length) {
                                            _(O.intl.string(O.t.R98xD5)), T._.dispatch(b.jej.WAVE_EMPHASIZE);
                                            return;
                                        }
                                        return (
                                            null != h && p(null),
                                            null != u && _(null),
                                            t(""),
                                            c(!0),
                                            S.A.post({
                                                url: b.Rsh.ACCOUNT_REVERT,
                                                body: { token: a, password: m },
                                                trackedActionData: { event: o.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    g(""), t(n), i(y.SUCCESS);
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        p(
                                                            O.intl.formatToPlainString(O.t.aTVNes, {
                                                                statusPageURL: b.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new N.A(e);
                                                        t.hasFieldErrors()
                                                            ? _(t.getAnyErrorMessage())
                                                            : p(
                                                                  (function (e) {
                                                                      switch (e) {
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
                                                                  })(t.code).toString(),
                                                              );
                                                    }
                                                    T._.dispatch(b.jej.WAVE_EMPHASIZE);
                                                })
                                                .finally(() => {
                                                    c(!1);
                                                })
                                        );
                                    }
                                },
                                loading: d,
                                disabled: d,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: R.UD,
                    children: (0, l.jsx)(C.$, {
                        text: O.intl.string(O.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: () => {
                            g(""), i(y.START);
                        },
                    }),
                }),
            ],
        })
    );
}
var G = n(825484),
    k = n(749314);
function P(e) {
    let { children: t } = e;
    return (0, l.jsx)("li", {
        className: R.Aw,
        children: (0, l.jsx)(j.E, { variant: "text-sm/medium", color: "text-default", children: t }),
    });
}
function B(e) {
    let { setSlide: t, transitionTo: i } = e;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(x._V, { src: n(79418), className: v()(L.SX, L.Ot) }),
            (0, l.jsx)(x.hE, { className: L.QB, children: O.intl.string(O.t["8UcxI6"]) }),
            (0, l.jsx)(j.E, { variant: "text-md/normal", children: O.intl.string(O.t.O37hMl) }),
            (0, l.jsxs)(x.eB, {
                className: v()(L.SX, L.QX),
                children: [
                    (0, l.jsx)(j.E, { variant: "text-sm/normal" }),
                    (0, l.jsxs)("ul", {
                        className: R.qI,
                        children: [
                            (0, l.jsx)(P, { children: O.intl.string(O.t.Gj1Zry) }),
                            (0, l.jsx)(k.A, {}),
                            (0, l.jsx)(P, { children: O.intl.string(O.t["8C6t3B"]) }),
                            (0, l.jsx)(k.A, {}),
                            (0, l.jsx)(P, { children: O.intl.string(O.t.mToZMA) }),
                            (0, l.jsx)(k.A, {}),
                            (0, l.jsx)(P, { children: O.intl.string(O.t.TPEvkc) }),
                            (0, l.jsx)(k.A, {}),
                            (0, l.jsx)(P, { children: O.intl.string(O.t.H8Y1Ln) }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(G.e, {
                direction: "vertical",
                fullWidth: !0,
                className: R.UD,
                children: [
                    (0, l.jsx)(C.$, { text: O.intl.string(O.t.GgCRqR), onClick: () => t(y.PASSWORD) }),
                    (0, l.jsx)(C.$, {
                        text: O.intl.string(O.t["B/yHcQ"]),
                        variant: "secondary",
                        onClick: () => i(b.BVt.LOGIN, { source: "account_revert" }),
                    }),
                ],
            }),
        ],
    });
}
function V(e) {
    let { email: t } = e;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(x._V, { src: n(79418), className: v()(L.SX, L.Ot) }),
            (0, l.jsx)(x.hE, { children: O.intl.string(O.t.ailkVG) }),
            (0, l.jsx)(x.tK, { children: O.intl.format(O.t["4ZMVCI"], { email: t }) }),
            (0, l.jsx)(j.E, {
                className: v()(L.QB, L.QX),
                variant: "text-md/normal",
                children: O.intl.string(O.t["dpAn+8"]),
            }),
        ],
    });
}
function w(e) {
    let { transitionTo: t, token: n, width: i } = e,
        [s, a] = r.useState(y.START),
        [d, c] = r.useState(null),
        [u, _] = r.useState(""),
        h = { impression_group: o.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, l.jsx)("div", {
        style: { margin: "8px" },
        children: (0, l.jsxs)(E.t, {
            activeSlide: s,
            width: i,
            onSlideReady: c,
            children: [
                (0, l.jsx)(E.q, {
                    id: y.START,
                    impressionProperties: h,
                    impressionName: o.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, l.jsx)(B, { setSlide: a, transitionTo: t }),
                }),
                (0, l.jsx)(E.q, {
                    id: y.PASSWORD,
                    impressionProperties: h,
                    impressionName: o.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, l.jsx)(D, {
                        setOriginalEmail: _,
                        setSlide: a,
                        transitionTo: t,
                        ready: d === y.PASSWORD,
                        token: n,
                    }),
                }),
                (0, l.jsx)(E.q, {
                    id: y.SUCCESS,
                    impressionProperties: h,
                    impressionName: o.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, l.jsx)(V, { email: u }),
                }),
            ],
        }),
    });
}
u.Ay.initialize();
class M extends r.PureComponent {
    static defaultProps = { transitionTo: f.pX, replaceWith: f.bG };
    componentDidMount() {
        (0, A.d)("account_revert");
    }
    render() {
        let { token: e } = this.props.match.params;
        return (0, l.jsx)(x.Ay, {
            style: { padding: 0 },
            children: (0, l.jsx)(w, { width: 464, token: e, ...this.props }),
        });
    }
}
var U = n(549711);
function F(e) {
    _.h.dispatch({ type: "AUTH_INVITE_UPDATE", invite: e });
}
var W = n(212640),
    H = n(636537),
    z = n(123292),
    K = n(650048),
    Y = n(860689),
    Q = n(396681);
u.Ay.initialize();
class X extends r.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, guild: null };
    componentDidMount() {
        let e = (0, Q.A)(this.props.location),
            t = (0, a.parse)(this.props.location.search);
        H.Bo.post({
            url: b.Rsh.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, guild_id: t.guild_id },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { guild: t },
                    } = e,
                    n = (0, Y.dangerouslyConstructGuildRecordFromUntypedObject)(t);
                this.setState({ success: !0, busy: !1, guild: n });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, A.d)("disable_server_highlight_notifications");
    }
    renderBusy() {
        return (0, l.jsx)(x.Ay, { children: (0, l.jsx)(x.CK, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, l.jsxs)(x.Ay, {
            children: [
                (0, l.jsx)(x.hE, { className: L.QB, children: O.intl.string(O.t.Z33eiP) }),
                (0, l.jsx)(x.tK, { children: O.intl.format(O.t.NRWtfC, { guildName: n.name }) }),
                (0, l.jsx)("div", {
                    className: L.eT,
                    children: (0, l.jsx)(C.$, { text: O.intl.string(O.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, l.jsx)("div", {
                    className: L.Ot,
                    children: (0, l.jsx)(z.Q, {
                        text: O.intl.string(O.t["cGmT/J"]),
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
        return (0, l.jsxs)(x.Ay, {
            children: [
                (0, l.jsx)(x._V, { src: n(37772), className: L.SX }),
                (0, l.jsx)(x.hE, { className: L.QB, children: O.intl.string(O.t.ox9hIS) }),
                (0, l.jsx)(x.tK, { children: O.intl.string(O.t["/dcuR5"]) }),
                (0, l.jsx)("div", {
                    className: L.eT,
                    children: (0, l.jsx)(C.$, { text: O.intl.string(O.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let q = u.Ay.connectStores([K.A], () => ({ defaultRoute: K.A.defaultRoute }))(X);
var J = n(628284),
    $ = n(557722),
    Z = n(628387),
    ee = n(148864),
    et = n(354948);
n(53516);
var en = n(653307),
    ei = n(736056),
    es = n(122906),
    el = n(121623),
    er = n(31008);
function ea(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: r = 288, height: a = 162 } = e;
    return (0, l.jsx)("img", {
        style: { width: r, height: a },
        src: er.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var eo = n(154672),
    ed = n(331322),
    ec = n(534514),
    eu = n(289873),
    e_ = n(794347);
function eh(e) {
    let { title: t, subtitle: n, buttonText: i, image: s, onButtonClick: r, loading: a } = e;
    return (0, l.jsx)(x.Ay, {
        className: e_.kL,
        children: (0, l.jsxs)(ed.B, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, l.jsxs)(ed.B, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, l.jsxs)(ed.B, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != s &&
                                    (0, l.jsx)(ed.B, {
                                        align: "center",
                                        justify: "center",
                                        className: e_.Sl,
                                        children: s,
                                    }),
                                a && (0, l.jsx)(eu.y, { type: eu.y.Type.SPINNING_CIRCLE }),
                                (0, l.jsx)(ec.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, l.jsx)(j.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                className: e_.VA,
                                children: n,
                            }),
                    ],
                }),
                !a && (0, l.jsx)(C.$, { onClick: r, text: i, variant: "overlay-primary" }),
            ],
        }),
    });
}
let ep = !1,
    em = null,
    eg = null;
class ex extends u.Ay.Store {
    static displayName = "HubEmailVerificationStore";
    getState() {
        return { verifySuccess: ep, verifyErrors: em, redirectGuildId: eg };
    }
}
let ef = new ex(_.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        (ep = !0), (em = null), (eg = t);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        (ep = !1), (em = t);
    },
});
var eA = n(284009),
    eE = n.n(eA),
    eI = n(481613),
    ev = n.n(eI),
    ej = n(400253),
    eC = n(742821),
    eN = n(80703),
    eT = n(495544),
    eS = n(954571),
    ey = n(877062);
u.Ay.initialize();
var eb = n(21599),
    eO = n(419354),
    eR = n(280513),
    eL = n(717421),
    eD = n(661531),
    eG = n(359778),
    ek = n(235986),
    eP = n(592743);
function eB(e) {
    let { text: t, buttonCta: i, onClick: s } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(x._V, { src: n(431979) }),
            (0, l.jsx)(x.hE, { className: v()(L.QX, L.QB, en.tR), children: O.intl.string(O.t.eL5z0i) }),
            (0, l.jsx)(x.tK, { className: L.C2, children: O.intl.string(O.t.poAv63) }),
            (0, l.jsxs)(eG.Z, {
                className: eP.Nr,
                type: eG.Z.Types.CUSTOM,
                children: [
                    (0, l.jsx)("img", { alt: "", className: eP.q8, src: n(133531) }),
                    (0, l.jsx)("img", { alt: "", className: eP.dw, src: n(610925) }),
                    (0, l.jsxs)(ek.A, {
                        className: eP.p_,
                        direction: ek.A.Direction.VERTICAL,
                        align: ek.A.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, l.jsx)(j.E, {
                                tag: "strong",
                                className: eP.p8,
                                variant: "text-md/normal",
                                style: { color: eD.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, l.jsx)("div", {
                                className: eP.x6,
                                children: (0, l.jsx)(C.$, { text: i, fullWidth: !0, onClick: s }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eV(e) {
    let { text: t, buttonCta: n, theme: i = b.NJ8.DARK, onClick: s } = e;
    return (0, l.jsx)(x.Ay, { theme: i, children: (0, l.jsx)(eB, { text: t, buttonCta: n, onClick: s }) });
}
var ew = n(765671),
    eM = n(9994),
    eU = n(71393),
    eF = n(299091),
    eW = n(486020),
    eH = n(403362),
    ez = n(778712),
    eK = n(47167),
    eY = n(137177),
    eQ = n(714991),
    eX = n(427262),
    eq = n(172799),
    eJ = n(330936),
    e$ = n(82210);
let eZ = (e) => {
        let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
        return 0 === t.memberCount && 0 === t.memberCount ? null : t;
    },
    e0 = (e) => e.target_type === eq.yV.STREAM && null != e.target_user,
    e1 = (e) => e.channel?.type === b.rbe.GROUP_DM,
    e2 = (e) => null == e.channel && null == e.guild && null != e.inviter,
    e3 = (e) => e.state === b.elq.ACCEPTED,
    e6 = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    e7 = (e) => {
        let t;
        return !e6(e) && (!!e2(e) || (null != e.inviter && !e3(e) && ((t = eZ(e)), !((t?.memberCount ?? 0) > 100))));
    },
    e5 = (e) => {
        let { guild: t, user: n, application: i } = e;
        return null != i
            ? (0, l.jsx)(eY.A, { className: e$.Z2, game: i, size: e$.q6 })
            : null != n
              ? (0, l.jsx)(x.eu, {
                    src: n.getAvatarURL(void 0, 100),
                    size: ez._3.DEPRECATED_SIZE_100,
                    className: e$.my,
                })
              : null != t
                ? (0, l.jsx)(x.$v, { guild: t, size: x.$v.Sizes.LARGER, className: e$.$f, animate: !0 })
                : null;
    };
function e8(e) {
    let { invite: t, textClassName: n, className: i } = e,
        s = eZ(t);
    return null == s || e7(t) || t?.guild?.id === eJ.TA
        ? null
        : (0, l.jsx)(x.R1, {
              className: v()(e$.He, i),
              online: s.onlineCount,
              total: s.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function e4(e) {
    let { invite: t, showBigUserIcon: n } = e,
        i = r.useMemo(
            () =>
                n
                    ? null
                    : e0(t) && null != t.target_user
                      ? eW.Ay.getUserAvatarURL(t.target_user)
                      : e7(t) && null != t.inviter
                        ? eW.Ay.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        s = O.intl.string(O.t["3rE1P8"]);
    return (
        e1(t)
            ? (s =
                  t.channel?.name != null && t.inviter?.username != null
                      ? O.intl.format(O.t.Lu4h18, { username: t.inviter.username })
                      : O.intl.string(O.t.OsdY8B))
            : e0(t) && null != t.target_user
              ? (s = O.intl.formatToPlainString(O.t.x2L32Q, { username: t.target_user.username }))
              : e3(t)
                ? (s = O.intl.string(O.t["FDsl+J"]))
                : e7(t) &&
                  null != t.inviter &&
                  (s = O.intl.format(O.t.spU2mI, { username: eX.Ay.getFormattedName(t.inviter) })),
        (0, l.jsxs)("div", {
            className: e$.JB,
            children: [
                null != i &&
                    (0, l.jsx)("div", {
                        className: e$._t,
                        children: (0, l.jsx)(x.eu, { src: i, size: ez._3.SIZE_24 }),
                    }),
                (0, l.jsx)(x.tK, { className: e$.__invalid_inviteJoinSubTitle, children: s }),
            ],
        })
    );
}
function e9(e) {
    let t,
        n,
        i,
        { user: s, guild: r, channel: a, application: o, showBigUserIcon: d } = e,
        c = (0, eK.Ay)(a);
    if (null != r)
        d && null == o && (t = (0, l.jsx)(x.$v, { guild: r, size: x.$v.Sizes.SMALL })),
            (n = r.name),
            null != o &&
                ((n = o.name),
                (i = (0, l.jsxs)("div", {
                    className: e$.JB,
                    children: [
                        (0, l.jsx)(x.tK, { className: e$.R9, children: O.intl.string(O.t["3gg9fF"]) }),
                        (0, l.jsxs)("div", {
                            className: e$.bo,
                            children: [
                                (0, l.jsx)(x.$v, { guild: r, size: x.$v.Sizes.SMALL }),
                                (0, l.jsx)(ec.D, {
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
        let e = eX.Ay.getFormattedName(s);
        null != c && "" !== c
            ? ((n = c), null != a.icon && (t = (0, l.jsx)(x.F4, { channel: a, size: ez._3.SIZE_32 })))
            : (n = e);
    } else if (null != s) {
        let e = eX.Ay.getFormattedName(s);
        (n = O.intl.formatToPlainString(O.t["4aF92R"], { username: e })),
            (i = (0, l.jsx)(x.tK, { className: e$.b$, children: O.intl.format(O.t.Quj7HX, { username: e }) }));
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(x.hE, {
                className: e$.DD,
                children: [
                    null != r ? (0, l.jsx)(eQ.A, { guild: r, className: e$.n2, tooltipPosition: "left" }) : null,
                    t,
                    n,
                ],
            }),
            i,
        ],
    });
}
var te = n(395671),
    tt = n(95701),
    tn = n(889227),
    ti = n(548118),
    ts = n(557582),
    tl = n(167630),
    tr = n(367048);
function ta(e) {
    let { guildScheduledEvent: t, channel: n, onAcceptInvite: i, isSubmitting: s } = e;
    return (0, l.jsxs)("div", {
        className: tr.s4,
        children: [
            (0, l.jsx)(ts.Ay, {
                name: t.name,
                description: t.description ?? void 0,
                headerVariant: "heading-md/medium",
                descriptionClassName: tr.__invalid_channelDescription,
                guildId: t.guild_id,
                guildEvent: t,
                eventPreview: t,
            }),
            null != n &&
                (0, l.jsx)("div", {
                    className: tr.yW,
                    children: (0, l.jsx)(tl.A, { guildScheduledEvent: t, channel: n }),
                }),
            (0, l.jsx)("div", {
                className: tr.xG,
                children: (0, l.jsx)(C.$, {
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
function to(e) {
    let { invite: t } = e,
        n = null != t.guild ? (0, Y.DY)(t.guild) : null;
    if (null == n) return null;
    let i = n.description ?? "";
    return (0, l.jsxs)("div", {
        className: tr.kQ,
        children: [
            (0, l.jsx)(ec.D, { className: tr.s7, variant: "text-sm/medium", children: O.intl.string(O.t.Eabu1z) }),
            (0, l.jsxs)("div", {
                className: tr.bo,
                children: [
                    (0, l.jsx)(ti.Ay, { guild: n, active: !0, size: ti.Ay.Sizes.MEDIUM }),
                    (0, l.jsxs)("div", {
                        className: tr.bW,
                        children: [
                            (0, l.jsxs)(j.E, {
                                className: tr.J5,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, l.jsx)(eQ.A, { guild: n, className: tr.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, l.jsx)(e8, { invite: t, textClassName: tr.kS, className: tr.pe }),
                        ],
                    }),
                ],
            }),
            i.length > 0 &&
                (0, l.jsx)("details", {
                    className: tr.x_,
                    children: (0, l.jsx)(j.E, { color: "text-default", variant: "text-sm/normal", children: i }),
                }),
        ],
    });
}
function td(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: s } = e,
        { guild_scheduled_event: r } = t;
    return null != r
        ? (0, l.jsx)(ta, { guildScheduledEvent: r, channel: n, isSubmitting: i, onAcceptInvite: s })
        : null;
}
var tc = n(467661);
function tu(e) {
    let { invite: t, onAcceptInvite: n, disableUser: i = !1 } = e;
    if (null == t) return null;
    let s = null != t.guild ? (0, Y.DY)(t.guild) : null,
        r = null != t.channel ? (0, tt.OY)(t.channel) : null,
        a = null != t.target_application ? new te.Ay(t.target_application) : null,
        o = i || null == t.inviter ? null : new tn.A(t.inviter),
        d =
            !(
                (null != t.approximate_member_count && t.approximate_member_count > 100) ||
                (null != s && s.features.has(b.GuildFeatures.COMMUNITY))
            ) &&
            null != o &&
            e1(t),
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
        u = { invite: t, user: o, guild: s, channel: r, application: a };
    return e6(t)
        ? (0, l.jsx)(td, { invite: t, channel: r, isSubmitting: c, onAcceptInvite: n })
        : (0, l.jsxs)("div", {
              className: tc.kL,
              children: [
                  (0, l.jsx)(e5, { application: a, guild: s, user: d || e2(t) ? o : null }),
                  e2(t) ? null : (0, l.jsx)(e4, { ...u, showBigUserIcon: d }),
                  (0, l.jsx)(e9, { ...u, showBigUserIcon: d }),
                  (0, l.jsx)(e8, { ...u }),
                  (0, l.jsx)("div", {
                      className: tc.xG,
                      children: (0, l.jsx)(C.$, {
                          variant: "primary",
                          size: "md",
                          text: O.intl.string(O.t.ohMvm1),
                          onClick: n,
                          loading: c,
                          fullWidth: !0,
                      }),
                  }),
              ],
          });
}
var t_ = n(473644),
    th = n(57930),
    tp = n(115703),
    tm = n(438842),
    tg = n(888849);
function tx(e) {
    let { invite: t, guild: n, profile: i, onAcceptInvite: s } = e,
        { gamesToDisplay: r, lastGameToDisplay: a, remainingGames: o } = (0, tp.A)(i),
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
    return (0, l.jsxs)("div", {
        className: tg.f_,
        children: [
            (0, l.jsxs)("div", {
                className: tg.qQ,
                children: [
                    (0, l.jsx)("div", {
                        className: tg.WT,
                        children: (0, l.jsx)("div", { className: tg.g_, "aria-hidden": !0 }),
                    }),
                    (0, l.jsxs)("div", {
                        className: tg.TS,
                        children: [
                            (0, l.jsx)(th.A, { guild: n, outline: !0 }),
                            (0, l.jsxs)(ed.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, l.jsx)(t_.A, {
                                        guild: n,
                                        invite: t,
                                        showGuildTag: !0,
                                        highContrast: !0,
                                        hideEnglish: !0,
                                    }),
                                    null != c &&
                                        "" !== c &&
                                        (0, l.jsx)(j.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: c,
                                        }),
                                    (0, l.jsx)(tm.A, {
                                        gamesToDisplay: r,
                                        lastGameToDisplay: a,
                                        remainingGames: o,
                                        activity: i.gameActivity,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tg.Fx,
                children: (0, l.jsx)(C.$, {
                    variant: "primary",
                    size: "md",
                    text: O.intl.string(O.t.ohMvm1),
                    onClick: s,
                    loading: d,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
let tf = (0, n(945810).mj)({
        name: "2026-03-mobile-web-invite-server-profile",
        kind: "installation",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    tA = n(843020);
function tE(e) {
    if (null == e || !eR.i.VISIBLE.has(e.visibility)) return !1;
    let t = null != e.description && e.description.length > 0,
        n = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
    return t || n;
}
function tI() {
    return (0, l.jsx)("div", { className: tg.$k, children: (0, l.jsx)(eu.y, {}) });
}
function tv(e) {
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
            (0, eH.xb)(n);
    }
}
function tj(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === b.elq.BANNED
        ? (0, l.jsx)(eB, { text: O.intl.string(O.t["5AkWAd"]), buttonCta: O.intl.string(O.t["8osdkn"]), onClick: n })
        : (0, l.jsx)(eB, { text: O.intl.string(O.t["usP+Mb"]), buttonCta: O.intl.string(O.t["8osdkn"]), onClick: n });
}
function tC(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: i, sectionClassName: s, inviteCardClassName: r = tg.qF } = e,
        { ref: a, height: o } = (0, ew.Ay)(),
        d = (0, eL.z)({ height: null != o && 0 !== o ? `${o}px` : `${i}px`, config: eO.config.stiff });
    return (0, l.jsxs)(eO.animated.div, {
        className: r,
        style: d,
        children: [
            (0, l.jsx)(eO.animated.div, {
                className: tg.NS,
                style: d,
                children: (0, l.jsx)("section", { ref: a, className: s, children: t }),
            }),
            n,
        ],
    });
}
function tN(e) {
    let { invite: t } = e;
    if (null == t || !e6(t)) return null;
    let n = tv(t);
    return (0, l.jsx)(tC, {
        startAnimHeightPx: 0,
        sectionClassName: tg.ui,
        children: 1 === n ? (0, l.jsx)(to, { invite: t }) : null,
    });
}
let tT = { 1: tg._r, 2: tg.Gm, 0: tg.Kt };
function tS(e) {
    let t,
        { invite: n } = e,
        i = tv(n),
        { enabled: s } = tf.useConfig({ location: "AcceptInviteMobile" }),
        a = null != n ? (0, eM.oO)(n) : null,
        o = n?.guild != null ? (0, Y.DY)(n.guild) : null,
        d = null != o && tE(a) && null != n && !e6(n),
        c = s && d;
    if (
        (r.useEffect(() => {
            d && tf.getConfig({ location: "AcceptInviteMobile.hasProfile" });
        }, [d]),
        null == n)
    )
        t = (0, l.jsx)(tI, {});
    else
        switch (i) {
            case 1:
                t = c
                    ? (0, l.jsx)(tx, { invite: n, guild: o, profile: a, onAcceptInvite: e.onAcceptInvite })
                    : (0, l.jsx)(tu, { ...e, invite: n });
                break;
            case 2:
                t = (0, l.jsx)(tj, { ...e, invite: n });
                break;
            default:
                t = (0, l.jsx)(tI, {});
        }
    let u = 1 === i && c ? tg.c4 : tg.qF;
    return (0, l.jsx)(tC, { startAnimHeightPx: 200, sectionClassName: tT[i], inviteCardClassName: u, children: t });
}
function ty(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = t ?? {},
        s = {},
        { enabled: r } = tf.useConfig({ location: "AcceptInviteMobile" }),
        a = null != t ? (0, eM.oO)(t) : null,
        o = null != i && tE(a) && null != t && !e6(t);
    if (i?.splash != null) {
        let e = eW.Ay.getGuildSplashURL({ id: i.id, splash: i.splash });
        null != e && ((s.backgroundImage = `url(${e})`), (s.backgroundSize = "cover"));
    } else r && o && ((s.backgroundImage = `url(${tA})`), (s.backgroundSize = "cover"));
    return (0, l.jsxs)(x.Ay, {
        theme: b.NJ8.DARK,
        className: tg.G3,
        style: s,
        contentClassName: tg.__,
        children: [(0, l.jsx)(tS, { ...e, onAcceptInvite: n }), (0, l.jsx)(tN, { ...e })],
    });
}
var tb = n(723702);
function tO(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: r = 288, height: a = 192 } = e;
    return (0, l.jsx)("img", {
        style: { width: r, height: a },
        src: "https://cdn.discordapp.com/assets/content/f116e92cafb14967bf471809621718b4c2fe5abd27c9236c1ab4353d32a9fc6c.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var tR = n(611346),
    tL = n(604880);
function tD(e) {
    let { token: t, hasError: n, errorReason: i } = e;
    return n
        ? (0, l.jsxs)("div", {
              className: tR.MY,
              children: [
                  (0, l.jsx)("div", { className: tR.r$, children: (0, l.jsx)("img", { src: tL, alt: "" }) }),
                  (0, l.jsxs)("div", {
                      className: tR.Qs,
                      children: [
                          (0, l.jsx)(tO, { alt: "" }),
                          (0, l.jsx)(ec.D, {
                              variant: "heading-lg/semibold",
                              className: tR.ky,
                              children: O.intl.string(O.t.RtCSr1),
                          }),
                          (0, l.jsx)(j.E, {
                              variant: "text-md/normal",
                              className: tR.G3,
                              children: O.intl.string(O.t["S+YjYJ"]),
                          }),
                          (0, l.jsx)(C.$, {
                              variant: "primary",
                              text: O.intl.string(O.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  eS.default.track(b.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: i }),
                                      (0, f.pX)(b.BVt.LOGIN);
                              },
                          }),
                      ],
                  }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: tR.MY,
              children: [
                  (0, l.jsx)("div", { className: tR.r$, children: (0, l.jsx)("img", { src: tL, alt: "" }) }),
                  (0, l.jsxs)("div", {
                      className: tR.Qs,
                      children: [
                          (0, l.jsx)(tO, { alt: "" }),
                          (0, l.jsx)(ec.D, {
                              variant: "heading-lg/semibold",
                              className: tR.ky,
                              children: O.intl.string(O.t["9h/0Rl"]),
                          }),
                          (0, l.jsx)(j.E, {
                              variant: "text-md/normal",
                              className: tR.G3,
                              children: O.intl.string(O.t.Wgm7Om),
                          }),
                          (0, l.jsx)(C.$, {
                              variant: "primary",
                              text: O.intl.string(O.t.NydsTd),
                              fullWidth: !0,
                              onClick: () => {
                                  let e, n;
                                  (e = (function (e) {
                                      let t = platform.os?.family;
                                      if ("Android" === t || "iOS" === t) {
                                          let t = eT.default.getFingerprint(),
                                              n = (0, eC.I_)(),
                                              i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/login/one-time?token=${e}`;
                                          return (0, eC.Ay)(i, {
                                              utmSource: "one-time-login",
                                              fingerprint: t,
                                              attemptId: n,
                                          });
                                      }
                                      return "discord://";
                                  })(t)),
                                      (n = (0, eC.X7)(e)),
                                      eS.default.track(b.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                                          detection_type: "mobile_button_clicked",
                                          device_type: d.Fr ? "mobile" : "tablet",
                                          platform: eS.default.getSuperProperties()?.os,
                                      }),
                                      null != n &&
                                          eS.default.track(b.HAw.DEEP_LINK_CLICKED, {
                                              fingerprint: (0, eN.v)(n.fingerprint),
                                              attempt_id: n.attemptId,
                                              source: n.utmSource,
                                          }),
                                      ey.A.launch(e, (e) => {
                                          e || (0, f.bG)({ pathname: b.BVt.LOGIN });
                                      });
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var tG = n(613057);
let tk = (e) => {
    let { title: t, subtitle: n, buttonText: i, buttonOnClick: s } = e;
    return (0, l.jsx)(x.Ay, {
        children: (0, l.jsxs)(ed.B, {
            gap: 24,
            children: [
                (0, l.jsxs)(ed.B, {
                    gap: 8,
                    children: [(0, l.jsx)(x.hE, { children: t }), (0, l.jsx)(x.tK, { children: n })],
                }),
                (0, l.jsx)(C.$, { onClick: s, text: i, fullWidth: !0 }),
            ],
        }),
    });
};
var tP = n(463347),
    tB = n(189213),
    tV = n(192308),
    tw = n(347704),
    tM = n(803306),
    tU = n(17372),
    tF = n(369053),
    tW = n(975571),
    tH = n(928658);
function tz(e, t) {
    let i = !1,
        s = () => {
            i || t?.();
        },
        r = (r) => {
            (i = !0),
                setTimeout(() => {
                    i = !1;
                }, 0);
            let a = async () => {
                    await (0, tF.TP)(e, r);
                },
                d = async (t) => await (0, tF.G_)(e, r, t),
                c = (n) => {
                    (i = !0),
                        setTimeout(() => {
                            i = !1;
                        }, 0);
                    let s = n?.token;
                    e === tU.tY.MESSAGE
                        ? (0, tH.bM)(s, t)
                        : e === tU.tY.USER
                          ? (0, tH.nQ)(s, t)
                          : e === tU.tY.GUILD
                            ? (0, tH.V3)(s, t)
                            : e === tU.tY.MEDIA_TAKEDOWN && (0, tH._Y)(s, t);
                };
            a(),
                (0, tV.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("19840").then(n.bind(n, 79779));
                        return (t) =>
                            (0, l.jsx)(e, {
                                ...t,
                                onFormSubmit: d,
                                onResend: a,
                                onSuccess: c,
                                headerText: O.intl.string(O.t.H3Q7U8),
                                confirmButtonText: O.intl.string(O.t["13ofGu"]),
                                impression: { impressionName: o.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                            });
                    },
                    { onCloseCallback: s, dismissable: !1 },
                );
        };
    return () => {
        (0, tV.closeAllModals)(),
            (0, tV.openModalLazy)(
                async () => {
                    let { default: t } = await n.e("29232").then(n.bind(n, 180275));
                    return (n) =>
                        (0, l.jsx)(t, {
                            ...n,
                            onSuccess: r,
                            headerText: O.intl.string(O.t.ZLRYGU),
                            confirmButtonText: O.intl.string(O.t.PDTjLN),
                            subtitle: e === tU.tY.MEDIA_TAKEDOWN ? O.intl.string(O.t.jt3z8f) : void 0,
                        });
                },
                { onCloseCallback: s, dismissable: !1 },
            );
    };
}
var tK = n(939249),
    tY = n(921853),
    tQ = n(750997);
let tX = { [tU.tY.MESSAGE]: O.t.fuqnBC, [tU.tY.USER]: O.t.F4jrRW, [tU.tY.GUILD]: O.t.gH3aMs },
    tq = (e) => {
        let { title: t, menuType: n, onReopen: i } = e,
            s = r.useCallback(() => {
                tz(n, i)();
            }, [n, i]);
        return (0, l.jsxs)(tK.D, {
            className: tQ.b0,
            onClick: s,
            children: [
                (0, l.jsx)(j.E, { variant: "text-md/medium", children: t }),
                (0, l.jsx)(tY.n, { size: "sm", style: { transform: "rotate(180deg)" } }),
            ],
        });
    },
    tJ = (e) => {
        let { dsaCapabilities: t, onReopen: n } = e;
        return (0, l.jsx)(ed.B, {
            gap: 16,
            children: (0, l.jsx)("div", {
                className: tQ.kL,
                children: t.map((e) =>
                    e === tU.tY.MEDIA_TAKEDOWN || null == tX[e]
                        ? null
                        : (0, l.jsx)(tq, { title: O.intl.string(tX[e]), menuType: e, onReopen: n }, e),
                ),
            }),
        });
    };
var t$ = n(881636),
    tZ = n(913951);
let t0 = () => {
    let { goToStep: e } = (0, tw.n)(),
        t = r.useCallback(() => {
            e(t6.DSA);
        }, [e]),
        n = r.useCallback(() => {
            e(t6.TIDA);
        }, [e]);
    return (0, l.jsxs)(ed.B, {
        gap: 8,
        children: [
            (0, l.jsx)(j.E, { variant: "text-md/normal", children: O.intl.string(O.t.bd1h5T) }),
            (0, l.jsxs)("div", {
                className: tZ.k,
                children: [
                    (0, l.jsxs)(tK.D, {
                        className: tZ.b,
                        onClick: t,
                        children: [
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(j.E, {
                                        variant: "text-md/medium",
                                        children: O.intl.string(O.t["AszWL/"]),
                                    }),
                                    (0, l.jsx)(j.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: O.intl.string(O.t["0Jikui"]),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(t$.u, { size: "sm" }),
                        ],
                    }),
                    (0, l.jsxs)(tK.D, {
                        className: tZ.b,
                        onClick: n,
                        children: [
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(j.E, { variant: "text-md/medium", children: O.intl.string(O.t.jMSjZL) }),
                                    (0, l.jsx)(j.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: O.intl.string(O.t.qEaUPS),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(t$.u, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var t1 = n(229503);
let t2 = () =>
    (0, l.jsxs)(ed.B, {
        gap: 24,
        children: [
            (0, l.jsx)(j.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: O.intl.string(O.t["3zG2Y9"]),
            }),
            (0, l.jsxs)(ed.B, {
                gap: 16,
                children: [
                    (0, l.jsxs)(ed.B, {
                        gap: 8,
                        children: [
                            (0, l.jsx)(j.E, { variant: "text-md/semibold", children: O.intl.string(O.t.CfBo0z) }),
                            (0, l.jsxs)("ul", {
                                className: t1.T,
                                children: [
                                    (0, l.jsx)("li", {
                                        children: (0, l.jsx)(j.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: O.intl.string(O.t.ofQnNQ),
                                        }),
                                    }),
                                    (0, l.jsx)("li", {
                                        children: (0, l.jsx)(j.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: O.intl.string(O.t.dFaQGn),
                                        }),
                                    }),
                                    (0, l.jsx)("li", {
                                        children: (0, l.jsx)(j.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: O.intl.string(O.t.RVNwXh),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)(j.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: O.intl.string(O.t.o5azXJ),
                    }),
                    (0, l.jsx)(j.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: O.intl.format(O.t.YETtaY, {
                            policyURL: "https://discord.com/safety/non-consensual-intimate-media-policy-explainer",
                        }),
                    }),
                ],
            }),
            (0, l.jsxs)(ed.B, {
                gap: 8,
                children: [
                    (0, l.jsx)(j.E, { variant: "text-md/semibold", children: O.intl.string(O.t.FJh2zi) }),
                    (0, l.jsx)(j.E, {
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
var t3 = n(725925);
u.Ay.initialize();
var t6 = (((s = {}).SELECTION = "selection"), (s.DSA = "dsa"), (s.TIDA = "tida"), s);
let t7 = (e) => {
        let { transitionState: t, onClose: n } = e,
            [i, s] = r.useState(!0),
            [a, o] = r.useState([]),
            [d, c] = r.useState(null),
            _ = (0, u.bG)([eT.default], () => eT.default.isAuthenticated()),
            p = (0, u.bG)([ei.A], () => ei.A.hasLoadedExperiments),
            m = r.useCallback(() => {
                (0, tF.OY)()
                    .then((e) => {
                        let {
                            body: { capabilities: t },
                        } = e;
                        s(!1), o(t);
                    })
                    .catch(() => {
                        s(!1), o([]);
                    });
            }, []);
        r.useEffect(() => {
            _
                ? (s(!0),
                  tM
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => m())
                      .catch(() => s(!1)))
                : m();
        }, [_, m]),
            r.useEffect(() => {
                (async () => {
                    p || (await h.A.getLocationMetadata(), h.A.getExperiments());
                })();
            }, [p]);
        let g = a.filter((e) => e !== tU.tY.MEDIA_TAKEDOWN),
            x = a.includes(tU.tY.MEDIA_TAKEDOWN),
            f = g.length > 0,
            A = f && x,
            E = i || !p;
        r.useEffect(() => {
            E || f || x || n();
        }, [E, f, x, n]);
        let I = r.useCallback(() => {
                (0, tV.openModalLazy)(() => Promise.resolve((e) => (0, l.jsx)(t7, { ...e })), { dismissable: !1 });
            }, []),
            v = r.useCallback((e, t) => {
                "selection" !== t && "selection" !== e ? c("selection") : c(e);
            }, []),
            j = r.useMemo(() => tz(tU.tY.MEDIA_TAKEDOWN, I), [I]),
            C = d ?? (A ? "selection" : f ? "dsa" : "tida");
        if (E || (!f && !x))
            return (0, l.jsx)(tB.Modal, {
                title: "",
                actions: [],
                transitionState: t,
                onClose: n,
                dismissable: !1,
                children: (0, l.jsx)(ed.B, {
                    gap: 16,
                    align: "center",
                    justify: "center",
                    style: { minHeight: "200px" },
                    children: (0, l.jsx)(eu.y, {}),
                }),
            });
        if (!A) {
            if (f)
                return (0, l.jsx)(tB.Modal, {
                    title: O.intl.string(O.t.Z11w18),
                    subtitle: O.intl.format(O.t["532l+q"], {
                        supportURL: tW.A.getArticleURL(b.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, l.jsx)(tJ, { dsaCapabilities: g, onReopen: I }),
                });
            if (x)
                return (0, l.jsx)(tB.Modal, {
                    title: O.intl.string(O.t.YignUm),
                    actions: [{ text: O.intl.string(O.t.D5Czbu), variant: "primary", onClick: j }],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, l.jsx)(t2, {}),
                });
        }
        let N = [
            { stepKey: "selection", modalProps: { title: O.intl.string(O.t.Z11w18) }, body: (0, l.jsx)(t0, {}) },
            {
                stepKey: "dsa",
                modalProps: {
                    title: O.intl.string(O.t.Z11w18),
                    subtitle: O.intl.format(O.t["532l+q"], {
                        supportURL: tW.A.getArticleURL(b.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, l.jsx)(tJ, { dsaCapabilities: g, onReopen: I }),
            },
            {
                stepKey: "tida",
                modalProps: { title: O.intl.string(O.t.YignUm) },
                body: (0, l.jsx)(t2, {}),
                nextButtonProps: { text: O.intl.string(O.t.D5Czbu) },
                onNext: () => (j(), !1),
            },
        ];
        return (0, l.jsx)("div", {
            className: { selection: t3.a, dsa: t3.q, tida: void 0 }[C],
            children: (0, l.jsx)(tw.t, {
                steps: N,
                currentStepKey: C,
                onStepChange: v,
                onClose: n,
                transitionState: t,
                dismissable: !1,
            }),
        });
    },
    t5 = () => (
        r.useEffect(() => {
            (0, tV.openModalLazy)(() => Promise.resolve((e) => (0, l.jsx)(t7, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
var t8 = n(30793),
    t4 = n(970928),
    t9 = n(612181),
    ne = n(547830);
let nt = {
    dump(e) {
        let t;
        null != performance.memory &&
            (t = {
                jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                totalJSHeapSize: performance.memory.totalJSHeapSize,
                usedJSHeapSize: performance.memory.usedJSHeapSize,
            }),
            e({
                browser: { name: ev().name, version: ev().version },
                os: { name: ev().os.family, version: ev().os.version },
                memory: t,
            });
    },
    getTimeSinceNavigationStart: () => Date.now() - ne.fL,
};
var nn = n(765624),
    ni = n(210309),
    ns = n(970672),
    nl = n(129014),
    nr = n(642277);
let na = function (e) {
    let { match: t, location: n, attemptDeepLink: i } = e,
        [s, a] = r.useState(0);
    r.useEffect(() => {
        nl.default.once("connected", () => {
            a(1);
        }),
            nl.default.once("disconnected", () => {
                (0, f.pX)((0, nr.W)());
            }),
            nl.default.connect();
    }, []),
        r.useEffect(() => {
            if (0 !== s) return;
            let e = setTimeout(() => (0, f.pX)((0, nr.W)()), 3e3);
            return () => clearTimeout(e);
        }, [s]);
    let o = r.useCallback(
        async (e, t) => {
            try {
                a(2), await i(e, t), a(3);
            } catch (e) {
                console.error("Error opening deeplink", e);
            }
        },
        [i],
    );
    if ((0, f.MX)()) return null;
    switch (s) {
        case 1:
            return (0, l.jsxs)(x.Ay, {
                children: [
                    (0, l.jsx)(x.hE, { className: L.QB, children: O.intl.string(O.t.qllnGm) }),
                    (0, l.jsx)(x.tK, { children: O.intl.string(O.t.SXCxye) }),
                    (0, l.jsx)("div", {
                        className: L.eT,
                        children: (0, l.jsx)(C.$, {
                            text: O.intl.string(O.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => o(t, n),
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: v()(L.Ot, L.F1),
                        children: (0, l.jsx)(z.Q, {
                            text: O.intl.string(O.t["2ixEBi"]),
                            textVariant: "text-sm/normal",
                            onClick: () => (0, f.pX)((0, nr.W)()),
                        }),
                    }),
                ],
            });
        case 0:
        case 2:
            return (0, l.jsxs)(x.Ay, {
                children: [(0, l.jsx)(x.hE, { children: O.intl.string(O.t["Z+hCVU"]) }), (0, l.jsx)(x.CK, {})],
            });
        case 3:
            return (0, l.jsxs)(x.Ay, {
                children: [
                    (0, l.jsx)(x.hE, { className: L.QB, children: O.intl.string(O.t.csrAMJ) }),
                    (0, l.jsx)(x.tK, { children: O.intl.string(O.t.ghBJz9) }),
                ],
            });
    }
};
var no = n(718446),
    nd = n(431144),
    nc = n(355097);
u.Ay.initialize();
class nu extends r.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, Q.A)(this.props.location),
            t = (0, a.parse)(this.props.location.search);
        H.Bo.post({
            url: b.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, category: t.category, email_type: t.email_type },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { user: n },
                    } = e,
                    i = new tn.A(n);
                this.setState({ success: !0, busy: !1, user: i, category: t.category });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, A.d)("disable_email_notifications");
    }
    renderBusy() {
        return (0, l.jsx)(x.Ay, { children: (0, l.jsx)(x.CK, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: i } = this.props,
            s = O.intl.formatToPlainString(O.t.YDAohB, { category: t });
        return (0, l.jsxs)(x.Ay, {
            children: [
                (0, l.jsx)(x.hE, { className: L.QB, children: O.intl.string(O.t.f6rdLg) }),
                (0, l.jsx)(x.tK, { children: s }),
                (0, l.jsx)("div", {
                    className: L.QX,
                    children: (0, l.jsx)(C.$, { text: O.intl.string(O.t.fIv16B), fullWidth: !0, onClick: () => i(n) }),
                }),
                (0, l.jsx)("div", {
                    className: L.Ot,
                    children: (0, l.jsx)(z.Q, {
                        text: O.intl.string(O.t.YYTirT),
                        textVariant: "text-sm/normal",
                        onClick: () => i((0, no.settingsPathToRoute)(nc.od.NOTIFICATIONS_EMAILS)),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: i } = this.state;
        if (null != i) {
            let e = nd.px.find((e) => e.category === i);
            if (null != e) return this.renderCategorySuccess(i, e.label());
        }
        return (0, l.jsxs)(x.Ay, {
            children: [
                (0, l.jsx)(x.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: ez._3.DEPRECATED_SIZE_100,
                    className: L.SX,
                }),
                (0, l.jsx)(x.hE, { className: L.QB, children: O.intl.string(O.t["6U6OMQ"]) }),
                (0, l.jsx)(x.tK, { children: O.intl.string(O.t["yaDJ4/"]) }),
                (0, l.jsx)("div", {
                    className: L.eT,
                    children: (0, l.jsx)(C.$, { text: O.intl.string(O.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, l.jsxs)(x.Ay, {
            children: [
                (0, l.jsx)(x._V, { src: n(37772), className: L.SX }),
                (0, l.jsx)(x.hE, { className: L.QB, children: O.intl.string(O.t.ox9hIS) }),
                (0, l.jsx)(x.tK, { children: O.intl.string(O.t["/dcuR5"]) }),
                (0, l.jsx)("div", {
                    className: L.eT,
                    children: (0, l.jsx)(C.$, { text: O.intl.string(O.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let n_ = u.Ay.connectStores([K.A], () => ({ defaultRoute: K.A.defaultRoute }))(nu);
var nh = n(110782),
    np = n(10088),
    nm = n(871123),
    ng = n(189081),
    nx = n(67480),
    nf = n(45938),
    nA = n(161928),
    nE = n(455686),
    nI = n(968098);
u.Ay.initialize();
class nv extends r.PureComponent {
    state = { error: null, continueOnWeb: !1, currentUser: null, sentVerification: !1, fetchingUser: !1 };
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, A.d)("gift_code");
    }
    componentDidUpdate(e) {
        let { authenticated: t, isResolved: n } = this.props;
        n ||
            _.h.wait(() => {
                this.resolveGiftCode();
            }),
            t && !e.authenticated && this.handleAuthenticated(),
            !t && e.authenticated && this.setState({ currentUser: null });
    }
    handleAuthenticated() {
        let { currentUser: e } = this.state;
        nh.Yq(), null == e && this.refreshUser();
    }
    refreshUser = () => {
        this.setState({ fetchingUser: !0 }),
            tM
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
            s = null != i ? i.code : null;
        return s === b.t02.INVALID_GIFT_SELF_REDEMPTION
            ? O.intl.string(O.t.wa9h7F)
            : s === b.t02.INVALID_GIFT_REDEMPTION_OWNED && n?.productLine === b.EZt.COLLECTIBLES
              ? O.intl.string(O.t.mdLtb5)
              : null != t || s === b.t02.INVALID_GIFT_REDEMPTION_OWNED
                ? O.intl.format(O.t.PIdmg3, { libraryLink: b.BVt.APPLICATION_LIBRARY })
                : e.isClaimed || s === b.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? O.intl.string(O.t.ilcBeX)
                  : s === b.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? O.intl.string(O.t.ypuSd8)
                    : void 0;
    }
    handleLogout = () => {
        let e = this.props.match.params.giftCode;
        h.A.logout("gift_code", b.BVt.GIFT_CODE_LOGIN(e));
    };
    handleResendVerification = () => {
        h.A.verifyResend(), this.setState({ sentVerification: !0 });
    };
    handleAccept = async () => {
        let { transitionTo: e, giftCode: t } = this.props;
        if (null == t) throw Error("Trying to accept gift before resolve");
        let n = this.getCode();
        try {
            this.setState({ error: null }), await p.A.redeemGiftCode({ code: n }), e(b.BVt.APP);
        } catch (e) {
            this.setState({ error: e });
        }
    };
    resolveGiftCode = () => {
        let { transitionTo: e } = this.props,
            t = this.getCode();
        p.A.resolveGiftCode(t, !0, !0).then((n) => {
            null != n && null != n.giftCode.promotion && e(b.BVt.BILLING_PROMOTION_REDEMPTION(t));
        });
    };
    renderSpinner(e) {
        return (0, l.jsxs)(x.Ay, { children: [(0, l.jsx)(x.hE, { children: e }), (0, l.jsx)(x.CK, {})] });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, l.jsxs)(x.Ay, {
            children: [
                (0, l.jsx)(x.hE, { className: v()(L.Ot, L.QB), children: O.intl.string(O.t.KPowgn) }),
                (0, l.jsx)(x.tK, { children: O.intl.string(O.t.j8734b) }),
                (0, l.jsx)("div", {
                    className: v()(L.eT, L.QB),
                    children: (0, l.jsx)(C.$, { text: O.intl.string(O.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, l.jsx)(z.Q, {
                    text: O.intl.string(O.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(tW.A.getArticleURL(b.MVz.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, l.jsxs)(x.Ay, {
            children: [
                (0, l.jsx)(x.hE, { className: L.QB, children: O.intl.string(O.t.csrAMJ) }),
                (0, l.jsx)(x.tK, { children: O.intl.string(O.t["m1+IBn"]) }),
                (0, l.jsx)("div", {
                    className: L.eT,
                    children: (0, l.jsx)(C.$, {
                        text: O.intl.string(O.t["qsI+EH"]),
                        fullWidth: !0,
                        onClick: () => this.setState({ continueOnWeb: !0 }),
                    }),
                }),
            ],
        });
    }
    renderVerification(e) {
        let { sentVerification: t } = this.state;
        return (0, l.jsxs)(x.Ay, {
            children: [
                (0, l.jsx)(x._V, { src: n(792525), className: L.QB }),
                (0, l.jsx)(x.hE, { children: O.intl.format(O.t["ivLUf/"], { username: e.username }) }),
                (0, l.jsx)(x.tK, { className: L.QX, children: O.intl.string(O.t["8Su18+"]) }),
                (0, l.jsx)("div", {
                    className: L.eT,
                    children: (0, l.jsx)(C.$, {
                        text: t ? O.intl.string(O.t.CMa9Rv) : O.intl.string(O.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, l.jsx)("div", {
                    className: L.Ot,
                    children: (0, l.jsx)(z.Q, {
                        text: O.intl.string(O.t.Po9eBQ),
                        textVariant: "text-sm/normal",
                        onClick: this.refreshUser,
                    }),
                }),
            ],
        });
    }
    renderAuthenticated(e, t, n) {
        let { transitionTo: i } = this.props,
            s = this.getErrorMessage(e);
        return (0, l.jsx)(nC, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: i,
            children: (0, l.jsxs)(x.Ay, {
                children: [
                    (0, l.jsx)(nA.A, { giftCode: e }),
                    (0, l.jsx)("div", {
                        className: L.eT,
                        children: (0, l.jsx)(C.$, {
                            text: O.intl.string(O.t.n6I6k4),
                            fullWidth: !0,
                            disabled: null != s,
                            onClick: this.handleAccept,
                        }),
                    }),
                    null != s
                        ? (0, l.jsx)(x.tK, { className: L.QX, children: s })
                        : (0, l.jsx)(x.ME, {
                              className: L.QX,
                              children: O.intl.format(O.t.NYM08s, {
                                  userTag: eX.Ay.getUserTag(t),
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
                isResolved: s,
                isAccepting: r,
                transitionTo: a,
                location: o,
            } = this.props,
            { fetchingUser: d, continueOnWeb: c } = this.state;
        if (e === b.fAW.OPEN && !c) return this.renderAppOpened();
        if (e === b.fAW.OPENING) return this.renderSpinner(O.intl.string(O.t["Z+hCVU"]));
        if (r) return this.renderSpinner(O.intl.string(O.t.bhJseN));
        if (null == i) return s ? this.renderExpiredInvite() : this.renderSpinner(O.intl.string(O.t.b3lf1c));
        if (s) {
            if (n) {
                let e = this.state.currentUser;
                return d || null == e
                    ? this.renderSpinner(O.intl.string(O.t.bYb2nS))
                    : this.requiresVerification && null != e
                      ? this.renderVerification(e)
                      : this.renderAuthenticated(i, e, t);
            }
            return "login" === this.getMode()
                ? (0, l.jsx)(nE.A, { giftCodeSKU: t, giftCode: i, transitionTo: a, location: o })
                : (0, l.jsx)(nI.A, { giftCodeSKU: t, giftCode: i, transitionTo: a, location: o });
        }
        return null;
    }
}
let nj = u.Ay.connectStores([t8.A, ng.A, eT.default, nx.A, K.A, np.A], (e) => {
        let t = e.match.params.giftCode,
            n = t8.A.get(t),
            i = null != n ? nx.A.get(n.skuId) : null;
        return {
            giftCode: n,
            sku: i,
            libraryApplication:
                null != i && n?.entitlementBranches != null ? nf.YI(n.entitlementBranches, i, ng.A) : null,
            authenticated: eT.default.isAuthenticated(),
            defaultRoute: K.A.defaultRoute,
            isResolved: t8.A.getIsResolved(t),
            isAccepting: t8.A.getIsAccepting(t),
            libraryApplicationsFetched: ng.A.fetched,
            nativeAppState: np.A.getState(t),
        };
    })(nv),
    nC = (e) => {
        let { sku: t, children: n, giftCodeCode: i, transitionTo: s } = e,
            a = (0, nm.bF)(t);
        return (r.useEffect(() => {
            null != i && a && s(b.BVt.APP_WITH_GIFT_CODE(i));
        }, [a, i, s]),
        a)
            ? (0, l.jsxs)(x.Ay, {
                  children: [(0, l.jsx)(x.hE, { children: O.intl.string(O.t.b3lf1c) }), (0, l.jsx)(x.CK, {})],
              })
            : n;
    };
var nN = n(871194),
    nT = n(895600),
    nS = n(799365),
    ny = n(942614),
    nb = n(894778),
    nO = n(538796),
    nR = n(401755),
    nL = n(771016),
    nD = n(315290),
    nG = n(396574),
    nk = n(94654);
u.Ay.initialize();
class nP extends r.PureComponent {
    componentDidMount() {
        (0, A.d)("guildTemplate"),
            nG.VP || ey.A.launch("discord://" + b.BVt.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && el.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return nG.VP
            ? (0, l.jsx)("div", { className: L.eT, children: (0, l.jsx)(C.$, { text: e, fullWidth: !0, onClick: t }) })
            : (0, l.jsx)(x.KE, { className: L.eT });
    }
    renderSpinner(e) {
        return (0, l.jsxs)(x.Ay, { children: [(0, l.jsx)(x.hE, { children: e }), (0, l.jsx)(x.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, l.jsxs)(x.Ay, {
            children: [
                (0, l.jsx)(x.hE, { className: v()(L.Ot, L.QB), children: O.intl.string(O.t.C7ZRNw) }),
                (0, l.jsx)(x.tK, { children: O.intl.string(O.t.A6MwXE) }),
                this.renderButton(O.intl.string(O.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, l.jsxs)(x.Ay, {
            children: [
                (0, l.jsx)(x.hE, { className: L.QB, children: O.intl.string(O.t.csrAMJ) }),
                (0, l.jsx)(x.tK, { children: O.intl.string(O.t["m1+IBn"]) }),
                this.renderButton(O.intl.string(O.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (eE()(null != e, "guild template must not be null"), e.state === nR.QB.RESOLVING)
            ? (0, l.jsx)(x.Ay, { className: nk.sL, children: (0, l.jsx)(nS.A, { guildTemplate: e }) })
            : (0, l.jsx)(nB, { guildTemplate: e });
    }
    renderContinue() {
        return (0, l.jsxs)(x.Ay, {
            children: [
                (0, l.jsx)(x.hE, { children: O.intl.string(O.t.fOc4gn) }),
                this.renderButton(O.intl.string(O.t.fIv16B), this.handleContinue),
            ],
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: i, location: s } = this.props;
        if (null == e) return this.renderSpinner(O.intl.string(O.t.ZTNur7));
        if (t === b.fAW.OPEN) return this.renderAppOpened();
        if (t === b.fAW.OPENING) return this.renderSpinner(O.intl.string(O.t["Z+hCVU"]));
        switch (e.state) {
            case nR.QB.RESOLVING:
                return this.renderSpinner(O.intl.string(O.t["Z+hCVU"]));
            case nR.QB.RESOLVED:
                if (n || !nG.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, l.jsx)(nE.A, { guildTemplate: e, transitionTo: i, location: s });
                return (0, l.jsx)(nI.A, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: s,
                    onRegister: () => {
                        (0, ny.C)(nL.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            nb.A.flowStart(nD.do.ORGANIC_GUILD_TEMPLATES, nD.ju.NUF_STARTED);
                    },
                });
            case nR.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function nB(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, nN.A)(t, !1);
    nb.A.flowStep(nD.do.ORGANIC_GUILD_TEMPLATES, nD.jC.GUILD_CREATE);
    let s = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(x.hE, { className: nk.wx, children: O.intl.string(O.t.UNFvtM) }),
            n,
            (0, l.jsx)("div", {
                className: nk.Tf,
                children: (0, l.jsx)(C.$, { text: O.intl.string(O.t.xr59t7), fullWidth: !0, onClick: i }),
            }),
        ],
    });
    return (0, l.jsx)(nO.A, {
        className: nk.sL,
        children: () => [
            (0, l.jsx)(nT.A, { guildTemplate: t }, "template"),
            (0, l.jsx)("div", { className: nk.KJ, children: s }, "contents"),
        ],
    });
}
function nV(e, t, n) {
    e.preventDefault(),
        eS.default.track(b.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        });
    let i = eT.default.getFingerprint(),
        s = null != i ? i : eT.default.getId();
    el.A.openMobileApp(n.state === nR.QB.RESOLVED ? t : void 0, s);
}
function nw(e) {
    let { code: t } = e,
        n = (0, u.bG)([es.A], () => es.A.getGuildTemplate(t));
    return (r.useEffect(() => {
        (0, A.d)("guild_template_mobile");
    }, []),
    null == n || n.state === nR.QB.RESOLVING)
        ? (0, l.jsx)(x.Ay, { children: (0, l.jsx)(eu.y, {}) })
        : n.state === nR.QB.RESOLVED
          ? (0, l.jsxs)(x.Ay, {
                children: [
                    (0, l.jsx)(nS.A, { guildTemplate: n, tall: !0 }),
                    (0, l.jsx)("div", {
                        className: L.QX,
                        children: (0, l.jsx)(C.$, {
                            text: O.intl.string(O.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => nV(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, l.jsx)(eV, {
                text: O.intl.string(O.t["e/rZ2n"]),
                buttonCta: O.intl.string(O.t.HAvYn0),
                onClick: (e) => nV(e, t, n),
            });
}
u.Ay.initialize(), n(938796);
var nM = n(821418),
    nU = n(665260),
    nF = n(362474),
    nW = n(845584),
    nH = n(964486),
    nz = n(475743),
    nK = n(17841),
    nY = n(359438),
    nQ = n(383302),
    nX = n(921037),
    nq = n(4274),
    nJ = n(504394);
n(436317), u.Ay.initialize();
let n$ = "register",
    nZ = "login";
function n0(e) {
    let { message: t, onClick: n, invite: i } = e,
        s = i?.guild_scheduled_event != null;
    return nG.VP
        ? (0, l.jsx)("div", {
              className: s ? L.QX : L.eT,
              children: (0, l.jsx)(C.$, { text: t, onClick: n, variant: s ? "active" : "primary", fullWidth: !0 }),
          })
        : (0, l.jsx)(x.KE, { className: L.eT });
}
function n1(e) {
    let { invite: t, handleAccept: n } = e,
        i =
            null != t.guild_scheduled_event
                ? (0, l.jsx)(nY.X, { channel: t.channel, guildScheduledEvent: t.guild_scheduled_event })
                : (0, l.jsx)("div", { className: L.S3, children: (0, l.jsx)(nJ.A, { invite: t }) }),
        s =
            null != t.guild_scheduled_event && null != t.guild
                ? (0, l.jsx)(x.Ay, {
                      className: L.QX,
                      children: (0, l.jsx)(nQ.N, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                  })
                : null;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsxs)(x.Ay, {
                children: [i, (0, l.jsx)(n0, { message: O.intl.string(O.t.ohMvm1), onClick: n, invite: t })],
            }),
            s,
        ],
    });
}
function n2(e) {
    let { invite: t, onContinue: n } = e;
    return (0, l.jsxs)(x.Ay, {
        children: [
            (0, l.jsx)(nJ.A, { invite: t }),
            nG.VP
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              className: L.QX,
                              children: (0, l.jsx)(C.$, {
                                  text: O.intl.string(O.t.UQvCf7),
                                  onClick: () => {
                                      eS.default.track(b.HAw.INVITE_CTA_CLICKED, {
                                          action: "open_app",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          m.Ay.openNativeAppModal(t.code);
                                  },
                                  variant: "primary",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: L.Ot,
                              children: (0, l.jsx)(C.$, {
                                  text: O.intl.string(O.t["2ixEBi"]),
                                  onClick: () => {
                                      eS.default.track(b.HAw.INVITE_CTA_CLICKED, {
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
                : (0, l.jsx)(x.KE, { className: L.eT }),
        ],
    });
}
function n3(e) {
    let { title: t } = e;
    return (0, l.jsxs)(x.Ay, { children: [(0, l.jsx)(x.hE, { children: t }), (0, l.jsx)(x.CK, {})] });
}
function n6(e) {
    let { invite: t, error: n, handleAccept: i, handleDefaultTransition: s } = e;
    return (0, l.jsx)(x.Ay, {
        children: (0, l.jsxs)(ed.B, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, l.jsx)(nJ.A, { invite: t, error: n?.message }),
                n?.code === b.t02.INVALID_CANNOT_FRIEND_SELF
                    ? (0, l.jsx)(n0, { invite: t, message: O.intl.string(O.t.fIv16B), onClick: s })
                    : (0, l.jsx)(n0, { invite: t, message: O.intl.string(O.t.ohMvm1), onClick: i }),
            ],
        }),
    });
}
function n7(e) {
    let { banned: t, handleDefaultTransition: n } = e;
    return (0, l.jsxs)(x.Ay, {
        children: [
            (0, l.jsx)(x.hE, { className: v()(L.Ot, L.QB), children: O.intl.string(O.t.kux01N) }),
            (0, l.jsx)(x.tK, { children: t ? O.intl.string(O.t["5AkWAd"]) : O.intl.string(O.t["+qUJAj"]) }),
            (0, l.jsx)(n0, { message: O.intl.string(O.t.fIv16B), onClick: n }),
            (0, l.jsx)("div", {
                className: L.Ot,
                style: { textAlign: "left" },
                children: (0, l.jsx)(z.Q, {
                    size: "sm",
                    textVariant: "text-sm/medium",
                    text: O.intl.string(O.t.urIwn4),
                    onClick: () => window.open(tW.A.getArticleURL(b.MVz.INVALID_INVITES), "_blank"),
                }),
            }),
        ],
    });
}
function n5(e) {
    let { handleDefaultTransition: t } = e;
    return (0, l.jsxs)(x.Ay, {
        children: [
            (0, l.jsx)(x.hE, { children: O.intl.string(O.t.fOc4gn) }),
            (0, l.jsx)(n0, { message: O.intl.string(O.t.fIv16B), onClick: t }),
        ],
    });
}
var n8 = n(459893);
let n4 = (0, n(600975).C)({
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
var n9 = n(163050);
u.Ay.initialize();
var ie = n(701273);
function it(e) {
    n.g.location.assign(e);
}
u.Ay.initialize(), n(426620), u.Ay.initialize();
let ii = (0, nn.A)(nE.A),
    is = (0, nn.A)(n8.A),
    il = (0, nn.A)(function (e) {
        let { inviteKey: t, location: n, transitionTo: i, login: s } = e,
            a = (0, u.bG)([eF.A], () => eF.A.getInvite(t)),
            o = (0, u.bG)([np.A], () => np.A.getState(t)),
            d = (0, u.bG)([eT.default], () => eT.default.isAuthenticated()),
            c = (0, u.bG)([K.A], () => K.A.defaultRoute),
            h = (0, u.bG)([nK.A], () => nK.A.isUnderageAnonymous()),
            [p, g] = r.useState(null),
            [x, E] = r.useState(!1);
        r.useLayoutEffect(() => {
            (o === b.fAW.OPEN || a?.state === b.elq.APP_OPENED) && E(!0);
        }, [a?.state, o]);
        let I = s ? nZ : n$,
            v = r.useCallback((e) => m.Ay.getInviteContext(e, a), [a]),
            j = r.useCallback(
                (e) => {
                    null != a &&
                        (null != a.channel || e?.channel != null) &&
                        (a.guild?.id != null
                            ? i(b.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(a.code))
                            : m.Ay.transitionToInvite(e ?? a, i));
                },
                [a, i],
            ),
            C = r.useCallback(() => {
                g(null),
                    m.Ay.acceptInvite({
                        inviteKey: t,
                        context: v(b.S3d.INVITE),
                        skipOnboarding: !0,
                        callback: (e) => {
                            F(e), null != e.channel && m.Ay.openApp(t, e.channel.id);
                        },
                    }).catch((e) => {
                        if (e instanceof nW.Wl || e instanceof nW.LG) {
                            let t = (0, nq.s)(e.code);
                            g({ code: e.code, message: t });
                        } else g({ code: e.code, message: O.intl.string(O.t.dDZRdy) });
                    });
            }, [t, v]),
            N = r.useCallback(() => {
                i(c);
            }, [c, i]);
        if (
            ((0, nH.Ay)(() => {
                let e = eT.default.getAnalyticsToken();
                if (
                    (null != e &&
                        _.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eT.default.getId() }),
                    eS.default.track(b.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }),
                    (0, A.d)("invite"),
                    nG.VP || ey.A.launch("discord://" + b.BVt.INVITE(t), () => void 0),
                    !s && h)
                ) {
                    let { baseCode: e } = (0, eb.y$)(t);
                    (0, f.bG)(b.BVt.INVITE_LOGIN(e));
                }
            }),
            r.useEffect(() => {
                a?.state === b.elq.APP_NOT_OPENED && j();
            }, [a?.state, j]),
            (function (e) {
                let {
                        invite: t,
                        inviteKey: n,
                        authenticated: i,
                        nativeAppState: s,
                        mode: l,
                        getAcceptInviteContext: a,
                        handleContinue: o,
                        transitionTo: d,
                    } = e,
                    c = (0, nz.A)(i),
                    u = (0, nz.A)(s);
                r.useEffect(() => {
                    if (l === nZ && i && !1 === c) {
                        let e = eT.default.getFingerprint();
                        if (null != e) {
                            let i = (0, eN.d)(e);
                            eS.default.track(b.HAw.INVITE_LOGIN_SUCCESSFUL, {
                                invite_code: (0, eb.m0)(n),
                                guild_id: t?.guild?.id,
                                channel_id: t?.channel?.id,
                                inviter_id: t?.inviter?.id,
                                prev_user_id: i,
                            });
                        }
                        m.Ay.acceptInvite({ inviteKey: n, context: a(b.S3d.INVITE), skipOnboarding: !0, callback: o });
                    }
                }, [i, c, l, a, o, t, n]),
                    r.useEffect(() => {
                        if (null != t && l === n$ && i && !1 === c) {
                            let { channel: e } = t;
                            if (null != e)
                                if (((0, ny.C)(nL.zY.INVITE_UNCLAIMED), null != t.guild)) {
                                    let e = (0, nU.Lt)(t.flags ?? 0, nM.Q.IS_APPLICATION_BYPASS),
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
                                } else m.Ay.transitionToInvite(t, d);
                        }
                    }, [t, i, c, d, l]),
                    r.useEffect(() => {
                        null != t &&
                            s !== u &&
                            s === b.fAW.OPEN &&
                            eS.default.track(b.HAw.INVITE_APP_INVOKED, {
                                invite_code: (0, eb.m0)(n),
                                guild_id: t.guild?.id,
                                channel_id: t.channel?.id,
                                inviter_id: t.inviter?.id,
                                user_is_member: null != t.guild && null != eU.A.getGuild(t.guild.id),
                                size_total: t.approximate_member_count,
                                invite_type: null != t.type ? eq.Xd[t.type] : void 0,
                            });
                    }, [t, s, u, n]);
            })({
                invite: a,
                inviteKey: t,
                authenticated: d,
                nativeAppState: o,
                mode: I,
                getAcceptInviteContext: v,
                handleContinue: j,
                transitionTo: i,
            }),
            null == a)
        )
            return null;
        if (x || o === b.fAW.OPEN || a.state === b.elq.APP_OPENED) return (0, l.jsx)(n2, { invite: a, onContinue: j });
        let { state: T } = a;
        if (T === b.elq.APP_NOT_OPENED) return (0, l.jsx)(n5, { handleDefaultTransition: N });
        if ([b.elq.RESOLVING, b.elq.ACCEPTING, b.elq.APP_OPENING].includes(T)) {
            let e =
                T === b.elq.ACCEPTING ? O.intl.string(O.t["6wsY16"]) : (b.elq.RESOLVING, O.intl.string(O.t["Z+hCVU"]));
            return (0, l.jsx)(n3, { title: e });
        }
        return T === b.elq.EXPIRED
            ? (0, l.jsx)(n7, { banned: !1, handleDefaultTransition: N })
            : T === b.elq.BANNED
              ? (0, l.jsx)(n7, { banned: !0, handleDefaultTransition: N })
              : T === b.elq.ERROR
                ? (0, l.jsx)(n6, { invite: a, error: p, handleAccept: C, handleDefaultTransition: N })
                : T === b.elq.RESOLVED
                  ? d && (0, nU.Lt)(a.flags ?? 0, nM.Q.IS_GUEST_INVITE)
                      ? (m.Ay.openApp(a.code),
                        nF.u.set(nX.B, a.code),
                        (0, l.jsx)(n2, { invite: a, onContinue: () => i(b.BVt.APP) }))
                      : d || !nG.VP
                        ? (0, l.jsx)(n1, { invite: a, handleAccept: C })
                        : I === nZ
                          ? (0, l.jsx)(nE.A, { invite: a, transitionTo: i, location: n })
                          : (0, l.jsx)(nI.A, {
                                invite: a,
                                onLoginStart: () => {
                                    eS.default.track(b.HAw.INVITE_LOGIN, {
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
    ir = (0, nn.A)(function (e) {
        let t = {
            guildTemplate: (0, u.bG)([es.A], () => es.A.getGuildTemplate(e.code)),
            nativeAppState: (0, u.bG)([np.A], () => np.A.getState(e.code)),
            authenticated: (0, u.bG)([eT.default], () => eT.default.isAuthenticated()),
            defaultRoute: (0, u.bG)([K.A], () => K.A.defaultRoute),
        };
        return (0, l.jsx)(nP, { ...e, ...t });
    }),
    ia = (0, nn.A)(nj),
    io = (0, nn.A)(function (e) {
        let { inviteKey: t, transitionTo: n } = e,
            i = (0, u.bG)([eF.A], () => eF.A.getInvite(t));
        return (
            r.useEffect(() => {
                let e = eT.default.getAnalyticsToken();
                null != e &&
                    _.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eT.default.getId() }),
                    (0, A.d)("invite_mobile"),
                    eS.default.track(b.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 });
            }, []),
            (0, l.jsx)(ty, {
                invite: i,
                onAcceptInvite: (e) => {
                    let n, s, l, r;
                    e?.preventDefault(),
                        eS.default.track(b.HAw.INVITE_APP_OPENED, {
                            invite_code: (0, eb.m0)(t),
                            guild_id: i?.guild?.id,
                            channel_id: i?.channel?.id,
                            inviter_id: i?.inviter?.id,
                            invite_type: null != i && i?.type != null ? eq.Xd[i?.type] : void 0,
                            user_is_member: null != i && null != i.guild && null != eU.A.getGuild(i.guild.id),
                            size_total: i?.approximate_member_count,
                        }),
                        (n = null != i && i.state !== b.elq.EXPIRED && i.state !== b.elq.BANNED ? t : void 0),
                        (l = null != (s = eT.default.getFingerprint()) ? s : eT.default.getId()),
                        (r = null != i && i?.type != null ? Number(i?.type) : void 0),
                        m.Ay.openApp(n, void 0, l, void 0, r);
                },
                transitionTo: n,
            })
        );
    }),
    id = (0, nn.A)(nI.A),
    ic = (0, nn.A)(function (e) {
        let { location: t, transitionTo: i = f.pX } = e,
            [s, a] = r.useState("submitting");
        function o() {
            return "Android" === ev().os.family || "iOS" === ev().os.family
                ? null
                : (0, l.jsx)(C.$, {
                      text: O.intl.string(O.t.dKhVQN),
                      fullWidth: !0,
                      onClick: () => i(b.BVt.LOGIN, { source: "authorizeIPAdress" }),
                  });
        }
        return ((0, nH.Ay)(() => {
            (0, A.d)("authorize_ip");
            let e = (0, Q.A)(t);
            null == e
                ? a("failed")
                : (async () => {
                      try {
                          await h.A.authorizeIPAddress(e), a("succeeded");
                      } catch (e) {
                          a("failed");
                      }
                  })();
        }),
        "failed" === s)
            ? (0, l.jsxs)(x.Ay, {
                  children: [
                      (0, l.jsx)("img", { alt: "", src: n(792009), className: L.SX }),
                      (0, l.jsx)(x.hE, { className: L.QB, children: O.intl.string(O.t["f/54az"]) }),
                      (0, l.jsx)(x.tK, { className: L.C2, children: O.intl.string(O.t.i3ehMr) }),
                      o(),
                  ],
              })
            : "succeeded" === s
              ? (0, l.jsxs)(x.Ay, {
                    children: [
                        (0, l.jsx)("img", { alt: "", src: n(841406), className: L.SX }),
                        (0, l.jsx)(x.hE, { className: L.QB, children: O.intl.string(O.t.iG0SlK) }),
                        (0, l.jsx)(x.tK, { className: L.C2, children: O.intl.string(O.t["Elv+qt"]) }),
                        o(),
                    ],
                })
              : (0, l.jsxs)(x.Ay, {
                    children: [(0, l.jsx)(x.CK, {}), (0, l.jsx)(x.hE, { children: O.intl.string(O.t["9exy+V"]) })],
                });
    }),
    iu = (0, nn.A)(function (e) {
        let { location: t } = e,
            [i, s] = r.useState("submitting");
        return (r.useEffect(() => {
            (0, A.d)("authorize_payment");
            let e = (0, Q.A)(t);
            null == e
                ? s("failed")
                : (async () => {
                      try {
                          await h.A.authorizePayment(e), s("succeeded");
                      } catch (e) {
                          s("failed");
                      }
                  })();
        }, [t]),
        "failed" === i)
            ? (0, l.jsxs)(x.Ay, {
                  children: [
                      (0, l.jsx)("img", { alt: "", src: n(678985), className: L.SX }),
                      (0, l.jsx)(x.hE, { className: L.QB, children: O.intl.string(O.t.GHRpue) }),
                      (0, l.jsx)(x.tK, { className: L.C2, children: O.intl.string(O.t["1nO55v"]) }),
                  ],
              })
            : "succeeded" === i
              ? (0, l.jsxs)(x.Ay, {
                    children: [
                        (0, l.jsx)("img", { alt: "", src: n(586430), className: L.SX }),
                        (0, l.jsx)(x.hE, { className: L.QB, children: O.intl.string(O.t.ihHX53) }),
                        (0, l.jsx)(x.tK, { className: L.C2, children: O.intl.string(O.t["pGPCv+"]) }),
                    ],
                })
              : (0, l.jsxs)(x.Ay, {
                    children: [(0, l.jsx)(x.CK, {}), (0, l.jsx)(x.hE, { children: O.intl.string(O.t.T3vC7n) })],
                });
    }),
    i_ = (0, nn.A)(function (e) {
        let { location: t, transitionTo: n = it } = e,
            [i, s] = r.useState("submitting"),
            a = r.useRef(void 0);
        (0, nH.Ay)(() => {
            (0, A.d)("verify_email");
            let e = (0, Q.A)(t);
            null == e
                ? s("failed")
                : (async () => {
                      try {
                          let t = await h.A.verify(e);
                          s("succeeded"), (a.current = t);
                      } catch (e) {
                          s("failed");
                      }
                  })();
        });
        let o = r.useCallback(() => {
                n(b.BVt.LOGIN, { source: "verify_email" });
            }, [n]),
            d = r.useCallback(() => {
                eS.default.track(b.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: a.current }),
                    (0, ie.A)("verify_email");
            }, []);
        return "failed" === i
            ? (0, l.jsx)(eh, {
                  title: O.intl.string(O.t["PCgG3+"]),
                  subtitle: O.intl.string(O.t.tQpeA3),
                  buttonText: O.intl.string(O.t.dKhVQN),
                  onButtonClick: o,
              })
            : "succeeded" === i
              ? (0, l.jsx)(eh, {
                    title: O.intl.string(O.t["dAfGb+"]),
                    buttonText: O.intl.string(O.t["uJWIj/"]),
                    onButtonClick: d,
                    image: (0, l.jsx)(ea, { alt: O.intl.string(O.t["dAfGb+"]) }),
                })
              : (0, l.jsx)(eh, {
                    title: O.intl.string(O.t["0c8+5n"]),
                    subtitle: O.intl.string(O.t.ULTCBE),
                    loading: !0,
                });
    }),
    ih = (0, nn.A)(() => {
        let [e, t] = r.useState(""),
            [i, s] = r.useState(""),
            [a, o] = r.useState(!1),
            [d, c] = r.useState(!1),
            [_, h] = r.useState(null),
            [p, m] = r.useState(null),
            g = (0, u.bG)([ee.A], () => ee.A.getCountryCode()),
            f = g.code.split(" ")[0],
            A = async () => {
                try {
                    await $.A.resendCode(e);
                } catch (e) {
                    m(e.body.message);
                }
            },
            E = async () => {
                o(!0);
                try {
                    let { token: t } = await $.A.verifyPhone(f + e, i);
                    h(null), m(null), c(!0), $.A.validatePhoneForSupport(t);
                } catch (e) {
                    e.body.message ? (h(null), m(e.body.message)) : (h(e.body.phone), m(e.body.code));
                } finally {
                    o(!1);
                }
            },
            I = (0, l.jsxs)(x.Ay, {
                children: [
                    (0, l.jsx)(x._V, { src: n(142041) }),
                    (0, l.jsxs)(x.hE, {
                        className: v()(L.QX, en.Uu, en.wq, en.Hu),
                        children: [
                            O.intl.string(O.t.WWzQta),
                            (0, l.jsx)(J.y, { size: "md", color: "currentColor", className: L.oY }),
                        ],
                    }),
                ],
            });
        return d
            ? I
            : (0, l.jsxs)(x.Ay, {
                  children: [
                      (0, l.jsx)(x.hE, { children: O.intl.string(O.t.o4JNrO) }),
                      (0, l.jsx)(x.tK, { className: L.Ot, children: O.intl.string(O.t.y0tVbq) }),
                      (0, l.jsxs)(x.eB, {
                          className: L.QX,
                          children: [
                              (0, l.jsx)(et.A, {
                                  label: O.intl.string(O.t["eJnn0+"]),
                                  alpha2: g.alpha2,
                                  countryCode: f,
                                  value: e,
                                  autoComplete: "off",
                                  spellCheck: "false",
                                  onChange: t,
                                  forceMode: Z.Pd.PHONE,
                                  error: _,
                              }),
                              (0, l.jsx)(x.pd, {
                                  className: L.QX,
                                  label: O.intl.string(O.t.OdzNbm),
                                  value: i,
                                  onChange: s,
                                  maxLength: 6,
                                  error: p,
                              }),
                              (0, l.jsx)(z.Q, { text: O.intl.string(O.t["5b60gi"]), onClick: A }),
                              (0, l.jsx)("div", {
                                  className: L.QX,
                                  children: (0, l.jsx)(C.$, {
                                      text: O.intl.string(O.t.i4jeWR),
                                      fullWidth: !0,
                                      onClick: E,
                                      loading: a,
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    }),
    ip = (0, nn.A)(n9.A),
    im = (0, nn.A)(n_),
    ig = (0, nn.A)(q),
    ix = (0, nn.A)(function (e) {
        let { location: t } = e,
            [n, i] = r.useState(!1),
            { verifySuccess: s, verifyErrors: a, redirectGuildId: o } = (0, u.bG)([ef], () => ef.getState());
        r.useEffect(() => {
            let e = (0, Q.A)(t);
            eo.A.verify(e), (0, A.d)("verify_hub_email");
        }, [t]);
        let d = () => {
            let e, t;
            (e = (function (e) {
                let t = ev().os?.family;
                if ("Android" === t || "iOS" === t) {
                    let t = eT.default.getFingerprint(),
                        n = (0, eC.I_)();
                    return (
                        eE()(null != e, "generateAppPath: guildId cannot be null"),
                        (0, eC.Ay)((0, ej.jN)(e), { utmSource: "verify_hub_email", fingerprint: t, attemptId: n })
                    );
                }
                return "discord://";
            })(o)),
                null != (t = (0, eC.X7)(e)) &&
                    eS.default.track(b.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, eN.v)(t.fingerprint),
                        attempt_id: t.attemptId,
                        source: t.utmSource,
                    }),
                ey.A.launch(e, (e) => {
                    e || (0, f.bG)(K.A.fallbackRoute);
                }),
                i(!0);
        };
        return n
            ? (0, l.jsx)(eh, {
                  title: O.intl.string(O.t.csrAMJ),
                  subtitle: O.intl.string(O.t["m1+IBn"]),
                  buttonText: O.intl.string(O.t.fIv16B),
                  onButtonClick: () => (0, f.pX)(b.BVt.CHANNEL(o)),
              })
            : s
              ? (0, l.jsx)(eh, {
                    title: O.intl.string(O.t["dAfGb+"]),
                    buttonText: O.intl.string(O.t["uJWIj/"]),
                    onButtonClick: d,
                    image: (0, l.jsx)(ea, { alt: O.intl.string(O.t["dAfGb+"]) }),
                })
              : null != a
                ? (0, l.jsx)(eh, {
                      title: O.intl.string(O.t["PCgG3+"]),
                      subtitle: O.intl.string(O.t.tQpeA3),
                      buttonText: O.intl.string(O.t["uJWIj/"]),
                      onButtonClick: d,
                  })
                : (0, l.jsx)(eh, {
                      title: O.intl.string(O.t["0c8+5n"]),
                      subtitle: O.intl.string(O.t.ULTCBE),
                      loading: !0,
                  });
    }),
    iA = (0, nn.A)(function (e) {
        let { match: t, location: n } = e,
            i = async (e, t) => {
                await (0, ns.W)(tG.XK.CHANNEL, {
                    guildId: e.params.guildId,
                    channelId: e.params.channelId,
                    messageId: e.params.messageId,
                    search: t.search,
                });
            };
        return (0, l.jsx)(na, { match: t, location: n, attemptDeepLink: i });
    }),
    iE = (0, nn.A)(function (e) {
        let { match: t, location: n } = e,
            i = async (e) => {
                await (0, ns.W)(tG.XK.GAME_SHOP, {
                    guildId: e.params.guildId,
                    pageIndex: e.params.pageIndex,
                    skuId: e.params.skuId,
                    slug: e.params.slug,
                });
            };
        return (0, l.jsx)(na, { match: t, location: n, attemptDeepLink: i });
    }),
    iI = (0, nn.A)(function (e) {
        let { match: t, location: n } = e,
            i = async (e, t) => {
                await (0, ns.W)(tG.XK.PICK_GUILD_SETTINGS, {
                    section: e.params.section,
                    subsection: e.params.subsection,
                    search: t.search,
                });
            };
        return (0, l.jsx)(na, { match: t, location: n, attemptDeepLink: i });
    }),
    iv = (0, nn.A)((e) => {
        let { location: t } = e,
            n = (0, u.bG)([eT.default], () => eT.default.isAuthenticated()),
            i = (0, u.bG)([ei.A], () => ei.A.hasLoadedExperiments),
            s = n4.useExperiment({ location: "RSL - Landing Page" }, { autoTrackExposure: !0 }).enabled,
            [a, o] = r.useState(!1),
            [d, c] = r.useState(O.intl.string(O.t["9exy+V"])),
            [_, p] = r.useState(!0),
            m = (e) => {
                switch (e) {
                    case b.t02.INVALID_FORM_BODY:
                    case b.t02.DSA_RSL_REPORT_NOT_FOUND:
                        c(O.intl.string(O.t.bzXDfc));
                        break;
                    case b.t02.DSA_RSL_ALREADY_REQUESTED:
                        c(O.intl.string(O.t.rV00wq));
                        break;
                    case b.t02.DSA_RSL_LIMITED_TIME:
                        c(O.intl.string(O.t["0dI29h"]));
                        break;
                    case b.t02.DSA_RSL_REPORT_INELIGIBLE:
                        c(O.intl.string(O.t["RGa/Gb"]));
                        break;
                    default:
                        c(O.intl.string(O.t["0QLzfv"]));
                }
            };
        return (
            r.useEffect(() => {
                n
                    ? (p(!0),
                      tM
                          .rQ({ withAnalyticsToken: !0 })
                          .then(() => p(!1))
                          .catch(() => p(!1)))
                    : p(!1);
            }, [n]),
            r.useEffect(() => {
                i || s || h.A.getExperiments();
            }, [i, s]),
            r.useEffect(() => {
                let e = async (e) => {
                    try {
                        let t = null != e ? await (0, tF.q)(e) : void 0;
                        null != t ? c(O.intl.string(O.t.e6mZMt)) : m(t.body?.code);
                    } catch (e) {
                        m(e.body?.code);
                    } finally {
                        o(!1);
                    }
                };
                o(!0), e((0, Q.A)(t)), (0, A.d)("report_second_look");
            }, [t]),
            s &&
                !_ &&
                (0, l.jsxs)(x.Ay, {
                    children: [(0, l.jsx)(x.hE, { className: L.QB, children: d }), a && (0, l.jsx)(eu.y, {})],
                })
        );
    }),
    ij = (0, nn.A)(M),
    iC = (0, nn.A)(function (e) {
        let { match: t, location: i } = e,
            s = (0, a.parse)(i.search).token,
            [o, c] = r.useState("loading"),
            u = r.useRef(!1),
            _ = r.useCallback(async (e) => {
                try {
                    eS.default.track(b.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                        await h.A.oneTimeLogin(e),
                        c("login_success"),
                        eS.default.track(b.HAw.LOGIN_SUCCESSFUL, {
                            source: "web_page",
                            login_method: "one_time_login",
                        }),
                        n.g.location.assign(b.BVt.APP);
                } catch (t) {
                    let e = t instanceof Error ? t.message : "Unknown error";
                    eS.default.track(b.HAw.ONE_TIME_LOGIN_ERROR, {
                        source: "web_page",
                        error_reason: "api_error",
                        error_message: e,
                    }),
                        c("error");
                }
            }, []),
            p = r.useCallback((e) => {
                let t = eT.default.getFingerprint() ?? eT.default.getId(),
                    n = `discord://login/one-time?token=${encodeURIComponent(e)}`;
                ey.A.launch(n, (e) => {
                    e
                        ? (eS.default.track(b.HAw.DEEP_LINK_CLICKED, {
                              source: "web_page",
                              destination: "discord://login/one-time",
                              deep_link_provider: "protocol",
                              fingerprint: t,
                          }),
                          c("app_launched"))
                        : c("app_launch_not_supported");
                });
            }, []),
            m = r.useCallback(
                (e) => {
                    let t = eT.default.getFingerprint() ?? eT.default.getId(),
                        i = eT.default.getInstallationForTracking();
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((n) => {
                            let { default: s } = n;
                            s.request(b.e$_.DEEP_LINK, {
                                type: tG.XK.ONE_TIME_LOGIN,
                                params: { token: e, fingerprint: t, installationId: i },
                            })
                                .then((n) => {
                                    n
                                        ? (eS.default.track(b.HAw.DEEP_LINK_CLICKED, {
                                              source: "web_page",
                                              destination: "one_time_login_modal",
                                              deep_link_provider: "rpc",
                                              fingerprint: t,
                                          }),
                                          c("app_launched"))
                                        : p(e);
                                })
                                .catch(() => {
                                    p(e);
                                })
                                .then(() => s.disconnect());
                        });
                },
                [p],
            );
        if (
            (r.useEffect(() => {
                let e = null != s && "string" == typeof s,
                    t = d.Fr ? "mobile" : d.v1 ? "tablet" : (0, tb.isDesktop)() ? "desktop_app" : "web";
                if ((eS.default.track(b.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: e, device_type: t }), !e))
                    return void c("error");
                if (d.Fr || d.v1) {
                    let e = eS.default.getSuperProperties()?.os;
                    eS.default.track(b.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_ui_shown",
                        device_type: t,
                        platform: e,
                    });
                    return;
                }
                (0, tb.isDesktop)() ? _(s) : u.current || ((u.current = !0), c("rpc_attempting"), m(s));
            }, [s, i, _, m]),
            d.Fr || d.v1)
        ) {
            let e = null == s || "string" != typeof s ? "missing_token" : "invalid_token";
            return (0, l.jsx)(tD, { token: s, hasError: "error" === o, errorReason: e });
        }
        if ((0, f.MX)()) return null;
        if ("app_launched" === o)
            return (0, l.jsx)(tk, {
                title: O.intl.string(O.t.RvUUOy),
                subtitle: O.intl.string(O.t["5/lR0g"]),
                buttonText: O.intl.string(O.t["2ixEBi"]),
                buttonOnClick: () => {
                    eS.default.track(b.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: o }), _(s);
                },
            });
        if ("app_launch_not_supported" === o)
            return (0, l.jsx)(tk, {
                title: O.intl.string(O.t.qq4tjT),
                subtitle: O.intl.string(O.t.CVxYRo),
                buttonText: O.intl.string(O.t["2ixEBi"]),
                buttonOnClick: () => _(s),
            });
        if ("error" === o) {
            let e = null == s || "string" != typeof s ? "missing_token" : "invalid_token";
            return (0, l.jsx)(tk, {
                title: O.intl.string(O.t.RtCSr1),
                subtitle: O.intl.string(O.t["S+YjYJ"]),
                buttonText: O.intl.string(O.t.j3cG2p),
                buttonOnClick: () => {
                    eS.default.track(b.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                        (0, f.pX)(b.BVt.LOGIN);
                },
            });
        }
        return (0, l.jsx)(x.Ay, { children: (0, l.jsx)(x.CK, {}) });
    });
class iN extends r.PureComponent {
    state = { splash: null, redirectTo: null, backgroundId: null };
    static getDerivedStateFromProps(e, t) {
        let { invite: n, location: i } = e,
            { backgroundId: s } = t,
            l = (0, a.parse)(i.search).redirect_to ?? null;
        (null == l || "" === l || l.startsWith(b.BVt.ME) || (!(0, c.e)(l) && !(0, W.RZ)(l))) && (l = null);
        let r = null;
        if (null == n) r = (0, t9.u8)(l);
        else if (n?.state === b.elq.RESOLVED) {
            let { guild: e, target_application: t } = n;
            null != t
                ? null != s && (r = (0, t4.uD)(t.id, s, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (r = eW.Ay.getGuildSplashURL({ id: e.id, splash: e.splash }));
        }
        return { redirectTo: l, splash: r };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        null != e &&
            (!t && n && h.A.getExperiments(!0),
            eS.default.track(
                b.HAw.INVITE_OPENED,
                { invite_code: (0, eb.m0)(e), load_time: nt.getTimeSinceNavigationStart() },
                { flush: !0 },
            )),
            t && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            g.A.initialize(),
            (0, A.D)();
    }
    componentDidUpdate(e) {
        !e.hasLoadedExperiments && this.props.hasLoadedExperiments && this.resolveInvite(),
            e.invite?.state !== this.props.invite?.state && this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        g.A.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if (e?.state === b.elq.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, t4.RG)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await m.Ay.resolveInvite(e, b.S3d.INVITE);
        null != t && (F(t), null != t.type && eq.uR.has(t.type) && m.Ay.openNativeAppModal(e));
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (eS.default.track(
                b.HAw.GUILD_TEMPLATE_OPENED,
                { guild_template_code: e, load_time: nt.getTimeSinceNavigationStart() },
                { flush: !0 },
            ),
            el.A.resolveGuildTemplate(e),
            el.A.openNativeAppModal(e));
    }
    resolveGiftCode() {
        let { giftCode: e } = this.props;
        null != e &&
            p.A.resolveGiftCode(e, !0, !0).then((t) => {
                null != t && null == t.giftCode.promotion && _.h.wait(() => p.A.openNativeGiftCodeModal(e));
            });
    }
    render() {
        let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
        return (0, l.jsxs)(ni.A, {
            splash: e,
            children: [
                (0, l.jsx)(U.A, { path: b.BVt.LOGIN_HANDOFF, render: (e) => (0, l.jsx)(is, { ...e, redirectTo: t }) }),
                (0, l.jsx)(U.A, { path: b.BVt.LOGIN_ONE_TIME, render: (e) => (0, l.jsx)(iC, { ...e }) }),
                (0, l.jsx)(U.A, {
                    impressionName: o.ImpressionNames.USER_LOGIN,
                    path: b.BVt.LOGIN,
                    render: (e) => (0, l.jsx)(ii, { ...e, redirectTo: t }),
                }),
                (0, l.jsx)(U.A, {
                    impressionName: o.ImpressionNames.USER_REGISTRATION,
                    path: b.BVt.REGISTER,
                    render: (e) => (0, l.jsx)(id, { ...e, redirectTo: t }),
                }),
                (0, l.jsx)(U.A, {
                    path: b.BVt.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, l.jsx)(ia, { login: !0, ...e }),
                }),
                (0, l.jsx)(U.A, { path: b.BVt.GIFT_CODE(":giftCode"), render: (e) => (0, l.jsx)(ia, { ...e }) }),
                (0, l.jsx)(U.A, {
                    path: [b.BVt.INVITE_LOGIN(":inviteCode"), b.BVt.INVITE(":inviteCode")],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n,
                                },
                                location: i,
                                transitionTo: s,
                            } = e,
                            r = (0, eb.fB)(t, i.search);
                        return d.Fr || d.v1
                            ? (0, l.jsx)(io, { inviteKey: r, transitionTo: s }, r)
                            : (0, l.jsx)(
                                  il,
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
                (0, l.jsx)(U.A, {
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
                            transitionTo: s,
                        } = e;
                        return d.Fr || d.v1
                            ? (0, l.jsx)(nw, { code: t }, t)
                            : (0, l.jsx)(ir, {
                                  code: t,
                                  location: i,
                                  transitionTo: s,
                                  login: n === b.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, l.jsx)(U.A, { path: b.BVt.VERIFY, render: (e) => (0, l.jsx)(i_, { ...e }) }),
                (0, l.jsx)(U.A, { path: b.BVt.VERIFY_HUB_EMAIL, render: (e) => (0, l.jsx)(ix, { ...e }) }),
                (0, l.jsx)(U.A, { path: b.BVt.VERIFY_REQUEST, render: (e) => (0, l.jsx)(ih, { ...e }) }),
                (0, l.jsx)(U.A, { path: b.BVt.DISABLE_EMAIL_NOTIFICATIONS, render: (e) => (0, l.jsx)(im, { ...e }) }),
                (0, l.jsx)(U.A, {
                    path: b.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, l.jsx)(ig, { ...e }),
                }),
                (0, l.jsx)(U.A, { path: b.BVt.AUTHORIZE_IP, render: (e) => (0, l.jsx)(ic, { ...e }) }),
                (0, l.jsx)(U.A, {
                    path: b.BVt.REJECT_IP,
                    render: (e) => (0, l.jsx)(ip, { source: b.BVt.REJECT_IP, ...e }),
                }),
                (0, l.jsx)(U.A, {
                    path: b.BVt.REJECT_MFA,
                    render: (e) => (0, l.jsx)(ip, { source: b.BVt.REJECT_MFA, ...e }),
                }),
                (0, l.jsx)(U.A, { path: b.BVt.AUTHORIZE_PAYMENT, render: (e) => (0, l.jsx)(iu, { ...e }) }),
                (0, l.jsx)(U.A, { path: b.BVt.RESET, render: (e) => (0, l.jsx)(ip, { source: b.BVt.RESET, ...e }) }),
                (0, l.jsx)(U.A, {
                    path: b.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, l.jsx)(iI, { ...e }),
                }),
                (0, l.jsx)(U.A, {
                    path: b.BVt.CHANNELS_GAME_SHOP(tP.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, l.jsx)(iE, { ...e }),
                }),
                (0, l.jsx)(U.A, {
                    path: b.BVt.CHANNEL(tP.pv.guildId(), tP.pv.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, l.jsx)(iA, { ...e }),
                }),
                (0, l.jsx)(U.A, { path: b.BVt.REPORT, render: () => (0, l.jsx)(t5, {}) }),
                (0, l.jsx)(U.A, { path: b.BVt.REPORT_SECOND_LOOK, render: (e) => (0, l.jsx)(iv, { ...e }) }),
                (0, l.jsx)(U.A, { path: b.BVt.ACCOUNT_REVERT(":token"), render: (e) => (0, l.jsx)(ij, { ...e }) }),
            ],
        });
    }
}
let iT = u.Ay.connectStores([eT.default, eF.A, t8.A, ei.A, es.A], (e) => {
    let { match: t, location: n } = e,
        i = t?.params?.inviteCode,
        s = null != i ? (0, eb.fB)(i, n.search) : void 0,
        l = t?.params?.giftCode,
        r = t?.params?.guildTemplateCode;
    return {
        inviteKey: s,
        isAuthenticated: eT.default.isAuthenticated(),
        giftCode: l,
        guildTemplateCode: r,
        gift: null != l ? t8.A.get(l) : null,
        invite: null != s ? eF.A.getInvite(s) : null,
        guildTemplate: null != r ? es.A.getGuildTemplate(r) : null,
        hasLoadedExperiments: ei.A.hasLoadedExperiments,
    };
})(iN);
