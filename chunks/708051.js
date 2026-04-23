l.d(t, { I: () => C, p: () => y }), l(938796);
var n = l(627968),
    i = l(64700),
    s = l(821418),
    a = l(665260),
    r = l(311907),
    d = l(862482),
    o = l(331322),
    c = l(243721),
    u = l(834730),
    x = l(349288),
    h = l(416052),
    m = l(967198),
    g = l(351906),
    v = l(954571),
    j = l(735547),
    A = l(299827),
    E = l(172799),
    p = l(652215),
    f = l(985018),
    N = l(640852);
let C = r.Ay.connectStores([g.A], () => ({ hideValue: g.A.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: l, hideValue: i, onCopy: s, disabled: a } = e;
        return (0, n.jsx)(h.A, {
            value: t,
            hideMessage: i ? f.intl.string(f.t["6HzNgZ"]) : null,
            buttonColor: d.$n.Colors.BRAND,
            onCopy: s,
            autoFocus: l,
            disabled: a,
        });
    }),
    y = (e) => {
        let {
                guild: t,
                noInvitesAvailable: l,
                showFriends: r,
                onClose: d,
                modalState: h,
                isApplicationBypassToggleEnabled: g,
                setInviteFlags: y,
                copyValue: b,
                changePage: S,
                inviteChannel: I,
                source: T,
                code: R,
                guildScheduledEvent: D,
                disabled: _,
                application: k,
            } = e,
            { maxAge: G, maxUses: L, networkError: M, showVanityURL: P, flags: U } = h,
            z = i.useCallback(() => {
                v.default.track(p.HAw.COPY_INSTANT_INVITE, {
                    server: m.A.getGuildId(),
                    channel: I?.id,
                    channel_type: I?.type,
                    location: T,
                    code: R,
                    guild_scheduled_event_id: D?.id,
                    application_id: k?.id,
                });
            }, [k?.id, I, T, R, D]);
        return (0, n.jsxs)(o.B, {
            gap: 16,
            children: [
                (0, n.jsx)(C, { value: b, autoFocus: r, onCopy: z, disabled: _ }),
                g &&
                    (0, n.jsx)(c.d, {
                        checked: (0, a.Lt)(U, s.Q.IS_APPLICATION_BYPASS),
                        onChange: (e) => y((0, a.lA)(U, s.Q.IS_APPLICATION_BYPASS, e)),
                        disabled: _,
                        label: f.intl.string(f.t["1i1bUl"]),
                        description: f.intl.string(f.t["jvd/LF"]),
                    }),
                l || P
                    ? null
                    : (0, n.jsxs)(u.E, {
                          variant: "text-xs/normal",
                          className: N.PJ,
                          children: [
                              (0, j.Be)(G, L),
                              " ",
                              r
                                  ? (0, n.jsx)(x.Anchor, {
                                        onClick: () => S(E.QR.SETTINGS),
                                        children: f.intl.string(f.t["VNe8P/"]),
                                    })
                                  : null,
                          ],
                      }),
                !l && r && P
                    ? (0, n.jsxs)(u.E, {
                          variant: "text-xs/normal",
                          className: N.PJ,
                          children: [f.intl.string(f.t["0M2U95"]), " "],
                      })
                    : null,
                null != M ? (0, n.jsx)(A.X, { guild: t, error: M, onClose: d }) : null,
            ],
        });
    };
