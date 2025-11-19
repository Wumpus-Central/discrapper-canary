n.d(t, { W: () => g });
var r = n(54381),
    l = n(473749),
    i = n(481060),
    a = n(479531),
    s = n(434404),
    o = n(496675),
    c = n(981631),
    u = n(388032),
    d = n(869306);
function g(e) {
    let { guild: t, error: n, onClose: g } = e,
        m = t.id,
        x = l.useCallback(() => {
            g(), s.Z.open(m, c.pNK.INVITES);
        }, [m, g]),
        h = l.useCallback(
            (e) =>
                (0, r.jsx)(i.P3F, {
                    className: d.errorLink,
                    onClick: x,
                    children: (0, r.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [x],
        ),
        v = l.useCallback(
            (e) =>
                (0, r.jsx)(i.Anchor, {
                    href: c.EYA.INVITES_HELP,
                    target: "_blank",
                    children: (0, r.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [],
        ),
        p =
            n instanceof a.Z
                ? n.code !== c.evJ.TOO_MANY_INVITES
                    ? n.getAnyErrorMessage()
                    : o.Z.can(c.Plq.MANAGE_GUILD, t)
                      ? u.intl.format(u.t["H/RUY1"], {
                            inviteListHook: h,
                            inviteHelpHook: v,
                        })
                      : u.intl.string(u.t["/FxH6G"])
                : "message" in n
                  ? n.message
                  : u.intl.string(u.t.eAn6z2);
    return (0, r.jsx)(i.Text, {
        className: d.errorMessage,
        variant: "text-xs/normal",
        color: "text-danger",
        children: p,
    });
}
