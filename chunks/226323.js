n.d(t, { Z: () => j }), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(586902),
    d = n(100527),
    p = n(906732),
    h = n(522651),
    f = n(795318),
    g = n(512384),
    m = n(184301),
    b = n(347475),
    _ = n(314897),
    E = n(131951),
    O = n(51144),
    N = n(524484),
    v = n(388032),
    y = n(566433);
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
function C(e, t) {
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
let S = { offset: 2 },
    T = {
        serverDeaf: {
            icon: s.Vm4,
            colorize: !0,
            getStatus: () => v.NW.string(v.t.btxSdH)
        },
        serverMute: {
            icon: s.v0G,
            colorize: !0,
            getStatus: () => v.NW.string(v.t.uLddbW)
        },
        deaf: {
            icon: s.wE8,
            colorize: !1,
            getStatus: () => v.NW.string(v.t.NjmiOD)
        },
        mute: {
            icon: s.nRN,
            colorize: !1,
            getStatus: () => v.NW.string(v.t.tjtv3N)
        },
        localMute: {
            icon: s.v0G,
            colorize: !1,
            getStatus: () => v.NW.string(v.t['9F+xJS'])
        }
    };
function P(e) {
    var t, i;
    let { parentAnalyticsLocation: l } = (0, p.ZP)(),
        { channel: _, user: P, nick: j, mute: A, deaf: Z, serverMute: x, serverDeaf: w } = e,
        L = (0, a.e7)([E.Z], () => E.Z.isLocalMute(P.id)),
        R = (0, u.Z)({
            userId: P.id,
            checkSoundSharing: !0
        }),
        D = null !== (t = _.getGuildId()) && void 0 !== t ? t : void 0,
        k = P.getAvatarURL(_.guild_id, 24),
        M = null != j ? j : O.ZP.getName(P),
        {
            icon: U,
            colorize: G,
            getStatus: W
        } = null !==
            (i = (function (e) {
                let { serverDeaf: t, deaf: n, serverMute: r, mute: i, localMute: l } = e;
                if (t) return T.serverDeaf;
                if (n) return T.deaf;
                if (r) return T.serverMute;
                if (l) return T.localMute;
                if (i) return T.mute;
            })({
                serverDeaf: w,
                deaf: Z,
                serverMute: x,
                mute: A,
                localMute: L
            })) && void 0 !== i
            ? i
            : {},
        V =
            null != W
                ? v.NW.formatToPlainString(v.t['1+MVBA'], {
                      userName: M,
                      status: W()
                  })
                : M;
    function B(e) {
        null != D
            ? (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('29618')]).then(n.bind(n, 757387));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          C(I({}, t), {
                              user: P,
                              guildId: D,
                              channel: _,
                              showMediaItems: !0,
                              onInteraction: (0, f.u)('GuildChannelUserContextMenu', d.Z.RTC_PANEL, { targetUserId: P.id })
                          })
                      );
              })
            : (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('36463')]).then(n.bind(n, 881351));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          C(I({}, t), {
                              user: P,
                              showMediaItems: !0,
                              onInteraction: (0, f.u)('UserGenericContextMenu', d.Z.RTC_PANEL, { targetUserId: P.id })
                          })
                      );
              });
    }
    return (0, r.jsx)(s.yRy, {
        preload: () =>
            (0, m.Z)(P.id, P.getAvatarURL(D, 80), {
                guildId: D,
                channelId: _.id
            }),
        position: 'top',
        renderPopout: (e) =>
            (0, r.jsx)(
                b.Z,
                I(
                    {
                        userId: P.id,
                        guildId: D,
                        channelId: _.id
                    },
                    e
                )
            ),
        clickTrap: !0,
        children: (e) =>
            (0, r.jsx)(s.ua7, {
                text: V,
                children: (t) =>
                    (0, r.jsx)(
                        s.P3F,
                        C(I({}, t, e), {
                            onClick: (t) => {
                                e.onClick(t), (0, h.v)(l, h.d.VOICE_USER);
                            },
                            className: y.avatarContainer,
                            onContextMenu: B,
                            focusProps: S,
                            children: (0, r.jsx)(g.Z, {
                                shakeLocation: N.oZ.VOICE_USER,
                                isShaking: R,
                                children: (0, r.jsx)('div', {
                                    className: o()(y.avatar, { [y.speaking]: R }),
                                    style: { backgroundImage: 'url('.concat(k, ')') },
                                    children:
                                        null != U
                                            ? (0, r.jsx)(U, {
                                                  className: o()(y.avatarIconOverlay, { [y.avatarIconRed]: G }),
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
function j(e) {
    let { voiceStates: t, channel: n, className: l } = e,
        [c, u] = i.useState(!1),
        d = c ? s.V_R : s.qJs,
        p = (0, r.jsx)(s.M0o, {
            className: y.expandButton,
            onClick: () => u(!c),
            color: s.YX$.PRIMARY,
            size: s.tT7.SIZE_24,
            tooltip: c ? v.NW.string(v.t['Z/Tya2']) : v.NW.string(v.t.XR5BAQ),
            icon: (0, r.jsx)(d, {
                size: 'xs',
                color: 'currentColor'
            }),
            focusProps: S
        }),
        h = (0, a.e7)([_.default], () => _.default.getId(), []),
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
              className: o()(y.scroller, l),
              fade: !0,
              children: (0, r.jsxs)('div', {
                  className: y.voiceUsers,
                  role: 'group',
                  'aria-label': v.NW.string(v.t['/ZgaVV']),
                  children: [
                      m.map((e) => {
                          let { user: t, nick: i, voiceState: l } = e;
                          return t.id !== h
                              ? (0, r.jsx)(
                                    P,
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
