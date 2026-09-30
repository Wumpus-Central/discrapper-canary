n.d(t, { A: () => I, w: () => N });
var i,
    l = n(477900),
    o = n(582128),
    a = n(17928),
    r = n(862482),
    s = n(305866),
    c = n(297264),
    u = n(834730),
    d = n(821609),
    m = n(66834),
    f = n(915089),
    g = n(403362),
    h = n(857071),
    p = n(652215),
    A = n(375708),
    E = n(299409),
    N = (((i = {})[(i.CHAT = 0)] = "CHAT"), (i[(i.REACTIONS = 1)] = "REACTIONS"), i);
let I = function (e) {
    let { type: t, guild: i, closePopout: N, ctaRef: I } = e,
        T = (0, f.GV)(),
        [j, R] = o.useState(!1),
        x = (0, a.bG)([h.A], () => h.A.isLurking(i.id), [i.id]);
    o.useEffect(() => {
        j && !x && N();
    }, [j, x, N]);
    let b = null,
        v = A.intl.string(A.t.d7b1p6);
    switch (t) {
        case 0:
            b = A.intl.string(A.t.Xiwf1Q);
            break;
        case 1:
            b = A.intl.string(A.t.GXvlU9);
            break;
        default:
            return (0, g.xb)(t);
    }
    if (null == b) return null;
    async function C() {
        R(!0);
        try {
            (await m.A.joinGuild(i.id, { source: p.Q4z.CHAT_INPUT_BLOCKER }), N());
        } catch {
            R(!1);
        }
    }
    return (0, l.jsxs)(s.l, {
        className: E.kL,
        "aria-labelledby": T,
        children: [
            (0, l.jsx)("img", { alt: "", className: E.Sl, src: n(303528) }),
            (0, l.jsxs)("div", {
                className: E.Qs,
                children: [
                    (0, l.jsx)(c.D, { variant: "heading-md/semibold", id: T, children: b }),
                    (0, l.jsx)(u.E, { color: "text-default", variant: "text-sm/normal", children: v }),
                    (0, l.jsxs)("div", {
                        className: E.UD,
                        children: [
                            (0, l.jsx)(d.$, {
                                variant: "primary",
                                text: A.intl.string(A.t["9VLmlZ"]),
                                buttonRef: I,
                                onClick: C,
                                loading: j,
                            }),
                            (0, l.jsx)(r.$n, {
                                onClick: N,
                                look: r.$n.Looks.BLANK,
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
