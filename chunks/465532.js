"use strict";
n.d(t, { A: () => r });
var i = n(228366);
let r = {
    clearDraft(e, t) {
        i.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: t });
    },
    saveDraft(e, t, n) {
        i.h.dispatch({ type: "DRAFT_SAVE", channelId: e, draft: t, draftType: n });
    },
    changeDraft(e, t, n) {
        i.h.dispatch({ type: "DRAFT_CHANGE", channelId: e, draft: t, draftType: n });
    },
    changeThreadSettings(e, t) {
        i.h.dispatch({ type: "THREAD_SETTINGS_DRAFT_CHANGE", channelId: e, draft: t });
    },
};
