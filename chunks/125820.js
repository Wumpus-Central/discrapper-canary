t.r(s), t.d(s, { default: () => f });
var a = t(627968),
    r = t(64700),
    l = t(607399),
    i = t(311907),
    n = t(397927),
    c = t(416298),
    d = t(854378),
    _ = t(197111),
    u = t(10088),
    h = t(976860),
    m = t(829219),
    g = t(341915),
    x = t(561844),
    o = t(545986),
    N = t(654487),
    p = t(652215),
    E = t(613057),
    j = t(985018),
    A = t(667426),
    v = t(604880),
    k = t(318808);
i.Ay.initialize();
let T = l.Fr || l.v1;
function f(e) {
    let { match: s } = e,
        t = (0, i.bG)([u.A], () => u.A.getState("quests")),
        l = s.params.questId,
        f = (function (e) {
            let [s, t] = r.useState(null);
            return (
                r.useEffect(() => {
                    (0, m.xB)(e)
                        .then((e) => t({ status: "ok", value: e }))
                        .catch(() => t({ status: "error" }));
                }, [t, e]),
                s
            );
        })(l);
    r.useEffect(() => {
        T ||
            (null == t
                ? ((0, x.av)({
                      questId: l,
                      event: p.HAw.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT,
                      properties: {},
                      sourceQuestContent: g.uF.QUEST_HOME_DESKTOP,
                  }),
                  _.A.openNativeAppModal("quests", p.e$_.DEEP_LINK, { type: E.XK.QUEST_HOME, params: { questId: l } }))
                : t === p.fAW.OPEN_FAIL && (0, h.bG)({ pathname: p.BVt.QUEST_HOME, hash: l }));
    }, [t, l]);
    let C = r.useCallback(() => (0, o.QA)(l), [l]);
    if (T)
        return (0, a.jsxs)("div", {
            className: A.MY,
            children: [
                (0, a.jsx)("img", { className: A.Bg, src: k.Ay, alt: "" }),
                (0, a.jsx)("div", { className: A.r$, children: (0, a.jsx)("img", { src: v, alt: "" }) }),
                null != f &&
                    (0, a.jsxs)("div", {
                        className: A.Nr,
                        children: [
                            "ok" === f.status &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: A.rC,
                                            children: (0, a.jsx)("img", {
                                                src: `${N.CI}${l}/dark/${f.value.assets.gameTile}`,
                                                alt: "",
                                                className: A.o4,
                                            }),
                                        }),
                                        (0, a.jsx)(n.Heading, {
                                            variant: "heading-lg/semibold",
                                            color: "text-default",
                                            className: A.ky,
                                            children: f.value.messages.questName,
                                        }),
                                    ],
                                }),
                            (0, a.jsx)(n.Text, {
                                variant: "text-md/normal",
                                className: A.G3,
                                children: j.intl.string(j.t.NweJI8),
                            }),
                            (0, a.jsx)(n.Button, {
                                variant: "primary",
                                text: j.intl.string(j.t.UQvCf7),
                                fullWidth: !0,
                                onClick: C,
                            }),
                        ],
                    }),
            ],
        });
    let I = null == t || t === p.fAW.OPENING || t === p.fAW.OPEN_FAIL;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.A, { className: A.Lq, preserveAspectRatio: "xMinYMin slice" }),
            (0, a.jsx)("div", {
                className: A.kL,
                children: (0, a.jsx)(d.Ay, {
                    children: I
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(d.hE, { children: j.intl.string(j.t["Z+hCVU"]) }),
                                  (0, a.jsx)(d.CK, {}),
                              ],
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(d.hE, { className: A.Ns, children: j.intl.string(j.t.csrAMJ) }),
                                  (0, a.jsx)(d.tK, { children: j.intl.string(j.t.ghBJz9) }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
