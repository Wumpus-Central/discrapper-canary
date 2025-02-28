n.d(t, { Z: () => P }), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(586902),
    d = n(906732),
    p = n(522651),
    h = n(795318),
    f = n(512384),
    g = n(184301),
    m = n(347475),
    b = n(314897),
    _ = n(131951),
    E = n(51144),
    O = n(524484),
    N = n(388032),
    v = n(566433);
function y(e) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = { offset: 2 },
    S = {
        serverDeaf: {
            icon: s.Vm4,
            colorize: !0,
            getStatus: () => N.NW.string(N.t.btxSdH)
        },
        serverMute: {
            icon: s.v0G,
            colorize: !0,
            getStatus: () => N.NW.string(N.t.uLddbW)
        },
        deaf: {
            icon: s.wE8,
            colorize: !1,
            getStatus: () => N.NW.string(N.t.NjmiOD)
        },
        mute: {
            icon: s.nRN,
            colorize: !1,
            getStatus: () => N.NW.string(N.t.tjtv3N)
        },
        localMute: {
            icon: s.v0G,
            colorize: !1,
            getStatus: () => N.NW.string(N.t['9F+xJS'])
        }
    };
function T(e) {
    var t, i;
    let { parentAnalyticsLocation: l } = (0, d.ZP)(),
        { channel: b, user: T, nick: P, mute: A, deaf: j, serverMute: Z, serverDeaf: x } = e,
        L = (0, a.e7)([_.Z], () => _.Z.isLocalMute(T.id)),
        w = (0, u.Z)({
            userId: T.id,
            checkSoundSharing: !0
        }),
        R = null !== (t = b.getGuildId()) && void 0 !== t ? t : void 0,
        D = T.getAvatarURL(b.guild_id, 24),
        k = null != P ? P : E.ZP.getName(T),
        {
            icon: M,
            colorize: U,
            getStatus: G
        } = null !==
            (i = (function (e) {
                let { serverDeaf: t, deaf: n, serverMute: r, mute: i, localMute: l } = e;
                if (t) return S.serverDeaf;
                if (n) return S.deaf;
                if (r) return S.serverMute;
                if (l) return S.localMute;
                if (i) return S.mute;
            })({
                serverDeaf: x,
                deaf: j,
                serverMute: Z,
                mute: A,
                localMute: L
            })) && void 0 !== i
            ? i
            : {},
        W =
            null != G
                ? N.NW.formatToPlainString(N.t['1+MVBA'], {
                      userName: k,
                      status: G()
                  })
                : k;
    function V(e) {
        null != R
            ? (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('22685')]).then(n.bind(n, 757387));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          I(y({}, t), {
                              user: T,
                              guildId: R,
                              channel: b,
                              showMediaItems: !0,
                              onInteraction: (0, h.u)('GuildChannelUserContextMenu', 'RTCConnection', { targetUserId: T.id })
                          })
                      );
              })
            : (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('36463')]).then(n.bind(n, 881351));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          I(y({}, t), {
                              user: T,
                              showMediaItems: !0,
                              onInteraction: (0, h.u)('UserGenericContextMenu', 'RTCConnection', { targetUserId: T.id })
                          })
                      );
              });
    }
    return (0, r.jsx)(s.yRy, {
        preload: () =>
            (0, g.Z)(T.id, T.getAvatarURL(R, 80), {
                guildId: R,
                channelId: b.id
            }),
        position: 'top',
        renderPopout: (e) =>
            (0, r.jsx)(
                m.Z,
                y(
                    {
                        userId: T.id,
                        guildId: R,
                        channelId: b.id
                    },
                    e
                )
            ),
        children: (e) =>
            (0, r.jsx)(s.ua7, {
                text: W,
                children: (t) =>
                    (0, r.jsx)(
                        s.P3F,
                        I(y({}, t, e), {
                            onClick: (t) => {
                                e.onClick(t), (0, p.v)(l, p.d.VOICE_USER);
                            },
                            className: v.avatarContainer,
                            onContextMenu: V,
                            focusProps: C,
                            children: (0, r.jsx)(f.Z, {
                                shakeLocation: O.oZ.VOICE_USER,
                                isShaking: w,
                                children: (0, r.jsx)('div', {
                                    className: o()(v.avatar, { [v.speaking]: w }),
                                    style: { backgroundImage: 'url('.concat(D, ')') },
                                    children:
                                        null != M
                                            ? (0, r.jsx)(M, {
                                                  className: o()(v.avatarIconOverlay, { [v.avatarIconRed]: U }),
                                                  color: 'currentColor',
                                                  size: 'xs'
                                              })
                                            : null
                                })
                            })
                        })
                    )
            })
    });
}
function P(e) {
    let { voiceStates: t, channel: n, className: l } = e,
        [c, u] = i.useState(!1),
        d = c ? s.V_R : s.qJs,
        p = (0, r.jsx)(s.M0o, {
            className: v.expandButton,
            onClick: () => u(!c),
            color: s.YX$.PRIMARY,
            size: s.tT7.SIZE_24,
            tooltip: c ? N.NW.string(N.t['Z/Tya2']) : N.NW.string(N.t.XR5BAQ),
            icon: (0, r.jsx)(d, {
                size: 'xs',
                color: 'currentColor'
            }),
            focusProps: C
        }),
        h = (0, a.e7)([b.default], () => b.default.getId(), []),
        [f, g] = (function (e, t) {
            let n = [];
            for (let r of e)
                if (!(r.user.id === t || n.some((e) => e.user.id === r.user.id))) {
                    if (n.length >= 7) return [n, !0];
                    n.push(r);
                }
            return [n, !1];
        })(t, h),
        m = g && c ? t : f;
    return m.length <= 0
        ? null
        : (0, r.jsx)(s.zJl, {
              className: o()(v.scroller, l),
              fade: !0,
              children: (0, r.jsxs)('div', {
                  className: v.voiceUsers,
                  role: 'group',
                  'aria-label': N.NW.string(N.t['/ZgaVV']),
                  children: [
                      m.map((e) => {
                          let { user: t, nick: i, voiceState: l } = e;
                          return t.id !== h
                              ? (0, r.jsx)(
                                    T,
                                    {
                                        channel: n,
                                        user: t,
                                        nick: i,
                                        mute: l.isVoiceMuted(),
                                        deaf: l.isVoiceDeafened(),
                                        video: l.selfVideo,
                                        serverMute: l.mute,
                                        serverDeaf: l.deaf
                                    },
                                    t.id
                                )
                              : null;
                      }),
                      g ? p : null
                  ]
              })
          });
}
