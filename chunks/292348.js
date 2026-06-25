"use strict";
n.d(t, { OW: () => l, YK: () => o, dm: () => u, eM: () => a, ly: () => c });
var i = n(565150),
    r = n(757574);
let s = [
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
    a = 524288e3,
    o = 500;
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0,
        s = { id: t?.toString() ?? e.id };
    return (
        null != e.description && (s.description = e.description),
        (s.filename = n ?? e.filename),
        (s.uploaded_filename = e.uploadedFilename),
        e.spoiler && (s.is_spoiler = !0),
        "durationSecs" in e && null != e.durationSecs && (s.duration_secs = e.durationSecs),
        "waveform" in e && null != e.waveform && (s.waveform = e.waveform),
        "isThumbnail" in e && !0 === e.isThumbnail && (s.is_thumbnail = e.isThumbnail),
        "clip" in e &&
            null != e.clip &&
            ((s.is_clip = !0),
            (s.title = e.clip.name),
            (s.application_id = e.clip.applicationId),
            (s.clip_created_at = (0, r.Uq)(e.clip.createdAt)),
            (s.clip_participant_ids = (0, r.gD)(e.clip.users)),
            (s.clip_remote_id = e.clip.remoteClipId),
            (s.clip_events_timeline = (0, r.lz)(e.clip))),
        "item" in e &&
            null != e.item &&
            e.item.platform === i.xz.WEB &&
            "mimeType" in e &&
            null != e.mimeType &&
            (s.original_content_type = e.mimeType),
        s
    );
}
function u(e) {
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
function c(e) {
    let t,
        { uri: n, i, overrideFilename: r, overrideType: a } = e,
        o = n.split("/"),
        l = o[o.length - 1];
    l = l.split("?")?.[0]?.toLowerCase() ?? "";
    let u = s.find((e) => e.reName.test(l));
    if ((null == u && null != r && (u = s.find((e) => e.reName.test(r))), null != u && null != r)) {
        let e = u.name(i).split(".").pop(),
            n = r.lastIndexOf(".");
        t = -1 !== n ? `${r.substr(0, n)}.${e}` : `${r}.${e}`;
    } else t = null != u ? u.name(i) : (r ?? "unknown");
    return {
        uri: n,
        filename: t,
        type: a ?? u?.type ?? "unknown",
        isVideo: -1 !== (a ?? u?.name(i) ?? "").indexOf("video"),
        isImage: -1 !== (a ?? u?.name(i) ?? "").indexOf("image"),
    };
}
