n.d(t, { Z: () => m }), n(388685), n(457542);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(144725),
    s = n(613928),
    o = n(390536),
    c = n(853041),
    u = n(352153),
    d = n(589694),
    p = n(62001),
    f = n(869886);
let m = function (e) {
    let { scrollContainerRef: t } = e,
        n = (0, l.e7)([a.Z], () => a.Z.notificationItem(), []),
        { showDot: m } = (0, c.Z)(),
        h = i.useRef(null),
        [g, _] = i.useState(!1),
        {
            data: b,
            loading: E,
            isRefreshing: O,
            handleOnRefresh: I,
            viewabilityConfigCallbackPairs: y,
        } = (0, u.a)({
            showDot: m,
            notificationItem: n,
        }),
        v = (0, o.G)();
    i.useEffect(
        () => () => {
            v();
        },
        [v],
    );
    let C = (0, l.e7)([a.Z], () => a.Z.hasNewContent(), []),
        S = (0, l.e7)([a.Z], () => a.Z.isHydrating(), []),
        T = i.useMemo(() => y[0].onViewableItemsChanged, [y]),
        { registerItemRef: N } = (0, p.m)(b, T, t),
        j = i.useMemo(() => b.some((e) => "end" === e.data.kind), [b]),
        P = i.useCallback(() => {
            if (j) return;
            let e = t.current;
            if (null == e) return;
            let n = e.scrollHeight;
            !(n - e.scrollTop - e.clientHeight < 300) ||
                g ||
                E ||
                S ||
                (_(!0),
                (0, s.es)().finally(() => {
                    setTimeout(() => {
                        _(!1);
                    }, 300);
                }));
        }, [E, g, S, j, t]);
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
            I(), x();
        }, [I, x]),
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
    return E && 0 === b.length
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
                          b.map((e) => Z(e)),
                          !j &&
                              (g || S) &&
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
