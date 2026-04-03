i.d(e, { default: () => k });
var n = i(627968),
    a = i(64700),
    l = i(158954),
    r = i(397927),
    s = i(181658),
    c = i(976860),
    o = i(253932),
    d = i(718446),
    u = i(779733),
    p = i(652215),
    h = i(355097),
    x = i(842130),
    f = i(985018);
function k(t) {
    let { transitionState: e, onClose: i } = t,
        [k, C] = a.useState(!1),
        [g, S] = a.useState(null),
        y = async () => {
            S(null), C(!0);
            try {
                await o.dm.updateSetting(!1), (0, c.pX)(p.BVt.FRIENDS), (0, u.default)(), i();
            } catch (t) {
                S(new s.A(t).getAnyErrorMessage());
            } finally {
                C(!1);
            }
        },
        E = () => {
            (0, c.pX)((0, d.settingsPathToRoute)(h.od.FAMILY_CENTER)), i();
        };
    return (0, n.jsx)(l.Modal, {
        transitionState: e,
        onClose: i,
        title: f.intl.string(x.default.VGB30H),
        subtitle: f.intl.format(x.default["CrZZ+p"], {
            openSettingsHook: (t, e) => (0, n.jsx)(r.MzZ, { onClick: E, children: t }, e),
        }),
        actions: [
            { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: i },
            { text: f.intl.string(x.default.cSb7U0), onClick: y, loading: k, variant: "critical-primary" },
        ],
        children: (0, n.jsx)("div", {
            children:
                null != g &&
                (0, n.jsx)(r.Text, { variant: "text-xs/normal", color: "text-feedback-critical", children: g }),
        }),
    });
}
