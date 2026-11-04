var i = n(582128),
    r = n(855986),
    a = n(374710),
    s = n(734057),
    l = n(576705),
    o = n(403362),
    d = n(818348);
let c = [];
function u(e) {
    let t = (0, r.bG)([l.A], () => l.A.can(d.xB.MANAGE_THREADS, e));
    return i.useMemo(() => {
        let n = [...(e?.availableTags ?? [])];
        return (t || (n = n.filter((e) => !e.moderated)), n);
    }, [t, e?.availableTags]);
}
n.d(
    t,
    {},
    {
        OT: u,
        kt: function (e) {
            let t,
                n =
                    ((t = e?.parent_id),
                    (0, r.cf)(
                        [s.A],
                        () => {
                            let e = s.A.getChannel(t);
                            return (e?.availableTags ?? []).reduce((e, t) => ({ ...e, [t.id]: t }), {});
                        },
                        [t],
                    ));
            return i.useMemo(() => {
                let t = e?.appliedTags?.map((e) => n[e])?.filter(o.Vq) ?? c;
                return e?.isModeratorReportChannel() ? (0, a.Yj)(t) : t;
            }, [n, e]);
        },
        zt: function (e, t) {
            let n = u((0, r.bG)([s.A], () => s.A.getChannel(e?.parent_id), [e]));
            return i.useMemo(() => {
                let i = t.filter((e) => n.includes(e));
                return e?.isModeratorReportChannel() ? (0, a.Yj)(i) : i;
            }, [t, n, e]);
        },
    },
);
