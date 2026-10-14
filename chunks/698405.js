n.d(t, { A: () => E, w: () => j });
var i,
    l = n(477900),
    a = n(582128),
    o = n(17928),
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
    A = n(660183),
    N = n(521790),
    j = (((i = {})[(i.CHAT = 0)] = "CHAT"), (i[(i.REACTIONS = 1)] = "REACTIONS"), i);
let E = function (e) {
    let { type: t, guild: i, closePopout: j, ctaRef: E } = e,
        x = (0, f.GV)(),
        [I, T] = a.useState(!1),
        R = (0, o.bG)([h.A], () => h.A.isLurking(i.id), [i.id]);
    a.useEffect(() => {
        I && !R && j();
    }, [I, R, j]);
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
        T(!0);
        try {
            (await m.A.joinGuild(i.id, { source: p.Q4z.CHAT_INPUT_BLOCKER }), j());
        } catch {
            T(!1);
        }
    }
    return (0, l.jsxs)(s.l, {
        className: N.kL,
        "aria-labelledby": x,
        children: [
            (0, l.jsx)("img", { alt: "", className: N.Sl, src: n(303528) }),
            (0, l.jsxs)("div", {
                className: N.Qs,
                children: [
                    (0, l.jsx)(c.D, { variant: "heading-md/semibold", id: x, children: b }),
                    (0, l.jsx)(u.E, { color: "text-default", variant: "text-sm/normal", children: v }),
                    (0, l.jsxs)("div", {
                        className: N.UD,
                        children: [
                            (0, l.jsx)(d.$, {
                                variant: "primary",
                                text: A.intl.string(A.t["9VLmlZ"]),
                                buttonRef: E,
                                onClick: C,
                                loading: I,
                            }),
                            (0, l.jsx)(r.$n, {
                                onClick: j,
                                look: r.$n.Looks.BLANK,
                                className: N.ZT,
                                children: A.intl.string(A.t["2m+Sqk"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
