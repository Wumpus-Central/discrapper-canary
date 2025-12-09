n.d(t, {
    K: () => Y,
    P: () => W,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(913527),
    u = n.n(c),
    d = n(990547),
    f = n(91192),
    p = n(442837),
    _ = n(481060),
    m = n(239091),
    h = n(724757),
    g = n(213609),
    E = n(294218),
    b = n(373662),
    y = n(598999),
    O = n(695346),
    v = n(496675),
    S = n(626135),
    I = n(585483),
    T = n(70956),
    A = n(324701),
    C = n(575016),
    N = n(768943),
    P = n(686478),
    R = n(664559),
    D = n(767893),
    w = n(206697),
    x = n(74551),
    L = n(981631),
    j = n(388032),
    M = n(125919);
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
function Z(e, t) {
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
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = F(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
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
    return (0, r.jsx)(_.VqE, {
        "aria-label": j.intl.string(j.t["2pAkDA"]),
        children: (0, r.jsxs)("div", {
            className: M.popoutContainer,
            children: [
                (0, r.jsx)(y.h4, {
                    icon: _.plf,
                    title: j.intl.string(j.t["2pAkDA"]),
                }),
                (0, r.jsx)(Y, { closePopout: t }),
            ],
        }),
    });
}
function Y(e) {
    let { closePopout: t } = e,
        n = (0, R.Z)();
    return ((0, g.Z)(
        {
            type: d.ImpressionTypes.POPOUT,
            name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: {
                total_count: n.length,
                overdue_count: N.Z.getOverdueMessageReminderCount(),
            },
        },
        {},
        [n.length],
    ),
    0 === n.length)
        ? (0, r.jsx)(w.w, {})
        : (0, r.jsx)(K, {
              savedMessageKeys: n,
              closePopout: t,
          });
}
function W(e) {
    let { onOpen: t, onClose: n, children: a, popoutPosition: o, popoutAlign: s } = e,
        [l, c] = i.useState(!1),
        u = i.useRef(null),
        d = i.useCallback(() => {
            c(!1), l && (null == n || n());
        }, [n, l]),
        f = i.useCallback(() => {
            c(!l), l ? null == n || n() : null == t || t();
        }, [n, t, l]);
    i.useEffect(
        () => (I.S.subscribe(L.CkL.TOGGLE_FOR_LATER, f), () => void I.S.unsubscribe(L.CkL.TOGGLE_FOR_LATER, f)),
        [f],
    );
    let m = (0, p.e7)([N.Z], () => N.Z.hasOverdueReminder(), []);
    function h() {
        return (0, r.jsx)(H, { closePopout: d });
    }
    return (0, r.jsx)(_.yRy, {
        targetElementRef: u,
        animation: _.yRy.Animation.NONE,
        position: o,
        align: s,
        autoInvert: !1,
        shouldShow: l,
        onRequestClose: d,
        renderPopout: h,
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return a(f, n, e, m, u);
        },
    });
}
function K(e) {
    let { savedMessageKeys: t, closePopout: n } = e,
        a = i.useRef(null),
        o = (0, h.Z)("for-later", a),
        [s, l] = i.useState(new Date());
    return (
        i.useEffect(() => {
            let e = setInterval(() => l(new Date()), T.Z.Millis.MINUTE);
            return () => {
                clearInterval(e);
            };
        }, []),
        (0, r.jsx)(f.bG, {
            navigator: o,
            children: (0, r.jsx)(f.SJ, {
                children: (e) => {
                    var { ref: i } = e,
                        o = B(e, ["ref"]);
                    return (0, r.jsx)(
                        _.h21,
                        Z(
                            U(
                                {
                                    ref: (e) => {
                                        var t;
                                        (a.current = e),
                                            (i.current =
                                                null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                    },
                                    className: M.messagesScroller,
                                },
                                o,
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
    let { savedMessage: t, closePopout: n, throttledNow: a } = e,
        s = (0, C.gr)(t),
        l = i.useCallback(
            async (e) => {
                var r;
                await (0, C.fC)(t, s),
                    e.shiftKey || n(),
                    S.default.track(L.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null == (r = t.message) ? void 0 : r.author.id,
                        type: null != t.saveData.dueAt ? P._l.REMINDER : P._l.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : void 0,
                    });
            },
            [n, t, s],
        ),
        c = (0, p.e7)(
            [v.Z],
            () =>
                !!((null == s ? void 0 : s.type) === L.d4z.UNKNOWN || (null == s ? void 0 : s.isPrivate())) ||
                v.Z.can(L.Plq.VIEW_CHANNEL, s),
        );
    return null != s && null != t.message && c
        ? (0, r.jsxs)("div", {
              className: M.messageContainer,
              children: [
                  (0, r.jsx)(_.P3F, {
                      className: M.clickableMessageBackground,
                      onClick: l,
                      "aria-label": j.intl.string(j.t["+TSRGD"]),
                  }),
                  null != t.saveData.dueAt
                      ? (0, r.jsx)(x.Z, {
                            reminder: t,
                            throttledNow: a,
                        })
                      : null,
                  (0, r.jsx)(D.Z, { channel: s }),
                  (0, r.jsx)(
                      E.Z,
                      {
                          message: t.message,
                          channel: s,
                          className: M.message,
                          compact: O.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: V,
                          trackAnnouncementViews: !0,
                      },
                      t.message.id,
                  ),
                  (0, r.jsx)(b.ZP, {
                      className: M.hoverBar,
                      children: (0, r.jsx)(Q, {
                          savedMessage: t,
                          jumpToMessage: l,
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: o()(M.messageContainer, M.deletedMessage),
              children: [
                  (0, r.jsx)("div", {
                      className: M.deleteIcon,
                      children: (0, r.jsx)(_.Mgn, {
                          size: "xxs",
                          color: _.TVs.colors.INTERACTIVE_ACTIVE,
                      }),
                  }),
                  (0, r.jsx)(_.Heading, {
                      variant: "text-md/semibold",
                      color: "text-default",
                      children: null != t.saveData.dueAt ? j.intl.string(j.t["wuQm+j"]) : j.intl.string(j.t.o572Fe),
                  }),
                  (0, r.jsx)(b.ZP, {
                      className: M.hoverBar,
                      children: (0, r.jsx)(
                          b.sF,
                          {
                              label: j.intl.string(j.t.SvXS1Z),
                              icon: _.XHJ,
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
        a = (0, p.e7)([N.Z], () => N.Z.getSavedMessage(t.channelId, t.messageId));
    return null == a
        ? null
        : (0, r.jsx)(z, {
              savedMessage: a,
              closePopout: n,
              throttledNow: i,
          });
}
function Q(e) {
    let { savedMessage: t, jumpToMessage: i } = e;
    return (l()(null != t.message, "Saved message must be cached for For Later action buttons"),
    null != t.saveData.dueAt)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(
                      b.sF,
                      {
                          label: j.intl.string(j.t.yjGtdJ),
                          icon: _.dz2,
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
                      b.sF,
                      {
                          label: j.intl.string(j.t.vrbqs1),
                          icon: _.vdY,
                          onClick: (e) =>
                              (0, m.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("69818").then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          Z(U({}, n), {
                                              label: j.intl.string(j.t.roMu1H),
                                              message: t.message,
                                          }),
                                      );
                              }),
                      },
                      "edit-reminder",
                  ),
                  (0, r.jsx)(b.fO, {}),
                  (0, r.jsx)(
                      b.sF,
                      {
                          label: j.intl.string(j.t["+TSRGD"]),
                          icon: _.acy,
                          onClick: (e) => i(e),
                      },
                      "jump-to-message",
                  ),
                  (0, r.jsx)(
                      b.sF,
                      {
                          label: j.intl.string(j.t.SvXS1Z),
                          icon: _.plf,
                          onClick: () => (0, A.x)(t.saveData),
                      },
                      "remove-reminder",
                  ),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(
                      b.sF,
                      {
                          label: j.intl.string(j.t.mJ3P0N),
                          icon: _.T39,
                          onClick: (e) =>
                              (0, m.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("69818").then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          Z(U({}, n), {
                                              label: j.intl.string(j.t.mJ3P0N),
                                              message: t.message,
                                          }),
                                      );
                              }),
                      },
                      "create-reminder",
                  ),
                  (0, r.jsx)(
                      b.sF,
                      {
                          label: j.intl.string(j.t["+TSRGD"]),
                          icon: _.acy,
                          onClick: (e) => i(e),
                      },
                      "jump-to-message",
                  ),
                  (0, r.jsx)(
                      b.sF,
                      {
                          label: j.intl.string(j.t.SvXS1Z),
                          icon: _.plf,
                          onClick: () => (0, A.x)(t.saveData),
                      },
                      "remove-bookmark",
                  ),
              ],
          });
}
