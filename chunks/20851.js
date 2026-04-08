n.d(t, { A: () => x });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(384231),
    o = n(903369),
    c = n(491182),
    d = n(538355),
    u = n(699352),
    m = n(715628),
    h = n(752636),
    p = n(480972);
let x = a.memo(function (e) {
    let {
            message: t,
            channel: n,
            compact: i,
            className: x,
            isGroupStart: f,
            hideSimpleEmbedContent: _ = !0,
            disableInteraction: v,
            previewGuildId: g,
            preview: A,
            author: C,
        } = e,
        j = g ?? (0, o.U)(t),
        N = (0, l.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        { content: I } = (0, d.A)(t, {
            hideSimpleEmbedContent: _,
            allowList: N,
            allowHeading: N,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        b = a.useMemo(() => (0, h.A)({ ...e, channel: n, guildId: j }), [e, n, j]);
    return (0, r.jsx)(c.A, {
        compact: i,
        className: s()(x, { [p.iU]: !0, [p.HJ]: !i, [p._A]: f }),
        childrenHeader: b,
        childrenMessageContent: (0, m.A)(e, I),
        childrenAccessories: null != n ? (0, u.J)({ message: t, channel: n, compact: i }, !1, !1) : null,
        disableInteraction: v,
        author: C,
        preview: A,
    });
});
