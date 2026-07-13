"use strict";
n.d(t, { E: () => S, A: () => g });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(834730),
    o = n(140735),
    d = n(707554),
    c = n(349288),
    u = n(174459),
    _ = n(559868),
    E = n(652215),
    A = n(375708);
function h() {
    u.default.track(E.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target: _.Do });
}
function I() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("span", { children: A.intl.string(A.t.OJmNR9) }),
            (0, i.jsx)("br", {}),
            (0, i.jsx)("br", {}),
            (0, i.jsx)("span", {
                children: A.intl.format(A.t.RCYeBL, {
                    blogHook: (e, t) =>
                        (0, i.jsx)(
                            c.Anchor,
                            { onClick: h, target: "_blank", rel: "noreferrer noopener", href: _.Do, children: e },
                            t,
                        ),
                }),
            }),
        ],
    });
}
var f = n(311016),
    p = n(692051),
    T = n(713804),
    m = n(992595);
function g(e) {
    let {
            userBio: t,
            className: n,
            animateOnHoverOrFocusOnly: a = !1,
            isHoveringOrFocusing: o = !1,
            lineClamp: d = 6,
            setLineClamp: c = !0,
            textColor: u,
            userId: _,
        } = e,
        E = r.useMemo(
            () => ((0, f.A)(_) ? (0, i.jsx)(I, {}) : null == t || "" === t ? null : (0, T.parseBioReact)(t)),
            [_, t],
        );
    return null == E
        ? null
        : (0, i.jsx)("div", {
              className: s()(n, m.PT),
              children: (0, i.jsx)(l.E, {
                  variant: "text-sm/normal",
                  lineClamp: c ? d : void 0,
                  color: void 0 !== u ? u : void 0,
                  children: (0, i.jsx)(p.Y.Provider, {
                      value: { disableAnimations: a && !o, disableInteractions: !1 },
                      children: E,
                  }),
              }),
          });
}
function S(e) {
    let t = r.useId(),
        { userBio: n, userId: a } = e;
    return (0, f.A)(a) || (null != n && "" !== n)
        ? (0, i.jsxs)("section", {
              "aria-labelledby": t,
              children: [
                  (0, i.jsx)(o.A, { children: (0, i.jsx)(d.H, { id: t, children: A.intl.string(A.t.ZzAR2Y) }) }),
                  (0, i.jsx)(g, { ...e }),
              ],
          })
        : null;
}
