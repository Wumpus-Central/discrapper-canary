n.d(t, { c: () => s });
var l = n(442837),
    r = n(496675),
    a = n(408433);
function s(e) {
    var t, n, s;
    let { message: i, channel: o, forwardOptions: u } = e,
        c = null == u ? void 0 : u.onlyAttachmentIds,
        d = null == u ? void 0 : u.onlyEmbedIndices,
        h = null != (s = null == (t = i.messageSnapshots[0]) ? void 0 : t.message) ? s : i,
        f = h.attachments;
    null != c ? (f = h.attachments.filter((e) => c.includes(e.id))) : null != d && (f = []);
    let m = [];
    return (
        (0, l.e7)([r.Z], () => null != o && !(0, a.eC)(o, r.Z) && (0, a.En)(i)) ||
            ((m = h.embeds), null != d ? (m = h.embeds.filter((e, t) => d.includes(t))) : null != c && (m = [])),
        (null != d || ("" === h.content && m.length > 0)) && (h = h.set("content", m.map((e) => e.url).join("\n"))),
        "" === h.content &&
            (null == (n = h.embeds[0]) ? void 0 : n.rawDescription) != null &&
            (h = h.set("content", h.embeds[0].rawDescription)),
        {
            attachments: f,
            embeds: m,
            hasContent: "" !== h.content && null == c,
            contentMessage: h,
        }
    );
}
