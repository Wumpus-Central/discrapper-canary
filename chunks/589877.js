t.r(s), t.d(s, { default: () => L }), t(323874), t(14289), t(35956);
var a = t(627968),
    l = t(64700),
    i = t(607399),
    r = t(17928),
    n = t(534514),
    c = t(834730),
    d = t(821609),
    h = t(416298),
    m = t(854378),
    u = t(197111),
    x = t(10088),
    g = t(976860),
    j = t(340124),
    N = t(31587),
    o = t(617986),
    v = t(190107),
    p = t(652215),
    E = t(613057),
    f = t(375708),
    A = t(471181),
    k = t(604880),
    _ = t(318808);
r.Ay.initialize();
let C = i.Fr || i.v1;
function L(e) {
    let { match: s } = e,
        t = (0, r.bG)([x.A], () => x.A.getState("quest-preview")),
        i = s.params.questId,
        L = (function (e) {
            let [s, t] = l.useState(null);
            return (
                l.useEffect(() => {
                    (0, j.xB)(e)
                        .then((e) => t({ status: "ok", value: e }))
                        .catch(() => t({ status: "error" }));
                }, [t, e]),
                s
            );
        })(i);
    l.useEffect(() => {
        if (!C) {
            if (null == t)
                u.A.openNativeAppModal("quest-preview", p.e$_.DEEP_LINK, {
                    type: E.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: i },
                });
            else if (t === p.fAW.OPEN_FAIL) {
                let e = new URLSearchParams();
                e.set(N.L1.TAB, N.NC.PREVIEW_TOOL),
                    e.set(N.L1.QUEST_ID, i),
                    (0, g.bG)({ pathname: p.BVt.QUEST_HOME, search: `?${e.toString()}` });
            }
        }
    }, [t, i]);
    let I = l.useCallback(() => (0, o.q$)(i), [i]);
    if (C)
        return (0, a.jsxs)("div", {
            className: A.MY,
            children: [
                (0, a.jsx)("img", { className: A.Bg, src: _.Ay, alt: "" }),
                (0, a.jsx)("div", { className: A.r$, children: (0, a.jsx)("img", { src: k, alt: "" }) }),
                null != L &&
                    (0, a.jsx)("div", {
                        className: A.Nr,
                        children:
                            "ok" === L.status
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: A.rC,
                                              children: (0, a.jsx)("img", {
                                                  src: `${v.CI}${i}/dark/${L.value.assets.gameTile}`,
                                                  alt: "",
                                                  className: A.o4,
                                              }),
                                          }),
                                          (0, a.jsx)(n.D, {
                                              variant: "heading-lg/semibold",
                                              color: "text-default",
                                              className: A.ky,
                                              children: L.value.messages.questName,
                                          }),
                                          (0, a.jsx)(c.E, {
                                              variant: "text-md/normal",
                                              className: A.G3,
                                              children: f.intl.string(f.t.bWuKqh),
                                          }),
                                          (0, a.jsx)(d.$, {
                                              variant: "primary",
                                              text: f.intl.string(f.t.UQvCf7),
                                              fullWidth: !0,
                                              onClick: I,
                                          }),
                                      ],
                                  })
                                : (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)(n.D, {
                                              variant: "heading-lg/semibold",
                                              color: "text-default",
                                              className: A.ky,
                                              children: f.intl.string(f.t.k4z4er),
                                          }),
                                          (0, a.jsx)(c.E, {
                                              variant: "text-md/normal",
                                              className: A.G3,
                                              children: f.intl.string(f.t.gtZK09),
                                          }),
                                      ],
                                  }),
                    }),
            ],
        });
    let b = null == t || t === p.fAW.OPENING || t === p.fAW.OPEN_FAIL;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(h.A, { className: A.Lq, preserveAspectRatio: "xMinYMin slice" }),
            (0, a.jsx)("div", {
                className: A.kL,
                children: (0, a.jsx)(m.Ay, {
                    children: b
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(m.hE, { children: f.intl.string(f.t["Z+hCVU"]) }),
                                  (0, a.jsx)(m.CK, {}),
                              ],
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(m.hE, { className: A.Ns, children: f.intl.string(f.t.csrAMJ) }),
                                  (0, a.jsx)(m.tK, { children: f.intl.string(f.t.ghBJz9) }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
