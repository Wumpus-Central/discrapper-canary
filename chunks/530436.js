n.d(t, { W: () => c });
var l = n(200651),
    i = n(192379),
    s = n(481060),
    r = n(434404),
    a = n(496675),
    o = n(981631),
    d = n(388032),
    u = n(821022);
function c(e) {
    let { guild: t, error: n, onClose: c } = e,
        h = t.id,
        g = i.useCallback(() => {
            c(), r.Z.open(h, o.pNK.INSTANT_INVITES);
        }, [h, c]),
        m = i.useCallback(
            (e) =>
                (0, l.jsx)(s.P3F, {
                    className: u.errorLink,
                    onClick: g,
                    children: (0, l.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-link',
                        tag: 'span',
                        children: e
                    })
                }),
            [g]
        ),
        x = i.useCallback(
            (e) =>
                (0, l.jsx)(s.eee, {
                    href: o.EYA.INVITES_HELP,
                    target: '_blank',
                    children: (0, l.jsx)(s.Text, {
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
                : a.Z.can(o.Plq.MANAGE_GUILD, t)
                  ? d.NW.format(d.t['H/RUY2'], {
                        inviteListHook: m,
                        inviteHelpHook: x
                    })
                  : d.NW.string(d.t['/FxH6O']);
    return (0, l.jsx)(s.Text, {
        className: u.errorMessage,
        variant: 'text-xs/normal',
        color: 'text-danger',
        children: v
    });
}
