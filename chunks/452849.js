(l.r(n), l.d(n, { default: () => eL }));
var s = l(477900),
    i = l(582128),
    a = l(855986),
    t = l(778858),
    d = l(456412),
    c = l(205375),
    r = l(343446),
    o = l(473529),
    u = l(503698),
    h = l.n(u),
    m = l(164636),
    g = l(855473),
    x = l(140735),
    A = l(312138),
    j = l(516521),
    f = l(707554),
    I = l(241524),
    N = l(149468),
    b = l(462887),
    v = l(104510),
    C = l(750943),
    p = l(821609),
    E = l(192308),
    y = l(534514),
    _ = l(664343),
    G = l(736653),
    D = l(682163),
    M = l(554783),
    w = l(961973),
    S = l(727419),
    H = l(855687),
    R = l(576705),
    L = l(486020),
    V = l(652215),
    k = l(792996),
    T = l(599307);
function B(e) {
    let { guild: n } = e,
        {
            variant: l,
            icon: i,
            text: a,
        } = n.features.has(V.GuildFeatures.BANNER)
            ? { variant: "overlay-secondary", icon: C.ImagePlusIcon, text: k.intl.string(k.t.b0y3DL) }
            : { variant: "expressive", icon: v.BoostGemIcon, text: k.intl.string(k.t["+7XY31"]) };
    return (0, s.jsx)("div", {
        className: T.SY,
        children: (0, s.jsx)(p.$, {
            variant: l,
            icon: i,
            text: a,
            onClick: function () {
                S.A.open(n.id, V.BEX.ONBOARDING, void 0, V.nd0.SERVER_GUIDE);
            },
        }),
    });
}
let U = i.memo(function (e) {
    let n,
        { guild: t, titleClassName: d } = e,
        { homeHeaderImage: c, isHomeHeaderImageSet: r } = {
            homeHeaderImage: (n = i.useMemo(
                () => (null == t ? null : L.Ay.getGuildHomeHeaderURL({ id: t.id, homeHeader: t.homeHeader })),
                [t],
            )),
            isHomeHeaderImageSet: null != n,
            homeHeaderScroll: 200 * (null != n),
        },
        o = (0, w.A2)(t.id),
        u = (0, a.bG)([R.A], () => (0, H.K)(R.A, t)),
        m = (0, G.Ay)(),
        g = (0, b.M)(m) ? "/assets/36eaea47ad7cb391.svg" : "/assets/3655f5d8659277b4.svg";
    return (0, s.jsxs)("div", {
        className: T.wx,
        children: [
            (0, s.jsxs)("div", {
                className: T.w5,
                children: [
                    (0, s.jsx)("div", {
                        className: h()(T.NC, { [T.KN]: !r }),
                        style: { backgroundImage: `url(${r ? c : g})` },
                    }),
                    o && (0, s.jsx)(B, { guild: t }),
                ],
            }),
            (0, s.jsx)("div", {
                className: T.oB,
                children: (0, s.jsxs)("div", {
                    className: d,
                    children: [
                        (0, s.jsx)(D.Ay, { className: T.nr, guild: t, size: D.Ay.Sizes.XLARGE, active: !0 }),
                        (0, s.jsxs)("div", {
                            className: T.Bv,
                            children: [
                                (0, s.jsx)(y.D, { className: T.Bv, variant: "heading-xxl/semibold", children: t.name }),
                                (0, s.jsx)(M.A, {
                                    size: 24,
                                    guild: t,
                                    tooltipPosition: "bottom",
                                    tooltipColor: _.ST.Colors.PRIMARY,
                                }),
                                u &&
                                    (0, s.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: T.ak,
                                        children: (0, s.jsx)(p.$, {
                                            variant: "secondary",
                                            text: k.intl.string(k.t.VINpSK),
                                            onClick: function () {
                                                return (0, E.mM)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        l.e(683621),
                                                        l.e(711162),
                                                        l.e(159957),
                                                        l.e(728136),
                                                        l.e(680029),
                                                        l.e(966623),
                                                    ]).then(l.bind(l, 660194));
                                                    return (n) =>
                                                        (0, s.jsx)(e, { ...n, guild: t, source: V.PE1.GUILD_HOME });
                                                });
                                            },
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
});
var O = l(742589),
    z = l(138298),
    K = l(799704),
    P = l(129230),
    $ = l(225142),
    F = l(701785),
    W = l(65995),
    Y = l(978165),
    Q = l(812771),
    X = l(108926),
    J = l(746080);
function Z(e) {
    let { pageWidth: n, onSidebarResize: l } = e,
        i = (0, a.bG)([K.Ay], () => K.Ay.getSidebarState(J.VV.GUILD_HOME));
    return null == i || null == i.channelId
        ? null
        : (0, s.jsx)(Q.A, {
              sidebarType: Q.X.HomeSidebar,
              maxWidth: n - 240 - 656,
              onWidthChange: l,
              children: (0, s.jsx)(X.A, {
                  channelId: i.channelId,
                  baseChannelId: J.VV.GUILD_HOME,
                  channelViewSource: "Home View",
                  isResourceChannelView: !0,
              }),
          });
}
var q = l(261958),
    ee = l(939249),
    en = l(834730),
    el = l(993077),
    es = l(138399),
    ei = l(256265),
    ea = l(90084),
    et = l(42780),
    ed = l(734057),
    ec = l(596344);
function er(e) {
    return (0, m.yK)([F.h, ed.A], () => F.h.getResourceChannels(e).filter((e) => null != ed.A.getChannel(e.channelId)));
}
var eo = l(526031);
let eu = i.memo(function (e) {
    let { guild: n } = e,
        { guildProfile: l, fetchGuildProfile: a } = (0, ea.u)(n.id);
    return (i.useEffect(() => {
        a();
    }, [a]),
    null == l)
        ? null
        : (0, s.jsx)(et.Ay, { profile: l, disableCTA: !0, disableGuildNameClick: !0 });
});
function eh(e) {
    let n,
        { channelId: l, title: a, icon: t } = e,
        d = (0, m.bG)([ed.A], () => ed.A.getChannel(l)),
        c = (0, m.bG)([ec.A], () => ec.A.getMessages(l)),
        r = (0, m.bG)([R.A], () => R.A.can(V.xBc.VIEW_CHANNEL, d)),
        o = c.first(),
        u = (0, ei.yC)(o, !1),
        h = u?.length > 0 ? u[0] : null,
        g = null != d && null == o && !c.loadingMore && !c.ready && !c.hasFetched && r;
    return (
        i.useEffect(() => {
            g && es.A.fetchMessages({ channelId: l, after: l, limit: 5 });
        }, [l, g]),
        (0, s.jsx)(
            ee.D,
            {
                className: eo.Km,
                onClick: (e) => {
                    null != d &&
                        (e.shiftKey
                            ? (0, $.bN)(d.guild_id, d.id)
                            : z.A.openResourceChannelAsSidebar({ guildId: d.guild_id, channelId: d.id }));
                },
                children: (0, s.jsxs)(s.Fragment, {
                    children: [
                        ((n = L.Ay.getResourceChannelIconURL({ channelId: l, icon: t })),
                        null != t && null != n
                            ? (0, s.jsx)("img", { src: n, className: eo.Oz, alt: "", "aria-hidden": !0 })
                            : null != h
                              ? (0, s.jsx)("img", { className: eo.Oz, src: h.src, alt: h.alt })
                              : (0, s.jsx)("div", {
                                    className: eo.jM,
                                    children: (0, s.jsx)(q.PaperIcon, { size: "xs", color: "currentColor" }),
                                })),
                        (0, s.jsx)(en.E, { className: eo.T2, variant: "body-sm/semibold", color: "none", children: a }),
                    ],
                }),
            },
            l,
        )
    );
}
let em = i.memo(function (e) {
        let { guild: n } = e,
            l = er(n.id);
        return 0 === l.length
            ? null
            : (0, s.jsx)(el.Z, {
                  className: eo.u2,
                  children: (0, s.jsxs)("div", {
                      className: eo.Ln,
                      children: [
                          (0, s.jsx)(y.D, {
                              className: eo.cx,
                              variant: "heading-sm/semibold",
                              color: "text-strong",
                              children: k.intl.string(k.t.xwY4La),
                          }),
                          (0, s.jsx)("div", {
                              className: eo.Tb,
                              children: l.map((e) =>
                                  (0, s.jsx)(
                                      eh,
                                      { channelId: e.channelId, title: e.title, icon: e.icon },
                                      `widget-resource-${e.channelId}`,
                                  ),
                              ),
                          }),
                      ],
                  }),
              });
    }),
    eg = i.memo(function (e) {
        let { guild: n, isNewMember: l } = e;
        return (0, s.jsxs)("aside", {
            className: eo.pz,
            children: [(0, s.jsx)(eu, { guild: n }), l && (0, s.jsx)(em, { guild: n })],
        });
    });
var ex = l(283012),
    eA = l(710948),
    ej = l(46054),
    ef = l(273185),
    eI = l(294520),
    eN = l(383055),
    eb = l(976860),
    ev = l(253932),
    eC = l(808728),
    ep = l(531685),
    eE = l(459850),
    ey = l(165648);
function e_(e) {
    let n,
        l,
        { firstMedia: i, channelId: t } = e,
        d = (0, a.bG)([ed.A], () => ed.A.getChannel(t)),
        [c, r] = (0, eI.eJ)({ media: i, channel: d }),
        o = (0, eI.rx)(r),
        u = (0, a.bG)([ep.A], () => ep.A.isFocused()),
        m = (0, ef.ge)(i.src),
        g = ev.kt.useSetting(),
        { src: x, width: A, height: j, alt: f } = i;
    return (
        j > A ? (l = 72) : (n = 72),
        (0, s.jsxs)("div", {
            className: eE.$_,
            children: [
                (0, eN.LL)({
                    src: x,
                    maxHeight: n,
                    maxWidth: l,
                    width: A,
                    height: j,
                    alt: null != f && c && null != o ? o : f,
                    autoPlay: g,
                    animated: m && !c && u,
                    containerClassName: eE.iT,
                    imageClassName: h()({ [eE.cd]: c }),
                    analyticsSource: "ResourceChannelMedia",
                }),
                c && (0, s.jsx)(eA.A, { obscureReason: r, iconClassname: eE.yo }),
            ],
        })
    );
}
function eG(e) {
    let { resource: n } = e,
        l = (0, a.bG)([ed.A], () => ed.A.getChannel(n.channelId)),
        t = (0, a.bG)([ec.A], () => ec.A.getMessages(n.channelId)),
        d = (0, a.bG)([R.A], () => R.A.can(V.xBc.VIEW_CHANNEL, l)),
        c = t.first(),
        r = (function (e) {
            if (null == e) return null;
            if (e.content?.length > 0) return e.content;
            if (e.embeds?.length > 0) {
                for (let n of e.embeds)
                    if (null != n.rawDescription && n.rawDescription.length > 0) return n.rawDescription;
            }
            return null;
        })(c),
        o = (0, ei.yC)(c, !1),
        u = o?.length > 0 ? o[0] : null,
        m = null != l && null == t.first() && !t.loadingMore && !t.ready && !t.hasFetched && d;
    if (
        (i.useEffect(() => {
            m && es.A.fetchMessages({ channelId: n.channelId, after: n.channelId, limit: 5 });
        }, [n.channelId, m]),
        null == l || null == l.guild_id)
    )
        return null;
    let g = L.Ay.getResourceChannelIconURL({ channelId: l.id, icon: n.icon }),
        x = null == n.description || 0 === n.description.length;
    return (0, s.jsxs)(ee.D, {
        className: eE.G9,
        onClick: function (e) {
            null != l &&
                (e.shiftKey
                    ? (0, $.bN)(l.guild_id, l.id)
                    : z.A.openResourceChannelAsSidebar({ guildId: l.guild_id, channelId: l.id }));
        },
        children: [
            (0, s.jsxs)("div", {
                className: eE.Qs,
                children: [
                    (0, s.jsx)(en.E, {
                        className: eE.DD,
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: n.title,
                    }),
                    x &&
                        null != r &&
                        (0, s.jsx)(en.E, {
                            className: eE.BK,
                            variant: "body-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: ej.A.parse(r, !0, { guildId: l.guild_id, channelId: l.id }),
                        }),
                    !x &&
                        (0, s.jsx)(en.E, {
                            className: h()(eE.BK, ey.PT),
                            variant: "body-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: ej.A.parse(n.description, !0, { guildId: l.guild_id, channelId: l.id }),
                        }),
                ],
            }),
            null != n.icon && null != g
                ? (0, s.jsx)("div", {
                      className: eE.$_,
                      children: (0, s.jsx)("img", {
                          src: g,
                          className: eE.__invalid_thumbnail,
                          width: 72,
                          height: 72,
                          alt: "",
                          "aria-hidden": !0,
                      }),
                  })
                : null,
            null == g && null != u ? (0, s.jsx)(e_, { firstMedia: u, channelId: n.channelId }) : null,
        ],
    });
}
function eD(e) {
    let { guild: n, isNewMember: l } = e,
        i = er(n.id);
    return 0 === i.length
        ? l
            ? null
            : (0, s.jsxs)("div", {
                  className: eE.do,
                  children: [
                      (0, s.jsx)(y.D, {
                          variant: "heading-xl/semibold",
                          color: "text-strong",
                          children: k.intl.string(k.t.owvC9U),
                      }),
                      (0, s.jsx)("img", { className: eE.QT, src: "/assets/159a09aadfe4a53d.svg", alt: "" }),
                      (0, s.jsx)("div", {
                          className: eE.nM,
                          children: (0, s.jsx)(p.$, {
                              size: "md",
                              variant: "primary",
                              onClick: function () {
                                  let e = eC.A.getDefaultChannel(n.id);
                                  null != e && (0, eb.pX)(V.BVt.CHANNEL(n.id, e.id));
                              },
                              fullWidth: !0,
                              text: k.intl.string(k.t["3iCBUn"]),
                          }),
                      }),
                  ],
              })
        : (0, s.jsxs)("div", {
              className: eE.kL,
              children: [
                  (0, s.jsx)(y.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: k.intl.string(k.t.xwY4La),
                  }),
                  i.map((e) => (0, s.jsx)(eG, { resource: e }, e.channelId)),
              ],
          });
}
var eM = l(913423),
    ew = l(999900);
let eS = i.memo(function (e) {
    let { guild: n } = e;
    return (0, s.jsxs)(O.A, {
        channelId: J.VV.GUILD_HOME,
        guildId: n.id,
        className: h()(eo.DD, eo.Tp),
        innerClassname: eo.vi,
        children: [
            (0, s.jsx)(O.A.Icon, { icon: g.SignPostIcon, "aria-hidden": !0 }),
            (0, s.jsxs)(O.A.Title, { children: [(0, s.jsx)(x.A, { children: n.name }), k.intl.string(k.t.VbpLyU)] }),
        ],
    });
});
var eH = l(71393);
let eR = (0, d.A)(function (e) {
        let { guild: n, width: l } = e,
            a = (0, m.bG)([K.Ay], () => K.Ay.getSection(J.VV.GUILD_HOME)),
            [d, c] = i.useState(!1),
            [r, o] = i.useState(480),
            u = a === V.YvQ.SIDEBAR_CHAT,
            g = (0, A.R7)(),
            x = (0, m.bG)([F.h], () => F.h.getSettings(n.id)),
            b = x?.welcomeMessage,
            v = (0, Y.A)(n.id),
            C = !v && (x?.resourceChannels?.length ?? 0) === 0,
            p = (0, I.A)("(max-width: 1300px)"),
            E = l - 240 - r,
            y = (u && E < 1020) || p || C;
        return (i.useEffect(() => {
            x === F.A
                ? (0, $.ag)(n.id)
                : null != x &&
                  P.default.track(V.HAw.SERVER_GUIDE_VIEWED, {
                      ...(0, N.H$)(n.id),
                      num_member_actions: x.newMemberActions?.length ?? 0,
                      num_member_actions_completed: Object.keys(W.A.getCompletedActions(n.id) ?? {}).length,
                      num_resource_channels: x.resourceChannels?.length ?? 0,
                  });
        }, [n.id, x]),
        i.useEffect(
            () => () => {
                z.A.closeChannelSidebar(J.VV.GUILD_HOME);
            },
            [],
        ),
        i.useEffect(() => {
            C && x !== F.A && t.A.escapeToDefaultChannel(n.id);
        }, [n.id, C, x]),
        C)
            ? null
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsxs)("div", {
                          className: h()(ew.TE, eo.Tp, { [ew.js]: u, [ew.jl]: u && d }),
                          children: [
                              (0, s.jsx)(eS, { guild: n }),
                              (0, s.jsx)(j.Gt, {
                                  ...g,
                                  children: (0, s.jsx)("div", {
                                      className: h()(eo.$d, { [eo.Mk]: y }),
                                      children: (0, s.jsx)(f.F, {
                                          component: (0, s.jsx)("div", {
                                              className: eo.QI,
                                              children: (0, s.jsx)(U, { guild: n, titleClassName: p ? eo.H2 : void 0 }),
                                          }),
                                          children: (0, s.jsxs)("div", {
                                              className: h()(eo.xr, eo.QI),
                                              children: [
                                                  (0, s.jsxs)("div", {
                                                      className: eo.rb,
                                                      children: [
                                                          v && (0, s.jsx)(eM.A, { guildId: n.id, welcomeMessage: b }),
                                                          v && (0, s.jsx)(ex.A, { guildId: n.id }),
                                                          !v || y ? (0, s.jsx)(eD, { guild: n, isNewMember: v }) : null,
                                                      ],
                                                  }),
                                                  y ? null : (0, s.jsx)(eg, { guild: n, isNewMember: v }),
                                              ],
                                          }),
                                      }),
                                  }),
                              }),
                          ],
                      }),
                      u
                          ? (0, s.jsx)(Z, {
                                pageWidth: l,
                                onSidebarResize: function (e, n) {
                                    (c(n), o(e));
                                },
                            })
                          : null,
                  ],
              });
    }),
    eL = function (e) {
        let { guildId: n } = e,
            l = (0, a.bG)([eH.A], () => eH.A.getGuild(n), [n]),
            d = (0, a.bG)([r.A], () => r.A.hasLoadedExperiments),
            u = (0, o.d)(n);
        return (i.useEffect(() => {
            if (d && !u) return void t.A.escapeToDefaultChannel(n);
        }, [n, d, u]),
        null != l && u)
            ? (0, s.jsx)(eR, { guild: l })
            : (0, s.jsx)(c.A, { channelId: void 0 });
    };
