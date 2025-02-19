n.d(t, { Z: () => N }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(642128),
    s = n(442837),
    c = n(481060),
    d = n(570140),
    u = n(45114),
    p = n(367907),
    m = n(717680),
    f = n(703656),
    h = n(592125),
    g = n(259580),
    _ = n(617379),
    b = n(324081),
    v = n(305248),
    y = n(520116),
    x = n(981631),
    O = n(388032),
    E = n(990991);
function j(e) {
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
}
let N = i.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            a = i.useRef(null),
            [[o, s], d] = i.useState([0, 0]),
            u = t.deleted && o > 0;
        if (t.deleted && 0 === o && null != a.current) {
            let e = a.current.offsetHeight,
                t = a.current.offsetTop,
                n = a.current.parentElement.scrollTop,
                r = n > t ? e - (n - t) : e;
            d([e, e - r]);
        }
        let { opacity: p, size: m } = (0, c.q_F)(
                {
                    config: {
                        clamp: !0,
                        friction: 18,
                        tension: 200
                    },
                    opacity: +!u,
                    size: +!u,
                    onRest: () => {
                        n(t.channelId);
                    }
                },
                'animate-always'
            ),
            f = {
                opacity: p,
                height: m.to((e) => {
                    var t, n;
                    return u ? ((t = o), (n = s) + (t - n) * e) : 'auto';
                })
            };
        return (0, r.jsx)(l.animated.div, {
            ref: a,
            style: f,
            children: (0, r.jsx)(C, j({}, e))
        });
    }),
    C = i.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: a, toggle: o } = e,
            l = (0, s.e7)([h.Z], () => h.Z.getChannel(t.channelId));
        if (
            (i.useEffect(() => {
                null == l ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    'messages' !== t.type ||
                    0 !== t.messages.length ||
                    d.Z.wait(() => {
                        (0, u.In)(t.channelId, !0), a(t.channelId);
                    });
            }),
            null == l || !t.hasLoadedAnything)
        )
            return null;
        let m = (e, r) => {
            (0, p.yw)(x.rMx.INBOX_CHANNEL_CLICKED, {
                channel_id: t.channelId,
                guild_id: t.guildId
            });
            let i = null != r ? r : t.oldestUnreadMessageId;
            (0, f.uL)(x.Z5c.CHANNEL(t.guildId, t.channelId, 'forum' === t.type ? null : i)), n(e);
        };
        return (0, r.jsx)('div', {
            className: E.channel,
            children: (0, r.jsx)(c.y5t, {
                component: (0, r.jsxs)(b.Z, {
                    channel: l,
                    gotoChannel: m,
                    mentionCount: t.mentionCount,
                    toggleCollapsed: o,
                    channelState: t,
                    children: [(0, r.jsx)(_.Z, { channel: l }), (0, r.jsx)(I, j({}, e)), 'nsfw' === t.type ? null : (0, r.jsx)(S, j({}, e))]
                }),
                children: t.collapsed
                    ? null
                    : 'messages' === t.type
                      ? (0, r.jsx)(y.Z, {
                            channel: t,
                            channelRecord: l,
                            gotoChannel: m
                        })
                      : 'forum' === t.type
                        ? (0, r.jsx)(v.Z, {
                              channel: t,
                              channelRecord: l,
                              deleteChannel: a
                          })
                        : null
            })
        });
    });
function I(e) {
    let { channel: t, markChannelRead: n, markGuildRead: i, getNumUnreadChannels: a } = e,
        o = (0, m.Z)() && null != t.guildId;
    return (0, r.jsx)(c.M0o, {
        className: E.markReadButton,
        tooltip: o ? O.NW.string(O.t['5lLMhI']) : O.NW.string(O.t.e6RscX),
        color: c.YX$.TERTIARY,
        icon: o
            ? (0, r.jsx)(c.W6s, {
                  size: 'xs',
                  color: 'currentColor'
              })
            : (0, r.jsx)(c.dz2, {
                  size: 'xs',
                  color: 'currentColor'
              }),
        onClick: function () {
            o && null != t.guildId ? i(t.guildId) : n(t),
                (0, p.yw)(x.rMx.INBOX_CHANNEL_ACKED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    marked_all_channels_as_read: !1,
                    num_unread_channels_remaining: a() - 1
                });
        }
    });
}
function S(e) {
    let { channel: t, toggle: n, getNumUnreadChannels: i } = e;
    function a() {
        n(t),
            (0, p.yw)(x.rMx.INBOX_CHANNEL_COLLAPSED, {
                channel_id: t.channelId,
                guild_id: t.guildId,
                num_unread_channels_remaining: i(),
                is_now_collapsed: !t.collapsed
            });
    }
    return (0, r.jsx)(c.ua7, {
        text: O.NW.string(O.t.iTcumZ),
        children: (e) => {
            var n, i;
            return (0, r.jsx)(
                c.P3F,
                ((n = j({}, e)),
                (i = i =
                    {
                        className: o()(E.collapseButton, { [E.collapsed]: t.collapsed }),
                        onClick: a,
                        children: (0, r.jsx)(g.Z, {
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
