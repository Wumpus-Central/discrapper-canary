n.d(t, { A: () => p });
var i = n(627968),
    a = n(64700),
    l = n(397927),
    s = n(566605),
    r = n(379848),
    o = n(183555),
    c = n(357541),
    d = n(814221),
    u = n(266713),
    m = n(985018),
    g = n(54676);
function p() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, o.NJ)(),
        p = a.useRef(!1),
        {
            suggestions: x,
            currentUser: f,
            isLoading: _,
        } = (0, s.A)({ location: "UserProfileModalV2ApplicationWidgetsEmptyState" }),
        h = x?.[0],
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
            _ ||
                null == h ||
                p.current ||
                (e({ action: "VIEW_APPLICATION_WIDGETS_EMPTY_STATE", applicationId: h.application.id }),
                (p.current = !0));
        }, [_, e, h]),
        _)
    )
        return (0, i.jsx)("div", { className: g.Lq, children: (0, i.jsx)(l.y$y, {}) });
    if (null == h) return (0, i.jsx)(u.A, {});
    let I = (0, i.jsxs)(l.BJc, {
        gap: 4,
        className: g.wx,
        children: [
            (0, i.jsx)(l.Heading, {
                variant: "heading-md/medium",
                color: "text-strong",
                children: m.intl.string(m.t["oqalC+"]),
            }),
            (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: m.intl.format(m.t.YnNFWa, { applicationName: h.application.name }),
            }),
        ],
    });
    return (0, i.jsx)(r.Ay, {
        contentTypes: [h.dismissibleContent],
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return t === h.dismissibleContent
                ? (0, i.jsxs)(l.BJc, {
                      gap: 16,
                      align: "center",
                      children: [
                          (0, i.jsx)(l.hKd, { size: 32 }),
                          I,
                          (0, i.jsx)("div", {
                              className: g.Zj,
                              children: (0, i.jsx)(c.A, { user: f, application: h.application, onDismiss: n }),
                          }),
                          (0, i.jsx)(d.A, {}),
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
                              text: m.intl.string(m.t["lBG2s/"]),
                              size: "md",
                              color: "secondary",
                              onClick: A,
                          }),
                      ],
                  });
        },
    });
}
