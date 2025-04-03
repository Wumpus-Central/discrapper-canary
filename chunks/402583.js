n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(924628),
    l = n(480294),
    o = n(63063),
    c = n(838436),
    d = n(51331),
    u = n(922628),
    m = n(726985),
    g = n(981631),
    p = n(388032);
function h() {
    let e = (0, s.e7)([l.Z], () => l.Z.hasConsented(g.pjP.USAGE_STATISTICS)),
        t = i.useCallback((e) => {
            e
                ? (0, a.g)([g.pjP.USAGE_STATISTICS], []).catch(u.S)
                : (0, u.V)({
                      header: p.NW.string(p.t.OdPCbG),
                      body: p.NW.string(p.t.MGWabG),
                      confirmText: p.NW.string(p.t['D3+rU1']),
                      cancelText: p.NW.string(p.t.kYpG0t),
                      onConfirm: () => (0, a.g)([], [g.pjP.USAGE_STATISTICS]).catch(u.S)
                  });
        }, []);
    return (0, r.jsx)(c.U, {
        setting: m.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2,
        children: (0, r.jsx)(d.Z, {
            title: p.NW.string(p.t.XuADY2),
            note: p.NW.format(p.t.igTSGx, { helpdeskArticle: o.Z.getArticleURL(g.BhN.DATA_PRIVACY_CONTROLS) }),
            value: e,
            onChange: t
        })
    });
}
