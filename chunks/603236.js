n.d(t, {
    I: () => y,
    S: () => b,
}),
    n(997841);
var r = n(54381),
    l = n(473749),
    i = n(533800),
    a = n(442837),
    s = n(755721),
    o = n(481060),
    c = n(484614),
    u = n(914010),
    d = n(246946),
    g = n(626135),
    m = n(630388),
    x = n(971130),
    h = n(530436),
    v = n(245335),
    p = n(981631),
    j = n(388032),
    f = n(869306);
let b = a.ZP.connectStores([d.Z], () => ({ hideValue: d.Z.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: l, onCopy: i, disabled: a } = e;
        return (0, r.jsx)(c.Z, {
            value: t,
            hideMessage: l ? j.intl.string(j.t["6HzNgZ"]) : null,
            buttonColor: s.zx.Colors.BRAND,
            onCopy: i,
            autoFocus: n,
            disabled: a,
        });
    }),
    y = (e) => {
        let {
                guild: t,
                noInvitesAvailable: n,
                showFriends: a,
                onClose: s,
                modalState: c,
                isApplicationBypassToggleEnabled: d,
                setInviteFlags: y,
                copyValue: O,
                changePage: E,
                inviteChannel: N,
                source: P,
                code: C,
                guildScheduledEvent: S,
                disabled: I,
                application: T,
            } = e,
            { maxAge: Z, maxUses: w, networkError: D, showVanityURL: k, flags: R } = c,
            A = l.useCallback(() => {
                g.default.track(p.rMx.COPY_INSTANT_INVITE, {
                    server: u.Z.getGuildId(),
                    channel: null == N ? void 0 : N.id,
                    channel_type: null == N ? void 0 : N.type,
                    location: P,
                    code: C,
                    guild_scheduled_event_id: null == S ? void 0 : S.id,
                    application_id: null == T ? void 0 : T.id,
                });
            }, [null == T ? void 0 : T.id, N, P, C, S]);
        return (0, r.jsxs)(o.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(b, {
                    value: O,
                    autoFocus: a,
                    onCopy: A,
                    disabled: I,
                }),
                d &&
                    (0, r.jsx)(o.rsf, {
                        checked: (0, m.yE)(R, i.$.IS_APPLICATION_BYPASS),
                        onChange: (e) => y((0, m.mB)(R, i.$.IS_APPLICATION_BYPASS, e)),
                        disabled: I,
                        label: j.intl.string(j.t["1i1bUl"]),
                        description: j.intl.string(j.t["jvd/LF"]),
                    }),
                n || k
                    ? null
                    : (0, r.jsxs)(o.Text, {
                          variant: "text-xs/normal",
                          className: f.footerText,
                          children: [
                              (0, x.Vg)(Z, w),
                              " ",
                              a
                                  ? (0, r.jsx)(o.Anchor, {
                                        onClick: () => E(v.RV.SETTINGS),
                                        children: j.intl.string(j.t["VNe8P/"]),
                                    })
                                  : null,
                          ],
                      }),
                !n && a && k
                    ? (0, r.jsxs)(o.Text, {
                          variant: "text-xs/normal",
                          className: f.footerText,
                          children: [j.intl.string(j.t["0M2U95"]), " "],
                      })
                    : null,
                null != D
                    ? (0, r.jsx)(h.W, {
                          guild: t,
                          error: D,
                          onClose: s,
                      })
                    : null,
            ],
        });
    };
