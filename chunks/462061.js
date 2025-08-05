n.d(t, {
    T: () => B,
    Z: () => Z
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(475179),
    u = n(763520),
    d = n(358221),
    f = n(414910),
    _ = n(502053),
    p = n(965048),
    h = n(266910),
    m = n(352978),
    g = n(928518),
    E = n(518950),
    b = n(470956),
    y = n(314897),
    O = n(271383),
    v = n(131951),
    I = n(451478),
    T = n(5192),
    S = n(44136),
    A = n(351483),
    N = n(249212),
    C = n(853476),
    w = n(981631),
    R = n(65154),
    P = n(388032),
    D = n(519417);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            }));
    }
    return e;
}
function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = 124,
    U = l.EFr.SIZE_80,
    G = l.EFr.SIZE_40;
function B(e) {
    let { channelId: t, participant: n } = e;
    return (0, b.Eu)(t, n.id)
        ? (0, r.jsx)(l.ua7, {
              text: P.intl.string(P.t.HFwRpq),
              position: 'bottom',
              color: l.FGA.GREY,
              children: (e) =>
                  (0, r.jsx)(
                      'div',
                      j(x({}, e), {
                          className: D.interactive,
                          children: (0, r.jsx)(l.Mgn, { color: l.TVs.colors.STATUS_WARNING_BACKGROUND })
                      })
                  )
          })
        : (0, r.jsx)(C.Z, { userId: n.user.id });
}
function Z(e) {
    let { participant: t, channel: n, inCall: a, width: l, selected: b, fit: C, onVideoResize: L, blocked: x, ignored: k, noVideoRender: j = !1, pulseSpeakingIndicator: B = !1, inOverlayPopout: Z = !1, paused: F = !1 } = e,
        V = v.Z.getVideoComponent(),
        H = (0, s.e7)([y.default], () => y.default.getId()),
        { user: Y, streamId: W, speaking: K } = t,
        z = Y.id === H,
        q = (0, S.ZP)(t),
        $ = (0, s.e7)([I.Z], () => I.Z.isFocused()),
        X = (0, s.e7)([g.Z], () => g.Z.getWindowFocused(w.KJ3.CHANNEL_CALL_POPOUT)),
        Q = (0, s.e7)([v.Z], () => null != Y.id && v.Z.isLocalVideoDisabled(Y.id, (0, f.Z)(t.type)), [Y.id, t.type]),
        J = (0, s.e7)([O.ZP], () => O.ZP.isGuestOrLurker(n.guild_id, Y.id)),
        ee = T.ZP.getName(n.getGuildId(), n.id, Y) + (J ? ' '.concat(P.intl.string(P.t['pFO/Pj'])) : ''),
        et = K && (X || $),
        en = l < M ? G : U,
        { avatarSrc: er, avatarDecorationSrc: ei } = (0, E.Z)({
            userId: Y.id,
            guildId: n.guild_id,
            size: en,
            animateOnHover: !et
        }),
        ea = (0, s.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)),
        eo = (0, p.Z)(R.Yn.DEFAULT, t.user.id),
        es = (0, _.Z)(t.user.id),
        el = {
            channel: n,
            selectedParticipant: ea,
            user: Y
        },
        ec = i.useRef(el);
    (i.useEffect(() => {
        ec.current = el;
    }),
        i.useEffect(() => {
            let { channel: e, selectedParticipant: t, user: n } = ec.current;
            e.isGuildStageVoice() && !q && (null == t ? void 0 : t.id) === n.id && c.Z.selectParticipant(e.id, null);
        }, [q]));
    let eu = !1;
    return a && !Q && !j && q && !b && null != V && v.Z.supports(R.AN.VIDEO)
        ? eu && !Z
            ? (0, r.jsx)(A.Z, {
                  selected: b,
                  width: l
              })
            : null != eo && null == es
              ? (0, r.jsx)(N.Z, {
                    avError: eo,
                    userId: t.id,
                    width: l,
                    selected: b
                })
              : (0, r.jsx)(
                    m.Z,
                    {
                        onResize: L,
                        wrapperClassName: D.videoWrapper,
                        className: D.content,
                        mirror: z,
                        streamId: W,
                        videoComponent: V,
                        fit: C,
                        videoSpinnerContext: Y.id === H ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
                        paused: F,
                        userId: Y.id
                    },
                    W
                )
        : (0, r.jsx)('div', {
              className: o()(D.content, { [D.blockedAvatar]: x || k }),
              children: (0, r.jsx)(h.Z, {
                  'aria-label': ee,
                  src: er,
                  avatarDecoration: ei,
                  backgroundSrc: Y.getAvatarURL(n.guild_id, 80),
                  size: en,
                  pulseSpeakingIndicator: B,
                  speaking: K,
                  userId: Y.id
              })
          });
}
