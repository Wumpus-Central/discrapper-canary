n.d(t, { S: () => o });
var i = n(627968),
    l = n(64700),
    s = n(95035),
    r = n(192701);
function a(e) {
    return e;
}
function o(e) {
    let { onEnableMFAClick: t, onMFAEnabled: n } = e,
        { isUserMFAEnabled: o, isModerationMFAEnabled: d } = (0, r.f)(),
        c = l.useCallback(async () => {
            await t(), n?.();
        }, [t, n]),
        u = l.useCallback((e) => (0, i.jsx)(s.A, { onClick: c, children: e }), [c]);
    return o && d ? a : u;
}
