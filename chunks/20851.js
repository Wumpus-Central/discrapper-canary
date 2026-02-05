"use strict";
n.d(t, { A: () => h });
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
function p(e) {
    let {
            message: t,
            channel: n,
            compact: a,
            className: p,
            isGroupStart: h,
            hideSimpleEmbedContent: m = !0,
            disableInteraction: g,
            previewGuildId: E,
            preview: A,
            author: I,
        } = e,
        T = E ?? (0, l.U)(t),
        y = (0, o.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        { content: S } = (0, c.A)(t, {
            hideSimpleEmbedContent: m,
            allowList: y,
            allowHeading: y,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        v = i.useMemo(() => (0, _.A)({ ...e, channel: n, guildId: T }), [e, n, T]);
    return (0, r.jsx)(u.A, {
        compact: a,
        className: s()(p, { [f.iU]: !0, [f.HJ]: !a, [f._A]: h }),
        childrenHeader: v,
        childrenMessageContent: (0, d.A)(e, S),
        disableInteraction: g,
        author: I,
        preview: A,
    });
}
let h = i.memo(p);
