"use strict";
n.d(t, { Bf: () => U, Br: () => F, fr: () => j, m4: () => P, oS: () => V, tm: () => G });
var r = n(735438),
    i = n.n(r),
    a = n(791454),
    s = n(54991),
    o = n(149834),
    l = n(372889),
    u = n(764724),
    c = n(535275),
    d = n(228158),
    _ = n(980883),
    f = n(577436),
    p = n(502561),
    h = n(71442),
    m = n(213961),
    g = n(942344),
    E = n(640319),
    A = n(24902),
    I = n(649685),
    T = n(343076),
    y = n(148743),
    S = n(930658),
    v = n(843505),
    C = n(751212),
    b = n(596963),
    N = n(7584),
    R = n(776231),
    O = n(287809),
    D = n(486020),
    L = n(690521),
    w = n(194486),
    x = n(985018);
let P = { start: 10, end: 15 },
    M = [a],
    k = [s, o, l, u, c, d, _, f, p, h, m, g, E, A, I, T, y, S, v, C, b],
    U = { [w.B.BASIC]: M, [w.B.PREMIUM]: k },
    G = i().memoize(
        (e) =>
            new Promise((t) => {
                let n = new Image();
                (n.src = e),
                    (n.crossOrigin = "Anonymous"),
                    (n.onload = () => {
                        let r = 32 * (0, R.mZ)();
                        if (n.width === r && n.height === r) t(e);
                        else {
                            let e = document.createElement("canvas");
                            (e.width = r),
                                (e.height = r),
                                e.getContext("2d")?.drawImage(n, 0, 0),
                                t(e.toDataURL("image/png"));
                        }
                    });
            }),
    ),
    V = (e, t) => {
        let n = U[e];
        if (null != t && e === w.B.PREMIUM) {
            let e = t.end + 1;
            return Math.floor(Math.random() * (t.start - e) + e);
        }
        return Math.floor(Math.random() * n.length);
    };
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32;
    if (null != e.id) return D.Ay.getEmojiURL({ id: e.id, animated: e.animated ?? !1, size: t });
    let n = N.Ay.convertSurrogateToName(e.name, !1),
        r = N.Ay.getByName(n);
    return null != r ? L.Ay.getURL(r.surrogates) : "";
}
function B(e, t) {
    return i()(e)
        .map((e) => e[t] ?? null)
        .filter((e) => null != e)
        .uniq()
        .value();
}
function j(e) {
    if (e.length < 1) return "";
    let t = B(e, "userId"),
        n = B(e, "emojiName"),
        r = n.length < 2 ? (n?.[0] ?? "") : n.join(", ");
    return t.length < 1
        ? ""
        : 1 === t.length
          ? x.intl.formatToPlainString(x.t.yZYxzF, { firstUsername: O.default.getUser(t[0])?.username, emojiNames: r })
          : 2 === t.length
            ? x.intl.formatToPlainString(x.t["8rmtbd"], {
                  firstUsername: O.default.getUser(t[0])?.username,
                  secondUsername: O.default.getUser(t[1])?.username,
                  emojiNames: r,
              })
            : x.intl.formatToPlainString(x.t["/okjv0"], {
                  firstUsername: O.default.getUser(t[0])?.username,
                  secondUsername: O.default.getUser(t[1])?.username,
                  count: t.length - 2,
                  emojiNames: r,
              });
}
