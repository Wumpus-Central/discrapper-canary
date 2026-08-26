e.d(t, { default: () => C });
var c = e(477900),
    i = e(582128),
    a = e(935399),
    n = e(554146),
    r = e(815021),
    d = e(297264),
    l = e(834730),
    o = e(821609),
    m = e(224640),
    x = e(793574),
    N = e(826673),
    h = e(367727),
    E = e(839534),
    g = e(366959),
    u = e(49999),
    f = e(375708),
    j = e(616004);
function C(s) {
    let { onClose: t, ...e } = s,
        {
            leftTitle: C,
            leftBody: p,
            rightTitle: b,
            rightBody: v,
        } = (function (s) {
            let { showGiftingMarketing: t } = s,
                e = f.intl.string(f.t.zOtryQ),
                c = f.intl.string(f.t.azn85l);
            return t
                ? {
                      leftTitle: e,
                      leftBody: c,
                      rightTitle: f.intl.string(f.t.Ky01Mq),
                      rightBody: f.intl.string(f.t.VgVDbe),
                  }
                : {
                      leftTitle: e,
                      leftBody: c,
                      rightTitle: f.intl.string(f.t["47kRjL"]),
                      rightBody: f.intl.string(f.t.GcXi4M),
                  };
        })((0, g.z$)("CollectiblesAnnouncementModal")),
        L = f.intl.string(f.t.W3MtdV),
        M = i.useRef(!1);
    (0, a.Ay)(() => {
        (0, h.Wx)(n.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT);
    }),
        i.useEffect(
            () => () => {
                M.current ||
                    (0, N.Dr)(n.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, {
                        dismissAction: u.i.AUTO_DISMISS,
                        forceTrack: !0,
                    });
            },
            [],
        );
    let S = i.useCallback(async () => {
            (M.current = !0),
                (0, N.Dr)(n.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, {
                    dismissAction: u.i.USER_DISMISS,
                    forceTrack: !0,
                }),
                await t();
        }, [t]),
        T = i.useCallback(async () => {
            (M.current = !0),
                (0, N.Dr)(n.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, {
                    dismissAction: u.i.TAKE_ACTION,
                    forceTrack: !0,
                }),
                (0, E.Cz)({ analyticsLocations: [], analyticsSource: x.A.COLLECTIBLES_SHOP }),
                await t();
        }, [t]);
    return (0, c.jsx)(m.d, {
        ...e,
        onClose: S,
        size: "lg",
        children: (0, c.jsxs)("div", {
            className: j.Qs,
            children: [
                (0, c.jsx)("div", {
                    className: j.Tp,
                    style: {
                        backgroundImage:
                            "url(https://cdn.discordapp.com/assets/content/1a3e6059912682527c3fdd25719dbee27c89e23c2c3aba2acc9348e951e5acad.jpg)",
                    },
                }),
                (0, c.jsx)("div", {
                    className: j.b,
                    children: (0, c.jsx)(r.J, { onClick: S, variant: "overlay-secondary" }),
                }),
                (0, c.jsxs)("div", {
                    className: j.rf,
                    children: [
                        (0, c.jsxs)("div", {
                            className: j.gn,
                            children: [
                                (0, c.jsx)(d.D, {
                                    variant: "display-md",
                                    color: "text-strong",
                                    className: j.DD,
                                    children: L,
                                }),
                                (0, c.jsx)(l.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: f.intl.string(f.t["v72/pr"]),
                                }),
                            ],
                        }),
                        (0, c.jsxs)("div", {
                            className: j.kR,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: j.Nr,
                                    children: [
                                        (0, c.jsx)("img", {
                                            src: "https://cdn.discordapp.com/assets/content/2c67362cb5834dffecbfce5e2b725245d0120a869b0d5245f2d8d71f6a4f5be9.png",
                                            alt: "",
                                            className: j.wP,
                                        }),
                                        (0, c.jsxs)("div", {
                                            className: j.Mo,
                                            children: [
                                                (0, c.jsx)(d.D, {
                                                    variant: "heading-md/bold",
                                                    color: "text-strong",
                                                    children: C,
                                                }),
                                                (0, c.jsx)(l.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: p,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: j.Nr,
                                    children: [
                                        (0, c.jsx)("img", {
                                            src: "https://cdn.discordapp.com/assets/content/ac2f61afc0a4de0533067bef49b716c95e9b05bba9ec10ffa634c5ed9662a533.png",
                                            alt: "",
                                            className: j.wP,
                                        }),
                                        (0, c.jsxs)("div", {
                                            className: j.Mo,
                                            children: [
                                                (0, c.jsx)(d.D, {
                                                    variant: "heading-md/bold",
                                                    color: "text-strong",
                                                    children: b,
                                                }),
                                                (0, c.jsx)(l.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: v,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, c.jsx)("div", {
                            className: j.UD,
                            children: (0, c.jsx)(o.$, {
                                variant: "primary",
                                text: f.intl.string(f.t.c7U9yf),
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
