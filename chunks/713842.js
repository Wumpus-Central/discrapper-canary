"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(442433),
    a = n(738876),
    o = n(47167),
    c = n(698718),
    d = n(355622),
    u = n(58736),
    h = n(353428),
    A = n(976860),
    p = n(823471),
    g = n(734057),
    m = n(31717),
    _ = n(71393),
    f = n(853742),
    x = n(985018),
    C = n(388552);
function E(e) {
    let { channelId: t } = e,
        E = (0, l.bG)([g.A], () => g.A.getChannel(t)),
        I = (0, l.bG)([g.A], () => g.A.getChannel(E?.parent_id)),
        b = (0, l.bG)([_.A], () => _.A.getGuild(E?.getGuildId())),
        N = (0, o.Ay)(E),
        S = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == E || S.current || ((S.current = !0), (0, f.rH)(E));
        }, [E]),
        null == E || null == b)
    )
        return null;
    let T = (0, i.jsx)(p.A, { channel: E });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.A, { channel: E, draftType: m.C.ChannelMessage }),
            (0, i.jsx)(u.Ay, {
                toolbar: T,
                "aria-label": x.intl.string(x.t.Pwe8tN),
                children: (0, h.zF)({
                    channel: E,
                    parentChannel: I,
                    channelName: N,
                    guild: b,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, r.L3)(e, async () => {
                            let { default: e } = await n.e("33").then(n.bind(n, 44536));
                            return (t) => (0, i.jsx)(e, { ...t, channel: E });
                        });
                    },
                    handleClick: function () {
                        null != E && (0, A.uh)(E.guild_id, E.id);
                    },
                }),
            }),
            (0, i.jsx)("div", {
                className: C.T,
                children: (0, i.jsx)(c.A, { channel: E, guild: b, chatInputType: d.oU.SIDEBAR }, t),
            }),
        ],
    });
}
