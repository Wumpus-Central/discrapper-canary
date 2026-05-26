n.d(t, { A: () => N, w: () => x });
var l,
    i = n(627968),
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
    I = n(35787),
    x = (((l = {})[(l.CHAT = 0)] = "CHAT"), (l[(l.REACTIONS = 1)] = "REACTIONS"), l);
let N = (e) => {
    let { type: t, guild: l, closePopout: x, ctaRef: N } = e,
        E = (0, h.GV)(),
        [j, v] = a.useState(!1),
        T = (0, r.bG)([p.A], () => p.A.isLurking(l.id), [l.id]);
    a.useEffect(() => {
        j && !T && x();
    }, [j, T, x]);
    let b = null,
        R = A.intl.string(A.t.d7b1p6);
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
    let C = async () => {
        v(!0);
        try {
            await m.A.joinGuild(l.id, { source: f.Q4z.CHAT_INPUT_BLOCKER }), x();
        } catch {
            v(!1);
        }
    };
    return (0, i.jsxs)(s.l, {
        className: I.kL,
        "aria-labelledby": E,
        children: [
            (0, i.jsx)("img", { alt: "", className: I.Sl, src: n(303528) }),
            (0, i.jsxs)("div", {
                className: I.Qs,
                children: [
                    (0, i.jsx)(u.D, { variant: "heading-md/semibold", id: E, children: b }),
                    (0, i.jsx)(c.E, { color: "text-default", variant: "text-sm/normal", children: R }),
                    (0, i.jsxs)("div", {
                        className: I.UD,
                        children: [
                            (0, i.jsx)(d.$, {
                                variant: "primary",
                                text: A.intl.string(A.t["9VLmlZ"]),
                                buttonRef: N,
                                onClick: C,
                                loading: j,
                            }),
                            (0, i.jsx)(o.$n, {
                                onClick: x,
                                look: o.$n.Looks.BLANK,
                                className: I.ZT,
                                children: A.intl.string(A.t["2m+Sqk"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
