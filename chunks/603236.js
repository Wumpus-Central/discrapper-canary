n.d(t, {
    I: () => O,
    S: () => y
}),
    n(789020);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(533800),
    o = n(442837),
    c = n(481060),
    d = n(484614),
    u = n(914010),
    m = n(246946),
    x = n(626135),
    g = n(630388),
    h = n(971130),
    v = n(530436),
    f = n(245335),
    p = n(981631),
    j = n(388032),
    N = n(773444),
    b = n(455812);
let y = o.ZP.connectStores([m.Z], () => ({ hideValue: m.Z.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: l, onCopy: i, disabled: a } = e;
        return (0, r.jsx)(d.Z, {
            value: l ? j.NW.string(j.t['6HzNgY']) : t,
            buttonColor: c.zxk.Colors.BRAND,
            onCopy: i,
            autoFocus: n,
            disabled: a
        });
    }),
    O = (e) => {
        let { guild: t, noInvitesAvailable: n, showFriends: i, onClose: o, modalState: d, isApplicationBypassToggleEnabled: m, setInviteFlags: O, copyValue: E, changePage: C, inviteChannel: I, source: S, code: T, guildScheduledEvent: P, disabled: W, application: w } = e,
            { maxAge: Z, maxUses: k, networkError: _, showVanityURL: D, flags: R } = d,
            A = l.useCallback(() => {
                x.default.track(p.rMx.COPY_INSTANT_INVITE, {
                    server: u.Z.getGuildId(),
                    channel: null == I ? void 0 : I.id,
                    channel_type: null == I ? void 0 : I.type,
                    location: S,
                    code: T,
                    guild_scheduled_event_id: null == P ? void 0 : P.id,
                    application_id: null == w ? void 0 : w.id
                });
            }, [null == w ? void 0 : w.id, I, S, T, P]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(y, {
                    value: E,
                    autoFocus: i,
                    onCopy: A,
                    disabled: W
                }),
                m &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)('div', { className: N.divider }),
                            (0, r.jsx)(c.j7V, {
                                className: N.toggle,
                                value: (0, g.yE)(R, s.$.IS_APPLICATION_BYPASS),
                                onChange: (e) => O((0, g.mB)(R, s.$.IS_APPLICATION_BYPASS, e)),
                                disabled: W,
                                hideBorder: !0,
                                children: (0, r.jsxs)('div', {
                                    className: N.formText,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-md/semibold',
                                            children: j.NW.string(j.t['1i1bUl'])
                                        }),
                                        (0, r.jsx)(c.ua7, {
                                            text: j.NW.string(j.t['jvd/LC']),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    c.d3s,
                                                    (function (e) {
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
                                                    })(
                                                        {
                                                            size: 'xs',
                                                            color: 'currentColor'
                                                        },
                                                        e
                                                    )
                                                )
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                n || D
                    ? null
                    : (0, r.jsxs)(c.Text, {
                          variant: 'text-xs/normal',
                          className: a()(b.marginTop8, N.footerText),
                          children: [
                              (0, h.Vg)(Z, k),
                              ' ',
                              i
                                  ? (0, r.jsx)(c.eee, {
                                        onClick: () => C(f.RV.SETTINGS),
                                        children: j.NW.string(j.t.VNe8Pz)
                                    })
                                  : null
                          ]
                      }),
                !n && i && D
                    ? (0, r.jsxs)(c.Text, {
                          variant: 'text-xs/normal',
                          className: a()(b.marginTop8, N.footerText),
                          children: [j.NW.string(j.t['0M2U9/']), ' ']
                      })
                    : null,
                null != _
                    ? (0, r.jsx)(v.W, {
                          guild: t,
                          error: _,
                          onClose: o
                      })
                    : null
            ]
        });
    };
