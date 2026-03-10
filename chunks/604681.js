n.d(t, { A: () => r });
var i = n(73153);
let r = {
    toggleMembersSection() {
        i.h.dispatch({ type: "CHANNEL_TOGGLE_MEMBERS_SECTION" });
    },
    toggleUserProfileSidebarSection() {
        i.h.dispatch({ type: "USER_PROFILE_SIDEBAR_TOGGLE_SECTION" });
    },
    toggleSummariesSection() {
        i.h.dispatch({ type: "CHANNEL_TOGGLE_SUMMARIES_SECTION" });
    },
    toggleConversationsSection() {
        i.h.dispatch({ type: "CHANNEL_TOGGLE_CONVERSATIONS_SECTION" });
    },
};
