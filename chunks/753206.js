var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(628238),
    a = n(492593),
    u = n(25015),
    d = n(963550),
    c = n(845080),
    h = n(46124);
t.Z = r.memo(function (e) {
    var t;
    let { message: n, channel: r, compact: l, className: f, isGroupStart: g, hideSimpleEmbedContent: C = !0, disableInteraction: p } = e,
        E = (0, s.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        { content: _ } = (0, u.Z)(n, {
            hideSimpleEmbedContent: C,
            allowList: E,
            allowHeading: E,
            allowLinks: !0,
            previewLinkTarget: !0
        });
    return (0, i.jsx)(a.Z, {
        compact: l,
        className: o()(f, {
            [h.message]: !0,
            [h.cozyMessage]: !l,
            [h.groupStart]: g
        }),
        childrenHeader: (0, c.Z)({
            ...e,
            channel: r,
            guildId: void 0
        }),
        childrenMessageContent: (0, d.Z)(e, _),
        disableInteraction: p
    });
});
