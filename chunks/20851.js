n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    o = n.n(r),
    a = n(384231),
    s = n(903369),
    u = n(491182),
    c = n(538355),
    d = n(699352),
    m = n(715628),
    f = n(752636),
    g = n(798204);
let p = l.memo(function (e) {
    let {
            message: t,
            channel: n,
            compact: r,
            className: p,
            isGroupStart: A,
            hideSimpleEmbedContent: v = !0,
            disableInteraction: _,
            previewGuildId: S,
            preview: y,
            author: h,
        } = e,
        E = S ?? (0, s.U)(t),
        b = (0, a.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        { content: N } = (0, c.A)(t, {
            hideSimpleEmbedContent: v,
            allowList: b,
            allowHeading: b,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        C = l.useMemo(() => (0, f.A)({ ...e, channel: n, guildId: E }), [e, n, E]);
    return (0, i.jsx)(u.A, {
        compact: r,
        className: o()(p, { [g.iU]: !0, [g.HJ]: !r, [g._A]: A }),
        childrenHeader: C,
        childrenMessageContent: (0, m.A)(e, N),
        childrenAccessories: null != n ? (0, d.J)({ message: t, channel: n, compact: r }, !1, !1) : null,
        disableInteraction: _,
        author: h,
        preview: y,
    });
});
