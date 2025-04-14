n.d(t, { m: () => a }), n(539854);
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(185625);
async function a(e, t, a) {
    let { onSubmit: s, onClose: l, isEligibleForFeedback: c = !0, isAuthenticated: u = !0, emailToken: d, appContext: f } = a,
        _ = (0, i.Gwq)();
    try {
        let a,
            p = u ? await (0, o.Nt)(e, t) : await (0, o.B0)(e, t),
            h = [],
            m = (e) => {
                h.push(e);
            },
            g = (e) => {
                (a = e), null == s || s();
            };
        (0, i.ZDy)(
            async () => {
                let { default: t } = await Promise.all([n.e('25292'), n.e('95477'), n.e('91245'), n.e('28467'), n.e('21411')]).then(n.bind(n, 186023));
                return (n) =>
                    (0, r.jsx)(t, {
                        menu: p,
                        reportType: e,
                        modalProps: n,
                        onNavigate: m,
                        onSubmit: g,
                        isAuthenticated: u,
                        emailToken: d
                    });
            },
            {
                onCloseCallback: () => {
                    (0, o.k8)(e, h, a), null == l || l(), c && (0, o.X)(e, null != a ? a : null);
                },
                contextKey: null != f ? (0, i.VnL)(f) : _
            }
        );
    } catch (e) {}
}
