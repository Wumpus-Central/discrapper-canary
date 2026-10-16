i.d(e, { default: () => T });
var n = i(477900),
    a = i(582128),
    l = i(284009),
    r = i.n(l),
    s = i(17928),
    o = i(224640),
    c = i(289873),
    d = i(315629),
    u = i(20742),
    A = i(297264),
    R = i(834730),
    m = i(696208),
    x = i(793574),
    h = i(688810),
    g = i(174459),
    E = i(975571),
    S = i(427262),
    p = i(326084),
    N = i(851746),
    _ = i(809813),
    f = i(232198),
    H = i(652215),
    M = i(105292),
    C = i(214634),
    b = i(93712),
    j = i(954457);
function I(t) {
    let { transitionState: e, onClose: i, recipient: l, onSendComplete: r, analyticsLocations: x, modalVariant: h } = t,
        _ = (0, s.bG)([N.A], () => N.A.getReferralsRemaining()),
        [I, T] = a.useState(!1),
        [k, L] = a.useState(!1),
        D = a.useRef(!1),
        G = S.Ay.getName(l),
        w =
            h === f.H.HD_STREAMING
                ? M.intl.formatToPlainString(M.t.rdh1ou, { recipientName: G })
                : M.intl.formatToPlainString(M.t.LVlgM4, { recipientName: G }),
        v =
            h === f.H.HD_STREAMING
                ? M.intl.string(M.t.NkgMIP)
                : M.intl.format(M.t["2nw1yD"], { helpdeskArticle: E.A.getArticleURL(H.MVz.REFERRAL_PROGRAM) });
    async function y() {
        if (D.current || null == _ || _ <= 0) return;
        ((D.current = !0),
            T(!0),
            L(!1),
            g.default.track(H.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: x }));
        let t = (await (0, p.xm)([l.id])).get(l.id) ?? p.o.FAIL;
        ((D.current = !1), T(!1), h === f.H.HD_STREAMING && t === p.o.FAIL ? L(!0) : r({ recipient: l, status: t }));
    }
    return null == _
        ? (0, n.jsx)(o.d, {
              transitionState: e,
              onClose: i,
              paddingSize: "lg",
              "aria-label": M.intl.string(M.t.c1wxcb),
              children: (0, n.jsx)("div", { className: C.dc, children: (0, n.jsx)(c.y, {}) }),
          })
        : (0, n.jsxs)(o.d, {
              transitionState: e,
              onClose: i,
              paddingSize: "lg",
              "aria-label": w,
              children: [
                  (0, n.jsxs)(d.h, {
                      color: "nitro-pink",
                      className: C.wx,
                      children: [
                          (0, n.jsx)("div", { className: C.b2, children: (0, n.jsx)(u.s_, { shouldColorMix: !0 }) }),
                          (0, n.jsx)("img", { className: C.c8, src: h === f.H.HD_STREAMING ? b.A : j.A, alt: "" }),
                          (0, n.jsx)(A.D, {
                              variant: "heading-xl/semibold",
                              color: "text-strong",
                              className: C.DD,
                              children: w,
                          }),
                          (0, n.jsx)(R.E, {
                              variant: "text-md/normal",
                              color: "text-subtle",
                              className: C.VA,
                              children: v,
                          }),
                      ],
                  }),
                  k
                      ? (0, n.jsx)(R.E, {
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: M.intl.format(M.t.RO3T4B, { userName: G }),
                        })
                      : null,
                  (0, n.jsx)(m.H, {
                      actions: [
                          { variant: "secondary", text: M.intl.string(M.t["ETE/oC"]), onClick: i, disabled: I },
                          {
                              variant: "primary",
                              text: h === f.H.HD_STREAMING ? M.intl.string(M.t.dzQxHq) : M.intl.string(M.t.ItpQxk),
                              onClick: y,
                              loading: I,
                              disabled: I || 0 === _,
                          },
                      ],
                      actionsFullWidth: !0,
                  }),
              ],
          });
}
let T = function (t) {
    let { transitionState: e, onClose: i, recipient: l, sourceAnalyticsLocation: s, modalVariant: o = f.H.PROFILE } = t,
        [c, d] = a.useState(1),
        [u, A] = a.useState(null),
        { analyticsLocations: R } = (0, h.Ay)([s, x.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    switch (c) {
        case 1:
            return (0, n.jsx)(I, {
                transitionState: e,
                onClose: i,
                recipient: l,
                analyticsLocations: R,
                modalVariant: o,
                onSendComplete: (t) => {
                    (A(t), d(2));
                },
            });
        case 2:
            return (
                r()(null != u, "Trial creation result should be set before showing the confirmation step"),
                (0, n.jsx)(_.TrialsSharedConfirmationModal, {
                    transitionState: e,
                    results: [u],
                    onClose: i,
                    isReminderConfirmation: !1,
                    showRecipientList: !1,
                    recipientName: o === f.H.HD_STREAMING ? S.Ay.getName(l) : void 0,
                })
            );
        default:
            return null;
    }
};
