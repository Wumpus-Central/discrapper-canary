i.d(t, { A: () => x });
var l = i(64700),
    n = i(735438),
    s = i(311907),
    a = i(87664),
    d = i(517164),
    r = i(20805),
    o = i(83971),
    c = i(583846),
    u = i(290863),
    A = i(652215);
let h = [],
    g = [];
function x(e) {
    let t = (0, a.A)(e),
        i = (0, s.bG)([u.A], () => u.A.getActivities(e)),
        x = (0, s.bG)([d.A], () => d.A.getUserOutbox(e)),
        m = (0, l.useMemo)(
            () =>
                i.filter((e) => {
                    let { type: t } = e;
                    return t !== A.$pd.CUSTOM_STATUS && t !== A.$pd.HANG_STATUS;
                }),
            [i],
        ),
        { live: C, recent: _ } = (0, l.useMemo)(() => {
            let e = (0, n.uniqWith)(
                    m,
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
                t = x?.entries.filter(
                    (t) =>
                        !(0, c.Hd)(t) &&
                        ((0, r.Tq)(t)
                            ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, o.qb)(t, e))
                            : (0, r.Lf)(t)
                              ? !e.some((e) => null != e && (0, o.SU)(t, e))
                              : (0, r.$R)(t)),
                );
            return { live: 0 === e.length ? h : e, recent: null == t || 0 === t.length ? g : t };
        }, [m, x?.entries]);
    return { live: C, recent: _, stream: t, outbox: x };
}
