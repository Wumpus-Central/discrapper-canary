t.d(n, { default: () => f });
var i = t(477900),
    a = t(582128),
    s = t(189213),
    l = t(683071),
    d = t(123292),
    r = t(17928),
    c = t(866665),
    o = t(913122),
    u = t(919577),
    h = t(376310),
    m = t(734057),
    p = t(490094),
    x = t(375708),
    C = t(312448);
let g = ["Chill", "Experienced", "Beginner Friendly", "18+", "Women Only", "LGBTQ+ Friendly"].map((e) => ({
    id: e,
    name: e,
}));
function f(e) {
    let { channelId: n, ...t } = e,
        [f, w] = (0, a.useState)(null),
        [S, y] = (0, a.useState)(new Set()),
        [j, v] = (0, a.useState)(new Set()),
        k = j.size > 0,
        b = (0, r.bG)([m.A], () => m.A.getChannel(n)),
        A = new Set((b?.availableTags ?? []).map((e) => e.name));
    function z(e, n) {
        y((t) => {
            let i = new Set(t);
            return (n ? i.add(e) : i.delete(e), i);
        });
    }
    async function E() {
        (w(null), v(new Set(S)));
        try {
            for (let e of S) (await u.A.createForumTag({ name: e }, n), z(e, !1));
            t.onClose();
        } catch (e) {
            (w(new o.LG(e)), v(new Set()));
        }
    }
    return (0, i.jsxs)(s.Modal, {
        size: "sm",
        title: x.intl.string(p.default.JWRsCC),
        subtitle: x.intl.string(p.default["578719"]),
        actions: [
            { text: x.intl.string(x.t["ETE/oC"]), variant: "secondary", onClick: t.onClose, disabled: k },
            { text: x.intl.string(x.t["R3BPH+"]), variant: "primary", onClick: E, loading: k },
        ],
        ...t,
        children: [
            null != f
                ? (0, i.jsx)("div", {
                      className: C.z3,
                      children: (0, i.jsx)(l.w, { type: "critical", children: f.message }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: C._A,
                children: [
                    g.map((e) =>
                        (0, i.jsx)(
                            c.m,
                            {
                                text: A.has(e.id) ? x.intl.string(p.default["7aCPJG"]) : null,
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
                        className: C.EN,
                        children: (0, i.jsx)(d.Q, {
                            text: x.intl.string(p.default.F5YBmi),
                            onClick: function () {
                                y(new Set(g.filter((e) => !A.has(e.name)).map((e) => e.name)));
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
