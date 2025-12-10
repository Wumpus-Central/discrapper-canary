n.d(t, { m: () => s }), n(539854);
var r = n(54381);
n(473749);
var i = n(741086),
    a = n(481060),
    o = n(185625);
async function s(e, t, s) {
    let {
            onSubmit: l,
            onClose: c,
            isEligibleForFeedback: u = !0,
            isAuthenticated: d = !0,
            emailToken: f,
            appContext: p,
        } = s,
        _ = (0, a.Gwq)();
    try {
        let s,
            m = d
                ? i.s.REPORT_TO_MOD.has(e.name)
                    ? await (0, o.Lo)(e, t)
                    : await (0, o.Nt)(e, t)
                : await (0, o.B0)(e, t),
            h = [],
            g = (e) => {
                h.push(e);
            },
            E = (e) => {
                (s = e), null == l || l();
            };
        (0, a.ZDy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("61924"),
                    n.e("21976"),
                    n.e("12356"),
                    n.e("62880"),
                    n.e("39380"),
                    n.e("44097"),
                    n.e("54844"),
                ]).then(n.bind(n, 186023));
                return (n) =>
                    (0, r.jsx)(t, {
                        menu: m,
                        reportType: e,
                        modalProps: n,
                        onNavigate: g,
                        onSubmit: E,
                        isAuthenticated: d,
                        emailToken: f,
                    });
            },
            {
                onCloseCallback: () => {
                    (0, o.k8)(e, h, s), null == c || c(), u && (0, o.X)(e, null != s ? s : null);
                },
                contextKey: null != p ? (0, a.VnL)(p) : _,
            },
        );
    } catch (e) {}
}
