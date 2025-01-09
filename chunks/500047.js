n.d(t, {
    R: function () {
        return o;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(690221),
    s = n(431516);
function a(e) {
    return e;
}
function o(e) {
    let { onEnableMFAClick: t, onMFAEnabled: n } = e,
        { isUserMFAEnabled: o, isModerationMFAEnabled: c } = (0, s.N)(),
        d = r.useCallback(async () => {
            await t(), null == n || n();
        }, [t, n]),
        u = r.useCallback(
            (e) =>
                (0, i.jsx)(l.Z, {
                    onClick: d,
                    children: e
                }),
            [d]
        );
    return o && c ? a : u;
}
