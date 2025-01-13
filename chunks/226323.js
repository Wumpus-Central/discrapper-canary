n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(239091),
    d = n(586902),
    u = n(512384),
    h = n(184301),
    m = n(347475),
    p = n(314897),
    g = n(131951),
    f = n(51144),
    _ = n(524484),
    E = n(388032),
    I = n(525270);
let C = { offset: 2 },
    N = {
        serverDeaf: {
            icon: o.HeadphonesDenyIcon,
            colorize: !0,
            getStatus: () => E.intl.string(E.t.btxSdH)
        },
        serverMute: {
            icon: o.MicrophoneDenyIcon,
            colorize: !0,
            getStatus: () => E.intl.string(E.t.uLddbW)
        },
        deaf: {
            icon: o.HeadphonesSlashIcon,
            colorize: !1,
            getStatus: () => E.intl.string(E.t.NjmiOD)
        },
        mute: {
            icon: o.MicrophoneSlashIcon,
            colorize: !1,
            getStatus: () => E.intl.string(E.t.tjtv3N)
        },
        localMute: {
            icon: o.MicrophoneDenyIcon,
            colorize: !1,
            getStatus: () => E.intl.string(E.t['9F+xJS'])
        }
    };
function v(e) {
    var t, r;
    let { channel: l, user: p, nick: v, mute: S, deaf: T, serverMute: A, serverDeaf: b } = e,
        Z = (0, s.e7)([g.Z], () => g.Z.isLocalMute(p.id)),
        x = (0, d.Z)({
            userId: p.id,
            checkSoundSharing: !0
        }),
        L = null !== (t = l.getGuildId()) && void 0 !== t ? t : void 0,
        P = p.getAvatarURL(l.guild_id, 24),
        O = null != v ? v : f.ZP.getName(p),
        {
            icon: y,
            colorize: R,
            getStatus: j
        } = null !==
            (r = (function (e) {
                let { serverDeaf: t, deaf: n, serverMute: i, mute: r, localMute: l } = e;
                if (t) return N.serverDeaf;
                if (n) return N.deaf;
                if (i) return N.serverMute;
                else if (l) return N.localMute;
                else if (r) return N.mute;
            })({
                serverDeaf: b,
                deaf: T,
                serverMute: A,
                mute: S,
                localMute: Z
            })) && void 0 !== r
            ? r
            : {},
        D =
            null != j
                ? E.intl.formatToPlainString(E.t['1+MVBA'], {
                      userName: O,
                      status: j()
                  })
                : O;
    function M(e) {
        null != L
            ? (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('64899')]).then(n.bind(n, 757387));
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          user: p,
                          guildId: L,
                          channel: l,
                          showMediaItems: !0
                      });
              })
            : (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('95052')]).then(n.bind(n, 881351));
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          user: p,
                          showMediaItems: !0
                      });
              });
    }
    return (0, i.jsx)(o.Popout, {
        preload: () =>
            (0, h.Z)(p.id, p.getAvatarURL(L, 80), {
                guildId: L,
                channelId: l.id
            }),
        position: 'top',
        renderPopout: (e) =>
            (0, i.jsx)(m.Z, {
                userId: p.id,
                guildId: L,
                channelId: l.id,
                ...e
            }),
        children: (e) =>
            (0, i.jsx)(o.Tooltip, {
                text: D,
                children: (t) =>
                    (0, i.jsx)(o.Clickable, {
                        ...t,
                        ...e,
                        className: I.avatarContainer,
                        onContextMenu: M,
                        focusProps: C,
                        children: (0, i.jsx)(u.Z, {
                            shakeLocation: _.oZ.VOICE_USER,
                            isShaking: x,
                            children: (0, i.jsx)('div', {
                                className: a()(I.avatar, { [I.speaking]: x }),
                                style: { backgroundImage: 'url('.concat(P, ')') },
                                children:
                                    null != y
                                        ? (0, i.jsx)(y, {
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
function S(e) {
    let { voiceStates: t, channel: n, className: l } = e,
        [c, d] = r.useState(!1),
        u = c ? o.MinusIcon : o.PlusSmallIcon,
        h = (0, i.jsx)(o.CircleIconButton, {
            className: I.expandButton,
            onClick: () => d(!c),
            color: o.CircleIconButtonColors.PRIMARY,
            size: o.CircleIconButtonSizes.SIZE_24,
            tooltip: c ? E.intl.string(E.t['Z/Tya2']) : E.intl.string(E.t.XR5BAQ),
            icon: (0, i.jsx)(u, {
                size: 'xs',
                color: 'currentColor'
            }),
            focusProps: C
        }),
        m = (0, s.e7)([p.default], () => p.default.getId(), []),
        [g, f] = (function (e, t) {
            let n = [];
            for (let i of e) {
                if (!(i.user.id === t || n.some((e) => e.user.id === i.user.id))) {
                    if (n.length >= 7) return [n, !0];
                    n.push(i);
                }
            }
            return [n, !1];
        })(t, m),
        _ = f && c ? t : g;
    return _.length <= 0
        ? null
        : (0, i.jsx)(o.ScrollerThin, {
              className: a()(I.scroller, l),
              fade: !0,
              children: (0, i.jsxs)('div', {
                  className: I.voiceUsers,
                  role: 'group',
                  'aria-label': E.intl.string(E.t['/ZgaVV']),
                  children: [
                      _.map((e) => {
                          let { user: t, nick: r, voiceState: l } = e;
                          return t.id !== m
                              ? (0, i.jsx)(
                                    v,
                                    {
                                        channel: n,
                                        user: t,
                                        nick: r,
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
                      f ? h : null
                  ]
              })
          });
}
