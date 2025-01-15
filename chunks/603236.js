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
    x = t(246946),
    m = t(626135),
    h = t(630388),
    g = t(971130),
    v = t(530436),
    j = t(245335),
    f = t(981631),
    N = t(388032),
    I = t(546820),
    p = t(275477);
let C = o.ZP.connectStores([x.Z], () => ({ hideValue: x.Z.hideInstantInvites }))((e) => {
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
        let { guild: n, noInvitesAvailable: t, showFriends: r, onClose: o, modalState: d, isGuestInviteCreationToggleEnabled: x, inviteFlags: E, setInviteFlags: T, showGuestInviteToggleForCurrentVoiceChannel: S, copyValue: Z, changePage: b, inviteChannel: y, source: _, code: R, guildScheduledEvent: k, disabled: A, application: D } = e,
            { maxAge: L, maxUses: z, networkError: B, showVanityURL: M } = d,
            U = i.useCallback(() => {
                m.default.track(f.rMx.COPY_INSTANT_INVITE, {
                    server: u.Z.getGuildId(),
                    channel: null == y ? void 0 : y.id,
                    channel_type: null == y ? void 0 : y.type,
                    location: _,
                    code: R,
                    guild_scheduled_event_id: null == k ? void 0 : k.id,
                    application_id: null == D ? void 0 : D.id
                });
            }, [null == D ? void 0 : D.id, y, _, R, k]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(C, {
                    value: Z,
                    autoFocus: r,
                    onCopy: U,
                    disabled: A
                }),
                x
                    ? (0, l.jsx)('div', {
                          className: I.temporaryMembershipContainerBackground,
                          children: (0, l.jsx)(c.FormSwitch, {
                              className: I.temporaryMembershipContainer,
                              value: (0, h.yE)(E, s.$.IS_GUEST_INVITE),
                              onChange: (e) => T((0, h.mB)(E, s.$.IS_GUEST_INVITE, e)),
                              note: N.intl.string(N.t['/FeTKy']),
                              disabled: A,
                              hideBorder: !0,
                              children: S ? N.intl.string(N.t.BPL98f) : N.intl.string(N.t['2snqsL'])
                          })
                      })
                    : null,
                t || M
                    ? null
                    : (0, l.jsxs)(c.Text, {
                          variant: 'text-xs/normal',
                          className: a()(p.marginTop8, I.footerText),
                          children: [
                              (0, g.Vg)(L, z),
                              ' ',
                              r
                                  ? (0, l.jsx)(c.Anchor, {
                                        onClick: () => b(j.RV.SETTINGS),
                                        children: N.intl.string(N.t.VNe8Pz)
                                    })
                                  : null
                          ]
                      }),
                !t && r && M
                    ? (0, l.jsxs)(c.Text, {
                          variant: 'text-xs/normal',
                          className: a()(p.marginTop8, I.footerText),
                          children: [N.intl.string(N.t['0M2U9/']), ' ']
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
