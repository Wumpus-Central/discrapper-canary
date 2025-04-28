n.d(t, { W: () => m });
var l = n(200651),
    r = n(192379),
    i = n(481060),
    a = n(479531),
    s = n(434404),
    o = n(496675),
    c = n(981631),
    u = n(388032),
    d = n(821022);
function m(e) {
    let { guild: t, error: n, onClose: m } = e,
        x = t.id,
        g = r.useCallback(() => {
            m(), s.Z.open(x, c.pNK.INVITES);
        }, [x, m]),
        h = r.useCallback(
            (e) =>
                (0, l.jsx)(i.P3F, {
                    className: d.errorLink,
                    onClick: g,
                    children: (0, l.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-link',
                        tag: 'span',
                        children: e
                    })
                }),
            [g]
        ),
        v = r.useCallback(
            (e) =>
                (0, l.jsx)(i.eee, {
                    href: c.EYA.INVITES_HELP,
                    target: '_blank',
                    children: (0, l.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-link',
                        tag: 'span',
                        children: e
                    })
                }),
            []
        ),
        f =
            n instanceof a.Z
                ? n.code !== c.evJ.TOO_MANY_INVITES
                    ? n.getAnyErrorMessage()
                    : o.Z.can(c.Plq.MANAGE_GUILD, t)
                      ? u.intl.format(u.t['H/RUY2'], {
                            inviteListHook: h,
                            inviteHelpHook: v
                        })
                      : u.intl.string(u.t['/FxH6O'])
                : 'message' in n
                  ? n.message
                  : u.intl.string(u.t.eAn6z8);
    return (0, l.jsx)(i.Text, {
        className: d.errorMessage,
        variant: 'text-xs/normal',
        color: 'text-danger',
        children: f
    });
}
