"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(384231),
    l = n(903369),
    u = n(491182),
    c = n(538355),
    d = n(715628),
    _ = n(752636),
    f = n(119907);
function h(e) {
    let {
            message: t,
            channel: n,
            compact: a,
            className: h,
            isGroupStart: p,
            hideSimpleEmbedContent: g = !0,
            disableInteraction: E,
            previewGuildId: A,
            preview: I,
            author: T,
        } = e,
        y = A ?? (0, l.U)(t),
        S = (0, o.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        { content: v } = (0, c.A)(t, {
            hideSimpleEmbedContent: g,
            allowList: S,
            allowHeading: S,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        C = i.useMemo(() => (0, _.A)({ ...e, channel: n, guildId: y }), [e, n, y]);
    return (0, r.jsx)(u.A, {
        compact: a,
        className: s()(h, { [f.iU]: !0, [f.HJ]: !a, [f._A]: p }),
        childrenHeader: C,
        childrenMessageContent: (0, d.A)(e, v),
        disableInteraction: E,
        author: T,
        preview: I,
    });
}
let p = i.memo(h);
