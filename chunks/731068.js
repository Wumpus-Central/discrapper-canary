"use strict";
n.d(t, { FE: () => E, IS: () => d, Rr: () => h, Uv: () => _, aG: () => f, e5: () => c, oU: () => p, rq: () => m }),
    n(938796);
var r,
    i,
    s = n(665260),
    a = n(155718),
    o = n(77350),
    l = n(998218),
    u = n(652215),
    d =
        (((r = {})[(r.EXPLICIT = 1)] = "EXPLICIT"),
        (r[(r.GORE = 2)] = "GORE"),
        (r[(r.SELF_HARM = 4)] = "SELF_HARM"),
        r),
    c = (((i = {})[(i.IS_ANIMATED = 1)] = "IS_ANIMATED"), i);
function _(e) {
    var t;
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
        contentScanMetadata:
            null != e.content_scan_metadata
                ? { version: (t = e.content_scan_metadata).version, flags: t.flags }
                : void 0,
        flags: e.flags ?? 0,
    };
}
function f(e) {
    let t = 0;
    (0, s.Lt)(e.flags ?? 0, u.sbO.CONTAINS_EXPLICIT_MEDIA) && (t |= 1);
    let n = 0;
    return (
        (0, s.Lt)(e.flags ?? 0, u.sbO.IS_ANIMATED) && (n |= 1),
        {
            url: e.url,
            proxyUrl: e.proxy_url,
            height: e.height,
            width: e.width,
            contentType: e.content_type,
            originalContentType: e.original_content_type,
            placeholder: e.placeholder,
            placeholderVersion: e.placeholder_version,
            loadingState: a.TD.LOADED_SUCCESS,
            contentScanMetadata:
                null == e.content_scan_version ? void 0 : { version: e.content_scan_version, flags: t },
            flags: n,
        }
    );
}
function E(e) {
    return (0, o.tT)(e.contentType)
        ? "IMAGE"
        : (0, o.XB)(e.contentType) && null != e.proxyUrl && null != l.A.toURLSafe(e.proxyUrl)
          ? "VIDEO"
          : "INVALID";
}
function h(e, t) {
    return {
        ...f(e),
        type: (0, o.u)(e.filename) ? "IMAGE" : (0, o.AE)(e.filename) ? "VIDEO" : "INVALID",
        alt: e.description,
        sourceMetadata: {
            message: t,
            identifier: { type: "attachment", attachmentId: e.id, filename: e.filename, title: e.title, size: e.size },
        },
    };
}
function p(e, t, n) {
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
function m(e) {
    return null != e.width && e.width > 0 && null != e.height && e.height > 0;
}
