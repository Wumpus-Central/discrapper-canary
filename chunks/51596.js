n.d(t, {
    $Z: () => j,
    Cp: () => Z,
    F_: () => P,
    Se: () => R,
    tF: () => D,
    yC: () => w
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(388685);
var l = n(570140),
    r = n(493683),
    a = n(475179),
    i = n(925549),
    s = n(287734),
    o = n(230711),
    c = n(212819),
    u = n(815372),
    d = n(336197),
    f = n(359110),
    h = n(769654),
    _ = n(722589),
    g = n(131704),
    m = n(592125),
    p = n(283595),
    b = n(944486),
    E = n(914010),
    y = n(626135),
    I = n(777754),
    S = n(823385),
    A = n(981631),
    O = n(176505);
function N(e) {
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
let v = () => Promise.resolve();
v = n(346329).playApplication;
let x = Object.freeze({
        [c.xQ.USER]: c.h8.USER,
        [c.xQ.TEXT_CHANNEL]: c.h8.TEXT_CHANNEL,
        [c.xQ.VOICE_CHANNEL]: c.h8.VOICE_CHANNEL,
        [c.xQ.GUILD]: c.h8.GUILD,
        [c.xQ.APPLICATION]: c.h8.APPLICATION
    }),
    C = new RegExp('^'.concat(c.xQ.USER, '|').concat(c.xQ.TEXT_CHANNEL, '|').concat(c.xQ.VOICE_CHANNEL, '|\\').concat(c.xQ.GUILD, '|\\').concat(c.xQ.APPLICATION));
function P(e) {
    var t;
    let n,
        [l, r] = ((n = null != (t = x[e.charAt(0)]) ? t : null), [e.replace(C, ''), n]);
    return {
        query: l,
        queryMode: r
    };
}
function L(e, t) {
    let { results: n, queryMode: l, query: r, maxQueryLength: a } = S.Z.getProps(),
        i = E.Z.getGuildId(),
        s = b.Z.getChannelId(i),
        o = n[(0, c.gJ)(c.a8.DOWN, -1, n)],
        u = I.Z.isEmail(r),
        d = I.Z.isPhoneNumber(r),
        f = I.Z.isUserTagLike(r),
        h = null != s && (0, O.AB)(s),
        _ = (e) => (null == e ? null : e.type === c.h8.IN_APP_NAVIGATION ? e.type + '_' + e.record.type : e.type),
        p = {
            current_channel_id: h ? void 0 : s,
            current_channel_static_route: h ? s : void 0,
            current_guild_id: i,
            query_mode: null != l ? l : 'GENERAL',
            query_length: r.length,
            max_query_length: a,
            is_email_like: u,
            is_phone_like: d,
            is_username_like: f,
            query: u || d || f ? null : r,
            top_result_type: _(o),
            top_result_score: null != o ? o.score : null,
            num_results_total: S.Z.getResultTotals(),
            num_results_users: S.Z.getResultTotals(c.h8.USER),
            num_results_text_channels: S.Z.getResultTotals(c.h8.TEXT_CHANNEL),
            num_results_voice_channels: S.Z.getResultTotals(c.h8.VOICE_CHANNEL),
            num_results_guilds: S.Z.getResultTotals(c.h8.GUILD),
            num_results_group_dms: S.Z.getResultTotals(c.h8.GROUP_DM)
        };
    if (null != s) {
        let e = m.Z.getChannel(s);
        p.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: l, record: r } = t;
        switch (((p.selected_type = _(t)), (p.selected_score = l), (p.selected_index = n.indexOf(t)), e)) {
            case c.h8.GUILD:
                p.selected_guild_id = r.id;
                break;
            case c.h8.TEXT_CHANNEL:
            case c.h8.VOICE_CHANNEL:
                r instanceof g.Sf && (p.selected_guild_id = null != r.guild_id ? r.guild_id : null), (p.selected_channel_id = r.id);
                break;
            case c.h8.GROUP_DM:
                p.selected_channel_id = r.id;
                break;
            case c.h8.USER:
                p.selected_user_id = r.id;
        }
    }
    y.default.track(e, p);
}
function T() {
    l.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function j() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    !(function (e) {
        let t;
        if (S.Z.isOpen()) return;
        let n = E.Z.getGuildId(),
            l = b.Z.getChannelId(n);
        if (null != l) {
            let e = m.Z.getChannel(l);
            t = null != e ? e.type : null;
        }
        y.default.track(A.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: l,
            current_channel_type: t
        });
    })(e),
        l.Z.dispatch(N({ type: 'QUICKSWITCHER_SHOW' }, P(t)));
}
function Z() {
    L(A.rMx.QUICKSWITCHER_CLOSED), T();
}
function w(e) {
    l.Z.dispatch(N({ type: 'QUICKSWITCHER_SEARCH' }, P(e)));
}
function D(e) {
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: e
    });
}
function R(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    T(), L(A.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: g, record: b } = e,
        E = { page: A.ZY5.QUICK_SWITCHER };
    switch (g) {
        case c.h8.GUILD:
            (0, h.X)(b.id, { navigationReplace: !0 });
            break;
        case c.h8.TEXT_CHANNEL:
            null != (t = m.Z.getChannel(b.id)) &&
                (0, f.Kh)(t.id, {
                    state: { analyticsSource: E },
                    navigationReplace: !0
                });
            break;
        case c.h8.VOICE_CHANNEL:
            null != (t = m.Z.getChannel(b.id)) &&
                (n ? a.Z.updateChatOpen(b.id, !0) : s.default.selectVoiceChannel(b.id),
                (0, f.Kh)(t.id, {
                    state: { analyticsSource: E },
                    navigationReplace: !0
                }));
            break;
        case c.h8.USER:
            r.Z.openPrivateChannel([b.id], !1, !1, 'Quickswitcher'), i.Z.channelListScrollTo(A.ME, m.Z.getDMFromUserId(b.id));
            break;
        case c.h8.GROUP_DM:
            (0, f.Kh)(b.id, { navigationReplace: !0 }), i.Z.channelListScrollTo(A.ME, b.id);
            break;
        case c.h8.APPLICATION:
            let y = p.Z.getActiveLibraryApplication(b.id);
            v(b.id, y, {
                analyticsParams: {
                    source: A.Sbl.QUICK_SWITCHER,
                    location: A.Sbl.QUICK_SWITCHER
                }
            });
            break;
        case c.h8.LINK:
            (0, d.Z)(b.path, { navigationReplace: !0 });
            break;
        case c.h8.IN_APP_NAVIGATION:
            if (e.record.type === u.Ky.SETTINGS) {
                let t = (0, _.default)(e.record.path);
                null != t &&
                    o.Z.open(t.section, t.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: t.source
                    });
            } else (0, d.Z)(b.path, { navigationReplace: !0 });
    }
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: e
    });
}
