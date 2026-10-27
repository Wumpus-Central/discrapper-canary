(n.d(t, { oI: () => ed, cT: () => ea }), n(323874), n(14289), n(35956));
var r = n(477900),
    l = n(582128),
    u = n(503698),
    o = n.n(u),
    s = n(727522),
    i = n(134559),
    a = n(17928),
    c = n(289873),
    d = n(765548),
    f = n(97157),
    m = n(132500),
    p = n(331322),
    h = n(297264),
    E = n(834730),
    g = n(821609),
    b = n(105292),
    v = n(919549);
function x(e) {
    let { popup: t, onOpenPopup: n } = e,
        l = (function (e) {
            switch (e) {
                case "idle":
                    return null;
                case "waiting":
                    return b.intl.string(b.t.HQciZk);
                case "closed":
                    return b.intl.string(b.t.FCbNa3);
                case "blocked":
                    return b.intl.string(b.t["3horqQ"]);
            }
        })(t);
    return (0, r.jsx)("div", {
        className: v.G,
        children: (0, r.jsxs)(p.B, {
            className: v.Q,
            direction: "vertical",
            align: "center",
            gap: 12,
            children: [
                (0, r.jsx)(h.D, { variant: "heading-lg/semibold", children: b.intl.string(b.t.WtSSb8) }),
                (0, r.jsx)(E.E, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: b.intl.string(b.t.Jecn0l),
                }),
                (0, r.jsx)(g.$, {
                    variant: "primary",
                    text: (function (e) {
                        switch (e) {
                            case "idle":
                                return b.intl.string(b.t.JR4xVI);
                            case "waiting":
                                return b.intl.string(b.t["4we2oA"]);
                            case "closed":
                            case "blocked":
                                return b.intl.string(b.t["+AbHxM"]);
                        }
                    })(t),
                    onClick: n,
                }),
                (0, r.jsx)("div", {
                    role: "status",
                    children:
                        null != l
                            ? (0, r.jsx)(E.E, { variant: "text-sm/normal", color: "text-muted", children: l })
                            : null,
                }),
            ],
        }),
    });
}
var S = n(956518),
    j = n(945810);
let w = (0, j.mj)({
    name: "2026-10-embedded-app-storage-access",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var y = n(676279);
let O = new Set(),
    A = new Set();
function R(e) {
    if (!O.has(e)) for (let t of (O.add(e), A)) t();
}
function I(e) {
    return (
        A.add(e),
        () => {
            A.delete(e);
        }
    );
}
function L(e, t, n) {
    return `${e}/.discord/storage-access/${t}?host=${encodeURIComponent(n.location.origin)}`;
}
let k = { status: "ready" },
    N = { status: "checking" };
var _ = n(267102),
    C = n(440454),
    M = n(484697),
    T = n(363195),
    P = n(625494);
let $ = (0, j.mj)({
    name: "2026-10-embedded-app-shim-v2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var U = n(851907),
    D = n(435558),
    H = n(192308),
    W = n(186111),
    F = n(712687),
    G = n(652215),
    Q = n(775602);
let B = (0, D.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    K = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var V = n(333007),
    Y = n(866665),
    J = n(955418),
    X = n(533550);
function Z(e) {
    let { iframeId: t } = e,
        n = l.useSyncExternalStore(J.SV, J.NO);
    if ((l.useEffect(() => () => (0, J.ny)(t), [t]), null == n || n.iframeId !== t)) return null;
    let u = (0, M.fl)(t);
    return null == u ? null : V.createPortal((0, r.jsx)(q, { tooltip: n, iframe: u }), u.ownerDocument.body);
}
function q(e) {
    let { tooltip: t, iframe: n } = e,
        [, u] = l.useReducer((e) => e + 1, 0);
    l.useLayoutEffect(() => {
        u();
    }, []);
    let o = n.getBoundingClientRect(),
        s = o.left + Math.min(Math.max(t.x, 0), o.width),
        i = o.top + Math.min(Math.max(t.y, 0), o.height);
    return (0, r.jsx)(Y.m, {
        text: t.text,
        keyboardShortcut: t.shortcut,
        position: t.position ?? "top",
        align: t.align ?? "center",
        forceOpen: !0,
        positionKey: `${s},${i}`,
        children: (0, r.jsx)("span", { className: X.Y, style: { left: s, top: i } }),
    });
}
var z = n(673953),
    ee = n(342296),
    et = n(777977),
    en = n(504115);
function er(e) {
    let { iframeId: t } = e,
        n = l.useSyncExternalStore(et.$P, et.Eh);
    if ((l.useEffect(() => () => (0, et.OR)(t), [t]), null == n || n.iframeId !== t)) return null;
    let u = (0, M.fl)(t);
    return null == u ? null : V.createPortal((0, r.jsx)(el, { popout: n, iframe: u }), u.ownerDocument.body);
}
function el(e) {
    let { popout: t, iframe: n } = e,
        u = l.useRef(null),
        [, o] = l.useReducer((e) => e + 1, 0);
    (l.useLayoutEffect(() => {
        o();
    }, []),
        l.useEffect(() => {
            let e = n.ownerDocument.defaultView;
            if (null != e) return (e.addEventListener("blur", r), () => e.removeEventListener("blur", r));
            function r() {
                n.ownerDocument.activeElement === n && (0, et.OR)(t.iframeId);
            }
        }, [n, t.iframeId]));
    let s = n.getBoundingClientRect(),
        i = s.left + Math.min(Math.max(t.x, 0), s.width),
        a = s.top + Math.min(Math.max(t.y, 0), s.height);
    return (0, r.jsx)(ee.A, {
        userId: t.userId,
        targetElementRef: u,
        shouldShow: !0,
        position: "right",
        align: "top",
        appContext: (0, z.cH)(n),
        positionKey: `${i},${a}`,
        clickTrap: !0,
        onRequestClose: () => (0, et.OR)(t.iframeId),
        children: () => (0, r.jsx)("span", { ref: u, className: en.Y, style: { left: i, top: a } }),
    });
}
var eu = n(809685),
    eo = n(429582),
    es = n(698398);
let ei = "autoplay; encrypted-media",
    ea = { background: "transparent", colorScheme: "normal" };
function ec(e) {
    let {
            url: t,
            className: n,
            style: u,
            shouldRefocus: o,
            queryParams: c,
            allowPopups: p = !1,
            referrerPolicy: h = "origin",
            onLoad: E,
            onIframeMount: g,
            onIframeUnmount: b,
            onGuestReload: v,
            contextSource: x,
            nativeView: S = !1,
        } = e,
        j = (0, U.xi)({}),
        w = (0, s.useMemoOne)(() => (0, m.A)(), [t]),
        y = l.useRef(null),
        [O, A] = l.useState(!1),
        R = S && !O && (0, eo.H9)(),
        I = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t,
                u = (0, a.bG)([Q.Ay], () => Q.Ay.keyboardModeEnabled),
                o = (function () {
                    let e = (0, H.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, a.bG)([F.A], () => F.A.isOpen()),
                        n = (0, a.bG)([W.A], () => W.A.hasLayers()),
                        [r, u] = l.useState(!1),
                        o = (0, _.aL)();
                    return (
                        l.useEffect(() => {
                            function e() {
                                u(!0);
                            }
                            function t() {
                                u(!1);
                            }
                            return (
                                o.subscribe(G.jej.POPOUT_SHOW, e),
                                o.subscribe(G.jej.POPOUT_HIDE, t),
                                () => {
                                    (o.unsubscribe(G.jej.POPOUT_SHOW, e), o.unsubscribe(G.jej.POPOUT_HIDE, t));
                                }
                            );
                        }, [o]),
                        e || t || r || n
                    );
                })(),
                [s, i] = l.useState(!1),
                c = (0, _.aL)();
            return (
                l.useEffect(() => {
                    if (r) return (n.addEventListener("blur", e), () => n.removeEventListener("blur", e));
                    function e() {
                        o && (c.dispatch(G.jej.POPOUT_CLOSE), P._.dispatch(G.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, o, r, c]),
                l.useEffect(() => {
                    if (u || !s || !t) return;
                    let { current: r } = e,
                        l = o;
                    function i(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || l || B(e);
                        }, 100);
                    }
                    return (
                        r?.addEventListener("focusout", i),
                        n.document.activeElement?.tagName === "IFRAME" || l || r?.focus(),
                        () => {
                            (r?.removeEventListener("focusout", i), (l = !0));
                        }
                    );
                }, [t, s, u, e, n, o]),
                i
            );
        })(y, o && !R, null == j ? window : j, o),
        L = $.useConfig({ location: "EmbedIFrame" }).enabled ? 2 : 1,
        k = (0, f.A)(t),
        N = "ready" === k.status ? (k.policy.thirdPartyFrames ? void 0 : "object-src 'none'") : void 0,
        D = { ...c, frame_id: w, platform: i.v.DESKTOP, discord_shim: `${L}` },
        V = null != t ? `${t}?${new URLSearchParams(D)}` : null,
        Y = (function (e) {
            let { allowPopups: t } = e,
                n = K;
            return (t && (n = [...K, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" "));
        })({ allowPopups: p }),
        [X, q] = l.useState(!1),
        z = (0, a.bG)([T.A], () => T.A.theme),
        ee = { ...u };
    null == ee.colorScheme && (ee.colorScheme = z === G.NJ8.LIGHT ? "light" : "dark");
    let en = l.useRef(null);
    function el(e) {
        (en.current === w && ((0, J.ny)(w), (0, eu.ir)(w), (0, et.OR)(w), v?.(w)),
            (en.current = w),
            null != e.contentWindow && e.contentWindow.postMessage([C.A.HELLO, D], t ?? ""),
            I(!0),
            E?.(e));
    }
    let es = l.useRef(null),
        { colorScheme: ea } = ee,
        ec = (0, d.A)(() =>
            null != V ? { src: V, sandbox: Y, allow: ei, referrerPolicy: h, colorScheme: ea, csp: N } : null,
        ),
        ed = (0, d.A)(el),
        ef = l.useCallback(
            (e) => {
                if (((y.current = e), null == e)) {
                    (es.current?.destroy(), (es.current = null), (0, M.$9)(w));
                    return;
                }
                let t = ec();
                (R &&
                    null != t &&
                    ((es.current = (0, eo.xW)(
                        e,
                        w,
                        t,
                        () => ed(e),
                        () => A(!0),
                    )),
                    null == es.current && A(!0)),
                    (0, M.M7)(w, e),
                    null != e.contentWindow && (0, M.Yt)(e.contentWindow, w));
            },
            [w, R, ec, ed],
        );
    return (l.useEffect(() => () => (0, eu.ir)(w), [w]),
    !(function (e, t) {
        let {
                onIframeMount: n,
                onIframeUnmount: r,
                isNewIframe: u = !0,
                isIframeRetiring: o = !0,
                contextSource: s,
            } = t,
            i = l.useRef(n),
            a = l.useRef(r),
            c = l.useRef(u),
            d = l.useRef(o),
            f = l.useRef(s);
        (l.useEffect(() => {
            ((i.current = n), (a.current = r), (c.current = u), (d.current = o), (f.current = s));
        }),
            l.useEffect(
                () => (
                    c.current &&
                        (P._.dispatch(G.jej.IFRAME_MOUNT, { id: e, data: { contextSource: f.current } }),
                        i.current?.(e)),
                    () => {
                        d.current && (P._.dispatch(G.jej.IFRAME_UNMOUNT, { id: e }), a.current?.(e));
                    }
                ),
                [e],
            ));
    })(w, { onIframeMount: g, onIframeUnmount: b, contextSource: (0, s.useMemoOne)(() => x, [t]) }),
    l.useEffect(() => {
        function e(e) {
            let { resizing: t } = e;
            q(t);
        }
        return (
            P._.subscribe(G.jej.MANUAL_IFRAME_RESIZING, e),
            () => {
                P._.unsubscribe(G.jej.MANUAL_IFRAME_RESIZING, e);
            }
        );
    }, []),
    l.useEffect(() => {
        es.current?.setInputSuspended(X);
    }, [X, ef]),
    l.useEffect(() => {
        null != ea && es.current?.setColorScheme(ea);
    }, [ea, ef]),
    X && (ee.pointerEvents = "none"),
    "loading" === k.status || "failed" === k.status)
        ? null
        : null != V
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    R
                        ? (0, r.jsx)(
                              "iframe",
                              {
                                  ref: ef,
                                  style: { ...ee, colorScheme: "normal", pointerEvents: "none" },
                                  sandbox: "",
                                  className: n,
                              },
                              "native-view",
                          )
                        : (0, r.jsx)(
                              "iframe",
                              {
                                  ref: ef,
                                  csp: N,
                                  style: ee,
                                  allow: ei,
                                  referrerPolicy: h,
                                  onLoad: (e) => el(e.currentTarget),
                                  sandbox: Y,
                                  className: n,
                                  src: V,
                              },
                              "page",
                          ),
                    (0, r.jsx)(Z, { iframeId: w }),
                    (0, r.jsx)(er, { iframeId: w }),
                ],
            })
          : null;
}
function ed(e) {
    var t;
    let { transparentWhileLoading: n = !1, spinnerWhileLoading: u = !1, ...s } = e,
        { onLoad: i } = s,
        [a, d] = l.useState(!1),
        f = (0, _._o)(),
        m =
            ((t = s.url),
            (0, y.nr)()
                ? (function (e, t) {
                      let n =
                              w.useConfig({ location: "useEmbeddedAppStorageAccess" }).enabled && null != e
                                  ? (0, S.S)(e)
                                  : null,
                          { cookiesWork: r, markCookiesWork: u } = (function (e, t) {
                              let [n, r] = l.useState(null),
                                  u = l.useSyncExternalStore(I, () => null != e && O.has(e));
                              l.useEffect(() => {
                                  if (null == e || O.has(e)) return;
                                  let n = !0;
                                  return (
                                      (async function (e) {
                                          let l;
                                          try {
                                              l = await new Promise((n) => {
                                                  let r = t.document.createElement("iframe");
                                                  function l(e) {
                                                      (t.clearTimeout(o),
                                                          t.removeEventListener("message", u),
                                                          r.remove(),
                                                          n(e));
                                                  }
                                                  function u(t) {
                                                      t.origin === e &&
                                                          t.source === r.contentWindow &&
                                                          t.data?.type === "DISCORD_STORAGE_ACCESS_PROBE" &&
                                                          l(!0 === t.data.cookiesWork);
                                                  }
                                                  ((r.hidden = !0), (r.src = L(e, "probe", t)));
                                                  let o = t.setTimeout(() => l(!0), 5e3);
                                                  (t.addEventListener("message", u), t.document.body.append(r));
                                              });
                                          } catch {
                                              l = !0;
                                          }
                                          (l && R(e), n && r({ origin: e, cookiesWork: l }));
                                      })(e),
                                      () => {
                                          n = !1;
                                      }
                                  );
                              }, [e, t]);
                              let o = l.useCallback(() => {
                                      null != e && R(e);
                                  }, [e]),
                                  s = null;
                              return (
                                  null == e || u ? (s = !0) : n?.origin === e && (s = n.cookiesWork),
                                  { cookiesWork: s, markCookiesWork: o }
                              );
                          })(n, t),
                          { popup: o, openPopup: s } = (function (e, t, n) {
                              let [r, u] = l.useState(null),
                                  o = l.useRef(null),
                                  s = null != e && r?.origin === e ? r.popup : "idle";
                              return (
                                  l.useEffect(() => {
                                      if (null != e)
                                          return (
                                              t.addEventListener("message", r),
                                              () => t.removeEventListener("message", r)
                                          );
                                      function r(t) {
                                          t.origin === e &&
                                              t.source === o.current &&
                                              t.data?.type === "DISCORD_STORAGE_ACCESS_CONTINUED" &&
                                              ((o.current = null), n());
                                      }
                                  }, [e, t, n]),
                                  l.useEffect(() => {
                                      if (null == e || "waiting" !== s) return;
                                      let n = t.setInterval(() => {
                                          (null == o.current || o.current.closed) && u({ origin: e, popup: "closed" });
                                      }, 500);
                                      return () => t.clearInterval(n);
                                  }, [e, s, t]),
                                  l.useEffect(
                                      () => () => {
                                          (o.current?.close(), (o.current = null));
                                      },
                                      [e],
                                  ),
                                  {
                                      popup: s,
                                      openPopup: function () {
                                          if (null != e) {
                                              let n, r;
                                              (o.current?.close(),
                                                  (n = Math.round(t.screenX + (t.outerWidth - 440) / 2)),
                                                  (r = Math.round(t.screenY + (t.outerHeight - 460) / 2)),
                                                  (o.current = t.open(
                                                      L(e, "continue", t),
                                                      "discord-embedded-app-storage-access",
                                                      `width=440,height=460,left=${n},top=${r}`,
                                                  )),
                                                  u({ origin: e, popup: null == o.current ? "blocked" : "waiting" }));
                                          }
                                      },
                                  }
                              );
                          })(!1 === r ? n : null, t, u);
                      return null == n || !0 === r ? k : null == r ? N : { status: "needed", popup: o, openPopup: s };
                  })(t, f)
                : k),
        p = l.useCallback(
            (e) => {
                (d(!0), i?.(e));
            },
            [i],
        );
    if ("needed" === m.status)
        return (0, r.jsx)("div", {
            className: es.Qf,
            children: (0, r.jsx)(x, { popup: m.popup, onOpenPopup: m.openPopup }),
        });
    let h = "ready" === m.status,
        E = u || "checking" === m.status;
    return (0, r.jsxs)("div", {
        className: es.Qf,
        children: [
            a && h
                ? null
                : (0, r.jsx)("div", {
                      className: o()(es.Qf, !0 !== n ? es.SL : void 0, E ? es.k$ : void 0),
                      children: E ? (0, r.jsx)(c.y, {}) : null,
                  }),
            (0, r.jsx)("div", {
                className: o()(es.Qf, a ? void 0 : es.Ar),
                children: h ? (0, r.jsx)(ec, { ...s, onLoad: p }) : null,
            }),
        ],
    });
}
