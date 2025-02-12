n.d(t, { m: () => s }), n(653041);
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(185625);
async function s(e, t, s) {
    let { onSubmit: o, onClose: l, isEligibleForFeedback: u = !0, isAuthenticated: c = !0, emailToken: d, appContext: f } = s,
        _ = (0, r.Gwq)();
    try {
        let s;
        let p = c ? await (0, a.Nt)(e, t) : await (0, a.B0)(e, t),
            h = [],
            m = (e) => {
                h.push(e);
            },
            g = (e) => {
                (s = e), null == o || o();
            };
        (0, r.ZDy)(
            async () => {
                let { default: t } = await Promise.all([n.e('25292'), n.e('95477'), n.e('11212'), n.e('40190'), n.e('28467'), n.e('92457')]).then(n.bind(n, 186023));
                return (n) =>
                    (0, i.jsx)(t, {
                        menu: p,
                        reportType: e,
                        modalProps: n,
                        onNavigate: m,
                        onSubmit: g,
                        isAuthenticated: c,
                        emailToken: d
                    });
            },
            {
                onCloseCallback: () => {
                    (0, a.k8)(e, h, s), null == l || l(), u && (0, a.X)(e, null != s ? s : null);
                },
                contextKey: null != f ? (0, r.VnL)(f) : _
            }
        );
    } catch {}
}
