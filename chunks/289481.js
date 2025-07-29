(n.d(t, { Z: () => S }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(564854),
    s = n(893999),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    h = n(45114),
    p = n(367907),
    f = n(703656),
    g = n(592125),
    m = n(259580),
    b = n(617379),
    _ = n(324081),
    O = n(305248),
    y = n(520116),
    C = n(981631),
    v = n(388032),
    j = n(28007);
function E(e) {
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
}
let S = i.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            l = i.useRef(null),
            [[o, s], c] = i.useState([0, 0]),
            d = t.deleted && o > 0;
        if (t.deleted && 0 === o && null != l.current) {
            let e = l.current.offsetHeight,
                t = l.current.offsetTop,
                n = l.current.parentElement.scrollTop,
                r = n > t ? e - (n - t) : e;
            c([e, e - r]);
        }
        let { opacity: h, size: p } = (0, u.q_F)(
                {
                    config: {
                        clamp: !0,
                        friction: 18,
                        tension: 200
                    },
                    opacity: +!d,
                    size: +!d,
                    onRest: () => {
                        n(t.channelId);
                    }
                },
                'animate-always'
            ),
            f = {
                opacity: h,
                height: p.to((e) => {
                    var t, n;
                    return d ? ((t = o), (n = s) + (t - n) * e) : 'auto';
                })
            };
        return (0, r.jsx)(a.animated.div, {
            ref: l,
            style: f,
            children: (0, r.jsx)(x, E({}, e))
        });
    }),
    x = i.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: l, toggle: o } = e,
            a = (0, c.e7)([g.Z], () => g.Z.getChannel(t.channelId));
        if (
            (i.useEffect(() => {
                null == a ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    'messages' !== t.type ||
                    0 !== t.messages.length ||
                    d.Z.wait(() => {
                        ((0, h.In)(
                            t.channelId,
                            {
                                section: C.jXE.INBOX,
                                object: C.qAy.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: C.Qqv.ACK_AUTOMATIC
                            },
                            !0
                        ),
                            l(t.channelId));
                    });
            }),
            null == a || !t.hasLoadedAnything)
        )
            return null;
        let s = (e, r) => {
            (0, p.yw)(C.rMx.INBOX_CHANNEL_CLICKED, {
                channel_id: t.channelId,
                guild_id: t.guildId
            });
            let i = null != r ? r : t.oldestUnreadMessageId;
            ((0, f.uL)(C.Z5c.CHANNEL(t.guildId, t.channelId, 'forum' === t.type ? null : i)), n(e));
        };
        return (0, r.jsx)('div', {
            className: j.channel,
            children: (0, r.jsx)(u.y5t, {
                component: (0, r.jsxs)(_.Z, {
                    channel: a,
                    gotoChannel: s,
                    mentionCount: t.mentionCount,
                    toggleCollapsed: o,
                    channelState: t,
                    children: [(0, r.jsx)(b.Z, { channel: a }), (0, r.jsx)(I, E({}, e)), 'nsfw' === t.type ? null : (0, r.jsx)(P, E({}, e))]
                }),
                children: t.collapsed
                    ? null
                    : 'messages' === t.type
                      ? (0, r.jsx)(y.Z, {
                            channel: t,
                            channelRecord: a,
                            gotoChannel: s
                        })
                      : 'forum' === t.type
                        ? (0, r.jsx)(O.Z, {
                              channel: t,
                              channelRecord: a,
                              deleteChannel: l
                          })
                        : null
            })
        });
    });
function I(e) {
    let { channel: t, markChannelRead: n, markGuildRead: i, getNumUnreadChannels: l } = e,
        o = (0, s.Z)() && null != t.guildId;
    return (0, r.jsx)(u.M0o, {
        className: j.markReadButton,
        tooltip: o ? v.intl.string(v.t['5lLMhI']) : v.intl.string(v.t.e6RscX),
        color: u.YX$.TERTIARY,
        icon: o
            ? (0, r.jsx)(u.W6s, {
                  size: 'xs',
                  color: 'currentColor'
              })
            : (0, r.jsx)(u.dz2, {
                  size: 'xs',
                  color: 'currentColor'
              }),
        onClick: function () {
            (o && null != t.guildId ? i(t.guildId) : n(t),
                (0, p.yw)(C.rMx.INBOX_CHANNEL_ACKED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    marked_all_channels_as_read: !1,
                    num_unread_channels_remaining: l() - 1
                }));
        }
    });
}
function P(e) {
    let { channel: t, toggle: n, getNumUnreadChannels: i } = e;
    function l() {
        (n(t),
            (0, p.yw)(C.rMx.INBOX_CHANNEL_COLLAPSED, {
                channel_id: t.channelId,
                guild_id: t.guildId,
                num_unread_channels_remaining: i(),
                is_now_collapsed: !t.collapsed
            }));
    }
    return (0, r.jsx)(u.ua7, {
        text: v.intl.string(v.t.iTcumZ),
        children: (e) => {
            var n, i;
            return (0, r.jsx)(
                u.P3F,
                ((n = E({}, e)),
                (i = i =
                    {
                        className: o()(j.collapseButton, { [j.collapsed]: t.collapsed }),
                        onClick: l,
                        children: (0, r.jsx)(m.Z, {
                            width: 16,
                            height: 16
                        })
                    }),
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
    });
}
