n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(566605),
    s = n(379848),
    o = n(183555),
    d = n(357541),
    c = n(814221),
    u = n(266713),
    A = n(985018),
    h = n(113636);
function _() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, o.NJ)(),
        _ = l.useRef(!1),
        {
            suggestions: m,
            currentUser: g,
            isLoading: p,
        } = (0, r.A)({ location: "UserProfileModalV2ApplicationWidgetsEmptyState" }),
        E = m?.[0],
        I = l.useCallback(() => {
            t({ action: "PRESS_ADD_WIDGET" }),
                (0, a.mMO)(
                    async () => {
                        let { default: e } = await n.e("87591").then(n.bind(n, 333114));
                        return (n) => (0, i.jsx)(e, { ...n, trackUserProfileEditAction: t });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [t]);
    if (
        (l.useEffect(() => {
            p ||
                null == E ||
                _.current ||
                (e({ action: "VIEW_APPLICATION_WIDGETS_EMPTY_STATE", applicationId: E.application.id }),
                (_.current = !0));
        }, [p, e, E]),
        p)
    )
        return (0, i.jsx)("div", { className: h.Lq, children: (0, i.jsx)(a.y$y, {}) });
    if (null == E) return (0, i.jsx)(u.A, {});
    let f = (0, i.jsxs)(a.BJc, {
        gap: 4,
        className: h.wx,
        children: [
            (0, i.jsx)(a.Heading, {
                variant: "heading-md/medium",
                color: "text-strong",
                children: A.intl.string(A.t["oqalC+"]),
            }),
            (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: A.intl.format(A.t.YnNFWa, { applicationName: E.application.name }),
            }),
        ],
    });
    return (0, i.jsx)(s.Ay, {
        contentTypes: [E.dismissibleContent],
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return t === E.dismissibleContent
                ? (0, i.jsxs)(a.BJc, {
                      gap: 16,
                      align: "center",
                      children: [
                          (0, i.jsx)(a.hKd, { size: 32 }),
                          f,
                          (0, i.jsx)("div", {
                              className: h.Zj,
                              children: (0, i.jsx)(d.A, { user: g, application: E.application, onDismiss: n }),
                          }),
                          (0, i.jsx)(c.A, {}),
                      ],
                  })
                : (0, i.jsxs)(a.BJc, {
                      gap: 32,
                      align: "center",
                      children: [
                          (0, i.jsx)(a.hKd, { size: 128 }),
                          f,
                          (0, i.jsx)(a.Button, {
                              icon: a.j96,
                              text: A.intl.string(A.t["lBG2s/"]),
                              size: "md",
                              variant: "secondary",
                              onClick: I,
                          }),
                      ],
                  });
        },
    });
}
