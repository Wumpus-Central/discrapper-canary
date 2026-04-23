n.d(t, { default: () => C });
var r = n(627968),
    a = n(64700),
    s = n(534514),
    o = n(834730),
    i = n(821609),
    l = n(829219),
    _ = n(890687),
    c = n(92246),
    d = n(646764),
    u = n(109174),
    f = n(524728),
    p = n(654487),
    m = n(985018),
    h = n(577777);
function x(e) {
    let { quest: t, rewardName: n, location: a, sourceQuestContent: l } = e;
    return (0, r.jsxs)("div", {
        className: h.hQ,
        children: [
            (0, r.jsx)("div", {
                className: h.tE,
                children: (0, r.jsx)(d.A, {
                    autoplay: !0,
                    className: h.Qq,
                    learnMoreStyle: null,
                    quest: t,
                    questContent: a,
                    sourceQuestContent: l,
                }),
            }),
            (0, r.jsxs)("div", {
                className: h.dD,
                children: [
                    (0, r.jsx)(s.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: h.R_,
                        children: m.intl.string(m.t["0/Yz+Y"]),
                    }),
                    (0, r.jsx)(o.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: m.intl.format(m.t["v1u/zq"], { rewardName: n }),
                    }),
                ],
            }),
            (0, r.jsx)(i.$, {
                variant: "secondary",
                size: "sm",
                text: m.intl.string(m.t.OD6Tvf),
                disabled: !0,
                fullWidth: !0,
            }),
        ],
    });
}
function C(e) {
    let { initialQuest: t, onClose: n, transitionState: s, location: o, sourceQuestContent: i } = e,
        d = (0, _.C5)(t.id) ?? t,
        m = a.useMemo(() => (0, c.f)(d.config), [d]),
        h = d.userStatus?.claimedAt != null,
        C = !d.preview && !h,
        [b, g] = a.useState(C ? "loading" : "claimed");
    a.useEffect(() => {
        if (C) {
            let e = (0, c.$s)(d.config);
            (0, l.Oq)(d.id, e, o)
                .then(() => g("claimed"))
                .catch(() => g("error"));
        }
    }, [d, o, C]);
    let w = "error" === b || null == m;
    return (0, r.jsx)(f.A, {
        onClose: n,
        transitionState: s,
        quest: d,
        sourceQuestContent: i,
        location: p.rE.INGAME_REWARD_MODAL,
        isRewardContentLoading: "loading" === b,
        rewardContentHasError: w,
        rewardContent: w
            ? null
            : (0, r.jsx)(u.A, {
                  rewardName: m.messages.name,
                  children: (0, r.jsx)(x, {
                      quest: d,
                      rewardName: m.messages.name,
                      location: o,
                      sourceQuestContent: i,
                  }),
              }),
    });
}
