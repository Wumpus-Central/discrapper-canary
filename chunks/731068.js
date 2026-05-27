"use strict";
n.d(t, {
    FE: () => h,
    IS: () => c,
    Rr: () => p,
    Uv: () => _,
    aG: () => f,
    e5: () => d,
    fj: () => g,
    oU: () => E,
    rq: () => m,
}),
    n(938796);
var i,
    r,
    s = n(665260),
    a = n(155718),
    o = n(59318),
    l = n(998218),
    u = n(652215),
    c =
        (((i = {})[(i.EXPLICIT = 1)] = "EXPLICIT"),
        (i[(i.GORE = 2)] = "GORE"),
        (i[(i.SELF_HARM = 4)] = "SELF_HARM"),
        i),
    d = (((r = {})[(r.IS_ANIMATED = 1)] = "IS_ANIMATED"), r);
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
function h(e) {
    return (0, o.tT)(e.contentType)
        ? "IMAGE"
        : (0, o.XB)(e.contentType) && null != e.proxyUrl && null != l.A.toURLSafe(e.proxyUrl)
          ? "VIDEO"
          : "INVALID";
}
function p(e, t) {
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
function E(e, t, n) {
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
function g(e) {
    if (null == e) return null;
    if ("VIDEO" === e.type && null != e.proxyUrl) {
        let t = l.A.toURLSafe(e.proxyUrl);
        return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
    }
    return e.proxyUrl ?? e.url ?? null;
}
