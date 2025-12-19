r.d(e, { default: () => y }), r(388685);
var n = r(54381),
    i = r(473749),
    o = r(793030),
    l = r(481060),
    c = r(313789),
    s = r(518596),
    a = r(51144),
    u = r(80721),
    p = r(282793),
    b = r(981631),
    O = r(353149),
    f = r(388032);
function d(t) {
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
let y = (t) => {
    var e,
        r,
        { subscriptionId: y, invitedUser: g, subscriptionGroupMemberId: j, onClose: m } = t,
        P = (function (t, e) {
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
        [w, h] = (0, i.useState)(!1),
        [I, C] = (0, i.useState)(!1),
        k = async () => {
            C(!0);
            let t = await (0, u.if)(y, g.id, j);
            if ((C(!1), t.ok)) m();
            else {
                var e;
                (null == (e = t.body) ? void 0 : e.code) === p.YW.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED
                    ? v(!0)
                    : h(!0);
            }
        };
    return S
        ? (0, n.jsx)(
              o.Modal,
              d(
                  {
                      size: "md",
                      title: f.intl.string(O.default.grjTat),
                      subtitle: f.intl.string(O.default.VgTgGu),
                      actions: [
                          {
                              text: f.intl.string(O.default["+YO9kw"]),
                              variant: "secondary",
                              onClick: () => {
                                  (0, s.openUserSettings)(c.n.SUBSCRIPTIONS_PANEL, { section: b.oAB.SUBSCRIPTIONS }),
                                      m();
                              },
                          },
                      ],
                      onClose: m,
                  },
                  P,
              ),
          )
        : (0, n.jsx)(
              o.Modal,
              ((e = d(
                  {
                      size: "md",
                      title: f.intl.string(O.default.U439m2),
                      subtitle: f.intl.formatToPlainString(O.default["Sv6+Ox"], {
                          memberName: (0, a.XM)(g),
                          premiumGroupProductName: (0, p.sO)(),
                      }),
                      onClose: m,
                      actions: [
                          {
                              text: f.intl.string(O.default["2blqtw"]),
                              variant: "critical-primary",
                              onClick: k,
                              loading: I,
                          },
                      ],
                  },
                  P,
              )),
              (r = r =
                  {
                      children:
                          w &&
                          (0, n.jsx)(l.M14, {
                              type: "critical",
                              children: f.intl.string(f.t["rTU7/z"]),
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
