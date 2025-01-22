r.d(n, {
    l: function () {
        return o;
    }
});
var i = r(661763),
    a = r(921336);
function o(e, n) {
    let r = (0, i.zL)(e, { labelable: !0 }),
        { hoverProps: o } = (0, a.XI)({
            onHoverStart: () => (null == n ? void 0 : n.open(!0)),
            onHoverEnd: () => (null == n ? void 0 : n.close())
        });
    return { tooltipProps: (0, i.dG)(r, o, { role: 'tooltip' }) };
}
r(192379);
