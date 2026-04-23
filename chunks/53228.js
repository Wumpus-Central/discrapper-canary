n.d(t, { A: () => s });
var a = n(311907),
    r = n(576705),
    l = n(659674);
function s(e) {
    let { message: t, channel: n, forwardOptions: s } = e,
        o = s?.onlyAttachmentIds,
        i = s?.onlyEmbedIndices,
        c = t.messageSnapshots[0]?.message ?? t,
        d = c.attachments;
    null != o ? (d = c.attachments.filter((e) => o.includes(e.id))) : null != i && (d = []);
    let _ = [];
    return (
        (0, a.bG)([r.A], () => null != n && !(0, l.fS)(n, r.A) && (0, l.ax)(t)) ||
            ((_ = c.embeds), null != i ? (_ = c.embeds.filter((e, t) => i.includes(t))) : null != o && (_ = [])),
        (null != i || ("" === c.content && _.length > 0)) && (c = c.set("content", _.map((e) => e.url).join("\n"))),
        "" === c.content && c.embeds[0]?.rawDescription != null && (c = c.set("content", c.embeds[0].rawDescription)),
        { attachments: d, embeds: _, hasContent: "" !== c.content && null == o, contentMessage: c }
    );
}
