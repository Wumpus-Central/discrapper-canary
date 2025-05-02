n.d(t, {
    I: () => N,
    S: () => O
}),
    n(997841);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(533800),
    o = n(442837),
    c = n(481060),
    u = n(484614),
    d = n(914010),
    m = n(246946),
    x = n(626135),
    g = n(630388),
    h = n(971130),
    v = n(530436),
    f = n(245335),
    p = n(981631),
    j = n(388032),
    b = n(821022),
    y = n(20493);
let O = o.ZP.connectStores([m.Z], () => ({ hideValue: m.Z.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: r, onCopy: i, disabled: a } = e;
        return (0, l.jsx)(u.Z, {
            value: r ? j.intl.string(j.t['6HzNgY']) : t,
            buttonColor: c.zxk.Colors.BRAND,
            onCopy: i,
            autoFocus: n,
            disabled: a
        });
    }),
    N = (e) => {
        let { guild: t, noInvitesAvailable: n, showFriends: i, onClose: o, modalState: u, isApplicationBypassToggleEnabled: m, setInviteFlags: N, copyValue: E, changePage: C, inviteChannel: I, source: S, code: T, guildScheduledEvent: P, disabled: w, application: Z } = e,
            { maxAge: k, maxUses: _, networkError: D, showVanityURL: R, flags: A } = u,
            z = r.useCallback(() => {
                x.default.track(p.rMx.COPY_INSTANT_INVITE, {
                    server: d.Z.getGuildId(),
                    channel: null == I ? void 0 : I.id,
                    channel_type: null == I ? void 0 : I.type,
                    location: S,
                    code: T,
                    guild_scheduled_event_id: null == P ? void 0 : P.id,
                    application_id: null == Z ? void 0 : Z.id
                });
            }, [null == Z ? void 0 : Z.id, I, S, T, P]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(O, {
                    value: E,
                    autoFocus: i,
                    onCopy: z,
                    disabled: w
                }),
                m &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)('div', { className: b.divider }),
                            (0, l.jsx)(c.j7V, {
                                className: b.toggle,
                                value: (0, g.yE)(A, s.$.IS_APPLICATION_BYPASS),
                                onChange: (e) => N((0, g.mB)(A, s.$.IS_APPLICATION_BYPASS, e)),
                                disabled: w,
                                hideBorder: !0,
                                children: (0, l.jsxs)('div', {
                                    className: b.formText,
                                    children: [
                                        (0, l.jsx)(c.Text, {
                                            variant: 'text-md/semibold',
                                            children: j.intl.string(j.t['1i1bUl'])
                                        }),
                                        (0, l.jsx)(c.ua7, {
                                            text: j.intl.string(j.t['jvd/LC']),
                                            children: (e) =>
                                                (0, l.jsx)(
                                                    c.d3s,
                                                    (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                l = Object.keys(n);
                                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                                (l = l.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                    })
                                                                )),
                                                                l.forEach(function (t) {
                                                                    var l;
                                                                    (l = n[t]),
                                                                        t in e
                                                                            ? Object.defineProperty(e, t, {
                                                                                  value: l,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0
                                                                              })
                                                                            : (e[t] = l);
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
                n || R
                    ? null
                    : (0, l.jsxs)(c.Text, {
                          variant: 'text-xs/normal',
                          className: a()(y.marginTop8, b.footerText),
                          children: [
                              (0, h.Vg)(k, _),
                              ' ',
                              i
                                  ? (0, l.jsx)(c.eee, {
                                        onClick: () => C(f.RV.SETTINGS),
                                        children: j.intl.string(j.t.VNe8Pz)
                                    })
                                  : null
                          ]
                      }),
                !n && i && R
                    ? (0, l.jsxs)(c.Text, {
                          variant: 'text-xs/normal',
                          className: a()(y.marginTop8, b.footerText),
                          children: [j.intl.string(j.t['0M2U9/']), ' ']
                      })
                    : null,
                null != D
                    ? (0, l.jsx)(v.W, {
                          guild: t,
                          error: D,
                          onClose: o
                      })
                    : null
            ]
        });
    };
