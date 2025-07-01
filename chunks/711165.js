(n.d(t, { _: () => T }), n(642613), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(913527),
    s = n.n(a),
    c = n(91192),
    u = n(442837),
    d = n(524437),
    h = n(481060),
    p = n(724757),
    f = n(294218),
    g = n(703656),
    m = n(45251),
    b = n(156012),
    _ = n(74365),
    O = n(618857),
    y = n(695346),
    v = n(23750),
    C = n(592125),
    j = n(594174),
    S = n(823379),
    E = n(324081),
    x = n(240126),
    I = n(791914),
    P = n(981631),
    N = n(388032),
    w = n(142857);
let Z = {
    offset: {
        left: 4,
        right: -12
    }
};
function T(e) {
    let { setTab: t, closePopout: n } = e;
    return (
        i.useEffect(() => {
            (0, m.kg)();
        }, []),
        (0, r.jsxs)('div', {
            className: o()(w.container, w.widerInbox),
            children: [
                (0, r.jsx)(I.Z, {
                    tab: d.X.SCHEDULED,
                    setTab: t,
                    closePopout: n
                }),
                (0, r.jsx)(A, {})
            ]
        })
    );
}
function A() {
    let e = (0, u.e7)([b.Z], () => b.Z.getScheduledMessagesForInbox(), []),
        t = i.useMemo(() => Object.values(e).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)), [e]),
        n = (0, u.e7)([b.Z], () => b.Z.loading, []),
        l = i.useRef(null),
        o = (0, p.Z)('scheduled-messages', l);
    return n
        ? (0, r.jsx)(h.$jN, { className: w.loadingPlaceholder })
        : 0 === t.length
          ? (0, r.jsx)(x.Z, {
                Icon: h.T39,
                header: N.intl.string(N.t.aJQZfX),
                tip: N.intl.string(N.t.rCN4pK)
            })
          : (0, r.jsx)(c.bG, {
                navigator: o,
                children: (0, r.jsx)(c.SJ, {
                    children: (e) => {
                        var n,
                            i,
                            { ref: o } = e,
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
                                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                        return i;
                                    })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                                }
                                return i;
                            })(e, ['ref']);
                        return (0, r.jsx)(
                            h.Den,
                            ((n = (function (e) {
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
                            })(
                                {
                                    ref: (e) => {
                                        var t;
                                        ((l.current = e), (o.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null));
                                    }
                                },
                                a
                            )),
                            (i = i = { children: (0, r.jsx)(R, { scheduledMessages: t }) }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            n)
                        );
                    }
                })
            });
}
function R(e) {
    let { scheduledMessages: t } = e,
        n = i.useMemo(
            () =>
                t.reduce((e, t) => {
                    var n, r;
                    let i = C.Z.getChannel(t.scheduledMessage.channelId);
                    return (
                        null == i ||
                            (e[i.id] = {
                                channel: i,
                                scheduledMessages: [...(null != (r = null == (n = e[i.id]) ? void 0 : n.scheduledMessages) ? r : []), t]
                            }),
                        e
                    );
                }, {}),
            [t]
        ),
        l = (0, u.e7)([b.Z], () => b.Z.getMessagesPendingDeletion(), []);
    return (0, r.jsx)(r.Fragment, {
        children: Object.entries(n).map((e) => {
            let [t, { channel: n, scheduledMessages: i }] = e;
            return (0, r.jsxs)(
                'div',
                {
                    className: w.channelRow,
                    children: [
                        (0, r.jsx)(E.Z, {
                            channel: n,
                            gotoChannel: () => (0, g.uL)(P.Z5c.CHANNEL(n.getGuildId(), n.id)),
                            children: null
                        }),
                        i.map((e) => {
                            let t = l.has(e.scheduledMessageId);
                            return (0, r.jsx)(
                                D,
                                {
                                    scheduledMessage: e,
                                    channel: n,
                                    isPendingDeletion: t
                                },
                                e.scheduledMessageId
                            );
                        })
                    ]
                },
                t
            );
        })
    });
}
let D = i.memo(function (e) {
    let { scheduledMessage: t, channel: n, isPendingDeletion: l } = e,
        a = new v.ZP({
            id: t.scheduledMessageId,
            content: t.scheduledMessage.content,
            author: j.default.getUser(t.userId),
            timestamp: s()(t.sendAtTimestamp).toDate(),
            channel_id: t.scheduledMessage.channelId
        }),
        { isError: c, stateMessage: u } = (function (e) {
            switch (e) {
                case _._.SCHEDULED:
                    return {
                        isError: !1,
                        stateMessage: N.intl.string(N.t.Fn6Odn)
                    };
                case _._.ERROR_CHANNEL_NOT_FOUND:
                    return {
                        isError: !0,
                        stateMessage: N.intl.string(N.t.v5O2dH)
                    };
                case _._.ERROR_USER_NOT_FOUND:
                    return {
                        isError: !0,
                        stateMessage: N.intl.string(N.t.j8uIfH)
                    };
                case _._.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return {
                        isError: !0,
                        stateMessage: N.intl.string(N.t.w6zHX1)
                    };
                case _._.ERROR_SEND_FAILED:
                    return {
                        isError: !0,
                        stateMessage: N.intl.string(N.t['pflV7+'])
                    };
                case _._.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return {
                        isError: !0,
                        stateMessage: N.intl.string(N.t.j8uIfH)
                    };
                default:
                    (0, S.vE)(e);
            }
        })(t.state),
        d = i.useCallback(() => {
            (0, m.gD)(t.scheduledMessageId)
                .then(() => {
                    (0, O.C$)();
                })
                .catch((e) => {
                    (0, O.wW)(e.message);
                });
        }, [t.scheduledMessageId]);
    return (0, r.jsx)(
        'div',
        {
            className: o()(w.messageContainer, {
                [w.messageSendError]: c,
                [w.messageSendScheduled]: !c
            }),
            children: l
                ? (0, r.jsx)(h.$jN, { className: w.messageSpinner })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(h.Text, {
                              variant: 'text-xs/semibold',
                              color: c ? 'text-danger' : 'text-feedback-positive',
                              className: w.messageState,
                              children: u
                          }),
                          (0, r.jsxs)('div', {
                              className: w.channelMessageAndCancelButton,
                              children: [
                                  (0, r.jsx)(
                                      f.Z,
                                      {
                                          message: a,
                                          channel: n,
                                          className: w.message,
                                          compact: y.jU.getSetting(),
                                          animateAvatar: !1,
                                          focusProps: Z
                                      },
                                      a.id
                                  ),
                                  (0, r.jsx)(h.P3F, {
                                      className: w.cancelMessageButton,
                                      onClick: d,
                                      children: (0, r.jsx)(h.k$p, {})
                                  })
                              ]
                          })
                      ]
                  })
        },
        a.id
    );
});
