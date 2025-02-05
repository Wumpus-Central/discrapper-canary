n.d(t, {
    K: () => F,
    P: () => U
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(990547),
    m = n(91192),
    _ = n(442837),
    h = n(481060),
    p = n(239091),
    g = n(494404),
    f = n(724757),
    x = n(213609),
    C = n(294218),
    v = n(373662),
    E = n(695346),
    I = n(496675),
    N = n(626135),
    S = n(585483),
    T = n(70956),
    b = n(324701),
    A = n(575016),
    j = n(768943),
    y = n(686478),
    Z = n(664559),
    R = n(767893),
    L = n(206697),
    P = n(74551),
    k = n(981631),
    M = n(388032),
    O = n(393873);
let D = {
    offset: {
        left: 4,
        right: -12
    }
};
function w(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)(h.VqE, {
        'aria-label': M.intl.string(M.t['2pAkDA']),
        children: (0, i.jsxs)('div', {
            className: O.popoutContainer,
            children: [
                (0, i.jsx)(g.h4, {
                    icon: h.plf,
                    title: M.intl.string(M.t['2pAkDA'])
                }),
                (0, i.jsx)(F, { closePopout: t })
            ]
        })
    });
}
function F(e) {
    let { closePopout: t } = e,
        n = (0, Z.Z)();
    return ((0, x.Z)(
        {
            type: u.ImpressionTypes.POPOUT,
            name: u.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: {
                total_count: n.length,
                overdue_count: j.Z.getOverdueMessageReminderCount()
            }
        },
        {},
        [n.length]
    ),
    0 === n.length)
        ? (0, i.jsx)(L.w, {})
        : (0, i.jsx)(B, {
              savedMessageKeys: n,
              closePopout: t
          });
}
function U(e) {
    let { onOpen: t, onClose: n, children: a, popoutPosition: r, popoutAlign: s } = e,
        [o, c] = l.useState(!1),
        d = l.useCallback(() => {
            c(!1), o && (null == n || n());
        }, [n, o]),
        u = l.useCallback(() => {
            c(!o), o ? null == n || n() : null == t || t();
        }, [n, t, o]);
    l.useEffect(() => (S.S.subscribe(k.CkL.TOGGLE_FOR_LATER, u), () => void S.S.unsubscribe(k.CkL.TOGGLE_FOR_LATER, u)), [u]);
    let m = (0, _.e7)([j.Z], () => j.Z.hasOverdueReminder(), []);
    return (0, i.jsx)(h.yRy, {
        animation: h.yRy.Animation.NONE,
        position: r,
        align: s,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: d,
        renderPopout: function () {
            return (0, i.jsx)(w, { closePopout: d });
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return a(u, n, e, m);
        }
    });
}
function B(e) {
    let { savedMessageKeys: t, closePopout: n } = e,
        a = l.useRef(null),
        r = (0, f.Z)('for-later', a),
        [s, o] = l.useState(new Date());
    return (
        l.useEffect(() => {
            let e = setInterval(() => o(new Date()), T.Z.Millis.MINUTE);
            return () => {
                clearInterval(e);
            };
        }, []),
        (0, i.jsx)(m.bG, {
            navigator: r,
            children: (0, i.jsx)(m.SJ, {
                children: (e) => {
                    let { ref: l, ...r } = e;
                    return (0, i.jsx)(h.h21, {
                        ref: (e) => {
                            var t;
                            (a.current = e), (l.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                        },
                        className: O.messagesScroller,
                        ...r,
                        children: t.map((e) =>
                            (0, i.jsx)(
                                H,
                                {
                                    savedMessageKey: e,
                                    closePopout: n,
                                    throttledNow: s
                                },
                                e.messageId
                            )
                        )
                    });
                }
            })
        })
    );
}
function G(e) {
    let { savedMessage: t, closePopout: n, throttledNow: a } = e,
        s = (0, A.gr)(t),
        o = l.useCallback(
            async (e) => {
                var i;
                await (0, A.fC)(t, s),
                    e.shiftKey || n(),
                    N.default.track(k.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null === (i = t.message) || void 0 === i ? void 0 : i.author.id,
                        type: null != t.saveData.dueAt ? y._l.REMINDER : y._l.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? d()().diff(t.saveData.dueAt) : void 0
                    });
            },
            [n, t, s]
        ),
        c = (0, _.e7)([I.Z], () => !!((null == s ? void 0 : s.type) === k.d4z.UNKNOWN || (null == s ? void 0 : s.isPrivate())) || I.Z.can(k.Plq.VIEW_CHANNEL, s));
    return null != s && null != t.message && c
        ? (0, i.jsxs)('div', {
              className: O.messageContainer,
              children: [
                  (0, i.jsx)(h.P3F, {
                      className: O.clickableMessageBackground,
                      onClick: o,
                      'aria-label': M.intl.string(M.t['+TSRGB'])
                  }),
                  null != t.saveData.dueAt
                      ? (0, i.jsx)(P.Z, {
                            reminder: t,
                            throttledNow: a
                        })
                      : null,
                  (0, i.jsx)(R.Z, { channel: s }),
                  (0, i.jsx)(
                      C.Z,
                      {
                          message: t.message,
                          channel: s,
                          className: O.message,
                          compact: E.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: D,
                          trackAnnouncementViews: !0
                      },
                      t.message.id
                  ),
                  (0, i.jsx)(v.ZP, {
                      className: O.hoverBar,
                      children: (0, i.jsx)(V, {
                          savedMessage: t,
                          jumpToMessage: o
                      })
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: r()(O.messageContainer, O.deletedMessage),
              children: [
                  (0, i.jsx)('div', {
                      className: O.deleteIcon,
                      children: (0, i.jsx)(h.P4T, {
                          size: 'xxs',
                          color: h.TVs.colors.INTERACTIVE_ACTIVE
                      })
                  }),
                  (0, i.jsx)(h.X6q, {
                      variant: 'text-md/semibold',
                      color: 'header-secondary',
                      children: null != t.saveData.dueAt ? M.intl.string(M.t['wuQm+v']) : M.intl.string(M.t.o572FR)
                  }),
                  (0, i.jsx)(v.ZP, {
                      className: O.hoverBar,
                      children: (0, i.jsx)(
                          v.sF,
                          {
                              label: M.intl.string(M.t.SvXS1d),
                              icon: h.XHJ,
                              dangerous: !0,
                              onClick: () => (0, b.x)(t.saveData)
                          },
                          'delete'
                      )
                  })
              ]
          });
}
function H(e) {
    let { savedMessageKey: t, closePopout: n, throttledNow: l } = e,
        a = (0, _.e7)([j.Z], () => j.Z.getSavedMessage(t.channelId, t.messageId));
    return null == a
        ? null
        : (0, i.jsx)(G, {
              savedMessage: a,
              closePopout: n,
              throttledNow: l
          });
}
function V(e) {
    let { savedMessage: t, jumpToMessage: l } = e;
    return (o()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      v.sF,
                      {
                          label: M.intl.string(M.t.yjGtdH),
                          icon: h.dz2,
                          onClick: () =>
                              (0, b.z)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0
                              })
                      },
                      'mark-complete'
                  ),
                  (0, i.jsx)(
                      v.sF,
                      {
                          label: M.intl.string(M.t.vrbqs7),
                          icon: h.vdY,
                          onClick: (e) =>
                              (0, p.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: M.intl.string(M.t.roMu1N),
                                          message: t.message
                                      });
                              })
                      },
                      'edit-reminder'
                  ),
                  (0, i.jsx)(v.fO, {}),
                  (0, i.jsx)(
                      v.sF,
                      {
                          label: M.intl.string(M.t['+TSRGB']),
                          icon: h.d4D,
                          onClick: (e) => l(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      v.sF,
                      {
                          label: M.intl.string(M.t.SvXS1d),
                          icon: h.plf,
                          onClick: () => (0, b.x)(t.saveData)
                      },
                      'remove-reminder'
                  )
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      v.sF,
                      {
                          label: M.intl.string(M.t.mJ3P0N),
                          icon: h.T39,
                          onClick: (e) =>
                              (0, p.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: M.intl.string(M.t.mJ3P0N),
                                          message: t.message
                                      });
                              })
                      },
                      'create-reminder'
                  ),
                  (0, i.jsx)(
                      v.sF,
                      {
                          label: M.intl.string(M.t['+TSRGB']),
                          icon: h.d4D,
                          onClick: (e) => l(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      v.sF,
                      {
                          label: M.intl.string(M.t.SvXS1d),
                          icon: h.plf,
                          onClick: () => (0, b.x)(t.saveData)
                      },
                      'remove-bookmark'
                  )
              ]
          });
}
