n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(935649),
    o = n(847599),
    l = n(870383),
    c = n(36149),
    u = n(985018);

function d(e) {
    let { channelId: t } = e,
        n = (0, c.b8)(),
        d = (0, c.i2)(),
        f = (0, l.W)(u.intl.string(u.t.KPGVWl), u.intl.string(u.t["9KiIz6"])),
        p = u.intl.string(u.t["/nicWo"]),
        _ = i.useCallback(() => {
            s.A.showAgeVerificationGetStartedModal({
                entryPoint: o.q1.SYSTEM_DM_RETRY_BUTTON,
            }),
                (0, o.UT)(o.Im.RETRY, t);
        }, [t]);
    return (0, r.jsx)(a.Button, {
        variant: "primary",
        text: n ? f : p,
        onClick: _,
        disabled: !d,
    });
}
