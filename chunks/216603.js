l.d(e, { default: () => h });
var n = l(627968),
    i = l(64700),
    r = l(621466),
    s = l(477782),
    a = l(861672),
    c = l(442433),
    u = l(614203),
    o = l(723702),
    d = l(837921),
    p = l(985018);
function h(t) {
    let { text: e, target: l, onHeightUpdate: h, onSelect: E } = t,
        f = i.useCallback(() => {
            (0, c.Z_)(), (0, r.vq)(l, HTMLElement) && (l.focus(), setTimeout(() => l.focus(), 0));
        }, [l]),
        [L, m] = (0, u.A)({ text: e, target: l, onHeightUpdate: h });
    if (!o.isPlatformEmbedded || !((0, r.vq)(l, HTMLInputElement) || (0, r.vq)(l, HTMLTextAreaElement))) return null;
    let x =
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
        onClose: f,
        "aria-label": p.intl.string(p.t.NWlDSI),
        onSelect: E,
        children: [
            (0, n.jsx)(s.rX, { children: L }),
            (0, n.jsx)(s.rX, { children: m }),
            (0, n.jsxs)(s.rX, {
                children: [
                    x,
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
