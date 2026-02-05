l.d(e, { default: () => p });
var n = l(627968),
    i = l(64700),
    r = l(621466),
    s = l(397927),
    a = l(442433),
    c = l(614203),
    u = l(723702),
    o = l(837921),
    d = l(985018);
function p(t) {
    let { text: e, target: l, onHeightUpdate: p, onSelect: h } = t,
        E = i.useCallback(() => {
            (0, a.Z_)(), (0, r.vq)(l, HTMLElement) && (l.focus(), setTimeout(() => l.focus(), 0));
        }, [l]),
        [f, L] = (0, c.A)({ text: e, target: l, onHeightUpdate: p });
    if (!u.isPlatformEmbedded || !((0, r.vq)(l, HTMLInputElement) || (0, r.vq)(l, HTMLTextAreaElement))) return null;
    let m =
        "" !== e
            ? [
                  (0, n.jsx)(
                      s.Drp,
                      {
                          id: "cut",
                          label: d.intl.string(d.t.pNPVhe),
                          shortcut: (0, u.isMac)() ? "⌘X" : "Ctrl+X",
                          action: () => setTimeout(() => o.Ay.cut(), 0),
                      },
                      "cut",
                  ),
                  (0, n.jsx)(
                      s.Drp,
                      {
                          id: "copy",
                          label: d.intl.string(d.t.OpuAlK),
                          shortcut: (0, u.isMac)() ? "⌘C" : "Ctrl+C",
                          action: () => o.Ay.copy(e),
                      },
                      "copy",
                  ),
              ]
            : null;
    return (0, n.jsxs)(s.W1t, {
        "data-menu-migrated": !0,
        navId: "textarea-context",
        onClose: E,
        "aria-label": d.intl.string(d.t.NWlDSI),
        onSelect: h,
        children: [
            (0, n.jsx)(s.rXV, { children: f }),
            (0, n.jsx)(s.rXV, { children: L }),
            (0, n.jsxs)(s.rXV, {
                children: [
                    m,
                    (0, n.jsx)(s.Drp, {
                        id: "paste",
                        label: d.intl.string(d.t.lMUxVi),
                        shortcut: (0, u.isMac)() ? "⌘V" : "Ctrl+V",
                        action: () => setTimeout(() => o.Ay.paste(), 0),
                    }),
                ],
            }),
        ],
    });
}
