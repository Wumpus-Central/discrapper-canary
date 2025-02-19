n.d(t, { _: () => w }), n(230036), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(913527),
    s = n.n(l),
    c = n(91192),
    d = n(442837),
    u = n(524437),
    p = n(481060),
    m = n(724757),
    f = n(294218),
    h = n(703656),
    g = n(45251),
    _ = n(156012),
    b = n(74365),
    v = n(618857),
    y = n(695346),
    x = n(23750),
    O = n(592125),
    E = n(594174),
    j = n(823379),
    N = n(324081),
    C = n(240126),
    I = n(791914),
    S = n(981631),
    P = n(388032),
    T = n(632150);
let A = {
    offset: {
        left: 4,
        right: -12
    }
};
function w(e) {
    let { setTab: t, closePopout: n } = e;
    return (
        i.useEffect(() => {
            (0, g.kg)();
        }, []),
        (0, r.jsxs)('div', {
            className: o()(T.container, T.widerInbox),
            children: [
                (0, r.jsx)(I.Z, {
                    tab: u.X.SCHEDULED,
                    setTab: t,
                    closePopout: n
                }),
                (0, r.jsx)(Z, {})
            ]
        })
    );
}
function Z() {
    let e = (0, d.e7)([_.Z], () => _.Z.getScheduledMessagesForInbox(), []),
        t = i.useMemo(() => Object.values(e).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)), [e]),
        n = (0, d.e7)([_.Z], () => _.Z.loading, []),
        a = i.useRef(null),
        o = (0, m.Z)('scheduled-messages', a);
    return n
        ? (0, r.jsx)(p.$jN, { className: T.loadingPlaceholder })
        : 0 === t.length
          ? (0, r.jsx)(C.Z, {
                Icon: p.T39,
                header: P.NW.string(P.t.aJQZfX),
                tip: P.NW.string(P.t.rCN4pK)
            })
          : (0, r.jsx)(c.bG, {
                navigator: o,
                children: (0, r.jsx)(c.SJ, {
                    children: (e) => {
                        var n,
                            i,
                            { ref: o } = e,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            i = {},
                                            a = Object.keys(e);
                                        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                        return i;
                                    })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var a = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                }
                                return i;
                            })(e, ['ref']);
                        return (0, r.jsx)(
                            p.Den,
                            ((n = (function (e) {
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
                            })(
                                {
                                    ref: (e) => {
                                        var t;
                                        (a.current = e), (o.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                                    }
                                },
                                l
                            )),
                            (i = i = { children: (0, r.jsx)(k, { scheduledMessages: t }) }),
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
function k(e) {
    let { scheduledMessages: t } = e,
        n = i.useMemo(
            () =>
                t.reduce((e, t) => {
                    var n, r;
                    let i = O.Z.getChannel(t.scheduledMessage.channelId);
                    return (
                        null == i ||
                            (e[i.id] = {
                                channel: i,
                                scheduledMessages: [...(null !== (r = null === (n = e[i.id]) || void 0 === n ? void 0 : n.scheduledMessages) && void 0 !== r ? r : []), t]
                            }),
                        e
                    );
                }, {}),
            [t]
        ),
        a = (0, d.e7)([_.Z], () => _.Z.getMessagesPendingDeletion(), []);
    return (0, r.jsx)(r.Fragment, {
        children: Object.entries(n).map((e) => {
            let [t, { channel: n, scheduledMessages: i }] = e;
            return (0, r.jsxs)(
                'div',
                {
                    className: T.channelRow,
                    children: [
                        (0, r.jsx)(N.Z, {
                            channel: n,
                            gotoChannel: () => (0, h.uL)(S.Z5c.CHANNEL(n.getGuildId(), n.id)),
                            children: null
                        }),
                        i.map((e) => {
                            let t = a.has(e.scheduledMessageId);
                            return (0, r.jsx)(
                                R,
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
let R = i.memo(function (e) {
    let { scheduledMessage: t, channel: n, isPendingDeletion: a } = e,
        l = new x.ZP({
            id: t.scheduledMessageId,
            content: t.scheduledMessage.content,
            author: E.default.getUser(t.userId),
            timestamp: s()(t.sendAtTimestamp).toDate(),
            channel_id: t.scheduledMessage.channelId
        }),
        { isError: c, stateMessage: d } = (function (e) {
            switch (e) {
                case b._.SCHEDULED:
                    return {
                        isError: !1,
                        stateMessage: P.NW.string(P.t.Fn6Odn)
                    };
                case b._.ERROR_CHANNEL_NOT_FOUND:
                    return {
                        isError: !0,
                        stateMessage: P.NW.string(P.t.v5O2dH)
                    };
                case b._.ERROR_USER_NOT_FOUND:
                    return {
                        isError: !0,
                        stateMessage: P.NW.string(P.t.j8uIfH)
                    };
                case b._.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return {
                        isError: !0,
                        stateMessage: P.NW.string(P.t.w6zHX1)
                    };
                case b._.ERROR_SEND_FAILED:
                    return {
                        isError: !0,
                        stateMessage: P.NW.string(P.t['pflV7+'])
                    };
                case b._.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return {
                        isError: !0,
                        stateMessage: P.NW.string(P.t.j8uIfH)
                    };
                default:
                    (0, j.vE)(e);
            }
        })(t.state),
        u = i.useCallback(() => {
            (0, g.gD)(t.scheduledMessageId)
                .then(() => {
                    (0, v.C$)();
                })
                .catch((e) => {
                    (0, v.wW)(e.message);
                });
        }, [t.scheduledMessageId]);
    return (0, r.jsx)(
        'div',
        {
            className: o()(T.messageContainer, {
                [T.messageSendError]: c,
                [T.messageSendScheduled]: !c
            }),
            children: a
                ? (0, r.jsx)(p.$jN, { className: T.messageSpinner })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(p.Text, {
                              variant: 'text-xs/semibold',
                              color: c ? 'text-danger' : 'text-positive',
                              className: T.messageState,
                              children: d
                          }),
                          (0, r.jsxs)('div', {
                              className: T.channelMessageAndCancelButton,
                              children: [
                                  (0, r.jsx)(
                                      f.Z,
                                      {
                                          message: l,
                                          channel: n,
                                          className: T.message,
                                          compact: y.jU.getSetting(),
                                          animateAvatar: !1,
                                          focusProps: A
                                      },
                                      l.id
                                  ),
                                  (0, r.jsx)(p.P3F, {
                                      className: T.cancelMessageButton,
                                      onClick: u,
                                      children: (0, r.jsx)(p.k$p, {})
                                  })
                              ]
                          })
                      ]
                  })
        },
        l.id
    );
});
