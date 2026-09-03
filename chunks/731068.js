n.d(t, { FE: () => A, IS: () => c, Rr: () => h, Uv: () => _, aG: () => E, e5: () => u, fj: () => f, oU: () => I }),
    n(938796);
var i,
    r,
    a = n(665260),
    s = n(155718),
    l = n(59318),
    o = n(998218),
    d = n(652215),
    c =
        (((i = {})[(i.EXPLICIT = 1)] = "EXPLICIT"),
        (i[(i.GORE = 2)] = "GORE"),
        (i[(i.SELF_HARM = 4)] = "SELF_HARM"),
        i),
    u = (((r = {})[(r.IS_ANIMATED = 1)] = "IS_ANIMATED"), r);
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
function E(e) {
    let t = 0;
    (0, a.Lt)(e.flags ?? 0, d.sbO.CONTAINS_EXPLICIT_MEDIA) && (t |= 1);
    let n = 0;
    return (
        (0, a.Lt)(e.flags ?? 0, d.sbO.IS_ANIMATED) && (n |= 1),
        {
            url: e.url,
            proxyUrl: e.proxy_url,
            height: e.height,
            width: e.width,
            contentType: e.content_type,
            originalContentType: e.original_content_type,
            placeholder: e.placeholder,
            placeholderVersion: e.placeholder_version,
            loadingState: s.TD.LOADED_SUCCESS,
            contentScanMetadata:
                null == e.content_scan_version ? void 0 : { version: e.content_scan_version, flags: t },
            flags: n,
        }
    );
}
function A(e) {
    return (0, l.tT)(e.contentType)
        ? "IMAGE"
        : (0, l.XB)(e.contentType) && null != e.proxyUrl && null != o.A.toURLSafe(e.proxyUrl)
          ? "VIDEO"
          : "INVALID";
}
function h(e, t) {
    return {
        ...E(e),
        type: (0, l.u)(e.filename) ? "IMAGE" : (0, l.AE)(e.filename) ? "VIDEO" : "INVALID",
        alt: e.description,
        sourceMetadata: {
            message: t,
            identifier: { type: "attachment", attachmentId: e.id, filename: e.filename, title: e.title, size: e.size },
        },
    };
}
function I(e, t, n) {
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
function f(e) {
    if (null == e) return null;
    if ("VIDEO" === e.type && null != e.proxyUrl) {
        let t = o.A.toURLSafe(e.proxyUrl);
        return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
    }
    return e.proxyUrl ?? e.url ?? null;
}
