n.d(s, { Z: () => u });
var t,
    i = n(200651);
n(192379);
var a = n(481060),
    l = n(600164),
    r = n(338185),
    c = (((t = c || {}).UPGRADE = 'UPGRADE'), (t.CANCEL = 'CANCEL'), (t.UNVERIFIED = 'UNVERIFIED'), (t.UNCLAIMED = 'UNCLAIMED'), (t.GRANDFATHERED = 'GRANDFATHERED'), t);
let o = {
        UPGRADE: 'imageUpgrade',
        CANCEL: 'imageCancel',
        UNVERIFIED: 'imageUnverified',
        UNCLAIMED: 'imageUnclaimed',
        GRANDFATHERED: 'imageCancel'
    },
    d = (e) => {
        let { children: s, ...n } = e;
        return (0, i.jsx)(a.Y0X, {
            ...n,
            children: s
        });
    };
(d.Header = (e) => {
    let { children: s, onClose: n } = e;
    return (0, i.jsxs)(a.xBx, {
        justify: l.Z.Justify.BETWEEN,
        separator: !1,
        children: [
            (0, i.jsx)(a.vwX, {
                tag: a.RB0.H4,
                children: s
            }),
            null != n
                ? (0, i.jsx)(a.olH, {
                      className: r.__invalid_closeIcon,
                      onClick: n
                  })
                : null
        ]
    });
}),
    (d.Content = (e) => {
        let { children: s, type: n } = e;
        return (0, i.jsxs)(a.hzk, {
            children: [
                (0, i.jsx)('div', { className: r[o[n]] }),
                (0, i.jsx)('div', {
                    className: r.message,
                    children: s
                })
            ]
        });
    }),
    (d.Footer = (e) => {
        let { primary: s, primaryRenderer: n, secondary: t } = e;
        return (0, i.jsx)(a.mzw, {
            children: (0, i.jsxs)(l.Z, {
                justify: l.Z.Justify.END,
                children: [
                    null != t
                        ? (0, i.jsx)(a.zxk, {
                              onClick: t.onClick,
                              look: a.zxk.Looks.LINK,
                              innerClassName: r.secondaryButton,
                              children: t.label
                          })
                        : null,
                    null != s
                        ? (0, i.jsx)(a.zxk, {
                              onClick: s.onClick,
                              color: a.zxk.Colors.BRAND,
                              children: s.label
                          })
                        : n
                ]
            })
        });
    }),
    (d.Types = c);
let u = d;
