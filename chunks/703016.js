n.d(t, { Z: () => Y }), n(704826), n(35282), n(290780);
var r = n(913527),
    i = n.n(r),
    l = n(570140),
    a = n(241601),
    s = n(419363),
    o = n(933557),
    c = n(660199),
    u = n(869765),
    d = n(706454),
    p = n(695346),
    f = n(314897),
    m = n(433355),
    h = n(592125),
    g = n(271383),
    _ = n(485386),
    b = n(430824),
    E = n(131951),
    O = n(292959),
    I = n(699516),
    y = n(944486),
    v = n(9156),
    C = n(594174),
    S = n(51144),
    T = n(196051),
    N = n(441729),
    j = n(653477),
    P = n(981631),
    x = n(388032);
let A = [],
    Z = null,
    w = null,
    L = null,
    R = /\|\|([\s\S]+?)\|\|/g;
function D(e, t, n, r) {
    let l = b.Z.getGuild(n),
        a = e
            .replace(R, x.intl.string(x.t["F+x38C"]))
            .replace(/<@!?(\d+)>/g, (e, t) => {
                var r;
                let i = C.default.getUser(t);
                return null == i ? e : null != (r = g.ZP.getNick(n, i.id)) ? r : S.ZP.getName(i);
            })
            .replace(/<@&?(\d+)>/g, (e, t) => {
                let n = null != l ? _.Z.getRole(l.id, t) : null;
                return null != n && null != n.name ? n.name : x.intl.string(x.t.dRcLA2);
            })
            .replace(/<#(\d+)>/g, (e, t) => {
                let n = h.Z.getChannel(t);
                return null == n ? e : (0, o.F6)(n, C.default, I.Z);
            })
            .replace(/<a?:(\w+):(\d+)>/g, (e, t) => "".concat(x.intl.string(x.t.sMOuuS), " ").concat(t))
            .replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => "/".concat(t))
            .replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
                let r = c.Qh[n],
                    l = 1000 * parseInt(t, 10),
                    a = i()(l);
                return null != r ? r(a) : a.format();
            });
    return null == r
        ? x.intl.formatToPlainString(x.t["uIj77/"], {
              username: t,
              body: a,
          })
        : x.intl.formatToPlainString(x.t["Ix4H+j"], {
              username: t,
              body: a,
              replyUsername: r,
          });
}
function M() {
    if (!s.Zh) return !1;
    let e = d.default.locale;
    if (null == L) {
        var t;
        L = null == (t = window.speechSynthesis) ? void 0 : t.getVoices();
    }
    let n = L.filter((t) => t.lang === e || t.lang.slice(0, e.length) === e);
    w = n.length > 0 ? n[0] : null;
}
async function k(e, t, n, r, i) {
    let l = s.e6(e, n);
    null !== l &&
        (null == w && M(),
        t ? await (0, T.NB)() : null == Z || Z.removeEventListener("end", T.NB),
        l.addEventListener("end", T.NB),
        null != r && l.addEventListener("start", r),
        null != i && l.addEventListener("end", i),
        (Z = l),
        s.iq(l, w));
}
function U(e, t, n, r, i) {
    k(e, t, i, () => {
        (0, T.Bo)(n, r);
    });
}
function G(e) {
    let { text: t, interrupt: n, maxLength: r, onStart: i, onEnd: l } = e;
    k(t, n, r, i, l);
}
function B() {
    return null !== Z && Z.removeEventListener("end", T.NB), s.M9(), (Z = null), !0;
}
function H(e) {
    var t, n, r;
    let { message: i, channel: l } = e,
        a = i.type === P.uaV.REPLY ? u.Z.getMessageByReference(i.messageReference) : null,
        s =
            (null == a ? void 0 : a.state) === u.Y.LOADED
                ? null == a || null == (t = a.message)
                    ? void 0
                    : t.author
                : null,
        o =
            null != s
                ? null != (n = g.ZP.getNick(l.guild_id, null == s ? void 0 : s.id))
                    ? n
                    : S.ZP.getName(s)
                : null,
        c = l.getGuildId(),
        d = null != (r = g.ZP.getNick(c, i.author.id)) ? r : S.ZP.getName(i.author);
    return U(D(i.content, d, c, o), !0, l.id, i.id), !0;
}
function V(e) {
    var t, n, r, i, l, a;
    let { channelId: s, message: o, optimistic: c } = e;
    if (c || E.Z.isSelfDeaf()) return !1;
    let u = h.Z.getChannel(s);
    if (null == u) return !1;
    let d = y.Z.getChannelId(),
        _ = m.ZP.getCurrentSidebarChannelId(d),
        b = s === d || s === _,
        C = p.OW.getSetting() && o.tts && b,
        T = O.Z.getTTSType(),
        N =
            (null == (t = o.author) ? void 0 : t.id) !== f.default.getId() &&
            (T === P.PrB.ALL_CHANNELS || (T === P.PrB.SELECTED_CHANNEL && b));
    if ((C || N) && !I.Z.isBlockedOrIgnoredForMessage(o)) {
        if (A.indexOf(o.id) >= 0) return !1;
        A.unshift(o.id) > 10 && A.pop();
        let e = u.getGuildId();
        if (null != e && v.ZP.getMutedChannels(e).has(s)) return !1;
        let t =
                null !=
                (l = null != (i = g.ZP.getNick(e, null == (n = o.author) ? void 0 : n.id)) ? i : S.ZP.getName(o.author))
                    ? l
                    : "",
            c = o.type === P.uaV.REPLY ? (null == (r = o.referenced_message) ? void 0 : r.author) : null,
            d = null != c ? (null != (a = g.ZP.getNick(e, null == c ? void 0 : c.id)) ? a : S.ZP.getName(c)) : null;
        U(D(o.content, t, e, d), !1, u.id, o.id, j.f);
    }
    return !1;
}
function F(e) {
    let { id: t, channelId: n } = e,
        r = N.Z.currentMessage;
    return null != r && t === r.messageId && n === r.channelId && ((0, T.NB)(), !0);
}
function z() {
    E.Z.isSelfDeaf() && s.M9();
}
let Y = {
    init() {
        l.Z.subscribe("SPEAK_TEXT", G),
            l.Z.subscribe("SPEAK_MESSAGE", H),
            l.Z.subscribe("STOP_SPEAKING", B),
            l.Z.subscribe("MESSAGE_CREATE", V),
            l.Z.subscribe("MESSAGE_DELETE", F),
            l.Z.subscribe("AUDIO_TOGGLE_SELF_DEAF", z),
            l.Z.subscribe("USER_SETTINGS_PROTO_UPDATE", M),
            (0, a.Ql)(M);
    },
};
