i.d(e, { default: () => h });
var l = i(255367);
i(73800);
var n = i(442837),
    s = i(481060),
    o = i(239091),
    a = i(357156),
    r = i(430824),
    d = i(496675),
    c = i(771845),
    p = i(594174),
    u = i(388032);
function h(t) {
    let { onExportToFile: e, onExportToSoundboard: i, onDelete: h } = t,
        Z = (0, n.e7)([c.ZP, d.Z, p.default, r.Z], () =>
            c.ZP.getFlattenedGuildIds().some((t) => {
                let e = r.Z.getGuild(t);
                return null != e && (0, a.Gw)(e, d.Z, p.default).canCreateExpressions;
            })
        );
    return (0, l.jsxs)(s.v2r, {
        navId: 'clips-more-options',
        'aria-label': u.intl.string(u.t.PdRCRk),
        onClose: o.Zy,
        onSelect: o.Zy,
        children: [
            Z
                ? (0, l.jsx)(s.sNh, {
                      icon: s.KY1,
                      id: 'clips-export-soundboard',
                      label: u.intl.string(u.t.HH4Tjo),
                      action: i
                  })
                : null,
            (0, l.jsx)(s.sNh, {
                icon: s._8t,
                id: 'clips-export-file',
                label: u.intl.string(u.t.l9qpzs),
                action: e
            }),
            (0, l.jsx)(s.sNh, {
                icon: s.XHJ,
                id: 'clips-delete',
                label: u.intl.string(u.t.oyYWHB),
                color: 'danger',
                action: h
            })
        ]
    });
}
