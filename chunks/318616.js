n.d(t, { c: () => s });
var a = n(442837),
    l = n(496675),
    r = n(408433);
function s(e) {
    var t, n, s;
    let { message: i, channel: o, forwardOptions: c } = e,
        u = null == c ? void 0 : c.onlyAttachmentIds,
        d = null == c ? void 0 : c.onlyEmbedIndices,
        h = null != (s = null == (t = i.messageSnapshots[0]) ? void 0 : t.message) ? s : i,
        m = h.attachments;
    null != u ? (m = h.attachments.filter((e) => u.includes(e.id))) : null != d && (m = []);
    let g = [];
    return (
        (0, a.e7)([l.Z], () => null != o && !(0, r.eC)(o, l.Z) && (0, r.En)(i)) ||
            ((g = h.embeds), null != d ? (g = h.embeds.filter((e, t) => d.includes(t))) : null != u && (g = [])),
        (null != d || ("" === h.content && g.length > 0)) && (h = h.set("content", g.map((e) => e.url).join("\n"))),
        "" === h.content &&
            (null == (n = h.embeds[0]) ? void 0 : n.rawDescription) != null &&
            (h = h.set("content", h.embeds[0].rawDescription)),
        {
            attachments: m,
            embeds: g,
            hasContent: "" !== h.content && null == u,
            contentMessage: h,
        }
    );
}
