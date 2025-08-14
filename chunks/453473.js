n.d(t, {
    K: () => Y,
    P: () => W,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    l = n.n(s),
    c = n(913527),
    u = n.n(c),
    d = n(990547),
    f = n(91192),
    _ = n(442837),
    p = n(481060),
    h = n(239091),
    m = n(494404),
    g = n(724757),
    E = n(213609),
    b = n(294218),
    y = n(373662),
    O = n(695346),
    v = n(496675),
    I = n(626135),
    T = n(585483),
    S = n(70956),
    A = n(324701),
    N = n(575016),
    C = n(768943),
    R = n(686478),
    P = n(664559),
    w = n(767893),
    D = n(206697),
    L = n(74551),
    x = n(981631),
    M = n(388032),
    j = n(125919);
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
function B(e, t) {
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
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = F(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let V = {
    offset: {
        left: 4,
        right: -12,
    },
};
function H(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)(p.VqE, {
        "aria-label": M.intl.string(M.t["2pAkDA"]),
        children: (0, r.jsxs)("div", {
            className: j.popoutContainer,
            children: [
                (0, r.jsx)(m.h4, {
                    icon: p.plf,
                    title: M.intl.string(M.t["2pAkDA"]),
                }),
                (0, r.jsx)(Y, { closePopout: t }),
            ],
        }),
    });
}
function Y(e) {
    let { closePopout: t } = e,
        n = (0, P.Z)();
    return ((0, E.Z)(
        {
            type: d.ImpressionTypes.POPOUT,
            name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: {
                total_count: n.length,
                overdue_count: C.Z.getOverdueMessageReminderCount(),
            },
        },
        {},
        [n.length],
    ),
    0 === n.length)
        ? (0, r.jsx)(D.w, {})
        : (0, r.jsx)(K, {
              savedMessageKeys: n,
              closePopout: t,
          });
}
function W(e) {
    let { onOpen: t, onClose: n, children: o, popoutPosition: a, popoutAlign: s } = e,
        [l, c] = i.useState(!1),
        u = i.useRef(null),
        d = i.useCallback(() => {
            c(!1), l && (null == n || n());
        }, [n, l]),
        f = i.useCallback(() => {
            c(!l), l ? null == n || n() : null == t || t();
        }, [n, t, l]);
    i.useEffect(
        () => (T.S.subscribe(x.CkL.TOGGLE_FOR_LATER, f), () => void T.S.unsubscribe(x.CkL.TOGGLE_FOR_LATER, f)),
        [f],
    );
    let h = (0, _.e7)([C.Z], () => C.Z.hasOverdueReminder(), []);
    function m() {
        return (0, r.jsx)(H, { closePopout: d });
    }
    return (0, r.jsx)(p.yRy, {
        targetElementRef: u,
        animation: p.yRy.Animation.NONE,
        position: a,
        align: s,
        autoInvert: !1,
        shouldShow: l,
        onRequestClose: d,
        renderPopout: m,
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return o(f, n, e, h, u);
        },
    });
}
function K(e) {
    let { savedMessageKeys: t, closePopout: n } = e,
        o = i.useRef(null),
        a = (0, g.Z)("for-later", o),
        [s, l] = i.useState(new Date());
    return (
        i.useEffect(() => {
            let e = setInterval(() => l(new Date()), S.Z.Millis.MINUTE);
            return () => {
                clearInterval(e);
            };
        }, []),
        (0, r.jsx)(f.bG, {
            navigator: a,
            children: (0, r.jsx)(f.SJ, {
                children: (e) => {
                    var { ref: i } = e,
                        a = Z(e, ["ref"]);
                    return (0, r.jsx)(
                        p.h21,
                        B(
                            U(
                                {
                                    ref: (e) => {
                                        var t;
                                        (o.current = e),
                                            (i.current =
                                                null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                    },
                                    className: j.messagesScroller,
                                },
                                a,
                            ),
                            {
                                children: t.map((e) =>
                                    (0, r.jsx)(
                                        q,
                                        {
                                            savedMessageKey: e,
                                            closePopout: n,
                                            throttledNow: s,
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
function z(e) {
    let { savedMessage: t, closePopout: n, throttledNow: o } = e,
        s = (0, N.gr)(t),
        l = i.useCallback(
            async (e) => {
                var r;
                await (0, N.fC)(t, s),
                    e.shiftKey || n(),
                    I.default.track(x.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null == (r = t.message) ? void 0 : r.author.id,
                        type: null != t.saveData.dueAt ? R._l.REMINDER : R._l.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : void 0,
                    });
            },
            [n, t, s],
        ),
        c = (0, _.e7)(
            [v.Z],
            () =>
                !!((null == s ? void 0 : s.type) === x.d4z.UNKNOWN || (null == s ? void 0 : s.isPrivate())) ||
                v.Z.can(x.Plq.VIEW_CHANNEL, s),
        );
    return null != s && null != t.message && c
        ? (0, r.jsxs)("div", {
              className: j.messageContainer,
              children: [
                  (0, r.jsx)(p.P3F, {
                      className: j.clickableMessageBackground,
                      onClick: l,
                      "aria-label": M.intl.string(M.t["+TSRGB"]),
                  }),
                  null != t.saveData.dueAt
                      ? (0, r.jsx)(L.Z, {
                            reminder: t,
                            throttledNow: o,
                        })
                      : null,
                  (0, r.jsx)(w.Z, { channel: s }),
                  (0, r.jsx)(
                      b.Z,
                      {
                          message: t.message,
                          channel: s,
                          className: j.message,
                          compact: O.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: V,
                          trackAnnouncementViews: !0,
                      },
                      t.message.id,
                  ),
                  (0, r.jsx)(y.ZP, {
                      className: j.hoverBar,
                      children: (0, r.jsx)(X, {
                          savedMessage: t,
                          jumpToMessage: l,
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: a()(j.messageContainer, j.deletedMessage),
              children: [
                  (0, r.jsx)("div", {
                      className: j.deleteIcon,
                      children: (0, r.jsx)(p.Mgn, {
                          size: "xxs",
                          color: p.TVs.colors.INTERACTIVE_ACTIVE,
                      }),
                  }),
                  (0, r.jsx)(p.X6q, {
                      variant: "text-md/semibold",
                      color: "header-secondary",
                      children: null != t.saveData.dueAt ? M.intl.string(M.t["wuQm+v"]) : M.intl.string(M.t.o572FR),
                  }),
                  (0, r.jsx)(y.ZP, {
                      className: j.hoverBar,
                      children: (0, r.jsx)(
                          y.sF,
                          {
                              label: M.intl.string(M.t.SvXS1d),
                              icon: p.XHJ,
                              dangerous: !0,
                              onClick: () => (0, A.x)(t.saveData),
                          },
                          "delete",
                      ),
                  }),
              ],
          });
}
function q(e) {
    let { savedMessageKey: t, closePopout: n, throttledNow: i } = e,
        o = (0, _.e7)([C.Z], () => C.Z.getSavedMessage(t.channelId, t.messageId));
    return null == o
        ? null
        : (0, r.jsx)(z, {
              savedMessage: o,
              closePopout: n,
              throttledNow: i,
          });
}
function X(e) {
    let { savedMessage: t, jumpToMessage: i } = e;
    return (l()(null != t.message, "Saved message must be cached for For Later action buttons"),
    null != t.saveData.dueAt)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(
                      y.sF,
                      {
                          label: M.intl.string(M.t.yjGtdH),
                          icon: p.dz2,
                          onClick: () =>
                              (0, A.z)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0,
                              }),
                      },
                      "mark-complete",
                  ),
                  (0, r.jsx)(
                      y.sF,
                      {
                          label: M.intl.string(M.t.vrbqs7),
                          icon: p.vdY,
                          onClick: (e) =>
                              (0, h.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await Promise.resolve().then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          B(U({}, n), {
                                              label: M.intl.string(M.t.roMu1N),
                                              message: t.message,
                                          }),
                                      );
                              }),
                      },
                      "edit-reminder",
                  ),
                  (0, r.jsx)(y.fO, {}),
                  (0, r.jsx)(
                      y.sF,
                      {
                          label: M.intl.string(M.t["+TSRGB"]),
                          icon: p.d4D,
                          onClick: (e) => i(e),
                      },
                      "jump-to-message",
                  ),
                  (0, r.jsx)(
                      y.sF,
                      {
                          label: M.intl.string(M.t.SvXS1d),
                          icon: p.plf,
                          onClick: () => (0, A.x)(t.saveData),
                      },
                      "remove-reminder",
                  ),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(
                      y.sF,
                      {
                          label: M.intl.string(M.t.mJ3P0N),
                          icon: p.T39,
                          onClick: (e) =>
                              (0, h.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await Promise.resolve().then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          B(U({}, n), {
                                              label: M.intl.string(M.t.mJ3P0N),
                                              message: t.message,
                                          }),
                                      );
                              }),
                      },
                      "create-reminder",
                  ),
                  (0, r.jsx)(
                      y.sF,
                      {
                          label: M.intl.string(M.t["+TSRGB"]),
                          icon: p.d4D,
                          onClick: (e) => i(e),
                      },
                      "jump-to-message",
                  ),
                  (0, r.jsx)(
                      y.sF,
                      {
                          label: M.intl.string(M.t.SvXS1d),
                          icon: p.plf,
                          onClick: () => (0, A.x)(t.saveData),
                      },
                      "remove-bookmark",
                  ),
              ],
          });
}
