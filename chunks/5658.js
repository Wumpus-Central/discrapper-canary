n.d(t, {
    A: () => x,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(108531),
    a = n(311283),
    s = n(311907),
    o = n(435371),
    c = n(397927),
    u = n(73153),
    d = n(334738),
    f = n(58149),
    p = n(976860),
    h = n(734057),
    b = n(510560),
    g = n(572448),
    m = n(955454),
    A = n(502754),
    y = n(652215),
    O = n(985018),
    j = n(391900);

function v(e) {
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
let x = l.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            a = l.useRef(null),
            [[s, o], u] = l.useState([0, 0]),
            d = t.deleted && s > 0;
        if (t.deleted && 0 === s && null != a.current) {
            let e = a.current.offsetHeight,
                t = a.current.offsetTop,
                n = a.current.parentElement.scrollTop,
                r = n > t ? e - (n - t) : e;
            u([e, e - r]);
        }
        let { opacity: f, size: p } = (0, c.zhh)(
                {
                    config: {
                        clamp: !0,
                        friction: 18,
                        tension: 200,
                    },
                    opacity: +!d,
                    size: +!d,
                    onRest: () => {
                        n(t.channelId);
                    },
                },
                "animate-always",
            ),
            h = {
                opacity: f,
                height: p.to((e) => {
                    var t, n;
                    return d ? ((t = s), (n = o) + (t - n) * e) : "auto";
                }),
            };
        return (0, r.jsx)(i.animated.div, {
            ref: a,
            style: h,
            children: (0, r.jsx)(E, v({}, e)),
        });
    }),
    E = l.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: i, toggle: a } = e,
            o = (0, s.bG)([h.A], () => h.A.getChannel(t.channelId));
        if (
            (l.useEffect(() => {
                null == o ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    u.h.wait(() => {
                        (0, d.ack)(
                            t.channelId,
                            {
                                section: y.JJy.INBOX,
                                object: y.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: y.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            !0,
                        ),
                            i(t.channelId);
                    });
            }),
            null == o || !t.hasLoadedAnything)
        )
            return null;
        let O = (e, r) => {
            (0, f.zV)(y.HAw.INBOX_CHANNEL_CLICKED, {
                channel_id: t.channelId,
                guild_id: t.guildId,
            });
            let l = null != r ? r : t.oldestUnreadMessageId;
            (0, p.pX)(y.BVt.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : l)), n(e);
        };
        return (0, r.jsx)("div", {
            className: j.Ix,
            children: (0, r.jsx)(c.Fmo, {
                component: (0, r.jsx)(g.A, {
                    channel: o,
                    gotoChannel: O,
                    mentionCount: t.mentionCount,
                    toggleCollapsed: a,
                    showCollapseButton: !0,
                    channelState: t,
                    getNumUnreadChannels: e.getNumUnreadChannels,
                    children: (0, r.jsxs)(c.ButtonGroup, {
                        size: "sm",
                        className: j.GC,
                        children: [
                            (0, r.jsx)(b.A, {
                                channel: o,
                            }),
                            (0, r.jsx)(_, v({}, e)),
                        ],
                    }),
                }),
                children: t.collapsed
                    ? null
                    : "messages" === t.type
                      ? (0, r.jsx)(A.A, {
                            channel: t,
                            channelRecord: o,
                            gotoChannel: O,
                        })
                      : "forum" === t.type
                        ? (0, r.jsx)(m.A, {
                              channel: t,
                              channelRecord: o,
                              deleteChannel: i,
                          })
                        : null,
            }),
        });
    });

function _(e) {
    let { channel: t, markChannelRead: n, markGuildRead: l, getNumUnreadChannels: i } = e,
        s = (0, a.A)() && null != t.guildId;
    return (0, r.jsx)(o.m_, {
        text: s ? O.intl.string(O.t["5lLMhM"]) : O.intl.string(O.t.e6RscS),
        children: (0, r.jsx)(c.K0, {
            variant: "secondary",
            "aria-label": s ? O.intl.string(O.t["5lLMhM"]) : O.intl.string(O.t.e6RscS),
            size: "sm",
            icon: s ? c.iA$ : c.A9s,
            onClick: function () {
                s && null != t.guildId ? l(t.guildId) : n(t),
                    (0, f.zV)(y.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: i() - 1,
                    });
            },
        }),
    });
}
