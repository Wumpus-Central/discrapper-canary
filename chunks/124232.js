r.d(e, {
    default: () => b,
});
var n = r(627968);
r(64700);
var o = r(158954),
    l = r(311907),
    c = r(397927),
    i = r(496431),
    s = r(859703),
    a = r(341915),
    u = r(73473),
    p = r(985018);

function O(t) {
    let { transitionState: e, onClose: r, questEnrollmentBlockedUntil: l } = t,
        { hours: s, minutes: a, seconds: u } = (0, i.A)(l),
        O = String(s).padStart(2, "0"),
        b = String(a).padStart(2, "0"),
        f = String(u).padStart(2, "0"),
        y = "".concat(O, ":").concat(b, ":").concat(f);
    return (0, n.jsx)(o.Modal, {
        size: "sm",
        transitionState: e,
        onClose: r,
        title: p.intl.string(p.t["g+02d5"]),
        actions: [
            {
                variant: "secondary",
                onClick: () => r(),
                text: p.intl.string(p.t.cpT0Cq),
            },
        ],
        children: (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: p.intl.string(p.t["XEHDT/"]),
                }),
                (0, n.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: p.intl.formatToPlainString(p.t["+5XVH+"], {
                        countdownString: y,
                    }),
                }),
            ],
        }),
    });
}

function b(t) {
    let { onClose: e, quest: r, sourceQuestContent: o } = t,
        c = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                o,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(t); o < r.length; o++)
                    (n = r[o]),
                        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (l[n] = t[n]);
                return l;
            }
            if (
                ((l = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        o = {},
                        l = Object.getOwnPropertyNames(t);
                    for (n = 0; n < l.length; n++)
                        (r = l[n]),
                            !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
                    return o;
                })(t, e)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
                    (n = r[o]),
                        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (l[n] = t[n]);
            return l;
        })(t, ["onClose", "quest", "sourceQuestContent"]),
        i = (0, l.bG)([s.A], () => s.A.questEnrollmentBlockedUntil);
    return null == i || null == r
        ? null
        : (0, n.jsx)(u.R, {
              overrideVisibility: !0,
              questOrQuests: r,
              questContent: a.uF.QUEST_ENROLLMENT_BLOCKED_MODAL,
              sourceQuestContent: o,
              children: () => {
                  var t, r;
                  return (0, n.jsx)(
                      O,
                      ((t = (function (t) {
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
                      })({}, c)),
                      (r = r =
                          {
                              onClose: e,
                              questEnrollmentBlockedUntil: i,
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : (function (t, e) {
                                var r = Object.keys(t);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(t);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            }),
                      t),
                  );
              },
          });
}
