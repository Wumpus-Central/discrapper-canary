t.d(n, { default: () => f });
var i = t(627968),
    a = t(64700),
    s = t(189213),
    l = t(683071),
    d = t(123292),
    r = t(17928),
    c = t(990078),
    o = t(913122),
    u = t(919577),
    h = t(376310),
    m = t(734057),
    p = t(774418),
    x = t(375708),
    C = t(330539);
let g = ["Chill", "Experienced", "Beginner Friendly", "18+", "Women Only", "LGBTQ+ Friendly"].map((e) => ({
    id: e,
    name: e,
}));
function f(e) {
    let { channelId: n, ...t } = e,
        [f, w] = (0, a.useState)(null),
        [S, j] = (0, a.useState)(new Set()),
        [v, k] = (0, a.useState)(new Set()),
        y = v.size > 0,
        b = (0, r.bG)([m.A], () => m.A.getChannel(n)),
        A = new Set((b?.availableTags ?? []).map((e) => e.name));
    function z(e, n) {
        j((t) => {
            let i = new Set(t);
            return n ? i.add(e) : i.delete(e), i;
        });
    }
    async function E() {
        w(null), k(new Set(S));
        try {
            for (let e of S) await u.A.createForumTag({ name: e }, n), z(e, !1);
            t.onClose();
        } catch (e) {
            w(new o.LG(e)), k(new Set());
        }
    }
    return (0, i.jsxs)(s.Modal, {
        size: "sm",
        title: x.intl.string(p.default.JWRsCC),
        subtitle: x.intl.string(p.default["578719"]),
        actions: [
            { text: x.intl.string(x.t["ETE/oC"]), variant: "secondary", onClick: t.onClose, disabled: y },
            { text: x.intl.string(x.t["R3BPH+"]), variant: "primary", onClick: E, loading: y },
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
                                    children: (0, i.jsx)(h.A, {
                                        selected: S.has(e.id) || v.has(e.id) || A.has(e.id),
                                        disabled: A.has(e.id) || v.has(e.id),
                                        tag: e,
                                        size: h.A.Sizes.MEDIUM,
                                        onClick:
                                            A.has(e.id) || y
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
                                j(new Set(g.filter((e) => !A.has(e.name)).map((e) => e.name)));
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
