t.d(s, { $: () => ep, J: () => eb });
var a = t(627968),
    n = t(64700),
    l = t(503698),
    i = t.n(l),
    r = t(284009),
    c = t.n(r),
    d = t(989349),
    o = t.n(d),
    u = t(562708),
    m = t(837381),
    x = t(17928),
    g = t(305866),
    v = t(606096),
    j = t(661531),
    h = t(834730),
    A = t(922016),
    f = t(689175),
    E = t(695366),
    N = t(297264),
    b = t(241326),
    p = t(939249),
    D = t(933832),
    T = t(22231),
    _ = t(99677),
    I = t(406810),
    C = t(442433),
    R = t(928039),
    S = t(139286),
    k = t(636922),
    y = t(194085),
    M = t(885386),
    O = t(576705),
    L = t(174459),
    P = t(625494),
    w = t(927813),
    G = t(164684),
    z = t(704456),
    q = t(85109),
    F = t(756377);
t(321073);
var U = t(216623);
function V() {
    return q.A.getSavedMessages().map((e) => e.saveData);
}
var X = t(320448),
    K = t(534890),
    J = t(187322),
    Z = t(778712),
    Y = t(47167),
    B = t(713654),
    H = t(598104),
    W = t(548118),
    $ = t(71393),
    Q = t(375708),
    ee = t(2224);
let es = { top: 8, bottom: 8, left: -4, right: -4 };
function et(e) {
    let { channel: s, children: t } = e;
    return (0, a.jsx)(J.vN, {
        offset: es,
        children: (0, a.jsxs)("div", {
            className: ee.ZO,
            "data-recents-channel": s.id,
            children: [
                (0, a.jsx)(ea, { channel: s }),
                s.isPrivate() ? null : (0, a.jsx)(X._, { size: "xxs" }),
                (0, a.jsx)(en, { channel: s }),
                t,
            ],
        }),
    });
}
function ea(e) {
    let { channel: s } = e,
        t = (0, x.bG)([$.A], () => $.A.getGuild(s.guild_id));
    return null != t
        ? (0, a.jsx)(W.Ay, { className: ee.Kk, guild: t, size: W.Ay.Sizes.SMALLER, "aria-hidden": !0 })
        : s.isGroupDM()
          ? (0, a.jsx)(H.A, { channel: s, size: Z._3.SIZE_24, "aria-hidden": !0 })
          : (0, a.jsx)("div", { className: i()(ee.Kk, ee.ro), children: (0, a.jsx)(K.o, { size: "xxs" }) });
}
function en(e) {
    let { channel: s } = e,
        t = (0, x.bG)([$.A], () => $.A.getGuild(s.guild_id)),
        n = (0, Y.Ay)(s, !1),
        l = (0, B.gU)(s, t),
        i = s.isPrivate() || null == l,
        r = s.isDM() ? Q.intl.formatToPlainString(Q.t.smD7XV, { username: n }) : n;
    return (0, a.jsxs)("div", {
        className: ee.yP,
        children: [
            i ? null : (0, a.jsx)(l, { className: ee.j1, size: "xxs" }),
            (0, a.jsx)(N.D, { variant: "text-md/semibold", color: "text-default", children: r }),
        ],
    });
}
var el = t(403581),
    ei = t(862482),
    er = t(192308),
    ec = t(404374),
    ed = t(725807),
    eo = t(428262),
    eu = t(226017),
    em = t(652215),
    ex = t(202541),
    eg = t(398610),
    ev = t(936037);
function ej() {
    return (0, eu.A)()
        ? (0, a.jsx)("div", {
              className: eg.do,
              children: (0, a.jsxs)("div", {
                  className: eg.U6,
                  children: [
                      (0, a.jsx)("img", { src: "/assets/29e2479161d09050.png", className: eg.Sl, alt: "" }),
                      (0, a.jsx)(N.D, {
                          className: eg.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: Q.intl.string(Q.t.erEf2g),
                      }),
                      (0, a.jsx)(h.E, {
                          variant: "text-md/medium",
                          color: "text-muted",
                          children: Q.intl.string(Q.t.NaRCXT),
                      }),
                  ],
              }),
          })
        : (0, a.jsxs)("div", {
              className: eg.do,
              children: [
                  (0, a.jsxs)("div", {
                      className: eg.U6,
                      children: [
                          (0, a.jsx)("img", { src: ev, className: eg.Sl, alt: "" }),
                          (0, a.jsx)(N.D, {
                              className: eg.wx,
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: Q.intl.string(Q.t.w4DRbZ),
                          }),
                          (0, a.jsx)(h.E, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: Q.intl.string(Q.t.F6u3E3),
                          }),
                      ],
                  }),
                  (0, a.jsx)(eh, {}),
              ],
          });
}
function eh() {
    let e = (0, eo.Dd)(ex.PremiumTypes.TIER_2),
        s = n.useCallback(
            () =>
                (0, er.openModalLazy)(async () => {
                    let { default: e } = await t.e("22540").then(t.bind(t, 530951));
                    return (s) => (0, a.jsx)(e, { ...s });
                }),
            [],
        ),
        l = Q.intl.format(Q.t.qXh3fo, { nitroTierName: e, onClick: s });
    return (0, a.jsxs)("div", {
        className: eg.Zj,
        children: [
            (0, a.jsx)(el.t, { size: "md", color: ec.k0.PREMIUM_TIER_2 }),
            (0, a.jsx)(h.E, { variant: "text-xs/medium", color: "text-strong", className: eg.tD, children: l }),
            (0, a.jsx)(ed.A, {
                className: eg.Oy,
                size: ei.lO.TINY,
                shinyButtonClassName: eg.Oy,
                subscriptionTier: ex.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: em.JJy.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
var eA = t(953424);
function ef(e) {
    let { reminder: s, throttledNow: t } = e,
        { dueInText: n, isOverdue: l } = (0, z.Ce)({ dueAt: s?.saveData.dueAt, now: t, type: z.kh.SHORT });
    if (null == s.saveData.dueAt) return null;
    let i = l ? "text-feedback-critical" : "text-default";
    return (0, a.jsxs)("div", {
        className: eA.k,
        children: [
            (0, a.jsx)("div", {
                className: eA.K,
                children: (0, a.jsx)(I.O, {
                    size: "xxs",
                    color:
                        "text-feedback-critical" === i
                            ? j.A.colors.TEXT_FEEDBACK_CRITICAL
                            : j.A.colors.INTERACTIVE_TEXT_ACTIVE,
                }),
            }),
            (0, a.jsx)(N.D, { variant: "text-md/semibold", color: i, children: n }),
        ],
    });
}
var eE = t(608149);
function eN(e) {
    let { closePopout: s } = e;
    return (0, a.jsx)(g.l, {
        "aria-label": Q.intl.string(Q.t["2pAkDA"]),
        children: (0, a.jsxs)("div", {
            className: eE.jC,
            children: [
                (0, a.jsx)("div", {
                    className: eE.wx,
                    children: (0, a.jsxs)("div", {
                        className: eE.gn,
                        children: [
                            (0, a.jsx)(v.c, { color: j.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                            (0, a.jsx)(h.E, {
                                variant: "text-lg/semibold",
                                color: "interactive-text-active",
                                children: Q.intl.string(Q.t["2pAkDA"]),
                            }),
                        ],
                    }),
                }),
                (0, a.jsx)(eb, { closePopout: s }),
            ],
        }),
    });
}
function eb(e) {
    let { closePopout: s } = e,
        t = (function () {
            let [e, s] = n.useState(V),
                t = n.useRef(q.A.getIsStale());
            return (
                n.useEffect(() => {
                    let e = q.A.getLastChanged();
                    function a() {
                        let a = q.A.getLastChanged();
                        if (e !== a) {
                            if (((e = a), t.current && !q.A.getIsStale())) {
                                (t.current = !1), s(V());
                                return;
                            }
                            s((e) => {
                                let s = [...e],
                                    t = new Map(q.A.getSavedMessages().map((e) => [e.saveData.messageId, e]));
                                for (let a of e) t.has(a.messageId) ? t.delete(a.messageId) : s.splice(s.indexOf(a), 1);
                                for (let e of t.values()) s.push(e.saveData);
                                return s;
                            });
                        }
                    }
                    return (
                        q.A.addChangeListener(a),
                        () => {
                            q.A.removeChangeListener(a);
                        }
                    );
                }, []),
                n.useEffect(() => {
                    (0, U.AX)();
                }, []),
                e
            );
        })();
    return ((0, S.A)(
        {
            type: u.ImpressionTypes.POPOUT,
            name: u.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: { total_count: t.length, overdue_count: q.A.getOverdueMessageReminderCount() },
        },
        {},
        [t.length],
    ),
    0 === t.length)
        ? (0, a.jsx)(ej, {})
        : (0, a.jsx)(eD, { savedMessageKeys: t, closePopout: s });
}
function ep(e) {
    let { onOpen: s, onClose: t, children: l, popoutPosition: i, popoutAlign: r } = e,
        [c, d] = n.useState(!1),
        o = n.useRef(null),
        u = n.useCallback(() => {
            d(!1), c && t?.();
        }, [t, c]),
        m = n.useCallback(() => {
            d(!c), c ? t?.() : s?.();
        }, [t, s, c]);
    n.useEffect(
        () => (P._.subscribe(em.jej.TOGGLE_FOR_LATER, m), () => void P._.unsubscribe(em.jej.TOGGLE_FOR_LATER, m)),
        [m],
    );
    let g = (0, x.bG)([q.A], () => q.A.hasOverdueReminder(), []);
    return (0, a.jsx)(A.Y, {
        targetElementRef: o,
        animation: A.Y.Animation.NONE,
        position: i,
        align: r,
        autoInvert: !1,
        shouldShow: c,
        onRequestClose: u,
        renderPopout: function () {
            return (0, a.jsx)(eN, { closePopout: u });
        },
        ignoreModalClicks: !0,
        children: (e, s) => {
            let { isShown: t } = s;
            return l(m, t, e, g, o);
        },
    });
}
function eD(e) {
    let { savedMessageKeys: s, closePopout: t } = e,
        l = n.useRef(null),
        i = (0, R.A)("for-later", l),
        [r, c] = n.useState(new Date());
    return (
        n.useEffect(() => {
            let e = setInterval(() => c(new Date()), w.A.Millis.MINUTE);
            return () => {
                clearInterval(e);
            };
        }, []),
        (0, a.jsx)(m.hD, {
            navigator: i,
            children: (0, a.jsx)(m.PR, {
                children: (e) => {
                    let { ref: n, ...i } = e;
                    return (0, a.jsx)(f.Ch, {
                        ref: (e) => {
                            (l.current = e), (n.current = e?.getScrollerNode() ?? null);
                        },
                        className: eE.VB,
                        ...i,
                        children: s.map((e) =>
                            (0, a.jsx)(e_, { savedMessageKey: e, closePopout: t, throttledNow: r }, e.messageId),
                        ),
                    });
                },
            }),
        })
    );
}
function eT(e) {
    let { savedMessage: s, closePopout: t, throttledNow: l } = e,
        r = (0, z.vr)(s),
        c = n.useCallback(
            async (e) => {
                await (0, z.le)(s, r),
                    e.shiftKey || t(),
                    L.default.track(em.HAw.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: s.saveData.channelId,
                        message_id: s.saveData.messageId,
                        message_author_id: s.message?.author.id,
                        type: null != s.saveData.dueAt ? F.Yf.REMINDER : F.Yf.BOOKMARK,
                        due_duration: null != s.saveData.dueAt ? o()().diff(s.saveData.dueAt) : void 0,
                    });
            },
            [t, s, r],
        ),
        d = (0, x.bG)([O.A], () => !!(r?.type === em.rbe.UNKNOWN || r?.isPrivate()) || O.A.can(em.xBc.VIEW_CHANNEL, r));
    return null != r && null != s.message && d
        ? (0, a.jsxs)("div", {
              className: eE.zC,
              children: [
                  (0, a.jsx)(p.D, { className: eE.M, onClick: c, "aria-label": Q.intl.string(Q.t["+TSRGD"]) }),
                  null != s.saveData.dueAt ? (0, a.jsx)(ef, { reminder: s, throttledNow: l }) : null,
                  (0, a.jsx)(et, { channel: r }),
                  (0, a.jsx)(
                      k.A,
                      {
                          message: s.message,
                          channel: r,
                          className: eE.iU,
                          compact: M.hH.getSetting(),
                          animateAvatar: !1,
                          trackAnnouncementViews: !0,
                          tabIndex: -1,
                      },
                      s.message.id,
                  ),
                  (0, a.jsx)(y.Ay, {
                      className: eE.S3,
                      children: (0, a.jsx)(eI, { savedMessage: s, jumpToMessage: c }),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: i()(eE.zC, eE.tq),
              children: [
                  (0, a.jsx)("div", {
                      className: eE.fy,
                      children: (0, a.jsx)(E.E, { size: "xxs", color: j.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                  }),
                  (0, a.jsx)(N.D, {
                      variant: "text-md/semibold",
                      color: "text-default",
                      children: null != s.saveData.dueAt ? Q.intl.string(Q.t["wuQm+j"]) : Q.intl.string(Q.t.o572Fe),
                  }),
                  (0, a.jsx)(y.Ay, {
                      className: eE.S3,
                      children: (0, a.jsx)(
                          y.qv,
                          {
                              label: Q.intl.string(Q.t.SvXS1Z),
                              icon: b.u,
                              dangerous: !0,
                              onClick: () => (0, G.x)(s.saveData),
                          },
                          "delete",
                      ),
                  }),
              ],
          });
}
function e_(e) {
    let { savedMessageKey: s, closePopout: t, throttledNow: n } = e,
        l = (0, x.bG)([q.A], () => q.A.getSavedMessage(s.channelId, s.messageId));
    return null == l ? null : (0, a.jsx)(eT, { savedMessage: l, closePopout: t, throttledNow: n });
}
function eI(e) {
    let { savedMessage: s, jumpToMessage: n } = e;
    return (c()(null != s.message, "Saved message must be cached for For Later action buttons"),
    null != s.saveData.dueAt)
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(
                      y.qv,
                      {
                          label: Q.intl.string(Q.t.yjGtdJ),
                          icon: D.A,
                          onClick: () =>
                              (0, G.Y)({
                                  channelId: s.saveData.channelId,
                                  messageId: s.saveData.messageId,
                                  dueAt: void 0,
                              }),
                      },
                      "mark-complete",
                  ),
                  (0, a.jsx)(
                      y.qv,
                      {
                          label: Q.intl.string(Q.t.vrbqs1),
                          icon: T.R,
                          onClick: (e) =>
                              (0, C.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await t.e("75133").then(t.bind(t, 195404));
                                  return (t) =>
                                      (0, a.jsx)(e, { ...t, label: Q.intl.string(Q.t.roMu1H), message: s.message });
                              }),
                      },
                      "edit-reminder",
                  ),
                  (0, a.jsx)(y.$$, {}),
                  (0, a.jsx)(
                      y.qv,
                      { label: Q.intl.string(Q.t["+TSRGD"]), icon: _.t, onClick: (e) => n(e) },
                      "jump-to-message",
                  ),
                  (0, a.jsx)(
                      y.qv,
                      { label: Q.intl.string(Q.t.SvXS1Z), icon: v.c, onClick: () => (0, G.x)(s.saveData) },
                      "remove-reminder",
                  ),
              ],
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(
                      y.qv,
                      {
                          label: Q.intl.string(Q.t.mJ3P0N),
                          icon: I.O,
                          onClick: (e) =>
                              (0, C.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await t.e("75133").then(t.bind(t, 195404));
                                  return (t) =>
                                      (0, a.jsx)(e, { ...t, label: Q.intl.string(Q.t.mJ3P0N), message: s.message });
                              }),
                      },
                      "create-reminder",
                  ),
                  (0, a.jsx)(
                      y.qv,
                      { label: Q.intl.string(Q.t["+TSRGD"]), icon: _.t, onClick: (e) => n(e) },
                      "jump-to-message",
                  ),
                  (0, a.jsx)(
                      y.qv,
                      { label: Q.intl.string(Q.t.SvXS1Z), icon: v.c, onClick: () => (0, G.x)(s.saveData) },
                      "remove-bookmark",
                  ),
              ],
          });
}
