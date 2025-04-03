s.d(t, { default: () => h });
var i = s(200651);
s(192379);
var l = s(442837),
    n = s(481060),
    o = s(239091),
    a = s(357156),
    r = s(430824),
    d = s(496675),
    c = s(771845),
    p = s(594174),
    u = s(388032);
function h(e) {
    let { onExportToFile: t, onExportToSoundboard: s, onDelete: h } = e,
        Z = (0, l.e7)([c.ZP, d.Z, p.default, r.Z], () =>
            c.ZP.getFlattenedGuildIds().some((e) => {
                let t = r.Z.getGuild(e);
                return null != t && (0, a.Gw)(t, d.Z, p.default).canCreateExpressions;
            })
        );
    return (0, i.jsxs)(n.v2r, {
        navId: 'clips-more-options',
        'aria-label': u.NW.string(u.t.PdRCRk),
        onClose: o.Zy,
        onSelect: o.Zy,
        children: [
            Z
                ? (0, i.jsx)(n.sNh, {
                      icon: n.KY1,
                      id: 'clips-export-soundboard',
                      label: u.NW.string(u.t.HH4Tjo),
                      action: s
                  })
                : null,
            (0, i.jsx)(n.sNh, {
                icon: n._8t,
                id: 'clips-export-file',
                label: u.NW.string(u.t.l9qpzs),
                action: t
            }),
            (0, i.jsx)(n.sNh, {
                icon: n.XHJ,
                id: 'clips-delete',
                label: u.NW.string(u.t.oyYWHB),
                color: 'danger',
                action: h
            })
        ]
    });
}
