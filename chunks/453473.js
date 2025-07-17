(n.d(t, {
    K: () => B,
    P: () => U
}),
    n(388685));
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    i = n.n(o),
    c = n(913527),
    u = n.n(c),
    d = n(990547),
    h = n(91192),
    p = n(442837),
    f = n(481060),
    g = n(239091),
    m = n(494404),
    b = n(724757),
    y = n(213609),
    S = n(294218),
    x = n(373662),
    j = n(695346),
    O = n(496675),
    v = n(626135),
    _ = n(585483),
    E = n(70956),
    C = n(324701),
    I = n(575016),
    R = n(768943),
    P = n(686478),
    T = n(664559),
    N = n(767893),
    k = n(206697),
    A = n(74551),
    Z = n(981631),
    w = n(388032),
    F = n(585693);
function L(e) {
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
function M(e, t) {
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
let D = {
    offset: {
        left: 4,
        right: -12
    }
};
function H(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)(f.VqE, {
        'aria-label': w.intl.string(w.t['2pAkDA']),
        children: (0, r.jsxs)('div', {
            className: F.popoutContainer,
            children: [
                (0, r.jsx)(m.h4, {
                    icon: f.plf,
                    title: w.intl.string(w.t['2pAkDA'])
                }),
                (0, r.jsx)(B, { closePopout: t })
            ]
        })
    });
}
function B(e) {
    let { closePopout: t } = e,
        n = (0, T.Z)();
    return ((0, y.Z)(
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
        ? (0, r.jsx)(k.w, {})
        : (0, r.jsx)(G, {
              savedMessageKeys: n,
              closePopout: t
          });
}
function U(e) {
    let { onOpen: t, onClose: n, children: l, popoutPosition: a, popoutAlign: o } = e,
        [i, c] = s.useState(!1),
        u = s.useRef(null),
        d = s.useCallback(() => {
            (c(!1), i && (null == n || n()));
        }, [n, i]),
        h = s.useCallback(() => {
            (c(!i), i ? null == n || n() : null == t || t());
        }, [n, t, i]);
    s.useEffect(() => (_.S.subscribe(Z.CkL.TOGGLE_FOR_LATER, h), () => void _.S.unsubscribe(Z.CkL.TOGGLE_FOR_LATER, h)), [h]);
    let g = (0, p.e7)([R.Z], () => R.Z.hasOverdueReminder(), []);
    return (0, r.jsx)(f.yRy, {
        targetElementRef: u,
        animation: f.yRy.Animation.NONE,
        position: a,
        align: o,
        autoInvert: !1,
        shouldShow: i,
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
function G(e) {
    let { savedMessageKeys: t, closePopout: n } = e,
        l = s.useRef(null),
        a = (0, b.Z)('for-later', l),
        [o, i] = s.useState(new Date());
    return (
        s.useEffect(() => {
            let e = setInterval(() => i(new Date()), E.Z.Millis.MINUTE);
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
                        M(
                            L(
                                {
                                    ref: (e) => {
                                        var t;
                                        ((l.current = e), (s.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null));
                                    },
                                    className: F.messagesScroller
                                },
                                a
                            ),
                            {
                                children: t.map((e) =>
                                    (0, r.jsx)(
                                        z,
                                        {
                                            savedMessageKey: e,
                                            closePopout: n,
                                            throttledNow: o
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
function W(e) {
    let { savedMessage: t, closePopout: n, throttledNow: l } = e,
        o = (0, I.gr)(t),
        i = s.useCallback(
            async (e) => {
                var r;
                (await (0, I.fC)(t, o),
                    e.shiftKey || n(),
                    v.default.track(Z.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null == (r = t.message) ? void 0 : r.author.id,
                        type: null != t.saveData.dueAt ? P._l.REMINDER : P._l.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : void 0
                    }));
            },
            [n, t, o]
        ),
        c = (0, p.e7)([O.Z], () => !!((null == o ? void 0 : o.type) === Z.d4z.UNKNOWN || (null == o ? void 0 : o.isPrivate())) || O.Z.can(Z.Plq.VIEW_CHANNEL, o));
    return null != o && null != t.message && c
        ? (0, r.jsxs)('div', {
              className: F.messageContainer,
              children: [
                  (0, r.jsx)(f.P3F, {
                      className: F.clickableMessageBackground,
                      onClick: i,
                      'aria-label': w.intl.string(w.t['+TSRGB'])
                  }),
                  null != t.saveData.dueAt
                      ? (0, r.jsx)(A.Z, {
                            reminder: t,
                            throttledNow: l
                        })
                      : null,
                  (0, r.jsx)(N.Z, { channel: o }),
                  (0, r.jsx)(
                      S.Z,
                      {
                          message: t.message,
                          channel: o,
                          className: F.message,
                          compact: j.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: D,
                          trackAnnouncementViews: !0
                      },
                      t.message.id
                  ),
                  (0, r.jsx)(x.ZP, {
                      className: F.hoverBar,
                      children: (0, r.jsx)(q, {
                          savedMessage: t,
                          jumpToMessage: i
                      })
                  })
              ]
          })
        : (0, r.jsxs)('div', {
              className: a()(F.messageContainer, F.deletedMessage),
              children: [
                  (0, r.jsx)('div', {
                      className: F.deleteIcon,
                      children: (0, r.jsx)(f.P4T, {
                          size: 'xxs',
                          color: f.TVs.colors.INTERACTIVE_ACTIVE
                      })
                  }),
                  (0, r.jsx)(f.X6q, {
                      variant: 'text-md/semibold',
                      color: 'header-secondary',
                      children: null != t.saveData.dueAt ? w.intl.string(w.t['wuQm+v']) : w.intl.string(w.t.o572FR)
                  }),
                  (0, r.jsx)(x.ZP, {
                      className: F.hoverBar,
                      children: (0, r.jsx)(
                          x.sF,
                          {
                              label: w.intl.string(w.t.SvXS1d),
                              icon: f.XHJ,
                              dangerous: !0,
                              onClick: () => (0, C.x)(t.saveData)
                          },
                          'delete'
                      )
                  })
              ]
          });
}
function z(e) {
    let { savedMessageKey: t, closePopout: n, throttledNow: s } = e,
        l = (0, p.e7)([R.Z], () => R.Z.getSavedMessage(t.channelId, t.messageId));
    return null == l
        ? null
        : (0, r.jsx)(W, {
              savedMessage: l,
              closePopout: n,
              throttledNow: s
          });
}
function q(e) {
    let { savedMessage: t, jumpToMessage: s } = e;
    return (i()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(
                      x.sF,
                      {
                          label: w.intl.string(w.t.yjGtdH),
                          icon: f.dz2,
                          onClick: () =>
                              (0, C.z)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0
                              })
                      },
                      'mark-complete'
                  ),
                  (0, r.jsx)(
                      x.sF,
                      {
                          label: w.intl.string(w.t.vrbqs7),
                          icon: f.vdY,
                          onClick: (e) =>
                              (0, g.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          M(L({}, n), {
                                              label: w.intl.string(w.t.roMu1N),
                                              message: t.message
                                          })
                                      );
                              })
                      },
                      'edit-reminder'
                  ),
                  (0, r.jsx)(x.fO, {}),
                  (0, r.jsx)(
                      x.sF,
                      {
                          label: w.intl.string(w.t['+TSRGB']),
                          icon: f.d4D,
                          onClick: (e) => s(e)
                      },
                      'jump-to-message'
                  ),
                  (0, r.jsx)(
                      x.sF,
                      {
                          label: w.intl.string(w.t.SvXS1d),
                          icon: f.plf,
                          onClick: () => (0, C.x)(t.saveData)
                      },
                      'remove-reminder'
                  )
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(
                      x.sF,
                      {
                          label: w.intl.string(w.t.mJ3P0N),
                          icon: f.T39,
                          onClick: (e) =>
                              (0, g.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          M(L({}, n), {
                                              label: w.intl.string(w.t.mJ3P0N),
                                              message: t.message
                                          })
                                      );
                              })
                      },
                      'create-reminder'
                  ),
                  (0, r.jsx)(
                      x.sF,
                      {
                          label: w.intl.string(w.t['+TSRGB']),
                          icon: f.d4D,
                          onClick: (e) => s(e)
                      },
                      'jump-to-message'
                  ),
                  (0, r.jsx)(
                      x.sF,
                      {
                          label: w.intl.string(w.t.SvXS1d),
                          icon: f.plf,
                          onClick: () => (0, C.x)(t.saveData)
                      },
                      'remove-bookmark'
                  )
              ]
          });
}
