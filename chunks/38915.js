n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    a = n(536442),
    l = n(757425);
function o(e) {
    let { hotspotLocation: t } = e,
        [n, o] = (0, r.Wu)([a.qc], () => [a.qc.hasHotspot(t, !0), a.qc.getHotspotOverride(t)]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(s.FormItem, {
                title: t,
                className: l.hotspotSwitch,
                children: [
                    n
                        ? (0, i.jsx)(s.TooltipContainer, {
                              className: l.iconContainer,
                              element: 'span',
                              text: 'Active',
                              children: (0, i.jsx)(s.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: l.checkmark
                              })
                          })
                        : (0, i.jsx)(s.TooltipContainer, {
                              className: l.iconContainer,
                              element: 'span',
                              text: 'Inactive',
                              children: (0, i.jsx)(s.XSmallIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: l.xmark
                              })
                          }),
                    (0, i.jsx)(s.SingleSelect, {
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
            (0, i.jsx)(s.FormDivider, {})
        ]
    });
}
function c(e) {
    let { className: t } = e;
    return (0, i.jsxs)(s.FormSection, {
        title: 'Hotspots',
        tag: s.FormTitleTags.H1,
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
