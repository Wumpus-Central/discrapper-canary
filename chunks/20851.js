a.d(i, { A: () => w });
var s = a(627968),
    t = a(64700),
    l = a(503698),
    n = a.n(l),
    r = a(384231),
    c = a(903369),
    d = a(491182),
    o = a(375199),
    p = a(699352),
    u = a(715628),
    h = a(752636),
    m = a(701628);
let w = t.memo(function (e) {
    let {
            message: i,
            channel: a,
            compact: l,
            className: w,
            isGroupStart: A,
            hideSimpleEmbedContent: k = !0,
            disableInteraction: v,
            previewGuildId: b,
            preview: g,
            author: C,
        } = e,
        H = b ?? (0, c.U)(i),
        L = (0, r.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        { content: _ } = (0, o.A)(i, {
            hideSimpleEmbedContent: k,
            allowList: L,
            allowHeading: L,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        f = t.useMemo(() => (0, h.A)({ ...e, channel: a, guildId: H }), [e, a, H]);
    return (0, s.jsx)(d.A, {
        compact: l,
        className: n()(w, { [m.iU]: !0, [m.HJ]: !l, [m._A]: A }),
        childrenHeader: f,
        childrenMessageContent: (0, u.A)(e, _),
        childrenAccessories: null != a ? (0, p.J)({ message: i, channel: a, compact: l }, !1, !1) : null,
        disableInteraction: v,
        author: C,
        preview: g,
    });
});
