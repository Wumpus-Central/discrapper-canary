"use strict";
n.d(t, { Kl: () => j });
var r,
    i,
    a,
    s,
    o = n(64700),
    l = n(340287),
    u = n(814947),
    c = n(873263);
function d() {
    return (d = Object.assign
        ? Object.assign.bind()
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
          }).apply(this, arguments);
}
let _ = "get",
    f = "application/x-www-form-urlencoded";
function h(e) {
    return null != e && "string" == typeof e.tagName;
}
function p(e) {
    return h(e) && "button" === e.tagName.toLowerCase();
}
function g(e) {
    return h(e) && "form" === e.tagName.toLowerCase();
}
function E(e) {
    return h(e) && "input" === e.tagName.toLowerCase();
}
function A(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function I(e) {
    return (
        void 0 === e && (e = ""),
        new URLSearchParams(
            "string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams
                ? e
                : Object.keys(e).reduce((t, n) => {
                      let r = e[n];
                      return t.concat(Array.isArray(r) ? r.map((e) => [n, e]) : [[n, r]]);
                  }, []),
        )
    );
}
let T = null;
function y() {
    if (null === T)
        try {
            new FormData(document.createElement("form"), 0), (T = !1);
        } catch (e) {
            T = !0;
        }
    return T;
}
let S = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function v(e) {
    return null == e || S.has(e) ? e : null;
}
function C(e, t) {
    let n, r, i, a, s;
    if (g(e)) {
        let s = e.getAttribute("action");
        (r = s ? stripBasename(s, t) : null),
            (n = e.getAttribute("method") || _),
            (i = v(e.getAttribute("enctype")) || f),
            (a = new FormData(e));
    } else if (p(e) || (E(e) && ("submit" === e.type || "image" === e.type))) {
        let s = e.form;
        if (null == s) throw Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let o = e.getAttribute("formaction") || s.getAttribute("action");
        if (
            ((r = o ? stripBasename(o, t) : null),
            (n = e.getAttribute("formmethod") || s.getAttribute("method") || _),
            (i = v(e.getAttribute("formenctype")) || v(s.getAttribute("enctype")) || f),
            (a = new FormData(s, e)),
            !y())
        ) {
            let { name: t, type: n, value: r } = e;
            if ("image" === n) {
                let e = t ? t + "." : "";
                a.append(e + "x", "0"), a.append(e + "y", "0");
            } else t && a.append(t, r);
        }
    } else if (h(e)) throw Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    else (n = _), (r = null), (i = f), (s = e);
    return (
        a && "text/plain" === i && ((s = a), (a = void 0)),
        { action: r, method: n.toLowerCase(), encType: i, formData: a, body: s }
    );
}
let b = "6";
try {
    window.__reactRouterVersion = b;
} catch (e) {}
function N(e) {
    if (!e) return null;
    let t = Object.entries(e),
        n = {};
    for (let [e, r] of t)
        if (r && "RouteErrorResponse" === r.__type)
            n[e] = new UNSAFE_ErrorResponseImpl(r.status, r.statusText, r.data, !0 === r.internal);
        else if (r && "Error" === r.__type) {
            if (r.__subType) {
                let t = window[r.__subType];
                if ("function" == typeof t)
                    try {
                        let i = new t(r.message);
                        (i.stack = ""), (n[e] = i);
                    } catch (e) {}
            }
            if (null == n[e]) {
                let t = Error(r.message);
                (t.stack = ""), (n[e] = t);
            }
        } else n[e] = r;
    return n;
}
let R = "startTransition",
    O = (r || (r = n.t(o, 2)))[R],
    D = "flushSync",
    L = (i || (i = n.t(l, 2)))[D],
    w = "useId";
(r || (r = n.t(o, 2)))[w];
"u" > typeof window && void 0 !== window.document && window.document.createElement;
function x(e) {
    let t = React.useContext(UNSAFE_DataRouterContext);
    return t || UNSAFE_invariant(!1), t;
}
function P(e) {
    let t = React.useContext(UNSAFE_DataRouterStateContext);
    return t || UNSAFE_invariant(!1), t;
}
function M() {
    if ("u" < typeof document)
        throw Error(
            "You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.",
        );
}
!(function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmit = "useSubmit"),
        (e.UseSubmitFetcher = "useSubmitFetcher"),
        (e.UseFetcher = "useFetcher"),
        (e.useViewTransitionState = "useViewTransitionState");
})(a || (a = {})),
    (function (e) {
        (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
    })(s || (s = {}));
let k = 0,
    U = () => "__" + String(++k) + "__",
    G = "react-router-scroll-positions",
    F = null;
function V(e, t) {
    let { capture: n } = t || {};
    React.useEffect(() => {
        let t = null != n ? { capture: n } : void 0;
        return (
            window.addEventListener("pagehide", e, t),
            () => {
                window.removeEventListener("pagehide", e, t);
            }
        );
    }, [e, n]);
}
let B =
    "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement
        ? o.useLayoutEffect
        : () => {};
function j(e) {
    let { children: t } = e,
        n = (0, c.W6)(),
        [r, i] = o.useState(() => ({ location: n.location, action: n.action }));
    return (
        B(() => {
            n.listen((e, t) => i({ location: e, action: t }));
        }, [n]),
        o.createElement(
            u.Ix,
            { navigationType: r.action, location: r.location, navigator: n },
            o.createElement(u.BV, null, o.createElement(u.qh, { path: "*", element: t })),
        )
    );
}
