a.d(i, { A: () => w });
var s = a(477900),
    t = a(582128),
    n = a(503698),
    l = a.n(n),
    c = a(384231),
    r = a(903369),
    d = a(491182),
    o = a(439762),
    p = a(699352),
    u = a(715628),
    m = a(752636),
    h = a(13673);
let w = t.memo(function (e) {
    let {
            message: i,
            channel: a,
            compact: n,
            className: w,
            isGroupStart: A,
            hideSimpleEmbedContent: k = !0,
            disableInteraction: v,
            previewGuildId: C,
            preview: b,
            author: g,
            childrenExecutedCommand: H,
        } = e,
        L = C ?? (0, r.U)(i),
        _ = (0, c.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        { content: f } = (0, o.A)(i, {
            hideSimpleEmbedContent: k,
            allowList: _,
            allowHeading: _,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        x = t.useMemo(() => (0, m.A)({ ...e, channel: a, guildId: L }), [e, a, L]);
    return (0, s.jsx)(d.A, {
        compact: n,
        className: l()(w, { [h.iU]: !0, [h.HJ]: !n, [h._A]: A }),
        childrenHeader: x,
        childrenExecutedCommand: H,
        childrenMessageContent: (0, u.A)(e, f),
        childrenAccessories: null != a ? (0, p.J)({ message: i, channel: a, compact: n }, !1, !1) : null,
        disableInteraction: v,
        author: g,
        preview: b,
    });
});
