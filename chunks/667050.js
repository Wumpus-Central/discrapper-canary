n.d(t, {
    Bf: () => k,
    Br: () => V,
    fr: () => B,
    m4: () => L,
    oS: () => G,
    tm: () => U,
});
var r = n(735438),
    i = n.n(r),
    a = n(791454),
    s = n(54991),
    o = n(149834),
    l = n(372889),
    c = n(764724),
    u = n(535275),
    d = n(228158),
    f = n(980883),
    p = n(577436),
    _ = n(502561),
    h = n(71442),
    m = n(213961),
    g = n(942344),
    E = n(640319),
    b = n(24902),
    y = n(649685),
    O = n(343076),
    A = n(148743),
    v = n(930658),
    S = n(843505),
    I = n(751212),
    T = n(596963),
    C = n(7584),
    N = n(776231),
    R = n(287809),
    w = n(486020),
    P = n(690521),
    D = n(194486),
    x = n(985018);
let L = {
        start: 10,
        end: 15,
    },
    j = [a],
    M = [s, o, l, c, u, d, f, p, _, h, m, g, E, b, y, O, A, v, S, I, T],
    k = {
        [D.B.BASIC]: j,
        [D.B.PREMIUM]: M,
    },
    U = i().memoize(
        (e) =>
            new Promise((t) => {
                let n = new Image();
                (n.src = e),
                    (n.crossOrigin = "Anonymous"),
                    (n.onload = () => {
                        let r = 32 * (0, N.mZ)();
                        if (n.width === r && n.height === r) t(e);
                        else {
                            var i;
                            let e = document.createElement("canvas");
                            (e.width = r),
                                (e.height = r),
                                null == (i = e.getContext("2d")) || i.drawImage(n, 0, 0),
                                t(e.toDataURL("image/png"));
                        }
                    });
            }),
    ),
    G = (e, t) => {
        let n = k[e];
        if (null != t && e === D.B.PREMIUM) {
            let e = t.end + 1;
            return Math.floor(Math.random() * (t.start - e) + e);
        }
        return Math.floor(Math.random() * n.length);
    };
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32;
    if (null != e.id) {
        var n;
        return w.Ay.getEmojiURL({
            id: e.id,
            animated: null != (n = e.animated) && n,
            size: t,
        });
    }
    let r = C.Ay.convertSurrogateToName(e.name, !1),
        i = C.Ay.getByName(r);
    return null != i ? P.Ay.getURL(i.surrogates) : "";
}
function F(e, t) {
    return i()(e)
        .map((e) => {
            var n;
            return null != (n = e[t]) ? n : null;
        })
        .filter((e) => null != e)
        .uniq()
        .value();
}
function B(e) {
    var t, n, r, i, a, s;
    if (e.length < 1) return "";
    let o = F(e, "userId"),
        l = F(e, "emojiName"),
        c = l.length < 2 ? (null != (t = null == l ? void 0 : l[0]) ? t : "") : l.join(", ");
    return o.length < 1
        ? ""
        : 1 === o.length
          ? x.intl.formatToPlainString(x.t.yZYxzF, {
                firstUsername: null == (n = R.default.getUser(o[0])) ? void 0 : n.username,
                emojiNames: c,
            })
          : 2 === o.length
            ? x.intl.formatToPlainString(x.t["8rmtbd"], {
                  firstUsername: null == (r = R.default.getUser(o[0])) ? void 0 : r.username,
                  secondUsername: null == (i = R.default.getUser(o[1])) ? void 0 : i.username,
                  emojiNames: c,
              })
            : x.intl.formatToPlainString(x.t["/okjv0"], {
                  firstUsername: null == (a = R.default.getUser(o[0])) ? void 0 : a.username,
                  secondUsername: null == (s = R.default.getUser(o[1])) ? void 0 : s.username,
                  count: o.length - 2,
                  emojiNames: c,
              });
}
