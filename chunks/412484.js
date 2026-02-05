n.d(t, { Ay: () => T, NH: () => y, T: () => v });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(481613),
    o = n.n(r),
    d = n(837381),
    c = n(311907),
    u = n(397927),
    h = n(73153),
    A = n(964486),
    g = n(775602),
    m = n(928039),
    p = n(954571),
    _ = n(203982),
    x = n(723702),
    f = n(157296),
    E = n(963702),
    C = n(792967),
    I = n(712209),
    S = n(652215),
    b = n(985018),
    N = n(852570);
function T(e) {
    var t, n, s, r, f, T;
    let { onJump: v, showTutorial: y, setSeenTutorial: R, closePopout: O } = e,
        L = l.useRef(null),
        [D, M] = (0, I.Ay)(L),
        { loadState: G, channels: U } = D,
        { maybeLoadMore: P } = M,
        k = (0, c.bG)([g.A], () => g.A.messageGroupSpacing);
    (t = L),
        (n = D),
        (s = M),
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
        (r = D),
        (f = M),
        l.useEffect(() => {
            let e = () => {
                let e = r.channels.find((e) => !e.collapsed);
                null != e && f.markChannelRead(e);
            };
            return (
                _._.subscribe(S.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    _._.unsubscribe(S.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [f, r.channels]),
        (T = M),
        l.useEffect(() => {
            let e = (e) => {
                ((0, x.isMac)() || (0, x.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
                    !e.shiftKey &&
                    !e.altKey &&
                    "z" === e.key &&
                    T.undoMarkChannelRead();
            };
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [T]),
        l.useEffect(() => {
            p.default.track(S.HAw.OPEN_POPOUT, { type: "Inbox" });
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
                _._.subscribe(S.jej.INBOX_MARK_ALL_UNREADS_READ, M.markAllRead),
                () => {
                    _._.unsubscribe(S.jej.INBOX_MARK_ALL_UNREADS_READ, M.markAllRead);
                }
            ),
        );
    let w = (0, m.A)("unreads", L);
    return 0 === U.length
        ? (0, i.jsx)(E.A, {
              Icon: u.K$s,
              header: b.intl.string(b.t["6XMM+D"]),
              tip: o().os?.family === "OS X" ? b.intl.string(b.t.w9uDOW) : b.intl.string(b.t.BiUJC6),
          })
        : (0, i.jsx)(d.hD, {
              navigator: w,
              children: (0, i.jsx)(d.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, i.jsxs)(u.ChK, {
                          ref: (e) => {
                              (L.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: G === I.mJ.Done ? void 0 : P,
                          className: a()(N.XG, `group-spacing-${k}`),
                          children: [
                              y ? (0, i.jsx)(j, { setSeenTutorial: R }) : null,
                              (0, C.A)(U, M, v),
                              G === I.mJ.Done ? null : (0, i.jsx)(u.y$y, { className: N.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function j(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: N.d$,
        children: [
            (0, i.jsx)("div", { className: N.cm, children: (0, i.jsx)(u.K$s, { size: "md", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(u.Heading, {
                        className: N.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: b.intl.string(b.t.vZPktJ),
                    }),
                    (0, i.jsx)(u.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: b.intl.string(b.t.vWkIII),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: N.dh,
                        children: (0, i.jsx)(u.Button, {
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
function v() {
    return (0, i.jsx)(E.A, {
        Icon: u.K$s,
        disableStars: !0,
        header: b.intl.string(b.t["KG/ynf"]),
        tip: b.intl.string(b.t.cvcKzX),
    });
}
let y = () => (0, i.jsx)(f.A, { onClick: () => _._.dispatch(S.jej.INBOX_MARK_ALL_UNREADS_READ) });
