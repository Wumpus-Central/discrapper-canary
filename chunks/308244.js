n.d(t, { E: () => v, A: () => R });
var a = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(17928),
    o = n(834730),
    d = n(28863),
    c = n(174459),
    u = n(559868),
    f = n(652215),
    m = n(105292);
function g() {
    c.default.track(f.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target: u.Do });
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
                            d.Anchor,
                            { onClick: g, target: "_blank", rel: "noreferrer noopener", href: u.Do, children: e },
                            t,
                        ),
                }),
            }),
        ],
    });
}
var E = n(311016),
    h = n(692051),
    b = n(713804),
    x = n(967198),
    _ = n(900179),
    A = n(165668),
    N = n(165648);
function R(e) {
    let {
            userBio: t,
            className: n,
            animateOnHoverOrFocusOnly: r = !1,
            isHoveringOrFocusing: d = !1,
            lineClamp: c = 6,
            setLineClamp: u = !0,
            textColor: f,
            userId: m,
            guildId: g,
        } = e,
        _ = (0, i.bG)([x.A], () => x.A.getGuildId()),
        R = g ?? _,
        v = l.useMemo(
            () =>
                (0, E.A)(m)
                    ? (0, a.jsx)(p, {})
                    : null == t || "" === t
                      ? null
                      : (0, b.parseBioReact)(t, void 0, { guildId: R }),
            [m, t, R],
        );
    return null == v
        ? null
        : (0, a.jsx)("div", {
              className: s()(n, N.PT, A.z),
              children: (0, a.jsx)(o.E, {
                  variant: "text-sm/normal",
                  lineClamp: u ? c : void 0,
                  color: void 0 !== f ? f : void 0,
                  className: A.w,
                  children: (0, a.jsx)(h.Y.Provider, {
                      value: { disableAnimations: r && !d, disableInteractions: !1 },
                      children: v,
                  }),
              }),
          });
}
function v(e) {
    let { userBio: t, userId: n } = e;
    return (0, E.A)(n) || (null != t && "" !== t)
        ? (0, a.jsx)(_.A, { heading: m.intl.string(m.t.ZzAR2Y), hideHeading: !0, children: (0, a.jsx)(R, { ...e }) })
        : null;
}
