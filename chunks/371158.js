n.d(e, { default: () => k });
var i = n(627968),
    a = n(64700),
    l = n(158954),
    r = n(397927),
    s = n(181658),
    c = n(976860),
    o = n(253932),
    d = n(780964),
    u = n(779733),
    p = n(858897),
    h = n(652215),
    x = n(221425),
    f = n(985018);
function k(t) {
    let { transitionState: e, onClose: n } = t,
        [k, C] = a.useState(!1),
        [g, S] = a.useState(null),
        E = async () => {
            S(null), C(!0);
            try {
                await o.dm.updateSetting(!1), (0, c.pX)(h.BVt.FRIENDS), (0, u.default)(), n();
            } catch (t) {
                S(new s.A(t).getAnyErrorMessage());
            } finally {
                C(!1);
            }
        },
        y = () => {
            (0, p.openUserSettings)(d.X.FAMILY_CENTER_PANEL), n();
        };
    return (0, i.jsx)(l.Modal, {
        transitionState: e,
        onClose: n,
        title: f.intl.string(x.default.VGB30H),
        subtitle: f.intl.format(x.default["CrZZ+p"], {
            openSettingsHook: (t, e) => (0, i.jsx)(r.MzZ, { onClick: y, children: t }, e),
        }),
        actions: [
            { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: n },
            { text: f.intl.string(x.default.cSb7U0), onClick: E, loading: k, variant: "critical-primary" },
        ],
        children: (0, i.jsx)("div", {
            children:
                null != g &&
                (0, i.jsx)(r.Text, { variant: "text-xs/normal", color: "text-feedback-critical", children: g }),
        }),
    });
}
