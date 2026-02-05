n.d(t, { I: () => f, p: () => E }), n(938796);
var l = n(627968),
    i = n(64700),
    s = n(821418),
    a = n(665260),
    r = n(311907),
    d = n(421380),
    c = n(397927),
    o = n(416052),
    u = n(967198),
    x = n(351906),
    h = n(954571),
    m = n(735547),
    g = n(299827),
    v = n(172799),
    j = n(652215),
    A = n(985018),
    N = n(912579);
let f = r.Ay.connectStores([x.A], () => ({ hideValue: x.A.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: n, hideValue: i, onCopy: s, disabled: a } = e;
        return (0, l.jsx)(o.A, {
            value: t,
            hideMessage: i ? A.intl.string(A.t["6HzNgZ"]) : null,
            buttonColor: d.$n.Colors.BRAND,
            onCopy: s,
            autoFocus: n,
            disabled: a,
        });
    }),
    E = (e) => {
        let {
                guild: t,
                noInvitesAvailable: n,
                showFriends: r,
                onClose: d,
                modalState: o,
                isApplicationBypassToggleEnabled: x,
                setInviteFlags: E,
                copyValue: p,
                changePage: C,
                inviteChannel: T,
                source: y,
                code: b,
                guildScheduledEvent: I,
                disabled: S,
                application: G,
            } = e,
            { maxAge: k, maxUses: _, networkError: R, showVanityURL: D, flags: M } = o,
            P = i.useCallback(() => {
                h.default.track(j.HAw.COPY_INSTANT_INVITE, {
                    server: u.A.getGuildId(),
                    channel: T?.id,
                    channel_type: T?.type,
                    location: y,
                    code: b,
                    guild_scheduled_event_id: I?.id,
                    application_id: G?.id,
                });
            }, [G?.id, T, y, b, I]);
        return (0, l.jsxs)(c.BJc, {
            gap: 16,
            children: [
                (0, l.jsx)(f, { value: p, autoFocus: r, onCopy: P, disabled: S }),
                x &&
                    (0, l.jsx)(c.dOG, {
                        checked: (0, a.Lt)(M, s.Q.IS_APPLICATION_BYPASS),
                        onChange: (e) => E((0, a.lA)(M, s.Q.IS_APPLICATION_BYPASS, e)),
                        disabled: S,
                        label: A.intl.string(A.t["1i1bUl"]),
                        description: A.intl.string(A.t["jvd/LF"]),
                    }),
                n || D
                    ? null
                    : (0, l.jsxs)(c.Text, {
                          variant: "text-xs/normal",
                          className: N.PJ,
                          children: [
                              (0, m.Be)(k, _),
                              " ",
                              r
                                  ? (0, l.jsx)(c.MzZ, {
                                        onClick: () => C(v.QR.SETTINGS),
                                        children: A.intl.string(A.t["VNe8P/"]),
                                    })
                                  : null,
                          ],
                      }),
                !n && r && D
                    ? (0, l.jsxs)(c.Text, {
                          variant: "text-xs/normal",
                          className: N.PJ,
                          children: [A.intl.string(A.t["0M2U95"]), " "],
                      })
                    : null,
                null != R ? (0, l.jsx)(g.X, { guild: t, error: R, onClose: d }) : null,
            ],
        });
    };
