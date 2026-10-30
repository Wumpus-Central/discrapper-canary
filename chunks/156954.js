(n.d(t, { oI: () => ep, cT: () => ef }), n(323874), n(14289), n(35956));
var r = n(477900),
    l = n(582128),
    u = n(503698),
    s = n.n(u),
    o = n(727522),
    i = n(134559),
    a = n(17928),
    c = n(289873),
    d = n(765548),
    f = n(956518),
    m = n(559447),
    p = n(645131),
    h = n(296872);
let E = (0, a.UT)(p.A, {
    getQueryId: (e) => (null != e ? `embedded-app-csp:${e}` : null),
    get: (e) => (null != e ? p.A.getPolicy(e) : null),
    load: async (e) => {
        null != e && (await (0, m.y)(e));
    },
});
var g = n(132500),
    b = n(331322),
    v = n(297264),
    S = n(834730),
    x = n(821609),
    j = n(105292),
    y = n(919549);
function w(e) {
    let { popup: t, onOpenPopup: n } = e,
        l = (function (e) {
            switch (e) {
                case "idle":
                    return null;
                case "waiting":
                    return j.intl.string(j.t.HQciZk);
                case "closed":
                    return j.intl.string(j.t.FCbNa3);
                case "blocked":
                    return j.intl.string(j.t["3horqQ"]);
            }
        })(t);
    return (0, r.jsx)("div", {
        className: y.G,
        children: (0, r.jsxs)(b.B, {
            className: y.Q,
            direction: "vertical",
            align: "center",
            gap: 12,
            children: [
                (0, r.jsx)(v.D, { variant: "heading-lg/semibold", children: j.intl.string(j.t.WtSSb8) }),
                (0, r.jsx)(S.E, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: j.intl.string(j.t.Jecn0l),
                }),
                (0, r.jsx)(x.$, {
                    variant: "primary",
                    text: (function (e) {
                        switch (e) {
                            case "idle":
                                return j.intl.string(j.t.JR4xVI);
                            case "waiting":
                                return j.intl.string(j.t["4we2oA"]);
                            case "closed":
                            case "blocked":
                                return j.intl.string(j.t["+AbHxM"]);
                        }
                    })(t),
                    onClick: n,
                }),
                (0, r.jsx)("div", {
                    role: "status",
                    children:
                        null != l
                            ? (0, r.jsx)(S.E, { variant: "text-sm/normal", color: "text-muted", children: l })
                            : null,
                }),
            ],
        }),
    });
}
var O = n(945810);
let A = (0, O.mj)({
    name: "2026-10-embedded-app-storage-access",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var R = n(676279);
let I = new Set(),
    L = new Set();
function k(e) {
    if (!I.has(e)) for (let t of (I.add(e), L)) t();
}
function C(e) {
    return (
        L.add(e),
        () => {
            L.delete(e);
        }
    );
}
function N(e, t, n) {
    return `${e}/.discord/storage-access/${t}?host=${encodeURIComponent(n.location.origin)}`;
}
let _ = { status: "ready" },
    M = { status: "checking" };
var T = n(267102),
    P = n(440454),
    $ = n(484697),
    U = n(363195),
    D = n(625494);
let H = (0, O.mj)({
    name: "2026-10-embedded-app-shim-v2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var W = n(851907),
    F = n(435558),
    G = n(192308),
    Q = n(186111),
    B = n(712687),
    K = n(652215),
    V = n(775602);
let X = (0, F.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    Y = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var J = n(333007),
    Z = n(866665),
    q = n(955418),
    z = n(533550);
function ee(e) {
    let { iframeId: t } = e,
        n = l.useSyncExternalStore(q.SV, q.NO);
    if ((l.useEffect(() => () => (0, q.ny)(t), [t]), null == n || n.iframeId !== t)) return null;
    let u = (0, $.fl)(t);
    return null == u ? null : J.createPortal((0, r.jsx)(et, { tooltip: n, iframe: u }), u.ownerDocument.body);
}
function et(e) {
    let { tooltip: t, iframe: n } = e,
        [, u] = l.useReducer((e) => e + 1, 0);
    l.useLayoutEffect(() => {
        u();
    }, []);
    let s = n.getBoundingClientRect(),
        o = s.left + Math.min(Math.max(t.x, 0), s.width),
        i = s.top + Math.min(Math.max(t.y, 0), s.height);
    return (0, r.jsx)(Z.m, {
        text: t.text,
        keyboardShortcut: t.shortcut,
        position: t.position ?? "top",
        align: t.align ?? "center",
        forceOpen: !0,
        positionKey: `${o},${i}`,
        children: (0, r.jsx)("span", { className: z.Y, style: { left: o, top: i } }),
    });
}
var en = n(673953),
    er = n(342296),
    el = n(777977),
    eu = n(504115);
function es(e) {
    let { iframeId: t } = e,
        n = l.useSyncExternalStore(el.$P, el.Eh);
    if ((l.useEffect(() => () => (0, el.OR)(t), [t]), null == n || n.iframeId !== t)) return null;
    let u = (0, $.fl)(t);
    return null == u ? null : J.createPortal((0, r.jsx)(eo, { popout: n, iframe: u }), u.ownerDocument.body);
}
function eo(e) {
    let { popout: t, iframe: n } = e,
        u = l.useRef(null),
        [, s] = l.useReducer((e) => e + 1, 0);
    (l.useLayoutEffect(() => {
        s();
    }, []),
        l.useEffect(() => {
            let e = n.ownerDocument.defaultView;
            if (null != e) return (e.addEventListener("blur", r), () => e.removeEventListener("blur", r));
            function r() {
                n.ownerDocument.activeElement === n && (0, el.OR)(t.iframeId);
            }
        }, [n, t.iframeId]));
    let o = n.getBoundingClientRect(),
        i = o.left + Math.min(Math.max(t.x, 0), o.width),
        a = o.top + Math.min(Math.max(t.y, 0), o.height);
    return (0, r.jsx)(er.A, {
        userId: t.userId,
        targetElementRef: u,
        shouldShow: !0,
        position: "right",
        align: "top",
        appContext: (0, en.cH)(n),
        positionKey: `${i},${a}`,
        clickTrap: !0,
        onRequestClose: () => (0, el.OR)(t.iframeId),
        children: () => (0, r.jsx)("span", { ref: u, className: eu.Y, style: { left: i, top: a } }),
    });
}
var ei = n(809685),
    ea = n(429582),
    ec = n(698398);
let ed = "autoplay; encrypted-media",
    ef = { background: "transparent", colorScheme: "normal" };
function em(e) {
    let {
            url: t,
            className: n,
            style: u,
            shouldRefocus: s,
            queryParams: c,
            allowPopups: m = !1,
            referrerPolicy: p = "origin",
            onLoad: b,
            onIframeMount: v,
            onIframeUnmount: S,
            onGuestReload: x,
            contextSource: j,
            nativeView: y = !1,
        } = e,
        w = (0, W.xi)({}),
        O = (0, o.useMemoOne)(() => (0, g.A)(), [t]),
        A = l.useRef(null),
        [R, I] = l.useState(!1),
        L = y && !R && (0, ea.H9)(),
        k = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t,
                u = (0, a.bG)([V.Ay], () => V.Ay.keyboardModeEnabled),
                s = (function () {
                    let e = (0, G.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, a.bG)([B.A], () => B.A.isOpen()),
                        n = (0, a.bG)([Q.A], () => Q.A.hasLayers()),
                        [r, u] = l.useState(!1),
                        s = (0, T.aL)();
                    return (
                        l.useEffect(() => {
                            function e() {
                                u(!0);
                            }
                            function t() {
                                u(!1);
                            }
                            return (
                                s.subscribe(K.jej.POPOUT_SHOW, e),
                                s.subscribe(K.jej.POPOUT_HIDE, t),
                                () => {
                                    (s.unsubscribe(K.jej.POPOUT_SHOW, e), s.unsubscribe(K.jej.POPOUT_HIDE, t));
                                }
                            );
                        }, [s]),
                        e || t || r || n
                    );
                })(),
                [o, i] = l.useState(!1),
                c = (0, T.aL)();
            return (
                l.useEffect(() => {
                    if (r) return (n.addEventListener("blur", e), () => n.removeEventListener("blur", e));
                    function e() {
                        s && (c.dispatch(K.jej.POPOUT_CLOSE), D._.dispatch(K.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, s, r, c]),
                l.useEffect(() => {
                    if (u || !o || !t) return;
                    let { current: r } = e,
                        l = s;
                    function i(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || l || X(e);
                        }, 100);
                    }
                    return (
                        r?.addEventListener("focusout", i),
                        n.document.activeElement?.tagName === "IFRAME" || l || r?.focus(),
                        () => {
                            (r?.removeEventListener("focusout", i), (l = !0));
                        }
                    );
                }, [t, o, u, e, n, s]),
                i
            );
        })(A, s && !L, null == w ? window : w, s),
        C = H.useConfig({ location: "EmbedIFrame" }).enabled ? 2 : 1,
        N = (function (e) {
            let t = (0, h.XF)("useEmbeddedAppCSP"),
                n = t && null != e ? (0, f.S)(e) : null,
                { data: r, error: l } = E(n);
            return t
                ? null == n
                    ? { status: "developer-served" }
                    : null != r
                      ? { status: "ready", policy: r, routerOrigin: n }
                      : null != l
                        ? { status: "failed" }
                        : { status: "loading" }
                : { status: "not-enforced" };
        })(t),
        _ = "ready" === N.status ? (N.policy.thirdPartyFrames ? void 0 : "object-src 'none'") : void 0,
        M = { ...c, frame_id: O, platform: i.v.DESKTOP, discord_shim: `${C}` },
        F = null != t ? `${t}?${new URLSearchParams(M)}` : null,
        J = (function (e) {
            let { allowPopups: t } = e,
                n = Y;
            return (t && (n = [...Y, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" "));
        })({ allowPopups: m }),
        [Z, z] = l.useState(!1),
        et = (0, a.bG)([U.A], () => U.A.theme),
        en = { ...u };
    null == en.colorScheme && (en.colorScheme = et === K.NJ8.LIGHT ? "light" : "dark");
    let er = l.useRef(null);
    function eu(e) {
        (er.current === O && ((0, q.ny)(O), (0, ei.ir)(O), (0, el.OR)(O), x?.(O)),
            (er.current = O),
            null != e.contentWindow && e.contentWindow.postMessage([P.A.HELLO, M], t ?? ""),
            k(!0),
            b?.(e));
    }
    let eo = l.useRef(null),
        { colorScheme: ec } = en,
        ef = (0, d.A)(() =>
            null != F ? { src: F, sandbox: J, allow: ed, referrerPolicy: p, colorScheme: ec, csp: _ } : null,
        ),
        em = (0, d.A)(eu),
        ep = l.useCallback(
            (e) => {
                if (((A.current = e), null == e)) {
                    (eo.current?.destroy(), (eo.current = null), (0, $.$9)(O));
                    return;
                }
                let t = ef();
                (L &&
                    null != t &&
                    ((eo.current = (0, ea.xW)(
                        e,
                        O,
                        t,
                        () => em(e),
                        () => I(!0),
                    )),
                    null == eo.current && I(!0)),
                    (0, $.M7)(O, e),
                    null != e.contentWindow && (0, $.Yt)(e.contentWindow, O));
            },
            [O, L, ef, em],
        );
    return (l.useEffect(() => () => (0, ei.ir)(O), [O]),
    !(function (e, t) {
        let {
                onIframeMount: n,
                onIframeUnmount: r,
                isNewIframe: u = !0,
                isIframeRetiring: s = !0,
                contextSource: o,
            } = t,
            i = l.useRef(n),
            a = l.useRef(r),
            c = l.useRef(u),
            d = l.useRef(s),
            f = l.useRef(o);
        (l.useEffect(() => {
            ((i.current = n), (a.current = r), (c.current = u), (d.current = s), (f.current = o));
        }),
            l.useEffect(
                () => (
                    c.current &&
                        (D._.dispatch(K.jej.IFRAME_MOUNT, { id: e, data: { contextSource: f.current } }),
                        i.current?.(e)),
                    () => {
                        d.current && (D._.dispatch(K.jej.IFRAME_UNMOUNT, { id: e }), a.current?.(e));
                    }
                ),
                [e],
            ));
    })(O, { onIframeMount: v, onIframeUnmount: S, contextSource: (0, o.useMemoOne)(() => j, [t]) }),
    l.useEffect(() => {
        function e(e) {
            let { resizing: t } = e;
            z(t);
        }
        return (
            D._.subscribe(K.jej.MANUAL_IFRAME_RESIZING, e),
            () => {
                D._.unsubscribe(K.jej.MANUAL_IFRAME_RESIZING, e);
            }
        );
    }, []),
    l.useEffect(() => {
        eo.current?.setInputSuspended(Z);
    }, [Z, ep]),
    l.useEffect(() => {
        null != ec && eo.current?.setColorScheme(ec);
    }, [ec, ep]),
    Z && (en.pointerEvents = "none"),
    "loading" === N.status || "failed" === N.status)
        ? null
        : null != F
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    L
                        ? (0, r.jsx)(
                              "iframe",
                              {
                                  ref: ep,
                                  style: { ...en, colorScheme: "normal", pointerEvents: "none" },
                                  sandbox: "",
                                  className: n,
                              },
                              "native-view",
                          )
                        : (0, r.jsx)(
                              "iframe",
                              {
                                  ref: ep,
                                  csp: _,
                                  style: en,
                                  allow: ed,
                                  referrerPolicy: p,
                                  onLoad: (e) => eu(e.currentTarget),
                                  sandbox: J,
                                  className: n,
                                  src: F,
                              },
                              "page",
                          ),
                    (0, r.jsx)(ee, { iframeId: O }),
                    (0, r.jsx)(es, { iframeId: O }),
                ],
            })
          : null;
}
function ep(e) {
    var t;
    let { transparentWhileLoading: n = !1, spinnerWhileLoading: u = !1, placeholderClassName: o, ...i } = e,
        { onLoad: a } = i,
        [d, m] = l.useState(!1),
        p = (0, T._o)(),
        h =
            ((t = i.url),
            (0, R.nr)()
                ? (function (e, t) {
                      let n =
                              A.useConfig({ location: "useEmbeddedAppStorageAccess" }).enabled && null != e
                                  ? (0, f.S)(e)
                                  : null,
                          { cookiesWork: r, markCookiesWork: u } = (function (e, t) {
                              let [n, r] = l.useState(null),
                                  u = l.useSyncExternalStore(C, () => null != e && I.has(e));
                              l.useEffect(() => {
                                  if (null == e || I.has(e)) return;
                                  let n = !0;
                                  return (
                                      (async function (e) {
                                          let l;
                                          try {
                                              l = await new Promise((n) => {
                                                  let r = t.document.createElement("iframe");
                                                  function l(e) {
                                                      (t.clearTimeout(s),
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
                                                  ((r.hidden = !0), (r.src = N(e, "probe", t)));
                                                  let s = t.setTimeout(() => l(!0), 5e3);
                                                  (t.addEventListener("message", u), t.document.body.append(r));
                                              });
                                          } catch {
                                              l = !0;
                                          }
                                          (l && k(e), n && r({ origin: e, cookiesWork: l }));
                                      })(e),
                                      () => {
                                          n = !1;
                                      }
                                  );
                              }, [e, t]);
                              let s = l.useCallback(() => {
                                      null != e && k(e);
                                  }, [e]),
                                  o = null;
                              return (
                                  null == e || u ? (o = !0) : n?.origin === e && (o = n.cookiesWork),
                                  { cookiesWork: o, markCookiesWork: s }
                              );
                          })(n, t),
                          { popup: s, openPopup: o } = (function (e, t, n) {
                              let [r, u] = l.useState(null),
                                  s = l.useRef(null),
                                  o = null != e && r?.origin === e ? r.popup : "idle";
                              return (
                                  l.useEffect(() => {
                                      if (null != e)
                                          return (
                                              t.addEventListener("message", r),
                                              () => t.removeEventListener("message", r)
                                          );
                                      function r(t) {
                                          t.origin === e &&
                                              t.source === s.current &&
                                              t.data?.type === "DISCORD_STORAGE_ACCESS_CONTINUED" &&
                                              ((s.current = null), n());
                                      }
                                  }, [e, t, n]),
                                  l.useEffect(() => {
                                      if (null == e || "waiting" !== o) return;
                                      let n = t.setInterval(() => {
                                          (null == s.current || s.current.closed) && u({ origin: e, popup: "closed" });
                                      }, 500);
                                      return () => t.clearInterval(n);
                                  }, [e, o, t]),
                                  l.useEffect(
                                      () => () => {
                                          (s.current?.close(), (s.current = null));
                                      },
                                      [e],
                                  ),
                                  {
                                      popup: o,
                                      openPopup: function () {
                                          if (null != e) {
                                              let n, r;
                                              (s.current?.close(),
                                                  (n = Math.round(t.screenX + (t.outerWidth - 440) / 2)),
                                                  (r = Math.round(t.screenY + (t.outerHeight - 460) / 2)),
                                                  (s.current = t.open(
                                                      N(e, "continue", t),
                                                      "discord-embedded-app-storage-access",
                                                      `width=440,height=460,left=${n},top=${r}`,
                                                  )),
                                                  u({ origin: e, popup: null == s.current ? "blocked" : "waiting" }));
                                          }
                                      },
                                  }
                              );
                          })(!1 === r ? n : null, t, u);
                      return null == n || !0 === r ? _ : null == r ? M : { status: "needed", popup: s, openPopup: o };
                  })(t, p)
                : _),
        E = l.useCallback(
            (e) => {
                (m(!0), a?.(e));
            },
            [a],
        );
    if ("needed" === h.status)
        return (0, r.jsx)("div", {
            className: ec.Qf,
            children: (0, r.jsx)(w, { popup: h.popup, onOpenPopup: h.openPopup }),
        });
    let g = "ready" === h.status,
        b = u || "checking" === h.status;
    return (0, r.jsxs)("div", {
        className: ec.Qf,
        children: [
            d && g
                ? null
                : (0, r.jsx)("div", {
                      className: s()(ec.Qf, !0 !== n ? ec.SL : void 0, b ? ec.k$ : void 0, o),
                      children: b ? (0, r.jsx)(c.y, {}) : null,
                  }),
            (0, r.jsx)("div", {
                className: s()(ec.Qf, d ? void 0 : ec.Ar),
                children: g ? (0, r.jsx)(em, { ...i, onLoad: E }) : null,
            }),
        ],
    });
}
