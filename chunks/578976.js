r.d(n, {
    n: function () {
        return l;
    },
    s: function () {
        return s;
    }
});
var i = r(311570),
    a = r(46973),
    o = r(37113);
let s = (e, n, r) => {
        let i = {
            qualityOptions: {
                preset: o.tI.PRESET_CUSTOM,
                resolution: e,
                frameRate: n
            },
            context: a.Yn.STREAM
        };
        return (
            null != r &&
                (null != r.desktopSource &&
                    (i.desktopSettings = {
                        sourceId: r.desktopSource.id,
                        sound: !0
                    }),
                null != r.cameraSource &&
                    (i.cameraSettings = {
                        videoDeviceGuid: r.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: r.cameraSource.audioDeviceGuid
                    })),
            i
        );
    },
    l = (e) => {
        let n = {};
        return null == e ? n : (!0 === e.noCache && (n.no_cache = !0), !0 === e.includeUnpublished && (n.include_unpublished = !0), !0 === e.includeBundles && (n.include_bundles = !0), null != e.countryCode && (n.country_code = e.countryCode), null !== e.paymentGateway && (n.payment_gateway = e.paymentGateway), e.variantsReturnStyle === i.v.VARIANTS_GROUP && (n.variants_return_style = i.v.VARIANTS_GROUP), n);
    };
