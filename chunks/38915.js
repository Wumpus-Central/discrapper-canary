(n.d(t, { Z: () => c }), n(388685), n(642613));
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(481060),
    a = n(536442),
    l = n(797685);
function o(e) {
    let { hotspotLocation: t } = e,
        [n, o] = (0, r.Wu)([a.qc], () => [a.qc.hasHotspot(t, !0), a.qc.getHotspotOverride(t)]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(s.xJW, {
                title: t,
                className: l.hotspotSwitch,
                children: [
                    n
                        ? (0, i.jsx)(s.DY3, {
                              className: l.iconContainer,
                              element: 'span',
                              text: 'Active',
                              children: (0, i.jsx)(s.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: l.checkmark
                              })
                          })
                        : (0, i.jsx)(s.DY3, {
                              className: l.iconContainer,
                              element: 'span',
                              text: 'Inactive',
                              children: (0, i.jsx)(s.Dio, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: l.xmark
                              })
                          }),
                    (0, i.jsx)(s.q4e, {
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
            (0, i.jsx)(s.$i$, {})
        ]
    });
}
function c(e) {
    let { className: t } = e;
    return (0, i.jsxs)(s.hjN, {
        title: 'Hotspots',
        tag: s.RB0.H1,
        className: t,
        children: [
            (0, i.jsx)(s.Text, {
                className: l.helpText,
                tag: 'p',
                variant: 'text-sm/normal',
                children: 'All the "hotspots" in app, and their current status. Use the select menu to override them on or off.'
            }),
            Object.keys(a.v6)
                .sort((e, t) => e.localeCompare(t))
                .map((e) => (0, i.jsx)(o, { hotspotLocation: e }, e))
        ]
    });
}
