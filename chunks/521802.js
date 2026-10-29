i.d(n, { A: () => r });
var t = i(17928),
    l = i(260498),
    o = i(722701),
    a = i(998979),
    c = i(276983);
function r(e) {
    return (0, t.yK)(
        [l.Ay, o.A, a.A],
        () => {
            if (null == e) return [];
            let n = l.Ay.findProjectByApplicationId(e),
                i =
                    null != n && n.preview_application_id === e
                        ? o.A.getPublishStatus(n.id)?.previewDevicePermissions
                        : void 0;
            return c.jQ.filter((n) => (0, c.yG)(n) && (null != a.A.getDecision(e, n) || (i?.includes(n) ?? !1)));
        },
        [e],
    );
}
