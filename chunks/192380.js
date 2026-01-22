n.d(t, {
    A: () => h,
}),
    n(896048),
    n(492834);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(883344),
    s = n(859524),
    o = n(567061),
    c = n(519028),
    u = n(285545),
    d = n(673310),
    p = n(884801),
    f = n(739954);
let h = function (e) {
    let { scrollContainerRef: t } = e,
        n = (0, l.bG)([a.A], () => a.A.notificationItem(), []),
        { showDot: h } = (0, c.A)(),
        A = i.useRef(null),
        [g, m] = i.useState(!1),
        {
            data: b,
            loading: _,
            isRefreshing: E,
            handleOnRefresh: O,
            viewabilityConfigCallbackPairs: y,
        } = (0, u.i)({
            showDot: h,
            notificationItem: n,
        }),
        I = (0, o.E)();
    i.useEffect(
        () => () => {
            I();
        },
        [I],
    );
    let v = (0, l.bG)([a.A], () => a.A.hasNewContent(), []),
        S = (0, l.bG)([a.A], () => a.A.isHydrating(), []),
        C = i.useMemo(() => y[0].onViewableItemsChanged, [y]),
        { registerItemRef: N } = (0, p.N)(b, C, t),
        T = i.useMemo(() => b.some((e) => "end" === e.data.kind), [b]),
        j = i.useCallback(() => {
            if (T) return;
            let e = t.current;
            null == e ||
                !(e.scrollHeight - e.scrollTop - e.clientHeight < 300) ||
                g ||
                _ ||
                S ||
                (m(!0),
                (0, s._x)().finally(() => {
                    setTimeout(() => {
                        m(!1);
                    }, 300);
                }));
        }, [_, g, S, T, t]);
    i.useEffect(() => {
        let e = t.current;
        if (null != e)
            return (
                e.addEventListener("scroll", j),
                () => {
                    e.removeEventListener("scroll", j);
                }
            );
    }, [j, t]);
    let x = i.useCallback(() => {
            var e;
            null == (e = t.current) ||
                e.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
        }, [t]),
        P = i.useCallback(() => {
            O(), x();
        }, [O, x]),
        w = i.useCallback(
            (e) =>
                "loading" === e.data.kind
                    ? (0, r.jsx)(
                          "div",
                          {
                              style: {
                                  padding: "32px",
                                  textAlign: "center",
                              },
                              children: (0, r.jsx)("div", {
                                  children: "Loading ICYMI feed...",
                              }),
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
                                children: (0, r.jsx)("div", {
                                    children: "Loading more...",
                                }),
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
                                  children: (0, r.jsx)("div", {
                                      children: "You're all caught up!",
                                  }),
                              },
                              e.id,
                          )
                        : (0, r.jsx)(
                              "div",
                              {
                                  ref: (t) => N(e.id, t),
                                  "data-item-id": e.id,
                                  children: (0, r.jsx)(d.A, {
                                      item: e,
                                  }),
                              },
                              e.id,
                          ),
            [N],
        );
    return _ && 0 === b.length
        ? (0, r.jsx)("div", {
              style: {
                  padding: "32px",
                  textAlign: "center",
              },
              children: (0, r.jsx)("div", {
                  children: "Loading ICYMI feed...",
              }),
          })
        : (0, r.jsxs)("div", {
              className: f.k,
              children: [
                  v &&
                      !E &&
                      (0, r.jsx)("div", {
                          style: {
                              position: "sticky",
                              top: 0,
                              zIndex: 10,
                              padding: "8px",
                              textAlign: "center",
                          },
                          children: (0, r.jsx)("button", {
                              onClick: P,
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
                      ref: A,
                      className: f.j,
                      children: [
                          b.map((e) => w(e)),
                          !T &&
                              (g || S) &&
                              (0, r.jsx)("div", {
                                  style: {
                                      padding: "16px",
                                      textAlign: "center",
                                  },
                                  children: (0, r.jsx)("div", {
                                      style: {
                                          color: "#949ba4",
                                      },
                                      children: "Loading more...",
                                  }),
                              }),
                      ],
                  }),
              ],
          });
};
