t.r(e), t.d(e, { default: () => O });
var a = t(627968),
    l = t(64700),
    r = t(607399),
    i = t(17928),
    n = t(534514),
    c = t(834730),
    d = t(821609),
    u = t(416298),
    h = t(854378),
    m = t(197111),
    x = t(10088),
    N = t(976860),
    E = t(340124),
    j = t(24001),
    g = t(561844),
    o = t(617986),
    p = t(190107),
    v = t(652215),
    A = t(613057),
    _ = t(375708),
    f = t(471181),
    k = t(604880),
    C = t(318808);
i.Ay.initialize();
let I = r.Fr || r.v1;
function O(s) {
    let { match: e } = s,
        t = (0, i.bG)([x.A], () => x.A.getState("quests")),
        r = e.params.questId,
        O = (function (s) {
            let [e, t] = l.useState(null);
            return (
                l.useEffect(() => {
                    (0, E.xB)(s)
                        .then((s) => t({ status: "ok", value: s }))
                        .catch(() => t({ status: "error" }));
                }, [t, s]),
                e
            );
        })(r);
    l.useEffect(() => {
        I ||
            (null == t
                ? ((0, g.av)({
                      questId: r,
                      event: v.HAw.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT,
                      properties: {},
                      sourceQuestContent: j.uF.QUEST_HOME_DESKTOP,
                  }),
                  m.A.openNativeAppModal("quests", v.e$_.DEEP_LINK, { type: A.XK.QUEST_HOME, params: { questId: r } }))
                : t === v.fAW.OPEN_FAIL && (0, N.bG)({ pathname: v.BVt.QUEST_HOME, hash: r }));
    }, [t, r]);
    let S = l.useCallback(() => (0, o.QA)(r), [r]);
    if (I)
        return (0, a.jsxs)("div", {
            className: f.MY,
            children: [
                (0, a.jsx)("img", { className: f.Bg, src: C.Ay, alt: "" }),
                (0, a.jsx)("div", { className: f.r$, children: (0, a.jsx)("img", { src: k, alt: "" }) }),
                null != O &&
                    (0, a.jsxs)("div", {
                        className: f.Nr,
                        children: [
                            "ok" === O.status &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: f.rC,
                                            children: (0, a.jsx)("img", {
                                                src: `${p.CI}${r}/dark/${O.value.assets.gameTile}`,
                                                alt: "",
                                                className: f.o4,
                                            }),
                                        }),
                                        (0, a.jsx)(n.D, {
                                            variant: "heading-lg/semibold",
                                            color: "text-default",
                                            className: f.ky,
                                            children: O.value.messages.questName,
                                        }),
                                    ],
                                }),
                            (0, a.jsx)(c.E, {
                                variant: "text-md/normal",
                                className: f.G3,
                                children: _.intl.string(_.t.NweJI8),
                            }),
                            (0, a.jsx)(d.$, {
                                variant: "primary",
                                text: _.intl.string(_.t.UQvCf7),
                                fullWidth: !0,
                                onClick: S,
                            }),
                        ],
                    }),
            ],
        });
    let T = null == t || t === v.fAW.OPENING || t === v.fAW.OPEN_FAIL;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(u.A, { className: f.Lq, preserveAspectRatio: "xMinYMin slice" }),
            (0, a.jsx)("div", {
                className: f.kL,
                children: (0, a.jsx)(h.Ay, {
                    children: T
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(h.hE, { children: _.intl.string(_.t["Z+hCVU"]) }),
                                  (0, a.jsx)(h.CK, {}),
                              ],
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(h.hE, { className: f.Ns, children: _.intl.string(_.t.csrAMJ) }),
                                  (0, a.jsx)(h.tK, { children: _.intl.string(_.t.ghBJz9) }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
