n.d(t, { Z: () => T }), n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    d = n(239091),
    c = n(586902),
    u = n(512384),
    h = n(184301),
    m = n(347475),
    p = n(314897),
    g = n(131951),
    _ = n(51144),
    f = n(524484),
    E = n(388032),
    I = n(83140);
let C = { offset: 2 },
    N = {
        serverDeaf: {
            icon: o.Vm4,
            colorize: !0,
            getStatus: () => E.intl.string(E.t.btxSdH)
        },
        serverMute: {
            icon: o.v0G,
            colorize: !0,
            getStatus: () => E.intl.string(E.t.uLddbW)
        },
        deaf: {
            icon: o.wE8,
            colorize: !1,
            getStatus: () => E.intl.string(E.t.NjmiOD)
        },
        mute: {
            icon: o.nRN,
            colorize: !1,
            getStatus: () => E.intl.string(E.t.tjtv3N)
        },
        localMute: {
            icon: o.v0G,
            colorize: !1,
            getStatus: () => E.intl.string(E.t['9F+xJS'])
        }
    };
function v(e) {
    var t, l;
    let { channel: r, user: p, nick: v, mute: T, deaf: S, serverMute: A, serverDeaf: Z } = e,
        x = (0, s.e7)([g.Z], () => g.Z.isLocalMute(p.id)),
        b = (0, c.Z)({
            userId: p.id,
            checkSoundSharing: !0
        }),
        L = null !== (t = r.getGuildId()) && void 0 !== t ? t : void 0,
        y = p.getAvatarURL(r.guild_id, 24),
        O = null != v ? v : _.ZP.getName(p),
        {
            icon: P,
            colorize: R,
            getStatus: j
        } = null !==
            (l = (function (e) {
                let { serverDeaf: t, deaf: n, serverMute: i, mute: l, localMute: r } = e;
                if (t) return N.serverDeaf;
                if (n) return N.deaf;
                if (i) return N.serverMute;
                if (r) return N.localMute;
                if (l) return N.mute;
            })({
                serverDeaf: Z,
                deaf: S,
                serverMute: A,
                mute: T,
                localMute: x
            })) && void 0 !== l
            ? l
            : {},
        D =
            null != j
                ? E.intl.formatToPlainString(E.t['1+MVBA'], {
                      userName: O,
                      status: j()
                  })
                : O;
    function w(e) {
        null != L
            ? (0, d.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('7717'), n.e('65023')]).then(n.bind(n, 757387));
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          user: p,
                          guildId: L,
                          channel: r,
                          showMediaItems: !0
                      });
              })
            : (0, d.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('45078')]).then(n.bind(n, 881351));
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          user: p,
                          showMediaItems: !0
                      });
              });
    }
    return (0, i.jsx)(o.yRy, {
        preload: () =>
            (0, h.Z)(p.id, p.getAvatarURL(L, 80), {
                guildId: L,
                channelId: r.id
            }),
        position: 'top',
        renderPopout: (e) =>
            (0, i.jsx)(m.Z, {
                userId: p.id,
                guildId: L,
                channelId: r.id,
                ...e
            }),
        children: (e) =>
            (0, i.jsx)(o.ua7, {
                text: D,
                children: (t) =>
                    (0, i.jsx)(o.P3F, {
                        ...t,
                        ...e,
                        className: I.avatarContainer,
                        onContextMenu: w,
                        focusProps: C,
                        children: (0, i.jsx)(u.Z, {
                            shakeLocation: f.oZ.VOICE_USER,
                            isShaking: b,
                            children: (0, i.jsx)('div', {
                                className: a()(I.avatar, { [I.speaking]: b }),
                                style: { backgroundImage: 'url('.concat(y, ')') },
                                children:
                                    null != P
                                        ? (0, i.jsx)(P, {
                                              className: a()(I.avatarIconOverlay, { [I.avatarIconRed]: R }),
                                              color: 'currentColor',
                                              size: 'xs'
                                          })
                                        : null
                            })
                        })
                    })
            })
    });
}
function T(e) {
    let { voiceStates: t, channel: n, className: r } = e,
        [d, c] = l.useState(!1),
        u = d ? o.V_R : o.qJs,
        h = (0, i.jsx)(o.M0o, {
            className: I.expandButton,
            onClick: () => c(!d),
            color: o.YX$.PRIMARY,
            size: o.tT7.SIZE_24,
            tooltip: d ? E.intl.string(E.t['Z/Tya2']) : E.intl.string(E.t.XR5BAQ),
            icon: (0, i.jsx)(u, {
                size: 'xs',
                color: 'currentColor'
            }),
            focusProps: C
        }),
        m = (0, s.e7)([p.default], () => p.default.getId(), []),
        [g, _] = (function (e, t) {
            let n = [];
            for (let i of e)
                if (!(i.user.id === t || n.some((e) => e.user.id === i.user.id))) {
                    if (n.length >= 7) return [n, !0];
                    n.push(i);
                }
            return [n, !1];
        })(t, m),
        f = _ && d ? t : g;
    return f.length <= 0
        ? null
        : (0, i.jsx)(o.zJl, {
              className: a()(I.scroller, r),
              fade: !0,
              children: (0, i.jsxs)('div', {
                  className: I.voiceUsers,
                  role: 'group',
                  'aria-label': E.intl.string(E.t['/ZgaVV']),
                  children: [
                      f.map((e) => {
                          let { user: t, nick: l, voiceState: r } = e;
                          return t.id !== m
                              ? (0, i.jsx)(
                                    v,
                                    {
                                        channel: n,
                                        user: t,
                                        nick: l,
                                        mute: r.isVoiceMuted(),
                                        deaf: r.isVoiceDeafened(),
                                        video: r.selfVideo,
                                        serverMute: r.mute,
                                        serverDeaf: r.deaf
                                    },
                                    t.id
                                )
                              : null;
                      }),
                      _ ? h : null
                  ]
              })
          });
}
