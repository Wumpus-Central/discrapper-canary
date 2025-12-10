r.d(t, {
    U0: () => e6,
    fA: () => g,
    gS: () => eQ,
    qm: () => U,
    rp: () => b,
});
var n = r(509440),
    a = r(293798),
    i = r(606093),
    o = r(309063),
    _ = r(98076),
    s = r(655913);
let c = i.n,
    E = c.document,
    l = c.navigator,
    u = "Report a Bug",
    d = "Cancel",
    I = "Send Bug Report",
    p = "Confirm",
    R = "Report a Bug",
    T = "your.email@example.org",
    A = "Email",
    f = "What's the bug? What did you expect?",
    N = "Description",
    O = "Your Name",
    h = "Name",
    S = "Thank you for your report!",
    D = "(required)",
    C = "Add a screenshot",
    L = "Remove screenshot",
    g = (e, t = { includeReplay: !0 }) => {
        if (!e.message) throw Error("Unable to submit feedback with empty message");
        let r = (0, n.s3)();
        if (!r) throw Error("No client setup, cannot send feedback.");
        e.tags && Object.keys(e.tags).length && (0, n.nZ)().setTags(e.tags);
        let i = (0, a.N)(
            {
                source: "api",
                url: (0, o.l4)(),
                ...e,
            },
            t,
        );
        return new Promise((e, t) => {
            let n = setTimeout(() => t("Unable to determine if Feedback was correctly sent."), 5000),
                a = r.on("afterSendEvent", (r, o) => {
                    if (r.event_id === i)
                        return (clearTimeout(n),
                        a(),
                        o && "number" == typeof o.statusCode && o.statusCode >= 200 && o.statusCode < 300 && e(i),
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
    m = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
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
        onSubmitSuccess: (r) => {
            t.onSubmitSuccess && t.onSubmitSuccess(r), e.onSubmitSuccess && e.onSubmitSuccess(r);
        },
        onSubmitError: (r) => {
            t.onSubmitError && t.onSubmitError(r), e.onSubmitError && e.onSubmitError(r);
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
        Object.entries(t).forEach(([t, r]) => {
            e.setAttributeNS(null, t, r);
        }),
        e
    );
}
let v = "rgba(88, 74, 192, 1)",
    M = {
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
    w = {
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
function G(e) {
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
let b =
    ({ lazyLoadIntegration: e, getModalIntegration: t, getScreenshotIntegration: r }) =>
    ({
        id: a = "sentry-feedback",
        autoInject: i = !0,
        showBranding: o = !0,
        isEmailRequired: v = !1,
        isNameRequired: b = !1,
        showEmail: U = !0,
        showName: H = !0,
        enableScreenshot: K = !0,
        useSentryUser: W = {
            email: "email",
            name: "username",
        },
        tags: B,
        styleNonce: k,
        scriptNonce: Y,
        colorScheme: x = "system",
        themeLight: F = {},
        themeDark: V = {},
        addScreenshotButtonLabel: j = C,
        cancelButtonLabel: X = d,
        confirmButtonLabel: $ = p,
        emailLabel: q = A,
        emailPlaceholder: z = T,
        formTitle: J = R,
        isRequiredLabel: Z = D,
        messageLabel: Q = N,
        messagePlaceholder: ee = f,
        nameLabel: et = h,
        namePlaceholder: er = O,
        removeScreenshotButtonLabel: en = L,
        submitButtonLabel: ea = I,
        successMessageText: ei = S,
        triggerLabel: eo = u,
        triggerAriaLabel: e_ = "",
        onFormOpen: es,
        onFormClose: ec,
        onSubmitSuccess: eE,
        onSubmitError: el,
        onFormSubmitted: eu,
    } = {}) => {
        let ed = {
                id: a,
                autoInject: i,
                showBranding: o,
                isEmailRequired: v,
                isNameRequired: b,
                showEmail: U,
                showName: H,
                enableScreenshot: K,
                useSentryUser: W,
                tags: B,
                styleNonce: k,
                scriptNonce: Y,
                colorScheme: x,
                themeDark: V,
                themeLight: F,
                triggerLabel: eo,
                triggerAriaLabel: e_,
                cancelButtonLabel: X,
                submitButtonLabel: ea,
                confirmButtonLabel: $,
                formTitle: J,
                emailLabel: q,
                emailPlaceholder: z,
                messageLabel: Q,
                messagePlaceholder: ee,
                nameLabel: et,
                namePlaceholder: er,
                successMessageText: ei,
                isRequiredLabel: Z,
                addScreenshotButtonLabel: j,
                removeScreenshotButtonLabel: en,
                onFormClose: ec,
                onFormOpen: es,
                onSubmitError: el,
                onSubmitSuccess: eE,
                onFormSubmitted: eu,
            },
            eI = null,
            ep = [],
            eR = (e) => {
                if (!eI) {
                    let t = E.createElement("div");
                    (t.id = String(e.id)),
                        E.body.appendChild(t),
                        (eI = t.attachShadow({ mode: "open" })).appendChild(
                            (function ({ colorScheme: e, themeDark: t, themeLight: r, styleNonce: n }) {
                                let a = E.createElement("style");
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

  ${"system" !== e ? "color-scheme: only light;" : ""}

  ${G(
      "dark" === e
          ? {
                ...w,
                ...t,
            }
          : {
                ...M,
                ...r,
            },
  )}
}

${
    "system" === e
        ? `
@media (prefers-color-scheme: dark) {
  :host {
    ${G({
        ...w,
        ...t,
    })}
  }
}`
        : ""
}
}
`),
                                    n && a.setAttribute("nonce", n),
                                    a
                                );
                            })(e),
                        );
                }
                return eI;
            },
            eT = async (t, r, a) => {
                let i = (0, n.s3)(),
                    o = i && i.getIntegrationByName(t);
                if (o) return o;
                let _ = ((r && r()) || (await e(a, Y)))();
                return i && i.addIntegration(_), _;
            },
            eA = async (e) => {
                let n =
                        e.enableScreenshot &&
                        !(
                            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(l.userAgent) ||
                            (/Macintosh/i.test(l.userAgent) && l.maxTouchPoints && l.maxTouchPoints > 1)
                        ) &&
                        !!isSecureContext,
                    [a, i] = await Promise.all([
                        eT("FeedbackModal", t, "feedbackModalIntegration"),
                        n ? eT("FeedbackScreenshot", r, "feedbackScreenshotIntegration") : void 0,
                    ]);
                if (!a)
                    throw (
                        (m &&
                            _.kg.error(
                                "[Feedback] Missing feedback modal integration. Try using `feedbackSyncIntegration` in your `Sentry.init`.",
                            ),
                        Error("[Feedback] Missing feedback modal integration!"))
                    );
                n &&
                    !i &&
                    m &&
                    _.kg.error("[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.");
                let o = a.createDialog({
                    options: {
                        ...e,
                        onFormClose: () => {
                            o && o.close(), e.onFormClose && e.onFormClose();
                        },
                        onFormSubmitted: () => {
                            o && o.close(), e.onFormSubmitted && e.onFormSubmitted();
                        },
                    },
                    screenshotIntegration: n ? i : void 0,
                    sendFeedback: g,
                    shadow: eR(e),
                });
                return o;
            },
            ef = (e, t = {}) => {
                let r = y(ed, t),
                    n = "string" == typeof e ? E.querySelector(e) : "function" == typeof e.addEventListener ? e : null;
                if (!n)
                    throw (
                        (m && _.kg.error("[Feedback] Unable to attach to target element"),
                        Error("Unable to attach to target element"))
                    );
                let a = null,
                    i = async () => {
                        a ||
                            (a = await eA({
                                ...r,
                                onFormSubmitted: () => {
                                    a && a.removeFromDom(), r.onFormSubmitted && r.onFormSubmitted();
                                },
                            })),
                            a.appendToDom(),
                            a.open();
                    };
                n.addEventListener("click", i);
                let o = () => {
                    (ep = ep.filter((e) => e !== o)),
                        a && a.removeFromDom(),
                        (a = null),
                        n.removeEventListener("click", i);
                };
                return ep.push(o), o;
            },
            eN = (e = {}) => {
                let t = y(ed, e),
                    r = eR(t),
                    n = (function ({ triggerLabel: e, triggerAriaLabel: t, shadow: r, styleNonce: n }) {
                        let a = E.createElement("button");
                        if (
                            ((a.type = "button"),
                            (a.className = "widget__actor"),
                            (a.ariaHidden = "false"),
                            (a.ariaLabel = t || e || u),
                            a.appendChild(
                                (function () {
                                    let e = (e) => c.document.createElementNS("http://www.w3.org/2000/svg", e),
                                        t = P(e("svg"), {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 20 20",
                                            fill: "var(--actor-color, var(--foreground))",
                                        }),
                                        r = P(e("g"), { clipPath: "url(#clip0_57_80)" }),
                                        n = P(e("path"), {
                                            "fill-rule": "evenodd",
                                            "clip-rule": "evenodd",
                                            d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z",
                                        });
                                    t.appendChild(r).appendChild(n);
                                    let a = e("defs"),
                                        i = P(e("clipPath"), { id: "clip0_57_80" }),
                                        o = P(e("rect"), {
                                            width: "20",
                                            height: "20",
                                            fill: "white",
                                        });
                                    return (
                                        i.appendChild(o),
                                        a.appendChild(i),
                                        t.appendChild(a).appendChild(i).appendChild(o),
                                        t
                                    );
                                })(),
                            ),
                            e)
                        ) {
                            let t = E.createElement("span");
                            t.appendChild(E.createTextNode(e)), a.appendChild(t);
                        }
                        let i = (function (e) {
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
                        })(n);
                        return {
                            el: a,
                            appendToDom() {
                                r.appendChild(i), r.appendChild(a);
                            },
                            removeFromDom() {
                                r.removeChild(a), r.removeChild(i);
                            },
                            show() {
                                a.ariaHidden = "false";
                            },
                            hide() {
                                a.ariaHidden = "true";
                            },
                        };
                    })({
                        triggerLabel: t.triggerLabel,
                        triggerAriaLabel: t.triggerAriaLabel,
                        shadow: r,
                        styleNonce: k,
                    });
                return (
                    ef(n.el, {
                        ...t,
                        onFormOpen() {
                            n.hide();
                        },
                        onFormClose() {
                            n.show();
                        },
                        onFormSubmitted() {
                            n.show();
                        },
                    }),
                    n
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
            attachTo: ef,
            createWidget(e = {}) {
                let t = eN(y(ed, e));
                return t.appendToDom(), t;
            },
            createForm: async (e = {}) => eA(y(ed, e)),
            remove() {
                eI && (eI.parentElement && eI.parentElement.remove(), (eI = null)), ep.forEach((e) => e()), (ep = []);
            },
        };
    };
function U() {
    let e = (0, n.s3)();
    return e && e.getIntegrationByName("Feedback");
}
var H,
    K,
    W,
    B,
    k,
    Y,
    x,
    F = {},
    V = [],
    j = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    X = Array.isArray;
function $(e, t) {
    for (var r in t) e[r] = t[r];
    return e;
}
function q(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
}
function z(e, t, r) {
    var n,
        a,
        i,
        o = {};
    for (i in t) "key" == i ? (n = t[i]) : "ref" == i ? (a = t[i]) : (o[i] = t[i]);
    if (
        (arguments.length > 2 && (o.children = arguments.length > 3 ? H.call(arguments, 2) : r),
        "function" == typeof e && null != e.defaultProps)
    )
        for (i in e.defaultProps) void 0 === o[i] && (o[i] = e.defaultProps[i]);
    return J(e, o, n, a, null);
}
function J(e, t, r, n, a) {
    var i = {
        type: e,
        props: t,
        key: r,
        ref: n,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: null == a ? ++W : a,
        __i: -1,
        __u: 0,
    };
    return null == a && null != K.vnode && K.vnode(i), i;
}
function Z(e) {
    return e.children;
}
function Q(e, t) {
    (this.props = e), (this.context = t);
}
function ee(e, t) {
    if (null == t) return e.__ ? ee(e.__, e.__i + 1) : null;
    for (var r; t < e.__k.length; t++) if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
    return "function" == typeof e.type ? ee(e) : null;
}
function et(e) {
    ((!e.__d && (e.__d = !0) && B.push(e) && !er.__r++) || k !== K.debounceRendering) &&
        ((k = K.debounceRendering) || Y)(er);
}
function er() {
    var e,
        t,
        r,
        n = [],
        a = [];
    for (B.sort(x); (e = B.shift()); )
        e.__d &&
            ((r = B.length),
            (t =
                (function (e, t, r) {
                    var n,
                        a = e.__v,
                        i = a.__e,
                        o = e.__P;
                    if (o)
                        return (
                            ((n = $({}, a)).__v = a.__v + 1),
                            K.vnode && K.vnode(n),
                            es(
                                o,
                                n,
                                a,
                                e.__n,
                                void 0 !== o.ownerSVGElement,
                                32 & a.__u ? [i] : null,
                                t,
                                null == i ? ee(a) : i,
                                !!(32 & a.__u),
                                r,
                            ),
                            (n.__.__k[n.__i] = n),
                            (n.__d = void 0),
                            n.__e != i &&
                                (function e(t) {
                                    var r, n;
                                    if (null != (t = t.__) && null != t.__c) {
                                        for (t.__e = t.__c.base = null, r = 0; r < t.__k.length; r++)
                                            if (null != (n = t.__k[r]) && null != n.__e) {
                                                t.__e = t.__c.base = n.__e;
                                                break;
                                            }
                                        return e(t);
                                    }
                                })(n),
                            n
                        );
                })(e, n, a) || t),
            0 === r || B.length > r
                ? (ec(n, t, a), (a.length = n.length = 0), (t = void 0), B.sort(x))
                : t && K.__c && K.__c(t, V));
    t && ec(n, t, a), (er.__r = 0);
}
function en(e, t, r, n, a, i, o, _, s, c, E) {
    var l,
        u,
        d,
        I,
        p,
        R = (n && n.__k) || V,
        T = t.length;
    for (
        r.__d = s,
            (function (e, t, r) {
                var n,
                    a,
                    i,
                    o,
                    _,
                    s = t.length,
                    c = r.length,
                    E = c,
                    l = 0;
                for (e.__k = [], n = 0; n < s; n++)
                    null !=
                    (a = e.__k[n] =
                        null == (a = t[n]) || "boolean" == typeof a || "function" == typeof a
                            ? null
                            : "string" == typeof a ||
                                "number" == typeof a ||
                                "bigint" == typeof a ||
                                a.constructor == String
                              ? J(null, a, null, null, a)
                              : X(a)
                                ? J(Z, { children: a }, null, null, null)
                                : void 0 === a.constructor && a.__b > 0
                                  ? J(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v)
                                  : a)
                        ? ((a.__ = e),
                          (a.__b = e.__b + 1),
                          (_ = (function (e, t, r, n) {
                              var a = e.key,
                                  i = e.type,
                                  o = r - 1,
                                  _ = r + 1,
                                  s = t[r];
                              if (null === s || (s && a == s.key && i === s.type)) return r;
                              if (n > +(null != s && 0 == (131072 & s.__u)))
                                  for (; o >= 0 || _ < t.length; ) {
                                      if (o >= 0) {
                                          if ((s = t[o]) && 0 == (131072 & s.__u) && a == s.key && i === s.type)
                                              return o;
                                          o--;
                                      }
                                      if (_ < t.length) {
                                          if ((s = t[_]) && 0 == (131072 & s.__u) && a == s.key && i === s.type)
                                              return _;
                                          _++;
                                      }
                                  }
                              return -1;
                          })(a, r, (o = n + l), E)),
                          (a.__i = _),
                          (i = null),
                          -1 !== _ && (E--, (i = r[_]) && (i.__u |= 131072)),
                          null == i || null === i.__v
                              ? (-1 == _ && l--, "function" != typeof a.type && (a.__u |= 65536))
                              : _ !== o &&
                                (_ === o + 1
                                    ? l++
                                    : _ > o
                                      ? E > s - o
                                          ? (l += _ - o)
                                          : l--
                                      : (l = _ < o && _ == o - 1 ? _ - o : 0),
                                _ !== n + l && (a.__u |= 65536)))
                        : (i = r[n]) &&
                          null == i.key &&
                          i.__e &&
                          (i.__e == e.__d && (e.__d = ee(i)), el(i, i, !1), (r[n] = null), E--);
                if (E)
                    for (n = 0; n < c; n++)
                        null != (i = r[n]) && 0 == (131072 & i.__u) && (i.__e == e.__d && (e.__d = ee(i)), el(i, i));
            })(r, t, R),
            s = r.__d,
            l = 0;
        l < T;
        l++
    )
        null != (d = r.__k[l]) &&
            "boolean" != typeof d &&
            "function" != typeof d &&
            ((u = -1 === d.__i ? F : R[d.__i] || F),
            (d.__i = l),
            es(e, d, u, a, i, o, _, s, c, E),
            (I = d.__e),
            d.ref && u.ref != d.ref && (u.ref && eE(u.ref, null, d), E.push(d.ref, d.__c || I, d)),
            null == p && null != I && (p = I),
            65536 & d.__u || u.__k === d.__k
                ? (s = (function e(t, r, n) {
                      var a, i;
                      if ("function" == typeof t.type) {
                          for (a = t.__k, i = 0; a && i < a.length; i++) a[i] && ((a[i].__ = t), (r = e(a[i], r, n)));
                          return r;
                      }
                      t.__e != r && (n.insertBefore(t.__e, r || null), (r = t.__e));
                      do r = r && r.nextSibling;
                      while (null != r && 8 === r.nodeType);
                      return r;
                  })(d, s, e))
                : "function" == typeof d.type && void 0 !== d.__d
                  ? (s = d.__d)
                  : I && (s = I.nextSibling),
            (d.__d = void 0),
            (d.__u &= -196609));
    (r.__d = s), (r.__e = p);
}
function ea(e, t, r) {
    "-" === t[0]
        ? e.setProperty(t, null == r ? "" : r)
        : (e[t] = null == r ? "" : "number" != typeof r || j.test(t) ? r : r + "px");
}
function ei(e, t, r, n, a) {
    var i;
    t: if ("style" === t)
        if ("string" == typeof r) e.style.cssText = r;
        else {
            if (("string" == typeof n && (e.style.cssText = n = ""), n))
                for (t in n) (r && t in r) || ea(e.style, t, "");
            if (r) for (t in r) (n && r[t] === n[t]) || ea(e.style, t, r[t]);
        }
    else if ("o" === t[0] && "n" === t[1])
        (i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
            (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + i] = r),
            r
                ? n
                    ? (r.u = n.u)
                    : ((r.u = Date.now()), e.addEventListener(t, i ? e_ : eo, i))
                : e.removeEventListener(t, i ? e_ : eo, i);
    else {
        if (a) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
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
                e[t] = null == r ? "" : r;
                break t;
            } catch (e) {}
        "function" == typeof r ||
            (null == r || (!1 === r && "-" !== t[4]) ? e.removeAttribute(t) : e.setAttribute(t, r));
    }
}
function eo(e) {
    if (this.l) {
        var t = this.l[e.type + !1];
        if (e.t) {
            if (e.t <= t.u) return;
        } else e.t = Date.now();
        return t(K.event ? K.event(e) : e);
    }
}
function e_(e) {
    if (this.l) return this.l[e.type + !0](K.event ? K.event(e) : e);
}
function es(e, t, r, n, a, i, o, _, s, c) {
    var E,
        l,
        u,
        d,
        I,
        p,
        R,
        T,
        A,
        f,
        N,
        O,
        h,
        S,
        D,
        C = t.type;
    if (void 0 !== t.constructor) return null;
    128 & r.__u && ((s = !!(32 & r.__u)), (i = [(_ = t.__e = r.__e)])), (E = K.__b) && E(t);
    t: if ("function" == typeof C)
        try {
            if (
                ((T = t.props),
                (A = (E = C.contextType) && n[E.__c]),
                (f = E ? (A ? A.props.value : E.__) : n),
                r.__c
                    ? (R = (l = t.__c = r.__c).__ = l.__E)
                    : ("prototype" in C && C.prototype.render
                          ? (t.__c = l = new C(T, f))
                          : ((t.__c = l = new Q(T, f)), (l.constructor = C), (l.render = eu)),
                      A && A.sub(l),
                      (l.props = T),
                      l.state || (l.state = {}),
                      (l.context = f),
                      (l.__n = n),
                      (u = l.__d = !0),
                      (l.__h = []),
                      (l._sb = [])),
                null == l.__s && (l.__s = l.state),
                null != C.getDerivedStateFromProps &&
                    (l.__s == l.state && (l.__s = $({}, l.__s)), $(l.__s, C.getDerivedStateFromProps(T, l.__s))),
                (d = l.props),
                (I = l.state),
                (l.__v = t),
                u)
            )
                null == C.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(),
                    null != l.componentDidMount && l.__h.push(l.componentDidMount);
            else {
                if (
                    (null == C.getDerivedStateFromProps &&
                        T !== d &&
                        null != l.componentWillReceiveProps &&
                        l.componentWillReceiveProps(T, f),
                    !l.__e &&
                        ((null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(T, l.__s, f)) ||
                            t.__v === r.__v))
                ) {
                    for (
                        t.__v !== r.__v && ((l.props = T), (l.state = l.__s), (l.__d = !1)),
                            t.__e = r.__e,
                            t.__k = r.__k,
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
                null != l.componentWillUpdate && l.componentWillUpdate(T, l.__s, f),
                    null != l.componentDidUpdate &&
                        l.__h.push(function () {
                            l.componentDidUpdate(d, I, p);
                        });
            }
            if (
                ((l.context = f),
                (l.props = T),
                (l.__P = e),
                (l.__e = !1),
                (O = K.__r),
                (h = 0),
                "prototype" in C && C.prototype.render)
            ) {
                for (
                    l.state = l.__s, l.__d = !1, O && O(t), E = l.render(l.props, l.state, l.context), S = 0;
                    S < l._sb.length;
                    S++
                )
                    l.__h.push(l._sb[S]);
                l._sb = [];
            } else
                do (l.__d = !1), O && O(t), (E = l.render(l.props, l.state, l.context)), (l.state = l.__s);
                while (l.__d && ++h < 25);
            (l.state = l.__s),
                null != l.getChildContext && (n = $($({}, n), l.getChildContext())),
                u || null == l.getSnapshotBeforeUpdate || (p = l.getSnapshotBeforeUpdate(d, I)),
                en(
                    e,
                    X((D = null != E && E.type === Z && null == E.key ? E.props.children : E)) ? D : [D],
                    t,
                    r,
                    n,
                    a,
                    i,
                    o,
                    _,
                    s,
                    c,
                ),
                (l.base = t.__e),
                (t.__u &= -161),
                l.__h.length && o.push(l),
                R && (l.__E = l.__ = null);
        } catch (e) {
            (t.__v = null),
                s || null != i
                    ? ((t.__e = _), (t.__u |= s ? 160 : 32), (i[i.indexOf(_)] = null))
                    : ((t.__e = r.__e), (t.__k = r.__k)),
                K.__e(e, t, r);
        }
    else
        null == i && t.__v === r.__v
            ? ((t.__k = r.__k), (t.__e = r.__e))
            : (t.__e = (function (e, t, r, n, a, i, o, _, s) {
                  var c,
                      E,
                      l,
                      u,
                      d,
                      I,
                      p,
                      R = r.props,
                      T = t.props,
                      A = t.type;
                  if (("svg" === A && (a = !0), null != i)) {
                      for (c = 0; c < i.length; c++)
                          if ((d = i[c]) && "setAttribute" in d == !!A && (A ? d.localName === A : 3 === d.nodeType)) {
                              (e = d), (i[c] = null);
                              break;
                          }
                  }
                  if (null == e) {
                      if (null === A) return document.createTextNode(T);
                      (e = a
                          ? document.createElementNS("http://www.w3.org/2000/svg", A)
                          : document.createElement(A, T.is && T)),
                          (i = null),
                          (_ = !1);
                  }
                  if (null === A) R === T || (_ && e.data === T) || (e.data = T);
                  else {
                      if (((i = i && H.call(e.childNodes)), (R = r.props || F), !_ && null != i))
                          for (R = {}, c = 0; c < e.attributes.length; c++) R[(d = e.attributes[c]).name] = d.value;
                      for (c in R)
                          (d = R[c]),
                              "children" == c ||
                                  ("dangerouslySetInnerHTML" == c
                                      ? (l = d)
                                      : "key" === c || c in T || ei(e, c, null, d, a));
                      for (c in T)
                          (d = T[c]),
                              "children" == c
                                  ? (u = d)
                                  : "dangerouslySetInnerHTML" == c
                                    ? (E = d)
                                    : "value" == c
                                      ? (I = d)
                                      : "checked" == c
                                        ? (p = d)
                                        : "key" === c ||
                                          (_ && "function" != typeof d) ||
                                          R[c] === d ||
                                          ei(e, c, d, R[c], a);
                      if (E)
                          _ || (l && (E.__html === l.__html || E.__html === e.innerHTML)) || (e.innerHTML = E.__html),
                              (t.__k = []);
                      else if (
                          (l && (e.innerHTML = ""),
                          en(
                              e,
                              X(u) ? u : [u],
                              t,
                              r,
                              n,
                              a && "foreignObject" !== A,
                              i,
                              o,
                              i ? i[0] : r.__k && ee(r, 0),
                              _,
                              s,
                          ),
                          null != i)
                      )
                          for (c = i.length; c--; ) null != i[c] && q(i[c]);
                      _ ||
                          ((c = "value"),
                          void 0 === I ||
                              (I === e[c] && ("progress" !== A || I) && ("option" !== A || I === R[c])) ||
                              ei(e, c, I, R[c], !1),
                          (c = "checked"),
                          void 0 !== p && p !== e[c] && ei(e, c, p, R[c], !1));
                  }
                  return e;
              })(r.__e, t, r, n, a, i, o, s, c));
    (E = K.diffed) && E(t);
}
function ec(e, t, r) {
    for (var n = 0; n < r.length; n++) eE(r[n], r[++n], r[++n]);
    K.__c && K.__c(t, e),
        e.some(function (t) {
            try {
                (e = t.__h),
                    (t.__h = []),
                    e.some(function (e) {
                        e.call(t);
                    });
            } catch (e) {
                K.__e(e, t.__v);
            }
        });
}
function eE(e, t, r) {
    try {
        "function" == typeof e ? e(t) : (e.current = t);
    } catch (e) {
        K.__e(e, r);
    }
}
function el(e, t, r) {
    var n, a;
    if (
        (K.unmount && K.unmount(e),
        (n = e.ref) && ((n.current && n.current !== e.__e) || eE(n, null, t)),
        null != (n = e.__c))
    ) {
        if (n.componentWillUnmount)
            try {
                n.componentWillUnmount();
            } catch (e) {
                K.__e(e, t);
            }
        (n.base = n.__P = null), (e.__c = void 0);
    }
    if ((n = e.__k)) for (a = 0; a < n.length; a++) n[a] && el(n[a], t, r || "function" != typeof e.type);
    r || null == e.__e || q(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function eu(e, t, r) {
    return this.constructor(e, r);
}
(H = V.slice),
    (K = {
        __e: function (e, t, r, n) {
            for (var a, i, o; (t = t.__); )
                if ((a = t.__c) && !a.__)
                    try {
                        if (
                            ((i = a.constructor) &&
                                null != i.getDerivedStateFromError &&
                                (a.setState(i.getDerivedStateFromError(e)), (o = a.__d)),
                            null != a.componentDidCatch && (a.componentDidCatch(e, n || {}), (o = a.__d)),
                            o)
                        )
                            return (a.__E = a);
                    } catch (t) {
                        e = t;
                    }
            throw e;
        },
    }),
    (W = 0),
    (Q.prototype.setState = function (e, t) {
        var r;
        (r = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = $({}, this.state))),
            "function" == typeof e && (e = e($({}, r), this.props)),
            e && $(r, e),
            null != e && this.__v && (t && this._sb.push(t), et(this));
    }),
    (Q.prototype.forceUpdate = function (e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), et(this));
    }),
    (Q.prototype.render = Z),
    (B = []),
    (Y = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
    (x = function (e, t) {
        return e.__v.__b - t.__v.__b;
    }),
    (er.__r = 0);
var ed,
    eI,
    ep,
    eR,
    eT = 0,
    eA = [],
    ef = [],
    eN = K,
    eO = eN.__b,
    eh = eN.__r,
    eS = eN.diffed,
    eD = eN.__c,
    eC = eN.unmount,
    eL = eN.__;
function eg(e, t) {
    eN.__h && eN.__h(eI, e, eT || t), (eT = 0);
    var r =
        eI.__H ||
        (eI.__H = {
            __: [],
            __h: [],
        });
    return e >= r.__.length && r.__.push({ __V: ef }), r.__[e];
}
function em(e) {
    return (eT = 1), ey(eK, e);
}
function ey(e, t, r) {
    var n = eg(ed++, 2);
    if (
        ((n.t = e),
        !n.__c &&
            ((n.__ = [
                r ? r(t) : eK(void 0, t),
                function (e) {
                    var t = n.__N ? n.__N[0] : n.__[0],
                        r = n.t(t, e);
                    t !== r && ((n.__N = [r, n.__[1]]), n.__c.setState({}));
                },
            ]),
            (n.__c = eI),
            !eI.u))
    ) {
        var a = function (e, t, r) {
            if (!n.__c.__H) return !0;
            var a = n.__c.__H.__.filter(function (e) {
                return !!e.__c;
            });
            if (
                a.every(function (e) {
                    return !e.__N;
                })
            )
                return !i || i.call(this, e, t, r);
            var o = !1;
            return (
                a.forEach(function (e) {
                    if (e.__N) {
                        var t = e.__[0];
                        (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (o = !0);
                    }
                }),
                !(!o && n.__c.props === e) && (!i || i.call(this, e, t, r))
            );
        };
        eI.u = !0;
        var i = eI.shouldComponentUpdate,
            o = eI.componentWillUpdate;
        (eI.componentWillUpdate = function (e, t, r) {
            if (this.__e) {
                var n = i;
                (i = void 0), a(e, t, r), (i = n);
            }
            o && o.call(this, e, t, r);
        }),
            (eI.shouldComponentUpdate = a);
    }
    return n.__N || n.__;
}
function eP(e, t) {
    var r = eg(ed++, 4);
    !eN.__s && eH(r.__H, t) && ((r.__ = e), (r.i = t), eI.__h.push(r));
}
function ev(e, t) {
    var r = eg(ed++, 7);
    return eH(r.__H, t) ? ((r.__V = e()), (r.i = t), (r.__h = e), r.__V) : r.__;
}
function eM(e, t) {
    return (
        (eT = 8),
        ev(function () {
            return e;
        }, t)
    );
}
function ew() {
    for (var e; (e = eA.shift()); )
        if (e.__P && e.__H)
            try {
                e.__H.__h.forEach(eb), e.__H.__h.forEach(eU), (e.__H.__h = []);
            } catch (t) {
                (e.__H.__h = []), eN.__e(t, e.__v);
            }
}
(eN.__b = function (e) {
    (eI = null), eO && eO(e);
}),
    (eN.__ = function (e, t) {
        t.__k && t.__k.__m && (e.__m = t.__k.__m), eL && eL(e, t);
    }),
    (eN.__r = function (e) {
        eh && eh(e), (ed = 0);
        var t = (eI = e.__c).__H;
        t &&
            (ep === eI
                ? ((t.__h = []),
                  (eI.__h = []),
                  t.__.forEach(function (e) {
                      e.__N && (e.__ = e.__N), (e.__V = ef), (e.__N = e.i = void 0);
                  }))
                : (t.__h.forEach(eb), t.__h.forEach(eU), (t.__h = []), (ed = 0))),
            (ep = eI);
    }),
    (eN.diffed = function (e) {
        eS && eS(e);
        var t = e.__c;
        t &&
            t.__H &&
            (t.__H.__h.length &&
                ((1 !== eA.push(t) && eR === eN.requestAnimationFrame) ||
                    (
                        (eR = eN.requestAnimationFrame) ||
                        function (e) {
                            var t,
                                r = function () {
                                    clearTimeout(n), eG && cancelAnimationFrame(t), setTimeout(e);
                                },
                                n = setTimeout(r, 100);
                            eG && (t = requestAnimationFrame(r));
                        }
                    )(ew)),
            t.__H.__.forEach(function (e) {
                e.i && (e.__H = e.i), e.__V !== ef && (e.__ = e.__V), (e.i = void 0), (e.__V = ef);
            })),
            (ep = eI = null);
    }),
    (eN.__c = function (e, t) {
        t.some(function (e) {
            try {
                e.__h.forEach(eb),
                    (e.__h = e.__h.filter(function (e) {
                        return !e.__ || eU(e);
                    }));
            } catch (r) {
                t.some(function (e) {
                    e.__h && (e.__h = []);
                }),
                    (t = []),
                    eN.__e(r, e.__v);
            }
        }),
            eD && eD(e, t);
    }),
    (eN.unmount = function (e) {
        eC && eC(e);
        var t,
            r = e.__c;
        r &&
            r.__H &&
            (r.__H.__.forEach(function (e) {
                try {
                    eb(e);
                } catch (e) {
                    t = e;
                }
            }),
            (r.__H = void 0),
            t && eN.__e(t, r.__v));
    });
var eG = "function" == typeof requestAnimationFrame;
function eb(e) {
    var t = eI,
        r = e.__c;
    "function" == typeof r && ((e.__c = void 0), r()), (eI = t);
}
function eU(e) {
    var t = eI;
    (e.__c = e.__()), (eI = t);
}
function eH(e, t) {
    return (
        !e ||
        e.length !== t.length ||
        t.some(function (t, r) {
            return t !== e[r];
        })
    );
}
function eK(e, t) {
    return "function" == typeof t ? t(e) : t;
}
let eW = {
        __proto__: null,
        useCallback: eM,
        useContext: function (e) {
            var t = eI.context[e.__c],
                r = eg(ed++, 9);
            return (r.c = e), t ? (null == r.__ && ((r.__ = !0), t.sub(eI)), t.props.value) : e.__;
        },
        useDebugValue: function (e, t) {
            eN.useDebugValue && eN.useDebugValue(t ? t(e) : e);
        },
        useEffect: function (e, t) {
            var r = eg(ed++, 3);
            !eN.__s && eH(r.__H, t) && ((r.__ = e), (r.i = t), eI.__H.__h.push(r));
        },
        useErrorBoundary: function (e) {
            var t = eg(ed++, 10),
                r = em();
            return (
                (t.__ = e),
                eI.componentDidCatch ||
                    (eI.componentDidCatch = function (e, n) {
                        t.__ && t.__(e, n), r[1](e);
                    }),
                [
                    r[0],
                    function () {
                        r[1](void 0);
                    },
                ]
            );
        },
        useId: function () {
            var e = eg(ed++, 11);
            if (!e.__) {
                for (var t = eI.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
                var r = t.__m || (t.__m = [0, 0]);
                e.__ = "P" + r[0] + "-" + r[1]++;
            }
            return e.__;
        },
        useImperativeHandle: function (e, t, r) {
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
                    null == r ? r : r.concat(e),
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
        useState: em,
    },
    eB =
        "/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/components/DialogHeader.tsx";
function ek({ options: e }) {
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
                    r = P(e("path"), {
                        transform: "translate(11, 11)",
                        d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z",
                    });
                return t.appendChild(r), t;
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
                fileName: eB,
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
                      fileName: eB,
                      lineNumber: 19,
                  },
              })
            : null,
    );
}
let eY = "/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/components/Form.tsx";
function ex(e, t) {
    let r = e.get(t);
    return "string" == typeof r ? r.trim() : "";
}
function eF({
    options: e,
    defaultEmail: t,
    defaultName: r,
    onFormClose: n,
    onSubmit: a,
    onSubmitSuccess: i,
    onSubmitError: o,
    showEmail: s,
    showName: c,
    screenshotInput: E,
}) {
    let {
            tags: l,
            addScreenshotButtonLabel: u,
            removeScreenshotButtonLabel: d,
            cancelButtonLabel: I,
            emailLabel: p,
            emailPlaceholder: R,
            isEmailRequired: T,
            isNameRequired: A,
            messageLabel: f,
            messagePlaceholder: N,
            nameLabel: O,
            namePlaceholder: h,
            submitButtonLabel: S,
            isRequiredLabel: D,
        } = e,
        [C, L] = em(null),
        [g, y] = em(!1),
        P = E && E.input,
        [v, M] = em(null),
        w = eM((e) => {
            M(e), y(!1);
        }, []),
        G = eM(
            (e) => {
                let t = (function (e, t) {
                    let r = [];
                    return (
                        t.isNameRequired && !e.name && r.push(t.nameLabel),
                        t.isEmailRequired && !e.email && r.push(t.emailLabel),
                        e.message || r.push(t.messageLabel),
                        r
                    );
                })(e, {
                    emailLabel: p,
                    isEmailRequired: T,
                    isNameRequired: A,
                    messageLabel: f,
                    nameLabel: O,
                });
                return (
                    t.length > 0 ? L(`Please enter in the following required fields: ${t.join(", ")}`) : L(null),
                    0 === t.length
                );
            },
            [p, T, A, f, O],
        );
    return z(
        "form",
        {
            class: "form",
            onSubmit: eM(
                async (e) => {
                    try {
                        if ((e.preventDefault(), !(e.target instanceof HTMLFormElement))) return;
                        let t = new FormData(e.target),
                            r = await (E && g ? E.value() : void 0),
                            n = {
                                name: ex(t, "name"),
                                email: ex(t, "email"),
                                message: ex(t, "message"),
                                attachments: r ? [r] : void 0,
                            };
                        if (!G(n)) return;
                        try {
                            await a(
                                {
                                    name: n.name,
                                    email: n.email,
                                    message: n.message,
                                    source: "widget",
                                    tags: l,
                                },
                                { attachments: n.attachments },
                            ),
                                i(n);
                        } catch (e) {
                            m && _.kg.error(e), L(e), o(e);
                        }
                    } catch (e) {}
                },
                [E && g, i, o],
            ),
            __self: this,
            __source: {
                fileName: eY,
                lineNumber: 144,
            },
        },
        P && g
            ? z(P, {
                  onError: w,
                  __self: this,
                  __source: {
                      fileName: eY,
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
                    fileName: eY,
                    lineNumber: 149,
                },
            },
            z(
                "div",
                {
                    class: "form__top",
                    __self: this,
                    __source: {
                        fileName: eY,
                        lineNumber: 150,
                    },
                },
                C
                    ? z(
                          "div",
                          {
                              class: "form__error-container",
                              __self: this,
                              __source: {
                                  fileName: eY,
                                  lineNumber: 151,
                              },
                          },
                          C,
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
                                  fileName: eY,
                                  lineNumber: 154,
                              },
                          },
                          z(eV, {
                              label: O,
                              isRequiredLabel: D,
                              isRequired: A,
                              __self: this,
                              __source: {
                                  fileName: eY,
                                  lineNumber: 155,
                              },
                          }),
                          z("input", {
                              class: "form__input",
                              defaultValue: r,
                              id: "name",
                              name: "name",
                              placeholder: h,
                              required: A,
                              type: "text",
                              __self: this,
                              __source: {
                                  fileName: eY,
                                  lineNumber: 156,
                              },
                          }),
                      )
                    : z("input", {
                          "aria-hidden": !0,
                          value: r,
                          name: "name",
                          type: "hidden",
                          __self: this,
                          __source: {
                              fileName: eY,
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
                                  fileName: eY,
                                  lineNumber: 171,
                              },
                          },
                          z(eV, {
                              label: p,
                              isRequiredLabel: D,
                              isRequired: T,
                              __self: this,
                              __source: {
                                  fileName: eY,
                                  lineNumber: 172,
                              },
                          }),
                          z("input", {
                              class: "form__input",
                              defaultValue: t,
                              id: "email",
                              name: "email",
                              placeholder: R,
                              required: T,
                              type: "email",
                              __self: this,
                              __source: {
                                  fileName: eY,
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
                              fileName: eY,
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
                            fileName: eY,
                            lineNumber: 187,
                        },
                    },
                    z(eV, {
                        label: f,
                        isRequiredLabel: D,
                        isRequired: !0,
                        __self: this,
                        __source: {
                            fileName: eY,
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
                            fileName: eY,
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
                                  fileName: eY,
                                  lineNumber: 201,
                              },
                          },
                          z(
                              "button",
                              {
                                  class: "btn btn--default",
                                  type: "button",
                                  onClick: () => {
                                      M(null), y((e) => !e);
                                  },
                                  __self: this,
                                  __source: {
                                      fileName: eY,
                                      lineNumber: 202,
                                  },
                              },
                              g ? d : u,
                          ),
                          v
                              ? z(
                                    "div",
                                    {
                                        class: "form__error-container",
                                        __self: this,
                                        __source: {
                                            fileName: eY,
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
                        fileName: eY,
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
                            fileName: eY,
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
                        onClick: n,
                        __self: this,
                        __source: {
                            fileName: eY,
                            lineNumber: 220,
                        },
                    },
                    I,
                ),
            ),
        ),
    );
}
function eV({ label: e, isRequired: t, isRequiredLabel: r }) {
    return z(
        "span",
        {
            class: "form__label__text",
            __self: this,
            __source: {
                fileName: eY,
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
                        fileName: eY,
                        lineNumber: 241,
                    },
                },
                r,
            ),
    );
}
let ej = "/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/components/Dialog.tsx";
function eX({ open: e, onFormSubmitted: t, ...r }) {
    let n = r.options,
        a = ev(
            () => ({
                __html: (function () {
                    let e = (e) => c.document.createElementNS("http://www.w3.org/2000/svg", e),
                        t = P(e("svg"), {
                            width: "16",
                            height: "17",
                            viewBox: "0 0 16 17",
                            fill: "inherit",
                        }),
                        r = P(e("g"), { clipPath: "url(#clip0_57_156)" }),
                        n = P(e("path"), {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z",
                        }),
                        a = P(e("path"), {
                            d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z",
                        });
                    t.appendChild(r).append(a, n);
                    let i = e("defs"),
                        o = P(e("clipPath"), { id: "clip0_57_156" }),
                        _ = P(e("rect"), {
                            width: "16",
                            height: "16",
                            fill: "white",
                            transform: "translate(0 0.5)",
                        });
                    return o.appendChild(_), i.appendChild(o), t.appendChild(i).appendChild(o).appendChild(_), t;
                })().outerHTML,
            }),
            [],
        ),
        [i, o] = em(null),
        _ = eM(() => {
            i && (clearTimeout(i), o(null)), t();
        }, [i]),
        s = eM(
            (e) => {
                r.onSubmitSuccess(e),
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
        i
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
                      n.successMessageText,
                      z("span", {
                          class: "success__icon",
                          dangerouslySetInnerHTML: a,
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
                      onClick: n.onFormClose,
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
                          z(ek, {
                              options: n,
                              __self: this,
                              __source: {
                                  fileName: ej,
                                  lineNumber: 66,
                              },
                          }),
                          z(eF, {
                              ...r,
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
        createDialog: ({ options: e, screenshotIntegration: t, sendFeedback: r, shadow: a }) => {
            let i = e.useSentryUser,
                o = (function () {
                    let e = (0, n.nZ)().getUser(),
                        t = (0, n.aF)().getUser(),
                        r = (0, n.lW)().getUser();
                    return e && Object.keys(e).length ? e : t && Object.keys(t).length ? t : r;
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
                        a.contains(s) || a.contains(_) || (a.appendChild(s), a.appendChild(_));
                    },
                    removeFromDom() {
                        a.removeChild(_), a.removeChild(s), (E.body.style.overflow = c);
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
                        hooks: eW,
                        dialog: l,
                        options: e,
                    }),
                d = (t) => {
                    var n, a, s, c, E;
                    (n = z(eX, {
                        options: e,
                        screenshotInput: u,
                        showName: e.showName || e.isNameRequired,
                        showEmail: e.showEmail || e.isEmailRequired,
                        defaultName: (i && o && o[i.name]) || "",
                        defaultEmail: (i && o && o[i.email]) || "",
                        onFormClose: () => {
                            d(!1), e.onFormClose && e.onFormClose();
                        },
                        onSubmit: r,
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
                        K.__ && K.__(n, _),
                        (s = (a && a.__k) || _.__k),
                        (c = []),
                        (E = []),
                        es(
                            _,
                            (n = (a || _).__k = z(Z, null, [n])),
                            s || F,
                            F,
                            void 0 !== _.ownerSVGElement,
                            a ? [a] : s ? null : _.firstChild ? H.call(_.childNodes) : null,
                            c,
                            a ? a : s ? s.__e : _.firstChild,
                            !1,
                            E,
                        ),
                        (n.__d = void 0),
                        ec(c, n, E);
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
            r = e.clientWidth,
            n = e.width / e.height,
            a = t * n,
            i = t;
        a > r && ((a = r), (i = r / n));
        let o = (r - a) / 2,
            _ = (t - i) / 2;
        return {
            startX: o,
            startY: _,
            endX: a + o,
            endY: i + _,
        };
    },
    e6 = () => ({
        name: "FeedbackScreenshot",
        setupOnce() {},
        createInput: ({ h: e, hooks: t, dialog: r, options: n }) => {
            let a = E.createElement("canvas");
            return {
                input: (function ({ h: e, hooks: t, imageBuffer: r, dialog: n, options: a }) {
                    let i = (function ({ hooks: e }) {
                        return function ({ onBeforeScreenshot: t, onScreenshot: r, onAfterScreenshot: n, onError: a }) {
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
                                        a = E.createElement("video");
                                    await new Promise((t, n) => {
                                        (a.srcObject = e),
                                            (a.onloadedmetadata = () => {
                                                r(a), e.getTracks().forEach((e) => e.stop()), t();
                                            }),
                                            a.play().catch(n);
                                    }),
                                        n();
                                })().catch(a);
                            }, []);
                        };
                    })({ hooks: t });
                    return function ({ onError: o }) {
                        let _ = t.useMemo(
                                () => ({
                                    __html: (function (e) {
                                        let t = E.createElement("style"),
                                            r = "#1A141F",
                                            n = "#302735";
                                        return (
                                            (t.textContent = `
.editor {
  padding: 10px;
  padding-top: 65px;
  padding-bottom: 65px;
  flex-grow: 1;

  background-color: ${r};
  background-image: repeating-linear-gradient(
      -145deg,
      transparent,
      transparent 8px,
      ${r} 8px,
      ${r} 11px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 15px,
      ${n} 15px,
      ${n} 16px
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
                                    })(a.styleNonce).innerText,
                                }),
                                [],
                            ),
                            s = (function ({ h: e }) {
                                return function ({ top: t, left: r, corner: n, onGrabButton: a }) {
                                    return e("button", {
                                        class: `editor__crop-corner editor__crop-corner--${n} `,
                                        style: {
                                            top: t,
                                            left: r,
                                        },
                                        onMouseDown: (e) => {
                                            e.preventDefault(), a(e, n);
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
                            [I, p] = t.useState({
                                startX: 0,
                                startY: 0,
                                endX: 0,
                                endY: 0,
                            }),
                            [R, T] = t.useState(!1),
                            [A, f] = t.useState(!1);
                        function N() {
                            let e = d.current,
                                t = e2(e3(r));
                            if (e) {
                                (e.width = t.width * e1),
                                    (e.height = t.height * e1),
                                    (e.style.width = `${t.width}px`),
                                    (e.style.height = `${t.height}px`);
                                let r = e.getContext("2d");
                                r && r.scale(e1, e1);
                            }
                            let n = u.current;
                            n && ((n.style.width = `${t.width}px`), (n.style.height = `${t.height}px`)),
                                p({
                                    startX: 0,
                                    startY: 0,
                                    endX: t.width,
                                    endY: t.height,
                                });
                        }
                        function O(e, t) {
                            T(!1), f(!0);
                            let r = h(t),
                                n = () => {
                                    E.removeEventListener("mousemove", r),
                                        E.removeEventListener("mouseup", n),
                                        T(!0),
                                        f(!1);
                                };
                            E.addEventListener("mouseup", n), E.addEventListener("mousemove", r);
                        }
                        t.useEffect(() => {
                            c.addEventListener("resize", N, !1);
                        }, []),
                            t.useEffect(() => {
                                let e = d.current;
                                if (!e) return;
                                let t = e.getContext("2d");
                                if (!t) return;
                                let n = e2(e3(r)),
                                    a = e2(I);
                                t.clearRect(0, 0, n.width, n.height),
                                    (t.fillStyle = "rgba(0, 0, 0, 0.5)"),
                                    t.fillRect(0, 0, n.width, n.height),
                                    t.clearRect(a.x, a.y, a.width, a.height),
                                    (t.strokeStyle = "#ffffff"),
                                    (t.lineWidth = 3),
                                    t.strokeRect(a.x + 1, a.y + 1, a.width - 2, a.height - 2),
                                    (t.strokeStyle = "#000000"),
                                    (t.lineWidth = 1),
                                    t.strokeRect(a.x + 3, a.y + 3, a.width - 6, a.height - 6);
                            }, [I]);
                        let h = t.useCallback(
                                (e) =>
                                    function (t) {
                                        if (!d.current) return;
                                        let r = d.current,
                                            n = r.getBoundingClientRect(),
                                            a = t.clientX - n.x,
                                            i = t.clientY - n.y;
                                        switch (e) {
                                            case "top-left":
                                                p((e) => ({
                                                    ...e,
                                                    startX: Math.min(Math.max(0, a), e.endX - 33),
                                                    startY: Math.min(Math.max(0, i), e.endY - 33),
                                                }));
                                                break;
                                            case "top-right":
                                                p((e) => ({
                                                    ...e,
                                                    endX: Math.max(Math.min(a, r.width / e1), e.startX + 33),
                                                    startY: Math.min(Math.max(0, i), e.endY - 33),
                                                }));
                                                break;
                                            case "bottom-left":
                                                p((e) => ({
                                                    ...e,
                                                    startX: Math.min(Math.max(0, a), e.endX - 33),
                                                    endY: Math.max(Math.min(i, r.height / e1), e.startY + 33),
                                                }));
                                                break;
                                            case "bottom-right":
                                                p((e) => ({
                                                    ...e,
                                                    endX: Math.max(Math.min(a, r.width / e1), e.startX + 33),
                                                    endY: Math.max(Math.min(i, r.height / e1), e.startY + 33),
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
                            i({
                                onBeforeScreenshot: t.useCallback(() => {
                                    n.el.style.display = "none";
                                }, []),
                                onScreenshot: t.useCallback(
                                    (e) => {
                                        let t = r.getContext("2d");
                                        if (!t) throw Error("Could not get canvas context");
                                        (r.width = e.videoWidth),
                                            (r.height = e.videoHeight),
                                            (r.style.width = "100%"),
                                            (r.style.height = "100%"),
                                            t.drawImage(e, 0, 0);
                                    },
                                    [r],
                                ),
                                onAfterScreenshot: t.useCallback(() => {
                                    n.el.style.display = "block";
                                    let e = l.current;
                                    e && e.appendChild(r), N();
                                }, []),
                                onError: t.useCallback((e) => {
                                    (n.el.style.display = "block"), o(e);
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
                                    nonce: a.styleNonce,
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
                                                if (A) return;
                                                S.current = {
                                                    initialX: e.clientX,
                                                    initialY: e.clientY,
                                                };
                                                let t = (e) => {
                                                        let t = d.current;
                                                        if (!t) return;
                                                        let r = e.clientX - S.current.initialX,
                                                            n = e.clientY - S.current.initialY;
                                                        p((a) => {
                                                            let i = Math.max(
                                                                    0,
                                                                    Math.min(
                                                                        a.startX + r,
                                                                        t.width / e1 - (a.endX - a.startX),
                                                                    ),
                                                                ),
                                                                o = Math.max(
                                                                    0,
                                                                    Math.min(
                                                                        a.startY + n,
                                                                        t.height / e1 - (a.endY - a.startY),
                                                                    ),
                                                                ),
                                                                _ = i + (a.endX - a.startX),
                                                                s = o + (a.endY - a.startY);
                                                            return (
                                                                (S.current.initialX = e.clientX),
                                                                (S.current.initialY = e.clientY),
                                                                {
                                                                    startX: i,
                                                                    startY: o,
                                                                    endX: _,
                                                                    endY: s,
                                                                }
                                                            );
                                                        });
                                                    },
                                                    r = () => {
                                                        E.removeEventListener("mousemove", t),
                                                            E.removeEventListener("mouseup", r);
                                                    };
                                                E.addEventListener("mousemove", t), E.addEventListener("mouseup", r);
                                            },
                                            style: {
                                                position: "absolute",
                                                cursor: R ? "move" : "auto",
                                            },
                                            ref: d,
                                            __self: this,
                                            __source: {
                                                fileName: e0,
                                                lineNumber: 319,
                                            },
                                        }),
                                        e(s, {
                                            left: I.startX - 3,
                                            top: I.startY - 3,
                                            onGrabButton: O,
                                            corner: "top-left",
                                            __self: this,
                                            __source: {
                                                fileName: e0,
                                                lineNumber: 324,
                                            },
                                        }),
                                        e(s, {
                                            left: I.endX - 30 + 3,
                                            top: I.startY - 3,
                                            onGrabButton: O,
                                            corner: "top-right",
                                            __self: this,
                                            __source: {
                                                fileName: e0,
                                                lineNumber: 330,
                                            },
                                        }),
                                        e(s, {
                                            left: I.startX - 3,
                                            top: I.endY - 30 + 3,
                                            onGrabButton: O,
                                            corner: "bottom-left",
                                            __self: this,
                                            __source: {
                                                fileName: e0,
                                                lineNumber: 336,
                                            },
                                        }),
                                        e(s, {
                                            left: I.endX - 30 + 3,
                                            top: I.endY - 30 + 3,
                                            onGrabButton: O,
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
                                                    left: Math.max(0, I.endX - 191),
                                                    top: Math.max(0, I.endY + 8),
                                                    display: R ? "flex" : "none",
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
                                                                p({
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
                                                a.cancelButtonLabel,
                                            ),
                                            e(
                                                "button",
                                                {
                                                    onClick: (e) => {
                                                        e.preventDefault(),
                                                            (function () {
                                                                let e = E.createElement("canvas"),
                                                                    t = e2(e3(r)),
                                                                    n = e2(I);
                                                                (e.width = n.width * e1), (e.height = n.height * e1);
                                                                let a = e.getContext("2d");
                                                                a &&
                                                                    r &&
                                                                    a.drawImage(
                                                                        r,
                                                                        (n.x / t.width) * r.width,
                                                                        (n.y / t.height) * r.height,
                                                                        (n.width / t.width) * r.width,
                                                                        (n.height / t.height) * r.height,
                                                                        0,
                                                                        0,
                                                                        e.width,
                                                                        e.height,
                                                                    );
                                                                let i = r.getContext("2d");
                                                                i &&
                                                                    (i.clearRect(0, 0, r.width, r.height),
                                                                    (r.width = e.width),
                                                                    (r.height = e.height),
                                                                    (r.style.width = `${n.width}px`),
                                                                    (r.style.height = `${n.height}px`),
                                                                    i.drawImage(e, 0, 0),
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
                                                a.confirmButtonLabel,
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
                    imageBuffer: a,
                    dialog: r,
                    options: n,
                }),
                value: async () => {
                    let e = await new Promise((e) => {
                        a.toBlob(e, "image/png");
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
