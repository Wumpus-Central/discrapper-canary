n.d(t, { c: () => i });
var a = n(442837),
    r = n(496675),
    l = n(408433);
function i(e) {
    var t, n, i;
    let { message: s, channel: o, forwardOptions: c } = e,
        u = null == c ? void 0 : c.onlyAttachmentIds,
        d = null == c ? void 0 : c.onlyEmbedIndices,
        m = null != (i = null == (t = s.messageSnapshots[0]) ? void 0 : t.message) ? i : s,
        p = m.attachments;
    null != u ? (p = m.attachments.filter((e) => u.includes(e.id))) : null != d && (p = []);
    let h = [];
    return (
        (0, a.e7)([r.Z], () => null != o && !(0, l.eC)(o, r.Z) && (0, l.En)(s)) || ((h = m.embeds), null != d ? (h = m.embeds.filter((e, t) => d.includes(t))) : null != u && (h = [])),
        (null != d || ('' === m.content && h.length > 0)) && (m = m.set('content', h.map((e) => e.url).join('\n'))),
        '' === m.content && (null == (n = m.embeds[0]) ? void 0 : n.rawDescription) != null && (m = m.set('content', m.embeds[0].rawDescription)),
        {
            attachments: p,
            embeds: h,
            hasContent: '' !== m.content && null == u,
            contentMessage: m
        }
    );
}
