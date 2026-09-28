c.d(a, { default: () => p });
var e = c(477900),
    t = c(582128),
    i = c(935399),
    r = c(554146),
    n = c(815021),
    d = c(297264),
    l = c(834730),
    o = c(821609),
    m = c(224640),
    x = c(793574),
    N = c(826673),
    E = c(367727),
    h = c(815996),
    u = c(49999),
    f = c(375708),
    j = c(616004);
function p(s) {
    let { onClose: a, ...c } = s,
        p = t.useRef(!1);
    ((0, i.Ay)(() => {
        (0, E.Wx)(r.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT);
    }),
        t.useEffect(
            () => () => {
                p.current ||
                    (0, N.Dr)(r.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, {
                        dismissAction: u.i.AUTO_DISMISS,
                        forceTrack: !0,
                    });
            },
            [],
        ));
    let C = t.useCallback(async () => {
            ((p.current = !0),
                (0, N.Dr)(r.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, {
                    dismissAction: u.i.USER_DISMISS,
                    forceTrack: !0,
                }),
                await a());
        }, [a]),
        g = t.useCallback(async () => {
            ((p.current = !0),
                (0, N.Dr)(r.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, {
                    dismissAction: u.i.TAKE_ACTION,
                    forceTrack: !0,
                }),
                (0, h.Cz)({ analyticsLocations: [], analyticsSource: x.A.COLLECTIBLES_SHOP }),
                await a());
        }, [a]);
    return (0, e.jsx)(m.d, {
        ...c,
        onClose: C,
        size: "lg",
        children: (0, e.jsxs)("div", {
            className: j.Qs,
            children: [
                (0, e.jsx)("div", {
                    className: j.Tp,
                    style: {
                        backgroundImage:
                            "url(https://cdn.discordapp.com/assets/content/1a3e6059912682527c3fdd25719dbee27c89e23c2c3aba2acc9348e951e5acad.jpg)",
                    },
                }),
                (0, e.jsx)("div", {
                    className: j.b,
                    children: (0, e.jsx)(n.J, { onClick: C, variant: "overlay-secondary" }),
                }),
                (0, e.jsxs)("div", {
                    className: j.rf,
                    children: [
                        (0, e.jsxs)("div", {
                            className: j.gn,
                            children: [
                                (0, e.jsx)(d.D, {
                                    variant: "display-md",
                                    color: "text-strong",
                                    className: j.DD,
                                    children: f.intl.string(f.t.W3MtdV),
                                }),
                                (0, e.jsx)(l.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: f.intl.string(f.t["v72/pr"]),
                                }),
                            ],
                        }),
                        (0, e.jsxs)("div", {
                            className: j.kR,
                            children: [
                                (0, e.jsxs)("div", {
                                    className: j.Nr,
                                    children: [
                                        (0, e.jsx)("img", {
                                            src: "https://cdn.discordapp.com/assets/content/2c67362cb5834dffecbfce5e2b725245d0120a869b0d5245f2d8d71f6a4f5be9.png",
                                            alt: "",
                                            className: j.wP,
                                        }),
                                        (0, e.jsxs)("div", {
                                            className: j.Mo,
                                            children: [
                                                (0, e.jsx)(d.D, {
                                                    variant: "heading-md/bold",
                                                    color: "text-strong",
                                                    children: f.intl.string(f.t.zOtryQ),
                                                }),
                                                (0, e.jsx)(l.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: f.intl.string(f.t.azn85l),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, e.jsxs)("div", {
                                    className: j.Nr,
                                    children: [
                                        (0, e.jsx)("img", {
                                            src: "https://cdn.discordapp.com/assets/content/ac2f61afc0a4de0533067bef49b716c95e9b05bba9ec10ffa634c5ed9662a533.png",
                                            alt: "",
                                            className: j.wP,
                                        }),
                                        (0, e.jsxs)("div", {
                                            className: j.Mo,
                                            children: [
                                                (0, e.jsx)(d.D, {
                                                    variant: "heading-md/bold",
                                                    color: "text-strong",
                                                    children: f.intl.string(f.t.Ky01Mq),
                                                }),
                                                (0, e.jsx)(l.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: f.intl.string(f.t.VgVDbe),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, e.jsx)("div", {
                            className: j.UD,
                            children: (0, e.jsx)(o.$, {
                                variant: "primary",
                                text: f.intl.string(f.t.c7U9yf),
                                onClick: g,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
