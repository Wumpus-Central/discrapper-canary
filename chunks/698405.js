n.d(t, { A: () => v, w: () => N });
var i,
    l = n(627968),
    a = n(64700),
    r = n(17928),
    o = n(862482),
    s = n(305866),
    u = n(534514),
    c = n(834730),
    d = n(821609),
    m = n(66834),
    h = n(915089),
    g = n(403362),
    p = n(857071),
    f = n(652215),
    A = n(375708),
    E = n(35787),
    N = (((i = {})[(i.CHAT = 0)] = "CHAT"), (i[(i.REACTIONS = 1)] = "REACTIONS"), i);
let v = (e) => {
    let { type: t, guild: i, closePopout: N, ctaRef: v } = e,
        x = (0, h.GV)(),
        [j, I] = a.useState(!1),
        T = (0, r.bG)([p.A], () => p.A.isLurking(i.id), [i.id]);
    a.useEffect(() => {
        j && !T && N();
    }, [j, T, N]);
    let R = null,
        b = A.intl.string(A.t.d7b1p6);
    switch (t) {
        case 0:
            R = A.intl.string(A.t.Xiwf1Q);
            break;
        case 1:
            R = A.intl.string(A.t.GXvlU9);
            break;
        default:
            return (0, g.xb)(t);
    }
    if (null == R) return null;
    let S = async () => {
        I(!0);
        try {
            await m.A.joinGuild(i.id, { source: f.Q4z.CHAT_INPUT_BLOCKER }), N();
        } catch {
            I(!1);
        }
    };
    return (0, l.jsxs)(s.l, {
        className: E.kL,
        "aria-labelledby": x,
        children: [
            (0, l.jsx)("img", { alt: "", className: E.Sl, src: n(303528) }),
            (0, l.jsxs)("div", {
                className: E.Qs,
                children: [
                    (0, l.jsx)(u.D, { variant: "heading-md/semibold", id: x, children: R }),
                    (0, l.jsx)(c.E, { color: "text-default", variant: "text-sm/normal", children: b }),
                    (0, l.jsxs)("div", {
                        className: E.UD,
                        children: [
                            (0, l.jsx)(d.$, {
                                variant: "primary",
                                text: A.intl.string(A.t["9VLmlZ"]),
                                buttonRef: v,
                                onClick: S,
                                loading: j,
                            }),
                            (0, l.jsx)(o.$n, {
                                onClick: N,
                                look: o.$n.Looks.BLANK,
                                className: E.ZT,
                                children: A.intl.string(A.t["2m+Sqk"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
