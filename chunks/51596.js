n.d(t, {
    $Z: function () {
        return O;
    },
    Cp: function () {
        return Z;
    },
    F_: function () {
        return N;
    },
    Se: function () {
        return b;
    },
    tF: function () {
        return U;
    },
    yC: function () {
        return y;
    }
}),
    n(757143),
    n(47120);
var c = n(570140),
    i = n(493683),
    l = n(475179),
    a = n(925549),
    r = n(287734),
    o = n(212819),
    s = n(336197),
    u = n(359110),
    d = n(769654),
    _ = n(131704),
    h = n(592125),
    f = n(283595),
    p = n(944486),
    E = n(914010),
    C = n(626135);
if (12633 == n.j) var A = n(777754);
var I = n(823385),
    T = n(981631),
    S = n(176505);
let g = () => Promise.resolve();
g = n(346329).playApplication;
let m = Object.freeze({
        [o.xQ.USER]: o.h8.USER,
        [o.xQ.TEXT_CHANNEL]: o.h8.TEXT_CHANNEL,
        [o.xQ.VOICE_CHANNEL]: o.h8.VOICE_CHANNEL,
        [o.xQ.GUILD]: o.h8.GUILD,
        [o.xQ.APPLICATION]: o.h8.APPLICATION
    }),
    R = new RegExp('^'.concat(o.xQ.USER, '|').concat(o.xQ.TEXT_CHANNEL, '|').concat(o.xQ.VOICE_CHANNEL, '|\\').concat(o.xQ.GUILD, '|\\').concat(o.xQ.APPLICATION));
function N(e) {
    var t, n;
    let c;
    let [i, l] = ((c = null !== (n = m[(t = e).charAt(0)]) && void 0 !== n ? n : null), [t.replace(R, ''), c]);
    return {
        query: i,
        queryMode: l
    };
}
function x(e, t) {
    let { results: n, queryMode: c, query: i, maxQueryLength: l } = I.Z.getProps(),
        a = E.Z.getGuildId(),
        r = p.Z.getChannelId(a),
        s = n[(0, o.gJ)(o.a8.DOWN, -1, n)],
        u = A.Z.isEmail(i),
        d = A.Z.isPhoneNumber(i),
        f = A.Z.isUserTagLike(i),
        T = null != r && (0, S.AB)(r),
        g = (e) => (null == e ? null : e.type === o.h8.IN_APP_NAVIGATION ? e.type + '_' + e.record.type : e.type),
        m = {
            current_channel_id: T ? void 0 : r,
            current_channel_static_route: T ? r : void 0,
            current_guild_id: a,
            query_mode: null != c ? c : 'GENERAL',
            query_length: i.length,
            max_query_length: l,
            is_email_like: u,
            is_phone_like: d,
            is_username_like: f,
            query: u || d || f ? null : i,
            top_result_type: g(s),
            top_result_score: null != s ? s.score : null,
            num_results_total: I.Z.getResultTotals(),
            num_results_users: I.Z.getResultTotals(o.h8.USER),
            num_results_text_channels: I.Z.getResultTotals(o.h8.TEXT_CHANNEL),
            num_results_voice_channels: I.Z.getResultTotals(o.h8.VOICE_CHANNEL),
            num_results_guilds: I.Z.getResultTotals(o.h8.GUILD),
            num_results_group_dms: I.Z.getResultTotals(o.h8.GROUP_DM)
        };
    if (null != r) {
        let e = h.Z.getChannel(r);
        m.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: c, record: i } = t;
        switch (((m.selected_type = g(t)), (m.selected_score = c), (m.selected_index = n.indexOf(t)), e)) {
            case o.h8.GUILD:
                m.selected_guild_id = i.id;
                break;
            case o.h8.TEXT_CHANNEL:
            case o.h8.VOICE_CHANNEL:
                i instanceof _.Sf && (m.selected_guild_id = null != i.guild_id ? i.guild_id : null), (m.selected_channel_id = i.id);
                break;
            case o.h8.GROUP_DM:
                m.selected_channel_id = i.id;
                break;
            case o.h8.USER:
                m.selected_user_id = i.id;
        }
    }
    C.default.track(e, m);
}
function L() {
    c.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    !(function (e) {
        let t;
        if (I.Z.isOpen()) return;
        let n = E.Z.getGuildId(),
            c = p.Z.getChannelId(n);
        if (null != c) {
            let e = h.Z.getChannel(c);
            t = null != e ? e.type : null;
        }
        C.default.track(T.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: c,
            current_channel_type: t
        });
    })(e),
        c.Z.dispatch({
            type: 'QUICKSWITCHER_SHOW',
            ...N(t)
        });
}
function Z() {
    x(T.rMx.QUICKSWITCHER_CLOSED), L();
}
function y(e) {
    c.Z.dispatch({
        type: 'QUICKSWITCHER_SEARCH',
        ...N(e)
    });
}
function U(e) {
    c.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: e
    });
}
function b(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    L(), x(T.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: _, record: p } = e,
        E = { page: T.ZY5.QUICK_SWITCHER };
    switch (_) {
        case o.h8.GUILD:
            (0, d.X)(p.id, { navigationReplace: !0 });
            break;
        case o.h8.TEXT_CHANNEL:
            null != (t = h.Z.getChannel(p.id)) &&
                (0, u.Kh)(t.id, {
                    state: { analyticsSource: E },
                    navigationReplace: !0
                });
            break;
        case o.h8.VOICE_CHANNEL:
            null != (t = h.Z.getChannel(p.id)) &&
                (n ? l.Z.updateChatOpen(p.id, !0) : r.default.selectVoiceChannel(p.id),
                (0, u.Kh)(t.id, {
                    state: { analyticsSource: E },
                    navigationReplace: !0
                }));
            break;
        case o.h8.USER:
            i.Z.openPrivateChannel([p.id], !1, !1, 'Quickswitcher'), a.Z.channelListScrollTo(T.ME, h.Z.getDMFromUserId(p.id));
            break;
        case o.h8.GROUP_DM:
            (0, u.Kh)(p.id, { navigationReplace: !0 }), a.Z.channelListScrollTo(T.ME, p.id);
            break;
        case o.h8.APPLICATION:
            let C = f.Z.getActiveLibraryApplication(p.id);
            g(p.id, C, {
                analyticsParams: {
                    source: T.Sbl.QUICK_SWITCHER,
                    location: T.Sbl.QUICK_SWITCHER
                }
            });
            break;
        case o.h8.LINK:
            (0, s.Z)(p.path, { navigationReplace: !0 });
            break;
        case o.h8.IN_APP_NAVIGATION:
            (0, s.Z)(p.path, { navigationReplace: !0 });
    }
    c.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: e
    });
}
