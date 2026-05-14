n.r(l), n.d(l, { default: () => eL });
var s = n(627968),
    i = n(64700),
    a = n(17928),
    t = n(66834),
    d = n(456412),
    r = n(943712),
    c = n(736056),
    u = n(473529),
    o = n(503698),
    h = n.n(o),
    m = n(702841),
    x = n(855473),
    g = n(140735),
    A = n(312138),
    j = n(689175),
    f = n(707554),
    N = n(241524),
    v = n(95561),
    b = n(104510),
    I = n(750943),
    C = n(821609),
    p = n(192308),
    E = n(534514),
    _ = n(781696),
    y = n(736653),
    G = n(548118),
    D = n(107773),
    M = n(961973),
    R = n(468689),
    w = n(855687),
    H = n(576705),
    L = n(486020),
    S = n(652215),
    V = n(375708),
    k = n(589258);
function T(e) {
    let { guild: l } = e,
        {
            variant: n,
            icon: i,
            text: a,
        } = l.features.has(S.GuildFeatures.BANNER)
            ? { variant: "overlay-secondary", icon: I.X, text: V.intl.string(V.t.b0y3DL) }
            : { variant: "expressive", icon: b._, text: V.intl.string(V.t["+7XY31"]) };
    return (0, s.jsx)("div", {
        className: k.SY,
        children: (0, s.jsx)(C.$, {
            variant: n,
            icon: i,
            text: a,
            onClick: () => {
                R.A.open(l.id, S.BEX.ONBOARDING, void 0, S.nd0.SERVER_GUIDE);
            },
        }),
    });
}
let U = i.memo(function (e) {
    let l,
        { guild: t, titleClassName: d } = e,
        { homeHeaderImage: r, isHomeHeaderImageSet: c } = {
            homeHeaderImage: (l = i.useMemo(
                () => (null == t ? null : L.Ay.getGuildHomeHeaderURL({ id: t.id, homeHeader: t.homeHeader })),
                [t],
            )),
            isHomeHeaderImageSet: null != l,
            homeHeaderScroll: 200 * (null != l),
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
                                            onClick: () =>
                                                (0, p.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("49909"),
                                                        n.e("59957"),
                                                        n.e("28136"),
                                                        n.e("16084"),
                                                        n.e("87317"),
                                                        n.e("22547"),
                                                    ]).then(n.bind(n, 1310));
                                                    return (l) =>
                                                        (0, s.jsx)(e, { ...l, guild: t, source: S.PE1.GUILD_HOME });
                                                }),
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
var B = n(742589),
    O = n(138298),
    z = n(761640),
    K = n(174459),
    $ = n(225142),
    F = n(701785),
    W = n(65995),
    P = n(978165),
    X = n(812771),
    Y = n(274541),
    Q = n(746080);
function Z(e) {
    let { pageWidth: l, onSidebarResize: n } = e,
        i = (0, a.bG)([z.Ay], () => z.Ay.getSidebarState(Q.VV.GUILD_HOME));
    if (null == i || null == i.channelId) return null;
    let t = l - S.MdR - 656;
    return (0, s.jsx)(X.A, {
        sidebarType: X.X.HomeSidebar,
        maxWidth: t,
        onWidthChange: n,
        children: (0, s.jsx)(Y.A, {
            channelId: i.channelId,
            baseChannelId: Q.VV.GUILD_HOME,
            channelViewSource: "Home View",
            isResourceChannelView: !0,
        }),
    });
}
var J = n(261958),
    q = n(939249),
    ee = n(834730),
    el = n(359778),
    en = n(720149),
    es = n(256265),
    ei = n(90084),
    ea = n(42780),
    et = n(734057),
    ed = n(232835);
function er(e) {
    return (0, m.yK)([F.h, et.A], () => F.h.getResourceChannels(e).filter((e) => null != et.A.getChannel(e.channelId)));
}
var ec = n(354476);
let eu = i.memo(function (e) {
        let { guild: l } = e,
            { guildProfile: n, fetchGuildProfile: a } = (0, ei.u)(l.id);
        return (i.useEffect(() => {
            a();
        }, [a]),
        null == n)
            ? null
            : (0, s.jsx)(ea.Ay, { profile: n, disableCTA: !0, disableGuildNameClick: !0 });
    }),
    eo = (e) => {
        let l,
            { channelId: n, title: a, icon: t } = e,
            d = (0, m.bG)([et.A], () => et.A.getChannel(n)),
            r = (0, m.bG)([ed.A], () => ed.A.getMessages(n)),
            c = (0, m.bG)([H.A], () => H.A.can(S.xBc.VIEW_CHANNEL, d)),
            u = r.first(),
            o = (0, es.yC)(u, !1),
            h = o?.length > 0 ? o[0] : null,
            x = null != d && null == u && !r.loadingMore && !r.ready && !r.hasFetched && c;
        return (
            i.useEffect(() => {
                x && en.A.fetchMessages({ channelId: n, after: n, limit: 5 });
            }, [n, x]),
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
                            ((l = L.Ay.getResourceChannelIconURL({ channelId: n, icon: t })),
                            null != t && null != l
                                ? (0, s.jsx)("img", { src: l, className: ec.Oz, alt: "", "aria-hidden": !0 })
                                : null != h
                                  ? (0, s.jsx)("img", { className: ec.Oz, src: h.src, alt: h.alt })
                                  : (0, s.jsx)("div", {
                                        className: ec.jM,
                                        children: (0, s.jsx)(J.u, { size: "xs", color: "currentColor" }),
                                    })),
                            (0, s.jsx)(ee.E, {
                                className: ec.T2,
                                variant: "text-sm/semibold",
                                color: "none",
                                children: a,
                            }),
                        ],
                    }),
                },
                n,
            )
        );
    },
    eh = i.memo(function (e) {
        let { guild: l } = e,
            n = er(l.id);
        return 0 === n.length
            ? null
            : (0, s.jsx)(el.Z, {
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
                              children: n.map((e) =>
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
        let { guild: l, isNewMember: n } = e;
        return (0, s.jsxs)("aside", {
            className: ec.pz,
            children: [(0, s.jsx)(eu, { guild: l }), n && (0, s.jsx)(eh, { guild: l })],
        });
    });
var ex = n(283012),
    eg = n(710948),
    eA = n(46054),
    ej = n(59318),
    ef = n(294520),
    eN = n(34337),
    ev = n(976860),
    eb = n(885386),
    eI = n(808728),
    eC = n(531685),
    ep = n(361723),
    eE = n(992595);
function e_(e) {
    let l,
        n,
        { firstMedia: i, channelId: t } = e,
        d = (0, a.bG)([et.A], () => et.A.getChannel(t)),
        [r, c] = (0, ef.eJ)({ media: i, channel: d }),
        u = (0, ef.rx)(c),
        o = (0, a.bG)([eC.A], () => eC.A.isFocused()),
        m = (0, ej.ge)(i.src),
        x = eb.kt.useSetting(),
        { src: g, width: A, height: j, alt: f } = i;
    return (
        j > A ? (n = 72) : (l = 72),
        (0, s.jsxs)("div", {
            className: ep.$_,
            children: [
                (0, eN.LL)({
                    src: g,
                    maxHeight: l,
                    maxWidth: n,
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
    let { resource: l } = e,
        n = (0, a.bG)([et.A], () => et.A.getChannel(l.channelId)),
        t = (0, a.bG)([ed.A], () => ed.A.getMessages(l.channelId)),
        d = (0, a.bG)([H.A], () => H.A.can(S.xBc.VIEW_CHANNEL, n)),
        r = t.first(),
        c = (function (e) {
            if (null == e) return null;
            if (e.content?.length > 0) return e.content;
            if (e.embeds?.length > 0) {
                for (let l of e.embeds)
                    if (null != l.rawDescription && l.rawDescription.length > 0) return l.rawDescription;
            }
            return null;
        })(r),
        u = (0, es.yC)(r, !1),
        o = u?.length > 0 ? u[0] : null,
        m = null != n && null == t.first() && !t.loadingMore && !t.ready && !t.hasFetched && d;
    if (
        (i.useEffect(() => {
            m && en.A.fetchMessages({ channelId: l.channelId, after: l.channelId, limit: 5 });
        }, [l.channelId, m]),
        null == n || null == n.guild_id)
    )
        return null;
    let x = L.Ay.getResourceChannelIconURL({ channelId: n.id, icon: l.icon }),
        g = null == l.description || 0 === l.description.length;
    return (0, s.jsxs)(q.D, {
        className: ep.G9,
        onClick: (e) => {
            null != n &&
                (e.shiftKey
                    ? (0, $.bN)(n.guild_id, n.id)
                    : O.A.openResourceChannelAsSidebar({ guildId: n.guild_id, channelId: n.id }));
        },
        children: [
            (0, s.jsxs)("div", {
                className: ep.Qs,
                children: [
                    (0, s.jsx)(ee.E, {
                        className: ep.DD,
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: l.title,
                    }),
                    g &&
                        null != c &&
                        (0, s.jsx)(ee.E, {
                            className: ep.BK,
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: eA.A.parse(c, !0, { guildId: n.guild_id, channelId: n.id }),
                        }),
                    !g &&
                        (0, s.jsx)(ee.E, {
                            className: h()(ep.BK, eE.PT),
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: eA.A.parse(l.description, !0, { guildId: n.guild_id, channelId: n.id }),
                        }),
                ],
            }),
            null != l.icon && null != x
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
            null == x && null != o ? (0, s.jsx)(e_, { firstMedia: o, channelId: l.channelId }) : null,
        ],
    });
}
function eG(e) {
    let { guild: l, isNewMember: n } = e,
        i = er(l.id);
    return 0 === i.length
        ? n
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
                              onClick: () => {
                                  let e = eI.Ay.getDefaultChannel(l.id);
                                  null != e && (0, ev.pX)(S.BVt.CHANNEL(l.id, e.id));
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
var eD = n(913423),
    eM = n(964623);
let eR = i.memo(function (e) {
    let { guild: l } = e;
    return (0, s.jsxs)(B.A, {
        channelId: Q.VV.GUILD_HOME,
        guildId: l.id,
        className: h()(ec.DD, ec.Tp),
        innerClassname: ec.vi,
        children: [
            (0, s.jsx)(B.A.Icon, { icon: x.Z, "aria-hidden": !0 }),
            (0, s.jsxs)(B.A.Title, { children: [(0, s.jsx)(g.A, { children: l.name }), V.intl.string(V.t.VbpLyU)] }),
        ],
    });
});
var ew = n(71393);
let eH = (0, d.A)(function (e) {
        let { guild: l, width: n } = e,
            a = (0, m.bG)([z.Ay], () => z.Ay.getSection(Q.VV.GUILD_HOME)),
            [d, r] = i.useState(!1),
            [c, u] = i.useState(S.da6),
            o = a === S.YvQ.SIDEBAR_CHAT,
            x = (0, A.R7)(),
            g = (0, m.bG)([F.h], () => F.h.getSettings(l.id)),
            b = g?.welcomeMessage,
            I = (0, P.A)(l.id),
            C = !I && (g?.resourceChannels?.length ?? 0) === 0,
            p = (0, N.A)("(max-width: 1300px)"),
            E = n - S.MdR - c,
            _ = (o && E < 1020) || p || C;
        return (i.useEffect(() => {
            g === F.A
                ? (0, $.ag)(l.id)
                : null != g &&
                  K.default.track(S.HAw.SERVER_GUIDE_VIEWED, {
                      ...(0, v.H$)(l.id),
                      num_member_actions: g.newMemberActions?.length ?? 0,
                      num_member_actions_completed: Object.keys(W.A.getCompletedActions(l.id) ?? {}).length,
                      num_resource_channels: g.resourceChannels?.length ?? 0,
                  });
        }, [l.id, g]),
        i.useEffect(
            () => () => {
                O.A.closeChannelSidebar(Q.VV.GUILD_HOME);
            },
            [],
        ),
        i.useEffect(() => {
            C && g !== F.A && t.A.escapeToDefaultChannel(l.id);
        }, [l.id, C, g]),
        C)
            ? null
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsxs)("div", {
                          className: h()(eM.TE, ec.Tp, { [eM.js]: o, [eM.jl]: o && d }),
                          children: [
                              (0, s.jsx)(eR, { guild: l }),
                              (0, s.jsx)(j.Gt, {
                                  ...x,
                                  children: (0, s.jsx)("div", {
                                      className: h()(ec.$d, { [ec.Mk]: _ }),
                                      children: (0, s.jsx)(f.F, {
                                          component: (0, s.jsx)("div", {
                                              className: ec.QI,
                                              children: (0, s.jsx)(U, { guild: l, titleClassName: p ? ec.H2 : void 0 }),
                                          }),
                                          children: (0, s.jsxs)("div", {
                                              className: h()(ec.xr, ec.QI),
                                              children: [
                                                  (0, s.jsxs)("div", {
                                                      className: ec.rb,
                                                      children: [
                                                          I && (0, s.jsx)(eD.A, { guildId: l.id, welcomeMessage: b }),
                                                          I && (0, s.jsx)(ex.A, { guildId: l.id }),
                                                          !I || _ ? (0, s.jsx)(eG, { guild: l, isNewMember: I }) : null,
                                                      ],
                                                  }),
                                                  _ ? null : (0, s.jsx)(em, { guild: l, isNewMember: I }),
                                              ],
                                          }),
                                      }),
                                  }),
                              }),
                          ],
                      }),
                      o
                          ? (0, s.jsx)(Z, {
                                pageWidth: n,
                                onSidebarResize: (e, l) => {
                                    r(l), u(e);
                                },
                            })
                          : null,
                  ],
              });
    }),
    eL = function (e) {
        let { guildId: l } = e,
            n = (0, a.bG)([ew.A], () => ew.A.getGuild(l), [l]),
            d = (0, a.bG)([c.A], () => c.A.hasLoadedExperiments),
            o = (0, u.d)(l);
        return (i.useEffect(() => {
            if (d && !o) return void t.A.escapeToDefaultChannel(l);
        }, [l, d, o]),
        null != n && o)
            ? (0, s.jsx)(eH, { guild: n })
            : (0, s.jsx)(r.A, { channelId: void 0 });
    };
