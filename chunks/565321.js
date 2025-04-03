n.d(t, { Z: () => d }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(481060),
    c = n(881052),
    s = n(484455),
    a = n(592286),
    l = n(388032),
    u = n(664305);
let d = function (e) {
    let { guildId: t, onSave: n, formDescription: d, disable: f } = e,
        [p, b] = i.useState(null),
        [j, y] = i.useState(d),
        m = i.useRef(!1),
        g = i.useRef(!1);
    i.useEffect(
        () => () => {
            g.current = !0;
        },
        []
    );
    let O = i.useCallback(async () => {
        if (!m.current) {
            b(null);
            try {
                await n(t, j);
            } catch (e) {
                if (g.current) return;
                b(new c.Hx(e).getAnyErrorMessage());
            } finally {
                if (g.current) return;
                m.current = !1;
            }
        }
    }, [j, t, n]);
    return (0, r.jsxs)(s.Z, {
        title: l.NW.string(l.t.aDJAfn),
        children: [
            (0, r.jsx)(o.Kx8, {
                className: u.fieldBackground,
                maxLength: a.Us,
                value: null != j ? j : '',
                placeholder: l.NW.string(l.t.AJfv3d),
                onChange: (e) => {
                    y(e);
                },
                onBlur: O,
                autosize: !0,
                disabled: f
            }),
            null != p && '' !== p
                ? (0, r.jsx)(o.Text, {
                      className: u.errorText,
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: p
                  })
                : null
        ]
    });
};
