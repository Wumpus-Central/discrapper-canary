l.d(e, { default: () => h });
var s = l(627968),
    i = l(64700),
    r = l(621466),
    n = l(477782),
    a = l(980707),
    c = l(442433),
    u = l(316254),
    o = l(723702),
    d = l(19575),
    p = l(375708);
function h(t) {
    let { text: e, target: l, onHeightUpdate: h, onSelect: x } = t,
        m = i.useCallback(() => {
            (0, c.Z_)(), (0, r.vq)(l, HTMLElement) && (l.focus(), setTimeout(() => l.focus(), 0));
        }, [l]),
        [C, b] = (0, u.A)({ text: e, target: l, onHeightUpdate: h });
    if (!o.isPlatformEmbedded || !((0, r.vq)(l, HTMLInputElement) || (0, r.vq)(l, HTMLTextAreaElement))) return null;
    let j =
        "" !== e
            ? [
                  (0, s.jsx)(
                      n.Dr,
                      {
                          id: "cut",
                          label: p.intl.string(p.t.pNPVhe),
                          shortcut: (0, o.isMac)() ? "\u2318X" : "Ctrl+X",
                          action: () => setTimeout(() => d.Ay.cut(), 0),
                      },
                      "cut",
                  ),
                  (0, s.jsx)(
                      n.Dr,
                      {
                          id: "copy",
                          label: p.intl.string(p.t.OpuAlK),
                          shortcut: (0, o.isMac)() ? "\u2318C" : "Ctrl+C",
                          action: () => d.Ay.copy(e),
                      },
                      "copy",
                  ),
              ]
            : null;
    return (0, s.jsxs)(a.W, {
        "data-menu-migrated": !0,
        navId: "textarea-context",
        onClose: m,
        "aria-label": p.intl.string(p.t.NWlDSI),
        onSelect: x,
        children: [
            (0, s.jsx)(n.rX, { children: C }),
            (0, s.jsx)(n.rX, { children: b }),
            (0, s.jsxs)(n.rX, {
                children: [
                    j,
                    (0, s.jsx)(n.Dr, {
                        id: "paste",
                        label: p.intl.string(p.t.lMUxVi),
                        shortcut: (0, o.isMac)() ? "\u2318V" : "Ctrl+V",
                        action: () => setTimeout(() => d.Ay.paste(), 0),
                    }),
                ],
            }),
        ],
    });
}
