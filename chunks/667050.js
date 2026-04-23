"use strict";
n.d(t, { Bf: () => x, Br: () => G, fr: () => V, m4: () => P, oS: () => U, tm: () => k });
var r = n(735438),
    i = n.n(r),
    s = n(791454),
    a = n(54991),
    o = n(149834),
    l = n(372889),
    u = n(764724),
    c = n(535275),
    d = n(228158),
    _ = n(980883),
    f = n(577436),
    p = n(502561),
    h = n(71442),
    E = n(213961),
    m = n(942344),
    g = n(640319),
    A = n(24902),
    I = n(649685),
    T = n(343076),
    S = n(148743),
    y = n(930658),
    N = n(843505),
    v = n(751212),
    C = n(596963),
    O = n(7584),
    R = n(776231),
    b = n(287809),
    D = n(486020),
    L = n(690521),
    w = n(194486),
    M = n(985018);
let P = { start: 10, end: 15 },
    x = { [w.B.BASIC]: [s], [w.B.PREMIUM]: [a, o, l, u, c, d, _, f, p, h, E, m, g, A, I, T, S, y, N, v, C] },
    k = i().memoize(
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
    U = (e, t) => {
        let n = x[e];
        if (null != t && e === w.B.PREMIUM) {
            let e = t.end + 1;
            return Math.floor(Math.random() * (t.start - e) + e);
        }
        return Math.floor(Math.random() * n.length);
    };
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32;
    if (null != e.id) return D.Ay.getEmojiURL({ id: e.id, animated: e.animated ?? !1, size: t });
    let n = O.Ay.convertSurrogateToName(e.name, !1),
        r = O.Ay.getByName(n);
    return null != r ? L.Ay.getURL(r.surrogates) : "";
}
function F(e, t) {
    return i()(e)
        .map((e) => e[t] ?? null)
        .filter((e) => null != e)
        .uniq()
        .value();
}
function V(e) {
    if (e.length < 1) return "";
    let t = F(e, "userId"),
        n = F(e, "emojiName"),
        r = n.length < 2 ? (n?.[0] ?? "") : n.join(", ");
    return t.length < 1
        ? ""
        : 1 === t.length
          ? M.intl.formatToPlainString(M.t.yZYxzF, { firstUsername: b.default.getUser(t[0])?.username, emojiNames: r })
          : 2 === t.length
            ? M.intl.formatToPlainString(M.t["8rmtbd"], {
                  firstUsername: b.default.getUser(t[0])?.username,
                  secondUsername: b.default.getUser(t[1])?.username,
                  emojiNames: r,
              })
            : M.intl.formatToPlainString(M.t["/okjv0"], {
                  firstUsername: b.default.getUser(t[0])?.username,
                  secondUsername: b.default.getUser(t[1])?.username,
                  count: t.length - 2,
                  emojiNames: r,
              });
}
