n.d(t, { W: () => g });
var l = n(54381),
    r = n(473749),
    i = n(481060),
    a = n(479531),
    s = n(434404),
    o = n(496675),
    c = n(981631),
    u = n(388032),
    d = n(444942);
function g(e) {
    let { guild: t, error: n, onClose: g } = e,
        x = t.id,
        m = r.useCallback(() => {
            g(), s.Z.open(x, c.pNK.INVITES);
        }, [x, g]),
        v = r.useCallback(
            (e) =>
                (0, l.jsx)(i.P3F, {
                    className: d.errorLink,
                    onClick: m,
                    children: (0, l.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [m],
        ),
        h = r.useCallback(
            (e) =>
                (0, l.jsx)(i.eee, {
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
        f =
            n instanceof a.Z
                ? n.code !== c.evJ.TOO_MANY_INVITES
                    ? n.getAnyErrorMessage()
                    : o.Z.can(c.Plq.MANAGE_GUILD, t)
                      ? u.intl.format(u.t["H/RUY1"], {
                            inviteListHook: v,
                            inviteHelpHook: h,
                        })
                      : u.intl.string(u.t["/FxH6G"])
                : "message" in n
                  ? n.message
                  : u.intl.string(u.t.eAn6z2);
    return (0, l.jsx)(i.Text, {
        className: d.errorMessage,
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: f,
    });
}
