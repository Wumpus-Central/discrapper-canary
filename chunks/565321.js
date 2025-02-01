t.d(n, { Z: () => u }), t(47120);
var i = t(200651),
    l = t(192379),
    s = t(481060),
    a = t(881052),
    r = t(484455),
    o = t(592286),
    c = t(388032),
    d = t(31619);
let u = function (e) {
    let { guildId: n, onSave: t, formDescription: u, disable: x } = e,
        [m, h] = l.useState(null),
        [f, v] = l.useState(u),
        g = l.useRef(!1),
        j = l.useRef(!1);
    l.useEffect(
        () => () => {
            j.current = !0;
        },
        []
    );
    let C = l.useCallback(async () => {
        if (!g.current) {
            h(null);
            try {
                await t(n, f);
            } catch (e) {
                if (j.current) return;
                h(new a.Hx(e).getAnyErrorMessage());
            } finally {
                if (j.current) return;
                g.current = !1;
            }
        }
    }, [f, n, t]);
    return (0, i.jsxs)(r.Z, {
        title: c.intl.string(c.t.aDJAfn),
        children: [
            (0, i.jsx)(s.Kx8, {
                className: d.fieldBackground,
                maxLength: o.Us,
                value: null != f ? f : '',
                placeholder: c.intl.string(c.t.AJfv3d),
                onChange: (e) => {
                    v(e);
                },
                onBlur: C,
                autosize: !0,
                disabled: x
            }),
            null != m && '' !== m
                ? (0, i.jsx)(s.Text, {
                      className: d.errorText,
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: m
                  })
                : null
        ]
    });
};
