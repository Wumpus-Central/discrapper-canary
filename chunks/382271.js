a.d(t, { m: () => Z });
var r = a(951288),
    i = a(647438),
    s = a(120356),
    n = a.n(s),
    l = a(442837),
    o = a(257465),
    c = a(667202),
    d = a(780384),
    u = a(481060),
    m = a(493683),
    x = a(37234),
    p = a(518950),
    f = a(819640),
    h = a(626135),
    j = a(63063),
    g = a(51144),
    v = a(281494),
    b = a(276444),
    E = a(263885),
    R = a(981631),
    y = a(388032),
    S = a(734501),
    N = a(690813);
let C = (e) => {
        let { recipient: t, status: a, onClose: i } = e,
            { avatarSrc: s, eventHandlers: l } = (0, p.Z)({
                userId: null == t ? void 0 : t.id,
                size: u.EFr.SIZE_56,
            }),
            o = g.ZP.getName(t),
            c = a === v.Fz.FAIL;
        return (0, r.jsxs)("div", {
            className: S.trialRecipientRow,
            children: [
                (0, r.jsx)(
                    u.qEK,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(a);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(a).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = a[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            imageClassName: n()({ [S.erroredAvatar]: c }),
                            src: s,
                            "aria-label": o,
                            size: u.EFr.SIZE_32,
                        },
                        l,
                    ),
                ),
                c
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.Text, {
                                  className: S.errorDisplayName,
                                  variant: "text-md/medium",
                                  color: "text-primary",
                                  children: o,
                              }),
                              (0, r.jsx)(u.Text, {
                                  variant: "text-md/medium",
                                  className: S.userName,
                                  color: "text-primary",
                                  children: y.intl.format(y.t.RO3T4O, { userName: o }),
                              }),
                          ],
                      })
                    : (0, r.jsx)(u.Text, {
                          variant: "text-md/medium",
                          className: S.trialRecipientRowDisplayName,
                          color: "text-primary",
                          children: o,
                      }),
                (0, r.jsx)(u.zxk, {
                    variant: "secondary",
                    size: "sm",
                    text: y.intl.string(y.t["E+yYpq"]),
                    icon: u.kBi,
                    onClick: () => {
                        var e;
                        return (
                            (e = t.id),
                            void (f.Z.hasLayers() && (0, x.xf)(), m.Z.openPrivateChannel({ recipientIds: e }), i())
                        );
                    },
                }),
            ],
        });
    },
    Z = (e) => {
        let { results: t, onClose: a } = e,
            s = (0, l.e7)([b.Z], () => b.Z.getReferralsRemaining());
        h.default.track(R.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: n } = i.useContext(d.Sf);
        return null === s
            ? (0, r.jsx)(u.$jN, {})
            : (0, r.jsx)(c.I, {
                  graphic: n.enabled
                      ? {
                            src: N.Z,
                            type: "image",
                        }
                      : {
                            rive: u.p8m,
                            type: "rive",
                        },
                  gradientColor: "nitro-pink",
                  title: (() => {
                      let e = y.intl.string(y.t.Pcb7KC),
                          a = t.filter((e) => e.status === v.Fz.SUCCESS).length;
                      return (
                          s > 0 && (e = y.intl.formatToPlainString(y.t.iWtOfH, { numReferrals: a })),
                          0 === a && (e = y.intl.string(y.t["7VBEub"])),
                          e
                      );
                  })(),
                  subtitle: y.intl.format(y.t.CZaMHh, {
                      days: E.p,
                      helpdeskArticle: j.Z.getArticleURL(R.BhN.REFERRAL_PROGRAM),
                  }),
                  onClose: a,
                  transitionState: o.D.ENTERED,
                  children: (0, r.jsx)("div", {
                      className: S.trialRecipientContainer,
                      children: t.map((e) =>
                          (0, r.jsx)(
                              C,
                              {
                                  recipient: e.recipient,
                                  status: e.status,
                                  onClose: a,
                              },
                              e.recipient.id,
                          ),
                      ),
                  }),
              });
    };
