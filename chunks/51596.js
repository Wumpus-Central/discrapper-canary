n.d(t, {
    $Z: () => D,
    Cp: () => Z,
    F_: () => y,
    Se: () => x,
    tF: () => U,
    yC: () => j
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(388685);
var l = n(570140),
    r = n(493683),
    i = n(475179),
    o = n(925549),
    a = n(287734),
    s = n(230711),
    u = n(212819),
    c = n(815372),
    d = n(336197),
    E = n(359110),
    f = n(769654),
    C = n(722589),
    p = n(131704),
    _ = n(592125),
    h = n(283595),
    g = n(944486),
    O = n(914010),
    T = n(626135),
    I = n(777754),
    S = n(823385),
    N = n(981631),
    m = n(176505);
function A(e) {
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
let b = () => Promise.resolve();
b = n(346329).playApplication;
let P = Object.freeze({
        [u.xQ.USER]: u.h8.USER,
        [u.xQ.TEXT_CHANNEL]: u.h8.TEXT_CHANNEL,
        [u.xQ.VOICE_CHANNEL]: u.h8.VOICE_CHANNEL,
        [u.xQ.GUILD]: u.h8.GUILD,
        [u.xQ.APPLICATION]: u.h8.APPLICATION
    }),
    v = new RegExp('^'.concat(u.xQ.USER, '|').concat(u.xQ.TEXT_CHANNEL, '|').concat(u.xQ.VOICE_CHANNEL, '|\\').concat(u.xQ.GUILD, '|\\').concat(u.xQ.APPLICATION));
function y(e) {
    var t;
    let n,
        [l, r] = ((n = null != (t = P[e.charAt(0)]) ? t : null), [e.replace(v, ''), n]);
    return {
        query: l,
        queryMode: r
    };
}
function L(e, t) {
    let { results: n, queryMode: l, query: r, maxQueryLength: i } = S.Z.getProps(),
        o = O.Z.getGuildId(),
        a = g.Z.getChannelId(o),
        s = n[(0, u.gJ)(u.a8.DOWN, -1, n)],
        c = I.Z.isEmail(r),
        d = I.Z.isPhoneNumber(r),
        E = I.Z.isUserTagLike(r),
        f = null != a && (0, m.AB)(a),
        C = (e) => (null == e ? null : e.type === u.h8.IN_APP_NAVIGATION ? e.type + '_' + e.record.type : e.type),
        h = {
            current_channel_id: f ? void 0 : a,
            current_channel_static_route: f ? a : void 0,
            current_guild_id: o,
            query_mode: null != l ? l : 'GENERAL',
            query_length: r.length,
            max_query_length: i,
            is_email_like: c,
            is_phone_like: d,
            is_username_like: E,
            query: c || d || E ? null : r,
            top_result_type: C(s),
            top_result_score: null != s ? s.score : null,
            num_results_total: S.Z.getResultTotals(),
            num_results_users: S.Z.getResultTotals(u.h8.USER),
            num_results_text_channels: S.Z.getResultTotals(u.h8.TEXT_CHANNEL),
            num_results_voice_channels: S.Z.getResultTotals(u.h8.VOICE_CHANNEL),
            num_results_guilds: S.Z.getResultTotals(u.h8.GUILD),
            num_results_group_dms: S.Z.getResultTotals(u.h8.GROUP_DM)
        };
    if (null != a) {
        let e = _.Z.getChannel(a);
        h.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: l, record: r } = t;
        switch (((h.selected_type = C(t)), (h.selected_score = l), (h.selected_index = n.indexOf(t)), e)) {
            case u.h8.GUILD:
                h.selected_guild_id = r.id;
                break;
            case u.h8.TEXT_CHANNEL:
            case u.h8.VOICE_CHANNEL:
                r instanceof p.Sf && (h.selected_guild_id = null != r.guild_id ? r.guild_id : null), (h.selected_channel_id = r.id);
                break;
            case u.h8.GROUP_DM:
                h.selected_channel_id = r.id;
                break;
            case u.h8.USER:
                h.selected_user_id = r.id;
        }
    }
    T.default.track(e, h);
}
function R() {
    l.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function D() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    !(function (e) {
        let t;
        if (S.Z.isOpen()) return;
        let n = O.Z.getGuildId(),
            l = g.Z.getChannelId(n);
        if (null != l) {
            let e = _.Z.getChannel(l);
            t = null != e ? e.type : null;
        }
        T.default.track(N.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: l,
            current_channel_type: t
        });
    })(e),
        l.Z.dispatch(A({ type: 'QUICKSWITCHER_SHOW' }, y(t)));
}
function Z() {
    L(N.rMx.QUICKSWITCHER_CLOSED), R();
}
function j(e) {
    l.Z.dispatch(A({ type: 'QUICKSWITCHER_SEARCH' }, y(e)));
}
function U(e) {
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: e
    });
}
function x(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    R(), L(N.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: p, record: g } = e,
        O = { page: N.ZY5.QUICK_SWITCHER };
    switch (p) {
        case u.h8.GUILD:
            (0, f.X)(g.id, { navigationReplace: !0 });
            break;
        case u.h8.TEXT_CHANNEL:
            null != (t = _.Z.getChannel(g.id)) &&
                (0, E.Kh)(t.id, {
                    state: { analyticsSource: O },
                    navigationReplace: !0
                });
            break;
        case u.h8.VOICE_CHANNEL:
            null != (t = _.Z.getChannel(g.id)) &&
                (n ? i.Z.updateChatOpen(g.id, !0) : a.default.selectVoiceChannel(g.id),
                (0, E.Kh)(t.id, {
                    state: { analyticsSource: O },
                    navigationReplace: !0
                }));
            break;
        case u.h8.USER:
            r.Z.openPrivateChannel([g.id], !1, !1, 'Quickswitcher'), o.Z.channelListScrollTo(N.ME, _.Z.getDMFromUserId(g.id));
            break;
        case u.h8.GROUP_DM:
            (0, E.Kh)(g.id, { navigationReplace: !0 }), o.Z.channelListScrollTo(N.ME, g.id);
            break;
        case u.h8.APPLICATION:
            let T = h.Z.getActiveLibraryApplication(g.id);
            b(g.id, T, {
                analyticsParams: {
                    source: N.Sbl.QUICK_SWITCHER,
                    location: N.Sbl.QUICK_SWITCHER
                }
            });
            break;
        case u.h8.LINK:
            (0, d.Z)(g.path, { navigationReplace: !0 });
            break;
        case u.h8.IN_APP_NAVIGATION:
            if (e.record.type === c.Ky.SETTINGS) {
                let t = (0, C.default)(e.record.path);
                null != t &&
                    s.Z.open(t.section, t.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: t.source
                    });
            } else (0, d.Z)(g.path, { navigationReplace: !0 });
    }
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: e
    });
}
