l.d(n, {
    I: () => I,
    S: () => C
}),
    l(789020);
var t = l(200651),
    i = l(192379),
    a = l(120356),
    r = l.n(a),
    s = l(533800),
    o = l(442837),
    d = l(481060),
    c = l(484614),
    u = l(914010),
    x = l(246946),
    m = l(626135),
    h = l(630388),
    v = l(971130),
    g = l(530436),
    j = l(245335),
    N = l(981631),
    f = l(388032),
    p = l(755527),
    E = l(232186);
let C = o.ZP.connectStores([x.Z], () => ({ hideValue: x.Z.hideInstantInvites }))((e) => {
        let { value: n, autoFocus: l, hideValue: i, onCopy: a, disabled: r } = e;
        return (0, t.jsx)(c.Z, {
            value: i ? f.intl.string(f.t['6HzNgY']) : n,
            buttonColor: d.zxk.Colors.BRAND,
            onCopy: a,
            autoFocus: l,
            disabled: r
        });
    }),
    I = (e) => {
        let { guild: n, noInvitesAvailable: l, showFriends: a, onClose: o, modalState: c, isApplicationBypassToggleEnabled: x, setInviteFlags: I, copyValue: T, changePage: Z, inviteChannel: S, source: b, code: y, guildScheduledEvent: k, disabled: _, application: z } = e,
            { maxAge: R, maxUses: A, networkError: D, showVanityURL: P, flags: L } = c,
            M = i.useCallback(() => {
                m.default.track(N.rMx.COPY_INSTANT_INVITE, {
                    server: u.Z.getGuildId(),
                    channel: null == S ? void 0 : S.id,
                    channel_type: null == S ? void 0 : S.type,
                    location: b,
                    code: y,
                    guild_scheduled_event_id: null == k ? void 0 : k.id,
                    application_id: null == z ? void 0 : z.id
                });
            }, [null == z ? void 0 : z.id, S, b, y, k]);
        return (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(C, {
                    value: T,
                    autoFocus: a,
                    onCopy: M,
                    disabled: _
                }),
                x &&
                    (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)('div', { className: p.divider }),
                            (0, t.jsx)(d.j7V, {
                                className: p.toggle,
                                value: (0, h.yE)(L, s.$.IS_APPLICATION_BYPASS),
                                onChange: (e) => I((0, h.mB)(L, s.$.IS_APPLICATION_BYPASS, e)),
                                disabled: _,
                                hideBorder: !0,
                                children: (0, t.jsxs)('div', {
                                    className: p.formText,
                                    children: [
                                        (0, t.jsx)(d.Text, {
                                            variant: 'text-md/semibold',
                                            children: f.intl.string(f.t['1i1bUl'])
                                        }),
                                        (0, t.jsx)(d.ua7, {
                                            text: f.intl.string(f.t['jvd/LC']),
                                            children: (e) =>
                                                (0, t.jsx)(d.d3s, {
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
                l || P
                    ? null
                    : (0, t.jsxs)(d.Text, {
                          variant: 'text-xs/normal',
                          className: r()(E.marginTop8, p.footerText),
                          children: [
                              (0, v.Vg)(R, A),
                              ' ',
                              a
                                  ? (0, t.jsx)(d.eee, {
                                        onClick: () => Z(j.RV.SETTINGS),
                                        children: f.intl.string(f.t.VNe8Pz)
                                    })
                                  : null
                          ]
                      }),
                !l && a && P
                    ? (0, t.jsxs)(d.Text, {
                          variant: 'text-xs/normal',
                          className: r()(E.marginTop8, p.footerText),
                          children: [f.intl.string(f.t['0M2U9/']), ' ']
                      })
                    : null,
                null != D
                    ? (0, t.jsx)(g.W, {
                          guild: n,
                          error: D,
                          onClose: o
                      })
                    : null
            ]
        });
    };
