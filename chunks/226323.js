n.d(t, { Z: () => C }), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(586902),
    d = n(512384),
    p = n(184301),
    h = n(347475),
    f = n(314897),
    g = n(131951),
    m = n(51144),
    b = n(524484),
    _ = n(388032),
    E = n(619163);
function O(e) {
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
function N(e, t) {
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
let v = { offset: 2 },
    y = {
        serverDeaf: {
            icon: s.Vm4,
            colorize: !0,
            getStatus: () => _.NW.string(_.t.btxSdH)
        },
        serverMute: {
            icon: s.v0G,
            colorize: !0,
            getStatus: () => _.NW.string(_.t.uLddbW)
        },
        deaf: {
            icon: s.wE8,
            colorize: !1,
            getStatus: () => _.NW.string(_.t.NjmiOD)
        },
        mute: {
            icon: s.nRN,
            colorize: !1,
            getStatus: () => _.NW.string(_.t.tjtv3N)
        },
        localMute: {
            icon: s.v0G,
            colorize: !1,
            getStatus: () => _.NW.string(_.t['9F+xJS'])
        }
    };
function I(e) {
    var t, i;
    let { channel: l, user: f, nick: I, mute: C, deaf: S, serverMute: T, serverDeaf: P } = e,
        j = (0, a.e7)([g.Z], () => g.Z.isLocalMute(f.id)),
        A = (0, u.Z)({
            userId: f.id,
            checkSoundSharing: !0
        }),
        Z = null !== (t = l.getGuildId()) && void 0 !== t ? t : void 0,
        x = f.getAvatarURL(l.guild_id, 24),
        L = null != I ? I : m.ZP.getName(f),
        {
            icon: w,
            colorize: R,
            getStatus: D
        } = null !==
            (i = (function (e) {
                let { serverDeaf: t, deaf: n, serverMute: r, mute: i, localMute: l } = e;
                if (t) return y.serverDeaf;
                if (n) return y.deaf;
                if (r) return y.serverMute;
                if (l) return y.localMute;
                if (i) return y.mute;
            })({
                serverDeaf: P,
                deaf: S,
                serverMute: T,
                mute: C,
                localMute: j
            })) && void 0 !== i
            ? i
            : {},
        k =
            null != D
                ? _.NW.formatToPlainString(_.t['1+MVBA'], {
                      userName: L,
                      status: D()
                  })
                : L;
    function M(e) {
        null != Z
            ? (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('83944')]).then(n.bind(n, 757387));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          N(O({}, t), {
                              user: f,
                              guildId: Z,
                              channel: l,
                              showMediaItems: !0
                          })
                      );
              })
            : (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('31923')]).then(n.bind(n, 881351));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          N(O({}, t), {
                              user: f,
                              showMediaItems: !0
                          })
                      );
              });
    }
    return (0, r.jsx)(s.yRy, {
        preload: () =>
            (0, p.Z)(f.id, f.getAvatarURL(Z, 80), {
                guildId: Z,
                channelId: l.id
            }),
        position: 'top',
        renderPopout: (e) =>
            (0, r.jsx)(
                h.Z,
                O(
                    {
                        userId: f.id,
                        guildId: Z,
                        channelId: l.id
                    },
                    e
                )
            ),
        children: (e) =>
            (0, r.jsx)(s.ua7, {
                text: k,
                children: (t) =>
                    (0, r.jsx)(
                        s.P3F,
                        N(O({}, t, e), {
                            className: E.avatarContainer,
                            onContextMenu: M,
                            focusProps: v,
                            children: (0, r.jsx)(d.Z, {
                                shakeLocation: b.oZ.VOICE_USER,
                                isShaking: A,
                                children: (0, r.jsx)('div', {
                                    className: o()(E.avatar, { [E.speaking]: A }),
                                    style: { backgroundImage: 'url('.concat(x, ')') },
                                    children:
                                        null != w
                                            ? (0, r.jsx)(w, {
                                                  className: o()(E.avatarIconOverlay, { [E.avatarIconRed]: R }),
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
function C(e) {
    let { voiceStates: t, channel: n, className: l } = e,
        [c, u] = i.useState(!1),
        d = c ? s.V_R : s.qJs,
        p = (0, r.jsx)(s.M0o, {
            className: E.expandButton,
            onClick: () => u(!c),
            color: s.YX$.PRIMARY,
            size: s.tT7.SIZE_24,
            tooltip: c ? _.NW.string(_.t['Z/Tya2']) : _.NW.string(_.t.XR5BAQ),
            icon: (0, r.jsx)(d, {
                size: 'xs',
                color: 'currentColor'
            }),
            focusProps: v
        }),
        h = (0, a.e7)([f.default], () => f.default.getId(), []),
        [g, m] = (function (e, t) {
            let n = [];
            for (let r of e)
                if (!(r.user.id === t || n.some((e) => e.user.id === r.user.id))) {
                    if (n.length >= 7) return [n, !0];
                    n.push(r);
                }
            return [n, !1];
        })(t, h),
        b = m && c ? t : g;
    return b.length <= 0
        ? null
        : (0, r.jsx)(s.zJl, {
              className: o()(E.scroller, l),
              fade: !0,
              children: (0, r.jsxs)('div', {
                  className: E.voiceUsers,
                  role: 'group',
                  'aria-label': _.NW.string(_.t['/ZgaVV']),
                  children: [
                      b.map((e) => {
                          let { user: t, nick: i, voiceState: l } = e;
                          return t.id !== h
                              ? (0, r.jsx)(
                                    I,
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
