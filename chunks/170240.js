(i.r(e), i.d(e, { default: () => u }));
var a = i(477900),
    t = i(582128),
    c = i(62617);
function d(s) {
    let { alt: e, ariaLabel: i, ariaHidden: d, role: l, width: r, height: n, className: h, style: u } = s,
        m = t.useMemo(
            () => (0, c.H)({ width: r, height: n, intrinsicWidth: 288, intrinsicHeight: 162, style: u }),
            [r, n, u],
        );
    return (0, a.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/97efcab305acfef6df77283013b078805c8f158502ab8be2c3261f6fe609e614.svg",
        className: (0, c.Z)(h),
        alt: e,
        "aria-label": i,
        "aria-hidden": d,
        role: l ?? "img",
    });
}
var l = i(573435),
    r = i(548118),
    n = i(652537);
let h = r.Ay.Sizes.LARGER;
function u(s) {
    let { guild: e } = s;
    return (0, a.jsxs)("div", {
        className: n.kL,
        children: [
            (0, a.jsx)(d, { alt: "", ariaHidden: !0, width: "100%", className: n.bm }),
            (0, a.jsx)("div", {
                className: n.lM,
                children: (0, a.jsx)(l.Ay, {
                    mask: l.Ay.Masks.SQUIRCLE,
                    width: r.iu[h],
                    height: r.iu[h],
                    className: n.$d,
                    children: (0, a.jsx)(r.Ay, { guild: e, size: h, className: n.$f, "aria-hidden": !0 }),
                }),
            }),
        ],
    });
}
