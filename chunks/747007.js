(e.d(l, { I: () => m, p: () => P }), e(938796));
var t = e(477900),
    a = e(582128),
    s = e(821418),
    i = e(665260),
    r = e(17928),
    o = e(862482),
    c = e(331322),
    d = e(193249),
    u = e(834730),
    h = e(28863),
    A = e(416052),
    x = e(967198),
    g = e(351906),
    I = e(174459),
    b = e(735547),
    p = e(939249),
    N = e(181658),
    _ = e(468689),
    C = e(576705),
    k = e(652215),
    j = e(105292),
    E = e(87617);
function v(n) {
    let { guild: l, error: e, onClose: s } = n,
        i = l.id,
        r = a.useCallback(() => {
            (s(), _.A.open(i, k.BEX.INVITES));
        }, [i, s]),
        o = a.useCallback(
            (n) =>
                (0, t.jsx)(p.D, {
                    className: E.P5,
                    onClick: r,
                    children: (0, t.jsx)(u.E, {
                        variant: "body-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: n,
                    }),
                }),
            [r],
        ),
        c = a.useCallback(
            (n) =>
                (0, t.jsx)(h.Anchor, {
                    href: k.X7G.INVITES_HELP,
                    target: "_blank",
                    children: (0, t.jsx)(u.E, {
                        variant: "body-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: n,
                    }),
                }),
            [],
        ),
        d =
            e instanceof N.A
                ? e.code !== k.t02.TOO_MANY_INVITES
                    ? e.getAnyErrorMessage()
                    : C.A.can(k.xBc.MANAGE_GUILD, l)
                      ? j.intl.format(j.t["H/RUY1"], { inviteListHook: o, inviteHelpHook: c })
                      : j.intl.string(j.t["/FxH6G"])
                : "message" in e
                  ? e.message
                  : j.intl.string(j.t.eAn6z2);
    return (0, t.jsx)(u.E, {
        className: E.gJ,
        variant: "body-xs/normal",
        color: "text-feedback-critical",
        children: d,
    });
}
var S = e(172799);
let m = r.Ay.connectStores([g.A], () => ({ hideValue: g.A.hideInstantInvites }))((n) => {
    let { value: l, autoFocus: e, hideValue: a, onCopy: s, disabled: i } = n;
    return (0, t.jsx)(A.A, {
        value: l,
        hideMessage: a ? j.intl.string(j.t["6HzNgZ"]) : null,
        buttonColor: o.$n.Colors.BRAND,
        onCopy: s,
        autoFocus: e,
        disabled: i,
    });
});
function P(n) {
    let {
            guild: l,
            noInvitesAvailable: e,
            showFriends: r,
            onClose: o,
            modalState: A,
            isApplicationBypassToggleEnabled: g,
            setInviteFlags: p,
            copyValue: N,
            changePage: _,
            inviteChannel: C,
            source: P,
            code: y,
            guildScheduledEvent: T,
            disabled: f,
            application: B,
        } = n,
        { maxAge: G, maxUses: L, networkError: V, showVanityURL: H, flags: M } = A,
        O = a.useCallback(() => {
            I.default.track(k.HAw.COPY_INSTANT_INVITE, {
                server: x.A.getGuildId(),
                channel: C?.id,
                channel_type: C?.type,
                location: P,
                code: y,
                guild_scheduled_event_id: T?.id,
                application_id: B?.id,
            });
        }, [B?.id, C, P, y, T]);
    return (0, t.jsxs)(c.B, {
        gap: 16,
        children: [
            (0, t.jsx)(m, { value: N, autoFocus: r, onCopy: O, disabled: f }),
            g &&
                (0, t.jsx)(d.d, {
                    checked: (0, i.Lt)(M, s.Q.IS_APPLICATION_BYPASS),
                    onChange: (n) => p((0, i.lA)(M, s.Q.IS_APPLICATION_BYPASS, n)),
                    disabled: f,
                    label: j.intl.string(j.t["1i1bUl"]),
                    description: j.intl.string(j.t["jvd/LF"]),
                }),
            e || H
                ? null
                : (0, t.jsxs)(u.E, {
                      variant: "body-xs/normal",
                      className: E.PJ,
                      children: [
                          (0, b.Be)(G, L),
                          " ",
                          r
                              ? (0, t.jsx)(h.Anchor, {
                                    onClick: () => _(S.QR.SETTINGS),
                                    children: j.intl.string(j.t["VNe8P/"]),
                                })
                              : null,
                      ],
                  }),
            !e && r && H
                ? (0, t.jsxs)(u.E, {
                      variant: "body-xs/normal",
                      className: E.PJ,
                      children: [j.intl.string(j.t["0M2U95"]), " "],
                  })
                : null,
            null != V ? (0, t.jsx)(v, { guild: l, error: V, onClose: o }) : null,
        ],
    });
}
