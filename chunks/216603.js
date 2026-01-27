r.d(e, {
    default: () => d,
}),
    r(896048);
var n = r(627968),
    l = r(64700),
    c = r(621466),
    i = r(397927),
    a = r(442433),
    o = r(614203),
    s = r(723702),
    u = r(837921),
    p = r(985018);

function d(t) {
    let { text: e, target: r, onHeightUpdate: d, onSelect: b } = t,
        f = l.useCallback(() => {
            (0, a.Z_)(), (0, c.vq)(r, HTMLElement) && (r.focus(), setTimeout(() => r.focus(), 0));
        }, [r]),
        [y, h] = (0, o.A)({
            text: e,
            target: r,
            onHeightUpdate: d,
        });
    if (!s.isPlatformEmbedded || !((0, c.vq)(r, HTMLInputElement) || (0, c.vq)(r, HTMLTextAreaElement))) return null;
    let O =
        "" !== e
            ? [
                  (0, n.jsx)(
                      i.Drp,
                      {
                          id: "cut",
                          label: p.intl.string(p.t.pNPVhe),
                          shortcut: (0, s.isMac)() ? "⌘X" : "Ctrl+X",
                          action: () => setTimeout(() => u.Ay.cut(), 0),
                      },
                      "cut",
                  ),
                  (0, n.jsx)(
                      i.Drp,
                      {
                          id: "copy",
                          label: p.intl.string(p.t.OpuAlK),
                          shortcut: (0, s.isMac)() ? "⌘C" : "Ctrl+C",
                          action: () => u.Ay.copy(e),
                      },
                      "copy",
                  ),
              ]
            : null;
    return (0, n.jsxs)(i.W1t, {
        "data-menu-migrated": !0,
        navId: "textarea-context",
        onClose: f,
        "aria-label": p.intl.string(p.t.NWlDSI),
        onSelect: b,
        children: [
            (0, n.jsx)(i.rXV, {
                children: y,
            }),
            (0, n.jsx)(i.rXV, {
                children: h,
            }),
            (0, n.jsxs)(i.rXV, {
                children: [
                    O,
                    (0, n.jsx)(i.Drp, {
                        id: "paste",
                        label: p.intl.string(p.t.lMUxVi),
                        shortcut: (0, s.isMac)() ? "⌘V" : "Ctrl+V",
                        action: () => setTimeout(() => u.Ay.paste(), 0),
                    }),
                ],
            }),
        ],
    });
}
