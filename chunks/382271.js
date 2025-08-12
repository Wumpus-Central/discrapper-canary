a.d(t, { m: () => w });
var r = a(255367),
    i = a(73800),
    n = a(120356),
    s = a.n(n),
    l = a(442837),
    o = a(257465),
    c = a(667202),
    d = a(780384),
    u = a(481060),
    m = a(493683),
    p = a(37234),
    f = a(518950),
    x = a(819640),
    b = a(626135),
    h = a(63063),
    _ = a(51144),
    R = a(281494),
    j = a(276444),
    g = a(263885),
    v = a(981631),
    C = a(388032),
    E = a(323889),
    N = a(690813);
let S = (e, t) => {
        x.Z.hasLayers() && (0, p.xf)(), m.Z.openPrivateChannel({ recipientIds: e }), t();
    },
    y = (e) => {
        let { recipient: t, status: a, onClose: i } = e,
            { avatarSrc: n, eventHandlers: l } = (0, f.Z)({
                userId: null == t ? void 0 : t.id,
                size: u.EFr.SIZE_56,
            }),
            o = _.ZP.getName(t),
            c = a === R.Fz.FAIL;
        return (0, r.jsxs)("div", {
            className: E.trialRecipientRow,
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
                            imageClassName: s()({ [E.erroredAvatar]: c }),
                            src: n,
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
                                  className: E.errorDisplayName,
                                  variant: "text-md/medium",
                                  color: "text-primary",
                                  children: o,
                              }),
                              (0, r.jsx)(u.Text, {
                                  variant: "text-md/medium",
                                  className: E.userName,
                                  color: "text-primary",
                                  children: C.intl.format(C.t.RO3T4O, { userName: o }),
                              }),
                          ],
                      })
                    : (0, r.jsx)(u.Text, {
                          variant: "text-md/medium",
                          className: E.trialRecipientRowDisplayName,
                          color: "text-primary",
                          children: o,
                      }),
                (0, r.jsxs)(u.P3F, {
                    onClick: () => S(t.id, i),
                    className: E.trialRecipientRowDMContainer,
                    children: [
                        (0, r.jsx)(u.kBi, {
                            width: 16,
                            height: 16,
                            size: "custom",
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/medium",
                            className: E.trialRecipientRowDMCTA,
                            color: "text-secondary",
                            children: C.intl.string(C.t["E+yYpq"]),
                        }),
                    ],
                }),
            ],
        });
    },
    w = (e) => {
        let { results: t, onClose: a } = e,
            n = (0, l.e7)([j.Z], () => j.Z.getReferralsRemaining());
        b.default.track(v.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: s } = i.useContext(d.Sf);
        return null === n
            ? (0, r.jsx)(u.$jN, {})
            : (0, r.jsx)(c.I, {
                  graphic:
                      (s.enabled,
                      {
                          src: N.Z,
                          type: "image",
                      }),
                  title: (() => {
                      let e = C.intl.string(C.t.Pcb7KC),
                          a = t.filter((e) => e.status === R.Fz.SUCCESS).length;
                      return (
                          n > 0 && (e = C.intl.formatToPlainString(C.t.iWtOfH, { numReferrals: a })),
                          0 === a && (e = C.intl.string(C.t["7VBEub"])),
                          e
                      );
                  })(),
                  subtitle: C.intl.format(C.t.CZaMHh, {
                      days: g.p,
                      helpdeskArticle: h.Z.getArticleURL(v.BhN.REFERRAL_PROGRAM),
                  }),
                  onClose: a,
                  transitionState: o.D.ENTERED,
                  children: (0, r.jsx)("div", {
                      className: E.trialRecipientContainer,
                      children: t.map((e) =>
                          (0, r.jsx)(
                              y,
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
