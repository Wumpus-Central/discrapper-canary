i.d(s, { default: () => j });
var e = i(627968),
    n = i(64700),
    a = i(554146),
    r = i(815021),
    c = i(534514),
    l = i(834730),
    d = i(821609),
    o = i(224640),
    m = i(793574),
    g = i(826673),
    h = i(859040),
    x = i(892035),
    N = i(49999),
    u = i(375708),
    E = i(321513);
function j(t) {
    let { onClose: s, ...i } = t,
        j = (0, x.z$)("CollectiblesAnnouncementModal"),
        {
            leftTitle: p,
            leftBody: f,
            rightTitle: C,
            rightBody: b,
        } = (function (t) {
            let { showGiftingMarketing: s, showEaPremiumMarketing: i, showEaNonPremiumMarketing: e } = t,
                n = u.intl.string(u.t.zOtryQ),
                a = u.intl.string(u.t.azn85l);
            return i
                ? {
                      leftTitle: n,
                      leftBody: a,
                      rightTitle: u.intl.string(u.t.oSP2mU),
                      rightBody: u.intl.string(u.t["wEIT/w"]),
                  }
                : e
                  ? {
                        leftTitle: n,
                        leftBody: a,
                        rightTitle: u.intl.string(u.t["y/uSeV"]),
                        rightBody: u.intl.string(u.t.in6xhQ),
                    }
                  : s
                    ? {
                          leftTitle: n,
                          leftBody: a,
                          rightTitle: u.intl.string(u.t.Ky01Mq),
                          rightBody: u.intl.string(u.t.VgVDbe),
                      }
                    : {
                          leftTitle: n,
                          leftBody: a,
                          rightTitle: u.intl.string(u.t["47kRjL"]),
                          rightBody: u.intl.string(u.t.GcXi4M),
                      };
        })(j),
        v = u.intl.string(u.t.W3MtdV),
        M = j.showEaPremiumMarketing
            ? u.intl.string(u.t.RlBdFl)
            : j.showEaNonPremiumMarketing
              ? u.intl.string(u.t.NZe65e)
              : u.intl.string(u.t["v72/pr"]),
        S = n.useRef(!1);
    n.useEffect(
        () => () => {
            S.current || (0, g.Dr)(a.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, { dismissAction: N.i.AUTO_DISMISS });
        },
        [],
    );
    let L = n.useCallback(async () => {
            (S.current = !0),
                (0, g.Dr)(a.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, { dismissAction: N.i.USER_DISMISS }),
                await s();
        }, [s]),
        T = n.useCallback(async () => {
            (S.current = !0),
                (0, g.Dr)(a.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, { dismissAction: N.i.TAKE_ACTION }),
                (0, h.Cz)({ analyticsLocations: [], analyticsSource: m.A.COLLECTIBLES_SHOP }),
                await s();
        }, [s]);
    return (0, e.jsx)(o.d, {
        ...i,
        onClose: L,
        size: "lg",
        children: (0, e.jsxs)("div", {
            className: E.Qs,
            children: [
                (0, e.jsx)("div", {
                    className: E.Tp,
                    style: {
                        backgroundImage:
                            "url(https://cdn.discordapp.com/assets/content/c8e00daa39097d8c1b17f84ed0b64006632781f037ee256bb2daf5f46cd927d9.png)",
                    },
                }),
                (0, e.jsx)("div", { className: E.b, children: (0, e.jsx)(r.J, { onClick: L }) }),
                (0, e.jsxs)("div", {
                    className: E.rf,
                    children: [
                        (0, e.jsxs)("div", {
                            className: E.gn,
                            children: [
                                (0, e.jsx)(c.D, {
                                    variant: "display-md",
                                    color: "text-strong",
                                    className: E.DD,
                                    children: v,
                                }),
                                (0, e.jsx)(l.E, { variant: "text-sm/medium", color: "text-muted", children: M }),
                            ],
                        }),
                        (0, e.jsxs)("div", {
                            className: E.kR,
                            children: [
                                (0, e.jsxs)("div", {
                                    className: E.Nr,
                                    children: [
                                        (0, e.jsx)("img", {
                                            src: "https://cdn.discordapp.com/assets/content/5a34dac591a5f2ead61786f6ebecec5838e63fab95d43648700ae55fb71a75f8.png",
                                            alt: "",
                                            className: E.wP,
                                        }),
                                        (0, e.jsxs)("div", {
                                            className: E.Mo,
                                            children: [
                                                (0, e.jsx)(c.D, {
                                                    variant: "heading-md/bold",
                                                    color: "text-strong",
                                                    children: p,
                                                }),
                                                (0, e.jsx)(l.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: f,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, e.jsxs)("div", {
                                    className: E.Nr,
                                    children: [
                                        (0, e.jsx)("img", {
                                            src: "https://cdn.discordapp.com/assets/content/ee655ef94ac877346a238640f34ee5e2ee41284b7b5b0c64e1f29301ac97ddd7.png",
                                            alt: "",
                                            className: E.wP,
                                        }),
                                        (0, e.jsxs)("div", {
                                            className: E.Mo,
                                            children: [
                                                (0, e.jsx)(c.D, {
                                                    variant: "heading-md/bold",
                                                    color: "text-strong",
                                                    children: C,
                                                }),
                                                (0, e.jsx)(l.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: b,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, e.jsx)("div", {
                            className: E.UD,
                            children: (0, e.jsx)(d.$, {
                                variant: "primary",
                                text: u.intl.string(u.t.c7U9yf),
                                onClick: T,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
