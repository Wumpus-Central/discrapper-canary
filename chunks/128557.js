n.d(t, {
    Z: () => M,
    i: () => w,
}),
    n(388685),
    n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(748780),
    s = n(442837),
    c = n(704215),
    u = n(481060),
    d = n(211266),
    p = n(699682),
    f = n(367907),
    h = n(644914),
    m = n(434404),
    g = n(330010),
    b = n(978946),
    _ = n(314897),
    y = n(430824),
    C = n(594174),
    v = n(259580),
    O = n(585483),
    x = n(63063),
    E = n(358085),
    j = n(709054),
    S = n(967128),
    P = n(981631),
    I = n(231873),
    Z = n(388032),
    T = n(183334);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    let { className: t, iconUrl: n, icon: l, header: o, completed: s, onClick: c } = e,
        [d, f] = i.useState(!1),
        h = (0, p.Z)(s);
    return (
        i.useEffect(() => {
            null != h && s !== h && (f(!0), setTimeout(() => f(!1), 1000));
        }, [s, h]),
        (0, r.jsxs)(u.P3F, {
            className: a()(t, T.card, { [T.completed]: s }),
            onClick: c,
            children: [
                null != l
                    ? l
                    : (0, r.jsx)("img", {
                          className: T.icon,
                          src: n,
                          alt: "",
                      }),
                (0, r.jsx)(u.Text, {
                    color: "header-primary",
                    className: a()(T.cardTextContainer, T.cardHeader),
                    variant: "text-sm/normal",
                    children: o,
                }),
                s
                    ? (0, r.jsx)(u.dz2, {
                          size: "md",
                          color: "currentColor",
                          className: a()(T.checkmark, { [T.animate]: d }),
                      })
                    : (0, r.jsx)(v.Z, {
                          className: T.arrow,
                          direction: v.Z.Directions.RIGHT,
                      }),
            ],
        })
    );
}
function M(e) {
    let { channel: t } = e,
        l = (0, s.e7)([y.Z], () => (null != t ? y.Z.getGuild(t.getGuildId()) : null), [t]),
        p = null != l && j.default.extractTimestamp(l.id) < Date.now() - P._8R,
        v = (0, s.e7)([_.default], () => (null == l ? void 0 : l.ownerId) === _.default.getId(), [l]),
        { canInvite: M, canManageGuild: R, canMessage: D } = (0, h.TE)(t, l),
        L = (0, s.e7)([C.default], () => {
            var e, t;
            return (
                (null == (e = C.default.getCurrentUser()) ? void 0 : e.desktop) === !0 ||
                (null == (t = C.default.getCurrentUser()) ? void 0 : t.mobile) === !0
            );
        }),
        { guildPopulated: k, guildMessaged: U, guildPersonalized: B } = (0, h.h_)(l),
        {
            handleInvite: F,
            handleMessage: V,
            handlePersonalize: H,
            handleDownload: G,
            handleAddApplication: W,
        } = (function (e) {
            let t = i.useCallback(() => {
                    f.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: I.Ft.CHANNEL_WELCOME,
                        action: I.j7.INVITE,
                    }),
                        null != e &&
                            (0, u.ZDy)(async () => {
                                let { default: t } = await Promise.all([n.e("49049"), n.e("7654"), n.e("68971")]).then(
                                    n.bind(n, 560114),
                                );
                                return (n) =>
                                    (0, r.jsx)(
                                        t,
                                        A(N({}, n), {
                                            guild: e,
                                            source: P.t4x.CHANNEL_WELCOME,
                                            analyticsLocation: { section: P.jXE.CHANNEL_WELCOME_CTA },
                                        }),
                                    );
                            });
                }, [e]),
                l = i.useCallback(() => {
                    f.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: I.Ft.CHANNEL_WELCOME,
                        action: I.j7.SEND_MESSAGE,
                    }),
                        O.S.dispatch(P.CkL.TEXTAREA_FOCUS, {
                            highlight: !0,
                            channelId: P.lds,
                        });
                }, []),
                a = i.useCallback(() => {
                    f.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: I.Ft.CHANNEL_WELCOME,
                        action: I.j7.PERSONALIZE_SERVER,
                    }),
                        null != e && m.Z.open(e.id, (0, b.r)(), { section: P.jXE.CHANNEL_WELCOME_CTA });
                }, [e]);
            return {
                handleInvite: t,
                handleMessage: l,
                handlePersonalize: a,
                handleDownload: i.useCallback(() => {
                    f.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: I.Ft.CHANNEL_WELCOME,
                        action: I.j7.DOWNLOAD,
                    }),
                        (0, u.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e("32996"), n.e("74023")]).then(
                                n.bind(n, 431583),
                            );
                            return (t) => (0, r.jsx)(e, N({ source: P.jXE.CHANNEL_WELCOME_CTA }, t));
                        });
                }, []),
                handleAddApplication: i.useCallback(() => {
                    null != e &&
                        (f.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
                            setup_type: I.Ft.CHANNEL_WELCOME,
                            action: I.j7.ADD_APP,
                        }),
                        (0, u.ZDy)(async () => {
                            let { default: t } = await n.e("77046").then(n.bind(n, 272509));
                            return (n) => {
                                var i;
                                return (0, r.jsx)(
                                    t,
                                    A(N({ guildId: null != (i = e.id) ? i : "" }, n), {
                                        analyticsType: c.z.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL,
                                    }),
                                );
                            };
                        }));
                }, [e]),
            };
        })(l),
        z = !(L || k || U || B),
        { titleAnimatedStyle: q, opacities: Y } = (function (e) {
            let t = (0, d.Z)(() => new o.Z.Value(0)),
                n = (0, d.Z)(() => new o.Z.Value(0)),
                r = (0, d.Z)(() => [new o.Z.Value(0), new o.Z.Value(0), new o.Z.Value(0), new o.Z.Value(0)]);
            return (
                i.useEffect(() => {
                    o.Z.stagger(300, [
                        o.Z.parallel([
                            o.Z.timing(n, {
                                toValue: 1,
                                duration: 450,
                            }),
                            o.Z.timing(t, {
                                toValue: 1,
                                duration: 450,
                            }),
                        ]),
                        o.Z.stagger(100, [
                            o.Z.timing(r[0], {
                                toValue: 1,
                                duration: 300,
                            }),
                            o.Z.timing(r[1], {
                                toValue: 1,
                                duration: 300,
                            }),
                            o.Z.timing(r[2], {
                                toValue: 1,
                                duration: 300,
                            }),
                            o.Z.timing(r[3], {
                                toValue: 1,
                                duration: 300,
                            }),
                        ]),
                    ]).start();
                }, [n, t, r]),
                {
                    titleAnimatedStyle: e
                        ? {
                              transform: [
                                  {
                                      translateY: t.interpolate({
                                          inputRange: [0, 1],
                                          outputRange: ["-20px", "0px"],
                                      }),
                                  },
                              ],
                              opacity: n,
                          }
                        : {},
                    opacities: r,
                }
            );
        })(z),
        [K, X] = i.useState([]),
        J = K.length > 0;
    if (
        (i.useEffect(() => {
            (async () => {
                try {
                    var e;
                    let t = await (0, g.i)(null != (e = null == l ? void 0 : l.id) ? e : P.lds);
                    X(t.map((e) => e.id));
                } catch (e) {}
            })();
        }, [null == l ? void 0 : l.id]),
        null == l)
    )
        return null;
    let Q = [];
    p ||
        (M &&
            Q.push(
                (0, r.jsx)(
                    o.Z.div,
                    {
                        className: T.cardWrapper,
                        style: z ? { opacity: Y[Q.length] } : {},
                        children: (0, r.jsx)(w, {
                            iconUrl: u.YvY,
                            header: Z.intl.string(Z.t.q9n0Ta),
                            completed: k,
                            onClick: F,
                        }),
                    },
                    "invite",
                ),
            ),
        R &&
            Q.push(
                (0, r.jsx)(
                    o.Z.div,
                    {
                        className: T.cardWrapper,
                        style: z ? { opacity: Y[Q.length] } : {},
                        children: (0, r.jsx)(w, {
                            iconUrl: u.$_T,
                            header: Z.intl.string(Z.t.c5kxPh),
                            completed: B,
                            onClick: H,
                        }),
                    },
                    "customize",
                ),
            ),
        D &&
            Q.push(
                (0, r.jsx)(
                    o.Z.div,
                    {
                        className: T.cardWrapper,
                        style: z ? { opacity: Y[Q.length] } : {},
                        children: (0, r.jsx)(w, {
                            iconUrl: u.qMX,
                            header: Z.intl.string(Z.t["SoP7+l"]),
                            completed: U,
                            onClick: V,
                        }),
                    },
                    "message",
                ),
            ),
        (0, E.isWeb)() &&
            Q.push(
                (0, r.jsx)(
                    o.Z.div,
                    {
                        className: T.cardWrapper,
                        style: z ? { opacity: Y[Q.length] } : {},
                        children: (0, r.jsx)(w, {
                            iconUrl: u.yIb,
                            header: Z.intl.string(Z.t.pGVNI9),
                            completed: L,
                            onClick: G,
                        }),
                    },
                    "download",
                ),
            ),
        Q.push(
            (0, r.jsx)(
                o.Z.div,
                {
                    className: T.cardWrapper,
                    style: z ? { opacity: Y[Q.length] } : {},
                    children: (0, r.jsx)(w, {
                        iconUrl: u.Tg$,
                        header: Z.intl.string(Z.t.IhHDEO),
                        completed: J,
                        onClick: W,
                    }),
                },
                "addapp",
            ),
        ));
    let $ = v ? Z.intl.string(Z.t["1ach9C"]) : Z.intl.string(Z.t["ezm+/j"]);
    p && ($ = Z.intl.string(Z.t["gwyU/J"]));
    let ee = "".concat(
        x.Z.getArticleURL(P.BhN.GUILD_GETTING_STARTED),
        "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm",
    );
    return (0, r.jsx)(S.ZP, {
        channelId: t.id,
        children: (0, r.jsx)("div", {
            className: T.container,
            children: (0, r.jsxs)("div", {
                className: T.inner,
                children: [
                    (0, r.jsxs)(o.Z.div, {
                        style: q,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                className: T.titleName,
                                variant: "heading-xxl/medium",
                                children: Z.intl.format(Z.t.rkHVKf, { guildName: l.name }),
                            }),
                            (0, r.jsxs)(u.Text, {
                                color: "header-secondary",
                                className: a()({
                                    [T.subtitle]: !0,
                                    [T.noChildren]: 0 === Q.length,
                                }),
                                variant: "text-sm/normal",
                                children: [$, " ", Q.length > 0 ? Z.intl.format(Z.t.UOtD32, { guideURL: ee }) : null],
                            }),
                        ],
                    }),
                    Q,
                ],
            }),
        }),
    });
}
