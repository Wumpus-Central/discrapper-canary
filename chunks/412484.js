"use strict";
n.d(t, { Ay: () => T, NH: () => j, T: () => y });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(481613),
    o = n.n(a),
    c = n(837381),
    d = n(311907),
    u = n(397927),
    h = n(73153),
    A = n(964486),
    p = n(775602),
    g = n(928039),
    m = n(954571),
    _ = n(203982),
    f = n(723702),
    x = n(157296),
    C = n(963702),
    E = n(792967),
    I = n(712209),
    b = n(652215),
    N = n(985018),
    S = n(852570);
function T(e) {
    var t, n, l, a, x, T;
    let { onJump: y, showTutorial: j, setSeenTutorial: R, closePopout: O } = e,
        L = s.useRef(null),
        [M, D] = (0, I.Ay)(L),
        { loadState: G, channels: U } = M,
        { maybeLoadMore: P } = D,
        w = (0, d.bG)([p.A], () => p.A.messageGroupSpacing);
    (t = L),
        (n = M),
        (l = D),
        s.useLayoutEffect(() => {
            let { scrollToChannelIndex: e } = n;
            l.clearScrollToChannelIndex();
            let { current: i } = t;
            if (null == i || null == e) return;
            let s = i.getScrollerNode()?.children;
            if (null == s) return;
            let r = s[e];
            if (null == r) return;
            let { scrollTop: a, offsetHeight: o } = i.getScrollerState();
            (r.offsetTop < a || r.offsetTop > a + o) && i.scrollTo({ to: r.offsetTop });
        }),
        (a = M),
        (x = D),
        s.useEffect(() => {
            let e = () => {
                let e = a.channels.find((e) => !e.collapsed);
                null != e && x.markChannelRead(e);
            };
            return (
                _._.subscribe(b.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    _._.unsubscribe(b.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [x, a.channels]),
        (T = D),
        s.useEffect(() => {
            let e = (e) => {
                ((0, f.isMac)() || (0, f.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
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
        s.useEffect(() => {
            m.default.track(b.HAw.OPEN_POPOUT, { type: "Inbox" });
        }, []),
        s.useEffect(
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
                _._.subscribe(b.jej.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead),
                () => {
                    _._.unsubscribe(b.jej.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead);
                }
            ),
        );
    let k = (0, g.A)("unreads", L);
    return 0 === U.length
        ? (0, i.jsx)(C.A, {
              Icon: u.K$s,
              header: N.intl.string(N.t["6XMM+D"]),
              tip: o().os?.family === "OS X" ? N.intl.string(N.t.w9uDOW) : N.intl.string(N.t.BiUJC6),
          })
        : (0, i.jsx)(c.hD, {
              navigator: k,
              children: (0, i.jsx)(c.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, i.jsxs)(u.ChK, {
                          ref: (e) => {
                              (L.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: G === I.mJ.Done ? void 0 : P,
                          className: r()(S.XG, `group-spacing-${w}`),
                          children: [
                              j ? (0, i.jsx)(v, { setSeenTutorial: R }) : null,
                              (0, E.A)(U, D, y),
                              G === I.mJ.Done ? null : (0, i.jsx)(u.y$y, { className: S.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function v(e) {
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
                        children: N.intl.string(N.t.vZPktJ),
                    }),
                    (0, i.jsx)(u.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: N.intl.string(N.t.vWkIII),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: S.dh,
                        children: (0, i.jsx)(u.Button, {
                            variant: "primary",
                            size: "sm",
                            text: N.intl.string(N.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function y() {
    return (0, i.jsx)(C.A, {
        Icon: u.K$s,
        disableStars: !0,
        header: N.intl.string(N.t["KG/ynf"]),
        tip: N.intl.string(N.t.cvcKzX),
    });
}
let j = () => (0, i.jsx)(x.A, { onClick: () => _._.dispatch(b.jej.INBOX_MARK_ALL_UNREADS_READ) });
