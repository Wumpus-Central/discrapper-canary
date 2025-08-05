(n.d(t, { N: () => d }), n(388685), n(35282), n(642613));
var r = n(626135),
    i = n(960048),
    a = n(592204),
    o = n(803141),
    s = n(603158),
    l = n(981631);
function c(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = Math.max(t, 0),
        a = Math.min(n, e.length - 1),
        o = r ? '\\*' : '*',
        s = [...e.substring(i, a + 1)].map((e) => (' ' === e ? ' ' : o)).join('');
    return ''
        .concat(e.substring(0, i))
        .concat(s)
        .concat(e.substring(a + 1));
}
function u(e) {
    var t;
    let n = o.Z.getKeywordTrie();
    if ('' === e) return [];
    let r = (0, s.F)(e).toLowerCase();
    return Object.values(null != (t = null == n ? void 0 : n.search(r)) ? t : {});
}
function d(e, t) {
    (0, a.pB)({ location: 'keyword_substituted_content' });
    try {
        let n = u(e);
        if (0 === n.length) return e;
        return (
            n.forEach((e) => {
                r.default.track(l.rMx.KEYWORD_FILTER_MATCH, {
                    message_id: null == t ? void 0 : t.messageId,
                    channel_id: null == t ? void 0 : t.channelId,
                    author_id: null == t ? void 0 : t.authorId,
                    keyword: e.keyword
                });
            }),
            n.sort((e, t) => t.start - e.start).reduce((e, n) => c(e, n.start, n.end, null == t ? void 0 : t.escapeReplacement), e)
        );
    } catch (t) {
        return (i.Z.captureException(t, { tags: { app_context: 'keyword_filtering' } }), e);
    }
}
