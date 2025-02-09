n.d(t, { c: () => s });
var a = n(442837),
    l = n(496675),
    i = n(408433);
function s(e) {
    var t, n, s;
    let { message: r, channel: o, forwardOptions: c } = e,
        d = null == c ? void 0 : c.onlyAttachmentIds,
        u = null == c ? void 0 : c.onlyEmbedIndices,
        m = null !== (s = null === (t = r.messageSnapshots[0]) || void 0 === t ? void 0 : t.message) && void 0 !== s ? s : r,
        _ = m.attachments;
    null != d ? (_ = m.attachments.filter((e) => d.includes(e.id))) : null != u && (_ = []);
    let h = [];
    return (
        (0, a.e7)([l.Z], () => null != o && !(0, i.eC)(o, l.Z) && (0, i.En)(r)) || ((h = m.embeds), null != u ? (h = m.embeds.filter((e, t) => u.includes(t))) : null == d || (h = [])),
        (null != u || ('' === m.content && h.length > 0)) && (m = m.set('content', h.map((e) => e.url).join('\n'))),
        '' === m.content && (null === (n = m.embeds[0]) || void 0 === n ? void 0 : n.rawDescription) != null && (m = m.set('content', m.embeds[0].rawDescription)),
        {
            attachments: _,
            embeds: h,
            hasContent: '' !== m.content && null == d,
            contentMessage: m
        }
    );
}
