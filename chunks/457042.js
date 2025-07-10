(n.d(e, {
    ParagraphFormFieldModal: () => g,
    TextInputFormFieldModal: () => b
}),
    n(953529),
    n(388685),
    n(704826),
    n(35282),
    n(781311));
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(881052),
    l = n(246364),
    c = n(915509),
    s = n(592286),
    d = n(388032);
function u(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            r.forEach(function (e) {
                var r;
                ((r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = r));
            }));
    }
    return t;
}
function p(t) {
    var e, n, l;
    let { type: p, title: b, description: g, field: m, onSave: y, onClose: _ } = t,
        [x, f] = i.useState(null != (e = null == m ? void 0 : m.label) ? e : ''),
        [h, j] = i.useState(null),
        O = async () => {
            null != h && j(null);
            let t = x.trim();
            if ('' === t) return void j(d.intl.string(d.t['G+TI4+']));
            try {
                (await y({
                    field_type: p,
                    label: t,
                    required: !0
                }),
                    _());
            } catch (t) {
                j(new o.Hx(t).getAnyErrorMessage());
            }
        };
    return (0, r.jsx)(
        c.Z,
        ((n = u({}, t)),
        (l = l =
            {
                errorText: h,
                title: b,
                description: g,
                onConfirm: O,
                onCancel: _,
                children: (0, r.jsx)(a.oil, {
                    onChange: (t) => {
                        null != h && j(null);
                        let e = t.replace(/(\r\n|\n|\r)/g, ' ');
                        (e.length > s.XN && (e = e.slice(0, s.XN)), f(e));
                    },
                    placeholder: d.intl.string(d.t.fqVmbG),
                    value: x,
                    onKeyDown: (t) => 'Enter' === t.key && O()
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(l)).forEach(function (t) {
                  Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(l, t));
              }),
        n)
    );
}
function b(t) {
    return (0, r.jsx)(
        p,
        u(
            {
                title: d.intl.string(d.t.w6Q9w8),
                description: d.intl.string(d.t['A6M+qq']),
                type: l.QJ.TEXT_INPUT
            },
            t
        )
    );
}
function g(t) {
    return (0, r.jsx)(
        p,
        u(
            {
                title: d.intl.string(d.t.gG0JBA),
                description: d.intl.string(d.t.SMX0iY),
                type: l.QJ.PARAGRAPH
            },
            t
        )
    );
}
