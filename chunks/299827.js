n.d(t, { X: () => x });
var l = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(181658),
    r = n(997509),
    d = n(576705),
    c = n(652215),
    o = n(985018),
    u = n(912579);
function x(e) {
    let { guild: t, error: n, onClose: x } = e,
        h = t.id,
        m = i.useCallback(() => {
            x(), r.A.open(h, c.BEX.INVITES);
        }, [h, x]),
        g = i.useCallback(
            (e) =>
                (0, l.jsx)(s.DUT, {
                    className: u.P5,
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
                (0, l.jsx)(s.MzZ, {
                    href: c.X7G.INVITES_HELP,
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
        j =
            n instanceof a.A
                ? n.code !== c.t02.TOO_MANY_INVITES
                    ? n.getAnyErrorMessage()
                    : d.A.can(c.xBc.MANAGE_GUILD, t)
                      ? o.intl.format(o.t["H/RUY1"], { inviteListHook: g, inviteHelpHook: v })
                      : o.intl.string(o.t["/FxH6G"])
                : "message" in n
                  ? n.message
                  : o.intl.string(o.t.eAn6z2);
    return (0, l.jsx)(s.Text, {
        className: u.gJ,
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: j,
    });
}
