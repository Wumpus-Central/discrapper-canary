n.d(t, {
    $Z: () => Z,
    Cp: () => M,
    F_: () => y,
    Se: () => D,
    tF: () => R,
    yC: () => w
}),
    n(757143),
    n(47120);
var a = n(570140),
    l = n(493683),
    i = n(475179),
    s = n(925549),
    r = n(287734),
    o = n(230711),
    c = n(212819),
    d = n(815372),
    u = n(336197),
    m = n(359110),
    _ = n(769654),
    h = n(722589),
    g = n(131704),
    p = n(592125),
    f = n(283595),
    E = n(944486),
    I = n(914010),
    C = n(626135),
    x = n(777754),
    A = n(823385),
    S = n(981631),
    T = n(176505);
let v = () => Promise.resolve();
v = n(346329).playApplication;
let b = Object.freeze({
        [c.xQ.USER]: c.h8.USER,
        [c.xQ.TEXT_CHANNEL]: c.h8.TEXT_CHANNEL,
        [c.xQ.VOICE_CHANNEL]: c.h8.VOICE_CHANNEL,
        [c.xQ.GUILD]: c.h8.GUILD,
        [c.xQ.APPLICATION]: c.h8.APPLICATION
    }),
    L = new RegExp('^'.concat(c.xQ.USER, '|').concat(c.xQ.TEXT_CHANNEL, '|').concat(c.xQ.VOICE_CHANNEL, '|\\').concat(c.xQ.GUILD, '|\\').concat(c.xQ.APPLICATION));
function y(e) {
    var t;
    let n;
    let [a, l] = ((n = null !== (t = b[e.charAt(0)]) && void 0 !== t ? t : null), [e.replace(L, ''), n]);
    return {
        query: a,
        queryMode: l
    };
}
function N(e, t) {
    let { results: n, queryMode: a, query: l, maxQueryLength: i } = A.Z.getProps(),
        s = I.Z.getGuildId(),
        r = E.Z.getChannelId(s),
        o = n[(0, c.gJ)(c.a8.DOWN, -1, n)],
        d = x.Z.isEmail(l),
        u = x.Z.isPhoneNumber(l),
        m = x.Z.isUserTagLike(l),
        _ = null != r && (0, T.AB)(r),
        h = (e) => (null == e ? null : e.type === c.h8.IN_APP_NAVIGATION ? e.type + '_' + e.record.type : e.type),
        f = {
            current_channel_id: _ ? void 0 : r,
            current_channel_static_route: _ ? r : void 0,
            current_guild_id: s,
            query_mode: null != a ? a : 'GENERAL',
            query_length: l.length,
            max_query_length: i,
            is_email_like: d,
            is_phone_like: u,
            is_username_like: m,
            query: d || u || m ? null : l,
            top_result_type: h(o),
            top_result_score: null != o ? o.score : null,
            num_results_total: A.Z.getResultTotals(),
            num_results_users: A.Z.getResultTotals(c.h8.USER),
            num_results_text_channels: A.Z.getResultTotals(c.h8.TEXT_CHANNEL),
            num_results_voice_channels: A.Z.getResultTotals(c.h8.VOICE_CHANNEL),
            num_results_guilds: A.Z.getResultTotals(c.h8.GUILD),
            num_results_group_dms: A.Z.getResultTotals(c.h8.GROUP_DM)
        };
    if (null != r) {
        let e = p.Z.getChannel(r);
        f.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: a, record: l } = t;
        switch (((f.selected_type = h(t)), (f.selected_score = a), (f.selected_index = n.indexOf(t)), e)) {
            case c.h8.GUILD:
                f.selected_guild_id = l.id;
                break;
            case c.h8.TEXT_CHANNEL:
            case c.h8.VOICE_CHANNEL:
                l instanceof g.Sf && (f.selected_guild_id = null != l.guild_id ? l.guild_id : null), (f.selected_channel_id = l.id);
                break;
            case c.h8.GROUP_DM:
                f.selected_channel_id = l.id;
                break;
            case c.h8.USER:
                f.selected_user_id = l.id;
        }
    }
    C.default.track(e, f);
}
function P() {
    a.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function Z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    !(function (e) {
        let t;
        if (A.Z.isOpen()) return;
        let n = I.Z.getGuildId(),
            a = E.Z.getChannelId(n);
        if (null != a) {
            let e = p.Z.getChannel(a);
            t = null != e ? e.type : null;
        }
        C.default.track(S.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: a,
            current_channel_type: t
        });
    })(e),
        a.Z.dispatch({
            type: 'QUICKSWITCHER_SHOW',
            ...y(t)
        });
}
function M() {
    N(S.rMx.QUICKSWITCHER_CLOSED), P();
}
function w(e) {
    a.Z.dispatch({
        type: 'QUICKSWITCHER_SEARCH',
        ...y(e)
    });
}
function R(e) {
    a.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: e
    });
}
function D(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    P(), N(S.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: g, record: E } = e,
        I = { page: S.ZY5.QUICK_SWITCHER };
    switch (g) {
        case c.h8.GUILD:
            (0, _.X)(E.id, { navigationReplace: !0 });
            break;
        case c.h8.TEXT_CHANNEL:
            null != (t = p.Z.getChannel(E.id)) &&
                (0, m.Kh)(t.id, {
                    state: { analyticsSource: I },
                    navigationReplace: !0
                });
            break;
        case c.h8.VOICE_CHANNEL:
            null != (t = p.Z.getChannel(E.id)) &&
                (n ? i.Z.updateChatOpen(E.id, !0) : r.default.selectVoiceChannel(E.id),
                (0, m.Kh)(t.id, {
                    state: { analyticsSource: I },
                    navigationReplace: !0
                }));
            break;
        case c.h8.USER:
            l.Z.openPrivateChannel([E.id], !1, !1, 'Quickswitcher'), s.Z.channelListScrollTo(S.ME, p.Z.getDMFromUserId(E.id));
            break;
        case c.h8.GROUP_DM:
            (0, m.Kh)(E.id, { navigationReplace: !0 }), s.Z.channelListScrollTo(S.ME, E.id);
            break;
        case c.h8.APPLICATION:
            let C = f.Z.getActiveLibraryApplication(E.id);
            v(E.id, C, {
                analyticsParams: {
                    source: S.Sbl.QUICK_SWITCHER,
                    location: S.Sbl.QUICK_SWITCHER
                }
            });
            break;
        case c.h8.LINK:
            (0, u.Z)(E.path, { navigationReplace: !0 });
            break;
        case c.h8.IN_APP_NAVIGATION:
            if (e.record.type === d.Ky.SETTINGS) {
                let t = (0, h.default)(e.record.path);
                null != t &&
                    o.Z.open(t.section, t.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: t.source
                    });
            } else (0, u.Z)(E.path, { navigationReplace: !0 });
    }
    a.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: e
    });
}
