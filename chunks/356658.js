e.d(s, { default: () => h });
var n = e(54381);
e(473749);
var a = e(392711),
    i = e.n(a),
    l = e(35387),
    o = e(780384),
    r = e(481060),
    c = e(410030),
    d = e(313201),
    g = e(388032),
    f = e(732836),
    m = e(755524),
    u = e(788572),
    p = e(262529);
let x = [e(4921), e(663416), e(838295)],
    b = [m, u, p],
    v = [
        () => g.intl.string(g.t["w2o/60"]),
        () => g.intl.string(g.t.FiAvKg),
        () => g.intl.string(g.t.vKUFek),
        () => g.intl.string(g.t.veQl5T),
        () => g.intl.string(g.t.Pxb7BR),
        () => g.intl.string(g.t["W03w++"]),
        () => g.intl.string(g.t["95HTb5"]),
        () => g.intl.string(g.t["+XFelz"]),
        () => g.intl.string(g.t.hedHel),
        () => g.intl.string(g.t.jgC65t),
    ],
    h = (t) => {
        let { transitionState: s, onClose: e } = t,
            a = (0, c.ZP)(),
            m = (0, d.Dt)(),
            u = (0, o.wj)(a) ? b : x,
            p = (0, l.Z)(() => i().sample(u), [u]),
            h = (0, l.Z)(() => i().sample(v), []);
        return (0, n.jsxs)(r.Y0X, {
            transitionState: s,
            className: f.root,
            "aria-labelledby": m,
            parentComponent: "FollowSuccessModal",
            children: [
                (0, n.jsx)("img", {
                    alt: "",
                    src: p,
                    className: f.image,
                }),
                (0, n.jsxs)(r.hzk, {
                    className: f.modal,
                    children: [
                        (0, n.jsx)(r.Heading, {
                            variant: "heading-xl/semibold",
                            className: f.followSuccessHeader,
                            id: m,
                            children: h(),
                        }),
                        (0, n.jsx)(r.Text, {
                            color: "text-muted",
                            variant: "text-md/medium",
                            className: f.body,
                            children: g.intl.string(g.t["2QbSea"]),
                        }),
                        (0, n.jsx)(r.Button, {
                            variant: "primary",
                            text: g.intl.string(g.t["+IrDzN"]),
                            onClick: e,
                        }),
                    ],
                }),
            ],
        });
    };
