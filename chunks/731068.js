"use strict";
n.d(t, { FE: () => f, IS: () => l, Rr: () => h, Uv: () => d, aG: () => _, e5: () => c, oU: () => m, rq: () => g }),
    n(938796);
var r = n(665260),
    i = n(155718),
    a = n(77350),
    s = n(998218),
    o = n(652215),
    l = (function (e) {
        return (e[(e.EXPLICIT = 1)] = "EXPLICIT"), (e[(e.GORE = 2)] = "GORE"), (e[(e.SELF_HARM = 4)] = "SELF_HARM"), e;
    })({});
function u(e) {
    return { version: e.version, flags: e.flags };
}
var c = (function (e) {
    return (e[(e.IS_ANIMATED = 1)] = "IS_ANIMATED"), e;
})({});
function d(e) {
    return {
        url: e.url,
        proxyUrl: e.proxy_url,
        height: e.height,
        width: e.width,
        placeholder: e.placeholder,
        placeholderVersion: e.placeholder_version,
        contentType: e.content_type,
        originalContentType: e.original_content_type,
        loadingState: e.loading_state,
        contentScanMetadata: null != e.content_scan_metadata ? u(e.content_scan_metadata) : void 0,
        flags: e.flags ?? 0,
    };
}
function _(e) {
    let t = 0;
    (0, r.Lt)(e.flags ?? 0, o.sbO.CONTAINS_EXPLICIT_MEDIA) && (t |= 1);
    let n = 0;
    return (
        (0, r.Lt)(e.flags ?? 0, o.sbO.IS_ANIMATED) && (n |= 1),
        {
            url: e.url,
            proxyUrl: e.proxy_url,
            height: e.height,
            width: e.width,
            contentType: e.content_type,
            originalContentType: e.original_content_type,
            placeholder: e.placeholder,
            placeholderVersion: e.placeholder_version,
            loadingState: i.TD.LOADED_SUCCESS,
            contentScanMetadata:
                null == e.content_scan_version ? void 0 : { version: e.content_scan_version, flags: t },
            flags: n,
        }
    );
}
function f(e) {
    return (0, a.tT)(e.contentType)
        ? "IMAGE"
        : (0, a.XB)(e.contentType) && null != e.proxyUrl && null != s.A.toURLSafe(e.proxyUrl)
          ? "VIDEO"
          : "INVALID";
}
function p(e) {
    return (0, a.u)(e.filename) ? "IMAGE" : (0, a.AE)(e.filename) ? "VIDEO" : "INVALID";
}
function h(e, t) {
    return {
        ..._(e),
        type: p(e),
        alt: e.description,
        sourceMetadata: {
            message: t,
            identifier: { type: "attachment", attachmentId: e.id, filename: e.filename, title: e.title, size: e.size },
        },
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
        sourceMetadata: t,
        contentType: e.contentType,
    };
}
function g(e) {
    return null != e.width && e.width > 0 && null != e.height && e.height > 0;
}
