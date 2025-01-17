t.d(n, {
    I: function () {
        return E;
    },
    S: function () {
        return p;
    }
}),
    t(789020);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(533800),
    o = t(442837),
    c = t(481060),
    d = t(484614),
    u = t(914010),
    x = t(246946),
    m = t(626135),
    h = t(630388),
    g = t(971130),
    v = t(530436),
    j = t(245335),
    f = t(981631),
    N = t(388032),
    I = t(755527),
    C = t(232186);
let p = o.ZP.connectStores([x.Z], () => ({ hideValue: x.Z.hideInstantInvites }))((e) => {
        let { value: n, autoFocus: t, hideValue: i, onCopy: r, disabled: a } = e;
        return (0, l.jsx)(d.Z, {
            value: i ? N.intl.string(N.t['6HzNgY']) : n,
            buttonColor: c.Button.Colors.BRAND,
            onCopy: r,
            autoFocus: t,
            disabled: a
        });
    }),
    E = (e) => {
        let { guild: n, noInvitesAvailable: t, showFriends: r, onClose: o, modalState: d, isApplicationBypassToggleEnabled: x, setInviteFlags: E, copyValue: T, changePage: S, inviteChannel: Z, source: b, code: y, guildScheduledEvent: _, disabled: R, application: k } = e,
            { maxAge: A, maxUses: D, networkError: L, showVanityURL: z, flags: B } = d,
            P = i.useCallback(() => {
                m.default.track(f.rMx.COPY_INSTANT_INVITE, {
                    server: u.Z.getGuildId(),
                    channel: null == Z ? void 0 : Z.id,
                    channel_type: null == Z ? void 0 : Z.type,
                    location: b,
                    code: y,
                    guild_scheduled_event_id: null == _ ? void 0 : _.id,
                    application_id: null == k ? void 0 : k.id
                });
            }, [null == k ? void 0 : k.id, Z, b, y, _]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(p, {
                    value: T,
                    autoFocus: r,
                    onCopy: P,
                    disabled: R
                }),
                x &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)('div', { className: I.divider }),
                            (0, l.jsx)(c.FormSwitch, {
                                className: I.toggle,
                                value: (0, h.yE)(B, s.$.IS_APPLICATION_BYPASS),
                                onChange: (e) => E((0, h.mB)(B, s.$.IS_APPLICATION_BYPASS, e)),
                                disabled: R,
                                hideBorder: !0,
                                children: (0, l.jsxs)('div', {
                                    className: I.formText,
                                    children: [
                                        (0, l.jsx)(c.Text, {
                                            variant: 'text-md/semibold',
                                            children: N.intl.string(N.t['1i1bUl'])
                                        }),
                                        (0, l.jsx)(c.Tooltip, {
                                            text: N.intl.string(N.t['jvd/LC']),
                                            children: (e) =>
                                                (0, l.jsx)(c.CircleInformationIcon, {
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
                t || z
                    ? null
                    : (0, l.jsxs)(c.Text, {
                          variant: 'text-xs/normal',
                          className: a()(C.marginTop8, I.footerText),
                          children: [
                              (0, g.Vg)(A, D),
                              ' ',
                              r
                                  ? (0, l.jsx)(c.Anchor, {
                                        onClick: () => S(j.RV.SETTINGS),
                                        children: N.intl.string(N.t.VNe8Pz)
                                    })
                                  : null
                          ]
                      }),
                !t && r && z
                    ? (0, l.jsxs)(c.Text, {
                          variant: 'text-xs/normal',
                          className: a()(C.marginTop8, I.footerText),
                          children: [N.intl.string(N.t['0M2U9/']), ' ']
                      })
                    : null,
                null != L
                    ? (0, l.jsx)(v.W, {
                          guild: n,
                          error: L,
                          onClose: o
                      })
                    : null
            ]
        });
    };
