n.d(t, { _: () => L }), n(724458), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(913527),
    o = n.n(s),
    c = n(91192),
    d = n(442837),
    u = n(524437),
    m = n(481060),
    _ = n(724757),
    h = n(294218),
    p = n(703656),
    g = n(45251),
    f = n(156012),
    x = n(74365),
    C = n(618857),
    v = n(695346),
    E = n(23750),
    I = n(592125),
    N = n(594174),
    S = n(823379),
    T = n(324081),
    b = n(240126),
    A = n(791914),
    j = n(981631),
    y = n(388032),
    Z = n(544208);
let R = {
    offset: {
        left: 4,
        right: -12
    }
};
function L(e) {
    let { setTab: t, closePopout: n } = e;
    return (
        l.useEffect(() => {
            (0, g.kg)();
        }, []),
        (0, i.jsxs)('div', {
            className: r()(Z.container, Z.widerInbox),
            children: [
                (0, i.jsx)(A.Z, {
                    tab: u.X.SCHEDULED,
                    setTab: t,
                    closePopout: n
                }),
                (0, i.jsx)(P, {})
            ]
        })
    );
}
function P() {
    let e = (0, d.e7)([f.Z], () => f.Z.getScheduledMessagesForInbox(), []),
        t = l.useMemo(() => Object.values(e).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)), [e]),
        n = (0, d.e7)([f.Z], () => f.Z.loading, []),
        a = l.useRef(null),
        r = (0, _.Z)('scheduled-messages', a);
    return n
        ? (0, i.jsx)(m.$jN, { className: Z.loadingPlaceholder })
        : 0 === t.length
          ? (0, i.jsx)(b.Z, {
                Icon: m.T39,
                header: y.intl.string(y.t.aJQZfX),
                tip: y.intl.string(y.t.rCN4pK)
            })
          : (0, i.jsx)(c.bG, {
                navigator: r,
                children: (0, i.jsx)(c.SJ, {
                    children: (e) => {
                        let { ref: n, ...l } = e;
                        return (0, i.jsx)(m.Den, {
                            ref: (e) => {
                                var t;
                                (a.current = e), (n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                            },
                            ...l,
                            children: (0, i.jsx)(k, { scheduledMessages: t })
                        });
                    }
                })
            });
}
function k(e) {
    let { scheduledMessages: t } = e,
        n = l.useMemo(
            () =>
                t.reduce((e, t) => {
                    var n, i;
                    let l = I.Z.getChannel(t.scheduledMessage.channelId);
                    return (
                        null == l ||
                            (e[l.id] = {
                                channel: l,
                                scheduledMessages: [...(null !== (i = null === (n = e[l.id]) || void 0 === n ? void 0 : n.scheduledMessages) && void 0 !== i ? i : []), t]
                            }),
                        e
                    );
                }, {}),
            [t]
        ),
        a = (0, d.e7)([f.Z], () => f.Z.getMessagesPendingDeletion(), []);
    return (0, i.jsx)(i.Fragment, {
        children: Object.entries(n).map((e) => {
            let [t, { channel: n, scheduledMessages: l }] = e;
            return (0, i.jsxs)(
                'div',
                {
                    className: Z.channelRow,
                    children: [
                        (0, i.jsx)(T.Z, {
                            channel: n,
                            gotoChannel: () => (0, p.uL)(j.Z5c.CHANNEL(n.getGuildId(), n.id)),
                            children: null
                        }),
                        l.map((e) => {
                            let t = a.has(e.scheduledMessageId);
                            return (0, i.jsx)(
                                M,
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
let M = l.memo(function (e) {
    let { scheduledMessage: t, channel: n, isPendingDeletion: a } = e,
        s = new E.ZP({
            id: t.scheduledMessageId,
            content: t.scheduledMessage.content,
            author: N.default.getUser(t.userId),
            timestamp: o()(t.sendAtTimestamp).toDate(),
            channel_id: t.scheduledMessage.channelId
        }),
        { isError: c, stateMessage: d } = (function (e) {
            switch (e) {
                case x._.SCHEDULED:
                    return {
                        isError: !1,
                        stateMessage: y.intl.string(y.t.Fn6Odn)
                    };
                case x._.ERROR_CHANNEL_NOT_FOUND:
                    return {
                        isError: !0,
                        stateMessage: y.intl.string(y.t.v5O2dH)
                    };
                case x._.ERROR_USER_NOT_FOUND:
                    return {
                        isError: !0,
                        stateMessage: y.intl.string(y.t.j8uIfH)
                    };
                case x._.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return {
                        isError: !0,
                        stateMessage: y.intl.string(y.t.w6zHX1)
                    };
                case x._.ERROR_SEND_FAILED:
                    return {
                        isError: !0,
                        stateMessage: y.intl.string(y.t['pflV7+'])
                    };
                case x._.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return {
                        isError: !0,
                        stateMessage: y.intl.string(y.t.j8uIfH)
                    };
                default:
                    (0, S.vE)(e);
            }
        })(t.state),
        u = l.useCallback(() => {
            (0, g.gD)(t.scheduledMessageId)
                .then(() => {
                    (0, C.C$)();
                })
                .catch((e) => {
                    (0, C.wW)(e.message);
                });
        }, [t.scheduledMessageId]);
    return (0, i.jsx)(
        'div',
        {
            className: r()(Z.messageContainer, {
                [Z.messageSendError]: c,
                [Z.messageSendScheduled]: !c
            }),
            children: a
                ? (0, i.jsx)(m.$jN, { className: Z.messageSpinner })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(m.Text, {
                              variant: 'text-xs/semibold',
                              color: c ? 'text-danger' : 'text-positive',
                              className: Z.messageState,
                              children: d
                          }),
                          (0, i.jsxs)('div', {
                              className: Z.channelMessageAndCancelButton,
                              children: [
                                  (0, i.jsx)(
                                      h.Z,
                                      {
                                          message: s,
                                          channel: n,
                                          className: Z.message,
                                          compact: v.jU.getSetting(),
                                          animateAvatar: !1,
                                          focusProps: R
                                      },
                                      s.id
                                  ),
                                  (0, i.jsx)(m.P3F, {
                                      className: Z.cancelMessageButton,
                                      onClick: u,
                                      children: (0, i.jsx)(m.k$p, {})
                                  })
                              ]
                          })
                      ]
                  })
        },
        s.id
    );
});
