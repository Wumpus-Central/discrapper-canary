n.d(t, { Z: () => c }), n(47120), n(230036);
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(536442),
    l = n(797685);
function o(e) {
    let { hotspotLocation: t } = e,
        [n, o] = (0, i.Wu)([a.qc], () => [a.qc.hasHotspot(t, !0), a.qc.getHotspotOverride(t)]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.xJW, {
                title: t,
                className: l.hotspotSwitch,
                children: [
                    n
                        ? (0, r.jsx)(s.DY3, {
                              className: l.iconContainer,
                              element: 'span',
                              text: 'Active',
                              children: (0, r.jsx)(s.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: l.checkmark
                              })
                          })
                        : (0, r.jsx)(s.DY3, {
                              className: l.iconContainer,
                              element: 'span',
                              text: 'Inactive',
                              children: (0, r.jsx)(s.Dio, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: l.xmark
                              })
                          }),
                    (0, r.jsx)(s.q4e, {
                        className: l.overrideSelect,
                        value: o,
                        options: [
                            {
                                value: void 0,
                                label: 'No Override'
                            },
                            {
                                value: !0,
                                label: 'Force Active'
                            },
                            {
                                value: !1,
                                label: 'Force Inactive'
                            }
                        ],
                        onChange: (e) => (null != e ? (0, a.hv)(t, e) : (0, a.Po)(t))
                    })
                ]
            }),
            (0, r.jsx)(s.$i$, {})
        ]
    });
}
function c(e) {
    let { className: t } = e;
    return (0, r.jsxs)(s.hjN, {
        title: 'Hotspots',
        tag: s.RB0.H1,
        className: t,
        children: [
            (0, r.jsx)(s.Text, {
                className: l.helpText,
                tag: 'p',
                variant: 'text-sm/normal',
                children: 'All the "hotspots" in app, and their current status. Use the select menu to override them on or off.'
            }),
            Object.keys(a.v6)
                .sort((e, t) => e.localeCompare(t))
                .map((e) => (0, r.jsx)(o, { hotspotLocation: e }, e))
        ]
    });
}
