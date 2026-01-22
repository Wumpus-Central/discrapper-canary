n.d(t, { A: () => i });
var l = n(311907),
    r = n(576705),
    a = n(659674);
function i(e) {
    var t, n, i;
    let { message: s, channel: o, forwardOptions: u } = e,
        c = null == u ? void 0 : u.onlyAttachmentIds,
        d = null == u ? void 0 : u.onlyEmbedIndices,
        h = null != (t = null == (n = s.messageSnapshots[0]) ? void 0 : n.message) ? t : s,
        m = h.attachments;
    null != c ? (m = h.attachments.filter((e) => c.includes(e.id))) : null != d && (m = []);
    let f = [];
    return (
        (0, l.bG)([r.A], () => null != o && !(0, a.fS)(o, r.A) && (0, a.ax)(s)) ||
            ((f = h.embeds), null != d ? (f = h.embeds.filter((e, t) => d.includes(t))) : null != c && (f = [])),
        (null != d || ("" === h.content && f.length > 0)) && (h = h.set("content", f.map((e) => e.url).join("\n"))),
        "" === h.content &&
            (null == (i = h.embeds[0]) ? void 0 : i.rawDescription) != null &&
            (h = h.set("content", h.embeds[0].rawDescription)),
        {
            attachments: m,
            embeds: f,
            hasContent: "" !== h.content && null == c,
            contentMessage: h,
        }
    );
}
