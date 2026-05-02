n.d(t, { E: () => A, A: () => x });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(834730),
    o = n(140735),
    d = n(707554),
    u = n(349288),
    c = n(174459),
    E = n(559868),
    _ = n(652215),
    m = n(375708);
let g = () => {
    c.default.track(_.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target: E.Do });
};
function p() {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("span", { children: m.intl.string(m.t.OJmNR9) }),
            (0, l.jsx)("br", {}),
            (0, l.jsx)("br", {}),
            (0, l.jsx)("span", {
                children: m.intl.format(m.t.RCYeBL, {
                    blogHook: (e, t) =>
                        (0, l.jsx)(
                            u.Anchor,
                            { onClick: g, target: "_blank", rel: "noreferrer noopener", href: E.Do, children: e },
                            t,
                        ),
                }),
            }),
        ],
    });
}
var f = n(311016),
    h = n(692051),
    R = n(713804),
    v = n(992595);
function x(e) {
    let {
            userBio: t,
            className: n,
            animateOnHoverOrFocusOnly: i = !1,
            isHoveringOrFocusing: o = !1,
            lineClamp: d = 6,
            setLineClamp: u = !0,
            textColor: c,
            userId: E,
        } = e,
        _ = r.useMemo(
            () => ((0, f.A)(E) ? (0, l.jsx)(p, {}) : null == t || "" === t ? null : (0, R.parseBioReact)(t)),
            [E, t],
        );
    return null == _
        ? null
        : (0, l.jsx)("div", {
              className: a()(n, v.PT),
              children: (0, l.jsx)(s.E, {
                  variant: "text-sm/normal",
                  lineClamp: u ? d : void 0,
                  color: void 0 !== c ? c : void 0,
                  children: (0, l.jsx)(h.Y.Provider, {
                      value: { disableAnimations: i && !o, disableInteractions: !1 },
                      children: _,
                  }),
              }),
          });
}
function A(e) {
    let t = r.useId(),
        { userBio: n, userId: i } = e;
    return (0, f.A)(i) || (null != n && "" !== n)
        ? (0, l.jsxs)("section", {
              "aria-labelledby": t,
              children: [
                  (0, l.jsx)(o.A, { children: (0, l.jsx)(d.H, { id: t, children: m.intl.string(m.t.ZzAR2Y) }) }),
                  (0, l.jsx)(x, { ...e }),
              ],
          })
        : null;
}
