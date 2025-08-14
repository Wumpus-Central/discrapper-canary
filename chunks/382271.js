r.d(t, { m: () => S });
var a = r(255367),
    i = r(73800),
    n = r(120356),
    s = r.n(n),
    l = r(442837),
    o = r(257465),
    c = r(667202),
    d = r(780384),
    u = r(481060),
    m = r(493683),
    f = r(37234),
    p = r(518950),
    x = r(819640),
    b = r(626135),
    h = r(63063),
    _ = r(51144),
    j = r(281494),
    g = r(276444),
    R = r(263885),
    v = r(981631),
    E = r(388032),
    C = r(734501),
    y = r(690813);
let N = (e) => {
        let { recipient: t, status: r, onClose: i } = e,
            { avatarSrc: n, eventHandlers: l } = (0, p.Z)({
                userId: null == t ? void 0 : t.id,
                size: u.EFr.SIZE_56,
            }),
            o = _.ZP.getName(t),
            c = r === j.Fz.FAIL;
        return (0, a.jsxs)("div", {
            className: C.trialRecipientRow,
            children: [
                (0, a.jsx)(
                    u.qEK,
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
                            imageClassName: s()({ [C.erroredAvatar]: c }),
                            src: n,
                            "aria-label": o,
                            size: u.EFr.SIZE_32,
                        },
                        l,
                    ),
                ),
                c
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(u.Text, {
                                  className: C.errorDisplayName,
                                  variant: "text-md/medium",
                                  color: "text-primary",
                                  children: o,
                              }),
                              (0, a.jsx)(u.Text, {
                                  variant: "text-md/medium",
                                  className: C.userName,
                                  color: "text-primary",
                                  children: E.intl.format(E.t.RO3T4O, { userName: o }),
                              }),
                          ],
                      })
                    : (0, a.jsx)(u.Text, {
                          variant: "text-md/medium",
                          className: C.trialRecipientRowDisplayName,
                          color: "text-primary",
                          children: o,
                      }),
                (0, a.jsx)(u.zxk, {
                    variant: "secondary",
                    size: "sm",
                    text: E.intl.string(E.t["E+yYpq"]),
                    icon: u.kBi,
                    onClick: () => {
                        var e;
                        return (
                            (e = t.id),
                            void (x.Z.hasLayers() && (0, f.xf)(), m.Z.openPrivateChannel({ recipientIds: e }), i())
                        );
                    },
                }),
            ],
        });
    },
    S = (e) => {
        let { results: t, onClose: r } = e,
            n = (0, l.e7)([g.Z], () => g.Z.getReferralsRemaining());
        b.default.track(v.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: s } = i.useContext(d.Sf);
        return null === n
            ? (0, a.jsx)(u.$jN, {})
            : (0, a.jsx)(c.I, {
                  graphic: s.enabled
                      ? {
                            src: y.Z,
                            type: "image",
                        }
                      : {
                            rive: u.p8m,
                            type: "rive",
                        },
                  gradientColor: "nitro-pink",
                  title: (() => {
                      let e = E.intl.string(E.t.Pcb7KC),
                          r = t.filter((e) => e.status === j.Fz.SUCCESS).length;
                      return (
                          n > 0 && (e = E.intl.formatToPlainString(E.t.iWtOfH, { numReferrals: r })),
                          0 === r && (e = E.intl.string(E.t["7VBEub"])),
                          e
                      );
                  })(),
                  subtitle: E.intl.format(E.t.CZaMHh, {
                      days: R.p,
                      helpdeskArticle: h.Z.getArticleURL(v.BhN.REFERRAL_PROGRAM),
                  }),
                  onClose: r,
                  transitionState: o.D.ENTERED,
                  children: (0, a.jsx)("div", {
                      className: C.trialRecipientContainer,
                      children: t.map((e) =>
                          (0, a.jsx)(
                              N,
                              {
                                  recipient: e.recipient,
                                  status: e.status,
                                  onClose: r,
                              },
                              e.recipient.id,
                          ),
                      ),
                  }),
              });
    };
