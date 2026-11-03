c.d(a, { default: () => j });
var e = c(477900),
    i = c(582128),
    t = c(935399),
    r = c(554146),
    n = c(815021),
    d = c(534514),
    l = c(834730),
    o = c(821609),
    m = c(224640),
    N = c(793574),
    E = c(826673),
    x = c(501419),
    h = c(815996),
    b = c(49999),
    u = c(105292),
    f = c(616004);
function j(s) {
    let { onClose: a, ...c } = s,
        j = i.useRef(!1);
    ((0, t.Ay)(() => {
        (0, x.Wx)(r.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT);
    }),
        i.useEffect(
            () => () => {
                j.current ||
                    (0, E.Dr)(r.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, {
                        dismissAction: b.i.AUTO_DISMISS,
                        forceTrack: !0,
                    });
            },
            [],
        ));
    let p = i.useCallback(async () => {
            ((j.current = !0),
                (0, E.Dr)(r.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, {
                    dismissAction: b.i.USER_DISMISS,
                    forceTrack: !0,
                }),
                await a());
        }, [a]),
        C = i.useCallback(async () => {
            ((j.current = !0),
                (0, E.Dr)(r.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, {
                    dismissAction: b.i.TAKE_ACTION,
                    forceTrack: !0,
                }),
                (0, h.Cz)({ analyticsLocations: [], analyticsSource: N.A.COLLECTIBLES_SHOP }),
                await a());
        }, [a]);
    return (0, e.jsx)(m.d, {
        ...c,
        onClose: p,
        size: "lg",
        children: (0, e.jsxs)("div", {
            className: f.Qs,
            children: [
                (0, e.jsx)("div", {
                    className: f.Tp,
                    style: {
                        backgroundImage:
                            "url(https://cdn.discordapp.com/assets/content/1a3e6059912682527c3fdd25719dbee27c89e23c2c3aba2acc9348e951e5acad.jpg)",
                    },
                }),
                (0, e.jsx)("div", {
                    className: f.b,
                    children: (0, e.jsx)(n.J, { onClick: p, variant: "overlay-secondary" }),
                }),
                (0, e.jsxs)("div", {
                    className: f.rf,
                    children: [
                        (0, e.jsxs)("div", {
                            className: f.gn,
                            children: [
                                (0, e.jsx)(d.D, {
                                    variant: "display-md",
                                    color: "text-strong",
                                    className: f.DD,
                                    children: u.intl.string(u.t.W3MtdV),
                                }),
                                (0, e.jsx)(l.E, {
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    children: u.intl.string(u.t["v72/pr"]),
                                }),
                            ],
                        }),
                        (0, e.jsxs)("div", {
                            className: f.kR,
                            children: [
                                (0, e.jsxs)("div", {
                                    className: f.Nr,
                                    children: [
                                        (0, e.jsx)("img", {
                                            src: "https://cdn.discordapp.com/assets/content/2c67362cb5834dffecbfce5e2b725245d0120a869b0d5245f2d8d71f6a4f5be9.png",
                                            alt: "",
                                            className: f.wP,
                                        }),
                                        (0, e.jsxs)("div", {
                                            className: f.Mo,
                                            children: [
                                                (0, e.jsx)(d.D, {
                                                    variant: "heading-sm/semibold",
                                                    color: "text-strong",
                                                    children: u.intl.string(u.t.zOtryQ),
                                                }),
                                                (0, e.jsx)(l.E, {
                                                    variant: "body-sm/medium",
                                                    color: "text-muted",
                                                    children: u.intl.string(u.t.azn85l),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, e.jsxs)("div", {
                                    className: f.Nr,
                                    children: [
                                        (0, e.jsx)("img", {
                                            src: "https://cdn.discordapp.com/assets/content/ac2f61afc0a4de0533067bef49b716c95e9b05bba9ec10ffa634c5ed9662a533.png",
                                            alt: "",
                                            className: f.wP,
                                        }),
                                        (0, e.jsxs)("div", {
                                            className: f.Mo,
                                            children: [
                                                (0, e.jsx)(d.D, {
                                                    variant: "heading-sm/semibold",
                                                    color: "text-strong",
                                                    children: u.intl.string(u.t.Ky01Mq),
                                                }),
                                                (0, e.jsx)(l.E, {
                                                    variant: "body-sm/medium",
                                                    color: "text-muted",
                                                    children: u.intl.string(u.t.VgVDbe),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, e.jsx)("div", {
                            className: f.UD,
                            children: (0, e.jsx)(o.$, {
                                variant: "primary",
                                text: u.intl.string(u.t.c7U9yf),
                                onClick: C,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
