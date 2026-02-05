n.d(t, { M: () => m });
var i = n(64700),
    s = n(379197),
    r = n(488430),
    a = n(311907),
    l = n(457421),
    o = n(940622),
    c = n(559474),
    d = n(985018),
    u = n(795056),
    _ = n(996613);
let m = () => {
    let e = (0, o.mb)(c.RN.UPSELL_BANNER),
        t = (0, o.mb)(c.RN.UPSELL_BANNER_POPOUT),
        n = (0, a.bG)([l.A], () => l.A.getMarketingBySurface(s.R.EDIT_PROFILE_SETTINGS)),
        m = i.useMemo(
            () =>
                null != n
                    ? n
                    : {
                          asset: _,
                          popoutAsset: u,
                          title: d.intl.string(d.t.QZVVBh),
                          body: d.intl.string(d.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [n],
        );
    return i.useMemo(
        () => ({ ...m, type: r.G.BANNER, asset: e ?? m.asset, popoutAsset: t ?? m.popoutAsset }),
        [e, t, m],
    );
};
