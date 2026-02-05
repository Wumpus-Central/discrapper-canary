n.d(t, { A: () => i });
var l = n(311907),
    a = n(576705),
    s = n(659674);
function i(e) {
    let { message: t, channel: n, forwardOptions: i } = e,
        r = i?.onlyAttachmentIds,
        o = i?.onlyEmbedIndices,
        u = t.messageSnapshots[0]?.message ?? t,
        c = u.attachments;
    null != r ? (c = u.attachments.filter((e) => r.includes(e.id))) : null != o && (c = []);
    let d = [];
    return (
        (0, l.bG)([a.A], () => null != n && !(0, s.fS)(n, a.A) && (0, s.ax)(t)) ||
            ((d = u.embeds), null != o ? (d = u.embeds.filter((e, t) => o.includes(t))) : null != r && (d = [])),
        (null != o || ("" === u.content && d.length > 0)) && (u = u.set("content", d.map((e) => e.url).join("\n"))),
        "" === u.content && u.embeds[0]?.rawDescription != null && (u = u.set("content", u.embeds[0].rawDescription)),
        { attachments: c, embeds: d, hasContent: "" !== u.content && null == r, contentMessage: u }
    );
}
