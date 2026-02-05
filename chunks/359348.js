n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(417597),
    a = n(342494),
    r = n(397927),
    o = n(442433),
    d = n(688810),
    c = n(384059),
    u = n(42473),
    h = n(186111),
    A = n(532624),
    g = n(350535),
    m = n(274372),
    p = n(572164),
    _ = n(399925),
    x = n(652215),
    f = n(985018),
    E = n(345314),
    C = n(145394);
function I(e) {
    (0, o.L3)(e, async () => {
        let { default: e } = await n.e("44751").then(n.bind(n, 575538));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
let S = (e) => {
        let { keybindString: t, targetElementRef: n } = e,
            [s, o] = l.useState(!1),
            d = l.useCallback(() => o(!1), []);
        return (0, i.jsx)(a.AM, {
            shouldShow: s,
            targetElementRef: n,
            position: "top",
            title: f.intl.format(f.t["o+srEw"], {
                keybind: t,
                keybindHook: () =>
                    (0, i.jsx)("span", {
                        className: E.E,
                        children: (0, i.jsx)(r.e7I, { className: E.d, shortcut: t }),
                    }),
            }),
            body: f.intl.format(f.t.DWeRm1, { keybindHook: () => t, keybind: t }),
            graphic: { type: "image", src: C },
            caretConfig: { align: "center" },
            onRequestClose: d,
        });
    },
    b = () => {
        let e = l.useRef(null),
            { parentAnalyticsLocation: t } = (0, d.Ay)(),
            n = (0, s.bG)([h.A], () => h.A.hasLayers()),
            a = (0, p.Et)(),
            o = (0, s.bG)([m.A], () => m.A.getIsAtMaxSaveClipOperations()),
            E = (0, s.bG)([A.Ay], () => A.Ay.getKeybindForAction(x.hCu.SAVE_CLIP));
        if (!a || null == E || n) return null;
        let C = g.dI(E.shortcut, !0);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(S, { keybindString: C, targetElementRef: e }),
                (0, i.jsx)(u.A, {
                    ref: e,
                    disabled: o,
                    tooltipText:
                        null != E
                            ? f.intl.formatToPlainString(f.t.HIMcv1, { hotkey: g.dI(E?.shortcut, !0) })
                            : f.intl.string(f.t.s52pju),
                    onClick: () => {
                        (0, _.l0)(), (0, c.X)(t, c.O.CLIP);
                    },
                    onContextMenu: I,
                    icon: r.xgA,
                }),
            ],
        });
    };
