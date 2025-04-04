n.d(t, { Z: () => f }), n(47120), n(230036);
var r = n(200651),
    i = n(192379),
    o = n(793030),
    a = n(993365),
    s = n(481060),
    l = n(489863),
    c = n(388032),
    u = n(340181);
let d = 5;
function f(e) {
    var t;
    let { selectedGuildId: n, selectedChannelId: f, onChannelChange: _, error: p } = e,
        [h, m] = i.useState(null),
        g = i.useRef(!1);
    if (
        (i.useEffect(() => {
            async function e(e) {
                let t = await (0, l.UR)(e);
                n === e &&
                    (t.sort((e, t) => e.name.localeCompare(t.name)),
                    m({
                        guildId: e,
                        channels: t
                    }),
                    (g.current = !0));
            }
            m(null), null == n ? _(null) : e(n);
        }, [_, n]),
        i.useEffect(() => {
            g.current && (null == h ? null != f && _(null) : h.channels.some((e) => e.id === f) || _(null));
        }, [h, _, f, n]),
        null == n)
    )
        return null;
    let E =
        null == h || h.guildId !== n
            ? []
            : (null != (t = null == h ? void 0 : h.channels) ? t : []).map((e) => ({
                  value: e.id,
                  label: e.name
              }));
    return (0, r.jsxs)('div', {
        className: u.selectorGroup,
        children: [
            (0, r.jsx)(o.X6, {
                variant: 'heading-deprecated-12/semibold',
                className: u.sectionLabel,
                children: c.NW.string(c.t['8qKd+P'])
            }),
            null != p && '' !== p
                ? (0, r.jsx)(a.x, {
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: p
                  })
                : null,
            (0, r.jsx)(s.VcW, {
                wrapperClassName: u.select,
                maxVisibleItems: d,
                onChange: _,
                placeholder: c.NW.string(c.t['Re/64e']),
                options: E,
                value: f,
                renderOptionLabel: (e) =>
                    (0, r.jsx)(a.x, {
                        variant: 'text-md/normal',
                        children: e.label
                    }),
                renderOptionValue: (e) =>
                    (0, r.jsx)(a.x, {
                        variant: 'text-md/normal',
                        children: e[0].label
                    })
            }),
            (0, r.jsx)(a.x, {
                variant: 'text-xs/normal',
                color: 'header-secondary',
                className: u.label,
                children: c.NW.string(c.t.kQXMfH)
            })
        ]
    });
}
