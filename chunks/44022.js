t.d(s, { $: () => W, J: () => H });
var a = t(627968),
    n = t(64700),
    l = t(503698),
    i = t.n(l),
    r = t(284009),
    c = t.n(r),
    d = t(989349),
    o = t.n(d),
    u = t(110259),
    m = t(837381),
    x = t(311907),
    g = t(305866),
    v = t(606096),
    j = t(265872),
    h = t(599319),
    A = t(695366),
    f = t(827734),
    b = t(534514),
    N = t(241326),
    p = t(939249),
    E = t(933832),
    D = t(22231),
    _ = t(99677),
    I = t(406810),
    C = t(442433),
    T = t(928039),
    R = t(139286),
    S = t(636922),
    k = t(194085),
    y = t(835835),
    M = t(253932),
    O = t(576705),
    P = t(954571),
    L = t(203982),
    w = t(927813),
    G = t(164684),
    z = t(704456),
    q = t(85109),
    F = t(756377),
    U = t(601179),
    K = t(216595),
    V = t(948331),
    X = t(371349),
    J = t(652215),
    Y = t(985018),
    Z = t(608149);
function B(e) {
    let { closePopout: s } = e;
    return (0, a.jsx)(g.l, {
        "aria-label": Y.intl.string(Y.t["2pAkDA"]),
        children: (0, a.jsxs)("div", {
            className: Z.jC,
            children: [
                (0, a.jsx)(y.Y9, { icon: v.c, title: Y.intl.string(Y.t["2pAkDA"]) }),
                (0, a.jsx)(H, { closePopout: s }),
            ],
        }),
    });
}
function H(e) {
    let { closePopout: s } = e,
        t = (0, U.A)();
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
        ? (0, a.jsx)(V.g, {})
        : (0, a.jsx)($, { savedMessageKeys: t, closePopout: s });
}
function W(e) {
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
        () => (L._.subscribe(J.jej.TOGGLE_FOR_LATER, m), () => void L._.unsubscribe(J.jej.TOGGLE_FOR_LATER, m)),
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
            return (0, a.jsx)(B, { closePopout: u });
        },
        ignoreModalClicks: !0,
        children: (e, s) => {
            let { isShown: t } = s;
            return l(m, t, e, g, o);
        },
    });
}
function $(e) {
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
                        className: Z.VB,
                        ...i,
                        children: s.map((e) =>
                            (0, a.jsx)(ee, { savedMessageKey: e, closePopout: t, throttledNow: r }, e.messageId),
                        ),
                    });
                },
            }),
        })
    );
}
function Q(e) {
    let { savedMessage: s, closePopout: t, throttledNow: l } = e,
        r = (0, z.vr)(s),
        c = n.useCallback(
            async (e) => {
                await (0, z.le)(s, r),
                    e.shiftKey || t(),
                    P.default.track(J.HAw.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: s.saveData.channelId,
                        message_id: s.saveData.messageId,
                        message_author_id: s.message?.author.id,
                        type: null != s.saveData.dueAt ? F.Yf.REMINDER : F.Yf.BOOKMARK,
                        due_duration: null != s.saveData.dueAt ? o()().diff(s.saveData.dueAt) : void 0,
                    });
            },
            [t, s, r],
        ),
        d = (0, x.bG)([O.A], () => !!(r?.type === J.rbe.UNKNOWN || r?.isPrivate()) || O.A.can(J.xBc.VIEW_CHANNEL, r));
    return null != r && null != s.message && d
        ? (0, a.jsxs)("div", {
              className: Z.zC,
              children: [
                  (0, a.jsx)(p.D, { className: Z.M, onClick: c, "aria-label": Y.intl.string(Y.t["+TSRGD"]) }),
                  null != s.saveData.dueAt ? (0, a.jsx)(X.A, { reminder: s, throttledNow: l }) : null,
                  (0, a.jsx)(K.A, { channel: r }),
                  (0, a.jsx)(
                      S.A,
                      {
                          message: s.message,
                          channel: r,
                          className: Z.iU,
                          compact: M.hH.getSetting(),
                          animateAvatar: !1,
                          trackAnnouncementViews: !0,
                          tabIndex: -1,
                      },
                      s.message.id,
                  ),
                  (0, a.jsx)(k.Ay, {
                      className: Z.S3,
                      children: (0, a.jsx)(es, { savedMessage: s, jumpToMessage: c }),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: i()(Z.zC, Z.tq),
              children: [
                  (0, a.jsx)("div", {
                      className: Z.fy,
                      children: (0, a.jsx)(A.E, { size: "xxs", color: f.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                  }),
                  (0, a.jsx)(b.D, {
                      variant: "text-md/semibold",
                      color: "text-default",
                      children: null != s.saveData.dueAt ? Y.intl.string(Y.t["wuQm+j"]) : Y.intl.string(Y.t.o572Fe),
                  }),
                  (0, a.jsx)(k.Ay, {
                      className: Z.S3,
                      children: (0, a.jsx)(
                          k.qv,
                          {
                              label: Y.intl.string(Y.t.SvXS1Z),
                              icon: N.u,
                              dangerous: !0,
                              onClick: () => (0, G.x)(s.saveData),
                          },
                          "delete",
                      ),
                  }),
              ],
          });
}
function ee(e) {
    let { savedMessageKey: s, closePopout: t, throttledNow: n } = e,
        l = (0, x.bG)([q.A], () => q.A.getSavedMessage(s.channelId, s.messageId));
    return null == l ? null : (0, a.jsx)(Q, { savedMessage: l, closePopout: t, throttledNow: n });
}
function es(e) {
    let { savedMessage: s, jumpToMessage: n } = e;
    return (c()(null != s.message, "Saved message must be cached for For Later action buttons"),
    null != s.saveData.dueAt)
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(
                      k.qv,
                      {
                          label: Y.intl.string(Y.t.yjGtdJ),
                          icon: E.A,
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
                          label: Y.intl.string(Y.t.vrbqs1),
                          icon: D.R,
                          onClick: (e) =>
                              (0, C.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await Promise.resolve().then(t.bind(t, 49678));
                                  return (t) =>
                                      (0, a.jsx)(e, { ...t, label: Y.intl.string(Y.t.roMu1H), message: s.message });
                              }),
                      },
                      "edit-reminder",
                  ),
                  (0, a.jsx)(k.$$, {}),
                  (0, a.jsx)(
                      k.qv,
                      { label: Y.intl.string(Y.t["+TSRGD"]), icon: _.t, onClick: (e) => n(e) },
                      "jump-to-message",
                  ),
                  (0, a.jsx)(
                      k.qv,
                      { label: Y.intl.string(Y.t.SvXS1Z), icon: v.c, onClick: () => (0, G.x)(s.saveData) },
                      "remove-reminder",
                  ),
              ],
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(
                      k.qv,
                      {
                          label: Y.intl.string(Y.t.mJ3P0N),
                          icon: I.O,
                          onClick: (e) =>
                              (0, C.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await Promise.resolve().then(t.bind(t, 49678));
                                  return (t) =>
                                      (0, a.jsx)(e, { ...t, label: Y.intl.string(Y.t.mJ3P0N), message: s.message });
                              }),
                      },
                      "create-reminder",
                  ),
                  (0, a.jsx)(
                      k.qv,
                      { label: Y.intl.string(Y.t["+TSRGD"]), icon: _.t, onClick: (e) => n(e) },
                      "jump-to-message",
                  ),
                  (0, a.jsx)(
                      k.qv,
                      { label: Y.intl.string(Y.t.SvXS1Z), icon: v.c, onClick: () => (0, G.x)(s.saveData) },
                      "remove-bookmark",
                  ),
              ],
          });
}
