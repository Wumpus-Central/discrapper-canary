n.d(t, {
    A: () => E,
}),
    n(896048),
    n(492834);
var r = n(627968),
    i = n(64700),
    l = n(989349),
    s = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(157559),
    d = n(287809),
    u = n(975571),
    _ = n(115063),
    p = n(104954),
    m = n(975648),
    g = n(871930),
    A = n(531525),
    f = n(652215),
    h = n(985018),
    b = n(937474);

function E() {
    let e = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        { currentHarvestType: t, awaitingInitialRequest: l } = (0, a.cf)([m.A], () => ({
            currentHarvestType: m.A.harvestType,
            awaitingInitialRequest: m.A.requestingHarvest,
        })),
        [E, x] = i.useState(!1);
    if (null == e) return null;
    let O = (0, _.Oj)(t, e) || l,
        C = null != t && s()().diff(s()(t.created_at), "days") < f.n83,
        I = O && C,
        T = e.isStaff(),
        S = !e.verified;
    return (0, r.jsxs)(g.h, {
        setting: A.H.PRIVACY_DATA_REQUEST_V2,
        children: [
            (0, r.jsx)(g._, {
                header: h.intl.string(h.t.XAHCgJ),
                description: h.intl.format(h.t.P3kNfr, {
                    helpdeskArticle: u.A.getArticleURL(f.MVz.GDPR_REQUEST_DATA),
                }),
            }),
            I
                ? (0, r.jsx)(o.ZpM, {
                      className: b.N,
                      children: (0, r.jsx)(o.Text, {
                          variant: "text-md/normal",
                          children: h.intl.format(h.t.RNDlV9, {
                              date: s()(t.created_at).add(f.n83, "days").format("MMMM Do YYYY"),
                          }),
                      }),
                  })
                : T
                  ? (0, r.jsx)(o.ZpM, {
                        className: b.N,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: h.intl.string(h.t.ZPQLH2),
                        }),
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            S
                                ? (0, r.jsx)(o.ZpM, {
                                      className: b.N,
                                      children: (0, r.jsx)(o.Text, {
                                          variant: "text-md/normal",
                                          children: h.intl.string(h.t.c1f88z),
                                      }),
                                  })
                                : null,
                            (0, r.jsx)("div", {
                                className: b.x,
                                children: (0, r.jsx)(o.Button, {
                                    variant: "primary",
                                    text: h.intl.string(h.t.dmBSKo),
                                    disabled: O,
                                    onClick: () => {
                                        ((e) => {
                                            let { onConfirm: t } = e;
                                            (0, o.mMO)(async () => {
                                                let { default: e } = await n.e("98171").then(n.bind(n, 481398));
                                                return (n) =>
                                                    (0, r.jsx)(e, {
                                                        modalProps: n,
                                                        onConfirm: t,
                                                    });
                                            });
                                        })({
                                            onConfirm: (e) => {
                                                x(!0),
                                                    (0, p.$)(e)
                                                        .then(
                                                            (e) => {
                                                                null != e && null != e.body
                                                                    ? c.A.show({
                                                                          title: h.intl.string(h.t.i2iul5),
                                                                          body: h.intl.string(h.t["6Nmv4i"]),
                                                                      })
                                                                    : c.A.show({
                                                                          title: h.intl.string(h.t.OjbtDm),
                                                                          body: h.intl.string(h.t["0F5Jyt"]),
                                                                      });
                                                            },
                                                            (e) => {
                                                                var t;
                                                                let n =
                                                                    (null == e ? void 0 : e.message) ||
                                                                    (null == e || null == (t = e.body)
                                                                        ? void 0
                                                                        : t.message) ||
                                                                    h.intl.string(h.t["0F5Jyt"]);
                                                                c.A.show({
                                                                    title: h.intl.string(h.t.OjbtDm),
                                                                    body: n,
                                                                });
                                                            },
                                                        )
                                                        .finally(() => x(!1));
                                            },
                                        });
                                    },
                                    loading: E || l,
                                }),
                            }),
                        ],
                    }),
        ],
    });
}
