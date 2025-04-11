n.d(t, { W: () => c });
var l = n(200651),
    i = n(192379),
    r = n(481060),
    s = n(434404),
    a = n(496675),
    o = n(981631),
    u = n(388032),
    d = n(821022);
function c(e) {
    let { guild: t, error: n, onClose: c } = e,
        h = t.id,
        g = i.useCallback(() => {
            c(), s.Z.open(h, o.pNK.INSTANT_INVITES);
        }, [h, c]),
        m = i.useCallback(
            (e) =>
                (0, l.jsx)(r.P3F, {
                    className: d.errorLink,
                    onClick: g,
                    children: (0, l.jsx)(r.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-link',
                        tag: 'span',
                        children: e
                    })
                }),
            [g]
        ),
        v = i.useCallback(
            (e) =>
                (0, l.jsx)(r.eee, {
                    href: o.EYA.INVITES_HELP,
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
            n.code !== o.evJ.TOO_MANY_INVITES
                ? n.getAnyErrorMessage()
                : a.Z.can(o.Plq.MANAGE_GUILD, t)
                  ? u.NW.format(u.t['H/RUY2'], {
                        inviteListHook: m,
                        inviteHelpHook: v
                    })
                  : u.NW.string(u.t['/FxH6O']);
    return (0, l.jsx)(r.Text, {
        className: d.errorMessage,
        variant: 'text-xs/normal',
        color: 'text-danger',
        children: x
    });
}
