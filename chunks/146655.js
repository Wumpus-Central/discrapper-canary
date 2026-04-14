"use strict";
n.d(t, { A: () => h });
var r = n(64700),
    i = n(735438),
    s = n(311907),
    a = n(87664),
    o = n(517164),
    l = n(20805),
    u = n(83971),
    c = n(583846),
    d = n(290863),
    _ = n(652215);
let f = [],
    p = [];
function h(e) {
    let t = (0, a.A)(e),
        n = (0, s.bG)([d.A], () => d.A.getActivities(e)),
        h = (0, s.bG)([o.A], () => o.A.getUserOutbox(e)),
        m = (0, r.useMemo)(
            () =>
                n.filter((e) => {
                    let { type: t } = e;
                    return t !== _.$pd.CUSTOM_STATUS && t !== _.$pd.HANG_STATUS;
                }),
            [n],
        ),
        { live: E, recent: g } = (0, r.useMemo)(() => {
            let e = (0, i.uniqWith)(
                    m,
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
                t = h?.entries.filter(
                    (t) =>
                        !(0, c.Hd)(t) &&
                        ((0, l.Tq)(t)
                            ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, u.qb)(t, e))
                            : (0, l.Lf)(t)
                              ? !e.some((e) => null != e && (0, u.SU)(t, e))
                              : (0, l.$R)(t)),
                );
            return { live: 0 === e.length ? f : e, recent: null == t || 0 === t.length ? p : t };
        }, [m, h?.entries]);
    return { live: E, recent: g, stream: t, outbox: h };
}
