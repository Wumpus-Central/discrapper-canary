n.d(t, { W: () => h });
var i = n(255367),
    l = n(73800),
    r = n(481060),
    s = n(479531),
    a = n(434404),
    o = n(496675),
    c = n(981631),
    d = n(388032),
    u = n(821022);
function h(e) {
    let { guild: t, error: n, onClose: h } = e,
        m = t.id,
        g = l.useCallback(() => {
            (h(), a.Z.open(m, c.pNK.INVITES));
        }, [m, h]),
        p = l.useCallback(
            (e) =>
                (0, i.jsx)(r.P3F, {
                    className: u.errorLink,
                    onClick: g,
                    children: (0, i.jsx)(r.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-link',
                        tag: 'span',
                        children: e
                    })
                }),
            [g]
        ),
        f = l.useCallback(
            (e) =>
                (0, i.jsx)(r.eee, {
                    href: c.EYA.INVITES_HELP,
                    target: '_blank',
                    children: (0, i.jsx)(r.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-link',
                        tag: 'span',
                        children: e
                    })
                }),
            []
        ),
        x =
            n instanceof s.Z
                ? n.code !== c.evJ.TOO_MANY_INVITES
                    ? n.getAnyErrorMessage()
                    : o.Z.can(c.Plq.MANAGE_GUILD, t)
                      ? d.intl.format(d.t['H/RUY2'], {
                            inviteListHook: p,
                            inviteHelpHook: f
                        })
                      : d.intl.string(d.t['/FxH6O'])
                : 'message' in n
                  ? n.message
                  : d.intl.string(d.t.eAn6z8);
    return (0, i.jsx)(r.Text, {
        className: u.errorMessage,
        variant: 'text-xs/normal',
        color: 'text-danger',
        children: x
    });
}
