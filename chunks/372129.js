n.d(t, {
    ZP: () => g,
    _j: () => p,
}),
    n(415506),
    n(539854),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(53281),
    s = n(813197),
    l = n(426642),
    c = n(869783);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e) {
    return new Promise((t, n) => {
        if (null != e) {
            let r = new FileReader();
            (r.onload = (e) => {
                var r;
                "string" == typeof (null == (r = e.target) ? void 0 : r.result)
                    ? t(e.target.result)
                    : n(Error("Failed to read file"));
            }),
                r.readAsDataURL(e);
        }
    });
}
async function _(e) {
    try {
        let t = await f(e),
            n = new Image();
        return (
            (n.src = t),
            await n.decode(),
            {
                image: n,
                dataURI: t,
            }
        );
    } catch (e) {
        throw l.d.WRONG_TYPE;
    }
}
async function p(e, t) {
    let n = [];
    for (let r = 0; r < e.length; r++) {
        let i = e[r];
        try {
            let { image: e, dataURI: r } = await _(i),
                a = i.type === c.m.MP4 ? await t(r, i) : await t(r, i, e);
            null != a &&
                n.push({
                    type: a,
                    filename: i.name,
                });
        } catch (e) {
            n.push({
                type: e,
                filename: i.name,
            });
        }
    }
    n.length > 0 && h(n);
}
let h = (e) => {
        (0, a.ZDy)(async () => {
            let { default: t } = await n.e("68720").then(n.bind(n, 70846));
            return (n) => (0, r.jsx)(t, d({ errors: e }, n));
        });
    },
    m = i.forwardRef((e, t) => {
        let {
                onChange: l,
                multiple: c = !0,
                disabled: u,
                className: f,
                tabIndex: _ = -1,
                "aria-label": h,
                filters: m,
                setLoading: g,
                title: E,
            } = e,
            b = i.useRef(null),
            [y, O] = i.useState(!1);
        i.useEffect(() => {
            y && v();
        }, [y]);
        let v = () => {
                null !== b.current && ((0, a.Mr3)(b.current), (b.current = null));
            },
            I = async (e) => {
                null == g || g(!0), await p(e, l), O(!0), null == g || g(!1);
            },
            T = async (e) => {
                var t, i, o;
                if (
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (null == (t = e.currentTarget) ? void 0 : t.files) == null ||
                        (null == (o = e.currentTarget) || null == (i = o.files) ? void 0 : i.length) === 0)
                )
                    return;
                let s = e.currentTarget.files;
                b.current = await (0, a.ZDy)(async () => {
                    let { default: e } = await n.e("16169").then(n.bind(n, 935333));
                    return (t) => (0, r.jsx)(e, d({ processFiles: () => I(s) }, t));
                });
            };
        return (0, r.jsx)(o.Z, {
            ref: t,
            onChange: T,
            filters: null != m ? m : (0, s.Zj)(),
            multiple: c,
            disabled: u,
            className: f,
            tabIndex: _,
            "aria-label": h,
            title: E,
        });
    });
m.displayName = "ImageInputWithModals";
let g = m;
