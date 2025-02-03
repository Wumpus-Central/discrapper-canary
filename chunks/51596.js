n.d(t, {
    $Z: () => T,
    Cp: () => y,
    F_: () => L,
    Se: () => w,
    tF: () => Z,
    yC: () => P
}),
    n(757143),
    n(47120);
var l = n(570140),
    i = n(493683),
    a = n(475179),
    s = n(925549),
    r = n(287734),
    o = n(212819),
    c = n(336197),
    u = n(359110),
    d = n(769654),
    _ = n(131704),
    h = n(592125),
    f = n(283595),
    g = n(944486),
    m = n(914010),
    E = n(626135),
    p = n(777754),
    I = n(823385),
    A = n(981631),
    S = n(176505);
let C = () => Promise.resolve();
C = n(346329).playApplication;
let x = Object.freeze({
        [o.xQ.USER]: o.h8.USER,
        [o.xQ.TEXT_CHANNEL]: o.h8.TEXT_CHANNEL,
        [o.xQ.VOICE_CHANNEL]: o.h8.VOICE_CHANNEL,
        [o.xQ.GUILD]: o.h8.GUILD,
        [o.xQ.APPLICATION]: o.h8.APPLICATION
    }),
    b = new RegExp('^'.concat(o.xQ.USER, '|').concat(o.xQ.TEXT_CHANNEL, '|').concat(o.xQ.VOICE_CHANNEL, '|\\').concat(o.xQ.GUILD, '|\\').concat(o.xQ.APPLICATION));
function L(e) {
    var t;
    let n;
    let [l, i] = ((n = null !== (t = x[e.charAt(0)]) && void 0 !== t ? t : null), [e.replace(b, ''), n]);
    return {
        query: l,
        queryMode: i
    };
}
function v(e, t) {
    let { results: n, queryMode: l, query: i, maxQueryLength: a } = I.Z.getProps(),
        s = m.Z.getGuildId(),
        r = g.Z.getChannelId(s),
        c = n[(0, o.gJ)(o.a8.DOWN, -1, n)],
        u = p.Z.isEmail(i),
        d = p.Z.isPhoneNumber(i),
        f = p.Z.isUserTagLike(i),
        A = null != r && (0, S.AB)(r),
        C = (e) => (null == e ? null : e.type === o.h8.IN_APP_NAVIGATION ? e.type + '_' + e.record.type : e.type),
        x = {
            current_channel_id: A ? void 0 : r,
            current_channel_static_route: A ? r : void 0,
            current_guild_id: s,
            query_mode: null != l ? l : 'GENERAL',
            query_length: i.length,
            max_query_length: a,
            is_email_like: u,
            is_phone_like: d,
            is_username_like: f,
            query: u || d || f ? null : i,
            top_result_type: C(c),
            top_result_score: null != c ? c.score : null,
            num_results_total: I.Z.getResultTotals(),
            num_results_users: I.Z.getResultTotals(o.h8.USER),
            num_results_text_channels: I.Z.getResultTotals(o.h8.TEXT_CHANNEL),
            num_results_voice_channels: I.Z.getResultTotals(o.h8.VOICE_CHANNEL),
            num_results_guilds: I.Z.getResultTotals(o.h8.GUILD),
            num_results_group_dms: I.Z.getResultTotals(o.h8.GROUP_DM)
        };
    if (null != r) {
        let e = h.Z.getChannel(r);
        x.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: l, record: i } = t;
        switch (((x.selected_type = C(t)), (x.selected_score = l), (x.selected_index = n.indexOf(t)), e)) {
            case o.h8.GUILD:
                x.selected_guild_id = i.id;
                break;
            case o.h8.TEXT_CHANNEL:
            case o.h8.VOICE_CHANNEL:
                i instanceof _.Sf && (x.selected_guild_id = null != i.guild_id ? i.guild_id : null), (x.selected_channel_id = i.id);
                break;
            case o.h8.GROUP_DM:
                x.selected_channel_id = i.id;
                break;
            case o.h8.USER:
                x.selected_user_id = i.id;
        }
    }
    E.default.track(e, x);
}
function N() {
    l.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    !(function (e) {
        let t;
        if (I.Z.isOpen()) return;
        let n = m.Z.getGuildId(),
            l = g.Z.getChannelId(n);
        if (null != l) {
            let e = h.Z.getChannel(l);
            t = null != e ? e.type : null;
        }
        E.default.track(A.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: l,
            current_channel_type: t
        });
    })(e),
        l.Z.dispatch({
            type: 'QUICKSWITCHER_SHOW',
            ...L(t)
        });
}
function y() {
    v(A.rMx.QUICKSWITCHER_CLOSED), N();
}
function P(e) {
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SEARCH',
        ...L(e)
    });
}
function Z(e) {
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: e
    });
}
function w(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    N(), v(A.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: _, record: g } = e,
        m = { page: A.ZY5.QUICK_SWITCHER };
    switch (_) {
        case o.h8.GUILD:
            (0, d.X)(g.id, { navigationReplace: !0 });
            break;
        case o.h8.TEXT_CHANNEL:
            null != (t = h.Z.getChannel(g.id)) &&
                (0, u.Kh)(t.id, {
                    state: { analyticsSource: m },
                    navigationReplace: !0
                });
            break;
        case o.h8.VOICE_CHANNEL:
            null != (t = h.Z.getChannel(g.id)) &&
                (n ? a.Z.updateChatOpen(g.id, !0) : r.default.selectVoiceChannel(g.id),
                (0, u.Kh)(t.id, {
                    state: { analyticsSource: m },
                    navigationReplace: !0
                }));
            break;
        case o.h8.USER:
            i.Z.openPrivateChannel([g.id], !1, !1, 'Quickswitcher'), s.Z.channelListScrollTo(A.ME, h.Z.getDMFromUserId(g.id));
            break;
        case o.h8.GROUP_DM:
            (0, u.Kh)(g.id, { navigationReplace: !0 }), s.Z.channelListScrollTo(A.ME, g.id);
            break;
        case o.h8.APPLICATION:
            let E = f.Z.getActiveLibraryApplication(g.id);
            C(g.id, E, {
                analyticsParams: {
                    source: A.Sbl.QUICK_SWITCHER,
                    location: A.Sbl.QUICK_SWITCHER
                }
            });
            break;
        case o.h8.LINK:
        case o.h8.IN_APP_NAVIGATION:
            (0, c.Z)(g.path, { navigationReplace: !0 });
    }
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: e
    });
}
