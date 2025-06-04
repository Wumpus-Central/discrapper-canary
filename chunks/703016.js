n.d(t, { Z: () => z }), n(704826), n(35282), n(290780);
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
    b = n(430824),
    _ = n(131951),
    E = n(292959),
    O = n(699516),
    y = n(944486),
    I = n(9156),
    v = n(594174),
    C = n(51144),
    S = n(196051),
    N = n(441729),
    T = n(653477),
    P = n(981631),
    j = n(388032);
let A = [],
    Z = null,
    x = null,
    w = null,
    L = /\|\|([\s\S]+?)\|\|/g;
function R(e, t, n, r) {
    let l = b.Z.getGuild(n),
        a = e
            .replace(L, j.intl.string(j.t['F+x38P']))
            .replace(/<@!?(\d+)>/g, (e, t) => {
                var r;
                let i = v.default.getUser(t);
                return null == i ? e : null != (r = m.ZP.getNick(n, i.id)) ? r : C.ZP.getName(i);
            })
            .replace(/<@&?(\d+)>/g, (e, t) => {
                let n = null != l ? b.Z.getRole(l.id, t) : null;
                return null != n && null != n.name ? n.name : j.intl.string(j.t.dRcLAw);
            })
            .replace(/<#(\d+)>/g, (e, t) => {
                let n = g.Z.getChannel(t);
                return null == n ? e : (0, s.F6)(n, v.default, O.Z);
            })
            .replace(/<a?:(\w+):(\d+)>/g, (e, t) => ''.concat(j.intl.string(j.t.sMOuub), ' ').concat(t))
            .replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => '/'.concat(t))
            .replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
                let r = c.Qh[n],
                    l = 1000 * parseInt(t, 10),
                    a = i()(l);
                return null != r ? r(a) : a.format();
            });
    return null == r
        ? j.intl.formatToPlainString(j.t['uIj77+'], {
              username: t,
              body: a
          })
        : j.intl.formatToPlainString(j.t['Ix4H+v'], {
              username: t,
              body: a,
              replyUsername: r
          });
}
function D() {
    if (!o.Zh) return !1;
    let e = d.default.locale;
    if (null == w) {
        var t;
        w = null == (t = window.speechSynthesis) ? void 0 : t.getVoices();
    }
    let n = w.filter((t) => t.lang === e || t.lang.slice(0, e.length) === e);
    x = n.length > 0 ? n[0] : null;
}
async function k(e, t, n, r, i) {
    let l = o.e6(e, n);
    null !== l && (null == x && D(), t ? await (0, S.NB)() : null == Z || Z.removeEventListener('end', S.NB), l.addEventListener('end', S.NB), null != r && l.addEventListener('start', r), null != i && l.addEventListener('end', i), (Z = l), o.iq(l, x));
}
function M(e, t, n, r, i) {
    k(e, t, i, () => {
        (0, S.Bo)(n, r);
    });
}
function U(e) {
    let { text: t, interrupt: n, maxLength: r, onStart: i, onEnd: l } = e;
    k(t, n, r, i, l);
}
function G() {
    return null !== Z && Z.removeEventListener('end', S.NB), o.M9(), (Z = null), !0;
}
function V(e) {
    var t, n, r;
    let { message: i, channel: l } = e,
        a = i.type === P.uaV.REPLY ? u.Z.getMessageByReference(i.messageReference) : null,
        o = (null == a ? void 0 : a.state) === u.Y.LOADED ? (null == a || null == (t = a.message) ? void 0 : t.author) : null,
        s = null != o ? (null != (n = m.ZP.getNick(l.guild_id, null == o ? void 0 : o.id)) ? n : C.ZP.getName(o)) : null,
        c = l.getGuildId(),
        d = null != (r = m.ZP.getNick(c, i.author.id)) ? r : C.ZP.getName(i.author);
    return M(R(i.content, d, c, s), !0, l.id, i.id), !0;
}
function B(e) {
    var t, n, r, i, l, a;
    let { channelId: o, message: s, optimistic: c } = e;
    if (c || _.Z.isSelfDeaf()) return !1;
    let u = g.Z.getChannel(o);
    if (null == u) return !1;
    let d = y.Z.getChannelId(),
        b = f.ZP.getCurrentSidebarChannelId(d),
        v = o === d || o === b,
        S = p.OW.getSetting() && s.tts && v,
        N = E.Z.getTTSType(),
        j = (null == (t = s.author) ? void 0 : t.id) !== h.default.getId() && (N === P.PrB.ALL_CHANNELS || (N === P.PrB.SELECTED_CHANNEL && v));
    if ((S || j) && !O.Z.isBlockedOrIgnoredForMessage(s)) {
        if (A.indexOf(s.id) >= 0) return !1;
        A.unshift(s.id) > 10 && A.pop();
        let e = u.getGuildId();
        if (null != e && I.ZP.getMutedChannels(e).has(o)) return !1;
        let t = null != (l = null != (i = m.ZP.getNick(e, null == (n = s.author) ? void 0 : n.id)) ? i : C.ZP.getName(s.author)) ? l : '',
            c = s.type === P.uaV.REPLY ? (null == (r = s.referenced_message) ? void 0 : r.author) : null,
            d = null != c ? (null != (a = m.ZP.getNick(e, null == c ? void 0 : c.id)) ? a : C.ZP.getName(c)) : null;
        M(R(s.content, t, e, d), !1, u.id, s.id, T.f);
    }
    return !1;
}
function H(e) {
    let { id: t, channelId: n } = e,
        r = N.Z.currentMessage;
    return null != r && t === r.messageId && n === r.channelId && ((0, S.NB)(), !0);
}
function F() {
    _.Z.isSelfDeaf() && o.M9();
}
let z = {
    init() {
        l.Z.subscribe('SPEAK_TEXT', U), l.Z.subscribe('SPEAK_MESSAGE', V), l.Z.subscribe('STOP_SPEAKING', G), l.Z.subscribe('MESSAGE_CREATE', B), l.Z.subscribe('MESSAGE_DELETE', H), l.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', F), l.Z.subscribe('USER_SETTINGS_PROTO_UPDATE', D), (0, a.Ql)(D);
    }
};
