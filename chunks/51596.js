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
var r = n(570140),
    i = n(493683),
    s = n(475179),
    a = n(925549),
    l = n(287734),
    o = n(230711),
    c = n(212819),
    d = n(815372),
    u = n(336197),
    m = n(359110),
    g = n(769654),
    p = n(722589),
    h = n(131704),
    f = n(592125),
    b = n(283595),
    _ = n(944486),
    N = n(914010),
    x = n(626135),
    E = n(777754),
    j = n(823385),
    C = n(981631),
    O = n(176505);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let v = () => Promise.resolve();
v = n(346329).playApplication;
let T = Object.freeze({
        [c.xQ.USER]: c.h8.USER,
        [c.xQ.TEXT_CHANNEL]: c.h8.TEXT_CHANNEL,
        [c.xQ.VOICE_CHANNEL]: c.h8.VOICE_CHANNEL,
        [c.xQ.GUILD]: c.h8.GUILD,
        [c.xQ.APPLICATION]: c.h8.APPLICATION
    }),
    I = new RegExp('^'.concat(c.xQ.USER, '|').concat(c.xQ.TEXT_CHANNEL, '|').concat(c.xQ.VOICE_CHANNEL, '|\\').concat(c.xQ.GUILD, '|\\').concat(c.xQ.APPLICATION));
function y(e) {
    var t;
    let n,
        [r, i] = ((n = null != (t = T[e.charAt(0)]) ? t : null), [e.replace(I, ''), n]);
    return {
        query: r,
        queryMode: i
    };
}
function A(e, t) {
    let { results: n, queryMode: r, query: i, maxQueryLength: s } = j.Z.getProps(),
        a = N.Z.getGuildId(),
        l = _.Z.getChannelId(a),
        o = n[(0, c.gJ)(c.a8.DOWN, -1, n)],
        d = E.Z.isEmail(i),
        u = E.Z.isPhoneNumber(i),
        m = E.Z.isUserTagLike(i),
        g = null != l && (0, O.AB)(l),
        p = (e) => (null == e ? null : e.type === c.h8.IN_APP_NAVIGATION ? e.type + '_' + e.record.type : e.type),
        b = {
            current_channel_id: g ? void 0 : l,
            current_channel_static_route: g ? l : void 0,
            current_guild_id: a,
            query_mode: null != r ? r : 'GENERAL',
            query_length: i.length,
            max_query_length: s,
            is_email_like: d,
            is_phone_like: u,
            is_username_like: m,
            query: d || u || m ? null : i,
            top_result_type: p(o),
            top_result_score: null != o ? o.score : null,
            num_results_total: j.Z.getResultTotals(),
            num_results_users: j.Z.getResultTotals(c.h8.USER),
            num_results_text_channels: j.Z.getResultTotals(c.h8.TEXT_CHANNEL),
            num_results_voice_channels: j.Z.getResultTotals(c.h8.VOICE_CHANNEL),
            num_results_guilds: j.Z.getResultTotals(c.h8.GUILD),
            num_results_group_dms: j.Z.getResultTotals(c.h8.GROUP_DM)
        };
    if (null != l) {
        let e = f.Z.getChannel(l);
        b.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: r, record: i } = t;
        switch (((b.selected_type = p(t)), (b.selected_score = r), (b.selected_index = n.indexOf(t)), e)) {
            case c.h8.GUILD:
                b.selected_guild_id = i.id;
                break;
            case c.h8.TEXT_CHANNEL:
            case c.h8.VOICE_CHANNEL:
                i instanceof h.Sf && (b.selected_guild_id = null != i.guild_id ? i.guild_id : null), (b.selected_channel_id = i.id);
                break;
            case c.h8.GROUP_DM:
                b.selected_channel_id = i.id;
                break;
            case c.h8.USER:
                b.selected_user_id = i.id;
        }
    }
    x.default.track(e, b);
}
function P() {
    r.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function R() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    !(function (e) {
        let t;
        if (j.Z.isOpen()) return;
        let n = N.Z.getGuildId(),
            r = _.Z.getChannelId(n);
        if (null != r) {
            let e = f.Z.getChannel(r);
            t = null != e ? e.type : null;
        }
        x.default.track(C.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: r,
            current_channel_type: t
        });
    })(e),
        r.Z.dispatch(S({ type: 'QUICKSWITCHER_SHOW' }, y(t)));
}
function D() {
    A(C.rMx.QUICKSWITCHER_CLOSED), P();
}
function Z(e) {
    r.Z.dispatch(S({ type: 'QUICKSWITCHER_SEARCH' }, y(e)));
}
function w(e) {
    r.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: e
    });
}
function k(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    P(), A(C.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: h, record: _ } = e,
        N = { page: C.ZY5.QUICK_SWITCHER };
    switch (h) {
        case c.h8.GUILD:
            (0, g.X)(_.id, { navigationReplace: !0 });
            break;
        case c.h8.TEXT_CHANNEL:
            null != (t = f.Z.getChannel(_.id)) &&
                (0, m.Kh)(t.id, {
                    state: { analyticsSource: N },
                    navigationReplace: !0
                });
            break;
        case c.h8.VOICE_CHANNEL:
            null != (t = f.Z.getChannel(_.id)) &&
                (n ? s.Z.updateChatOpen(_.id, !0) : l.default.selectVoiceChannel(_.id),
                (0, m.Kh)(t.id, {
                    state: { analyticsSource: N },
                    navigationReplace: !0
                }));
            break;
        case c.h8.USER:
            i.Z.openPrivateChannel([_.id], !1, !1, 'Quickswitcher'), a.Z.channelListScrollTo(C.ME, f.Z.getDMFromUserId(_.id));
            break;
        case c.h8.GROUP_DM:
            (0, m.Kh)(_.id, { navigationReplace: !0 }), a.Z.channelListScrollTo(C.ME, _.id);
            break;
        case c.h8.APPLICATION:
            let x = b.Z.getActiveLibraryApplication(_.id);
            v(_.id, x, {
                analyticsParams: {
                    source: C.Sbl.QUICK_SWITCHER,
                    location: C.Sbl.QUICK_SWITCHER
                }
            });
            break;
        case c.h8.LINK:
            (0, u.Z)(_.path, { navigationReplace: !0 });
            break;
        case c.h8.IN_APP_NAVIGATION:
            if (e.record.type === d.Ky.SETTINGS) {
                let t = (0, p.default)(e.record.path);
                null != t &&
                    o.Z.open(t.section, t.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: t.source
                    });
            } else (0, u.Z)(_.path, { navigationReplace: !0 });
    }
    r.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: e
    });
}
