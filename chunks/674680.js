n.d(t, { Z: () => E });
var r = n(54381);
n(473749);
var i = n(692547),
    a = n(780384),
    o = n(481060),
    s = n(410030),
    l = n(889901),
    c = n(955204),
    u = n(181403);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
let p = {
        trophy: i.Z.unsafe_rawColors.PRIMARY_400.css,
        locked: i.Z.unsafe_rawColors.PRIMARY_400.css,
        unlocked: i.Z.unsafe_rawColors.GREEN_330.css,
    },
    _ = {
        trophy: i.Z.unsafe_rawColors.PRIMARY_400.css,
        locked: i.Z.unsafe_rawColors.PRIMARY_400.css,
        unlocked: i.Z.unsafe_rawColors.GREEN_330.css,
    },
    m = 0.8,
    h = 0.4,
    g = 1;
function E(e) {
    var t;
    let { achievementId: n, unlocked: i, size: d = o.EFr.SIZE_40 } = e,
        E = (0, s.ZP)(),
        b = (0, c.oX)(n);
    if (null == b) return null;
    let y = (0, o.UCu)(d),
        { name: O, rarity: v } = b,
        { color: S } = (0, c.F7)(v),
        I = (0, a.wj)(E) ? p : _,
        T = (y.size - y.offset - 2 * y.stroke) * m,
        C = y.size - y.stroke,
        A = {
            width: T * h,
            height: T * h,
        },
        N = {
            width: A.width + g,
            height: A.height + g,
            right: y.stroke + g,
            bottom: y.stroke + g,
            padding: 0,
        };
    return (0, r.jsxs)("div", {
        className: u.container,
        style: {
            width: C,
            height: C,
            padding: y.stroke,
        },
        "aria-label": "".concat(null != (t = O()) ? t : ""),
        children: [
            (0, r.jsx)("div", {
                className: u.trophyIconContainer,
                children: (0, r.jsx)(o.rm8, {
                    size: "custom",
                    color: i ? S : I.trophy,
                    width: T,
                    height: T,
                }),
            }),
            !i &&
                (0, r.jsx)("div", {
                    className: u.lockContainer,
                    style: N,
                    children: (0, r.jsx)(
                        o.mBM,
                        f(
                            {
                                size: "custom",
                                color: I.locked,
                            },
                            A,
                        ),
                    ),
                }),
            i &&
                v === c.EP.LEGENDARY &&
                (0, r.jsx)("div", {
                    className: u.lockContainer,
                    style: N,
                    children: (0, r.jsx)(l.Z, f({ className: u.confettiIcon }, A)),
                }),
        ],
    });
}
E.Sizes = o.EFr;
