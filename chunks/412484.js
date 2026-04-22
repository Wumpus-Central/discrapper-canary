n.d(t, { Ay: () => O, NH: () => F, T: () => M });
var s = n(627968),
    a = n(64700),
    l = n(503698),
    i = n.n(l),
    r = n(481613),
    o = n.n(r),
    d = n(837381),
    c = n(311907),
    u = n(912592),
    h = n(599319),
    _ = n(289873),
    A = n(534514),
    m = n(834730),
    g = n(821609),
    f = n(73153),
    E = n(964486),
    N = n(775602),
    p = n(928039),
    I = n(954571),
    C = n(203982),
    S = n(723702),
    x = n(157296),
    R = n(963702),
    y = n(792967),
    T = n(712209),
    j = n(652215),
    b = n(985018),
    D = n(691503);
function O(e) {
    var t, n, l, r, A, m;
    let { onJump: g, showTutorial: x, setSeenTutorial: O, closePopout: M } = e,
        F = a.useRef(null),
        [L, U] = (0, T.Ay)(F),
        { loadState: k, channels: G } = L,
        { maybeLoadMore: w } = U,
        P = (0, c.bG)([N.A], () => N.A.messageGroupSpacing);
    (t = F),
        (n = L),
        (l = U),
        a.useLayoutEffect(() => {
            let { scrollToChannelIndex: e } = n;
            l.clearScrollToChannelIndex();
            let { current: s } = t;
            if (null == s || null == e) return;
            let a = s.getScrollerNode()?.children;
            if (null == a) return;
            let i = a[e];
            if (null == i) return;
            let { scrollTop: r, offsetHeight: o } = s.getScrollerState();
            (i.offsetTop < r || i.offsetTop > r + o) && s.scrollTo({ to: i.offsetTop });
        }),
        (r = L),
        (A = U),
        a.useEffect(() => {
            let e = () => {
                let e = r.channels.find((e) => !e.collapsed);
                null != e && A.markChannelRead(e);
            };
            return (
                C._.subscribe(j.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    C._.unsubscribe(j.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [A, r.channels]),
        (m = U),
        a.useEffect(() => {
            let e = (e) => {
                ((0, S.isMac)() || (0, S.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
                    !e.shiftKey &&
                    !e.altKey &&
                    "z" === e.key &&
                    m.undoMarkChannelRead();
            };
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [m]),
        a.useEffect(() => {
            I.default.track(j.HAw.OPEN_POPOUT, { type: "Inbox" });
        }, []),
        a.useEffect(
            () => (
                f.h.subscribe("CONNECTION_OPEN", M),
                () => {
                    f.h.unsubscribe("CONNECTION_OPEN", M);
                }
            ),
            [M],
        ),
        (0, E.Ay)(
            () => (
                C._.subscribe(j.jej.INBOX_MARK_ALL_UNREADS_READ, U.markAllRead),
                () => {
                    C._.unsubscribe(j.jej.INBOX_MARK_ALL_UNREADS_READ, U.markAllRead);
                }
            ),
        );
    let B = (0, p.A)("unreads", F);
    return 0 === G.length
        ? (0, s.jsx)(R.A, {
              Icon: u.K,
              header: b.intl.string(b.t["6XMM+D"]),
              tip: o().os?.family === "OS X" ? b.intl.string(b.t.w9uDOW) : b.intl.string(b.t.BiUJC6),
          })
        : (0, s.jsx)(d.hD, {
              navigator: B,
              children: (0, s.jsx)(d.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, s.jsxs)(h.Ch, {
                          ref: (e) => {
                              (F.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: k === T.mJ.Done ? void 0 : w,
                          className: i()(D.XG, `group-spacing-${P}`),
                          children: [
                              x ? (0, s.jsx)(v, { setSeenTutorial: O }) : null,
                              (0, y.A)(G, U, g),
                              k === T.mJ.Done ? null : (0, s.jsx)(_.y, { className: D.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function v(e) {
    let { setSeenTutorial: t } = e;
    return (0, s.jsxs)("div", {
        className: D.d$,
        children: [
            (0, s.jsx)("div", { className: D.cm, children: (0, s.jsx)(u.K, { size: "md", color: "currentColor" }) }),
            (0, s.jsxs)("div", {
                children: [
                    (0, s.jsx)(A.D, {
                        className: D.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: b.intl.string(b.t.vZPktJ),
                    }),
                    (0, s.jsx)(m.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: b.intl.string(b.t.vWkIII),
                    }),
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: D.dh,
                        children: (0, s.jsx)(g.$, {
                            variant: "primary",
                            size: "sm",
                            text: b.intl.string(b.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function M() {
    return (0, s.jsx)(R.A, {
        Icon: u.K,
        disableStars: !0,
        header: b.intl.string(b.t["KG/ynf"]),
        tip: b.intl.string(b.t.cvcKzX),
    });
}
let F = () => (0, s.jsx)(x.A, { onClick: () => C._.dispatch(j.jej.INBOX_MARK_ALL_UNREADS_READ) });
