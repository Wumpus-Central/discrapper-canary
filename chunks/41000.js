i.d(n, { default: () => b });
var e = i(477900);
i(582128);
var a = i(314116),
    r = i(980707),
    l = i(477782),
    d = i(192308),
    s = i(442433),
    c = i(705147),
    o = i(917136),
    u = i(105292);
function b(t) {
    let { onSelect: n, credential: b } = t;
    async function h() {
        (await (0, c.k)("webauthn"))
            ? (0, a.A)({
                  title: u.intl.string(u.t["J/x6ns"]),
                  subtitle: u.intl.string(u.t.IMKkcn),
                  variant: "critical",
                  confirmText: u.intl.string(u.t["+xgS+L"]),
                  onConfirm: () => o.fR(b),
              })
            : o.fR(b);
    }
    return (0, e.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: "webauthn-credential-actions",
        onClose: s.Z_,
        "aria-label": u.intl.string(u.t["+nrTbK"]),
        onSelect: n,
        children: [
            (0, e.jsx)(l.Dr, {
                id: `webauthn-edit-credential-${b.id}`,
                label: u.intl.string(u.t.bt75uw),
                action: () => {
                    (0, d.openModalLazy)(async () => {
                        let { default: t } = await i.e("550267").then(i.bind(i, 428726));
                        return (n) => (0, e.jsx)(t, { credential: b, ...n });
                    });
                },
            }),
            (0, e.jsx)(l.Dr, {
                id: `webauthn-delete-credential-${b.id}`,
                label: u.intl.string(u.t["+xgS+L"]),
                color: "danger",
                action: h,
            }),
        ],
    });
}
