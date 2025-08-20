n.d(t, { Z: () => c }), n(388685), n(642613);
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(536442),
    s = n(625571);
function l(e) {
    let { hotspotLocation: t } = e,
        [n, l] = (0, i.Wu)([o.qc], () => [o.qc.hasHotspot(t, !0), o.qc.getHotspotOverride(t)]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(a.xJW, {
                title: t,
                className: s.hotspotSwitch,
                children: [
                    n
                        ? (0, r.jsx)(a.DY3, {
                              className: s.iconContainer,
                              element: "span",
                              text: "Active",
                              children: (0, r.jsx)(a.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: s.checkmark,
                              }),
                          })
                        : (0, r.jsx)(a.DY3, {
                              className: s.iconContainer,
                              element: "span",
                              text: "Inactive",
                              children: (0, r.jsx)(a.Dio, {
                                  size: "md",
                                  color: "currentColor",
                                  className: s.xmark,
                              }),
                          }),
                    (0, r.jsx)(a.q4e, {
                        className: s.overrideSelect,
                        value: l,
                        options: [
                            {
                                value: void 0,
                                label: "No Override",
                            },
                            {
                                value: !0,
                                label: "Force Active",
                            },
                            {
                                value: !1,
                                label: "Force Inactive",
                            },
                        ],
                        onChange: (e) => (null != e ? (0, o.hv)(t, e) : (0, o.Po)(t)),
                    }),
                ],
            }),
            (0, r.jsx)(a.$i$, {}),
        ],
    });
}
function c(e) {
    let { className: t } = e;
    return (0, r.jsxs)(a.hjN, {
        title: "Hotspots",
        tag: a.RB0.H1,
        className: t,
        children: [
            (0, r.jsx)(a.Text, {
                className: s.helpText,
                tag: "p",
                variant: "text-sm/normal",
                children:
                    'All the "hotspots" in app, and their current status. Use the select menu to override them on or off.',
            }),
            Object.keys(o.v6)
                .sort((e, t) => e.localeCompare(t))
                .map((e) => (0, r.jsx)(l, { hotspotLocation: e }, e)),
        ],
    });
}
