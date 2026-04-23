"use strict";
n.d(t, { A: () => l });
var r = n(284009),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(762555);
let l = {
    getUploadPayload: function (e) {
        let t = e.item.file;
        return (
            i()(null != t, "file data must not be empty"),
            {
                filename: t.name,
                file_size: t.size,
                id: a().uniqueId(),
                is_clip: null != e.clip,
                title: e.clip?.name,
                application_id: e.clip?.applicationId,
                clip_created_at: null != e.clip ? (0, o.U)(e.clip.createdAt) : void 0,
                clip_participant_ids: null != e.clip ? (0, o.g)(e.clip.users) : void 0,
                clip_remote_id: e.clip?.remoteClipId,
                original_content_type: e.mimeType,
            }
        );
    },
};
