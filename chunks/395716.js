n.d(t, { Z: () => u }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(442837),
    o = n(481060),
    l = n(287734),
    s = n(592125),
    c = n(693546),
    d = n(388032);
function u(e) {
    let { joinRequest: t } = e,
        [n, u] = a.useState(!1),
        m = (0, i.e7)([s.Z], () => s.Z.getChannel(t.interviewChannelId)),
        p = a.useCallback(() => {
            (0, o.showToast)((0, o.createToast)(d.NW.string(d.t.R0RpRU), o.ToastType.FAILURE));
        }, []),
        f = a.useCallback(async () => {
            if (null != m) return void l.default.selectPrivateChannel(m.id);
            if (!n) {
                u(!0);
                try {
                    await c.Z.createOrEnterJoinRequestInterview(t.joinRequestId);
                } catch (e) {
                    p();
                } finally {
                    u(!1);
                }
            }
        }, [m, t.joinRequestId, p, n]);
    return (0, r.jsx)(o.zxk, {
        color: o.zxk.Colors.BRAND,
        submitting: n,
        onClick: f,
        children: d.NW.string(d.t.x2UVBA)
    });
}
