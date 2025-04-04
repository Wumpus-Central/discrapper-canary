n.d(t, { Z: () => j }), n(653041), n(47120);
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
    m = n(184301),
    b = n(347475),
    _ = n(314897),
    E = n(131951),
    O = n(51144),
    N = n(524484),
    y = n(388032),
    I = n(795243);
function v(e) {
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
            getStatus: () => y.NW.string(y.t.btxSdH)
        },
        serverMute: {
            icon: s.v0G,
            colorize: !0,
            getStatus: () => y.NW.string(y.t.uLddbW)
        },
        deaf: {
            icon: s.wE8,
            colorize: !1,
            getStatus: () => y.NW.string(y.t.NjmiOD)
        },
        mute: {
            icon: s.nRN,
            colorize: !1,
            getStatus: () => y.NW.string(y.t.tjtv3N)
        },
        localMute: {
            icon: s.v0G,
            colorize: !1,
            getStatus: () => y.NW.string(y.t['9F+xJS'])
        }
    };
function P(e) {
    var t, l;
    let _ = i.useRef(null),
        { parentAnalyticsLocation: P } = (0, p.ZP)(),
        { channel: j, user: A, nick: Z, mute: x, deaf: L, serverMute: w, serverDeaf: R } = e,
        D = (0, o.e7)([E.Z], () => E.Z.isLocalMute(A.id)),
        k = (0, u.Z)({
            userId: A.id,
            checkSoundSharing: !0
        }),
        M = null != (t = j.getGuildId()) ? t : void 0,
        U = A.getAvatarURL(j.guild_id, 24),
        G = null != Z ? Z : O.ZP.getName(A),
        {
            icon: W,
            colorize: V,
            getStatus: B
        } = null !=
        (l = (function (e) {
            let { serverDeaf: t, deaf: n, serverMute: r, mute: i, localMute: l } = e;
            if (t) return T.serverDeaf;
            if (n) return T.deaf;
            if (r) return T.serverMute;
            if (l) return T.localMute;
            if (i) return T.mute;
        })({
            serverDeaf: R,
            deaf: L,
            serverMute: w,
            mute: x,
            localMute: D
        }))
            ? l
            : {},
        H =
            null != B
                ? y.NW.formatToPlainString(y.t['1+MVBA'], {
                      userName: G,
                      status: B()
                  })
                : G;
    function F(e) {
        null != M
            ? (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          C(v({}, t), {
                              user: A,
                              guildId: M,
                              channel: j,
                              showMediaItems: !0,
                              onInteraction: (0, f.u)('GuildChannelUserContextMenu', d.Z.RTC_PANEL, { targetUserId: A.id })
                          })
                      );
              })
            : (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('86423')]).then(n.bind(n, 881351));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          C(v({}, t), {
                              user: A,
                              showMediaItems: !0,
                              onInteraction: (0, f.u)('UserGenericContextMenu', d.Z.RTC_PANEL, { targetUserId: A.id })
                          })
                      );
              });
    }
    return (0, r.jsx)(s.yRy, {
        targetElementRef: _,
        preload: () =>
            (0, m.Z)(A.id, A.getAvatarURL(M, 80), {
                guildId: M,
                channelId: j.id
            }),
        position: 'top',
        renderPopout: (e) =>
            (0, r.jsx)(
                b.Z,
                v(
                    {
                        userId: A.id,
                        guildId: M,
                        channelId: j.id
                    },
                    e
                )
            ),
        clickTrap: !0,
        children: (e) =>
            (0, r.jsx)(s.ua7, {
                text: H,
                children: (t) =>
                    (0, r.jsx)(
                        s.P3F,
                        C(v({}, t, e), {
                            innerRef: _,
                            onClick: (t) => {
                                e.onClick(t), (0, h.v)(P, h.d.VOICE_USER);
                            },
                            className: I.avatarContainer,
                            onContextMenu: F,
                            focusProps: S,
                            children: (0, r.jsx)(g.Z, {
                                shakeLocation: N.oZ.VOICE_USER,
                                isShaking: k,
                                children: (0, r.jsx)('div', {
                                    className: a()(I.avatar, { [I.speaking]: k }),
                                    style: { backgroundImage: 'url('.concat(U, ')') },
                                    children:
                                        null != W
                                            ? (0, r.jsx)(W, {
                                                  className: a()(I.avatarIconOverlay, { [I.avatarIconRed]: V }),
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
            onClick: () => u(!c),
            color: s.YX$.PRIMARY,
            size: s.tT7.SIZE_24,
            tooltip: c ? y.NW.string(y.t['Z/Tya2']) : y.NW.string(y.t.XR5BAQ),
            icon: (0, r.jsx)(d, {
                size: 'xs',
                color: 'currentColor'
            }),
            focusProps: S
        }),
        h = (0, o.e7)([_.default], () => _.default.getId(), []),
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
              className: a()(I.scroller, l),
              fade: !0,
              children: (0, r.jsxs)('div', {
                  className: I.voiceUsers,
                  role: 'group',
                  'aria-label': y.NW.string(y.t['/ZgaVV']),
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
