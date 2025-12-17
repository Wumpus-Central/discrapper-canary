n.d(t, {
    Z: () => h,
    s: () => m,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(749210),
    c = n(313201),
    u = n(823379),
    d = n(41776),
    f = n(981631),
    p = n(388032),
    _ = n(739255),
    m = (function (e) {
        return (e[(e.CHAT = 0)] = "CHAT"), (e[(e.REACTIONS = 1)] = "REACTIONS"), e;
    })({});
let h = (e) => {
    let { type: t, guild: m, closePopout: h, ctaRef: g } = e,
        E = (0, c.Dt)(),
        [b, y] = i.useState(!1),
        O = (0, a.e7)([d.Z], () => d.Z.isLurking(m.id), [m.id]);
    i.useEffect(() => {
        b && !O && h();
    }, [b, O, h]);
    let v = null,
        S = p.intl.string(p.t.d7b1p6);
    switch (t) {
        case 0:
            v = p.intl.string(p.t.Xiwf1Q);
            break;
        case 1:
            v = p.intl.string(p.t.GXvlU9);
            break;
        default:
            return (0, u.vE)(t);
    }
    if (null == v) return null;
    let I = async () => {
        y(!0);
        try {
            await l.Z.joinGuild(m.id, { source: f.vtS.CHAT_INPUT_BLOCKER }), h();
        } catch (e) {
            y(!1);
        }
    };
    return (0, r.jsxs)(s.VqE, {
        className: _.container,
        "aria-labelledby": E,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                className: _.image,
                src: n(64395),
            }),
            (0, r.jsxs)("div", {
                className: _.content,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-md/semibold",
                        id: E,
                        children: v,
                    }),
                    (0, r.jsx)(s.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: S,
                    }),
                    (0, r.jsxs)("div", {
                        className: _.buttonContainer,
                        children: [
                            (0, r.jsx)(s.Button, {
                                variant: "primary",
                                text: p.intl.string(p.t["9VLmlZ"]),
                                buttonRef: g,
                                onClick: I,
                                loading: b,
                            }),
                            (0, r.jsx)(o.zx, {
                                onClick: h,
                                look: o.zx.Looks.BLANK,
                                className: _.cancel,
                                children: p.intl.string(p.t["2m+Sqk"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
