"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    s = n(64700),
    l = n(4208),
    r = n(311283),
    a = n(311907),
    o = n(435371),
    c = n(397927),
    d = n(73153),
    u = n(334738),
    h = n(58149),
    A = n(976860),
    m = n(734057),
    p = n(510560),
    g = n(572448),
    _ = n(955454),
    f = n(502754),
    x = n(652215),
    C = n(985018),
    E = n(368897);
let I = s.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            r = s.useRef(null),
            [[a, o], d] = s.useState([0, 0]),
            u = t.deleted && a > 0;
        if (t.deleted && 0 === a && null != r.current) {
            let e = r.current.offsetHeight,
                t = r.current.offsetTop,
                n = r.current.parentElement.scrollTop,
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
                    return u ? ((t = a), (n = o) + (t - n) * e) : "auto";
                }),
            };
        return (0, i.jsx)(l.animated.div, { ref: r, style: m, children: (0, i.jsx)(N, { ...e }) });
    }),
    N = s.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: l, toggle: r } = e,
            o = (0, a.bG)([m.A], () => m.A.getChannel(t.channelId));
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
        let C = (e, i) => {
            (0, h.zV)(x.HAw.INBOX_CHANNEL_CLICKED, { channel_id: t.channelId, guild_id: t.guildId });
            let s = i ?? t.oldestUnreadMessageId;
            (0, A.pX)(x.BVt.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : s)), n(e);
        };
        return (0, i.jsx)("div", {
            className: E.Ix,
            children: (0, i.jsx)(c.Fmo, {
                component: (0, i.jsx)(g.A, {
                    channel: o,
                    gotoChannel: C,
                    mentionCount: t.mentionCount,
                    toggleCollapsed: r,
                    showCollapseButton: !0,
                    channelState: t,
                    getNumUnreadChannels: e.getNumUnreadChannels,
                    children: (0, i.jsxs)(c.ButtonGroup, {
                        size: "sm",
                        className: E.GC,
                        children: [(0, i.jsx)(p.A, { channel: o }), (0, i.jsx)(b, { ...e })],
                    }),
                }),
                children: t.collapsed
                    ? null
                    : "messages" === t.type
                      ? (0, i.jsx)(f.A, { channel: t, channelRecord: o, gotoChannel: C })
                      : "forum" === t.type
                        ? (0, i.jsx)(_.A, { channel: t, channelRecord: o, deleteChannel: l })
                        : null,
            }),
        });
    });
function b(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: l } = e,
        a = (0, r.A)() && null != t.guildId;
    return (0, i.jsx)(o.m_, {
        text: a ? C.intl.string(C.t["5lLMhM"]) : C.intl.string(C.t.e6RscS),
        children: (0, i.jsx)(c.K0, {
            variant: "secondary",
            "aria-label": a ? C.intl.string(C.t["5lLMhM"]) : C.intl.string(C.t.e6RscS),
            size: "sm",
            icon: a ? c.iA$ : c.A9s,
            onClick: function () {
                a && null != t.guildId ? s(t.guildId) : n(t),
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
