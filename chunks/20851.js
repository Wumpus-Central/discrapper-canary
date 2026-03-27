"use strict";
r.d(t, { A: () => f });
var n = r(627968),
    i = r(64700),
    s = r(503698),
    a = r.n(s),
    l = r(384231),
    c = r(903369),
    o = r(491182),
    d = r(538355),
    u = r(699352),
    m = r(715628),
    p = r(752636),
    h = r(480972);
let f = i.memo(function (e) {
    let {
            message: t,
            channel: r,
            compact: s,
            className: f,
            isGroupStart: x,
            hideSimpleEmbedContent: v = !0,
            disableInteraction: _,
            previewGuildId: g,
            preview: A,
            author: j,
        } = e,
        N = g ?? (0, c.U)(t),
        C = (0, l.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        { content: I } = (0, d.A)(t, {
            hideSimpleEmbedContent: v,
            allowList: C,
            allowHeading: C,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        R = i.useMemo(() => (0, p.A)({ ...e, channel: r, guildId: N }), [e, r, N]);
    return (0, n.jsx)(o.A, {
        compact: s,
        className: a()(f, { [h.iU]: !0, [h.HJ]: !s, [h._A]: x }),
        childrenHeader: R,
        childrenMessageContent: (0, m.A)(e, I),
        childrenAccessories: null != r ? (0, u.J)({ message: t, channel: r, compact: s }, !1, !1) : null,
        disableInteraction: _,
        author: j,
        preview: A,
    });
});
