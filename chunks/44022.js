r.d(t, { $: () => P, J: () => H });
var s = r(627968),
    n = r(64700),
    l = r(503698),
    a = r.n(l),
    i = r(284009),
    o = r.n(i),
    u = r(989349),
    c = r.n(u),
    d = r(110259),
    h = r(837381),
    _ = r(311907),
    S = r(397927),
    E = r(442433),
    g = r(928039),
    p = r(139286),
    f = r(636922),
    A = r(194085),
    m = r(835835),
    R = r(253932),
    y = r(576705),
    T = r(954571),
    x = r(203982),
    I = r(927813),
    L = r(164684),
    b = r(704456),
    N = r(85109),
    v = r(756377),
    C = r(601179),
    F = r(216595),
    O = r(948331),
    j = r(371349),
    k = r(652215),
    W = r(985018),
    M = r(422344);
let D = { offset: { left: 4, right: -12 } };
function w(e) {
    let { closePopout: t } = e;
    return (0, s.jsx)(S.lGe, {
        "aria-label": W.intl.string(W.t["2pAkDA"]),
        children: (0, s.jsxs)("div", {
            className: M.jC,
            children: [
                (0, s.jsx)(m.Y9, { icon: S.cFy, title: W.intl.string(W.t["2pAkDA"]) }),
                (0, s.jsx)(H, { closePopout: t }),
            ],
        }),
    });
}
function H(e) {
    let { closePopout: t } = e,
        r = (0, C.A)();
    return ((0, p.A)(
        {
            type: d.ImpressionTypes.POPOUT,
            name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: { total_count: r.length, overdue_count: N.A.getOverdueMessageReminderCount() },
        },
        {},
        [r.length],
    ),
    0 === r.length)
        ? (0, s.jsx)(O.g, {})
        : (0, s.jsx)(U, { savedMessageKeys: r, closePopout: t });
}
function P(e) {
    let { onOpen: t, onClose: r, children: l, popoutPosition: a, popoutAlign: i } = e,
        [o, u] = n.useState(!1),
        c = n.useRef(null),
        d = n.useCallback(() => {
            u(!1), o && r?.();
        }, [r, o]),
        h = n.useCallback(() => {
            u(!o), o ? r?.() : t?.();
        }, [r, t, o]);
    n.useEffect(
        () => (x._.subscribe(k.jej.TOGGLE_FOR_LATER, h), () => void x._.unsubscribe(k.jej.TOGGLE_FOR_LATER, h)),
        [h],
    );
    let E = (0, _.bG)([N.A], () => N.A.hasOverdueReminder(), []);
    return (0, s.jsx)(S.YNO, {
        targetElementRef: c,
        animation: S.YNO.Animation.NONE,
        position: a,
        align: i,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: d,
        renderPopout: function () {
            return (0, s.jsx)(w, { closePopout: d });
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: r } = t;
            return l(h, r, e, E, c);
        },
    });
}
function U(e) {
    let { savedMessageKeys: t, closePopout: r } = e,
        l = n.useRef(null),
        a = (0, g.A)("for-later", l),
        [i, o] = n.useState(new Date());
    return (
        n.useEffect(() => {
            let e = setInterval(() => o(new Date()), I.A.Millis.MINUTE);
            return () => {
                clearInterval(e);
            };
        }, []),
        (0, s.jsx)(h.hD, {
            navigator: a,
            children: (0, s.jsx)(h.PR, {
                children: (e) => {
                    let { ref: n, ...a } = e;
                    return (0, s.jsx)(S.ChK, {
                        ref: (e) => {
                            (l.current = e), (n.current = e?.getScrollerNode() ?? null);
                        },
                        className: M.VB,
                        ...a,
                        children: t.map((e) =>
                            (0, s.jsx)($, { savedMessageKey: e, closePopout: r, throttledNow: i }, e.messageId),
                        ),
                    });
                },
            }),
        })
    );
}
function q(e) {
    let { savedMessage: t, closePopout: r, throttledNow: l } = e,
        i = (0, b.vr)(t),
        o = n.useCallback(
            async (e) => {
                await (0, b.le)(t, i),
                    e.shiftKey || r(),
                    T.default.track(k.HAw.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: t.message?.author.id,
                        type: null != t.saveData.dueAt ? v.Yf.REMINDER : v.Yf.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? c()().diff(t.saveData.dueAt) : void 0,
                    });
            },
            [r, t, i],
        ),
        u = (0, _.bG)([y.A], () => !!(i?.type === k.rbe.UNKNOWN || i?.isPrivate()) || y.A.can(k.xBc.VIEW_CHANNEL, i));
    return null != i && null != t.message && u
        ? (0, s.jsxs)("div", {
              className: M.zC,
              children: [
                  (0, s.jsx)(S.DUT, { className: M.M, onClick: o, "aria-label": W.intl.string(W.t["+TSRGD"]) }),
                  null != t.saveData.dueAt ? (0, s.jsx)(j.A, { reminder: t, throttledNow: l }) : null,
                  (0, s.jsx)(F.A, { channel: i }),
                  (0, s.jsx)(
                      f.A,
                      {
                          message: t.message,
                          channel: i,
                          className: M.iU,
                          compact: R.hH.getSetting(),
                          animateAvatar: !1,
                          focusProps: D,
                          trackAnnouncementViews: !0,
                      },
                      t.message.id,
                  ),
                  (0, s.jsx)(A.Ay, { className: M.S3, children: (0, s.jsx)(Q, { savedMessage: t, jumpToMessage: o }) }),
              ],
          })
        : (0, s.jsxs)("div", {
              className: a()(M.zC, M.tq),
              children: [
                  (0, s.jsx)("div", {
                      className: M.fy,
                      children: (0, s.jsx)(S.EpV, { size: "xxs", color: S.LU0.colors.INTERACTIVE_TEXT_ACTIVE }),
                  }),
                  (0, s.jsx)(S.Heading, {
                      variant: "text-md/semibold",
                      color: "text-default",
                      children: null != t.saveData.dueAt ? W.intl.string(W.t["wuQm+j"]) : W.intl.string(W.t.o572Fe),
                  }),
                  (0, s.jsx)(A.Ay, {
                      className: M.S3,
                      children: (0, s.jsx)(
                          A.qv,
                          {
                              label: W.intl.string(W.t.SvXS1Z),
                              icon: S.ucK,
                              dangerous: !0,
                              onClick: () => (0, L.x)(t.saveData),
                          },
                          "delete",
                      ),
                  }),
              ],
          });
}
function $(e) {
    let { savedMessageKey: t, closePopout: r, throttledNow: n } = e,
        l = (0, _.bG)([N.A], () => N.A.getSavedMessage(t.channelId, t.messageId));
    return null == l ? null : (0, s.jsx)(q, { savedMessage: l, closePopout: r, throttledNow: n });
}
function Q(e) {
    let { savedMessage: t, jumpToMessage: n } = e;
    return (o()(null != t.message, "Saved message must be cached for For Later action buttons"),
    null != t.saveData.dueAt)
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(
                      A.qv,
                      {
                          label: W.intl.string(W.t.yjGtdJ),
                          icon: S.A9s,
                          onClick: () =>
                              (0, L.Y)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0,
                              }),
                      },
                      "mark-complete",
                  ),
                  (0, s.jsx)(
                      A.qv,
                      {
                          label: W.intl.string(W.t.vrbqs1),
                          icon: S.R2l,
                          onClick: (e) =>
                              (0, E.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await r.e("36419").then(r.bind(r, 49678));
                                  return (r) =>
                                      (0, s.jsx)(e, { ...r, label: W.intl.string(W.t.roMu1H), message: t.message });
                              }),
                      },
                      "edit-reminder",
                  ),
                  (0, s.jsx)(A.$$, {}),
                  (0, s.jsx)(
                      A.qv,
                      { label: W.intl.string(W.t["+TSRGD"]), icon: S.txs, onClick: (e) => n(e) },
                      "jump-to-message",
                  ),
                  (0, s.jsx)(
                      A.qv,
                      { label: W.intl.string(W.t.SvXS1Z), icon: S.cFy, onClick: () => (0, L.x)(t.saveData) },
                      "remove-reminder",
                  ),
              ],
          })
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(
                      A.qv,
                      {
                          label: W.intl.string(W.t.mJ3P0N),
                          icon: S.O4,
                          onClick: (e) =>
                              (0, E.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await r.e("36419").then(r.bind(r, 49678));
                                  return (r) =>
                                      (0, s.jsx)(e, { ...r, label: W.intl.string(W.t.mJ3P0N), message: t.message });
                              }),
                      },
                      "create-reminder",
                  ),
                  (0, s.jsx)(
                      A.qv,
                      { label: W.intl.string(W.t["+TSRGD"]), icon: S.txs, onClick: (e) => n(e) },
                      "jump-to-message",
                  ),
                  (0, s.jsx)(
                      A.qv,
                      { label: W.intl.string(W.t.SvXS1Z), icon: S.cFy, onClick: () => (0, L.x)(t.saveData) },
                      "remove-bookmark",
                  ),
              ],
          });
}
