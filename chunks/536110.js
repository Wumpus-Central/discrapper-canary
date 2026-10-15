i.d(e, { default: () => M });
var n = i(477900),
    a = i(582128),
    l = i(284009),
    s = i.n(l),
    r = i(17928),
    o = i(224640),
    c = i(289873),
    d = i(315629),
    u = i(20742),
    m = i(297264),
    x = i(834730),
    A = i(696208),
    R = i(793574),
    g = i(688810),
    h = i(174459),
    S = i(427262),
    N = i(326084),
    E = i(851746),
    p = i(809813),
    _ = i(232198),
    H = i(652215),
    f = i(105292),
    C = i(214634),
    I = i(93712),
    b = i(954457);
function j(t) {
    let { transitionState: e, onClose: i, recipient: l, onSendComplete: s, analyticsLocations: R, modalVariant: g } = t,
        p = (0, r.bG)([E.A], () => E.A.getReferralsRemaining()),
        [j, M] = a.useState(!1),
        [T, k] = a.useState(!1),
        D = a.useRef(!1),
        L = S.Ay.getName(l),
        G =
            g === _.H.HD_STREAMING
                ? f.intl.formatToPlainString(f.t.rdh1ou, { recipientName: L })
                : f.intl.string(f.t.K2DyeS),
        v =
            g === _.H.HD_STREAMING
                ? f.intl.string(f.t.NkgMIP)
                : f.intl.formatToPlainString(f.t.JNgfIL, { recipientName: L });
    async function w() {
        if (D.current || null == p || p <= 0) return;
        ((D.current = !0),
            M(!0),
            k(!1),
            h.default.track(H.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: R }));
        let t = (await (0, N.xm)([l.id])).get(l.id) ?? N.o.FAIL;
        ((D.current = !1), M(!1), g === _.H.HD_STREAMING && t === N.o.FAIL ? k(!0) : s({ recipient: l, status: t }));
    }
    return null == p
        ? (0, n.jsx)(o.d, {
              transitionState: e,
              onClose: i,
              paddingSize: "lg",
              "aria-label": f.intl.string(f.t.c1wxcb),
              children: (0, n.jsx)("div", { className: C.dc, children: (0, n.jsx)(c.y, {}) }),
          })
        : (0, n.jsxs)(o.d, {
              transitionState: e,
              onClose: i,
              paddingSize: "lg",
              "aria-label": G,
              children: [
                  (0, n.jsxs)(d.h, {
                      color: "nitro-pink",
                      className: C.wx,
                      children: [
                          (0, n.jsx)("div", { className: C.b2, children: (0, n.jsx)(u.s_, { shouldColorMix: !0 }) }),
                          (0, n.jsx)("img", { className: C.c8, src: g === _.H.HD_STREAMING ? I.A : b.A, alt: "" }),
                          (0, n.jsx)(m.D, {
                              variant: "heading-xl/semibold",
                              color: "text-strong",
                              className: C.DD,
                              children: G,
                          }),
                          (0, n.jsx)(x.E, {
                              variant: "text-md/normal",
                              color: "text-subtle",
                              className: C.VA,
                              children: v,
                          }),
                      ],
                  }),
                  T
                      ? (0, n.jsx)(x.E, {
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: f.intl.format(f.t.RO3T4B, { userName: L }),
                        })
                      : null,
                  (0, n.jsx)(A.H, {
                      actions: [
                          { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: i, disabled: j },
                          {
                              variant: "primary",
                              text: g === _.H.HD_STREAMING ? f.intl.string(f.t.dzQxHq) : f.intl.string(f.t.ItpQxk),
                              onClick: w,
                              loading: j,
                              disabled: j || 0 === p,
                          },
                      ],
                      actionsFullWidth: !0,
                  }),
              ],
          });
}
let M = function (t) {
    let { transitionState: e, onClose: i, recipient: l, sourceAnalyticsLocation: r, modalVariant: o = _.H.PROFILE } = t,
        [c, d] = a.useState(1),
        [u, m] = a.useState(null),
        { analyticsLocations: x } = (0, g.Ay)([r, R.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    switch (c) {
        case 1:
            return (0, n.jsx)(j, {
                transitionState: e,
                onClose: i,
                recipient: l,
                analyticsLocations: x,
                modalVariant: o,
                onSendComplete: (t) => {
                    (m(t), d(2));
                },
            });
        case 2:
            return (
                s()(null != u, "Trial creation result should be set before showing the confirmation step"),
                (0, n.jsx)(p.h, {
                    transitionState: e,
                    results: [u],
                    onClose: i,
                    isReminderConfirmation: !1,
                    showRecipientList: !1,
                    recipientName: o === _.H.HD_STREAMING ? S.Ay.getName(l) : void 0,
                })
            );
        default:
            return null;
    }
};
