l.d(t, { I: () => S, p: () => T }), l(938796);
var n = l(627968),
    i = l(64700),
    s = l(821418),
    a = l(665260),
    r = l(17928),
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
    E = l(939249),
    A = l(181658),
    p = l(997509),
    N = l(576705),
    f = l(652215),
    C = l(985018),
    y = l(640852);
function b(e) {
    let { guild: t, error: l, onClose: s } = e,
        a = t.id,
        r = i.useCallback(() => {
            s(), p.A.open(a, f.BEX.INVITES);
        }, [a, s]),
        d = i.useCallback(
            (e) =>
                (0, n.jsx)(E.D, {
                    className: y.P5,
                    onClick: r,
                    children: (0, n.jsx)(u.E, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [r],
        ),
        o = i.useCallback(
            (e) =>
                (0, n.jsx)(x.Anchor, {
                    href: f.X7G.INVITES_HELP,
                    target: "_blank",
                    children: (0, n.jsx)(u.E, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [],
        ),
        c =
            l instanceof A.A
                ? l.code !== f.t02.TOO_MANY_INVITES
                    ? l.getAnyErrorMessage()
                    : N.A.can(f.xBc.MANAGE_GUILD, t)
                      ? C.intl.format(C.t["H/RUY1"], { inviteListHook: d, inviteHelpHook: o })
                      : C.intl.string(C.t["/FxH6G"])
                : "message" in l
                  ? l.message
                  : C.intl.string(C.t.eAn6z2);
    return (0, n.jsx)(u.E, {
        className: y.gJ,
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: c,
    });
}
var I = l(172799);
let S = r.Ay.connectStores([g.A], () => ({ hideValue: g.A.hideInstantInvites }))((e) => {
        let { value: t, autoFocus: l, hideValue: i, onCopy: s, disabled: a } = e;
        return (0, n.jsx)(h.A, {
            value: t,
            hideMessage: i ? C.intl.string(C.t["6HzNgZ"]) : null,
            buttonColor: d.$n.Colors.BRAND,
            onCopy: s,
            autoFocus: l,
            disabled: a,
        });
    }),
    T = (e) => {
        let {
                guild: t,
                noInvitesAvailable: l,
                showFriends: r,
                onClose: d,
                modalState: h,
                isApplicationBypassToggleEnabled: g,
                setInviteFlags: E,
                copyValue: A,
                changePage: p,
                inviteChannel: N,
                source: T,
                code: R,
                guildScheduledEvent: _,
                disabled: D,
                application: G,
            } = e,
            { maxAge: k, maxUses: L, networkError: M, showVanityURL: P, flags: U } = h,
            z = i.useCallback(() => {
                v.default.track(f.HAw.COPY_INSTANT_INVITE, {
                    server: m.A.getGuildId(),
                    channel: N?.id,
                    channel_type: N?.type,
                    location: T,
                    code: R,
                    guild_scheduled_event_id: _?.id,
                    application_id: G?.id,
                });
            }, [G?.id, N, T, R, _]);
        return (0, n.jsxs)(o.B, {
            gap: 16,
            children: [
                (0, n.jsx)(S, { value: A, autoFocus: r, onCopy: z, disabled: D }),
                g &&
                    (0, n.jsx)(c.d, {
                        checked: (0, a.Lt)(U, s.Q.IS_APPLICATION_BYPASS),
                        onChange: (e) => E((0, a.lA)(U, s.Q.IS_APPLICATION_BYPASS, e)),
                        disabled: D,
                        label: C.intl.string(C.t["1i1bUl"]),
                        description: C.intl.string(C.t["jvd/LF"]),
                    }),
                l || P
                    ? null
                    : (0, n.jsxs)(u.E, {
                          variant: "text-xs/normal",
                          className: y.PJ,
                          children: [
                              (0, j.Be)(k, L),
                              " ",
                              r
                                  ? (0, n.jsx)(x.Anchor, {
                                        onClick: () => p(I.QR.SETTINGS),
                                        children: C.intl.string(C.t["VNe8P/"]),
                                    })
                                  : null,
                          ],
                      }),
                !l && r && P
                    ? (0, n.jsxs)(u.E, {
                          variant: "text-xs/normal",
                          className: y.PJ,
                          children: [C.intl.string(C.t["0M2U95"]), " "],
                      })
                    : null,
                null != M ? (0, n.jsx)(b, { guild: t, error: M, onClose: d }) : null,
            ],
        });
    };
