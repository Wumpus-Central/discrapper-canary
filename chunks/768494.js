n.d(t, {
    Cb: () => l,
    Hv: () => m,
    JD: () => p,
    VY: () => d,
    y_: () => h,
    ym: () => c
}),
    n(789020);
var i = n(911969),
    r = n(406432),
    a = n(630388),
    s = n(591759),
    o = n(981631),
    l = (function (e) {
        return (e[(e.EXPLICIT = 1)] = 'EXPLICIT'), e;
    })({});
function u(e) {
    return {
        version: e.version,
        flags: e.flags
    };
}
function c(e) {
    var t;
    return {
        url: e.url,
        proxyUrl: e.proxy_url,
        height: e.height,
        width: e.width,
        placeholder: e.placeholder,
        placeholderVersion: e.placeholder_version,
        contentType: e.content_type,
        loadingState: e.loading_state,
        contentScanMetadata: null != e.content_scan_metadata ? u(e.content_scan_metadata) : void 0,
        srcIsAnimated: (0, a.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, o.J0y.IS_ANIMATED)
    };
}
function d(e) {
    var t, n;
    let r = 0;
    return (
        (0, a.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, o.J0y.CONTAINS_EXPLICIT_MEDIA) && (r += 1),
        {
            url: e.url,
            proxyUrl: e.proxy_url,
            height: e.height,
            width: e.width,
            contentType: e.content_type,
            placeholder: e.placeholder,
            placeholderVersion: e.placeholder_version,
            loadingState: i.f.LOADED_SUCCESS,
            contentScanMetadata:
                null == e.content_scan_version
                    ? void 0
                    : {
                          version: e.content_scan_version,
                          flags: r
                      },
            srcIsAnimated: (0, a.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, o.J0y.IS_ANIMATED)
        }
    );
}
function f(e) {
    return (0, r.tw)(e.contentType) ? 'IMAGE' : (0, r.X2)(e.contentType) && null != e.proxyUrl && null != s.Z.toURLSafe(e.proxyUrl) ? 'VIDEO' : 'INVALID';
}
function _(e) {
    return (0, r.CO)(e.filename) ? 'IMAGE' : (0, r.NU)(e.filename) ? 'VIDEO' : 'INVALID';
}
function p(e, t) {
    return {
        ...d(e),
        type: _(e),
        alt: e.description,
        sourceMetadata: {
            message: t,
            identifier: {
                type: 'attachment',
                attachmentId: e.id,
                filename: e.filename,
                title: e.title,
                size: e.size
            }
        }
    };
}
function h(e) {
    return {
        ...e,
        type: f(e)
    };
}
function m(e, t, n) {
    return {
        type: n,
        url: e.url,
        proxyUrl: e.proxyURL,
        width: e.width,
        height: e.height,
        placeholder: e.placeholder,
        placeholderVersion: e.placeholderVersion,
        sourceMetadata: t
    };
}
