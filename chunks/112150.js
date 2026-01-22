n.d(t, {
    f: () => c,
});
var r = n(64700),
    i = n(435582),
    a = n(283488),
    s = n(735991),
    o = n(486020),
    l = n(572211);

function c(e) {
    let { bot: t } = e,
        n = (0, s.Ag)(e),
        { url: c } = (0, a.A)({
            applicationId: n ? e.id : void 0,
            size: 600,
            names: ["embedded_cover"],
        });
    return r.useMemo(() => {
        let r,
            a,
            u = l.u.BOT;
        if (null != t) {
            let { banner: e } = t;
            (r = (0, o.z)({
                id: t.id,
                banner: e,
                size: 512,
                canAnimate: !1,
            })),
                (0, o.VI)(e) &&
                    null == c &&
                    (a = (0, o.z)({
                        id: t.id,
                        banner: e,
                        size: 512,
                        canAnimate: !0,
                    }));
        }
        if (n) {
            let t = (0, s.Cx)(e);
            null != c && ((r = c), (u = l.u.ACTIVITY));
            let n = null == t ? void 0 : t.activity_preview_video_asset_id;
            null != n && ((a = (0, i.A)(e.id, n)), (u = l.u.ACTIVITY));
        }
        return {
            staticBannerSrc: r,
            videoBannerSrc: a,
            bannerAspectRatio: u,
        };
    }, [c, t, n, e]);
}
