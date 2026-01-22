a.r(s),
    a.d(s, {
        default: () => A,
    }),
    a(896048),
    a(747238),
    a(680155),
    a(323874),
    a(14289),
    a(35956);
var t = a(627968),
    l = a(64700),
    r = a(607399),
    i = a(311907),
    n = a(397927),
    c = a(416298),
    d = a(854378),
    h = a(197111),
    m = a(10088),
    x = a(976860),
    u = a(829219),
    f = a(890687),
    g = a(545986),
    o = a(654487),
    N = a(652215),
    j = a(613057),
    b = a(985018),
    p = a(667426),
    v = a(604880),
    _ = a(318808);
i.Ay.initialize();
let E = r.Fr || r.v1;

function A(e) {
    let { match: s } = e,
        a = (0, i.bG)([m.A], () => m.A.getState("quest-preview")),
        r = s.params.questId,
        A = (function (e) {
            let [s, a] = l.useState(null);
            return (
                l.useEffect(() => {
                    (0, u.xB)(e)
                        .then((e) =>
                            a({
                                status: "ok",
                                value: e,
                            }),
                        )
                        .catch(() =>
                            a({
                                status: "error",
                            }),
                        );
                }, [a, e]),
                s
            );
        })(r);
    l.useEffect(() => {
        if (!E) {
            if (null == a)
                h.A.openNativeAppModal("quest-preview", N.e$_.DEEP_LINK, {
                    type: j.XK.QUEST_PREVIEW_TOOL,
                    params: {
                        questId: r,
                    },
                });
            else if (a === N.fAW.OPEN_FAIL) {
                let e = new URLSearchParams();
                e.set(f.L1.TAB, f.NC.PREVIEW_TOOL),
                    e.set(f.L1.QUEST_ID, r),
                    (0, x.bG)({
                        pathname: N.BVt.QUEST_HOME_V2,
                        search: "?".concat(e.toString()),
                    });
            }
        }
    }, [a, r]);
    let k = l.useCallback(() => (0, g.q$)(r), [r]);
    if (E)
        return (0, t.jsxs)("div", {
            className: p.MY,
            children: [
                (0, t.jsx)("img", {
                    className: p.Bg,
                    src: _.Ay,
                    alt: "",
                }),
                (0, t.jsx)("div", {
                    className: p.r$,
                    children: (0, t.jsx)("img", {
                        src: v,
                        alt: "",
                    }),
                }),
                null != A &&
                    (0, t.jsx)("div", {
                        className: p.Nr,
                        children:
                            "ok" === A.status
                                ? (0, t.jsxs)(t.Fragment, {
                                      children: [
                                          (0, t.jsx)("div", {
                                              className: p.rC,
                                              children: (0, t.jsx)("img", {
                                                  src: ""
                                                      .concat(o.CI)
                                                      .concat(r, "/dark/")
                                                      .concat(A.value.assets.gameTile),
                                                  alt: "",
                                                  className: p.o4,
                                              }),
                                          }),
                                          (0, t.jsx)(n.Heading, {
                                              variant: "heading-lg/semibold",
                                              color: "text-default",
                                              className: p.ky,
                                              children: A.value.messages.questName,
                                          }),
                                          (0, t.jsx)(n.Text, {
                                              variant: "text-md/normal",
                                              className: p.G3,
                                              children: b.intl.string(b.t.bWuKqh),
                                          }),
                                          (0, t.jsx)(n.Button, {
                                              variant: "primary",
                                              text: b.intl.string(b.t.UQvCf7),
                                              fullWidth: !0,
                                              onClick: k,
                                          }),
                                      ],
                                  })
                                : (0, t.jsxs)(t.Fragment, {
                                      children: [
                                          (0, t.jsx)(n.Heading, {
                                              variant: "heading-lg/semibold",
                                              color: "text-default",
                                              className: p.ky,
                                              children: b.intl.string(b.t.k4z4er),
                                          }),
                                          (0, t.jsx)(n.Text, {
                                              variant: "text-md/normal",
                                              className: p.G3,
                                              children: b.intl.string(b.t.gtZK09),
                                          }),
                                      ],
                                  }),
                    }),
            ],
        });
    let L = null == a || a === N.fAW.OPENING || a === N.fAW.OPEN_FAIL;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(c.A, {
                className: p.Lq,
                preserveAspectRatio: "xMinYMin slice",
            }),
            (0, t.jsx)("div", {
                className: p.kL,
                children: (0, t.jsx)(d.Ay, {
                    children: L
                        ? (0, t.jsxs)(t.Fragment, {
                              children: [
                                  (0, t.jsx)(d.hE, {
                                      children: b.intl.string(b.t["Z+hCVU"]),
                                  }),
                                  (0, t.jsx)(d.CK, {}),
                              ],
                          })
                        : (0, t.jsxs)(t.Fragment, {
                              children: [
                                  (0, t.jsx)(d.hE, {
                                      className: p.Ns,
                                      children: b.intl.string(b.t.csrAMJ),
                                  }),
                                  (0, t.jsx)(d.tK, {
                                      children: b.intl.string(b.t.ghBJz9),
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
