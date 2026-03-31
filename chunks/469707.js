n.d(t, { A: () => r });
var i = n(311907),
    l = n(401843),
    s = n(616356),
    a = n(961350);
function r(e, t) {
    let n = (0, i.bG)([a.default], () => a.default.getId()),
        r = (0, i.bG)([s.A], () => {
            let t = s.A.getCurrentUserActiveStream();
            return null != t && t.channelId === e;
        }, [e]);
    return [
        (null == t || t === n) && r,
        (0, i.bG)([s.A], () => s.A.isSelfStreamHidden(e), [e]),
        (t) => {
            (0, l.Ho)(e, t);
        },
    ];
}
