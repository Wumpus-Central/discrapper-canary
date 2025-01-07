n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(666912),
    s = n(442837),
    c = n(481060),
    u = n(570140),
    d = n(45114),
    m = n(367907),
    h = n(717680),
    f = n(703656),
    p = n(592125),
    _ = n(259580),
    g = n(617379),
    E = n(324081),
    C = n(305248),
    I = n(520116),
    x = n(981631),
    N = n(388032),
    v = n(668496);
let T = r.memo(function (e) {
    let { channel: t, deleteChannel: n } = e,
        l = r.useRef(null),
        [[a, s], u] = r.useState([0, 0]),
        d = t.deleted && a > 0;
    if (t.deleted && 0 === a && null != l.current) {
        let e = l.current.offsetHeight,
            t = l.current.offsetTop,
            n = l.current.parentElement.scrollTop,
            i = n > t ? e - (n - t) : e;
        u([e, e - i]);
    }
    let { opacity: m, size: h } = (0, c.useSpring)(
            {
                config: {
                    clamp: !0,
                    friction: 18,
                    tension: 200
                },
                opacity: d ? 0 : 1,
                size: d ? 0 : 1,
                onRest: () => {
                    n(t.channelId);
                }
            },
            'animate-always'
        ),
        f = {
            opacity: m,
            height: h.to((e) =>
                d
                    ? (function (e, t, n) {
                          return t + (e - t) * n;
                      })(a, s, e)
                    : 'auto'
            )
        };
    return (0, i.jsx)(o.animated.div, {
        ref: l,
        style: f,
        children: (0, i.jsx)(S, { ...e })
    });
});
t.Z = T;
let S = r.memo(function (e) {
    let { channel: t, onJump: n, deleteChannel: l, toggle: a } = e,
        o = (0, s.e7)([p.Z], () => p.Z.getChannel(t.channelId));
    if (
        (r.useEffect(() => {
            null != o &&
                t.isFullyLoaded &&
                !t.hasError &&
                !t.collapsed &&
                'messages' === t.type &&
                0 === t.messages.length &&
                u.Z.wait(() => {
                    (0, d.In)(t.channelId, !0), l(t.channelId);
                });
        }),
        null == o || !t.hasLoadedAnything)
    )
        return null;
    let h = (e, i) => {
        (0, m.yw)(x.rMx.INBOX_CHANNEL_CLICKED, {
            channel_id: t.channelId,
            guild_id: t.guildId
        });
        let r = null != i ? i : t.oldestUnreadMessageId;
        (0, f.uL)(x.Z5c.CHANNEL(t.guildId, t.channelId, 'forum' === t.type ? null : r)), n(e);
    };
    return (0, i.jsx)('div', {
        className: v.channel,
        children: (0, i.jsx)(c.HeadingLevel, {
            component: (0, i.jsxs)(E.Z, {
                channel: o,
                gotoChannel: h,
                mentionCount: t.mentionCount,
                toggleCollapsed: a,
                channelState: t,
                children: [(0, i.jsx)(g.Z, { channel: o }), (0, i.jsx)(A, { ...e }), 'nsfw' === t.type ? null : (0, i.jsx)(b, { ...e })]
            }),
            children: t.collapsed
                ? null
                : 'messages' === t.type
                  ? (0, i.jsx)(I.Z, {
                        channel: t,
                        channelRecord: o,
                        gotoChannel: h
                    })
                  : 'forum' === t.type
                    ? (0, i.jsx)(C.Z, {
                          channel: t,
                          channelRecord: o,
                          deleteChannel: l
                      })
                    : null
        })
    });
});
function A(e) {
    let { channel: t, markChannelRead: n, markGuildRead: r, getNumUnreadChannels: l } = e,
        a = (0, h.Z)() && null != t.guildId;
    return (0, i.jsx)(c.CircleIconButton, {
        className: v.markReadButton,
        tooltip: a ? N.intl.string(N.t['5lLMhI']) : N.intl.string(N.t.e6RscX),
        color: c.CircleIconButtonColors.TERTIARY,
        icon: a
            ? (0, i.jsx)(c.DoubleCheckmarkIcon, {
                  size: 'xs',
                  color: 'currentColor'
              })
            : (0, i.jsx)(c.CheckmarkLargeIcon, {
                  size: 'xs',
                  color: 'currentColor'
              }),
        onClick: function () {
            a && null != t.guildId ? r(t.guildId) : n(t),
                (0, m.yw)(x.rMx.INBOX_CHANNEL_ACKED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    marked_all_channels_as_read: !1,
                    num_unread_channels_remaining: l() - 1
                });
        }
    });
}
function b(e) {
    let { channel: t, toggle: n, getNumUnreadChannels: r } = e;
    function l() {
        n(t),
            (0, m.yw)(x.rMx.INBOX_CHANNEL_COLLAPSED, {
                channel_id: t.channelId,
                guild_id: t.guildId,
                num_unread_channels_remaining: r(),
                is_now_collapsed: !t.collapsed
            });
    }
    return (0, i.jsx)(c.Tooltip, {
        text: N.intl.string(N.t.iTcumZ),
        children: (e) =>
            (0, i.jsx)(c.Clickable, {
                ...e,
                className: a()(v.collapseButton, { [v.collapsed]: t.collapsed }),
                onClick: l,
                children: (0, i.jsx)(_.Z, {
                    width: 16,
                    height: 16
                })
            })
    });
}
