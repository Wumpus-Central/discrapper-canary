n.d(t, { a: () => i });
var a = n(64700),
    s = n(101292);
function i(e) {
    let t = a.useCallback((t) => !0 === t.seenUnfurlQuestIds[e], [e]),
        n = (0, s.q)(t),
        i = (0, s.q)((e) => e.markUnfurlSeen);
    return {
        hasSeenUnfurl: n,
        handleUnfurlDismissed: a.useCallback(() => {
            i(e);
        }, [i, e]),
    };
}
