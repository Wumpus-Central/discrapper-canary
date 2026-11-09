(n.d(t, { oI: () => eh, cT: () => em }), n(323874), n(14289), n(35956));
var r = n(477900),
    l = n(582128),
    u = n(503698),
    o = n.n(u),
    s = n(727522),
    i = n(134559),
    a = n(855986),
    c = n(289873),
    d = n(765548),
    f = n(956518),
    m = n(559447),
    p = n(645131),
    h = n(296872);
let g = (0, a.UT)(p.A, {
    getQueryId: (e) => (null != e ? `embedded-app-csp:${e}` : null),
    get: (e) => (null != e ? p.A.getPolicy(e) : null),
    load: async (e) => {
        null != e && (await (0, m.y)(e));
    },
});
var E = n(115560),
    b = n(331322),
    v = n(534514),
    S = n(834730),
    x = n(821609),
    j = n(792996),
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
                    variant: "body-md/normal",
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
                            ? (0, r.jsx)(S.E, { variant: "body-sm/normal", color: "text-muted", children: l })
                            : null,
                }),
            ],
        }),
    });
}
var A = n(945810);
let O = (0, A.mj)({
    name: "2026-10-embedded-app-storage-access",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var I = n(676279);
let R = new Set(),
    N = new Set();
function C(e) {
    if (!R.has(e)) for (let t of (R.add(e), N)) t();
}
function k(e) {
    return (
        N.add(e),
        () => {
            N.delete(e);
        }
    );
}
function L(e, t, n) {
    return `${e}/.discord/storage-access/${t}?host=${encodeURIComponent(n.location.origin)}`;
}
let T = { status: "ready" },
    _ = { status: "checking" };
var M = n(267102),
    P = n(440454),
    U = n(484697),
    $ = n(413599),
    D = n(188567);
let H = (0, A.mj)({
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
    X = n(652215),
    K = n(775602);
let V = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]),
    Y = (0, F.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    J = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var Z = n(333007),
    q = n(866665),
    z = n(955418),
    ee = n(533550);
function et(e) {
    let { iframeId: t } = e,
        n = l.useSyncExternalStore(z.SV, z.NO);
    if ((l.useEffect(() => () => (0, z.ny)(t), [t]), null == n || n.iframeId !== t)) return null;
    let u = (0, U.fl)(t);
    return null == u ? null : Z.createPortal((0, r.jsx)(en, { tooltip: n, iframe: u }), u.ownerDocument.body);
}
function en(e) {
    let { tooltip: t, iframe: n } = e,
        [, u] = l.useReducer((e) => e + 1, 0);
    l.useLayoutEffect(() => {
        u();
    }, []);
    let o = n.getBoundingClientRect(),
        s = o.left + Math.min(Math.max(t.x, 0), o.width),
        i = o.top + Math.min(Math.max(t.y, 0), o.height);
    return (0, r.jsx)(q.m, {
        text: t.text,
        keyboardShortcut: t.shortcut,
        position: t.position ?? "top",
        align: t.align ?? "center",
        forceOpen: !0,
        positionKey: `${s},${i}`,
        children: (0, r.jsx)("span", { className: ee.Y, style: { left: s, top: i } }),
    });
}
var er = n(673953),
    el = n(342296),
    eu = n(777977),
    eo = n(504115);
function es(e) {
    let { iframeId: t } = e,
        n = l.useSyncExternalStore(eu.$P, eu.Eh);
    if ((l.useEffect(() => () => (0, eu.OR)(t), [t]), null == n || n.iframeId !== t)) return null;
    let u = (0, U.fl)(t);
    return null == u ? null : Z.createPortal((0, r.jsx)(ei, { popout: n, iframe: u }), u.ownerDocument.body);
}
function ei(e) {
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
                n.ownerDocument.activeElement === n && (0, eu.OR)(t.iframeId);
            }
        }, [n, t.iframeId]));
    let s = n.getBoundingClientRect(),
        i = s.left + Math.min(Math.max(t.x, 0), s.width),
        a = s.top + Math.min(Math.max(t.y, 0), s.height);
    return (0, r.jsx)(el.A, {
        userId: t.userId,
        guildId: t.guildId,
        channelId: t.channelId,
        targetElementRef: u,
        shouldShow: !0,
        position: "right",
        align: "top",
        appContext: (0, er.cH)(n),
        positionKey: `${i},${a}`,
        clickTrap: !0,
        onRequestClose: () => (0, eu.OR)(t.iframeId),
        children: () => (0, r.jsx)("span", { ref: u, className: eo.Y, style: { left: i, top: a } }),
    });
}
var ea = n(809685),
    ec = n(429582),
    ed = n(698398);
let ef = "autoplay; encrypted-media",
    em = { background: "transparent", colorScheme: "normal" };
function ep(e) {
    let {
            url: t,
            className: n,
            style: u,
            shouldRefocus: o,
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
        A = (0, s.useMemoOne)(() => (0, E.A)(), [t]),
        O = l.useRef(null),
        [I, R] = l.useState(!1),
        N = y && !I && (0, ec.H9)(),
        C = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t,
                u = (0, a.bG)([K.Ay], () => K.Ay.keyboardModeEnabled),
                o = (function () {
                    let e = (0, G.re)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, a.bG)([B.A], () => B.A.isOpen()),
                        n = (0, a.bG)([Q.A], () => Q.A.hasLayers()),
                        [r, u] = l.useState(!1),
                        o = (0, M.aL)();
                    return (
                        l.useEffect(() => {
                            function e() {
                                u(!0);
                            }
                            function t() {
                                u(!1);
                            }
                            return (
                                o.subscribe(X.jej.POPOUT_SHOW, e),
                                o.subscribe(X.jej.POPOUT_HIDE, t),
                                () => {
                                    (o.unsubscribe(X.jej.POPOUT_SHOW, e), o.unsubscribe(X.jej.POPOUT_HIDE, t));
                                }
                            );
                        }, [o]),
                        e || t || r || n
                    );
                })(),
                [s, i] = l.useState(!1),
                c = (0, M.aL)();
            return (
                l.useEffect(() => {
                    if (r) return (n.addEventListener("blur", e), () => n.removeEventListener("blur", e));
                    function e() {
                        o && (c.dispatch(X.jej.POPOUT_CLOSE), D._.dispatch(X.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, o, r, c]),
                l.useEffect(() => {
                    if (u || !s || !t) return;
                    let { current: r } = e,
                        l = o;
                    function i(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || l || Y(e);
                        }, 100);
                    }
                    r?.addEventListener("focusout", i);
                    let { activeElement: a } = n.document;
                    return (
                        a?.tagName === "IFRAME" ||
                            (null != a &&
                                "isContentEditable" in a &&
                                (a.isContentEditable ||
                                    "textbox" === a.getAttribute("role") ||
                                    "TEXTAREA" === a.tagName ||
                                    ("INPUT" === a.tagName && !V.has(a.type)))) ||
                            l ||
                            r?.focus(),
                        () => {
                            (r?.removeEventListener("focusout", i), (l = !0));
                        }
                    );
                }, [t, s, u, e, n, o]),
                i
            );
        })(O, o && !N, null == w ? window : w, o),
        k = H.useConfig({ location: "EmbedIFrame" }).enabled ? 2 : 1,
        L = (function (e) {
            let t = (0, h.XF)("useEmbeddedAppCSP"),
                n = t && null != e ? (0, f.S)(e) : null,
                { data: r, error: l } = g(n);
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
        T = "ready" === L.status ? (L.policy.thirdPartyFrames ? void 0 : "object-src 'none'") : void 0,
        _ = { ...c, frame_id: A, platform: i.v.DESKTOP, discord_shim: `${k}` },
        F = null != t ? `${t}?${new URLSearchParams(_)}` : null,
        Z = (function (e) {
            let { allowPopups: t } = e,
                n = J;
            return (t && (n = [...J, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" "));
        })({ allowPopups: m }),
        [q, ee] = l.useState(!1),
        en = (0, a.bG)([$.A], () => $.A.theme),
        er = { ...u };
    null == er.colorScheme && (er.colorScheme = en === X.NJ8.LIGHT ? "light" : "dark");
    let el = l.useRef(null);
    function eo(e) {
        (el.current === A && ((0, z.ny)(A), (0, ea.ir)(A), (0, eu.OR)(A), x?.(A)),
            (el.current = A),
            null != e.contentWindow && e.contentWindow.postMessage([P.A.HELLO, _], t ?? ""),
            C(!0),
            b?.(e));
    }
    let ei = l.useRef(null),
        { colorScheme: ed } = er,
        em = (0, d.A)(() =>
            null != F ? { src: F, sandbox: Z, allow: ef, referrerPolicy: p, colorScheme: ed, csp: T } : null,
        ),
        ep = (0, d.A)(eo),
        eh = l.useCallback(
            (e) => {
                if (((O.current = e), null == e)) {
                    (ei.current?.destroy(), (ei.current = null), (0, U.$9)(A));
                    return;
                }
                let t = em();
                (N &&
                    null != t &&
                    ((ei.current = (0, ec.xW)(
                        e,
                        A,
                        t,
                        () => ep(e),
                        () => R(!0),
                    )),
                    null == ei.current && R(!0)),
                    (0, U.M7)(A, e),
                    null != e.contentWindow && (0, U.Yt)(e.contentWindow, A));
            },
            [A, N, em, ep],
        );
    return (l.useEffect(() => () => (0, ea.ir)(A), [A]),
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
                        (D._.dispatch(X.jej.IFRAME_MOUNT, { id: e, data: { contextSource: f.current } }),
                        i.current?.(e)),
                    () => {
                        d.current && (D._.dispatch(X.jej.IFRAME_UNMOUNT, { id: e }), a.current?.(e));
                    }
                ),
                [e],
            ));
    })(A, { onIframeMount: v, onIframeUnmount: S, contextSource: (0, s.useMemoOne)(() => j, [t]) }),
    l.useEffect(() => {
        function e(e) {
            let { resizing: t } = e;
            ee(t);
        }
        return (
            D._.subscribe(X.jej.MANUAL_IFRAME_RESIZING, e),
            () => {
                D._.unsubscribe(X.jej.MANUAL_IFRAME_RESIZING, e);
            }
        );
    }, []),
    l.useEffect(() => {
        ei.current?.setInputSuspended(q);
    }, [q, eh]),
    l.useEffect(() => {
        null != ed && ei.current?.setColorScheme(ed);
    }, [ed, eh]),
    q && (er.pointerEvents = "none"),
    "loading" === L.status || "failed" === L.status)
        ? null
        : null != F
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    N
                        ? (0, r.jsx)(
                              "iframe",
                              {
                                  ref: eh,
                                  style: { ...er, colorScheme: "normal", pointerEvents: "none" },
                                  sandbox: "",
                                  className: n,
                              },
                              "native-view",
                          )
                        : (0, r.jsx)(
                              "iframe",
                              {
                                  ref: eh,
                                  csp: T,
                                  style: er,
                                  allow: ef,
                                  referrerPolicy: p,
                                  onLoad: (e) => eo(e.currentTarget),
                                  sandbox: Z,
                                  className: n,
                                  src: F,
                              },
                              "page",
                          ),
                    (0, r.jsx)(et, { iframeId: A }),
                    (0, r.jsx)(es, { iframeId: A }),
                ],
            })
          : null;
}
function eh(e) {
    var t;
    let { transparentWhileLoading: n = !1, spinnerWhileLoading: u = !1, placeholderClassName: s, ...i } = e,
        { onLoad: a } = i,
        [d, m] = l.useState(!1),
        p = (0, M._o)(),
        h =
            ((t = i.url),
            (0, I.nr)()
                ? (function (e, t) {
                      let n =
                              O.useConfig({ location: "useEmbeddedAppStorageAccess" }).enabled && null != e
                                  ? (0, f.S)(e)
                                  : null,
                          { cookiesWork: r, markCookiesWork: u } = (function (e, t) {
                              let [n, r] = l.useState(null),
                                  u = l.useSyncExternalStore(k, () => null != e && R.has(e));
                              l.useEffect(() => {
                                  if (null == e || R.has(e)) return;
                                  let n = !0;
                                  return (
                                      !(async function (e) {
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
                                          (l && C(e), n && r({ origin: e, cookiesWork: l }));
                                      })(e),
                                      () => {
                                          n = !1;
                                      }
                                  );
                              }, [e, t]);
                              let o = l.useCallback(() => {
                                      null != e && C(e);
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
                      return null == n || !0 === r ? T : null == r ? _ : { status: "needed", popup: o, openPopup: s };
                  })(t, p)
                : T),
        g = l.useCallback(
            (e) => {
                (m(!0), a?.(e));
            },
            [a],
        );
    if ("needed" === h.status)
        return (0, r.jsx)("div", {
            className: ed.Qf,
            children: (0, r.jsx)(w, { popup: h.popup, onOpenPopup: h.openPopup }),
        });
    let E = "ready" === h.status,
        b = u || "checking" === h.status;
    return (0, r.jsxs)("div", {
        className: ed.Qf,
        children: [
            d && E
                ? null
                : (0, r.jsx)("div", {
                      className: o()(ed.Qf, !0 !== n ? ed.SL : void 0, b ? ed.k$ : void 0, s),
                      children: b ? (0, r.jsx)(c.y, {}) : null,
                  }),
            (0, r.jsx)("div", {
                className: o()(ed.Qf, d ? void 0 : ed.Ar),
                children: E ? (0, r.jsx)(ep, { ...i, onLoad: g }) : null,
            }),
        ],
    });
}
