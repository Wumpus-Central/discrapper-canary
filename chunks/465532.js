"use strict";
n.d(t, { A: () => r });
var i = n(228366);
let r = {
    clearDraft(e, t) {
        i.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: t });
    },
    clearDraftCommand(e, t) {
        i.h.dispatch({ type: "DRAFT_COMMAND_CLEAR", channelId: e, draftType: t });
    },
    saveDraft(e, t, n, r) {
        i.h.dispatch({ type: "DRAFT_SAVE", channelId: e, draft: t, draftType: n, command: r });
    },
    changeDraft(e, t, n, r) {
        i.h.dispatch({ type: "DRAFT_CHANGE", channelId: e, draft: t, draftType: n, command: r });
    },
    changeThreadSettings(e, t) {
        i.h.dispatch({ type: "THREAD_SETTINGS_DRAFT_CHANGE", channelId: e, draft: t });
    },
    changeScheduledMessage(e, t) {
        i.h.dispatch({ type: "SCHEDULED_MESSAGE_DRAFT_CHANGE", channelId: e, draft: t });
    },
};
