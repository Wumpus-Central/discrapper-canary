(n.d(t, { oI: () => eb, cT: () => eE }), n(323874), n(14289), n(35956));
var r = n(477900),
    l = n(582128),
    u = n(503698),
    s = n.n(u),
    o = n(727522),
    i = n(134559),
    a = n(855986),
    c = n(289873),
    d = n(765548),
    f = n(477754),
    m = n(956518),
    p = n(559447),
    h = n(645131),
    E = n(296872);
let g = (0, a.UT)(h.A, {
    getQueryId: (e) => (null != e ? `embedded-app-csp:${e}` : null),
    get: (e) => (null != e ? h.A.getPolicy(e) : null),
    load: async (e) => {
        null != e && (await (0, p.yr)(e));
    },
});
var b = n(115560),
    v = n(331322),
    S = n(534514),
    x = n(834730),
    j = n(821609),
    y = n(792996),
    A = n(919549);
function w(e) {
    let { popup: t, onOpenPopup: n } = e,
        l = (function (e) {
            switch (e) {
                case "idle":
                    return null;
                case "waiting":
                    return y.intl.string(y.t.HQciZk);
                case "closed":
                    return y.intl.string(y.t.FCbNa3);
                case "blocked":
                    return y.intl.string(y.t["3horqQ"]);
            }
        })(t);
    return (0, r.jsx)("div", {
        className: A.G,
        children: (0, r.jsxs)(v.B, {
            className: A.Q,
            direction: "vertical",
            align: "center",
            gap: 12,
            children: [
                (0, r.jsx)(S.D, { variant: "heading-lg/semibold", children: y.intl.string(y.t.WtSSb8) }),
                (0, r.jsx)(x.E, {
                    variant: "body-md/normal",
                    color: "text-muted",
                    children: y.intl.string(y.t.Jecn0l),
                }),
                (0, r.jsx)(j.$, {
                    variant: "primary",
                    text: (function (e) {
                        switch (e) {
                            case "idle":
                                return y.intl.string(y.t.JR4xVI);
                            case "waiting":
                                return y.intl.string(y.t["4we2oA"]);
                            case "closed":
                            case "blocked":
                                return y.intl.string(y.t["+AbHxM"]);
                        }
                    })(t),
                    onClick: n,
                }),
                (0, r.jsx)("div", {
                    role: "status",
                    children:
                        null != l
                            ? (0, r.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: l })
                            : null,
                }),
            ],
        }),
    });
}
var I = n(945810);
let O = (0, I.mj)({
    name: "2026-10-embedded-app-storage-access",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var R = n(676279);
let N = new Set(),
    C = new Set();
function L(e) {
    if (!N.has(e)) for (let t of (N.add(e), C)) t();
}
function T(e) {
    return (
        C.add(e),
        () => {
            C.delete(e);
        }
    );
}
function _(e, t, n) {
    return `${e}/.discord/storage-access/${t}?host=${encodeURIComponent(n.location.origin)}`;
}
let k = { status: "ready" },
    M = { status: "checking" };
var P = n(105790),
    U = n(182025),
    $ = n(267102),
    D = n(440454),
    F = n(484697),
    H = n(413599),
    W = n(188567);
let G = (0, I.mj)({
    name: "2026-10-embedded-app-shim-v2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var Q = n(851907),
    Y = n(435558),
    B = n(192308),
    X = n(186111),
    K = n(712687),
    V = n(652215),
    J = n(775602);
let Z = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]),
    q = (0, Y.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    z = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var ee = n(333007),
    et = n(866665),
    en = n(955418),
    er = n(533550);
function el(e) {
    let { iframeId: t } = e,
        n = l.useSyncExternalStore(en.SV, en.NO);
    if ((l.useEffect(() => () => (0, en.ny)(t), [t]), null == n || n.iframeId !== t)) return null;
    let u = (0, F.fl)(t);
    return null == u ? null : ee.createPortal((0, r.jsx)(eu, { tooltip: n, iframe: u }), u.ownerDocument.body);
}
function eu(e) {
    let { tooltip: t, iframe: n } = e,
        [, u] = l.useReducer((e) => e + 1, 0);
    l.useLayoutEffect(() => {
        u();
    }, []);
    let s = n.getBoundingClientRect(),
        o = s.left + Math.min(Math.max(t.x, 0), s.width),
        i = s.top + Math.min(Math.max(t.y, 0), s.height);
    return (0, r.jsx)(et.m, {
        text: t.text,
        keyboardShortcut: t.shortcut,
        position: t.position ?? "top",
        align: t.align ?? "center",
        forceOpen: !0,
        positionKey: `${o},${i}`,
        children: (0, r.jsx)("span", { className: er.Y, style: { left: o, top: i } }),
    });
}
var es = n(673953),
    eo = n(342296),
    ei = n(777977),
    ea = n(504115);
function ec(e) {
    let { iframeId: t } = e,
        n = l.useSyncExternalStore(ei.$P, ei.Eh);
    if ((l.useEffect(() => () => (0, ei.OR)(t), [t]), null == n || n.iframeId !== t)) return null;
    let u = (0, F.fl)(t);
    return null == u ? null : ee.createPortal((0, r.jsx)(ed, { popout: n, iframe: u }), u.ownerDocument.body);
}
function ed(e) {
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
                n.ownerDocument.activeElement === n && (0, ei.OR)(t.iframeId);
            }
        }, [n, t.iframeId]));
    let o = n.getBoundingClientRect(),
        i = o.left + Math.min(Math.max(t.x, 0), o.width),
        a = o.top + Math.min(Math.max(t.y, 0), o.height);
    return (0, r.jsx)(eo.A, {
        userId: t.userId,
        guildId: t.guildId,
        channelId: t.channelId,
        targetElementRef: u,
        shouldShow: !0,
        position: "right",
        align: "top",
        appContext: (0, es.cH)(n),
        positionKey: `${i},${a}`,
        clickTrap: !0,
        onRequestClose: () => (0, ei.OR)(t.iframeId),
        children: () => (0, r.jsx)("span", { ref: u, className: ea.Y, style: { left: i, top: a } }),
    });
}
var ef = n(809685),
    em = n(429582),
    ep = n(698398);
let eh = "autoplay; encrypted-media",
    eE = { background: "transparent", colorScheme: "normal" };
function eg(e) {
    let {
            url: t,
            className: n,
            style: u,
            shouldRefocus: s,
            queryParams: c,
            allowPopups: p = !1,
            referrerPolicy: h = "origin",
            onLoad: v,
            onIframeMount: S,
            onIframeUnmount: x,
            onGuestReload: j,
            contextSource: y,
            nativeView: A = !1,
        } = e,
        w = (0, Q.xi)({}),
        I = (0, o.useMemoOne)(() => (0, b.A)(), [t]),
        O = l.useRef(null),
        [R, N] = l.useState(!1),
        C = A && !R && (0, em.H9)(),
        L = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t,
                u = (0, a.bG)([J.Ay], () => J.Ay.keyboardModeEnabled),
                s = (function () {
                    let e = (0, B.re)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, a.bG)([K.A], () => K.A.isOpen()),
                        n = (0, a.bG)([X.A], () => X.A.hasLayers()),
                        [r, u] = l.useState(!1),
                        s = (0, $.aL)();
                    return (
                        l.useEffect(() => {
                            function e() {
                                u(!0);
                            }
                            function t() {
                                u(!1);
                            }
                            return (
                                s.subscribe(V.jej.POPOUT_SHOW, e),
                                s.subscribe(V.jej.POPOUT_HIDE, t),
                                () => {
                                    (s.unsubscribe(V.jej.POPOUT_SHOW, e), s.unsubscribe(V.jej.POPOUT_HIDE, t));
                                }
                            );
                        }, [s]),
                        e || t || r || n
                    );
                })(),
                [o, i] = l.useState(!1),
                c = (0, $.aL)();
            return (
                l.useEffect(() => {
                    if (r) return (n.addEventListener("blur", e), () => n.removeEventListener("blur", e));
                    function e() {
                        s && (c.dispatch(V.jej.POPOUT_CLOSE), W._.dispatch(V.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, s, r, c]),
                l.useEffect(() => {
                    if (u || !o || !t) return;
                    let { current: r } = e,
                        l = s;
                    function i(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || l || q(e);
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
                                    ("INPUT" === a.tagName && !Z.has(a.type)))) ||
                            l ||
                            r?.focus(),
                        () => {
                            (r?.removeEventListener("focusout", i), (l = !0));
                        }
                    );
                }, [t, o, u, e, n, s]),
                i
            );
        })(O, s && !C, null == w ? window : w, s),
        T = G.useConfig({ location: "EmbedIFrame" }).enabled ? 2 : 1,
        _ = (function (e) {
            let t = (0, E.XF)("useEmbeddedAppCSP"),
                n = t && null != e ? (0, m.S)(e) : null,
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
        k = "ready" === _.status ? (_.policy.thirdPartyFrames ? void 0 : "object-src 'none'") : void 0,
        M = { ...c, frame_id: I, platform: i.v.DESKTOP, discord_shim: `${T}` },
        Y = null != t ? `${t}?${new URLSearchParams(M)}` : null,
        ee = (function (e) {
            let { allowPopups: t } = e,
                n = z;
            return (t && (n = [...z, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" "));
        })({ allowPopups: p }),
        [et, er] = l.useState(!1),
        eu = (0, a.bG)([H.A], () => H.A.theme),
        es = { ...u };
    null == es.colorScheme && (es.colorScheme = eu === V.NJ8.LIGHT ? "light" : "dark");
    let eo = l.useRef(null);
    function ea(e) {
        ((0, P.Ww)(I)?.event({ step: U.aY.IFRAME_LOAD }),
            eo.current === I && ((0, en.ny)(I), (0, ef.ir)(I), (0, ei.OR)(I), j?.(I)),
            (eo.current = I),
            null != e.contentWindow && e.contentWindow.postMessage([D.A.HELLO, M], t ?? ""),
            L(!0),
            v?.(e));
    }
    let ed = l.useRef(null),
        { colorScheme: ep } = es,
        eE = (0, d.A)(() =>
            null != Y ? { src: Y, sandbox: ee, allow: eh, referrerPolicy: h, colorScheme: ep, csp: k } : null,
        ),
        eg = (0, d.A)(ea),
        eb = (0, d.A)(() => {
            y.type === f.f.FRAME &&
                null != Y &&
                (0, P.zN)(y.frameId)?.event({ step: U.aY.IFRAME_CREATED, iframeId: I, url: Y });
        }),
        ev = l.useCallback(
            (e) => {
                if (((O.current = e), null == e)) {
                    (ed.current?.destroy(), (ed.current = null), (0, F.$9)(I));
                    return;
                }
                let t = eE();
                (C &&
                    null != t &&
                    ((ed.current = (0, em.xW)(
                        e,
                        I,
                        t,
                        () => eg(e),
                        () => N(!0),
                    )),
                    null == ed.current && N(!0)),
                    (0, F.M7)(I, e),
                    null != e.contentWindow && (0, F.Yt)(e.contentWindow, I),
                    eb());
            },
            [I, C, eE, eg, eb],
        );
    return (l.useEffect(() => () => (0, ef.ir)(I), [I]),
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
                        (W._.dispatch(V.jej.IFRAME_MOUNT, { id: e, data: { contextSource: f.current } }),
                        i.current?.(e)),
                    () => {
                        d.current && (W._.dispatch(V.jej.IFRAME_UNMOUNT, { id: e }), a.current?.(e));
                    }
                ),
                [e],
            ));
    })(I, { onIframeMount: S, onIframeUnmount: x, contextSource: (0, o.useMemoOne)(() => y, [t]) }),
    l.useEffect(() => {
        function e(e) {
            let { resizing: t } = e;
            er(t);
        }
        return (
            W._.subscribe(V.jej.MANUAL_IFRAME_RESIZING, e),
            () => {
                W._.unsubscribe(V.jej.MANUAL_IFRAME_RESIZING, e);
            }
        );
    }, []),
    l.useEffect(() => {
        ed.current?.setInputSuspended(et);
    }, [et, ev]),
    l.useEffect(() => {
        null != ep && ed.current?.setColorScheme(ep);
    }, [ep, ev]),
    et && (es.pointerEvents = "none"),
    "loading" === _.status || "failed" === _.status)
        ? null
        : null != Y
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    C
                        ? (0, r.jsx)(
                              "iframe",
                              {
                                  ref: ev,
                                  style: { ...es, colorScheme: "normal", pointerEvents: "none" },
                                  sandbox: "",
                                  className: n,
                              },
                              "native-view",
                          )
                        : (0, r.jsx)(
                              "iframe",
                              {
                                  ref: ev,
                                  csp: k,
                                  style: es,
                                  allow: eh,
                                  referrerPolicy: h,
                                  onLoad: (e) => ea(e.currentTarget),
                                  sandbox: ee,
                                  className: n,
                                  src: Y,
                              },
                              "page",
                          ),
                    (0, r.jsx)(el, { iframeId: I }),
                    (0, r.jsx)(ec, { iframeId: I }),
                ],
            })
          : null;
}
function eb(e) {
    var t;
    let { transparentWhileLoading: n = !1, spinnerWhileLoading: u = !1, placeholderClassName: o, ...i } = e,
        { onLoad: a } = i,
        [d, f] = l.useState(!1),
        p = (0, $._o)(),
        h =
            ((t = i.url),
            (0, R.nr)()
                ? (function (e, t) {
                      let n =
                              O.useConfig({ location: "useEmbeddedAppStorageAccess" }).enabled && null != e
                                  ? (0, m.S)(e)
                                  : null,
                          { cookiesWork: r, markCookiesWork: u } = (function (e, t) {
                              let [n, r] = l.useState(null),
                                  u = l.useSyncExternalStore(T, () => null != e && N.has(e));
                              l.useEffect(() => {
                                  if (null == e || N.has(e)) return;
                                  let n = !0;
                                  return (
                                      !(async function (e) {
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
                                                  ((r.hidden = !0), (r.src = _(e, "probe", t)));
                                                  let s = t.setTimeout(() => l(!0), 5e3);
                                                  (t.addEventListener("message", u), t.document.body.append(r));
                                              });
                                          } catch {
                                              l = !0;
                                          }
                                          (l && L(e), n && r({ origin: e, cookiesWork: l }));
                                      })(e),
                                      () => {
                                          n = !1;
                                      }
                                  );
                              }, [e, t]);
                              let s = l.useCallback(() => {
                                      null != e && L(e);
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
                                                      _(e, "continue", t),
                                                      "discord-embedded-app-storage-access",
                                                      `width=440,height=460,left=${n},top=${r}`,
                                                  )),
                                                  u({ origin: e, popup: null == s.current ? "blocked" : "waiting" }));
                                          }
                                      },
                                  }
                              );
                          })(!1 === r ? n : null, t, u);
                      return null == n || !0 === r ? k : null == r ? M : { status: "needed", popup: s, openPopup: o };
                  })(t, p)
                : k),
        E = l.useCallback(
            (e) => {
                (f(!0), a?.(e));
            },
            [a],
        );
    if ("needed" === h.status)
        return (0, r.jsx)("div", {
            className: ep.Qf,
            children: (0, r.jsx)(w, { popup: h.popup, onOpenPopup: h.openPopup }),
        });
    let g = "ready" === h.status,
        b = u || "checking" === h.status;
    return (0, r.jsxs)("div", {
        className: ep.Qf,
        children: [
            d && g
                ? null
                : (0, r.jsx)("div", {
                      className: s()(ep.Qf, !0 !== n ? ep.SL : void 0, b ? ep.k$ : void 0, o),
                      children: b ? (0, r.jsx)(c.y, {}) : null,
                  }),
            (0, r.jsx)("div", {
                className: s()(ep.Qf, d ? void 0 : ep.Ar),
                children: g ? (0, r.jsx)(eg, { ...i, onLoad: E }) : null,
            }),
        ],
    });
}
