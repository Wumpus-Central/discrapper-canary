i.d(s, { default: () => C });
var e = i(627968),
    a = i(64700),
    n = i(935399),
    c = i(554146),
    r = i(815021),
    l = i(297264),
    d = i(834730),
    o = i(821609),
    m = i(224640),
    g = i(793574),
    h = i(826673),
    E = i(367727),
    N = i(34332),
    x = i(892035),
    u = i(49999),
    f = i(375708),
    j = i(726209);
function C(t) {
    let { onClose: s, ...i } = t,
        C = (0, x.z$)("CollectiblesAnnouncementModal"),
        {
            leftTitle: p,
            leftBody: v,
            rightTitle: M,
            rightBody: L,
        } = (function (t) {
            let { showGiftingMarketing: s, showEaPremiumMarketing: i, showEaNonPremiumMarketing: e } = t,
                a = f.intl.string(f.t.zOtryQ),
                n = f.intl.string(f.t.azn85l);
            return i
                ? {
                      leftTitle: a,
                      leftBody: n,
                      rightTitle: f.intl.string(f.t.oSP2mU),
                      rightBody: f.intl.string(f.t["wEIT/w"]),
                  }
                : e
                  ? {
                        leftTitle: a,
                        leftBody: n,
                        rightTitle: f.intl.string(f.t["y/uSeV"]),
                        rightBody: f.intl.string(f.t.in6xhQ),
                    }
                  : s
                    ? {
                          leftTitle: a,
                          leftBody: n,
                          rightTitle: f.intl.string(f.t.Ky01Mq),
                          rightBody: f.intl.string(f.t.VgVDbe),
                      }
                    : {
                          leftTitle: a,
                          leftBody: n,
                          rightTitle: f.intl.string(f.t["47kRjL"]),
                          rightBody: f.intl.string(f.t.GcXi4M),
                      };
        })(C),
        T = f.intl.string(f.t.W3MtdV),
        S = C.showEaPremiumMarketing
            ? f.intl.string(f.t.RlBdFl)
            : C.showEaNonPremiumMarketing
              ? f.intl.string(f.t.NZe65e)
              : f.intl.string(f.t["v72/pr"]),
        b = a.useRef(!1);
    (0, n.Ay)(() => {
        (0, E.Wx)(c.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT);
    }),
        a.useEffect(
            () => () => {
                b.current ||
                    (0, h.Dr)(c.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, {
                        dismissAction: u.i.AUTO_DISMISS,
                        forceTrack: !0,
                    });
            },
            [],
        );
    let y = a.useCallback(async () => {
            (b.current = !0),
                (0, h.Dr)(c.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, {
                    dismissAction: u.i.USER_DISMISS,
                    forceTrack: !0,
                }),
                await s();
        }, [s]),
        _ = a.useCallback(async () => {
            (b.current = !0),
                (0, h.Dr)(c.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, {
                    dismissAction: u.i.TAKE_ACTION,
                    forceTrack: !0,
                }),
                (0, N.Cz)({ analyticsLocations: [], analyticsSource: g.A.COLLECTIBLES_SHOP }),
                await s();
        }, [s]);
    return (0, e.jsx)(m.d, {
        ...i,
        onClose: y,
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
                    children: (0, e.jsx)(r.J, { onClick: y, variant: "overlay-secondary" }),
                }),
                (0, e.jsxs)("div", {
                    className: j.rf,
                    children: [
                        (0, e.jsxs)("div", {
                            className: j.gn,
                            children: [
                                (0, e.jsx)(l.D, {
                                    variant: "display-md",
                                    color: "text-strong",
                                    className: j.DD,
                                    children: T,
                                }),
                                (0, e.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", children: S }),
                            ],
                        }),
                        (0, e.jsxs)("div", {
                            className: j.kR,
                            children: [
                                (0, e.jsxs)("div", {
                                    className: j.Nr,
                                    children: [
                                        (0, e.jsx)("img", {
                                            src: "https://cdn.discordapp.com/assets/content/ff11bf0b8a3268f05729829ced60caef13c95f175a53980f543212059e5af3f7.png",
                                            alt: "",
                                            className: j.wP,
                                        }),
                                        (0, e.jsxs)("div", {
                                            className: j.Mo,
                                            children: [
                                                (0, e.jsx)(l.D, {
                                                    variant: "heading-md/bold",
                                                    color: "text-strong",
                                                    children: p,
                                                }),
                                                (0, e.jsx)(d.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: v,
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
                                                (0, e.jsx)(l.D, {
                                                    variant: "heading-md/bold",
                                                    color: "text-strong",
                                                    children: M,
                                                }),
                                                (0, e.jsx)(d.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: L,
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
                                onClick: _,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
