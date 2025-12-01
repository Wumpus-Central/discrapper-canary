t.d(n, { b: () => a });
var l = t(54381),
    i = t(336314);
function a(e) {
    let { imageUrl: n } = e;
    return (0, l.jsx)("div", {
        className: i.container,
        children: (0, l.jsx)("div", {
            className: i.blurredBackground,
            style: { backgroundImage: "url(".concat(n, ")") },
        }),
    });
}
