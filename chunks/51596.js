n.d(t, {
    $Z: function () {
        return x;
    },
    Cp: function () {
        return y;
    },
    F_: function () {
        return b;
    },
    Se: function () {
        return O;
    },
    tF: function () {
        return Z;
    },
    yC: function () {
        return P;
    }
}),
    n(757143),
    n(47120);
var l = n(570140),
    i = n(493683),
    a = n(475179),
    r = n(925549),
    s = n(287734),
    o = n(212819),
    c = n(336197),
    u = n(359110),
    d = n(769654),
    h = n(131704),
    f = n(592125),
    _ = n(283595),
    g = n(944486),
    m = n(914010),
    E = n(626135);
if (12633 == n.j) var I = n(777754);
var p = n(823385),
    S = n(981631),
    A = n(176505);
let C = () => Promise.resolve();
C = n(346329).playApplication;
let v = Object.freeze({
        [o.xQ.USER]: o.h8.USER,
        [o.xQ.TEXT_CHANNEL]: o.h8.TEXT_CHANNEL,
        [o.xQ.VOICE_CHANNEL]: o.h8.VOICE_CHANNEL,
        [o.xQ.GUILD]: o.h8.GUILD,
        [o.xQ.APPLICATION]: o.h8.APPLICATION
    }),
    L = new RegExp('^'.concat(o.xQ.USER, '|').concat(o.xQ.TEXT_CHANNEL, '|').concat(o.xQ.VOICE_CHANNEL, '|\\').concat(o.xQ.GUILD, '|\\').concat(o.xQ.APPLICATION));
function b(e) {
    var t, n;
    let l;
    let [i, a] = ((l = null !== (n = v[(t = e).charAt(0)]) && void 0 !== n ? n : null), [t.replace(L, ''), l]);
    return {
        query: i,
        queryMode: a
    };
}
function N(e, t) {
    let { results: n, queryMode: l, query: i, maxQueryLength: a } = p.Z.getProps(),
        r = m.Z.getGuildId(),
        s = g.Z.getChannelId(r),
        c = n[(0, o.gJ)(o.a8.DOWN, -1, n)],
        u = I.Z.isEmail(i),
        d = I.Z.isPhoneNumber(i),
        _ = I.Z.isUserTagLike(i),
        S = null != s && (0, A.AB)(s),
        C = (e) => (null == e ? null : e.type === o.h8.IN_APP_NAVIGATION ? e.type + '_' + e.record.type : e.type),
        v = {
            current_channel_id: S ? void 0 : s,
            current_channel_static_route: S ? s : void 0,
            current_guild_id: r,
            query_mode: null != l ? l : 'GENERAL',
            query_length: i.length,
            max_query_length: a,
            is_email_like: u,
            is_phone_like: d,
            is_username_like: _,
            query: u || d || _ ? null : i,
            top_result_type: C(c),
            top_result_score: null != c ? c.score : null,
            num_results_total: p.Z.getResultTotals(),
            num_results_users: p.Z.getResultTotals(o.h8.USER),
            num_results_text_channels: p.Z.getResultTotals(o.h8.TEXT_CHANNEL),
            num_results_voice_channels: p.Z.getResultTotals(o.h8.VOICE_CHANNEL),
            num_results_guilds: p.Z.getResultTotals(o.h8.GUILD),
            num_results_group_dms: p.Z.getResultTotals(o.h8.GROUP_DM)
        };
    if (null != s) {
        let e = f.Z.getChannel(s);
        v.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: l, record: i } = t;
        switch (((v.selected_type = C(t)), (v.selected_score = l), (v.selected_index = n.indexOf(t)), e)) {
            case o.h8.GUILD:
                v.selected_guild_id = i.id;
                break;
            case o.h8.TEXT_CHANNEL:
            case o.h8.VOICE_CHANNEL:
                i instanceof h.Sf && (v.selected_guild_id = null != i.guild_id ? i.guild_id : null), (v.selected_channel_id = i.id);
                break;
            case o.h8.GROUP_DM:
                v.selected_channel_id = i.id;
                break;
            case o.h8.USER:
                v.selected_user_id = i.id;
        }
    }
    E.default.track(e, v);
}
function T() {
    l.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function x() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    !(function (e) {
        let t;
        if (p.Z.isOpen()) return;
        let n = m.Z.getGuildId(),
            l = g.Z.getChannelId(n);
        if (null != l) {
            let e = f.Z.getChannel(l);
            t = null != e ? e.type : null;
        }
        E.default.track(S.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: l,
            current_channel_type: t
        });
    })(e),
        l.Z.dispatch({
            type: 'QUICKSWITCHER_SHOW',
            ...b(t)
        });
}
function y() {
    N(S.rMx.QUICKSWITCHER_CLOSED), T();
}
function P(e) {
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SEARCH',
        ...b(e)
    });
}
function Z(e) {
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: e
    });
}
function O(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    T(), N(S.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: h, record: g } = e,
        m = { page: S.ZY5.QUICK_SWITCHER };
    switch (h) {
        case o.h8.GUILD:
            (0, d.X)(g.id, { navigationReplace: !0 });
            break;
        case o.h8.TEXT_CHANNEL:
            null != (t = f.Z.getChannel(g.id)) &&
                (0, u.Kh)(t.id, {
                    state: { analyticsSource: m },
                    navigationReplace: !0
                });
            break;
        case o.h8.VOICE_CHANNEL:
            null != (t = f.Z.getChannel(g.id)) &&
                (n ? a.Z.updateChatOpen(g.id, !0) : s.default.selectVoiceChannel(g.id),
                (0, u.Kh)(t.id, {
                    state: { analyticsSource: m },
                    navigationReplace: !0
                }));
            break;
        case o.h8.USER:
            i.Z.openPrivateChannel([g.id], !1, !1, 'Quickswitcher'), r.Z.channelListScrollTo(S.ME, f.Z.getDMFromUserId(g.id));
            break;
        case o.h8.GROUP_DM:
            (0, u.Kh)(g.id, { navigationReplace: !0 }), r.Z.channelListScrollTo(S.ME, g.id);
            break;
        case o.h8.APPLICATION:
            let E = _.Z.getActiveLibraryApplication(g.id);
            C(g.id, E, {
                analyticsParams: {
                    source: S.Sbl.QUICK_SWITCHER,
                    location: S.Sbl.QUICK_SWITCHER
                }
            });
            break;
        case o.h8.LINK:
            (0, c.Z)(g.path, { navigationReplace: !0 });
            break;
        case o.h8.IN_APP_NAVIGATION:
            (0, c.Z)(g.path, { navigationReplace: !0 });
    }
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: e
    });
}
