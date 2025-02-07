n.d(t, { Z: () => g });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(628238),
    o = n(492593),
    d = n(25015),
    u = n(963550),
    c = n(845080),
    h = n(46124);
let g = l.memo(function (e) {
    var t;
    let { message: n, channel: l, compact: r, className: g, isGroupStart: f, hideSimpleEmbedContent: p = !0, disableInteraction: C } = e,
        v = (0, a.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        { content: E } = (0, d.Z)(n, {
            hideSimpleEmbedContent: p,
            allowList: v,
            allowHeading: v,
            allowLinks: !0,
            previewLinkTarget: !0
        });
    return (0, i.jsx)(o.Z, {
        compact: r,
        className: s()(g, {
            [h.message]: !0,
            [h.cozyMessage]: !r,
            [h.groupStart]: f
        }),
        childrenHeader: (0, c.Z)({
            ...e,
            channel: l,
            guildId: void 0
        }),
        childrenMessageContent: (0, u.Z)(e, E),
        disableInteraction: C
    });
});
