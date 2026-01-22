n.d(t, {
    A: () => b,
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(566605),
    s = n(379848),
    o = n(183555),
    c = n(357541),
    u = n(814221),
    d = n(266713),
    f = n(985018),
    p = n(798521);

function b() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, o.NJ)(),
        b = l.useRef(!1),
        {
            suggestions: g,
            currentUser: m,
            isLoading: y,
        } = (0, a.A)({
            location: "UserProfileModalV2ApplicationWidgetsEmptyState",
        }),
        O = null == g ? void 0 : g[0],
        j = l.useCallback(() => {
            t({
                action: "PRESS_ADD_WIDGET",
            }),
                (0, i.mMO)(
                    async () => {
                        let { default: e } = await n.e("87591").then(n.bind(n, 333114));
                        return (n) => {
                            var l, i;
                            return (0, r.jsx)(
                                e,
                                ((l = (function (e) {
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
                                (i = i =
                                    {
                                        trackUserProfileEditAction: t,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                l),
                            );
                        };
                    },
                    {
                        stackingBehavior: "stack",
                    },
                );
        }, [t]);
    if (
        (l.useEffect(() => {
            y ||
                null == O ||
                b.current ||
                (e({
                    action: "VIEW_APPLICATION_WIDGETS_EMPTY_STATE",
                    applicationId: O.application.id,
                }),
                (b.current = !0));
        }, [y, e, O]),
        y)
    )
        return (0, r.jsx)("div", {
            className: p.L,
            children: (0, r.jsx)(i.y$y, {}),
        });
    if (null == O) return (0, r.jsx)(d.A, {});
    let x = (0, r.jsxs)(i.BJc, {
        gap: 4,
        className: p.w,
        children: [
            (0, r.jsx)(i.Heading, {
                variant: "heading-md/medium",
                color: "text-strong",
                children: f.intl.string(f.t["oqalC+"]),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: f.intl.format(f.t.YnNFWa, {
                    applicationName: O.application.name,
                }),
            }),
        ],
    });
    return (0, r.jsx)(s.Ay, {
        contentTypes: [O.dismissibleContent],
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return t === O.dismissibleContent
                ? (0, r.jsxs)(i.BJc, {
                      gap: 16,
                      align: "center",
                      children: [
                          (0, r.jsx)(i.hKd, {
                              size: 32,
                          }),
                          x,
                          (0, r.jsx)(c.A, {
                              user: m,
                              application: O.application,
                              onDismiss: n,
                          }),
                          (0, r.jsx)(u.A, {}),
                      ],
                  })
                : (0, r.jsxs)(i.BJc, {
                      gap: 32,
                      align: "center",
                      children: [
                          (0, r.jsx)(i.hKd, {
                              size: 128,
                          }),
                          x,
                          (0, r.jsx)(i.Button, {
                              icon: i.j96,
                              text: f.intl.string(f.t["lBG2s/"]),
                              size: "md",
                              color: "secondary",
                              onClick: j,
                          }),
                      ],
                  });
        },
    });
}
