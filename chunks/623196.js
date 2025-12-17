n.d(t, { Z: () => O }), n(388685), n(457542);
var r = n(54381),
    i = n(473749),
    a = n(913527),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(668781),
    u = n(594174),
    d = n(63063),
    f = n(88658),
    p = n(398826),
    _ = n(575356),
    m = n(838436),
    h = n(726985),
    g = n(981631),
    E = n(388032),
    b = n(801860);
let y = (e) => {
    let { onConfirm: t } = e;
    (0, l.ZDy)(async () => {
        let { default: e } = await n.e("25120").then(n.bind(n, 926281));
        return (n) =>
            (0, r.jsx)(e, {
                modalProps: n,
                onConfirm: t,
            });
    });
};
function O() {
    let e = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        { currentHarvestType: t, awaitingInitialRequest: n } = (0, s.cj)([_.Z], () => ({
            currentHarvestType: _.Z.harvestType,
            awaitingInitialRequest: _.Z.requestingHarvest,
        })),
        [a, O] = i.useState(!1);
    if (null == e) return null;
    let v = (0, f.$6)(t, e) || n,
        S = null != t && o()().diff(o()(t.created_at), "days") < g.eBq,
        I = v && S,
        T = e.isStaff(),
        C = !e.verified,
        A = () => {
            y({
                onConfirm: (e) => {
                    O(!0),
                        (0, p.h)(e)
                            .then(
                                (e) => {
                                    null != e && null != e.body
                                        ? c.Z.show({ body: E.intl.string(E.t["6Nmv4i"]) })
                                        : c.Z.show({
                                              title: E.intl.string(E.t.OjbtDm),
                                              body: E.intl.string(E.t["0F5Jyt"]),
                                          });
                                },
                                (e) => {
                                    var t;
                                    let n =
                                        (null == e ? void 0 : e.message) ||
                                        (null == e || null == (t = e.body) ? void 0 : t.message) ||
                                        E.intl.string(E.t["0F5Jyt"]);
                                    c.Z.show({
                                        title: E.intl.string(E.t.OjbtDm),
                                        body: n,
                                    });
                                },
                            )
                            .finally(() => O(!1));
                },
            });
        };
    return (0, r.jsxs)(m.U, {
        setting: h.s6.PRIVACY_DATA_REQUEST_V2,
        children: [
            (0, r.jsx)(m.H, {
                header: E.intl.string(E.t.XAHCgJ),
                description: E.intl.format(E.t.P3kNfr, { helpdeskArticle: d.Z.getArticleURL(g.BhN.GDPR_REQUEST_DATA) }),
            }),
            I
                ? (0, r.jsx)(l.Zbd, {
                      className: b.card,
                      children: (0, r.jsx)(l.Text, {
                          variant: "text-md/normal",
                          children: E.intl.format(E.t.RNDlV9, {
                              date: o()(t.created_at).add(g.eBq, "days").format("MMMM Do YYYY"),
                          }),
                      }),
                  })
                : T
                  ? (0, r.jsx)(l.Zbd, {
                        className: b.card,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: E.intl.string(E.t.ZPQLH2),
                        }),
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            C
                                ? (0, r.jsx)(l.Zbd, {
                                      className: b.card,
                                      children: (0, r.jsx)(l.Text, {
                                          variant: "text-md/normal",
                                          children: E.intl.string(E.t.c1f88z),
                                      }),
                                  })
                                : null,
                            (0, r.jsx)("div", {
                                className: b.button,
                                children: (0, r.jsx)(l.Button, {
                                    variant: "primary",
                                    text: E.intl.string(E.t.dmBSKo),
                                    disabled: v,
                                    onClick: A,
                                    loading: a || n,
                                }),
                            }),
                        ],
                    }),
        ],
    });
}
