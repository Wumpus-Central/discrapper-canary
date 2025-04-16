n.d(t, { W: () => g });
var l = n(200651),
    i = n(192379),
    r = n(481060),
    s = n(479531),
    a = n(434404),
    o = n(496675),
    u = n(981631),
    d = n(388032),
    c = n(821022);
function g(e) {
    let { guild: t, error: n, onClose: g } = e,
        h = t.id,
        m = i.useCallback(() => {
            g(), a.Z.open(h, u.pNK.INSTANT_INVITES);
        }, [h, g]),
        p = i.useCallback(
            (e) =>
                (0, l.jsx)(r.P3F, {
                    className: c.errorLink,
                    onClick: m,
                    children: (0, l.jsx)(r.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-link',
                        tag: 'span',
                        children: e
                    })
                }),
            [m]
        ),
        v = i.useCallback(
            (e) =>
                (0, l.jsx)(r.eee, {
                    href: u.EYA.INVITES_HELP,
                    target: '_blank',
                    children: (0, l.jsx)(r.Text, {
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
                ? n.code !== u.evJ.TOO_MANY_INVITES
                    ? n.getAnyErrorMessage()
                    : o.Z.can(u.Plq.MANAGE_GUILD, t)
                      ? d.NW.format(d.t['H/RUY2'], {
                            inviteListHook: p,
                            inviteHelpHook: v
                        })
                      : d.NW.string(d.t['/FxH6O'])
                : 'message' in n
                  ? n.message
                  : d.NW.string(d.t.eAn6z8);
    return (0, l.jsx)(r.Text, {
        className: c.errorMessage,
        variant: 'text-xs/normal',
        color: 'text-danger',
        children: x
    });
}
