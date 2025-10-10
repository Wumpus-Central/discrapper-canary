n.d(t, {
    I: () => S,
    S: () => N,
}),
    n(997841);
var l = n(951288),
    i = n(647438),
    s = n(533800),
    r = n(442837),
    a = n(755721),
    o = n(481060),
    u = n(484614),
    d = n(914010),
    c = n(246946),
    g = n(626135),
    h = n(630388),
    m = n(971130),
    p = n(530436),
    v = n(245335),
    I = n(981631),
    x = n(388032),
    f = n(451964);
let N = r.ZP.connectStores([c.Z], () => ({ hideValue: c.Z.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: i, onCopy: s, disabled: r } = e;
        return (0, l.jsx)(u.Z, {
            value: t,
            hideMessage: i ? x.intl.string(x.t["6HzNgY"]) : null,
            buttonColor: a.zx.Colors.BRAND,
            onCopy: s,
            autoFocus: n,
            disabled: r,
        });
    }),
    S = (e) => {
        let {
                guild: t,
                noInvitesAvailable: n,
                showFriends: r,
                onClose: a,
                modalState: u,
                isApplicationBypassToggleEnabled: c,
                setInviteFlags: S,
                copyValue: _,
                changePage: j,
                inviteChannel: b,
                source: E,
                code: y,
                guildScheduledEvent: T,
                disabled: O,
                application: C,
            } = e,
            { maxAge: P, maxUses: Z, networkError: A, showVanityURL: M, flags: w } = u,
            R = i.useCallback(() => {
                g.default.track(I.rMx.COPY_INSTANT_INVITE, {
                    server: d.Z.getGuildId(),
                    channel: null == b ? void 0 : b.id,
                    channel_type: null == b ? void 0 : b.type,
                    location: E,
                    code: y,
                    guild_scheduled_event_id: null == T ? void 0 : T.id,
                    application_id: null == C ? void 0 : C.id,
                });
            }, [null == C ? void 0 : C.id, b, E, y, T]);
        return (0, l.jsxs)(o.Kqy, {
            gap: 16,
            children: [
                (0, l.jsx)(N, {
                    value: _,
                    autoFocus: r,
                    onCopy: R,
                    disabled: O,
                }),
                c &&
                    (0, l.jsx)(o.rsf, {
                        checked: (0, h.yE)(w, s.$.IS_APPLICATION_BYPASS),
                        onChange: (e) => S((0, h.mB)(w, s.$.IS_APPLICATION_BYPASS, e)),
                        disabled: O,
                        label: x.intl.string(x.t["1i1bUl"]),
                        description: x.intl.string(x.t["jvd/LC"]),
                    }),
                n || M
                    ? null
                    : (0, l.jsxs)(o.Text, {
                          variant: "text-xs/normal",
                          className: f.footerText,
                          children: [
                              (0, m.Vg)(P, Z),
                              " ",
                              r
                                  ? (0, l.jsx)(o.eee, {
                                        onClick: () => j(v.RV.SETTINGS),
                                        children: x.intl.string(x.t.VNe8Pz),
                                    })
                                  : null,
                          ],
                      }),
                !n && r && M
                    ? (0, l.jsxs)(o.Text, {
                          variant: "text-xs/normal",
                          className: f.footerText,
                          children: [x.intl.string(x.t["0M2U9/"]), " "],
                      })
                    : null,
                null != A
                    ? (0, l.jsx)(p.W, {
                          guild: t,
                          error: A,
                          onClose: a,
                      })
                    : null,
            ],
        });
    };
