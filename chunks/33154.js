n.d(t, {
    Z: () => m,
    s: () => h,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(749210),
    c = n(313201),
    u = n(823379),
    d = n(41776),
    f = n(981631),
    _ = n(388032),
    p = n(29030),
    h = (function (e) {
        return (e[(e.CHAT = 0)] = "CHAT"), (e[(e.REACTIONS = 1)] = "REACTIONS"), e;
    })({});
let m = (e) => {
    let { type: t, guild: h, closePopout: m, ctaRef: g } = e,
        E = (0, c.Dt)(),
        [b, y] = i.useState(!1),
        O = (0, a.e7)([d.Z], () => d.Z.isLurking(h.id), [h.id]);
    i.useEffect(() => {
        b && !O && m();
    }, [b, O, m]);
    let v = null,
        I = _.intl.string(_.t.d7b1p6);
    switch (t) {
        case 0:
            v = _.intl.string(_.t.Xiwf1Q);
            break;
        case 1:
            v = _.intl.string(_.t.GXvlU9);
            break;
        default:
            return (0, u.vE)(t);
    }
    if (null == v) return null;
    let T = async () => {
        y(!0);
        try {
            await l.Z.joinGuild(h.id, { source: f.vtS.CHAT_INPUT_BLOCKER }), m();
        } catch (e) {
            y(!1);
        }
    };
    return (0, r.jsxs)(s.VqE, {
        className: p.container,
        "aria-labelledby": E,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                className: p.image,
                src: n(64395),
            }),
            (0, r.jsxs)("div", {
                className: p.content,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-md/semibold",
                        id: E,
                        children: v,
                    }),
                    (0, r.jsx)(s.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: I,
                    }),
                    (0, r.jsxs)("div", {
                        className: p.buttonContainer,
                        children: [
                            (0, r.jsx)(s.Button, {
                                variant: "primary",
                                text: _.intl.string(_.t["9VLmlZ"]),
                                buttonRef: g,
                                onClick: T,
                                loading: b,
                            }),
                            (0, r.jsx)(o.zx, {
                                onClick: m,
                                look: o.zx.Looks.BLANK,
                                className: p.cancel,
                                children: _.intl.string(_.t["2m+Sqk"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
