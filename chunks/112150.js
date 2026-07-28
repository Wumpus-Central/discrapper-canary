n.d(t, { f: () => c });
var i = n(582128),
    l = n(435582),
    s = n(283488),
    a = n(735991),
    r = n(486020),
    o = n(572211);
function c(e) {
    let { bot: t } = e,
        n = (0, a.Ag)(e),
        { url: c } = (0, s.A)({ applicationId: n ? e.id : void 0, size: 600, names: ["embedded_cover"] });
    return i.useMemo(() => {
        let i,
            s,
            d = o.u.BOT;
        if (null != t) {
            let { banner: e } = t;
            (i = (0, r.z)({ id: t.id, banner: e, size: 512, canAnimate: !1 })),
                (0, r.VI)(e) && null == c && (s = (0, r.z)({ id: t.id, banner: e, size: 512, canAnimate: !0 }));
        }
        if (n) {
            let t = (0, a.Cx)(e);
            null != c && ((i = c), (d = o.u.ACTIVITY));
            let n = t?.activity_preview_video_asset_id;
            null != n && ((s = (0, l.A)(e.id, n)), (d = o.u.ACTIVITY));
        }
        return { staticBannerSrc: i, videoBannerSrc: s, bannerAspectRatio: d };
    }, [c, t, n, e]);
}
