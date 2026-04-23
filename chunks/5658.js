n.d(t, { A: () => T });
var s = n(627968),
    a = n(64700),
    l = n(419354),
    i = n(311283),
    r = n(311907),
    o = n(990078),
    d = n(717421),
    c = n(707554),
    u = n(825484),
    h = n(408278),
    _ = n(921457),
    A = n(933832),
    m = n(73153),
    g = n(334738),
    f = n(58149),
    E = n(976860),
    N = n(734057),
    p = n(510560),
    I = n(572448),
    C = n(955454),
    S = n(502754),
    x = n(652215),
    R = n(985018),
    y = n(201489);
let T = a.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            i = a.useRef(null),
            [[r, o], c] = a.useState([0, 0]),
            u = t.deleted && r > 0;
        a.useLayoutEffect(() => {
            if (!t.deleted || 0 !== r || null == i.current) return;
            let e = i.current,
                s = e.offsetHeight;
            if (s <= 0) return void n(t.channelId);
            let a = e.offsetTop,
                l = e.parentElement.scrollTop,
                o = l > a ? s - (l - a) : s;
            c([s, s - o]);
        }, [t.deleted, t.channelId, n, r]);
        let { opacity: h, size: _ } = (0, d.z)(
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
            A = {
                opacity: h,
                height: _.to((e) => {
                    var t, n;
                    return u ? ((t = r), (n = o) + (t - n) * e) : "auto";
                }),
            };
        return (0, s.jsx)(l.animated.div, { ref: i, style: A, children: (0, s.jsx)(j, { ...e }) });
    }),
    j = a.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: l, toggle: i } = e,
            o = (0, r.bG)([N.A], () => N.A.getChannel(t.channelId));
        if (
            (a.useEffect(() => {
                null == o ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    m.h.wait(() => {
                        (0, g.ack)(
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
        let d = (e, s) => {
            (0, f.zV)(x.HAw.INBOX_CHANNEL_CLICKED, { channel_id: t.channelId, guild_id: t.guildId });
            let a = s ?? t.oldestUnreadMessageId;
            (0, E.pX)(x.BVt.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : a)), n(e);
        };
        return (0, s.jsx)("div", {
            className: y.Ix,
            children: (0, s.jsx)(c.F, {
                component: (0, s.jsx)(I.A, {
                    channel: o,
                    gotoChannel: d,
                    mentionCount: t.mentionCount,
                    toggleCollapsed: i,
                    showCollapseButton: !0,
                    channelState: t,
                    getNumUnreadChannels: e.getNumUnreadChannels,
                    children: (0, s.jsxs)(u.e, {
                        size: "sm",
                        className: y.GC,
                        children: [(0, s.jsx)(p.A, { channel: o }), (0, s.jsx)(b, { ...e })],
                    }),
                }),
                children: t.collapsed
                    ? null
                    : "messages" === t.type
                      ? (0, s.jsx)(S.A, { channel: t, channelRecord: o, gotoChannel: d })
                      : "forum" === t.type
                        ? (0, s.jsx)(C.A, { channel: t, channelRecord: o, deleteChannel: l })
                        : null,
            }),
        });
    });
function b(e) {
    let { channel: t, markChannelRead: n, markGuildRead: a, getNumUnreadChannels: l } = e,
        r = (0, i.A)() && null != t.guildId;
    return (0, s.jsx)(o.m, {
        text: r ? R.intl.string(R.t["5lLMhM"]) : R.intl.string(R.t.e6RscS),
        children: (0, s.jsx)(h.K, {
            variant: "secondary",
            "aria-label": r ? R.intl.string(R.t["5lLMhM"]) : R.intl.string(R.t.e6RscS),
            size: "sm",
            icon: r ? _.i : A.A,
            onClick: function () {
                r && null != t.guildId ? a(t.guildId) : n(t),
                    (0, f.zV)(x.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: l() - 1,
                    });
            },
        }),
    });
}
