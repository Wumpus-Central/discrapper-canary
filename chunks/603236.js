n.d(t, {
    I: () => j,
    S: () => N,
}),
    n(997841);
var l = n(951288),
    i = n(647438),
    r = n(533800),
    a = n(442837),
    s = n(755721),
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
    f = n(869306);
let N = a.ZP.connectStores([c.Z], () => ({ hideValue: c.Z.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: i, onCopy: r, disabled: a } = e;
        return (0, l.jsx)(u.Z, {
            value: t,
            hideMessage: i ? x.intl.string(x.t["6HzNgY"]) : null,
            buttonColor: s.zx.Colors.BRAND,
            onCopy: r,
            autoFocus: n,
            disabled: a,
        });
    }),
    j = (e) => {
        let {
                guild: t,
                noInvitesAvailable: n,
                showFriends: a,
                onClose: s,
                modalState: u,
                isApplicationBypassToggleEnabled: c,
                setInviteFlags: j,
                copyValue: _,
                changePage: S,
                inviteChannel: E,
                source: b,
                code: T,
                guildScheduledEvent: O,
                disabled: y,
                application: C,
            } = e,
            { maxAge: P, maxUses: Z, networkError: A, showVanityURL: M, flags: w } = u,
            R = i.useCallback(() => {
                g.default.track(I.rMx.COPY_INSTANT_INVITE, {
                    server: d.Z.getGuildId(),
                    channel: null == E ? void 0 : E.id,
                    channel_type: null == E ? void 0 : E.type,
                    location: b,
                    code: T,
                    guild_scheduled_event_id: null == O ? void 0 : O.id,
                    application_id: null == C ? void 0 : C.id,
                });
            }, [null == C ? void 0 : C.id, E, b, T, O]);
        return (0, l.jsxs)(o.Kqy, {
            gap: 16,
            children: [
                (0, l.jsx)(N, {
                    value: _,
                    autoFocus: a,
                    onCopy: R,
                    disabled: y,
                }),
                c &&
                    (0, l.jsx)(o.rsf, {
                        checked: (0, h.yE)(w, r.$.IS_APPLICATION_BYPASS),
                        onChange: (e) => j((0, h.mB)(w, r.$.IS_APPLICATION_BYPASS, e)),
                        disabled: y,
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
                              a
                                  ? (0, l.jsx)(o.eee, {
                                        onClick: () => S(v.RV.SETTINGS),
                                        children: x.intl.string(x.t.VNe8Pz),
                                    })
                                  : null,
                          ],
                      }),
                !n && a && M
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
                          onClose: s,
                      })
                    : null,
            ],
        });
    };
