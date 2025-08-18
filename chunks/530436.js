n.d(t, { W: () => b });
var o = n(951288),
    i = n(647438),
    a = n(481060),
    r = n(479531),
    _ = n(434404),
    l = n(496675),
    d = n(981631),
    s = n(388032),
    c = n(451964);
function b(e) {
    let { guild: t, error: n, onClose: b } = e,
        u = t.id,
        g = i.useCallback(() => {
            b(), _.Z.open(u, d.pNK.INVITES);
        }, [u, b]),
        h = i.useCallback(
            (e) =>
                (0, o.jsx)(a.P3F, {
                    className: c.errorLink,
                    onClick: g,
                    children: (0, o.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [g],
        ),
        v = i.useCallback(
            (e) =>
                (0, o.jsx)(a.eee, {
                    href: d.EYA.INVITES_HELP,
                    target: "_blank",
                    children: (0, o.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [],
        ),
        p =
            n instanceof r.Z
                ? n.code !== d.evJ.TOO_MANY_INVITES
                    ? n.getAnyErrorMessage()
                    : l.Z.can(d.Plq.MANAGE_GUILD, t)
                      ? s.intl.format(s.t["H/RUY2"], {
                            inviteListHook: h,
                            inviteHelpHook: v,
                        })
                      : s.intl.string(s.t["/FxH6O"])
                : "message" in n
                  ? n.message
                  : s.intl.string(s.t.eAn6z8);
    return (0, o.jsx)(a.Text, {
        className: c.errorMessage,
        variant: "text-xs/normal",
        color: "text-danger",
        children: p,
    });
}
