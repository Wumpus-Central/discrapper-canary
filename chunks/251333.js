t.d(s, { $: () => eD, J: () => ep });
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
    j = t(922016),
    h = t(689175),
    A = t(695366),
    f = t(661531),
    N = t(534514),
    E = t(241326),
    b = t(939249),
    p = t(933832),
    D = t(22231),
    _ = t(99677),
    I = t(406810),
    C = t(442433),
    T = t(928039),
    R = t(139286),
    S = t(636922),
    k = t(194085),
    y = t(835835),
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
function K() {
    return q.A.getSavedMessages().map((e) => e.saveData);
}
var V = t(320448),
    X = t(534890),
    J = t(187322),
    Y = t(778712),
    Z = t(47167),
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
                s.isPrivate() ? null : (0, a.jsx)(V._, { size: "xxs" }),
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
          ? (0, a.jsx)(H.A, { channel: s, size: Y._3.SIZE_24, "aria-hidden": !0 })
          : (0, a.jsx)("div", { className: i()(ee.Kk, ee.ro), children: (0, a.jsx)(X.o, { size: "xxs" }) });
}
function en(e) {
    let { channel: s } = e,
        t = (0, x.bG)([$.A], () => $.A.getGuild(s.guild_id)),
        n = (0, Z.Ay)(s, !1),
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
    ei = t(834730),
    er = t(862482),
    ec = t(192308),
    ed = t(404374),
    eo = t(725807),
    eu = t(927578),
    em = t(226017),
    ex = t(652215),
    eg = t(788868),
    ev = t(398610),
    ej = t(936037);
function eh() {
    return (0, em.A)()
        ? (0, a.jsx)("div", {
              className: ev.do,
              children: (0, a.jsxs)("div", {
                  className: ev.U6,
                  children: [
                      (0, a.jsx)("img", { src: "/assets/29e2479161d09050.png", className: ev.Sl, alt: "" }),
                      (0, a.jsx)(N.D, {
                          className: ev.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: Q.intl.string(Q.t.erEf2g),
                      }),
                      (0, a.jsx)(ei.E, {
                          variant: "text-md/medium",
                          color: "text-muted",
                          children: Q.intl.string(Q.t.NaRCXT),
                      }),
                  ],
              }),
          })
        : (0, a.jsxs)("div", {
              className: ev.do,
              children: [
                  (0, a.jsxs)("div", {
                      className: ev.U6,
                      children: [
                          (0, a.jsx)("img", { src: ej, className: ev.Sl, alt: "" }),
                          (0, a.jsx)(N.D, {
                              className: ev.wx,
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: Q.intl.string(Q.t.w4DRbZ),
                          }),
                          (0, a.jsx)(ei.E, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: Q.intl.string(Q.t.F6u3E3),
                          }),
                      ],
                  }),
                  (0, a.jsx)(eA, {}),
              ],
          });
}
function eA() {
    let e = (0, eu.Dd)(eg.PremiumTypes.TIER_2),
        s = n.useCallback(
            () =>
                (0, ec.openModalLazy)(async () => {
                    let { default: e } = await t.e("22540").then(t.bind(t, 530951));
                    return (s) => (0, a.jsx)(e, { ...s });
                }),
            [],
        ),
        l = Q.intl.format(Q.t.qXh3fo, { nitroTierName: e, onClick: s });
    return (0, a.jsxs)("div", {
        className: ev.Zj,
        children: [
            (0, a.jsx)(el.t, { size: "md", color: ed.k0.PREMIUM_TIER_2 }),
            (0, a.jsx)(ei.E, { variant: "text-xs/medium", color: "text-strong", className: ev.tD, children: l }),
            (0, a.jsx)(eo.A, {
                className: ev.Oy,
                size: er.lO.TINY,
                shinyButtonClassName: ev.Oy,
                subscriptionTier: eg.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: ex.JJy.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
var ef = t(953424);
function eN(e) {
    let { reminder: s, throttledNow: t } = e,
        { dueInText: n, isOverdue: l } = (0, z.Ce)({ dueAt: s?.saveData.dueAt, now: t, type: z.kh.SHORT });
    if (null == s.saveData.dueAt) return null;
    let i = l ? "text-feedback-critical" : "text-default";
    return (0, a.jsxs)("div", {
        className: ef.k,
        children: [
            (0, a.jsx)("div", {
                className: ef.K,
                children: (0, a.jsx)(I.O, {
                    size: "xxs",
                    color:
                        "text-feedback-critical" === i
                            ? f.A.colors.TEXT_FEEDBACK_CRITICAL
                            : f.A.colors.INTERACTIVE_TEXT_ACTIVE,
                }),
            }),
            (0, a.jsx)(N.D, { variant: "text-md/semibold", color: i, children: n }),
        ],
    });
}
var eE = t(608149);
function eb(e) {
    let { closePopout: s } = e;
    return (0, a.jsx)(g.l, {
        "aria-label": Q.intl.string(Q.t["2pAkDA"]),
        children: (0, a.jsxs)("div", {
            className: eE.jC,
            children: [
                (0, a.jsx)(y.Y9, { icon: v.c, title: Q.intl.string(Q.t["2pAkDA"]) }),
                (0, a.jsx)(ep, { closePopout: s }),
            ],
        }),
    });
}
function ep(e) {
    let { closePopout: s } = e,
        t = (function () {
            let [e, s] = n.useState(K),
                t = n.useRef(q.A.getIsStale());
            return (
                n.useEffect(() => {
                    let e = q.A.getLastChanged();
                    function a() {
                        let a = q.A.getLastChanged();
                        if (e !== a) {
                            if (((e = a), t.current && !q.A.getIsStale())) {
                                (t.current = !1), s(K());
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
    return ((0, R.A)(
        {
            type: u.ImpressionTypes.POPOUT,
            name: u.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: { total_count: t.length, overdue_count: q.A.getOverdueMessageReminderCount() },
        },
        {},
        [t.length],
    ),
    0 === t.length)
        ? (0, a.jsx)(eh, {})
        : (0, a.jsx)(e_, { savedMessageKeys: t, closePopout: s });
}
function eD(e) {
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
        () => (P._.subscribe(ex.jej.TOGGLE_FOR_LATER, m), () => void P._.unsubscribe(ex.jej.TOGGLE_FOR_LATER, m)),
        [m],
    );
    let g = (0, x.bG)([q.A], () => q.A.hasOverdueReminder(), []);
    return (0, a.jsx)(j.Y, {
        targetElementRef: o,
        animation: j.Y.Animation.NONE,
        position: i,
        align: r,
        autoInvert: !1,
        shouldShow: c,
        onRequestClose: u,
        renderPopout: function () {
            return (0, a.jsx)(eb, { closePopout: u });
        },
        ignoreModalClicks: !0,
        children: (e, s) => {
            let { isShown: t } = s;
            return l(m, t, e, g, o);
        },
    });
}
function e_(e) {
    let { savedMessageKeys: s, closePopout: t } = e,
        l = n.useRef(null),
        i = (0, T.A)("for-later", l),
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
                    return (0, a.jsx)(h.Ch, {
                        ref: (e) => {
                            (l.current = e), (n.current = e?.getScrollerNode() ?? null);
                        },
                        className: eE.VB,
                        ...i,
                        children: s.map((e) =>
                            (0, a.jsx)(eC, { savedMessageKey: e, closePopout: t, throttledNow: r }, e.messageId),
                        ),
                    });
                },
            }),
        })
    );
}
function eI(e) {
    let { savedMessage: s, closePopout: t, throttledNow: l } = e,
        r = (0, z.vr)(s),
        c = n.useCallback(
            async (e) => {
                await (0, z.le)(s, r),
                    e.shiftKey || t(),
                    L.default.track(ex.HAw.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: s.saveData.channelId,
                        message_id: s.saveData.messageId,
                        message_author_id: s.message?.author.id,
                        type: null != s.saveData.dueAt ? F.Yf.REMINDER : F.Yf.BOOKMARK,
                        due_duration: null != s.saveData.dueAt ? o()().diff(s.saveData.dueAt) : void 0,
                    });
            },
            [t, s, r],
        ),
        d = (0, x.bG)([O.A], () => !!(r?.type === ex.rbe.UNKNOWN || r?.isPrivate()) || O.A.can(ex.xBc.VIEW_CHANNEL, r));
    return null != r && null != s.message && d
        ? (0, a.jsxs)("div", {
              className: eE.zC,
              children: [
                  (0, a.jsx)(b.D, { className: eE.M, onClick: c, "aria-label": Q.intl.string(Q.t["+TSRGD"]) }),
                  null != s.saveData.dueAt ? (0, a.jsx)(eN, { reminder: s, throttledNow: l }) : null,
                  (0, a.jsx)(et, { channel: r }),
                  (0, a.jsx)(
                      S.A,
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
                  (0, a.jsx)(k.Ay, {
                      className: eE.S3,
                      children: (0, a.jsx)(eT, { savedMessage: s, jumpToMessage: c }),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: i()(eE.zC, eE.tq),
              children: [
                  (0, a.jsx)("div", {
                      className: eE.fy,
                      children: (0, a.jsx)(A.E, { size: "xxs", color: f.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                  }),
                  (0, a.jsx)(N.D, {
                      variant: "text-md/semibold",
                      color: "text-default",
                      children: null != s.saveData.dueAt ? Q.intl.string(Q.t["wuQm+j"]) : Q.intl.string(Q.t.o572Fe),
                  }),
                  (0, a.jsx)(k.Ay, {
                      className: eE.S3,
                      children: (0, a.jsx)(
                          k.qv,
                          {
                              label: Q.intl.string(Q.t.SvXS1Z),
                              icon: E.u,
                              dangerous: !0,
                              onClick: () => (0, G.x)(s.saveData),
                          },
                          "delete",
                      ),
                  }),
              ],
          });
}
function eC(e) {
    let { savedMessageKey: s, closePopout: t, throttledNow: n } = e,
        l = (0, x.bG)([q.A], () => q.A.getSavedMessage(s.channelId, s.messageId));
    return null == l ? null : (0, a.jsx)(eI, { savedMessage: l, closePopout: t, throttledNow: n });
}
function eT(e) {
    let { savedMessage: s, jumpToMessage: n } = e;
    return (c()(null != s.message, "Saved message must be cached for For Later action buttons"),
    null != s.saveData.dueAt)
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(
                      k.qv,
                      {
                          label: Q.intl.string(Q.t.yjGtdJ),
                          icon: p.A,
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
                      k.qv,
                      {
                          label: Q.intl.string(Q.t.vrbqs1),
                          icon: D.R,
                          onClick: (e) =>
                              (0, C.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await t.e("75133").then(t.bind(t, 195404));
                                  return (t) =>
                                      (0, a.jsx)(e, { ...t, label: Q.intl.string(Q.t.roMu1H), message: s.message });
                              }),
                      },
                      "edit-reminder",
                  ),
                  (0, a.jsx)(k.$$, {}),
                  (0, a.jsx)(
                      k.qv,
                      { label: Q.intl.string(Q.t["+TSRGD"]), icon: _.t, onClick: (e) => n(e) },
                      "jump-to-message",
                  ),
                  (0, a.jsx)(
                      k.qv,
                      { label: Q.intl.string(Q.t.SvXS1Z), icon: v.c, onClick: () => (0, G.x)(s.saveData) },
                      "remove-reminder",
                  ),
              ],
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(
                      k.qv,
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
                      k.qv,
                      { label: Q.intl.string(Q.t["+TSRGD"]), icon: _.t, onClick: (e) => n(e) },
                      "jump-to-message",
                  ),
                  (0, a.jsx)(
                      k.qv,
                      { label: Q.intl.string(Q.t.SvXS1Z), icon: v.c, onClick: () => (0, G.x)(s.saveData) },
                      "remove-bookmark",
                  ),
              ],
          });
}
