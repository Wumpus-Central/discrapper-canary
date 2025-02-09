n.d(t, { Z: () => u });
var i,
    l = n(200651);
n(192379);
var a = n(481060),
    r = n(600164),
    s = n(553554),
    o = (((i = o || {}).SMALL = 'SMALL'), (i.MEDIUM = 'MEDIUM'), (i.LARGE = 'LARGE'), i);
let c = {
        SMALL: s.dropdownSmall,
        MEDIUM: s.dropdownMedium,
        LARGE: s.dropdownLarge
    },
    d = (e) => {
        let { onDropdownClick: t, children: n, contentClassName: i, dropdownSize: o = 'MEDIUM', ...d } = e;
        return (0, l.jsx)(a.zxk, {
            ...d,
            children: (0, l.jsxs)(r.Z, {
                align: r.Z.Align.CENTER,
                children: [
                    (0, l.jsx)(r.Z.Child, {
                        className: i,
                        children: n
                    }),
                    null != t
                        ? (0, l.jsxs)(a.P3F, {
                              className: c[o],
                              onClick: (e) => {
                                  e.stopPropagation(), null != t && t(e);
                              },
                              children: [
                                  (0, l.jsx)('div', { className: s.arrowSeparator }),
                                  (0, l.jsx)(a.CJ0, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: s.dropdownArrow
                                  })
                              ]
                          })
                        : null
                ]
            })
        });
    };
(d.DropdownSizes = o), (d.Sizes = a.zxk.Sizes), (d.Colors = a.zxk.Colors), (d.Looks = a.zxk.Looks);
let u = d;
