n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(384231),
    c = n(903369),
    o = n(491182),
    d = n(538355),
    u = n(699352),
    _ = n(715628),
    m = n(752636),
    p = n(701628);
let h = i.memo(function (e) {
    let {
            message: t,
            channel: n,
            compact: a,
            className: h,
            isGroupStart: f,
            hideSimpleEmbedContent: E = !0,
            disableInteraction: A,
            previewGuildId: v,
            preview: I,
            author: g,
        } = e,
        S = v ?? (0, c.U)(t),
        x = (0, s.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        { content: R } = (0, d.A)(t, {
            hideSimpleEmbedContent: E,
            allowList: x,
            allowHeading: x,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        T = i.useMemo(() => (0, m.A)({ ...e, channel: n, guildId: S }), [e, n, S]);
    return (0, r.jsx)(o.A, {
        compact: a,
        className: l()(h, { [p.iU]: !0, [p.HJ]: !a, [p._A]: f }),
        childrenHeader: T,
        childrenMessageContent: (0, _.A)(e, R),
        childrenAccessories: null != n ? (0, u.J)({ message: t, channel: n, compact: a }, !1, !1) : null,
        disableInteraction: A,
        author: g,
        preview: I,
    });
});
