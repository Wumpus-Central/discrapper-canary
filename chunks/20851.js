"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(384231),
    o = n(903369),
    c = n(491182),
    d = n(375199),
    u = n(699352),
    p = n(715628),
    _ = n(752636),
    f = n(701628);
let h = a.memo(function (e) {
    let {
            message: t,
            channel: n,
            compact: r,
            className: h,
            isGroupStart: m,
            hideSimpleEmbedContent: g = !0,
            disableInteraction: A,
            previewGuildId: b,
            preview: v,
            author: y,
        } = e,
        x = b ?? (0, o.U)(t),
        E = (0, s.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        { content: C } = (0, d.A)(t, {
            hideSimpleEmbedContent: g,
            allowList: E,
            allowHeading: E,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        I = a.useMemo(() => (0, _.A)({ ...e, channel: n, guildId: x }), [e, n, x]);
    return (0, i.jsx)(c.A, {
        compact: r,
        className: l()(h, { [f.iU]: !0, [f.HJ]: !r, [f._A]: m }),
        childrenHeader: I,
        childrenMessageContent: (0, p.A)(e, C),
        childrenAccessories: null != n ? (0, u.J)({ message: t, channel: n, compact: r }, !1, !1) : null,
        disableInteraction: A,
        author: y,
        preview: v,
    });
});
