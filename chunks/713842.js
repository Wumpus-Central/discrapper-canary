n.d(t, { A: () => C });
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
    g = n(823471),
    m = n(734057),
    p = n(31717),
    _ = n(71393),
    x = n(853742),
    f = n(985018),
    E = n(388552);
function C(e) {
    let { channelId: t } = e,
        C = (0, s.bG)([m.A], () => m.A.getChannel(t)),
        I = (0, s.bG)([m.A], () => m.A.getChannel(C?.parent_id)),
        S = (0, s.bG)([_.A], () => _.A.getGuild(C?.getGuildId())),
        b = (0, o.Ay)(C),
        N = l.useRef(!1);
    if (
        (l.useEffect(() => {
            null == C || N.current || ((N.current = !0), (0, x.rH)(C));
        }, [C]),
        null == C || null == S)
    )
        return null;
    let T = (0, i.jsx)(g.A, { channel: C });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.A, { channel: C, draftType: p.C.ChannelMessage }),
            (0, i.jsx)(u.Ay, {
                toolbar: T,
                "aria-label": f.intl.string(f.t.Pwe8tN),
                children: (0, h.zF)({
                    channel: C,
                    parentChannel: I,
                    channelName: b,
                    guild: S,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, a.L3)(e, async () => {
                            let { default: e } = await n.e("33").then(n.bind(n, 44536));
                            return (t) => (0, i.jsx)(e, { ...t, channel: C });
                        });
                    },
                    handleClick: function () {
                        null != C && (0, A.uh)(C.guild_id, C.id);
                    },
                }),
            }),
            (0, i.jsx)("div", {
                className: E.T,
                children: (0, i.jsx)(d.A, { channel: C, guild: S, chatInputType: c.oU.SIDEBAR }, t),
            }),
        ],
    });
}
