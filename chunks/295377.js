n.d(t, { Z: () => R }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(91192),
    a = n(442837),
    l = n(524437),
    o = n(481060),
    c = n(540059),
    d = n(695346),
    u = n(650774),
    m = n(430824),
    g = n(771845),
    p = n(626135),
    h = n(358085),
    f = n(88658),
    b = n(660243),
    N = n(981631),
    x = n(703115),
    _ = n(526761),
    E = n(676654),
    j = n(388032),
    O = n(530435);
function C(e) {
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
function S(e, t) {
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
function v(e) {
    let { guildId: t } = e,
        n = (0, c.Q3)('GuildItem'),
        l = (0, a.e7)([m.Z], () => m.Z.getGuild(t)),
        g = (0, a.e7)([u.Z], () => u.Z.getMemberCount(t)),
        h = !d.SE.useSetting().includes(t),
        b = (0, o.dQu)(o.TVs.modules.guildbar.AVATAR_SIZE),
        v = (0, s.Ie)(null != t ? t : N.lds),
        T = i.useCallback(
            (e) => {
                let n = (0, f._o)();
                e ? n.delete(t) : n.add(t),
                    d.SE.updateSetting([...n]),
                    p.default.track(N.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: x.Y.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                        ingress: _.f4.USER_SETTINGS_ACTIVITY_PRIVACY,
                        guild_id: t
                    });
            },
            [t]
        );
    return null == l
        ? null
        : (0, r.jsx)('div', {
              className: O.guildRow,
              children: (0, r.jsx)(o.j7V, {
                  className: O.serverOptionSwitchContainer,
                  value: h,
                  onChange: () => {
                      T(!h);
                  },
                  hideBorder: !0,
                  children: (0, r.jsxs)('div', {
                      className: O.guildInfo,
                      children: [
                          (0, r.jsx)(o.aRk, {
                              className: O.guildIcon,
                              children: (0, r.jsx)(
                                  o.LYs,
                                  S(
                                      C(
                                          {
                                              ariaLabel: l.toString(),
                                              name: l.toString(),
                                              icon: l.getIconURL(2 * b, !1, n)
                                          },
                                          v
                                      ),
                                      { role: 'treeitem' }
                                  )
                              )
                          }),
                          (0, r.jsx)(o.Text, {
                              className: O.guildText,
                              variant: 'text-md/medium',
                              lineClamp: 1,
                              color: 'text-normal',
                              children: l.toString()
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: 'text-xs/normal',
                              className: O.guildSubtitle,
                              children: j.NW.formatToPlainString(E.Z.obBqMj, { count: null != g ? g : 0 })
                          })
                      ]
                  })
              })
          });
}
function T() {
    let e = d.G6.useSetting(),
        t = d.Wz.useSetting(),
        n = (e) => {
            d.Wz.updateSetting(e);
        },
        s = [
            {
                value: l.E5.ON,
                label: j.NW.string(j.t.UzGMHx)
            },
            {
                value: l.E5.ON_FOR_LARGE_GUILDS,
                label: j.NW.string(j.t.OFqxQU)
            },
            {
                value: l.E5.OFF,
                label: j.NW.string(j.t.MIgNPD)
            }
        ],
        c = (0, a.e7)([g.ZP], () => g.ZP.getFlattenedGuildIds()),
        u = i.useCallback(() => {
            let e = (0, f._o)();
            c.some((t) => e.has(t)) ? d.SE.updateSetting([]) : d.SE.updateSetting(c);
        }, [c]);
    return (0, r.jsxs)(o.hjN, {
        tag: o.RB0.H5,
        title: j.NW.string(E.Z.o0peVV),
        titleClassName: O.title,
        children: [
            (0, r.jsxs)(o.xJW, {
                tag: o.RB0.H5,
                title: j.NW.string(E.Z.eAQM7u),
                className: O.defaultSetting,
                children: [
                    (0, r.jsx)(o.R94, {
                        type: o.R94.Types.DESCRIPTION,
                        className: O.description,
                        children: j.NW.string(E.Z.lKsV2t)
                    }),
                    (0, r.jsx)(o.q4e, {
                        options: s,
                        value: t,
                        onChange: (e) => n(e)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                children: (0, r.jsxs)(o.xJW, {
                    tag: o.RB0.H5,
                    title: j.NW.string(E.Z.f3ZvjI),
                    children: [
                        (0, r.jsx)(o.R94, {
                            type: o.R94.Types.DESCRIPTION,
                            className: O.description,
                            children: j.NW.string(E.Z.tHLm2N)
                        }),
                        !e &&
                            (0, r.jsx)(o.Wn, {
                                messageType: o.QYI.WARNING,
                                className: O.ignoredWarning,
                                children: j.NW.string(E.Z.mUwVAQ)
                            }),
                        (0, r.jsx)(o.zJl, {
                            fade: !0,
                            className: O.scroller,
                            children: c.map((e) => (0, r.jsx)(v, { guildId: e }, e))
                        }),
                        (0, r.jsx)('div', {
                            className: O.toggleAll,
                            children: (0, r.jsx)(o.zxk, {
                                look: o.zxk.Looks.LINK,
                                onClick: u,
                                children: j.NW.string(E.Z.gJ8jlZ)
                            })
                        })
                    ]
                })
            })
        ]
    });
}
function I() {
    return (0, r.jsx)(o.hjN, {
        tag: o.RB0.H5,
        title: j.NW.string(E.Z['+RndDg']),
        children: (0, r.jsx)(b.r, {})
    });
}
function y() {
    let e = !d.G6.useSetting(),
        t = d.cP.useSetting(),
        n = d.Ou.useSetting();
    return (0, r.jsxs)(o.hjN, {
        tag: o.RB0.H5,
        title: j.NW.string(j.t['5gexRU']),
        titleClassName: O.title,
        children: [
            (0, r.jsx)(o.j7V, {
                disabled: e,
                hideBorder: !0,
                onChange: (e) => d.cP.updateSetting(e),
                note: j.NW.string(j.t.IjucAA),
                value: t,
                children: j.NW.string(j.t.eVdoIy)
            }),
            (0, r.jsx)(o.j7V, {
                disabled: e,
                hideBorder: !0,
                onChange: (e) => d.Ou.updateSetting(e),
                note: j.NW.string(j.t.oCONqK),
                value: n,
                children: j.NW.string(j.t['tuKl+v'])
            })
        ]
    });
}
function A(e) {
    let { onScrollToGuildsSection: t } = e,
        i = d.G6.useSetting(),
        s = () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e('83909').then(n.bind(n, 932374));
                return (n) => (0, r.jsx)(e, S(C({}, n), { onScrollToGuildsSection: t }));
            });
        },
        a = h.isPlatformEmbedded ? j.NW.string(j.t.MznbeH) : j.NW.string(j.t.oKqC4u);
    return (0, r.jsx)(o.hjN, {
        tag: o.RB0.H5,
        title: j.NW.string(j.t.Wspazs),
        className: O.allActivitySharingTitle,
        children: (0, r.jsx)(o.j7V, {
            value: i,
            onChange: (e) => {
                e ? d.G6.updateSetting(e) : s();
            },
            note: a,
            children: j.NW.string(j.t['4q/Ewc'])
        })
    });
}
function P() {
    return (0, r.jsx)(o.hjN, {
        className: O.privacyAndTerms,
        children: (0, r.jsx)(o.ToO, {
            type: o.ToO.Types.PRIMARY,
            body: j.NW.format(j.t.xvCsx8, {
                termsLink: N.EYA.TERMS,
                privacyLink: N.EYA.PRIVACY
            })
        })
    });
}
let R = function (e) {
    let { className: t } = e,
        n = (0, i.useRef)(null);
    return (0, r.jsxs)(o.hjN, {
        className: t,
        tag: o.RB0.H1,
        title: j.NW.string(j.t['6x5uWV']),
        children: [
            (0, r.jsx)(A, {
                onScrollToGuildsSection: () => {
                    null != n.current && n.current.scrollIntoView({ behavior: 'smooth' });
                }
            }),
            (0, r.jsx)(I, {}),
            (0, r.jsx)(o.$i$, { className: O.divider }),
            (0, r.jsx)('div', { ref: n }),
            (0, r.jsx)(T, {}),
            (0, r.jsx)(o.$i$, { className: O.divider }),
            (0, r.jsx)(y, {}),
            (0, r.jsx)(P, {})
        ]
    });
};
