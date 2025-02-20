n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(905405),
    l = n(869765),
    s = n(699516),
    c = n(937889),
    d = n(739566),
    u = n(267128),
    p = n(981631);
let m = i.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: p, compact: m = !1 } = e,
        f = p.state === l.Y.LOADED ? p.message : void 0,
        h = (0, o.p)(),
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
        v = (0, d.Uj)(f),
        y = (0, d.Uj)(t);
    return (0, r.jsx)(u.Z, {
        repliedAuthor: v,
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
