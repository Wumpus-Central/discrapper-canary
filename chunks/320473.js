n.d(t, { A: () => d });
var i = n(877624),
    a = n(757036),
    r = n(323390),
    l = n(562730),
    o = n(780741),
    s = n(60163);
function d(e) {
    let { enabled: t } = r.A.useConfig({ location: e }),
        { enabled: n } = l.A.useConfig({ location: e }),
        { enabled: d } = o.A.useConfig({ location: e }),
        c = (0, a.L)(),
        { assetUrl: u } = (0, s.A)(i.C.OUTBOUND_PROMOTION_POPOVER);
    return t && d && null != u && (c || n);
}
