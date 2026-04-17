"use strict";
n.d(t, { OW: () => c, YK: () => l, dm: () => d, eM: () => o, ly: () => _ });
var r = n(565150),
    i = n(762555),
    s = n(381941);
let a = [
        { reName: /\.jpe?g$/i, name: (e) => `image${e}.jpg`, type: "image/jpeg" },
        { reName: /\.jfif$/i, name: (e) => `image${e}.jpg`, type: "image/jpeg" },
        { reName: /\.png$/i, name: (e) => `image${e}.png`, type: "image/png" },
        { reName: /\.gif$/i, name: (e) => `image${e}.gif`, type: "image/gif" },
        { reName: /\.webp$/i, name: (e) => `image${e}.webp`, type: "image/webp" },
        { reName: /\.avif$/i, name: (e) => `image${e}.avif`, type: "image/avif" },
        { reName: /\.heic$/i, name: (e) => `image${e}.heic`, type: "image/heic" },
        { reName: /\.heif$/i, name: (e) => `image${e}.heif`, type: "image/heif" },
        { reName: /\.dng$/i, name: (e) => `image${e}.dng`, type: "image/x-adobe-dng" },
        { reName: /\.mov$/i, name: (e) => `video${e}.mov`, type: "video/quicktime" },
        { reName: /\.qt$/i, name: (e) => `video${e}.qt`, type: "video/quicktime" },
        { reName: /\.avi$/i, name: (e) => `video${e}.avi`, type: "video/x-msvideo" },
        { reName: /\.mp4$/i, name: (e) => `video${e}.mp4`, type: "video/mp4" },
        { reName: /\.webm$/i, name: (e) => `video${e}.webm`, type: "image/webm" },
    ],
    o = 524288e3,
    l = 500;
function u(e) {
    let { spoiler: t } = e;
    return t ? s._W : "";
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0,
        s = { id: t?.toString() ?? e.id };
    null != e.description && (s.description = e.description);
    let a = u({ spoiler: e.spoiler });
    return (
        (s.filename = `${a}${n ?? e.filename}`),
        (s.uploaded_filename = e.uploadedFilename),
        "durationSecs" in e && null != e.durationSecs && (s.duration_secs = e.durationSecs),
        "waveform" in e && null != e.waveform && (s.waveform = e.waveform),
        "isThumbnail" in e && !0 === e.isThumbnail && (s.is_thumbnail = e.isThumbnail),
        "clip" in e &&
            null != e.clip &&
            ((s.is_clip = !0),
            (s.title = e.clip.name),
            (s.application_id = e.clip.applicationId),
            (s.clip_created_at = (0, i.U)(e.clip.createdAt)),
            (s.clip_participant_ids = (0, i.g)(e.clip.users))),
        "item" in e &&
            null != e.item &&
            e.item.platform === r.xz.WEB &&
            "mimeType" in e &&
            null != e.mimeType &&
            (s.original_content_type = e.mimeType),
        s
    );
}
function d(e) {
    let t = new XMLHttpRequest();
    return new Promise((n, r) => {
        t.open("GET", e, !0),
            (t.responseType = "blob"),
            (t.onabort = (e) => r(e)),
            (t.onerror = (e) => r(e)),
            (t.ontimeout = (e) => r(e)),
            (t.onload = () => n(t?.response?.data)),
            t.send();
    });
}
function _(e) {
    let t,
        { uri: n, i: r, overrideFilename: i, overrideType: s } = e,
        o = n.split("/"),
        l = o[o.length - 1];
    l = l.split("?")?.[0]?.toLowerCase() ?? "";
    let u = a.find((e) => e.reName.test(l));
    if ((null == u && null != i && (u = a.find((e) => e.reName.test(i))), null != u && null != i)) {
        let e = u.name(r).split(".").pop(),
            n = i.lastIndexOf(".");
        t = -1 !== n ? `${i.substr(0, n)}.${e}` : `${i}.${e}`;
    } else t = null != u ? u.name(r) : (i ?? "unknown");
    return {
        uri: n,
        filename: t,
        type: s ?? u?.type ?? "unknown",
        isVideo: -1 !== (s ?? u?.name(r) ?? "").indexOf("video"),
        isImage: -1 !== (s ?? u?.name(r) ?? "").indexOf("image"),
    };
}
