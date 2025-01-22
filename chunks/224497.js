var i = r(512722),
    a = r.n(i),
    o = r(392711),
    s = r.n(o),
    l = r(830496);
function u(e) {
    var n, r;
    let i = e.item.file;
    return (
        a()(null != i, 'file data must not be empty'),
        {
            filename: i.name,
            file_size: i.size,
            id: s().uniqueId(),
            is_clip: null != e.clip,
            title: null === (n = e.clip) || void 0 === n ? void 0 : n.name,
            application_id: null === (r = e.clip) || void 0 === r ? void 0 : r.applicationId,
            clip_created_at: null != e.clip ? (0, l.U)(e.clip.id) : void 0,
            clip_participant_ids: null != e.clip ? (0, l.Z)(e.clip.users) : void 0
        }
    );
}
n.Z = { getUploadPayload: u };
