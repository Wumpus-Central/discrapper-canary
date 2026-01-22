l.d(t, { A: () => v });
var n = l(627968),
    r = l(64700),
    i = l(503698),
    a = l.n(i),
    s = l(417597),
    c = l(397927),
    o = l(725177),
    u = l(532624),
    d = l(350535),
    p = l(572164),
    m = l(652215),
    f = l(857266),
    y = l(985018),
    b = l(7709);
function v(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, s.bG)([u.Ay], () => u.Ay.getKeybindForAction(m.hCu.SAVE_CLIP)),
        i = (0, p.Et)(),
        v = t ? b.HT : b.Kt,
        j = r.useCallback(() => {
            (0, o.A)(f.J.CLIPS, { stackingBehavior: "stack" });
        }, []),
        h = (() => {
            if (!i) return y.intl.format(y.t["3iveao"], { onClick: j });
            if (t) return y.intl.string(y.t["xrEs6/"]);
            if (null == l) return y.intl.format(y.t.jpKk7e, { onClick: j });
            {
                let e = d.dI(l.shortcut, !0);
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
                (0, n.jsx)("div", { className: v }),
                (0, n.jsx)(c.Text, {
                    variant: "text-md/medium",
                    className: a()(b.Gl, { [b.zo]: t }),
                    children: h,
                }),
            ],
        }),
    });
}
