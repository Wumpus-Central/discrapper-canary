n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(513417),
    o = n(243778),
    c = n(785717),
    s = n(28671),
    u = n(430790),
    d = n(795990),
    f = n(388032),
    g = n(284459);
function p() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, c.KZ)(),
        p = i.useRef(!1),
        {
            suggestions: m,
            currentUser: b,
            isLoading: y,
        } = (0, a.Z)({ location: "UserProfileModalV2ApplicationWidgetsEmptyState" }),
        j = null == m ? void 0 : m[0],
        h = i.useCallback(() => {
            t({ action: "PRESS_ADD_WIDGET" }),
                (0, l.ZDy)(
                    async () => {
                        let { default: e } = await n.e("38576").then(n.bind(n, 925170));
                        return (n) => {
                            var i, l;
                            return (0, r.jsx)(
                                e,
                                ((i = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, n)),
                                (l = l = { trackUserProfileEditAction: t }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                i),
                            );
                        };
                    },
                    { stackingBehavior: "stack" },
                );
        }, [t]);
    if (
        (i.useEffect(() => {
            !y &&
                null != j &&
                (p.current ||
                    (e({
                        action: "VIEW_APPLICATION_WIDGETS_EMPTY_STATE",
                        applicationId: j.application.id,
                    }),
                    (p.current = !0)));
        }, [y, e, j]),
        y)
    )
        return (0, r.jsx)("div", {
            className: g.loading,
            children: (0, r.jsx)(l.$jN, {}),
        });
    if (null == j) return (0, r.jsx)(d.Z, {});
    let O = (0, r.jsxs)(l.Kqy, {
        gap: 4,
        className: g.header,
        children: [
            (0, r.jsx)(l.Heading, {
                variant: "heading-md/medium",
                color: "text-strong",
                children: f.intl.string(f.t["oqalC+"]),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: f.intl.format(f.t.YnNFWa, { applicationName: j.application.name }),
            }),
        ],
    });
    return (0, r.jsx)(o.ZP, {
        contentTypes: [j.dismissibleContent],
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return t === j.dismissibleContent
                ? (0, r.jsxs)(l.Kqy, {
                      gap: 16,
                      align: "center",
                      children: [
                          (0, r.jsx)(l.LZC, { size: 32 }),
                          O,
                          (0, r.jsx)(s.Z, {
                              user: b,
                              application: j.application,
                              onDismiss: n,
                          }),
                          (0, r.jsx)(u.Z, {}),
                      ],
                  })
                : (0, r.jsxs)(l.Kqy, {
                      gap: 32,
                      align: "center",
                      children: [
                          (0, r.jsx)(l.LZC, { size: 128 }),
                          O,
                          (0, r.jsx)(l.Button, {
                              icon: l.qJs,
                              text: f.intl.string(f.t["lBG2s/"]),
                              size: "md",
                              color: "secondary",
                              onClick: h,
                          }),
                      ],
                  });
        },
    });
}
