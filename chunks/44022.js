n.d(t, {
    $: () => K,
    J: () => W,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(989349),
    u = n.n(c),
    d = n(110259),
    f = n(837381),
    p = n(311907),
    _ = n(397927),
    h = n(442433),
    m = n(928039),
    g = n(139286),
    E = n(636922),
    b = n(194085),
    y = n(835835),
    O = n(253932),
    A = n(576705),
    v = n(954571),
    S = n(203982),
    I = n(927813),
    T = n(164684),
    C = n(704456),
    N = n(85109),
    R = n(756377),
    w = n(601179),
    P = n(216595),
    D = n(948331),
    x = n(371349),
    L = n(652215),
    j = n(985018),
    M = n(422344);
function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                k(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = B(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let H = {
    offset: {
        left: 4,
        right: -12,
    },
};
function Y(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)(_.lGe, {
        "aria-label": j.intl.string(j.t["2pAkDA"]),
        children: (0, r.jsxs)("div", {
            className: M.jC,
            children: [
                (0, r.jsx)(y.Y9, {
                    icon: _.cFy,
                    title: j.intl.string(j.t["2pAkDA"]),
                }),
                (0, r.jsx)(W, { closePopout: t }),
            ],
        }),
    });
}
function W(e) {
    let { closePopout: t } = e,
        n = (0, w.A)();
    return ((0, g.A)(
        {
            type: d.ImpressionTypes.POPOUT,
            name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: {
                total_count: n.length,
                overdue_count: N.A.getOverdueMessageReminderCount(),
            },
        },
        {},
        [n.length],
    ),
    0 === n.length)
        ? (0, r.jsx)(D.g, {})
        : (0, r.jsx)(z, {
              savedMessageKeys: n,
              closePopout: t,
          });
}
function K(e) {
    let { onOpen: t, onClose: n, children: a, popoutPosition: s, popoutAlign: o } = e,
        [l, c] = i.useState(!1),
        u = i.useRef(null),
        d = i.useCallback(() => {
            c(!1), l && (null == n || n());
        }, [n, l]),
        f = i.useCallback(() => {
            c(!l), l ? null == n || n() : null == t || t();
        }, [n, t, l]);
    i.useEffect(
        () => (S._.subscribe(L.jej.TOGGLE_FOR_LATER, f), () => void S._.unsubscribe(L.jej.TOGGLE_FOR_LATER, f)),
        [f],
    );
    let h = (0, p.bG)([N.A], () => N.A.hasOverdueReminder(), []);
    function m() {
        return (0, r.jsx)(Y, { closePopout: d });
    }
    return (0, r.jsx)(_.YNO, {
        targetElementRef: u,
        animation: _.YNO.Animation.NONE,
        position: s,
        align: o,
        autoInvert: !1,
        shouldShow: l,
        onRequestClose: d,
        renderPopout: m,
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return a(f, n, e, h, u);
        },
    });
}
function z(e) {
    let { savedMessageKeys: t, closePopout: n } = e,
        a = i.useRef(null),
        s = (0, m.A)("for-later", a),
        [o, l] = i.useState(new Date());
    return (
        i.useEffect(() => {
            let e = setInterval(() => l(new Date()), I.A.Millis.MINUTE);
            return () => {
                clearInterval(e);
            };
        }, []),
        (0, r.jsx)(f.hD, {
            navigator: s,
            children: (0, r.jsx)(f.PR, {
                children: (e) => {
                    let { ref: i } = e,
                        s = F(e, ["ref"]);
                    return (0, r.jsx)(
                        _.ChK,
                        V(
                            U(
                                {
                                    ref: (e) => {
                                        var t;
                                        (a.current = e),
                                            (i.current =
                                                null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                    },
                                    className: M.VB,
                                },
                                s,
                            ),
                            {
                                children: t.map((e) =>
                                    (0, r.jsx)(
                                        X,
                                        {
                                            savedMessageKey: e,
                                            closePopout: n,
                                            throttledNow: o,
                                        },
                                        e.messageId,
                                    ),
                                ),
                            },
                        ),
                    );
                },
            }),
        })
    );
}
function q(e) {
    let { savedMessage: t, closePopout: n, throttledNow: a } = e,
        o = (0, C.vr)(t),
        l = i.useCallback(
            async (e) => {
                var r;
                await (0, C.le)(t, o),
                    e.shiftKey || n(),
                    v.default.track(L.HAw.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null == (r = t.message) ? void 0 : r.author.id,
                        type: null != t.saveData.dueAt ? R.Yf.REMINDER : R.Yf.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : void 0,
                    });
            },
            [n, t, o],
        ),
        c = (0, p.bG)(
            [A.A],
            () =>
                !!((null == o ? void 0 : o.type) === L.rbe.UNKNOWN || (null == o ? void 0 : o.isPrivate())) ||
                A.A.can(L.xBc.VIEW_CHANNEL, o),
        );
    return null != o && null != t.message && c
        ? (0, r.jsxs)("div", {
              className: M.zC,
              children: [
                  (0, r.jsx)(_.DUT, {
                      className: M.M,
                      onClick: l,
                      "aria-label": j.intl.string(j.t["+TSRGD"]),
                  }),
                  null != t.saveData.dueAt
                      ? (0, r.jsx)(x.A, {
                            reminder: t,
                            throttledNow: a,
                        })
                      : null,
                  (0, r.jsx)(P.A, { channel: o }),
                  (0, r.jsx)(
                      E.A,
                      {
                          message: t.message,
                          channel: o,
                          className: M.iU,
                          compact: O.hH.getSetting(),
                          animateAvatar: !1,
                          focusProps: H,
                          trackAnnouncementViews: !0,
                      },
                      t.message.id,
                  ),
                  (0, r.jsx)(b.Ay, {
                      className: M.S3,
                      children: (0, r.jsx)(Z, {
                          savedMessage: t,
                          jumpToMessage: l,
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: s()(M.zC, M.tq),
              children: [
                  (0, r.jsx)("div", {
                      className: M.fy,
                      children: (0, r.jsx)(_.EpV, {
                          size: "xxs",
                          color: _.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                      }),
                  }),
                  (0, r.jsx)(_.Heading, {
                      variant: "text-md/semibold",
                      color: "text-default",
                      children: null != t.saveData.dueAt ? j.intl.string(j.t["wuQm+j"]) : j.intl.string(j.t.o572Fe),
                  }),
                  (0, r.jsx)(b.Ay, {
                      className: M.S3,
                      children: (0, r.jsx)(
                          b.qv,
                          {
                              label: j.intl.string(j.t.SvXS1Z),
                              icon: _.ucK,
                              dangerous: !0,
                              onClick: () => (0, T.x)(t.saveData),
                          },
                          "delete",
                      ),
                  }),
              ],
          });
}
function X(e) {
    let { savedMessageKey: t, closePopout: n, throttledNow: i } = e,
        a = (0, p.bG)([N.A], () => N.A.getSavedMessage(t.channelId, t.messageId));
    return null == a
        ? null
        : (0, r.jsx)(q, {
              savedMessage: a,
              closePopout: n,
              throttledNow: i,
          });
}
function Z(e) {
    let { savedMessage: t, jumpToMessage: i } = e;
    return (l()(null != t.message, "Saved message must be cached for For Later action buttons"),
    null != t.saveData.dueAt)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(
                      b.qv,
                      {
                          label: j.intl.string(j.t.yjGtdJ),
                          icon: _.A9s,
                          onClick: () =>
                              (0, T.Y)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0,
                              }),
                      },
                      "mark-complete",
                  ),
                  (0, r.jsx)(
                      b.qv,
                      {
                          label: j.intl.string(j.t.vrbqs1),
                          icon: _.R2l,
                          onClick: (e) =>
                              (0, h.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("36419").then(n.bind(n, 49678));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          V(U({}, n), {
                                              label: j.intl.string(j.t.roMu1H),
                                              message: t.message,
                                          }),
                                      );
                              }),
                      },
                      "edit-reminder",
                  ),
                  (0, r.jsx)(b.$$, {}),
                  (0, r.jsx)(
                      b.qv,
                      {
                          label: j.intl.string(j.t["+TSRGD"]),
                          icon: _.txs,
                          onClick: (e) => i(e),
                      },
                      "jump-to-message",
                  ),
                  (0, r.jsx)(
                      b.qv,
                      {
                          label: j.intl.string(j.t.SvXS1Z),
                          icon: _.cFy,
                          onClick: () => (0, T.x)(t.saveData),
                      },
                      "remove-reminder",
                  ),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(
                      b.qv,
                      {
                          label: j.intl.string(j.t.mJ3P0N),
                          icon: _.O4,
                          onClick: (e) =>
                              (0, h.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("36419").then(n.bind(n, 49678));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          V(U({}, n), {
                                              label: j.intl.string(j.t.mJ3P0N),
                                              message: t.message,
                                          }),
                                      );
                              }),
                      },
                      "create-reminder",
                  ),
                  (0, r.jsx)(
                      b.qv,
                      {
                          label: j.intl.string(j.t["+TSRGD"]),
                          icon: _.txs,
                          onClick: (e) => i(e),
                      },
                      "jump-to-message",
                  ),
                  (0, r.jsx)(
                      b.qv,
                      {
                          label: j.intl.string(j.t.SvXS1Z),
                          icon: _.cFy,
                          onClick: () => (0, T.x)(t.saveData),
                      },
                      "remove-bookmark",
                  ),
              ],
          });
}
