n.d(t, { Z: () => u });
var i = n(381499),
    r = n(601992),
    a = n(675478),
    s = n(885110),
    o = n(626135),
    l = n(981631);
async function u(e, t, n, u) {
    null == t && (t = s.Z.getStatus()),
        await a.hW.updateAsync(
            'status',
            (t) => {
                (t.status = i.Gm.create({ value: e })), (t.statusExpiresAtMs = null != u ? ''.concat(Date.now() + u) : '0');
            },
            a.fy.INFREQUENT_USER_ACTION
        );
    let c = {
        next_status: e,
        prev_status: t,
        ...r.Z.getGlobalStats()
    };
    null != n &&
        (c = {
            ...c,
            ...n,
            expire_duration_minutes: null != u ? u / 1000 : null
        }),
        o.default.track(l.rMx.USER_STATUS_UPDATED, c);
}
