n.d(t, { Z: () => d }), n(388685), n(642613);
var a = n(951288);
n(647438);
var r = n(442837),
    l = n(28664),
    i = n(481060),
    s = n(536442),
    o = n(983380);
function c(e) {
    let { hotspotLocation: t } = e,
        [n, c] = (0, r.Wu)([s.qc], () => [s.qc.hasHotspot(t, !0), s.qc.getHotspotOverride(t)]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(i.xJW, {
                title: t,
                className: o.hotspotSwitch,
                children: [
                    n
                        ? (0, a.jsx)(l.u, {
                              asContainer: !0,
                              tag: "span",
                              text: "Active",
                              children: (0, a.jsx)(i.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: o.checkmark,
                              }),
                          })
                        : (0, a.jsx)(l.u, {
                              asContainer: !0,
                              tag: "span",
                              text: "Inactive",
                              children: (0, a.jsx)(i.Dio, {
                                  size: "md",
                                  color: "currentColor",
                                  className: o.xmark,
                              }),
                          }),
                    (0, a.jsx)(i.q4e, {
                        className: o.overrideSelect,
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
            (0, a.jsx)(i.$i$, {}),
        ],
    });
}
function d() {
    return (0, a.jsxs)(i.hjN, {
        title: "Hotspots",
        tag: i.RB0.H1,
        className: o.hotspotsSection,
        children: [
            (0, a.jsx)(i.Text, {
                className: o.helpText,
                tag: "p",
                variant: "text-sm/normal",
                children:
                    'All the "hotspots" in app, and their current status. Use the select menu to override them on or off.',
            }),
            Object.keys(s.v6)
                .sort((e, t) => e.localeCompare(t))
                .map((e) => (0, a.jsx)(c, { hotspotLocation: e }, e)),
        ],
    });
}
