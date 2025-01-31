n.d(t, { Z: () => d });
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
            (0, i.jsx)(l.R94, {
                type: l.R94.Types.DESCRIPTION,
                disabled: h,
                children: null != g ? c.intl.format(c.t.erxwWF, { teamName: g.name }) : c.intl.string(c.t.FGzLkJ)
            }),
            (0, i.jsx)(l.LZC, { size: 16 }),
            (0, i.jsx)(l.zxk, {
                look: l.zxk.Looks.FILLED,
                color: null != g ? l.zxk.Colors.PRIMARY : l.zxk.Colors.BRAND,
                onClick: () => {
                    (0, l.ZDy)(async () => {
                        let { default: e } = await n.e('83942').then(n.bind(n, 743582));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                application: d
                            });
                    });
                },
                disabled: h,
                children: null != g ? c.intl.string(c.t['/Fjq5O']) : c.intl.string(c.t['6ih+b2'])
            })
        ]
    });
}
