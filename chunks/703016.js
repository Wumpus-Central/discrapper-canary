n(757143), n(733860);
var i = n(913527),
    r = n.n(i),
    l = n(570140),
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
    f = n(271383),
    _ = n(430824),
    E = n(131951),
    I = n(292959),
    C = n(699516),
    N = n(944486),
    v = n(9156),
    S = n(594174),
    T = n(51144),
    b = n(196051),
    A = n(441729),
    Z = n(653477),
    x = n(981631),
    L = n(388032);
let P = [],
    O = null,
    y = null,
    R = null,
    j = /\|\|([\s\S]+?)\|\|/g;
function D(e, t, n, i) {
    let l = _.Z.getGuild(n),
        a = e
            .replace(j, L.intl.string(L.t['F+x38P']))
            .replace(/<@!?(\d+)>/g, (e, t) => {
                var i;
                let r = S.default.getUser(t);
                if (null == r) return e;
                return null !== (i = f.ZP.getNick(n, r.id)) && void 0 !== i ? i : T.ZP.getName(r);
            })
            .replace(/<@&?(\d+)>/g, (e, t) => {
                let n = null != l ? _.Z.getRole(l.id, t) : null;
                return null != n && null != n.name ? n.name : L.intl.string(L.t.dRcLAw);
            })
            .replace(/<#(\d+)>/g, (e, t) => {
                let n = g.Z.getChannel(t);
                return null == n ? e : (0, o.F6)(n, S.default, C.Z);
            })
            .replace(/<a?:(\w+):(\d+)>/g, (e, t) => ''.concat(L.intl.string(L.t.sMOuub), ' ').concat(t))
            .replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => '/'.concat(t))
            .replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
                let i = c.Qh[n],
                    l = 1000 * parseInt(t, 10),
                    a = r()(l);
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
function M() {
    if (!s.Zh) return !1;
    let e = u.default.locale;
    if (null == R) {
        var t;
        R = null === (t = window.speechSynthesis) || void 0 === t ? void 0 : t.getVoices();
    }
    let n = R.filter((t) => t.lang === e || t.lang.slice(0, e.length) === e || !1);
    y = n.length > 0 ? n[0] : null;
}
async function w(e, t, n, i, r) {
    let l = s.e6(e, n);
    null !== l && (null == y && M(), t ? await (0, b.NB)() : null == O || O.removeEventListener('end', b.NB), l.addEventListener('end', b.NB), null != i && l.addEventListener('start', i), null != r && l.addEventListener('end', r), (O = l), s.iq(l, y));
}
function k(e, t, n, i, r) {
    w(e, t, r, () => {
        (0, b.Bo)(n, i);
    });
}
function U(e) {
    let { text: t, interrupt: n, maxLength: i, onStart: r, onEnd: l } = e;
    w(t, n, i, r, l);
}
function G() {
    return null !== O && O.removeEventListener('end', b.NB), s.M9(), (O = null), !0;
}
function B(e) {
    var t, n, i;
    let { message: r, channel: l } = e,
        a = r.type === x.uaV.REPLY ? d.Z.getMessageByReference(r.messageReference) : null,
        s = (null == a ? void 0 : a.state) === d.Y.LOADED ? (null == a ? void 0 : null === (t = a.message) || void 0 === t ? void 0 : t.author) : null,
        o = null != s ? (null !== (n = f.ZP.getNick(l.guild_id, null == s ? void 0 : s.id)) && void 0 !== n ? n : T.ZP.getName(s)) : null,
        c = l.getGuildId(),
        u = null !== (i = f.ZP.getNick(c, r.author.id)) && void 0 !== i ? i : T.ZP.getName(r.author);
    return k(D(r.content, u, c, o), !0, l.id, r.id), !0;
}
function V(e) {
    var t, n, i, r, l, a;
    let { channelId: s, message: o, optimistic: c } = e;
    if (c || E.Z.isSelfDeaf()) return !1;
    let d = g.Z.getChannel(s);
    if (null == d) return !1;
    let u = N.Z.getChannelId(),
        _ = p.ZP.getCurrentSidebarChannelId(u),
        S = s === u || s === _,
        b = h.OW.getSetting() && o.tts && S,
        A = I.Z.getTTSType(),
        L = (null === (t = o.author) || void 0 === t ? void 0 : t.id) !== m.default.getId() && (A === x.PrB.ALL_CHANNELS || (A === x.PrB.SELECTED_CHANNEL && S));
    if ((b || L) && !C.Z.isBlockedOrIgnoredForMessage(o)) {
        if (P.indexOf(o.id) >= 0) return !1;
        P.unshift(o.id) > 10 && P.pop();
        let e = d.getGuildId();
        if (null != e && v.ZP.getMutedChannels(e).has(s)) return !1;
        let t = null !== (l = null !== (r = f.ZP.getNick(e, null === (n = o.author) || void 0 === n ? void 0 : n.id)) && void 0 !== r ? r : T.ZP.getName(o.author)) && void 0 !== l ? l : '',
            c = o.type === x.uaV.REPLY ? (null === (i = o.referenced_message) || void 0 === i ? void 0 : i.author) : null,
            u = null != c ? (null !== (a = f.ZP.getNick(e, null == c ? void 0 : c.id)) && void 0 !== a ? a : T.ZP.getName(c)) : null;
        k(D(o.content, t, e, u), !1, d.id, o.id, Z.f);
    }
    return !1;
}
function H(e) {
    let { id: t, channelId: n } = e,
        i = A.Z.currentMessage;
    return null != i && t === i.messageId && n === i.channelId && ((0, b.NB)(), !0);
}
function F() {
    E.Z.isSelfDeaf() && s.M9();
}
t.Z = {
    init() {
        l.Z.subscribe('SPEAK_TEXT', U), l.Z.subscribe('SPEAK_MESSAGE', B), l.Z.subscribe('STOP_SPEAKING', G), l.Z.subscribe('MESSAGE_CREATE', V), l.Z.subscribe('MESSAGE_DELETE', H), l.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', F), l.Z.subscribe('USER_SETTINGS_PROTO_UPDATE', M), (0, a.Ql)(M);
    }
};
