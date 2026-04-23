t.r(s), t.d(s, { default: () => I });
var a = t(627968),
    r = t(64700),
    l = t(607399),
    i = t(17928),
    n = t(534514),
    c = t(834730),
    d = t(821609),
    _ = t(416298),
    u = t(854378),
    h = t(197111),
    m = t(10088),
    g = t(976860),
    x = t(829219),
    o = t(507107),
    N = t(561844),
    p = t(545986),
    E = t(654487),
    j = t(652215),
    A = t(613057),
    v = t(985018),
    k = t(471181),
    f = t(604880),
    T = t(318808);
i.Ay.initialize();
let C = l.Fr || l.v1;
function I(e) {
    let { match: s } = e,
        t = (0, i.bG)([m.A], () => m.A.getState("quests")),
        l = s.params.questId,
        I = (function (e) {
            let [s, t] = r.useState(null);
            return (
                r.useEffect(() => {
                    (0, x.xB)(e)
                        .then((e) => t({ status: "ok", value: e }))
                        .catch(() => t({ status: "error" }));
                }, [t, e]),
                s
            );
        })(l);
    r.useEffect(() => {
        C ||
            (null == t
                ? ((0, N.av)({
                      questId: l,
                      event: j.HAw.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT,
                      properties: {},
                      sourceQuestContent: o.uF.QUEST_HOME_DESKTOP,
                  }),
                  h.A.openNativeAppModal("quests", j.e$_.DEEP_LINK, { type: A.XK.QUEST_HOME, params: { questId: l } }))
                : t === j.fAW.OPEN_FAIL && (0, g.bG)({ pathname: j.BVt.QUEST_HOME, hash: l }));
    }, [t, l]);
    let L = r.useCallback(() => (0, p.QA)(l), [l]);
    if (C)
        return (0, a.jsxs)("div", {
            className: k.MY,
            children: [
                (0, a.jsx)("img", { className: k.Bg, src: T.Ay, alt: "" }),
                (0, a.jsx)("div", { className: k.r$, children: (0, a.jsx)("img", { src: f, alt: "" }) }),
                null != I &&
                    (0, a.jsxs)("div", {
                        className: k.Nr,
                        children: [
                            "ok" === I.status &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: k.rC,
                                            children: (0, a.jsx)("img", {
                                                src: `${E.CI}${l}/dark/${I.value.assets.gameTile}`,
                                                alt: "",
                                                className: k.o4,
                                            }),
                                        }),
                                        (0, a.jsx)(n.D, {
                                            variant: "heading-lg/semibold",
                                            color: "text-default",
                                            className: k.ky,
                                            children: I.value.messages.questName,
                                        }),
                                    ],
                                }),
                            (0, a.jsx)(c.E, {
                                variant: "text-md/normal",
                                className: k.G3,
                                children: v.intl.string(v.t.NweJI8),
                            }),
                            (0, a.jsx)(d.$, {
                                variant: "primary",
                                text: v.intl.string(v.t.UQvCf7),
                                fullWidth: !0,
                                onClick: L,
                            }),
                        ],
                    }),
            ],
        });
    let O = null == t || t === j.fAW.OPENING || t === j.fAW.OPEN_FAIL;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(_.A, { className: k.Lq, preserveAspectRatio: "xMinYMin slice" }),
            (0, a.jsx)("div", {
                className: k.kL,
                children: (0, a.jsx)(u.Ay, {
                    children: O
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(u.hE, { children: v.intl.string(v.t["Z+hCVU"]) }),
                                  (0, a.jsx)(u.CK, {}),
                              ],
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(u.hE, { className: k.Ns, children: v.intl.string(v.t.csrAMJ) }),
                                  (0, a.jsx)(u.tK, { children: v.intl.string(v.t.ghBJz9) }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
