n.d(t, {
    I: () => E,
    S: () => f,
}),
    n(997841);
var i = n(951288),
    l = n(647438),
    s = n(533800),
    a = n(442837),
    r = n(755721),
    o = n(481060),
    d = n(484614),
    u = n(914010),
    c = n(246946),
    g = n(626135),
    h = n(630388),
    m = n(971130),
    v = n(530436),
    p = n(245335),
    x = n(981631),
    I = n(388032),
    S = n(451964);
let f = a.ZP.connectStores([c.Z], () => ({ hideValue: c.Z.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: l, onCopy: s, disabled: a } = e;
        return (0, i.jsx)(d.Z, {
            value: t,
            hideMessage: l ? I.intl.string(I.t["6HzNgY"]) : null,
            buttonColor: r.zx.Colors.BRAND,
            onCopy: s,
            autoFocus: n,
            disabled: a,
        });
    }),
    E = (e) => {
        let {
                guild: t,
                noInvitesAvailable: n,
                showFriends: a,
                onClose: r,
                modalState: d,
                isApplicationBypassToggleEnabled: c,
                setInviteFlags: E,
                copyValue: y,
                changePage: C,
                inviteChannel: _,
                source: N,
                code: T,
                guildScheduledEvent: b,
                disabled: j,
                application: A,
            } = e,
            { maxAge: Z, maxUses: M, networkError: P, showVanityURL: w, flags: V } = d,
            O = l.useCallback(() => {
                g.default.track(x.rMx.COPY_INSTANT_INVITE, {
                    server: u.Z.getGuildId(),
                    channel: null == _ ? void 0 : _.id,
                    channel_type: null == _ ? void 0 : _.type,
                    location: N,
                    code: T,
                    guild_scheduled_event_id: null == b ? void 0 : b.id,
                    application_id: null == A ? void 0 : A.id,
                });
            }, [null == A ? void 0 : A.id, _, N, T, b]);
        return (0, i.jsxs)(o.Kqy, {
            gap: 16,
            children: [
                (0, i.jsx)(f, {
                    value: y,
                    autoFocus: a,
                    onCopy: O,
                    disabled: j,
                }),
                c &&
                    (0, i.jsx)(o.rsf, {
                        checked: (0, h.yE)(V, s.$.IS_APPLICATION_BYPASS),
                        onChange: (e) => E((0, h.mB)(V, s.$.IS_APPLICATION_BYPASS, e)),
                        disabled: j,
                        label: I.intl.string(I.t["1i1bUl"]),
                        description: I.intl.string(I.t["jvd/LC"]),
                    }),
                n || w
                    ? null
                    : (0, i.jsxs)(o.Text, {
                          variant: "text-xs/normal",
                          className: S.footerText,
                          children: [
                              (0, m.Vg)(Z, M),
                              " ",
                              a
                                  ? (0, i.jsx)(o.Anchor, {
                                        onClick: () => C(p.RV.SETTINGS),
                                        children: I.intl.string(I.t.VNe8Pz),
                                    })
                                  : null,
                          ],
                      }),
                !n && a && w
                    ? (0, i.jsxs)(o.Text, {
                          variant: "text-xs/normal",
                          className: S.footerText,
                          children: [I.intl.string(I.t["0M2U9/"]), " "],
                      })
                    : null,
                null != P
                    ? (0, i.jsx)(v.W, {
                          guild: t,
                          error: P,
                          onClose: r,
                      })
                    : null,
            ],
        });
    };
