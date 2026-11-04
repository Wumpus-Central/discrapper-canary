var i = n(73153);
n.d(
    t,
    {},
    {
        A: {
            toggleMembersSection() {
                i.h.dispatch({ type: "CHANNEL_TOGGLE_MEMBERS_SECTION" });
            },
            toggleUserProfileSidebarSection() {
                i.h.dispatch({ type: "USER_PROFILE_SIDEBAR_TOGGLE_SECTION" });
            },
            toggleSummariesSection() {
                i.h.dispatch({ type: "CHANNEL_TOGGLE_SUMMARIES_SECTION" });
            },
            setFriendsSidebarCollapsed(e) {
                i.h.dispatch({ type: "FRIENDS_SIDEBAR_SET_COLLAPSED", collapsed: e });
            },
            setFriendsSidebarAvailable(e) {
                i.h.dispatch({ type: "FRIENDS_SIDEBAR_SET_AVAILABLE", available: e });
            },
        },
    },
);
