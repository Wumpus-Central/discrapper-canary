n.d(t, {
    I: () => y,
    S: () => f,
}),
    n(997841);
var i = n(54381),
    l = n(473749),
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
    x = n(451964);
let f = a.ZP.connectStores([g.Z], () => ({ hideValue: g.Z.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: l, onCopy: s, disabled: r } = e;
        return (0, i.jsx)(d.Z, {
            value: t,
            hideMessage: l ? S.intl.string(S.t["6HzNgZ"]) : null,
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
                inviteChannel: C,
                source: T,
                code: b,
                guildScheduledEvent: N,
                disabled: A,
                application: P,
            } = e,
            { maxAge: M, maxUses: Z, networkError: w, showVanityURL: j, flags: V } = d,
            O = l.useCallback(() => {
                h.default.track(m.rMx.COPY_INSTANT_INVITE, {
                    server: c.Z.getGuildId(),
                    channel: null == C ? void 0 : C.id,
                    channel_type: null == C ? void 0 : C.type,
                    location: T,
                    code: b,
                    guild_scheduled_event_id: null == N ? void 0 : N.id,
                    application_id: null == P ? void 0 : P.id,
                });
            }, [null == P ? void 0 : P.id, C, T, b, N]);
        return (0, i.jsxs)(u.Kqy, {
            gap: 16,
            children: [
                (0, i.jsx)(f, {
                    value: E,
                    autoFocus: a,
                    onCopy: O,
                    disabled: A,
                }),
                g &&
                    (0, i.jsx)(u.rsf, {
                        checked: (0, r.yE)(V, s.$.IS_APPLICATION_BYPASS),
                        onChange: (e) => y((0, r.mB)(V, s.$.IS_APPLICATION_BYPASS, e)),
                        disabled: A,
                        label: S.intl.string(S.t["1i1bUl"]),
                        description: S.intl.string(S.t["jvd/LF"]),
                    }),
                n || j
                    ? null
                    : (0, i.jsxs)(u.Text, {
                          variant: "text-xs/normal",
                          className: x.footerText,
                          children: [
                              (0, p.Vg)(M, Z),
                              " ",
                              a
                                  ? (0, i.jsx)(u.Anchor, {
                                        onClick: () => _(I.RV.SETTINGS),
                                        children: S.intl.string(S.t["VNe8P/"]),
                                    })
                                  : null,
                          ],
                      }),
                !n && a && j
                    ? (0, i.jsxs)(u.Text, {
                          variant: "text-xs/normal",
                          className: x.footerText,
                          children: [S.intl.string(S.t["0M2U95"]), " "],
                      })
                    : null,
                null != w
                    ? (0, i.jsx)(v.W, {
                          guild: t,
                          error: w,
                          onClose: o,
                      })
                    : null,
            ],
        });
    };
