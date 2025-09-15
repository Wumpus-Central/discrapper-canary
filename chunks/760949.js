n.d(e, { default: () => h }), n(388685);
var i = n(951288),
    a = n(647438),
    l = n(82659),
    r = n(481060),
    c = n(479531),
    s = n(703656),
    o = n(695346),
    u = n(342386),
    d = n(981631),
    x = n(345909),
    f = n(388032);
function h(t) {
    let { transitionState: e, onClose: n } = t,
        [h, p] = a.useState(!1),
        [S, g] = a.useState(null),
        k = async () => {
            g(null), p(!0);
            try {
                await o.Ex.updateSetting(!1), (0, s.uL)(d.Z5c.FRIENDS), (0, u.default)(), n();
            } catch (t) {
                g(new c.Z(t).getAnyErrorMessage());
            } finally {
                p(!1);
            }
        },
        y = () => {
            (0, s.uL)(d.Z5c.SETTINGS("family-center")), n();
        };
    return (0, i.jsx)(l.Modal, {
        transitionState: e,
        onClose: n,
        title: f.intl.string(x.default.VGB30N),
        subtitle: f.intl.format(x.default["CrZZ+v"], {
            openSettingsHook: (t, e) =>
                (0, i.jsx)(
                    r.eee,
                    {
                        onClick: y,
                        children: t,
                    },
                    e,
                ),
        }),
        actions: [
            {
                variant: "secondary",
                text: f.intl.string(f.t["ETE/oK"]),
                onClick: n,
            },
            {
                text: f.intl.string(x.default.cSb7U1),
                onClick: k,
                loading: h,
                variant: "critical-primary",
            },
        ],
        children: (0, i.jsx)("div", {
            children:
                null != S &&
                (0, i.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: S,
                }),
        }),
    });
}
