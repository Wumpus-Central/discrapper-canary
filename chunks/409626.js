"use strict";
n.d(t, { HV: () => c, K6: () => h, Ob: () => u, Tn: () => p, V_: () => f, Ws: () => l, rw: () => _, u9: () => d });
var r = n(835245),
    i = n(99753),
    s = n(954571),
    a = n(652215),
    o = n(424994),
    l = (function (e) {
        return (
            (e[(e.FollowGame = 0)] = "FollowGame"),
            (e[(e.UnfollowGame = 1)] = "UnfollowGame"),
            (e[(e.ClickMessageUser = 2)] = "ClickMessageUser"),
            (e[(e.SendMessageUser = 3)] = "SendMessageUser"),
            (e[(e.JoinVC = 4)] = "JoinVC"),
            (e[(e.WatchStream = 5)] = "WatchStream"),
            (e[(e.ClickSimilarGame = 6)] = "ClickSimilarGame"),
            (e[(e.WebsiteLink = 7)] = "WebsiteLink"),
            (e[(e.XLink = 8)] = "XLink"),
            (e[(e.YouTubeLink = 9)] = "YouTubeLink"),
            (e[(e.ShowMore = 10)] = "ShowMore"),
            (e[(e.ShowLess = 11)] = "ShowLess"),
            (e[(e.JoinOfficialServer = 12)] = "JoinOfficialServer"),
            (e[(e.ClickImage = 13)] = "ClickImage"),
            (e[(e.GameShop = 14)] = "GameShop"),
            (e[(e.LinkAccount = 15)] = "LinkAccount"),
            (e[(e.ClaimGame = 16)] = "ClaimGame"),
            (e[(e.FacebookLink = 17)] = "FacebookLink"),
            (e[(e.InstagramLink = 18)] = "InstagramLink"),
            (e[(e.BlueskyLink = 19)] = "BlueskyLink"),
            (e[(e.RedditLink = 20)] = "RedditLink"),
            (e[(e.TwitchLink = 21)] = "TwitchLink"),
            (e[(e.SteamStoreLink = 22)] = "SteamStoreLink"),
            (e[(e.EpicStoreLink = 23)] = "EpicStoreLink"),
            (e[(e.RobloxStoreLink = 24)] = "RobloxStoreLink"),
            (e[(e.BattlenetStoreLink = 25)] = "BattlenetStoreLink"),
            (e[(e.RiotStoreLink = 26)] = "RiotStoreLink"),
            (e[(e.MinecraftStoreLink = 27)] = "MinecraftStoreLink"),
            (e[(e.DiscordCollectiblesShop = 28)] = "DiscordCollectiblesShop"),
            (e[(e.DiscordCollectiblesShopItem = 29)] = "DiscordCollectiblesShopItem"),
            (e[(e.GameShopItem = 30)] = "GameShopItem"),
            (e[(e.SteamReviews = 31)] = "SteamReviews"),
            (e[(e.OpenCriticReviews = 32)] = "OpenCriticReviews"),
            (e[(e.Announcements = 33)] = "Announcements"),
            (e[(e.AnnouncementsItem = 34)] = "AnnouncementsItem"),
            (e[(e.CloudPlay = 35)] = "CloudPlay"),
            (e[(e.ClickTrailer = 36)] = "ClickTrailer"),
            (e[(e.Feedback = 37)] = "Feedback"),
            e
        );
    })({}),
    u = (function (e) {
        return (
            (e.ActivityCard = "activity_card"),
            (e.ActivityCardContextMenu = "activity_card_context_menu"),
            (e.UserProfile = "user_profile"),
            (e.UserProfileCardContextMenu = "user_profile_card_context_menu"),
            (e.SimilarGames = "similar_games"),
            (e.DevTools = "dev_tools"),
            (e.Embed = "embed"),
            (e.RtcPanel = "rtc_panel"),
            (e.FriendsActivityFeed = "friends_activity_feed"),
            (e.MiniGameProfile = "mini_game_profile"),
            (e.GameMention = "game_mention"),
            (e.GameSheet = "game_sheet"),
            (e.QuestBar = "quest_bar"),
            (e.QuestHome = "quest_home_desktop"),
            (e.QuestActivityPanel = "quest_activity_panel"),
            (e.QuestEmbed = "quest_embed"),
            (e.QuestLiveStream = "quest_live_stream"),
            (e.ClipEmbed = "clip_embed"),
            (e.AnnouncementChannelReturn = "announcement_channel_return"),
            (e.CallTile = "call_tile"),
            e
        );
    })({}),
    c = (function (e) {
        return (e.FullProfile = "full_profile"), (e.MiniProfile = "mini_profile"), e;
    })({});
let d = () => (0, r.A)(),
    _ = (e) => {
        let { viewId: t, source: n, gameName: r, applicationId: l, authorId: u, profileType: c } = e;
        return (
            s.default.track(a.HAw.GAME_PROFILE_OPEN, {
                view_id: t,
                source: n,
                game_name: r,
                application_id: l,
                author_id: u,
                request_id: i.A.getFeedRequestId(o.X1.GLOBAL_FEED),
                profile_type: c,
            }),
            t
        );
    },
    f = (e) => {
        let {
            viewId: t,
            gameName: n,
            applicationId: r,
            playedFriendIds: l,
            playedFriendsData: u,
            similarGames: c,
            officialGuildId: d,
        } = e;
        s.default.track(a.HAw.GAME_PROFILE_CLOSE, {
            view_id: t,
            game_name: n,
            application_id: r,
            played_friend_ids: l,
            played_friends_data: u,
            similar_games: c,
            request_id: i.A.getFeedRequestId(o.X1.GLOBAL_FEED),
            official_guild_id: d,
        });
    },
    p = (e) => {
        let {
            gameName: t,
            applicationId: n,
            action: r,
            recipientUserId: i,
            similarGameId: o,
            viewId: l,
            officialGuildId: u,
            source: c,
        } = e;
        s.default.track(a.HAw.GAME_PROFILE_ACTION, {
            game_name: t,
            application_id: n,
            action: r,
            recipient_user_id: i,
            similar_game_id: o,
            view_id: l,
            official_guild_id: u,
            source: c,
        });
    },
    h = (e) => {
        let {
            viewId: t,
            applicationId: n,
            suggestedGameName: r,
            suggestedGameApplicationId: i,
            feedback: o,
            submitted: l,
        } = e;
        return s.default.track(a.HAw.GAME_PROFILE_FEEDBACK, {
            view_id: t,
            application_id: n,
            suggested_game_name: r,
            suggested_game_application_id: i,
            feedback: o,
            submitted: l,
        });
    };
