n.d(t, { Z: () => P }), n(539854), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(586902),
    d = n(100527),
    p = n(906732),
    h = n(522651),
    f = n(795318),
    g = n(512384),
    m = n(670188),
    b = n(314897),
    _ = n(131951),
    E = n(51144),
    O = n(524484),
    N = n(388032),
    y = n(795243);
function I(e) {
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
    var t, l;
    let b = i.useRef(null),
        { parentAnalyticsLocation: T } = (0, p.ZP)(),
        { channel: P, user: j, nick: A, mute: Z, deaf: x, serverMute: w, serverDeaf: L } = e,
        R = (0, o.e7)([_.Z], () => _.Z.isLocalMute(j.id)),
        D = (0, u.Z)({
            userId: j.id,
            checkSoundSharing: !0
        }),
        k = null != (t = P.getGuildId()) ? t : void 0,
        M = j.getAvatarURL(P.guild_id, 24),
        U = null != A ? A : E.ZP.getName(j),
        {
            icon: G,
            colorize: W,
            getStatus: V
        } = null !=
        (l = (function (e) {
            let { serverDeaf: t, deaf: n, serverMute: r, mute: i, localMute: l } = e;
            if (t) return S.serverDeaf;
            if (n) return S.deaf;
            if (r) return S.serverMute;
            if (l) return S.localMute;
            if (i) return S.mute;
        })({
            serverDeaf: L,
            deaf: x,
            serverMute: w,
            mute: Z,
            localMute: R
        }))
            ? l
            : {},
        B =
            null != V
                ? N.NW.formatToPlainString(N.t['1+MVBA'], {
                      userName: U,
                      status: V()
                  })
                : U;
    function H(e) {
        null != k
            ? (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          v(I({}, t), {
                              user: j,
                              guildId: k,
                              channel: P,
                              showMediaItems: !0,
                              onInteraction: (0, f.u)('GuildChannelUserContextMenu', d.Z.RTC_PANEL, { targetUserId: j.id })
                          })
                      );
              })
            : (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('86423')]).then(n.bind(n, 881351));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          v(I({}, t), {
                              user: j,
                              showMediaItems: !0,
                              onInteraction: (0, f.u)('UserGenericContextMenu', d.Z.RTC_PANEL, { targetUserId: j.id })
                          })
                      );
              });
    }
    return (0, r.jsx)(m.Z, {
        targetElementRef: b,
        user: j,
        guildId: k,
        channelId: P.id,
        position: 'top',
        clickTrap: !0,
        children: (e) =>
            (0, r.jsx)(s.ua7, {
                text: B,
                children: (t) =>
                    (0, r.jsx)(
                        s.P3F,
                        v(I({}, t, e), {
                            innerRef: b,
                            onClick: (t) => {
                                e.onClick(t), (0, h.v)(T, h.d.VOICE_USER);
                            },
                            className: y.avatarContainer,
                            onContextMenu: H,
                            focusProps: C,
                            children: (0, r.jsx)(g.Z, {
                                shakeLocation: O.oZ.VOICE_USER,
                                isShaking: D,
                                children: (0, r.jsx)('div', {
                                    className: a()(y.avatar, { [y.speaking]: D }),
                                    style: { backgroundImage: 'url('.concat(M, ')') },
                                    children:
                                        null != G
                                            ? (0, r.jsx)(G, {
                                                  className: a()(y.avatarIconOverlay, { [y.avatarIconRed]: W }),
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
        h = (0, o.e7)([b.default], () => b.default.getId(), []),
        [f, g] = (function (e, t) {
            let n = [];
            for (let r of e)
                if (r.user.id !== t && !n.some((e) => e.user.id === r.user.id)) {
                    if (n.length >= 7) return [n, !0];
                    n.push(r);
                }
            return [n, !1];
        })(t, h),
        m = g && c ? t : f;
    return m.length <= 0
        ? null
        : (0, r.jsx)(s.zJl, {
              className: a()(y.scroller, l),
              fade: !0,
              children: (0, r.jsxs)('div', {
                  className: y.voiceUsers,
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
