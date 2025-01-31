n.d(t, { Z: () => r });
var i = n(570140);
let r = {
    popFirstFile(e) {
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_POP_FILE',
            channelId: e
        });
    },
    addFiles(e) {
        let { files: t, channelId: n, showLargeMessageDialog: r, draftType: a } = e;
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_ADD_FILES',
            channelId: n,
            files: t,
            showLargeMessageDialog: r,
            draftType: a
        });
    },
    addFile(e) {
        let { file: t, channelId: n, showLargeMessageDialog: r, draftType: a } = e;
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_ADD_FILES',
            channelId: n,
            files: [t],
            showLargeMessageDialog: r,
            draftType: a
        });
    },
    remove(e, t, n) {
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_REMOVE_FILE',
            channelId: e,
            id: t,
            draftType: n
        });
    },
    removeFiles(e, t, n) {
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_REMOVE_FILES',
            channelId: e,
            attachmentIds: t,
            draftType: n
        });
    },
    clearAll(e, t) {
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_CLEAR_ALL_FILES',
            channelId: e,
            draftType: t
        });
    },
    update(e, t, n, r) {
        let { description: a, filename: s, spoiler: o, thumbnail: l } = r;
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_UPDATE_FILE',
            channelId: e,
            id: t,
            filename: s,
            description: a,
            thumbnail: l,
            spoiler: o,
            draftType: n
        });
    },
    setUploads(e) {
        let { uploads: t, channelId: n, draftType: r, resetState: a } = e;
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_SET_UPLOADS',
            channelId: n,
            uploads: a ? t.map((e) => e.resetState()) : t,
            draftType: r
        });
    },
    setFile(e) {
        let { file: t, channelId: n, id: r, draftType: a } = e;
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_SET_FILE',
            channelId: n,
            id: r,
            file: t,
            draftType: a
        });
    }
};
