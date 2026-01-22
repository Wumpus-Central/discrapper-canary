n.d(t, {
    A: () => g,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(290595),
    o = n(171316),
    l = n(153488),
    c = n(975571),
    u = n(871930),
    d = n(578746),
    f = n(997913),
    p = n(531525),
    _ = n(652215),
    h = n(985018),
    m = n(842130);

function g() {
    let e = (0, o.uM)(),
        t = (0, a.bG)([l.A], () => l.A.hasConsented(_.YAq.USAGE_STATISTICS)),
        n = i.useCallback((e) => {
            e
                ? (0, s.U)([_.YAq.USAGE_STATISTICS], []).catch(f.i)
                : (0, f.O)({
                      header: h.intl.string(h.t.OdPCbN),
                      body: h.intl.string(h.t.MGWabA),
                      confirmText: h.intl.string(h.t["D3+rU4"]),
                      cancelText: h.intl.string(h.t.kYpG0u),
                      onConfirm: () => (0, s.U)([], [_.YAq.USAGE_STATISTICS]).catch(f.i),
                  });
        }, []);
    return (0, r.jsx)(u.h, {
        setting: p.H.PRIVACY_DATA_IMPROVE_DISCORD_V2,
        children: (0, r.jsx)(d.Ay, {
            title: h.intl.string(h.t.XuADY2),
            note: h.intl.format(h.t["igTSG/"], {
                helpdeskArticle: c.A.getArticleURL(_.MVz.DATA_PRIVACY_CONTROLS),
            }),
            value: t,
            onChange: n,
            disabled: e,
            tooltipText: e ? h.intl.string(m.default["6Af/cw"]) : void 0,
        }),
    });
}
