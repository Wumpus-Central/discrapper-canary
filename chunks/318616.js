n.d(t, { c: () => s });
var l = n(442837),
    i = n(496675),
    a = n(408433);
function s(e) {
    var t, n, s;
    let { message: r, channel: o, forwardOptions: c } = e,
        u = null == c ? void 0 : c.onlyAttachmentIds,
        d = null == c ? void 0 : c.onlyEmbedIndices,
        _ = null !== (s = null === (t = r.messageSnapshots[0]) || void 0 === t ? void 0 : t.message) && void 0 !== s ? s : r,
        h = _.attachments;
    null != u ? (h = _.attachments.filter((e) => u.includes(e.id))) : null != d && (h = []);
    let f = [];
    return (
        (0, l.e7)([i.Z], () => null != o && !(0, a.eC)(o, i.Z) && (0, a.En)(r)) || ((f = _.embeds), null != d ? (f = _.embeds.filter((e, t) => d.includes(t))) : null == u || (f = [])),
        (null != d || ('' === _.content && f.length > 0)) && (_ = _.set('content', f.map((e) => e.url).join('\n'))),
        '' === _.content && (null === (n = _.embeds[0]) || void 0 === n ? void 0 : n.rawDescription) != null && (_ = _.set('content', _.embeds[0].rawDescription)),
        {
            attachments: h,
            embeds: f,
            hasContent: '' !== _.content && null == u,
            contentMessage: _
        }
    );
}
