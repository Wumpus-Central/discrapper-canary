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
    p = n(981631),
    g = n(388032);
function h() {
    let e = (0, s.e7)([a.Z], () => a.Z.hasConsented(p.pjP.USAGE_STATISTICS)),
        t = r.useCallback((e) => {
            e
                ? (0, l.g)([p.pjP.USAGE_STATISTICS], []).catch(u.S)
                : (0, u.V)({
                      header: g.intl.string(g.t.OdPCbG),
                      body: g.intl.string(g.t.MGWabG),
                      confirmText: g.intl.string(g.t['D3+rU1']),
                      cancelText: g.intl.string(g.t.kYpG0t),
                      onConfirm: () => (0, l.g)([], [p.pjP.USAGE_STATISTICS]).catch(u.S)
                  });
        }, []);
    return (0, i.jsx)(c.U, {
        setting: m.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2,
        children: (0, i.jsx)(d.Z, {
            title: g.intl.string(g.t.XuADY2),
            note: g.intl.format(g.t.igTSGx, { helpdeskArticle: o.Z.getArticleURL(p.BhN.DATA_PRIVACY_CONTROLS) }),
            value: e,
            onChange: t
        })
    });
}
