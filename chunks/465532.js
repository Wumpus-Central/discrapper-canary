"use strict";
n.d(t, { A: () => i });
var r = n(73153);
let i = {
    clearDraft(e, t) {
        r.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: t });
    },
    saveDraft(e, t, n) {
        r.h.dispatch({ type: "DRAFT_SAVE", channelId: e, draft: t, draftType: n });
    },
    changeDraft(e, t, n) {
        r.h.dispatch({ type: "DRAFT_CHANGE", channelId: e, draft: t, draftType: n });
    },
    changeThreadSettings(e, t) {
        r.h.dispatch({ type: "THREAD_SETTINGS_DRAFT_CHANGE", channelId: e, draft: t });
    },
};
