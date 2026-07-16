n.d(t, { E: () => x, A: () => R });
var a = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(834730),
    d = n(140735),
    o = n(707554),
    c = n(349288),
    u = n(174459),
    f = n(559868),
    E = n(652215),
    m = n(375708);
function g() {
    u.default.track(E.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target: f.Do });
}
function p() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { children: m.intl.string(m.t.OJmNR9) }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)("br", {}),
            (0, a.jsx)("span", {
                children: m.intl.format(m.t.RCYeBL, {
                    blogHook: (e, t) =>
                        (0, a.jsx)(
                            c.Anchor,
                            { onClick: g, target: "_blank", rel: "noreferrer noopener", href: f.Do, children: e },
                            t,
                        ),
                }),
            }),
        ],
    });
}
var b = n(311016),
    _ = n(692051),
    h = n(713804),
    A = n(992595);
function R(e) {
    let {
            userBio: t,
            className: n,
            animateOnHoverOrFocusOnly: r = !1,
            isHoveringOrFocusing: d = !1,
            lineClamp: o = 6,
            setLineClamp: c = !0,
            textColor: u,
            userId: f,
        } = e,
        E = l.useMemo(
            () => ((0, b.A)(f) ? (0, a.jsx)(p, {}) : null == t || "" === t ? null : (0, h.parseBioReact)(t)),
            [f, t],
        );
    return null == E
        ? null
        : (0, a.jsx)("div", {
              className: s()(n, A.PT),
              children: (0, a.jsx)(i.E, {
                  variant: "text-sm/normal",
                  lineClamp: c ? o : void 0,
                  color: void 0 !== u ? u : void 0,
                  children: (0, a.jsx)(_.Y.Provider, {
                      value: { disableAnimations: r && !d, disableInteractions: !1 },
                      children: E,
                  }),
              }),
          });
}
function x(e) {
    let t = l.useId(),
        { userBio: n, userId: r } = e;
    return (0, b.A)(r) || (null != n && "" !== n)
        ? (0, a.jsxs)("section", {
              "aria-labelledby": t,
              children: [
                  (0, a.jsx)(d.A, { children: (0, a.jsx)(o.H, { id: t, children: m.intl.string(m.t.ZzAR2Y) }) }),
                  (0, a.jsx)(R, { ...e }),
              ],
          })
        : null;
}
