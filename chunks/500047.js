n.d(t, { R: () => o });
var r = n(200651),
    i = n(192379),
    s = n(690221),
    l = n(431516);
function a(e) {
    return e;
}
function o(e) {
    let { onEnableMFAClick: t, onMFAEnabled: n } = e,
        { isUserMFAEnabled: o, isModerationMFAEnabled: c } = (0, l.N)(),
        d = i.useCallback(async () => {
            await t(), null == n || n();
        }, [t, n]),
        u = i.useCallback(
            (e) =>
                (0, r.jsx)(s.Z, {
                    onClick: d,
                    children: e
                }),
            [d]
        );
    return o && c ? a : u;
}
