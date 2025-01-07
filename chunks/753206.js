var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    u = n(628238),
    a = n(492593),
    s = n(25015),
    c = n(963550),
    d = n(845080),
    f = n(46124);
e.Z = r.memo(function (t) {
    var e;
    let { message: n, channel: r, compact: l, className: _, isGroupStart: E, hideSimpleEmbedContent: p = !0, disableInteraction: g } = t,
        S = (0, u.A)((null !== (e = n.editedTimestamp) && void 0 !== e ? e : n.timestamp).valueOf()),
        { content: m } = (0, s.Z)(n, {
            hideSimpleEmbedContent: p,
            allowList: S,
            allowHeading: S,
            allowLinks: !0,
            previewLinkTarget: !0
        });
    return (0, i.jsx)(a.Z, {
        compact: l,
        className: o()(_, {
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
