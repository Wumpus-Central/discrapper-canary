i.d(t, { A: () => N, w: () => T });
var n,
    l = i(627968),
    a = i(64700),
    s = i(311907),
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
    E = i(35787),
    T = (((n = {})[(n.CHAT = 0)] = "CHAT"), (n[(n.REACTIONS = 1)] = "REACTIONS"), n);
let N = (e) => {
    let { type: t, guild: n, closePopout: T, ctaRef: N } = e,
        x = (0, m.GV)(),
        [I, j] = a.useState(!1),
        v = (0, s.bG)([g.A], () => g.A.isLurking(n.id), [n.id]);
    a.useEffect(() => {
        I && !v && T();
    }, [I, v, T]);
    let R = null,
        C = f.intl.string(f.t.d7b1p6);
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
    let b = async () => {
        j(!0);
        try {
            await h.A.joinGuild(n.id, { source: A.Q4z.CHAT_INPUT_BLOCKER }), T();
        } catch {
            j(!1);
        }
    };
    return (0, l.jsxs)(r.l, {
        className: E.kL,
        "aria-labelledby": x,
        children: [
            (0, l.jsx)("img", { alt: "", className: E.Sl, src: i(303528) }),
            (0, l.jsxs)("div", {
                className: E.Qs,
                children: [
                    (0, l.jsx)(u.D, { variant: "heading-md/semibold", id: x, children: R }),
                    (0, l.jsx)(d.E, { color: "text-default", variant: "text-sm/normal", children: C }),
                    (0, l.jsxs)("div", {
                        className: E.UD,
                        children: [
                            (0, l.jsx)(c.$, {
                                variant: "primary",
                                text: f.intl.string(f.t["9VLmlZ"]),
                                buttonRef: N,
                                onClick: b,
                                loading: I,
                            }),
                            (0, l.jsx)(o.$n, {
                                onClick: T,
                                look: o.$n.Looks.BLANK,
                                className: E.ZT,
                                children: f.intl.string(f.t["2m+Sqk"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
