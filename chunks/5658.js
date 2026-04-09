n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(687498),
    a = n(311283),
    r = n(311907),
    o = n(435371),
    d = n(397927),
    c = n(73153),
    u = n(334738),
    h = n(58149),
    A = n(976860),
    _ = n(734057),
    m = n(510560),
    g = n(572448),
    p = n(955454),
    f = n(502754),
    x = n(652215),
    E = n(985018),
    I = n(368897);
let C = l.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            a = l.useRef(null),
            [[r, o], c] = l.useState([0, 0]),
            u = t.deleted && r > 0;
        l.useLayoutEffect(() => {
            if (!t.deleted || 0 !== r || null == a.current) return;
            let e = a.current,
                i = e.offsetHeight;
            if (i <= 0) return void n(t.channelId);
            let l = e.offsetTop,
                s = e.parentElement.scrollTop,
                o = s > l ? i - (s - l) : i;
            c([i, i - o]);
        }, [t.deleted, t.channelId, n, r]);
        let { opacity: h, size: A } = (0, d.zhh)(
                {
                    config: { clamp: !0, friction: 18, tension: 200 },
                    opacity: +!u,
                    size: +!u,
                    onRest: () => {
                        n(t.channelId);
                    },
                },
                "animate-always",
            ),
            _ = {
                opacity: h,
                height: A.to((e) => {
                    var t, n;
                    return u ? ((t = r), (n = o) + (t - n) * e) : "auto";
                }),
            };
        return (0, i.jsx)(s.animated.div, { ref: a, style: _, children: (0, i.jsx)(N, { ...e }) });
    }),
    N = l.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: a } = e,
            o = (0, r.bG)([_.A], () => _.A.getChannel(t.channelId));
        if (
            (l.useEffect(() => {
                null == o ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    c.h.wait(() => {
                        (0, u.ack)(
                            t.channelId,
                            {
                                section: x.JJy.INBOX,
                                object: x.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: x.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            !0,
                        ),
                            s(t.channelId);
                    });
            }),
            null == o || !t.hasLoadedAnything)
        )
            return null;
        let E = (e, i) => {
            (0, h.zV)(x.HAw.INBOX_CHANNEL_CLICKED, { channel_id: t.channelId, guild_id: t.guildId });
            let l = i ?? t.oldestUnreadMessageId;
            (0, A.pX)(x.BVt.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : l)), n(e);
        };
        return (0, i.jsx)("div", {
            className: I.Ix,
            children: (0, i.jsx)(d.Fmo, {
                component: (0, i.jsx)(g.A, {
                    channel: o,
                    gotoChannel: E,
                    mentionCount: t.mentionCount,
                    toggleCollapsed: a,
                    showCollapseButton: !0,
                    channelState: t,
                    getNumUnreadChannels: e.getNumUnreadChannels,
                    children: (0, i.jsxs)(d.ButtonGroup, {
                        size: "sm",
                        className: I.GC,
                        children: [(0, i.jsx)(m.A, { channel: o }), (0, i.jsx)(T, { ...e })],
                    }),
                }),
                children: t.collapsed
                    ? null
                    : "messages" === t.type
                      ? (0, i.jsx)(f.A, { channel: t, channelRecord: o, gotoChannel: E })
                      : "forum" === t.type
                        ? (0, i.jsx)(p.A, { channel: t, channelRecord: o, deleteChannel: s })
                        : null,
            }),
        });
    });
function T(e) {
    let { channel: t, markChannelRead: n, markGuildRead: l, getNumUnreadChannels: s } = e,
        r = (0, a.A)() && null != t.guildId;
    return (0, i.jsx)(o.m_, {
        text: r ? E.intl.string(E.t["5lLMhM"]) : E.intl.string(E.t.e6RscS),
        children: (0, i.jsx)(d.K0, {
            variant: "secondary",
            "aria-label": r ? E.intl.string(E.t["5lLMhM"]) : E.intl.string(E.t.e6RscS),
            size: "sm",
            icon: r ? d.iA$ : d.A9s,
            onClick: function () {
                r && null != t.guildId ? l(t.guildId) : n(t),
                    (0, h.zV)(x.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: s() - 1,
                    });
            },
        }),
    });
}
