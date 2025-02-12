n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(793030),
    s = n(993365),
    o = n(481060),
    l = n(489863),
    u = n(388032),
    c = n(537538);
let d = 5;
function f(e) {
    var t;
    let { selectedGuildId: n, selectedChannelId: f, onChannelChange: _, error: p } = e,
        [h, m] = r.useState(null),
        g = r.useRef(!1);
    if (
        (r.useEffect(() => {
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
        r.useEffect(() => {
            g.current && (null == h ? null != f && _(null) : h.channels.some((e) => e.id === f) || _(null));
        }, [h, _, f, n]),
        null == n)
    )
        return null;
    let E =
        null == h || h.guildId !== n
            ? []
            : (null !== (t = null == h ? void 0 : h.channels) && void 0 !== t ? t : []).map((e) => ({
                  value: e.id,
                  label: e.name
              }));
    return (0, i.jsxs)('div', {
        className: c.selectorGroup,
        children: [
            (0, i.jsx)(a.X6, {
                variant: 'heading-deprecated-12/semibold',
                className: c.sectionLabel,
                children: u.intl.string(u.t['8qKd+P'])
            }),
            null != p && '' !== p
                ? (0, i.jsx)(s.x, {
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: p
                  })
                : null,
            (0, i.jsx)(o.VcW, {
                wrapperClassName: c.select,
                maxVisibleItems: d,
                onChange: _,
                placeholder: u.intl.string(u.t['Re/64e']),
                options: E,
                value: f,
                renderOptionLabel: (e) =>
                    (0, i.jsx)(s.x, {
                        variant: 'text-md/normal',
                        children: e.label
                    }),
                renderOptionValue: (e) =>
                    (0, i.jsx)(s.x, {
                        variant: 'text-md/normal',
                        children: e[0].label
                    })
            }),
            (0, i.jsx)(s.x, {
                variant: 'text-xs/normal',
                color: 'header-secondary',
                className: c.label,
                children: u.intl.string(u.t.kQXMfH)
            })
        ]
    });
}
