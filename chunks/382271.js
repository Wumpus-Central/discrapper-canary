n.d(t, { m: () => P });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(257465),
    c = n(667202),
    u = n(780384),
    d = n(481060),
    f = n(493683),
    _ = n(37234),
    p = n(518950),
    h = n(819640),
    m = n(626135),
    g = n(63063),
    E = n(51144),
    b = n(281494),
    y = n(276444),
    O = n(263885),
    v = n(981631),
    I = n(388032),
    T = n(734501),
    S = n(690813);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
let N = (e, t) => {
        h.Z.hasLayers() && (0, _.xf)(), f.Z.openPrivateChannel({ recipientIds: e }), t();
    },
    R = (e) => {
        let { recipient: t, status: n, onClose: i } = e,
            { avatarSrc: a, eventHandlers: s } = (0, p.Z)({
                userId: null == t ? void 0 : t.id,
                size: d.EFr.SIZE_56,
            }),
            l = E.ZP.getName(t),
            c = n === b.Fz.FAIL;
        return (0, r.jsxs)("div", {
            className: T.trialRecipientRow,
            children: [
                (0, r.jsx)(
                    d.qEK,
                    C(
                        {
                            imageClassName: o()({ [T.erroredAvatar]: c }),
                            src: a,
                            "aria-label": l,
                            size: d.EFr.SIZE_32,
                        },
                        s,
                    ),
                ),
                c
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(d.Text, {
                                  className: T.errorDisplayName,
                                  variant: "text-md/medium",
                                  color: "text-primary",
                                  children: l,
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: "text-md/medium",
                                  className: T.userName,
                                  color: "text-primary",
                                  children: I.intl.format(I.t.RO3T4O, { userName: l }),
                              }),
                          ],
                      })
                    : (0, r.jsx)(d.Text, {
                          variant: "text-md/medium",
                          className: T.trialRecipientRowDisplayName,
                          color: "text-primary",
                          children: l,
                      }),
                (0, r.jsx)(d.zxk, {
                    variant: "secondary",
                    size: "sm",
                    text: I.intl.string(I.t["E+yYpq"]),
                    icon: d.kBi,
                    onClick: () => N(t.id, i),
                }),
            ],
        });
    },
    P = (e) => {
        let { results: t, onClose: n, isReminderConfirmation: a } = e,
            o = (0, s.e7)([y.Z], () => y.Z.getReferralsRemaining());
        m.default.track(v.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: f } = i.useContext(u.Sf);
        if (null === o) return (0, r.jsx)(d.$jN, {});
        let _ = () =>
                f.enabled
                    ? {
                          src: S.Z,
                          type: "image",
                      }
                    : {
                          rive: d.p8m,
                          type: "rive",
                      },
            p = () => {
                let e = t.filter((e) => e.status === b.Fz.SUCCESS).length;
                return 0 === e
                    ? I.intl.string(I.t["7VBEub"])
                    : !0 === a
                      ? I.intl.string(I.t.GP5lbm)
                      : o > 0
                        ? I.intl.formatToPlainString(I.t.iWtOfH, { numReferrals: e })
                        : I.intl.string(I.t.Pcb7KC);
            },
            h = () =>
                !0 === a
                    ? I.intl.format(I.t["4gJJfH"], { helpdeskArticle: g.Z.getArticleURL(v.BhN.REFERRAL_PROGRAM) })
                    : I.intl.format(I.t.CZaMHh, {
                          days: O.p,
                          helpdeskArticle: g.Z.getArticleURL(v.BhN.REFERRAL_PROGRAM),
                      }),
            E = () =>
                (0, r.jsx)("div", {
                    className: T.trialRecipientContainer,
                    children: t.map((e) =>
                        (0, r.jsx)(
                            R,
                            {
                                recipient: e.recipient,
                                status: e.status,
                                onClose: n,
                            },
                            e.recipient.id,
                        ),
                    ),
                });
        return (0, r.jsx)(c.I, {
            graphic: _(),
            gradientColor: "nitro-pink",
            title: p(),
            subtitle: h(),
            onClose: n,
            transitionState: l.D.ENTERED,
            children: E(),
        });
    };
