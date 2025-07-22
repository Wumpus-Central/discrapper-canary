(n.d(t, {
    K: () => B,
    P: () => U
}),
    n(388685));
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    i = n(512722),
    o = n.n(i),
    c = n(913527),
    u = n.n(c),
    d = n(990547),
    h = n(91192),
    p = n(442837),
    f = n(481060),
    g = n(239091),
    m = n(494404),
    _ = n(724757),
    S = n(213609),
    y = n(294218),
    b = n(373662),
    x = n(695346),
    E = n(496675),
    C = n(626135),
    O = n(585483),
    v = n(70956),
    I = n(324701),
    j = n(575016),
    R = n(768943),
    T = n(686478),
    P = n(664559),
    N = n(767893),
    A = n(206697),
    Z = n(74551),
    k = n(981631),
    M = n(388032),
    L = n(585693);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let F = {
    offset: {
        left: 4,
        right: -12
    }
};
function H(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)(f.VqE, {
        'aria-label': M.intl.string(M.t['2pAkDA']),
        children: (0, r.jsxs)('div', {
            className: L.popoutContainer,
            children: [
                (0, r.jsx)(m.h4, {
                    icon: f.plf,
                    title: M.intl.string(M.t['2pAkDA'])
                }),
                (0, r.jsx)(B, { closePopout: t })
            ]
        })
    });
}
function B(e) {
    let { closePopout: t } = e,
        n = (0, P.Z)();
    return ((0, S.Z)(
        {
            type: d.ImpressionTypes.POPOUT,
            name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: {
                total_count: n.length,
                overdue_count: R.Z.getOverdueMessageReminderCount()
            }
        },
        {},
        [n.length]
    ),
    0 === n.length)
        ? (0, r.jsx)(A.w, {})
        : (0, r.jsx)(W, {
              savedMessageKeys: n,
              closePopout: t
          });
}
function U(e) {
    let { onOpen: t, onClose: n, children: l, popoutPosition: a, popoutAlign: i } = e,
        [o, c] = s.useState(!1),
        u = s.useRef(null),
        d = s.useCallback(() => {
            (c(!1), o && (null == n || n()));
        }, [n, o]),
        h = s.useCallback(() => {
            (c(!o), o ? null == n || n() : null == t || t());
        }, [n, t, o]);
    s.useEffect(() => (O.S.subscribe(k.CkL.TOGGLE_FOR_LATER, h), () => void O.S.unsubscribe(k.CkL.TOGGLE_FOR_LATER, h)), [h]);
    let g = (0, p.e7)([R.Z], () => R.Z.hasOverdueReminder(), []);
    return (0, r.jsx)(f.yRy, {
        targetElementRef: u,
        animation: f.yRy.Animation.NONE,
        position: a,
        align: i,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: d,
        renderPopout: function () {
            return (0, r.jsx)(H, { closePopout: d });
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return l(h, n, e, g, u);
        }
    });
}
function W(e) {
    let { savedMessageKeys: t, closePopout: n } = e,
        l = s.useRef(null),
        a = (0, _.Z)('for-later', l),
        [i, o] = s.useState(new Date());
    return (
        s.useEffect(() => {
            let e = setInterval(() => o(new Date()), v.Z.Millis.MINUTE);
            return () => {
                clearInterval(e);
            };
        }, []),
        (0, r.jsx)(h.bG, {
            navigator: a,
            children: (0, r.jsx)(h.SJ, {
                children: (e) => {
                    var { ref: s } = e,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        s = {},
                                        l = Object.keys(e);
                                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                                    return s;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var l = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]));
                            }
                            return s;
                        })(e, ['ref']);
                    return (0, r.jsx)(
                        f.h21,
                        D(
                            w(
                                {
                                    ref: (e) => {
                                        var t;
                                        ((l.current = e), (s.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null));
                                    },
                                    className: L.messagesScroller
                                },
                                a
                            ),
                            {
                                children: t.map((e) =>
                                    (0, r.jsx)(
                                        q,
                                        {
                                            savedMessageKey: e,
                                            closePopout: n,
                                            throttledNow: i
                                        },
                                        e.messageId
                                    )
                                )
                            }
                        )
                    );
                }
            })
        })
    );
}
function G(e) {
    let { savedMessage: t, closePopout: n, throttledNow: l } = e,
        i = (0, j.gr)(t),
        o = s.useCallback(
            async (e) => {
                var r;
                (await (0, j.fC)(t, i),
                    e.shiftKey || n(),
                    C.default.track(k.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null == (r = t.message) ? void 0 : r.author.id,
                        type: null != t.saveData.dueAt ? T._l.REMINDER : T._l.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : void 0
                    }));
            },
            [n, t, i]
        ),
        c = (0, p.e7)([E.Z], () => !!((null == i ? void 0 : i.type) === k.d4z.UNKNOWN || (null == i ? void 0 : i.isPrivate())) || E.Z.can(k.Plq.VIEW_CHANNEL, i));
    return null != i && null != t.message && c
        ? (0, r.jsxs)('div', {
              className: L.messageContainer,
              children: [
                  (0, r.jsx)(f.P3F, {
                      className: L.clickableMessageBackground,
                      onClick: o,
                      'aria-label': M.intl.string(M.t['+TSRGB'])
                  }),
                  null != t.saveData.dueAt
                      ? (0, r.jsx)(Z.Z, {
                            reminder: t,
                            throttledNow: l
                        })
                      : null,
                  (0, r.jsx)(N.Z, { channel: i }),
                  (0, r.jsx)(
                      y.Z,
                      {
                          message: t.message,
                          channel: i,
                          className: L.message,
                          compact: x.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: F,
                          trackAnnouncementViews: !0
                      },
                      t.message.id
                  ),
                  (0, r.jsx)(b.ZP, {
                      className: L.hoverBar,
                      children: (0, r.jsx)(Q, {
                          savedMessage: t,
                          jumpToMessage: o
                      })
                  })
              ]
          })
        : (0, r.jsxs)('div', {
              className: a()(L.messageContainer, L.deletedMessage),
              children: [
                  (0, r.jsx)('div', {
                      className: L.deleteIcon,
                      children: (0, r.jsx)(f.P4T, {
                          size: 'xxs',
                          color: f.TVs.colors.INTERACTIVE_ACTIVE
                      })
                  }),
                  (0, r.jsx)(f.X6q, {
                      variant: 'text-md/semibold',
                      color: 'header-secondary',
                      children: null != t.saveData.dueAt ? M.intl.string(M.t['wuQm+v']) : M.intl.string(M.t.o572FR)
                  }),
                  (0, r.jsx)(b.ZP, {
                      className: L.hoverBar,
                      children: (0, r.jsx)(
                          b.sF,
                          {
                              label: M.intl.string(M.t.SvXS1d),
                              icon: f.XHJ,
                              dangerous: !0,
                              onClick: () => (0, I.x)(t.saveData)
                          },
                          'delete'
                      )
                  })
              ]
          });
}
function q(e) {
    let { savedMessageKey: t, closePopout: n, throttledNow: s } = e,
        l = (0, p.e7)([R.Z], () => R.Z.getSavedMessage(t.channelId, t.messageId));
    return null == l
        ? null
        : (0, r.jsx)(G, {
              savedMessage: l,
              closePopout: n,
              throttledNow: s
          });
}
function Q(e) {
    let { savedMessage: t, jumpToMessage: s } = e;
    return (o()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(
                      b.sF,
                      {
                          label: M.intl.string(M.t.yjGtdH),
                          icon: f.dz2,
                          onClick: () =>
                              (0, I.z)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0
                              })
                      },
                      'mark-complete'
                  ),
                  (0, r.jsx)(
                      b.sF,
                      {
                          label: M.intl.string(M.t.vrbqs7),
                          icon: f.vdY,
                          onClick: (e) =>
                              (0, g.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          D(w({}, n), {
                                              label: M.intl.string(M.t.roMu1N),
                                              message: t.message
                                          })
                                      );
                              })
                      },
                      'edit-reminder'
                  ),
                  (0, r.jsx)(b.fO, {}),
                  (0, r.jsx)(
                      b.sF,
                      {
                          label: M.intl.string(M.t['+TSRGB']),
                          icon: f.d4D,
                          onClick: (e) => s(e)
                      },
                      'jump-to-message'
                  ),
                  (0, r.jsx)(
                      b.sF,
                      {
                          label: M.intl.string(M.t.SvXS1d),
                          icon: f.plf,
                          onClick: () => (0, I.x)(t.saveData)
                      },
                      'remove-reminder'
                  )
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(
                      b.sF,
                      {
                          label: M.intl.string(M.t.mJ3P0N),
                          icon: f.T39,
                          onClick: (e) =>
                              (0, g.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          D(w({}, n), {
                                              label: M.intl.string(M.t.mJ3P0N),
                                              message: t.message
                                          })
                                      );
                              })
                      },
                      'create-reminder'
                  ),
                  (0, r.jsx)(
                      b.sF,
                      {
                          label: M.intl.string(M.t['+TSRGB']),
                          icon: f.d4D,
                          onClick: (e) => s(e)
                      },
                      'jump-to-message'
                  ),
                  (0, r.jsx)(
                      b.sF,
                      {
                          label: M.intl.string(M.t.SvXS1d),
                          icon: f.plf,
                          onClick: () => (0, I.x)(t.saveData)
                      },
                      'remove-bookmark'
                  )
              ]
          });
}
