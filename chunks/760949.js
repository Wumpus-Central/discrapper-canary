e.d(n, { default: () => f }), e(388685);
var i = e(951288),
    a = e(647438),
    l = e(793030),
    r = e(481060),
    c = e(479531),
    s = e(703656),
    o = e(695346),
    u = e(342386),
    d = e(981631),
    h = e(345909),
    x = e(388032);
function f(t) {
    let { transitionState: n, onClose: e } = t,
        [f, p] = a.useState(!1),
        [S, g] = a.useState(null),
        k = async () => {
            g(null), p(!0);
            try {
                await o.Ex.updateSetting(!1), (0, s.uL)(d.Z5c.FRIENDS), (0, u.default)(), e();
            } catch (t) {
                g(new c.Z(t).getAnyErrorMessage());
            } finally {
                p(!1);
            }
        },
        y = () => {
            (0, s.uL)(d.Z5c.SETTINGS("family-center")), e();
        };
    return (0, i.jsx)(l.Modal, {
        transitionState: n,
        onClose: e,
        title: x.intl.string(h.default.VGB30N),
        subtitle: x.intl.format(h.default["CrZZ+v"], {
            openSettingsHook: (t, n) =>
                (0, i.jsx)(
                    r.Anchor,
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
                text: x.intl.string(x.t["ETE/oK"]),
                onClick: e,
            },
            {
                text: x.intl.string(h.default.cSb7U1),
                onClick: k,
                loading: f,
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
