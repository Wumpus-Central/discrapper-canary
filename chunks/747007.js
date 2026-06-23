t.d(n, { I: () => m, p: () => P }), t(938796);
var l = t(627968),
    a = t(64700),
    s = t(821418),
    i = t(665260),
    r = t(17928),
    c = t(862482),
    o = t(331322),
    d = t(243721),
    u = t(834730),
    x = t(349288),
    h = t(416052),
    A = t(967198),
    g = t(351906),
    I = t(174459),
    p = t(735547),
    N = t(939249),
    _ = t(181658),
    C = t(468689),
    k = t(576705),
    b = t(652215),
    j = t(375708),
    E = t(640852);
function v(e) {
    let { guild: n, error: t, onClose: s } = e,
        i = n.id,
        r = a.useCallback(() => {
            s(), C.A.open(i, b.BEX.INVITES);
        }, [i, s]),
        c = a.useCallback(
            (e) =>
                (0, l.jsx)(N.D, {
                    className: E.P5,
                    onClick: r,
                    children: (0, l.jsx)(u.E, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [r],
        ),
        o = a.useCallback(
            (e) =>
                (0, l.jsx)(x.Anchor, {
                    href: b.X7G.INVITES_HELP,
                    target: "_blank",
                    children: (0, l.jsx)(u.E, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [],
        ),
        d =
            t instanceof _.A
                ? t.code !== b.t02.TOO_MANY_INVITES
                    ? t.getAnyErrorMessage()
                    : k.A.can(b.xBc.MANAGE_GUILD, n)
                      ? j.intl.format(j.t["H/RUY1"], { inviteListHook: c, inviteHelpHook: o })
                      : j.intl.string(j.t["/FxH6G"])
                : "message" in t
                  ? t.message
                  : j.intl.string(j.t.eAn6z2);
    return (0, l.jsx)(u.E, {
        className: E.gJ,
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: d,
    });
}
var S = t(172799);
let m = r.Ay.connectStores([g.A], () => ({ hideValue: g.A.hideInstantInvites }))((e) => {
    let { value: n, autoFocus: t, hideValue: a, onCopy: s, disabled: i } = e;
    return (0, l.jsx)(h.A, {
        value: n,
        hideMessage: a ? j.intl.string(j.t["6HzNgZ"]) : null,
        buttonColor: c.$n.Colors.BRAND,
        onCopy: s,
        autoFocus: t,
        disabled: i,
    });
});
function P(e) {
    let {
            guild: n,
            noInvitesAvailable: t,
            showFriends: r,
            onClose: c,
            modalState: h,
            isApplicationBypassToggleEnabled: g,
            setInviteFlags: N,
            copyValue: _,
            changePage: C,
            inviteChannel: k,
            source: P,
            code: T,
            guildScheduledEvent: f,
            disabled: B,
            application: y,
        } = e,
        { maxAge: G, maxUses: L, networkError: V, showVanityURL: H, flags: M } = h,
        O = a.useCallback(() => {
            I.default.track(b.HAw.COPY_INSTANT_INVITE, {
                server: A.A.getGuildId(),
                channel: k?.id,
                channel_type: k?.type,
                location: P,
                code: T,
                guild_scheduled_event_id: f?.id,
                application_id: y?.id,
            });
        }, [y?.id, k, P, T, f]);
    return (0, l.jsxs)(o.B, {
        gap: 16,
        children: [
            (0, l.jsx)(m, { value: _, autoFocus: r, onCopy: O, disabled: B }),
            g &&
                (0, l.jsx)(d.d, {
                    checked: (0, i.Lt)(M, s.Q.IS_APPLICATION_BYPASS),
                    onChange: (e) => N((0, i.lA)(M, s.Q.IS_APPLICATION_BYPASS, e)),
                    disabled: B,
                    label: j.intl.string(j.t["1i1bUl"]),
                    description: j.intl.string(j.t["jvd/LF"]),
                }),
            t || H
                ? null
                : (0, l.jsxs)(u.E, {
                      variant: "text-xs/normal",
                      className: E.PJ,
                      children: [
                          (0, p.Be)(G, L),
                          " ",
                          r
                              ? (0, l.jsx)(x.Anchor, {
                                    onClick: () => C(S.QR.SETTINGS),
                                    children: j.intl.string(j.t["VNe8P/"]),
                                })
                              : null,
                      ],
                  }),
            !t && r && H
                ? (0, l.jsxs)(u.E, {
                      variant: "text-xs/normal",
                      className: E.PJ,
                      children: [j.intl.string(j.t["0M2U95"]), " "],
                  })
                : null,
            null != V ? (0, l.jsx)(v, { guild: n, error: V, onClose: c }) : null,
        ],
    });
}
