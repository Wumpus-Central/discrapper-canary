t.r(s), t.d(s, { default: () => L }), t(323874), t(14289), t(35956);
var a = t(627968),
    r = t(64700),
    l = t(607399),
    i = t(311907),
    n = t(534514),
    c = t(834730),
    d = t(821609),
    m = t(416298),
    h = t(854378),
    g = t(197111),
    x = t(10088),
    u = t(976860),
    _ = t(829219),
    o = t(890687),
    N = t(545986),
    j = t(654487),
    p = t(652215),
    v = t(613057),
    E = t(985018),
    f = t(471181),
    k = t(604880),
    A = t(318808);
i.Ay.initialize();
let C = l.Fr || l.v1;
function L(e) {
    let { match: s } = e,
        t = (0, i.bG)([x.A], () => x.A.getState("quest-preview")),
        l = s.params.questId,
        L = (function (e) {
            let [s, t] = r.useState(null);
            return (
                r.useEffect(() => {
                    (0, _.xB)(e)
                        .then((e) => t({ status: "ok", value: e }))
                        .catch(() => t({ status: "error" }));
                }, [t, e]),
                s
            );
        })(l);
    r.useEffect(() => {
        if (!C) {
            if (null == t)
                g.A.openNativeAppModal("quest-preview", p.e$_.DEEP_LINK, {
                    type: v.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: l },
                });
            else if (t === p.fAW.OPEN_FAIL) {
                let e = new URLSearchParams();
                e.set(o.L1.TAB, o.NC.PREVIEW_TOOL),
                    e.set(o.L1.QUEST_ID, l),
                    (0, u.bG)({ pathname: p.BVt.QUEST_HOME, search: `?${e.toString()}` });
            }
        }
    }, [t, l]);
    let T = r.useCallback(() => (0, N.q$)(l), [l]);
    if (C)
        return (0, a.jsxs)("div", {
            className: f.MY,
            children: [
                (0, a.jsx)("img", { className: f.Bg, src: A.Ay, alt: "" }),
                (0, a.jsx)("div", { className: f.r$, children: (0, a.jsx)("img", { src: k, alt: "" }) }),
                null != L &&
                    (0, a.jsx)("div", {
                        className: f.Nr,
                        children:
                            "ok" === L.status
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: f.rC,
                                              children: (0, a.jsx)("img", {
                                                  src: `${j.CI}${l}/dark/${L.value.assets.gameTile}`,
                                                  alt: "",
                                                  className: f.o4,
                                              }),
                                          }),
                                          (0, a.jsx)(n.D, {
                                              variant: "heading-lg/semibold",
                                              color: "text-default",
                                              className: f.ky,
                                              children: L.value.messages.questName,
                                          }),
                                          (0, a.jsx)(c.E, {
                                              variant: "text-md/normal",
                                              className: f.G3,
                                              children: E.intl.string(E.t.bWuKqh),
                                          }),
                                          (0, a.jsx)(d.$, {
                                              variant: "primary",
                                              text: E.intl.string(E.t.UQvCf7),
                                              fullWidth: !0,
                                              onClick: T,
                                          }),
                                      ],
                                  })
                                : (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)(n.D, {
                                              variant: "heading-lg/semibold",
                                              color: "text-default",
                                              className: f.ky,
                                              children: E.intl.string(E.t.k4z4er),
                                          }),
                                          (0, a.jsx)(c.E, {
                                              variant: "text-md/normal",
                                              className: f.G3,
                                              children: E.intl.string(E.t.gtZK09),
                                          }),
                                      ],
                                  }),
                    }),
            ],
        });
    let b = null == t || t === p.fAW.OPENING || t === p.fAW.OPEN_FAIL;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(m.A, { className: f.Lq, preserveAspectRatio: "xMinYMin slice" }),
            (0, a.jsx)("div", {
                className: f.kL,
                children: (0, a.jsx)(h.Ay, {
                    children: b
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(h.hE, { children: E.intl.string(E.t["Z+hCVU"]) }),
                                  (0, a.jsx)(h.CK, {}),
                              ],
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(h.hE, { className: f.Ns, children: E.intl.string(E.t.csrAMJ) }),
                                  (0, a.jsx)(h.tK, { children: E.intl.string(E.t.ghBJz9) }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
