t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(481060),
    a = t(911969),
    o = t(970184),
    s = t(293979),
    c = t(234175);
function u(e) {
    let n;
    let { type: t, style: u, label: d, placeholder: m, minLength: f, maxLength: p, required: h, value: x } = e,
        [v, g] = i.useState(null != x ? x : ''),
        {
            state: C,
            executeStateUpdate: _,
            error: b
        } = (0, o.Ee)(
            e,
            null != x
                ? {
                      type: t,
                      value: x
                  }
                : void 0
        ),
        I = (0, s.hz)(e.id);
    i.useEffect(() => {
        (null == C ? void 0 : C.type) === t && g(C.value);
    }, [t, C]);
    let S = {
        name: d,
        value: v,
        placeholder: m,
        minLength: f,
        maxLength: p,
        required: h,
        onChange: (e) => {
            g(e),
                _({
                    type: t,
                    value: e
                });
        },
        autoFocus: I
    };
    switch (u) {
        case a.PT.SMALL:
            n = (0, l.jsx)(r.TextInput, { ...S });
            break;
        case a.PT.PARAGRAPH:
            n = (0, l.jsx)(r.TextArea, {
                autosize: !0,
                ...S
            });
    }
    return (0, l.jsx)(r.FormItem, {
        title: d,
        required: h,
        className: c.formItem,
        error: b,
        children: n
    });
}
