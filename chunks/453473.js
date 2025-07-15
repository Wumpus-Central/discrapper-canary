(n.d(t, {
    K: () => B,
    P: () => U
}),
    n(388685));
var r = n(255367),
    l = n(73800),
    s = n(120356),
    a = n.n(s),
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
    S = n(724757),
    y = n(213609),
    b = n(294218),
    x = n(373662),
    _ = n(695346),
    v = n(496675),
    O = n(626135),
    E = n(585483),
    j = n(70956),
    C = n(324701),
    I = n(575016),
    P = n(768943),
    R = n(686478),
    T = n(664559),
    N = n(767893),
    w = n(206697),
    k = n(74551),
    A = n(981631),
    Z = n(388032),
    F = n(585693);
function M(e) {
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
function L(e, t) {
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
        'aria-label': Z.intl.string(Z.t['2pAkDA']),
        children: (0, r.jsxs)('div', {
            className: F.popoutContainer,
            children: [
                (0, r.jsx)(m.h4, {
                    icon: f.plf,
                    title: Z.intl.string(Z.t['2pAkDA'])
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
                overdue_count: P.Z.getOverdueMessageReminderCount()
            }
        },
        {},
        [n.length]
    ),
    0 === n.length)
        ? (0, r.jsx)(w.w, {})
        : (0, r.jsx)(G, {
              savedMessageKeys: n,
              closePopout: t
          });
}
function U(e) {
    let { onOpen: t, onClose: n, children: s, popoutPosition: a, popoutAlign: i } = e,
        [o, c] = l.useState(!1),
        u = l.useRef(null),
        d = l.useCallback(() => {
            (c(!1), o && (null == n || n()));
        }, [n, o]),
        h = l.useCallback(() => {
            (c(!o), o ? null == n || n() : null == t || t());
        }, [n, t, o]);
    l.useEffect(() => (E.S.subscribe(A.CkL.TOGGLE_FOR_LATER, h), () => void E.S.unsubscribe(A.CkL.TOGGLE_FOR_LATER, h)), [h]);
    let g = (0, p.e7)([P.Z], () => P.Z.hasOverdueReminder(), []);
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
            return s(h, n, e, g, u);
        }
    });
}
function G(e) {
    let { savedMessageKeys: t, closePopout: n } = e,
        s = l.useRef(null),
        a = (0, S.Z)('for-later', s),
        [i, o] = l.useState(new Date());
    return (
        l.useEffect(() => {
            let e = setInterval(() => o(new Date()), j.Z.Millis.MINUTE);
            return () => {
                clearInterval(e);
            };
        }, []),
        (0, r.jsx)(h.bG, {
            navigator: a,
            children: (0, r.jsx)(h.SJ, {
                children: (e) => {
                    var { ref: l } = e,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                l = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        l = {},
                                        s = Object.keys(e);
                                    for (r = 0; r < s.length; r++) ((n = s[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                                    return l;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var s = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < s.length; r++) ((n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
                            }
                            return l;
                        })(e, ['ref']);
                    return (0, r.jsx)(
                        f.h21,
                        L(
                            M(
                                {
                                    ref: (e) => {
                                        var t;
                                        ((s.current = e), (l.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null));
                                    },
                                    className: F.messagesScroller
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
function z(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        i = (0, I.gr)(t),
        o = l.useCallback(
            async (e) => {
                var r;
                (await (0, I.fC)(t, i),
                    e.shiftKey || n(),
                    O.default.track(A.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null == (r = t.message) ? void 0 : r.author.id,
                        type: null != t.saveData.dueAt ? R._l.REMINDER : R._l.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : void 0
                    }));
            },
            [n, t, i]
        ),
        c = (0, p.e7)([v.Z], () => !!((null == i ? void 0 : i.type) === A.d4z.UNKNOWN || (null == i ? void 0 : i.isPrivate())) || v.Z.can(A.Plq.VIEW_CHANNEL, i));
    return null != i && null != t.message && c
        ? (0, r.jsxs)('div', {
              className: F.messageContainer,
              children: [
                  (0, r.jsx)(f.P3F, {
                      className: F.clickableMessageBackground,
                      onClick: o,
                      'aria-label': Z.intl.string(Z.t['+TSRGB'])
                  }),
                  null != t.saveData.dueAt
                      ? (0, r.jsx)(k.Z, {
                            reminder: t,
                            throttledNow: s
                        })
                      : null,
                  (0, r.jsx)(N.Z, { channel: i }),
                  (0, r.jsx)(
                      b.Z,
                      {
                          message: t.message,
                          channel: i,
                          className: F.message,
                          compact: _.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: D,
                          trackAnnouncementViews: !0
                      },
                      t.message.id
                  ),
                  (0, r.jsx)(x.ZP, {
                      className: F.hoverBar,
                      children: (0, r.jsx)(W, {
                          savedMessage: t,
                          jumpToMessage: o
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
                      children: null != t.saveData.dueAt ? Z.intl.string(Z.t['wuQm+v']) : Z.intl.string(Z.t.o572FR)
                  }),
                  (0, r.jsx)(x.ZP, {
                      className: F.hoverBar,
                      children: (0, r.jsx)(
                          x.sF,
                          {
                              label: Z.intl.string(Z.t.SvXS1d),
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
function q(e) {
    let { savedMessageKey: t, closePopout: n, throttledNow: l } = e,
        s = (0, p.e7)([P.Z], () => P.Z.getSavedMessage(t.channelId, t.messageId));
    return null == s
        ? null
        : (0, r.jsx)(z, {
              savedMessage: s,
              closePopout: n,
              throttledNow: l
          });
}
function W(e) {
    let { savedMessage: t, jumpToMessage: l } = e;
    return (o()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(
                      x.sF,
                      {
                          label: Z.intl.string(Z.t.yjGtdH),
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
                          label: Z.intl.string(Z.t.vrbqs7),
                          icon: f.vdY,
                          onClick: (e) =>
                              (0, g.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          L(M({}, n), {
                                              label: Z.intl.string(Z.t.roMu1N),
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
                          label: Z.intl.string(Z.t['+TSRGB']),
                          icon: f.d4D,
                          onClick: (e) => l(e)
                      },
                      'jump-to-message'
                  ),
                  (0, r.jsx)(
                      x.sF,
                      {
                          label: Z.intl.string(Z.t.SvXS1d),
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
                          label: Z.intl.string(Z.t.mJ3P0N),
                          icon: f.T39,
                          onClick: (e) =>
                              (0, g.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          L(M({}, n), {
                                              label: Z.intl.string(Z.t.mJ3P0N),
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
                          label: Z.intl.string(Z.t['+TSRGB']),
                          icon: f.d4D,
                          onClick: (e) => l(e)
                      },
                      'jump-to-message'
                  ),
                  (0, r.jsx)(
                      x.sF,
                      {
                          label: Z.intl.string(Z.t.SvXS1d),
                          icon: f.plf,
                          onClick: () => (0, C.x)(t.saveData)
                      },
                      'remove-bookmark'
                  )
              ]
          });
}
