n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(924628),
    s = n(480294),
    l = n(63063),
    c = n(838436),
    u = n(51331),
    d = n(922628),
    f = n(726985),
    _ = n(981631),
    p = n(388032);
function h() {
    let e = (0, a.e7)([s.Z], () => s.Z.hasConsented(_.pjP.USAGE_STATISTICS)),
        t = i.useCallback((e) => {
            e
                ? (0, o.g)([_.pjP.USAGE_STATISTICS], []).catch(d.S)
                : (0, d.V)({
                      header: p.intl.string(p.t.OdPCbG),
                      body: p.intl.string(p.t.MGWabG),
                      confirmText: p.intl.string(p.t["D3+rU1"]),
                      cancelText: p.intl.string(p.t.kYpG0t),
                      onConfirm: () => (0, o.g)([], [_.pjP.USAGE_STATISTICS]).catch(d.S),
                  });
        }, []);
    return (0, r.jsx)(c.U, {
        setting: f.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2,
        children: (0, r.jsx)(u.Z, {
            title: p.intl.string(p.t.XuADY2),
            note: p.intl.format(p.t.igTSGx, { helpdeskArticle: l.Z.getArticleURL(_.BhN.DATA_PRIVACY_CONTROLS) }),
            value: e,
            onChange: t,
        }),
    });
}
