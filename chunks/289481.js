n.d(t, { Z: () => C }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(81239),
    a = n(893999),
    o = n(442837),
    s = n(681715),
    c = n(481060),
    u = n(570140),
    d = n(45114),
    p = n(367907),
    f = n(703656),
    h = n(592125),
    g = n(617379),
    m = n(324081),
    b = n(305248),
    y = n(520116),
    v = n(981631),
    O = n(388032),
    j = n(904460);
function x(e) {
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
let C = i.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            a = i.useRef(null),
            [[o, s], u] = i.useState([0, 0]),
            d = t.deleted && o > 0;
        if (t.deleted && 0 === o && null != a.current) {
            let e = a.current.offsetHeight,
                t = a.current.offsetTop,
                n = a.current.parentElement.scrollTop,
                r = n > t ? e - (n - t) : e;
            u([e, e - r]);
        }
        let { opacity: p, size: f } = (0, c.q_F)(
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
                opacity: p,
                height: f.to((e) => {
                    var t, n;
                    return d ? ((t = o), (n = s) + (t - n) * e) : "auto";
                }),
            };
        return (0, r.jsx)(l.animated.div, {
            ref: a,
            style: h,
            children: (0, r.jsx)(E, x({}, e)),
        });
    }),
    E = i.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: l, toggle: a } = e,
            s = (0, o.e7)([h.Z], () => h.Z.getChannel(t.channelId));
        if (
            (i.useEffect(() => {
                null == s ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    u.Z.wait(() => {
                        (0, d.ack)(
                            t.channelId,
                            {
                                section: v.jXE.INBOX,
                                object: v.qAy.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: v.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            !0,
                        ),
                            l(t.channelId);
                    });
            }),
            null == s || !t.hasLoadedAnything)
        )
            return null;
        let O = (e, r) => {
            (0, p.yw)(v.rMx.INBOX_CHANNEL_CLICKED, {
                channel_id: t.channelId,
                guild_id: t.guildId,
            });
            let i = null != r ? r : t.oldestUnreadMessageId;
            (0, f.uL)(v.Z5c.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : i)), n(e);
        };
        return (0, r.jsx)("div", {
            className: j.channel,
            children: (0, r.jsx)(c.y5t, {
                component: (0, r.jsx)(m.Z, {
                    channel: s,
                    gotoChannel: O,
                    mentionCount: t.mentionCount,
                    toggleCollapsed: a,
                    showCollapseButton: !0,
                    channelState: t,
                    getNumUnreadChannels: e.getNumUnreadChannels,
                    children: (0, r.jsxs)(c.ButtonGroup, {
                        size: "sm",
                        className: j.buttonGroup,
                        children: [(0, r.jsx)(g.Z, { channel: s }), (0, r.jsx)(S, x({}, e))],
                    }),
                }),
                children: t.collapsed
                    ? null
                    : "messages" === t.type
                      ? (0, r.jsx)(y.Z, {
                            channel: t,
                            channelRecord: s,
                            gotoChannel: O,
                        })
                      : "forum" === t.type
                        ? (0, r.jsx)(b.Z, {
                              channel: t,
                              channelRecord: s,
                              deleteChannel: l,
                          })
                        : null,
            }),
        });
    });
function S(e) {
    let { channel: t, markChannelRead: n, markGuildRead: i, getNumUnreadChannels: l } = e,
        o = (0, a.Z)() && null != t.guildId;
    return (0, r.jsx)(s.u, {
        text: o ? O.intl.string(O.t["5lLMhM"]) : O.intl.string(O.t.e6RscS),
        children: (0, r.jsx)(c.hU, {
            variant: "secondary",
            "aria-label": o ? O.intl.string(O.t["5lLMhM"]) : O.intl.string(O.t.e6RscS),
            size: "sm",
            icon: o ? c.W6s : c.dz2,
            onClick: function () {
                o && null != t.guildId ? i(t.guildId) : n(t),
                    (0, p.yw)(v.rMx.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: l() - 1,
                    });
            },
        }),
    });
}
