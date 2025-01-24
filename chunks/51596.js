t.d(n, {
    $Z: function () {
        return U;
    },
    Cp: function () {
        return O;
    },
    F_: function () {
        return P;
    },
    Se: function () {
        return G;
    },
    tF: function () {
        return v;
    },
    yC: function () {
        return Z;
    }
}),
    t(757143),
    t(47120);
var l = t(570140),
    i = t(493683),
    r = t(475179),
    a = t(925549),
    u = t(287734),
    o = t(212819),
    E = t(336197),
    d = t(359110),
    _ = t(769654),
    c = t(131704),
    s = t(592125),
    C = t(283595),
    T = t(944486),
    I = t(914010),
    h = t(626135);
if (12633 == t.j) var A = t(777754);
var S = t(823385),
    L = t(981631),
    f = t(176505);
let N = () => Promise.resolve();
N = t(346329).playApplication;
let g = Object.freeze({
        [o.xQ.USER]: o.h8.USER,
        [o.xQ.TEXT_CHANNEL]: o.h8.TEXT_CHANNEL,
        [o.xQ.VOICE_CHANNEL]: o.h8.VOICE_CHANNEL,
        [o.xQ.GUILD]: o.h8.GUILD,
        [o.xQ.APPLICATION]: o.h8.APPLICATION
    }),
    p = new RegExp('^'.concat(o.xQ.USER, '|').concat(o.xQ.TEXT_CHANNEL, '|').concat(o.xQ.VOICE_CHANNEL, '|\\').concat(o.xQ.GUILD, '|\\').concat(o.xQ.APPLICATION));
function P(e) {
    var n, t;
    let l;
    let [i, r] = ((l = null !== (t = g[(n = e).charAt(0)]) && void 0 !== t ? t : null), [n.replace(p, ''), l]);
    return {
        query: i,
        queryMode: r
    };
}
function R(e, n) {
    let { results: t, queryMode: l, query: i, maxQueryLength: r } = S.Z.getProps(),
        a = I.Z.getGuildId(),
        u = T.Z.getChannelId(a),
        E = t[(0, o.gJ)(o.a8.DOWN, -1, t)],
        d = A.Z.isEmail(i),
        _ = A.Z.isPhoneNumber(i),
        C = A.Z.isUserTagLike(i),
        L = null != u && (0, f.AB)(u),
        N = (e) => (null == e ? null : e.type === o.h8.IN_APP_NAVIGATION ? e.type + '_' + e.record.type : e.type),
        g = {
            current_channel_id: L ? void 0 : u,
            current_channel_static_route: L ? u : void 0,
            current_guild_id: a,
            query_mode: null != l ? l : 'GENERAL',
            query_length: i.length,
            max_query_length: r,
            is_email_like: d,
            is_phone_like: _,
            is_username_like: C,
            query: d || _ || C ? null : i,
            top_result_type: N(E),
            top_result_score: null != E ? E.score : null,
            num_results_total: S.Z.getResultTotals(),
            num_results_users: S.Z.getResultTotals(o.h8.USER),
            num_results_text_channels: S.Z.getResultTotals(o.h8.TEXT_CHANNEL),
            num_results_voice_channels: S.Z.getResultTotals(o.h8.VOICE_CHANNEL),
            num_results_guilds: S.Z.getResultTotals(o.h8.GUILD),
            num_results_group_dms: S.Z.getResultTotals(o.h8.GROUP_DM)
        };
    if (null != u) {
        let e = s.Z.getChannel(u);
        g.current_channel_type = null != e ? e.type : null;
    }
    if (null != n) {
        let { type: e, score: l, record: i } = n;
        switch (((g.selected_type = N(n)), (g.selected_score = l), (g.selected_index = t.indexOf(n)), e)) {
            case o.h8.GUILD:
                g.selected_guild_id = i.id;
                break;
            case o.h8.TEXT_CHANNEL:
            case o.h8.VOICE_CHANNEL:
                i instanceof c.Sf && (g.selected_guild_id = null != i.guild_id ? i.guild_id : null), (g.selected_channel_id = i.id);
                break;
            case o.h8.GROUP_DM:
                g.selected_channel_id = i.id;
                break;
            case o.h8.USER:
                g.selected_user_id = i.id;
        }
    }
    h.default.track(e, g);
}
function D() {
    l.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function U() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    !(function (e) {
        let n;
        if (S.Z.isOpen()) return;
        let t = I.Z.getGuildId(),
            l = T.Z.getChannelId(t);
        if (null != l) {
            let e = s.Z.getChannel(l);
            n = null != e ? e.type : null;
        }
        h.default.track(L.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: t,
            current_channel_id: l,
            current_channel_type: n
        });
    })(e),
        l.Z.dispatch({
            type: 'QUICKSWITCHER_SHOW',
            ...P(n)
        });
}
function O() {
    R(L.rMx.QUICKSWITCHER_CLOSED), D();
}
function Z(e) {
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SEARCH',
        ...P(e)
    });
}
function v(e) {
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: e
    });
}
function G(e) {
    let n,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    D(), R(L.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: c, record: T } = e,
        I = { page: L.ZY5.QUICK_SWITCHER };
    switch (c) {
        case o.h8.GUILD:
            (0, _.X)(T.id, { navigationReplace: !0 });
            break;
        case o.h8.TEXT_CHANNEL:
            null != (n = s.Z.getChannel(T.id)) &&
                (0, d.Kh)(n.id, {
                    state: { analyticsSource: I },
                    navigationReplace: !0
                });
            break;
        case o.h8.VOICE_CHANNEL:
            null != (n = s.Z.getChannel(T.id)) &&
                (t ? r.Z.updateChatOpen(T.id, !0) : u.default.selectVoiceChannel(T.id),
                (0, d.Kh)(n.id, {
                    state: { analyticsSource: I },
                    navigationReplace: !0
                }));
            break;
        case o.h8.USER:
            i.Z.openPrivateChannel([T.id], !1, !1, 'Quickswitcher'), a.Z.channelListScrollTo(L.ME, s.Z.getDMFromUserId(T.id));
            break;
        case o.h8.GROUP_DM:
            (0, d.Kh)(T.id, { navigationReplace: !0 }), a.Z.channelListScrollTo(L.ME, T.id);
            break;
        case o.h8.APPLICATION:
            let h = C.Z.getActiveLibraryApplication(T.id);
            N(T.id, h, {
                analyticsParams: {
                    source: L.Sbl.QUICK_SWITCHER,
                    location: L.Sbl.QUICK_SWITCHER
                }
            });
            break;
        case o.h8.LINK:
            (0, E.Z)(T.path, { navigationReplace: !0 });
            break;
        case o.h8.IN_APP_NAVIGATION:
            (0, E.Z)(T.path, { navigationReplace: !0 });
    }
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: e
    });
}
