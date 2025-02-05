n.d(t, { Z: () => h });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(905405),
    s = n(869765),
    o = n(699516),
    c = n(937889),
    d = n(739566),
    u = n(267128),
    m = n(981631);
let _ = l.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: m, compact: _ = !1 } = e,
        h = m.state === s.Y.LOADED ? m.message : void 0,
        p = (0, r.p)(),
        g = l.useMemo(
            () =>
                (null == h ? void 0 : h.content) != null && '' !== h.content
                    ? (0, c.ZP)(h, {
                          formatInline: !0,
                          shouldFilterKeywords: p
                      }).content
                    : null,
            [h, p]
        ),
        { isReplyAuthorBlocked: f, isReplyAuthorIgnored: x } = (0, a.cj)(
            [o.Z],
            () => ({
                isReplyAuthorBlocked: null != h && o.Z.isBlockedForMessage(h),
                isReplyAuthorIgnored: null != h && o.Z.isIgnoredForMessage(h)
            }),
            [h]
        ),
        C = (0, d.Uj)(h),
        v = (0, d.Uj)(t);
    return (0, i.jsx)(u.Z, {
        repliedAuthor: C,
        baseAuthor: v,
        baseMessage: t,
        channel: n,
        referencedMessage: m,
        content: g,
        compact: _,
        isReplyAuthorBlocked: f,
        isReplyAuthorIgnored: x,
        isReplySpineClickable: !1,
        showReplySpine: !0
    });
});
function h(e, t, n, l, a) {
    return e.type !== m.uaV.REPLY || null == n
        ? null
        : (0, i.jsx)(_, {
              baseMessage: e,
              channel: t,
              referencedMessage: l,
              compact: a
          });
}
