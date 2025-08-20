n.d(t, { Z: () => d });
var l = n(951288);
n(647438);
var r = n(755721),
    a = n(481060),
    i = n(547972),
    o = n(703288),
    c = n(332325),
    s = n(388032),
    u = n(105433);
function d(e) {
    let { filterQuery: t, setFilterQuery: n, onClose: d, sortOrder: p, setSortOrder: m } = e;
    return (0, l.jsxs)(a.xBx, {
        className: u.root,
        separator: !1,
        children: [
            (0, l.jsx)(a.AlX, {
                size: "xs",
                color: "currentColor",
                className: u.icon,
            }),
            (0, l.jsx)(a.X6q, {
                className: u.title,
                variant: "heading-xxl/bold",
                children: s.intl.string(s.t.z2jK6e),
            }),
            (0, l.jsx)("div", {
                className: u.betaTag,
                children: (0, l.jsx)(o.Z, {}),
            }),
            (0, l.jsx)(a.E1j, {
                autoFocus: !0,
                placeholder: s.intl.string(s.t["5h0QOD"]),
                className: u.queryInput,
                query: t,
                onChange: n,
                onClear: () => n(""),
            }),
            (0, l.jsx)(a.PhF, {
                placeholder: s.intl.string(s.t["0XtAW1"]),
                className: u.sortInput,
                options: [
                    {
                        value: "descending",
                        label: s.intl.string(s.t.SCsC5u),
                    },
                    {
                        value: "ascending",
                        label: s.intl.string(s.t.fdx7aG),
                    },
                ],
                isSelected: (e) => e === p,
                select: m,
                serialize: (e) => e,
            }),
            (0, l.jsx)(r.zx, {
                color: r.Tt.TRANSPARENT,
                size: r.zx.Sizes.NONE,
                className: u.settingsButton,
                look: r.zx.Looks.FILLED,
                onClick: () => {
                    (0, i.Z)(c.Z.CLIPS), d();
                },
                children: (0, l.jsx)(a.ewm, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
            (0, l.jsx)(a.olH, {
                className: u.button,
                onClick: d,
            }),
        ],
    });
}
