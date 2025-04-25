n.d(t, {
    $Z: () => R,
    Cp: () => D,
    F_: () => y,
    Se: () => k,
    tF: () => w,
    yC: () => Z
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(388685);
var i = n(570140),
    r = n(493683),
    s = n(475179),
    l = n(925549),
    a = n(287734),
    o = n(230711),
    c = n(212819),
    d = n(815372),
    u = n(336197),
    m = n(359110),
    p = n(769654),
    g = n(722589),
    h = n(131704),
    f = n(592125),
    b = n(283595),
    _ = n(944486),
    x = n(914010),
    E = n(626135),
    j = n(777754),
    C = n(823385),
    O = n(981631),
    S = n(176505);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let T = () => Promise.resolve();
T = n(346329).playApplication;
let I = Object.freeze({
        [c.xQ.USER]: c.h8.USER,
        [c.xQ.TEXT_CHANNEL]: c.h8.TEXT_CHANNEL,
        [c.xQ.VOICE_CHANNEL]: c.h8.VOICE_CHANNEL,
        [c.xQ.GUILD]: c.h8.GUILD,
        [c.xQ.APPLICATION]: c.h8.APPLICATION
    }),
    N = new RegExp('^'.concat(c.xQ.USER, '|').concat(c.xQ.TEXT_CHANNEL, '|').concat(c.xQ.VOICE_CHANNEL, '|\\').concat(c.xQ.GUILD, '|\\').concat(c.xQ.APPLICATION));
function y(e) {
    var t;
    let n,
        [i, r] = ((n = null != (t = I[e.charAt(0)]) ? t : null), [e.replace(N, ''), n]);
    return {
        query: i,
        queryMode: r
    };
}
function A(e, t) {
    let { results: n, queryMode: i, query: r, maxQueryLength: s } = C.Z.getProps(),
        l = x.Z.getGuildId(),
        a = _.Z.getChannelId(l),
        o = n[(0, c.gJ)(c.a8.DOWN, -1, n)],
        d = j.Z.isEmail(r),
        u = j.Z.isPhoneNumber(r),
        m = j.Z.isUserTagLike(r),
        p = null != a && (0, S.AB)(a),
        g = (e) => (null == e ? null : e.type === c.h8.IN_APP_NAVIGATION ? e.type + '_' + e.record.type : e.type),
        b = {
            current_channel_id: p ? void 0 : a,
            current_channel_static_route: p ? a : void 0,
            current_guild_id: l,
            query_mode: null != i ? i : 'GENERAL',
            query_length: r.length,
            max_query_length: s,
            is_email_like: d,
            is_phone_like: u,
            is_username_like: m,
            query: d || u || m ? null : r,
            top_result_type: g(o),
            top_result_score: null != o ? o.score : null,
            num_results_total: C.Z.getResultTotals(),
            num_results_users: C.Z.getResultTotals(c.h8.USER),
            num_results_text_channels: C.Z.getResultTotals(c.h8.TEXT_CHANNEL),
            num_results_voice_channels: C.Z.getResultTotals(c.h8.VOICE_CHANNEL),
            num_results_guilds: C.Z.getResultTotals(c.h8.GUILD),
            num_results_group_dms: C.Z.getResultTotals(c.h8.GROUP_DM)
        };
    if (null != a) {
        let e = f.Z.getChannel(a);
        b.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: i, record: r } = t;
        switch (((b.selected_type = g(t)), (b.selected_score = i), (b.selected_index = n.indexOf(t)), e)) {
            case c.h8.GUILD:
                b.selected_guild_id = r.id;
                break;
            case c.h8.TEXT_CHANNEL:
            case c.h8.VOICE_CHANNEL:
                r instanceof h.Sf && (b.selected_guild_id = null != r.guild_id ? r.guild_id : null), (b.selected_channel_id = r.id);
                break;
            case c.h8.GROUP_DM:
                b.selected_channel_id = r.id;
                break;
            case c.h8.USER:
                b.selected_user_id = r.id;
        }
    }
    E.default.track(e, b);
}
function P() {
    i.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function R() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    !(function (e) {
        let t;
        if (C.Z.isOpen()) return;
        let n = x.Z.getGuildId(),
            i = _.Z.getChannelId(n);
        if (null != i) {
            let e = f.Z.getChannel(i);
            t = null != e ? e.type : null;
        }
        E.default.track(O.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: i,
            current_channel_type: t
        });
    })(e),
        i.Z.dispatch(v({ type: 'QUICKSWITCHER_SHOW' }, y(t)));
}
function D() {
    A(O.rMx.QUICKSWITCHER_CLOSED), P();
}
function Z(e) {
    i.Z.dispatch(v({ type: 'QUICKSWITCHER_SEARCH' }, y(e)));
}
function w(e) {
    i.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: e
    });
}
function k(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    P(), A(O.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: h, record: _ } = e,
        x = { page: O.ZY5.QUICK_SWITCHER };
    switch (h) {
        case c.h8.GUILD:
            (0, p.X)(_.id, { navigationReplace: !0 });
            break;
        case c.h8.TEXT_CHANNEL:
            null != (t = f.Z.getChannel(_.id)) &&
                (0, m.Kh)(t.id, {
                    state: { analyticsSource: x },
                    navigationReplace: !0
                });
            break;
        case c.h8.VOICE_CHANNEL:
            null != (t = f.Z.getChannel(_.id)) &&
                (n ? s.Z.updateChatOpen(_.id, !0) : a.default.selectVoiceChannel(_.id),
                (0, m.Kh)(t.id, {
                    state: { analyticsSource: x },
                    navigationReplace: !0
                }));
            break;
        case c.h8.USER:
            r.Z.openPrivateChannel({
                recipientIds: [_.id],
                location: 'Quickswitcher'
            }),
                l.Z.channelListScrollTo(O.ME, f.Z.getDMFromUserId(_.id));
            break;
        case c.h8.GROUP_DM:
            (0, m.Kh)(_.id, { navigationReplace: !0 }), l.Z.channelListScrollTo(O.ME, _.id);
            break;
        case c.h8.APPLICATION:
            let E = b.Z.getActiveLibraryApplication(_.id);
            T(_.id, E, {
                analyticsParams: {
                    source: O.Sbl.QUICK_SWITCHER,
                    location: O.Sbl.QUICK_SWITCHER
                }
            });
            break;
        case c.h8.LINK:
            (0, u.Z)(_.path, { navigationReplace: !0 });
            break;
        case c.h8.IN_APP_NAVIGATION:
            if (e.record.type === d.Ky.SETTINGS) {
                let t = (0, g.default)(e.record.path);
                null != t &&
                    o.Z.open(t.section, t.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: t.source
                    });
            } else (0, u.Z)(_.path, { navigationReplace: !0 });
    }
    i.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: e
    });
}
