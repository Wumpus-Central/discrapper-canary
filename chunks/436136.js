n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(834730),
    a = n(821609),
    s = n(744898),
    r = n(989095),
    o = n(868048),
    c = n(355097),
    d = n(985018),
    u = n(1341);
function h(e) {
    let { channel: t, clearUnreadsNotice: n } = e;
    return (0, i.jsxs)("div", {
        className: u.l,
        children: [
            (0, i.jsx)(r.A, { id: t.id }),
            (0, i.jsx)("div", {
                className: u.p,
                children: (0, i.jsx)(l.E, { variant: "text-sm/medium", children: d.intl.format(d.t.P6Y2N1, {}) }),
            }),
            (0, i.jsx)(a.$, {
                variant: "secondary",
                text: d.intl.string(d.t.KyUKhT),
                icon: s.e,
                size: "sm",
                onClick: () => {
                    (0, o.A)(t.guild_id, t.id, c.vv.UNREADS_ONLY_MENTIONS), n();
                },
            }),
        ],
    });
}
