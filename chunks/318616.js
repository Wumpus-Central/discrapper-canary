n.d(t, { c: () => a });
var l = n(442837),
    r = n(496675),
    i = n(408433);
function a(e) {
    var t, n, a;
    let { message: s, channel: o, forwardOptions: c } = e,
        u = null == c ? void 0 : c.onlyAttachmentIds,
        d = null == c ? void 0 : c.onlyEmbedIndices,
        f = null != (a = null == (t = s.messageSnapshots[0]) ? void 0 : t.message) ? a : s,
        h = f.attachments;
    null != u ? (h = f.attachments.filter((e) => u.includes(e.id))) : null != d && (h = []);
    let _ = [];
    return (
        (0, l.e7)([r.Z], () => null != o && !(0, i.eC)(o, r.Z) && (0, i.En)(s)) || ((_ = f.embeds), null != d ? (_ = f.embeds.filter((e, t) => d.includes(t))) : null != u && (_ = [])),
        (null != d || ('' === f.content && _.length > 0)) && (f = f.set('content', _.map((e) => e.url).join('\n'))),
        '' === f.content && (null == (n = f.embeds[0]) ? void 0 : n.rawDescription) != null && (f = f.set('content', f.embeds[0].rawDescription)),
        {
            attachments: h,
            embeds: _,
            hasContent: '' !== f.content && null == u,
            contentMessage: f
        }
    );
}
