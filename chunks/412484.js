n.d(t, { Ay: () => b, NH: () => j, T: () => v });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(481613),
    o = n.n(r),
    c = n(837381),
    d = n(311907),
    u = n(397927),
    h = n(73153),
    A = n(964486),
    _ = n(775602),
    m = n(928039),
    g = n(954571),
    p = n(203982),
    f = n(723702),
    x = n(157296),
    E = n(963702),
    I = n(792967),
    C = n(712209),
    N = n(652215),
    T = n(985018),
    S = n(996863);
function b(e) {
    var t, n, s, r, x, b;
    let { onJump: v, showTutorial: j, setSeenTutorial: R, closePopout: O } = e,
        L = l.useRef(null),
        [M, D] = (0, C.Ay)(L),
        { loadState: U, channels: G } = M,
        { maybeLoadMore: P } = D,
        k = (0, d.bG)([_.A], () => _.A.messageGroupSpacing);
    (t = L),
        (n = M),
        (s = D),
        l.useLayoutEffect(() => {
            let { scrollToChannelIndex: e } = n;
            s.clearScrollToChannelIndex();
            let { current: i } = t;
            if (null == i || null == e) return;
            let l = i.getScrollerNode()?.children;
            if (null == l) return;
            let a = l[e];
            if (null == a) return;
            let { scrollTop: r, offsetHeight: o } = i.getScrollerState();
            (a.offsetTop < r || a.offsetTop > r + o) && i.scrollTo({ to: a.offsetTop });
        }),
        (r = M),
        (x = D),
        l.useEffect(() => {
            let e = () => {
                let e = r.channels.find((e) => !e.collapsed);
                null != e && x.markChannelRead(e);
            };
            return (
                p._.subscribe(N.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    p._.unsubscribe(N.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [x, r.channels]),
        (b = D),
        l.useEffect(() => {
            let e = (e) => {
                ((0, f.isMac)() || (0, f.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
                    !e.shiftKey &&
                    !e.altKey &&
                    "z" === e.key &&
                    b.undoMarkChannelRead();
            };
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [b]),
        l.useEffect(() => {
            g.default.track(N.HAw.OPEN_POPOUT, { type: "Inbox" });
        }, []),
        l.useEffect(
            () => (
                h.h.subscribe("CONNECTION_OPEN", O),
                () => {
                    h.h.unsubscribe("CONNECTION_OPEN", O);
                }
            ),
            [O],
        ),
        (0, A.Ay)(
            () => (
                p._.subscribe(N.jej.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead),
                () => {
                    p._.unsubscribe(N.jej.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead);
                }
            ),
        );
    let w = (0, m.A)("unreads", L);
    return 0 === G.length
        ? (0, i.jsx)(E.A, {
              Icon: u.K$s,
              header: T.intl.string(T.t["6XMM+D"]),
              tip: o().os?.family === "OS X" ? T.intl.string(T.t.w9uDOW) : T.intl.string(T.t.BiUJC6),
          })
        : (0, i.jsx)(c.hD, {
              navigator: w,
              children: (0, i.jsx)(c.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, i.jsxs)(u.ChK, {
                          ref: (e) => {
                              (L.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: U === C.mJ.Done ? void 0 : P,
                          className: a()(S.XG, `group-spacing-${k}`),
                          children: [
                              j ? (0, i.jsx)(y, { setSeenTutorial: R }) : null,
                              (0, I.A)(G, D, v),
                              U === C.mJ.Done ? null : (0, i.jsx)(u.y$y, { className: S.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function y(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: S.d$,
        children: [
            (0, i.jsx)("div", { className: S.cm, children: (0, i.jsx)(u.K$s, { size: "md", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(u.Heading, {
                        className: S.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: T.intl.string(T.t.vZPktJ),
                    }),
                    (0, i.jsx)(u.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: T.intl.string(T.t.vWkIII),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: S.dh,
                        children: (0, i.jsx)(u.Button, {
                            variant: "primary",
                            size: "sm",
                            text: T.intl.string(T.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function v() {
    return (0, i.jsx)(E.A, {
        Icon: u.K$s,
        disableStars: !0,
        header: T.intl.string(T.t["KG/ynf"]),
        tip: T.intl.string(T.t.cvcKzX),
    });
}
let j = () => (0, i.jsx)(x.A, { onClick: () => p._.dispatch(N.jej.INBOX_MARK_ALL_UNREADS_READ) });
