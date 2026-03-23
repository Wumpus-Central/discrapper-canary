n.d(t, { A: () => p });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(384231),
    c = n(903369),
    o = n(491182),
    d = n(538355),
    u = n(699352),
    m = n(715628),
    h = n(752636),
    x = n(119907);
let p = a.memo(function (e) {
    let {
            message: t,
            channel: n,
            compact: i,
            className: p,
            isGroupStart: f,
            hideSimpleEmbedContent: v = !0,
            disableInteraction: _,
            previewGuildId: g,
            preview: A,
            author: j,
        } = e,
        N = g ?? (0, c.U)(t),
        C = (0, s.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        { content: b } = (0, d.A)(t, {
            hideSimpleEmbedContent: v,
            allowList: C,
            allowHeading: C,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        R = a.useMemo(() => (0, h.A)({ ...e, channel: n, guildId: N }), [e, n, N]);
    return (0, r.jsx)(o.A, {
        compact: i,
        className: l()(p, { [x.iU]: !0, [x.HJ]: !i, [x._A]: f }),
        childrenHeader: R,
        childrenMessageContent: (0, m.A)(e, b),
        childrenAccessories: null != n ? (0, u.J)({ message: t, channel: n, compact: i }, !1, !1) : null,
        disableInteraction: _,
        author: j,
        preview: A,
    });
});
