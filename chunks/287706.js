n.r(t), n.d(t, { default: () => sh });
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
    m = n(284009),
    A = n.n(m),
    f = n(562708),
    x = n(837381),
    j = n(17928),
    p = n(866665),
    S = n(689175),
    N = n(695366),
    E = n(661531),
    y = n(297264),
    C = n(825484),
    v = n(408278),
    I = n(606096),
    R = n(933832),
    _ = n(22231),
    M = n(99677),
    L = n(406810),
    b = n(442433),
    D = n(493336),
    O = n(928039),
    T = n(139286),
    k = n(187322),
    G = n(939249),
    F = n(320448),
    U = n(778712),
    H = n(97808),
    w = n(812993),
    P = n(834730),
    K = n(397244),
    z = n(714114),
    B = n(394871),
    X = n(571694),
    J = n(47167),
    Y = n(713654),
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
        o = (0, x.rm)(d);
    return (0, i.jsx)(k.vN, {
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
                (0, i.jsx)(G.D, {
                    className: ea.YT,
                    onClick: s,
                    tabIndex: -1,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(er, { channel: t }),
                }),
                (0, i.jsx)(F._, { className: ea.ai, size: "xxs" }),
                (0, i.jsx)(ed, { channel: t, onClick: s, mentionCount: l }),
                n,
            ],
        }),
    });
}
function er(e) {
    let { channel: t } = e,
        n = (0, j.bG)([W.A], () => W.A.getGuild(t.guild_id));
    return null != n
        ? (0, i.jsx)(Z.Ay, { className: ea.Kk, guild: n, size: Z.Ay.Sizes.SMALL, showTooltip: !0, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, i.jsx)(V.A, { channel: t, size: U._3.SIZE_32, "aria-hidden": !0 })
          : (0, i.jsx)(H.eu, { size: U._3.SIZE_32, src: (0, X.Y)(t), "aria-hidden": !0 });
}
function ed(e) {
    let { channel: t, onClick: n, mentionCount: s } = e,
        a = (0, j.bG)([W.A], () => W.A.getGuild(t.guild_id)),
        l = (0, J.Ay)(t, !1),
        r = (0, j.bG)([ee.Ay], () => ee.Ay.getIsMentionLowImportance(t.id)),
        d = (0, j.bG)([q.A], () => q.A.getChannel(t.parent_id)),
        o = (0, J.Ay)(d),
        u = (0, Y.gU)(t, a);
    return (0, i.jsxs)("div", {
        className: ea.yP,
        children: [
            (0, i.jsx)(y.D, {
                variant: "text-md/semibold",
                color: "text-default",
                className: ea.lz,
                children: (0, i.jsxs)(G.D, {
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
                                          ? E.A.colors.BACKGROUND_MOD_STRONG.css
                                          : E.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, i.jsx)(P.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: t.isMultiUserDM()
                    ? es.intl.formatToPlainString(es.t.CxSA5N, { members: t.recipients.length + 1 })
                    : t.isPrivate()
                      ? (0, i.jsx)(ec, { channel: t })
                      : (0, i.jsx)(G.D, {
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
        } = (0, j.cf)([et.default, Q.A, $.A], () => {
            let e = et.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? Q.A.getStatus(e.id) : null,
                activities: null != e ? Q.A.getActivities(e.id) : null,
                applicationStream: null != e ? $.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, z.Ay)({ userId: n?.id });
    return (0, K.A)({ activities: a, status: s, applicationStream: l, voiceChannel: r })
        ? (0, i.jsx)(B.A, { user: n, activities: a, applicationStream: l, voiceChannel: r, hideTooltip: !0 })
        : null;
}
function eo(e) {
    let { type: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: c()(ea.h5, { [ea.z3]: "error" === t, [ea.kX]: "success" === t, [ea.qb]: "normal" === t }),
        children: [
            "error" === t ? (0, i.jsx)(N.E, { size: "xs" }) : (0, i.jsx)(L.O, { size: "xs" }),
            (0, i.jsx)(P.E, {
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
    ej = n(85109);
n(321073);
var ep = n(403362),
    eS = n(216623);
function eN() {
    return ej.A.getSavedMessages().map((e) => e.saveData);
}
var eE = n(403581),
    ey = n(862482),
    eC = n(192308),
    ev = n(404374),
    eI = n(725807),
    eR = n(428262),
    e_ = n(226017),
    eM = n(652215),
    eL = n(202541),
    eb = n(584906),
    eD = n(936037);
function eO() {
    return (0, e_.A)()
        ? (0, i.jsx)("div", {
              className: eb.do,
              children: (0, i.jsxs)("div", {
                  className: eb.U6,
                  children: [
                      (0, i.jsx)("img", { src: "/assets/29e2479161d09050.png", className: eb.Sl, alt: "" }),
                      (0, i.jsx)(y.D, {
                          className: eb.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: es.intl.string(es.t.erEf2g),
                      }),
                      (0, i.jsx)(P.E, {
                          variant: "text-md/medium",
                          color: "text-muted",
                          children: es.intl.string(es.t.NaRCXT),
                      }),
                  ],
              }),
          })
        : (0, i.jsxs)("div", {
              className: eb.do,
              children: [
                  (0, i.jsxs)("div", {
                      className: eb.U6,
                      children: [
                          (0, i.jsx)("img", { src: eD, className: eb.Sl, alt: "" }),
                          (0, i.jsx)(y.D, {
                              className: eb.wx,
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: es.intl.string(es.t.w4DRbZ),
                          }),
                          (0, i.jsx)(P.E, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: es.intl.string(es.t.F6u3E3),
                          }),
                      ],
                  }),
                  (0, i.jsx)(eT, {}),
              ],
          });
}
function eT() {
    let e = (0, eR.Dd)(eL.PremiumTypes.TIER_2),
        t = r.useCallback(
            () =>
                (0, eC.openModalLazy)(async () => {
                    let { default: e } = await n.e("22540").then(n.bind(n, 530951));
                    return (t) => (0, i.jsx)(e, { ...t });
                }),
            [],
        ),
        s = es.intl.format(es.t.qXh3fo, { nitroTierName: e, onClick: t });
    return (0, i.jsxs)("div", {
        className: eb.Zj,
        children: [
            (0, i.jsx)(eE.t, { size: "md", color: ev.k0.PREMIUM_TIER_2 }),
            (0, i.jsx)(P.E, { variant: "text-xs/medium", color: "text-strong", className: eb.tD, children: s }),
            (0, i.jsx)(eI.A, {
                className: eb.Oy,
                size: ey.lO.TINY,
                shinyButtonClassName: eb.Oy,
                subscriptionTier: eL.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: eM.JJy.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
function ek(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: a } = (0, ex.Ce)({ dueAt: t?.saveData.dueAt, now: n, type: ex.kh.SHORT });
    return null == t.saveData.dueAt || null == s ? null : (0, i.jsx)(eo, { type: a ? "error" : "normal", text: s });
}
var eG = n(318061),
    eF = n(824385);
let eU = "Bookmarks";
function eH(e) {
    let { closePopout: t } = e,
        n = (function () {
            let [e, t] = r.useState(eN),
                n = r.useRef(ej.A.getIsStale());
            return (
                r.useEffect(() => {
                    let e = ej.A.getLastChanged();
                    function s() {
                        let s = ej.A.getLastChanged();
                        if (e !== s) {
                            if (((e = s), n.current && !ej.A.getIsStale())) {
                                (n.current = !1), t(eN());
                                return;
                            }
                            t((e) => {
                                let t = [...e],
                                    n = new Map(ej.A.getSavedMessages().map((e) => [e.saveData.messageId, e]));
                                for (let s of e) n.has(s.messageId) ? n.delete(s.messageId) : t.splice(t.indexOf(s), 1);
                                for (let e of n.values()) t.push(e.saveData);
                                return t;
                            });
                        }
                    }
                    return (
                        ej.A.addChangeListener(s),
                        () => {
                            ej.A.removeChangeListener(s);
                        }
                    );
                }, []),
                r.useEffect(() => {
                    (0, eS.AX)();
                }, []),
                (0, j.yK)([ej.A], () => e.map((e) => ej.A.getSavedMessage(e.channelId, e.messageId)).filter(ep.Vq))
            );
        })();
    (0, T.A)(
        {
            type: f.ImpressionTypes.POPOUT,
            name: f.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: { total_count: n.length, overdue_count: ej.A.getOverdueMessageReminderCount() },
        },
        {},
        [n.length],
    );
    let s = r.useRef(null),
        a = (0, O.A)("for-later", s);
    (0, eu.xN)(s), (0, eu.yW)(eU);
    let [l, d] = r.useState(new Date());
    return (r.useEffect(() => {
        let e = setInterval(() => d(new Date()), eA.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []),
    0 === n.length)
        ? (0, i.jsx)(eO, {})
        : (0, i.jsx)(x.hD, {
              navigator: a,
              children: (0, i.jsx)(x.PR, {
                  children: (e) => {
                      let { ref: a, ...r } = e;
                      return (0, i.jsx)(S.Ch, {
                          ref: (e) => {
                              (s.current = e), (a.current = e?.getScrollerNode() ?? null);
                          },
                          className: eF.XG,
                          ...r,
                          children: n.map((e) =>
                              (0, i.jsx)(
                                  ew,
                                  { savedMessage: e, closePopout: t, throttledNow: l },
                                  e.saveData.messageId,
                              ),
                          ),
                      });
                  },
              }),
          });
}
function ew(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        a = (0, ex.vr)(t),
        l = r.useCallback(
            async (e) => {
                await (0, ex.le)(t, a),
                    e.shiftKey || n(),
                    D.A.trackJump(t.saveData.channelId, t.saveData.messageId, eU);
            },
            [n, t, a],
        ),
        d = (0, j.bG)(
            [em.A],
            () => !!(a?.type === eM.rbe.UNKNOWN || a?.isPrivate()) || em.A.can(eM.xBc.VIEW_CHANNEL, a),
        );
    return null != a && null != t.message && d
        ? (0, i.jsxs)("div", {
              className: eF.aP,
              children: [
                  (0, i.jsx)(ei, {
                      itemId: `header-${t.message.id}`,
                      channel: a,
                      onClick: (e) => {
                          l(e), n();
                      },
                      collapsed: !1,
                      children: (0, i.jsx)(C.e, {
                          size: "sm",
                          className: ea.GC,
                          children: (0, i.jsx)(eP, { savedMessage: t, jumpToMessage: l }),
                      }),
                  }),
                  null != t.saveData.dueAt ? (0, i.jsx)(ek, { reminder: t, throttledNow: s }) : null,
                  (0, i.jsx)(
                      eh.A,
                      {
                          message: t.message,
                          channel: a,
                          className: eF.YD,
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
              className: c()(eF.aP, eG.tq),
              children: [
                  (0, i.jsxs)("div", {
                      className: eG.kb,
                      children: [
                          (0, i.jsx)("div", {
                              className: eG.Bx,
                              children: (0, i.jsx)(N.E, { size: "xxs", color: E.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                          }),
                          (0, i.jsx)(y.D, {
                              variant: "text-md/semibold",
                              color: "text-default",
                              children:
                                  null != t.saveData.dueAt
                                      ? es.intl.string(es.t["wuQm+j"])
                                      : es.intl.string(es.t.o572Fe),
                          }),
                      ],
                  }),
                  (0, i.jsx)(C.e, {
                      size: "sm",
                      className: ea.GC,
                      children: (0, i.jsx)(p.m, {
                          text: es.intl.string(es.t.SvXS1Z),
                          ariaHidden: !0,
                          children: (0, i.jsx)(v.K, {
                              variant: "secondary",
                              "aria-label": es.intl.string(es.t.SvXS1Z),
                              size: "sm",
                              icon: I.c,
                              onClick: () => (0, ef.x)(t.saveData),
                          }),
                      }),
                  }),
              ],
          });
}
function eP(e) {
    let { savedMessage: t, jumpToMessage: s } = e;
    return (A()(null != t.message, "Saved message must be cached for For Later action buttons"),
    null != t.saveData.dueAt)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(p.m, {
                      text: es.intl.string(es.t.yjGtdJ),
                      ariaHidden: !0,
                      children: (0, i.jsx)(v.K, {
                          variant: "secondary",
                          "aria-label": es.intl.string(es.t.yjGtdJ),
                          size: "sm",
                          icon: R.A,
                          onClick: () =>
                              (0, ef.Y)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0,
                              }),
                      }),
                  }),
                  (0, i.jsx)(p.m, {
                      text: es.intl.string(es.t.vrbqs1),
                      ariaHidden: !0,
                      children: (0, i.jsx)(v.K, {
                          variant: "secondary",
                          "aria-label": es.intl.string(es.t.vrbqs1),
                          size: "sm",
                          icon: _.R,
                          onClick: (e) =>
                              (0, b.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("75133").then(n.bind(n, 195404));
                                  return (n) =>
                                      (0, i.jsx)(e, { ...n, label: es.intl.string(es.t.roMu1H), message: t.message });
                              }),
                      }),
                  }),
                  (0, i.jsx)(p.m, {
                      text: es.intl.string(es.t["+TSRGD"]),
                      ariaHidden: !0,
                      children: (0, i.jsx)(v.K, {
                          variant: "secondary",
                          "aria-label": es.intl.string(es.t["+TSRGD"]),
                          size: "sm",
                          icon: M.t,
                          onClick: (e) => s(e),
                      }),
                  }),
                  (0, i.jsx)(p.m, {
                      text: es.intl.string(es.t.SvXS1Z),
                      ariaHidden: !0,
                      children: (0, i.jsx)(v.K, {
                          variant: "secondary",
                          "aria-label": es.intl.string(es.t.SvXS1Z),
                          size: "sm",
                          icon: I.c,
                          onClick: () => (0, ef.x)(t.saveData),
                      }),
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(p.m, {
                      text: es.intl.string(es.t.mJ3P0N),
                      ariaHidden: !0,
                      children: (0, i.jsx)(v.K, {
                          variant: "secondary",
                          "aria-label": es.intl.string(es.t.mJ3P0N),
                          size: "sm",
                          icon: L.O,
                          onClick: (e) =>
                              (0, b.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("75133").then(n.bind(n, 195404));
                                  return (n) =>
                                      (0, i.jsx)(e, { ...n, label: es.intl.string(es.t.mJ3P0N), message: t.message });
                              }),
                      }),
                  }),
                  (0, i.jsx)(p.m, {
                      text: es.intl.string(es.t["+TSRGD"]),
                      children: (0, i.jsx)(v.K, {
                          variant: "secondary",
                          "aria-label": es.intl.string(es.t["+TSRGD"]),
                          size: "sm",
                          icon: M.t,
                          onClick: (e) => s(e),
                      }),
                  }),
                  (0, i.jsx)(p.m, {
                      text: es.intl.string(es.t.SvXS1Z),
                      ariaHidden: !0,
                      children: (0, i.jsx)(v.K, {
                          variant: "secondary",
                          "aria-label": es.intl.string(es.t.SvXS1Z),
                          size: "sm",
                          icon: I.c,
                          onClick: () => (0, ef.x)(t.saveData),
                      }),
                  }),
              ],
          });
}
var eK = n(702841),
    ez = n(912592),
    eB = n(890856),
    eX = n(761508),
    eJ = n(966597),
    eY = n(910425),
    eV = n(214947),
    eZ = n(711950),
    e$ = n(322387),
    eq = n(912309),
    eW = n(174459),
    eQ = n(109261);
function e0(e) {
    let { closePopout: t } = e,
        n = (0, eq.kX)();
    return (0, i.jsx)(p.m, {
        asContainer: !0,
        text: es.intl.string(es.t["lMR96+"]),
        children: (0, i.jsxs)(G.D, {
            "aria-label": `${es.intl.string(es.t["lMR96+"])}, ${n}`,
            className: eQ.b,
            onClick: () => {
                eW.default.track(eM.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: e$.e1.FRIEND_REQUESTS_BUTTON_CLICK,
                }),
                    eZ.A.transitionToSection(eM.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, i.jsx)(eV.$, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(w.hV, { count: n, color: E.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
var e1 = n(980707),
    e2 = n(477782),
    e3 = n(922016),
    e6 = n(783977),
    e7 = n(378939),
    e4 = n(309010),
    e8 = n(409686);
function e5(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, j.bG)([q.A, e4.Ay], () => q.A.getChannel(e4.Ay.getChannelId())),
        {
            everyoneFilter: a,
            roleFilter: l,
            guildFilter: r,
        } = (0, j.cf)([e8.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = e8.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(e1.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": es.intl.string(es.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(e2.sL, {
                id: "Everyone",
                label: es.intl.string(es.t.cdyUsV),
                action: function () {
                    e7.A.setGuildFilter({ everyoneFilter: !a });
                },
                checked: a,
            }),
            (0, i.jsx)(e2.sL, {
                id: "Roles",
                label: es.intl.string(es.t.lZejCq),
                action: function () {
                    e7.A.setGuildFilter({ roleFilter: !l });
                },
                checked: l,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, i.jsx)(e2.sL, {
                      id: "All Servers",
                      label: es.intl.string(es.t.GWMA6s),
                      action: function () {
                          e7.A.setGuildFilter({
                              guildFilter: r === eM.KE7.THIS_SERVER ? eM.KE7.ALL_SERVERS : eM.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === eM.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function e9() {
    let e = r.useRef(null);
    return (0, i.jsx)(e3.Y, {
        targetElementRef: e,
        align: "right",
        animation: e3.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(e5, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(p.m, {
                text: es.intl.string(es.t.pEasFX),
                targetElementRef: e,
                children: (0, i.jsx)(v.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": es.intl.string(es.t.pEasFX),
                    icon: e6.R,
                    onClick: n,
                }),
            });
        },
    });
}
var te = n(481613),
    tt = n.n(te),
    tn = n(621466),
    ts = n(289873),
    ta = n(821609),
    tl = n(228366),
    ti = n(964486),
    tr = n(775602),
    td = n(625494),
    tc = n(723702),
    to = n(303727),
    tu = n(495427);
function th(e) {
    let { Icon: t, header: n, tip: s, disableStars: a } = e;
    return (0, i.jsxs)("div", {
        className: tu.kL,
        children: [
            (0, i.jsxs)("div", {
                className: tu.zc,
                children: [
                    (0, i.jsx)(t, { color: "currentColor", size: "custom", className: tu.Kk, width: 36, height: 36 }),
                    a ? null : (0, i.jsx)(to.A, { className: tu.uf }),
                ],
            }),
            (0, i.jsx)(y.D, { className: tu.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(P.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    a
                        ? null
                        : (0, i.jsxs)(P.E, {
                              tag: "span",
                              className: tu.PP,
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
var tg = n(143838),
    tm = n(640238);
function tA(e) {
    let { onClick: t } = e,
        [n, s] = r.useState(!1);
    function a() {
        t(),
            eW.default.track(eM.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(tf, { confirm: a, cancel: () => s(!1) }) : null,
            (0, i.jsx)(p.m, {
                text: es.intl.string(es.t["8k+6QY"]),
                children: (0, i.jsx)(v.K, {
                    variant: "secondary",
                    "aria-label": es.intl.string(es.t["8k+6QY"]),
                    size: "sm",
                    icon: tg.i,
                    onClick: function (e) {
                        e.shiftKey ? a() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function tf(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(tm.M, {
        dismissable: !0,
        header: es.intl.string(es.t.h4bVZ2),
        confirmText: es.intl.string(es.t.e6RscS),
        cancelText: es.intl.string(es.t["ETE/oC"]),
        confirmButtonColor: ey.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(P.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: es.intl.string(es.t["0MQ0Bf"]),
        }),
    });
}
var tx = n(435558),
    tj = n.n(tx),
    tp = n(749314),
    tS = n(617498),
    tN = n(311283),
    tE = n(717421),
    ty = n(334738),
    tC = n(95561),
    tv = n(976860),
    tI = n(847374),
    tR = n(345550);
function t_(e) {
    let { collapsed: t, onClick: n } = e,
        s = es.intl.string(t ? es.t.dcl9MQ : es.t.iTcuma);
    return (0, i.jsx)(p.m, {
        text: s,
        ariaHidden: !0,
        children: (0, i.jsx)(G.D, {
            className: tR.x6,
            "aria-label": s,
            onClick: n,
            children: (0, i.jsx)(tI.a, { className: c()(tR.ai, { [tR.yZ]: t }), size: "xs" }),
        }),
    });
}
var tM = n(775924);
let tL = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    tb = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function tD(e) {
    let { collapsed: t, children: n } = e,
        s = r.useRef(null),
        [a, l] = (0, tE.z)(() => (t ? tL : tb), "respect-motion-settings", []),
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
                          immediate: tr.Ay.useReducedMotion,
                      })
                    : l({
                          from: { height: 0, opacity: 0 },
                          to: { height: e, opacity: 1 },
                          immediate: tr.Ay.useReducedMotion,
                          onRest: (e) => {
                              e.finished && l({ height: "auto", immediate: !0 });
                          },
                      }));
        }, [t, l]),
        (0, i.jsx)(tS.animated.div, {
            className: tM.r,
            style: a,
            children: (0, i.jsx)("div", { ref: s, inert: !!t || void 0, children: n }),
        })
    );
}
var tO = n(782603),
    tT = n(461678),
    tk = n(914703);
function tG(e) {
    let { channel: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)(e3.Y, {
        targetElementRef: n,
        align: "right",
        animation: e3.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(tk.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: es.intl.string(es.t.ljs3Oe),
                  })
                : (0, i.jsx)(tT.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: es.intl.string(es.t.ljs3Oe),
                      location: { section: eM.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(p.m, {
                text: es.intl.string(es.t.h850Ss),
                targetElementRef: n,
                children: (0, i.jsx)(v.K, {
                    "aria-label": es.intl.string(es.t.h850Ss),
                    icon: tO.X,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var tF = n(350527),
    tU = n(218152),
    tH = n(970278),
    tw = n(747926),
    tP = n(935208),
    tK = n(37411),
    tz = n(159574);
function tB(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        a = (0, j.yK)(
            [tH.A, q.A],
            () =>
                tj()(tH.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return tP.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return q.A.getChannel(t);
                    })
                    .filter(ep.Vq)
                    .sort((e, t) => tP.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        l = r.useCallback((e, t) => {
            (0, tw.JA)(e, t, tK.H9.INBOX);
        }, []);
    return (
        r.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== a.length ||
                tl.h.wait(() => {
                    (0, ty.ack)(
                        t.channelId,
                        {
                            section: eM.JJy.INBOX,
                            object: eM.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: eM.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId);
                });
        }),
        (0, i.jsx)("div", {
            className: tz.k,
            children: a.map((e) =>
                (0, i.jsx)(
                    tU.Cp,
                    { channel: n, children: (0, i.jsx)(tF.Ay, { className: tz.u, threadId: e.id, goToThread: l }) },
                    e.id,
                ),
            ),
        })
    );
}
var tX = n(989349),
    tJ = n.n(tX),
    tY = n(123292),
    tV = n(857069),
    tZ = n(789645),
    t$ = n(33358),
    tq = n(384231),
    tW = n(207133),
    tQ = n(704413),
    t0 = n(9842),
    t1 = n(994500),
    t2 = n(5095),
    t3 = n(320095),
    t6 = n(143413),
    t7 = n(763754),
    t4 = n(467073),
    t8 = n(491182),
    t5 = n(860227),
    t9 = n(500414),
    ne = n(375199),
    nt = n(824556),
    nn = n(715628),
    ns = n(752636),
    na = n(352043),
    nl = n(268719),
    ni = n(234957),
    nr = n(888675),
    nd = n(466959),
    nc = n(364932);
let no = r.memo(function e(t) {
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
        g = eM.sl8.has(a.type) ? a.messageReference : void 0,
        m = (0, j.bG)([t0.A], () => t0.A.getMessageByReference(g)),
        A = (0, j.bG)([q.A], () =>
            a.type === eM.lAJ.THREAD_STARTER_MESSAGE && m.state === t0.a.LOADED
                ? q.A.getChannel(m.message.channel_id)
                : null,
        ),
        f = eg.X6.useSetting(),
        x = eg.hD.useSetting(),
        p = eg.rs.useSetting(),
        S = eg.kt.useSetting(),
        N = (0, tq.S)((a.editedTimestamp ?? a.timestamp).valueOf()),
        E = (0, tW.A)(s?.id),
        { disableReactionCreates: y } = (0, t4.A)(s),
        {
            content: C,
            hasSpoilerEmbeds: v,
            hasBailedAst: I,
        } = (0, ne.A)(a, {
            hideSimpleEmbedContent: x && p,
            allowList: N,
            allowHeading: N,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        R = (0, t7.Ay)(a),
        _ = (0, j.bG)(
            [q.A],
            () => a.hasFlag(eM.pr7.HAS_THREAD) && q.A.getChannel(tP.default.castMessageIdAsChannelId(a.id)),
        ),
        M = a.type === eM.lAJ.THREAD_STARTER_MESSAGE && m.state === t0.a.LOADED && null != A,
        L = !M && void 0 === n,
        b = (0, nt.A)({ message: a, channel: s, announcementEnabled: L }),
        D = (0, t$.P)(a),
        O = (0, t2._f)(a.id, a.channel_id),
        T = (0, tQ.A)(a),
        k = (0, t5.fF)(a);
    return M
        ? (0, i.jsx)(e, { ...t, message: m.message, channel: A, hasThread: !1 })
        : (t1.A.isBlockedForMessage(a) ? (n = es.t["+FcYM/"]) : t1.A.isIgnoredForMessage(a) && (n = es.t["VFWjc+"]),
            void 0 !== n)
          ? (0, i.jsx)(nu, { className: r, compact: l, count: 1, collapsedReason: n })
          : (0, i.jsx)(t8.A, {
                compact: l,
                className: c()(r, { [nc.M1]: (0, t3.ec)(a), [nc.XN]: u, [nc._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, ni.A)(a, s, g, m, l),
                childrenHeader: (0, ns.A)({ ...t, author: R, guildId: s.guild_id }),
                childrenAccessories: (0, i.jsx)(t9.iV, {
                    channel: s,
                    message: a,
                    hasSpoilerEmbeds: v,
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
                    gifAutoPlay: S,
                    poll: T,
                    showListsAndHeaders: N,
                    showMaskedLinks: N,
                    shouldHideMediaOptions: E,
                    enabledContentHarmTypeFlags: D,
                    ctaButtonType: O,
                }),
                childrenExecutedCommand: (0, nl.A)(a, s, l),
                childrenMessageContent: (0, nn.A)(t, C),
                childrenSystemMessage: (0, na.A)(t),
                onContextMenu: d,
                onClick: o,
                hasThread: !1 !== h && null != _ && a.hasFlag(eM.pr7.HAS_THREAD),
                hasReply: a.type === eM.lAJ.REPLY,
                isSystemMessage: (0, t6.A)(a),
                messageRef: b,
                author: R,
                "aria-labelledby": k,
                "aria-roledescription": es.intl.string(es.t.BAB0yK),
            });
});
function nu(e) {
    let { className: t, count: n, compact: s, collapsedReason: a } = e;
    return (0, i.jsx)(t8.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, i.jsx)(nr.A, {
            compact: s,
            className: nd.L9,
            iconNode: (0, i.jsx)(tZ.P, { size: "md", color: "currentColor", className: nd.Q6 }),
            children: (0, i.jsx)("div", { className: nd.Fo, children: es.intl.format(a, { count: n }) }),
        }),
    });
}
var nh = n(58703),
    ng = n(195172);
function nm(e) {
    let { className: t, onJump: n } = e,
        [s, a] = r.useState(!1);
    return (0, i.jsx)(G.D, {
        className: c()(ng.n, t),
        onClick: function (e) {
            a(!0), n(e);
        },
        children: s
            ? (0, i.jsx)(ts.y, { type: ts.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(P.E, { variant: "text-xs/medium", className: ng.Q, children: es.intl.string(es.t.k5WiPf) }),
    });
}
var nA = n(143236),
    nf = n(323073),
    nx = n(181079),
    nj = n(567035),
    np = n(202803),
    nS = n(455234),
    nN = n(695633),
    nE = n(152007),
    ny = n(607508),
    nC = n(594061),
    nv = n(617617),
    nI = n(95701),
    nR = n(808728),
    n_ = n(232835),
    nM = n(711014),
    nL = n(543465),
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
    nD = (((a = {}).Loading = "loading"), (a.Loaded = "loaded"), (a.Done = "done"), a);
class nO extends nA.EventEmitter {
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
                        (A()("nsfw" !== e.type, "this channel should already be loaded"),
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
                let t = nT(e, !1);
                if (t.messages.some(np.$r)) return D.A.clearChannel(e.channelId), { ...e, messages: [] };
                return t;
            }
            case "nsfw":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = tH.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
            default:
                return (0, ep.xb)(e);
        }
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) =>
                "messages" === e.type && e.hasLoadedAnything ? nT(e, !1, !0) : e,
            ),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        tl.h.wait(() =>
            ty.ack(
                t,
                {
                    section: eM.JJy.INBOX,
                    object: eM.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: eM.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
              tr.Ay.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        ty.ack(
            e.channelId,
            { section: eM.JJy.INBOX, object: eM.ZSU.UNDO_MARK_AS_READ, objectType: eM.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        tl.h.wait(() => (0, nj.A)([e], eM.JJy.INBOX)),
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
        ty.Uq(this.state.channels.map((e) => ({ channelId: e.channelId, messageId: e.newestUnreadMessageId }))),
            this.setState({ channels: [] });
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: a, loadState: l } = this.state,
            i = tj().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            d = !r.collapsed;
        (a[t] = d),
            (0, nC.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = d;
                },
                nC.Sb.FREQUENT_USER_ACTION,
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
        let e = this.state.channels.filter((e) => !nL.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nE.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = tH.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        D.A.clearChannel(e.channelId);
        let t = D.A.fetchMessages({
            channelId: e.channelId,
            limit: eM.EMb,
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
                            A()("messages" === e.type, "channel cannot change type");
                            let n = nT(e, !0);
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
                                A()("messages" === e.type, "channel cannot change type"),
                                {
                                    ...nT(e, !0),
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
function nT(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = n_.A.getMessages(e.channelId),
        a = s
            .toArray()
            .filter(
                (t) =>
                    tP.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= tP.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (a.length === e.messages.length && a.every((t, n) => e.messages[n] === t) && n) return e;
    let l = null != s.getAfter(e.oldestReadMessageId) || a[0]?.id === e.oldestUnreadMessageId,
        i = a[a.length - 1],
        r = tP.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || a.length >= 25;
    return {
        ...e,
        messages: a,
        hasLoadedAnything: e.hasLoadedAnything || l || t,
        hasLoadedFirst: e.hasLoadedFirst || l || t,
        isFullyLoaded: e.isFullyLoaded || (l && r) || (t && !s.hasMoreAfter),
    };
}
function nk() {
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
            q.A.getSortedPrivateChannels().forEach((n) => nG(e, t, null, n.id)),
            nM.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = nR.Ay.getSelectableChannelIds(n),
                    a = nN.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    nG(e, t, n, s);
                    let l = a[s] ?? {};
                    for (let s in l) nG(e, t, n, s);
                });
            }),
            tj().sortBy(t, (e) => e.sortOrder)),
        a = tj()
            .uniq(s.map((e) => e.guildId))
            .filter(ep.Vq);
    return (
        tl.h.dispatch({ type: "INBOX_OPEN", guildIds: a }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function nG(e, t, n, s) {
    if (null == s) return;
    let a = q.A.getChannel(s);
    if (null == a || (!nI.Le.has(a.type) && nL.Ay.isGuildOrCategoryOrChannelMuted(n, a.id))) return;
    if (a.isPrivate()) {
        if (0 === ee.Ay.getMentionCount(s)) return;
    } else if (!(0, nS.Y)(a) && 0 === ee.Ay.getMentionCount(s)) return;
    if ((!a.isPrivate() && !em.A.can(eM.xBc.READ_MESSAGE_HISTORY, a)) || (0, nf.qR)(a)) return;
    let l = ee.Ay.ackMessageId(s);
    if (null == l) {
        let e = W.A.getGuild(a.guild_id);
        if (null == e || null == e.joinedAt) return;
        l = tP.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = ee.Ay.getOldestUnreadMessageId(s),
        r = ee.Ay.lastMessageId(s),
        d = ee.Ay.getMentionCount(s),
        c = d > 0 || a.isPrivate();
    if (null == r || tP.default.compare(l, r) >= 0) return;
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
            if (nx.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (ee.Ay.getMentionCount(t) > 0) return ee.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = tP.default.extractTimestamp(n);
                if (Date.now() - e > nU) return 8;
                if (Date.now() - e > nF) return 6;
            }
            if (s.isThread()) {
                let e = (0, ny.l)(s);
                return e === tK.CP.ALL_MESSAGES ? 4 : e === tK.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = nL.Ay.getChannelMessageNotifications(e, t),
                    s = n === eM.orn.NULL ? nL.Ay.getMessageNotifications(e) : n;
                return s === eM.orn.ALL_MESSAGES ? 4 : s === eM.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, nf.qR)(a)
        ? t.push({ ...o, type: "nsfw" })
        : a.isForumLikeChannel()
          ? t.push({ ...o, type: "forum" })
          : t.push({ ...o, type: "messages", messages: [] });
}
let nF = 2 * eA.A.Millis.DAY,
    nU = 10 * eA.A.Millis.DAY;
var nH = n(358402);
let nw = { left: 4, right: -12 },
    nP = [eM.lAJ.THREAD_CREATED];
function nK(e) {
    let { channel: t, message: n, compact: s, isGroupStart: a, gotoChannel: l } = e,
        d = (0, x.rm)(n.id ?? ""),
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
        o = nP.includes(n.type);
    return (0, i.jsx)(k.vN, {
        offset: nw,
        children: (0, i.jsxs)("div", {
            className: nH.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, i.jsx)(nm, { className: nH.nn, onJump: (e) => l(e, n.id) }),
                (0, i.jsx)(no, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: nH.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: a,
                }),
            ],
        }),
    });
}
function nz(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        a = eg.hH.useSetting(),
        l = 0 === t.messages.length || tJ()(t.messages[0].timestamp).isSame(tJ()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!l && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, nh.i$)(e.timestamp, "LL");
            r.push((0, i.jsx)(tp.A, { className: nH.yF, children: t }, t)), (d = tJ()(e.timestamp));
        }
        let t = null == c || (0, tV.A)(n, c, e);
        (c = e), r.push((0, i.jsx)(nK, { channel: n, message: e, compact: a, isGroupStart: t, gotoChannel: s }, e.id));
    });
    let u = o[o.length - 1];
    return (
        null != u &&
            0 > tP.default.compare(u.id, t.newestUnreadMessageId) &&
            r.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: nH.Gr,
                        children: (0, i.jsx)(tY.Q, {
                            variant: "primary",
                            text: `${es.intl.string(es.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, u.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, i.jsx)(ts.y, {}, "spinner")]),
        (0, i.jsx)("div", { className: nH.DZ, children: r })
    );
}
let nB = r.memo(function (e) {
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
        let { opacity: o, size: u } = (0, tE.z)(
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
            children: (0, i.jsx)(nX, { ...e }),
        });
    }),
    nX = r.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: a } = e,
            l = (0, j.bG)([q.A], () => q.A.getChannel(t.channelId));
        if (
            (r.useEffect(() => {
                null == l ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    tl.h.wait(() => {
                        (0, ty.ack)(
                            t.channelId,
                            {
                                section: eM.JJy.INBOX,
                                object: eM.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: eM.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
            if ("forum" === t.type) (0, eu.n4)(t.channelId, t.guildId, nZ, () => n(e));
            else {
                let a = s ?? t.oldestUnreadMessageId;
                D.A.trackJump(t.channelId, a, nZ), (0, tv.pX)(eM.BVt.CHANNEL(t.guildId, t.channelId, a)), n(e);
            }
        }
        function c() {
            a(t),
                (0, tC.zV)(eM.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                });
        }
        let o = !l.isNSFW();
        return (0, i.jsx)("div", {
            className: eF.aP,
            children: (0, i.jsx)(g.F, {
                component: (0, i.jsxs)(ei, {
                    channel: l,
                    onClick: d,
                    collapsed: t.collapsed,
                    mentionCount: t.mentionCount,
                    onToggleCollapse: o ? c : void 0,
                    itemId: `header-${l.id}`,
                    children: [
                        (0, i.jsxs)(C.e, {
                            size: "sm",
                            className: ea.GC,
                            children: [(0, i.jsx)(tG, { channel: l }), (0, i.jsx)(nJ, { ...e })],
                        }),
                        o ? (0, i.jsx)(t_, { collapsed: t.collapsed, onClick: c }) : null,
                    ],
                }),
                children: (0, i.jsx)(tD, {
                    collapsed: t.collapsed,
                    children:
                        "messages" === t.type
                            ? (0, i.jsx)(nz, { channel: t, channelRecord: l, gotoChannel: d })
                            : "forum" === t.type
                              ? (0, i.jsx)(tB, { channel: t, channelRecord: l, deleteChannel: s })
                              : null,
                }),
            }),
        });
    });
function nJ(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: a } = e,
        l = (0, tN.A)() && null != t.guildId;
    return (0, i.jsx)(p.m, {
        text: l ? es.intl.string(es.t["5lLMhM"]) : es.intl.string(es.t.e6RscS),
        ariaHidden: !0,
        children: (0, i.jsx)(v.K, {
            variant: "secondary",
            "aria-label": l ? es.intl.string(es.t["5lLMhM"]) : es.intl.string(es.t.e6RscS),
            size: "sm",
            icon: l ? tg.i : R.A,
            onClick: function () {
                l && null != t.guildId ? s(t.guildId) : n(t),
                    (0, tC.zV)(eM.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: a() - 1,
                    });
            },
        }),
    });
}
var nY = n(245233),
    nV = n(552392);
let nZ = "Inbox";
function n$(e) {
    var t, n, s, a, l, d;
    let { onJump: o, showTutorial: u, setSeenTutorial: h, closePopout: g } = e,
        m = r.useRef(null),
        A = (0, O.A)("unreads", m);
    (0, eu.xN)(m), (0, eu.yW)(nZ);
    let [f, p] = (function (e) {
            let [t, n] = r.useState(() => new nO(nk(), e)),
                [s, a] = r.useState(!1),
                l = r.useRef(Date.now()),
                [i, d] = r.useState(() => nk());
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
                        r = nk();
                    0 === r.channels.length || t - l.current < 10 * eA.A.Millis.SECOND
                        ? a(!0)
                        : ((l.current = Date.now()), n(new nO(r, e)));
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
                    () => (n_.A.addChangeListener(t.reloadMessages), () => n_.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                r.useEffect(
                    () => (
                        nL.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => nL.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        nE.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => nE.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        tH.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => tH.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [i, t]
            );
        })(m),
        { loadState: N, channels: E } = f,
        { maybeLoadMore: y } = p,
        C = (0, j.bG)([tr.Ay], () => tr.Ay.messageGroupSpacing);
    return ((t = m),
    (n = f),
    (s = p),
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
    (l = p),
    r.useEffect(() => {
        function e() {
            let e = a.channels.find((e) => !e.collapsed);
            null != e && l.markChannelRead(e);
        }
        return (
            td._.subscribe(eM.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
            () => {
                td._.unsubscribe(eM.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
            }
        );
    }, [l, a.channels]),
    (d = p),
    r.useEffect(() => {
        function e(e) {
            if ((0, eC.hasAnyModalOpen)()) return;
            let t = (0, tn.BF)(e)?.activeElement;
            (0, tn.Cw)(t) ||
                (((0, tc.isMac)() || (0, tc.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
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
            tl.h.subscribe("CONNECTION_OPEN", g),
            () => {
                tl.h.unsubscribe("CONNECTION_OPEN", g);
            }
        ),
        [g],
    ),
    (0, ti.Ay)(
        () => (
            td._.subscribe(eM.jej.INBOX_MARK_ALL_UNREADS_READ, p.markAllRead),
            () => {
                td._.unsubscribe(eM.jej.INBOX_MARK_ALL_UNREADS_READ, p.markAllRead);
            }
        ),
    ),
    0 === E.length)
        ? (0, i.jsx)(th, {
              Icon: ez.K,
              header: es.intl.string(es.t["6XMM+D"]),
              tip: tt().os?.family === "OS X" ? es.intl.string(es.t.w9uDOW) : es.intl.string(es.t.BiUJC6),
          })
        : (0, i.jsx)(x.hD, {
              navigator: A,
              children: (0, i.jsx)(x.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, i.jsxs)(S.Ch, {
                          ref: (e) => {
                              (m.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: N === nD.Done ? void 0 : y,
                          className: c()(eF.XG, `group-spacing-${C}`),
                          children: [
                              u ? (0, i.jsx)(nq, { setSeenTutorial: h }) : null,
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
                                                            tp.A,
                                                            {
                                                                className: nY.y,
                                                                contentClassName: nY.$,
                                                                children: es.intl.string(es.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === nb.NoNotifications &&
                                                    o.push(
                                                        (0, i.jsx)(
                                                            tp.A,
                                                            {
                                                                className: nY.y,
                                                                contentClassName: nY.$,
                                                                children: es.intl.string(es.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          o.push(
                                              (0, i.jsx)(
                                                  nB,
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
                              })(E, p, o),
                              N === nD.Done ? null : (0, i.jsx)(ts.y, { className: nV.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function nq(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: nV.d$,
        children: [
            (0, i.jsx)("div", { className: nV.cm, children: (0, i.jsx)(ez.K, { size: "md", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(y.D, {
                        className: nV.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: es.intl.string(es.t.vZPktJ),
                    }),
                    (0, i.jsx)(P.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: es.intl.string(es.t.vWkIII),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: nV.dh,
                        children: (0, i.jsx)(ta.$, {
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
function nW() {
    return (0, i.jsx)(th, {
        Icon: ez.K,
        disableStars: !0,
        header: es.intl.string(es.t["KG/ynf"]),
        tip: es.intl.string(es.t.cvcKzX),
    });
}
function nQ() {
    return (0, i.jsx)(tA, { onClick: () => td._.dispatch(eM.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var n0 = n(668451);
function n1(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        { enabled: a } = eJ.A.useConfig({ location: "RecentsPopout" }),
        l = (0, eY.Sc)(),
        r = (0, eK.bG)([ej.A], () => ej.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: n0.wx,
        children: [
            (0, i.jsxs)("div", {
                className: n0.qd,
                children: [
                    (0, i.jsx)(ez.K, { size: "md", color: "currentColor", className: n0.yH }),
                    (0, i.jsx)(y.D, {
                        className: n0.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: es.intl.string(es.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(eB.s, {
                        className: n0.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": es.intl.string(es.t["8k+6QY"]),
                        children: [(0, i.jsx)(n2, { tab: t }), (0, i.jsx)(e0, { closePopout: s })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: n0.YF,
                children: (0, i.jsxs)(eX.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: n0.$H,
                    children: [
                        (0, i.jsx)(eX.V.Item, {
                            id: u.Y2.UNREADS,
                            "aria-label": es.intl.string(es.t.sRUdB8),
                            className: n0.Mf,
                            children: (0, i.jsx)("span", { className: n0.Gn, children: es.intl.string(es.t.sRUdB8) }),
                        }),
                        (0, i.jsx)(eX.V.Item, {
                            "aria-label": es.intl.string(es.t.GRZF96),
                            id: u.Y2.MENTIONS,
                            className: n0.Mf,
                            children: (0, i.jsx)("span", { className: n0.Gn, children: es.intl.string(es.t.GRZF96) }),
                        }),
                        a
                            ? (0, i.jsx)(eX.V.Item, {
                                  "aria-label": es.intl.string(es.t["2pAkDA"]),
                                  id: u.Y2.BOOKMARKS,
                                  className: n0.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: n0.Gn,
                                      children:
                                          0 === r
                                              ? es.intl.string(es.t["2pAkDA"])
                                              : es.intl.formatToPlainString(es.t.I4fryG, { count: r }),
                                  }),
                              })
                            : null,
                        l
                            ? (0, i.jsx)(eX.V.Item, {
                                  "aria-label": es.intl.string(es.t.Fn6Odn),
                                  id: u.Y2.SCHEDULED,
                                  className: n0.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: n0.Gn,
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
function n2(e) {
    let { tab: t } = e;
    return t === u.Y2.UNREADS ? (0, i.jsx)(nQ, {}) : t === u.Y2.MENTIONS ? (0, i.jsx)(e9, {}) : null;
}
var n3 = n(935063),
    n6 = n(475743),
    n7 = n(517019),
    n4 = n(919755);
let n8 = { offset: { left: 4, right: -12 } },
    n5 = "Recent Mentions";
function n9(e, t) {
    e7.A.fetchRecentMentions({
        before: t,
        limit: eM.Ue3,
        guildId: null != e && e8.Ay.guildFilter !== eM.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: e8.Ay.roleFilter,
        everyone: e8.Ay.everyoneFilter,
    });
}
function se(e) {
    let { onJump: t } = e,
        n = r.useRef(null),
        s = (0, O.A)("recents", n);
    (0, eu.xN)(n), (0, eu.yW)(n5);
    let a = (0, j.bG)([q.A, e4.Ay], () => q.A.getChannel(e4.Ay.getChannelId())),
        {
            messages: l,
            hasMore: d,
            loading: c,
            guildFilter: o,
            roleFilter: u,
            everyoneFilter: h,
        } = (0, j.cf)([e8.Ay], () => ({
            messages: e8.Ay.getMentions(),
            hasMore: e8.Ay.hasMore,
            loading: e8.Ay.loading,
            guildFilter: e8.Ay.guildFilter,
            roleFilter: e8.Ay.roleFilter,
            everyoneFilter: e8.Ay.everyoneFilter,
        })),
        g = (0, n6.A)(o),
        m = (0, n6.A)(u),
        A = (0, n6.A)(h);
    r.useEffect(() => {
        e8.Ay.hasLoadedEver
            ? ((null != g && o !== g) || (null != m && u !== m) || (null != A && h !== A)) && n9(a)
            : n9(a);
    }, [g, o, m, u, A, h, a]),
        (0, ti.Ay)(() => {
            l?.some(np.$r) && (e7.A.clearMentions(), n9(a));
        }),
        (0, ti.l0)(() => {
            e7.A.truncateMentions(eM.Ue3);
        });
    let f = r.useCallback(() => {
        let e = n.current?.getScrollerState();
        null != e &&
            e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
            d &&
            !c &&
            n9(a, null != l && l.length > 0 ? l[l.length - 1].id : null);
    }, [d, c, a, l]);
    return null == l || (c && 0 === l.length)
        ? (0, i.jsx)("div", { className: eF.Lq, children: (0, i.jsx)(ts.y, {}) })
        : 0 === l.length
          ? (0, i.jsx)(th, { Icon: n3.X, header: es.intl.string(es.t.bgDz74), tip: es.intl.string(es.t.NS15vk) })
          : (0, i.jsx)(x.hD, {
                navigator: s,
                children: (0, i.jsx)(x.PR, {
                    children: (e) => {
                        let { ref: s, ...r } = e;
                        return (0, i.jsxs)(S.Ch, {
                            ref: (e) => {
                                (n.current = e), (s.current = e?.getScrollerNode() ?? null);
                            },
                            className: eF.XG,
                            onScroll: d ? f : void 0,
                            ...r,
                            children: [
                                l.map((e) => (0, i.jsx)(st, { message: e, onJump: t }, e.id)),
                                c
                                    ? (0, i.jsx)("div", { className: eF.Lq, children: (0, i.jsx)(ts.y, {}) })
                                    : d
                                      ? (0, i.jsx)("div", {
                                            className: n4.u,
                                            children: (0, i.jsx)(ta.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                                text: es.intl.string(es.t.XBlaiC),
                                                onClick: () =>
                                                    n9(a, null != l && l.length > 0 ? l[l.length - 1].id : null),
                                            }),
                                        })
                                      : null,
                            ],
                        });
                    },
                }),
            });
}
function st(e) {
    let { message: t, onJump: n } = e;
    if (null == t) return null;
    let s = q.A.getChannel(t.channel_id);
    if (null == s || (0, nf.Jm)(s) || (0, nf.$v)(s)) return null;
    let a = n7.A.didAgree(s.getGuildId()),
        l = !!(0, nf.Gc)(s) && !a;
    return (0, i.jsxs)("div", {
        className: eF.aP,
        children: [
            (0, i.jsx)(ei, {
                channel: s,
                onClick: (e) => (0, eu.KW)(t, n5, () => n(e)),
                collapsed: !1,
                itemId: `header-${t.id}`,
                children: (0, i.jsxs)(C.e, {
                    size: "sm",
                    className: ea.GC,
                    children: [
                        (0, i.jsx)(p.m, {
                            text: es.intl.string(es.t["+TSRGD"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(v.K, {
                                variant: "secondary",
                                "aria-label": es.intl.string(es.t["+TSRGD"]),
                                size: "sm",
                                icon: M.t,
                                onClick: (e) => (0, eu.KW)(t, n5, () => n(e)),
                            }),
                        }),
                        (0, i.jsx)(p.m, {
                            text: es.intl.string(es.t.e6RscS),
                            ariaHidden: !0,
                            children: (0, i.jsx)(v.K, {
                                variant: "secondary",
                                "aria-label": es.intl.string(es.t.e6RscS),
                                size: "sm",
                                icon: R.A,
                                onClick: () => e7.A.deleteRecentMention(t.id),
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
                        className: eF.YD,
                        hideAccessories: l,
                        compact: eg.hH.getSetting(),
                        animateAvatar: !1,
                        focusProps: n8,
                        trackAnnouncementViews: !0,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
var sn = n(285796),
    ss = n(151282),
    sa = n(199160),
    sl =
        (((l = {})[(l.SCHEDULED = 0)] = "SCHEDULED"),
        (l[(l.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (l[(l.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (l[(l.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (l[(l.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (l[(l.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        l),
    si = n(970244);
let sr = "Scheduled Messages",
    sd = { offset: { left: 4, right: -12 } };
function sc(e) {
    let { onJump: t } = e;
    r.useEffect(() => {
        (0, ss.sy)();
    }, []);
    let n = (0, j.bG)([sa.A], () => sa.A.getScheduledMessagesForInbox()),
        s = (0, j.bG)([sa.A], () => sa.A.loading),
        a = (0, j.bG)([sa.A], () => sa.A.getMessagesPendingDeletion()),
        l = r.useMemo(
            () => Object.values(n).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [n],
        ),
        d = r.useRef(null),
        c = (0, O.A)("scheduled-messages", d);
    return ((0, eu.xN)(d), (0, eu.yW)(sr), s)
        ? (0, i.jsx)("div", { className: eF.Lq, children: (0, i.jsx)(ts.y, {}) })
        : 0 === l.length
          ? (0, i.jsx)(th, { Icon: L.O, header: es.intl.string(es.t.aJQZfZ), tip: es.intl.string(es.t.rCN4pN) })
          : (0, i.jsx)(x.hD, {
                navigator: c,
                children: (0, i.jsx)(x.PR, {
                    children: (e) => {
                        let { ref: n, ...s } = e;
                        return (0, i.jsx)(S.Ch, {
                            className: eF.XG,
                            ref: (e) => {
                                (d.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...s,
                            children: l.map((e) =>
                                (0, i.jsx)(
                                    so,
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
let so = r.memo(function (e) {
    let { scheduledMessage: t, channelId: n, isPendingDeletion: s, onJump: a } = e,
        l = (0, j.bG)([q.A], () => q.A.getChannel(n)),
        { isError: d, stateMessage: c } = (function (e) {
            switch (e) {
                case sl.SCHEDULED:
                    return { isError: !1, stateMessage: es.intl.string(es.t.Fn6Odn) };
                case sl.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: es.intl.string(es.t.v5O2dK) };
                case sl.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: es.intl.string(es.t.j8uIfG) };
                case sl.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: es.intl.string(es.t["w6zHX/"]) };
                case sl.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: es.intl.string(es.t.pflV7z) };
                case sl.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: es.intl.string(es.t.j8uIfG) };
                default:
                    (0, ep.xb)(e);
            }
        })(t.state),
        o = r.useCallback(() => {
            (0, ss.mk)(t.scheduledMessageId)
                .then(() => {
                    (0, si.Re)();
                })
                .catch((e) => {
                    (0, si.kM)(e.message);
                });
        }, [t.scheduledMessageId]),
        u = r.useCallback(() => {
            (0, si.CI)({ scheduledMessage: t });
        }, [t]);
    return null == l
        ? null
        : (0, i.jsxs)(
              "div",
              {
                  className: eF.aP,
                  children: [
                      (0, i.jsx)(ei, {
                          itemId: `header-${t.record.id}`,
                          channel: l,
                          onClick: (e) => (0, eu.n4)(l.id, l.guild_id, sr, () => a(e)),
                          collapsed: !1,
                          children: (0, i.jsxs)(C.e, {
                              size: "sm",
                              className: ea.GC,
                              children: [
                                  (0, i.jsx)(p.m, {
                                      text: es.intl.string(es.t.SBcdAN),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(v.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: L.O,
                                          "aria-label": es.intl.string(es.t.SBcdAN),
                                          onClick: u,
                                      }),
                                  }),
                                  (0, i.jsx)(p.m, {
                                      text: es.intl.string(es.t.O3sL8F),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(v.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sn.a,
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
                          ? (0, i.jsx)(ts.y, { className: eF.Lq })
                          : (0, i.jsx)(
                                eh.A,
                                {
                                    message: t.record,
                                    channel: l,
                                    className: eF.YD,
                                    compact: eg.hH.getSetting(),
                                    animateAvatar: !1,
                                    focusProps: sd,
                                },
                                t.record.id,
                            ),
                  ],
              },
              t.record.id,
          );
});
var su = n(655165);
function sh(e) {
    let {
        dialogClassName: t,
        isScheduledMessagesEnabled: n,
        tab: s,
        setTab: a,
        closePopout: l,
        handleMentionsJump: r,
        showTutorial: d,
        setSeenTutorial: m,
        forLaterEnabled: A,
    } = e;
    return (0, i.jsx)(h.l, {
        "aria-label": es.intl.string(es.t.GSmTKJ),
        className: t,
        children: (0, i.jsx)("div", {
            className: c()(su.k, { [su.q]: n }),
            children: (0, i.jsx)(o.tH, {
                fallback: (0, i.jsx)(nW, {}),
                children: (0, i.jsx)(g.F, {
                    component: (0, i.jsx)(n1, { tab: s, setTab: a, closePopout: l }),
                    children:
                        s === u.Y2.MENTIONS
                            ? (0, i.jsx)(se, { onJump: r })
                            : A && s === u.Y2.BOOKMARKS
                              ? (0, i.jsx)(eH, { closePopout: l })
                              : s === u.Y2.SCHEDULED
                                ? (0, i.jsx)(sc, { onJump: r })
                                : (0, i.jsx)(n$, { onJump: r, showTutorial: d, setSeenTutorial: m, closePopout: l }),
                }),
            }),
        }),
    });
}
