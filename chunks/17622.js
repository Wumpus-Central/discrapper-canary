r.d(t, { Z: () => a });
var n = r(200651),
    o = r(793030),
    c = r(808189),
    s = r(30748);
function a() {
    var e, t;
    return (0, n.jsx)('div', {
        className: s.levelContainer,
        children:
            null === (t = c.C['0']) || void 0 === t
                ? void 0
                : null === (e = t.perks) || void 0 === e
                  ? void 0
                  : e.map((e, t) =>
                        (0, n.jsxs)(
                            'div',
                            {
                                className: s.perkContainer,
                                children: [
                                    (0, n.jsx)(e.icon, { size: 'sm' }),
                                    (0, n.jsx)(o.xv, {
                                        className: s.perkText,
                                        color: 'text-muted',
                                        variant: 'text-sm/medium',
                                        children: e.getCopy()
                                    })
                                ]
                            },
                            t
                        )
                    )
    });
}
