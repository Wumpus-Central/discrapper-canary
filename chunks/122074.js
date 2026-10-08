t.d(e, { D: () => r });
var i = t(477900),
    a = t(582128),
    n = t(62617);
let d =
        "https://cdn.discordapp.com/assets/content/0fd43f7e4e4408e8dcd461685e82ba9be4aef3381402dd1b8dc3fcf20e42d8bb.png",
    c = `${d} 1x, https://cdn.discordapp.com/assets/content/888ae448a91481e664a9b5edb253618c7349921eba00b0aae5362ecfd14775a3.png 2x, https://cdn.discordapp.com/assets/content/d97070662449989da5c48338d6e7002cfcd25d966ded2e0e21889c2b3a655e38.png 3x`;
function r(s) {
    let { alt: e, ariaLabel: t, ariaHidden: r, role: l, width: o, height: x, className: h, style: m } = s,
        p = a.useMemo(
            () => (0, n.H)({ width: o, height: x, intrinsicWidth: 288, intrinsicHeight: 192, style: m }),
            [o, x, m],
        );
    return (0, i.jsx)("img", {
        style: p,
        src: d,
        srcSet: c,
        className: (0, n.Z)(h),
        alt: e,
        "aria-label": t,
        "aria-hidden": r,
        role: l ?? "img",
    });
}
