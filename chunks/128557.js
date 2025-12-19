n.d(t, {
    Z: () => M,
    i: () => w,
}),
    n(388685),
    n(539854);
var i = n(54381),
    r = n(473749),
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
    y = n(314897),
    C = n(430824),
    v = n(594174),
    x = n(259580),
    O = n(585483),
    E = n(63063),
    j = n(358085),
    S = n(709054),
    _ = n(967128),
    P = n(981631),
    I = n(231873),
    Z = n(388032),
    T = n(91023);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
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
        [d, f] = r.useState(!1),
        h = (0, p.Z)(s);
    return (
        r.useEffect(() => {
            null != h && s !== h && (f(!0), setTimeout(() => f(!1), 1000));
        }, [s, h]),
        (0, i.jsxs)(u.P3F, {
            className: a()(t, T.card, { [T.completed]: s }),
            onClick: c,
            children: [
                null != l
                    ? l
                    : (0, i.jsx)("img", {
                          className: T.icon,
                          src: n,
                          alt: "",
                      }),
                (0, i.jsx)(u.Text, {
                    color: "text-strong",
                    className: a()(T.cardTextContainer, T.cardHeader),
                    variant: "text-sm/normal",
                    children: o,
                }),
                s
                    ? (0, i.jsx)(u.dz2, {
                          size: "md",
                          color: "currentColor",
                          className: a()(T.checkmark, { [T.animate]: d }),
                      })
                    : (0, i.jsx)(x.Z, {
                          className: T.arrow,
                          direction: x.Z.Directions.RIGHT,
                      }),
            ],
        })
    );
}
function M(e) {
    let { channel: t } = e,
        l = (0, s.e7)([C.Z], () => (null != t ? C.Z.getGuild(t.getGuildId()) : null), [t]),
        p = null != l && S.default.extractTimestamp(l.id) < Date.now() - P._8R,
        x = (0, s.e7)([y.default], () => (null == l ? void 0 : l.ownerId) === y.default.getId(), [l]),
        { canInvite: M, canManageGuild: R, canMessage: D } = (0, h.TE)(t, l),
        k = (0, s.e7)([v.default], () => {
            var e, t;
            return (
                (null == (e = v.default.getCurrentUser()) ? void 0 : e.desktop) === !0 ||
                (null == (t = v.default.getCurrentUser()) ? void 0 : t.mobile) === !0
            );
        }),
        { guildPopulated: L, guildMessaged: U, guildPersonalized: V } = (0, h.h_)(l),
        {
            handleInvite: H,
            handleMessage: F,
            handlePersonalize: B,
            handleDownload: G,
            handleAddApplication: W,
        } = (function (e) {
            let t = r.useCallback(() => {
                    f.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: I.Ft.CHANNEL_WELCOME,
                        action: I.j7.INVITE,
                    }),
                        null != e &&
                            (0, u.ZDy)(async () => {
                                let { default: t } = await Promise.all([n.e("49049"), n.e("7654"), n.e("97016")]).then(
                                    n.bind(n, 560114),
                                );
                                return (n) =>
                                    (0, i.jsx)(
                                        t,
                                        A(N({}, n), {
                                            guild: e,
                                            source: P.t4x.CHANNEL_WELCOME,
                                            analyticsLocation: { section: P.jXE.CHANNEL_WELCOME_CTA },
                                        }),
                                    );
                            });
                }, [e]),
                l = r.useCallback(() => {
                    f.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: I.Ft.CHANNEL_WELCOME,
                        action: I.j7.SEND_MESSAGE,
                    }),
                        O.S.dispatch(P.CkL.TEXTAREA_FOCUS, {
                            highlight: !0,
                            channelId: P.lds,
                        });
                }, []),
                a = r.useCallback(() => {
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
                handleDownload: r.useCallback(() => {
                    f.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: I.Ft.CHANNEL_WELCOME,
                        action: I.j7.DOWNLOAD,
                    }),
                        (0, u.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e("32996"), n.e("74023")]).then(
                                n.bind(n, 431583),
                            );
                            return (t) => (0, i.jsx)(e, N({ source: P.jXE.CHANNEL_WELCOME_CTA }, t));
                        });
                }, []),
                handleAddApplication: r.useCallback(() => {
                    null != e &&
                        (f.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
                            setup_type: I.Ft.CHANNEL_WELCOME,
                            action: I.j7.ADD_APP,
                        }),
                        (0, u.ZDy)(async () => {
                            let { default: t } = await n.e("77046").then(n.bind(n, 272509));
                            return (n) => {
                                var r;
                                return (0, i.jsx)(
                                    t,
                                    A(N({ guildId: null != (r = e.id) ? r : "" }, n), {
                                        analyticsType: c.z.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL,
                                    }),
                                );
                            };
                        }));
                }, [e]),
            };
        })(l),
        z = !(k || L || U || V),
        { titleAnimatedStyle: q, opacities: K } = (function (e) {
            let t = (0, d.Z)(() => new o.Z.Value(0)),
                n = (0, d.Z)(() => new o.Z.Value(0)),
                i = (0, d.Z)(() => [new o.Z.Value(0), new o.Z.Value(0), new o.Z.Value(0), new o.Z.Value(0)]);
            return (
                r.useEffect(() => {
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
                            o.Z.timing(i[0], {
                                toValue: 1,
                                duration: 300,
                            }),
                            o.Z.timing(i[1], {
                                toValue: 1,
                                duration: 300,
                            }),
                            o.Z.timing(i[2], {
                                toValue: 1,
                                duration: 300,
                            }),
                            o.Z.timing(i[3], {
                                toValue: 1,
                                duration: 300,
                            }),
                        ]),
                    ]).start();
                }, [n, t, i]),
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
                    opacities: i,
                }
            );
        })(z),
        [Y, X] = r.useState([]),
        J = Y.length > 0;
    if (
        (r.useEffect(() => {
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
                (0, i.jsx)(
                    o.Z.div,
                    {
                        className: T.cardWrapper,
                        style: z ? { opacity: K[Q.length] } : {},
                        children: (0, i.jsx)(w, {
                            iconUrl: u.YvY,
                            header: Z.intl.string(Z.t.q9n0Ta),
                            completed: L,
                            onClick: H,
                        }),
                    },
                    "invite",
                ),
            ),
        R &&
            Q.push(
                (0, i.jsx)(
                    o.Z.div,
                    {
                        className: T.cardWrapper,
                        style: z ? { opacity: K[Q.length] } : {},
                        children: (0, i.jsx)(w, {
                            iconUrl: u.$_T,
                            header: Z.intl.string(Z.t.c5kxPh),
                            completed: V,
                            onClick: B,
                        }),
                    },
                    "customize",
                ),
            ),
        D &&
            Q.push(
                (0, i.jsx)(
                    o.Z.div,
                    {
                        className: T.cardWrapper,
                        style: z ? { opacity: K[Q.length] } : {},
                        children: (0, i.jsx)(w, {
                            iconUrl: u.qMX,
                            header: Z.intl.string(Z.t["SoP7+l"]),
                            completed: U,
                            onClick: F,
                        }),
                    },
                    "message",
                ),
            ),
        (0, j.isWeb)() &&
            Q.push(
                (0, i.jsx)(
                    o.Z.div,
                    {
                        className: T.cardWrapper,
                        style: z ? { opacity: K[Q.length] } : {},
                        children: (0, i.jsx)(w, {
                            iconUrl: u.yIb,
                            header: Z.intl.string(Z.t.pGVNI9),
                            completed: k,
                            onClick: G,
                        }),
                    },
                    "download",
                ),
            ),
        Q.push(
            (0, i.jsx)(
                o.Z.div,
                {
                    className: T.cardWrapper,
                    style: z ? { opacity: K[Q.length] } : {},
                    children: (0, i.jsx)(w, {
                        iconUrl: u.Tg$,
                        header: Z.intl.string(Z.t.IhHDEO),
                        completed: J,
                        onClick: W,
                    }),
                },
                "addapp",
            ),
        ));
    let $ = x ? Z.intl.string(Z.t["1ach9C"]) : Z.intl.string(Z.t["ezm+/j"]);
    p && ($ = Z.intl.string(Z.t["gwyU/J"]));
    let ee = "".concat(
        E.Z.getArticleURL(P.BhN.GUILD_GETTING_STARTED),
        "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm",
    );
    return (0, i.jsx)(_.ZP, {
        channelId: t.id,
        children: (0, i.jsx)("div", {
            className: T.container,
            children: (0, i.jsxs)("div", {
                className: T.inner,
                children: [
                    (0, i.jsxs)(o.Z.div, {
                        style: q,
                        children: [
                            (0, i.jsx)(u.Heading, {
                                className: T.titleName,
                                variant: "heading-xxl/medium",
                                children: Z.intl.format(Z.t.rkHVKf, { guildName: l.name }),
                            }),
                            (0, i.jsxs)(u.Text, {
                                color: "text-default",
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
