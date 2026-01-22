n.d(e, {
    default: () => d,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    c = n(621466),
    i = n(397927),
    a = n(442433),
    o = n(614203),
    s = n(723702),
    u = n(837921),
    p = n(985018);

function d(t) {
    let { text: e, target: n, onHeightUpdate: d, onSelect: b } = t,
        f = l.useCallback(() => {
            (0, a.Z_)(), (0, c.vq)(n, HTMLElement) && (n.focus(), setTimeout(() => n.focus(), 0));
        }, [n]),
        [y, h] = (0, o.A)({
            text: e,
            target: n,
            onHeightUpdate: d,
        });
    if (!s.isPlatformEmbedded || !((0, c.vq)(n, HTMLInputElement) || (0, c.vq)(n, HTMLTextAreaElement))) return null;
    let O =
        "" !== e
            ? [
                  (0, r.jsx)(
                      i.Drp,
                      {
                          id: "cut",
                          label: p.intl.string(p.t.pNPVhe),
                          hint: (0, s.isMac)() ? "⌘X" : "Ctrl+X",
                          action: () => setTimeout(() => u.Ay.cut(), 0),
                      },
                      "cut",
                  ),
                  (0, r.jsx)(
                      i.Drp,
                      {
                          id: "copy",
                          label: p.intl.string(p.t.OpuAlK),
                          hint: (0, s.isMac)() ? "⌘C" : "Ctrl+C",
                          action: () => u.Ay.copy(e),
                      },
                      "copy",
                  ),
              ]
            : null;
    return (0, r.jsxs)(i.W1t, {
        navId: "textarea-context",
        onClose: f,
        "aria-label": p.intl.string(p.t.NWlDSI),
        onSelect: b,
        children: [
            (0, r.jsx)(i.rXV, {
                children: y,
            }),
            (0, r.jsx)(i.rXV, {
                children: h,
            }),
            (0, r.jsxs)(i.rXV, {
                children: [
                    O,
                    (0, r.jsx)(i.Drp, {
                        id: "paste",
                        label: p.intl.string(p.t.lMUxVi),
                        hint: (0, s.isMac)() ? "⌘V" : "Ctrl+V",
                        action: () => setTimeout(() => u.Ay.paste(), 0),
                    }),
                ],
            }),
        ],
    });
}
