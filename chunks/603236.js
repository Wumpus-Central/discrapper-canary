n.d(t, {
    I: () => y,
    S: () => b,
}),
    n(997841);
var l = n(54381),
    r = n(473749),
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
    f = n(388032),
    j = n(451964);
let b = s.ZP.connectStores([g.Z], () => ({ hideValue: g.Z.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: r, onCopy: i, disabled: a } = e;
        return (0, l.jsx)(u.Z, {
            value: t,
            hideMessage: r ? f.intl.string(f.t["6HzNgZ"]) : null,
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
            { maxAge: T, maxUses: w, networkError: k, showVanityURL: D, flags: R } = u,
            _ = r.useCallback(() => {
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
        return (0, l.jsxs)(c.Kqy, {
            gap: 16,
            children: [
                (0, l.jsx)(b, {
                    value: O,
                    autoFocus: s,
                    onCopy: _,
                    disabled: I,
                }),
                g &&
                    (0, l.jsx)(c.rsf, {
                        checked: (0, a.yE)(R, i.$.IS_APPLICATION_BYPASS),
                        onChange: (e) => y((0, a.mB)(R, i.$.IS_APPLICATION_BYPASS, e)),
                        disabled: I,
                        label: f.intl.string(f.t["1i1bUl"]),
                        description: f.intl.string(f.t["jvd/LF"]),
                    }),
                n || D
                    ? null
                    : (0, l.jsxs)(c.Text, {
                          variant: "text-xs/normal",
                          className: j.footerText,
                          children: [
                              (0, x.Vg)(T, w),
                              " ",
                              s
                                  ? (0, l.jsx)(c.Anchor, {
                                        onClick: () => E(v.RV.SETTINGS),
                                        children: f.intl.string(f.t["VNe8P/"]),
                                    })
                                  : null,
                          ],
                      }),
                !n && s && D
                    ? (0, l.jsxs)(c.Text, {
                          variant: "text-xs/normal",
                          className: j.footerText,
                          children: [f.intl.string(f.t["0M2U95"]), " "],
                      })
                    : null,
                null != k
                    ? (0, l.jsx)(h.W, {
                          guild: t,
                          error: k,
                          onClose: o,
                      })
                    : null,
            ],
        });
    };
