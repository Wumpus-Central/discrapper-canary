n.d(t, { Z: () => m }), n(388685);
var r = n(54381);
n(473749);
var i = n(658722),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    c = n(481060),
    u = n(402235),
    d = n(485386),
    f = n(981631),
    p = n(388032),
    _ = n(644094);
let m = function (e) {
    let { className: t, guild: n, roleStyle: i, roleFilter: o, onSelect: m, onClose: h } = e,
        g = (0, l.e7)([d.Z], () => d.Z.getSortedRoles(n.id)),
        E = (0, u.ZP)(n.id, null),
        b = (e) =>
            s()(g)
                .filter(o)
                .filter((t) => a()(e.toLowerCase(), t.name.toLowerCase()))
                .value();
    return (0, r.jsx)(c.DBG, {
        className: t,
        value: new Set(),
        onChange: m,
        placeholder: p.intl.string(p.t.XPGZXP),
        "aria-label": p.intl.string(p.t.ljnBlo),
        onClose: h,
        children: (e) =>
            b(e).map((e) => {
                var t, n;
                return (0, r.jsxs)(
                    c.lo1,
                    {
                        value: e.id,
                        children: [
                            "dot" === i
                                ? (0, r.jsx)(c.FhE, {
                                      className: _.popoutRoleDot,
                                      color: null != (t = e.colorString) ? t : f.Pbq,
                                      colors: E ? e.colorStrings : null,
                                      background: !1,
                                      tooltip: !1,
                                  })
                                : (0, r.jsx)(c.xko, {
                                      className: _.popoutRoleCircle,
                                      color: null != (n = e.colorString) ? n : f.Pbq,
                                      colors: E ? e.colorStrings : null,
                                  }),
                            (0, r.jsx)(c.lo1.Label, { children: e.name }),
                        ],
                    },
                    e.id,
                );
            }),
    });
};
