var i = r(570140);
n.Z = {
    popFirstFile(e) {
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_POP_FILE',
            channelId: e
        });
    },
    addFiles(e) {
        let { files: n, channelId: r, showLargeMessageDialog: a, draftType: o } = e;
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_ADD_FILES',
            channelId: r,
            files: n,
            showLargeMessageDialog: a,
            draftType: o
        });
    },
    addFile(e) {
        let { file: n, channelId: r, showLargeMessageDialog: a, draftType: o } = e;
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_ADD_FILES',
            channelId: r,
            files: [n],
            showLargeMessageDialog: a,
            draftType: o
        });
    },
    remove(e, n, r) {
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_REMOVE_FILE',
            channelId: e,
            id: n,
            draftType: r
        });
    },
    removeFiles(e, n, r) {
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_REMOVE_FILES',
            channelId: e,
            attachmentIds: n,
            draftType: r
        });
    },
    clearAll(e, n) {
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_CLEAR_ALL_FILES',
            channelId: e,
            draftType: n
        });
    },
    update(e, n, r, a) {
        let { description: o, filename: s, spoiler: l, thumbnail: u } = a;
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_UPDATE_FILE',
            channelId: e,
            id: n,
            filename: s,
            description: o,
            thumbnail: u,
            spoiler: l,
            draftType: r
        });
    },
    setUploads(e) {
        let { uploads: n, channelId: r, draftType: a, resetState: o } = e;
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_SET_UPLOADS',
            channelId: r,
            uploads: o ? n.map((e) => e.resetState()) : n,
            draftType: a
        });
    },
    setFile(e) {
        let { file: n, channelId: r, id: a, draftType: o } = e;
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_SET_FILE',
            channelId: r,
            id: a,
            file: n,
            draftType: o
        });
    }
};
