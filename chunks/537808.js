n.d(t, { default: () => f });
var i = n(477900),
    a = n(582128),
    s = n(17928),
    l = n(189213),
    d = n(683071),
    r = n(866665),
    c = n(123292),
    o = n(913122),
    u = n(919577),
    h = n(376310),
    m = n(734057),
    g = n(490094),
    p = n(660183),
    x = n(312448);
let C = ["Chill", "Experienced", "Beginner Friendly", "18+", "Women Only", "LGBTQ+ Friendly"].map((e) => ({
    id: e,
    name: e,
}));
function f(e) {
    let { channelId: t, ...n } = e,
        [f, w] = (0, a.useState)(null),
        [S, y] = (0, a.useState)(new Set()),
        [j, v] = (0, a.useState)(new Set()),
        k = j.size > 0,
        b = (0, s.bG)([m.A], () => m.A.getChannel(t)),
        A = new Set((b?.availableTags ?? []).map((e) => e.name));
    function z(e, t) {
        y((n) => {
            let i = new Set(n);
            return (t ? i.add(e) : i.delete(e), i);
        });
    }
    async function E() {
        (w(null), v(new Set(S)));
        try {
            for (let e of S) (await u.A.createForumTag({ name: e }, t), z(e, !1));
            n.onClose();
        } catch (e) {
            (w(new o.LG(e)), v(new Set()));
        }
    }
    return (0, i.jsxs)(l.a, {
        size: "sm",
        title: p.intl.string(g.default.JWRsCC),
        subtitle: p.intl.string(g.default["578719"]),
        actions: [
            { text: p.intl.string(p.t["ETE/oC"]), variant: "secondary", onClick: n.onClose, disabled: k },
            { text: p.intl.string(p.t["R3BPH+"]), variant: "primary", onClick: E, loading: k },
        ],
        ...n,
        children: [
            null != f
                ? (0, i.jsx)("div", {
                      className: x.z3,
                      children: (0, i.jsx)(d.w, { type: "critical", message: f.message, role: "alert" }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: x._A,
                children: [
                    C.map((e) =>
                        (0, i.jsx)(
                            r.m,
                            {
                                text: A.has(e.id) ? p.intl.string(g.default["7aCPJG"]) : null,
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsx)(h.Ay, {
                                        selected: S.has(e.id) || j.has(e.id) || A.has(e.id),
                                        disabled: A.has(e.id) || j.has(e.id),
                                        tag: e,
                                        size: h.Ay.Sizes.MEDIUM,
                                        onClick:
                                            A.has(e.id) || k
                                                ? void 0
                                                : () => {
                                                      z(e.name, !S.has(e.name));
                                                  },
                                    }),
                                }),
                            },
                            e.id,
                        ),
                    ),
                    (0, i.jsx)("div", {
                        className: x.EN,
                        children: (0, i.jsx)(c.Q, {
                            text: p.intl.string(g.default.F5YBmi),
                            onClick: function () {
                                y(new Set(C.filter((e) => !A.has(e.name)).map((e) => e.name)));
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
