t.d(e, { D: () => l });
var i = t(477900),
    a = t(582128),
    n = t(62617);
let c =
    "https://cdn.discordapp.com/assets/content/0fd43f7e4e4408e8dcd461685e82ba9be4aef3381402dd1b8dc3fcf20e42d8bb.png";
var d = t(562915);
let r = `${c} 1x, https://cdn.discordapp.com/assets/content/888ae448a91481e664a9b5edb253618c7349921eba00b0aae5362ecfd14775a3.png 2x, ${d.A} 3x`;
function l(s) {
    let { alt: e, ariaLabel: t, ariaHidden: d, role: l, width: o, height: h, className: x, style: m } = s,
        p = a.useMemo(
            () => (0, n.H)({ width: o, height: h, intrinsicWidth: 288, intrinsicHeight: 192, style: m }),
            [o, h, m],
        );
    return (0, i.jsx)("img", {
        style: p,
        src: c,
        srcSet: r,
        className: (0, n.Z)(x),
        alt: e,
        "aria-label": t,
        "aria-hidden": d,
        role: l ?? "img",
    });
}
