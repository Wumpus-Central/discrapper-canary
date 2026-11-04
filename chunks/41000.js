var e = i(477900);
i(582128);
var a = i(314116),
    r = i(165862),
    l = i(477782),
    s = i(192308),
    c = i(442433),
    d = i(705147),
    u = i(917136),
    o = i(792996);
i.d(
    n,
    {},
    {
        default: function (t) {
            let { onSelect: n, credential: b } = t;
            return (0, e.jsxs)(r.W, {
                "data-menu-migrated": !0,
                navId: "webauthn-credential-actions",
                onClose: c.Z_,
                "aria-label": o.intl.string(o.t["+nrTbK"]),
                onSelect: n,
                children: [
                    (0, e.jsx)(l.Dr, {
                        id: `webauthn-edit-credential-${b.id}`,
                        label: o.intl.string(o.t.bt75uw),
                        action: () => {
                            (0, s.mM)(async () => {
                                let { default: t } = await i.e(550267).then(i.bind(i, 428726));
                                return (n) => (0, e.jsx)(t, { credential: b, ...n });
                            });
                        },
                    }),
                    (0, e.jsx)(l.Dr, {
                        id: `webauthn-delete-credential-${b.id}`,
                        label: o.intl.string(o.t["+xgS+L"]),
                        color: "danger",
                        action: async function () {
                            (await (0, d.k)("webauthn"))
                                ? (0, a.A)({
                                      title: o.intl.string(o.t["J/x6ns"]),
                                      subtitle: o.intl.string(o.t.IMKkcn),
                                      variant: "critical",
                                      confirmText: o.intl.string(o.t["+xgS+L"]),
                                      onConfirm: () => u.fR(b),
                                  })
                                : u.fR(b);
                        },
                    }),
                ],
            });
        },
    },
);
