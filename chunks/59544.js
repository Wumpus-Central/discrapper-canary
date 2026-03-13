"use strict";
n.d(t, { A: () => s, Q: () => c });
var a = n(64700),
    l = n(25171),
    i = n(880405);
function r() {
    let [e, t] = a.useState(!1);
    return (
        a.useEffect(() => {
            l.A.isProtocolRegistered("steam").then(t);
        }, []),
        e
    );
}
function s(e) {
    let t = r();
    return (0, i.Qq)(e, t);
}
function c(e) {
    let t = r();
    return a.useMemo(() => e.map((e) => (0, i.Qq)(e, t)), [e, t]);
}
