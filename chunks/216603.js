l.d(e, { default: () => h });
var n = l(627968),
    r = l(64700),
    i = l(621466),
    s = l(477782),
    a = l(550079),
    c = l(442433),
    u = l(316254),
    o = l(723702),
    d = l(19575),
    p = l(985018);
function h(t) {
    let { text: e, target: l, onHeightUpdate: h, onSelect: E } = t,
        L = r.useCallback(() => {
            (0, c.Z_)(), (0, i.vq)(l, HTMLElement) && (l.focus(), setTimeout(() => l.focus(), 0));
        }, [l]),
        [m, x] = (0, u.A)({ text: e, target: l, onHeightUpdate: h });
    if (!o.isPlatformEmbedded || !((0, i.vq)(l, HTMLInputElement) || (0, i.vq)(l, HTMLTextAreaElement))) return null;
    let C =
        "" !== e
            ? [
                  (0, n.jsx)(
                      s.Dr,
                      {
                          id: "cut",
                          label: p.intl.string(p.t.pNPVhe),
                          shortcut: (0, o.isMac)() ? "⌘X" : "Ctrl+X",
                          action: () => setTimeout(() => d.Ay.cut(), 0),
                      },
                      "cut",
                  ),
                  (0, n.jsx)(
                      s.Dr,
                      {
                          id: "copy",
                          label: p.intl.string(p.t.OpuAlK),
                          shortcut: (0, o.isMac)() ? "⌘C" : "Ctrl+C",
                          action: () => d.Ay.copy(e),
                      },
                      "copy",
                  ),
              ]
            : null;
    return (0, n.jsxs)(a.W, {
        "data-menu-migrated": !0,
        navId: "textarea-context",
        onClose: L,
        "aria-label": p.intl.string(p.t.NWlDSI),
        onSelect: E,
        children: [
            (0, n.jsx)(s.rX, { children: m }),
            (0, n.jsx)(s.rX, { children: x }),
            (0, n.jsxs)(s.rX, {
                children: [
                    C,
                    (0, n.jsx)(s.Dr, {
                        id: "paste",
                        label: p.intl.string(p.t.lMUxVi),
                        shortcut: (0, o.isMac)() ? "⌘V" : "Ctrl+V",
                        action: () => setTimeout(() => d.Ay.paste(), 0),
                    }),
                ],
            }),
        ],
    });
}
