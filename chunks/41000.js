a.d(t, { default: () => u });
var n = a(627968);
a(64700);
var i = a(861672),
    d = a(477782),
    r = a(192308),
    l = a(442433),
    s = a(917136),
    c = a(985018);
function u(e) {
    let { onSelect: t, credential: u } = e;
    return (0, n.jsxs)(i.W, {
        "data-menu-migrated": !0,
        navId: "webauthn-credential-actions",
        onClose: l.Z_,
        "aria-label": c.intl.string(c.t["+nrTbK"]),
        onSelect: t,
        children: [
            (0, n.jsx)(d.Dr, {
                id: `webauthn-edit-credential-${u.id}`,
                label: c.intl.string(c.t.bt75uw),
                action: () => {
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await a.e("50267").then(a.bind(a, 428726));
                        return (t) => (0, n.jsx)(e, { credential: u, ...t });
                    });
                },
            }),
            (0, n.jsx)(d.Dr, {
                id: `webauthn-delete-credential-${u.id}`,
                label: c.intl.string(c.t["+xgS+L"]),
                color: "danger",
                action: () => {
                    s.fR(u);
                },
            }),
        ],
    });
}
