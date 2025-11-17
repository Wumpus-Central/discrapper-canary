n.d(t, { Z: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(636606),
    s = n(893999),
    c = n(442837),
    u = n(28664),
    d = n(481060),
    p = n(570140),
    f = n(45114),
    h = n(367907),
    g = n(703656),
    m = n(592125),
    b = n(259580),
    _ = n(617379),
    y = n(324081),
    O = n(305248),
    v = n(520116),
    j = n(981631),
    x = n(388032),
    C = n(550116);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let S = i.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            l = i.useRef(null),
            [[o, s], c] = i.useState([0, 0]),
            u = t.deleted && o > 0;
        if (t.deleted && 0 === o && null != l.current) {
            let e = l.current.offsetHeight,
                t = l.current.offsetTop,
                n = l.current.parentElement.scrollTop,
                r = n > t ? e - (n - t) : e;
            c([e, e - r]);
        }
        let { opacity: p, size: f } = (0, d.q_F)(
                {
                    config: {
                        clamp: !0,
                        friction: 18,
                        tension: 200,
                    },
                    opacity: +!u,
                    size: +!u,
                    onRest: () => {
                        n(t.channelId);
                    },
                },
                "animate-always",
            ),
            h = {
                opacity: p,
                height: f.to((e) => {
                    var t, n;
                    return u ? ((t = o), (n = s) + (t - n) * e) : "auto";
                }),
            };
        return (0, r.jsx)(a.animated.div, {
            ref: l,
            style: h,
            children: (0, r.jsx)(I, E({}, e)),
        });
    }),
    I = i.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: l, toggle: o } = e,
            a = (0, c.e7)([m.Z], () => m.Z.getChannel(t.channelId));
        if (
            (i.useEffect(() => {
                null == a ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    p.Z.wait(() => {
                        (0, f.ack)(
                            t.channelId,
                            {
                                section: j.jXE.INBOX,
                                object: j.qAy.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: j.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            !0,
                        ),
                            l(t.channelId);
                    });
            }),
            null == a || !t.hasLoadedAnything)
        )
            return null;
        let s = (e, r) => {
            (0, h.yw)(j.rMx.INBOX_CHANNEL_CLICKED, {
                channel_id: t.channelId,
                guild_id: t.guildId,
            });
            let i = null != r ? r : t.oldestUnreadMessageId;
            (0, g.uL)(j.Z5c.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : i)), n(e);
        };
        return (0, r.jsx)("div", {
            className: C.channel,
            children: (0, r.jsx)(d.y5t, {
                component: (0, r.jsxs)(y.Z, {
                    channel: a,
                    gotoChannel: s,
                    mentionCount: t.mentionCount,
                    toggleCollapsed: o,
                    channelState: t,
                    children: [
                        (0, r.jsx)(_.Z, { channel: a }),
                        (0, r.jsx)(P, E({}, e)),
                        "nsfw" === t.type ? null : (0, r.jsx)(N, E({}, e)),
                    ],
                }),
                children: t.collapsed
                    ? null
                    : "messages" === t.type
                      ? (0, r.jsx)(v.Z, {
                            channel: t,
                            channelRecord: a,
                            gotoChannel: s,
                        })
                      : "forum" === t.type
                        ? (0, r.jsx)(O.Z, {
                              channel: t,
                              channelRecord: a,
                              deleteChannel: l,
                          })
                        : null,
            }),
        });
    });
function P(e) {
    let { channel: t, markChannelRead: n, markGuildRead: i, getNumUnreadChannels: l } = e,
        o = (0, s.Z)() && null != t.guildId;
    return (0, r.jsx)(d.M0o, {
        className: C.markReadButton,
        tooltip: o ? x.intl.string(x.t["5lLMhM"]) : x.intl.string(x.t.e6RscS),
        color: d.YX$.TERTIARY,
        icon: o
            ? (0, r.jsx)(d.W6s, {
                  size: "xs",
                  color: "currentColor",
              })
            : (0, r.jsx)(d.dz2, {
                  size: "xs",
                  color: "currentColor",
              }),
        onClick: function () {
            o && null != t.guildId ? i(t.guildId) : n(t),
                (0, h.yw)(j.rMx.INBOX_CHANNEL_ACKED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    marked_all_channels_as_read: !1,
                    num_unread_channels_remaining: l() - 1,
                });
        },
    });
}
function N(e) {
    let { channel: t, toggle: n, getNumUnreadChannels: i } = e;
    return (0, r.jsx)(u.u, {
        text: x.intl.string(x.t.iTcuma),
        children: (0, r.jsx)(d.P3F, {
            className: o()(C.collapseButton, { [C.collapsed]: t.collapsed }),
            onClick: function () {
                n(t),
                    (0, h.yw)(j.rMx.INBOX_CHANNEL_COLLAPSED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        num_unread_channels_remaining: i(),
                        is_now_collapsed: !t.collapsed,
                    });
            },
            children: (0, r.jsx)(b.Z, {
                width: 16,
                height: 16,
            }),
        }),
    });
}
