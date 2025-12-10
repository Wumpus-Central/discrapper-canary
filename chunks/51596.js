n.d(t, {
    $Z: () => Z,
    Cp: () => B,
    F_: () => M,
    Se: () => Y,
    ZN: () => F,
    tF: () => H,
    yC: () => V,
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
    u = n(100527),
    d = n(212819),
    f = n(815372),
    p = n(335131),
    _ = n(336197),
    m = n(359110),
    h = n(769654),
    g = n(722589),
    E = n(131704),
    b = n(592125),
    y = n(283595),
    O = n(944486),
    v = n(914010),
    S = n(626135),
    I = n(51144),
    T = n(777754),
    C = n(823385),
    A = n(981631),
    N = n(176505),
    P = n(215023);
function R(e, t, n) {
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
function D(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
let w = () => Promise.resolve();
w = n(346329).playApplication;
let x = Object.freeze({
        [d.xQ.USER]: d.h8.USER,
        [d.xQ.TEXT_CHANNEL]: d.h8.TEXT_CHANNEL,
        [d.xQ.VOICE_CHANNEL]: d.h8.VOICE_CHANNEL,
        [d.xQ.GUILD]: d.h8.GUILD,
        [d.xQ.APPLICATION]: d.h8.APPLICATION,
    }),
    L = new RegExp(
        "^"
            .concat(d.xQ.USER, "|")
            .concat(d.xQ.TEXT_CHANNEL, "|")
            .concat(d.xQ.VOICE_CHANNEL, "|\\")
            .concat(d.xQ.GUILD, "|\\")
            .concat(d.xQ.APPLICATION),
    );
function j(e) {
    var t;
    let n = null != (t = x[e.charAt(0)]) ? t : null;
    return [e.replace(L, ""), n];
}
function M(e) {
    let [t, n] = j(e);
    return {
        query: t,
        queryMode: n,
    };
}
function k(e) {
    let t;
    if (C.Z.isOpen()) return;
    let n = v.Z.getGuildId(),
        r = O.Z.getChannelId(n);
    if (null != r) {
        let e = b.Z.getChannel(r);
        t = null != e ? e.type : null;
    }
    S.default.track(A.rMx.QUICKSWITCHER_OPENED, {
        source: e,
        current_guild_id: n,
        current_channel_id: r,
        current_channel_type: t,
    });
}
function U(e, t) {
    let { results: n, queryMode: r, query: i, maxQueryLength: a } = C.Z.getProps(),
        o = v.Z.getGuildId(),
        s = O.Z.getChannelId(o),
        l = n[(0, d.gJ)(d.a8.DOWN, -1, n)],
        c = T.Z.isEmail(i),
        u = T.Z.isPhoneNumber(i),
        f = T.Z.isUserTagLike(i),
        p = null != s && (0, N.AB)(s),
        _ = (e) => (null == e ? null : e.type === d.h8.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type),
        m = {
            current_channel_id: p ? void 0 : s,
            current_channel_static_route: p ? s : void 0,
            current_guild_id: o,
            query_mode: null != r ? r : "GENERAL",
            query_length: i.length,
            max_query_length: a,
            is_email_like: c,
            is_phone_like: u,
            is_username_like: f,
            query: c || u || f ? null : i,
            top_result_type: _(l),
            top_result_score: null != l ? l.score : null,
            num_results_total: C.Z.getResultTotals(),
            num_results_users: C.Z.getResultTotals(d.h8.USER),
            num_results_text_channels: C.Z.getResultTotals(d.h8.TEXT_CHANNEL),
            num_results_voice_channels: C.Z.getResultTotals(d.h8.VOICE_CHANNEL),
            num_results_guilds: C.Z.getResultTotals(d.h8.GUILD),
            num_results_group_dms: C.Z.getResultTotals(d.h8.GROUP_DM),
        };
    if (null != s) {
        let e = b.Z.getChannel(s);
        m.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: r, record: i } = t;
        switch (((m.selected_type = _(t)), (m.selected_score = r), (m.selected_index = n.indexOf(t)), e)) {
            case d.h8.GUILD:
                m.selected_guild_id = i.id;
                break;
            case d.h8.TEXT_CHANNEL:
            case d.h8.VOICE_CHANNEL:
                i instanceof E.Sf && (m.selected_guild_id = null != i.guild_id ? i.guild_id : null),
                    (m.selected_channel_id = i.id);
                break;
            case d.h8.GROUP_DM:
                m.selected_channel_id = i.id;
                break;
            case d.h8.USER:
                m.selected_user_id = i.id;
        }
    }
    S.default.track(e, m);
}
function G() {
    i.Z.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
function Z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    k(e), i.Z.dispatch(D({ type: "QUICKSWITCHER_SHOW" }, M(t)));
}
function B() {
    U(A.rMx.QUICKSWITCHER_CLOSED), G();
}
function F() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND";
    C.Z.isOpen() ? B() : Z(e);
}
function V(e) {
    i.Z.dispatch(D({ type: "QUICKSWITCHER_SEARCH" }, M(e)));
}
function H(e) {
    i.Z.dispatch({
        type: "QUICKSWITCHER_SELECT",
        selectedIndex: e,
    });
}
function Y(e) {
    let t,
        E = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    G(), (0, r.pTH)(), U(A.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: O, record: v } = e,
        S = { page: A.ZY5.QUICK_SWITCHER };
    switch (O) {
        case d.h8.GUILD:
            (0, h.X)(v.id, { navigationReplace: !0 });
            break;
        case d.h8.TEXT_CHANNEL:
            null != (t = b.Z.getChannel(v.id)) &&
                (0, m.Kh)(t.id, {
                    state: { analyticsSource: S },
                    navigationReplace: !0,
                });
            break;
        case d.h8.VOICE_CHANNEL:
            null != (t = b.Z.getChannel(v.id)) &&
                (E ? o.Z.updateChatOpen(v.id, !0) : c.default.selectVoiceChannel(v.id),
                (0, m.Kh)(t.id, {
                    state: { analyticsSource: S },
                    navigationReplace: !0,
                }));
            break;
        case d.h8.USER:
            a.Z.openPrivateChannel({
                recipientIds: [v.id],
                location: "Quickswitcher",
            }),
                s.Z.channelListScrollTo(A.ME, b.Z.getDMFromUserId(v.id));
            break;
        case d.h8.GROUP_DM:
            (0, m.Kh)(v.id, { navigationReplace: !0 }), s.Z.channelListScrollTo(A.ME, v.id);
            break;
        case d.h8.APPLICATION:
            let T = y.Z.getActiveLibraryApplication(v.id);
            w(v.id, T, {
                analyticsParams: {
                    source: A.Sbl.QUICK_SWITCHER,
                    location: A.Sbl.QUICK_SWITCHER,
                },
            });
            break;
        case d.h8.LINK:
            (0, _.Z)(v.path, { navigationReplace: !0 });
            break;
        case d.h8.IN_APP_NAVIGATION:
            if (e.record.type === f.Ky.SETTINGS) {
                let t = (0, g.default)(e.record.path);
                if (null != t) {
                    let { openUserSettingsFromParsedUrl: e } = n(518596);
                    e({
                        match: t,
                        urlOrigin: "quickswitcher",
                    });
                }
            } else if (e.record.type === f.Ky.PLAYGROUND) {
                if (!(0, I.vP)()) return;
                {
                    var C;
                    let { PlaygroundStore: t } = n(156142),
                        r = null != (C = e.record.collectionId) ? C : null;
                    t.setState({
                        selectedCollection: r,
                        selectedStory: null,
                    }),
                        (0, l.jN)(A.S9g.COMPONENT_PLAYGROUND);
                }
            } else
                e.record.type === f.Ky.SHOP_ORBS_TAB
                    ? (0, p.mK)({
                          tab: P.AW.ORBS,
                          analyticsLocations: [u.Z.QUICK_SWITCHER],
                          analyticsSource: u.Z.QUICK_SWITCHER,
                      })
                    : (0, _.Z)(v.path, { navigationReplace: !0 });
    }
    i.Z.dispatch({
        type: "QUICKSWITCHER_SWITCH_TO",
        result: e,
    });
}
