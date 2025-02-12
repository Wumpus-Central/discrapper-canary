l.d(n, { Z: () => c }), l(47120);
var t = l(200651),
    i = l(192379),
    r = l(481060),
    a = l(911969),
    s = l(970184),
    o = l(293979),
    u = l(709514);
function c(e) {
    let n;
    let { type: l, style: c, label: d, placeholder: m, minLength: h, maxLength: p, required: x, value: v } = e,
        [f, C] = i.useState(null != v ? v : ''),
        {
            state: g,
            executeStateUpdate: j,
            error: N
        } = (0, s.Ee)(
            e,
            null != v
                ? {
                      type: l,
                      value: v
                  }
                : void 0
        ),
        S = (0, o.hz)(e.id);
    i.useEffect(() => {
        (null == g ? void 0 : g.type) === l && C(g.value);
    }, [l, g]);
    let E = {
        name: d,
        value: f,
        placeholder: m,
        minLength: h,
        maxLength: p,
        required: x,
        onChange: (e) => {
            C(e),
                j({
                    type: l,
                    value: e
                });
        },
        autoFocus: S
    };
    switch (c) {
        case a.PT.SMALL:
            n = (0, t.jsx)(r.oil, { ...E });
            break;
        case a.PT.PARAGRAPH:
            n = (0, t.jsx)(r.Kx8, {
                autosize: !0,
                ...E
            });
    }
    return (0, t.jsx)(r.xJW, {
        title: d,
        required: x,
        className: u.formItem,
        error: N,
        children: n
    });
}
