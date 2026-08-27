"use strict";
n.d(t, { A: () => o });
var i = n(284009),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(762555);
let o = {
    getUploadPayload: function (e) {
        let t = e.item.file;
        return (
            r()(null != t, "file data must not be empty"),
            {
                filename: t.name,
                file_size: t.size,
                id: s().uniqueId(),
                is_clip: null != e.clip,
                title: e.clip?.name,
                application_id: e.clip?.applicationId,
                clip_created_at: null != e.clip ? (0, l.Uq)(e.clip.createdAt) : void 0,
                clip_participant_ids: null != e.clip ? (0, l.gD)(e.clip.users) : void 0,
                clip_remote_id: e.clip?.remoteClipId,
                clip_events_timeline: null != e.clip ? (0, l.lz)(e.clip) : void 0,
                clip_sync_timestamp: null != e.clip ? (0, l.Ae)(e.clip) : void 0,
                original_content_type: e.mimeType,
            }
        );
    },
};
