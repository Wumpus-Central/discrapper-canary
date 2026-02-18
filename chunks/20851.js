n.d(t, { A: () => p });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(384231),
    o = n(903369),
    c = n(491182),
    d = n(538355),
    u = n(715628),
    m = n(752636),
    _ = n(119907);
let p = r.memo(function (e) {
    let {
            message: t,
            channel: n,
            compact: i,
            className: p,
            isGroupStart: g,
            hideSimpleEmbedContent: h = !0,
            disableInteraction: A,
            previewGuildId: f,
            preview: v,
            author: x,
        } = e,
        b = f ?? (0, o.U)(t),
        I = (0, s.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        { content: C } = (0, d.A)(t, {
            hideSimpleEmbedContent: h,
            allowList: I,
            allowHeading: I,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        y = r.useMemo(() => (0, m.A)({ ...e, channel: n, guildId: b }), [e, n, b]);
    return (0, a.jsx)(c.A, {
        compact: i,
        className: l()(p, { [_.iU]: !0, [_.HJ]: !i, [_._A]: g }),
        childrenHeader: y,
        childrenMessageContent: (0, u.A)(e, C),
        disableInteraction: A,
        author: x,
        preview: v,
    });
});
