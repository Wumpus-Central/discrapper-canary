n.d(e, { default: () => C });
var i = n(627968),
    a = n(64700),
    l = n(189213),
    r = n(349288),
    s = n(834730),
    c = n(181658),
    o = n(976860),
    d = n(885386),
    u = n(780964),
    p = n(830543),
    h = n(766075),
    f = n(652215),
    k = n(602339),
    x = n(375708);
function C(t) {
    let { transitionState: e, onClose: n } = t,
        [C, g] = a.useState(!1),
        [E, S] = a.useState(null),
        y = async () => {
            S(null), g(!0);
            try {
                await d.dm.updateSetting(!1), (0, o.pX)(f.BVt.FRIENDS), (0, p.default)(), n();
            } catch (t) {
                S(new c.A(t).getAnyErrorMessage());
            } finally {
                g(!1);
            }
        },
        b = () => {
            (0, h.openUserSettings)(u.X.FAMILY_CENTER_PANEL), n();
        };
    return (0, i.jsx)(l.Modal, {
        transitionState: e,
        onClose: n,
        title: x.intl.string(k.default.VGB30H),
        subtitle: x.intl.format(k.default["CrZZ+p"], {
            openSettingsHook: (t, e) => (0, i.jsx)(r.Anchor, { onClick: b, children: t }, e),
        }),
        actions: [
            { variant: "secondary", text: x.intl.string(x.t["ETE/oC"]), onClick: n },
            { text: x.intl.string(k.default.cSb7U0), onClick: y, loading: C, variant: "critical-primary" },
        ],
        children: (0, i.jsx)("div", {
            children:
                null != E &&
                (0, i.jsx)(s.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: E }),
        }),
    });
}
