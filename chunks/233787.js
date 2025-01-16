var s,
    a,
    i = n(200651);
n(192379);
var c = n(481060),
    l = n(600164),
    o = n(637926);
((s = a || (a = {})).UPGRADE = 'UPGRADE'), (s.CANCEL = 'CANCEL'), (s.UNVERIFIED = 'UNVERIFIED'), (s.UNCLAIMED = 'UNCLAIMED'), (s.GRANDFATHERED = 'GRANDFATHERED');
let r = {
        UPGRADE: 'imageUpgrade',
        CANCEL: 'imageCancel',
        UNVERIFIED: 'imageUnverified',
        UNCLAIMED: 'imageUnclaimed',
        GRANDFATHERED: 'imageCancel'
    },
    d = (e) => {
        let { children: t, ...n } = e;
        return (0, i.jsx)(c.ModalRoot, {
            ...n,
            children: t
        });
    };
(d.Header = (e) => {
    let { children: t, onClose: n } = e;
    return (0, i.jsxs)(c.ModalHeader, {
        justify: l.Z.Justify.BETWEEN,
        separator: !1,
        children: [
            (0, i.jsx)(c.FormTitle, {
                tag: c.FormTitleTags.H4,
                children: t
            }),
            null != n
                ? (0, i.jsx)(c.ModalCloseButton, {
                      className: o.__invalid_closeIcon,
                      onClick: n
                  })
                : null
        ]
    });
}),
    (d.Content = (e) => {
        let { children: t, type: n } = e;
        return (0, i.jsxs)(c.ModalContent, {
            children: [
                (0, i.jsx)('div', { className: o[r[n]] }),
                (0, i.jsx)('div', {
                    className: o.message,
                    children: t
                })
            ]
        });
    }),
    (d.Footer = (e) => {
        let { primary: t, primaryRenderer: n, secondary: s } = e;
        return (0, i.jsx)(c.ModalFooter, {
            children: (0, i.jsxs)(l.Z, {
                justify: l.Z.Justify.END,
                children: [
                    null != s
                        ? (0, i.jsx)(c.Button, {
                              onClick: s.onClick,
                              look: c.Button.Looks.LINK,
                              innerClassName: o.secondaryButton,
                              children: s.label
                          })
                        : null,
                    null != t
                        ? (0, i.jsx)(c.Button, {
                              onClick: t.onClick,
                              color: c.Button.Colors.BRAND,
                              children: t.label
                          })
                        : n
                ]
            })
        });
    }),
    (d.Types = a),
    (t.Z = d);
