n.d(t, { Z: () => b });
var r = n(54381);
n(473749);
var i = n(780384),
    a = n(481060),
    o = n(410030),
    s = n(44315),
    l = n(889901),
    c = n(955204),
    u = n(231338),
    d = n(395786);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
let p = {
        trophy: u.Il.PRIMARY_400,
        locked: u.Il.PRIMARY_400,
        unlocked: u.Il.GREEN_330,
    },
    h = {
        trophy: u.Il.PRIMARY_400,
        locked: u.Il.PRIMARY_400,
        unlocked: u.Il.GREEN_330,
    },
    m = 0.8,
    g = 0.4,
    E = 1;
function b(e) {
    var t;
    let { achievementId: n, unlocked: u, size: f = a.EFr.SIZE_40 } = e,
        b = (0, o.ZP)(),
        y = (0, c.oX)(n);
    if (null == y) return null;
    let O = (0, a.UCu)(f),
        { name: v, rarity: I } = y,
        { color: T } = (0, c.F7)(I),
        S = (0, i.wj)(b) ? p : h,
        A = (O.size - O.offset - 2 * O.stroke) * m,
        C = O.size - O.stroke,
        N = {
            width: A * g,
            height: A * g,
        },
        R = {
            width: N.width + E,
            height: N.height + E,
            right: O.stroke + E,
            bottom: O.stroke + E,
            padding: 0,
        };
    return (0, r.jsxs)("div", {
        className: d.container,
        style: {
            width: C,
            height: C,
            padding: O.stroke,
        },
        "aria-label": "".concat(null != (t = v()) ? t : ""),
        children: [
            (0, r.jsx)("div", {
                className: d.trophyIconContainer,
                children: (0, r.jsx)(a.rm8, {
                    size: "custom",
                    color: u ? T : (0, s.Lq)(S.trophy),
                    width: A,
                    height: A,
                }),
            }),
            !u &&
                (0, r.jsx)("div", {
                    className: d.lockContainer,
                    style: R,
                    children: (0, r.jsx)(
                        a.mBM,
                        _(
                            {
                                size: "custom",
                                color: (0, s.Lq)(S.locked),
                            },
                            N,
                        ),
                    ),
                }),
            u &&
                I === c.EP.LEGENDARY &&
                (0, r.jsx)("div", {
                    className: d.lockContainer,
                    style: R,
                    children: (0, r.jsx)(l.Z, _({ className: d.confettiIcon }, N)),
                }),
        ],
    });
}
b.Sizes = a.EFr;
