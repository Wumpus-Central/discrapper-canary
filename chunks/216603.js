l.d(t, { default: () => p });
var n = l(627968),
    r = l(64700),
    a = l(621466),
    i = l(477782),
    s = l(861672),
    c = l(442433),
    o = l(614203),
    u = l(723702),
    d = l(837921),
    L = l(985018);
function p(e) {
    let { text: t, target: l, onHeightUpdate: p, onSelect: E } = e,
        h = r.useCallback(() => {
            (0, c.Z_)(), (0, a.vq)(l, HTMLElement) && (l.focus(), setTimeout(() => l.focus(), 0));
        }, [l]),
        [C, f] = (0, o.A)({ text: t, target: l, onHeightUpdate: p });
    if (!u.isPlatformEmbedded || !((0, a.vq)(l, HTMLInputElement) || (0, a.vq)(l, HTMLTextAreaElement))) return null;
    let A =
        "" !== t
            ? [
                  (0, n.jsx)(
                      i.Dr,
                      {
                          id: "cut",
                          label: L.intl.string(L.t.pNPVhe),
                          shortcut: (0, u.isMac)() ? "⌘X" : "Ctrl+X",
                          action: () => setTimeout(() => d.Ay.cut(), 0),
                      },
                      "cut",
                  ),
                  (0, n.jsx)(
                      i.Dr,
                      {
                          id: "copy",
                          label: L.intl.string(L.t.OpuAlK),
                          shortcut: (0, u.isMac)() ? "⌘C" : "Ctrl+C",
                          action: () => d.Ay.copy(t),
                      },
                      "copy",
                  ),
              ]
            : null;
    return (0, n.jsxs)(s.W, {
        "data-menu-migrated": !0,
        navId: "textarea-context",
        onClose: h,
        "aria-label": L.intl.string(L.t.NWlDSI),
        onSelect: E,
        children: [
            (0, n.jsx)(i.rX, { children: C }),
            (0, n.jsx)(i.rX, { children: f }),
            (0, n.jsxs)(i.rX, {
                children: [
                    A,
                    (0, n.jsx)(i.Dr, {
                        id: "paste",
                        label: L.intl.string(L.t.lMUxVi),
                        shortcut: (0, u.isMac)() ? "⌘V" : "Ctrl+V",
                        action: () => setTimeout(() => d.Ay.paste(), 0),
                    }),
                ],
            }),
        ],
    });
}
