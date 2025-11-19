n.d(t, {
    I: () => y,
    S: () => f,
}),
    n(997841);
var i = n(54381),
    l = n(473749),
    s = n(533800),
    r = n(442837),
    a = n(755721),
    o = n(481060),
    u = n(484614),
    d = n(914010),
    c = n(246946),
    g = n(626135),
    h = n(630388),
    v = n(971130),
    p = n(530436),
    I = n(245335),
    m = n(981631),
    x = n(388032),
    S = n(869306);
let f = r.ZP.connectStores([c.Z], () => ({ hideValue: c.Z.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: l, onCopy: s, disabled: r } = e;
        return (0, i.jsx)(u.Z, {
            value: t,
            hideMessage: l ? x.intl.string(x.t["6HzNgZ"]) : null,
            buttonColor: a.zx.Colors.BRAND,
            onCopy: s,
            autoFocus: n,
            disabled: r,
        });
    }),
    y = (e) => {
        let {
                guild: t,
                noInvitesAvailable: n,
                showFriends: r,
                onClose: a,
                modalState: u,
                isApplicationBypassToggleEnabled: c,
                setInviteFlags: y,
                copyValue: E,
                changePage: C,
                inviteChannel: _,
                source: b,
                code: T,
                guildScheduledEvent: N,
                disabled: A,
                application: P,
            } = e,
            { maxAge: M, maxUses: Z, networkError: w, showVanityURL: j, flags: V } = u,
            O = l.useCallback(() => {
                g.default.track(m.rMx.COPY_INSTANT_INVITE, {
                    server: d.Z.getGuildId(),
                    channel: null == _ ? void 0 : _.id,
                    channel_type: null == _ ? void 0 : _.type,
                    location: b,
                    code: T,
                    guild_scheduled_event_id: null == N ? void 0 : N.id,
                    application_id: null == P ? void 0 : P.id,
                });
            }, [null == P ? void 0 : P.id, _, b, T, N]);
        return (0, i.jsxs)(o.Kqy, {
            gap: 16,
            children: [
                (0, i.jsx)(f, {
                    value: E,
                    autoFocus: r,
                    onCopy: O,
                    disabled: A,
                }),
                c &&
                    (0, i.jsx)(o.rsf, {
                        checked: (0, h.yE)(V, s.$.IS_APPLICATION_BYPASS),
                        onChange: (e) => y((0, h.mB)(V, s.$.IS_APPLICATION_BYPASS, e)),
                        disabled: A,
                        label: x.intl.string(x.t["1i1bUl"]),
                        description: x.intl.string(x.t["jvd/LF"]),
                    }),
                n || j
                    ? null
                    : (0, i.jsxs)(o.Text, {
                          variant: "text-xs/normal",
                          className: S.footerText,
                          children: [
                              (0, v.Vg)(M, Z),
                              " ",
                              r
                                  ? (0, i.jsx)(o.Anchor, {
                                        onClick: () => C(I.RV.SETTINGS),
                                        children: x.intl.string(x.t["VNe8P/"]),
                                    })
                                  : null,
                          ],
                      }),
                !n && r && j
                    ? (0, i.jsxs)(o.Text, {
                          variant: "text-xs/normal",
                          className: S.footerText,
                          children: [x.intl.string(x.t["0M2U95"]), " "],
                      })
                    : null,
                null != w
                    ? (0, i.jsx)(p.W, {
                          guild: t,
                          error: w,
                          onClose: a,
                      })
                    : null,
            ],
        });
    };
