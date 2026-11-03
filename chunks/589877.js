(t.r(e), t.d(e, { default: () => C }), t(323874), t(14289), t(35956));
var a = t(477900),
    l = t(582128),
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
    j = t(427495),
    o = t(77870),
    N = t(617986),
    v = t(190107),
    p = t(652215),
    E = t(613057),
    f = t(105292),
    A = t(51100),
    k = t(604880),
    _ = t(318808);
r.Ay.initialize();
let b = i.Fr || i.v1;
function C(s) {
    let { match: e } = s,
        t = (0, r.bG)([x.A], () => x.A.getState("quest-preview")),
        i = e.params.questId,
        C = (function (s) {
            let [e, t] = l.useState(null);
            return (
                l.useEffect(() => {
                    (0, j.xB)(s)
                        .then((s) => t({ status: "ok", value: s }))
                        .catch(() => t({ status: "error" }));
                }, [t, s]),
                e
            );
        })(i);
    l.useEffect(() => {
        if (!b) {
            if (null == t)
                u.A.openNativeAppModal("quest-preview", p.e$_.DEEP_LINK, {
                    type: E.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: i },
                });
            else if (t === p.fAW.OPEN_FAIL) {
                let s = new URLSearchParams();
                (s.set(o.L1.TAB, o.NC.PREVIEW_TOOL),
                    s.set(o.L1.QUEST_ID, i),
                    (0, g.bG)({ pathname: p.BVt.QUEST_HOME, search: `?${s.toString()}` }));
            }
        }
    }, [t, i]);
    let L = l.useCallback(() => (0, N.q$)(i), [i]);
    if (b)
        return (0, a.jsxs)("div", {
            className: A.MY,
            children: [
                (0, a.jsx)("img", { className: A.Bg, src: _.Ay, alt: "" }),
                (0, a.jsx)("div", { className: A.r$, children: (0, a.jsx)("img", { src: k, alt: "" }) }),
                null != C &&
                    (0, a.jsx)("div", {
                        className: A.Nr,
                        children:
                            "ok" === C.status
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: A.rC,
                                              children: (0, a.jsx)("img", {
                                                  src: `${v.CI}${i}/dark/${C.value.assets.gameTile}`,
                                                  alt: "",
                                                  className: A.o4,
                                              }),
                                          }),
                                          (0, a.jsx)(n.D, {
                                              variant: "heading-lg/semibold",
                                              color: "text-default",
                                              className: A.ky,
                                              children: C.value.messages.questName,
                                          }),
                                          (0, a.jsx)(c.E, {
                                              variant: "body-md/normal",
                                              className: A.G3,
                                              children: f.intl.string(f.t.bWuKqh),
                                          }),
                                          (0, a.jsx)(d.$, {
                                              variant: "primary",
                                              text: f.intl.string(f.t.UQvCf7),
                                              fullWidth: !0,
                                              onClick: L,
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
                                              variant: "body-md/normal",
                                              className: A.G3,
                                              children: f.intl.string(f.t.gtZK09),
                                          }),
                                      ],
                                  }),
                    }),
            ],
        });
    let y = null == t || t === p.fAW.OPENING || t === p.fAW.OPEN_FAIL;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(h.A, { className: A.Lq, preserveAspectRatio: "xMinYMin slice" }),
            (0, a.jsx)("div", {
                className: A.kL,
                children: (0, a.jsx)(m.Ay, {
                    children: y
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
