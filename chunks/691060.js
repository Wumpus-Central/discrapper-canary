"use strict";
n.d(t, { OT: () => _, kt: () => d, zt: () => h });
var i = n(64700),
    r = n(17928),
    s = n(892340),
    a = n(734057),
    o = n(576705),
    l = n(403362),
    u = n(818348);
let c = [];
function d(e) {
    let t,
        n =
            ((t = e?.parent_id),
            (0, r.cf)([a.A], () => {
                let e = a.A.getChannel(t);
                return (e?.availableTags ?? []).reduce((e, t) => ({ ...e, [t.id]: t }), {});
            }, [t]));
    return i.useMemo(() => {
        let t = e?.appliedTags?.map((e) => n[e])?.filter(l.Vq) ?? c;
        return e?.isModeratorReportChannel() ? (0, s.Yj)(t) : t;
    }, [n, e]);
}
function _(e) {
    let t = (0, r.bG)([o.A], () => o.A.can(u.xB.MANAGE_THREADS, e));
    return i.useMemo(() => {
        let n = [...(e?.availableTags ?? [])];
        return t || (n = n.filter((e) => !e.moderated)), n;
    }, [t, e?.availableTags]);
}
function h(e, t) {
    let n = _((0, r.bG)([a.A], () => a.A.getChannel(e?.parent_id), [e]));
    return i.useMemo(() => {
        let i = t.filter((e) => n.includes(e));
        return e?.isModeratorReportChannel() ? (0, s.Yj)(i) : i;
    }, [t, n, e]);
}
