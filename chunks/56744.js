n.d(t, { Z: () => g });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(627050),
    a = n(905405),
    s = n(869765),
    c = n(699516),
    u = n(937889),
    d = n(739566),
    p = n(267128),
    m = n(981631);
let f = i.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: m, compact: f = !1 } = e,
        g = m.state === s.Y.LOADED ? m.message : void 0,
        _ = (0, a.p)(),
        h = o.d.useExperiment({ location: "repliedMessage" }).enabled,
        b = i.useMemo(
            () =>
                (null == g ? void 0 : g.content) != null && "" !== g.content
                    ? (0, u.ZP)(g, {
                          formatInline: !0,
                          allowGameMentions: h,
                          shouldFilterKeywords: _,
                      }).content
                    : null,
            [g, _, h],
        ),
        { isReplyAuthorBlocked: E, isReplyAuthorIgnored: C } = (0, l.cj)(
            [c.Z],
            () => ({
                isReplyAuthorBlocked: null != g && c.Z.isBlockedForMessage(g),
                isReplyAuthorIgnored: null != g && c.Z.isIgnoredForMessage(g),
            }),
            [g],
        ),
        v = (0, d.Uj)(g),
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
function g(e, t, n, i, l) {
    return e.type !== m.uaV.REPLY || null == n
        ? null
        : (0, r.jsx)(f, {
              baseMessage: e,
              channel: t,
              referencedMessage: i,
              compact: l,
          });
}
