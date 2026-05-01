t.d(l, { A: () => s });
var e = t(228366);
let s = {
    toggleMembersSection() {
        e.h.dispatch({ type: "CHANNEL_TOGGLE_MEMBERS_SECTION" });
    },
    toggleUserProfileSidebarSection() {
        e.h.dispatch({ type: "USER_PROFILE_SIDEBAR_TOGGLE_SECTION" });
    },
    toggleSummariesSection() {
        e.h.dispatch({ type: "CHANNEL_TOGGLE_SUMMARIES_SECTION" });
    },
    toggleConversationsSection() {
        e.h.dispatch({ type: "CHANNEL_TOGGLE_CONVERSATIONS_SECTION" });
    },
    openConversationsSection() {
        e.h.dispatch({ type: "CHANNEL_OPEN_CONVERSATIONS_SECTION" });
    },
};
