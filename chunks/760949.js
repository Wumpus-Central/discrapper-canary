e.d(n, { default: () => p }), e(388685);
var i = e(951288),
    a = e(647438),
    l = e(82659),
    r = e(481060),
    c = e(479531),
    s = e(703656),
    o = e(695346),
    u = e(342386),
    d = e(981631),
    x = e(345909),
    h = e(388032);
function p(t) {
    let { transitionState: n, onClose: e } = t,
        [p, f] = a.useState(!1),
        [S, g] = a.useState(null),
        k = async () => {
            g(null), f(!0);
            try {
                await o.Ex.updateSetting(!1), (0, s.uL)(d.Z5c.FRIENDS), (0, u.Z)(), e();
            } catch (t) {
                g(new c.Z(t).getAnyErrorMessage());
            } finally {
                f(!1);
            }
        },
        y = () => {
            (0, s.uL)(d.Z5c.SETTINGS("family-center")), e();
        };
    return (0, i.jsx)(l.Modal, {
        transitionState: n,
        onClose: e,
        title: h.intl.string(x.default.VGB30N),
        subtitle: h.intl.format(x.default["CrZZ+v"], {
            openSettingsHook: (t, n) =>
                (0, i.jsx)(
                    r.eee,
                    {
                        onClick: y,
                        children: t,
                    },
                    n,
                ),
        }),
        actions: [
            {
                variant: "secondary",
                text: h.intl.string(h.t["ETE/oK"]),
                onClick: e,
            },
            {
                text: h.intl.string(x.default.cSb7U1),
                onClick: k,
                loading: p,
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
