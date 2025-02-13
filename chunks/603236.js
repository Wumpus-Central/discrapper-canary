t.d(n, {
    I: () => I,
    S: () => E
}),
    t(789020);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    s = t.n(r),
    a = t(533800),
    o = t(442837),
    d = t(481060),
    c = t(484614),
    u = t(914010),
    x = t(246946),
    h = t(626135),
    m = t(630388),
    v = t(971130),
    g = t(530436),
    j = t(245335),
    N = t(981631),
    p = t(388032),
    f = t(29742),
    C = t(483938);
let E = o.ZP.connectStores([x.Z], () => ({ hideValue: x.Z.hideInstantInvites }))((e) => {
        let { value: n, autoFocus: t, hideValue: i, onCopy: r, disabled: s } = e;
        return (0, l.jsx)(c.Z, {
            value: i ? p.intl.string(p.t['6HzNgY']) : n,
            buttonColor: d.zxk.Colors.BRAND,
            onCopy: r,
            autoFocus: t,
            disabled: s
        });
    }),
    I = (e) => {
        let { guild: n, noInvitesAvailable: t, showFriends: r, onClose: o, modalState: c, isApplicationBypassToggleEnabled: x, setInviteFlags: I, copyValue: S, changePage: T, inviteChannel: Z, source: y, code: b, guildScheduledEvent: k, disabled: _, application: R } = e,
            { maxAge: z, maxUses: A, networkError: D, showVanityURL: P, flags: L } = c,
            M = i.useCallback(() => {
                h.default.track(N.rMx.COPY_INSTANT_INVITE, {
                    server: u.Z.getGuildId(),
                    channel: null == Z ? void 0 : Z.id,
                    channel_type: null == Z ? void 0 : Z.type,
                    location: y,
                    code: b,
                    guild_scheduled_event_id: null == k ? void 0 : k.id,
                    application_id: null == R ? void 0 : R.id
                });
            }, [null == R ? void 0 : R.id, Z, y, b, k]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(E, {
                    value: S,
                    autoFocus: r,
                    onCopy: M,
                    disabled: _
                }),
                x &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)('div', { className: f.divider }),
                            (0, l.jsx)(d.j7V, {
                                className: f.toggle,
                                value: (0, m.yE)(L, a.$.IS_APPLICATION_BYPASS),
                                onChange: (e) => I((0, m.mB)(L, a.$.IS_APPLICATION_BYPASS, e)),
                                disabled: _,
                                hideBorder: !0,
                                children: (0, l.jsxs)('div', {
                                    className: f.formText,
                                    children: [
                                        (0, l.jsx)(d.Text, {
                                            variant: 'text-md/semibold',
                                            children: p.intl.string(p.t['1i1bUl'])
                                        }),
                                        (0, l.jsx)(d.ua7, {
                                            text: p.intl.string(p.t['jvd/LC']),
                                            children: (e) =>
                                                (0, l.jsx)(d.d3s, {
                                                    size: 'xs',
                                                    color: 'currentColor',
                                                    ...e
                                                })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                t || P
                    ? null
                    : (0, l.jsxs)(d.Text, {
                          variant: 'text-xs/normal',
                          className: s()(C.marginTop8, f.footerText),
                          children: [
                              (0, v.Vg)(z, A),
                              ' ',
                              r
                                  ? (0, l.jsx)(d.eee, {
                                        onClick: () => T(j.RV.SETTINGS),
                                        children: p.intl.string(p.t.VNe8Pz)
                                    })
                                  : null
                          ]
                      }),
                !t && r && P
                    ? (0, l.jsxs)(d.Text, {
                          variant: 'text-xs/normal',
                          className: s()(C.marginTop8, f.footerText),
                          children: [p.intl.string(p.t['0M2U9/']), ' ']
                      })
                    : null,
                null != D
                    ? (0, l.jsx)(g.W, {
                          guild: n,
                          error: D,
                          onClose: o
                      })
                    : null
            ]
        });
    };
