n.d(t, { A: () => g });
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(883344),
    r = n(859524),
    d = n(567061),
    o = n(519028),
    c = n(285545),
    u = n(673310),
    m = n(884801),
    h = n(317039);
let g = function (e) {
    let { scrollContainerRef: t } = e,
        n = (0, s.bG)([l.A], () => l.A.notificationItem(), []),
        { showDot: g } = (0, o.A)(),
        p = i.useRef(null),
        [v, x] = i.useState(!1),
        {
            data: A,
            loading: f,
            isRefreshing: _,
            handleOnRefresh: y,
            viewabilityConfigCallbackPairs: b,
        } = (0, c.i)({ showDot: g, notificationItem: n }),
        I = (0, d.E)();
    i.useEffect(
        () => () => {
            I();
        },
        [I],
    );
    let j = (0, s.bG)([l.A], () => l.A.hasNewContent(), []),
        E = (0, s.bG)([l.A], () => l.A.isHydrating(), []),
        k = i.useMemo(() => b[0].onViewableItemsChanged, [b]),
        { registerItemRef: T } = (0, m.N)(A, k, t),
        C = i.useMemo(() => A.some((e) => "end" === e.data.kind), [A]),
        w = i.useCallback(() => {
            if (C) return;
            let e = t.current;
            null == e ||
                !(e.scrollHeight - e.scrollTop - e.clientHeight < 300) ||
                v ||
                f ||
                E ||
                (x(!0),
                (0, r._x)().finally(() => {
                    setTimeout(() => {
                        x(!1);
                    }, 300);
                }));
        }, [f, v, E, C, t]);
    i.useEffect(() => {
        let e = t.current;
        if (null != e)
            return (
                e.addEventListener("scroll", w),
                () => {
                    e.removeEventListener("scroll", w);
                }
            );
    }, [w, t]);
    let N = i.useCallback(() => {
            t.current?.scrollTo({ top: 0, behavior: "smooth" });
        }, [t]),
        S = i.useCallback(() => {
            y(), N();
        }, [y, N]),
        M = i.useCallback(
            (e) =>
                "loading" === e.data.kind
                    ? (0, a.jsx)(
                          "div",
                          {
                              style: { padding: "32px", textAlign: "center" },
                              children: (0, a.jsx)("div", { children: "Loading ICYMI feed..." }),
                          },
                          e.id,
                      )
                    : "bottomLoading" === e.data.kind
                      ? (0, a.jsx)(
                            "div",
                            {
                                style: { padding: "16px", textAlign: "center" },
                                children: (0, a.jsx)("div", { children: "Loading more..." }),
                            },
                            e.id,
                        )
                      : "end" === e.data.kind
                        ? (0, a.jsx)(
                              "div",
                              {
                                  style: { padding: "32px", textAlign: "center", color: "#949ba4" },
                                  children: (0, a.jsx)("div", { children: "You're all caught up!" }),
                              },
                              e.id,
                          )
                        : (0, a.jsx)(
                              "div",
                              { ref: (t) => T(e.id, t), "data-item-id": e.id, children: (0, a.jsx)(u.A, { item: e }) },
                              e.id,
                          ),
            [T],
        );
    return f && 0 === A.length
        ? (0, a.jsx)("div", {
              style: { padding: "32px", textAlign: "center" },
              children: (0, a.jsx)("div", { children: "Loading ICYMI feed..." }),
          })
        : (0, a.jsxs)("div", {
              className: h.k,
              children: [
                  j &&
                      !_ &&
                      (0, a.jsx)("div", {
                          style: { position: "sticky", top: 0, zIndex: 10, padding: "8px", textAlign: "center" },
                          children: (0, a.jsx)("button", {
                              onClick: S,
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
                  (0, a.jsxs)("div", {
                      ref: p,
                      className: h.j,
                      children: [
                          A.map((e) => M(e)),
                          !C &&
                              (v || E) &&
                              (0, a.jsx)("div", {
                                  style: { padding: "16px", textAlign: "center" },
                                  children: (0, a.jsx)("div", {
                                      style: { color: "#949ba4" },
                                      children: "Loading more...",
                                  }),
                              }),
                      ],
                  }),
              ],
          });
};
