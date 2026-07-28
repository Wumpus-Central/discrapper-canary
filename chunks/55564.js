i.d(s, { default: () => C });
var e = i(477900),
    n = i(582128),
    a = i(935399),
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
            leftBody: b,
            rightTitle: v,
            rightBody: M,
        } = (function (t) {
            let { showGiftingMarketing: s, showEaPremiumMarketing: i, showEaNonPremiumMarketing: e } = t,
                n = f.intl.string(f.t.zOtryQ),
                a = f.intl.string(f.t.azn85l);
            return i
                ? {
                      leftTitle: n,
                      leftBody: a,
                      rightTitle: f.intl.string(f.t.oSP2mU),
                      rightBody: f.intl.string(f.t["wEIT/w"]),
                  }
                : e
                  ? {
                        leftTitle: n,
                        leftBody: a,
                        rightTitle: f.intl.string(f.t["y/uSeV"]),
                        rightBody: f.intl.string(f.t.in6xhQ),
                    }
                  : s
                    ? {
                          leftTitle: n,
                          leftBody: a,
                          rightTitle: f.intl.string(f.t.Ky01Mq),
                          rightBody: f.intl.string(f.t.VgVDbe),
                      }
                    : {
                          leftTitle: n,
                          leftBody: a,
                          rightTitle: f.intl.string(f.t["47kRjL"]),
                          rightBody: f.intl.string(f.t.GcXi4M),
                      };
        })(C),
        L = f.intl.string(f.t.W3MtdV),
        T = C.showEaPremiumMarketing
            ? f.intl.string(f.t.RlBdFl)
            : C.showEaNonPremiumMarketing
              ? f.intl.string(f.t.NZe65e)
              : f.intl.string(f.t["v72/pr"]),
        S = n.useRef(!1);
    (0, a.Ay)(() => {
        (0, E.Wx)(c.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT);
    }),
        n.useEffect(
            () => () => {
                S.current ||
                    (0, h.Dr)(c.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, {
                        dismissAction: u.i.AUTO_DISMISS,
                        forceTrack: !0,
                    });
            },
            [],
        );
    let y = n.useCallback(async () => {
            (S.current = !0),
                (0, h.Dr)(c.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, {
                    dismissAction: u.i.USER_DISMISS,
                    forceTrack: !0,
                }),
                await s();
        }, [s]),
        _ = n.useCallback(async () => {
            (S.current = !0),
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
                                    children: L,
                                }),
                                (0, e.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", children: T }),
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
                                                (0, e.jsx)(l.D, {
                                                    variant: "heading-md/bold",
                                                    color: "text-strong",
                                                    children: p,
                                                }),
                                                (0, e.jsx)(d.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: b,
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
                                                    children: v,
                                                }),
                                                (0, e.jsx)(d.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: M,
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
