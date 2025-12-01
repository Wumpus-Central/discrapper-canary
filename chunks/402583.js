n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(924628),
    s = n(915009),
    l = n(480294),
    c = n(63063),
    u = n(838436),
    d = n(51331),
    f = n(922628),
    p = n(726985),
    _ = n(981631),
    m = n(388032),
    h = n(744038);
function g() {
    let e = (0, s.LN)(),
        t = (0, a.e7)([l.Z], () => l.Z.hasConsented(_.pjP.USAGE_STATISTICS)),
        n = i.useCallback((e) => {
            e
                ? (0, o.g)([_.pjP.USAGE_STATISTICS], []).catch(f.S)
                : (0, f.V)({
                      header: m.intl.string(m.t.OdPCbN),
                      body: m.intl.string(m.t.MGWabA),
                      confirmText: m.intl.string(m.t["D3+rU4"]),
                      cancelText: m.intl.string(m.t.kYpG0u),
                      onConfirm: () => (0, o.g)([], [_.pjP.USAGE_STATISTICS]).catch(f.S),
                  });
        }, []);
    return (0, r.jsx)(u.U, {
        setting: p.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2,
        children: (0, r.jsx)(d.ZP, {
            title: m.intl.string(m.t.XuADY2),
            note: m.intl.format(m.t["igTSG/"], { helpdeskArticle: c.Z.getArticleURL(_.BhN.DATA_PRIVACY_CONTROLS) }),
            value: t,
            onChange: n,
            disabled: e,
            tooltipText: e ? m.intl.string(h.default["6Af/cw"]) : void 0,
        }),
    });
}
