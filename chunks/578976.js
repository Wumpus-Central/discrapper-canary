n.d(t, {
    n: () => o,
    s: () => s
});
var i = n(311570),
    r = n(46973),
    a = n(37113);
let s = (e, t, n) => {
        let i = {
            qualityOptions: {
                preset: a.tI.PRESET_CUSTOM,
                resolution: e,
                frameRate: t
            },
            context: r.Yn.STREAM
        };
        return (
            null != n &&
                (null != n.desktopSource &&
                    (i.desktopSettings = {
                        sourceId: n.desktopSource.id,
                        sound: !0
                    }),
                null != n.cameraSource &&
                    (i.cameraSettings = {
                        videoDeviceGuid: n.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: n.cameraSource.audioDeviceGuid
                    })),
            i
        );
    },
    o = (e, t) => {
        let n = {};
        return null != t && (n.tab = t), null == e || (!0 === e.noCache && (n.no_cache = !0), !0 === e.includeUnpublished && (n.include_unpublished = !0), !0 === e.includeBundles && (n.include_bundles = !0), !0 === e.includePopularPicks && (n.include_popular_picks = !0), !0 === e.includeDynamicBlocks && (n.include_dynamic_blocks = !0), null != e.countryCode && (n.country_code = e.countryCode), null !== e.paymentGateway && (n.payment_gateway = e.paymentGateway), e.variantsReturnStyle === i.v.VARIANTS_GROUP && (n.variants_return_style = i.v.VARIANTS_GROUP)), n;
    };
