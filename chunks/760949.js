e.d(n, { default: () => x }), e(388685);
var i = e(54381),
    a = e(473749),
    l = e(793030),
    r = e(481060),
    c = e(479531),
    s = e(703656),
    o = e(695346),
    u = e(342386),
    d = e(981631),
    h = e(313570),
    p = e(388032);
function x(t) {
    let { transitionState: n, onClose: e } = t,
        [x, f] = a.useState(!1),
        [S, g] = a.useState(null),
        k = async () => {
            g(null), f(!0);
            try {
                await o.Ex.updateSetting(!1), (0, s.uL)(d.Z5c.FRIENDS), (0, u.default)(), e();
            } catch (t) {
                g(new c.Z(t).getAnyErrorMessage());
            } finally {
                f(!1);
            }
        },
        C = () => {
            (0, s.uL)(d.Z5c.SETTINGS("family-center")), e();
        };
    return (0, i.jsx)(l.Modal, {
        transitionState: n,
        onClose: e,
        title: p.intl.string(h.default.VGB30H),
        subtitle: p.intl.format(h.default["CrZZ+p"], {
            openSettingsHook: (t, n) =>
                (0, i.jsx)(
                    r.Anchor,
                    {
                        onClick: C,
                        children: t,
                    },
                    n,
                ),
        }),
        actions: [
            {
                variant: "secondary",
                text: p.intl.string(p.t["ETE/oC"]),
                onClick: e,
            },
            {
                text: p.intl.string(h.default.cSb7U0),
                onClick: k,
                loading: x,
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
