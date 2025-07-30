(n.d(t, {
    I: () => S,
    S: () => N
}),
    n(997841));
var i = n(255367),
    l = n(73800),
    r = n(120356),
    s = n.n(r),
    a = n(533800),
    o = n(442837),
    c = n(755721),
    d = n(481060),
    u = n(484614),
    h = n(914010),
    g = n(246946),
    m = n(626135),
    p = n(630388),
    f = n(971130),
    x = n(530436),
    j = n(245335),
    b = n(981631),
    v = n(388032),
    y = n(821022),
    C = n(20493);
let N = o.ZP.connectStores([g.Z], () => ({ hideValue: g.Z.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: l, onCopy: r, disabled: s } = e;
        return (0, i.jsx)(u.Z, {
            value: t,
            hideMessage: l ? v.intl.string(v.t['6HzNgY']) : null,
            buttonColor: c.zx.Colors.BRAND,
            onCopy: r,
            autoFocus: n,
            disabled: s
        });
    }),
    S = (e) => {
        let { guild: t, noInvitesAvailable: n, showFriends: r, onClose: o, modalState: c, isApplicationBypassToggleEnabled: u, setInviteFlags: g, copyValue: S, changePage: O, inviteChannel: E, source: T, code: w, guildScheduledEvent: Z, disabled: R, application: I } = e,
            { maxAge: _, maxUses: P, networkError: A, showVanityURL: L, flags: D } = c,
            M = l.useCallback(() => {
                m.default.track(b.rMx.COPY_INSTANT_INVITE, {
                    server: h.Z.getGuildId(),
                    channel: null == E ? void 0 : E.id,
                    channel_type: null == E ? void 0 : E.type,
                    location: T,
                    code: w,
                    guild_scheduled_event_id: null == Z ? void 0 : Z.id,
                    application_id: null == I ? void 0 : I.id
                });
            }, [null == I ? void 0 : I.id, E, T, w, Z]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(N, {
                    value: S,
                    autoFocus: r,
                    onCopy: M,
                    disabled: R
                }),
                u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', { className: y.divider }),
                            (0, i.jsx)(d.j7V, {
                                className: y.toggle,
                                value: (0, p.yE)(D, a.$.IS_APPLICATION_BYPASS),
                                onChange: (e) => g((0, p.mB)(D, a.$.IS_APPLICATION_BYPASS, e)),
                                disabled: R,
                                hideBorder: !0,
                                children: (0, i.jsxs)('div', {
                                    className: y.formText,
                                    children: [
                                        (0, i.jsx)(d.Text, {
                                            variant: 'text-md/semibold',
                                            children: v.intl.string(v.t['1i1bUl'])
                                        }),
                                        (0, i.jsx)(d.ua7, {
                                            text: v.intl.string(v.t['jvd/LC']),
                                            children: (e) =>
                                                (0, i.jsx)(
                                                    d.d3s,
                                                    (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                i = Object.keys(n);
                                                            ('function' == typeof Object.getOwnPropertySymbols &&
                                                                (i = i.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                    })
                                                                )),
                                                                i.forEach(function (t) {
                                                                    var i;
                                                                    ((i = n[t]),
                                                                        t in e
                                                                            ? Object.defineProperty(e, t, {
                                                                                  value: i,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0
                                                                              })
                                                                            : (e[t] = i));
                                                                }));
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
                n || L
                    ? null
                    : (0, i.jsxs)(d.Text, {
                          variant: 'text-xs/normal',
                          className: s()(C.marginTop8, y.footerText),
                          children: [
                              (0, f.Vg)(_, P),
                              ' ',
                              r
                                  ? (0, i.jsx)(d.eee, {
                                        onClick: () => O(j.RV.SETTINGS),
                                        children: v.intl.string(v.t.VNe8Pz)
                                    })
                                  : null
                          ]
                      }),
                !n && r && L
                    ? (0, i.jsxs)(d.Text, {
                          variant: 'text-xs/normal',
                          className: s()(C.marginTop8, y.footerText),
                          children: [v.intl.string(v.t['0M2U9/']), ' ']
                      })
                    : null,
                null != A
                    ? (0, i.jsx)(x.W, {
                          guild: t,
                          error: A,
                          onClose: o
                      })
                    : null
            ]
        });
    };
