n.d(t, { Z: () => F }), n(757143), n(301563), n(733860);
var r = n(913527),
    i = n.n(r),
    l = n(570140),
    o = n(241601),
    a = n(419363),
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
    N = n(944486),
    v = n(9156),
    y = n(594174),
    I = n(51144),
    C = n(196051),
    S = n(441729),
    T = n(653477),
    P = n(981631),
    j = n(388032);
let A = [],
    Z = null,
    x = null,
    L = null,
    w = /\|\|([\s\S]+?)\|\|/g;
function R(e, t, n, r) {
    let l = b.Z.getGuild(n),
        o = e
            .replace(w, j.NW.string(j.t['F+x38P']))
            .replace(/<@!?(\d+)>/g, (e, t) => {
                var r;
                let i = y.default.getUser(t);
                return null == i ? e : null !== (r = m.ZP.getNick(n, i.id)) && void 0 !== r ? r : I.ZP.getName(i);
            })
            .replace(/<@&?(\d+)>/g, (e, t) => {
                let n = null != l ? b.Z.getRole(l.id, t) : null;
                return null != n && null != n.name ? n.name : j.NW.string(j.t.dRcLAw);
            })
            .replace(/<#(\d+)>/g, (e, t) => {
                let n = g.Z.getChannel(t);
                return null == n ? e : (0, s.F6)(n, y.default, O.Z);
            })
            .replace(/<a?:(\w+):(\d+)>/g, (e, t) => ''.concat(j.NW.string(j.t.sMOuub), ' ').concat(t))
            .replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => '/'.concat(t))
            .replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
                let r = c.Qh[n],
                    l = 1000 * parseInt(t, 10),
                    o = i()(l);
                return null != r ? r(o) : o.format();
            });
    return null == r
        ? j.NW.formatToPlainString(j.t['uIj77+'], {
              username: t,
              body: o
          })
        : j.NW.formatToPlainString(j.t['Ix4H+v'], {
              username: t,
              body: o,
              replyUsername: r
          });
}
function D() {
    if (!a.Zh) return !1;
    let e = d.default.locale;
    if (null == L) {
        var t;
        L = null === (t = window.speechSynthesis) || void 0 === t ? void 0 : t.getVoices();
    }
    let n = L.filter((t) => t.lang === e || t.lang.slice(0, e.length) === e);
    x = n.length > 0 ? n[0] : null;
}
async function k(e, t, n, r, i) {
    let l = a.e6(e, n);
    null !== l && (null == x && D(), t ? await (0, C.NB)() : null == Z || Z.removeEventListener('end', C.NB), l.addEventListener('end', C.NB), null != r && l.addEventListener('start', r), null != i && l.addEventListener('end', i), (Z = l), a.iq(l, x));
}
function M(e, t, n, r, i) {
    k(e, t, i, () => {
        (0, C.Bo)(n, r);
    });
}
function U(e) {
    let { text: t, interrupt: n, maxLength: r, onStart: i, onEnd: l } = e;
    k(t, n, r, i, l);
}
function G() {
    return null !== Z && Z.removeEventListener('end', C.NB), a.M9(), (Z = null), !0;
}
function W(e) {
    var t, n, r;
    let { message: i, channel: l } = e,
        o = i.type === P.uaV.REPLY ? u.Z.getMessageByReference(i.messageReference) : null,
        a = (null == o ? void 0 : o.state) === u.Y.LOADED ? (null == o ? void 0 : null === (t = o.message) || void 0 === t ? void 0 : t.author) : null,
        s = null != a ? (null !== (n = m.ZP.getNick(l.guild_id, null == a ? void 0 : a.id)) && void 0 !== n ? n : I.ZP.getName(a)) : null,
        c = l.getGuildId(),
        d = null !== (r = m.ZP.getNick(c, i.author.id)) && void 0 !== r ? r : I.ZP.getName(i.author);
    return M(R(i.content, d, c, s), !0, l.id, i.id), !0;
}
function V(e) {
    var t, n, r, i, l, o;
    let { channelId: a, message: s, optimistic: c } = e;
    if (c || _.Z.isSelfDeaf()) return !1;
    let u = g.Z.getChannel(a);
    if (null == u) return !1;
    let d = N.Z.getChannelId(),
        b = f.ZP.getCurrentSidebarChannelId(d),
        y = a === d || a === b,
        C = p.OW.getSetting() && s.tts && y,
        S = E.Z.getTTSType(),
        j = (null === (t = s.author) || void 0 === t ? void 0 : t.id) !== h.default.getId() && (S === P.PrB.ALL_CHANNELS || (S === P.PrB.SELECTED_CHANNEL && y));
    if ((C || j) && !O.Z.isBlockedOrIgnoredForMessage(s)) {
        if (A.indexOf(s.id) >= 0) return !1;
        A.unshift(s.id) > 10 && A.pop();
        let e = u.getGuildId();
        if (null != e && v.ZP.getMutedChannels(e).has(a)) return !1;
        let t = null !== (l = null !== (i = m.ZP.getNick(e, null === (n = s.author) || void 0 === n ? void 0 : n.id)) && void 0 !== i ? i : I.ZP.getName(s.author)) && void 0 !== l ? l : '',
            c = s.type === P.uaV.REPLY ? (null === (r = s.referenced_message) || void 0 === r ? void 0 : r.author) : null,
            d = null != c ? (null !== (o = m.ZP.getNick(e, null == c ? void 0 : c.id)) && void 0 !== o ? o : I.ZP.getName(c)) : null;
        M(R(s.content, t, e, d), !1, u.id, s.id, T.f);
    }
    return !1;
}
function B(e) {
    let { id: t, channelId: n } = e,
        r = S.Z.currentMessage;
    return null != r && t === r.messageId && n === r.channelId && ((0, C.NB)(), !0);
}
function H() {
    _.Z.isSelfDeaf() && a.M9();
}
let F = {
    init() {
        l.Z.subscribe('SPEAK_TEXT', U), l.Z.subscribe('SPEAK_MESSAGE', W), l.Z.subscribe('STOP_SPEAKING', G), l.Z.subscribe('MESSAGE_CREATE', V), l.Z.subscribe('MESSAGE_DELETE', B), l.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', H), l.Z.subscribe('USER_SETTINGS_PROTO_UPDATE', D), (0, o.Ql)(D);
    }
};
