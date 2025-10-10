n.d(t, {
    $Z: () => M,
    Cp: () => j,
    F_: () => w,
    Se: () => B,
    ZN: () => k,
    tF: () => G,
    yC: () => U,
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
    l = n(287734),
    c = n(212819),
    u = n(815372),
    d = n(336197),
    f = n(359110),
    _ = n(769654),
    p = n(722589),
    h = n(131704),
    m = n(592125),
    g = n(283595),
    E = n(944486),
    b = n(914010),
    y = n(626135),
    O = n(777754),
    v = n(823385),
    I = n(981631),
    T = n(176505);
function S(e, t, n) {
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
function A(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
let C = () => Promise.resolve();
C = n(346329).playApplication;
let N = Object.freeze({
        [c.xQ.USER]: c.h8.USER,
        [c.xQ.TEXT_CHANNEL]: c.h8.TEXT_CHANNEL,
        [c.xQ.VOICE_CHANNEL]: c.h8.VOICE_CHANNEL,
        [c.xQ.GUILD]: c.h8.GUILD,
        [c.xQ.APPLICATION]: c.h8.APPLICATION,
    }),
    R = new RegExp(
        "^"
            .concat(c.xQ.USER, "|")
            .concat(c.xQ.TEXT_CHANNEL, "|")
            .concat(c.xQ.VOICE_CHANNEL, "|\\")
            .concat(c.xQ.GUILD, "|\\")
            .concat(c.xQ.APPLICATION),
    );
function P(e) {
    var t;
    let n = null != (t = N[e.charAt(0)]) ? t : null;
    return [e.replace(R, ""), n];
}
function w(e) {
    let [t, n] = P(e);
    return {
        query: t,
        queryMode: n,
    };
}
function D(e) {
    let t;
    if (v.Z.isOpen()) return;
    let n = b.Z.getGuildId(),
        r = E.Z.getChannelId(n);
    if (null != r) {
        let e = m.Z.getChannel(r);
        t = null != e ? e.type : null;
    }
    y.default.track(I.rMx.QUICKSWITCHER_OPENED, {
        source: e,
        current_guild_id: n,
        current_channel_id: r,
        current_channel_type: t,
    });
}
function L(e, t) {
    let { results: n, queryMode: r, query: i, maxQueryLength: a } = v.Z.getProps(),
        o = b.Z.getGuildId(),
        s = E.Z.getChannelId(o),
        l = n[(0, c.gJ)(c.a8.DOWN, -1, n)],
        u = O.Z.isEmail(i),
        d = O.Z.isPhoneNumber(i),
        f = O.Z.isUserTagLike(i),
        _ = null != s && (0, T.AB)(s),
        p = (e) => (null == e ? null : e.type === c.h8.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type),
        g = {
            current_channel_id: _ ? void 0 : s,
            current_channel_static_route: _ ? s : void 0,
            current_guild_id: o,
            query_mode: null != r ? r : "GENERAL",
            query_length: i.length,
            max_query_length: a,
            is_email_like: u,
            is_phone_like: d,
            is_username_like: f,
            query: u || d || f ? null : i,
            top_result_type: p(l),
            top_result_score: null != l ? l.score : null,
            num_results_total: v.Z.getResultTotals(),
            num_results_users: v.Z.getResultTotals(c.h8.USER),
            num_results_text_channels: v.Z.getResultTotals(c.h8.TEXT_CHANNEL),
            num_results_voice_channels: v.Z.getResultTotals(c.h8.VOICE_CHANNEL),
            num_results_guilds: v.Z.getResultTotals(c.h8.GUILD),
            num_results_group_dms: v.Z.getResultTotals(c.h8.GROUP_DM),
        };
    if (null != s) {
        let e = m.Z.getChannel(s);
        g.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: r, record: i } = t;
        switch (((g.selected_type = p(t)), (g.selected_score = r), (g.selected_index = n.indexOf(t)), e)) {
            case c.h8.GUILD:
                g.selected_guild_id = i.id;
                break;
            case c.h8.TEXT_CHANNEL:
            case c.h8.VOICE_CHANNEL:
                i instanceof h.Sf && (g.selected_guild_id = null != i.guild_id ? i.guild_id : null),
                    (g.selected_channel_id = i.id);
                break;
            case c.h8.GROUP_DM:
                g.selected_channel_id = i.id;
                break;
            case c.h8.USER:
                g.selected_user_id = i.id;
        }
    }
    y.default.track(e, g);
}
function x() {
    i.Z.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    D(e), i.Z.dispatch(A({ type: "QUICKSWITCHER_SHOW" }, w(t)));
}
function j() {
    L(I.rMx.QUICKSWITCHER_CLOSED), x();
}
function k() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND";
    v.Z.isOpen() ? j() : M(e);
}
function U(e) {
    i.Z.dispatch(A({ type: "QUICKSWITCHER_SEARCH" }, w(e)));
}
function G(e) {
    i.Z.dispatch({
        type: "QUICKSWITCHER_SELECT",
        selectedIndex: e,
    });
}
function B(e) {
    let t,
        h = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    x(), (0, r.pTH)(), L(I.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: E, record: b } = e,
        y = { page: I.ZY5.QUICK_SWITCHER };
    switch (E) {
        case c.h8.GUILD:
            (0, _.X)(b.id, { navigationReplace: !0 });
            break;
        case c.h8.TEXT_CHANNEL:
            null != (t = m.Z.getChannel(b.id)) &&
                (0, f.Kh)(t.id, {
                    state: { analyticsSource: y },
                    navigationReplace: !0,
                });
            break;
        case c.h8.VOICE_CHANNEL:
            null != (t = m.Z.getChannel(b.id)) &&
                (h ? o.Z.updateChatOpen(b.id, !0) : l.default.selectVoiceChannel(b.id),
                (0, f.Kh)(t.id, {
                    state: { analyticsSource: y },
                    navigationReplace: !0,
                }));
            break;
        case c.h8.USER:
            a.Z.openPrivateChannel({
                recipientIds: [b.id],
                location: "Quickswitcher",
            }),
                s.Z.channelListScrollTo(I.ME, m.Z.getDMFromUserId(b.id));
            break;
        case c.h8.GROUP_DM:
            (0, f.Kh)(b.id, { navigationReplace: !0 }), s.Z.channelListScrollTo(I.ME, b.id);
            break;
        case c.h8.APPLICATION:
            let O = g.Z.getActiveLibraryApplication(b.id);
            C(b.id, O, {
                analyticsParams: {
                    source: I.Sbl.QUICK_SWITCHER,
                    location: I.Sbl.QUICK_SWITCHER,
                },
            });
            break;
        case c.h8.LINK:
            (0, d.Z)(b.path, { navigationReplace: !0 });
            break;
        case c.h8.IN_APP_NAVIGATION:
            if (e.record.type === u.Ky.SETTINGS) {
                let t = (0, p.default)(e.record.path);
                if (null != t) {
                    let { openUserSettingsFromParsedUrl: e } = n(518596);
                    e({
                        match: t,
                        urlOrigin: "quickswitcher",
                    });
                }
            } else (0, d.Z)(b.path, { navigationReplace: !0 });
    }
    i.Z.dispatch({
        type: "QUICKSWITCHER_SWITCH_TO",
        result: e,
    });
}
