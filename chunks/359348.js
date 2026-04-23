n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(417597),
    a = n(265486),
    r = n(475358),
    o = n(176781),
    d = n(442433),
    c = n(688810),
    u = n(384059),
    h = n(42473),
    A = n(186111),
    _ = n(532624),
    m = n(350535),
    g = n(274372),
    p = n(572164),
    f = n(399925),
    E = n(652215),
    x = n(985018),
    I = n(646693),
    C = n(145394);
function b(e) {
    (0, d.L3)(e, async () => {
        let { default: e } = await n.e("44751").then(n.bind(n, 575538));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
let N = (e) => {
        let { keybindString: t, targetElementRef: n } = e,
            [s, o] = l.useState(!1),
            d = l.useCallback(() => o(!1), []);
        return (0, i.jsx)(a.A, {
            shouldShow: s,
            targetElementRef: n,
            position: "top",
            title: x.intl.format(x.t["o+srEw"], {
                keybind: t,
                keybindHook: () =>
                    (0, i.jsx)("span", { className: I.E, children: (0, i.jsx)(r.e, { className: I.d, shortcut: t }) }),
            }),
            body: x.intl.format(x.t.DWeRm1, { keybindHook: () => t, keybind: t }),
            graphic: { type: "image", src: C },
            caretConfig: { align: "center" },
            onRequestClose: d,
        });
    },
    S = () => {
        let e = l.useRef(null),
            { parentAnalyticsLocation: t } = (0, c.Ay)(),
            n = (0, s.bG)([A.A], () => A.A.hasLayers()),
            a = (0, p.Et)(),
            r = (0, s.bG)([g.A], () => g.A.getIsAtMaxSaveClipOperations()),
            d = (0, s.bG)([_.Ay], () => _.Ay.getKeybindForAction(E.hCu.SAVE_CLIP));
        if (!a || null == d || n) return null;
        let I = m.dI(d.shortcut, !0);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(N, { keybindString: I, targetElementRef: e }),
                (0, i.jsx)(h.A, {
                    ref: e,
                    disabled: r,
                    tooltipText:
                        null != d
                            ? x.intl.formatToPlainString(x.t.HIMcv1, { hotkey: m.dI(d?.shortcut, !0) })
                            : x.intl.string(x.t.s52pju),
                    onClick: () => {
                        (0, f.l0)(), (0, u.X)(t, u.O.CLIP);
                    },
                    onContextMenu: b,
                    icon: o.x,
                }),
            ],
        });
    };
