n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    r = n(989349),
    a = n.n(r),
    l = n(311907),
    o = n(397927),
    c = n(157559),
    d = n(287809),
    u = n(975571),
    _ = n(115063),
    m = n(104954),
    A = n(975648),
    g = n(871930),
    E = n(531525),
    h = n(652215),
    p = n(985018),
    C = n(937474);
function x() {
    let e = (0, l.bG)([d.default], () => d.default.getCurrentUser()),
        { currentHarvestType: t, awaitingInitialRequest: r } = (0, l.cf)([A.A], () => ({
            currentHarvestType: A.A.harvestType,
            awaitingInitialRequest: A.A.requestingHarvest,
        })),
        [x, T] = s.useState(!1);
    if (null == e) return null;
    let I = (0, _.Oj)(t, e) || r,
        S = null != t && a()().diff(a()(t.created_at), "days") < h.n83,
        f = I && S,
        N = e.isStaff(),
        b = !e.verified;
    return (0, i.jsxs)(g.h, {
        setting: E.H.PRIVACY_DATA_REQUEST_V2,
        children: [
            (0, i.jsx)(g._, {
                header: p.intl.string(p.t.XAHCgJ),
                description: p.intl.format(p.t.P3kNfr, { helpdeskArticle: u.A.getArticleURL(h.MVz.GDPR_REQUEST_DATA) }),
            }),
            f
                ? (0, i.jsx)(o.ZpM, {
                      className: C.N,
                      children: (0, i.jsx)(o.Text, {
                          variant: "text-md/normal",
                          children: p.intl.format(p.t.RNDlV9, {
                              date: a()(t.created_at).add(h.n83, "days").format("MMMM Do YYYY"),
                          }),
                      }),
                  })
                : N
                  ? (0, i.jsx)(o.ZpM, {
                        className: C.N,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: p.intl.string(p.t.ZPQLH2),
                        }),
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            b
                                ? (0, i.jsx)(o.ZpM, {
                                      className: C.N,
                                      children: (0, i.jsx)(o.Text, {
                                          variant: "text-md/normal",
                                          children: p.intl.string(p.t.c1f88z),
                                      }),
                                  })
                                : null,
                            (0, i.jsx)("div", {
                                className: C.x,
                                children: (0, i.jsx)(o.Button, {
                                    variant: "primary",
                                    text: p.intl.string(p.t.dmBSKo),
                                    disabled: I,
                                    onClick: () => {
                                        ((e) => {
                                            let { onConfirm: t } = e;
                                            (0, o.mMO)(async () => {
                                                let { default: e } = await n.e("98171").then(n.bind(n, 481398));
                                                return (n) => (0, i.jsx)(e, { modalProps: n, onConfirm: t });
                                            });
                                        })({
                                            onConfirm: (e) => {
                                                T(!0),
                                                    (0, m.$)(e)
                                                        .then(
                                                            (e) => {
                                                                null != e && null != e.body
                                                                    ? c.A.show({
                                                                          title: p.intl.string(p.t.i2iul5),
                                                                          body: p.intl.string(p.t["6Nmv4i"]),
                                                                      })
                                                                    : c.A.show({
                                                                          title: p.intl.string(p.t.OjbtDm),
                                                                          body: p.intl.string(p.t["0F5Jyt"]),
                                                                      });
                                                            },
                                                            (e) => {
                                                                let t =
                                                                    e?.message ||
                                                                    e?.body?.message ||
                                                                    p.intl.string(p.t["0F5Jyt"]);
                                                                c.A.show({ title: p.intl.string(p.t.OjbtDm), body: t });
                                                            },
                                                        )
                                                        .finally(() => T(!1));
                                            },
                                        });
                                    },
                                    loading: x || r,
                                }),
                            }),
                        ],
                    }),
        ],
    });
}
