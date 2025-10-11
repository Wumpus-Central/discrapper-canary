n.d(t, { W: () => g });
var l = n(951288),
    i = n(647438),
    a = n(481060),
    r = n(479531),
    s = n(434404),
    o = n(496675),
    u = n(981631),
    c = n(388032),
    d = n(451964);
function g(e) {
    let { guild: t, error: n, onClose: g } = e,
        m = t.id,
        I = i.useCallback(() => {
            g(), s.Z.open(m, u.pNK.INVITES);
        }, [m, g]),
        p = i.useCallback(
            (e) =>
                (0, l.jsx)(a.P3F, {
                    className: d.errorLink,
                    onClick: I,
                    children: (0, l.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [I],
        ),
        f = i.useCallback(
            (e) =>
                (0, l.jsx)(a.Anchor, {
                    href: u.EYA.INVITES_HELP,
                    target: "_blank",
                    children: (0, l.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [],
        ),
        v =
            n instanceof r.Z
                ? n.code !== u.evJ.TOO_MANY_INVITES
                    ? n.getAnyErrorMessage()
                    : o.Z.can(u.Plq.MANAGE_GUILD, t)
                      ? c.intl.format(c.t["H/RUY2"], {
                            inviteListHook: p,
                            inviteHelpHook: f,
                        })
                      : c.intl.string(c.t["/FxH6O"])
                : "message" in n
                  ? n.message
                  : c.intl.string(c.t.eAn6z8);
    return (0, l.jsx)(a.Text, {
        className: d.errorMessage,
        variant: "text-xs/normal",
        color: "text-danger",
        children: v,
    });
}
