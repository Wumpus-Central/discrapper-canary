n.d(t, {
    Dd: () => h,
    Sw: () => m,
    To: () => g
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(49800),
    s = n(600164),
    l = n(534542),
    c = n(512983),
    u = n(13651);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let h = a.Z.Types,
    m = {
        LEFT: 'left',
        RIGHT: 'right'
    };
function g(e) {
    let t,
        n,
        { type: i = a.Z.Types.DANGER, imageData: d, button: p, className: h, iconClassName: g, title: E, body: b, style: y, align: v = s.Z.Align.START } = e,
        O = s.Z.Direction.HORIZONTAL;
    if (null != d) {
        let { position: e } = d,
            n = _(d, ['position']);
        (t = (0, r.jsx)(s.Z.Child, {
            grow: 0,
            shrink: 0,
            children: (0, r.jsx)(
                'img',
                f(
                    {
                        alt: '',
                        className: o()(u.icon, g)
                    },
                    n
                )
            )
        })),
            e === m.RIGHT && (O = s.Z.Direction.HORIZONTAL_REVERSE);
    } else null != p && (n = p);
    let I = !0;
    return (
        i === a.Z.Types.PRIMARY && (I = !1),
        (0, r.jsx)(a.Z, {
            className: o()(u.formNotice, h),
            type: i,
            style: y,
            children: (0, r.jsxs)(s.Z, {
                direction: O,
                align: v,
                children: [
                    t,
                    (0, r.jsxs)(s.Z.Child, {
                        children: [
                            null != E && '' !== E
                                ? (0, r.jsx)(c.v, {
                                      tag: c.R.H5,
                                      className: o()(u.formNoticeTitle, { [u.whiteText]: I }),
                                      faded: !0,
                                      children: E
                                  })
                                : null,
                            (0, r.jsx)(l.R, {
                                className: o()(u.formNoticeBody, { [u.whiteText]: I }),
                                children: b
                            }),
                            n
                        ]
                    })
                ]
            })
        })
    );
}
g.Types = a.Z.Types;
