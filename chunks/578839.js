(l.r(n), l.d(n, { default: () => eS }));
var s = l(477900),
    i = l(582128),
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
    b = l(462887),
    I = l(104510),
    C = l(750943),
    p = l(821609),
    E = l(192308),
    _ = l(297264),
    y = l(900002),
    G = l(736653),
    D = l(548118),
    M = l(107773),
    R = l(961973),
    w = l(468689),
    H = l(855687),
    L = l(576705),
    S = l(486020),
    V = l(652215),
    k = l(375708),
    T = l(599307);
function U(e) {
    let { guild: n } = e,
        {
            variant: l,
            icon: i,
            text: a,
        } = n.features.has(V.GuildFeatures.BANNER)
            ? { variant: "overlay-secondary", icon: C.X, text: k.intl.string(k.t.b0y3DL) }
            : { variant: "expressive", icon: I._, text: k.intl.string(k.t["+7XY31"]) };
    return (0, s.jsx)("div", {
        className: T.SY,
        children: (0, s.jsx)(p.$, {
            variant: l,
            icon: i,
            text: a,
            onClick: function () {
                w.A.open(n.id, V.BEX.ONBOARDING, void 0, V.nd0.SERVER_GUIDE);
            },
        }),
    });
}
let B = i.memo(function (e) {
    let n,
        { guild: t, titleClassName: d } = e,
        { homeHeaderImage: r, isHomeHeaderImageSet: c } = {
            homeHeaderImage: (n = i.useMemo(
                () => (null == t ? null : S.Ay.getGuildHomeHeaderURL({ id: t.id, homeHeader: t.homeHeader })),
                [t],
            )),
            isHomeHeaderImageSet: null != n,
            homeHeaderScroll: 200 * (null != n),
        },
        u = (0, R.A2)(t.id),
        o = (0, a.bG)([L.A], () => (0, H.K)(L.A, t)),
        m = (0, G.Ay)(),
        x = (0, b.M)(m) ? "/assets/36eaea47ad7cb391.svg" : "/assets/3655f5d8659277b4.svg";
    return (0, s.jsxs)("div", {
        className: T.wx,
        children: [
            (0, s.jsxs)("div", {
                className: T.w5,
                children: [
                    (0, s.jsx)("div", {
                        className: h()(T.NC, { [T.KN]: !c }),
                        style: { backgroundImage: `url(${c ? r : x})` },
                    }),
                    u && (0, s.jsx)(U, { guild: t }),
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
                                (0, s.jsx)(_.D, { className: T.Bv, variant: "heading-xxl/bold", children: t.name }),
                                (0, s.jsx)(M.A, {
                                    size: 24,
                                    guild: t,
                                    tooltipPosition: "bottom",
                                    tooltipColor: y.ST.Colors.PRIMARY,
                                }),
                                o &&
                                    (0, s.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: T.ak,
                                        children: (0, s.jsx)(p.$, {
                                            variant: "secondary",
                                            text: k.intl.string(k.t.VINpSK),
                                            onClick: function () {
                                                return (0, E.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        l.e("683621"),
                                                        l.e("711162"),
                                                        l.e("159957"),
                                                        l.e("728136"),
                                                        l.e("216084"),
                                                        l.e("284819"),
                                                    ]).then(l.bind(l, 405342));
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
    K = l(761640),
    $ = l(174459),
    F = l(225142),
    W = l(701785),
    P = l(65995),
    X = l(978165),
    Y = l(812771),
    Q = l(274541),
    Z = l(746080);
function J(e) {
    let { pageWidth: n, onSidebarResize: l } = e,
        i = (0, a.bG)([K.Ay], () => K.Ay.getSidebarState(Z.VV.GUILD_HOME));
    if (null == i || null == i.channelId) return null;
    let t = n - V.MdR - 656;
    return (0, s.jsx)(Y.A, {
        sidebarType: Y.X.HomeSidebar,
        maxWidth: t,
        onWidthChange: l,
        children: (0, s.jsx)(Q.A, {
            channelId: i.channelId,
            baseChannelId: Z.VV.GUILD_HOME,
            channelViewSource: "Home View",
            isResourceChannelView: !0,
        }),
    });
}
var q = l(261958),
    ee = l(939249),
    en = l(834730),
    el = l(993077),
    es = l(148494),
    ei = l(256265),
    ea = l(90084),
    et = l(42780),
    ed = l(734057),
    er = l(232835);
function ec(e) {
    return (0, m.yK)([W.h, ed.A], () => W.h.getResourceChannels(e).filter((e) => null != ed.A.getChannel(e.channelId)));
}
var eu = l(526031);
let eo = i.memo(function (e) {
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
        r = (0, m.bG)([er.A], () => er.A.getMessages(l)),
        c = (0, m.bG)([L.A], () => L.A.can(V.xBc.VIEW_CHANNEL, d)),
        u = r.first(),
        o = (0, ei.yC)(u, !1),
        h = o?.length > 0 ? o[0] : null,
        x = null != d && null == u && !r.loadingMore && !r.ready && !r.hasFetched && c;
    return (
        i.useEffect(() => {
            x && es.A.fetchMessages({ channelId: l, after: l, limit: 5 });
        }, [l, x]),
        (0, s.jsx)(
            ee.D,
            {
                className: eu.Km,
                onClick: (e) => {
                    null != d &&
                        (e.shiftKey
                            ? (0, F.bN)(d.guild_id, d.id)
                            : z.A.openResourceChannelAsSidebar({ guildId: d.guild_id, channelId: d.id }));
                },
                children: (0, s.jsxs)(s.Fragment, {
                    children: [
                        ((n = S.Ay.getResourceChannelIconURL({ channelId: l, icon: t })),
                        null != t && null != n
                            ? (0, s.jsx)("img", { src: n, className: eu.Oz, alt: "", "aria-hidden": !0 })
                            : null != h
                              ? (0, s.jsx)("img", { className: eu.Oz, src: h.src, alt: h.alt })
                              : (0, s.jsx)("div", {
                                    className: eu.jM,
                                    children: (0, s.jsx)(q.u, { size: "xs", color: "currentColor" }),
                                })),
                        (0, s.jsx)(en.E, { className: eu.T2, variant: "text-sm/semibold", color: "none", children: a }),
                    ],
                }),
            },
            l,
        )
    );
}
let em = i.memo(function (e) {
        let { guild: n } = e,
            l = ec(n.id);
        return 0 === l.length
            ? null
            : (0, s.jsx)(el.Z, {
                  className: eu.u2,
                  children: (0, s.jsxs)("div", {
                      className: eu.Ln,
                      children: [
                          (0, s.jsx)(_.D, {
                              className: eu.cx,
                              variant: "heading-md/bold",
                              color: "text-strong",
                              children: k.intl.string(k.t.xwY4La),
                          }),
                          (0, s.jsx)("div", {
                              className: eu.Tb,
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
    ex = i.memo(function (e) {
        let { guild: n, isNewMember: l } = e;
        return (0, s.jsxs)("aside", {
            className: eu.pz,
            children: [(0, s.jsx)(eo, { guild: n }), l && (0, s.jsx)(em, { guild: n })],
        });
    });
var eg = l(283012),
    eA = l(710948),
    ej = l(46054),
    ef = l(59318),
    eN = l(294520),
    ev = l(85935),
    eb = l(976860),
    eI = l(885386),
    eC = l(808728),
    ep = l(531685),
    eE = l(459850),
    e_ = l(165648);
function ey(e) {
    let n,
        l,
        { firstMedia: i, channelId: t } = e,
        d = (0, a.bG)([ed.A], () => ed.A.getChannel(t)),
        [r, c] = (0, eN.eJ)({ media: i, channel: d }),
        u = (0, eN.rx)(c),
        o = (0, a.bG)([ep.A], () => ep.A.isFocused()),
        m = (0, ef.ge)(i.src),
        x = eI.kt.useSetting(),
        { src: g, width: A, height: j, alt: f } = i;
    return (
        j > A ? (l = 72) : (n = 72),
        (0, s.jsxs)("div", {
            className: eE.$_,
            children: [
                (0, ev.LL)({
                    src: g,
                    maxHeight: n,
                    maxWidth: l,
                    width: A,
                    height: j,
                    alt: null != f && r && null != u ? u : f,
                    autoPlay: x,
                    animated: m && !r && o,
                    containerClassName: eE.iT,
                    imageClassName: h()({ [eE.cd]: r }),
                    analyticsSource: "ResourceChannelMedia",
                }),
                r && (0, s.jsx)(eA.A, { obscureReason: c, iconClassname: eE.yo }),
            ],
        })
    );
}
function eG(e) {
    let { resource: n } = e,
        l = (0, a.bG)([ed.A], () => ed.A.getChannel(n.channelId)),
        t = (0, a.bG)([er.A], () => er.A.getMessages(n.channelId)),
        d = (0, a.bG)([L.A], () => L.A.can(V.xBc.VIEW_CHANNEL, l)),
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
        u = (0, ei.yC)(r, !1),
        o = u?.length > 0 ? u[0] : null,
        m = null != l && null == t.first() && !t.loadingMore && !t.ready && !t.hasFetched && d;
    if (
        (i.useEffect(() => {
            m && es.A.fetchMessages({ channelId: n.channelId, after: n.channelId, limit: 5 });
        }, [n.channelId, m]),
        null == l || null == l.guild_id)
    )
        return null;
    let x = S.Ay.getResourceChannelIconURL({ channelId: l.id, icon: n.icon }),
        g = null == n.description || 0 === n.description.length;
    return (0, s.jsxs)(ee.D, {
        className: eE.G9,
        onClick: function (e) {
            null != l &&
                (e.shiftKey
                    ? (0, F.bN)(l.guild_id, l.id)
                    : z.A.openResourceChannelAsSidebar({ guildId: l.guild_id, channelId: l.id }));
        },
        children: [
            (0, s.jsxs)("div", {
                className: eE.Qs,
                children: [
                    (0, s.jsx)(en.E, {
                        className: eE.DD,
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: n.title,
                    }),
                    g &&
                        null != c &&
                        (0, s.jsx)(en.E, {
                            className: eE.BK,
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: ej.A.parse(c, !0, { guildId: l.guild_id, channelId: l.id }),
                        }),
                    !g &&
                        (0, s.jsx)(en.E, {
                            className: h()(eE.BK, e_.PT),
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: ej.A.parse(n.description, !0, { guildId: l.guild_id, channelId: l.id }),
                        }),
                ],
            }),
            null != n.icon && null != x
                ? (0, s.jsx)("div", {
                      className: eE.$_,
                      children: (0, s.jsx)("img", {
                          src: x,
                          className: eE.__invalid_thumbnail,
                          width: 72,
                          height: 72,
                          alt: "",
                          "aria-hidden": !0,
                      }),
                  })
                : null,
            null == x && null != o ? (0, s.jsx)(ey, { firstMedia: o, channelId: n.channelId }) : null,
        ],
    });
}
function eD(e) {
    let { guild: n, isNewMember: l } = e,
        i = ec(n.id);
    return 0 === i.length
        ? l
            ? null
            : (0, s.jsxs)("div", {
                  className: eE.do,
                  children: [
                      (0, s.jsx)(_.D, {
                          variant: "heading-xl/bold",
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
                                  let e = eC.Ay.getDefaultChannel(n.id);
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
                  (0, s.jsx)(_.D, {
                      variant: "heading-lg/bold",
                      color: "text-strong",
                      children: k.intl.string(k.t.xwY4La),
                  }),
                  i.map((e) => (0, s.jsx)(eG, { resource: e }, e.channelId)),
              ],
          });
}
var eM = l(913423),
    eR = l(999900);
let ew = i.memo(function (e) {
    let { guild: n } = e;
    return (0, s.jsxs)(O.A, {
        channelId: Z.VV.GUILD_HOME,
        guildId: n.id,
        className: h()(eu.DD, eu.Tp),
        innerClassname: eu.vi,
        children: [
            (0, s.jsx)(O.A.Icon, { icon: x.Z, "aria-hidden": !0 }),
            (0, s.jsxs)(O.A.Title, { children: [(0, s.jsx)(g.A, { children: n.name }), k.intl.string(k.t.VbpLyU)] }),
        ],
    });
});
var eH = l(71393);
let eL = (0, d.A)(function (e) {
        let { guild: n, width: l } = e,
            a = (0, m.bG)([K.Ay], () => K.Ay.getSection(Z.VV.GUILD_HOME)),
            [d, r] = i.useState(!1),
            [c, u] = i.useState(V.da6),
            o = a === V.YvQ.SIDEBAR_CHAT,
            x = (0, A.R7)(),
            g = (0, m.bG)([W.h], () => W.h.getSettings(n.id)),
            b = g?.welcomeMessage,
            I = (0, X.A)(n.id),
            C = !I && (g?.resourceChannels?.length ?? 0) === 0,
            p = (0, N.A)("(max-width: 1300px)"),
            E = l - V.MdR - c,
            _ = (o && E < 1020) || p || C;
        return (i.useEffect(() => {
            g === W.A
                ? (0, F.ag)(n.id)
                : null != g &&
                  $.default.track(V.HAw.SERVER_GUIDE_VIEWED, {
                      ...(0, v.H$)(n.id),
                      num_member_actions: g.newMemberActions?.length ?? 0,
                      num_member_actions_completed: Object.keys(P.A.getCompletedActions(n.id) ?? {}).length,
                      num_resource_channels: g.resourceChannels?.length ?? 0,
                  });
        }, [n.id, g]),
        i.useEffect(
            () => () => {
                z.A.closeChannelSidebar(Z.VV.GUILD_HOME);
            },
            [],
        ),
        i.useEffect(() => {
            C && g !== W.A && t.A.escapeToDefaultChannel(n.id);
        }, [n.id, C, g]),
        C)
            ? null
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsxs)("div", {
                          className: h()(eR.TE, eu.Tp, { [eR.js]: o, [eR.jl]: o && d }),
                          children: [
                              (0, s.jsx)(ew, { guild: n }),
                              (0, s.jsx)(j.Gt, {
                                  ...x,
                                  children: (0, s.jsx)("div", {
                                      className: h()(eu.$d, { [eu.Mk]: _ }),
                                      children: (0, s.jsx)(f.F, {
                                          component: (0, s.jsx)("div", {
                                              className: eu.QI,
                                              children: (0, s.jsx)(B, { guild: n, titleClassName: p ? eu.H2 : void 0 }),
                                          }),
                                          children: (0, s.jsxs)("div", {
                                              className: h()(eu.xr, eu.QI),
                                              children: [
                                                  (0, s.jsxs)("div", {
                                                      className: eu.rb,
                                                      children: [
                                                          I && (0, s.jsx)(eM.A, { guildId: n.id, welcomeMessage: b }),
                                                          I && (0, s.jsx)(eg.A, { guildId: n.id }),
                                                          !I || _ ? (0, s.jsx)(eD, { guild: n, isNewMember: I }) : null,
                                                      ],
                                                  }),
                                                  _ ? null : (0, s.jsx)(ex, { guild: n, isNewMember: I }),
                                              ],
                                          }),
                                      }),
                                  }),
                              }),
                          ],
                      }),
                      o
                          ? (0, s.jsx)(J, {
                                pageWidth: l,
                                onSidebarResize: function (e, n) {
                                    (r(n), u(e));
                                },
                            })
                          : null,
                  ],
              });
    }),
    eS = function (e) {
        let { guildId: n } = e,
            l = (0, a.bG)([eH.A], () => eH.A.getGuild(n), [n]),
            d = (0, a.bG)([c.A], () => c.A.hasLoadedExperiments),
            o = (0, u.d)(n);
        return (i.useEffect(() => {
            if (d && !o) return void t.A.escapeToDefaultChannel(n);
        }, [n, d, o]),
        null != l && o)
            ? (0, s.jsx)(eL, { guild: l })
            : (0, s.jsx)(r.A, { channelId: void 0 });
    };
