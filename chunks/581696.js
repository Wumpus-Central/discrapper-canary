n.d(t, { Z: () => g }), n(388685), n(457542);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(144725),
    o = n(613928),
    s = n(390536),
    c = n(853041),
    u = n(352153),
    d = n(589694),
    p = n(62001),
    f = n(38282);
let g = function (e) {
    let { scrollContainerRef: t } = e,
        n = (0, l.e7)([a.Z], () => a.Z.notificationItem(), []),
        { showDot: g } = (0, c.Z)(),
        h = i.useRef(null),
        [m, b] = i.useState(!1),
        {
            data: _,
            loading: E,
            isRefreshing: O,
            handleOnRefresh: v,
            viewabilityConfigCallbackPairs: y,
        } = (0, u.a)({
            showDot: g,
            notificationItem: n,
        }),
        I = (0, s.G)();
    i.useEffect(
        () => () => {
            I();
        },
        [I],
    );
    let C = (0, l.e7)([a.Z], () => a.Z.hasNewContent(), []),
        S = (0, l.e7)([a.Z], () => a.Z.isHydrating(), []),
        T = i.useMemo(() => y[0].onViewableItemsChanged, [y]),
        { registerItemRef: N } = (0, p.m)(_, T, t),
        j = i.useMemo(() => _.some((e) => "end" === e.data.kind), [_]),
        P = i.useCallback(() => {
            if (j) return;
            let e = t.current;
            if (null == e) return;
            let n = e.scrollHeight;
            !(n - e.scrollTop - e.clientHeight < 300) ||
                m ||
                E ||
                S ||
                (b(!0),
                (0, o.es)().finally(() => {
                    setTimeout(() => {
                        b(!1);
                    }, 300);
                }));
        }, [E, m, S, j, t]);
    i.useEffect(() => {
        let e = t.current;
        if (null != e)
            return (
                e.addEventListener("scroll", P),
                () => {
                    e.removeEventListener("scroll", P);
                }
            );
    }, [P, t]);
    let x = i.useCallback(() => {
            var e;
            null == (e = t.current) ||
                e.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
        }, [t]),
        A = i.useCallback(() => {
            v(), x();
        }, [v, x]),
        Z = i.useCallback(
            (e) =>
                "loading" === e.data.kind
                    ? (0, r.jsx)(
                          "div",
                          {
                              style: {
                                  padding: "32px",
                                  textAlign: "center",
                              },
                              children: (0, r.jsx)("div", { children: "Loading ICYMI feed..." }),
                          },
                          e.id,
                      )
                    : "bottomLoading" === e.data.kind
                      ? (0, r.jsx)(
                            "div",
                            {
                                style: {
                                    padding: "16px",
                                    textAlign: "center",
                                },
                                children: (0, r.jsx)("div", { children: "Loading more..." }),
                            },
                            e.id,
                        )
                      : "end" === e.data.kind
                        ? (0, r.jsx)(
                              "div",
                              {
                                  style: {
                                      padding: "32px",
                                      textAlign: "center",
                                      color: "#949ba4",
                                  },
                                  children: (0, r.jsx)("div", { children: "You're all caught up!" }),
                              },
                              e.id,
                          )
                        : (0, r.jsx)(
                              "div",
                              {
                                  ref: (t) => N(e.id, t),
                                  "data-item-id": e.id,
                                  children: (0, r.jsx)(d.Z, { item: e }),
                              },
                              e.id,
                          ),
            [N],
        );
    return E && 0 === _.length
        ? (0, r.jsx)("div", {
              style: {
                  padding: "32px",
                  textAlign: "center",
              },
              children: (0, r.jsx)("div", { children: "Loading ICYMI feed..." }),
          })
        : (0, r.jsxs)("div", {
              className: f.container,
              children: [
                  C &&
                      !O &&
                      (0, r.jsx)("div", {
                          style: {
                              position: "sticky",
                              top: 0,
                              zIndex: 10,
                              padding: "8px",
                              textAlign: "center",
                          },
                          children: (0, r.jsx)("button", {
                              onClick: A,
                              style: {
                                  background: "#5865f2",
                                  color: "white",
                                  border: "none",
                                  borderRadius: "16px",
                                  padding: "8px 16px",
                                  cursor: "pointer",
                                  fontSize: "14px",
                                  fontWeight: 500,
                              },
                              children: "New content available",
                          }),
                      }),
                  (0, r.jsxs)("div", {
                      ref: h,
                      className: f.scrollContainer,
                      children: [
                          _.map((e) => Z(e)),
                          !j &&
                              (m || S) &&
                              (0, r.jsx)("div", {
                                  style: {
                                      padding: "16px",
                                      textAlign: "center",
                                  },
                                  children: (0, r.jsx)("div", {
                                      style: { color: "#949ba4" },
                                      children: "Loading more...",
                                  }),
                              }),
                      ],
                  }),
              ],
          });
};
