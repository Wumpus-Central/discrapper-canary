n.d(t, {
    A: () => C,
}),
    n(896048),
    n(492834);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(582754),
    a = n(397927),
    o = n(77468),
    c = n(736653),
    d = n(573648),
    u = n(370480),
    _ = n(882997),
    p = n(169869),
    m = n(773669),
    g = n(962173),
    A = n(975571),
    f = n(652215),
    h = n(783419),
    b = n(985018),
    E = n(410280);

function x(e) {
    var t;
    let { account: n, refreshed: s, handleRefresh: o } = e,
        [c, d] = i.useState(!1),
        _ = null != (t = n.metadata) ? t : {},
        g = (0, l.bG)([m.default], () => m.default.locale),
        x = i.useCallback(async () => {
            d(!0);
            try {
                await o(n);
            } finally {
                d(!1);
            }
        }, [n, o]),
        O = null;
    switch (n.type) {
        case f.fg2.REDDIT:
            O = (0, p.xE)(_, E.Nz);
            break;
        case f.fg2.STEAM:
            O = (0, p.dy)(_, E.Nz);
            break;
        case f.fg2.TWITTER:
            O = (0, p.ED)(_, E.Nz);
            break;
        case f.fg2.EBAY:
            O = (0, p.ub)(_, E.Nz);
            break;
        case f.fg2.PAYPAL:
            O = (0, p.gZ)(_, E.Nz);
            break;
        case f.fg2.TIKTOK:
            O = (0, p.HU)(_, E.Nz);
    }
    let C = (0, u.An)(_[h.pK.CREATED_AT], g),
        I = null,
        T = b.intl.string(b.t.wzzjk9);
    return (
        (null == O || 0 === O.length) &&
            null == C &&
            ((I = (0, r.jsx)(
                a.Text,
                {
                    variant: "text-xs/normal",
                    color: "text-default",
                    children: b.intl.format(b.t.Up2ni7, {
                        helpdeskUrl: A.A.getArticleURL(f.MVz.CONNECTION_DETAILS),
                    }),
                },
                "label",
            )),
            (T = b.intl.string(b.t["LVh3/5"]))),
        s && (T = b.intl.string(b.t.i4jeWR)),
        (0, r.jsxs)("div", {
            className: E.tJ,
            children: [
                I,
                null == O
                    ? void 0
                    : O.map((e, t) =>
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  e,
                                  t < O.length - 1
                                      ? (0, r.jsx)("span", {
                                            className: E.Om,
                                        })
                                      : null,
                              ],
                          }),
                      ),
                null != O && O.length > 0 && null != C
                    ? (0, r.jsx)("div", {
                          className: E.Om,
                      })
                    : null,
                null != C
                    ? (0, r.jsx)(
                          a.Text,
                          {
                              variant: "text-xs/normal",
                              color: "text-default",
                              children: b.intl.format(b.t["9rfonh"], {
                                  date: C,
                              }),
                          },
                          "member-since",
                      )
                    : null,
                (0, r.jsx)("div", {
                    className: E.jy,
                    children: (0, r.jsx)(
                        a.Button,
                        {
                            size: "sm",
                            variant: s ? "active" : "secondary",
                            loading: c,
                            disabled: s,
                            "aria-label": b.intl.string(b.t.sCkLYH),
                            onClick: x,
                            text: T,
                        },
                        "refresh-button",
                    ),
                }),
            ],
        })
    );
}

function O(e) {
    let { account: t, handleRefresh: n, refreshedAccountIds: l } = e,
        [u, p] = i.useState(t.visibility),
        [m, g] = i.useState(t.metadataVisibility),
        A = (0, c.Ay)();
    i.useEffect(() => {
        p(t.visibility), g(t.metadataVisibility);
    }, [t]);
    let f = d.A.get(t.type),
        h = !0 === f.hasMetadata;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: E.gd,
                children: [
                    (0, r.jsx)("img", {
                        alt: f.name,
                        className: E.gj,
                        src: (0, s.Mw)(A) ? f.icon.darkSVG : f.icon.lightSVG,
                    }),
                    (0, r.jsxs)("div", {
                        className: E.$n,
                        children: [
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(a.dOG, {
                                        checked: 1 === u,
                                        onChange: function (e) {
                                            let { verified: n } = t,
                                                r = +!!e;
                                            if (e && !n) {
                                                p(r),
                                                    (0, _.A)({
                                                        platformType: t.type,
                                                        location: "User Settings",
                                                    });
                                                return;
                                            }
                                            p(r), o.A.setVisibility(t.type, t.id, r);
                                        },
                                        label: f.name,
                                    }),
                                    h &&
                                        (0, r.jsx)(x, {
                                            account: t,
                                            refreshed: l.includes(t.id),
                                            handleRefresh: n,
                                        }),
                                ],
                            }),
                            h &&
                                (0, r.jsx)(a.dOG, {
                                    disabled: 1 !== u || null == t.metadata,
                                    checked: 1 === m,
                                    onChange: function (e) {
                                        let { verified: n } = t,
                                            r = +!!e;
                                        if (e && !n) {
                                            g(r),
                                                (0, _.A)({
                                                    platformType: t.type,
                                                    location: "User Settings",
                                                });
                                            return;
                                        }
                                        g(r), o.A.setMetadataVisibility(t.type, t.id, r);
                                    },
                                    label: b.intl.string(b.t["3l78wo"]),
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(a.cGx, {}),
        ],
    });
}

function C() {
    let e = (0, l.bG)([g.A], () => g.A.getAccounts()),
        t = i.useMemo(() => e.filter((e) => d.A.isSupported(e.type)), [e]),
        [n, s] = i.useState([]),
        c = i.useCallback(
            (e) =>
                o.A.refresh(e.type, e.id).finally(() => {
                    s((t) => [...t, e.id]);
                }),
            [],
        );
    return 0 === t.length
        ? null
        : (0, r.jsx)(a.nVY, {
              className: E.kL,
              label: b.intl.string(b.t.aw0GVS),
              children: t.map((e) =>
                  (0, r.jsx)(
                      O,
                      {
                          account: e,
                          handleRefresh: c,
                          refreshedAccountIds: n,
                      },
                      e.id,
                  ),
              ),
          });
}
