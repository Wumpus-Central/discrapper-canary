n.d(t, { E: () => A, A: () => _ });
var a = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(834730),
    o = n(28863),
    d = n(174459),
    c = n(559868),
    u = n(652215),
    f = n(375708);
function m() {
    d.default.track(u.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target: c.Do });
}
function g() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { children: f.intl.string(f.t.OJmNR9) }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)("br", {}),
            (0, a.jsx)("span", {
                children: f.intl.format(f.t.RCYeBL, {
                    blogHook: (e, t) =>
                        (0, a.jsx)(
                            o.Anchor,
                            { onClick: m, target: "_blank", rel: "noreferrer noopener", href: c.Do, children: e },
                            t,
                        ),
                }),
            }),
        ],
    });
}
var E = n(311016),
    p = n(692051),
    b = n(713804),
    h = n(900179),
    x = n(165648);
function _(e) {
    let {
            userBio: t,
            className: n,
            animateOnHoverOrFocusOnly: r = !1,
            isHoveringOrFocusing: o = !1,
            lineClamp: d = 6,
            setLineClamp: c = !0,
            textColor: u,
            userId: f,
        } = e,
        m = l.useMemo(
            () => ((0, E.A)(f) ? (0, a.jsx)(g, {}) : null == t || "" === t ? null : (0, b.parseBioReact)(t)),
            [f, t],
        );
    return null == m
        ? null
        : (0, a.jsx)("div", {
              className: s()(n, x.PT),
              children: (0, a.jsx)(i.E, {
                  variant: "text-sm/normal",
                  lineClamp: c ? d : void 0,
                  color: void 0 !== u ? u : void 0,
                  children: (0, a.jsx)(p.Y.Provider, {
                      value: { disableAnimations: r && !o, disableInteractions: !1 },
                      children: m,
                  }),
              }),
          });
}
function A(e) {
    let { userBio: t, userId: n } = e;
    return (0, E.A)(n) || (null != t && "" !== t)
        ? (0, a.jsx)(h.A, { heading: f.intl.string(f.t.ZzAR2Y), hideHeading: !0, children: (0, a.jsx)(_, { ...e }) })
        : null;
}
