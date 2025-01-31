n.d(t, { Z: () => _ });
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
let h = l.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: m, compact: h = !1 } = e,
        _ = m.state === s.Y.LOADED ? m.message : void 0,
        p = (0, r.p)(),
        g = l.useMemo(
            () =>
                (null == _ ? void 0 : _.content) != null && '' !== _.content
                    ? (0, c.ZP)(_, {
                          formatInline: !0,
                          shouldFilterKeywords: p
                      }).content
                    : null,
            [_, p]
        ),
        { isReplyAuthorBlocked: f, isReplyAuthorIgnored: x } = (0, a.cj)(
            [o.Z],
            () => ({
                isReplyAuthorBlocked: null != _ && o.Z.isBlockedForMessage(_),
                isReplyAuthorIgnored: null != _ && o.Z.isIgnoredForMessage(_)
            }),
            [_]
        ),
        E = (0, d.Uj)(_),
        C = (0, d.Uj)(t);
    return (0, i.jsx)(u.Z, {
        repliedAuthor: E,
        baseAuthor: C,
        baseMessage: t,
        channel: n,
        referencedMessage: m,
        content: g,
        compact: h,
        isReplyAuthorBlocked: f,
        isReplyAuthorIgnored: x,
        isReplySpineClickable: !1,
        showReplySpine: !0
    });
});
function _(e, t, n, l, a) {
    return e.type !== m.uaV.REPLY || null == n
        ? null
        : (0, i.jsx)(h, {
              baseMessage: e,
              channel: t,
              referencedMessage: l,
              compact: a
          });
}
