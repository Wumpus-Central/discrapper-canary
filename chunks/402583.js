n.d(t, { Z: () => h });
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(924628),
    a = n(480294),
    o = n(63063),
    c = n(838436),
    d = n(51331),
    u = n(922628),
    m = n(726985),
    g = n(981631),
    p = n(388032);
function h() {
    let e = (0, s.e7)([a.Z], () => a.Z.hasConsented(g.pjP.USAGE_STATISTICS)),
        t = r.useCallback((e) => {
            e
                ? (0, l.g)([g.pjP.USAGE_STATISTICS], []).catch(u.S)
                : (0, u.V)({
                      header: p.intl.string(p.t.OdPCbG),
                      body: p.intl.string(p.t.MGWabG),
                      confirmText: p.intl.string(p.t['D3+rU1']),
                      cancelText: p.intl.string(p.t.kYpG0t),
                      onConfirm: () => (0, l.g)([], [g.pjP.USAGE_STATISTICS]).catch(u.S)
                  });
        }, []);
    return (0, i.jsx)(c.U, {
        setting: m.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2,
        children: (0, i.jsx)(d.Z, {
            title: p.intl.string(p.t.XuADY2),
            note: p.intl.format(p.t.igTSGx, { helpdeskArticle: o.Z.getArticleURL(g.BhN.DATA_PRIVACY_CONTROLS) }),
            value: e,
            onChange: t
        })
    });
}
