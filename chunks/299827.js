n.d(t, { X: () => m });
var l = n(627968),
    i = n(64700),
    s = n(939249),
    r = n(834730),
    a = n(349288),
    d = n(181658),
    o = n(997509),
    c = n(576705),
    u = n(652215),
    x = n(985018),
    h = n(640852);
function m(e) {
    let { guild: t, error: n, onClose: m } = e,
        g = t.id,
        v = i.useCallback(() => {
            m(), o.A.open(g, u.BEX.INVITES);
        }, [g, m]),
        j = i.useCallback(
            (e) =>
                (0, l.jsx)(s.D, {
                    className: h.P5,
                    onClick: v,
                    children: (0, l.jsx)(r.E, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [v],
        ),
        A = i.useCallback(
            (e) =>
                (0, l.jsx)(a.Anchor, {
                    href: u.X7G.INVITES_HELP,
                    target: "_blank",
                    children: (0, l.jsx)(r.E, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [],
        ),
        E =
            n instanceof d.A
                ? n.code !== u.t02.TOO_MANY_INVITES
                    ? n.getAnyErrorMessage()
                    : c.A.can(u.xBc.MANAGE_GUILD, t)
                      ? x.intl.format(x.t["H/RUY1"], { inviteListHook: j, inviteHelpHook: A })
                      : x.intl.string(x.t["/FxH6G"])
                : "message" in n
                  ? n.message
                  : x.intl.string(x.t.eAn6z2);
    return (0, l.jsx)(r.E, {
        className: h.gJ,
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: E,
    });
}
