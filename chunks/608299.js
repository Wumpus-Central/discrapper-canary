"use strict";
n.d(t, { A: () => a });
var i = n(228366),
    r = n(658612);
let a = {
    popFirstFile(e) {
        i.h.dispatch({ type: "UPLOAD_ATTACHMENT_POP_FILE", channelId: e });
    },
    addFiles(e) {
        let { files: t, channelId: n, draftType: a } = e;
        function s(e) {
            i.h.dispatch({ type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId: n, files: e, draftType: a });
        }
        t.some(r.d) ? Promise.all(t.map(r.z)).then(s) : s(t);
    },
    addFile(e) {
        let { file: t, channelId: n, draftType: a, allowOptimization: s } = e;
        function l(e) {
            i.h.dispatch({
                type: "UPLOAD_ATTACHMENT_ADD_FILES",
                channelId: n,
                files: [e],
                draftType: a,
                allowOptimization: s,
            });
        }
        (0, r.d)(t) ? (0, r.z)(t).then(l) : l(t);
    },
    remove(e, t, n) {
        i.h.dispatch({ type: "UPLOAD_ATTACHMENT_REMOVE_FILE", channelId: e, id: t, draftType: n });
    },
    removeFiles(e, t, n) {
        i.h.dispatch({ type: "UPLOAD_ATTACHMENT_REMOVE_FILES", channelId: e, attachmentIds: t, draftType: n });
    },
    clearAll(e, t) {
        i.h.dispatch({ type: "UPLOAD_ATTACHMENT_CLEAR_ALL_FILES", channelId: e, draftType: t });
    },
    update(e, t, n, r) {
        let { description: a, filename: s, spoiler: l, thumbnail: o } = r;
        i.h.dispatch({
            type: "UPLOAD_ATTACHMENT_UPDATE_FILE",
            channelId: e,
            id: t,
            filename: s,
            description: a,
            thumbnail: o,
            spoiler: l,
            draftType: n,
        });
    },
    setUploads(e) {
        let { uploads: t, channelId: n, draftType: r, resetState: a } = e;
        i.h.dispatch({
            type: "UPLOAD_ATTACHMENT_SET_UPLOADS",
            channelId: n,
            uploads: a ? t.map((e) => e.resetState()) : t,
            draftType: r,
        });
    },
    setFile(e) {
        let { file: t, channelId: n, id: r, draftType: a, allowOptimization: s } = e;
        i.h.dispatch({
            type: "UPLOAD_ATTACHMENT_SET_FILE",
            channelId: n,
            id: r,
            file: t,
            draftType: a,
            allowOptimization: s,
        });
    },
};
