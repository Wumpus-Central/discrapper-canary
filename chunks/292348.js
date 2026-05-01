"use strict";
n.d(t, { OW: () => u, YK: () => l, dm: () => c, eM: () => o, ly: () => d });
var i = n(565150),
    r = n(762555),
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
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0,
        a = { id: t?.toString() ?? e.id };
    null != e.description && (a.description = e.description);
    let o = (function (e) {
        let { spoiler: t } = e;
        return t ? s._W : "";
    })({ spoiler: e.spoiler });
    return (
        (a.filename = `${o}${n ?? e.filename}`),
        (a.uploaded_filename = e.uploadedFilename),
        "durationSecs" in e && null != e.durationSecs && (a.duration_secs = e.durationSecs),
        "waveform" in e && null != e.waveform && (a.waveform = e.waveform),
        "isThumbnail" in e && !0 === e.isThumbnail && (a.is_thumbnail = e.isThumbnail),
        "clip" in e &&
            null != e.clip &&
            ((a.is_clip = !0),
            (a.title = e.clip.name),
            (a.application_id = e.clip.applicationId),
            (a.clip_created_at = (0, r.Uq)(e.clip.createdAt)),
            (a.clip_participant_ids = (0, r.gD)(e.clip.users)),
            (a.clip_remote_id = e.clip.remoteClipId),
            (a.clip_events_timeline = (0, r.lz)(e.clip))),
        "item" in e &&
            null != e.item &&
            e.item.platform === i.xz.WEB &&
            "mimeType" in e &&
            null != e.mimeType &&
            (a.original_content_type = e.mimeType),
        a
    );
}
function c(e) {
    let t = new XMLHttpRequest();
    return new Promise((n, i) => {
        t.open("GET", e, !0),
            (t.responseType = "blob"),
            (t.onabort = (e) => i(e)),
            (t.onerror = (e) => i(e)),
            (t.ontimeout = (e) => i(e)),
            (t.onload = () => n(t?.response?.data)),
            t.send();
    });
}
function d(e) {
    let t,
        { uri: n, i, overrideFilename: r, overrideType: s } = e,
        o = n.split("/"),
        l = o[o.length - 1];
    l = l.split("?")?.[0]?.toLowerCase() ?? "";
    let u = a.find((e) => e.reName.test(l));
    if ((null == u && null != r && (u = a.find((e) => e.reName.test(r))), null != u && null != r)) {
        let e = u.name(i).split(".").pop(),
            n = r.lastIndexOf(".");
        t = -1 !== n ? `${r.substr(0, n)}.${e}` : `${r}.${e}`;
    } else t = null != u ? u.name(i) : (r ?? "unknown");
    return {
        uri: n,
        filename: t,
        type: s ?? u?.type ?? "unknown",
        isVideo: -1 !== (s ?? u?.name(i) ?? "").indexOf("video"),
        isImage: -1 !== (s ?? u?.name(i) ?? "").indexOf("image"),
    };
}
