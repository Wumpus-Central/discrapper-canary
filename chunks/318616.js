n.d(t, { c: () => i });
var l = n(442837),
    r = n(496675),
    a = n(408433);
function i(e) {
    var t, n, i;
    let { message: s, channel: o, forwardOptions: c } = e,
        u = null == c ? void 0 : c.onlyAttachmentIds,
        d = null == c ? void 0 : c.onlyEmbedIndices,
        h = null != (i = null == (t = s.messageSnapshots[0]) ? void 0 : t.message) ? i : s,
        f = h.attachments;
    null != u ? (f = h.attachments.filter((e) => u.includes(e.id))) : null != d && (f = []);
    let m = [];
    return (
        (0, l.e7)([r.Z], () => null != o && !(0, a.eC)(o, r.Z) && (0, a.En)(s)) || ((m = h.embeds), null != d ? (m = h.embeds.filter((e, t) => d.includes(t))) : null != u && (m = [])),
        (null != d || ('' === h.content && m.length > 0)) && (h = h.set('content', m.map((e) => e.url).join('\n'))),
        '' === h.content && (null == (n = h.embeds[0]) ? void 0 : n.rawDescription) != null && (h = h.set('content', h.embeds[0].rawDescription)),
        {
            attachments: f,
            embeds: m,
            hasContent: '' !== h.content && null == u,
            contentMessage: h
        }
    );
}
