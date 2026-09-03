n.d(t, { $: () => o, k: () => l });
var i = n(812729),
    r = n.n(i),
    a = n(540185);
function s(e) {
    let t = { game_id: e.gameId, title: e.title, tags: e.tags };
    return "saved" === e.status
        ? { ...t, id: e.id, file_id: e.fileId, local_clip_id: e.localClipId }
        : { ...t, upload_filename: e.uploadFilename, local_clip_id: e.localClipId };
}
class l {
    id;
    type = a.x.CLIPS_GALLERY;
    clips;
    constructor({ id: e, clips: t }) {
        (this.id = e), (this.clips = t);
    }
    toSubmission() {
        return { id: this.id, data: { type: this.type, clips: this.clips.map(s) } };
    }
    isUpdatable() {
        return !0;
    }
    isDiscardable() {
        return 0 === this.clips.length;
    }
    isValid() {
        return this.clips.length > 0;
    }
    isEqual(e) {
        return e instanceof l && r()(this.clips, e.clips);
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
let o = "video/mp4";
