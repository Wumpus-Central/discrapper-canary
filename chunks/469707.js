n.d(t, { A: () => d });
var i = n(17928),
    r = n(401843),
    l = n(616356),
    a = n(280450);
function d(e, t) {
    let n = (0, i.bG)([a.default], () => a.default.getId()),
        d = (0, i.bG)([l.A], () => {
            let t = l.A.getCurrentUserActiveStream();
            return null != t && t.channelId === e;
        }, [e]);
    return [
        (null == t || t === n) && d,
        (0, i.bG)([l.A], () => l.A.isSelfStreamHidden(e), [e]),
        function (t) {
            (0, r.Ho)(e, t);
        },
    ];
}
