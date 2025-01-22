r.d(n, {
    K: function () {
        return f;
    }
});
var i = r(200651),
    a = r(481060),
    o = r(982330),
    s = r(592125),
    l = r(626135),
    u = r(254109),
    c = r(981631),
    d = r(701865);
function f(e) {
    var n, f, p;
    let { location: h, contextKey: _, ...m } = e,
        g = (0, o.Kc)(h),
        E = null === (f = m.items[null !== (p = m.startingIndex) && void 0 !== p ? p : 0]) || void 0 === f ? void 0 : null === (n = f.sourceMetadata) || void 0 === n ? void 0 : n.message,
        v = s.Z.getChannel(null == E ? void 0 : E.channel_id);
    (0, u.fS)({
        guildId: null == v ? void 0 : v.guild_id,
        channelId: null == v ? void 0 : v.id,
        channelType: null == v ? void 0 : v.type,
        numMediaItems: m.items.length,
        source: h,
        hasMediaOptions: !m.shouldHideMediaOptions
    }),
        l.default.track(c.rMx.OPEN_MODAL, {
            type: c.jXE.MEDIA_VIEWER,
            source: h,
            guild_id: null == v ? void 0 : v.guild_id,
            channel_id: null == v ? void 0 : v.id,
            channel_type: null == v ? void 0 : v.type
        }),
        (0, a.openModalLazy)(
            async () => {
                let { default: e } = g ? await r.e('39476').then(r.bind(r, 97594)) : await r.e('87267').then(r.bind(r, 950120));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        ...m
                    });
            },
            {
                modalKey: d.U,
                contextKey: _,
                onCloseCallback: u.VO,
                backdropStyle: a.BackdropStyles.IMMERSIVE
            }
        );
}
