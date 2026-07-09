r.d(t, { A: () => c });
var s = r(64700),
    n = r(17928),
    l = r(964486),
    a = r(899847),
    i = r(695515),
    u = r(834981);
function c(e) {
    let t = (0, u.VT)(),
        r = (0, n.bG)([i.A], () => i.A.getAreLinkedUsersProcessed());
    (0, l.Ay)(() => {
        i.A.getAreLinkedUsersProcessed() || a.Ay.fetchLinkedUsers().catch(() => {});
    });
    let c = s.useRef(e);
    s.useEffect(() => {
        c.current = e;
    }, [e]);
    let d = s.useRef(null);
    s.useEffect(() => {
        if (r) {
            if (null == d.current) {
                d.current = t;
                return;
            }
            t > d.current && ((d.current = t), c.current());
        }
    }, [r, t]);
}
