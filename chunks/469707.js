"use strict";
n.d(t, { A: () => a });
var i = n(311907),
    s = n(401843),
    l = n(616356),
    r = n(961350);
function a(e, t) {
    let n = (0, i.bG)([r.default], () => r.default.getId()),
        a = (0, i.bG)([l.A], () => {
            let t = l.A.getCurrentUserActiveStream();
            return null != t && t.channelId === e;
        }, [e]);
    return [
        (null == t || t === n) && a,
        (0, i.bG)([l.A], () => l.A.isSelfStreamHidden(e), [e]),
        (t) => {
            (0, s.Ho)(e, t);
        },
    ];
}
