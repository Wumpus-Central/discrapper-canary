n.d(t, { f: () => d });
var i = n(64700),
    l = n(435582),
    a = n(283488),
    s = n(735991),
    r = n(486020),
    o = n(572211);
function d(e) {
    let { bot: t } = e,
        n = (0, s.Ag)(e),
        { url: d } = (0, a.A)({ applicationId: n ? e.id : void 0, size: 600, names: ["embedded_cover"] });
    return i.useMemo(() => {
        let i,
            a,
            c = o.u.BOT;
        if (null != t) {
            let { banner: e } = t;
            (i = (0, r.z)({ id: t.id, banner: e, size: 512, canAnimate: !1 })),
                (0, r.VI)(e) && null == d && (a = (0, r.z)({ id: t.id, banner: e, size: 512, canAnimate: !0 }));
        }
        if (n) {
            let t = (0, s.Cx)(e);
            null != d && ((i = d), (c = o.u.ACTIVITY));
            let n = t?.activity_preview_video_asset_id;
            null != n && ((a = (0, l.A)(e.id, n)), (c = o.u.ACTIVITY));
        }
        return { staticBannerSrc: i, videoBannerSrc: a, bannerAspectRatio: c };
    }, [d, t, n, e]);
}
