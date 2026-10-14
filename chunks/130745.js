t.d(n, { A: () => h });
var l = t(582128),
    a = t(376943),
    u = t(976860),
    r = t(856151);
let s = new WeakSet();
function c(e, n) {
    if (n.hash.length <= 1 || s.has(n)) return;
    let t = (0, a.vu)(n.pathname);
    t?.channelId === e && null == t.threadId && null == t.messageId && (s.add(n), (0, r.f2)(e, n.hash));
}
function h(e) {
    l.useEffect(() => {
        let n = (0, u.JK)();
        return (c(e, n.location), n.listen((n) => c(e, n)));
    }, [e]);
}
