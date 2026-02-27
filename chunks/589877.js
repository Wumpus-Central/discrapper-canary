t.r(s), t.d(s, { default: () => E }), t(323874), t(14289), t(35956);
var a = t(627968),
    r = t(64700),
    i = t(607399),
    l = t(311907),
    n = t(397927),
    c = t(416298),
    d = t(854378),
    m = t(197111),
    g = t(10088),
    h = t(976860),
    x = t(829219),
    u = t(890687),
    _ = t(545986),
    o = t(654487),
    N = t(652215),
    j = t(613057),
    p = t(985018),
    v = t(667426),
    f = t(604880),
    k = t(318808);
l.Ay.initialize();
let A = i.Fr || i.v1;
function E(e) {
    let { match: s } = e,
        t = (0, l.bG)([g.A], () => g.A.getState("quest-preview")),
        i = s.params.questId,
        E = (function (e) {
            let [s, t] = r.useState(null);
            return (
                r.useEffect(() => {
                    (0, x.xB)(e)
                        .then((e) => t({ status: "ok", value: e }))
                        .catch(() => t({ status: "error" }));
                }, [t, e]),
                s
            );
        })(i);
    r.useEffect(() => {
        if (!A) {
            if (null == t)
                m.A.openNativeAppModal("quest-preview", N.e$_.DEEP_LINK, {
                    type: j.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: i },
                });
            else if (t === N.fAW.OPEN_FAIL) {
                let e = new URLSearchParams();
                e.set(u.L1.TAB, u.NC.PREVIEW_TOOL),
                    e.set(u.L1.QUEST_ID, i),
                    (0, h.bG)({ pathname: N.BVt.QUEST_HOME, search: `?${e.toString()}` });
            }
        }
    }, [t, i]);
    let T = r.useCallback(() => (0, _.q$)(i), [i]);
    if (A)
        return (0, a.jsxs)("div", {
            className: v.MY,
            children: [
                (0, a.jsx)("img", { className: v.Bg, src: k.Ay, alt: "" }),
                (0, a.jsx)("div", { className: v.r$, children: (0, a.jsx)("img", { src: f, alt: "" }) }),
                null != E &&
                    (0, a.jsx)("div", {
                        className: v.Nr,
                        children:
                            "ok" === E.status
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: v.rC,
                                              children: (0, a.jsx)("img", {
                                                  src: `${o.CI}${i}/dark/${E.value.assets.gameTile}`,
                                                  alt: "",
                                                  className: v.o4,
                                              }),
                                          }),
                                          (0, a.jsx)(n.Heading, {
                                              variant: "heading-lg/semibold",
                                              color: "text-default",
                                              className: v.ky,
                                              children: E.value.messages.questName,
                                          }),
                                          (0, a.jsx)(n.Text, {
                                              variant: "text-md/normal",
                                              className: v.G3,
                                              children: p.intl.string(p.t.bWuKqh),
                                          }),
                                          (0, a.jsx)(n.Button, {
                                              variant: "primary",
                                              text: p.intl.string(p.t.UQvCf7),
                                              fullWidth: !0,
                                              onClick: T,
                                          }),
                                      ],
                                  })
                                : (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)(n.Heading, {
                                              variant: "heading-lg/semibold",
                                              color: "text-default",
                                              className: v.ky,
                                              children: p.intl.string(p.t.k4z4er),
                                          }),
                                          (0, a.jsx)(n.Text, {
                                              variant: "text-md/normal",
                                              className: v.G3,
                                              children: p.intl.string(p.t.gtZK09),
                                          }),
                                      ],
                                  }),
                    }),
            ],
        });
    let C = null == t || t === N.fAW.OPENING || t === N.fAW.OPEN_FAIL;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.A, { className: v.Lq, preserveAspectRatio: "xMinYMin slice" }),
            (0, a.jsx)("div", {
                className: v.kL,
                children: (0, a.jsx)(d.Ay, {
                    children: C
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(d.hE, { children: p.intl.string(p.t["Z+hCVU"]) }),
                                  (0, a.jsx)(d.CK, {}),
                              ],
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(d.hE, { className: v.Ns, children: p.intl.string(p.t.csrAMJ) }),
                                  (0, a.jsx)(d.tK, { children: p.intl.string(p.t.ghBJz9) }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
