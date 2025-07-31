(e.d(n, { default: () => h }), e(388685));
var i = e(255367),
    a = e(73800),
    l = e(82659),
    r = e(481060),
    c = e(37234),
    s = e(479531),
    o = e(703656),
    u = e(695346),
    d = e(981631),
    x = e(916723),
    f = e(388032);
function h(t) {
    let { transitionState: n, onClose: e } = t,
        [h, p] = a.useState(!1),
        [S, g] = a.useState(null),
        k = async () => {
            (g(null), p(!0));
            try {
                (await u.Ex.updateSetting(!1), (0, o.uL)(d.Z5c.FRIENDS), (0, c.xf)(), e());
            } catch (t) {
                g(new s.Z(t).getAnyErrorMessage());
            } finally {
                p(!1);
            }
        },
        y = () => {
            ((0, o.uL)(d.Z5c.SETTINGS('family-center')), e());
        };
    return (0, i.jsx)(l.Modal, {
        transitionState: n,
        onClose: e,
        title: f.intl.string(x.default.VGB30N),
        subtitle: f.intl.format(x.default['CrZZ+v'], {
            openSettingsHook: (t, n) =>
                (0, i.jsx)(
                    r.eee,
                    {
                        onClick: y,
                        children: t
                    },
                    n
                )
        }),
        actions: [
            {
                variant: 'secondary',
                text: f.intl.string(f.t['ETE/oK']),
                onClick: e
            },
            {
                text: f.intl.string(x.default.cSb7U1),
                onClick: k,
                loading: h,
                variant: 'critical-primary'
            }
        ],
        children: (0, i.jsx)('div', {
            children:
                null != S &&
                (0, i.jsx)(r.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-danger',
                    children: S
                })
        })
    });
}
