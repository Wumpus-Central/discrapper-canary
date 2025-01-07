t.d(n, {
    W: function () {
        return u;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(481060),
    a = t(434404),
    s = t(496675),
    o = t(981631),
    c = t(388032),
    d = t(755527);
function u(e) {
    let { guild: n, error: t, onClose: u } = e,
        m = n.id,
        x = i.useCallback(() => {
            u(), a.Z.open(m, o.pNK.INSTANT_INVITES);
        }, [m, u]),
        h = i.useCallback(
            (e) =>
                (0, l.jsx)(r.Clickable, {
                    className: d.errorLink,
                    onClick: x,
                    children: (0, l.jsx)(r.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-link',
                        tag: 'span',
                        children: e
                    })
                }),
            [x]
        ),
        g = i.useCallback(
            (e) =>
                (0, l.jsx)(r.Anchor, {
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
        v =
            t.code !== o.evJ.TOO_MANY_INVITES
                ? t.getAnyErrorMessage()
                : s.Z.can(o.Plq.MANAGE_GUILD, n)
                  ? c.intl.format(c.t['H/RUY2'], {
                        inviteListHook: h,
                        inviteHelpHook: g
                    })
                  : c.intl.string(c.t['/FxH6O']);
    return (0, l.jsx)(r.Text, {
        className: d.errorMessage,
        variant: 'text-xs/normal',
        color: 'text-danger',
        children: v
    });
}
