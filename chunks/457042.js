n.d(e, {
    ParagraphFormFieldModal: () => _,
    TextInputFormFieldModal: () => p
}),
    n(953529),
    n(388685),
    n(704826),
    n(35282),
    n(781311);
var r = n(255367),
    o = n(73800),
    i = n(481060),
    a = n(881052),
    l = n(246364),
    c = n(915509),
    s = n(592286),
    d = n(388032);
function u(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            r.forEach(function (e) {
                var r;
                (r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = r);
            });
    }
    return t;
}
function b(t) {
    var e, n, l;
    let { type: b, title: p, description: _, field: g, onSave: m, onClose: y } = t,
        [x, h] = o.useState(null != (e = null == g ? void 0 : g.label) ? e : ''),
        [f, j] = o.useState(null),
        C = async () => {
            null != f && j(null);
            let t = x.trim();
            if ('' === t) return void j(d.intl.string(d.t['G+TI4+']));
            try {
                await m({
                    field_type: b,
                    label: t,
                    required: !0
                }),
                    y();
            } catch (t) {
                j(new a.Hx(t).getAnyErrorMessage());
            }
        };
    return (0, r.jsx)(
        c.Z,
        ((n = u({}, t)),
        (l = l =
            {
                errorText: f,
                title: p,
                description: _,
                onConfirm: C,
                onCancel: y,
                children: (0, r.jsx)(i.oil, {
                    onChange: (t) => {
                        null != f && j(null);
                        let e = t.replace(/(\r\n|\n|\r)/g, ' ');
                        e.length > s.XN && (e = e.slice(0, s.XN)), h(e);
                    },
                    placeholder: d.intl.string(d.t.fqVmbG),
                    value: x,
                    onKeyDown: (t) => 'Enter' === t.key && C()
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
function p(t) {
    return (0, r.jsx)(
        b,
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
function _(t) {
    return (0, r.jsx)(
        b,
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
