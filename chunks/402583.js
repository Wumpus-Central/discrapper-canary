n.d(t, { Z: () => g });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(924628),
    s = n(915009),
    l = n(480294),
    c = n(63063),
    u = n(838436),
    d = n(51331),
    f = n(922628),
    _ = n(726985),
    p = n(981631),
    h = n(388032),
    m = n(597754);
function g() {
    let e = (0, s.LN)(),
        t = (0, a.e7)([l.Z], () => l.Z.hasConsented(p.pjP.USAGE_STATISTICS)),
        n = i.useCallback((e) => {
            e
                ? (0, o.g)([p.pjP.USAGE_STATISTICS], []).catch(f.S)
                : (0, f.V)({
                      header: h.intl.string(h.t.OdPCbN),
                      body: h.intl.string(h.t.MGWabA),
                      confirmText: h.intl.string(h.t["D3+rU4"]),
                      cancelText: h.intl.string(h.t.kYpG0u),
                      onConfirm: () => (0, o.g)([], [p.pjP.USAGE_STATISTICS]).catch(f.S),
                  });
        }, []);
    return (0, r.jsx)(u.U, {
        setting: _.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2,
        children: (0, r.jsx)(d.ZP, {
            title: h.intl.string(h.t.XuADY2),
            note: h.intl.format(h.t["igTSG/"], { helpdeskArticle: c.Z.getArticleURL(p.BhN.DATA_PRIVACY_CONTROLS) }),
            value: t,
            onChange: n,
            disabled: e,
            tooltipText: e ? h.intl.string(m.default["6Af/cw"]) : void 0,
        }),
    });
}
