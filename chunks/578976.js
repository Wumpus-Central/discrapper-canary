n.d(t, {
    nW: () => s,
    s_: () => a
});
var r = n(311570),
    i = n(46973);
n(357352);
var o = n(37113);
let a = (e, t, n) => {
        let r = {
            qualityOptions: {
                preset: o.tI.PRESET_CUSTOM,
                resolution: e,
                frameRate: t
            },
            context: i.Yn.STREAM
        };
        return (
            null != n &&
                (null != n.desktopSource &&
                    (r.desktopSettings = {
                        sourceId: n.desktopSource.id,
                        sound: !0
                    }),
                null != n.cameraSource &&
                    (r.cameraSettings = {
                        videoDeviceGuid: n.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: n.cameraSource.audioDeviceGuid
                    })),
            r
        );
    },
    s = (e, t) => {
        let n = {};
        return null != t && (n.tab = t), null == e || (!0 === e.noCache && (n.no_cache = !0), !0 === e.includeUnpublished && (n.include_unpublished = !0), !0 === e.includeBundles && (n.include_bundles = !0), !0 === e.includePopularPicks && (n.include_popular_picks = !0), !0 === e.includeDynamicBlocks && (n.include_dynamic_blocks = !0), null != e.countryCode && (n.country_code = e.countryCode), null !== e.paymentGateway && (n.payment_gateway = e.paymentGateway), e.variantsReturnStyle === r.v.VARIANTS_GROUP && (n.variants_return_style = r.v.VARIANTS_GROUP), null != e.shopHomeConfig && (n.shop_home_config = e.shopHomeConfig)), n;
    };
