n.d(t, { Z: () => A }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(586902),
    d = n(393903),
    p = n(448986),
    h = n(100527),
    f = n(906732),
    g = n(522651),
    m = n(795318),
    b = n(512384),
    _ = n(670188),
    E = n(314897),
    O = n(131951),
    I = n(51144),
    y = n(524484),
    v = n(388032),
    C = n(795243);
function S(e) {
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
let T = { offset: 2 },
    P = {
        serverDeaf: {
            icon: s.Vm4,
            colorize: !0,
            getStatus: () => v.intl.string(v.t.btxSdH)
        },
        serverMute: {
            icon: s.v0G,
            colorize: !0,
            getStatus: () => v.intl.string(v.t.uLddbW)
        },
        deaf: {
            icon: s.wE8,
            colorize: !1,
            getStatus: () => v.intl.string(v.t.NjmiOD)
        },
        mute: {
            icon: s.nRN,
            colorize: !1,
            getStatus: () => v.intl.string(v.t.tjtv3N)
        },
        localMute: {
            icon: s.v0G,
            colorize: !1,
            getStatus: () => v.intl.string(v.t['9F+xJS'])
        }
    };
function j(e) {
    var t, l;
    let d = i.useRef(null),
        { parentAnalyticsLocation: p } = (0, f.ZP)(),
        { channel: E, user: j, nick: A, mute: x, deaf: Z, serverMute: L, serverDeaf: w } = e,
        R = (0, o.e7)([O.Z], () => O.Z.isLocalMute(j.id)),
        D = (0, u.Z)({
            userId: j.id,
            checkSoundSharing: !0
        }),
        k = null != (t = E.getGuildId()) ? t : void 0,
        M = j.getAvatarURL(E.guild_id, 24),
        U = null != A ? A : I.ZP.getName(j),
        {
            icon: G,
            colorize: B,
            getStatus: V
        } = null !=
        (l = (function (e) {
            let { serverDeaf: t, deaf: n, serverMute: r, mute: i, localMute: l } = e;
            if (t) return P.serverDeaf;
            if (n) return P.deaf;
            if (r) return P.serverMute;
            if (l) return P.localMute;
            if (i) return P.mute;
        })({
            serverDeaf: w,
            deaf: Z,
            serverMute: L,
            mute: x,
            localMute: R
        }))
            ? l
            : {},
        H =
            null != V
                ? v.intl.formatToPlainString(v.t['1+MVBA'], {
                      userName: U,
                      status: V()
                  })
                : U;
    function F(e) {
        null != k
            ? (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          N(S({}, t), {
                              user: j,
                              guildId: k,
                              channel: E,
                              showMediaItems: !0,
                              onInteraction: (0, m.u)('GuildChannelUserContextMenu', h.Z.RTC_PANEL, { targetUserId: j.id })
                          })
                      );
              })
            : (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('86423')]).then(n.bind(n, 881351));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          N(S({}, t), {
                              user: j,
                              showMediaItems: !0,
                              onInteraction: (0, m.u)('UserGenericContextMenu', h.Z.RTC_PANEL, { targetUserId: j.id })
                          })
                      );
              });
    }
    return (0, r.jsx)(_.Z, {
        targetElementRef: d,
        user: j,
        guildId: k,
        channelId: E.id,
        position: 'top',
        clickTrap: !0,
        children: (e) =>
            (0, r.jsx)(s.ua7, {
                text: H,
                children: (t) =>
                    (0, r.jsx)(
                        s.P3F,
                        N(S({}, t, e), {
                            innerRef: d,
                            onClick: (t) => {
                                e.onClick(t), (0, g.v)(p, g.d.VOICE_USER);
                            },
                            className: C.avatarContainer,
                            onContextMenu: F,
                            focusProps: T,
                            children: (0, r.jsx)(b.Z, {
                                shakeLocation: y.oZ.VOICE_USER,
                                isShaking: D,
                                children: (0, r.jsx)('div', {
                                    className: a()(C.avatar, { [C.speaking]: D }),
                                    style: { backgroundImage: 'url('.concat(M, ')') },
                                    children:
                                        null != G
                                            ? (0, r.jsx)(G, {
                                                  className: a()(C.avatarIconOverlay, { [C.avatarIconRed]: B }),
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
function A(e) {
    let { voiceStates: t, channel: n, className: l } = e,
        [c, u] = i.useState(!1),
        h = (0, o.e7)([E.default], () => E.default.getId()),
        { containerRef: f, maxVisibleAvatars: g } = (function (e) {
            let [t, n] = i.useState(7),
                r = (0, p.Z)(() => {
                    let t = null == l ? void 0 : l.current;
                    if (null == t) return;
                    let r = Math.floor((t.offsetWidth + 4) / 28);
                    n(Math.max(1, e > r ? r - 1 : r));
                }),
                l = (0, d.y)(r, [e], {
                    fireOnMount: !0,
                    fireOnDepsChange: !0
                });
            return {
                containerRef: l,
                maxVisibleAvatars: t
            };
        })(t.length - 1),
        [m, b] = (function (e, t, n) {
            let r = [];
            for (let i of e)
                if (i.user.id !== t && !r.some((e) => e.user.id === i.user.id)) {
                    if (r.length >= n) return [r, !0];
                    r.push(i);
                }
            return [r, !1];
        })(t, h, g),
        _ = c ? s.V_R : s.qJs,
        O = (0, r.jsx)(s.M0o, {
            onClick: () => u(!c),
            color: s.YX$.PRIMARY,
            size: s.tT7.SIZE_24,
            tooltip: c ? v.intl.string(v.t['Z/Tya2']) : v.intl.string(v.t.XR5BAQ),
            icon: (0, r.jsx)(_, {
                size: 'xs',
                color: 'currentColor'
            }),
            focusProps: T
        }),
        I = b && c ? t : m;
    return I.length <= 0
        ? null
        : (0, r.jsx)(s.zJl, {
              className: a()(C.scroller, l),
              fade: !0,
              children: (0, r.jsxs)('div', {
                  ref: f,
                  className: a()(C.voiceUsers, !c && C.collapsed),
                  role: 'group',
                  'aria-label': v.intl.string(v.t['/ZgaVV']),
                  children: [
                      I.map((e) => {
                          let { user: t, nick: i, voiceState: l } = e;
                          return t.id !== h
                              ? (0, r.jsx)(
                                    j,
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
                      b ? O : null
                  ]
              })
          });
}
