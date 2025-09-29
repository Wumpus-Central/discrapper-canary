n.d(t, { c: () => i });
var a = n(442837),
    l = n(496675),
    r = n(408433);
function i(e) {
    var t, n, i;
    let { message: s, channel: o, forwardOptions: c } = e,
        u = null == c ? void 0 : c.onlyAttachmentIds,
        d = null == c ? void 0 : c.onlyEmbedIndices,
        h = null != (i = null == (t = s.messageSnapshots[0]) ? void 0 : t.message) ? i : s,
        m = h.attachments;
    null != u ? (m = h.attachments.filter((e) => u.includes(e.id))) : null != d && (m = []);
    let g = [];
    return (
        (0, a.e7)([l.Z], () => null != o && !(0, r.eC)(o, l.Z) && (0, r.En)(s)) ||
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
