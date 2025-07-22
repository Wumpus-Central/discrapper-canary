n.d(t, { Z: () => I });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(399606),
    s = n(920155),
    c = n(481060),
    u = n(287734),
    d = n(654904),
    p = n(314897),
    h = n(271383),
    f = n(496675),
    m = n(19780),
    g = n(594174),
    b = n(626135),
    _ = n(906605),
    y = n(574176),
    C = n(833858),
    x = n(866071),
    v = n(223135),
    j = n(625938),
    O = n(981631),
    E = n(388032),
    S = n(399464);
let I = (e) => {
    let { hangStatusActivity: t, userId: l, channel: I, previewIsOpen: P, targetElementRef: Z } = e,
        { enableHangStatus: T } = y.n.useExperiment({
            guildId: I.guild_id,
            location: 'HangStatusPopout'
        }),
        N = (0, o.e7)([p.default], () => p.default.getId()),
        A = (0, o.e7)([g.default], () => g.default.getUser(l)),
        w = (0, o.e7)([m.Z], () => m.Z.getChannelId() === I.id),
        R = (0, o.e7)([f.Z], () => f.Z.can(O.Plq.CONNECT, I)),
        M = (null == t ? void 0 : t.emoji) == null || (0, x.K)(t.emoji, I),
        D = (0, o.e7)([h.ZP], () => (null != I.guild_id && null != A ? h.ZP.getMember(I.guild_id, l) : null)),
        k = i.useMemo(() => (null != A ? (0, d.SG)(void 0, D, A, { size: 40 }) : void 0), [D, A]);
    return (i.useEffect(() => {
        (0, _.UP)();
    }, []),
    i.useEffect(() => {
        T &&
            null != t &&
            P &&
            null != A &&
            N !== l &&
            b.default.track(O.rMx.VIEW_HANG_STATUS, {
                source: 'HangStatusPopout',
                guild_id: I.guild_id,
                channel_id: I.id
            });
    }, [T, t, P, A, N, l, I]),
    T && null != A)
        ? N === l
            ? (0, r.jsx)('div', {
                  className: a()(S.popoutWrapper, { [S.mounted]: P }),
                  children: (0, r.jsx)(j.v, {
                      currentStatus: t,
                      channel: I
                  })
              })
            : null == t
              ? null
              : (0, r.jsxs)(s.m, {
                    position: 'right',
                    targetElementRef: Z,
                    children: [
                        (0, r.jsxs)('div', {
                            className: S.contentContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: S.statusGroup,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-muted',
                                            children: E.intl.string(E.t['74vS//'])
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-sm/semibold',
                                            className: S.statusText,
                                            children: (0, C.O8)(t)
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: S.iconGroup,
                                    children: [
                                        (0, r.jsx)(v.Z, {
                                            className: S.statusIcon,
                                            hangStatusActivity: t
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: S.avatarWrapper,
                                            children: [
                                                (0, r.jsx)(c.qEK, {
                                                    className: S.avatar,
                                                    size: c.EFr.SIZE_40,
                                                    src: k,
                                                    'aria-hidden': !0
                                                }),
                                                (0, r.jsx)('div', { className: S.outline })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        !w && R
                            ? (0, r.jsx)(c.zxk, {
                                  size: 'sm',
                                  text: E.intl.string(E.t['B/dHXF']),
                                  onClick: () => {
                                      !w &&
                                          R &&
                                          (u.default.selectVoiceChannel(I.id),
                                          b.default.track(O.rMx.HANG_STATUS_CTA_CLICKED, {
                                              source: 'HangStatusPopout',
                                              guild_id: I.guild_id,
                                              channel_id: I.id
                                          }));
                                  }
                              })
                            : null,
                        w && M
                            ? (0, r.jsx)(c.zxk, {
                                  size: 'sm',
                                  text: E.intl.string(E.t.xcVcFR),
                                  onClick: () => {
                                      let e = t.state;
                                      (e === O.tNA.CUSTOM
                                          ? (0, c.ZDy)(async () => {
                                                let { default: e } = await n.e('1631').then(n.bind(n, 333541));
                                                return (n) => {
                                                    var i, l;
                                                    return (0, r.jsx)(
                                                        e,
                                                        ((i = (function (e) {
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
                                                                        var r;
                                                                        ((r = n[t]),
                                                                            t in e
                                                                                ? Object.defineProperty(e, t, {
                                                                                      value: r,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0
                                                                                  })
                                                                                : (e[t] = r));
                                                                    }));
                                                            }
                                                            return e;
                                                        })({}, n)),
                                                        (l = l =
                                                            {
                                                                startingText: t.details,
                                                                startingEmoji: t.emoji
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                                            : (function (e, t) {
                                                                  var n = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      n.push.apply(n, r);
                                                                  }
                                                                  return n;
                                                              })(Object(l)).forEach(function (e) {
                                                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                                              }),
                                                        i)
                                                    );
                                                };
                                            })
                                          : (0, _.Zx)(e, !0),
                                          b.default.track(O.rMx.SWIPE_HANG_STATUS, {
                                              guild_id: I.guild_id,
                                              channel_id: I.id,
                                              media_session_id: m.Z.getMediaSessionId()
                                          }));
                                  }
                              })
                            : null
                    ]
                })
        : null;
};
