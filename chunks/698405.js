i.d(t, { A: () => x, w: () => v });
var n,
    l = i(627968),
    o = i(64700),
    a = i(17928),
    r = i(862482),
    s = i(305866),
    u = i(534514),
    d = i(834730),
    c = i(821609),
    h = i(66834),
    p = i(915089),
    m = i(403362),
    g = i(857071),
    A = i(652215),
    f = i(375708),
    T = i(35787),
    v = (((n = {})[(n.CHAT = 0)] = "CHAT"), (n[(n.REACTIONS = 1)] = "REACTIONS"), n);
let x = (e) => {
    let { type: t, guild: n, closePopout: v, ctaRef: x } = e,
        E = (0, p.GV)(),
        [R, N] = o.useState(!1),
        I = (0, a.bG)([g.A], () => g.A.isLurking(n.id), [n.id]);
    o.useEffect(() => {
        R && !I && v();
    }, [R, I, v]);
    let j = null,
        b = f.intl.string(f.t.d7b1p6);
    switch (t) {
        case 0:
            j = f.intl.string(f.t.Xiwf1Q);
            break;
        case 1:
            j = f.intl.string(f.t.GXvlU9);
            break;
        default:
            return (0, m.xb)(t);
    }
    if (null == j) return null;
    let S = async () => {
        N(!0);
        try {
            await h.A.joinGuild(n.id, { source: A.Q4z.CHAT_INPUT_BLOCKER }), v();
        } catch {
            N(!1);
        }
    };
    return (0, l.jsxs)(s.l, {
        className: T.kL,
        "aria-labelledby": E,
        children: [
            (0, l.jsx)("img", { alt: "", className: T.Sl, src: i(303528) }),
            (0, l.jsxs)("div", {
                className: T.Qs,
                children: [
                    (0, l.jsx)(u.D, { variant: "heading-md/semibold", id: E, children: j }),
                    (0, l.jsx)(d.E, { color: "text-default", variant: "text-sm/normal", children: b }),
                    (0, l.jsxs)("div", {
                        className: T.UD,
                        children: [
                            (0, l.jsx)(c.$, {
                                variant: "primary",
                                text: f.intl.string(f.t["9VLmlZ"]),
                                buttonRef: x,
                                onClick: S,
                                loading: R,
                            }),
                            (0, l.jsx)(r.$n, {
                                onClick: v,
                                look: r.$n.Looks.BLANK,
                                className: T.ZT,
                                children: f.intl.string(f.t["2m+Sqk"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
