n.d(t, { A: () => O }), n(896048), n(492834);
var r = n(627968),
    i = n(64700),
    a = n(989349),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(157559),
    u = n(287809),
    d = n(975571),
    f = n(115063),
    p = n(104954),
    _ = n(975648),
    h = n(871930),
    m = n(531525),
    g = n(652215),
    E = n(985018),
    b = n(937474);
let y = (e) => {
    let { onConfirm: t } = e;
    (0, l.mMO)(async () => {
        let { default: e } = await n.e("98171").then(n.bind(n, 481398));
        return (n) =>
            (0, r.jsx)(e, {
                modalProps: n,
                onConfirm: t,
            });
    });
};
function O() {
    let e = (0, o.bG)([u.default], () => u.default.getCurrentUser()),
        { currentHarvestType: t, awaitingInitialRequest: n } = (0, o.cf)([_.A], () => ({
            currentHarvestType: _.A.harvestType,
            awaitingInitialRequest: _.A.requestingHarvest,
        })),
        [a, O] = i.useState(!1);
    if (null == e) return null;
    let A = (0, f.Oj)(t, e) || n,
        v = null != t && s()().diff(s()(t.created_at), "days") < g.n83,
        S = A && v,
        I = e.isStaff(),
        T = !e.verified,
        C = () => {
            y({
                onConfirm: (e) => {
                    O(!0),
                        (0, p.$)(e)
                            .then(
                                (e) => {
                                    null != e && null != e.body
                                        ? c.A.show({
                                              title: E.intl.string(E.t.i2iul5),
                                              body: E.intl.string(E.t["6Nmv4i"]),
                                          })
                                        : c.A.show({
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
                                    c.A.show({
                                        title: E.intl.string(E.t.OjbtDm),
                                        body: n,
                                    });
                                },
                            )
                            .finally(() => O(!1));
                },
            });
        };
    return (0, r.jsxs)(h.h, {
        setting: m.H.PRIVACY_DATA_REQUEST_V2,
        children: [
            (0, r.jsx)(h._, {
                header: E.intl.string(E.t.XAHCgJ),
                description: E.intl.format(E.t.P3kNfr, { helpdeskArticle: d.A.getArticleURL(g.MVz.GDPR_REQUEST_DATA) }),
            }),
            S
                ? (0, r.jsx)(l.ZpM, {
                      className: b.N,
                      children: (0, r.jsx)(l.Text, {
                          variant: "text-md/normal",
                          children: E.intl.format(E.t.RNDlV9, {
                              date: s()(t.created_at).add(g.n83, "days").format("MMMM Do YYYY"),
                          }),
                      }),
                  })
                : I
                  ? (0, r.jsx)(l.ZpM, {
                        className: b.N,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: E.intl.string(E.t.ZPQLH2),
                        }),
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            T
                                ? (0, r.jsx)(l.ZpM, {
                                      className: b.N,
                                      children: (0, r.jsx)(l.Text, {
                                          variant: "text-md/normal",
                                          children: E.intl.string(E.t.c1f88z),
                                      }),
                                  })
                                : null,
                            (0, r.jsx)("div", {
                                className: b.x,
                                children: (0, r.jsx)(l.Button, {
                                    variant: "primary",
                                    text: E.intl.string(E.t.dmBSKo),
                                    disabled: A,
                                    onClick: C,
                                    loading: a || n,
                                }),
                            }),
                        ],
                    }),
        ],
    });
}
