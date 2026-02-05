n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(883344),
    s = n(859524),
    o = n(567061),
    d = n(519028),
    c = n(285545),
    u = n(673310),
    A = n(884801),
    h = n(739954);
let _ = function (e) {
    let { scrollContainerRef: t } = e,
        n = (0, a.bG)([l.A], () => l.A.notificationItem(), []),
        { showDot: _ } = (0, d.A)(),
        m = r.useRef(null),
        [p, g] = r.useState(!1),
        {
            data: E,
            loading: f,
            isRefreshing: I,
            handleOnRefresh: C,
            viewabilityConfigCallbackPairs: N,
        } = (0, c.i)({ showDot: _, notificationItem: n }),
        T = (0, o.E)();
    r.useEffect(
        () => () => {
            T();
        },
        [T],
    );
    let S = (0, a.bG)([l.A], () => l.A.hasNewContent(), []),
        x = (0, a.bG)([l.A], () => l.A.isHydrating(), []),
        v = r.useMemo(() => N[0].onViewableItemsChanged, [N]),
        { registerItemRef: b } = (0, A.N)(E, v, t),
        y = r.useMemo(() => E.some((e) => "end" === e.data.kind), [E]),
        L = r.useCallback(() => {
            if (y) return;
            let e = t.current;
            null == e ||
                !(e.scrollHeight - e.scrollTop - e.clientHeight < 300) ||
                p ||
                f ||
                x ||
                (g(!0),
                (0, s._x)().finally(() => {
                    setTimeout(() => {
                        g(!1);
                    }, 300);
                }));
        }, [f, p, x, y, t]);
    r.useEffect(() => {
        let e = t.current;
        if (null != e)
            return (
                e.addEventListener("scroll", L),
                () => {
                    e.removeEventListener("scroll", L);
                }
            );
    }, [L, t]);
    let O = r.useCallback(() => {
            t.current?.scrollTo({ top: 0, behavior: "smooth" });
        }, [t]),
        R = r.useCallback(() => {
            C(), O();
        }, [C, O]),
        P = r.useCallback(
            (e) =>
                "loading" === e.data.kind
                    ? (0, i.jsx)(
                          "div",
                          {
                              style: { padding: "32px", textAlign: "center" },
                              children: (0, i.jsx)("div", { children: "Loading ICYMI feed..." }),
                          },
                          e.id,
                      )
                    : "bottomLoading" === e.data.kind
                      ? (0, i.jsx)(
                            "div",
                            {
                                style: { padding: "16px", textAlign: "center" },
                                children: (0, i.jsx)("div", { children: "Loading more..." }),
                            },
                            e.id,
                        )
                      : "end" === e.data.kind
                        ? (0, i.jsx)(
                              "div",
                              {
                                  style: { padding: "32px", textAlign: "center", color: "#949ba4" },
                                  children: (0, i.jsx)("div", { children: "You're all caught up!" }),
                              },
                              e.id,
                          )
                        : (0, i.jsx)(
                              "div",
                              { ref: (t) => b(e.id, t), "data-item-id": e.id, children: (0, i.jsx)(u.A, { item: e }) },
                              e.id,
                          ),
            [b],
        );
    return f && 0 === E.length
        ? (0, i.jsx)("div", {
              style: { padding: "32px", textAlign: "center" },
              children: (0, i.jsx)("div", { children: "Loading ICYMI feed..." }),
          })
        : (0, i.jsxs)("div", {
              className: h.k,
              children: [
                  S &&
                      !I &&
                      (0, i.jsx)("div", {
                          style: { position: "sticky", top: 0, zIndex: 10, padding: "8px", textAlign: "center" },
                          children: (0, i.jsx)("button", {
                              onClick: R,
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
                  (0, i.jsxs)("div", {
                      ref: m,
                      className: h.j,
                      children: [
                          E.map((e) => P(e)),
                          !y &&
                              (p || x) &&
                              (0, i.jsx)("div", {
                                  style: { padding: "16px", textAlign: "center" },
                                  children: (0, i.jsx)("div", {
                                      style: { color: "#949ba4" },
                                      children: "Loading more...",
                                  }),
                              }),
                      ],
                  }),
              ],
          });
};
