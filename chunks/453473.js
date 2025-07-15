(r.d(t, {
    K: () => B,
    P: () => U
}),
    r(388685));
var n = r(255367),
    s = r(73800),
    l = r(120356),
    a = r.n(l),
    o = r(512722),
    i = r.n(o),
    c = r(913527),
    u = r.n(c),
    d = r(990547),
    h = r(91192),
    p = r(442837),
    f = r(481060),
    g = r(239091),
    m = r(494404),
    b = r(724757),
    y = r(213609),
    S = r(294218),
    x = r(373662),
    O = r(695346),
    j = r(496675),
    v = r(626135),
    _ = r(585483),
    E = r(70956),
    C = r(324701),
    I = r(575016),
    R = r(768943),
    P = r(686478),
    T = r(664559),
    N = r(767893),
    k = r(206697),
    w = r(74551),
    Z = r(981631),
    A = r(388032),
    L = r(585693);
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function F(e, t) {
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
        right: -12
    }
};
function H(e) {
    let { closePopout: t } = e;
    return (0, n.jsx)(f.VqE, {
        'aria-label': A.intl.string(A.t['2pAkDA']),
        children: (0, n.jsxs)('div', {
            className: L.popoutContainer,
            children: [
                (0, n.jsx)(m.h4, {
                    icon: f.plf,
                    title: A.intl.string(A.t['2pAkDA'])
                }),
                (0, n.jsx)(B, { closePopout: t })
            ]
        })
    });
}
function B(e) {
    let { closePopout: t } = e,
        r = (0, T.Z)();
    return ((0, y.Z)(
        {
            type: d.ImpressionTypes.POPOUT,
            name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: {
                total_count: r.length,
                overdue_count: R.Z.getOverdueMessageReminderCount()
            }
        },
        {},
        [r.length]
    ),
    0 === r.length)
        ? (0, n.jsx)(k.w, {})
        : (0, n.jsx)(G, {
              savedMessageKeys: r,
              closePopout: t
          });
}
function U(e) {
    let { onOpen: t, onClose: r, children: l, popoutPosition: a, popoutAlign: o } = e,
        [i, c] = s.useState(!1),
        u = s.useRef(null),
        d = s.useCallback(() => {
            (c(!1), i && (null == r || r()));
        }, [r, i]),
        h = s.useCallback(() => {
            (c(!i), i ? null == r || r() : null == t || t());
        }, [r, t, i]);
    s.useEffect(() => (_.S.subscribe(Z.CkL.TOGGLE_FOR_LATER, h), () => void _.S.unsubscribe(Z.CkL.TOGGLE_FOR_LATER, h)), [h]);
    let g = (0, p.e7)([R.Z], () => R.Z.hasOverdueReminder(), []);
    return (0, n.jsx)(f.yRy, {
        targetElementRef: u,
        animation: f.yRy.Animation.NONE,
        position: a,
        align: o,
        autoInvert: !1,
        shouldShow: i,
        onRequestClose: d,
        renderPopout: function () {
            return (0, n.jsx)(H, { closePopout: d });
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: r } = t;
            return l(h, r, e, g, u);
        }
    });
}
function G(e) {
    let { savedMessageKeys: t, closePopout: r } = e,
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
        (0, n.jsx)(h.bG, {
            navigator: a,
            children: (0, n.jsx)(h.SJ, {
                children: (e) => {
                    var { ref: s } = e,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        s = {},
                                        l = Object.keys(e);
                                    for (n = 0; n < l.length; n++) ((r = l[n]), t.indexOf(r) >= 0 || (s[r] = e[r]));
                                    return s;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var l = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < l.length; n++) ((r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]));
                            }
                            return s;
                        })(e, ['ref']);
                    return (0, n.jsx)(
                        f.h21,
                        F(
                            M(
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
                                    (0, n.jsx)(
                                        q,
                                        {
                                            savedMessageKey: e,
                                            closePopout: r,
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
function z(e) {
    let { savedMessage: t, closePopout: r, throttledNow: l } = e,
        o = (0, I.gr)(t),
        i = s.useCallback(
            async (e) => {
                var n;
                (await (0, I.fC)(t, o),
                    e.shiftKey || r(),
                    v.default.track(Z.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null == (n = t.message) ? void 0 : n.author.id,
                        type: null != t.saveData.dueAt ? P._l.REMINDER : P._l.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : void 0
                    }));
            },
            [r, t, o]
        ),
        c = (0, p.e7)([j.Z], () => !!((null == o ? void 0 : o.type) === Z.d4z.UNKNOWN || (null == o ? void 0 : o.isPrivate())) || j.Z.can(Z.Plq.VIEW_CHANNEL, o));
    return null != o && null != t.message && c
        ? (0, n.jsxs)('div', {
              className: L.messageContainer,
              children: [
                  (0, n.jsx)(f.P3F, {
                      className: L.clickableMessageBackground,
                      onClick: i,
                      'aria-label': A.intl.string(A.t['+TSRGB'])
                  }),
                  null != t.saveData.dueAt
                      ? (0, n.jsx)(w.Z, {
                            reminder: t,
                            throttledNow: l
                        })
                      : null,
                  (0, n.jsx)(N.Z, { channel: o }),
                  (0, n.jsx)(
                      S.Z,
                      {
                          message: t.message,
                          channel: o,
                          className: L.message,
                          compact: O.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: D,
                          trackAnnouncementViews: !0
                      },
                      t.message.id
                  ),
                  (0, n.jsx)(x.ZP, {
                      className: L.hoverBar,
                      children: (0, n.jsx)(W, {
                          savedMessage: t,
                          jumpToMessage: i
                      })
                  })
              ]
          })
        : (0, n.jsxs)('div', {
              className: a()(L.messageContainer, L.deletedMessage),
              children: [
                  (0, n.jsx)('div', {
                      className: L.deleteIcon,
                      children: (0, n.jsx)(f.P4T, {
                          size: 'xxs',
                          color: f.TVs.colors.INTERACTIVE_ACTIVE
                      })
                  }),
                  (0, n.jsx)(f.X6q, {
                      variant: 'text-md/semibold',
                      color: 'header-secondary',
                      children: null != t.saveData.dueAt ? A.intl.string(A.t['wuQm+v']) : A.intl.string(A.t.o572FR)
                  }),
                  (0, n.jsx)(x.ZP, {
                      className: L.hoverBar,
                      children: (0, n.jsx)(
                          x.sF,
                          {
                              label: A.intl.string(A.t.SvXS1d),
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
    let { savedMessageKey: t, closePopout: r, throttledNow: s } = e,
        l = (0, p.e7)([R.Z], () => R.Z.getSavedMessage(t.channelId, t.messageId));
    return null == l
        ? null
        : (0, n.jsx)(z, {
              savedMessage: l,
              closePopout: r,
              throttledNow: s
          });
}
function W(e) {
    let { savedMessage: t, jumpToMessage: s } = e;
    return (i()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(
                      x.sF,
                      {
                          label: A.intl.string(A.t.yjGtdH),
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
                  (0, n.jsx)(
                      x.sF,
                      {
                          label: A.intl.string(A.t.vrbqs7),
                          icon: f.vdY,
                          onClick: (e) =>
                              (0, g.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await r.e('69818').then(r.bind(r, 898150));
                                  return (r) =>
                                      (0, n.jsx)(
                                          e,
                                          F(M({}, r), {
                                              label: A.intl.string(A.t.roMu1N),
                                              message: t.message
                                          })
                                      );
                              })
                      },
                      'edit-reminder'
                  ),
                  (0, n.jsx)(x.fO, {}),
                  (0, n.jsx)(
                      x.sF,
                      {
                          label: A.intl.string(A.t['+TSRGB']),
                          icon: f.d4D,
                          onClick: (e) => s(e)
                      },
                      'jump-to-message'
                  ),
                  (0, n.jsx)(
                      x.sF,
                      {
                          label: A.intl.string(A.t.SvXS1d),
                          icon: f.plf,
                          onClick: () => (0, C.x)(t.saveData)
                      },
                      'remove-reminder'
                  )
              ]
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(
                      x.sF,
                      {
                          label: A.intl.string(A.t.mJ3P0N),
                          icon: f.T39,
                          onClick: (e) =>
                              (0, g.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await r.e('69818').then(r.bind(r, 898150));
                                  return (r) =>
                                      (0, n.jsx)(
                                          e,
                                          F(M({}, r), {
                                              label: A.intl.string(A.t.mJ3P0N),
                                              message: t.message
                                          })
                                      );
                              })
                      },
                      'create-reminder'
                  ),
                  (0, n.jsx)(
                      x.sF,
                      {
                          label: A.intl.string(A.t['+TSRGB']),
                          icon: f.d4D,
                          onClick: (e) => s(e)
                      },
                      'jump-to-message'
                  ),
                  (0, n.jsx)(
                      x.sF,
                      {
                          label: A.intl.string(A.t.SvXS1d),
                          icon: f.plf,
                          onClick: () => (0, C.x)(t.saveData)
                      },
                      'remove-bookmark'
                  )
              ]
          });
}
