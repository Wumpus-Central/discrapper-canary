t.d(n, {
    I: function () {
        return E;
    },
    S: function () {
        return C;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(533800),
    o = t(442837),
    c = t(481060),
    d = t(484614),
    u = t(914010),
    m = t(246946),
    x = t(626135),
    h = t(630388),
    g = t(971130),
    v = t(530436),
    j = t(245335),
    f = t(981631),
    p = t(388032),
    I = t(755527),
    N = t(232186);
let C = o.ZP.connectStores([m.Z], () => ({ hideValue: m.Z.hideInstantInvites }))((e) => {
        let { value: n, autoFocus: t, hideValue: i, onCopy: r, disabled: a } = e;
        return (0, l.jsx)(d.Z, {
            value: i ? p.intl.string(p.t['6HzNgY']) : n,
            buttonColor: c.Button.Colors.BRAND,
            onCopy: r,
            autoFocus: t,
            disabled: a
        });
    }),
    E = (e) => {
        let { guild: n, noInvitesAvailable: t, showFriends: r, onClose: o, modalState: d, isGuestInviteCreationToggleEnabled: m, inviteFlags: E, setInviteFlags: S, showGuestInviteToggleForCurrentVoiceChannel: T, copyValue: y, changePage: b, inviteChannel: Z, source: R, code: _, guildScheduledEvent: k, disabled: A } = e,
            { maxAge: D, maxUses: L, networkError: B, showVanityURL: M } = d,
            z = i.useCallback(() => {
                x.default.track(f.rMx.COPY_INSTANT_INVITE, {
                    server: u.Z.getGuildId(),
                    channel: null == Z ? void 0 : Z.id,
                    channel_type: null == Z ? void 0 : Z.type,
                    location: R,
                    code: _,
                    guild_scheduled_event_id: null == k ? void 0 : k.id
                });
            }, [Z, R, _, k]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(C, {
                    value: y,
                    autoFocus: r,
                    onCopy: z,
                    disabled: A
                }),
                m
                    ? (0, l.jsx)('div', {
                          className: I.temporaryMembershipContainerBackground,
                          children: (0, l.jsx)(c.FormSwitch, {
                              className: I.temporaryMembershipContainer,
                              value: (0, h.yE)(E, s.$.IS_GUEST_INVITE),
                              onChange: (e) => S((0, h.mB)(E, s.$.IS_GUEST_INVITE, e)),
                              note: p.intl.string(p.t['/FeTKy']),
                              disabled: A,
                              hideBorder: !0,
                              children: T ? p.intl.string(p.t.BPL98f) : p.intl.string(p.t['2snqsL'])
                          })
                      })
                    : null,
                t || M
                    ? null
                    : (0, l.jsxs)(c.Text, {
                          variant: 'text-xs/normal',
                          className: a()(N.marginTop8, I.footerText),
                          children: [
                              (0, g.Vg)(D, L),
                              ' ',
                              r
                                  ? (0, l.jsx)(c.Anchor, {
                                        onClick: () => b(j.RV.SETTINGS),
                                        children: p.intl.string(p.t.VNe8Pz)
                                    })
                                  : null
                          ]
                      }),
                !t && r && M
                    ? (0, l.jsxs)(c.Text, {
                          variant: 'text-xs/normal',
                          className: a()(N.marginTop8, I.footerText),
                          children: [p.intl.string(p.t['0M2U9/']), ' ']
                      })
                    : null,
                null != B
                    ? (0, l.jsx)(v.W, {
                          guild: n,
                          error: B,
                          onClose: o
                      })
                    : null
            ]
        });
    };
