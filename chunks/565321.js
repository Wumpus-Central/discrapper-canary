n.d(t, { Z: () => u }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(881052),
    l = n(484455),
    o = n(592286),
    c = n(388032),
    d = n(664305);
let u = function (e) {
    let { guildId: t, onSave: n, formDescription: u, disable: m } = e,
        [g, p] = i.useState(null),
        [f, h] = i.useState(u),
        b = i.useRef(!1),
        x = i.useRef(!1);
    i.useEffect(
        () => () => {
            x.current = !0;
        },
        []
    );
    let j = i.useCallback(async () => {
        if (!b.current) {
            p(null);
            try {
                await n(t, f);
            } catch (e) {
                if (x.current) return;
                p(new a.Hx(e).getAnyErrorMessage());
            } finally {
                if (x.current) return;
                b.current = !1;
            }
        }
    }, [f, t, n]);
    return (0, r.jsxs)(l.Z, {
        title: c.NW.string(c.t.aDJAfn),
        children: [
            (0, r.jsx)(s.Kx8, {
                className: d.fieldBackground,
                maxLength: o.Us,
                value: null != f ? f : '',
                placeholder: c.NW.string(c.t.AJfv3d),
                onChange: (e) => {
                    h(e);
                },
                onBlur: j,
                autosize: !0,
                disabled: m
            }),
            null != g && '' !== g
                ? (0, r.jsx)(s.Text, {
                      className: d.errorText,
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: g
                  })
                : null
        ]
    });
};
