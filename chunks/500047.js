n.d(t, { R: () => o });
var r = n(200651),
    i = n(192379),
    l = n(690221),
    s = n(431516);
function a(e) {
    return e;
}
function o(e) {
    let { onEnableMFAClick: t, onMFAEnabled: n } = e,
        { isUserMFAEnabled: o, isModerationMFAEnabled: c } = (0, s.N)(),
        d = i.useCallback(async () => {
            await t(), null == n || n();
        }, [t, n]),
        u = i.useCallback(
            (e) =>
                (0, r.jsx)(l.Z, {
                    onClick: d,
                    children: e
                }),
            [d]
        );
    return o && c ? a : u;
}
