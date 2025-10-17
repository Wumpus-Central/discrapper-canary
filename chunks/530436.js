n.d(t, { W: () => g });
var i = n(951288),
    l = n(647438),
    s = n(481060),
    a = n(479531),
    r = n(434404),
    o = n(496675),
    d = n(981631),
    u = n(388032),
    c = n(451964);
function g(e) {
    let { guild: t, error: n, onClose: g } = e,
        h = t.id,
        m = l.useCallback(() => {
            g(), r.Z.open(h, d.pNK.INVITES);
        }, [h, g]),
        v = l.useCallback(
            (e) =>
                (0, i.jsx)(s.P3F, {
                    className: c.errorLink,
                    onClick: m,
                    children: (0, i.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [m],
        ),
        p = l.useCallback(
            (e) =>
                (0, i.jsx)(s.Anchor, {
                    href: d.EYA.INVITES_HELP,
                    target: "_blank",
                    children: (0, i.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [],
        ),
        x =
            n instanceof a.Z
                ? n.code !== d.evJ.TOO_MANY_INVITES
                    ? n.getAnyErrorMessage()
                    : o.Z.can(d.Plq.MANAGE_GUILD, t)
                      ? u.intl.format(u.t["H/RUY2"], {
                            inviteListHook: v,
                            inviteHelpHook: p,
                        })
                      : u.intl.string(u.t["/FxH6O"])
                : "message" in n
                  ? n.message
                  : u.intl.string(u.t.eAn6z8);
    return (0, i.jsx)(s.Text, {
        className: c.errorMessage,
        variant: "text-xs/normal",
        color: "text-danger",
        children: x,
    });
}
