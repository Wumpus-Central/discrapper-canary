n.d(t, { S: () => c });
var r = n(627968),
    i = n(64700),
    l = n(95035),
    s = n(192701);
function a(e) {
    return e;
}
function c(e) {
    let { onEnableMFAClick: t, onMFAEnabled: n } = e,
        { isUserMFAEnabled: c, isModerationMFAEnabled: o } = (0, s.f)(),
        d = i.useCallback(async () => {
            await t(), null == n || n();
        }, [t, n]),
        u = i.useCallback(
            (e) =>
                (0, r.jsx)(l.A, {
                    onClick: d,
                    children: e,
                }),
            [d],
        );
    return c && o ? a : u;
}
