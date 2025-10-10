n.d(t, { Z: () => d });
var l = n(951288);
n(647438);
var a = n(755721),
    r = n(481060),
    i = n(547972),
    o = n(703288),
    s = n(332325),
    c = n(388032),
    u = n(105433);
function d(e) {
    let { filterQuery: t, setFilterQuery: n, onClose: d, sortOrder: p, setSortOrder: m } = e;
    return (0, l.jsxs)(r.xBx, {
        className: u.root,
        separator: !1,
        children: [
            (0, l.jsx)(r.AlX, {
                size: "xs",
                color: "currentColor",
                className: u.icon,
            }),
            (0, l.jsx)(r.X6q, {
                className: u.title,
                variant: "heading-xxl/bold",
                children: c.intl.string(c.t.z2jK6e),
            }),
            (0, l.jsx)("div", {
                className: u.betaTag,
                children: (0, l.jsx)(o.Z, {}),
            }),
            (0, l.jsx)(r.E1j, {
                autoFocus: !0,
                placeholder: c.intl.string(c.t["5h0QOD"]),
                query: t,
                onChange: n,
                onClear: () => n(""),
            }),
            (0, l.jsx)(r.PhF, {
                placeholder: c.intl.string(c.t["0XtAW1"]),
                className: u.sortInput,
                options: [
                    {
                        value: "descending",
                        label: c.intl.string(c.t.SCsC5u),
                    },
                    {
                        value: "ascending",
                        label: c.intl.string(c.t.fdx7aG),
                    },
                ],
                isSelected: (e) => e === p,
                select: m,
                serialize: (e) => e,
            }),
            (0, l.jsx)(a.zx, {
                color: a.Tt.TRANSPARENT,
                size: a.zx.Sizes.NONE,
                className: u.settingsButton,
                look: a.zx.Looks.FILLED,
                onClick: () => {
                    (0, i.Z)(s.Z.CLIPS), d();
                },
                children: (0, l.jsx)(r.ewm, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
            (0, l.jsx)(r.olH, {
                className: u.button,
                onClick: d,
            }),
        ],
    });
}
