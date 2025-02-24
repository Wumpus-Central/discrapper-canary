n.d(t, { Z: () => S }), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(586902),
    d = n(795318),
    p = n(512384),
    h = n(184301),
    f = n(347475),
    g = n(314897),
    m = n(131951),
    b = n(51144),
    _ = n(524484),
    E = n(388032),
    O = n(619163);
function N(e) {
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
function v(e, t) {
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
let y = { offset: 2 },
    I = {
        serverDeaf: {
            icon: s.Vm4,
            colorize: !0,
            getStatus: () => E.NW.string(E.t.btxSdH)
        },
        serverMute: {
            icon: s.v0G,
            colorize: !0,
            getStatus: () => E.NW.string(E.t.uLddbW)
        },
        deaf: {
            icon: s.wE8,
            colorize: !1,
            getStatus: () => E.NW.string(E.t.NjmiOD)
        },
        mute: {
            icon: s.nRN,
            colorize: !1,
            getStatus: () => E.NW.string(E.t.tjtv3N)
        },
        localMute: {
            icon: s.v0G,
            colorize: !1,
            getStatus: () => E.NW.string(E.t['9F+xJS'])
        }
    };
function C(e) {
    var t, i;
    let { channel: l, user: g, nick: C, mute: S, deaf: T, serverMute: P, serverDeaf: j } = e,
        A = (0, a.e7)([m.Z], () => m.Z.isLocalMute(g.id)),
        Z = (0, u.Z)({
            userId: g.id,
            checkSoundSharing: !0
        }),
        x = null !== (t = l.getGuildId()) && void 0 !== t ? t : void 0,
        L = g.getAvatarURL(l.guild_id, 24),
        w = null != C ? C : b.ZP.getName(g),
        {
            icon: R,
            colorize: D,
            getStatus: k
        } = null !==
            (i = (function (e) {
                let { serverDeaf: t, deaf: n, serverMute: r, mute: i, localMute: l } = e;
                if (t) return I.serverDeaf;
                if (n) return I.deaf;
                if (r) return I.serverMute;
                if (l) return I.localMute;
                if (i) return I.mute;
            })({
                serverDeaf: j,
                deaf: T,
                serverMute: P,
                mute: S,
                localMute: A
            })) && void 0 !== i
            ? i
            : {},
        M =
            null != k
                ? E.NW.formatToPlainString(E.t['1+MVBA'], {
                      userName: w,
                      status: k()
                  })
                : w;
    function U(e) {
        null != x
            ? (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('83944')]).then(n.bind(n, 757387));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          v(N({}, t), {
                              user: g,
                              guildId: x,
                              channel: l,
                              showMediaItems: !0,
                              onInteraction: (0, d.u)('GuildChannelUserContextMenu', 'RTCConnection', { targetUserId: g.id })
                          })
                      );
              })
            : (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('31923')]).then(n.bind(n, 881351));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          v(N({}, t), {
                              user: g,
                              showMediaItems: !0,
                              onInteraction: (0, d.u)('UserGenericContextMenu', 'RTCConnection', { targetUserId: g.id })
                          })
                      );
              });
    }
    return (0, r.jsx)(s.yRy, {
        preload: () =>
            (0, h.Z)(g.id, g.getAvatarURL(x, 80), {
                guildId: x,
                channelId: l.id
            }),
        position: 'top',
        renderPopout: (e) =>
            (0, r.jsx)(
                f.Z,
                N(
                    {
                        userId: g.id,
                        guildId: x,
                        channelId: l.id
                    },
                    e
                )
            ),
        children: (e) =>
            (0, r.jsx)(s.ua7, {
                text: M,
                children: (t) =>
                    (0, r.jsx)(
                        s.P3F,
                        v(N({}, t, e), {
                            className: O.avatarContainer,
                            onContextMenu: U,
                            focusProps: y,
                            children: (0, r.jsx)(p.Z, {
                                shakeLocation: _.oZ.VOICE_USER,
                                isShaking: Z,
                                children: (0, r.jsx)('div', {
                                    className: o()(O.avatar, { [O.speaking]: Z }),
                                    style: { backgroundImage: 'url('.concat(L, ')') },
                                    children:
                                        null != R
                                            ? (0, r.jsx)(R, {
                                                  className: o()(O.avatarIconOverlay, { [O.avatarIconRed]: D }),
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
function S(e) {
    let { voiceStates: t, channel: n, className: l } = e,
        [c, u] = i.useState(!1),
        d = c ? s.V_R : s.qJs,
        p = (0, r.jsx)(s.M0o, {
            className: O.expandButton,
            onClick: () => u(!c),
            color: s.YX$.PRIMARY,
            size: s.tT7.SIZE_24,
            tooltip: c ? E.NW.string(E.t['Z/Tya2']) : E.NW.string(E.t.XR5BAQ),
            icon: (0, r.jsx)(d, {
                size: 'xs',
                color: 'currentColor'
            }),
            focusProps: y
        }),
        h = (0, a.e7)([g.default], () => g.default.getId(), []),
        [f, m] = (function (e, t) {
            let n = [];
            for (let r of e)
                if (!(r.user.id === t || n.some((e) => e.user.id === r.user.id))) {
                    if (n.length >= 7) return [n, !0];
                    n.push(r);
                }
            return [n, !1];
        })(t, h),
        b = m && c ? t : f;
    return b.length <= 0
        ? null
        : (0, r.jsx)(s.zJl, {
              className: o()(O.scroller, l),
              fade: !0,
              children: (0, r.jsxs)('div', {
                  className: O.voiceUsers,
                  role: 'group',
                  'aria-label': E.NW.string(E.t['/ZgaVV']),
                  children: [
                      b.map((e) => {
                          let { user: t, nick: i, voiceState: l } = e;
                          return t.id !== h
                              ? (0, r.jsx)(
                                    C,
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
                      m ? p : null
                  ]
              })
          });
}
