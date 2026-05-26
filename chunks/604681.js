a.d(t, { A: () => l });
var s = a(228366);
let l = {
    toggleMembersSection() {
        s.h.dispatch({ type: "CHANNEL_TOGGLE_MEMBERS_SECTION" });
    },
    toggleUserProfileSidebarSection() {
        s.h.dispatch({ type: "USER_PROFILE_SIDEBAR_TOGGLE_SECTION" });
    },
    toggleSummariesSection() {
        s.h.dispatch({ type: "CHANNEL_TOGGLE_SUMMARIES_SECTION" });
    },
    toggleConversationsSection() {
        s.h.dispatch({ type: "CHANNEL_TOGGLE_CONVERSATIONS_SECTION" });
    },
    openConversationsSection() {
        s.h.dispatch({ type: "CHANNEL_OPEN_CONVERSATIONS_SECTION" });
    },
};
