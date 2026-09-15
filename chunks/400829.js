e.d(t, { D: () => n });
var i = e(477900);
e(582128);
let a =
    "https://cdn.discordapp.com/assets/content/0fd43f7e4e4408e8dcd461685e82ba9be4aef3381402dd1b8dc3fcf20e42d8bb.png";
function n(s) {
    let { alt: t, ariaLabel: e, ariaHidden: n, role: d, width: c = 288, height: r = 192 } = s;
    return (0, i.jsx)("img", {
        style: { width: c, height: r },
        src: a,
        srcSet: `${a} 1x, https://cdn.discordapp.com/assets/content/888ae448a91481e664a9b5edb253618c7349921eba00b0aae5362ecfd14775a3.png 2x`,
        alt: t,
        "aria-label": e,
        "aria-hidden": n,
        role: d ?? "img",
    });
}
