n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(627050),
    s = n(869765),
    l = n(699516),
    c = n(937889),
    u = n(739566),
    d = n(267128),
    f = n(981631);
let p = i.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: f, compact: p = !1 } = e,
        _ = f.state === s.Y.LOADED ? f.message : void 0,
        m = o.d.useExperiment({ location: "repliedMessage" }).enabled,
        h = i.useMemo(
            () =>
                (null == _ ? void 0 : _.content) != null && "" !== _.content
                    ? (0, c.ZP)(_, {
                          formatInline: !0,
                          allowGameMentions: m,
                      }).content
                    : null,
            [_, m],
        ),
        { isReplyAuthorBlocked: g, isReplyAuthorIgnored: E } = (0, a.cj)(
            [l.Z],
            () => ({
                isReplyAuthorBlocked: null != _ && l.Z.isBlockedForMessage(_),
                isReplyAuthorIgnored: null != _ && l.Z.isIgnoredForMessage(_),
            }),
            [_],
        ),
        b = (0, u.Uj)(_),
        y = (0, u.Uj)(t);
    return (0, r.jsx)(d.Z, {
        repliedAuthor: b,
        baseAuthor: y,
        baseMessage: t,
        channel: n,
        referencedMessage: f,
        content: h,
        compact: p,
        isReplyAuthorBlocked: g,
        isReplyAuthorIgnored: E,
        isReplySpineClickable: !1,
        showReplySpine: !0,
    });
});
function _(e, t, n, i, a) {
    return e.type !== f.uaV.REPLY || null == n
        ? null
        : (0, r.jsx)(p, {
              baseMessage: e,
              channel: t,
              referencedMessage: i,
              compact: a,
          });
}
