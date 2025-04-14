n.d(t, { W: () => d });
var r = n(200651),
    l = n(192379),
    i = n(481060),
    a = n(434404),
    s = n(496675),
    o = n(981631),
    c = n(388032),
    u = n(821022);
function d(e) {
    let { guild: t, error: n, onClose: d } = e,
        m = t.id,
        h = l.useCallback(() => {
            d(), a.Z.open(m, o.pNK.INSTANT_INVITES);
        }, [m, d]),
        x = l.useCallback(
            (e) =>
                (0, r.jsx)(i.P3F, {
                    className: u.errorLink,
                    onClick: h,
                    children: (0, r.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-link',
                        tag: 'span',
                        children: e
                    })
                }),
            [h]
        ),
        g = l.useCallback(
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
        p =
            n.code !== o.evJ.TOO_MANY_INVITES
                ? n.getAnyErrorMessage()
                : s.Z.can(o.Plq.MANAGE_GUILD, t)
                  ? c.NW.format(c.t['H/RUY2'], {
                        inviteListHook: x,
                        inviteHelpHook: g
                    })
                  : c.NW.string(c.t['/FxH6O']);
    return (0, r.jsx)(i.Text, {
        className: u.errorMessage,
        variant: 'text-xs/normal',
        color: 'text-danger',
        children: p
    });
}
