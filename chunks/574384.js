n.d(t, { Z: () => f }), n(388685), n(642613);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(993365),
    s = n(668339),
    l = n(489863),
    c = n(388032),
    u = n(990199);
let d = 5;
function f(e) {
    var t;
    let { selectedGuildId: n, selectedChannelId: f, onChannelChange: p, error: _ } = e,
        [m, h] = i.useState(null),
        g = i.useRef(!1);
    if (
        (i.useEffect(() => {
            async function e(e) {
                let t = await (0, l.UR)(e);
                n === e &&
                    (t.sort((e, t) => e.name.localeCompare(t.name)),
                    h({
                        guildId: e,
                        channels: t,
                    }),
                    (g.current = !0));
            }
            h(null), null == n ? p(null) : e(n);
        }, [p, n]),
        i.useEffect(() => {
            g.current && (null == m ? null != f && p(null) : m.channels.some((e) => e.id === f) || p(null));
        }, [m, p, f, n]),
        null == n)
    )
        return null;
    let E =
        null == m || m.guildId !== n
            ? []
            : (null != (t = null == m ? void 0 : m.channels) ? t : []).map((e) => ({
                  value: e.id,
                  label: e.name,
              }));
    return (0, r.jsxs)("div", {
        className: u.selectorGroup,
        children: [
            (0, r.jsx)(a.X6q, {
                variant: "heading-deprecated-12/semibold",
                className: u.sectionLabel,
                children: c.intl.string(c.t["8qKd+J"]),
            }),
            null != _ && "" !== _
                ? (0, r.jsx)(o.x, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: _,
                  })
                : null,
            (0, r.jsx)(s.d, {
                wrapperClassName: u.select,
                maxVisibleItems: d,
                onChange: p,
                placeholder: c.intl.string(c.t["Re/64R"]),
                options: E,
                value: f,
                renderOptionLabel: (e) =>
                    (0, r.jsx)(o.x, {
                        variant: "text-md/normal",
                        children: e.label,
                    }),
                renderOptionValue: (e) =>
                    (0, r.jsx)(o.x, {
                        variant: "text-md/normal",
                        children: e[0].label,
                    }),
            }),
            (0, r.jsx)(o.x, {
                variant: "text-xs/normal",
                color: "text-default",
                className: u.label,
                children: c.intl.string(c.t.kQXMfN),
            }),
        ],
    });
}
