i.d(s, { A: () => m });
var l = i(477900),
    n = i(582128),
    a = i(17928),
    t = i(9842),
    d = i(994500),
    r = i(763754),
    c = i(448368),
    o = i(538355),
    u = i(652215);
let g = { formatInline: !0, allowGameMentions: !0 },
    A = n.memo(function (e) {
        let { baseMessage: s, channel: i, referencedMessage: n, compact: u = !1 } = e,
            A = n.state === t.a.LOADED ? n.message : void 0,
            { content: m } = (0, o.A)(A ?? null, g),
            h = A?.content != null && "" !== A.content ? m : null,
            { isReplyAuthorBlocked: E, isReplyAuthorIgnored: p } = (0, a.cf)(
                [d.A],
                () => ({
                    isReplyAuthorBlocked: null != A && d.A.isBlockedForMessage(A),
                    isReplyAuthorIgnored: null != A && d.A.isIgnoredForMessage(A),
                }),
                [A],
            ),
            M = (0, r.X4)(A),
            f = (0, r.X4)(s);
        return (0, l.jsx)(c.A, {
            repliedAuthor: M,
            baseAuthor: f,
            baseMessage: s,
            channel: i,
            referencedMessage: n,
            content: h,
            compact: u,
            isReplyAuthorBlocked: E,
            isReplyAuthorIgnored: p,
            isReplySpineClickable: !1,
            showReplySpine: !0,
        });
    });
function m(e, s, i, n, a) {
    return e.type !== u.lAJ.REPLY || null == i
        ? null
        : (0, l.jsx)(A, { baseMessage: e, channel: s, referencedMessage: n, compact: a });
}
