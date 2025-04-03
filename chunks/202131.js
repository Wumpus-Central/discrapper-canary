n.d(t, { N: () => u }), n(47120), n(301563), n(230036);
var r = n(626135),
    i = n(960048),
    o = n(592204),
    c = n(803141),
    a = n(603158),
    s = n(981631);
function u(e, t) {
    (0, o.pB)({ location: 'keyword_substituted_content' });
    try {
        let n = (function (e) {
            var t;
            let n = c.Z.getKeywordTrie();
            if ('' === e) return [];
            let r = (0, a.F)(e).toLowerCase();
            return Object.values(null != (t = null == n ? void 0 : n.search(r)) ? t : {});
        })(e);
        if (0 === n.length) return e;
        return (
            n.forEach((e) => {
                r.default.track(s.rMx.KEYWORD_FILTER_MATCH, {
                    message_id: null == t ? void 0 : t.messageId,
                    channel_id: null == t ? void 0 : t.channelId,
                    author_id: null == t ? void 0 : t.authorId,
                    keyword: e.keyword
                });
            }),
            n
                .sort((e, t) => t.start - e.start)
                .reduce(
                    (e, n) =>
                        (function (e, t, n) {
                            let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                                i = Math.max(t, 0),
                                o = Math.min(n, e.length - 1),
                                c = r ? '\\*' : '*',
                                a = [...e.substring(i, o + 1)].map((e) => (' ' === e ? ' ' : c)).join('');
                            return ''
                                .concat(e.substring(0, i))
                                .concat(a)
                                .concat(e.substring(o + 1));
                        })(e, n.start, n.end, null == t ? void 0 : t.escapeReplacement),
                    e
                )
        );
    } catch (t) {
        return i.Z.captureException(t, { tags: { app_context: 'keyword_filtering' } }), e;
    }
}
