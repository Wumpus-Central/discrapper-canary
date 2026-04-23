"use strict";
i.d(t, { A: () => f });
var r = i(64700),
    a = i(735438),
    n = i(311907),
    s = i(87664),
    l = i(517164),
    o = i(20805),
    c = i(83971),
    d = i(583846),
    u = i(290863),
    _ = i(652215);
let p = [],
    h = [];
function f(e) {
    let t = (0, s.A)(e),
        i = (0, n.bG)([u.A], () => u.A.getActivities(e)),
        f = (0, n.bG)([l.A], () => l.A.getUserOutbox(e)),
        A = (0, r.useMemo)(
            () =>
                i.filter((e) => {
                    let { type: t } = e;
                    return t !== _.$pd.CUSTOM_STATUS && t !== _.$pd.HANG_STATUS;
                }),
            [i],
        ),
        { live: g, recent: b } = (0, r.useMemo)(() => {
            let e = (0, a.uniqWith)(
                    A,
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
                t = f?.entries.filter(
                    (t) =>
                        !(0, d.Hd)(t) &&
                        ((0, o.Tq)(t)
                            ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, c.qb)(t, e))
                            : (0, o.Lf)(t)
                              ? !e.some((e) => null != e && (0, c.SU)(t, e))
                              : (0, o.$R)(t)),
                );
            return { live: 0 === e.length ? p : e, recent: null == t || 0 === t.length ? h : t };
        }, [A, f?.entries]);
    return { live: g, recent: b, stream: t, outbox: f };
}
