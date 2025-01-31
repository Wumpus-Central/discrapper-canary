n.d(t, { Z: () => E });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(239091),
    s = n(561472),
    o = n(933557),
    c = n(287746),
    d = n(541716),
    u = n(665149),
    h = n(910611),
    p = n(703656),
    m = n(664342),
    f = n(592125),
    g = n(703558),
    _ = n(430824),
    C = n(228392),
    x = n(388032),
    v = n(454002);
function E(e) {
    let { channelId: t } = e,
        E = (0, a.e7)([f.Z], () => f.Z.getChannel(t)),
        I = (0, a.e7)([f.Z], () => f.Z.getChannel(null == E ? void 0 : E.parent_id)),
        b = (0, a.e7)([_.Z], () => _.Z.getGuild(null == E ? void 0 : E.getGuildId())),
        Z = (0, o.ZP)(E),
        N = l.useRef(!1);
    if (
        (l.useEffect(() => {
            null == E || N.current || ((N.current = !0), (0, C.lN)(E));
        }, [E]),
        null == E || null == b)
    )
        return null;
    let T = (0, i.jsx)(m.Z, { channel: E });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.Z, {
                channel: E,
                draftType: g.d.ChannelMessage
            }),
            (0, i.jsx)(u.ZP, {
                toolbar: T,
                'aria-label': x.intl.string(x.t.Pwe8tL),
                children: (0, h.ud)({
                    channel: E,
                    parentChannel: I,
                    channelName: Z,
                    guild: b,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, r.jW)(e, async () => {
                            let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    channel: E
                                });
                        });
                    },
                    handleClick: function () {
                        null != E && (0, p.XU)(E.guild_id, E.id);
                    }
                })
            }),
            (0, i.jsx)('div', {
                className: v.chat,
                children: (0, i.jsx)(
                    c.Z,
                    {
                        channel: E,
                        guild: b,
                        chatInputType: d.Ie.SIDEBAR
                    },
                    t
                )
            })
        ]
    });
}
