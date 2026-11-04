var l = n(855986),
    t = n(260498),
    c = n(722701),
    r = n(998979),
    a = n(276983);
n.d(
    i,
    {},
    {
        A: function (e) {
            return (0, l.yK)(
                [t.Ay, c.A, r.A],
                () => {
                    if (null == e) return [];
                    let i = t.Ay.findProjectByApplicationId(e),
                        n =
                            null != i && i.preview_application_id === e
                                ? c.A.getPublishStatus(i.id)?.previewDevicePermissions
                                : void 0;
                    return a.jQ.filter(
                        (i) => (0, a.yG)(i) && (null != r.A.getDecision(e, i) || (n?.includes(i) ?? !1)),
                    );
                },
                [e],
            );
        },
    },
);
