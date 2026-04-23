n.d(e, { A: () => i });
var l = n(496092);
function i(t, e, n, i) {
    let { scheduled_start_time: r, scheduled_end_time: a } = t;
    return null == r && null == a
        ? l.A.deleteGuildEventException(e, n, i)
        : l.A.updateGuildEventException({ scheduled_start_time: r, scheduled_end_time: a, is_canceled: !1 }, e, n, i);
}
