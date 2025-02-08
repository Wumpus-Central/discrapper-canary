n.d(t, { Z: () => x });
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(924628),
    a = n(480294),
    o = n(63063),
    c = n(838436),
    d = n(51331),
    u = n(922628),
    m = n(726985),
    g = n(981631),
    h = n(388032);
function x() {
    let e = (0, r.e7)([a.Z], () => a.Z.hasConsented(g.pjP.USAGE_STATISTICS)),
        t = s.useCallback((e) => {
            e
                ? (0, l.g)([g.pjP.USAGE_STATISTICS], []).catch(u.S)
                : (0, u.V)({
                      header: h.intl.string(h.t.OdPCbG),
                      body: h.intl.string(h.t.MGWabG),
                      confirmText: h.intl.string(h.t['D3+rU1']),
                      cancelText: h.intl.string(h.t.kYpG0t),
                      onConfirm: () => (0, l.g)([], [g.pjP.USAGE_STATISTICS]).catch(u.S)
                  });
        }, []);
    return (0, i.jsx)(c.U, {
        setting: m.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2,
        children: (0, i.jsx)(d.Z, {
            title: h.intl.string(h.t.XuADY2),
            note: h.intl.format(h.t.igTSGx, { helpdeskArticle: o.Z.getArticleURL(g.BhN.DATA_PRIVACY_CONTROLS) }),
            value: e,
            onChange: t
        })
    });
}
