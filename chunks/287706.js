n.r(t), n.d(t, { default: () => sg });
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
    f = n(989349),
    x = n.n(f),
    j = n(562708),
    p = n(837381),
    E = n(17928),
    S = n(866665),
    N = n(689175),
    y = n(695366),
    C = n(661531),
    v = n(297264),
    _ = n(825484),
    I = n(408278),
    R = n(606096),
    M = n(933832),
    L = n(22231),
    O = n(99677),
    b = n(406810),
    D = n(442433),
    T = n(928039),
    k = n(139286),
    G = n(187322),
    F = n(939249),
    U = n(320448),
    P = n(778712),
    H = n(97808),
    w = n(812993),
    K = n(834730),
    z = n(397244),
    B = n(714114),
    X = n(394871),
    J = n(571694),
    Y = n(47167),
    V = n(713654),
    Z = n(598104),
    $ = n(548118),
    q = n(616356),
    W = n(734057),
    Q = n(71393),
    ee = n(290863),
    et = n(568548),
    en = n(287809),
    es = n(650583),
    ea = n(375708),
    el = n(274611);
let ei = { top: 8, bottom: 8, left: -4, right: -4 };
function er(e) {
    let { channel: t, children: n, onClick: s, collapsed: a = !1, mentionCount: l, onToggleCollapse: r, itemId: d } = e,
        o = (0, p.rm)(d);
    return (0, i.jsx)(G.vN, {
        offset: ei,
        children: (0, i.jsxs)("div", {
            className: c()(el.ZO, { [el.yZ]: a }),
            ...o,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
                if ((e.key === es.dh.ENTER || e.key === es.dh.SPACE) && e.target === e.currentTarget) {
                    e.preventDefault(), s(e);
                    return;
                }
                null != r && ((e.key === es.dh.ARROW_RIGHT && a) || (e.key === es.dh.ARROW_LEFT && !a)) && r();
            },
            children: [
                (0, i.jsx)(F.D, {
                    className: el.YT,
                    onClick: s,
                    tabIndex: -1,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(ed, { channel: t }),
                }),
                (0, i.jsx)(U._, { className: el.ai, size: "xxs" }),
                (0, i.jsx)(ec, { channel: t, onClick: s, mentionCount: l }),
                n,
            ],
        }),
    });
}
function ed(e) {
    let { channel: t } = e,
        n = (0, E.bG)([Q.A], () => Q.A.getGuild(t.guild_id));
    return null != n
        ? (0, i.jsx)($.Ay, { className: el.Kk, guild: n, size: $.Ay.Sizes.SMALL, showTooltip: !0, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, i.jsx)(Z.A, { channel: t, size: P._3.SIZE_32, "aria-hidden": !0 })
          : (0, i.jsx)(H.eu, { size: P._3.SIZE_32, src: (0, J.Y)(t), "aria-hidden": !0 });
}
function ec(e) {
    let { channel: t, onClick: n, mentionCount: s } = e,
        a = (0, E.bG)([Q.A], () => Q.A.getGuild(t.guild_id)),
        l = (0, Y.Ay)(t, !1),
        r = (0, E.bG)([et.Ay], () => et.Ay.getIsMentionLowImportance(t.id)),
        d = (0, E.bG)([W.A], () => W.A.getChannel(t.parent_id)),
        o = (0, Y.Ay)(d),
        u = (0, V.gU)(t, a);
    return (0, i.jsxs)("div", {
        className: el.yP,
        children: [
            (0, i.jsx)(v.D, {
                variant: "text-md/semibold",
                color: "text-default",
                className: el.lz,
                children: (0, i.jsxs)(F.D, {
                    className: el.Ru,
                    onClick: n,
                    children: [
                        t.isPrivate() || null == u ? null : (0, i.jsx)(u, { className: el.j1, size: "xxs" }),
                        (0, i.jsx)("span", { className: el.je, children: l }),
                        null != s && s > 0
                            ? (0, i.jsx)("div", {
                                  className: el.qS,
                                  children: (0, i.jsx)(w.hV, {
                                      count: s,
                                      color: r
                                          ? C.A.colors.BACKGROUND_MOD_STRONG.css
                                          : C.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, i.jsx)(K.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: t.isMultiUserDM()
                    ? ea.intl.formatToPlainString(ea.t.CxSA5N, { members: t.recipients.length + 1 })
                    : t.isPrivate()
                      ? (0, i.jsx)(eo, { channel: t })
                      : (0, i.jsx)(F.D, {
                            className: c()(el.je, el.J5),
                            onClick: n,
                            children: null == d ? a?.name : `${a?.name} \u{203A} ${o}`,
                        }),
            }),
        ],
    });
}
function eo(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: a,
            applicationStream: l,
        } = (0, E.cf)([en.default, ee.A, q.A], () => {
            let e = en.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? ee.A.getStatus(e.id) : null,
                activities: null != e ? ee.A.getActivities(e.id) : null,
                applicationStream: null != e ? q.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, B.Ay)({ userId: n?.id });
    return (0, z.A)({ activities: a, status: s, applicationStream: l, voiceChannel: r })
        ? (0, i.jsx)(X.A, { user: n, activities: a, applicationStream: l, voiceChannel: r, hideTooltip: !0 })
        : null;
}
function eu(e) {
    let { type: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: c()(el.h5, { [el.z3]: "error" === t, [el.kX]: "success" === t, [el.qb]: "normal" === t }),
        children: [
            "error" === t ? (0, i.jsx)(y.E, { size: "xs" }) : (0, i.jsx)(b.O, { size: "xs" }),
            (0, i.jsx)(K.E, {
                variant: "text-xs/medium",
                color: "error" === t ? "text-feedback-critical" : "text-muted",
                children: n,
            }),
        ],
    });
}
var eh = n(636922),
    eg = n(885386),
    em = n(576705),
    eA = n(174459),
    ef = n(927813),
    ex = n(164684),
    ej = n(704456),
    ep = n(85109),
    eE = n(756377);
n(321073);
var eS = n(216623);
function eN() {
    return ep.A.getSavedMessages().map((e) => e.saveData);
}
var ey = n(403581),
    eC = n(862482),
    ev = n(192308),
    e_ = n(404374),
    eI = n(725807),
    eR = n(428262),
    eM = n(226017),
    eL = n(652215),
    eO = n(202541),
    eb = n(398610),
    eD = n(936037);
function eT() {
    return (0, eM.A)()
        ? (0, i.jsx)("div", {
              className: eb.do,
              children: (0, i.jsxs)("div", {
                  className: eb.U6,
                  children: [
                      (0, i.jsx)("img", { src: "/assets/29e2479161d09050.png", className: eb.Sl, alt: "" }),
                      (0, i.jsx)(v.D, {
                          className: eb.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: ea.intl.string(ea.t.erEf2g),
                      }),
                      (0, i.jsx)(K.E, {
                          variant: "text-md/medium",
                          color: "text-muted",
                          children: ea.intl.string(ea.t.NaRCXT),
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
                          (0, i.jsx)(v.D, {
                              className: eb.wx,
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: ea.intl.string(ea.t.w4DRbZ),
                          }),
                          (0, i.jsx)(K.E, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: ea.intl.string(ea.t.F6u3E3),
                          }),
                      ],
                  }),
                  (0, i.jsx)(ek, {}),
              ],
          });
}
function ek() {
    let e = (0, eR.Dd)(eO.PremiumTypes.TIER_2),
        t = r.useCallback(
            () =>
                (0, ev.openModalLazy)(async () => {
                    let { default: e } = await n.e("22540").then(n.bind(n, 530951));
                    return (t) => (0, i.jsx)(e, { ...t });
                }),
            [],
        ),
        s = ea.intl.format(ea.t.qXh3fo, { nitroTierName: e, onClick: t });
    return (0, i.jsxs)("div", {
        className: eb.Zj,
        children: [
            (0, i.jsx)(ey.t, { size: "md", color: e_.k0.PREMIUM_TIER_2 }),
            (0, i.jsx)(K.E, { variant: "text-xs/medium", color: "text-strong", className: eb.tD, children: s }),
            (0, i.jsx)(eI.A, {
                className: eb.Oy,
                size: eC.lO.TINY,
                shinyButtonClassName: eb.Oy,
                subscriptionTier: eO.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: eL.JJy.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
function eG(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: a } = (0, ej.Ce)({ dueAt: t?.saveData.dueAt, now: n, type: ej.kh.SHORT });
    return null == t.saveData.dueAt || null == s ? null : (0, i.jsx)(eu, { type: a ? "error" : "normal", text: s });
}
var eF = n(608149),
    eU = n(311929);
function eP(e) {
    let { closePopout: t } = e,
        n = (function () {
            let [e, t] = r.useState(eN),
                n = r.useRef(ep.A.getIsStale());
            return (
                r.useEffect(() => {
                    let e = ep.A.getLastChanged();
                    function s() {
                        let s = ep.A.getLastChanged();
                        if (e !== s) {
                            if (((e = s), n.current && !ep.A.getIsStale())) {
                                (n.current = !1), t(eN());
                                return;
                            }
                            t((e) => {
                                let t = [...e],
                                    n = new Map(ep.A.getSavedMessages().map((e) => [e.saveData.messageId, e]));
                                for (let s of e) n.has(s.messageId) ? n.delete(s.messageId) : t.splice(t.indexOf(s), 1);
                                for (let e of n.values()) t.push(e.saveData);
                                return t;
                            });
                        }
                    }
                    return (
                        ep.A.addChangeListener(s),
                        () => {
                            ep.A.removeChangeListener(s);
                        }
                    );
                }, []),
                r.useEffect(() => {
                    (0, eS.AX)();
                }, []),
                e
            );
        })();
    (0, k.A)(
        {
            type: j.ImpressionTypes.POPOUT,
            name: j.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: { total_count: n.length, overdue_count: ep.A.getOverdueMessageReminderCount() },
        },
        {},
        [n.length],
    );
    let s = r.useRef(null),
        a = (0, T.A)("for-later", s),
        [l, d] = r.useState(new Date());
    return (r.useEffect(() => {
        let e = setInterval(() => d(new Date()), ef.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []),
    0 === n.length)
        ? (0, i.jsx)(eT, {})
        : (0, i.jsx)(p.hD, {
              navigator: a,
              children: (0, i.jsx)(p.PR, {
                  children: (e) => {
                      let { ref: a, ...r } = e;
                      return (0, i.jsx)(N.Ch, {
                          ref: (e) => {
                              (s.current = e), (a.current = e?.getScrollerNode() ?? null);
                          },
                          className: eF.XG,
                          ...r,
                          children: n.map((e) =>
                              (0, i.jsx)(ew, { savedMessageKey: e, closePopout: t, throttledNow: l }, e.messageId),
                          ),
                      });
                  },
              }),
          });
}
function eH(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        a = (0, ej.vr)(t),
        l = r.useCallback(
            async (e) => {
                await (0, ej.le)(t, a),
                    e.shiftKey || n(),
                    eA.default.track(eL.HAw.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: t.message?.author.id,
                        type: null != t.saveData.dueAt ? eE.Yf.REMINDER : eE.Yf.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? x()().diff(t.saveData.dueAt) : void 0,
                    });
            },
            [n, t, a],
        ),
        d = (0, E.bG)(
            [em.A],
            () => !!(a?.type === eL.rbe.UNKNOWN || a?.isPrivate()) || em.A.can(eL.xBc.VIEW_CHANNEL, a),
        );
    return null != a && null != t.message && d
        ? (0, i.jsxs)("div", {
              className: eU.aP,
              children: [
                  (0, i.jsx)(er, {
                      itemId: `header-${t.message.id}`,
                      channel: a,
                      onClick: (e) => {
                          l(e), n();
                      },
                      collapsed: !1,
                      children: (0, i.jsx)(_.e, {
                          size: "sm",
                          className: el.GC,
                          children: (0, i.jsx)(eK, { savedMessage: t, jumpToMessage: l }),
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
                              children: (0, i.jsx)(y.E, { size: "xxs", color: C.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                          }),
                          (0, i.jsx)(v.D, {
                              variant: "text-md/semibold",
                              color: "text-default",
                              children:
                                  null != t.saveData.dueAt
                                      ? ea.intl.string(ea.t["wuQm+j"])
                                      : ea.intl.string(ea.t.o572Fe),
                          }),
                      ],
                  }),
                  (0, i.jsx)(_.e, {
                      size: "sm",
                      className: el.GC,
                      children: (0, i.jsx)(S.m, {
                          text: ea.intl.string(ea.t.SvXS1Z),
                          ariaHidden: !0,
                          children: (0, i.jsx)(I.K, {
                              variant: "secondary",
                              "aria-label": ea.intl.string(ea.t.SvXS1Z),
                              size: "sm",
                              icon: R.c,
                              onClick: () => (0, ex.x)(t.saveData),
                          }),
                      }),
                  }),
              ],
          });
}
function ew(e) {
    let { savedMessageKey: t, closePopout: n, throttledNow: s } = e,
        a = (0, E.bG)([ep.A], () => ep.A.getSavedMessage(t.channelId, t.messageId));
    return null == a ? null : (0, i.jsx)(eH, { savedMessage: a, closePopout: n, throttledNow: s });
}
function eK(e) {
    let { savedMessage: t, jumpToMessage: s } = e;
    return (A()(null != t.message, "Saved message must be cached for For Later action buttons"),
    null != t.saveData.dueAt)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(S.m, {
                      text: ea.intl.string(ea.t.yjGtdJ),
                      ariaHidden: !0,
                      children: (0, i.jsx)(I.K, {
                          variant: "secondary",
                          "aria-label": ea.intl.string(ea.t.yjGtdJ),
                          size: "sm",
                          icon: M.A,
                          onClick: () =>
                              (0, ex.Y)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0,
                              }),
                      }),
                  }),
                  (0, i.jsx)(S.m, {
                      text: ea.intl.string(ea.t.vrbqs1),
                      ariaHidden: !0,
                      children: (0, i.jsx)(I.K, {
                          variant: "secondary",
                          "aria-label": ea.intl.string(ea.t.vrbqs1),
                          size: "sm",
                          icon: L.R,
                          onClick: (e) =>
                              (0, D.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("75133").then(n.bind(n, 195404));
                                  return (n) =>
                                      (0, i.jsx)(e, { ...n, label: ea.intl.string(ea.t.roMu1H), message: t.message });
                              }),
                      }),
                  }),
                  (0, i.jsx)(S.m, {
                      text: ea.intl.string(ea.t["+TSRGD"]),
                      ariaHidden: !0,
                      children: (0, i.jsx)(I.K, {
                          variant: "secondary",
                          "aria-label": ea.intl.string(ea.t["+TSRGD"]),
                          size: "sm",
                          icon: O.t,
                          onClick: (e) => s(e),
                      }),
                  }),
                  (0, i.jsx)(S.m, {
                      text: ea.intl.string(ea.t.SvXS1Z),
                      ariaHidden: !0,
                      children: (0, i.jsx)(I.K, {
                          variant: "secondary",
                          "aria-label": ea.intl.string(ea.t.SvXS1Z),
                          size: "sm",
                          icon: R.c,
                          onClick: () => (0, ex.x)(t.saveData),
                      }),
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(S.m, {
                      text: ea.intl.string(ea.t.mJ3P0N),
                      ariaHidden: !0,
                      children: (0, i.jsx)(I.K, {
                          variant: "secondary",
                          "aria-label": ea.intl.string(ea.t.mJ3P0N),
                          size: "sm",
                          icon: b.O,
                          onClick: (e) =>
                              (0, D.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("75133").then(n.bind(n, 195404));
                                  return (n) =>
                                      (0, i.jsx)(e, { ...n, label: ea.intl.string(ea.t.mJ3P0N), message: t.message });
                              }),
                      }),
                  }),
                  (0, i.jsx)(S.m, {
                      text: ea.intl.string(ea.t["+TSRGD"]),
                      children: (0, i.jsx)(I.K, {
                          variant: "secondary",
                          "aria-label": ea.intl.string(ea.t["+TSRGD"]),
                          size: "sm",
                          icon: O.t,
                          onClick: (e) => s(e),
                      }),
                  }),
                  (0, i.jsx)(S.m, {
                      text: ea.intl.string(ea.t.SvXS1Z),
                      ariaHidden: !0,
                      children: (0, i.jsx)(I.K, {
                          variant: "secondary",
                          "aria-label": ea.intl.string(ea.t.SvXS1Z),
                          size: "sm",
                          icon: R.c,
                          onClick: () => (0, ex.x)(t.saveData),
                      }),
                  }),
              ],
          });
}
var ez = n(702841),
    eB = n(912592),
    eX = n(890856),
    eJ = n(761508),
    eY = n(966597),
    eV = n(910425),
    eZ = n(214947),
    e$ = n(711950),
    eq = n(322387),
    eW = n(912309),
    eQ = n(161509);
function e0(e) {
    let { closePopout: t } = e,
        n = (0, eW.kX)();
    return (0, i.jsx)(S.m, {
        asContainer: !0,
        text: ea.intl.string(ea.t["lMR96+"]),
        children: (0, i.jsxs)(F.D, {
            "aria-label": `${ea.intl.string(ea.t["lMR96+"])}, ${n}`,
            className: eQ.b,
            onClick: () => {
                eA.default.track(eL.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: eq.e1.FRIEND_REQUESTS_BUTTON_CLICK,
                }),
                    e$.A.transitionToSection(eL.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, i.jsx)(eZ.$, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(w.hV, { count: n, color: C.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
var e1 = n(980707),
    e3 = n(477782),
    e2 = n(922016),
    e6 = n(783977),
    e7 = n(378939),
    e8 = n(309010),
    e4 = n(409686);
function e5(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, E.bG)([W.A, e8.Ay], () => W.A.getChannel(e8.Ay.getChannelId())),
        {
            everyoneFilter: a,
            roleFilter: l,
            guildFilter: r,
        } = (0, E.cf)([e4.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = e4.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(e1.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": ea.intl.string(ea.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(e3.sL, {
                id: "Everyone",
                label: ea.intl.string(ea.t.cdyUsV),
                action: function () {
                    e7.A.setGuildFilter({ everyoneFilter: !a });
                },
                checked: a,
            }),
            (0, i.jsx)(e3.sL, {
                id: "Roles",
                label: ea.intl.string(ea.t.lZejCq),
                action: function () {
                    e7.A.setGuildFilter({ roleFilter: !l });
                },
                checked: l,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, i.jsx)(e3.sL, {
                      id: "All Servers",
                      label: ea.intl.string(ea.t.GWMA6s),
                      action: function () {
                          e7.A.setGuildFilter({
                              guildFilter: r === eL.KE7.THIS_SERVER ? eL.KE7.ALL_SERVERS : eL.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === eL.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function e9() {
    let e = r.useRef(null);
    return (0, i.jsx)(e2.Y, {
        targetElementRef: e,
        align: "right",
        animation: e2.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(e5, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(S.m, {
                text: ea.intl.string(ea.t.pEasFX),
                targetElementRef: e,
                children: (0, i.jsx)(I.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t.pEasFX),
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
    tu = n(755323);
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
            (0, i.jsx)(v.D, { className: tu.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(K.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    a
                        ? null
                        : (0, i.jsxs)(K.E, {
                              tag: "span",
                              className: tu.PP,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [ea.intl.string(ea.t["8tvIiN"]), ":", " "],
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
            eA.default.track(eL.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(tf, { confirm: a, cancel: () => s(!1) }) : null,
            (0, i.jsx)(S.m, {
                text: ea.intl.string(ea.t["8k+6QY"]),
                children: (0, i.jsx)(I.K, {
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t["8k+6QY"]),
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
        header: ea.intl.string(ea.t.h4bVZ2),
        confirmText: ea.intl.string(ea.t.e6RscS),
        cancelText: ea.intl.string(ea.t["ETE/oC"]),
        confirmButtonColor: eC.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(K.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: ea.intl.string(ea.t["0MQ0Bf"]),
        }),
    });
}
var tx = n(435558),
    tj = n.n(tx),
    tp = n(749314),
    tE = n(372684),
    tS = n(311283),
    tN = n(717421),
    ty = n(334738),
    tC = n(95561),
    tv = n(976860),
    t_ = n(847374),
    tI = n(712950);
function tR(e) {
    let { collapsed: t, onClick: n } = e,
        s = ea.intl.string(t ? ea.t.dcl9MQ : ea.t.iTcuma);
    return (0, i.jsx)(S.m, {
        text: s,
        ariaHidden: !0,
        children: (0, i.jsx)(F.D, {
            className: tI.x6,
            "aria-label": s,
            onClick: n,
            children: (0, i.jsx)(t_.a, { className: c()(tI.ai, { [tI.yZ]: t }), size: "xs" }),
        }),
    });
}
var tM = n(670380);
let tL = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    tO = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function tb(e) {
    let { collapsed: t, children: n } = e,
        s = r.useRef(null),
        [a, l] = (0, tN.z)(() => (t ? tL : tO), "respect-motion-settings", []),
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
        (0, i.jsx)(tE.animated.div, {
            className: tM.r,
            style: a,
            children: (0, i.jsx)("div", { ref: s, inert: !!t || void 0, children: n }),
        })
    );
}
var tD = n(782603),
    tT = n(461678),
    tk = n(914703);
function tG(e) {
    let { channel: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)(e2.Y, {
        targetElementRef: n,
        align: "right",
        animation: e2.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(tk.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: ea.intl.string(ea.t.ljs3Oe),
                  })
                : (0, i.jsx)(tT.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: ea.intl.string(ea.t.ljs3Oe),
                      location: { section: eL.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(S.m, {
                text: ea.intl.string(ea.t.h850Ss),
                targetElementRef: n,
                children: (0, i.jsx)(I.K, {
                    "aria-label": ea.intl.string(ea.t.h850Ss),
                    icon: tD.X,
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
    tP = n(970278),
    tH = n(747926),
    tw = n(403362),
    tK = n(935208),
    tz = n(37411),
    tB = n(434750);
function tX(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        a = (0, E.yK)(
            [tP.A, W.A],
            () =>
                tj()(tP.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return tK.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return W.A.getChannel(t);
                    })
                    .filter(tw.Vq)
                    .sort((e, t) => tK.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        l = r.useCallback((e, t) => {
            (0, tH.JA)(e, t, tz.H9.INBOX);
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
                            section: eL.JJy.INBOX,
                            object: eL.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: eL.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId);
                });
        }),
        (0, i.jsx)("div", {
            className: tB.k,
            children: a.map((e) =>
                (0, i.jsx)(
                    tU.Cp,
                    { channel: n, children: (0, i.jsx)(tF.Ay, { className: tB.u, threadId: e.id, goToThread: l }) },
                    e.id,
                ),
            ),
        })
    );
}
var tJ = n(123292),
    tY = n(857069),
    tV = n(789645),
    tZ = n(33358),
    t$ = n(384231),
    tq = n(207133),
    tW = n(704413),
    tQ = n(9842),
    t0 = n(994500),
    t1 = n(5095),
    t3 = n(320095),
    t2 = n(143413),
    t6 = n(763754),
    t7 = n(467073),
    t8 = n(491182),
    t4 = n(860227),
    t5 = n(500414),
    t9 = n(375199),
    ne = n(824556),
    nt = n(715628),
    nn = n(752636),
    ns = n(352043),
    na = n(268719),
    nl = n(234957),
    ni = n(888675),
    nr = n(21623),
    nd = n(701628);
let nc = r.memo(function e(t) {
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
        g = eL.sl8.has(a.type) ? a.messageReference : void 0,
        m = (0, E.bG)([tQ.A], () => tQ.A.getMessageByReference(g)),
        A = (0, E.bG)([W.A], () =>
            a.type === eL.lAJ.THREAD_STARTER_MESSAGE && m.state === tQ.a.LOADED
                ? W.A.getChannel(m.message.channel_id)
                : null,
        ),
        f = eg.X6.useSetting(),
        x = eg.hD.useSetting(),
        j = eg.rs.useSetting(),
        p = eg.kt.useSetting(),
        S = (0, t$.S)((a.editedTimestamp ?? a.timestamp).valueOf()),
        N = (0, tq.A)(s?.id),
        { disableReactionCreates: y } = (0, t7.A)(s),
        {
            content: C,
            hasSpoilerEmbeds: v,
            hasBailedAst: _,
        } = (0, t9.A)(a, {
            hideSimpleEmbedContent: x && j,
            allowList: S,
            allowHeading: S,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        I = (0, t6.Ay)(a),
        R = (0, E.bG)(
            [W.A],
            () => a.hasFlag(eL.pr7.HAS_THREAD) && W.A.getChannel(tK.default.castMessageIdAsChannelId(a.id)),
        ),
        M = a.type === eL.lAJ.THREAD_STARTER_MESSAGE && m.state === tQ.a.LOADED && null != A,
        L = !M && void 0 === n,
        O = (0, ne.A)({ message: a, channel: s, announcementEnabled: L }),
        b = (0, tZ.P)(a),
        D = (0, t1._f)(a.id, a.channel_id),
        T = (0, tW.A)(a),
        k = (0, t4.fF)(a);
    return M
        ? (0, i.jsx)(e, { ...t, message: m.message, channel: A, hasThread: !1 })
        : (t0.A.isBlockedForMessage(a) ? (n = ea.t["+FcYM/"]) : t0.A.isIgnoredForMessage(a) && (n = ea.t["VFWjc+"]),
            void 0 !== n)
          ? (0, i.jsx)(no, { className: r, compact: l, count: 1, collapsedReason: n })
          : (0, i.jsx)(t8.A, {
                compact: l,
                className: c()(r, { [nd.M1]: (0, t3.ec)(a), [nd.XN]: u, [nd._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, nl.A)(a, s, g, m, l),
                childrenHeader: (0, nn.A)({ ...t, author: I, guildId: s.guild_id }),
                childrenAccessories: (0, i.jsx)(t5.iV, {
                    channel: s,
                    message: a,
                    hasSpoilerEmbeds: v,
                    hasBailedAst: _,
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
                    renderEmbeds: j,
                    gifAutoPlay: p,
                    poll: T,
                    showListsAndHeaders: S,
                    showMaskedLinks: S,
                    shouldHideMediaOptions: N,
                    enabledContentHarmTypeFlags: b,
                    ctaButtonType: D,
                }),
                childrenExecutedCommand: (0, na.A)(a, s, l),
                childrenMessageContent: (0, nt.A)(t, C),
                childrenSystemMessage: (0, ns.A)(t),
                onContextMenu: d,
                onClick: o,
                hasThread: !1 !== h && null != R && a.hasFlag(eL.pr7.HAS_THREAD),
                hasReply: a.type === eL.lAJ.REPLY,
                isSystemMessage: (0, t2.A)(a),
                messageRef: O,
                author: I,
                "aria-labelledby": k,
                "aria-roledescription": ea.intl.string(ea.t.BAB0yK),
            });
});
function no(e) {
    let { className: t, count: n, compact: s, collapsedReason: a } = e;
    return (0, i.jsx)(t8.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, i.jsx)(ni.A, {
            compact: s,
            className: nr.L9,
            iconNode: (0, i.jsx)(tV.P, { size: "md", color: "currentColor", className: nr.Q6 }),
            children: (0, i.jsx)("div", { className: nr.Fo, children: ea.intl.format(a, { count: n }) }),
        }),
    });
}
var nu = n(58703),
    nh = n(425260);
function ng(e) {
    let { className: t, onJump: n } = e,
        [s, a] = r.useState(!1);
    return (0, i.jsx)(F.D, {
        className: c()(nh.n, t),
        onClick: function (e) {
            a(!0), n(e);
        },
        children: s
            ? (0, i.jsx)(ts.y, { type: ts.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(K.E, { variant: "text-xs/medium", className: nh.Q, children: ea.intl.string(ea.t.k5WiPf) }),
    });
}
var nm = n(143236),
    nA = n(493336),
    nf = n(323073),
    nx = n(181079),
    nj = n(567035),
    np = n(202803),
    nE = n(455234),
    nS = n(695633),
    nN = n(152007),
    ny = n(607508),
    nC = n(594061),
    nv = n(617617),
    n_ = n(95701),
    nI = n(808728),
    nR = n(232835),
    nM = n(711014),
    nL = n(543465),
    nO =
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
    nb = (((a = {}).Loading = "loading"), (a.Loaded = "loaded"), (a.Done = "done"), a);
class nD extends nm.EventEmitter {
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
                if (t.messages.some(np.$r)) return nA.A.clearChannel(e.channelId), { ...e, messages: [] };
                return t;
            }
            case "nsfw":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = tP.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
            default:
                return (0, tw.xb)(e);
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
                    section: eL.JJy.INBOX,
                    object: eL.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: eL.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
            { section: eL.JJy.INBOX, object: eL.ZSU.UNDO_MARK_AS_READ, objectType: eL.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        tl.h.wait(() => (0, nj.A)([e], eL.JJy.INBOX)),
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
        let e = this.state.channels.filter((e) => !nN.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = tP.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        nA.A.clearChannel(e.channelId);
        let t = nA.A.fetchMessages({
            channelId: e.channelId,
            limit: eL.EMb,
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
        s = nR.A.getMessages(e.channelId),
        a = s
            .toArray()
            .filter(
                (t) =>
                    tK.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= tK.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (a.length === e.messages.length && a.every((t, n) => e.messages[n] === t) && n) return e;
    let l = null != s.getAfter(e.oldestReadMessageId) || a[0]?.id === e.oldestUnreadMessageId,
        i = a[a.length - 1],
        r = tK.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || a.length >= 25;
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
                    let a = W.A.getChannel(s);
                    (s in e && a?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            W.A.getSortedPrivateChannels().forEach((n) => nG(e, t, null, n.id)),
            nM.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = nI.Ay.getSelectableChannelIds(n),
                    a = nS.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    nG(e, t, n, s);
                    let l = a[s] ?? {};
                    for (let s in l) nG(e, t, n, s);
                });
            }),
            tj().sortBy(t, (e) => e.sortOrder)),
        a = tj()
            .uniq(s.map((e) => e.guildId))
            .filter(tw.Vq);
    return (
        tl.h.dispatch({ type: "INBOX_OPEN", guildIds: a }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function nG(e, t, n, s) {
    if (null == s) return;
    let a = W.A.getChannel(s);
    if (null == a || (!n_.Le.has(a.type) && nL.Ay.isGuildOrCategoryOrChannelMuted(n, a.id))) return;
    if (a.isPrivate()) {
        if (0 === et.Ay.getMentionCount(s)) return;
    } else if (!(0, nE.Y)(a) && 0 === et.Ay.getMentionCount(s)) return;
    if ((!a.isPrivate() && !em.A.can(eL.xBc.READ_MESSAGE_HISTORY, a)) || (0, nf.qR)(a)) return;
    let l = et.Ay.ackMessageId(s);
    if (null == l) {
        let e = Q.A.getGuild(a.guild_id);
        if (null == e || null == e.joinedAt) return;
        l = tK.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = et.Ay.getOldestUnreadMessageId(s),
        r = et.Ay.lastMessageId(s),
        d = et.Ay.getMentionCount(s),
        c = d > 0 || a.isPrivate();
    if (null == r || tK.default.compare(l, r) >= 0) return;
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
            let s = W.A.getChannel(t);
            if (nx.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (et.Ay.getMentionCount(t) > 0) return et.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = tK.default.extractTimestamp(n);
                if (Date.now() - e > nU) return 8;
                if (Date.now() - e > nF) return 6;
            }
            if (s.isThread()) {
                let e = (0, ny.l)(s);
                return e === tz.CP.ALL_MESSAGES ? 4 : e === tz.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = nL.Ay.getChannelMessageNotifications(e, t),
                    s = n === eL.orn.NULL ? nL.Ay.getMessageNotifications(e) : n;
                return s === eL.orn.ALL_MESSAGES ? 4 : s === eL.orn.NO_MESSAGES ? 7 : 5;
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
let nF = 2 * ef.A.Millis.DAY,
    nU = 10 * ef.A.Millis.DAY;
var nP = n(339466);
let nH = { left: 4, right: -12 },
    nw = [eL.lAJ.THREAD_CREATED];
function nK(e) {
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
        o = nw.includes(n.type);
    return (0, i.jsx)(G.vN, {
        offset: nH,
        children: (0, i.jsxs)("div", {
            className: nP.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, i.jsx)(ng, { className: nP.nn, onJump: (e) => l(e, n.id) }),
                (0, i.jsx)(nc, {
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
function nz(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        a = eg.hH.useSetting(),
        l = 0 === t.messages.length || x()(t.messages[0].timestamp).isSame(x()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!l && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, nu.i$)(e.timestamp, "LL");
            r.push((0, i.jsx)(tp.A, { className: nP.yF, children: t }, t)), (d = x()(e.timestamp));
        }
        let t = null == c || (0, tY.A)(n, c, e);
        (c = e), r.push((0, i.jsx)(nK, { channel: n, message: e, compact: a, isGroupStart: t, gotoChannel: s }, e.id));
    });
    let u = o[o.length - 1];
    return (
        null != u &&
            0 > tK.default.compare(u.id, t.newestUnreadMessageId) &&
            r.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: nP.Gr,
                        children: (0, i.jsx)(tJ.Q, {
                            variant: "primary",
                            text: `${ea.intl.string(ea.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, u.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, i.jsx)(ts.y, {}, "spinner")]),
        (0, i.jsx)("div", { className: nP.DZ, children: r })
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
        let { opacity: o, size: u } = (0, tN.z)(
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
        return (0, i.jsx)(tE.animated.div, {
            ref: s,
            style: h,
            "data-unread-channel-id": t.channelId,
            children: (0, i.jsx)(nX, { ...e }),
        });
    }),
    nX = r.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: a } = e,
            l = (0, E.bG)([W.A], () => W.A.getChannel(t.channelId));
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
                                section: eL.JJy.INBOX,
                                object: eL.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: eL.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
            (0, tC.zV)(eL.HAw.INBOX_CHANNEL_CLICKED, { channel_id: t.channelId, guild_id: t.guildId });
            let a = s ?? t.oldestUnreadMessageId;
            (0, tv.pX)(eL.BVt.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : a)), n(e);
        }
        function c() {
            a(t),
                (0, tC.zV)(eL.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                });
        }
        let o = !l.isNSFW();
        return (0, i.jsx)("div", {
            className: eU.aP,
            children: (0, i.jsx)(g.F, {
                component: (0, i.jsxs)(er, {
                    channel: l,
                    onClick: d,
                    collapsed: t.collapsed,
                    mentionCount: t.mentionCount,
                    onToggleCollapse: o ? c : void 0,
                    itemId: `header-${l.id}`,
                    children: [
                        (0, i.jsxs)(_.e, {
                            size: "sm",
                            className: el.GC,
                            children: [(0, i.jsx)(tG, { channel: l }), (0, i.jsx)(nJ, { ...e })],
                        }),
                        o ? (0, i.jsx)(tR, { collapsed: t.collapsed, onClick: c }) : null,
                    ],
                }),
                children: (0, i.jsx)(tb, {
                    collapsed: t.collapsed,
                    children:
                        "messages" === t.type
                            ? (0, i.jsx)(nz, { channel: t, channelRecord: l, gotoChannel: d })
                            : "forum" === t.type
                              ? (0, i.jsx)(tX, { channel: t, channelRecord: l, deleteChannel: s })
                              : null,
                }),
            }),
        });
    });
function nJ(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: a } = e,
        l = (0, tS.A)() && null != t.guildId;
    return (0, i.jsx)(S.m, {
        text: l ? ea.intl.string(ea.t["5lLMhM"]) : ea.intl.string(ea.t.e6RscS),
        ariaHidden: !0,
        children: (0, i.jsx)(I.K, {
            variant: "secondary",
            "aria-label": l ? ea.intl.string(ea.t["5lLMhM"]) : ea.intl.string(ea.t.e6RscS),
            size: "sm",
            icon: l ? tg.i : M.A,
            onClick: function () {
                l && null != t.guildId ? s(t.guildId) : n(t),
                    (0, tC.zV)(eL.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: a() - 1,
                    });
            },
        }),
    });
}
var nY = n(403961),
    nV = n(419552);
function nZ(e) {
    var t, n, s, a, l, d;
    let { onJump: o, showTutorial: u, setSeenTutorial: h, closePopout: g } = e,
        m = r.useRef(null),
        [A, f] = (function (e) {
            let [t, n] = r.useState(() => new nD(nk(), e)),
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
                    0 === r.channels.length || t - l.current < 10 * ef.A.Millis.SECOND
                        ? a(!0)
                        : ((l.current = Date.now()), n(new nD(r, e)));
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
                    () => (nR.A.addChangeListener(t.reloadMessages), () => nR.A.removeChangeListener(t.reloadMessages)),
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
                        nN.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => nN.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        tP.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => tP.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [i, t]
            );
        })(m),
        { loadState: x, channels: j } = A,
        { maybeLoadMore: S } = f,
        y = (0, E.bG)([tr.Ay], () => tr.Ay.messageGroupSpacing);
    (t = m),
        (n = A),
        (s = f),
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
        (a = A),
        (l = f),
        r.useEffect(() => {
            function e() {
                let e = a.channels.find((e) => !e.collapsed);
                null != e && l.markChannelRead(e);
            }
            return (
                td._.subscribe(eL.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    td._.unsubscribe(eL.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [l, a.channels]),
        (d = f),
        r.useEffect(() => {
            function e(e) {
                if ((0, ev.hasAnyModalOpen)()) return;
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
        r.useEffect(() => {
            eA.default.track(eL.HAw.OPEN_POPOUT, { type: "Inbox" });
        }, []),
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
                td._.subscribe(eL.jej.INBOX_MARK_ALL_UNREADS_READ, f.markAllRead),
                () => {
                    td._.unsubscribe(eL.jej.INBOX_MARK_ALL_UNREADS_READ, f.markAllRead);
                }
            ),
        );
    let C = (0, T.A)("unreads", m);
    return 0 === j.length
        ? (0, i.jsx)(th, {
              Icon: eB.K,
              header: ea.intl.string(ea.t["6XMM+D"]),
              tip: tt().os?.family === "OS X" ? ea.intl.string(ea.t.w9uDOW) : ea.intl.string(ea.t.BiUJC6),
          })
        : (0, i.jsx)(p.hD, {
              navigator: C,
              children: (0, i.jsx)(p.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, i.jsxs)(N.Ch, {
                          ref: (e) => {
                              (m.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: x === nb.Done ? void 0 : S,
                          className: c()(eU.XG, `group-spacing-${y}`),
                          children: [
                              u ? (0, i.jsx)(n$, { setSeenTutorial: h }) : null,
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
                                              (e.hasLoadedAnything && e.sortOrder === nO.ReallyOldChannel
                                                  ? o.push(
                                                        (0, i.jsx)(
                                                            tp.A,
                                                            {
                                                                className: nY.y,
                                                                contentClassName: nY.$,
                                                                children: ea.intl.string(ea.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === nO.NoNotifications &&
                                                    o.push(
                                                        (0, i.jsx)(
                                                            tp.A,
                                                            {
                                                                className: nY.y,
                                                                contentClassName: nY.$,
                                                                children: ea.intl.string(ea.t["2Ys7nu"]),
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
                              })(j, f, o),
                              x === nb.Done ? null : (0, i.jsx)(ts.y, { className: nV.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function n$(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: nV.d$,
        children: [
            (0, i.jsx)("div", { className: nV.cm, children: (0, i.jsx)(eB.K, { size: "md", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(v.D, {
                        className: nV.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: ea.intl.string(ea.t.vZPktJ),
                    }),
                    (0, i.jsx)(K.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: ea.intl.string(ea.t.vWkIII),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: nV.dh,
                        children: (0, i.jsx)(ta.$, {
                            variant: "primary",
                            size: "sm",
                            text: ea.intl.string(ea.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function nq() {
    return (0, i.jsx)(th, {
        Icon: eB.K,
        disableStars: !0,
        header: ea.intl.string(ea.t["KG/ynf"]),
        tip: ea.intl.string(ea.t.cvcKzX),
    });
}
function nW() {
    return (0, i.jsx)(tA, { onClick: () => td._.dispatch(eL.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var nQ = n(133563);
function n0(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        { enabled: a } = eY.A.useConfig({ location: "RecentsPopout" }),
        l = (0, eV.Sc)(),
        r = (0, ez.bG)([ep.A], () => ep.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: nQ.wx,
        children: [
            (0, i.jsxs)("div", {
                className: nQ.qd,
                children: [
                    (0, i.jsx)(eB.K, { size: "md", color: "currentColor", className: nQ.yH }),
                    (0, i.jsx)(v.D, {
                        className: nQ.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: ea.intl.string(ea.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(eX.s, {
                        className: nQ.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": ea.intl.string(ea.t["8k+6QY"]),
                        children: [(0, i.jsx)(n1, { tab: t }), (0, i.jsx)(e0, { closePopout: s })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: nQ.YF,
                children: (0, i.jsxs)(eJ.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: nQ.$H,
                    children: [
                        (0, i.jsx)(eJ.V.Item, {
                            id: u.Y2.UNREADS,
                            "aria-label": ea.intl.string(ea.t.sRUdB8),
                            className: nQ.Mf,
                            children: (0, i.jsx)("span", { className: nQ.Gn, children: ea.intl.string(ea.t.sRUdB8) }),
                        }),
                        (0, i.jsx)(eJ.V.Item, {
                            "aria-label": ea.intl.string(ea.t.GRZF96),
                            id: u.Y2.MENTIONS,
                            className: nQ.Mf,
                            children: (0, i.jsx)("span", { className: nQ.Gn, children: ea.intl.string(ea.t.GRZF96) }),
                        }),
                        a
                            ? (0, i.jsx)(eJ.V.Item, {
                                  "aria-label": ea.intl.string(ea.t["2pAkDA"]),
                                  id: u.Y2.BOOKMARKS,
                                  className: nQ.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: nQ.Gn,
                                      children:
                                          0 === r
                                              ? ea.intl.string(ea.t["2pAkDA"])
                                              : ea.intl.formatToPlainString(ea.t.I4fryG, { count: r }),
                                  }),
                              })
                            : null,
                        l
                            ? (0, i.jsx)(eJ.V.Item, {
                                  "aria-label": ea.intl.string(ea.t.Fn6Odn),
                                  id: u.Y2.SCHEDULED,
                                  className: nQ.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: nQ.Gn,
                                      children: ea.intl.string(ea.t.Fn6Odn),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
function n1(e) {
    let { tab: t } = e;
    return t === u.Y2.UNREADS ? (0, i.jsx)(nW, {}) : t === u.Y2.MENTIONS ? (0, i.jsx)(e9, {}) : null;
}
var n3 = n(935063),
    n2 = n(475743),
    n6 = n(81437),
    n7 = n(378570),
    n8 = n(517019),
    n4 = n(524611);
let n5 = { offset: { left: 4, right: -12 } },
    n9 = "Recent Mentions";
function se(e, t) {
    e7.A.fetchRecentMentions({
        before: t,
        limit: eL.Ue3,
        guildId: null != e && e4.Ay.guildFilter !== eL.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: e4.Ay.roleFilter,
        everyone: e4.Ay.everyoneFilter,
    });
}
function st(e) {
    let { onJump: t } = e,
        n = r.useRef(null),
        s = (0, T.A)("recents", n),
        a = (0, E.bG)([W.A, e8.Ay], () => W.A.getChannel(e8.Ay.getChannelId())),
        {
            messages: l,
            hasMore: d,
            loading: c,
            guildFilter: o,
            roleFilter: u,
            everyoneFilter: h,
        } = (0, E.cf)([e4.Ay], () => ({
            messages: e4.Ay.getMentions(),
            hasMore: e4.Ay.hasMore,
            loading: e4.Ay.loading,
            guildFilter: e4.Ay.guildFilter,
            roleFilter: e4.Ay.roleFilter,
            everyoneFilter: e4.Ay.everyoneFilter,
        })),
        g = (0, n2.A)(o),
        m = (0, n2.A)(u),
        A = (0, n2.A)(h);
    r.useEffect(() => {
        e4.Ay.hasLoadedEver
            ? ((null != g && o !== g) || (null != m && u !== m) || (null != A && h !== A)) && se(a)
            : se(a);
    }, [g, o, m, u, A, h, a]),
        (0, ti.Ay)(() => {
            l?.some(np.$r) && (e7.A.clearMentions(), se(a));
        }),
        (0, ti.l0)(() => {
            e7.A.truncateMentions(eL.Ue3);
        }),
        (0, ti.Ay)(() => {
            eA.default.track(eL.HAw.OPEN_POPOUT, { type: n9 });
        }),
        (0, ti.Ay)(() => {
            function e() {
                n.current?.scrollPageUp({ animate: !0 });
            }
            function t() {
                n.current?.scrollPageDown({ animate: !0 });
            }
            return (
                td._.subscribe(eL.jej.SCROLL_PAGE_DOWN, t),
                td._.subscribe(eL.jej.SCROLL_PAGE_UP, e),
                () => {
                    td._.unsubscribe(eL.jej.SCROLL_PAGE_DOWN, t), td._.unsubscribe(eL.jej.SCROLL_PAGE_UP, e);
                }
            );
        });
    let f = r.useCallback(() => {
        let e = n.current?.getScrollerState();
        null != e &&
            e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
            d &&
            !c &&
            se(a, null != l && l.length > 0 ? l[l.length - 1].id : null);
    }, [d, c, a, l]);
    return null == l || (c && 0 === l.length)
        ? (0, i.jsx)("div", { className: eU.Lq, children: (0, i.jsx)(ts.y, {}) })
        : 0 === l.length
          ? (0, i.jsx)(th, { Icon: n3.X, header: ea.intl.string(ea.t.bgDz74), tip: ea.intl.string(ea.t.NS15vk) })
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
                                l.map((e) => (0, i.jsx)(sn, { message: e, onJump: t }, e.id)),
                                c
                                    ? (0, i.jsx)("div", { className: eU.Lq, children: (0, i.jsx)(ts.y, {}) })
                                    : d
                                      ? (0, i.jsx)("div", {
                                            className: n4.u9,
                                            children: (0, i.jsx)(ta.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                                text: ea.intl.string(ea.t.XBlaiC),
                                                onClick: () =>
                                                    se(a, null != l && l.length > 0 ? l[l.length - 1].id : null),
                                            }),
                                        })
                                      : null,
                            ],
                        });
                    },
                }),
            });
}
function sn(e) {
    let { message: t, onJump: n } = e;
    if (null == t) return null;
    let s = W.A.getChannel(t.channel_id);
    if (null == s || (0, nf.Jm)(s) || (0, nf.$v)(s)) return null;
    let a = n8.A.didAgree(s.getGuildId()),
        l = !!(0, nf.Gc)(s) && !a;
    return (0, i.jsxs)("div", {
        className: eU.aP,
        children: [
            (0, i.jsx)(er, {
                channel: s,
                onClick: (e) => ss(t, () => n(e)),
                collapsed: !1,
                itemId: `header-${t.id}`,
                children: (0, i.jsxs)(_.e, {
                    size: "sm",
                    className: el.GC,
                    children: [
                        (0, i.jsx)(S.m, {
                            text: ea.intl.string(ea.t["+TSRGD"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(I.K, {
                                variant: "secondary",
                                "aria-label": ea.intl.string(ea.t["+TSRGD"]),
                                size: "sm",
                                icon: O.t,
                                onClick: (e) => ss(t, () => n(e)),
                            }),
                        }),
                        (0, i.jsx)(S.m, {
                            text: ea.intl.string(ea.t.e6RscS),
                            ariaHidden: !0,
                            children: (0, i.jsx)(I.K, {
                                variant: "secondary",
                                "aria-label": ea.intl.string(ea.t.e6RscS),
                                size: "sm",
                                icon: M.A,
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
                        className: eU.YD,
                        hideAccessories: l,
                        compact: eg.hH.getSetting(),
                        animateAvatar: !1,
                        focusProps: n5,
                        trackAnnouncementViews: !0,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
function ss(e, t) {
    function n() {
        let { id: n, channel_id: s } = e;
        null != W.A.getChannel(s) && (nA.A.trackJump(s, n, n9), (0, n7.ci)(s, n)), t();
    }
    (0, n6.A)(e, n) && n();
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
let sc = { offset: { left: 4, right: -12 } };
function so(e) {
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
        c = (0, T.A)("scheduled-messages", d);
    return s
        ? (0, i.jsx)(ts.y, { className: eU.Lq })
        : 0 === l.length
          ? (0, i.jsx)(th, { Icon: b.O, header: ea.intl.string(ea.t.aJQZfZ), tip: ea.intl.string(ea.t.rCN4pN) })
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
                                    su,
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
let su = r.memo(function (e) {
    let { scheduledMessage: t, channelId: n, isPendingDeletion: s, onJump: a } = e,
        l = (0, E.bG)([W.A], () => W.A.getChannel(n)),
        { isError: d, stateMessage: c } = (function (e) {
            switch (e) {
                case sr.SCHEDULED:
                    return { isError: !1, stateMessage: ea.intl.string(ea.t.Fn6Odn) };
                case sr.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: ea.intl.string(ea.t.v5O2dK) };
                case sr.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: ea.intl.string(ea.t.j8uIfG) };
                case sr.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: ea.intl.string(ea.t["w6zHX/"]) };
                case sr.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: ea.intl.string(ea.t.pflV7z) };
                case sr.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: ea.intl.string(ea.t.j8uIfG) };
                default:
                    (0, tw.xb)(e);
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
                      (0, i.jsx)(er, {
                          itemId: `header-${t.record.id}`,
                          channel: l,
                          onClick: (e) => {
                              (0, n7.iN)(l.id), a(e);
                          },
                          collapsed: !1,
                          children: (0, i.jsxs)(_.e, {
                              size: "sm",
                              className: el.GC,
                              children: [
                                  (0, i.jsx)(S.m, {
                                      text: ea.intl.string(ea.t.SBcdAN),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(I.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: b.O,
                                          "aria-label": ea.intl.string(ea.t.SBcdAN),
                                          onClick: u,
                                      }),
                                  }),
                                  (0, i.jsx)(S.m, {
                                      text: ea.intl.string(ea.t.O3sL8F),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(I.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sa.a,
                                          "aria-label": ea.intl.string(ea.t.O3sL8F),
                                          onClick: o,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                      (0, i.jsx)(eu, {
                          type: d ? "error" : "success",
                          text: d
                              ? c
                              : ea.intl.formatToPlainString(ea.t["CvHu/j"], {
                                    timestamp: new Date(t.sendAtTimestamp).valueOf(),
                                }),
                      }),
                      s
                          ? (0, i.jsx)(ts.y, { className: eU.Lq })
                          : (0, i.jsx)(
                                eh.A,
                                {
                                    message: t.record,
                                    channel: l,
                                    className: eU.YD,
                                    compact: eg.hH.getSetting(),
                                    animateAvatar: !1,
                                    focusProps: sc,
                                },
                                t.record.id,
                            ),
                  ],
              },
              t.record.id,
          );
});
var sh = n(854325);
function sg(e) {
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
        "aria-label": ea.intl.string(ea.t.GSmTKJ),
        className: t,
        children: (0, i.jsx)("div", {
            className: c()(sh.k, { [sh.q]: n }),
            children: (0, i.jsx)(g.F, {
                component: (0, i.jsx)(n0, { tab: s, setTab: a, closePopout: l }),
                children:
                    s === u.Y2.MENTIONS
                        ? (0, i.jsx)(st, { onJump: r })
                        : A && s === u.Y2.BOOKMARKS
                          ? (0, i.jsx)(eP, { closePopout: l })
                          : s === u.Y2.SCHEDULED
                            ? (0, i.jsx)(so, { onJump: r })
                            : (0, i.jsx)(o.tH, {
                                  fallback: (0, i.jsx)(nq, {}),
                                  children: (0, i.jsx)(nZ, {
                                      onJump: r,
                                      showTutorial: d,
                                      setSeenTutorial: m,
                                      closePopout: l,
                                  }),
                              }),
            }),
        }),
    });
}
