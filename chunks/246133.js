r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(381499),
    a = r(601992),
    o = r(675478),
    s = r(885110),
    l = r(626135),
    u = r(981631);
async function c(e, n, r, c) {
    null == n && (n = s.Z.getStatus()),
        await o.hW.updateAsync(
            'status',
            (n) => {
                (n.status = i.Gm.create({ value: e })), (n.statusExpiresAtMs = null != c ? ''.concat(Date.now() + c) : '0');
            },
            o.fy.INFREQUENT_USER_ACTION
        );
    let d = {
        next_status: e,
        prev_status: n,
        ...a.Z.getGlobalStats()
    };
    null != r &&
        (d = {
            ...d,
            ...r,
            expire_duration_minutes: null != c ? c / 1000 : null
        }),
        l.default.track(u.rMx.USER_STATUS_UPDATED, d);
}
