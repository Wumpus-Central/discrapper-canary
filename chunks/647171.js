"use strict";
n.d(t, { l: () => g });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(36525),
    a = n(997509),
    o = n(555337),
    d = n(310527),
    c = n(737331),
    u = n(446291),
    m = n(927573);
function g() {
    let {
            vanityURLCode: e,
            hasChanges: t,
            errorDetails: n,
        } = (0, l.cf)([c.A], () => ({
            vanityURLCode: c.A.vanityURLCode,
            hasChanges: c.A.hasChanges(),
            errorDetails: c.A.errorDetails,
        })),
        { guild: g, submitting: x, errors: h, hasChanges: _ } = (0, l.cf)([o.A], () => o.A.getProps()),
        A = s.useMemo(() => (null != n ? (0, u.z)(n?.code) : (0, m.$s)(h)), [h, n]),
        p = s.useCallback(async () => {
            if (null != g && (t && (await (0, d.zf)(g.id, e, { throwErr: !0 })), _)) {
                let e = { premiumProgressBarEnabled: g.premiumProgressBarEnabled, banner: g.banner, splash: g.splash };
                await a.A.saveGuild(g.id, e, { throwErr: !0 });
            }
        }, [g, _, t, e]),
        f = s.useCallback(() => {
            null != g && (a.A.init(g.id), (0, d.fx)());
        }, [g]);
    return (0, i.jsx)(r.A, { submitting: x, errorMessage: A, onSave: p, onReset: f });
}
