n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(481060),
    s = n(430824),
    a = n(594174),
    o = n(723047),
    c = n(388032);
function d(e) {
    let { guildId: t, application: d } = e,
        u = (0, r.e7)([s.Z], () => s.Z.getGuild(t)),
        m = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
        h = (0, o.mY)();
    if (null == u || !u.isOwner(m)) return null;
    let g = d.team;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(l.FormText, {
                type: l.FormText.Types.DESCRIPTION,
                disabled: h,
                children: null != g ? c.intl.format(c.t.erxwWF, { teamName: g.name }) : c.intl.string(c.t.FGzLkJ)
            }),
            (0, i.jsx)(l.Spacer, { size: 16 }),
            (0, i.jsx)(l.Button, {
                look: l.Button.Looks.FILLED,
                color: null != g ? l.Button.Colors.PRIMARY : l.Button.Colors.BRAND,
                onClick: () => {
                    var e;
                    return (
                        (e = d),
                        void (0, l.openModalLazy)(async () => {
                            let { default: t } = await n.e('83942').then(n.bind(n, 743582));
                            return (n) =>
                                (0, i.jsx)(t, {
                                    ...n,
                                    application: e
                                });
                        })
                    );
                },
                disabled: h,
                children: null != g ? c.intl.string(c.t['/Fjq5O']) : c.intl.string(c.t['6ih+b2'])
            })
        ]
    });
}
