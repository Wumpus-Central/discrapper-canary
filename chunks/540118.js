n.d(t, {
    U0: () => e6,
    fA: () => D,
    gS: () => eQ,
    qm: () => G,
    rp: () => U,
});
var r = n(509440),
    i = n(293798),
    a = n(606093),
    o = n(309063),
    _ = n(98076),
    s = n(655913);
let c = a.n,
    E = c.document,
    l = c.navigator,
    u = "Report a Bug",
    d = "Cancel",
    p = "Send Bug Report",
    f = "Confirm",
    I = "Report a Bug",
    T = "your.email@example.org",
    R = "Email",
    A = "What's the bug? What did you expect?",
    N = "Description",
    h = "Your Name",
    O = "Name",
    S = "Thank you for your report!",
    L = "(required)",
    g = "Add a screenshot",
    m = "Remove screenshot",
    D = (e, t = { includeReplay: !0 }) => {
        if (!e.message) throw Error("Unable to submit feedback with empty message");
        let n = (0, r.s3)();
        if (!n) throw Error("No client setup, cannot send feedback.");
        e.tags && Object.keys(e.tags).length && (0, r.nZ)().setTags(e.tags);
        let a = (0, i.N)(
            {
                source: "api",
                url: (0, o.l4)(),
                ...e,
            },
            t,
        );
        return new Promise((e, t) => {
            let r = setTimeout(() => t("Unable to determine if Feedback was correctly sent."), 5000),
                i = n.on("afterSendEvent", (n, o) => {
                    if (n.event_id === a)
                        return (clearTimeout(r),
                        i(),
                        o && "number" == typeof o.statusCode && o.statusCode >= 200 && o.statusCode < 300 && e(a),
                        o && "number" == typeof o.statusCode && 0 === o.statusCode)
                            ? t(
                                  "Unable to send Feedback. This is because of network issues, or because you are using an ad-blocker.",
                              )
                            : o && "number" == typeof o.statusCode && 403 === o.statusCode
                              ? t(
                                    "Unable to send Feedback. This could be because this domain is not in your list of allowed domains.",
                                )
                              : t(
                                    "Unable to send Feedback. This could be because of network issues, or because you are using an ad-blocker",
                                );
                });
        });
    },
    C = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
function y(e, t) {
    return {
        ...e,
        ...t,
        tags: {
            ...e.tags,
            ...t.tags,
        },
        onFormOpen: () => {
            t.onFormOpen && t.onFormOpen(), e.onFormOpen && e.onFormOpen();
        },
        onFormClose: () => {
            t.onFormClose && t.onFormClose(), e.onFormClose && e.onFormClose();
        },
        onSubmitSuccess: (n) => {
            t.onSubmitSuccess && t.onSubmitSuccess(n), e.onSubmitSuccess && e.onSubmitSuccess(n);
        },
        onSubmitError: (n) => {
            t.onSubmitError && t.onSubmitError(n), e.onSubmitError && e.onSubmitError(n);
        },
        onFormSubmitted: () => {
            t.onFormSubmitted && t.onFormSubmitted(), e.onFormSubmitted && e.onFormSubmitted();
        },
        themeDark: {
            ...e.themeDark,
            ...t.themeDark,
        },
        themeLight: {
            ...e.themeLight,
            ...t.themeLight,
        },
    };
}
function P(e, t) {
    return (
        Object.entries(t).forEach(([t, n]) => {
            e.setAttributeNS(null, t, n);
        }),
        e
    );
}
let v = "rgba(88, 74, 192, 1)",
    b = {
        foreground: "#2b2233",
        background: "#ffffff",
        accentForeground: "white",
        accentBackground: v,
        successColor: "#268d75",
        errorColor: "#df3338",
        border: "1.5px solid rgba(41, 35, 47, 0.13)",
        boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
        outline: "1px auto var(--accent-background)",
        interactiveFilter: "brightness(95%)",
    },
    M = {
        foreground: "#ebe6ef",
        background: "#29232f",
        accentForeground: "white",
        accentBackground: v,
        successColor: "#2da98c",
        errorColor: "#f55459",
        border: "1.5px solid rgba(235, 230, 239, 0.15)",
        boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
        outline: "1px auto var(--accent-background)",
        interactiveFilter: "brightness(150%)",
    };
function w(e) {
    return `
  --foreground: ${e.foreground};
  --background: ${e.background};
  --accent-foreground: ${e.accentForeground};
  --accent-background: ${e.accentBackground};
  --success-color: ${e.successColor};
  --error-color: ${e.errorColor};
  --border: ${e.border};
  --box-shadow: ${e.boxShadow};
  --outline: ${e.outline};
  --interactive-filter: ${e.interactiveFilter};
  `;
}
let U =
    ({ lazyLoadIntegration: e, getModalIntegration: t, getScreenshotIntegration: n }) =>
    ({
        id: i = "sentry-feedback",
        autoInject: a = !0,
        showBranding: o = !0,
        isEmailRequired: v = !1,
        isNameRequired: U = !1,
        showEmail: G = !0,
        showName: H = !0,
        enableScreenshot: B = !0,
        useSentryUser: k = {
            email: "email",
            name: "username",
        },
        tags: K,
        styleNonce: W,
        scriptNonce: x,
        colorScheme: Y = "system",
        themeLight: F = {},
        themeDark: V = {},
        addScreenshotButtonLabel: j = g,
        cancelButtonLabel: X = d,
        confirmButtonLabel: $ = f,
        emailLabel: q = R,
        emailPlaceholder: z = T,
        formTitle: J = I,
        isRequiredLabel: Z = L,
        messageLabel: Q = N,
        messagePlaceholder: ee = A,
        nameLabel: et = O,
        namePlaceholder: en = h,
        removeScreenshotButtonLabel: er = m,
        submitButtonLabel: ei = p,
        successMessageText: ea = S,
        triggerLabel: eo = u,
        triggerAriaLabel: e_ = "",
        onFormOpen: es,
        onFormClose: ec,
        onSubmitSuccess: eE,
        onSubmitError: el,
        onFormSubmitted: eu,
    } = {}) => {
        let ed = {
                id: i,
                autoInject: a,
                showBranding: o,
                isEmailRequired: v,
                isNameRequired: U,
                showEmail: G,
                showName: H,
                enableScreenshot: B,
                useSentryUser: k,
                tags: K,
                styleNonce: W,
                scriptNonce: x,
                colorScheme: Y,
                themeDark: V,
                themeLight: F,
                triggerLabel: eo,
                triggerAriaLabel: e_,
                cancelButtonLabel: X,
                submitButtonLabel: ei,
                confirmButtonLabel: $,
                formTitle: J,
                emailLabel: q,
                emailPlaceholder: z,
                messageLabel: Q,
                messagePlaceholder: ee,
                nameLabel: et,
                namePlaceholder: en,
                successMessageText: ea,
                isRequiredLabel: Z,
                addScreenshotButtonLabel: j,
                removeScreenshotButtonLabel: er,
                onFormClose: ec,
                onFormOpen: es,
                onSubmitError: el,
                onSubmitSuccess: eE,
                onFormSubmitted: eu,
            },
            ep = null,
            ef = [],
            eI = (e) => {
                if (!ep) {
                    let t = E.createElement("div");
                    (t.id = String(e.id)),
                        E.body.appendChild(t),
                        (ep = t.attachShadow({ mode: "open" })).appendChild(
                            (function ({ colorScheme: e, themeDark: t, themeLight: n, styleNonce: r }) {
                                let i = E.createElement("style");
                                return (
                                    (i.textContent = `
:host {
  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 14px;
  --z-index: 100000;

  --page-margin: 16px;
  --inset: auto 0 0 auto;
  --actor-inset: var(--inset);

  font-family: var(--font-family);
  font-size: var(--font-size);

  ${"system" !== e ? "color-scheme: only light;" : ""}

  ${w(
      "dark" === e
          ? {
                ...M,
                ...t,
            }
          : {
                ...b,
                ...n,
            },
  )}
}

${
    "system" === e
        ? `
@media (prefers-color-scheme: dark) {
  :host {
    ${w({
        ...M,
        ...t,
    })}
  }
}`
        : ""
}
}
`),
                                    r && i.setAttribute("nonce", r),
                                    i
                                );
                            })(e),
                        );
                }
                return ep;
            },
            eT = async (t, n, i) => {
                let a = (0, r.s3)(),
                    o = a && a.getIntegrationByName(t);
                if (o) return o;
                let _ = ((n && n()) || (await e(i, x)))();
                return a && a.addIntegration(_), _;
            },
            eR = async (e) => {
                let r =
                        e.enableScreenshot &&
                        !(
                            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(l.userAgent) ||
                            (/Macintosh/i.test(l.userAgent) && l.maxTouchPoints && l.maxTouchPoints > 1)
                        ) &&
                        !!isSecureContext,
                    [i, a] = await Promise.all([
                        eT("FeedbackModal", t, "feedbackModalIntegration"),
                        r ? eT("FeedbackScreenshot", n, "feedbackScreenshotIntegration") : void 0,
                    ]);
                if (!i)
                    throw (
                        (C &&
                            _.kg.error(
                                "[Feedback] Missing feedback modal integration. Try using `feedbackSyncIntegration` in your `Sentry.init`.",
                            ),
                        Error("[Feedback] Missing feedback modal integration!"))
                    );
                r &&
                    !a &&
                    C &&
                    _.kg.error("[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.");
                let o = i.createDialog({
                    options: {
                        ...e,
                        onFormClose: () => {
                            o && o.close(), e.onFormClose && e.onFormClose();
                        },
                        onFormSubmitted: () => {
                            o && o.close(), e.onFormSubmitted && e.onFormSubmitted();
                        },
                    },
                    screenshotIntegration: r ? a : void 0,
                    sendFeedback: D,
                    shadow: eI(e),
                });
                return o;
            },
            eA = (e, t = {}) => {
                let n = y(ed, t),
                    r = "string" == typeof e ? E.querySelector(e) : "function" == typeof e.addEventListener ? e : null;
                if (!r)
                    throw (
                        (C && _.kg.error("[Feedback] Unable to attach to target element"),
                        Error("Unable to attach to target element"))
                    );
                let i = null,
                    a = async () => {
                        i ||
                            (i = await eR({
                                ...n,
                                onFormSubmitted: () => {
                                    i && i.removeFromDom(), n.onFormSubmitted && n.onFormSubmitted();
                                },
                            })),
                            i.appendToDom(),
                            i.open();
                    };
                r.addEventListener("click", a);
                let o = () => {
                    (ef = ef.filter((e) => e !== o)),
                        i && i.removeFromDom(),
                        (i = null),
                        r.removeEventListener("click", a);
                };
                return ef.push(o), o;
            },
            eN = (e = {}) => {
                let t = y(ed, e),
                    n = eI(t),
                    r = (function ({ triggerLabel: e, triggerAriaLabel: t, shadow: n, styleNonce: r }) {
                        let i = E.createElement("button");
                        if (
                            ((i.type = "button"),
                            (i.className = "widget__actor"),
                            (i.ariaHidden = "false"),
                            (i.ariaLabel = t || e || u),
                            i.appendChild(
                                (function () {
                                    let e = (e) => c.document.createElementNS("http://www.w3.org/2000/svg", e),
                                        t = P(e("svg"), {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 20 20",
                                            fill: "var(--actor-color, var(--foreground))",
                                        }),
                                        n = P(e("g"), { clipPath: "url(#clip0_57_80)" }),
                                        r = P(e("path"), {
                                            "fill-rule": "evenodd",
                                            "clip-rule": "evenodd",
                                            d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z",
                                        });
                                    t.appendChild(n).appendChild(r);
                                    let i = e("defs"),
                                        a = P(e("clipPath"), { id: "clip0_57_80" }),
                                        o = P(e("rect"), {
                                            width: "20",
                                            height: "20",
                                            fill: "white",
                                        });
                                    return (
                                        a.appendChild(o),
                                        i.appendChild(a),
                                        t.appendChild(i).appendChild(a).appendChild(o),
                                        t
                                    );
                                })(),
                            ),
                            e)
                        ) {
                            let t = E.createElement("span");
                            t.appendChild(E.createTextNode(e)), i.appendChild(t);
                        }
                        let a = (function (e) {
                            let t = E.createElement("style");
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
                                e && t.setAttribute("nonce", e),
                                t
                            );
                        })(r);
                        return {
                            el: i,
                            appendToDom() {
                                n.appendChild(a), n.appendChild(i);
                            },
                            removeFromDom() {
                                n.removeChild(i), n.removeChild(a);
                            },
                            show() {
                                i.ariaHidden = "false";
                            },
                            hide() {
                                i.ariaHidden = "true";
                            },
                        };
                    })({
                        triggerLabel: t.triggerLabel,
                        triggerAriaLabel: t.triggerAriaLabel,
                        shadow: n,
                        styleNonce: W,
                    });
                return (
                    eA(r.el, {
                        ...t,
                        onFormOpen() {
                            r.hide();
                        },
                        onFormClose() {
                            r.show();
                        },
                        onFormSubmitted() {
                            r.show();
                        },
                    }),
                    r
                );
            };
        return {
            name: "Feedback",
            setupOnce() {
                (0, s.j)() &&
                    ed.autoInject &&
                    ("loading" === E.readyState
                        ? E.addEventListener("DOMContentLoaded", () => eN().appendToDom())
                        : eN().appendToDom());
            },
            attachTo: eA,
            createWidget(e = {}) {
                let t = eN(y(ed, e));
                return t.appendToDom(), t;
            },
            createForm: async (e = {}) => eR(y(ed, e)),
            remove() {
                ep && (ep.parentElement && ep.parentElement.remove(), (ep = null)), ef.forEach((e) => e()), (ef = []);
            },
        };
    };
function G() {
    let e = (0, r.s3)();
    return e && e.getIntegrationByName("Feedback");
}
var H,
    B,
    k,
    K,
    W,
    x,
    Y,
    F = {},
    V = [],
    j = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    X = Array.isArray;
function $(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
}
function q(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
}
function z(e, t, n) {
    var r,
        i,
        a,
        o = {};
    for (a in t) "key" == a ? (r = t[a]) : "ref" == a ? (i = t[a]) : (o[a] = t[a]);
    if (
        (arguments.length > 2 && (o.children = arguments.length > 3 ? H.call(arguments, 2) : n),
        "function" == typeof e && null != e.defaultProps)
    )
        for (a in e.defaultProps) void 0 === o[a] && (o[a] = e.defaultProps[a]);
    return J(e, o, r, i, null);
}
function J(e, t, n, r, i) {
    var a = {
        type: e,
        props: t,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: null == i ? ++k : i,
        __i: -1,
        __u: 0,
    };
    return null == i && null != B.vnode && B.vnode(a), a;
}
function Z(e) {
    return e.children;
}
function Q(e, t) {
    (this.props = e), (this.context = t);
}
function ee(e, t) {
    if (null == t) return e.__ ? ee(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? ee(e) : null;
}
function et(e) {
    ((!e.__d && (e.__d = !0) && K.push(e) && !en.__r++) || W !== B.debounceRendering) &&
        ((W = B.debounceRendering) || x)(en);
}
function en() {
    var e,
        t,
        n,
        r = [],
        i = [];
    for (K.sort(Y); (e = K.shift()); )
        e.__d &&
            ((n = K.length),
            (t =
                (function (e, t, n) {
                    var r,
                        i = e.__v,
                        a = i.__e,
                        o = e.__P;
                    if (o)
                        return (
                            ((r = $({}, i)).__v = i.__v + 1),
                            B.vnode && B.vnode(r),
                            es(
                                o,
                                r,
                                i,
                                e.__n,
                                void 0 !== o.ownerSVGElement,
                                32 & i.__u ? [a] : null,
                                t,
                                null == a ? ee(i) : a,
                                !!(32 & i.__u),
                                n,
                            ),
                            (r.__.__k[r.__i] = r),
                            (r.__d = void 0),
                            r.__e != a &&
                                (function e(t) {
                                    var n, r;
                                    if (null != (t = t.__) && null != t.__c) {
                                        for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
                                            if (null != (r = t.__k[n]) && null != r.__e) {
                                                t.__e = t.__c.base = r.__e;
                                                break;
                                            }
                                        return e(t);
                                    }
                                })(r),
                            r
                        );
                })(e, r, i) || t),
            0 === n || K.length > n
                ? (ec(r, t, i), (i.length = r.length = 0), (t = void 0), K.sort(Y))
                : t && B.__c && B.__c(t, V));
    t && ec(r, t, i), (en.__r = 0);
}
function er(e, t, n, r, i, a, o, _, s, c, E) {
    var l,
        u,
        d,
        p,
        f,
        I = (r && r.__k) || V,
        T = t.length;
    for (
        n.__d = s,
            (function (e, t, n) {
                var r,
                    i,
                    a,
                    o,
                    _,
                    s = t.length,
                    c = n.length,
                    E = c,
                    l = 0;
                for (e.__k = [], r = 0; r < s; r++)
                    null !=
                    (i = e.__k[r] =
                        null == (i = t[r]) || "boolean" == typeof i || "function" == typeof i
                            ? null
                            : "string" == typeof i ||
                                "number" == typeof i ||
                                "bigint" == typeof i ||
                                i.constructor == String
                              ? J(null, i, null, null, i)
                              : X(i)
                                ? J(Z, { children: i }, null, null, null)
                                : void 0 === i.constructor && i.__b > 0
                                  ? J(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
                                  : i)
                        ? ((i.__ = e),
                          (i.__b = e.__b + 1),
                          (_ = (function (e, t, n, r) {
                              var i = e.key,
                                  a = e.type,
                                  o = n - 1,
                                  _ = n + 1,
                                  s = t[n];
                              if (null === s || (s && i == s.key && a === s.type)) return n;
                              if (r > +(null != s && 0 == (131072 & s.__u)))
                                  for (; o >= 0 || _ < t.length; ) {
                                      if (o >= 0) {
                                          if ((s = t[o]) && 0 == (131072 & s.__u) && i == s.key && a === s.type)
                                              return o;
                                          o--;
                                      }
                                      if (_ < t.length) {
                                          if ((s = t[_]) && 0 == (131072 & s.__u) && i == s.key && a === s.type)
                                              return _;
                                          _++;
                                      }
                                  }
                              return -1;
                          })(i, n, (o = r + l), E)),
                          (i.__i = _),
                          (a = null),
                          -1 !== _ && (E--, (a = n[_]) && (a.__u |= 131072)),
                          null == a || null === a.__v
                              ? (-1 == _ && l--, "function" != typeof i.type && (i.__u |= 65536))
                              : _ !== o &&
                                (_ === o + 1
                                    ? l++
                                    : _ > o
                                      ? E > s - o
                                          ? (l += _ - o)
                                          : l--
                                      : (l = _ < o && _ == o - 1 ? _ - o : 0),
                                _ !== r + l && (i.__u |= 65536)))
                        : (a = n[r]) &&
                          null == a.key &&
                          a.__e &&
                          (a.__e == e.__d && (e.__d = ee(a)), el(a, a, !1), (n[r] = null), E--);
                if (E)
                    for (r = 0; r < c; r++)
                        null != (a = n[r]) && 0 == (131072 & a.__u) && (a.__e == e.__d && (e.__d = ee(a)), el(a, a));
            })(n, t, I),
            s = n.__d,
            l = 0;
        l < T;
        l++
    )
        null != (d = n.__k[l]) &&
            "boolean" != typeof d &&
            "function" != typeof d &&
            ((u = -1 === d.__i ? F : I[d.__i] || F),
            (d.__i = l),
            es(e, d, u, i, a, o, _, s, c, E),
            (p = d.__e),
            d.ref && u.ref != d.ref && (u.ref && eE(u.ref, null, d), E.push(d.ref, d.__c || p, d)),
            null == f && null != p && (f = p),
            65536 & d.__u || u.__k === d.__k
                ? (s = (function e(t, n, r) {
                      var i, a;
                      if ("function" == typeof t.type) {
                          for (i = t.__k, a = 0; i && a < i.length; a++) i[a] && ((i[a].__ = t), (n = e(i[a], n, r)));
                          return n;
                      }
                      t.__e != n && (r.insertBefore(t.__e, n || null), (n = t.__e));
                      do n = n && n.nextSibling;
                      while (null != n && 8 === n.nodeType);
                      return n;
                  })(d, s, e))
                : "function" == typeof d.type && void 0 !== d.__d
                  ? (s = d.__d)
                  : p && (s = p.nextSibling),
            (d.__d = void 0),
            (d.__u &= -196609));
    (n.__d = s), (n.__e = f);
}
function ei(e, t, n) {
    "-" === t[0]
        ? e.setProperty(t, null == n ? "" : n)
        : (e[t] = null == n ? "" : "number" != typeof n || j.test(t) ? n : n + "px");
}
function ea(e, t, n, r, i) {
    var a;
    t: if ("style" === t)
        if ("string" == typeof n) e.style.cssText = n;
        else {
            if (("string" == typeof r && (e.style.cssText = r = ""), r))
                for (t in r) (n && t in n) || ei(e.style, t, "");
            if (n) for (t in n) (r && n[t] === r[t]) || ei(e.style, t, n[t]);
        }
    else if ("o" === t[0] && "n" === t[1])
        (a = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
            (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + a] = n),
            n
                ? r
                    ? (n.u = r.u)
                    : ((n.u = Date.now()), e.addEventListener(t, a ? e_ : eo, a))
                : e.removeEventListener(t, a ? e_ : eo, a);
    else {
        if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (
            "width" !== t &&
            "height" !== t &&
            "href" !== t &&
            "list" !== t &&
            "form" !== t &&
            "tabIndex" !== t &&
            "download" !== t &&
            "rowSpan" !== t &&
            "colSpan" !== t &&
            "role" !== t &&
            t in e
        )
            try {
                e[t] = null == n ? "" : n;
                break t;
            } catch (e) {}
        "function" == typeof n ||
            (null == n || (!1 === n && "-" !== t[4]) ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function eo(e) {
    if (this.l) {
        var t = this.l[e.type + !1];
        if (e.t) {
            if (e.t <= t.u) return;
        } else e.t = Date.now();
        return t(B.event ? B.event(e) : e);
    }
}
function e_(e) {
    if (this.l) return this.l[e.type + !0](B.event ? B.event(e) : e);
}
function es(e, t, n, r, i, a, o, _, s, c) {
    var E,
        l,
        u,
        d,
        p,
        f,
        I,
        T,
        R,
        A,
        N,
        h,
        O,
        S,
        L,
        g = t.type;
    if (void 0 !== t.constructor) return null;
    128 & n.__u && ((s = !!(32 & n.__u)), (a = [(_ = t.__e = n.__e)])), (E = B.__b) && E(t);
    t: if ("function" == typeof g)
        try {
            if (
                ((T = t.props),
                (R = (E = g.contextType) && r[E.__c]),
                (A = E ? (R ? R.props.value : E.__) : r),
                n.__c
                    ? (I = (l = t.__c = n.__c).__ = l.__E)
                    : ("prototype" in g && g.prototype.render
                          ? (t.__c = l = new g(T, A))
                          : ((t.__c = l = new Q(T, A)), (l.constructor = g), (l.render = eu)),
                      R && R.sub(l),
                      (l.props = T),
                      l.state || (l.state = {}),
                      (l.context = A),
                      (l.__n = r),
                      (u = l.__d = !0),
                      (l.__h = []),
                      (l._sb = [])),
                null == l.__s && (l.__s = l.state),
                null != g.getDerivedStateFromProps &&
                    (l.__s == l.state && (l.__s = $({}, l.__s)), $(l.__s, g.getDerivedStateFromProps(T, l.__s))),
                (d = l.props),
                (p = l.state),
                (l.__v = t),
                u)
            )
                null == g.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(),
                    null != l.componentDidMount && l.__h.push(l.componentDidMount);
            else {
                if (
                    (null == g.getDerivedStateFromProps &&
                        T !== d &&
                        null != l.componentWillReceiveProps &&
                        l.componentWillReceiveProps(T, A),
                    !l.__e &&
                        ((null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(T, l.__s, A)) ||
                            t.__v === n.__v))
                ) {
                    for (
                        t.__v !== n.__v && ((l.props = T), (l.state = l.__s), (l.__d = !1)),
                            t.__e = n.__e,
                            t.__k = n.__k,
                            t.__k.forEach(function (e) {
                                e && (e.__ = t);
                            }),
                            N = 0;
                        N < l._sb.length;
                        N++
                    )
                        l.__h.push(l._sb[N]);
                    (l._sb = []), l.__h.length && o.push(l);
                    break t;
                }
                null != l.componentWillUpdate && l.componentWillUpdate(T, l.__s, A),
                    null != l.componentDidUpdate &&
                        l.__h.push(function () {
                            l.componentDidUpdate(d, p, f);
                        });
            }
            if (
                ((l.context = A),
                (l.props = T),
                (l.__P = e),
                (l.__e = !1),
                (h = B.__r),
                (O = 0),
                "prototype" in g && g.prototype.render)
            ) {
                for (
                    l.state = l.__s, l.__d = !1, h && h(t), E = l.render(l.props, l.state, l.context), S = 0;
                    S < l._sb.length;
                    S++
                )
                    l.__h.push(l._sb[S]);
                l._sb = [];
            } else
                do (l.__d = !1), h && h(t), (E = l.render(l.props, l.state, l.context)), (l.state = l.__s);
                while (l.__d && ++O < 25);
            (l.state = l.__s),
                null != l.getChildContext && (r = $($({}, r), l.getChildContext())),
                u || null == l.getSnapshotBeforeUpdate || (f = l.getSnapshotBeforeUpdate(d, p)),
                er(
                    e,
                    X((L = null != E && E.type === Z && null == E.key ? E.props.children : E)) ? L : [L],
                    t,
                    n,
                    r,
                    i,
                    a,
                    o,
                    _,
                    s,
                    c,
                ),
                (l.base = t.__e),
                (t.__u &= -161),
                l.__h.length && o.push(l),
                I && (l.__E = l.__ = null);
        } catch (e) {
            (t.__v = null),
                s || null != a
                    ? ((t.__e = _), (t.__u |= s ? 160 : 32), (a[a.indexOf(_)] = null))
                    : ((t.__e = n.__e), (t.__k = n.__k)),
                B.__e(e, t, n);
        }
    else
        null == a && t.__v === n.__v
            ? ((t.__k = n.__k), (t.__e = n.__e))
            : (t.__e = (function (e, t, n, r, i, a, o, _, s) {
                  var c,
                      E,
                      l,
                      u,
                      d,
                      p,
                      f,
                      I = n.props,
                      T = t.props,
                      R = t.type;
                  if (("svg" === R && (i = !0), null != a)) {
                      for (c = 0; c < a.length; c++)
                          if ((d = a[c]) && "setAttribute" in d == !!R && (R ? d.localName === R : 3 === d.nodeType)) {
                              (e = d), (a[c] = null);
                              break;
                          }
                  }
                  if (null == e) {
                      if (null === R) return document.createTextNode(T);
                      (e = i
                          ? document.createElementNS("http://www.w3.org/2000/svg", R)
                          : document.createElement(R, T.is && T)),
                          (a = null),
                          (_ = !1);
                  }
                  if (null === R) I === T || (_ && e.data === T) || (e.data = T);
                  else {
                      if (((a = a && H.call(e.childNodes)), (I = n.props || F), !_ && null != a))
                          for (I = {}, c = 0; c < e.attributes.length; c++) I[(d = e.attributes[c]).name] = d.value;
                      for (c in I)
                          (d = I[c]),
                              "children" == c ||
                                  ("dangerouslySetInnerHTML" == c
                                      ? (l = d)
                                      : "key" === c || c in T || ea(e, c, null, d, i));
                      for (c in T)
                          (d = T[c]),
                              "children" == c
                                  ? (u = d)
                                  : "dangerouslySetInnerHTML" == c
                                    ? (E = d)
                                    : "value" == c
                                      ? (p = d)
                                      : "checked" == c
                                        ? (f = d)
                                        : "key" === c ||
                                          (_ && "function" != typeof d) ||
                                          I[c] === d ||
                                          ea(e, c, d, I[c], i);
                      if (E)
                          _ || (l && (E.__html === l.__html || E.__html === e.innerHTML)) || (e.innerHTML = E.__html),
                              (t.__k = []);
                      else if (
                          (l && (e.innerHTML = ""),
                          er(
                              e,
                              X(u) ? u : [u],
                              t,
                              n,
                              r,
                              i && "foreignObject" !== R,
                              a,
                              o,
                              a ? a[0] : n.__k && ee(n, 0),
                              _,
                              s,
                          ),
                          null != a)
                      )
                          for (c = a.length; c--; ) null != a[c] && q(a[c]);
                      _ ||
                          ((c = "value"),
                          void 0 === p ||
                              (p === e[c] && ("progress" !== R || p) && ("option" !== R || p === I[c])) ||
                              ea(e, c, p, I[c], !1),
                          (c = "checked"),
                          void 0 !== f && f !== e[c] && ea(e, c, f, I[c], !1));
                  }
                  return e;
              })(n.__e, t, n, r, i, a, o, s, c));
    (E = B.diffed) && E(t);
}
function ec(e, t, n) {
    for (var r = 0; r < n.length; r++) eE(n[r], n[++r], n[++r]);
    B.__c && B.__c(t, e),
        e.some(function (t) {
            try {
                (e = t.__h),
                    (t.__h = []),
                    e.some(function (e) {
                        e.call(t);
                    });
            } catch (e) {
                B.__e(e, t.__v);
            }
        });
}
function eE(e, t, n) {
    try {
        "function" == typeof e ? e(t) : (e.current = t);
    } catch (e) {
        B.__e(e, n);
    }
}
function el(e, t, n) {
    var r, i;
    if (
        (B.unmount && B.unmount(e),
        (r = e.ref) && ((r.current && r.current !== e.__e) || eE(r, null, t)),
        null != (r = e.__c))
    ) {
        if (r.componentWillUnmount)
            try {
                r.componentWillUnmount();
            } catch (e) {
                B.__e(e, t);
            }
        (r.base = r.__P = null), (e.__c = void 0);
    }
    if ((r = e.__k)) for (i = 0; i < r.length; i++) r[i] && el(r[i], t, n || "function" != typeof e.type);
    n || null == e.__e || q(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function eu(e, t, n) {
    return this.constructor(e, n);
}
(H = V.slice),
    (B = {
        __e: function (e, t, n, r) {
            for (var i, a, o; (t = t.__); )
                if ((i = t.__c) && !i.__)
                    try {
                        if (
                            ((a = i.constructor) &&
                                null != a.getDerivedStateFromError &&
                                (i.setState(a.getDerivedStateFromError(e)), (o = i.__d)),
                            null != i.componentDidCatch && (i.componentDidCatch(e, r || {}), (o = i.__d)),
                            o)
                        )
                            return (i.__E = i);
                    } catch (t) {
                        e = t;
                    }
            throw e;
        },
    }),
    (k = 0),
    (Q.prototype.setState = function (e, t) {
        var n;
        (n = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = $({}, this.state))),
            "function" == typeof e && (e = e($({}, n), this.props)),
            e && $(n, e),
            null != e && this.__v && (t && this._sb.push(t), et(this));
    }),
    (Q.prototype.forceUpdate = function (e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), et(this));
    }),
    (Q.prototype.render = Z),
    (K = []),
    (x = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
    (Y = function (e, t) {
        return e.__v.__b - t.__v.__b;
    }),
    (en.__r = 0);
var ed,
    ep,
    ef,
    eI,
    eT = 0,
    eR = [],
    eA = [],
    eN = B,
    eh = eN.__b,
    eO = eN.__r,
    eS = eN.diffed,
    eL = eN.__c,
    eg = eN.unmount,
    em = eN.__;
function eD(e, t) {
    eN.__h && eN.__h(ep, e, eT || t), (eT = 0);
    var n =
        ep.__H ||
        (ep.__H = {
            __: [],
            __h: [],
        });
    return e >= n.__.length && n.__.push({ __V: eA }), n.__[e];
}
function eC(e) {
    return (eT = 1), ey(eB, e);
}
function ey(e, t, n) {
    var r = eD(ed++, 2);
    if (
        ((r.t = e),
        !r.__c &&
            ((r.__ = [
                n ? n(t) : eB(void 0, t),
                function (e) {
                    var t = r.__N ? r.__N[0] : r.__[0],
                        n = r.t(t, e);
                    t !== n && ((r.__N = [n, r.__[1]]), r.__c.setState({}));
                },
            ]),
            (r.__c = ep),
            !ep.u))
    ) {
        var i = function (e, t, n) {
            if (!r.__c.__H) return !0;
            var i = r.__c.__H.__.filter(function (e) {
                return !!e.__c;
            });
            if (
                i.every(function (e) {
                    return !e.__N;
                })
            )
                return !a || a.call(this, e, t, n);
            var o = !1;
            return (
                i.forEach(function (e) {
                    if (e.__N) {
                        var t = e.__[0];
                        (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (o = !0);
                    }
                }),
                !(!o && r.__c.props === e) && (!a || a.call(this, e, t, n))
            );
        };
        ep.u = !0;
        var a = ep.shouldComponentUpdate,
            o = ep.componentWillUpdate;
        (ep.componentWillUpdate = function (e, t, n) {
            if (this.__e) {
                var r = a;
                (a = void 0), i(e, t, n), (a = r);
            }
            o && o.call(this, e, t, n);
        }),
            (ep.shouldComponentUpdate = i);
    }
    return r.__N || r.__;
}
function eP(e, t) {
    var n = eD(ed++, 4);
    !eN.__s && eH(n.__H, t) && ((n.__ = e), (n.i = t), ep.__h.push(n));
}
function ev(e, t) {
    var n = eD(ed++, 7);
    return eH(n.__H, t) ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V) : n.__;
}
function eb(e, t) {
    return (
        (eT = 8),
        ev(function () {
            return e;
        }, t)
    );
}
function eM() {
    for (var e; (e = eR.shift()); )
        if (e.__P && e.__H)
            try {
                e.__H.__h.forEach(eU), e.__H.__h.forEach(eG), (e.__H.__h = []);
            } catch (t) {
                (e.__H.__h = []), eN.__e(t, e.__v);
            }
}
(eN.__b = function (e) {
    (ep = null), eh && eh(e);
}),
    (eN.__ = function (e, t) {
        t.__k && t.__k.__m && (e.__m = t.__k.__m), em && em(e, t);
    }),
    (eN.__r = function (e) {
        eO && eO(e), (ed = 0);
        var t = (ep = e.__c).__H;
        t &&
            (ef === ep
                ? ((t.__h = []),
                  (ep.__h = []),
                  t.__.forEach(function (e) {
                      e.__N && (e.__ = e.__N), (e.__V = eA), (e.__N = e.i = void 0);
                  }))
                : (t.__h.forEach(eU), t.__h.forEach(eG), (t.__h = []), (ed = 0))),
            (ef = ep);
    }),
    (eN.diffed = function (e) {
        eS && eS(e);
        var t = e.__c;
        t &&
            t.__H &&
            (t.__H.__h.length &&
                ((1 !== eR.push(t) && eI === eN.requestAnimationFrame) ||
                    (
                        (eI = eN.requestAnimationFrame) ||
                        function (e) {
                            var t,
                                n = function () {
                                    clearTimeout(r), ew && cancelAnimationFrame(t), setTimeout(e);
                                },
                                r = setTimeout(n, 100);
                            ew && (t = requestAnimationFrame(n));
                        }
                    )(eM)),
            t.__H.__.forEach(function (e) {
                e.i && (e.__H = e.i), e.__V !== eA && (e.__ = e.__V), (e.i = void 0), (e.__V = eA);
            })),
            (ef = ep = null);
    }),
    (eN.__c = function (e, t) {
        t.some(function (e) {
            try {
                e.__h.forEach(eU),
                    (e.__h = e.__h.filter(function (e) {
                        return !e.__ || eG(e);
                    }));
            } catch (n) {
                t.some(function (e) {
                    e.__h && (e.__h = []);
                }),
                    (t = []),
                    eN.__e(n, e.__v);
            }
        }),
            eL && eL(e, t);
    }),
    (eN.unmount = function (e) {
        eg && eg(e);
        var t,
            n = e.__c;
        n &&
            n.__H &&
            (n.__H.__.forEach(function (e) {
                try {
                    eU(e);
                } catch (e) {
                    t = e;
                }
            }),
            (n.__H = void 0),
            t && eN.__e(t, n.__v));
    });
var ew = "function" == typeof requestAnimationFrame;
function eU(e) {
    var t = ep,
        n = e.__c;
    "function" == typeof n && ((e.__c = void 0), n()), (ep = t);
}
function eG(e) {
    var t = ep;
    (e.__c = e.__()), (ep = t);
}
function eH(e, t) {
    return (
        !e ||
        e.length !== t.length ||
        t.some(function (t, n) {
            return t !== e[n];
        })
    );
}
function eB(e, t) {
    return "function" == typeof t ? t(e) : t;
}
let ek = {
        __proto__: null,
        useCallback: eb,
        useContext: function (e) {
            var t = ep.context[e.__c],
                n = eD(ed++, 9);
            return (n.c = e), t ? (null == n.__ && ((n.__ = !0), t.sub(ep)), t.props.value) : e.__;
        },
        useDebugValue: function (e, t) {
            eN.useDebugValue && eN.useDebugValue(t ? t(e) : e);
        },
        useEffect: function (e, t) {
            var n = eD(ed++, 3);
            !eN.__s && eH(n.__H, t) && ((n.__ = e), (n.i = t), ep.__H.__h.push(n));
        },
        useErrorBoundary: function (e) {
            var t = eD(ed++, 10),
                n = eC();
            return (
                (t.__ = e),
                ep.componentDidCatch ||
                    (ep.componentDidCatch = function (e, r) {
                        t.__ && t.__(e, r), n[1](e);
                    }),
                [
                    n[0],
                    function () {
                        n[1](void 0);
                    },
                ]
            );
        },
        useId: function () {
            var e = eD(ed++, 11);
            if (!e.__) {
                for (var t = ep.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
                var n = t.__m || (t.__m = [0, 0]);
                e.__ = "P" + n[0] + "-" + n[1]++;
            }
            return e.__;
        },
        useImperativeHandle: function (e, t, n) {
            (eT = 6),
                eP(
                    function () {
                        return "function" == typeof e
                            ? (e(t()),
                              function () {
                                  return e(null);
                              })
                            : e
                              ? ((e.current = t()),
                                function () {
                                    return (e.current = null);
                                })
                              : void 0;
                    },
                    null == n ? n : n.concat(e),
                );
        },
        useLayoutEffect: eP,
        useMemo: ev,
        useReducer: ey,
        useRef: function (e) {
            return (
                (eT = 5),
                ev(function () {
                    return { current: e };
                }, [])
            );
        },
        useState: eC,
    },
    eK =
        "/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/components/DialogHeader.tsx";
function eW({ options: e }) {
    let t = ev(
        () => ({
            __html: (function () {
                let e = (e) => E.createElementNS("http://www.w3.org/2000/svg", e),
                    t = P(e("svg"), {
                        width: "32",
                        height: "30",
                        viewBox: "0 0 72 66",
                        fill: "inherit",
                    }),
                    n = P(e("path"), {
                        transform: "translate(11, 11)",
                        d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z",
                    });
                return t.appendChild(n), t;
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
                fileName: eK,
                lineNumber: 16,
            },
        },
        e.formTitle,
        e.showBranding
            ? z("a", {
                  class: "brand-link",
                  target: "_blank",
                  href: "https://sentry.io/welcome/",
                  title: "Powered by Sentry",
                  rel: "noopener noreferrer",
                  dangerouslySetInnerHTML: t,
                  __self: this,
                  __source: {
                      fileName: eK,
                      lineNumber: 19,
                  },
              })
            : null,
    );
}
let ex = "/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/components/Form.tsx";
function eY(e, t) {
    let n = e.get(t);
    return "string" == typeof n ? n.trim() : "";
}
function eF({
    options: e,
    defaultEmail: t,
    defaultName: n,
    onFormClose: r,
    onSubmit: i,
    onSubmitSuccess: a,
    onSubmitError: o,
    showEmail: s,
    showName: c,
    screenshotInput: E,
}) {
    let {
            tags: l,
            addScreenshotButtonLabel: u,
            removeScreenshotButtonLabel: d,
            cancelButtonLabel: p,
            emailLabel: f,
            emailPlaceholder: I,
            isEmailRequired: T,
            isNameRequired: R,
            messageLabel: A,
            messagePlaceholder: N,
            nameLabel: h,
            namePlaceholder: O,
            submitButtonLabel: S,
            isRequiredLabel: L,
        } = e,
        [g, m] = eC(null),
        [D, y] = eC(!1),
        P = E && E.input,
        [v, b] = eC(null),
        M = eb((e) => {
            b(e), y(!1);
        }, []),
        w = eb(
            (e) => {
                let t = (function (e, t) {
                    let n = [];
                    return (
                        t.isNameRequired && !e.name && n.push(t.nameLabel),
                        t.isEmailRequired && !e.email && n.push(t.emailLabel),
                        e.message || n.push(t.messageLabel),
                        n
                    );
                })(e, {
                    emailLabel: f,
                    isEmailRequired: T,
                    isNameRequired: R,
                    messageLabel: A,
                    nameLabel: h,
                });
                return (
                    t.length > 0 ? m(`Please enter in the following required fields: ${t.join(", ")}`) : m(null),
                    0 === t.length
                );
            },
            [f, T, R, A, h],
        );
    return z(
        "form",
        {
            class: "form",
            onSubmit: eb(
                async (e) => {
                    try {
                        if ((e.preventDefault(), !(e.target instanceof HTMLFormElement))) return;
                        let t = new FormData(e.target),
                            n = await (E && D ? E.value() : void 0),
                            r = {
                                name: eY(t, "name"),
                                email: eY(t, "email"),
                                message: eY(t, "message"),
                                attachments: n ? [n] : void 0,
                            };
                        if (!w(r)) return;
                        try {
                            await i(
                                {
                                    name: r.name,
                                    email: r.email,
                                    message: r.message,
                                    source: "widget",
                                    tags: l,
                                },
                                { attachments: r.attachments },
                            ),
                                a(r);
                        } catch (e) {
                            C && _.kg.error(e), m(e), o(e);
                        }
                    } catch (e) {}
                },
                [E && D, a, o],
            ),
            __self: this,
            __source: {
                fileName: ex,
                lineNumber: 144,
            },
        },
        P && D
            ? z(P, {
                  onError: M,
                  __self: this,
                  __source: {
                      fileName: ex,
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
                    fileName: ex,
                    lineNumber: 149,
                },
            },
            z(
                "div",
                {
                    class: "form__top",
                    __self: this,
                    __source: {
                        fileName: ex,
                        lineNumber: 150,
                    },
                },
                g
                    ? z(
                          "div",
                          {
                              class: "form__error-container",
                              __self: this,
                              __source: {
                                  fileName: ex,
                                  lineNumber: 151,
                              },
                          },
                          g,
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
                                  fileName: ex,
                                  lineNumber: 154,
                              },
                          },
                          z(eV, {
                              label: h,
                              isRequiredLabel: L,
                              isRequired: R,
                              __self: this,
                              __source: {
                                  fileName: ex,
                                  lineNumber: 155,
                              },
                          }),
                          z("input", {
                              class: "form__input",
                              defaultValue: n,
                              id: "name",
                              name: "name",
                              placeholder: O,
                              required: R,
                              type: "text",
                              __self: this,
                              __source: {
                                  fileName: ex,
                                  lineNumber: 156,
                              },
                          }),
                      )
                    : z("input", {
                          "aria-hidden": !0,
                          value: n,
                          name: "name",
                          type: "hidden",
                          __self: this,
                          __source: {
                              fileName: ex,
                              lineNumber: 167,
                          },
                      }),
                s
                    ? z(
                          "label",
                          {
                              for: "email",
                              class: "form__label",
                              __self: this,
                              __source: {
                                  fileName: ex,
                                  lineNumber: 171,
                              },
                          },
                          z(eV, {
                              label: f,
                              isRequiredLabel: L,
                              isRequired: T,
                              __self: this,
                              __source: {
                                  fileName: ex,
                                  lineNumber: 172,
                              },
                          }),
                          z("input", {
                              class: "form__input",
                              defaultValue: t,
                              id: "email",
                              name: "email",
                              placeholder: I,
                              required: T,
                              type: "email",
                              __self: this,
                              __source: {
                                  fileName: ex,
                                  lineNumber: 173,
                              },
                          }),
                      )
                    : z("input", {
                          "aria-hidden": !0,
                          value: t,
                          name: "email",
                          type: "hidden",
                          __self: this,
                          __source: {
                              fileName: ex,
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
                            fileName: ex,
                            lineNumber: 187,
                        },
                    },
                    z(eV, {
                        label: A,
                        isRequiredLabel: L,
                        isRequired: !0,
                        __self: this,
                        __source: {
                            fileName: ex,
                            lineNumber: 188,
                        },
                    }),
                    z("textarea", {
                        autoFocus: !0,
                        class: "form__input form__input--textarea",
                        id: "message",
                        name: "message",
                        placeholder: N,
                        required: !0,
                        rows: 5,
                        __self: this,
                        __source: {
                            fileName: ex,
                            lineNumber: 189,
                        },
                    }),
                ),
                P
                    ? z(
                          "label",
                          {
                              for: "screenshot",
                              class: "form__label",
                              __self: this,
                              __source: {
                                  fileName: ex,
                                  lineNumber: 201,
                              },
                          },
                          z(
                              "button",
                              {
                                  class: "btn btn--default",
                                  type: "button",
                                  onClick: () => {
                                      b(null), y((e) => !e);
                                  },
                                  __self: this,
                                  __source: {
                                      fileName: ex,
                                      lineNumber: 202,
                                  },
                              },
                              D ? d : u,
                          ),
                          v
                              ? z(
                                    "div",
                                    {
                                        class: "form__error-container",
                                        __self: this,
                                        __source: {
                                            fileName: ex,
                                            lineNumber: 212,
                                        },
                                    },
                                    v.message,
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
                        fileName: ex,
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
                            fileName: ex,
                            lineNumber: 217,
                        },
                    },
                    S,
                ),
                z(
                    "button",
                    {
                        class: "btn btn--default",
                        type: "button",
                        onClick: r,
                        __self: this,
                        __source: {
                            fileName: ex,
                            lineNumber: 220,
                        },
                    },
                    p,
                ),
            ),
        ),
    );
}
function eV({ label: e, isRequired: t, isRequiredLabel: n }) {
    return z(
        "span",
        {
            class: "form__label__text",
            __self: this,
            __source: {
                fileName: ex,
                lineNumber: 239,
            },
        },
        e,
        t &&
            z(
                "span",
                {
                    class: "form__label__text--required",
                    __self: this,
                    __source: {
                        fileName: ex,
                        lineNumber: 241,
                    },
                },
                n,
            ),
    );
}
let ej = "/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/components/Dialog.tsx";
function eX({ open: e, onFormSubmitted: t, ...n }) {
    let r = n.options,
        i = ev(
            () => ({
                __html: (function () {
                    let e = (e) => c.document.createElementNS("http://www.w3.org/2000/svg", e),
                        t = P(e("svg"), {
                            width: "16",
                            height: "17",
                            viewBox: "0 0 16 17",
                            fill: "inherit",
                        }),
                        n = P(e("g"), { clipPath: "url(#clip0_57_156)" }),
                        r = P(e("path"), {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z",
                        }),
                        i = P(e("path"), {
                            d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z",
                        });
                    t.appendChild(n).append(i, r);
                    let a = e("defs"),
                        o = P(e("clipPath"), { id: "clip0_57_156" }),
                        _ = P(e("rect"), {
                            width: "16",
                            height: "16",
                            fill: "white",
                            transform: "translate(0 0.5)",
                        });
                    return o.appendChild(_), a.appendChild(o), t.appendChild(a).appendChild(o).appendChild(_), t;
                })().outerHTML,
            }),
            [],
        ),
        [a, o] = eC(null),
        _ = eb(() => {
            a && (clearTimeout(a), o(null)), t();
        }, [a]),
        s = eb(
            (e) => {
                n.onSubmitSuccess(e),
                    o(
                        setTimeout(() => {
                            t(), o(null);
                        }, 5000),
                    );
            },
            [t],
        );
    return z(
        Z,
        {
            __self: this,
            __source: {
                fileName: ej,
                lineNumber: 48,
            },
        },
        a
            ? z(
                  "div",
                  {
                      class: "success__position",
                      onClick: _,
                      __self: this,
                      __source: {
                          fileName: ej,
                          lineNumber: 50,
                      },
                  },
                  z(
                      "div",
                      {
                          class: "success__content",
                          __self: this,
                          __source: {
                              fileName: ej,
                              lineNumber: 51,
                          },
                      },
                      r.successMessageText,
                      z("span", {
                          class: "success__icon",
                          dangerouslySetInnerHTML: i,
                          __self: this,
                          __source: {
                              fileName: ej,
                              lineNumber: 53,
                          },
                      }),
                  ),
              )
            : z(
                  "dialog",
                  {
                      class: "dialog",
                      onClick: r.onFormClose,
                      open: e,
                      __self: this,
                      __source: {
                          fileName: ej,
                          lineNumber: 57,
                      },
                  },
                  z(
                      "div",
                      {
                          class: "dialog__position",
                          __self: this,
                          __source: {
                              fileName: ej,
                              lineNumber: 58,
                          },
                      },
                      z(
                          "div",
                          {
                              class: "dialog__content",
                              onClick: (e) => {
                                  e.stopPropagation();
                              },
                              __self: this,
                              __source: {
                                  fileName: ej,
                                  lineNumber: 59,
                              },
                          },
                          z(eW, {
                              options: r,
                              __self: this,
                              __source: {
                                  fileName: ej,
                                  lineNumber: 66,
                              },
                          }),
                          z(eF, {
                              ...n,
                              onSubmitSuccess: s,
                              __self: this,
                              __source: {
                                  fileName: ej,
                                  lineNumber: 67,
                              },
                          }),
                      ),
                  ),
              ),
    );
}
let e$ = `
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
    eq = `
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
    ez = `
.form {
  display: flex;
  overflow: auto;
  flex-direction: row;
  gap: 16px;
  flex: 1 0;
}

.form__right {
  flex: 0 0 auto;
  width: var(--form-width, 272px);
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 600px) {
  .form__right {
    width: var(--form-width, 100%);
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
    eJ = `
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
    eZ = `
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
    eQ = () => ({
        name: "FeedbackModal",
        setupOnce() {},
        createDialog: ({ options: e, screenshotIntegration: t, sendFeedback: n, shadow: i }) => {
            let a = e.useSentryUser,
                o = (function () {
                    let e = (0, r.nZ)().getUser(),
                        t = (0, r.aF)().getUser(),
                        n = (0, r.lW)().getUser();
                    return e && Object.keys(e).length ? e : t && Object.keys(t).length ? t : n;
                })(),
                _ = E.createElement("div"),
                s = (function (e) {
                    let t = E.createElement("style");
                    return (
                        (t.textContent = `
:host {
  --dialog-inset: var(--inset);
}

${e$}
${eq}
${ez}
${eJ}
${eZ}
`),
                        e && t.setAttribute("nonce", e),
                        t
                    );
                })(e.styleNonce),
                c = "",
                l = {
                    get el() {
                        return _;
                    },
                    appendToDom() {
                        i.contains(s) || i.contains(_) || (i.appendChild(s), i.appendChild(_));
                    },
                    removeFromDom() {
                        i.removeChild(_), i.removeChild(s), (E.body.style.overflow = c);
                    },
                    open() {
                        d(!0),
                            e.onFormOpen && e.onFormOpen(),
                            (c = E.body.style.overflow),
                            (E.body.style.overflow = "hidden");
                    },
                    close() {
                        d(!1), (E.body.style.overflow = c);
                    },
                },
                u =
                    t &&
                    t.createInput({
                        h: z,
                        hooks: ek,
                        dialog: l,
                        options: e,
                    }),
                d = (t) => {
                    var r, i, s, c, E;
                    (r = z(eX, {
                        options: e,
                        screenshotInput: u,
                        showName: e.showName || e.isNameRequired,
                        showEmail: e.showEmail || e.isEmailRequired,
                        defaultName: (a && o && o[a.name]) || "",
                        defaultEmail: (a && o && o[a.email]) || "",
                        onFormClose: () => {
                            d(!1), e.onFormClose && e.onFormClose();
                        },
                        onSubmit: n,
                        onSubmitSuccess: (t) => {
                            d(!1), e.onSubmitSuccess && e.onSubmitSuccess(t);
                        },
                        onSubmitError: (t) => {
                            e.onSubmitError && e.onSubmitError(t);
                        },
                        onFormSubmitted: () => {
                            e.onFormSubmitted && e.onFormSubmitted();
                        },
                        open: t,
                        __self: void 0,
                        __source: {
                            fileName:
                                "/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/integration.tsx",
                            lineNumber: 67,
                        },
                    })),
                        B.__ && B.__(r, _),
                        (s = (i && i.__k) || _.__k),
                        (c = []),
                        (E = []),
                        es(
                            _,
                            (r = (i || _).__k = z(Z, null, [r])),
                            s || F,
                            F,
                            void 0 !== _.ownerSVGElement,
                            i ? [i] : s ? null : _.firstChild ? H.call(_.childNodes) : null,
                            c,
                            i ? i : s ? s.__e : _.firstChild,
                            !1,
                            E,
                        ),
                        (r.__d = void 0),
                        ec(c, r, E);
                };
            return l;
        },
    }),
    e0 =
        "/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/screenshot/components/ScreenshotEditor.tsx",
    e1 = c.devicePixelRatio,
    e2 = (e) => ({
        x: Math.min(e.startX, e.endX),
        y: Math.min(e.startY, e.endY),
        width: Math.abs(e.startX - e.endX),
        height: Math.abs(e.startY - e.endY),
    }),
    e3 = (e) => {
        let t = e.clientHeight,
            n = e.clientWidth,
            r = e.width / e.height,
            i = t * r,
            a = t;
        i > n && ((i = n), (a = n / r));
        let o = (n - i) / 2,
            _ = (t - a) / 2;
        return {
            startX: o,
            startY: _,
            endX: i + o,
            endY: a + _,
        };
    },
    e6 = () => ({
        name: "FeedbackScreenshot",
        setupOnce() {},
        createInput: ({ h: e, hooks: t, dialog: n, options: r }) => {
            let i = E.createElement("canvas");
            return {
                input: (function ({ h: e, hooks: t, imageBuffer: n, dialog: r, options: i }) {
                    let a = (function ({ hooks: e }) {
                        return function ({ onBeforeScreenshot: t, onScreenshot: n, onAfterScreenshot: r, onError: i }) {
                            e.useEffect(() => {
                                (async () => {
                                    t();
                                    let e = await l.mediaDevices.getDisplayMedia({
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
                                        i = E.createElement("video");
                                    await new Promise((t, r) => {
                                        (i.srcObject = e),
                                            (i.onloadedmetadata = () => {
                                                n(i), e.getTracks().forEach((e) => e.stop()), t();
                                            }),
                                            i.play().catch(r);
                                    }),
                                        r();
                                })().catch(i);
                            }, []);
                        };
                    })({ hooks: t });
                    return function ({ onError: o }) {
                        let _ = t.useMemo(
                                () => ({
                                    __html: (function (e) {
                                        let t = E.createElement("style"),
                                            n = "#1A141F",
                                            r = "#302735";
                                        return (
                                            (t.textContent = `
.editor {
  padding: 10px;
  padding-top: 65px;
  padding-bottom: 65px;
  flex-grow: 1;

  background-color: ${n};
  background-image: repeating-linear-gradient(
      -145deg,
      transparent,
      transparent 8px,
      ${n} 8px,
      ${n} 11px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 15px,
      ${r} 15px,
      ${r} 16px
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
                                            e && t.setAttribute("nonce", e),
                                            t
                                        );
                                    })(i.styleNonce).innerText,
                                }),
                                [],
                            ),
                            s = (function ({ h: e }) {
                                return function ({ top: t, left: n, corner: r, onGrabButton: i }) {
                                    return e("button", {
                                        class: `editor__crop-corner editor__crop-corner--${r} `,
                                        style: {
                                            top: t,
                                            left: n,
                                        },
                                        onMouseDown: (e) => {
                                            e.preventDefault(), i(e, r);
                                        },
                                        onClick: (e) => {
                                            e.preventDefault();
                                        },
                                        __self: this,
                                        __source: {
                                            fileName:
                                                "/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/screenshot/components/CropCorner.tsx",
                                            lineNumber: 22,
                                        },
                                    });
                                };
                            })({ h: e }),
                            l = t.useRef(null),
                            u = t.useRef(null),
                            d = t.useRef(null),
                            [p, f] = t.useState({
                                startX: 0,
                                startY: 0,
                                endX: 0,
                                endY: 0,
                            }),
                            [I, T] = t.useState(!1),
                            [R, A] = t.useState(!1);
                        function N() {
                            let e = d.current,
                                t = e2(e3(n));
                            if (e) {
                                (e.width = t.width * e1),
                                    (e.height = t.height * e1),
                                    (e.style.width = `${t.width}px`),
                                    (e.style.height = `${t.height}px`);
                                let n = e.getContext("2d");
                                n && n.scale(e1, e1);
                            }
                            let r = u.current;
                            r && ((r.style.width = `${t.width}px`), (r.style.height = `${t.height}px`)),
                                f({
                                    startX: 0,
                                    startY: 0,
                                    endX: t.width,
                                    endY: t.height,
                                });
                        }
                        function h(e, t) {
                            T(!1), A(!0);
                            let n = O(t),
                                r = () => {
                                    E.removeEventListener("mousemove", n),
                                        E.removeEventListener("mouseup", r),
                                        T(!0),
                                        A(!1);
                                };
                            E.addEventListener("mouseup", r), E.addEventListener("mousemove", n);
                        }
                        t.useEffect(() => {
                            c.addEventListener("resize", N, !1);
                        }, []),
                            t.useEffect(() => {
                                let e = d.current;
                                if (!e) return;
                                let t = e.getContext("2d");
                                if (!t) return;
                                let r = e2(e3(n)),
                                    i = e2(p);
                                t.clearRect(0, 0, r.width, r.height),
                                    (t.fillStyle = "rgba(0, 0, 0, 0.5)"),
                                    t.fillRect(0, 0, r.width, r.height),
                                    t.clearRect(i.x, i.y, i.width, i.height),
                                    (t.strokeStyle = "#ffffff"),
                                    (t.lineWidth = 3),
                                    t.strokeRect(i.x + 1, i.y + 1, i.width - 2, i.height - 2),
                                    (t.strokeStyle = "#000000"),
                                    (t.lineWidth = 1),
                                    t.strokeRect(i.x + 3, i.y + 3, i.width - 6, i.height - 6);
                            }, [p]);
                        let O = t.useCallback(
                                (e) =>
                                    function (t) {
                                        if (!d.current) return;
                                        let n = d.current,
                                            r = n.getBoundingClientRect(),
                                            i = t.clientX - r.x,
                                            a = t.clientY - r.y;
                                        switch (e) {
                                            case "top-left":
                                                f((e) => ({
                                                    ...e,
                                                    startX: Math.min(Math.max(0, i), e.endX - 33),
                                                    startY: Math.min(Math.max(0, a), e.endY - 33),
                                                }));
                                                break;
                                            case "top-right":
                                                f((e) => ({
                                                    ...e,
                                                    endX: Math.max(Math.min(i, n.width / e1), e.startX + 33),
                                                    startY: Math.min(Math.max(0, a), e.endY - 33),
                                                }));
                                                break;
                                            case "bottom-left":
                                                f((e) => ({
                                                    ...e,
                                                    startX: Math.min(Math.max(0, i), e.endX - 33),
                                                    endY: Math.max(Math.min(a, n.height / e1), e.startY + 33),
                                                }));
                                                break;
                                            case "bottom-right":
                                                f((e) => ({
                                                    ...e,
                                                    endX: Math.max(Math.min(i, n.width / e1), e.startX + 33),
                                                    endY: Math.max(Math.min(a, n.height / e1), e.startY + 33),
                                                }));
                                        }
                                    },
                                [],
                            ),
                            S = t.useRef({
                                initialX: 0,
                                initialY: 0,
                            });
                        return (
                            a({
                                onBeforeScreenshot: t.useCallback(() => {
                                    r.el.style.display = "none";
                                }, []),
                                onScreenshot: t.useCallback(
                                    (e) => {
                                        let t = n.getContext("2d");
                                        if (!t) throw Error("Could not get canvas context");
                                        (n.width = e.videoWidth),
                                            (n.height = e.videoHeight),
                                            (n.style.width = "100%"),
                                            (n.style.height = "100%"),
                                            t.drawImage(e, 0, 0);
                                    },
                                    [n],
                                ),
                                onAfterScreenshot: t.useCallback(() => {
                                    r.el.style.display = "block";
                                    let e = l.current;
                                    e && e.appendChild(n), N();
                                }, []),
                                onError: t.useCallback((e) => {
                                    (r.el.style.display = "block"), o(e);
                                }, []),
                            }),
                            e(
                                "div",
                                {
                                    class: "editor",
                                    __self: this,
                                    __source: {
                                        fileName: e0,
                                        lineNumber: 315,
                                    },
                                },
                                e("style", {
                                    nonce: i.styleNonce,
                                    dangerouslySetInnerHTML: _,
                                    __self: this,
                                    __source: {
                                        fileName: e0,
                                        lineNumber: 316,
                                    },
                                }),
                                e(
                                    "div",
                                    {
                                        class: "editor__canvas-container",
                                        ref: l,
                                        __self: this,
                                        __source: {
                                            fileName: e0,
                                            lineNumber: 317,
                                        },
                                    },
                                    e(
                                        "div",
                                        {
                                            class: "editor__crop-container",
                                            style: {
                                                position: "absolute",
                                                zIndex: 1,
                                            },
                                            ref: u,
                                            __self: this,
                                            __source: {
                                                fileName: e0,
                                                lineNumber: 318,
                                            },
                                        },
                                        e("canvas", {
                                            onMouseDown: function (e) {
                                                if (R) return;
                                                S.current = {
                                                    initialX: e.clientX,
                                                    initialY: e.clientY,
                                                };
                                                let t = (e) => {
                                                        let t = d.current;
                                                        if (!t) return;
                                                        let n = e.clientX - S.current.initialX,
                                                            r = e.clientY - S.current.initialY;
                                                        f((i) => {
                                                            let a = Math.max(
                                                                    0,
                                                                    Math.min(
                                                                        i.startX + n,
                                                                        t.width / e1 - (i.endX - i.startX),
                                                                    ),
                                                                ),
                                                                o = Math.max(
                                                                    0,
                                                                    Math.min(
                                                                        i.startY + r,
                                                                        t.height / e1 - (i.endY - i.startY),
                                                                    ),
                                                                ),
                                                                _ = a + (i.endX - i.startX),
                                                                s = o + (i.endY - i.startY);
                                                            return (
                                                                (S.current.initialX = e.clientX),
                                                                (S.current.initialY = e.clientY),
                                                                {
                                                                    startX: a,
                                                                    startY: o,
                                                                    endX: _,
                                                                    endY: s,
                                                                }
                                                            );
                                                        });
                                                    },
                                                    n = () => {
                                                        E.removeEventListener("mousemove", t),
                                                            E.removeEventListener("mouseup", n);
                                                    };
                                                E.addEventListener("mousemove", t), E.addEventListener("mouseup", n);
                                            },
                                            style: {
                                                position: "absolute",
                                                cursor: I ? "move" : "auto",
                                            },
                                            ref: d,
                                            __self: this,
                                            __source: {
                                                fileName: e0,
                                                lineNumber: 319,
                                            },
                                        }),
                                        e(s, {
                                            left: p.startX - 3,
                                            top: p.startY - 3,
                                            onGrabButton: h,
                                            corner: "top-left",
                                            __self: this,
                                            __source: {
                                                fileName: e0,
                                                lineNumber: 324,
                                            },
                                        }),
                                        e(s, {
                                            left: p.endX - 30 + 3,
                                            top: p.startY - 3,
                                            onGrabButton: h,
                                            corner: "top-right",
                                            __self: this,
                                            __source: {
                                                fileName: e0,
                                                lineNumber: 330,
                                            },
                                        }),
                                        e(s, {
                                            left: p.startX - 3,
                                            top: p.endY - 30 + 3,
                                            onGrabButton: h,
                                            corner: "bottom-left",
                                            __self: this,
                                            __source: {
                                                fileName: e0,
                                                lineNumber: 336,
                                            },
                                        }),
                                        e(s, {
                                            left: p.endX - 30 + 3,
                                            top: p.endY - 30 + 3,
                                            onGrabButton: h,
                                            corner: "bottom-right",
                                            __self: this,
                                            __source: {
                                                fileName: e0,
                                                lineNumber: 342,
                                            },
                                        }),
                                        e(
                                            "div",
                                            {
                                                style: {
                                                    left: Math.max(0, p.endX - 191),
                                                    top: Math.max(0, p.endY + 8),
                                                    display: I ? "flex" : "none",
                                                },
                                                class: "editor__crop-btn-group",
                                                __self: this,
                                                __source: {
                                                    fileName: e0,
                                                    lineNumber: 348,
                                                },
                                            },
                                            e(
                                                "button",
                                                {
                                                    onClick: (e) => {
                                                        e.preventDefault(),
                                                            d.current &&
                                                                f({
                                                                    startX: 0,
                                                                    startY: 0,
                                                                    endX: d.current.width / e1,
                                                                    endY: d.current.height / e1,
                                                                }),
                                                            T(!1);
                                                    },
                                                    class: "btn btn--default",
                                                    __self: this,
                                                    __source: {
                                                        fileName: e0,
                                                        lineNumber: 356,
                                                    },
                                                },
                                                i.cancelButtonLabel,
                                            ),
                                            e(
                                                "button",
                                                {
                                                    onClick: (e) => {
                                                        e.preventDefault(),
                                                            (function () {
                                                                let e = E.createElement("canvas"),
                                                                    t = e2(e3(n)),
                                                                    r = e2(p);
                                                                (e.width = r.width * e1), (e.height = r.height * e1);
                                                                let i = e.getContext("2d");
                                                                i &&
                                                                    n &&
                                                                    i.drawImage(
                                                                        n,
                                                                        (r.x / t.width) * n.width,
                                                                        (r.y / t.height) * n.height,
                                                                        (r.width / t.width) * n.width,
                                                                        (r.height / t.height) * n.height,
                                                                        0,
                                                                        0,
                                                                        e.width,
                                                                        e.height,
                                                                    );
                                                                let a = n.getContext("2d");
                                                                a &&
                                                                    (a.clearRect(0, 0, n.width, n.height),
                                                                    (n.width = e.width),
                                                                    (n.height = e.height),
                                                                    (n.style.width = `${r.width}px`),
                                                                    (n.style.height = `${r.height}px`),
                                                                    a.drawImage(e, 0, 0),
                                                                    N());
                                                            })(),
                                                            T(!1);
                                                    },
                                                    class: "btn btn--primary",
                                                    __self: this,
                                                    __source: {
                                                        fileName: e0,
                                                        lineNumber: 373,
                                                    },
                                                },
                                                i.confirmButtonLabel,
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    };
                })({
                    h: e,
                    hooks: t,
                    imageBuffer: i,
                    dialog: n,
                    options: r,
                }),
                value: async () => {
                    let e = await new Promise((e) => {
                        i.toBlob(e, "image/png");
                    });
                    if (e)
                        return {
                            data: new Uint8Array(await e.arrayBuffer()),
                            filename: "screenshot.png",
                            contentType: "application/png",
                        };
                },
            };
        },
    });
