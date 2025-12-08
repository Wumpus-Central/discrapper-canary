n.d(t, { W: () => g });
var i = n(54381),
    l = n(473749),
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
        p = l.useCallback(() => {
            g(), a.Z.open(h, u.pNK.INVITES);
        }, [h, g]),
        v = l.useCallback(
            (e) =>
                (0, i.jsx)(s.P3F, {
                    className: c.errorLink,
                    onClick: p,
                    children: (0, i.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [p],
        ),
        I = l.useCallback(
            (e) =>
                (0, i.jsx)(s.Anchor, {
                    href: u.EYA.INVITES_HELP,
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
        m =
            n instanceof r.Z
                ? n.code !== u.evJ.TOO_MANY_INVITES
                    ? n.getAnyErrorMessage()
                    : o.Z.can(u.Plq.MANAGE_GUILD, t)
                      ? d.intl.format(d.t["H/RUY1"], {
                            inviteListHook: v,
                            inviteHelpHook: I,
                        })
                      : d.intl.string(d.t["/FxH6G"])
                : "message" in n
                  ? n.message
                  : d.intl.string(d.t.eAn6z2);
    return (0, i.jsx)(s.Text, {
        className: c.errorMessage,
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: m,
    });
}
