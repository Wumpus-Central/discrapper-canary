n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(239091),
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
    C = n(430824),
    x = n(228392),
    v = n(388032),
    _ = n(454002);
function I(e) {
    let { channelId: t } = e,
        I = (0, r.e7)([f.Z], () => f.Z.getChannel(t)),
        E = (0, r.e7)([f.Z], () => f.Z.getChannel(null == I ? void 0 : I.parent_id)),
        b = (0, r.e7)([C.Z], () => C.Z.getGuild(null == I ? void 0 : I.getGuildId())),
        Z = (0, o.ZP)(I),
        S = l.useRef(!1);
    if (
        (l.useEffect(() => {
            null != I && !S.current && ((S.current = !0), (0, x.lN)(I));
        }, [I]),
        null == I || null == b)
    )
        return null;
    let N = (0, i.jsx)(m.Z, { channel: I });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.Z, {
                channel: I,
                draftType: g.d.ChannelMessage
            }),
            (0, i.jsx)(u.ZP, {
                toolbar: N,
                'aria-label': v.intl.string(v.t.Pwe8tL),
                children: (0, h.ud)({
                    channel: I,
                    parentChannel: E,
                    channelName: Z,
                    guild: b,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, a.jW)(e, async () => {
                            let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    channel: I
                                });
                        });
                    },
                    handleClick: function () {
                        null != I && (0, p.XU)(I.guild_id, I.id);
                    }
                })
            }),
            (0, i.jsx)('div', {
                className: _.chat,
                children: (0, i.jsx)(
                    c.Z,
                    {
                        channel: I,
                        guild: b,
                        chatInputType: d.Ie.SIDEBAR
                    },
                    t
                )
            })
        ]
    });
}
