n.d(t, { Z: () => R }), n(388685), n(953529);
var i = n(200651),
    r = n(192379),
    s = n(91192),
    l = n(442837),
    a = n(524437),
    o = n(481060),
    c = n(540059),
    d = n(695346),
    u = n(650774),
    m = n(430824),
    p = n(771845),
    g = n(626135),
    h = n(358085),
    f = n(88658),
    b = n(660243),
    _ = n(981631),
    x = n(703115),
    E = n(526761),
    j = n(676654),
    C = n(388032),
    O = n(530435);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e) {
    let { guildId: t } = e,
        n = (0, c.Q3)('GuildItem'),
        a = (0, l.e7)([m.Z], () => m.Z.getGuild(t)),
        p = (0, l.e7)([u.Z], () => u.Z.getMemberCount(t)),
        h = !d.SE.useSetting().includes(t),
        b = (0, o.dQu)(o.TVs.modules.guildbar.AVATAR_SIZE),
        T = (0, s.Ie)(null != t ? t : _.lds),
        I = r.useCallback(
            (e) => {
                let n = (0, f._o)();
                e ? n.delete(t) : n.add(t),
                    d.SE.updateSetting([...n]),
                    g.default.track(_.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: x.Y.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                        ingress: E.f4.USER_SETTINGS_ACTIVITY_PRIVACY,
                        guild_id: t
                    });
            },
            [t]
        );
    return null == a
        ? null
        : (0, i.jsx)('div', {
              className: O.guildRow,
              children: (0, i.jsx)(o.j7V, {
                  className: O.serverOptionSwitchContainer,
                  value: h,
                  onChange: () => {
                      I(!h);
                  },
                  hideBorder: !0,
                  children: (0, i.jsxs)('div', {
                      className: O.guildInfo,
                      children: [
                          (0, i.jsx)(o.aRk, {
                              className: O.guildIcon,
                              children: (0, i.jsx)(
                                  o.LYs,
                                  v(
                                      S(
                                          {
                                              ariaLabel: a.toString(),
                                              name: a.toString(),
                                              icon: a.getIconURL(2 * b, !1, n)
                                          },
                                          T
                                      ),
                                      { role: 'treeitem' }
                                  )
                              )
                          }),
                          (0, i.jsx)(o.Text, {
                              className: O.guildText,
                              variant: 'text-md/medium',
                              lineClamp: 1,
                              color: 'text-normal',
                              children: a.toString()
                          }),
                          (0, i.jsx)(o.Text, {
                              variant: 'text-xs/normal',
                              className: O.guildSubtitle,
                              children: C.intl.formatToPlainString(j.default.obBqMj, { count: null != p ? p : 0 })
                          })
                      ]
                  })
              })
          });
}
function I() {
    let e = d.G6.useSetting(),
        t = d.Wz.useSetting(),
        n = (e) => {
            d.Wz.updateSetting(e);
        },
        s = [
            {
                value: a.E5.ON,
                label: C.intl.string(C.t.UzGMHx)
            },
            {
                value: a.E5.ON_FOR_LARGE_GUILDS,
                label: C.intl.string(C.t.OFqxQU)
            },
            {
                value: a.E5.OFF,
                label: C.intl.string(C.t.MIgNPD)
            }
        ],
        c = (0, l.e7)([p.ZP], () => p.ZP.getFlattenedGuildIds()),
        u = r.useCallback(() => {
            let e = (0, f._o)();
            c.some((t) => e.has(t)) ? d.SE.updateSetting([]) : d.SE.updateSetting(c);
        }, [c]);
    return (0, i.jsxs)(o.hjN, {
        tag: o.RB0.H5,
        title: C.intl.string(j.default.o0peVV),
        titleClassName: O.title,
        children: [
            (0, i.jsxs)(o.xJW, {
                tag: o.RB0.H5,
                title: C.intl.string(j.default.eAQM7u),
                className: O.defaultSetting,
                children: [
                    (0, i.jsx)(o.R94, {
                        type: o.R94.Types.DESCRIPTION,
                        className: O.description,
                        children: C.intl.string(j.default.lKsV2t)
                    }),
                    (0, i.jsx)(o.q4e, {
                        options: s,
                        value: t,
                        onChange: (e) => n(e)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsxs)(o.xJW, {
                    tag: o.RB0.H5,
                    title: C.intl.string(j.default.f3ZvjI),
                    children: [
                        (0, i.jsx)(o.R94, {
                            type: o.R94.Types.DESCRIPTION,
                            className: O.description,
                            children: C.intl.string(j.default.tHLm2N)
                        }),
                        !e &&
                            (0, i.jsx)(o.Wn, {
                                messageType: o.QYI.WARNING,
                                className: O.ignoredWarning,
                                children: C.intl.string(j.default.mUwVAQ)
                            }),
                        (0, i.jsx)(o.zJl, {
                            fade: !0,
                            className: O.scroller,
                            children: c.map((e) => (0, i.jsx)(T, { guildId: e }, e))
                        }),
                        (0, i.jsx)('div', {
                            className: O.toggleAll,
                            children: (0, i.jsx)(o.zxk, {
                                look: o.zxk.Looks.LINK,
                                onClick: u,
                                children: C.intl.string(j.default.gJ8jlZ)
                            })
                        })
                    ]
                })
            })
        ]
    });
}
function N() {
    return (0, i.jsx)(o.hjN, {
        tag: o.RB0.H5,
        title: C.intl.string(j.default['+RndDg']),
        children: (0, i.jsx)(b.r, {})
    });
}
function y() {
    let e = !d.G6.useSetting(),
        t = d.cP.useSetting(),
        n = d.Ou.useSetting();
    return (0, i.jsxs)(o.hjN, {
        tag: o.RB0.H5,
        title: C.intl.string(C.t['5gexRU']),
        titleClassName: O.title,
        children: [
            (0, i.jsx)(o.j7V, {
                disabled: e,
                hideBorder: !0,
                onChange: (e) => d.cP.updateSetting(e),
                note: C.intl.string(C.t.IjucAA),
                value: t,
                children: C.intl.string(C.t.eVdoIy)
            }),
            (0, i.jsx)(o.j7V, {
                disabled: e,
                hideBorder: !0,
                onChange: (e) => d.Ou.updateSetting(e),
                note: C.intl.string(C.t.oCONqK),
                value: n,
                children: C.intl.string(C.t['tuKl+v'])
            })
        ]
    });
}
function A(e) {
    let { onScrollToGuildsSection: t } = e,
        r = d.G6.useSetting(),
        s = () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e('83909').then(n.bind(n, 932374));
                return (n) => (0, i.jsx)(e, v(S({}, n), { onScrollToGuildsSection: t }));
            });
        },
        l = h.isPlatformEmbedded ? C.intl.string(C.t.MznbeH) : C.intl.string(C.t.oKqC4u);
    return (0, i.jsx)(o.hjN, {
        tag: o.RB0.H5,
        title: C.intl.string(C.t.Wspazs),
        className: O.allActivitySharingTitle,
        children: (0, i.jsx)(o.j7V, {
            value: r,
            onChange: (e) => {
                e ? d.G6.updateSetting(e) : s();
            },
            note: l,
            children: C.intl.string(C.t['4q/Ewc'])
        })
    });
}
function P() {
    return (0, i.jsx)(o.hjN, {
        className: O.privacyAndTerms,
        children: (0, i.jsx)(o.ToO, {
            type: o.ToO.Types.PRIMARY,
            body: C.intl.format(C.t.xvCsx8, {
                termsLink: _.EYA.TERMS,
                privacyLink: _.EYA.PRIVACY
            })
        })
    });
}
let R = function (e) {
    let { className: t } = e,
        n = (0, r.useRef)(null);
    return (0, i.jsxs)(o.hjN, {
        className: t,
        tag: o.RB0.H1,
        title: C.intl.string(C.t['6x5uWV']),
        children: [
            (0, i.jsx)(A, {
                onScrollToGuildsSection: () => {
                    null != n.current && n.current.scrollIntoView({ behavior: 'smooth' });
                }
            }),
            (0, i.jsx)(N, {}),
            (0, i.jsx)(o.$i$, { className: O.divider }),
            (0, i.jsx)('div', { ref: n }),
            (0, i.jsx)(I, {}),
            (0, i.jsx)(o.$i$, { className: O.divider }),
            (0, i.jsx)(y, {}),
            (0, i.jsx)(P, {})
        ]
    });
};
