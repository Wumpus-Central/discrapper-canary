n.d(t, {
    I: () => O,
    S: () => N
}),
    n(997841);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(533800),
    o = n(442837),
    c = n(481060),
    u = n(484614),
    d = n(914010),
    m = n(246946),
    h = n(626135),
    x = n(630388),
    g = n(971130),
    p = n(530436),
    f = n(245335),
    v = n(981631),
    b = n(388032),
    j = n(821022),
    y = n(20493);
let N = o.ZP.connectStores([m.Z], () => ({ hideValue: m.Z.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: l, onCopy: i, disabled: a } = e;
        return (0, r.jsx)(u.Z, {
            value: l ? b.NW.string(b.t['6HzNgY']) : t,
            buttonColor: c.zxk.Colors.BRAND,
            onCopy: i,
            autoFocus: n,
            disabled: a
        });
    }),
    O = (e) => {
        let { guild: t, noInvitesAvailable: n, showFriends: i, onClose: o, modalState: u, isApplicationBypassToggleEnabled: m, setInviteFlags: O, copyValue: E, changePage: S, inviteChannel: C, source: P, code: I, guildScheduledEvent: T, disabled: w, application: W } = e,
            { maxAge: Z, maxUses: k, networkError: D, showVanityURL: R, flags: _ } = u,
            A = l.useCallback(() => {
                h.default.track(v.rMx.COPY_INSTANT_INVITE, {
                    server: d.Z.getGuildId(),
                    channel: null == C ? void 0 : C.id,
                    channel_type: null == C ? void 0 : C.type,
                    location: P,
                    code: I,
                    guild_scheduled_event_id: null == T ? void 0 : T.id,
                    application_id: null == W ? void 0 : W.id
                });
            }, [null == W ? void 0 : W.id, C, P, I, T]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(N, {
                    value: E,
                    autoFocus: i,
                    onCopy: A,
                    disabled: w
                }),
                m &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)('div', { className: j.divider }),
                            (0, r.jsx)(c.j7V, {
                                className: j.toggle,
                                value: (0, x.yE)(_, s.$.IS_APPLICATION_BYPASS),
                                onChange: (e) => O((0, x.mB)(_, s.$.IS_APPLICATION_BYPASS, e)),
                                disabled: w,
                                hideBorder: !0,
                                children: (0, r.jsxs)('div', {
                                    className: j.formText,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-md/semibold',
                                            children: b.NW.string(b.t['1i1bUl'])
                                        }),
                                        (0, r.jsx)(c.ua7, {
                                            text: b.NW.string(b.t['jvd/LC']),
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
                n || R
                    ? null
                    : (0, r.jsxs)(c.Text, {
                          variant: 'text-xs/normal',
                          className: a()(y.marginTop8, j.footerText),
                          children: [
                              (0, g.Vg)(Z, k),
                              ' ',
                              i
                                  ? (0, r.jsx)(c.eee, {
                                        onClick: () => S(f.RV.SETTINGS),
                                        children: b.NW.string(b.t.VNe8Pz)
                                    })
                                  : null
                          ]
                      }),
                !n && i && R
                    ? (0, r.jsxs)(c.Text, {
                          variant: 'text-xs/normal',
                          className: a()(y.marginTop8, j.footerText),
                          children: [b.NW.string(b.t['0M2U9/']), ' ']
                      })
                    : null,
                null != D
                    ? (0, r.jsx)(p.W, {
                          guild: t,
                          error: D,
                          onClose: o
                      })
                    : null
            ]
        });
    };
