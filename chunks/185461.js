a.d(e, {
    U0: () => t6,
    fA: () => y,
    gS: () => tQ,
    qm: () => w,
    rp: () => U
});
var r = a(263449),
    n = a(425930),
    o = a(899517),
    _ = a(467510),
    i = a(622916),
    c = a(26506);
let s = o.n,
    E = s.document,
    l = s.navigator,
    u = 'Report a Bug',
    I = 'Cancel',
    R = 'Send Bug Report',
    d = 'Confirm',
    A = 'Report a Bug',
    f = 'your.email@example.org',
    p = 'Email',
    T = "What's the bug? What did you expect?",
    N = 'Description',
    L = 'Your Name',
    h = 'Name',
    O = 'Thank you for your report!',
    D = '(required)',
    g = 'Add a screenshot',
    m = 'Remove screenshot',
    y = (t, e = { includeReplay: !0 }) => {
        if (!t.message) throw Error('Unable to submit feedback with empty message');
        let a = (0, r.s3)();
        if (!a) throw Error('No client setup, cannot send feedback.');
        t.tags && Object.keys(t.tags).length && (0, r.nZ)().setTags(t.tags);
        let o = (0, n.N)(
            {
                source: 'api',
                url: (0, _.l4)(),
                ...t
            },
            e
        );
        return new Promise((t, e) => {
            let r = setTimeout(() => e('Unable to determine if Feedback was correctly sent.'), 5000),
                n = a.on('afterSendEvent', (a, _) => (a.event_id !== o ? void 0 : (clearTimeout(r), n(), _ && 'number' == typeof _.statusCode && _.statusCode >= 200 && _.statusCode < 300 && t(o), _ && 'number' == typeof _.statusCode && 0 === _.statusCode) ? e('Unable to send Feedback. This is because of network issues, or because you are using an ad-blocker.') : e('Unable to send Feedback. This could be because of network issues, or because you are using an ad-blocker')));
        });
    },
    P = 'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
function v(t, e) {
    return {
        ...t,
        ...e,
        tags: {
            ...t.tags,
            ...e.tags
        },
        onFormOpen: () => {
            e.onFormOpen && e.onFormOpen(), t.onFormOpen && t.onFormOpen();
        },
        onFormClose: () => {
            e.onFormClose && e.onFormClose(), t.onFormClose && t.onFormClose();
        },
        onSubmitSuccess: (a) => {
            e.onSubmitSuccess && e.onSubmitSuccess(a), t.onSubmitSuccess && t.onSubmitSuccess(a);
        },
        onSubmitError: (a) => {
            e.onSubmitError && e.onSubmitError(a), t.onSubmitError && t.onSubmitError(a);
        },
        onFormSubmitted: () => {
            e.onFormSubmitted && e.onFormSubmitted(), t.onFormSubmitted && t.onFormSubmitted();
        },
        themeDark: {
            ...t.themeDark,
            ...e.themeDark
        },
        themeLight: {
            ...t.themeLight,
            ...e.themeLight
        }
    };
}
function C(t, e) {
    return (
        Object.entries(e).forEach(([e, a]) => {
            t.setAttributeNS(null, e, a);
        }),
        t
    );
}
let S = 'rgba(88, 74, 192, 1)',
    G = {
        foreground: '#2b2233',
        background: '#ffffff',
        accentForeground: 'white',
        accentBackground: S,
        successColor: '#268d75',
        errorColor: '#df3338',
        border: '1.5px solid rgba(41, 35, 47, 0.13)',
        boxShadow: '0px 4px 24px 0px rgba(43, 34, 51, 0.12)',
        outline: '1px auto var(--accent-background)',
        interactiveFilter: 'brightness(95%)'
    },
    b = {
        foreground: '#ebe6ef',
        background: '#29232f',
        accentForeground: 'white',
        accentBackground: S,
        successColor: '#2da98c',
        errorColor: '#f55459',
        border: '1.5px solid rgba(235, 230, 239, 0.15)',
        boxShadow: '0px 4px 24px 0px rgba(43, 34, 51, 0.12)',
        outline: '1px auto var(--accent-background)',
        interactiveFilter: 'brightness(150%)'
    };
function M(t) {
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
let U =
    ({ lazyLoadIntegration: t, getModalIntegration: e, getScreenshotIntegration: a }) =>
    ({
        id: n = 'sentry-feedback',
        autoInject: o = !0,
        showBranding: _ = !0,
        isEmailRequired: S = !1,
        isNameRequired: U = !1,
        showEmail: w = !0,
        showName: B = !0,
        enableScreenshot: W = !0,
        useSentryUser: Y = {
            email: 'email',
            name: 'username'
        },
        tags: H,
        colorScheme: K = 'system',
        themeLight: k = {},
        themeDark: x = {},
        addScreenshotButtonLabel: F = g,
        cancelButtonLabel: V = I,
        confirmButtonLabel: j = d,
        emailLabel: X = p,
        emailPlaceholder: $ = f,
        formTitle: q = A,
        isRequiredLabel: z = D,
        messageLabel: J = N,
        messagePlaceholder: Z = T,
        nameLabel: Q = h,
        namePlaceholder: tt = L,
        removeScreenshotButtonLabel: te = m,
        submitButtonLabel: ta = R,
        successMessageText: tr = O,
        triggerLabel: tn = u,
        triggerAriaLabel: to = '',
        onFormOpen: t_,
        onFormClose: ti,
        onSubmitSuccess: tc,
        onSubmitError: ts,
        onFormSubmitted: tE
    } = {}) => {
        let tl = {
                id: n,
                autoInject: o,
                showBranding: _,
                isEmailRequired: S,
                isNameRequired: U,
                showEmail: w,
                showName: B,
                enableScreenshot: W,
                useSentryUser: Y,
                tags: H,
                colorScheme: K,
                themeDark: x,
                themeLight: k,
                triggerLabel: tn,
                triggerAriaLabel: to,
                cancelButtonLabel: V,
                submitButtonLabel: ta,
                confirmButtonLabel: j,
                formTitle: q,
                emailLabel: X,
                emailPlaceholder: $,
                messageLabel: J,
                messagePlaceholder: Z,
                nameLabel: Q,
                namePlaceholder: tt,
                successMessageText: tr,
                isRequiredLabel: z,
                addScreenshotButtonLabel: F,
                removeScreenshotButtonLabel: te,
                onFormClose: ti,
                onFormOpen: t_,
                onSubmitError: ts,
                onSubmitSuccess: tc,
                onFormSubmitted: tE
            },
            tu = null,
            tI = [],
            tR = (t) => {
                if (!tu) {
                    let e = E.createElement('div');
                    (e.id = String(t.id)),
                        E.body.appendChild(e),
                        (tu = e.attachShadow({ mode: 'open' })).appendChild(
                            (function ({ colorScheme: t, themeDark: e, themeLight: a }) {
                                let r = E.createElement('style');
                                return (
                                    (r.textContent = `
:host {
  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 14px;
  --z-index: 100000;

  --page-margin: 16px;
  --inset: auto 0 0 auto;
  --actor-inset: var(--inset);

  font-family: var(--font-family);
  font-size: var(--font-size);

  ${'system' !== t ? 'color-scheme: only light;' : ''}

  ${M(
      'dark' === t
          ? {
                ...b,
                ...e
            }
          : {
                ...G,
                ...a
            }
  )}
}

${
    'system' === t
        ? `
@media (prefers-color-scheme: dark) {
  :host {
    ${M({
        ...b,
        ...e
    })}
  }
}`
        : ''
}
}
`),
                                    r
                                );
                            })(t)
                        );
                }
                return tu;
            },
            td = async (e, a, n) => {
                let o = (0, r.s3)(),
                    _ = o && o.getIntegrationByName(e);
                if (_) return _;
                let i = ((a && a()) || (await t(n)))();
                return o && o.addIntegration(i), i;
            },
            tA = async (t) => {
                let r = t.enableScreenshot && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(l.userAgent) || (/Macintosh/i.test(l.userAgent) && l.maxTouchPoints && l.maxTouchPoints > 1)) && !!isSecureContext,
                    [n, o] = await Promise.all([td('FeedbackModal', e, 'feedbackModalIntegration'), r ? td('FeedbackScreenshot', a, 'feedbackScreenshotIntegration') : void 0]);
                if (!n) throw (P && i.kg.error('[Feedback] Missing feedback modal integration. Try using `feedbackSyncIntegration` in your `Sentry.init`.'), Error('[Feedback] Missing feedback modal integration!'));
                return (
                    r && !o && P && i.kg.error('[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.'),
                    n.createDialog({
                        options: t,
                        screenshotIntegration: r ? o : void 0,
                        sendFeedback: y,
                        shadow: tR(t)
                    })
                );
            },
            tf = (t, e = {}) => {
                let a = v(tl, e),
                    r = 'string' == typeof t ? E.querySelector(t) : 'function' == typeof t.addEventListener ? t : null;
                if (!r) throw (P && i.kg.error('[Feedback] Unable to attach to target element'), Error('Unable to attach to target element'));
                let n = null,
                    o = async () => {
                        n ||
                            (n = await tA({
                                ...a,
                                onFormClose: () => {
                                    n && n.close(), a.onFormClose && a.onFormClose();
                                },
                                onFormSubmitted: () => {
                                    n && n.removeFromDom(), a.onFormSubmitted && a.onFormSubmitted();
                                }
                            })),
                            n.appendToDom(),
                            n.open();
                    };
                r.addEventListener('click', o);
                let _ = () => {
                    (tI = tI.filter((t) => t !== _)), n && n.removeFromDom(), (n = null), r.removeEventListener('click', o);
                };
                return tI.push(_), _;
            },
            tp = (t = {}) => {
                let e = v(tl, t),
                    a = tR(e),
                    r = (function ({ triggerLabel: t, triggerAriaLabel: e, shadow: a }) {
                        let r = E.createElement('button');
                        if (
                            ((r.type = 'button'),
                            (r.className = 'widget__actor'),
                            (r.ariaHidden = 'false'),
                            (r.ariaLabel = e || t || u),
                            r.appendChild(
                                (function () {
                                    let t = (t) => s.document.createElementNS('http://www.w3.org/2000/svg', t),
                                        e = C(t('svg'), {
                                            width: '20',
                                            height: '20',
                                            viewBox: '0 0 20 20',
                                            fill: 'var(--foreground)'
                                        }),
                                        a = C(t('g'), { clipPath: 'url(#clip0_57_80)' }),
                                        r = C(t('path'), {
                                            'fill-rule': 'evenodd',
                                            'clip-rule': 'evenodd',
                                            d: 'M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z'
                                        });
                                    e.appendChild(a).appendChild(r);
                                    let n = t('defs'),
                                        o = C(t('clipPath'), { id: 'clip0_57_80' }),
                                        _ = C(t('rect'), {
                                            width: '20',
                                            height: '20',
                                            fill: 'white'
                                        });
                                    return o.appendChild(_), n.appendChild(o), e.appendChild(n).appendChild(o).appendChild(_), e;
                                })()
                            ),
                            t)
                        ) {
                            let e = E.createElement('span');
                            e.appendChild(E.createTextNode(t)), r.appendChild(e);
                        }
                        let n = (function () {
                            let t = E.createElement('style');
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
                            el: r,
                            appendToDom() {
                                a.appendChild(n), a.appendChild(r);
                            },
                            removeFromDom() {
                                a.removeChild(r), a.removeChild(n);
                            },
                            show() {
                                r.ariaHidden = 'false';
                            },
                            hide() {
                                r.ariaHidden = 'true';
                            }
                        };
                    })({
                        triggerLabel: e.triggerLabel,
                        triggerAriaLabel: e.triggerAriaLabel,
                        shadow: a
                    });
                return (
                    tf(r.el, {
                        ...e,
                        onFormOpen() {
                            r.hide();
                        },
                        onFormClose() {
                            r.show();
                        },
                        onFormSubmitted() {
                            r.show();
                        }
                    }),
                    r
                );
            };
        return {
            name: 'Feedback',
            setupOnce() {
                (0, c.j)() && tl.autoInject && ('loading' === E.readyState ? E.addEventListener('DOMContentLoaded', () => tp().appendToDom()) : tp().appendToDom());
            },
            attachTo: tf,
            createWidget(t = {}) {
                let e = tp(v(tl, t));
                return e.appendToDom(), e;
            },
            createForm: async (t = {}) => tA(v(tl, t)),
            remove() {
                tu && (tu.parentElement && tu.parentElement.remove(), (tu = null)), tI.forEach((t) => t()), (tI = []);
            }
        };
    };
function w() {
    let t = (0, r.s3)();
    return t && t.getIntegrationByName('Feedback');
}
var B,
    W,
    Y,
    H,
    K,
    k,
    x,
    F = {},
    V = [],
    j = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    X = Array.isArray;
function $(t, e) {
    for (var a in e) t[a] = e[a];
    return t;
}
function q(t) {
    var e = t.parentNode;
    e && e.removeChild(t);
}
function z(t, e, a) {
    var r,
        n,
        o,
        _ = {};
    for (o in e) 'key' == o ? (r = e[o]) : 'ref' == o ? (n = e[o]) : (_[o] = e[o]);
    if ((arguments.length > 2 && (_.children = arguments.length > 3 ? B.call(arguments, 2) : a), 'function' == typeof t && null != t.defaultProps)) for (o in t.defaultProps) void 0 === _[o] && (_[o] = t.defaultProps[o]);
    return J(t, _, r, n, null);
}
function J(t, e, a, r, n) {
    var o = {
        type: t,
        props: e,
        key: a,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: null == n ? ++Y : n,
        __i: -1,
        __u: 0
    };
    return null == n && null != W.vnode && W.vnode(o), o;
}
function Z(t) {
    return t.children;
}
function Q(t, e) {
    (this.props = t), (this.context = e);
}
function tt(t, e) {
    if (null == e) return t.__ ? tt(t.__, t.__i + 1) : null;
    for (var a; e < t.__k.length; e++) if (null != (a = t.__k[e]) && null != a.__e) return a.__e;
    return 'function' == typeof t.type ? tt(t) : null;
}
function te(t) {
    ((!t.__d && (t.__d = !0) && H.push(t) && !ta.__r++) || K !== W.debounceRendering) && ((K = W.debounceRendering) || k)(ta);
}
function ta() {
    var t,
        e,
        a,
        r = [],
        n = [];
    for (H.sort(x); (t = H.shift()); )
        t.__d &&
            ((a = H.length),
            (e =
                (function (t, e, a) {
                    var r,
                        n = t.__v,
                        o = n.__e,
                        _ = t.__P;
                    if (_)
                        return (
                            ((r = $({}, n)).__v = n.__v + 1),
                            W.vnode && W.vnode(r),
                            tc(_, r, n, t.__n, void 0 !== _.ownerSVGElement, 32 & n.__u ? [o] : null, e, null == o ? tt(n) : o, !!(32 & n.__u), a),
                            (r.__.__k[r.__i] = r),
                            (r.__d = void 0),
                            r.__e != o &&
                                (function t(e) {
                                    var a, r;
                                    if (null != (e = e.__) && null != e.__c) {
                                        for (e.__e = e.__c.base = null, a = 0; a < e.__k.length; a++)
                                            if (null != (r = e.__k[a]) && null != r.__e) {
                                                e.__e = e.__c.base = r.__e;
                                                break;
                                            }
                                        return t(e);
                                    }
                                })(r),
                            r
                        );
                })(t, r, n) || e),
            0 === a || H.length > a ? (ts(r, e, n), (n.length = r.length = 0), (e = void 0), H.sort(x)) : e && W.__c && W.__c(e, V));
    e && ts(r, e, n), (ta.__r = 0);
}
function tr(t, e, a, r, n, o, _, i, c, s, E) {
    var l,
        u,
        I,
        R,
        d,
        A = (r && r.__k) || V,
        f = e.length;
    for (
        a.__d = c,
            (function (t, e, a) {
                var r,
                    n,
                    o,
                    _,
                    i,
                    c = e.length,
                    s = a.length,
                    E = s,
                    l = 0;
                for (t.__k = [], r = 0; r < c; r++)
                    null != (n = t.__k[r] = null == (n = e[r]) || 'boolean' == typeof n || 'function' == typeof n ? null : 'string' == typeof n || 'number' == typeof n || 'bigint' == typeof n || n.constructor == String ? J(null, n, null, null, n) : X(n) ? J(Z, { children: n }, null, null, null) : void 0 === n.constructor && n.__b > 0 ? J(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n)
                        ? ((n.__ = t),
                          (n.__b = t.__b + 1),
                          (i = (function (t, e, a, r) {
                              var n = t.key,
                                  o = t.type,
                                  _ = a - 1,
                                  i = a + 1,
                                  c = e[a];
                              if (null === c || (c && n == c.key && o === c.type)) return a;
                              if (r > (null != c && 0 == (131072 & c.__u) ? 1 : 0))
                                  for (; _ >= 0 || i < e.length; ) {
                                      if (_ >= 0) {
                                          if ((c = e[_]) && 0 == (131072 & c.__u) && n == c.key && o === c.type) return _;
                                          _--;
                                      }
                                      if (i < e.length) {
                                          if ((c = e[i]) && 0 == (131072 & c.__u) && n == c.key && o === c.type) return i;
                                          i++;
                                      }
                                  }
                              return -1;
                          })(n, a, (_ = r + l), E)),
                          (n.__i = i),
                          (o = null),
                          -1 !== i && (E--, (o = a[i]) && (o.__u |= 131072)),
                          null == o || null === o.__v ? (-1 == i && l--, 'function' != typeof n.type && (n.__u |= 65536)) : i !== _ && (i === _ + 1 ? l++ : i > _ ? (E > c - _ ? (l += i - _) : l--) : (l = i < _ && i == _ - 1 ? i - _ : 0), i !== r + l && (n.__u |= 65536)))
                        : (o = a[r]) && null == o.key && o.__e && (o.__e == t.__d && (t.__d = tt(o)), tl(o, o, !1), (a[r] = null), E--);
                if (E) for (r = 0; r < s; r++) null != (o = a[r]) && 0 == (131072 & o.__u) && (o.__e == t.__d && (t.__d = tt(o)), tl(o, o));
            })(a, e, A),
            c = a.__d,
            l = 0;
        l < f;
        l++
    )
        null != (I = a.__k[l]) &&
            'boolean' != typeof I &&
            'function' != typeof I &&
            ((u = -1 === I.__i ? F : A[I.__i] || F),
            (I.__i = l),
            tc(t, I, u, n, o, _, i, c, s, E),
            (R = I.__e),
            I.ref && u.ref != I.ref && (u.ref && tE(u.ref, null, I), E.push(I.ref, I.__c || R, I)),
            null == d && null != R && (d = R),
            65536 & I.__u || u.__k === I.__k
                ? (c = (function t(e, a, r) {
                      var n, o;
                      if ('function' == typeof e.type) {
                          for (n = e.__k, o = 0; n && o < n.length; o++) n[o] && ((n[o].__ = e), (a = t(n[o], a, r)));
                          return a;
                      }
                      e.__e != a && (r.insertBefore(e.__e, a || null), (a = e.__e));
                      do a = a && a.nextSibling;
                      while (null != a && 8 === a.nodeType);
                      return a;
                  })(I, c, t))
                : 'function' == typeof I.type && void 0 !== I.__d
                  ? (c = I.__d)
                  : R && (c = R.nextSibling),
            (I.__d = void 0),
            (I.__u &= -196609));
    (a.__d = c), (a.__e = d);
}
function tn(t, e, a) {
    '-' === e[0] ? t.setProperty(e, null == a ? '' : a) : (t[e] = null == a ? '' : 'number' != typeof a || j.test(e) ? a : a + 'px');
}
function to(t, e, a, r, n) {
    var o;
    e: if ('style' === e) {
        if ('string' == typeof a) t.style.cssText = a;
        else {
            if (('string' == typeof r && (t.style.cssText = r = ''), r)) for (e in r) (a && e in a) || tn(t.style, e, '');
            if (a) for (e in a) (r && a[e] === r[e]) || tn(t.style, e, a[e]);
        }
    } else if ('o' === e[0] && 'n' === e[1]) (o = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, '$1'))), (e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2)), t.l || (t.l = {}), (t.l[e + o] = a), a ? (r ? (a.u = r.u) : ((a.u = Date.now()), t.addEventListener(e, o ? ti : t_, o))) : t.removeEventListener(e, o ? ti : t_, o);
    else {
        if (n) e = e.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
        else if ('width' !== e && 'height' !== e && 'href' !== e && 'list' !== e && 'form' !== e && 'tabIndex' !== e && 'download' !== e && 'rowSpan' !== e && 'colSpan' !== e && 'role' !== e && e in t)
            try {
                t[e] = null == a ? '' : a;
                break e;
            } catch (t) {}
        'function' == typeof a || (null == a || (!1 === a && '-' !== e[4]) ? t.removeAttribute(e) : t.setAttribute(e, a));
    }
}
function t_(t) {
    if (this.l) {
        var e = this.l[t.type + !1];
        if (t.t) {
            if (t.t <= e.u) return;
        } else t.t = Date.now();
        return e(W.event ? W.event(t) : t);
    }
}
function ti(t) {
    if (this.l) return this.l[t.type + !0](W.event ? W.event(t) : t);
}
function tc(t, e, a, r, n, o, _, i, c, s) {
    var E,
        l,
        u,
        I,
        R,
        d,
        A,
        f,
        p,
        T,
        N,
        L,
        h,
        O,
        D,
        g = e.type;
    if (void 0 !== e.constructor) return null;
    128 & a.__u && ((c = !!(32 & a.__u)), (o = [(i = e.__e = a.__e)])), (E = W.__b) && E(e);
    e: if ('function' == typeof g)
        try {
            if (((f = e.props), (p = (E = g.contextType) && r[E.__c]), (T = E ? (p ? p.props.value : E.__) : r), a.__c ? (A = (l = e.__c = a.__c).__ = l.__E) : ('prototype' in g && g.prototype.render ? (e.__c = l = new g(f, T)) : ((e.__c = l = new Q(f, T)), (l.constructor = g), (l.render = tu)), p && p.sub(l), (l.props = f), l.state || (l.state = {}), (l.context = T), (l.__n = r), (u = l.__d = !0), (l.__h = []), (l._sb = [])), null == l.__s && (l.__s = l.state), null != g.getDerivedStateFromProps && (l.__s == l.state && (l.__s = $({}, l.__s)), $(l.__s, g.getDerivedStateFromProps(f, l.__s))), (I = l.props), (R = l.state), (l.__v = e), u)) null == g.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(), null != l.componentDidMount && l.__h.push(l.componentDidMount);
            else {
                if ((null == g.getDerivedStateFromProps && f !== I && null != l.componentWillReceiveProps && l.componentWillReceiveProps(f, T), !l.__e && ((null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(f, l.__s, T)) || e.__v === a.__v))) {
                    for (
                        e.__v !== a.__v && ((l.props = f), (l.state = l.__s), (l.__d = !1)),
                            e.__e = a.__e,
                            e.__k = a.__k,
                            e.__k.forEach(function (t) {
                                t && (t.__ = e);
                            }),
                            N = 0;
                        N < l._sb.length;
                        N++
                    )
                        l.__h.push(l._sb[N]);
                    (l._sb = []), l.__h.length && _.push(l);
                    break e;
                }
                null != l.componentWillUpdate && l.componentWillUpdate(f, l.__s, T),
                    null != l.componentDidUpdate &&
                        l.__h.push(function () {
                            l.componentDidUpdate(I, R, d);
                        });
            }
            if (((l.context = T), (l.props = f), (l.__P = t), (l.__e = !1), (L = W.__r), (h = 0), 'prototype' in g && g.prototype.render)) {
                for (l.state = l.__s, l.__d = !1, L && L(e), E = l.render(l.props, l.state, l.context), O = 0; O < l._sb.length; O++) l.__h.push(l._sb[O]);
                l._sb = [];
            } else
                do (l.__d = !1), L && L(e), (E = l.render(l.props, l.state, l.context)), (l.state = l.__s);
                while (l.__d && ++h < 25);
            (l.state = l.__s), null != l.getChildContext && (r = $($({}, r), l.getChildContext())), u || null == l.getSnapshotBeforeUpdate || (d = l.getSnapshotBeforeUpdate(I, R)), tr(t, X((D = null != E && E.type === Z && null == E.key ? E.props.children : E)) ? D : [D], e, a, r, n, o, _, i, c, s), (l.base = e.__e), (e.__u &= -161), l.__h.length && _.push(l), A && (l.__E = l.__ = null);
        } catch (t) {
            (e.__v = null), c || null != o ? ((e.__e = i), (e.__u |= c ? 160 : 32), (o[o.indexOf(i)] = null)) : ((e.__e = a.__e), (e.__k = a.__k)), W.__e(t, e, a);
        }
    else
        null == o && e.__v === a.__v
            ? ((e.__k = a.__k), (e.__e = a.__e))
            : (e.__e = (function (t, e, a, r, n, o, _, i, c) {
                  var s,
                      E,
                      l,
                      u,
                      I,
                      R,
                      d,
                      A = a.props,
                      f = e.props,
                      p = e.type;
                  if (('svg' === p && (n = !0), null != o)) {
                      for (s = 0; s < o.length; s++)
                          if ((I = o[s]) && 'setAttribute' in I == !!p && (p ? I.localName === p : 3 === I.nodeType)) {
                              (t = I), (o[s] = null);
                              break;
                          }
                  }
                  if (null == t) {
                      if (null === p) return document.createTextNode(f);
                      (t = n ? document.createElementNS('http://www.w3.org/2000/svg', p) : document.createElement(p, f.is && f)), (o = null), (i = !1);
                  }
                  if (null === p) A === f || (i && t.data === f) || (t.data = f);
                  else {
                      if (((o = o && B.call(t.childNodes)), (A = a.props || F), !i && null != o)) for (A = {}, s = 0; s < t.attributes.length; s++) A[(I = t.attributes[s]).name] = I.value;
                      for (s in A) (I = A[s]), 'children' == s || ('dangerouslySetInnerHTML' == s ? (l = I) : 'key' === s || s in f || to(t, s, null, I, n));
                      for (s in f) (I = f[s]), 'children' == s ? (u = I) : 'dangerouslySetInnerHTML' == s ? (E = I) : 'value' == s ? (R = I) : 'checked' == s ? (d = I) : 'key' === s || (i && 'function' != typeof I) || A[s] === I || to(t, s, I, A[s], n);
                      if (E) i || (l && (E.__html === l.__html || E.__html === t.innerHTML)) || (t.innerHTML = E.__html), (e.__k = []);
                      else if ((l && (t.innerHTML = ''), tr(t, X(u) ? u : [u], e, a, r, n && 'foreignObject' !== p, o, _, o ? o[0] : a.__k && tt(a, 0), i, c), null != o)) for (s = o.length; s--; ) null != o[s] && q(o[s]);
                      i || ((s = 'value'), void 0 === R || (R === t[s] && ('progress' !== p || R) && ('option' !== p || R === A[s])) || to(t, s, R, A[s], !1), (s = 'checked'), void 0 !== d && d !== t[s] && to(t, s, d, A[s], !1));
                  }
                  return t;
              })(a.__e, e, a, r, n, o, _, c, s));
    (E = W.diffed) && E(e);
}
function ts(t, e, a) {
    for (var r = 0; r < a.length; r++) tE(a[r], a[++r], a[++r]);
    W.__c && W.__c(e, t),
        t.some(function (e) {
            try {
                (t = e.__h),
                    (e.__h = []),
                    t.some(function (t) {
                        t.call(e);
                    });
            } catch (t) {
                W.__e(t, e.__v);
            }
        });
}
function tE(t, e, a) {
    try {
        'function' == typeof t ? t(e) : (t.current = e);
    } catch (t) {
        W.__e(t, a);
    }
}
function tl(t, e, a) {
    var r, n;
    if ((W.unmount && W.unmount(t), (r = t.ref) && ((r.current && r.current !== t.__e) || tE(r, null, e)), null != (r = t.__c))) {
        if (r.componentWillUnmount)
            try {
                r.componentWillUnmount();
            } catch (t) {
                W.__e(t, e);
            }
        (r.base = r.__P = null), (t.__c = void 0);
    }
    if ((r = t.__k)) for (n = 0; n < r.length; n++) r[n] && tl(r[n], e, a || 'function' != typeof t.type);
    a || null == t.__e || q(t.__e), (t.__ = t.__e = t.__d = void 0);
}
function tu(t, e, a) {
    return this.constructor(t, a);
}
(B = V.slice),
    (W = {
        __e: function (t, e, a, r) {
            for (var n, o, _; (e = e.__); )
                if ((n = e.__c) && !n.__)
                    try {
                        if (((o = n.constructor) && null != o.getDerivedStateFromError && (n.setState(o.getDerivedStateFromError(t)), (_ = n.__d)), null != n.componentDidCatch && (n.componentDidCatch(t, r || {}), (_ = n.__d)), _)) return (n.__E = n);
                    } catch (e) {
                        t = e;
                    }
            throw t;
        }
    }),
    (Y = 0),
    (Q.prototype.setState = function (t, e) {
        var a;
        (a = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = $({}, this.state))), 'function' == typeof t && (t = t($({}, a), this.props)), t && $(a, t), null != t && this.__v && (e && this._sb.push(e), te(this));
    }),
    (Q.prototype.forceUpdate = function (t) {
        this.__v && ((this.__e = !0), t && this.__h.push(t), te(this));
    }),
    (Q.prototype.render = Z),
    (H = []),
    (k = 'function' == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
    (x = function (t, e) {
        return t.__v.__b - e.__v.__b;
    }),
    (ta.__r = 0);
var tI,
    tR,
    td,
    tA,
    tf = 0,
    tp = [],
    tT = [],
    tN = W,
    tL = tN.__b,
    th = tN.__r,
    tO = tN.diffed,
    tD = tN.__c,
    tg = tN.unmount,
    tm = tN.__;
function ty(t, e) {
    tN.__h && tN.__h(tR, t, tf || e), (tf = 0);
    var a =
        tR.__H ||
        (tR.__H = {
            __: [],
            __h: []
        });
    return t >= a.__.length && a.__.push({ __V: tT }), a.__[t];
}
function tP(t) {
    return (tf = 1), tv(tW, t);
}
function tv(t, e, a) {
    var r = ty(tI++, 2);
    if (
        ((r.t = t),
        !r.__c &&
            ((r.__ = [
                a ? a(e) : tW(void 0, e),
                function (t) {
                    var e = r.__N ? r.__N[0] : r.__[0],
                        a = r.t(e, t);
                    e !== a && ((r.__N = [a, r.__[1]]), r.__c.setState({}));
                }
            ]),
            (r.__c = tR),
            !tR.u))
    ) {
        var n = function (t, e, a) {
            if (!r.__c.__H) return !0;
            var n = r.__c.__H.__.filter(function (t) {
                return !!t.__c;
            });
            if (
                n.every(function (t) {
                    return !t.__N;
                })
            )
                return !o || o.call(this, t, e, a);
            var _ = !1;
            return (
                n.forEach(function (t) {
                    if (t.__N) {
                        var e = t.__[0];
                        (t.__ = t.__N), (t.__N = void 0), e !== t.__[0] && (_ = !0);
                    }
                }),
                !(!_ && r.__c.props === t) && (!o || o.call(this, t, e, a))
            );
        };
        tR.u = !0;
        var o = tR.shouldComponentUpdate,
            _ = tR.componentWillUpdate;
        (tR.componentWillUpdate = function (t, e, a) {
            if (this.__e) {
                var r = o;
                (o = void 0), n(t, e, a), (o = r);
            }
            _ && _.call(this, t, e, a);
        }),
            (tR.shouldComponentUpdate = n);
    }
    return r.__N || r.__;
}
function tC(t, e) {
    var a = ty(tI++, 4);
    !tN.__s && tB(a.__H, e) && ((a.__ = t), (a.i = e), tR.__h.push(a));
}
function tS(t, e) {
    var a = ty(tI++, 7);
    return tB(a.__H, e) ? ((a.__V = t()), (a.i = e), (a.__h = t), a.__V) : a.__;
}
function tG(t, e) {
    return (
        (tf = 8),
        tS(function () {
            return t;
        }, e)
    );
}
function tb() {
    for (var t; (t = tp.shift()); )
        if (t.__P && t.__H)
            try {
                t.__H.__h.forEach(tU), t.__H.__h.forEach(tw), (t.__H.__h = []);
            } catch (e) {
                (t.__H.__h = []), tN.__e(e, t.__v);
            }
}
(tN.__b = function (t) {
    (tR = null), tL && tL(t);
}),
    (tN.__ = function (t, e) {
        e.__k && e.__k.__m && (t.__m = e.__k.__m), tm && tm(t, e);
    }),
    (tN.__r = function (t) {
        th && th(t), (tI = 0);
        var e = (tR = t.__c).__H;
        e &&
            (td === tR
                ? ((e.__h = []),
                  (tR.__h = []),
                  e.__.forEach(function (t) {
                      t.__N && (t.__ = t.__N), (t.__V = tT), (t.__N = t.i = void 0);
                  }))
                : (e.__h.forEach(tU), e.__h.forEach(tw), (e.__h = []), (tI = 0))),
            (td = tR);
    }),
    (tN.diffed = function (t) {
        tO && tO(t);
        var e = t.__c;
        e &&
            e.__H &&
            (e.__H.__h.length &&
                ((1 !== tp.push(e) && tA === tN.requestAnimationFrame) ||
                    (
                        (tA = tN.requestAnimationFrame) ||
                        function (t) {
                            var e,
                                a = function () {
                                    clearTimeout(r), tM && cancelAnimationFrame(e), setTimeout(t);
                                },
                                r = setTimeout(a, 100);
                            tM && (e = requestAnimationFrame(a));
                        }
                    )(tb)),
            e.__H.__.forEach(function (t) {
                t.i && (t.__H = t.i), t.__V !== tT && (t.__ = t.__V), (t.i = void 0), (t.__V = tT);
            })),
            (td = tR = null);
    }),
    (tN.__c = function (t, e) {
        e.some(function (t) {
            try {
                t.__h.forEach(tU),
                    (t.__h = t.__h.filter(function (t) {
                        return !t.__ || tw(t);
                    }));
            } catch (a) {
                e.some(function (t) {
                    t.__h && (t.__h = []);
                }),
                    (e = []),
                    tN.__e(a, t.__v);
            }
        }),
            tD && tD(t, e);
    }),
    (tN.unmount = function (t) {
        tg && tg(t);
        var e,
            a = t.__c;
        a &&
            a.__H &&
            (a.__H.__.forEach(function (t) {
                try {
                    tU(t);
                } catch (t) {
                    e = t;
                }
            }),
            (a.__H = void 0),
            e && tN.__e(e, a.__v));
    });
var tM = 'function' == typeof requestAnimationFrame;
function tU(t) {
    var e = tR,
        a = t.__c;
    'function' == typeof a && ((t.__c = void 0), a()), (tR = e);
}
function tw(t) {
    var e = tR;
    (t.__c = t.__()), (tR = e);
}
function tB(t, e) {
    return (
        !t ||
        t.length !== e.length ||
        e.some(function (e, a) {
            return e !== t[a];
        })
    );
}
function tW(t, e) {
    return 'function' == typeof e ? e(t) : e;
}
let tY = {
        __proto__: null,
        useCallback: tG,
        useContext: function (t) {
            var e = tR.context[t.__c],
                a = ty(tI++, 9);
            return (a.c = t), e ? (null == a.__ && ((a.__ = !0), e.sub(tR)), e.props.value) : t.__;
        },
        useDebugValue: function (t, e) {
            tN.useDebugValue && tN.useDebugValue(e ? e(t) : t);
        },
        useEffect: function (t, e) {
            var a = ty(tI++, 3);
            !tN.__s && tB(a.__H, e) && ((a.__ = t), (a.i = e), tR.__H.__h.push(a));
        },
        useErrorBoundary: function (t) {
            var e = ty(tI++, 10),
                a = tP();
            return (
                (e.__ = t),
                tR.componentDidCatch ||
                    (tR.componentDidCatch = function (t, r) {
                        e.__ && e.__(t, r), a[1](t);
                    }),
                [
                    a[0],
                    function () {
                        a[1](void 0);
                    }
                ]
            );
        },
        useId: function () {
            var t = ty(tI++, 11);
            if (!t.__) {
                for (var e = tR.__v; null !== e && !e.__m && null !== e.__; ) e = e.__;
                var a = e.__m || (e.__m = [0, 0]);
                t.__ = 'P' + a[0] + '-' + a[1]++;
            }
            return t.__;
        },
        useImperativeHandle: function (t, e, a) {
            (tf = 6),
                tC(
                    function () {
                        return 'function' == typeof t
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
                    null == a ? a : a.concat(t)
                );
        },
        useLayoutEffect: tC,
        useMemo: tS,
        useReducer: tv,
        useRef: function (t) {
            return (
                (tf = 5),
                tS(function () {
                    return { current: t };
                }, [])
            );
        },
        useState: tP
    },
    tH = '/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/components/DialogHeader.tsx';
function tK({ options: t }) {
    let e = tS(
        () => ({
            __html: (function () {
                let t = (t) => E.createElementNS('http://www.w3.org/2000/svg', t),
                    e = C(t('svg'), {
                        width: '32',
                        height: '30',
                        viewBox: '0 0 72 66',
                        fill: 'inherit'
                    }),
                    a = C(t('path'), {
                        transform: 'translate(11, 11)',
                        d: 'M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z'
                    });
                return e.appendChild(a), e;
            })().outerHTML
        }),
        []
    );
    return z(
        'h2',
        {
            class: 'dialog__header',
            __self: this,
            __source: {
                fileName: tH,
                lineNumber: 16
            }
        },
        t.formTitle,
        t.showBranding
            ? z('a', {
                  class: 'brand-link',
                  target: '_blank',
                  href: 'https://sentry.io/welcome/',
                  title: 'Powered by Sentry',
                  rel: 'noopener noreferrer',
                  dangerouslySetInnerHTML: e,
                  __self: this,
                  __source: {
                      fileName: tH,
                      lineNumber: 19
                  }
              })
            : null
    );
}
let tk = '/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/components/Form.tsx';
function tx(t, e) {
    let a = t.get(e);
    return 'string' == typeof a ? a.trim() : '';
}
function tF({ options: t, defaultEmail: e, defaultName: a, onFormClose: r, onSubmit: n, onSubmitSuccess: o, onSubmitError: _, showEmail: c, showName: s, screenshotInput: E }) {
    let { tags: l, addScreenshotButtonLabel: u, removeScreenshotButtonLabel: I, cancelButtonLabel: R, emailLabel: d, emailPlaceholder: A, isEmailRequired: f, isNameRequired: p, messageLabel: T, messagePlaceholder: N, nameLabel: L, namePlaceholder: h, submitButtonLabel: O, isRequiredLabel: D } = t,
        [g, m] = tP(null),
        [y, v] = tP(!1),
        C = E && E.input,
        [S, G] = tP(null),
        b = tG((t) => {
            G(t), v(!1);
        }, []),
        M = tG(
            (t) => {
                let e = (function (t, e) {
                    let a = [];
                    return e.isNameRequired && !t.name && a.push(e.nameLabel), e.isEmailRequired && !t.email && a.push(e.emailLabel), t.message || a.push(e.messageLabel), a;
                })(t, {
                    emailLabel: d,
                    isEmailRequired: f,
                    isNameRequired: p,
                    messageLabel: T,
                    nameLabel: L
                });
                return e.length > 0 ? m(`Please enter in the following required fields: ${e.join(', ')}`) : m(null), 0 === e.length;
            },
            [d, f, p, T, L]
        );
    return z(
        'form',
        {
            class: 'form',
            onSubmit: tG(
                async (t) => {
                    try {
                        if ((t.preventDefault(), !(t.target instanceof HTMLFormElement))) return;
                        let e = new FormData(t.target),
                            a = await (E && y ? E.value() : void 0),
                            r = {
                                name: tx(e, 'name'),
                                email: tx(e, 'email'),
                                message: tx(e, 'message'),
                                attachments: a ? [a] : void 0
                            };
                        if (!M(r)) return;
                        try {
                            await n(
                                {
                                    name: r.name,
                                    email: r.email,
                                    message: r.message,
                                    source: 'widget',
                                    tags: l
                                },
                                { attachments: r.attachments }
                            ),
                                o(r);
                        } catch (t) {
                            P && i.kg.error(t), m(t), _(t);
                        }
                    } catch (t) {}
                },
                [E && y, o, _]
            ),
            __self: this,
            __source: {
                fileName: tk,
                lineNumber: 144
            }
        },
        C && y
            ? z(C, {
                  onError: b,
                  __self: this,
                  __source: {
                      fileName: tk,
                      lineNumber: 146
                  }
              })
            : null,
        z(
            'div',
            {
                class: 'form__right',
                'data-sentry-feedback': !0,
                __self: this,
                __source: {
                    fileName: tk,
                    lineNumber: 149
                }
            },
            z(
                'div',
                {
                    class: 'form__top',
                    __self: this,
                    __source: {
                        fileName: tk,
                        lineNumber: 150
                    }
                },
                g
                    ? z(
                          'div',
                          {
                              class: 'form__error-container',
                              __self: this,
                              __source: {
                                  fileName: tk,
                                  lineNumber: 151
                              }
                          },
                          g
                      )
                    : null,
                s
                    ? z(
                          'label',
                          {
                              for: 'name',
                              class: 'form__label',
                              __self: this,
                              __source: {
                                  fileName: tk,
                                  lineNumber: 154
                              }
                          },
                          z(tV, {
                              label: L,
                              isRequiredLabel: D,
                              isRequired: p,
                              __self: this,
                              __source: {
                                  fileName: tk,
                                  lineNumber: 155
                              }
                          }),
                          z('input', {
                              class: 'form__input',
                              defaultValue: a,
                              id: 'name',
                              name: 'name',
                              placeholder: h,
                              required: p,
                              type: 'text',
                              __self: this,
                              __source: {
                                  fileName: tk,
                                  lineNumber: 156
                              }
                          })
                      )
                    : z('input', {
                          'aria-hidden': !0,
                          value: a,
                          name: 'name',
                          type: 'hidden',
                          __self: this,
                          __source: {
                              fileName: tk,
                              lineNumber: 167
                          }
                      }),
                c
                    ? z(
                          'label',
                          {
                              for: 'email',
                              class: 'form__label',
                              __self: this,
                              __source: {
                                  fileName: tk,
                                  lineNumber: 171
                              }
                          },
                          z(tV, {
                              label: d,
                              isRequiredLabel: D,
                              isRequired: f,
                              __self: this,
                              __source: {
                                  fileName: tk,
                                  lineNumber: 172
                              }
                          }),
                          z('input', {
                              class: 'form__input',
                              defaultValue: e,
                              id: 'email',
                              name: 'email',
                              placeholder: A,
                              required: f,
                              type: 'email',
                              __self: this,
                              __source: {
                                  fileName: tk,
                                  lineNumber: 173
                              }
                          })
                      )
                    : z('input', {
                          'aria-hidden': !0,
                          value: e,
                          name: 'email',
                          type: 'hidden',
                          __self: this,
                          __source: {
                              fileName: tk,
                              lineNumber: 184
                          }
                      }),
                z(
                    'label',
                    {
                        for: 'message',
                        class: 'form__label',
                        __self: this,
                        __source: {
                            fileName: tk,
                            lineNumber: 187
                        }
                    },
                    z(tV, {
                        label: T,
                        isRequiredLabel: D,
                        isRequired: !0,
                        __self: this,
                        __source: {
                            fileName: tk,
                            lineNumber: 188
                        }
                    }),
                    z('textarea', {
                        autoFocus: !0,
                        class: 'form__input form__input--textarea',
                        id: 'message',
                        name: 'message',
                        placeholder: N,
                        required: !0,
                        rows: 5,
                        __self: this,
                        __source: {
                            fileName: tk,
                            lineNumber: 189
                        }
                    })
                ),
                C
                    ? z(
                          'label',
                          {
                              for: 'screenshot',
                              class: 'form__label',
                              __self: this,
                              __source: {
                                  fileName: tk,
                                  lineNumber: 201
                              }
                          },
                          z(
                              'button',
                              {
                                  class: 'btn btn--default',
                                  type: 'button',
                                  onClick: () => {
                                      G(null), v((t) => !t);
                                  },
                                  __self: this,
                                  __source: {
                                      fileName: tk,
                                      lineNumber: 202
                                  }
                              },
                              y ? I : u
                          ),
                          S
                              ? z(
                                    'div',
                                    {
                                        class: 'form__error-container',
                                        __self: this,
                                        __source: {
                                            fileName: tk,
                                            lineNumber: 212
                                        }
                                    },
                                    S.message
                                )
                              : null
                      )
                    : null
            ),
            z(
                'div',
                {
                    class: 'btn-group',
                    __self: this,
                    __source: {
                        fileName: tk,
                        lineNumber: 216
                    }
                },
                z(
                    'button',
                    {
                        class: 'btn btn--primary',
                        type: 'submit',
                        __self: this,
                        __source: {
                            fileName: tk,
                            lineNumber: 217
                        }
                    },
                    O
                ),
                z(
                    'button',
                    {
                        class: 'btn btn--default',
                        type: 'button',
                        onClick: r,
                        __self: this,
                        __source: {
                            fileName: tk,
                            lineNumber: 220
                        }
                    },
                    R
                )
            )
        )
    );
}
function tV({ label: t, isRequired: e, isRequiredLabel: a }) {
    return z(
        'span',
        {
            class: 'form__label__text',
            __self: this,
            __source: {
                fileName: tk,
                lineNumber: 239
            }
        },
        t,
        e &&
            z(
                'span',
                {
                    class: 'form__label__text--required',
                    __self: this,
                    __source: {
                        fileName: tk,
                        lineNumber: 241
                    }
                },
                a
            )
    );
}
let tj = '/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/components/Dialog.tsx';
function tX({ open: t, onFormSubmitted: e, ...a }) {
    let r = a.options,
        n = tS(
            () => ({
                __html: (function () {
                    let t = (t) => s.document.createElementNS('http://www.w3.org/2000/svg', t),
                        e = C(t('svg'), {
                            width: '16',
                            height: '17',
                            viewBox: '0 0 16 17',
                            fill: 'inherit'
                        }),
                        a = C(t('g'), { clipPath: 'url(#clip0_57_156)' }),
                        r = C(t('path'), {
                            'fill-rule': 'evenodd',
                            'clip-rule': 'evenodd',
                            d: 'M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z'
                        }),
                        n = C(t('path'), { d: 'M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z' });
                    e.appendChild(a).append(n, r);
                    let o = t('defs'),
                        _ = C(t('clipPath'), { id: 'clip0_57_156' }),
                        i = C(t('rect'), {
                            width: '16',
                            height: '16',
                            fill: 'white',
                            transform: 'translate(0 0.5)'
                        });
                    return _.appendChild(i), o.appendChild(_), e.appendChild(o).appendChild(_).appendChild(i), e;
                })().outerHTML
            }),
            []
        ),
        [o, _] = tP(null),
        i = tG(() => {
            o && (clearTimeout(o), _(null)), e();
        }, [o]),
        c = tG(
            (t) => {
                a.onSubmitSuccess(t),
                    _(
                        setTimeout(() => {
                            e(), _(null);
                        }, 5000)
                    );
            },
            [e]
        );
    return z(
        Z,
        {
            __self: this,
            __source: {
                fileName: tj,
                lineNumber: 48
            }
        },
        o
            ? z(
                  'div',
                  {
                      class: 'success__position',
                      onClick: i,
                      __self: this,
                      __source: {
                          fileName: tj,
                          lineNumber: 50
                      }
                  },
                  z(
                      'div',
                      {
                          class: 'success__content',
                          __self: this,
                          __source: {
                              fileName: tj,
                              lineNumber: 51
                          }
                      },
                      r.successMessageText,
                      z('span', {
                          class: 'success__icon',
                          dangerouslySetInnerHTML: n,
                          __self: this,
                          __source: {
                              fileName: tj,
                              lineNumber: 53
                          }
                      })
                  )
              )
            : z(
                  'dialog',
                  {
                      class: 'dialog',
                      onClick: r.onFormClose,
                      open: t,
                      __self: this,
                      __source: {
                          fileName: tj,
                          lineNumber: 57
                      }
                  },
                  z(
                      'div',
                      {
                          class: 'dialog__position',
                          __self: this,
                          __source: {
                              fileName: tj,
                              lineNumber: 58
                          }
                      },
                      z(
                          'div',
                          {
                              class: 'dialog__content',
                              onClick: (t) => {
                                  t.stopPropagation();
                              },
                              __self: this,
                              __source: {
                                  fileName: tj,
                                  lineNumber: 59
                              }
                          },
                          z(tK, {
                              options: r,
                              __self: this,
                              __source: {
                                  fileName: tj,
                                  lineNumber: 66
                              }
                          }),
                          z(tF, {
                              ...a,
                              onSubmitSuccess: c,
                              __self: this,
                              __source: {
                                  fileName: tj,
                                  lineNumber: 67
                              }
                          })
                      )
                  )
              )
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
        name: 'FeedbackModal',
        setupOnce() {},
        createDialog: ({ options: t, screenshotIntegration: e, sendFeedback: a, shadow: n }) => {
            let o = t.useSentryUser,
                _ = (function () {
                    let t = (0, r.nZ)().getUser(),
                        e = (0, r.aF)().getUser(),
                        a = (0, r.lW)().getUser();
                    return t && Object.keys(t).length ? t : e && Object.keys(e).length ? e : a;
                })(),
                i = E.createElement('div'),
                c = (function () {
                    let t = E.createElement('style');
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
                s = '',
                l = {
                    get el() {
                        return i;
                    },
                    appendToDom() {
                        n.contains(c) || n.contains(i) || (n.appendChild(c), n.appendChild(i));
                    },
                    removeFromDom() {
                        n.removeChild(i), n.removeChild(c), (E.body.style.overflow = s);
                    },
                    open() {
                        I(!0), t.onFormOpen && t.onFormOpen(), (s = E.body.style.overflow), (E.body.style.overflow = 'hidden');
                    },
                    close() {
                        I(!1), (E.body.style.overflow = s);
                    }
                },
                u =
                    e &&
                    e.createInput({
                        h: z,
                        hooks: tY,
                        dialog: l,
                        options: t
                    }),
                I = (e) => {
                    var r, n, c, s, E;
                    (r = z(tX, {
                        options: t,
                        screenshotInput: u,
                        showName: t.showName || t.isNameRequired,
                        showEmail: t.showEmail || t.isEmailRequired,
                        defaultName: (o && _ && _[o.name]) || '',
                        defaultEmail: (o && _ && _[o.email]) || '',
                        onFormClose: () => {
                            I(!1), t.onFormClose && t.onFormClose();
                        },
                        onSubmit: a,
                        onSubmitSuccess: (e) => {
                            I(!1), t.onSubmitSuccess && t.onSubmitSuccess(e);
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
                            fileName: '/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/integration.tsx',
                            lineNumber: 67
                        }
                    })),
                        W.__ && W.__(r, i),
                        (c = (n && n.__k) || i.__k),
                        (s = []),
                        (E = []),
                        tc(i, (r = (n || i).__k = z(Z, null, [r])), c || F, F, void 0 !== i.ownerSVGElement, n ? [n] : c ? null : i.firstChild ? B.call(i.childNodes) : null, s, n ? n : c ? c.__e : i.firstChild, !1, E),
                        (r.__d = void 0),
                        ts(s, r, E);
                };
            return l;
        }
    }),
    t0 = '/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/screenshot/components/ScreenshotEditor.tsx',
    t1 = s.devicePixelRatio,
    t2 = (t) => ({
        x: Math.min(t.startX, t.endX),
        y: Math.min(t.startY, t.endY),
        width: Math.abs(t.startX - t.endX),
        height: Math.abs(t.startY - t.endY)
    }),
    t3 = (t) => {
        let e = t.clientHeight,
            a = t.clientWidth,
            r = t.width / t.height,
            n = e * r,
            o = e;
        n > a && ((n = a), (o = a / r));
        let _ = (a - n) / 2,
            i = (e - o) / 2;
        return {
            startX: _,
            startY: i,
            endX: n + _,
            endY: o + i
        };
    },
    t6 = () => ({
        name: 'FeedbackScreenshot',
        setupOnce() {},
        createInput: ({ h: t, hooks: e, dialog: a, options: r }) => {
            let n = E.createElement('canvas');
            return {
                input: (function ({ h: t, hooks: e, imageBuffer: a, dialog: r, options: n }) {
                    let o = (function ({ hooks: t }) {
                        return function ({ onBeforeScreenshot: e, onScreenshot: a, onAfterScreenshot: r, onError: n }) {
                            t.useEffect(() => {
                                (async () => {
                                    e();
                                    let t = await l.mediaDevices.getDisplayMedia({
                                            video: {
                                                width: s.innerWidth * s.devicePixelRatio,
                                                height: s.innerHeight * s.devicePixelRatio
                                            },
                                            audio: !1,
                                            monitorTypeSurfaces: 'exclude',
                                            preferCurrentTab: !0,
                                            selfBrowserSurface: 'include',
                                            surfaceSwitching: 'exclude'
                                        }),
                                        n = E.createElement('video');
                                    await new Promise((e, r) => {
                                        (n.srcObject = t),
                                            (n.onloadedmetadata = () => {
                                                a(n), t.getTracks().forEach((t) => t.stop()), e();
                                            }),
                                            n.play().catch(r);
                                    }),
                                        r();
                                })().catch(n);
                            }, []);
                        };
                    })({ hooks: e });
                    return function ({ onError: _ }) {
                        let i = e.useMemo(
                                () => ({
                                    __html: (function () {
                                        let t = E.createElement('style'),
                                            e = '#1A141F',
                                            a = '#302735';
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
      ${a} 15px,
      ${a} 16px
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
                                    })().innerText
                                }),
                                []
                            ),
                            c = (function ({ h: t }) {
                                return function ({ top: e, left: a, corner: r, onGrabButton: n }) {
                                    return t('button', {
                                        class: `editor__crop-corner editor__crop-corner--${r} `,
                                        style: {
                                            top: e,
                                            left: a
                                        },
                                        onMouseDown: (t) => {
                                            t.preventDefault(), n(t, r);
                                        },
                                        onClick: (t) => {
                                            t.preventDefault();
                                        },
                                        __self: this,
                                        __source: {
                                            fileName: '/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/screenshot/components/CropCorner.tsx',
                                            lineNumber: 22
                                        }
                                    });
                                };
                            })({ h: t }),
                            l = e.useRef(null),
                            u = e.useRef(null),
                            I = e.useRef(null),
                            [R, d] = e.useState({
                                startX: 0,
                                startY: 0,
                                endX: 0,
                                endY: 0
                            }),
                            [A, f] = e.useState(!1),
                            [p, T] = e.useState(!1);
                        function N() {
                            let t = I.current,
                                e = t2(t3(a));
                            if (t) {
                                (t.width = e.width * t1), (t.height = e.height * t1), (t.style.width = `${e.width}px`), (t.style.height = `${e.height}px`);
                                let a = t.getContext('2d');
                                a && a.scale(t1, t1);
                            }
                            let r = u.current;
                            r && ((r.style.width = `${e.width}px`), (r.style.height = `${e.height}px`)),
                                d({
                                    startX: 0,
                                    startY: 0,
                                    endX: e.width,
                                    endY: e.height
                                });
                        }
                        function L(t, e) {
                            f(!1), T(!0);
                            let a = h(e),
                                r = () => {
                                    E.removeEventListener('mousemove', a), E.removeEventListener('mouseup', r), f(!0), T(!1);
                                };
                            E.addEventListener('mouseup', r), E.addEventListener('mousemove', a);
                        }
                        e.useEffect(() => {
                            s.addEventListener('resize', N, !1);
                        }, []),
                            e.useEffect(() => {
                                let t = I.current;
                                if (!t) return;
                                let e = t.getContext('2d');
                                if (!e) return;
                                let r = t2(t3(a)),
                                    n = t2(R);
                                e.clearRect(0, 0, r.width, r.height), (e.fillStyle = 'rgba(0, 0, 0, 0.5)'), e.fillRect(0, 0, r.width, r.height), e.clearRect(n.x, n.y, n.width, n.height), (e.strokeStyle = '#ffffff'), (e.lineWidth = 3), e.strokeRect(n.x + 1, n.y + 1, n.width - 2, n.height - 2), (e.strokeStyle = '#000000'), (e.lineWidth = 1), e.strokeRect(n.x + 3, n.y + 3, n.width - 6, n.height - 6);
                            }, [R]);
                        let h = e.useCallback(
                                (t) =>
                                    function (e) {
                                        if (!I.current) return;
                                        let a = I.current,
                                            r = a.getBoundingClientRect(),
                                            n = e.clientX - r.x,
                                            o = e.clientY - r.y;
                                        switch (t) {
                                            case 'top-left':
                                                d((t) => ({
                                                    ...t,
                                                    startX: Math.min(Math.max(0, n), t.endX - 33),
                                                    startY: Math.min(Math.max(0, o), t.endY - 33)
                                                }));
                                                break;
                                            case 'top-right':
                                                d((t) => ({
                                                    ...t,
                                                    endX: Math.max(Math.min(n, a.width / t1), t.startX + 33),
                                                    startY: Math.min(Math.max(0, o), t.endY - 33)
                                                }));
                                                break;
                                            case 'bottom-left':
                                                d((t) => ({
                                                    ...t,
                                                    startX: Math.min(Math.max(0, n), t.endX - 33),
                                                    endY: Math.max(Math.min(o, a.height / t1), t.startY + 33)
                                                }));
                                                break;
                                            case 'bottom-right':
                                                d((t) => ({
                                                    ...t,
                                                    endX: Math.max(Math.min(n, a.width / t1), t.startX + 33),
                                                    endY: Math.max(Math.min(o, a.height / t1), t.startY + 33)
                                                }));
                                        }
                                    },
                                []
                            ),
                            O = e.useRef({
                                initialX: 0,
                                initialY: 0
                            });
                        return (
                            o({
                                onBeforeScreenshot: e.useCallback(() => {
                                    r.el.style.display = 'none';
                                }, []),
                                onScreenshot: e.useCallback(
                                    (t) => {
                                        let e = a.getContext('2d');
                                        if (!e) throw Error('Could not get canvas context');
                                        (a.width = t.videoWidth), (a.height = t.videoHeight), (a.style.width = '100%'), (a.style.height = '100%'), e.drawImage(t, 0, 0);
                                    },
                                    [a]
                                ),
                                onAfterScreenshot: e.useCallback(() => {
                                    r.el.style.display = 'block';
                                    let t = l.current;
                                    t && t.appendChild(a), N();
                                }, []),
                                onError: e.useCallback((t) => {
                                    (r.el.style.display = 'block'), _(t);
                                }, [])
                            }),
                            t(
                                'div',
                                {
                                    class: 'editor',
                                    __self: this,
                                    __source: {
                                        fileName: t0,
                                        lineNumber: 315
                                    }
                                },
                                t('style', {
                                    dangerouslySetInnerHTML: i,
                                    __self: this,
                                    __source: {
                                        fileName: t0,
                                        lineNumber: 316
                                    }
                                }),
                                t(
                                    'div',
                                    {
                                        class: 'editor__canvas-container',
                                        ref: l,
                                        __self: this,
                                        __source: {
                                            fileName: t0,
                                            lineNumber: 317
                                        }
                                    },
                                    t(
                                        'div',
                                        {
                                            class: 'editor__crop-container',
                                            style: {
                                                position: 'absolute',
                                                zIndex: 1
                                            },
                                            ref: u,
                                            __self: this,
                                            __source: {
                                                fileName: t0,
                                                lineNumber: 318
                                            }
                                        },
                                        t('canvas', {
                                            onMouseDown: function (t) {
                                                if (p) return;
                                                O.current = {
                                                    initialX: t.clientX,
                                                    initialY: t.clientY
                                                };
                                                let e = (t) => {
                                                        let e = I.current;
                                                        if (!e) return;
                                                        let a = t.clientX - O.current.initialX,
                                                            r = t.clientY - O.current.initialY;
                                                        d((n) => {
                                                            let o = Math.max(0, Math.min(n.startX + a, e.width / t1 - (n.endX - n.startX))),
                                                                _ = Math.max(0, Math.min(n.startY + r, e.height / t1 - (n.endY - n.startY))),
                                                                i = o + (n.endX - n.startX),
                                                                c = _ + (n.endY - n.startY);
                                                            return (
                                                                (O.current.initialX = t.clientX),
                                                                (O.current.initialY = t.clientY),
                                                                {
                                                                    startX: o,
                                                                    startY: _,
                                                                    endX: i,
                                                                    endY: c
                                                                }
                                                            );
                                                        });
                                                    },
                                                    a = () => {
                                                        E.removeEventListener('mousemove', e), E.removeEventListener('mouseup', a);
                                                    };
                                                E.addEventListener('mousemove', e), E.addEventListener('mouseup', a);
                                            },
                                            style: {
                                                position: 'absolute',
                                                cursor: A ? 'move' : 'auto'
                                            },
                                            ref: I,
                                            __self: this,
                                            __source: {
                                                fileName: t0,
                                                lineNumber: 319
                                            }
                                        }),
                                        t(c, {
                                            left: R.startX - 3,
                                            top: R.startY - 3,
                                            onGrabButton: L,
                                            corner: 'top-left',
                                            __self: this,
                                            __source: {
                                                fileName: t0,
                                                lineNumber: 324
                                            }
                                        }),
                                        t(c, {
                                            left: R.endX - 30 + 3,
                                            top: R.startY - 3,
                                            onGrabButton: L,
                                            corner: 'top-right',
                                            __self: this,
                                            __source: {
                                                fileName: t0,
                                                lineNumber: 330
                                            }
                                        }),
                                        t(c, {
                                            left: R.startX - 3,
                                            top: R.endY - 30 + 3,
                                            onGrabButton: L,
                                            corner: 'bottom-left',
                                            __self: this,
                                            __source: {
                                                fileName: t0,
                                                lineNumber: 336
                                            }
                                        }),
                                        t(c, {
                                            left: R.endX - 30 + 3,
                                            top: R.endY - 30 + 3,
                                            onGrabButton: L,
                                            corner: 'bottom-right',
                                            __self: this,
                                            __source: {
                                                fileName: t0,
                                                lineNumber: 342
                                            }
                                        }),
                                        t(
                                            'div',
                                            {
                                                style: {
                                                    left: Math.max(0, R.endX - 191),
                                                    top: Math.max(0, R.endY + 8),
                                                    display: A ? 'flex' : 'none'
                                                },
                                                class: 'editor__crop-btn-group',
                                                __self: this,
                                                __source: {
                                                    fileName: t0,
                                                    lineNumber: 348
                                                }
                                            },
                                            t(
                                                'button',
                                                {
                                                    onClick: (t) => {
                                                        t.preventDefault(),
                                                            I.current &&
                                                                d({
                                                                    startX: 0,
                                                                    startY: 0,
                                                                    endX: I.current.width / t1,
                                                                    endY: I.current.height / t1
                                                                }),
                                                            f(!1);
                                                    },
                                                    class: 'btn btn--default',
                                                    __self: this,
                                                    __source: {
                                                        fileName: t0,
                                                        lineNumber: 356
                                                    }
                                                },
                                                n.cancelButtonLabel
                                            ),
                                            t(
                                                'button',
                                                {
                                                    onClick: (t) => {
                                                        t.preventDefault(),
                                                            (function () {
                                                                let t = E.createElement('canvas'),
                                                                    e = t2(t3(a)),
                                                                    r = t2(R);
                                                                (t.width = r.width * t1), (t.height = r.height * t1);
                                                                let n = t.getContext('2d');
                                                                n && a && n.drawImage(a, (r.x / e.width) * a.width, (r.y / e.height) * a.height, (r.width / e.width) * a.width, (r.height / e.height) * a.height, 0, 0, t.width, t.height);
                                                                let o = a.getContext('2d');
                                                                o && (o.clearRect(0, 0, a.width, a.height), (a.width = t.width), (a.height = t.height), (a.style.width = `${r.width}px`), (a.style.height = `${r.height}px`), o.drawImage(t, 0, 0), N());
                                                            })(),
                                                            f(!1);
                                                    },
                                                    class: 'btn btn--primary',
                                                    __self: this,
                                                    __source: {
                                                        fileName: t0,
                                                        lineNumber: 373
                                                    }
                                                },
                                                n.confirmButtonLabel
                                            )
                                        )
                                    )
                                )
                            )
                        );
                    };
                })({
                    h: t,
                    hooks: e,
                    imageBuffer: n,
                    dialog: a,
                    options: r
                }),
                value: async () => {
                    let t = await new Promise((t) => {
                        n.toBlob(t, 'image/png');
                    });
                    if (t)
                        return {
                            data: new Uint8Array(await t.arrayBuffer()),
                            filename: 'screenshot.png',
                            contentType: 'application/png'
                        };
                }
            };
        }
    });
