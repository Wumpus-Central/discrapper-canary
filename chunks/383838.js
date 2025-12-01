n.d(t, { To: () => h });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(49800),
    s = n(600164),
    l = n(534542),
    c = n(512983),
    u = n(636094);
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
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
o.Z.Types;
let m = "right";
function h(e) {
    let t,
        n,
        {
            type: i = o.Z.Types.DANGER,
            imageData: d,
            button: _,
            className: h,
            iconClassName: g,
            title: E,
            body: b,
            style: y,
            align: O = s.Z.Align.START,
        } = e,
        v = s.Z.Direction.HORIZONTAL;
    if (null != d) {
        let { position: e } = d,
            n = p(d, ["position"]);
        (t = (0, r.jsx)(s.Z.Child, {
            grow: 0,
            shrink: 0,
            children: (0, r.jsx)(
                "img",
                f(
                    {
                        alt: "",
                        className: a()(u.icon, g),
                    },
                    n,
                ),
            ),
        })),
            e === m && (v = s.Z.Direction.HORIZONTAL_REVERSE);
    } else null != _ && (n = _);
    let S = !0;
    return (
        i === o.Z.Types.PRIMARY && (S = !1),
        (0, r.jsx)(o.Z, {
            className: a()(u.formNotice, h),
            type: i,
            style: y,
            children: (0, r.jsxs)(s.Z, {
                direction: v,
                align: O,
                children: [
                    t,
                    (0, r.jsxs)(s.Z.Child, {
                        children: [
                            null != E && "" !== E
                                ? (0, r.jsx)(c.v, {
                                      className: a()(u.formNoticeTitle, { [u.whiteText]: S }),
                                      children: E,
                                  })
                                : null,
                            (0, r.jsx)(l.R, {
                                className: a()(u.formNoticeBody, { [u.whiteText]: S }),
                                children: b,
                            }),
                            n,
                        ],
                    }),
                ],
            }),
        })
    );
}
h.Types = o.Z.Types;
