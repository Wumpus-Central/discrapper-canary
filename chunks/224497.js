n.d(t, { Z: () => l });
var r = n(512722),
    i = n.n(r),
    a = n(392711),
    o = n.n(a),
    s = n(830496);
let l = {
    getUploadPayload: function (e) {
        var t, n;
        let r = e.item.file;
        return (
            i()(null != r, 'file data must not be empty'),
            {
                filename: r.name,
                file_size: r.size,
                id: o().uniqueId(),
                is_clip: null != e.clip,
                title: null == (t = e.clip) ? void 0 : t.name,
                application_id: null == (n = e.clip) ? void 0 : n.applicationId,
                clip_created_at: null != e.clip ? (0, s.U)(e.clip.id) : void 0,
                clip_participant_ids: null != e.clip ? (0, s.Z)(e.clip.users) : void 0
            }
        );
    }
};
