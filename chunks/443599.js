n.d(t, { m: () => o }), n(539854);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(185625);
async function o(e, t, o) {
    let { onSubmit: s, onClose: l, isEligibleForFeedback: c = !0, isAuthenticated: u = !0, emailToken: d, appContext: f } = o,
        _ = (0, i.Gwq)();
    try {
        let o,
            p = u ? await (0, a.Nt)(e, t) : await (0, a.B0)(e, t),
            h = [],
            m = (e) => {
                h.push(e);
            },
            g = (e) => {
                (o = e), null == s || s();
            };
        (0, i.ZDy)(
            async () => {
                let { default: t } = await Promise.all([n.e('25292'), n.e('95477'), n.e('91245'), n.e('28467'), n.e('21924')]).then(n.bind(n, 186023));
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
                    (0, a.k8)(e, h, o), null == l || l(), c && (0, a.X)(e, null != o ? o : null);
                },
                contextKey: null != f ? (0, i.VnL)(f) : _
            }
        );
    } catch (e) {}
}
