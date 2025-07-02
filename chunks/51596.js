(n.d(t, {
    $Z: () => D,
    Cp: () => Z,
    F_: () => A,
    Se: () => L,
    tF: () => k,
    yC: () => w
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(388685));
var i = n(481060),
    r = n(570140),
    s = n(493683),
    l = n(475179),
    a = n(925549),
    o = n(287734),
    c = n(230711),
    d = n(212819),
    u = n(815372),
    m = n(336197),
    g = n(359110),
    p = n(769654),
    h = n(722589),
    f = n(131704),
    b = n(592125),
    x = n(283595),
    _ = n(944486),
    E = n(914010),
    j = n(626135),
    C = n(777754),
    O = n(823385),
    S = n(981631),
    v = n(176505);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
let N = () => Promise.resolve();
N = n(346329).playApplication;
let I = Object.freeze({
        [d.xQ.USER]: d.h8.USER,
        [d.xQ.TEXT_CHANNEL]: d.h8.TEXT_CHANNEL,
        [d.xQ.VOICE_CHANNEL]: d.h8.VOICE_CHANNEL,
        [d.xQ.GUILD]: d.h8.GUILD,
        [d.xQ.APPLICATION]: d.h8.APPLICATION
    }),
    y = new RegExp('^'.concat(d.xQ.USER, '|').concat(d.xQ.TEXT_CHANNEL, '|').concat(d.xQ.VOICE_CHANNEL, '|\\').concat(d.xQ.GUILD, '|\\').concat(d.xQ.APPLICATION));
function A(e) {
    var t;
    let n,
        [i, r] = ((n = null != (t = I[e.charAt(0)]) ? t : null), [e.replace(y, ''), n]);
    return {
        query: i,
        queryMode: r
    };
}
function P(e, t) {
    let { results: n, queryMode: i, query: r, maxQueryLength: s } = O.Z.getProps(),
        l = E.Z.getGuildId(),
        a = _.Z.getChannelId(l),
        o = n[(0, d.gJ)(d.a8.DOWN, -1, n)],
        c = C.Z.isEmail(r),
        u = C.Z.isPhoneNumber(r),
        m = C.Z.isUserTagLike(r),
        g = null != a && (0, v.AB)(a),
        p = (e) => (null == e ? null : e.type === d.h8.IN_APP_NAVIGATION ? e.type + '_' + e.record.type : e.type),
        h = {
            current_channel_id: g ? void 0 : a,
            current_channel_static_route: g ? a : void 0,
            current_guild_id: l,
            query_mode: null != i ? i : 'GENERAL',
            query_length: r.length,
            max_query_length: s,
            is_email_like: c,
            is_phone_like: u,
            is_username_like: m,
            query: c || u || m ? null : r,
            top_result_type: p(o),
            top_result_score: null != o ? o.score : null,
            num_results_total: O.Z.getResultTotals(),
            num_results_users: O.Z.getResultTotals(d.h8.USER),
            num_results_text_channels: O.Z.getResultTotals(d.h8.TEXT_CHANNEL),
            num_results_voice_channels: O.Z.getResultTotals(d.h8.VOICE_CHANNEL),
            num_results_guilds: O.Z.getResultTotals(d.h8.GUILD),
            num_results_group_dms: O.Z.getResultTotals(d.h8.GROUP_DM)
        };
    if (null != a) {
        let e = b.Z.getChannel(a);
        h.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: i, record: r } = t;
        switch (((h.selected_type = p(t)), (h.selected_score = i), (h.selected_index = n.indexOf(t)), e)) {
            case d.h8.GUILD:
                h.selected_guild_id = r.id;
                break;
            case d.h8.TEXT_CHANNEL:
            case d.h8.VOICE_CHANNEL:
                (r instanceof f.Sf && (h.selected_guild_id = null != r.guild_id ? r.guild_id : null), (h.selected_channel_id = r.id));
                break;
            case d.h8.GROUP_DM:
                h.selected_channel_id = r.id;
                break;
            case d.h8.USER:
                h.selected_user_id = r.id;
        }
    }
    j.default.track(e, h);
}
function R() {
    r.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function D() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    (!(function (e) {
        let t;
        if (O.Z.isOpen()) return;
        let n = E.Z.getGuildId(),
            i = _.Z.getChannelId(n);
        if (null != i) {
            let e = b.Z.getChannel(i);
            t = null != e ? e.type : null;
        }
        j.default.track(S.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: i,
            current_channel_type: t
        });
    })(e),
        r.Z.dispatch(T({ type: 'QUICKSWITCHER_SHOW' }, A(t))));
}
function Z() {
    (P(S.rMx.QUICKSWITCHER_CLOSED), R());
}
function w(e) {
    r.Z.dispatch(T({ type: 'QUICKSWITCHER_SEARCH' }, A(e)));
}
function k(e) {
    r.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: e
    });
}
function L(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (R(), (0, i.pTH)(), P(S.rMx.QUICKSWITCHER_RESULT_SELECTED, e));
    let { type: f, record: _ } = e,
        E = { page: S.ZY5.QUICK_SWITCHER };
    switch (f) {
        case d.h8.GUILD:
            (0, p.X)(_.id, { navigationReplace: !0 });
            break;
        case d.h8.TEXT_CHANNEL:
            null != (t = b.Z.getChannel(_.id)) &&
                (0, g.Kh)(t.id, {
                    state: { analyticsSource: E },
                    navigationReplace: !0
                });
            break;
        case d.h8.VOICE_CHANNEL:
            null != (t = b.Z.getChannel(_.id)) &&
                (n ? l.Z.updateChatOpen(_.id, !0) : o.default.selectVoiceChannel(_.id),
                (0, g.Kh)(t.id, {
                    state: { analyticsSource: E },
                    navigationReplace: !0
                }));
            break;
        case d.h8.USER:
            (s.Z.openPrivateChannel({
                recipientIds: [_.id],
                location: 'Quickswitcher'
            }),
                a.Z.channelListScrollTo(S.ME, b.Z.getDMFromUserId(_.id)));
            break;
        case d.h8.GROUP_DM:
            ((0, g.Kh)(_.id, { navigationReplace: !0 }), a.Z.channelListScrollTo(S.ME, _.id));
            break;
        case d.h8.APPLICATION:
            let j = x.Z.getActiveLibraryApplication(_.id);
            N(_.id, j, {
                analyticsParams: {
                    source: S.Sbl.QUICK_SWITCHER,
                    location: S.Sbl.QUICK_SWITCHER
                }
            });
            break;
        case d.h8.LINK:
            (0, m.Z)(_.path, { navigationReplace: !0 });
            break;
        case d.h8.IN_APP_NAVIGATION:
            if (e.record.type === u.Ky.SETTINGS) {
                let t = (0, h.default)(e.record.path);
                null != t &&
                    c.Z.open(t.section, t.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: t.source
                    });
            } else (0, m.Z)(_.path, { navigationReplace: !0 });
    }
    r.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: e
    });
}
