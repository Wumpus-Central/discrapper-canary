n.d(t, { default: () => j }), n(896048);
var s = n(627968),
    i = n(64700),
    a = n(397927),
    r = n(829219),
    l = n(890687),
    c = n(92246),
    d = n(646764),
    o = n(109174),
    u = n(524728),
    m = n(654487),
    x = n(985018),
    f = n(322956);
function h(e) {
    let { quest: t, rewardName: n, location: i, sourceQuestContent: r } = e;
    return (0, s.jsxs)("div", {
        className: f.hQ,
        children: [
            (0, s.jsx)("div", {
                className: f.tE,
                children: (0, s.jsx)(d.A, {
                    autoplay: !0,
                    className: f.Qq,
                    learnMoreStyle: null,
                    quest: t,
                    questContent: i,
                    sourceQuestContent: r,
                }),
            }),
            (0, s.jsxs)("div", {
                className: f.dD,
                children: [
                    (0, s.jsx)(a.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: f.R_,
                        children: x.intl.string(x.t["0/Yz+Y"]),
                    }),
                    (0, s.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: x.intl.format(x.t["v1u/zq"], { rewardName: n }),
                    }),
                ],
            }),
            (0, s.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: x.intl.string(x.t.OD6Tvf),
                disabled: !0,
                fullWidth: !0,
            }),
        ],
    });
}
function j(e) {
    var t, n;
    let { initialQuest: a, onClose: d, transitionState: x, location: f, sourceQuestContent: j } = e,
        g = null != (t = (0, l.C5)(a.id)) ? t : a,
        v = i.useMemo(() => (0, c.f)(g.config), [g]),
        N = (null == (n = g.userStatus) ? void 0 : n.claimedAt) != null,
        b = !g.preview && !N,
        [p, _] = i.useState(b ? "loading" : "claimed");
    i.useEffect(() => {
        if (b) {
            let e = (0, c.$s)(g.config);
            (0, r.Oq)(g.id, e, f)
                .then(() => _("claimed"))
                .catch(() => _("error"));
        }
    }, [g, f, b]);
    let y = "error" === p || null == v;
    return (0, s.jsx)(u.A, {
        onClose: d,
        transitionState: x,
        quest: g,
        sourceQuestContent: j,
        location: m.rE.INGAME_REWARD_MODAL,
        isRewardContentLoading: "loading" === p,
        rewardContentHasError: y,
        rewardContent: y
            ? null
            : (0, s.jsx)(o.A, {
                  rewardName: v.messages.name,
                  children: (0, s.jsx)(h, {
                      quest: g,
                      rewardName: v.messages.name,
                      location: f,
                      sourceQuestContent: j,
                  }),
              }),
    });
}
