(i.r(n), i.d(n, { default: () => nb }));
var l = i(477900),
    t = i(582128),
    s = i(503698),
    a = i.n(s),
    r = i(855986),
    d = i(554146),
    o = i(740426),
    c = i(761508),
    u = i(805251),
    h = i(812993),
    m = i(909735),
    x = i(726249),
    C = i(826673),
    g = i(742589),
    A = i(406997),
    p = i(192308),
    N = i(683438),
    f = i(821609),
    j = i(307301),
    E = i(812771),
    v = i(108926),
    b = i(799704),
    y = i(769765),
    I = i(808728),
    S = i(71393),
    _ = i(576705),
    w = i(129230);
i(321073);
var O = i(646514),
    R = i(3026),
    D = i(834730),
    L = i(143129),
    G = i(602853),
    M = i(866665),
    T = i(939249),
    P = i(658675),
    k = i(475825),
    H = i(442433),
    U = i(47167),
    V = i(499211),
    B = i(35275),
    F = i(166444),
    q = i(46054),
    W = i(454058),
    Z = i(976860),
    X = i(138298),
    K = i(940382),
    z = i(129095),
    Y = i(863005),
    J = i(73153),
    Q = i(914430),
    $ = i(924985),
    ee = i(543465),
    en = i(816662),
    ei = i(234053),
    el = i(652215);
function et(e) {
    J.h.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: e });
}
var es = i(792996);
function ea(e, n, i) {
    return (0, r.bG)([ee.Ay], () => {
        var l;
        return n === i
            ? ee.Ay.isChannelOptedIn(e, n, !0)
            : ((l = ee.Ay),
              !!(0, ei.cE)(e) || l.isChannelOptedIn(e, n, !0) || (null != i && ee.Ay.isChannelOptedIn(e, i, !0)));
    });
}
function er(e, n, i) {
    return (0, r.bG)([ee.Ay], () => n !== i && null != i && ee.Ay.isChannelOptedIn(e, i, !0));
}
var ed = i(534514),
    eo = i(789645),
    ec = i(543862),
    eu = i(727419),
    eh = i(997211),
    em = i(395504),
    ex = i(49999),
    eC = i(734980);
function eg(e) {
    let { guild: n } = e,
        i = (0, em.Xn)(n.id),
        t = (0, C.HX)(d.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        s = i && !t ? d.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : d.M.CHANNEL_BROWSER_NUX;
    (0, ec.Vh)(s);
    let r = i
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(ed.D, {
                              className: eC.R_,
                              color: "text-overlay-light",
                              variant: "heading-lg/semibold",
                              children: es.intl.string(es.t.AalzkJ),
                          }),
                          (0, l.jsx)(D.E, {
                              className: eC.h_,
                              variant: "body-md/normal",
                              color: "text-overlay-light",
                              children: es.intl.string(es.t.CXh95Z),
                          }),
                          (0, l.jsx)(f.$, {
                              variant: "overlay-primary",
                              onClick: function () {
                                  (eu.A.open(n.id, el.BEX.ONBOARDING), (0, C.Dr)(s, { dismissAction: ex.i.PRIMARY }));
                              },
                              text: es.intl.string(es.t["+OtO4e"]),
                          }),
                      ],
                  }),
                  (0, l.jsx)(eh.M, { isTooltip: !0 }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: eC.FQ,
              children: [
                  (0, l.jsx)("img", {
                      width: 180,
                      className: eC.Sl,
                      src: "/assets/b755a73425584e3c.svg",
                      alt: "",
                      "aria-hidden": !0,
                  }),
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(ed.D, {
                              className: eC.R_,
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              children: es.intl.string(es.t.utqWEC),
                          }),
                          (0, l.jsx)(D.E, {
                              variant: "body-md/normal",
                              color: "text-default",
                              children: es.intl.string(es.t["+9etcM"]),
                          }),
                          (0, l.jsx)(D.E, {
                              className: eC.uN,
                              variant: "body-md/normal",
                              color: "text-default",
                              children: es.intl.format(es.t.Z0axjk, {}),
                          }),
                      ],
                  }),
              ],
          });
    return (0, l.jsxs)("div", {
        className: a()(eC.kL, { [eC.xY]: i }),
        children: [
            (0, l.jsx)(T.D, {
                className: eC.b,
                onClick: function () {
                    (0, C.Dr)(s, { dismissAction: ex.i.DISMISS });
                },
                children: (0, l.jsx)(eo.XSmallIcon, { size: "md", color: "currentColor" }),
            }),
            r,
        ],
    });
}
var eA = i(746080),
    ep = i(650583),
    eN = i(326005),
    ef = i(165648);
let ej = new Set([el.rbe.GUILD_FORUM, el.rbe.GUILD_MEDIA]),
    eE = new Set([el.rbe.GUILD_VOICE, el.rbe.GUILD_STAGE_VOICE]);
function ev(e) {
    let { guild: n, channel: t, onCategoryClick: s } = e,
        r = ea(n.id, t.id, t.id),
        d = er(n.id, t.id, t.id),
        o = (0, U.Ay)(t);
    return (0, l.jsxs)("div", {
        className: a()(eN.Fv, { [eN.d0]: "null" === t.id }),
        onContextMenu: function (e) {
            (0, H.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    i.e(926132),
                    i.e(491001),
                    i.e(382563),
                    i.e(150773),
                    i.e(412255),
                    i.e(63340),
                    i.e(430997),
                    i.e(935483),
                    i.e(379995),
                    i.e(591377),
                    i.e(35723),
                    i.e(566378),
                    i.e(732100),
                    i.e(515398),
                    i.e(22056),
                ]).then(i.bind(i, 914907));
                return (i) => (0, l.jsx)(e, { ...i, channel: t, guild: n });
            });
        },
        children: [
            (0, l.jsx)(D.E, {
                className: eN.O1,
                color: "text-strong",
                variant: "body-lg/medium",
                lineClamp: 1,
                children: o,
            }),
            "null" !== t.id &&
                !d &&
                (0, l.jsx)("div", {
                    children: (0, l.jsx)(L.d, {
                        label: es.intl.string(es.t.mSQwnW),
                        checked: r,
                        onChange: () => void (!d && s(n.id, t.id, t.id)),
                    }),
                }),
        ],
    });
}
let eb = t.memo(function () {
        return (0, l.jsx)("div", { className: eN.me });
    }),
    ey = t.memo(function (e) {
        let { index: n } = e;
        return (0, l.jsx)(D.E, { variant: "body-xs/normal", className: eN.Ks, children: "\xb7" }, `separator-${n}`);
    }),
    eI = t.memo(function (e) {
        var n, t;
        let s,
            {
                channel: d,
                category: o,
                guild: c,
                isFirstChannel: h,
                isLastChannel: m,
                onChannelClick: x,
                tooltipDirection: C = "right",
            } = e,
            { isSubscriptionGated: g } = (0, V.A)(d.id),
            p = ea(c.id, d.id, o.id),
            N = er(c.id, d.id, o.id),
            j =
                ((n = c.id),
                (t = o.id),
                (0, r.bG)([ee.Ay], () => {
                    if (null != t && ee.Ay.isChannelOptedIn(n, t, !0)) return es.intl.string(es.t.Lz94y1);
                })),
            E = (0, U.Ay)(d),
            v = (0, r.bG)([Y.A], () => Y.A.getActiveThreadCount(c.id, d.id)),
            b = (0, r.bG)([W.A], () => W.A.shouldIndicateNewChannel(c.id, d.id)),
            y =
                ((s = []),
                el.kvI.GUILD_THREADS_ONLY.has(d.type) &&
                    v >= 1 &&
                    s.push(
                        (0, l.jsx)(
                            D.E,
                            {
                                variant: "body-xs/normal",
                                className: eN.qy,
                                children: es.intl.format(es.t.z0qML2, { count: v }),
                            },
                            "thread-count",
                        ),
                    ),
                eE.has(d.type) ||
                    s.push(
                        (0, l.jsx)(
                            D.E,
                            { variant: "body-xs/normal", className: eN.qy, children: (0, A.YC)(d.id) },
                            "active",
                        ),
                    ),
                null != d.topic &&
                    d.topic.length > 0 &&
                    s.push(
                        (0, l.jsx)(
                            R.A,
                            {
                                className: ef.PT,
                                children: (0, l.jsx)(D.E, {
                                    className: eN.At,
                                    variant: "body-xs/normal",
                                    children: q.A.parseTruncatedTopic(d.topic, !0, { channelId: d.id }),
                                }),
                            },
                            "topic",
                        ),
                    ),
                [s.map((e, n) => [e, (0, l.jsx)(ey, { index: n }, `subtitle-separator-${n}`)])].flat(2).slice(0, -1));
        function I(e) {
            return (
                (e.stopPropagation(), ej.has(d.type) || e.shiftKey)
                    ? (0, Z.uh)(c.id, d.id)
                    : d.isGuildStageVoice() || d.isGuildVoice()
                      ? (0, z.av)(d)
                      : X.A.openChannelAsSidebar({
                            guildId: d.guild_id,
                            channelId: d.id,
                            baseChannelId: eA.VV.CHANNEL_BROWSER,
                            details: { type: K.kk.CHAT },
                        }),
                !0
            );
        }
        let S = es.intl.string(es.t.vetGQs);
        d.isGuildStageVoice() || d.isGuildVoice()
            ? (S = es.intl.string(es.t.VJlc0S))
            : d.isForumLikeChannel() && (S = es.intl.string(es.t["3xjX0U"]));
        let _ = N ? "text-muted" : "text-default",
            w = (0, G.r)(N ? O.A.colors.TEXT_MUTED : O.A.colors.TEXT_DEFAULT).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(M.m, {
                    text: j,
                    delay: 500,
                    position: C,
                    children: (0, l.jsxs)(T.D, {
                        className: a()(eN.WG, { [eN.Qn]: h, [eN.wp]: m, [eN.r9]: N }),
                        onClick: function (e) {
                            if (!N) return (e.stopPropagation(), x(c.id, d.id, o.id), !0);
                        },
                        onContextMenu: function (e) {
                            d.isGuildVocal()
                                ? (0, H.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          i.e(926132),
                                          i.e(893190),
                                          i.e(146652),
                                          i.e(491001),
                                          i.e(382563),
                                          i.e(947502),
                                          i.e(343266),
                                          i.e(965789),
                                          i.e(150773),
                                          i.e(309004),
                                          i.e(412255),
                                          i.e(63340),
                                          i.e(430997),
                                          i.e(935483),
                                          i.e(379995),
                                          i.e(544058),
                                          i.e(591377),
                                          i.e(35723),
                                          i.e(566378),
                                          i.e(256372),
                                          i.e(29542),
                                          i.e(419690),
                                          i.e(300619),
                                          i.e(465694),
                                          i.e(13107),
                                          i.e(248804),
                                          i.e(318663),
                                          i.e(599990),
                                          i.e(293340),
                                      ]).then(i.bind(i, 428631));
                                      return (n) => (0, l.jsx)(e, { ...n, channel: d, guild: c });
                                  })
                                : (0, H.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          i.e(926132),
                                          i.e(893190),
                                          i.e(146652),
                                          i.e(491001),
                                          i.e(382563),
                                          i.e(947502),
                                          i.e(343266),
                                          i.e(916758),
                                          i.e(965789),
                                          i.e(356664),
                                          i.e(150773),
                                          i.e(309004),
                                          i.e(412255),
                                          i.e(63340),
                                          i.e(430997),
                                          i.e(935483),
                                          i.e(741111),
                                          i.e(379995),
                                          i.e(544058),
                                          i.e(697367),
                                          i.e(591377),
                                          i.e(386594),
                                          i.e(35723),
                                          i.e(566378),
                                          i.e(745493),
                                          i.e(256372),
                                          i.e(536478),
                                          i.e(29542),
                                          i.e(588251),
                                          i.e(350695),
                                          i.e(248804),
                                          i.e(638114),
                                          i.e(122574),
                                          i.e(192218),
                                          i.e(730504),
                                          i.e(611036),
                                      ]).then(i.bind(i, 823255));
                                      return (n) => (0, l.jsx)(e, { ...n, channel: d, guild: c });
                                  });
                        },
                        children: [
                            (0, l.jsxs)("div", {
                                className: eN.yW,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: eN.HA,
                                        children: [
                                            (0, l.jsx)(F.gm, { channel: d, guild: c }),
                                            (0, l.jsx)(R.A, {
                                                className: eN.__invalid_name,
                                                children: (0, l.jsx)(D.E, {
                                                    className: eN.be,
                                                    variant: "body-md/medium",
                                                    lineClamp: 1,
                                                    color: _,
                                                    children: E,
                                                }),
                                            }),
                                            g ? (0, l.jsx)(B.A, { color: w, className: eN.PC }) : null,
                                            b
                                                ? (0, l.jsx)("div", {
                                                      className: eN.wD,
                                                      children: (0, l.jsx)(u.E, { type: "new", variant: "primary" }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                    (0, l.jsx)("div", { className: eN.Ze, children: y }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: eN.tN,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: eN.Kx,
                                        children: (0, l.jsx)(f.$, {
                                            size: "sm",
                                            variant: "overlay-primary",
                                            onClick: I,
                                            text: S,
                                            onKeyDown: function (e) {
                                                (e.key === ep.dh.ENTER || e.key === ep.dh.SPACE) &&
                                                    (e.preventDefault(), e.stopPropagation(), I(e));
                                            },
                                        }),
                                    }),
                                    (0, l.jsx)(P.P, { checked: p, disabled: N }),
                                ],
                            }),
                        ],
                    }),
                }),
                !m && (0, l.jsx)(eb, {}),
            ],
        });
    });
function eS(e) {
    var n, i;
    let s,
        { categories: o, guild: c, className: u, innerClassName: h, hasSidebar: m } = e,
        { onChannelClick: x } =
            ((n = c.id),
            (s = (0, r.bG)([ee.Ay], () => ee.Ay.getPendingChannelUpdates(n))),
            t.useEffect(() => (et(n), () => et(n)), [n]),
            t.useEffect(() => {
                null != s && (0, en.hp)(n, s);
            }, [n, s]),
            {
                onChannelClick: t.useCallback((e, n, i) => {
                    let l = ee.Ay.isChannelOptedIn(e, n),
                        t = n === i;
                    (!l && $.A.isCollapsed(i) && null != i && (0, Q.fh)(i),
                        (0, ei.cE)(e)
                            ? t
                                ? (0, ei.le)(e, { include: new Set([n]) })
                                : (0, ei.le)(e, { exclude: new Set([n]) })
                            : (0, en.zk)(e, n, !l, { section: el.JJy.CHANNEL_BROWSER }));
                }, []),
            }),
        g = (0, C.HX)(d.M.CHANNEL_BROWSER_NUX) ? 0 : -1,
        p = t.useCallback(
            (e) => {
                let { section: n } = e;
                if (0 === n && -1 === g) return null;
                let i = o._categories[n + g];
                return (0, l.jsx)(ev, { channel: i.channel, guild: c, onCategoryClick: x }, i.channel.id);
            },
            [o, c, g, x],
        ),
        N = t.useCallback(
            (e) => {
                let { section: n, row: i } = e;
                if (0 === n && -1 === g) return (0, l.jsx)(eg, { guild: c });
                let t = o._categories[n + g],
                    s = o[t.channel.id][i];
                return null == s
                    ? null
                    : (0, l.jsx)(
                          eI,
                          {
                              category: t.channel,
                              channel: s.channel,
                              guild: c,
                              isFirstChannel: 0 === i,
                              isLastChannel: o[t.channel.id].length - 1 === i,
                              tooltipDirection: m ? "right" : "top",
                              onChannelClick: x,
                          },
                          s.channel.id,
                      );
            },
            [o, c, g, m, x],
        ),
        f = ((i = c.id), (0, em.Xn)(i) ? 250 : 152),
        j = (0, A.zH)(c.id, o, 64, f);
    return (0, l.jsx)(
        k.Ei,
        {
            className: u,
            innerClassName: a()(h, eN.bv),
            sectionHeight: 48,
            rowHeight: (e) => j[e].rowHeight,
            renderSection: p,
            renderRow: N,
            sections: j.map((e) => e.rowCount),
        },
        "channel-browser-list",
    );
}
var e_ = i(530186);
function ew(e) {
    let { channelId: n } = e;
    return (0, l.jsx)(E.A, {
        sidebarType: E.X.ThreadSidebar,
        maxWidth: 600,
        children: (0, l.jsx)(v.A, { channelId: n, baseChannelId: eA.VV.CHANNEL_BROWSER }),
    });
}
function eO(e) {
    let { guildId: n } = e,
        [s, a] = t.useState(""),
        d = t.useRef(null),
        o = (0, r.bG)([S.A], () => S.A.getGuild(n)),
        c = (0, r.bG)([I.A], () => I.A.getChannels(n)),
        u = (0, r.bG)([y.A], () => y.A.getCategories(n)),
        h = (0, A.vh)(n, u, c, s),
        m = (0, r.bG)([_.A], () => _.A.canWithPartialContext(el.xBc.MANAGE_CHANNELS, { guildId: n })),
        x = (0, r.bG)([b.Ay], () => null != b.Ay.getCurrentSidebarChannelId(eA.VV.CHANNEL_BROWSER)),
        C = t.useCallback(() => a(""), [a]),
        g = t.useCallback(() => {
            (0, p.mM)(async () => {
                let { default: e } = await Promise.all([
                    i.e(778799),
                    i.e(637038),
                    i.e(507775),
                    i.e(524521),
                    i.e(358608),
                    i.e(640317),
                ]).then(i.bind(i, 410380));
                return (i) => (0, l.jsx)(e, { ...i, channelType: null, guildId: n });
            });
        }, [n]),
        E = t.useCallback(
            (e) => {
                e.key === ep.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), "" !== s ? C() : d.current?.blur());
            },
            [s, C],
        );
    return null == o
        ? null
        : (0, l.jsxs)("div", {
              className: e_.kw,
              children: [
                  (0, l.jsxs)("div", {
                      className: e_.wx,
                      children: [
                          (0, l.jsx)(N.I, {
                              ref: d,
                              query: s,
                              onChange: function (e) {
                                  ("" === s &&
                                      "" !== e &&
                                      w.default.track(el.HAw.SEARCH_STARTED, { search_type: "channel browser" }),
                                      a(e.toLowerCase()));
                              },
                              onClear: C,
                              onKeyDown: E,
                              placeholder: es.intl.string(es.t.s5MnmC),
                          }),
                          m
                              ? (0, l.jsx)(f.$, {
                                    icon: j.PlusSmallIcon,
                                    onClick: g,
                                    text: es.intl.string(es.t.CumH4u),
                                })
                              : null,
                      ],
                  }),
                  (0, l.jsx)(eS, { className: e_.T, channels: c, categories: h, guild: o, hasSidebar: x }),
              ],
          });
}
var eR = i(202776),
    eD = i(462887),
    eL = i(778712),
    eG = i(97808),
    eM = i(545442),
    eT = i(516521),
    eP = i(334738),
    ek = i(241524),
    eH = i(964486),
    eU = i(736653),
    eV = i(793574),
    eB = i(562819),
    eF = i(215689),
    eq = i(164956),
    eW = i(713804),
    eZ = i(676608),
    eX = i(527212),
    eK = i(62199),
    ez = i(917445),
    eY = i(696451),
    eJ = i(317525),
    eQ = i(218461),
    e$ = i(287809),
    e0 = i(403362),
    e1 = i(427262),
    e4 = i(253400),
    e5 = i(669953),
    e6 = i(817818),
    e9 = i(591552),
    e3 = i(961973),
    e2 = i(435558),
    e8 = i.n(e2),
    e7 = i(665260),
    ne = i(355097);
function nn(e) {
    J.h.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: e });
}
let ni = {};
function nl(e) {
    let n = (0, r.bG)([e9.A], () => e9.A.getPendingResponseOptions(e) ?? ni, [e]);
    return (
        t.useEffect(() => (nn(e), () => nn(e)), [e]),
        t.useEffect(() => {
            null != n && 0 !== Object.keys(n).length && e5.A.updateOnboardingResponses(e);
        }, [e, n]),
        {
            handleSelectOption: t.useCallback(
                (n, i, l) => {
                    let t = e9.A.getOnboardingResponses(e),
                        { addedRoleIds: s, removedRoleIds: a } = (function (e, n, i, l) {
                            let t = [],
                                s = [];
                            if (e.singleSelect && i) {
                                let i = e.options.find((e) => l.includes(e.id));
                                ((t = e8().difference(n.roleIds ?? [], i?.roleIds ?? [])),
                                    (s = e8().difference(i?.roleIds ?? [], n.roleIds ?? [])));
                            } else if (i) ((t = n.roleIds ?? []), (s = []));
                            else {
                                let i = e.options.filter((e) => l.includes(e.id)),
                                    a = i.filter((e) => n.id !== e.id),
                                    r = i
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(e0.Vq),
                                    d = a
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(e0.Vq);
                                ((t = []), (s = e8().difference(r, d)));
                            }
                            return { addedRoleIds: t, removedRoleIds: s };
                        })(n, i, l, t),
                        { addedChannelIds: r, removedChannelIds: d } = (function (e) {
                            let { guildId: n, prompt: i, option: l, selected: t, responses: s } = e,
                                a = [],
                                r = [];
                            if (i.singleSelect && t) {
                                let e = i.options.find((e) => s.includes(e.id));
                                ((a = e8().difference(l.channelIds ?? [], e?.channelIds ?? [])),
                                    (r = e8().difference(e?.channelIds ?? [], l.channelIds ?? [])));
                            } else if (t) ((a = l.channelIds ?? []), (r = []));
                            else {
                                let e = i.options.filter((e) => s.includes(e.id)),
                                    n = e.filter((e) => l.id !== e.id),
                                    t = e
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(e0.Vq),
                                    d = n
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(e0.Vq);
                                ((a = []), (r = e8().difference(t, d)));
                            }
                            return (
                                (0, ei.cE)(n) && a.push(...e9.A.getDefaultChannelIds(n)),
                                { addedChannelIds: a, removedChannelIds: r }
                            );
                        })({ guildId: e, prompt: n, option: i, selected: l, responses: t }),
                        o = r.reduce((n, i) => {
                            let l = ee.Ay.getChannelIdFlags(e, i);
                            return ((n[i] = { flags: (0, e7.lA)(l, ne.vv.OPT_IN_ENABLED, !0) }), n);
                        }, {}),
                        c = d.reduce((n, i) => {
                            let l = ee.Ay.getChannelIdFlags(e, i);
                            return ((n[i] = { flags: (0, e7.lA)(l, ne.vv.OPT_IN_ENABLED, !1) }), n);
                        }, {}),
                        u = { ...o, ...c };
                    (e5.A.selectOption(e, n.id, i.id, l),
                        J.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId: e, overrides: u }),
                        e5.A.updateRolesLocal(e, s, a));
                },
                [e],
            ),
        }
    );
}
var nt = i(218785),
    ns = i(164636),
    na = i(528275),
    nr = i(953727);
function nd(e) {
    let { width: n = 120, height: i = 80, backgroundColor: t, foregroundColor: s, ...a } = e;
    return (0, l.jsxs)("svg", {
        ...(0, nr.A)(a),
        width: n,
        height: i,
        viewBox: "0 0 120 80",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, l.jsx)("circle", { cx: "60", cy: "40", r: "32", fill: t }),
            (0, l.jsx)("path", {
                d: "M75.0832 29.8546L75.0835 29.8548C75.1362 29.884 75.1683 29.9391 75.1683 29.9983C75.1683 30.5369 75.1197 37.4409 73.0784 44.1629C71.005 50.9907 67.1615 56.8317 60.0016 56.8317C52.8418 56.8317 48.9982 50.9907 46.9248 44.1629C44.8836 37.4409 44.835 30.5369 44.835 29.9983C44.835 29.9391 44.8671 29.884 44.9197 29.8548L44.9201 29.8546L59.919 21.5218C59.9191 21.5218 59.9193 21.5217 59.9194 21.5216C59.9718 21.4928 60.0316 21.4928 60.0839 21.5217C60.084 21.5217 60.0842 21.5218 60.0843 21.5218L75.0832 29.8546ZM52.2516 46.6667V48.1667H53.7516H66.2516H67.7516V46.6667C67.7516 44.43 67.0409 42.4584 65.6254 41.0429C64.7687 40.1861 63.7082 39.5876 62.5086 39.2485C64.3809 38.3237 65.6683 36.3949 65.6683 34.165C65.6683 31.0349 63.1317 28.4983 60.0016 28.4983C56.8715 28.4983 54.335 31.0349 54.335 34.165C54.335 36.3949 55.6224 38.3237 57.4947 39.2485C56.295 39.5876 55.2346 40.1861 54.3778 41.0429C52.9623 42.4584 52.2516 44.43 52.2516 46.6667Z",
                fill: s,
                stroke: s,
                strokeWidth: "3",
            }),
            (0, l.jsx)("path", {
                d: "M103.67 1.80634C103.67 0.808724 102.862 0 101.864 0C100.866 0 100.058 0.808724 100.058 1.80634V3.64278C100.058 4.64039 100.866 5.44911 101.864 5.44911C102.862 5.44911 103.67 4.64039 103.67 3.64278V1.80634Z",
                fill: "#58F287",
            }),
            (0, l.jsx)("path", {
                d: "M103.67 16.3574C103.67 15.3597 102.862 14.551 101.864 14.551C100.866 14.551 100.058 15.3597 100.058 16.3574V18.1938C100.058 19.1914 100.866 20.0001 101.864 20.0001C102.862 20.0001 103.67 19.1914 103.67 18.1938V16.3574Z",
                fill: "#58F287",
            }),
            (0, l.jsx)("path", {
                d: "M110.194 11.8412C111.191 11.8412 112 11.0325 112 10.0349C112 9.03724 111.191 8.22852 110.194 8.22852H108.357C107.36 8.22852 106.551 9.03724 106.551 10.0349C106.551 11.0325 107.36 11.8412 108.357 11.8412H110.194Z",
                fill: "#58F287",
            }),
            (0, l.jsx)("path", {
                d: "M95.6429 11.7413C96.6405 11.7413 97.4492 10.9326 97.4492 9.935C97.4492 8.93739 96.6405 8.12866 95.6429 8.12866H93.8064C92.8088 8.12866 92.0001 8.93739 92.0001 9.935C92.0001 10.9326 92.8088 11.7413 93.8064 11.7413H95.6429Z",
                fill: "#58F287",
            }),
            (0, l.jsx)("path", {
                d: "M19.1501 74.4573L23.3147 73.0684C23.5192 72.9747 23.6925 72.8241 23.814 72.6347C23.9354 72.4454 24 72.225 24 72C24 71.775 23.9354 71.5546 23.814 71.3653C23.6925 71.1759 23.5192 71.0253 23.3147 70.9316L19.1501 69.5427C18.8657 69.4142 18.6378 69.1862 18.5094 68.9016L17.0145 64.7348C16.9442 64.521 16.8083 64.3349 16.6262 64.203C16.444 64.071 16.2249 64 16 64C15.7751 64 15.556 64.071 15.3738 64.203C15.1917 64.3349 15.0558 64.521 14.9855 64.7348L13.4906 68.9016C13.3622 69.1862 13.1343 69.4142 12.8499 69.5427L8.68528 70.9316C8.4808 71.0253 8.30752 71.1759 8.18604 71.3653C8.06457 71.5546 8 71.775 8 72C8 72.225 8.06457 72.4454 8.18604 72.6347C8.30752 72.8241 8.4808 72.9747 8.68528 73.0684L12.8499 74.4573C13.0011 74.5032 13.1387 74.5858 13.2505 74.6976C13.3622 74.8094 13.4447 74.9471 13.4906 75.0984L14.9855 79.2652C15.0558 79.479 15.1917 79.6651 15.3738 79.797C15.556 79.929 15.7751 80 16 80C16.2249 80 16.444 79.929 16.6262 79.797C16.8083 79.6651 16.9442 79.479 17.0145 79.2652L18.5094 75.0984C18.5553 74.9471 18.6378 74.8094 18.7495 74.6976C18.8613 74.5858 18.9989 74.5032 19.1501 74.4573Z",
                fill: "#FFD01A",
            }),
        ],
    });
}
var no = i(164048),
    nc = i(839447),
    nu = i(539916),
    nh = i(790782),
    nm = i(891927),
    nx = i(999900);
let nC = eL._3.SIZE_80,
    ng = "required";
function nA(e) {
    let { guild: n, user: i } = e,
        { avatarSrc: t, eventHandlers: s, isAvatarAnimating: d } = (0, eK.A)({ user: i, guildId: n.id, size: 120 }),
        { avatarDecorationSrc: o } = (0, eF.A)({ user: i, size: (0, eB.Te)(nC), onlyAnimateOnHoverOrFocus: !d }),
        c = (0, r.bG)([eY.Ay], () => eY.Ay.getSelfMember(n.id)),
        u = (0, r.yK)([eY.Ay], () => eY.Ay.getMemberRoleWithPendingUpdates(n.id, i.id)),
        h = (0, r.bG)([eJ.A], () => eJ.A.getSortedRoles(n.id)),
        m = (0, eZ.Ay)(n.id, i.id),
        x = h.filter((e) => u.includes(e.id)),
        C = (0, eX.Ay)(i.id, n.id);
    (0, eH.Ay)(() => {
        (0, ez.A)(i.id, i.getAvatarURL(n.id, (0, eL.FT)(nC)), { guildId: n.id });
    });
    let g = (0, eW.parseBioReact)(C?.bio),
        A = e4.Ay.getEnableHardwareAcceleration() ? eG.Js : eG.eu;
    return (0, l.jsxs)("div", {
        className: nm.ME,
        children: [
            (0, l.jsx)(ed.D, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: es.intl.string(es.t.diTbF8),
            }),
            (0, l.jsx)(D.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                children: es.intl.string(es.t["+8um3M"]),
            }),
            (0, l.jsxs)("div", {
                className: nm.Kq,
                children: [
                    (0, l.jsx)("div", {
                        ...s,
                        children: (0, l.jsx)(A, { src: t, avatarDecoration: o, size: nC, "aria-label": i.username }),
                    }),
                    (0, l.jsx)(D.E, {
                        variant: "body-lg/medium",
                        color: "text-strong",
                        className: nm.Xh,
                        children: c?.nick ?? e1.Ay.getName(i),
                    }),
                    (0, l.jsx)(D.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: a()(ef.PT, nm.z3),
                        children: g,
                    }),
                    null != x &&
                        x.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: nm.me }),
                                (0, l.jsx)(D.E, {
                                    variant: "body-xs/semibold",
                                    color: "text-muted",
                                    className: nm.DD,
                                    children: es.intl.string(es.t["LPJmL/"]),
                                }),
                                (0, l.jsx)("div", {
                                    className: nm.Ot,
                                    children: x?.map((e) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: nm.JC,
                                                children: [
                                                    (0, l.jsx)(eM.R, {
                                                        color: e.colorString ?? el.TpD,
                                                        colors: m ? e.colorStrings : null,
                                                        className: nm.m4,
                                                    }),
                                                    (0, l.jsx)(D.E, {
                                                        variant: "body-xs/medium",
                                                        color: "text-strong",
                                                        children: e.name,
                                                    }),
                                                ],
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function np(e) {
    let { prompt: n, guild: i } = e,
        [s, d] = t.useState(null),
        [o, c] = t.useState(new Set()),
        h = n?.options?.filter((e) => o.has(e.id)),
        m = (0, e3.a)(h),
        x = (0, e3.vV)(h),
        C = (0, r.yK)([e9.A], () => e9.A.getOnboardingResponsesForPrompt(i.id, n.id)),
        { helpText: g, helpTextAdditional: A } = (0, nt.W)({
            guild: i,
            prompt: n,
            selectedRoleIds: m,
            selectedChannelIds: x,
            itemHook: (e, n) => (0, l.jsx)(D.E, { variant: "body-xs/medium", color: "text-strong", children: e }, n),
        }),
        { handleSelectOption: p } = nl(i.id),
        N = n.options.map((e) => ({ value: e.id, ...e })),
        f = n.options.filter((e) => C.includes(e.id)).map((e) => e.id);
    return (0, l.jsxs)("div", {
        className: nm.J1,
        "data-new": n.isNew,
        children: [
            n.isNew &&
                (0, l.jsx)("div", { className: nm.Ad, children: (0, l.jsx)(u.E, { type: "new", variant: "primary" }) }),
            (0, l.jsxs)(ed.D, {
                className: nm.Hi,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: [
                    n.title,
                    n.required
                        ? (0, l.jsx)("span", { className: a()(nm.mw, { [nm.So]: s?.type === ng }), children: "*" })
                        : null,
                ],
            }),
            (0, l.jsx)(nc.A, {
                options: N,
                value: f,
                onChange: function (e) {
                    let i = e.find((e) => !C.includes(e.id)),
                        l = e.map((e) => e.id);
                    if (null != i)
                        (p(n, i, !0), n.singleSelect && n.options.forEach((e) => o.delete(e.id)), o.add(i.id));
                    else {
                        let e = C.filter((e) => !l.includes(e)),
                            i = n.options.filter((n) => e.includes(n.id));
                        if (C.length <= i.length && n.required) return void d({ type: ng });
                        i.forEach((e) => {
                            (p(n, e, !1), o.delete(e.id));
                        });
                    }
                    (c(new Set(o)), d(null));
                },
                canBeNew: !n.isNew,
            }),
            (0, l.jsxs)(D.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                className: nm.BK,
                children: [g, " ", A],
            }),
        ],
    });
}
function nN(e) {
    let { guild: n } = e,
        i = (0, r.bG)([e9.A], () => e9.A.getConnections(n.id));
    return 0 === i.length
        ? null
        : (0, l.jsxs)("div", {
              className: nm.J1,
              children: [
                  (0, l.jsx)(ed.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: es.intl.string(es.t.eDVMrA),
                  }),
                  (0, l.jsx)(D.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: es.intl.string(es.t.BozOXu),
                  }),
                  (0, l.jsx)("div", {
                      className: nm.lA,
                      children: i.map((e, i) =>
                          (0, l.jsx)(na.A, { connection: e, guildId: n.id, location: eV.A.CHANNELS_AND_ROLES }, i),
                      ),
                  }),
              ],
          });
}
function nf(e) {
    let { prompt: n, guild: i } = e,
        [s, d] = t.useState(null),
        [o, c] = t.useState(new Set()),
        h = n?.options?.filter((e) => o.has(e.id)),
        m = (0, e3.a)(h),
        x = (0, e3.vV)(h),
        C = (0, r.yK)([e9.A], () => e9.A.getOnboardingResponsesForPrompt(i.id, n.id)),
        { helpText: g, helpTextAdditional: A } = (0, nt.W)({
            guild: i,
            prompt: n,
            selectedRoleIds: m,
            selectedChannelIds: x,
            itemHook: (e, n) => (0, l.jsx)(D.E, { variant: "body-xs/medium", color: "text-strong", children: e }, n),
        }),
        { handleSelectOption: p } = nl(i.id);
    return (0, l.jsxs)("div", {
        className: nm.J1,
        "data-new": n.isNew,
        children: [
            n.isNew &&
                (0, l.jsx)("div", { className: nm.Ad, children: (0, l.jsx)(u.E, { type: "new", variant: "primary" }) }),
            (0, l.jsxs)(ed.D, {
                className: nm.Hi,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: [
                    n.title,
                    n.required
                        ? (0, l.jsx)("span", { className: a()(nm.mw, { [nm.So]: s?.type === ng }), children: "*" })
                        : null,
                ],
            }),
            (0, l.jsx)("div", {
                className: nm.vS,
                children: n.options.map((e) =>
                    (0, l.jsx)(
                        no.A,
                        {
                            hideMemberCount: !0,
                            guildId: i.id,
                            option: e,
                            onSelect: (i) => {
                                !i && 1 === C.length && n.required
                                    ? d({ type: ng })
                                    : (p(n, e, i ?? !1),
                                      n.singleSelect && i && n.options.forEach((e) => o.delete(e.id)),
                                      i ? o.add(e.id) : o.delete(e.id),
                                      c(new Set(o)),
                                      d(null));
                            },
                            selected: C.includes(e.id),
                            canBeNew: !n.isNew,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, l.jsxs)(D.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                className: nm.BK,
                children: [g, " ", A],
            }),
        ],
    });
}
function nj(e) {
    let n,
        { guildId: i, onBrowseChannels: s } = e,
        d = (0, eD.M)((0, eU.Ay)()),
        o = (0, r.bG)([S.A], () => S.A.getGuild(i)),
        c = (0, r.bG)([e$.default], () => e$.default.getCurrentUser()),
        u = (0, ek.A)("(min-width: 1344px)") && null != c,
        h = t.useCallback(() => {
            ((0, Z.pX)(el.BVt.CHANNEL(i, eA.VV.CHANNEL_BROWSER)), s?.());
        }, [i, s]),
        m = (0, r.bG)([eQ.Ay], () => eQ.Ay.hasUnread(i, nh.P.GUILD_ONBOARDING_QUESTION)),
        x = o?.latestOnboardingQuestionId,
        {
            onboardingPromptsRaw: C,
            newOnboardingPrompts: g,
            onboardingPromptsWithNewAnswers: A,
            newAnswersCount: p,
            onboardingPrompts: N,
        } = ((n = (0, ns.yK)([e9.A], () => e9.A.getEnabledOnboardingPrompts(i))),
        t.useMemo(() => {
            let e = 0,
                i = [],
                l = [],
                t = [],
                s = [];
            for (var a = 0; a < n.length; a++) {
                let r = n[a];
                r.isNew
                    ? i.push(r)
                    : r.hasNewAnswers
                      ? (l.push(r), (e += r.options.filter((e) => e.isUnseen).length))
                      : r.inOnboarding
                        ? s.push(r)
                        : t.push(r);
            }
            return {
                onboardingPromptsRaw: n,
                newOnboardingPrompts: i,
                onboardingPromptsWithNewAnswers: l,
                newAnswersCount: e,
                onboardingPrompts: t.concat(s),
            };
        }, [n]));
    (t.useEffect(() => {
        o?.id == null || (!eq.A.isFullServerPreview(o.id) && (e9.A.shouldFetchPrompts(o.id) || m) && (0, e6.jx)(o.id));
    }, [o?.id, m, x]),
        t.useEffect(() => {
            if (o?.id != null && !eq.A.isFullServerPreview(o.id))
                return () => {
                    ((0, eP.hK)(o.id, nh.P.GUILD_ONBOARDING_QUESTION, e9.A.ackIdForGuild(o.id)),
                        e5.A.updateOnboardingResponses(o.id));
                };
        }, [o?.id]));
    let f = t.useCallback(
        (e) => {
            if (null == o) return null;
            switch (e.type) {
                case nu.ME.MULTIPLE_CHOICE:
                    return (0, l.jsx)(nf, { prompt: e, guild: o }, e.id);
                case nu.ME.DROPDOWN:
                    return (0, l.jsx)(np, { prompt: e, guild: o }, e.id);
                default:
                    (0, e0.xb)(e.type);
            }
        },
        [o],
    );
    if (null == o) return null;
    if (0 === C.length) {
        let e = d ? O.A.unsafe_rawColors.PRIMARY_300.css : O.A.unsafe_rawColors.PRIMARY_500.css,
            n = d ? O.A.unsafe_rawColors.PRIMARY_700.css : O.A.unsafe_rawColors.PRIMARY_230.css;
        return (0, l.jsx)("div", {
            className: a()(nx.Qs, nm.Zc),
            children: (0, l.jsxs)("div", {
                className: nm.do,
                children: [
                    (0, l.jsx)(nd, { className: nm.Dw, foregroundColor: e, backgroundColor: n }),
                    (0, l.jsx)(ed.D, {
                        className: nm.jU,
                        variant: "heading-sm/semibold",
                        children: es.intl.string(es.t.leKHQz),
                    }),
                    (0, l.jsx)(D.E, {
                        variant: "body-sm/medium",
                        children: es.intl.format(es.t["jH+ktB"], { onBrowseChannels: h }),
                    }),
                ],
            }),
        });
    }
    return (0, l.jsxs)(eT.Ch, {
        className: nm.XG,
        fade: !0,
        children: [
            (0, l.jsxs)("div", {
                className: nm.kw,
                children: [
                    (g.length > 0 || A.length > 0) &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", {
                                    children: (0, l.jsx)(ed.D, {
                                        variant: "heading-sm/semibold",
                                        color: "text-strong",
                                        children: es.intl.format(es.t.iB5Gqe, { count: g.length + p }),
                                    }),
                                }),
                                g.map(f),
                                A.map(f),
                                (0, l.jsx)("div", { className: nm.DY }),
                            ],
                        }),
                    N.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(ed.D, {
                                            variant: "heading-sm/semibold",
                                            color: "text-strong",
                                            children: es.intl.format(es.t["8IV8K9"], { count: N.length }),
                                        }),
                                        (0, l.jsx)(D.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: es.intl.string(es.t.Ecz7T9),
                                        }),
                                    ],
                                }),
                                N.map(f),
                            ],
                        }),
                    (0, l.jsx)(nN, { guild: o }),
                ],
            }),
            u && (0, l.jsx)(nA, { guild: o, user: c }),
        ],
    });
}
var nE = i(675498);
function nv(e) {
    let { guild: n } = e,
        i = (0, eR.A)(n);
    t.useEffect(() => {
        (0, C.Dr)(d.M.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: ex.i.DISMISS });
    });
    let s = i
            ? es.intl.formatToPlainString(es.t.uqZgYe, { guildName: n.name })
            : es.intl.formatToPlainString(es.t.velJea, { guildName: n.name }),
        a = i ? es.intl.string(es.t.h9mGOP) : es.intl.string(es.t.et6wav);
    return (
        (0, x.HU)({ location: s }),
        (0, l.jsxs)(g.A, {
            className: nE.wx,
            innerClassname: nE.MU,
            hideSearch: !0,
            channelId: eA.VV.CUSTOMIZE_COMMUNITY,
            guildId: n.id,
            children: [
                (0, l.jsx)(g.A.Icon, { icon: o.ChannelListMagnifyingGlassIcon, "aria-hidden": !0 }),
                (0, l.jsx)(g.A.Title, { children: a }),
            ],
        })
    );
}
function nb(e) {
    let { guildId: n, selectedSection: i } = e,
        s = (0, r.bG)([S.A], () => S.A.getGuild(n)),
        d = (0, eR.A)(s),
        [o, x] = t.useState(i ?? nu.qC.CUSTOMIZE);
    (t.useEffect(() => {
        null != i && x(i);
    }, [i]),
        t.useEffect(() => {
            d || o !== nu.qC.CUSTOMIZE || x(nu.qC.BROWSE);
        }, [d, o]));
    let C = (0, r.bG)([b.Ay], () => b.Ay.getCurrentSidebarChannelId(eA.VV.CHANNEL_BROWSER)),
        g = null != C && o === nu.qC.BROWSE,
        p = (0, m.f4)("ChannelsAndRolesPage"),
        N = (0, r.bG)([W.A], () => W.A.getNewChannelIds(n).size > 0),
        f = (0, A.RD)(n);
    return null == s
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(nx.TE, nE.TE, { [nx.js]: g && !p }),
                      children: [
                          (0, l.jsx)(nv, { guild: s }),
                          (0, l.jsxs)("div", {
                              className: a()(nx.Qs, nE.kL),
                              children: [
                                  d &&
                                      (0, l.jsxs)(c.V, {
                                          className: nE.$H,
                                          type: "top",
                                          look: "brand",
                                          selectedItem: o,
                                          onItemSelect: (e) => x(e),
                                          children: [
                                              (0, l.jsx)(
                                                  c.V.Item,
                                                  {
                                                      className: nE.YU,
                                                      id: nu.qC.CUSTOMIZE,
                                                      children: es.intl.string(es.t.H2cICW),
                                                  },
                                                  nu.qC.CUSTOMIZE,
                                              ),
                                              (0, l.jsxs)(
                                                  c.V.Item,
                                                  {
                                                      className: nE.YU,
                                                      id: nu.qC.BROWSE,
                                                      "aria-label": es.intl.string(es.t.et6wav),
                                                      children: [
                                                          es.intl.string(es.t.et6wav),
                                                          N
                                                              ? (0, l.jsx)(u.E, { type: "new", variant: "primary" })
                                                              : (0, l.jsx)(h.hV, {
                                                                    count: f,
                                                                    disableColor: !0,
                                                                    className: nE.Do,
                                                                }),
                                                      ],
                                                  },
                                                  nu.qC.BROWSE,
                                              ),
                                          ],
                                      }),
                                  (function () {
                                      switch (o) {
                                          case nu.qC.CUSTOMIZE:
                                              return (0, l.jsx)(nj, {
                                                  guildId: n,
                                                  onBrowseChannels: () => x(nu.qC.BROWSE),
                                              });
                                          case nu.qC.BROWSE:
                                          default:
                                              return (0, l.jsx)(eO, { guildId: n });
                                      }
                                  })(),
                              ],
                          }),
                      ],
                  }),
                  g && (0, l.jsx)(ew, { channelId: C }),
              ],
          });
}
