(n.d(t, {
    I: () => N,
    S: () => C
}),
    n(997841));
var i = n(255367),
    l = n(73800),
    r = n(120356),
    s = n.n(r),
    a = n(533800),
    o = n(442837),
    c = n(481060),
    d = n(484614),
    u = n(914010),
    h = n(246946),
    m = n(626135),
    g = n(630388),
    p = n(971130),
    f = n(530436),
    x = n(245335),
    j = n(981631),
    b = n(388032),
    v = n(821022),
    y = n(20493);
let C = o.ZP.connectStores([h.Z], () => ({ hideValue: h.Z.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: l, onCopy: r, disabled: s } = e;
        return (0, i.jsx)(d.Z, {
            value: t,
            hideMessage: l ? b.intl.string(b.t['6HzNgY']) : null,
            buttonColor: c.zxk.Colors.BRAND,
            onCopy: r,
            autoFocus: n,
            disabled: s
        });
    }),
    N = (e) => {
        let { guild: t, noInvitesAvailable: n, showFriends: r, onClose: o, modalState: d, isApplicationBypassToggleEnabled: h, setInviteFlags: N, copyValue: S, changePage: O, inviteChannel: E, source: T, code: w, guildScheduledEvent: Z, disabled: R, application: I } = e,
            { maxAge: _, maxUses: P, networkError: A, showVanityURL: L, flags: k } = d,
            D = l.useCallback(() => {
                m.default.track(j.rMx.COPY_INSTANT_INVITE, {
                    server: u.Z.getGuildId(),
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
                (0, i.jsx)(C, {
                    value: S,
                    autoFocus: r,
                    onCopy: D,
                    disabled: R
                }),
                h &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', { className: v.divider }),
                            (0, i.jsx)(c.j7V, {
                                className: v.toggle,
                                value: (0, g.yE)(k, a.$.IS_APPLICATION_BYPASS),
                                onChange: (e) => N((0, g.mB)(k, a.$.IS_APPLICATION_BYPASS, e)),
                                disabled: R,
                                hideBorder: !0,
                                children: (0, i.jsxs)('div', {
                                    className: v.formText,
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: 'text-md/semibold',
                                            children: b.intl.string(b.t['1i1bUl'])
                                        }),
                                        (0, i.jsx)(c.ua7, {
                                            text: b.intl.string(b.t['jvd/LC']),
                                            children: (e) =>
                                                (0, i.jsx)(
                                                    c.d3s,
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
                    : (0, i.jsxs)(c.Text, {
                          variant: 'text-xs/normal',
                          className: s()(y.marginTop8, v.footerText),
                          children: [
                              (0, p.Vg)(_, P),
                              ' ',
                              r
                                  ? (0, i.jsx)(c.eee, {
                                        onClick: () => O(x.RV.SETTINGS),
                                        children: b.intl.string(b.t.VNe8Pz)
                                    })
                                  : null
                          ]
                      }),
                !n && r && L
                    ? (0, i.jsxs)(c.Text, {
                          variant: 'text-xs/normal',
                          className: s()(y.marginTop8, v.footerText),
                          children: [b.intl.string(b.t['0M2U9/']), ' ']
                      })
                    : null,
                null != A
                    ? (0, i.jsx)(f.W, {
                          guild: t,
                          error: A,
                          onClose: o
                      })
                    : null
            ]
        });
    };
