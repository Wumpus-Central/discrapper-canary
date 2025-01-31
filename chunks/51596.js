n.d(t, {
    $Z: () => R,
    Cp: () => D,
    F_: () => m,
    Se: () => P,
    tF: () => v,
    yC: () => U
}),
    n(757143),
    n(47120);
var i = n(570140),
    o = n(493683),
    a = n(475179),
    l = n(925549),
    r = n(287734),
    c = n(212819),
    _ = n(336197),
    d = n(359110),
    u = n(769654),
    s = n(131704),
    E = n(592125),
    I = n(283595),
    f = n(944486),
    T = n(914010),
    p = n(626135),
    S = n(777754),
    g = n(823385),
    C = n(981631),
    A = n(176505);
let b = () => Promise.resolve();
b = n(346329).playApplication;
let h = Object.freeze({
        [c.xQ.USER]: c.h8.USER,
        [c.xQ.TEXT_CHANNEL]: c.h8.TEXT_CHANNEL,
        [c.xQ.VOICE_CHANNEL]: c.h8.VOICE_CHANNEL,
        [c.xQ.GUILD]: c.h8.GUILD,
        [c.xQ.APPLICATION]: c.h8.APPLICATION
    }),
    N = new RegExp('^'.concat(c.xQ.USER, '|').concat(c.xQ.TEXT_CHANNEL, '|').concat(c.xQ.VOICE_CHANNEL, '|\\').concat(c.xQ.GUILD, '|\\').concat(c.xQ.APPLICATION));
function m(e) {
    var t;
    let n;
    let [i, o] = ((n = null !== (t = h[e.charAt(0)]) && void 0 !== t ? t : null), [e.replace(N, ''), n]);
    return {
        query: i,
        queryMode: o
    };
}
function L(e, t) {
    let { results: n, queryMode: i, query: o, maxQueryLength: a } = g.Z.getProps(),
        l = T.Z.getGuildId(),
        r = f.Z.getChannelId(l),
        _ = n[(0, c.gJ)(c.a8.DOWN, -1, n)],
        d = S.Z.isEmail(o),
        u = S.Z.isPhoneNumber(o),
        I = S.Z.isUserTagLike(o),
        C = null != r && (0, A.AB)(r),
        b = (e) => (null == e ? null : e.type === c.h8.IN_APP_NAVIGATION ? e.type + '_' + e.record.type : e.type),
        h = {
            current_channel_id: C ? void 0 : r,
            current_channel_static_route: C ? r : void 0,
            current_guild_id: l,
            query_mode: null != i ? i : 'GENERAL',
            query_length: o.length,
            max_query_length: a,
            is_email_like: d,
            is_phone_like: u,
            is_username_like: I,
            query: d || u || I ? null : o,
            top_result_type: b(_),
            top_result_score: null != _ ? _.score : null,
            num_results_total: g.Z.getResultTotals(),
            num_results_users: g.Z.getResultTotals(c.h8.USER),
            num_results_text_channels: g.Z.getResultTotals(c.h8.TEXT_CHANNEL),
            num_results_voice_channels: g.Z.getResultTotals(c.h8.VOICE_CHANNEL),
            num_results_guilds: g.Z.getResultTotals(c.h8.GUILD),
            num_results_group_dms: g.Z.getResultTotals(c.h8.GROUP_DM)
        };
    if (null != r) {
        let e = E.Z.getChannel(r);
        h.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: i, record: o } = t;
        switch (((h.selected_type = b(t)), (h.selected_score = i), (h.selected_index = n.indexOf(t)), e)) {
            case c.h8.GUILD:
                h.selected_guild_id = o.id;
                break;
            case c.h8.TEXT_CHANNEL:
            case c.h8.VOICE_CHANNEL:
                o instanceof s.Sf && (h.selected_guild_id = null != o.guild_id ? o.guild_id : null), (h.selected_channel_id = o.id);
                break;
            case c.h8.GROUP_DM:
                h.selected_channel_id = o.id;
                break;
            case c.h8.USER:
                h.selected_user_id = o.id;
        }
    }
    p.default.track(e, h);
}
function O() {
    i.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function R() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    !(function (e) {
        let t;
        if (g.Z.isOpen()) return;
        let n = T.Z.getGuildId(),
            i = f.Z.getChannelId(n);
        if (null != i) {
            let e = E.Z.getChannel(i);
            t = null != e ? e.type : null;
        }
        p.default.track(C.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: i,
            current_channel_type: t
        });
    })(e),
        i.Z.dispatch({
            type: 'QUICKSWITCHER_SHOW',
            ...m(t)
        });
}
function D() {
    L(C.rMx.QUICKSWITCHER_CLOSED), O();
}
function U(e) {
    i.Z.dispatch({
        type: 'QUICKSWITCHER_SEARCH',
        ...m(e)
    });
}
function v(e) {
    i.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: e
    });
}
function P(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    O(), L(C.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: s, record: f } = e,
        T = { page: C.ZY5.QUICK_SWITCHER };
    switch (s) {
        case c.h8.GUILD:
            (0, u.X)(f.id, { navigationReplace: !0 });
            break;
        case c.h8.TEXT_CHANNEL:
            null != (t = E.Z.getChannel(f.id)) &&
                (0, d.Kh)(t.id, {
                    state: { analyticsSource: T },
                    navigationReplace: !0
                });
            break;
        case c.h8.VOICE_CHANNEL:
            null != (t = E.Z.getChannel(f.id)) &&
                (n ? a.Z.updateChatOpen(f.id, !0) : r.default.selectVoiceChannel(f.id),
                (0, d.Kh)(t.id, {
                    state: { analyticsSource: T },
                    navigationReplace: !0
                }));
            break;
        case c.h8.USER:
            o.Z.openPrivateChannel([f.id], !1, !1, 'Quickswitcher'), l.Z.channelListScrollTo(C.ME, E.Z.getDMFromUserId(f.id));
            break;
        case c.h8.GROUP_DM:
            (0, d.Kh)(f.id, { navigationReplace: !0 }), l.Z.channelListScrollTo(C.ME, f.id);
            break;
        case c.h8.APPLICATION:
            let p = I.Z.getActiveLibraryApplication(f.id);
            b(f.id, p, {
                analyticsParams: {
                    source: C.Sbl.QUICK_SWITCHER,
                    location: C.Sbl.QUICK_SWITCHER
                }
            });
            break;
        case c.h8.LINK:
        case c.h8.IN_APP_NAVIGATION:
            (0, _.Z)(f.path, { navigationReplace: !0 });
    }
    i.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: e
    });
}
