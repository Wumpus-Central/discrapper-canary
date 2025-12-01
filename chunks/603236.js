n.d(t, {
    I: () => y,
    S: () => b,
}),
    n(997841);
var r = n(54381),
    l = n(473749),
    i = n(533800),
    a = n(95015),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    u = n(484614),
    d = n(914010),
    g = n(246946),
    m = n(626135),
    x = n(971130),
    h = n(530436),
    v = n(245335),
    p = n(981631),
    j = n(388032),
    f = n(451964);
let b = s.ZP.connectStores([g.Z], () => ({ hideValue: g.Z.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: l, onCopy: i, disabled: a } = e;
        return (0, r.jsx)(u.Z, {
            value: t,
            hideMessage: l ? j.intl.string(j.t["6HzNgZ"]) : null,
            buttonColor: o.zx.Colors.BRAND,
            onCopy: i,
            autoFocus: n,
            disabled: a,
        });
    }),
    y = (e) => {
        let {
                guild: t,
                noInvitesAvailable: n,
                showFriends: s,
                onClose: o,
                modalState: u,
                isApplicationBypassToggleEnabled: g,
                setInviteFlags: y,
                copyValue: O,
                changePage: E,
                inviteChannel: N,
                source: C,
                code: P,
                guildScheduledEvent: S,
                disabled: I,
                application: Z,
            } = e,
            { maxAge: T, maxUses: w, networkError: D, showVanityURL: k, flags: R } = u,
            _ = l.useCallback(() => {
                m.default.track(p.rMx.COPY_INSTANT_INVITE, {
                    server: d.Z.getGuildId(),
                    channel: null == N ? void 0 : N.id,
                    channel_type: null == N ? void 0 : N.type,
                    location: C,
                    code: P,
                    guild_scheduled_event_id: null == S ? void 0 : S.id,
                    application_id: null == Z ? void 0 : Z.id,
                });
            }, [null == Z ? void 0 : Z.id, N, C, P, S]);
        return (0, r.jsxs)(c.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(b, {
                    value: O,
                    autoFocus: s,
                    onCopy: _,
                    disabled: I,
                }),
                g &&
                    (0, r.jsx)(c.rsf, {
                        checked: (0, a.yE)(R, i.$.IS_APPLICATION_BYPASS),
                        onChange: (e) => y((0, a.mB)(R, i.$.IS_APPLICATION_BYPASS, e)),
                        disabled: I,
                        label: j.intl.string(j.t["1i1bUl"]),
                        description: j.intl.string(j.t["jvd/LF"]),
                    }),
                n || k
                    ? null
                    : (0, r.jsxs)(c.Text, {
                          variant: "text-xs/normal",
                          className: f.footerText,
                          children: [
                              (0, x.Vg)(T, w),
                              " ",
                              s
                                  ? (0, r.jsx)(c.Anchor, {
                                        onClick: () => E(v.RV.SETTINGS),
                                        children: j.intl.string(j.t["VNe8P/"]),
                                    })
                                  : null,
                          ],
                      }),
                !n && s && k
                    ? (0, r.jsxs)(c.Text, {
                          variant: "text-xs/normal",
                          className: f.footerText,
                          children: [j.intl.string(j.t["0M2U95"]), " "],
                      })
                    : null,
                null != D
                    ? (0, r.jsx)(h.W, {
                          guild: t,
                          error: D,
                          onClose: o,
                      })
                    : null,
            ],
        });
    };
