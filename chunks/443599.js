n.d(t, { m: () => s }), n(539854);
var r = n(255367);
n(73800);
var i = n(741086),
    a = n(481060),
    o = n(185625);
async function s(e, t, s) {
    let { onSubmit: l, onClose: c, isEligibleForFeedback: u = !0, isAuthenticated: d = !0, emailToken: _, appContext: f } = s,
        p = (0, a.Gwq)();
    try {
        let s,
            h = d ? (i.s.REPORT_TO_MOD.has(e.name) ? await (0, o.Lo)(e, t) : await (0, o.Nt)(e, t)) : await (0, o.B0)(e, t),
            m = [],
            g = (e) => {
                m.push(e);
            },
            E = (e) => {
                (s = e), null == l || l();
            };
        (0, a.ZDy)(
            async () => {
                let { default: t } = await Promise.all([n.e('25292'), n.e('62134'), n.e('28467'), n.e('40694'), n.e('85634')]).then(n.bind(n, 186023));
                return (n) =>
                    (0, r.jsx)(t, {
                        menu: h,
                        reportType: e,
                        modalProps: n,
                        onNavigate: g,
                        onSubmit: E,
                        isAuthenticated: d,
                        emailToken: _
                    });
            },
            {
                onCloseCallback: () => {
                    (0, o.k8)(e, m, s), null == c || c(), u && (0, o.X)(e, null != s ? s : null);
                },
                contextKey: null != f ? (0, a.VnL)(f) : p
            }
        );
    } catch (e) {}
}
