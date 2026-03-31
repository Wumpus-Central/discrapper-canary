n.d(t, { $: () => B, J: () => w });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(989349),
    d = n.n(c),
    u = n(110259),
    h = n(837381),
    A = n(311907),
    _ = n(397927),
    m = n(442433),
    g = n(928039),
    p = n(139286),
    f = n(636922),
    x = n(194085),
    E = n(835835),
    I = n(253932),
    C = n(576705),
    N = n(954571),
    T = n(203982),
    S = n(927813),
    b = n(164684),
    y = n(704456),
    v = n(85109),
    j = n(756377),
    R = n(601179),
    O = n(216595),
    L = n(948331),
    M = n(371349),
    D = n(652215),
    U = n(985018),
    G = n(219717);
let P = { offset: { left: 4, right: -12 } };
function k(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)(_.lGe, {
        "aria-label": U.intl.string(U.t["2pAkDA"]),
        children: (0, i.jsxs)("div", {
            className: G.jC,
            children: [
                (0, i.jsx)(E.Y9, { icon: _.cFy, title: U.intl.string(U.t["2pAkDA"]) }),
                (0, i.jsx)(w, { closePopout: t }),
            ],
        }),
    });
}
function w(e) {
    let { closePopout: t } = e,
        n = (0, R.A)();
    return ((0, p.A)(
        {
            type: u.ImpressionTypes.POPOUT,
            name: u.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: { total_count: n.length, overdue_count: v.A.getOverdueMessageReminderCount() },
        },
        {},
        [n.length],
    ),
    0 === n.length)
        ? (0, i.jsx)(L.g, {})
        : (0, i.jsx)(V, { savedMessageKeys: n, closePopout: t });
}
function B(e) {
    let { onOpen: t, onClose: n, children: s, popoutPosition: a, popoutAlign: r } = e,
        [o, c] = l.useState(!1),
        d = l.useRef(null),
        u = l.useCallback(() => {
            c(!1), o && n?.();
        }, [n, o]),
        h = l.useCallback(() => {
            c(!o), o ? n?.() : t?.();
        }, [n, t, o]);
    l.useEffect(
        () => (T._.subscribe(D.jej.TOGGLE_FOR_LATER, h), () => void T._.unsubscribe(D.jej.TOGGLE_FOR_LATER, h)),
        [h],
    );
    let m = (0, A.bG)([v.A], () => v.A.hasOverdueReminder(), []);
    return (0, i.jsx)(_.YNO, {
        targetElementRef: d,
        animation: _.YNO.Animation.NONE,
        position: a,
        align: r,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: u,
        renderPopout: function () {
            return (0, i.jsx)(k, { closePopout: u });
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return s(h, n, e, m, d);
        },
    });
}
function V(e) {
    let { savedMessageKeys: t, closePopout: n } = e,
        s = l.useRef(null),
        a = (0, g.A)("for-later", s),
        [r, o] = l.useState(new Date());
    return (
        l.useEffect(() => {
            let e = setInterval(() => o(new Date()), S.A.Millis.MINUTE);
            return () => {
                clearInterval(e);
            };
        }, []),
        (0, i.jsx)(h.hD, {
            navigator: a,
            children: (0, i.jsx)(h.PR, {
                children: (e) => {
                    let { ref: l, ...a } = e;
                    return (0, i.jsx)(_.ChK, {
                        ref: (e) => {
                            (s.current = e), (l.current = e?.getScrollerNode() ?? null);
                        },
                        className: G.VB,
                        ...a,
                        children: t.map((e) =>
                            (0, i.jsx)(F, { savedMessageKey: e, closePopout: n, throttledNow: r }, e.messageId),
                        ),
                    });
                },
            }),
        })
    );
}
function H(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        r = (0, y.vr)(t),
        o = l.useCallback(
            async (e) => {
                await (0, y.le)(t, r),
                    e.shiftKey || n(),
                    N.default.track(D.HAw.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: t.message?.author.id,
                        type: null != t.saveData.dueAt ? j.Yf.REMINDER : j.Yf.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? d()().diff(t.saveData.dueAt) : void 0,
                    });
            },
            [n, t, r],
        ),
        c = (0, A.bG)([C.A], () => !!(r?.type === D.rbe.UNKNOWN || r?.isPrivate()) || C.A.can(D.xBc.VIEW_CHANNEL, r));
    return null != r && null != t.message && c
        ? (0, i.jsxs)("div", {
              className: G.zC,
              children: [
                  (0, i.jsx)(_.DUT, { className: G.M, onClick: o, "aria-label": U.intl.string(U.t["+TSRGD"]) }),
                  null != t.saveData.dueAt ? (0, i.jsx)(M.A, { reminder: t, throttledNow: s }) : null,
                  (0, i.jsx)(O.A, { channel: r }),
                  (0, i.jsx)(
                      f.A,
                      {
                          message: t.message,
                          channel: r,
                          className: G.iU,
                          compact: I.hH.getSetting(),
                          animateAvatar: !1,
                          focusProps: P,
                          trackAnnouncementViews: !0,
                      },
                      t.message.id,
                  ),
                  (0, i.jsx)(x.Ay, { className: G.S3, children: (0, i.jsx)(K, { savedMessage: t, jumpToMessage: o }) }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: a()(G.zC, G.tq),
              children: [
                  (0, i.jsx)("div", {
                      className: G.fy,
                      children: (0, i.jsx)(_.EpV, { size: "xxs", color: _.LU0.colors.INTERACTIVE_TEXT_ACTIVE }),
                  }),
                  (0, i.jsx)(_.Heading, {
                      variant: "text-md/semibold",
                      color: "text-default",
                      children: null != t.saveData.dueAt ? U.intl.string(U.t["wuQm+j"]) : U.intl.string(U.t.o572Fe),
                  }),
                  (0, i.jsx)(x.Ay, {
                      className: G.S3,
                      children: (0, i.jsx)(
                          x.qv,
                          {
                              label: U.intl.string(U.t.SvXS1Z),
                              icon: _.ucK,
                              dangerous: !0,
                              onClick: () => (0, b.x)(t.saveData),
                          },
                          "delete",
                      ),
                  }),
              ],
          });
}
function F(e) {
    let { savedMessageKey: t, closePopout: n, throttledNow: l } = e,
        s = (0, A.bG)([v.A], () => v.A.getSavedMessage(t.channelId, t.messageId));
    return null == s ? null : (0, i.jsx)(H, { savedMessage: s, closePopout: n, throttledNow: l });
}
function K(e) {
    let { savedMessage: t, jumpToMessage: l } = e;
    return (o()(null != t.message, "Saved message must be cached for For Later action buttons"),
    null != t.saveData.dueAt)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      x.qv,
                      {
                          label: U.intl.string(U.t.yjGtdJ),
                          icon: _.A9s,
                          onClick: () =>
                              (0, b.Y)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0,
                              }),
                      },
                      "mark-complete",
                  ),
                  (0, i.jsx)(
                      x.qv,
                      {
                          label: U.intl.string(U.t.vrbqs1),
                          icon: _.R2l,
                          onClick: (e) =>
                              (0, m.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await Promise.resolve().then(n.bind(n, 49678));
                                  return (n) =>
                                      (0, i.jsx)(e, { ...n, label: U.intl.string(U.t.roMu1H), message: t.message });
                              }),
                      },
                      "edit-reminder",
                  ),
                  (0, i.jsx)(x.$$, {}),
                  (0, i.jsx)(
                      x.qv,
                      { label: U.intl.string(U.t["+TSRGD"]), icon: _.txs, onClick: (e) => l(e) },
                      "jump-to-message",
                  ),
                  (0, i.jsx)(
                      x.qv,
                      { label: U.intl.string(U.t.SvXS1Z), icon: _.cFy, onClick: () => (0, b.x)(t.saveData) },
                      "remove-reminder",
                  ),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      x.qv,
                      {
                          label: U.intl.string(U.t.mJ3P0N),
                          icon: _.O4,
                          onClick: (e) =>
                              (0, m.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await Promise.resolve().then(n.bind(n, 49678));
                                  return (n) =>
                                      (0, i.jsx)(e, { ...n, label: U.intl.string(U.t.mJ3P0N), message: t.message });
                              }),
                      },
                      "create-reminder",
                  ),
                  (0, i.jsx)(
                      x.qv,
                      { label: U.intl.string(U.t["+TSRGD"]), icon: _.txs, onClick: (e) => l(e) },
                      "jump-to-message",
                  ),
                  (0, i.jsx)(
                      x.qv,
                      { label: U.intl.string(U.t.SvXS1Z), icon: _.cFy, onClick: () => (0, b.x)(t.saveData) },
                      "remove-bookmark",
                  ),
              ],
          });
}
