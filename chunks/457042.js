(r.d(e, {
    ParagraphFormFieldModal: () => g,
    TextInputFormFieldModal: () => b
}),
    r(953529),
    r(388685),
    r(704826),
    r(35282),
    r(781311));
var n = r(255367),
    i = r(73800),
    o = r(481060),
    a = r(881052),
    l = r(246364),
    c = r(915509),
    s = r(592286),
    u = r(388032);
function d(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable;
                })
            )),
            n.forEach(function (e) {
                var n;
                ((n = r[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = n));
            }));
    }
    return t;
}
function p(t) {
    var e, r, l;
    let { type: p, title: b, description: g, field: y, onSave: _, onClose: f } = t,
        [m, O] = i.useState(null != (e = null == y ? void 0 : y.label) ? e : ''),
        [j, x] = i.useState(null),
        h = async () => {
            null != j && x(null);
            let t = m.trim();
            if ('' === t) return void x(u.intl.string(u.t['G+TI4+']));
            try {
                (await _({
                    field_type: p,
                    label: t,
                    required: !0
                }),
                    f());
            } catch (t) {
                x(new a.Hx(t).getAnyErrorMessage());
            }
        };
    return (0, n.jsx)(
        c.Z,
        ((r = d({}, t)),
        (l = l =
            {
                errorText: j,
                title: b,
                description: g,
                onConfirm: h,
                onCancel: f,
                children: (0, n.jsx)(o.oil, {
                    onChange: (t) => {
                        null != j && x(null);
                        let e = t.replace(/(\r\n|\n|\r)/g, ' ');
                        (e.length > s.XN && (e = e.slice(0, s.XN)), O(e));
                    },
                    placeholder: u.intl.string(u.t.fqVmbG),
                    value: m,
                    onKeyDown: (t) => 'Enter' === t.key && h()
                })
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
        r)
    );
}
function b(t) {
    return (0, n.jsx)(
        p,
        d(
            {
                title: u.intl.string(u.t.w6Q9w8),
                description: u.intl.string(u.t['A6M+qq']),
                type: l.QJ.TEXT_INPUT
            },
            t
        )
    );
}
function g(t) {
    return (0, n.jsx)(
        p,
        d(
            {
                title: u.intl.string(u.t.gG0JBA),
                description: u.intl.string(u.t.SMX0iY),
                type: l.QJ.PARAGRAPH
            },
            t
        )
    );
}
