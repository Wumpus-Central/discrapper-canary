n.d(e, {
    $Z: () => Z,
    Cp: () => U,
    F_: () => R,
    Se: () => H,
    tF: () => O,
    yC: () => y
}),
    n(757143),
    n(47120);
var l = n(570140),
    i = n(493683),
    c = n(475179),
    a = n(925549),
    r = n(287734),
    o = n(212819),
    _ = n(336197),
    s = n(359110),
    d = n(769654),
    u = n(131704),
    h = n(592125),
    p = n(283595),
    C = n(944486),
    E = n(914010),
    I = n(626135),
    T = n(777754),
    A = n(823385),
    f = n(981631),
    g = n(176505);
let x = () => Promise.resolve();
x = n(346329).playApplication;
let N = Object.freeze({
        [o.xQ.USER]: o.h8.USER,
        [o.xQ.TEXT_CHANNEL]: o.h8.TEXT_CHANNEL,
        [o.xQ.VOICE_CHANNEL]: o.h8.VOICE_CHANNEL,
        [o.xQ.GUILD]: o.h8.GUILD,
        [o.xQ.APPLICATION]: o.h8.APPLICATION
    }),
    S = new RegExp('^'.concat(o.xQ.USER, '|').concat(o.xQ.TEXT_CHANNEL, '|').concat(o.xQ.VOICE_CHANNEL, '|\\').concat(o.xQ.GUILD, '|\\').concat(o.xQ.APPLICATION));
function R(t) {
    var e;
    let n;
    let [l, i] = ((n = null !== (e = N[t.charAt(0)]) && void 0 !== e ? e : null), [t.replace(S, ''), n]);
    return {
        query: l,
        queryMode: i
    };
}
function m(t, e) {
    let { results: n, queryMode: l, query: i, maxQueryLength: c } = A.Z.getProps(),
        a = E.Z.getGuildId(),
        r = C.Z.getChannelId(a),
        _ = n[(0, o.gJ)(o.a8.DOWN, -1, n)],
        s = T.Z.isEmail(i),
        d = T.Z.isPhoneNumber(i),
        p = T.Z.isUserTagLike(i),
        f = null != r && (0, g.AB)(r),
        x = (t) => (null == t ? null : t.type === o.h8.IN_APP_NAVIGATION ? t.type + '_' + t.record.type : t.type),
        N = {
            current_channel_id: f ? void 0 : r,
            current_channel_static_route: f ? r : void 0,
            current_guild_id: a,
            query_mode: null != l ? l : 'GENERAL',
            query_length: i.length,
            max_query_length: c,
            is_email_like: s,
            is_phone_like: d,
            is_username_like: p,
            query: s || d || p ? null : i,
            top_result_type: x(_),
            top_result_score: null != _ ? _.score : null,
            num_results_total: A.Z.getResultTotals(),
            num_results_users: A.Z.getResultTotals(o.h8.USER),
            num_results_text_channels: A.Z.getResultTotals(o.h8.TEXT_CHANNEL),
            num_results_voice_channels: A.Z.getResultTotals(o.h8.VOICE_CHANNEL),
            num_results_guilds: A.Z.getResultTotals(o.h8.GUILD),
            num_results_group_dms: A.Z.getResultTotals(o.h8.GROUP_DM)
        };
    if (null != r) {
        let t = h.Z.getChannel(r);
        N.current_channel_type = null != t ? t.type : null;
    }
    if (null != e) {
        let { type: t, score: l, record: i } = e;
        switch (((N.selected_type = x(e)), (N.selected_score = l), (N.selected_index = n.indexOf(e)), t)) {
            case o.h8.GUILD:
                N.selected_guild_id = i.id;
                break;
            case o.h8.TEXT_CHANNEL:
            case o.h8.VOICE_CHANNEL:
                i instanceof u.Sf && (N.selected_guild_id = null != i.guild_id ? i.guild_id : null), (N.selected_channel_id = i.id);
                break;
            case o.h8.GROUP_DM:
                N.selected_channel_id = i.id;
                break;
            case o.h8.USER:
                N.selected_user_id = i.id;
        }
    }
    I.default.track(t, N);
}
function L() {
    l.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function Z() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    !(function (t) {
        let e;
        if (A.Z.isOpen()) return;
        let n = E.Z.getGuildId(),
            l = C.Z.getChannelId(n);
        if (null != l) {
            let t = h.Z.getChannel(l);
            e = null != t ? t.type : null;
        }
        I.default.track(f.rMx.QUICKSWITCHER_OPENED, {
            source: t,
            current_guild_id: n,
            current_channel_id: l,
            current_channel_type: e
        });
    })(t),
        l.Z.dispatch({
            type: 'QUICKSWITCHER_SHOW',
            ...R(e)
        });
}
function U() {
    m(f.rMx.QUICKSWITCHER_CLOSED), L();
}
function y(t) {
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SEARCH',
        ...R(t)
    });
}
function O(t) {
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: t
    });
}
function H(t) {
    let e,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    L(), m(f.rMx.QUICKSWITCHER_RESULT_SELECTED, t);
    let { type: u, record: C } = t,
        E = { page: f.ZY5.QUICK_SWITCHER };
    switch (u) {
        case o.h8.GUILD:
            (0, d.X)(C.id, { navigationReplace: !0 });
            break;
        case o.h8.TEXT_CHANNEL:
            null != (e = h.Z.getChannel(C.id)) &&
                (0, s.Kh)(e.id, {
                    state: { analyticsSource: E },
                    navigationReplace: !0
                });
            break;
        case o.h8.VOICE_CHANNEL:
            null != (e = h.Z.getChannel(C.id)) &&
                (n ? c.Z.updateChatOpen(C.id, !0) : r.default.selectVoiceChannel(C.id),
                (0, s.Kh)(e.id, {
                    state: { analyticsSource: E },
                    navigationReplace: !0
                }));
            break;
        case o.h8.USER:
            i.Z.openPrivateChannel([C.id], !1, !1, 'Quickswitcher'), a.Z.channelListScrollTo(f.ME, h.Z.getDMFromUserId(C.id));
            break;
        case o.h8.GROUP_DM:
            (0, s.Kh)(C.id, { navigationReplace: !0 }), a.Z.channelListScrollTo(f.ME, C.id);
            break;
        case o.h8.APPLICATION:
            let I = p.Z.getActiveLibraryApplication(C.id);
            x(C.id, I, {
                analyticsParams: {
                    source: f.Sbl.QUICK_SWITCHER,
                    location: f.Sbl.QUICK_SWITCHER
                }
            });
            break;
        case o.h8.LINK:
        case o.h8.IN_APP_NAVIGATION:
            (0, _.Z)(C.path, { navigationReplace: !0 });
    }
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: t
    });
}
