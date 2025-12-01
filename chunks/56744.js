n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(627050),
    s = n(905405),
    l = n(869765),
    c = n(699516),
    u = n(937889),
    d = n(739566),
    f = n(267128),
    p = n(981631);
let _ = i.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: p, compact: _ = !1 } = e,
        m = p.state === l.Y.LOADED ? p.message : void 0,
        h = (0, s.p)(),
        g = o.d.useExperiment({ location: "repliedMessage" }).enabled,
        E = i.useMemo(
            () =>
                (null == m ? void 0 : m.content) != null && "" !== m.content
                    ? (0, u.ZP)(m, {
                          formatInline: !0,
                          allowGameMentions: g,
                          shouldFilterKeywords: h,
                      }).content
                    : null,
            [m, h, g],
        ),
        { isReplyAuthorBlocked: b, isReplyAuthorIgnored: y } = (0, a.cj)(
            [c.Z],
            () => ({
                isReplyAuthorBlocked: null != m && c.Z.isBlockedForMessage(m),
                isReplyAuthorIgnored: null != m && c.Z.isIgnoredForMessage(m),
            }),
            [m],
        ),
        O = (0, d.Uj)(m),
        v = (0, d.Uj)(t);
    return (0, r.jsx)(f.Z, {
        repliedAuthor: O,
        baseAuthor: v,
        baseMessage: t,
        channel: n,
        referencedMessage: p,
        content: E,
        compact: _,
        isReplyAuthorBlocked: b,
        isReplyAuthorIgnored: y,
        isReplySpineClickable: !1,
        showReplySpine: !0,
    });
});
function m(e, t, n, i, a) {
    return e.type !== p.uaV.REPLY || null == n
        ? null
        : (0, r.jsx)(_, {
              baseMessage: e,
              channel: t,
              referencedMessage: i,
              compact: a,
          });
}
