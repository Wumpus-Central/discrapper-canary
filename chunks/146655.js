"use strict";
n.d(t, { A: () => A });
var i = n(64700),
    r = n(17928),
    a = n(87664),
    s = n(517164),
    l = n(20805),
    o = n(83971),
    d = n(583846),
    c = n(290863),
    u = n(343129);
let _ = [],
    E = [];
function A(e) {
    let t = (0, a.A)(e),
        n = (0, r.bG)([c.A], () => c.A.getActivities(e)),
        A = (0, r.bG)([s.A], () => s.A.getUserOutbox(e)),
        { live: h, recent: I } = (0, i.useMemo)(() => {
            let e = (0, u.U)(n),
                t = A?.entries.filter(
                    (t) =>
                        !(0, d.Hd)(t) &&
                        ((0, l.Tq)(t)
                            ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, o.qb)(t, e))
                            : (0, l.Lf)(t)
                              ? !e.some((e) => null != e && (0, o.SU)(t, e))
                              : (0, l.$R)(t)),
                );
            return { live: 0 === e.length ? _ : e, recent: null == t || 0 === t.length ? E : t };
        }, [n, A?.entries]);
    return { live: h, recent: I, stream: t, outbox: A };
}
