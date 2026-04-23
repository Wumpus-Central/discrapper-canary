l.d(t, { X: () => m });
var n = l(627968),
    i = l(64700),
    s = l(939249),
    a = l(834730),
    r = l(349288),
    d = l(181658),
    o = l(997509),
    c = l(576705),
    u = l(652215),
    x = l(985018),
    h = l(640852);
function m(e) {
    let { guild: t, error: l, onClose: m } = e,
        g = t.id,
        v = i.useCallback(() => {
            m(), o.A.open(g, u.BEX.INVITES);
        }, [g, m]),
        j = i.useCallback(
            (e) =>
                (0, n.jsx)(s.D, {
                    className: h.P5,
                    onClick: v,
                    children: (0, n.jsx)(a.E, {
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
                (0, n.jsx)(r.Anchor, {
                    href: u.X7G.INVITES_HELP,
                    target: "_blank",
                    children: (0, n.jsx)(a.E, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e,
                    }),
                }),
            [],
        ),
        E =
            l instanceof d.A
                ? l.code !== u.t02.TOO_MANY_INVITES
                    ? l.getAnyErrorMessage()
                    : c.A.can(u.xBc.MANAGE_GUILD, t)
                      ? x.intl.format(x.t["H/RUY1"], { inviteListHook: j, inviteHelpHook: A })
                      : x.intl.string(x.t["/FxH6G"])
                : "message" in l
                  ? l.message
                  : x.intl.string(x.t.eAn6z2);
    return (0, n.jsx)(a.E, {
        className: h.gJ,
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: E,
    });
}
