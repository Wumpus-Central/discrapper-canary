"use strict";
n.d(t, { A: () => p });
var i = n(64700),
    r = n(735438),
    s = n(17928),
    a = n(87664),
    o = n(517164),
    l = n(20805),
    u = n(83971),
    c = n(832384),
    d = n(290863),
    _ = n(652215);
let f = [],
    h = [];
function p(e) {
    let t = (0, a.A)(e),
        n = (0, s.bG)([d.A], () => d.A.getActivities(e)),
        p = (0, s.bG)([o.A], () => o.A.getUserOutbox(e)),
        E = (0, i.useMemo)(
            () =>
                n.filter((e) => {
                    let { type: t } = e;
                    return t !== _.$pd.CUSTOM_STATUS && t !== _.$pd.HANG_STATUS;
                }),
            [n],
        ),
        { live: m, recent: g } = (0, i.useMemo)(() => {
            let e = (0, r.uniqWith)(
                    E,
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
                t = p?.entries.filter(
                    (t) =>
                        !(0, c.Hd)(t) &&
                        ((0, l.Tq)(t)
                            ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, u.qb)(t, e))
                            : (0, l.Lf)(t)
                              ? !e.some((e) => null != e && (0, u.SU)(t, e))
                              : (0, l.$R)(t)),
                );
            return { live: 0 === e.length ? f : e, recent: null == t || 0 === t.length ? h : t };
        }, [E, p?.entries]);
    return { live: m, recent: g, stream: t, outbox: p };
}
