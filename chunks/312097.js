n.d(t, { K: () => d });
var i = n(200651),
    r = n(481060),
    a = n(982330),
    s = n(592125),
    o = n(626135),
    l = n(254109),
    u = n(981631),
    c = n(701865);
function d(e) {
    var t, d, f;
    let { location: _, contextKey: p, ...h } = e,
        m = (0, a.Kc)(_),
        g = null === (d = h.items[null !== (f = h.startingIndex) && void 0 !== f ? f : 0]) || void 0 === d ? void 0 : null === (t = d.sourceMetadata) || void 0 === t ? void 0 : t.message,
        E = s.Z.getChannel(null == g ? void 0 : g.channel_id);
    (0, l.fS)({
        guildId: null == E ? void 0 : E.guild_id,
        channelId: null == E ? void 0 : E.id,
        channelType: null == E ? void 0 : E.type,
        numMediaItems: h.items.length,
        source: _,
        hasMediaOptions: !h.shouldHideMediaOptions
    }),
        o.default.track(u.rMx.OPEN_MODAL, {
            type: u.jXE.MEDIA_VIEWER,
            source: _,
            guild_id: null == E ? void 0 : E.guild_id,
            channel_id: null == E ? void 0 : E.id,
            channel_type: null == E ? void 0 : E.type
        }),
        (0, r.ZDy)(
            async () => {
                let { default: e } = m ? await Promise.all([n.e('95477'), n.e('88389')]).then(n.bind(n, 97594)) : await n.e('87267').then(n.bind(n, 950120));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        ...h
                    });
            },
            {
                modalKey: c.U,
                contextKey: p,
                onCloseCallback: l.VO,
                backdropStyle: r.fCB.IMMERSIVE
            }
        );
}
