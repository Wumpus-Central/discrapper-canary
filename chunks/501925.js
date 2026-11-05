n.d(t, { E: () => v, A: () => R });
var a = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    i = n(855986),
    o = n(834730),
    d = n(28863),
    c = n(129230),
    u = n(559868),
    m = n(652215),
    f = n(792996);
function g() {
    c.default.track(m.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target: u.Do });
}
function p() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { children: f.intl.string(f.t.OJmNR9) }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)("br", {}),
            (0, a.jsx)("span", {
                children: f.intl.format(f.t.RCYeBL, {
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
    A = n(900179),
    _ = n(165668),
    N = n(165648);
function R(e) {
    let {
            userBio: t,
            className: n,
            animateOnHoverOrFocusOnly: l = !1,
            isHoveringOrFocusing: d = !1,
            lineClamp: c = 6,
            setLineClamp: u = !0,
            textColor: m,
            userId: f,
            guildId: g,
        } = e,
        A = (0, i.bG)([x.A], () => x.A.getGuildId()),
        R = g ?? A,
        v = r.useMemo(
            () =>
                (0, E.A)(f)
                    ? (0, a.jsx)(p, {})
                    : null == t || "" === t
                      ? null
                      : (0, b.parseBioReact)(t, void 0, { guildId: R }),
            [f, t, R],
        ),
        j = l && !d,
        I = r.useMemo(() => ({ disableAnimations: j, disableInteractions: !1 }), [j]);
    return null == v
        ? null
        : (0, a.jsx)("div", {
              className: s()(n, N.PT, _.z),
              children: (0, a.jsx)(o.E, {
                  variant: "body-sm/normal",
                  lineClamp: u ? c : void 0,
                  color: void 0 !== m ? m : void 0,
                  className: _.w,
                  children: (0, a.jsx)(h.Y.Provider, { value: I, children: v }),
              }),
          });
}
function v(e) {
    let { userBio: t, userId: n } = e;
    return (0, E.A)(n) || (null != t && "" !== t)
        ? (0, a.jsx)(A.A, { heading: f.intl.string(f.t.ZzAR2Y), hideHeading: !0, children: (0, a.jsx)(R, { ...e }) })
        : null;
}
