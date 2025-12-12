a.r(t), a.d(t, { default: () => I }), a(388685), a(35282);
var s = a(54381),
    n = a(473749),
    c = a(873546),
    i = a(442837),
    l = a(481060),
    r = a(830064),
    d = a(388905),
    g = a(625128),
    o = a(362762),
    m = a(703656),
    u = a(22095),
    x = a(617136),
    p = a(49436),
    h = a(110560),
    E = a(324805),
    _ = a(981631),
    T = a(186901),
    b = a(388032),
    j = a(227633),
    N = a(74830),
    k = a(770354);
i.ZP.initialize();
let v = c.tq || c.Em;
function I(e) {
    let { match: t } = e,
        a = (0, i.e7)([o.Z], () => o.Z.getState("quests")),
        c = t.params.questId,
        I = (function (e) {
            let [t, a] = n.useState(null);
            return (
                n.useEffect(() => {
                    (0, u.gU)(e)
                        .then((e) =>
                            a({
                                status: "ok",
                                value: e,
                            }),
                        )
                        .catch(() => a({ status: "error" }));
                }, [a, e]),
                t
            );
        })(c);
    n.useEffect(() => {
        v ||
            (null == a
                ? ((0, x.dA)({
                      questId: c,
                      event: _.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT,
                      properties: {},
                      sourceQuestContent: p.jn.QUEST_HOME_DESKTOP,
                  }),
                  g.Z.openNativeAppModal("quests", _.Etm.DEEP_LINK, {
                      type: T.jE.QUEST_HOME,
                      params: { questId: c },
                  }))
                : a === _.kEZ.OPEN_FAIL &&
                  (0, m.dL)({
                      pathname: _.Z5c.QUEST_HOME,
                      hash: c,
                  }));
    }, [a, c]);
    let f = n.useCallback(() => (0, h.openAppWithQuest)(c), [c]);
    if (v)
        return (0, s.jsxs)("div", {
            className: j.page,
            children: [
                (0, s.jsx)("img", {
                    className: j.bgImg,
                    src: k.ZP,
                    alt: "",
                }),
                (0, s.jsx)("div", {
                    className: j.logoContainer,
                    children: (0, s.jsx)("img", {
                        src: N,
                        alt: "",
                    }),
                }),
                null != I &&
                    (0, s.jsxs)("div", {
                        className: j.card,
                        children: [
                            "ok" === I.status &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: j.gameTile,
                                            children: (0, s.jsx)("img", {
                                                src: ""
                                                    .concat(E.HO)
                                                    .concat(c, "/dark/")
                                                    .concat(I.value.assets.gameTile),
                                                alt: "",
                                                className: j.gameTileImg,
                                            }),
                                        }),
                                        (0, s.jsx)(l.Heading, {
                                            variant: "heading-lg/semibold",
                                            color: "text-default",
                                            className: j.headingText,
                                            children: I.value.messages.questName,
                                        }),
                                    ],
                                }),
                            (0, s.jsx)(l.Text, {
                                variant: "text-md/normal",
                                className: j.bodyText,
                                children: b.intl.string(b.t.NweJI8),
                            }),
                            (0, s.jsx)(l.Button, {
                                variant: "primary",
                                text: b.intl.string(b.t.UQvCf7),
                                fullWidth: !0,
                                onClick: f,
                            }),
                        ],
                    }),
            ],
        });
    let O = null == a || a === _.kEZ.OPENING || a === _.kEZ.OPEN_FAIL;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(r.Z, {
                className: j.backgroundArtwork,
                preserveAspectRatio: "xMinYMin slice",
            }),
            (0, s.jsx)("div", {
                className: j.container,
                children: (0, s.jsx)(d.ZP, {
                    children: O
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(d.Dx, { children: b.intl.string(b.t["Z+hCVU"]) }),
                                  (0, s.jsx)(d.Hh, {}),
                              ],
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(d.Dx, {
                                      className: j.appOpenedTitle,
                                      children: b.intl.string(b.t.csrAMJ),
                                  }),
                                  (0, s.jsx)(d.DK, { children: b.intl.string(b.t.ghBJz9) }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
