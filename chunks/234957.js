n.d(t, {
    A: () => _,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(352505),
    o = n(9842),
    l = n(994500),
    c = n(465364),
    u = n(763754),
    d = n(448368),
    f = n(652215);
let p = i.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: f, compact: p = !1 } = e,
        _ = f.state === o.a.LOADED ? f.message : void 0,
        h = s.m.useExperiment({
            location: "repliedMessage",
        }).enabled,
        m = i.useMemo(
            () =>
                (null == _ ? void 0 : _.content) != null && "" !== _.content
                    ? (0, c.Ay)(_, {
                          formatInline: !0,
                          allowGameMentions: h,
                      }).content
                    : null,
            [_, h],
        ),
        { isReplyAuthorBlocked: g, isReplyAuthorIgnored: E } = (0, a.cf)(
            [l.A],
            () => ({
                isReplyAuthorBlocked: null != _ && l.A.isBlockedForMessage(_),
                isReplyAuthorIgnored: null != _ && l.A.isIgnoredForMessage(_),
            }),
            [_],
        ),
        b = (0, u.X4)(_),
        y = (0, u.X4)(t);
    return (0, r.jsx)(d.A, {
        repliedAuthor: b,
        baseAuthor: y,
        baseMessage: t,
        channel: n,
        referencedMessage: f,
        content: m,
        compact: p,
        isReplyAuthorBlocked: g,
        isReplyAuthorIgnored: E,
        isReplySpineClickable: !1,
        showReplySpine: !0,
    });
});

function _(e, t, n, i, a) {
    return e.type !== f.lAJ.REPLY || null == n
        ? null
        : (0, r.jsx)(p, {
              baseMessage: e,
              channel: t,
              referencedMessage: i,
              compact: a,
          });
}
