n.d(t, {
    I: () => S,
    S: () => _
}),
    n(997841);
var l = n(255367),
    i = n(73800),
    r = n(120356),
    s = n.n(r),
    a = n(533800),
    o = n(442837),
    u = n(481060),
    d = n(484614),
    c = n(914010),
    g = n(246946),
    h = n(626135),
    m = n(630388),
    p = n(971130),
    v = n(530436),
    x = n(245335),
    I = n(981631),
    f = n(388032),
    j = n(821022),
    N = n(20493);
let _ = o.ZP.connectStores([g.Z], () => ({ hideValue: g.Z.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: i, onCopy: r, disabled: s } = e;
        return (0, l.jsx)(d.Z, {
            value: i ? f.intl.string(f.t['6HzNgY']) : t,
            buttonColor: u.zxk.Colors.BRAND,
            onCopy: r,
            autoFocus: n,
            disabled: s
        });
    }),
    S = (e) => {
        let { guild: t, noInvitesAvailable: n, showFriends: r, onClose: o, modalState: d, isApplicationBypassToggleEnabled: g, setInviteFlags: S, copyValue: E, changePage: b, inviteChannel: T, source: O, code: y, guildScheduledEvent: C, disabled: P, application: Z } = e,
            { maxAge: w, maxUses: A, networkError: k, showVanityURL: M, flags: R } = d,
            D = i.useCallback(() => {
                h.default.track(I.rMx.COPY_INSTANT_INVITE, {
                    server: c.Z.getGuildId(),
                    channel: null == T ? void 0 : T.id,
                    channel_type: null == T ? void 0 : T.type,
                    location: O,
                    code: y,
                    guild_scheduled_event_id: null == C ? void 0 : C.id,
                    application_id: null == Z ? void 0 : Z.id
                });
            }, [null == Z ? void 0 : Z.id, T, O, y, C]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(_, {
                    value: E,
                    autoFocus: r,
                    onCopy: D,
                    disabled: P
                }),
                g &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)('div', { className: j.divider }),
                            (0, l.jsx)(u.j7V, {
                                className: j.toggle,
                                value: (0, m.yE)(R, a.$.IS_APPLICATION_BYPASS),
                                onChange: (e) => S((0, m.mB)(R, a.$.IS_APPLICATION_BYPASS, e)),
                                disabled: P,
                                hideBorder: !0,
                                children: (0, l.jsxs)('div', {
                                    className: j.formText,
                                    children: [
                                        (0, l.jsx)(u.Text, {
                                            variant: 'text-md/semibold',
                                            children: f.intl.string(f.t['1i1bUl'])
                                        }),
                                        (0, l.jsx)(u.ua7, {
                                            text: f.intl.string(f.t['jvd/LC']),
                                            children: (e) =>
                                                (0, l.jsx)(
                                                    u.d3s,
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
                n || M
                    ? null
                    : (0, l.jsxs)(u.Text, {
                          variant: 'text-xs/normal',
                          className: s()(N.marginTop8, j.footerText),
                          children: [
                              (0, p.Vg)(w, A),
                              ' ',
                              r
                                  ? (0, l.jsx)(u.eee, {
                                        onClick: () => b(x.RV.SETTINGS),
                                        children: f.intl.string(f.t.VNe8Pz)
                                    })
                                  : null
                          ]
                      }),
                !n && r && M
                    ? (0, l.jsxs)(u.Text, {
                          variant: 'text-xs/normal',
                          className: s()(N.marginTop8, j.footerText),
                          children: [f.intl.string(f.t['0M2U9/']), ' ']
                      })
                    : null,
                null != k
                    ? (0, l.jsx)(v.W, {
                          guild: t,
                          error: k,
                          onClose: o
                      })
                    : null
            ]
        });
    };
