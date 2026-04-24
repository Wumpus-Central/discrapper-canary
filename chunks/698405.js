i.d(t, { A: () => v, w: () => j });
var n,
    l = i(627968),
    a = i(64700),
    s = i(17928),
    o = i(862482),
    r = i(305866),
    u = i(534514),
    d = i(834730),
    c = i(821609),
    h = i(686956),
    m = i(915089),
    p = i(403362),
    g = i(857071),
    A = i(652215),
    f = i(985018),
    x = i(35787),
    j = (((n = {})[(n.CHAT = 0)] = "CHAT"), (n[(n.REACTIONS = 1)] = "REACTIONS"), n);
let v = (e) => {
    let { type: t, guild: n, closePopout: j, ctaRef: v } = e,
        T = (0, m.GV)(),
        [E, N] = a.useState(!1),
        I = (0, s.bG)([g.A], () => g.A.isLurking(n.id), [n.id]);
    a.useEffect(() => {
        E && !I && j();
    }, [E, I, j]);
    let R = null,
        b = f.intl.string(f.t.d7b1p6);
    switch (t) {
        case 0:
            R = f.intl.string(f.t.Xiwf1Q);
            break;
        case 1:
            R = f.intl.string(f.t.GXvlU9);
            break;
        default:
            return (0, p.xb)(t);
    }
    if (null == R) return null;
    let S = async () => {
        N(!0);
        try {
            await h.A.joinGuild(n.id, { source: A.Q4z.CHAT_INPUT_BLOCKER }), j();
        } catch {
            N(!1);
        }
    };
    return (0, l.jsxs)(r.l, {
        className: x.kL,
        "aria-labelledby": T,
        children: [
            (0, l.jsx)("img", { alt: "", className: x.Sl, src: i(303528) }),
            (0, l.jsxs)("div", {
                className: x.Qs,
                children: [
                    (0, l.jsx)(u.D, { variant: "heading-md/semibold", id: T, children: R }),
                    (0, l.jsx)(d.E, { color: "text-default", variant: "text-sm/normal", children: b }),
                    (0, l.jsxs)("div", {
                        className: x.UD,
                        children: [
                            (0, l.jsx)(c.$, {
                                variant: "primary",
                                text: f.intl.string(f.t["9VLmlZ"]),
                                buttonRef: v,
                                onClick: S,
                                loading: E,
                            }),
                            (0, l.jsx)(o.$n, {
                                onClick: j,
                                look: o.$n.Looks.BLANK,
                                className: x.ZT,
                                children: f.intl.string(f.t["2m+Sqk"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
