r.d(n, {
    Am: function () {
        return f;
    },
    ZP: function () {
        return p;
    },
    s$: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(430824),
    l = r(275759),
    u = r(388032);
let c = 'guild-connection-roles';
function d() {
    return {
        modalKey: c,
        contextKey: o.DEFAULT_MODAL_CONTEXT,
        onCloseRequest: () => {
            (0, o.closeModal)(c, o.DEFAULT_MODAL_CONTEXT);
        }
    };
}
function f(e) {
    (0, o.openModalLazy)(async () => {
        let { default: n } = await r.e('40897').then(r.bind(r, 507294));
        return (r) =>
            (0, i.jsx)(n, {
                ...r,
                guildId: e
            });
    }, d());
}
function p(e) {
    return (0, a.e7)([s.Z], () => (0, l.kQ)(e, s.Z.getRoles(e.id)), [e])
        ? (0, i.jsx)(o.MenuItem, {
              id: 'guild-connection-roles',
              label: u.intl.string(u.t.ghtnsr),
              icon: o.LinkIcon,
              action: () => f(e.id)
          })
        : null;
}
