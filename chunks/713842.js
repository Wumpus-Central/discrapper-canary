n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(442433),
    r = n(738876),
    o = n(47167),
    d = n(698718),
    c = n(355622),
    u = n(58736),
    h = n(353428),
    A = n(976860),
    _ = n(823471),
    m = n(734057),
    g = n(31717),
    p = n(71393),
    f = n(853742),
    E = n(985018),
    x = n(224517);
function I(e) {
    let { channelId: t } = e,
        I = (0, s.bG)([m.A], () => m.A.getChannel(t)),
        C = (0, s.bG)([m.A], () => m.A.getChannel(I?.parent_id)),
        b = (0, s.bG)([p.A], () => p.A.getGuild(I?.getGuildId())),
        N = (0, o.Ay)(I),
        S = l.useRef(!1);
    if (
        (l.useEffect(() => {
            null == I || S.current || ((S.current = !0), (0, f.rH)(I));
        }, [I]),
        null == I || null == b)
    )
        return null;
    let v = (0, i.jsx)(_.A, { channel: I });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.A, { channel: I, draftType: g.C.ChannelMessage }),
            (0, i.jsx)(u.Ay, {
                toolbar: v,
                "aria-label": E.intl.string(E.t.Pwe8tN),
                children: (0, h.zF)({
                    channel: I,
                    parentChannel: C,
                    channelName: N,
                    guild: b,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, a.L3)(e, async () => {
                            let { default: e } = await n.e("22414").then(n.bind(n, 44536));
                            return (t) => (0, i.jsx)(e, { ...t, channel: I });
                        });
                    },
                    handleClick: function () {
                        null != I && (0, A.uh)(I.guild_id, I.id);
                    },
                }),
            }),
            (0, i.jsx)("div", {
                className: x.T,
                children: (0, i.jsx)(d.A, { channel: I, guild: b, chatInputType: c.oU.SIDEBAR }, t),
            }),
        ],
    });
}
