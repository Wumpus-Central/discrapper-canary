n.d(t, { A: () => h });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(384231),
    c = n(903369),
    o = n(491182),
    d = n(538355),
    u = n(699352),
    m = n(715628),
    p = n(752636),
    _ = n(119907);
let h = r.memo(function (e) {
    let {
            message: t,
            channel: n,
            compact: i,
            className: h,
            isGroupStart: x,
            hideSimpleEmbedContent: g = !0,
            disableInteraction: f,
            previewGuildId: v,
            preview: A,
            author: C,
        } = e,
        N = v ?? (0, c.U)(t),
        j = (0, l.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        { content: I } = (0, d.A)(t, {
            hideSimpleEmbedContent: g,
            allowList: j,
            allowHeading: j,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        b = r.useMemo(() => (0, p.A)({ ...e, channel: n, guildId: N }), [e, n, N]);
    return (0, a.jsx)(o.A, {
        compact: i,
        className: s()(h, { [_.iU]: !0, [_.HJ]: !i, [_._A]: x }),
        childrenHeader: b,
        childrenMessageContent: (0, m.A)(e, I),
        childrenAccessories: null != n ? (0, u.J)({ message: t, channel: n, compact: i }, !1, !1) : null,
        disableInteraction: f,
        author: C,
        preview: A,
    });
});
