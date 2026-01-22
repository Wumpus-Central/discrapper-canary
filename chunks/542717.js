r.d(t, {
    ParagraphFormFieldModal: () => p,
    TextInputFormFieldModal: () => d,
}),
    r(228524),
    r(896048),
    r(747238),
    r(812715),
    r(733351);
var n = r(627968),
    i = r(64700),
    a = r(397927),
    c = r(198982),
    l = r(513461),
    o = r(242273),
    s = r(260197),
    b = r(985018);

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}

function u(e) {
    var t, r, l;
    let { type: u, title: d, description: p, field: y, onSave: g, onClose: O } = e,
        [j, h] = i.useState(null != (t = null == y ? void 0 : y.label) ? t : ""),
        [w, v] = i.useState(null),
        P = async () => {
            null != w && v(null);
            let e = j.trim();
            if ("" === e) return void v(b.intl.string(b.t["G+TI44"]));
            try {
                await g({
                    field_type: u,
                    label: e,
                    required: !0,
                }),
                    O();
            } catch (e) {
                v(new c.LG(e).getAnyErrorMessage());
            }
        };
    return (0, n.jsx)(
        o.A,
        ((r = f({}, e)),
        (l = l =
            {
                errorText: w,
                title: d,
                description: p,
                onConfirm: P,
                onCancel: O,
                children: (0, n.jsx)(a.ksK, {
                    onChange: (e) => {
                        null != w && v(null);
                        let t = e.replace(/(\r\n|\n|\r)/g, " ");
                        t.length > s.Ty && (t = t.slice(0, s.Ty)), h(t);
                    },
                    placeholder: b.intl.string(b.t.fqVmbL),
                    value: j,
                    onKeyDown: (e) => "Enter" === e.key && P(),
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(l)).forEach(function (e) {
                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
              }),
        r),
    );
}

function d(e) {
    return (0, n.jsx)(
        u,
        f(
            {
                title: b.intl.string(b.t.w6Q9wz),
                description: b.intl.string(b.t["A6M+qv"]),
                type: l.rX.TEXT_INPUT,
            },
            e,
        ),
    );
}

function p(e) {
    return (0, n.jsx)(
        u,
        f(
            {
                title: b.intl.string(b.t.gG0JBN),
                description: b.intl.string(b.t.SMX0ia),
                type: l.rX.PARAGRAPH,
            },
            e,
        ),
    );
}
