n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(9842),
    s = n(994500),
    o = n(465364),
    c = n(763754),
    d = n(448368),
    u = n(652215);
let m = l.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: u, compact: m = !1 } = e,
        _ = u.state === r.a.LOADED ? u.message : void 0,
        A = l.useMemo(
            () => (_?.content != null && "" !== _.content ? (0, o.Ay)(_, { formatInline: !0 }).content : null),
            [_],
        ),
        { isReplyAuthorBlocked: f, isReplyAuthorIgnored: h } = (0, a.cf)(
            [s.A],
            () => ({
                isReplyAuthorBlocked: null != _ && s.A.isBlockedForMessage(_),
                isReplyAuthorIgnored: null != _ && s.A.isIgnoredForMessage(_),
            }),
            [_],
        ),
        g = (0, c.X4)(_),
        E = (0, c.X4)(t);
    return (0, i.jsx)(d.A, {
        repliedAuthor: g,
        baseAuthor: E,
        baseMessage: t,
        channel: n,
        referencedMessage: u,
        content: A,
        compact: m,
        isReplyAuthorBlocked: f,
        isReplyAuthorIgnored: h,
        isReplySpineClickable: !1,
        showReplySpine: !0,
    });
});
function _(e, t, n, l, a) {
    return e.type !== u.lAJ.REPLY || null == n
        ? null
        : (0, i.jsx)(m, { baseMessage: e, channel: t, referencedMessage: l, compact: a });
}
