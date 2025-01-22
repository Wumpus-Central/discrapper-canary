r.d(n, {
    m: function () {
        return u;
    }
});
var i = r(653041);
var a = r(200651);
r(192379);
var o = r(481060),
    s = r(185625),
    l = r(186023);
async function u(e, n, r, i) {
    let u = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        c = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5],
        d = arguments.length > 6 ? arguments[6] : void 0,
        f = (0, o.getInteractingModalContext)();
    try {
        let p,
            h = c ? await (0, s.Nt)(e, n) : await (0, s.B0)(e, n),
            _ = [];
        let m = (e) => {
                _.push(e);
            },
            g = (e) => {
                (p = e), null == r || r();
            };
        (0, o.openModal)(
            (n) =>
                (0, a.jsx)(l.Z, {
                    menu: h,
                    reportType: e,
                    modalProps: n,
                    onNavigate: m,
                    onSubmit: g,
                    isAuthenticated: c,
                    emailToken: d
                }),
            {
                onCloseCallback: () => {
                    (0, s.k8)(e, _, p), null == i || i(), u && (0, s.X)(e, null != p ? p : null);
                }
            },
            f
        );
    } catch {}
}
