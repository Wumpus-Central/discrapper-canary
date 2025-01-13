var i,
    r,
    l = n(200651);
n(192379);
var a = n(481060),
    o = n(600164),
    s = n(224379);
((i = r || (r = {})).SMALL = 'SMALL'), (i.MEDIUM = 'MEDIUM'), (i.LARGE = 'LARGE');
let c = {
        SMALL: s.dropdownSmall,
        MEDIUM: s.dropdownMedium,
        LARGE: s.dropdownLarge
    },
    d = (e) => {
        let { onDropdownClick: t, children: n, contentClassName: i, dropdownSize: r = 'MEDIUM', ...d } = e;
        return (0, l.jsx)(a.Button, {
            ...d,
            children: (0, l.jsxs)(o.Z, {
                align: o.Z.Align.CENTER,
                children: [
                    (0, l.jsx)(o.Z.Child, {
                        className: i,
                        children: n
                    }),
                    null != t
                        ? (0, l.jsxs)(a.Clickable, {
                              className: c[r],
                              onClick: (e) => {
                                  e.stopPropagation(), null != t && t(e);
                              },
                              children: [
                                  (0, l.jsx)('div', { className: s.arrowSeparator }),
                                  (0, l.jsx)(a.ChevronSmallDownIcon, {
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
(d.DropdownSizes = r), (d.Sizes = a.Button.Sizes), (d.Colors = a.Button.Colors), (d.Looks = a.Button.Looks), (t.Z = d);
