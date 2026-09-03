n.d(t, { OW: () => c, YK: () => o, dm: () => u, eM: () => l, jS: () => d, ly: () => _ });
var i = n(565150),
    r = n(762555),
    a = n(219882);
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
    l = 524288e3,
    o = 500;
function d(e) {
    let { location: t } = e;
    return (0, a.J6)({ location: t }).enabled ? 0x40000000 : l;
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0,
        a = { id: t?.toString() ?? e.id };
    return (
        null != e.description && (a.description = e.description),
        (a.filename = n ?? e.filename),
        (a.uploaded_filename = e.uploadedFilename),
        e.spoiler && (a.is_spoiler = !0),
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
            (a.clip_events_timeline = (0, r.lz)(e.clip)),
            (a.clip_sync_timestamp = (0, r.Ae)(e.clip))),
        "item" in e &&
            null != e.item &&
            e.item.platform === i.xz.WEB &&
            "mimeType" in e &&
            null != e.mimeType &&
            (a.original_content_type = e.mimeType),
        a
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
function _(e) {
    let t,
        { uri: n, i, overrideFilename: r, overrideType: a } = e,
        l = n.split("/"),
        o = l[l.length - 1];
    o = o.split("?")?.[0]?.toLowerCase() ?? "";
    let d = s.find((e) => e.reName.test(o));
    if ((null == d && null != r && (d = s.find((e) => e.reName.test(r))), null != d && null != r)) {
        let e = d.name(i).split(".").pop(),
            n = r.lastIndexOf(".");
        t = -1 !== n ? `${r.substr(0, n)}.${e}` : `${r}.${e}`;
    } else t = null != d ? d.name(i) : (r ?? "unknown");
    return {
        uri: n,
        filename: t,
        type: a ?? d?.type ?? "unknown",
        isVideo: -1 !== (a ?? d?.name(i) ?? "").indexOf("video"),
        isImage: -1 !== (a ?? d?.name(i) ?? "").indexOf("image"),
    };
}
