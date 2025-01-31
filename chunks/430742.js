n.d(t, { Z: () => r });
var i = n(570140);
let r = {
    clearDraft(e, t) {
        i.Z.dispatch({
            type: 'DRAFT_CLEAR',
            channelId: e,
            draftType: t
        });
    },
    saveDraft(e, t, n) {
        i.Z.dispatch({
            type: 'DRAFT_SAVE',
            channelId: e,
            draft: t,
            draftType: n
        });
    },
    changeDraft(e, t, n) {
        i.Z.dispatch({
            type: 'DRAFT_CHANGE',
            channelId: e,
            draft: t,
            draftType: n
        });
    },
    changeThreadSettings(e, t) {
        i.Z.dispatch({
            type: 'THREAD_SETTINGS_DRAFT_CHANGE',
            channelId: e,
            draft: t
        });
    }
};
