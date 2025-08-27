n.d(t, { Z: () => u }), n(388685), n(642613);
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(28664),
    o = n(481060),
    s = n(536442),
    l = n(625571);
function c(e) {
    let { hotspotLocation: t } = e,
        [n, c] = (0, i.Wu)([s.qc], () => [s.qc.hasHotspot(t, !0), s.qc.getHotspotOverride(t)]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.xJW, {
                title: t,
                className: l.hotspotSwitch,
                children: [
                    n
                        ? (0, r.jsx)(a.u, {
                              asContainer: !0,
                              tag: "span",
                              text: "Active",
                              children: (0, r.jsx)(o.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: l.checkmark,
                              }),
                          })
                        : (0, r.jsx)(a.u, {
                              asContainer: !0,
                              tag: "span",
                              text: "Inactive",
                              children: (0, r.jsx)(o.Dio, {
                                  size: "md",
                                  color: "currentColor",
                                  className: l.xmark,
                              }),
                          }),
                    (0, r.jsx)(o.q4e, {
                        className: l.overrideSelect,
                        value: c,
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
                        onChange: (e) => (null != e ? (0, s.hv)(t, e) : (0, s.Po)(t)),
                    }),
                ],
            }),
            (0, r.jsx)(o.$i$, {}),
        ],
    });
}
function u(e) {
    let { className: t } = e;
    return (0, r.jsxs)(o.hjN, {
        title: "Hotspots",
        tag: o.RB0.H1,
        className: t,
        children: [
            (0, r.jsx)(o.Text, {
                className: l.helpText,
                tag: "p",
                variant: "text-sm/normal",
                children:
                    'All the "hotspots" in app, and their current status. Use the select menu to override them on or off.',
            }),
            Object.keys(s.v6)
                .sort((e, t) => e.localeCompare(t))
                .map((e) => (0, r.jsx)(c, { hotspotLocation: e }, e)),
        ],
    });
}
