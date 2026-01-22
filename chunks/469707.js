n.d(t, {
    A: () => s,
});
var r = n(311907),
    l = n(401843),
    i = n(616356),
    a = n(961350);

function s(e, t) {
    let n = (0, r.bG)([a.default], () => a.default.getId()),
        s = (0, r.bG)([i.A], () => {
            let t = i.A.getCurrentUserActiveStream();
            return null != t && t.channelId === e;
        }, [e]);
    return [
        (null == t || t === n) && s,
        (0, r.bG)([i.A], () => i.A.isSelfStreamHidden(e), [e]),
        (t) => {
            (0, l.Ho)(e, t);
        },
    ];
}
