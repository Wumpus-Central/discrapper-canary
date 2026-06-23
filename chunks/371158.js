e.d(n, { default: () => C });
var i = e(627968),
    a = e(64700),
    l = e(189213),
    r = e(349288),
    c = e(834730),
    s = e(181658),
    o = e(976860),
    d = e(885386),
    u = e(780964),
    p = e(830543),
    f = e(766075),
    h = e(652215),
    k = e(602339),
    x = e(375708);
function C(t) {
    let { transitionState: n, onClose: e } = t,
        [C, g] = a.useState(!1),
        [E, S] = a.useState(null);
    async function y() {
        S(null), g(!0);
        try {
            await d.dm.updateSetting(!1), (0, o.pX)(h.BVt.FRIENDS), (0, p.default)(), e();
        } catch (t) {
            S(new s.A(t).getAnyErrorMessage());
        } finally {
            g(!1);
        }
    }
    function b() {
        (0, f.openUserSettings)(u.X.FAMILY_CENTER_PANEL), e();
    }
    return (0, i.jsx)(l.Modal, {
        transitionState: n,
        onClose: e,
        title: x.intl.string(k.default.VGB30H),
        subtitle: x.intl.format(k.default["CrZZ+p"], {
            openSettingsHook: (t, n) => (0, i.jsx)(r.Anchor, { onClick: b, children: t }, n),
        }),
        actions: [
            { variant: "secondary", text: x.intl.string(x.t["ETE/oC"]), onClick: e },
            { text: x.intl.string(k.default.cSb7U0), onClick: y, loading: C, variant: "critical-primary" },
        ],
        children: (0, i.jsx)("div", {
            children:
                null != E &&
                (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: E }),
        }),
    });
}
