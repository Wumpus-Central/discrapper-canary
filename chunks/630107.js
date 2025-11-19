a.r(t), a.d(t, { default: () => b }), a(388685), a(35282);
var s = a(54381),
    n = a(473749),
    i = a(873546),
    l = a(442837),
    r = a(481060),
    c = a(830064),
    d = a(388905),
    g = a(625128),
    o = a(362762),
    m = a(703656),
    u = a(22095),
    _ = a(617136),
    x = a(497505),
    p = a(110560),
    h = a(46140),
    E = a(981631),
    T = a(186901),
    j = a(388032),
    N = a(596009),
    k = a(74830),
    v = a(13299);
l.ZP.initialize();
let I = i.tq || i.Em;
function b(e) {
    let { match: t } = e,
        a = (0, l.e7)([o.Z], () => o.Z.getState("quests")),
        i = t.params.questId,
        b = (function (e) {
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
        })(i);
    n.useEffect(() => {
        I ||
            (null == a
                ? ((0, _.dA)({
                      questId: i,
                      event: E.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT,
                      properties: {},
                      sourceQuestContent: x.jn.QUEST_HOME_DESKTOP,
                  }),
                  g.Z.openNativeAppModal("quests", E.Etm.DEEP_LINK, {
                      type: T.jE.QUEST_HOME,
                      params: { questId: i },
                  }))
                : a === E.kEZ.OPEN_FAIL &&
                  (0, m.dL)({
                      pathname: E.Z5c.QUEST_HOME,
                      hash: i,
                  }));
    }, [a, i]);
    let f = n.useCallback(() => (0, p.openAppWithQuest)(i), [i]);
    if (I)
        return (0, s.jsxs)("div", {
            className: N.page,
            children: [
                (0, s.jsx)("img", {
                    className: N.bgImg,
                    src: v.ZP,
                    alt: "",
                }),
                (0, s.jsx)("div", {
                    className: N.logoContainer,
                    children: (0, s.jsx)("img", {
                        src: k,
                        alt: "",
                    }),
                }),
                null != b &&
                    (0, s.jsxs)("div", {
                        className: N.card,
                        children: [
                            "ok" === b.status &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: N.gameTile,
                                            children: (0, s.jsx)("img", {
                                                src: ""
                                                    .concat(h.HO)
                                                    .concat(i, "/dark/")
                                                    .concat(b.value.assets.gameTile),
                                                alt: "",
                                                className: N.gameTileImg,
                                            }),
                                        }),
                                        (0, s.jsx)(r.Heading, {
                                            variant: "heading-lg/semibold",
                                            color: "text-default",
                                            className: N.headingText,
                                            children: b.value.messages.questName,
                                        }),
                                    ],
                                }),
                            (0, s.jsx)(r.Text, {
                                variant: "text-md/normal",
                                className: N.bodyText,
                                children: j.intl.string(j.t.NweJI8),
                            }),
                            (0, s.jsx)(r.Button, {
                                variant: "primary",
                                text: j.intl.string(j.t.UQvCf7),
                                fullWidth: !0,
                                onClick: f,
                            }),
                        ],
                    }),
            ],
        });
    let O = null == a || a === E.kEZ.OPENING || a === E.kEZ.OPEN_FAIL;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(c.Z, {
                className: N.backgroundArtwork,
                preserveAspectRatio: "xMinYMin slice",
            }),
            (0, s.jsx)("div", {
                className: N.container,
                children: (0, s.jsx)(d.ZP, {
                    children: O
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(d.Dx, { children: j.intl.string(j.t["Z+hCVU"]) }),
                                  (0, s.jsx)(d.Hh, {}),
                              ],
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(d.Dx, {
                                      className: N.appOpenedTitle,
                                      children: j.intl.string(j.t.csrAMJ),
                                  }),
                                  (0, s.jsx)(d.DK, { children: j.intl.string(j.t.ghBJz9) }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
