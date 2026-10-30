e.d(t, { D: () => l });
var i = e(477900),
    a = e(582128),
    n = e(62617);
let c =
    "https://cdn.discordapp.com/assets/content/0fd43f7e4e4408e8dcd461685e82ba9be4aef3381402dd1b8dc3fcf20e42d8bb.png";
var d = e(562915);
let r = `${c} 1x, https://cdn.discordapp.com/assets/content/888ae448a91481e664a9b5edb253618c7349921eba00b0aae5362ecfd14775a3.png 2x, ${d.A} 3x`;
function l(s) {
    let { alt: t, ariaLabel: e, ariaHidden: d, role: l, width: o, height: x, className: h, style: m } = s,
        p = a.useMemo(
            () => (0, n.H)({ width: o, height: x, intrinsicWidth: 288, intrinsicHeight: 192, style: m }),
            [o, x, m],
        );
    return (0, i.jsx)("img", {
        style: p,
        src: c,
        srcSet: r,
        className: (0, n.Z)(h),
        alt: t,
        "aria-label": e,
        "aria-hidden": d,
        role: l ?? "img",
    });
}
