i.d(t, { A: () => f, w: () => A });
var n,
    l = i(627968),
    a = i(64700),
    s = i(311907),
    r = i(421380),
    o = i(397927),
    u = i(686956),
    d = i(915089),
    c = i(403362),
    h = i(857071),
    m = i(652215),
    p = i(985018),
    g = i(35787),
    A = (((n = {})[(n.CHAT = 0)] = "CHAT"), (n[(n.REACTIONS = 1)] = "REACTIONS"), n);
let f = (e) => {
    let { type: t, guild: n, closePopout: A, ctaRef: f } = e,
        T = (0, d.GV)(),
        [E, x] = a.useState(!1),
        I = (0, s.bG)([h.A], () => h.A.isLurking(n.id), [n.id]);
    a.useEffect(() => {
        E && !I && A();
    }, [E, I, A]);
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
    let j = async () => {
        x(!0);
        try {
            await u.A.joinGuild(n.id, { source: m.Q4z.CHAT_INPUT_BLOCKER }), A();
        } catch {
            x(!1);
        }
    };
    return (0, l.jsxs)(o.lGe, {
        className: g.kL,
        "aria-labelledby": T,
        children: [
            (0, l.jsx)("img", { alt: "", className: g.Sl, src: i(303528) }),
            (0, l.jsxs)("div", {
                className: g.Qs,
                children: [
                    (0, l.jsx)(o.Heading, { variant: "heading-md/semibold", id: T, children: N }),
                    (0, l.jsx)(o.Text, { color: "text-default", variant: "text-sm/normal", children: v }),
                    (0, l.jsxs)("div", {
                        className: g.UD,
                        children: [
                            (0, l.jsx)(o.Button, {
                                variant: "primary",
                                text: p.intl.string(p.t["9VLmlZ"]),
                                buttonRef: f,
                                onClick: j,
                                loading: E,
                            }),
                            (0, l.jsx)(r.$n, {
                                onClick: A,
                                look: r.$n.Looks.BLANK,
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
