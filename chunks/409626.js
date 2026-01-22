n.d(t, {
    HV: () => u,
    K6: () => h,
    Ob: () => c,
    Tn: () => _,
    V_: () => p,
    Ws: () => l,
    rw: () => f,
    u9: () => d,
});
var r = n(835245),
    i = n(99753),
    a = n(954571),
    s = n(652215),
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
            e
        );
    })({}),
    c = (function (e) {
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
            (e.GuildProfile = "guild_profile"),
            (e.MiniGameProfile = "mini_game_profile"),
            (e.GameMention = "game_mention"),
            (e.GameSheet = "game_sheet"),
            e
        );
    })({}),
    u = (function (e) {
        return (e.FullProfile = "full_profile"), (e.MiniProfile = "mini_profile"), e;
    })({});
let d = () => (0, r.A)(),
    f = (e) => {
        let { viewId: t, source: n, gameName: r, applicationId: l, authorId: c, profileType: u } = e;
        return (
            a.default.track(s.HAw.GAME_PROFILE_OPEN, {
                view_id: t,
                source: n,
                game_name: r,
                application_id: l,
                author_id: c,
                request_id: i.A.getFeedRequestId(o.X1.GLOBAL_FEED),
                profile_type: u,
            }),
            t
        );
    },
    p = (e) => {
        let {
            viewId: t,
            gameName: n,
            applicationId: r,
            playedFriendIds: l,
            playedFriendsData: c,
            similarGames: u,
            officialGuildId: d,
        } = e;
        a.default.track(s.HAw.GAME_PROFILE_CLOSE, {
            view_id: t,
            game_name: n,
            application_id: r,
            played_friend_ids: l,
            played_friends_data: c,
            similar_games: u,
            request_id: i.A.getFeedRequestId(o.X1.GLOBAL_FEED),
            official_guild_id: d,
        });
    },
    _ = (e) => {
        let {
            gameName: t,
            applicationId: n,
            action: r,
            recipientUserId: i,
            similarGameId: o,
            viewId: l,
            officialGuildId: c,
        } = e;
        a.default.track(s.HAw.GAME_PROFILE_ACTION, {
            game_name: t,
            application_id: n,
            action: r,
            recipient_user_id: i,
            similar_game_id: o,
            view_id: l,
            official_guild_id: c,
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
        return a.default.track(s.HAw.GAME_PROFILE_FEEDBACK, {
            view_id: t,
            application_id: n,
            suggested_game_name: r,
            suggested_game_application_id: i,
            feedback: o,
            submitted: l,
        });
    };
