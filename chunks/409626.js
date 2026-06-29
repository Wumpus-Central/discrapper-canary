"use strict";
n.d(t, {
    HV: () => p,
    K6: () => I,
    OR: () => T,
    Ob: () => f,
    Tn: () => A,
    VO: () => S,
    V_: () => g,
    Vv: () => _,
    Ws: () => h,
    rw: () => m,
    u9: () => E,
});
var i,
    r,
    s,
    a,
    o = n(835245),
    l = n(99753),
    u = n(174459),
    c = n(652215),
    d = n(424994),
    _ = (((i = {})[(i.CopyLink = 0)] = "CopyLink"), i),
    h =
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
    f =
        (((s = {}).ActivityCard = "activity_card"),
        (s.ActivityCardContextMenu = "activity_card_context_menu"),
        (s.UserProfile = "user_profile"),
        (s.UserProfileCardContextMenu = "user_profile_card_context_menu"),
        (s.SimilarGames = "similar_games"),
        (s.DevTools = "dev_tools"),
        (s.Embed = "embed"),
        (s.GameProfileEmbed = "game_profile_embed"),
        (s.RtcPanel = "rtc_panel"),
        (s.FriendsActivityFeed = "friends_activity_feed"),
        (s.MiniGameProfile = "mini_game_profile"),
        (s.GameMention = "game_mention"),
        (s.GameSheet = "game_sheet"),
        (s.QuestBar = "quest_bar"),
        (s.QuestHome = "quest_home_desktop"),
        (s.QuestInGameModal = "quest_in_game_modal"),
        (s.QuestActivityPanel = "quest_activity_panel"),
        (s.QuestEmbed = "quest_embed"),
        (s.QuestLiveStream = "quest_live_stream"),
        (s.ClipEmbed = "clip_embed"),
        (s.ClipsReminder = "clips_reminder"),
        (s.AnnouncementChannelReturn = "announcement_channel_return"),
        (s.CallTile = "call_tile"),
        (s.InAppBrowserReturn = "in_app_browser_return"),
        (s.Deeplink = "deeplink"),
        (s.DmHeaderActivity = "dm_header_activity"),
        (s.QuickSwitcher = "quick_switcher"),
        s),
    p = (((a = {}).FullProfile = "full_profile"), (a.MiniProfile = "mini_profile"), a);
function E() {
    return (0, o.A)();
}
function m(e) {
    let { viewId: t, source: n, gameName: i, gameId: r, authorId: s, profileType: a } = e;
    return (
        u.default.track(c.HAw.GAME_PROFILE_OPEN, {
            view_id: t,
            source: n,
            game_name: i,
            application_id: r,
            author_id: s,
            request_id: l.A.getFeedRequestId(d.X1.GLOBAL_FEED),
            profile_type: a,
        }),
        t
    );
}
function g(e) {
    let {
        viewId: t,
        gameName: n,
        gameId: i,
        playedFriendIds: r,
        playedFriendsData: s,
        similarGames: a,
        guildId: o,
        isVerified: _,
    } = e;
    u.default.track(c.HAw.GAME_PROFILE_CLOSE, {
        view_id: t,
        game_name: n,
        application_id: i,
        played_friend_ids: r,
        played_friends_data: s,
        similar_games: a,
        request_id: l.A.getFeedRequestId(d.X1.GLOBAL_FEED),
        official_guild_id: _ ? o : void 0,
        guild_id: o,
    });
}
function A(e) {
    let {
        gameName: t,
        gameId: n,
        action: i,
        recipientUserId: r,
        similarGameId: s,
        viewId: a,
        guildId: o,
        isVerified: l,
        source: d,
    } = e;
    u.default.track(c.HAw.GAME_PROFILE_ACTION, {
        game_name: t,
        application_id: n,
        action: i,
        recipient_user_id: r,
        similar_game_id: s,
        view_id: a,
        official_guild_id: l ? o : void 0,
        guild_id: o,
        source: d,
    });
}
function I(e) {
    let {
        viewId: t,
        applicationId: n,
        suggestedGameName: i,
        suggestedGameApplicationId: r,
        feedback: s,
        submitted: a,
    } = e;
    return u.default.track(c.HAw.GAME_PROFILE_FEEDBACK, {
        view_id: t,
        application_id: n,
        suggested_game_name: i,
        suggested_game_application_id: r,
        feedback: s,
        submitted: a,
    });
}
function T(e) {
    let { gameName: t, gameId: n, action: i } = e;
    u.default.track(c.HAw.GAME_PROFILE_EMBED_ACTION, { game_name: t, application_id: n, action: i });
}
function S(e) {
    return { guildId: e?.guild?.id ?? null, isVerified: e?.guild?.features.includes(c.GuildFeatures.VERIFIED) ?? !1 };
}
