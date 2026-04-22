n.d(t, { l: () => g });
var i = n(627968),
    l = n(64700),
    s = n(311907),
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
        } = (0, s.cf)([c.A], () => ({
            vanityURLCode: c.A.vanityURLCode,
            hasChanges: c.A.hasChanges(),
            errorDetails: c.A.errorDetails,
        })),
        { guild: g, submitting: h, errors: x, hasChanges: _ } = (0, s.cf)([o.A], () => o.A.getProps()),
        p = l.useMemo(() => (null != n ? (0, u.z)(n?.code) : (0, m.$s)(x)), [x, n]),
        A = l.useCallback(async () => {
            if (null != g && (t && (await (0, d.zf)(g.id, e, { throwErr: !0 })), _)) {
                let e = { premiumProgressBarEnabled: g.premiumProgressBarEnabled, banner: g.banner, splash: g.splash };
                await a.A.saveGuild(g.id, e, { throwErr: !0 });
            }
        }, [g, _, t, e]),
        E = l.useCallback(() => {
            null != g && (a.A.init(g.id), (0, d.fx)());
        }, [g]);
    return (0, i.jsx)(r.A, { submitting: h, errorMessage: p, onSave: A, onReset: E });
}
