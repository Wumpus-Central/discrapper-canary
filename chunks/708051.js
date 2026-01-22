n.d(t, {
    I: () => b,
    p: () => y,
}),
    n(938796);
var l = n(627968),
    r = n(64700),
    i = n(821418),
    s = n(665260),
    a = n(311907),
    o = n(421380),
    c = n(397927),
    u = n(416052),
    d = n(967198),
    g = n(351906),
    x = n(954571),
    m = n(735547),
    h = n(299827),
    j = n(172799),
    v = n(652215),
    p = n(985018),
    f = n(912579);
let b = a.Ay.connectStores([g.A], () => ({
        hideValue: g.A.hideInstantInvites,
    }))((e) => {
        let { value: t, autoFocus: n, hideValue: r, onCopy: i, disabled: s } = e;
        return (0, l.jsx)(u.A, {
            value: t,
            hideMessage: r ? p.intl.string(p.t["6HzNgZ"]) : null,
            buttonColor: o.$n.Colors.BRAND,
            onCopy: i,
            autoFocus: n,
            disabled: s,
        });
    }),
    y = (e) => {
        let {
                guild: t,
                noInvitesAvailable: n,
                showFriends: a,
                onClose: o,
                modalState: u,
                isApplicationBypassToggleEnabled: g,
                setInviteFlags: y,
                copyValue: O,
                changePage: A,
                inviteChannel: N,
                source: E,
                code: C,
                guildScheduledEvent: P,
                disabled: S,
                application: T,
            } = e,
            { maxAge: w, maxUses: I, networkError: D, showVanityURL: k, flags: G } = u,
            R = r.useCallback(() => {
                x.default.track(v.HAw.COPY_INSTANT_INVITE, {
                    server: d.A.getGuildId(),
                    channel: null == N ? void 0 : N.id,
                    channel_type: null == N ? void 0 : N.type,
                    location: E,
                    code: C,
                    guild_scheduled_event_id: null == P ? void 0 : P.id,
                    application_id: null == T ? void 0 : T.id,
                });
            }, [null == T ? void 0 : T.id, N, E, C, P]);
        return (0, l.jsxs)(c.BJc, {
            gap: 16,
            children: [
                (0, l.jsx)(b, {
                    value: O,
                    autoFocus: a,
                    onCopy: R,
                    disabled: S,
                }),
                g &&
                    (0, l.jsx)(c.dOG, {
                        checked: (0, s.Lt)(G, i.Q.IS_APPLICATION_BYPASS),
                        onChange: (e) => y((0, s.lA)(G, i.Q.IS_APPLICATION_BYPASS, e)),
                        disabled: S,
                        label: p.intl.string(p.t["1i1bUl"]),
                        description: p.intl.string(p.t["jvd/LF"]),
                    }),
                n || k
                    ? null
                    : (0, l.jsxs)(c.Text, {
                          variant: "text-xs/normal",
                          className: f.PJ,
                          children: [
                              (0, m.Be)(w, I),
                              " ",
                              a
                                  ? (0, l.jsx)(c.MzZ, {
                                        onClick: () => A(j.QR.SETTINGS),
                                        children: p.intl.string(p.t["VNe8P/"]),
                                    })
                                  : null,
                          ],
                      }),
                !n && a && k
                    ? (0, l.jsxs)(c.Text, {
                          variant: "text-xs/normal",
                          className: f.PJ,
                          children: [p.intl.string(p.t["0M2U95"]), " "],
                      })
                    : null,
                null != D
                    ? (0, l.jsx)(h.X, {
                          guild: t,
                          error: D,
                          onClose: o,
                      })
                    : null,
            ],
        });
    };
