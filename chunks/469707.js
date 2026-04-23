t.d(n, { A: () => r });
var l = t(311907),
    i = t(401843),
    a = t(616356),
    s = t(961350);
function r(e, n) {
    let t = (0, l.bG)([s.default], () => s.default.getId()),
        r = (0, l.bG)([a.A], () => {
            let n = a.A.getCurrentUserActiveStream();
            return null != n && n.channelId === e;
        }, [e]);
    return [
        (null == n || n === t) && r,
        (0, l.bG)([a.A], () => a.A.isSelfStreamHidden(e), [e]),
        (n) => {
            (0, i.Ho)(e, n);
        },
    ];
}
