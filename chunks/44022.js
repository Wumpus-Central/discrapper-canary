r.d(t, {
    $: () => q,
    J: () => U,
}),
    r(896048);
var n = r(627968),
    l = r(64700),
    s = r(503698),
    a = r.n(s),
    i = r(284009),
    o = r.n(i),
    c = r(989349),
    u = r.n(c),
    d = r(110259),
    h = r(837381),
    p = r(311907),
    f = r(397927),
    g = r(442433),
    S = r(928039),
    E = r(139286),
    y = r(636922),
    _ = r(194085),
    m = r(835835),
    A = r(253932),
    b = r(576705),
    O = r(954571),
    R = r(203982),
    v = r(927813),
    x = r(164684),
    T = r(704456),
    I = r(85109),
    j = r(756377),
    L = r(601179),
    N = r(216595),
    C = r(948331),
    w = r(371349),
    P = r(652215),
    F = r(985018),
    k = r(422344);

function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}

function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let D = {
    offset: {
        left: 4,
        right: -12,
    },
};

function H(e) {
    let { closePopout: t } = e;
    return (0, n.jsx)(f.lGe, {
        "aria-label": F.intl.string(F.t["2pAkDA"]),
        children: (0, n.jsxs)("div", {
            className: k.jC,
            children: [
                (0, n.jsx)(m.Y9, {
                    icon: f.cFy,
                    title: F.intl.string(F.t["2pAkDA"]),
                }),
                (0, n.jsx)(U, {
                    closePopout: t,
                }),
            ],
        }),
    });
}

function U(e) {
    let { closePopout: t } = e,
        r = (0, L.A)();
    return ((0, E.A)(
        {
            type: d.ImpressionTypes.POPOUT,
            name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: {
                total_count: r.length,
                overdue_count: I.A.getOverdueMessageReminderCount(),
            },
        },
        {},
        [r.length],
    ),
    0 === r.length)
        ? (0, n.jsx)(C.g, {})
        : (0, n.jsx)(z, {
              savedMessageKeys: r,
              closePopout: t,
          });
}

function q(e) {
    let { onOpen: t, onClose: r, children: s, popoutPosition: a, popoutAlign: i } = e,
        [o, c] = l.useState(!1),
        u = l.useRef(null),
        d = l.useCallback(() => {
            c(!1), o && (null == r || r());
        }, [r, o]),
        h = l.useCallback(() => {
            c(!o), o ? null == r || r() : null == t || t();
        }, [r, t, o]);
    l.useEffect(
        () => (R._.subscribe(P.jej.TOGGLE_FOR_LATER, h), () => void R._.unsubscribe(P.jej.TOGGLE_FOR_LATER, h)),
        [h],
    );
    let g = (0, p.bG)([I.A], () => I.A.hasOverdueReminder(), []);
    return (0, n.jsx)(f.YNO, {
        targetElementRef: u,
        animation: f.YNO.Animation.NONE,
        position: a,
        align: i,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: d,
        renderPopout: function () {
            return (0, n.jsx)(H, {
                closePopout: d,
            });
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: r } = t;
            return s(h, r, e, g, u);
        },
    });
}

function z(e) {
    let { savedMessageKeys: t, closePopout: r } = e,
        s = l.useRef(null),
        a = (0, S.A)("for-later", s),
        [i, o] = l.useState(new Date());
    return (
        l.useEffect(() => {
            let e = setInterval(() => o(new Date()), v.A.Millis.MINUTE);
            return () => {
                clearInterval(e);
            };
        }, []),
        (0, n.jsx)(h.hD, {
            navigator: a,
            children: (0, n.jsx)(h.PR, {
                children: (e) => {
                    let { ref: l } = e,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                l,
                                s = {};
                            if ("u" > typeof Reflect && Reflect.ownKeys) {
                                for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
                                    (n = r[l]),
                                        !(t.indexOf(n) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                            (s[n] = e[n]);
                                return s;
                            }
                            if (
                                ((s = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        l = {},
                                        s = Object.getOwnPropertyNames(e);
                                    for (n = 0; n < s.length; n++)
                                        (r = s[n]),
                                            !(t.indexOf(r) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                (l[r] = e[r]);
                                    return l;
                                })(e, t)),
                                Object.getOwnPropertySymbols)
                            )
                                for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                                    (n = r[l]),
                                        !(t.indexOf(n) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                            (s[n] = e[n]);
                            return s;
                        })(e, ["ref"]);
                    return (0, n.jsx)(
                        f.ChK,
                        W(
                            M(
                                {
                                    ref: (e) => {
                                        var t;
                                        (s.current = e),
                                            (l.current =
                                                null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                    },
                                    className: k.VB,
                                },
                                a,
                            ),
                            {
                                children: t.map((e) =>
                                    (0, n.jsx)(
                                        K,
                                        {
                                            savedMessageKey: e,
                                            closePopout: r,
                                            throttledNow: i,
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

function G(e) {
    let { savedMessage: t, closePopout: r, throttledNow: s } = e,
        i = (0, T.vr)(t),
        o = l.useCallback(
            async (e) => {
                var n;
                await (0, T.le)(t, i),
                    e.shiftKey || r(),
                    O.default.track(P.HAw.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null == (n = t.message) ? void 0 : n.author.id,
                        type: null != t.saveData.dueAt ? j.Yf.REMINDER : j.Yf.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : void 0,
                    });
            },
            [r, t, i],
        ),
        c = (0, p.bG)(
            [b.A],
            () =>
                !!((null == i ? void 0 : i.type) === P.rbe.UNKNOWN || (null == i ? void 0 : i.isPrivate())) ||
                b.A.can(P.xBc.VIEW_CHANNEL, i),
        );
    return null != i && null != t.message && c
        ? (0, n.jsxs)("div", {
              className: k.zC,
              children: [
                  (0, n.jsx)(f.DUT, {
                      className: k.M,
                      onClick: o,
                      "aria-label": F.intl.string(F.t["+TSRGD"]),
                  }),
                  null != t.saveData.dueAt
                      ? (0, n.jsx)(w.A, {
                            reminder: t,
                            throttledNow: s,
                        })
                      : null,
                  (0, n.jsx)(N.A, {
                      channel: i,
                  }),
                  (0, n.jsx)(
                      y.A,
                      {
                          message: t.message,
                          channel: i,
                          className: k.iU,
                          compact: A.hH.getSetting(),
                          animateAvatar: !1,
                          focusProps: D,
                          trackAnnouncementViews: !0,
                      },
                      t.message.id,
                  ),
                  (0, n.jsx)(_.Ay, {
                      className: k.S3,
                      children: (0, n.jsx)(Q, {
                          savedMessage: t,
                          jumpToMessage: o,
                      }),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: a()(k.zC, k.tq),
              children: [
                  (0, n.jsx)("div", {
                      className: k.fy,
                      children: (0, n.jsx)(f.EpV, {
                          size: "xxs",
                          color: f.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                      }),
                  }),
                  (0, n.jsx)(f.Heading, {
                      variant: "text-md/semibold",
                      color: "text-default",
                      children: null != t.saveData.dueAt ? F.intl.string(F.t["wuQm+j"]) : F.intl.string(F.t.o572Fe),
                  }),
                  (0, n.jsx)(_.Ay, {
                      className: k.S3,
                      children: (0, n.jsx)(
                          _.qv,
                          {
                              label: F.intl.string(F.t.SvXS1Z),
                              icon: f.ucK,
                              dangerous: !0,
                              onClick: () => (0, x.x)(t.saveData),
                          },
                          "delete",
                      ),
                  }),
              ],
          });
}

function K(e) {
    let { savedMessageKey: t, closePopout: r, throttledNow: l } = e,
        s = (0, p.bG)([I.A], () => I.A.getSavedMessage(t.channelId, t.messageId));
    return null == s
        ? null
        : (0, n.jsx)(G, {
              savedMessage: s,
              closePopout: r,
              throttledNow: l,
          });
}

function Q(e) {
    let { savedMessage: t, jumpToMessage: l } = e;
    return (o()(null != t.message, "Saved message must be cached for For Later action buttons"),
    null != t.saveData.dueAt)
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(
                      _.qv,
                      {
                          label: F.intl.string(F.t.yjGtdJ),
                          icon: f.A9s,
                          onClick: () =>
                              (0, x.Y)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0,
                              }),
                      },
                      "mark-complete",
                  ),
                  (0, n.jsx)(
                      _.qv,
                      {
                          label: F.intl.string(F.t.vrbqs1),
                          icon: f.R2l,
                          onClick: (e) =>
                              (0, g.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await r.e("36419").then(r.bind(r, 49678));
                                  return (r) =>
                                      (0, n.jsx)(
                                          e,
                                          W(M({}, r), {
                                              label: F.intl.string(F.t.roMu1H),
                                              message: t.message,
                                          }),
                                      );
                              }),
                      },
                      "edit-reminder",
                  ),
                  (0, n.jsx)(_.$$, {}),
                  (0, n.jsx)(
                      _.qv,
                      {
                          label: F.intl.string(F.t["+TSRGD"]),
                          icon: f.txs,
                          onClick: (e) => l(e),
                      },
                      "jump-to-message",
                  ),
                  (0, n.jsx)(
                      _.qv,
                      {
                          label: F.intl.string(F.t.SvXS1Z),
                          icon: f.cFy,
                          onClick: () => (0, x.x)(t.saveData),
                      },
                      "remove-reminder",
                  ),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(
                      _.qv,
                      {
                          label: F.intl.string(F.t.mJ3P0N),
                          icon: f.O4,
                          onClick: (e) =>
                              (0, g.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await r.e("36419").then(r.bind(r, 49678));
                                  return (r) =>
                                      (0, n.jsx)(
                                          e,
                                          W(M({}, r), {
                                              label: F.intl.string(F.t.mJ3P0N),
                                              message: t.message,
                                          }),
                                      );
                              }),
                      },
                      "create-reminder",
                  ),
                  (0, n.jsx)(
                      _.qv,
                      {
                          label: F.intl.string(F.t["+TSRGD"]),
                          icon: f.txs,
                          onClick: (e) => l(e),
                      },
                      "jump-to-message",
                  ),
                  (0, n.jsx)(
                      _.qv,
                      {
                          label: F.intl.string(F.t.SvXS1Z),
                          icon: f.cFy,
                          onClick: () => (0, x.x)(t.saveData),
                      },
                      "remove-bookmark",
                  ),
              ],
          });
}
