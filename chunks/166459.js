n.d(t, { Z: () => i }), n(266796);
var r = n(570140);
let i = {
    popFirstFile(e) {
        r.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_POP_FILE',
            channelId: e
        });
    },
    addFiles(e) {
        let { files: t, channelId: n, showLargeMessageDialog: i, draftType: o } = e;
        r.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_ADD_FILES',
            channelId: n,
            files: t,
            showLargeMessageDialog: i,
            draftType: o
        });
    },
    addFile(e) {
        let { file: t, channelId: n, showLargeMessageDialog: i, draftType: o } = e;
        r.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_ADD_FILES',
            channelId: n,
            files: [t],
            showLargeMessageDialog: i,
            draftType: o
        });
    },
    remove(e, t, n) {
        r.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_REMOVE_FILE',
            channelId: e,
            id: t,
            draftType: n
        });
    },
    removeFiles(e, t, n) {
        r.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_REMOVE_FILES',
            channelId: e,
            attachmentIds: t,
            draftType: n
        });
    },
    clearAll(e, t) {
        r.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_CLEAR_ALL_FILES',
            channelId: e,
            draftType: t
        });
    },
    update(e, t, n, i) {
        let { description: o, filename: a, spoiler: s, thumbnail: l } = i;
        r.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_UPDATE_FILE',
            channelId: e,
            id: t,
            filename: a,
            description: o,
            thumbnail: l,
            spoiler: s,
            draftType: n
        });
    },
    setUploads(e) {
        let { uploads: t, channelId: n, draftType: i, resetState: o } = e;
        r.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_SET_UPLOADS',
            channelId: n,
            uploads: o ? t.map((e) => e.resetState()) : t,
            draftType: i
        });
    },
    setFile(e) {
        let { file: t, channelId: n, id: i, draftType: o } = e;
        r.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_SET_FILE',
            channelId: n,
            id: i,
            file: t,
            draftType: o
        });
    }
};
