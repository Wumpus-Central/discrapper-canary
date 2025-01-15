n.d(t, {
    _: function () {
        return j;
    }
}),
    n(724458),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(913527),
    a = n.n(l),
    o = n(91192),
    s = n(442837),
    c = n(524437),
    d = n(481060),
    u = n(724757),
    m = n(294218),
    h = n(703656),
    f = n(45251),
    p = n(156012),
    _ = n(74365),
    g = n(695346),
    E = n(23750),
    C = n(592125),
    I = n(594174),
    x = n(324081),
    N = n(240126),
    v = n(791914),
    T = n(981631),
    S = n(388032),
    A = n(395458);
let b = {
    offset: {
        left: 4,
        right: -12
    }
};
function j(e) {
    let { setTab: t, closePopout: n } = e;
    return (
        r.useEffect(() => {
            (0, f.kg)();
        }, []),
        (0, i.jsxs)('div', {
            className: A.container,
            children: [
                (0, i.jsx)(v.Z, {
                    tab: c.X.SCHEDULED,
                    setTab: t,
                    closePopout: n
                }),
                (0, i.jsx)(R, {})
            ]
        })
    );
}
function R() {
    let e = (0, s.e7)([p.Z], () => p.Z.getScheduledMessagesForInbox(), []),
        t = r.useMemo(
            () =>
                Object.values(e)
                    .filter((e) => e.state === _._.SCHEDULED)
                    .sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [e]
        ),
        n = (0, s.e7)([p.Z], () => p.Z.loading, []),
        l = r.useRef(null),
        a = (0, u.Z)('scheduled-messages', l);
    return n
        ? (0, i.jsx)(d.Spinner, { className: A.loadingPlaceholder })
        : 0 === t.length
          ? (0, i.jsx)(N.Z, {
                Icon: d.ClockIcon,
                header: S.intl.string(S.t.aJQZfX),
                tip: S.intl.string(S.t.rCN4pK)
            })
          : (0, i.jsx)(o.bG, {
                navigator: a,
                children: (0, i.jsx)(o.SJ, {
                    children: (e) => {
                        let { ref: n, ...r } = e;
                        return (0, i.jsx)(d.AdvancedScroller, {
                            className: A.container,
                            ref: (e) => {
                                var t;
                                (l.current = e), (n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                            },
                            ...r,
                            children: (0, i.jsx)(Z, { scheduledMessages: t })
                        });
                    }
                })
            });
}
function Z(e) {
    let { scheduledMessages: t } = e,
        n = r.useMemo(
            () =>
                t.reduce((e, t) => {
                    var n, i;
                    let r = C.Z.getChannel(t.scheduledMessage.channelId);
                    return null == r
                        ? e
                        : ((e[r.id] = {
                              channel: r,
                              scheduledMessages: [...(null !== (i = null === (n = e[r.id]) || void 0 === n ? void 0 : n.scheduledMessages) && void 0 !== i ? i : []), t]
                          }),
                          e);
                }, {}),
            [t]
        ),
        l = (0, s.e7)([p.Z], () => p.Z.getMessagesPendingDeletion(), []);
    return (0, i.jsx)(i.Fragment, {
        children: Object.entries(n).map((e) => {
            let [t, { channel: n, scheduledMessages: r }] = e;
            return (0, i.jsxs)(
                'div',
                {
                    className: A.channelRow,
                    children: [
                        (0, i.jsx)(x.Z, {
                            channel: n,
                            gotoChannel: () => (0, h.uL)(T.Z5c.CHANNEL(n.getGuildId(), n.id)),
                            children: null
                        }),
                        r.map((e) => {
                            let t = l.has(e.scheduledMessageId);
                            return (0, i.jsx)(
                                P,
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
let P = r.memo(function (e) {
    let { scheduledMessage: t, channel: n, isPendingDeletion: r } = e,
        l = new E.ZP({
            id: t.scheduledMessageId,
            content: t.scheduledMessage.content,
            author: I.default.getUser(t.userId),
            timestamp: a()(t.sendAtTimestamp).toDate(),
            channel_id: t.scheduledMessage.channelId
        });
    return (0, i.jsx)(
        'div',
        {
            className: A.messageContainer,
            children: r
                ? (0, i.jsx)(d.Spinner, {})
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(
                              m.Z,
                              {
                                  message: l,
                                  channel: n,
                                  className: A.message,
                                  compact: g.jU.getSetting(),
                                  animateAvatar: !1,
                                  focusProps: b
                              },
                              l.id
                          ),
                          (0, i.jsx)(d.Clickable, {
                              className: A.cancelMessageButton,
                              onClick: () => (0, f.gD)(t.scheduledMessageId),
                              children: (0, i.jsx)(d.CircleXIcon, {})
                          })
                      ]
                  })
        },
        l.id
    );
});
