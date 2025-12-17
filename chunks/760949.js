e.d(n, { default: () => p }), e(388685);
var i = e(54381),
    a = e(473749),
    l = e(793030),
    r = e(481060),
    c = e(479531),
    s = e(703656),
    o = e(695346),
    u = e(342386),
    d = e(981631),
    f = e(517319),
    h = e(388032);
function p(t) {
    let { transitionState: n, onClose: e } = t,
        [p, x] = a.useState(!1),
        [k, S] = a.useState(null),
        C = async () => {
            S(null), x(!0);
            try {
                await o.Ex.updateSetting(!1), (0, s.uL)(d.Z5c.FRIENDS), (0, u.default)(), e();
            } catch (t) {
                S(new c.Z(t).getAnyErrorMessage());
            } finally {
                x(!1);
            }
        },
        g = () => {
            (0, s.uL)(d.Z5c.SETTINGS("family-center")), e();
        };
    return (0, i.jsx)(l.Modal, {
        transitionState: n,
        onClose: e,
        title: h.intl.string(f.default.VGB30H),
        subtitle: h.intl.format(f.default["CrZZ+p"], {
            openSettingsHook: (t, n) =>
                (0, i.jsx)(
                    r.Anchor,
                    {
                        onClick: g,
                        children: t,
                    },
                    n,
                ),
        }),
        actions: [
            {
                variant: "secondary",
                text: h.intl.string(h.t["ETE/oC"]),
                onClick: e,
            },
            {
                text: h.intl.string(f.default.cSb7U0),
                onClick: C,
                loading: p,
                variant: "critical-primary",
            },
        ],
        children: (0, i.jsx)("div", {
            children:
                null != k &&
                (0, i.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    children: k,
                }),
        }),
    });
}
