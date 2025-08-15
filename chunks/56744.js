n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(627050),
    o = n(905405),
    s = n(869765),
    c = n(699516),
    u = n(937889),
    d = n(739566),
    p = n(267128),
    m = n(981631);
let f = i.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: m, compact: f = !1 } = e,
        _ = m.state === s.Y.LOADED ? m.message : void 0,
        g = (0, o.p)(),
        h = a.d.useExperiment({ location: "repliedMessage" }).enabled,
        b = i.useMemo(
            () =>
                (null == _ ? void 0 : _.content) != null && "" !== _.content
                    ? (0, u.ZP)(_, {
                          formatInline: !0,
                          allowGameMentions: h,
                          shouldFilterKeywords: g,
                      }).content
                    : null,
            [_, g, h],
        ),
        { isReplyAuthorBlocked: E, isReplyAuthorIgnored: C } = (0, l.cj)(
            [c.Z],
            () => ({
                isReplyAuthorBlocked: null != _ && c.Z.isBlockedForMessage(_),
                isReplyAuthorIgnored: null != _ && c.Z.isIgnoredForMessage(_),
            }),
            [_],
        ),
        v = (0, d.Uj)(_),
        O = (0, d.Uj)(t);
    return (0, r.jsx)(p.Z, {
        repliedAuthor: v,
        baseAuthor: O,
        baseMessage: t,
        channel: n,
        referencedMessage: m,
        content: b,
        compact: f,
        isReplyAuthorBlocked: E,
        isReplyAuthorIgnored: C,
        isReplySpineClickable: !1,
        showReplySpine: !0,
    });
});
function _(e, t, n, i, l) {
    return e.type !== m.uaV.REPLY || null == n
        ? null
        : (0, r.jsx)(f, {
              baseMessage: e,
              channel: t,
              referencedMessage: i,
              compact: l,
          });
}
