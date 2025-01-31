n.d(t, { m: () => o }), n(653041);
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(185625),
    s = n(186023);
async function o(e, t, n, o) {
    let l = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        u = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5],
        c = arguments.length > 6 ? arguments[6] : void 0,
        d = (0, r.Gwq)();
    try {
        let f;
        let _ = u ? await (0, a.Nt)(e, t) : await (0, a.B0)(e, t),
            p = [],
            h = (e) => {
                p.push(e);
            },
            m = (e) => {
                (f = e), null == n || n();
            };
        (0, r.h7j)(
            (t) =>
                (0, i.jsx)(s.Z, {
                    menu: _,
                    reportType: e,
                    modalProps: t,
                    onNavigate: h,
                    onSubmit: m,
                    isAuthenticated: u,
                    emailToken: c
                }),
            {
                onCloseCallback: () => {
                    (0, a.k8)(e, p, f), null == o || o(), l && (0, a.X)(e, null != f ? f : null);
                }
            },
            d
        );
    } catch {}
}
