n.d(t, { X: () => g });
var l = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(181658),
    r = n(997509),
    o = n(576705),
    d = n(652215),
    u = n(985018),
    c = n(67501);
function g(e) {
    let { guild: t, error: n, onClose: g } = e,
        h = t.id,
        A = i.useCallback(() => {
            g(), r.A.open(h, d.BEX.INVITES);
        }, [h, g]),
        p = i.useCallback(
            (e) =>
                (0, l.jsx)(s.DUT, {
                    className: c.P5,
                    onClick: A,
                    children: (0, l.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [A],
        ),
        I = i.useCallback(
            (e) =>
                (0, l.jsx)(s.MzZ, {
                    href: d.X7G.INVITES_HELP,
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
        x =
            n instanceof a.A
                ? n.code !== d.t02.TOO_MANY_INVITES
                    ? n.getAnyErrorMessage()
                    : o.A.can(d.xBc.MANAGE_GUILD, t)
                      ? u.intl.format(u.t["H/RUY1"], { inviteListHook: p, inviteHelpHook: I })
                      : u.intl.string(u.t["/FxH6G"])
                : "message" in n
                  ? n.message
                  : u.intl.string(u.t.eAn6z2);
    return (0, l.jsx)(s.Text, {
        className: c.gJ,
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: x,
    });
}
