var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    s = n(939249),
    a = n(738745);
n.d(
    t,
    {},
    {
        $n: function (e) {
            let {
                onClick: t,
                onContextMenu: n,
                className: i,
                selected: o = !1,
                children: u,
                disabled: c = !1,
                dangerous: d,
                ref: h,
                ...m
            } = e;
            return (0, l.jsx)(s.D, {
                innerRef: h,
                onClick: c ? void 0 : t,
                onContextMenu: c ? void 0 : n,
                "aria-disabled": !!c || void 0,
                className: r()(i, { [a.x6]: !0, [a.wH]: o, [a.r9]: c, [a.lv]: d }),
                ...m,
                children: u,
            });
        },
        Ay: function (e) {
            let { className: t, children: n, ...i } = e;
            return (0, l.jsx)("div", { className: r()(t, a.iE), ...i, children: n });
        },
        wv: function (e) {
            let { className: t } = e;
            return (0, l.jsx)("div", { className: r()(t, a.me) });
        },
    },
);
