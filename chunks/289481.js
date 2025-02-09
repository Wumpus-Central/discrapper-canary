n.d(t, { Z: () => S }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(642128),
    o = n(442837),
    c = n(481060),
    d = n(570140),
    u = n(45114),
    m = n(367907),
    _ = n(717680),
    h = n(703656),
    p = n(592125),
    g = n(259580),
    f = n(617379),
    x = n(324081),
    C = n(305248),
    v = n(520116),
    E = n(981631),
    I = n(388032),
    N = n(752579);
let S = l.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            a = l.useRef(null),
            [[r, o], d] = l.useState([0, 0]),
            u = t.deleted && r > 0;
        if (t.deleted && 0 === r && null != a.current) {
            let e = a.current.offsetHeight,
                t = a.current.offsetTop,
                n = a.current.parentElement.scrollTop,
                i = n > t ? e - (n - t) : e;
            d([e, e - i]);
        }
        let { opacity: m, size: _ } = (0, c.q_F)(
                {
                    config: {
                        clamp: !0,
                        friction: 18,
                        tension: 200
                    },
                    opacity: u ? 0 : 1,
                    size: u ? 0 : 1,
                    onRest: () => {
                        n(t.channelId);
                    }
                },
                'animate-always'
            ),
            h = {
                opacity: m,
                height: _.to((e) => {
                    var t, n;
                    return u ? ((t = r), (n = o) + (t - n) * e) : 'auto';
                })
            };
        return (0, i.jsx)(s.animated.div, {
            ref: a,
            style: h,
            children: (0, i.jsx)(T, { ...e })
        });
    }),
    T = l.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: a, toggle: r } = e,
            s = (0, o.e7)([p.Z], () => p.Z.getChannel(t.channelId));
        if (
            (l.useEffect(() => {
                null == s ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    'messages' !== t.type ||
                    0 !== t.messages.length ||
                    d.Z.wait(() => {
                        (0, u.In)(t.channelId, !0), a(t.channelId);
                    });
            }),
            null == s || !t.hasLoadedAnything)
        )
            return null;
        let _ = (e, i) => {
            (0, m.yw)(E.rMx.INBOX_CHANNEL_CLICKED, {
                channel_id: t.channelId,
                guild_id: t.guildId
            });
            let l = null != i ? i : t.oldestUnreadMessageId;
            (0, h.uL)(E.Z5c.CHANNEL(t.guildId, t.channelId, 'forum' === t.type ? null : l)), n(e);
        };
        return (0, i.jsx)('div', {
            className: N.channel,
            children: (0, i.jsx)(c.y5t, {
                component: (0, i.jsxs)(x.Z, {
                    channel: s,
                    gotoChannel: _,
                    mentionCount: t.mentionCount,
                    toggleCollapsed: r,
                    channelState: t,
                    children: [(0, i.jsx)(f.Z, { channel: s }), (0, i.jsx)(b, { ...e }), 'nsfw' === t.type ? null : (0, i.jsx)(A, { ...e })]
                }),
                children: t.collapsed
                    ? null
                    : 'messages' === t.type
                      ? (0, i.jsx)(v.Z, {
                            channel: t,
                            channelRecord: s,
                            gotoChannel: _
                        })
                      : 'forum' === t.type
                        ? (0, i.jsx)(C.Z, {
                              channel: t,
                              channelRecord: s,
                              deleteChannel: a
                          })
                        : null
            })
        });
    });
function b(e) {
    let { channel: t, markChannelRead: n, markGuildRead: l, getNumUnreadChannels: a } = e,
        r = (0, _.Z)() && null != t.guildId;
    return (0, i.jsx)(c.M0o, {
        className: N.markReadButton,
        tooltip: r ? I.intl.string(I.t['5lLMhI']) : I.intl.string(I.t.e6RscX),
        color: c.YX$.TERTIARY,
        icon: r
            ? (0, i.jsx)(c.W6s, {
                  size: 'xs',
                  color: 'currentColor'
              })
            : (0, i.jsx)(c.dz2, {
                  size: 'xs',
                  color: 'currentColor'
              }),
        onClick: function () {
            r && null != t.guildId ? l(t.guildId) : n(t),
                (0, m.yw)(E.rMx.INBOX_CHANNEL_ACKED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    marked_all_channels_as_read: !1,
                    num_unread_channels_remaining: a() - 1
                });
        }
    });
}
function A(e) {
    let { channel: t, toggle: n, getNumUnreadChannels: l } = e;
    function a() {
        n(t),
            (0, m.yw)(E.rMx.INBOX_CHANNEL_COLLAPSED, {
                channel_id: t.channelId,
                guild_id: t.guildId,
                num_unread_channels_remaining: l(),
                is_now_collapsed: !t.collapsed
            });
    }
    return (0, i.jsx)(c.ua7, {
        text: I.intl.string(I.t.iTcumZ),
        children: (e) =>
            (0, i.jsx)(c.P3F, {
                ...e,
                className: r()(N.collapseButton, { [N.collapsed]: t.collapsed }),
                onClick: a,
                children: (0, i.jsx)(g.Z, {
                    width: 16,
                    height: 16
                })
            })
    });
}
