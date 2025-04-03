n.d(t, {
    $Z: () => U,
    Cp: () => k,
    F_: () => O,
    Se: () => D,
    tF: () => v,
    yC: () => H
}),
    n(474991),
    n(398202),
    n(301563),
    n(757143),
    n(47120);
var l = n(570140),
    i = n(493683),
    c = n(475179),
    a = n(925549),
    r = n(287734),
    o = n(230711),
    s = n(212819),
    _ = n(815372),
    u = n(336197),
    d = n(359110),
    h = n(769654),
    p = n(722589),
    C = n(131704),
    E = n(592125),
    f = n(283595),
    I = n(944486),
    T = n(914010),
    N = n(626135),
    g = n(777754),
    A = n(823385),
    S = n(981631),
    m = n(176505);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let R = () => Promise.resolve();
R = n(346329).playApplication;
let y = Object.freeze({
        [s.xQ.USER]: s.h8.USER,
        [s.xQ.TEXT_CHANNEL]: s.h8.TEXT_CHANNEL,
        [s.xQ.VOICE_CHANNEL]: s.h8.VOICE_CHANNEL,
        [s.xQ.GUILD]: s.h8.GUILD,
        [s.xQ.APPLICATION]: s.h8.APPLICATION
    }),
    b = new RegExp('^'.concat(s.xQ.USER, '|').concat(s.xQ.TEXT_CHANNEL, '|').concat(s.xQ.VOICE_CHANNEL, '|\\').concat(s.xQ.GUILD, '|\\').concat(s.xQ.APPLICATION));
function O(e) {
    var t;
    let n,
        [l, i] = ((n = null != (t = y[e.charAt(0)]) ? t : null), [e.replace(b, ''), n]);
    return {
        query: l,
        queryMode: i
    };
}
function Z(e, t) {
    let { results: n, queryMode: l, query: i, maxQueryLength: c } = A.Z.getProps(),
        a = T.Z.getGuildId(),
        r = I.Z.getChannelId(a),
        o = n[(0, s.gJ)(s.a8.DOWN, -1, n)],
        _ = g.Z.isEmail(i),
        u = g.Z.isPhoneNumber(i),
        d = g.Z.isUserTagLike(i),
        h = null != r && (0, m.AB)(r),
        p = (e) => (null == e ? null : e.type === s.h8.IN_APP_NAVIGATION ? e.type + '_' + e.record.type : e.type),
        f = {
            current_channel_id: h ? void 0 : r,
            current_channel_static_route: h ? r : void 0,
            current_guild_id: a,
            query_mode: null != l ? l : 'GENERAL',
            query_length: i.length,
            max_query_length: c,
            is_email_like: _,
            is_phone_like: u,
            is_username_like: d,
            query: _ || u || d ? null : i,
            top_result_type: p(o),
            top_result_score: null != o ? o.score : null,
            num_results_total: A.Z.getResultTotals(),
            num_results_users: A.Z.getResultTotals(s.h8.USER),
            num_results_text_channels: A.Z.getResultTotals(s.h8.TEXT_CHANNEL),
            num_results_voice_channels: A.Z.getResultTotals(s.h8.VOICE_CHANNEL),
            num_results_guilds: A.Z.getResultTotals(s.h8.GUILD),
            num_results_group_dms: A.Z.getResultTotals(s.h8.GROUP_DM)
        };
    if (null != r) {
        let e = E.Z.getChannel(r);
        f.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: l, record: i } = t;
        switch (((f.selected_type = p(t)), (f.selected_score = l), (f.selected_index = n.indexOf(t)), e)) {
            case s.h8.GUILD:
                f.selected_guild_id = i.id;
                break;
            case s.h8.TEXT_CHANNEL:
            case s.h8.VOICE_CHANNEL:
                i instanceof C.Sf && (f.selected_guild_id = null != i.guild_id ? i.guild_id : null), (f.selected_channel_id = i.id);
                break;
            case s.h8.GROUP_DM:
                f.selected_channel_id = i.id;
                break;
            case s.h8.USER:
                f.selected_user_id = i.id;
        }
    }
    N.default.track(e, f);
}
function L() {
    l.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function U() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    !(function (e) {
        let t;
        if (A.Z.isOpen()) return;
        let n = T.Z.getGuildId(),
            l = I.Z.getChannelId(n);
        if (null != l) {
            let e = E.Z.getChannel(l);
            t = null != e ? e.type : null;
        }
        N.default.track(S.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: l,
            current_channel_type: t
        });
    })(e),
        l.Z.dispatch(x({ type: 'QUICKSWITCHER_SHOW' }, O(t)));
}
function k() {
    Z(S.rMx.QUICKSWITCHER_CLOSED), L();
}
function H(e) {
    l.Z.dispatch(x({ type: 'QUICKSWITCHER_SEARCH' }, O(e)));
}
function v(e) {
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: e
    });
}
function D(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    L(), Z(S.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: C, record: I } = e,
        T = { page: S.ZY5.QUICK_SWITCHER };
    switch (C) {
        case s.h8.GUILD:
            (0, h.X)(I.id, { navigationReplace: !0 });
            break;
        case s.h8.TEXT_CHANNEL:
            null != (t = E.Z.getChannel(I.id)) &&
                (0, d.Kh)(t.id, {
                    state: { analyticsSource: T },
                    navigationReplace: !0
                });
            break;
        case s.h8.VOICE_CHANNEL:
            null != (t = E.Z.getChannel(I.id)) &&
                (n ? c.Z.updateChatOpen(I.id, !0) : r.default.selectVoiceChannel(I.id),
                (0, d.Kh)(t.id, {
                    state: { analyticsSource: T },
                    navigationReplace: !0
                }));
            break;
        case s.h8.USER:
            i.Z.openPrivateChannel([I.id], !1, !1, 'Quickswitcher'), a.Z.channelListScrollTo(S.ME, E.Z.getDMFromUserId(I.id));
            break;
        case s.h8.GROUP_DM:
            (0, d.Kh)(I.id, { navigationReplace: !0 }), a.Z.channelListScrollTo(S.ME, I.id);
            break;
        case s.h8.APPLICATION:
            let N = f.Z.getActiveLibraryApplication(I.id);
            R(I.id, N, {
                analyticsParams: {
                    source: S.Sbl.QUICK_SWITCHER,
                    location: S.Sbl.QUICK_SWITCHER
                }
            });
            break;
        case s.h8.LINK:
            (0, u.Z)(I.path, { navigationReplace: !0 });
            break;
        case s.h8.IN_APP_NAVIGATION:
            if (e.record.type === _.Ky.SETTINGS) {
                let t = (0, p.default)(e.record.path);
                null != t &&
                    o.Z.open(t.section, t.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: t.source
                    });
            } else (0, u.Z)(I.path, { navigationReplace: !0 });
    }
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: e
    });
}
