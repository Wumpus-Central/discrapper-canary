n.d(e, { default: () => x }), n(388685);
var i = n(54381),
    a = n(473749),
    l = n(793030),
    r = n(481060),
    c = n(479531),
    s = n(703656),
    o = n(695346),
    u = n(342386),
    d = n(981631),
    f = n(517319),
    p = n(388032);
function x(t) {
    let { transitionState: e, onClose: n } = t,
        [x, h] = a.useState(!1),
        [k, S] = a.useState(null),
        C = async () => {
            S(null), h(!0);
            try {
                await o.Ex.updateSetting(!1), (0, s.uL)(d.Z5c.FRIENDS), (0, u.default)(), n();
            } catch (t) {
                S(new c.Z(t).getAnyErrorMessage());
            } finally {
                h(!1);
            }
        },
        g = () => {
            (0, s.uL)(d.Z5c.SETTINGS("family-center")), n();
        };
    return (0, i.jsx)(l.Modal, {
        transitionState: e,
        onClose: n,
        title: p.intl.string(f.default.VGB30H),
        subtitle: p.intl.format(f.default["CrZZ+p"], {
            openSettingsHook: (t, e) =>
                (0, i.jsx)(
                    r.eee,
                    {
                        onClick: g,
                        children: t,
                    },
                    e,
                ),
        }),
        actions: [
            {
                variant: "secondary",
                text: p.intl.string(p.t["ETE/oC"]),
                onClick: n,
            },
            {
                text: p.intl.string(f.default.cSb7U0),
                onClick: C,
                loading: x,
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
