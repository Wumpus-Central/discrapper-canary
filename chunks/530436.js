n.d(t, { W: () => m });
var r = n(200651),
    l = n(192379),
    a = n(481060),
    i = n(479531),
    s = n(434404),
    o = n(496675),
    c = n(981631),
    u = n(388032),
    d = n(821022);
function m(e) {
    let { guild: t, error: n, onClose: m } = e,
        x = t.id,
        g = l.useCallback(() => {
            m(), s.Z.open(x, c.pNK.INSTANT_INVITES);
        }, [x, m]),
        h = l.useCallback(
            (e) =>
                (0, r.jsx)(a.P3F, {
                    className: d.errorLink,
                    onClick: g,
                    children: (0, r.jsx)(a.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-link',
                        tag: 'span',
                        children: e
                    })
                }),
            [g]
        ),
        v = l.useCallback(
            (e) =>
                (0, r.jsx)(a.eee, {
                    href: c.EYA.INVITES_HELP,
                    target: '_blank',
                    children: (0, r.jsx)(a.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-link',
                        tag: 'span',
                        children: e
                    })
                }),
            []
        ),
        f =
            n instanceof i.Z
                ? n.code !== c.evJ.TOO_MANY_INVITES
                    ? n.getAnyErrorMessage()
                    : o.Z.can(c.Plq.MANAGE_GUILD, t)
                      ? u.NW.format(u.t['H/RUY2'], {
                            inviteListHook: h,
                            inviteHelpHook: v
                        })
                      : u.NW.string(u.t['/FxH6O'])
                : 'message' in n
                  ? n.message
                  : u.NW.string(u.t.eAn6z8);
    return (0, r.jsx)(a.Text, {
        className: d.errorMessage,
        variant: 'text-xs/normal',
        color: 'text-danger',
        children: f
    });
}
