"use strict";
n.d(t, { A: () => i });
var r = n(73153);
let i = {
    popFirstFile(e) {
        r.h.dispatch({ type: "UPLOAD_ATTACHMENT_POP_FILE", channelId: e });
    },
    addFiles(e) {
        let { files: t, channelId: n, draftType: i } = e;
        r.h.dispatch({ type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId: n, files: t, draftType: i });
    },
    addFile(e) {
        let { file: t, channelId: n, draftType: i, allowOptimization: s } = e;
        r.h.dispatch({
            type: "UPLOAD_ATTACHMENT_ADD_FILES",
            channelId: n,
            files: [t],
            draftType: i,
            allowOptimization: s,
        });
    },
    remove(e, t, n) {
        r.h.dispatch({ type: "UPLOAD_ATTACHMENT_REMOVE_FILE", channelId: e, id: t, draftType: n });
    },
    removeFiles(e, t, n) {
        r.h.dispatch({ type: "UPLOAD_ATTACHMENT_REMOVE_FILES", channelId: e, attachmentIds: t, draftType: n });
    },
    clearAll(e, t) {
        r.h.dispatch({ type: "UPLOAD_ATTACHMENT_CLEAR_ALL_FILES", channelId: e, draftType: t });
    },
    update(e, t, n, i) {
        let { description: s, filename: a, spoiler: o, thumbnail: l } = i;
        r.h.dispatch({
            type: "UPLOAD_ATTACHMENT_UPDATE_FILE",
            channelId: e,
            id: t,
            filename: a,
            description: s,
            thumbnail: l,
            spoiler: o,
            draftType: n,
        });
    },
    setUploads(e) {
        let { uploads: t, channelId: n, draftType: i, resetState: s } = e;
        r.h.dispatch({
            type: "UPLOAD_ATTACHMENT_SET_UPLOADS",
            channelId: n,
            uploads: s ? t.map((e) => e.resetState()) : t,
            draftType: i,
        });
    },
    setFile(e) {
        let { file: t, channelId: n, id: i, draftType: s, allowOptimization: a } = e;
        r.h.dispatch({
            type: "UPLOAD_ATTACHMENT_SET_FILE",
            channelId: n,
            id: i,
            file: t,
            draftType: s,
            allowOptimization: a,
        });
    },
};
