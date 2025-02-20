n.d(t, { W: () => u });
var r = n(200651),
    l = n(192379),
    i = n(481060),
    a = n(434404),
    s = n(496675),
    o = n(981631),
    c = n(388032),
    d = n(773444);
function u(e) {
    let { guild: t, error: n, onClose: u } = e,
        m = t.id,
        x = l.useCallback(() => {
            u(), a.Z.open(m, o.pNK.INSTANT_INVITES);
        }, [m, u]),
        g = l.useCallback(
            (e) =>
                (0, r.jsx)(i.P3F, {
                    className: d.errorLink,
                    onClick: x,
                    children: (0, r.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-link',
                        tag: 'span',
                        children: e
                    })
                }),
            [x]
        ),
        h = l.useCallback(
            (e) =>
                (0, r.jsx)(i.eee, {
                    href: o.EYA.INVITES_HELP,
                    target: '_blank',
                    children: (0, r.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-link',
                        tag: 'span',
                        children: e
                    })
                }),
            []
        ),
        v =
            n.code !== o.evJ.TOO_MANY_INVITES
                ? n.getAnyErrorMessage()
                : s.Z.can(o.Plq.MANAGE_GUILD, t)
                  ? c.NW.format(c.t['H/RUY2'], {
                        inviteListHook: g,
                        inviteHelpHook: h
                    })
                  : c.NW.string(c.t['/FxH6O']);
    return (0, r.jsx)(i.Text, {
        className: d.errorMessage,
        variant: 'text-xs/normal',
        color: 'text-danger',
        children: v
    });
}
