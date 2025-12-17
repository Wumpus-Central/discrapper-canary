n.d(t, { A: () => c });
var r = n(54381),
    i = n(120356),
    a = n.n(i),
    o = n(777207),
    s = n(282029);
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
    return (0, r.jsx)(o.x, {
        variant: "eyebrow",
        className: a()(s.chip, s[i]),
        children: t,
    });
}
