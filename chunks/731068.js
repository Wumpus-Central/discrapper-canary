(n.d(t, {
    FE: () => f,
    IS: () => u,
    Rr: () => I,
    Uv: () => A,
    aG: () => h,
    ad: () => _,
    e5: () => E,
    fj: () => T,
    oU: () => p,
}),
    n(938796));
var i,
    r,
    a,
    s = n(665260),
    l = n(155718),
    o = n(59318),
    d = n(998218),
    c = n(652215),
    u =
        (((i = {})[(i.EXPLICIT = 1)] = "EXPLICIT"),
        (i[(i.GORE = 2)] = "GORE"),
        (i[(i.SELF_HARM = 4)] = "SELF_HARM"),
        i),
    _ =
        (((r = {}).NATIVE = "native"),
        (r.JPEGLI = "jpegli"),
        (r.JPEG_IOS = "jpeg_ios"),
        (r.PASSTHROUGH = "passthrough"),
        (r.WIC = "wic"),
        (r.IMAGEIO = "imageio"),
        (r.SYSIMG_STUB = "sysimg_stub"),
        (r.SYSIMG_UNKNOWN = "sysimg_unknown"),
        r),
    E = (((a = {})[(a.IS_ANIMATED = 1)] = "IS_ANIMATED"), a);
function A(e) {
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
function h(e) {
    let t = 0;
    (0, s.Lt)(e.flags ?? 0, c.sbO.CONTAINS_EXPLICIT_MEDIA) && (t |= 1);
    let n = 0;
    return (
        (0, s.Lt)(e.flags ?? 0, c.sbO.IS_ANIMATED) && (n |= 1),
        {
            url: e.url,
            proxyUrl: e.proxy_url,
            height: e.height,
            width: e.width,
            contentType: e.content_type,
            originalContentType: e.original_content_type,
            placeholder: e.placeholder,
            placeholderVersion: e.placeholder_version,
            loadingState: l.TD.LOADED_SUCCESS,
            contentScanMetadata:
                null == e.content_scan_version ? void 0 : { version: e.content_scan_version, flags: t },
            flags: n,
        }
    );
}
function f(e) {
    return (0, o.tT)(e.contentType)
        ? "IMAGE"
        : (0, o.XB)(e.contentType) && null != e.proxyUrl && null != d.A.toURLSafe(e.proxyUrl)
          ? "VIDEO"
          : "INVALID";
}
function I(e, t) {
    return {
        ...h(e),
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
function T(e) {
    if (null == e) return null;
    if ("VIDEO" === e.type && null != e.proxyUrl) {
        let t = d.A.toURLSafe(e.proxyUrl);
        return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
    }
    return e.proxyUrl ?? e.url ?? null;
}
