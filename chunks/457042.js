r.d(e, {
    ParagraphFormFieldModal: () => g,
    TextInputFormFieldModal: () => p,
}),
    r(953529),
    r(388685),
    r(704826),
    r(35282),
    r(781311);
var n = r(54381),
    a = r(473749),
    i = r(481060),
    o = r(881052),
    l = r(246364),
    c = r(915509),
    s = r(592286),
    b = r(388032);
function u(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable;
                }),
            )),
            n.forEach(function (e) {
                var n;
                (n = r[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = n);
            });
    }
    return t;
}
function d(t) {
    var e, r, l;
    let { type: d, title: p, description: g, field: y, onSave: f, onClose: m } = t,
        [O, j] = a.useState(null != (e = null == y ? void 0 : y.label) ? e : ""),
        [h, x] = a.useState(null),
        v = async () => {
            null != h && x(null);
            let t = O.trim();
            if ("" === t) return void x(b.intl.string(b.t["G+TI44"]));
            try {
                await f({
                    field_type: d,
                    label: t,
                    required: !0,
                }),
                    m();
            } catch (t) {
                x(new o.Hx(t).getAnyErrorMessage());
            }
        };
    return (0, n.jsx)(
        c.Z,
        ((r = u({}, t)),
        (l = l =
            {
                errorText: h,
                title: p,
                description: g,
                onConfirm: v,
                onCancel: m,
                children: (0, n.jsx)(i.oil, {
                    onChange: (t) => {
                        null != h && x(null);
                        let e = t.replace(/(\r\n|\n|\r)/g, " ");
                        e.length > s.XN && (e = e.slice(0, s.XN)), j(e);
                    },
                    placeholder: b.intl.string(b.t.fqVmbL),
                    value: O,
                    onKeyDown: (t) => "Enter" === t.key && v(),
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
            : (function (t, e) {
                  var r = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(t);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(l)).forEach(function (t) {
                  Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(l, t));
              }),
        r),
    );
}
function p(t) {
    return (0, n.jsx)(
        d,
        u(
            {
                title: b.intl.string(b.t.w6Q9wz),
                description: b.intl.string(b.t["A6M+qv"]),
                type: l.QJ.TEXT_INPUT,
            },
            t,
        ),
    );
}
function g(t) {
    return (0, n.jsx)(
        d,
        u(
            {
                title: b.intl.string(b.t.gG0JBN),
                description: b.intl.string(b.t.SMX0ia),
                type: l.QJ.PARAGRAPH,
            },
            t,
        ),
    );
}
