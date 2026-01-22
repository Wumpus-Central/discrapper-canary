n.d(t, {
    OW: () => c,
    dm: () => u,
    eM: () => o,
    ly: () => d,
}),
    n(228524),
    n(65821),
    n(747238);
var r = n(565150),
    i = n(762555),
    a = n(381941);
let s = [
        {
            reName: /\.jpe?g$/i,
            name: (e) => "image".concat(e, ".jpg"),
            type: "image/jpeg",
        },
        {
            reName: /\.jfif$/i,
            name: (e) => "image".concat(e, ".jpg"),
            type: "image/jpeg",
        },
        {
            reName: /\.png$/i,
            name: (e) => "image".concat(e, ".png"),
            type: "image/png",
        },
        {
            reName: /\.gif$/i,
            name: (e) => "image".concat(e, ".gif"),
            type: "image/gif",
        },
        {
            reName: /\.webp$/i,
            name: (e) => "image".concat(e, ".webp"),
            type: "image/webp",
        },
        {
            reName: /\.avif$/i,
            name: (e) => "image".concat(e, ".avif"),
            type: "image/avif",
        },
        {
            reName: /\.heic$/i,
            name: (e) => "image".concat(e, ".heic"),
            type: "image/heic",
        },
        {
            reName: /\.heif$/i,
            name: (e) => "image".concat(e, ".heif"),
            type: "image/heif",
        },
        {
            reName: /\.dng$/i,
            name: (e) => "image".concat(e, ".dng"),
            type: "image/x-adobe-dng",
        },
        {
            reName: /\.mov$/i,
            name: (e) => "video".concat(e, ".mov"),
            type: "video/quicktime",
        },
        {
            reName: /\.avi$/i,
            name: (e) => "video".concat(e, ".avi"),
            type: "video/x-msvideo",
        },
        {
            reName: /\.mp4$/i,
            name: (e) => "video".concat(e, ".mp4"),
            type: "video/mp4",
        },
        {
            reName: /\.webm$/i,
            name: (e) => "video".concat(e, ".webm"),
            type: "image/webm",
        },
    ],
    o = 524288e3;

function l(e) {
    let { spoiler: t } = e;
    return t ? a._W : "";
}

function c(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        a = arguments.length > 2 ? arguments[2] : void 0,
        s = {
            id: null != (t = null == n ? void 0 : n.toString()) ? t : e.id,
        };
    null != e.description && (s.description = e.description);
    let o = l({
        spoiler: e.spoiler,
    });
    return (
        (s.filename = "".concat(o).concat(null != a ? a : e.filename)),
        (s.uploaded_filename = e.uploadedFilename),
        "durationSecs" in e && null != e.durationSecs && (s.duration_secs = e.durationSecs),
        "waveform" in e && null != e.waveform && (s.waveform = e.waveform),
        "isThumbnail" in e && !0 === e.isThumbnail && (s.is_thumbnail = e.isThumbnail),
        "clip" in e &&
            null != e.clip &&
            ((s.is_clip = !0),
            (s.title = e.clip.name),
            (s.application_id = e.clip.applicationId),
            (s.clip_created_at = (0, i.U)(e.clip.id)),
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

function u(e) {
    let t = new XMLHttpRequest();
    return new Promise((n, r) => {
        t.open("GET", e, !0),
            (t.responseType = "blob"),
            (t.onabort = (e) => r(e)),
            (t.onerror = (e) => r(e)),
            (t.ontimeout = (e) => r(e)),
            (t.onload = () => {
                var e;
                return n(null == t || null == (e = t.response) ? void 0 : e.data);
            }),
            t.send();
    });
}

function d(e) {
    var t, n, r, i, a, o;
    let l,
        { uri: c, i: u, overrideFilename: d, overrideType: f } = e,
        p = c.split("/"),
        _ = p[p.length - 1];
    _ = null != (t = null == (o = _.split("?")) || null == (a = o[0]) ? void 0 : a.toLowerCase()) ? t : "";
    let h = s.find((e) => e.reName.test(_));
    if ((null == h && null != d && (h = s.find((e) => e.reName.test(d))), null != h && null != d)) {
        let e = h.name(u).split(".").pop(),
            t = d.lastIndexOf(".");
        l = -1 !== t ? "".concat(d.substr(0, t), ".").concat(e) : "".concat(d, ".").concat(e);
    } else l = null != h ? h.name(u) : null != d ? d : "unknown";
    return {
        uri: c,
        filename: l,
        type: null != (n = null != f ? f : null == h ? void 0 : h.type) ? n : "unknown",
        isVideo: -1 !== (null != (r = null != f ? f : null == h ? void 0 : h.name(u)) ? r : "").indexOf("video"),
        isImage: -1 !== (null != (i = null != f ? f : null == h ? void 0 : h.name(u)) ? i : "").indexOf("image"),
    };
}
