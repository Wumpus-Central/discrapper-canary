i.d(t, { A: () => I, w: () => T });
var n,
    l = i(627968),
    a = i(64700),
    r = i(311907),
    s = i(862482),
    o = i(305866),
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
let I = (e) => {
    let { type: t, guild: n, closePopout: T, ctaRef: I } = e,
        N = (0, m.GV)(),
        [x, v] = a.useState(!1),
        j = (0, r.bG)([g.A], () => g.A.isLurking(n.id), [n.id]);
    a.useEffect(() => {
        x && !j && T();
    }, [x, j, T]);
    let R = null,
        S = f.intl.string(f.t.d7b1p6);
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
    let C = async () => {
        v(!0);
        try {
            await h.A.joinGuild(n.id, { source: A.Q4z.CHAT_INPUT_BLOCKER }), T();
        } catch {
            v(!1);
        }
    };
    return (0, l.jsxs)(o.l, {
        className: E.kL,
        "aria-labelledby": N,
        children: [
            (0, l.jsx)("img", { alt: "", className: E.Sl, src: i(303528) }),
            (0, l.jsxs)("div", {
                className: E.Qs,
                children: [
                    (0, l.jsx)(u.D, { variant: "heading-md/semibold", id: N, children: R }),
                    (0, l.jsx)(d.E, { color: "text-default", variant: "text-sm/normal", children: S }),
                    (0, l.jsxs)("div", {
                        className: E.UD,
                        children: [
                            (0, l.jsx)(c.$, {
                                variant: "primary",
                                text: f.intl.string(f.t["9VLmlZ"]),
                                buttonRef: I,
                                onClick: C,
                                loading: x,
                            }),
                            (0, l.jsx)(s.$n, {
                                onClick: T,
                                look: s.$n.Looks.BLANK,
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
