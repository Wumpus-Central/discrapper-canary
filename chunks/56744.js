n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(627050),
    s = n(905405),
    l = n(869765),
    c = n(699516),
    u = n(937889),
    d = n(739566),
    f = n(267128),
    _ = n(981631);
let p = i.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: _, compact: p = !1 } = e,
        h = _.state === l.Y.LOADED ? _.message : void 0,
        m = (0, s.p)(),
        g = a.d.useExperiment({ location: "repliedMessage" }).enabled,
        E = i.useMemo(
            () =>
                (null == h ? void 0 : h.content) != null && "" !== h.content
                    ? (0, u.ZP)(h, {
                          formatInline: !0,
                          allowGameMentions: g,
                          shouldFilterKeywords: m,
                      }).content
                    : null,
            [h, m, g],
        ),
        { isReplyAuthorBlocked: b, isReplyAuthorIgnored: y } = (0, o.cj)(
            [c.Z],
            () => ({
                isReplyAuthorBlocked: null != h && c.Z.isBlockedForMessage(h),
                isReplyAuthorIgnored: null != h && c.Z.isIgnoredForMessage(h),
            }),
            [h],
        ),
        O = (0, d.Uj)(h),
        v = (0, d.Uj)(t);
    return (0, r.jsx)(f.Z, {
        repliedAuthor: O,
        baseAuthor: v,
        baseMessage: t,
        channel: n,
        referencedMessage: _,
        content: E,
        compact: p,
        isReplyAuthorBlocked: b,
        isReplyAuthorIgnored: y,
        isReplySpineClickable: !1,
        showReplySpine: !0,
    });
});
function h(e, t, n, i, o) {
    return e.type !== _.uaV.REPLY || null == n
        ? null
        : (0, r.jsx)(p, {
              baseMessage: e,
              channel: t,
              referencedMessage: i,
              compact: o,
          });
}
