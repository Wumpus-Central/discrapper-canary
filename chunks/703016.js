n.d(t, { Z: () => z }), n(757143), n(733860);
var i = n(913527),
    l = n.n(i),
    r = n(570140),
    a = n(241601),
    s = n(419363),
    o = n(933557),
    c = n(660199),
    d = n(869765),
    u = n(706454),
    h = n(695346),
    m = n(314897),
    p = n(433355),
    g = n(592125),
    _ = n(271383),
    f = n(430824),
    E = n(131951),
    I = n(292959),
    C = n(699516),
    N = n(944486),
    v = n(9156),
    T = n(594174),
    S = n(51144),
    A = n(196051),
    b = n(441729),
    Z = n(653477),
    x = n(981631),
    L = n(388032);
let y = [],
    P = null,
    O = null,
    R = null,
    j = /\|\|([\s\S]+?)\|\|/g;
function D(e, t, n, i) {
    let r = f.Z.getGuild(n),
        a = e
            .replace(j, L.intl.string(L.t['F+x38P']))
            .replace(/<@!?(\d+)>/g, (e, t) => {
                var i;
                let l = T.default.getUser(t);
                return null == l ? e : null !== (i = _.ZP.getNick(n, l.id)) && void 0 !== i ? i : S.ZP.getName(l);
            })
            .replace(/<@&?(\d+)>/g, (e, t) => {
                let n = null != r ? f.Z.getRole(r.id, t) : null;
                return null != n && null != n.name ? n.name : L.intl.string(L.t.dRcLAw);
            })
            .replace(/<#(\d+)>/g, (e, t) => {
                let n = g.Z.getChannel(t);
                return null == n ? e : (0, o.F6)(n, T.default, C.Z);
            })
            .replace(/<a?:(\w+):(\d+)>/g, (e, t) => ''.concat(L.intl.string(L.t.sMOuub), ' ').concat(t))
            .replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => '/'.concat(t))
            .replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
                let i = c.Qh[n],
                    r = 1000 * parseInt(t, 10),
                    a = l()(r);
                return null != i ? i(a) : a.format();
            });
    return null == i
        ? L.intl.formatToPlainString(L.t['uIj77+'], {
              username: t,
              body: a
          })
        : L.intl.formatToPlainString(L.t['Ix4H+v'], {
              username: t,
              body: a,
              replyUsername: i
          });
}
function w() {
    if (!s.Zh) return !1;
    let e = u.default.locale;
    if (null == R) {
        var t;
        R = null === (t = window.speechSynthesis) || void 0 === t ? void 0 : t.getVoices();
    }
    let n = R.filter((t) => t.lang === e || t.lang.slice(0, e.length) === e);
    O = n.length > 0 ? n[0] : null;
}
async function k(e, t, n, i, l) {
    let r = s.e6(e, n);
    null !== r && (null == O && w(), t ? await (0, A.NB)() : null == P || P.removeEventListener('end', A.NB), r.addEventListener('end', A.NB), null != i && r.addEventListener('start', i), null != l && r.addEventListener('end', l), (P = r), s.iq(r, O));
}
function M(e, t, n, i, l) {
    k(e, t, l, () => {
        (0, A.Bo)(n, i);
    });
}
function U(e) {
    let { text: t, interrupt: n, maxLength: i, onStart: l, onEnd: r } = e;
    k(t, n, i, l, r);
}
function G() {
    return null !== P && P.removeEventListener('end', A.NB), s.M9(), (P = null), !0;
}
function B(e) {
    var t, n, i;
    let { message: l, channel: r } = e,
        a = l.type === x.uaV.REPLY ? d.Z.getMessageByReference(l.messageReference) : null,
        s = (null == a ? void 0 : a.state) === d.Y.LOADED ? (null == a ? void 0 : null === (t = a.message) || void 0 === t ? void 0 : t.author) : null,
        o = null != s ? (null !== (n = _.ZP.getNick(r.guild_id, null == s ? void 0 : s.id)) && void 0 !== n ? n : S.ZP.getName(s)) : null,
        c = r.getGuildId(),
        u = null !== (i = _.ZP.getNick(c, l.author.id)) && void 0 !== i ? i : S.ZP.getName(l.author);
    return M(D(l.content, u, c, o), !0, r.id, l.id), !0;
}
function V(e) {
    var t, n, i, l, r, a;
    let { channelId: s, message: o, optimistic: c } = e;
    if (c || E.Z.isSelfDeaf()) return !1;
    let d = g.Z.getChannel(s);
    if (null == d) return !1;
    let u = N.Z.getChannelId(),
        f = p.ZP.getCurrentSidebarChannelId(u),
        T = s === u || s === f,
        A = h.OW.getSetting() && o.tts && T,
        b = I.Z.getTTSType(),
        L = (null === (t = o.author) || void 0 === t ? void 0 : t.id) !== m.default.getId() && (b === x.PrB.ALL_CHANNELS || (b === x.PrB.SELECTED_CHANNEL && T));
    if ((A || L) && !C.Z.isBlockedOrIgnoredForMessage(o)) {
        if (y.indexOf(o.id) >= 0) return !1;
        y.unshift(o.id) > 10 && y.pop();
        let e = d.getGuildId();
        if (null != e && v.ZP.getMutedChannels(e).has(s)) return !1;
        let t = null !== (r = null !== (l = _.ZP.getNick(e, null === (n = o.author) || void 0 === n ? void 0 : n.id)) && void 0 !== l ? l : S.ZP.getName(o.author)) && void 0 !== r ? r : '',
            c = o.type === x.uaV.REPLY ? (null === (i = o.referenced_message) || void 0 === i ? void 0 : i.author) : null,
            u = null != c ? (null !== (a = _.ZP.getNick(e, null == c ? void 0 : c.id)) && void 0 !== a ? a : S.ZP.getName(c)) : null;
        M(D(o.content, t, e, u), !1, d.id, o.id, Z.f);
    }
    return !1;
}
function H(e) {
    let { id: t, channelId: n } = e,
        i = b.Z.currentMessage;
    return null != i && t === i.messageId && n === i.channelId && ((0, A.NB)(), !0);
}
function F() {
    E.Z.isSelfDeaf() && s.M9();
}
let z = {
    init() {
        r.Z.subscribe('SPEAK_TEXT', U), r.Z.subscribe('SPEAK_MESSAGE', B), r.Z.subscribe('STOP_SPEAKING', G), r.Z.subscribe('MESSAGE_CREATE', V), r.Z.subscribe('MESSAGE_DELETE', H), r.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', F), r.Z.subscribe('USER_SETTINGS_PROTO_UPDATE', w), (0, a.Ql)(w);
    }
};
