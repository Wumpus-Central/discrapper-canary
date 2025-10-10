n.d(t, { W: () => g });
var l = n(951288),
    i = n(647438),
    s = n(481060),
    r = n(479531),
    a = n(434404),
    o = n(496675),
    u = n(981631),
    d = n(388032),
    c = n(451964);
function g(e) {
    let { guild: t, error: n, onClose: g } = e,
        h = t.id,
        m = i.useCallback(() => {
            g(), a.Z.open(h, u.pNK.INVITES);
        }, [h, g]),
        p = i.useCallback(
            (e) =>
                (0, l.jsx)(s.P3F, {
                    className: c.errorLink,
                    onClick: m,
                    children: (0, l.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [m],
        ),
        v = i.useCallback(
            (e) =>
                (0, l.jsx)(s.eee, {
                    href: u.EYA.INVITES_HELP,
                    target: "_blank",
                    children: (0, l.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [],
        ),
        I =
            n instanceof r.Z
                ? n.code !== u.evJ.TOO_MANY_INVITES
                    ? n.getAnyErrorMessage()
                    : o.Z.can(u.Plq.MANAGE_GUILD, t)
                      ? d.intl.format(d.t["H/RUY2"], {
                            inviteListHook: p,
                            inviteHelpHook: v,
                        })
                      : d.intl.string(d.t["/FxH6O"])
                : "message" in n
                  ? n.message
                  : d.intl.string(d.t.eAn6z8);
    return (0, l.jsx)(s.Text, {
        className: c.errorMessage,
        variant: "text-xs/normal",
        color: "text-danger",
        children: I,
    });
}
