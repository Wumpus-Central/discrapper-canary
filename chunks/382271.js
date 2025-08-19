r.d(t, { m: () => w });
var a = r(951288),
    s = r(647438),
    n = r(120356),
    i = r.n(n),
    l = r(442837),
    c = r(257465),
    d = r(667202),
    o = r(780384),
    u = r(481060),
    m = r(493683),
    h = r(37234),
    f = r(518950),
    x = r(819640),
    g = r(626135),
    p = r(63063),
    j = r(51144),
    v = r(281494),
    N = r(276444),
    R = r(263885),
    b = r(981631),
    E = r(388032),
    S = r(734501),
    y = r(690813);
let Z = (e) => {
        let { recipient: t, status: r, onClose: s } = e,
            { avatarSrc: n, eventHandlers: l } = (0, f.Z)({
                userId: null == t ? void 0 : t.id,
                size: u.EFr.SIZE_56,
            }),
            c = j.ZP.getName(t),
            d = r === v.Fz.FAIL;
        return (0, a.jsxs)("div", {
            className: S.trialRecipientRow,
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
                            imageClassName: i()({ [S.erroredAvatar]: d }),
                            src: n,
                            "aria-label": c,
                            size: u.EFr.SIZE_32,
                        },
                        l,
                    ),
                ),
                d
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(u.Text, {
                                  className: S.errorDisplayName,
                                  variant: "text-md/medium",
                                  color: "text-primary",
                                  children: c,
                              }),
                              (0, a.jsx)(u.Text, {
                                  variant: "text-md/medium",
                                  className: S.userName,
                                  color: "text-primary",
                                  children: E.intl.format(E.t.RO3T4O, { userName: c }),
                              }),
                          ],
                      })
                    : (0, a.jsx)(u.Text, {
                          variant: "text-md/medium",
                          className: S.trialRecipientRowDisplayName,
                          color: "text-primary",
                          children: c,
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
                            void (x.Z.hasLayers() && (0, h.xf)(), m.Z.openPrivateChannel({ recipientIds: e }), s())
                        );
                    },
                }),
            ],
        });
    },
    w = (e) => {
        let { results: t, onClose: r, isReminderConfirmation: n } = e,
            i = (0, l.e7)([N.Z], () => N.Z.getReferralsRemaining());
        g.default.track(b.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: m } = s.useContext(o.Sf);
        return null === i
            ? (0, a.jsx)(u.$jN, {})
            : (0, a.jsx)(d.I, {
                  graphic: m.enabled
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
                      let e = t.filter((e) => e.status === v.Fz.SUCCESS).length;
                      return 0 === e
                          ? E.intl.string(E.t["7VBEub"])
                          : !0 === n
                            ? E.intl.string(E.t.GP5lbm)
                            : i > 0
                              ? E.intl.formatToPlainString(E.t.iWtOfH, { numReferrals: e })
                              : E.intl.string(E.t.Pcb7KC);
                  })(),
                  subtitle:
                      !0 === n
                          ? E.intl.format(E.t["4gJJfH"], { helpdeskArticle: p.Z.getArticleURL(b.BhN.REFERRAL_PROGRAM) })
                          : E.intl.format(E.t.CZaMHh, {
                                days: R.p,
                                helpdeskArticle: p.Z.getArticleURL(b.BhN.REFERRAL_PROGRAM),
                            }),
                  onClose: r,
                  transitionState: c.D.ENTERED,
                  children: (0, a.jsx)("div", {
                      className: S.trialRecipientContainer,
                      children: t.map((e) =>
                          (0, a.jsx)(
                              Z,
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
