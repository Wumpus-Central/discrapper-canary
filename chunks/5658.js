"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    s = n(64700),
    l = n(4208),
    a = n(311283),
    r = n(311907),
    o = n(435371),
    c = n(397927),
    d = n(73153),
    u = n(334738),
    h = n(58149),
    A = n(976860),
    m = n(734057),
    _ = n(510560),
    p = n(572448),
    g = n(955454),
    f = n(502754),
    x = n(652215),
    E = n(985018),
    C = n(368897);
let I = s.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            a = s.useRef(null),
            [[r, o], d] = s.useState([0, 0]),
            u = t.deleted && r > 0;
        if (t.deleted && 0 === r && null != a.current) {
            let e = a.current.offsetHeight,
                t = a.current.offsetTop,
                n = a.current.parentElement.scrollTop,
                i = n > t ? e - (n - t) : e;
            d([e, e - i]);
        }
        let { opacity: h, size: A } = (0, c.zhh)(
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
            m = {
                opacity: h,
                height: A.to((e) => {
                    var t, n;
                    return u ? ((t = r), (n = o) + (t - n) * e) : "auto";
                }),
            };
        return (0, i.jsx)(l.animated.div, { ref: a, style: m, children: (0, i.jsx)(N, { ...e }) });
    }),
    N = s.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: l, toggle: a } = e,
            o = (0, r.bG)([m.A], () => m.A.getChannel(t.channelId));
        if (
            (s.useEffect(() => {
                null == o ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    d.h.wait(() => {
                        (0, u.ack)(
                            t.channelId,
                            {
                                section: x.JJy.INBOX,
                                object: x.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: x.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            !0,
                        ),
                            l(t.channelId);
                    });
            }),
            null == o || !t.hasLoadedAnything)
        )
            return null;
        let E = (e, i) => {
            (0, h.zV)(x.HAw.INBOX_CHANNEL_CLICKED, { channel_id: t.channelId, guild_id: t.guildId });
            let s = i ?? t.oldestUnreadMessageId;
            (0, A.pX)(x.BVt.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : s)), n(e);
        };
        return (0, i.jsx)("div", {
            className: C.Ix,
            children: (0, i.jsx)(c.Fmo, {
                component: (0, i.jsx)(p.A, {
                    channel: o,
                    gotoChannel: E,
                    mentionCount: t.mentionCount,
                    toggleCollapsed: a,
                    showCollapseButton: !0,
                    channelState: t,
                    getNumUnreadChannels: e.getNumUnreadChannels,
                    children: (0, i.jsxs)(c.ButtonGroup, {
                        size: "sm",
                        className: C.GC,
                        children: [(0, i.jsx)(_.A, { channel: o }), (0, i.jsx)(b, { ...e })],
                    }),
                }),
                children: t.collapsed
                    ? null
                    : "messages" === t.type
                      ? (0, i.jsx)(f.A, { channel: t, channelRecord: o, gotoChannel: E })
                      : "forum" === t.type
                        ? (0, i.jsx)(g.A, { channel: t, channelRecord: o, deleteChannel: l })
                        : null,
            }),
        });
    });
function b(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: l } = e,
        r = (0, a.A)() && null != t.guildId;
    return (0, i.jsx)(o.m_, {
        text: r ? E.intl.string(E.t["5lLMhM"]) : E.intl.string(E.t.e6RscS),
        children: (0, i.jsx)(c.K0, {
            variant: "secondary",
            "aria-label": r ? E.intl.string(E.t["5lLMhM"]) : E.intl.string(E.t.e6RscS),
            size: "sm",
            icon: r ? c.iA$ : c.A9s,
            onClick: function () {
                r && null != t.guildId ? s(t.guildId) : n(t),
                    (0, h.zV)(x.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: l() - 1,
                    });
            },
        }),
    });
}
