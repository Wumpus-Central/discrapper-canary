a.d(t, { A: () => h });
var n = a(627968),
    r = a(64700),
    i = a(503698),
    s = a.n(i),
    l = a(384231),
    c = a(903369),
    o = a(491182),
    d = a(538355),
    u = a(699352),
    m = a(715628),
    p = a(752636),
    _ = a(119907);
let h = r.memo(function (e) {
    let {
            message: t,
            channel: a,
            compact: i,
            className: h,
            isGroupStart: x,
            hideSimpleEmbedContent: f = !0,
            disableInteraction: g,
            previewGuildId: v,
            preview: A,
            author: C,
        } = e,
        j = v ?? (0, c.U)(t),
        N = (0, l.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        { content: b } = (0, d.A)(t, {
            hideSimpleEmbedContent: f,
            allowList: N,
            allowHeading: N,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        I = r.useMemo(() => (0, p.A)({ ...e, channel: a, guildId: j }), [e, a, j]);
    return (0, n.jsx)(o.A, {
        compact: i,
        className: s()(h, { [_.iU]: !0, [_.HJ]: !i, [_._A]: x }),
        childrenHeader: I,
        childrenMessageContent: (0, m.A)(e, b),
        childrenAccessories: null != a ? (0, u.J)({ message: t, channel: a, compact: i }, !1, !1) : null,
        disableInteraction: g,
        author: C,
        preview: A,
    });
});
