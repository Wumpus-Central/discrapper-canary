n.d(t, { A: () => x });
var i = n(627968),
    a = n(64700),
    l = n(397927),
    s = n(566605),
    r = n(379848),
    o = n(183555),
    d = n(357541),
    c = n(814221),
    u = n(266713),
    g = n(985018),
    m = n(324679);
function x() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, o.NJ)(),
        x = a.useRef(!1),
        {
            suggestions: p,
            currentUser: f,
            isLoading: h,
        } = (0, s.A)({ location: "UserProfileModalV2ApplicationWidgetsEmptyState" }),
        _ = p?.[0],
        A = a.useCallback(() => {
            t({ action: "PRESS_ADD_WIDGET" }),
                (0, l.mMO)(
                    async () => {
                        let { default: e } = await n.e("87591").then(n.bind(n, 333114));
                        return (n) => (0, i.jsx)(e, { ...n, trackUserProfileEditAction: t });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [t]);
    if (
        (a.useEffect(() => {
            h ||
                null == _ ||
                x.current ||
                (e({ action: "VIEW_APPLICATION_WIDGETS_EMPTY_STATE", applicationId: _.application.id }),
                (x.current = !0));
        }, [h, e, _]),
        h)
    )
        return (0, i.jsx)("div", { className: m.Lq, children: (0, i.jsx)(l.y$y, {}) });
    if (null == _) return (0, i.jsx)(u.A, {});
    let I = (0, i.jsxs)(l.BJc, {
        gap: 4,
        className: m.wx,
        children: [
            (0, i.jsx)(l.Heading, {
                variant: "heading-md/medium",
                color: "text-strong",
                children: g.intl.string(g.t["oqalC+"]),
            }),
            (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: g.intl.format(g.t.YnNFWa, { applicationName: _.application.name }),
            }),
        ],
    });
    return (0, i.jsx)(r.Ay, {
        contentTypes: [_.dismissibleContent],
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return t === _.dismissibleContent
                ? (0, i.jsxs)(l.BJc, {
                      gap: 16,
                      align: "center",
                      children: [
                          (0, i.jsx)(l.hKd, { size: 32 }),
                          I,
                          (0, i.jsx)("div", {
                              className: m.Zj,
                              children: (0, i.jsx)(d.A, { user: f, application: _.application, onDismiss: n }),
                          }),
                          (0, i.jsx)(c.A, {}),
                      ],
                  })
                : (0, i.jsxs)(l.BJc, {
                      gap: 32,
                      align: "center",
                      children: [
                          (0, i.jsx)(l.hKd, { size: 128 }),
                          I,
                          (0, i.jsx)(l.Button, {
                              icon: l.j96,
                              text: g.intl.string(g.t["lBG2s/"]),
                              size: "md",
                              color: "secondary",
                              onClick: A,
                          }),
                      ],
                  });
        },
    });
}
