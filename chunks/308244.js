n.d(t, { E: () => v, A: () => R });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(834730),
    d = n(140735),
    o = n(707554),
    c = n(349288),
    u = n(174459),
    f = n(559868),
    m = n(652215),
    E = n(375708);
function _() {
    u.default.track(m.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target: f.Do });
}
function g() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { children: E.intl.string(E.t.OJmNR9) }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)("br", {}),
            (0, a.jsx)("span", {
                children: E.intl.format(E.t.RCYeBL, {
                    blogHook: (e, t) =>
                        (0, a.jsx)(
                            c.Anchor,
                            { onClick: _, target: "_blank", rel: "noreferrer noopener", href: f.Do, children: e },
                            t,
                        ),
                }),
            }),
        ],
    });
}
var p = n(311016),
    b = n(692051),
    h = n(713804),
    A = n(992595);
function R(e) {
    let {
            userBio: t,
            className: n,
            animateOnHoverOrFocusOnly: l = !1,
            isHoveringOrFocusing: d = !1,
            lineClamp: o = 6,
            setLineClamp: c = !0,
            textColor: u,
            userId: f,
        } = e,
        m = r.useMemo(
            () => ((0, p.A)(f) ? (0, a.jsx)(g, {}) : null == t || "" === t ? null : (0, h.parseBioReact)(t)),
            [f, t],
        );
    return null == m
        ? null
        : (0, a.jsx)("div", {
              className: i()(n, A.PT),
              children: (0, a.jsx)(s.E, {
                  variant: "text-sm/normal",
                  lineClamp: c ? o : void 0,
                  color: void 0 !== u ? u : void 0,
                  children: (0, a.jsx)(b.Y.Provider, {
                      value: { disableAnimations: l && !d, disableInteractions: !1 },
                      children: m,
                  }),
              }),
          });
}
function v(e) {
    let t = r.useId(),
        { userBio: n, userId: l } = e;
    return (0, p.A)(l) || (null != n && "" !== n)
        ? (0, a.jsxs)("section", {
              "aria-labelledby": t,
              children: [
                  (0, a.jsx)(d.A, { children: (0, a.jsx)(o.H, { id: t, children: E.intl.string(E.t.ZzAR2Y) }) }),
                  (0, a.jsx)(R, { ...e }),
              ],
          })
        : null;
}
