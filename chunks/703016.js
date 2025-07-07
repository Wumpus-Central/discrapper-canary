(n.d(t, { Z: () => W }), n(704826), n(35282), n(290780));
var r = n(913527),
    i = n.n(r),
    l = n(570140),
    a = n(241601),
    o = n(419363),
    s = n(933557),
    c = n(660199),
    u = n(869765),
    d = n(706454),
    p = n(695346),
    h = n(314897),
    f = n(433355),
    g = n(592125),
    m = n(271383),
    b = n(485386),
    _ = n(430824),
    E = n(131951),
    O = n(292959),
    y = n(699516),
    I = n(944486),
    v = n(9156),
    C = n(594174),
    S = n(51144),
    N = n(196051),
    T = n(441729),
    P = n(653477),
    j = n(981631),
    A = n(388032);
let Z = [],
    x = null,
    L = null,
    w = null,
    R = /\|\|([\s\S]+?)\|\|/g;
function D(e, t, n, r) {
    let l = _.Z.getGuild(n),
        a = e
            .replace(R, A.intl.string(A.t['F+x38P']))
            .replace(/<@!?(\d+)>/g, (e, t) => {
                var r;
                let i = C.default.getUser(t);
                return null == i ? e : null != (r = m.ZP.getNick(n, i.id)) ? r : S.ZP.getName(i);
            })
            .replace(/<@&?(\d+)>/g, (e, t) => {
                let n = null != l ? b.Z.getRole(l.id, t) : null;
                return null != n && null != n.name ? n.name : A.intl.string(A.t.dRcLAw);
            })
            .replace(/<#(\d+)>/g, (e, t) => {
                let n = g.Z.getChannel(t);
                return null == n ? e : (0, s.F6)(n, C.default, y.Z);
            })
            .replace(/<a?:(\w+):(\d+)>/g, (e, t) => ''.concat(A.intl.string(A.t.sMOuub), ' ').concat(t))
            .replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => '/'.concat(t))
            .replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
                let r = c.Qh[n],
                    l = 1000 * parseInt(t, 10),
                    a = i()(l);
                return null != r ? r(a) : a.format();
            });
    return null == r
        ? A.intl.formatToPlainString(A.t['uIj77+'], {
              username: t,
              body: a
          })
        : A.intl.formatToPlainString(A.t['Ix4H+v'], {
              username: t,
              body: a,
              replyUsername: r
          });
}
function k() {
    if (!o.Zh) return !1;
    let e = d.default.locale;
    if (null == w) {
        var t;
        w = null == (t = window.speechSynthesis) ? void 0 : t.getVoices();
    }
    let n = w.filter((t) => t.lang === e || t.lang.slice(0, e.length) === e);
    L = n.length > 0 ? n[0] : null;
}
async function M(e, t, n, r, i) {
    let l = o.e6(e, n);
    null !== l && (null == L && k(), t ? await (0, N.NB)() : null == x || x.removeEventListener('end', N.NB), l.addEventListener('end', N.NB), null != r && l.addEventListener('start', r), null != i && l.addEventListener('end', i), (x = l), o.iq(l, L));
}
function U(e, t, n, r, i) {
    M(e, t, i, () => {
        (0, N.Bo)(n, r);
    });
}
function G(e) {
    let { text: t, interrupt: n, maxLength: r, onStart: i, onEnd: l } = e;
    M(t, n, r, i, l);
}
function B() {
    return (null !== x && x.removeEventListener('end', N.NB), o.M9(), (x = null), !0);
}
function V(e) {
    var t, n, r;
    let { message: i, channel: l } = e,
        a = i.type === j.uaV.REPLY ? u.Z.getMessageByReference(i.messageReference) : null,
        o = (null == a ? void 0 : a.state) === u.Y.LOADED ? (null == a || null == (t = a.message) ? void 0 : t.author) : null,
        s = null != o ? (null != (n = m.ZP.getNick(l.guild_id, null == o ? void 0 : o.id)) ? n : S.ZP.getName(o)) : null,
        c = l.getGuildId(),
        d = null != (r = m.ZP.getNick(c, i.author.id)) ? r : S.ZP.getName(i.author);
    return (U(D(i.content, d, c, s), !0, l.id, i.id), !0);
}
function H(e) {
    var t, n, r, i, l, a;
    let { channelId: o, message: s, optimistic: c } = e;
    if (c || E.Z.isSelfDeaf()) return !1;
    let u = g.Z.getChannel(o);
    if (null == u) return !1;
    let d = I.Z.getChannelId(),
        b = f.ZP.getCurrentSidebarChannelId(d),
        _ = o === d || o === b,
        C = p.OW.getSetting() && s.tts && _,
        N = O.Z.getTTSType(),
        T = (null == (t = s.author) ? void 0 : t.id) !== h.default.getId() && (N === j.PrB.ALL_CHANNELS || (N === j.PrB.SELECTED_CHANNEL && _));
    if ((C || T) && !y.Z.isBlockedOrIgnoredForMessage(s)) {
        if (Z.indexOf(s.id) >= 0) return !1;
        Z.unshift(s.id) > 10 && Z.pop();
        let e = u.getGuildId();
        if (null != e && v.ZP.getMutedChannels(e).has(o)) return !1;
        let t = null != (l = null != (i = m.ZP.getNick(e, null == (n = s.author) ? void 0 : n.id)) ? i : S.ZP.getName(s.author)) ? l : '',
            c = s.type === j.uaV.REPLY ? (null == (r = s.referenced_message) ? void 0 : r.author) : null,
            d = null != c ? (null != (a = m.ZP.getNick(e, null == c ? void 0 : c.id)) ? a : S.ZP.getName(c)) : null;
        U(D(s.content, t, e, d), !1, u.id, s.id, P.f);
    }
    return !1;
}
function F(e) {
    let { id: t, channelId: n } = e,
        r = T.Z.currentMessage;
    return null != r && t === r.messageId && n === r.channelId && ((0, N.NB)(), !0);
}
function z() {
    E.Z.isSelfDeaf() && o.M9();
}
let W = {
    init() {
        (l.Z.subscribe('SPEAK_TEXT', G), l.Z.subscribe('SPEAK_MESSAGE', V), l.Z.subscribe('STOP_SPEAKING', B), l.Z.subscribe('MESSAGE_CREATE', H), l.Z.subscribe('MESSAGE_DELETE', F), l.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', z), l.Z.subscribe('USER_SETTINGS_PROTO_UPDATE', k), (0, a.Ql)(k));
    }
};
