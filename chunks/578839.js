(l.r(n), l.d(n, { default: () => eS }));
var s = l(477900),
    i = l(582128),
    a = l(17928),
    t = l(66834),
    d = l(456412),
    r = l(943712),
    c = l(736056),
    o = l(473529),
    u = l(503698),
    h = l.n(u),
    m = l(702841),
    g = l(855473),
    x = l(140735),
    A = l(312138),
    j = l(689175),
    f = l(707554),
    N = l(241524),
    b = l(666860),
    v = l(462887),
    I = l(104510),
    C = l(750943),
    p = l(821609),
    y = l(192308),
    E = l(534514),
    _ = l(900002),
    G = l(736653),
    D = l(548118),
    M = l(107773),
    R = l(961973),
    w = l(468689),
    H = l(855687),
    L = l(576705),
    S = l(486020),
    V = l(652215),
    k = l(105292),
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
        o = (0, R.A2)(t.id),
        u = (0, a.bG)([L.A], () => (0, H.K)(L.A, t)),
        m = (0, G.Ay)(),
        g = (0, v.M)(m) ? "/assets/36eaea47ad7cb391.svg" : "/assets/3655f5d8659277b4.svg";
    return (0, s.jsxs)("div", {
        className: T.wx,
        children: [
            (0, s.jsxs)("div", {
                className: T.w5,
                children: [
                    (0, s.jsx)("div", {
                        className: h()(T.NC, { [T.KN]: !c }),
                        style: { backgroundImage: `url(${c ? r : g})` },
                    }),
                    o && (0, s.jsx)(U, { guild: t }),
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
                                (0, s.jsx)(E.D, { className: T.Bv, variant: "heading-xxl/semibold", children: t.name }),
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
                                                return (0, y.openModalLazy)(async () => {
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
    K = l(358047),
    $ = l(174459),
    F = l(225142),
    W = l(701785),
    P = l(65995),
    X = l(978165),
    Y = l(812771),
    Q = l(321255),
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
        r = (0, m.bG)([er.A], () => er.A.getMessages(l)),
        c = (0, m.bG)([L.A], () => L.A.can(V.xBc.VIEW_CHANNEL, d)),
        o = r.first(),
        u = (0, ei.yC)(o, !1),
        h = u?.length > 0 ? u[0] : null,
        g = null != d && null == o && !r.loadingMore && !r.ready && !r.hasFetched && c;
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
                            ? (0, F.bN)(d.guild_id, d.id)
                            : z.A.openResourceChannelAsSidebar({ guildId: d.guild_id, channelId: d.id }));
                },
                children: (0, s.jsxs)(s.Fragment, {
                    children: [
                        ((n = S.Ay.getResourceChannelIconURL({ channelId: l, icon: t })),
                        null != t && null != n
                            ? (0, s.jsx)("img", { src: n, className: eo.Oz, alt: "", "aria-hidden": !0 })
                            : null != h
                              ? (0, s.jsx)("img", { className: eo.Oz, src: h.src, alt: h.alt })
                              : (0, s.jsx)("div", {
                                    className: eo.jM,
                                    children: (0, s.jsx)(q.u, { size: "xs", color: "currentColor" }),
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
            l = ec(n.id);
        return 0 === l.length
            ? null
            : (0, s.jsx)(el.Z, {
                  className: eo.u2,
                  children: (0, s.jsxs)("div", {
                      className: eo.Ln,
                      children: [
                          (0, s.jsx)(E.D, {
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
    ef = l(59318),
    eN = l(294520),
    eb = l(44788),
    ev = l(976860),
    eI = l(253932),
    eC = l(808728),
    ep = l(531685),
    ey = l(459850),
    eE = l(165648);
function e_(e) {
    let n,
        l,
        { firstMedia: i, channelId: t } = e,
        d = (0, a.bG)([ed.A], () => ed.A.getChannel(t)),
        [r, c] = (0, eN.eJ)({ media: i, channel: d }),
        o = (0, eN.rx)(c),
        u = (0, a.bG)([ep.A], () => ep.A.isFocused()),
        m = (0, ef.ge)(i.src),
        g = eI.kt.useSetting(),
        { src: x, width: A, height: j, alt: f } = i;
    return (
        j > A ? (l = 72) : (n = 72),
        (0, s.jsxs)("div", {
            className: ey.$_,
            children: [
                (0, eb.LL)({
                    src: x,
                    maxHeight: n,
                    maxWidth: l,
                    width: A,
                    height: j,
                    alt: null != f && r && null != o ? o : f,
                    autoPlay: g,
                    animated: m && !r && u,
                    containerClassName: ey.iT,
                    imageClassName: h()({ [ey.cd]: r }),
                    analyticsSource: "ResourceChannelMedia",
                }),
                r && (0, s.jsx)(eA.A, { obscureReason: c, iconClassname: ey.yo }),
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
        o = (0, ei.yC)(r, !1),
        u = o?.length > 0 ? o[0] : null,
        m = null != l && null == t.first() && !t.loadingMore && !t.ready && !t.hasFetched && d;
    if (
        (i.useEffect(() => {
            m && es.A.fetchMessages({ channelId: n.channelId, after: n.channelId, limit: 5 });
        }, [n.channelId, m]),
        null == l || null == l.guild_id)
    )
        return null;
    let g = S.Ay.getResourceChannelIconURL({ channelId: l.id, icon: n.icon }),
        x = null == n.description || 0 === n.description.length;
    return (0, s.jsxs)(ee.D, {
        className: ey.G9,
        onClick: function (e) {
            null != l &&
                (e.shiftKey
                    ? (0, F.bN)(l.guild_id, l.id)
                    : z.A.openResourceChannelAsSidebar({ guildId: l.guild_id, channelId: l.id }));
        },
        children: [
            (0, s.jsxs)("div", {
                className: ey.Qs,
                children: [
                    (0, s.jsx)(en.E, {
                        className: ey.DD,
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: n.title,
                    }),
                    x &&
                        null != c &&
                        (0, s.jsx)(en.E, {
                            className: ey.BK,
                            variant: "body-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: ej.A.parse(c, !0, { guildId: l.guild_id, channelId: l.id }),
                        }),
                    !x &&
                        (0, s.jsx)(en.E, {
                            className: h()(ey.BK, eE.PT),
                            variant: "body-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: ej.A.parse(n.description, !0, { guildId: l.guild_id, channelId: l.id }),
                        }),
                ],
            }),
            null != n.icon && null != g
                ? (0, s.jsx)("div", {
                      className: ey.$_,
                      children: (0, s.jsx)("img", {
                          src: g,
                          className: ey.__invalid_thumbnail,
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
        i = ec(n.id);
    return 0 === i.length
        ? l
            ? null
            : (0, s.jsxs)("div", {
                  className: ey.do,
                  children: [
                      (0, s.jsx)(E.D, {
                          variant: "heading-xl/semibold",
                          color: "text-strong",
                          children: k.intl.string(k.t.owvC9U),
                      }),
                      (0, s.jsx)("img", { className: ey.QT, src: "/assets/159a09aadfe4a53d.svg", alt: "" }),
                      (0, s.jsx)("div", {
                          className: ey.nM,
                          children: (0, s.jsx)(p.$, {
                              size: "md",
                              variant: "primary",
                              onClick: function () {
                                  let e = eC.Ay.getDefaultChannel(n.id);
                                  null != e && (0, ev.pX)(V.BVt.CHANNEL(n.id, e.id));
                              },
                              fullWidth: !0,
                              text: k.intl.string(k.t["3iCBUn"]),
                          }),
                      }),
                  ],
              })
        : (0, s.jsxs)("div", {
              className: ey.kL,
              children: [
                  (0, s.jsx)(E.D, {
                      variant: "heading-lg/semibold",
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
        className: h()(eo.DD, eo.Tp),
        innerClassname: eo.vi,
        children: [
            (0, s.jsx)(O.A.Icon, { icon: g.Z, "aria-hidden": !0 }),
            (0, s.jsxs)(O.A.Title, { children: [(0, s.jsx)(x.A, { children: n.name }), k.intl.string(k.t.VbpLyU)] }),
        ],
    });
});
var eH = l(71393);
let eL = (0, d.A)(function (e) {
        let { guild: n, width: l } = e,
            a = (0, m.bG)([K.Ay], () => K.Ay.getSection(Z.VV.GUILD_HOME)),
            [d, r] = i.useState(!1),
            [c, o] = i.useState(V.da6),
            u = a === V.YvQ.SIDEBAR_CHAT,
            g = (0, A.R7)(),
            x = (0, m.bG)([W.h], () => W.h.getSettings(n.id)),
            v = x?.welcomeMessage,
            I = (0, X.A)(n.id),
            C = !I && (x?.resourceChannels?.length ?? 0) === 0,
            p = (0, N.A)("(max-width: 1300px)"),
            y = l - V.MdR - c,
            E = (u && y < 1020) || p || C;
        return (i.useEffect(() => {
            x === W.A
                ? (0, F.ag)(n.id)
                : null != x &&
                  $.default.track(V.HAw.SERVER_GUIDE_VIEWED, {
                      ...(0, b.H$)(n.id),
                      num_member_actions: x.newMemberActions?.length ?? 0,
                      num_member_actions_completed: Object.keys(P.A.getCompletedActions(n.id) ?? {}).length,
                      num_resource_channels: x.resourceChannels?.length ?? 0,
                  });
        }, [n.id, x]),
        i.useEffect(
            () => () => {
                z.A.closeChannelSidebar(Z.VV.GUILD_HOME);
            },
            [],
        ),
        i.useEffect(() => {
            C && x !== W.A && t.A.escapeToDefaultChannel(n.id);
        }, [n.id, C, x]),
        C)
            ? null
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsxs)("div", {
                          className: h()(eR.TE, eo.Tp, { [eR.js]: u, [eR.jl]: u && d }),
                          children: [
                              (0, s.jsx)(ew, { guild: n }),
                              (0, s.jsx)(j.Gt, {
                                  ...g,
                                  children: (0, s.jsx)("div", {
                                      className: h()(eo.$d, { [eo.Mk]: E }),
                                      children: (0, s.jsx)(f.F, {
                                          component: (0, s.jsx)("div", {
                                              className: eo.QI,
                                              children: (0, s.jsx)(B, { guild: n, titleClassName: p ? eo.H2 : void 0 }),
                                          }),
                                          children: (0, s.jsxs)("div", {
                                              className: h()(eo.xr, eo.QI),
                                              children: [
                                                  (0, s.jsxs)("div", {
                                                      className: eo.rb,
                                                      children: [
                                                          I && (0, s.jsx)(eM.A, { guildId: n.id, welcomeMessage: v }),
                                                          I && (0, s.jsx)(ex.A, { guildId: n.id }),
                                                          !I || E ? (0, s.jsx)(eD, { guild: n, isNewMember: I }) : null,
                                                      ],
                                                  }),
                                                  E ? null : (0, s.jsx)(eg, { guild: n, isNewMember: I }),
                                              ],
                                          }),
                                      }),
                                  }),
                              }),
                          ],
                      }),
                      u
                          ? (0, s.jsx)(J, {
                                pageWidth: l,
                                onSidebarResize: function (e, n) {
                                    (r(n), o(e));
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
            u = (0, o.d)(n);
        return (i.useEffect(() => {
            if (d && !u) return void t.A.escapeToDefaultChannel(n);
        }, [n, d, u]),
        null != l && u)
            ? (0, s.jsx)(eL, { guild: l })
            : (0, s.jsx)(r.A, { channelId: void 0 });
    };
