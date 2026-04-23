l.d(t, { A: () => h });
var n = l(64700),
    i = l(735438),
    r = l(17928),
    a = l(87664),
    s = l(517164),
    u = l(20805),
    o = l(83971),
    d = l(583846),
    c = l(290863),
    A = l(652215);
let _ = [],
    T = [];
function h(e) {
    let t = (0, a.A)(e),
        l = (0, r.bG)([c.A], () => c.A.getActivities(e)),
        h = (0, r.bG)([s.A], () => s.A.getUserOutbox(e)),
        g = (0, n.useMemo)(
            () =>
                l.filter((e) => {
                    let { type: t } = e;
                    return t !== A.$pd.CUSTOM_STATUS && t !== A.$pd.HANG_STATUS;
                }),
            [l],
        ),
        { live: E, recent: O } = (0, n.useMemo)(() => {
            let e = (0, i.uniqWith)(
                    g,
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
                t = h?.entries.filter(
                    (t) =>
                        !(0, d.Hd)(t) &&
                        ((0, u.Tq)(t)
                            ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, o.qb)(t, e))
                            : (0, u.Lf)(t)
                              ? !e.some((e) => null != e && (0, o.SU)(t, e))
                              : (0, u.$R)(t)),
                );
            return { live: 0 === e.length ? _ : e, recent: null == t || 0 === t.length ? T : t };
        }, [g, h?.entries]);
    return { live: E, recent: O, stream: t, outbox: h };
}
