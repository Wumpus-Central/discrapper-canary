n.d(t, { Z: () => D });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(399606),
    l = n(920155),
    c = n(481060),
    u = n(287734),
    d = n(654904),
    f = n(314897),
    _ = n(271383),
    p = n(496675),
    h = n(19780),
    m = n(594174),
    g = n(626135),
    E = n(906605),
    b = n(574176),
    y = n(833858),
    O = n(866071),
    v = n(223135),
    I = n(625938),
    T = n(981631),
    S = n(388032),
    A = n(399464);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
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
                N(e, t, n[t]);
            }));
    }
    return e;
}
function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = 40,
    D = (e) => {
        let { hangStatusActivity: t, userId: a, channel: N, previewIsOpen: w, targetElementRef: D } = e,
            { enableHangStatus: L } = b.n.useExperiment({
                guildId: N.guild_id,
                location: 'HangStatusPopout'
            }),
            x = (0, s.e7)([f.default], () => f.default.getId()),
            k = (0, s.e7)([m.default], () => m.default.getUser(a)),
            j = (0, s.e7)([h.Z], () => h.Z.getChannelId() === N.id),
            M = (0, s.e7)([p.Z], () => p.Z.can(T.Plq.CONNECT, N)),
            U = (null == t ? void 0 : t.emoji) == null || (0, O.K)(t.emoji, N),
            G = (0, s.e7)([_.ZP], () => (null != N.guild_id && null != k ? _.ZP.getMember(N.guild_id, a) : null)),
            B = i.useMemo(() => (null != k ? (0, d.SG)(void 0, G, k, { size: P }) : void 0), [G, k]);
        i.useEffect(() => {
            (0, E.UP)();
        }, []);
        let Z = () => {
            !j &&
                M &&
                (u.default.selectVoiceChannel(N.id),
                g.default.track(T.rMx.HANG_STATUS_CTA_CLICKED, {
                    source: 'HangStatusPopout',
                    guild_id: N.guild_id,
                    channel_id: N.id
                }));
        };
        if (
            (i.useEffect(() => {
                L &&
                    null != t &&
                    w &&
                    null != k &&
                    x !== a &&
                    g.default.track(T.rMx.VIEW_HANG_STATUS, {
                        source: 'HangStatusPopout',
                        guild_id: N.guild_id,
                        channel_id: N.id
                    });
            }, [L, t, w, k, x, a, N]),
            !L || null == k)
        )
            return null;
        if (x === a)
            return (0, r.jsx)('div', {
                className: o()(A.popoutWrapper, { [A.mounted]: w }),
                children: (0, r.jsx)(I.v, {
                    currentStatus: t,
                    channel: N
                })
            });
        if (null == t) return null;
        let F = () => {
            let e = t.state;
            (e === T.tNA.CUSTOM
                ? (0, c.ZDy)(async () => {
                      let { default: e } = await n.e('1631').then(n.bind(n, 333541));
                      return (n) =>
                          (0, r.jsx)(
                              e,
                              R(C({}, n), {
                                  startingText: t.details,
                                  startingEmoji: t.emoji
                              })
                          );
                  })
                : (0, E.Zx)(e, !0),
                g.default.track(T.rMx.SWIPE_HANG_STATUS, {
                    guild_id: N.guild_id,
                    channel_id: N.id,
                    media_session_id: h.Z.getMediaSessionId()
                }));
        };
        return (0, r.jsxs)(l.m, {
            position: 'right',
            targetElementRef: D,
            children: [
                (0, r.jsxs)('div', {
                    className: A.contentContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: A.statusGroup,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    children: S.intl.string(S.t['74vS//'])
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-sm/semibold',
                                    className: A.statusText,
                                    children: (0, y.O8)(t)
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: A.iconGroup,
                            children: [
                                (0, r.jsx)(v.Z, {
                                    className: A.statusIcon,
                                    hangStatusActivity: t
                                }),
                                (0, r.jsxs)('div', {
                                    className: A.avatarWrapper,
                                    children: [
                                        (0, r.jsx)(c.qEK, {
                                            className: A.avatar,
                                            size: c.EFr.SIZE_40,
                                            src: B,
                                            'aria-hidden': !0
                                        }),
                                        (0, r.jsx)('div', { className: A.outline })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                !j && M
                    ? (0, r.jsx)(c.zxk, {
                          size: 'sm',
                          text: S.intl.string(S.t['B/dHXF']),
                          onClick: Z
                      })
                    : null,
                j && U
                    ? (0, r.jsx)(c.zxk, {
                          size: 'sm',
                          text: S.intl.string(S.t.xcVcFR),
                          onClick: F
                      })
                    : null
            ]
        });
    };
