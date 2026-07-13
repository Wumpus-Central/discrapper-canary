"use strict";
n.d(t, { A: () => d });
var i = n(64700),
    r = n(17928),
    a = n(964486),
    s = n(899847),
    l = n(695515),
    o = n(834981);
function d(e) {
    let t = (0, o.VT)(),
        n = (0, r.bG)([l.A], () => l.A.getAreLinkedUsersProcessed());
    (0, a.Ay)(() => {
        l.A.getAreLinkedUsersProcessed() || s.Ay.fetchLinkedUsers().catch(() => {});
    });
    let d = i.useRef(e);
    i.useEffect(() => {
        d.current = e;
    }, [e]);
    let c = i.useRef(null);
    i.useEffect(() => {
        if (!n) return;
        if (null == c.current) {
            c.current = t;
            return;
        }
        let e = t > c.current;
        (c.current = t), e && d.current();
    }, [n, t]);
}
