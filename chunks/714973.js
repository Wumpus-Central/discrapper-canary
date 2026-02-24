l.d(t, { A: () => v });
var i = l(627968),
    s = l(64700),
    a = l(503698),
    n = l.n(a),
    r = l(417597),
    d = l(397927),
    c = l(780964),
    o = l(840065),
    u = l(532624),
    m = l(350535),
    p = l(572164),
    h = l(652215),
    x = l(985018),
    C = l(405235);
function v(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, r.bG)([u.Ay], () => u.Ay.getKeybindForAction(h.hCu.SAVE_CLIP)),
        a = (0, p.Et)(),
        v = t ? C.HT : C.Kt,
        g = s.useCallback(() => {
            (0, o.openUserSettings)(c.X.CLIPS_PANEL);
        }, []),
        j = (() => {
            if (!a) return x.intl.format(x.t["3iveao"], { onClick: g });
            if (t) return x.intl.string(x.t["xrEs6/"]);
            if (null == l) return x.intl.format(x.t.jpKk7e, { onClick: g });
            {
                let e = m.dI(l.shortcut, !0);
                return x.intl.format(x.t["xY/8K5"], {
                    keybind: e,
                    keybindHook: () =>
                        (0, i.jsx)("span", {
                            className: C.EY,
                            children: (0, i.jsx)(d.e7I, { className: C.d4, shortcut: e }),
                        }),
                });
            }
        })();
    return (0, i.jsx)("div", {
        className: C.kL,
        children: (0, i.jsxs)("div", {
            className: C.Qs,
            children: [
                (0, i.jsx)("div", { className: v }),
                (0, i.jsx)(d.Text, { variant: "text-md/medium", className: n()(C.Gl, { [C.zo]: t }), children: j }),
            ],
        }),
    });
}
