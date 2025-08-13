n.d(t, { Z: () => l });
var r = n(512722),
    i = n.n(r),
    o = n(392711),
    a = n.n(o),
    s = n(830496);
let l = {
    getUploadPayload: function (e) {
        var t, n;
        let r = e.item,
            o = r.file;
        return (
            i()(null != o, "file data must not be empty"),
            {
                filename: o.name,
                file_size: o.size,
                id: a().uniqueId(),
                is_clip: null != e.clip,
                title: null == (t = e.clip) ? void 0 : t.name,
                application_id: null == (n = e.clip) ? void 0 : n.applicationId,
                clip_created_at: null != e.clip ? (0, s.U)(e.clip.id) : void 0,
                clip_participant_ids: null != e.clip ? (0, s.Z)(e.clip.users) : void 0,
                original_content_type: r.originalContentType,
            }
        );
    },
};
