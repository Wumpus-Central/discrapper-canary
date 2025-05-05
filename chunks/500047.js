n.d(t, { R: () => o });
var r = n(255367),
    i = n(73800),
    l = n(690221),
    s = n(431516);
function a(e) {
    return e;
}
function o(e) {
    let { onEnableMFAClick: t, onMFAEnabled: n } = e,
        { isUserMFAEnabled: o, isModerationMFAEnabled: c } = (0, s.N)(),
        u = i.useCallback(async () => {
            await t(), null == n || n();
        }, [t, n]),
        d = i.useCallback(
            (e) =>
                (0, r.jsx)(l.Z, {
                    onClick: u,
                    children: e
                }),
            [u]
        );
    return o && c ? a : d;
}
