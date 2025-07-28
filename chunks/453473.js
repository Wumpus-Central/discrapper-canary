(r.d(t, {
    K: () => B,
    P: () => U
}),
    r(388685));
var n = r(255367),
    s = r(73800),
    l = r(120356),
    a = r.n(l),
    i = r(512722),
    o = r.n(i),
    c = r(913527),
    u = r.n(c),
    h = r(990547),
    d = r(91192),
    p = r(442837),
    f = r(481060),
    g = r(239091),
    m = r(494404),
    S = r(724757),
    _ = r(213609),
    y = r(294218),
    b = r(373662),
    x = r(695346),
    E = r(496675),
    O = r(626135),
    v = r(585483),
    C = r(70956),
    j = r(324701),
    R = r(575016),
    I = r(768943),
    T = r(686478),
    P = r(664559),
    N = r(767893),
    A = r(206697),
    M = r(74551),
    k = r(981631),
    Z = r(388032),
    w = r(585693);
function L(e) {
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
function D(e, t) {
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
let F = {
    offset: {
        left: 4,
        right: -12
    }
};
function H(e) {
    let { closePopout: t } = e;
    return (0, n.jsx)(f.VqE, {
        'aria-label': Z.intl.string(Z.t['2pAkDA']),
        children: (0, n.jsxs)('div', {
            className: w.popoutContainer,
            children: [
                (0, n.jsx)(m.h4, {
                    icon: f.plf,
                    title: Z.intl.string(Z.t['2pAkDA'])
                }),
                (0, n.jsx)(B, { closePopout: t })
            ]
        })
    });
}
function B(e) {
    let { closePopout: t } = e,
        r = (0, P.Z)();
    return ((0, _.Z)(
        {
            type: h.ImpressionTypes.POPOUT,
            name: h.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: {
                total_count: r.length,
                overdue_count: I.Z.getOverdueMessageReminderCount()
            }
        },
        {},
        [r.length]
    ),
    0 === r.length)
        ? (0, n.jsx)(A.w, {})
        : (0, n.jsx)(W, {
              savedMessageKeys: r,
              closePopout: t
          });
}
function U(e) {
    let { onOpen: t, onClose: r, children: l, popoutPosition: a, popoutAlign: i } = e,
        [o, c] = s.useState(!1),
        u = s.useRef(null),
        h = s.useCallback(() => {
            (c(!1), o && (null == r || r()));
        }, [r, o]),
        d = s.useCallback(() => {
            (c(!o), o ? null == r || r() : null == t || t());
        }, [r, t, o]);
    s.useEffect(() => (v.S.subscribe(k.CkL.TOGGLE_FOR_LATER, d), () => void v.S.unsubscribe(k.CkL.TOGGLE_FOR_LATER, d)), [d]);
    let g = (0, p.e7)([I.Z], () => I.Z.hasOverdueReminder(), []);
    return (0, n.jsx)(f.yRy, {
        targetElementRef: u,
        animation: f.yRy.Animation.NONE,
        position: a,
        align: i,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: h,
        renderPopout: function () {
            return (0, n.jsx)(H, { closePopout: h });
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: r } = t;
            return l(d, r, e, g, u);
        }
    });
}
function W(e) {
    let { savedMessageKeys: t, closePopout: r } = e,
        l = s.useRef(null),
        a = (0, S.Z)('for-later', l),
        [i, o] = s.useState(new Date());
    return (
        s.useEffect(() => {
            let e = setInterval(() => o(new Date()), C.Z.Millis.MINUTE);
            return () => {
                clearInterval(e);
            };
        }, []),
        (0, n.jsx)(d.bG, {
            navigator: a,
            children: (0, n.jsx)(d.SJ, {
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
                        D(
                            L(
                                {
                                    ref: (e) => {
                                        var t;
                                        ((l.current = e), (s.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null));
                                    },
                                    className: w.messagesScroller
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
    let { savedMessage: t, closePopout: r, throttledNow: l } = e,
        i = (0, R.gr)(t),
        o = s.useCallback(
            async (e) => {
                var n;
                (await (0, R.fC)(t, i),
                    e.shiftKey || r(),
                    O.default.track(k.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null == (n = t.message) ? void 0 : n.author.id,
                        type: null != t.saveData.dueAt ? T._l.REMINDER : T._l.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : void 0
                    }));
            },
            [r, t, i]
        ),
        c = (0, p.e7)([E.Z], () => !!((null == i ? void 0 : i.type) === k.d4z.UNKNOWN || (null == i ? void 0 : i.isPrivate())) || E.Z.can(k.Plq.VIEW_CHANNEL, i));
    return null != i && null != t.message && c
        ? (0, n.jsxs)('div', {
              className: w.messageContainer,
              children: [
                  (0, n.jsx)(f.P3F, {
                      className: w.clickableMessageBackground,
                      onClick: o,
                      'aria-label': Z.intl.string(Z.t['+TSRGB'])
                  }),
                  null != t.saveData.dueAt
                      ? (0, n.jsx)(M.Z, {
                            reminder: t,
                            throttledNow: l
                        })
                      : null,
                  (0, n.jsx)(N.Z, { channel: i }),
                  (0, n.jsx)(
                      y.Z,
                      {
                          message: t.message,
                          channel: i,
                          className: w.message,
                          compact: x.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: F,
                          trackAnnouncementViews: !0
                      },
                      t.message.id
                  ),
                  (0, n.jsx)(b.ZP, {
                      className: w.hoverBar,
                      children: (0, n.jsx)(Q, {
                          savedMessage: t,
                          jumpToMessage: o
                      })
                  })
              ]
          })
        : (0, n.jsxs)('div', {
              className: a()(w.messageContainer, w.deletedMessage),
              children: [
                  (0, n.jsx)('div', {
                      className: w.deleteIcon,
                      children: (0, n.jsx)(f.P4T, {
                          size: 'xxs',
                          color: f.TVs.colors.INTERACTIVE_ACTIVE
                      })
                  }),
                  (0, n.jsx)(f.X6q, {
                      variant: 'text-md/semibold',
                      color: 'header-secondary',
                      children: null != t.saveData.dueAt ? Z.intl.string(Z.t['wuQm+v']) : Z.intl.string(Z.t.o572FR)
                  }),
                  (0, n.jsx)(b.ZP, {
                      className: w.hoverBar,
                      children: (0, n.jsx)(
                          b.sF,
                          {
                              label: Z.intl.string(Z.t.SvXS1d),
                              icon: f.XHJ,
                              dangerous: !0,
                              onClick: () => (0, j.x)(t.saveData)
                          },
                          'delete'
                      )
                  })
              ]
          });
}
function q(e) {
    let { savedMessageKey: t, closePopout: r, throttledNow: s } = e,
        l = (0, p.e7)([I.Z], () => I.Z.getSavedMessage(t.channelId, t.messageId));
    return null == l
        ? null
        : (0, n.jsx)(G, {
              savedMessage: l,
              closePopout: r,
              throttledNow: s
          });
}
function Q(e) {
    let { savedMessage: t, jumpToMessage: s } = e;
    return (o()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(
                      b.sF,
                      {
                          label: Z.intl.string(Z.t.yjGtdH),
                          icon: f.dz2,
                          onClick: () =>
                              (0, j.z)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0
                              })
                      },
                      'mark-complete'
                  ),
                  (0, n.jsx)(
                      b.sF,
                      {
                          label: Z.intl.string(Z.t.vrbqs7),
                          icon: f.vdY,
                          onClick: (e) =>
                              (0, g.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await r.e('69818').then(r.bind(r, 898150));
                                  return (r) =>
                                      (0, n.jsx)(
                                          e,
                                          D(L({}, r), {
                                              label: Z.intl.string(Z.t.roMu1N),
                                              message: t.message
                                          })
                                      );
                              })
                      },
                      'edit-reminder'
                  ),
                  (0, n.jsx)(b.fO, {}),
                  (0, n.jsx)(
                      b.sF,
                      {
                          label: Z.intl.string(Z.t['+TSRGB']),
                          icon: f.d4D,
                          onClick: (e) => s(e)
                      },
                      'jump-to-message'
                  ),
                  (0, n.jsx)(
                      b.sF,
                      {
                          label: Z.intl.string(Z.t.SvXS1d),
                          icon: f.plf,
                          onClick: () => (0, j.x)(t.saveData)
                      },
                      'remove-reminder'
                  )
              ]
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(
                      b.sF,
                      {
                          label: Z.intl.string(Z.t.mJ3P0N),
                          icon: f.T39,
                          onClick: (e) =>
                              (0, g.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await r.e('69818').then(r.bind(r, 898150));
                                  return (r) =>
                                      (0, n.jsx)(
                                          e,
                                          D(L({}, r), {
                                              label: Z.intl.string(Z.t.mJ3P0N),
                                              message: t.message
                                          })
                                      );
                              })
                      },
                      'create-reminder'
                  ),
                  (0, n.jsx)(
                      b.sF,
                      {
                          label: Z.intl.string(Z.t['+TSRGB']),
                          icon: f.d4D,
                          onClick: (e) => s(e)
                      },
                      'jump-to-message'
                  ),
                  (0, n.jsx)(
                      b.sF,
                      {
                          label: Z.intl.string(Z.t.SvXS1d),
                          icon: f.plf,
                          onClick: () => (0, j.x)(t.saveData)
                      },
                      'remove-bookmark'
                  )
              ]
          });
}
