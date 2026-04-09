a.d(t, { A: () => h });
var n = a(627968),
    r = a(64700),
    i = a(503698),
    s = a.n(i),
    l = a(384231),
    o = a(903369),
    c = a(491182),
    d = a(538355),
    u = a(699352),
    m = a(715628),
    p = a(752636),
    _ = a(480972);
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
        I = v ?? (0, o.U)(t),
        j = (0, l.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        { content: T } = (0, d.A)(t, {
            hideSimpleEmbedContent: f,
            allowList: j,
            allowHeading: j,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        b = r.useMemo(() => (0, p.A)({ ...e, channel: a, guildId: I }), [e, a, I]);
    return (0, n.jsx)(c.A, {
        compact: i,
        className: s()(h, { [_.iU]: !0, [_.HJ]: !i, [_._A]: x }),
        childrenHeader: b,
        childrenMessageContent: (0, m.A)(e, T),
        childrenAccessories: null != a ? (0, u.J)({ message: t, channel: a, compact: i }, !1, !1) : null,
        disableInteraction: g,
        author: C,
        preview: A,
    });
});
