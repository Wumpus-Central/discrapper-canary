n.d(t, {
    v: () => c,
});
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(834730),
    o = n(293994);
let l = {
    blurpleLight: "blurple-light",
    blurpleMedium: "blurple-medium",
    blurpleDark: "blurple-dark",
    purpleLight: "purple-light",
    purpleMedium: "purple-medium",
    purpleDark: "purple-dark",
    greenLight: "green-light",
    greenMedium: "green-medium",
    greenDark: "green-dark",
    orangeLight: "orange-light",
    orangeMedium: "orange-medium",
    orangeDark: "orange-dark",
    yellowLight: "yellow-light",
    yellowMedium: "yellow-medium",
    yellowDark: "yellow-dark",
    pinkLight: "pink-light",
    pinkMedium: "pink-medium",
    pinkDark: "pink-dark",
    redLight: "red-light",
    redMedium: "red-medium",
    redDark: "red-dark",
    grayLight: "gray-light",
    grayMedium: "gray-medium",
    grayDark: "gray-dark",
};

function c(e) {
    let { text: t, variant: n = "grayLight" } = e,
        i = l[n];
    return (0, r.jsx)(s.E, {
        variant: "eyebrow",
        className: a()(o.chip, o[i]),
        children: t,
    });
}
