n.d(t, { A: () => E });
var i = n(627968),
    a = n(64700),
    l = n(192308),
    s = n(289873),
    r = n(331322),
    o = n(534514),
    c = n(834730),
    d = n(696986),
    u = n(821609),
    _ = n(307301),
    g = n(566605),
    f = n(379848),
    m = n(183555),
    x = n(357541),
    p = n(814221),
    I = n(266713),
    A = n(985018),
    h = n(113636);
function E() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, m.NJ)(),
        E = a.useRef(!1),
        {
            suggestions: v,
            currentUser: C,
            isLoading: b,
        } = (0, g.A)({ location: "UserProfileModalV2ApplicationWidgetsEmptyState" }),
        j = v?.[0],
        T = a.useCallback(() => {
            t({ action: "PRESS_ADD_WIDGET" }),
                (0, l.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("87591").then(n.bind(n, 333114));
                        return (n) => (0, i.jsx)(e, { ...n, trackUserProfileEditAction: t });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [t]);
    if (
        (a.useEffect(() => {
            b ||
                null == j ||
                E.current ||
                (e({ action: "VIEW_APPLICATION_WIDGETS_EMPTY_STATE", applicationId: j.application.id }),
                (E.current = !0));
        }, [b, e, j]),
        b)
    )
        return (0, i.jsx)("div", { className: h.Lq, children: (0, i.jsx)(s.y, {}) });
    if (null == j) return (0, i.jsx)(I.A, {});
    let N = (0, i.jsxs)(r.B, {
        gap: 4,
        className: h.wx,
        children: [
            (0, i.jsx)(o.D, {
                variant: "heading-md/medium",
                color: "text-strong",
                children: A.intl.string(A.t["oqalC+"]),
            }),
            (0, i.jsx)(c.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: A.intl.format(A.t.YnNFWa, { applicationName: j.application.name }),
            }),
        ],
    });
    return (0, i.jsx)(f.Ay, {
        contentTypes: [j.dismissibleContent],
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return t === j.dismissibleContent
                ? (0, i.jsxs)(r.B, {
                      gap: 16,
                      align: "center",
                      children: [
                          (0, i.jsx)(d.h, { size: 32 }),
                          N,
                          (0, i.jsx)("div", {
                              className: h.Zj,
                              children: (0, i.jsx)(x.A, { user: C, application: j.application, onDismiss: n }),
                          }),
                          (0, i.jsx)(p.A, {}),
                      ],
                  })
                : (0, i.jsxs)(r.B, {
                      gap: 32,
                      align: "center",
                      children: [
                          (0, i.jsx)(d.h, { size: 128 }),
                          N,
                          (0, i.jsx)(u.$, {
                              icon: _.j,
                              text: A.intl.string(A.t["lBG2s/"]),
                              size: "md",
                              variant: "secondary",
                              onClick: T,
                          }),
                      ],
                  });
        },
    });
}
