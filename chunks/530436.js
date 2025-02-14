l.d(n, { W: () => u });
var t = l(200651),
    i = l(192379),
    a = l(481060),
    r = l(434404),
    s = l(496675),
    o = l(981631),
    d = l(388032),
    c = l(29742);
function u(e) {
    let { guild: n, error: l, onClose: u } = e,
        x = n.id,
        m = i.useCallback(() => {
            u(), r.Z.open(x, o.pNK.INSTANT_INVITES);
        }, [x, u]),
        h = i.useCallback(
            (e) =>
                (0, t.jsx)(a.P3F, {
                    className: c.errorLink,
                    onClick: m,
                    children: (0, t.jsx)(a.Text, {
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
                (0, t.jsx)(a.eee, {
                    href: o.EYA.INVITES_HELP,
                    target: '_blank',
                    children: (0, t.jsx)(a.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-link',
                        tag: 'span',
                        children: e
                    })
                }),
            []
        ),
        g =
            l.code !== o.evJ.TOO_MANY_INVITES
                ? l.getAnyErrorMessage()
                : s.Z.can(o.Plq.MANAGE_GUILD, n)
                  ? d.intl.format(d.t['H/RUY2'], {
                        inviteListHook: h,
                        inviteHelpHook: v
                    })
                  : d.intl.string(d.t['/FxH6O']);
    return (0, t.jsx)(a.Text, {
        className: c.errorMessage,
        variant: 'text-xs/normal',
        color: 'text-danger',
        children: g
    });
}
