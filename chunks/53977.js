n.d(t, { A: () => h });
var i = n(627968),
    a = n(64700),
    r = n(397927),
    l = n(566605),
    s = n(379848),
    o = n(183555),
    d = n(357541),
    c = n(814221),
    u = n(266713),
    A = n(985018),
    _ = n(54676);
function h() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, o.NJ)(),
        h = a.useRef(!1),
        {
            suggestions: m,
            currentUser: g,
            isLoading: p,
        } = (0, l.A)({ location: "UserProfileModalV2ApplicationWidgetsEmptyState" }),
        E = m?.[0],
        I = a.useCallback(() => {
            t({ action: "PRESS_ADD_WIDGET" }),
                (0, r.mMO)(
                    async () => {
                        let { default: e } = await n.e("87591").then(n.bind(n, 333114));
                        return (n) => (0, i.jsx)(e, { ...n, trackUserProfileEditAction: t });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [t]);
    if (
        (a.useEffect(() => {
            p ||
                null == E ||
                h.current ||
                (e({ action: "VIEW_APPLICATION_WIDGETS_EMPTY_STATE", applicationId: E.application.id }),
                (h.current = !0));
        }, [p, e, E]),
        p)
    )
        return (0, i.jsx)("div", { className: _.Lq, children: (0, i.jsx)(r.y$y, {}) });
    if (null == E) return (0, i.jsx)(u.A, {});
    let f = (0, i.jsxs)(r.BJc, {
        gap: 4,
        className: _.wx,
        children: [
            (0, i.jsx)(r.Heading, {
                variant: "heading-md/medium",
                color: "text-strong",
                children: A.intl.string(A.t["oqalC+"]),
            }),
            (0, i.jsx)(r.Text, {
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
                ? (0, i.jsxs)(r.BJc, {
                      gap: 16,
                      align: "center",
                      children: [
                          (0, i.jsx)(r.hKd, { size: 32 }),
                          f,
                          (0, i.jsx)("div", {
                              className: _.Zj,
                              children: (0, i.jsx)(d.A, { user: g, application: E.application, onDismiss: n }),
                          }),
                          (0, i.jsx)(c.A, {}),
                      ],
                  })
                : (0, i.jsxs)(r.BJc, {
                      gap: 32,
                      align: "center",
                      children: [
                          (0, i.jsx)(r.hKd, { size: 128 }),
                          f,
                          (0, i.jsx)(r.Button, {
                              icon: r.j96,
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
