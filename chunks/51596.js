n.d(t, {
    $Z: () => P,
    Cp: () => D,
    F_: () => m,
    Se: () => O,
    tF: () => R,
    yC: () => U
}),
    n(757143),
    n(47120);
var l = n(570140),
    i = n(493683),
    a = n(475179),
    r = n(925549),
    s = n(287734),
    o = n(212819),
    u = n(336197),
    d = n(359110),
    c = n(769654),
    E = n(131704),
    C = n(592125),
    _ = n(283595),
    h = n(944486),
    I = n(914010),
    g = n(626135),
    T = n(777754),
    S = n(823385),
    A = n(981631),
    f = n(176505);
let N = () => Promise.resolve();
N = n(346329).playApplication;
let p = Object.freeze({
        [o.xQ.USER]: o.h8.USER,
        [o.xQ.TEXT_CHANNEL]: o.h8.TEXT_CHANNEL,
        [o.xQ.VOICE_CHANNEL]: o.h8.VOICE_CHANNEL,
        [o.xQ.GUILD]: o.h8.GUILD,
        [o.xQ.APPLICATION]: o.h8.APPLICATION
    }),
    L = new RegExp('^'.concat(o.xQ.USER, '|').concat(o.xQ.TEXT_CHANNEL, '|').concat(o.xQ.VOICE_CHANNEL, '|\\').concat(o.xQ.GUILD, '|\\').concat(o.xQ.APPLICATION));
function m(e) {
    var t;
    let n;
    let [l, i] = ((n = null !== (t = p[e.charAt(0)]) && void 0 !== t ? t : null), [e.replace(L, ''), n]);
    return {
        query: l,
        queryMode: i
    };
}
function v(e, t) {
    let { results: n, queryMode: l, query: i, maxQueryLength: a } = S.Z.getProps(),
        r = I.Z.getGuildId(),
        s = h.Z.getChannelId(r),
        u = n[(0, o.gJ)(o.a8.DOWN, -1, n)],
        d = T.Z.isEmail(i),
        c = T.Z.isPhoneNumber(i),
        _ = T.Z.isUserTagLike(i),
        A = null != s && (0, f.AB)(s),
        N = (e) => (null == e ? null : e.type === o.h8.IN_APP_NAVIGATION ? e.type + '_' + e.record.type : e.type),
        p = {
            current_channel_id: A ? void 0 : s,
            current_channel_static_route: A ? s : void 0,
            current_guild_id: r,
            query_mode: null != l ? l : 'GENERAL',
            query_length: i.length,
            max_query_length: a,
            is_email_like: d,
            is_phone_like: c,
            is_username_like: _,
            query: d || c || _ ? null : i,
            top_result_type: N(u),
            top_result_score: null != u ? u.score : null,
            num_results_total: S.Z.getResultTotals(),
            num_results_users: S.Z.getResultTotals(o.h8.USER),
            num_results_text_channels: S.Z.getResultTotals(o.h8.TEXT_CHANNEL),
            num_results_voice_channels: S.Z.getResultTotals(o.h8.VOICE_CHANNEL),
            num_results_guilds: S.Z.getResultTotals(o.h8.GUILD),
            num_results_group_dms: S.Z.getResultTotals(o.h8.GROUP_DM)
        };
    if (null != s) {
        let e = C.Z.getChannel(s);
        p.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: l, record: i } = t;
        switch (((p.selected_type = N(t)), (p.selected_score = l), (p.selected_index = n.indexOf(t)), e)) {
            case o.h8.GUILD:
                p.selected_guild_id = i.id;
                break;
            case o.h8.TEXT_CHANNEL:
            case o.h8.VOICE_CHANNEL:
                i instanceof E.Sf && (p.selected_guild_id = null != i.guild_id ? i.guild_id : null), (p.selected_channel_id = i.id);
                break;
            case o.h8.GROUP_DM:
                p.selected_channel_id = i.id;
                break;
            case o.h8.USER:
                p.selected_user_id = i.id;
        }
    }
    g.default.track(e, p);
}
function Z() {
    l.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    !(function (e) {
        let t;
        if (S.Z.isOpen()) return;
        let n = I.Z.getGuildId(),
            l = h.Z.getChannelId(n);
        if (null != l) {
            let e = C.Z.getChannel(l);
            t = null != e ? e.type : null;
        }
        g.default.track(A.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: l,
            current_channel_type: t
        });
    })(e),
        l.Z.dispatch({
            type: 'QUICKSWITCHER_SHOW',
            ...m(t)
        });
}
function D() {
    v(A.rMx.QUICKSWITCHER_CLOSED), Z();
}
function U(e) {
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SEARCH',
        ...m(e)
    });
}
function R(e) {
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: e
    });
}
function O(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    Z(), v(A.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: E, record: h } = e,
        I = { page: A.ZY5.QUICK_SWITCHER };
    switch (E) {
        case o.h8.GUILD:
            (0, c.X)(h.id, { navigationReplace: !0 });
            break;
        case o.h8.TEXT_CHANNEL:
            null != (t = C.Z.getChannel(h.id)) &&
                (0, d.Kh)(t.id, {
                    state: { analyticsSource: I },
                    navigationReplace: !0
                });
            break;
        case o.h8.VOICE_CHANNEL:
            null != (t = C.Z.getChannel(h.id)) &&
                (n ? a.Z.updateChatOpen(h.id, !0) : s.default.selectVoiceChannel(h.id),
                (0, d.Kh)(t.id, {
                    state: { analyticsSource: I },
                    navigationReplace: !0
                }));
            break;
        case o.h8.USER:
            i.Z.openPrivateChannel([h.id], !1, !1, 'Quickswitcher'), r.Z.channelListScrollTo(A.ME, C.Z.getDMFromUserId(h.id));
            break;
        case o.h8.GROUP_DM:
            (0, d.Kh)(h.id, { navigationReplace: !0 }), r.Z.channelListScrollTo(A.ME, h.id);
            break;
        case o.h8.APPLICATION:
            let g = _.Z.getActiveLibraryApplication(h.id);
            N(h.id, g, {
                analyticsParams: {
                    source: A.Sbl.QUICK_SWITCHER,
                    location: A.Sbl.QUICK_SWITCHER
                }
            });
            break;
        case o.h8.LINK:
        case o.h8.IN_APP_NAVIGATION:
            (0, u.Z)(h.path, { navigationReplace: !0 });
    }
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: e
    });
}
