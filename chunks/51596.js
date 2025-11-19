n.d(t, {
    $Z: () => k,
    Cp: () => U,
    F_: () => L,
    Se: () => F,
    ZN: () => G,
    tF: () => Z,
    yC: () => B,
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(388685);
var r = n(481060),
    i = n(570140),
    a = n(493683),
    o = n(475179),
    s = n(925549),
    l = n(37234),
    c = n(287734),
    u = n(212819),
    d = n(815372),
    f = n(336197),
    _ = n(359110),
    p = n(769654),
    h = n(722589),
    m = n(131704),
    g = n(592125),
    E = n(283595),
    b = n(944486),
    y = n(914010),
    O = n(626135),
    v = n(51144),
    I = n(777754),
    T = n(823385),
    S = n(981631),
    A = n(176505);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            });
    }
    return e;
}
let R = () => Promise.resolve();
R = n(346329).playApplication;
let P = Object.freeze({
        [u.xQ.USER]: u.h8.USER,
        [u.xQ.TEXT_CHANNEL]: u.h8.TEXT_CHANNEL,
        [u.xQ.VOICE_CHANNEL]: u.h8.VOICE_CHANNEL,
        [u.xQ.GUILD]: u.h8.GUILD,
        [u.xQ.APPLICATION]: u.h8.APPLICATION,
    }),
    D = new RegExp(
        "^"
            .concat(u.xQ.USER, "|")
            .concat(u.xQ.TEXT_CHANNEL, "|")
            .concat(u.xQ.VOICE_CHANNEL, "|\\")
            .concat(u.xQ.GUILD, "|\\")
            .concat(u.xQ.APPLICATION),
    );
function w(e) {
    var t;
    let n = null != (t = P[e.charAt(0)]) ? t : null;
    return [e.replace(D, ""), n];
}
function L(e) {
    let [t, n] = w(e);
    return {
        query: t,
        queryMode: n,
    };
}
function x(e) {
    let t;
    if (T.Z.isOpen()) return;
    let n = y.Z.getGuildId(),
        r = b.Z.getChannelId(n);
    if (null != r) {
        let e = g.Z.getChannel(r);
        t = null != e ? e.type : null;
    }
    O.default.track(S.rMx.QUICKSWITCHER_OPENED, {
        source: e,
        current_guild_id: n,
        current_channel_id: r,
        current_channel_type: t,
    });
}
function M(e, t) {
    let { results: n, queryMode: r, query: i, maxQueryLength: a } = T.Z.getProps(),
        o = y.Z.getGuildId(),
        s = b.Z.getChannelId(o),
        l = n[(0, u.gJ)(u.a8.DOWN, -1, n)],
        c = I.Z.isEmail(i),
        d = I.Z.isPhoneNumber(i),
        f = I.Z.isUserTagLike(i),
        _ = null != s && (0, A.AB)(s),
        p = (e) => (null == e ? null : e.type === u.h8.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type),
        h = {
            current_channel_id: _ ? void 0 : s,
            current_channel_static_route: _ ? s : void 0,
            current_guild_id: o,
            query_mode: null != r ? r : "GENERAL",
            query_length: i.length,
            max_query_length: a,
            is_email_like: c,
            is_phone_like: d,
            is_username_like: f,
            query: c || d || f ? null : i,
            top_result_type: p(l),
            top_result_score: null != l ? l.score : null,
            num_results_total: T.Z.getResultTotals(),
            num_results_users: T.Z.getResultTotals(u.h8.USER),
            num_results_text_channels: T.Z.getResultTotals(u.h8.TEXT_CHANNEL),
            num_results_voice_channels: T.Z.getResultTotals(u.h8.VOICE_CHANNEL),
            num_results_guilds: T.Z.getResultTotals(u.h8.GUILD),
            num_results_group_dms: T.Z.getResultTotals(u.h8.GROUP_DM),
        };
    if (null != s) {
        let e = g.Z.getChannel(s);
        h.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: r, record: i } = t;
        switch (((h.selected_type = p(t)), (h.selected_score = r), (h.selected_index = n.indexOf(t)), e)) {
            case u.h8.GUILD:
                h.selected_guild_id = i.id;
                break;
            case u.h8.TEXT_CHANNEL:
            case u.h8.VOICE_CHANNEL:
                i instanceof m.Sf && (h.selected_guild_id = null != i.guild_id ? i.guild_id : null),
                    (h.selected_channel_id = i.id);
                break;
            case u.h8.GROUP_DM:
                h.selected_channel_id = i.id;
                break;
            case u.h8.USER:
                h.selected_user_id = i.id;
        }
    }
    O.default.track(e, h);
}
function j() {
    i.Z.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
function k() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    x(e), i.Z.dispatch(N({ type: "QUICKSWITCHER_SHOW" }, L(t)));
}
function U() {
    M(S.rMx.QUICKSWITCHER_CLOSED), j();
}
function G() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND";
    T.Z.isOpen() ? U() : k(e);
}
function B(e) {
    i.Z.dispatch(N({ type: "QUICKSWITCHER_SEARCH" }, L(e)));
}
function Z(e) {
    i.Z.dispatch({
        type: "QUICKSWITCHER_SELECT",
        selectedIndex: e,
    });
}
function F(e) {
    let t,
        m = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    j(), (0, r.pTH)(), M(S.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: b, record: y } = e,
        O = { page: S.ZY5.QUICK_SWITCHER };
    switch (b) {
        case u.h8.GUILD:
            (0, p.X)(y.id, { navigationReplace: !0 });
            break;
        case u.h8.TEXT_CHANNEL:
            null != (t = g.Z.getChannel(y.id)) &&
                (0, _.Kh)(t.id, {
                    state: { analyticsSource: O },
                    navigationReplace: !0,
                });
            break;
        case u.h8.VOICE_CHANNEL:
            null != (t = g.Z.getChannel(y.id)) &&
                (m ? o.Z.updateChatOpen(y.id, !0) : c.default.selectVoiceChannel(y.id),
                (0, _.Kh)(t.id, {
                    state: { analyticsSource: O },
                    navigationReplace: !0,
                }));
            break;
        case u.h8.USER:
            a.Z.openPrivateChannel({
                recipientIds: [y.id],
                location: "Quickswitcher",
            }),
                s.Z.channelListScrollTo(S.ME, g.Z.getDMFromUserId(y.id));
            break;
        case u.h8.GROUP_DM:
            (0, _.Kh)(y.id, { navigationReplace: !0 }), s.Z.channelListScrollTo(S.ME, y.id);
            break;
        case u.h8.APPLICATION:
            let I = E.Z.getActiveLibraryApplication(y.id);
            R(y.id, I, {
                analyticsParams: {
                    source: S.Sbl.QUICK_SWITCHER,
                    location: S.Sbl.QUICK_SWITCHER,
                },
            });
            break;
        case u.h8.LINK:
            (0, f.Z)(y.path, { navigationReplace: !0 });
            break;
        case u.h8.IN_APP_NAVIGATION:
            if (e.record.type === d.Ky.SETTINGS) {
                let t = (0, h.default)(e.record.path);
                if (null != t) {
                    let { openUserSettingsFromParsedUrl: e } = n(518596);
                    e({
                        match: t,
                        urlOrigin: "quickswitcher",
                    });
                }
            } else if (e.record.type === d.Ky.PLAYGROUND) {
                if (!(0, v.vP)()) return;
                {
                    var T;
                    let { PlaygroundStore: t } = n(156142),
                        r = null != (T = e.record.collectionId) ? T : null;
                    t.setState({
                        selectedCollection: r,
                        selectedStory: null,
                    }),
                        (0, l.jN)(S.S9g.COMPONENT_PLAYGROUND);
                }
            } else (0, f.Z)(y.path, { navigationReplace: !0 });
    }
    i.Z.dispatch({
        type: "QUICKSWITCHER_SWITCH_TO",
        result: e,
    });
}
