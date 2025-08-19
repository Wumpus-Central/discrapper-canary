n.d(t, {
    Z: () => b,
    s: () => g,
}),
    n(388685);
var i,
    l = n(951288),
    r = n(647438),
    o = n(442837),
    a = n(755721),
    s = n(481060),
    c = n(749210),
    u = n(313201),
    d = n(823379),
    h = n(41776),
    p = n(981631),
    m = n(388032),
    f = n(576385),
    g = (((i = {})[(i.CHAT = 0)] = "CHAT"), (i[(i.REACTIONS = 1)] = "REACTIONS"), i);
let b = (e) => {
    let { type: t, guild: i, closePopout: g, ctaRef: b } = e,
        j = (0, u.Dt)(),
        [v, O] = r.useState(!1),
        y = (0, o.e7)([h.Z], () => h.Z.isLurking(i.id), [i.id]);
    r.useEffect(() => {
        v && !y && g();
    }, [v, y, g]);
    let T = null,
        x = m.intl.string(m.t.d7b1p6);
    switch (t) {
        case 0:
            T = m.intl.string(m.t.Xiwf1d);
            break;
        case 1:
            T = m.intl.string(m.t.GXvlU1);
            break;
        default:
            return (0, d.vE)(t);
    }
    if (null == T) return null;
    let S = async () => {
        O(!0);
        try {
            await c.Z.joinGuild(i.id, { source: p.vtS.CHAT_INPUT_BLOCKER }), g();
        } catch (e) {
            O(!1);
        }
    };
    return (0, l.jsxs)(s.VqE, {
        className: f.container,
        "aria-labelledby": j,
        children: [
            (0, l.jsx)("img", {
                alt: "",
                className: f.image,
                src: n(64395),
            }),
            (0, l.jsxs)("div", {
                className: f.content,
                children: [
                    (0, l.jsx)(s.X6q, {
                        variant: "heading-md/semibold",
                        id: j,
                        children: T,
                    }),
                    (0, l.jsx)(s.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: x,
                    }),
                    (0, l.jsxs)("div", {
                        className: f.buttonContainer,
                        children: [
                            (0, l.jsx)(s.zxk, {
                                variant: "primary",
                                text: m.intl.string(m.t["9VLmlZ"]),
                                buttonRef: b,
                                onClick: S,
                                loading: v,
                            }),
                            (0, l.jsx)(a.zx, {
                                onClick: g,
                                look: a.zx.Looks.BLANK,
                                className: f.cancel,
                                children: m.intl.string(m.t["2m+Sqq"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
