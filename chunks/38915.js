n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    a = n(536442),
    l = n(377681);
function o(e) {
    let { hotspotLocation: t } = e,
        [n, o] = (0, s.Wu)([a.qc], () => [a.qc.hasHotspot(t, !0), a.qc.getHotspotOverride(t)]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.FormItem, {
                title: t,
                className: l.hotspotSwitch,
                children: [
                    n
                        ? (0, i.jsx)(r.TooltipContainer, {
                              className: l.iconContainer,
                              element: 'span',
                              text: 'Active',
                              children: (0, i.jsx)(r.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: l.checkmark
                              })
                          })
                        : (0, i.jsx)(r.TooltipContainer, {
                              className: l.iconContainer,
                              element: 'span',
                              text: 'Inactive',
                              children: (0, i.jsx)(r.XSmallIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: l.xmark
                              })
                          }),
                    (0, i.jsx)(r.SingleSelect, {
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
            (0, i.jsx)(r.FormDivider, {})
        ]
    });
}
function c(e) {
    let { className: t } = e;
    return (0, i.jsxs)(r.FormSection, {
        title: 'Hotspots',
        tag: r.FormTitleTags.H1,
        className: t,
        children: [
            (0, i.jsx)(r.Text, {
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
