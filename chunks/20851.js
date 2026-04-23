"use strict";
a.d(t, { A: () => p });
var l = a(627968),
    i = a(64700),
    r = a(503698),
    n = a.n(r),
    s = a(384231),
    o = a(903369),
    d = a(491182),
    c = a(538355),
    u = a(699352),
    _ = a(715628),
    h = a(752636),
    m = a(798204);
let p = i.memo(function (e) {
    let {
            message: t,
            channel: a,
            compact: r,
            className: p,
            isGroupStart: g,
            hideSimpleEmbedContent: f = !0,
            disableInteraction: b,
            previewGuildId: A,
            preview: x,
            author: v,
        } = e,
        C = A ?? (0, o.U)(t),
        E = (0, s.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        { content: y } = (0, c.A)(t, {
            hideSimpleEmbedContent: f,
            allowList: E,
            allowHeading: E,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        I = i.useMemo(() => (0, h.A)({ ...e, channel: a, guildId: C }), [e, a, C]);
    return (0, l.jsx)(d.A, {
        compact: r,
        className: n()(p, { [m.iU]: !0, [m.HJ]: !r, [m._A]: g }),
        childrenHeader: I,
        childrenMessageContent: (0, _.A)(e, y),
        childrenAccessories: null != a ? (0, u.J)({ message: t, channel: a, compact: r }, !1, !1) : null,
        disableInteraction: b,
        author: v,
        preview: x,
    });
});
