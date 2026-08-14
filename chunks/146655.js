"use strict";
n.d(t, { A: () => I });
var i = n(582128),
    r = n(17928),
    a = n(87664),
    s = n(517164),
    l = n(20805),
    o = n(83971),
    d = n(583846),
    c = n(626822),
    u = n(290863),
    _ = n(343129),
    E = n(731854);
let A = [],
    h = [];
function I(e) {
    let t = (0, r.bG)([c.Ay], () => c.Ay.supports(E.O5.VIDEO)),
        n = (0, a.A)(e),
        I = (0, r.bG)([u.A], () => u.A.getActivities(e)),
        f = (0, r.bG)([s.A], () => s.A.getUserOutbox(e)),
        { live: p, recent: T } = (0, i.useMemo)(() => {
            let e = (0, _.U)(I),
                t = f?.entries.filter(
                    (t) =>
                        !(0, d.Hd)(t) &&
                        ((0, l.Tq)(t)
                            ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, o.qb)(t, e))
                            : (0, l.Lf)(t)
                              ? !e.some((e) => null != e && (0, o.SU)(t, e))
                              : (0, l.$R)(t)),
                );
            return { live: 0 === e.length ? A : e, recent: null == t || 0 === t.length ? h : t };
        }, [I, f?.entries]);
    return { live: p, recent: T, stream: t ? n : null, outbox: f };
}
