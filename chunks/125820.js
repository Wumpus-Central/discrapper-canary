a.r(s), a.d(s, { default: () => k }), a(896048), a(747238);
var t = a(627968),
    l = a(64700),
    r = a(607399),
    c = a(311907),
    n = a(397927),
    i = a(416298),
    d = a(854378),
    u = a(197111),
    h = a(10088),
    m = a(976860),
    x = a(829219),
    N = a(216456),
    f = a(341915),
    o = a(545986),
    E = a(654487),
    _ = a(652215),
    g = a(613057),
    j = a(985018),
    p = a(667426),
    b = a(604880),
    v = a(318808);
c.Ay.initialize();
let A = r.Fr || r.v1;
function k(e) {
    let { match: s } = e,
        a = (0, c.bG)([h.A], () => h.A.getState("quests")),
        r = s.params.questId,
        k = (function (e) {
            let [s, a] = l.useState(null);
            return (
                l.useEffect(() => {
                    (0, x.xB)(e)
                        .then((e) =>
                            a({
                                status: "ok",
                                value: e,
                            }),
                        )
                        .catch(() => a({ status: "error" }));
                }, [a, e]),
                s
            );
        })(r);
    l.useEffect(() => {
        A ||
            (null == a
                ? ((0, N.av)({
                      questId: r,
                      event: _.HAw.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT,
                      properties: {},
                      sourceQuestContent: f.uF.QUEST_HOME_DESKTOP,
                  }),
                  u.A.openNativeAppModal("quests", _.e$_.DEEP_LINK, {
                      type: g.XK.QUEST_HOME,
                      params: { questId: r },
                  }))
                : a === _.fAW.OPEN_FAIL &&
                  (0, m.bG)({
                      pathname: _.BVt.QUEST_HOME,
                      hash: r,
                  }));
    }, [a, r]);
    let C = l.useCallback(() => (0, o.QA)(r), [r]);
    if (A)
        return (0, t.jsxs)("div", {
            className: p.MY,
            children: [
                (0, t.jsx)("img", {
                    className: p.Bg,
                    src: v.Ay,
                    alt: "",
                }),
                (0, t.jsx)("div", {
                    className: p.r$,
                    children: (0, t.jsx)("img", {
                        src: b,
                        alt: "",
                    }),
                }),
                null != k &&
                    (0, t.jsxs)("div", {
                        className: p.Nr,
                        children: [
                            "ok" === k.status &&
                                (0, t.jsxs)(t.Fragment, {
                                    children: [
                                        (0, t.jsx)("div", {
                                            className: p.rC,
                                            children: (0, t.jsx)("img", {
                                                src: ""
                                                    .concat(E.CI)
                                                    .concat(r, "/dark/")
                                                    .concat(k.value.assets.gameTile),
                                                alt: "",
                                                className: p.o4,
                                            }),
                                        }),
                                        (0, t.jsx)(n.Heading, {
                                            variant: "heading-lg/semibold",
                                            color: "text-default",
                                            className: p.ky,
                                            children: k.value.messages.questName,
                                        }),
                                    ],
                                }),
                            (0, t.jsx)(n.Text, {
                                variant: "text-md/normal",
                                className: p.G3,
                                children: j.intl.string(j.t.NweJI8),
                            }),
                            (0, t.jsx)(n.Button, {
                                variant: "primary",
                                text: j.intl.string(j.t.UQvCf7),
                                fullWidth: !0,
                                onClick: C,
                            }),
                        ],
                    }),
            ],
        });
    let I = null == a || a === _.fAW.OPENING || a === _.fAW.OPEN_FAIL;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(i.A, {
                className: p.Lq,
                preserveAspectRatio: "xMinYMin slice",
            }),
            (0, t.jsx)("div", {
                className: p.kL,
                children: (0, t.jsx)(d.Ay, {
                    children: I
                        ? (0, t.jsxs)(t.Fragment, {
                              children: [
                                  (0, t.jsx)(d.hE, { children: j.intl.string(j.t["Z+hCVU"]) }),
                                  (0, t.jsx)(d.CK, {}),
                              ],
                          })
                        : (0, t.jsxs)(t.Fragment, {
                              children: [
                                  (0, t.jsx)(d.hE, {
                                      className: p.Ns,
                                      children: j.intl.string(j.t.csrAMJ),
                                  }),
                                  (0, t.jsx)(d.tK, { children: j.intl.string(j.t.ghBJz9) }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
