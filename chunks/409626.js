n.r(t),
    n.d(t, {
        GameProfileEmbedAction: () => _,
        GameProfileSources: () => A,
        GameProfileTrackActionActions: () => E,
        GameProfileTypes: () => h,
        generateViewId: () => I,
        getGuildIdAndVerifiedFromInvite: () => S,
        trackGameProfileAction: () => T,
        trackGameProfileClose: () => p,
        trackGameProfileEmbedAction: () => g,
        trackGameProfileFeedback: () => m,
        trackGameProfileOpen: () => f,
    });
var i,
    r,
    a,
    s,
    l = n(132500),
    o = n(99753),
    d = n(174459),
    c = n(652215),
    u = n(424994),
    _ = (((i = {})[(i.CopyLink = 0)] = "CopyLink"), i),
    E =
        (((r = {})[(r.FollowGame = 0)] = "FollowGame"),
        (r[(r.UnfollowGame = 1)] = "UnfollowGame"),
        (r[(r.ClickMessageUser = 2)] = "ClickMessageUser"),
        (r[(r.SendMessageUser = 3)] = "SendMessageUser"),
        (r[(r.JoinVC = 4)] = "JoinVC"),
        (r[(r.WatchStream = 5)] = "WatchStream"),
        (r[(r.ClickSimilarGame = 6)] = "ClickSimilarGame"),
        (r[(r.WebsiteLink = 7)] = "WebsiteLink"),
        (r[(r.XLink = 8)] = "XLink"),
        (r[(r.YouTubeLink = 9)] = "YouTubeLink"),
        (r[(r.ShowMore = 10)] = "ShowMore"),
        (r[(r.ShowLess = 11)] = "ShowLess"),
        (r[(r.JoinServer = 12)] = "JoinServer"),
        (r[(r.ClickImage = 13)] = "ClickImage"),
        (r[(r.GameShop = 14)] = "GameShop"),
        (r[(r.LinkAccount = 15)] = "LinkAccount"),
        (r[(r.ClaimGame = 16)] = "ClaimGame"),
        (r[(r.FacebookLink = 17)] = "FacebookLink"),
        (r[(r.InstagramLink = 18)] = "InstagramLink"),
        (r[(r.BlueskyLink = 19)] = "BlueskyLink"),
        (r[(r.RedditLink = 20)] = "RedditLink"),
        (r[(r.TwitchLink = 21)] = "TwitchLink"),
        (r[(r.SteamStoreLink = 22)] = "SteamStoreLink"),
        (r[(r.EpicStoreLink = 23)] = "EpicStoreLink"),
        (r[(r.RobloxStoreLink = 24)] = "RobloxStoreLink"),
        (r[(r.BattlenetStoreLink = 25)] = "BattlenetStoreLink"),
        (r[(r.RiotStoreLink = 26)] = "RiotStoreLink"),
        (r[(r.MinecraftStoreLink = 27)] = "MinecraftStoreLink"),
        (r[(r.DiscordCollectiblesShop = 28)] = "DiscordCollectiblesShop"),
        (r[(r.DiscordCollectiblesShopItem = 29)] = "DiscordCollectiblesShopItem"),
        (r[(r.GameShopItem = 30)] = "GameShopItem"),
        (r[(r.SteamReviews = 31)] = "SteamReviews"),
        (r[(r.OpenCriticReviews = 32)] = "OpenCriticReviews"),
        (r[(r.Announcements = 33)] = "Announcements"),
        (r[(r.AnnouncementsItem = 34)] = "AnnouncementsItem"),
        (r[(r.CloudPlay = 35)] = "CloudPlay"),
        (r[(r.ClickTrailer = 36)] = "ClickTrailer"),
        (r[(r.Feedback = 37)] = "Feedback"),
        (r[(r.XboxGamePassStoreLink = 38)] = "XboxGamePassStoreLink"),
        (r[(r.CopyLink = 39)] = "CopyLink"),
        r),
    A =
        (((a = {}).ActivityCard = "activity_card"),
        (a.ActivityCardContextMenu = "activity_card_context_menu"),
        (a.UserProfile = "user_profile"),
        (a.UserProfileApplicationWidget = "user_profile_application_widget"),
        (a.UserProfileCardContextMenu = "user_profile_card_context_menu"),
        (a.SimilarGames = "similar_games"),
        (a.DevTools = "dev_tools"),
        (a.Embed = "embed"),
        (a.GameProfileEmbed = "game_profile_embed"),
        (a.RtcPanel = "rtc_panel"),
        (a.FriendsActivityFeed = "friends_activity_feed"),
        (a.MiniGameProfile = "mini_game_profile"),
        (a.GameMention = "game_mention"),
        (a.GameSheet = "game_sheet"),
        (a.QuestBar = "quest_bar"),
        (a.QuestHome = "quest_home_desktop"),
        (a.QuestInGameModal = "quest_in_game_modal"),
        (a.QuestActivityPanel = "quest_activity_panel"),
        (a.QuestEmbed = "quest_embed"),
        (a.QuestLiveStream = "quest_live_stream"),
        (a.ClipEmbed = "clip_embed"),
        (a.ClipsReminder = "clips_reminder"),
        (a.AnnouncementChannelReturn = "announcement_channel_return"),
        (a.CallTile = "call_tile"),
        (a.InAppBrowserReturn = "in_app_browser_return"),
        (a.Deeplink = "deeplink"),
        (a.DmHeaderActivity = "dm_header_activity"),
        (a.VcHeaderActivity = "vc_header_activity"),
        (a.QuickSwitcher = "quick_switcher"),
        (a.GuildProfileGames = "guild_profile_games"),
        (a.GameInvitesChannel = "game_invites_channel"),
        (a.VoiceChannelGames = "voice_channel_games"),
        a),
    h = (((s = {}).FullProfile = "full_profile"), (s.MiniProfile = "mini_profile"), s);
function I() {
    return (0, l.A)();
}
function f(e) {
    let { viewId: t, source: n, gameName: i, gameId: r, authorId: a, profileType: s } = e;
    return (
        d.default.track(c.HAw.GAME_PROFILE_OPEN, {
            view_id: t,
            source: n,
            game_name: i,
            application_id: r,
            author_id: a,
            request_id: o.A.getFeedRequestId(u.X1.GLOBAL_FEED),
            profile_type: s,
        }),
        t
    );
}
function p(e) {
    let {
        viewId: t,
        gameName: n,
        gameId: i,
        playedFriendIds: r,
        playedFriendsData: a,
        similarGames: s,
        guildId: l,
        isVerified: _,
    } = e;
    d.default.track(c.HAw.GAME_PROFILE_CLOSE, {
        view_id: t,
        game_name: n,
        application_id: i,
        played_friend_ids: r,
        played_friends_data: a,
        similar_games: s,
        request_id: o.A.getFeedRequestId(u.X1.GLOBAL_FEED),
        official_guild_id: _ ? l : void 0,
        guild_id: l,
    });
}
function T(e) {
    let {
        gameName: t,
        gameId: n,
        action: i,
        recipientUserId: r,
        similarGameId: a,
        viewId: s,
        guildId: l,
        isVerified: o,
        source: u,
    } = e;
    d.default.track(c.HAw.GAME_PROFILE_ACTION, {
        game_name: t,
        application_id: n,
        action: i,
        recipient_user_id: r,
        similar_game_id: a,
        view_id: s,
        official_guild_id: o ? l : void 0,
        guild_id: l,
        source: u,
    });
}
function m(e) {
    let {
        viewId: t,
        applicationId: n,
        suggestedGameName: i,
        suggestedGameApplicationId: r,
        feedback: a,
        submitted: s,
    } = e;
    return d.default.track(c.HAw.GAME_PROFILE_FEEDBACK, {
        view_id: t,
        application_id: n,
        suggested_game_name: i,
        suggested_game_application_id: r,
        feedback: a,
        submitted: s,
    });
}
function g(e) {
    let { gameName: t, gameId: n, action: i } = e;
    d.default.track(c.HAw.GAME_PROFILE_EMBED_ACTION, { game_name: t, application_id: n, action: i });
}
function S(e) {
    return { guildId: e?.guild?.id ?? null, isVerified: e?.guild?.features.includes(c.GuildFeatures.VERIFIED) ?? !1 };
}
