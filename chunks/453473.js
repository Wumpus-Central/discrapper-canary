n.d(t, {
    K: () => F,
    P: () => B
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(913527),
    u = n.n(c),
    d = n(990547),
    p = n(91192),
    m = n(442837),
    f = n(481060),
    h = n(239091),
    g = n(494404),
    _ = n(724757),
    b = n(213609),
    x = n(294218),
    y = n(373662),
    E = n(695346),
    v = n(496675),
    N = n(626135),
    O = n(585483),
    j = n(70956),
    C = n(324701),
    S = n(575016),
    I = n(768943),
    T = n(686478),
    P = n(664559),
    A = n(767893),
    w = n(206697),
    Z = n(74551),
    R = n(981631),
    k = n(388032),
    D = n(585693);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
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
let W = {
    offset: {
        left: 4,
        right: -12
    }
};
function U(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)(f.VqE, {
        'aria-label': k.NW.string(k.t['2pAkDA']),
        children: (0, r.jsxs)('div', {
            className: D.popoutContainer,
            children: [
                (0, r.jsx)(g.h4, {
                    icon: f.plf,
                    title: k.NW.string(k.t['2pAkDA'])
                }),
                (0, r.jsx)(F, { closePopout: t })
            ]
        })
    });
}
function F(e) {
    let { closePopout: t } = e,
        n = (0, P.Z)();
    return ((0, b.Z)(
        {
            type: d.ImpressionTypes.POPOUT,
            name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: {
                total_count: n.length,
                overdue_count: I.Z.getOverdueMessageReminderCount()
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
function B(e) {
    let { onOpen: t, onClose: n, children: l, popoutPosition: a, popoutAlign: o } = e,
        [s, c] = i.useState(!1),
        u = i.useCallback(() => {
            c(!1), s && (null == n || n());
        }, [n, s]),
        d = i.useCallback(() => {
            c(!s), s ? null == n || n() : null == t || t();
        }, [n, t, s]);
    i.useEffect(() => (O.S.subscribe(R.CkL.TOGGLE_FOR_LATER, d), () => void O.S.unsubscribe(R.CkL.TOGGLE_FOR_LATER, d)), [d]);
    let p = (0, m.e7)([I.Z], () => I.Z.hasOverdueReminder(), []);
    return (0, r.jsx)(f.yRy, {
        animation: f.yRy.Animation.NONE,
        position: a,
        align: o,
        autoInvert: !1,
        shouldShow: s,
        onRequestClose: u,
        renderPopout: function () {
            return (0, r.jsx)(U, { closePopout: u });
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return l(d, n, e, p);
        }
    });
}
function G(e) {
    let { savedMessageKeys: t, closePopout: n } = e,
        l = i.useRef(null),
        a = (0, _.Z)('for-later', l),
        [o, s] = i.useState(new Date());
    return (
        i.useEffect(() => {
            let e = setInterval(() => s(new Date()), j.Z.Millis.MINUTE);
            return () => {
                clearInterval(e);
            };
        }, []),
        (0, r.jsx)(p.bG, {
            navigator: a,
            children: (0, r.jsx)(p.SJ, {
                children: (e) => {
                    var { ref: i } = e,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        i = {},
                                        l = Object.keys(e);
                                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                    return i;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var l = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                            }
                            return i;
                        })(e, ['ref']);
                    return (0, r.jsx)(
                        f.h21,
                        M(
                            L(
                                {
                                    ref: (e) => {
                                        var t;
                                        (l.current = e), (i.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                    },
                                    className: D.messagesScroller
                                },
                                a
                            ),
                            {
                                children: t.map((e) =>
                                    (0, r.jsx)(
                                        V,
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
function H(e) {
    let { savedMessage: t, closePopout: n, throttledNow: l } = e,
        o = (0, S.gr)(t),
        s = i.useCallback(
            async (e) => {
                var r;
                await (0, S.fC)(t, o),
                    e.shiftKey || n(),
                    N.default.track(R.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null == (r = t.message) ? void 0 : r.author.id,
                        type: null != t.saveData.dueAt ? T._l.REMINDER : T._l.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : void 0
                    });
            },
            [n, t, o]
        ),
        c = (0, m.e7)([v.Z], () => !!((null == o ? void 0 : o.type) === R.d4z.UNKNOWN || (null == o ? void 0 : o.isPrivate())) || v.Z.can(R.Plq.VIEW_CHANNEL, o));
    return null != o && null != t.message && c
        ? (0, r.jsxs)('div', {
              className: D.messageContainer,
              children: [
                  (0, r.jsx)(f.P3F, {
                      className: D.clickableMessageBackground,
                      onClick: s,
                      'aria-label': k.NW.string(k.t['+TSRGB'])
                  }),
                  null != t.saveData.dueAt
                      ? (0, r.jsx)(Z.Z, {
                            reminder: t,
                            throttledNow: l
                        })
                      : null,
                  (0, r.jsx)(A.Z, { channel: o }),
                  (0, r.jsx)(
                      x.Z,
                      {
                          message: t.message,
                          channel: o,
                          className: D.message,
                          compact: E.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: W,
                          trackAnnouncementViews: !0
                      },
                      t.message.id
                  ),
                  (0, r.jsx)(y.ZP, {
                      className: D.hoverBar,
                      children: (0, r.jsx)(z, {
                          savedMessage: t,
                          jumpToMessage: s
                      })
                  })
              ]
          })
        : (0, r.jsxs)('div', {
              className: a()(D.messageContainer, D.deletedMessage),
              children: [
                  (0, r.jsx)('div', {
                      className: D.deleteIcon,
                      children: (0, r.jsx)(f.P4T, {
                          size: 'xxs',
                          color: f.TVs.colors.INTERACTIVE_ACTIVE
                      })
                  }),
                  (0, r.jsx)(f.X6q, {
                      variant: 'text-md/semibold',
                      color: 'header-secondary',
                      children: null != t.saveData.dueAt ? k.NW.string(k.t['wuQm+v']) : k.NW.string(k.t.o572FR)
                  }),
                  (0, r.jsx)(y.ZP, {
                      className: D.hoverBar,
                      children: (0, r.jsx)(
                          y.sF,
                          {
                              label: k.NW.string(k.t.SvXS1d),
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
function V(e) {
    let { savedMessageKey: t, closePopout: n, throttledNow: i } = e,
        l = (0, m.e7)([I.Z], () => I.Z.getSavedMessage(t.channelId, t.messageId));
    return null == l
        ? null
        : (0, r.jsx)(H, {
              savedMessage: l,
              closePopout: n,
              throttledNow: i
          });
}
function z(e) {
    let { savedMessage: t, jumpToMessage: i } = e;
    return (s()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(
                      y.sF,
                      {
                          label: k.NW.string(k.t.yjGtdH),
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
                      y.sF,
                      {
                          label: k.NW.string(k.t.vrbqs7),
                          icon: f.vdY,
                          onClick: (e) =>
                              (0, h.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          M(L({}, n), {
                                              label: k.NW.string(k.t.roMu1N),
                                              message: t.message
                                          })
                                      );
                              })
                      },
                      'edit-reminder'
                  ),
                  (0, r.jsx)(y.fO, {}),
                  (0, r.jsx)(
                      y.sF,
                      {
                          label: k.NW.string(k.t['+TSRGB']),
                          icon: f.d4D,
                          onClick: (e) => i(e)
                      },
                      'jump-to-message'
                  ),
                  (0, r.jsx)(
                      y.sF,
                      {
                          label: k.NW.string(k.t.SvXS1d),
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
                      y.sF,
                      {
                          label: k.NW.string(k.t.mJ3P0N),
                          icon: f.T39,
                          onClick: (e) =>
                              (0, h.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          M(L({}, n), {
                                              label: k.NW.string(k.t.mJ3P0N),
                                              message: t.message
                                          })
                                      );
                              })
                      },
                      'create-reminder'
                  ),
                  (0, r.jsx)(
                      y.sF,
                      {
                          label: k.NW.string(k.t['+TSRGB']),
                          icon: f.d4D,
                          onClick: (e) => i(e)
                      },
                      'jump-to-message'
                  ),
                  (0, r.jsx)(
                      y.sF,
                      {
                          label: k.NW.string(k.t.SvXS1d),
                          icon: f.plf,
                          onClick: () => (0, C.x)(t.saveData)
                      },
                      'remove-bookmark'
                  )
              ]
          });
}
