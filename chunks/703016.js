n.d(t, { Z: () => Y }), n(704826), n(35282), n(290780);
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
    f = n(314897),
    g = n(433355),
    h = n(592125),
    m = n(271383),
    b = n(485386),
    _ = n(430824),
    E = n(131951),
    O = n(292959),
    v = n(699516),
    y = n(944486),
    I = n(9156),
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
    let l = _.Z.getGuild(n),
        a = e
            .replace(R, x.intl.string(x.t["F+x38C"]))
            .replace(/<@!?(\d+)>/g, (e, t) => {
                var r;
                let i = C.default.getUser(t);
                return null == i ? e : null != (r = m.ZP.getNick(n, i.id)) ? r : S.ZP.getName(i);
            })
            .replace(/<@&?(\d+)>/g, (e, t) => {
                let n = null != l ? b.Z.getRole(l.id, t) : null;
                return null != n && null != n.name ? n.name : x.intl.string(x.t.dRcLA2);
            })
            .replace(/<#(\d+)>/g, (e, t) => {
                let n = h.Z.getChannel(t);
                return null == n ? e : (0, s.F6)(n, C.default, v.Z);
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
    if (!o.Zh) return !1;
    let e = d.default.locale;
    if (null == L) {
        var t;
        L = null == (t = window.speechSynthesis) ? void 0 : t.getVoices();
    }
    let n = L.filter((t) => t.lang === e || t.lang.slice(0, e.length) === e);
    w = n.length > 0 ? n[0] : null;
}
async function k(e, t, n, r, i) {
    let l = o.e6(e, n);
    null !== l &&
        (null == w && M(),
        t ? await (0, T.NB)() : null == Z || Z.removeEventListener("end", T.NB),
        l.addEventListener("end", T.NB),
        null != r && l.addEventListener("start", r),
        null != i && l.addEventListener("end", i),
        (Z = l),
        o.iq(l, w));
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
function H() {
    return null !== Z && Z.removeEventListener("end", T.NB), o.M9(), (Z = null), !0;
}
function B(e) {
    var t, n, r;
    let { message: i, channel: l } = e,
        a = i.type === P.uaV.REPLY ? u.Z.getMessageByReference(i.messageReference) : null,
        o =
            (null == a ? void 0 : a.state) === u.Y.LOADED
                ? null == a || null == (t = a.message)
                    ? void 0
                    : t.author
                : null,
        s =
            null != o
                ? null != (n = m.ZP.getNick(l.guild_id, null == o ? void 0 : o.id))
                    ? n
                    : S.ZP.getName(o)
                : null,
        c = l.getGuildId(),
        d = null != (r = m.ZP.getNick(c, i.author.id)) ? r : S.ZP.getName(i.author);
    return U(D(i.content, d, c, s), !0, l.id, i.id), !0;
}
function V(e) {
    var t, n, r, i, l, a;
    let { channelId: o, message: s, optimistic: c } = e;
    if (c || E.Z.isSelfDeaf()) return !1;
    let u = h.Z.getChannel(o);
    if (null == u) return !1;
    let d = y.Z.getChannelId(),
        b = g.ZP.getCurrentSidebarChannelId(d),
        _ = o === d || o === b,
        C = p.OW.getSetting() && s.tts && _,
        T = O.Z.getTTSType(),
        N =
            (null == (t = s.author) ? void 0 : t.id) !== f.default.getId() &&
            (T === P.PrB.ALL_CHANNELS || (T === P.PrB.SELECTED_CHANNEL && _));
    if ((C || N) && !v.Z.isBlockedOrIgnoredForMessage(s)) {
        if (A.indexOf(s.id) >= 0) return !1;
        A.unshift(s.id) > 10 && A.pop();
        let e = u.getGuildId();
        if (null != e && I.ZP.getMutedChannels(e).has(o)) return !1;
        let t =
                null !=
                (l = null != (i = m.ZP.getNick(e, null == (n = s.author) ? void 0 : n.id)) ? i : S.ZP.getName(s.author))
                    ? l
                    : "",
            c = s.type === P.uaV.REPLY ? (null == (r = s.referenced_message) ? void 0 : r.author) : null,
            d = null != c ? (null != (a = m.ZP.getNick(e, null == c ? void 0 : c.id)) ? a : S.ZP.getName(c)) : null;
        U(D(s.content, t, e, d), !1, u.id, s.id, j.f);
    }
    return !1;
}
function F(e) {
    let { id: t, channelId: n } = e,
        r = N.Z.currentMessage;
    return null != r && t === r.messageId && n === r.channelId && ((0, T.NB)(), !0);
}
function z() {
    E.Z.isSelfDeaf() && o.M9();
}
let Y = {
    init() {
        l.Z.subscribe("SPEAK_TEXT", G),
            l.Z.subscribe("SPEAK_MESSAGE", B),
            l.Z.subscribe("STOP_SPEAKING", H),
            l.Z.subscribe("MESSAGE_CREATE", V),
            l.Z.subscribe("MESSAGE_DELETE", F),
            l.Z.subscribe("AUDIO_TOGGLE_SELF_DEAF", z),
            l.Z.subscribe("USER_SETTINGS_PROTO_UPDATE", M),
            (0, a.Ql)(M);
    },
};
