n.d(e, { default: () => s });
var a = n(627968);
n(64700);
var i = n(397927),
    r = n(442433),
    d = n(917136),
    l = n(985018);
function s(t) {
    let { onSelect: e, credential: s } = t;
    return (0, a.jsxs)(i.W1t, {
        "data-menu-migrated": !0,
        navId: "webauthn-credential-actions",
        onClose: r.Z_,
        "aria-label": l.intl.string(l.t["+nrTbK"]),
        onSelect: e,
        children: [
            (0, a.jsx)(i.Drp, {
                id: `webauthn-edit-credential-${s.id}`,
                label: l.intl.string(l.t.bt75uw),
                action: () => {
                    (0, i.mMO)(async () => {
                        let { default: t } = await n.e("50267").then(n.bind(n, 428726));
                        return (e) => (0, a.jsx)(t, { credential: s, ...e });
                    });
                },
            }),
            (0, a.jsx)(i.Drp, {
                id: `webauthn-delete-credential-${s.id}`,
                label: l.intl.string(l.t["+xgS+L"]),
                color: "danger",
                action: () => {
                    d.fR(s);
                },
            }),
        ],
    });
}
