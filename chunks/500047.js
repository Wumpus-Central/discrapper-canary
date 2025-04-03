n.d(t, { R: () => o });
var r = n(200651),
    i = n(192379),
    s = n(690221),
    a = n(431516);
function l(e) {
    return e;
}
function o(e) {
    let { onEnableMFAClick: t, onMFAEnabled: n } = e,
        { isUserMFAEnabled: o, isModerationMFAEnabled: c } = (0, a.N)(),
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
    return o && c ? l : u;
}
