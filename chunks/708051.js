n.d(t, { I: () => f, p: () => y }), n(938796);
var l = n(627968),
    i = n(64700),
    s = n(821418),
    r = n(665260),
    a = n(311907),
    d = n(862482),
    o = n(331322),
    c = n(243721),
    u = n(834730),
    x = n(349288),
    h = n(416052),
    m = n(967198),
    g = n(351906),
    v = n(954571),
    j = n(735547),
    A = n(299827),
    E = n(172799),
    p = n(652215),
    N = n(985018),
    C = n(640852);
let f = a.Ay.connectStores([g.A], () => ({ hideValue: g.A.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: i, onCopy: s, disabled: r } = e;
        return (0, l.jsx)(h.A, {
            value: t,
            hideMessage: i ? N.intl.string(N.t["6HzNgZ"]) : null,
            buttonColor: d.$n.Colors.BRAND,
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
                onClose: d,
                modalState: h,
                isApplicationBypassToggleEnabled: g,
                setInviteFlags: y,
                copyValue: b,
                changePage: S,
                inviteChannel: I,
                source: T,
                code: R,
                guildScheduledEvent: _,
                disabled: k,
                application: D,
            } = e,
            { maxAge: G, maxUses: L, networkError: M, showVanityURL: P, flags: U } = h,
            z = i.useCallback(() => {
                v.default.track(p.HAw.COPY_INSTANT_INVITE, {
                    server: m.A.getGuildId(),
                    channel: I?.id,
                    channel_type: I?.type,
                    location: T,
                    code: R,
                    guild_scheduled_event_id: _?.id,
                    application_id: D?.id,
                });
            }, [D?.id, I, T, R, _]);
        return (0, l.jsxs)(o.B, {
            gap: 16,
            children: [
                (0, l.jsx)(f, { value: b, autoFocus: a, onCopy: z, disabled: k }),
                g &&
                    (0, l.jsx)(c.d, {
                        checked: (0, r.Lt)(U, s.Q.IS_APPLICATION_BYPASS),
                        onChange: (e) => y((0, r.lA)(U, s.Q.IS_APPLICATION_BYPASS, e)),
                        disabled: k,
                        label: N.intl.string(N.t["1i1bUl"]),
                        description: N.intl.string(N.t["jvd/LF"]),
                    }),
                n || P
                    ? null
                    : (0, l.jsxs)(u.E, {
                          variant: "text-xs/normal",
                          className: C.PJ,
                          children: [
                              (0, j.Be)(G, L),
                              " ",
                              a
                                  ? (0, l.jsx)(x.Anchor, {
                                        onClick: () => S(E.QR.SETTINGS),
                                        children: N.intl.string(N.t["VNe8P/"]),
                                    })
                                  : null,
                          ],
                      }),
                !n && a && P
                    ? (0, l.jsxs)(u.E, {
                          variant: "text-xs/normal",
                          className: C.PJ,
                          children: [N.intl.string(N.t["0M2U95"]), " "],
                      })
                    : null,
                null != M ? (0, l.jsx)(A.X, { guild: t, error: M, onClose: d }) : null,
            ],
        });
    };
