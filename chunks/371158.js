i.d(e, { default: () => h });
var n = i(627968),
    a = i(64700),
    l = i(158954),
    r = i(397927),
    c = i(181658),
    s = i(976860),
    o = i(253932),
    d = i(779733),
    u = i(652215),
    p = i(870236),
    f = i(985018);
function h(t) {
    let { transitionState: e, onClose: i } = t,
        [h, x] = a.useState(!1),
        [k, S] = a.useState(null),
        C = async () => {
            S(null), x(!0);
            try {
                await o.dm.updateSetting(!1), (0, s.pX)(u.BVt.FRIENDS), (0, d.default)(), i();
            } catch (t) {
                S(new c.A(t).getAnyErrorMessage());
            } finally {
                x(!1);
            }
        },
        g = () => {
            (0, s.pX)(u.BVt.SETTINGS("family-center")), i();
        };
    return (0, n.jsx)(l.Modal, {
        transitionState: e,
        onClose: i,
        title: f.intl.string(p.default.VGB30H),
        subtitle: f.intl.format(p.default["CrZZ+p"], {
            openSettingsHook: (t, e) => (0, n.jsx)(r.MzZ, { onClick: g, children: t }, e),
        }),
        actions: [
            { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: i },
            { text: f.intl.string(p.default.cSb7U0), onClick: C, loading: h, variant: "critical-primary" },
        ],
        children: (0, n.jsx)("div", {
            children:
                null != k &&
                (0, n.jsx)(r.Text, { variant: "text-xs/normal", color: "text-feedback-critical", children: k }),
        }),
    });
}
