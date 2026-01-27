n.d(t, {
    A: () => b,
    w: () => g,
}),
    n(896048);
var i,
    l = n(627968),
    r = n(64700),
    o = n(311907),
    a = n(421380),
    s = n(397927),
    u = n(686956),
    c = n(915089),
    d = n(403362),
    p = n(857071),
    h = n(652215),
    m = n(985018),
    f = n(270920),
    g = (((i = {})[(i.CHAT = 0)] = "CHAT"), (i[(i.REACTIONS = 1)] = "REACTIONS"), i);
let b = (e) => {
    let { type: t, guild: i, closePopout: g, ctaRef: b } = e,
        y = (0, c.GV)(),
        [O, v] = r.useState(!1),
        j = (0, o.bG)([p.A], () => p.A.isLurking(i.id), [i.id]);
    r.useEffect(() => {
        O && !j && g();
    }, [O, j, g]);
    let A = null,
        T = m.intl.string(m.t.d7b1p6);
    switch (t) {
        case 0:
            A = m.intl.string(m.t.Xiwf1Q);
            break;
        case 1:
            A = m.intl.string(m.t.GXvlU9);
            break;
        default:
            return (0, d.xb)(t);
    }
    if (null == A) return null;
    let E = async () => {
        v(!0);
        try {
            await u.A.joinGuild(i.id, {
                source: h.Q4z.CHAT_INPUT_BLOCKER,
            }),
                g();
        } catch (e) {
            v(!1);
        }
    };
    return (0, l.jsxs)(s.lGe, {
        className: f.kL,
        "aria-labelledby": y,
        children: [
            (0, l.jsx)("img", {
                alt: "",
                className: f.Sl,
                src: n(303528),
            }),
            (0, l.jsxs)("div", {
                className: f.Qs,
                children: [
                    (0, l.jsx)(s.Heading, {
                        variant: "heading-md/semibold",
                        id: y,
                        children: A,
                    }),
                    (0, l.jsx)(s.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: T,
                    }),
                    (0, l.jsxs)("div", {
                        className: f.UD,
                        children: [
                            (0, l.jsx)(s.Button, {
                                variant: "primary",
                                text: m.intl.string(m.t["9VLmlZ"]),
                                buttonRef: b,
                                onClick: E,
                                loading: O,
                            }),
                            (0, l.jsx)(a.$n, {
                                onClick: g,
                                look: a.$n.Looks.BLANK,
                                className: f.ZT,
                                children: m.intl.string(m.t["2m+Sqk"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
