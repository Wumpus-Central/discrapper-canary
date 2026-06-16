i.d(t, { default: () => w });
var a = i(627968),
    n = i(64700),
    s = i(189213),
    l = i(683071),
    d = i(123292),
    r = i(17928),
    c = i(990078),
    h = i(913122),
    o = i(919577),
    u = i(376310),
    m = i(734057),
    p = i(774418),
    x = i(375708),
    C = i(330539);
let g = ["Chill", "Experienced", "Beginner Friendly", "18+", "Women Only", "LGBTQ+ Friendly"].map((e) => ({
    id: e,
    name: e,
}));
function w(e) {
    let { channelId: t, ...i } = e,
        [w, S] = (0, n.useState)(null),
        [f, j] = (0, n.useState)(new Set()),
        [v, k] = (0, n.useState)(new Set()),
        y = v.size > 0,
        b = (0, r.bG)([m.A], () => m.A.getChannel(t)),
        A = new Set((b?.availableTags ?? []).map((e) => e.name)),
        z = (e, t) => {
            j((i) => {
                let a = new Set(i);
                return t ? a.add(e) : a.delete(e), a;
            });
        },
        E = async () => {
            S(null), k(new Set(f));
            try {
                for (let e of f) await o.A.createForumTag({ name: e }, t), z(e, !1);
                i.onClose();
            } catch (e) {
                S(new h.LG(e)), k(new Set());
            }
        };
    return (0, a.jsxs)(s.Modal, {
        size: "sm",
        title: x.intl.string(p.default.JWRsCC),
        subtitle: x.intl.string(p.default["578719"]),
        actions: [
            { text: x.intl.string(x.t["ETE/oC"]), variant: "secondary", onClick: i.onClose, disabled: y },
            { text: x.intl.string(x.t["R3BPH+"]), variant: "primary", onClick: E, loading: y },
        ],
        ...i,
        children: [
            null != w
                ? (0, a.jsx)("div", {
                      className: C.z3,
                      children: (0, a.jsx)(l.w, { type: "critical", children: w.message }),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: C._A,
                children: [
                    g.map((e) =>
                        (0, a.jsx)(
                            c.m,
                            {
                                text: A.has(e.id) ? x.intl.string(p.default["7aCPJG"]) : null,
                                children: (0, a.jsx)("div", {
                                    children: (0, a.jsx)(u.A, {
                                        selected: f.has(e.id) || v.has(e.id) || A.has(e.id),
                                        disabled: A.has(e.id) || v.has(e.id),
                                        tag: e,
                                        size: u.A.Sizes.MEDIUM,
                                        onClick:
                                            A.has(e.id) || y
                                                ? void 0
                                                : () => {
                                                      z(e.name, !f.has(e.name));
                                                  },
                                    }),
                                }),
                            },
                            e.id,
                        ),
                    ),
                    (0, a.jsx)("div", {
                        className: C.EN,
                        children: (0, a.jsx)(d.Q, {
                            text: x.intl.string(p.default.F5YBmi),
                            onClick: () => {
                                j(new Set(g.filter((e) => !A.has(e.name)).map((e) => e.name)));
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
