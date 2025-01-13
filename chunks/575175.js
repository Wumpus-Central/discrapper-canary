n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(846027),
    a = n(468026),
    s = n(503856),
    o = n(388032);
function c(e, t, c) {
    if (t && (0, s.p)()) {
        (0, l.openModalLazy)(async () => {
            let { default: e } = await n.e('41281').then(n.bind(n, 669732));
            return (t) => (0, i.jsx)(e, { ...t });
        });
        return;
    }
    if (t) {
        (0, l.openModal)((e) =>
            (0, i.jsx)(a.default, {
                ...e,
                title: o.intl.string(o.t.FJSZVF),
                body: o.intl.string(o.t.etJjgY)
            })
        );
        return;
    }
    if (e) {
        (0, l.openModal)((e) =>
            (0, i.jsx)(a.default, {
                ...e,
                title: o.intl.string(o.t['+JQCa2']),
                body: o.intl.string(o.t.hsNm7e)
            })
        );
        return;
    }
    r.Z.toggleSelfMute({ location: c });
}
