l.r(n), l.d(n, { default: () => eL });
var s = l(627968),
    i = l(64700),
    a = l(17928),
    t = l(66834),
    d = l(456412),
    r = l(943712),
    c = l(736056),
    u = l(473529),
    o = l(503698),
    h = l.n(o),
    m = l(702841),
    x = l(855473),
    g = l(140735),
    A = l(312138),
    j = l(689175),
    f = l(707554),
    N = l(241524),
    v = l(95561),
    b = l(104510),
    I = l(750943),
    C = l(821609),
    p = l(192308),
    E = l(297264),
    _ = l(900002),
    y = l(736653),
    G = l(548118),
    D = l(107773),
    M = l(961973),
    R = l(468689),
    w = l(855687),
    H = l(576705),
    L = l(486020),
    S = l(652215),
    V = l(375708),
    k = l(589258);
function T(e) {
    let { guild: n } = e,
        {
            variant: l,
            icon: i,
            text: a,
        } = n.features.has(S.GuildFeatures.BANNER)
            ? { variant: "overlay-secondary", icon: I.X, text: V.intl.string(V.t.b0y3DL) }
            : { variant: "expressive", icon: b._, text: V.intl.string(V.t["+7XY31"]) };
    return (0, s.jsx)("div", {
        className: k.SY,
        children: (0, s.jsx)(C.$, {
            variant: l,
            icon: i,
            text: a,
            onClick: function () {
                R.A.open(n.id, S.BEX.ONBOARDING, void 0, S.nd0.SERVER_GUIDE);
            },
        }),
    });
}
let U = i.memo(function (e) {
    let n,
        { guild: t, titleClassName: d } = e,
        { homeHeaderImage: r, isHomeHeaderImageSet: c } = {
            homeHeaderImage: (n = i.useMemo(
                () => (null == t ? null : L.Ay.getGuildHomeHeaderURL({ id: t.id, homeHeader: t.homeHeader })),
                [t],
            )),
            isHomeHeaderImageSet: null != n,
            homeHeaderScroll: 200 * (null != n),
        },
        u = (0, M.A2)(t.id),
        o = (0, a.bG)([H.A], () => (0, w.K)(H.A, t)),
        m = (0, y.Ay)();
    return (0, s.jsxs)("div", {
        className: k.wx,
        children: [
            (0, s.jsxs)("div", {
                className: k.w5,
                children: [
                    (0, s.jsx)("div", {
                        className: h()(k.NC, { [k.KN]: !c }),
                        style: {
                            backgroundImage: `url(${c ? r : "dark" === m ? "/assets/36eaea47ad7cb391.svg" : "/assets/3655f5d8659277b4.svg"})`,
                        },
                    }),
                    u && (0, s.jsx)(T, { guild: t }),
                ],
            }),
            (0, s.jsx)("div", {
                className: k.oB,
                children: (0, s.jsxs)("div", {
                    className: d,
                    children: [
                        (0, s.jsx)(G.Ay, { className: k.nr, guild: t, size: G.Ay.Sizes.XLARGE, active: !0 }),
                        (0, s.jsxs)("div", {
                            className: k.Bv,
                            children: [
                                (0, s.jsx)(E.D, { className: k.Bv, variant: "heading-xxl/bold", children: t.name }),
                                (0, s.jsx)(D.A, {
                                    size: 24,
                                    guild: t,
                                    tooltipPosition: "bottom",
                                    tooltipColor: _.ST.Colors.PRIMARY,
                                }),
                                o &&
                                    (0, s.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: k.ak,
                                        children: (0, s.jsx)(C.$, {
                                            variant: "secondary",
                                            text: V.intl.string(V.t.VINpSK),
                                            onClick: function () {
                                                return (0, p.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        l.e("92430"),
                                                        l.e("54453"),
                                                        l.e("59957"),
                                                        l.e("28136"),
                                                        l.e("16084"),
                                                        l.e("36624"),
                                                        l.e("22547"),
                                                    ]).then(l.bind(l, 778929));
                                                    return (n) =>
                                                        (0, s.jsx)(e, { ...n, guild: t, source: S.PE1.GUILD_HOME });
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
var B = l(742589),
    O = l(138298),
    z = l(761640),
    K = l(174459),
    $ = l(225142),
    F = l(701785),
    W = l(65995),
    P = l(978165),
    X = l(812771),
    Y = l(274541),
    Q = l(746080);
function Z(e) {
    let { pageWidth: n, onSidebarResize: l } = e,
        i = (0, a.bG)([z.Ay], () => z.Ay.getSidebarState(Q.VV.GUILD_HOME));
    if (null == i || null == i.channelId) return null;
    let t = n - S.MdR - 656;
    return (0, s.jsx)(X.A, {
        sidebarType: X.X.HomeSidebar,
        maxWidth: t,
        onWidthChange: l,
        children: (0, s.jsx)(Y.A, {
            channelId: i.channelId,
            baseChannelId: Q.VV.GUILD_HOME,
            channelViewSource: "Home View",
            isResourceChannelView: !0,
        }),
    });
}
var J = l(261958),
    q = l(939249),
    ee = l(834730),
    en = l(993077),
    el = l(493336),
    es = l(256265),
    ei = l(90084),
    ea = l(42780),
    et = l(734057),
    ed = l(232835);
function er(e) {
    return (0, m.yK)([F.h, et.A], () => F.h.getResourceChannels(e).filter((e) => null != et.A.getChannel(e.channelId)));
}
var ec = l(354476);
let eu = i.memo(function (e) {
    let { guild: n } = e,
        { guildProfile: l, fetchGuildProfile: a } = (0, ei.u)(n.id);
    return (i.useEffect(() => {
        a();
    }, [a]),
    null == l)
        ? null
        : (0, s.jsx)(ea.Ay, { profile: l, disableCTA: !0, disableGuildNameClick: !0 });
});
function eo(e) {
    let n,
        { channelId: l, title: a, icon: t } = e,
        d = (0, m.bG)([et.A], () => et.A.getChannel(l)),
        r = (0, m.bG)([ed.A], () => ed.A.getMessages(l)),
        c = (0, m.bG)([H.A], () => H.A.can(S.xBc.VIEW_CHANNEL, d)),
        u = r.first(),
        o = (0, es.yC)(u, !1),
        h = o?.length > 0 ? o[0] : null,
        x = null != d && null == u && !r.loadingMore && !r.ready && !r.hasFetched && c;
    return (
        i.useEffect(() => {
            x && el.A.fetchMessages({ channelId: l, after: l, limit: 5 });
        }, [l, x]),
        (0, s.jsx)(
            q.D,
            {
                className: ec.Km,
                onClick: (e) => {
                    null != d &&
                        (e.shiftKey
                            ? (0, $.bN)(d.guild_id, d.id)
                            : O.A.openResourceChannelAsSidebar({ guildId: d.guild_id, channelId: d.id }));
                },
                children: (0, s.jsxs)(s.Fragment, {
                    children: [
                        ((n = L.Ay.getResourceChannelIconURL({ channelId: l, icon: t })),
                        null != t && null != n
                            ? (0, s.jsx)("img", { src: n, className: ec.Oz, alt: "", "aria-hidden": !0 })
                            : null != h
                              ? (0, s.jsx)("img", { className: ec.Oz, src: h.src, alt: h.alt })
                              : (0, s.jsx)("div", {
                                    className: ec.jM,
                                    children: (0, s.jsx)(J.u, { size: "xs", color: "currentColor" }),
                                })),
                        (0, s.jsx)(ee.E, { className: ec.T2, variant: "text-sm/semibold", color: "none", children: a }),
                    ],
                }),
            },
            l,
        )
    );
}
let eh = i.memo(function (e) {
        let { guild: n } = e,
            l = er(n.id);
        return 0 === l.length
            ? null
            : (0, s.jsx)(en.Z, {
                  className: ec.u2,
                  children: (0, s.jsxs)("div", {
                      className: ec.Ln,
                      children: [
                          (0, s.jsx)(E.D, {
                              className: ec.cx,
                              variant: "heading-md/bold",
                              color: "text-strong",
                              children: V.intl.string(V.t.xwY4La),
                          }),
                          (0, s.jsx)("div", {
                              className: ec.Tb,
                              children: l.map((e) =>
                                  (0, s.jsx)(
                                      eo,
                                      { channelId: e.channelId, title: e.title, icon: e.icon },
                                      `widget-resource-${e.channelId}`,
                                  ),
                              ),
                          }),
                      ],
                  }),
              });
    }),
    em = i.memo(function (e) {
        let { guild: n, isNewMember: l } = e;
        return (0, s.jsxs)("aside", {
            className: ec.pz,
            children: [(0, s.jsx)(eu, { guild: n }), l && (0, s.jsx)(eh, { guild: n })],
        });
    });
var ex = l(283012),
    eg = l(710948),
    eA = l(46054),
    ej = l(59318),
    ef = l(294520),
    eN = l(34337),
    ev = l(976860),
    eb = l(885386),
    eI = l(808728),
    eC = l(531685),
    ep = l(361723),
    eE = l(992595);
function e_(e) {
    let n,
        l,
        { firstMedia: i, channelId: t } = e,
        d = (0, a.bG)([et.A], () => et.A.getChannel(t)),
        [r, c] = (0, ef.eJ)({ media: i, channel: d }),
        u = (0, ef.rx)(c),
        o = (0, a.bG)([eC.A], () => eC.A.isFocused()),
        m = (0, ej.ge)(i.src),
        x = eb.kt.useSetting(),
        { src: g, width: A, height: j, alt: f } = i;
    return (
        j > A ? (l = 72) : (n = 72),
        (0, s.jsxs)("div", {
            className: ep.$_,
            children: [
                (0, eN.LL)({
                    src: g,
                    maxHeight: n,
                    maxWidth: l,
                    width: A,
                    height: j,
                    alt: null != f && r && null != u ? u : f,
                    autoPlay: x,
                    animated: m && !r && o,
                    containerClassName: ep.iT,
                    imageClassName: h()({ [ep.cd]: r }),
                    analyticsSource: "ResourceChannelMedia",
                }),
                r && (0, s.jsx)(eg.A, { obscureReason: c, iconClassname: ep.yo }),
            ],
        })
    );
}
function ey(e) {
    let { resource: n } = e,
        l = (0, a.bG)([et.A], () => et.A.getChannel(n.channelId)),
        t = (0, a.bG)([ed.A], () => ed.A.getMessages(n.channelId)),
        d = (0, a.bG)([H.A], () => H.A.can(S.xBc.VIEW_CHANNEL, l)),
        r = t.first(),
        c = (function (e) {
            if (null == e) return null;
            if (e.content?.length > 0) return e.content;
            if (e.embeds?.length > 0) {
                for (let n of e.embeds)
                    if (null != n.rawDescription && n.rawDescription.length > 0) return n.rawDescription;
            }
            return null;
        })(r),
        u = (0, es.yC)(r, !1),
        o = u?.length > 0 ? u[0] : null,
        m = null != l && null == t.first() && !t.loadingMore && !t.ready && !t.hasFetched && d;
    if (
        (i.useEffect(() => {
            m && el.A.fetchMessages({ channelId: n.channelId, after: n.channelId, limit: 5 });
        }, [n.channelId, m]),
        null == l || null == l.guild_id)
    )
        return null;
    let x = L.Ay.getResourceChannelIconURL({ channelId: l.id, icon: n.icon }),
        g = null == n.description || 0 === n.description.length;
    return (0, s.jsxs)(q.D, {
        className: ep.G9,
        onClick: function (e) {
            null != l &&
                (e.shiftKey
                    ? (0, $.bN)(l.guild_id, l.id)
                    : O.A.openResourceChannelAsSidebar({ guildId: l.guild_id, channelId: l.id }));
        },
        children: [
            (0, s.jsxs)("div", {
                className: ep.Qs,
                children: [
                    (0, s.jsx)(ee.E, {
                        className: ep.DD,
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: n.title,
                    }),
                    g &&
                        null != c &&
                        (0, s.jsx)(ee.E, {
                            className: ep.BK,
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: eA.A.parse(c, !0, { guildId: l.guild_id, channelId: l.id }),
                        }),
                    !g &&
                        (0, s.jsx)(ee.E, {
                            className: h()(ep.BK, eE.PT),
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: eA.A.parse(n.description, !0, { guildId: l.guild_id, channelId: l.id }),
                        }),
                ],
            }),
            null != n.icon && null != x
                ? (0, s.jsx)("div", {
                      className: ep.$_,
                      children: (0, s.jsx)("img", {
                          src: x,
                          className: ep.__invalid_thumbnail,
                          width: 72,
                          height: 72,
                          alt: "",
                          "aria-hidden": !0,
                      }),
                  })
                : null,
            null == x && null != o ? (0, s.jsx)(e_, { firstMedia: o, channelId: n.channelId }) : null,
        ],
    });
}
function eG(e) {
    let { guild: n, isNewMember: l } = e,
        i = er(n.id);
    return 0 === i.length
        ? l
            ? null
            : (0, s.jsxs)("div", {
                  className: ep.do,
                  children: [
                      (0, s.jsx)(E.D, {
                          variant: "heading-xl/bold",
                          color: "text-strong",
                          children: V.intl.string(V.t.owvC9U),
                      }),
                      (0, s.jsx)("img", { className: ep.QT, src: "/assets/159a09aadfe4a53d.svg", alt: "" }),
                      (0, s.jsx)("div", {
                          className: ep.nM,
                          children: (0, s.jsx)(C.$, {
                              size: "md",
                              variant: "primary",
                              onClick: function () {
                                  let e = eI.Ay.getDefaultChannel(n.id);
                                  null != e && (0, ev.pX)(S.BVt.CHANNEL(n.id, e.id));
                              },
                              fullWidth: !0,
                              text: V.intl.string(V.t["3iCBUn"]),
                          }),
                      }),
                  ],
              })
        : (0, s.jsxs)("div", {
              className: ep.kL,
              children: [
                  (0, s.jsx)(E.D, {
                      variant: "heading-lg/bold",
                      color: "text-strong",
                      children: V.intl.string(V.t.xwY4La),
                  }),
                  i.map((e) => (0, s.jsx)(ey, { resource: e }, e.channelId)),
              ],
          });
}
var eD = l(913423),
    eM = l(964623);
let eR = i.memo(function (e) {
    let { guild: n } = e;
    return (0, s.jsxs)(B.A, {
        channelId: Q.VV.GUILD_HOME,
        guildId: n.id,
        className: h()(ec.DD, ec.Tp),
        innerClassname: ec.vi,
        children: [
            (0, s.jsx)(B.A.Icon, { icon: x.Z, "aria-hidden": !0 }),
            (0, s.jsxs)(B.A.Title, { children: [(0, s.jsx)(g.A, { children: n.name }), V.intl.string(V.t.VbpLyU)] }),
        ],
    });
});
var ew = l(71393);
let eH = (0, d.A)(function (e) {
        let { guild: n, width: l } = e,
            a = (0, m.bG)([z.Ay], () => z.Ay.getSection(Q.VV.GUILD_HOME)),
            [d, r] = i.useState(!1),
            [c, u] = i.useState(S.da6),
            o = a === S.YvQ.SIDEBAR_CHAT,
            x = (0, A.R7)(),
            g = (0, m.bG)([F.h], () => F.h.getSettings(n.id)),
            b = g?.welcomeMessage,
            I = (0, P.A)(n.id),
            C = !I && (g?.resourceChannels?.length ?? 0) === 0,
            p = (0, N.A)("(max-width: 1300px)"),
            E = l - S.MdR - c,
            _ = (o && E < 1020) || p || C;
        return (i.useEffect(() => {
            g === F.A
                ? (0, $.ag)(n.id)
                : null != g &&
                  K.default.track(S.HAw.SERVER_GUIDE_VIEWED, {
                      ...(0, v.H$)(n.id),
                      num_member_actions: g.newMemberActions?.length ?? 0,
                      num_member_actions_completed: Object.keys(W.A.getCompletedActions(n.id) ?? {}).length,
                      num_resource_channels: g.resourceChannels?.length ?? 0,
                  });
        }, [n.id, g]),
        i.useEffect(
            () => () => {
                O.A.closeChannelSidebar(Q.VV.GUILD_HOME);
            },
            [],
        ),
        i.useEffect(() => {
            C && g !== F.A && t.A.escapeToDefaultChannel(n.id);
        }, [n.id, C, g]),
        C)
            ? null
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsxs)("div", {
                          className: h()(eM.TE, ec.Tp, { [eM.js]: o, [eM.jl]: o && d }),
                          children: [
                              (0, s.jsx)(eR, { guild: n }),
                              (0, s.jsx)(j.Gt, {
                                  ...x,
                                  children: (0, s.jsx)("div", {
                                      className: h()(ec.$d, { [ec.Mk]: _ }),
                                      children: (0, s.jsx)(f.F, {
                                          component: (0, s.jsx)("div", {
                                              className: ec.QI,
                                              children: (0, s.jsx)(U, { guild: n, titleClassName: p ? ec.H2 : void 0 }),
                                          }),
                                          children: (0, s.jsxs)("div", {
                                              className: h()(ec.xr, ec.QI),
                                              children: [
                                                  (0, s.jsxs)("div", {
                                                      className: ec.rb,
                                                      children: [
                                                          I && (0, s.jsx)(eD.A, { guildId: n.id, welcomeMessage: b }),
                                                          I && (0, s.jsx)(ex.A, { guildId: n.id }),
                                                          !I || _ ? (0, s.jsx)(eG, { guild: n, isNewMember: I }) : null,
                                                      ],
                                                  }),
                                                  _ ? null : (0, s.jsx)(em, { guild: n, isNewMember: I }),
                                              ],
                                          }),
                                      }),
                                  }),
                              }),
                          ],
                      }),
                      o
                          ? (0, s.jsx)(Z, {
                                pageWidth: l,
                                onSidebarResize: function (e, n) {
                                    r(n), u(e);
                                },
                            })
                          : null,
                  ],
              });
    }),
    eL = function (e) {
        let { guildId: n } = e,
            l = (0, a.bG)([ew.A], () => ew.A.getGuild(n), [n]),
            d = (0, a.bG)([c.A], () => c.A.hasLoadedExperiments),
            o = (0, u.d)(n);
        return (i.useEffect(() => {
            if (d && !o) return void t.A.escapeToDefaultChannel(n);
        }, [n, d, o]),
        null != l && o)
            ? (0, s.jsx)(eH, { guild: l })
            : (0, s.jsx)(r.A, { channelId: void 0 });
    };
