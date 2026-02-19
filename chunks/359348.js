"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    l = n(417597),
    r = n(342494),
    a = n(397927),
    o = n(442433),
    c = n(688810),
    d = n(384059),
    u = n(42473),
    h = n(186111),
    A = n(532624),
    p = n(350535),
    g = n(274372),
    m = n(572164),
    _ = n(399925),
    f = n(652215),
    x = n(985018),
    C = n(345314),
    E = n(145394);
function I(e) {
    (0, o.L3)(e, async () => {
        let { default: e } = await n.e("44751").then(n.bind(n, 575538));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
let b = (e) => {
        let { keybindString: t, targetElementRef: n } = e,
            [l, o] = s.useState(!1),
            c = s.useCallback(() => o(!1), []);
        return (0, i.jsx)(r.AM, {
            shouldShow: l,
            targetElementRef: n,
            position: "top",
            title: x.intl.format(x.t["o+srEw"], {
                keybind: t,
                keybindHook: () =>
                    (0, i.jsx)("span", {
                        className: C.E,
                        children: (0, i.jsx)(a.e7I, { className: C.d, shortcut: t }),
                    }),
            }),
            body: x.intl.format(x.t.DWeRm1, { keybindHook: () => t, keybind: t }),
            graphic: { type: "image", src: E },
            caretConfig: { align: "center" },
            onRequestClose: c,
        });
    },
    N = () => {
        let e = s.useRef(null),
            { parentAnalyticsLocation: t } = (0, c.Ay)(),
            n = (0, l.bG)([h.A], () => h.A.hasLayers()),
            r = (0, m.Et)(),
            o = (0, l.bG)([g.A], () => g.A.getIsAtMaxSaveClipOperations()),
            C = (0, l.bG)([A.Ay], () => A.Ay.getKeybindForAction(f.hCu.SAVE_CLIP));
        if (!r || null == C || n) return null;
        let E = p.dI(C.shortcut, !0);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(b, { keybindString: E, targetElementRef: e }),
                (0, i.jsx)(u.A, {
                    ref: e,
                    disabled: o,
                    tooltipText:
                        null != C
                            ? x.intl.formatToPlainString(x.t.HIMcv1, { hotkey: p.dI(C?.shortcut, !0) })
                            : x.intl.string(x.t.s52pju),
                    onClick: () => {
                        (0, _.l0)(), (0, d.X)(t, d.O.CLIP);
                    },
                    onContextMenu: I,
                    icon: a.xgA,
                }),
            ],
        });
    };
