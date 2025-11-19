_.d(e, {
    U0: () => t6,
    fA: () => S,
    gS: () => tQ,
    qm: () => w,
    rp: () => b,
});
var a = _(263449),
    r = _(425930),
    n = _(899517),
    o = _(467510),
    E = _(622916),
    i = _(26506);
let c = n.n,
    s = c.document,
    l = c.navigator,
    I = "Report a Bug",
    R = "Cancel",
    N = "Send Bug Report",
    A = "Confirm",
    u = "Report a Bug",
    T = "your.email@example.org",
    d = "Email",
    f = "What's the bug? What did you expect?",
    O = "Description",
    L = "Your Name",
    p = "Name",
    C = "Thank you for your report!",
    P = "(required)",
    h = "Add a screenshot",
    D = "Remove screenshot",
    S = (t, e = { includeReplay: !0 }) => {
        if (!t.message) throw Error("Unable to submit feedback with empty message");
        let _ = (0, a.s3)();
        if (!_) throw Error("No client setup, cannot send feedback.");
        t.tags && Object.keys(t.tags).length && (0, a.nZ)().setTags(t.tags);
        let n = (0, r.N)(
            {
                source: "api",
                url: (0, o.l4)(),
                ...t,
            },
            e,
        );
        return new Promise((t, e) => {
            let a = setTimeout(() => e("Unable to determine if Feedback was correctly sent."), 5000),
                r = _.on("afterSendEvent", (_, o) => {
                    if (_.event_id === n)
                        return (clearTimeout(a),
                        r(),
                        o && "number" == typeof o.statusCode && o.statusCode >= 200 && o.statusCode < 300 && t(n),
                        o && "number" == typeof o.statusCode && 0 === o.statusCode)
                            ? e(
                                  "Unable to send Feedback. This is because of network issues, or because you are using an ad-blocker.",
                              )
                            : e(
                                  "Unable to send Feedback. This could be because of network issues, or because you are using an ad-blocker",
                              );
                });
        });
    },
    g = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
function y(t, e) {
    return {
        ...t,
        ...e,
        tags: {
            ...t.tags,
            ...e.tags,
        },
        onFormOpen: () => {
            e.onFormOpen && e.onFormOpen(), t.onFormOpen && t.onFormOpen();
        },
        onFormClose: () => {
            e.onFormClose && e.onFormClose(), t.onFormClose && t.onFormClose();
        },
        onSubmitSuccess: (_) => {
            e.onSubmitSuccess && e.onSubmitSuccess(_), t.onSubmitSuccess && t.onSubmitSuccess(_);
        },
        onSubmitError: (_) => {
            e.onSubmitError && e.onSubmitError(_), t.onSubmitError && t.onSubmitError(_);
        },
        onFormSubmitted: () => {
            e.onFormSubmitted && e.onFormSubmitted(), t.onFormSubmitted && t.onFormSubmitted();
        },
        themeDark: {
            ...t.themeDark,
            ...e.themeDark,
        },
        themeLight: {
            ...t.themeLight,
            ...e.themeLight,
        },
    };
}
function m(t, e) {
    return (
        Object.entries(e).forEach(([e, _]) => {
            t.setAttributeNS(null, e, _);
        }),
        t
    );
}
let G = "rgba(88, 74, 192, 1)",
    v = {
        foreground: "#2b2233",
        background: "#ffffff",
        accentForeground: "white",
        accentBackground: G,
        successColor: "#268d75",
        errorColor: "#df3338",
        border: "1.5px solid rgba(41, 35, 47, 0.13)",
        boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
        outline: "1px auto var(--accent-background)",
        interactiveFilter: "brightness(95%)",
    },
    U = {
        foreground: "#ebe6ef",
        background: "#29232f",
        accentForeground: "white",
        accentBackground: G,
        successColor: "#2da98c",
        errorColor: "#f55459",
        border: "1.5px solid rgba(235, 230, 239, 0.15)",
        boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
        outline: "1px auto var(--accent-background)",
        interactiveFilter: "brightness(150%)",
    };
function W(t) {
    return `
  --foreground: ${t.foreground};
  --background: ${t.background};
  --accent-foreground: ${t.accentForeground};
  --accent-background: ${t.accentBackground};
  --success-color: ${t.successColor};
  --error-color: ${t.errorColor};
  --border: ${t.border};
  --box-shadow: ${t.boxShadow};
  --outline: ${t.outline};
  --interactive-filter: ${t.interactiveFilter};
  `;
}
let b =
    ({ lazyLoadIntegration: t, getModalIntegration: e, getScreenshotIntegration: _ }) =>
    ({
        id: r = "sentry-feedback",
        autoInject: n = !0,
        showBranding: o = !0,
        isEmailRequired: G = !1,
        isNameRequired: b = !1,
        showEmail: w = !0,
        showName: M = !0,
        enableScreenshot: Y = !0,
        useSentryUser: B = {
            email: "email",
            name: "username",
        },
        tags: H,
        colorScheme: K = "system",
        themeLight: k = {},
        themeDark: x = {},
        addScreenshotButtonLabel: V = h,
        cancelButtonLabel: F = R,
        confirmButtonLabel: X = A,
        emailLabel: j = d,
        emailPlaceholder: $ = T,
        formTitle: q = u,
        isRequiredLabel: z = P,
        messageLabel: J = O,
        messagePlaceholder: Z = f,
        nameLabel: Q = p,
        namePlaceholder: tt = L,
        removeScreenshotButtonLabel: te = D,
        submitButtonLabel: t_ = N,
        successMessageText: ta = C,
        triggerLabel: tr = I,
        triggerAriaLabel: tn = "",
        onFormOpen: to,
        onFormClose: tE,
        onSubmitSuccess: ti,
        onSubmitError: tc,
        onFormSubmitted: ts,
    } = {}) => {
        let tl = {
                id: r,
                autoInject: n,
                showBranding: o,
                isEmailRequired: G,
                isNameRequired: b,
                showEmail: w,
                showName: M,
                enableScreenshot: Y,
                useSentryUser: B,
                tags: H,
                colorScheme: K,
                themeDark: x,
                themeLight: k,
                triggerLabel: tr,
                triggerAriaLabel: tn,
                cancelButtonLabel: F,
                submitButtonLabel: t_,
                confirmButtonLabel: X,
                formTitle: q,
                emailLabel: j,
                emailPlaceholder: $,
                messageLabel: J,
                messagePlaceholder: Z,
                nameLabel: Q,
                namePlaceholder: tt,
                successMessageText: ta,
                isRequiredLabel: z,
                addScreenshotButtonLabel: V,
                removeScreenshotButtonLabel: te,
                onFormClose: tE,
                onFormOpen: to,
                onSubmitError: tc,
                onSubmitSuccess: ti,
                onFormSubmitted: ts,
            },
            tI = null,
            tR = [],
            tN = (t) => {
                if (!tI) {
                    let e = s.createElement("div");
                    (e.id = String(t.id)),
                        s.body.appendChild(e),
                        (tI = e.attachShadow({ mode: "open" })).appendChild(
                            (function ({ colorScheme: t, themeDark: e, themeLight: _ }) {
                                let a = s.createElement("style");
                                return (
                                    (a.textContent = `
:host {
  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 14px;
  --z-index: 100000;

  --page-margin: 16px;
  --inset: auto 0 0 auto;
  --actor-inset: var(--inset);

  font-family: var(--font-family);
  font-size: var(--font-size);

  ${"system" !== t ? "color-scheme: only light;" : ""}

  ${W(
      "dark" === t
          ? {
                ...U,
                ...e,
            }
          : {
                ...v,
                ..._,
            },
  )}
}

${
    "system" === t
        ? `
@media (prefers-color-scheme: dark) {
  :host {
    ${W({
        ...U,
        ...e,
    })}
  }
}`
        : ""
}
}
`),
                                    a
                                );
                            })(t),
                        );
                }
                return tI;
            },
            tA = async (e, _, r) => {
                let n = (0, a.s3)(),
                    o = n && n.getIntegrationByName(e);
                if (o) return o;
                let E = ((_ && _()) || (await t(r)))();
                return n && n.addIntegration(E), E;
            },
            tu = async (t) => {
                let a =
                        t.enableScreenshot &&
                        !(
                            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(l.userAgent) ||
                            (/Macintosh/i.test(l.userAgent) && l.maxTouchPoints && l.maxTouchPoints > 1)
                        ) &&
                        !!isSecureContext,
                    [r, n] = await Promise.all([
                        tA("FeedbackModal", e, "feedbackModalIntegration"),
                        a ? tA("FeedbackScreenshot", _, "feedbackScreenshotIntegration") : void 0,
                    ]);
                if (!r)
                    throw (
                        (g &&
                            E.kg.error(
                                "[Feedback] Missing feedback modal integration. Try using `feedbackSyncIntegration` in your `Sentry.init`.",
                            ),
                        Error("[Feedback] Missing feedback modal integration!"))
                    );
                return (
                    a &&
                        !n &&
                        g &&
                        E.kg.error(
                            "[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.",
                        ),
                    r.createDialog({
                        options: t,
                        screenshotIntegration: a ? n : void 0,
                        sendFeedback: S,
                        shadow: tN(t),
                    })
                );
            },
            tT = (t, e = {}) => {
                let _ = y(tl, e),
                    a = "string" == typeof t ? s.querySelector(t) : "function" == typeof t.addEventListener ? t : null;
                if (!a)
                    throw (
                        (g && E.kg.error("[Feedback] Unable to attach to target element"),
                        Error("Unable to attach to target element"))
                    );
                let r = null,
                    n = async () => {
                        r ||
                            (r = await tu({
                                ..._,
                                onFormClose: () => {
                                    r && r.close(), _.onFormClose && _.onFormClose();
                                },
                                onFormSubmitted: () => {
                                    r && r.removeFromDom(), _.onFormSubmitted && _.onFormSubmitted();
                                },
                            })),
                            r.appendToDom(),
                            r.open();
                    };
                a.addEventListener("click", n);
                let o = () => {
                    (tR = tR.filter((t) => t !== o)),
                        r && r.removeFromDom(),
                        (r = null),
                        a.removeEventListener("click", n);
                };
                return tR.push(o), o;
            },
            td = (t = {}) => {
                let e = y(tl, t),
                    _ = tN(e),
                    a = (function ({ triggerLabel: t, triggerAriaLabel: e, shadow: _ }) {
                        let a = s.createElement("button");
                        if (
                            ((a.type = "button"),
                            (a.className = "widget__actor"),
                            (a.ariaHidden = "false"),
                            (a.ariaLabel = e || t || I),
                            a.appendChild(
                                (function () {
                                    let t = (t) => c.document.createElementNS("http://www.w3.org/2000/svg", t),
                                        e = m(t("svg"), {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 20 20",
                                            fill: "var(--foreground)",
                                        }),
                                        _ = m(t("g"), { clipPath: "url(#clip0_57_80)" }),
                                        a = m(t("path"), {
                                            "fill-rule": "evenodd",
                                            "clip-rule": "evenodd",
                                            d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z",
                                        });
                                    e.appendChild(_).appendChild(a);
                                    let r = t("defs"),
                                        n = m(t("clipPath"), { id: "clip0_57_80" }),
                                        o = m(t("rect"), {
                                            width: "20",
                                            height: "20",
                                            fill: "white",
                                        });
                                    return (
                                        n.appendChild(o),
                                        r.appendChild(n),
                                        e.appendChild(r).appendChild(n).appendChild(o),
                                        e
                                    );
                                })(),
                            ),
                            t)
                        ) {
                            let e = s.createElement("span");
                            e.appendChild(s.createTextNode(t)), a.appendChild(e);
                        }
                        let r = (function () {
                            let t = s.createElement("style");
                            return (
                                (t.textContent = `
.widget__actor {
  position: fixed;
  z-index: var(--z-index);
  margin: var(--page-margin);
  inset: var(--actor-inset);

  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;

  font-family: inherit;
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 1.14em;
  text-decoration: none;

  background: var(--actor-background, var(--background));
  border-radius: var(--actor-border-radius, 1.7em/50%);
  border: var(--actor-border, var(--border));
  box-shadow: var(--actor-box-shadow, var(--box-shadow));
  color: var(--actor-color, var(--foreground));
  fill: var(--actor-color, var(--foreground));
  cursor: pointer;
  opacity: 1;
  transition: transform 0.2s ease-in-out;
  transform: translate(0, 0) scale(1);
}
.widget__actor[aria-hidden="true"] {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transform: translate(0, 16px) scale(0.98);
}

.widget__actor:hover {
  background: var(--actor-hover-background, var(--background));
  filter: var(--interactive-filter);
}

.widget__actor svg {
  width: 1.14em;
  height: 1.14em;
}

@media (max-width: 600px) {
  .widget__actor span {
    display: none;
  }
}
`),
                                t
                            );
                        })();
                        return {
                            el: a,
                            appendToDom() {
                                _.appendChild(r), _.appendChild(a);
                            },
                            removeFromDom() {
                                _.removeChild(a), _.removeChild(r);
                            },
                            show() {
                                a.ariaHidden = "false";
                            },
                            hide() {
                                a.ariaHidden = "true";
                            },
                        };
                    })({
                        triggerLabel: e.triggerLabel,
                        triggerAriaLabel: e.triggerAriaLabel,
                        shadow: _,
                    });
                return (
                    tT(a.el, {
                        ...e,
                        onFormOpen() {
                            a.hide();
                        },
                        onFormClose() {
                            a.show();
                        },
                        onFormSubmitted() {
                            a.show();
                        },
                    }),
                    a
                );
            };
        return {
            name: "Feedback",
            setupOnce() {
                (0, i.j)() &&
                    tl.autoInject &&
                    ("loading" === s.readyState
                        ? s.addEventListener("DOMContentLoaded", () => td().appendToDom())
                        : td().appendToDom());
            },
            attachTo: tT,
            createWidget(t = {}) {
                let e = td(y(tl, t));
                return e.appendToDom(), e;
            },
            createForm: async (t = {}) => tu(y(tl, t)),
            remove() {
                tI && (tI.parentElement && tI.parentElement.remove(), (tI = null)), tR.forEach((t) => t()), (tR = []);
            },
        };
    };
function w() {
    let t = (0, a.s3)();
    return t && t.getIntegrationByName("Feedback");
}
var M,
    Y,
    B,
    H,
    K,
    k,
    x,
    V = {},
    F = [],
    X = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    j = Array.isArray;
function $(t, e) {
    for (var _ in e) t[_] = e[_];
    return t;
}
function q(t) {
    var e = t.parentNode;
    e && e.removeChild(t);
}
function z(t, e, _) {
    var a,
        r,
        n,
        o = {};
    for (n in e) "key" == n ? (a = e[n]) : "ref" == n ? (r = e[n]) : (o[n] = e[n]);
    if (
        (arguments.length > 2 && (o.children = arguments.length > 3 ? M.call(arguments, 2) : _),
        "function" == typeof t && null != t.defaultProps)
    )
        for (n in t.defaultProps) void 0 === o[n] && (o[n] = t.defaultProps[n]);
    return J(t, o, a, r, null);
}
function J(t, e, _, a, r) {
    var n = {
        type: t,
        props: e,
        key: _,
        ref: a,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: null == r ? ++B : r,
        __i: -1,
        __u: 0,
    };
    return null == r && null != Y.vnode && Y.vnode(n), n;
}
function Z(t) {
    return t.children;
}
function Q(t, e) {
    (this.props = t), (this.context = e);
}
function tt(t, e) {
    if (null == e) return t.__ ? tt(t.__, t.__i + 1) : null;
    for (var _; e < t.__k.length; e++) if (null != (_ = t.__k[e]) && null != _.__e) return _.__e;
    return "function" == typeof t.type ? tt(t) : null;
}
function te(t) {
    ((!t.__d && (t.__d = !0) && H.push(t) && !t_.__r++) || K !== Y.debounceRendering) &&
        ((K = Y.debounceRendering) || k)(t_);
}
function t_() {
    var t,
        e,
        _,
        a = [],
        r = [];
    for (H.sort(x); (t = H.shift()); )
        t.__d &&
            ((_ = H.length),
            (e =
                (function (t, e, _) {
                    var a,
                        r = t.__v,
                        n = r.__e,
                        o = t.__P;
                    if (o)
                        return (
                            ((a = $({}, r)).__v = r.__v + 1),
                            Y.vnode && Y.vnode(a),
                            ti(
                                o,
                                a,
                                r,
                                t.__n,
                                void 0 !== o.ownerSVGElement,
                                32 & r.__u ? [n] : null,
                                e,
                                null == n ? tt(r) : n,
                                !!(32 & r.__u),
                                _,
                            ),
                            (a.__.__k[a.__i] = a),
                            (a.__d = void 0),
                            a.__e != n &&
                                (function t(e) {
                                    var _, a;
                                    if (null != (e = e.__) && null != e.__c) {
                                        for (e.__e = e.__c.base = null, _ = 0; _ < e.__k.length; _++)
                                            if (null != (a = e.__k[_]) && null != a.__e) {
                                                e.__e = e.__c.base = a.__e;
                                                break;
                                            }
                                        return t(e);
                                    }
                                })(a),
                            a
                        );
                })(t, a, r) || e),
            0 === _ || H.length > _
                ? (tc(a, e, r), (r.length = a.length = 0), (e = void 0), H.sort(x))
                : e && Y.__c && Y.__c(e, F));
    e && tc(a, e, r), (t_.__r = 0);
}
function ta(t, e, _, a, r, n, o, E, i, c, s) {
    var l,
        I,
        R,
        N,
        A,
        u = (a && a.__k) || F,
        T = e.length;
    for (
        _.__d = i,
            (function (t, e, _) {
                var a,
                    r,
                    n,
                    o,
                    E,
                    i = e.length,
                    c = _.length,
                    s = c,
                    l = 0;
                for (t.__k = [], a = 0; a < i; a++)
                    null !=
                    (r = t.__k[a] =
                        null == (r = e[a]) || "boolean" == typeof r || "function" == typeof r
                            ? null
                            : "string" == typeof r ||
                                "number" == typeof r ||
                                "bigint" == typeof r ||
                                r.constructor == String
                              ? J(null, r, null, null, r)
                              : j(r)
                                ? J(Z, { children: r }, null, null, null)
                                : void 0 === r.constructor && r.__b > 0
                                  ? J(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v)
                                  : r)
                        ? ((r.__ = t),
                          (r.__b = t.__b + 1),
                          (E = (function (t, e, _, a) {
                              var r = t.key,
                                  n = t.type,
                                  o = _ - 1,
                                  E = _ + 1,
                                  i = e[_];
                              if (null === i || (i && r == i.key && n === i.type)) return _;
                              if (a > +(null != i && 0 == (131072 & i.__u)))
                                  for (; o >= 0 || E < e.length; ) {
                                      if (o >= 0) {
                                          if ((i = e[o]) && 0 == (131072 & i.__u) && r == i.key && n === i.type)
                                              return o;
                                          o--;
                                      }
                                      if (E < e.length) {
                                          if ((i = e[E]) && 0 == (131072 & i.__u) && r == i.key && n === i.type)
                                              return E;
                                          E++;
                                      }
                                  }
                              return -1;
                          })(r, _, (o = a + l), s)),
                          (r.__i = E),
                          (n = null),
                          -1 !== E && (s--, (n = _[E]) && (n.__u |= 131072)),
                          null == n || null === n.__v
                              ? (-1 == E && l--, "function" != typeof r.type && (r.__u |= 65536))
                              : E !== o &&
                                (E === o + 1
                                    ? l++
                                    : E > o
                                      ? s > i - o
                                          ? (l += E - o)
                                          : l--
                                      : (l = E < o && E == o - 1 ? E - o : 0),
                                E !== a + l && (r.__u |= 65536)))
                        : (n = _[a]) &&
                          null == n.key &&
                          n.__e &&
                          (n.__e == t.__d && (t.__d = tt(n)), tl(n, n, !1), (_[a] = null), s--);
                if (s)
                    for (a = 0; a < c; a++)
                        null != (n = _[a]) && 0 == (131072 & n.__u) && (n.__e == t.__d && (t.__d = tt(n)), tl(n, n));
            })(_, e, u),
            i = _.__d,
            l = 0;
        l < T;
        l++
    )
        null != (R = _.__k[l]) &&
            "boolean" != typeof R &&
            "function" != typeof R &&
            ((I = -1 === R.__i ? V : u[R.__i] || V),
            (R.__i = l),
            ti(t, R, I, r, n, o, E, i, c, s),
            (N = R.__e),
            R.ref && I.ref != R.ref && (I.ref && ts(I.ref, null, R), s.push(R.ref, R.__c || N, R)),
            null == A && null != N && (A = N),
            65536 & R.__u || I.__k === R.__k
                ? (i = (function t(e, _, a) {
                      var r, n;
                      if ("function" == typeof e.type) {
                          for (r = e.__k, n = 0; r && n < r.length; n++) r[n] && ((r[n].__ = e), (_ = t(r[n], _, a)));
                          return _;
                      }
                      e.__e != _ && (a.insertBefore(e.__e, _ || null), (_ = e.__e));
                      do _ = _ && _.nextSibling;
                      while (null != _ && 8 === _.nodeType);
                      return _;
                  })(R, i, t))
                : "function" == typeof R.type && void 0 !== R.__d
                  ? (i = R.__d)
                  : N && (i = N.nextSibling),
            (R.__d = void 0),
            (R.__u &= -196609));
    (_.__d = i), (_.__e = A);
}
function tr(t, e, _) {
    "-" === e[0]
        ? t.setProperty(e, null == _ ? "" : _)
        : (t[e] = null == _ ? "" : "number" != typeof _ || X.test(e) ? _ : _ + "px");
}
function tn(t, e, _, a, r) {
    var n;
    e: if ("style" === e)
        if ("string" == typeof _) t.style.cssText = _;
        else {
            if (("string" == typeof a && (t.style.cssText = a = ""), a))
                for (e in a) (_ && e in _) || tr(t.style, e, "");
            if (_) for (e in _) (a && _[e] === a[e]) || tr(t.style, e, _[e]);
        }
    else if ("o" === e[0] && "n" === e[1])
        (n = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1"))),
            (e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2)),
            t.l || (t.l = {}),
            (t.l[e + n] = _),
            _
                ? a
                    ? (_.u = a.u)
                    : ((_.u = Date.now()), t.addEventListener(e, n ? tE : to, n))
                : t.removeEventListener(e, n ? tE : to, n);
    else {
        if (r) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (
            "width" !== e &&
            "height" !== e &&
            "href" !== e &&
            "list" !== e &&
            "form" !== e &&
            "tabIndex" !== e &&
            "download" !== e &&
            "rowSpan" !== e &&
            "colSpan" !== e &&
            "role" !== e &&
            e in t
        )
            try {
                t[e] = null == _ ? "" : _;
                break e;
            } catch (t) {}
        "function" == typeof _ ||
            (null == _ || (!1 === _ && "-" !== e[4]) ? t.removeAttribute(e) : t.setAttribute(e, _));
    }
}
function to(t) {
    if (this.l) {
        var e = this.l[t.type + !1];
        if (t.t) {
            if (t.t <= e.u) return;
        } else t.t = Date.now();
        return e(Y.event ? Y.event(t) : t);
    }
}
function tE(t) {
    if (this.l) return this.l[t.type + !0](Y.event ? Y.event(t) : t);
}
function ti(t, e, _, a, r, n, o, E, i, c) {
    var s,
        l,
        I,
        R,
        N,
        A,
        u,
        T,
        d,
        f,
        O,
        L,
        p,
        C,
        P,
        h = e.type;
    if (void 0 !== e.constructor) return null;
    128 & _.__u && ((i = !!(32 & _.__u)), (n = [(E = e.__e = _.__e)])), (s = Y.__b) && s(e);
    e: if ("function" == typeof h)
        try {
            if (
                ((T = e.props),
                (d = (s = h.contextType) && a[s.__c]),
                (f = s ? (d ? d.props.value : s.__) : a),
                _.__c
                    ? (u = (l = e.__c = _.__c).__ = l.__E)
                    : ("prototype" in h && h.prototype.render
                          ? (e.__c = l = new h(T, f))
                          : ((e.__c = l = new Q(T, f)), (l.constructor = h), (l.render = tI)),
                      d && d.sub(l),
                      (l.props = T),
                      l.state || (l.state = {}),
                      (l.context = f),
                      (l.__n = a),
                      (I = l.__d = !0),
                      (l.__h = []),
                      (l._sb = [])),
                null == l.__s && (l.__s = l.state),
                null != h.getDerivedStateFromProps &&
                    (l.__s == l.state && (l.__s = $({}, l.__s)), $(l.__s, h.getDerivedStateFromProps(T, l.__s))),
                (R = l.props),
                (N = l.state),
                (l.__v = e),
                I)
            )
                null == h.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(),
                    null != l.componentDidMount && l.__h.push(l.componentDidMount);
            else {
                if (
                    (null == h.getDerivedStateFromProps &&
                        T !== R &&
                        null != l.componentWillReceiveProps &&
                        l.componentWillReceiveProps(T, f),
                    !l.__e &&
                        ((null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(T, l.__s, f)) ||
                            e.__v === _.__v))
                ) {
                    for (
                        e.__v !== _.__v && ((l.props = T), (l.state = l.__s), (l.__d = !1)),
                            e.__e = _.__e,
                            e.__k = _.__k,
                            e.__k.forEach(function (t) {
                                t && (t.__ = e);
                            }),
                            O = 0;
                        O < l._sb.length;
                        O++
                    )
                        l.__h.push(l._sb[O]);
                    (l._sb = []), l.__h.length && o.push(l);
                    break e;
                }
                null != l.componentWillUpdate && l.componentWillUpdate(T, l.__s, f),
                    null != l.componentDidUpdate &&
                        l.__h.push(function () {
                            l.componentDidUpdate(R, N, A);
                        });
            }
            if (
                ((l.context = f),
                (l.props = T),
                (l.__P = t),
                (l.__e = !1),
                (L = Y.__r),
                (p = 0),
                "prototype" in h && h.prototype.render)
            ) {
                for (
                    l.state = l.__s, l.__d = !1, L && L(e), s = l.render(l.props, l.state, l.context), C = 0;
                    C < l._sb.length;
                    C++
                )
                    l.__h.push(l._sb[C]);
                l._sb = [];
            } else
                do (l.__d = !1), L && L(e), (s = l.render(l.props, l.state, l.context)), (l.state = l.__s);
                while (l.__d && ++p < 25);
            (l.state = l.__s),
                null != l.getChildContext && (a = $($({}, a), l.getChildContext())),
                I || null == l.getSnapshotBeforeUpdate || (A = l.getSnapshotBeforeUpdate(R, N)),
                ta(
                    t,
                    j((P = null != s && s.type === Z && null == s.key ? s.props.children : s)) ? P : [P],
                    e,
                    _,
                    a,
                    r,
                    n,
                    o,
                    E,
                    i,
                    c,
                ),
                (l.base = e.__e),
                (e.__u &= -161),
                l.__h.length && o.push(l),
                u && (l.__E = l.__ = null);
        } catch (t) {
            (e.__v = null),
                i || null != n
                    ? ((e.__e = E), (e.__u |= i ? 160 : 32), (n[n.indexOf(E)] = null))
                    : ((e.__e = _.__e), (e.__k = _.__k)),
                Y.__e(t, e, _);
        }
    else
        null == n && e.__v === _.__v
            ? ((e.__k = _.__k), (e.__e = _.__e))
            : (e.__e = (function (t, e, _, a, r, n, o, E, i) {
                  var c,
                      s,
                      l,
                      I,
                      R,
                      N,
                      A,
                      u = _.props,
                      T = e.props,
                      d = e.type;
                  if (("svg" === d && (r = !0), null != n)) {
                      for (c = 0; c < n.length; c++)
                          if ((R = n[c]) && "setAttribute" in R == !!d && (d ? R.localName === d : 3 === R.nodeType)) {
                              (t = R), (n[c] = null);
                              break;
                          }
                  }
                  if (null == t) {
                      if (null === d) return document.createTextNode(T);
                      (t = r
                          ? document.createElementNS("http://www.w3.org/2000/svg", d)
                          : document.createElement(d, T.is && T)),
                          (n = null),
                          (E = !1);
                  }
                  if (null === d) u === T || (E && t.data === T) || (t.data = T);
                  else {
                      if (((n = n && M.call(t.childNodes)), (u = _.props || V), !E && null != n))
                          for (u = {}, c = 0; c < t.attributes.length; c++) u[(R = t.attributes[c]).name] = R.value;
                      for (c in u)
                          (R = u[c]),
                              "children" == c ||
                                  ("dangerouslySetInnerHTML" == c
                                      ? (l = R)
                                      : "key" === c || c in T || tn(t, c, null, R, r));
                      for (c in T)
                          (R = T[c]),
                              "children" == c
                                  ? (I = R)
                                  : "dangerouslySetInnerHTML" == c
                                    ? (s = R)
                                    : "value" == c
                                      ? (N = R)
                                      : "checked" == c
                                        ? (A = R)
                                        : "key" === c ||
                                          (E && "function" != typeof R) ||
                                          u[c] === R ||
                                          tn(t, c, R, u[c], r);
                      if (s)
                          E || (l && (s.__html === l.__html || s.__html === t.innerHTML)) || (t.innerHTML = s.__html),
                              (e.__k = []);
                      else if (
                          (l && (t.innerHTML = ""),
                          ta(
                              t,
                              j(I) ? I : [I],
                              e,
                              _,
                              a,
                              r && "foreignObject" !== d,
                              n,
                              o,
                              n ? n[0] : _.__k && tt(_, 0),
                              E,
                              i,
                          ),
                          null != n)
                      )
                          for (c = n.length; c--; ) null != n[c] && q(n[c]);
                      E ||
                          ((c = "value"),
                          void 0 === N ||
                              (N === t[c] && ("progress" !== d || N) && ("option" !== d || N === u[c])) ||
                              tn(t, c, N, u[c], !1),
                          (c = "checked"),
                          void 0 !== A && A !== t[c] && tn(t, c, A, u[c], !1));
                  }
                  return t;
              })(_.__e, e, _, a, r, n, o, i, c));
    (s = Y.diffed) && s(e);
}
function tc(t, e, _) {
    for (var a = 0; a < _.length; a++) ts(_[a], _[++a], _[++a]);
    Y.__c && Y.__c(e, t),
        t.some(function (e) {
            try {
                (t = e.__h),
                    (e.__h = []),
                    t.some(function (t) {
                        t.call(e);
                    });
            } catch (t) {
                Y.__e(t, e.__v);
            }
        });
}
function ts(t, e, _) {
    try {
        "function" == typeof t ? t(e) : (t.current = e);
    } catch (t) {
        Y.__e(t, _);
    }
}
function tl(t, e, _) {
    var a, r;
    if (
        (Y.unmount && Y.unmount(t),
        (a = t.ref) && ((a.current && a.current !== t.__e) || ts(a, null, e)),
        null != (a = t.__c))
    ) {
        if (a.componentWillUnmount)
            try {
                a.componentWillUnmount();
            } catch (t) {
                Y.__e(t, e);
            }
        (a.base = a.__P = null), (t.__c = void 0);
    }
    if ((a = t.__k)) for (r = 0; r < a.length; r++) a[r] && tl(a[r], e, _ || "function" != typeof t.type);
    _ || null == t.__e || q(t.__e), (t.__ = t.__e = t.__d = void 0);
}
function tI(t, e, _) {
    return this.constructor(t, _);
}
(M = F.slice),
    (Y = {
        __e: function (t, e, _, a) {
            for (var r, n, o; (e = e.__); )
                if ((r = e.__c) && !r.__)
                    try {
                        if (
                            ((n = r.constructor) &&
                                null != n.getDerivedStateFromError &&
                                (r.setState(n.getDerivedStateFromError(t)), (o = r.__d)),
                            null != r.componentDidCatch && (r.componentDidCatch(t, a || {}), (o = r.__d)),
                            o)
                        )
                            return (r.__E = r);
                    } catch (e) {
                        t = e;
                    }
            throw t;
        },
    }),
    (B = 0),
    (Q.prototype.setState = function (t, e) {
        var _;
        (_ = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = $({}, this.state))),
            "function" == typeof t && (t = t($({}, _), this.props)),
            t && $(_, t),
            null != t && this.__v && (e && this._sb.push(e), te(this));
    }),
    (Q.prototype.forceUpdate = function (t) {
        this.__v && ((this.__e = !0), t && this.__h.push(t), te(this));
    }),
    (Q.prototype.render = Z),
    (H = []),
    (k = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
    (x = function (t, e) {
        return t.__v.__b - e.__v.__b;
    }),
    (t_.__r = 0);
var tR,
    tN,
    tA,
    tu,
    tT = 0,
    td = [],
    tf = [],
    tO = Y,
    tL = tO.__b,
    tp = tO.__r,
    tC = tO.diffed,
    tP = tO.__c,
    th = tO.unmount,
    tD = tO.__;
function tS(t, e) {
    tO.__h && tO.__h(tN, t, tT || e), (tT = 0);
    var _ =
        tN.__H ||
        (tN.__H = {
            __: [],
            __h: [],
        });
    return t >= _.__.length && _.__.push({ __V: tf }), _.__[t];
}
function tg(t) {
    return (tT = 1), ty(tY, t);
}
function ty(t, e, _) {
    var a = tS(tR++, 2);
    if (
        ((a.t = t),
        !a.__c &&
            ((a.__ = [
                _ ? _(e) : tY(void 0, e),
                function (t) {
                    var e = a.__N ? a.__N[0] : a.__[0],
                        _ = a.t(e, t);
                    e !== _ && ((a.__N = [_, a.__[1]]), a.__c.setState({}));
                },
            ]),
            (a.__c = tN),
            !tN.u))
    ) {
        var r = function (t, e, _) {
            if (!a.__c.__H) return !0;
            var r = a.__c.__H.__.filter(function (t) {
                return !!t.__c;
            });
            if (
                r.every(function (t) {
                    return !t.__N;
                })
            )
                return !n || n.call(this, t, e, _);
            var o = !1;
            return (
                r.forEach(function (t) {
                    if (t.__N) {
                        var e = t.__[0];
                        (t.__ = t.__N), (t.__N = void 0), e !== t.__[0] && (o = !0);
                    }
                }),
                !(!o && a.__c.props === t) && (!n || n.call(this, t, e, _))
            );
        };
        tN.u = !0;
        var n = tN.shouldComponentUpdate,
            o = tN.componentWillUpdate;
        (tN.componentWillUpdate = function (t, e, _) {
            if (this.__e) {
                var a = n;
                (n = void 0), r(t, e, _), (n = a);
            }
            o && o.call(this, t, e, _);
        }),
            (tN.shouldComponentUpdate = r);
    }
    return a.__N || a.__;
}
function tm(t, e) {
    var _ = tS(tR++, 4);
    !tO.__s && tM(_.__H, e) && ((_.__ = t), (_.i = e), tN.__h.push(_));
}
function tG(t, e) {
    var _ = tS(tR++, 7);
    return tM(_.__H, e) ? ((_.__V = t()), (_.i = e), (_.__h = t), _.__V) : _.__;
}
function tv(t, e) {
    return (
        (tT = 8),
        tG(function () {
            return t;
        }, e)
    );
}
function tU() {
    for (var t; (t = td.shift()); )
        if (t.__P && t.__H)
            try {
                t.__H.__h.forEach(tb), t.__H.__h.forEach(tw), (t.__H.__h = []);
            } catch (e) {
                (t.__H.__h = []), tO.__e(e, t.__v);
            }
}
(tO.__b = function (t) {
    (tN = null), tL && tL(t);
}),
    (tO.__ = function (t, e) {
        e.__k && e.__k.__m && (t.__m = e.__k.__m), tD && tD(t, e);
    }),
    (tO.__r = function (t) {
        tp && tp(t), (tR = 0);
        var e = (tN = t.__c).__H;
        e &&
            (tA === tN
                ? ((e.__h = []),
                  (tN.__h = []),
                  e.__.forEach(function (t) {
                      t.__N && (t.__ = t.__N), (t.__V = tf), (t.__N = t.i = void 0);
                  }))
                : (e.__h.forEach(tb), e.__h.forEach(tw), (e.__h = []), (tR = 0))),
            (tA = tN);
    }),
    (tO.diffed = function (t) {
        tC && tC(t);
        var e = t.__c;
        e &&
            e.__H &&
            (e.__H.__h.length &&
                ((1 !== td.push(e) && tu === tO.requestAnimationFrame) ||
                    (
                        (tu = tO.requestAnimationFrame) ||
                        function (t) {
                            var e,
                                _ = function () {
                                    clearTimeout(a), tW && cancelAnimationFrame(e), setTimeout(t);
                                },
                                a = setTimeout(_, 100);
                            tW && (e = requestAnimationFrame(_));
                        }
                    )(tU)),
            e.__H.__.forEach(function (t) {
                t.i && (t.__H = t.i), t.__V !== tf && (t.__ = t.__V), (t.i = void 0), (t.__V = tf);
            })),
            (tA = tN = null);
    }),
    (tO.__c = function (t, e) {
        e.some(function (t) {
            try {
                t.__h.forEach(tb),
                    (t.__h = t.__h.filter(function (t) {
                        return !t.__ || tw(t);
                    }));
            } catch (_) {
                e.some(function (t) {
                    t.__h && (t.__h = []);
                }),
                    (e = []),
                    tO.__e(_, t.__v);
            }
        }),
            tP && tP(t, e);
    }),
    (tO.unmount = function (t) {
        th && th(t);
        var e,
            _ = t.__c;
        _ &&
            _.__H &&
            (_.__H.__.forEach(function (t) {
                try {
                    tb(t);
                } catch (t) {
                    e = t;
                }
            }),
            (_.__H = void 0),
            e && tO.__e(e, _.__v));
    });
var tW = "function" == typeof requestAnimationFrame;
function tb(t) {
    var e = tN,
        _ = t.__c;
    "function" == typeof _ && ((t.__c = void 0), _()), (tN = e);
}
function tw(t) {
    var e = tN;
    (t.__c = t.__()), (tN = e);
}
function tM(t, e) {
    return (
        !t ||
        t.length !== e.length ||
        e.some(function (e, _) {
            return e !== t[_];
        })
    );
}
function tY(t, e) {
    return "function" == typeof e ? e(t) : e;
}
let tB = {
        __proto__: null,
        useCallback: tv,
        useContext: function (t) {
            var e = tN.context[t.__c],
                _ = tS(tR++, 9);
            return (_.c = t), e ? (null == _.__ && ((_.__ = !0), e.sub(tN)), e.props.value) : t.__;
        },
        useDebugValue: function (t, e) {
            tO.useDebugValue && tO.useDebugValue(e ? e(t) : t);
        },
        useEffect: function (t, e) {
            var _ = tS(tR++, 3);
            !tO.__s && tM(_.__H, e) && ((_.__ = t), (_.i = e), tN.__H.__h.push(_));
        },
        useErrorBoundary: function (t) {
            var e = tS(tR++, 10),
                _ = tg();
            return (
                (e.__ = t),
                tN.componentDidCatch ||
                    (tN.componentDidCatch = function (t, a) {
                        e.__ && e.__(t, a), _[1](t);
                    }),
                [
                    _[0],
                    function () {
                        _[1](void 0);
                    },
                ]
            );
        },
        useId: function () {
            var t = tS(tR++, 11);
            if (!t.__) {
                for (var e = tN.__v; null !== e && !e.__m && null !== e.__; ) e = e.__;
                var _ = e.__m || (e.__m = [0, 0]);
                t.__ = "P" + _[0] + "-" + _[1]++;
            }
            return t.__;
        },
        useImperativeHandle: function (t, e, _) {
            (tT = 6),
                tm(
                    function () {
                        return "function" == typeof t
                            ? (t(e()),
                              function () {
                                  return t(null);
                              })
                            : t
                              ? ((t.current = e()),
                                function () {
                                    return (t.current = null);
                                })
                              : void 0;
                    },
                    null == _ ? _ : _.concat(t),
                );
        },
        useLayoutEffect: tm,
        useMemo: tG,
        useReducer: ty,
        useRef: function (t) {
            return (
                (tT = 5),
                tG(function () {
                    return { current: t };
                }, [])
            );
        },
        useState: tg,
    },
    tH =
        "/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/components/DialogHeader.tsx";
function tK({ options: t }) {
    let e = tG(
        () => ({
            __html: (function () {
                let t = (t) => s.createElementNS("http://www.w3.org/2000/svg", t),
                    e = m(t("svg"), {
                        width: "32",
                        height: "30",
                        viewBox: "0 0 72 66",
                        fill: "inherit",
                    }),
                    _ = m(t("path"), {
                        transform: "translate(11, 11)",
                        d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z",
                    });
                return e.appendChild(_), e;
            })().outerHTML,
        }),
        [],
    );
    return z(
        "h2",
        {
            class: "dialog__header",
            __self: this,
            __source: {
                fileName: tH,
                lineNumber: 16,
            },
        },
        t.formTitle,
        t.showBranding
            ? z("a", {
                  class: "brand-link",
                  target: "_blank",
                  href: "https://sentry.io/welcome/",
                  title: "Powered by Sentry",
                  rel: "noopener noreferrer",
                  dangerouslySetInnerHTML: e,
                  __self: this,
                  __source: {
                      fileName: tH,
                      lineNumber: 19,
                  },
              })
            : null,
    );
}
let tk = "/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/components/Form.tsx";
function tx(t, e) {
    let _ = t.get(e);
    return "string" == typeof _ ? _.trim() : "";
}
function tV({
    options: t,
    defaultEmail: e,
    defaultName: _,
    onFormClose: a,
    onSubmit: r,
    onSubmitSuccess: n,
    onSubmitError: o,
    showEmail: i,
    showName: c,
    screenshotInput: s,
}) {
    let {
            tags: l,
            addScreenshotButtonLabel: I,
            removeScreenshotButtonLabel: R,
            cancelButtonLabel: N,
            emailLabel: A,
            emailPlaceholder: u,
            isEmailRequired: T,
            isNameRequired: d,
            messageLabel: f,
            messagePlaceholder: O,
            nameLabel: L,
            namePlaceholder: p,
            submitButtonLabel: C,
            isRequiredLabel: P,
        } = t,
        [h, D] = tg(null),
        [S, y] = tg(!1),
        m = s && s.input,
        [G, v] = tg(null),
        U = tv((t) => {
            v(t), y(!1);
        }, []),
        W = tv(
            (t) => {
                let e = (function (t, e) {
                    let _ = [];
                    return (
                        e.isNameRequired && !t.name && _.push(e.nameLabel),
                        e.isEmailRequired && !t.email && _.push(e.emailLabel),
                        t.message || _.push(e.messageLabel),
                        _
                    );
                })(t, {
                    emailLabel: A,
                    isEmailRequired: T,
                    isNameRequired: d,
                    messageLabel: f,
                    nameLabel: L,
                });
                return (
                    e.length > 0 ? D(`Please enter in the following required fields: ${e.join(", ")}`) : D(null),
                    0 === e.length
                );
            },
            [A, T, d, f, L],
        );
    return z(
        "form",
        {
            class: "form",
            onSubmit: tv(
                async (t) => {
                    try {
                        if ((t.preventDefault(), !(t.target instanceof HTMLFormElement))) return;
                        let e = new FormData(t.target),
                            _ = await (s && S ? s.value() : void 0),
                            a = {
                                name: tx(e, "name"),
                                email: tx(e, "email"),
                                message: tx(e, "message"),
                                attachments: _ ? [_] : void 0,
                            };
                        if (!W(a)) return;
                        try {
                            await r(
                                {
                                    name: a.name,
                                    email: a.email,
                                    message: a.message,
                                    source: "widget",
                                    tags: l,
                                },
                                { attachments: a.attachments },
                            ),
                                n(a);
                        } catch (t) {
                            g && E.kg.error(t), D(t), o(t);
                        }
                    } catch (t) {}
                },
                [s && S, n, o],
            ),
            __self: this,
            __source: {
                fileName: tk,
                lineNumber: 144,
            },
        },
        m && S
            ? z(m, {
                  onError: U,
                  __self: this,
                  __source: {
                      fileName: tk,
                      lineNumber: 146,
                  },
              })
            : null,
        z(
            "div",
            {
                class: "form__right",
                "data-sentry-feedback": !0,
                __self: this,
                __source: {
                    fileName: tk,
                    lineNumber: 149,
                },
            },
            z(
                "div",
                {
                    class: "form__top",
                    __self: this,
                    __source: {
                        fileName: tk,
                        lineNumber: 150,
                    },
                },
                h
                    ? z(
                          "div",
                          {
                              class: "form__error-container",
                              __self: this,
                              __source: {
                                  fileName: tk,
                                  lineNumber: 151,
                              },
                          },
                          h,
                      )
                    : null,
                c
                    ? z(
                          "label",
                          {
                              for: "name",
                              class: "form__label",
                              __self: this,
                              __source: {
                                  fileName: tk,
                                  lineNumber: 154,
                              },
                          },
                          z(tF, {
                              label: L,
                              isRequiredLabel: P,
                              isRequired: d,
                              __self: this,
                              __source: {
                                  fileName: tk,
                                  lineNumber: 155,
                              },
                          }),
                          z("input", {
                              class: "form__input",
                              defaultValue: _,
                              id: "name",
                              name: "name",
                              placeholder: p,
                              required: d,
                              type: "text",
                              __self: this,
                              __source: {
                                  fileName: tk,
                                  lineNumber: 156,
                              },
                          }),
                      )
                    : z("input", {
                          "aria-hidden": !0,
                          value: _,
                          name: "name",
                          type: "hidden",
                          __self: this,
                          __source: {
                              fileName: tk,
                              lineNumber: 167,
                          },
                      }),
                i
                    ? z(
                          "label",
                          {
                              for: "email",
                              class: "form__label",
                              __self: this,
                              __source: {
                                  fileName: tk,
                                  lineNumber: 171,
                              },
                          },
                          z(tF, {
                              label: A,
                              isRequiredLabel: P,
                              isRequired: T,
                              __self: this,
                              __source: {
                                  fileName: tk,
                                  lineNumber: 172,
                              },
                          }),
                          z("input", {
                              class: "form__input",
                              defaultValue: e,
                              id: "email",
                              name: "email",
                              placeholder: u,
                              required: T,
                              type: "email",
                              __self: this,
                              __source: {
                                  fileName: tk,
                                  lineNumber: 173,
                              },
                          }),
                      )
                    : z("input", {
                          "aria-hidden": !0,
                          value: e,
                          name: "email",
                          type: "hidden",
                          __self: this,
                          __source: {
                              fileName: tk,
                              lineNumber: 184,
                          },
                      }),
                z(
                    "label",
                    {
                        for: "message",
                        class: "form__label",
                        __self: this,
                        __source: {
                            fileName: tk,
                            lineNumber: 187,
                        },
                    },
                    z(tF, {
                        label: f,
                        isRequiredLabel: P,
                        isRequired: !0,
                        __self: this,
                        __source: {
                            fileName: tk,
                            lineNumber: 188,
                        },
                    }),
                    z("textarea", {
                        autoFocus: !0,
                        class: "form__input form__input--textarea",
                        id: "message",
                        name: "message",
                        placeholder: O,
                        required: !0,
                        rows: 5,
                        __self: this,
                        __source: {
                            fileName: tk,
                            lineNumber: 189,
                        },
                    }),
                ),
                m
                    ? z(
                          "label",
                          {
                              for: "screenshot",
                              class: "form__label",
                              __self: this,
                              __source: {
                                  fileName: tk,
                                  lineNumber: 201,
                              },
                          },
                          z(
                              "button",
                              {
                                  class: "btn btn--default",
                                  type: "button",
                                  onClick: () => {
                                      v(null), y((t) => !t);
                                  },
                                  __self: this,
                                  __source: {
                                      fileName: tk,
                                      lineNumber: 202,
                                  },
                              },
                              S ? R : I,
                          ),
                          G
                              ? z(
                                    "div",
                                    {
                                        class: "form__error-container",
                                        __self: this,
                                        __source: {
                                            fileName: tk,
                                            lineNumber: 212,
                                        },
                                    },
                                    G.message,
                                )
                              : null,
                      )
                    : null,
            ),
            z(
                "div",
                {
                    class: "btn-group",
                    __self: this,
                    __source: {
                        fileName: tk,
                        lineNumber: 216,
                    },
                },
                z(
                    "button",
                    {
                        class: "btn btn--primary",
                        type: "submit",
                        __self: this,
                        __source: {
                            fileName: tk,
                            lineNumber: 217,
                        },
                    },
                    C,
                ),
                z(
                    "button",
                    {
                        class: "btn btn--default",
                        type: "button",
                        onClick: a,
                        __self: this,
                        __source: {
                            fileName: tk,
                            lineNumber: 220,
                        },
                    },
                    N,
                ),
            ),
        ),
    );
}
function tF({ label: t, isRequired: e, isRequiredLabel: _ }) {
    return z(
        "span",
        {
            class: "form__label__text",
            __self: this,
            __source: {
                fileName: tk,
                lineNumber: 239,
            },
        },
        t,
        e &&
            z(
                "span",
                {
                    class: "form__label__text--required",
                    __self: this,
                    __source: {
                        fileName: tk,
                        lineNumber: 241,
                    },
                },
                _,
            ),
    );
}
let tX = "/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/components/Dialog.tsx";
function tj({ open: t, onFormSubmitted: e, ..._ }) {
    let a = _.options,
        r = tG(
            () => ({
                __html: (function () {
                    let t = (t) => c.document.createElementNS("http://www.w3.org/2000/svg", t),
                        e = m(t("svg"), {
                            width: "16",
                            height: "17",
                            viewBox: "0 0 16 17",
                            fill: "inherit",
                        }),
                        _ = m(t("g"), { clipPath: "url(#clip0_57_156)" }),
                        a = m(t("path"), {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z",
                        }),
                        r = m(t("path"), {
                            d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z",
                        });
                    e.appendChild(_).append(r, a);
                    let n = t("defs"),
                        o = m(t("clipPath"), { id: "clip0_57_156" }),
                        E = m(t("rect"), {
                            width: "16",
                            height: "16",
                            fill: "white",
                            transform: "translate(0 0.5)",
                        });
                    return o.appendChild(E), n.appendChild(o), e.appendChild(n).appendChild(o).appendChild(E), e;
                })().outerHTML,
            }),
            [],
        ),
        [n, o] = tg(null),
        E = tv(() => {
            n && (clearTimeout(n), o(null)), e();
        }, [n]),
        i = tv(
            (t) => {
                _.onSubmitSuccess(t),
                    o(
                        setTimeout(() => {
                            e(), o(null);
                        }, 5000),
                    );
            },
            [e],
        );
    return z(
        Z,
        {
            __self: this,
            __source: {
                fileName: tX,
                lineNumber: 48,
            },
        },
        n
            ? z(
                  "div",
                  {
                      class: "success__position",
                      onClick: E,
                      __self: this,
                      __source: {
                          fileName: tX,
                          lineNumber: 50,
                      },
                  },
                  z(
                      "div",
                      {
                          class: "success__content",
                          __self: this,
                          __source: {
                              fileName: tX,
                              lineNumber: 51,
                          },
                      },
                      a.successMessageText,
                      z("span", {
                          class: "success__icon",
                          dangerouslySetInnerHTML: r,
                          __self: this,
                          __source: {
                              fileName: tX,
                              lineNumber: 53,
                          },
                      }),
                  ),
              )
            : z(
                  "dialog",
                  {
                      class: "dialog",
                      onClick: a.onFormClose,
                      open: t,
                      __self: this,
                      __source: {
                          fileName: tX,
                          lineNumber: 57,
                      },
                  },
                  z(
                      "div",
                      {
                          class: "dialog__position",
                          __self: this,
                          __source: {
                              fileName: tX,
                              lineNumber: 58,
                          },
                      },
                      z(
                          "div",
                          {
                              class: "dialog__content",
                              onClick: (t) => {
                                  t.stopPropagation();
                              },
                              __self: this,
                              __source: {
                                  fileName: tX,
                                  lineNumber: 59,
                              },
                          },
                          z(tK, {
                              options: a,
                              __self: this,
                              __source: {
                                  fileName: tX,
                                  lineNumber: 66,
                              },
                          }),
                          z(tV, {
                              ..._,
                              onSubmitSuccess: i,
                              __self: this,
                              __source: {
                                  fileName: tX,
                                  lineNumber: 67,
                              },
                          }),
                      ),
                  ),
              ),
    );
}
let t$ = `
.dialog {
  position: fixed;
  z-index: var(--z-index);
  margin: 0;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100vh;
  width: 100vw;

  color: var(--dialog-color, var(--foreground));
  fill: var(--dialog-color, var(--foreground));
  line-height: 1.75em;

  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  inset: 0;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.dialog__position {
  position: fixed;
  z-index: var(--z-index);
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  display: flex;
  max-height: calc(100vh - (2 * var(--page-margin)));
}
@media (max-width: 600px) {
  .dialog__position {
    inset: var(--page-margin);
    padding: 0;
  }
}

.dialog__position:has(.editor) {
  inset: var(--page-margin);
  padding: 0;
}

.dialog:not([open]) {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}
.dialog:not([open]) .dialog__content {
  transform: translate(0, -16px) scale(0.98);
}

.dialog__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: var(--dialog-padding, 24px);
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  overflow: auto;

  background: var(--dialog-background, var(--background));
  border-radius: var(--dialog-border-radius, 20px);
  border: var(--dialog-border, var(--border));
  box-shadow: var(--dialog-box-shadow, var(--box-shadow));
  transform: translate(0, 0) scale(1);
  transition: transform 0.2s ease-in-out;
}
`,
    tq = `
.dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: var(--dialog-header-weight, 600);
  margin: 0;
}

.brand-link {
  display: inline-flex;
}
.brand-link:focus-visible {
  outline: var(--outline);
}
`,
    tz = `
.form {
  display: flex;
  overflow: auto;
  flex-direction: row;
  gap: 16px;
  flex: 1 0;
}

.form__right {
  flex: 0 0 var(--form-width, 272px);
  width: var(--form-width, 272px);
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 600px) {
  .form__right {
    width: auto;
  }
}

.form__top {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__error-container {
  color: var(--error-color);
  fill: var(--error-color);
}

.form__label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0px;
}

.form__label__text {
  display: flex;
  gap: 4px;
  align-items: center;
}

.form__label__text--required {
  font-size: 0.85em;
}

.form__input {
  font-family: inherit;
  line-height: inherit;
  background: transparent;
  box-sizing: border-box;
  border: var(--input-border, var(--border));
  border-radius: var(--input-border-radius, 6px);
  color: var(--input-color, inherit);
  fill: var(--input-color, inherit);
  font-size: var(--input-font-size, inherit);
  font-weight: var(--input-font-weight, 500);
  padding: 6px 12px;
}

.form__input::placeholder {
  opacity: 0.65;
  color: var(--input-placeholder-color, inherit);
  filter: var(--interactive-filter);
}

.form__input:focus-visible {
  outline: var(--input-focus-outline, var(--outline));
}

.form__input--textarea {
  font-family: inherit;
  resize: vertical;
}

.error {
  color: var(--error-color);
  fill: var(--error-color);
}
`,
    tJ = `
.btn-group {
  display: grid;
  gap: 8px;
}

.btn {
  line-height: inherit;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--button-font-size, inherit);
  font-weight: var(--button-font-weight, 600);
  padding: var(--button-padding, 6px 16px);
}
.btn[disabled] {
  opacity: 0.6;
  pointer-events: none;
}

.btn--primary {
  color: var(--button-primary-color, var(--accent-foreground));
  fill: var(--button-primary-color, var(--accent-foreground));
  background: var(--button-primary-background, var(--accent-background));
  border: var(--button-primary-border, var(--border));
  border-radius: var(--button-primary-border-radius, 6px);
  font-weight: var(--button-primary-font-weight, 500);
}
.btn--primary:hover {
  color: var(--button-primary-hover-color, var(--accent-foreground));
  fill: var(--button-primary-hover-color, var(--accent-foreground));
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
}
.btn--primary:focus-visible {
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
  outline: var(--button-primary-focus-outline, var(--outline));
}

.btn--default {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-background, var(--background));
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  font-weight: var(--button-font-weight, 500);
}
.btn--default:hover {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
}
.btn--default:focus-visible {
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
  outline: var(--button-focus-outline, var(--outline));
}
`,
    tZ = `
.success__position {
  position: fixed;
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  z-index: var(--z-index);
}
.success__content {
  background: var(--success-background, var(--background));
  border: var(--success-border, var(--border));
  border-radius: var(--success-border-radius, 1.7em/50%);
  box-shadow: var(--success-box-shadow, var(--box-shadow));
  font-weight: var(--success-font-weight, 600);
  color: var(--success-color);
  fill: var(--success-color);
  padding: 12px 24px;
  line-height: 1.75em;

  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 6px;
  cursor: default;
}

.success__icon {
  display: flex;
}
`,
    tQ = () => ({
        name: "FeedbackModal",
        setupOnce() {},
        createDialog: ({ options: t, screenshotIntegration: e, sendFeedback: _, shadow: r }) => {
            let n = t.useSentryUser,
                o = (function () {
                    let t = (0, a.nZ)().getUser(),
                        e = (0, a.aF)().getUser(),
                        _ = (0, a.lW)().getUser();
                    return t && Object.keys(t).length ? t : e && Object.keys(e).length ? e : _;
                })(),
                E = s.createElement("div"),
                i = (function () {
                    let t = s.createElement("style");
                    return (
                        (t.textContent = `
:host {
  --dialog-inset: var(--inset);
}

${t$}
${tq}
${tz}
${tJ}
${tZ}
`),
                        t
                    );
                })(),
                c = "",
                l = {
                    get el() {
                        return E;
                    },
                    appendToDom() {
                        r.contains(i) || r.contains(E) || (r.appendChild(i), r.appendChild(E));
                    },
                    removeFromDom() {
                        r.removeChild(E), r.removeChild(i), (s.body.style.overflow = c);
                    },
                    open() {
                        R(!0),
                            t.onFormOpen && t.onFormOpen(),
                            (c = s.body.style.overflow),
                            (s.body.style.overflow = "hidden");
                    },
                    close() {
                        R(!1), (s.body.style.overflow = c);
                    },
                },
                I =
                    e &&
                    e.createInput({
                        h: z,
                        hooks: tB,
                        dialog: l,
                        options: t,
                    }),
                R = (e) => {
                    var a, r, i, c, s;
                    (a = z(tj, {
                        options: t,
                        screenshotInput: I,
                        showName: t.showName || t.isNameRequired,
                        showEmail: t.showEmail || t.isEmailRequired,
                        defaultName: (n && o && o[n.name]) || "",
                        defaultEmail: (n && o && o[n.email]) || "",
                        onFormClose: () => {
                            R(!1), t.onFormClose && t.onFormClose();
                        },
                        onSubmit: _,
                        onSubmitSuccess: (e) => {
                            R(!1), t.onSubmitSuccess && t.onSubmitSuccess(e);
                        },
                        onSubmitError: (e) => {
                            t.onSubmitError && t.onSubmitError(e);
                        },
                        onFormSubmitted: () => {
                            t.onFormSubmitted && t.onFormSubmitted();
                        },
                        open: e,
                        __self: void 0,
                        __source: {
                            fileName:
                                "/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/integration.tsx",
                            lineNumber: 67,
                        },
                    })),
                        Y.__ && Y.__(a, E),
                        (i = (r && r.__k) || E.__k),
                        (c = []),
                        (s = []),
                        ti(
                            E,
                            (a = (r || E).__k = z(Z, null, [a])),
                            i || V,
                            V,
                            void 0 !== E.ownerSVGElement,
                            r ? [r] : i ? null : E.firstChild ? M.call(E.childNodes) : null,
                            c,
                            r ? r : i ? i.__e : E.firstChild,
                            !1,
                            s,
                        ),
                        (a.__d = void 0),
                        tc(c, a, s);
                };
            return l;
        },
    }),
    t0 =
        "/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/screenshot/components/ScreenshotEditor.tsx",
    t1 = c.devicePixelRatio,
    t2 = (t) => ({
        x: Math.min(t.startX, t.endX),
        y: Math.min(t.startY, t.endY),
        width: Math.abs(t.startX - t.endX),
        height: Math.abs(t.startY - t.endY),
    }),
    t3 = (t) => {
        let e = t.clientHeight,
            _ = t.clientWidth,
            a = t.width / t.height,
            r = e * a,
            n = e;
        r > _ && ((r = _), (n = _ / a));
        let o = (_ - r) / 2,
            E = (e - n) / 2;
        return {
            startX: o,
            startY: E,
            endX: r + o,
            endY: n + E,
        };
    },
    t6 = () => ({
        name: "FeedbackScreenshot",
        setupOnce() {},
        createInput: ({ h: t, hooks: e, dialog: _, options: a }) => {
            let r = s.createElement("canvas");
            return {
                input: (function ({ h: t, hooks: e, imageBuffer: _, dialog: a, options: r }) {
                    let n = (function ({ hooks: t }) {
                        return function ({ onBeforeScreenshot: e, onScreenshot: _, onAfterScreenshot: a, onError: r }) {
                            t.useEffect(() => {
                                (async () => {
                                    e();
                                    let t = await l.mediaDevices.getDisplayMedia({
                                            video: {
                                                width: c.innerWidth * c.devicePixelRatio,
                                                height: c.innerHeight * c.devicePixelRatio,
                                            },
                                            audio: !1,
                                            monitorTypeSurfaces: "exclude",
                                            preferCurrentTab: !0,
                                            selfBrowserSurface: "include",
                                            surfaceSwitching: "exclude",
                                        }),
                                        r = s.createElement("video");
                                    await new Promise((e, a) => {
                                        (r.srcObject = t),
                                            (r.onloadedmetadata = () => {
                                                _(r), t.getTracks().forEach((t) => t.stop()), e();
                                            }),
                                            r.play().catch(a);
                                    }),
                                        a();
                                })().catch(r);
                            }, []);
                        };
                    })({ hooks: e });
                    return function ({ onError: o }) {
                        let E = e.useMemo(
                                () => ({
                                    __html: (function () {
                                        let t = s.createElement("style"),
                                            e = "#1A141F",
                                            _ = "#302735";
                                        return (
                                            (t.textContent = `
.editor {
  padding: 10px;
  padding-top: 65px;
  padding-bottom: 65px;
  flex-grow: 1;

  background-color: ${e};
  background-image: repeating-linear-gradient(
      -145deg,
      transparent,
      transparent 8px,
      ${e} 8px,
      ${e} 11px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 15px,
      ${_} 15px,
      ${_} 16px
    );
}

.editor__canvas-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editor__canvas-container canvas {
  object-fit: contain;
  position: relative;
}

.editor__crop-btn-group {
  padding: 8px;
  gap: 8px;
  border-radius: var(--menu-border-radius, 6px);
  background: var(--button-primary-background, var(--background));
  width: 175px;
  position: absolute;
}

.editor__crop-corner {
  width: 30px;
  height: 30px;
  position: absolute;
  background: none;
  border: 3px solid #ffffff;
}

.editor__crop-corner--top-left {
  cursor: nwse-resize;
  border-right: none;
  border-bottom: none;
}
.editor__crop-corner--top-right {
  cursor: nesw-resize;
  border-left: none;
  border-bottom: none;
}
.editor__crop-corner--bottom-left {
  cursor: nesw-resize;
  border-right: none;
  border-top: none;
}
.editor__crop-corner--bottom-right {
  cursor: nwse-resize;
  border-left: none;
  border-top: none;
}
`),
                                            t
                                        );
                                    })().innerText,
                                }),
                                [],
                            ),
                            i = (function ({ h: t }) {
                                return function ({ top: e, left: _, corner: a, onGrabButton: r }) {
                                    return t("button", {
                                        class: `editor__crop-corner editor__crop-corner--${a} `,
                                        style: {
                                            top: e,
                                            left: _,
                                        },
                                        onMouseDown: (t) => {
                                            t.preventDefault(), r(t, a);
                                        },
                                        onClick: (t) => {
                                            t.preventDefault();
                                        },
                                        __self: this,
                                        __source: {
                                            fileName:
                                                "/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/screenshot/components/CropCorner.tsx",
                                            lineNumber: 22,
                                        },
                                    });
                                };
                            })({ h: t }),
                            l = e.useRef(null),
                            I = e.useRef(null),
                            R = e.useRef(null),
                            [N, A] = e.useState({
                                startX: 0,
                                startY: 0,
                                endX: 0,
                                endY: 0,
                            }),
                            [u, T] = e.useState(!1),
                            [d, f] = e.useState(!1);
                        function O() {
                            let t = R.current,
                                e = t2(t3(_));
                            if (t) {
                                (t.width = e.width * t1),
                                    (t.height = e.height * t1),
                                    (t.style.width = `${e.width}px`),
                                    (t.style.height = `${e.height}px`);
                                let _ = t.getContext("2d");
                                _ && _.scale(t1, t1);
                            }
                            let a = I.current;
                            a && ((a.style.width = `${e.width}px`), (a.style.height = `${e.height}px`)),
                                A({
                                    startX: 0,
                                    startY: 0,
                                    endX: e.width,
                                    endY: e.height,
                                });
                        }
                        function L(t, e) {
                            T(!1), f(!0);
                            let _ = p(e),
                                a = () => {
                                    s.removeEventListener("mousemove", _),
                                        s.removeEventListener("mouseup", a),
                                        T(!0),
                                        f(!1);
                                };
                            s.addEventListener("mouseup", a), s.addEventListener("mousemove", _);
                        }
                        e.useEffect(() => {
                            c.addEventListener("resize", O, !1);
                        }, []),
                            e.useEffect(() => {
                                let t = R.current;
                                if (!t) return;
                                let e = t.getContext("2d");
                                if (!e) return;
                                let a = t2(t3(_)),
                                    r = t2(N);
                                e.clearRect(0, 0, a.width, a.height),
                                    (e.fillStyle = "rgba(0, 0, 0, 0.5)"),
                                    e.fillRect(0, 0, a.width, a.height),
                                    e.clearRect(r.x, r.y, r.width, r.height),
                                    (e.strokeStyle = "#ffffff"),
                                    (e.lineWidth = 3),
                                    e.strokeRect(r.x + 1, r.y + 1, r.width - 2, r.height - 2),
                                    (e.strokeStyle = "#000000"),
                                    (e.lineWidth = 1),
                                    e.strokeRect(r.x + 3, r.y + 3, r.width - 6, r.height - 6);
                            }, [N]);
                        let p = e.useCallback(
                                (t) =>
                                    function (e) {
                                        if (!R.current) return;
                                        let _ = R.current,
                                            a = _.getBoundingClientRect(),
                                            r = e.clientX - a.x,
                                            n = e.clientY - a.y;
                                        switch (t) {
                                            case "top-left":
                                                A((t) => ({
                                                    ...t,
                                                    startX: Math.min(Math.max(0, r), t.endX - 33),
                                                    startY: Math.min(Math.max(0, n), t.endY - 33),
                                                }));
                                                break;
                                            case "top-right":
                                                A((t) => ({
                                                    ...t,
                                                    endX: Math.max(Math.min(r, _.width / t1), t.startX + 33),
                                                    startY: Math.min(Math.max(0, n), t.endY - 33),
                                                }));
                                                break;
                                            case "bottom-left":
                                                A((t) => ({
                                                    ...t,
                                                    startX: Math.min(Math.max(0, r), t.endX - 33),
                                                    endY: Math.max(Math.min(n, _.height / t1), t.startY + 33),
                                                }));
                                                break;
                                            case "bottom-right":
                                                A((t) => ({
                                                    ...t,
                                                    endX: Math.max(Math.min(r, _.width / t1), t.startX + 33),
                                                    endY: Math.max(Math.min(n, _.height / t1), t.startY + 33),
                                                }));
                                        }
                                    },
                                [],
                            ),
                            C = e.useRef({
                                initialX: 0,
                                initialY: 0,
                            });
                        return (
                            n({
                                onBeforeScreenshot: e.useCallback(() => {
                                    a.el.style.display = "none";
                                }, []),
                                onScreenshot: e.useCallback(
                                    (t) => {
                                        let e = _.getContext("2d");
                                        if (!e) throw Error("Could not get canvas context");
                                        (_.width = t.videoWidth),
                                            (_.height = t.videoHeight),
                                            (_.style.width = "100%"),
                                            (_.style.height = "100%"),
                                            e.drawImage(t, 0, 0);
                                    },
                                    [_],
                                ),
                                onAfterScreenshot: e.useCallback(() => {
                                    a.el.style.display = "block";
                                    let t = l.current;
                                    t && t.appendChild(_), O();
                                }, []),
                                onError: e.useCallback((t) => {
                                    (a.el.style.display = "block"), o(t);
                                }, []),
                            }),
                            t(
                                "div",
                                {
                                    class: "editor",
                                    __self: this,
                                    __source: {
                                        fileName: t0,
                                        lineNumber: 315,
                                    },
                                },
                                t("style", {
                                    dangerouslySetInnerHTML: E,
                                    __self: this,
                                    __source: {
                                        fileName: t0,
                                        lineNumber: 316,
                                    },
                                }),
                                t(
                                    "div",
                                    {
                                        class: "editor__canvas-container",
                                        ref: l,
                                        __self: this,
                                        __source: {
                                            fileName: t0,
                                            lineNumber: 317,
                                        },
                                    },
                                    t(
                                        "div",
                                        {
                                            class: "editor__crop-container",
                                            style: {
                                                position: "absolute",
                                                zIndex: 1,
                                            },
                                            ref: I,
                                            __self: this,
                                            __source: {
                                                fileName: t0,
                                                lineNumber: 318,
                                            },
                                        },
                                        t("canvas", {
                                            onMouseDown: function (t) {
                                                if (d) return;
                                                C.current = {
                                                    initialX: t.clientX,
                                                    initialY: t.clientY,
                                                };
                                                let e = (t) => {
                                                        let e = R.current;
                                                        if (!e) return;
                                                        let _ = t.clientX - C.current.initialX,
                                                            a = t.clientY - C.current.initialY;
                                                        A((r) => {
                                                            let n = Math.max(
                                                                    0,
                                                                    Math.min(
                                                                        r.startX + _,
                                                                        e.width / t1 - (r.endX - r.startX),
                                                                    ),
                                                                ),
                                                                o = Math.max(
                                                                    0,
                                                                    Math.min(
                                                                        r.startY + a,
                                                                        e.height / t1 - (r.endY - r.startY),
                                                                    ),
                                                                ),
                                                                E = n + (r.endX - r.startX),
                                                                i = o + (r.endY - r.startY);
                                                            return (
                                                                (C.current.initialX = t.clientX),
                                                                (C.current.initialY = t.clientY),
                                                                {
                                                                    startX: n,
                                                                    startY: o,
                                                                    endX: E,
                                                                    endY: i,
                                                                }
                                                            );
                                                        });
                                                    },
                                                    _ = () => {
                                                        s.removeEventListener("mousemove", e),
                                                            s.removeEventListener("mouseup", _);
                                                    };
                                                s.addEventListener("mousemove", e), s.addEventListener("mouseup", _);
                                            },
                                            style: {
                                                position: "absolute",
                                                cursor: u ? "move" : "auto",
                                            },
                                            ref: R,
                                            __self: this,
                                            __source: {
                                                fileName: t0,
                                                lineNumber: 319,
                                            },
                                        }),
                                        t(i, {
                                            left: N.startX - 3,
                                            top: N.startY - 3,
                                            onGrabButton: L,
                                            corner: "top-left",
                                            __self: this,
                                            __source: {
                                                fileName: t0,
                                                lineNumber: 324,
                                            },
                                        }),
                                        t(i, {
                                            left: N.endX - 30 + 3,
                                            top: N.startY - 3,
                                            onGrabButton: L,
                                            corner: "top-right",
                                            __self: this,
                                            __source: {
                                                fileName: t0,
                                                lineNumber: 330,
                                            },
                                        }),
                                        t(i, {
                                            left: N.startX - 3,
                                            top: N.endY - 30 + 3,
                                            onGrabButton: L,
                                            corner: "bottom-left",
                                            __self: this,
                                            __source: {
                                                fileName: t0,
                                                lineNumber: 336,
                                            },
                                        }),
                                        t(i, {
                                            left: N.endX - 30 + 3,
                                            top: N.endY - 30 + 3,
                                            onGrabButton: L,
                                            corner: "bottom-right",
                                            __self: this,
                                            __source: {
                                                fileName: t0,
                                                lineNumber: 342,
                                            },
                                        }),
                                        t(
                                            "div",
                                            {
                                                style: {
                                                    left: Math.max(0, N.endX - 191),
                                                    top: Math.max(0, N.endY + 8),
                                                    display: u ? "flex" : "none",
                                                },
                                                class: "editor__crop-btn-group",
                                                __self: this,
                                                __source: {
                                                    fileName: t0,
                                                    lineNumber: 348,
                                                },
                                            },
                                            t(
                                                "button",
                                                {
                                                    onClick: (t) => {
                                                        t.preventDefault(),
                                                            R.current &&
                                                                A({
                                                                    startX: 0,
                                                                    startY: 0,
                                                                    endX: R.current.width / t1,
                                                                    endY: R.current.height / t1,
                                                                }),
                                                            T(!1);
                                                    },
                                                    class: "btn btn--default",
                                                    __self: this,
                                                    __source: {
                                                        fileName: t0,
                                                        lineNumber: 356,
                                                    },
                                                },
                                                r.cancelButtonLabel,
                                            ),
                                            t(
                                                "button",
                                                {
                                                    onClick: (t) => {
                                                        t.preventDefault(),
                                                            (function () {
                                                                let t = s.createElement("canvas"),
                                                                    e = t2(t3(_)),
                                                                    a = t2(N);
                                                                (t.width = a.width * t1), (t.height = a.height * t1);
                                                                let r = t.getContext("2d");
                                                                r &&
                                                                    _ &&
                                                                    r.drawImage(
                                                                        _,
                                                                        (a.x / e.width) * _.width,
                                                                        (a.y / e.height) * _.height,
                                                                        (a.width / e.width) * _.width,
                                                                        (a.height / e.height) * _.height,
                                                                        0,
                                                                        0,
                                                                        t.width,
                                                                        t.height,
                                                                    );
                                                                let n = _.getContext("2d");
                                                                n &&
                                                                    (n.clearRect(0, 0, _.width, _.height),
                                                                    (_.width = t.width),
                                                                    (_.height = t.height),
                                                                    (_.style.width = `${a.width}px`),
                                                                    (_.style.height = `${a.height}px`),
                                                                    n.drawImage(t, 0, 0),
                                                                    O());
                                                            })(),
                                                            T(!1);
                                                    },
                                                    class: "btn btn--primary",
                                                    __self: this,
                                                    __source: {
                                                        fileName: t0,
                                                        lineNumber: 373,
                                                    },
                                                },
                                                r.confirmButtonLabel,
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    };
                })({
                    h: t,
                    hooks: e,
                    imageBuffer: r,
                    dialog: _,
                    options: a,
                }),
                value: async () => {
                    let t = await new Promise((t) => {
                        r.toBlob(t, "image/png");
                    });
                    if (t)
                        return {
                            data: new Uint8Array(await t.arrayBuffer()),
                            filename: "screenshot.png",
                            contentType: "application/png",
                        };
                },
            };
        },
    });
