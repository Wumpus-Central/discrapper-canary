t.d(n, { W: () => u });
var l = t(200651),
    i = t(192379),
    r = t(481060),
    s = t(434404),
    a = t(496675),
    o = t(981631),
    d = t(388032),
    c = t(575126);
function u(e) {
    let { guild: n, error: t, onClose: u } = e,
        x = n.id,
        h = i.useCallback(() => {
            u(), s.Z.open(x, o.pNK.INSTANT_INVITES);
        }, [x, u]),
        m = i.useCallback(
            (e) =>
                (0, l.jsx)(r.P3F, {
                    className: c.errorLink,
                    onClick: h,
                    children: (0, l.jsx)(r.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-link',
                        tag: 'span',
                        children: e
                    })
                }),
            [h]
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
        g =
            t.code !== o.evJ.TOO_MANY_INVITES
                ? t.getAnyErrorMessage()
                : a.Z.can(o.Plq.MANAGE_GUILD, n)
                  ? d.intl.format(d.t['H/RUY2'], {
                        inviteListHook: m,
                        inviteHelpHook: v
                    })
                  : d.intl.string(d.t['/FxH6O']);
    return (0, l.jsx)(r.Text, {
        className: c.errorMessage,
        variant: 'text-xs/normal',
        color: 'text-danger',
        children: g
    });
}
