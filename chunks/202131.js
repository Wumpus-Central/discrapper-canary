r.d(n, {
    N: function () {
        return h;
    }
});
var i = r(47120);
var a = r(724458);
var o = r(626135),
    s = r(960048),
    l = r(592204),
    u = r(803141),
    c = r(603158),
    d = r(981631);
function f(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = Math.max(n, 0),
        o = Math.min(r, e.length - 1),
        s = i ? '\\*' : '*',
        l = [...e.substring(a, o + 1)].map((e) => (' ' === e ? ' ' : s)).join('');
    return ''
        .concat(e.substring(0, a))
        .concat(l)
        .concat(e.substring(o + 1));
}
function p(e) {
    var n;
    let r = u.Z.getKeywordTrie();
    if ('' === e) return [];
    let i = (0, c.F)(e).toLowerCase();
    return Object.values(null !== (n = null == r ? void 0 : r.search(i)) && void 0 !== n ? n : {});
}
function h(e, n) {
    (0, l.pB)({ location: 'keyword_substituted_content' });
    try {
        let r = p(e);
        if (0 === r.length) return e;
        return (
            r.forEach((e) => {
                o.default.track(d.rMx.KEYWORD_FILTER_MATCH, {
                    message_id: null == n ? void 0 : n.messageId,
                    channel_id: null == n ? void 0 : n.channelId,
                    author_id: null == n ? void 0 : n.authorId,
                    keyword: e.keyword
                });
            }),
            r.sort((e, n) => n.start - e.start).reduce((e, r) => f(e, r.start, r.end, null == n ? void 0 : n.escapeReplacement), e)
        );
    } catch (n) {
        return s.Z.captureException(n, { tags: { app_context: 'keyword_filtering' } }), e;
    }
}
