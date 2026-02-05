i.d(t, { A: () => f, w: () => A });
var n,
    l = i(627968),
    a = i(64700),
    r = i(311907),
    o = i(421380),
    s = i(397927),
    u = i(686956),
    d = i(915089),
    c = i(403362),
    h = i(857071),
    m = i(652215),
    p = i(985018),
    g = i(270920),
    A = (((n = {})[(n.CHAT = 0)] = "CHAT"), (n[(n.REACTIONS = 1)] = "REACTIONS"), n);
let f = (e) => {
    let { type: t, guild: n, closePopout: A, ctaRef: f } = e,
        T = (0, d.GV)(),
        [E, I] = a.useState(!1),
        x = (0, r.bG)([h.A], () => h.A.isLurking(n.id), [n.id]);
    a.useEffect(() => {
        E && !x && A();
    }, [E, x, A]);
    let N = null,
        v = p.intl.string(p.t.d7b1p6);
    switch (t) {
        case 0:
            N = p.intl.string(p.t.Xiwf1Q);
            break;
        case 1:
            N = p.intl.string(p.t.GXvlU9);
            break;
        default:
            return (0, c.xb)(t);
    }
    if (null == N) return null;
    let R = async () => {
        I(!0);
        try {
            await u.A.joinGuild(n.id, { source: m.Q4z.CHAT_INPUT_BLOCKER }), A();
        } catch {
            I(!1);
        }
    };
    return (0, l.jsxs)(s.lGe, {
        className: g.kL,
        "aria-labelledby": T,
        children: [
            (0, l.jsx)("img", { alt: "", className: g.Sl, src: i(303528) }),
            (0, l.jsxs)("div", {
                className: g.Qs,
                children: [
                    (0, l.jsx)(s.Heading, { variant: "heading-md/semibold", id: T, children: N }),
                    (0, l.jsx)(s.Text, { color: "text-default", variant: "text-sm/normal", children: v }),
                    (0, l.jsxs)("div", {
                        className: g.UD,
                        children: [
                            (0, l.jsx)(s.Button, {
                                variant: "primary",
                                text: p.intl.string(p.t["9VLmlZ"]),
                                buttonRef: f,
                                onClick: R,
                                loading: E,
                            }),
                            (0, l.jsx)(o.$n, {
                                onClick: A,
                                look: o.$n.Looks.BLANK,
                                className: g.ZT,
                                children: p.intl.string(p.t["2m+Sqk"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
