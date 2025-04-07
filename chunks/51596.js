n.d(t, {
    $Z: () => j,
    Cp: () => w,
    F_: () => T,
    Se: () => k,
    tF: () => D,
    yC: () => Z
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(388685);
var a = n(570140),
    r = n(493683),
    l = n(475179),
    i = n(925549),
    s = n(287734),
    o = n(230711),
    c = n(212819),
    u = n(815372),
    d = n(336197),
    m = n(359110),
    p = n(769654),
    h = n(722589),
    g = n(131704),
    _ = n(592125),
    f = n(283595),
    b = n(944486),
    y = n(914010),
    E = n(626135),
    I = n(777754),
    S = n(823385),
    C = n(981631),
    O = n(176505);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
let x = () => Promise.resolve();
x = n(346329).playApplication;
let A = Object.freeze({
        [c.xQ.USER]: c.h8.USER,
        [c.xQ.TEXT_CHANNEL]: c.h8.TEXT_CHANNEL,
        [c.xQ.VOICE_CHANNEL]: c.h8.VOICE_CHANNEL,
        [c.xQ.GUILD]: c.h8.GUILD,
        [c.xQ.APPLICATION]: c.h8.APPLICATION
    }),
    N = new RegExp('^'.concat(c.xQ.USER, '|').concat(c.xQ.TEXT_CHANNEL, '|').concat(c.xQ.VOICE_CHANNEL, '|\\').concat(c.xQ.GUILD, '|\\').concat(c.xQ.APPLICATION));
function T(e) {
    var t;
    let n,
        [a, r] = ((n = null != (t = A[e.charAt(0)]) ? t : null), [e.replace(N, ''), n]);
    return {
        query: a,
        queryMode: r
    };
}
function P(e, t) {
    let { results: n, queryMode: a, query: r, maxQueryLength: l } = S.Z.getProps(),
        i = y.Z.getGuildId(),
        s = b.Z.getChannelId(i),
        o = n[(0, c.gJ)(c.a8.DOWN, -1, n)],
        u = I.Z.isEmail(r),
        d = I.Z.isPhoneNumber(r),
        m = I.Z.isUserTagLike(r),
        p = null != s && (0, O.AB)(s),
        h = (e) => (null == e ? null : e.type === c.h8.IN_APP_NAVIGATION ? e.type + '_' + e.record.type : e.type),
        f = {
            current_channel_id: p ? void 0 : s,
            current_channel_static_route: p ? s : void 0,
            current_guild_id: i,
            query_mode: null != a ? a : 'GENERAL',
            query_length: r.length,
            max_query_length: l,
            is_email_like: u,
            is_phone_like: d,
            is_username_like: m,
            query: u || d || m ? null : r,
            top_result_type: h(o),
            top_result_score: null != o ? o.score : null,
            num_results_total: S.Z.getResultTotals(),
            num_results_users: S.Z.getResultTotals(c.h8.USER),
            num_results_text_channels: S.Z.getResultTotals(c.h8.TEXT_CHANNEL),
            num_results_voice_channels: S.Z.getResultTotals(c.h8.VOICE_CHANNEL),
            num_results_guilds: S.Z.getResultTotals(c.h8.GUILD),
            num_results_group_dms: S.Z.getResultTotals(c.h8.GROUP_DM)
        };
    if (null != s) {
        let e = _.Z.getChannel(s);
        f.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: a, record: r } = t;
        switch (((f.selected_type = h(t)), (f.selected_score = a), (f.selected_index = n.indexOf(t)), e)) {
            case c.h8.GUILD:
                f.selected_guild_id = r.id;
                break;
            case c.h8.TEXT_CHANNEL:
            case c.h8.VOICE_CHANNEL:
                r instanceof g.Sf && (f.selected_guild_id = null != r.guild_id ? r.guild_id : null), (f.selected_channel_id = r.id);
                break;
            case c.h8.GROUP_DM:
                f.selected_channel_id = r.id;
                break;
            case c.h8.USER:
                f.selected_user_id = r.id;
        }
    }
    E.default.track(e, f);
}
function L() {
    a.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function j() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    !(function (e) {
        let t;
        if (S.Z.isOpen()) return;
        let n = y.Z.getGuildId(),
            a = b.Z.getChannelId(n);
        if (null != a) {
            let e = _.Z.getChannel(a);
            t = null != e ? e.type : null;
        }
        E.default.track(C.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: a,
            current_channel_type: t
        });
    })(e),
        a.Z.dispatch(v({ type: 'QUICKSWITCHER_SHOW' }, T(t)));
}
function w() {
    P(C.rMx.QUICKSWITCHER_CLOSED), L();
}
function Z(e) {
    a.Z.dispatch(v({ type: 'QUICKSWITCHER_SEARCH' }, T(e)));
}
function D(e) {
    a.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: e
    });
}
function k(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    L(), P(C.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: g, record: b } = e,
        y = { page: C.ZY5.QUICK_SWITCHER };
    switch (g) {
        case c.h8.GUILD:
            (0, p.X)(b.id, { navigationReplace: !0 });
            break;
        case c.h8.TEXT_CHANNEL:
            null != (t = _.Z.getChannel(b.id)) &&
                (0, m.Kh)(t.id, {
                    state: { analyticsSource: y },
                    navigationReplace: !0
                });
            break;
        case c.h8.VOICE_CHANNEL:
            null != (t = _.Z.getChannel(b.id)) &&
                (n ? l.Z.updateChatOpen(b.id, !0) : s.default.selectVoiceChannel(b.id),
                (0, m.Kh)(t.id, {
                    state: { analyticsSource: y },
                    navigationReplace: !0
                }));
            break;
        case c.h8.USER:
            r.Z.openPrivateChannel([b.id], !1, !1, 'Quickswitcher'), i.Z.channelListScrollTo(C.ME, _.Z.getDMFromUserId(b.id));
            break;
        case c.h8.GROUP_DM:
            (0, m.Kh)(b.id, { navigationReplace: !0 }), i.Z.channelListScrollTo(C.ME, b.id);
            break;
        case c.h8.APPLICATION:
            let E = f.Z.getActiveLibraryApplication(b.id);
            x(b.id, E, {
                analyticsParams: {
                    source: C.Sbl.QUICK_SWITCHER,
                    location: C.Sbl.QUICK_SWITCHER
                }
            });
            break;
        case c.h8.LINK:
            (0, d.Z)(b.path, { navigationReplace: !0 });
            break;
        case c.h8.IN_APP_NAVIGATION:
            if (e.record.type === u.Ky.SETTINGS) {
                let t = (0, h.default)(e.record.path);
                null != t &&
                    o.Z.open(t.section, t.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: t.source
                    });
            } else (0, d.Z)(b.path, { navigationReplace: !0 });
    }
    a.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: e
    });
}
