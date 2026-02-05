n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(989095),
    s = n(868048),
    r = n(355097),
    o = n(985018),
    c = n(709994);
function d(e) {
    let { channel: t, clearUnreadsNotice: n } = e;
    return (0, i.jsxs)("div", {
        className: c.l,
        children: [
            (0, i.jsx)(a.A, { id: t.id }),
            (0, i.jsx)("div", {
                className: c.p,
                children: (0, i.jsx)(l.Text, { variant: "text-sm/medium", children: o.intl.format(o.t.P6Y2N1, {}) }),
            }),
            (0, i.jsx)(l.Button, {
                variant: "secondary",
                text: o.intl.string(o.t.KyUKhT),
                icon: l.ejX,
                size: "sm",
                onClick: () => {
                    (0, s.A)(t.guild_id, t.id, r.vv.UNREADS_ONLY_MENTIONS), n();
                },
            }),
        ],
    });
}
