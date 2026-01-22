n.d(t, {
    l: () => g,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(36525),
    a = n(997509),
    c = n(555337),
    o = n(310527),
    d = n(737331),
    u = n(446291),
    f = n(927573);

function g() {
    let {
            vanityURLCode: e,
            hasChanges: t,
            errorDetails: n,
        } = (0, l.cf)([d.A], () => ({
            vanityURLCode: d.A.vanityURLCode,
            hasChanges: d.A.hasChanges(),
            errorDetails: d.A.errorDetails,
        })),
        { guild: g, submitting: b, errors: m, hasChanges: p } = (0, l.cf)([c.A], () => c.A.getProps()),
        x = i.useMemo(() => (null != n ? (0, u.z)(null == n ? void 0 : n.code) : (0, f.$s)(m)), [m, n]),
        h = i.useCallback(async () => {
            if (
                null != g &&
                (t &&
                    (await (0, o.zf)(g.id, e, {
                        throwErr: !0,
                    })),
                p)
            ) {
                let e = {
                    premiumProgressBarEnabled: g.premiumProgressBarEnabled,
                    banner: g.banner,
                    splash: g.splash,
                };
                await a.A.saveGuild(g.id, e, {
                    throwErr: !0,
                });
            }
        }, [g, p, t, e]),
        j = i.useCallback(() => {
            null != g && (a.A.init(g.id), (0, o.fx)());
        }, [g]);
    return (0, r.jsx)(s.A, {
        submitting: b,
        errorMessage: x,
        onSave: h,
        onReset: j,
    });
}
