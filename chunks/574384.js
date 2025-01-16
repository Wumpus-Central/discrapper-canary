r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(793030),
    l = r(993365),
    u = r(481060),
    c = r(489863),
    d = r(388032),
    f = r(804537);
let _ = 5;
function h(e) {
    var n;
    let { selectedGuildId: r, selectedChannelId: i, onChannelChange: h, error: p } = e,
        [m, g] = s.useState(null),
        E = s.useRef(!1);
    if (
        (s.useEffect(() => {
            async function e(e) {
                let n = await (0, c.UR)(e);
                r === e &&
                    (n.sort((e, n) => e.name.localeCompare(n.name)),
                    g({
                        guildId: e,
                        channels: n
                    }),
                    (E.current = !0));
            }
            g(null), null == r ? h(null) : e(r);
        }, [h, r]),
        s.useEffect(() => {
            if (!!E.current) null == m ? null != i && h(null) : !m.channels.some((e) => e.id === i) && h(null);
        }, [m, h, i, r]),
        null == r)
    )
        return null;
    let v =
        null == m || m.guildId !== r
            ? []
            : (null !== (n = null == m ? void 0 : m.channels) && void 0 !== n ? n : []).map((e) => ({
                  value: e.id,
                  label: e.name
              }));
    return (0, a.jsxs)('div', {
        className: f.selectorGroup,
        children: [
            (0, a.jsx)(o.X6, {
                variant: 'heading-deprecated-12/semibold',
                className: f.sectionLabel,
                children: d.intl.string(d.t['8qKd+P'])
            }),
            null != p && '' !== p
                ? (0, a.jsx)(l.x, {
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: p
                  })
                : null,
            (0, a.jsx)(u.SearchableSelect, {
                wrapperClassName: f.select,
                maxVisibleItems: _,
                onChange: h,
                placeholder: d.intl.string(d.t['Re/64e']),
                options: v,
                value: i,
                renderOptionLabel: (e) =>
                    (0, a.jsx)(l.x, {
                        variant: 'text-md/normal',
                        children: e.label
                    }),
                renderOptionValue: (e) =>
                    (0, a.jsx)(l.x, {
                        variant: 'text-md/normal',
                        children: e[0].label
                    })
            }),
            (0, a.jsx)(l.x, {
                variant: 'text-xs/normal',
                color: 'header-secondary',
                className: f.label,
                children: d.intl.string(d.t.kQXMfH)
            })
        ]
    });
}
