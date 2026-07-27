n.r(t), n.d(t, { default: () => sm });
var s,
    a,
    l,
    i = n(627968),
    r = n(64700),
    d = n(503698),
    c = n.n(d),
    o = n(484030),
    u = n(873298),
    h = n(305866),
    g = n(707554),
    m = n(756377),
    A = n(284009),
    f = n.n(A),
    x = n(562708),
    p = n(837381),
    E = n(17928),
    j = n(866665),
    N = n(689175),
    S = n(695366),
    y = n(661531),
    C = n(297264),
    R = n(825484),
    I = n(408278),
    v = n(789645),
    _ = n(22231),
    M = n(99677),
    D = n(442433),
    L = n(493336),
    O = n(928039),
    b = n(139286),
    T = n(187322),
    k = n(939249),
    G = n(320448),
    F = n(778712),
    U = n(97808),
    w = n(812993),
    H = n(834730),
    P = n(406810),
    K = n(397244),
    B = n(714114),
    z = n(394871),
    X = n(571694),
    Y = n(47167),
    J = n(713654),
    V = n(598104),
    Z = n(548118),
    $ = n(616356),
    q = n(734057),
    W = n(71393),
    Q = n(290863),
    ee = n(568548),
    et = n(287809),
    en = n(650583),
    es = n(375708),
    ea = n(842971);
let el = { top: 8, bottom: 8, left: -4, right: -4 };
function ei(e) {
    let { channel: t, children: n, onClick: s, collapsed: a = !1, mentionCount: l, onToggleCollapse: r, itemId: d } = e,
        o = (0, p.rm)(d);
    return (0, i.jsx)(T.vN, {
        offset: el,
        children: (0, i.jsxs)("div", {
            className: c()(ea.ZO, { [ea.yZ]: a }),
            ...o,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
                if ((e.key === en.dh.ENTER || e.key === en.dh.SPACE) && e.target === e.currentTarget) {
                    e.preventDefault(), s(e);
                    return;
                }
                null != r && ((e.key === en.dh.ARROW_RIGHT && a) || (e.key === en.dh.ARROW_LEFT && !a)) && r();
            },
            children: [
                (0, i.jsx)(k.D, {
                    className: ea.YT,
                    onClick: s,
                    tabIndex: -1,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(er, { channel: t }),
                }),
                (0, i.jsx)(G._, { className: ea.ai, size: "xxs" }),
                (0, i.jsx)(ed, { channel: t, onClick: s, mentionCount: l }),
                n,
            ],
        }),
    });
}
function er(e) {
    let { channel: t } = e,
        n = (0, E.bG)([W.A], () => W.A.getGuild(t.guild_id));
    return null != n
        ? (0, i.jsx)(Z.Ay, { className: ea.Kk, guild: n, size: Z.Ay.Sizes.SMALL, showTooltip: !0, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, i.jsx)(V.A, { channel: t, size: F._3.SIZE_32, "aria-hidden": !0 })
          : (0, i.jsx)(U.eu, { size: F._3.SIZE_32, src: (0, X.Y)(t), "aria-hidden": !0 });
}
function ed(e) {
    let { channel: t, onClick: n, mentionCount: s } = e,
        a = (0, E.bG)([W.A], () => W.A.getGuild(t.guild_id)),
        l = (0, Y.Ay)(t, !1),
        r = (0, E.bG)([ee.Ay], () => ee.Ay.getIsMentionLowImportance(t.id)),
        d = (0, E.bG)([q.A], () => q.A.getChannel(t.parent_id)),
        o = (0, Y.Ay)(d),
        u = (0, J.gU)(t, a);
    return (0, i.jsxs)("div", {
        className: ea.yP,
        children: [
            (0, i.jsx)(C.D, {
                variant: "text-md/semibold",
                color: "text-default",
                className: ea.lz,
                children: (0, i.jsxs)(k.D, {
                    className: ea.Ru,
                    onClick: n,
                    children: [
                        t.isPrivate() || null == u ? null : (0, i.jsx)(u, { className: ea.j1, size: "xxs" }),
                        (0, i.jsx)("span", { className: ea.je, children: l }),
                        null != s && s > 0
                            ? (0, i.jsx)("div", {
                                  className: ea.qS,
                                  children: (0, i.jsx)(w.hV, {
                                      count: s,
                                      color: r
                                          ? y.A.colors.BACKGROUND_MOD_STRONG.css
                                          : y.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, i.jsx)(H.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: t.isMultiUserDM()
                    ? es.intl.formatToPlainString(es.t.CxSA5N, { members: t.recipients.length + 1 })
                    : t.isPrivate()
                      ? (0, i.jsx)(ec, { channel: t })
                      : (0, i.jsx)(k.D, {
                            className: c()(ea.je, ea.J5),
                            onClick: n,
                            children: null == d ? a?.name : `${a?.name} \u{203A} ${o}`,
                        }),
            }),
        ],
    });
}
function ec(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: a,
            applicationStream: l,
        } = (0, E.cf)([et.default, Q.A, $.A], () => {
            let e = et.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? Q.A.getStatus(e.id) : null,
                activities: null != e ? Q.A.getActivities(e.id) : null,
                applicationStream: null != e ? $.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, B.Ay)({ userId: n?.id });
    return (0, K.A)({ activities: a, status: s, applicationStream: l, voiceChannel: r })
        ? (0, i.jsx)(z.A, { user: n, activities: a, applicationStream: l, voiceChannel: r, hideTooltip: !0 })
        : null;
}
function eo(e) {
    let { type: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: c()(ea.h5, { [ea.z3]: "error" === t, [ea.kX]: "success" === t, [ea.qb]: "normal" === t }),
        children: [
            "error" === t ? (0, i.jsx)(S.E, { size: "xs" }) : (0, i.jsx)(P.O, { size: "xs" }),
            (0, i.jsx)(H.E, {
                variant: "text-xs/medium",
                color: "error" === t ? "text-feedback-critical" : "text-muted",
                children: n,
            }),
        ],
    });
}
var eu = n(642213),
    eh = n(636922),
    eg = n(885386),
    em = n(576705),
    eA = n(927813),
    ef = n(164684),
    ex = n(704456),
    ep = n(85109);
n(321073);
var eE = n(403362),
    ej = n(216623);
function eN(e) {
    switch (e) {
        case m.Yf.BOOKMARK:
            return ep.A.getMessageBookmarks();
        case m.Yf.REMINDER:
            return ep.A.getMessageReminders();
        default:
            return ep.A.getSavedMessages();
    }
}
function eS(e) {
    return eN(e).map((e) => e.saveData);
}
var ey = n(403581),
    eC = n(862482),
    eR = n(192308),
    eI = n(404374),
    ev = n(725807),
    e_ = n(428262),
    eM = n(226017),
    eD = n(652215),
    eL = n(202541),
    eO = n(584906),
    eb = n(936037);
function eT(e) {
    let { type: t } = e;
    return (0, eM.A)()
        ? (0, i.jsx)("div", {
              className: eO.do,
              children: (0, i.jsxs)("div", {
                  className: eO.U6,
                  children: [
                      (0, i.jsx)("img", { src: "/assets/29e2479161d09050.png", className: eO.Sl, alt: "" }),
                      (0, i.jsx)(C.D, {
                          className: eO.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: es.intl.string(t === m.Yf.REMINDER ? es.t.AE4yja : es.t.erEf2g),
                      }),
                      (0, i.jsx)(H.E, {
                          variant: "text-md/medium",
                          color: "text-muted",
                          children: es.intl.string(t === m.Yf.REMINDER ? es.t.fRSRc0 : es.t.NaRCXT),
                      }),
                  ],
              }),
          })
        : (0, i.jsxs)("div", {
              className: eO.do,
              children: [
                  (0, i.jsxs)("div", {
                      className: eO.U6,
                      children: [
                          (0, i.jsx)("img", { src: eb, className: eO.Sl, alt: "" }),
                          (0, i.jsx)(C.D, {
                              className: eO.wx,
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: es.intl.string(es.t.w4DRbZ),
                          }),
                          (0, i.jsx)(H.E, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: es.intl.string(es.t.F6u3E3),
                          }),
                      ],
                  }),
                  (0, i.jsx)(ek, {}),
              ],
          });
}
function ek() {
    let e = (0, e_.Dd)(eL.PremiumTypes.TIER_2),
        t = r.useCallback(
            () =>
                (0, eR.openModalLazy)(async () => {
                    let { default: e } = await n.e("22540").then(n.bind(n, 530951));
                    return (t) => (0, i.jsx)(e, { ...t });
                }),
            [],
        ),
        s = es.intl.format(es.t.qXh3fo, { nitroTierName: e, onClick: t });
    return (0, i.jsxs)("div", {
        className: eO.Zj,
        children: [
            (0, i.jsx)(ey.t, { size: "md", color: eI.k0.PREMIUM_TIER_2 }),
            (0, i.jsx)(H.E, { variant: "text-xs/medium", color: "text-strong", className: eO.tD, children: s }),
            (0, i.jsx)(ev.A, {
                className: eO.Oy,
                size: eC.lO.TINY,
                shinyButtonClassName: eO.Oy,
                subscriptionTier: eL.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: eD.JJy.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
function eG(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: a } = (0, ex.Ce)({ dueAt: t?.saveData.dueAt, now: n, type: ex.kh.SHORT });
    return null == t.saveData.dueAt || null == s ? null : (0, i.jsx)(eo, { type: a ? "error" : "normal", text: s });
}
var eF = n(318061),
    eU = n(824385);
let ew = "Bookmarks",
    eH = "Reminders";
function eP(e) {
    let { closePopout: t, type: n } = e,
        s = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Yf.ALL,
                [t, n] = r.useState(() => eS(e)),
                s = r.useRef(ep.A.getIsStale());
            return (
                r.useEffect(() => {
                    let t = ep.A.getLastChanged();
                    function a() {
                        let a = ep.A.getLastChanged();
                        if (t !== a) {
                            if (((t = a), s.current && !ep.A.getIsStale())) {
                                (s.current = !1), n(eS(e));
                                return;
                            }
                            n((t) => {
                                let n = [...t],
                                    s = new Map(eN(e).map((e) => [e.saveData.messageId, e]));
                                for (let e of t) s.has(e.messageId) ? s.delete(e.messageId) : n.splice(n.indexOf(e), 1);
                                for (let e of s.values()) n.push(e.saveData);
                                return n;
                            });
                        }
                    }
                    return (
                        ep.A.addChangeListener(a),
                        () => {
                            ep.A.removeChangeListener(a);
                        }
                    );
                }, [e]),
                r.useEffect(() => {
                    (0, ej.AX)();
                }, []),
                (0, E.yK)([ep.A], () => t.map((e) => ep.A.getSavedMessage(e.channelId, e.messageId)).filter(eE.Vq))
            );
        })(n);
    (0, b.A)(
        {
            type: x.ImpressionTypes.POPOUT,
            name: x.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: { total_count: s.length, overdue_count: ep.A.getOverdueMessageReminderCount() },
        },
        {},
        [s.length],
    );
    let a = r.useRef(null),
        l = (0, O.A)("for-later", a);
    (0, eu.xN)(a), (0, eu.yW)(n === m.Yf.BOOKMARK ? ew : eH);
    let [d, c] = r.useState(new Date());
    return (r.useEffect(() => {
        let e = setInterval(() => c(new Date()), eA.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []),
    0 === s.length)
        ? (0, i.jsx)(eT, { type: n })
        : (0, i.jsx)(p.hD, {
              navigator: l,
              children: (0, i.jsx)(p.PR, {
                  children: (e) => {
                      let { ref: n, ...l } = e;
                      return (0, i.jsx)(N.Ch, {
                          ref: (e) => {
                              (a.current = e), (n.current = e?.getScrollerNode() ?? null);
                          },
                          className: eU.XG,
                          ...l,
                          children: s.map((e) =>
                              (0, i.jsx)(
                                  eK,
                                  { savedMessage: e, closePopout: t, throttledNow: d },
                                  e.saveData.messageId,
                              ),
                          ),
                      });
                  },
              }),
          });
}
function eK(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        a = (0, ex.vr)(t),
        l = r.useCallback(
            async (e) => {
                await (0, ex.le)(t, a),
                    e.shiftKey || n(),
                    L.A.trackJump(t.saveData.channelId, t.saveData.messageId, null != t.saveData.dueAt ? eH : ew);
            },
            [n, t, a],
        ),
        d = (0, E.bG)(
            [em.A],
            () => !!(a?.type === eD.rbe.UNKNOWN || a?.isPrivate()) || em.A.can(eD.xBc.VIEW_CHANNEL, a),
        );
    return null != a && null != t.message && d
        ? (0, i.jsxs)("div", {
              className: eU.aP,
              children: [
                  (0, i.jsx)(ei, {
                      itemId: `header-${t.message.id}`,
                      channel: a,
                      onClick: (e) => {
                          l(e), n();
                      },
                      collapsed: !1,
                      children: (0, i.jsx)(R.e, {
                          size: "sm",
                          className: ea.GC,
                          children: (0, i.jsx)(eB, { savedMessage: t, jumpToMessage: l }),
                      }),
                  }),
                  null != t.saveData.dueAt ? (0, i.jsx)(eG, { reminder: t, throttledNow: s }) : null,
                  (0, i.jsx)(
                      eh.A,
                      {
                          message: t.message,
                          channel: a,
                          className: eU.YD,
                          compact: eg.hH.getSetting(),
                          animateAvatar: !1,
                          trackAnnouncementViews: !0,
                          tabIndex: -1,
                      },
                      t.message.id,
                  ),
              ],
          })
        : (0, i.jsxs)("div", {
              className: c()(eU.aP, eF.tq),
              children: [
                  (0, i.jsxs)("div", {
                      className: eF.kb,
                      children: [
                          (0, i.jsx)("div", {
                              className: eF.Bx,
                              children: (0, i.jsx)(S.E, { size: "xxs", color: y.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                          }),
                          (0, i.jsx)(C.D, {
                              variant: "text-md/semibold",
                              color: "text-default",
                              children:
                                  null != t.saveData.dueAt
                                      ? es.intl.string(es.t["wuQm+j"])
                                      : es.intl.string(es.t.o572Fe),
                          }),
                      ],
                  }),
                  (0, i.jsx)(R.e, {
                      size: "sm",
                      className: ea.GC,
                      children: (0, i.jsx)(j.m, {
                          text: es.intl.string(null != t.saveData.dueAt ? es.t["a6gcZ/"] : es.t.SvXS1Z),
                          ariaHidden: !0,
                          children: (0, i.jsx)(I.K, {
                              variant: "secondary",
                              "aria-label": es.intl.string(null != t.saveData.dueAt ? es.t["a6gcZ/"] : es.t.SvXS1Z),
                              size: "sm",
                              icon: v.P,
                              onClick: () => (0, ef.x)(t.saveData),
                          }),
                      }),
                  }),
              ],
          });
}
function eB(e) {
    let { savedMessage: t, jumpToMessage: s } = e;
    f()(null != t.message, "Saved message must be cached for For Later action buttons");
    let a = es.intl.string(null != t.saveData.dueAt ? es.t["a6gcZ/"] : es.t.SvXS1Z);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != t.saveData.dueAt
                ? (0, i.jsx)(j.m, {
                      text: es.intl.string(es.t.vrbqs1),
                      ariaHidden: !0,
                      children: (0, i.jsx)(I.K, {
                          variant: "secondary",
                          "aria-label": es.intl.string(es.t.vrbqs1),
                          size: "sm",
                          icon: _.R,
                          onClick: (e) =>
                              (0, D.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("75133").then(n.bind(n, 195404));
                                  return (n) =>
                                      (0, i.jsx)(e, { ...n, label: es.intl.string(es.t.roMu1H), message: t.message });
                              }),
                      }),
                  })
                : null,
            (0, i.jsx)(j.m, {
                text: es.intl.string(es.t["+TSRGD"]),
                ariaHidden: !0,
                children: (0, i.jsx)(I.K, {
                    variant: "secondary",
                    "aria-label": es.intl.string(es.t["+TSRGD"]),
                    size: "sm",
                    icon: M.t,
                    onClick: (e) => s(e),
                }),
            }),
            (0, i.jsx)(j.m, {
                text: a,
                ariaHidden: !0,
                children: (0, i.jsx)(I.K, {
                    variant: "secondary",
                    "aria-label": a,
                    size: "sm",
                    icon: v.P,
                    onClick: () => (0, ef.x)(t.saveData),
                }),
            }),
        ],
    });
}
var ez = n(702841),
    eX = n(912592),
    eY = n(890856),
    eJ = n(761508),
    eV = n(966597),
    eZ = n(910425),
    e$ = n(214947),
    eq = n(711950),
    eW = n(322387),
    eQ = n(912309),
    e0 = n(174459),
    e1 = n(109261);
function e2(e) {
    let { closePopout: t } = e,
        n = (0, eQ.kX)();
    return (0, i.jsx)(j.m, {
        asContainer: !0,
        text: es.intl.string(es.t["lMR96+"]),
        children: (0, i.jsxs)(k.D, {
            "aria-label": `${es.intl.string(es.t["lMR96+"])}, ${n}`,
            className: e1.b,
            onClick: () => {
                e0.default.track(eD.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: eW.e1.FRIEND_REQUESTS_BUTTON_CLICK,
                }),
                    eq.A.transitionToSection(eD.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, i.jsx)(e$.$, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(w.hV, { count: n, color: y.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
var e3 = n(980707),
    e6 = n(477782),
    e7 = n(922016),
    e8 = n(783977),
    e5 = n(378939),
    e4 = n(309010),
    e9 = n(409686);
function te(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, E.bG)([q.A, e4.Ay], () => q.A.getChannel(e4.Ay.getChannelId())),
        {
            everyoneFilter: a,
            roleFilter: l,
            guildFilter: r,
        } = (0, E.cf)([e9.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = e9.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(e3.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": es.intl.string(es.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(e6.sL, {
                id: "Everyone",
                label: es.intl.string(es.t.cdyUsV),
                action: function () {
                    e5.A.setGuildFilter({ everyoneFilter: !a });
                },
                checked: a,
            }),
            (0, i.jsx)(e6.sL, {
                id: "Roles",
                label: es.intl.string(es.t.lZejCq),
                action: function () {
                    e5.A.setGuildFilter({ roleFilter: !l });
                },
                checked: l,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, i.jsx)(e6.sL, {
                      id: "All Servers",
                      label: es.intl.string(es.t.GWMA6s),
                      action: function () {
                          e5.A.setGuildFilter({
                              guildFilter: r === eD.KE7.THIS_SERVER ? eD.KE7.ALL_SERVERS : eD.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === eD.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function tt() {
    let e = r.useRef(null);
    return (0, i.jsx)(e7.Y, {
        targetElementRef: e,
        align: "right",
        animation: e7.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(te, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(j.m, {
                text: es.intl.string(es.t.pEasFX),
                targetElementRef: e,
                children: (0, i.jsx)(I.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": es.intl.string(es.t.pEasFX),
                    icon: e8.R,
                    onClick: n,
                }),
            });
        },
    });
}
var tn = n(481613),
    ts = n.n(tn),
    ta = n(621466),
    tl = n(289873),
    ti = n(821609),
    tr = n(228366),
    td = n(964486),
    tc = n(775602),
    to = n(625494),
    tu = n(723702),
    th = n(303727),
    tg = n(495427);
function tm(e) {
    let { Icon: t, header: n, tip: s, disableStars: a } = e;
    return (0, i.jsxs)("div", {
        className: tg.kL,
        children: [
            (0, i.jsxs)("div", {
                className: tg.zc,
                children: [
                    (0, i.jsx)(t, { color: "currentColor", size: "custom", className: tg.Kk, width: 36, height: 36 }),
                    a ? null : (0, i.jsx)(th.A, { className: tg.uf }),
                ],
            }),
            (0, i.jsx)(C.D, { className: tg.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(H.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    a
                        ? null
                        : (0, i.jsxs)(H.E, {
                              tag: "span",
                              className: tg.PP,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [es.intl.string(es.t["8tvIiN"]), ":", " "],
                          }),
                    s,
                ],
            }),
        ],
    });
}
var tA = n(143838),
    tf = n(640238);
function tx(e) {
    let { onClick: t } = e,
        [n, s] = r.useState(!1);
    function a() {
        t(),
            e0.default.track(eD.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(tp, { confirm: a, cancel: () => s(!1) }) : null,
            (0, i.jsx)(j.m, {
                text: es.intl.string(es.t["8k+6QY"]),
                children: (0, i.jsx)(I.K, {
                    variant: "secondary",
                    "aria-label": es.intl.string(es.t["8k+6QY"]),
                    size: "sm",
                    icon: tA.i,
                    onClick: function (e) {
                        e.shiftKey ? a() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function tp(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(tf.M, {
        dismissable: !0,
        header: es.intl.string(es.t.h4bVZ2),
        confirmText: es.intl.string(es.t.e6RscS),
        cancelText: es.intl.string(es.t["ETE/oC"]),
        confirmButtonColor: eC.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(H.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: es.intl.string(es.t["0MQ0Bf"]),
        }),
    });
}
var tE = n(435558),
    tj = n.n(tE),
    tN = n(749314),
    tS = n(183812),
    ty = n(311283),
    tC = n(717421),
    tR = n(933832),
    tI = n(334738),
    tv = n(95561),
    t_ = n(976860),
    tM = n(847374),
    tD = n(345550);
function tL(e) {
    let { collapsed: t, onClick: n } = e,
        s = es.intl.string(t ? es.t.dcl9MQ : es.t.iTcuma);
    return (0, i.jsx)(j.m, {
        text: s,
        ariaHidden: !0,
        children: (0, i.jsx)(k.D, {
            className: tD.x6,
            "aria-label": s,
            onClick: n,
            children: (0, i.jsx)(tM.a, { className: c()(tD.ai, { [tD.yZ]: t }), size: "xs" }),
        }),
    });
}
var tO = n(775924);
let tb = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    tT = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function tk(e) {
    let { collapsed: t, children: n } = e,
        s = r.useRef(null),
        [a, l] = (0, tC.z)(() => (t ? tb : tT), "respect-motion-settings", []),
        d = r.useRef(!0);
    return (
        r.useLayoutEffect(() => {
            if (d.current) {
                d.current = !1;
                return;
            }
            let e = s.current?.offsetHeight;
            null != e &&
                (t
                    ? l({
                          from: { height: e, opacity: 1 },
                          to: { height: 0, opacity: 0 },
                          immediate: tc.Ay.useReducedMotion,
                      })
                    : l({
                          from: { height: 0, opacity: 0 },
                          to: { height: e, opacity: 1 },
                          immediate: tc.Ay.useReducedMotion,
                          onRest: (e) => {
                              e.finished && l({ height: "auto", immediate: !0 });
                          },
                      }));
        }, [t, l]),
        (0, i.jsx)(tS.animated.div, {
            className: tO.r,
            style: a,
            children: (0, i.jsx)("div", { ref: s, inert: !!t || void 0, children: n }),
        })
    );
}
var tG = n(782603),
    tF = n(461678),
    tU = n(914703);
function tw(e) {
    let { channel: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)(e7.Y, {
        targetElementRef: n,
        align: "right",
        animation: e7.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(tU.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: es.intl.string(es.t.ljs3Oe),
                  })
                : (0, i.jsx)(tF.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: es.intl.string(es.t.ljs3Oe),
                      location: { section: eD.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(j.m, {
                text: es.intl.string(es.t.h850Ss),
                targetElementRef: n,
                children: (0, i.jsx)(I.K, {
                    "aria-label": es.intl.string(es.t.h850Ss),
                    icon: tG.X,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var tH = n(350527),
    tP = n(218152),
    tK = n(970278),
    tB = n(747926),
    tz = n(935208),
    tX = n(37411),
    tY = n(159574);
function tJ(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        a = (0, E.yK)(
            [tK.A, q.A],
            () =>
                tj()(tK.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return tz.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return q.A.getChannel(t);
                    })
                    .filter(eE.Vq)
                    .sort((e, t) => tz.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        l = r.useCallback((e, t) => {
            (0, tB.JA)(e, t, tX.H9.INBOX);
        }, []);
    return (
        r.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== a.length ||
                tr.h.wait(() => {
                    (0, tI.ack)(
                        t.channelId,
                        {
                            section: eD.JJy.INBOX,
                            object: eD.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: eD.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId);
                });
        }),
        (0, i.jsx)("div", {
            className: tY.k,
            children: a.map((e) =>
                (0, i.jsx)(
                    tP.Cp,
                    { channel: n, children: (0, i.jsx)(tH.Ay, { className: tY.u, threadId: e.id, goToThread: l }) },
                    e.id,
                ),
            ),
        })
    );
}
var tV = n(989349),
    tZ = n.n(tV),
    t$ = n(123292),
    tq = n(857069),
    tW = n(33358),
    tQ = n(384231),
    t0 = n(207133),
    t1 = n(704413),
    t2 = n(9842),
    t3 = n(994500),
    t6 = n(5095),
    t7 = n(320095),
    t8 = n(143413),
    t5 = n(763754),
    t4 = n(467073),
    t9 = n(491182),
    ne = n(860227),
    nt = n(500414),
    nn = n(375199),
    ns = n(824556),
    na = n(715628),
    nl = n(752636),
    ni = n(352043),
    nr = n(268719),
    nd = n(234957),
    nc = n(888675),
    no = n(466959),
    nu = n(364932);
let nh = r.memo(function e(t) {
    let n,
        {
            channel: s,
            message: a,
            compact: l = !1,
            className: r,
            onContextMenu: d,
            onClick: o,
            disableInteraction: u = !1,
            hasThread: h,
        } = t,
        g = eD.sl8.has(a.type) ? a.messageReference : void 0,
        m = (0, E.bG)([t2.A], () => t2.A.getMessageByReference(g)),
        A = (0, E.bG)([q.A], () =>
            a.type === eD.lAJ.THREAD_STARTER_MESSAGE && m.state === t2.a.LOADED
                ? q.A.getChannel(m.message.channel_id)
                : null,
        ),
        f = eg.X6.useSetting(),
        x = eg.hD.useSetting(),
        p = eg.rs.useSetting(),
        j = eg.kt.useSetting(),
        N = (0, tQ.S)((a.editedTimestamp ?? a.timestamp).valueOf()),
        S = (0, t0.A)(s?.id),
        { disableReactionCreates: y } = (0, t4.A)(s),
        {
            content: C,
            hasSpoilerEmbeds: R,
            hasBailedAst: I,
        } = (0, nn.A)(a, {
            hideSimpleEmbedContent: x && p,
            allowList: N,
            allowHeading: N,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        v = (0, t5.Ay)(a),
        _ = (0, E.bG)(
            [q.A],
            () => a.hasFlag(eD.pr7.HAS_THREAD) && q.A.getChannel(tz.default.castMessageIdAsChannelId(a.id)),
        ),
        M = a.type === eD.lAJ.THREAD_STARTER_MESSAGE && m.state === t2.a.LOADED && null != A,
        D = !M && void 0 === n,
        L = (0, ns.A)({ message: a, channel: s, announcementEnabled: D }),
        O = (0, tW.P)(a),
        b = (0, t6._f)(a.id, a.channel_id),
        T = (0, t1.A)(a),
        k = (0, ne.fF)(a);
    return M
        ? (0, i.jsx)(e, { ...t, message: m.message, channel: A, hasThread: !1 })
        : (t3.A.isBlockedForMessage(a) ? (n = es.t["+FcYM/"]) : t3.A.isIgnoredForMessage(a) && (n = es.t["VFWjc+"]),
            void 0 !== n)
          ? (0, i.jsx)(ng, { className: r, compact: l, count: 1, collapsedReason: n })
          : (0, i.jsx)(t9.A, {
                compact: l,
                className: c()(r, { [nu.M1]: (0, t7.ec)(a), [nu.XN]: u, [nu._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, nd.A)(a, s, g, m, l),
                childrenHeader: (0, nl.A)({ ...t, author: v, guildId: s.guild_id }),
                childrenAccessories: (0, i.jsx)(nt.iV, {
                    channel: s,
                    message: a,
                    hasSpoilerEmbeds: R,
                    hasBailedAst: I,
                    compact: l,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: y,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: h,
                    inlineAttachmentMedia: f,
                    inlineEmbedMedia: x,
                    renderEmbeds: p,
                    gifAutoPlay: j,
                    poll: T,
                    showListsAndHeaders: N,
                    showMaskedLinks: N,
                    shouldHideMediaOptions: S,
                    enabledContentHarmTypeFlags: O,
                    ctaButtonType: b,
                }),
                childrenExecutedCommand: (0, nr.A)(a, s, l),
                childrenMessageContent: (0, na.A)(t, C),
                childrenSystemMessage: (0, ni.A)(t),
                onContextMenu: d,
                onClick: o,
                hasThread: !1 !== h && null != _ && a.hasFlag(eD.pr7.HAS_THREAD),
                hasReply: a.type === eD.lAJ.REPLY,
                isSystemMessage: (0, t8.A)(a),
                messageRef: L,
                author: v,
                "aria-labelledby": k,
                "aria-roledescription": es.intl.string(es.t.BAB0yK),
            });
});
function ng(e) {
    let { className: t, count: n, compact: s, collapsedReason: a } = e;
    return (0, i.jsx)(t9.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, i.jsx)(nc.A, {
            compact: s,
            className: no.L9,
            iconNode: (0, i.jsx)(v.P, { size: "md", color: "currentColor", className: no.Q6 }),
            children: (0, i.jsx)("div", { className: no.Fo, children: es.intl.format(a, { count: n }) }),
        }),
    });
}
var nm = n(58703),
    nA = n(195172);
function nf(e) {
    let { className: t, onJump: n } = e,
        [s, a] = r.useState(!1);
    return (0, i.jsx)(k.D, {
        className: c()(nA.n, t),
        onClick: function (e) {
            a(!0), n(e);
        },
        children: s
            ? (0, i.jsx)(tl.y, { type: tl.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(H.E, { variant: "text-xs/medium", className: nA.Q, children: es.intl.string(es.t.k5WiPf) }),
    });
}
var nx = n(143236),
    np = n(323073),
    nE = n(181079),
    nj = n(567035),
    nN = n(202803),
    nS = n(455234),
    ny = n(695633),
    nC = n(152007),
    nR = n(607508),
    nI = n(594061),
    nv = n(617617),
    n_ = n(95701),
    nM = n(808728),
    nD = n(232835),
    nL = n(711014),
    nO = n(543465),
    nb =
        (((s = {})[(s.Favorite = 0)] = "Favorite"),
        (s[(s.PrivateChannel = 1)] = "PrivateChannel"),
        (s[(s.HighImportanceMentioned = 2)] = "HighImportanceMentioned"),
        (s[(s.LowImportanceMentioned = 3)] = "LowImportanceMentioned"),
        (s[(s.AllMessagesNotifications = 4)] = "AllMessagesNotifications"),
        (s[(s.GuildChannel = 5)] = "GuildChannel"),
        (s[(s.OldChannel = 6)] = "OldChannel"),
        (s[(s.NoNotifications = 7)] = "NoNotifications"),
        (s[(s.ReallyOldChannel = 8)] = "ReallyOldChannel"),
        s),
    nT = (((a = {}).Loading = "loading"), (a.Loaded = "loaded"), (a.Done = "done"), a);
class nk extends nx.EventEmitter {
    state;
    scrollerRef;
    undoStack = [];
    constructor(e, t) {
        super(), (this.state = e), (this.scrollerRef = t);
        for (let t = 0; t < e.channels.length; t++) e.channels[t].order = t;
    }
    maybeLoadMore = () => {
        let e = this.scrollerRef.current?.getScrollerState();
        null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 2e3 && this.loadMore());
    };
    loadMore() {
        let { loadState: e, channels: t } = this.state;
        if ("loaded" !== e) return;
        let n = !1,
            s = t.map((e) => {
                if (e.isFullyLoaded || e.deleted || n) return e;
                if (e.collapsed)
                    if (!e.hasLoadedAnything) return { ...e, hasLoadedAnything: !0 };
                    else return e;
                return (
                    (e = this.populateInitialStateFromStore(e)).isFullyLoaded ||
                        (f()("nsfw" !== e.type, "this channel should already be loaded"),
                        "messages" === e.type && this.loadChannelMessages(e) && (n = !0)),
                    e
                );
            });
        (!n || s.some((e, n) => e !== t[n])) &&
            this.setState({ channels: s, loadState: n ? this.state.loadState : "done" });
    }
    populateInitialStateFromStore(e) {
        switch (e.type) {
            case "messages": {
                let t = nG(e, !1);
                if (t.messages.some(nN.$r)) return L.A.clearChannel(e.channelId), { ...e, messages: [] };
                return t;
            }
            case "nsfw":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = tK.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
            default:
                return (0, eE.xb)(e);
        }
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) =>
                "messages" === e.type && e.hasLoadedAnything ? nG(e, !1, !0) : e,
            ),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        tr.h.wait(() =>
            tI.ack(
                t,
                {
                    section: eD.JJy.INBOX,
                    object: eD.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: eD.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                !0,
                void 0,
                n,
            ),
        );
        let s = this.state.channels.find((e) => e.channelId === t);
        (null != s && this.undoStack.push(s), 1 === this.state.channels.length)
            ? this.deleteChannel(t)
            : (this.setState({ channels: this.updateChannel(t, (e) => ({ ...e, deleted: !0 })) }),
              tc.Ay.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        tI.ack(
            e.channelId,
            { section: eD.JJy.INBOX, object: eD.ZSU.UNDO_MARK_AS_READ, objectType: eD.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        tr.h.wait(() => (0, nj.A)([e], eD.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore();
    };
    deleteChannel = (e) => {
        this.setState({
            scrollToChannelIndex: tj().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore();
    };
    markAllRead = () => {
        tI.Uq(this.state.channels.map((e) => ({ channelId: e.channelId, messageId: e.newestUnreadMessageId }))),
            this.setState({ channels: [] });
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: a, loadState: l } = this.state,
            i = tj().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            d = !r.collapsed;
        (a[t] = d),
            (0, nI.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = d;
                },
                nI.Sb.FREQUENT_USER_ACTION,
            ),
            this.setState({
                scrollToChannelIndex: i,
                collapsedChannels: a,
                loadState: "done" !== l || d || r.isFullyLoaded ? l : "loaded",
                channels: this.updateChannel(t, (e) => ({ ...e, collapsed: d })),
            }),
            r.collapsed ? r.isFullyLoaded || this.loadMore() : this.maybeLoadMore();
    };
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    handleUserGuildSettingsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nO.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nC.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = tK.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        L.A.clearChannel(e.channelId);
        let t = L.A.fetchMessages({
            channelId: e.channelId,
            limit: eD.EMb,
            jump: { messageId: e.oldestReadMessageId, flash: !0 },
        });
        return (
            null != t &&
            !1 !== t &&
            (this.setState({ loadState: "loading" }),
            t.then(
                (t) => {
                    this.setState({
                        loadState: "loaded",
                        channels: this.updateChannel(e.channelId, (e) => {
                            f()("messages" === e.type, "channel cannot change type");
                            let n = nG(e, !0);
                            return (
                                (0 === n.messages.length || n.messages.length === e.messages.length) &&
                                    (n = { ...n, hasLoadedAnything: !0, isFullyLoaded: !0, hasError: !t }),
                                n
                            );
                        }),
                    });
                },
                () => {
                    this.setState({
                        loadState: "loaded",
                        channels: this.updateChannel(
                            e.channelId,
                            (e) => (
                                f()("messages" === e.type, "channel cannot change type"),
                                {
                                    ...nG(e, !0),
                                    isFullyLoaded: !0,
                                    hasError: !0,
                                    hasLoadedAnything: !0,
                                    newestUnreadMessageId: e.messages[e.messages.length - 1]?.id,
                                }
                            ),
                        ),
                    });
                },
            ),
            !0)
        );
    }
    updateChannel(e, t) {
        return this.state.channels.map((n) => (n.channelId === e ? t(n) : n));
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                (this.state = { ...this.state, ...e }), this.emit("change", this.state);
                return;
            }
    }
}
function nG(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = nD.A.getMessages(e.channelId),
        a = s
            .toArray()
            .filter(
                (t) =>
                    tz.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= tz.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (a.length === e.messages.length && a.every((t, n) => e.messages[n] === t) && n) return e;
    let l = null != s.getAfter(e.oldestReadMessageId) || a[0]?.id === e.oldestUnreadMessageId,
        i = a[a.length - 1],
        r = tz.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || a.length >= 25;
    return {
        ...e,
        messages: a,
        hasLoadedAnything: e.hasLoadedAnything || l || t,
        hasLoadedFirst: e.hasLoadedFirst || l || t,
        isFullyLoaded: e.isFullyLoaded || (l && r) || (t && !s.hasMoreAfter),
    };
}
function nF() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = nv.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    let a = q.A.getChannel(s);
                    (s in e && a?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            q.A.getSortedPrivateChannels().forEach((n) => nU(e, t, null, n.id)),
            nL.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = nM.Ay.getSelectableChannelIds(n),
                    a = ny.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    nU(e, t, n, s);
                    let l = a[s] ?? {};
                    for (let s in l) nU(e, t, n, s);
                });
            }),
            tj().sortBy(t, (e) => e.sortOrder)),
        a = tj()
            .uniq(s.map((e) => e.guildId))
            .filter(eE.Vq);
    return (
        tr.h.dispatch({ type: "INBOX_OPEN", guildIds: a }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function nU(e, t, n, s) {
    if (null == s) return;
    let a = q.A.getChannel(s);
    if (null == a || (!n_.Le.has(a.type) && nO.Ay.isGuildOrCategoryOrChannelMuted(n, a.id))) return;
    if (a.isPrivate()) {
        if (0 === ee.Ay.getMentionCount(s)) return;
    } else if (!(0, nS.Y)(a) && 0 === ee.Ay.getMentionCount(s)) return;
    if (!a.isPrivate() && !em.A.can(eD.xBc.READ_MESSAGE_HISTORY, a)) return;
    let l = ee.Ay.ackMessageId(s);
    if (null == l) {
        let e = W.A.getGuild(a.guild_id);
        if (null == e || null == e.joinedAt) return;
        l = tz.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = ee.Ay.getOldestUnreadMessageId(s),
        r = ee.Ay.lastMessageId(s),
        d = ee.Ay.getMentionCount(s),
        c = d > 0 || a.isPrivate();
    if (null == r || tz.default.compare(l, r) >= 0) return;
    let o = {
        guildId: n,
        channelId: s,
        oldestReadMessageId: l,
        oldestUnreadMessageId: i,
        newestUnreadMessageId: r,
        collapsed: !0 === e[s],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: c,
        mentionCount: d,
        sortOrder: (function (e, t, n) {
            let s = q.A.getChannel(t);
            if (nE.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (ee.Ay.getMentionCount(t) > 0) return ee.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = tz.default.extractTimestamp(n);
                if (Date.now() - e > nH) return 8;
                if (Date.now() - e > nw) return 6;
            }
            if (s.isThread()) {
                let e = (0, nR.l)(s);
                return e === tX.CP.ALL_MESSAGES ? 4 : e === tX.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = nO.Ay.getChannelMessageNotifications(e, t),
                    s = n === eD.orn.NULL ? nO.Ay.getMessageNotifications(e) : n;
                return s === eD.orn.ALL_MESSAGES ? 4 : s === eD.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, np.qR)(a)
        ? t.push({ ...o, type: "nsfw" })
        : a.isForumLikeChannel()
          ? t.push({ ...o, type: "forum" })
          : t.push({ ...o, type: "messages", messages: [] });
}
let nw = 2 * eA.A.Millis.DAY,
    nH = 10 * eA.A.Millis.DAY;
var nP = n(358402);
let nK = { left: 4, right: -12 },
    nB = [eD.lAJ.THREAD_CREATED];
function nz(e) {
    let { channel: t, message: n, compact: s, isGroupStart: a, gotoChannel: l } = e,
        d = (0, p.rm)(n.id ?? ""),
        c = r.useCallback(
            (e) => {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), l(e, n.id);
                    return;
                }
                "ArrowLeft" === e.key && document.querySelector(`[data-recents-channel="${t.id}"]`)?.focus();
            },
            [t.id, l, n.id],
        ),
        o = nB.includes(n.type);
    return (0, i.jsx)(T.vN, {
        offset: nK,
        children: (0, i.jsxs)("div", {
            className: nP.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, i.jsx)(nf, { className: nP.nn, onJump: (e) => l(e, n.id) }),
                (0, i.jsx)(nh, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: nP.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: a,
                }),
            ],
        }),
    });
}
function nX(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        a = eg.hH.useSetting(),
        l = 0 === t.messages.length || tZ()(t.messages[0].timestamp).isSame(tZ()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!l && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, nm.i$)(e.timestamp, "LL");
            r.push((0, i.jsx)(tN.A, { className: nP.yF, children: t }, t)), (d = tZ()(e.timestamp));
        }
        let t = null == c || (0, tq.A)(n, c, e);
        (c = e), r.push((0, i.jsx)(nz, { channel: n, message: e, compact: a, isGroupStart: t, gotoChannel: s }, e.id));
    });
    let u = o[o.length - 1];
    return (
        null != u &&
            0 > tz.default.compare(u.id, t.newestUnreadMessageId) &&
            r.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: nP.Gr,
                        children: (0, i.jsx)(t$.Q, {
                            variant: "primary",
                            text: `${es.intl.string(es.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, u.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, i.jsx)(tl.y, {}, "spinner")]),
        (0, i.jsx)("div", { className: nP.DZ, children: r })
    );
}
let nY = r.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            s = r.useRef(null),
            [[a, l], d] = r.useState([0, 0]),
            c = t.deleted && a > 0;
        r.useLayoutEffect(() => {
            if (!t.deleted || 0 !== a || null == s.current) return;
            let e = s.current,
                l = e.offsetHeight;
            if (l <= 0) return void n(t.channelId);
            let i = e.offsetTop,
                r = e.parentElement.scrollTop,
                c = r > i ? l - (r - i) : l;
            d([l, l - c]);
        }, [t.deleted, t.channelId, n, a]);
        let { opacity: o, size: u } = (0, tC.z)(
                {
                    config: { clamp: !0, friction: 18, tension: 200 },
                    opacity: +!c,
                    size: +!c,
                    onRest: () => {
                        n(t.channelId);
                    },
                },
                "animate-always",
            ),
            h = {
                opacity: o,
                height: u.to((e) => {
                    var t, n;
                    return c ? ((t = a), (n = l) + (t - n) * e) : "auto";
                }),
            };
        return (0, i.jsx)(tS.animated.div, {
            ref: s,
            style: h,
            "data-unread-channel-id": t.channelId,
            children: (0, i.jsx)(nJ, { ...e }),
        });
    }),
    nJ = r.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: a } = e,
            l = (0, E.bG)([q.A], () => q.A.getChannel(t.channelId));
        if (
            (r.useEffect(() => {
                null == l ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    tr.h.wait(() => {
                        (0, tI.ack)(
                            t.channelId,
                            {
                                section: eD.JJy.INBOX,
                                object: eD.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: eD.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            !0,
                        ),
                            s(t.channelId);
                    });
            }),
            null == l || !t.hasLoadedAnything)
        )
            return null;
        function d(e, s) {
            if ("forum" === t.type) (0, eu.n4)(t.channelId, t.guildId, nq, () => n(e));
            else {
                let a = s ?? t.oldestUnreadMessageId;
                L.A.trackJump(t.channelId, a, nq), (0, t_.pX)(eD.BVt.CHANNEL(t.guildId, t.channelId, a)), n(e);
            }
        }
        function c() {
            a(t),
                (0, tv.zV)(eD.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                });
        }
        return (0, i.jsx)("div", {
            className: eU.aP,
            children: (0, i.jsx)(g.F, {
                component: (0, i.jsxs)(ei, {
                    channel: l,
                    onClick: d,
                    collapsed: t.collapsed,
                    mentionCount: t.mentionCount,
                    onToggleCollapse: "nsfw" !== t.type ? c : void 0,
                    itemId: `header-${l.id}`,
                    children: [
                        (0, i.jsxs)(R.e, {
                            size: "sm",
                            className: ea.GC,
                            children: [(0, i.jsx)(tw, { channel: l }), (0, i.jsx)(nV, { ...e })],
                        }),
                        "nsfw" !== t.type
                            ? (0, i.jsx)(tL, { collapsed: t.collapsed, onClick: c })
                            : (0, i.jsx)("div", { className: ea.Pt }),
                    ],
                }),
                children: (0, i.jsx)(tk, {
                    collapsed: t.collapsed,
                    children:
                        "messages" === t.type
                            ? (0, i.jsx)(nX, { channel: t, channelRecord: l, gotoChannel: d })
                            : "forum" === t.type
                              ? (0, i.jsx)(tJ, { channel: t, channelRecord: l, deleteChannel: s })
                              : null,
                }),
            }),
        });
    });
function nV(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: a } = e,
        l = (0, ty.A)() && null != t.guildId;
    return (0, i.jsx)(j.m, {
        text: l ? es.intl.string(es.t["5lLMhM"]) : es.intl.string(es.t.e6RscS),
        ariaHidden: !0,
        children: (0, i.jsx)(I.K, {
            variant: "secondary",
            "aria-label": l ? es.intl.string(es.t["5lLMhM"]) : es.intl.string(es.t.e6RscS),
            size: "sm",
            icon: l ? tA.i : tR.A,
            onClick: function () {
                l && null != t.guildId ? s(t.guildId) : n(t),
                    (0, tv.zV)(eD.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: a() - 1,
                    });
            },
        }),
    });
}
var nZ = n(245233),
    n$ = n(552392);
let nq = "Inbox";
function nW(e) {
    var t, n, s, a, l, d;
    let { onJump: o, showTutorial: u, setSeenTutorial: h, closePopout: g } = e,
        m = r.useRef(null),
        A = (0, O.A)("unreads", m);
    (0, eu.xN)(m), (0, eu.yW)(nq);
    let [f, x] = (function (e) {
            let [t, n] = r.useState(() => new nk(nF(), e)),
                [s, a] = r.useState(!1),
                l = r.useRef(Date.now()),
                [i, d] = r.useState(() => nF());
            r.useEffect(() => {
                function e(e) {
                    return d(e);
                }
                return (
                    t.on("change", e),
                    d(t.state),
                    () => {
                        t.off("change", e);
                    }
                );
            }, [t]),
                r.useEffect(() => {
                    if (null == i || i.channels.length > 0 || s) return;
                    let t = Date.now(),
                        r = nF();
                    0 === r.channels.length || t - l.current < 10 * eA.A.Millis.SECOND
                        ? a(!0)
                        : ((l.current = Date.now()), n(new nk(r, e)));
                }, [i, s, e]);
            let c = r.useRef(t);
            return (
                r.useLayoutEffect(() => {
                    c.current = t;
                }),
                r.useLayoutEffect(() => {
                    i?.channels, i?.loadState, c.current.maybeLoadMore();
                }, [i?.channels, i?.loadState]),
                r.useEffect(
                    () => (nD.A.addChangeListener(t.reloadMessages), () => nD.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                r.useEffect(
                    () => (
                        nO.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => nO.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        nC.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => nC.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        tK.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => tK.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [i, t]
            );
        })(m),
        { loadState: j, channels: S } = f,
        { maybeLoadMore: y } = x,
        C = (0, E.bG)([tc.Ay], () => tc.Ay.messageGroupSpacing);
    return ((t = m),
    (n = f),
    (s = x),
    r.useLayoutEffect(() => {
        let { scrollToChannelIndex: e } = n;
        s.clearScrollToChannelIndex();
        let { current: a } = t;
        if (null == a || null == e) return;
        let l = a.getScrollerNode()?.children;
        if (null == l) return;
        let i = l[e];
        if (null == i) return;
        let { scrollTop: r, offsetHeight: d } = a.getScrollerState();
        (i.offsetTop < r || i.offsetTop > r + d) && a.scrollTo({ to: i.offsetTop });
    }),
    (a = f),
    (l = x),
    r.useEffect(() => {
        function e() {
            let e = a.channels.find((e) => !e.collapsed);
            null != e && l.markChannelRead(e);
        }
        return (
            to._.subscribe(eD.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
            () => {
                to._.unsubscribe(eD.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
            }
        );
    }, [l, a.channels]),
    (d = x),
    r.useEffect(() => {
        function e(e) {
            if ((0, eR.hasAnyModalOpen)()) return;
            let t = (0, ta.BF)(e)?.activeElement;
            (0, ta.Cw)(t) ||
                (((0, tu.isMac)() || (0, tu.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
                    !e.shiftKey &&
                    !e.altKey &&
                    "z" === e.key &&
                    d.undoMarkChannelRead());
        }
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [d]),
    r.useEffect(
        () => (
            tr.h.subscribe("CONNECTION_OPEN", g),
            () => {
                tr.h.unsubscribe("CONNECTION_OPEN", g);
            }
        ),
        [g],
    ),
    (0, td.Ay)(
        () => (
            to._.subscribe(eD.jej.INBOX_MARK_ALL_UNREADS_READ, x.markAllRead),
            () => {
                to._.unsubscribe(eD.jej.INBOX_MARK_ALL_UNREADS_READ, x.markAllRead);
            }
        ),
    ),
    0 === S.length)
        ? (0, i.jsx)(tm, {
              Icon: eX.K,
              header: es.intl.string(es.t["6XMM+D"]),
              tip: ts().os?.family === "OS X" ? es.intl.string(es.t.w9uDOW) : es.intl.string(es.t.BiUJC6),
          })
        : (0, i.jsx)(p.hD, {
              navigator: A,
              children: (0, i.jsx)(p.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, i.jsxs)(N.Ch, {
                          ref: (e) => {
                              (m.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: j === nT.Done ? void 0 : y,
                          className: c()(eU.XG, `group-spacing-${C}`),
                          children: [
                              u ? (0, i.jsx)(nQ, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: a,
                                          deleteChannel: l,
                                          toggle: r,
                                          getNumUnreadChannels: d,
                                      } = t,
                                      c = null;
                                  return tj().flatMap(e, (e) => {
                                      let t = e.sortOrder !== c;
                                      c = e.sortOrder;
                                      let o = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === nb.ReallyOldChannel
                                                  ? o.push(
                                                        (0, i.jsx)(
                                                            tN.A,
                                                            {
                                                                className: nZ.y,
                                                                contentClassName: nZ.$,
                                                                children: es.intl.string(es.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === nb.NoNotifications &&
                                                    o.push(
                                                        (0, i.jsx)(
                                                            tN.A,
                                                            {
                                                                className: nZ.y,
                                                                contentClassName: nZ.$,
                                                                children: es.intl.string(es.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          o.push(
                                              (0, i.jsx)(
                                                  nY,
                                                  {
                                                      channel: e,
                                                      markChannelRead: s,
                                                      markGuildRead: a,
                                                      toggle: r,
                                                      deleteChannel: l,
                                                      onJump: n,
                                                      getNumUnreadChannels: d,
                                                  },
                                                  e.channelId,
                                              ),
                                          ),
                                          o
                                      );
                                  });
                              })(S, x, o),
                              j === nT.Done ? null : (0, i.jsx)(tl.y, { className: n$.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function nQ(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: n$.d$,
        children: [
            (0, i.jsx)("div", { className: n$.cm, children: (0, i.jsx)(eX.K, { size: "md", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(C.D, {
                        className: n$.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: es.intl.string(es.t.vZPktJ),
                    }),
                    (0, i.jsx)(H.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: es.intl.string(es.t.vWkIII),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: n$.dh,
                        children: (0, i.jsx)(ti.$, {
                            variant: "primary",
                            size: "sm",
                            text: es.intl.string(es.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function n0() {
    return (0, i.jsx)(tm, {
        Icon: eX.K,
        disableStars: !0,
        header: es.intl.string(es.t["KG/ynf"]),
        tip: es.intl.string(es.t.cvcKzX),
    });
}
function n1() {
    return (0, i.jsx)(tx, { onClick: () => to._.dispatch(eD.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var n2 = n(668451);
function n3(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        { enabled: a } = eV.A.useConfig({ location: "RecentsPopout" }),
        l = (0, eZ.Sc)(),
        r = (0, ez.bG)([ep.A], () => ep.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: n2.wx,
        children: [
            (0, i.jsxs)("div", {
                className: n2.qd,
                children: [
                    (0, i.jsx)(eX.K, { size: "md", color: "currentColor", className: n2.yH }),
                    (0, i.jsx)(C.D, {
                        className: n2.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: es.intl.string(es.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(eY.s, {
                        className: n2.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": es.intl.string(es.t["8k+6QY"]),
                        children: [(0, i.jsx)(n6, { tab: t }), (0, i.jsx)(e2, { closePopout: s })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: n2.YF,
                children: (0, i.jsxs)(eJ.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: n2.$H,
                    children: [
                        (0, i.jsx)(eJ.V.Item, {
                            id: u.Y2.UNREADS,
                            "aria-label": es.intl.string(es.t.sRUdB8),
                            className: n2.Mf,
                            children: (0, i.jsx)("span", { className: n2.Gn, children: es.intl.string(es.t.sRUdB8) }),
                        }),
                        (0, i.jsx)(eJ.V.Item, {
                            "aria-label": es.intl.string(es.t.GRZF96),
                            id: u.Y2.MENTIONS,
                            className: n2.Mf,
                            children: (0, i.jsx)("span", { className: n2.Gn, children: es.intl.string(es.t.GRZF96) }),
                        }),
                        a
                            ? (0, i.jsx)(eJ.V.Item, {
                                  "aria-label": es.intl.string(es.t["2pAkDA"]),
                                  id: u.Y2.BOOKMARKS,
                                  className: n2.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: n2.Gn,
                                      children: es.intl.string(es.t["2pAkDA"]),
                                  }),
                              })
                            : null,
                        a
                            ? (0, i.jsx)(eJ.V.Item, {
                                  "aria-label": es.intl.string(es.t.aUXxzT),
                                  id: u.Y2.REMINDERS,
                                  className: n2.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: n2.Gn,
                                      children:
                                          0 === r
                                              ? es.intl.string(es.t.aUXxzT)
                                              : es.intl.formatToPlainString(es.t["5en8ya"], { count: r }),
                                  }),
                              })
                            : null,
                        l
                            ? (0, i.jsx)(eJ.V.Item, {
                                  "aria-label": es.intl.string(es.t.Fn6Odn),
                                  id: u.Y2.SCHEDULED,
                                  className: n2.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: n2.Gn,
                                      children: es.intl.string(es.t.Fn6Odn),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
function n6(e) {
    let { tab: t } = e;
    return t === u.Y2.UNREADS ? (0, i.jsx)(n1, {}) : t === u.Y2.MENTIONS ? (0, i.jsx)(tt, {}) : null;
}
var n7 = n(935063),
    n8 = n(475743),
    n5 = n(517019),
    n4 = n(919755);
let n9 = { offset: { left: 4, right: -12 } },
    se = "Recent Mentions";
function st(e, t) {
    e5.A.fetchRecentMentions({
        before: t,
        limit: eD.Ue3,
        guildId: null != e && e9.Ay.guildFilter !== eD.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: e9.Ay.roleFilter,
        everyone: e9.Ay.everyoneFilter,
    });
}
function sn(e) {
    let { onJump: t } = e,
        n = r.useRef(null),
        s = (0, O.A)("recents", n);
    (0, eu.xN)(n), (0, eu.yW)(se);
    let a = (0, E.bG)([q.A, e4.Ay], () => q.A.getChannel(e4.Ay.getChannelId())),
        {
            messages: l,
            hasMore: d,
            loading: c,
            guildFilter: o,
            roleFilter: u,
            everyoneFilter: h,
        } = (0, E.cf)([e9.Ay], () => ({
            messages: e9.Ay.getMentions(),
            hasMore: e9.Ay.hasMore,
            loading: e9.Ay.loading,
            guildFilter: e9.Ay.guildFilter,
            roleFilter: e9.Ay.roleFilter,
            everyoneFilter: e9.Ay.everyoneFilter,
        })),
        g = (0, n8.A)(o),
        m = (0, n8.A)(u),
        A = (0, n8.A)(h);
    r.useEffect(() => {
        e9.Ay.hasLoadedEver
            ? ((null != g && o !== g) || (null != m && u !== m) || (null != A && h !== A)) && st(a)
            : st(a);
    }, [g, o, m, u, A, h, a]),
        (0, td.Ay)(() => {
            l?.some(nN.$r) && (e5.A.clearMentions(), st(a));
        }),
        (0, td.l0)(() => {
            e5.A.truncateMentions(eD.Ue3);
        });
    let f = r.useCallback(() => {
        let e = n.current?.getScrollerState();
        null != e &&
            e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
            d &&
            !c &&
            st(a, null != l && l.length > 0 ? l[l.length - 1].id : null);
    }, [d, c, a, l]);
    return null == l || (c && 0 === l.length)
        ? (0, i.jsx)("div", { className: eU.Lq, children: (0, i.jsx)(tl.y, {}) })
        : 0 === l.length
          ? (0, i.jsx)(tm, { Icon: n7.X, header: es.intl.string(es.t.bgDz74), tip: es.intl.string(es.t.NS15vk) })
          : (0, i.jsx)(p.hD, {
                navigator: s,
                children: (0, i.jsx)(p.PR, {
                    children: (e) => {
                        let { ref: s, ...r } = e;
                        return (0, i.jsxs)(N.Ch, {
                            ref: (e) => {
                                (n.current = e), (s.current = e?.getScrollerNode() ?? null);
                            },
                            className: eU.XG,
                            onScroll: d ? f : void 0,
                            ...r,
                            children: [
                                l.map((e) => (0, i.jsx)(ss, { message: e, onJump: t }, e.id)),
                                c
                                    ? (0, i.jsx)("div", { className: eU.Lq, children: (0, i.jsx)(tl.y, {}) })
                                    : d
                                      ? (0, i.jsx)("div", {
                                            className: n4.u,
                                            children: (0, i.jsx)(ti.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                                text: es.intl.string(es.t.XBlaiC),
                                                onClick: () =>
                                                    st(a, null != l && l.length > 0 ? l[l.length - 1].id : null),
                                            }),
                                        })
                                      : null,
                            ],
                        });
                    },
                }),
            });
}
function ss(e) {
    let { message: t, onJump: n } = e;
    if (null == t) return null;
    let s = q.A.getChannel(t.channel_id);
    if (null == s || (0, np.Jm)(s) || (0, np.$v)(s)) return null;
    let a = n5.A.didAgree(s.getGuildId()),
        l = !!(0, np.Gc)(s) && !a;
    return (0, i.jsxs)("div", {
        className: eU.aP,
        children: [
            (0, i.jsx)(ei, {
                channel: s,
                onClick: (e) => (0, eu.KW)(t, se, () => n(e)),
                collapsed: !1,
                itemId: `header-${t.id}`,
                children: (0, i.jsxs)(R.e, {
                    size: "sm",
                    className: ea.GC,
                    children: [
                        (0, i.jsx)(j.m, {
                            text: es.intl.string(es.t["+TSRGD"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(I.K, {
                                variant: "secondary",
                                "aria-label": es.intl.string(es.t["+TSRGD"]),
                                size: "sm",
                                icon: M.t,
                                onClick: (e) => (0, eu.KW)(t, se, () => n(e)),
                            }),
                        }),
                        (0, i.jsx)(j.m, {
                            text: es.intl.string(es.t.e6RscS),
                            ariaHidden: !0,
                            children: (0, i.jsx)(I.K, {
                                variant: "secondary",
                                "aria-label": es.intl.string(es.t.e6RscS),
                                size: "sm",
                                icon: tR.A,
                                onClick: () => e5.A.deleteRecentMention(t.id),
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(
                    eh.A,
                    {
                        message: t,
                        channel: s,
                        className: eU.YD,
                        hideAccessories: l,
                        compact: eg.hH.getSetting(),
                        animateAvatar: !1,
                        focusProps: n9,
                        trackAnnouncementViews: !0,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
var sa = n(285796),
    sl = n(151282),
    si = n(199160),
    sr =
        (((l = {})[(l.SCHEDULED = 0)] = "SCHEDULED"),
        (l[(l.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (l[(l.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (l[(l.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (l[(l.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (l[(l.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        l),
    sd = n(970244);
let sc = "Scheduled Messages",
    so = { offset: { left: 4, right: -12 } };
function su(e) {
    let { onJump: t } = e;
    r.useEffect(() => {
        (0, sl.sy)();
    }, []);
    let n = (0, E.bG)([si.A], () => si.A.getScheduledMessagesForInbox()),
        s = (0, E.bG)([si.A], () => si.A.loading),
        a = (0, E.bG)([si.A], () => si.A.getMessagesPendingDeletion()),
        l = r.useMemo(
            () => Object.values(n).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [n],
        ),
        d = r.useRef(null),
        c = (0, O.A)("scheduled-messages", d);
    return ((0, eu.xN)(d), (0, eu.yW)(sc), s)
        ? (0, i.jsx)("div", { className: eU.Lq, children: (0, i.jsx)(tl.y, {}) })
        : 0 === l.length
          ? (0, i.jsx)(tm, { Icon: P.O, header: es.intl.string(es.t.aJQZfZ), tip: es.intl.string(es.t.rCN4pN) })
          : (0, i.jsx)(p.hD, {
                navigator: c,
                children: (0, i.jsx)(p.PR, {
                    children: (e) => {
                        let { ref: n, ...s } = e;
                        return (0, i.jsx)(N.Ch, {
                            className: eU.XG,
                            ref: (e) => {
                                (d.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...s,
                            children: l.map((e) =>
                                (0, i.jsx)(
                                    sh,
                                    {
                                        scheduledMessage: e,
                                        channelId: e.scheduledMessage.channelId,
                                        isPendingDeletion: a.has(e.scheduledMessageId),
                                        onJump: t,
                                    },
                                    e.scheduledMessageId,
                                ),
                            ),
                        });
                    },
                }),
            });
}
let sh = r.memo(function (e) {
    let { scheduledMessage: t, channelId: n, isPendingDeletion: s, onJump: a } = e,
        l = (0, E.bG)([q.A], () => q.A.getChannel(n)),
        { isError: d, stateMessage: c } = (function (e) {
            switch (e) {
                case sr.SCHEDULED:
                    return { isError: !1, stateMessage: es.intl.string(es.t.Fn6Odn) };
                case sr.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: es.intl.string(es.t.v5O2dK) };
                case sr.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: es.intl.string(es.t.j8uIfG) };
                case sr.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: es.intl.string(es.t["w6zHX/"]) };
                case sr.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: es.intl.string(es.t.pflV7z) };
                case sr.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: es.intl.string(es.t.j8uIfG) };
                default:
                    (0, eE.xb)(e);
            }
        })(t.state),
        o = r.useCallback(() => {
            (0, sl.mk)(t.scheduledMessageId)
                .then(() => {
                    (0, sd.Re)();
                })
                .catch((e) => {
                    (0, sd.kM)(e.message);
                });
        }, [t.scheduledMessageId]),
        u = r.useCallback(() => {
            (0, sd.CI)({ scheduledMessage: t });
        }, [t]);
    return null == l
        ? null
        : (0, i.jsxs)(
              "div",
              {
                  className: eU.aP,
                  children: [
                      (0, i.jsx)(ei, {
                          itemId: `header-${t.record.id}`,
                          channel: l,
                          onClick: (e) => (0, eu.n4)(l.id, l.guild_id, sc, () => a(e)),
                          collapsed: !1,
                          children: (0, i.jsxs)(R.e, {
                              size: "sm",
                              className: ea.GC,
                              children: [
                                  (0, i.jsx)(j.m, {
                                      text: es.intl.string(es.t.SBcdAN),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(I.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: P.O,
                                          "aria-label": es.intl.string(es.t.SBcdAN),
                                          onClick: u,
                                      }),
                                  }),
                                  (0, i.jsx)(j.m, {
                                      text: es.intl.string(es.t.O3sL8F),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(I.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sa.a,
                                          "aria-label": es.intl.string(es.t.O3sL8F),
                                          onClick: o,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                      (0, i.jsx)(eo, {
                          type: d ? "error" : "success",
                          text: d
                              ? c
                              : es.intl.formatToPlainString(es.t["CvHu/j"], {
                                    timestamp: new Date(t.sendAtTimestamp).valueOf(),
                                }),
                      }),
                      s
                          ? (0, i.jsx)(tl.y, { className: eU.Lq })
                          : (0, i.jsx)(
                                eh.A,
                                {
                                    message: t.record,
                                    channel: l,
                                    className: eU.YD,
                                    compact: eg.hH.getSetting(),
                                    animateAvatar: !1,
                                    focusProps: so,
                                },
                                t.record.id,
                            ),
                  ],
              },
              t.record.id,
          );
});
var sg = n(655165);
function sm(e) {
    let {
        dialogClassName: t,
        isScheduledMessagesEnabled: n,
        tab: s,
        setTab: a,
        closePopout: l,
        handleMentionsJump: r,
        showTutorial: d,
        setSeenTutorial: A,
        forLaterEnabled: f,
    } = e;
    return (0, i.jsx)(h.l, {
        "aria-label": es.intl.string(es.t.GSmTKJ),
        className: t,
        children: (0, i.jsx)("div", {
            className: c()(sg.k, { [sg.q]: n }),
            children: (0, i.jsx)(o.tH, {
                fallback: (0, i.jsx)(n0, {}),
                children: (0, i.jsx)(g.F, {
                    component: (0, i.jsx)(n3, { tab: s, setTab: a, closePopout: l }),
                    children:
                        s === u.Y2.MENTIONS
                            ? (0, i.jsx)(sn, { onJump: r })
                            : f && s === u.Y2.BOOKMARKS
                              ? (0, i.jsx)(eP, { closePopout: l, type: m.Yf.BOOKMARK }, "bookmarks")
                              : f && s === u.Y2.REMINDERS
                                ? (0, i.jsx)(eP, { closePopout: l, type: m.Yf.REMINDER }, "reminders")
                                : s === u.Y2.SCHEDULED
                                  ? (0, i.jsx)(su, { onJump: r })
                                  : (0, i.jsx)(nW, { onJump: r, showTutorial: d, setSeenTutorial: A, closePopout: l }),
                }),
            }),
        }),
    });
}
