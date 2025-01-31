n.d(t, { Z: () => u }), n(47120);
var a = n(200651),
    i = n(192379),
    r = n(442837),
    l = n(481060),
    o = n(287734),
    s = n(592125),
    c = n(693546),
    d = n(388032);
function u(e) {
    let { joinRequest: t } = e,
        [n, u] = i.useState(!1),
        m = (0, r.e7)([s.Z], () => s.Z.getChannel(t.interviewChannelId)),
        _ = i.useCallback(() => {
            (0, l.showToast)((0, l.createToast)(d.intl.string(d.t.R0RpRU), l.ToastType.FAILURE));
        }, []),
        x = i.useCallback(async () => {
            if (null != m) {
                o.default.selectPrivateChannel(m.id);
                return;
            }
            if (!n) {
                u(!0);
                try {
                    await c.Z.createOrEnterJoinRequestInterview(t.joinRequestId);
                } catch {
                    _();
                } finally {
                    u(!1);
                }
            }
        }, [m, t.joinRequestId, _, n]);
    return (0, a.jsx)(l.zxk, {
        color: l.zxk.Colors.BRAND,
        submitting: n,
        onClick: x,
        children: d.intl.string(d.t.aqiUAA)
    });
}
