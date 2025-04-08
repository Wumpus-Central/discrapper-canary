n.d(t, {
    I: () => E,
    S: () => S
}),
    n(997841);
var l = n(200651),
    i = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(533800),
    o = n(442837),
    d = n(481060),
    u = n(484614),
    c = n(914010),
    h = n(246946),
    g = n(626135),
    m = n(630388),
    x = n(971130),
    v = n(530436),
    p = n(245335),
    N = n(981631),
    I = n(388032),
    f = n(821022),
    j = n(20493);
let S = o.ZP.connectStores([h.Z], () => ({ hideValue: h.Z.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: i, onCopy: s, disabled: r } = e;
        return (0, l.jsx)(u.Z, {
            value: i ? I.NW.string(I.t['6HzNgY']) : t,
            buttonColor: d.zxk.Colors.BRAND,
            onCopy: s,
            autoFocus: n,
            disabled: r
        });
    }),
    E = (e) => {
        let { guild: t, noInvitesAvailable: n, showFriends: s, onClose: o, modalState: u, isApplicationBypassToggleEnabled: h, setInviteFlags: E, copyValue: T, changePage: b, inviteChannel: C, source: _, code: y, guildScheduledEvent: O, disabled: P, application: Z } = e,
            { maxAge: A, maxUses: w, networkError: k, showVanityURL: R, flags: M } = u,
            W = i.useCallback(() => {
                g.default.track(N.rMx.COPY_INSTANT_INVITE, {
                    server: c.Z.getGuildId(),
                    channel: null == C ? void 0 : C.id,
                    channel_type: null == C ? void 0 : C.type,
                    location: _,
                    code: y,
                    guild_scheduled_event_id: null == O ? void 0 : O.id,
                    application_id: null == Z ? void 0 : Z.id
                });
            }, [null == Z ? void 0 : Z.id, C, _, y, O]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(S, {
                    value: T,
                    autoFocus: s,
                    onCopy: W,
                    disabled: P
                }),
                h &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)('div', { className: f.divider }),
                            (0, l.jsx)(d.j7V, {
                                className: f.toggle,
                                value: (0, m.yE)(M, a.$.IS_APPLICATION_BYPASS),
                                onChange: (e) => E((0, m.mB)(M, a.$.IS_APPLICATION_BYPASS, e)),
                                disabled: P,
                                hideBorder: !0,
                                children: (0, l.jsxs)('div', {
                                    className: f.formText,
                                    children: [
                                        (0, l.jsx)(d.Text, {
                                            variant: 'text-md/semibold',
                                            children: I.NW.string(I.t['1i1bUl'])
                                        }),
                                        (0, l.jsx)(d.ua7, {
                                            text: I.NW.string(I.t['jvd/LC']),
                                            children: (e) =>
                                                (0, l.jsx)(
                                                    d.d3s,
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
                    : (0, l.jsxs)(d.Text, {
                          variant: 'text-xs/normal',
                          className: r()(j.marginTop8, f.footerText),
                          children: [
                              (0, x.Vg)(A, w),
                              ' ',
                              s
                                  ? (0, l.jsx)(d.eee, {
                                        onClick: () => b(p.RV.SETTINGS),
                                        children: I.NW.string(I.t.VNe8Pz)
                                    })
                                  : null
                          ]
                      }),
                !n && s && R
                    ? (0, l.jsxs)(d.Text, {
                          variant: 'text-xs/normal',
                          className: r()(j.marginTop8, f.footerText),
                          children: [I.NW.string(I.t['0M2U9/']), ' ']
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
