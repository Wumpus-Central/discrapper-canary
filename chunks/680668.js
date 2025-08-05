(n.d(t, { Z: () => I }), n(997841), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(533800),
    o = n(481060),
    s = n(447543),
    l = n(100527),
    c = n(906732),
    u = n(857395),
    d = n(358555),
    f = n(955415),
    _ = n(131704),
    p = n(630388),
    h = n(411198),
    m = n(277707),
    g = n(358595),
    E = n(981631),
    b = n(388032),
    y = n(273254);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            }));
    }
    return e;
}
function I(e) {
    var t, O, I;
    let T,
        S,
        A,
        { onTransitionToInviteChannel: N, onAcceptInstantInvite: C, guild: w, invite: R, message: P, currentUserId: D } = e,
        L = D === P.author.id,
        { channel: x, approximate_member_count: k, approximate_presence_count: j } = R,
        M = R.state === E.r2o.ACCEPTING,
        U = null != x ? (0, _.jD)(x) : null,
        G = null != w,
        B = null != U,
        Z = null != U && U.isGuildVocal(),
        F = null != U && U.isGuildStageVoice(),
        V = (0, p.yE)(null != (t = R.flags) ? t : 0, a.$.IS_GUEST_INVITE),
        H = null != (O = null == w ? void 0 : w.features.has(E.oNc.HUB)) && O,
        Y = null == w ? void 0 : w.id,
        { analyticsLocations: W } = (0, c.ZP)(l.Z.INVITE_EMBED),
        [K, z] = i.useState(!1),
        q = i.useCallback(() => z(!1), []),
        $ = i.useRef(null),
        X = i.useCallback(() => {
            (z(!0), (0, s.CB)(Y, 'show profile', W));
        }, [Y, W]),
        Q = i.useCallback(() => {
            let e = 'noop';
            (G ? (N(), (e = 'transition')) : (C(), (e = 'accept')),
                (0, s.r$)(
                    {
                        invite: R,
                        action: e,
                        inviter_id: P.author.id,
                        invite_message_id: P.id
                    },
                    W
                ));
        }, [R, P, W, G, N, C]);
    if (null == w) {
        if (null == R.guild) return (0, r.jsx)(g.Z, {});
        (w = h.Qs(R.guild)).premiumTier = null != (I = R.guild.premium_tier) ? I : E.Eu4.NONE;
    }
    let J = (0, m.e)({
        isVoiceChannel: Z,
        isOwnInvite: L,
        isGuest: V,
        isHubGuild: H,
        isStage: F,
        isStream: !1
    });
    return (
        (S = (0, r.jsxs)('span', {
            className: y.infoTitle,
            children: [
                (0, r.jsx)(u.Z, {
                    guildId: w.id,
                    name: w.name,
                    shouldShow: K,
                    onRequestClose: q,
                    targetElementRef: $,
                    children: () =>
                        (0, r.jsx)(f.Z.GuildName, {
                            guild: w,
                            ref: $
                        })
                }),
                (0, r.jsx)('span', {
                    className: y.infoBadge,
                    children: (0, r.jsx)(d.Z, {
                        guild: w,
                        isBannerVisible: !1,
                        disableBoostClick: !0
                    })
                })
            ]
        })),
        V &&
            (A = (0, r.jsx)(o.DY3, {
                className: y.tooltipContainer,
                text: b.intl.string(b.t['/FeTKy']),
                children: (0, r.jsx)(o.d3s, {
                    size: 'md',
                    color: 'currentColor',
                    className: y.infoIcon
                })
            })),
        Z
            ? ((S = (0, r.jsx)(f.Z.Channel, { channel: U })),
              (T = (0, r.jsxs)('span', {
                  className: y.infoTitle,
                  children: [
                      b.intl.format(b.t['2wimj4'], { guildName: w.name }),
                      (0, r.jsx)('span', {
                          className: y.infoBadge,
                          children: (0, r.jsx)(d.Z, {
                              guild: w,
                              isBannerVisible: !1
                          })
                      })
                  ]
              })))
            : (null != k && k >= 5) || (null != j && j > 0)
              ? (T = (0, r.jsx)(f.Z.Data, {
                    members: k,
                    membersOnline: j
                }))
              : B &&
                (T = (0, r.jsx)(f.Z.Channel, {
                    channel: U,
                    guild: w
                })),
        (0, r.jsxs)(f.Z, {
            children: [
                (0, r.jsx)(f.Z.GuildSplash, { guild: w }),
                (0, r.jsx)(f.Z.Header, {
                    text: J,
                    extra: A
                }),
                (0, r.jsxs)(f.Z.Body, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: y.headerLine,
                            children: [
                                (0, r.jsx)(f.Z.Icon, { guild: w }),
                                (0, r.jsx)(f.Z.Info, {
                                    title: S,
                                    onClick: X,
                                    children: T
                                })
                            ]
                        }),
                        (0, r.jsx)(f.Z.Button, {
                            onClick: Q,
                            submitting: M,
                            color: f.Z.Button.Colors.GREEN,
                            children: Z ? (F ? b.intl.string(b.t['7vb2cX']) : b.intl.string(b.t.gpqgam)) : G ? b.intl.string(b.t.cEnaW1) : b.intl.string(b.t.XpeFYm)
                        })
                    ]
                }),
                w.features.has(E.oNc.HUB) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)('div', { className: y.separator }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: b.intl.format(b.t['/o1IfH'], {
                                    onClick: () =>
                                        (0, o.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('95468'), n.e('46343')]).then(n.bind(n, 650233));
                                            return (t) => (0, r.jsx)(e, v({}, t));
                                        })
                                })
                            })
                        ]
                    })
            ]
        })
    );
}
