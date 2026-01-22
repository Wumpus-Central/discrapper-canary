n.d(t, { X: () => g });
var l = n(627968),
    r = n(64700),
    i = n(397927),
    s = n(181658),
    a = n(997509),
    o = n(576705),
    c = n(652215),
    u = n(985018),
    d = n(912579);
function g(e) {
    let { guild: t, error: n, onClose: g } = e,
        x = t.id,
        m = r.useCallback(() => {
            g(), a.A.open(x, c.BEX.INVITES);
        }, [x, g]),
        h = r.useCallback(
            (e) =>
                (0, l.jsx)(i.DUT, {
                    className: d.P5,
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
        j = r.useCallback(
            (e) =>
                (0, l.jsx)(i.MzZ, {
                    href: c.X7G.INVITES_HELP,
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
        v =
            n instanceof s.A
                ? n.code !== c.t02.TOO_MANY_INVITES
                    ? n.getAnyErrorMessage()
                    : o.A.can(c.xBc.MANAGE_GUILD, t)
                      ? u.intl.format(u.t["H/RUY1"], {
                            inviteListHook: h,
                            inviteHelpHook: j,
                        })
                      : u.intl.string(u.t["/FxH6G"])
                : "message" in n
                  ? n.message
                  : u.intl.string(u.t.eAn6z2);
    return (0, l.jsx)(i.Text, {
        className: d.gJ,
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: v,
    });
}
