n.d(t, { Z: () => T }), n(388685), n(457542);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(780384),
    s = n(755721),
    l = n(481060),
    c = n(457330),
    u = n(410030),
    d = n(726542),
    f = n(275759),
    _ = n(231757),
    p = n(888496),
    h = n(706454),
    m = n(553795),
    g = n(63063),
    E = n(981631),
    b = n(856651),
    y = n(388032),
    O = n(673449);
function v(e) {
    var t;
    let { account: n, refreshed: o, handleRefresh: c } = e,
        [u, d] = i.useState(!1),
        _ = null != (t = n.metadata) ? t : {},
        m = (0, a.e7)([h.default], () => h.default.locale),
        v = i.useCallback(async () => {
            d(!0);
            try {
                await c(n);
            } finally {
                d(!1);
            }
        }, [n, c]),
        I = null;
    switch (n.type) {
        case E.ABu.REDDIT:
            I = (0, p.oP)(_, O.metadataItem);
            break;
        case E.ABu.STEAM:
            I = (0, p.Dq)(_, O.metadataItem);
            break;
        case E.ABu.TWITTER:
            I = (0, p.rJ)(_, O.metadataItem);
            break;
        case E.ABu.EBAY:
            I = (0, p.ul)(_, O.metadataItem);
            break;
        case E.ABu.PAYPAL:
            I = (0, p.li)(_, O.metadataItem);
            break;
        case E.ABu.TIKTOK:
            I = (0, p.hf)(_, O.metadataItem);
    }
    let T = (0, f.FI)(_[b.PC.CREATED_AT], m),
        S = null,
        A = y.intl.string(y.t.wzzjk5);
    return (
        (null == I || 0 === I.length) &&
            null == T &&
            ((S = (0, r.jsx)(
                l.Text,
                {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: y.intl.format(y.t.Up2ni4, { helpdeskUrl: g.Z.getArticleURL(E.BhN.CONNECTION_DETAILS) }),
                },
                "label",
            )),
            (A = y.intl.string(y.t["LVh3//"]))),
        o && (A = y.intl.string(y.t.i4jeWV)),
        (0, r.jsxs)("div", {
            className: O.metadataContainer,
            children: [
                S,
                null == I
                    ? void 0
                    : I.map((e, t) =>
                          (0, r.jsxs)(r.Fragment, {
                              children: [e, t < I.length - 1 ? (0, r.jsx)("span", { className: O.dot }) : null],
                          }),
                      ),
                null != I && I.length > 0 && null != T ? (0, r.jsx)("div", { className: O.dot }) : null,
                null != T
                    ? (0, r.jsx)(
                          l.Text,
                          {
                              variant: "text-xs/normal",
                              color: "header-secondary",
                              children: y.intl.format(y.t["9rfonp"], { date: T }),
                          },
                          "member-since",
                      )
                    : null,
                (0, r.jsx)(
                    s.zx,
                    {
                        className: O.metadataRefreshButton,
                        look: s.zx.Looks.OUTLINED,
                        color: o ? s.zx.Colors.GREEN : s.zx.Colors.PRIMARY,
                        size: s.zx.Sizes.MIN,
                        submitting: u,
                        disabled: o,
                        "aria-label": y.intl.string(y.t.sCkLYG),
                        onClick: o ? void 0 : v,
                        children: A,
                    },
                    "refresh-button",
                ),
            ],
        })
    );
}
function I(e) {
    let { account: t, handleRefresh: n, refreshedAccountIds: a } = e,
        [s, f] = i.useState(t.visibility),
        [p, h] = i.useState(t.metadataVisibility),
        m = (0, u.ZP)();
    function g(e) {
        let { verified: n } = t,
            r = +!!e;
        if (e && !n) {
            f(r),
                (0, _.Z)({
                    platformType: t.type,
                    location: "User Settings",
                });
            return;
        }
        f(r), c.Z.setVisibility(t.type, t.id, r);
    }
    function E(e) {
        let { verified: n } = t,
            r = +!!e;
        if (e && !n) {
            h(r),
                (0, _.Z)({
                    platformType: t.type,
                    location: "User Settings",
                });
            return;
        }
        h(r), c.Z.setMetadataVisibility(t.type, t.id, r);
    }
    i.useEffect(() => {
        f(t.visibility), h(t.metadataVisibility);
    }, [t]);
    let b = d.Z.get(t.type),
        I = !0 === b.hasMetadata;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: O.activityRow,
                children: [
                    (0, r.jsx)("img", {
                        alt: b.name,
                        className: O.connectionIcon,
                        src: (0, o.wj)(m) ? b.icon.darkSVG : b.icon.lightSVG,
                    }),
                    (0, r.jsxs)("div", {
                        className: O.activitySettings,
                        children: [
                            (0, r.jsxs)(l.j7V, {
                                className: O.visibilitySwitch,
                                hideBorder: !0,
                                value: 1 === s,
                                onChange: g,
                                children: [
                                    (0, r.jsx)(l.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: b.name,
                                    }),
                                    I &&
                                        (0, r.jsx)(v, {
                                            account: t,
                                            refreshed: a.includes(t.id),
                                            handleRefresh: n,
                                        }),
                                ],
                            }),
                            I &&
                                (0, r.jsx)(l.j7V, {
                                    className: O.additionalDetailsSwitch,
                                    hideBorder: !0,
                                    disabled: 1 !== s || null == t.metadata,
                                    value: 1 === p,
                                    onChange: E,
                                    children: (0, r.jsx)(l.Text, {
                                        variant: "text-md/normal",
                                        color: "header-secondary",
                                        children: y.intl.string(y.t["3l78ws"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: O.divider }),
        ],
    });
}
function T() {
    let e = (0, a.e7)([m.Z], () => m.Z.getAccounts()),
        t = i.useMemo(() => e.filter((e) => d.Z.isSupported(e.type)), [e]),
        [n, o] = i.useState([]),
        s = i.useCallback(
            (e) =>
                c.Z.refresh(e.type, e.id).finally(() => {
                    o((t) => [...t, e.id]);
                }),
            [],
        );
    return 0 === t.length
        ? null
        : (0, r.jsxs)(l.hjN, {
              className: O.container,
              children: [
                  (0, r.jsx)(l.vwX, {
                      tag: l.RB0.H5,
                      className: O.title,
                      children: y.intl.string(y.t.aw0GVV),
                  }),
                  t.map((e) =>
                      (0, r.jsx)(
                          I,
                          {
                              account: e,
                              handleRefresh: s,
                              refreshedAccountIds: n,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
