n.d(t, {
    I: () => y,
    S: () => x,
}),
    n(997841);
var l = n(54381),
    i = n(473749),
    s = n(533800),
    r = n(95015),
    a = n(442837),
    o = n(755721),
    u = n(481060),
    d = n(484614),
    c = n(914010),
    g = n(246946),
    h = n(626135),
    p = n(971130),
    v = n(530436),
    I = n(245335),
    m = n(981631),
    S = n(388032),
    f = n(444942);
let x = a.ZP.connectStores([g.Z], () => ({ hideValue: g.Z.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: i, onCopy: s, disabled: r } = e;
        return (0, l.jsx)(d.Z, {
            value: t,
            hideMessage: i ? S.intl.string(S.t["6HzNgZ"]) : null,
            buttonColor: o.zx.Colors.BRAND,
            onCopy: s,
            autoFocus: n,
            disabled: r,
        });
    }),
    y = (e) => {
        let {
                guild: t,
                noInvitesAvailable: n,
                showFriends: a,
                onClose: o,
                modalState: d,
                isApplicationBypassToggleEnabled: g,
                setInviteFlags: y,
                copyValue: E,
                changePage: _,
                inviteChannel: b,
                source: C,
                code: T,
                guildScheduledEvent: A,
                disabled: N,
                application: M,
            } = e,
            { maxAge: P, maxUses: Z, networkError: j, showVanityURL: w, flags: R } = d,
            O = i.useCallback(() => {
                h.default.track(m.rMx.COPY_INSTANT_INVITE, {
                    server: c.Z.getGuildId(),
                    channel: null == b ? void 0 : b.id,
                    channel_type: null == b ? void 0 : b.type,
                    location: C,
                    code: T,
                    guild_scheduled_event_id: null == A ? void 0 : A.id,
                    application_id: null == M ? void 0 : M.id,
                });
            }, [null == M ? void 0 : M.id, b, C, T, A]);
        return (0, l.jsxs)(u.Kqy, {
            gap: 16,
            children: [
                (0, l.jsx)(x, {
                    value: E,
                    autoFocus: a,
                    onCopy: O,
                    disabled: N,
                }),
                g &&
                    (0, l.jsx)(u.rsf, {
                        checked: (0, r.yE)(R, s.$.IS_APPLICATION_BYPASS),
                        onChange: (e) => y((0, r.mB)(R, s.$.IS_APPLICATION_BYPASS, e)),
                        disabled: N,
                        label: S.intl.string(S.t["1i1bUl"]),
                        description: S.intl.string(S.t["jvd/LF"]),
                    }),
                n || w
                    ? null
                    : (0, l.jsxs)(u.Text, {
                          variant: "text-xs/normal",
                          className: f.footerText,
                          children: [
                              (0, p.Vg)(P, Z),
                              " ",
                              a
                                  ? (0, l.jsx)(u.Anchor, {
                                        onClick: () => _(I.RV.SETTINGS),
                                        children: S.intl.string(S.t["VNe8P/"]),
                                    })
                                  : null,
                          ],
                      }),
                !n && a && w
                    ? (0, l.jsxs)(u.Text, {
                          variant: "text-xs/normal",
                          className: f.footerText,
                          children: [S.intl.string(S.t["0M2U95"]), " "],
                      })
                    : null,
                null != j
                    ? (0, l.jsx)(v.W, {
                          guild: t,
                          error: j,
                          onClose: o,
                      })
                    : null,
            ],
        });
    };
