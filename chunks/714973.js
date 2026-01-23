l.d(t, {
    A: () => v,
});
var n = l(627968),
    r = l(64700),
    i = l(503698),
    a = l.n(i),
    s = l(417597),
    c = l(397927),
    o = l(780964),
    u = l(840065),
    d = l(532624),
    p = l(350535),
    m = l(572164),
    f = l(652215),
    y = l(985018),
    b = l(7709);

function v(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, s.bG)([d.Ay], () => d.Ay.getKeybindForAction(f.hCu.SAVE_CLIP)),
        i = (0, m.Et)(),
        v = t ? b.HT : b.Kt,
        j = r.useCallback(() => {
            (0, u.openUserSettings)(o.X.CLIPS_PANEL);
        }, []),
        h = (() => {
            if (!i)
                return y.intl.format(y.t["3iveao"], {
                    onClick: j,
                });
            if (t) return y.intl.string(y.t["xrEs6/"]);
            if (null == l)
                return y.intl.format(y.t.jpKk7e, {
                    onClick: j,
                });
            {
                let e = p.dI(l.shortcut, !0);
                return y.intl.format(y.t["xY/8K5"], {
                    keybind: e,
                    keybindHook: () =>
                        (0, n.jsx)("span", {
                            className: b.EY,
                            children: (0, n.jsx)(c.e7I, {
                                className: b.d4,
                                shortcut: e,
                            }),
                        }),
                });
            }
        })();
    return (0, n.jsx)("div", {
        className: b.kL,
        children: (0, n.jsxs)("div", {
            className: b.Qs,
            children: [
                (0, n.jsx)("div", {
                    className: v,
                }),
                (0, n.jsx)(c.Text, {
                    variant: "text-md/medium",
                    className: a()(b.Gl, {
                        [b.zo]: t,
                    }),
                    children: h,
                }),
            ],
        }),
    });
}
