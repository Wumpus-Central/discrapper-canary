r.d(e, { default: () => P }), r(388685);
var n = r(54381),
    i = r(473749),
    o = r(793030),
    l = r(481060),
    s = r(493773),
    c = r(313789),
    a = r(518596),
    u = r(626135),
    d = r(51144),
    p = r(80721),
    b = r(282793),
    O = r(981631),
    f = r(353149),
    y = r(388032);
function g(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable;
                }),
            )),
            n.forEach(function (e) {
                var n;
                (n = r[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = n);
            });
    }
    return t;
}
let P = (t) => {
    var e,
        r,
        { subscriptionId: P, invitedUser: _, subscriptionGroupMemberId: j, onClose: m } = t,
        I = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                i = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        i = {},
                        o = Object.keys(t);
                    for (n = 0; n < o.length; n++) (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
                    return i;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (n = 0; n < o.length; n++)
                    (r = o[n]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]);
            }
            return i;
        })(t, ["subscriptionId", "invitedUser", "subscriptionGroupMemberId", "onClose"]);
    let [S, v] = (0, i.useState)(!1),
        [C, E] = (0, i.useState)(!1),
        [w, h] = (0, i.useState)(!1);
    (0, s.ZP)(() => {
        u.default.track(O.rMx.PREMIUM_GROUP_CANCEL_INVITE_MODAL_VIEWED, {
            subscription_id: P,
            invited_user_id: _.id,
        });
    });
    let k = async () => {
        u.default.track(O.rMx.PREMIUM_GROUP_CANCEL_INVITE_CTA_CLICKED, {
            subscription_id: P,
            invited_user_id: _.id,
        }),
            h(!0);
        let t = await (0, p.if)(P, _.id, j);
        if ((h(!1), t.ok)) m();
        else {
            var e;
            (null == (e = t.body) ? void 0 : e.code) === b.YW.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED
                ? v(!0)
                : E(!0);
        }
    };
    return S
        ? (0, n.jsx)(
              o.Modal,
              g(
                  {
                      size: "md",
                      title: y.intl.string(f.default.grjTat),
                      subtitle: y.intl.string(f.default.VgTgGu),
                      actions: [
                          {
                              text: y.intl.string(f.default["+YO9kw"]),
                              variant: "secondary",
                              onClick: () => {
                                  (0, a.openUserSettings)(c.n.SUBSCRIPTIONS_PANEL, { section: O.oAB.SUBSCRIPTIONS }),
                                      m();
                              },
                          },
                      ],
                      onClose: m,
                  },
                  I,
              ),
          )
        : (0, n.jsx)(
              o.Modal,
              ((e = g(
                  {
                      size: "md",
                      title: y.intl.string(f.default.U439m2),
                      subtitle: y.intl.formatToPlainString(f.default["Sv6+Ox"], {
                          memberName: (0, d.XM)(_),
                          premiumGroupProductName: (0, b.sO)(),
                      }),
                      onClose: m,
                      actions: [
                          {
                              text: y.intl.string(f.default["2blqtw"]),
                              variant: "critical-primary",
                              onClick: k,
                              loading: w,
                          },
                      ],
                  },
                  I,
              )),
              (r = r =
                  {
                      children:
                          C &&
                          (0, n.jsx)(l.M14, {
                              type: "critical",
                              children: y.intl.string(y.t["rTU7/z"]),
                          }),
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                  : (function (t, e) {
                        var r = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(t);
                            r.push.apply(r, n);
                        }
                        return r;
                    })(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    }),
              e),
          );
};
