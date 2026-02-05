n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(290595),
    l = n(171316),
    o = n(153488),
    c = n(975571),
    d = n(871930),
    u = n(578746),
    _ = n(997913),
    m = n(531525),
    A = n(652215),
    g = n(985018),
    E = n(842130);
function h() {
    let e = (0, l.uM)(),
        t = (0, r.bG)([o.A], () => o.A.hasConsented(A.YAq.USAGE_STATISTICS)),
        n = s.useCallback((e) => {
            e
                ? (0, a.U)([A.YAq.USAGE_STATISTICS], []).catch(_.i)
                : (0, _.O)({
                      header: g.intl.string(g.t.OdPCbN),
                      body: g.intl.string(g.t.MGWabA),
                      confirmText: g.intl.string(g.t["D3+rU4"]),
                      cancelText: g.intl.string(g.t.kYpG0u),
                      onConfirm: () => (0, a.U)([], [A.YAq.USAGE_STATISTICS]).catch(_.i),
                  });
        }, []);
    return (0, i.jsx)(d.h, {
        setting: m.H.PRIVACY_DATA_IMPROVE_DISCORD_V2,
        children: (0, i.jsx)(u.Ay, {
            title: g.intl.string(g.t.XuADY2),
            note: g.intl.format(g.t["igTSG/"], { helpdeskArticle: c.A.getArticleURL(A.MVz.DATA_PRIVACY_CONTROLS) }),
            value: t,
            onChange: n,
            disabled: e,
            tooltipText: e ? g.intl.string(E.default["6Af/cw"]) : void 0,
        }),
    });
}
