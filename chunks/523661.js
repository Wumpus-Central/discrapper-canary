n.d(t, { L: () => c, n: () => u });
var i = n(627968),
    s = n(192308),
    l = n(419954),
    a = n(780964),
    r = n(278040),
    o = n(846017),
    d = n(985018);
let u = (0, l.Tf)(a.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
        useTitle: () => d.intl.string(d.t["CIGa+7"]),
        useLabel: () => d.intl.string(d.t.bt75uw),
        useAriaLabel: () => d.intl.string(d.t["FRep5/"]),
        useVariant: () => "secondary",
        onClick: () => {
            (0, s.openModal)((e) => (0, i.jsx)(o.default, { ...e, onSuccess: () => e.onClose() }));
        },
    }),
    c = (0, l.E2)(a.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
        useSearchTerms: () => [d.intl.string(d.t["FRep5/"])],
        Component: r.A,
    });
