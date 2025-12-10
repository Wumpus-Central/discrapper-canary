n.d(t, { W: () => g });
var l = n(54381),
    r = n(473749),
    i = n(481060),
    a = n(479531),
    s = n(434404),
    o = n(496675),
    c = n(981631),
    u = n(388032),
    d = n(451964);
function g(e) {
    let { guild: t, error: n, onClose: g } = e,
        m = t.id,
        x = r.useCallback(() => {
            g(), s.Z.open(m, c.pNK.INVITES);
        }, [m, g]),
        h = r.useCallback(
            (e) =>
                (0, l.jsx)(i.P3F, {
                    className: d.errorLink,
                    onClick: x,
                    children: (0, l.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [x],
        ),
        v = r.useCallback(
            (e) =>
                (0, l.jsx)(i.Anchor, {
                    href: c.EYA.INVITES_HELP,
                    target: "_blank",
                    children: (0, l.jsx)(i.Text, {
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
    return (0, l.jsx)(i.Text, {
        className: d.errorMessage,
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: p,
    });
}
