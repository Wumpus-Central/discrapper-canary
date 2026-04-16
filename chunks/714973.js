l.d(t, { A: () => g });
var n = l(627968),
    a = l(64700),
    i = l(687264),
    s = l(417597),
    r = l(397927),
    d = l(780964),
    o = l(858897),
    c = l(532624),
    u = l(350535),
    m = l(572164),
    h = l(652215),
    p = l(189676),
    x = l(985018),
    f = l(174346);
function g(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, s.bG)([c.Ay], () => c.Ay.getKeybindForAction(h.hCu.SAVE_CLIP)),
        g = (0, m.Et)(),
        v = a.useCallback(() => {
            (0, o.openUserSettings)(d.X.CLIPS_PANEL);
        }, []),
        j = x.intl.string(p.default["+M2iLf"]),
        b = (() => {
            if (t) return x.intl.string(p.default.xkY5xS);
            if (!g) return x.intl.format(x.t["3iveao"], { onClick: v });
            if (null == l) return x.intl.format(x.t.jpKk7e, { onClick: v });
            let e = u.dI(l.shortcut, !0);
            return x.intl.format(x.t["xY/8K5"], {
                keybind: e,
                keybindHook: () =>
                    (0, n.jsx)("span", {
                        className: f.EY,
                        children: (0, n.jsx)(r.e7I, { className: f.d4, shortcut: e }),
                    }),
            });
        })();
    return (0, n.jsx)("div", {
        className: f.kL,
        children: (0, n.jsxs)("div", {
            className: f.Qs,
            children: [
                (0, n.jsx)(i.N, { width: 213, height: 135, alt: j }),
                (0, n.jsx)(r.Heading, { className: f.wx, variant: "heading-xl/semibold", children: j }),
                (0, n.jsx)(r.Text, { className: f.h_, variant: "text-md/medium", children: b }),
            ],
        }),
    });
}
