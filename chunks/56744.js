n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(905405),
    s = n(869765),
    l = n(699516),
    c = n(937889),
    u = n(739566),
    d = n(267128),
    f = n(981631);
let _ = i.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: f, compact: _ = !1 } = e,
        p = f.state === s.Y.LOADED ? f.message : void 0,
        h = (0, a.p)(),
        m = i.useMemo(
            () =>
                (null == p ? void 0 : p.content) != null && "" !== p.content
                    ? (0, c.ZP)(p, {
                          formatInline: !0,
                          shouldFilterKeywords: h,
                      }).content
                    : null,
            [p, h],
        ),
        { isReplyAuthorBlocked: g, isReplyAuthorIgnored: E } = (0, o.cj)(
            [l.Z],
            () => ({
                isReplyAuthorBlocked: null != p && l.Z.isBlockedForMessage(p),
                isReplyAuthorIgnored: null != p && l.Z.isIgnoredForMessage(p),
            }),
            [p],
        ),
        b = (0, u.Uj)(p),
        y = (0, u.Uj)(t);
    return (0, r.jsx)(d.Z, {
        repliedAuthor: b,
        baseAuthor: y,
        baseMessage: t,
        channel: n,
        referencedMessage: f,
        content: m,
        compact: _,
        isReplyAuthorBlocked: g,
        isReplyAuthorIgnored: E,
        isReplySpineClickable: !1,
        showReplySpine: !0,
    });
});
function p(e, t, n, i, o) {
    return e.type !== f.uaV.REPLY || null == n
        ? null
        : (0, r.jsx)(_, {
              baseMessage: e,
              channel: t,
              referencedMessage: i,
              compact: o,
          });
}
