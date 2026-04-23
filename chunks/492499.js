n.d(t, { M: () => m });
var i = n(64700),
    s = n(379197),
    l = n(488430),
    a = n(311907),
    r = n(457421),
    o = n(940622),
    d = n(559474),
    u = n(985018),
    c = n(795056),
    g = n(996613);
let m = () => {
    let e = (0, o.mb)(d.RN.UPSELL_BANNER),
        t = (0, o.mb)(d.RN.UPSELL_BANNER_POPOUT),
        n = (0, a.bG)([r.A], () => r.A.getMarketingBySurface(s.R.EDIT_PROFILE_SETTINGS)),
        m = i.useMemo(
            () =>
                null != n
                    ? n
                    : {
                          asset: g,
                          popoutAsset: c,
                          title: u.intl.string(u.t.QZVVBh),
                          body: u.intl.string(u.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [n],
        );
    return i.useMemo(
        () => ({ ...m, type: l.G.BANNER, asset: e ?? m.asset, popoutAsset: t ?? m.popoutAsset }),
        [e, t, m],
    );
};
