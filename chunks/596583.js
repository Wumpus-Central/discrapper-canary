r.d(t, { Z: () => O }), r(388685);
var a = r(951288);
r(647438);
var i = r(120356),
    s = r.n(i),
    l = r(512722),
    n = r.n(l),
    o = r(442837),
    C = r(780384),
    d = r(481060),
    p = r(493683),
    c = r(37234),
    h = r(410030),
    u = r(518950),
    f = r(819640),
    x = r(63063),
    _ = r(51144),
    g = r(281494),
    j = r(276444),
    L = r(792451),
    m = r(814667),
    y = r(263885),
    b = r(981631),
    v = r(388032),
    R = r(436931);
let E = (e) => {
        let { user: t, trialCreationResult: r, onClose: i } = e,
            { avatarSrc: l, eventHandlers: n } = (0, u.Z)({
                userId: null == t ? void 0 : t.id,
                size: d.EFr.SIZE_56,
            }),
            o = _.ZP.getName(t),
            C = t.username !== o && r === g.Fz.SUCCESS,
            h = r === g.Fz.FAIL;
        return (0, a.jsxs)("div", {
            className: R.referredUserRowContainer,
            children: [
                (0, a.jsx)(
                    d.qEK,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    }),
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    (a = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = a);
                                });
                        }
                        return e;
                    })(
                        {
                            imageClassName: s()({ [R.erroredAvatar]: h }),
                            src: l,
                            "aria-label": o,
                            size: d.EFr.SIZE_56,
                        },
                        n,
                    ),
                ),
                (0, a.jsxs)("div", {
                    className: R.referredUserRowBody,
                    children: [
                        h
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(d.Text, {
                                          className: R.errorDisplayName,
                                          variant: "text-md/medium",
                                          children: o,
                                      }),
                                      (0, a.jsx)(d.Text, {
                                          variant: "text-md/medium",
                                          className: R.userName,
                                          children: v.intl.format(v.t.RO3T4O, { userName: o }),
                                      }),
                                  ],
                              })
                            : (0, a.jsx)(d.ua7, {
                                  text: v.intl.string(v.t.xkVQPD),
                                  position: "right",
                                  children: (e) => {
                                      let { onMouseEnter: r, onMouseLeave: s } = e;
                                      return (0, a.jsx)(d.P3F, {
                                          onClick: () => {
                                              var e;
                                              return (
                                                  (e = t.id),
                                                  void (f.Z.hasLayers() && (0, c.xf)(),
                                                  p.Z.openPrivateChannel({ recipientIds: e }),
                                                  i())
                                              );
                                          },
                                          className: R.displayNameClickableContainer,
                                          onMouseEnter: r,
                                          onMouseLeave: s,
                                          children: (0, a.jsx)(d.Text, {
                                              variant: "text-md/medium",
                                              className: R.displayName,
                                              children: o,
                                          }),
                                      });
                                  },
                              }),
                        C &&
                            (0, a.jsx)(d.Text, {
                                variant: "text-md/medium",
                                className: R.userName,
                                children: t.username,
                            }),
                    ],
                }),
            ],
        });
    },
    O = (e) => {
        let { selectedUsers: t, trialCreationResult: r, onClose: i } = e,
            s = [...t].map((e) =>
                (0, a.jsx)(
                    E,
                    {
                        user: e,
                        trialCreationResult: r.get(e.id),
                        onClose: i,
                    },
                    e.id,
                ),
            ),
            l = (0, o.e7)([j.Z], () => j.Z.getReferralsRemaining());
        n()(null !== l, "Referrals remaining should not be null");
        let p = (0, h.Fg)(),
            c = (0, C.ap)(p) ? m.Z : L.Z,
            u = v.intl.string(v.t.Pcb7KC),
            f = [...r.values()].filter((e) => e === g.Fz.SUCCESS).length;
        return (
            l > 0 && (u = v.intl.formatToPlainString(v.t.iWtOfH, { numReferrals: f })),
            0 === f && (u = v.intl.string(v.t["7VBEub"])),
            (0, a.jsxs)("div", {
                className: R.confrimationContainer,
                children: [
                    (0, a.jsx)(d.P3F, {
                        onClick: i,
                        className: R.closeButtonContainer,
                        children: (0, a.jsx)(d.Dio, {
                            size: "custom",
                            width: 20,
                            height: 20,
                        }),
                    }),
                    (0, a.jsx)(c, { className: R.headerIcon }),
                    (0, a.jsx)(d.X6q, {
                        variant: "heading-lg/bold",
                        className: R.heading,
                        children: u,
                    }),
                    (0, a.jsx)("div", {
                        className: R.confirmedUserContainer,
                        children: s,
                    }),
                    (0, a.jsx)(d.Text, {
                        variant: "text-md/medium",
                        children: v.intl.format(v.t.CZaMHh, {
                            days: y.p,
                            helpdeskArticle: x.Z.getArticleURL(b.BhN.REFERRAL_PROGRAM),
                        }),
                    }),
                ],
            })
        );
    };
