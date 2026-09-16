n.d(t, { $S: () => d, kM: () => o });
var i = n(812729),
    r = n.n(i),
    a = n(540185);
function s(e) {
    return "uploading" !== e.status;
}
function l(e) {
    let t = { game_id: e.gameId, title: e.title, tags: e.tags };
    return "saved" === e.status
        ? { ...t, id: e.id, file_id: e.fileId, local_clip_id: e.localClipId }
        : { ...t, upload_filename: e.uploadFilename, local_clip_id: e.localClipId };
}
class o {
    id;
    type = a.x.CLIPS_GALLERY;
    clips;
    constructor({ id: e, clips: t }) {
        ((this.id = e), (this.clips = t));
    }
    getUploadedClips() {
        return this.clips.filter(s);
    }
    hasUploadingClips() {
        return this.clips.some((e) => "uploading" === e.status);
    }
    toSubmission() {
        return { id: this.id, data: { type: this.type, clips: this.getUploadedClips().map(l) } };
    }
    isUpdatable() {
        return !0;
    }
    isDiscardable() {
        return 0 === this.getUploadedClips().length;
    }
    isValid() {
        return this.getUploadedClips().length > 0 && !this.hasUploadingClips();
    }
    isEqual(e) {
        return e instanceof o && r()(this.getUploadedClips(), e.getUploadedClips());
    }
    getUniqueKey() {
        return this.type;
    }
    getProfileAnalyticsOptions() {
        return { widgetType: this.type };
    }
    getProfileEditAnalyticsOptions() {
        return { widgetEdited: this.type };
    }
}
let d = "video/mp4";
