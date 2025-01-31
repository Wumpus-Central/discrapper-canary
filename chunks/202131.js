n.d(t, { N: () => d }), n(47120), n(724458);
var i = n(626135),
    r = n(960048),
    a = n(592204),
    s = n(803141),
    o = n(603158),
    l = n(981631);
function u(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = Math.max(t, 0),
        a = Math.min(n, e.length - 1),
        s = i ? '\\*' : '*',
        o = [...e.substring(r, a + 1)].map((e) => (' ' === e ? ' ' : s)).join('');
    return ''
        .concat(e.substring(0, r))
        .concat(o)
        .concat(e.substring(a + 1));
}
function c(e) {
    var t;
    let n = s.Z.getKeywordTrie();
    if ('' === e) return [];
    let i = (0, o.F)(e).toLowerCase();
    return Object.values(null !== (t = null == n ? void 0 : n.search(i)) && void 0 !== t ? t : {});
}
function d(e, t) {
    (0, a.pB)({ location: 'keyword_substituted_content' });
    try {
        let n = c(e);
        if (0 === n.length) return e;
        return (
            n.forEach((e) => {
                i.default.track(l.rMx.KEYWORD_FILTER_MATCH, {
                    message_id: null == t ? void 0 : t.messageId,
                    channel_id: null == t ? void 0 : t.channelId,
                    author_id: null == t ? void 0 : t.authorId,
                    keyword: e.keyword
                });
            }),
            n.sort((e, t) => t.start - e.start).reduce((e, n) => u(e, n.start, n.end, null == t ? void 0 : t.escapeReplacement), e)
        );
    } catch (t) {
        return r.Z.captureException(t, { tags: { app_context: 'keyword_filtering' } }), e;
    }
}
