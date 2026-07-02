"use strict";
n.d(t, { A: () => f });
var i = n(64700),
    r = n(17928),
    s = n(87664),
    a = n(517164),
    o = n(20805),
    l = n(83971),
    u = n(751765),
    c = n(290863),
    d = n(343129);
let _ = [],
    h = [];
function f(e) {
    let t = (0, s.A)(e),
        n = (0, r.bG)([c.A], () => c.A.getActivities(e)),
        f = (0, r.bG)([a.A], () => a.A.getUserOutbox(e)),
        { live: p, recent: E } = (0, i.useMemo)(() => {
            let e = (0, d.U)(n),
                t = f?.entries.filter(
                    (t) =>
                        !(0, u.Hd)(t) &&
                        ((0, o.Tq)(t)
                            ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, l.qb)(t, e))
                            : (0, o.Lf)(t)
                              ? !e.some((e) => null != e && (0, l.SU)(t, e))
                              : (0, o.$R)(t)),
                );
            return { live: 0 === e.length ? _ : e, recent: null == t || 0 === t.length ? h : t };
        }, [n, f?.entries]);
    return { live: p, recent: E, stream: t, outbox: f };
}
