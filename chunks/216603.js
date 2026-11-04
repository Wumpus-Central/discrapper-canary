var r = l(477900),
    s = l(582128),
    i = l(621466),
    n = l(477782),
    c = l(165862),
    a = l(442433),
    u = l(413756),
    o = l(723702),
    d = l(253400),
    p = l(792996);
l.d(
    e,
    {},
    {
        default: function (t) {
            let { text: e, target: l, onHeightUpdate: h, onSelect: x } = t,
                m = s.useCallback(() => {
                    ((0, a.Z_)(), (0, i.vq)(l, HTMLElement) && (l.focus(), setTimeout(() => l.focus(), 0)));
                }, [l]),
                [C, b] = (0, u.A)({ text: e, target: l, onHeightUpdate: h });
            if (!o.isPlatformEmbedded || !((0, i.vq)(l, HTMLInputElement) || (0, i.vq)(l, HTMLTextAreaElement)))
                return null;
            let X =
                "" !== e
                    ? [
                          (0, r.jsx)(
                              n.Dr,
                              {
                                  id: "cut",
                                  label: p.intl.string(p.t.pNPVhe),
                                  shortcut: (0, o.cX)() ? "\u2318X" : "Ctrl+X",
                                  action: () => setTimeout(() => d.Ay.cut(), 0),
                              },
                              "cut",
                          ),
                          (0, r.jsx)(
                              n.Dr,
                              {
                                  id: "copy",
                                  label: p.intl.string(p.t.OpuAlK),
                                  shortcut: (0, o.cX)() ? "\u2318C" : "Ctrl+C",
                                  action: () => d.Ay.copy(e),
                              },
                              "copy",
                          ),
                      ]
                    : null;
            return (0, r.jsxs)(c.W, {
                "data-menu-migrated": !0,
                navId: "textarea-context",
                onClose: m,
                "aria-label": p.intl.string(p.t.NWlDSI),
                onSelect: x,
                children: [
                    (0, r.jsx)(n.rX, { children: C }),
                    (0, r.jsx)(n.rX, { children: b }),
                    (0, r.jsxs)(n.rX, {
                        children: [
                            X,
                            (0, r.jsx)(n.Dr, {
                                id: "paste",
                                label: p.intl.string(p.t.lMUxVi),
                                shortcut: (0, o.cX)() ? "\u2318V" : "Ctrl+V",
                                action: () => setTimeout(() => d.Ay.paste(), 0),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
);
