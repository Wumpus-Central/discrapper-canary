"use strict";
n.d(t, { $: () => eE, J: () => ej });
var s = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    l = n(284009),
    o = n.n(l),
    c = n(989349),
    _ = n.n(c),
    d = n(110259),
    u = n(837381),
    m = n(17928),
    g = n(305866),
    f = n(606096),
    p = n(922016),
    x = n(689175),
    h = n(695366),
    b = n(661531),
    A = n(534514),
    C = n(241326),
    v = n(939249),
    j = n(933832),
    E = n(22231),
    k = n(99677),
    T = n(406810),
    N = n(442433),
    S = n(928039),
    y = n(139286),
    I = n(636922),
    M = n(194085),
    D = n(835835),
    R = n(253932),
    P = n(576705),
    O = n(954571),
    L = n(625494),
    w = n(927813),
    G = n(164684),
    B = n(704456),
    U = n(85109),
    z = n(756377);
n(321073);
var K = n(216623);
function F() {
    return U.A.getSavedMessages().map((e) => e.saveData);
}
var X = n(320448),
    H = n(534890),
    W = n(187322),
    q = n(778712),
    V = n(47167),
    Q = n(713654),
    Y = n(598104),
    J = n(548118),
    Z = n(71393),
    $ = n(985018),
    ee = n(2224);
let et = { top: 8, bottom: 8, left: -4, right: -4 };
function en(e) {
    let { channel: t, children: n } = e;
    return (0, s.jsx)(W.vN, {
        offset: et,
        children: (0, s.jsxs)("div", {
            className: ee.ZO,
            "data-recents-channel": t.id,
            children: [
                (0, s.jsx)(es, { channel: t }),
                t.isPrivate() ? null : (0, s.jsx)(X._, { size: "xxs" }),
                (0, s.jsx)(ea, { channel: t }),
                n,
            ],
        }),
    });
}
function es(e) {
    let { channel: t } = e,
        n = (0, m.bG)([Z.A], () => Z.A.getGuild(t.guild_id));
    return null != n
        ? (0, s.jsx)(J.Ay, { className: ee.Kk, guild: n, size: J.Ay.Sizes.SMALLER, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, s.jsx)(Y.A, { channel: t, size: q._3.SIZE_24, "aria-hidden": !0 })
          : (0, s.jsx)("div", { className: i()(ee.Kk, ee.ro), children: (0, s.jsx)(H.o, { size: "xxs" }) });
}
function ea(e) {
    let { channel: t } = e,
        n = (0, m.bG)([Z.A], () => Z.A.getGuild(t.guild_id)),
        a = (0, V.Ay)(t, !1),
        r = (0, Q.gU)(t, n),
        i = t.isPrivate() || null == r,
        l = t.isDM() ? $.intl.formatToPlainString($.t.smD7XV, { username: a }) : a;
    return (0, s.jsxs)("div", {
        className: ee.yP,
        children: [
            i ? null : (0, s.jsx)(r, { className: ee.j1, size: "xxs" }),
            (0, s.jsx)(A.D, { variant: "text-md/semibold", color: "text-default", children: l }),
        ],
    });
}
var er = n(403581),
    ei = n(834730),
    el = n(862482),
    eo = n(192308),
    ec = n(404374),
    e_ = n(725807),
    ed = n(927578),
    eu = n(226017),
    em = n(652215),
    eg = n(788868),
    ef = n(398610),
    ep = n(936037);
function ex() {
    return (0, eu.A)()
        ? (0, s.jsx)("div", {
              className: ef.do,
              children: (0, s.jsxs)("div", {
                  className: ef.U6,
                  children: [
                      (0, s.jsx)("img", { src: "/assets/29e2479161d09050.png", className: ef.Sl, alt: "" }),
                      (0, s.jsx)(A.D, {
                          className: ef.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: $.intl.string($.t.erEf2g),
                      }),
                      (0, s.jsx)(ei.E, {
                          variant: "text-md/medium",
                          color: "text-muted",
                          children: $.intl.string($.t.NaRCXT),
                      }),
                  ],
              }),
          })
        : (0, s.jsxs)("div", {
              className: ef.do,
              children: [
                  (0, s.jsxs)("div", {
                      className: ef.U6,
                      children: [
                          (0, s.jsx)("img", { src: ep, className: ef.Sl, alt: "" }),
                          (0, s.jsx)(A.D, {
                              className: ef.wx,
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: $.intl.string($.t.w4DRbZ),
                          }),
                          (0, s.jsx)(ei.E, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: $.intl.string($.t.F6u3E3),
                          }),
                      ],
                  }),
                  (0, s.jsx)(eh, {}),
              ],
          });
}
function eh() {
    let e = (0, ed.Dd)(eg.PremiumTypes.TIER_2),
        t = a.useCallback(
            () =>
                (0, eo.openModalLazy)(async () => {
                    let { default: e } = await n.e("159").then(n.bind(n, 530951));
                    return (t) => (0, s.jsx)(e, { ...t });
                }),
            [],
        ),
        r = $.intl.format($.t.qXh3fo, { nitroTierName: e, onClick: t });
    return (0, s.jsxs)("div", {
        className: ef.Zj,
        children: [
            (0, s.jsx)(er.t, { size: "md", color: ec.k0.PREMIUM_TIER_2 }),
            (0, s.jsx)(ei.E, { variant: "text-xs/medium", color: "text-strong", className: ef.tD, children: r }),
            (0, s.jsx)(e_.A, {
                className: ef.Oy,
                size: el.lO.TINY,
                shinyButtonClassName: ef.Oy,
                subscriptionTier: eg.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: em.JJy.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
var eb = n(953424);
function eA(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: a, isOverdue: r } = (0, B.Ce)({ dueAt: t?.saveData.dueAt, now: n, type: B.kh.SHORT });
    if (null == t.saveData.dueAt) return null;
    let i = r ? "text-feedback-critical" : "text-default";
    return (0, s.jsxs)("div", {
        className: eb.k,
        children: [
            (0, s.jsx)("div", {
                className: eb.K,
                children: (0, s.jsx)(T.O, {
                    size: "xxs",
                    color:
                        "text-feedback-critical" === i
                            ? b.A.colors.TEXT_FEEDBACK_CRITICAL
                            : b.A.colors.INTERACTIVE_TEXT_ACTIVE,
                }),
            }),
            (0, s.jsx)(A.D, { variant: "text-md/semibold", color: i, children: a }),
        ],
    });
}
var eC = n(608149);
function ev(e) {
    let { closePopout: t } = e;
    return (0, s.jsx)(g.l, {
        "aria-label": $.intl.string($.t["2pAkDA"]),
        children: (0, s.jsxs)("div", {
            className: eC.jC,
            children: [
                (0, s.jsx)(D.Y9, { icon: f.c, title: $.intl.string($.t["2pAkDA"]) }),
                (0, s.jsx)(ej, { closePopout: t }),
            ],
        }),
    });
}
function ej(e) {
    let { closePopout: t } = e,
        n = (function () {
            let [e, t] = a.useState(F),
                n = a.useRef(U.A.getIsStale());
            return (
                a.useEffect(() => {
                    let e = U.A.getLastChanged();
                    function s() {
                        let s = U.A.getLastChanged();
                        if (e !== s) {
                            if (((e = s), n.current && !U.A.getIsStale())) {
                                (n.current = !1), t(F());
                                return;
                            }
                            t((e) => {
                                let t = [...e],
                                    n = new Map(U.A.getSavedMessages().map((e) => [e.saveData.messageId, e]));
                                for (let s of e) n.has(s.messageId) ? n.delete(s.messageId) : t.splice(t.indexOf(s), 1);
                                for (let e of n.values()) t.push(e.saveData);
                                return t;
                            });
                        }
                    }
                    return (
                        U.A.addChangeListener(s),
                        () => {
                            U.A.removeChangeListener(s);
                        }
                    );
                }, []),
                a.useEffect(() => {
                    (0, K.AX)();
                }, []),
                e
            );
        })();
    return ((0, y.A)(
        {
            type: d.ImpressionTypes.POPOUT,
            name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: { total_count: n.length, overdue_count: U.A.getOverdueMessageReminderCount() },
        },
        {},
        [n.length],
    ),
    0 === n.length)
        ? (0, s.jsx)(ex, {})
        : (0, s.jsx)(ek, { savedMessageKeys: n, closePopout: t });
}
function eE(e) {
    let { onOpen: t, onClose: n, children: r, popoutPosition: i, popoutAlign: l } = e,
        [o, c] = a.useState(!1),
        _ = a.useRef(null),
        d = a.useCallback(() => {
            c(!1), o && n?.();
        }, [n, o]),
        u = a.useCallback(() => {
            c(!o), o ? n?.() : t?.();
        }, [n, t, o]);
    a.useEffect(
        () => (L._.subscribe(em.jej.TOGGLE_FOR_LATER, u), () => void L._.unsubscribe(em.jej.TOGGLE_FOR_LATER, u)),
        [u],
    );
    let g = (0, m.bG)([U.A], () => U.A.hasOverdueReminder(), []);
    return (0, s.jsx)(p.Y, {
        targetElementRef: _,
        animation: p.Y.Animation.NONE,
        position: i,
        align: l,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: d,
        renderPopout: function () {
            return (0, s.jsx)(ev, { closePopout: d });
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return r(u, n, e, g, _);
        },
    });
}
function ek(e) {
    let { savedMessageKeys: t, closePopout: n } = e,
        r = a.useRef(null),
        i = (0, S.A)("for-later", r),
        [l, o] = a.useState(new Date());
    return (
        a.useEffect(() => {
            let e = setInterval(() => o(new Date()), w.A.Millis.MINUTE);
            return () => {
                clearInterval(e);
            };
        }, []),
        (0, s.jsx)(u.hD, {
            navigator: i,
            children: (0, s.jsx)(u.PR, {
                children: (e) => {
                    let { ref: a, ...i } = e;
                    return (0, s.jsx)(x.Ch, {
                        ref: (e) => {
                            (r.current = e), (a.current = e?.getScrollerNode() ?? null);
                        },
                        className: eC.VB,
                        ...i,
                        children: t.map((e) =>
                            (0, s.jsx)(eN, { savedMessageKey: e, closePopout: n, throttledNow: l }, e.messageId),
                        ),
                    });
                },
            }),
        })
    );
}
function eT(e) {
    let { savedMessage: t, closePopout: n, throttledNow: r } = e,
        l = (0, B.vr)(t),
        o = a.useCallback(
            async (e) => {
                await (0, B.le)(t, l),
                    e.shiftKey || n(),
                    O.default.track(em.HAw.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: t.message?.author.id,
                        type: null != t.saveData.dueAt ? z.Yf.REMINDER : z.Yf.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? _()().diff(t.saveData.dueAt) : void 0,
                    });
            },
            [n, t, l],
        ),
        c = (0, m.bG)([P.A], () => !!(l?.type === em.rbe.UNKNOWN || l?.isPrivate()) || P.A.can(em.xBc.VIEW_CHANNEL, l));
    return null != l && null != t.message && c
        ? (0, s.jsxs)("div", {
              className: eC.zC,
              children: [
                  (0, s.jsx)(v.D, { className: eC.M, onClick: o, "aria-label": $.intl.string($.t["+TSRGD"]) }),
                  null != t.saveData.dueAt ? (0, s.jsx)(eA, { reminder: t, throttledNow: r }) : null,
                  (0, s.jsx)(en, { channel: l }),
                  (0, s.jsx)(
                      I.A,
                      {
                          message: t.message,
                          channel: l,
                          className: eC.iU,
                          compact: R.hH.getSetting(),
                          animateAvatar: !1,
                          trackAnnouncementViews: !0,
                          tabIndex: -1,
                      },
                      t.message.id,
                  ),
                  (0, s.jsx)(M.Ay, {
                      className: eC.S3,
                      children: (0, s.jsx)(eS, { savedMessage: t, jumpToMessage: o }),
                  }),
              ],
          })
        : (0, s.jsxs)("div", {
              className: i()(eC.zC, eC.tq),
              children: [
                  (0, s.jsx)("div", {
                      className: eC.fy,
                      children: (0, s.jsx)(h.E, { size: "xxs", color: b.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                  }),
                  (0, s.jsx)(A.D, {
                      variant: "text-md/semibold",
                      color: "text-default",
                      children: null != t.saveData.dueAt ? $.intl.string($.t["wuQm+j"]) : $.intl.string($.t.o572Fe),
                  }),
                  (0, s.jsx)(M.Ay, {
                      className: eC.S3,
                      children: (0, s.jsx)(
                          M.qv,
                          {
                              label: $.intl.string($.t.SvXS1Z),
                              icon: C.u,
                              dangerous: !0,
                              onClick: () => (0, G.x)(t.saveData),
                          },
                          "delete",
                      ),
                  }),
              ],
          });
}
function eN(e) {
    let { savedMessageKey: t, closePopout: n, throttledNow: a } = e,
        r = (0, m.bG)([U.A], () => U.A.getSavedMessage(t.channelId, t.messageId));
    return null == r ? null : (0, s.jsx)(eT, { savedMessage: r, closePopout: n, throttledNow: a });
}
function eS(e) {
    let { savedMessage: t, jumpToMessage: a } = e;
    return (o()(null != t.message, "Saved message must be cached for For Later action buttons"),
    null != t.saveData.dueAt)
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(
                      M.qv,
                      {
                          label: $.intl.string($.t.yjGtdJ),
                          icon: j.A,
                          onClick: () =>
                              (0, G.Y)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0,
                              }),
                      },
                      "mark-complete",
                  ),
                  (0, s.jsx)(
                      M.qv,
                      {
                          label: $.intl.string($.t.vrbqs1),
                          icon: E.R,
                          onClick: (e) =>
                              (0, N.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("36419").then(n.bind(n, 49678));
                                  return (n) =>
                                      (0, s.jsx)(e, { ...n, label: $.intl.string($.t.roMu1H), message: t.message });
                              }),
                      },
                      "edit-reminder",
                  ),
                  (0, s.jsx)(M.$$, {}),
                  (0, s.jsx)(
                      M.qv,
                      { label: $.intl.string($.t["+TSRGD"]), icon: k.t, onClick: (e) => a(e) },
                      "jump-to-message",
                  ),
                  (0, s.jsx)(
                      M.qv,
                      { label: $.intl.string($.t.SvXS1Z), icon: f.c, onClick: () => (0, G.x)(t.saveData) },
                      "remove-reminder",
                  ),
              ],
          })
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(
                      M.qv,
                      {
                          label: $.intl.string($.t.mJ3P0N),
                          icon: T.O,
                          onClick: (e) =>
                              (0, N.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("36419").then(n.bind(n, 49678));
                                  return (n) =>
                                      (0, s.jsx)(e, { ...n, label: $.intl.string($.t.mJ3P0N), message: t.message });
                              }),
                      },
                      "create-reminder",
                  ),
                  (0, s.jsx)(
                      M.qv,
                      { label: $.intl.string($.t["+TSRGD"]), icon: k.t, onClick: (e) => a(e) },
                      "jump-to-message",
                  ),
                  (0, s.jsx)(
                      M.qv,
                      { label: $.intl.string($.t.SvXS1Z), icon: f.c, onClick: () => (0, G.x)(t.saveData) },
                      "remove-bookmark",
                  ),
              ],
          });
}
