var i = e(200651),
    r = e(192379),
    l = e(120356),
    u = e.n(l),
    o = e(628238),
    a = e(492593),
    s = e(25015),
    c = e(963550),
    d = e(845080),
    f = e(46124);
n.Z = r.memo(function (t) {
    var n;
    let { message: e, channel: r, compact: l, className: _, isGroupStart: E, hideSimpleEmbedContent: p = !0, disableInteraction: g } = t,
        S = (0, o.A)((null !== (n = e.editedTimestamp) && void 0 !== n ? n : e.timestamp).valueOf()),
        { content: m } = (0, s.Z)(e, {
            hideSimpleEmbedContent: p,
            allowList: S,
            allowHeading: S,
            allowLinks: !0,
            previewLinkTarget: !0
        });
    return (0, i.jsx)(a.Z, {
        compact: l,
        className: u()(_, {
            [f.message]: !0,
            [f.cozyMessage]: !l,
            [f.groupStart]: E
        }),
        childrenHeader: (0, d.Z)({
            ...t,
            channel: r,
            guildId: void 0
        }),
        childrenMessageContent: (0, c.Z)(t, m),
        disableInteraction: g
    });
});
