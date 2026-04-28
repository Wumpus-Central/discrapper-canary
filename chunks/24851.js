e.d(s, { default: () => N });
var i = e(627968),
    n = e(64700),
    a = e(554146),
    r = e(815021),
    c = e(534514),
    l = e(834730),
    d = e(821609),
    o = e(224640),
    m = e(793574),
    g = e(826673),
    _ = e(693477),
    b = e(892035),
    h = e(49999),
    x = e(985018),
    u = e(321513);
function N(t) {
    let { onClose: s, ...e } = t,
        N = (0, b.z$)("CollectiblesAnnouncementModal"),
        {
            leftTitle: E,
            leftBody: p,
            rightTitle: f,
            rightBody: j,
        } = (function (t) {
            let { showGiftingMarketing: s, showEaPremiumMarketing: e, showEaNonPremiumMarketing: i } = t;
            if (e || i)
                return {
                    leftTitle: x.intl.string(x.t.oSiQEt),
                    leftBody: x.intl.string(x.t.fWKc6Q),
                    rightTitle: x.intl.string(x.t.zwMF7A),
                    rightBody: x.intl.string(x.t.L4n9Yt),
                };
            let n = x.intl.string(x.t["jTr73/"]),
                a = x.intl.string(x.t.o2XCyN);
            return s
                ? {
                      leftTitle: n,
                      leftBody: a,
                      rightTitle: x.intl.string(x.t.Ky01Mq),
                      rightBody: x.intl.string(x.t.VgVDbe),
                  }
                : {
                      leftTitle: n,
                      leftBody: a,
                      rightTitle: x.intl.string(x.t["47kRjL"]),
                      rightBody: x.intl.string(x.t.GcXi4M),
                  };
        })(N),
        C = N.showEaPremiumMarketing || N.showEaNonPremiumMarketing,
        v = C ? x.intl.string(x.t.ssAHoO) : x.intl.string(x.t.mxLBpg),
        M = C ? x.intl.string(x.t["+bjgSs"]) : x.intl.string(x.t["v72/pr"]),
        L = n.useRef(!1);
    n.useEffect(
        () => () => {
            L.current || (0, g.Dr)(a.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, { dismissAction: h.i.AUTO_DISMISS });
        },
        [],
    );
    let y = n.useCallback(async () => {
            (L.current = !0),
                (0, g.Dr)(a.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, { dismissAction: h.i.USER_DISMISS }),
                await s();
        }, [s]),
        S = n.useCallback(async () => {
            (L.current = !0),
                (0, g.Dr)(a.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, { dismissAction: h.i.TAKE_ACTION }),
                (0, _.Cz)({ analyticsLocations: [], analyticsSource: m.A.COLLECTIBLES_SHOP }),
                await s();
        }, [s]);
    return (0, i.jsx)(o.d, {
        ...e,
        onClose: y,
        size: "lg",
        children: (0, i.jsxs)("div", {
            className: u.Qs,
            children: [
                (0, i.jsx)("div", {
                    className: u.Tp,
                    style: {
                        backgroundImage:
                            "url(https://cdn.discordapp.com/assets/content/c8e00daa39097d8c1b17f84ed0b64006632781f037ee256bb2daf5f46cd927d9.png)",
                    },
                }),
                (0, i.jsx)("div", {
                    className: u.b,
                    children: (0, i.jsx)(r.J, { onClick: y, variant: "overlay-secondary" }),
                }),
                (0, i.jsxs)("div", {
                    className: u.rf,
                    children: [
                        (0, i.jsxs)("div", {
                            className: u.gn,
                            children: [
                                (0, i.jsx)(c.D, {
                                    variant: "display-md",
                                    color: "text-strong",
                                    className: u.DD,
                                    children: v,
                                }),
                                (0, i.jsx)(l.E, { variant: "text-sm/medium", color: "text-muted", children: M }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: u.kR,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: u.Nr,
                                    children: [
                                        (0, i.jsx)("img", {
                                            src: "https://cdn.discordapp.com/assets/content/5a34dac591a5f2ead61786f6ebecec5838e63fab95d43648700ae55fb71a75f8.png",
                                            alt: "",
                                            className: u.wP,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: u.Mo,
                                            children: [
                                                (0, i.jsx)(c.D, {
                                                    variant: "heading-md/bold",
                                                    color: "text-strong",
                                                    children: E,
                                                }),
                                                (0, i.jsx)(l.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: p,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: u.Nr,
                                    children: [
                                        (0, i.jsx)("img", {
                                            src: "https://cdn.discordapp.com/assets/content/ee655ef94ac877346a238640f34ee5e2ee41284b7b5b0c64e1f29301ac97ddd7.png",
                                            alt: "",
                                            className: u.wP,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: u.Mo,
                                            children: [
                                                (0, i.jsx)(c.D, {
                                                    variant: "heading-md/bold",
                                                    color: "text-strong",
                                                    children: f,
                                                }),
                                                (0, i.jsx)(l.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: j,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: u.UD,
                            children: (0, i.jsx)(d.$, {
                                variant: "primary",
                                text: x.intl.string(x.t.c7U9yf),
                                onClick: S,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
