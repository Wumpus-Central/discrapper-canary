n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(384231),
    c = n(903369),
    o = n(491182),
    d = n(538355),
    u = n(699352),
    m = n(715628),
    h = n(752636),
    x = n(50397);
let p = i.memo(function (e) {
    let {
            message: t,
            channel: n,
            compact: a,
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
        R = i.useMemo(() => (0, h.A)({ ...e, channel: n, guildId: N }), [e, n, N]);
    return (0, r.jsx)(o.A, {
        compact: a,
        className: l()(p, { [x.iU]: !0, [x.HJ]: !a, [x._A]: f }),
        childrenHeader: R,
        childrenMessageContent: (0, m.A)(e, b),
        childrenAccessories: null != n ? (0, u.J)({ message: t, channel: n, compact: a }, !1, !1) : null,
        disableInteraction: _,
        author: j,
        preview: A,
    });
});
