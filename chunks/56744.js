n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    l = n(905405),
    o = n(869765),
    s = n(699516),
    c = n(937889),
    u = n(739566),
    d = n(267128),
    p = n(981631);
let m = i.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: p, compact: m = !1 } = e,
        f = p.state === o.Y.LOADED ? p.message : void 0,
        h = (0, l.p)(),
        g = i.useMemo(
            () =>
                (null == f ? void 0 : f.content) != null && '' !== f.content
                    ? (0, c.ZP)(f, {
                          formatInline: !0,
                          shouldFilterKeywords: h
                      }).content
                    : null,
            [f, h]
        ),
        { isReplyAuthorBlocked: _, isReplyAuthorIgnored: b } = (0, a.cj)(
            [s.Z],
            () => ({
                isReplyAuthorBlocked: null != f && s.Z.isBlockedForMessage(f),
                isReplyAuthorIgnored: null != f && s.Z.isIgnoredForMessage(f)
            }),
            [f]
        ),
        x = (0, u.Uj)(f),
        y = (0, u.Uj)(t);
    return (0, r.jsx)(d.Z, {
        repliedAuthor: x,
        baseAuthor: y,
        baseMessage: t,
        channel: n,
        referencedMessage: p,
        content: g,
        compact: m,
        isReplyAuthorBlocked: _,
        isReplyAuthorIgnored: b,
        isReplySpineClickable: !1,
        showReplySpine: !0
    });
});
function f(e, t, n, i, a) {
    return e.type !== p.uaV.REPLY || null == n
        ? null
        : (0, r.jsx)(m, {
              baseMessage: e,
              channel: t,
              referencedMessage: i,
              compact: a
          });
}
