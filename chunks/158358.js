n.d(t, { A: () => S });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(582754),
    l = n(397927),
    o = n(77468),
    c = n(736653),
    d = n(573648),
    u = n(370480),
    _ = n(882997),
    m = n(169869),
    A = n(773669),
    g = n(962173),
    E = n(975571),
    h = n(652215),
    p = n(783419),
    C = n(985018),
    x = n(410280);
function T(e) {
    let { account: t, refreshed: n, handleRefresh: a } = e,
        [o, c] = s.useState(!1),
        d = t.metadata ?? {},
        _ = (0, r.bG)([A.default], () => A.default.locale),
        g = s.useCallback(async () => {
            c(!0);
            try {
                await a(t);
            } finally {
                c(!1);
            }
        }, [t, a]),
        T = null;
    switch (t.type) {
        case h.fg2.REDDIT:
            T = (0, m.xE)(d, x.Nz);
            break;
        case h.fg2.STEAM:
            T = (0, m.dy)(d, x.Nz);
            break;
        case h.fg2.TWITTER:
            T = (0, m.ED)(d, x.Nz);
            break;
        case h.fg2.EBAY:
            T = (0, m.ub)(d, x.Nz);
            break;
        case h.fg2.PAYPAL:
            T = (0, m.gZ)(d, x.Nz);
            break;
        case h.fg2.TIKTOK:
            T = (0, m.HU)(d, x.Nz);
    }
    let I = (0, u.An)(d[p.pK.CREATED_AT], _),
        S = null,
        f = C.intl.string(C.t.wzzjk9);
    return (
        (null == T || 0 === T.length) &&
            null == I &&
            ((S = (0, i.jsx)(
                l.Text,
                {
                    variant: "text-xs/normal",
                    color: "text-default",
                    children: C.intl.format(C.t.Up2ni7, { helpdeskUrl: E.A.getArticleURL(h.MVz.CONNECTION_DETAILS) }),
                },
                "label",
            )),
            (f = C.intl.string(C.t["LVh3/5"]))),
        n && (f = C.intl.string(C.t.i4jeWR)),
        (0, i.jsxs)("div", {
            className: x.tJ,
            children: [
                S,
                T?.map((e, t) =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [e, t < T.length - 1 ? (0, i.jsx)("span", { className: x.Om }) : null],
                    }),
                ),
                null != T && T.length > 0 && null != I ? (0, i.jsx)("div", { className: x.Om }) : null,
                null != I
                    ? (0, i.jsx)(
                          l.Text,
                          {
                              variant: "text-xs/normal",
                              color: "text-default",
                              children: C.intl.format(C.t["9rfonh"], { date: I }),
                          },
                          "member-since",
                      )
                    : null,
                (0, i.jsx)("div", {
                    className: x.jy,
                    children: (0, i.jsx)(
                        l.Button,
                        {
                            size: "sm",
                            variant: n ? "active" : "secondary",
                            loading: o,
                            disabled: n,
                            "aria-label": C.intl.string(C.t.sCkLYH),
                            onClick: g,
                            text: f,
                        },
                        "refresh-button",
                    ),
                }),
            ],
        })
    );
}
function I(e) {
    let { account: t, handleRefresh: n, refreshedAccountIds: r } = e,
        [u, m] = s.useState(t.visibility),
        [A, g] = s.useState(t.metadataVisibility),
        E = (0, c.Ay)();
    s.useEffect(() => {
        m(t.visibility), g(t.metadataVisibility);
    }, [t]);
    let h = d.A.get(t.type),
        p = !0 === h.hasMetadata;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: x.gd,
                children: [
                    (0, i.jsx)("img", {
                        alt: h.name,
                        className: x.gj,
                        src: (0, a.Mw)(E) ? h.icon.darkSVG : h.icon.lightSVG,
                    }),
                    (0, i.jsxs)("div", {
                        className: x.$n,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(l.dOG, {
                                        checked: 1 === u,
                                        onChange: function (e) {
                                            let { verified: n } = t,
                                                i = +!!e;
                                            if (e && !n) {
                                                m(i), (0, _.A)({ platformType: t.type, location: "User Settings" });
                                                return;
                                            }
                                            m(i), o.A.setVisibility(t.type, t.id, i);
                                        },
                                        label: h.name,
                                    }),
                                    p && (0, i.jsx)(T, { account: t, refreshed: r.includes(t.id), handleRefresh: n }),
                                ],
                            }),
                            p &&
                                (0, i.jsx)(l.dOG, {
                                    disabled: 1 !== u || null == t.metadata,
                                    checked: 1 === A,
                                    onChange: function (e) {
                                        let { verified: n } = t,
                                            i = +!!e;
                                        if (e && !n) {
                                            g(i), (0, _.A)({ platformType: t.type, location: "User Settings" });
                                            return;
                                        }
                                        g(i), o.A.setMetadataVisibility(t.type, t.id, i);
                                    },
                                    label: C.intl.string(C.t["3l78wo"]),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(l.cGx, {}),
        ],
    });
}
function S() {
    let e = (0, r.bG)([g.A], () => g.A.getAccounts()),
        t = s.useMemo(() => e.filter((e) => d.A.isSupported(e.type)), [e]),
        [n, a] = s.useState([]),
        c = s.useCallback(
            (e) =>
                o.A.refresh(e.type, e.id).finally(() => {
                    a((t) => [...t, e.id]);
                }),
            [],
        );
    return 0 === t.length
        ? null
        : (0, i.jsx)(l.nVY, {
              className: x.kL,
              label: C.intl.string(C.t.aw0GVS),
              children: t.map((e) => (0, i.jsx)(I, { account: e, handleRefresh: c, refreshedAccountIds: n }, e.id)),
          });
}
